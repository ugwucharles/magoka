var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
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
import { r as m, j as n, w as i, am as F } from "./index-DOfu0sXg.js";
import { F as x, C as u, b as p } from "./index-Ph36iM9Q.js";
import { L as I } from "./label-B38UEnoM.js";
const h = x, l = m.createContext({}), R = (_a) => {
  var e = __objRest(_a, []);
  return n.jsx(l.Provider, { value: { name: e.name }, children: n.jsx(u, __spreadValues({}, e)) });
}, d = () => {
  const e = m.useContext(l), t = m.useContext(f), { getFieldState: r, formState: o } = p(), s = r(e.name, o);
  if (!e) throw new Error("useFormField should be used within <FormField>");
  const { id: a } = t;
  return __spreadValues({ id: a, name: e.name, formItemId: `${a}-form-item`, formDescriptionId: `${a}-form-item-description`, formMessageId: `${a}-form-item-message` }, s);
}, f = m.createContext({}), C = m.forwardRef((_b, r) => {
  var _c = _b, { className: e } = _c, t = __objRest(_c, ["className"]);
  const o = m.useId();
  return n.jsx(f.Provider, { value: { id: o }, children: n.jsx("div", __spreadValues({ ref: r, className: i("space-y-2", e) }, t)) });
});
C.displayName = "FormItem";
const g = m.forwardRef((_d, r) => {
  var _e = _d, { className: e } = _e, t = __objRest(_e, ["className"]);
  const { error: o, formItemId: s } = d();
  return n.jsx(I, __spreadValues({ ref: r, className: i(o && "text-destructive", e), htmlFor: s }, t));
});
g.displayName = "FormLabel";
const j = m.forwardRef((_f, t) => {
  var e = __objRest(_f, []);
  const { error: r, formItemId: o, formDescriptionId: s, formMessageId: a } = d();
  return n.jsx(F, __spreadValues({ ref: t, id: o, "aria-describedby": r ? `${s} ${a}` : `${s}`, "aria-invalid": !!r }, e));
});
j.displayName = "FormControl";
const b = m.forwardRef((_g, r) => {
  var _h = _g, { className: e } = _h, t = __objRest(_h, ["className"]);
  const { formDescriptionId: o } = d();
  return n.jsx("p", __spreadValues({ ref: r, id: o, className: i("text-sm text-muted-foreground", e) }, t));
});
b.displayName = "FormDescription";
const v = m.forwardRef((_i, o) => {
  var _j = _i, { className: e, children: t } = _j, r = __objRest(_j, ["className", "children"]);
  var _a;
  const { error: s, formMessageId: a } = d(), c = s ? String((_a = s == null ? void 0 : s.message) != null ? _a : "") : t;
  return c ? n.jsx("p", __spreadProps(__spreadValues({ ref: o, id: a, className: i("text-sm font-medium text-destructive", e) }, r), { children: c })) : null;
});
v.displayName = "FormMessage";
export { h as F, R as a, C as b, g as c, v as d, j as e, b as f };
