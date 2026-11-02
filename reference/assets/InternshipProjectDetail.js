import { i as e, l as t, n } from "./vendor-dist.js";
import { E as r, w as i } from "./index.js";
import { n as a, r as o } from "./UIStates.js";
import { t as s } from "./ProjectDetailView.js";
import { t as c } from "./internshipProjects.js";
var l = t(e(), 1),
  u = n(),
  d = {
    siteTitle: `SARGEM CyberSense Laboratuvarı | SAÜ Bilgisayar Mühendisliği`,
    loading: `Staj projesi yükleniyor...`,
    loadError: `Staj projesi yüklenirken hata oluştu.`,
    back: `Staj projelerine dön`,
    notFound: `Proje bulunamadı`,
    notFoundDescription: `Bu staj projesi kaldırılmış veya yayından alınmış olabilir.`,
  };
function f() {
  let { slug: e } = r(),
    { data: t, isLoading: n, error: f } = c(e);
  return (
    (0, l.useEffect)(
      () => (
        t && (document.title = `${t.title} | CyberSense Lab`),
        () => {
          document.title = d.siteTitle;
        }
      ),
      [t],
    ),
    n
      ? (0, u.jsx)(o, { text: d.loading })
      : f
        ? (0, u.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-4 py-16 text-center`,
            children: [
              (0, u.jsx)(a, { message: d.loadError }),
              (0, u.jsx)(i, {
                to: `/projeler?tur=staj`,
                className: `btn-cyber`,
                children: d.back,
              }),
            ],
          })
        : t
          ? (0, u.jsx)(s, { project: t })
          : (0, u.jsxs)(`div`, {
              className: `mx-auto max-w-3xl px-4 py-20 text-center`,
              children: [
                (0, u.jsx)(`i`, {
                  className: `fa fa-folder-open text-5xl text-gray-200`,
                  "aria-hidden": `true`,
                }),
                (0, u.jsx)(`h1`, {
                  className: `mt-5 text-2xl font-bold text-navy`,
                  children: d.notFound,
                }),
                (0, u.jsx)(`p`, {
                  className: `mt-2 text-gray-500`,
                  children: d.notFoundDescription,
                }),
                (0, u.jsx)(i, {
                  to: `/projeler?tur=staj`,
                  className: `btn-cyber mt-6`,
                  children: d.back,
                }),
              ],
            })
  );
}
export { f as default };
