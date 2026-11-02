// RECONSTRUCTED 2026-11-02: the deployed bundle drops type-only modules, so this file
// was not recoverable from Supabase. Shapes are inferred from how the other files use them.

export type Trigger = "cron" | "manual";

export interface SyncConfig {
  instagramAccessToken: string;
  instagramUserId: string;
  instagramApiVersion: string;
  geminiApiKey: string;
  geminiModel: string;
  syncSecret: string;
  supabaseUrl: string;
  supabaseServiceRoleKey: string;
}

export type MediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;

export interface InstagramImage {
  id: string;
  media_type: MediaType;
  media_url?: string;
  thumbnail_url?: string;
}

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: MediaType;
  media_url?: string;
  permalink?: string;
  timestamp: string;
  thumbnail_url?: string;
  children?: { data: InstagramImage[] };
}

export interface InstagramPage {
  data?: InstagramMedia[];
  paging?: { next?: string };
}

export interface ImportImage {
  storage_path: string;
  public_url: string;
  sort_order: number;
}

export interface RetryRow {
  external_media_id: string;
  media_type: MediaType;
  permalink: string | null;
  media_timestamp: string;
}

/** Result of `claim_instagram_sync_run`. */
export interface SyncLease {
  acquired: boolean;
  run_id: string;
  initial_sync_completed: boolean;
  last_seen_media_id: string | null;
  last_seen_media_timestamp: string | null;
}

export interface SyncSummary {
  status: "success" | "partial" | "failed" | "already_running";
  discovered: number;
  imported: number;
  skipped: number;
  retrying: number;
}

type DbError = { code?: string; message?: string } | null;

export interface ServiceDatabase {
  rpc: <T = unknown>(name: string, args: Record<string, unknown>) => Promise<{ data: T | null; error: DbError }>;
  getRetryRows: (limit: number) => Promise<{ data: RetryRow[] | null; error: DbError }>;
  isAdmin: (userId: string) => Promise<{ data: boolean; error: DbError }>;
  getUser: (jwt: string) => Promise<{ data: { id: string } | null; error: DbError }>;
  upload: (
    bucket: string,
    path: string,
    body: ArrayBuffer,
    options: { contentType: string; upsert: boolean },
  ) => Promise<{ error: DbError }>;
  getPublicUrl: (bucket: string, path: string) => string;
}
