import type { Dispatch, FormEvent, SetStateAction } from "react";
import toast from "react-hot-toast";
import type { FormData } from "./records";
import { errorMessage } from "./records";
import { validateImageFile } from "./storageImages";
import { useState } from "react";
import type { FieldDef, TableDef } from "./tables";

const inputClass = `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                                 focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`;

const OPTION_LABELS: Record<string, string> = {
  active: "Aktif",
  done: "Tamamlandı",
  plan: "Planlama",
  journal: "Dergi",
  conference: "Konferans",
  web: "Web",
  mobile: "Mobil",
  fullstack: "Full-Stack",
  standard: "Standart",
  wide: "Geniş",
};

type Props = {
  tableDef: TableDef;
  isEditing: boolean;
  form: FormData;
  setForm: Dispatch<SetStateAction<FormData>>;
  saving: boolean;
  /** Locally picked file for a storage-image field, not yet uploaded. */
  pendingFile: File | null;
  previewUrl: string;
  onPickFile: (file: File) => void;
  onClearFile: () => void;
  /** Uploads a gallery image and resolves to its public URL. */
  onUploadGalleryImage: (file: File) => Promise<string>;
  onSubmit: (event: FormEvent) => void;
  onClose: () => void;
};

const isUrl = (value: unknown) => /^https?:\/\//i.test(String(value || ""));

