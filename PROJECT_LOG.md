# Project Map

| Area | Path | State |
|---|---|---|
| App entry / providers | `src/main.tsx` | Done (QueryClient, Router, AuthProvider, Toaster) |
| Routes | `src/App.tsx` | Done — all 14 routes wired, lazy-loaded |
| Auth | `src/hooks/useAuth.tsx` | Ported from bundle |
| Supabase clients | `src/lib/supabase.ts`, `src/lib/internshipSupabase.ts` | Done (env-driven) |
| Styles / theme | `tailwind.config.js`, `src/styles/index.css` | Ported (navy/cyan, btn-cyber, btn-outline) |
| Layout (header/footer) | `src/components/layout/` | Ported — Header, Footer, ScrollTopButton, page transitions |
| Shared UI / cards | `src/components/ui/`, `src/components/cards/` | Ported — LabIcon (auto-converted), UIStates, Skeletons, SectionHeader, Reveal, News/Team/PublicationCard |
| Data hooks / types | `src/hooks/useContent.ts`, `src/lib/database.types.ts` | Ported; types generated from live schema |
| Pages | `src/pages/*.tsx` | Ported + verified: Home, Privacy, Publications, Team, Events, Announcements, Projects (+2 detail). Portfolios (+11 details). Pending: Contact, Login, Admin |
| Deploy config | `vercel.json` | Done, not yet deployed |
| Supabase backend record | `supabase/` | Inventory + `instagram-sync` source (types reconstructed) |
| Reference spec | `reference/assets/` | Formatted live bundles |

# Activity Log

## 2026-11-02 — Repository scaffold

Change: Mirrored live site over FTP (`ftp-snapshot/`, ignored). Formatted the 28 live
bundles + CSS into `reference/assets/`. Scaffolded Vite + React 18 + TS + Tailwind v3
app with routing, providers, Supabase clients, ported `AuthProvider` and theme, page
placeholders, `vercel.json`.
Logic: No original source exists, so the live bundle is the spec. Library major versions
match the bundle to keep behaviour identical while porting.
Debt: Layout and all pages still placeholders. Supabase schema/RLS/RPC SQL and the
`instagram-sync` edge function are not in the bundle — need a DB dump. Old `?p=` redirect
from the FTP `404.html` is not reproduced (Vercel rewrites make it unnecessary).

## 2026-11-02 — Supabase inventory & edge function recovery

Change: Added `supabase/README.md` (both projects: tables, buckets, 26 functions, cron jobs,
secrets, advisors) and `supabase/functions/instagram-sync/` recovered from the deployed
function via read-only MCP. `backups/` (git-ignored) holds the `staj-projeleri` dump of
2026-10-23 and an unrelated older dump of project `zyujjhhceasuwjmfatzy`.
Logic: The schema only existed inside Supabase; recording it in the repo removes the
single-person dependency. Admin RPC authorization was verified, not assumed.
Debt: `types.ts` is reconstructed (not type-checked with Deno yet). Full `pg_dump` of the
main project still missing. Instagram sync failing since 2026-11-01 (`instagram_http_400`,
likely expired 60-day token). `staj-projeleri` `rls_auto_enable` executable by anon.

## 2026-11-02 — Full Supabase backups

Change: `scripts/backup.sh main|staj` — roles + one custom-format `pg_dump` per project via
the Supabase Postgres 17 Docker image, `schema.sql`/`data.sql` derived locally with
`pg_restore`, public storage files downloaded. Ran for both projects.
Logic: The session pooler drops long connections, so the remote part is a single dump with
retries. Verified every table's row count against live (exact match) and 71/71 + 10/10
storage files.
Debt: No test restore into a scratch database yet. Vault secret values and edge-function
secrets are not exportable — must be re-entered by hand on any new project.

## 2026-11-02 — Shared components, layout and Home page

Change: Ported shared UI, cards, data hooks, header/footer/layout and the Home page
(`src/pages/home/*`). Added `npm run types` (`scripts/gen-types.sh`) and
`scripts/compare-live.mjs` (Playwright text + pixel diff against the live site).
Logic: Markup/classes/texts/queries copied 1:1 from the bundle so the rebuilt site is
indistinguishable; verified Home with 0 text and 0 pixel differences on desktop and mobile.
LabIcon's 107 SVG elements were converted by script, not by hand.
Debt: `border-3` spinner class is a no-op in Tailwind v3 (kept to match live). Remaining
pages: Team, Projects (+ 2 detail pages), Portfolios, Publications, Announcements, Events,
Contact, Privacy, Login, Admin.

## 2026-11-02 — Inner pages: Privacy, Publications, Team, Events, Announcements, Projects

Change: Ported 7 routes plus 6 detail URLs; shared `PageHeader`, `AnnouncementModal`,
`ProjectDetailView`/`ProjectDetailPage`, internship data layer (`src/lib/internshipProjects.ts`).
Logic: Bundles were decompiled to JSX with a Babel script (scratch tool) and then renamed by hand;
every route verified 0 text / 0 pixel diff against live (desktop + mobile).
Fixed (separate commit): internship cover images used Supabase image transformations
(403 on Free plan) — now original object URLs. Note: covers are 1.7–2.2 MB PNGs; worth
compressing in storage later.
Debt: Portfolios, Contact, Login, Admin remain.

## 2026-11-02 — Portfolios

Change: `/portfolyolar` and `/portfolyolar/:id` ported to `src/pages/Portfolios.tsx`; static data
in `src/data/portfolios.ts`; scoped stylesheet `src/styles/portfolios.css` (imported only by this
page — every selector is under `.pf-`); 25 images moved from FTP `/assets/portfolio-*-v2.png`
to `public/portfolio/` (renamed without prefix/suffix).
Logic: The original was hand-written with `createElement`; converted to JSX and typed. Filters
stay in the URL. List, filtered list and all 11 detail pages: 0 text / 0 pixel diff; lightbox
behaviour (focus, ←/→, Esc) verified against live.
Debt: Portfolio content is hard-coded — editing it needs a deploy (no admin UI), same as live.
