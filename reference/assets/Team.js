import { n as e } from "./vendor-dist.js";
import { n as t } from "./index.js";
import { t as n } from "./utils.js";
import { d as r } from "./useSupabase.js";
import { t as i } from "./Reveal.js";
import { n as a, t as o } from "./UIStates.js";
import { t as s } from "./TeamCard.js";
var c = e();
function l() {
  let { data: e, isLoading: l, error: u } = r(),
    d = {};
  (e || []).forEach((e) => {
    let t = e.priority || 1;
    (d[t] || (d[t] = []), d[t].push(e));
  });
  let f = Object.keys(d)
    .map(Number)
    .sort((e, t) => t - e);
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)(`div`, {
        className: `bg-navy py-12`,
        children: (0, c.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            (0, c.jsxs)(`h1`, {
              className: `text-3xl font-extrabold text-white flex items-center gap-3`,
              children: [
                (0, c.jsx)(`i`, { className: `fa fa-users text-cyan` }),
                ` Araştırma Ekibi`,
              ],
            }),
            (0, c.jsx)(`p`, {
              className: `text-white/50 mt-2`,
              children: `SARGEM CyberSense Laboratuvarı bünyesindeki akademisyen ve araştırmacılar`,
            }),
          ],
        }),
      }),
      (0, c.jsx)(`section`, {
        className: `py-12 bg-gray-50/50 min-h-[60vh]`,
        children: (0, c.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: [
            l &&
              (0, c.jsxs)(`div`, {
                className: `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`,
                children: [
                  (0, c.jsx)(t, {}),
                  (0, c.jsx)(t, {}),
                  (0, c.jsx)(t, {}),
                  (0, c.jsx)(t, {}),
                ],
              }),
            u &&
              (0, c.jsx)(a, {
                message: `Ekip bilgisi yüklenirken hata oluştu.`,
              }),
            e &&
              e.length === 0 &&
              (0, c.jsx)(o, { message: `Henüz ekip üyesi eklenmemiş.` }),
            f.map((e) => {
              let t = n[e] || { label: `Ekip Üyeleri`, icon: `fa-user` };
              return (0, c.jsxs)(
                `div`,
                {
                  className: `mb-10`,
                  children: [
                    (0, c.jsx)(i, {
                      children: (0, c.jsxs)(`div`, {
                        className: `flex items-center gap-3 mb-6 border-l-4 border-cyan pl-4`,
                        children: [
                          (0, c.jsx)(`i`, {
                            className: `fa ${t.icon} text-cyan text-lg`,
                          }),
                          (0, c.jsx)(`h3`, {
                            className: `text-lg font-bold text-navy`,
                            children: t.label,
                          }),
                        ],
                      }),
                    }),
                    (0, c.jsx)(`div`, {
                      className: `grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5`,
                      children: (d[e] || []).map((e, t) =>
                        (0, c.jsx)(
                          i,
                          {
                            delay: t * 0.06,
                            children: (0, c.jsx)(s, { member: e }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                },
                e,
              );
            }),
          ],
        }),
      }),
    ],
  });
}
export { l as default };
