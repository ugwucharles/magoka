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
import { n as I, r as n, v as O, j as c, a0 as S, P as m, p as D, q as M, o as L, aT as k } from "./index-DOfu0sXg.js";
var v = "Collapsible", [F, $] = I(v), [q, g] = F(v), T = n.forwardRef((e, s) => {
  const _a = e, { __scopeCollapsible: r, open: a, defaultOpen: t, disabled: l, onOpenChange: i } = _a, f = __objRest(_a, ["__scopeCollapsible", "open", "defaultOpen", "disabled", "onOpenChange"]), [p = false, d] = O({ prop: a, defaultProp: t, onChange: i });
  return c.jsx(q, { scope: r, disabled: l, contentId: S(), open: p, onOpenToggle: n.useCallback(() => d((C) => !C), [d]), children: c.jsx(m.div, __spreadProps(__spreadValues({ "data-state": R(p), "data-disabled": l ? "" : void 0 }, f), { ref: s })) });
});
T.displayName = v;
var j = "CollapsibleTrigger", w = n.forwardRef((e, s) => {
  const _a = e, { __scopeCollapsible: r } = _a, a = __objRest(_a, ["__scopeCollapsible"]), t = g(j, r);
  return c.jsx(m.button, __spreadProps(__spreadValues({ type: "button", "aria-controls": t.contentId, "aria-expanded": t.open || false, "data-state": R(t.open), "data-disabled": t.disabled ? "" : void 0, disabled: t.disabled }, a), { ref: s, onClick: D(e.onClick, t.onOpenToggle) }));
});
w.displayName = j;
var x = "CollapsibleContent", A = n.forwardRef((e, s) => {
  const _a = e, { forceMount: r } = _a, a = __objRest(_a, ["forceMount"]), t = g(x, e.__scopeCollapsible);
  return c.jsx(M, { present: r || t.open, children: ({ present: l }) => c.jsx(B, __spreadProps(__spreadValues({}, a), { ref: s, present: l })) });
});
A.displayName = x;
var B = n.forwardRef((e, s) => {
  const _a = e, { __scopeCollapsible: r, present: a, children: t } = _a, l = __objRest(_a, ["__scopeCollapsible", "present", "children"]), i = g(x, r), [f, p] = n.useState(a), d = n.useRef(null), C = L(s, d), h = n.useRef(0), y = h.current, P = n.useRef(0), N = P.current, b = i.open || f, E = n.useRef(b), u = n.useRef(void 0);
  return n.useEffect(() => {
    const o = requestAnimationFrame(() => E.current = false);
    return () => cancelAnimationFrame(o);
  }, []), k(() => {
    const o = d.current;
    if (o) {
      u.current = u.current || { transitionDuration: o.style.transitionDuration, animationName: o.style.animationName }, o.style.transitionDuration = "0s", o.style.animationName = "none";
      const _ = o.getBoundingClientRect();
      h.current = _.height, P.current = _.width, E.current || (o.style.transitionDuration = u.current.transitionDuration, o.style.animationName = u.current.animationName), p(a);
    }
  }, [i.open, a]), c.jsx(m.div, __spreadProps(__spreadValues({ "data-state": R(i.open), "data-disabled": i.disabled ? "" : void 0, id: i.contentId, hidden: !b }, l), { ref: C, style: __spreadValues({ "--radix-collapsible-content-height": y ? `${y}px` : void 0, "--radix-collapsible-content-width": N ? `${N}px` : void 0 }, e.style), children: b && t }));
});
function R(e) {
  return e ? "open" : "closed";
}
var H = T, z = w, J = A;
export { J as C, H as R, z as T, w as a, A as b, $ as c };
