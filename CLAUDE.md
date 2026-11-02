# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website of the **SARGEM CyberSense Research Laboratory** (Sakarya University, Computer
Engineering) — cybersecurity, AI, IoT and MIoT research. Turkish-language public site
(team, projects, publications, announcements, events, portfolios) plus an admin panel
for editing content.

Stack: **React SPA built with Vite** (react-router, framer-motion, Tailwind) talking
directly to **Supabase** (Postgres, Auth, Storage, Edge Functions). There is no custom
backend server — all data access is Supabase client calls guarded by RLS and
`SECURITY DEFINER` RPCs.

## Current State — Migration In Progress

The project was handed over by the previous developer. Until now it was deployed by
editing locally and uploading `dist/` over FTP to the university server
(193.140.253.203, Apache/IIS); there was **no git repository**.

Goals of the handover:
1. Put the project in a git repository.
2. Deploy from the repo to **Vercel** (static SPA — no backend, so Railway is unnecessary).
3. Move the Supabase projects under our ownership **without data loss**.

| Item | Status |
|---|---|
| Git repository | Done — `github.com/cybersenselab-creator/cybersenselab-web` (private). Owned by the lab GitHub account (lab Gmail); developers join as collaborators |
| Live site snapshot (`ftp-snapshot/`) | Done — full FTP mirror, 292 files. **Build output only, not source.** |
| Original source code | **Treated as unavailable.** The app is rebuilt from scratch using `ftp-snapshot/` as the spec (same routes, design, texts and Supabase calls) |
| Supabase backup (`pg_dump` + storage) | Done 2026-11-02 — both projects via `scripts/backup.sh` (row counts verified against live; storage 71/71 + 10/10 files). Re-run before any schema change or migration |
| Supabase ownership | Done — both projects in the lab Supabase org (`odnwsnbwbcuhkedbaxxe`). Claude Code has read-only Supabase MCP access |
| Vercel deploy + DNS cutover | Pending. Old FTP server stays live until the new deploy is verified |

Update this table as steps complete.

### `ftp-snapshot/` — read-only archive

Exact copy of what is live. Use it as reference (design, Tailwind classes, texts,
queries) and as a rollback, **never edit it** and never deploy from it unless as an
emergency fallback. Notes:
- Bundles with `-p20261026` / `-v2` suffixes are hand-patched rebuilds; the entry is
  `assets/index-portfolios-20261026-v2.js` (see `index.html`). Older unsuffixed
  bundles are leftovers.
- `etkinlikler/` contains an accidental nested copy of the whole site — do not migrate it.
- `.htaccess` holds the SPA rewrite and security headers (CSP etc.) — port these to
  `vercel.json`.

## Development Commands

```bash
cp .env.example .env.local   # then fill in the publishable keys
npm install
npm run dev        # Vite dev server, port 5173
npm run typecheck  # tsc only
npm run build      # tsc + vite build → dist/
npm run preview
```

Stack versions match the live bundle: React 18.3, react-router 7, framer-motion 11,
TanStack Query 5, react-hot-toast 2, supabase-js 2, Tailwind **v3** (not v4).

## Repository Layout

| Path | Purpose |
|---|---|
| `src/` | The rebuilt app (TypeScript) |
| `src/pages/` | One file per route; placeholders (`PagePlaceholder`) until ported |
| `src/lib/supabase.ts`, `src/lib/internshipSupabase.ts` | Clients for the two Supabase projects |
| `src/hooks/useAuth.tsx` | `AuthProvider` — session is valid only if `admin_me` RPC succeeds (ported 1:1) |
| `public/` | Static files served as-is: `logos/`, `videos/`, `shield.svg` |
| `reference/assets/` | **Prettier-formatted live bundles** — the spec for porting. Read-only |
| `vercel.json` | SPA rewrite + security headers/CSP ported from `.htaccess` |
| `ftp-snapshot/` | Raw FTP mirror, git-ignored, local only |

### Porting workflow

Port one page at a time from `reference/assets/<Page>.js` into `src/pages/<Page>.tsx`:
keep markup, Tailwind classes, texts and Supabase queries identical; give minified
names meaningful ones; add types. Shared bundles to port first: `useSupabase.js`,
`useQuery.js`, `utils.js`, `UIStates.js`, `SectionHeader.js`, `Reveal.js`, cards,
`LabIcon.js`. In `reference/assets/index.js` only two regions are app code — the
Supabase client + `AuthProvider` (~line 13195) and header/footer/layout + router
(~line 19432 to end); the rest is vendor code.

**A page counts as ported only when `scripts/compare-live.mjs` reports 0 text and 0 pixel
differences** against the live site (desktop + mobile):

```bash
npm run build && npx vite preview --port 4180 &
node scripts/compare-live.mjs /ekip    # CHROMIUM_PATH=… to reuse a cached browser
```

### Intentional deviations from the live site

