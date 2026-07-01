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
import { n as O, r as s, o as q, v as A, j as n, P as w, p as R, q as B, s as H, w as j } from "./index-DOfu0sXg.js";
import { u as K } from "./index-CxKYTSZE.js";
import { C as L } from "./check-AkIa94Y-.js";
var E = "Checkbox", [z, V] = O(E), [T, X] = z(E), N = s.forwardRef((e, i) => {
  const _a = e, { __scopeCheckbox: t, name: u, checked: p, defaultChecked: o, required: h, disabled: d, value: k = "on", onCheckedChange: C, form: l } = _a, x = __objRest(_a, ["__scopeCheckbox", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange", "form"]), [a, m] = s.useState(null), v = q(i, (r) => m(r)), y = s.useRef(false), P = a ? l || !!a.closest("form") : true, [f = false, g] = A({ prop: p, defaultProp: o, onChange: C }), M = s.useRef(f);
  return s.useEffect(() => {
    const r = a == null ? void 0 : a.form;
    if (r) {
      const b = () => g(M.current);
      return r.addEventListener("reset", b), () => r.removeEventListener("reset", b);
    }
  }, [a, g]), n.jsxs(T, { scope: t, state: f, disabled: d, children: [n.jsx(w.button, __spreadProps(__spreadValues({ type: "button", role: "checkbox", "aria-checked": c(f) ? "mixed" : f, "aria-required": h, "data-state": _(f), "data-disabled": d ? "" : void 0, disabled: d, value: k }, x), { ref: v, onKeyDown: R(e.onKeyDown, (r) => {
    r.key === "Enter" && r.preventDefault();
  }), onClick: R(e.onClick, (r) => {
    g((b) => c(b) ? true : !b), P && (y.current = r.isPropagationStopped(), y.current || r.stopPropagation());
  }) })), P && n.jsx(F, { control: a, bubbles: !y.current, name: u, value: k, checked: f, required: h, disabled: d, form: l, style: { transform: "translateX(-100%)" }, defaultChecked: c(o) ? false : o })] });
});
N.displayName = E;
var S = "CheckboxIndicator", I = s.forwardRef((e, i) => {
  const _a = e, { __scopeCheckbox: t, forceMount: u } = _a, p = __objRest(_a, ["__scopeCheckbox", "forceMount"]), o = X(S, t);
  return n.jsx(B, { present: u || c(o.state) || o.state === true, children: n.jsx(w.span, __spreadProps(__spreadValues({ "data-state": _(o.state), "data-disabled": o.disabled ? "" : void 0 }, p), { ref: i, style: __spreadValues({ pointerEvents: "none" }, e.style) })) });
});
I.displayName = S;
var F = (e) => {
  const _a = e, { control: i, checked: t, bubbles: u = true, defaultChecked: p } = _a, o = __objRest(_a, ["control", "checked", "bubbles", "defaultChecked"]), h = s.useRef(null), d = K(t), k = H(i);
  s.useEffect(() => {
    const l = h.current, x = window.HTMLInputElement.prototype, m = Object.getOwnPropertyDescriptor(x, "checked").set;
    if (d !== t && m) {
      const v = new Event("click", { bubbles: u });
      l.indeterminate = c(t), m.call(l, c(t) ? false : t), l.dispatchEvent(v);
    }
  }, [d, t, u]);
  const C = s.useRef(c(t) ? false : t);
  return n.jsx("input", __spreadProps(__spreadValues({ type: "checkbox", "aria-hidden": true, defaultChecked: p != null ? p : C.current }, o), { tabIndex: -1, ref: h, style: __spreadProps(__spreadValues(__spreadValues({}, e.style), k), { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 }) }));
};
function c(e) {
  return e === "indeterminate";
}
function _(e) {
  return c(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
var D = N, $ = I;
const G = s.forwardRef((_a, t) => {
  var _b = _a, { className: e } = _b, i = __objRest(_b, ["className"]);
  return n.jsx(D, __spreadProps(__spreadValues({ ref: t, className: j("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", e) }, i), { children: n.jsx($, { className: j("flex items-center justify-center text-current"), children: n.jsx(L, { className: "h-4 w-4" }) }) }));
});
G.displayName = D.displayName;
export { G as C };
