import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { formatDate, truncate } from "../lib/format";
import InstagramSyncCard from "../admin/InstagramSyncCard";
import RecordFormModal from "../admin/RecordFormModal";
import { fetchSyncStatus, triggerSync, type SyncStatus } from "../admin/instagramSync";
import { attachImages, errorMessage, rpc, saveRecord, toDateTimeInput, toFormText, type FormData } from "../admin/records";
import {
  imageColumn,
  ownedGalleryPath,
  ownedStoragePath,
  removeGalleryImages,
  removeTableImage,
  uploadGalleryImage,
  uploadTableImage,
} from "../admin/storageImages";
import {
  IMAGE_ENTITY_TABLES,
  TABLES,
  getTable,
  publicQueryKeys,
  recordId,
  type AdminRecord,
  type TableId,
} from "../admin/tables";

// Admin panel: one generic list + form driven by admin/tables.ts. All reads/writes go through
// SECURITY DEFINER RPCs that check admin_users server-side. Ported from reference/assets/Admin.js.

/** Only https links to instagram.com are rendered as links. */
function instagramUrl(value: unknown): string | null {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && /(^|\.)instagram\.com$/i.test(url.hostname) ? url.href : null;
  } catch {
    return null;
  }
}

export default function Admin() {
  const { isAdmin, isLoading: authLoading, session, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [table, setTable] = useState<TableId>(TABLES[0].id);
  const [records, setRecords] = useState<AdminRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<AdminRecord | null>(null);
  const [form, setForm] = useState<FormData>({});
  const [saving, setSaving] = useState(false);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [syncStatus, setSyncStatus] = useState<SyncStatus | null>(null);
  const [syncLoading, setSyncLoading] = useState(true);
  const [syncError, setSyncError] = useState("");
  const [syncing, setSyncing] = useState(false);
  const tableDef = getTable(table);

  const clearPendingFile = useCallback(() => {
    setPendingFile(null);
    setPreviewUrl((url) => {
      if (url) URL.revokeObjectURL(url);
      return "";
    });
  }, []);

  const closeForm = useCallback(() => {
    clearPendingFile();
    setFormOpen(false);
  }, [clearPendingFile]);

  useEffect(
    () => () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    },
    [previewUrl],
  );

  useEffect(() => {
    if (!authLoading && !isAdmin) navigate("/login");
  }, [authLoading, isAdmin, navigate]);

  const invalidatePublicQueries = useCallback(async () => {
    await Promise.all(publicQueryKeys(table).map((queryKey) => queryClient.invalidateQueries({ queryKey })));
  }, [table, queryClient]);

  const loadRecords = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await rpc("admin_list_records", { p_table: table });
      if (error) throw error;
      let rows = (Array.isArray(data) ? data : []) as AdminRecord[];
      if (IMAGE_ENTITY_TABLES.has(table) && rows.length > 0) {
        const ids = rows.map((row) => row.id).filter((id): id is string => typeof id === "string");
        const { data: images, error: imagesError } = await rpc("admin_list_record_images", {
          p_entity_type: table,
          p_entity_ids: ids,
        });
        if (imagesError) throw imagesError;
        rows = attachImages(rows, Array.isArray(images) ? images : []);
      }
      setRecords(rows);
    } catch (error) {
      setRecords([]);
      toast.error(errorMessage(error, "Kayıtlar yüklenemedi."));
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [table]);

  useEffect(() => {
    if (isAdmin) loadRecords();
  }, [isAdmin, table, loadRecords]);

  const loadSyncStatus = useCallback(async () => {
    setSyncLoading(true);
    setSyncError("");
    try {
      setSyncStatus(await fetchSyncStatus());
    } catch (error) {
      setSyncStatus(null);
      setSyncError(errorMessage(error, "Instagram eşitleme durumu alınamadı."));
    } finally {
      setSyncLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) loadSyncStatus();
  }, [isAdmin, loadSyncStatus]);

  const runSync = async () => {
    if (syncing) return;
    setSyncing(true);
    try {
      const run = await triggerSync(session?.access_token);
      if (run.status === "success") toast.success(`Instagram eşitlemesi tamamlandı: ${run.imported} duyuru aktarıldı.`);
      else if (run.status === "partial")
        toast(
          `Instagram eşitlemesi kısmen tamamlandı: ${run.imported} aktarıldı, ${run.retrying} kayıt yeniden denenecek.`,
          { icon: "⚠️" },
        );
      else if (run.status === "already_running" || run.status === "running")
        toast("Instagram eşitlemesi zaten çalışıyor.", { icon: "⏳" });
      else toast.error(run.last_error || "Instagram eşitlemesi başarısız oldu.");

      if (run.imported > 0) {
        await queryClient.invalidateQueries({ queryKey: ["announcements"] });
        if (table === "announcements") await loadRecords();
      }
    } catch (error) {
      toast.error(errorMessage(error, "Instagram eşitlemesi başlatılamadı."));
    } finally {
      await loadSyncStatus();
      setSyncing(false);
    }
  };

  const openCreate = () => {
    clearPendingFile();
    setEditing(null);
    const initial: FormData = {};
    for (const field of tableDef.fields) {
      initial[field.name] = field.default === undefined ? (field.type === "checkbox" ? true : "") : field.default;
    }
    setForm(initial);
    setFormOpen(true);
  };

  const openEdit = (record: AdminRecord) => {
    clearPendingFile();
    setEditing(record);
    const initial: FormData = {};
    for (const field of tableDef.fields) {
      if (field.virtual) initial[field.name] = (record.images || []).map((image) => image.image_url).join("\n");
      else if (field.type === "datetime-local") initial[field.name] = toDateTimeInput(record[field.name]);
      else if (field.type === "lines" || field.type === "authors") initial[field.name] = toFormText(field.type, record[field.name]);
      else initial[field.name] = record[field.name] ?? field.default ?? "";
    }
    setForm(initial);
    setFormOpen(true);
  };

  const deleteRecord = async (record: AdminRecord) => {
    if (!confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
    try {
      const id = recordId(table, record);
      if (!id) throw new Error("Silinecek kayıt kimliği bulunamadı.");
      const { error } = await rpc("admin_delete_record", { p_table: table, p_id: id });
      if (error) throw error;
      // Also remove the record's uploaded image; a failure here doesn't undo the delete.
      const column = imageColumn(table);
      const path = column ? ownedStoragePath(table, record[column]) : null;
      const galleryPaths = (record.images || [])
        .map((image) => ownedGalleryPath(table, image.image_url))
        .filter((p): p is string => !!p);
      if (path || galleryPaths.length) {
        try {
          if (path) await removeTableImage(table, path);
          await removeGalleryImages(galleryPaths);
        } catch (error) {
          console.error("Silinen kaydın Storage görseli temizlenemedi:", error);
          toast.error("Kayıt silindi ancak eski görsel Storage’dan temizlenemedi.");
        }
      }
      await invalidatePublicQueries();
      await loadRecords();
      toast.success("Kayıt silindi.");
    } catch (error) {
      toast.error(errorMessage(error, "Silme başarısız."));
      console.error(error);
    }
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setSaving(true);
    let uploadedPath: string | null = null;
    try {
      const data = { ...form };
      const column = imageColumn(table);
      const previousPath = column ? ownedStoragePath(table, editing?.[column]) : null;

      if (column && pendingFile) {
        const userId = session?.user?.id;
        if (!userId) throw new Error("Görsel yüklemek için geçerli bir admin oturumu gerekiyor.");
        const uploaded = await uploadTableImage(table, pendingFile, userId);
        uploadedPath = uploaded.path;
        data[column] = uploaded.publicUrl;
      }

      await saveRecord(table, tableDef, editing, data);

      // Images that were replaced or dropped from the gallery: delete our uploads (best effort).
      const currentPath = column ? ownedStoragePath(table, data[column]) : null;
      const keptUrls = new Set(String(data._images || "").split("\n").map((line) => line.trim()));
      const droppedGallery = (editing?.images || [])
        .filter((image) => !keptUrls.has(image.image_url))
        .map((image) => ownedGalleryPath(table, image.image_url))
        .filter((p): p is string => !!p);
      if ((previousPath && previousPath !== currentPath) || droppedGallery.length) {
        try {
          if (previousPath && previousPath !== currentPath) await removeTableImage(table, previousPath);
          await removeGalleryImages(droppedGallery);
        } catch (error) {
          console.error("Eski Storage görseli temizlenemedi:", error);
          toast.error("Kayıt güncellendi ancak eski görsel Storage’dan temizlenemedi.");
        }
      }

      await invalidatePublicQueries();
      await loadRecords();
      closeForm();
      toast.success(editing ? "Kayıt güncellendi." : "Kayıt oluşturuldu.");
    } catch (error) {
      // Saving failed after the upload: roll the new file back.
      if (uploadedPath) {
        try {
          await removeTableImage(table, uploadedPath);
        } catch (rollbackError) {
          console.error("Başarısız kaydın yüklenen görseli geri alınamadı:", rollbackError);
        }
      }
      toast.error(errorMessage(error, "Kayıt işlemi başarısız."));
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const logout = async () => {
    await signOut();
    navigate("/login");
  };

  if (authLoading || !isAdmin) return null;

  const recordTitle = (record: AdminRecord) =>
    truncate(String(record[tableDef.titleField] || record.title || record.name || record.key || record.id || "-"), 80);

  return (
    <>
      <div className="bg-navy py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-extrabold text-white flex items-center gap-3">
              <i className="fa fa-shield-halved text-cyan" /> Yönetim Paneli
            </h1>
            <p className="text-white/40 text-sm mt-1">Supabase RPC üzerinden güvenli içerik yönetimi</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-sm">{session?.user?.email || "Admin"}</span>
            <button onClick={logout} className="btn-outline text-xs !py-2 !px-4">
              <i className="fa fa-right-from-bracket" /> Çıkış
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <InstagramSyncCard
          status={syncStatus}
          loading={syncLoading}
          error={syncError}
          syncing={syncing}
          onSync={() => void runSync()}
          onRetry={() => void loadSyncStatus()}
        />

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-56 shrink-0">
            <div className="bg-white border border-gray-100 rounded-2xl p-2 space-y-0.5 sticky top-20">
              {TABLES.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTable(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all text-left
                    ${table === item.id ? "bg-cyan/10 text-cyan" : "text-gray-500 hover:text-navy hover:bg-gray-50"}`}
                >
                  <i className={`fa ${item.icon} w-4 text-center`} />
                  {item.label}
                </button>
              ))}
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div>
                <h2 className="text-xl font-bold text-navy">{tableDef.label}</h2>
                <p className="text-gray-400 text-sm">{records.length} kayıt</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={loadRecords}
                  className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center
                                                      text-gray-400 hover:text-cyan hover:border-cyan/30 transition-all"
                  title="Yenile"
                >
                  <i className="fa fa-rotate-right text-sm" />
                </button>
                <button onClick={openCreate} className="btn-cyber text-xs !py-2.5 !px-4">
                  <i className="fa fa-plus" /> Yeni
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 rounded-full border-2 border-cyan/20 border-t-cyan animate-spin" />
              </div>
            ) : records.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <i className="fa fa-inbox text-4xl text-gray-200 mb-3" />
                <p className="text-gray-400">Bu bölümde kayıt yok.</p>
              </div>
            ) : (
              <div className="space-y-2">
                {records.map((record) => {
                  const instagram = instagramUrl(record.source_url);
                  const instagramClass =
                    "text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 bg-fuchsia-50 text-fuchsia-700";
                  return (
                    <div
                      key={String(record.id || record.key)}
                      className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4
                                  hover:border-cyan/20 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-navy text-sm truncate">{recordTitle(record)}</h3>
                          {record.is_published !== undefined && (
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0
                            ${record.is_published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}
                            >
                              {record.is_published ? "Yayında" : "Taslak"}
                            </span>
                          )}
                          {table === "announcements" &&
                            record.source_type === "instagram" &&
                            (instagram ? (
                              <a
                                href={instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${instagramClass} hover:bg-fuchsia-100`}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <i className="fa-brands fa-instagram mr-1" />
                                Instagram
                              </a>
                            ) : (
                              <span className={instagramClass}>
                                <i className="fa-brands fa-instagram mr-1" />
                                Instagram
                              </span>
                            ))}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-gray-400">
                          {record.created_at ? (
                            <span>
                              <i className="fa fa-clock mr-1" />
                              {formatDate(String(record.created_at))}
                            </span>
                          ) : null}
                          {record.id && <span className="text-[10px] opacity-50">ID: {String(record.id).slice(0, 8)}</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => openEdit(record)}
                          className="w-8 h-8 rounded-lg hover:bg-cyan/10 flex items-center justify-center text-gray-400 hover:text-cyan transition-all"
                          title="Düzenle"
                        >
                          <i className="fa fa-pen text-xs" />
                        </button>
                        <button
                          onClick={() => deleteRecord(record)}
                          className="w-8 h-8 rounded-lg hover:bg-red-50 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all"
                          title="Sil"
                        >
                          <i className="fa fa-trash text-xs" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {formOpen && (
        <RecordFormModal
          tableDef={tableDef}
          isEditing={!!editing}
          form={form}
          setForm={setForm}
          saving={saving}
          pendingFile={pendingFile}
          previewUrl={previewUrl}
          onPickFile={(file) => {
            clearPendingFile();
            setPendingFile(file);
            setPreviewUrl(URL.createObjectURL(file));
          }}
          onClearFile={clearPendingFile}
          onUploadGalleryImage={async (file) => {
            const userId = session?.user?.id;
            if (!userId) throw new Error("Görsel yüklemek için geçerli bir admin oturumu gerekiyor.");
            return uploadGalleryImage(table, file, userId);
          }}
          onSubmit={submit}
          onClose={closeForm}
        />
      )}
    </>
  );
}
