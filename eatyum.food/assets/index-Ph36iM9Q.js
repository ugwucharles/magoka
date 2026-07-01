var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { $ as A } from "./index-DOfu0sXg.js";
var ft = (r) => r.type === "checkbox", Ze = (r) => r instanceof Date, re = (r) => r == null;
const Cr = (r) => typeof r == "object";
var W = (r) => !re(r) && !Array.isArray(r) && Cr(r) && !Ze(r), Er = (r) => W(r) && r.target ? ft(r.target) ? r.target.checked : r.target.value : r, cs = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r, Or = (r, e) => r.has(cs(e)), ls = (r) => {
  const e = r.constructor && r.constructor.prototype;
  return W(e) && e.hasOwnProperty("isPrototypeOf");
}, Xt = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function U(r) {
  let e;
  const t = Array.isArray(r), s = typeof FileList < "u" ? r instanceof FileList : false;
  if (r instanceof Date) e = new Date(r);
  else if (r instanceof Set) e = new Set(r);
  else if (!(Xt && (r instanceof Blob || s)) && (t || W(r))) if (e = t ? [] : {}, !t && !ls(r)) e = r;
  else for (const n in r) r.hasOwnProperty(n) && (e[n] = U(r[n]));
  else return r;
  return e;
}
var ht = (r) => Array.isArray(r) ? r.filter(Boolean) : [], $ = (r) => r === void 0, y = (r, e, t) => {
  if (!e || !W(r)) return t;
  const s = ht(e.split(/[,[\].]+?/)).reduce((n, a) => re(n) ? n : n[a], r);
  return $(s) || s === r ? $(r[e]) ? t : r[e] : s;
}, de = (r) => typeof r == "boolean", Qt = (r) => /^\w*$/.test(r), Fr = (r) => ht(r.replace(/["|']|\]/g, "").split(/\.|\[/)), j = (r, e, t) => {
  let s = -1;
  const n = Qt(e) ? [e] : Fr(e), a = n.length, i = a - 1;
  for (; ++s < a; ) {
    const o = n[s];
    let c = t;
    if (s !== i) {
      const l = r[o];
      c = W(l) || Array.isArray(l) ? l : isNaN(+n[s + 1]) ? {} : [];
    }
    if (o === "__proto__" || o === "constructor" || o === "prototype") return;
    r[o] = c, r = r[o];
  }
};
const _t = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" }, he = { onBlur: "onBlur", onChange: "onChange", onSubmit: "onSubmit", onTouched: "onTouched", all: "all" }, we = { max: "max", min: "min", maxLength: "maxLength", minLength: "minLength", pattern: "pattern", required: "required", validate: "validate" }, Nr = A.createContext(null), Ct = () => A.useContext(Nr), Un = (r) => {
  const _a = r, { children: e } = _a, t = __objRest(_a, ["children"]);
  return A.createElement(Nr.Provider, { value: t }, e);
};
var Rr = (r, e, t, s = true) => {
  const n = { defaultValues: e._defaultValues };
  for (const a in r) Object.defineProperty(n, a, { get: () => {
    const i = a;
    return e._proxyFormState[i] !== he.all && (e._proxyFormState[i] = !s || he.all), t && (t[i] = true), r[i];
  } });
  return n;
};
function fs(r) {
  const e = Ct(), { control: t = e.control, disabled: s, name: n, exact: a } = r || {}, [i, o] = A.useState(t._formState), c = A.useRef({ isDirty: false, isLoading: false, dirtyFields: false, touchedFields: false, validatingFields: false, isValidating: false, isValid: false, errors: false }), l = A.useRef(n);
  return l.current = n, A.useEffect(() => t._subscribe({ name: l.current, formState: c.current, exact: a, callback: (m) => {
    !s && o(__spreadValues(__spreadValues({}, t._formState), m));
  } }), [t, s, a]), A.useEffect(() => {
    c.current.isValid && t._setValid(true);
  }, [t]), A.useMemo(() => Rr(i, t, c.current, false), [i, t]);
}
var ge = (r) => typeof r == "string", Zr = (r, e, t, s, n) => ge(r) ? (s && e.watch.add(r), y(t, r, n)) : Array.isArray(r) ? r.map((a) => (s && e.watch.add(a), y(t, a))) : (s && (e.watchAll = true), t);
function hs(r) {
  const e = Ct(), { control: t = e.control, name: s, defaultValue: n, disabled: a, exact: i } = r || {}, o = A.useRef(s), c = A.useRef(n);
  o.current = s, A.useEffect(() => t._subscribe({ name: o.current, formState: { values: true }, exact: i, callback: (C) => !a && m(Zr(o.current, t._names, C.values || t._formValues, false, c.current)) }), [t, a, i]);
  const [l, m] = A.useState(t._getWatch(s, n));
  return A.useEffect(() => t._removeUnmounted()), l;
}
function ms(r) {
  const e = Ct(), { name: t, disabled: s, control: n = e.control, shouldUnregister: a } = r, i = Or(n._names.array, t), o = hs({ control: n, name: t, defaultValue: y(n._formValues, t, y(n._defaultValues, t, r.defaultValue)), exact: true }), c = fs({ control: n, name: t, exact: true }), l = A.useRef(r), m = A.useRef(n.register(t, __spreadValues(__spreadProps(__spreadValues({}, r.rules), { value: o }), de(r.disabled) ? { disabled: r.disabled } : {}))), C = A.useMemo(() => Object.defineProperties({}, { invalid: { enumerable: true, get: () => !!y(c.errors, t) }, isDirty: { enumerable: true, get: () => !!y(c.dirtyFields, t) }, isTouched: { enumerable: true, get: () => !!y(c.touchedFields, t) }, isValidating: { enumerable: true, get: () => !!y(c.validatingFields, t) }, error: { enumerable: true, get: () => y(c.errors, t) } }), [c, t]), E = A.useCallback((G) => m.current.onChange({ target: { value: Er(G), name: t }, type: _t.CHANGE }), [t]), L = A.useCallback(() => m.current.onBlur({ target: { value: y(n._formValues, t), name: t }, type: _t.BLUR }), [t, n._formValues]), ie = A.useCallback((G) => {
    const K = y(n._fields, t);
    K && G && (K._f.ref = { focus: () => G.focus(), select: () => G.select(), setCustomValidity: (O) => G.setCustomValidity(O), reportValidity: () => G.reportValidity() });
  }, [n._fields, t]), Y = A.useMemo(() => __spreadProps(__spreadValues({ name: t, value: o }, de(s) || c.disabled ? { disabled: c.disabled || s } : {}), { onChange: E, onBlur: L, ref: ie }), [t, s, c.disabled, E, L, ie, o]);
  return A.useEffect(() => {
    const G = n._options.shouldUnregister || a;
    n.register(t, __spreadValues(__spreadValues({}, l.current.rules), de(l.current.disabled) ? { disabled: l.current.disabled } : {}));
    const K = (O, oe) => {
      const te = y(n._fields, O);
      te && te._f && (te._f.mount = oe);
    };
    if (K(t, true), G) {
      const O = U(y(n._options.defaultValues, t));
      j(n._defaultValues, t, O), $(y(n._formValues, t)) && j(n._formValues, t, O);
    }
    return !i && n.register(t), () => {
      (i ? G && !n._state.action : G) ? n.unregister(t) : K(t, false);
    };
  }, [t, n, i, a]), A.useEffect(() => {
    n._setDisabledField({ disabled: s, name: t });
  }, [s, t, n]), A.useMemo(() => ({ field: Y, formState: c, fieldState: C }), [Y, c, C]);
}
const Bn = (r) => r.render(ms(r));
var Ir = (r, e, t, s, n) => e ? __spreadProps(__spreadValues({}, t[r]), { types: __spreadProps(__spreadValues({}, t[r] && t[r].types ? t[r].types : {}), { [s]: n || true }) }) : {}, ae = (r) => Array.isArray(r) ? r : [r], pr = () => {
  let r = [];
  return { get observers() {
    return r;
  }, next: (n) => {
    for (const a of r) a.next && a.next(n);
  }, subscribe: (n) => (r.push(n), { unsubscribe: () => {
    r = r.filter((a) => a !== n);
  } }), unsubscribe: () => {
    r = [];
  } };
}, Wt = (r) => re(r) || !Cr(r);
function Ee(r, e) {
  if (Wt(r) || Wt(e)) return r === e;
  if (Ze(r) && Ze(e)) return r.getTime() === e.getTime();
  const t = Object.keys(r), s = Object.keys(e);
  if (t.length !== s.length) return false;
  for (const n of t) {
    const a = r[n];
    if (!s.includes(n)) return false;
    if (n !== "ref") {
      const i = e[n];
      if (Ze(a) && Ze(i) || W(a) && W(i) || Array.isArray(a) && Array.isArray(i) ? !Ee(a, i) : a !== i) return false;
    }
  }
  return true;
}
var Q = (r) => W(r) && !Object.keys(r).length, er = (r) => r.type === "file", me = (r) => typeof r == "function", vt = (r) => {
  if (!Xt) return false;
  const e = r ? r.ownerDocument : 0;
  return r instanceof (e && e.defaultView ? e.defaultView.HTMLElement : HTMLElement);
}, Dr = (r) => r.type === "select-multiple", tr = (r) => r.type === "radio", ps = (r) => tr(r) || ft(r), It = (r) => vt(r) && r.isConnected;
function ys(r, e) {
  const t = e.slice(0, -1).length;
  let s = 0;
  for (; s < t; ) r = $(r) ? s++ : r[e[s++]];
  return r;
}
function _s(r) {
  for (const e in r) if (r.hasOwnProperty(e) && !$(r[e])) return false;
  return true;
}
function J(r, e) {
  const t = Array.isArray(e) ? e : Qt(e) ? [e] : Fr(e), s = t.length === 1 ? r : ys(r, t), n = t.length - 1, a = t[n];
  return s && delete s[a], n !== 0 && (W(s) && Q(s) || Array.isArray(s) && _s(s)) && J(r, t.slice(0, -1)), r;
}
var jr = (r) => {
  for (const e in r) if (me(r[e])) return true;
  return false;
};
function gt(r, e = {}) {
  const t = Array.isArray(r);
  if (W(r) || t) for (const s in r) Array.isArray(r[s]) || W(r[s]) && !jr(r[s]) ? (e[s] = Array.isArray(r[s]) ? [] : {}, gt(r[s], e[s])) : re(r[s]) || (e[s] = true);
  return e;
}
function Mr(r, e, t) {
  const s = Array.isArray(r);
  if (W(r) || s) for (const n in r) Array.isArray(r[n]) || W(r[n]) && !jr(r[n]) ? $(e) || Wt(t[n]) ? t[n] = Array.isArray(r[n]) ? gt(r[n], []) : __spreadValues({}, gt(r[n])) : Mr(r[n], re(e) ? {} : e[n], t[n]) : t[n] = !Ee(r[n], e[n]);
  return t;
}
var Ye = (r, e) => Mr(r, e, gt(e));
const yr = { value: false, isValid: false }, _r = { value: true, isValid: true };
var Pr = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const e = r.filter((t) => t && t.checked && !t.disabled).map((t) => t.value);
      return { value: e, isValid: !!e.length };
    }
    return r[0].checked && !r[0].disabled ? r[0].attributes && !$(r[0].attributes.value) ? $(r[0].value) || r[0].value === "" ? _r : { value: r[0].value, isValid: true } : _r : yr;
  }
  return yr;
}, Lr = (r, { valueAsNumber: e, valueAsDate: t, setValueAs: s }) => $(r) ? r : e ? r === "" ? NaN : r && +r : t && ge(r) ? new Date(r) : s ? s(r) : r;
const vr = { isValid: false, value: null };
var $r = (r) => Array.isArray(r) ? r.reduce((e, t) => t && t.checked && !t.disabled ? { isValid: true, value: t.value } : e, vr) : vr;
function gr(r) {
  const e = r.ref;
  return er(e) ? e.files : tr(e) ? $r(r.refs).value : Dr(e) ? [...e.selectedOptions].map(({ value: t }) => t) : ft(e) ? Pr(r.refs).value : Lr($(e.value) ? r.ref.value : e.value, r);
}
var vs = (r, e, t, s) => {
  const n = {};
  for (const a of r) {
    const i = y(e, a);
    i && j(n, a, i._f);
  }
  return { criteriaMode: t, names: [...r], fields: n, shouldUseNativeValidation: s };
}, bt = (r) => r instanceof RegExp, Ge = (r) => $(r) ? r : bt(r) ? r.source : W(r) ? bt(r.value) ? r.value.source : r.value : r, $e = (r) => ({ isOnSubmit: !r || r === he.onSubmit, isOnBlur: r === he.onBlur, isOnChange: r === he.onChange, isOnAll: r === he.all, isOnTouch: r === he.onTouched });
const br = "AsyncFunction";
var gs = (r) => !!r && !!r.validate && !!(me(r.validate) && r.validate.constructor.name === br || W(r.validate) && Object.values(r.validate).find((e) => e.constructor.name === br)), bs = (r) => r.mount && (r.required || r.min || r.max || r.maxLength || r.minLength || r.pattern || r.validate), qt = (r, e, t) => !t && (e.watchAll || e.watch.has(r) || [...e.watch].some((s) => r.startsWith(s) && /^\.\w+/.test(r.slice(s.length))));
const Be = (r, e, t, s) => {
  for (const n of t || Object.keys(r)) {
    const a = y(r, n);
    if (a) {
      const _a = a, { _f: i } = _a, o = __objRest(_a, ["_f"]);
      if (i) {
        if (i.refs && i.refs[0] && e(i.refs[0], n) && !s) return true;
        if (i.ref && e(i.ref, i.name) && !s) return true;
        if (Be(o, e)) break;
      } else if (W(o) && Be(o, e)) break;
    }
  }
};
function xr(r, e, t) {
  const s = y(r, t);
  if (s || Qt(t)) return { error: s, name: t };
  const n = t.split(".");
  for (; n.length; ) {
    const a = n.join("."), i = y(e, a), o = y(r, a);
    if (i && !Array.isArray(i) && t !== a) return { name: t };
    if (o && o.type) return { name: a, error: o };
    n.pop();
  }
  return { name: t };
}
var xs = (r, e, t, s) => {
  t(r);
  const _a = r, { name: n } = _a, a = __objRest(_a, ["name"]);
  return Q(a) || Object.keys(a).length >= Object.keys(e).length || Object.keys(a).find((i) => e[i] === (!s || he.all));
}, ks = (r, e, t) => !r || !e || r === e || ae(r).some((s) => s && (t ? s === e : s.startsWith(e) || e.startsWith(s))), ws = (r, e, t, s, n) => n.isOnAll ? false : !t && n.isOnTouch ? !(e || r) : (t ? s.isOnBlur : n.isOnBlur) ? !r : (t ? s.isOnChange : n.isOnChange) ? r : true, As = (r, e) => !ht(y(r, e)).length && J(r, e), Ur = (r, e, t) => {
  const s = ae(y(r, t));
  return j(s, "root", e[t]), j(r, t, s), r;
}, yt = (r) => ge(r);
function kr(r, e, t = "validate") {
  if (yt(r) || Array.isArray(r) && r.every(yt) || de(r) && !r) return { type: t, message: yt(r) ? r : "", ref: e };
}
var Pe = (r) => W(r) && !bt(r) ? r : { value: r, message: "" }, Ht = (r, e, t, s, n, a) => __async(null, null, function* () {
  const { ref: i, refs: o, required: c, maxLength: l, minLength: m, min: C, max: E, pattern: L, validate: ie, name: Y, valueAsNumber: G, mount: K } = r._f, O = y(t, Y);
  if (!K || e.has(Y)) return {};
  const oe = o ? o[0] : i, te = (P) => {
    n && oe.reportValidity && (oe.setCustomValidity(de(P) ? "" : P || ""), oe.reportValidity());
  }, q = {}, T = tr(i), w = ft(i), R = T || w, M = (G || er(i)) && $(i.value) && $(O) || vt(i) && i.value === "" || O === "" || Array.isArray(O) && !O.length, ue = Ir.bind(null, Y, s, q), le = (P, Z, z, ne = we.maxLength, fe = we.minLength) => {
    const ve = P ? Z : z;
    q[Y] = __spreadValues({ type: P ? ne : fe, message: ve, ref: i }, ue(P ? ne : fe, ve));
  };
  if (a ? !Array.isArray(O) || !O.length : c && (!R && (M || re(O)) || de(O) && !O || w && !Pr(o).isValid || T && !$r(o).isValid)) {
    const { value: P, message: Z } = yt(c) ? { value: !!c, message: c } : Pe(c);
    if (P && (q[Y] = __spreadValues({ type: we.required, message: Z, ref: oe }, ue(we.required, Z)), !s)) return te(Z), q;
  }
  if (!M && (!re(C) || !re(E))) {
    let P, Z;
    const z = Pe(E), ne = Pe(C);
    if (!re(O) && !isNaN(O)) {
      const fe = i.valueAsNumber || O && +O;
      re(z.value) || (P = fe > z.value), re(ne.value) || (Z = fe < ne.value);
    } else {
      const fe = i.valueAsDate || new Date(O), ve = (pt) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + pt), Ve = i.type == "time", Je = i.type == "week";
      ge(z.value) && O && (P = Ve ? ve(O) > ve(z.value) : Je ? O > z.value : fe > new Date(z.value)), ge(ne.value) && O && (Z = Ve ? ve(O) < ve(ne.value) : Je ? O < ne.value : fe < new Date(ne.value));
    }
    if ((P || Z) && (le(!!P, z.message, ne.message, we.max, we.min), !s)) return te(q[Y].message), q;
  }
  if ((l || m) && !M && (ge(O) || a && Array.isArray(O))) {
    const P = Pe(l), Z = Pe(m), z = !re(P.value) && O.length > +P.value, ne = !re(Z.value) && O.length < +Z.value;
    if ((z || ne) && (le(z, P.message, Z.message), !s)) return te(q[Y].message), q;
  }
  if (L && !M && ge(O)) {
    const { value: P, message: Z } = Pe(L);
    if (bt(P) && !O.match(P) && (q[Y] = __spreadValues({ type: we.pattern, message: Z, ref: i }, ue(we.pattern, Z)), !s)) return te(Z), q;
  }
  if (ie) {
    if (me(ie)) {
      const P = yield ie(O, t), Z = kr(P, oe);
      if (Z && (q[Y] = __spreadValues(__spreadValues({}, Z), ue(we.validate, Z.message)), !s)) return te(Z.message), q;
    } else if (W(ie)) {
      let P = {};
      for (const Z in ie) {
        if (!Q(P) && !s) break;
        const z = kr(yield ie[Z](O, t), oe, Z);
        z && (P = __spreadValues(__spreadValues({}, z), ue(Z, z.message)), te(z.message), s && (q[Y] = P));
      }
      if (!Q(P) && (q[Y] = __spreadValues({ ref: oe }, P), !s)) return q;
    }
  }
  return te(true), q;
});
const Ts = { mode: he.onSubmit, reValidateMode: he.onChange, shouldFocusError: true };
function Ss(r = {}) {
  let e = __spreadValues(__spreadValues({}, Ts), r), t = { submitCount: 0, isDirty: false, isLoading: me(e.defaultValues), isValidating: false, isSubmitted: false, isSubmitting: false, isSubmitSuccessful: false, isValid: false, touchedFields: {}, dirtyFields: {}, validatingFields: {}, errors: e.errors || {}, disabled: e.disabled || false };
  const s = {};
  let n = W(e.defaultValues) || W(e.values) ? U(e.values || e.defaultValues) || {} : {}, a = e.shouldUnregister ? {} : U(n), i = { action: false, mount: false, watch: false }, o = { mount: /* @__PURE__ */ new Set(), disabled: /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set() }, c, l = 0;
  const m = { isDirty: false, dirtyFields: false, validatingFields: false, touchedFields: false, isValidating: false, isValid: false, errors: false };
  let C = __spreadValues({}, m);
  const E = { array: pr(), state: pr() }, L = $e(e.mode), ie = $e(e.reValidateMode), Y = e.criteriaMode === he.all, G = (u) => (d) => {
    clearTimeout(l), l = setTimeout(u, d);
  }, K = (u) => __async(null, null, function* () {
    if (!e.disabled && (m.isValid || C.isValid || u)) {
      const d = e.resolver ? Q((yield M()).errors) : yield le(s, true);
      d !== t.isValid && E.state.next({ isValid: d });
    }
  }), O = (u, d) => {
    !e.disabled && (m.isValidating || m.validatingFields || C.isValidating || C.validatingFields) && ((u || Array.from(o.mount)).forEach((f) => {
      f && (d ? j(t.validatingFields, f, d) : J(t.validatingFields, f));
    }), E.state.next({ validatingFields: t.validatingFields, isValidating: !Q(t.validatingFields) }));
  }, oe = (u, d = [], f, b, _ = true, p = true) => {
    if (b && f && !e.disabled) {
      if (i.action = true, p && Array.isArray(y(s, u))) {
        const x = f(y(s, u), b.argA, b.argB);
        _ && j(s, u, x);
      }
      if (p && Array.isArray(y(t.errors, u))) {
        const x = f(y(t.errors, u), b.argA, b.argB);
        _ && j(t.errors, u, x), As(t.errors, u);
      }
      if ((m.touchedFields || C.touchedFields) && p && Array.isArray(y(t.touchedFields, u))) {
        const x = f(y(t.touchedFields, u), b.argA, b.argB);
        _ && j(t.touchedFields, u, x);
      }
      (m.dirtyFields || C.dirtyFields) && (t.dirtyFields = Ye(n, a)), E.state.next({ name: u, isDirty: Z(u, d), dirtyFields: t.dirtyFields, errors: t.errors, isValid: t.isValid });
    } else j(a, u, d);
  }, te = (u, d) => {
    j(t.errors, u, d), E.state.next({ errors: t.errors });
  }, q = (u) => {
    t.errors = u, E.state.next({ errors: t.errors, isValid: false });
  }, T = (u, d, f, b) => {
    const _ = y(s, u);
    if (_) {
      const p = y(a, u, $(f) ? y(n, u) : f);
      $(p) || b && b.defaultChecked || d ? j(a, u, d ? p : gr(_._f)) : fe(u, p), i.mount && K();
    }
  }, w = (u, d, f, b, _) => {
    let p = false, x = false;
    const D = { name: u };
    if (!e.disabled) {
      if (!f || b) {
        (m.isDirty || C.isDirty) && (x = t.isDirty, t.isDirty = D.isDirty = Z(), p = x !== D.isDirty);
        const H = Ee(y(n, u), d);
        x = !!y(t.dirtyFields, u), H ? J(t.dirtyFields, u) : j(t.dirtyFields, u, true), D.dirtyFields = t.dirtyFields, p = p || (m.dirtyFields || C.dirtyFields) && x !== !H;
      }
      if (f) {
        const H = y(t.touchedFields, u);
        H || (j(t.touchedFields, u, f), D.touchedFields = t.touchedFields, p = p || (m.touchedFields || C.touchedFields) && H !== f);
      }
      p && _ && E.state.next(D);
    }
    return p ? D : {};
  }, R = (u, d, f, b) => {
    const _ = y(t.errors, u), p = (m.isValid || C.isValid) && de(d) && t.isValid !== d;
    if (e.delayError && f ? (c = G(() => te(u, f)), c(e.delayError)) : (clearTimeout(l), c = null, f ? j(t.errors, u, f) : J(t.errors, u)), (f ? !Ee(_, f) : _) || !Q(b) || p) {
      const x = __spreadProps(__spreadValues(__spreadValues({}, b), p && de(d) ? { isValid: d } : {}), { errors: t.errors, name: u });
      t = __spreadValues(__spreadValues({}, t), x), E.state.next(x);
    }
  }, M = (u) => __async(null, null, function* () {
    O(u, true);
    const d = yield e.resolver(a, e.context, vs(u || o.mount, s, e.criteriaMode, e.shouldUseNativeValidation));
    return O(u), d;
  }), ue = (u) => __async(null, null, function* () {
    const { errors: d } = yield M(u);
    if (u) for (const f of u) {
      const b = y(d, f);
      b ? j(t.errors, f, b) : J(t.errors, f);
    }
    else t.errors = d;
    return d;
  }), le = (_0, _1, ..._2) => __async(null, [_0, _1, ..._2], function* (u, d, f = { valid: true }) {
    for (const b in u) {
      const _ = u[b];
      if (_) {
        const _a = _, { _f: p } = _a, x = __objRest(_a, ["_f"]);
        if (p) {
          const D = o.array.has(p.name), H = _._f && gs(_._f);
          H && m.validatingFields && O([b], true);
          const X = yield Ht(_, o.disabled, a, Y, e.shouldUseNativeValidation && !d, D);
          if (H && m.validatingFields && O([b]), X[p.name] && (f.valid = false, d)) break;
          !d && (y(X, p.name) ? D ? Ur(t.errors, X, p.name) : j(t.errors, p.name, X[p.name]) : J(t.errors, p.name));
        }
        !Q(x) && (yield le(x, d, f));
      }
    }
    return f.valid;
  }), P = () => {
    for (const u of o.unMount) {
      const d = y(s, u);
      d && (d._f.refs ? d._f.refs.every((f) => !It(f)) : !It(d._f.ref)) && Ft(u);
    }
    o.unMount = /* @__PURE__ */ new Set();
  }, Z = (u, d) => !e.disabled && (u && d && j(a, u, d), !Ee(sr(), n)), z = (u, d, f) => Zr(u, o, __spreadValues({}, i.mount ? a : $(d) ? n : ge(u) ? { [u]: d } : d), f, d), ne = (u) => ht(y(i.mount ? a : n, u, e.shouldUnregister ? y(n, u, []) : [])), fe = (u, d, f = {}) => {
    const b = y(s, u);
    let _ = d;
    if (b) {
      const p = b._f;
      p && (!p.disabled && j(a, u, Lr(d, p)), _ = vt(p.ref) && re(d) ? "" : d, Dr(p.ref) ? [...p.ref.options].forEach((x) => x.selected = _.includes(x.value)) : p.refs ? ft(p.ref) ? p.refs.length > 1 ? p.refs.forEach((x) => (!x.defaultChecked || !x.disabled) && (x.checked = Array.isArray(_) ? !!_.find((D) => D === x.value) : _ === x.value)) : p.refs[0] && (p.refs[0].checked = !!_) : p.refs.forEach((x) => x.checked = x.value === _) : er(p.ref) ? p.ref.value = "" : (p.ref.value = _, p.ref.type || E.state.next({ name: u, values: U(a) })));
    }
    (f.shouldDirty || f.shouldTouch) && w(u, _, f.shouldTouch, f.shouldDirty, true), f.shouldValidate && Ot(u);
  }, ve = (u, d, f) => {
    for (const b in d) {
      const _ = d[b], p = `${u}.${b}`, x = y(s, p);
      (o.array.has(u) || W(_) || x && !x._f) && !Ze(_) ? ve(p, _, f) : fe(p, _, f);
    }
  }, Ve = (u, d, f = {}) => {
    const b = y(s, u), _ = o.array.has(u), p = U(d);
    j(a, u, p), _ ? (E.array.next({ name: u, values: U(a) }), (m.isDirty || m.dirtyFields || C.isDirty || C.dirtyFields) && f.shouldDirty && E.state.next({ name: u, dirtyFields: Ye(n, a), isDirty: Z(u, p) })) : b && !b._f && !re(p) ? ve(u, p, f) : fe(u, p, f), qt(u, o) && E.state.next(__spreadValues({}, t)), E.state.next({ name: i.mount ? u : void 0, values: U(a) });
  }, Je = (u) => __async(null, null, function* () {
    i.mount = true;
    const d = u.target;
    let f = d.name, b = true;
    const _ = y(s, f), p = (x) => {
      b = Number.isNaN(x) || Ze(x) && isNaN(x.getTime()) || Ee(x, y(a, f, x));
    };
    if (_) {
      let x, D;
      const H = d.type ? gr(_._f) : Er(u), X = u.type === _t.BLUR || u.type === _t.FOCUS_OUT, os = !bs(_._f) && !e.resolver && !y(t.errors, f) && !_._f.deps || ws(X, y(t.touchedFields, f), t.isSubmitted, ie, L), Rt = qt(f, o, X);
      j(a, f, H), X ? (_._f.onBlur && _._f.onBlur(u), c && c(0)) : _._f.onChange && _._f.onChange(u);
      const Zt = w(f, H, X), us = !Q(Zt) || Rt;
      if (!X && E.state.next({ name: f, type: u.type, values: U(a) }), os) return (m.isValid || C.isValid) && (e.mode === "onBlur" ? X && K() : X || K()), us && E.state.next(__spreadValues({ name: f }, Rt ? {} : Zt));
      if (!X && Rt && E.state.next(__spreadValues({}, t)), e.resolver) {
        const { errors: hr } = yield M([f]);
        if (p(H), b) {
          const ds = xr(t.errors, s, f), mr = xr(hr, s, ds.name || f);
          x = mr.error, f = mr.name, D = Q(hr);
        }
      } else O([f], true), x = (yield Ht(_, o.disabled, a, Y, e.shouldUseNativeValidation))[f], O([f]), p(H), b && (x ? D = false : (m.isValid || C.isValid) && (D = yield le(s, true)));
      b && (_._f.deps && Ot(_._f.deps), R(f, D, x, Zt));
    }
  }), pt = (u, d) => {
    if (y(t.errors, d) && u.focus) return u.focus(), 1;
  }, Ot = (_0, ..._1) => __async(null, [_0, ..._1], function* (u, d = {}) {
    let f, b;
    const _ = ae(u);
    if (e.resolver) {
      const p = yield ue($(u) ? u : _);
      f = Q(p), b = u ? !_.some((x) => y(p, x)) : f;
    } else u ? (b = (yield Promise.all(_.map((p) => __async(null, null, function* () {
      const x = y(s, p);
      return yield le(x && x._f ? { [p]: x } : x);
    })))).every(Boolean), !(!b && !t.isValid) && K()) : b = f = yield le(s);
    return E.state.next(__spreadProps(__spreadValues(__spreadValues({}, !ge(u) || (m.isValid || C.isValid) && f !== t.isValid ? {} : { name: u }), e.resolver || !u ? { isValid: f } : {}), { errors: t.errors })), d.shouldFocus && !b && Be(s, pt, u ? _ : o.mount), b;
  }), sr = (u) => {
    const d = __spreadValues({}, i.mount ? a : n);
    return $(u) ? d : ge(u) ? y(d, u) : u.map((f) => y(d, f));
  }, nr = (u, d) => ({ invalid: !!y((d || t).errors, u), isDirty: !!y((d || t).dirtyFields, u), error: y((d || t).errors, u), isValidating: !!y(t.validatingFields, u), isTouched: !!y((d || t).touchedFields, u) }), es = (u) => {
    u && ae(u).forEach((d) => J(t.errors, d)), E.state.next({ errors: u ? t.errors : {} });
  }, ar = (u, d, f) => {
    const b = (y(s, u, { _f: {} })._f || {}).ref, _ = y(t.errors, u) || {}, _a = _, { ref: p, message: x, type: D } = _a, H = __objRest(_a, ["ref", "message", "type"]);
    j(t.errors, u, __spreadProps(__spreadValues(__spreadValues({}, H), d), { ref: b })), E.state.next({ name: u, errors: t.errors, isValid: false }), f && f.shouldFocus && b && b.focus && b.focus();
  }, ts = (u, d) => me(u) ? E.state.subscribe({ next: (f) => u(z(void 0, d), f) }) : z(u, d, true), ir = (u) => E.state.subscribe({ next: (d) => {
    ks(u.name, d.name, u.exact) && xs(d, u.formState || m, is, u.reRenderRoot) && u.callback(__spreadValues(__spreadValues({ values: __spreadValues({}, a) }, t), d));
  } }).unsubscribe, rs = (u) => (i.mount = true, C = __spreadValues(__spreadValues({}, C), u.formState), ir(__spreadProps(__spreadValues({}, u), { formState: C }))), Ft = (u, d = {}) => {
    for (const f of u ? ae(u) : o.mount) o.mount.delete(f), o.array.delete(f), d.keepValue || (J(s, f), J(a, f)), !d.keepError && J(t.errors, f), !d.keepDirty && J(t.dirtyFields, f), !d.keepTouched && J(t.touchedFields, f), !d.keepIsValidating && J(t.validatingFields, f), !e.shouldUnregister && !d.keepDefaultValue && J(n, f);
    E.state.next({ values: U(a) }), E.state.next(__spreadValues(__spreadValues({}, t), d.keepDirty ? { isDirty: Z() } : {})), !d.keepIsValid && K();
  }, or = ({ disabled: u, name: d }) => {
    (de(u) && i.mount || u || o.disabled.has(d)) && (u ? o.disabled.add(d) : o.disabled.delete(d));
  }, Nt = (u, d = {}) => {
    let f = y(s, u);
    const b = de(d.disabled) || de(e.disabled);
    return j(s, u, __spreadProps(__spreadValues({}, f || {}), { _f: __spreadValues(__spreadProps(__spreadValues({}, f && f._f ? f._f : { ref: { name: u } }), { name: u, mount: true }), d) })), o.mount.add(u), f ? or({ disabled: de(d.disabled) ? d.disabled : e.disabled, name: u }) : T(u, true, d.value), __spreadProps(__spreadValues(__spreadValues({}, b ? { disabled: d.disabled || e.disabled } : {}), e.progressive ? { required: !!d.required, min: Ge(d.min), max: Ge(d.max), minLength: Ge(d.minLength), maxLength: Ge(d.maxLength), pattern: Ge(d.pattern) } : {}), { name: u, onChange: Je, onBlur: Je, ref: (_) => {
      if (_) {
        Nt(u, d), f = y(s, u);
        const p = $(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, x = ps(p), D = f._f.refs || [];
        if (x ? D.find((H) => H === p) : p === f._f.ref) return;
        j(s, u, { _f: __spreadValues(__spreadValues({}, f._f), x ? { refs: [...D.filter(It), p, ...Array.isArray(y(n, u)) ? [{}] : []], ref: { type: p.type, name: u } } : { ref: p }) }), T(u, false, void 0, p);
      } else f = y(s, u, {}), f._f && (f._f.mount = false), (e.shouldUnregister || d.shouldUnregister) && !(Or(o.array, u) && i.action) && o.unMount.add(u);
    } });
  }, ur = () => e.shouldFocusError && Be(s, pt, o.mount), ss = (u) => {
    de(u) && (E.state.next({ disabled: u }), Be(s, (d, f) => {
      const b = y(s, f);
      b && (d.disabled = b._f.disabled || u, Array.isArray(b._f.refs) && b._f.refs.forEach((_) => {
        _.disabled = b._f.disabled || u;
      }));
    }, 0, false));
  }, dr = (u, d) => (f) => __async(null, null, function* () {
    let b;
    f && (f.preventDefault && f.preventDefault(), f.persist && f.persist());
    let _ = U(a);
    if (E.state.next({ isSubmitting: true }), e.resolver) {
      const { errors: p, values: x } = yield M();
      t.errors = p, _ = x;
    } else yield le(s);
    if (o.disabled.size) for (const p of o.disabled) j(_, p, void 0);
    if (J(t.errors, "root"), Q(t.errors)) {
      E.state.next({ errors: {} });
      try {
        yield u(_, f);
      } catch (p) {
        b = p;
      }
    } else d && (yield d(__spreadValues({}, t.errors), f)), ur(), setTimeout(ur);
    if (E.state.next({ isSubmitted: true, isSubmitting: false, isSubmitSuccessful: Q(t.errors) && !b, submitCount: t.submitCount + 1, errors: t.errors }), b) throw b;
  }), ns = (u, d = {}) => {
    y(s, u) && ($(d.defaultValue) ? Ve(u, U(y(n, u))) : (Ve(u, d.defaultValue), j(n, u, U(d.defaultValue))), d.keepTouched || J(t.touchedFields, u), d.keepDirty || (J(t.dirtyFields, u), t.isDirty = d.defaultValue ? Z(u, U(y(n, u))) : Z()), d.keepError || (J(t.errors, u), m.isValid && K()), E.state.next(__spreadValues({}, t)));
  }, cr = (u, d = {}) => {
    const f = u ? U(u) : n, b = U(f), _ = Q(u), p = _ ? n : b;
    if (d.keepDefaultValues || (n = f), !d.keepValues) {
      if (d.keepDirtyValues) {
        const x = /* @__PURE__ */ new Set([...o.mount, ...Object.keys(Ye(n, a))]);
        for (const D of Array.from(x)) y(t.dirtyFields, D) ? j(p, D, y(a, D)) : Ve(D, y(p, D));
      } else {
        if (Xt && $(u)) for (const x of o.mount) {
          const D = y(s, x);
          if (D && D._f) {
            const H = Array.isArray(D._f.refs) ? D._f.refs[0] : D._f.ref;
            if (vt(H)) {
              const X = H.closest("form");
              if (X) {
                X.reset();
                break;
              }
            }
          }
        }
        for (const x of o.mount) Ve(x, y(p, x));
      }
      a = U(p), E.array.next({ values: __spreadValues({}, p) }), E.state.next({ values: __spreadValues({}, p) });
    }
    o = { mount: d.keepDirtyValues ? o.mount : /* @__PURE__ */ new Set(), unMount: /* @__PURE__ */ new Set(), array: /* @__PURE__ */ new Set(), disabled: /* @__PURE__ */ new Set(), watch: /* @__PURE__ */ new Set(), watchAll: false, focus: "" }, i.mount = !m.isValid || !!d.keepIsValid || !!d.keepDirtyValues, i.watch = !!e.shouldUnregister, E.state.next({ submitCount: d.keepSubmitCount ? t.submitCount : 0, isDirty: _ ? false : d.keepDirty ? t.isDirty : !!(d.keepDefaultValues && !Ee(u, n)), isSubmitted: d.keepIsSubmitted ? t.isSubmitted : false, dirtyFields: _ ? {} : d.keepDirtyValues ? d.keepDefaultValues && a ? Ye(n, a) : t.dirtyFields : d.keepDefaultValues && u ? Ye(n, u) : d.keepDirty ? t.dirtyFields : {}, touchedFields: d.keepTouched ? t.touchedFields : {}, errors: d.keepErrors ? t.errors : {}, isSubmitSuccessful: d.keepIsSubmitSuccessful ? t.isSubmitSuccessful : false, isSubmitting: false });
  }, lr = (u, d) => cr(me(u) ? u(a) : u, d), as = (u, d = {}) => {
    const f = y(s, u), b = f && f._f;
    if (b) {
      const _ = b.refs ? b.refs[0] : b.ref;
      _.focus && (_.focus(), d.shouldSelect && me(_.select) && _.select());
    }
  }, is = (u) => {
    t = __spreadValues(__spreadValues({}, t), u);
  }, fr = { control: { register: Nt, unregister: Ft, getFieldState: nr, handleSubmit: dr, setError: ar, _subscribe: ir, _runSchema: M, _getWatch: z, _getDirty: Z, _setValid: K, _setFieldArray: oe, _setDisabledField: or, _setErrors: q, _getFieldArray: ne, _reset: cr, _resetDefaultValues: () => me(e.defaultValues) && e.defaultValues().then((u) => {
    lr(u, e.resetOptions), E.state.next({ isLoading: false });
  }), _removeUnmounted: P, _disableForm: ss, _subjects: E, _proxyFormState: m, get _fields() {
    return s;
  }, get _formValues() {
    return a;
  }, get _state() {
    return i;
  }, set _state(u) {
    i = u;
  }, get _defaultValues() {
    return n;
  }, get _names() {
    return o;
  }, set _names(u) {
    o = u;
  }, get _formState() {
    return t;
  }, get _options() {
    return e;
  }, set _options(u) {
    e = __spreadValues(__spreadValues({}, e), u);
  } }, subscribe: rs, trigger: Ot, register: Nt, handleSubmit: dr, watch: ts, setValue: Ve, getValues: sr, reset: lr, resetField: ns, clearErrors: es, unregister: Ft, setError: ar, setFocus: as, getFieldState: nr };
  return __spreadProps(__spreadValues({}, fr), { formControl: fr });
}
var Ce = () => {
  const r = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = (Math.random() * 16 + r) % 16 | 0;
    return (e == "x" ? t : t & 3 | 8).toString(16);
  });
}, Dt = (r, e, t = {}) => t.shouldFocus || $(t.shouldFocus) ? t.focusName || `${r}.${$(t.focusIndex) ? e : t.focusIndex}.` : "", jt = (r, e) => [...r, ...ae(e)], Mt = (r) => Array.isArray(r) ? r.map(() => {
}) : void 0;
function Pt(r, e, t) {
  return [...r.slice(0, e), ...ae(t), ...r.slice(e)];
}
var Lt = (r, e, t) => Array.isArray(r) ? ($(r[t]) && (r[t] = void 0), r.splice(t, 0, r.splice(e, 1)[0]), r) : [], $t = (r, e) => [...ae(e), ...ae(r)];
function Vs(r, e) {
  let t = 0;
  const s = [...r];
  for (const n of e) s.splice(n - t, 1), t++;
  return ht(s).length ? s : [];
}
var Ut = (r, e) => $(e) ? [] : Vs(r, ae(e).sort((t, s) => t - s)), Bt = (r, e, t) => {
  [r[e], r[t]] = [r[t], r[e]];
}, wr = (r, e, t) => (r[e] = t, r);
function zn(r) {
  const e = Ct(), { control: t = e.control, name: s, keyName: n = "id", shouldUnregister: a, rules: i } = r, [o, c] = A.useState(t._getFieldArray(s)), l = A.useRef(t._getFieldArray(s).map(Ce)), m = A.useRef(o), C = A.useRef(s), E = A.useRef(false);
  C.current = s, m.current = o, t._names.array.add(s), i && t.register(s, i), A.useEffect(() => t._subjects.array.subscribe({ next: ({ values: T, name: w }) => {
    if (w === C.current || !w) {
      const R = y(T, C.current);
      Array.isArray(R) && (c(R), l.current = R.map(Ce));
    }
  } }).unsubscribe, [t]);
  const L = A.useCallback((T) => {
    E.current = true, t._setFieldArray(s, T);
  }, [t, s]), ie = (T, w) => {
    const R = ae(U(T)), M = jt(t._getFieldArray(s), R);
    t._names.focus = Dt(s, M.length - 1, w), l.current = jt(l.current, R.map(Ce)), L(M), c(M), t._setFieldArray(s, M, jt, { argA: Mt(T) });
  }, Y = (T, w) => {
    const R = ae(U(T)), M = $t(t._getFieldArray(s), R);
    t._names.focus = Dt(s, 0, w), l.current = $t(l.current, R.map(Ce)), L(M), c(M), t._setFieldArray(s, M, $t, { argA: Mt(T) });
  }, G = (T) => {
    const w = Ut(t._getFieldArray(s), T);
    l.current = Ut(l.current, T), L(w), c(w), !Array.isArray(y(t._fields, s)) && j(t._fields, s, void 0), t._setFieldArray(s, w, Ut, { argA: T });
  }, K = (T, w, R) => {
    const M = ae(U(w)), ue = Pt(t._getFieldArray(s), T, M);
    t._names.focus = Dt(s, T, R), l.current = Pt(l.current, T, M.map(Ce)), L(ue), c(ue), t._setFieldArray(s, ue, Pt, { argA: T, argB: Mt(w) });
  }, O = (T, w) => {
    const R = t._getFieldArray(s);
    Bt(R, T, w), Bt(l.current, T, w), L(R), c(R), t._setFieldArray(s, R, Bt, { argA: T, argB: w }, false);
  }, oe = (T, w) => {
    const R = t._getFieldArray(s);
    Lt(R, T, w), Lt(l.current, T, w), L(R), c(R), t._setFieldArray(s, R, Lt, { argA: T, argB: w }, false);
  }, te = (T, w) => {
    const R = U(w), M = wr(t._getFieldArray(s), T, R);
    l.current = [...M].map((ue, le) => !ue || le === T ? Ce() : l.current[le]), L(M), c([...M]), t._setFieldArray(s, M, wr, { argA: T, argB: R }, true, false);
  }, q = (T) => {
    const w = ae(U(T));
    l.current = w.map(Ce), L([...w]), c([...w]), t._setFieldArray(s, [...w], (R) => R, {}, true, false);
  };
  return A.useEffect(() => {
    if (t._state.action = false, qt(s, t._names) && t._subjects.state.next(__spreadValues({}, t._formState)), E.current && (!$e(t._options.mode).isOnSubmit || t._formState.isSubmitted) && !$e(t._options.reValidateMode).isOnSubmit) if (t._options.resolver) t._runSchema([s]).then((T) => {
      const w = y(T.errors, s), R = y(t._formState.errors, s);
      (R ? !w && R.type || w && (R.type !== w.type || R.message !== w.message) : w && w.type) && (w ? j(t._formState.errors, s, w) : J(t._formState.errors, s), t._subjects.state.next({ errors: t._formState.errors }));
    });
    else {
      const T = y(t._fields, s);
      T && T._f && !($e(t._options.reValidateMode).isOnSubmit && $e(t._options.mode).isOnSubmit) && Ht(T, t._names.disabled, t._formValues, t._options.criteriaMode === he.all, t._options.shouldUseNativeValidation, true).then((w) => !Q(w) && t._subjects.state.next({ errors: Ur(t._formState.errors, w, s) }));
    }
    t._subjects.state.next({ name: s, values: U(t._formValues) }), t._names.focus && Be(t._fields, (T, w) => {
      if (t._names.focus && w.startsWith(t._names.focus) && T.focus) return T.focus(), 1;
    }), t._names.focus = "", t._setValid(), E.current = false;
  }, [o, s, t]), A.useEffect(() => (!y(t._formValues, s) && t._setFieldArray(s), () => {
    const T = (w, R) => {
      const M = y(t._fields, w);
      M && M._f && (M._f.mount = R);
    };
    t._options.shouldUnregister || a ? t.unregister(s) : T(s, false);
  }), [s, t, n, a]), { swap: A.useCallback(O, [L, s, t]), move: A.useCallback(oe, [L, s, t]), prepend: A.useCallback(Y, [L, s, t]), append: A.useCallback(ie, [L, s, t]), remove: A.useCallback(G, [L, s, t]), insert: A.useCallback(K, [L, s, t]), update: A.useCallback(te, [L, s, t]), replace: A.useCallback(q, [L, s, t]), fields: A.useMemo(() => o.map((T, w) => __spreadProps(__spreadValues({}, T), { [n]: l.current[w] || Ce() })), [o, n]) };
}
function Wn(r = {}) {
  const e = A.useRef(void 0), t = A.useRef(void 0), [s, n] = A.useState({ isDirty: false, isValidating: false, isLoading: me(r.defaultValues), isSubmitted: false, isSubmitting: false, isSubmitSuccessful: false, isValid: false, submitCount: 0, dirtyFields: {}, touchedFields: {}, validatingFields: {}, errors: r.errors || {}, disabled: r.disabled || false, defaultValues: me(r.defaultValues) ? void 0 : r.defaultValues });
  e.current || (e.current = __spreadProps(__spreadValues({}, r.formControl ? r.formControl : Ss(r)), { formState: s }), r.formControl && r.defaultValues && !me(r.defaultValues) && r.formControl.reset(r.defaultValues, r.resetOptions));
  const a = e.current.control;
  return a._options = r, A.useLayoutEffect(() => a._subscribe({ formState: a._proxyFormState, callback: () => n(__spreadValues({}, a._formState)), reRenderRoot: true }), [a]), A.useEffect(() => a._disableForm(r.disabled), [a, r.disabled]), A.useEffect(() => {
    if (a._proxyFormState.isDirty) {
      const i = a._getDirty();
      i !== s.isDirty && a._subjects.state.next({ isDirty: i });
    }
  }, [a, s.isDirty]), A.useEffect(() => {
    r.values && !Ee(r.values, t.current) ? (a._reset(r.values, a._options.resetOptions), t.current = r.values, n((i) => __spreadValues({}, i))) : a._resetDefaultValues();
  }, [r.values, a]), A.useEffect(() => {
    r.errors && !Q(r.errors) && a._setErrors(r.errors);
  }, [r.errors, a]), A.useEffect(() => {
    a._state.mount || (a._setValid(), a._state.mount = true), a._state.watch && (a._state.watch = false, a._subjects.state.next(__spreadValues({}, a._formState))), a._removeUnmounted();
  }), A.useEffect(() => {
    r.shouldUnregister && a._subjects.state.next({ values: a._getWatch() });
  }, [r.shouldUnregister, a]), e.current.formState = Rr(s, a), e.current;
}
const Ar = (r, e, t) => {
  if (r && "reportValidity" in r) {
    const s = y(t, e);
    r.setCustomValidity(s && s.message || ""), r.reportValidity();
  }
}, Br = (r, e) => {
  for (const t in e.fields) {
    const s = e.fields[t];
    s && s.ref && "reportValidity" in s.ref ? Ar(s.ref, t, r) : s.refs && s.refs.forEach((n) => Ar(n, t, r));
  }
}, Cs = (r, e) => {
  e.shouldUseNativeValidation && Br(r, e);
  const t = {};
  for (const s in r) {
    const n = y(e.fields, s), a = Object.assign(r[s] || {}, { ref: n && n.ref });
    if (Es(e.names || Object.keys(r), s)) {
      const i = Object.assign({}, y(t, s));
      j(i, "root", a), j(t, s, i);
    } else j(t, s, a);
  }
  return t;
}, Es = (r, e) => r.some((t) => t.startsWith(e + "."));
var Os = function(r, e) {
  for (var t = {}; r.length; ) {
    var s = r[0], n = s.code, a = s.message, i = s.path.join(".");
    if (!t[i]) if ("unionErrors" in s) {
      var o = s.unionErrors[0].errors[0];
      t[i] = { message: o.message, type: o.code };
    } else t[i] = { message: a, type: n };
    if ("unionErrors" in s && s.unionErrors.forEach(function(m) {
      return m.errors.forEach(function(C) {
        return r.push(C);
      });
    }), e) {
      var c = t[i].types, l = c && c[s.code];
      t[i] = Ir(i, e, t, n, l ? [].concat(l, s.message) : s.message);
    }
    r.shift();
  }
  return t;
}, qn = function(r, e, t) {
  return t === void 0 && (t = {}), function(s, n, a) {
    try {
      return Promise.resolve((function(i, o) {
        try {
          var c = Promise.resolve(r[t.mode === "sync" ? "parse" : "parseAsync"](s, e)).then(function(l) {
            return a.shouldUseNativeValidation && Br({}, a), { errors: {}, values: t.raw ? s : l };
          });
        } catch (l) {
          return o(l);
        }
        return c && c.then ? c.then(void 0, o) : c;
      })(0, function(i) {
        if ((function(o) {
          return Array.isArray(o == null ? void 0 : o.errors);
        })(i)) return { values: {}, errors: Cs(Os(i.errors, !a.shouldUseNativeValidation && a.criteriaMode === "all"), a) };
        throw i;
      }));
    } catch (i) {
      return Promise.reject(i);
    }
  };
}, I;
(function(r) {
  r.assertEqual = (n) => n;
  function e(n) {
  }
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  r.assertNever = t, r.arrayToEnum = (n) => {
    const a = {};
    for (const i of n) a[i] = i;
    return a;
  }, r.getValidEnumValues = (n) => {
    const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != "number"), i = {};
    for (const o of a) i[o] = n[o];
    return r.objectValues(i);
  }, r.objectValues = (n) => r.objectKeys(n).map(function(a) {
    return n[a];
  }), r.objectKeys = typeof Object.keys == "function" ? (n) => Object.keys(n) : (n) => {
    const a = [];
    for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
    return a;
  }, r.find = (n, a) => {
    for (const i of n) if (a(i)) return i;
  }, r.isInteger = typeof Number.isInteger == "function" ? (n) => Number.isInteger(n) : (n) => typeof n == "number" && isFinite(n) && Math.floor(n) === n;
  function s(n, a = " | ") {
    return n.map((i) => typeof i == "string" ? `'${i}'` : i).join(a);
  }
  r.joinValues = s, r.jsonStringifyReplacer = (n, a) => typeof a == "bigint" ? a.toString() : a;
})(I || (I = {}));
var Jt;
(function(r) {
  r.mergeShapes = (e, t) => __spreadValues(__spreadValues({}, e), t);
})(Jt || (Jt = {}));
const g = I.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]), Te = (r) => {
  switch (typeof r) {
    case "undefined":
      return g.undefined;
    case "string":
      return g.string;
    case "number":
      return isNaN(r) ? g.nan : g.number;
    case "boolean":
      return g.boolean;
    case "function":
      return g.function;
    case "bigint":
      return g.bigint;
    case "symbol":
      return g.symbol;
    case "object":
      return Array.isArray(r) ? g.array : r === null ? g.null : r.then && typeof r.then == "function" && r.catch && typeof r.catch == "function" ? g.promise : typeof Map < "u" && r instanceof Map ? g.map : typeof Set < "u" && r instanceof Set ? g.set : typeof Date < "u" && r instanceof Date ? g.date : g.object;
    default:
      return g.unknown;
  }
}, h = I.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]), Fs = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, "$1:");
class ce extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(), this.issues = [], this.addIssue = (s) => {
      this.issues = [...this.issues, s];
    }, this.addIssues = (s = []) => {
      this.issues = [...this.issues, ...s];
    };
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e;
  }
  format(e) {
    const t = e || function(a) {
      return a.message;
    }, s = { _errors: [] }, n = (a) => {
      for (const i of a.issues) if (i.code === "invalid_union") i.unionErrors.map(n);
      else if (i.code === "invalid_return_type") n(i.returnTypeError);
      else if (i.code === "invalid_arguments") n(i.argumentsError);
      else if (i.path.length === 0) s._errors.push(t(i));
      else {
        let o = s, c = 0;
        for (; c < i.path.length; ) {
          const l = i.path[c];
          c === i.path.length - 1 ? (o[l] = o[l] || { _errors: [] }, o[l]._errors.push(t(i))) : o[l] = o[l] || { _errors: [] }, o = o[l], c++;
        }
      }
    };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof ce)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, I.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {}, s = [];
    for (const n of this.issues) n.path.length > 0 ? (t[n.path[0]] = t[n.path[0]] || [], t[n.path[0]].push(e(n))) : s.push(e(n));
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
ce.create = (r) => new ce(r);
const We = (r, e) => {
  let t;
  switch (r.code) {
    case h.invalid_type:
      r.received === g.undefined ? t = "Required" : t = `Expected ${r.expected}, received ${r.received}`;
      break;
    case h.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, I.jsonStringifyReplacer)}`;
      break;
    case h.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${I.joinValues(r.keys, ", ")}`;
      break;
    case h.invalid_union:
      t = "Invalid input";
      break;
    case h.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${I.joinValues(r.options)}`;
      break;
    case h.invalid_enum_value:
      t = `Invalid enum value. Expected ${I.joinValues(r.options)}, received '${r.received}'`;
      break;
    case h.invalid_arguments:
      t = "Invalid function arguments";
      break;
    case h.invalid_return_type:
      t = "Invalid function return type";
      break;
    case h.invalid_date:
      t = "Invalid date";
      break;
    case h.invalid_string:
      typeof r.validation == "object" ? "includes" in r.validation ? (t = `Invalid input: must include "${r.validation.includes}"`, typeof r.validation.position == "number" && (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`)) : "startsWith" in r.validation ? t = `Invalid input: must start with "${r.validation.startsWith}"` : "endsWith" in r.validation ? t = `Invalid input: must end with "${r.validation.endsWith}"` : I.assertNever(r.validation) : r.validation !== "regex" ? t = `Invalid ${r.validation}` : t = "Invalid";
      break;
    case h.too_small:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "more than"} ${r.minimum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at least" : "over"} ${r.minimum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${r.minimum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly equal to " : r.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(r.minimum))}` : t = "Invalid input";
      break;
    case h.too_big:
      r.type === "array" ? t = `Array must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "less than"} ${r.maximum} element(s)` : r.type === "string" ? t = `String must contain ${r.exact ? "exactly" : r.inclusive ? "at most" : "under"} ${r.maximum} character(s)` : r.type === "number" ? t = `Number must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "bigint" ? t = `BigInt must be ${r.exact ? "exactly" : r.inclusive ? "less than or equal to" : "less than"} ${r.maximum}` : r.type === "date" ? t = `Date must be ${r.exact ? "exactly" : r.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(r.maximum))}` : t = "Invalid input";
      break;
    case h.custom:
      t = "Invalid input";
      break;
    case h.invalid_intersection_types:
      t = "Intersection results could not be merged";
      break;
    case h.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case h.not_finite:
      t = "Number must be finite";
      break;
    default:
      t = e.defaultError, I.assertNever(r);
  }
  return { message: t };
};
let zr = We;
function Ns(r) {
  zr = r;
}
function xt() {
  return zr;
}
const kt = (r) => {
  const { data: e, path: t, errorMaps: s, issueData: n } = r, a = [...t, ...n.path || []], i = __spreadProps(__spreadValues({}, n), { path: a });
  if (n.message !== void 0) return __spreadProps(__spreadValues({}, n), { path: a, message: n.message });
  let o = "";
  const c = s.filter((l) => !!l).slice().reverse();
  for (const l of c) o = l(i, { data: e, defaultError: o }).message;
  return __spreadProps(__spreadValues({}, n), { path: a, message: o });
}, Rs = [];
function v(r, e) {
  const t = xt(), s = kt({ issueData: e, data: r.data, path: r.path, errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, t, t === We ? void 0 : We].filter((n) => !!n) });
  r.common.issues.push(s);
}
class ee {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === "aborted") return V;
      n.status === "dirty" && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static mergeObjectAsync(e, t) {
    return __async(this, null, function* () {
      const s = [];
      for (const n of t) {
        const a = yield n.key, i = yield n.value;
        s.push({ key: a, value: i });
      }
      return ee.mergeObjectSync(e, s);
    });
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === "aborted" || i.status === "aborted") return V;
      a.status === "dirty" && e.dirty(), i.status === "dirty" && e.dirty(), a.value !== "__proto__" && (typeof i.value < "u" || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const V = Object.freeze({ status: "aborted" }), Ue = (r) => ({ status: "dirty", value: r }), se = (r) => ({ status: "valid", value: r }), Yt = (r) => r.status === "aborted", Gt = (r) => r.status === "dirty", De = (r) => r.status === "valid", Qe = (r) => typeof Promise < "u" && r instanceof Promise;
function wt(r, e, t, s) {
  if (typeof e == "function" ? r !== e || !s : !e.has(r)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return e.get(r);
}
function Wr(r, e, t, s, n) {
  if (typeof e == "function" ? r !== e || !n : !e.has(r)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return e.set(r, t), t;
}
var k;
(function(r) {
  r.errToObj = (e) => typeof e == "string" ? { message: e } : e || {}, r.toString = (e) => typeof e == "string" ? e : e == null ? void 0 : e.message;
})(k || (k = {}));
var Ke, Xe;
class xe {
  constructor(e, t, s, n) {
    this._cachedPath = [], this.parent = e, this.data = t, this._path = s, this._key = n;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Tr = (r, e) => {
  if (De(e)) return { success: true, data: e.value };
  if (!r.common.issues.length) throw new Error("Validation failed but no issues detected.");
  return { success: false, get error() {
    if (this._error) return this._error;
    const t = new ce(r.common.issues);
    return this._error = t, this._error;
  } };
};
function F(r) {
  if (!r) return {};
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return e ? { errorMap: e, description: n } : { errorMap: (i, o) => {
    var c, l;
    const { message: m } = r;
    return i.code === "invalid_enum_value" ? { message: m != null ? m : o.defaultError } : typeof o.data > "u" ? { message: (c = m != null ? m : s) !== null && c !== void 0 ? c : o.defaultError } : i.code !== "invalid_type" ? { message: o.defaultError } : { message: (l = m != null ? m : t) !== null && l !== void 0 ? l : o.defaultError };
  }, description: n };
}
class N {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Te(e.data);
  }
  _getOrReturnCtx(e, t) {
    return t || { common: e.parent.common, data: e.data, parsedType: Te(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent };
  }
  _processInputParams(e) {
    return { status: new ee(), ctx: { common: e.parent.common, data: e.data, parsedType: Te(e.data), schemaErrorMap: this._def.errorMap, path: e.path, parent: e.parent } };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Qe(t)) throw new Error("Synchronous parse encountered promise.");
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success) return s.data;
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const n = { common: { issues: [], async: (s = t == null ? void 0 : t.async) !== null && s !== void 0 ? s : false, contextualErrorMap: t == null ? void 0 : t.errorMap }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: Te(e) }, a = this._parseSync({ data: e, path: n.path, parent: n });
    return Tr(n, a);
  }
  "~validate"(e) {
    var t, s;
    const n = { common: { issues: [], async: !!this["~standard"].async }, path: [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: Te(e) };
    if (!this["~standard"].async) try {
      const a = this._parseSync({ data: e, path: [], parent: n });
      return De(a) ? { value: a.value } : { issues: n.common.issues };
    } catch (a) {
      !((s = (t = a == null ? void 0 : a.message) === null || t === void 0 ? void 0 : t.toLowerCase()) === null || s === void 0) && s.includes("encountered") && (this["~standard"].async = true), n.common = { issues: [], async: true };
    }
    return this._parseAsync({ data: e, path: [], parent: n }).then((a) => De(a) ? { value: a.value } : { issues: n.common.issues });
  }
  parseAsync(e, t) {
    return __async(this, null, function* () {
      const s = yield this.safeParseAsync(e, t);
      if (s.success) return s.data;
      throw s.error;
    });
  }
  safeParseAsync(e, t) {
    return __async(this, null, function* () {
      const s = { common: { issues: [], contextualErrorMap: t == null ? void 0 : t.errorMap, async: true }, path: (t == null ? void 0 : t.path) || [], schemaErrorMap: this._def.errorMap, parent: null, data: e, parsedType: Te(e) }, n = this._parse({ data: e, path: s.path, parent: s }), a = yield Qe(n) ? n : Promise.resolve(n);
      return Tr(s, a);
    });
  }
  refine(e, t) {
    const s = (n) => typeof t == "string" || typeof t > "u" ? { message: t } : typeof t == "function" ? t(n) : t;
    return this._refinement((n, a) => {
      const i = e(n), o = () => a.addIssue(__spreadValues({ code: h.custom }, s(n)));
      return typeof Promise < "u" && i instanceof Promise ? i.then((c) => c ? true : (o(), false)) : i ? true : (o(), false);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => e(s) ? true : (n.addIssue(typeof t == "function" ? t(s, n) : t), false));
  }
  _refinement(e) {
    return new _e({ schema: this, typeName: S.ZodEffects, effect: { type: "refinement", refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this), this["~standard"] = { version: 1, vendor: "zod", validate: (t) => this["~validate"](t) };
  }
  optional() {
    return be.create(this, this._def);
  }
  nullable() {
    return Re.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ye.create(this);
  }
  promise() {
    return He.create(this, this._def);
  }
  or(e) {
    return st.create([this, e], this._def);
  }
  and(e) {
    return nt.create(this, e, this._def);
  }
  transform(e) {
    return new _e(__spreadProps(__spreadValues({}, F(this._def)), { schema: this, typeName: S.ZodEffects, effect: { type: "transform", transform: e } }));
  }
  default(e) {
    const t = typeof e == "function" ? e : () => e;
    return new dt(__spreadProps(__spreadValues({}, F(this._def)), { innerType: this, defaultValue: t, typeName: S.ZodDefault }));
  }
  brand() {
    return new rr(__spreadValues({ typeName: S.ZodBranded, type: this }, F(this._def)));
  }
  catch(e) {
    const t = typeof e == "function" ? e : () => e;
    return new ct(__spreadProps(__spreadValues({}, F(this._def)), { innerType: this, catchValue: t, typeName: S.ZodCatch }));
  }
  describe(e) {
    const t = this.constructor;
    return new t(__spreadProps(__spreadValues({}, this._def), { description: e }));
  }
  pipe(e) {
    return mt.create(this, e);
  }
  readonly() {
    return lt.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Zs = /^c[^\s-]{8,}$/i, Is = /^[0-9a-z]+$/, Ds = /^[0-9A-HJKMNP-TV-Z]{26}$/i, js = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Ms = /^[a-z0-9_-]{21}$/i, Ps = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/, Ls = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, $s = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Us = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let zt;
const Bs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, zs = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/, Ws = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/, qs = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Hs = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, Js = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/, qr = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", Ys = new RegExp(`^${qr}$`);
function Hr(r) {
  let e = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return r.precision ? e = `${e}\\.\\d{${r.precision}}` : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Gs(r) {
  return new RegExp(`^${Hr(r)}$`);
}
function Jr(r) {
  let e = `${qr}T${Hr(r)}`;
  const t = [];
  return t.push(r.local ? "Z?" : "Z"), r.offset && t.push("([+-]\\d{2}:?\\d{2})"), e = `${e}(${t.join("|")})`, new RegExp(`^${e}$`);
}
function Ks(r, e) {
  return !!((e === "v4" || !e) && Bs.test(r) || (e === "v6" || !e) && Ws.test(r));
}
function Xs(r, e) {
  if (!Ps.test(r)) return false;
  try {
    const [t] = r.split("."), s = t.replace(/-/g, "+").replace(/_/g, "/").padEnd(t.length + (4 - t.length % 4) % 4, "="), n = JSON.parse(atob(s));
    return !(typeof n != "object" || n === null || !n.typ || !n.alg || e && n.alg !== e);
  } catch (e2) {
    return false;
  }
}
function Qs(r, e) {
  return !!((e === "v4" || !e) && zs.test(r) || (e === "v6" || !e) && qs.test(r));
}
class pe extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== g.string) {
      const a = this._getOrReturnCtx(e);
      return v(a, { code: h.invalid_type, expected: g.string, received: a.parsedType }), V;
    }
    const s = new ee();
    let n;
    for (const a of this._def.checks) if (a.kind === "min") e.data.length < a.value && (n = this._getOrReturnCtx(e, n), v(n, { code: h.too_small, minimum: a.value, type: "string", inclusive: true, exact: false, message: a.message }), s.dirty());
    else if (a.kind === "max") e.data.length > a.value && (n = this._getOrReturnCtx(e, n), v(n, { code: h.too_big, maximum: a.value, type: "string", inclusive: true, exact: false, message: a.message }), s.dirty());
    else if (a.kind === "length") {
      const i = e.data.length > a.value, o = e.data.length < a.value;
      (i || o) && (n = this._getOrReturnCtx(e, n), i ? v(n, { code: h.too_big, maximum: a.value, type: "string", inclusive: true, exact: true, message: a.message }) : o && v(n, { code: h.too_small, minimum: a.value, type: "string", inclusive: true, exact: true, message: a.message }), s.dirty());
    } else if (a.kind === "email") $s.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "email", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "emoji") zt || (zt = new RegExp(Us, "u")), zt.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "emoji", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "uuid") js.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "uuid", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "nanoid") Ms.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "nanoid", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "cuid") Zs.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "cuid", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "cuid2") Is.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "cuid2", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "ulid") Ds.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "ulid", code: h.invalid_string, message: a.message }), s.dirty());
    else if (a.kind === "url") try {
      new URL(e.data);
    } catch (e2) {
      n = this._getOrReturnCtx(e, n), v(n, { validation: "url", code: h.invalid_string, message: a.message }), s.dirty();
    }
    else a.kind === "regex" ? (a.regex.lastIndex = 0, a.regex.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "regex", code: h.invalid_string, message: a.message }), s.dirty())) : a.kind === "trim" ? e.data = e.data.trim() : a.kind === "includes" ? e.data.includes(a.value, a.position) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: { includes: a.value, position: a.position }, message: a.message }), s.dirty()) : a.kind === "toLowerCase" ? e.data = e.data.toLowerCase() : a.kind === "toUpperCase" ? e.data = e.data.toUpperCase() : a.kind === "startsWith" ? e.data.startsWith(a.value) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: { startsWith: a.value }, message: a.message }), s.dirty()) : a.kind === "endsWith" ? e.data.endsWith(a.value) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: { endsWith: a.value }, message: a.message }), s.dirty()) : a.kind === "datetime" ? Jr(a).test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: "datetime", message: a.message }), s.dirty()) : a.kind === "date" ? Ys.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: "date", message: a.message }), s.dirty()) : a.kind === "time" ? Gs(a).test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { code: h.invalid_string, validation: "time", message: a.message }), s.dirty()) : a.kind === "duration" ? Ls.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "duration", code: h.invalid_string, message: a.message }), s.dirty()) : a.kind === "ip" ? Ks(e.data, a.version) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "ip", code: h.invalid_string, message: a.message }), s.dirty()) : a.kind === "jwt" ? Xs(e.data, a.alg) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "jwt", code: h.invalid_string, message: a.message }), s.dirty()) : a.kind === "cidr" ? Qs(e.data, a.version) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "cidr", code: h.invalid_string, message: a.message }), s.dirty()) : a.kind === "base64" ? Hs.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "base64", code: h.invalid_string, message: a.message }), s.dirty()) : a.kind === "base64url" ? Js.test(e.data) || (n = this._getOrReturnCtx(e, n), v(n, { validation: "base64url", code: h.invalid_string, message: a.message }), s.dirty()) : I.assertNever(a);
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), __spreadValues({ validation: t, code: h.invalid_string }, k.errToObj(s)));
  }
  _addCheck(e) {
    return new pe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, e] }));
  }
  email(e) {
    return this._addCheck(__spreadValues({ kind: "email" }, k.errToObj(e)));
  }
  url(e) {
    return this._addCheck(__spreadValues({ kind: "url" }, k.errToObj(e)));
  }
  emoji(e) {
    return this._addCheck(__spreadValues({ kind: "emoji" }, k.errToObj(e)));
  }
  uuid(e) {
    return this._addCheck(__spreadValues({ kind: "uuid" }, k.errToObj(e)));
  }
  nanoid(e) {
    return this._addCheck(__spreadValues({ kind: "nanoid" }, k.errToObj(e)));
  }
  cuid(e) {
    return this._addCheck(__spreadValues({ kind: "cuid" }, k.errToObj(e)));
  }
  cuid2(e) {
    return this._addCheck(__spreadValues({ kind: "cuid2" }, k.errToObj(e)));
  }
  ulid(e) {
    return this._addCheck(__spreadValues({ kind: "ulid" }, k.errToObj(e)));
  }
  base64(e) {
    return this._addCheck(__spreadValues({ kind: "base64" }, k.errToObj(e)));
  }
  base64url(e) {
    return this._addCheck(__spreadValues({ kind: "base64url" }, k.errToObj(e)));
  }
  jwt(e) {
    return this._addCheck(__spreadValues({ kind: "jwt" }, k.errToObj(e)));
  }
  ip(e) {
    return this._addCheck(__spreadValues({ kind: "ip" }, k.errToObj(e)));
  }
  cidr(e) {
    return this._addCheck(__spreadValues({ kind: "cidr" }, k.errToObj(e)));
  }
  datetime(e) {
    var t, s;
    return typeof e == "string" ? this._addCheck({ kind: "datetime", precision: null, offset: false, local: false, message: e }) : this._addCheck(__spreadValues({ kind: "datetime", precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision, offset: (t = e == null ? void 0 : e.offset) !== null && t !== void 0 ? t : false, local: (s = e == null ? void 0 : e.local) !== null && s !== void 0 ? s : false }, k.errToObj(e == null ? void 0 : e.message)));
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string" ? this._addCheck({ kind: "time", precision: null, message: e }) : this._addCheck(__spreadValues({ kind: "time", precision: typeof (e == null ? void 0 : e.precision) > "u" ? null : e == null ? void 0 : e.precision }, k.errToObj(e == null ? void 0 : e.message)));
  }
  duration(e) {
    return this._addCheck(__spreadValues({ kind: "duration" }, k.errToObj(e)));
  }
  regex(e, t) {
    return this._addCheck(__spreadValues({ kind: "regex", regex: e }, k.errToObj(t)));
  }
  includes(e, t) {
    return this._addCheck(__spreadValues({ kind: "includes", value: e, position: t == null ? void 0 : t.position }, k.errToObj(t == null ? void 0 : t.message)));
  }
  startsWith(e, t) {
    return this._addCheck(__spreadValues({ kind: "startsWith", value: e }, k.errToObj(t)));
  }
  endsWith(e, t) {
    return this._addCheck(__spreadValues({ kind: "endsWith", value: e }, k.errToObj(t)));
  }
  min(e, t) {
    return this._addCheck(__spreadValues({ kind: "min", value: e }, k.errToObj(t)));
  }
  max(e, t) {
    return this._addCheck(__spreadValues({ kind: "max", value: e }, k.errToObj(t)));
  }
  length(e, t) {
    return this._addCheck(__spreadValues({ kind: "length", value: e }, k.errToObj(t)));
  }
  nonempty(e) {
    return this.min(1, k.errToObj(e));
  }
  trim() {
    return new pe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, { kind: "trim" }] }));
  }
  toLowerCase() {
    return new pe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, { kind: "toLowerCase" }] }));
  }
  toUpperCase() {
    return new pe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, { kind: "toUpperCase" }] }));
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
pe.create = (r) => {
  var e;
  return new pe(__spreadValues({ checks: [], typeName: S.ZodString, coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : false }, F(r)));
};
function en(r, e) {
  const t = (r.toString().split(".")[1] || "").length, s = (e.toString().split(".")[1] || "").length, n = t > s ? t : s, a = parseInt(r.toFixed(n).replace(".", "")), i = parseInt(e.toFixed(n).replace(".", ""));
  return a % i / Math.pow(10, n);
}
class Oe extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(e) {
    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== g.number) {
      const a = this._getOrReturnCtx(e);
      return v(a, { code: h.invalid_type, expected: g.number, received: a.parsedType }), V;
    }
    let s;
    const n = new ee();
    for (const a of this._def.checks) a.kind === "int" ? I.isInteger(e.data) || (s = this._getOrReturnCtx(e, s), v(s, { code: h.invalid_type, expected: "integer", received: "float", message: a.message }), n.dirty()) : a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), v(s, { code: h.too_small, minimum: a.value, type: "number", inclusive: a.inclusive, exact: false, message: a.message }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), v(s, { code: h.too_big, maximum: a.value, type: "number", inclusive: a.inclusive, exact: false, message: a.message }), n.dirty()) : a.kind === "multipleOf" ? en(e.data, a.value) !== 0 && (s = this._getOrReturnCtx(e, s), v(s, { code: h.not_multiple_of, multipleOf: a.value, message: a.message }), n.dirty()) : a.kind === "finite" ? Number.isFinite(e.data) || (s = this._getOrReturnCtx(e, s), v(s, { code: h.not_finite, message: a.message }), n.dirty()) : I.assertNever(a);
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit("min", e, true, k.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, k.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, k.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, k.toString(t));
  }
  setLimit(e, t, s, n) {
    return new Oe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: k.toString(n) }] }));
  }
  _addCheck(e) {
    return new Oe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, e] }));
  }
  int(e) {
    return this._addCheck({ kind: "int", message: k.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: false, message: k.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: false, message: k.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: 0, inclusive: true, message: k.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: 0, inclusive: true, message: k.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: k.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: k.toString(e) });
  }
  safe(e) {
    return this._addCheck({ kind: "min", inclusive: true, value: Number.MIN_SAFE_INTEGER, message: k.toString(e) })._addCheck({ kind: "max", inclusive: true, value: Number.MAX_SAFE_INTEGER, message: k.toString(e) });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === "int" || e.kind === "multipleOf" && I.isInteger(e.value));
  }
  get isFinite() {
    let e = null, t = null;
    for (const s of this._def.checks) {
      if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") return true;
      s.kind === "min" ? (t === null || s.value > t) && (t = s.value) : s.kind === "max" && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
Oe.create = (r) => new Oe(__spreadValues({ checks: [], typeName: S.ZodNumber, coerce: (r == null ? void 0 : r.coerce) || false }, F(r)));
class Fe extends N {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(e) {
    if (this._def.coerce) try {
      e.data = BigInt(e.data);
    } catch (e2) {
      return this._getInvalidInput(e);
    }
    if (this._getType(e) !== g.bigint) return this._getInvalidInput(e);
    let s;
    const n = new ee();
    for (const a of this._def.checks) a.kind === "min" ? (a.inclusive ? e.data < a.value : e.data <= a.value) && (s = this._getOrReturnCtx(e, s), v(s, { code: h.too_small, type: "bigint", minimum: a.value, inclusive: a.inclusive, message: a.message }), n.dirty()) : a.kind === "max" ? (a.inclusive ? e.data > a.value : e.data >= a.value) && (s = this._getOrReturnCtx(e, s), v(s, { code: h.too_big, type: "bigint", maximum: a.value, inclusive: a.inclusive, message: a.message }), n.dirty()) : a.kind === "multipleOf" ? e.data % a.value !== BigInt(0) && (s = this._getOrReturnCtx(e, s), v(s, { code: h.not_multiple_of, multipleOf: a.value, message: a.message }), n.dirty()) : I.assertNever(a);
    return { status: n.value, value: e.data };
  }
  _getInvalidInput(e) {
    const t = this._getOrReturnCtx(e);
    return v(t, { code: h.invalid_type, expected: g.bigint, received: t.parsedType }), V;
  }
  gte(e, t) {
    return this.setLimit("min", e, true, k.toString(t));
  }
  gt(e, t) {
    return this.setLimit("min", e, false, k.toString(t));
  }
  lte(e, t) {
    return this.setLimit("max", e, true, k.toString(t));
  }
  lt(e, t) {
    return this.setLimit("max", e, false, k.toString(t));
  }
  setLimit(e, t, s, n) {
    return new Fe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: k.toString(n) }] }));
  }
  _addCheck(e) {
    return new Fe(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, e] }));
  }
  positive(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: false, message: k.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: false, message: k.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: true, message: k.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: true, message: k.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: "multipleOf", value: e, message: k.toString(t) });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e;
  }
}
Fe.create = (r) => {
  var e;
  return new Fe(__spreadValues({ checks: [], typeName: S.ZodBigInt, coerce: (e = r == null ? void 0 : r.coerce) !== null && e !== void 0 ? e : false }, F(r)));
};
class et extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== g.boolean) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.boolean, received: s.parsedType }), V;
    }
    return se(e.data);
  }
}
et.create = (r) => new et(__spreadValues({ typeName: S.ZodBoolean, coerce: (r == null ? void 0 : r.coerce) || false }, F(r)));
class je extends N {
  _parse(e) {
    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== g.date) {
      const a = this._getOrReturnCtx(e);
      return v(a, { code: h.invalid_type, expected: g.date, received: a.parsedType }), V;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return v(a, { code: h.invalid_date }), V;
    }
    const s = new ee();
    let n;
    for (const a of this._def.checks) a.kind === "min" ? e.data.getTime() < a.value && (n = this._getOrReturnCtx(e, n), v(n, { code: h.too_small, message: a.message, inclusive: true, exact: false, minimum: a.value, type: "date" }), s.dirty()) : a.kind === "max" ? e.data.getTime() > a.value && (n = this._getOrReturnCtx(e, n), v(n, { code: h.too_big, message: a.message, inclusive: true, exact: false, maximum: a.value, type: "date" }), s.dirty()) : I.assertNever(a);
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new je(__spreadProps(__spreadValues({}, this._def), { checks: [...this._def.checks, e] }));
  }
  min(e, t) {
    return this._addCheck({ kind: "min", value: e.getTime(), message: k.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: "max", value: e.getTime(), message: k.toString(t) });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks) t.kind === "min" && (e === null || t.value > e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks) t.kind === "max" && (e === null || t.value < e) && (e = t.value);
    return e != null ? new Date(e) : null;
  }
}
je.create = (r) => new je(__spreadValues({ checks: [], coerce: (r == null ? void 0 : r.coerce) || false, typeName: S.ZodDate }, F(r)));
class At extends N {
  _parse(e) {
    if (this._getType(e) !== g.symbol) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.symbol, received: s.parsedType }), V;
    }
    return se(e.data);
  }
}
At.create = (r) => new At(__spreadValues({ typeName: S.ZodSymbol }, F(r)));
class tt extends N {
  _parse(e) {
    if (this._getType(e) !== g.undefined) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.undefined, received: s.parsedType }), V;
    }
    return se(e.data);
  }
}
tt.create = (r) => new tt(__spreadValues({ typeName: S.ZodUndefined }, F(r)));
class rt extends N {
  _parse(e) {
    if (this._getType(e) !== g.null) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.null, received: s.parsedType }), V;
    }
    return se(e.data);
  }
}
rt.create = (r) => new rt(__spreadValues({ typeName: S.ZodNull }, F(r)));
class qe extends N {
  constructor() {
    super(...arguments), this._any = true;
  }
  _parse(e) {
    return se(e.data);
  }
}
qe.create = (r) => new qe(__spreadValues({ typeName: S.ZodAny }, F(r)));
class Ie extends N {
  constructor() {
    super(...arguments), this._unknown = true;
  }
  _parse(e) {
    return se(e.data);
  }
}
Ie.create = (r) => new Ie(__spreadValues({ typeName: S.ZodUnknown }, F(r)));
class Se extends N {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return v(t, { code: h.invalid_type, expected: g.never, received: t.parsedType }), V;
  }
}
Se.create = (r) => new Se(__spreadValues({ typeName: S.ZodNever }, F(r)));
class Tt extends N {
  _parse(e) {
    if (this._getType(e) !== g.undefined) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.void, received: s.parsedType }), V;
    }
    return se(e.data);
  }
}
Tt.create = (r) => new Tt(__spreadValues({ typeName: S.ZodVoid }, F(r)));
class ye extends N {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e), n = this._def;
    if (t.parsedType !== g.array) return v(t, { code: h.invalid_type, expected: g.array, received: t.parsedType }), V;
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value, o = t.data.length < n.exactLength.value;
      (i || o) && (v(t, { code: i ? h.too_big : h.too_small, minimum: o ? n.exactLength.value : void 0, maximum: i ? n.exactLength.value : void 0, type: "array", inclusive: true, exact: true, message: n.exactLength.message }), s.dirty());
    }
    if (n.minLength !== null && t.data.length < n.minLength.value && (v(t, { code: h.too_small, minimum: n.minLength.value, type: "array", inclusive: true, exact: false, message: n.minLength.message }), s.dirty()), n.maxLength !== null && t.data.length > n.maxLength.value && (v(t, { code: h.too_big, maximum: n.maxLength.value, type: "array", inclusive: true, exact: false, message: n.maxLength.message }), s.dirty()), t.common.async) return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new xe(t, i, t.path, o)))).then((i) => ee.mergeArray(s, i));
    const a = [...t.data].map((i, o) => n.type._parseSync(new xe(t, i, t.path, o)));
    return ee.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new ye(__spreadProps(__spreadValues({}, this._def), { minLength: { value: e, message: k.toString(t) } }));
  }
  max(e, t) {
    return new ye(__spreadProps(__spreadValues({}, this._def), { maxLength: { value: e, message: k.toString(t) } }));
  }
  length(e, t) {
    return new ye(__spreadProps(__spreadValues({}, this._def), { exactLength: { value: e, message: k.toString(t) } }));
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
ye.create = (r, e) => new ye(__spreadValues({ type: r, minLength: null, maxLength: null, exactLength: null, typeName: S.ZodArray }, F(e)));
function Le(r) {
  if (r instanceof B) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = be.create(Le(s));
    }
    return new B(__spreadProps(__spreadValues({}, r._def), { shape: () => e }));
  } else return r instanceof ye ? new ye(__spreadProps(__spreadValues({}, r._def), { type: Le(r.element) })) : r instanceof be ? be.create(Le(r.unwrap())) : r instanceof Re ? Re.create(Le(r.unwrap())) : r instanceof ke ? ke.create(r.items.map((e) => Le(e))) : r;
}
class B extends N {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(), t = I.objectKeys(e);
    return this._cached = { shape: e, keys: t };
  }
  _parse(e) {
    if (this._getType(e) !== g.object) {
      const l = this._getOrReturnCtx(e);
      return v(l, { code: h.invalid_type, expected: g.object, received: l.parsedType }), V;
    }
    const { status: s, ctx: n } = this._processInputParams(e), { shape: a, keys: i } = this._getCached(), o = [];
    if (!(this._def.catchall instanceof Se && this._def.unknownKeys === "strip")) for (const l in n.data) i.includes(l) || o.push(l);
    const c = [];
    for (const l of i) {
      const m = a[l], C = n.data[l];
      c.push({ key: { status: "valid", value: l }, value: m._parse(new xe(n, C, n.path, l)), alwaysSet: l in n.data });
    }
    if (this._def.catchall instanceof Se) {
      const l = this._def.unknownKeys;
      if (l === "passthrough") for (const m of o) c.push({ key: { status: "valid", value: m }, value: { status: "valid", value: n.data[m] } });
      else if (l === "strict") o.length > 0 && (v(n, { code: h.unrecognized_keys, keys: o }), s.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const m of o) {
        const C = n.data[m];
        c.push({ key: { status: "valid", value: m }, value: l._parse(new xe(n, C, n.path, m)), alwaysSet: m in n.data });
      }
    }
    return n.common.async ? Promise.resolve().then(() => __async(this, null, function* () {
      const l = [];
      for (const m of c) {
        const C = yield m.key, E = yield m.value;
        l.push({ key: C, value: E, alwaysSet: m.alwaysSet });
      }
      return l;
    })).then((l) => ee.mergeObjectSync(s, l)) : ee.mergeObjectSync(s, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return k.errToObj, new B(__spreadValues(__spreadProps(__spreadValues({}, this._def), { unknownKeys: "strict" }), e !== void 0 ? { errorMap: (t, s) => {
      var n, a, i, o;
      const c = (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !== null && i !== void 0 ? i : s.defaultError;
      return t.code === "unrecognized_keys" ? { message: (o = k.errToObj(e).message) !== null && o !== void 0 ? o : c } : { message: c };
    } } : {}));
  }
  strip() {
    return new B(__spreadProps(__spreadValues({}, this._def), { unknownKeys: "strip" }));
  }
  passthrough() {
    return new B(__spreadProps(__spreadValues({}, this._def), { unknownKeys: "passthrough" }));
  }
  extend(e) {
    return new B(__spreadProps(__spreadValues({}, this._def), { shape: () => __spreadValues(__spreadValues({}, this._def.shape()), e) }));
  }
  merge(e) {
    return new B({ unknownKeys: e._def.unknownKeys, catchall: e._def.catchall, shape: () => __spreadValues(__spreadValues({}, this._def.shape()), e._def.shape()), typeName: S.ZodObject });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new B(__spreadProps(__spreadValues({}, this._def), { catchall: e }));
  }
  pick(e) {
    const t = {};
    return I.objectKeys(e).forEach((s) => {
      e[s] && this.shape[s] && (t[s] = this.shape[s]);
    }), new B(__spreadProps(__spreadValues({}, this._def), { shape: () => t }));
  }
  omit(e) {
    const t = {};
    return I.objectKeys(this.shape).forEach((s) => {
      e[s] || (t[s] = this.shape[s]);
    }), new B(__spreadProps(__spreadValues({}, this._def), { shape: () => t }));
  }
  deepPartial() {
    return Le(this);
  }
  partial(e) {
    const t = {};
    return I.objectKeys(this.shape).forEach((s) => {
      const n = this.shape[s];
      e && !e[s] ? t[s] = n : t[s] = n.optional();
    }), new B(__spreadProps(__spreadValues({}, this._def), { shape: () => t }));
  }
  required(e) {
    const t = {};
    return I.objectKeys(this.shape).forEach((s) => {
      if (e && !e[s]) t[s] = this.shape[s];
      else {
        let a = this.shape[s];
        for (; a instanceof be; ) a = a._def.innerType;
        t[s] = a;
      }
    }), new B(__spreadProps(__spreadValues({}, this._def), { shape: () => t }));
  }
  keyof() {
    return Yr(I.objectKeys(this.shape));
  }
}
B.create = (r, e) => new B(__spreadValues({ shape: () => r, unknownKeys: "strip", catchall: Se.create(), typeName: S.ZodObject }, F(e)));
B.strictCreate = (r, e) => new B(__spreadValues({ shape: () => r, unknownKeys: "strict", catchall: Se.create(), typeName: S.ZodObject }, F(e)));
B.lazycreate = (r, e) => new B(__spreadValues({ shape: r, unknownKeys: "strip", catchall: Se.create(), typeName: S.ZodObject }, F(e)));
class st extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = this._def.options;
    function n(a) {
      for (const o of a) if (o.result.status === "valid") return o.result;
      for (const o of a) if (o.result.status === "dirty") return t.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((o) => new ce(o.ctx.common.issues));
      return v(t, { code: h.invalid_union, unionErrors: i }), V;
    }
    if (t.common.async) return Promise.all(s.map((a) => __async(this, null, function* () {
      const i = __spreadProps(__spreadValues({}, t), { common: __spreadProps(__spreadValues({}, t.common), { issues: [] }), parent: null });
      return { result: yield a._parseAsync({ data: t.data, path: t.path, parent: i }), ctx: i };
    }))).then(n);
    {
      let a;
      const i = [];
      for (const c of s) {
        const l = __spreadProps(__spreadValues({}, t), { common: __spreadProps(__spreadValues({}, t.common), { issues: [] }), parent: null }), m = c._parseSync({ data: t.data, path: t.path, parent: l });
        if (m.status === "valid") return m;
        m.status === "dirty" && !a && (a = { result: m, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (a) return t.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((c) => new ce(c));
      return v(t, { code: h.invalid_union, unionErrors: o }), V;
    }
  }
  get options() {
    return this._def.options;
  }
}
st.create = (r, e) => new st(__spreadValues({ options: r, typeName: S.ZodUnion }, F(e)));
const Ae = (r) => r instanceof it ? Ae(r.schema) : r instanceof _e ? Ae(r.innerType()) : r instanceof ot ? [r.value] : r instanceof Ne ? r.options : r instanceof ut ? I.objectValues(r.enum) : r instanceof dt ? Ae(r._def.innerType) : r instanceof tt ? [void 0] : r instanceof rt ? [null] : r instanceof be ? [void 0, ...Ae(r.unwrap())] : r instanceof Re ? [null, ...Ae(r.unwrap())] : r instanceof rr || r instanceof lt ? Ae(r.unwrap()) : r instanceof ct ? Ae(r._def.innerType) : [];
class Et extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== g.object) return v(t, { code: h.invalid_type, expected: g.object, received: t.parsedType }), V;
    const s = this.discriminator, n = t.data[s], a = this.optionsMap.get(n);
    return a ? t.common.async ? a._parseAsync({ data: t.data, path: t.path, parent: t }) : a._parseSync({ data: t.data, path: t.path, parent: t }) : (v(t, { code: h.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s] }), V);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    const n = /* @__PURE__ */ new Map();
    for (const a of t) {
      const i = Ae(a.shape[e]);
      if (!i.length) throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      for (const o of i) {
        if (n.has(o)) throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        n.set(o, a);
      }
    }
    return new Et(__spreadValues({ typeName: S.ZodDiscriminatedUnion, discriminator: e, options: t, optionsMap: n }, F(s)));
  }
}
function Kt(r, e) {
  const t = Te(r), s = Te(e);
  if (r === e) return { valid: true, data: r };
  if (t === g.object && s === g.object) {
    const n = I.objectKeys(e), a = I.objectKeys(r).filter((o) => n.indexOf(o) !== -1), i = __spreadValues(__spreadValues({}, r), e);
    for (const o of a) {
      const c = Kt(r[o], e[o]);
      if (!c.valid) return { valid: false };
      i[o] = c.data;
    }
    return { valid: true, data: i };
  } else if (t === g.array && s === g.array) {
    if (r.length !== e.length) return { valid: false };
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a], o = e[a], c = Kt(i, o);
      if (!c.valid) return { valid: false };
      n.push(c.data);
    }
    return { valid: true, data: n };
  } else return t === g.date && s === g.date && +r == +e ? { valid: true, data: r } : { valid: false };
}
class nt extends N {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = (a, i) => {
      if (Yt(a) || Yt(i)) return V;
      const o = Kt(a.value, i.value);
      return o.valid ? ((Gt(a) || Gt(i)) && t.dirty(), { status: t.value, value: o.data }) : (v(s, { code: h.invalid_intersection_types }), V);
    };
    return s.common.async ? Promise.all([this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }), this._def.right._parseAsync({ data: s.data, path: s.path, parent: s })]).then(([a, i]) => n(a, i)) : n(this._def.left._parseSync({ data: s.data, path: s.path, parent: s }), this._def.right._parseSync({ data: s.data, path: s.path, parent: s }));
  }
}
nt.create = (r, e, t) => new nt(__spreadValues({ left: r, right: e, typeName: S.ZodIntersection }, F(t)));
class ke extends N {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== g.array) return v(s, { code: h.invalid_type, expected: g.array, received: s.parsedType }), V;
    if (s.data.length < this._def.items.length) return v(s, { code: h.too_small, minimum: this._def.items.length, inclusive: true, exact: false, type: "array" }), V;
    !this._def.rest && s.data.length > this._def.items.length && (v(s, { code: h.too_big, maximum: this._def.items.length, inclusive: true, exact: false, type: "array" }), t.dirty());
    const a = [...s.data].map((i, o) => {
      const c = this._def.items[o] || this._def.rest;
      return c ? c._parse(new xe(s, i, s.path, o)) : null;
    }).filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => ee.mergeArray(t, i)) : ee.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ke(__spreadProps(__spreadValues({}, this._def), { rest: e }));
  }
}
ke.create = (r, e) => {
  if (!Array.isArray(r)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ke(__spreadValues({ items: r, typeName: S.ZodTuple, rest: null }, F(e)));
};
class at extends N {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== g.object) return v(s, { code: h.invalid_type, expected: g.object, received: s.parsedType }), V;
    const n = [], a = this._def.keyType, i = this._def.valueType;
    for (const o in s.data) n.push({ key: a._parse(new xe(s, o, s.path, o)), value: i._parse(new xe(s, s.data[o], s.path, o)), alwaysSet: o in s.data });
    return s.common.async ? ee.mergeObjectAsync(t, n) : ee.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof N ? new at(__spreadValues({ keyType: e, valueType: t, typeName: S.ZodRecord }, F(s))) : new at(__spreadValues({ keyType: pe.create(), valueType: e, typeName: S.ZodRecord }, F(t)));
  }
}
class St extends N {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== g.map) return v(s, { code: h.invalid_type, expected: g.map, received: s.parsedType }), V;
    const n = this._def.keyType, a = this._def.valueType, i = [...s.data.entries()].map(([o, c], l) => ({ key: n._parse(new xe(s, o, s.path, [l, "key"])), value: a._parse(new xe(s, c, s.path, [l, "value"])) }));
    if (s.common.async) {
      const o = /* @__PURE__ */ new Map();
      return Promise.resolve().then(() => __async(this, null, function* () {
        for (const c of i) {
          const l = yield c.key, m = yield c.value;
          if (l.status === "aborted" || m.status === "aborted") return V;
          (l.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(l.value, m.value);
        }
        return { status: t.value, value: o };
      }));
    } else {
      const o = /* @__PURE__ */ new Map();
      for (const c of i) {
        const l = c.key, m = c.value;
        if (l.status === "aborted" || m.status === "aborted") return V;
        (l.status === "dirty" || m.status === "dirty") && t.dirty(), o.set(l.value, m.value);
      }
      return { status: t.value, value: o };
    }
  }
}
St.create = (r, e, t) => new St(__spreadValues({ valueType: e, keyType: r, typeName: S.ZodMap }, F(t)));
class Me extends N {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== g.set) return v(s, { code: h.invalid_type, expected: g.set, received: s.parsedType }), V;
    const n = this._def;
    n.minSize !== null && s.data.size < n.minSize.value && (v(s, { code: h.too_small, minimum: n.minSize.value, type: "set", inclusive: true, exact: false, message: n.minSize.message }), t.dirty()), n.maxSize !== null && s.data.size > n.maxSize.value && (v(s, { code: h.too_big, maximum: n.maxSize.value, type: "set", inclusive: true, exact: false, message: n.maxSize.message }), t.dirty());
    const a = this._def.valueType;
    function i(c) {
      const l = /* @__PURE__ */ new Set();
      for (const m of c) {
        if (m.status === "aborted") return V;
        m.status === "dirty" && t.dirty(), l.add(m.value);
      }
      return { status: t.value, value: l };
    }
    const o = [...s.data.values()].map((c, l) => a._parse(new xe(s, c, s.path, l)));
    return s.common.async ? Promise.all(o).then((c) => i(c)) : i(o);
  }
  min(e, t) {
    return new Me(__spreadProps(__spreadValues({}, this._def), { minSize: { value: e, message: k.toString(t) } }));
  }
  max(e, t) {
    return new Me(__spreadProps(__spreadValues({}, this._def), { maxSize: { value: e, message: k.toString(t) } }));
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Me.create = (r, e) => new Me(__spreadValues({ valueType: r, minSize: null, maxSize: null, typeName: S.ZodSet }, F(e)));
class ze extends N {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== g.function) return v(t, { code: h.invalid_type, expected: g.function, received: t.parsedType }), V;
    function s(o, c) {
      return kt({ data: o, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, xt(), We].filter((l) => !!l), issueData: { code: h.invalid_arguments, argumentsError: c } });
    }
    function n(o, c) {
      return kt({ data: o, path: t.path, errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, xt(), We].filter((l) => !!l), issueData: { code: h.invalid_return_type, returnTypeError: c } });
    }
    const a = { errorMap: t.common.contextualErrorMap }, i = t.data;
    if (this._def.returns instanceof He) {
      const o = this;
      return se(function(...c) {
        return __async(this, null, function* () {
          const l = new ce([]), m = yield o._def.args.parseAsync(c, a).catch((L) => {
            throw l.addIssue(s(c, L)), l;
          }), C = yield Reflect.apply(i, this, m);
          return yield o._def.returns._def.type.parseAsync(C, a).catch((L) => {
            throw l.addIssue(n(C, L)), l;
          });
        });
      });
    } else {
      const o = this;
      return se(function(...c) {
        const l = o._def.args.safeParse(c, a);
        if (!l.success) throw new ce([s(c, l.error)]);
        const m = Reflect.apply(i, this, l.data), C = o._def.returns.safeParse(m, a);
        if (!C.success) throw new ce([n(m, C.error)]);
        return C.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new ze(__spreadProps(__spreadValues({}, this._def), { args: ke.create(e).rest(Ie.create()) }));
  }
  returns(e) {
    return new ze(__spreadProps(__spreadValues({}, this._def), { returns: e }));
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new ze(__spreadValues({ args: e || ke.create([]).rest(Ie.create()), returns: t || Ie.create(), typeName: S.ZodFunction }, F(s)));
  }
}
class it extends N {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
it.create = (r, e) => new it(__spreadValues({ getter: r, typeName: S.ZodLazy }, F(e)));
class ot extends N {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return v(t, { received: t.data, code: h.invalid_literal, expected: this._def.value }), V;
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
ot.create = (r, e) => new ot(__spreadValues({ value: r, typeName: S.ZodLiteral }, F(e)));
function Yr(r, e) {
  return new Ne(__spreadValues({ values: r, typeName: S.ZodEnum }, F(e)));
}
class Ne extends N {
  constructor() {
    super(...arguments), Ke.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != "string") {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return v(t, { expected: I.joinValues(s), received: t.parsedType, code: h.invalid_type }), V;
    }
    if (wt(this, Ke) || Wr(this, Ke, new Set(this._def.values)), !wt(this, Ke).has(e.data)) {
      const t = this._getOrReturnCtx(e), s = this._def.values;
      return v(t, { received: t.data, code: h.invalid_enum_value, options: s }), V;
    }
    return se(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) e[t] = t;
    return e;
  }
  extract(e, t = this._def) {
    return Ne.create(e, __spreadValues(__spreadValues({}, this._def), t));
  }
  exclude(e, t = this._def) {
    return Ne.create(this.options.filter((s) => !e.includes(s)), __spreadValues(__spreadValues({}, this._def), t));
  }
}
Ke = /* @__PURE__ */ new WeakMap();
Ne.create = Yr;
class ut extends N {
  constructor() {
    super(...arguments), Xe.set(this, void 0);
  }
  _parse(e) {
    const t = I.getValidEnumValues(this._def.values), s = this._getOrReturnCtx(e);
    if (s.parsedType !== g.string && s.parsedType !== g.number) {
      const n = I.objectValues(t);
      return v(s, { expected: I.joinValues(n), received: s.parsedType, code: h.invalid_type }), V;
    }
    if (wt(this, Xe) || Wr(this, Xe, new Set(I.getValidEnumValues(this._def.values))), !wt(this, Xe).has(e.data)) {
      const n = I.objectValues(t);
      return v(s, { received: s.data, code: h.invalid_enum_value, options: n }), V;
    }
    return se(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Xe = /* @__PURE__ */ new WeakMap();
ut.create = (r, e) => new ut(__spreadValues({ values: r, typeName: S.ZodNativeEnum }, F(e)));
class He extends N {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== g.promise && t.common.async === false) return v(t, { code: h.invalid_type, expected: g.promise, received: t.parsedType }), V;
    const s = t.parsedType === g.promise ? t.data : Promise.resolve(t.data);
    return se(s.then((n) => this._def.type.parseAsync(n, { path: t.path, errorMap: t.common.contextualErrorMap })));
  }
}
He.create = (r, e) => new He(__spreadValues({ type: r, typeName: S.ZodPromise }, F(e)));
class _e extends N {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === S.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e), n = this._def.effect || null, a = { addIssue: (i) => {
      v(s, i), i.fatal ? t.abort() : t.dirty();
    }, get path() {
      return s.path;
    } };
    if (a.addIssue = a.addIssue.bind(a), n.type === "preprocess") {
      const i = n.transform(s.data, a);
      if (s.common.async) return Promise.resolve(i).then((o) => __async(this, null, function* () {
        if (t.value === "aborted") return V;
        const c = yield this._def.schema._parseAsync({ data: o, path: s.path, parent: s });
        return c.status === "aborted" ? V : c.status === "dirty" || t.value === "dirty" ? Ue(c.value) : c;
      }));
      {
        if (t.value === "aborted") return V;
        const o = this._def.schema._parseSync({ data: i, path: s.path, parent: s });
        return o.status === "aborted" ? V : o.status === "dirty" || t.value === "dirty" ? Ue(o.value) : o;
      }
    }
    if (n.type === "refinement") {
      const i = (o) => {
        const c = n.refinement(o, a);
        if (s.common.async) return Promise.resolve(c);
        if (c instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return o;
      };
      if (s.common.async === false) {
        const o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return o.status === "aborted" ? V : (o.status === "dirty" && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((o) => o.status === "aborted" ? V : (o.status === "dirty" && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))));
    }
    if (n.type === "transform") if (s.common.async === false) {
      const i = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
      if (!De(i)) return i;
      const o = n.transform(i.value, a);
      if (o instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
      return { status: t.value, value: o };
    } else return this._def.schema._parseAsync({ data: s.data, path: s.path, parent: s }).then((i) => De(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i);
    I.assertNever(n);
  }
}
_e.create = (r, e, t) => new _e(__spreadValues({ schema: r, typeName: S.ZodEffects, effect: e }, F(t)));
_e.createWithPreprocess = (r, e, t) => new _e(__spreadValues({ schema: e, effect: { type: "preprocess", transform: r }, typeName: S.ZodEffects }, F(t)));
class be extends N {
  _parse(e) {
    return this._getType(e) === g.undefined ? se(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
be.create = (r, e) => new be(__spreadValues({ innerType: r, typeName: S.ZodOptional }, F(e)));
class Re extends N {
  _parse(e) {
    return this._getType(e) === g.null ? se(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Re.create = (r, e) => new Re(__spreadValues({ innerType: r, typeName: S.ZodNullable }, F(e)));
class dt extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return t.parsedType === g.undefined && (s = this._def.defaultValue()), this._def.innerType._parse({ data: s, path: t.path, parent: t });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
dt.create = (r, e) => new dt(__spreadValues({ innerType: r, typeName: S.ZodDefault, defaultValue: typeof e.default == "function" ? e.default : () => e.default }, F(e)));
class ct extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = __spreadProps(__spreadValues({}, t), { common: __spreadProps(__spreadValues({}, t.common), { issues: [] }) }), n = this._def.innerType._parse({ data: s.data, path: s.path, parent: __spreadValues({}, s) });
    return Qe(n) ? n.then((a) => ({ status: "valid", value: a.status === "valid" ? a.value : this._def.catchValue({ get error() {
      return new ce(s.common.issues);
    }, input: s.data }) })) : { status: "valid", value: n.status === "valid" ? n.value : this._def.catchValue({ get error() {
      return new ce(s.common.issues);
    }, input: s.data }) };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ct.create = (r, e) => new ct(__spreadValues({ innerType: r, typeName: S.ZodCatch, catchValue: typeof e.catch == "function" ? e.catch : () => e.catch }, F(e)));
class Vt extends N {
  _parse(e) {
    if (this._getType(e) !== g.nan) {
      const s = this._getOrReturnCtx(e);
      return v(s, { code: h.invalid_type, expected: g.nan, received: s.parsedType }), V;
    }
    return { status: "valid", value: e.data };
  }
}
Vt.create = (r) => new Vt(__spreadValues({ typeName: S.ZodNaN }, F(r)));
const tn = /* @__PURE__ */ Symbol("zod_brand");
class rr extends N {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e), s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class mt extends N {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async) return (() => __async(this, null, function* () {
      const a = yield this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
      return a.status === "aborted" ? V : a.status === "dirty" ? (t.dirty(), Ue(a.value)) : this._def.out._parseAsync({ data: a.value, path: s.path, parent: s });
    }))();
    {
      const n = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return n.status === "aborted" ? V : n.status === "dirty" ? (t.dirty(), { status: "dirty", value: n.value }) : this._def.out._parseSync({ data: n.value, path: s.path, parent: s });
    }
  }
  static create(e, t) {
    return new mt({ in: e, out: t, typeName: S.ZodPipeline });
  }
}
class lt extends N {
  _parse(e) {
    const t = this._def.innerType._parse(e), s = (n) => (De(n) && (n.value = Object.freeze(n.value)), n);
    return Qe(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
lt.create = (r, e) => new lt(__spreadValues({ innerType: r, typeName: S.ZodReadonly }, F(e)));
function Sr(r, e) {
  const t = typeof r == "function" ? r(e) : typeof r == "string" ? { message: r } : r;
  return typeof t == "string" ? { message: t } : t;
}
function Gr(r, e = {}, t) {
  return r ? qe.create().superRefine((s, n) => {
    var a, i;
    const o = r(s);
    if (o instanceof Promise) return o.then((c) => {
      var l, m;
      if (!c) {
        const C = Sr(e, s), E = (m = (l = C.fatal) !== null && l !== void 0 ? l : t) !== null && m !== void 0 ? m : true;
        n.addIssue(__spreadProps(__spreadValues({ code: "custom" }, C), { fatal: E }));
      }
    });
    if (!o) {
      const c = Sr(e, s), l = (i = (a = c.fatal) !== null && a !== void 0 ? a : t) !== null && i !== void 0 ? i : true;
      n.addIssue(__spreadProps(__spreadValues({ code: "custom" }, c), { fatal: l }));
    }
  }) : qe.create();
}
const rn = { object: B.lazycreate };
var S;
(function(r) {
  r.ZodString = "ZodString", r.ZodNumber = "ZodNumber", r.ZodNaN = "ZodNaN", r.ZodBigInt = "ZodBigInt", r.ZodBoolean = "ZodBoolean", r.ZodDate = "ZodDate", r.ZodSymbol = "ZodSymbol", r.ZodUndefined = "ZodUndefined", r.ZodNull = "ZodNull", r.ZodAny = "ZodAny", r.ZodUnknown = "ZodUnknown", r.ZodNever = "ZodNever", r.ZodVoid = "ZodVoid", r.ZodArray = "ZodArray", r.ZodObject = "ZodObject", r.ZodUnion = "ZodUnion", r.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", r.ZodIntersection = "ZodIntersection", r.ZodTuple = "ZodTuple", r.ZodRecord = "ZodRecord", r.ZodMap = "ZodMap", r.ZodSet = "ZodSet", r.ZodFunction = "ZodFunction", r.ZodLazy = "ZodLazy", r.ZodLiteral = "ZodLiteral", r.ZodEnum = "ZodEnum", r.ZodEffects = "ZodEffects", r.ZodNativeEnum = "ZodNativeEnum", r.ZodOptional = "ZodOptional", r.ZodNullable = "ZodNullable", r.ZodDefault = "ZodDefault", r.ZodCatch = "ZodCatch", r.ZodPromise = "ZodPromise", r.ZodBranded = "ZodBranded", r.ZodPipeline = "ZodPipeline", r.ZodReadonly = "ZodReadonly";
})(S || (S = {}));
const sn = (r, e = { message: `Input not instance of ${r.name}` }) => Gr((t) => t instanceof r, e), Kr = pe.create, Xr = Oe.create, nn = Vt.create, an = Fe.create, Qr = et.create, on = je.create, un = At.create, dn = tt.create, cn = rt.create, ln = qe.create, fn = Ie.create, hn = Se.create, mn = Tt.create, pn = ye.create, yn = B.create, _n = B.strictCreate, vn = st.create, gn = Et.create, bn = nt.create, xn = ke.create, kn = at.create, wn = St.create, An = Me.create, Tn = ze.create, Sn = it.create, Vn = ot.create, Cn = Ne.create, En = ut.create, On = He.create, Vr = _e.create, Fn = be.create, Nn = Re.create, Rn = _e.createWithPreprocess, Zn = mt.create, In = () => Kr().optional(), Dn = () => Xr().optional(), jn = () => Qr().optional(), Mn = { string: (r) => pe.create(__spreadProps(__spreadValues({}, r), { coerce: true })), number: (r) => Oe.create(__spreadProps(__spreadValues({}, r), { coerce: true })), boolean: (r) => et.create(__spreadProps(__spreadValues({}, r), { coerce: true })), bigint: (r) => Fe.create(__spreadProps(__spreadValues({}, r), { coerce: true })), date: (r) => je.create(__spreadProps(__spreadValues({}, r), { coerce: true })) }, Pn = V;
var Hn = Object.freeze({ __proto__: null, defaultErrorMap: We, setErrorMap: Ns, getErrorMap: xt, makeIssue: kt, EMPTY_PATH: Rs, addIssueToContext: v, ParseStatus: ee, INVALID: V, DIRTY: Ue, OK: se, isAborted: Yt, isDirty: Gt, isValid: De, isAsync: Qe, get util() {
  return I;
}, get objectUtil() {
  return Jt;
}, ZodParsedType: g, getParsedType: Te, ZodType: N, datetimeRegex: Jr, ZodString: pe, ZodNumber: Oe, ZodBigInt: Fe, ZodBoolean: et, ZodDate: je, ZodSymbol: At, ZodUndefined: tt, ZodNull: rt, ZodAny: qe, ZodUnknown: Ie, ZodNever: Se, ZodVoid: Tt, ZodArray: ye, ZodObject: B, ZodUnion: st, ZodDiscriminatedUnion: Et, ZodIntersection: nt, ZodTuple: ke, ZodRecord: at, ZodMap: St, ZodSet: Me, ZodFunction: ze, ZodLazy: it, ZodLiteral: ot, ZodEnum: Ne, ZodNativeEnum: ut, ZodPromise: He, ZodEffects: _e, ZodTransformer: _e, ZodOptional: be, ZodNullable: Re, ZodDefault: dt, ZodCatch: ct, ZodNaN: Vt, BRAND: tn, ZodBranded: rr, ZodPipeline: mt, ZodReadonly: lt, custom: Gr, Schema: N, ZodSchema: N, late: rn, get ZodFirstPartyTypeKind() {
  return S;
}, coerce: Mn, any: ln, array: pn, bigint: an, boolean: Qr, date: on, discriminatedUnion: gn, effect: Vr, enum: Cn, function: Tn, instanceof: sn, intersection: bn, lazy: Sn, literal: Vn, map: wn, nan: nn, nativeEnum: En, never: hn, null: cn, nullable: Nn, number: Xr, object: yn, oboolean: jn, onumber: Dn, optional: Fn, ostring: In, pipeline: Zn, preprocess: Rn, promise: On, record: kn, set: An, strictObject: _n, string: Kr, symbol: un, transformer: Vr, tuple: xn, undefined: dn, union: vn, unknown: fn, void: mn, NEVER: Pn, ZodIssueCode: h, quotelessJson: Fs, ZodError: ce });
export { Bn as C, Un as F, zn as a, Ct as b, qn as t, Wn as u, Hn as z };
