// DONE 2026-11-02 in production (11 portfolios, 25 files). Kept for history: the source images
// were removed from public/portfolio afterwards, so it cannot run again as-is.
//
// One-off import of the portfolios that used to be hard-coded in the frontend
// (reference/assets/portfolioData.js + public/portfolio/*) into Supabase.
//
// Runs as a normal admin through the same RPCs the admin panel uses — no secret keys:
//
//   SUPABASE_URL=… SUPABASE_PUBLISHABLE_KEY=… ADMIN_EMAIL=… ADMIN_PASSWORD=… \
//     node scripts/import-portfolios.mjs [--dry-run]
//
// Idempotent: portfolios whose slug already exists are skipped. Requires the
// 20261102140000_portfolios.sql migration.
import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";
import legacy from "../reference/assets/portfolioData.js";

const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
const dryRun = process.argv.includes("--dry-run");
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Set SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL and ADMIN_PASSWORD.");
  process.exit(1);
}

const BUCKET = "content-images";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: false } });

// "/assets/portfolio-green-world-01-screens-v2.png" → public/portfolio/green-world-01-screens.png
function localFile(legacyPath) {
  const name = path.basename(legacyPath).replace(/^portfolio-/, "").replace(/-v2(\.[a-z]+)$/, "$1");
  const file = path.join("public", "portfolio", name);
  if (!fs.existsSync(file)) throw new Error(`Missing image ${file} (from ${legacyPath})`);
  return { file, name };
}

const uploaded = new Map();
async function upload(legacyPath, folder) {
  if (uploaded.has(legacyPath)) return uploaded.get(legacyPath);
  const { file, name } = localFile(legacyPath);
  const objectPath = `portfolios/${folder}/${name}`;
  if (!dryRun) {
    const { error } = await supabase.storage
      .from(BUCKET)
      .upload(objectPath, fs.readFileSync(file), { contentType: "image/png", upsert: true });
    if (error) throw new Error(`upload ${objectPath}: ${error.message}`);
  }
  const url = supabase.storage.from(BUCKET).getPublicUrl(objectPath).data.publicUrl;
  uploaded.set(legacyPath, url);
  return url;
}

async function rpc(name, args) {
  const { data, error } = await supabase.rpc(name, args);
  if (error) throw new Error(`${name}: ${error.message}`);
  return data;
}

const { error: authError } = await supabase.auth.signInWithPassword({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD });
if (authError) throw new Error(`login: ${authError.message}`);
await rpc("admin_me");

const existing = new Set(((await rpc("admin_list_records", { p_table: "portfolios" })) || []).map((p) => p.slug));
let created = 0;

for (const [index, project] of legacy.projects.entries()) {
  if (existing.has(project.id)) {
    console.log(`skip  ${project.id} (exists)`);
    continue;
  }
  const authors = [];
  for (const author of project.authors) {
    authors.push({
      name: author.name,
      role: author.role || null,
      avatar_image: author.avatarImage ? await upload(author.avatarImage, "avatars") : null,
    });
  }
  const images = [];
  for (const image of project.images) images.push(await upload(image, project.id));

  const record = {
    slug: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    authors,
    features: project.features,
    tech: project.tech,
    live_url: project.liveUrl || null,
    github_url: project.githubUrl || null,
    gallery_style: project.galleryStyle === "wide" ? "wide" : "standard",
    // Keep the original display order.
    sort_order: index,
    is_published: true,
  };

  if (dryRun) {
    console.log(`would create ${project.id} (${images.length} images, ${authors.length} authors)`);
    continue;
  }
  const saved = await rpc("admin_create_record", { p_table: "portfolios", p_data: record });
  await rpc("admin_set_record_images", {
    p_entity_type: "portfolios",
    p_entity_id: saved.id,
    p_images: images.map((image_url, sort_order) => ({ image_url, alt_text: "", sort_order, is_published: true })),
  });
  created += 1;
  console.log(`ok    ${project.id} (${images.length} images)`);
}

console.log(`\n${dryRun ? "dry run" : "done"}: ${created} created, ${uploaded.size} files ${dryRun ? "to upload" : "uploaded"}`);
await supabase.auth.signOut();
