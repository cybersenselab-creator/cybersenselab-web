import type { RunStatus, SyncStatus } from "./instagramSync";

const STATUS_LABEL: Record<RunStatus, string> = {
  running: "Çalışıyor",
  success: "Başarılı",
  partial: "Kısmi başarı",
  failed: "Başarısız",
  already_running: "Zaten çalışıyor",
};

const STATUS_CLASS: Record<RunStatus, string> = {
  running: "bg-blue-100 text-blue-700",
  success: "bg-green-100 text-green-700",
  partial: "bg-amber-100 text-amber-700",
  failed: "bg-red-100 text-red-700",
  already_running: "bg-blue-100 text-blue-700",
};

export function formatDateTime(value: string | null) {
  if (!value) return "Henüz yok";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function connectionLabel(status: SyncStatus) {
  if (status.configured === null) return "Sunucu yapılandırması doğrulanmadı";
  if (!status.configured) return "Eksik";
  if (status.connected === true) return "Hazır · Bağlı";
  if (status.connected === false) return "Hazır · Bağlantı hatası";
  return "Hazır · Doğrulanmadı";
}

function connectionClass(status: SyncStatus) {
  if (status.configured === null) return "text-gray-500";
  return status.configured && status.connected !== false ? "text-green-700" : "text-red-600";
}

type Props = {
  status: SyncStatus | null;
  loading: boolean;
  error: string;
  syncing: boolean;
  onSync: () => void;
  onRetry: () => void;
};

export default function InstagramSyncCard({ status, loading, error, syncing, onSync, onRetry }: Props) {
  const run = status?.latest_run;
  return (
    <section className="bg-white border border-gray-100 rounded-2xl p-5 mb-6" aria-labelledby="instagram-sync-title">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2">
            <i className="fa-brands fa-instagram text-fuchsia-600" aria-hidden="true" />
            <h2 id="instagram-sync-title" className="font-bold text-navy">
              Instagram Eşitleme
            </h2>
          </div>
          <p className="text-sm text-gray-500 mt-1">@{status?.account_username || "cybersenselab"}</p>
        </div>
        <button
          type="button"
          onClick={onSync}
          disabled={syncing || status?.is_running === true || loading}
          className="btn-cyber text-xs !py-2.5 !px-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i className={`fa ${syncing ? "fa-circle-notch fa-spin" : "fa-arrows-rotate"}`} />
          {syncing ? "Eşitleniyor" : "Şimdi eşitle"}
        </button>
      </div>

      {loading ? (
        <div className="mt-5 flex items-center gap-2 text-sm text-gray-400" role="status">
          <i className="fa fa-circle-notch fa-spin" /> Durum yükleniyor
        </div>
      ) : error ? (
        <div className="mt-5 rounded-xl bg-red-50 px-4 py-3 flex items-center justify-between gap-3" role="alert">
          <span className="text-sm text-red-700">{error}</span>
          <button type="button" onClick={onRetry} className="text-xs font-semibold text-red-700 underline">
            Yeniden dene
          </button>
        </div>
      ) : status ? (
        <>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="rounded-xl bg-gray-50 p-3">
              <span className="block text-[11px] text-gray-400">Yapılandırma / bağlantı</span>
              <span className={`font-semibold ${connectionClass(status)}`}>{connectionLabel(status)}</span>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <span className="block text-[11px] text-gray-400">Son başarılı çalışma</span>
              <span className="font-semibold text-navy">{formatDateTime(status.last_success_at)}</span>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <span className="block text-[11px] text-gray-400">Son tetikleyici</span>
              <span className="font-semibold text-navy">
                {run?.trigger === "manual" ? "Manuel" : run?.trigger === "cron" ? "Otomatik" : "—"}
              </span>
            </div>
            <div className="rounded-xl bg-gray-50 p-3">
              <span className="block text-[11px] text-gray-400">Sonuç</span>
              {run ? (
                <span
                  className={`inline-block mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_CLASS[run.status]}`}
                >
                  {STATUS_LABEL[run.status]}
                </span>
              ) : (
                <span className="font-semibold text-gray-400">Henüz yok</span>
              )}
            </div>
          </div>
          {run && (
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500">
              <span>
                Bulunan: <strong className="text-navy">{run.discovered}</strong>
              </span>
              <span>
                Aktarılan: <strong className="text-navy">{run.imported}</strong>
              </span>
              <span>
                Atlanan: <strong className="text-navy">{run.skipped}</strong>
              </span>
              <span>
                Yeniden denenecek: <strong className="text-navy">{run.retrying}</strong>
              </span>
            </div>
          )}
          {run?.last_error && (
            <p className="mt-3 rounded-xl bg-red-50 px-4 py-2 text-xs text-red-700" role="alert">
              {run.last_error}
            </p>
          )}
          {status.token_refresh_required && (
            <p className="mt-3 rounded-xl bg-amber-50 px-4 py-2 text-xs text-amber-800" role="alert">
              <i className="fa fa-triangle-exclamation mr-1" /> Instagram erişim tokenı yakında sona erecek
              {status.token_expires_at ? ` (${formatDateTime(status.token_expires_at)}).` : "."} Yenileyip Supabase
              secret değerini güncelleyin.
            </p>
          )}
        </>
      ) : null}
    </section>
  );
}
