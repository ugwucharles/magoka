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
  n as K,
  r as i,
  o as N,
  j as n,
  P as x,
  p as m,
  q as h,
  aC as U,
  aL as X,
  v as Y,
  a0 as y,
  aI as Z,
  aJ as Q,
  w as p,
  X as ee
} from "./index-DOfu0sXg.js";
import {
  R as te,
  h as oe,
  u as ae,
  F as ne
} from "./Combination-C65a2kPq.js";
var C = "Dialog", [E, Ee] = K(C), [se, d] = E(C), P = (e) => {
  const {
    __scopeDialog: t,
    children: o,
    open: s,
    defaultOpen: r,
    onOpenChange: a,
    modal: l = true
  } = e, c = i.useRef(null), u = i.useRef(null), [g = false, v] = Y({
    prop: s,
    defaultProp: r,
    onChange: a
  });
  return n.jsx(se, {
    scope: t,
    triggerRef: c,
    contentRef: u,
    contentId: y(),
    titleId: y(),
    descriptionId: y(),
    open: g,
    onOpenChange: v,
    onOpenToggle: i.useCallback(() => v((J) => !J), [v]),
    modal: l,
    children: o
  });
};
P.displayName = C;
var b = "DialogTrigger", O = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o
  } = _a, s = __objRest(_a, [
    "__scopeDialog"
  ]), r = d(b, o), a = N(t, r.triggerRef);
  return n.jsx(x.button, __spreadProps(__spreadValues({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": j(r.open)
  }, s), {
    ref: a,
    onClick: m(e.onClick, r.onOpenToggle)
  }));
});
O.displayName = b;
var R = "DialogPortal", [re, I] = E(R, {
  forceMount: void 0
}), w = (e) => {
  const {
    __scopeDialog: t,
    forceMount: o,
    children: s,
    container: r
  } = e, a = d(R, t);
  return n.jsx(re, {
    scope: t,
    forceMount: o,
    children: i.Children.map(s, (l) => n.jsx(h, {
      present: o || a.open,
      children: n.jsx(Z, {
        asChild: true,
        container: r,
        children: l
      })
    }))
  });
};
w.displayName = R;
var D = "DialogOverlay", T = i.forwardRef((e, t) => {
  const o = I(D, e.__scopeDialog), _a = e, {
    forceMount: s = o.forceMount
  } = _a, r = __objRest(_a, [
    "forceMount"
  ]), a = d(D, e.__scopeDialog);
  return a.modal ? n.jsx(h, {
    present: s || a.open,
    children: n.jsx(le, __spreadProps(__spreadValues({}, r), {
      ref: t
    }))
  }) : null;
});
T.displayName = D;
var ie = Q("DialogOverlay.RemoveScroll"), le = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o
  } = _a, s = __objRest(_a, [
    "__scopeDialog"
  ]), r = d(D, o);
  return n.jsx(te, {
    as: ie,
    allowPinchZoom: true,
    shards: [r.contentRef],
    children: n.jsx(x.div, __spreadProps(__spreadValues({
      "data-state": j(r.open)
    }, s), {
      ref: t,
      style: __spreadValues({
        pointerEvents: "auto"
      }, s.style)
    }))
  });
}), f = "DialogContent", A = i.forwardRef((e, t) => {
  const o = I(f, e.__scopeDialog), _a = e, {
    forceMount: s = o.forceMount
  } = _a, r = __objRest(_a, [
    "forceMount"
  ]), a = d(f, e.__scopeDialog);
  return n.jsx(h, {
    present: s || a.open,
    children: a.modal ? n.jsx(ce, __spreadProps(__spreadValues({}, r), {
      ref: t
    })) : n.jsx(de, __spreadProps(__spreadValues({}, r), {
      ref: t
    }))
  });
});
A.displayName = f;
var ce = i.forwardRef((e, t) => {
  const o = d(f, e.__scopeDialog), s = i.useRef(null), r = N(t, o.contentRef, s);
  return i.useEffect(() => {
    const a = s.current;
    if (a) return oe(a);
  }, []), n.jsx(M, __spreadProps(__spreadValues({}, e), {
    ref: r,
    trapFocus: o.open,
    disableOutsidePointerEvents: true,
    onCloseAutoFocus: m(e.onCloseAutoFocus, (a) => {
      var l;
      a.preventDefault(), (l = o.triggerRef.current) == null || l.focus();
    }),
    onPointerDownOutside: m(e.onPointerDownOutside, (a) => {
      const l = a.detail.originalEvent, c = l.button === 0 && l.ctrlKey === true;
      (l.button === 2 || c) && a.preventDefault();
    }),
    onFocusOutside: m(e.onFocusOutside, (a) => a.preventDefault())
  }));
}), de = i.forwardRef((e, t) => {
  const o = d(f, e.__scopeDialog), s = i.useRef(false), r = i.useRef(false);
  return n.jsx(M, __spreadProps(__spreadValues({}, e), {
    ref: t,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: (a) => {
      var l, c;
      (l = e.onCloseAutoFocus) == null || l.call(e, a), a.defaultPrevented || (s.current || (c = o.triggerRef.current) == null || c.focus(), a.preventDefault()), s.current = false, r.current = false;
    },
    onInteractOutside: (a) => {
      var u, g;
      (u = e.onInteractOutside) == null || u.call(e, a), a.defaultPrevented || (s.current = true, a.detail.originalEvent.type === "pointerdown" && (r.current = true));
      const l = a.target;
      ((g = o.triggerRef.current) == null ? void 0 : g.contains(l)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && r.current && a.preventDefault();
    }
  }));
}), M = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o,
    trapFocus: s,
    onOpenAutoFocus: r,
    onCloseAutoFocus: a
  } = _a, l = __objRest(_a, [
    "__scopeDialog",
    "trapFocus",
    "onOpenAutoFocus",
    "onCloseAutoFocus"
  ]), c = d(f, o), u = i.useRef(null), g = N(t, u);
  return ae(), n.jsxs(n.Fragment, {
    children: [n.jsx(ne, {
      asChild: true,
      loop: true,
      trapped: s,
      onMountAutoFocus: r,
      onUnmountAutoFocus: a,
      children: n.jsx(U, __spreadProps(__spreadValues({
        role: "dialog",
        id: c.contentId,
        "aria-describedby": c.descriptionId,
        "aria-labelledby": c.titleId,
        "data-state": j(c.open)
      }, l), {
        ref: g,
        onDismiss: () => c.onOpenChange(false)
      }))
    }), n.jsxs(n.Fragment, {
      children: [n.jsx(ue, {
        titleId: c.titleId
      }), n.jsx(ge, {
        contentRef: u,
        descriptionId: c.descriptionId
      })]
    })]
  });
}), _ = "DialogTitle", F = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o
  } = _a, s = __objRest(_a, [
    "__scopeDialog"
  ]), r = d(_, o);
  return n.jsx(x.h2, __spreadProps(__spreadValues({
    id: r.titleId
  }, s), {
    ref: t
  }));
});
F.displayName = _;
var S = "DialogDescription", W = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o
  } = _a, s = __objRest(_a, [
    "__scopeDialog"
  ]), r = d(S, o);
  return n.jsx(x.p, __spreadProps(__spreadValues({
    id: r.descriptionId
  }, s), {
    ref: t
  }));
});
W.displayName = S;
var $ = "DialogClose", k = i.forwardRef((e, t) => {
  const _a = e, {
    __scopeDialog: o
  } = _a, s = __objRest(_a, [
    "__scopeDialog"
  ]), r = d($, o);
  return n.jsx(x.button, __spreadProps(__spreadValues({
    type: "button"
  }, s), {
    ref: t,
    onClick: m(e.onClick, () => r.onOpenChange(false))
  }));
});
k.displayName = $;
function j(e) {
  return e ? "open" : "closed";
}
var L = "DialogTitleWarning", [Pe, G] = X(L, {
  contentName: f,
  titleName: _,
  docsSlug: "dialog"
}), ue = ({
  titleId: e
}) => {
  const t = G(L), o = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return i.useEffect(() => {
    e && (document.getElementById(e) || console.error(o));
  }, [o, e]), null;
}, fe = "DialogDescriptionWarning", ge = ({
  contentRef: e,
  descriptionId: t
}) => {
  const s = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${G(fe).contentName}}.`;
  return i.useEffect(() => {
    var a;
    const r = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && r && (document.getElementById(t) || console.warn(s));
  }, [s, e, t]), null;
}, pe = P, me = O, xe = w, z = T, H = A, B = F, q = W, De = k;
const be = pe, Oe = me, ve = xe, V = i.forwardRef((_a, o) => {
  var _b = _a, {
    className: e
  } = _b, t = __objRest(_b, [
    "className"
  ]);
  return n.jsx(z, __spreadValues({
    ref: o,
    className: p("fixed inset-0 z-[60] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", e)
  }, t));
});
V.displayName = z.displayName;
const ye = i.forwardRef((_c, s) => {
  var _d = _c, {
    className: e,
    children: t
  } = _d, o = __objRest(_d, [
    "className",
    "children"
  ]);
  return n.jsxs(ve, {
    children: [n.jsx(V, {}), n.jsxs(H, __spreadProps(__spreadValues({
      ref: s,
      className: p("fixed left-[50%] top-[50%] z-[60] grid w-[calc(100%-2rem)] max-w-lg max-h-[90vh] translate-x-[-50%] translate-y-[-50%] gap-4 overflow-y-auto border bg-background p-4 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:p-6 sm:rounded-lg", e)
    }, o), {
      children: [t, n.jsxs(De, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        children: [n.jsx(ee, {
          className: "h-4 w-4"
        }), n.jsx("span", {
          className: "sr-only",
          children: "Close"
        })]
      })]
    }))]
  });
});
ye.displayName = H.displayName;
const Ne = (_e) => {
  var _f = _e, {
    className: e
  } = _f, t = __objRest(_f, [
    "className"
  ]);
  return n.jsx("div", __spreadValues({
    className: p("flex flex-col space-y-1.5 text-center sm:text-left", e)
  }, t));
};
Ne.displayName = "DialogHeader";
const he = (_g) => {
  var _h = _g, {
    className: e
  } = _h, t = __objRest(_h, [
    "className"
  ]);
  return n.jsx("div", __spreadValues({
    className: p("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e)
  }, t));
};
he.displayName = "DialogFooter";
const Ce = i.forwardRef((_i, o) => {
  var _j = _i, {
    className: e
  } = _j, t = __objRest(_j, [
    "className"
  ]);
  return n.jsx(B, __spreadValues({
    ref: o,
    className: p("text-lg font-semibold leading-none tracking-tight", e)
  }, t));
});
Ce.displayName = B.displayName;
const Re = i.forwardRef((_k, o) => {
  var _l = _k, {
    className: e
  } = _l, t = __objRest(_l, [
    "className"
  ]);
  return n.jsx(q, __spreadValues({
    ref: o,
    className: p("text-sm text-muted-foreground", e)
  }, t));
});
Re.displayName = q.displayName;
export {
  H as C,
  be as D,
  z as O,
  xe as P,
  pe as R,
  me as T,
  Pe as W,
  ye as a,
  Ne as b,
  Ce as c,
  Re as d,
  Oe as e,
  he as f,
  Ee as g,
  B as h,
  q as i,
  De as j
};
