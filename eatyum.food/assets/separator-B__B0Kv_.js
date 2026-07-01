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
import { r as s, j as l, P as v, w as m } from "./index-DOfu0sXg.js";
var f = "Separator", n = "horizontal", N = ["horizontal", "vertical"], p = s.forwardRef((r, a) => {
  const _a = r, { decorative: t, orientation: o = n } = _a, i = __objRest(_a, ["decorative", "orientation"]), e = u(o) ? o : n, d = t ? { role: "none" } : { "aria-orientation": e === "vertical" ? e : void 0, role: "separator" };
  return l.jsx(v.div, __spreadProps(__spreadValues(__spreadValues({ "data-orientation": e }, d), i), { ref: a }));
});
p.displayName = f;
function u(r) {
  return N.includes(r);
}
var c = p;
const x = s.forwardRef((_a, i) => {
  var _b = _a, { className: r, orientation: a = "horizontal", decorative: t = true } = _b, o = __objRest(_b, ["className", "orientation", "decorative"]);
  return l.jsx(c, __spreadValues({ ref: i, decorative: t, orientation: a, className: m("shrink-0 bg-border", a === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", r) }, o));
});
x.displayName = c.displayName;
export { x as S };
