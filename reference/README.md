# reference/

Prettier-formatted copy of the bundles that are **live** on the old FTP server
(entry `index-portfolios-20261026-v2.js`, snapshot 2026-11-02). File names had their
Vite hashes / patch suffixes stripped and imports rewritten to match.

This is the specification for the rewrite in `src/`. Do not edit or import from here.

- `assets/index.js` — vendor + app shell. App code: Supabase client & AuthProvider
  (~line 13195), layout & router (~line 19432 → end).
- `assets/vendor-dist.js` — supabase-js and shared vendor code.
- `assets/*.js` — one file per page / shared component.
- `assets/index.css`, `assets/portfolios.css` — compiled Tailwind v3 + custom CSS.
- `htaccess.txt` — original Apache config (ported to `/vercel.json`).
