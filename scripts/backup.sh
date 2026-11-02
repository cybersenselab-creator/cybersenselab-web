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

echo "→ roles";  pg 'pg_dumpall --dbname="$PGURL" --roles-only --no-role-passwords' > "$OUT/roles.sql"
echo "→ schema"; pg 'pg_dump --dbname="$PGURL" --schema-only --no-owner --quote-all-identifiers' > "$OUT/schema.sql"
echo "→ data";   pg 'pg_dump --dbname="$PGURL" --data-only --quote-all-identifiers --exclude-schema=storage_internal' > "$OUT/data.sql"
echo "→ full (custom format, for pg_restore)"
pg 'pg_dump --dbname="$PGURL" --format=custom' > "$OUT/full.dump"

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
