import { n as e } from "./vendor-dist.js";
var t = e();
function n({ publication: e }) {
  let n = e.pub_type === `journal` ? `Dergi Makalesi` : `Konferans Bildirisi`;
  return (0, t.jsxs)(`div`, {
    className: `flex gap-5 p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-md transition-all duration-300`,
    children: [
      (0, t.jsx)(`div`, {
        className: `shrink-0 w-14 pt-1`,
        children: (0, t.jsx)(`div`, {
          className: `text-xl font-bold text-navy leading-none`,
          children: e.pub_year,
        }),
      }),
      (0, t.jsxs)(`div`, {
        className: `min-w-0 flex-1 border-l border-gray-100 pl-5`,
        children: [
          (0, t.jsx)(`h3`, {
            className: `font-semibold text-navy text-[15px] leading-snug`,
            children: e.title,
          }),
          (0, t.jsx)(`p`, {
            className: `text-gray-400 text-[13px] mt-1`,
            children: e.authors,
          }),
          (0, t.jsxs)(`div`, {
            className: `flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-[11px] text-gray-400`,
            children: [
              (0, t.jsxs)(`span`, { children: [n, ` · `, e.venue] }),
              e.doi_url &&
                (0, t.jsx)(`a`, {
                  href: e.doi_url,
                  target: `_blank`,
                  rel: `noopener`,
                  className: `text-cyan hover:text-cyan-dim font-medium transition-colors`,
                  children: `DOI`,
                }),
              e.pdf_url &&
                (0, t.jsx)(`a`, {
                  href: e.pdf_url,
                  target: `_blank`,
                  rel: `noopener`,
                  className: `text-cyan hover:text-cyan-dim font-medium transition-colors`,
                  children: `PDF`,
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { n as t };
