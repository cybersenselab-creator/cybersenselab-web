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
