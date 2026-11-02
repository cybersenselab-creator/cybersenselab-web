import { supabase } from "../lib/supabase";
import type { TableId } from "./tables";

// Image uploads for the three tables that store a single image in a column. Files go to
// `<bucket>/<folder>/<userId>/<uuid>.<ext>`; storage RLS only lets admins write there.

type Target = { bucket: string; folder: string; column: string; maxSize: number };

const TARGETS: Partial<Record<TableId, Target>> = {
  arastirma_alanlari: { bucket: "research-area-images", folder: "research-areas", column: "icon", maxSize: 256 },
  ekip: { bucket: "team-member-images", folder: "team-members", column: "avatar_icon", maxSize: 256 },
  projects: { bucket: "project-images", folder: "projects", column: "image_url", maxSize: 1600 },
};

const EXTENSIONS = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
]);
const MAX_BYTES = 5 * 1024 * 1024;

/** Column holding the uploaded image URL for this table, or null if the table has none. */
export function imageColumn(table: TableId): string | null {
  return TARGETS[table]?.column ?? null;
}

export function validateImageFile(file: File) {
  if (!EXTENSIONS.has(file.type)) throw new Error("Yalnızca JPG, PNG, WebP veya GIF görselleri yükleyebilirsiniz.");
  if (file.size > MAX_BYTES) throw new Error("Görsel boyutu en fazla 5 MB olabilir.");
}

/** Storage path for a URL we uploaded ourselves; null for external URLs or icon names. */
export function ownedStoragePath(table: TableId, url: unknown): string | null {
  const target = TARGETS[table];
  if (!target) return null;
  try {
    const parsed = new URL(String(url || ""));
    const marker = `/storage/v1/object/public/${target.bucket}/`;
    const index = parsed.pathname.indexOf(marker);
    if (index < 0) return null;
    const path = decodeURIComponent(parsed.pathname.slice(index + marker.length));
    return path.startsWith(`${target.folder}/`) ? path : null;
  } catch {
    return null;
  }
}

const isNearWhite = (r: number, g: number, b: number) => {
  const min = Math.min(r, g, b);
  return min >= 225 && Math.max(r, g, b) - min <= 18;
};

/** Makes a near-white background transparent and crops to the content with ~8% padding (square). */
function knockOutWhiteBackground(canvas: HTMLCanvasElement): HTMLCanvasElement {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return canvas;
  const image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let left = canvas.width;
  let top = canvas.height;
  let right = -1;
  let bottom = -1;
  for (let y = 0; y < canvas.height; y += 1) {
    for (let x = 0; x < canvas.width; x += 1) {
      const i = (y * canvas.width + x) * 4;
      if (isNearWhite(image.data[i], image.data[i + 1], image.data[i + 2])) image.data[i + 3] = 0;
      if (image.data[i + 3] > 8) {
        left = Math.min(left, x);
        top = Math.min(top, y);
        right = Math.max(right, x);
        bottom = Math.max(bottom, y);
      }
    }
  }
  ctx.putImageData(image, 0, 0);
  if (right < left || bottom < top) return canvas;

  const width = right - left + 1;
  const height = bottom - top + 1;
  const padding = Math.max(4, Math.round(Math.max(width, height) * 0.08));
  const size = Math.max(width, height) + padding * 2;
  const square = document.createElement("canvas");
  square.width = size;
  square.height = size;
  const squareCtx = square.getContext("2d");
  if (!squareCtx) return canvas;
  squareCtx.drawImage(canvas, left, top, width, height, Math.round((size - width) / 2), Math.round((size - height) / 2), width, height);
  return square;
}

/** Downscales to `maxSize` (longest side) as PNG; GIFs and already-small PNGs pass through. */
async function prepareImage(file: File, maxSize: number, removeBackground = false): Promise<File> {
  if (file.type === "image/gif" || typeof createImageBitmap !== "function") return file;
  const bitmap = await createImageBitmap(file);
  try {
    const scale = Math.min(1, maxSize / Math.max(bitmap.width, bitmap.height));
    if (scale === 1 && file.type === "image/png" && !removeBackground) return file;
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(bitmap.width * scale));
    canvas.height = Math.max(1, Math.round(bitmap.height * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const output = removeBackground ? knockOutWhiteBackground(canvas) : canvas;
    const blob = await new Promise<Blob | null>((resolve) => output.toBlob(resolve, "image/png"));
    if (!blob) return file;
    const base = file.name.replace(/\.[^.]+$/, "") || "research-icon";
    return new File([blob], `${base}.png`, { type: "image/png", lastModified: Date.now() });
  } finally {
    bitmap.close();
  }
}

export async function uploadTableImage(table: TableId, file: File, userId: string) {
  const target = TARGETS[table];
  if (!target) throw new Error("Bu bölüm görsel yüklemeyi desteklemiyor.");
  validateImageFile(file);
  // Research-area icons are logo-like: strip the white background.
  const prepared = await prepareImage(file, target.maxSize, table === "arastirma_alanlari");
  const path = `${target.folder}/${userId}/${crypto.randomUUID()}.${EXTENSIONS.get(prepared.type)}`;
  const bucket = supabase.storage.from(target.bucket);
  const { error } = await bucket.upload(path, prepared, { cacheControl: "3600", contentType: prepared.type, upsert: false });
  if (error) throw error;
  return { path, publicUrl: bucket.getPublicUrl(path).data.publicUrl };
}

export async function removeTableImage(table: TableId, path: string) {
  const target = TARGETS[table];
  if (!target) return;
  const { error } = await supabase.storage.from(target.bucket).remove([path]);
  if (error) throw error;
}
