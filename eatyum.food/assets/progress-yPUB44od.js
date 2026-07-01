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
import { n as y, r as u, j as l, P as f, w as I } from "./index-DOfu0sXg.js";
var d = "Progress", v = 100, [w, C] = y(d), [E, R] = w(d), m = u.forwardRef((r, e) => {
  const _a = r, { __scopeProgress: n, value: o = null, max: a, getValueLabel: b = j } = _a, h = __objRest(_a, ["__scopeProgress", "value", "max", "getValueLabel"]);
  (a || a === 0) && !c(a) && console.error(_(`${a}`, "Progress"));
  const s = c(a) ? a : v;
  o !== null && !p(o, s) && console.error(M(`${o}`, "Progress"));
  const t = p(o, s) ? o : null, $ = i(t) ? b(t, s) : void 0;
  return l.jsx(E, { scope: n, value: t, max: s, children: l.jsx(f.div, __spreadProps(__spreadValues({ "aria-valuemax": s, "aria-valuemin": 0, "aria-valuenow": i(t) ? t : void 0, "aria-valuetext": $, role: "progressbar", "data-state": P(t, s), "data-value": t != null ? t : void 0, "data-max": s }, h), { ref: e })) });
});
m.displayName = d;
var g = "ProgressIndicator", x = u.forwardRef((r, e) => {
  var _b;
  const _a = r, { __scopeProgress: n } = _a, o = __objRest(_a, ["__scopeProgress"]), a = R(g, n);
  return l.jsx(f.div, __spreadProps(__spreadValues({ "data-state": P(a.value, a.max), "data-value": (_b = a.value) != null ? _b : void 0, "data-max": a.max }, o), { ref: e }));
});
x.displayName = g;
function j(r, e) {
  return `${Math.round(r / e * 100)}%`;
}
function P(r, e) {
  return r == null ? "indeterminate" : r === e ? "complete" : "loading";
}
function i(r) {
  return typeof r == "number";
}
function c(r) {
  return i(r) && !isNaN(r) && r > 0;
}
function p(r, e) {
  return i(r) && !isNaN(r) && r <= e && r >= 0;
}
function _(r, e) {
  return `Invalid prop \`max\` of value \`${r}\` supplied to \`${e}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${v}\`.`;
}
function M(r, e) {
  return `Invalid prop \`value\` of value \`${r}\` supplied to \`${e}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${v} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var N = m, V = x;
const A = u.forwardRef((_a, o) => {
  var _b = _a, { className: r, value: e } = _b, n = __objRest(_b, ["className", "value"]);
  return l.jsx(N, __spreadProps(__spreadValues({ ref: o, className: I("relative h-4 w-full overflow-hidden rounded-full bg-secondary", r) }, n), { children: l.jsx(V, { className: "h-full w-full flex-1 bg-primary transition-all", style: { transform: `translateX(-${100 - (e || 0)}%)` } }) }));
});
A.displayName = N.displayName;
export { A as P };
