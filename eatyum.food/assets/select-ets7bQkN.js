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
import { _ as ft, n as mt, aA as Pe, r as o, o as k, j as r, aB as ht, P as j, p as P, aT as z, O as Re, aC as gt, aD as vt, a0 as Ie, aF as xt, aZ as St, aE as wt, v as be, aH as yt, aI as Ct, aJ as It, w as G } from "./index-DOfu0sXg.js";
import { u as Tt } from "./index-D5alJfFq.js";
import { h as bt, u as Nt, R as Pt, F as Rt } from "./Combination-C65a2kPq.js";
import { u as Et } from "./index-CxKYTSZE.js";
import { C as Ee } from "./chevron-down-DegxUQDE.js";
import { C as _t } from "./chevron-up-Cu4mgTvm.js";
import { C as jt } from "./check-AkIa94Y-.js";
function Ne(t, [n, e]) {
  return Math.min(e, Math.max(n, t));
}
var Mt = [" ", "Enter", "ArrowUp", "ArrowDown"], At = [" ", "Enter"], se = "Select", [ie, de, Ot] = ft(se), [te, xo] = mt(se, [Ot, Pe]), ue = Pe(), [Dt, Y] = te(se), [Lt, kt] = te(se), _e = (t) => {
  const { __scopeSelect: n, children: e, open: a, defaultOpen: c, onOpenChange: p, value: l, defaultValue: i, onValueChange: s, dir: f, name: v, autoComplete: w, disabled: b, required: N, form: T } = t, d = ue(n), [g, y] = o.useState(null), [u, h] = o.useState(null), [M, A] = o.useState(false), oe = Tt(f), [R = false, D] = be({ prop: a, defaultProp: c, onChange: p }), [U, Z] = be({ prop: l, defaultProp: i, onChange: s }), B = o.useRef(null), V = g ? T || !!g.closest("form") : true, [K, H] = o.useState(/* @__PURE__ */ new Set()), F = Array.from(K).map((E) => E.props.value).join(";");
  return r.jsx(yt, __spreadProps(__spreadValues({}, d), { children: r.jsxs(Dt, { required: N, scope: n, trigger: g, onTriggerChange: y, valueNode: u, onValueNodeChange: h, valueNodeHasChildren: M, onValueNodeHasChildrenChange: A, contentId: Ie(), value: U, onValueChange: Z, open: R, onOpenChange: D, dir: oe, triggerPointerDownPosRef: B, disabled: b, children: [r.jsx(ie.Provider, { scope: n, children: r.jsx(Lt, { scope: t.__scopeSelect, onNativeOptionAdd: o.useCallback((E) => {
    H((L) => new Set(L).add(E));
  }, []), onNativeOptionRemove: o.useCallback((E) => {
    H((L) => {
      const W = new Set(L);
      return W.delete(E), W;
    });
  }, []), children: e }) }), V ? r.jsxs(tt, { "aria-hidden": true, required: N, tabIndex: -1, name: v, autoComplete: w, value: U, onChange: (E) => Z(E.target.value), disabled: b, form: T, children: [U === void 0 ? r.jsx("option", { value: "" }) : null, Array.from(K)] }, F) : null] }) }));
};
_e.displayName = se;
var je = "SelectTrigger", Me = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, disabled: a = false } = _a, c = __objRest(_a, ["__scopeSelect", "disabled"]), p = ue(e), l = Y(je, e), i = l.disabled || a, s = k(n, l.onTriggerChange), f = de(e), v = o.useRef("touch"), [w, b, N] = ot((d) => {
    const g = f().filter((h) => !h.disabled), y = g.find((h) => h.value === l.value), u = nt(g, d, y);
    u !== void 0 && l.onValueChange(u.value);
  }), T = (d) => {
    i || (l.onOpenChange(true), N()), d && (l.triggerPointerDownPosRef.current = { x: Math.round(d.pageX), y: Math.round(d.pageY) });
  };
  return r.jsx(ht, __spreadProps(__spreadValues({ asChild: true }, p), { children: r.jsx(j.button, __spreadProps(__spreadValues({ type: "button", role: "combobox", "aria-controls": l.contentId, "aria-expanded": l.open, "aria-required": l.required, "aria-autocomplete": "none", dir: l.dir, "data-state": l.open ? "open" : "closed", disabled: i, "data-disabled": i ? "" : void 0, "data-placeholder": et(l.value) ? "" : void 0 }, c), { ref: s, onClick: P(c.onClick, (d) => {
    d.currentTarget.focus(), v.current !== "mouse" && T(d);
  }), onPointerDown: P(c.onPointerDown, (d) => {
    v.current = d.pointerType;
    const g = d.target;
    g.hasPointerCapture(d.pointerId) && g.releasePointerCapture(d.pointerId), d.button === 0 && d.ctrlKey === false && d.pointerType === "mouse" && (T(d), d.preventDefault());
  }), onKeyDown: P(c.onKeyDown, (d) => {
    const g = w.current !== "";
    !(d.ctrlKey || d.altKey || d.metaKey) && d.key.length === 1 && b(d.key), !(g && d.key === " ") && Mt.includes(d.key) && (T(), d.preventDefault());
  }) })) }));
});
Me.displayName = je;
var Ae = "SelectValue", Oe = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, className: a, style: c, children: p, placeholder: l = "" } = _a, i = __objRest(_a, ["__scopeSelect", "className", "style", "children", "placeholder"]), s = Y(Ae, e), { onValueNodeHasChildrenChange: f } = s, v = p !== void 0, w = k(n, s.onValueNodeChange);
  return z(() => {
    f(v);
  }, [f, v]), r.jsx(j.span, __spreadProps(__spreadValues({}, i), { ref: w, style: { pointerEvents: "none" }, children: et(s.value) ? r.jsx(r.Fragment, { children: l }) : p }));
});
Oe.displayName = Ae;
var Bt = "SelectIcon", De = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, children: a } = _a, c = __objRest(_a, ["__scopeSelect", "children"]);
  return r.jsx(j.span, __spreadProps(__spreadValues({ "aria-hidden": true }, c), { ref: n, children: a || "\u25BC" }));
});
De.displayName = Bt;
var Vt = "SelectPortal", Le = (t) => r.jsx(Ct, __spreadValues({ asChild: true }, t));
Le.displayName = Vt;
var Q = "SelectContent", ke = o.forwardRef((t, n) => {
  const e = Y(Q, t.__scopeSelect), [a, c] = o.useState();
  if (z(() => {
    c(new DocumentFragment());
  }, []), !e.open) {
    const p = a;
    return p ? Re.createPortal(r.jsx(Be, { scope: t.__scopeSelect, children: r.jsx(ie.Slot, { scope: t.__scopeSelect, children: r.jsx("div", { children: t.children }) }) }), p) : null;
  }
  return r.jsx(Ve, __spreadProps(__spreadValues({}, t), { ref: n }));
});
ke.displayName = Q;
var O = 10, [Be, q] = te(Q), Ht = "SelectContentImpl", Ft = It("SelectContent.RemoveScroll"), Ve = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, position: a = "item-aligned", onCloseAutoFocus: c, onEscapeKeyDown: p, onPointerDownOutside: l, side: i, sideOffset: s, align: f, alignOffset: v, arrowPadding: w, collisionBoundary: b, collisionPadding: N, sticky: T, hideWhenDetached: d, avoidCollisions: g } = _a, y = __objRest(_a, ["__scopeSelect", "position", "onCloseAutoFocus", "onEscapeKeyDown", "onPointerDownOutside", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "avoidCollisions"]), u = Y(Q, e), [h, M] = o.useState(null), [A, oe] = o.useState(null), R = k(n, (m) => M(m)), [D, U] = o.useState(null), [Z, B] = o.useState(null), V = de(e), [K, H] = o.useState(false), F = o.useRef(false);
  o.useEffect(() => {
    if (h) return bt(h);
  }, [h]), Nt();
  const E = o.useCallback((m) => {
    const [I, ..._] = V().map((S) => S.ref.current), [C] = _.slice(-1), x = document.activeElement;
    for (const S of m) if (S === x || (S == null || S.scrollIntoView({ block: "nearest" }), S === I && A && (A.scrollTop = 0), S === C && A && (A.scrollTop = A.scrollHeight), S == null || S.focus(), document.activeElement !== x)) return;
  }, [V, A]), L = o.useCallback(() => E([D, h]), [E, D, h]);
  o.useEffect(() => {
    K && L();
  }, [K, L]);
  const { onOpenChange: W, triggerPointerDownPosRef: $ } = u;
  o.useEffect(() => {
    if (h) {
      let m = { x: 0, y: 0 };
      const I = (C) => {
        var _a2, _b;
        var x, S;
        m = { x: Math.abs(Math.round(C.pageX) - ((_a2 = (x = $.current) == null ? void 0 : x.x) != null ? _a2 : 0)), y: Math.abs(Math.round(C.pageY) - ((_b = (S = $.current) == null ? void 0 : S.y) != null ? _b : 0)) };
      }, _ = (C) => {
        m.x <= 10 && m.y <= 10 ? C.preventDefault() : h.contains(C.target) || W(false), document.removeEventListener("pointermove", I), $.current = null;
      };
      return $.current !== null && (document.addEventListener("pointermove", I), document.addEventListener("pointerup", _, { capture: true, once: true })), () => {
        document.removeEventListener("pointermove", I), document.removeEventListener("pointerup", _, { capture: true });
      };
    }
  }, [h, W, $]), o.useEffect(() => {
    const m = () => W(false);
    return window.addEventListener("blur", m), window.addEventListener("resize", m), () => {
      window.removeEventListener("blur", m), window.removeEventListener("resize", m);
    };
  }, [W]);
  const [pe, ae] = ot((m) => {
    const I = V().filter((x) => !x.disabled), _ = I.find((x) => x.ref.current === document.activeElement), C = nt(I, m, _);
    C && setTimeout(() => C.ref.current.focus());
  }), fe = o.useCallback((m, I, _) => {
    const C = !F.current && !_;
    (u.value !== void 0 && u.value === I || C) && (U(m), C && (F.current = true));
  }, [u.value]), me = o.useCallback(() => h == null ? void 0 : h.focus(), [h]), ee = o.useCallback((m, I, _) => {
    const C = !F.current && !_;
    (u.value !== void 0 && u.value === I || C) && B(m);
  }, [u.value]), le = a === "popper" ? xe : He, ne = le === xe ? { side: i, sideOffset: s, align: f, alignOffset: v, arrowPadding: w, collisionBoundary: b, collisionPadding: N, sticky: T, hideWhenDetached: d, avoidCollisions: g } : {};
  return r.jsx(Be, { scope: e, content: h, viewport: A, onViewportChange: oe, itemRefCallback: fe, selectedItem: D, onItemLeave: me, itemTextRefCallback: ee, focusSelectedItem: L, selectedItemText: Z, position: a, isPositioned: K, searchRef: pe, children: r.jsx(Pt, { as: Ft, allowPinchZoom: true, children: r.jsx(Rt, { asChild: true, trapped: u.open, onMountAutoFocus: (m) => {
    m.preventDefault();
  }, onUnmountAutoFocus: P(c, (m) => {
    var I;
    (I = u.trigger) == null || I.focus({ preventScroll: true }), m.preventDefault();
  }), children: r.jsx(gt, { asChild: true, disableOutsidePointerEvents: true, onEscapeKeyDown: p, onPointerDownOutside: l, onFocusOutside: (m) => m.preventDefault(), onDismiss: () => u.onOpenChange(false), children: r.jsx(le, __spreadProps(__spreadValues(__spreadValues({ role: "listbox", id: u.contentId, "data-state": u.open ? "open" : "closed", dir: u.dir, onContextMenu: (m) => m.preventDefault() }, y), ne), { onPlaced: () => H(true), ref: R, style: __spreadValues({ display: "flex", flexDirection: "column", outline: "none" }, y.style), onKeyDown: P(y.onKeyDown, (m) => {
    const I = m.ctrlKey || m.altKey || m.metaKey;
    if (m.key === "Tab" && m.preventDefault(), !I && m.key.length === 1 && ae(m.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(m.key)) {
      let C = V().filter((x) => !x.disabled).map((x) => x.ref.current);
      if (["ArrowUp", "End"].includes(m.key) && (C = C.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(m.key)) {
        const x = m.target, S = C.indexOf(x);
        C = C.slice(S + 1);
      }
      setTimeout(() => E(C)), m.preventDefault();
    }
  }) })) }) }) }) });
});
Ve.displayName = Ht;
var Wt = "SelectItemAlignedPosition", He = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, onPlaced: a } = _a, c = __objRest(_a, ["__scopeSelect", "onPlaced"]), p = Y(Q, e), l = q(Q, e), [i, s] = o.useState(null), [f, v] = o.useState(null), w = k(n, (R) => v(R)), b = de(e), N = o.useRef(false), T = o.useRef(true), { viewport: d, selectedItem: g, selectedItemText: y, focusSelectedItem: u } = l, h = o.useCallback(() => {
    if (p.trigger && p.valueNode && i && f && d && g && y) {
      const R = p.trigger.getBoundingClientRect(), D = f.getBoundingClientRect(), U = p.valueNode.getBoundingClientRect(), Z = y.getBoundingClientRect();
      if (p.dir !== "rtl") {
        const x = Z.left - D.left, S = U.left - x, X = R.left - S, J = R.width + X, he = Math.max(J, D.width), ge = window.innerWidth - O, ve = Ne(S, [O, Math.max(O, ge - he)]);
        i.style.minWidth = J + "px", i.style.left = ve + "px";
      } else {
        const x = D.right - Z.right, S = window.innerWidth - U.right - x, X = window.innerWidth - R.right - S, J = R.width + X, he = Math.max(J, D.width), ge = window.innerWidth - O, ve = Ne(S, [O, Math.max(O, ge - he)]);
        i.style.minWidth = J + "px", i.style.right = ve + "px";
      }
      const B = b(), V = window.innerHeight - O * 2, K = d.scrollHeight, H = window.getComputedStyle(f), F = parseInt(H.borderTopWidth, 10), E = parseInt(H.paddingTop, 10), L = parseInt(H.borderBottomWidth, 10), W = parseInt(H.paddingBottom, 10), $ = F + E + K + W + L, pe = Math.min(g.offsetHeight * 5, $), ae = window.getComputedStyle(d), fe = parseInt(ae.paddingTop, 10), me = parseInt(ae.paddingBottom, 10), ee = R.top + R.height / 2 - O, le = V - ee, ne = g.offsetHeight / 2, m = g.offsetTop + ne, I = F + E + m, _ = $ - I;
      if (I <= ee) {
        const x = B.length > 0 && g === B[B.length - 1].ref.current;
        i.style.bottom = "0px";
        const S = f.clientHeight - d.offsetTop - d.offsetHeight, X = Math.max(le, ne + (x ? me : 0) + S + L), J = I + X;
        i.style.height = J + "px";
      } else {
        const x = B.length > 0 && g === B[0].ref.current;
        i.style.top = "0px";
        const X = Math.max(ee, F + d.offsetTop + (x ? fe : 0) + ne) + _;
        i.style.height = X + "px", d.scrollTop = I - ee + d.offsetTop;
      }
      i.style.margin = `${O}px 0`, i.style.minHeight = pe + "px", i.style.maxHeight = V + "px", a == null || a(), requestAnimationFrame(() => N.current = true);
    }
  }, [b, p.trigger, p.valueNode, i, f, d, g, y, p.dir, a]);
  z(() => h(), [h]);
  const [M, A] = o.useState();
  z(() => {
    f && A(window.getComputedStyle(f).zIndex);
  }, [f]);
  const oe = o.useCallback((R) => {
    R && T.current === true && (h(), u == null || u(), T.current = false);
  }, [h, u]);
  return r.jsx(Kt, { scope: e, contentWrapper: i, shouldExpandOnScrollRef: N, onScrollButtonChange: oe, children: r.jsx("div", { ref: s, style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: M }, children: r.jsx(j.div, __spreadProps(__spreadValues({}, c), { ref: w, style: __spreadValues({ boxSizing: "border-box", maxHeight: "100%" }, c.style) })) }) });
});
He.displayName = Wt;
var Ut = "SelectPopperPosition", xe = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, align: a = "start", collisionPadding: c = O } = _a, p = __objRest(_a, ["__scopeSelect", "align", "collisionPadding"]), l = ue(e);
  return r.jsx(vt, __spreadProps(__spreadValues(__spreadValues({}, l), p), { ref: n, align: a, collisionPadding: c, style: __spreadProps(__spreadValues({ boxSizing: "border-box" }, p.style), { "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-select-content-available-width": "var(--radix-popper-available-width)", "--radix-select-content-available-height": "var(--radix-popper-available-height)", "--radix-select-trigger-width": "var(--radix-popper-anchor-width)", "--radix-select-trigger-height": "var(--radix-popper-anchor-height)" }) }));
});
xe.displayName = Ut;
var [Kt, Te] = te(Q, {}), Se = "SelectViewport", Fe = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, nonce: a } = _a, c = __objRest(_a, ["__scopeSelect", "nonce"]), p = q(Se, e), l = Te(Se, e), i = k(n, p.onViewportChange), s = o.useRef(0);
  return r.jsxs(r.Fragment, { children: [r.jsx("style", { dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" }, nonce: a }), r.jsx(ie.Slot, { scope: e, children: r.jsx(j.div, __spreadProps(__spreadValues({ "data-radix-select-viewport": "", role: "presentation" }, c), { ref: i, style: __spreadValues({ position: "relative", flex: 1, overflow: "hidden auto" }, c.style), onScroll: P(c.onScroll, (f) => {
    const v = f.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: b } = l;
    if (b != null && b.current && w) {
      const N = Math.abs(s.current - v.scrollTop);
      if (N > 0) {
        const T = window.innerHeight - O * 2, d = parseFloat(w.style.minHeight), g = parseFloat(w.style.height), y = Math.max(d, g);
        if (y < T) {
          const u = y + N, h = Math.min(T, u), M = u - h;
          w.style.height = h + "px", w.style.bottom === "0px" && (v.scrollTop = M > 0 ? M : 0, w.style.justifyContent = "flex-end");
        }
      }
    }
    s.current = v.scrollTop;
  }) })) })] });
});
Fe.displayName = Se;
var We = "SelectGroup", [$t, zt] = te(We), Gt = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e } = _a, a = __objRest(_a, ["__scopeSelect"]), c = Ie();
  return r.jsx($t, { scope: e, id: c, children: r.jsx(j.div, __spreadProps(__spreadValues({ role: "group", "aria-labelledby": c }, a), { ref: n })) });
});
Gt.displayName = We;
var Ue = "SelectLabel", Ke = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e } = _a, a = __objRest(_a, ["__scopeSelect"]), c = zt(Ue, e);
  return r.jsx(j.div, __spreadProps(__spreadValues({ id: c.id }, a), { ref: n }));
});
Ke.displayName = Ue;
var ce = "SelectItem", [Yt, $e] = te(ce), ze = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, value: a, disabled: c = false, textValue: p } = _a, l = __objRest(_a, ["__scopeSelect", "value", "disabled", "textValue"]), i = Y(ce, e), s = q(ce, e), f = i.value === a, [v, w] = o.useState(p != null ? p : ""), [b, N] = o.useState(false), T = k(n, (u) => {
    var h;
    return (h = s.itemRefCallback) == null ? void 0 : h.call(s, u, a, c);
  }), d = Ie(), g = o.useRef("touch"), y = () => {
    c || (i.onValueChange(a), i.onOpenChange(false));
  };
  if (a === "") throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
  return r.jsx(Yt, { scope: e, value: a, disabled: c, textId: d, isSelected: f, onItemTextChange: o.useCallback((u) => {
    w((h) => {
      var _a2;
      return h || ((_a2 = u == null ? void 0 : u.textContent) != null ? _a2 : "").trim();
    });
  }, []), children: r.jsx(ie.ItemSlot, { scope: e, value: a, disabled: c, textValue: v, children: r.jsx(j.div, __spreadProps(__spreadValues({ role: "option", "aria-labelledby": d, "data-highlighted": b ? "" : void 0, "aria-selected": f && b, "data-state": f ? "checked" : "unchecked", "aria-disabled": c || void 0, "data-disabled": c ? "" : void 0, tabIndex: c ? void 0 : -1 }, l), { ref: T, onFocus: P(l.onFocus, () => N(true)), onBlur: P(l.onBlur, () => N(false)), onClick: P(l.onClick, () => {
    g.current !== "mouse" && y();
  }), onPointerUp: P(l.onPointerUp, () => {
    g.current === "mouse" && y();
  }), onPointerDown: P(l.onPointerDown, (u) => {
    g.current = u.pointerType;
  }), onPointerMove: P(l.onPointerMove, (u) => {
    var h;
    g.current = u.pointerType, c ? (h = s.onItemLeave) == null || h.call(s) : g.current === "mouse" && u.currentTarget.focus({ preventScroll: true });
  }), onPointerLeave: P(l.onPointerLeave, (u) => {
    var h;
    u.currentTarget === document.activeElement && ((h = s.onItemLeave) == null || h.call(s));
  }), onKeyDown: P(l.onKeyDown, (u) => {
    var M;
    ((M = s.searchRef) == null ? void 0 : M.current) !== "" && u.key === " " || (At.includes(u.key) && y(), u.key === " " && u.preventDefault());
  }) })) }) });
});
ze.displayName = ce;
var re = "SelectItemText", Ge = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, className: a, style: c } = _a, p = __objRest(_a, ["__scopeSelect", "className", "style"]), l = Y(re, e), i = q(re, e), s = $e(re, e), f = kt(re, e), [v, w] = o.useState(null), b = k(n, (y) => w(y), s.onItemTextChange, (y) => {
    var u;
    return (u = i.itemTextRefCallback) == null ? void 0 : u.call(i, y, s.value, s.disabled);
  }), N = v == null ? void 0 : v.textContent, T = o.useMemo(() => r.jsx("option", { value: s.value, disabled: s.disabled, children: N }, s.value), [s.disabled, s.value, N]), { onNativeOptionAdd: d, onNativeOptionRemove: g } = f;
  return z(() => (d(T), () => g(T)), [d, g, T]), r.jsxs(r.Fragment, { children: [r.jsx(j.span, __spreadProps(__spreadValues({ id: s.textId }, p), { ref: b })), s.isSelected && l.valueNode && !l.valueNodeHasChildren ? Re.createPortal(p.children, l.valueNode) : null] });
});
Ge.displayName = re;
var Ye = "SelectItemIndicator", qe = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e } = _a, a = __objRest(_a, ["__scopeSelect"]);
  return $e(Ye, e).isSelected ? r.jsx(j.span, __spreadProps(__spreadValues({ "aria-hidden": true }, a), { ref: n })) : null;
});
qe.displayName = Ye;
var we = "SelectScrollUpButton", Ze = o.forwardRef((t, n) => {
  const e = q(we, t.__scopeSelect), a = Te(we, t.__scopeSelect), [c, p] = o.useState(false), l = k(n, a.onScrollButtonChange);
  return z(() => {
    if (e.viewport && e.isPositioned) {
      let i = function() {
        const f = s.scrollTop > 0;
        p(f);
      };
      const s = e.viewport;
      return i(), s.addEventListener("scroll", i), () => s.removeEventListener("scroll", i);
    }
  }, [e.viewport, e.isPositioned]), c ? r.jsx(Je, __spreadProps(__spreadValues({}, t), { ref: l, onAutoScroll: () => {
    const { viewport: i, selectedItem: s } = e;
    i && s && (i.scrollTop = i.scrollTop - s.offsetHeight);
  } })) : null;
});
Ze.displayName = we;
var ye = "SelectScrollDownButton", Xe = o.forwardRef((t, n) => {
  const e = q(ye, t.__scopeSelect), a = Te(ye, t.__scopeSelect), [c, p] = o.useState(false), l = k(n, a.onScrollButtonChange);
  return z(() => {
    if (e.viewport && e.isPositioned) {
      let i = function() {
        const f = s.scrollHeight - s.clientHeight, v = Math.ceil(s.scrollTop) < f;
        p(v);
      };
      const s = e.viewport;
      return i(), s.addEventListener("scroll", i), () => s.removeEventListener("scroll", i);
    }
  }, [e.viewport, e.isPositioned]), c ? r.jsx(Je, __spreadProps(__spreadValues({}, t), { ref: l, onAutoScroll: () => {
    const { viewport: i, selectedItem: s } = e;
    i && s && (i.scrollTop = i.scrollTop + s.offsetHeight);
  } })) : null;
});
Xe.displayName = ye;
var Je = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e, onAutoScroll: a } = _a, c = __objRest(_a, ["__scopeSelect", "onAutoScroll"]), p = q("SelectScrollButton", e), l = o.useRef(null), i = de(e), s = o.useCallback(() => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  }, []);
  return o.useEffect(() => () => s(), [s]), z(() => {
    var v;
    const f = i().find((w) => w.ref.current === document.activeElement);
    (v = f == null ? void 0 : f.ref.current) == null || v.scrollIntoView({ block: "nearest" });
  }, [i]), r.jsx(j.div, __spreadProps(__spreadValues({ "aria-hidden": true }, c), { ref: n, style: __spreadValues({ flexShrink: 0 }, c.style), onPointerDown: P(c.onPointerDown, () => {
    l.current === null && (l.current = window.setInterval(a, 50));
  }), onPointerMove: P(c.onPointerMove, () => {
    var f;
    (f = p.onItemLeave) == null || f.call(p), l.current === null && (l.current = window.setInterval(a, 50));
  }), onPointerLeave: P(c.onPointerLeave, () => {
    s();
  }) }));
}), qt = "SelectSeparator", Qe = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e } = _a, a = __objRest(_a, ["__scopeSelect"]);
  return r.jsx(j.div, __spreadProps(__spreadValues({ "aria-hidden": true }, a), { ref: n }));
});
Qe.displayName = qt;
var Ce = "SelectArrow", Zt = o.forwardRef((t, n) => {
  const _a = t, { __scopeSelect: e } = _a, a = __objRest(_a, ["__scopeSelect"]), c = ue(e), p = Y(Ce, e), l = q(Ce, e);
  return p.open && l.position === "popper" ? r.jsx(xt, __spreadProps(__spreadValues(__spreadValues({}, c), a), { ref: n })) : null;
});
Zt.displayName = Ce;
function et(t) {
  return t === "" || t === void 0;
}
var tt = o.forwardRef((t, n) => {
  const _a = t, { value: e } = _a, a = __objRest(_a, ["value"]), c = o.useRef(null), p = k(n, c), l = Et(e);
  return o.useEffect(() => {
    const i = c.current, s = window.HTMLSelectElement.prototype, v = Object.getOwnPropertyDescriptor(s, "value").set;
    if (l !== e && v) {
      const w = new Event("change", { bubbles: true });
      v.call(i, e), i.dispatchEvent(w);
    }
  }, [l, e]), r.jsx(St, { asChild: true, children: r.jsx("select", __spreadProps(__spreadValues({}, a), { ref: p, defaultValue: e })) });
});
tt.displayName = "BubbleSelect";
function ot(t) {
  const n = wt(t), e = o.useRef(""), a = o.useRef(0), c = o.useCallback((l) => {
    const i = e.current + l;
    n(i), (function s(f) {
      e.current = f, window.clearTimeout(a.current), f !== "" && (a.current = window.setTimeout(() => s(""), 1e3));
    })(i);
  }, [n]), p = o.useCallback(() => {
    e.current = "", window.clearTimeout(a.current);
  }, []);
  return o.useEffect(() => () => window.clearTimeout(a.current), []), [e, c, p];
}
function nt(t, n, e) {
  const c = n.length > 1 && Array.from(n).every((f) => f === n[0]) ? n[0] : n, p = e ? t.indexOf(e) : -1;
  let l = Xt(t, Math.max(p, 0));
  c.length === 1 && (l = l.filter((f) => f !== e));
  const s = l.find((f) => f.textValue.toLowerCase().startsWith(c.toLowerCase()));
  return s !== e ? s : void 0;
}
function Xt(t, n) {
  return t.map((e, a) => t[(n + a) % t.length]);
}
var Jt = _e, rt = Me, Qt = Oe, eo = De, to = Le, st = ke, oo = Fe, at = Ke, lt = ze, no = Ge, ro = qe, ct = Ze, it = Xe, dt = Qe;
const So = Jt, wo = Qt, so = o.forwardRef((_a, a) => {
  var _b = _a, { className: t, children: n } = _b, e = __objRest(_b, ["className", "children"]);
  return r.jsxs(rt, __spreadProps(__spreadValues({ ref: a, className: G("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", t) }, e), { children: [n, r.jsx(eo, { asChild: true, children: r.jsx(Ee, { className: "h-4 w-4 opacity-50" }) })] }));
});
so.displayName = rt.displayName;
const ut = o.forwardRef((_c, e) => {
  var _d = _c, { className: t } = _d, n = __objRest(_d, ["className"]);
  return r.jsx(ct, __spreadProps(__spreadValues({ ref: e, className: G("flex cursor-default items-center justify-center py-1", t) }, n), { children: r.jsx(_t, { className: "h-4 w-4" }) }));
});
ut.displayName = ct.displayName;
const pt = o.forwardRef((_e2, e) => {
  var _f = _e2, { className: t } = _f, n = __objRest(_f, ["className"]);
  return r.jsx(it, __spreadProps(__spreadValues({ ref: e, className: G("flex cursor-default items-center justify-center py-1", t) }, n), { children: r.jsx(Ee, { className: "h-4 w-4" }) }));
});
pt.displayName = it.displayName;
const ao = o.forwardRef((_g, c) => {
  var _h = _g, { className: t, children: n, position: e = "popper" } = _h, a = __objRest(_h, ["className", "children", "position"]);
  return r.jsx(to, { children: r.jsxs(st, __spreadProps(__spreadValues({ ref: c, className: G("relative z-[70] max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", e === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t), position: e }, a), { children: [r.jsx(ut, {}), r.jsx(oo, { className: G("p-1", e === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: n }), r.jsx(pt, {})] })) });
});
ao.displayName = st.displayName;
const lo = o.forwardRef((_i, e) => {
  var _j = _i, { className: t } = _j, n = __objRest(_j, ["className"]);
  return r.jsx(at, __spreadValues({ ref: e, className: G("py-1.5 pl-8 pr-2 text-sm font-semibold", t) }, n));
});
lo.displayName = at.displayName;
const co = o.forwardRef((_k, a) => {
  var _l = _k, { className: t, children: n } = _l, e = __objRest(_l, ["className", "children"]);
  return r.jsxs(lt, __spreadProps(__spreadValues({ ref: a, className: G("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t) }, e), { children: [r.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: r.jsx(ro, { children: r.jsx(jt, { className: "h-4 w-4" }) }) }), r.jsx(no, { children: n })] }));
});
co.displayName = lt.displayName;
const io = o.forwardRef((_m, e) => {
  var _n = _m, { className: t } = _n, n = __objRest(_n, ["className"]);
  return r.jsx(dt, __spreadValues({ ref: e, className: G("-mx-1 my-1 h-px bg-muted", t) }, n));
});
io.displayName = dt.displayName;
export { So as S, so as a, wo as b, ao as c, co as d, Ne as e };
