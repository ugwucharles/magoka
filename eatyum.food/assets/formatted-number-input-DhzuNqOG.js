var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { r as a, an as at, ao as O, ap as c, aq as _, ar as ot, j as k, w as it, as as G, at as H, al as lt } from "./index-DOfu0sXg.js";
const ut = /* @__PURE__ */ new Set(["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Tab", "Enter", "Escape"]), ct = (r, o, f, d) => r || (o === lt ? "currency" : f === "%" ? "percentage" : d === 0 ? "integer" : "quantity"), ft = (r, o) => __spreadProps(__spreadValues({}, o), { prefix: "", suffix: "" }), dt = (r) => /^[0-9]$/.test(r), z = (r, o, f) => G(r, o, f).replace(/\u2014/g, ""), pt = a.forwardRef((_a, m) => {
  var _b = _a, { value: r, onChange: o, category: f, decimalPlaces: d, decimals: v, allowNegative: F, min: p, max: g, prefix: E, suffix: N, className: J, disabled: K, error: L, inputMode: P, onBlur: C, onFocus: S, onKeyDown: V, onPaste: D } = _b, B = __objRest(_b, ["value", "onChange", "category", "decimalPlaces", "decimals", "allowNegative", "min", "max", "prefix", "suffix", "className", "disabled", "error", "inputMode", "onBlur", "onFocus", "onKeyDown", "onPaste"]);
  const n = ct(f, E, N, d != null ? d : v), s = a.useMemo(() => at(n, { decimalPlaces: d != null ? d : v, prefix: E, suffix: N, allowNegative: F }), [F, d, v, E, n, N]), l = a.useRef(null), [u, b] = a.useState(() => O(r, n, s)), [R, $] = a.useState(false), y = a.useRef(null), w = a.useRef(c(r)), Q = a.useCallback((t) => {
    l.current = t, typeof m == "function" ? m(t) : m && (m.current = t);
  }, [m]), x = a.useMemo(() => ft(n, s), [n, s]);
  a.useEffect(() => {
    const t = c(r), e = t !== w.current;
    (!R || e) && b(R ? t === null ? "" : _(String(t), n, x) : O(r, n, s)), e && (w.current = t);
  }, [R, n, s, x, r]), a.useLayoutEffect(() => {
    const t = y.current;
    if (t === null) return;
    const e = l.current;
    if (!e || document.activeElement !== e) {
      y.current = null;
      return;
    }
    const i = ot(u, t);
    e.setSelectionRange(i, i), y.current = null;
  }, [u]);
  const h = a.useCallback((t) => {
    if (!l.current) return;
    let e = "";
    t !== null && (p !== void 0 && t < p ? e = `Value must be at least ${z(p, n, s)}.` : g !== void 0 && t > g && (e = `Value must be at most ${z(g, n, s)}.`)), l.current.setCustomValidity(e);
  }, [g, p, n, s]), T = a.useCallback((t) => {
    const e = c(t);
    w.current = e, h(e), o(e);
  }, [o, h]), q = a.useCallback((t) => {
    if (!t) {
      b(""), T("");
      return;
    }
    const e = _(t, n, x);
    b(e), T(e);
  }, [T, n, x]), X = (t) => {
    $(true), h(c(u)), S == null || S(t);
  }, Z = (t) => {
    $(false);
    const e = c(u);
    h(e), b(e === null ? "" : O(e, n, s)), C == null || C(t);
  }, tt = (t) => {
    var _a2;
    y.current = H(t.target.value, (_a2 = t.target.selectionStart) != null ? _a2 : t.target.value.length), q(t.target.value);
  }, et = (t) => {
    if (!K && !t.ctrlKey && !t.metaKey && !t.altKey && !ut.has(t.key)) {
      const e = s.decimalPlaces > 0, i = s.allowNegative;
      dt(t.key) || t.key === "," || t.key === "." && e || t.key === "-" && i || t.preventDefault();
    }
    V == null || V(t);
  }, st = (t) => {
    var _a2, _b2;
    var i, j;
    const e = t.clipboardData.getData("text");
    if (e) {
      t.preventDefault();
      const I = u, M = (_a2 = (i = l.current) == null ? void 0 : i.selectionStart) != null ? _a2 : I.length, rt = (_b2 = (j = l.current) == null ? void 0 : j.selectionEnd) != null ? _b2 : M, Y = I.slice(0, M) + e + I.slice(rt);
      y.current = H(Y, M + e.length), q(Y);
    }
    D == null || D(t);
  }, nt = L ? true : B["aria-invalid"], A = c(r), U = !!s.prefix, W = !!s.suffix;
  return k.jsxs("div", { className: "relative", children: [U && k.jsx("span", { className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground", children: s.prefix }), k.jsx("input", __spreadProps(__spreadValues({}, B), { ref: Q, type: "text", value: u, disabled: K, inputMode: P != null ? P : s.inputMode, onChange: tt, onFocus: X, onBlur: Z, onKeyDown: et, onPaste: st, className: it("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", U && "pl-10", W && "pr-8", L && "border-destructive focus-visible:ring-destructive", J), role: "spinbutton", "aria-invalid": nt, "aria-valuenow": A != null ? A : void 0, "aria-valuemin": p, "aria-valuemax": g, "aria-valuetext": A === null ? void 0 : G(A, n, s) })), W && k.jsx("span", { className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground", children: s.suffix })] });
});
pt.displayName = "FormattedNumberInput";
export { pt as F };
