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
import { n as F, r as l, v as $, j as c, a0 as D, P as g, p as m, q as V, w as p } from "./index-DOfu0sXg.js";
import { c as y, R as k, I as G } from "./index-Czlrzsbg.js";
import { u as L } from "./index-D5alJfFq.js";
var T = "Tabs", [K, W] = F(T, [y]), h = y(), [q, x] = K(T), N = l.forwardRef((e, a) => {
  const _a = e, { __scopeTabs: t, value: o, onValueChange: r, defaultValue: d, orientation: n = "horizontal", dir: u, activationMode: b = "automatic" } = _a, v = __objRest(_a, ["__scopeTabs", "value", "onValueChange", "defaultValue", "orientation", "dir", "activationMode"]), i = L(u), [s, f] = $({ prop: o, onChange: r, defaultProp: d });
  return c.jsx(q, { scope: t, baseId: D(), value: s, onValueChange: f, orientation: n, dir: i, activationMode: b, children: c.jsx(g.div, __spreadProps(__spreadValues({ dir: i, "data-orientation": n }, v), { ref: a })) });
});
N.displayName = T;
var C = "TabsList", I = l.forwardRef((e, a) => {
  const _a = e, { __scopeTabs: t, loop: o = true } = _a, r = __objRest(_a, ["__scopeTabs", "loop"]), d = x(C, t), n = h(t);
  return c.jsx(k, __spreadProps(__spreadValues({ asChild: true }, n), { orientation: d.orientation, dir: d.dir, loop: o, children: c.jsx(g.div, __spreadProps(__spreadValues({ role: "tablist", "aria-orientation": d.orientation }, r), { ref: a })) }));
});
I.displayName = C;
var R = "TabsTrigger", j = l.forwardRef((e, a) => {
  const _a = e, { __scopeTabs: t, value: o, disabled: r = false } = _a, d = __objRest(_a, ["__scopeTabs", "value", "disabled"]), n = x(R, t), u = h(t), b = A(n.baseId, o), v = E(n.baseId, o), i = o === n.value;
  return c.jsx(G, __spreadProps(__spreadValues({ asChild: true }, u), { focusable: !r, active: i, children: c.jsx(g.button, __spreadProps(__spreadValues({ type: "button", role: "tab", "aria-selected": i, "aria-controls": v, "data-state": i ? "active" : "inactive", "data-disabled": r ? "" : void 0, disabled: r, id: b }, d), { ref: a, onMouseDown: m(e.onMouseDown, (s) => {
    !r && s.button === 0 && s.ctrlKey === false ? n.onValueChange(o) : s.preventDefault();
  }), onKeyDown: m(e.onKeyDown, (s) => {
    [" ", "Enter"].includes(s.key) && n.onValueChange(o);
  }), onFocus: m(e.onFocus, () => {
    const s = n.activationMode !== "manual";
    !i && !r && s && n.onValueChange(o);
  }) })) }));
});
j.displayName = R;
var w = "TabsContent", _ = l.forwardRef((e, a) => {
  const _a = e, { __scopeTabs: t, value: o, forceMount: r, children: d } = _a, n = __objRest(_a, ["__scopeTabs", "value", "forceMount", "children"]), u = x(w, t), b = A(u.baseId, o), v = E(u.baseId, o), i = o === u.value, s = l.useRef(i);
  return l.useEffect(() => {
    const f = requestAnimationFrame(() => s.current = false);
    return () => cancelAnimationFrame(f);
  }, []), c.jsx(V, { present: r || i, children: ({ present: f }) => c.jsx(g.div, __spreadProps(__spreadValues({ "data-state": i ? "active" : "inactive", "data-orientation": u.orientation, role: "tabpanel", "aria-labelledby": b, hidden: !f, id: v, tabIndex: 0 }, n), { ref: a, style: __spreadProps(__spreadValues({}, e.style), { animationDuration: s.current ? "0s" : void 0 }), children: f && d })) });
});
_.displayName = w;
function A(e, a) {
  return `${e}-trigger-${a}`;
}
function E(e, a) {
  return `${e}-content-${a}`;
}
var B = N, P = I, S = j, M = _;
const X = B, z = l.forwardRef((_a, t) => {
  var _b = _a, { className: e } = _b, a = __objRest(_b, ["className"]);
  return c.jsx(P, __spreadValues({ ref: t, className: p("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", e) }, a));
});
z.displayName = P.displayName;
const H = l.forwardRef((_c, t) => {
  var _d = _c, { className: e } = _d, a = __objRest(_d, ["className"]);
  return c.jsx(S, __spreadValues({ ref: t, className: p("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e) }, a));
});
H.displayName = S.displayName;
const O = l.forwardRef((_e, t) => {
  var _f = _e, { className: e } = _f, a = __objRest(_f, ["className"]);
  return c.jsx(M, __spreadValues({ ref: t, className: p("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e) }, a));
});
O.displayName = M.displayName;
export { X as T, z as a, H as b, O as c };
