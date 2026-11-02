import { n as e } from "./vendor-dist.js";
import { r as t } from "./utils.js";
import { t as n } from "./LabIcon.js";
var r = e();
function i({ announcement: e, onClick: i }) {
  return (0, r.jsxs)(`article`, {
    onClick: i,
    className: `group bg-white border border-gray-100 rounded-xl overflow-hidden
                  hover:border-gray-200 hover:shadow-lg transition-all duration-300
                  ${i ? `cursor-pointer` : ``}`,
    children: [
      (0, r.jsx)(`div`, {
        className: `relative h-40 bg-gray-50 flex items-center justify-center overflow-hidden`,
        children: e.images?.[0]?.image_url
          ? (0, r.jsx)(`img`, {
              src: e.images[0].image_url,
              alt: e.images[0].alt_text || e.title,
              className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
              loading: `lazy`,
            })
          : (0, r.jsx)(n, {
              name: `fa-newspaper`,
              className: `w-8 h-8 text-gray-300`,
            }),
      }),
      (0, r.jsxs)(`div`, {
        className: `p-5`,
        children: [
          (0, r.jsx)(`p`, {
            className: `text-[11px] text-gray-400 mb-2`,
            children: t(e.publish_date || e.created_at),
          }),
          (0, r.jsx)(`h3`, {
            className: `font-semibold text-navy text-[15px] leading-snug mb-1.5 line-clamp-2`,
            children: e.title,
          }),
          (0, r.jsx)(`p`, {
            className: `text-gray-400 text-[13px] leading-relaxed line-clamp-3`,
            children: e.content,
          }),
        ],
      }),
    ],
  });
}
export { i as t };
