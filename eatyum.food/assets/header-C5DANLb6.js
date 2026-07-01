var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
  N as Y,
  r as n,
  j as e,
  w as h,
  X as _,
  au as W,
  a as B,
  B as a,
  L as i
} from "./index-DOfu0sXg.js";
import {
  D as I,
  a as G,
  b as L,
  c as u,
  d as V,
  P as q
} from "./product-search-DjJMGOuy.js";
import {
  O as M,
  C as D,
  j as X,
  h as E,
  i as O,
  R as $,
  T as J,
  P as K
} from "./dialog-BUvIuveX.js";
import {
  a as Q,
  O as Z
} from "./use-scheduled-delivery-QXJaYNqy.js";
import {
  u as ee
} from "./use-auth-d_ltKWkf.js";
import {
  M as se
} from "./menu-B9h4oOjs.js";
import {
  U as j
} from "./user-adl9AYKF.js";
import {
  W as F
} from "./wallet-e6BSu-fo.js";
import {
  S as te
} from "./star-o2YGpjzJ.js";
import {
  S as ae
} from "./shopping-cart-C1hOzoyN.js";
import {
  C as S
} from "./chevron-down-DegxUQDE.js";
import {
  M as le
} from "./map-pin-ChG4yLkU.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = Y("History", [
  ["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
  }],
  ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
  }],
  ["path", {
    d: "M12 7v5l4 2",
    key: "1fdv2h"
  }]
]), oe = $, re = J, ie = K, U = n.forwardRef((_a, o) => {
  var _b = _a, {
    className: l
  } = _b, t = __objRest(_b, [
    "className"
  ]);
  return e.jsx(M, __spreadProps(__spreadValues({
    className: h("fixed inset-0 z-[60] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", l)
  }, t), {
    ref: o
  }));
});
U.displayName = M.displayName;
const ne = W("fixed z-[60] gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", {
  variants: {
    side: {
      top: "inset-x-0 top-0 border-b max-h-[90vh] overflow-y-auto data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t max-h-[90vh] overflow-y-auto data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 max-w-[85vw] overflow-y-auto border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 max-w-[85vw] overflow-y-auto border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    }
  },
  defaultVariants: {
    side: "right"
  }
}), P = n.forwardRef((_c, c) => {
  var _d = _c, {
    side: l = "right",
    className: t,
    children: o
  } = _d, f = __objRest(_d, [
    "side",
    "className",
    "children"
  ]);
  return e.jsxs(ie, {
    children: [e.jsx(U, {}), e.jsxs(D, __spreadProps(__spreadValues({
      ref: c,
      className: h(ne({
        side: l
      }), t)
    }, f), {
      children: [o, e.jsxs(X, {
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
        children: [e.jsx(_, {
          className: "h-4 w-4"
        }), e.jsx("span", {
          className: "sr-only",
          children: "Close"
        })]
      })]
    }))]
  });
});
P.displayName = D.displayName;
const T = (_e) => {
  var _f = _e, {
    className: l
  } = _f, t = __objRest(_f, [
    "className"
  ]);
  return e.jsx("div", __spreadValues({
    className: h("flex flex-col space-y-2 text-center sm:text-left", l)
  }, t));
};
T.displayName = "SheetHeader";
const z = n.forwardRef((_g, o) => {
  var _h = _g, {
    className: l
  } = _h, t = __objRest(_h, [
    "className"
  ]);
  return e.jsx(E, __spreadValues({
    ref: o,
    className: h("text-lg font-semibold text-foreground", l)
  }, t));
});
z.displayName = E.displayName;
const H = n.forwardRef((_i, o) => {
  var _j = _i, {
    className: l
  } = _j, t = __objRest(_j, [
    "className"
  ]);
  return e.jsx(O, __spreadValues({
    ref: o,
    className: h("text-sm text-muted-foreground", l)
  }, t));
});
H.displayName = O.displayName;
const we = ({
  onCartClick: l,
  userLocation: t,
  onLocationClick: o
}) => {
  var _a;
  const [f, c] = n.useState(false), [y, N] = n.useState("delivery"), [A, r] = n.useState(false), {
    user: d,
    logout: w,
    isAuthenticated: v
  } = ee(), {
    itemCount: C
  } = Q(), {
    data: s
  } = B(), k = (s == null ? void 0 : s.colorScheme) || "#F02819", x = (s == null ? void 0 : s.buttonColor) || "#FFFFFF", R = n.useMemo(() => {
    const m = !s || s.name === "EatYum" ? "/eatyum-logo.png" : "/logo.png", p = (s == null ? void 0 : s.logoLightUrl) || (s == null ? void 0 : s.logoDarkUrl) || (s == null ? void 0 : s.logoUrl) || m, g = (s == null ? void 0 : s.logoDarkUrl) || p;
    return {
      light: p,
      dark: g
    };
  }, [s == null ? void 0 : s.logoDarkUrl, s == null ? void 0 : s.logoLightUrl, s == null ? void 0 : s.logoUrl, s == null ? void 0 : s.name]);
  return e.jsxs(e.Fragment, {
    children: [e.jsx("header", {
      className: "bg-white shadow-sm sticky top-0 z-50",
      children: e.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [e.jsxs("div", {
          className: "flex items-center justify-between h-16",
          children: [e.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [e.jsxs(oe, {
              open: A,
              onOpenChange: r,
              children: [e.jsx(re, {
                asChild: true,
                children: e.jsx(a, {
                  variant: "ghost",
                  size: "sm",
                  className: "text-gray-600 hover:text-gray-900",
                  children: e.jsx(se, {
                    className: "w-6 h-6"
                  })
                })
              }), e.jsxs(P, {
                side: "left",
                className: "w-80",
                children: [e.jsxs(T, {
                  children: [e.jsx(z, {
                    children: "Menu"
                  }), e.jsx(H, {
                    children: "Access your account and explore options"
                  })]
                }), e.jsxs("div", {
                  className: "mt-6 space-y-4",
                  children: [v ? e.jsxs(e.Fragment, {
                    children: [e.jsx("div", {
                      className: "py-2 px-3 bg-gray-50 rounded-lg",
                      children: e.jsxs("p", {
                        className: "text-sm font-medium",
                        children: ["Hello, ", d == null ? void 0 : d.fullName]
                      })
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: true,
                      children: e.jsxs(i, {
                        href: "/profile",
                        onClick: () => r(false),
                        children: [e.jsx(j, {
                          className: "w-4 h-4 mr-2"
                        }), "My Profile"]
                      })
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: true,
                      children: e.jsxs(i, {
                        href: "/my-orders",
                        onClick: () => r(false),
                        children: [e.jsx(b, {
                          className: "w-4 h-4 mr-2"
                        }), "My Orders"]
                      })
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: true,
                      children: e.jsxs(i, {
                        href: "/wallet",
                        onClick: () => r(false),
                        children: [e.jsx(F, {
                          className: "w-4 h-4 mr-2"
                        }), (s == null ? void 0 : s.name) || "EatYum", " Wallet"]
                      })
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full justify-start",
                      asChild: true,
                      children: e.jsxs(i, {
                        href: "/points",
                        onClick: () => r(false),
                        children: [e.jsx(te, {
                          className: "w-4 h-4 mr-2"
                        }), (s == null ? void 0 : s.name) || "EatYum", " Points"]
                      })
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full transition-colors",
                      style: {
                        color: "#DC2626",
                        borderColor: "#FEE2E2"
                      },
                      onMouseEnter: (m) => {
                        m.currentTarget.style.backgroundColor = "#FEF2F2";
                      },
                      onMouseLeave: (m) => {
                        m.currentTarget.style.backgroundColor = "transparent";
                      },
                      onClick: () => {
                        w(), r(false);
                      },
                      children: "Logout"
                    })]
                  }) : e.jsxs(e.Fragment, {
                    children: [e.jsx(a, {
                      className: "w-full",
                      style: {
                        backgroundColor: x,
                        color: "#FFFFFF"
                      },
                      onClick: () => {
                        c(true), r(false);
                      },
                      children: "Login"
                    }), e.jsx(a, {
                      variant: "outline",
                      className: "w-full",
                      onClick: () => {
                        c(true), r(false);
                      },
                      children: "Sign Up"
                    })]
                  }), ((s == null ? void 0 : s.appStoreUrl) || (s == null ? void 0 : s.playStoreUrl)) && e.jsxs("div", {
                    className: "pt-4 mt-4 border-t border-gray-200",
                    children: [e.jsxs("p", {
                      className: "text-sm font-medium text-gray-700 mb-3",
                      children: ["Download the ", (s == null ? void 0 : s.name) || "EatYum", " App"]
                    }), e.jsxs("div", {
                      className: "space-y-2",
                      children: [(s == null ? void 0 : s.appStoreUrl) && e.jsx("a", {
                        href: s.appStoreUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block",
                        children: e.jsx("img", {
                          src: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1280620800",
                          alt: "Download on the App Store",
                          className: "h-10 hover:opacity-80 transition-opacity"
                        })
                      }), (s == null ? void 0 : s.playStoreUrl) && e.jsx("a", {
                        href: s.playStoreUrl,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "block",
                        children: e.jsx("img", {
                          src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png",
                          alt: "Get it on Google Play",
                          className: "h-[60px] -ml-2 hover:opacity-80 transition-opacity"
                        })
                      })]
                    })]
                  })]
                })]
              })]
            }), e.jsx(i, {
              href: "/",
              className: "flex items-center",
              children: e.jsx("img", {
                src: R.light,
                alt: `${(_a = s == null ? void 0 : s.name) != null ? _a : "EatYum"} Logo`,
                className: "h-10"
              })
            })]
          }), e.jsxs("div", {
            className: "flex items-center space-x-3",
            children: [e.jsxs(a, {
              variant: "ghost",
              size: "sm",
              onClick: l,
              className: "relative text-gray-600 hover:text-gray-900",
              children: [e.jsx(ae, {
                className: "w-5 h-5"
              }), C > 0 && e.jsx("span", {
                className: "absolute -top-2 -right-2 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs",
                style: {
                  backgroundColor: k
                },
                children: C
              })]
            }), v ? e.jsxs(I, {
              children: [e.jsx(G, {
                asChild: true,
                children: e.jsxs(a, {
                  variant: "ghost",
                  size: "sm",
                  className: "flex items-center space-x-2 text-gray-600 hover:text-gray-900",
                  children: [e.jsx(j, {
                    className: "w-4 h-4"
                  }), e.jsxs("span", {
                    className: "text-sm hidden sm:inline",
                    children: ["Hello, ", d == null ? void 0 : d.fullName]
                  }), e.jsx(S, {
                    className: "w-3 h-3"
                  })]
                })
              }), e.jsxs(L, {
                align: "end",
                className: "w-48",
                children: [e.jsx(u, {
                  asChild: true,
                  children: e.jsxs(i, {
                    href: "/profile",
                    className: "flex items-center",
                    children: [e.jsx(j, {
                      className: "w-4 h-4 mr-2"
                    }), "My Profile"]
                  })
                }), e.jsx(u, {
                  asChild: true,
                  children: e.jsxs(i, {
                    href: "/wallet",
                    className: "flex items-center",
                    children: [e.jsx(F, {
                      className: "w-4 h-4 mr-2"
                    }), (s == null ? void 0 : s.name) || "EatYum", " Wallet"]
                  })
                }), e.jsx(u, {
                  asChild: true,
                  children: e.jsxs(i, {
                    href: "/my-orders",
                    className: "flex items-center",
                    children: [e.jsx(b, {
                      className: "w-4 h-4 mr-2"
                    }), "My Orders"]
                  })
                }), e.jsx(V, {}), e.jsx(u, {
                  onClick: w,
                  className: "text-red-600 focus:text-red-600",
                  children: "Logout"
                })]
              })]
            }) : e.jsx(a, {
              onClick: () => c(true),
              className: "px-4 py-2 rounded-full text-sm font-medium",
              style: {
                backgroundColor: x,
                color: "#FFFFFF"
              },
              children: "Login"
            })]
          })]
        }), (t == null ? void 0 : t.selectedOutlet) && e.jsx("div", {
          className: "py-3 border-b border-gray-100",
          children: e.jsx(q, {
            outletId: t.selectedOutlet.id
          })
        }), e.jsx("div", {
          className: "pb-3 border-b border-gray-100",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [e.jsxs("div", {
              className: "flex bg-gray-100 rounded-lg p-1",
              children: [e.jsx(a, {
                variant: "ghost",
                size: "sm",
                onClick: () => N("delivery"),
                className: "text-xs px-3 py-1 hover:bg-gray-200",
                style: y === "delivery" ? {
                  backgroundColor: x,
                  color: "#FFFFFF"
                } : {},
                children: "Delivery"
              }), e.jsx(a, {
                variant: "ghost",
                size: "sm",
                onClick: () => N("pickup"),
                className: "text-xs px-3 py-1 hover:bg-gray-200",
                style: y === "pickup" ? {
                  backgroundColor: x,
                  color: "#FFFFFF"
                } : {},
                children: "Pickup"
              })]
            })]
          })
        })]
      })
    }), e.jsx(Z, {
      isOpen: f,
      onClose: () => c(false),
      onSuccess: (m, p) => {
        const g = new CustomEvent("auth-change", {
          detail: {
            user: p,
            token: m
          }
        });
        window.dispatchEvent(g), c(false);
      }
    })]
  });
};
export {
  we as H
};