export default function RecordFormModal(props: Props) {
  const { tableDef, isEditing, setForm, saving, onSubmit, onClose } = props;
  const set = (name: string, value: unknown) => setForm((current) => ({ ...current, [name]: value }));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[10vh] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-navy text-white p-5 rounded-t-2xl flex items-center justify-between border-b border-cyan/30 z-10">
          <h3 className="font-bold">{isEditing ? "Kaydı Düzenle" : "Yeni Kayıt"}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <i className="fa fa-times" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="p-5 space-y-4">
          {tableDef.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                {field.label} {field.required && <span className="text-red-400">*</span>}
              </label>
              <FieldInput field={field} {...props} set={set} />
              {field.hint && <p className="mt-1 text-[11px] text-gray-400">{field.hint}</p>}
            </div>
          ))}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-500
                                   hover:bg-gray-50 transition-all"
            >
              Vazgeç
            </button>
            <button type="submit" disabled={saving} className="btn-cyber text-xs !py-2.5 !px-5">
              {saving ? (
                <>
                  <i className="fa fa-circle-notch fa-spin" /> Kaydediliyor
                </>
              ) : (
                <>
                  <i className="fa fa-floppy-disk" /> Kaydet
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function FieldInput({
  field,
  form,
  isEditing,
  pendingFile,
  previewUrl,
  onPickFile,
  onClearFile,
  onUploadGalleryImage,
  set,
}: Props & { field: FieldDef; set: (name: string, value: unknown) => void }) {
  const value = form[field.name];
  const [uploading, setUploading] = useState(false);

  switch (field.type) {
    case "textarea":
      return (
        <textarea
          value={String(value || "")}
          onChange={(e) => set(field.name, e.target.value)}
          className={`${inputClass}
                                 min-h-[80px] resize-y`}
          required={field.required}
        />
      );
    case "select":
      if (!field.options) break;
      return (
        <select
          value={String(value || field.default || "")}
          onChange={(e) => set(field.name, e.target.value)}
          className={`${inputClass} bg-white`}
        >
          {field.options.map((option) => (
            <option key={option} value={option}>
              {OPTION_LABELS[option] || option}
            </option>
          ))}
        </select>
      );
    case "checkbox":
      return (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => set(field.name, e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-cyan focus:ring-cyan/20"
          />
          <span className="text-sm text-gray-600">Yayında</span>
        </label>
      );
    case "datetime-local":
      return (
        <input
          type="datetime-local"
          value={String(value || "")}
          onChange={(e) => set(field.name, e.target.value)}
          className={inputClass}
          required={field.required}
        />
      );
    case "lines":
    case "authors":
      return (
        <textarea
          value={String(value || "")}
          onChange={(e) => set(field.name, e.target.value)}
          className={`${inputClass}
                                 min-h-[80px] resize-y`}
          required={field.required}
        />
      );
    case "image-upload":
      // Gallery images: one URL per line; uploaded files are appended as new lines.
      return (
        <div className="space-y-2">
          <textarea
            value={String(value || "")}
            onChange={(e) => set(field.name, e.target.value)}
            placeholder="Her satıra bir görsel URL'si yazın"
            className={`${inputClass}
                                 min-h-[60px] resize-y`}
          />
          <label
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-navy text-white text-xs font-semibold transition-colors ${uploading ? "opacity-60 cursor-wait" : "cursor-pointer hover:bg-navy/90"}`}
          >
            <i className={`fa ${uploading ? "fa-circle-notch fa-spin" : "fa-upload"}`} />{" "}
            {uploading ? "Yükleniyor" : "Görsel yükle"}
            <input
              type="file"
              multiple
              disabled={uploading}
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="sr-only"
              onChange={async (e) => {
                const files = Array.from(e.target.files || []);
                e.target.value = "";
                if (files.length === 0) return;
                setUploading(true);
                try {
                  const urls: string[] = [];
                  for (const file of files) urls.push(await onUploadGalleryImage(file));
                  const current = String(form[field.name] || "").trim();
                  set(field.name, [current, ...urls].filter(Boolean).join("\n"));
                } catch (error) {
                  toast.error(errorMessage(error, "Görsel yüklenemedi."));
                } finally {
                  setUploading(false);
                }
              }}
            />
          </label>
        </div>
      );
    case "storage-image": {
      // Shows the picked file (preview) or the saved URL; otherwise the value is a Font Awesome icon name.
      const hasImage = !!previewUrl || isUrl(value);
      return (
        <div className="rounded-xl border border-dashed border-gray-200 p-3">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 shrink-0 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden text-cyan">
              {hasImage ? (
                <img
                  src={previewUrl || String(value)}
                  alt="Görsel önizlemesi"
                  className={`w-full h-full ${field.name === "icon" ? "object-contain p-1" : "object-cover"}`}
                />
              ) : (
                <i className={`fa ${String(value || field.default || "fa-image")} text-2xl`} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-navy text-white text-xs font-semibold cursor-pointer hover:bg-navy/90 transition-colors">
                <i className="fa fa-upload" /> Görsel seç
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    e.target.value = "";
                    if (!file) return;
                    try {
                      validateImageFile(file);
                      onPickFile(file);
                    } catch (error) {
                      toast.error(errorMessage(error, "Görsel seçilemedi."));
                    }
                  }}
                />
              </label>
              <p className="mt-2 text-[11px] text-gray-400 truncate">
                {pendingFile?.name || "JPG, PNG, WebP veya GIF · en fazla 5 MB"}
              </p>
              {hasImage && (
                <button
                  type="button"
                  onClick={() => {
                    onClearFile();
                    set(field.name, field.default || "");
                  }}
                  className="mt-1 text-[11px] font-medium text-red-500 hover:text-red-600"
                >
                  Görseli kaldır
                </button>
              )}
            </div>
          </div>
        </div>
      );
    }
  }

  if (field.createOnly && isEditing) {
    return (
      <input
        type="text"
        value={String(value || "")}
        disabled
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-400"
      />
    );
  }
  return (
    <input
      type={field.type}
      value={String(value ?? "")}
      onChange={(e) => set(field.name, e.target.value)}
      className={inputClass}
      required={field.required}
      min={field.min}
      max={field.max}
      pattern={field.pattern?.regex}
      title={field.pattern?.message}
      onInvalid={(e) => field.pattern && e.currentTarget.setCustomValidity(field.pattern.message)}
      onInput={(e) => e.currentTarget.setCustomValidity("")}
    />
  );
}
