import { Link } from "react-router";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSiteSettings } from "../hooks/useContent";
import PageHeader from "../components/layout/PageHeader";
import { Skeleton } from "../components/ui/Skeleton";

const SUBJECTS = ["Araştırma İşbirliği", "Doktora Programı", "Proje Desteği", "Etkinlik", "Diğer"];

const fieldClass =
  "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-cyan focus:ring-2 focus:ring-cyan/20";
const iconBadge = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan";
const contactLink =
  "mt-1 block text-sm text-gray-600 transition-colors hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30";

type FormValues = { fullName: string; email: string; subject: string; message: string };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-600">
      {message}
    </p>
  );
}

export default function Contact() {
  // Contact details come from `site_ayarlari` with hard-coded fallbacks.
  const { data: settings, isLoading } = useSiteSettings();
  const address =
    settings?.lab_adres?.trim() ||
    "Esentepe, 54050 Serdivan/Sakarya — Sakarya Araştırma Geliştirme Uygulama ve Araştırma Merkezi";
  const email = settings?.lab_email?.trim() || "cybersenselab@gmail.com";
  const hours = settings?.lab_calisma_saatleri?.trim() || "Pazartesi – Cuma: 09:00 – 17:00";
  const phone = settings?.lab_telefon?.trim() || "+90 (264) 295 5529";
  const encodedAddress = encodeURIComponent(address);
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const mapLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // No backend: the form opens the visitor's mail client with a pre-filled message.
  const onSubmit = handleSubmit((values) => {
    if (isLoading) {
      toast.error("İletişim bilgileri henüz yükleniyor.");
      return;
    }
    const subject = `[CyberSense İletişim] ${values.subject} - ${values.fullName}`;
    const body = [
      `Ad Soyad: ${values.fullName}`,
      `Gönderen E-posta: ${values.email}`,
      `Konu: ${values.subject}`,
      "",
      "Mesaj:",
      values.message,
    ].join("\r\n");
    toast.success("E-posta uygulamanız açılıyor.");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  const a11y = (field: keyof FormValues) => ({
    "aria-invalid": errors[field] ? ("true" as const) : ("false" as const),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <>
      <PageHeader icon="fa-envelope" title="İletişim" />
      <section className="min-h-[60vh] bg-gray-50/50 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5">
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-navy">Laboratuvar Bilgileri</h2>
            <div className="mt-3 h-0.5 w-12 bg-cyan" />
            {isLoading ? (
              <div className="mt-8 space-y-6" aria-live="polite" aria-busy="true">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Skeleton className="h-10 w-10 shrink-0 rounded-xl" />
                    <div className="flex-1 space-y-2 pt-1">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-4 w-3/4" />
                    </div>
                  </div>
                ))}
                <Skeleton className="h-64 w-full" />
              </div>
            ) : (
              <>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className={iconBadge}>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">Adres</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className={iconBadge}>
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">E-posta</h3>
                      <a href={`mailto:${email}`} className={contactLink}>
                        {email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className={iconBadge}>
                      <i className="fa fa-phone" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">Telefon</h3>
                      <a href={phoneHref} className={contactLink}>
                        {phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className={iconBadge}>
                      <i className="fa fa-clock" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">Çalışma Saatleri</h3>
                      <p className="mt-1 text-sm text-gray-600">{hours}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 overflow-hidden rounded-xl border border-gray-100">
                  <iframe
                    title={`${address} konumu`}
                    src={mapEmbedUrl}
                    className="h-64 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-navy focus:outline-none focus:ring-2 focus:ring-cyan/30"
                >
                  Google Maps'te Aç
                  <i className="fa fa-external-link" aria-hidden="true" />
                </a>
              </>
            )}
          </article>

          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-navy">
              <i className="fa fa-paper-plane text-cyan" aria-hidden="true" />
              Mesaj Gönderin
            </h2>
            <div className="mt-3 h-0.5 w-12 bg-cyan" />
            <form className="mt-8 space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="text-sm font-semibold text-navy">
                    Ad Soyad
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    className={fieldClass}
                    {...a11y("fullName")}
                    {...register("fullName", { required: "Ad soyad alanı zorunludur." })}
                  />
                  <FieldError id="fullName-error" message={errors.fullName?.message} />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-navy">
                    E-posta
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={fieldClass}
                    {...a11y("email")}
                    {...register("email", {
                      required: "E-posta alanı zorunludur.",
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Geçerli bir e-posta adresi girin." },
                    })}
                  />
                  <FieldError id="email-error" message={errors.email?.message} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="text-sm font-semibold text-navy">
                  Konu
                </label>
                <select
                  id="subject"
                  defaultValue=""
                  className={fieldClass}
                  {...a11y("subject")}
                  {...register("subject", { required: "Konu seçimi zorunludur." })}
                >
                  <option value="" disabled>
                    Bir konu seçin
                  </option>
                  {SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
                <FieldError id="subject-error" message={errors.subject?.message} />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-navy">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  rows={7}
                  className={fieldClass}
                  {...a11y("message")}
                  {...register("message", { required: "Mesaj alanı zorunludur." })}
                />
                <FieldError id="message-error" message={errors.message?.message} />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:bg-cyan-dim hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2"
                disabled={isLoading}
              >
                <i className="fa fa-paper-plane" aria-hidden="true" />
                Gönder
              </button>
              <p className="text-xs leading-5 text-gray-400">
                Bu form bilgileri site veritabanına kaydetmez; gönderim için e-posta uygulamanızı açar. Kişisel
                verilerin işlenmesine ilişkin ayrıntılar için{" "}
                <Link to="/gizlilik-ve-kvkk" className="font-semibold text-cyan hover:text-navy">
                  Gizlilik ve KVKK Aydınlatma Metni'ni
                </Link>{" "}
                inceleyebilirsiniz.
              </p>
            </form>
          </article>
        </div>
      </section>
    </>
  );
}
