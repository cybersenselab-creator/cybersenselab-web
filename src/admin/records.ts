import { supabase } from "../lib/supabase";
import { IMAGE_ENTITY_TABLES, type AdminRecord, type TableDef, type TableId } from "./tables";

export type FormData = Record<string, unknown>;

// Thin wrapper so callers don't depend on the generated RPC typings for these generic calls.
type RpcResult = { data: unknown; error: { message: string } | null };
export const rpc = (name: string, args?: Record<string, unknown>) =>
  supabase.rpc(name as never, args as never) as unknown as Promise<RpcResult>;

/** Merges `admin_list_record_images` rows into records as `images` (only URLs are needed by the form). */
export function attachImages(records: AdminRecord[], images: { entity_id: unknown; image_url: string }[]) {
  const byEntity = new Map<string, { image_url: string }[]>();
  for (const image of images) {
    const key = String(image.entity_id);
    const list = byEntity.get(key) || [];
    list.push({ image_url: image.image_url });
    byEntity.set(key, list);
  }
  return records.map((record) => ({ ...record, images: (record.id && byEntity.get(String(record.id))) || [] }));
}

const splitLines = (value: unknown) =>
  String(value || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

/** "Ad Soyad | Rol | https://foto" lines → [{ name, role, avatar_image }]. */
function parseAuthors(value: unknown) {
  return splitLines(value).map((line) => {
    const [name, role, avatar] = line.split("|").map((part) => part.trim());
    if (avatar && !/^https:\/\//i.test(avatar)) throw new Error(`Fotoğraf adresi https:// ile başlamalı: ${line}`);
    return { name, role: role || null, avatar_image: avatar || null };
  });
}

/** Database value → text shown in the form for list-like fields. */
export function toFormText(type: string, value: unknown): string {
  if (type === "lines") return Array.isArray(value) ? value.join("\n") : "";
  if (type === "authors") {
    if (!Array.isArray(value)) return "";
    return value
      .map((author: { name?: string; role?: string | null; avatar_image?: string | null }) =>
        [author.name || "", author.role || "", author.avatar_image || ""].join(" | ").replace(/( \| )+$/, ""),
      )
      .join("\n");
  }
  return String(value ?? "");
}

/** ISO timestamp → value for <input type="datetime-local"> in local time. */
export function toDateTimeInput(value: unknown): string {
  if (!value) return "";
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function toIsoOrNull(value: unknown): string | null {
  if (!value) return null;
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) throw new Error("Geçerli bir tarih ve saat girin.");
  return date.toISOString();
}

/**
 * Creates or updates a record via the admin RPCs, then replaces its image gallery
 * (one URL per line in the virtual `_images` field) for tables that support it.
 */
export async function saveRecord(table: TableId, tableDef: TableDef, editing: AdminRecord | null, form: FormData) {
  const payload: Record<string, unknown> = {};
  for (const field of tableDef.fields) {
    if (field.virtual || (editing && field.createOnly)) continue;
    const value = form[field.name];
    if (field.type === "number") payload[field.name] = value === "" ? null : Number(value);
    else if (field.type === "lines") payload[field.name] = splitLines(value);
    else if (field.type === "authors") payload[field.name] = parseAuthors(value);
    else if (field.type === "checkbox") payload[field.name] = !!value;
    else if (field.type === "datetime-local") payload[field.name] = toIsoOrNull(value);
    else payload[field.name] = value === "" ? null : value;
  }

  let saved: AdminRecord;
  if (editing) {
    const id = table === "site_ayarlari" ? editing.key : editing.id;
    if (!id) throw new Error("Güncellenecek kayıt kimliği bulunamadı.");
    const { data, error } = await rpc("admin_update_record", { p_table: table, p_id: id, p_data: payload });
    if (error) throw error;
    saved = data as AdminRecord;
  } else {
    const { data, error } = await rpc("admin_create_record", { p_table: table, p_data: payload });
    if (error) throw error;
    saved = data as AdminRecord;
  }

  const imagesField = tableDef.fields.find((field) => field.virtual);
  if (imagesField && IMAGE_ENTITY_TABLES.has(table)) {
    if (!saved?.id) throw new Error("Görseller için kayıt kimliği alınamadı.");
    const urls = String(form[imagesField.name] || "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const { error } = await rpc("admin_set_record_images", {
      p_entity_type: table,
      p_entity_id: saved.id,
      p_images: urls.map((image_url, sort_order) => ({ image_url, alt_text: "", sort_order, is_published: true })),
    });
    if (error) throw error;
  }
  return saved;
}

/** Best-effort message from an Error or a Supabase error object. */
export function errorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error) return error.message;
  if (error && typeof error === "object" && "message" in error) return String((error as { message: unknown }).message);
  return fallback;
}
