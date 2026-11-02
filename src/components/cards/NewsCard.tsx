import LabIcon from "../ui/LabIcon";
import { formatDate } from "../../lib/format";
import type { Announcement, WithImages } from "../../lib/types";

type Props = { announcement: WithImages<Announcement>; onClick?: () => void };

export default function NewsCard({ announcement, onClick }: Props) {
  const cover = announcement.images?.[0];
  return (
    <article
      onClick={onClick}
      className={`group bg-white border border-gray-100 rounded-xl overflow-hidden
                  hover:border-gray-200 hover:shadow-lg transition-all duration-300
                  ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className="relative h-40 bg-gray-50 flex items-center justify-center overflow-hidden">
        {cover?.image_url ? (
          <img
            src={cover.image_url}
            alt={cover.alt_text || announcement.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <LabIcon name="fa-newspaper" className="w-8 h-8 text-gray-300" />
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] text-gray-400 mb-2">
          {formatDate(announcement.publish_date || announcement.created_at)}
        </p>
        <h3 className="font-semibold text-navy text-[15px] leading-snug mb-1.5 line-clamp-2">{announcement.title}</h3>
        <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-3">{announcement.content}</p>
      </div>
    </article>
  );
}
