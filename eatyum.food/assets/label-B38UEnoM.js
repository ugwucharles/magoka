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
import {
  r as s,
  j as l,
  P as n,
  w as d,
  au as u
} from "./index-DOfu0sXg.js";
var c = "Label", o = s.forwardRef((e, t) => l.jsx(n.label, __spreadProps(__spreadValues({}, e), {
  ref: t,
  onMouseDown: (a) => {
    var r;
    a.target.closest("button, input, select, textarea") || ((r = e.onMouseDown) == null || r.call(e, a), !a.defaultPrevented && a.detail > 1 && a.preventDefault());
  }
})));
o.displayName = c;
var i = o;
const f = u("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), m = s.forwardRef((_a, a) => {
  var _b = _a, {
    className: e
  } = _b, t = __objRest(_b, [
    "className"
  ]);
  return l.jsx(i, __spreadValues({
    ref: a,
    className: d(f(), e)
  }, t));
});
m.displayName = i.displayName;
export {
  m as L
};
