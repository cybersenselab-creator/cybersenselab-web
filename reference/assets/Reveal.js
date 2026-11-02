import { n as e } from "./vendor-dist.js";
import { i as t } from "./index.js";
var n = e();
function r({
  children: e,
  delay: r = 0,
  y: i = 28,
  className: a,
  once: o = !0,
}) {
  return (0, n.jsx)(t.div, {
    className: a,
    initial: { opacity: 0, y: i },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: o, margin: `-60px` },
    transition: { duration: 0.6, delay: r, ease: [0.22, 1, 0.36, 1] },
    children: e,
  });
}
export { r as t };
