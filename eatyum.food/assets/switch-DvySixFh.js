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
import { n as _, r as s, o as H, v as I, j as r, P as g, p as M, s as B, w as S } from "./index-DOfu0sXg.js";
import { u as q } from "./index-CxKYTSZE.js";
var v = "Switch", [z, X] = _(v), [A, O] = z(v), x = s.forwardRef((e, o) => {
  const _a = e, { __scopeSwitch: t, name: n, checked: a, defaultChecked: l, required: i, disabled: c, value: d = "on", onCheckedChange: b, form: m } = _a, p = __objRest(_a, ["__scopeSwitch", "name", "checked", "defaultChecked", "required", "disabled", "value", "onCheckedChange", "form"]), [u, E] = s.useState(null), R = H(o, (f) => E(f)), k = s.useRef(false), w = u ? m || !!u.closest("form") : true, [h = false, N] = I({ prop: a, defaultProp: l, onChange: b });
  return r.jsxs(A, { scope: t, checked: h, disabled: c, children: [r.jsx(g.button, __spreadProps(__spreadValues({ type: "button", role: "switch", "aria-checked": h, "aria-required": i, "data-state": P(h), "data-disabled": c ? "" : void 0, disabled: c, value: d }, p), { ref: R, onClick: M(e.onClick, (f) => {
    N((T) => !T), w && (k.current = f.isPropagationStopped(), k.current || f.stopPropagation());
  }) })), w && r.jsx(D, { control: u, bubbles: !k.current, name: n, value: d, checked: h, required: i, disabled: c, form: m, style: { transform: "translateX(-100%)" } })] });
});
x.displayName = v;
var C = "SwitchThumb", y = s.forwardRef((e, o) => {
  const _a = e, { __scopeSwitch: t } = _a, n = __objRest(_a, ["__scopeSwitch"]), a = O(C, t);
  return r.jsx(g.span, __spreadProps(__spreadValues({ "data-state": P(a.checked), "data-disabled": a.disabled ? "" : void 0 }, n), { ref: o }));
});
y.displayName = C;
var D = (e) => {
  const _a = e, { control: o, checked: t, bubbles: n = true } = _a, a = __objRest(_a, ["control", "checked", "bubbles"]), l = s.useRef(null), i = q(t), c = B(o);
  return s.useEffect(() => {
    const d = l.current, b = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(b, "checked").set;
    if (i !== t && p) {
      const u = new Event("click", { bubbles: n });
      p.call(d, t), d.dispatchEvent(u);
    }
  }, [i, t, n]), r.jsx("input", __spreadProps(__spreadValues({ type: "checkbox", "aria-hidden": true, defaultChecked: t }, a), { tabIndex: -1, ref: l, style: __spreadProps(__spreadValues(__spreadValues({}, e.style), c), { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 }) }));
};
function P(e) {
  return e ? "checked" : "unchecked";
}
var j = x, F = y;
const L = s.forwardRef((_a, t) => {
  var _b = _a, { className: e } = _b, o = __objRest(_b, ["className"]);
  return r.jsx(j, __spreadProps(__spreadValues({ className: S("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", e) }, o), { ref: t, children: r.jsx(F, { className: S("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0") }) }));
});
L.displayName = j.displayName;
export { L as S };
