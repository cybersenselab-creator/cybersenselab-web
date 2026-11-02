// Lists (default) or deletes (--apply) image files that no record references any more —
// left behind by the storage-delete bug fixed in 20261102120000_admin_select_storage_images.sql.
//
//   SUPABASE_URL=… SUPABASE_PUBLISHABLE_KEY=… ADMIN_EMAIL=… ADMIN_PASSWORD=… \
//     node scripts/cleanup-orphans.mjs [--apply]
//
// Runs as a normal admin (no secret keys). Only checks the three single-image buckets.
import { createClient } from "@supabase/supabase-js";

const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
const apply = process.argv.includes("--apply");
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY || !ADMIN_EMAIL || !ADMIN_PASSWORD) {
  console.error("Set SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, ADMIN_EMAIL and ADMIN_PASSWORD.");
  process.exit(1);
}

// bucket → [admin table, column holding the image URL, top-level folder]
const BUCKETS = {
  "research-area-images": ["arastirma_alanlari", "icon", "research-areas"],
  "team-member-images": ["ekip", "avatar_icon", "team-members"],
  "project-images": ["projects", "image_url", "projects"],
};

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: false } });
const { error: authError } = await supabase.auth.signInWithPassword({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD });
if (authError) throw new Error(`login: ${authError.message}`);

async function listAll(bucket, prefix) {
  const files = [];
  const { data, error } = await supabase.storage.from(bucket).list(prefix, { limit: 1000 });
  if (error) throw new Error(`list ${bucket}/${prefix}: ${error.message}`);
  for (const entry of data) {
    const path = `${prefix}/${entry.name}`;
    if (entry.id) files.push({ path, size: entry.metadata?.size ?? 0 });
    else files.push(...(await listAll(bucket, path))); // folder
  }
  return files;
}

let total = 0;
for (const [bucket, [table, column, folder]] of Object.entries(BUCKETS)) {
  const { data: records, error } = await supabase.rpc("admin_list_records", { p_table: table });
  if (error) throw new Error(`admin_list_records ${table}: ${error.message}`);
  const referenced = new Set(records.map((r) => String(r[column] || "")).filter(Boolean));
  const files = await listAll(bucket, folder);
  const orphans = files.filter((f) => ![...referenced].some((url) => url.endsWith(`/${bucket}/${f.path}`)));
  total += orphans.length;
  console.log(`${bucket}: ${files.length} files, ${orphans.length} unreferenced`);
  for (const f of orphans) console.log(`  ${f.path} (${Math.round(f.size / 1024)} KB)`);
  if (apply && orphans.length) {
    const { data: removed, error: removeError } = await supabase.storage.from(bucket).remove(orphans.map((f) => f.path));
    if (removeError) throw new Error(`remove: ${removeError.message}`);
    console.log(`  → deleted ${removed.length}`);
  }
}
console.log(`\n${total} unreferenced file(s)${apply ? " processed" : " — run with --apply to delete"}`);
await supabase.auth.signOut();
