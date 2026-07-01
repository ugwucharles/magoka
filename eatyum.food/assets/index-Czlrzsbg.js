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
import {
  _ as H,
  n as V,
  r as s,
  j as d,
  o as z,
  v as q,
  aE as J,
  P as D,
  p,
  a0 as Q
} from "./index-DOfu0sXg.js";
import {
  u as W
} from "./index-D5alJfFq.js";
var A = "rovingFocusGroup.onEntryFocus", X = {
  bubbles: false,
  cancelable: true
}, b = "RovingFocusGroup", [h, G, Z] = H(b), [$, le] = V(b, [Z]), [ee, te] = $(b), N = s.forwardRef((e, r) => d.jsx(h.Provider, {
  scope: e.__scopeRovingFocusGroup,
  children: d.jsx(h.Slot, {
    scope: e.__scopeRovingFocusGroup,
    children: d.jsx(oe, __spreadProps(__spreadValues({}, e), {
      ref: r
    }))
  })
}));
N.displayName = b;
var oe = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeRovingFocusGroup: c,
    orientation: t,
    loop: F = false,
    dir: g,
    currentTabStopId: R,
    defaultCurrentTabStopId: E,
    onCurrentTabStopIdChange: m,
    onEntryFocus: a,
    preventScrollOnEntryFocus: w = false
  } = _a, C = __objRest(_a, [
    "__scopeRovingFocusGroup",
    "orientation",
    "loop",
    "dir",
    "currentTabStopId",
    "defaultCurrentTabStopId",
    "onCurrentTabStopIdChange",
    "onEntryFocus",
    "preventScrollOnEntryFocus"
  ]), v = s.useRef(null), I = z(r, v), o = W(g), [l = null, T] = q({
    prop: R,
    defaultProp: E,
    onChange: m
  }), [u, i] = s.useState(false), S = J(a), M = G(c), x = s.useRef(false), [k, y] = s.useState(0);
  return s.useEffect(() => {
    const n = v.current;
    if (n) return n.addEventListener(A, S), () => n.removeEventListener(A, S);
  }, [S]), d.jsx(ee, {
    scope: c,
    orientation: t,
    dir: o,
    loop: F,
    currentTabStopId: l,
    onItemFocus: s.useCallback((n) => T(n), [T]),
    onItemShiftTab: s.useCallback(() => i(true), []),
    onFocusableItemAdd: s.useCallback(() => y((n) => n + 1), []),
    onFocusableItemRemove: s.useCallback(() => y((n) => n - 1), []),
    children: d.jsx(D.div, __spreadProps(__spreadValues({
      tabIndex: u || k === 0 ? -1 : 0,
      "data-orientation": t
    }, C), {
      ref: I,
      style: __spreadValues({
        outline: "none"
      }, e.style),
      onMouseDown: p(e.onMouseDown, () => {
        x.current = true;
      }),
      onFocus: p(e.onFocus, (n) => {
        const L = !x.current;
        if (n.target === n.currentTarget && L && !u) {
          const P = new CustomEvent(A, X);
          if (n.currentTarget.dispatchEvent(P), !P.defaultPrevented) {
            const _ = M().filter((f) => f.focusable), U = _.find((f) => f.active), B = _.find((f) => f.id === l), Y = [U, B, ..._].filter(Boolean).map((f) => f.ref.current);
            j(Y, w);
          }
        }
        x.current = false;
      }),
      onBlur: p(e.onBlur, () => i(false))
    }))
  });
}), O = "RovingFocusGroupItem", K = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeRovingFocusGroup: c,
    focusable: t = true,
    active: F = false,
    tabStopId: g
  } = _a, R = __objRest(_a, [
    "__scopeRovingFocusGroup",
    "focusable",
    "active",
    "tabStopId"
  ]), E = Q(), m = g || E, a = te(O, c), w = a.currentTabStopId === m, C = G(c), {
    onFocusableItemAdd: v,
    onFocusableItemRemove: I
  } = a;
  return s.useEffect(() => {
    if (t) return v(), () => I();
  }, [t, v, I]), d.jsx(h.ItemSlot, {
    scope: c,
    id: m,
    focusable: t,
    active: F,
    children: d.jsx(D.span, __spreadProps(__spreadValues({
      tabIndex: w ? 0 : -1,
      "data-orientation": a.orientation
    }, R), {
      ref: r,
      onMouseDown: p(e.onMouseDown, (o) => {
        t ? a.onItemFocus(m) : o.preventDefault();
      }),
      onFocus: p(e.onFocus, () => a.onItemFocus(m)),
      onKeyDown: p(e.onKeyDown, (o) => {
        if (o.key === "Tab" && o.shiftKey) {
          a.onItemShiftTab();
          return;
        }
        if (o.target !== o.currentTarget) return;
        const l = se(o, a.orientation, a.dir);
        if (l !== void 0) {
          if (o.metaKey || o.ctrlKey || o.altKey || o.shiftKey) return;
          o.preventDefault();
          let u = C().filter((i) => i.focusable).map((i) => i.ref.current);
          if (l === "last") u.reverse();
          else if (l === "prev" || l === "next") {
            l === "prev" && u.reverse();
            const i = u.indexOf(o.currentTarget);
            u = a.loop ? ce(u, i + 1) : u.slice(i + 1);
          }
          setTimeout(() => j(u));
        }
      })
    }))
  });
});
K.displayName = O;
var re = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ne(e, r) {
  return r !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function se(e, r, c) {
  const t = ne(e.key, c);
  if (!(r === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t)) && !(r === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t))) return re[t];
}
function j(e, r = false) {
  const c = document.activeElement;
  for (const t of e)
    if (t === c || (t.focus({
      preventScroll: r
    }), document.activeElement !== c)) return;
}
function ce(e, r) {
  return e.map((c, t) => e[(r + t) % e.length]);
}
var fe = N, de = K;
export {
  de as I,
  fe as R,
  le as c
};
