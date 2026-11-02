import { useEffect, useState } from "react";
import { formatDate } from "../lib/format";
import type { Announcement, WithImages } from "../lib/types";

type Props = { announcement: WithImages<Announcement>; onClose: () => void };

const arrowClass = `absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-navy/80 text-white
                                   hover:bg-cyan hover:text-navy shadow-lg flex items-center justify-center transition-colors`;

/** Full announcement with an image carousel. Esc closes, ←/→ change image; page scroll is locked while open. */
export default function AnnouncementModal({ announcement, onClose }: Props) {
  const images = announcement.images || [];
  const count = images.length;
  const [index, setIndex] = useState(0);
  const prev = () => count > 0 && setIndex((i) => (i - 1 + count) % count);
  const next = () => count > 0 && setIndex((i) => (i + 1) % count);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [announcement, count]);

  const current = images[index];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[90vh] overflow-y-auto scrollbar-hidden">
          <div className="sticky top-0 z-10 bg-navy text-white p-5 flex items-center justify-between gap-4 border-b border-cyan/30">
            <h3 className="font-bold text-lg sm:text-xl leading-snug">{announcement.title}</h3>
            <button
              onClick={onClose}
              className="w-9 h-9 shrink-0 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Duyuruyu kapat"
            >
              <i className="fa fa-times" />
            </button>
          </div>
          <div className="p-6">
            {current && (
              <div className="relative mb-6 rounded-2xl overflow-hidden bg-navy/5 border border-gray-100">
                <img
                  key={current.image_url}
                  src={current.image_url}
                  alt={current.alt_text || `${announcement.title} - görsel ${index + 1}`}
                  className="w-full h-[clamp(16rem,55vh,34rem)] object-contain"
                />
                {count > 1 && (
                  <>
                    <button type="button" onClick={prev} className={`${arrowClass} left-3`} aria-label="Önceki görsel">
                      <i className="fa fa-chevron-left" />
                    </button>
                    <button type="button" onClick={next} className={`${arrowClass} right-3`} aria-label="Sonraki görsel">
                      <i className="fa fa-chevron-right" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-navy/75 px-3 py-2">
                      {images.map((image, i) => (
                        <button
                          key={image.id || image.image_url}
                          type="button"
                          onClick={() => setIndex(i)}
                          className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-cyan" : "w-2 bg-white/70 hover:bg-white"}`}
                          aria-label={`${i + 1}. görsele git`}
                          aria-current={i === index ? "true" : undefined}
                        />
                      ))}
                    </div>
                    <span className="absolute top-3 right-3 rounded-full bg-navy/75 px-3 py-1.5 text-xs font-semibold text-white">
                      {index + 1} / {count}
                    </span>
                  </>
                )}
              </div>
            )}
            <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-wrap mb-4">{announcement.content}</div>
            <div className="text-xs text-gray-400 border-t border-gray-100 pt-4">
              <i className="fa fa-clock mr-1.5" /> {formatDate(announcement.publish_date || announcement.created_at)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
