var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
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
import { r as o, j as t, w as l } from "./index-DOfu0sXg.js";
const r = o.forwardRef((_a, s) => {
  var _b = _a, { className: e } = _b, a = __objRest(_b, ["className"]);
  return t.jsx("div", { className: "relative w-full overflow-auto", children: t.jsx("table", __spreadValues({ ref: s, className: l("min-w-full caption-bottom text-sm", e) }, a)) });
});
r.displayName = "Table";
const d = o.forwardRef((_c, s) => {
  var _d = _c, { className: e } = _d, a = __objRest(_d, ["className"]);
  return t.jsx("thead", __spreadValues({ ref: s, className: l("[&_tr]:border-b", e) }, a));
});
d.displayName = "TableHeader";
const m = o.forwardRef((_e, s) => {
  var _f = _e, { className: e } = _f, a = __objRest(_f, ["className"]);
  return t.jsx("tbody", __spreadValues({ ref: s, className: l("[&_tr:last-child]:border-0", e) }, a));
});
m.displayName = "TableBody";
const b = o.forwardRef((_g, s) => {
  var _h = _g, { className: e } = _h, a = __objRest(_h, ["className"]);
  return t.jsx("tfoot", __spreadValues({ ref: s, className: l("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", e) }, a));
});
b.displayName = "TableFooter";
const c = o.forwardRef((_i, s) => {
  var _j = _i, { className: e } = _j, a = __objRest(_j, ["className"]);
  return t.jsx("tr", __spreadValues({ ref: s, className: l("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", e) }, a));
});
c.displayName = "TableRow";
const i = o.forwardRef((_k, s) => {
  var _l = _k, { className: e } = _l, a = __objRest(_l, ["className"]);
  return t.jsx("th", __spreadValues({ ref: s, className: l("h-12 whitespace-nowrap px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", e) }, a));
});
i.displayName = "TableHead";
const f = o.forwardRef((_m, s) => {
  var _n = _m, { className: e } = _n, a = __objRest(_n, ["className"]);
  return t.jsx("td", __spreadValues({ ref: s, className: l("p-4 align-middle [&:has([role=checkbox])]:pr-0", e) }, a));
});
f.displayName = "TableCell";
const n = o.forwardRef((_o, s) => {
  var _p = _o, { className: e } = _p, a = __objRest(_p, ["className"]);
  return t.jsx("caption", __spreadValues({ ref: s, className: l("mt-4 text-sm text-muted-foreground", e) }, a));
});
n.displayName = "TableCaption";
export { r as T, d as a, c as b, i as c, m as d, f as e };
