# Project Map

| Area | Path | State |
|---|---|---|
| App entry / providers | `src/main.tsx` | Done (QueryClient, Router, AuthProvider, Toaster) |
| Routes | `src/App.tsx` | Done — all 14 routes wired, lazy-loaded |
| Auth | `src/hooks/useAuth.tsx` | Ported from bundle |
| Supabase clients | `src/lib/supabase.ts`, `src/lib/internshipSupabase.ts` | Done (env-driven) |
| Styles / theme | `tailwind.config.js`, `src/styles/index.css` | Ported (navy/cyan, btn-cyber, btn-outline) |
| Layout (header/footer) | `src/components/layout/Layout.tsx` | Placeholder |
| Pages | `src/pages/*.tsx` | All placeholders |
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
