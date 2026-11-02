import { i as e, l as t, n } from "./vendor-dist.js";
import { r } from "./index.js";
import { c as i } from "./useSupabase.js";
import { t as a } from "./Reveal.js";
import { n as o, t as s } from "./UIStates.js";
import { t as c } from "./PublicationCard.js";
var l = t(e(), 1),
  u = n();
function d() {
  let { data: e, isLoading: t, error: n } = i(),
    [d, f] = (0, l.useState)(`all`),
    p = (e || []).filter((e) => d === `all` || e.pub_type === d);
  return (0, u.jsxs)(u.Fragment, {
    children: [
      (0, u.jsx)(`div`, {
        className: `bg-navy py-12`,
        children: (0, u.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, u.jsxs)(`h1`, {
              className: `text-3xl font-extrabold text-white flex items-center gap-3`,
              children: [
                (0, u.jsx)(`i`, { className: `fa fa-book-open text-cyan` }),
                ` Yayınlar`,
              ],
            }),
            (0, u.jsx)(`p`, {
              className: `text-white/50 mt-2`,
              children: `Akademik yayınlar ve araştırma çıktıları`,
            }),
          ],
        }),
      }),
      (0, u.jsx)(`section`, {
        className: `py-12 bg-gray-50/50 min-h-[60vh]`,
        children: (0, u.jsxs)(`div`, {
          className: `max-w-4xl mx-auto px-4`,
          children: [
            (0, u.jsx)(`div`, {
              className: `flex gap-2 mb-8`,
              children: [
                { value: `all`, label: `Tümü` },
                { value: `journal`, label: `Dergi` },
                { value: `conference`, label: `Konferans` },
              ].map((e) =>
                (0, u.jsx)(
                  `button`,
                  {
                    onClick: () => f(e.value),
                    className: `px-4 py-2 rounded-xl text-sm font-medium transition-all
                  ${d === e.value ? `bg-cyan text-navy shadow-md` : `bg-white text-gray-500 hover:text-navy border border-gray-200 hover:border-cyan/30`}`,
                    children: e.label,
                  },
                  e.value,
                ),
              ),
            }),
            t &&
              (0, u.jsxs)(`div`, {
                className: `space-y-3`,
                children: [
                  (0, u.jsx)(r, {}),
                  (0, u.jsx)(r, {}),
                  (0, u.jsx)(r, {}),
                  (0, u.jsx)(r, {}),
                ],
              }),
            n &&
              (0, u.jsx)(o, { message: `Yayınlar yüklenirken hata oluştu.` }),
            p.length === 0 &&
              !t &&
              (0, u.jsx)(s, { message: `Bu kategoride yayın bulunmuyor.` }),
            (0, u.jsx)(`div`, {
              className: `space-y-3`,
              children: p.map((e, t) =>
                (0, u.jsx)(
                  a,
                  {
                    delay: t * 0.06,
                    children: (0, u.jsx)(c, { publication: e }),
                  },
                  e.id,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
}
export { d as default };
