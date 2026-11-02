const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Home-BuE1QPxD-p20261026-v2.js",
      "assets/dist-C4dS1tJc.js",
      "assets/useSupabase-Z6xPqfp8-p20261026-v2.js",
      "assets/useQuery-BaT54fwj-p20261026-v2.js",
      "assets/LabIcon-Co_4XuAz-p20261026-v2.js",
      "assets/NewsCard-BNuq5SLF-p20261026-v2.js",
      "assets/utils-DmCcW9bD-p20261026-v2.js",
      "assets/Reveal-bKVUANtI-p20261026-v2.js",
      "assets/UIStates-CpLv3UR8-p20261026-v2.js",
      "assets/SectionHeader-t-IBsAfC-p20261026-v2.js",
      "assets/TeamCard-CRAdvmrw-p20261026-v2.js",
      "assets/PublicationCard-UXrBwufc-p20261026-v2.js",
      "assets/Team-DLTbaP7z-p20261026-v2.js",
      "assets/Projects-DsmClrTJ-p20261026-v2.js",
      "assets/internshipProjects-BVseJqrW-p20261026-v2.js",
      "assets/ResearchProjectDetails-C3JfnBjW-p20261026-v2.js",
      "assets/ProjectDetailView-BkNVwEQE-p20261026-v2.js",
      "assets/InternshipProjectDetail-BezSkbWo-p20261026-v2.js",
      "assets/Publications-DTjNoipo-p20261026-v2.js",
      "assets/Announcements-Bn-xxdkT-p20261026-v2.js",
      "assets/Events-Bux3tZlp-p20261026-v2.js",
      "assets/Contact-BCTAZcOk-p20261026-v2.js",
      "assets/Privacy-CxKoxo_g-p20261026-v2.js",
      "assets/Login-DNxjfrBS-p20261026-v2.js",
      "assets/Admin-NgXFgSv3-p20261026-v2.js",
    ]),
) => i.map((i) => d[i]);
import {
  a as e,
  c as t,
  i as n,
  l as r,
  n as i,
  o as a,
  r as o,
  s,
  t as c,
} from "./vendor-dist.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`)
        for (let e of t.addedNodes)
          e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials`
          ? `include`
          : e.crossOrigin === `anonymous`
            ? `omit`
            : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var l = e((e) => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
        else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n))
            l < a && 0 > i(u, c)
              ? ((e[r] = u), (e[l] = n), (r = l))
              : ((e[r] = c), (e[s] = n), (r = s));
          else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
          else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (
      typeof performance == `object` &&
      typeof performance.now == `function`
    ) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = !1,
      m = !1,
      h = !1,
      g = typeof setTimeout == `function` ? setTimeout : null,
      _ = typeof clearTimeout == `function` ? clearTimeout : null,
      v = typeof setImmediate < `u` ? setImmediate : null;
    typeof navigator < `u` &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);
        else if (i.startTime <= e)
          (r(l), (i.sortIndex = i.expirationTime), t(c, i));
        else break;
        i = n(l);
      }
    }
    function b(e) {
      if (((h = !1), y(e), !m)) {
        if (n(c) !== null) ((m = !0), ce(x));
        else {
          var t = n(l);
          t !== null && le(b, t.startTime - e);
        }
      }
    }
    function x(t, i) {
      ((m = !1), h && ((h = !1), _(ee), (ee = -1)), (p = !0));
      var a = f;
      try {
        for (
          y(i), d = n(c);
          d !== null && (!(d.expirationTime > i) || (t && !re()));
        ) {
          var o = d.callback;
          if (typeof o == `function`) {
            ((d.callback = null), (f = d.priorityLevel));
            var s = o(d.expirationTime <= i);
            ((i = e.unstable_now()),
              typeof s == `function` ? (d.callback = s) : d === n(c) && r(c),
              y(i));
          } else r(c);
          d = n(c);
        }
        if (d !== null) var u = !0;
        else {
          var g = n(l);
          (g !== null && le(b, g.startTime - i), (u = !1));
        }
        return u;
      } finally {
        ((d = null), (f = a), (p = !1));
      }
    }
    var S = !1,
      C = null,
      ee = -1,
      te = 5,
      ne = -1;
    function re() {
      return !(e.unstable_now() - ne < te);
    }
    function ie() {
      if (C !== null) {
        var t = e.unstable_now();
        ne = t;
        var n = !0;
        try {
          n = C(!0, t);
        } finally {
          n ? ae() : ((S = !1), (C = null));
        }
      } else S = !1;
    }
    var ae;
    if (typeof v == `function`)
      ae = function () {
        v(ie);
      };
    else if (typeof MessageChannel < `u`) {
      var oe = new MessageChannel(),
        se = oe.port2;
      ((oe.port1.onmessage = ie),
        (ae = function () {
          se.postMessage(null);
        }));
    } else
      ae = function () {
        g(ie, 0);
      };
    function ce(e) {
      ((C = e), S || ((S = !0), ae()));
    }
    function le(t, n) {
      ee = g(function () {
        t(e.unstable_now());
      }, n);
    }
    ((e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        m || p || ((m = !0), ce(x));
      }),
      (e.unstable_forceFrameRate = function (e) {
        0 > e || 125 < e
          ? console.error(
              `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
            )
          : (te = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(c);
      }),
      (e.unstable_next = function (e) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = f;
        }
        var n = f;
        f = t;
        try {
          return e();
        } finally {
          f = n;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = f;
        f = e;
        try {
          return t();
        } finally {
          f = n;
        }
      }),
      (e.unstable_scheduleCallback = function (r, i, a) {
        var o = e.unstable_now();
        switch (
          (typeof a == `object` && a
            ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
            : (a = o),
          r)
        ) {
          case 1:
            var s = -1;
            break;
          case 2:
            s = 250;
            break;
          case 5:
            s = 1073741823;
            break;
          case 4:
            s = 1e4;
            break;
          default:
            s = 5e3;
        }
        return (
          (s = a + s),
          (r = {
            id: u++,
            callback: i,
            priorityLevel: r,
            startTime: a,
            expirationTime: s,
            sortIndex: -1,
          }),
          a > o
            ? ((r.sortIndex = a),
              t(l, r),
              n(c) === null &&
                r === n(l) &&
                (h ? (_(ee), (ee = -1)) : (h = !0), le(b, a - o)))
            : ((r.sortIndex = s), t(c, r), m || p || ((m = !0), ce(x))),
          r
        );
      }),
      (e.unstable_shouldYield = re),
      (e.unstable_wrapCallback = function (e) {
        var t = f;
        return function () {
          var n = f;
          f = t;
          try {
            return e.apply(this, arguments);
          } finally {
            f = n;
          }
        };
      }));
  }),
  u = e((e, t) => {
    t.exports = l();
  }),
  d = e((e) => {
    var t = n(),
      r = u();
    function i(e) {
      for (
        var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += `&args[]=` + encodeURIComponent(arguments[n]);
      return (
        `Minified React error #` +
        e +
        `; visit ` +
        t +
        ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
      );
    }
    var a = new Set(),
      o = {};
    function s(e, t) {
      (c(e, t), c(e + `Capture`, t));
    }
    function c(e, t) {
      for (o[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
    }
    var l = !(
        typeof window > `u` ||
        window.document === void 0 ||
        window.document.createElement === void 0
      ),
      d = Object.prototype.hasOwnProperty,
      f =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      p = {},
      m = {};
    function h(e) {
      return d.call(m, e)
        ? !0
        : d.call(p, e)
          ? !1
          : f.test(e)
            ? (m[e] = !0)
            : ((p[e] = !0), !1);
    }
    function g(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case `function`:
        case `symbol`:
          return !0;
        case `boolean`:
          return r
            ? !1
            : n === null
              ? ((e = e.toLowerCase().slice(0, 5)),
                e !== `data-` && e !== `aria-`)
              : !n.acceptsBooleans;
        default:
          return !1;
      }
    }
    function _(e, t, n, r) {
      if (t == null || g(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return !1 === t;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function v(e, t, n, r, i, a, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o));
    }
    var y = {};
    (`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
      .split(` `)
      .forEach(function (e) {
        y[e] = new v(e, 0, !1, e, null, !1, !1);
      }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        y[t] = new v(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(
        function (e) {
          y[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
        },
      ),
      [
        `autoReverse`,
        `externalResourcesRequired`,
        `focusable`,
        `preserveAlpha`,
      ].forEach(function (e) {
        y[e] = new v(e, 2, !1, e, null, !1, !1);
      }),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          y[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        y[e] = new v(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        y[e] = new v(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        y[e] = new v(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        y[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }));
    var b = /[\-:]([a-z])/g;
    function x(e) {
      return e[1].toUpperCase();
    }
    (`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
      .split(` `)
      .forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(t, 1, !1, e, null, !1, !1);
      }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(b, x);
          y[t] = new v(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(b, x);
        y[t] = new v(
          t,
          1,
          !1,
          e,
          `http://www.w3.org/XML/1998/namespace`,
          !1,
          !1,
        );
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (y.xlinkHref = new v(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1,
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        y[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }));
    function S(e, t, n, r) {
      var i = y.hasOwnProperty(t) ? y[t] : null;
      (i === null
        ? r ||
          !(2 < t.length) ||
          (t[0] !== `o` && t[0] !== `O`) ||
          (t[1] !== `n` && t[1] !== `N`)
        : i.type !== 0) &&
        (_(t, n, i, r) && (n = null),
        r || i === null
          ? h(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, `` + n))
          : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? i.type !== 3 && `` : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((i = i.type),
                  (n = i === 3 || (i === 4 && !0 === n) ? `` : `` + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ee = Symbol.for(`react.element`),
      te = Symbol.for(`react.portal`),
      ne = Symbol.for(`react.fragment`),
      re = Symbol.for(`react.strict_mode`),
      ie = Symbol.for(`react.profiler`),
      ae = Symbol.for(`react.provider`),
      oe = Symbol.for(`react.context`),
      se = Symbol.for(`react.forward_ref`),
      ce = Symbol.for(`react.suspense`),
      le = Symbol.for(`react.suspense_list`),
      ue = Symbol.for(`react.memo`),
      de = Symbol.for(`react.lazy`),
      fe = Symbol.for(`react.offscreen`),
      pe = Symbol.iterator;
    function me(e) {
      return typeof e != `object` || !e
        ? null
        : ((e = (pe && e[pe]) || e[`@@iterator`]),
          typeof e == `function` ? e : null);
    }
    var w = Object.assign,
      he;
    function ge(e) {
      if (he === void 0)
        try {
          throw Error();
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/);
          he = (t && t[1]) || ``;
        }
      return (
        `
` +
        he +
        e
      );
    }
    var _e = !1;
    function ve(e, t) {
      if (!e || _e) return ``;
      _e = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t) {
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == `object` && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (e) {
              r = e;
            }
            e.call(t.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (t) {
        if (t && r && typeof t.stack == `string`) {
          for (
            var i = t.stack.split(`
`),
              a = r.stack.split(`
`),
              o = i.length - 1,
              s = a.length - 1;
            1 <= o && 0 <= s && i[o] !== a[s];
          )
            s--;
          for (; 1 <= o && 0 <= s; o--, s--)
            if (i[o] !== a[s]) {
              if (o !== 1 || s !== 1)
                do
                  if ((o--, s--, 0 > s || i[o] !== a[s])) {
                    var c =
                      `
` + i[o].replace(` at new `, ` at `);
                    return (
                      e.displayName &&
                        c.includes(`<anonymous>`) &&
                        (c = c.replace(`<anonymous>`, e.displayName)),
                      c
                    );
                  }
                while (1 <= o && 0 <= s);
              break;
            }
        }
      } finally {
        ((_e = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : ``) ? ge(e) : ``;
    }
    function ye(e) {
      switch (e.tag) {
        case 5:
          return ge(e.type);
        case 16:
          return ge(`Lazy`);
        case 13:
          return ge(`Suspense`);
        case 19:
          return ge(`SuspenseList`);
        case 0:
        case 2:
        case 15:
          return ((e = ve(e.type, !1)), e);
        case 11:
          return ((e = ve(e.type.render, !1)), e);
        case 1:
          return ((e = ve(e.type, !0)), e);
        default:
          return ``;
      }
    }
    function be(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ne:
          return `Fragment`;
        case te:
          return `Portal`;
        case ie:
          return `Profiler`;
        case re:
          return `StrictMode`;
        case ce:
          return `Suspense`;
        case le:
          return `SuspenseList`;
      }
      if (typeof e == `object`)
        switch (e.$$typeof) {
          case oe:
            return (e.displayName || `Context`) + `.Consumer`;
          case ae:
            return (e._context.displayName || `Context`) + `.Provider`;
          case se:
            var t = e.render;
            return (
              (e = e.displayName),
              (e ||=
                ((e = t.displayName || t.name || ``),
                e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
              e
            );
          case ue:
            return (
              (t = e.displayName || null),
              t === null ? be(e.type) || `Memo` : t
            );
          case de:
            ((t = e._payload), (e = e._init));
            try {
              return be(e(t));
            } catch {}
        }
      return null;
    }
    function xe(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return `Cache`;
        case 9:
          return (t.displayName || `Context`) + `.Consumer`;
        case 10:
          return (t._context.displayName || `Context`) + `.Provider`;
        case 18:
          return `DehydratedFragment`;
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ``),
            t.displayName || (e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)
          );
        case 7:
          return `Fragment`;
        case 5:
          return t;
        case 4:
          return `Portal`;
        case 3:
          return `Root`;
        case 6:
          return `Text`;
        case 16:
          return be(t);
        case 8:
          return t === re ? `StrictMode` : `Mode`;
        case 22:
          return `Offscreen`;
        case 12:
          return `Profiler`;
        case 21:
          return `Scope`;
        case 13:
          return `Suspense`;
        case 19:
          return `SuspenseList`;
        case 25:
          return `TracingMarker`;
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == `function`) return t.displayName || t.name || null;
          if (typeof t == `string`) return t;
      }
      return null;
    }
    function Se(e) {
      switch (typeof e) {
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function Ce(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === `input` &&
        (t === `checkbox` || t === `radio`)
      );
    }
    function we(e) {
      var t = Ce(e) ? `checked` : `value`,
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = `` + e[t];
      if (
        !e.hasOwnProperty(t) &&
        n !== void 0 &&
        typeof n.get == `function` &&
        typeof n.set == `function`
      ) {
        var i = n.get,
          a = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return i.call(this);
            },
            set: function (e) {
              ((r = `` + e), a.call(this, e));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (e) {
              r = `` + e;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Te(e) {
      e._valueTracker ||= we(e);
    }
    function Ee(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = ``;
      return (
        e && (r = Ce(e) ? (e.checked ? `true` : `false`) : e.value),
        (e = r),
        e !== n && (t.setValue(e), !0)
      );
    }
    function De(e) {
      if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Oe(e, t) {
      var n = t.checked;
      return w({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function ke(e, t) {
      var n = t.defaultValue == null ? `` : t.defaultValue,
        r = t.checked == null ? t.defaultChecked : t.checked;
      ((n = Se(t.value == null ? n : t.value)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === `checkbox` || t.type === `radio`
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Ae(e, t) {
      ((t = t.checked), t != null && S(e, `checked`, t, !1));
    }
    function je(e, t) {
      Ae(e, t);
      var n = Se(t.value),
        r = t.type;
      if (n != null)
        r === `number`
          ? ((n === 0 && e.value === ``) || e.value != n) && (e.value = `` + n)
          : e.value !== `` + n && (e.value = `` + n);
      else if (r === `submit` || r === `reset`) {
        e.removeAttribute(`value`);
        return;
      }
      (t.hasOwnProperty(`value`)
        ? Ne(e, t.type, n)
        : t.hasOwnProperty(`defaultValue`) && Ne(e, t.type, Se(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function Me(e, t, n) {
      if (t.hasOwnProperty(`value`) || t.hasOwnProperty(`defaultValue`)) {
        var r = t.type;
        if (!(
          (r !== `submit` && r !== `reset`) ||
          (t.value !== void 0 && t.value !== null)
        ))
          return;
        ((t = `` + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== `` && (e.name = ``),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== `` && (e.name = n));
    }
    function Ne(e, t, n) {
      (t !== `number` || De(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = `` + e._wrapperState.initialValue)
          : e.defaultValue !== `` + n && (e.defaultValue = `` + n));
    }
    var Pe = Array.isArray;
    function Fe(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
        for (n = 0; n < e.length; n++)
          ((i = t.hasOwnProperty(`$` + e[n].value)),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0));
      } else {
        for (n = `` + Se(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ie(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(i(91));
      return w({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: `` + e._wrapperState.initialValue,
      });
    }
    function Le(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(i(92));
          if (Pe(n)) {
            if (1 < n.length) throw Error(i(93));
            n = n[0];
          }
          t = n;
        }
        ((t ??= ``), (n = t));
      }
      e._wrapperState = { initialValue: Se(n) };
    }
    function Re(e, t) {
      var n = Se(t.value),
        r = Se(t.defaultValue);
      (n != null &&
        ((n = `` + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = `` + r));
    }
    function ze(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== `` &&
        t !== null &&
        (e.value = t);
    }
    function Be(e) {
      switch (e) {
        case `svg`:
          return `http://www.w3.org/2000/svg`;
        case `math`:
          return `http://www.w3.org/1998/Math/MathML`;
        default:
          return `http://www.w3.org/1999/xhtml`;
      }
    }
    function Ve(e, t) {
      return e == null || e === `http://www.w3.org/1999/xhtml`
        ? Be(t)
        : e === `http://www.w3.org/2000/svg` && t === `foreignObject`
          ? `http://www.w3.org/1999/xhtml`
          : e;
    }
    var He,
      Ue = (function (e) {
        return typeof MSApp < `u` && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, i) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, i);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== `http://www.w3.org/2000/svg` || `innerHTML` in e)
          e.innerHTML = t;
        else {
          for (
            He ||= document.createElement(`div`),
              He.innerHTML = `<svg>` + t.valueOf().toString() + `</svg>`,
              t = He.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      });
    function We(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Ge = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Ke = [`Webkit`, `ms`, `Moz`, `O`];
    Object.keys(Ge).forEach(function (e) {
      Ke.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ge[t] = Ge[e]));
      });
    });
    function qe(e, t, n) {
      return t == null || typeof t == `boolean` || t === ``
        ? ``
        : n ||
            typeof t != `number` ||
            t === 0 ||
            (Ge.hasOwnProperty(e) && Ge[e])
          ? (`` + t).trim()
          : t + `px`;
    }
    function Je(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf(`--`) === 0,
            i = qe(n, t[n], r);
          (n === `float` && (n = `cssFloat`),
            r ? e.setProperty(n, i) : (e[n] = i));
        }
    }
    var Ye = w(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function Xe(e, t) {
      if (t) {
        if (Ye[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(i(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(i(60));
          if (
            typeof t.dangerouslySetInnerHTML != `object` ||
            !(`__html` in t.dangerouslySetInnerHTML)
          )
            throw Error(i(61));
        }
        if (t.style != null && typeof t.style != `object`) throw Error(i(62));
      }
    }
    function Ze(e, t) {
      if (e.indexOf(`-`) === -1) return typeof t.is == `string`;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return !1;
        default:
          return !0;
      }
    }
    var Qe = null;
    function $e(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var et = null,
      tt = null,
      nt = null;
    function rt(e) {
      if ((e = $i(e))) {
        if (typeof et != `function`) throw Error(i(280));
        var t = e.stateNode;
        t && ((t = ta(t)), et(e.stateNode, e.type, t));
      }
    }
    function it(e) {
      tt ? (nt ? nt.push(e) : (nt = [e])) : (tt = e);
    }
    function at() {
      if (tt) {
        var e = tt,
          t = nt;
        if (((nt = tt = null), rt(e), t))
          for (e = 0; e < t.length; e++) rt(t[e]);
      }
    }
    function ot(e, t) {
      return e(t);
    }
    function st() {}
    var ct = !1;
    function lt(e, t, n) {
      if (ct) return e(t, n);
      ct = !0;
      try {
        return ot(e, t, n);
      } finally {
        ((ct = !1), (tt !== null || nt !== null) && (st(), at()));
      }
    }
    function ut(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = ta(n);
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          ((r = !r.disabled) ||
            ((e = e.type),
            (r =
              e !== `button` &&
              e !== `input` &&
              e !== `select` &&
              e !== `textarea`)),
            (e = !r));
          break a;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var dt = !1;
    if (l)
      try {
        var ft = {};
        (Object.defineProperty(ft, "passive", {
          get: function () {
            dt = !0;
          },
        }),
          window.addEventListener(`test`, ft, ft),
          window.removeEventListener(`test`, ft, ft));
      } catch {
        dt = !1;
      }
    function pt(e, t, n, r, i, a, o, s, c) {
      var l = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, l);
      } catch (e) {
        this.onError(e);
      }
    }
    var mt = !1,
      ht = null,
      gt = !1,
      _t = null,
      vt = {
        onError: function (e) {
          ((mt = !0), (ht = e));
        },
      };
    function yt(e, t, n, r, i, a, o, s, c) {
      ((mt = !1), (ht = null), pt.apply(vt, arguments));
    }
    function bt(e, t, n, r, a, o, s, c, l) {
      if ((yt.apply(this, arguments), mt)) {
        if (mt) {
          var u = ht;
          ((mt = !1), (ht = null));
        } else throw Error(i(198));
        gt || ((gt = !0), (_t = u));
      }
    }
    function xt(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function St(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Ct(e) {
      if (xt(e) !== e) throw Error(i(188));
    }
    function wt(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = xt(e)), t === null)) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t; ;) {
        var a = n.return;
        if (a === null) break;
        var o = a.alternate;
        if (o === null) {
          if (((r = a.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === o.child) {
          for (o = a.child; o;) {
            if (o === n) return (Ct(a), e);
            if (o === r) return (Ct(a), t);
            o = o.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) ((n = a), (r = o));
        else {
          for (var s = !1, c = a.child; c;) {
            if (c === n) {
              ((s = !0), (n = a), (r = o));
              break;
            }
            if (c === r) {
              ((s = !0), (r = a), (n = o));
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = o.child; c;) {
              if (c === n) {
                ((s = !0), (n = o), (r = a));
                break;
              }
              if (c === r) {
                ((s = !0), (r = o), (n = a));
                break;
              }
              c = c.sibling;
            }
            if (!s) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function Tt(e) {
      return ((e = wt(e)), e === null ? null : Et(e));
    }
    function Et(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null;) {
        var t = Et(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var Dt = r.unstable_scheduleCallback,
      Ot = r.unstable_cancelCallback,
      kt = r.unstable_shouldYield,
      At = r.unstable_requestPaint,
      T = r.unstable_now,
      jt = r.unstable_getCurrentPriorityLevel,
      Mt = r.unstable_ImmediatePriority,
      Nt = r.unstable_UserBlockingPriority,
      Pt = r.unstable_NormalPriority,
      Ft = r.unstable_LowPriority,
      It = r.unstable_IdlePriority,
      Lt = null,
      Rt = null;
    function zt(e) {
      if (Rt && typeof Rt.onCommitFiberRoot == `function`)
        try {
          Rt.onCommitFiberRoot(Lt, e, void 0, (e.current.flags & 128) == 128);
        } catch {}
    }
    var Bt = Math.clz32 ? Math.clz32 : Ut,
      Vt = Math.log,
      Ht = Math.LN2;
    function Ut(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((Vt(e) / Ht) | 0)) | 0);
    }
    var Wt = 64,
      Gt = 4194304;
    function Kt(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function qt(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        i = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var s = o & ~i;
        s === 0 ? ((a &= o), a !== 0 && (r = Kt(a))) : (r = Kt(s));
      } else ((o = n & ~i), o === 0 ? a !== 0 && (r = Kt(a)) : (r = Kt(o)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        (t & i) === 0 &&
        ((i = r & -r), (a = t & -t), i >= a || (i === 16 && a & 4194240))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t;)
          ((n = 31 - Bt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
      return r;
    }
    function Jt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Yt(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          i = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;
      ) {
        var o = 31 - Bt(a),
          s = 1 << o,
          c = i[o];
        (c === -1
          ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = Jt(s, t))
          : c <= t && (e.expiredLanes |= s),
          (a &= ~s));
      }
    }
    function Xt(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e === 0 ? (e & 1073741824 ? 1073741824 : 0) : e
      );
    }
    function Zt() {
      var e = Wt;
      return ((Wt <<= 1), !(Wt & 4194240) && (Wt = 64), e);
    }
    function Qt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function $t(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Bt(t)),
        (e[t] = n));
    }
    function en(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - Bt(n),
          a = 1 << i;
        ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~a));
      }
    }
    function tn(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n;) {
        var r = 31 - Bt(n),
          i = 1 << r;
        ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
      }
    }
    var E = 0;
    function nn(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var rn,
      an,
      on,
      sn,
      cn,
      ln = !1,
      un = [],
      dn = null,
      fn = null,
      pn = null,
      mn = new Map(),
      hn = new Map(),
      gn = [],
      _n =
        `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(
          ` `,
        );
    function vn(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          dn = null;
          break;
        case `dragenter`:
        case `dragleave`:
          fn = null;
          break;
        case `mouseover`:
        case `mouseout`:
          pn = null;
          break;
        case `pointerover`:
        case `pointerout`:
          mn.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          hn.delete(t.pointerId);
      }
    }
    function yn(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [i],
          }),
          t !== null && ((t = $i(t)), t !== null && an(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e);
    }
    function bn(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return ((dn = yn(dn, e, t, n, r, i)), !0);
        case `dragenter`:
          return ((fn = yn(fn, e, t, n, r, i)), !0);
        case `mouseover`:
          return ((pn = yn(pn, e, t, n, r, i)), !0);
        case `pointerover`:
          var a = i.pointerId;
          return (mn.set(a, yn(mn.get(a) || null, e, t, n, r, i)), !0);
        case `gotpointercapture`:
          return (
            (a = i.pointerId),
            hn.set(a, yn(hn.get(a) || null, e, t, n, r, i)),
            !0
          );
      }
      return !1;
    }
    function xn(e) {
      var t = Qi(e.target);
      if (t !== null) {
        var n = xt(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = St(n)), t !== null)) {
              ((e.blockedOn = t),
                cn(e.priority, function () {
                  on(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Sn(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = Nn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Qe = r), n.target.dispatchEvent(r), (Qe = null));
        } else return ((t = $i(n)), t !== null && an(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function Cn(e, t, n) {
      Sn(e) && n.delete(t);
    }
    function wn() {
      ((ln = !1),
        dn !== null && Sn(dn) && (dn = null),
        fn !== null && Sn(fn) && (fn = null),
        pn !== null && Sn(pn) && (pn = null),
        mn.forEach(Cn),
        hn.forEach(Cn));
    }
    function Tn(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        ln ||
          ((ln = !0),
          r.unstable_scheduleCallback(r.unstable_NormalPriority, wn)));
    }
    function En(e) {
      function t(t) {
        return Tn(t, e);
      }
      if (0 < un.length) {
        Tn(un[0], e);
        for (var n = 1; n < un.length; n++) {
          var r = un[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        dn !== null && Tn(dn, e),
          fn !== null && Tn(fn, e),
          pn !== null && Tn(pn, e),
          mn.forEach(t),
          hn.forEach(t),
          n = 0;
        n < gn.length;
        n++
      )
        ((r = gn[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < gn.length && ((n = gn[0]), n.blockedOn === null);)
        (xn(n), n.blockedOn === null && gn.shift());
    }
    var Dn = C.ReactCurrentBatchConfig,
      On = !0;
    function kn(e, t, n, r) {
      var i = E,
        a = Dn.transition;
      Dn.transition = null;
      try {
        ((E = 1), jn(e, t, n, r));
      } finally {
        ((E = i), (Dn.transition = a));
      }
    }
    function An(e, t, n, r) {
      var i = E,
        a = Dn.transition;
      Dn.transition = null;
      try {
        ((E = 4), jn(e, t, n, r));
      } finally {
        ((E = i), (Dn.transition = a));
      }
    }
    function jn(e, t, n, r) {
      if (On) {
        var i = Nn(e, t, n, r);
        if (i === null) (Ti(e, t, r, Mn, n), vn(e, r));
        else if (bn(i, e, t, n, r)) r.stopPropagation();
        else if ((vn(e, r), t & 4 && -1 < _n.indexOf(e))) {
          for (; i !== null;) {
            var a = $i(i);
            if (
              (a !== null && rn(a),
              (a = Nn(e, t, n, r)),
              a === null && Ti(e, t, r, Mn, n),
              a === i)
            )
              break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Ti(e, t, r, null, n);
      }
    }
    var Mn = null;
    function Nn(e, t, n, r) {
      if (((Mn = null), (e = $e(r)), (e = Qi(e)), e !== null)) {
        if (((t = xt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = St(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
      return ((Mn = e), null);
    }
    function Pn(e) {
      switch (e) {
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `resize`:
        case `seeked`:
        case `submit`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 1;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `scroll`:
        case `toggle`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 4;
        case `message`:
          switch (jt()) {
            case Mt:
              return 1;
            case Nt:
              return 4;
            case Pt:
            case Ft:
              return 16;
            case It:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Fn = null,
      In = null,
      Ln = null;
    function Rn() {
      if (Ln) return Ln;
      var e,
        t = In,
        n = t.length,
        r,
        i = `value` in Fn ? Fn.value : Fn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return (Ln = i.slice(e, 1 < r ? 1 - r : void 0));
    }
    function zn(e) {
      var t = e.keyCode;
      return (
        `charCode` in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function Bn() {
      return !0;
    }
    function Vn() {
      return !1;
    }
    function Hn(e) {
      function t(t, n, r, i, a) {
        for (var o in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = i),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented == null
              ? !1 === i.returnValue
              : i.defaultPrevented
          )
            ? Bn
            : Vn),
          (this.isPropagationStopped = Vn),
          this
        );
      }
      return (
        w(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : typeof e.returnValue != `unknown` && (e.returnValue = !1),
              (this.isDefaultPrevented = Bn));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
              (this.isPropagationStopped = Bn));
          },
          persist: function () {},
          isPersistent: Bn,
        }),
        t
      );
    }
    var Un = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Wn = Hn(Un),
      Gn = w({}, Un, { view: 0, detail: 0 }),
      Kn = Hn(Gn),
      qn,
      Jn,
      Yn,
      Xn = w({}, Gn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: sr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e
            ? e.movementX
            : (e !== Yn &&
                (Yn && e.type === `mousemove`
                  ? ((qn = e.screenX - Yn.screenX),
                    (Jn = e.screenY - Yn.screenY))
                  : (Jn = qn = 0),
                (Yn = e)),
              qn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Jn;
        },
      }),
      Zn = Hn(Xn),
      Qn = Hn(w({}, Xn, { dataTransfer: 0 })),
      $n = Hn(w({}, Gn, { relatedTarget: 0 })),
      er = Hn(
        w({}, Un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      ),
      tr = Hn(
        w({}, Un, {
          clipboardData: function (e) {
            return `clipboardData` in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
      ),
      nr = Hn(w({}, Un, { data: 0 })),
      rr = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`,
      },
      ir = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`,
      },
      ar = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`,
      };
    function or(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = ar[e])
          ? !!t[e]
          : !1;
    }
    function sr() {
      return or;
    }
    var cr = Hn(
        w({}, Gn, {
          key: function (e) {
            if (e.key) {
              var t = rr[e.key] || e.key;
              if (t !== `Unidentified`) return t;
            }
            return e.type === `keypress`
              ? ((e = zn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
              : e.type === `keydown` || e.type === `keyup`
                ? ir[e.keyCode] || `Unidentified`
                : ``;
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: sr,
          charCode: function (e) {
            return e.type === `keypress` ? zn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === `keypress`
              ? zn(e)
              : e.type === `keydown` || e.type === `keyup`
                ? e.keyCode
                : 0;
          },
        }),
      ),
      lr = Hn(
        w({}, Xn, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        }),
      ),
      ur = Hn(
        w({}, Gn, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: sr,
        }),
      ),
      dr = Hn(w({}, Un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      fr = Hn(
        w({}, Xn, {
          deltaX: function (e) {
            return `deltaX` in e
              ? e.deltaX
              : `wheelDeltaX` in e
                ? -e.wheelDeltaX
                : 0;
          },
          deltaY: function (e) {
            return `deltaY` in e
              ? e.deltaY
              : `wheelDeltaY` in e
                ? -e.wheelDeltaY
                : `wheelDelta` in e
                  ? -e.wheelDelta
                  : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
      ),
      pr = [9, 13, 27, 32],
      mr = l && `CompositionEvent` in window,
      hr = null;
    l && `documentMode` in document && (hr = document.documentMode);
    var gr = l && `TextEvent` in window && !hr,
      _r = l && (!mr || (hr && 8 < hr && 11 >= hr)),
      vr = ` `,
      yr = !1;
    function br(e, t) {
      switch (e) {
        case `keyup`:
          return pr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return !0;
        default:
          return !1;
      }
    }
    function xr(e) {
      return (
        (e = e.detail),
        typeof e == `object` && `data` in e ? e.data : null
      );
    }
    var Sr = !1;
    function Cr(e, t) {
      switch (e) {
        case `compositionend`:
          return xr(t);
        case `keypress`:
          return t.which === 32 ? ((yr = !0), vr) : null;
        case `textInput`:
          return ((e = t.data), e === vr && yr ? null : e);
        default:
          return null;
      }
    }
    function wr(e, t) {
      if (Sr)
        return e === `compositionend` || (!mr && br(e, t))
          ? ((e = Rn()), (Ln = In = Fn = null), (Sr = !1), e)
          : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return _r && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var Tr = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Er(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!Tr[e.type] : t === `textarea`;
    }
    function Dr(e, t, n, r) {
      (it(r),
        (t = Di(t, `onChange`)),
        0 < t.length &&
          ((n = new Wn(`onChange`, `change`, null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Or = null,
      kr = null;
    function Ar(e) {
      bi(e, 0);
    }
    function jr(e) {
      if (Ee(ea(e))) return e;
    }
    function Mr(e, t) {
      if (e === `change`) return t;
    }
    var Nr = !1;
    if (l) {
      var Pr;
      if (l) {
        var Fr = `oninput` in document;
        if (!Fr) {
          var Ir = document.createElement(`div`);
          (Ir.setAttribute(`oninput`, `return;`),
            (Fr = typeof Ir.oninput == `function`));
        }
        Pr = Fr;
      } else Pr = !1;
      Nr = Pr && (!document.documentMode || 9 < document.documentMode);
    }
    function Lr() {
      Or && (Or.detachEvent(`onpropertychange`, Rr), (kr = Or = null));
    }
    function Rr(e) {
      if (e.propertyName === `value` && jr(kr)) {
        var t = [];
        (Dr(t, kr, e, $e(e)), lt(Ar, t));
      }
    }
    function zr(e, t, n) {
      e === `focusin`
        ? (Lr(), (Or = t), (kr = n), Or.attachEvent(`onpropertychange`, Rr))
        : e === `focusout` && Lr();
    }
    function Br(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`)
        return jr(kr);
    }
    function Vr(e, t) {
      if (e === `click`) return jr(t);
    }
    function Hr(e, t) {
      if (e === `input` || e === `change`) return jr(t);
    }
    function Ur(e, t) {
      return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
    }
    var Wr = typeof Object.is == `function` ? Object.is : Ur;
    function Gr(e, t) {
      if (Wr(e, t)) return !0;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!d.call(t, i) || !Wr(e[i], t[i])) return !1;
      }
      return !0;
    }
    function Kr(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function D(e, t) {
      var n = Kr(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Kr(n);
      }
    }
    function qr(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? qr(e, t.parentNode)
              : `contains` in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Jr() {
      for (var e = window, t = De(); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = De(e.document);
      }
      return t;
    }
    function Yr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === `input` &&
          (e.type === `text` ||
            e.type === `search` ||
            e.type === `tel` ||
            e.type === `url` ||
            e.type === `password`)) ||
          t === `textarea` ||
          e.contentEditable === `true`)
      );
    }
    function Xr(e) {
      var t = Jr(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        qr(n.ownerDocument.documentElement, n)
      ) {
        if (r !== null && Yr(n)) {
          if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            `selectionStart` in n)
          )
            ((n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e =
              ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var i = n.textContent.length,
              a = Math.min(r.start, i);
            ((r = r.end === void 0 ? a : Math.min(r.end, i)),
              !e.extend && a > r && ((i = r), (r = a), (a = i)),
              (i = D(n, a)));
            var o = D(n, r);
            i &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== i.node ||
                e.anchorOffset !== i.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(i.node, i.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode);)
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof n.focus == `function` && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var Zr = l && `documentMode` in document && 11 >= document.documentMode,
      Qr = null,
      $r = null,
      ei = null,
      ti = !1;
    function ni(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      ti ||
        Qr == null ||
        Qr !== De(r) ||
        ((r = Qr),
        `selectionStart` in r && Yr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (ei && Gr(ei, r)) ||
          ((ei = r),
          (r = Di($r, `onSelect`)),
          0 < r.length &&
            ((t = new Wn(`onSelect`, `select`, null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Qr))));
    }
    function ri(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n[`Webkit` + e] = `webkit` + t),
        (n[`Moz` + e] = `moz` + t),
        n
      );
    }
    var ii = {
        animationend: ri(`Animation`, `AnimationEnd`),
        animationiteration: ri(`Animation`, `AnimationIteration`),
        animationstart: ri(`Animation`, `AnimationStart`),
        transitionend: ri(`Transition`, `TransitionEnd`),
      },
      ai = {},
      oi = {};
    l &&
      ((oi = document.createElement(`div`).style),
      `AnimationEvent` in window ||
        (delete ii.animationend.animation,
        delete ii.animationiteration.animation,
        delete ii.animationstart.animation),
      `TransitionEvent` in window || delete ii.transitionend.transition);
    function si(e) {
      if (ai[e]) return ai[e];
      if (!ii[e]) return e;
      var t = ii[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in oi) return (ai[e] = t[n]);
      return e;
    }
    var ci = si(`animationend`),
      li = si(`animationiteration`),
      ui = si(`animationstart`),
      di = si(`transitionend`),
      fi = new Map(),
      pi =
        `abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
          ` `,
        );
    function mi(e, t) {
      (fi.set(e, t), s(t, [e]));
    }
    for (var hi = 0; hi < pi.length; hi++) {
      var gi = pi[hi];
      mi(gi.toLowerCase(), `on` + (gi[0].toUpperCase() + gi.slice(1)));
    }
    (mi(ci, `onAnimationEnd`),
      mi(li, `onAnimationIteration`),
      mi(ui, `onAnimationStart`),
      mi(`dblclick`, `onDoubleClick`),
      mi(`focusin`, `onFocus`),
      mi(`focusout`, `onBlur`),
      mi(di, `onTransitionEnd`),
      c(`onMouseEnter`, [`mouseout`, `mouseover`]),
      c(`onMouseLeave`, [`mouseout`, `mouseover`]),
      c(`onPointerEnter`, [`pointerout`, `pointerover`]),
      c(`onPointerLeave`, [`pointerout`, `pointerover`]),
      s(
        `onChange`,
        `change click focusin focusout input keydown keyup selectionchange`.split(
          ` `,
        ),
      ),
      s(
        `onSelect`,
        `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
          ` `,
        ),
      ),
      s(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]),
      s(
        `onCompositionEnd`,
        `compositionend focusout keydown keypress keyup mousedown`.split(` `),
      ),
      s(
        `onCompositionStart`,
        `compositionstart focusout keydown keypress keyup mousedown`.split(` `),
      ),
      s(
        `onCompositionUpdate`,
        `compositionupdate focusout keydown keypress keyup mousedown`.split(
          ` `,
        ),
      ));
    var _i =
        `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
          ` `,
        ),
      vi = new Set(
        `cancel close invalid load scroll toggle`.split(` `).concat(_i),
      );
    function yi(e, t, n) {
      var r = e.type || `unknown-event`;
      ((e.currentTarget = n), bt(r, t, void 0, e), (e.currentTarget = null));
    }
    function bi(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var s = r[o],
                c = s.instance,
                l = s.currentTarget;
              if (((s = s.listener), c !== a && i.isPropagationStopped()))
                break a;
              (yi(i, s, l), (a = c));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((s = r[o]),
                (c = s.instance),
                (l = s.currentTarget),
                (s = s.listener),
                c !== a && i.isPropagationStopped())
              )
                break a;
              (yi(i, s, l), (a = c));
            }
        }
      }
      if (gt) throw ((e = _t), (gt = !1), (_t = null), e);
    }
    function O(e, t) {
      var n = t[Yi];
      n === void 0 && (n = t[Yi] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (wi(t, e, 2, !1), n.add(r));
    }
    function xi(e, t, n) {
      var r = 0;
      (t && (r |= 4), wi(n, e, r, t));
    }
    var Si = `_reactListening` + Math.random().toString(36).slice(2);
    function Ci(e) {
      if (!e[Si]) {
        ((e[Si] = !0),
          a.forEach(function (t) {
            t !== `selectionchange` &&
              (vi.has(t) || xi(t, !1, e), xi(t, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Si] || ((t[Si] = !0), xi(`selectionchange`, !1, t));
      }
    }
    function wi(e, t, n, r) {
      switch (Pn(t)) {
        case 1:
          var i = kn;
          break;
        case 4:
          i = An;
          break;
        default:
          i = jn;
      }
      ((n = i.bind(null, t, n, e)),
        (i = void 0),
        !dt ||
          (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
          (i = !0),
        r
          ? i === void 0
            ? e.addEventListener(t, n, !0)
            : e.addEventListener(t, n, { capture: !0, passive: i })
          : i === void 0
            ? e.addEventListener(t, n, !1)
            : e.addEventListener(t, n, { passive: i }));
    }
    function Ti(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        a: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
            if (o === 4)
              for (o = r.return; o !== null;) {
                var c = o.tag;
                if (
                  (c === 3 || c === 4) &&
                  ((c = o.stateNode.containerInfo),
                  c === i || (c.nodeType === 8 && c.parentNode === i))
                )
                  return;
                o = o.return;
              }
            for (; s !== null;) {
              if (((o = Qi(s)), o === null)) return;
              if (((c = o.tag), c === 5 || c === 6)) {
                r = a = o;
                continue a;
              }
              s = s.parentNode;
            }
          }
          r = r.return;
        }
      lt(function () {
        var r = a,
          i = $e(n),
          o = [];
        a: {
          var s = fi.get(e);
          if (s !== void 0) {
            var c = Wn,
              l = e;
            switch (e) {
              case `keypress`:
                if (zn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                c = cr;
                break;
              case `focusin`:
                ((l = `focus`), (c = $n));
                break;
              case `focusout`:
                ((l = `blur`), (c = $n));
                break;
              case `beforeblur`:
              case `afterblur`:
                c = $n;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                c = Zn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                c = Qn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                c = ur;
                break;
              case ci:
              case li:
              case ui:
                c = er;
                break;
              case di:
                c = dr;
                break;
              case `scroll`:
                c = Kn;
                break;
              case `wheel`:
                c = fr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                c = tr;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                c = lr;
            }
            var u = !!(t & 4),
              d = !u && e === `scroll`,
              f = u ? (s === null ? null : s + `Capture`) : s;
            u = [];
            for (var p = r, m; p !== null;) {
              m = p;
              var h = m.stateNode;
              if (
                (m.tag === 5 &&
                  h !== null &&
                  ((m = h),
                  f !== null &&
                    ((h = ut(p, f)), h != null && u.push(Ei(p, h, m)))),
                d)
              )
                break;
              p = p.return;
            }
            0 < u.length &&
              ((s = new c(s, l, null, n, i)),
              o.push({ event: s, listeners: u }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (
              ((s = e === `mouseover` || e === `pointerover`),
              (c = e === `mouseout` || e === `pointerout`),
              s &&
                n !== Qe &&
                (l = n.relatedTarget || n.fromElement) &&
                (Qi(l) || l[Ji]))
            )
              break a;
            if (
              (c || s) &&
              ((s =
                i.window === i
                  ? i
                  : (s = i.ownerDocument)
                    ? s.defaultView || s.parentWindow
                    : window),
              c
                ? ((l = n.relatedTarget || n.toElement),
                  (c = r),
                  (l = l ? Qi(l) : null),
                  l !== null &&
                    ((d = xt(l)), l !== d || (l.tag !== 5 && l.tag !== 6)) &&
                    (l = null))
                : ((c = null), (l = r)),
              c !== l)
            ) {
              if (
                ((u = Zn),
                (h = `onMouseLeave`),
                (f = `onMouseEnter`),
                (p = `mouse`),
                (e === `pointerout` || e === `pointerover`) &&
                  ((u = lr),
                  (h = `onPointerLeave`),
                  (f = `onPointerEnter`),
                  (p = `pointer`)),
                (d = c == null ? s : ea(c)),
                (m = l == null ? s : ea(l)),
                (s = new u(h, p + `leave`, c, n, i)),
                (s.target = d),
                (s.relatedTarget = m),
                (h = null),
                Qi(i) === r &&
                  ((u = new u(f, p + `enter`, l, n, i)),
                  (u.target = m),
                  (u.relatedTarget = d),
                  (h = u)),
                (d = h),
                c && l)
              )
                b: {
                  for (u = c, f = l, p = 0, m = u; m; m = Oi(m)) p++;
                  for (m = 0, h = f; h; h = Oi(h)) m++;
                  for (; 0 < p - m;) ((u = Oi(u)), p--);
                  for (; 0 < m - p;) ((f = Oi(f)), m--);
                  for (; p--;) {
                    if (u === f || (f !== null && u === f.alternate)) break b;
                    ((u = Oi(u)), (f = Oi(f)));
                  }
                  u = null;
                }
              else u = null;
              (c !== null && ki(o, s, c, u, !1),
                l !== null && d !== null && ki(o, d, l, u, !0));
            }
          }
          a: {
            if (
              ((s = r ? ea(r) : window),
              (c = s.nodeName && s.nodeName.toLowerCase()),
              c === `select` || (c === `input` && s.type === `file`))
            )
              var g = Mr;
            else if (Er(s)) {
              if (Nr) g = Hr;
              else {
                g = Br;
                var _ = zr;
              }
            } else
              (c = s.nodeName) &&
                c.toLowerCase() === `input` &&
                (s.type === `checkbox` || s.type === `radio`) &&
                (g = Vr);
            if ((g &&= g(e, r))) {
              Dr(o, g, n, i);
              break a;
            }
            (_ && _(e, s, r),
              e === `focusout` &&
                (_ = s._wrapperState) &&
                _.controlled &&
                s.type === `number` &&
                Ne(s, `number`, s.value));
          }
          switch (((_ = r ? ea(r) : window), e)) {
            case `focusin`:
              (Er(_) || _.contentEditable === `true`) &&
                ((Qr = _), ($r = r), (ei = null));
              break;
            case `focusout`:
              ei = $r = Qr = null;
              break;
            case `mousedown`:
              ti = !0;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              ((ti = !1), ni(o, n, i));
              break;
            case `selectionchange`:
              if (Zr) break;
            case `keydown`:
            case `keyup`:
              ni(o, n, i);
          }
          var v;
          if (mr)
            b: {
              switch (e) {
                case `compositionstart`:
                  var y = `onCompositionStart`;
                  break b;
                case `compositionend`:
                  y = `onCompositionEnd`;
                  break b;
                case `compositionupdate`:
                  y = `onCompositionUpdate`;
                  break b;
              }
              y = void 0;
            }
          else
            Sr
              ? br(e, n) && (y = `onCompositionEnd`)
              : e === `keydown` &&
                n.keyCode === 229 &&
                (y = `onCompositionStart`);
          (y &&
            (_r &&
              n.locale !== `ko` &&
              (Sr || y !== `onCompositionStart`
                ? y === `onCompositionEnd` && Sr && (v = Rn())
                : ((Fn = i),
                  (In = `value` in Fn ? Fn.value : Fn.textContent),
                  (Sr = !0))),
            (_ = Di(r, y)),
            0 < _.length &&
              ((y = new nr(y, e, null, n, i)),
              o.push({ event: y, listeners: _ }),
              v ? (y.data = v) : ((v = xr(n)), v !== null && (y.data = v)))),
            (v = gr ? Cr(e, n) : wr(e, n)) &&
              ((r = Di(r, `onBeforeInput`)),
              0 < r.length &&
                ((i = new nr(`onBeforeInput`, `beforeinput`, null, n, i)),
                o.push({ event: i, listeners: r }),
                (i.data = v))));
        }
        bi(o, t);
      });
    }
    function Ei(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Di(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        (i.tag === 5 &&
          a !== null &&
          ((i = a),
          (a = ut(e, n)),
          a != null && r.unshift(Ei(e, a, i)),
          (a = ut(e, t)),
          a != null && r.push(Ei(e, a, i))),
          (e = e.return));
      }
      return r;
    }
    function Oi(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function ki(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (c !== null && c === r) break;
        (s.tag === 5 &&
          l !== null &&
          ((s = l),
          i
            ? ((c = ut(n, a)), c != null && o.unshift(Ei(n, c, s)))
            : i || ((c = ut(n, a)), c != null && o.push(Ei(n, c, s)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var Ai = /\r\n?/g,
      k = /\u0000|\uFFFD/g;
    function ji(e) {
      return (typeof e == `string` ? e : `` + e)
        .replace(
          Ai,
          `
`,
        )
        .replace(k, ``);
    }
    function Mi(e, t, n) {
      if (((t = ji(t)), ji(e) !== t && n)) throw Error(i(425));
    }
    function Ni() {}
    var Pi = null,
      Fi = null;
    function Ii(e, t) {
      return (
        e === `textarea` ||
        e === `noscript` ||
        typeof t.children == `string` ||
        typeof t.children == `number` ||
        (typeof t.dangerouslySetInnerHTML == `object` &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var Li = typeof setTimeout == `function` ? setTimeout : void 0,
      Ri = typeof clearTimeout == `function` ? clearTimeout : void 0,
      zi = typeof Promise == `function` ? Promise : void 0,
      Bi =
        typeof queueMicrotask == `function`
          ? queueMicrotask
          : zi === void 0
            ? Li
            : function (e) {
                return zi.resolve(null).then(e).catch(Vi);
              };
    function Vi(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Hi(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8)) {
          if (((n = i.data), n === `/$`)) {
            if (r === 0) {
              (e.removeChild(i), En(t));
              return;
            }
            r--;
          } else (n !== `$` && n !== `$?` && n !== `$!`) || r++;
        }
        n = i;
      } while (n);
      En(t);
    }
    function Ui(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === `$` || t === `$!` || t === `$?`)) break;
          if (t === `/$`) return null;
        }
      }
      return e;
    }
    function Wi(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?`) {
            if (t === 0) return e;
            t--;
          } else n === `/$` && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var Gi = Math.random().toString(36).slice(2),
      Ki = `__reactFiber$` + Gi,
      qi = `__reactProps$` + Gi,
      Ji = `__reactContainer$` + Gi,
      Yi = `__reactEvents$` + Gi,
      Xi = `__reactListeners$` + Gi,
      Zi = `__reactHandles$` + Gi;
    function Qi(e) {
      var t = e[Ki];
      if (t) return t;
      for (var n = e.parentNode; n;) {
        if ((t = n[Ji] || n[Ki])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Wi(e); e !== null;) {
              if ((n = e[Ki])) return n;
              e = Wi(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function $i(e) {
      return (
        (e = e[Ki] || e[Ji]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function ea(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(i(33));
    }
    function ta(e) {
      return e[qi] || null;
    }
    var na = [],
      ra = -1;
    function ia(e) {
      return { current: e };
    }
    function A(e) {
      0 > ra || ((e.current = na[ra]), (na[ra] = null), ra--);
    }
    function j(e, t) {
      (ra++, (na[ra] = e.current), (e.current = t));
    }
    var aa = {},
      oa = ia(aa),
      sa = ia(!1),
      ca = aa;
    function la(e, t) {
      var n = e.type.contextTypes;
      if (!n) return aa;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var i = {},
        a;
      for (a in n) i[a] = t[a];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      );
    }
    function ua(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function da() {
      (A(sa), A(oa));
    }
    function fa(e, t, n) {
      if (oa.current !== aa) throw Error(i(168));
      (j(oa, t), j(sa, n));
    }
    function pa(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), typeof r.getChildContext != `function`))
        return n;
      for (var a in ((r = r.getChildContext()), r))
        if (!(a in t)) throw Error(i(108, xe(e) || `Unknown`, a));
      return w({}, n, r);
    }
    function ma(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          aa),
        (ca = oa.current),
        j(oa, e),
        j(sa, sa.current),
        !0
      );
    }
    function ha(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(i(169));
      (n
        ? ((e = pa(e, t, ca)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          A(sa),
          A(oa),
          j(oa, e))
        : A(sa),
        j(sa, n));
    }
    var ga = null,
      _a = !1,
      va = !1;
    function ya(e) {
      ga === null ? (ga = [e]) : ga.push(e);
    }
    function ba(e) {
      ((_a = !0), ya(e));
    }
    function xa() {
      if (!va && ga !== null) {
        va = !0;
        var e = 0,
          t = E;
        try {
          var n = ga;
          for (E = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((ga = null), (_a = !1));
        } catch (t) {
          throw (ga !== null && (ga = ga.slice(e + 1)), Dt(Mt, xa), t);
        } finally {
          ((E = t), (va = !1));
        }
      }
      return null;
    }
    var Sa = [],
      M = 0,
      Ca = null,
      wa = 0,
      Ta = [],
      Ea = 0,
      Da = null,
      Oa = 1,
      ka = ``;
    function Aa(e, t) {
      ((Sa[M++] = wa), (Sa[M++] = Ca), (Ca = e), (wa = t));
    }
    function ja(e, t, n) {
      ((Ta[Ea++] = Oa), (Ta[Ea++] = ka), (Ta[Ea++] = Da), (Da = e));
      var r = Oa;
      e = ka;
      var i = 32 - Bt(r) - 1;
      ((r &= ~(1 << i)), (n += 1));
      var a = 32 - Bt(t) + i;
      if (30 < a) {
        var o = i - (i % 5);
        ((a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (i -= o),
          (Oa = (1 << (32 - Bt(t) + i)) | (n << i) | r),
          (ka = a + e));
      } else ((Oa = (1 << a) | (n << i) | r), (ka = e));
    }
    function Ma(e) {
      e.return !== null && (Aa(e, 1), ja(e, 1, 0));
    }
    function Na(e) {
      for (; e === Ca;)
        ((Ca = Sa[--M]), (Sa[M] = null), (wa = Sa[--M]), (Sa[M] = null));
      for (; e === Da;)
        ((Da = Ta[--Ea]),
          (Ta[Ea] = null),
          (ka = Ta[--Ea]),
          (Ta[Ea] = null),
          (Oa = Ta[--Ea]),
          (Ta[Ea] = null));
    }
    var N = null,
      P = null,
      F = !1,
      Pa = null;
    function Fa(e, t) {
      var n = Jl(5, null, null, 0);
      ((n.elementType = `DELETED`),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function Ia(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null &&
              ((e.stateNode = t), (N = e), (P = Ui(t.firstChild)), !0)
          );
        case 6:
          return (
            (t = e.pendingProps === `` || t.nodeType !== 3 ? null : t),
            t !== null && ((e.stateNode = t), (N = e), (P = null), !0)
          );
        case 13:
          return (
            (t = t.nodeType === 8 ? t : null),
            t !== null &&
              ((n = Da === null ? null : { id: Oa, overflow: ka }),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Jl(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (N = e),
              (P = null),
              !0)
          );
        default:
          return !1;
      }
    }
    function La(e) {
      return !!(e.mode & 1) && !(e.flags & 128);
    }
    function Ra(e) {
      if (F) {
        var t = P;
        if (t) {
          var n = t;
          if (!Ia(e, t)) {
            if (La(e)) throw Error(i(418));
            t = Ui(n.nextSibling);
            var r = N;
            t && Ia(e, t)
              ? Fa(r, n)
              : ((e.flags = (e.flags & -4097) | 2), (F = !1), (N = e));
          }
        } else {
          if (La(e)) throw Error(i(418));
          ((e.flags = (e.flags & -4097) | 2), (F = !1), (N = e));
        }
      }
    }
    function za(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      N = e;
    }
    function Ba(e) {
      if (e !== N) return !1;
      if (!F) return (za(e), (F = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== `head` && t !== `body` && !Ii(e.type, e.memoizedProps))),
        (t &&= P))
      ) {
        if (La(e)) throw (Va(), Error(i(418)));
        for (; t;) (Fa(e, t), (t = Ui(t.nextSibling)));
      }
      if ((za(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e))
          throw Error(i(317));
        a: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === `/$`) {
                if (t === 0) {
                  P = Ui(e.nextSibling);
                  break a;
                }
                t--;
              } else (n !== `$` && n !== `$!` && n !== `$?`) || t++;
            }
            e = e.nextSibling;
          }
          P = null;
        }
      } else P = N ? Ui(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Va() {
      for (var e = P; e;) e = Ui(e.nextSibling);
    }
    function Ha() {
      ((P = N = null), (F = !1));
    }
    function Ua(e) {
      Pa === null ? (Pa = [e]) : Pa.push(e);
    }
    var Wa = C.ReactCurrentBatchConfig;
    function Ga(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != `function` && typeof e != `object`)
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(i(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(i(147, e));
          var a = r,
            o = `` + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == `function` &&
            t.ref._stringRef === o
            ? t.ref
            : ((t = function (e) {
                var t = a.refs;
                e === null ? delete t[o] : (t[o] = e);
              }),
              (t._stringRef = o),
              t);
        }
        if (typeof e != `string`) throw Error(i(284));
        if (!n._owner) throw Error(i(290, e));
      }
      return e;
    }
    function Ka(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          i(
            31,
            e === `[object Object]`
              ? `object with keys {` + Object.keys(t).join(`, `) + `}`
              : e,
          ),
        )
      );
    }
    function qa(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Ja(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) (t(n, r), (r = r.sibling));
        return null;
      }
      function r(e, t) {
        for (e = new Map(); t !== null;)
          (t.key === null ? e.set(t.index, t) : e.set(t.key, t),
            (t = t.sibling));
        return e;
      }
      function a(e, t) {
        return ((e = Zl(e, t)), (e.index = 0), (e.sibling = null), e);
      }
      function o(t, n, r) {
        return (
          (t.index = r),
          e
            ? ((r = t.alternate),
              r === null
                ? ((t.flags |= 2), n)
                : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
            : ((t.flags |= 1048576), n)
        );
      }
      function s(t) {
        return (e && t.alternate === null && (t.flags |= 2), t);
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6
          ? ((t = tu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ne
          ? d(e, t, n.props.children, r, n.key)
          : t !== null &&
              (t.elementType === i ||
                (typeof i == `object` &&
                  i &&
                  i.$$typeof === de &&
                  qa(i) === t.type))
            ? ((r = a(t, n.props)), (r.ref = Ga(e, t, n)), (r.return = e), r)
            : ((r = Ql(n.type, n.key, n.props, null, e.mode, r)),
              (r.ref = Ga(e, t, n)),
              (r.return = e),
              r);
      }
      function u(e, t, n, r) {
        return t === null ||
          t.tag !== 4 ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? ((t = nu(n, e.mode, r)), (t.return = e), t)
          : ((t = a(t, n.children || [])), (t.return = e), t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7
          ? ((t = $l(n, e.mode, r, i)), (t.return = e), t)
          : ((t = a(t, n)), (t.return = e), t);
      }
      function f(e, t, n) {
        if ((typeof t == `string` && t !== ``) || typeof t == `number`)
          return ((t = tu(`` + t, e.mode, n)), (t.return = e), t);
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case ee:
              return (
                (n = Ql(t.type, t.key, t.props, null, e.mode, n)),
                (n.ref = Ga(e, null, t)),
                (n.return = e),
                n
              );
            case te:
              return ((t = nu(t, e.mode, n)), (t.return = e), t);
            case de:
              var r = t._init;
              return f(e, r(t._payload), n);
          }
          if (Pe(t) || me(t))
            return ((t = $l(t, e.mode, n, null)), (t.return = e), t);
          Ka(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if ((typeof n == `string` && n !== ``) || typeof n == `number`)
          return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case ee:
              return n.key === i ? l(e, t, n, r) : null;
            case te:
              return n.key === i ? u(e, t, n, r) : null;
            case de:
              return ((i = n._init), p(e, t, i(n._payload), r));
          }
          if (Pe(n) || me(n)) return i === null ? d(e, t, n, r, null) : null;
          Ka(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if ((typeof r == `string` && r !== ``) || typeof r == `number`)
          return ((e = e.get(n) || null), c(t, e, `` + r, i));
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case ee:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                l(t, e, r, i)
              );
            case te:
              return (
                (e = e.get(r.key === null ? n : r.key) || null),
                u(t, e, r, i)
              );
            case de:
              var a = r._init;
              return m(e, t, n, a(r._payload), i);
          }
          if (Pe(r) || me(r))
            return ((e = e.get(n) || null), d(t, e, r, i, null));
          Ka(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (
          var l = null, u = null, d = a, h = (a = 0), g = null;
          d !== null && h < s.length;
          h++
        ) {
          d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          (e && d && _.alternate === null && t(i, d),
            (a = o(_, a, h)),
            u === null ? (l = _) : (u.sibling = _),
            (u = _),
            (d = g));
        }
        if (h === s.length) return (n(i, d), F && Aa(i, h), l);
        if (d === null) {
          for (; h < s.length; h++)
            ((d = f(i, s[h], c)),
              d !== null &&
                ((a = o(d, a, h)),
                u === null ? (l = d) : (u.sibling = d),
                (u = d)));
          return (F && Aa(i, h), l);
        }
        for (d = r(i, d); h < s.length; h++)
          ((g = m(d, i, h, s[h], c)),
            g !== null &&
              (e &&
                g.alternate !== null &&
                d.delete(g.key === null ? h : g.key),
              (a = o(g, a, h)),
              u === null ? (l = g) : (u.sibling = g),
              (u = g)));
        return (
          e &&
            d.forEach(function (e) {
              return t(i, e);
            }),
          F && Aa(i, h),
          l
        );
      }
      function g(a, s, c, l) {
        var u = me(c);
        if (typeof u != `function`) throw Error(i(150));
        if (((c = u.call(c)), c == null)) throw Error(i(151));
        for (
          var d = (u = null), h = s, g = (s = 0), _ = null, v = c.next();
          h !== null && !v.done;
          g++, v = c.next()
        ) {
          h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          (e && h && y.alternate === null && t(a, h),
            (s = o(y, s, g)),
            d === null ? (u = y) : (d.sibling = y),
            (d = y),
            (h = _));
        }
        if (v.done) return (n(a, h), F && Aa(a, g), u);
        if (h === null) {
          for (; !v.done; g++, v = c.next())
            ((v = f(a, v.value, l)),
              v !== null &&
                ((s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (F && Aa(a, g), u);
        }
        for (h = r(a, h); !v.done; g++, v = c.next())
          ((v = m(h, a, g, v.value, l)),
            v !== null &&
              (e &&
                v.alternate !== null &&
                h.delete(v.key === null ? g : v.key),
              (s = o(v, s, g)),
              d === null ? (u = v) : (d.sibling = v),
              (d = v)));
        return (
          e &&
            h.forEach(function (e) {
              return t(a, e);
            }),
          F && Aa(a, g),
          u
        );
      }
      function _(e, r, i, o) {
        if (
          (typeof i == `object` &&
            i &&
            i.type === ne &&
            i.key === null &&
            (i = i.props.children),
          typeof i == `object` && i)
        ) {
          switch (i.$$typeof) {
            case ee:
              a: {
                for (var c = i.key, l = r; l !== null;) {
                  if (l.key === c) {
                    if (((c = i.type), c === ne)) {
                      if (l.tag === 7) {
                        (n(e, l.sibling),
                          (r = a(l, i.props.children)),
                          (r.return = e),
                          (e = r));
                        break a;
                      }
                    } else if (
                      l.elementType === c ||
                      (typeof c == `object` &&
                        c &&
                        c.$$typeof === de &&
                        qa(c) === l.type)
                    ) {
                      (n(e, l.sibling),
                        (r = a(l, i.props)),
                        (r.ref = Ga(e, l, i)),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, l);
                    break;
                  }
                  (t(e, l), (l = l.sibling));
                }
                i.type === ne
                  ? ((r = $l(i.props.children, e.mode, o, i.key)),
                    (r.return = e),
                    (e = r))
                  : ((o = Ql(i.type, i.key, i.props, null, e.mode, o)),
                    (o.ref = Ga(e, r, i)),
                    (o.return = e),
                    (e = o));
              }
              return s(e);
            case te:
              a: {
                for (l = i.key; r !== null;) {
                  if (r.key === l) {
                    if (
                      r.tag === 4 &&
                      r.stateNode.containerInfo === i.containerInfo &&
                      r.stateNode.implementation === i.implementation
                    ) {
                      (n(e, r.sibling),
                        (r = a(r, i.children || [])),
                        (r.return = e),
                        (e = r));
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  (t(e, r), (r = r.sibling));
                }
                ((r = nu(i, e.mode, o)), (r.return = e), (e = r));
              }
              return s(e);
            case de:
              return ((l = i._init), _(e, r, l(i._payload), o));
          }
          if (Pe(i)) return h(e, r, i, o);
          if (me(i)) return g(e, r, i, o);
          Ka(e, i);
        }
        return (typeof i == `string` && i !== ``) || typeof i == `number`
          ? ((i = `` + i),
            r !== null && r.tag === 6
              ? (n(e, r.sibling), (r = a(r, i)), (r.return = e), (e = r))
              : (n(e, r), (r = tu(i, e.mode, o)), (r.return = e), (e = r)),
            s(e))
          : n(e, r);
      }
      return _;
    }
    var Ya = Ja(!0),
      Xa = Ja(!1),
      Za = ia(null),
      Qa = null,
      $a = null,
      eo = null;
    function to() {
      eo = $a = Qa = null;
    }
    function no(e) {
      var t = Za.current;
      (A(Za), (e._currentValue = t));
    }
    function ro(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) === t
            ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
            : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function io(e, t) {
      ((Qa = e),
        (eo = $a = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Hs = !0), (e.firstContext = null)));
    }
    function ao(e) {
      var t = e._currentValue;
      if (eo !== e) {
        if (((e = { context: e, memoizedValue: t, next: null }), $a === null)) {
          if (Qa === null) throw Error(i(308));
          (($a = e), (Qa.dependencies = { lanes: 0, firstContext: e }));
        } else $a = $a.next = e;
      }
      return t;
    }
    var oo = null;
    function so(e) {
      oo === null ? (oo = [e]) : oo.push(e);
    }
    function co(e, t, n, r) {
      var i = t.interleaved;
      return (
        i === null ? ((n.next = n), so(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        lo(e, r)
      );
    }
    function lo(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var uo = !1;
    function fo(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function po(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function mo(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function ho(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), G & 2)) {
        var i = r.pending;
        return (
          i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
          (r.pending = t),
          lo(e, n)
        );
      }
      return (
        (i = r.interleaved),
        i === null ? ((t.next = t), so(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        lo(e, n)
      );
    }
    function go(e, t, n) {
      if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194240))) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), tn(e, n));
      }
    }
    function _o(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
          a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
          } while (n !== null);
          a === null ? (i = a = t) : (a = a.next = t);
        } else i = a = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function vo(e, t, n, r) {
      var i = e.updateQueue;
      uo = !1;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
        var u = e.alternate;
        u !== null &&
          ((u = u.updateQueue),
          (s = u.lastBaseUpdate),
          s !== o &&
            (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
            (u.lastBaseUpdate = c)));
      }
      if (a !== null) {
        var d = i.baseState;
        ((o = 0), (u = l = c = null), (s = a));
        do {
          var f = s.lane,
            p = s.eventTime;
          if ((r & f) === f) {
            u !== null &&
              (u = u.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                });
            a: {
              var m = e,
                h = s;
              switch (((f = t), (p = n), h.tag)) {
                case 1:
                  if (((m = h.payload), typeof m == `function`)) {
                    d = m.call(p, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = (m.flags & -65537) | 128;
                case 0:
                  if (
                    ((m = h.payload),
                    (f = typeof m == `function` ? m.call(p, d, f) : m),
                    f == null)
                  )
                    break a;
                  d = w({}, d, f);
                  break a;
                case 2:
                  uo = !0;
              }
            }
            s.callback !== null &&
              s.lane !== 0 &&
              ((e.flags |= 64),
              (f = i.effects),
              f === null ? (i.effects = [s]) : f.push(s));
          } else
            ((p = {
              eventTime: p,
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            }),
              u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
              (o |= f));
          if (((s = s.next), s === null)) {
            if (((s = i.shared.pending), s === null)) break;
            ((f = s),
              (s = f.next),
              (f.next = null),
              (i.lastBaseUpdate = f),
              (i.shared.pending = null));
          }
        } while (1);
        if (
          (u === null && (c = d),
          (i.baseState = c),
          (i.firstBaseUpdate = l),
          (i.lastBaseUpdate = u),
          (t = i.shared.interleaved),
          t !== null)
        ) {
          i = t;
          do ((o |= i.lane), (i = i.next));
          while (i !== t);
        } else a === null && (i.shared.lanes = 0);
        ((Qc |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function yo(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            a = r.callback;
          if (a !== null) {
            if (((r.callback = null), (r = n), typeof a != `function`))
              throw Error(i(191, a));
            a.call(r);
          }
        }
    }
    var bo = {},
      xo = ia(bo),
      So = ia(bo),
      Co = ia(bo);
    function wo(e) {
      if (e === bo) throw Error(i(174));
      return e;
    }
    function To(e, t) {
      switch ((j(Co, t), j(So, e), j(xo, bo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ve(null, ``);
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Ve(t, e)));
      }
      (A(xo), j(xo, t));
    }
    function Eo() {
      (A(xo), A(So), A(Co));
    }
    function Do(e) {
      wo(Co.current);
      var t = wo(xo.current),
        n = Ve(t, e.type);
      t !== n && (j(So, e), j(xo, n));
    }
    function Oo(e) {
      So.current === e && (A(xo), A(So));
    }
    var I = ia(0);
    function ko(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === `$?` || n.data === `$!`)
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Ao = [];
    function jo() {
      for (var e = 0; e < Ao.length; e++)
        Ao[e]._workInProgressVersionPrimary = null;
      Ao.length = 0;
    }
    var Mo = C.ReactCurrentDispatcher,
      No = C.ReactCurrentBatchConfig,
      Po = 0,
      L = null,
      R = null,
      z = null,
      Fo = !1,
      Io = !1,
      Lo = 0,
      Ro = 0;
    function B() {
      throw Error(i(321));
    }
    function zo(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Wr(e[n], t[n])) return !1;
      return !0;
    }
    function Bo(e, t, n, r, a, o) {
      if (
        ((Po = o),
        (L = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Mo.current = e === null || e.memoizedState === null ? Ss : Cs),
        (e = n(r, a)),
        Io)
      ) {
        o = 0;
        do {
          if (((Io = !1), (Lo = 0), 25 <= o)) throw Error(i(301));
          ((o += 1),
            (z = R = null),
            (t.updateQueue = null),
            (Mo.current = ws),
            (e = n(r, a)));
        } while (Io);
      }
      if (
        ((Mo.current = xs),
        (t = R !== null && R.next !== null),
        (Po = 0),
        (z = R = L = null),
        (Fo = !1),
        t)
      )
        throw Error(i(300));
      return e;
    }
    function Vo() {
      var e = Lo !== 0;
      return ((Lo = 0), e);
    }
    function V() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (z === null ? (L.memoizedState = z = e) : (z = z.next = e), z);
    }
    function Ho() {
      if (R === null) {
        var e = L.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = R.next;
      var t = z === null ? L.memoizedState : z.next;
      if (t !== null) ((z = t), (R = e));
      else {
        if (e === null) throw Error(i(310));
        ((R = e),
          (e = {
            memoizedState: R.memoizedState,
            baseState: R.baseState,
            baseQueue: R.baseQueue,
            queue: R.queue,
            next: null,
          }),
          z === null ? (L.memoizedState = z = e) : (z = z.next = e));
      }
      return z;
    }
    function Uo(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function Wo(e) {
      var t = Ho(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = R,
        a = r.baseQueue,
        o = n.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          ((a.next = o.next), (o.next = s));
        }
        ((r.baseQueue = a = o), (n.pending = null));
      }
      if (a !== null) {
        ((o = a.next), (r = r.baseState));
        var c = (s = null),
          l = null,
          u = o;
        do {
          var d = u.lane;
          if ((Po & d) === d)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
          else {
            var f = {
              lane: d,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((c = l = f), (s = r)) : (l = l.next = f),
              (L.lanes |= d),
              (Qc |= d));
          }
          u = u.next;
        } while (u !== null && u !== o);
        (l === null ? (s = r) : (l.next = c),
          Wr(r, t.memoizedState) || (Hs = !0),
          (t.memoizedState = r),
          (t.baseState = s),
          (t.baseQueue = l),
          (n.lastRenderedState = r));
      }
      if (((e = n.interleaved), e !== null)) {
        a = e;
        do ((o = a.lane), (L.lanes |= o), (Qc |= o), (a = a.next));
        while (a !== e);
      } else a === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Go(e) {
      var t = Ho(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = (a = a.next);
        do ((o = e(o, s.action)), (s = s.next));
        while (s !== a);
        (Wr(o, t.memoizedState) || (Hs = !0),
          (t.memoizedState = o),
          t.baseQueue === null && (t.baseState = o),
          (n.lastRenderedState = o));
      }
      return [o, r];
    }
    function Ko() {}
    function qo(e, t) {
      var n = L,
        r = Ho(),
        a = t(),
        o = !Wr(r.memoizedState, a);
      if (
        (o && ((r.memoizedState = a), (Hs = !0)),
        (r = r.queue),
        as(Xo.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (z !== null && z.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          es(9, Yo.bind(null, n, r, a, t), void 0, null),
          Yc === null)
        )
          throw Error(i(349));
        Po & 30 || Jo(n, t, a);
      }
      return a;
    }
    function Jo(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = L.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (L.updateQueue = t),
            (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function Yo(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), Zo(t) && Qo(e));
    }
    function Xo(e, t, n) {
      return n(function () {
        Zo(t) && Qo(e);
      });
    }
    function Zo(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Wr(e, n);
      } catch {
        return !0;
      }
    }
    function Qo(e) {
      var t = lo(e, 1);
      t !== null && vl(t, e, 1, -1);
    }
    function $o(e) {
      var t = V();
      return (
        typeof e == `function` && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Uo,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = _s.bind(null, L, e)),
        [t.memoizedState, e]
      );
    }
    function es(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = L.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (L.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function ts() {
      return Ho().memoizedState;
    }
    function ns(e, t, n, r) {
      var i = V();
      ((L.flags |= e),
        (i.memoizedState = es(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function rs(e, t, n, r) {
      var i = Ho();
      r = r === void 0 ? null : r;
      var a = void 0;
      if (R !== null) {
        var o = R.memoizedState;
        if (((a = o.destroy), r !== null && zo(r, o.deps))) {
          i.memoizedState = es(t, n, a, r);
          return;
        }
      }
      ((L.flags |= e), (i.memoizedState = es(1 | t, n, a, r)));
    }
    function is(e, t) {
      return ns(8390656, 8, e, t);
    }
    function as(e, t) {
      return rs(2048, 8, e, t);
    }
    function os(e, t) {
      return rs(4, 2, e, t);
    }
    function ss(e, t) {
      return rs(4, 4, e, t);
    }
    function cs(e, t) {
      if (typeof t == `function`)
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function ls(e, t, n) {
      return (
        (n = n == null ? null : n.concat([e])),
        rs(4, 4, cs.bind(null, t, e), n)
      );
    }
    function us() {}
    function ds(e, t) {
      var n = Ho();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && zo(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function fs(e, t) {
      var n = Ho();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && zo(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function ps(e, t, n) {
      return Po & 21
        ? (Wr(n, t) ||
            ((n = Zt()), (L.lanes |= n), (Qc |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (Hs = !0)),
          (e.memoizedState = n));
    }
    function ms(e, t) {
      var n = E;
      ((E = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = No.transition;
      No.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((E = n), (No.transition = r));
      }
    }
    function hs() {
      return Ho().memoizedState;
    }
    function gs(e, t, n) {
      var r = _l(e);
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        vs(e))
      )
        ys(t, n);
      else if (((n = co(e, t, n, r)), n !== null)) {
        var i = gl();
        (vl(n, e, r, i), bs(n, t, r));
      }
    }
    function _s(e, t, n) {
      var r = _l(e),
        i = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (vs(e)) ys(t, i);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var o = t.lastRenderedState,
              s = a(o, n);
            if (((i.hasEagerState = !0), (i.eagerState = s), Wr(s, o))) {
              var c = t.interleaved;
              (c === null
                ? ((i.next = i), so(t))
                : ((i.next = c.next), (c.next = i)),
                (t.interleaved = i));
              return;
            }
          } catch {}
        ((n = co(e, t, i, r)),
          n !== null && ((i = gl()), vl(n, e, r, i), bs(n, t, r)));
      }
    }
    function vs(e) {
      var t = e.alternate;
      return e === L || (t !== null && t === L);
    }
    function ys(e, t) {
      Io = Fo = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function bs(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), tn(e, n));
      }
    }
    var xs = {
        readContext: ao,
        useCallback: B,
        useContext: B,
        useEffect: B,
        useImperativeHandle: B,
        useInsertionEffect: B,
        useLayoutEffect: B,
        useMemo: B,
        useReducer: B,
        useRef: B,
        useState: B,
        useDebugValue: B,
        useDeferredValue: B,
        useTransition: B,
        useMutableSource: B,
        useSyncExternalStore: B,
        useId: B,
        unstable_isNewReconciler: !1,
      },
      Ss = {
        readContext: ao,
        useCallback: function (e, t) {
          return ((V().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: ao,
        useEffect: is,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n == null ? null : n.concat([e])),
            ns(4194308, 4, cs.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return ns(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return ns(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = V();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = V();
          return (
            (t = n === void 0 ? t : n(t)),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = gs.bind(null, L, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = V();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: $o,
        useDebugValue: us,
        useDeferredValue: function (e) {
          return (V().memoizedState = e);
        },
        useTransition: function () {
          var e = $o(!1),
            t = e[0];
          return ((e = ms.bind(null, e[1])), (V().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = L,
            a = V();
          if (F) {
            if (n === void 0) throw Error(i(407));
            n = n();
          } else {
            if (((n = t()), Yc === null)) throw Error(i(349));
            Po & 30 || Jo(r, t, n);
          }
          a.memoizedState = n;
          var o = { value: n, getSnapshot: t };
          return (
            (a.queue = o),
            is(Xo.bind(null, r, o, e), [e]),
            (r.flags |= 2048),
            es(9, Yo.bind(null, r, o, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = V(),
            t = Yc.identifierPrefix;
          if (F) {
            var n = ka,
              r = Oa;
            ((n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
              (t = `:` + t + `R` + n),
              (n = Lo++),
              0 < n && (t += `H` + n.toString(32)),
              (t += `:`));
          } else ((n = Ro++), (t = `:` + t + `r` + n.toString(32) + `:`));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      Cs = {
        readContext: ao,
        useCallback: ds,
        useContext: ao,
        useEffect: as,
        useImperativeHandle: ls,
        useInsertionEffect: os,
        useLayoutEffect: ss,
        useMemo: fs,
        useReducer: Wo,
        useRef: ts,
        useState: function () {
          return Wo(Uo);
        },
        useDebugValue: us,
        useDeferredValue: function (e) {
          return ps(Ho(), R.memoizedState, e);
        },
        useTransition: function () {
          return [Wo(Uo)[0], Ho().memoizedState];
        },
        useMutableSource: Ko,
        useSyncExternalStore: qo,
        useId: hs,
        unstable_isNewReconciler: !1,
      },
      ws = {
        readContext: ao,
        useCallback: ds,
        useContext: ao,
        useEffect: as,
        useImperativeHandle: ls,
        useInsertionEffect: os,
        useLayoutEffect: ss,
        useMemo: fs,
        useReducer: Go,
        useRef: ts,
        useState: function () {
          return Go(Uo);
        },
        useDebugValue: us,
        useDeferredValue: function (e) {
          var t = Ho();
          return R === null ? (t.memoizedState = e) : ps(t, R.memoizedState, e);
        },
        useTransition: function () {
          return [Go(Uo)[0], Ho().memoizedState];
        },
        useMutableSource: Ko,
        useSyncExternalStore: qo,
        useId: hs,
        unstable_isNewReconciler: !1,
      };
    function Ts(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = w({}, t)), (e = e.defaultProps), e))
          t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function Es(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : w({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Ds = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? xt(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = mo(r, i);
        ((a.payload = t),
          n != null && (a.callback = n),
          (t = ho(e, a, i)),
          t !== null && (vl(t, e, i, r), go(t, e, i)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = gl(),
          i = _l(e),
          a = mo(r, i);
        ((a.tag = 1),
          (a.payload = t),
          n != null && (a.callback = n),
          (t = ho(e, a, i)),
          t !== null && (vl(t, e, i, r), go(t, e, i)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = gl(),
          r = _l(e),
          i = mo(n, r);
        ((i.tag = 2),
          t != null && (i.callback = t),
          (t = ho(e, i, r)),
          t !== null && (vl(t, e, r, n), go(t, e, r)));
      },
    };
    function Os(e, t, n, r, i, a, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == `function`
          ? e.shouldComponentUpdate(r, a, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Gr(n, r) || !Gr(i, a)
            : !0
      );
    }
    function ks(e, t, n) {
      var r = !1,
        i = aa,
        a = t.contextType;
      return (
        typeof a == `object` && a
          ? (a = ao(a))
          : ((i = ua(t) ? ca : oa.current),
            (r = t.contextTypes),
            (a = (r = r != null) ? la(e, i) : aa)),
        (t = new t(n, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ds),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = i),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function As(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == `function` &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == `function` &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ds.enqueueReplaceState(t, t.state, null));
    }
    function js(e, t, n, r) {
      var i = e.stateNode;
      ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), fo(e));
      var a = t.contextType;
      (typeof a == `object` && a
        ? (i.context = ao(a))
        : ((a = ua(t) ? ca : oa.current), (i.context = la(e, a))),
        (i.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == `function` && (Es(e, t, a, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == `function` ||
          typeof i.getSnapshotBeforeUpdate == `function` ||
          (typeof i.UNSAFE_componentWillMount != `function` &&
            typeof i.componentWillMount != `function`) ||
          ((t = i.state),
          typeof i.componentWillMount == `function` && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == `function` &&
            i.UNSAFE_componentWillMount(),
          t !== i.state && Ds.enqueueReplaceState(i, i.state, null),
          vo(e, n, i, r),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == `function` && (e.flags |= 4194308));
    }
    function Ms(e, t) {
      try {
        var n = ``,
          r = t;
        do ((n += ye(r)), (r = r.return));
        while (r);
        var i = n;
      } catch (e) {
        i =
          `
Error generating stack: ` +
          e.message +
          `
` +
          e.stack;
      }
      return { value: e, source: t, stack: i, digest: null };
    }
    function Ns(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Ps(e, t) {
      try {
        console.error(t.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var Fs = typeof WeakMap == `function` ? WeakMap : Map;
    function Is(e, t, n) {
      ((n = mo(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (ol || ((ol = !0), (sl = r)), Ps(e, t));
        }),
        n
      );
    }
    function Ls(e, t, n) {
      ((n = mo(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == `function`) {
        var i = t.value;
        ((n.payload = function () {
          return r(i);
        }),
          (n.callback = function () {
            Ps(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == `function` &&
          (n.callback = function () {
            (Ps(e, t),
              typeof r != `function` &&
                (cl === null ? (cl = new Set([this])) : cl.add(this)));
            var n = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: n === null ? `` : n,
            });
          }),
        n
      );
    }
    function Rs(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new Fs();
        var i = new Set();
        r.set(t, i);
      } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
      i.has(n) || (i.add(n), (e = Hl.bind(null, e, t, n)), t.then(e, e));
    }
    function zs(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Bs(e, t, n, r, i) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null
                  ? (n.tag = 17)
                  : ((t = mo(-1, 1)), (t.tag = 2), ho(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var Vs = C.ReactCurrentOwner,
      Hs = !1;
    function H(e, t, n, r) {
      t.child = e === null ? Xa(t, null, n, r) : Ya(t, e.child, n, r);
    }
    function Us(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      return (
        io(t, i),
        (r = Bo(e, t, n, r, a, i)),
        (n = Vo()),
        e !== null && !Hs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            lc(e, t, i))
          : (F && n && Ma(t), (t.flags |= 1), H(e, t, r, i), t.child)
      );
    }
    function Ws(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` &&
          !Yl(a) &&
          a.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), Gs(e, t, a, r, i))
          : ((e = Ql(n.type, null, r, t, t.mode, i)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & i) === 0)) {
        var o = a.memoizedProps;
        if (
          ((n = n.compare),
          (n = n === null ? Gr : n),
          n(o, r) && e.ref === t.ref)
        )
          return lc(e, t, i);
      }
      return (
        (t.flags |= 1),
        (e = Zl(a, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function Gs(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Gr(a, r) && e.ref === t.ref) {
          if (((Hs = !1), (t.pendingProps = r = a), (e.lanes & i) !== 0))
            e.flags & 131072 && (Hs = !0);
          else return ((t.lanes = e.lanes), lc(e, t, i));
        }
      }
      return Js(e, t, n, r, i);
    }
    function Ks(e, t, n) {
      var r = t.pendingProps,
        i = r.children,
        a = e === null ? null : e.memoizedState;
      if (r.mode === `hidden`) {
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            j(Xc, J),
            (J |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = a === null ? n : a.baseLanes | n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              j(Xc, J),
              (J |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = a === null ? n : a.baseLanes),
            j(Xc, J),
            (J |= r));
        }
      } else
        (a === null
          ? (r = n)
          : ((r = a.baseLanes | n), (t.memoizedState = null)),
          j(Xc, J),
          (J |= r));
      return (H(e, t, i, n), t.child);
    }
    function qs(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Js(e, t, n, r, i) {
      var a = ua(n) ? ca : oa.current;
      return (
        (a = la(t, a)),
        io(t, i),
        (n = Bo(e, t, n, r, a, i)),
        (r = Vo()),
        e !== null && !Hs
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~i),
            lc(e, t, i))
          : (F && r && Ma(t), (t.flags |= 1), H(e, t, n, i), t.child)
      );
    }
    function Ys(e, t, n, r, i) {
      if (ua(n)) {
        var a = !0;
        ma(t);
      } else a = !1;
      if ((io(t, i), t.stateNode === null))
        (cc(e, t), ks(t, n, r), js(t, n, r, i), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          s = t.memoizedProps;
        o.props = s;
        var c = o.context,
          l = n.contextType;
        typeof l == `object` && l
          ? (l = ao(l))
          : ((l = ua(n) ? ca : oa.current), (l = la(t, l)));
        var u = n.getDerivedStateFromProps,
          d =
            typeof u == `function` ||
            typeof o.getSnapshotBeforeUpdate == `function`;
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== r || c !== l) && As(t, o, r, l)),
          (uo = !1));
        var f = t.memoizedState;
        ((o.state = f),
          vo(t, r, o, i),
          (c = t.memoizedState),
          s !== r || f !== c || sa.current || uo
            ? (typeof u == `function` &&
                (Es(t, n, u, r), (c = t.memoizedState)),
              (s = uo || Os(t, n, s, r, f, c, l))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != `function` &&
                      typeof o.componentWillMount != `function`) ||
                    (typeof o.componentWillMount == `function` &&
                      o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == `function` &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308))
                : (typeof o.componentDidMount == `function` &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = c)),
              (o.props = r),
              (o.state = c),
              (o.context = l),
              (r = s))
            : (typeof o.componentDidMount == `function` && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((o = t.stateNode),
          po(e, t),
          (s = t.memoizedProps),
          (l = t.type === t.elementType ? s : Ts(t.type, s)),
          (o.props = l),
          (d = t.pendingProps),
          (f = o.context),
          (c = n.contextType),
          typeof c == `object` && c
            ? (c = ao(c))
            : ((c = ua(n) ? ca : oa.current), (c = la(t, c))));
        var p = n.getDerivedStateFromProps;
        ((u =
          typeof p == `function` ||
          typeof o.getSnapshotBeforeUpdate == `function`) ||
          (typeof o.UNSAFE_componentWillReceiveProps != `function` &&
            typeof o.componentWillReceiveProps != `function`) ||
          ((s !== d || f !== c) && As(t, o, r, c)),
          (uo = !1),
          (f = t.memoizedState),
          (o.state = f),
          vo(t, r, o, i));
        var m = t.memoizedState;
        s !== d || f !== m || sa.current || uo
          ? (typeof p == `function` && (Es(t, n, p, r), (m = t.memoizedState)),
            (l = uo || Os(t, n, l, r, f, m, c) || !1)
              ? (u ||
                  (typeof o.UNSAFE_componentWillUpdate != `function` &&
                    typeof o.componentWillUpdate != `function`) ||
                  (typeof o.componentWillUpdate == `function` &&
                    o.componentWillUpdate(r, m, c),
                  typeof o.UNSAFE_componentWillUpdate == `function` &&
                    o.UNSAFE_componentWillUpdate(r, m, c)),
                typeof o.componentDidUpdate == `function` && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == `function` &&
                  (t.flags |= 1024))
              : (typeof o.componentDidUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != `function` ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = m)),
            (o.props = r),
            (o.state = m),
            (o.context = c),
            (r = l))
          : (typeof o.componentDidUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != `function` ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return Xs(e, t, n, r, a, i);
    }
    function Xs(e, t, n, r, i, a) {
      qs(e, t);
      var o = !!(t.flags & 128);
      if (!r && !o) return (i && ha(t, n, !1), lc(e, t, a));
      ((r = t.stateNode), (Vs.current = t));
      var s =
        o && typeof n.getDerivedStateFromError != `function`
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Ya(t, e.child, null, a)), (t.child = Ya(t, null, s, a)))
          : H(e, t, s, a),
        (t.memoizedState = r.state),
        i && ha(t, n, !0),
        t.child
      );
    }
    function Zs(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? fa(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && fa(e, t.context, !1),
        To(e, t.containerInfo));
    }
    function Qs(e, t, n, r, i) {
      return (Ha(), Ua(i), (t.flags |= 256), H(e, t, n, r), t.child);
    }
    var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
    function ec(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function tc(e, t, n) {
      var r = t.pendingProps,
        i = I.current,
        a = !1,
        o = !!(t.flags & 128),
        s;
      if (
        ((s = o) ||
          (s = e !== null && e.memoizedState === null ? !1 : !!(i & 2)),
        s
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (i |= 1),
        j(I, i & 1),
        e === null)
      )
        return (
          Ra(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.lanes = t.mode & 1 ? (e.data === `$!` ? 8 : 1073741824) : 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              a
                ? ((r = t.mode),
                  (a = t.child),
                  (o = { mode: `hidden`, children: o }),
                  !(r & 1) && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = o))
                    : (a = eu(o, r, 0, null)),
                  (e = $l(e, r, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = ec(n)),
                  (t.memoizedState = $s),
                  e)
                : nc(t, o))
        );
      if (
        ((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null))
      )
        return ic(e, t, o, r, s, i, n);
      if (a) {
        ((a = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling));
        var c = { mode: `hidden`, children: r.children };
        return (
          !(o & 1) && t.child !== i
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = c),
              (t.deletions = null))
            : ((r = Zl(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
          s === null
            ? ((a = $l(a, o, n, null)), (a.flags |= 2))
            : (a = Zl(s, a)),
          (a.return = t),
          (r.return = t),
          (r.sibling = a),
          (t.child = r),
          (r = a),
          (a = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? ec(n)
              : {
                  baseLanes: o.baseLanes | n,
                  cachePool: null,
                  transitions: o.transitions,
                }),
          (a.memoizedState = o),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = $s),
          r
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (r = Zl(a, { mode: `visible`, children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions),
          n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function nc(e, t) {
      return (
        (t = eu({ mode: `visible`, children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function rc(e, t, n, r) {
      return (
        r !== null && Ua(r),
        Ya(t, e.child, null, n),
        (e = nc(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function ic(e, t, n, r, a, o, s) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (r = Ns(Error(i(422)))), rc(e, t, s, r))
          : t.memoizedState === null
            ? ((o = r.fallback),
              (a = t.mode),
              (r = eu({ mode: `visible`, children: r.children }, a, 0, null)),
              (o = $l(o, a, s, null)),
              (o.flags |= 2),
              (r.return = t),
              (o.return = t),
              (r.sibling = o),
              (t.child = r),
              t.mode & 1 && Ya(t, e.child, null, s),
              (t.child.memoizedState = ec(s)),
              (t.memoizedState = $s),
              o)
            : ((t.child = e.child), (t.flags |= 128), null);
      if (!(t.mode & 1)) return rc(e, t, s, null);
      if (a.data === `$!`) {
        if (((r = a.nextSibling && a.nextSibling.dataset), r)) var c = r.dgst;
        return (
          (r = c),
          (o = Error(i(419))),
          (r = Ns(o, r, void 0)),
          rc(e, t, s, r)
        );
      }
      if (((c = (s & e.childLanes) !== 0), Hs || c)) {
        if (((r = Yc), r !== null)) {
          switch (s & -s) {
            case 4:
              a = 2;
              break;
            case 16:
              a = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              a = 32;
              break;
            case 536870912:
              a = 268435456;
              break;
            default:
              a = 0;
          }
          ((a = (a & (r.suspendedLanes | s)) === 0 ? a : 0),
            a !== 0 &&
              a !== o.retryLane &&
              ((o.retryLane = a), lo(e, a), vl(r, e, a, -1)));
        }
        return (Ml(), (r = Ns(Error(i(421)))), rc(e, t, s, r));
      }
      return a.data === `$?`
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Wl.bind(null, e)),
          (a._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (P = Ui(a.nextSibling)),
          (N = t),
          (F = !0),
          (Pa = null),
          e !== null &&
            ((Ta[Ea++] = Oa),
            (Ta[Ea++] = ka),
            (Ta[Ea++] = Da),
            (Oa = e.id),
            (ka = e.overflow),
            (Da = t)),
          (t = nc(t, r.children)),
          (t.flags |= 4096),
          t);
    }
    function ac(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), ro(e.return, t, n));
    }
    function oc(e, t, n, r, i) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: i,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = i));
    }
    function sc(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      if ((H(e, t, r.children, n), (r = I.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          a: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && ac(e, n, t);
            else if (e.tag === 19) ac(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((j(I, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (i) {
          case `forwards`:
            for (n = t.child, i = null; n !== null;)
              ((e = n.alternate),
                e !== null && ko(e) === null && (i = n),
                (n = n.sibling));
            ((n = i),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              oc(t, !1, i, n, a));
            break;
          case `backwards`:
            for (n = null, i = t.child, t.child = null; i !== null;) {
              if (((e = i.alternate), e !== null && ko(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            oc(t, !0, n, null, a);
            break;
          case `together`:
            oc(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function cc(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function lc(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Qc |= t.lanes),
        (n & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (
          e = t.child, n = Zl(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = Zl(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function uc(e, t, n) {
      switch (t.tag) {
        case 3:
          (Zs(t), Ha());
          break;
        case 5:
          Do(t);
          break;
        case 1:
          ua(t.type) && ma(t);
          break;
        case 4:
          To(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            i = t.memoizedProps.value;
          (j(Za, r._currentValue), (r._currentValue = i));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated === null
              ? (n & t.child.childLanes) === 0
                ? (j(I, I.current & 1),
                  (e = lc(e, t, n)),
                  e === null ? null : e.sibling)
                : tc(e, t, n)
              : (j(I, I.current & 1), (t.flags |= 128), null);
          j(I, I.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return sc(e, t, n);
            t.flags |= 128;
          }
          if (
            ((i = t.memoizedState),
            i !== null &&
              ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            j(I, I.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), Ks(e, t, n));
      }
      return lc(e, t, n);
    }
    var dc = function (e, t) {
        for (var n = t.child; n !== null;) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            ((n.child.return = n), (n = n.child));
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          ((n.sibling.return = n.return), (n = n.sibling));
        }
      },
      fc = function (e, t, n, r) {
        var i = e.memoizedProps;
        if (i !== r) {
          ((e = t.stateNode), wo(xo.current));
          var a = null;
          switch (n) {
            case `input`:
              ((i = Oe(e, i)), (r = Oe(e, r)), (a = []));
              break;
            case `select`:
              ((i = w({}, i, { value: void 0 })),
                (r = w({}, r, { value: void 0 })),
                (a = []));
              break;
            case `textarea`:
              ((i = Ie(e, i)), (r = Ie(e, r)), (a = []));
              break;
            default:
              typeof i.onClick != `function` &&
                typeof r.onClick == `function` &&
                (e.onclick = Ni);
          }
          Xe(n, r);
          var s;
          for (u in ((n = null), i))
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null) {
              if (u === `style`) {
                var c = i[u];
                for (s in c) c.hasOwnProperty(s) && ((n ||= {}), (n[s] = ``));
              } else
                u !== `dangerouslySetInnerHTML` &&
                  u !== `children` &&
                  u !== `suppressContentEditableWarning` &&
                  u !== `suppressHydrationWarning` &&
                  u !== `autoFocus` &&
                  (o.hasOwnProperty(u) ? (a ||= []) : (a ||= []).push(u, null));
            }
          for (u in r) {
            var l = r[u];
            if (
              ((c = i?.[u]),
              r.hasOwnProperty(u) && l !== c && (l != null || c != null))
            ) {
              if (u === `style`) {
                if (c) {
                  for (s in c)
                    !c.hasOwnProperty(s) ||
                      (l && l.hasOwnProperty(s)) ||
                      ((n ||= {}), (n[s] = ``));
                  for (s in l)
                    l.hasOwnProperty(s) &&
                      c[s] !== l[s] &&
                      ((n ||= {}), (n[s] = l[s]));
                } else (n || ((a ||= []), a.push(u, n)), (n = l));
              } else
                u === `dangerouslySetInnerHTML`
                  ? ((l = l ? l.__html : void 0),
                    (c = c ? c.__html : void 0),
                    l != null && c !== l && (a ||= []).push(u, l))
                  : u === `children`
                    ? (typeof l != `string` && typeof l != `number`) ||
                      (a ||= []).push(u, `` + l)
                    : u !== `suppressContentEditableWarning` &&
                      u !== `suppressHydrationWarning` &&
                      (o.hasOwnProperty(u)
                        ? (l != null && u === `onScroll` && O(`scroll`, e),
                          a || c === l || (a = []))
                        : (a ||= []).push(u, l));
            }
          }
          n && (a ||= []).push(`style`, n);
          var u = a;
          (t.updateQueue = u) && (t.flags |= 4);
        }
      },
      pc = function (e, t, n, r) {
        n !== r && (t.flags |= 4);
      };
    function mc(e, t) {
      if (!F)
        switch (e.tailMode) {
          case `hidden`:
            t = e.tail;
            for (var n = null; t !== null;)
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case `collapsed`:
            n = e.tail;
            for (var r = null; n !== null;)
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function hc(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags & 14680064),
            (r |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling));
      else
        for (i = e.child; i !== null;)
          ((n |= i.lanes | i.childLanes),
            (r |= i.subtreeFlags),
            (r |= i.flags),
            (i.return = e),
            (i = i.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function gc(e, t, n) {
      var r = t.pendingProps;
      switch ((Na(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (hc(t), null);
        case 1:
          return (ua(t.type) && da(), hc(t), null);
        case 3:
          return (
            (r = t.stateNode),
            Eo(),
            A(sa),
            A(oa),
            jo(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ba(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), Pa !== null && (Sl(Pa), (Pa = null)))),
            hc(t),
            null
          );
        case 5:
          Oo(t);
          var a = wo(Co.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (fc(e, t, n, r, a),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return (hc(t), null);
            }
            if (((e = wo(xo.current)), Ba(t))) {
              ((r = t.stateNode), (n = t.type));
              var s = t.memoizedProps;
              switch (((r[Ki] = t), (r[qi] = s), (e = !!(t.mode & 1)), n)) {
                case `dialog`:
                  (O(`cancel`, r), O(`close`, r));
                  break;
                case `iframe`:
                case `object`:
                case `embed`:
                  O(`load`, r);
                  break;
                case `video`:
                case `audio`:
                  for (a = 0; a < _i.length; a++) O(_i[a], r);
                  break;
                case `source`:
                  O(`error`, r);
                  break;
                case `img`:
                case `image`:
                case `link`:
                  (O(`error`, r), O(`load`, r));
                  break;
                case `details`:
                  O(`toggle`, r);
                  break;
                case `input`:
                  (ke(r, s), O(`invalid`, r));
                  break;
                case `select`:
                  ((r._wrapperState = { wasMultiple: !!s.multiple }),
                    O(`invalid`, r));
                  break;
                case `textarea`:
                  (Le(r, s), O(`invalid`, r));
              }
              for (var c in (Xe(n, s), (a = null), s))
                if (s.hasOwnProperty(c)) {
                  var l = s[c];
                  c === `children`
                    ? typeof l == `string`
                      ? r.textContent !== l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Mi(r.textContent, l, e),
                        (a = [`children`, l]))
                      : typeof l == `number` &&
                        r.textContent !== `` + l &&
                        (!0 !== s.suppressHydrationWarning &&
                          Mi(r.textContent, l, e),
                        (a = [`children`, `` + l]))
                    : o.hasOwnProperty(c) &&
                      l != null &&
                      c === `onScroll` &&
                      O(`scroll`, r);
                }
              switch (n) {
                case `input`:
                  (Te(r), Me(r, s, !0));
                  break;
                case `textarea`:
                  (Te(r), ze(r));
                  break;
                case `select`:
                case `option`:
                  break;
                default:
                  typeof s.onClick == `function` && (r.onclick = Ni);
              }
              ((r = a), (t.updateQueue = r), r !== null && (t.flags |= 4));
            } else {
              ((c = a.nodeType === 9 ? a : a.ownerDocument),
                e === `http://www.w3.org/1999/xhtml` && (e = Be(n)),
                e === `http://www.w3.org/1999/xhtml`
                  ? n === `script`
                    ? ((e = c.createElement(`div`)),
                      (e.innerHTML = `<script><\/script>`),
                      (e = e.removeChild(e.firstChild)))
                    : typeof r.is == `string`
                      ? (e = c.createElement(n, { is: r.is }))
                      : ((e = c.createElement(n)),
                        n === `select` &&
                          ((c = e),
                          r.multiple
                            ? (c.multiple = !0)
                            : r.size && (c.size = r.size)))
                  : (e = c.createElementNS(e, n)),
                (e[Ki] = t),
                (e[qi] = r),
                dc(e, t, !1, !1),
                (t.stateNode = e));
              a: {
                switch (((c = Ze(n, r)), n)) {
                  case `dialog`:
                    (O(`cancel`, e), O(`close`, e), (a = r));
                    break;
                  case `iframe`:
                  case `object`:
                  case `embed`:
                    (O(`load`, e), (a = r));
                    break;
                  case `video`:
                  case `audio`:
                    for (a = 0; a < _i.length; a++) O(_i[a], e);
                    a = r;
                    break;
                  case `source`:
                    (O(`error`, e), (a = r));
                    break;
                  case `img`:
                  case `image`:
                  case `link`:
                    (O(`error`, e), O(`load`, e), (a = r));
                    break;
                  case `details`:
                    (O(`toggle`, e), (a = r));
                    break;
                  case `input`:
                    (ke(e, r), (a = Oe(e, r)), O(`invalid`, e));
                    break;
                  case `option`:
                    a = r;
                    break;
                  case `select`:
                    ((e._wrapperState = { wasMultiple: !!r.multiple }),
                      (a = w({}, r, { value: void 0 })),
                      O(`invalid`, e));
                    break;
                  case `textarea`:
                    (Le(e, r), (a = Ie(e, r)), O(`invalid`, e));
                    break;
                  default:
                    a = r;
                }
                for (s in (Xe(n, a), (l = a), l))
                  if (l.hasOwnProperty(s)) {
                    var u = l[s];
                    s === `style`
                      ? Je(e, u)
                      : s === `dangerouslySetInnerHTML`
                        ? ((u = u ? u.__html : void 0), u != null && Ue(e, u))
                        : s === `children`
                          ? typeof u == `string`
                            ? (n !== `textarea` || u !== ``) && We(e, u)
                            : typeof u == `number` && We(e, `` + u)
                          : s !== `suppressContentEditableWarning` &&
                            s !== `suppressHydrationWarning` &&
                            s !== `autoFocus` &&
                            (o.hasOwnProperty(s)
                              ? u != null && s === `onScroll` && O(`scroll`, e)
                              : u != null && S(e, s, u, c));
                  }
                switch (n) {
                  case `input`:
                    (Te(e), Me(e, r, !1));
                    break;
                  case `textarea`:
                    (Te(e), ze(e));
                    break;
                  case `option`:
                    r.value != null &&
                      e.setAttribute(`value`, `` + Se(r.value));
                    break;
                  case `select`:
                    ((e.multiple = !!r.multiple),
                      (s = r.value),
                      s == null
                        ? r.defaultValue != null &&
                          Fe(e, !!r.multiple, r.defaultValue, !0)
                        : Fe(e, !!r.multiple, s, !1));
                    break;
                  default:
                    typeof a.onClick == `function` && (e.onclick = Ni);
                }
                switch (n) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    r = !!r.autoFocus;
                    break a;
                  case `img`:
                    r = !0;
                    break a;
                  default:
                    r = !1;
                }
              }
              r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (hc(t), null);
        case 6:
          if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
          else {
            if (typeof r != `string` && t.stateNode === null)
              throw Error(i(166));
            if (((n = wo(Co.current)), wo(xo.current), Ba(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Ki] = t),
                (s = r.nodeValue !== n) && ((e = N), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Mi(r.nodeValue, n, !!(e.mode & 1));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      Mi(r.nodeValue, n, !!(e.mode & 1));
                }
              s && (t.flags |= 4);
            } else
              ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                (r[Ki] = t),
                (t.stateNode = r));
          }
          return (hc(t), null);
        case 13:
          if (
            (A(I),
            (r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (F && P !== null && t.mode & 1 && !(t.flags & 128))
              (Va(), Ha(), (t.flags |= 98560), (s = !1));
            else if (((s = Ba(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!s) throw Error(i(318));
                if (
                  ((s = t.memoizedState),
                  (s = s === null ? null : s.dehydrated),
                  !s)
                )
                  throw Error(i(317));
                s[Ki] = t;
              } else
                (Ha(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (hc(t), (s = !1));
            } else (Pa !== null && (Sl(Pa), (Pa = null)), (s = !0));
            if (!s) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || I.current & 1 ? Y === 0 && (Y = 3) : Ml())),
              t.updateQueue !== null && (t.flags |= 4),
              hc(t),
              null);
        case 4:
          return (
            Eo(),
            e === null && Ci(t.stateNode.containerInfo),
            hc(t),
            null
          );
        case 10:
          return (no(t.type._context), hc(t), null);
        case 17:
          return (ua(t.type) && da(), hc(t), null);
        case 19:
          if ((A(I), (s = t.memoizedState), s === null)) return (hc(t), null);
          if (((r = !!(t.flags & 128)), (c = s.rendering), c === null)) {
            if (r) mc(s, !1);
            else {
              if (Y !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null;) {
                  if (((c = ko(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        mc(s, !1),
                        r = c.updateQueue,
                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      n !== null;
                    )
                      ((s = n),
                        (e = r),
                        (s.flags &= 14680066),
                        (c = s.alternate),
                        c === null
                          ? ((s.childLanes = 0),
                            (s.lanes = e),
                            (s.child = null),
                            (s.subtreeFlags = 0),
                            (s.memoizedProps = null),
                            (s.memoizedState = null),
                            (s.updateQueue = null),
                            (s.dependencies = null),
                            (s.stateNode = null))
                          : ((s.childLanes = c.childLanes),
                            (s.lanes = c.lanes),
                            (s.child = c.child),
                            (s.subtreeFlags = 0),
                            (s.deletions = null),
                            (s.memoizedProps = c.memoizedProps),
                            (s.memoizedState = c.memoizedState),
                            (s.updateQueue = c.updateQueue),
                            (s.type = c.type),
                            (e = c.dependencies),
                            (s.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return (j(I, (I.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              s.tail !== null &&
                T() > il &&
                ((t.flags |= 128), (r = !0), mc(s, !1), (t.lanes = 4194304));
            }
          } else {
            if (!r) {
              if (((e = ko(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  mc(s, !0),
                  s.tail === null &&
                    s.tailMode === `hidden` &&
                    !c.alternate &&
                    !F)
                )
                  return (hc(t), null);
              } else
                2 * T() - s.renderingStartTime > il &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (r = !0), mc(s, !1), (t.lanes = 4194304));
            }
            s.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((n = s.last),
                n === null ? (t.child = c) : (n.sibling = c),
                (s.last = c));
          }
          return s.tail === null
            ? (hc(t), null)
            : ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = T()),
              (t.sibling = null),
              (n = I.current),
              j(I, r ? (n & 1) | 2 : n & 1),
              t);
        case 22:
        case 23:
          return (
            Ol(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && t.mode & 1
              ? J & 1073741824 &&
                (hc(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : hc(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(i(156, t.tag));
    }
    function _c(e, t) {
      switch ((Na(t), t.tag)) {
        case 1:
          return (
            ua(t.type) && da(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Eo(),
            A(sa),
            A(oa),
            jo(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (Oo(t), null);
        case 13:
          if (
            (A(I), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(i(340));
            Ha();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (A(I), null);
        case 4:
          return (Eo(), null);
        case 10:
          return (no(t.type._context), null);
        case 22:
        case 23:
          return (Ol(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var vc = !1,
      yc = !1,
      bc = typeof WeakSet == `function` ? WeakSet : Set,
      U = null;
    function xc(e, t) {
      var n = e.ref;
      if (n !== null) {
        if (typeof n == `function`)
          try {
            n(null);
          } catch (n) {
            X(e, t, n);
          }
        else n.current = null;
      }
    }
    function Sc(e, t, n) {
      try {
        n();
      } catch (n) {
        X(e, t, n);
      }
    }
    var Cc = !1;
    function wc(e, t) {
      if (((Pi = On), (e = Jr()), Yr(e))) {
        if (`selectionStart` in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          a: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var a = r.anchorOffset,
                o = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, o.nodeType);
              } catch {
                n = null;
                break a;
              }
              var s = 0,
                c = -1,
                l = -1,
                u = 0,
                d = 0,
                f = e,
                p = null;
              b: for (;;) {
                for (
                  var m;
                  f !== n || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                    f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                    f.nodeType === 3 && (s += f.nodeValue.length),
                    (m = f.firstChild) !== null;
                )
                  ((p = f), (f = m));
                for (;;) {
                  if (f === e) break b;
                  if (
                    (p === n && ++u === a && (c = s),
                    p === o && ++d === r && (l = s),
                    (m = f.nextSibling) !== null)
                  )
                    break;
                  ((f = p), (p = f.parentNode));
                }
                f = m;
              }
              n = c === -1 || l === -1 ? null : { start: c, end: l };
            } else n = null;
          }
        n ||= { start: 0, end: 0 };
      } else n = null;
      for (
        Fi = { focusedElem: e, selectionRange: n }, On = !1, U = t;
        U !== null;
      )
        if (((t = U), (e = t.child), t.subtreeFlags & 1028 && e !== null))
          ((e.return = t), (U = e));
        else
          for (; U !== null;) {
            t = U;
            try {
              var h = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (h !== null) {
                      var g = h.memoizedProps,
                        _ = h.memoizedState,
                        v = t.stateNode;
                      v.__reactInternalSnapshotBeforeUpdate =
                        v.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? g : Ts(t.type, g),
                          _,
                        );
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = ``)
                      : y.nodeType === 9 &&
                        y.documentElement &&
                        y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(i(163));
                }
            } catch (e) {
              X(t, t.return, e);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (U = e));
              break;
            }
            U = t.return;
          }
      return ((h = Cc), (Cc = !1), h);
    }
    function Tc(e, t, n) {
      var r = t.updateQueue;
      if (((r = r === null ? null : r.lastEffect), r !== null)) {
        var i = (r = r.next);
        do {
          if ((i.tag & e) === e) {
            var a = i.destroy;
            ((i.destroy = void 0), a !== void 0 && Sc(t, n, a));
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function Ec(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t === null ? null : t.lastEffect),
        t !== null)
      ) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function Dc(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == `function` ? t(e) : (t.current = e);
      }
    }
    function Oc(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), Oc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Ki],
            delete t[qi],
            delete t[Yi],
            delete t[Xi],
            delete t[Zi])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function kc(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Ac(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || kc(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue a;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function jc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Ni)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (jc(e, t, n), e = e.sibling; e !== null;)
          (jc(e, t, n), (e = e.sibling));
    }
    function Mc(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (Mc(e, t, n), e = e.sibling; e !== null;)
          (Mc(e, t, n), (e = e.sibling));
    }
    var W = null,
      Nc = !1;
    function Pc(e, t, n) {
      for (n = n.child; n !== null;) (Fc(e, t, n), (n = n.sibling));
    }
    function Fc(e, t, n) {
      if (Rt && typeof Rt.onCommitFiberUnmount == `function`)
        try {
          Rt.onCommitFiberUnmount(Lt, n);
        } catch {}
      switch (n.tag) {
        case 5:
          yc || xc(n, t);
        case 6:
          var r = W,
            i = Nc;
          ((W = null),
            Pc(e, t, n),
            (W = r),
            (Nc = i),
            W !== null &&
              (Nc
                ? ((e = W),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : W.removeChild(n.stateNode)));
          break;
        case 18:
          W !== null &&
            (Nc
              ? ((e = W),
                (n = n.stateNode),
                e.nodeType === 8
                  ? Hi(e.parentNode, n)
                  : e.nodeType === 1 && Hi(e, n),
                En(e))
              : Hi(W, n.stateNode));
          break;
        case 4:
          ((r = W),
            (i = Nc),
            (W = n.stateNode.containerInfo),
            (Nc = !0),
            Pc(e, t, n),
            (W = r),
            (Nc = i));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !yc &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
          ) {
            i = r = r.next;
            do {
              var a = i,
                o = a.destroy;
              ((a = a.tag),
                o !== void 0 && (a & 2 || a & 4) && Sc(n, t, o),
                (i = i.next));
            } while (i !== r);
          }
          Pc(e, t, n);
          break;
        case 1:
          if (
            !yc &&
            (xc(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == `function`)
          )
            try {
              ((r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount());
            } catch (e) {
              X(n, t, e);
            }
          Pc(e, t, n);
          break;
        case 21:
          Pc(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? ((yc = (r = yc) || n.memoizedState !== null),
              Pc(e, t, n),
              (yc = r))
            : Pc(e, t, n);
          break;
        default:
          Pc(e, t, n);
      }
    }
    function Ic(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new bc()),
          t.forEach(function (t) {
            var r = Gl.bind(null, e, t);
            n.has(t) || (n.add(t), t.then(r, r));
          }));
      }
    }
    function Lc(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var a = n[r];
          try {
            var o = e,
              s = t,
              c = s;
            a: for (; c !== null;) {
              switch (c.tag) {
                case 5:
                  ((W = c.stateNode), (Nc = !1));
                  break a;
                case 3:
                  ((W = c.stateNode.containerInfo), (Nc = !0));
                  break a;
                case 4:
                  ((W = c.stateNode.containerInfo), (Nc = !0));
                  break a;
              }
              c = c.return;
            }
            if (W === null) throw Error(i(160));
            (Fc(o, s, a), (W = null), (Nc = !1));
            var l = a.alternate;
            (l !== null && (l.return = null), (a.return = null));
          } catch (e) {
            X(a, t, e);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) (Rc(t, e), (t = t.sibling));
    }
    function Rc(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Lc(t, e), zc(e), r & 4)) {
            try {
              (Tc(3, e, e.return), Ec(3, e));
            } catch (t) {
              X(e, e.return, t);
            }
            try {
              Tc(5, e, e.return);
            } catch (t) {
              X(e, e.return, t);
            }
          }
          break;
        case 1:
          (Lc(t, e), zc(e), r & 512 && n !== null && xc(n, n.return));
          break;
        case 5:
          if (
            (Lc(t, e),
            zc(e),
            r & 512 && n !== null && xc(n, n.return),
            e.flags & 32)
          ) {
            var a = e.stateNode;
            try {
              We(a, ``);
            } catch (t) {
              X(e, e.return, t);
            }
          }
          if (r & 4 && ((a = e.stateNode), a != null)) {
            var o = e.memoizedProps,
              s = n === null ? o : n.memoizedProps,
              c = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (c === `input` &&
                  o.type === `radio` &&
                  o.name != null &&
                  Ae(a, o),
                  Ze(c, s));
                var u = Ze(c, o);
                for (s = 0; s < l.length; s += 2) {
                  var d = l[s],
                    f = l[s + 1];
                  d === `style`
                    ? Je(a, f)
                    : d === `dangerouslySetInnerHTML`
                      ? Ue(a, f)
                      : d === `children`
                        ? We(a, f)
                        : S(a, d, f, u);
                }
                switch (c) {
                  case `input`:
                    je(a, o);
                    break;
                  case `textarea`:
                    Re(a, o);
                    break;
                  case `select`:
                    var p = a._wrapperState.wasMultiple;
                    a._wrapperState.wasMultiple = !!o.multiple;
                    var m = o.value;
                    m == null
                      ? p !== !!o.multiple &&
                        (o.defaultValue == null
                          ? Fe(a, !!o.multiple, o.multiple ? [] : ``, !1)
                          : Fe(a, !!o.multiple, o.defaultValue, !0))
                      : Fe(a, !!o.multiple, m, !1);
                }
                a[qi] = o;
              } catch (t) {
                X(e, e.return, t);
              }
          }
          break;
        case 6:
          if ((Lc(t, e), zc(e), r & 4)) {
            if (e.stateNode === null) throw Error(i(162));
            ((a = e.stateNode), (o = e.memoizedProps));
            try {
              a.nodeValue = o;
            } catch (t) {
              X(e, e.return, t);
            }
          }
          break;
        case 3:
          if (
            (Lc(t, e),
            zc(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              En(t.containerInfo);
            } catch (t) {
              X(e, e.return, t);
            }
          break;
        case 4:
          (Lc(t, e), zc(e));
          break;
        case 13:
          (Lc(t, e),
            zc(e),
            (a = e.child),
            a.flags & 8192 &&
              ((o = a.memoizedState !== null),
              (a.stateNode.isHidden = o),
              !o ||
                (a.alternate !== null && a.alternate.memoizedState !== null) ||
                (rl = T())),
            r & 4 && Ic(e));
          break;
        case 22:
          if (
            ((d = n !== null && n.memoizedState !== null),
            e.mode & 1 ? ((yc = (u = yc) || d), Lc(t, e), (yc = u)) : Lc(t, e),
            zc(e),
            r & 8192)
          ) {
            if (
              ((u = e.memoizedState !== null),
              (e.stateNode.isHidden = u) && !d && e.mode & 1)
            )
              for (U = e, d = e.child; d !== null;) {
                for (f = U = d; U !== null;) {
                  switch (((p = U), (m = p.child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Tc(4, p, p.return);
                      break;
                    case 1:
                      xc(p, p.return);
                      var h = p.stateNode;
                      if (typeof h.componentWillUnmount == `function`) {
                        ((r = p), (n = p.return));
                        try {
                          ((t = r),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount());
                        } catch (e) {
                          X(r, n, e);
                        }
                      }
                      break;
                    case 5:
                      xc(p, p.return);
                      break;
                    case 22:
                      if (p.memoizedState !== null) {
                        Uc(f);
                        continue;
                      }
                  }
                  m === null ? Uc(f) : ((m.return = p), (U = m));
                }
                d = d.sibling;
              }
            a: for (d = null, f = e; ;) {
              if (f.tag === 5) {
                if (d === null) {
                  d = f;
                  try {
                    ((a = f.stateNode),
                      u
                        ? ((o = a.style),
                          typeof o.setProperty == `function`
                            ? o.setProperty(`display`, `none`, `important`)
                            : (o.display = `none`))
                        : ((c = f.stateNode),
                          (l = f.memoizedProps.style),
                          (s =
                            l != null && l.hasOwnProperty(`display`)
                              ? l.display
                              : null),
                          (c.style.display = qe(`display`, s))));
                  } catch (t) {
                    X(e, e.return, t);
                  }
                }
              } else if (f.tag === 6) {
                if (d === null)
                  try {
                    f.stateNode.nodeValue = u ? `` : f.memoizedProps;
                  } catch (t) {
                    X(e, e.return, t);
                  }
              } else if (
                ((f.tag !== 22 && f.tag !== 23) ||
                  f.memoizedState === null ||
                  f === e) &&
                f.child !== null
              ) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === e) break a;
              for (; f.sibling === null;) {
                if (f.return === null || f.return === e) break a;
                (d === f && (d = null), (f = f.return));
              }
              (d === f && (d = null),
                (f.sibling.return = f.return),
                (f = f.sibling));
            }
          }
          break;
        case 19:
          (Lc(t, e), zc(e), r & 4 && Ic(e));
          break;
        case 21:
          break;
        default:
          (Lc(t, e), zc(e));
      }
    }
    function zc(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          a: {
            for (var n = e.return; n !== null;) {
              if (kc(n)) {
                var r = n;
                break a;
              }
              n = n.return;
            }
            throw Error(i(160));
          }
          switch (r.tag) {
            case 5:
              var a = r.stateNode;
              (r.flags & 32 && (We(a, ``), (r.flags &= -33)), Mc(e, Ac(e), a));
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo;
              jc(e, Ac(e), o);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          X(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Bc(e, t, n) {
      ((U = e), Vc(e, t, n));
    }
    function Vc(e, t, n) {
      for (var r = !!(e.mode & 1); U !== null;) {
        var i = U,
          a = i.child;
        if (i.tag === 22 && r) {
          var o = i.memoizedState !== null || vc;
          if (!o) {
            var s = i.alternate,
              c = (s !== null && s.memoizedState !== null) || yc;
            s = vc;
            var l = yc;
            if (((vc = o), (yc = c) && !l))
              for (U = i; U !== null;)
                ((o = U),
                  (c = o.child),
                  (o.tag === 22 && o.memoizedState !== null) || c === null
                    ? Wc(i)
                    : ((c.return = o), (U = c)));
            for (; a !== null;) ((U = a), Vc(a, t, n), (a = a.sibling));
            ((U = i), (vc = s), (yc = l));
          }
          Hc(e, t, n);
        } else
          i.subtreeFlags & 8772 && a !== null
            ? ((a.return = i), (U = a))
            : Hc(e, t, n);
      }
    }
    function Hc(e) {
      for (; U !== null;) {
        var t = U;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  yc || Ec(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !yc) {
                    if (n === null) r.componentDidMount();
                    else {
                      var a =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : Ts(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        a,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  }
                  var o = t.updateQueue;
                  o !== null && yo(t, o, r);
                  break;
                case 3:
                  var s = t.updateQueue;
                  if (s !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    yo(t, s, n);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = c;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case `button`:
                      case `input`:
                      case `select`:
                      case `textarea`:
                        l.autoFocus && n.focus();
                        break;
                      case `img`:
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var d = u.memoizedState;
                      if (d !== null) {
                        var f = d.dehydrated;
                        f !== null && En(f);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(i(163));
              }
            yc || (t.flags & 512 && Dc(t));
          } catch (e) {
            X(t, t.return, e);
          }
        }
        if (t === e) {
          U = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (U = n));
          break;
        }
        U = t.return;
      }
    }
    function Uc(e) {
      for (; U !== null;) {
        var t = U;
        if (t === e) {
          U = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (U = n));
          break;
        }
        U = t.return;
      }
    }
    function Wc(e) {
      for (; U !== null;) {
        var t = U;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Ec(4, t);
              } catch (e) {
                X(t, n, e);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == `function`) {
                var i = t.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  X(t, i, e);
                }
              }
              var a = t.return;
              try {
                Dc(t);
              } catch (e) {
                X(t, a, e);
              }
              break;
            case 5:
              var o = t.return;
              try {
                Dc(t);
              } catch (e) {
                X(t, o, e);
              }
          }
        } catch (e) {
          X(t, t.return, e);
        }
        if (t === e) {
          U = null;
          break;
        }
        var s = t.sibling;
        if (s !== null) {
          ((s.return = t.return), (U = s));
          break;
        }
        U = t.return;
      }
    }
    var Gc = Math.ceil,
      Kc = C.ReactCurrentDispatcher,
      qc = C.ReactCurrentOwner,
      Jc = C.ReactCurrentBatchConfig,
      G = 0,
      Yc = null,
      K = null,
      q = 0,
      J = 0,
      Xc = ia(0),
      Y = 0,
      Zc = null,
      Qc = 0,
      $c = 0,
      el = 0,
      tl = null,
      nl = null,
      rl = 0,
      il = 1 / 0,
      al = null,
      ol = !1,
      sl = null,
      cl = null,
      ll = !1,
      ul = null,
      dl = 0,
      fl = 0,
      pl = null,
      ml = -1,
      hl = 0;
    function gl() {
      return G & 6 ? T() : ml === -1 ? (ml = T()) : ml;
    }
    function _l(e) {
      return e.mode & 1
        ? G & 2 && q !== 0
          ? q & -q
          : Wa.transition === null
            ? ((e = E),
              e === 0
                ? ((e = window.event), (e = e === void 0 ? 16 : Pn(e.type)), e)
                : e)
            : (hl === 0 && (hl = Zt()), hl)
        : 1;
    }
    function vl(e, t, n, r) {
      if (50 < fl) throw ((fl = 0), (pl = null), Error(i(185)));
      ($t(e, n, r),
        (!(G & 2) || e !== Yc) &&
          (e === Yc && (!(G & 2) && ($c |= n), Y === 4 && wl(e, q)),
          yl(e, r),
          n === 1 &&
            G === 0 &&
            !(t.mode & 1) &&
            ((il = T() + 500), _a && xa())));
    }
    function yl(e, t) {
      var n = e.callbackNode;
      Yt(e, t);
      var r = qt(e, e === Yc ? q : 0);
      if (r === 0)
        (n !== null && Ot(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Ot(n), t === 1))
          (e.tag === 0 ? ba(Tl.bind(null, e)) : ya(Tl.bind(null, e)),
            Bi(function () {
              !(G & 6) && xa();
            }),
            (n = null));
        else {
          switch (nn(r)) {
            case 1:
              n = Mt;
              break;
            case 4:
              n = Nt;
              break;
            case 16:
              n = Pt;
              break;
            case 536870912:
              n = It;
              break;
            default:
              n = Pt;
          }
          n = Z(n, bl.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function bl(e, t) {
      if (((ml = -1), (hl = 0), G & 6)) throw Error(i(327));
      var n = e.callbackNode;
      if (Bl() && e.callbackNode !== n) return null;
      var r = qt(e, e === Yc ? q : 0);
      if (r === 0) return null;
      if (r & 30 || (r & e.expiredLanes) !== 0 || t) t = Nl(e, r);
      else {
        t = r;
        var a = G;
        G |= 2;
        var o = jl();
        (Yc !== e || q !== t) && ((al = null), (il = T() + 500), kl(e, t));
        do
          try {
            Fl();
            break;
          } catch (t) {
            Al(e, t);
          }
        while (1);
        (to(),
          (Kc.current = o),
          (G = a),
          K === null ? ((Yc = null), (q = 0), (t = Y)) : (t = 0));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((a = Xt(e)), a !== 0 && ((r = a), (t = xl(e, a)))),
          t === 1)
        )
          throw ((n = Zc), kl(e, 0), wl(e, r), yl(e, T()), n);
        if (t === 6) wl(e, r);
        else {
          if (
            ((a = e.current.alternate),
            !(r & 30) &&
              !Cl(a) &&
              ((t = Nl(e, r)),
              t === 2 && ((o = Xt(e)), o !== 0 && ((r = o), (t = xl(e, o)))),
              t === 1))
          )
            throw ((n = Zc), kl(e, 0), wl(e, r), yl(e, T()), n);
          switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
              Rl(e, nl, al);
              break;
            case 3:
              if (
                (wl(e, r),
                (r & 130023424) === r && ((t = rl + 500 - T()), 10 < t))
              ) {
                if (qt(e, 0) !== 0) break;
                if (((a = e.suspendedLanes), (a & r) !== r)) {
                  (gl(), (e.pingedLanes |= e.suspendedLanes & a));
                  break;
                }
                e.timeoutHandle = Li(Rl.bind(null, e, nl, al), t);
                break;
              }
              Rl(e, nl, al);
              break;
            case 4:
              if ((wl(e, r), (r & 4194240) === r)) break;
              for (t = e.eventTimes, a = -1; 0 < r;) {
                var s = 31 - Bt(r);
                ((o = 1 << s), (s = t[s]), s > a && (a = s), (r &= ~o));
              }
              if (
                ((r = a),
                (r = T() - r),
                (r =
                  (120 > r
                    ? 120
                    : 480 > r
                      ? 480
                      : 1080 > r
                        ? 1080
                        : 1920 > r
                          ? 1920
                          : 3e3 > r
                            ? 3e3
                            : 4320 > r
                              ? 4320
                              : 1960 * Gc(r / 1960)) - r),
                10 < r)
              ) {
                e.timeoutHandle = Li(Rl.bind(null, e, nl, al), r);
                break;
              }
              Rl(e, nl, al);
              break;
            case 5:
              Rl(e, nl, al);
              break;
            default:
              throw Error(i(329));
          }
        }
      }
      return (yl(e, T()), e.callbackNode === n ? bl.bind(null, e) : null);
    }
    function xl(e, t) {
      var n = tl;
      return (
        e.current.memoizedState.isDehydrated && (kl(e, t).flags |= 256),
        (e = Nl(e, t)),
        e !== 2 && ((t = nl), (nl = n), t !== null && Sl(t)),
        e
      );
    }
    function Sl(e) {
      nl === null ? (nl = e) : nl.push.apply(nl, e);
    }
    function Cl(e) {
      for (var t = e; ;) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!Wr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function wl(e, t) {
      for (
        t &= ~el,
          t &= ~$c,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Bt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function Tl(e) {
      if (G & 6) throw Error(i(327));
      Bl();
      var t = qt(e, 0);
      if (!(t & 1)) return (yl(e, T()), null);
      var n = Nl(e, t);
      if (e.tag !== 0 && n === 2) {
        var r = Xt(e);
        r !== 0 && ((t = r), (n = xl(e, r)));
      }
      if (n === 1) throw ((n = Zc), kl(e, 0), wl(e, t), yl(e, T()), n);
      if (n === 6) throw Error(i(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Rl(e, nl, al),
        yl(e, T()),
        null
      );
    }
    function El(e, t) {
      var n = G;
      G |= 1;
      try {
        return e(t);
      } finally {
        ((G = n), G === 0 && ((il = T() + 500), _a && xa()));
      }
    }
    function Dl(e) {
      ul !== null && ul.tag === 0 && !(G & 6) && Bl();
      var t = G;
      G |= 1;
      var n = Jc.transition,
        r = E;
      try {
        if (((Jc.transition = null), (E = 1), e)) return e();
      } finally {
        ((E = r), (Jc.transition = n), (G = t), !(G & 6) && xa());
      }
    }
    function Ol() {
      ((J = Xc.current), A(Xc));
    }
    function kl(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), Ri(n)), K !== null))
        for (n = K.return; n !== null;) {
          var r = n;
          switch ((Na(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && da());
              break;
            case 3:
              (Eo(), A(sa), A(oa), jo());
              break;
            case 5:
              Oo(r);
              break;
            case 4:
              Eo();
              break;
            case 13:
              A(I);
              break;
            case 19:
              A(I);
              break;
            case 10:
              no(r.type._context);
              break;
            case 22:
            case 23:
              Ol();
          }
          n = n.return;
        }
      if (
        ((Yc = e),
        (K = e = Zl(e.current, null)),
        (q = J = t),
        (Y = 0),
        (Zc = null),
        (el = $c = Qc = 0),
        (nl = tl = null),
        oo !== null)
      ) {
        for (t = 0; t < oo.length; t++)
          if (((n = oo[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var i = r.next,
              a = n.pending;
            if (a !== null) {
              var o = a.next;
              ((a.next = i), (r.next = o));
            }
            n.pending = r;
          }
        oo = null;
      }
      return e;
    }
    function Al(e, t) {
      do {
        var n = K;
        try {
          if ((to(), (Mo.current = xs), Fo)) {
            for (var r = L.memoizedState; r !== null;) {
              var a = r.queue;
              (a !== null && (a.pending = null), (r = r.next));
            }
            Fo = !1;
          }
          if (
            ((Po = 0),
            (z = R = L = null),
            (Io = !1),
            (Lo = 0),
            (qc.current = null),
            n === null || n.return === null)
          ) {
            ((Y = 1), (Zc = t), (K = null));
            break;
          }
          a: {
            var o = e,
              s = n.return,
              c = n,
              l = t;
            if (
              ((t = q),
              (c.flags |= 32768),
              typeof l == `object` && l && typeof l.then == `function`)
            ) {
              var u = l,
                d = c,
                f = d.tag;
              if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                var p = d.alternate;
                p
                  ? ((d.updateQueue = p.updateQueue),
                    (d.memoizedState = p.memoizedState),
                    (d.lanes = p.lanes))
                  : ((d.updateQueue = null), (d.memoizedState = null));
              }
              var m = zs(s);
              if (m !== null) {
                ((m.flags &= -257),
                  Bs(m, s, c, o, t),
                  m.mode & 1 && Rs(o, u, t),
                  (t = m),
                  (l = u));
                var h = t.updateQueue;
                if (h === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else h.add(l);
                break a;
              }
              if (!(t & 1)) {
                (Rs(o, u, t), Ml());
                break a;
              }
              l = Error(i(426));
            } else if (F && c.mode & 1) {
              var _ = zs(s);
              if (_ !== null) {
                (!(_.flags & 65536) && (_.flags |= 256),
                  Bs(_, s, c, o, t),
                  Ua(Ms(l, c)));
                break a;
              }
            }
            ((o = l = Ms(l, c)),
              Y !== 4 && (Y = 2),
              tl === null ? (tl = [o]) : tl.push(o),
              (o = s));
            do {
              switch (o.tag) {
                case 3:
                  ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                  var v = Is(o, l, t);
                  _o(o, v);
                  break a;
                case 1:
                  c = l;
                  var y = o.type,
                    b = o.stateNode;
                  if (
                    !(o.flags & 128) &&
                    (typeof y.getDerivedStateFromError == `function` ||
                      (b !== null &&
                        typeof b.componentDidCatch == `function` &&
                        (cl === null || !cl.has(b))))
                  ) {
                    ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                    var x = Ls(o, c, t);
                    _o(o, x);
                    break a;
                  }
              }
              o = o.return;
            } while (o !== null);
          }
          Ll(n);
        } catch (e) {
          ((t = e), K === n && n !== null && (K = n = n.return));
          continue;
        }
        break;
      } while (1);
    }
    function jl() {
      var e = Kc.current;
      return ((Kc.current = xs), e === null ? xs : e);
    }
    function Ml() {
      ((Y === 0 || Y === 3 || Y === 2) && (Y = 4),
        Yc === null || (!(Qc & 268435455) && !($c & 268435455)) || wl(Yc, q));
    }
    function Nl(e, t) {
      var n = G;
      G |= 2;
      var r = jl();
      (Yc !== e || q !== t) && ((al = null), kl(e, t));
      do
        try {
          Pl();
          break;
        } catch (t) {
          Al(e, t);
        }
      while (1);
      if ((to(), (G = n), (Kc.current = r), K !== null)) throw Error(i(261));
      return ((Yc = null), (q = 0), Y);
    }
    function Pl() {
      for (; K !== null;) Il(K);
    }
    function Fl() {
      for (; K !== null && !kt();) Il(K);
    }
    function Il(e) {
      var t = Kl(e.alternate, e, J);
      ((e.memoizedProps = e.pendingProps),
        t === null ? Ll(e) : (K = t),
        (qc.current = null));
    }
    function Ll(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = _c(n, t)), n !== null)) {
            ((n.flags &= 32767), (K = n));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Y = 6), (K = null));
            return;
          }
        } else if (((n = gc(n, t, J)), n !== null)) {
          K = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          K = t;
          return;
        }
        K = t = e;
      } while (t !== null);
      Y === 0 && (Y = 5);
    }
    function Rl(e, t, n) {
      var r = E,
        i = Jc.transition;
      try {
        ((Jc.transition = null), (E = 1), zl(e, t, n, r));
      } finally {
        ((Jc.transition = i), (E = r));
      }
      return null;
    }
    function zl(e, t, n, r) {
      do Bl();
      while (ul !== null);
      if (G & 6) throw Error(i(327));
      n = e.finishedWork;
      var a = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(i(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var o = n.lanes | n.childLanes;
      if (
        (en(e, o),
        e === Yc && ((K = Yc = null), (q = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          ll ||
          ((ll = !0),
          Z(Pt, function () {
            return (Bl(), null);
          })),
        (o = !!(n.flags & 15990)),
        n.subtreeFlags & 15990 || o)
      ) {
        ((o = Jc.transition), (Jc.transition = null));
        var s = E;
        E = 1;
        var c = G;
        ((G |= 4),
          (qc.current = null),
          wc(e, n),
          Rc(n, e),
          Xr(Fi),
          (On = !!Pi),
          (Fi = Pi = null),
          (e.current = n),
          Bc(n, e, a),
          At(),
          (G = c),
          (E = s),
          (Jc.transition = o));
      } else e.current = n;
      if (
        (ll && ((ll = !1), (ul = e), (dl = a)),
        (o = e.pendingLanes),
        o === 0 && (cl = null),
        zt(n.stateNode, r),
        yl(e, T()),
        t !== null)
      )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
          ((a = t[n]),
            r(a.value, { componentStack: a.stack, digest: a.digest }));
      if (ol) throw ((ol = !1), (e = sl), (sl = null), e);
      return (
        dl & 1 && e.tag !== 0 && Bl(),
        (o = e.pendingLanes),
        o & 1 ? (e === pl ? fl++ : ((fl = 0), (pl = e))) : (fl = 0),
        xa(),
        null
      );
    }
    function Bl() {
      if (ul !== null) {
        var e = nn(dl),
          t = Jc.transition,
          n = E;
        try {
          if (((Jc.transition = null), (E = 16 > e ? 16 : e), ul === null))
            var r = !1;
          else {
            if (((e = ul), (ul = null), (dl = 0), G & 6)) throw Error(i(331));
            var a = G;
            for (G |= 4, U = e.current; U !== null;) {
              var o = U,
                s = o.child;
              if (U.flags & 16) {
                var c = o.deletions;
                if (c !== null) {
                  for (var l = 0; l < c.length; l++) {
                    var u = c[l];
                    for (U = u; U !== null;) {
                      var d = U;
                      switch (d.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Tc(8, d, o);
                      }
                      var f = d.child;
                      if (f !== null) ((f.return = d), (U = f));
                      else
                        for (; U !== null;) {
                          d = U;
                          var p = d.sibling,
                            m = d.return;
                          if ((Oc(d), d === u)) {
                            U = null;
                            break;
                          }
                          if (p !== null) {
                            ((p.return = m), (U = p));
                            break;
                          }
                          U = m;
                        }
                    }
                  }
                  var h = o.alternate;
                  if (h !== null) {
                    var g = h.child;
                    if (g !== null) {
                      h.child = null;
                      do {
                        var _ = g.sibling;
                        ((g.sibling = null), (g = _));
                      } while (g !== null);
                    }
                  }
                  U = o;
                }
              }
              if (o.subtreeFlags & 2064 && s !== null)
                ((s.return = o), (U = s));
              else
                b: for (; U !== null;) {
                  if (((o = U), o.flags & 2048))
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tc(9, o, o.return);
                    }
                  var v = o.sibling;
                  if (v !== null) {
                    ((v.return = o.return), (U = v));
                    break b;
                  }
                  U = o.return;
                }
            }
            var y = e.current;
            for (U = y; U !== null;) {
              s = U;
              var b = s.child;
              if (s.subtreeFlags & 2064 && b !== null)
                ((b.return = s), (U = b));
              else
                b: for (s = y; U !== null;) {
                  if (((c = U), c.flags & 2048))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ec(9, c);
                      }
                    } catch (e) {
                      X(c, c.return, e);
                    }
                  if (c === s) {
                    U = null;
                    break b;
                  }
                  var x = c.sibling;
                  if (x !== null) {
                    ((x.return = c.return), (U = x));
                    break b;
                  }
                  U = c.return;
                }
            }
            if (
              ((G = a),
              xa(),
              Rt && typeof Rt.onPostCommitFiberRoot == `function`)
            )
              try {
                Rt.onPostCommitFiberRoot(Lt, e);
              } catch {}
            r = !0;
          }
          return r;
        } finally {
          ((E = n), (Jc.transition = t));
        }
      }
      return !1;
    }
    function Vl(e, t, n) {
      ((t = Ms(n, t)),
        (t = Is(e, t, 1)),
        (e = ho(e, t, 1)),
        (t = gl()),
        e !== null && ($t(e, 1, t), yl(e, t)));
    }
    function X(e, t, n) {
      if (e.tag === 3) Vl(e, e, n);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Vl(t, e, n);
            break;
          }
          if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == `function` ||
              (typeof r.componentDidCatch == `function` &&
                (cl === null || !cl.has(r)))
            ) {
              ((e = Ms(n, e)),
                (e = Ls(t, e, 1)),
                (t = ho(t, e, 1)),
                (e = gl()),
                t !== null && ($t(t, 1, e), yl(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function Hl(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = gl()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Yc === e &&
          (q & n) === n &&
          (Y === 4 || (Y === 3 && (q & 130023424) === q && 500 > T() - rl)
            ? kl(e, 0)
            : (el |= n)),
        yl(e, t));
    }
    function Ul(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Gt), (Gt <<= 1), !(Gt & 130023424) && (Gt = 4194304))
          : (t = 1));
      var n = gl();
      ((e = lo(e, t)), e !== null && ($t(e, t, n), yl(e, n)));
    }
    function Wl(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), Ul(e, n));
    }
    function Gl(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(i(314));
      }
      (r !== null && r.delete(t), Ul(e, n));
    }
    var Kl = function (e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps || sa.current) Hs = !0;
        else {
          if ((e.lanes & n) === 0 && !(t.flags & 128))
            return ((Hs = !1), uc(e, t, n));
          Hs = !!(e.flags & 131072);
        }
      } else ((Hs = !1), F && t.flags & 1048576 && ja(t, wa, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          (cc(e, t), (e = t.pendingProps));
          var a = la(t, oa.current);
          (io(t, n), (a = Bo(null, t, r, e, a, n)));
          var o = Vo();
          return (
            (t.flags |= 1),
            typeof a == `object` &&
            a &&
            typeof a.render == `function` &&
            a.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ua(r) ? ((o = !0), ma(t)) : (o = !1),
                (t.memoizedState =
                  a.state !== null && a.state !== void 0 ? a.state : null),
                fo(t),
                (a.updater = Ds),
                (t.stateNode = a),
                (a._reactInternals = t),
                js(t, r, e, n),
                (t = Xs(null, t, r, !0, o, n)))
              : ((t.tag = 0), F && o && Ma(t), H(null, t, a, n), (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          a: {
            switch (
              (cc(e, t),
              (e = t.pendingProps),
              (a = r._init),
              (r = a(r._payload)),
              (t.type = r),
              (a = t.tag = Xl(r)),
              (e = Ts(r, e)),
              a)
            ) {
              case 0:
                t = Js(null, t, r, e, n);
                break a;
              case 1:
                t = Ys(null, t, r, e, n);
                break a;
              case 11:
                t = Us(null, t, r, e, n);
                break a;
              case 14:
                t = Ws(null, t, r, Ts(r.type, e), n);
                break a;
            }
            throw Error(i(306, r, ``));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Ts(r, a)),
            Js(e, t, r, a, n)
          );
        case 1:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Ts(r, a)),
            Ys(e, t, r, a, n)
          );
        case 3:
          a: {
            if ((Zs(t), e === null)) throw Error(i(387));
            ((r = t.pendingProps),
              (o = t.memoizedState),
              (a = o.element),
              po(e, t),
              vo(t, r, null, n));
            var s = t.memoizedState;
            if (((r = s.element), o.isDehydrated)) {
              if (
                ((o = {
                  element: r,
                  isDehydrated: !1,
                  cache: s.cache,
                  pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                  transitions: s.transitions,
                }),
                (t.updateQueue.baseState = o),
                (t.memoizedState = o),
                t.flags & 256)
              ) {
                ((a = Ms(Error(i(423)), t)), (t = Qs(e, t, r, n, a)));
                break a;
              }
              if (r !== a) {
                ((a = Ms(Error(i(424)), t)), (t = Qs(e, t, r, n, a)));
                break a;
              }
              for (
                P = Ui(t.stateNode.containerInfo.firstChild),
                  N = t,
                  F = !0,
                  Pa = null,
                  n = Xa(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            } else {
              if ((Ha(), r === a)) {
                t = lc(e, t, n);
                break a;
              }
              H(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            Do(t),
            e === null && Ra(t),
            (r = t.type),
            (a = t.pendingProps),
            (o = e === null ? null : e.memoizedProps),
            (s = a.children),
            Ii(r, a) ? (s = null) : o !== null && Ii(r, o) && (t.flags |= 32),
            qs(e, t),
            H(e, t, s, n),
            t.child
          );
        case 6:
          return (e === null && Ra(t), null);
        case 13:
          return tc(e, t, n);
        case 4:
          return (
            To(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Ya(t, null, r, n)) : H(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Ts(r, a)),
            Us(e, t, r, a, n)
          );
        case 7:
          return (H(e, t, t.pendingProps, n), t.child);
        case 8:
          return (H(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (H(e, t, t.pendingProps.children, n), t.child);
        case 10:
          a: {
            if (
              ((r = t.type._context),
              (a = t.pendingProps),
              (o = t.memoizedProps),
              (s = a.value),
              j(Za, r._currentValue),
              (r._currentValue = s),
              o !== null)
            ) {
              if (Wr(o.value, s)) {
                if (o.children === a.children && !sa.current) {
                  t = lc(e, t, n);
                  break a;
                }
              } else
                for (o = t.child, o !== null && (o.return = t); o !== null;) {
                  var c = o.dependencies;
                  if (c !== null) {
                    s = o.child;
                    for (var l = c.firstContext; l !== null;) {
                      if (l.context === r) {
                        if (o.tag === 1) {
                          ((l = mo(-1, n & -n)), (l.tag = 2));
                          var u = o.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var d = u.pending;
                            (d === null
                              ? (l.next = l)
                              : ((l.next = d.next), (d.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((o.lanes |= n),
                          (l = o.alternate),
                          l !== null && (l.lanes |= n),
                          ro(o.return, n, t),
                          (c.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (o.tag === 10)
                    s = o.type === t.type ? null : o.child;
                  else if (o.tag === 18) {
                    if (((s = o.return), s === null)) throw Error(i(341));
                    ((s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      ro(s, n, t),
                      (s = o.sibling));
                  } else s = o.child;
                  if (s !== null) s.return = o;
                  else
                    for (s = o; s !== null;) {
                      if (s === t) {
                        s = null;
                        break;
                      }
                      if (((o = s.sibling), o !== null)) {
                        ((o.return = s.return), (s = o));
                        break;
                      }
                      s = s.return;
                    }
                  o = s;
                }
            }
            (H(e, t, a.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (a = t.type),
            (r = t.pendingProps.children),
            io(t, n),
            (a = ao(a)),
            (r = r(a)),
            (t.flags |= 1),
            H(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (r = t.type),
            (a = Ts(r, t.pendingProps)),
            (a = Ts(r.type, a)),
            Ws(e, t, r, a, n)
          );
        case 15:
          return Gs(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (a = t.pendingProps),
            (a = t.elementType === r ? a : Ts(r, a)),
            cc(e, t),
            (t.tag = 1),
            ua(r) ? ((e = !0), ma(t)) : (e = !1),
            io(t, n),
            ks(t, r, a),
            js(t, r, a, n),
            Xs(null, t, r, !0, e, n)
          );
        case 19:
          return sc(e, t, n);
        case 22:
          return Ks(e, t, n);
      }
      throw Error(i(156, t.tag));
    };
    function Z(e, t) {
      return Dt(e, t);
    }
    function ql(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Jl(e, t, n, r) {
      return new ql(e, t, n, r);
    }
    function Yl(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Xl(e) {
      if (typeof e == `function`) return +!!Yl(e);
      if (e != null) {
        if (((e = e.$$typeof), e === se)) return 11;
        if (e === ue) return 14;
      }
      return 2;
    }
    function Zl(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Jl(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function Ql(e, t, n, r, a, o) {
      var s = 2;
      if (((r = e), typeof e == `function`)) Yl(e) && (s = 1);
      else if (typeof e == `string`) s = 5;
      else
        a: switch (e) {
          case ne:
            return $l(n.children, a, o, t);
          case re:
            ((s = 8), (a |= 8));
            break;
          case ie:
            return (
              (e = Jl(12, n, t, a | 2)),
              (e.elementType = ie),
              (e.lanes = o),
              e
            );
          case ce:
            return (
              (e = Jl(13, n, t, a)),
              (e.elementType = ce),
              (e.lanes = o),
              e
            );
          case le:
            return (
              (e = Jl(19, n, t, a)),
              (e.elementType = le),
              (e.lanes = o),
              e
            );
          case fe:
            return eu(n, a, o, t);
          default:
            if (typeof e == `object` && e)
              switch (e.$$typeof) {
                case ae:
                  s = 10;
                  break a;
                case oe:
                  s = 9;
                  break a;
                case se:
                  s = 11;
                  break a;
                case ue:
                  s = 14;
                  break a;
                case de:
                  ((s = 16), (r = null));
                  break a;
              }
            throw Error(i(130, e == null ? e : typeof e, ``));
        }
      return (
        (t = Jl(s, n, t, a)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
      );
    }
    function $l(e, t, n, r) {
      return ((e = Jl(7, e, r, t)), (e.lanes = n), e);
    }
    function eu(e, t, n, r) {
      return (
        (e = Jl(22, e, r, t)),
        (e.elementType = fe),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function tu(e, t, n) {
      return ((e = Jl(6, e, null, t)), (e.lanes = n), e);
    }
    function nu(e, t, n) {
      return (
        (t = Jl(4, e.children === null ? [] : e.children, e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function ru(e, t, n, r, i) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Qt(0)),
        (this.expirationTimes = Qt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Qt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null));
    }
    function iu(e, t, n, r, i, a, o, s, c) {
      return (
        (e = new ru(e, t, n, s, c)),
        t === 1 ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
        (a = Jl(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        fo(a),
        e
      );
    }
    function au(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: te,
        key: r == null ? null : `` + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function ou(e) {
      if (!e) return aa;
      e = e._reactInternals;
      a: {
        if (xt(e) !== e || e.tag !== 1) throw Error(i(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break a;
            case 1:
              if (ua(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break a;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(i(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (ua(n)) return pa(e, n, t);
      }
      return t;
    }
    function su(e, t, n, r, i, a, o, s, c) {
      return (
        (e = iu(n, r, !0, e, i, a, o, s, c)),
        (e.context = ou(null)),
        (n = e.current),
        (r = gl()),
        (i = _l(n)),
        (a = mo(r, i)),
        (a.callback = t ?? null),
        ho(n, a, i),
        (e.current.lanes = i),
        $t(e, i, r),
        yl(e, r),
        e
      );
    }
    function cu(e, t, n, r) {
      var i = t.current,
        a = gl(),
        o = _l(i);
      return (
        (n = ou(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = mo(a, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = ho(i, t, o)),
        e !== null && (vl(e, i, o, a), go(e, i, o)),
        o
      );
    }
    function lu(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function uu(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function du(e, t) {
      (uu(e, t), (e = e.alternate) && uu(e, t));
    }
    function fu() {
      return null;
    }
    var pu =
      typeof reportError == `function`
        ? reportError
        : function (e) {
            console.error(e);
          };
    function Q(e) {
      this._internalRoot = e;
    }
    ((mu.prototype.render = Q.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(i(409));
        cu(e, t, null, null);
      }),
      (mu.prototype.unmount = Q.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            (Dl(function () {
              cu(null, e, null, null);
            }),
              (t[Ji] = null));
          }
        }));
    function mu(e) {
      this._internalRoot = e;
    }
    mu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = sn();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < gn.length && t !== 0 && t < gn[n].priority; n++);
        (gn.splice(n, 0, e), n === 0 && xn(e));
      }
    };
    function hu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function gu(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== ` react-mount-point-unstable `))
      );
    }
    function _u() {}
    function vu(e, t, n, r, i) {
      if (i) {
        if (typeof r == `function`) {
          var a = r;
          r = function () {
            var e = lu(o);
            a.call(e);
          };
        }
        var o = su(t, r, e, 0, null, !1, !1, ``, _u);
        return (
          (e._reactRootContainer = o),
          (e[Ji] = o.current),
          Ci(e.nodeType === 8 ? e.parentNode : e),
          Dl(),
          o
        );
      }
      for (; (i = e.lastChild);) e.removeChild(i);
      if (typeof r == `function`) {
        var s = r;
        r = function () {
          var e = lu(c);
          s.call(e);
        };
      }
      var c = iu(e, 0, !1, null, null, !1, !1, ``, _u);
      return (
        (e._reactRootContainer = c),
        (e[Ji] = c.current),
        Ci(e.nodeType === 8 ? e.parentNode : e),
        Dl(function () {
          cu(t, c, n, r);
        }),
        c
      );
    }
    function yu(e, t, n, r, i) {
      var a = n._reactRootContainer;
      if (a) {
        var o = a;
        if (typeof i == `function`) {
          var s = i;
          i = function () {
            var e = lu(o);
            s.call(e);
          };
        }
        cu(t, o, e, i);
      } else o = vu(n, t, e, i, r);
      return lu(o);
    }
    ((rn = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Kt(t.pendingLanes);
            n !== 0 &&
              (tn(t, n | 1), yl(t, T()), !(G & 6) && ((il = T() + 500), xa()));
          }
          break;
        case 13:
          (Dl(function () {
            var t = lo(e, 1);
            t !== null && vl(t, e, 1, gl());
          }),
            du(e, 1));
      }
    }),
      (an = function (e) {
        if (e.tag === 13) {
          var t = lo(e, 134217728);
          (t !== null && vl(t, e, 134217728, gl()), du(e, 134217728));
        }
      }),
      (on = function (e) {
        if (e.tag === 13) {
          var t = _l(e),
            n = lo(e, t);
          (n !== null && vl(n, e, t, gl()), du(e, t));
        }
      }),
      (sn = function () {
        return E;
      }),
      (cn = function (e, t) {
        var n = E;
        try {
          return ((E = e), t());
        } finally {
          E = n;
        }
      }),
      (et = function (e, t, n) {
        switch (t) {
          case `input`:
            if ((je(e, n), (t = n.name), n.type === `radio` && t != null)) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (
                n = n.querySelectorAll(
                  `input[name=` + JSON.stringify(`` + t) + `][type="radio"]`,
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = ta(r);
                  if (!a) throw Error(i(90));
                  (Ee(r), je(r, a));
                }
              }
            }
            break;
          case `textarea`:
            Re(e, n);
            break;
          case `select`:
            ((t = n.value), t != null && Fe(e, !!n.multiple, t, !1));
        }
      }),
      (ot = El),
      (st = Dl));
    var bu = { usingClientEntryPoint: !1, Events: [$i, ea, ta, it, at, El] },
      xu = {
        findFiberByHostInstance: Qi,
        bundleType: 0,
        version: `18.3.1`,
        rendererPackageName: `react-dom`,
      },
      Su = {
        bundleType: xu.bundleType,
        version: xu.version,
        rendererPackageName: xu.rendererPackageName,
        rendererConfig: xu.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: C.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = Tt(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: xu.findFiberByHostInstance || fu,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: `18.3.1-next-f1338f8080-20240426`,
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Cu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Cu.isDisabled && Cu.supportsFiber)
        try {
          ((Lt = Cu.inject(Su)), (Rt = Cu));
        } catch {}
    }
    ((e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bu),
      (e.createPortal = function (e, t) {
        var n =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!hu(t)) throw Error(i(200));
        return au(e, t, null, n);
      }),
      (e.createRoot = function (e, t) {
        if (!hu(e)) throw Error(i(299));
        var n = !1,
          r = ``,
          a = pu;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
          (t = iu(e, 1, !1, null, null, n, !1, r, a)),
          (e[Ji] = t.current),
          Ci(e.nodeType === 8 ? e.parentNode : e),
          new Q(t)
        );
      }),
      (e.findDOMNode = function (e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(i(188))
            : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
        return ((e = Tt(t)), (e = e === null ? null : e.stateNode), e);
      }),
      (e.flushSync = function (e) {
        return Dl(e);
      }),
      (e.hydrate = function (e, t, n) {
        if (!gu(t)) throw Error(i(200));
        return yu(null, e, t, !0, n);
      }),
      (e.hydrateRoot = function (e, t, n) {
        if (!hu(e)) throw Error(i(405));
        var r = (n != null && n.hydratedSources) || null,
          a = !1,
          o = ``,
          s = pu;
        if (
          (n != null &&
            (!0 === n.unstable_strictMode && (a = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
          (t = su(t, null, e, 1, n ?? null, a, !1, o, s)),
          (e[Ji] = t.current),
          Ci(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            ((n = r[e]),
              (a = n._getVersion),
              (a = a(n._source)),
              t.mutableSourceEagerHydrationData == null
                ? (t.mutableSourceEagerHydrationData = [n, a])
                : t.mutableSourceEagerHydrationData.push(n, a));
        return new mu(t);
      }),
      (e.render = function (e, t, n) {
        if (!gu(t)) throw Error(i(200));
        return yu(null, e, t, !1, n);
      }),
      (e.unmountComponentAtNode = function (e) {
        if (!gu(e)) throw Error(i(40));
        return e._reactRootContainer
          ? (Dl(function () {
              yu(null, null, e, !1, function () {
                ((e._reactRootContainer = null), (e[Ji] = null));
              });
            }),
            !0)
          : !1;
      }),
      (e.unstable_batchedUpdates = El),
      (e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
        if (!gu(n)) throw Error(i(200));
        if (e == null || e._reactInternals === void 0) throw Error(i(38));
        return yu(e, t, n, !1, r);
      }),
      (e.version = `18.3.1-next-f1338f8080-20240426`));
  }),
  f = e((e, t) => {
    function n() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
        } catch (e) {
          console.error(e);
        }
    }
    (n(), (t.exports = d()));
  }),
  p = e((e) => {
    var t = f();
    ((e.createRoot = t.createRoot), (e.hydrateRoot = t.hydrateRoot));
  }),
  m = r(n(), 1),
  h = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  g = /^[\\/]{2}/;
function _(e, t) {
  return t + e.replace(/\\/g, `/`);
}
var v = `popstate`;
function y(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function b(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return te(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : ne(t);
  }
  return ie(t, n, null, e);
}
function x(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function S(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function C() {
  return Math.random().toString(36).substring(2, 10);
}
function ee(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function te(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? re(t) : t),
    state: n,
    key: (t && t.key) || r || C(),
    mask: i,
  };
}
function ne({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function re(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function ie(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = y(e) ? e : te(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = ee(r, l),
      f = h.createHref(r.mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = y(e) ? e : te(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = ee(r, l),
      d = h.createHref(r.mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return ae(i, e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(v, d),
        (c = e),
        () => {
          (i.removeEventListener(v, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function ae(e, t, n = !1) {
  let r = `http://localhost`;
  (e &&
    (r = e.location.origin === `null` ? e.location.href : e.location.origin),
    x(r, `No window.location.(origin|href) available to create URL`));
  let i = typeof t == `string` ? t : ne(t);
  return (
    (i = i.replace(/ $/, `%20`)),
    !n && g.test(i) && (i = r + i),
    new URL(i, r)
  );
}
function oe(e, t, n = `/`) {
  return se(e, t, n, !1);
}
function se(e, t, n, r, i) {
  let a = Te((typeof t == `string` ? re(t) : t).pathname || `/`, n);
  if (a == null) return null;
  let o = i ?? ce(e),
    s = null,
    c = we(a);
  for (let e = 0; s == null && e < o.length; ++e) s = be(o[e], c, r);
  return s;
}
function ce(e) {
  let t = le(e);
  return (de(t), t);
}
function le(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (x(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = Ne([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (x(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      le(e.children, t, u, l, o)),
      (e.path != null || e.index) &&
        t.push({
          path: l,
          score: ve(l, e.index),
          routesMeta: u.map((e, t) => {
            let [n, r] = Ce(
              e.relativePath,
              e.caseSensitive,
              t === u.length - 1,
            );
            return { ...e, matcher: n, compiledParams: r };
          }),
        }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of ue(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function ue(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = ue(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function de(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? ye(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
var fe = /^:[\w-]+$/,
  pe = 3,
  me = 2,
  w = 1,
  he = 10,
  ge = -2,
  _e = (e) => e === `*`;
function ve(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(_e) && (r += ge),
    t && (r += me),
    n
      .filter((e) => !_e(e))
      .reduce((e, t) => e + (fe.test(t) ? pe : t === `` ? w : he), r)
  );
}
function ye(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function be(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d =
        s.matcher && s.compiledParams
          ? Se(u, l, s.matcher, s.compiledParams)
          : xe(u, l),
      f = s.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = xe(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: Ne([a, d.pathname]),
        pathnameBase: Fe(Ne([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== `/` && (a = Ne([a, d.pathnameBase])));
  }
  return o;
}
function xe(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ce(e.path, e.caseSensitive, e.end);
  return Se(e, t, n, r);
}
function Se(e, t, n, r) {
  let i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = Pe(a, 1),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = Pe(a.slice(0, a.length - e.length), 1);
      }
      let i = s[r];
      return ((e[t] = n && !i ? void 0 : (i || ``).replace(/%2F/g, `/`)), e);
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function Ce(e, t = !1, n = !0) {
  S(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function we(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      S(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function Te(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function Ee(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? re(e) : e,
    a;
  return (
    n
      ? ((n = Me(n)),
        (a =
          n.startsWith(`/`) || n.startsWith(`\\`)
            ? De(n.substring(1), `/`)
            : De(n, t)))
      : (a = t),
    { pathname: a, search: Ie(r), hash: Le(i) }
  );
}
function De(e, t) {
  let n = Pe(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Oe(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ke(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function Ae(e) {
  let t = ke(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function je(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = re(e))
    : ((i = { ...e }),
      x(
        !i.pathname || !i.pathname.includes(`?`),
        Oe(`?`, `pathname`, `search`, i),
      ),
      x(
        !i.pathname || !i.pathname.includes(`#`),
        Oe(`#`, `pathname`, `hash`, i),
      ),
      x(!i.search || !i.search.includes(`#`), Oe(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = Ee(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
var Me = (e) => e.replace(/[\\/]{2,}/g, `/`),
  Ne = (e) => Me(e.join(`/`));
function Pe(e, t = 0) {
  let n = e.length;
  for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
  return n === e.length ? e : e.slice(0, n);
}
var Fe = (e) => Pe(e).replace(/^\/*/, `/`),
  Ie = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
  Le = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
  Re = class {
    constructor(e, t, n, r = !1) {
      ((this.status = e),
        (this.statusText = t || ``),
        (this.internal = r),
        n instanceof Error
          ? ((this.data = n.toString()), (this.error = n))
          : (this.data = n));
    }
  };
function ze(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function Be(e) {
  return Ne(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
var Ve =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
function He(e, t) {
  let n = e;
  if (typeof n != `string` || !h.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (Ve)
    try {
      let e = new URL(window.location.href),
        r = g.test(n) ? new URL(_(n, e.protocol)) : new URL(n),
        a = Te(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      S(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
var Ue = new URL(`http://localhost`);
function We(e) {
  if (e.createURL) return e.createURL(`/`);
  try {
    return new URL(e.createHref(`/`), Ue);
  } catch {
    return Ue;
  }
}
function Ge(e, t) {
  return (
    e.origin === t.origin &&
    (e.origin !== `null` || (e.protocol === t.protocol && e.host === t.host))
  );
}
function Ke(e, t) {
  if (e.startsWith(`//`)) return !0;
  let n = t.protocol.toLowerCase();
  return e.toLowerCase().startsWith(n)
    ? t.host === `` || e.slice(n.length).startsWith(`//`)
    : !1;
}
function qe(e, t, n, r) {
  let i = null;
  try {
    i = e == null ? null : new URL(e, n);
  } catch {}
  let a = new URL(t, n),
    o = i != null && !Ge(i, n),
    s = !Ge(a, n);
  if (r === `reject`) {
    if (o || s) throw Error(`External navigation is not allowed`);
  } else if (s && (i == null || !Ke(e, i) || !Ge(i, a)))
    throw Error(`External navigation is not allowed`);
}
var Je = [`POST`, `PUT`, `PATCH`, `DELETE`];
new Set(Je);
var Ye = [`GET`, ...Je];
new Set(Ye);
var Xe = [
  `about:`,
  `blob:`,
  `chrome:`,
  `chrome-untrusted:`,
  `content:`,
  `data:`,
  `devtools:`,
  `file:`,
  `filesystem:`,
  `javascript:`,
];
function Ze(e) {
  try {
    return Xe.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
var Qe = m.createContext(null);
Qe.displayName = `DataRouter`;
var $e = m.createContext(null);
$e.displayName = `DataRouterState`;
var et = m.createContext(!1);
function tt() {
  return m.useContext(et);
}
var nt = m.createContext({ isTransitioning: !1 });
nt.displayName = `ViewTransition`;
var rt = m.createContext(new Map());
rt.displayName = `Fetchers`;
var it = m.createContext(null);
it.displayName = `Await`;
var at = m.createContext(null);
at.displayName = `Navigation`;
var ot = m.createContext(null);
ot.displayName = `Location`;
var st = m.createContext({ outlet: null, matches: [], isDataRoute: !1 });
st.displayName = `Route`;
var ct = m.createContext(null);
ct.displayName = `RouteError`;
var lt = `REACT_ROUTER_ERROR`,
  ut = `REDIRECT`,
  dt = `ROUTE_ERROR_RESPONSE`;
function ft(e) {
  if (e.startsWith(`${lt}:${ut}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function pt(e) {
  if (e.startsWith(`${lt}:${dt}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new Re(t.status, t.statusText, t.data);
    } catch {}
}
function mt(e, { relative: t } = {}) {
  x(ht(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = m.useContext(at),
    { hash: i, pathname: a, search: o } = wt(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : Ne([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function ht() {
  return m.useContext(ot) != null;
}
function gt() {
  return (
    x(
      ht(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    m.useContext(ot).location
  );
}
var _t = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function vt(e) {
  m.useContext(at).static || m.useLayoutEffect(e);
}
function yt() {
  let { isDataRoute: e } = m.useContext(st);
  return e ? Bt() : bt();
}
function bt() {
  x(
    ht(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = m.useContext(Qe),
    { basename: t, navigator: n } = m.useContext(at),
    { matches: r } = m.useContext(st),
    { pathname: i } = gt(),
    a = JSON.stringify(Ae(r)),
    o = m.useRef(!1);
  return (
    vt(() => {
      o.current = !0;
    }),
    m.useCallback(
      (r, s = {}) => {
        if ((S(o.current, _t), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = je(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : Ne([t, c.pathname])),
          qe(
            typeof r == `string` ? r : ne(r),
            n.createHref(c),
            We(n),
            `reject`,
          ),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
var xt = m.createContext(null);
function St(e) {
  let t = m.useContext(st).outlet;
  return m.useMemo(
    () => t && m.createElement(xt.Provider, { value: e }, t),
    [t, e],
  );
}
function Ct() {
  let { matches: e } = m.useContext(st);
  return e[e.length - 1]?.params ?? {};
}
function wt(e, { relative: t } = {}) {
  let { matches: n } = m.useContext(st),
    { pathname: r } = gt(),
    i = JSON.stringify(Ae(n));
  return m.useMemo(() => je(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function Tt(e, t) {
  return Et(e, t);
}
function Et(e, t, n) {
  x(
    ht(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = m.useContext(at),
    { matches: i } = m.useContext(st),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    Ht(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = gt(),
    d;
  if (t) {
    let e = typeof t == `string` ? re(t) : t;
    (x(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let h =
    n && n.state.matches.length
      ? n.state.matches.map((e) =>
          Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
        )
      : oe(e, { pathname: p });
  (S(
    l || h != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    S(
      h == null ||
        h[h.length - 1].route.element !== void 0 ||
        h[h.length - 1].route.Component !== void 0 ||
        h[h.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let g = Mt(
    h &&
      h.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: Ne([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : Ne([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && g
    ? m.createElement(
        ot.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        g,
      )
    : g;
}
function Dt() {
  let e = zt(),
    t = ze(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = m.createElement(
      m.Fragment,
      null,
      m.createElement(`p`, null, `💿 Hey developer 👋`),
      m.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        m.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        m.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    m.createElement(
      m.Fragment,
      null,
      m.createElement(`h2`, null, `Unexpected Application Error!`),
      m.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? m.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
var Ot = m.createElement(Dt, null),
  kt = class extends m.Component {
    constructor(e) {
      (super(e),
        (this.state = {
          location: e.location,
          revalidation: e.revalidation,
          error: e.error,
        }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location ||
        (t.revalidation !== `idle` && e.revalidation === `idle`)
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error === void 0 ? t.error : e.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error(
            `React Router caught the following error during render`,
            e,
          );
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == `object` &&
        e &&
        `digest` in e &&
        typeof e.digest == `string`
      ) {
        let t = pt(e.digest);
        t && (e = t);
      }
      let t =
        e === void 0
          ? this.props.children
          : m.createElement(
              st.Provider,
              { value: this.props.routeContext },
              m.createElement(ct.Provider, {
                value: e,
                children: this.props.component,
              }),
            );
      return this.context ? m.createElement(T, { error: e }, t) : t;
    }
  };
kt.contextType = et;
var At = new WeakMap();
function T({ children: e, error: t }) {
  let { basename: n, navigator: r } = m.useContext(at);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = ft(t.digest);
    if (e) {
      let i = At.get(t);
      if (i) throw i;
      let a = He(e.location, n),
        o = a.absoluteURL || a.to;
      if ((qe(e.location, o, We(r), `allow-explicit`), Ze(o)))
        throw Error(`Invalid redirect location`);
      if (Ve && !At.get(t)) {
        if (a.isExternal || e.reloadDocument) window.location.href = o;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(a.to, {
              replace: e.replace,
            }),
          );
          throw (At.set(t, n), n);
        }
      }
      return m.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${o}`,
      });
    }
  }
  return e;
}
function jt({ routeContext: e, match: t, children: n }) {
  let r = m.useContext(Qe);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    m.createElement(st.Provider, { value: e }, n)
  );
}
function Mt(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (x(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              pattern: Be(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Ot),
      o &&
        (s < 0 && c === 0
          ? (Ht(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, c + 1)),
      g = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? m.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          m.createElement(jt, {
            match: n,
            routeContext: { outlet: e, matches: h, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? m.createElement(kt, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: g(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
          onError: l,
        })
      : g();
  }, null);
}
function Nt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Pt(e) {
  let t = m.useContext(Qe);
  return (x(t, Nt(e)), t);
}
function Ft(e) {
  let t = m.useContext($e);
  return (x(t, Nt(e)), t);
}
function It(e) {
  let t = m.useContext(st);
  return (x(t, Nt(e)), t);
}
function Lt(e) {
  let t = It(e),
    n = t.matches[t.matches.length - 1];
  return (
    x(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Rt() {
  return Lt(`useRouteId`);
}
function zt() {
  let e = m.useContext(ct),
    t = Ft(`useRouteError`),
    n = Lt(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function Bt() {
  let { router: e } = Pt(`useNavigate`),
    t = Lt(`useNavigate`),
    n = m.useRef(!1);
  return (
    vt(() => {
      n.current = !0;
    }),
    m.useCallback(
      async (r, i = {}) => {
        (S(n.current, _t),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
var Vt = {};
function Ht(e, t, n) {
  !t && !Vt[e] && ((Vt[e] = !0), S(!1, n));
}
m.memo(Ut);
function Ut({
  routes: e,
  manifest: t,
  future: n,
  state: r,
  isStatic: i,
  onError: a,
}) {
  return Et(e, void 0, {
    manifest: t,
    state: r,
    isStatic: i,
    onError: a,
    future: n,
  });
}
function Wt(e) {
  return St(e.context);
}
function Gt(e) {
  x(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function Kt({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  useTransitions: o,
}) {
  x(
    !ht(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = m.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = re(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      mask: h,
    } = n,
    g = m.useMemo(() => {
      let e = Te(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              mask: h,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, h]);
  return (
    S(
      g != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    g == null
      ? null
      : m.createElement(
          at.Provider,
          { value: c },
          m.createElement(ot.Provider, { children: t, value: g }),
        )
  );
}
function qt({ children: e, location: t }) {
  return Tt(Jt(e), t);
}
m.Component;
function Jt(e, t = []) {
  let n = [];
  return (
    m.Children.forEach(e, (e, r) => {
      if (!m.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === m.Fragment) {
        n.push.apply(n, Jt(e.props.children, i));
        return;
      }
      (x(
        e.type === Gt,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        x(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = Jt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
var Yt = `get`,
  Xt = `application/x-www-form-urlencoded`;
function Zt(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function Qt(e) {
  return Zt(e) && e.tagName.toLowerCase() === `button`;
}
function $t(e) {
  return Zt(e) && e.tagName.toLowerCase() === `form`;
}
function en(e) {
  return Zt(e) && e.tagName.toLowerCase() === `input`;
}
function tn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function E(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !tn(e);
}
function nn(e = ``) {
  return new URLSearchParams(
    typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams
      ? e
      : Object.keys(e).reduce((t, n) => {
          let r = e[n];
          return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
        }, []),
  );
}
function rn(e, t) {
  let n = nn(e);
  return (
    t &&
      t.forEach((e, r) => {
        n.has(r) ||
          t.getAll(r).forEach((e) => {
            n.append(r, e);
          });
      }),
    n
  );
}
var an = null;
function on() {
  if (an === null)
    try {
      (new FormData(document.createElement(`form`), 0), (an = !1));
    } catch {
      an = !0;
    }
  return an;
}
var sn = new Set([
  `application/x-www-form-urlencoded`,
  `multipart/form-data`,
  `text/plain`,
]);
function cn(e) {
  return e != null && !sn.has(e)
    ? (S(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xt}"`,
      ),
      null)
    : e;
}
function ln(e, t) {
  let n, r, i, a, o;
  if ($t(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? Te(o, t) : null),
      (n = e.getAttribute(`method`) || Yt),
      (i = cn(e.getAttribute(`enctype`)) || Xt),
      (a = new FormData(e)));
  } else if (Qt(e) || (en(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? Te(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Yt),
      (i =
        cn(e.getAttribute(`formenctype`)) ||
        cn(o.getAttribute(`enctype`)) ||
        Xt),
      (a = new FormData(o, e)),
      !on())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (Zt(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = Yt), (r = null), (i = Xt), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
function un(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function dn(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    (i.pathname = n
      ? i.pathname.endsWith(`/`)
        ? `${i.pathname}_.${r}`
        : `${i.pathname}.${r}`
      : i.pathname === `/`
        ? `_root.${r}`
        : t && Te(i.pathname, t) === `/`
          ? `${Pe(t)}/_root.${r}`
          : `${Pe(i.pathname)}.${r}`),
    i
  );
}
async function fn(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await o(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function pn(e) {
  return e != null && typeof e.page == `string`;
}
function mn(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function hn(e, t, n) {
  return bn(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await fn(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(mn)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function gn(e, t, n, r, i, a) {
  let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function _n(e, t, { includeHydrateFallback: n } = {}) {
  return vn(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function vn(e) {
  return [...new Set(e)];
}
function yn(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function bn(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !pn(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(yn(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function xn() {
  let e = m.useContext(Qe);
  return (
    un(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function Sn() {
  let e = m.useContext($e);
  return (
    un(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
var Cn = m.createContext(void 0);
Cn.displayName = `FrameworkContext`;
function wn() {
  let e = m.useContext(Cn);
  return (
    un(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Tn(e, t) {
  let n = m.useContext(Cn),
    [r, i] = m.useState(!1),
    [a, o] = m.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = m.useRef(null);
  (m.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    m.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    h = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: En(s, p),
            onBlur: En(c, h),
            onMouseEnter: En(l, p),
            onMouseLeave: En(u, h),
            onTouchStart: En(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function En(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function Dn({ page: e, ...t }) {
  let n = tt(),
    { nonce: r } = wn(),
    { router: i } = xn(),
    a = m.useMemo(() => oe(i.routes, e, i.basename), [i.routes, e, i.basename]);
  return a
    ? (t.nonce == null && r && (t = { ...t, nonce: r }),
      n
        ? m.createElement(kn, { page: e, matches: a, ...t })
        : m.createElement(An, { page: e, matches: a, ...t }))
    : null;
}
function On(e) {
  let { manifest: t, routeModules: n } = wn(),
    [r, i] = m.useState([]);
  return (
    m.useEffect(() => {
      let r = !1;
      return (
        hn(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function kn({ page: e, matches: t, ...n }) {
  let r = gt(),
    { future: i } = wn(),
    { basename: a } = xn(),
    o = m.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = dn(e, a, i.v8_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.v8_trailingSlashAwareDataRequests, e, r, t]);
  return m.createElement(
    m.Fragment,
    null,
    o.map((e) =>
      m.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function An({ page: e, matches: t, ...n }) {
  let r = gt(),
    { future: i, manifest: a, routeModules: o } = wn(),
    { basename: s } = xn(),
    { loaderData: c, matches: l } = Sn(),
    u = m.useMemo(() => gn(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = m.useMemo(() => gn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = m.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          t &&
            t.hasLoader &&
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = dn(e, s, i.v8_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.v8_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = m.useMemo(() => _n(d, a), [d, a]),
    h = On(d);
  return m.createElement(
    m.Fragment,
    null,
    f.map((e) =>
      m.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      m.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    h.map(({ key: e, link: t }) =>
      m.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function jn(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
m.Component;
var Mn =
  typeof window < `u` &&
  window.document !== void 0 &&
  window.document.createElement !== void 0;
try {
  Mn && (window.__reactRouterVersion = `7.18.3`);
} catch {}
function Nn({ basename: e, children: t, useTransitions: n, window: r }) {
  let i = m.useRef();
  i.current ??= b({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = m.useState({ action: a.action, location: a.location }),
    c = m.useCallback(
      (e) => {
        n === !1 ? s(e) : m.startTransition(() => s(e));
      },
      [n],
    );
  return (
    m.useLayoutEffect(() => a.listen(c), [a, c]),
    m.createElement(Kt, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      useTransitions: n,
    })
  );
}
var Pn = m.forwardRef(function (
  {
    onClick: e,
    discover: t = `render`,
    prefetch: n = `none`,
    relative: r,
    reloadDocument: i,
    replace: a,
    mask: o,
    state: s,
    target: c,
    to: l,
    preventScrollReset: u,
    viewTransition: d,
    defaultShouldRevalidate: f,
    ...p
  },
  g,
) {
  let { basename: _, navigator: v, useTransitions: y } = m.useContext(at),
    b = typeof l == `string` && h.test(l),
    x = He(l, _);
  l = x.to;
  let S = mt(l, { relative: r }),
    C = gt(),
    ee = null;
  if (o) {
    let e = je(o, [], C.mask ? C.mask.pathname : `/`, !0);
    (_ !== `/` && (e.pathname = e.pathname === `/` ? _ : Ne([_, e.pathname])),
      (ee = v.createHref(e)));
  }
  let [te, ne, re] = Tn(n, p),
    ie = zn(l, {
      replace: a,
      mask: o,
      state: s,
      target: c,
      preventScrollReset: u,
      relative: r,
      viewTransition: d,
      defaultShouldRevalidate: f,
      useTransitions: y,
    });
  function ae(t) {
    (e && e(t), t.defaultPrevented || ie(t));
  }
  let oe = !(x.isExternal || i),
    se = m.createElement(`a`, {
      ...p,
      ...re,
      href: (oe ? ee : void 0) || x.absoluteURL || S,
      onClick: oe ? ae : e,
      ref: jn(g, ne),
      target: c,
      "data-discover": !b && t === `render` ? `true` : void 0,
    });
  return te && !b
    ? m.createElement(m.Fragment, null, se, m.createElement(Dn, { page: S }))
    : se;
});
Pn.displayName = `Link`;
var Fn = m.forwardRef(function (
  {
    "aria-current": e = `page`,
    caseSensitive: t = !1,
    className: n = ``,
    end: r = !1,
    style: i,
    to: a,
    viewTransition: o,
    children: s,
    ...c
  },
  l,
) {
  let u = wt(a, { relative: c.relative }),
    d = gt(),
    f = m.useContext($e),
    { navigator: p, basename: h } = m.useContext(at),
    g = f != null && Gn(u) && o === !0,
    _ = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
    v = d.pathname,
    y =
      f && f.navigation && f.navigation.location
        ? f.navigation.location.pathname
        : null;
  (t ||
    ((v = v.toLowerCase()),
    (y = y ? y.toLowerCase() : null),
    (_ = _.toLowerCase())),
    y && h && (y = Te(y, h) || y));
  let b = _ !== `/` && _.endsWith(`/`) ? _.length - 1 : _.length,
    x = v === _ || (!r && v.startsWith(_) && v.charAt(b) === `/`),
    S =
      y != null &&
      (y === _ || (!r && y.startsWith(_) && y.charAt(_.length) === `/`)),
    C = { isActive: x, isPending: S, isTransitioning: g },
    ee = x ? e : void 0,
    te;
  te =
    typeof n == `function`
      ? n(C)
      : [
          n,
          x ? `active` : null,
          S ? `pending` : null,
          g ? `transitioning` : null,
        ]
          .filter(Boolean)
          .join(` `);
  let ne = typeof i == `function` ? i(C) : i;
  return m.createElement(
    Pn,
    {
      ...c,
      "aria-current": ee,
      className: te,
      ref: l,
      style: ne,
      to: a,
      viewTransition: o,
    },
    typeof s == `function` ? s(C) : s,
  );
});
Fn.displayName = `NavLink`;
var In = m.forwardRef(
  (
    {
      discover: e = `render`,
      fetcherKey: t,
      navigate: n,
      reloadDocument: r,
      replace: i,
      state: a,
      method: o = Yt,
      action: s,
      onSubmit: c,
      relative: l,
      preventScrollReset: u,
      viewTransition: d,
      defaultShouldRevalidate: f,
      ...p
    },
    g,
  ) => {
    let { useTransitions: _ } = m.useContext(at),
      v = Un(),
      y = Wn(s, { relative: l }),
      b = o.toLowerCase() === `get` ? `get` : `post`,
      x = typeof s == `string` && h.test(s);
    return m.createElement(`form`, {
      ref: g,
      method: b,
      action: y,
      onSubmit: r
        ? c
        : (e) => {
            if ((c && c(e), e.defaultPrevented)) return;
            e.preventDefault();
            let r = e.nativeEvent.submitter,
              s = r?.getAttribute(`formmethod`) || o,
              p = () =>
                v(r || e.currentTarget, {
                  fetcherKey: t,
                  method: s,
                  navigate: n,
                  replace: i,
                  state: a,
                  relative: l,
                  preventScrollReset: u,
                  viewTransition: d,
                  defaultShouldRevalidate: f,
                });
            _ && n !== !1 ? m.startTransition(() => p()) : p();
          },
      ...p,
      "data-discover": !x && e === `render` ? `true` : void 0,
    });
  },
);
In.displayName = `Form`;
function Ln(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rn(e) {
  let t = m.useContext(Qe);
  return (x(t, Ln(e)), t);
}
function zn(
  e,
  {
    target: t,
    replace: n,
    mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    defaultShouldRevalidate: c,
    useTransitions: l,
  } = {},
) {
  let u = yt(),
    d = gt(),
    f = wt(e, { relative: o });
  return m.useCallback(
    (p) => {
      if (E(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? ne(d) === ne(f) : n,
          h = () =>
            u(e, {
              replace: t,
              mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              defaultShouldRevalidate: c,
            });
        l ? m.startTransition(() => h()) : h();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
function Bn(e) {
  S(
    typeof URLSearchParams < `u`,
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let t = m.useRef(nn(e)),
    n = m.useRef(!1),
    r = gt(),
    i = m.useMemo(() => rn(r.search, n.current ? null : t.current), [r.search]),
    a = yt();
  return [
    i,
    m.useCallback(
      (e, t) => {
        let r = nn(typeof e == `function` ? e(new URLSearchParams(i)) : e);
        ((n.current = !0), a(`?` + r, t));
      },
      [a, i],
    ),
  ];
}
var Vn = 0,
  Hn = () => `__${String(++Vn)}__`;
function Un() {
  let { router: e } = Rn(`useSubmit`),
    { basename: t } = m.useContext(at),
    n = Rt(),
    r = e.fetch,
    i = e.navigate;
  return m.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = ln(e, t);
      if (a.navigate === !1) {
        let e = a.fetcherKey || Hn();
        await r(e, n, a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          flushSync: a.flushSync,
        });
      } else
        await i(a.action || o, {
          defaultShouldRevalidate: a.defaultShouldRevalidate,
          preventScrollReset: a.preventScrollReset,
          formData: l,
          body: u,
          formMethod: a.method || s,
          formEncType: a.encType || c,
          replace: a.replace,
          state: a.state,
          fromRouteId: n,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [r, i, t, n],
  );
}
function Wn(e, { relative: t } = {}) {
  let { basename: n } = m.useContext(at),
    r = m.useContext(st);
  x(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...wt(e || `.`, { relative: t }) },
    o = gt();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : Ne([n, a.pathname])),
    ne(a)
  );
}
function Gn(e, { relative: t } = {}) {
  let n = m.useContext(nt);
  x(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Rn(`useViewTransitionState`),
    i = wt(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = Te(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = Te(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return xe(i.pathname, o) != null || xe(i.pathname, a) != null;
}
var Kn = class {
    constructor() {
      ((this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  qn = new (class extends Kn {
    #e;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e();
            return (
              window.addEventListener(`visibilitychange`, t, !1),
              () => {
                window.removeEventListener(`visibilitychange`, t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e),
        this.#t?.(),
        (this.#t = e((e) => {
          typeof e == `boolean` ? this.setFocused(e) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      let e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == `boolean`
        ? this.#e
        : globalThis.document?.visibilityState !== `hidden`;
    }
  })(),
  Jn = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Yn = new (class {
    #e = Jn;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  })();
function Xn(e) {
  setTimeout(e, 0);
}
var Zn = typeof window > `u` || `Deno` in globalThis;
function Qn() {}
function $n(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function er(e) {
  return typeof e == `number` && e >= 0 && e !== 1 / 0;
}
function tr(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function nr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function rr(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function ir(e, t) {
  let {
    type: n = `all`,
    exact: r,
    fetchStatus: i,
    predicate: a,
    queryKey: o,
    stale: s,
  } = e;
  if (o) {
    if (r) {
      if (t.queryHash !== or(o, t.options)) return !1;
    } else if (!cr(t.queryKey, o)) return !1;
  }
  if (n !== `all`) {
    let e = t.isActive();
    if ((n === `active` && !e) || (n === `inactive` && e)) return !1;
  }
  return !(
    (typeof s == `boolean` && t.isStale() !== s) ||
    (i && i !== t.state.fetchStatus) ||
    (a && !a(t))
  );
}
function ar(e, t) {
  let { exact: n, status: r, predicate: i, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (sr(t.options.mutationKey) !== sr(a)) return !1;
    } else if (!cr(t.options.mutationKey, a)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function or(e, t) {
  return (t?.queryKeyHashFn || sr)(e);
}
function sr(e) {
  return JSON.stringify(e, (e, t) =>
    pr(t)
      ? Object.keys(t)
          .sort()
          .reduce((e, n) => ((e[n] = t[n]), e), {})
      : t,
  );
}
function cr(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (e && t && typeof e == `object` && typeof t == `object`) {
    if (Array.isArray(e) && Array.isArray(t)) {
      for (let n = 0; n < t.length; n++) if (!cr(e[n], t[n])) return !1;
      return !0;
    }
    let n = Object.keys(t);
    for (let r of n) if (!cr(e[r], t[r])) return !1;
    return !0;
  }
  return !1;
}
var lr = Object.prototype.hasOwnProperty;
function ur(e, t, n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  let r = fr(e) && fr(t);
  if (!r && !(pr(e) && pr(t))) return t;
  let i = (r ? e : Object.keys(e)).length,
    a = r ? t : Object.keys(t),
    o = a.length,
    s = r ? Array(o) : {},
    c = 0;
  for (let l = 0; l < o; l++) {
    let o = r ? l : a[l],
      u = e[o],
      d = t[o];
    if (u === d) {
      ((s[o] = u), (r ? l < i : lr.call(e, o)) && c++);
      continue;
    }
    if (
      u === null ||
      d === null ||
      typeof u != `object` ||
      typeof d != `object`
    ) {
      s[o] = d;
      continue;
    }
    let f = ur(u, d, n + 1);
    ((s[o] = f), f === u && c++);
  }
  return i === o && c === i ? e : s;
}
function dr(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
  for (let n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function fr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function pr(e) {
  if (!mr(e)) return !1;
  let t = e.constructor;
  if (t === void 0) return !0;
  let n = t.prototype;
  return !(
    !mr(n) ||
    !n.hasOwnProperty(`isPrototypeOf`) ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function mr(e) {
  return Object.prototype.toString.call(e) === `[object Object]`;
}
function hr(e) {
  return new Promise((t) => {
    Yn.setTimeout(t, e);
  });
}
function gr(e, t, n) {
  return typeof n.structuralSharing == `function`
    ? n.structuralSharing(e, t)
    : n.structuralSharing === !1
      ? t
      : ur(e, t);
}
function _r(e, t, n = 0) {
  let r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function vr(e, t, n = 0) {
  let r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var yr = Symbol();
function br(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === yr
      ? () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function xr(e, t) {
  return typeof e == `function` ? e(...t) : !!e;
}
function Sr(e, t, n) {
  let r = !1,
    i;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (i ??= t()),
        r
          ? i
          : ((r = !0),
            i.aborted ? n() : i.addEventListener(`abort`, n, { once: !0 }),
            i)
      ),
    }),
    e
  );
}
var Cr = (() => {
  let e = () => Zn;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function wr() {
  let e,
    t,
    n = new Promise((n, r) => {
      ((e = n), (t = r));
    });
  ((n.status = `pending`), n.catch(() => {}));
  function r(e) {
    (Object.assign(n, e), delete n.resolve, delete n.reject);
  }
  return (
    (n.resolve = (t) => {
      (r({ status: `fulfilled`, value: t }), e(t));
    }),
    (n.reject = (e) => {
      (r({ status: `rejected`, reason: e }), t(e));
    }),
    n
  );
}
var Tr = Xn;
function Er() {
  let e = [],
    t = 0,
    n = (e) => {
      e();
    },
    r = (e) => {
      e();
    },
    i = Tr,
    a = (r) => {
      t
        ? e.push(r)
        : i(() => {
            n(r);
          });
    },
    o = () => {
      let t = e;
      ((e = []),
        t.length &&
          i(() => {
            r(() => {
              t.forEach((e) => {
                n(e);
              });
            });
          }));
    };
  return {
    batch: (e) => {
      let n;
      t++;
      try {
        n = e();
      } finally {
        (t--, t || o());
      }
      return n;
    },
    batchCalls:
      (e) =>
      (...t) => {
        a(() => {
          e(...t);
        });
      },
    schedule: a,
    setNotifyFunction: (e) => {
      n = e;
    },
    setBatchNotifyFunction: (e) => {
      r = e;
    },
    setScheduler: (e) => {
      i = e;
    },
  };
}
var Dr = Er(),
  Or = new (class extends Kn {
    #e = !0;
    #t;
    #n;
    constructor() {
      (super(),
        (this.#n = (e) => {
          if (typeof window < `u` && window.addEventListener) {
            let t = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener(`online`, t, !1),
              window.addEventListener(`offline`, n, !1),
              () => {
                (window.removeEventListener(`online`, t),
                  window.removeEventListener(`offline`, n));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#n);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#n = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((t) => {
          t(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  })();
function kr(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ar(e) {
  return (e ?? `online`) !== `online` || Or.isOnline();
}
var jr = class extends Error {
  constructor(e) {
    (super(`CancelledError`),
      (this.revert = e?.revert),
      (this.silent = e?.silent));
  }
};
function Mr(e) {
  let t = !1,
    n = 0,
    r,
    i = wr(),
    a = () => i.status !== `pending`,
    o = (t) => {
      if (!a()) {
        let n = new jr(t);
        (f(n), e.onCancel?.(n));
      }
    },
    s = () => {
      t = !0;
    },
    c = () => {
      t = !1;
    },
    l = () =>
      qn.isFocused() &&
      (e.networkMode === `always` || Or.isOnline()) &&
      e.canRun(),
    u = () => Ar(e.networkMode) && e.canRun(),
    d = (e) => {
      a() || (r?.(), i.resolve(e));
    },
    f = (e) => {
      a() || (r?.(), i.reject(e));
    },
    p = () =>
      new Promise((t) => {
        ((r = (e) => {
          (a() || l()) && t(e);
        }),
          e.onPause?.());
      }).then(() => {
        ((r = void 0), a() || e.onContinue?.());
      }),
    m = () => {
      if (a()) return;
      let r,
        i = n === 0 ? e.initialPromise : void 0;
      try {
        r = i ?? e.fn();
      } catch (e) {
        r = Promise.reject(e);
      }
      Promise.resolve(r)
        .then(d)
        .catch((r) => {
          if (a()) return;
          let i = e.retry ?? (Cr.isServer() ? 0 : 3),
            o = e.retryDelay ?? kr,
            s = typeof o == `function` ? o(n, r) : o,
            c =
              i === !0 ||
              (typeof i == `number` && n < i) ||
              (typeof i == `function` && i(n, r));
          if (t || !c) {
            f(r);
            return;
          }
          (n++,
            e.onFail?.(n, r),
            hr(s)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? f(r) : m();
              }));
        });
    };
  return {
    promise: i,
    status: () => i.status,
    cancel: o,
    continue: () => (r?.(), i),
    cancelRetry: s,
    continueRetry: c,
    canStart: u,
    start: () => (u() ? m() : p().then(m), i),
  };
}
var Nr = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      er(this.gcTime) &&
        (this.#e = Yn.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Cr.isServer() ? 1 / 0 : 3e5),
    );
  }
  clearGcTimeout() {
    this.#e !== void 0 && (Yn.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function Pr(e) {
  return {
    onFetch: (t, n) => {
      let r = t.options,
        i = t.fetchOptions?.meta?.fetchMore?.direction,
        a = t.state.data?.pages || [],
        o = t.state.data?.pageParams || [],
        s = { pages: [], pageParams: [] },
        c = 0,
        l = async () => {
          let n = !1,
            l = (e) => {
              Sr(
                e,
                () => t.signal,
                () => (n = !0),
              );
            },
            u = br(t.options, t.fetchOptions),
            d = async (e, r, i) => {
              if (n) return Promise.reject(t.signal.reason);
              if (r == null && e.pages.length) return Promise.resolve(e);
              let a = (() => {
                  let e = {
                    client: t.client,
                    queryKey: t.queryKey,
                    pageParam: r,
                    direction: i ? `backward` : `forward`,
                    meta: t.options.meta,
                  };
                  return (l(e), e);
                })(),
                o = await u(a),
                { maxPages: s } = t.options,
                c = i ? vr : _r;
              return {
                pages: c(e.pages, o, s),
                pageParams: c(e.pageParams, r, s),
              };
            };
          if (i && a.length) {
            let e = i === `backward`,
              t = e ? Ir : Fr,
              n = { pages: a, pageParams: o };
            s = await d(n, t(r, n), e);
          } else {
            let t = e ?? a.length;
            do {
              let e = c === 0 ? (o[0] ?? r.initialPageParam) : Fr(r, s);
              if (c > 0 && e == null) break;
              ((s = await d(s, e)), c++);
            } while (c < t);
          }
          return s;
        };
      t.fetchFn = t.options.persister
        ? () =>
            t.options.persister?.(
              l,
              {
                client: t.client,
                queryKey: t.queryKey,
                meta: t.options.meta,
                signal: t.signal,
              },
              n,
            )
        : l;
    },
  };
}
function Fr(e, { pages: t, pageParams: n }) {
  let r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Ir(e, { pages: t, pageParams: n }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, n[0], n) : void 0;
}
var Lr = class extends Nr {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  constructor(e) {
    (super(),
      (this.#s = !1),
      (this.#o = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#i = e.client),
      (this.#r = this.#i.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Br(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#a?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#o, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      let e = Br(this.options);
      e.data !== void 0 &&
        (this.setState(zr(e.data, e.dataUpdatedAt)), (this.#t = e));
    }
  }
  optionalRemove() {
    !this.observers.length &&
      this.state.fetchStatus === `idle` &&
      this.#r.remove(this);
  }
  setData(e, t) {
    let n = gr(this.state.data, e, this.options);
    return (
      this.#l({
        data: n,
        type: `success`,
        dataUpdatedAt: t?.updatedAt,
        manual: t?.manual,
      }),
      n
    );
  }
  setState(e) {
    this.#l({ type: `setState`, state: e });
  }
  cancel(e) {
    let t = this.#a?.promise;
    return (this.#a?.cancel(e), t ? t.then(Qn).catch(Qn) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => rr(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === yr || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return (
      this.getObserversCount() > 0 &&
      this.observers.some((e) => nr(e.options.staleTime, this) === `static`)
    );
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === `static`
        ? !1
        : this.state.isInvalidated
          ? !0
          : !tr(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers
      .find((e) => e.shouldFetchOnWindowFocus())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  onOnline() {
    (this.observers
      .find((e) => e.shouldFetchOnReconnect())
      ?.refetch({ cancelRefetch: !1 }),
      this.#a?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: `observerAdded`, query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#a &&
          (this.#s || this.#c()
            ? this.#a.cancel({ revert: !0 })
            : this.#a.cancelRetry()),
        this.scheduleGc()),
      this.#r.notify({ type: `observerRemoved`, query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #c() {
    return (
      this.state.fetchStatus === `paused` && this.state.status === `pending`
    );
  }
  invalidate() {
    this.state.isInvalidated || this.#l({ type: `invalidate` });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== `idle` && this.#a?.status() !== `rejected`) {
      if (this.state.data !== void 0 && t?.cancelRefetch)
        this.cancel({ silent: !0 });
      else if (this.#a) return (this.#a.continueRetry(), this.#a.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      let e = this.observers.find((e) => e.options.queryFn);
      e && this.setOptions(e.options);
    }
    let n = new AbortController(),
      r = (e) => {
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => ((this.#s = !0), n.signal),
        });
      },
      i = () => {
        let e = br(this.options, t),
          n = (() => {
            let e = {
              client: this.#i,
              queryKey: this.queryKey,
              meta: this.meta,
            };
            return (r(e), e);
          })();
        return (
          (this.#s = !1),
          this.options.persister ? this.options.persister(e, n, this) : e(n)
        );
      },
      a = (() => {
        let e = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#i,
          state: this.state,
          fetchFn: i,
        };
        return (r(e), e);
      })();
    ((this.#e === `infinite`
      ? Pr(this.options.pages)
      : this.options.behavior
    )?.onFetch(a, this),
      (this.#n = this.state),
      (this.state.fetchStatus === `idle` ||
        this.state.fetchMeta !== a.fetchOptions?.meta) &&
        this.#l({ type: `fetch`, meta: a.fetchOptions?.meta }),
      (this.#a = Mr({
        initialPromise: t?.initialPromise,
        fn: a.fetchFn,
        onCancel: (e) => {
          (e instanceof jr &&
            e.revert &&
            this.setState({ ...this.#n, fetchStatus: `idle` }),
            n.abort());
        },
        onFail: (e, t) => {
          this.#l({ type: `failed`, failureCount: e, error: t });
        },
        onPause: () => {
          this.#l({ type: `pause` });
        },
        onContinue: () => {
          this.#l({ type: `continue` });
        },
        retry: a.options.retry,
        retryDelay: a.options.retryDelay,
        networkMode: a.options.networkMode,
        canRun: () => !0,
      })));
    try {
      let e = await this.#a.start();
      if (e === void 0) throw Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(e),
        this.#r.config.onSuccess?.(e, this),
        this.#r.config.onSettled?.(e, this.state.error, this),
        e
      );
    } catch (e) {
      if (e instanceof jr) {
        if (e.silent) return this.#a.promise;
        if (e.revert) {
          if (this.state.data === void 0) throw e;
          return this.state.data;
        }
      }
      throw (
        this.#l({ type: `error`, error: e }),
        this.#r.config.onError?.(e, this),
        this.#r.config.onSettled?.(this.state.data, e, this),
        e
      );
    } finally {
      this.scheduleGc();
    }
  }
  #l(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return {
            ...t,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error,
          };
        case `pause`:
          return { ...t, fetchStatus: `paused` };
        case `continue`:
          return { ...t, fetchStatus: `fetching` };
        case `fetch`:
          return {
            ...t,
            ...Rr(t.data, this.options),
            fetchMeta: e.meta ?? null,
          };
        case `success`:
          let n = {
            ...t,
            ...zr(e.data, e.dataUpdatedAt),
            dataUpdateCount: t.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: `idle`,
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#n = e.manual ? n : void 0), n);
        case `error`:
          let r = e.error;
          return {
            ...t,
            error: r,
            errorUpdateCount: t.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: t.fetchFailureCount + 1,
            fetchFailureReason: r,
            fetchStatus: `idle`,
            status: `error`,
            isInvalidated: !0,
          };
        case `invalidate`:
          return { ...t, isInvalidated: !0 };
        case `setState`:
          return { ...t, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      Dr.batch(() => {
        (this.observers.forEach((e) => {
          e.onQueryUpdate();
        }),
          this.#r.notify({ query: this, type: `updated`, action: e }));
      }));
  }
};
function Rr(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ar(t.networkMode) ? `fetching` : `paused`,
    ...(e === void 0 && { error: null, status: `pending` }),
  };
}
function zr(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: `success`,
  };
}
function Br(e) {
  let t = typeof e.initialData == `function` ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == `function`
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? (r ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? `success` : `pending`,
    fetchStatus: `idle`,
  };
}
var Vr = class extends Nr {
  #e;
  #t;
  #n;
  #r;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#n = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || Hr()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#n.notify({ type: `observerAdded`, mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#n.notify({ type: `observerRemoved`, mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length ||
      (this.state.status === `pending`
        ? this.scheduleGc()
        : this.#n.remove(this));
  }
  continue() {
    return this.#r?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    let t = () => {
        this.#i({ type: `continue` });
      },
      n = {
        client: this.#e,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey,
      };
    this.#r = Mr({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, n)
          : Promise.reject(Error(`No mutationFn found`)),
      onFail: (e, t) => {
        this.#i({ type: `failed`, failureCount: e, error: t });
      },
      onPause: () => {
        this.#i({ type: `pause` });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this),
    });
    let r = this.state.status === `pending`,
      i = !this.#r.canStart();
    try {
      if (r) t();
      else {
        (this.#i({ type: `pending`, variables: e, isPaused: i }),
          this.#n.config.onMutate &&
            (await this.#n.config.onMutate(e, this, n)));
        let t = await this.options.onMutate?.(e, n);
        t !== this.state.context &&
          this.#i({ type: `pending`, context: t, variables: e, isPaused: i });
      }
      let a = await this.#r.start();
      return (
        await this.#n.config.onSuccess?.(a, e, this.state.context, this, n),
        await this.options.onSuccess?.(a, e, this.state.context, n),
        await this.#n.config.onSettled?.(
          a,
          null,
          this.state.variables,
          this.state.context,
          this,
          n,
        ),
        await this.options.onSettled?.(a, null, e, this.state.context, n),
        this.#i({ type: `success`, data: a }),
        a
      );
    } catch (t) {
      try {
        await this.#n.config.onError?.(t, e, this.state.context, this, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onError?.(t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.#n.config.onSettled?.(
          void 0,
          t,
          this.state.variables,
          this.state.context,
          this,
          n,
        );
      } catch (e) {
        Promise.reject(e);
      }
      try {
        await this.options.onSettled?.(void 0, t, e, this.state.context, n);
      } catch (e) {
        Promise.reject(e);
      }
      throw (this.#i({ type: `error`, error: t }), t);
    } finally {
      this.#n.runNext(this);
    }
  }
  #i(e) {
    let t = (t) => {
      switch (e.type) {
        case `failed`:
          return { ...t, failureCount: e.failureCount, failureReason: e.error };
        case `pause`:
          return { ...t, isPaused: !0 };
        case `continue`:
          return { ...t, isPaused: !1 };
        case `pending`:
          return {
            ...t,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: `pending`,
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case `success`:
          return {
            ...t,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: `success`,
            isPaused: !1,
          };
        case `error`:
          return {
            ...t,
            data: void 0,
            error: e.error,
            failureCount: t.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: `error`,
          };
      }
    };
    ((this.state = t(this.state)),
      Dr.batch(() => {
        (this.#t.forEach((t) => {
          t.onMutationUpdate(e);
        }),
          this.#n.notify({ mutation: this, type: `updated`, action: e }));
      }));
  }
};
function Hr() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: `idle`,
    variables: void 0,
    submittedAt: 0,
  };
}
var Ur = class extends Kn {
  constructor(e = {}) {
    (super(),
      (this.config = e),
      (this.#e = new Set()),
      (this.#t = new Map()),
      (this.#n = 0));
  }
  #e;
  #t;
  #n;
  build(e, t, n) {
    let r = new Vr({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(t),
      state: n,
    });
    return (this.add(r), r);
  }
  add(e) {
    this.#e.add(e);
    let t = Wr(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t);
      n ? n.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: `added`, mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      let t = Wr(e);
      if (typeof t == `string`) {
        let n = this.#t.get(t);
        if (n) {
          if (n.length > 1) {
            let t = n.indexOf(e);
            t !== -1 && n.splice(t, 1);
          } else n[0] === e && this.#t.delete(t);
        }
      }
    }
    this.notify({ type: `removed`, mutation: e });
  }
  canRun(e) {
    let t = Wr(e);
    if (typeof t == `string`) {
      let n = this.#t.get(t)?.find((e) => e.state.status === `pending`);
      return !n || n === e;
    }
    return !0;
  }
  runNext(e) {
    let t = Wr(e);
    return typeof t == `string`
      ? (this.#t
          .get(t)
          ?.find((t) => t !== e && t.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    Dr.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: `removed`, mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    let t = { exact: !0, ...e };
    return this.getAll().find((e) => ar(t, e));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => ar(e, t));
  }
  notify(e) {
    Dr.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    let e = this.getAll().filter((e) => e.state.isPaused);
    return Dr.batch(() => Promise.all(e.map((e) => e.continue().catch(Qn))));
  }
};
function Wr(e) {
  return e.options.scope?.id;
}
var Gr = class extends Kn {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, n) {
      let r = t.queryKey,
        i = t.queryHash ?? or(r, t),
        a = this.get(i);
      return (
        a ||
          ((a = new Lr({
            client: e,
            queryKey: r,
            queryHash: i,
            options: e.defaultQueryOptions(t),
            state: n,
            defaultOptions: e.getQueryDefaults(r),
          })),
          this.add(a)),
        a
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: `added`, query: e }));
    }
    remove(e) {
      let t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: `removed`, query: e }));
    }
    clear() {
      Dr.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      let t = { exact: !0, ...e };
      return this.getAll().find((e) => ir(t, e));
    }
    findAll(e = {}) {
      let t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((t) => ir(e, t)) : t;
    }
    notify(e) {
      Dr.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      Dr.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      Dr.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  Kr = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new Gr()),
        (this.#t = e.mutationCache || new Ur()),
        (this.#n = e.defaultOptions || {}),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#a = 0));
    }
    mount() {
      (this.#a++,
        this.#a === 1 &&
          ((this.#o = qn.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#s = Or.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#a--,
        this.#a === 0 &&
          (this.#o?.(), (this.#o = void 0), this.#s?.(), (this.#s = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: `fetching` }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: `pending` }).length;
    }
    getQueryData(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      let t = this.defaultQueryOptions(e),
        n = this.#e.build(this, t),
        r = n.state.data;
      return r === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale &&
            n.isStaleByTime(nr(t.staleTime, n)) &&
            this.prefetchQuery(t),
          Promise.resolve(r));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
    }
    setQueryData(e, t, n) {
      let r = this.defaultQueryOptions({ queryKey: e }),
        i = this.#e.get(r.queryHash)?.state.data,
        a = $n(t, i);
      if (a !== void 0)
        return this.#e.build(this, r).setData(a, { ...n, manual: !0 });
    }
    setQueriesData(e, t, n) {
      return Dr.batch(() =>
        this.#e
          .findAll(e)
          .map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]),
      );
    }
    getQueryState(e) {
      let t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      let t = this.#e;
      Dr.batch(() => {
        t.findAll(e).forEach((e) => {
          t.remove(e);
        });
      });
    }
    resetQueries(e, t) {
      let n = this.#e;
      return Dr.batch(
        () => (
          n.findAll(e).forEach((e) => {
            e.reset();
          }),
          this.refetchQueries({ type: `active`, ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      let n = { revert: !0, ...t },
        r = Dr.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
      return Promise.all(r).then(Qn).catch(Qn);
    }
    invalidateQueries(e, t = {}) {
      return Dr.batch(
        () => (
          this.#e.findAll(e).forEach((e) => {
            e.invalidate();
          }),
          e?.refetchType === `none`
            ? Promise.resolve()
            : this.refetchQueries(
                { ...e, type: e?.refetchType ?? e?.type ?? `active` },
                t,
              )
        ),
      );
    }
    refetchQueries(e, t = {}) {
      let n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        r = Dr.batch(() =>
          this.#e
            .findAll(e)
            .filter((e) => !e.isDisabled() && !e.isStatic())
            .map((e) => {
              let t = e.fetch(void 0, n);
              return (
                n.throwOnError || (t = t.catch(Qn)),
                e.state.fetchStatus === `paused` ? Promise.resolve() : t
              );
            }),
        );
      return Promise.all(r).then(Qn);
    }
    fetchQuery(e) {
      let t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      let n = this.#e.build(this, t);
      return n.isStaleByTime(nr(t.staleTime, n))
        ? n.fetch(t)
        : Promise.resolve(n.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Qn).catch(Qn);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = `infinite`), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Qn).catch(Qn);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = `infinite`), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return Or.isOnline()
        ? this.#t.resumePausedMutations()
        : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#n;
    }
    setDefaultOptions(e) {
      this.#n = e;
    }
    setQueryDefaults(e, t) {
      this.#r.set(sr(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      let t = [...this.#r.values()],
        n = {};
      return (
        t.forEach((t) => {
          cr(e, t.queryKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    setMutationDefaults(e, t) {
      this.#i.set(sr(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      let t = [...this.#i.values()],
        n = {};
      return (
        t.forEach((t) => {
          cr(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
        }),
        n
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      let t = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0,
      };
      return (
        (t.queryHash ||= or(t.queryKey, t)),
        t.refetchOnReconnect === void 0 &&
          (t.refetchOnReconnect = t.networkMode !== `always`),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = `offlineFirst`),
        t.queryFn === yr && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#n.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  D = i(),
  qr = m.createContext(void 0),
  Jr = (e) => {
    let t = m.useContext(qr);
    if (e) return e;
    if (!t)
      throw Error(`No QueryClient set, use QueryClientProvider to set one`);
    return t;
  },
  Yr = ({ client: e, children: t }) => (
    m.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    (0, D.jsx)(qr.Provider, { value: e, children: t })
  ),
  Xr = r(p(), 1),
  Zr = { data: `` },
  Qr = (e) => {
    if (typeof window == `object`) {
      let t =
        (e ? e.querySelector(`#_goober`) : window._goober) ||
        Object.assign(document.createElement(`style`), {
          innerHTML: ` `,
          id: `_goober`,
        });
      return (
        (t.nonce = window.__nonce__),
        t.parentNode || (e || document.head).appendChild(t),
        t.firstChild
      );
    }
    return e || Zr;
  },
  $r = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  ei = /\/\*[^]*?\*\/|  +/g,
  ti = /\n+/g,
  ni = (e, t) => {
    let n = ``,
      r = ``,
      i = ``;
    for (let a in e) {
      let o = e[a];
      a[0] == `@`
        ? a[1] == `i`
          ? (n = a + ` ` + o + `;`)
          : (r +=
              a[1] == `f`
                ? ni(o, a)
                : a + `{` + ni(o, a[1] == `k` ? `` : t) + `}`)
        : typeof o == `object`
          ? (r += ni(
              o,
              t
                ? t.replace(/([^,])+/g, (e) =>
                    a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) =>
                      /&/.test(t) ? t.replace(/&/g, e) : e ? e + ` ` + t : t,
                    ),
                  )
                : a,
            ))
          : o != null &&
            ((a = a[1] == `-` ? a : a.replace(/[A-Z]/g, `-$&`).toLowerCase()),
            (i += ni.p ? ni.p(a, o) : a + `:` + o + `;`));
    }
    return n + (t && i ? t + `{` + i + `}` : i) + r;
  },
  ri = {},
  ii = (e) => {
    if (typeof e == `object`) {
      let t = ``;
      for (let n in e) t += n + ii(e[n]);
      return t;
    }
    return e;
  },
  ai = (e, t, n, r, i) => {
    let a = ii(e),
      o =
        ri[a] ||
        (ri[a] = ((e) => {
          let t = 0,
            n = 11;
          for (; t < e.length;) n = (101 * n + e.charCodeAt(t++)) >>> 0;
          return `go` + n;
        })(a));
    if (!ri[o]) {
      let t =
        a === e
          ? ((e) => {
              let t,
                n,
                r = [{}];
              for (; (t = $r.exec(e.replace(ei, ``)));)
                t[4]
                  ? r.shift()
                  : t[3]
                    ? ((n = t[3].replace(ti, ` `).trim()),
                      r.unshift((r[0][n] = r[0][n] || {})))
                    : (r[0][t[1]] = t[2].replace(ti, ` `).trim());
              return r[0];
            })(e)
          : e;
      ri[o] = ni(i ? { [`@keyframes ` + o]: t } : t, n ? `` : `.` + o);
    }
    let s = n && ri.g;
    return (
      n && (ri.g = ri[o]),
      ((e, t, n, r) => {
        r
          ? (t.data = t.data.replace(r, e))
          : t.data.indexOf(e) === -1 && (t.data = n ? e + t.data : t.data + e);
      })(ri[o], t, r, s),
      o
    );
  },
  oi = (e, t, n) =>
    e.reduce((e, r, i) => {
      let a = t[i];
      if (a && a.call) {
        let e = a(n),
          t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
        a = t
          ? `.` + t
          : e && typeof e == `object`
            ? e.props
              ? ``
              : ni(e, ``)
            : !1 === e
              ? ``
              : e;
      }
      return e + r + (a ?? ``);
    }, ``);
function si(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return ai(
    n.unshift
      ? n.raw
        ? oi(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((e, n) => Object.assign(e, n && n.call ? n(t.p) : n), {})
      : n,
    Qr(t.target),
    t.g,
    t.o,
    t.k,
  );
}
var ci, li, ui;
si.bind({ g: 1 });
var di = si.bind({ k: 1 });
function fi(e, t, n, r) {
  ((ni.p = t), (ci = e), (li = n), (ui = r));
}
function pi(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(a, o) {
      let s = Object.assign({}, a),
        c = s.className || i.className;
      ((n.p = Object.assign({ theme: li && li() }, s)),
        (n.o = /go\d/.test(c)),
        (s.className = si.apply(n, r) + (c ? ` ` + c : ``)),
        t && (s.ref = o));
      let l = e;
      return (
        e[0] && ((l = s.as || e), delete s.as),
        ui && l[0] && ui(s),
        ci(l, s)
      );
    }
    return t ? t(i) : i;
  };
}
var mi = (e) => typeof e == `function`,
  hi = (e, t) => (mi(e) ? e(t) : e),
  gi = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  _i = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < `u`) {
        let t = matchMedia(`(prefers-reduced-motion: reduce)`);
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  vi = 20,
  yi = `default`,
  bi = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === t.toast.id ? { ...e, ...t.toast } : e,
          ),
        };
      case 2:
        let { toast: r } = t;
        return bi(e, {
          type: +!!e.toasts.find((e) => e.id === r.id),
          toast: r,
        });
      case 3:
        let { toastId: i } = t;
        return {
          ...e,
          toasts: e.toasts.map((e) =>
            e.id === i || i === void 0
              ? { ...e, dismissed: !0, visible: !1 }
              : e,
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let a = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((e) => ({
            ...e,
            pauseDuration: e.pauseDuration + a,
          })),
        };
    }
  },
  O = [],
  xi = { toasts: [], pausedAt: void 0, settings: { toastLimit: vi } },
  Si = {},
  Ci = (e, t = yi) => {
    ((Si[t] = bi(Si[t] || xi, e)),
      O.forEach(([e, n]) => {
        e === t && n(Si[t]);
      }));
  },
  wi = (e) => Object.keys(Si).forEach((t) => Ci(e, t)),
  Ti = (e) => Object.keys(Si).find((t) => Si[t].toasts.some((t) => t.id === e)),
  Ei =
    (e = yi) =>
    (t) => {
      Ci(t, e);
    },
  Di = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Oi = (e = {}, t = yi) => {
    let [n, r] = (0, m.useState)(Si[t] || xi),
      i = (0, m.useRef)(Si[t]);
    (0, m.useEffect)(
      () => (
        i.current !== Si[t] && r(Si[t]),
        O.push([t, r]),
        () => {
          let e = O.findIndex(([e]) => e === t);
          e > -1 && O.splice(e, 1);
        }
      ),
      [t],
    );
    let a = n.toasts.map((t) => ({
      ...e,
      ...e[t.type],
      ...t,
      removeDelay: t.removeDelay || e[t.type]?.removeDelay || e?.removeDelay,
      duration: t.duration || e[t.type]?.duration || e?.duration || Di[t.type],
      style: { ...e.style, ...e[t.type]?.style, ...t.style },
    }));
    return { ...n, toasts: a };
  },
  ki = (e, t = `blank`, n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: `status`, "aria-live": `polite` },
    message: e,
    pauseDuration: 0,
    ...n,
    id: n?.id || gi(),
  }),
  Ai = (e) => (t, n) => {
    let r = ki(t, e, n);
    return (Ei(r.toasterId || Ti(r.id))({ type: 2, toast: r }), r.id);
  },
  k = (e, t) => Ai(`blank`)(e, t);
((k.error = Ai(`error`)),
  (k.success = Ai(`success`)),
  (k.loading = Ai(`loading`)),
  (k.custom = Ai(`custom`)),
  (k.dismiss = (e, t) => {
    let n = { type: 3, toastId: e };
    t ? Ei(t)(n) : wi(n);
  }),
  (k.dismissAll = (e) => k.dismiss(void 0, e)),
  (k.remove = (e, t) => {
    let n = { type: 4, toastId: e };
    t ? Ei(t)(n) : wi(n);
  }),
  (k.removeAll = (e) => k.remove(void 0, e)),
  (k.promise = (e, t, n) => {
    let r = k.loading(t.loading, { ...n, ...n?.loading });
    return (
      typeof e == `function` && (e = e()),
      e
        .then((e) => {
          let i = t.success ? hi(t.success, e) : void 0;
          return (
            i ? k.success(i, { id: r, ...n, ...n?.success }) : k.dismiss(r),
            e
          );
        })
        .catch((e) => {
          let i = t.error ? hi(t.error, e) : void 0;
          i ? k.error(i, { id: r, ...n, ...n?.error }) : k.dismiss(r);
        }),
      e
    );
  }));
var ji = 1e3,
  Mi = (e, t = `default`) => {
    let { toasts: n, pausedAt: r } = Oi(e, t),
      i = (0, m.useRef)(new Map()).current,
      a = (0, m.useCallback)((e, t = ji) => {
        if (i.has(e)) return;
        let n = setTimeout(() => {
          (i.delete(e), o({ type: 4, toastId: e }));
        }, t);
        i.set(e, n);
      }, []);
    (0, m.useEffect)(() => {
      if (r) return;
      let e = Date.now(),
        i = n.map((n) => {
          if (n.duration === 1 / 0) return;
          let r = (n.duration || 0) + n.pauseDuration - (e - n.createdAt);
          if (r < 0) {
            n.visible && k.dismiss(n.id);
            return;
          }
          return setTimeout(() => k.dismiss(n.id, t), r);
        });
      return () => {
        i.forEach((e) => e && clearTimeout(e));
      };
    }, [n, r, t]);
    let o = (0, m.useCallback)(Ei(t), [t]),
      s = (0, m.useCallback)(() => {
        o({ type: 5, time: Date.now() });
      }, [o]),
      c = (0, m.useCallback)(
        (e, t) => {
          o({ type: 1, toast: { id: e, height: t } });
        },
        [o],
      ),
      l = (0, m.useCallback)(() => {
        r && o({ type: 6, time: Date.now() });
      }, [r, o]),
      u = (0, m.useCallback)(
        (e, t) => {
          let {
              reverseOrder: r = !1,
              gutter: i = 8,
              defaultPosition: a,
            } = t || {},
            o = n.filter(
              (t) => (t.position || a) === (e.position || a) && t.height,
            ),
            s = o.findIndex((t) => t.id === e.id),
            c = o.filter((e, t) => t < s && e.visible).length;
          return o
            .filter((e) => e.visible)
            .slice(...(r ? [c + 1] : [0, c]))
            .reduce((e, t) => e + (t.height || 0) + i, 0);
        },
        [n],
      );
    return (
      (0, m.useEffect)(() => {
        n.forEach((e) => {
          if (e.dismissed) a(e.id, e.removeDelay);
          else {
            let t = i.get(e.id);
            t && (clearTimeout(t), i.delete(e.id));
          }
        });
      }, [n, a]),
      {
        toasts: n,
        handlers: {
          updateHeight: c,
          startPause: s,
          endPause: l,
          calculateOffset: u,
        },
      }
    );
  },
  Ni = di`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Pi = di`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Fi = di`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  Ii = pi(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || `#ff4b4b`};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ni} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Pi} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || `#fff`};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Fi} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Li = di`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Ri = pi(`div`)`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || `#e0e0e0`};
  border-right-color: ${(e) => e.primary || `#616161`};
  animation: ${Li} 1s linear infinite;
`,
  zi = di`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Bi = di`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Vi = pi(`div`)`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || `#61d345`};
  position: relative;
  transform: rotate(45deg);

  animation: ${zi} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Bi} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || `#fff`};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  Hi = pi(`div`)`
  position: absolute;
`,
  Ui = pi(`div`)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  Wi = di`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Gi = pi(`div`)`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Wi} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  Ki = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t === void 0
      ? n === `blank`
        ? null
        : m.createElement(
            Ui,
            null,
            m.createElement(Ri, { ...r }),
            n !== `loading` &&
              m.createElement(
                Hi,
                null,
                n === `error`
                  ? m.createElement(Ii, { ...r })
                  : m.createElement(Vi, { ...r }),
              ),
          )
      : typeof t == `string`
        ? m.createElement(Gi, null, t)
        : t;
  },
  qi = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  Ji = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  Yi = `0%{opacity:0;} 100%{opacity:1;}`,
  Xi = `0%{opacity:1;} 100%{opacity:0;}`,
  Zi = pi(`div`)`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  Qi = pi(`div`)`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  $i = (e, t) => {
    let n = e.includes(`top`) ? 1 : -1,
      [r, i] = _i() ? [Yi, Xi] : [qi(n), Ji(n)];
    return {
      animation: t
        ? `${di(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${di(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  ea = m.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? $i(e.position || t || `top-center`, e.visible)
        : { opacity: 0 },
      a = m.createElement(Ki, { toast: e }),
      o = m.createElement(Qi, { ...e.ariaProps }, hi(e.message, e));
    return m.createElement(
      Zi,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == `function`
        ? r({ icon: a, message: o })
        : m.createElement(m.Fragment, null, a, o),
    );
  });
fi(m.createElement);
var ta = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let a = m.useCallback(
      (t) => {
        if (t) {
          let n = () => {
            let n = t.getBoundingClientRect().height;
            r(e, n);
          };
          (n(),
            new MutationObserver(n).observe(t, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [e, r],
    );
    return m.createElement(`div`, { ref: a, className: t, style: n }, i);
  },
  na = (e, t) => {
    let n = e.includes(`top`),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes(`center`)
        ? { justifyContent: `center` }
        : e.includes(`right`)
          ? { justifyContent: `flex-end` }
          : {};
    return {
      left: 0,
      right: 0,
      display: `flex`,
      position: `absolute`,
      transition: _i() ? void 0 : `all 230ms cubic-bezier(.21,1.02,.73,1)`,
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  ra = si`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  ia = 16,
  A = ({
    reverseOrder: e,
    position: t = `top-center`,
    toastOptions: n,
    gutter: r,
    children: i,
    toasterId: a,
    containerStyle: o,
    containerClassName: s,
  }) => {
    let { toasts: c, handlers: l } = Mi(n, a);
    return m.createElement(
      `div`,
      {
        "data-rht-toaster": a || ``,
        style: {
          position: `fixed`,
          zIndex: 9999,
          top: ia,
          left: ia,
          right: ia,
          bottom: ia,
          pointerEvents: `none`,
          ...o,
        },
        className: s,
        onMouseEnter: l.startPause,
        onMouseLeave: l.endPause,
      },
      c.map((n) => {
        let a = n.position || t,
          o = na(
            a,
            l.calculateOffset(n, {
              reverseOrder: e,
              gutter: r,
              defaultPosition: t,
            }),
          );
        return m.createElement(
          ta,
          {
            id: n.id,
            key: n.id,
            onHeightUpdate: l.updateHeight,
            className: n.visible ? ra : ``,
            style: o,
          },
          n.type === `custom`
            ? hi(n.message, n)
            : i
              ? i(n)
              : m.createElement(ea, { toast: n, position: a }),
        );
      }),
    );
  },
  j = k,
  aa = c(
    `https://gaflirrelweuphsivmyp.supabase.co`,
    `sb_publishable_n4x_dK4GtcW84wYOul4vww_Eo1A_Ci2`,
    {
      auth: {
        persistSession: !0,
        autoRefreshToken: !0,
        detectSessionInUrl: !0,
      },
    },
  ),
  oa = (0, m.createContext)(null);
function sa({ children: e }) {
  let [t, n] = (0, m.useState)(null),
    [r, i] = (0, m.useState)(null),
    [a, o] = (0, m.useState)(!0),
    s = (0, m.useRef)(null),
    c = (0, m.useRef)(new Map()),
    l = (0, m.useCallback)(() => {
      (n(null), i(null));
    }, []),
    u = (0, m.useCallback)(
      (e) => {
        let t = e.access_token;
        s.current = t;
        let r = c.current.get(t);
        if (r) return r;
        let a = (async () => {
          let { data: r, error: a } = await aa.rpc(`admin_me`);
          if (s.current !== t) return !1;
          if (a || !r) {
            ((s.current = null), l());
            try {
              await aa.auth.signOut();
            } catch (e) {
              console.error(`Yetkisiz oturum kapatılamadı.`, e);
            }
            return !1;
          }
          return (n(e), i(r), !0);
        })().finally(() => {
          c.current.delete(t);
        });
        return (c.current.set(t, a), a);
      },
      [l],
    );
  (0, m.useEffect)(() => {
    let e = !1,
      t = async (t) => {
        if (e) return;
        if (!t) {
          ((s.current = null), l(), o(!1));
          return;
        }
        let n = t.access_token;
        ((s.current = n),
          o(!0),
          await u(t),
          !e && (s.current === n || s.current === null) && o(!1));
      };
    aa.auth.getSession().then(({ data: n, error: r }) => {
      if (!e) {
        if (r) {
          ((s.current = null), l(), o(!1));
          return;
        }
        t(n.session);
      }
    });
    let { data: n } = aa.auth.onAuthStateChange((e, n) => {
      setTimeout(() => {
        t(n);
      }, 0);
    });
    return () => {
      ((e = !0), n.subscription.unsubscribe());
    };
  }, [l, u]);
  let d = (0, m.useCallback)(
      async (e, t) => {
        o(!0);
        try {
          let { data: n, error: r } = await aa.auth.signInWithPassword({
            email: e,
            password: t,
          });
          if (r) throw r;
          if (!n.session) throw Error(`Oturum oluşturulamadı.`);
          if (!(await u(n.session)))
            throw Error(`Bu hesabın yönetim paneline erişim yetkisi yok.`);
        } finally {
          o(!1);
        }
      },
      [u],
    ),
    f = (0, m.useCallback)(async () => {
      ((s.current = null), l(), await aa.auth.signOut());
    }, [l]);
  return (0, D.jsx)(oa.Provider, {
    value: {
      session: t,
      isAdmin: r !== null,
      isLoading: a,
      signIn: d,
      signOut: f,
    },
    children: e,
  });
}
function ca() {
  let e = (0, m.useContext)(oa);
  if (!e) throw Error(`useAuth must be used within AuthProvider`);
  return e;
}
var la = (0, m.createContext)({});
function ua(e) {
  let t = (0, m.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var da = (0, m.createContext)(null),
  fa = (0, m.createContext)({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: `never`,
  }),
  pa = class extends m.Component {
    getSnapshotBeforeUpdate(e) {
      let t = this.props.childRef.current;
      if (t && e.isPresent && !this.props.isPresent) {
        let e = this.props.sizeRef.current;
        ((e.height = t.offsetHeight || 0),
          (e.width = t.offsetWidth || 0),
          (e.top = t.offsetTop),
          (e.left = t.offsetLeft));
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  };
function ma({ children: e, isPresent: t }) {
  let n = (0, m.useId)(),
    r = (0, m.useRef)(null),
    i = (0, m.useRef)({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: a } = (0, m.useContext)(fa);
  return (
    (0, m.useInsertionEffect)(() => {
      let { width: e, height: o, top: s, left: c } = i.current;
      if (t || !r.current || !e || !o) return;
      r.current.dataset.motionPopId = n;
      let l = document.createElement(`style`);
      return (
        a && (l.nonce = a),
        document.head.appendChild(l),
        l.sheet &&
          l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${o}px !important;
            top: ${s}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(l);
        }
      );
    }, [t]),
    (0, D.jsx)(pa, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: m.cloneElement(e, { ref: r }),
    })
  );
}
var ha = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
}) => {
  let s = ua(ga),
    c = (0, m.useId)(),
    l = (0, m.useCallback)(
      (e) => {
        s.set(e, !0);
        for (let e of s.values()) if (!e) return;
        r && r();
      },
      [s, r],
    ),
    u = (0, m.useMemo)(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: l,
        register: (e) => (s.set(e, !1), () => s.delete(e)),
      }),
      a ? [Math.random(), l] : [n, l],
    );
  return (
    (0, m.useMemo)(() => {
      s.forEach((e, t) => s.set(t, !1));
    }, [n]),
    m.useEffect(() => {
      !n && !s.size && r && r();
    }, [n]),
    o === `popLayout` && (e = (0, D.jsx)(ma, { isPresent: n, children: e })),
    (0, D.jsx)(da.Provider, { value: u, children: e })
  );
};
function ga() {
  return new Map();
}
function _a(e = !0) {
  let t = (0, m.useContext)(da);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, m.useId)();
  (0, m.useEffect)(() => {
    e && i(a);
  }, [e]);
  let o = (0, m.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var va = (e) => e.key || ``;
function ya(e) {
  let t = [];
  return (
    m.Children.forEach(e, (e) => {
      (0, m.isValidElement)(e) && t.push(e);
    }),
    t
  );
}
var ba = typeof window < `u`,
  xa = ba ? m.useLayoutEffect : m.useEffect,
  Sa = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: a = `sync`,
    propagate: o = !1,
  }) => {
    let [s, c] = _a(o),
      l = (0, m.useMemo)(() => ya(e), [e]),
      u = o && !s ? [] : l.map(va),
      d = (0, m.useRef)(!0),
      f = (0, m.useRef)(l),
      p = ua(() => new Map()),
      [h, g] = (0, m.useState)(l),
      [_, v] = (0, m.useState)(l);
    xa(() => {
      ((d.current = !1), (f.current = l));
      for (let e = 0; e < _.length; e++) {
        let t = va(_[e]);
        u.includes(t) ? p.delete(t) : p.get(t) !== !0 && p.set(t, !1);
      }
    }, [_, u.length, u.join(`-`)]);
    let y = [];
    if (l !== h) {
      let e = [...l];
      for (let t = 0; t < _.length; t++) {
        let n = _[t],
          r = va(n);
        u.includes(r) || (e.splice(t, 0, n), y.push(n));
      }
      (a === `wait` && y.length && (e = y), v(ya(e)), g(l));
      return;
    }
    let { forceRender: b } = (0, m.useContext)(la);
    return (0, D.jsx)(D.Fragment, {
      children: _.map((e) => {
        let m = va(e),
          h = o && !s ? !1 : l === _ || u.includes(m);
        return (0, D.jsx)(
          ha,
          {
            isPresent: h,
            initial: !d.current || n ? void 0 : !1,
            custom: h ? void 0 : t,
            presenceAffectsLayout: i,
            mode: a,
            onExitComplete: h
              ? void 0
              : () => {
                  if (p.has(m)) p.set(m, !0);
                  else return;
                  let e = !0;
                  (p.forEach((t) => {
                    t || (e = !1);
                  }),
                    e && (b?.(), v(f.current), o && c?.(), r && r()));
                },
            children: e,
          },
          m,
        );
      }),
    });
  },
  M = (e) => e,
  Ca = M,
  wa = M;
function Ta(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Ea = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Da = (e) => e * 1e3,
  Oa = (e) => e / 1e3,
  ka = { skipAnimations: !1, useManualTiming: !1 };
function Aa(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1,
    a = new WeakSet(),
    o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function s(t) {
    (a.has(t) && (c.schedule(t), e()), t(o));
  }
  let c = {
    schedule: (e, i = !1, o = !1) => {
      let s = o && r ? t : n;
      return (i && a.add(e), s.has(e) || s.add(e), e);
    },
    cancel: (e) => {
      (n.delete(e), a.delete(e));
    },
    process: (e) => {
      if (((o = e), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(s),
        t.clear(),
        (r = !1),
        i && ((i = !1), c.process(e)));
    },
  };
  return c;
}
var ja = [
    `read`,
    `resolveKeyframes`,
    `update`,
    `preRender`,
    `render`,
    `postRender`,
  ],
  Ma = 40;
function Na(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    a = () => (n = !0),
    o = ja.reduce((e, t) => ((e[t] = Aa(a)), e), {}),
    {
      read: s,
      resolveKeyframes: c,
      update: l,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    p = () => {
      let a = ka.useManualTiming ? i.timestamp : performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Ma), 1)),
        (i.timestamp = a),
        (i.isProcessing = !0),
        s.process(i),
        c.process(i),
        l.process(i),
        u.process(i),
        d.process(i),
        f.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(p)));
    },
    m = () => {
      ((n = !0), (r = !0), i.isProcessing || e(p));
    };
  return {
    schedule: ja.reduce((e, t) => {
      let r = o[t];
      return (
        (e[t] = (e, t = !1, i = !1) => (n || m(), r.schedule(e, t, i))),
        e
      );
    }, {}),
    cancel: (e) => {
      for (let t = 0; t < ja.length; t++) o[ja[t]].cancel(e);
    },
    state: i,
    steps: o,
  };
}
var {
    schedule: N,
    cancel: P,
    state: F,
    steps: Pa,
  } = Na(typeof requestAnimationFrame < `u` ? requestAnimationFrame : M, !0),
  Fa = (0, m.createContext)({ strict: !1 }),
  Ia = {
    animation: [
      `animate`,
      `variants`,
      `whileHover`,
      `whileTap`,
      `exit`,
      `whileInView`,
      `whileFocus`,
      `whileDrag`,
    ],
    exit: [`exit`],
    drag: [`drag`, `dragControls`],
    focus: [`whileFocus`],
    hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
    tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
    pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
    inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
    layout: [`layout`, `layoutId`],
  },
  La = {};
for (let e in Ia) La[e] = { isEnabled: (t) => Ia[e].some((e) => !!t[e]) };
function Ra(e) {
  for (let t in e) La[t] = { ...La[t], ...e[t] };
}
var za = new Set(
  `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
    `.`,
  ),
);
function Ba(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    za.has(e)
  );
}
var Va = s({ default: () => Ha }),
  Ha,
  Ua = a(() => {
    throw (
      (Ha = {}),
      Error(
        `Could not resolve "@emotion/is-prop-valid" imported by "framer-motion". Is it installed?`,
      )
    );
  }),
  Wa = (e) => !Ba(e);
function Ga(e) {
  e && (Wa = (t) => (t.startsWith(`on`) ? !Ba(t) : e(t)));
}
try {
  Ga((Ua(), t(Va)).default);
} catch {}
function Ka(e, t, n) {
  let r = {};
  for (let i in e)
    (i !== `values` || typeof e.values != `object`) &&
      (Wa(i) ||
        (n === !0 && Ba(i)) ||
        (!t && !Ba(i)) ||
        (e.draggable && i.startsWith(`onDrag`))) &&
      (r[i] = e[i]);
  return r;
}
function qa(e) {
  if (typeof Proxy > `u`) return e;
  let t = new Map();
  return new Proxy((...t) => e(...t), {
    get: (n, r) =>
      r === `create` ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
  });
}
var Ja = (0, m.createContext)({});
function Ya(e) {
  return typeof e == `string` || Array.isArray(e);
}
function Xa(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
var Za = [
    `animate`,
    `whileInView`,
    `whileFocus`,
    `whileHover`,
    `whileTap`,
    `whileDrag`,
    `exit`,
  ],
  Qa = [`initial`, ...Za];
function $a(e) {
  return Xa(e.animate) || Qa.some((t) => Ya(e[t]));
}
function eo(e) {
  return !!($a(e) || e.variants);
}
function to(e, t) {
  if ($a(e)) {
    let { initial: t, animate: n } = e;
    return {
      initial: t === !1 || Ya(t) ? t : void 0,
      animate: Ya(n) ? n : void 0,
    };
  }
  return e.inherit === !1 ? {} : t;
}
function no(e) {
  let { initial: t, animate: n } = to(e, (0, m.useContext)(Ja));
  return (0, m.useMemo)(() => ({ initial: t, animate: n }), [ro(t), ro(n)]);
}
function ro(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var io = Symbol.for(`motionComponentSymbol`);
function ao(e) {
  return (
    e &&
    typeof e == `object` &&
    Object.prototype.hasOwnProperty.call(e, `current`)
  );
}
function oo(e, t, n) {
  return (0, m.useCallback)(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == `function` ? n(r) : ao(n) && (n.current = r)));
    },
    [t],
  );
}
var so = (e) => e.replace(/([a-z])([A-Z])/gu, `$1-$2`).toLowerCase(),
  co = `data-` + so(`framerAppearId`),
  { schedule: lo, cancel: uo } = Na(queueMicrotask, !1),
  fo = (0, m.createContext)({});
function po(e, t, n, r, i) {
  let { visualElement: a } = (0, m.useContext)(Ja),
    o = (0, m.useContext)(Fa),
    s = (0, m.useContext)(da),
    c = (0, m.useContext)(fa).reducedMotion,
    l = (0, m.useRef)(null);
  ((r ||= o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  let u = l.current,
    d = (0, m.useContext)(fo);
  u &&
    !u.projection &&
    i &&
    (u.type === `html` || u.type === `svg`) &&
    mo(l.current, n, i, d);
  let f = (0, m.useRef)(!1);
  (0, m.useInsertionEffect)(() => {
    u && f.current && u.update(n, s);
  });
  let p = n[co],
    h = (0, m.useRef)(
      !!p &&
        !window.MotionHandoffIsComplete?.call(window, p) &&
        window.MotionHasOptimisedAnimation?.call(window, p),
    );
  return (
    xa(() => {
      u &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        u.updateFeatures(),
        lo.render(u.render),
        h.current && u.animationState && u.animationState.animateChanges());
    }),
    (0, m.useEffect)(() => {
      u &&
        (!h.current && u.animationState && u.animationState.animateChanges(),
        (h.current &&=
          (queueMicrotask(() => {
            var e;
            (e = window.MotionHandoffMarkAsComplete) == null ||
              e.call(window, p);
          }),
          !1)));
    }),
    u
  );
}
function mo(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t[`data-framer-portal-id`] ? void 0 : ho(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && ao(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function ho(e) {
  if (e) return e.options.allowProjection === !1 ? ho(e.parent) : e.projection;
}
function go({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Ra(e);
  function a(a, o) {
    let s,
      c = { ...(0, m.useContext)(fa), ...a, layoutId: _o(a) },
      { isStatic: l } = c,
      u = no(a),
      d = r(a, l);
    if (!l && ba) {
      vo(c, e);
      let n = yo(c);
      ((s = n.MeasureLayout),
        (u.visualElement = po(i, d, c, t, n.ProjectionNode)));
    }
    return (0, D.jsxs)(Ja.Provider, {
      value: u,
      children: [
        s && u.visualElement
          ? (0, D.jsx)(s, { visualElement: u.visualElement, ...c })
          : null,
        n(i, a, oo(d, u.visualElement, o), d, l, u.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == `string` ? i : `create(${i.displayName ?? i.name ?? ``})`}`;
  let o = (0, m.forwardRef)(a);
  return ((o[io] = i), o);
}
function _o({ layoutId: e }) {
  let t = (0, m.useContext)(la).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function vo(e, t) {
  (0, m.useContext)(Fa).strict;
}
function yo(e) {
  let { drag: t, layout: n } = La;
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout:
      t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var bo = [
  `animate`,
  `circle`,
  `defs`,
  `desc`,
  `ellipse`,
  `g`,
  `image`,
  `line`,
  `filter`,
  `marker`,
  `mask`,
  `metadata`,
  `path`,
  `pattern`,
  `polygon`,
  `polyline`,
  `rect`,
  `stop`,
  `switch`,
  `symbol`,
  `svg`,
  `text`,
  `tspan`,
  `use`,
  `view`,
];
function xo(e) {
  return typeof e != `string` || e.includes(`-`)
    ? !1
    : !!(bo.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function So(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((e, n) => {
      ((t[0][n] = e.get()), (t[1][n] = e.getVelocity()));
    }),
    t
  );
}
function Co(e, t, n, r) {
  if (typeof t == `function`) {
    let [i, a] = So(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  if (
    (typeof t == `string` && (t = e.variants && e.variants[t]),
    typeof t == `function`)
  ) {
    let [i, a] = So(r);
    t = t(n === void 0 ? e.custom : n, i, a);
  }
  return t;
}
var wo = (e) => Array.isArray(e),
  To = (e) => !!(e && typeof e == `object` && e.mix && e.toValue),
  Eo = (e) => (wo(e) ? e[e.length - 1] || 0 : e),
  Do = (e) => !!(e && e.getVelocity);
function Oo(e) {
  let t = Do(e) ? e.get() : e;
  return To(t) ? t.toValue() : t;
}
function I(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  a,
) {
  let o = { latestValues: Ao(r, i, a, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (e) => n({ props: r, current: e, ...o })),
      (o.onUpdate = (e) => n(e))),
    o
  );
}
var ko = (e) => (t, n) => {
  let r = (0, m.useContext)(Ja),
    i = (0, m.useContext)(da),
    a = () => I(e, t, r, i);
  return n ? a() : ua(a);
};
function Ao(e, t, n, r) {
  let i = {},
    a = r(e, {});
  for (let e in a) i[e] = Oo(a[e]);
  let { initial: o, animate: s } = e,
    c = $a(e),
    l = eo(e);
  t &&
    l &&
    !c &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
  let u = n ? n.initial === !1 : !1;
  u ||= o === !1;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Xa(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = Co(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (i[e] = t);
        }
        for (let t in e) i[t] = e[t];
      }
    }
  }
  return i;
}
var jo = [
    `transformPerspective`,
    `x`,
    `y`,
    `z`,
    `translateX`,
    `translateY`,
    `translateZ`,
    `scale`,
    `scaleX`,
    `scaleY`,
    `rotate`,
    `rotateX`,
    `rotateY`,
    `rotateZ`,
    `skew`,
    `skewX`,
    `skewY`,
  ],
  Mo = new Set(jo),
  No = (e) => (t) => typeof t == `string` && t.startsWith(e),
  Po = No(`--`),
  L = No(`var(--`),
  R = (e) => (L(e) ? z.test(e.split(`/*`)[0].trim()) : !1),
  z =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Fo = (e, t) => (t && typeof e == `number` ? t.transform(e) : e),
  Io = (e, t, n) => (n > t ? t : n < e ? e : n),
  Lo = {
    test: (e) => typeof e == `number`,
    parse: parseFloat,
    transform: (e) => e,
  },
  Ro = { ...Lo, transform: (e) => Io(0, 1, e) },
  B = { ...Lo, default: 1 },
  zo = (e) => ({
    test: (t) =>
      typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Bo = zo(`deg`),
  Vo = zo(`%`),
  V = zo(`px`),
  Ho = zo(`vh`),
  Uo = zo(`vw`),
  Wo = {
    ...Vo,
    parse: (e) => Vo.parse(e) / 100,
    transform: (e) => Vo.transform(e * 100),
  },
  Go = {
    borderWidth: V,
    borderTopWidth: V,
    borderRightWidth: V,
    borderBottomWidth: V,
    borderLeftWidth: V,
    borderRadius: V,
    radius: V,
    borderTopLeftRadius: V,
    borderTopRightRadius: V,
    borderBottomRightRadius: V,
    borderBottomLeftRadius: V,
    width: V,
    maxWidth: V,
    height: V,
    maxHeight: V,
    top: V,
    right: V,
    bottom: V,
    left: V,
    padding: V,
    paddingTop: V,
    paddingRight: V,
    paddingBottom: V,
    paddingLeft: V,
    margin: V,
    marginTop: V,
    marginRight: V,
    marginBottom: V,
    marginLeft: V,
    backgroundPositionX: V,
    backgroundPositionY: V,
  },
  Ko = {
    rotate: Bo,
    rotateX: Bo,
    rotateY: Bo,
    rotateZ: Bo,
    scale: B,
    scaleX: B,
    scaleY: B,
    scaleZ: B,
    skew: Bo,
    skewX: Bo,
    skewY: Bo,
    distance: V,
    translateX: V,
    translateY: V,
    translateZ: V,
    x: V,
    y: V,
    z: V,
    perspective: V,
    transformPerspective: V,
    opacity: Ro,
    originX: Wo,
    originY: Wo,
    originZ: V,
  },
  qo = { ...Lo, transform: Math.round },
  Jo = {
    ...Go,
    ...Ko,
    zIndex: qo,
    size: V,
    fillOpacity: Ro,
    strokeOpacity: Ro,
    numOctaves: qo,
  },
  Yo = {
    x: `translateX`,
    y: `translateY`,
    z: `translateZ`,
    transformPerspective: `perspective`,
  },
  Xo = jo.length;
function Zo(e, t, n) {
  let r = ``,
    i = !0;
  for (let a = 0; a < Xo; a++) {
    let o = jo[a],
      s = e[o];
    if (s === void 0) continue;
    let c = !0;
    if (
      ((c =
        typeof s == `number`
          ? s === +!!o.startsWith(`scale`)
          : parseFloat(s) === 0),
      !c || n)
    ) {
      let e = Fo(s, Jo[o]);
      if (!c) {
        i = !1;
        let t = Yo[o] || o;
        r += `${t}(${e}) `;
      }
      n && (t[o] = e);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? `` : r)) : i && (r = `none`), r);
}
function Qo(e, t, n) {
  let { style: r, vars: i, transformOrigin: a } = e,
    o = !1,
    s = !1;
  for (let e in t) {
    let n = t[e];
    if (Mo.has(e)) {
      o = !0;
      continue;
    }
    if (Po(e)) {
      i[e] = n;
      continue;
    }
    {
      let t = Fo(n, Jo[e]);
      e.startsWith(`origin`) ? ((s = !0), (a[e] = t)) : (r[e] = t);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = Zo(t, e.transform, n))
        : (r.transform &&= `none`)),
    s)
  ) {
    let { originX: e = `50%`, originY: t = `50%`, originZ: n = 0 } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var $o = { offset: `stroke-dashoffset`, array: `stroke-dasharray` },
  es = { offset: `strokeDashoffset`, array: `strokeDasharray` };
function ts(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let a = i ? $o : es;
  e[a.offset] = V.transform(-r);
  let o = V.transform(t),
    s = V.transform(n);
  e[a.array] = `${o} ${s}`;
}
function ns(e, t, n) {
  return typeof e == `string` ? e : V.transform(t + n * e);
}
function rs(e, t, n) {
  return `${ns(t, e.x, e.width)} ${ns(n, e.y, e.height)}`;
}
function is(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: a,
    pathLength: o,
    pathSpacing: s = 1,
    pathOffset: c = 0,
    ...l
  },
  u,
  d,
) {
  if ((Qo(e, l, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  let { attrs: f, style: p, dimensions: m } = e;
  (f.transform && (m && (p.transform = f.transform), delete f.transform),
    m &&
      (i !== void 0 || a !== void 0 || p.transform) &&
      (p.transformOrigin = rs(
        m,
        i === void 0 ? 0.5 : i,
        a === void 0 ? 0.5 : a,
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && ts(f, o, s, c, !1));
}
var as = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  os = () => ({ ...as(), attrs: {} }),
  ss = (e) => typeof e == `string` && e.toLowerCase() === `svg`;
function cs(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let t in n) e.style.setProperty(t, n[t]);
}
var ls = new Set([
  `baseFrequency`,
  `diffuseConstant`,
  `kernelMatrix`,
  `kernelUnitLength`,
  `keySplines`,
  `keyTimes`,
  `limitingConeAngle`,
  `markerHeight`,
  `markerWidth`,
  `numOctaves`,
  `targetX`,
  `targetY`,
  `surfaceScale`,
  `specularConstant`,
  `specularExponent`,
  `stdDeviation`,
  `tableValues`,
  `viewBox`,
  `gradientTransform`,
  `pathLength`,
  `startOffset`,
  `textLength`,
  `lengthAdjust`,
]);
function us(e, t, n, r) {
  cs(e, t, void 0, r);
  for (let n in t.attrs) e.setAttribute(ls.has(n) ? n : so(n), t.attrs[n]);
}
var ds = {};
function fs(e) {
  Object.assign(ds, e);
}
function ps(e, { layout: t, layoutId: n }) {
  return (
    Mo.has(e) ||
    e.startsWith(`origin`) ||
    ((t || n !== void 0) && (!!ds[e] || e === `opacity`))
  );
}
function ms(e, t, n) {
  let { style: r } = e,
    i = {};
  for (let a in r)
    (Do(r[a]) ||
      (t.style && Do(t.style[a])) ||
      ps(a, e) ||
      n?.getValue(a)?.liveStyle !== void 0) &&
      (i[a] = r[a]);
  return i;
}
function hs(e, t, n) {
  let r = ms(e, t, n);
  for (let n in e)
    if (Do(e[n]) || Do(t[n])) {
      let t =
        jo.indexOf(n) === -1
          ? n
          : `attr` + n.charAt(0).toUpperCase() + n.substring(1);
      r[t] = e[n];
    }
  return r;
}
function gs(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == `function` ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
var _s = [`x`, `y`, `width`, `height`, `cx`, `cy`, `r`],
  vs = {
    useVisualState: ko({
      scrapeMotionValuesFromProps: hs,
      createRenderState: os,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let a = !!e.drag;
        if (!a) {
          for (let e in i)
            if (Mo.has(e)) {
              a = !0;
              break;
            }
        }
        if (!a) return;
        let o = !t;
        if (t)
          for (let n = 0; n < _s.length; n++) {
            let r = _s[n];
            e[r] !== t[r] && (o = !0);
          }
        o &&
          N.read(() => {
            (gs(n, r),
              N.render(() => {
                (is(r, i, ss(n.tagName), e.transformTemplate), us(n, r));
              }));
          });
      },
    }),
  },
  ys = {
    useVisualState: ko({
      scrapeMotionValuesFromProps: ms,
      createRenderState: as,
    }),
  };
function bs(e, t, n) {
  for (let r in t) !Do(t[r]) && !ps(r, n) && (e[r] = t[r]);
}
function xs({ transformTemplate: e }, t) {
  return (0, m.useMemo)(() => {
    let n = as();
    return (Qo(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Ss(e, t) {
  let n = e.style || {},
    r = {};
  return (bs(r, n, e), Object.assign(r, xs(e, t)), r);
}
function Cs(e, t) {
  let n = {},
    r = Ss(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction =
        e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function ws(e, t, n, r) {
  let i = (0, m.useMemo)(() => {
    let n = os();
    return (
      is(n, t, ss(r), e.transformTemplate),
      { ...n.attrs, style: { ...n.style } }
    );
  }, [t]);
  if (e.style) {
    let t = {};
    (bs(t, e.style, e), (i.style = { ...t, ...i.style }));
  }
  return i;
}
function Ts(e = !1) {
  return (t, n, r, { latestValues: i }, a) => {
    let o = (xo(t) ? ws : Cs)(n, i, a, t),
      s = Ka(n, typeof t == `string`, e),
      c = t === m.Fragment ? {} : { ...s, ...o, ref: r },
      { children: l } = n,
      u = (0, m.useMemo)(() => (Do(l) ? l.get() : l), [l]);
    return (0, m.createElement)(t, { ...c, children: u });
  };
}
function Es(e, t) {
  return function (n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
    return go({
      ...(xo(n) ? vs : ys),
      preloadedFeatures: e,
      useRender: Ts(r),
      createVisualElement: t,
      Component: n,
    });
  };
}
function Ds(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Os(e, t, n) {
  let r = e.getProps();
  return Co(r, t, n === void 0 ? r.custom : n, e);
}
var ks = Ta(() => window.ScrollTimeline !== void 0),
  As = class {
    constructor(e) {
      ((this.stop = () => this.runAll(`stop`)),
        (this.animations = e.filter(Boolean)));
    }
    get finished() {
      return Promise.all(
        this.animations.map((e) => (`finished` in e ? e.finished : e)),
      );
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e, t) {
      let n = this.animations.map((n) => {
        if (ks() && n.attachTimeline) return n.attachTimeline(e);
        if (typeof t == `function`) return t(n);
      });
      return () => {
        n.forEach((e, t) => {
          (e && e(), this.animations[t].stop());
        });
      };
    }
    get time() {
      return this.getAll(`time`);
    }
    set time(e) {
      this.setAll(`time`, e);
    }
    get speed() {
      return this.getAll(`speed`);
    }
    set speed(e) {
      this.setAll(`speed`, e);
    }
    get startTime() {
      return this.getAll(`startTime`);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    flatten() {
      this.runAll(`flatten`);
    }
    play() {
      this.runAll(`play`);
    }
    pause() {
      this.runAll(`pause`);
    }
    cancel() {
      this.runAll(`cancel`);
    }
    complete() {
      this.runAll(`complete`);
    }
  },
  js = class extends As {
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
  };
function Ms(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
var Ns = 2e4;
function Ps(e) {
  let t = 0,
    n = e.next(t);
  for (; !n.done && t < 2e4;) ((t += 50), (n = e.next(t)));
  return t >= 2e4 ? 1 / 0 : t;
}
function Fs(e) {
  return typeof e == `function`;
}
function Is(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
var Ls = (e) => Array.isArray(e) && typeof e[0] == `number`,
  Rs = { linearEasing: void 0 };
function zs(e, t) {
  let n = Ta(e);
  return () => Rs[t] ?? n();
}
var Bs = zs(() => {
    try {
      document
        .createElement(`div`)
        .animate({ opacity: 0 }, { easing: `linear(0, 1)` });
    } catch {
      return !1;
    }
    return !0;
  }, `linearEasing`),
  Vs = (e, t, n = 10) => {
    let r = ``,
      i = Math.max(Math.round(t / n), 2);
    for (let t = 0; t < i; t++) r += e(Ea(0, i - 1, t)) + `, `;
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Hs(e) {
  return !!(
    (typeof e == `function` && Bs()) ||
    !e ||
    (typeof e == `string` && (e in Us || Bs())) ||
    Ls(e) ||
    (Array.isArray(e) && e.every(Hs))
  );
}
var H = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Us = {
    linear: `linear`,
    ease: `ease`,
    easeIn: `ease-in`,
    easeOut: `ease-out`,
    easeInOut: `ease-in-out`,
    circIn: H([0, 0.65, 0.55, 1]),
    circOut: H([0.55, 0, 1, 0.45]),
    backIn: H([0.31, 0.01, 0.66, -0.59]),
    backOut: H([0.33, 1.53, 0.69, 0.99]),
  };
function Ws(e, t) {
  if (e)
    return typeof e == `function` && Bs()
      ? Vs(e, t)
      : Ls(e)
        ? H(e)
        : Array.isArray(e)
          ? e.map((e) => Ws(e, t) || Us.easeOut)
          : Us[e];
}
var Gs = { x: !1, y: !1 };
function Ks() {
  return Gs.x || Gs.y;
}
function qs(e, t, n) {
  if (e instanceof Element) return [e];
  if (typeof e == `string`) {
    let r = document;
    t && (r = t.current);
    let i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Js(e, t) {
  let n = qs(e),
    r = new AbortController();
  return [n, { passive: !0, ...t, signal: r.signal }, () => r.abort()];
}
function Ys(e) {
  return (t) => {
    t.pointerType === `touch` || Ks() || e(t);
  };
}
function Xs(e, t, n = {}) {
  let [r, i, a] = Js(e, n),
    o = Ys((e) => {
      let { target: n } = e,
        r = t(e);
      if (typeof r != `function` || !n) return;
      let a = Ys((e) => {
        (r(e), n.removeEventListener(`pointerleave`, a));
      });
      n.addEventListener(`pointerleave`, a, i);
    });
  return (
    r.forEach((e) => {
      e.addEventListener(`pointerenter`, o, i);
    }),
    a
  );
}
var Zs = (e, t) => (t ? e === t || Zs(e, t.parentElement) : !1),
  Qs = (e) =>
    e.pointerType === `mouse`
      ? typeof e.button != `number` || e.button <= 0
      : e.isPrimary !== !1,
  $s = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function ec(e) {
  return $s.has(e.tagName) || e.tabIndex !== -1;
}
var tc = new WeakSet();
function nc(e) {
  return (t) => {
    t.key === `Enter` && e(t);
  };
}
function rc(e, t) {
  e.dispatchEvent(
    new PointerEvent(`pointer` + t, { isPrimary: !0, bubbles: !0 }),
  );
}
var ic = (e, t) => {
  let n = e.currentTarget;
  if (!n) return;
  let r = nc(() => {
    if (tc.has(n)) return;
    rc(n, `down`);
    let e = nc(() => {
      rc(n, `up`);
    });
    (n.addEventListener(`keyup`, e, t),
      n.addEventListener(`blur`, () => rc(n, `cancel`), t));
  });
  (n.addEventListener(`keydown`, r, t),
    n.addEventListener(`blur`, () => n.removeEventListener(`keydown`, r), t));
};
function ac(e) {
  return Qs(e) && !Ks();
}
function oc(e, t, n = {}) {
  let [r, i, a] = Js(e, n),
    o = (e) => {
      let r = e.currentTarget;
      if (!ac(e) || tc.has(r)) return;
      tc.add(r);
      let a = t(e),
        o = (e, t) => {
          (window.removeEventListener(`pointerup`, s),
            window.removeEventListener(`pointercancel`, c),
            ac(e) &&
              tc.has(r) &&
              (tc.delete(r), typeof a == `function` && a(e, { success: t })));
        },
        s = (e) => {
          o(e, n.useGlobalTarget || Zs(r, e.target));
        },
        c = (e) => {
          o(e, !1);
        };
      (window.addEventListener(`pointerup`, s, i),
        window.addEventListener(`pointercancel`, c, i));
    };
  return (
    r.forEach((e) => {
      (!ec(e) && e.getAttribute(`tabindex`) === null && (e.tabIndex = 0),
        (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, o, i),
        e.addEventListener(`focus`, (e) => ic(e, i), i));
    }),
    a
  );
}
function sc(e) {
  return e === `x` || e === `y`
    ? Gs[e]
      ? null
      : ((Gs[e] = !0),
        () => {
          Gs[e] = !1;
        })
    : Gs.x || Gs.y
      ? null
      : ((Gs.x = Gs.y = !0),
        () => {
          Gs.x = Gs.y = !1;
        });
}
var cc = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...jo]),
  lc;
function uc() {
  lc = void 0;
}
var dc = {
  now: () => (
    lc === void 0 &&
      dc.set(
        F.isProcessing || ka.useManualTiming ? F.timestamp : performance.now(),
      ),
    lc
  ),
  set: (e) => {
    ((lc = e), queueMicrotask(uc));
  },
};
function fc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function pc(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var mc = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    return (fc(this.subscriptions, e), () => pc(this.subscriptions, e));
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r) {
      if (r === 1) this.subscriptions[0](e, t, n);
      else
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          r && r(e, t, n);
        }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
function hc(e, t) {
  return t ? (1e3 / t) * e : 0;
}
var gc = 30,
  _c = (e) => !isNaN(parseFloat(e)),
  vc = { current: void 0 },
  yc = class {
    constructor(e, t = {}) {
      ((this.version = `11.18.2`),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (e, t = !0) => {
          let n = dc.now();
          (this.updatedAt !== n && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(e),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            t &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current));
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner));
    }
    setCurrent(e) {
      ((this.current = e),
        (this.updatedAt = dc.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = _c(this.current)));
    }
    setPrevFrameValue(e = this.current) {
      ((this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt));
    }
    onChange(e) {
      return this.on(`change`, e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new mc());
      let n = this.events[e].add(t);
      return e === `change`
        ? () => {
            (n(),
              N.read(() => {
                this.events.change.getSize() || this.stop();
              }));
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      ((this.passiveEffect = e), (this.stopPassiveEffect = t));
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      (this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n));
    }
    jump(e, t = !0) {
      (this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
    get() {
      return (vc.current && vc.current.push(this), this.current);
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = dc.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > gc
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, gc);
      return hc(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          ((this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify());
        }).then(() => {
          (this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation());
        })
      );
    }
    stop() {
      (this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation());
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      (this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect());
    }
  };
function bc(e, t) {
  return new yc(e, t);
}
function U(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, bc(n));
}
function xc(e, t) {
  let { transitionEnd: n = {}, transition: r = {}, ...i } = Os(e, t) || {};
  i = { ...i, ...n };
  for (let t in i) U(e, t, Eo(i[t]));
}
function Sc(e) {
  return !!(Do(e) && e.add);
}
function Cc(e, t) {
  let n = e.getValue(`willChange`);
  if (Sc(n)) return n.add(t);
}
function wc(e) {
  return e.props[co];
}
var Tc = { current: !1 },
  Ec = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Dc = 1e-7,
  Oc = 12;
function kc(e, t, n, r, i) {
  let a,
    o,
    s = 0;
  do ((o = t + (n - t) / 2), (a = Ec(o, r, i) - e), a > 0 ? (n = o) : (t = o));
  while (Math.abs(a) > Dc && ++s < Oc);
  return o;
}
function Ac(e, t, n, r) {
  if (e === t && n === r) return M;
  let i = (t) => kc(t, 0, 1, e, n);
  return (e) => (e === 0 || e === 1 ? e : Ec(i(e), t, r));
}
var jc = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Mc = (e) => (t) => 1 - e(1 - t),
  W = Ac(0.33, 1.53, 0.69, 0.99),
  Nc = Mc(W),
  Pc = jc(Nc),
  Fc = (e) => ((e *= 2) < 1 ? 0.5 * Nc(e) : 0.5 * (2 - 2 ** (-10 * (e - 1)))),
  Ic = (e) => 1 - Math.sin(Math.acos(e)),
  Lc = Mc(Ic),
  Rc = jc(Ic),
  zc = (e) => /^0[^.\s]+$/u.test(e);
function Bc(e) {
  return typeof e == `number`
    ? e === 0
    : e === null || e === `none` || e === `0` || zc(e);
}
var Vc = (e) => Math.round(e * 1e5) / 1e5,
  Hc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Uc(e) {
  return e == null;
}
var Wc =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Gc = (e, t) => (n) =>
    !!(
      (typeof n == `string` && Wc.test(n) && n.startsWith(e)) ||
      (t && !Uc(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Kc = (e, t, n) => (r) => {
    if (typeof r != `string`) return r;
    let [i, a, o, s] = r.match(Hc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(a),
      [n]: parseFloat(o),
      alpha: s === void 0 ? 1 : parseFloat(s),
    };
  },
  qc = (e) => Io(0, 255, e),
  Jc = { ...Lo, transform: (e) => Math.round(qc(e)) },
  G = {
    test: Gc(`rgb`, `red`),
    parse: Kc(`red`, `green`, `blue`),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      `rgba(` +
      Jc.transform(e) +
      `, ` +
      Jc.transform(t) +
      `, ` +
      Jc.transform(n) +
      `, ` +
      Vc(Ro.transform(r)) +
      `)`,
  };
function Yc(e) {
  let t = ``,
    n = ``,
    r = ``,
    i = ``;
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var K = { test: Gc(`#`), parse: Yc, transform: G.transform },
  q = {
    test: Gc(`hsl`, `hue`),
    parse: Kc(`hue`, `saturation`, `lightness`),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      `hsla(` +
      Math.round(e) +
      `, ` +
      Vo.transform(Vc(t)) +
      `, ` +
      Vo.transform(Vc(n)) +
      `, ` +
      Vc(Ro.transform(r)) +
      `)`,
  },
  J = {
    test: (e) => G.test(e) || K.test(e) || q.test(e),
    parse: (e) =>
      G.test(e) ? G.parse(e) : q.test(e) ? q.parse(e) : K.parse(e),
    transform: (e) =>
      typeof e == `string`
        ? e
        : e.hasOwnProperty(`red`)
          ? G.transform(e)
          : q.transform(e),
  },
  Xc =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Y(e) {
  return (
    isNaN(e) &&
    typeof e == `string` &&
    (e.match(Hc)?.length || 0) + (e.match(Xc)?.length || 0) > 0
  );
}
var Zc = `number`,
  Qc = `color`,
  $c = `var`,
  el = `var(`,
  tl = "${}",
  nl =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rl(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    a = 0;
  return {
    values: n,
    split: t
      .replace(
        nl,
        (e) => (
          J.test(e)
            ? (r.color.push(a), i.push(Qc), n.push(J.parse(e)))
            : e.startsWith(el)
              ? (r.var.push(a), i.push($c), n.push(e))
              : (r.number.push(a), i.push(Zc), n.push(parseFloat(e))),
          ++a,
          tl
        ),
      )
      .split(tl),
    indexes: r,
    types: i,
  };
}
function il(e) {
  return rl(e).values;
}
function al(e) {
  let { split: t, types: n } = rl(e),
    r = t.length;
  return (e) => {
    let i = ``;
    for (let a = 0; a < r; a++)
      if (((i += t[a]), e[a] !== void 0)) {
        let t = n[a];
        i += t === Zc ? Vc(e[a]) : t === Qc ? J.transform(e[a]) : e[a];
      }
    return i;
  };
}
var ol = (e) => (typeof e == `number` ? 0 : e);
function sl(e) {
  let t = il(e);
  return al(e)(t.map(ol));
}
var cl = { test: Y, parse: il, createTransformer: al, getAnimatableNone: sl },
  ll = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function ul(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) return e;
  let [r] = n.match(Hc) || [];
  if (!r) return e;
  let i = n.replace(r, ``),
    a = +!!ll.has(t);
  return (r !== n && (a *= 100), t + `(` + a + i + `)`);
}
var dl = /\b([a-z-]*)\(.*?\)/gu,
  fl = {
    ...cl,
    getAnimatableNone: (e) => {
      let t = e.match(dl);
      return t ? t.map(ul).join(` `) : e;
    },
  },
  pl = {
    ...Jo,
    color: J,
    backgroundColor: J,
    outlineColor: J,
    fill: J,
    stroke: J,
    borderColor: J,
    borderTopColor: J,
    borderRightColor: J,
    borderBottomColor: J,
    borderLeftColor: J,
    filter: fl,
    WebkitFilter: fl,
  },
  ml = (e) => pl[e];
function hl(e, t) {
  let n = ml(e);
  return (
    n !== fl && (n = cl),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var gl = new Set([`auto`, `none`, `0`]);
function _l(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i;) {
    let t = e[r];
    (typeof t == `string` && !gl.has(t) && rl(t).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (let r of t) e[r] = hl(n, i);
}
var vl = (e) => e === Lo || e === V,
  yl = (e, t) => parseFloat(e.split(`, `)[t]),
  bl =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === `none` || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return yl(i[1], t);
      {
        let t = r.match(/^matrix\((.+)\)$/u);
        return t ? yl(t[1], e) : 0;
      }
    },
  xl = new Set([`x`, `y`, `z`]),
  Sl = jo.filter((e) => !xl.has(e));
function Cl(e) {
  let t = [];
  return (
    Sl.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith(`scale`)));
    }),
    t
  );
}
var wl = {
  width: ({ x: e }, { paddingLeft: t = `0`, paddingRight: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = `0`, paddingBottom: n = `0` }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: bl(4, 13),
  y: bl(5, 14),
};
((wl.translateX = wl.x), (wl.translateY = wl.y));
var Tl = new Set(),
  El = !1,
  Dl = !1;
function Ol() {
  if (Dl) {
    let e = Array.from(Tl).filter((e) => e.needsMeasurement),
      t = new Set(e.map((e) => e.element)),
      n = new Map();
    (t.forEach((e) => {
      let t = Cl(e);
      t.length && (n.set(e, t), e.render());
    }),
      e.forEach((e) => e.measureInitialState()),
      t.forEach((e) => {
        e.render();
        let t = n.get(e);
        t &&
          t.forEach(([t, n]) => {
            var r;
            (r = e.getValue(t)) == null || r.set(n);
          });
      }),
      e.forEach((e) => e.measureEndState()),
      e.forEach((e) => {
        e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
      }));
  }
  ((Dl = !1), (El = !1), Tl.forEach((e) => e.complete()), Tl.clear());
}
function kl() {
  Tl.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (Dl = !0));
  });
}
function Al() {
  (kl(), Ol());
}
var jl = class {
    constructor(e, t, n, r, i, a = !1) {
      ((this.isComplete = !1),
        (this.isAsync = !1),
        (this.needsMeasurement = !1),
        (this.isScheduled = !1),
        (this.unresolvedKeyframes = [...e]),
        (this.onComplete = t),
        (this.name = n),
        (this.motionValue = r),
        (this.element = i),
        (this.isAsync = a));
    }
    scheduleResolve() {
      ((this.isScheduled = !0),
        this.isAsync
          ? (Tl.add(this),
            El || ((El = !0), N.read(kl), N.resolveKeyframes(Ol)))
          : (this.readKeyframes(), this.complete()));
    }
    readKeyframes() {
      let {
        unresolvedKeyframes: e,
        name: t,
        element: n,
        motionValue: r,
      } = this;
      for (let i = 0; i < e.length; i++)
        if (e[i] === null) {
          if (i === 0) {
            let i = r?.get(),
              a = e[e.length - 1];
            if (i !== void 0) e[0] = i;
            else if (n && t) {
              let r = n.readValue(t, a);
              r != null && (e[0] = r);
            }
            (e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]));
          } else e[i] = e[i - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
      ((this.isComplete = !0),
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        Tl.delete(this));
    }
    cancel() {
      this.isComplete || ((this.isScheduled = !1), Tl.delete(this));
    }
    resume() {
      this.isComplete || this.scheduleResolve();
    }
  },
  Ml = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  Nl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Pl(e) {
  let t = Nl.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var Fl = 4;
function Il(e, t, n = 1) {
  wa(
    n <= Fl,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
  );
  let [r, i] = Pl(e);
  if (!r) return;
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    return Ml(e) ? parseFloat(e) : e;
  }
  return R(i) ? Il(i, t, n + 1) : i;
}
var Ll = (e) => (t) => t.test(e),
  Rl = [Lo, V, Vo, Bo, Uo, Ho, { test: (e) => e === `auto`, parse: (e) => e }],
  zl = (e) => Rl.find(Ll(e)),
  Bl = class extends jl {
    constructor(e, t, n, r, i) {
      super(e, t, n, r, i, !0);
    }
    readKeyframes() {
      let { unresolvedKeyframes: e, element: t, name: n } = this;
      if (!t || !t.current) return;
      super.readKeyframes();
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        if (typeof r == `string` && ((r = r.trim()), R(r))) {
          let i = Il(r, t.current);
          (i !== void 0 && (e[n] = i),
            n === e.length - 1 && (this.finalKeyframe = r));
        }
      }
      if ((this.resolveNoneKeyframes(), !cc.has(n) || e.length !== 2)) return;
      let [r, i] = e,
        a = zl(r),
        o = zl(i);
      if (a !== o) {
        if (vl(a) && vl(o))
          for (let t = 0; t < e.length; t++) {
            let n = e[t];
            typeof n == `string` && (e[t] = parseFloat(n));
          }
        else this.needsMeasurement = !0;
      }
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: e, name: t } = this,
        n = [];
      for (let t = 0; t < e.length; t++) Bc(e[t]) && n.push(t);
      n.length && _l(e, n, t);
    }
    measureInitialState() {
      let { element: e, unresolvedKeyframes: t, name: n } = this;
      if (!e || !e.current) return;
      (n === `height` && (this.suspendedScrollY = window.pageYOffset),
        (this.measuredOrigin = wl[n](
          e.measureViewportBox(),
          window.getComputedStyle(e.current),
        )),
        (t[0] = this.measuredOrigin));
      let r = t[t.length - 1];
      r !== void 0 && e.getValue(n, r).jump(r, !1);
    }
    measureEndState() {
      let { element: e, name: t, unresolvedKeyframes: n } = this;
      if (!e || !e.current) return;
      let r = e.getValue(t);
      r && r.jump(this.measuredOrigin, !1);
      let i = n.length - 1,
        a = n[i];
      ((n[i] = wl[t](
        e.measureViewportBox(),
        window.getComputedStyle(e.current),
      )),
        a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
        this.removedTransforms?.length &&
          this.removedTransforms.forEach(([t, n]) => {
            e.getValue(t).set(n);
          }),
        this.resolveNoneKeyframes());
    }
  },
  Vl = (e, t) =>
    t !== `zIndex` &&
    !!(
      typeof e == `number` ||
      Array.isArray(e) ||
      (typeof e == `string` &&
        (cl.test(e) || e === `0`) &&
        !e.startsWith(`url(`))
    );
function X(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Hl(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === `display` || t === `visibility`) return !0;
  let a = e[e.length - 1],
    o = Vl(i, t),
    s = Vl(a, t);
  return (
    Ca(
      o === s,
      `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`,
    ),
    !o || !s ? !1 : X(e) || ((n === `spring` || Fs(n)) && r)
  );
}
var Ul = (e) => e !== null;
function Wl(e, { repeat: t, repeatType: n = `loop` }, r) {
  let i = e.filter(Ul),
    a = t && n !== `loop` && t % 2 == 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
var Gl = 40,
  Kl = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = `keyframes`,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: a = `loop`,
      ...o
    }) {
      ((this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.createdAt = dc.now()),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: a,
          ...o,
        }),
        this.updateFinishedPromise());
    }
    calcStartTime() {
      return this.resolvedAt && this.resolvedAt - this.createdAt > Gl
        ? this.resolvedAt
        : this.createdAt;
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && Al(),
        this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      ((this.resolvedAt = dc.now()), (this.hasAttemptedResolve = !0));
      let {
        name: n,
        type: r,
        velocity: i,
        delay: a,
        onComplete: o,
        onUpdate: s,
        isGenerator: c,
      } = this.options;
      if (!c && !Hl(e, n, r, i)) {
        if (Tc.current || !a) {
          (s && s(Wl(e, this.options, t)),
            o && o(),
            this.resolveFinishedPromise());
          return;
        }
        this.options.duration = 0;
      }
      let l = this.initPlayback(e, t);
      l !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...l }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    flatten() {
      ((this.options.type = `keyframes`), (this.options.ease = `linear`));
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  Z = (e, t, n) => e + (t - e) * n;
function ql(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Jl({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    a = 0,
    o = 0;
  if (!t) i = a = o = n;
  else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - r;
    ((i = ql(s, r, e + 1 / 3)), (a = ql(s, r, e)), (o = ql(s, r, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Yl(e, t) {
  return (n) => (n > 0 ? t : e);
}
var Xl = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  Zl = [K, G, q],
  Ql = (e) => Zl.find((t) => t.test(e));
function $l(e) {
  let t = Ql(e);
  if (
    (Ca(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`,
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return (t === q && (n = Jl(n)), n);
}
var eu = (e, t) => {
    let n = $l(e),
      r = $l(t);
    if (!n || !r) return Yl(e, t);
    let i = { ...n };
    return (e) => (
      (i.red = Xl(n.red, r.red, e)),
      (i.green = Xl(n.green, r.green, e)),
      (i.blue = Xl(n.blue, r.blue, e)),
      (i.alpha = Z(n.alpha, r.alpha, e)),
      G.transform(i)
    );
  },
  tu = (e, t) => (n) => t(e(n)),
  nu = (...e) => e.reduce(tu),
  ru = new Set([`none`, `hidden`]);
function iu(e, t) {
  return ru.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function au(e, t) {
  return (n) => Z(e, t, n);
}
function ou(e) {
  return typeof e == `number`
    ? au
    : typeof e == `string`
      ? R(e)
        ? Yl
        : J.test(e)
          ? eu
          : uu
      : Array.isArray(e)
        ? su
        : typeof e == `object`
          ? J.test(e)
            ? eu
            : cu
          : Yl;
}
function su(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((e, n) => ou(e)(e, t[n]));
  return (e) => {
    for (let t = 0; t < r; t++) n[t] = i[t](e);
    return n;
  };
}
function cu(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ou(e[i])(e[i], t[i]));
  return (e) => {
    for (let t in r) n[t] = r[t](e);
    return n;
  };
}
function lu(e, t) {
  let n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i],
      o = e.indexes[a][r[a]],
      s = e.values[o] ?? 0;
    ((n[i] = s), r[a]++);
  }
  return n;
}
var uu = (e, t) => {
  let n = cl.createTransformer(t),
    r = rl(e),
    i = rl(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (ru.has(e) && !i.values.length) || (ru.has(t) && !r.values.length)
      ? iu(e, t)
      : nu(su(lu(r, i), i.values), n)
    : (Ca(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
      ),
      Yl(e, t));
};
function du(e, t, n) {
  return typeof e == `number` && typeof t == `number` && typeof n == `number`
    ? Z(e, t, n)
    : ou(e)(e, t);
}
var fu = 5;
function pu(e, t, n) {
  let r = Math.max(t - fu, 0);
  return hc(n - e(r), t - r);
}
var Q = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  mu = 0.001;
function hu({
  duration: e = Q.duration,
  bounce: t = Q.bounce,
  velocity: n = Q.velocity,
  mass: r = Q.mass,
}) {
  let i, a;
  Ca(e <= Da(Q.maxDuration), `Spring duration must be 10 seconds or less`);
  let o = 1 - t;
  ((o = Io(Q.minDamping, Q.maxDamping, o)),
    (e = Io(Q.minDuration, Q.maxDuration, Oa(e))),
    o < 1
      ? ((i = (t) => {
          let r = t * o,
            i = r * e,
            a = r - n,
            s = vu(t, o),
            c = Math.exp(-i);
          return mu - (a / s) * c;
        }),
        (a = (t) => {
          let r = t * o * e,
            a = r * n + n,
            s = o ** 2 * t ** 2 * e,
            c = Math.exp(-r),
            l = vu(t ** 2, o);
          return ((-i(t) + mu > 0 ? -1 : 1) * ((a - s) * c)) / l;
        }))
      : ((i = (t) => -0.001 + Math.exp(-t * e) * ((t - n) * e + 1)),
        (a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)))));
  let s = 5 / e,
    c = _u(i, a, s);
  if (((e = Da(e)), isNaN(c)))
    return { stiffness: Q.stiffness, damping: Q.damping, duration: e };
  {
    let t = c ** 2 * r;
    return { stiffness: t, damping: o * 2 * Math.sqrt(r * t), duration: e };
  }
}
var gu = 12;
function _u(e, t, n) {
  let r = n;
  for (let n = 1; n < gu; n++) r -= e(r) / t(r);
  return r;
}
function vu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var yu = [`duration`, `bounce`],
  bu = [`stiffness`, `damping`, `mass`];
function xu(e, t) {
  return t.some((t) => e[t] !== void 0);
}
function Su(e) {
  let t = {
    velocity: Q.velocity,
    stiffness: Q.stiffness,
    damping: Q.damping,
    mass: Q.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!xu(e, bu) && xu(e, yu)) {
    if (e.visualDuration) {
      let n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        a = 2 * Io(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: Q.mass, stiffness: i, damping: a };
    } else {
      let n = hu(e);
      ((t = { ...t, ...n, mass: Q.mass }), (t.isResolvedFromDuration = !0));
    }
  }
  return t;
}
function Cu(e = Q.visualDuration, t = Q.bounce) {
  let n =
      typeof e == `object`
        ? e
        : { visualDuration: e, keyframes: [0, 1], bounce: t },
    { restSpeed: r, restDelta: i } = n,
    a = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    s = { done: !1, value: a },
    {
      stiffness: c,
      damping: l,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: p,
    } = Su({ ...n, velocity: -Oa(n.velocity || 0) }),
    m = f || 0,
    h = l / (2 * Math.sqrt(c * u)),
    g = o - a,
    _ = Oa(Math.sqrt(c / u)),
    v = Math.abs(g) < 5;
  ((r ||= v ? Q.restSpeed.granular : Q.restSpeed.default),
    (i ||= v ? Q.restDelta.granular : Q.restDelta.default));
  let y;
  if (h < 1) {
    let e = vu(_, h);
    y = (t) => {
      let n = Math.exp(-h * _ * t);
      return (
        o - n * (((m + h * _ * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
      );
    };
  } else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
  else {
    let e = _ * Math.sqrt(h * h - 1);
    y = (t) => {
      let n = Math.exp(-h * _ * t),
        r = Math.min(e * t, 300);
      return (
        o - (n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
      );
    };
  }
  let b = {
    calculatedDuration: (p && d) || null,
    next: (e) => {
      let t = y(e);
      if (p) s.done = e >= d;
      else {
        let n = 0;
        h < 1 && (n = e === 0 ? Da(m) : pu(y, e, t));
        let a = Math.abs(n) <= r,
          c = Math.abs(o - t) <= i;
        s.done = a && c;
      }
      return ((s.value = s.done ? o : t), s);
    },
    toString: () => {
      let e = Math.min(Ps(b), Ns),
        t = Vs((t) => b.next(e * t).value, e, 30);
      return e + `ms ` + t;
    },
  };
  return b;
}
function wu({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u,
}) {
  let d = e[0],
    f = { done: !1, value: d },
    p = (e) => (s !== void 0 && e < s) || (c !== void 0 && e > c),
    m = (e) =>
      s === void 0
        ? c
        : c === void 0 || Math.abs(s - e) < Math.abs(c - e)
          ? s
          : c,
    h = n * t,
    g = d + h,
    _ = o === void 0 ? g : o(g);
  _ !== g && (h = _ - d);
  let v = (e) => -h * Math.exp(-e / r),
    y = (e) => _ + v(e),
    b = (e) => {
      let t = v(e),
        n = y(e);
      ((f.done = Math.abs(t) <= l), (f.value = f.done ? _ : n));
    },
    x,
    S,
    C = (e) => {
      p(f.value) &&
        ((x = e),
        (S = Cu({
          keyframes: [f.value, m(f.value)],
          velocity: pu(y, e, f.value),
          damping: i,
          stiffness: a,
          restDelta: l,
          restSpeed: u,
        })));
    };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (e) => {
        let t = !1;
        return (
          !S && x === void 0 && ((t = !0), b(e), C(e)),
          x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f)
        );
      },
    }
  );
}
var Tu = Ac(0.42, 0, 1, 1),
  Eu = Ac(0, 0, 0.58, 1),
  Du = Ac(0.42, 0, 0.58, 1),
  Ou = (e) => Array.isArray(e) && typeof e[0] != `number`,
  ku = {
    linear: M,
    easeIn: Tu,
    easeInOut: Du,
    easeOut: Eu,
    circIn: Ic,
    circInOut: Rc,
    circOut: Lc,
    backIn: Nc,
    backInOut: Pc,
    backOut: W,
    anticipate: Fc,
  },
  Au = (e) => {
    if (Ls(e)) {
      wa(
        e.length === 4,
        `Cubic bezier arrays must contain four numerical values.`,
      );
      let [t, n, r, i] = e;
      return Ac(t, n, r, i);
    }
    return typeof e == `string`
      ? (wa(ku[e] !== void 0, `Invalid easing type '${e}'`), ku[e])
      : e;
  };
function ju(e, t, n) {
  let r = [],
    i = n || du,
    a = e.length - 1;
  for (let n = 0; n < a; n++) {
    let a = i(e[n], e[n + 1]);
    (t && (a = nu(Array.isArray(t) ? t[n] || M : t, a)), r.push(a));
  }
  return r;
}
function Mu(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let a = e.length;
  if (
    (wa(a === t.length, `Both input and output ranges must be the same length`),
    a === 1)
  )
    return () => t[0];
  if (a === 2 && t[0] === t[1]) return () => t[1];
  let o = e[0] === e[1];
  e[0] > e[a - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = ju(t, r, i),
    c = s.length,
    l = (n) => {
      if (o && n < e[0]) return t[0];
      let r = 0;
      if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
      let i = Ea(e[r], e[r + 1], n);
      return s[r](i);
    };
  return n ? (t) => l(Io(e[0], e[a - 1], t)) : l;
}
function Nu(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Ea(0, t, r);
    e.push(Z(n, 1, i));
  }
}
function Pu(e) {
  let t = [0];
  return (Nu(t, e.length - 1), t);
}
function Fu(e, t) {
  return e.map((e) => e * t);
}
function Iu(e, t) {
  return e.map(() => t || Du).splice(0, e.length - 1);
}
function Lu({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
}) {
  let i = Ou(r) ? r.map(Au) : Au(r),
    a = { done: !1, value: t[0] },
    o = Mu(Fu(n && n.length === t.length ? n : Pu(t), e), t, {
      ease: Array.isArray(i) ? i : Iu(t, i),
    });
  return {
    calculatedDuration: e,
    next: (t) => ((a.value = o(t)), (a.done = t >= e), a),
  };
}
var Ru = (e) => {
    let t = ({ timestamp: t }) => e(t);
    return {
      start: () => N.update(t, !0),
      stop: () => P(t),
      now: () => (F.isProcessing ? F.timestamp : dc.now()),
    };
  },
  zu = { decay: wu, inertia: wu, tween: Lu, keyframes: Lu, spring: Cu },
  Bu = (e) => e / 100,
  Vu = class extends Kl {
    constructor(e) {
      (super(e),
        (this.holdTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = `running`),
        (this.startTime = null),
        (this.state = `idle`),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === `idle`)
          )
            return;
          this.teardown();
          let { onStop: e } = this.options;
          e && e();
        }));
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options,
        a = r?.KeyframeResolver || jl,
        o = (e, t) => this.onKeyframesResolved(e, t);
      ((this.resolver = new a(i, o, t, n, r)), this.resolver.scheduleResolve());
    }
    flatten() {
      (super.flatten(),
        this._resolved &&
          Object.assign(
            this._resolved,
            this.initPlayback(this._resolved.keyframes),
          ));
    }
    initPlayback(e) {
      let {
          type: t = `keyframes`,
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: a = 0,
        } = this.options,
        o = Fs(t) ? t : zu[t] || Lu,
        s,
        c;
      o !== Lu &&
        typeof e[0] != `number` &&
        ((s = nu(Bu, du(e[0], e[1]))), (e = [0, 100]));
      let l = o({ ...this.options, keyframes: e });
      (i === `mirror` &&
        (c = o({ ...this.options, keyframes: [...e].reverse(), velocity: -a })),
        l.calculatedDuration === null && (l.calculatedDuration = Ps(l)));
      let { calculatedDuration: u } = l,
        d = u + r,
        f = d * (n + 1) - r;
      return {
        generator: l,
        mirroredGenerator: c,
        mapPercentToKeyframes: s,
        calculatedDuration: u,
        resolvedDuration: d,
        totalDuration: f,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      (this.play(),
        this.pendingPlayState === `paused` || !e
          ? this.pause()
          : (this.state = this.pendingPlayState));
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: e } = this.options;
        return { done: !0, value: e[e.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: a,
        mapPercentToKeyframes: o,
        keyframes: s,
        calculatedDuration: c,
        totalDuration: l,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: d,
        repeat: f,
        repeatType: p,
        repeatDelay: m,
        onUpdate: h,
      } = this.options;
      (this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - l / this.speed, this.startTime)),
        (this.currentTime = t
          ? e
          : this.holdTime === null
            ? Math.round(e - this.startTime) * this.speed
            : this.holdTime));
      let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
        _ = this.speed >= 0 ? g < 0 : g > l;
      ((this.currentTime = Math.max(g, 0)),
        this.state === `finished` &&
          this.holdTime === null &&
          (this.currentTime = l));
      let v = this.currentTime,
        y = i;
      if (f) {
        let e = Math.min(this.currentTime, l) / u,
          t = Math.floor(e),
          n = e % 1;
        (!n && e >= 1 && (n = 1),
          n === 1 && t--,
          (t = Math.min(t, f + 1)),
          t % 2 &&
            (p === `reverse`
              ? ((n = 1 - n), m && (n -= m / u))
              : p === `mirror` && (y = a)),
          (v = Io(0, 1, n) * u));
      }
      let b = _ ? { done: !1, value: s[0] } : y.next(v);
      o && (b.value = o(b.value));
      let { done: x } = b;
      !_ &&
        c !== null &&
        (x = this.speed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
      let S =
        this.holdTime === null &&
        (this.state === `finished` || (this.state === `running` && x));
      return (
        S && r !== void 0 && (b.value = Wl(s, this.options, r)),
        h && h(b.value),
        S && this.finish(),
        b
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Oa(e.calculatedDuration) : 0;
    }
    get time() {
      return Oa(this.currentTime);
    }
    set time(e) {
      ((e = Da(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed));
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      ((this.playbackSpeed = e), t && (this.time = Oa(this.currentTime)));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = `running`;
        return;
      }
      if (this.isStopped) return;
      let { driver: e = Ru, onPlay: t, startTime: n } = this.options;
      ((this.driver ||= e((e) => this.tick(e))), t && t());
      let r = this.driver.now();
      (this.holdTime === null
        ? this.startTime
          ? this.state === `finished` && (this.startTime = r)
          : (this.startTime = n ?? this.calcStartTime())
        : (this.startTime = r - this.holdTime),
        this.state === `finished` && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = `running`),
        this.driver.start());
    }
    pause() {
      if (!this._resolved) {
        this.pendingPlayState = `paused`;
        return;
      }
      ((this.state = `paused`), (this.holdTime = this.currentTime ?? 0));
    }
    complete() {
      (this.state !== `running` && this.play(),
        (this.pendingPlayState = this.state = `finished`),
        (this.holdTime = null));
    }
    finish() {
      (this.teardown(), (this.state = `finished`));
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      (this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise());
    }
    teardown() {
      ((this.state = `idle`),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel());
    }
    stopDriver() {
      this.driver &&= (this.driver.stop(), void 0);
    }
    sample(e) {
      return ((this.startTime = 0), this.tick(e, !0));
    }
  },
  Hu = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
function Uu(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: a = 0,
    repeatType: o = `loop`,
    ease: s = `easeInOut`,
    times: c,
  } = {},
) {
  let l = { [t]: n };
  c && (l.offset = c);
  let u = Ws(s, i);
  return (
    Array.isArray(u) && (l.easing = u),
    e.animate(l, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? `linear` : u,
      fill: `both`,
      iterations: a + 1,
      direction: o === `reverse` ? `alternate` : `normal`,
    })
  );
}
var Wu = Ta(() => Object.hasOwnProperty.call(Element.prototype, `animate`)),
  Gu = 10,
  Ku = 2e4;
function qu(e) {
  return Fs(e.type) || e.type === `spring` || !Hs(e.ease);
}
function Ju(e, t) {
  let n = new Vu({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    a = 0;
  for (; !r.done && a < Ku;) ((r = n.sample(a)), i.push(r.value), (a += Gu));
  return { times: void 0, keyframes: i, duration: a - Gu, ease: `linear` };
}
var Yu = { anticipate: Fc, backInOut: Pc, circInOut: Rc };
function Xu(e) {
  return e in Yu;
}
var Zu = class extends Kl {
    constructor(e) {
      super(e);
      let { name: t, motionValue: n, element: r, keyframes: i } = this.options;
      ((this.resolver = new Bl(
        i,
        (e, t) => this.onKeyframesResolved(e, t),
        t,
        n,
        r,
      )),
        this.resolver.scheduleResolve());
    }
    initPlayback(e, t) {
      let {
        duration: n = 300,
        times: r,
        ease: i,
        type: a,
        motionValue: o,
        name: s,
        startTime: c,
      } = this.options;
      if (!o.owner || !o.owner.current) return !1;
      if (
        (typeof i == `string` && Bs() && Xu(i) && (i = Yu[i]), qu(this.options))
      ) {
        let {
            onComplete: t,
            onUpdate: o,
            motionValue: s,
            element: c,
            ...l
          } = this.options,
          u = Ju(e, l);
        ((e = u.keyframes),
          e.length === 1 && (e[1] = e[0]),
          (n = u.duration),
          (r = u.times),
          (i = u.ease),
          (a = `keyframes`));
      }
      let l = Uu(o.owner.current, s, e, {
        ...this.options,
        duration: n,
        times: r,
        ease: i,
      });
      return (
        (l.startTime = c ?? this.calcStartTime()),
        this.pendingTimeline
          ? (Is(l, this.pendingTimeline), (this.pendingTimeline = void 0))
          : (l.onfinish = () => {
              let { onComplete: n } = this.options;
              (o.set(Wl(e, this.options, t)),
                n && n(),
                this.cancel(),
                this.resolveFinishedPromise());
            }),
        { animation: l, duration: n, times: r, type: a, ease: i, keyframes: e }
      );
    }
    get duration() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { duration: t } = e;
      return Oa(t);
    }
    get time() {
      let { resolved: e } = this;
      if (!e) return 0;
      let { animation: t } = e;
      return Oa(t.currentTime || 0);
    }
    set time(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.currentTime = Da(e);
    }
    get speed() {
      let { resolved: e } = this;
      if (!e) return 1;
      let { animation: t } = e;
      return t.playbackRate;
    }
    set speed(e) {
      let { resolved: t } = this;
      if (!t) return;
      let { animation: n } = t;
      n.playbackRate = e;
    }
    get state() {
      let { resolved: e } = this;
      if (!e) return `idle`;
      let { animation: t } = e;
      return t.playState;
    }
    get startTime() {
      let { resolved: e } = this;
      if (!e) return null;
      let { animation: t } = e;
      return t.startTime;
    }
    attachTimeline(e) {
      if (!this._resolved) this.pendingTimeline = e;
      else {
        let { resolved: t } = this;
        if (!t) return M;
        let { animation: n } = t;
        Is(n, e);
      }
      return M;
    }
    play() {
      if (this.isStopped) return;
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      (t.playState === `finished` && this.updateFinishedPromise(), t.play());
    }
    pause() {
      let { resolved: e } = this;
      if (!e) return;
      let { animation: t } = e;
      t.pause();
    }
    stop() {
      if (
        (this.resolver.cancel(), (this.isStopped = !0), this.state === `idle`)
      )
        return;
      (this.resolveFinishedPromise(), this.updateFinishedPromise());
      let { resolved: e } = this;
      if (!e) return;
      let {
        animation: t,
        keyframes: n,
        duration: r,
        type: i,
        ease: a,
        times: o,
      } = e;
      if (t.playState === `idle` || t.playState === `finished`) return;
      if (this.time) {
        let {
            motionValue: e,
            onUpdate: t,
            onComplete: s,
            element: c,
            ...l
          } = this.options,
          u = new Vu({
            ...l,
            keyframes: n,
            duration: r,
            type: i,
            ease: a,
            times: o,
            isGenerator: !0,
          }),
          d = Da(this.time);
        e.setWithVelocity(u.sample(d - Gu).value, u.sample(d).value, Gu);
      }
      let { onStop: s } = this.options;
      (s && s(), this.cancel());
    }
    complete() {
      let { resolved: e } = this;
      e && e.animation.finish();
    }
    cancel() {
      let { resolved: e } = this;
      e && e.animation.cancel();
    }
    static supports(e) {
      let {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: i,
        damping: a,
        type: o,
      } = e;
      if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
        return !1;
      let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
      return (
        Wu() &&
        n &&
        Hu.has(n) &&
        !s &&
        !c &&
        !r &&
        i !== `mirror` &&
        a !== 0 &&
        o !== `inertia`
      );
    }
  },
  Qu = { type: `spring`, stiffness: 500, damping: 25, restSpeed: 10 },
  $u = (e) => ({
    type: `spring`,
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  ed = { type: `keyframes`, duration: 0.8 },
  td = { type: `keyframes`, ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nd = (e, { keyframes: t }) =>
    t.length > 2
      ? ed
      : Mo.has(e)
        ? e.startsWith(`scale`)
          ? $u(t[1])
          : Qu
        : td;
function rd({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: a,
  repeatType: o,
  repeatDelay: s,
  from: c,
  elapsed: l,
  ...u
}) {
  return !!Object.keys(u).length;
}
var id =
  (e, t, n, r = {}, i, a) =>
  (o) => {
    let s = Ms(r, e) || {},
      c = s.delay || r.delay || 0,
      { elapsed: l = 0 } = r;
    l -= Da(c);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: `easeOut`,
      velocity: t.getVelocity(),
      ...s,
      delay: -l,
      onUpdate: (e) => {
        (t.set(e), s.onUpdate && s.onUpdate(e));
      },
      onComplete: () => {
        (o(), s.onComplete && s.onComplete());
      },
      name: e,
      motionValue: t,
      element: a ? void 0 : i,
    };
    (rd(s) || (u = { ...u, ...nd(e, u) }),
      u.duration && (u.duration = Da(u.duration)),
      u.repeatDelay && (u.repeatDelay = Da(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from));
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      (Tc.current || ka.skipAnimations) &&
        ((d = !0), (u.duration = 0), (u.delay = 0)),
      d && !a && t.get() !== void 0)
    ) {
      let e = Wl(u.keyframes, s);
      if (e !== void 0)
        return (
          N.update(() => {
            (u.onUpdate(e), u.onComplete());
          }),
          new js([])
        );
    }
    return !a && Zu.supports(u) ? new Zu(u) : new Vu(u);
  };
function ad({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function od(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
  r && (a = r);
  let c = [],
    l = i && e.animationState && e.animationState.getState()[i];
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null),
      i = s[t];
    if (i === void 0 || (l && ad(l, t))) continue;
    let o = { delay: n, ...Ms(a || {}, t) },
      u = !1;
    if (window.MotionHandoffAnimation) {
      let n = wc(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, N);
        e !== null && ((o.startTime = e), (u = !0));
      }
    }
    (Cc(e, t),
      r.start(
        id(t, r, i, e.shouldReduceMotion && cc.has(t) ? { type: !1 } : o, e, u),
      ));
    let d = r.animation;
    d && c.push(d);
  }
  return (
    o &&
      Promise.all(c).then(() => {
        N.update(() => {
          o && xc(e, o);
        });
      }),
    c
  );
}
function sd(e, t, n = {}) {
  let r = Os(e, t, n.type === `exit` ? e.presenceContext?.custom : void 0),
    { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  let a = r ? () => Promise.all(od(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (r = 0) => {
            let {
              delayChildren: a = 0,
              staggerChildren: o,
              staggerDirection: s,
            } = i;
            return cd(e, t, a + r, o, s, n);
          }
        : () => Promise.resolve(),
    { when: s } = i;
  if (s) {
    let [e, t] = s === `beforeChildren` ? [a, o] : [o, a];
    return e().then(() => t());
  }
  return Promise.all([a(), o(n.delay)]);
}
function cd(e, t, n = 0, r = 0, i = 1, a) {
  let o = [],
    s = (e.variantChildren.size - 1) * r,
    c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
  return (
    Array.from(e.variantChildren)
      .sort(ld)
      .forEach((e, r) => {
        (e.notify(`AnimationStart`, t),
          o.push(
            sd(e, t, { ...a, delay: n + c(r) }).then(() =>
              e.notify(`AnimationComplete`, t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function ld(e, t) {
  return e.sortNodePosition(t);
}
function ud(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((t) => sd(e, t, n));
    r = Promise.all(i);
  } else if (typeof t == `string`) r = sd(e, t, n);
  else {
    let i = typeof t == `function` ? Os(e, t, n.custom) : t;
    r = Promise.all(od(e, i, n));
  }
  return r.then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var dd = Qa.length;
function fd(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    let t = (e.parent && fd(e.parent)) || {};
    return (e.props.initial !== void 0 && (t.initial = e.props.initial), t);
  }
  let t = {};
  for (let n = 0; n < dd; n++) {
    let r = Qa[n],
      i = e.props[r];
    (Ya(i) || i === !1) && (t[r] = i);
  }
  return t;
}
var pd = [...Za].reverse(),
  md = Za.length;
function hd(e) {
  return (t) =>
    Promise.all(t.map(({ animation: t, options: n }) => ud(e, t, n)));
}
function gd(e) {
  let t = hd(e),
    n = yd(),
    r = !0,
    i = (t) => (n, r) => {
      let i = Os(e, r, t === `exit` ? e.presenceContext?.custom : void 0);
      if (i) {
        let { transition: e, transitionEnd: t, ...r } = i;
        n = { ...n, ...r, ...t };
      }
      return n;
    };
  function a(n) {
    t = n(e);
  }
  function o(a) {
    let { props: o } = e,
      s = fd(e.parent) || {},
      c = [],
      l = new Set(),
      u = {},
      d = 1 / 0;
    for (let t = 0; t < md; t++) {
      let f = pd[t],
        p = n[f],
        m = o[f] === void 0 ? s[f] : o[f],
        h = Ya(m),
        g = f === a ? p.isActive : null;
      g === !1 && (d = t);
      let _ = m === s[f] && m !== o[f] && h;
      if (
        (_ && r && e.manuallyAnimateOnMount && (_ = !1),
        (p.protectedKeys = { ...u }),
        (!p.isActive && g === null) ||
          (!m && !p.prevProp) ||
          Xa(m) ||
          typeof m == `boolean`)
      )
        continue;
      let v = _d(p.prevProp, m),
        y = v || (f === a && p.isActive && !_ && h) || (t > d && h),
        b = !1,
        x = Array.isArray(m) ? m : [m],
        S = x.reduce(i(f), {});
      g === !1 && (S = {});
      let { prevResolvedValues: C = {} } = p,
        ee = { ...C, ...S },
        te = (t) => {
          ((y = !0),
            l.has(t) && ((b = !0), l.delete(t)),
            (p.needsAnimating[t] = !0));
          let n = e.getValue(t);
          n && (n.liveStyle = !1);
        };
      for (let e in ee) {
        let t = S[e],
          n = C[e];
        if (u.hasOwnProperty(e)) continue;
        let r = !1;
        ((r = wo(t) && wo(n) ? !Ds(t, n) : t !== n),
          r
            ? t == null
              ? l.add(e)
              : te(e)
            : t !== void 0 && l.has(e)
              ? te(e)
              : (p.protectedKeys[e] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = S),
        p.isActive && (u = { ...u, ...S }),
        r && e.blockInitialAnimation && (y = !1),
        y &&
          (!(_ && v) || b) &&
          c.push(...x.map((e) => ({ animation: e, options: { type: f } }))));
    }
    if (l.size) {
      let t = {};
      (l.forEach((n) => {
        let r = e.getBaseTarget(n),
          i = e.getValue(n);
        (i && (i.liveStyle = !0), (t[n] = r ?? null));
      }),
        c.push({ animation: t }));
    }
    let f = !!c.length;
    return (
      r &&
        (o.initial === !1 || o.initial === o.animate) &&
        !e.manuallyAnimateOnMount &&
        (f = !1),
      (r = !1),
      f ? t(c) : Promise.resolve()
    );
  }
  function s(t, r) {
    var i;
    if (n[t].isActive === r) return Promise.resolve();
    ((i = e.variantChildren) == null ||
      i.forEach((e) => e.animationState?.setActive(t, r)),
      (n[t].isActive = r));
    let a = o(t);
    for (let e in n) n[e].protectedKeys = {};
    return a;
  }
  return {
    animateChanges: o,
    setActive: s,
    setAnimateFunction: a,
    getState: () => n,
    reset: () => {
      ((n = yd()), (r = !0));
    },
  };
}
function _d(e, t) {
  return typeof t == `string` ? t !== e : Array.isArray(t) ? !Ds(t, e) : !1;
}
function vd(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function yd() {
  return {
    animate: vd(!0),
    whileInView: vd(),
    whileHover: vd(),
    whileTap: vd(),
    whileDrag: vd(),
    whileFocus: vd(),
    exit: vd(),
  };
}
var bd = class {
    constructor(e) {
      ((this.isMounted = !1), (this.node = e));
    }
    update() {}
  },
  xd = class extends bd {
    constructor(e) {
      (super(e), (e.animationState ||= gd(e)));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      Xa(e) && (this.unmountControls = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var e;
      (this.node.animationState.reset(),
        (e = this.unmountControls) == null || e.call(this));
    }
  },
  Sd = 0,
  Cd = {
    animation: { Feature: xd },
    exit: {
      Feature: class extends bd {
        constructor() {
          (super(...arguments), (this.id = Sd++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t && !e && r.then(() => t(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      },
    },
  };
function wd(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Td(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Ed = (e) => (t) => Qs(t) && e(t, Td(t));
function Dd(e, t, n, r) {
  return wd(e, t, Ed(n), r);
}
var Od = (e, t) => Math.abs(e - t);
function kd(e, t) {
  let n = Od(e.x, t.x),
    r = Od(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Ad = class {
  constructor(
    e,
    t,
    { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let e = Nd(this.lastMoveEventInfo, this.history),
          t = this.startEvent !== null,
          n = kd(e.offset, { x: 0, y: 0 }) >= 3;
        if (!t && !n) return;
        let { point: r } = e,
          { timestamp: i } = F;
        this.history.push({ ...r, timestamp: i });
        let { onStart: a, onMove: o } = this.handlers;
        (t ||
          (a && a(this.lastMoveEvent, e),
          (this.startEvent = this.lastMoveEvent)),
          o && o(this.lastMoveEvent, e));
      }),
      (this.handlePointerMove = (e, t) => {
        ((this.lastMoveEvent = e),
          (this.lastMoveEventInfo = jd(t, this.transformPagePoint)),
          N.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (e, t) => {
        this.end();
        let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
        if (
          (this.dragSnapToOrigin && i && i(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        let a = Nd(
          e.type === `pointercancel`
            ? this.lastMoveEventInfo
            : jd(t, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && n && n(e, a), r && r(e, a));
      }),
      !Qs(e))
    )
      return;
    ((this.dragSnapToOrigin = i),
      (this.handlers = t),
      (this.transformPagePoint = n),
      (this.contextWindow = r || window));
    let a = jd(Td(e), this.transformPagePoint),
      { point: o } = a,
      { timestamp: s } = F;
    this.history = [{ ...o, timestamp: s }];
    let { onSessionStart: c } = t;
    (c && c(e, Nd(a, this.history)),
      (this.removeListeners = nu(
        Dd(this.contextWindow, `pointermove`, this.handlePointerMove),
        Dd(this.contextWindow, `pointerup`, this.handlePointerUp),
        Dd(this.contextWindow, `pointercancel`, this.handlePointerUp),
      )));
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    (this.removeListeners && this.removeListeners(), P(this.updatePoint));
  }
};
function jd(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Md(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Nd({ point: e }, t) {
  return {
    point: e,
    delta: Md(e, Fd(t)),
    offset: Md(e, Pd(t)),
    velocity: Id(t, 0.1),
  };
}
function Pd(e) {
  return e[0];
}
function Fd(e) {
  return e[e.length - 1];
}
function Id(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = Fd(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Da(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  let a = Oa(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var Ld = 0.9999,
  Rd = 1.0001,
  zd = -0.01,
  Bd = 0.01;
function Vd(e) {
  return e.max - e.min;
}
function Hd(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ud(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = Vd(n) / Vd(t)),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Ld && e.scale <= Rd) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= zd && e.translate <= Bd) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function Wd(e, t, n, r) {
  (Ud(e.x, t.x, n.x, r ? r.originX : void 0),
    Ud(e.y, t.y, n.y, r ? r.originY : void 0));
}
function Gd(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Vd(t)));
}
function Kd(e, t, n) {
  (Gd(e.x, t.x, n.x), Gd(e.y, t.y, n.y));
}
function qd(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Vd(t)));
}
function Jd(e, t, n) {
  (qd(e.x, t.x, n.x), qd(e.y, t.y, n.y));
}
function Yd(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Xd(e, t, n) {
  return {
    min: t === void 0 ? void 0 : e.min + t,
    max: n === void 0 ? void 0 : e.max + n - (e.max - e.min),
  };
}
function Zd(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Xd(e.x, n, i), y: Xd(e.y, t, r) };
}
function Qd(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function $d(e, t) {
  return { x: Qd(e.x, t.x), y: Qd(e.y, t.y) };
}
function ef(e, t) {
  let n = 0.5,
    r = Vd(e),
    i = Vd(t);
  return (
    i > r
      ? (n = Ea(t.min, t.max - r, e.min))
      : r > i && (n = Ea(e.min, e.max - i, t.min)),
    Io(0, 1, n)
  );
}
function tf(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var nf = 0.35;
function rf(e = nf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = nf),
    { x: af(e, `left`, `right`), y: af(e, `top`, `bottom`) }
  );
}
function af(e, t, n) {
  return { min: of(e, t), max: of(e, n) };
}
function of(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var sf = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  cf = () => ({ x: sf(), y: sf() }),
  lf = () => ({ min: 0, max: 0 }),
  $ = () => ({ x: lf(), y: lf() });
function uf(e) {
  return [e(`x`), e(`y`)];
}
function df({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ff({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function pf(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function mf(e) {
  return e === void 0 || e === 1;
}
function hf({ scale: e, scaleX: t, scaleY: n }) {
  return !mf(e) || !mf(t) || !mf(n);
}
function gf(e) {
  return (
    hf(e) ||
    _f(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function _f(e) {
  return vf(e.x) || vf(e.y);
}
function vf(e) {
  return e && e !== `0%`;
}
function yf(e, t, n) {
  return n + t * (e - n);
}
function bf(e, t, n, r, i) {
  return (i !== void 0 && (e = yf(e, i, r)), yf(e, n, r) + t);
}
function xf(e, t = 0, n = 1, r, i) {
  ((e.min = bf(e.min, t, n, r, i)), (e.max = bf(e.max, t, n, r, i)));
}
function Sf(e, { x: t, y: n }) {
  (xf(e.x, t.translate, t.scale, t.originPoint),
    xf(e.y, n.translate, n.scale, n.originPoint));
}
var Cf = 0.999999999999,
  wf = 1.0000000000001;
function Tf(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let a, o;
  for (let s = 0; s < i; s++) {
    ((a = n[s]), (o = a.projectionDelta));
    let { visualElement: i } = a.options;
    (i && i.props.style && i.props.style.display === `contents`) ||
      (r &&
        a.options.layoutScroll &&
        a.scroll &&
        a !== a.root &&
        Of(e, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Sf(e, o)),
      r && gf(a.latestValues) && Of(e, a.latestValues));
  }
  (t.x < wf && t.x > Cf && (t.x = 1), t.y < wf && t.y > Cf && (t.y = 1));
}
function Ef(e, t) {
  ((e.min += t), (e.max += t));
}
function Df(e, t, n, r, i = 0.5) {
  xf(e, t, n, Z(e.min, e.max, i), r);
}
function Of(e, t) {
  (Df(e.x, t.x, t.scaleX, t.scale, t.originX),
    Df(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function kf(e, t) {
  return df(pf(e.getBoundingClientRect(), t));
}
function Af(e, t, n) {
  let r = kf(e, n),
    { scroll: i } = t;
  return (i && (Ef(r.x, i.offset.x), Ef(r.y, i.offset.y)), r);
}
var jf = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Mf = new WeakMap(),
  Nf = class {
    constructor(e) {
      ((this.openDragLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = $()),
        (this.visualElement = e));
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (e) => {
          let { dragSnapToOrigin: n } = this.getProps();
          (n ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(Td(e).point));
        },
        i = (e, t) => {
          let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
          if (
            n &&
            !r &&
            (this.openDragLock && this.openDragLock(),
            (this.openDragLock = sc(n)),
            !this.openDragLock)
          )
            return;
          ((this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            uf((e) => {
              let t = this.getAxisMotionValue(e).get() || 0;
              if (Vo.test(t)) {
                let { projection: n } = this.visualElement;
                if (n && n.layout) {
                  let r = n.layout.layoutBox[e];
                  r && (t = Vd(r) * (parseFloat(t) / 100));
                }
              }
              this.originPoint[e] = t;
            }),
            i && N.postRender(() => i(e, t)),
            Cc(this.visualElement, `transform`));
          let { animationState: a } = this.visualElement;
          a && a.setActive(`whileDrag`, !0);
        },
        a = (e, t) => {
          let {
            dragPropagation: n,
            dragDirectionLock: r,
            onDirectionLock: i,
            onDrag: a,
          } = this.getProps();
          if (!n && !this.openDragLock) return;
          let { offset: o } = t;
          if (r && this.currentDirection === null) {
            ((this.currentDirection = Ff(o)),
              this.currentDirection !== null && i && i(this.currentDirection));
            return;
          }
          (this.updateAxis(`x`, t.point, o),
            this.updateAxis(`y`, t.point, o),
            this.visualElement.render(),
            a && a(e, t));
        },
        o = (e, t) => this.stop(e, t),
        s = () =>
          uf(
            (e) =>
              this.getAnimationState(e) === `paused` &&
              this.getAxisMotionValue(e).animation?.play(),
          ),
        { dragSnapToOrigin: c } = this.getProps();
      this.panSession = new Ad(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: a,
          onSessionEnd: o,
          resumeAnimation: s,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: c,
          contextWindow: jf(this.visualElement),
        },
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && N.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      (e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0));
      let { dragPropagation: n } = this.getProps();
      (!n &&
        this.openDragLock &&
        (this.openDragLock(), (this.openDragLock = null)),
        t && t.setActive(`whileDrag`, !1));
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Pf(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        a = this.originPoint[e] + n[e];
      (this.constraints &&
        this.constraints[e] &&
        (a = Yd(a, this.constraints[e], this.elastic[e])),
        i.set(a));
    }
    resolveConstraints() {
      let { dragConstraints: e, dragElastic: t } = this.getProps(),
        n =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : this.visualElement.projection?.layout,
        r = this.constraints;
      (e && ao(e)
        ? (this.constraints ||= this.resolveRefConstraints())
        : (this.constraints = e && n ? Zd(n.layoutBox, e) : !1),
        (this.elastic = rf(t)),
        r !== this.constraints &&
          n &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          uf((e) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(e) &&
              (this.constraints[e] = tf(n.layoutBox[e], this.constraints[e]));
          }));
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !ao(e)) return !1;
      let n = e.current;
      wa(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = Af(n, r.root, this.visualElement.getTransformPagePoint()),
        a = $d(r.layout.layoutBox, i);
      if (t) {
        let e = t(ff(a));
        ((this.hasMutatedConstraints = !!e), e && (a = df(e)));
      }
      return a;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: a,
          onDragTransitionEnd: o,
        } = this.getProps(),
        s = this.constraints || {},
        c = uf((o) => {
          if (!Pf(o, t, this.currentDirection)) return;
          let c = (s && s[o]) || {};
          a && (c = { min: 0, max: 0 });
          let l = r ? 200 : 1e6,
            u = r ? 40 : 1e7,
            d = {
              type: `inertia`,
              velocity: n ? e[o] : 0,
              bounceStiffness: l,
              bounceDamping: u,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...c,
            };
          return this.startAxisValueAnimation(o, d);
        });
      return Promise.all(c).then(o);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return (
        Cc(this.visualElement, e),
        n.start(id(e, n, 0, t, this.visualElement, !1))
      );
    }
    stopAnimation() {
      uf((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      uf((e) => this.getAxisMotionValue(e).animation?.pause());
    }
    getAnimationState(e) {
      return this.getAxisMotionValue(e).animation?.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps();
      return (
        n[t] ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      uf((t) => {
        let { drag: n } = this.getProps();
        if (!Pf(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: n, max: a } = r.layout.layoutBox[t];
          i.set(e[t] - Z(n, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!ao(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      uf((e) => {
        let t = this.getAxisMotionValue(e);
        if (t && this.constraints !== !1) {
          let n = t.get();
          r[e] = ef({ min: n, max: n }, this.constraints[e]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        uf((t) => {
          if (!Pf(t, e, null)) return;
          let n = this.getAxisMotionValue(t),
            { min: i, max: a } = this.constraints[t];
          n.set(Z(i, a, r[t]));
        }));
    }
    addListeners() {
      if (!this.visualElement.current) return;
      Mf.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Dd(e, `pointerdown`, (e) => {
          let { drag: t, dragListener: n = !0 } = this.getProps();
          t && n && this.start(e);
        }),
        n = () => {
          let { dragConstraints: e } = this.getProps();
          ao(e) &&
            e.current &&
            (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener(`measure`, n);
      (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        N.read(n));
      let a = wd(window, `resize`, () => this.scalePositionWithinConstraints()),
        o = r.addEventListener(
          `didUpdate`,
          ({ delta: e, hasLayoutChanged: t }) => {
            this.isDragging &&
              t &&
              (uf((t) => {
                let n = this.getAxisMotionValue(t);
                n &&
                  ((this.originPoint[t] += e[t].translate),
                  n.set(n.get() + e[t].translate));
              }),
              this.visualElement.render());
          },
        );
      return () => {
        (a(), t(), i(), o && o());
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: a = nf,
          dragMomentum: o = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: a,
        dragMomentum: o,
      };
    }
  };
function Pf(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ff(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var If = class extends bd {
    constructor(e) {
      (super(e),
        (this.removeGroupControls = M),
        (this.removeListeners = M),
        (this.controls = new Nf(e)));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      (e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || M));
    }
    unmount() {
      (this.removeGroupControls(), this.removeListeners());
    }
  },
  Lf = (e) => (t, n) => {
    e && N.postRender(() => e(t, n));
  },
  Rf = class extends bd {
    constructor() {
      (super(...arguments), (this.removePointerDownListener = M));
    }
    onPointerDown(e) {
      this.session = new Ad(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: jf(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Lf(e),
        onStart: Lf(t),
        onMove: n,
        onEnd: (e, t) => {
          (delete this.session, r && N.postRender(() => r(e, t)));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Dd(
        this.node.current,
        `pointerdown`,
        (e) => this.onPointerDown(e),
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      (this.removePointerDownListener(), this.session && this.session.end());
    }
  },
  zf = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Bf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Vf = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == `string`) {
        if (V.test(e)) e = parseFloat(e);
        else return e;
      }
      return `${Bf(e, t.target.x)}% ${Bf(e, t.target.y)}%`;
    },
  },
  Hf = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = cl.parse(e);
      if (i.length > 5) return r;
      let a = cl.createTransformer(e),
        o = typeof i[0] == `number` ? 0 : 1,
        s = n.x.scale * t.x,
        c = n.y.scale * t.y;
      ((i[0 + o] /= s), (i[1 + o] /= c));
      let l = Z(s, c, 0.5);
      return (
        typeof i[2 + o] == `number` && (i[2 + o] /= l),
        typeof i[3 + o] == `number` && (i[3 + o] /= l),
        a(i)
      );
    },
  },
  Uf = class extends m.Component {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      (fs(Gf),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener(`animationComplete`, () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (zf.hasEverUpdated = !0));
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        a = n.projection;
      return a
        ? ((a.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? a.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? a.promote()
              : a.relegate() ||
                N.postRender(() => {
                  let e = a.getStack();
                  (!e || !e.members.length) && this.safeToRemove();
                })),
          null)
        : null;
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        lo.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Wf(e) {
  let [t, n] = _a(),
    r = (0, m.useContext)(la);
  return (0, D.jsx)(Uf, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, m.useContext)(fo),
    isPresent: t,
    safeToRemove: n,
  });
}
var Gf = {
  borderRadius: {
    ...Vf,
    applyTo: [
      `borderTopLeftRadius`,
      `borderTopRightRadius`,
      `borderBottomLeftRadius`,
      `borderBottomRightRadius`,
    ],
  },
  borderTopLeftRadius: Vf,
  borderTopRightRadius: Vf,
  borderBottomLeftRadius: Vf,
  borderBottomRightRadius: Vf,
  boxShadow: Hf,
};
function Kf(e, t, n) {
  let r = Do(e) ? e : bc(e);
  return (r.start(id(``, r, t, n)), r.animation);
}
function qf(e) {
  return e instanceof SVGElement && e.tagName !== `svg`;
}
var Jf = (e, t) => e.depth - t.depth,
  Yf = class {
    constructor() {
      ((this.children = []), (this.isDirty = !1));
    }
    add(e) {
      (fc(this.children, e), (this.isDirty = !0));
    }
    remove(e) {
      (pc(this.children, e), (this.isDirty = !0));
    }
    forEach(e) {
      (this.isDirty && this.children.sort(Jf),
        (this.isDirty = !1),
        this.children.forEach(e));
    }
  };
function Xf(e, t) {
  let n = dc.now(),
    r = ({ timestamp: i }) => {
      let a = i - n;
      a >= t && (P(r), e(a - t));
    };
  return (N.read(r, !0), () => P(r));
}
var Zf = [`TopLeft`, `TopRight`, `BottomLeft`, `BottomRight`],
  Qf = Zf.length,
  $f = (e) => (typeof e == `string` ? parseFloat(e) : e),
  ep = (e) => typeof e == `number` || V.test(e);
function tp(e, t, n, r, i, a) {
  i
    ? ((e.opacity = Z(0, n.opacity === void 0 ? 1 : n.opacity, rp(r))),
      (e.opacityExit = Z(t.opacity === void 0 ? 1 : t.opacity, 0, ip(r))))
    : a &&
      (e.opacity = Z(
        t.opacity === void 0 ? 1 : t.opacity,
        n.opacity === void 0 ? 1 : n.opacity,
        r,
      ));
  for (let i = 0; i < Qf; i++) {
    let a = `border${Zf[i]}Radius`,
      o = np(t, a),
      s = np(n, a);
    (o !== void 0 || s !== void 0) &&
      ((o ||= 0),
      (s ||= 0),
      o === 0 || s === 0 || ep(o) === ep(s)
        ? ((e[a] = Math.max(Z($f(o), $f(s), r), 0)),
          (Vo.test(s) || Vo.test(o)) && (e[a] += `%`))
        : (e[a] = s));
  }
  (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function np(e, t) {
  return e[t] === void 0 ? e.borderRadius : e[t];
}
var rp = ap(0, 0.5, Lc),
  ip = ap(0.5, 0.95, M);
function ap(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ea(e, t, r)));
}
function op(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function sp(e, t) {
  (op(e.x, t.x), op(e.y, t.y));
}
function cp(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function lp(e, t, n, r, i) {
  return (
    (e -= t),
    (e = yf(e, 1 / n, r)),
    i !== void 0 && (e = yf(e, 1 / i, r)),
    e
  );
}
function up(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (
    (Vo.test(t) &&
      ((t = parseFloat(t)), (t = Z(o.min, o.max, t / 100) - o.min)),
    typeof t != `number`)
  )
    return;
  let s = Z(a.min, a.max, r);
  (e === a && (s -= t),
    (e.min = lp(e.min, t, n, s, i)),
    (e.max = lp(e.max, t, n, s, i)));
}
function dp(e, t, [n, r, i], a, o) {
  up(e, t[n], t[r], t[i], t.scale, a, o);
}
var fp = [`x`, `scaleX`, `originX`],
  pp = [`y`, `scaleY`, `originY`];
function mp(e, t, n, r) {
  (dp(e.x, t, fp, n ? n.x : void 0, r ? r.x : void 0),
    dp(e.y, t, pp, n ? n.y : void 0, r ? r.y : void 0));
}
function hp(e) {
  return e.translate === 0 && e.scale === 1;
}
function gp(e) {
  return hp(e.x) && hp(e.y);
}
function _p(e, t) {
  return e.min === t.min && e.max === t.max;
}
function vp(e, t) {
  return _p(e.x, t.x) && _p(e.y, t.y);
}
function yp(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function bp(e, t) {
  return yp(e.x, t.x) && yp(e.y, t.y);
}
function xp(e) {
  return Vd(e.x) / Vd(e.y);
}
function Sp(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
var Cp = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    (fc(this.members, e), e.scheduleRender());
  }
  remove(e) {
    if (
      (pc(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let e = this.members[this.members.length - 1];
      e && this.promote(e);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((t) => e === t);
    if (t === 0) return !1;
    let n;
    for (let e = t; e >= 0; e--) {
      let t = this.members[e];
      if (t.isPresent !== !1) {
        n = t;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      (n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0));
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      (t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function wp(e, t, n) {
  let r = ``,
    i = e.x.translate / t.x,
    a = e.y.translate / t.y,
    o = n?.z || 0;
  if (
    ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: e,
      rotate: t,
      rotateX: i,
      rotateY: a,
      skewX: o,
      skewY: s,
    } = n;
    (e && (r = `perspective(${e}px) ${r}`),
      t && (r += `rotate(${t}deg) `),
      i && (r += `rotateX(${i}deg) `),
      a && (r += `rotateY(${a}deg) `),
      o && (r += `skewX(${o}deg) `),
      s && (r += `skewY(${s}deg) `));
  }
  let s = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return ((s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || `none`);
}
var Tp = {
    type: `projectionFrame`,
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  Ep = typeof window < `u` && window.MotionDebug !== void 0,
  Dp = [``, `X`, `Y`, `Z`],
  Op = { visibility: `hidden` },
  kp = 1e3,
  Ap = 0;
function jp(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Mp(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  let { visualElement: t } = e.options;
  if (!t) return;
  let n = wc(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let { layout: t, layoutId: r } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, N, !(t || r));
  }
  let { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Mp(r);
}
function Np({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(e = {}, n = t?.()) {
      ((this.id = Ap++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            Ep &&
              (Tp.totalNodes =
                Tp.resolvedTargetDeltas =
                Tp.recalculatedProjection =
                  0),
            this.nodes.forEach(Ip),
            this.nodes.forEach(Up),
            this.nodes.forEach(Wp),
            this.nodes.forEach(Lp),
            Ep && window.MotionDebug.record(Tp));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = e),
        (this.root = n ? n.root || n : this),
        (this.path = n ? [...n.path, n] : []),
        (this.parent = n),
        (this.depth = n ? n.depth + 1 : 0));
      for (let e = 0; e < this.path.length; e++)
        this.path[e].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Yf());
    }
    addEventListener(e, t) {
      return (
        this.eventHandlers.has(e) || this.eventHandlers.set(e, new mc()),
        this.eventHandlers.get(e).add(t)
      );
    }
    notifyListeners(e, ...t) {
      let n = this.eventHandlers.get(e);
      n && n.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t, n = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = qf(t)), (this.instance = t));
      let { layoutId: r, layout: i, visualElement: a } = this.options;
      if (
        (a && !a.current && a.mount(t),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        n && (i || r) && (this.isLayoutDirty = !0),
        e)
      ) {
        let n,
          r = () => (this.root.updateBlockedByResize = !1);
        e(t, () => {
          ((this.root.updateBlockedByResize = !0),
            n && n(),
            (n = Xf(r, 250)),
            zf.hasAnimatedSinceResize &&
              ((zf.hasAnimatedSinceResize = !1), this.nodes.forEach(Hp)));
        });
      }
      (r && this.root.registerSharedNode(r, this),
        this.options.animate !== !1 &&
          a &&
          (r || i) &&
          this.addEventListener(
            `didUpdate`,
            ({
              delta: e,
              hasLayoutChanged: t,
              hasRelativeTargetChanged: n,
              layout: r,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              let i = this.options.transition || a.getDefaultTransition() || Zp,
                { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } =
                  a.getProps(),
                c = !this.targetLayout || !bp(this.targetLayout, r) || n,
                l = !t && n;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                l ||
                (t && (c || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(e, l));
                let t = { ...Ms(i, `layout`), onPlay: o, onComplete: s };
                ((a.shouldReduceMotion || this.options.layoutRoot) &&
                  ((t.delay = 0), (t.type = !1)),
                  this.startAnimation(t));
              } else
                (t || Hp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = r;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      let e = this.getStack();
      (e && e.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        P(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Gp),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: e } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Mp(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        ((t.shouldResetTransform = !0),
          t.updateScroll(`snapshot`),
          t.options.layoutRoot && t.willUpdate(!1));
      }
      let { layoutId: t, layout: n } = this.options;
      if (t === void 0 && !n) return;
      let r = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = r
        ? r(this.latestValues, ``)
        : void 0),
        this.updateSnapshot(),
        e && this.notifyListeners(`willUpdate`));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(zp));
        return;
      }
      (this.isUpdating || this.nodes.forEach(Bp),
        (this.isUpdating = !1),
        this.nodes.forEach(Vp),
        this.nodes.forEach(Pp),
        this.nodes.forEach(Fp),
        this.clearAllSnapshots());
      let e = dc.now();
      ((F.delta = Io(0, 1e3 / 60, e - F.timestamp)),
        (F.timestamp = e),
        (F.isProcessing = !0),
        Pa.update.process(F),
        Pa.preRender.process(F),
        Pa.render.process(F),
        (F.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), lo.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(Rp), this.sharedNodes.forEach(Kp));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        N.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      N.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      !this.snapshot && this.instance && (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
      let e = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = $()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners(`measure`, this.layout.layoutBox));
      let { visualElement: t } = this.options;
      t &&
        t.notify(
          `LayoutMeasure`,
          this.layout.layoutBox,
          e ? e.layoutBox : void 0,
        );
    }
    updateScroll(e = `measure`) {
      let t = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === e &&
          (t = !1),
        t)
      ) {
        let t = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: e,
          isRoot: t,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : t,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      let e =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        t = this.projectionDelta && !gp(this.projectionDelta),
        n = this.getTransformTemplate(),
        r = n ? n(this.latestValues, ``) : void 0,
        a = r !== this.prevTransformTemplateValue;
      e &&
        (t || gf(this.latestValues) || a) &&
        (i(this.instance, r),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(e = !0) {
      let t = this.measurePageBox(),
        n = this.removeElementScroll(t);
      return (
        e && (n = this.removeTransform(n)),
        tm(n),
        {
          animationId: this.root.animationId,
          measuredBox: t,
          layoutBox: n,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: e } = this.options;
      if (!e) return $();
      let t = e.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(rm))) {
        let { scroll: e } = this.root;
        e && (Ef(t.x, e.offset.x), Ef(t.y, e.offset.y));
      }
      return t;
    }
    removeElementScroll(e) {
      let t = $();
      if ((sp(t, e), this.scroll?.wasRoot)) return t;
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n],
          { scroll: i, options: a } = r;
        r !== this.root &&
          i &&
          a.layoutScroll &&
          (i.wasRoot && sp(t, e), Ef(t.x, i.offset.x), Ef(t.y, i.offset.y));
      }
      return t;
    }
    applyTransform(e, t = !1) {
      let n = $();
      sp(n, e);
      for (let e = 0; e < this.path.length; e++) {
        let r = this.path[e];
        (!t &&
          r.options.layoutScroll &&
          r.scroll &&
          r !== r.root &&
          Of(n, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
          gf(r.latestValues) && Of(n, r.latestValues));
      }
      return (gf(this.latestValues) && Of(n, this.latestValues), n);
    }
    removeTransform(e) {
      let t = $();
      sp(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!n.instance || !gf(n.latestValues)) continue;
        hf(n.latestValues) && n.updateSnapshot();
        let r = $();
        (sp(r, n.measurePageBox()),
          mp(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r));
      }
      return (gf(this.latestValues) && mp(t, this.latestValues), t);
    }
    setTargetDelta(e) {
      ((this.targetDelta = e),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === void 0 || e.crossfade,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== F.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(e = !1) {
      let t = this.getLead();
      ((this.isProjectionDirty ||= t.isProjectionDirty),
        (this.isTransformDirty ||= t.isTransformDirty),
        (this.isSharedProjectionDirty ||= t.isSharedProjectionDirty));
      let n = !!this.resumingFrom || this !== t;
      if (!(
        e ||
        (n && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      let { layout: r, layoutId: i } = this.options;
      if (this.layout && (r || i)) {
        if (
          ((this.resolvedRelativeTargetAt = F.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let e = this.getClosestProjectingParent();
          e && e.layout && this.animationProgress !== 1
            ? ((this.relativeParent = e),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = $()),
              (this.relativeTargetOrigin = $()),
              Jd(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                e.layout.layoutBox,
              ),
              sp(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (this.relativeTarget || this.targetDelta) {
          if (
            (this.target ||
              ((this.target = $()), (this.targetWithTransforms = $())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                Kd(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : sp(this.target, this.layout.layoutBox),
                  Sf(this.target, this.targetDelta))
                : sp(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let e = this.getClosestProjectingParent();
            e &&
            !!e.resumingFrom == !!this.resumingFrom &&
            !e.options.layoutScroll &&
            e.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = e),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = $()),
                (this.relativeTargetOrigin = $()),
                Jd(this.relativeTargetOrigin, this.target, e.target),
                sp(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Ep && Tp.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        hf(this.parent.latestValues) ||
        _f(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      let e = this.getLead(),
        t = !!this.resumingFrom || this !== e,
        n = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1),
        t &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (n = !1),
        this.resolvedRelativeTargetAt === F.timestamp && (n = !1),
        n)
      )
        return;
      let { layout: r, layoutId: i } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(r || i))
      )
        return;
      sp(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x,
        o = this.treeScale.y;
      (Tf(this.layoutCorrected, this.treeScale, this.path, t),
        e.layout &&
          !e.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((e.target = e.layout.layoutBox), (e.targetWithTransforms = $())));
      let { target: s } = e;
      if (!s) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (cp(this.prevProjectionDelta.x, this.projectionDelta.x),
          cp(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Wd(this.projectionDelta, this.layoutCorrected, s, this.latestValues),
        (this.treeScale.x !== a ||
          this.treeScale.y !== o ||
          !Sp(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Sp(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners(`projectionUpdate`, s)),
        Ep && Tp.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(e = !0) {
      var t;
      if (((t = this.options.visualElement) == null || t.scheduleRender(), e)) {
        let e = this.getStack();
        e && e.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = cf()),
        (this.projectionDelta = cf()),
        (this.projectionDeltaWithTransform = cf()));
    }
    setAnimationOrigin(e, t = !1) {
      let n = this.snapshot,
        r = n ? n.latestValues : {},
        i = { ...this.latestValues },
        a = cf();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !t));
      let o = $(),
        s =
          (n ? n.source : void 0) !==
          (this.layout ? this.layout.source : void 0),
        c = this.getStack(),
        l = !c || c.members.length <= 1,
        u = !(!s || l || this.options.crossfade !== !0 || this.path.some(Xp));
      this.animationProgress = 0;
      let d;
      ((this.mixTargetDelta = (t) => {
        let n = t / 1e3;
        (qp(a.x, e.x, n),
          qp(a.y, e.y, n),
          this.setTargetDelta(a),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Jd(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Yp(this.relativeTarget, this.relativeTargetOrigin, o, n),
            d && vp(this.relativeTarget, d) && (this.isProjectionDirty = !1),
            (d ||= $()),
            sp(d, this.relativeTarget)),
          s &&
            ((this.animationValues = i), tp(i, r, this.latestValues, n, u, l)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = n));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(e) {
      (this.notifyListeners(`animationStart`),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        (this.pendingAnimation &&= (P(this.pendingAnimation), void 0)),
        (this.pendingAnimation = N.update(() => {
          ((zf.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Kf(0, kp, {
              ...e,
              onUpdate: (t) => {
                (this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t));
              },
              onComplete: () => {
                (e.onComplete && e.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let e = this.getStack();
      (e && e.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners(`animationComplete`));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(kp),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      let e = this.getLead(),
        { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
      if (t && n && r) {
        if (
          this !== e &&
          this.layout &&
          r &&
          nm(this.options.animationType, this.layout.layoutBox, r.layoutBox)
        ) {
          n = this.target || $();
          let t = Vd(this.layout.layoutBox.x);
          ((n.x.min = e.target.x.min), (n.x.max = n.x.min + t));
          let r = Vd(this.layout.layoutBox.y);
          ((n.y.min = e.target.y.min), (n.y.max = n.y.min + r));
        }
        (sp(t, n),
          Of(t, i),
          Wd(this.projectionDeltaWithTransform, this.layoutCorrected, t, i));
      }
    }
    registerSharedNode(e, t) {
      (this.sharedNodes.has(e) || this.sharedNodes.set(e, new Cp()),
        this.sharedNodes.get(e).add(t));
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n ? n.transition : void 0,
        preserveFollowOpacity:
          n && n.shouldPreserveFollowOpacity
            ? n.shouldPreserveFollowOpacity(t)
            : void 0,
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let { layoutId: e } = this.options;
      return (e && this.getStack()?.lead) || this;
    }
    getPrevLead() {
      let { layoutId: e } = this.options;
      return e ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      let { layoutId: e } = this.options;
      if (e) return this.root.sharedNodes.get(e);
    }
    promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
      let r = this.getStack();
      (r && r.promote(this, n),
        e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        t && this.setOptions({ transition: t }));
    }
    relegate() {
      let e = this.getStack();
      return e ? e.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: e } = this.options;
      if (!e) return;
      let t = !1,
        { latestValues: n } = e;
      if (
        ((n.z ||
          n.rotate ||
          n.rotateX ||
          n.rotateY ||
          n.rotateZ ||
          n.skewX ||
          n.skewY) &&
          (t = !0),
        !t)
      )
        return;
      let r = {};
      n.z && jp(`z`, e, r, this.animationValues);
      for (let t = 0; t < Dp.length; t++)
        (jp(`rotate${Dp[t]}`, e, r, this.animationValues),
          jp(`skew${Dp[t]}`, e, r, this.animationValues));
      e.render();
      for (let t in r)
        (e.setStaticValue(t, r[t]),
          this.animationValues && (this.animationValues[t] = r[t]));
      e.scheduleRender();
    }
    getProjectionStyles(e) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Op;
      let t = { visibility: `` },
        n = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (t.opacity = ``),
          (t.pointerEvents = Oo(e?.pointerEvents) || ``),
          (t.transform = n ? n(this.latestValues, ``) : `none`),
          t
        );
      let r = this.getLead();
      if (!this.projectionDelta || !this.layout || !r.target) {
        let t = {};
        return (
          this.options.layoutId &&
            ((t.opacity =
              this.latestValues.opacity === void 0
                ? 1
                : this.latestValues.opacity),
            (t.pointerEvents = Oo(e?.pointerEvents) || ``)),
          this.hasProjected &&
            !gf(this.latestValues) &&
            ((t.transform = n ? n({}, ``) : `none`), (this.hasProjected = !1)),
          t
        );
      }
      let i = r.animationValues || r.latestValues;
      (this.applyTransformsToTarget(),
        (t.transform = wp(
          this.projectionDeltaWithTransform,
          this.treeScale,
          i,
        )),
        n && (t.transform = n(i, t.transform)));
      let { x: a, y: o } = this.projectionDelta;
      ((t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`),
        (t.opacity = r.animationValues
          ? r === this
            ? (i.opacity ?? this.latestValues.opacity ?? 1)
            : this.preserveOpacity
              ? this.latestValues.opacity
              : i.opacityExit
          : r === this
            ? i.opacity === void 0
              ? ``
              : i.opacity
            : i.opacityExit === void 0
              ? 0
              : i.opacityExit));
      for (let e in ds) {
        if (i[e] === void 0) continue;
        let { correct: n, applyTo: a } = ds[e],
          o = t.transform === `none` ? i[e] : n(i[e], r);
        if (a) {
          let e = a.length;
          for (let n = 0; n < e; n++) t[a[n]] = o;
        } else t[e] = o;
      }
      return (
        this.options.layoutId &&
          (t.pointerEvents = r === this ? Oo(e?.pointerEvents) || `` : `none`),
        t
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((e) => e.currentAnimation?.stop()),
        this.root.nodes.forEach(zp),
        this.root.sharedNodes.clear());
    }
  };
}
function Pp(e) {
  e.updateLayout();
}
function Fp(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let { layoutBox: n, measuredBox: r } = e.layout,
      { animationType: i } = e.options,
      a = t.source !== e.layout.source;
    i === `size`
      ? uf((e) => {
          let r = a ? t.measuredBox[e] : t.layoutBox[e],
            i = Vd(r);
          ((r.min = n[e].min), (r.max = r.min + i));
        })
      : nm(i, t.layoutBox, n) &&
        uf((r) => {
          let i = a ? t.measuredBox[r] : t.layoutBox[r],
            o = Vd(n[r]);
          ((i.max = i.min + o),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[r].max = e.relativeTarget[r].min + o)));
        });
    let o = cf();
    Wd(o, n, t.layoutBox);
    let s = cf();
    a ? Wd(s, e.applyTransform(r, !0), t.measuredBox) : Wd(s, n, t.layoutBox);
    let c = !gp(o),
      l = !1;
    if (!e.resumeFrom) {
      let r = e.getClosestProjectingParent();
      if (r && !r.resumeFrom) {
        let { snapshot: i, layout: a } = r;
        if (i && a) {
          let o = $();
          Jd(o, t.layoutBox, i.layoutBox);
          let s = $();
          (Jd(s, n, a.layoutBox),
            bp(o, s) || (l = !0),
            r.options.layoutRoot &&
              ((e.relativeTarget = s),
              (e.relativeTargetOrigin = o),
              (e.relativeParent = r)));
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: s,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: l,
    });
  } else if (e.isLead()) {
    let { onExitComplete: t } = e.options;
    t && t();
  }
  e.options.transition = void 0;
}
function Ip(e) {
  (Ep && Tp.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      (e.isSharedProjectionDirty ||= !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
      (e.isTransformDirty ||= e.parent.isTransformDirty)));
}
function Lp(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Rp(e) {
  e.clearSnapshot();
}
function zp(e) {
  e.clearMeasurements();
}
function Bp(e) {
  e.isLayoutDirty = !1;
}
function Vp(e) {
  let { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify(`BeforeLayoutMeasure`),
    e.resetTransform());
}
function Hp(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function Up(e) {
  e.resolveTargetDelta();
}
function Wp(e) {
  e.calcProjection();
}
function Gp(e) {
  e.resetSkewAndRotation();
}
function Kp(e) {
  e.removeLeadSnapshot();
}
function qp(e, t, n) {
  ((e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Jp(e, t, n, r) {
  ((e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r)));
}
function Yp(e, t, n, r) {
  (Jp(e.x, t.x, n.x, r), Jp(e.y, t.y, n.y, r));
}
function Xp(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Zp = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Qp = (e) =>
    typeof navigator < `u` &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  $p = Qp(`applewebkit/`) && !Qp(`chrome/`) ? Math.round : M;
function em(e) {
  ((e.min = $p(e.min)), (e.max = $p(e.max)));
}
function tm(e) {
  (em(e.x), em(e.y));
}
function nm(e, t, n) {
  return (
    e === `position` || (e === `preserve-aspect` && !Hd(xp(t), xp(n), 0.2))
  );
}
function rm(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
var im = Np({
    attachResizeListener: (e, t) => wd(e, `resize`, t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  am = { current: void 0 },
  om = Np({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!am.current) {
        let e = new im({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (am.current = e));
      }
      return am.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t === void 0 ? `none` : t;
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === `fixed`,
  }),
  sm = {
    pan: { Feature: Rf },
    drag: { Feature: If, ProjectionNode: om, MeasureLayout: Wf },
  };
function cm(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && N.postRender(() => i(t, Td(t)));
}
var lm = class extends bd {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = Xs(
          e,
          (e) => (cm(this.node, e, `Start`), (e) => cm(this.node, e, `End`)),
        ));
    }
    unmount() {}
  },
  um = class extends bd {
    constructor() {
      (super(...arguments), (this.isActive = !1));
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(`:focus-visible`);
      } catch {
        e = !0;
      }
      e &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !0),
        (this.isActive = !0));
    }
    onBlur() {
      this.isActive &&
        this.node.animationState &&
        (this.node.animationState.setActive(`whileFocus`, !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = nu(
        wd(this.node.current, `focus`, () => this.onFocus()),
        wd(this.node.current, `blur`, () => this.onBlur()),
      );
    }
    unmount() {}
  };
function dm(e, t, n) {
  let { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && N.postRender(() => i(t, Td(t)));
}
var fm = class extends bd {
    mount() {
      let { current: e } = this.node;
      e &&
        (this.unmount = oc(
          e,
          (e) => (
            dm(this.node, e, `Start`),
            (e, { success: t }) => dm(this.node, e, t ? `End` : `Cancel`)
          ),
          { useGlobalTarget: this.node.props.globalTapTarget },
        ));
    }
    unmount() {}
  },
  pm = new WeakMap(),
  mm = new WeakMap(),
  hm = (e) => {
    let t = pm.get(e.target);
    t && t(e);
  },
  gm = (e) => {
    e.forEach(hm);
  };
function _m({ root: e, ...t }) {
  let n = e || document;
  mm.has(n) || mm.set(n, {});
  let r = mm.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(gm, { root: e, ...t })),
    r[i]
  );
}
function vm(e, t, n) {
  let r = _m(t);
  return (
    pm.set(e, n),
    r.observe(e),
    () => {
      (pm.delete(e), r.unobserve(e));
    }
  );
}
var ym = { some: 0, all: 1 },
  bm = class extends bd {
    constructor() {
      (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = `some`, once: i } = e,
        a = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == `number` ? r : ym[r],
        };
      return vm(this.node.current, a, (e) => {
        let { isIntersecting: t } = e;
        if (
          this.isInView === t ||
          ((this.isInView = t), i && !t && this.hasEnteredView)
        )
          return;
        (t && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive(`whileInView`, t));
        let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
          a = t ? n : r;
        a && a(e);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > `u`) return;
      let { props: e, prevProps: t } = this.node;
      [`amount`, `margin`, `root`].some(xm(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function xm({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Sm = {
    inView: { Feature: bm },
    tap: { Feature: fm },
    focus: { Feature: um },
    hover: { Feature: lm },
  },
  Cm = { layout: { ProjectionNode: om, MeasureLayout: Wf } },
  wm = { current: null },
  Tm = { current: !1 };
function Em() {
  if (((Tm.current = !0), ba)) {
    if (window.matchMedia) {
      let e = window.matchMedia(`(prefers-reduced-motion)`),
        t = () => (wm.current = e.matches);
      (e.addListener(t), t());
    } else wm.current = !1;
  }
}
var Dm = [...Rl, J, cl],
  Om = (e) => Dm.find(Ll(e)),
  km = new WeakMap();
function Am(e, t, n) {
  for (let r in t) {
    let i = t[r],
      a = n[r];
    if (Do(i)) e.addValue(r, i);
    else if (Do(a)) e.addValue(r, bc(i, { owner: e }));
    else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, bc(t === void 0 ? i : t, { owner: e }));
      }
    }
  }
  for (let r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
var jm = [
    `AnimationStart`,
    `AnimationComplete`,
    `Update`,
    `BeforeLayoutMeasure`,
    `LayoutMeasure`,
    `LayoutAnimationStart`,
    `LayoutAnimationComplete`,
  ],
  Mm = class {
    scrapeMotionValuesFromProps(e, t, n) {
      return {};
    }
    constructor(
      {
        parent: e,
        props: t,
        presenceContext: n,
        reducedMotionConfig: r,
        blockInitialAnimation: i,
        visualState: a,
      },
      o = {},
    ) {
      ((this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.KeyframeResolver = jl),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify(`Update`, this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection,
            ));
        }),
        (this.renderScheduledAt = 0),
        (this.scheduleRender = () => {
          let e = dc.now();
          this.renderScheduledAt < e &&
            ((this.renderScheduledAt = e), N.render(this.render, !1, !0));
        }));
      let { latestValues: s, renderState: c, onUpdate: l } = a;
      ((this.onUpdate = l),
        (this.latestValues = s),
        (this.baseTarget = { ...s }),
        (this.initialValues = t.initial ? { ...s } : {}),
        (this.renderState = c),
        (this.parent = e),
        (this.props = t),
        (this.presenceContext = n),
        (this.depth = e ? e.depth + 1 : 0),
        (this.reducedMotionConfig = r),
        (this.options = o),
        (this.blockInitialAnimation = !!i),
        (this.isControllingVariants = $a(t)),
        (this.isVariantNode = eo(t)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(e && e.current)));
      let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
        t,
        {},
        this,
      );
      for (let e in d) {
        let t = d[e];
        s[e] !== void 0 && Do(t) && t.set(s[e], !1);
      }
    }
    mount(e) {
      ((this.current = e),
        km.set(e, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(e),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
        Tm.current || Em(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === `never`
            ? !1
            : this.reducedMotionConfig === `always` || wm.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext));
    }
    unmount() {
      (km.delete(this.current),
        this.projection && this.projection.unmount(),
        P(this.notifyUpdate),
        P(this.render),
        this.valueSubscriptions.forEach((e) => e()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this));
      for (let e in this.events) this.events[e].clear();
      for (let e in this.features) {
        let t = this.features[e];
        t && (t.unmount(), (t.isMounted = !1));
      }
      this.current = null;
    }
    bindToMotionValue(e, t) {
      this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
      let n = Mo.has(e),
        r = t.on(`change`, (t) => {
          ((this.latestValues[e] = t),
            this.props.onUpdate && N.preRender(this.notifyUpdate),
            n && this.projection && (this.projection.isTransformDirty = !0));
        }),
        i = t.on(`renderRequest`, this.scheduleRender),
        a;
      (window.MotionCheckAppearSync &&
        (a = window.MotionCheckAppearSync(this, e, t)),
        this.valueSubscriptions.set(e, () => {
          (r(), i(), a && a(), t.owner && t.stop());
        }));
    }
    sortNodePosition(e) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== e.type
        ? 0
        : this.sortInstanceNodePosition(this.current, e.current);
    }
    updateFeatures() {
      let e = `animation`;
      for (e in La) {
        let t = La[e];
        if (!t) continue;
        let { isEnabled: n, Feature: r } = t;
        if (
          (!this.features[e] &&
            r &&
            n(this.props) &&
            (this.features[e] = new r(this)),
          this.features[e])
        ) {
          let t = this.features[e];
          t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : $();
    }
    getStaticValue(e) {
      return this.latestValues[e];
    }
    setStaticValue(e, t) {
      this.latestValues[e] = t;
    }
    update(e, t) {
      ((e.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = e),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = t));
      for (let t = 0; t < jm.length; t++) {
        let n = jm[t];
        this.propEventSubscriptions[n] &&
          (this.propEventSubscriptions[n](),
          delete this.propEventSubscriptions[n]);
        let r = e[`on` + n];
        r && (this.propEventSubscriptions[n] = this.on(n, r));
      }
      ((this.prevMotionValues = Am(
        this,
        this.scrapeMotionValuesFromProps(e, this.prevProps, this),
        this.prevMotionValues,
      )),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this));
    }
    getProps() {
      return this.props;
    }
    getVariant(e) {
      return this.props.variants ? this.props.variants[e] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
          ? this.parent.getClosestVariantNode()
          : void 0;
    }
    addVariantChild(e) {
      let t = this.getClosestVariantNode();
      if (t)
        return (
          t.variantChildren && t.variantChildren.add(e),
          () => t.variantChildren.delete(e)
        );
    }
    addValue(e, t) {
      let n = this.values.get(e);
      t !== n &&
        (n && this.removeValue(e),
        this.bindToMotionValue(e, t),
        this.values.set(e, t),
        (this.latestValues[e] = t.get()));
    }
    removeValue(e) {
      this.values.delete(e);
      let t = this.valueSubscriptions.get(e);
      (t && (t(), this.valueSubscriptions.delete(e)),
        delete this.latestValues[e],
        this.removeValueFromRenderState(e, this.renderState));
    }
    hasValue(e) {
      return this.values.has(e);
    }
    getValue(e, t) {
      if (this.props.values && this.props.values[e])
        return this.props.values[e];
      let n = this.values.get(e);
      return (
        n === void 0 &&
          t !== void 0 &&
          ((n = bc(t === null ? void 0 : t, { owner: this })),
          this.addValue(e, n)),
        n
      );
    }
    readValue(e, t) {
      let n =
        this.latestValues[e] !== void 0 || !this.current
          ? this.latestValues[e]
          : (this.getBaseTargetFromProps(this.props, e) ??
            this.readValueFromInstance(this.current, e, this.options));
      return (
        n != null &&
          (typeof n == `string` && (Ml(n) || zc(n))
            ? (n = parseFloat(n))
            : !Om(n) && cl.test(t) && (n = hl(e, t)),
          this.setBaseTarget(e, Do(n) ? n.get() : n)),
        Do(n) ? n.get() : n
      );
    }
    setBaseTarget(e, t) {
      this.baseTarget[e] = t;
    }
    getBaseTarget(e) {
      let { initial: t } = this.props,
        n;
      if (typeof t == `string` || typeof t == `object`) {
        let r = Co(this.props, t, this.presenceContext?.custom);
        r && (n = r[e]);
      }
      if (t && n !== void 0) return n;
      let r = this.getBaseTargetFromProps(this.props, e);
      return r !== void 0 && !Do(r)
        ? r
        : this.initialValues[e] !== void 0 && n === void 0
          ? void 0
          : this.baseTarget[e];
    }
    on(e, t) {
      return (
        this.events[e] || (this.events[e] = new mc()),
        this.events[e].add(t)
      );
    }
    notify(e, ...t) {
      this.events[e] && this.events[e].notify(...t);
    }
  },
  Nm = class extends Mm {
    constructor() {
      (super(...arguments), (this.KeyframeResolver = Bl));
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      (delete t[e], delete n[e]);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Do(e) &&
        (this.childSubscription = e.on(`change`, (e) => {
          this.current && (this.current.textContent = `${e}`);
        }));
    }
  };
function Pm(e) {
  return window.getComputedStyle(e);
}
var Fm = class extends Nm {
    constructor() {
      (super(...arguments), (this.type = `html`), (this.renderInstance = cs));
    }
    readValueFromInstance(e, t) {
      if (Mo.has(t)) {
        let e = ml(t);
        return (e && e.default) || 0;
      }
      {
        let n = Pm(e),
          r = (Po(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == `string` ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return kf(e, t);
    }
    build(e, t, n) {
      Qo(e, t, n.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return ms(e, t, n);
    }
  },
  Im = class extends Nm {
    constructor() {
      (super(...arguments),
        (this.type = `svg`),
        (this.isSVGTag = !1),
        (this.measureInstanceViewportBox = $));
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (Mo.has(t)) {
        let e = ml(t);
        return (e && e.default) || 0;
      }
      return ((t = ls.has(t) ? t : so(t)), e.getAttribute(t));
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return hs(e, t, n);
    }
    build(e, t, n) {
      is(e, t, this.isSVGTag, n.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      us(e, t, n, r);
    }
    mount(e) {
      ((this.isSVGTag = ss(e.tagName)), super.mount(e));
    }
  },
  Lm = (e, t) =>
    xo(e) ? new Im(t) : new Fm(t, { allowProjection: e !== m.Fragment }),
  Rm = qa(Es({ ...Cd, ...Sm, ...sm, ...Cm }, Lm)),
  zm = [
    { path: `/`, label: `Ana Sayfa` },
    { path: `/ekip`, label: `Ekip` },
    { path: `/yayinlar`, label: `Yayınlar` },
    { path: `/projeler`, label: `Projeler` },
    { path: `/portfolyolar`, label: `Portfolyolar` },
    { path: `/duyurular`, label: `Haberler` },
    { path: `/etkinlikler`, label: `Etkinlikler` },
  ];
function Bm() {
  let { isAdmin: e } = ca(),
    { pathname: t } = gt(),
    [n, r] = (0, m.useState)(!1),
    [i, a] = (0, m.useState)(!1);
  return (
    (0, m.useEffect)(() => {
      let e = () => a(window.scrollY > 24);
      return (
        e(),
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, D.jsxs)(D.Fragment, {
      children: [
        (0, D.jsx)(`div`, {
          className: `bg-navy text-white/50 text-xs transition-all duration-300
                       ${i ? `max-h-0 py-0 overflow-hidden opacity-0` : `py-1.5 opacity-100`}`,
          children: (0, D.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 flex items-center justify-between gap-4`,
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex items-center gap-4`,
                children: [
                  (0, D.jsxs)(`a`, {
                    href: `https://bf.sakarya.edu.tr/`,
                    target: `_blank`,
                    rel: `noopener`,
                    className: `hover:text-cyan transition-colors inline-flex items-center gap-1.5`,
                    children: [
                      (0, D.jsx)(`i`, {
                        className: `fa fa-building-columns text-[10px]`,
                      }),
                      ` SAÜ BF`,
                    ],
                  }),
                  (0, D.jsxs)(`a`, {
                    href: `https://sargem.sakarya.edu.tr/tr`,
                    target: `_blank`,
                    rel: `noopener`,
                    className: `hover:text-cyan transition-colors inline-flex items-center gap-1.5`,
                    children: [
                      (0, D.jsx)(`i`, { className: `fa fa-flask text-[10px]` }),
                      ` SARGEM`,
                    ],
                  }),
                ],
              }),
              (0, D.jsxs)(`a`, {
                href: `mailto:cybersenselab@gmail.com`,
                className: `hover:text-cyan transition-colors inline-flex items-center gap-1.5`,
                children: [
                  (0, D.jsx)(`i`, { className: `fa fa-envelope text-[10px]` }),
                  (0, D.jsx)(`span`, {
                    className: `hidden sm:inline`,
                    children: `cybersenselab@gmail.com`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, D.jsx)(`nav`, {
          className: `sticky top-0 z-50 transition-all duration-300
                       ${i ? `bg-navy-mid/90 backdrop-blur-md shadow-lg shadow-black/20` : `bg-navy-mid`}`,
          children: (0, D.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4`,
            children: [
              (0, D.jsxs)(`div`, {
                className: `flex items-center justify-between h-14`,
                children: [
                  (0, D.jsx)(Pn, {
                    to: `/`,
                    className: `flex items-center shrink-0 group`,
                    children: (0, D.jsx)(`img`, {
                      src: `/logos/cybersense-laboratory.png`,
                      alt: `CyberSense Laboratory`,
                      className: `h-7 sm:h-8 w-auto transition-transform duration-300 group-hover:scale-105`,
                    }),
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `hidden lg:flex items-center gap-1`,
                    children: [
                      zm.map((e) =>
                        (0, D.jsxs)(
                          Pn,
                          {
                            to: e.path,
                            className: `relative px-3 py-2 text-[13px] font-medium rounded-md transition-colors
                    ${t === e.path || (e.path === `/portfolyolar` && t.startsWith(`/portfolyolar/`)) ? `text-cyan` : `text-white/75 hover:text-white`}`,
                            children: [
                              e.label,
                              (t === e.path ||
                                (e.path === `/portfolyolar` &&
                                  t.startsWith(`/portfolyolar/`))) &&
                                (0, D.jsx)(`span`, {
                                  className: `absolute -bottom-0.5 left-3 right-3 h-0.5 bg-cyan rounded-full`,
                                }),
                            ],
                          },
                          e.path,
                        ),
                      ),
                      e &&
                        (0, D.jsx)(Pn, {
                          to: `/admin`,
                          className: `relative px-3 py-2 text-[13px] font-medium rounded-md transition-colors
                    ${t === `/admin` ? `text-cyan` : `text-white/75 hover:text-white`}`,
                          children: `Yönetim`,
                        }),
                    ],
                  }),
                  (0, D.jsxs)(`div`, {
                    className: `flex items-center gap-3`,
                    children: [
                      (0, D.jsxs)(Pn, {
                        to: `/iletisim`,
                        className: `inline-flex items-center gap-1.5 px-4 py-2 rounded-lg
                           bg-cyan text-navy text-xs font-semibold
                           hover:bg-cyan-dim hover:text-white transition-colors`,
                        children: [
                          (0, D.jsx)(`i`, {
                            className: `fa fa-envelope text-[10px]`,
                          }),
                          `İletişim`,
                        ],
                      }),
                      (0, D.jsx)(`button`, {
                        onClick: () => r(!n),
                        className: `lg:hidden text-white/80 hover:text-cyan p-1`,
                        "aria-label": `Menü`,
                        children: (0, D.jsx)(`i`, {
                          className: `fa ${n ? `fa-times` : `fa-bars`} text-lg`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              n &&
                (0, D.jsxs)(`div`, {
                  className: `lg:hidden border-t border-white/5 pb-3`,
                  children: [
                    zm.map((e) =>
                      (0, D.jsx)(
                        Pn,
                        {
                          to: e.path,
                          onClick: () => r(!1),
                          className: `block px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                    ${t === e.path || (e.path === `/portfolyolar` && t.startsWith(`/portfolyolar/`)) ? `text-cyan` : `text-white/75 hover:text-white`}`,
                          children: e.label,
                        },
                        e.path,
                      ),
                    ),
                    e &&
                      (0, D.jsx)(Pn, {
                        to: `/admin`,
                        onClick: () => r(!1),
                        className: `block px-3 py-2.5 text-sm font-medium rounded-md transition-colors
                    ${t === `/admin` ? `text-cyan` : `text-white/75 hover:text-white`}`,
                        children: `Yönetim`,
                      }),
                  ],
                }),
            ],
          }),
        }),
      ],
    })
  );
}
var Vm = {
  lab: [
    { to: `/#research`, label: `Araştırma` },
    { to: `/ekip`, label: `Ekip` },
    { to: `/yayinlar`, label: `Yayınlar` },
    { to: `/projeler`, label: `Projeler` },
    { to: `/portfolyolar`, label: `Portfolyolar` },
    { to: `/duyurular`, label: `Haberler` },
    { to: `/etkinlikler`, label: `Etkinlikler` },
  ],
  links: [
    { href: `https://cs.sakarya.edu.tr/`, label: `SAÜ CS` },
    { href: `https://seng.sakarya.edu.tr/`, label: `SAÜ Yazılım` },
    { href: `https://www.sakarya.edu.tr/`, label: `SAÜ` },
    { href: `https://tubitak.gov.tr/`, label: `TÜBİTAK` },
    { href: `https://sargem.sakarya.edu.tr/tr`, label: `SARGEM` },
    {
      href: `https://scholar.google.com/citations?user=aF8AJScAAAAJ&hl=en`,
      label: `Google Scholar`,
    },
  ],
};
function Hm() {
  return (0, D.jsx)(`footer`, {
    className: `bg-navy text-white/60`,
    children: (0, D.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 py-12`,
      children: [
        (0, D.jsxs)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-3 gap-8`,
          children: [
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsxs)(`div`, {
                  className: `flex items-center gap-3 mb-3`,
                  children: [
                    (0, D.jsx)(`img`, {
                      src: `/logos/cybersense-shield.png`,
                      alt: `CyberSense Laboratuvarı logosu`,
                      className: `w-11 h-11 rounded-xl object-contain`,
                    }),
                    (0, D.jsxs)(`div`, {
                      children: [
                        (0, D.jsx)(`div`, {
                          className: `text-white font-bold text-sm`,
                          children: `CyberSense Laboratuvarı`,
                        }),
                        (0, D.jsx)(`div`, {
                          className: `text-white/35 text-xs`,
                          children: `SARGEM · Sakarya Üniversitesi`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, D.jsx)(`p`, {
                  className: `text-sm leading-relaxed text-white/45`,
                  children: `Sakarya Üniversitesi SARGEM bünyesinde faaliyet gösteren, siber güvenlik, yapay zeka, IoT ve MIoT alanlarında araştırmalar yürüten akademik laboratuvar.`,
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`h4`, {
                  className: `text-white font-semibold text-sm mb-3 uppercase tracking-wide`,
                  children: `Laboratuvar`,
                }),
                (0, D.jsx)(`ul`, {
                  className: `space-y-2`,
                  children: Vm.lab.map((e) =>
                    (0, D.jsx)(
                      `li`,
                      {
                        children: (0, D.jsxs)(Pn, {
                          to: e.to,
                          className: `text-sm hover:text-cyan transition-colors inline-flex items-center gap-2`,
                          children: [
                            (0, D.jsx)(`i`, {
                              className: `fa fa-angle-right text-[10px] text-cyan/60`,
                            }),
                            ` `,
                            e.label,
                          ],
                        }),
                      },
                      e.to,
                    ),
                  ),
                }),
              ],
            }),
            (0, D.jsxs)(`div`, {
              children: [
                (0, D.jsx)(`h4`, {
                  className: `text-white font-semibold text-sm mb-3 uppercase tracking-wide`,
                  children: `Bağlantılar`,
                }),
                (0, D.jsx)(`ul`, {
                  className: `space-y-2`,
                  children: Vm.links.map((e) =>
                    (0, D.jsx)(
                      `li`,
                      {
                        children: (0, D.jsxs)(`a`, {
                          href: e.href,
                          target: `_blank`,
                          rel: `noopener`,
                          className: `text-sm hover:text-cyan transition-colors inline-flex items-center gap-2`,
                          children: [
                            (0, D.jsx)(`i`, {
                              className: `fa fa-angle-right text-[10px] text-cyan/60`,
                            }),
                            ` `,
                            e.label,
                          ],
                        }),
                      },
                      e.href,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        (0, D.jsxs)(`div`, {
          className: `border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs`,
          children: [
            (0, D.jsxs)(`p`, {
              children: [
                `© 2026 `,
                (0, D.jsx)(`span`, {
                  className: `text-cyan font-medium`,
                  children: `SARGEM CyberSense Laboratuvarı`,
                }),
                ` · Sakarya Üniversitesi`,
              ],
            }),
            (0, D.jsxs)(`div`, {
              className: `flex items-center gap-4`,
              children: [
                (0, D.jsx)(`a`, {
                  href: `https://cs.sakarya.edu.tr/`,
                  target: `_blank`,
                  rel: `noopener`,
                  className: `hover:text-cyan transition-colors`,
                  children: `Bilgisayar Mühendisliği`,
                }),
                (0, D.jsx)(`span`, {
                  className: `text-white/20`,
                  children: `·`,
                }),
                (0, D.jsx)(Pn, {
                  to: `/gizlilik-ve-kvkk`,
                  className: `hover:text-cyan transition-colors`,
                  children: `Gizlilik ve KVKK`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Um() {
  let [e, t] = (0, m.useState)(!1);
  return (
    (0, m.useEffect)(() => {
      let e = () => t(window.scrollY > 320);
      return (
        window.addEventListener(`scroll`, e, { passive: !0 }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
    (0, D.jsx)(`button`, {
      onClick: () => window.scrollTo({ top: 0, behavior: `smooth` }),
      className: `fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full
                  bg-cyan text-navy shadow-lg flex items-center justify-center
                  transition-all duration-300 hover:scale-110
                  ${e ? `opacity-100 translate-y-0` : `opacity-0 translate-y-4 pointer-events-none`}`,
      "aria-label": `Yukarı çık`,
      children: (0, D.jsx)(`i`, { className: `fa fa-chevron-up text-sm` }),
    })
  );
}
function Wm({ className: e = `` }) {
  return (0, D.jsx)(`div`, {
    className: `bg-gray-200/70 animate-pulse rounded-lg ${e}`,
  });
}
function Gm() {
  return (0, D.jsxs)(`div`, {
    className: `bg-white border border-gray-100 rounded-xl overflow-hidden`,
    children: [
      (0, D.jsx)(Wm, { className: `h-40 rounded-none` }),
      (0, D.jsxs)(`div`, {
        className: `p-5 space-y-3`,
        children: [
          (0, D.jsx)(Wm, { className: `h-4 w-3/4` }),
          (0, D.jsx)(Wm, { className: `h-3 w-full` }),
          (0, D.jsx)(Wm, { className: `h-3 w-5/6` }),
        ],
      }),
    ],
  });
}
function Km() {
  return (0, D.jsxs)(`div`, {
    className: `bg-white border border-gray-100 rounded-xl p-5 flex gap-5`,
    children: [
      (0, D.jsx)(Wm, { className: `w-12 h-8 shrink-0` }),
      (0, D.jsxs)(`div`, {
        className: `flex-1 space-y-2.5`,
        children: [
          (0, D.jsx)(Wm, { className: `h-4 w-2/3` }),
          (0, D.jsx)(Wm, { className: `h-3 w-1/2` }),
          (0, D.jsx)(Wm, { className: `h-3 w-1/3` }),
        ],
      }),
    ],
  });
}
function qm() {
  return (0, D.jsxs)(`div`, {
    className: `max-w-7xl mx-auto px-4 py-16 space-y-4`,
    children: [
      (0, D.jsx)(Wm, { className: `h-10 w-64` }),
      (0, D.jsx)(Wm, { className: `h-4 w-96 max-w-full` }),
      (0, D.jsxs)(`div`, {
        className: `grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`,
        children: [
          (0, D.jsx)(Wm, { className: `h-56` }),
          (0, D.jsx)(Wm, { className: `h-56` }),
          (0, D.jsx)(Wm, { className: `h-56` }),
        ],
      }),
    ],
  });
}
function Jm() {
  let e = gt();
  return (0, D.jsxs)(`div`, {
    className: `flex flex-col min-h-screen`,
    children: [
      (0, D.jsx)(Bm, {}),
      (0, D.jsx)(`main`, {
        className: `flex-1`,
        children: (0, D.jsx)(m.Suspense, {
          fallback: (0, D.jsx)(qm, {}),
          children: (0, D.jsx)(Sa, {
            mode: `wait`,
            children: (0, D.jsx)(
              Rm.div,
              {
                initial: { opacity: 0, y: 18 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -12 },
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                children: (0, D.jsx)(Wt, {}),
              },
              e.pathname,
            ),
          }),
        }),
      }),
      (0, D.jsx)(Hm, {}),
      (0, D.jsx)(Um, {}),
    ],
  });
}
var Ym = (0, m.lazy)(() =>
    o(
      () => import(`./Home.js`),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    ),
  ),
  Xm = (0, m.lazy)(() =>
    o(
      () => import(`./Team.js`),
      __vite__mapDeps([12, 1, 6, 2, 3, 7, 8, 10]),
    ),
  ),
  Zm = (0, m.lazy)(() =>
    o(
      () => import(`./Projects.js`),
      __vite__mapDeps([13, 1, 6, 2, 3, 4, 7, 8, 14]),
    ),
  ),
  Qm = (0, m.lazy)(() =>
    o(
      () => import(`./ResearchProjectDetails.js`),
      __vite__mapDeps([15, 1, 2, 3, 8, 16, 6]),
    ),
  ),
  $m = (0, m.lazy)(() =>
    o(
      () => import(`./InternshipProjectDetail.js`),
      __vite__mapDeps([17, 1, 8, 16, 6, 14, 3]),
    ),
  ),
  eh = (0, m.lazy)(() =>
    o(
      () => import(`./Publications.js`),
      __vite__mapDeps([18, 1, 2, 3, 7, 8, 11]),
    ),
  ),
  th = (0, m.lazy)(() =>
    o(
      () => import(`./Announcements.js`),
      __vite__mapDeps([19, 1, 6, 2, 3, 5, 4, 7, 8]),
    ),
  ),
  nh = (0, m.lazy)(() =>
    o(
      () => import(`./Events.js`),
      __vite__mapDeps([20, 1, 6, 2, 3, 7, 8, 9]),
    ),
  ),
  rh = (0, m.lazy)(() =>
    o(
      () => import(`./Contact.js`),
      __vite__mapDeps([21, 1, 2, 3]),
    ),
  ),
  ih = (0, m.lazy)(() =>
    o(
      () => import(`./Privacy.js`),
      __vite__mapDeps([22, 1, 2, 3]),
    ),
  ),
  ah = (0, m.lazy)(() =>
    o(
      () => import(`./Login.js`),
      __vite__mapDeps([23, 1]),
    ),
  ),
  oh = (0, m.lazy)(() =>
    o(
      () => import(`./Admin.js`),
      __vite__mapDeps([24, 1, 6]),
    ),
  );
var CyberPortfolios = (0, m.lazy)(() => import(`./Portfolios.js`));
function sh() {
  return (0, D.jsx)(qt, {
    children: (0, D.jsxs)(Gt, {
      element: (0, D.jsx)(Jm, {}),
      children: [
        (0, D.jsx)(Gt, { path: `/`, element: (0, D.jsx)(Ym, {}) }),
        (0, D.jsx)(Gt, { path: `/ekip`, element: (0, D.jsx)(Xm, {}) }),
        (0, D.jsx)(Gt, { path: `/projeler`, element: (0, D.jsx)(Zm, {}) }),
        (0, D.jsx)(Gt, {
          path: `/portfolyolar`,
          element: (0, D.jsx)(CyberPortfolios, {}),
        }),
        (0, D.jsx)(Gt, {
          path: `/portfolyolar/:id`,
          element: (0, D.jsx)(CyberPortfolios, {}),
        }),
        (0, D.jsx)(Gt, {
          path: `/projeler/arastirma/:id`,
          element: (0, D.jsx)(Qm, {}),
        }),
        (0, D.jsx)(Gt, {
          path: `/projeler/staj/:slug`,
          element: (0, D.jsx)($m, {}),
        }),
        (0, D.jsx)(Gt, { path: `/yayinlar`, element: (0, D.jsx)(eh, {}) }),
        (0, D.jsx)(Gt, { path: `/duyurular`, element: (0, D.jsx)(th, {}) }),
        (0, D.jsx)(Gt, { path: `/etkinlikler`, element: (0, D.jsx)(nh, {}) }),
        (0, D.jsx)(Gt, { path: `/iletisim`, element: (0, D.jsx)(rh, {}) }),
        (0, D.jsx)(Gt, {
          path: `/gizlilik-ve-kvkk`,
          element: (0, D.jsx)(ih, {}),
        }),
        (0, D.jsx)(Gt, { path: `/login`, element: (0, D.jsx)(ah, {}) }),
        (0, D.jsx)(Gt, { path: `/admin`, element: (0, D.jsx)(oh, {}) }),
      ],
    }),
  });
}
var ch = `/`.replace(/\/$/, ``),
  lh = new URLSearchParams(window.location.search),
  uh = lh.get(`p`);
if (uh) {
  let e = uh.startsWith(`/`) ? uh : `/${uh}`,
    t = lh.get(`q`);
  window.history.replaceState(
    null,
    ``,
    `${ch}${e}${t ? `?${t}` : ``}${window.location.hash}`,
  );
}
var dh = new Kr({ defaultOptions: { queries: { staleTime: 3e5, retry: 1 } } });
Xr.createRoot(document.getElementById(`root`)).render(
  (0, D.jsx)(m.StrictMode, {
    children: (0, D.jsx)(Yr, {
      client: dh,
      children: (0, D.jsx)(Nn, {
        basename: ch,
        children: (0, D.jsxs)(sa, {
          children: [
            (0, D.jsx)(sh, {}),
            (0, D.jsx)(A, {
              position: `top-right`,
              toastOptions: {
                duration: 3e3,
                style: {
                  background: `#0a1628`,
                  color: `#fff`,
                  border: `1px solid rgba(0,200,232,.3)`,
                },
              },
            }),
          ],
        }),
      }),
    }),
  }),
);
export {
  Kn as C,
  Bn as D,
  Ct as E,
  qn as S,
  yt as T,
  nr as _,
  ca as a,
  tr as b,
  Jr as c,
  wr as d,
  Cr as f,
  rr as g,
  gr as h,
  Rm as i,
  Rr as l,
  Qn as m,
  Gm as n,
  aa as o,
  er as p,
  Km as r,
  j as s,
  Wm as t,
  Dr as u,
  dr as v,
  Pn as w,
  Yn as x,
  xr as y,
};
