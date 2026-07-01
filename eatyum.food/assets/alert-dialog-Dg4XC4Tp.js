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
import { n as G, r as s, j as o, o as u, p as H, ad as W, w as n, ae as A } from "./index-DOfu0sXg.js";
import { g as D, T as k, O as V, W as Y, C as q, h as B, i as J, j as v, R as K, P as Q } from "./dialog-BUvIuveX.js";
var x = "AlertDialog", [U, xe] = G(x, [D]), i = D(), N = (e) => {
  const _a = e, { __scopeAlertDialog: a } = _a, t = __objRest(_a, ["__scopeAlertDialog"]), r = i(a);
  return o.jsx(K, __spreadProps(__spreadValues(__spreadValues({}, r), t), { modal: true }));
};
N.displayName = x;
var X = "AlertDialogTrigger", y = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), l = i(t);
  return o.jsx(k, __spreadProps(__spreadValues(__spreadValues({}, l), r), { ref: a }));
});
y.displayName = X;
var Z = "AlertDialogPortal", R = (e) => {
  const _a = e, { __scopeAlertDialog: a } = _a, t = __objRest(_a, ["__scopeAlertDialog"]), r = i(a);
  return o.jsx(Q, __spreadValues(__spreadValues({}, r), t));
};
R.displayName = Z;
var ee = "AlertDialogOverlay", j = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), l = i(t);
  return o.jsx(V, __spreadProps(__spreadValues(__spreadValues({}, l), r), { ref: a }));
});
j.displayName = ee;
var c = "AlertDialogContent", [ae, te] = U(c), oe = W("AlertDialogContent"), _ = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t, children: r } = _a, l = __objRest(_a, ["__scopeAlertDialog", "children"]), g = i(t), p = s.useRef(null), L = u(a, p), m = s.useRef(null);
  return o.jsx(Y, { contentName: c, titleName: h, docsSlug: "alert-dialog", children: o.jsx(ae, { scope: t, cancelRef: m, children: o.jsxs(q, __spreadProps(__spreadValues(__spreadValues({ role: "alertdialog" }, g), l), { ref: L, onOpenAutoFocus: H(l.onOpenAutoFocus, (d) => {
    var f;
    d.preventDefault(), (f = m.current) == null || f.focus({ preventScroll: true });
  }), onPointerDownOutside: (d) => d.preventDefault(), onInteractOutside: (d) => d.preventDefault(), children: [o.jsx(oe, { children: r }), o.jsx(se, { contentRef: p })] })) }) });
});
_.displayName = c;
var h = "AlertDialogTitle", w = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), l = i(t);
  return o.jsx(B, __spreadProps(__spreadValues(__spreadValues({}, l), r), { ref: a }));
});
w.displayName = h;
var C = "AlertDialogDescription", b = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), l = i(t);
  return o.jsx(J, __spreadProps(__spreadValues(__spreadValues({}, l), r), { ref: a }));
});
b.displayName = C;
var re = "AlertDialogAction", E = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), l = i(t);
  return o.jsx(v, __spreadProps(__spreadValues(__spreadValues({}, l), r), { ref: a }));
});
E.displayName = re;
var P = "AlertDialogCancel", S = s.forwardRef((e, a) => {
  const _a = e, { __scopeAlertDialog: t } = _a, r = __objRest(_a, ["__scopeAlertDialog"]), { cancelRef: l } = te(P, t), g = i(t), p = u(a, l);
  return o.jsx(v, __spreadProps(__spreadValues(__spreadValues({}, g), r), { ref: p }));
});
S.displayName = P;
var se = ({ contentRef: e }) => {
  const a = `\`${c}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${c}\` by passing a \`${C}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${c}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
  return s.useEffect(() => {
    var r;
    document.getElementById((r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")) || console.warn(a);
  }, [a, e]), null;
}, le = N, ie = y, ne = R, T = j, O = _, $ = E, M = S, I = w, F = b;
const Ne = le, ye = ie, ce = ne, z = s.forwardRef((_a, t) => {
  var _b = _a, { className: e } = _b, a = __objRest(_b, ["className"]);
  return o.jsx(T, __spreadProps(__spreadValues({ className: n("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e) }, a), { ref: t }));
});
z.displayName = T.displayName;
const de = s.forwardRef((_c, t) => {
  var _d = _c, { className: e } = _d, a = __objRest(_d, ["className"]);
  return o.jsxs(ce, { children: [o.jsx(z, {}), o.jsx(O, __spreadValues({ ref: t, className: n("fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg max-h-[90vh] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:p-6 sm:rounded-lg", e) }, a))] });
});
de.displayName = O.displayName;
const pe = (_e) => {
  var _f = _e, { className: e } = _f, a = __objRest(_f, ["className"]);
  return o.jsx("div", __spreadValues({ className: n("flex flex-col space-y-2 text-center sm:text-left", e) }, a));
};
pe.displayName = "AlertDialogHeader";
const ge = (_g) => {
  var _h = _g, { className: e } = _h, a = __objRest(_h, ["className"]);
  return o.jsx("div", __spreadValues({ className: n("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e) }, a));
};
ge.displayName = "AlertDialogFooter";
const me = s.forwardRef((_i, t) => {
  var _j = _i, { className: e } = _j, a = __objRest(_j, ["className"]);
  return o.jsx(I, __spreadValues({ ref: t, className: n("text-lg font-semibold", e) }, a));
});
me.displayName = I.displayName;
const fe = s.forwardRef((_k, t) => {
  var _l = _k, { className: e } = _l, a = __objRest(_l, ["className"]);
  return o.jsx(F, __spreadValues({ ref: t, className: n("text-sm text-muted-foreground", e) }, a));
});
fe.displayName = F.displayName;
const ue = s.forwardRef((_m, t) => {
  var _n = _m, { className: e } = _n, a = __objRest(_n, ["className"]);
  return o.jsx($, __spreadValues({ ref: t, className: n(A(), e) }, a));
});
ue.displayName = $.displayName;
const Ae = s.forwardRef((_o, t) => {
  var _p = _o, { className: e } = _p, a = __objRest(_p, ["className"]);
  return o.jsx(M, __spreadValues({ ref: t, className: n(A({ variant: "outline" }), "mt-2 sm:mt-0", e) }, a));
});
Ae.displayName = M.displayName;
export { Ne as A, de as a, pe as b, me as c, fe as d, ge as e, Ae as f, ue as g, ye as h };
