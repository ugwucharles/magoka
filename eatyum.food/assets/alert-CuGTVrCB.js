var __defProp = Object.defineProperty;
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
import { r, j as s, w as l, au as i } from "./index-DOfu0sXg.js";
const o = i("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", { variants: { variant: { default: "bg-background text-foreground", destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive" } }, defaultVariants: { variant: "default" } }), n = r.forwardRef((_a, d) => {
  var _b = _a, { className: e, variant: t } = _b, a = __objRest(_b, ["className", "variant"]);
  return s.jsx("div", __spreadValues({ ref: d, role: "alert", className: l(o({ variant: t }), e) }, a));
});
n.displayName = "Alert";
const v = r.forwardRef((_c, a) => {
  var _d = _c, { className: e } = _d, t = __objRest(_d, ["className"]);
  return s.jsx("h5", __spreadValues({ ref: a, className: l("mb-1 font-medium leading-none tracking-tight", e) }, t));
});
v.displayName = "AlertTitle";
const c = r.forwardRef((_e, a) => {
  var _f = _e, { className: e } = _f, t = __objRest(_f, ["className"]);
  return s.jsx("div", __spreadValues({ ref: a, className: l("text-sm [&_p]:leading-relaxed", e) }, t));
});
c.displayName = "AlertDescription";
export { n as A, c as a, v as b };
