#!/usr/bin/env bash
# Restores the latest main-project backup into the LOCAL Supabase stack (never production).
#
#   npx supabase start -x studio,imgproxy,mailpit,edge-runtime,logflare,vector,supavisor,realtime,postgres-meta
#   scripts/restore-local.sh
#
# Restores: public schema (tables, RLS, functions, grants) + data, auth users/identities,
# storage buckets + RLS policies, and storage files (uploaded through the local Storage API).
# Then applies supabase/migrations/*.sql on top and creates a local test admin.
# Skips on purpose: cron jobs and Vault secrets, so the local copy never calls Instagram/Gemini.
set -euo pipefail
cd "$(dirname "$0")/.."

DB=$(docker ps --format '{{.Names}}' | grep -E '^supabase_db_' | head -1)
[[ -n "$DB" ]] || { echo "Local Supabase is not running (npx supabase start)" >&2; exit 1; }
BACKUP=$(ls -d backups/supabase-cybersense/2026* | tail -1)
echo "→ backup: $BACKUP"

# Reset without applying migrations (they build on the restored schema, so they run last):
# the CLI always applies supabase/migrations on reset, so park the folder meanwhile.
mv supabase/migrations supabase/.migrations-parked
trap 'mv supabase/.migrations-parked supabase/migrations 2>/dev/null || true' EXIT
npx -y supabase@2 db reset --local --no-seed >/dev/null
mv supabase/.migrations-parked supabase/migrations
docker cp "$BACKUP/full.dump" "$DB:/tmp/main.dump"

docker exec -e PGPASSWORD=postgres "$DB" bash -c '
set -e
C="-h 127.0.0.1 -U supabase_admin -d postgres"
r() { pg_restore $C "$@" /tmp/main.dump 2>&1 | grep -E "ERROR" | grep -v "already exists" || true; }
r --data-only --disable-triggers -n auth -t users -t identities
r --data-only --disable-triggers -n storage -t buckets
r --schema-only -n public
r --data-only --disable-triggers -n public
# Storage RLS policies (admin uploads) — only the POLICY entries, not the storage tables.
pg_restore -l /tmp/main.dump | grep -E "POLICY storage objects" > /tmp/storage-policies.list
pg_restore $C -L /tmp/storage-policies.list /tmp/main.dump 2>&1 | grep ERROR || true
'

echo "→ migrations newer than the backup (supabase/migrations)"
for migration in supabase/migrations/*.sql; do
  [[ -e "$migration" ]] || continue
  docker cp "$migration" "$DB:/tmp/migration.sql"
  docker exec -e PGPASSWORD=postgres "$DB" psql -q -h 127.0.0.1 -U supabase_admin -d postgres -v ON_ERROR_STOP=1 -f /tmp/migration.sql
  echo "  applied $(basename "$migration")"
done

KEY=$(npx -y supabase@2 status -o json 2>/dev/null | python3 -c 'import json,sys; print(json.load(sys.stdin)["SERVICE_ROLE_KEY"])')
echo "→ storage files"
ok=0; total=0
while IFS=$'\t' read -r bucket name; do
  [[ -n "$name" ]] || continue
  total=$((total + 1))
  file="$BACKUP/storage/$bucket/$name"
  type=$(file -b --mime-type "$file")
  curl -sf -X POST "http://127.0.0.1:54321/storage/v1/object/$bucket/$name" \
    -H "Authorization: Bearer $KEY" -H "Content-Type: $type" -H "x-upsert: true" \
    --data-binary "@$file" >/dev/null && ok=$((ok + 1)) || echo "  ! $bucket/$name" >&2
done < "$BACKUP/storage/objects.tsv"
echo "✓ storage $ok/$total"

# Local-only admin for testing the panel (credentials → .env.local-admin, git-ignored).
EMAIL=admin-test@local.test
PASSWORD=$(python3 -c 'import secrets; print(secrets.token_urlsafe(18))')
USER_ID=$(curl -sf -X POST http://127.0.0.1:54321/auth/v1/admin/users \
  -H "Authorization: Bearer $KEY" -H "apikey: $KEY" -H "Content-Type: application/json" \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\",\"email_confirm\":true}" |
  python3 -c 'import json,sys; print(json.load(sys.stdin)["id"])')
docker exec -e PGPASSWORD=postgres "$DB" psql -q -h 127.0.0.1 -U postgres -c \
  "insert into public.admin_users (user_id, display_name, is_active) values ('$USER_ID', 'Local Test Admin', true);"
printf 'LOCAL_ADMIN_EMAIL=%s\nLOCAL_ADMIN_PASSWORD=%s\n' "$EMAIL" "$PASSWORD" > .env.local-admin
echo "✓ local admin $EMAIL (password in .env.local-admin)"
