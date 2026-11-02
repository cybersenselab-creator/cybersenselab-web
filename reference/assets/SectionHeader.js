import { n as e } from "./vendor-dist.js";
var t = e();
function n({ tag: e, title: n, center: r }) {
  return (0, t.jsxs)(`div`, {
    className: `mb-8 ${r ? `text-center` : ``}`,
    children: [
      e &&
        (0, t.jsx)(`p`, {
          className: `text-cyan text-[11px] font-semibold uppercase tracking-[0.2em] mb-2 `,
          children: e,
        }),
      (0, t.jsx)(`h2`, {
        className: `text-2xl md:text-[28px] font-bold text-navy tracking-tight`,
        children: n,
      }),
      (0, t.jsx)(`div`, {
        className: `mt-3 w-12 h-0.5 bg-cyan ${r ? `mx-auto` : ``}`,
      }),
    ],
  });
}
export { n as t };
