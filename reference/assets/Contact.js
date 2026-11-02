import { i as e, l as t, n } from "./vendor-dist.js";
import { s as r, t as i, w as a } from "./index.js";
import { u as o } from "./useSupabase.js";
var s = t(e(), 1),
  c = (e) => e.type === `checkbox`,
  l = (e) => e.type === `file`,
  u = (e) => e instanceof Date,
  d = (e) => e == null,
  f = (e) => typeof e == `object`,
  p = (e) => !d(e) && !Array.isArray(e) && f(e) && !u(e),
  m = (e) =>
    p(e) && e.target
      ? c(e.target)
        ? e.target.checked
        : l(e.target)
          ? e.target.files
          : e.target.value
      : e,
  h = (e, t) =>
    t
      .split(`.`)
      .some((t, n, r) => !isNaN(Number(t)) && e.has(r.slice(0, n).join(`.`))),
  g = (e) => {
    let t = e.constructor && e.constructor.prototype;
    return p(t) && t.hasOwnProperty(`isPrototypeOf`);
  },
  _ =
    typeof window < `u` &&
    window.HTMLElement !== void 0 &&
    typeof document < `u`;
function v(e) {
  if (e instanceof Date) return new Date(e);
  let t = typeof FileList < `u` && e instanceof FileList;
  if (_ && (e instanceof Blob || t)) return e;
  let n = Array.isArray(e);
  if (!n && !(p(e) && g(e))) return e;
  let r = n ? [] : Object.create(Object.getPrototypeOf(e));
  for (let t in e)
    Object.prototype.hasOwnProperty.call(e, t) && (r[t] = v(e[t]));
  return r;
}
var y = {
    BLUR: `blur`,
    FOCUS_OUT: `focusout`,
    CHANGE: `change`,
    SUBMIT: `submit`,
    TRIGGER: `trigger`,
    VALID: `valid`,
  },
  b = {
    onBlur: `onBlur`,
    onChange: `onChange`,
    onSubmit: `onSubmit`,
    onTouched: `onTouched`,
    all: `all`,
  },
  x = {
    max: `max`,
    min: `min`,
    maxLength: `maxLength`,
    minLength: `minLength`,
    pattern: `pattern`,
    required: `required`,
    validate: `validate`,
  },
  S = `root`,
  C = [`__proto__`, `constructor`, `prototype`],
  w = /^\w*$/,
  T = (e) => w.test(e),
  E = (e) => e === void 0,
  D = /[.[\]'"]/,
  O = (e) => e.split(D).filter(Boolean),
  k = (e, t, n) => {
    if (!t || !p(e)) return n;
    let r = T(t) ? [t] : O(t);
    if (r.some((e) => C.includes(e))) return n;
    let i = r.reduce((e, t) => (d(e) ? void 0 : e[t]), e);
    return E(i) || i === e ? (E(e[t]) ? n : e[t]) : i;
  },
  A = (e) => typeof e == `boolean`,
  j = (e) => typeof e == `function`,
  M = (e, t, n) => {
    let r = -1,
      i = T(t) ? [t] : O(t),
      a = i.length,
      o = a - 1;
    for (; ++r < a;) {
      let t = i[r],
        a = n;
      if (r !== o) {
        let n = e[t];
        a = p(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
      }
      if (C.includes(t)) return;
      ((e[t] = a), (e = e[t]));
    }
  },
  ee = s.createContext(null);
ee.displayName = `HookFormControlContext`;
var N = (e, t, n, r = !0) => {
    let i = {};
    for (let a in e)
      Object.defineProperty(i, a, {
        get: () => {
          let i = a;
          return (
            t._proxyFormState[i] !== b.all &&
              (t._proxyFormState[i] = !r || b.all),
            n && (n[i] = !0),
            e[i]
          );
        },
      });
    return i;
  },
  P = _ ? s.useLayoutEffect : s.useEffect,
  F = (e) => typeof e == `string`,
  te = (e, t, n, r, i) =>
    F(e)
      ? (r && t.watch.add(e), k(n, e, i))
      : Array.isArray(e)
        ? e.map((e) => (r && t.watch.add(e), k(n, e)))
        : (r && (t.watchAll = !0), n),
  I = (e) => d(e) || !f(e),
  L = (e, t) => t.length === 0 && !Array.isArray(e) && !g(e);
function R(e, t, n = new WeakMap()) {
  if (e === t) return !0;
  if (I(e) || I(t)) return Object.is(e, t);
  if (u(e) && u(t)) return Object.is(e.getTime(), t.getTime());
  let r = Object.keys(e),
    i = Object.keys(t);
  if (r.length !== i.length) return !1;
  if (L(e, r) || L(t, i)) return Object.is(e, t);
  if (!r.length && Array.isArray(e) !== Array.isArray(t)) return !1;
  let a = n.get(e);
  if (a && a.has(t)) return !0;
  if (a) a.add(t);
  else {
    let r = new WeakSet();
    (r.add(t), n.set(e, r));
  }
  for (let i of r) {
    let r = e[i];
    if (!(i in t)) return !1;
    if (i !== `ref`) {
      let e = t[i];
      if (
        (u(r) && u(e)) ||
        ((p(r) || Array.isArray(r)) && (p(e) || Array.isArray(e)))
          ? !R(r, e, n)
          : !Object.is(r, e)
      )
        return !1;
    }
  }
  return !0;
}
var ne = (e) => ({
    isOnSubmit: !e || e === b.onSubmit,
    isOnBlur: e === b.onBlur,
    isOnChange: e === b.onChange,
    isOnAll: e === b.all,
    isOnTouch: e === b.onTouched,
  }),
  re = (e, t, n) => {
    if (n) return !1;
    if (t.watchAll || t.watch.has(e)) return !0;
    for (let n of t.watch)
      if (e.startsWith(n) && e.charAt(n.length) === `.`) return !0;
    return !1;
  },
  z = (e, t, n, r) => {
    for (let i of n || Object.keys(e)) {
      if (i === `_f`) continue;
      let a = n ? k(e, i) : e[i];
      if (a) {
        let { _f: e } = a;
        if (e) {
          if (
            (e.refs && e.refs[0] && t(e.refs[0], i) && !r) ||
            (e.ref && t(e.ref, e.name) && !r)
          )
            return !0;
          if (z(a, t)) break;
        } else if ((p(a) || Array.isArray(a)) && z(a, t)) break;
      }
    }
  },
  ie = (e, t, n) => {
    let r = k(e, n),
      i = Array.isArray(r) ? r : [];
    return (M(i, S, t[n]), M(e, n, i), e);
  },
  B = (e) => p(e) && !Object.keys(e).length,
  ae = (e) => {
    if (!_) return !1;
    let t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  oe = (e) => e.type === `radio`,
  V = (e) => e instanceof RegExp,
  H = (e, t, n, r, i) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: i || !0 },
        }
      : {},
  U = { value: !1, isValid: !1 },
  se = { value: !0, isValid: !0 },
  ce = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        let t = e
          .filter((e) => e && e.checked && !e.disabled)
          .map((e) => e.value);
        return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !E(e[0].attributes.value)
          ? E(e[0].value) || e[0].value === ``
            ? se
            : { value: e[0].value, isValid: !0 }
          : se
        : U;
    }
    return U;
  },
  le = { isValid: !1, value: null },
  ue = (e) =>
    Array.isArray(e)
      ? e.reduce(
          (e, t) =>
            t && t.checked && !t.disabled ? { isValid: !0, value: t.value } : e,
          le,
        )
      : le;
