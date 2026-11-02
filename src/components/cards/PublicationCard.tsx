import type { Publication } from "../../lib/types";

const linkClass = "text-cyan hover:text-cyan-dim font-medium transition-colors";

export default function PublicationCard({ publication }: { publication: Publication }) {
  const kind = publication.pub_type === "journal" ? "Dergi Makalesi" : "Konferans Bildirisi";
  return (
    <div className="flex gap-5 p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-md transition-all duration-300">
      <div className="shrink-0 w-14 pt-1">
        <div className="text-xl font-bold text-navy leading-none">{publication.pub_year}</div>
      </div>
      <div className="min-w-0 flex-1 border-l border-gray-100 pl-5">
        <h3 className="font-semibold text-navy text-[15px] leading-snug">{publication.title}</h3>
        <p className="text-gray-400 text-[13px] mt-1">{publication.authors}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[11px] text-gray-400">
          <span>
            {kind} · {publication.venue}
          </span>
          {publication.doi_url && (
            <a href={publication.doi_url} target="_blank" rel="noopener" className={linkClass}>
              DOI
            </a>
          )}
          {publication.pdf_url && (
            <a href={publication.pdf_url} target="_blank" rel="noopener" className={linkClass}>
              PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
