# supabase/

Backend for the site. Nothing here is deployed automatically — it is the versioned
record of what runs in the Supabase projects. Inventory taken 2026-11-02 via the
Supabase MCP (read-only).

## Projects

| Name | Ref | Region | Purpose |
|---|---|---|---|
| `cybersense` | `gaflirrelweuphsivmyp` | ap-south-1 | Main: content, auth, admin RPCs, storage, Instagram sync |
| `staj-projeleri` | `nznvqfjwwvwrxiiwufgg` | ap-southeast-1 | Internship projects only (read-only from the site) |

Both are on the Free plan: no downloadable daily backups, and **projects pause after
inactivity** — `staj-projeleri` was found paused on 2026-11-02 and had to be restored.

## `cybersense` (main)

**Tables** (all RLS enabled): `announcements`, `etkinlikler`, `ekip`, `yayinlar`,
`projects`, `arastirma_alanlari`, `oduller`, `ortaklar`, `site_ayarlari`,
`content_images`, `admin_users`, `instagram_imports`, `instagram_sync_runs`,
`instagram_sync_state`.

**Auth:** one user. Admin rights = row in `admin_users` (checked by `admin_is_admin`
/ `admin_require_admin`).

**Storage buckets** (public): `content-images` (49 objects), `research-area-images`
(17), `team-member-images` (3), `project-images` (2).

**Functions** (26, all `public`):
- Admin CRUD, all `SECURITY DEFINER` and guarded by `admin_require_admin()`:
  `admin_me`, `admin_is_admin`, `admin_require_admin`, `admin_list_records`,
  `admin_create_record`, `admin_update_record`, `admin_delete_record`,
  `admin_move_record`, `admin_get_table_meta`, `admin_validate_json_keys`,
  `admin_list_record_images`, `admin_set_record_images`, `admin_assert_image_entity`,
  `admin_can_manage_research_images`, `admin_get_instagram_sync_status`.
- Instagram sync (service role only, `instagram_require_service_role`):
  `claim_instagram_sync_run`, `finish_instagram_sync_run`, `mark_instagram_import`,
  `stage_initial_instagram_imports`, `import_instagram_announcement`,
  `cleanup_instagram_sync_history`, `instagram_sanitize_error`.
- Triggers/misc: `protect_announcement_source_metadata`,
  `set_instagram_import_updated_at`, `rls_auto_enable`.

**Extensions:** pg_cron, pg_net, pgcrypto, uuid-ossp, supabase_vault, pg_stat_statements.

**Migrations:** only `20260827 01_schema_security` is recorded; later changes
(Instagram sync etc.) were applied directly. The authoritative schema is therefore the
`pg_dump` in `backups/`, not the migration history.

### Instagram → announcements sync

`functions/instagram-sync/` (code recovered from the deployed function; `types.ts` was
not recoverable and is reconstructed). Flow: fetch new posts from the Instagram Graph
API → generate a Turkish title with Gemini → copy images to `content-images/instagram/`
→ `import_instagram_announcement` creates the announcement.

- **Schedule:** pg_cron job `instagram-announcement-sync`, every 15 min, calls the
  function via `pg_net` using Vault secrets `instagram_sync_project_url` and
  `instagram_sync_secret`. Job `cleanup-instagram-sync-history` runs daily 03:20.
- **Manual trigger:** admin panel → function with the admin's JWT
  (`verify_jwt = false`; the function verifies the JWT and `admin_users` itself).
- **Function secrets** (set in Dashboard → Edge Functions → Secrets; values are not
  readable back): `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`, `GEMINI_API_KEY`,
  `INSTAGRAM_SYNC_SECRET` (must equal the Vault `instagram_sync_secret`), optional
  `INSTAGRAM_GRAPH_API_VERSION`, `GEMINI_MODEL`.
- **Known issue (2026-11-02):** failing with `instagram_http_400` since 2026-11-01
  07:15 UTC — almost certainly the 60-day Instagram access token (secrets created
  2026-09-02) expired. Needs a new token from whoever owns the Meta app.

Deploy: `supabase functions deploy instagram-sync --project-ref gaflirrelweuphsivmyp --no-verify-jwt`.

## `staj-projeleri`

**Tables:** `projects`, `students`, `project_students`, `project_sections`,
`project_technologies`, `technologies`, `project_media`. Bucket `project-media` (public).
Functions: `set_updated_at` (trigger), `rls_auto_enable`. No migrations, no edge functions.
Content is edited directly in the Supabase dashboard (no admin UI).

## Advisor notes (security, 2026-11-02)

- `SECURITY DEFINER` admin RPCs callable by `authenticated` — by design. Verified
  2026-11-02: every data RPC (`admin_me`, list/create/update/delete/move, image RPCs)
  calls `admin_require_admin()`; `admin_get_instagram_sync_status` checks `admin_users`
  inline; `admin_can_manage_research_images` only returns a boolean; the remaining
  helpers are not executable by `anon`/`authenticated`. Keep this invariant.
- `rls_auto_enable()` in `staj-projeleri` is executable by `anon` — should be revoked.
- `pg_net` installed in `public` schema; leaked-password protection disabled in Auth.