function de(e, t, n = `validate`) {
  if (F(e) || (Array.isArray(e) && e.every(F)) || (A(e) && !e))
    return { type: n, message: F(e) ? e : ``, ref: t };
}
var W = (e) => (p(e) && !V(e) ? e : { value: e, message: `` }),
  fe = async (e, t, n, r, i, a) => {
    let {
        ref: o,
        refs: s,
        required: u,
        maxLength: f,
        minLength: m,
        min: h,
        max: g,
        pattern: _,
        validate: v,
        name: y,
        valueAsNumber: b,
        mount: S,
      } = e._f,
      C = k(n, y);
    if (!S || t.has(y)) return {};
    let w = s ? s[0] : o,
      T = (e) => {
        if (i && w.reportValidity) {
          let t = A(e) ? `` : e || ``;
          (s
            ? s.forEach((e) => e.setCustomValidity(t))
            : w.setCustomValidity(t),
            w.reportValidity());
        }
      },
      D = {},
      O = oe(o),
      M = c(o),
      ee = O || M,
      N =
        ((b || l(o)) && E(o.value) && E(C)) ||
        (ae(o) && o.value === ``) ||
        C === `` ||
        (Array.isArray(C) && !C.length),
      P = H.bind(null, y, r, D),
      te = (e, t, n, r = x.maxLength, i = x.minLength) => {
        let a = e ? t : n;
        D[y] = { type: e ? r : i, message: a, ref: o, ...P(e ? r : i, a) };
      };
    if (
      a
        ? !Array.isArray(C) || !C.length
        : u &&
          ((!ee && (N || d(C))) ||
            (A(C) && !C) ||
            (M && !ce(s).isValid) ||
            (O && !ue(s).isValid))
    ) {
      let { value: e, message: t } = F(u) ? { value: !!u, message: u } : W(u);
      if (
        e &&
        ((D[y] = { type: x.required, message: t, ref: w, ...P(x.required, t) }),
        !r)
      )
        return (T(t), D);
    }
    if (!N && (!d(h) || !d(g))) {
      let e,
        t,
        n = W(g),
        i = W(h);
      if (!d(C) && !isNaN(C)) {
        let r = o.valueAsNumber || (C && +C);
        (d(n.value) || (e = r > n.value), d(i.value) || (t = r < i.value));
      } else {
        let r = o.valueAsDate || new Date(C),
          a = (e) => new Date(new Date().toDateString() + ` ` + e),
          s = o.type == `time`,
          c = o.type == `week`;
        (F(n.value) &&
          C &&
          (e = s ? a(C) > a(n.value) : c ? C > n.value : r > new Date(n.value)),
          F(i.value) &&
            C &&
            (t = s
              ? a(C) < a(i.value)
              : c
                ? C < i.value
                : r < new Date(i.value)));
      }
      if ((e || t) && (te(!!e, n.message, i.message, x.max, x.min), !r))
        return (T(D[y].message), D);
    }
    if ((f || m) && !N && (F(C) || (a && Array.isArray(C)))) {
      let e = W(f),
        t = W(m),
        n = !d(e.value) && C.length > +e.value,
        i = !d(t.value) && C.length < +t.value;
      if ((n || i) && (te(n, e.message, t.message), !r))
        return (T(D[y].message), D);
    }
    if (_ && !N && F(C)) {
      let { value: e, message: t } = W(_);
      if (
        V(e) &&
        !C.match(e) &&
        ((D[y] = { type: x.pattern, message: t, ref: o, ...P(x.pattern, t) }),
        !r)
      )
        return (T(t), D);
    }
    if (v) {
      if (j(v)) {
        let e = de(await v(C, n), w);
        if (e && ((D[y] = { ...e, ...P(x.validate, e.message) }), !r))
          return (T(e.message), D);
      } else if (p(v)) {
        let e = {};
        for (let t in v) {
          if (!B(e) && !r) break;
          let i = de(await v[t](C, n), w, t);
          i &&
            ((e = { ...i, ...P(t, i.message) }), T(i.message), r && (D[y] = e));
        }
        if (!B(e) && ((D[y] = { ref: w, ...e }), !r)) return D;
      }
    }
    return (T(!0), D);
  },
  pe = (e) => (Array.isArray(e) ? e : [e]),
  me = (e) => (Array.isArray(e) ? e.filter(Boolean) : []);
function he(e, t) {
  let n = t.length - 1,
    r = 0;
  for (; r < n;) {
    if (d(e)) {
      e = void 0;
      break;
    }
    ((e = e[t[r]]), r++);
  }
  return e;
}
function ge(e) {
  for (let t in e) if (e.hasOwnProperty(t) && !E(e[t])) return !1;
  return !0;
}
function G(e, t) {
  if (F(t) && Object.prototype.hasOwnProperty.call(e, t))
    return (delete e[t], e);
  let n = Array.isArray(t) ? t : T(t) ? [t] : O(t);
  if (n.some((e) => C.includes(String(e)))) return e;
  let r = n.length === 1 ? e : he(e, n),
    i = n.length - 1,
    a = n[i];
  return (
    r && delete r[a],
    i !== 0 &&
      ((p(r) && B(r)) || (Array.isArray(r) && ge(r))) &&
      G(e, n.slice(0, -1)),
    e
  );
}
var _e = (e) => {
    let t = {};
    for (let n of Object.keys(e))
      if (f(e[n]) && e[n] !== null && !u(e[n])) {
        let r = _e(e[n]);
        for (let e of Object.keys(r)) t[`${n}.${e}`] = r[e];
      } else t[n] = e[n];
    return t;
  },
  K = s.createContext(null);
K.displayName = `HookFormContext`;
var ve = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (t) => {
      for (let n of e) n.next && n.next(t);
    },
    subscribe: (t) => (
      e.push(t),
      {
        unsubscribe: () => {
          e = e.filter((e) => e !== t);
        },
      }
    ),
    unsubscribe: () => {
      e = [];
    },
  };
};
function ye(e, t) {
  let n = {};
  for (let r in e)
    if (e.hasOwnProperty(r)) {
      let i = e[r],
        a = t[r];
      if (i && p(i) && a) {
        let e = ye(i, a);
        p(e) && (n[r] = e);
      } else e[r] && (n[r] = a);
    }
  return n;
}
var be = (e) => e.type === `select-multiple`,
  xe = (e) => oe(e) || c(e),
  Se = (e) => ae(e) && e.isConnected;
function Ce(e) {
  return Array.isArray(e) || p(e);
}
function we(e, t, n = ``, r = []) {
  for (let i in e) {
    let a = n ? `${n}.${i}` : i,
      o = e[i];
    Ce(o) && Ce(k(t, a)) ? we(o, t, a, r) : r.push(a);
  }
  return r;
}
var Te = (e) => {
  for (let t in e) if (j(e[t])) return !0;
  return !1;
};
function q(e) {
  return Array.isArray(e) || (p(e) && !Te(e));
}
function Ee(e) {
  return !!(e && `_f` in e);
}
function J(e) {
  return Array.isArray(e) ? !e.some((e) => !E(e)) : !Object.keys(e).length;
}
function Y(e, t) {
  Array.isArray(e) ? (e[t] = void 0) : delete e[t];
}
function De(e, t = {}, n) {
  for (let r in e) {
    let i = e[r],
      a = n && n[r];
    q(i) && (!Array.isArray(i) || !Ee(a))
      ? ((t[r] = Array.isArray(i) ? [] : {}),
        De(i, t[r], a),
        J(t[r]) && Y(t, r))
      : E(i) || (t[r] = !0);
  }
  return t;
}
function X(e, t, n, r) {
  n ||= De(t, {}, r);
  for (let i in e) {
    let a = e[i],
      o = r && r[i];
    q(a) && (!Array.isArray(a) || !Ee(o))
      ? (E(t) || I(n[i])
          ? (n[i] = De(a, Array.isArray(a) ? [] : {}, o))
          : X(a, d(t) ? {} : t[i], n[i], o),
        J(n[i]) && Y(n, i))
      : R(a, t[i])
        ? Y(n, i)
        : (n[i] = !0);
  }
  return n;
}
var Oe = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
  E(e)
    ? e
    : t
      ? e === ``
        ? NaN
        : e && +e
      : n && F(e)
        ? new Date(e)
        : r
          ? r(e)
          : e;
