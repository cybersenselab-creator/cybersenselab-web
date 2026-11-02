# Security

This repository is public. It contains only the website source; no credentials, backups or
personal data. Supabase *publishable* keys in the code are public by design — access is
enforced by Row Level Security and admin-only RPCs in the database.

## Reporting a vulnerability

Please do **not** open a public issue. Email **cybersenselab@gmail.com** with a description
and steps to reproduce. We will respond as soon as possible.

## For maintainers

- Never commit `.env*` files, connection strings, secret/`service_role` keys, tokens,
  passwords, database dumps (`backups/`) or the FTP mirror (`ftp-snapshot/`); all are
  git-ignored — keep it that way.
- Keep open security findings out of this repository until they are fixed.
- Credentials live in the lab's password manager, not in chat or in this repo.
