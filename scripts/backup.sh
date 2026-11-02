#!/usr/bin/env bash
# Full backup of a Supabase project: roles, schema, data (pg_dump via Docker) + storage files.
#
#   scripts/backup.sh main        # cybersense       (MAIN_DB_URL)
#   scripts/backup.sh staj        # staj-projeleri   (STAJ_DB_URL)
#
# Connection strings live in .env.backup (git-ignored), e.g.
#   MAIN_DB_URL=postgresql://postgres.gaflirrelweuphsivmyp:PASSWORD@aws-0-REGION.pooler.supabase.com:5432/postgres
# Use the *Session pooler* string (port 5432) from Dashboard → Connect.
# Output: backups/<project>/<timestamp>/ — never commit it, it contains user data.
set -euo pipefail

cd "$(dirname "$0")/.."
IMAGE="public.ecr.aws/supabase/postgres:17.6.1.081"

case "${1:-}" in
  main) VAR=MAIN_DB_URL; NAME=supabase-cybersense; REF=gaflirrelweuphsivmyp ;;
  staj) VAR=STAJ_DB_URL; NAME=supabase-staj-projeleri; REF=nznvqfjwwvwrxiiwufgg ;;
  *) echo "usage: $0 main|staj" >&2; exit 1 ;;
esac

[[ -f .env.backup ]] || { echo ".env.backup not found" >&2; exit 1; }
DB_URL="$(grep -E "^${VAR}=" .env.backup | head -1 | cut -d= -f2-)"
[[ -n "$DB_URL" ]] || { echo "$VAR missing in .env.backup" >&2; exit 1; }

OUT="backups/$NAME/$(date +%Y%m%d-%H%M%S)"
mkdir -p "$OUT/storage"

pg() { docker run --rm -i -e PGURL="$DB_URL" --entrypoint bash "$IMAGE" -c "$1"; }
local_pg() { docker run --rm -i --user "$(id -u):$(id -g)" -v "$PWD/$OUT:/out" --entrypoint bash "$IMAGE" -c "$1"; }

# The pooler occasionally drops long sessions, so each remote step is retried.
retry() {
  local attempt
  for attempt in 1 2 3; do
    "$@" && return 0
    echo "  ! attempt $attempt failed, retrying…" >&2
    sleep 5
  done
  return 1
}

dump_roles() { pg 'pg_dumpall --dbname="$PGURL" --roles-only --no-role-passwords' > "$OUT/roles.sql"; }
dump_full() { pg 'pg_dump --dbname="$PGURL" --format=custom' > "$OUT/full.dump"; }

echo "→ roles"
retry dump_roles

# One remote dump; schema.sql / data.sql are derived from it locally.
echo "→ full dump (custom format)"
retry dump_full
echo "→ schema.sql / data.sql"
local_pg 'pg_restore --schema-only --no-owner -f /out/schema.sql /out/full.dump'
local_pg 'pg_restore --data-only -f /out/data.sql /out/full.dump'

echo "→ storage files"
pg 'psql "$PGURL" -At -F "	" -c "select o.bucket_id, o.name from storage.objects o join storage.buckets b on b.id = o.bucket_id where b.public order by 1, 2"' \
  > "$OUT/storage/objects.tsv"
count=0
while IFS=$'\t' read -r bucket name; do
  [[ -n "$name" ]] || continue
  mkdir -p "$OUT/storage/$bucket/$(dirname "$name")"
  url="https://$REF.supabase.co/storage/v1/object/public/$bucket/$(python3 -c 'import sys,urllib.parse;print(urllib.parse.quote(sys.argv[1]))' "$name")"
  curl -sfS --retry 2 -o "$OUT/storage/$bucket/$name" "$url" && count=$((count + 1)) \
    || echo "  ! failed: $bucket/$name" >&2
done < "$OUT/storage/objects.tsv"

total=$(grep -c . "$OUT/storage/objects.tsv" || true)
echo "✓ $OUT — storage $count/$total files"
ls -la "$OUT"