function ke(e) {
  let t = e.ref;
  return l(t)
    ? t.files
    : oe(t)
      ? ue(e.refs).value
      : be(t)
        ? [...t.selectedOptions].map(({ value: e }) => e)
        : c(t)
          ? ce(e.refs).value
          : Oe(t.value, e);
}
var Ae = (e, t, n, r) => {
    let i = {};
    for (let n of e) {
      let e = k(t, n);
      e && M(i, n, e._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: i,
      shouldUseNativeValidation: r,
    };
  },
  Z = (e) =>
    E(e)
      ? e
      : V(e)
        ? e.source
        : p(e)
          ? V(e.value)
            ? e.value.source
            : e.value
          : e,
  je = `AsyncFunction`,
  Me = (e) => {
    if (!e || !e.validate) return !1;
    if (j(e.validate)) return e.validate.constructor.name === je;
    if (p(e.validate)) {
      for (let t in e.validate)
        if (e.validate[t].constructor.name === je) return !0;
    }
    return !1;
  },
  Ne = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function Pe(e, t, n) {
  let r = k(e, n);
  if (r || T(n)) return { error: r, name: n };
  let i = n.split(`.`);
  for (; i.length;) {
    let r = i.join(`.`),
      a = k(t, r),
      o = k(e, r);
    if (a && !Array.isArray(a) && n !== r) return { name: n };
    if (o && o.type) return { name: r, error: o };
    if (o && o.root && o.root.type) return { name: `${r}.root`, error: o.root };
    i.pop();
  }
  return { name: n };
}
var Fe = (e, t, n, r) => {
    n(e);
    let i = Object.keys(e).filter((e) => e !== `name`);
    return (
      !i.length ||
      (r && i.length >= Object.keys(t).length) ||
      i.find((e) => t[e] === (!r || b.all))
    );
  },
  Ie = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    pe(e).some(
      (e) =>
        e &&
        (n
          ? e === t || e.startsWith(t + `.`)
          : e.startsWith(t) || t.startsWith(e)),
    ),
  Le = (e, t, n, r, i) =>
    i.isOnAll
      ? !1
      : !n && i.isOnTouch
        ? !(t || e)
        : (n ? r.isOnBlur : i.isOnBlur)
          ? !e
          : !(n ? r.isOnChange : i.isOnChange) || e,
  Re = (e, t) => !me(k(e, t)).length && G(e, t),
  ze = { mode: b.onSubmit, reValidateMode: b.onChange, shouldFocusError: !0 },
  Be = `form`,
  Ve = (e, t) => {
    for (let n in e) n in t || delete e[n];
    Object.assign(e, t);
  },
  He = {
    submitCount: 0,
    isDirty: !1,
    isReady: !1,
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
  };
function Ue(e = {}) {
  let t = { ...ze, ...e },
    n = {
      ...v(He),
      isLoading: j(t.defaultValues),
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    i =
      ((p(t.defaultValues) || p(t.values)) && v(t.defaultValues || t.values)) ||
      {},
    a = t.shouldUnregister ? {} : v(i),
    o = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    s = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
      registerName: new Set(),
    },
    f = {},
    g = {},
    C = 0,
    w = ne(t.mode),
    D = ne(t.reValidateMode),
    ee = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    N = { ...ee },
    P = { ...N },
    I = { array: ve(), state: ve() },
    L = 0,
    oe = t.criteriaMode === b.all,
    V = (e, t) => (n) => {
      (clearTimeout(g[e]), (g[e] = setTimeout(t, n)));
    },
    H = async (e) => {
      if (!o.keepIsValid && !t.disabled && (N.isValid || P.isValid || e)) {
        let e = ++L,
          i;
        (t.resolver
          ? ((i = B((await K()).errors)), e === L && U())
          : (i = await q({
              fields: r,
              onlyCheckValid: !0,
              eventType: y.VALID,
            })),
          e === L && i !== n.isValid && I.state.next({ isValid: i }));
      }
    },
    U = (e, r) => {
      !t.disabled &&
        (N.isValidating ||
          N.validatingFields ||
          P.isValidating ||
          P.validatingFields) &&
        ((e || Array.from(s.mount)).forEach((e) => {
          e && (r ? M(n.validatingFields, e, r) : G(n.validatingFields, e));
        }),
        I.state.next({
          validatingFields: n.validatingFields,
          isValidating: !B(n.validatingFields),
        }));
    },
    se = () => {
      n.dirtyFields = X(i, a, void 0, r);
    },
    ce = (e, i = [], s, c, l = !0, u = !0) => {
      if (c && s && !t.disabled) {
        if (((o.action = !0), u && Array.isArray(k(r, e)))) {
          let t = s(k(r, e), c.argA, c.argB);
          l && M(r, e, t);
        }
        if (u && Array.isArray(k(n.errors, e))) {
          let t = s(k(n.errors, e), c.argA, c.argB);
          (l && M(n.errors, e, t), Re(n.errors, e));
        }
        if (
          (N.touchedFields || P.touchedFields) &&
          u &&
          Array.isArray(k(n.touchedFields, e))
        ) {
          let t = s(k(n.touchedFields, e), c.argA, c.argB);
          l && M(n.touchedFields, e, t);
        }
        ((N.dirtyFields || P.dirtyFields) && se(),
          I.state.next({
            name: e,
            isDirty: J(e, i),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          }));
      } else M(a, e, i);
    },
    le = (e, t) => {
      (M(n.errors, e, t),
        (n.errors = { ...n.errors }),
        I.state.next({ errors: n.errors }));
    },
    ue = (e) => {
      ((n.errors = e), I.state.next({ errors: n.errors, isValid: !1 }));
    },
    de = (e) => {
      let t = T(e) ? [e] : O(e),
        n = a,
        r = i;
      for (let e = 0; e < t.length - 1; e++) {
        let i = t[e];
        if (
          ((n = d(n) ? n : n[i]),
          (r = d(r) ? r : r[i]),
          n === null && r !== null)
        )
          return !0;
      }
      return !1;
    },
    W = (t, c, l, u) => {
      let d = k(r, t);
      if (d) {
        if (de(t)) return;
        let r = E(k(a, t)),
          f = k(a, t, E(l) ? k(i, t) : l);
        (E(f) || (u && u.defaultChecked) || c
          ? M(a, t, c ? f : ke(d._f))
          : je(t, f),
          o.mount &&
            !o.action &&
            (H(),
            r &&
              n.isDirty &&
              (N.isDirty || P.isDirty) &&
              (J() || ((n.isDirty = !1), I.state.next({ ...n }))),
            e.shouldUnregister &&
              r &&
              !E(k(a, t)) &&
              re(t, s) &&
              (o.watch = !0)));
      }
    },
    he = (e, o, s, c, l) => {
      let u = !1,
        d = !1,
        f = { name: e };
      if (!t.disabled || c === !0) {
        if (!s || c) {
          let t = R(k(i, e), o);
          ((N.isDirty || P.isDirty) &&
            ((d = n.isDirty),
            (n.isDirty = f.isDirty = !t || J()),
            (u = d !== f.isDirty)),
            (d = !!k(n.dirtyFields, e)),
            t === n.isDirty
              ? t
                ? G(n.dirtyFields, e)
                : M(n.dirtyFields, e, !0)
              : Ve(n.dirtyFields, X(i, a, void 0, r)),
            (f.dirtyFields = n.dirtyFields),
            (u ||= (N.dirtyFields || P.dirtyFields) && d !== !t));
        }
        if (s) {
          let t = k(n.touchedFields, e);
          t ||
            (M(n.touchedFields, e, s),
            (f.touchedFields = n.touchedFields),
            (u ||= (N.touchedFields || P.touchedFields) && t !== s));
        }
        u && l && I.state.next(f);
      }
      return u ? f : {};
    },
    ge = (e, r, i, a) => {
      let o = k(n.errors, e),
        s = (N.isValid || P.isValid) && A(r) && n.isValid !== r;
      if (
        (t.delayError && i
          ? ((f[e] = V(e, () => le(e, i))), f[e](t.delayError))
          : (clearTimeout(g[e]),
            delete f[e],
            i ? M(n.errors, e, i) : G(n.errors, e),
            (n.errors = { ...n.errors })),
        (i ? !R(o, i) : o) || !B(a) || s)
      ) {
        let t = {
          ...a,
          ...(s && A(r) ? { isValid: r } : {}),
          errors: n.errors,
          name: e,
        };
        ((n = { ...n, ...t }), I.state.next(t));
      }
    },
    K = async (e) => (
      U(e, !0),
      await t.resolver(
        a,
        t.context,
        Ae(e || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation),
      )
    ),
    Ce = async (e) => {
      let { errors: t } = await K(e);
      if ((U(e), e)) {
        for (let r of e) {
          let e = k(t, r);
          e
            ? s.array.has(r) &&
              p(e) &&
              !Object.keys(e).some((e) => !Number.isNaN(Number(e)))
              ? ie(n.errors, { [r]: e }, r)
              : M(n.errors, r, e)
            : G(n.errors, r);
        }
        n.errors = { ...n.errors };
      } else n.errors = t;
      return t;
    },
    Te = async ({ name: t, eventType: r }) => {
      if (e.validate) {
        let i = await e.validate({
          formValues: a,
          formState: n,
          name: t,
          eventType: r,
        });
        if (p(i))
          for (let e in i) {
            let t = i[e];
            t &&
              Ze(`${Be}.${e}`, {
                message: F(t.message) ? t.message : ``,
                type: t.type || x.validate,
              });
          }
        else
          F(i) || !i ? Ze(Be, { message: i || ``, type: x.validate }) : Xe(Be);
        return i;
      }
      return !0;
    },
    q = async ({
      fields: r,
      onlyCheckValid: i,
      name: o,
      eventType: c,
      context: l = { valid: !0, runRootValidation: !1 },
    }) => {
      if (
        e.validate &&
        ((l.runRootValidation = !0),
        !(await Te({ name: o, eventType: c })) && ((l.valid = !1), i))
      )
        return l.valid;
      for (let o in r) {
        let u = r[o];
        if (u) {
          let { _f: r, ...d } = u;
          if (r) {
            let o = s.array.has(r.name),
              c = u._f && Me(u._f),
              d =
                N.validatingFields ||
                N.isValidating ||
                P.validatingFields ||
                P.isValidating;
            c && d && U([r.name], !0);
            let f = await fe(
              u,
              s.disabled,
              a,
              oe,
              t.shouldUseNativeValidation && !i,
              o,
            );
            if (
              (c && d && U([r.name]),
              (f[r.name] && ((l.valid = !1), i)) ||
                (!i &&
                  (k(f, r.name)
                    ? o
                      ? ie(n.errors, f, r.name)
                      : M(n.errors, r.name, f[r.name])
                    : G(n.errors, r.name)),
                e.shouldUseNativeValidation && f[r.name]))
            )
              break;
          }
          !B(d) &&
            (await q({
              context: l,
              onlyCheckValid: i,
              fields: d,
              name: o,
              eventType: c,
            }));
        }
      }
      return l.valid;
    },
    Ee = () => {
      for (let e of s.unMount) {
        let t = k(r, e);
        t &&
          (t._f.refs ? t._f.refs.every((e) => !Se(e)) : !Se(t._f.ref)) &&
          tt(e);
      }
      s.unMount = new Set();
    },
    J = (e, t) => (e && t && M(a, e, t), !R(o.mount ? a : i, i)),
    Y = (e, t, n) =>
      te(e, s, { ...(o.mount ? a : E(t) ? i : F(e) ? { [e]: t } : t) }, n, t),
    De = (e) =>
      me(k(o.mount ? a : i, e, t.shouldUnregister ? k(i, e, []) : [])),
    je = (e, t, n = {}, i = !1, o = !1) => {
      let s = k(r, e),
        u = t;
      if (s) {
        let n = s._f;
        n &&
          (!n.disabled && M(a, e, Oe(t, n)),
          (u = ae(n.ref) && d(t) ? `` : t),
          be(n.ref)
            ? [...n.ref.options].forEach(
                (e) => (e.selected = u.includes(e.value)),
              )
            : n.refs
              ? c(n.ref)
                ? n.refs.forEach((e) => {
                    (!e.defaultChecked || !e.disabled) &&
                      (e.checked = Array.isArray(u)
                        ? !!u.find((t) => t === e.value)
                        : u === e.value || !!u);
                  })
                : n.refs.forEach((e) => (e.checked = e.value === u))
              : l(n.ref)
                ? (n.ref.value = ``)
                : ((n.ref.value = u),
                  !n.ref.type &&
                    !o &&
                    I.state.next({ name: e, values: i ? a : v(a) })));
      }
      ((n.shouldDirty || n.shouldTouch) &&
        he(e, u, n.shouldTouch, n.shouldDirty, !o),
        n.shouldValidate && qe(e, { delayError: n.delayError }));
    },
    Ue = (e, t, n, i = !1, o = !1) => {
      s.array.has(e) && I.array.next({ name: e, values: i ? a : v(a) });
      for (let a in t) {
        if (!t.hasOwnProperty(a)) return;
        let c = t[a],
          l = e + `.` + a,
          d = k(r, l);
        (s.array.has(e) || p(c) || (d && !d._f)) && !u(c)
          ? Ue(l, c, n, i, o)
          : je(l, c, n, i, o);
      }
    },
    We = (e, t, i, c, l = !1) => {
      let u = k(r, e),
        f = s.array.has(e),
        p = c ? t : v(t),
        m = R(k(a, e), p);
      if ((m || M(a, e, p), f))
        (I.array.next({ name: e, values: c ? a : v(a) }),
          (N.isDirty || N.dirtyFields || P.isDirty || P.dirtyFields) &&
            i.shouldDirty &&
            (se(),
            l ||
              I.state.next({
                name: e,
                dirtyFields: n.dirtyFields,
                isDirty: J(e, p),
              })));
      else {
        let t = (Array.isArray(p) && !p.length) || B(p);
        !u || u._f || d(p) || t ? je(e, p, i, c, l) : Ue(e, p, i, c, l);
      }
      if (!m && !l) {
        let t = re(e, s),
          r = c ? a : v(a);
        I.state.next({
          ...(t && n),
          name: o.mount || t ? e : void 0,
          values: r,
        });
      }
    },
    Q = (e, t, n = {}) => We(e, t, n, !1),
    Ge = (e, t = {}) => {
      let r = j(e) ? e(a) : e;
      if (!R(a, r)) {
        a = { ...a, ...r };
        let e = _e(r);
        for (let n of s.mount) n in e && We(n, e[n], t, !0, !0);
        (I.state.next({
          ...n,
          name: void 0,
          type: void 0,
          ...(C ? { values: a } : {}),
        }),
          t.shouldValidate && H());
      }
    },
    $ = async (i) => {
      o.mount = !0;
      let c = i.target,
        l = c.name,
        d = !0,
        p = k(r, l),
        h = (e) => {
          d =
            Number.isNaN(e) || (u(e) && isNaN(e.getTime())) || R(e, k(a, l, e));
        };
      if (p) {
        let o,
          u,
          g = c.type ? ke(p._f) : m(i),
          _ = i.type === y.BLUR || i.type === y.FOCUS_OUT,
          b =
            !Ne(p._f) &&
            !e.validate &&
            !t.resolver &&
            !k(n.errors, l) &&
            !p._f.deps,
          x = b || Le(_, k(n.touchedFields, l), n.isSubmitted, D, w),
          S = re(l, s, _);
        if ((M(a, l, g), _)) {
          if (!c || !c.readOnly) {
            p._f.onBlur && p._f.onBlur(i);
            let e = f[l];
            e && e(0);
          }
        } else p._f.onChange && p._f.onChange(i);
        let T = he(l, g, _),
          E = !B(T) || S;
        if (
          (!_ &&
            I.state.next({
              name: l,
              type: i.type,
              ...(C ? { values: v(a) } : {}),
            }),
          x)
        )
          return (
            (!b || !n.isValid) &&
              (N.isValid || P.isValid) &&
              (t.mode === `onBlur` ? _ && H() : _ || H()),
            E && I.state.next({ name: l, ...(S ? {} : T) })
          );
        if (
          (!t.resolver &&
            e.validate &&
            (await Te({ name: l, eventType: i.type })),
          !_ && S && I.state.next({ ...n }),
          t.resolver)
        ) {
          let { errors: e } = await K([l]);
          if ((U([l]), h(g), !d)) {
            !B(T) && I.state.next(T);
            return;
          }
          let t = Pe(n.errors, r, l),
            i = Pe(e, r, t.name || l);
          ((o = i.error), (l = i.name), (u = B(e)));
        } else
          (U([l], !0),
            (o = (await fe(p, s.disabled, a, oe, t.shouldUseNativeValidation))[
              l
            ]),
            U([l]),
            h(g),
            d &&
              (o
                ? (u = !1)
                : (N.isValid || P.isValid) &&
                  (u = await q({
                    fields: r,
                    onlyCheckValid: !0,
                    name: l,
                    eventType: i.type,
                  }))));
        d &&
          (p._f.deps &&
            (!Array.isArray(p._f.deps) || p._f.deps.length > 0) &&
            qe(p._f.deps),
          ge(l, u, o, T));
      }
    },
    Ke = (e, t) => {
      if (k(n.errors, t) && e.focus) return (e.focus(), 1);
    },
    qe = async (e, i = {}) => {
      let a,
        o,
        c = pe(e);
      if (t.resolver) {
        let t = await Ce(E(e) ? e : c);
        ((a = B(t)), (o = e ? !c.some((e) => k(t, e)) : a));
      } else
        e
          ? ((o = (
              await Promise.all(
                c.map(async (e) => {
                  let t = k(r, e);
                  return await q({
                    fields: t && t._f ? { [e]: t } : t,
                    eventType: y.TRIGGER,
                  });
                }),
              )
            ).every(Boolean)),
            (o || n.isValid) && H())
          : (o = a = await q({ fields: r, name: e, eventType: y.TRIGGER }));
      if (i.delayError && t.delayError && F(e)) {
        let r = k(n.errors, e);
        r
          ? (G(n.errors, e), (f[e] = V(e, () => le(e, r))), f[e](t.delayError))
          : (clearTimeout(g[e]), delete f[e]);
      }
      return (
        I.state.next({
          ...(!F(e) || ((N.isValid || P.isValid) && a !== n.isValid)
            ? {}
            : { name: e }),
          ...(t.resolver || !e ? { isValid: a } : {}),
          errors: n.errors,
        }),
        i.shouldFocus && !o && z(r, Ke, e ? c : s.mount),
        o
      );
    },
    Je = (e, t) => {
      let r = { ...(o.mount ? a : i) };
      return (
        t && (r = ye(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)),
        E(e) ? r : F(e) ? k(r, e) : e.map((e) => k(r, e))
      );
    },
    Ye = (e, t) => ({
      invalid: !!k((t || n).errors, e),
      isDirty: !!k((t || n).dirtyFields, e),
      error: k((t || n).errors, e),
      isValidating: !!k(n.validatingFields, e),
      isTouched: !!k((t || n).touchedFields, e),
    }),
    Xe = (e) => {
      let t = e ? pe(e) : void 0;
      (t?.forEach((e) => G(n.errors, e)),
        t
          ? t.forEach((e) => {
              I.state.next({ name: e, errors: n.errors });
            })
          : ((n.errors = {}), I.state.next({ errors: n.errors })));
    },
    Ze = (e, t, i) => {
      let a = (k(r, e, { _f: {} })._f || {}).ref,
        { ref: o, message: s, type: c, ...l } = k(n.errors, e) || {};
      (M(n.errors, e, { ...l, ...t, ref: a }),
        I.state.next({ name: e, errors: n.errors, isValid: !1 }),
        i && i.shouldFocus && a && a.focus && a.focus());
    },
    Qe = (e, t) => {
      if (j(e)) {
        C++;
        let { unsubscribe: n } = I.state.subscribe({
            next: (n) => `values` in n && e(n.values || Y(void 0, t), n),
          }),
          r = !1;
        return {
          unsubscribe: () => {
            r || ((r = !0), C--, n());
          },
        };
      }
      return Y(e, t, !0);
    },
    $e = (e) => {
      let t = !!e.formState?.values;
      t && C++;
      let { unsubscribe: r } = I.state.subscribe({
        next: (t) => {
          if (
            Ie(e.name, t.name, e.exact) &&
            Fe(t, e.formState || N, dt, e.reRenderRoot)
          ) {
            let r = { ...a };
            e.callback({ values: r, ...n, ...t, defaultValues: i });
          }
        },
      });
      if (!t) return r;
      let o = !1;
      return () => {
        o || ((o = !0), C--, r());
      };
    },
    et = (e) => (
      (o.mount = !0),
      (P = { ...P, ...e.formState }),
      $e({ ...e, formState: { ...ee, ...e.formState } })
    ),
    tt = (e, o = {}) => {
      for (let c of e ? pe(e) : s.mount)
        (s.mount.delete(c),
          s.array.delete(c),
          o.keepValue || (G(r, c), G(a, c)),
          !o.keepError && G(n.errors, c),
          !o.keepDirty && G(n.dirtyFields, c),
          !o.keepTouched && G(n.touchedFields, c),
          !o.keepIsValidating && G(n.validatingFields, c),
          !t.shouldUnregister && !o.keepDefaultValue && G(i, c));
      (I.state.next({ values: v(a) }),
        I.state.next({ ...n, ...(o.keepDirty ? { isDirty: J() } : {}) }),
        !o.keepIsValid && H());
    },
    nt = ({ disabled: e, name: t }) => {
      if ((A(e) && o.mount) || e || s.disabled.has(t)) {
        let n = s.disabled.has(t) !== !!e;
        (e ? s.disabled.add(t) : s.disabled.delete(t),
          n && o.mount && !o.action && H());
      }
    },
    rt = (e, n = {}) => {
      let a = k(r, e),
        c = A(n.disabled) || A(t.disabled),
        l = !s.registerName.has(e) && a && a._f && !a._f.mount;
      return (
        M(r, e, {
          ...(a || {}),
          _f: {
            ...(a && a._f ? a._f : { ref: { name: e } }),
            name: e,
            mount: !0,
            ...n,
          },
        }),
        s.mount.add(e),
        a && !l
          ? nt({ disabled: A(n.disabled) ? n.disabled : t.disabled, name: e })
          : W(e, !0, n.value),
        {
          ...(c ? { disabled: n.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!n.required,
                min: Z(n.min),
                max: Z(n.max),
                minLength: Z(n.minLength),
                maxLength: Z(n.maxLength),
                pattern: Z(n.pattern),
              }
            : {}),
          name: e,
          onChange: $,
          onBlur: $,
          ref: (c) => {
            if (c) {
              (s.registerName.add(e),
                rt(e, n),
                s.registerName.delete(e),
                (a = k(r, e)));
              let t =
                  (E(c.value) &&
                    c.querySelectorAll &&
                    c.querySelectorAll(`input,select,textarea`)[0]) ||
                  c,
                o = xe(t),
                l = a._f.refs || [];
              if (o ? l.find((e) => e === t) : t === a._f.ref) return;
              let u = { ...a._f };
              (o
                ? ((u.refs = [
                    ...l.filter(Se),
                    t,
                    ...(Array.isArray(k(i, e)) ? [{}] : []),
                  ]),
                  (u.ref = { type: t.type, name: e }))
                : ((u.ref = t), delete u.refs),
                M(r, e, { _f: u }),
                W(e, !1, void 0, t));
            } else
              ((a = k(r, e, {})),
                a._f && (a._f.mount = !1),
                (t.shouldUnregister || n.shouldUnregister) &&
                  !(h(s.array, e) && o.action) &&
                  s.unMount.add(e));
          },
        }
      );
    },
    it = () =>
      t.shouldFocusError && !t.shouldUseNativeValidation && z(r, Ke, s.mount),
    at = (e) => {
      A(e) &&
        (I.state.next({ disabled: e }),
        z(
          r,
          (t, n) => {
            let i = k(r, n);
            i &&
              ((t.disabled = i._f.disabled || e),
              Array.isArray(i._f.refs) &&
                i._f.refs.forEach((t) => {
                  t.disabled = i._f.disabled || e;
                }));
          },
          0,
          !1,
        ));
    },
    ot = (e, i) => async (o) => {
      let c, l;
      o && (o.preventDefault && o.preventDefault(), o.persist && o.persist());
      let u = v(a);
      if ((I.state.next({ isSubmitting: !0 }), t.resolver)) {
        let { errors: e, values: t } = await K();
        (U(), (n.errors = e), (u = v(t)));
      } else await q({ fields: r, eventType: y.SUBMIT });
      if (s.disabled.size) for (let e of s.disabled) G(u, e);
      if ((G(n.errors, S), B(n.errors))) {
        I.state.next({ errors: {} });
        try {
          c = await e(u, o);
        } catch (e) {
          l = e;
        }
      } else (i && (await i({ ...n.errors }, o)), it(), setTimeout(it));
      if (
        (I.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: B(n.errors) && !l,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        l)
      )
        throw l;
      return c;
    },
    st = (e, t = {}) => {
      k(r, e) &&
        (E(t.defaultValue)
          ? Q(e, v(k(i, e)))
          : (Q(e, t.defaultValue), M(i, e, v(t.defaultValue))),
        t.keepTouched || G(n.touchedFields, e),
        t.keepDirty ||
          (G(n.dirtyFields, e),
          (n.isDirty = t.defaultValue ? J(e, v(k(i, e))) : J())),
        t.keepError || (G(n.errors, e), N.isValid && H()),
        I.state.next({ ...n }));
    },
    ct = (e, c = {}) => {
      let l = e ? v(e) : i,
        u = v(l),
        d = B(e),
        f = u,
        p = r;
      if ((c.keepDefaultValues || (i = l), !c.keepValues)) {
        if (c.keepDirtyValues) {
          let e = new Set([
            ...s.mount,
            ...we(X(i, a, void 0, p), n.dirtyFields),
          ]);
          for (let t of Array.from(e)) {
            let e = k(n.dirtyFields, t),
              r = k(a, t),
              i = k(f, t);
            e && !E(r) ? M(f, t, r) : !e && !E(i) && Q(t, i);
          }
        } else {
          if (_ && E(e))
            for (let e of s.mount) {
              let t = k(r, e);
              if (t && t._f) {
                let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
                if (ae(e)) {
                  let t = e.closest(`form`);
                  if (t) {
                    t.reset();
                    break;
                  }
                }
              }
            }
          if (c.keepFieldsRef) for (let e of s.mount) Q(e, k(f, e));
          else r = {};
        }
        if (t.shouldUnregister) {
          if (((a = c.keepDefaultValues ? v(i) : {}), c.keepFieldsRef))
            for (let e of s.mount) M(a, e, k(f, e));
        } else a = v(f);
        (I.array.next({ values: { ...f } }),
          I.state.next({ name: void 0, type: void 0, values: { ...f } }));
      }
      ((s = {
        mount: c.keepDirtyValues ? s.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        registerName: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: ``,
      }),
        (o.mount =
          !N.isValid ||
          !!c.keepIsValid ||
          !!c.keepDirtyValues ||
          (!t.shouldUnregister && !B(f))),
        (o.watch = !!t.shouldUnregister),
        (o.keepIsValid = !!c.keepIsValid),
        (o.action = !1),
        c.keepErrors || (n.errors = {}),
        I.state.next({
          submitCount: c.keepSubmitCount ? n.submitCount : 0,
          isDirty: d
            ? !1
            : c.keepDirty
              ? n.isDirty
              : c.keepValues
                ? J()
                : !(!c.keepDefaultValues || R(e, i)),
          isSubmitted: c.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: d
            ? {}
            : c.keepDirtyValues
              ? c.keepDefaultValues && a
                ? X(i, a, void 0, p)
                : n.dirtyFields
              : c.keepDefaultValues && e
                ? X(i, e, void 0, p)
                : c.keepDirty
                  ? n.dirtyFields
                  : {},
          touchedFields: c.keepTouched ? n.touchedFields : {},
          errors: c.keepErrors ? n.errors : {},
          isSubmitSuccessful: c.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
          defaultValues: i,
        }));
    },
    lt = (e, n) => ct(j(e) ? e(a) : e, { ...t.resetOptions, ...n }),
    ut = (e, t = {}) => {
      let n = k(r, e),
        i = n && n._f;
      if (i) {
        let e = i.refs ? i.refs[0] : i.ref;
        e.focus &&
          setTimeout(() => {
            (e.focus(), t.shouldSelect && j(e.select) && e.select());
          });
      }
    },
    dt = (e) => {
      let { name: t, type: r, values: i, ...a } = e;
      n = { ...n, ...a };
    },
    ft = {
      control: {
        register: rt,
        unregister: tt,
        getFieldState: Ye,
        handleSubmit: ot,
        setError: Ze,
        _subscribe: $e,
        _runSchema: K,
        _updateIsValidating: U,
        _focusError: it,
        _getWatch: Y,
        _getDirty: J,
        _setValid: H,
        _setFieldArray: ce,
        _setDisabledField: nt,
        _setErrors: ue,
        _getFieldArray: De,
        _reset: ct,
        _resetDefaultValues: () =>
          j(t.defaultValues) &&
          t.defaultValues().then((e) => {
            (lt(e, t.resetOptions), I.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: Ee,
        _disableForm: at,
        _subjects: I,
        _proxyFormState: N,
        get _fields() {
          return r;
        },
        get _formValues() {
          return a;
        },
        get _state() {
          return o;
        },
        set _state(e) {
          o = e;
        },
        get _defaultValues() {
          return i;
        },
        get _names() {
          return s;
        },
        set _names(e) {
          s = e;
        },
        get _formState() {
          return n;
        },
        get _options() {
          return t;
        },
        set _options(e) {
          ((t = { ...t, ...e }), (w = ne(t.mode)), (D = ne(t.reValidateMode)));
        },
      },
      subscribe: et,
      trigger: qe,
      register: rt,
      handleSubmit: ot,
      watch: Qe,
      setValue: Q,
      setValues: Ge,
      getValues: Je,
      reset: lt,
      resetField: st,
      resetDefaultValues: (e, t = {}) => {
        if (((i = v(e)), !t.keepDirty)) {
          let e = X(i, a, void 0, r);
          ((n.dirtyFields = e), (n.isDirty = !B(e)));
        }
        (t.keepIsValid || H(), I.state.next({ ...n, defaultValues: i }));
      },
      clearErrors: Xe,
      unregister: tt,
      setError: Ze,
      setFocus: ut,
      getFieldState: Ye,
    };
  return { ...ft, formControl: ft };
}
function We(e = {}) {
  let t = s.useRef(void 0),
    n = s.useRef(void 0),
    r = s.useRef(e.formControl),
    [i, a] = s.useState(() => ({
      ...v(He),
      isLoading: j(e.defaultValues),
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: j(e.defaultValues) ? void 0 : e.defaultValues,
    }));
  if (!t.current || (e.formControl && r.current !== e.formControl)) {
    if (((r.current = e.formControl), e.formControl))
      ((t.current = { ...e.formControl, formState: i }),
        e.defaultValues &&
          !j(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      let { formControl: n, ...r } = Ue(e);
      t.current = { ...r, formState: i };
    }
  }
  let o = t.current.control;
  return (
    (o._options = e),
    P(() => {
      let e = o._subscribe({
        formState: o._proxyFormState,
        callback: () => a({ ...o._formState, defaultValues: o._defaultValues }),
        reRenderRoot: !0,
      });
      return (
        a((e) => ({ ...e, isReady: !0 })),
        (o._formState.isReady = !0),
        e
      );
    }, [o]),
    s.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    s.useEffect(() => {
      (e.mode && (o._options.mode = e.mode),
        e.reValidateMode && (o._options.reValidateMode = e.reValidateMode));
    }, [o, e.mode, e.reValidateMode]),
    s.useEffect(() => {
      e.errors && (o._setErrors(e.errors), o._focusError());
    }, [o, e.errors]),
    s.useEffect(() => {
      e.shouldUnregister && o._subjects.state.next({ values: o._getWatch() });
    }, [o, e.shouldUnregister]),
    s.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        let e = o._getDirty();
        e !== i.isDirty && o._subjects.state.next({ isDirty: e });
      }
    }, [o, i.isDirty]),
    s.useEffect(() => {
      e.values && !R(e.values, n.current)
        ? (o._reset(e.values, {
            keepFieldsRef: !0,
            ...o._options.resetOptions,
          }),
          o._options.resetOptions?.keepIsValid || o._setValid(),
          (n.current = e.values),
          a((e) => ({ ...e })))
        : o._resetDefaultValues();
    }, [o, e.values]),
    s.useEffect(() => {
      (o._state.mount || (o._setValid(), (o._state.mount = !0)),
        o._state.watch &&
          ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted());
    }),
    (t.current.formState = s.useMemo(() => N(i, o), [o, i])),
    t.current
  );
}
var Q = n(),
  Ge = [
    `Araştırma İşbirliği`,
    `Doktora Programı`,
    `Proje Desteği`,
    `Etkinlik`,
    `Diğer`,
  ],
  $ = `mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-cyan focus:ring-2 focus:ring-cyan/20`;
function Ke() {
  let { data: e, isLoading: t } = o(),
    n =
      e?.lab_adres?.trim() ||
      `Esentepe, 54050 Serdivan/Sakarya — Sakarya Araştırma Geliştirme Uygulama ve Araştırma Merkezi`,
    s = e?.lab_email?.trim() || `cybersenselab@gmail.com`,
    c = e?.lab_calisma_saatleri?.trim() || `Pazartesi – Cuma: 09:00 – 17:00`,
    l = encodeURIComponent(n),
    u = `https://www.google.com/maps?q=${l}&output=embed`,
    d = `https://www.google.com/maps/search/?api=1&query=${l}`,
    f = e?.lab_telefon?.trim() || `+90 (264) 295 5529`,
    p = `tel:${f.replace(/[^\d+]/g, ``)}`,
    {
      register: m,
      handleSubmit: h,
      formState: { errors: g },
    } = We();
  return (0, Q.jsxs)(Q.Fragment, {
    children: [
      (0, Q.jsx)(`div`, {
        className: `bg-navy py-12`,
        children: (0, Q.jsx)(`div`, {
          className: `max-w-7xl mx-auto px-4`,
          children: (0, Q.jsxs)(`h1`, {
            className: `text-3xl font-extrabold text-white flex items-center gap-3`,
            children: [
              (0, Q.jsx)(`i`, {
                className: `fa fa-envelope text-cyan`,
                "aria-hidden": `true`,
              }),
              ` İletişim`,
            ],
          }),
        }),
      }),
      (0, Q.jsx)(`section`, {
        className: `min-h-[60vh] bg-gray-50/50 py-12`,
        children: (0, Q.jsxs)(`div`, {
          className: `mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-5`,
          children: [
            (0, Q.jsxs)(`article`, {
              className: `rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2`,
              children: [
                (0, Q.jsx)(`h2`, {
                  className: `text-2xl font-bold text-navy`,
                  children: `Laboratuvar Bilgileri`,
                }),
                (0, Q.jsx)(`div`, { className: `mt-3 h-0.5 w-12 bg-cyan` }),
                t
                  ? (0, Q.jsxs)(`div`, {
                      className: `mt-8 space-y-6`,
                      "aria-live": `polite`,
                      "aria-busy": `true`,
                      children: [
                        Array.from({ length: 4 }).map((e, t) =>
                          (0, Q.jsxs)(
                            `div`,
                            {
                              className: `flex items-start gap-4`,
                              children: [
                                (0, Q.jsx)(i, {
                                  className: `h-10 w-10 shrink-0 rounded-xl`,
                                }),
                                (0, Q.jsxs)(`div`, {
                                  className: `flex-1 space-y-2 pt-1`,
                                  children: [
                                    (0, Q.jsx)(i, { className: `h-4 w-28` }),
                                    (0, Q.jsx)(i, { className: `h-4 w-3/4` }),
                                  ],
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                        (0, Q.jsx)(i, { className: `h-64 w-full` }),
                      ],
                    })
                  : (0, Q.jsxs)(Q.Fragment, {
                      children: [
                        (0, Q.jsxs)(`div`, {
                          className: `mt-8 space-y-6`,
                          children: [
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-start gap-4`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan`,
                                  children: (0, Q.jsx)(`i`, {
                                    className: `fa fa-map-marker`,
                                    "aria-hidden": `true`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`h3`, {
                                      className: `font-semibold text-navy`,
                                      children: `Adres`,
                                    }),
                                    (0, Q.jsx)(`p`, {
                                      className: `mt-1 text-sm leading-6 text-gray-600`,
                                      children: n,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-start gap-4`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan`,
                                  children: (0, Q.jsx)(`i`, {
                                    className: `fa fa-envelope`,
                                    "aria-hidden": `true`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`h3`, {
                                      className: `font-semibold text-navy`,
                                      children: `E-posta`,
                                    }),
                                    (0, Q.jsx)(`a`, {
                                      href: `mailto:${s}`,
                                      className: `mt-1 block text-sm text-gray-600 transition-colors hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30`,
                                      children: s,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-start gap-4`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan`,
                                  children: (0, Q.jsx)(`i`, {
                                    className: `fa fa-phone`,
                                    "aria-hidden": `true`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`h3`, {
                                      className: `font-semibold text-navy`,
                                      children: `Telefon`,
                                    }),
                                    (0, Q.jsx)(`a`, {
                                      href: p,
                                      className: `mt-1 block text-sm text-gray-600 transition-colors hover:text-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30`,
                                      children: f,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, Q.jsxs)(`div`, {
                              className: `flex items-start gap-4`,
                              children: [
                                (0, Q.jsx)(`span`, {
                                  className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan`,
                                  children: (0, Q.jsx)(`i`, {
                                    className: `fa fa-clock`,
                                    "aria-hidden": `true`,
                                  }),
                                }),
                                (0, Q.jsxs)(`div`, {
                                  children: [
                                    (0, Q.jsx)(`h3`, {
                                      className: `font-semibold text-navy`,
                                      children: `Çalışma Saatleri`,
                                    }),
                                    (0, Q.jsx)(`p`, {
                                      className: `mt-1 text-sm text-gray-600`,
                                      children: c,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, Q.jsx)(`div`, {
                          className: `mt-8 overflow-hidden rounded-xl border border-gray-100`,
                          children: (0, Q.jsx)(`iframe`, {
                            title: `${n} konumu`,
                            src: u,
                            className: `h-64 w-full border-0`,
                            loading: `lazy`,
                            referrerPolicy: `no-referrer-when-downgrade`,
                          }),
                        }),
                        (0, Q.jsxs)(`a`, {
                          href: d,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition-colors hover:text-navy focus:outline-none focus:ring-2 focus:ring-cyan/30`,
                          children: [
                            `Google Maps'te Aç`,
                            (0, Q.jsx)(`i`, {
                              className: `fa fa-external-link`,
                              "aria-hidden": `true`,
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
            (0, Q.jsxs)(`article`, {
              className: `rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3`,
              children: [
                (0, Q.jsxs)(`h2`, {
                  className: `flex items-center gap-3 text-2xl font-bold text-navy`,
                  children: [
                    (0, Q.jsx)(`i`, {
                      className: `fa fa-paper-plane text-cyan`,
                      "aria-hidden": `true`,
                    }),
                    `Mesaj Gönderin`,
                  ],
                }),
                (0, Q.jsx)(`div`, { className: `mt-3 h-0.5 w-12 bg-cyan` }),
                (0, Q.jsxs)(`form`, {
                  className: `mt-8 space-y-6`,
                  onSubmit: h((e) => {
                    if (t) {
                      r.error(`İletişim bilgileri henüz yükleniyor.`);
                      return;
                    }
                    let n = `[CyberSense İletişim] ${e.subject} - ${e.fullName}`,
                      i = [
                        `Ad Soyad: ${e.fullName}`,
                        `Gönderen E-posta: ${e.email}`,
                        `Konu: ${e.subject}`,
                        ``,
                        `Mesaj:`,
                        e.message,
                      ].join(`\r
`);
                    (r.success(`E-posta uygulamanız açılıyor.`),
                      (window.location.href = `mailto:${s}?subject=${encodeURIComponent(n)}&body=${encodeURIComponent(i)}`));
                  }),
                  noValidate: !0,
                  children: [
                    (0, Q.jsxs)(`div`, {
                      className: `grid gap-6 md:grid-cols-2`,
                      children: [
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`label`, {
                              htmlFor: `fullName`,
                              className: `text-sm font-semibold text-navy`,
                              children: `Ad Soyad`,
                            }),
                            (0, Q.jsx)(`input`, {
                              id: `fullName`,
                              type: `text`,
                              autoComplete: `name`,
                              className: $,
                              "aria-invalid": g.fullName ? `true` : `false`,
                              "aria-describedby": g.fullName
                                ? `fullName-error`
                                : void 0,
                              ...m(`fullName`, {
                                required: `Ad soyad alanı zorunludur.`,
                              }),
                            }),
                            g.fullName &&
                              (0, Q.jsx)(`p`, {
                                id: `fullName-error`,
                                role: `alert`,
                                className: `mt-2 text-sm text-red-600`,
                                children: g.fullName.message,
                              }),
                          ],
                        }),
                        (0, Q.jsxs)(`div`, {
                          children: [
                            (0, Q.jsx)(`label`, {
                              htmlFor: `email`,
                              className: `text-sm font-semibold text-navy`,
                              children: `E-posta`,
                            }),
                            (0, Q.jsx)(`input`, {
                              id: `email`,
                              type: `email`,
                              autoComplete: `email`,
                              className: $,
                              "aria-invalid": g.email ? `true` : `false`,
                              "aria-describedby": g.email
                                ? `email-error`
                                : void 0,
                              ...m(`email`, {
                                required: `E-posta alanı zorunludur.`,
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: `Geçerli bir e-posta adresi girin.`,
                                },
                              }),
                            }),
                            g.email &&
                              (0, Q.jsx)(`p`, {
                                id: `email-error`,
                                role: `alert`,
                                className: `mt-2 text-sm text-red-600`,
                                children: g.email.message,
                              }),
                          ],
                        }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`label`, {
                          htmlFor: `subject`,
                          className: `text-sm font-semibold text-navy`,
                          children: `Konu`,
                        }),
                        (0, Q.jsxs)(`select`, {
                          id: `subject`,
                          defaultValue: ``,
                          className: $,
                          "aria-invalid": g.subject ? `true` : `false`,
                          "aria-describedby": g.subject
                            ? `subject-error`
                            : void 0,
                          ...m(`subject`, {
                            required: `Konu seçimi zorunludur.`,
                          }),
                          children: [
                            (0, Q.jsx)(`option`, {
                              value: ``,
                              disabled: !0,
                              children: `Bir konu seçin`,
                            }),
                            Ge.map((e) =>
                              (0, Q.jsx)(
                                `option`,
                                { value: e, children: e },
                                e,
                              ),
                            ),
                          ],
                        }),
                        g.subject &&
                          (0, Q.jsx)(`p`, {
                            id: `subject-error`,
                            role: `alert`,
                            className: `mt-2 text-sm text-red-600`,
                            children: g.subject.message,
                          }),
                      ],
                    }),
                    (0, Q.jsxs)(`div`, {
                      children: [
                        (0, Q.jsx)(`label`, {
                          htmlFor: `message`,
                          className: `text-sm font-semibold text-navy`,
                          children: `Mesaj`,
                        }),
                        (0, Q.jsx)(`textarea`, {
                          id: `message`,
                          rows: 7,
                          className: $,
                          "aria-invalid": g.message ? `true` : `false`,
                          "aria-describedby": g.message
                            ? `message-error`
                            : void 0,
                          ...m(`message`, {
                            required: `Mesaj alanı zorunludur.`,
                          }),
                        }),
                        g.message &&
                          (0, Q.jsx)(`p`, {
                            id: `message-error`,
                            role: `alert`,
                            className: `mt-2 text-sm text-red-600`,
                            children: g.message.message,
                          }),
                      ],
                    }),
                    (0, Q.jsxs)(`button`, {
                      type: `submit`,
                      className: `inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan px-6 py-3.5 text-sm font-bold text-navy shadow-sm transition hover:bg-cyan-dim hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2`,
                      disabled: t,
                      children: [
                        (0, Q.jsx)(`i`, {
                          className: `fa fa-paper-plane`,
                          "aria-hidden": `true`,
                        }),
                        `Gönder`,
                      ],
                    }),
                    (0, Q.jsxs)(`p`, {
                      className: `text-xs leading-5 text-gray-400`,
                      children: [
                        `Bu form bilgileri site veritabanına kaydetmez; gönderim için e-posta uygulamanızı açar. Kişisel verilerin işlenmesine ilişkin ayrıntılar için`,
                        ` `,
                        (0, Q.jsx)(a, {
                          to: `/gizlilik-ve-kvkk`,
                          className: `font-semibold text-cyan hover:text-navy`,
                          children: `Gizlilik ve KVKK Aydınlatma Metni'ni`,
                        }),
                        ` `,
                        `inceleyebilirsiniz.`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export { Ke as default };
