#!/usr/bin/env bash
# Regenerates src/lib/database.types.ts from the live main project (read-only).
# Needs MAIN_DB_URL in .env.backup (see scripts/backup.sh) and Docker.
set -euo pipefail
cd "$(dirname "$0")/.."
# The CLI rejects unencoded special characters in the password, so re-encode it.
URL="$(python3 -I - <<'PY'
import re, urllib.parse
for line in open(".env.backup", encoding="utf-8"):
    if line.startswith("MAIN_DB_URL="):
        value = line.strip().split("=", 1)[1]
        m = re.match(r"(postgresql://[^:]+:)(.*)(@[^@]+)$", value)
        print(m.group(1) + urllib.parse.quote(urllib.parse.unquote(m.group(2)), safe="") + m.group(3))
PY
)"
npx -y supabase@2 gen types typescript --db-url "$URL" --schema public > src/lib/database.types.ts
npx prettier --write --log-level warn src/lib/database.types.ts 2>/dev/null || true
echo "✓ src/lib/database.types.ts"
