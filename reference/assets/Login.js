import { i as e, l as t, n } from "./vendor-dist.js";
import {
  T as r,
  a as i,
  s as a,
  w as o,
} from "./index.js";
var s = t(e(), 1),
  c = n();
function l() {
  let { signIn: e } = i(),
    t = r(),
    [n, l] = (0, s.useState)(``),
    [u, d] = (0, s.useState)(``),
    [f, p] = (0, s.useState)(!1);
  return (0, c.jsx)(`div`, {
    className: `min-h-[80vh] flex items-center justify-center bg-gray-50/50 py-12 px-4`,
    children: (0, c.jsxs)(`div`, {
      className: `w-full max-w-sm`,
      children: [
        (0, c.jsxs)(o, {
          to: `/`,
          className: `flex items-center justify-center gap-3 mb-8`,
          children: [
            (0, c.jsx)(`img`, {
              src: `/logos/sargem.svg`,
              alt: `SARGEM CyberSense Laboratuvarı`,
              className: `w-10 h-10 rounded-full object-cover`,
            }),
            (0, c.jsx)(`span`, {
              className: `text-navy font-bold text-sm`,
              children: `CyberSense Laboratuvarı`,
            }),
          ],
        }),
        (0, c.jsxs)(`div`, {
          className: `bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8`,
          children: [
            (0, c.jsxs)(`div`, {
              className: `text-center mb-6`,
              children: [
                (0, c.jsx)(`p`, {
                  className: `text-gray-400 text-xs font-semibold uppercase tracking-wide mb-1`,
                  children: `Yönetim Girişi`,
                }),
                (0, c.jsx)(`h1`, {
                  className: `text-xl font-bold text-navy`,
                  children: `Güvenli Admin Oturumu`,
                }),
              ],
            }),
            (0, c.jsxs)(`form`, {
              onSubmit: async (r) => {
                if ((r.preventDefault(), !n || !u)) {
                  a.error(`Kullanıcı adı ve şifre gerekli.`);
                  return;
                }
                p(!0);
                try {
                  (await e(n, u),
                    a.success(`Giriş başarılı. Yönlendiriliyorsunuz...`),
                    t(`/admin`));
                } catch (e) {
                  let t = e instanceof Error ? e.message : `Giriş başarısız.`;
                  a.error(t);
                } finally {
                  p(!1);
                }
              },
              className: `space-y-4`,
              children: [
                (0, c.jsxs)(`div`, {
                  children: [
                    (0, c.jsx)(`label`, {
                      className: `block text-xs font-semibold text-gray-500 mb-1.5`,
                      children: `Kullanıcı Adı`,
                    }),
                    (0, c.jsx)(`input`, {
                      type: `text`,
                      value: n,
                      onChange: (e) => l(e.target.value),
                      className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                           focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`,
                      placeholder: `E-posta adresiniz`,
                      autoComplete: `username`,
                      required: !0,
                    }),
                  ],
                }),
                (0, c.jsxs)(`div`, {
                  children: [
                    (0, c.jsx)(`label`, {
                      className: `block text-xs font-semibold text-gray-500 mb-1.5`,
                      children: `Şifre`,
                    }),
                    (0, c.jsx)(`input`, {
                      type: `password`,
                      value: u,
                      onChange: (e) => d(e.target.value),
                      className: `w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm\r
                           focus:border-cyan focus:ring-2 focus:ring-cyan/20 outline-none transition-all`,
                      placeholder: `••••••••`,
                      autoComplete: `current-password`,
                      required: !0,
                    }),
                  ],
                }),
                (0, c.jsx)(`button`, {
                  type: `submit`,
                  disabled: f,
                  className: `btn-cyber w-full justify-center`,
                  children: f
                    ? (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(`i`, {
                            className: `fa fa-circle-notch fa-spin`,
                          }),
                          ` Kontrol ediliyor`,
                        ],
                      })
                    : (0, c.jsxs)(c.Fragment, {
                        children: [
                          (0, c.jsx)(`i`, {
                            className: `fa fa-right-to-bracket`,
                          }),
                          ` Giriş`,
                        ],
                      }),
                }),
              ],
            }),
          ],
        }),
        (0, c.jsx)(`p`, {
          className: `text-center text-xs text-gray-400 mt-6`,
          children: (0, c.jsxs)(o, {
            to: `/`,
            className: `hover:text-cyan transition-colors`,
            children: [
              (0, c.jsx)(`i`, { className: `fa fa-arrow-left mr-1` }),
              ` Ana sayfaya dön`,
            ],
          }),
        }),
      ],
    }),
  });
}
export { l as default };
