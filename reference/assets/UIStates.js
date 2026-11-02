import { n as e } from "./vendor-dist.js";
var t = e();
function n({ text: e = `Yükleniyor...` }) {
  return (0, t.jsxs)(`div`, {
    className: `flex flex-col items-center justify-center py-16`,
    children: [
      (0, t.jsx)(`div`, {
        className: `w-11 h-11 rounded-full border-3 border-cyan/20 border-t-cyan animate-spin`,
      }),
      (0, t.jsx)(`p`, { className: `mt-4 text-gray-400 text-sm`, children: e }),
    ],
  });
}
function r({ message: e = `Bir hata oluştu.` }) {
  return (0, t.jsxs)(`div`, {
    className: `flex flex-col items-center justify-center py-16 text-center`,
    children: [
      (0, t.jsx)(`i`, {
        className: `fa fa-circle-exclamation text-4xl text-red-500 mb-3`,
      }),
      (0, t.jsx)(`p`, { className: `text-red-500 text-sm`, children: e }),
    ],
  });
}
function i({ message: e = `Henüz içerik bulunmuyor.` }) {
  return (0, t.jsxs)(`div`, {
    className: `flex flex-col items-center justify-center py-16 text-center`,
    children: [
      (0, t.jsx)(`i`, { className: `fa fa-inbox text-4xl text-gray-300 mb-3` }),
      (0, t.jsx)(`p`, { className: `text-gray-400 text-sm`, children: e }),
    ],
  });
}
export { r as n, n as r, i as t };