Bugs found while porting are fixed in **separate commits** so `compare-live` differences
stay explainable. Keep this list current:

| Where | Live behaviour | Rebuilt | Why |
|---|---|---|---|
| Nav active link | Never highlighted (Apache redirects `/x` → `/x/`, path check fails) | Highlighted | Hosting artefact, not intended |
| `/projeler?tur=staj` cards | Cover images broken (`render/image` → 403) | Original image URLs | Image transformations are a paid Supabase feature |

Data hooks live in `src/hooks/useContent.ts` (1:1 with the bundle's `useSupabase.js`);
row types come from `src/lib/database.types.ts` — regenerate with `npm run types`
after any schema change (needs `.env.backup`).

## Architecture

### Routes

| Path | Page |
|---|---|
| `/` | Home (hero video `videos/hero-background.mp4`) |
| `/projeler`, `/projeler/arastirma/:id`, `/projeler/staj/:slug` | Research & internship projects |
| `/portfolyolar` | Portfolios (re-added 2026-10-26 from the previous developer's local copy) |
| `/ekip` | Team |
| `/yayinlar` | Publications |
| `/duyurular` | Announcements |
| `/etkinlikler` | Events |
| `/iletisim` | Contact |
| `/gizlilik-ve-kvkk` | Privacy / KVKK |
| `/login`, `/admin` | Admin login (`signInWithPassword`) and panel |

Each route also exists as a folder with its own `index.html` on the FTP server so
deep links work without rewrites.

### Supabase — two projects

| Project ref | Used for |
|---|---|
| `gaflirrelweuphsivmyp` | **Main.** All content tables, auth, admin RPCs, storage, edge function |
| `nznvqfjwwvwrxiiwufgg` | Internship projects only (`internshipProjects` module): `projects` table with `project_students`, bucket `project-media` |

**Main project content tables:** `announcements`, `etkinlikler`, `ekip`, `yayinlar`,
`projects`, `arastirma_alanlari`, `oduller`, `ortaklar`, `site_ayarlari`, `content_images`.
Common columns: `is_published`, `sort_order`, `created_at`.

**Admin RPCs** (generic CRUD over tables, `p_table` argument): `admin_me`,
`admin_list_records`, `admin_create_record`, `admin_update_record`,
`admin_delete_record`, `admin_list_record_images`, `admin_set_record_images`,
`admin_get_instagram_sync_status`.

**Storage buckets:** `research-area-images`, `team-member-images`, `project-images`
(main), `project-media` (internship project).

**Edge function:** `instagram-sync` — Instagram posts → announcements, run by pg_cron every
15 min and manually from the admin panel. Code, secrets list and known issues: `supabase/README.md`.

When migrating or backing up, all of these must come along: schema, RLS policies,
RPC functions, `auth.users`, storage objects and the edge function.

### Frontend conventions (from the existing bundle)

- Tailwind with a custom `navy` color (`bg-navy`, `from-navy/90` …); Inter font and
  Font Awesome 6 loaded from CDNs.
- Data fetching through a `useSupabase` hook + a small `useQuery` helper; shared UI in
  `SectionHeader`, `Reveal` (framer-motion), `UIStates` (loading/empty/error),
  `NewsCard`, `TeamCard`, `PublicationCard`, `LabIcon`.
- Supabase URL and publishable key come from env (`VITE_SUPABASE_*`), never hard-code.
- CSP only allows `*.supabase.co`, Google Fonts, cdnjs and Google Maps frames — adding a
  new external origin requires updating the CSP.

## Secrets & Safety Rules

- **Never commit** `.env*`, connection strings, `service_role` keys, FTP or Supabase
  account passwords. Credentials were shared over chat — treat them as compromised and
  rotate after migration.
- `.env.backup` (local only, git-ignored) holds DB connection strings (`MAIN_DB_URL`,
  `STAJ_DB_URL`, session pooler on `aws-0-<region>`) used by `scripts/backup.sh main|staj`.
  Output goes to git-ignored `backups/` — it contains user data, never share it.
- Do not write to the FTP server or to production Supabase without explicit approval.
  Read-only operations (download, `pg_dump`) are fine.
- Always take a fresh backup before any schema change or data migration.

## File Naming Conventions

| Type | Convention | Example |
|---|---|---|
| Pages | PascalCase `.tsx`/`.jsx` | `Publications.tsx` |
| Components | PascalCase | `TeamCard.tsx` |
| Hooks | `use<Name>` | `useSupabase.ts` |
| Data/helpers | camelCase | `internshipProjects.ts` |
| Route paths | Turkish, kebab-case | `/gizlilik-ve-kvkk` |

## Project Log Rule

After any code change, update `PROJECT_LOG.md`:
1. Update the `# Project Map` section (only the changed lines — do not rewrite the whole map).
2. Append a new entry to `# Activity Log` with `Change:`, `Logic:`, and `Debt:` fields.
