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
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import {
  _ as St,
  n as Se,
  aA as Ie,
  r as s,
  j as t,
  aB as It,
  q as de,
  o as ne,
  p as C,
  aC as Et,
  aD as Dt,
  P as H,
  aE as Ee,
  aF as At,
  a4 as De,
  aG as Tt,
  aH as Ot,
  aI as kt,
  aJ as Ft,
  v as Lt,
  a0 as Pe,
  w as q,
  a as Ae,
  c as Gt,
  b as xe,
  X as Te,
  O as Kt,
  t as $t,
  aK as zt
} from "./index-DOfu0sXg.js";
import {
  u as Ut
} from "./index-D5alJfFq.js";
import {
  h as Qt,
  u as qt,
  F as Bt,
  R as Vt
} from "./Combination-C65a2kPq.js";
import {
  c as Oe,
  R as Yt,
  I as Xt
} from "./index-Czlrzsbg.js";
import {
  C as Ht
} from "./chevron-right-DkUlsPHD.js";
import {
  C as Wt
} from "./check-AkIa94Y-.js";
import {
  C as Jt,
  a as Zt,
  b as en
} from "./use-scheduled-delivery-QXJaYNqy.js";
import {
  f as ae
} from "./currency-cZDvJQzL.js";
import {
  M as fe
} from "./minus-zDmsn0vk.js";
import {
  P as pe
} from "./plus-xl2HqeIg.js";
import {
  S as _e
} from "./search-BFN4Wc19.js";
var he = ["Enter", " "], tn = ["ArrowDown", "PageUp", "Home"], ke = ["ArrowUp", "PageDown", "End"], nn = [...tn, ...ke], rn = {
  ltr: [...he, "ArrowRight"],
  rtl: [...he, "ArrowLeft"]
}, on = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, re = "Menu", [ee, sn, an] = St(re), [B, Fe] = Se(re, [an, Ie, Oe]), le = Ie(), Le = Oe(), [cn, V] = B(re), [dn, oe] = B(re), Ge = (e) => {
  const {
    __scopeMenu: r,
    open: n = false,
    children: o,
    dir: a,
    onOpenChange: d,
    modal: m = true
  } = e, f = le(r), [v, y] = s.useState(null), x = s.useRef(false), l = Ee(d), h = Ut(a);
  return s.useEffect(() => {
    const j = () => {
      x.current = true, document.addEventListener("pointerdown", M, {
        capture: true,
        once: true
      }), document.addEventListener("pointermove", M, {
        capture: true,
        once: true
      });
    }, M = () => x.current = false;
    return document.addEventListener("keydown", j, {
      capture: true
    }), () => {
      document.removeEventListener("keydown", j, {
        capture: true
      }), document.removeEventListener("pointerdown", M, {
        capture: true
      }), document.removeEventListener("pointermove", M, {
        capture: true
      });
    };
  }, []), t.jsx(Ot, __spreadProps(__spreadValues({}, f), {
    children: t.jsx(cn, {
      scope: r,
      open: n,
      onOpenChange: l,
      content: v,
      onContentChange: y,
      children: t.jsx(dn, {
        scope: r,
        onClose: s.useCallback(() => l(false), [l]),
        isUsingKeyboardRef: x,
        dir: h,
        modal: m,
        children: o
      })
    })
  }));
};
Ge.displayName = re;
var ln = "MenuAnchor", ge = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeMenu"
  ]), a = le(n);
  return t.jsx(It, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
ge.displayName = ln;
var ye = "MenuPortal", [un, Ke] = B(ye, {
  forceMount: void 0
}), $e = (e) => {
  const {
    __scopeMenu: r,
    forceMount: n,
    children: o,
    container: a
  } = e, d = V(ye, r);
  return t.jsx(un, {
    scope: r,
    forceMount: n,
    children: t.jsx(de, {
      present: n || d.open,
      children: t.jsx(kt, {
        asChild: true,
        container: a,
        children: o
      })
    })
  });
};
$e.displayName = ye;
var O = "MenuContent", [mn, ve] = B(O), ze = s.forwardRef((e, r) => {
  const n = Ke(O, e.__scopeMenu), _a = e, {
    forceMount: o = n.forceMount
  } = _a, a = __objRest(_a, [
    "forceMount"
  ]), d = V(O, e.__scopeMenu), m = oe(O, e.__scopeMenu);
  return t.jsx(ee.Provider, {
    scope: e.__scopeMenu,
    children: t.jsx(de, {
      present: o || d.open,
      children: t.jsx(ee.Slot, {
        scope: e.__scopeMenu,
        children: m.modal ? t.jsx(fn, __spreadProps(__spreadValues({}, a), {
          ref: r
        })) : t.jsx(pn, __spreadProps(__spreadValues({}, a), {
          ref: r
        }))
      })
    })
  });
}), fn = s.forwardRef((e, r) => {
  const n = V(O, e.__scopeMenu), o = s.useRef(null), a = ne(r, o);
  return s.useEffect(() => {
    const d = o.current;
    if (d) return Qt(d);
  }, []), t.jsx(be, __spreadProps(__spreadValues({}, e), {
    ref: a,
    trapFocus: n.open,
    disableOutsidePointerEvents: n.open,
    disableOutsideScroll: true,
    onFocusOutside: C(e.onFocusOutside, (d) => d.preventDefault(), {
      checkForDefaultPrevented: false
    }),
    onDismiss: () => n.onOpenChange(false)
  }));
}), pn = s.forwardRef((e, r) => {
  const n = V(O, e.__scopeMenu);
  return t.jsx(be, __spreadProps(__spreadValues({}, e), {
    ref: r,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    disableOutsideScroll: false,
    onDismiss: () => n.onOpenChange(false)
  }));
}), xn = Ft("MenuContent.ScrollLock"), be = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n,
    loop: o = false,
    trapFocus: a,
    onOpenAutoFocus: d,
    onCloseAutoFocus: m,
    disableOutsidePointerEvents: f,
    onEntryFocus: v,
    onEscapeKeyDown: y,
    onPointerDownOutside: x,
    onFocusOutside: l,
    onInteractOutside: h,
    onDismiss: j,
    disableOutsideScroll: M
  } = _a, k = __objRest(_a, [
    "__scopeMenu",
    "loop",
    "trapFocus",
    "onOpenAutoFocus",
    "onCloseAutoFocus",
    "disableOutsidePointerEvents",
    "onEntryFocus",
    "onEscapeKeyDown",
    "onPointerDownOutside",
    "onFocusOutside",
    "onInteractOutside",
    "onDismiss",
    "disableOutsideScroll"
  ]), R = V(O, n), F = oe(O, n), K = le(n), T = Le(n), U = sn(n), [p, _] = s.useState(null), E = s.useRef(null), Q = ne(r, E, R.onContentChange), $ = s.useRef(0), Y = s.useRef(""), se = s.useRef(0), W = s.useRef(null), X = s.useRef("right"), J = s.useRef(0), me = M ? Vt : s.Fragment, c = M ? {
    as: xn,
    allowPinchZoom: true
  } : void 0, g = (i) => {
    var S, z;
    const b = Y.current + i, w = U().filter((G) => !G.disabled), P = document.activeElement, L = (S = w.find((G) => G.ref.current === P)) == null ? void 0 : S.textValue, N = w.map((G) => G.textValue), D = _n(N, b, L), A = (z = w.find((G) => G.textValue === D)) == null ? void 0 : z.ref.current;
    (function G(je) {
      Y.current = je, window.clearTimeout($.current), je !== "" && ($.current = window.setTimeout(() => G(""), 1e3));
    })(b), A && setTimeout(() => A.focus());
  };
  s.useEffect(() => () => window.clearTimeout($.current), []), qt();
  const u = s.useCallback((i) => {
    var w, P;
    return X.current === ((w = W.current) == null ? void 0 : w.side) && Sn(i, (P = W.current) == null ? void 0 : P.area);
  }, []);
  return t.jsx(mn, {
    scope: n,
    searchRef: Y,
    onItemEnter: s.useCallback((i) => {
      u(i) && i.preventDefault();
    }, [u]),
    onItemLeave: s.useCallback((i) => {
      var b;
      u(i) || ((b = E.current) == null || b.focus(), _(null));
    }, [u]),
    onTriggerLeave: s.useCallback((i) => {
      u(i) && i.preventDefault();
    }, [u]),
    pointerGraceTimerRef: se,
    onPointerGraceIntentChange: s.useCallback((i) => {
      W.current = i;
    }, []),
    children: t.jsx(me, __spreadProps(__spreadValues({}, c), {
      children: t.jsx(Bt, {
        asChild: true,
        trapped: a,
        onMountAutoFocus: C(d, (i) => {
          var b;
          i.preventDefault(), (b = E.current) == null || b.focus({
            preventScroll: true
          });
        }),
        onUnmountAutoFocus: m,
        children: t.jsx(Et, {
          asChild: true,
          disableOutsidePointerEvents: f,
          onEscapeKeyDown: y,
          onPointerDownOutside: x,
          onFocusOutside: l,
          onInteractOutside: h,
          onDismiss: j,
          children: t.jsx(Yt, __spreadProps(__spreadValues({
            asChild: true
          }, T), {
            dir: F.dir,
            orientation: "vertical",
            loop: o,
            currentTabStopId: p,
            onCurrentTabStopIdChange: _,
            onEntryFocus: C(v, (i) => {
              F.isUsingKeyboardRef.current || i.preventDefault();
            }),
            preventScrollOnEntryFocus: true,
            children: t.jsx(Dt, __spreadProps(__spreadValues(__spreadValues({
              role: "menu",
              "aria-orientation": "vertical",
              "data-state": ot(R.open),
              "data-radix-menu-content": "",
              dir: F.dir
            }, K), k), {
              ref: Q,
              style: __spreadValues({
                outline: "none"
              }, k.style),
              onKeyDown: C(k.onKeyDown, (i) => {
                const w = i.target.closest("[data-radix-menu-content]") === i.currentTarget, P = i.ctrlKey || i.altKey || i.metaKey, L = i.key.length === 1;
                w && (i.key === "Tab" && i.preventDefault(), !P && L && g(i.key));
                const N = E.current;
                if (i.target !== N || !nn.includes(i.key)) return;
                i.preventDefault();
                const A = U().filter((S) => !S.disabled).map((S) => S.ref.current);
                ke.includes(i.key) && A.reverse(), jn(A);
              }),
              onBlur: C(e.onBlur, (i) => {
                i.currentTarget.contains(i.target) || (window.clearTimeout($.current), Y.current = "");
              }),
              onPointerMove: C(e.onPointerMove, te((i) => {
                const b = i.target, w = J.current !== i.clientX;
                if (i.currentTarget.contains(b) && w) {
                  const P = i.clientX > J.current ? "right" : "left";
                  X.current = P, J.current = i.clientX;
                }
              }))
            }))
          }))
        })
      })
    }))
  });
});
ze.displayName = O;
var hn = "MenuGroup", we = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeMenu"
  ]);
  return t.jsx(H.div, __spreadProps(__spreadValues({
    role: "group"
  }, o), {
    ref: r
  }));
});
we.displayName = hn;
var gn = "MenuLabel", Ue = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeMenu"
  ]);
  return t.jsx(H.div, __spreadProps(__spreadValues({}, o), {
    ref: r
  }));
});
Ue.displayName = gn;
var ie = "MenuItem", Re = "menu.itemSelect", ue = s.forwardRef((e, r) => {
  const _a = e, {
    disabled: n = false,
    onSelect: o
  } = _a, a = __objRest(_a, [
    "disabled",
    "onSelect"
  ]), d = s.useRef(null), m = oe(ie, e.__scopeMenu), f = ve(ie, e.__scopeMenu), v = ne(r, d), y = s.useRef(false), x = () => {
    const l = d.current;
    if (!n && l) {
      const h = new CustomEvent(Re, {
        bubbles: true,
        cancelable: true
      });
      l.addEventListener(Re, (j) => o == null ? void 0 : o(j), {
        once: true
      }), Tt(l, h), h.defaultPrevented ? y.current = false : m.onClose();
    }
  };
  return t.jsx(Qe, __spreadProps(__spreadValues({}, a), {
    ref: v,
    disabled: n,
    onClick: C(e.onClick, x),
    onPointerDown: (l) => {
      var h;
      (h = e.onPointerDown) == null || h.call(e, l), y.current = true;
    },
    onPointerUp: C(e.onPointerUp, (l) => {
      var h;
      y.current || (h = l.currentTarget) == null || h.click();
    }),
    onKeyDown: C(e.onKeyDown, (l) => {
      const h = f.searchRef.current !== "";
      n || h && l.key === " " || he.includes(l.key) && (l.currentTarget.click(), l.preventDefault());
    })
  }));
});
ue.displayName = ie;
var Qe = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n,
    disabled: o = false,
    textValue: a
  } = _a, d = __objRest(_a, [
    "__scopeMenu",
    "disabled",
    "textValue"
  ]), m = ve(ie, n), f = Le(n), v = s.useRef(null), y = ne(r, v), [x, l] = s.useState(false), [h, j] = s.useState("");
  return s.useEffect(() => {
    var _a2;
    const M = v.current;
    M && j(((_a2 = M.textContent) != null ? _a2 : "").trim());
  }, [d.children]), t.jsx(ee.ItemSlot, {
    scope: n,
    disabled: o,
    textValue: a != null ? a : h,
    children: t.jsx(Xt, __spreadProps(__spreadValues({
      asChild: true
    }, f), {
      focusable: !o,
      children: t.jsx(H.div, __spreadProps(__spreadValues({
        role: "menuitem",
        "data-highlighted": x ? "" : void 0,
        "aria-disabled": o || void 0,
        "data-disabled": o ? "" : void 0
      }, d), {
        ref: y,
        onPointerMove: C(e.onPointerMove, te((M) => {
          o ? m.onItemLeave(M) : (m.onItemEnter(M), M.defaultPrevented || M.currentTarget.focus({
            preventScroll: true
          }));
        })),
        onPointerLeave: C(e.onPointerLeave, te((M) => m.onItemLeave(M))),
        onFocus: C(e.onFocus, () => l(true)),
        onBlur: C(e.onBlur, () => l(false))
      }))
    }))
  });
}), yn = "MenuCheckboxItem", qe = s.forwardRef((e, r) => {
  const _a = e, {
    checked: n = false,
    onCheckedChange: o
  } = _a, a = __objRest(_a, [
    "checked",
    "onCheckedChange"
  ]);
  return t.jsx(He, {
    scope: e.__scopeMenu,
    checked: n,
    children: t.jsx(ue, __spreadProps(__spreadValues({
      role: "menuitemcheckbox",
      "aria-checked": ce(n) ? "mixed" : n
    }, a), {
      ref: r,
      "data-state": Me(n),
      onSelect: C(a.onSelect, () => o == null ? void 0 : o(ce(n) ? true : !n), {
        checkForDefaultPrevented: false
      })
    }))
  });
});
qe.displayName = yn;
var Be = "MenuRadioGroup", [vn, bn] = B(Be, {
  value: void 0,
  onValueChange: () => {
  }
}), Ve = s.forwardRef((e, r) => {
  const _a = e, {
    value: n,
    onValueChange: o
  } = _a, a = __objRest(_a, [
    "value",
    "onValueChange"
  ]), d = Ee(o);
  return t.jsx(vn, {
    scope: e.__scopeMenu,
    value: n,
    onValueChange: d,
    children: t.jsx(we, __spreadProps(__spreadValues({}, a), {
      ref: r
    }))
  });
});
Ve.displayName = Be;
var Ye = "MenuRadioItem", Xe = s.forwardRef((e, r) => {
  const _a = e, {
    value: n
  } = _a, o = __objRest(_a, [
    "value"
  ]), a = bn(Ye, e.__scopeMenu), d = n === a.value;
  return t.jsx(He, {
    scope: e.__scopeMenu,
    checked: d,
    children: t.jsx(ue, __spreadProps(__spreadValues({
      role: "menuitemradio",
      "aria-checked": d
    }, o), {
      ref: r,
      "data-state": Me(d),
      onSelect: C(o.onSelect, () => {
        var m;
        return (m = a.onValueChange) == null ? void 0 : m.call(a, n);
      }, {
        checkForDefaultPrevented: false
      })
    }))
  });
});
Xe.displayName = Ye;
var Ne = "MenuItemIndicator", [He, wn] = B(Ne, {
  checked: false
}), We = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n,
    forceMount: o
  } = _a, a = __objRest(_a, [
    "__scopeMenu",
    "forceMount"
  ]), d = wn(Ne, n);
  return t.jsx(de, {
    present: o || ce(d.checked) || d.checked === true,
    children: t.jsx(H.span, __spreadProps(__spreadValues({}, a), {
      ref: r,
      "data-state": Me(d.checked)
    }))
  });
});
We.displayName = Ne;
var Nn = "MenuSeparator", Je = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeMenu"
  ]);
  return t.jsx(H.div, __spreadProps(__spreadValues({
    role: "separator",
    "aria-orientation": "horizontal"
  }, o), {
    ref: r
  }));
});
Je.displayName = Nn;
var Mn = "MenuArrow", Ze = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeMenu"
  ]), a = le(n);
  return t.jsx(At, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
Ze.displayName = Mn;
var Cn = "MenuSub", [Er, et] = B(Cn), Z = "MenuSubTrigger", tt = s.forwardRef((e, r) => {
  const n = V(Z, e.__scopeMenu), o = oe(Z, e.__scopeMenu), a = et(Z, e.__scopeMenu), d = ve(Z, e.__scopeMenu), m = s.useRef(null), {
    pointerGraceTimerRef: f,
    onPointerGraceIntentChange: v
  } = d, y = {
    __scopeMenu: e.__scopeMenu
  }, x = s.useCallback(() => {
    m.current && window.clearTimeout(m.current), m.current = null;
  }, []);
  return s.useEffect(() => x, [x]), s.useEffect(() => {
    const l = f.current;
    return () => {
      window.clearTimeout(l), v(null);
    };
  }, [f, v]), t.jsx(ge, __spreadProps(__spreadValues({
    asChild: true
  }, y), {
    children: t.jsx(Qe, __spreadProps(__spreadValues({
      id: a.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": n.open,
      "aria-controls": a.contentId,
      "data-state": ot(n.open)
    }, e), {
      ref: De(r, a.onTriggerChange),
      onClick: (l) => {
        var h;
        (h = e.onClick) == null || h.call(e, l), !(e.disabled || l.defaultPrevented) && (l.currentTarget.focus(), n.open || n.onOpenChange(true));
      },
      onPointerMove: C(e.onPointerMove, te((l) => {
        d.onItemEnter(l), !l.defaultPrevented && !e.disabled && !n.open && !m.current && (d.onPointerGraceIntentChange(null), m.current = window.setTimeout(() => {
          n.onOpenChange(true), x();
        }, 100));
      })),
      onPointerLeave: C(e.onPointerLeave, te((l) => {
        var j, M;
        x();
        const h = (j = n.content) == null ? void 0 : j.getBoundingClientRect();
        if (h) {
          const k = (M = n.content) == null ? void 0 : M.dataset.side, R = k === "right", F = R ? -5 : 5, K = h[R ? "left" : "right"], T = h[R ? "right" : "left"];
          d.onPointerGraceIntentChange({
            area: [{
              x: l.clientX + F,
              y: l.clientY
            }, {
              x: K,
              y: h.top
            }, {
              x: T,
              y: h.top
            }, {
              x: T,
              y: h.bottom
            }, {
              x: K,
              y: h.bottom
            }],
            side: k
          }), window.clearTimeout(f.current), f.current = window.setTimeout(() => d.onPointerGraceIntentChange(null), 300);
        } else {
          if (d.onTriggerLeave(l), l.defaultPrevented) return;
          d.onPointerGraceIntentChange(null);
        }
      })),
      onKeyDown: C(e.onKeyDown, (l) => {
        var j;
        const h = d.searchRef.current !== "";
        e.disabled || h && l.key === " " || rn[o.dir].includes(l.key) && (n.onOpenChange(true), (j = n.content) == null || j.focus(), l.preventDefault());
      })
    }))
  }));
});
tt.displayName = Z;
var nt = "MenuSubContent", rt = s.forwardRef((e, r) => {
  const n = Ke(O, e.__scopeMenu), _a = e, {
    forceMount: o = n.forceMount
  } = _a, a = __objRest(_a, [
    "forceMount"
  ]), d = V(O, e.__scopeMenu), m = oe(O, e.__scopeMenu), f = et(nt, e.__scopeMenu), v = s.useRef(null), y = ne(r, v);
  return t.jsx(ee.Provider, {
    scope: e.__scopeMenu,
    children: t.jsx(de, {
      present: o || d.open,
      children: t.jsx(ee.Slot, {
        scope: e.__scopeMenu,
        children: t.jsx(be, __spreadProps(__spreadValues({
          id: f.contentId,
          "aria-labelledby": f.triggerId
        }, a), {
          ref: y,
          align: "start",
          side: m.dir === "rtl" ? "left" : "right",
          disableOutsidePointerEvents: false,
          disableOutsideScroll: false,
          trapFocus: false,
          onOpenAutoFocus: (x) => {
            var l;
            m.isUsingKeyboardRef.current && ((l = v.current) == null || l.focus()), x.preventDefault();
          },
          onCloseAutoFocus: (x) => x.preventDefault(),
          onFocusOutside: C(e.onFocusOutside, (x) => {
            x.target !== f.trigger && d.onOpenChange(false);
          }),
          onEscapeKeyDown: C(e.onEscapeKeyDown, (x) => {
            m.onClose(), x.preventDefault();
          }),
          onKeyDown: C(e.onKeyDown, (x) => {
            var j;
            const l = x.currentTarget.contains(x.target), h = on[m.dir].includes(x.key);
            l && h && (d.onOpenChange(false), (j = f.trigger) == null || j.focus(), x.preventDefault());
          })
        }))
      })
    })
  });
});
rt.displayName = nt;
function ot(e) {
  return e ? "open" : "closed";
}
function ce(e) {
  return e === "indeterminate";
}
function Me(e) {
  return ce(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function jn(e) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus(), document.activeElement !== r)) return;
}
function Pn(e, r) {
  return e.map((n, o) => e[(r + o) % e.length]);
}
function _n(e, r, n) {
  const a = r.length > 1 && Array.from(r).every((y) => y === r[0]) ? r[0] : r, d = n ? e.indexOf(n) : -1;
  let m = Pn(e, Math.max(d, 0));
  a.length === 1 && (m = m.filter((y) => y !== n));
  const v = m.find((y) => y.toLowerCase().startsWith(a.toLowerCase()));
  return v !== n ? v : void 0;
}
function Rn(e, r) {
  const {
    x: n,
    y: o
  } = e;
  let a = false;
  for (let d = 0, m = r.length - 1; d < r.length; m = d++) {
    const f = r[d].x, v = r[d].y, y = r[m].x, x = r[m].y;
    v > o != x > o && n < (y - f) * (o - v) / (x - v) + f && (a = !a);
  }
  return a;
}
function Sn(e, r) {
  if (!r) return false;
  const n = {
    x: e.clientX,
    y: e.clientY
  };
  return Rn(n, r);
}
function te(e) {
  return (r) => r.pointerType === "mouse" ? e(r) : void 0;
}
var In = Ge, En = ge, Dn = $e, An = ze, Tn = we, On = Ue, kn = ue, Fn = qe, Ln = Ve, Gn = Xe, Kn = We, $n = Je, zn = Ze, Un = tt, Qn = rt, Ce = "DropdownMenu", [qn, Dr] = Se(Ce, [Fe]), I = Fe(), [Bn, st] = qn(Ce), at = (e) => {
  const {
    __scopeDropdownMenu: r,
    children: n,
    dir: o,
    open: a,
    defaultOpen: d,
    onOpenChange: m,
    modal: f = true
  } = e, v = I(r), y = s.useRef(null), [x = false, l] = Lt({
    prop: a,
    defaultProp: d,
    onChange: m
  });
  return t.jsx(Bn, {
    scope: r,
    triggerId: Pe(),
    triggerRef: y,
    contentId: Pe(),
    open: x,
    onOpenChange: l,
    onOpenToggle: s.useCallback(() => l((h) => !h), [l]),
    modal: f,
    children: t.jsx(In, __spreadProps(__spreadValues({}, v), {
      open: x,
      onOpenChange: l,
      dir: o,
      modal: f,
      children: n
    }))
  });
};
at.displayName = Ce;
var it = "DropdownMenuTrigger", ct = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n,
    disabled: o = false
  } = _a, a = __objRest(_a, [
    "__scopeDropdownMenu",
    "disabled"
  ]), d = st(it, n), m = I(n);
  return t.jsx(En, __spreadProps(__spreadValues({
    asChild: true
  }, m), {
    children: t.jsx(H.button, __spreadProps(__spreadValues({
      type: "button",
      id: d.triggerId,
      "aria-haspopup": "menu",
      "aria-expanded": d.open,
      "aria-controls": d.open ? d.contentId : void 0,
      "data-state": d.open ? "open" : "closed",
      "data-disabled": o ? "" : void 0,
      disabled: o
    }, a), {
      ref: De(r, d.triggerRef),
      onPointerDown: C(e.onPointerDown, (f) => {
        !o && f.button === 0 && f.ctrlKey === false && (d.onOpenToggle(), d.open || f.preventDefault());
      }),
      onKeyDown: C(e.onKeyDown, (f) => {
        o || (["Enter", " "].includes(f.key) && d.onOpenToggle(), f.key === "ArrowDown" && d.onOpenChange(true), ["Enter", " ", "ArrowDown"].includes(f.key) && f.preventDefault());
      })
    }))
  }));
});
ct.displayName = it;
var Vn = "DropdownMenuPortal", dt = (e) => {
  const _a = e, {
    __scopeDropdownMenu: r
  } = _a, n = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), o = I(r);
  return t.jsx(Dn, __spreadValues(__spreadValues({}, o), n));
};
dt.displayName = Vn;
var lt = "DropdownMenuContent", ut = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = st(lt, n), d = I(n), m = s.useRef(false);
  return t.jsx(An, __spreadProps(__spreadValues(__spreadValues({
    id: a.contentId,
    "aria-labelledby": a.triggerId
  }, d), o), {
    ref: r,
    onCloseAutoFocus: C(e.onCloseAutoFocus, (f) => {
      var v;
      m.current || (v = a.triggerRef.current) == null || v.focus(), m.current = false, f.preventDefault();
    }),
    onInteractOutside: C(e.onInteractOutside, (f) => {
      const v = f.detail.originalEvent, y = v.button === 0 && v.ctrlKey === true, x = v.button === 2 || y;
      (!a.modal || x) && (m.current = true);
    }),
    style: __spreadProps(__spreadValues({}, e.style), {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }));
});
ut.displayName = lt;
var Yn = "DropdownMenuGroup", Xn = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Tn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
Xn.displayName = Yn;
var Hn = "DropdownMenuLabel", mt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(On, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
mt.displayName = Hn;
var Wn = "DropdownMenuItem", ft = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(kn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
ft.displayName = Wn;
var Jn = "DropdownMenuCheckboxItem", pt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Fn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
pt.displayName = Jn;
var Zn = "DropdownMenuRadioGroup", er = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Ln, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
er.displayName = Zn;
var tr = "DropdownMenuRadioItem", xt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Gn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
xt.displayName = tr;
var nr = "DropdownMenuItemIndicator", ht = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Kn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
ht.displayName = nr;
var rr = "DropdownMenuSeparator", gt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx($n, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
gt.displayName = rr;
var or = "DropdownMenuArrow", sr = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(zn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
sr.displayName = or;
var ar = "DropdownMenuSubTrigger", yt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Un, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r
  }));
});
yt.displayName = ar;
var ir = "DropdownMenuSubContent", vt = s.forwardRef((e, r) => {
  const _a = e, {
    __scopeDropdownMenu: n
  } = _a, o = __objRest(_a, [
    "__scopeDropdownMenu"
  ]), a = I(n);
  return t.jsx(Qn, __spreadProps(__spreadValues(__spreadValues({}, a), o), {
    ref: r,
    style: __spreadProps(__spreadValues({}, e.style), {
      "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
      "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
      "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
    })
  }));
});
vt.displayName = ir;
var cr = at, dr = ct, lr = dt, bt = ut, wt = mt, Nt = ft, Mt = pt, Ct = xt, jt = ht, Pt = gt, _t = yt, Rt = vt;
const Ar = cr, Tr = dr, ur = s.forwardRef((_a, a) => {
  var _b = _a, {
    className: e,
    inset: r,
    children: n
  } = _b, o = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return t.jsxs(_t, __spreadProps(__spreadValues({
    ref: a,
    className: q("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r && "pl-8", e)
  }, o), {
    children: [n, t.jsx(Ht, {
      className: "ml-auto"
    })]
  }));
});
ur.displayName = _t.displayName;
const mr = s.forwardRef((_c, n) => {
  var _d = _c, {
    className: e
  } = _d, r = __objRest(_d, [
    "className"
  ]);
  return t.jsx(Rt, __spreadValues({
    ref: n,
    className: q("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", e)
  }, r));
});
mr.displayName = Rt.displayName;
const fr = s.forwardRef((_e2, o) => {
  var _f = _e2, {
    className: e,
    sideOffset: r = 4
  } = _f, n = __objRest(_f, [
    "className",
    "sideOffset"
  ]);
  return t.jsx(lr, {
    children: t.jsx(bt, __spreadValues({
      ref: o,
      sideOffset: r,
      className: q("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-dropdown-menu-content-transform-origin]", e)
    }, n))
  });
});
fr.displayName = bt.displayName;
const pr = s.forwardRef((_g, o) => {
  var _h = _g, {
    className: e,
    inset: r
  } = _h, n = __objRest(_h, [
    "className",
    "inset"
  ]);
  return t.jsx(Nt, __spreadValues({
    ref: o,
    className: q("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r && "pl-8", e)
  }, n));
});
pr.displayName = Nt.displayName;
const xr = s.forwardRef((_i, a) => {
  var _j = _i, {
    className: e,
    children: r,
    checked: n
  } = _j, o = __objRest(_j, [
    "className",
    "children",
    "checked"
  ]);
  return t.jsxs(Mt, __spreadProps(__spreadValues({
    ref: a,
    className: q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: n
  }, o), {
    children: [t.jsx("span", {
      className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children: t.jsx(jt, {
        children: t.jsx(Wt, {
          className: "h-4 w-4"
        })
      })
    }), r]
  }));
});
xr.displayName = Mt.displayName;
const hr = s.forwardRef((_k, o) => {
  var _l = _k, {
    className: e,
    children: r
  } = _l, n = __objRest(_l, [
    "className",
    "children"
  ]);
  return t.jsxs(Ct, __spreadProps(__spreadValues({
    ref: o,
    className: q("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e)
  }, n), {
    children: [t.jsx("span", {
      className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
      children: t.jsx(jt, {
        children: t.jsx(Jt, {
          className: "h-2 w-2 fill-current"
        })
      })
    }), r]
  }));
});
hr.displayName = Ct.displayName;
const gr = s.forwardRef((_m, o) => {
  var _n2 = _m, {
    className: e,
    inset: r
  } = _n2, n = __objRest(_n2, [
    "className",
    "inset"
  ]);
  return t.jsx(wt, __spreadValues({
    ref: o,
    className: q("px-2 py-1.5 text-sm font-semibold", r && "pl-8", e)
  }, n));
});
gr.displayName = wt.displayName;
const yr = s.forwardRef((_o, n) => {
  var _p = _o, {
    className: e
  } = _p, r = __objRest(_p, [
    "className"
  ]);
  return t.jsx(Pt, __spreadValues({
    ref: n,
    className: q("-mx-1 my-1 h-px bg-muted", e)
  }, r));
});
yr.displayName = Pt.displayName;
const vr = ({
  product: e,
  isOpen: r,
  onClose: n,
  onCustomizationsLoad: o,
  onRequestSchedule: a
}) => {
  const {
    addItem: d
  } = Zt(), {
    data: m
  } = Ae(), {
    scheduledDelivery: f
  } = en(), {
    toast: v
  } = Gt(), [y, x] = s.useState(1), [l, h] = s.useState({}), [j, M] = s.useState({});
  m != null && m.colorScheme;
  const k = (m == null ? void 0 : m.buttonColor) || "#FFFFFF", {
    data: R = [],
    isLoading: F
  } = xe({
    queryKey: ["/api/products", e.id, "customizations", e.outletId],
    queryFn: () => __async(null, null, function* () {
      if (!e.id || !e.outletId) return [];
      const c = yield fetch(`/api/products/${e.id}/customizations?outletId=${e.outletId}`);
      if (!c.ok) throw new Error("Failed to fetch customizations");
      return c.json();
    }),
    enabled: !!e.id && !!e.outletId,
    staleTime: 0,
    gcTime: 5 * 60 * 1e3,
    refetchOnMount: true,
    refetchOnWindowFocus: true
  }), {
    data: K
  } = xe({
    queryKey: ["/api/products", e.id, "details", e.outletId],
    queryFn: () => __async(null, null, function* () {
      if (!e.id) return null;
      const c = new URLSearchParams();
      e.outletId && c.set("outletId", String(e.outletId));
      const g = yield fetch(`/api/products/${e.id}${c.toString() ? `?${c.toString()}` : ""}`);
      if (!g.ok) throw new Error("Failed to fetch product details");
      return g.json();
    }),
    enabled: !!e.id && r,
    staleTime: 6e4,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  }), T = ((K == null ? void 0 : K.addons) || (e == null ? void 0 : e.addons) || []).filter(Boolean);
  s.useEffect(() => {
    r && (x(1), h({}), M({}));
  }, [r, e.id]), s.useEffect(() => {
    if (r) {
      const c = window.scrollY;
      return document.body.style.position = "fixed", document.body.style.top = `-${c}px`, document.body.style.width = "100%", document.body.style.overflow = "hidden", () => {
        document.body.style.position = "", document.body.style.top = "", document.body.style.width = "", document.body.style.overflow = "", window.scrollTo(0, c);
      };
    }
  }, [r]), s.useEffect(() => {
    R.length > 0 && r && o(__spreadProps(__spreadValues({}, e), {
      customizationGroups: R
    }));
  }, [R, e, o, r]);
  const U = (c) => {
    const g = l[c] || {};
    return Object.values(g).reduce((u, i) => u + i, 0);
  }, p = (c, g) => {
    var u;
    return ((u = l[c]) == null ? void 0 : u[g]) || 0;
  }, _ = (c, g, u) => {
    h((i) => {
      const b = i[c] || {}, w = b[g] || 0;
      return U(c) >= u ? i : __spreadProps(__spreadValues({}, i), {
        [c]: __spreadProps(__spreadValues({}, b), {
          [g]: w + 1
        })
      });
    });
  }, E = (c, g) => {
    h((u) => {
      const i = u[c] || {}, b = i[g] || 0;
      if (b <= 0) return u;
      const w = b - 1;
      if (w === 0) {
        const _a = i, {
          [g]: P
        } = _a, L = __objRest(_a, [
          __restKey(g)
        ]);
        return __spreadProps(__spreadValues({}, u), {
          [c]: L
        });
      }
      return __spreadProps(__spreadValues({}, u), {
        [c]: __spreadProps(__spreadValues({}, i), {
          [g]: w
        })
      });
    });
  }, Q = (c) => j[c] || 0, $ = (c) => {
    const g = Number(c.addonProductId || c.addonId || c.id);
    if (!Number.isFinite(g)) return;
    const u = Number(c.maxQuantity || 1);
    M((i) => {
      const b = i[g] || 0;
      return b >= u ? i : __spreadProps(__spreadValues({}, i), {
        [g]: b + 1
      });
    });
  }, Y = (c) => {
    const g = Number(c.addonProductId || c.addonId || c.id);
    Number.isFinite(g) && M((u) => {
      const i = u[g] || 0;
      if (i <= 0) return u;
      const b = i - 1;
      if (b === 0) {
        const _a = u, {
          [g]: w
        } = _a, P = __objRest(_a, [
          __restKey(g)
        ]);
        return P;
      }
      return __spreadProps(__spreadValues({}, u), {
        [g]: b
      });
    });
  }, se = () => {
    let c = 0;
    return T.forEach((g) => {
      var w;
      const u = Number(g.addonProductId || g.addonId || g.id);
      if (!Number.isFinite(u)) return;
      const i = j[u] || 0;
      if (i <= 0) return;
      const b = Number(((w = g.addonProduct) == null ? void 0 : w.basePrice) || g.price || 0);
      c += b * i;
    }), c;
  }, W = () => {
    let c = Number(e.basePrice || 0) * y;
    return R.forEach((g) => {
      const u = l[g.id] || {};
      Object.entries(u).forEach(([i, b]) => {
        const w = g.options.find((P) => P.id === parseInt(i));
        w && w.extraPrice && (c += parseFloat(w.extraPrice) * b);
      });
    }), c += se(), c;
  }, X = () => F ? false : R.length === 0 ? true : R.every((u) => {
    if (!u.isRequired) return true;
    const i = l[u.id] || {};
    return Object.values(i).reduce((w, P) => w + P, 0) > 0;
  }) ? T.every((u) => {
    if (!u.isRequired) return true;
    const i = Number(u.addonProductId || u.addonId || u.id);
    return Number.isFinite(i) ? (j[i] || 0) > 0 : true;
  }) : false, J = () => {
    if (!X()) {
      console.log("Cannot add to cart - missing required selections");
      return;
    }
    const c = R.flatMap((N) => {
      const D = l[N.id] || {};
      return Object.entries(D).map(([A, S]) => {
        const z = N.options.find((G) => G.id === parseInt(A));
        return {
          groupId: N.id,
          groupName: N.name,
          optionId: z.id,
          optionName: z.name,
          priceModifier: parseFloat(z.extraPrice || "0"),
          quantity: S
        };
      });
    }), g = se(), u = c.reduce((N, D) => N + D.priceModifier * (D.quantity || 1), 0), i = Number(e.basePrice || 0), b = T.map((N) => {
      var S, z;
      const D = Number(N.addonProductId || N.addonId || N.id);
      if (!Number.isFinite(D)) return null;
      const A = j[D] || 0;
      return A <= 0 ? null : {
        addonId: D,
        addonName: String(((S = N.addonProduct) == null ? void 0 : S.name) || N.addonName || N.name || "Add-on"),
        quantity: A,
        price: Number(((z = N.addonProduct) == null ? void 0 : z.basePrice) || N.price || 0)
      };
    }).filter((N) => N !== null), w = {
      id: Date.now(),
      productId: e.id,
      name: e.name,
      imageUrl: e.imageUrl || e.image || "",
      unitPrice: i,
      quantity: y,
      totalPrice: i * y + u + g,
      customizations: c,
      addons: b,
      specialInstructions: "",
      isGiftBox: e.isGiftBox,
      orderAvailabilityMode: e.effectiveOrderAvailabilityMode || "both",
      preorderLeadTimeHours: e.preorderLeadTimeHours || null,
      product: __spreadProps(__spreadValues({}, e), {
        basePrice: e.basePrice,
        isGiftBox: e.isGiftBox
      })
    };
    if (e.effectiveOrderAvailabilityMode === "preorder_only" && !f) {
      a && (a(w), n());
      return;
    }
    const L = d(w);
    if (!L.success) {
      v({
        title: "Cannot add item",
        description: L.error,
        variant: "destructive"
      });
      return;
    }
    try {
      $t({
        id: e.id,
        name: e.name,
        price: e.basePrice,
        description: e.description,
        category: {
          name: "Food"
        }
      }, y, c);
    } catch (N) {
      console.warn("Google Analytics AddToCart tracking failed:", N);
    }
    try {
      zt({
        productId: e.id,
        productName: e.name,
        price: e.basePrice.toString(),
        quantity: y
      });
    } catch (N) {
      console.warn("Twitter AddToCart tracking failed:", N);
    }
    console.log("Item added to cart successfully, closing modal"), n();
  };
  if (!r) return null;
  const me = t.jsxs(t.Fragment, {
    children: [t.jsx("div", {
      className: "fixed inset-0 bg-black/70 backdrop-blur-sm",
      style: {
        zIndex: 9998
      },
      onClick: n,
      "aria-hidden": "true"
    }), t.jsx("div", {
      className: "fixed inset-0 flex items-end sm:items-center justify-center pointer-events-none",
      style: {
        zIndex: 9999
      },
      children: t.jsxs("div", {
        className: "relative bg-white w-full sm:max-w-lg sm:rounded-t-xl sm:rounded-b-xl max-h-[90vh] flex flex-col shadow-2xl pointer-events-auto overflow-hidden",
        onClick: (c) => c.stopPropagation(),
        children: [t.jsxs("div", {
          className: "sticky top-0 z-10 flex items-center justify-between p-4 border-b flex-shrink-0 bg-white",
          children: [t.jsx("h2", {
            className: "text-xl font-bold text-gray-900 pr-2",
            children: e.name
          }), t.jsx("button", {
            onClick: n,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0",
            "data-testid": "button-close-customization-modal",
            "aria-label": "Close",
            children: t.jsx(Te, {
              className: "h-5 w-5"
            })
          })]
        }), t.jsxs("div", {
          className: "flex-1 overflow-y-auto p-4",
          children: [e.description && t.jsx("p", {
            className: "text-gray-600 mb-6",
            children: e.description
          }), F ? t.jsxs("div", {
            className: "text-center py-8",
            children: [t.jsx("div", {
              className: "animate-spin rounded-full h-8 w-8 border-b-2 border-#F02819 mx-auto"
            }), t.jsx("p", {
              className: "text-gray-500 mt-2",
              children: "Loading options..."
            })]
          }) : R.length === 0 ? t.jsx("div", {
            className: "text-center py-6",
            children: t.jsx("p", {
              className: "text-gray-600 mb-4",
              children: "Ready to order! Choose your quantity below."
            })
          }) : R.map((c) => {
            const g = U(c.id);
            return t.jsxs("div", {
              className: "mb-6",
              children: [t.jsxs("div", {
                className: "mb-4",
                children: [t.jsx("h3", {
                  className: "text-lg font-semibold text-gray-900",
                  children: c.name
                }), t.jsxs("p", {
                  className: "text-sm text-gray-500",
                  children: [c.isRequired ? "Required" : "Optional", " - Select up to ", c.maxSelections, " item(s)", g > 0 && t.jsxs("span", {
                    className: "ml-2 text-[#F02819] font-medium",
                    children: ["(", g, " selected)"]
                  })]
                })]
              }), t.jsx("div", {
                className: "space-y-3",
                children: c.options.map((u) => {
                  const i = p(c.id, u.id), w = U(c.id) < c.maxSelections;
                  return t.jsxs("div", {
                    className: "flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                    children: [t.jsx("div", {
                      className: "flex-1",
                      children: t.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [t.jsxs("div", {
                          children: [t.jsx("span", {
                            className: "font-medium text-gray-900",
                            children: u.name
                          }), u.description && t.jsx("p", {
                            className: "text-sm text-gray-500",
                            children: u.description
                          })]
                        }), u.extraPrice && parseFloat(u.extraPrice) > 0 && t.jsxs("span", {
                          className: "text-sm font-medium text-[#F02819] mr-3",
                          children: ["+", ae(u.extraPrice)]
                        })]
                      })
                    }), t.jsxs("div", {
                      className: "flex items-center space-x-2 ml-3",
                      children: [t.jsx("button", {
                        onClick: (P) => {
                          P.stopPropagation(), E(c.id, u.id);
                        },
                        disabled: i === 0,
                        className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${i === 0 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`,
                        children: t.jsx(fe, {
                          className: "h-3 w-3"
                        })
                      }), t.jsx("span", {
                        className: "text-base font-semibold w-6 text-center",
                        children: i
                      }), t.jsx("button", {
                        onClick: (P) => {
                          P.stopPropagation(), _(c.id, u.id, c.maxSelections);
                        },
                        disabled: !w,
                        className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${w ? "border-gray-300 text-gray-700 hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-not-allowed"}`,
                        children: t.jsx(pe, {
                          className: "h-3 w-3"
                        })
                      })]
                    })]
                  }, u.id);
                })
              })]
            }, c.id);
          }), T.length > 0 && t.jsxs("div", {
            className: "mt-6",
            children: [t.jsxs("div", {
              className: "mb-4",
              children: [t.jsx("h3", {
                className: "text-lg font-semibold text-gray-900",
                children: "Add-ons"
              }), t.jsx("p", {
                className: "text-sm text-gray-500",
                children: "Select optional extras for this item"
              })]
            }), t.jsx("div", {
              className: "space-y-3",
              children: T.map((c) => {
                var N, D, A;
                const g = Number(c.addonProductId || c.addonId || c.id);
                if (!Number.isFinite(g)) return null;
                const u = Q(g), i = Number(c.maxQuantity || 1), b = u < i, w = String(((N = c.addonProduct) == null ? void 0 : N.name) || c.addonName || c.name || "Add-on"), P = (D = c.addonProduct) == null ? void 0 : D.description, L = Number(((A = c.addonProduct) == null ? void 0 : A.basePrice) || c.price || 0);
                return t.jsxs("div", {
                  className: "flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",
                  children: [t.jsx("div", {
                    className: "flex-1",
                    children: t.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [t.jsxs("div", {
                        children: [t.jsx("span", {
                          className: "font-medium text-gray-900",
                          children: w
                        }), c.isRequired && t.jsx("span", {
                          className: "ml-2 text-xs font-medium text-[#F02819]",
                          children: "Required"
                        }), P && t.jsx("p", {
                          className: "text-sm text-gray-500",
                          children: P
                        })]
                      }), L > 0 && t.jsxs("span", {
                        className: "text-sm font-medium text-[#F02819] mr-3",
                        children: ["+", ae(L)]
                      })]
                    })
                  }), t.jsxs("div", {
                    className: "flex items-center space-x-2 ml-3",
                    children: [t.jsx("button", {
                      onClick: (S) => {
                        S.stopPropagation(), Y(c);
                      },
                      disabled: u === 0,
                      className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${u === 0 ? "border-gray-200 text-gray-300 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`,
                      children: t.jsx(fe, {
                        className: "h-3 w-3"
                      })
                    }), t.jsx("span", {
                      className: "text-base font-semibold w-6 text-center",
                      children: u
                    }), t.jsx("button", {
                      onClick: (S) => {
                        S.stopPropagation(), $(c);
                      },
                      disabled: !b,
                      className: `w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${b ? "border-gray-300 text-gray-700 hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-not-allowed"}`,
                      children: t.jsx(pe, {
                        className: "h-3 w-3"
                      })
                    })]
                  })]
                }, g);
              })
            })]
          })]
        }), t.jsxs("div", {
          className: "sticky bottom-0 z-10 bg-white border-t border-gray-200 p-4 flex-shrink-0",
          children: [t.jsxs("div", {
            className: "flex items-center justify-between mb-4",
            children: [t.jsx("span", {
              className: "text-lg font-medium",
              children: "Quantity"
            }), t.jsxs("div", {
              className: "flex items-center space-x-4",
              children: [t.jsx("button", {
                onClick: () => x(Math.max(1, y - 1)),
                className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50",
                "data-testid": "button-decrease-quantity",
                children: t.jsx(fe, {
                  className: "h-4 w-4"
                })
              }), t.jsx("span", {
                className: "text-xl font-bold w-8 text-center",
                "data-testid": "text-quantity",
                children: y
              }), t.jsx("button", {
                onClick: () => x(y + 1),
                className: "w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50",
                "data-testid": "button-increase-quantity",
                children: t.jsx(pe, {
                  className: "h-4 w-4"
                })
              })]
            })]
          }), t.jsxs("button", {
            onClick: J,
            disabled: !X(),
            className: "w-full py-4 rounded-lg font-semibold text-lg transition-colors",
            style: X() ? {
              backgroundColor: e.effectiveOrderAvailabilityMode === "preorder_only" ? "#F97316" : k,
              color: "#FFFFFF"
            } : {
              backgroundColor: "#d1d5db",
              color: "#6b7280",
              cursor: "not-allowed"
            },
            "data-testid": "button-add-to-cart",
            children: [e.effectiveOrderAvailabilityMode === "preorder_only" ? "Pre-Order" : "Add to Cart", " \u2022 ", ae(W())]
          }), t.jsx("button", {
            onClick: n,
            className: "w-full mt-3 py-3 rounded-lg font-medium text-gray-700 border border-gray-300 hover:bg-gray-50",
            "data-testid": "button-cancel-customization-modal",
            "aria-label": "Cancel and close",
            children: "Cancel"
          })]
        })]
      })
    })]
  });
  return Kt.createPortal(me, document.body);
};
function Or({
  outletId: e
}) {
  const [r, n] = s.useState(""), [o, a] = s.useState(""), [d, m] = s.useState(false), [f, v] = s.useState(null), y = s.useRef(null), x = s.useRef(null), {
    data: l
  } = Ae(), h = (l == null ? void 0 : l.colorScheme) || "#F02819", j = (l == null ? void 0 : l.buttonColor) || "#FFFFFF", M = (l == null ? void 0 : l.name) || "EatYum";
  s.useEffect(() => {
    const p = setTimeout(() => {
      a(r);
    }, 300);
    return () => clearTimeout(p);
  }, [r]);
  const {
    data: k = [],
    isLoading: R
  } = xe({
    queryKey: ["/api/products/vertical-list", e],
    queryFn: () => __async(null, null, function* () {
      if (!e) return [];
      const p = new URLSearchParams();
      p.append("outletId", e.toString());
      const _ = yield fetch(`/api/products/vertical-list?${p.toString()}`);
      if (!_.ok) throw new Error("Failed to fetch products");
      return _.json();
    }),
    enabled: !!e
  }), F = o.trim() ? k.filter((p) => {
    var $;
    if (p.isActive === false) return false;
    const _ = o.toLowerCase(), E = p.name.toLowerCase().includes(_), Q = ($ = p.description) == null ? void 0 : $.toLowerCase().includes(_);
    return E || Q;
  }) : [];
  s.useEffect(() => {
    const p = (_) => {
      y.current && !y.current.contains(_.target) && m(false);
    };
    return document.addEventListener("mousedown", p), () => document.removeEventListener("mousedown", p);
  }, []), s.useEffect(() => {
    const p = (_) => {
      var E;
      _.key === "Escape" && (m(false), (E = x.current) == null || E.blur());
    };
    if (d) return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, [d]);
  const K = (p) => {
    if (!e) {
      console.error("No outlet ID available for customization modal");
      return;
    }
    v(__spreadProps(__spreadValues({}, p), {
      basePrice: parseFloat(p.basePrice),
      description: p.description || "",
      imageUrl: p.imageUrl || "",
      outletId: e,
      customizationGroups: []
    })), m(false), n("");
  }, T = () => {
    var p;
    n(""), (p = x.current) == null || p.focus();
  }, U = (p) => {
    (f == null ? void 0 : f.id) === p.id && v((_) => _ ? __spreadProps(__spreadValues({}, _), {
      customizationGroups: p.customizationGroups
    }) : null);
  };
  return t.jsxs(t.Fragment, {
    children: [t.jsxs("div", {
      ref: y,
      className: "relative w-full max-w-2xl",
      children: [t.jsxs("div", {
        className: "relative",
        children: [t.jsx(_e, {
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5",
          style: {
            color: d ? h : void 0
          }
        }), t.jsx("input", {
          ref: x,
          type: "text",
          placeholder: `Search ${M} menu...`,
          value: r,
          onChange: (p) => {
            n(p.target.value), m(true);
          },
          onFocus: () => m(true),
          className: "w-full pl-10 pr-10 py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-opacity-50 transition-colors",
          style: {
            borderColor: d ? h : void 0
          }
        }), r && t.jsx("button", {
          onClick: T,
          className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors",
          children: t.jsx(Te, {
            className: "w-5 h-5"
          })
        })]
      }), d && r.trim() && t.jsx("div", {
        className: "absolute top-full left-0 right-0 mt-2 bg-white border-2 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50",
        style: {
          borderColor: h
        },
        children: R ? t.jsxs("div", {
          className: "p-8 text-center",
          children: [t.jsx("div", {
            className: "animate-spin rounded-full h-8 w-8 border-b-2 mx-auto",
            style: {
              borderColor: h
            }
          }), t.jsx("p", {
            className: "text-gray-500 mt-2",
            children: "Searching..."
          })]
        }) : F.length === 0 ? t.jsxs("div", {
          className: "p-8 text-center",
          children: [t.jsxs("p", {
            className: "text-gray-500",
            children: ['No products found for "', r, '"']
          }), t.jsx("p", {
            className: "text-sm text-gray-400 mt-1",
            children: "Try a different search term"
          })]
        }) : t.jsx("div", {
          className: "divide-y divide-gray-100",
          children: F.map((p) => {
            var E, Q;
            const _ = p.isActive === false || !((E = p.availability) != null && E.isAvailable) || ((Q = p.availability) == null ? void 0 : Q.outOfStock);
            return t.jsxs("button", {
              onClick: () => !_ && K(p),
              disabled: _,
              className: "w-full p-4 hover:bg-gray-50 transition-colors text-left flex items-center space-x-4 disabled:opacity-50 disabled:cursor-not-allowed",
              children: [t.jsx("div", {
                className: "flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden",
                children: p.imageUrl ? t.jsx("img", {
                  src: p.imageUrl,
                  alt: p.name,
                  className: "w-full h-full object-cover"
                }) : t.jsx("div", {
                  className: "w-full h-full flex items-center justify-center text-gray-400",
                  children: t.jsx(_e, {
                    className: "w-6 h-6"
                  })
                })
              }), t.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [t.jsx("h4", {
                  className: "font-semibold text-gray-900 truncate",
                  children: p.name
                }), p.description && t.jsx("p", {
                  className: "text-sm text-gray-600 line-clamp-1 mt-0.5",
                  children: p.description
                }), t.jsxs("div", {
                  className: "flex items-center justify-between mt-1",
                  children: [t.jsx("span", {
                    className: "font-bold",
                    style: {
                      color: h
                    },
                    children: ae(p.basePrice)
                  }), _ && t.jsx("span", {
                    className: "text-xs text-red-600 font-medium",
                    children: "Out of Stock"
                  })]
                })]
              }), !_ && t.jsx("div", {
                className: "flex-shrink-0",
                children: t.jsx("div", {
                  className: "px-4 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-90",
                  style: {
                    backgroundColor: j,
                    color: "#FFFFFF"
                  },
                  children: "Add"
                })
              })]
            }, p.id);
          })
        })
      })]
    }), f && e && t.jsx(vr, {
      product: __spreadProps(__spreadValues({}, f), {
        outletId: e
      }),
      isOpen: !!f,
      onClose: () => v(null),
      onCustomizationsLoad: U
    })]
  });
}
export {
  vr as C,
  Ar as D,
  Or as P,
  Tr as a,
  fr as b,
  pr as c,
  yr as d
};
