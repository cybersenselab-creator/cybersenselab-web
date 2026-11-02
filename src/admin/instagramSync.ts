import { supabase } from "../lib/supabase";

// Status/trigger for the `instagram-sync` edge function. Responses are normalized defensively
// because the RPC and the function return slightly different shapes (e.g. imported vs imported_count).

export type RunStatus = "running" | "success" | "partial" | "failed" | "already_running";

export type SyncRun = {
  status: RunStatus;
  discovered: number;
  imported: number;
  skipped: number;
  retrying: number;
  trigger: "cron" | "manual" | null;
  started_at: string | null;
  finished_at: string | null;
  last_error: string | null;
};

export type SyncStatus = {
  configured: boolean | null;
  connected: boolean | null;
  account_username: string;
  initial_sync_completed: boolean;
  last_seen_media_id: string | null;
  last_seen_media_timestamp: string | null;
  last_success_at: string | null;
  token_expires_at: string | null;
  token_refresh_required: boolean;
  is_running: boolean;
  locked_until: string | null;
  latest_run: SyncRun | null;
};

type Obj = Record<string, unknown>;

const firstObject = (value: unknown): Obj =>
  Array.isArray(value) ? firstObject(value[0]) : value && typeof value === "object" ? (value as Obj) : {};
const count = (value: unknown) => {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};
const nonEmpty = (value: unknown) => (typeof value === "string" && value.trim() ? value : null);
const runStatus = (value: unknown): RunStatus =>
  value === "running" || value === "partial" || value === "failed" || value === "already_running" ? value : "success";

function normalizeRun(value: unknown): SyncRun {
  const run = firstObject(value);
  return {
    status: runStatus(run.status),
    discovered: count(run.discovered ?? run.discovered_count),
    imported: count(run.imported ?? run.imported_count),
    skipped: count(run.skipped ?? run.skipped_count),
    retrying: count(run.retrying ?? run.retry_count),
    trigger: run.trigger === "cron" || run.trigger === "manual" ? run.trigger : null,
    started_at: nonEmpty(run.started_at),
    finished_at: nonEmpty(run.finished_at),
    last_error: nonEmpty(run.last_error),
  };
}

// Warn when the Instagram token expires within 15 days.
const TOKEN_WARNING_MS = 15 * 24 * 60 * 60 * 1000;

function normalizeStatus(value: unknown): SyncStatus {
  const status = firstObject(value);
  const latest = status.latest_run ?? status.last_run;
  const hasInlineRun = status.status != null || status.run_status != null;
  const latestRun =
    latest == null
      ? hasInlineRun
        ? normalizeRun({ ...status, status: status.run_status ?? status.status })
        : null
      : normalizeRun(latest);
  const tokenExpiresAt = nonEmpty(status.token_expires_at);
  const expiresSoon = !!(
    tokenExpiresAt &&
    !Number.isNaN(Date.parse(tokenExpiresAt)) &&
    Date.parse(tokenExpiresAt) <= Date.now() + TOKEN_WARNING_MS
  );
  return {
    configured:
      typeof status.configured === "boolean"
        ? status.configured
        : typeof status.is_configured === "boolean"
          ? status.is_configured
          : null,
    connected: typeof status.connected === "boolean" ? status.connected : null,
    account_username: nonEmpty(status.account_username)?.replace(/^@/, "") || "cybersenselab",
    initial_sync_completed: status.initial_sync_completed === true,
    last_seen_media_id: nonEmpty(status.last_seen_media_id),
    last_seen_media_timestamp: nonEmpty(status.last_seen_media_timestamp),
    last_success_at: nonEmpty(status.last_success_at),
    token_expires_at: tokenExpiresAt,
    token_refresh_required: status.token_refresh_required === true || expiresSoon,
    is_running: status.is_running === true,
    locked_until: nonEmpty(status.locked_until),
    latest_run: latestRun,
  };
}

export async function fetchSyncStatus(): Promise<SyncStatus> {
  const { data, error } = await supabase.rpc("admin_get_instagram_sync_status");
  if (error) throw error;
  return normalizeStatus(data);
}

/** Runs the sync now, authenticated with the admin's own JWT. */
export async function triggerSync(accessToken: string | undefined): Promise<SyncRun> {
  if (!accessToken) throw new Error("Instagram eşitlemesi için geçerli bir admin oturumu gerekiyor.");
  const { data, error } = await supabase.functions.invoke("instagram-sync", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (error) throw error;
  return normalizeRun(data);
}
