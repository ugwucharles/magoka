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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import {
  r as n,
  u as pe,
  a as K,
  b as W,
  j as e,
  B as R,
  L as Y,
  c as Q,
  t as se,
  d as fe,
  e as we,
  X as te,
  f as ue,
  g as Ne,
  h as Se,
  i as ee,
  k as ke,
  l as Ce,
  m as Fe
} from "./index-DOfu0sXg.js";
import {
  H as Oe
} from "./header-C5DANLb6.js";
import {
  L as V,
  S as Ae,
  a as Te,
  F as $e,
  C as Ee,
  O as Me,
  b as _e
} from "./scheduled-delivery-notice-Cf3rNKIR.js";
import {
  C as le
} from "./chevron-left-Cnh0-uPi.js";
import {
  C as ae
} from "./chevron-right-DkUlsPHD.js";
import {
  P as ie,
  S as Le
} from "./preorder-schedule-modal-zxs4Au2f.js";
import {
  S as $
} from "./skeleton-Bv9tx7fM.js";
import {
  C as oe
} from "./product-search-DjJMGOuy.js";
import {
  u as re,
  a as ne,
  b as X
} from "./use-scheduled-delivery-QXJaYNqy.js";
import {
  f as ce
} from "./currency-cZDvJQzL.js";
import {
  A as Ue
} from "./arrow-right-CS_UFvxY.js";
import {
  F as De,
  L as Ie
} from "./location-modal-Cr-IHIoa.js";
import {
  D as ze,
  a as Re
} from "./dialog-BUvIuveX.js";
import {
  i as qe
} from "./outlet-utils-Dqa2FQkG.js";
import "./use-auth-d_ltKWkf.js";
import "./menu-B9h4oOjs.js";
import "./user-adl9AYKF.js";
import "./wallet-e6BSu-fo.js";
import "./star-o2YGpjzJ.js";
import "./shopping-cart-C1hOzoyN.js";
import "./chevron-down-DegxUQDE.js";
import "./map-pin-ChG4yLkU.js";
import "./calendar-DfgMOSD7.js";
import "./trash-2-MFuZdLCA.js";
import "./minus-zDmsn0vk.js";
import "./plus-xl2HqeIg.js";
import "./store-Cr0AuVYD.js";
import "./timezone-utils-D5P8NMTs.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
import "./triangle-alert-BZPq43t0.js";
import "./clock-DQ0X7PrC.js";
import "./trophy-COGTR2GG.js";
import "./lock-ABGMYV1t.js";
import "./refresh-cw-C5dId60a.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-Czlrzsbg.js";
import "./check-AkIa94Y-.js";
import "./search-BFN4Wc19.js";
import "./input-FyV2XACZ.js";
import "./label-B38UEnoM.js";
import "./auth-AqNcfriC.js";
import "./useReferralReward-BeyZodYI.js";
import "./arrow-left-CK7JF7w9.js";
import "./gift-C_SZrOe8.js";
import "./mail-WBbfgCoF.js";
import "./smartphone-DMb4mbpx.js";
import "./useMutation-CVmbONMy.js";
import "./message-circle-Ctbm3h4-.js";
import "./index-D-8nYH0_.js";
import "./custom-autocomplete-Cusxb0jm.js";
const ge = n.memo(() => {
  const [s, d] = n.useState(0), [, c] = pe(), {
    data: i
  } = K(), {
    data: g = []
  } = W({
    queryKey: ["/api/banners", i == null ? void 0 : i.id],
    queryFn: () => __async(null, null, function* () {
      const o = i != null && i.id ? `/api/banners?brandId=${i.id}` : "/api/banners", p = yield fetch(o);
      if (!p.ok) throw new Error("Failed to fetch banners");
      return p.json();
    }),
    staleTime: 5 * 60 * 1e3
  }), y = g.filter((o) => o.isActive);
  let l = [...y];
  if (l.length === 0) {
    const o = (i == null ? void 0 : i.name) || "EatYum";
    l.push({
      id: "fallback-default",
      title: `Welcome to ${o}`,
      subtitle: "Delicious food delivered to your door!",
      imageUrl: "",
      isActive: true,
      sortOrder: 1e3
    });
  }
  const t = n.useCallback(() => {
    d((o) => (o + 1) % l.length);
  }, [l.length]), u = n.useCallback(() => {
    d((o) => (o - 1 + l.length) % l.length);
  }, [l.length]);
  if (n.useEffect(() => {
    if (l.length <= 1) return;
    const o = setInterval(t, 5e3);
    return () => clearInterval(o);
  }, [t, l.length]), n.useEffect(() => {
    d(0);
  }, [l.length]), l.length === 0) {
    const o = (i == null ? void 0 : i.name) || "EatYum", p = (i == null ? void 0 : i.colorScheme) || "#F02819";
    return i != null && i.buttonColor, e.jsx("div", {
      className: "relative w-full h-48 sm:h-64 rounded-lg flex items-center justify-center text-white",
      style: {
        background: `linear-gradient(to right, ${p}, ${p})`
      },
      children: e.jsxs("div", {
        className: "text-center px-4",
        children: [e.jsxs("h2", {
          className: "text-2xl sm:text-4xl font-bold mb-2",
          children: ["Welcome to ", o]
        }), e.jsx("p", {
          className: "text-lg sm:text-xl opacity-90",
          children: "Delicious food delivered to your door!"
        })]
      })
    });
  }
  return e.jsxs("div", {
    className: "relative w-full h-48 sm:h-64 overflow-hidden rounded-lg group",
    children: [e.jsx("div", {
      className: "flex transition-transform duration-500 ease-in-out h-full",
      style: {
        transform: `translateX(-${s * 100}%)`
      },
      children: l.map((o) => {
        var O;
        const p = (O = o.linkUrl) == null ? void 0 : O.startsWith("/"), M = o.id === "fallback-default", v = e.jsx("div", {
          className: "w-full h-full relative cursor-pointer",
          children: M ? e.jsx("div", {
            className: "w-full h-full flex items-center justify-center text-white",
            style: {
              background: `linear-gradient(to right, ${(i == null ? void 0 : i.colorScheme) || "#F02819"}, ${(i == null ? void 0 : i.colorScheme) || "#F02819"})`
            },
            children: e.jsxs("div", {
              className: "text-center px-4",
              children: [e.jsx("h2", {
                className: "text-2xl sm:text-4xl font-bold mb-2",
                children: o.title
              }), e.jsx("p", {
                className: "text-lg sm:text-xl opacity-90",
                children: o.subtitle
              })]
            })
          }) : e.jsxs(e.Fragment, {
            children: [o.mobileImageUrl ? e.jsxs(e.Fragment, {
              children: [e.jsx(V, {
                src: o.imageUrl,
                alt: o.title || "Banner",
                className: "w-full h-full object-cover hidden sm:block"
              }), e.jsx(V, {
                src: o.mobileImageUrl,
                alt: o.title || "Banner",
                className: "w-full h-full object-cover block sm:hidden"
              })]
            }) : e.jsx(V, {
              src: o.imageUrl,
              alt: o.title || "Banner",
              className: "w-full h-full object-cover"
            }), (o.title || o.subtitle) && e.jsx("div", {
              className: "absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center",
              children: e.jsxs("div", {
                className: "text-center text-white px-4 flex flex-col items-center",
                children: [o.title && e.jsx("h2", {
                  className: "text-xl sm:text-3xl font-bold mb-2",
                  children: o.title
                }), o.subtitle && e.jsx("p", {
                  className: "text-sm sm:text-lg opacity-90",
                  children: o.subtitle
                })]
              })
            })]
          })
        });
        return e.jsx("div", {
          className: "w-full h-full flex-shrink-0 relative",
          children: o.linkUrl ? p ? e.jsx(Y, {
            href: o.linkUrl,
            children: e.jsx("span", {
              className: "block w-full h-full",
              children: v
            })
          }) : e.jsx("a", {
            href: o.linkUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block w-full h-full",
            children: v
          }) : v
        }, o.id);
      })
    }), l.length > 1 && e.jsxs(e.Fragment, {
      children: [e.jsx(R, {
        variant: "ghost",
        size: "icon",
        className: "absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity",
        onClick: u,
        children: e.jsx(le, {
          className: "h-6 w-6"
        })
      }), e.jsx(R, {
        variant: "ghost",
        size: "icon",
        className: "absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 hover:bg-opacity-40 text-white opacity-0 group-hover:opacity-100 transition-opacity",
        onClick: t,
        children: e.jsx(ae, {
          className: "h-6 w-6"
        })
      })]
    }), l.length > 1 && e.jsx("div", {
      className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
      children: l.map((o, p) => e.jsx("button", {
        className: `w-2 h-2 rounded-full transition-colors ${p === s ? "bg-white" : "bg-white bg-opacity-50"}`,
        onClick: () => d(p)
      }, p))
    })]
  });
});
ge.displayName = "BannerCarousel";
const ye = n.memo(({
  selectedCategory: s,
  onCategorySelect: d,
  outletId: c
}) => {
  const {
    data: i
  } = K(), {
    data: g = [],
    isLoading: y
  } = W({
    queryKey: ["/api/categories"],
    queryFn: () => __async(null, null, function* () {
      const l = yield fetch("/api/categories");
      if (!l.ok) throw new Error("Failed to fetch categories");
      return l.json();
    }),
    staleTime: 5 * 60 * 1e3
  });
  i != null && i.colorScheme;
  const f = (i == null ? void 0 : i.buttonColor) || "#FFFFFF", h = n.useMemo(() => [...g].sort((l, t) => l.sortOrder - t.sortOrder), [g]);
  return y ? e.jsx("div", {
    className: "border-b bg-white",
    children: e.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
      children: e.jsx("div", {
        className: "flex space-x-3 overflow-x-auto pb-2",
        children: Array.from({
          length: 5
        }).map((l, t) => e.jsx($, {
          className: "h-10 w-24 rounded-full flex-shrink-0"
        }, t))
      })
    })
  }) : e.jsx("div", {
    className: "border-b bg-white sticky top-16 z-40",
    children: e.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",
      children: e.jsx("div", {
        className: "w-full overflow-x-auto scrollbar-hide",
        children: e.jsxs("div", {
          className: "flex space-x-3 pb-2 min-w-max",
          children: [e.jsx(R, {
            variant: s === null ? "default" : "outline",
            size: "sm",
            onClick: () => d(null),
            className: "rounded-full whitespace-nowrap flex-shrink-0 border-gray-300 hover:bg-gray-50",
            style: s === null ? {
              backgroundColor: f,
              color: "#FFFFFF",
              borderColor: f
            } : {},
            children: "All Items"
          }), h.map((l) => e.jsx(R, {
            variant: s === l.id ? "default" : "outline",
            size: "sm",
            onClick: () => d(l.id),
            className: "rounded-full whitespace-nowrap flex-shrink-0 border-gray-300 text-gray-700 hover:bg-gray-50",
            style: s === l.id ? {
              backgroundColor: f,
              color: "#FFFFFF",
              borderColor: f
            } : {},
            children: l.name
          }, l.id))]
        })
      })
    })
  });
});
ye.displayName = "CategoryNav";
const ve = n.memo(({
  selectedCategory: s,
  outletId: d
}) => {
  var k;
  const [c, i] = n.useState(null), [g, y] = n.useState(false), [f, h] = n.useState(null), [l, t] = n.useState(null), {
    location: u
  } = re(), {
    addItem: o
  } = ne(), {
    data: p
  } = K(), {
    scheduleDelivery: M
  } = X(), {
    toast: v
  } = Q(), O = (p == null ? void 0 : p.colorScheme) || "#F02819", A = (p == null ? void 0 : p.buttonColor) || "#FFFFFF", S = d || ((k = u == null ? void 0 : u.selectedOutlet) == null ? void 0 : k.id), {
    data: T = [],
    isLoading: U
  } = W({
    queryKey: ["/api/products", s, S],
    queryFn: () => __async(null, null, function* () {
      const a = new URLSearchParams();
      s && a.append("categoryId", s.toString()), S && a.append("outletId", S.toString());
      const m = yield fetch(`/api/products?${a.toString()}`);
      if (!m.ok) throw new Error("Failed to fetch products");
      return m.json();
    }),
    enabled: !!S,
    staleTime: 6e4,
    gcTime: 5 * 60 * 1e3,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  }), q = T.filter((a) => a.isActive !== false), r = (a) => __async(null, null, function* () {
    var _a;
    var N;
    if (((_a = (N = a.availability) == null ? void 0 : N.isAvailable) != null ? _a : true) && a.isActive !== false) try {
      if (!S) {
        console.error("No outlet ID available for customization modal");
        return;
      }
      i(__spreadProps(__spreadValues({}, a), {
        outletId: S,
        customizationGroups: []
      }));
    } catch (b) {
      console.error("Failed to open product modal:", b), i(__spreadProps(__spreadValues({}, a), {
        outletId: S,
        customizationGroups: []
      }));
    }
  }), w = (a) => {
    (c == null ? void 0 : c.id) === a.id && i((m) => m ? __spreadProps(__spreadValues({}, m), {
      customizationGroups: a.customizationGroups
    }) : null);
  }, D = (a) => {
    h(a), t(c), i(null), y(true);
  }, _ = (a, m) => {
    var z;
    const N = ((z = u == null ? void 0 : u.selectedOutlet) == null ? void 0 : z.id) || S || 0;
    M(a, m, N), y(false);
    const [b, F] = m.split(":").map(Number), I = b >= 12 ? "PM" : "AM", P = `${b > 12 ? b - 12 : b === 0 ? 12 : b}:${String(F).padStart(2, "0")} ${I}`;
    if (f) {
      const B = o(f);
      if (!B.success) v({
        title: "Cannot add item",
        description: B.error,
        variant: "destructive"
      });
      else {
        try {
          se({
            id: (l == null ? void 0 : l.id) || 0,
            name: (l == null ? void 0 : l.name) || "",
            price: (l == null ? void 0 : l.basePrice) || 0,
            description: (l == null ? void 0 : l.description) || "",
            category: {
              name: "Food"
            }
          }, f.quantity, f.customizations);
        } catch (J) {
          console.warn("Analytics tracking failed:", J);
        }
        v({
          title: "Added to cart",
          description: `Scheduled for ${a} at ${P}`
        });
      }
      h(null), t(null);
    }
  };
  return U ? e.jsx("div", {
    className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6",
    children: Array.from({
      length: 8
    }).map((a, m) => e.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border",
      children: [e.jsx($, {
        className: "w-full aspect-square rounded-t-lg"
      }), e.jsxs("div", {
        className: "p-2 sm:p-4",
        children: [e.jsx($, {
          className: "h-4 w-3/4 mb-1 sm:mb-2"
        }), e.jsx($, {
          className: "h-3 w-full mb-2 sm:mb-3 block sm:block"
        }), e.jsx($, {
          className: "h-4 w-1/2"
        })]
      })]
    }, m))
  }) : S ? q.length === 0 ? e.jsxs("div", {
    className: "text-center py-12",
    children: [e.jsx("p", {
      className: "text-gray-500",
      children: "No products available at this location"
    }), e.jsx("p", {
      className: "text-sm text-gray-400 mt-2",
      children: "Please try a different location or contact support"
    })]
  }) : e.jsxs(e.Fragment, {
    children: [e.jsx("div", {
      className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6",
      children: q.map((a) => {
        var _a;
        var b, F;
        const m = ((_a = (b = a.availability) == null ? void 0 : b.isAvailable) != null ? _a : true) && a.isActive !== false, N = ((F = a.availability) == null ? void 0 : F.priceOverride) || a.basePrice;
        return e.jsxs("div", {
          className: `bg-white rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow ${m ? "" : "opacity-80 cursor-not-allowed"}`,
          onClick: () => m && r(a),
          children: [e.jsxs("div", {
            className: "relative",
            children: [e.jsx(V, {
              src: a.imageUrl,
              alt: a.name,
              className: "w-full aspect-square object-cover rounded-t-lg"
            }), a.isGiftBox && e.jsx("div", {
              className: "absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg",
              children: "\u{1F381} Gift Box"
            }), a.effectiveOrderAvailabilityMode === "preorder_only" && !a.isGiftBox && e.jsx("div", {
              className: "absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg",
              children: "Pre-Order Only"
            }), !m && e.jsx("div", {
              className: "absolute inset-0 bg-black bg-opacity-60 rounded-t-lg flex items-center justify-center",
              children: e.jsx("span", {
                className: "text-white font-medium text-sm",
                children: "Out Of Stock"
              })
            })]
          }), e.jsxs("div", {
            className: "p-2 sm:p-4",
            children: [e.jsx("h3", {
              className: "text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight",
              children: a.name
            }), a.effectiveOrderAvailabilityMode === "preorder_only" && e.jsxs("p", {
              className: "text-xs text-orange-600 mb-1 sm:mb-2 flex items-center gap-1",
              children: [e.jsx("span", {
                children: "\u23F3"
              }), " Requires ", a.preorderLeadTimeHours || 24, "hr advance notice"]
            }), e.jsx("p", {
              className: "text-xs text-gray-500 mb-1 sm:mb-2 hidden sm:block leading-relaxed",
              children: a.description
            }), e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [e.jsxs("div", {
                children: [e.jsx("span", {
                  className: "text-xs text-gray-500 block sm:hidden",
                  children: "From"
                }), e.jsx("span", {
                  className: "text-sm sm:text-lg font-bold",
                  style: {
                    color: O
                  },
                  children: ce(N)
                })]
              }), e.jsx(R, {
                size: "sm",
                className: "hidden sm:inline-flex transition-opacity hover:opacity-90",
                style: {
                  backgroundColor: m ? a.effectiveOrderAvailabilityMode === "preorder_only" ? "#F97316" : A : void 0,
                  color: "#FFFFFF"
                },
                onClick: (I) => {
                  I.stopPropagation(), m && r(a);
                },
                disabled: !m,
                children: m ? a.effectiveOrderAvailabilityMode === "preorder_only" ? "Pre-Order" : "Add to Cart" : "Out of Stock"
              })]
            })]
          })]
        }, a.id);
      })
    }), c && e.jsx(oe, {
      product: __spreadProps(__spreadValues({}, c), {
        outletId: S
      }),
      isOpen: !!c,
      onClose: () => i(null),
      onCustomizationsLoad: w,
      onRequestSchedule: D
    }), e.jsx(ie, {
      isOpen: g,
      onClose: () => {
        y(false), h(null), t(null);
      },
      onConfirm: _,
      userLocation: u,
      leadTimeHours: (l == null ? void 0 : l.preorderLeadTimeHours) || 24,
      productName: l == null ? void 0 : l.name
    })]
  }) : e.jsx("div", {
    className: "text-center py-12",
    children: e.jsx("p", {
      className: "text-gray-500",
      children: "Please allow location access to view available products"
    })
  });
});
ve.displayName = "ProductGrid";
function je({
  product: s,
  outletId: d
}) {
  var D, _;
  const [c, i] = n.useState(null), [g, y] = n.useState(false), [f, h] = n.useState(null), [l, t] = n.useState(null), {
    addItem: u
  } = ne(), {
    data: o
  } = K(), {
    location: p
  } = re(), {
    scheduleDelivery: M
  } = X(), {
    toast: v
  } = Q(), O = (o == null ? void 0 : o.colorScheme) || "#F02819", A = (o == null ? void 0 : o.buttonColor) || "#FFFFFF", S = s.isActive === false || !((D = s.availability) != null && D.isAvailable) || ((_ = s.availability) == null ? void 0 : _.outOfStock), T = s.effectiveOrderAvailabilityMode === "preorder_only", U = () => __async(null, null, function* () {
    var k, a;
    if (!S) try {
      if (!d) {
        console.error("No outlet ID available for customization modal");
        return;
      }
      fe({
        id: s.id,
        name: s.name,
        price: s.basePrice,
        description: s.description,
        category: {
          name: "Food"
        }
      }), i(__spreadProps(__spreadValues({}, s), {
        image: s.imageUrl || "",
        isAvailable: ((k = s.availability) == null ? void 0 : k.isAvailable) || false,
        outletId: d,
        customizationGroups: []
      }));
    } catch (m) {
      console.error("Failed to open product modal:", m), i(__spreadProps(__spreadValues({}, s), {
        image: s.imageUrl || "",
        isAvailable: ((a = s.availability) == null ? void 0 : a.isAvailable) || false,
        outletId: d,
        customizationGroups: []
      }));
    }
  }), q = (k) => {
    (c == null ? void 0 : c.id) === k.id && i((a) => a ? __spreadProps(__spreadValues({}, a), {
      customizationGroups: k.customizationGroups
    }) : null);
  }, r = (k) => {
    h(k), t(c), i(null), y(true);
  }, w = (k, a) => {
    var P;
    const m = ((P = p == null ? void 0 : p.selectedOutlet) == null ? void 0 : P.id) || d || 0;
    M(k, a, m), y(false);
    const [N, b] = a.split(":").map(Number), F = N >= 12 ? "PM" : "AM", H = `${N > 12 ? N - 12 : N === 0 ? 12 : N}:${String(b).padStart(2, "0")} ${F}`;
    if (f) {
      const z = u(f);
      if (!z.success) v({
        title: "Cannot add item",
        description: z.error,
        variant: "destructive"
      });
      else {
        try {
          se({
            id: (l == null ? void 0 : l.id) || 0,
            name: (l == null ? void 0 : l.name) || "",
            price: (l == null ? void 0 : l.basePrice) || 0,
            description: (l == null ? void 0 : l.description) || "",
            category: {
              name: "Food"
            }
          }, f.quantity, f.customizations);
        } catch (B) {
          console.warn("Analytics tracking failed:", B);
        }
        v({
          title: "Added to cart",
          description: `Scheduled for ${k} at ${H}`
        });
      }
      h(null), t(null);
    }
  };
  return e.jsxs(e.Fragment, {
    children: [e.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer",
      onClick: U,
      children: [e.jsxs("div", {
        className: "relative",
        children: [e.jsx(V, {
          src: s.imageUrl || "/placeholder-food.jpg",
          alt: s.name,
          className: "w-full h-48 object-cover"
        }), S && e.jsx("div", {
          className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",
          children: e.jsx("span", {
            className: "text-white font-semibold text-lg",
            children: "Out of Stock"
          })
        }), T && !S && e.jsx("div", {
          className: "absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium",
          children: "Pre-Order Only"
        })]
      }), e.jsxs("div", {
        className: "p-4",
        children: [e.jsx("h3", {
          className: "font-semibold text-lg text-gray-900 mb-2 line-clamp-2",
          children: s.name
        }), s.description && e.jsx("p", {
          className: "text-gray-600 text-sm mb-3 line-clamp-2",
          children: s.description
        }), e.jsxs("div", {
          className: "flex items-center justify-between",
          children: [e.jsx("span", {
            className: "text-lg font-bold",
            style: {
              color: O
            },
            children: ce(s.basePrice)
          }), e.jsx(R, {
            onClick: (k) => {
              k.stopPropagation(), U();
            },
            disabled: S,
            size: "sm",
            className: "hidden sm:flex transition-opacity hover:opacity-90",
            style: {
              backgroundColor: T ? "#F97316" : A,
              color: "#FFFFFF"
            },
            children: S ? "Out of Stock" : T ? "Pre-Order" : "Add to Cart"
          })]
        })]
      })]
    }), c && e.jsx(oe, {
      product: __spreadProps(__spreadValues({}, c), {
        outletId: d
      }),
      isOpen: !!c,
      onClose: () => i(null),
      onCustomizationsLoad: q,
      onRequestSchedule: r
    }), e.jsx(ie, {
      isOpen: g,
      onClose: () => {
        y(false), h(null), t(null);
      },
      onConfirm: w,
      userLocation: p,
      leadTimeHours: (l == null ? void 0 : l.preorderLeadTimeHours) || 24,
      productName: l == null ? void 0 : l.name
    })]
  });
}
function Pe({
  outletId: s
}) {
  const d = n.useRef(null), {
    data: c = [],
    isLoading: i
  } = W({
    queryKey: ["/api/products/popular", s],
    queryFn: () => __async(null, null, function* () {
      const h = new URLSearchParams();
      s && h.append("outletId", s.toString()), h.append("limit", "10");
      const l = yield fetch(`/api/products/popular?${h.toString()}`);
      if (!l.ok) throw new Error("Failed to fetch popular products");
      return l.json();
    }),
    enabled: !!s,
    staleTime: 6e4,
    gcTime: 5 * 60 * 1e3,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  }), g = c.filter((h) => h.isActive !== false), y = () => {
    d.current && d.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  }, f = () => {
    d.current && d.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };
  return i ? e.jsx("section", {
    className: "bg-white py-8",
    children: e.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [e.jsx("div", {
        className: "flex items-center justify-between mb-6",
        children: e.jsx($, {
          className: "h-8 w-48"
        })
      }), e.jsx("div", {
        className: "flex space-x-4 overflow-hidden",
        children: [...Array(10)].map((h, l) => e.jsxs("div", {
          className: "flex-none w-64",
          children: [e.jsx($, {
            className: "h-48 w-full rounded-lg mb-4"
          }), e.jsx($, {
            className: "h-6 w-3/4 mb-2"
          }), e.jsx($, {
            className: "h-4 w-1/2"
          })]
        }, l))
      })]
    })
  }) : g.length === 0 ? null : e.jsx("section", {
    className: "bg-white py-8 border-b border-gray-200",
    children: e.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [e.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [e.jsx("h2", {
          className: "text-2xl font-bold text-gray-900",
          children: "Popular Meals"
        }), e.jsxs("div", {
          className: "hidden md:flex space-x-2",
          children: [e.jsx("button", {
            onClick: y,
            className: "p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
            "aria-label": "Scroll left",
            children: e.jsx(le, {
              className: "h-5 w-5"
            })
          }), e.jsx("button", {
            onClick: f,
            className: "p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
            "aria-label": "Scroll right",
            children: e.jsx(ae, {
              className: "h-5 w-5"
            })
          })]
        })]
      }), e.jsx("div", {
        ref: d,
        className: "flex space-x-4 overflow-x-auto scrollbar-hide pb-4",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: g.map((h) => e.jsx("div", {
          className: "flex-none w-64",
          children: e.jsx(je, {
            product: h,
            outletId: s
          })
        }, h.id))
      })]
    })
  });
}
function Be({
  category: s,
  outletId: d,
  onCategoryClick: c
}) {
  const i = n.useRef(null), {
    data: g = [],
    isLoading: y
  } = W({
    queryKey: ["/api/products", s.id, d],
    queryFn: () => __async(null, null, function* () {
      const t = new URLSearchParams();
      t.append("categoryId", s.id.toString()), d && t.append("outletId", d.toString());
      const u = yield fetch(`/api/products?${t.toString()}`);
      if (!u.ok) throw new Error("Failed to fetch products");
      return u.json();
    }),
    enabled: !!d,
    staleTime: 6e4,
    gcTime: 5 * 60 * 1e3,
    refetchOnMount: false
  }), f = [...g].filter((t) => t.isActive !== false).sort((t, u) => (t.sortOrder || 999) - (u.sortOrder || 999)).slice(0, 10), h = () => {
    i.current && i.current.scrollBy({
      left: -300,
      behavior: "smooth"
    });
  }, l = () => {
    i.current && i.current.scrollBy({
      left: 300,
      behavior: "smooth"
    });
  };
  return f.length === 0 ? null : e.jsx("section", {
    className: "bg-white py-8 border-b border-gray-200",
    children: e.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [e.jsxs("div", {
        className: "flex items-center justify-between mb-6",
        children: [e.jsxs("div", {
          className: "flex items-center space-x-4",
          children: [e.jsx("h2", {
            className: "text-2xl font-bold text-gray-900",
            children: s.name
          }), e.jsxs("button", {
            onClick: () => c(s.id),
            className: "flex items-center text-red-600 hover:text-red-700 font-medium text-sm transition-colors",
            children: ["View All", e.jsx(Ue, {
              className: "h-4 w-4 ml-1"
            })]
          })]
        }), e.jsxs("div", {
          className: "hidden md:flex space-x-2",
          children: [e.jsx("button", {
            onClick: h,
            className: "p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
            "aria-label": "Scroll left",
            children: e.jsx(le, {
              className: "h-5 w-5"
            })
          }), e.jsx("button", {
            onClick: l,
            className: "p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors",
            "aria-label": "Scroll right",
            children: e.jsx(ae, {
              className: "h-5 w-5"
            })
          })]
        })]
      }), y ? e.jsx("div", {
        className: "flex space-x-4 overflow-hidden",
        children: [...Array(4)].map((t, u) => e.jsxs("div", {
          className: "flex-none w-64",
          children: [e.jsx($, {
            className: "h-48 w-full rounded-lg mb-4"
          }), e.jsx($, {
            className: "h-6 w-3/4 mb-2"
          }), e.jsx($, {
            className: "h-4 w-1/2"
          })]
        }, u))
      }) : e.jsx("div", {
        ref: i,
        className: "flex space-x-4 overflow-x-auto scrollbar-hide pb-4",
        style: {
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: f.map((t) => e.jsx("div", {
          className: "flex-none w-64",
          children: e.jsx(je, {
            product: t,
            outletId: d
          })
        }, t.id))
      })]
    })
  });
}
const be = n.memo(({
  outletId: s,
  selectedCategory: d,
  onProductClick: c
}) => {
  const [i, g] = n.useState(null), [y, f] = n.useState(false), [h, l] = n.useState(null), [t, u] = n.useState(null), {
    data: o
  } = K(), {
    location: p
  } = re(), {
    addItem: M
  } = ne(), {
    scheduleDelivery: v
  } = X(), {
    toast: O
  } = Q(), A = (o == null ? void 0 : o.colorScheme) || "#F02819", S = (o == null ? void 0 : o.buttonColor) || "#FFFFFF", {
    data: T = [],
    isLoading: U
  } = W({
    queryKey: ["/api/products/vertical-list", s],
    queryFn: () => __async(null, null, function* () {
      const a = new URLSearchParams();
      s && a.append("outletId", s.toString());
      const m = yield fetch(`/api/products/vertical-list?${a.toString()}`);
      if (!m.ok) throw new Error("Failed to fetch products");
      return m.json();
    }),
    enabled: !!s,
    staleTime: 6e4,
    gcTime: 5 * 60 * 1e3,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  }), q = T.filter((a) => a.isActive !== false), r = d ? q.filter((a) => a.categoryId === d) : q;
  n.useEffect(() => {
    r.length > 0 && we(r, d ? "Category Products" : "All Products");
  }, [r, d]);
  const w = (a) => {
    var m;
    try {
      if (!s) {
        console.error("No outlet ID available for customization modal");
        return;
      }
      fe({
        id: a.id,
        name: a.name,
        price: ((m = a.basePrice) == null ? void 0 : m.toString()) || "0",
        description: a.description,
        category: {
          name: "Food"
        }
      }), g(__spreadProps(__spreadValues({}, a), {
        outletId: s,
        customizationGroups: []
      })), c(a);
    } catch (N) {
      console.error("Failed to open product modal:", N), g(__spreadProps(__spreadValues({}, a), {
        outletId: s,
        customizationGroups: []
      }));
    }
  }, D = (a) => {
    (i == null ? void 0 : i.id) === a.id && g((m) => m ? __spreadProps(__spreadValues({}, m), {
      customizationGroups: a.customizationGroups
    }) : null);
  }, _ = (a) => {
    l(a), u(i), g(null), f(true);
  }, k = (a, m) => {
    var z;
    const N = ((z = p == null ? void 0 : p.selectedOutlet) == null ? void 0 : z.id) || s || 0;
    v(a, m, N), f(false);
    const [b, F] = m.split(":").map(Number), I = b >= 12 ? "PM" : "AM", P = `${b > 12 ? b - 12 : b === 0 ? 12 : b}:${String(F).padStart(2, "0")} ${I}`;
    if (h) {
      const B = M(h);
      if (!B.success) O({
        title: "Cannot add item",
        description: B.error,
        variant: "destructive"
      });
      else {
        try {
          se({
            id: (t == null ? void 0 : t.id) || 0,
            name: (t == null ? void 0 : t.name) || "",
            price: (t == null ? void 0 : t.basePrice) || 0,
            description: (t == null ? void 0 : t.description) || "",
            category: {
              name: "Food"
            }
          }, h.quantity, h.customizations);
        } catch (J) {
          console.warn("Analytics tracking failed:", J);
        }
        O({
          title: "Added to cart",
          description: `Scheduled for ${a} at ${P}`
        });
      }
      l(null), u(null);
    }
  };
  return U ? e.jsx("div", {
    className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6",
    children: Array.from({
      length: 8
    }).map((a, m) => e.jsxs("div", {
      className: "bg-white rounded-lg shadow-sm border",
      children: [e.jsx($, {
        className: "w-full aspect-square rounded-t-lg"
      }), e.jsxs("div", {
        className: "p-2 sm:p-4",
        children: [e.jsx($, {
          className: "h-4 w-3/4 mb-1 sm:mb-2"
        }), e.jsx($, {
          className: "h-3 w-full mb-2 sm:mb-3 block sm:block"
        }), e.jsx($, {
          className: "h-4 w-1/2"
        })]
      })]
    }, m))
  }) : s ? r.length === 0 ? e.jsxs("div", {
    className: "text-center py-12",
    children: [e.jsx("p", {
      className: "text-gray-500",
      children: "No products available at this location"
    }), e.jsx("p", {
      className: "text-sm text-gray-400 mt-2",
      children: "Please try a different location or contact support"
    })]
  }) : e.jsxs(e.Fragment, {
    children: [e.jsx("div", {
      className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6",
      children: r.map((a) => {
        var _a;
        var F, I;
        const m = ((_a = (F = a.availability) == null ? void 0 : F.isAvailable) != null ? _a : true) && a.isActive !== false, N = ((I = a.availability) == null ? void 0 : I.priceOverride) || a.basePrice, b = a.effectiveOrderAvailabilityMode === "preorder_only";
        return e.jsxs("div", {
          className: `bg-white rounded-lg shadow-sm border cursor-pointer hover:shadow-md transition-shadow ${m ? "" : "opacity-80 cursor-not-allowed"}`,
          onClick: () => m && w(a),
          children: [e.jsxs("div", {
            className: "relative",
            children: [e.jsx(V, {
              src: a.imageUrl,
              alt: a.name,
              className: "w-full aspect-square object-cover rounded-t-lg"
            }), a.isGiftBox && e.jsx("div", {
              className: "absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg",
              children: "\u{1F381} Gift Box"
            }), b && !a.isGiftBox && e.jsx("div", {
              className: "absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg",
              children: "Pre-Order Only"
            }), !m && e.jsx("div", {
              className: "absolute inset-0 bg-black bg-opacity-60 rounded-t-lg flex items-center justify-center",
              children: e.jsx("span", {
                className: "text-white font-medium text-sm",
                children: "Out Of Stock"
              })
            })]
          }), e.jsxs("div", {
            className: "p-2 sm:p-4",
            children: [e.jsx("h3", {
              className: "text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2 leading-tight",
              children: a.name
            }), b && e.jsxs("p", {
              className: "text-xs text-orange-600 mb-1 sm:mb-2 flex items-center gap-1",
              children: [e.jsx("span", {
                children: "\u23F3"
              }), " Requires ", a.preorderLeadTimeHours || 24, "hr advance notice"]
            }), e.jsx("p", {
              className: "text-xs text-gray-500 mb-1 sm:mb-2 hidden sm:block leading-relaxed",
              children: a.description
            }), e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [e.jsxs("div", {
                children: [e.jsx("span", {
                  className: "text-xs text-gray-500 block sm:hidden",
                  children: "From"
                }), e.jsx("span", {
                  className: "text-sm sm:text-lg font-bold",
                  style: {
                    color: A
                  },
                  children: ce(N)
                })]
              }), e.jsx(R, {
                size: "sm",
                className: "hidden sm:inline-flex transition-opacity hover:opacity-90",
                style: {
                  backgroundColor: m ? b ? "#F97316" : S : void 0,
                  color: "#FFFFFF"
                },
                onClick: (H) => {
                  H.stopPropagation(), m && w(a);
                },
                disabled: !m,
                children: m ? b ? "Pre-Order" : "Add to Cart" : "Out of Stock"
              })]
            })]
          })]
        }, a.id);
      })
    }), i && e.jsx(oe, {
      product: __spreadProps(__spreadValues({}, i), {
        outletId: s
      }),
      isOpen: !!i,
      onClose: () => g(null),
      onCustomizationsLoad: D,
      onRequestSchedule: _
    }), e.jsx(ie, {
      isOpen: y,
      onClose: () => {
        f(false), l(null), u(null);
      },
      onConfirm: k,
      userLocation: p,
      leadTimeHours: (t == null ? void 0 : t.preorderLeadTimeHours) || 24,
      productName: t == null ? void 0 : t.name
    })]
  }) : e.jsx("div", {
    className: "text-center py-12",
    children: e.jsx("p", {
      className: "text-gray-500",
      children: "Please allow location access to view available products"
    })
  });
});
be.displayName = "VerticalProductsList";
function Ge({
  popup: s,
  isOpen: d,
  onClose: c
}) {
  var f;
  console.log("PopupModal rendered with popup:", s);
  const i = !!((f = s.linkRoute) != null && f.trim()), g = () => {
    console.log("Image clicked, linkRoute:", s.linkRoute), console.log("Full popup data:", s), i ? (console.log("Navigating to:", s.linkRoute), c(), setTimeout(() => {
      var h;
      window.location.href = ((h = s.linkRoute) == null ? void 0 : h.trim()) || "/";
    }, 100)) : console.log("No linkRoute defined - popup is image-only");
  }, y = () => {
    c();
  };
  return e.jsx(ze, {
    open: d,
    onOpenChange: y,
    children: e.jsxs(Re, {
      className: "max-w-md p-0 overflow-hidden",
      children: [e.jsx(R, {
        variant: "ghost",
        size: "sm",
        className: "absolute top-2 right-2 z-10 bg-white/80 hover:bg-white",
        onClick: y,
        children: e.jsx(te, {
          className: "h-4 w-4"
        })
      }), e.jsx("div", {
        className: "relative",
        children: e.jsxs("div", {
          className: i ? "cursor-pointer" : "cursor-default",
          onClick: g,
          role: i ? "button" : void 0,
          tabIndex: i ? 0 : void 0,
          onKeyDown: (h) => {
            i && (h.key === "Enter" || h.key === " ") && (h.preventDefault(), g());
          },
          children: [e.jsx("img", {
            src: s.imageUrl,
            alt: s.title || "Popup image",
            className: `w-full h-auto object-contain max-h-96 ${i ? "cursor-pointer" : "cursor-default"}`,
            onClick: g
          }), s.title && e.jsx("div", {
            className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4",
            children: e.jsx("h3", {
              className: "text-white font-semibold text-lg",
              children: s.title
            })
          })]
        })
      })]
    })
  });
}
function We({
  outletId: s
}) {
  const [d, c] = n.useState(null), [i, g] = n.useState(false), [y, f] = n.useState(null);
  n.useEffect(() => {
    (() => __async(null, null, function* () {
      if (s && y !== s) try {
        const t = yield fetch(`/api/popups/outlet/${s}`);
        if (t.ok) {
          const u = yield t.json();
          if (u) {
            const o = `popup_dismissed_${u.id}_outlet_${s}`;
            if (sessionStorage.getItem(o) === "true") return;
            c(u), g(true), f(s);
          }
        }
      } catch (t) {
        console.error("Failed to fetch popup:", t);
      }
    }))();
  }, [s, y]);
  const h = () => {
    if (d && s) {
      const l = `popup_dismissed_${d.id}_outlet_${s}`;
      sessionStorage.setItem(l, "true");
    }
    g(false);
  };
  return d ? e.jsx(Ge, {
    popup: d,
    isOpen: i,
    onClose: h
  }) : null;
}
const he = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2"
}, xe = {
  "top-right": {
    enter: "animate-in slide-in-from-right fade-in",
    exit: "animate-out slide-out-to-right fade-out"
  },
  "top-left": {
    enter: "animate-in slide-in-from-left fade-in",
    exit: "animate-out slide-out-to-left fade-out"
  },
  "bottom-right": {
    enter: "animate-in slide-in-from-right fade-in",
    exit: "animate-out slide-out-to-right fade-out"
  },
  "bottom-left": {
    enter: "animate-in slide-in-from-left fade-in",
    exit: "animate-out slide-out-to-left fade-out"
  },
  "top-center": {
    enter: "animate-in slide-in-from-top fade-in",
    exit: "animate-out slide-out-to-top fade-out"
  }
};
function He({
  notification: s,
  onClose: d
}) {
  var A;
  const {
    displayConfig: c
  } = s;
  if (!c) return null;
  const i = !!((A = s.ctaLink) != null && A.trim()), [g, y] = n.useState(100), [f, h] = n.useState(false), l = n.useRef(null), t = n.useRef(Date.now()), u = n.useCallback(() => {
    h(true), setTimeout(d, 300);
  }, [d]);
  n.useEffect(() => {
    try {
      if (!c || !c.autoDismiss) return;
      const S = c.dismissAfterSeconds * 1e3;
      return t.current = Date.now(), l.current = setInterval(() => {
        const T = Date.now() - t.current, U = Math.max(0, 100 - T / S * 100);
        y(U), U <= 0 && (l.current && clearInterval(l.current), u());
      }, 50), () => {
        l.current && clearInterval(l.current);
      };
    } catch (e) {
      console.error("Error in notification effect:", e);
    }
  }, [c && c.autoDismiss, c && c.dismissAfterSeconds, u]);
  const o = () => {
    i && (u(), setTimeout(() => {
      window.location.href = s.ctaLink.trim();
    }, 300));
  }, p = c.position || "top-right", M = he[p] || he["top-right"], v = xe[p] || xe["top-right"], O = f ? v.exit : v.enter;
  return e.jsx("div", {
    className: `fixed ${M} z-[9999] ${O} duration-300`,
    style: {
      maxWidth: c.displayStyle === "banner" ? "100vw" : "380px",
      width: c.displayStyle === "banner" ? "calc(100vw - 2rem)" : void 0
    },
    role: "alert",
    "aria-live": "assertive",
    children: e.jsxs("div", {
      className: `bg-white shadow-2xl border border-gray-200 overflow-hidden ${c.displayStyle === "slide-in" ? "rounded-xl" : "rounded-lg"}`,
      children: [c.displayStyle === "slide-in" && e.jsxs("div", {
        className: "bg-primary px-4 py-2 flex items-center justify-between",
        children: [e.jsxs("span", {
          className: "text-white text-sm font-medium flex items-center gap-2",
          children: [e.jsx(ue, {
            className: "h-4 w-4"
          }), " New Notification"]
        }), e.jsx("button", {
          onClick: u,
          className: "text-white/80 hover:text-white",
          children: e.jsx(te, {
            className: "h-4 w-4"
          })
        })]
      }), e.jsxs("div", {
        className: c.displayStyle === "banner" ? "flex items-center gap-4 p-3" : "p-0",
        children: [s.imageUrl && c.displayStyle !== "banner" && e.jsx("img", {
          src: s.imageUrl,
          alt: s.title,
          className: "w-full h-auto object-cover max-h-40"
        }), s.imageUrl && c.displayStyle === "banner" && e.jsx("img", {
          src: s.imageUrl,
          alt: s.title,
          className: "w-12 h-12 object-cover rounded-lg flex-shrink-0"
        }), e.jsxs("div", {
          className: c.displayStyle === "banner" ? "flex-1 min-w-0" : "p-4",
          children: [e.jsxs("div", {
            className: "flex items-start justify-between gap-2",
            children: [e.jsxs("div", {
              className: "flex items-center gap-2 min-w-0",
              children: [c.displayStyle !== "slide-in" && e.jsx(ue, {
                className: "h-4 w-4 text-primary flex-shrink-0"
              }), e.jsx("h4", {
                className: "font-semibold text-sm truncate",
                children: s.title
              })]
            }), c.displayStyle !== "slide-in" && e.jsx("button", {
              onClick: u,
              className: "text-gray-400 hover:text-gray-600 flex-shrink-0 p-0.5",
              children: e.jsx(te, {
                className: "h-4 w-4"
              })
            })]
          }), s.content && e.jsx("p", {
            className: "text-muted-foreground text-xs mt-1 line-clamp-2",
            children: s.content
          }), i && e.jsx(R, {
            size: "sm",
            className: c.displayStyle === "banner" ? "mt-0 ml-2 h-7 text-xs" : "mt-3 h-8 text-xs w-full",
            onClick: o,
            children: s.ctaLabel || "View"
          })]
        })]
      }), c.autoDismiss && e.jsx("div", {
        className: "h-1 bg-gray-100",
        children: e.jsx("div", {
          className: "h-full bg-primary transition-all duration-100 ease-linear",
          style: {
            width: `${g}%`
          }
        })
      })]
    })
  });
}
const Ve = {
  position: "top-right",
  autoDismiss: true,
  dismissAfterSeconds: 10,
  showOnInactiveTab: true,
  displayStyle: "toast",
  webEnabled: true
};
function Ke({
  outletId: s
}) {
  const [d, c] = n.useState(null), [i, g] = n.useState(false), [y, f] = n.useState(null);
  n.useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const l = (t) => {
      var u, o, p, M;
      if (((u = t.data) == null ? void 0 : u.type) === "PUSH_NOTIFICATION") {
        const v = t.data.payload, O = (o = v.data) == null ? void 0 : o.campaignId, A = {
          id: O ? Number(O) : Date.now(),
          title: v.title || "Notification",
          content: v.body || null,
          imageUrl: v.image || null,
          ctaLabel: (p = v.data) != null && p.url ? "View" : null,
          ctaLink: ((M = v.data) == null ? void 0 : M.url) || null,
          displayConfig: Ve
        };
        c(A), g(true);
      }
    };
    return navigator.serviceWorker.addEventListener("message", l), () => navigator.serviceWorker.removeEventListener("message", l);
  }, []), n.useEffect(() => {
    (() => __async(null, null, function* () {
      var t;
      if (s && y !== s) try {
        const u = yield fetch(`/api/campaigns/notifications/${s}`);
        if (u.ok) {
          const o = yield u.json();
          if (o && ((t = o.displayConfig) == null ? void 0 : t.webEnabled) !== false) {
            const p = `campaign_notif_dismissed_${o.id}_outlet_${s}`;
            if (sessionStorage.getItem(p) === "true") return;
            c(o), f(s), g(true);
          }
        }
      } catch (u) {
        console.error("Failed to fetch campaign notification:", u);
      }
    }))();
  }, [s, y]);
  const h = () => {
    if (d && s) {
      const l = `campaign_notif_dismissed_${d.id}_outlet_${s}`;
      sessionStorage.setItem(l, "true");
    }
    g(false);
  };
  return !d || !i ? null : e.jsx(He, {
    notification: d,
    onClose: h
  });
}
function Kt() {
  var _a, _b, _c, _d, _e2, _f, _g;
  var de, me;
  const s = Ne(), [d] = pe(), [i, g] = n.useState(null), [y, f] = n.useState(false), [h, l] = n.useState(false), [t, u] = n.useState(null), [o, p] = n.useState(false), [M, v] = n.useState(false), {
    toast: S
  } = Q();
  Se();
  const {
    scheduledDelivery: T,
    scheduleDelivery: U,
    clearScheduledDelivery: q
  } = X(), {
    data: r
  } = K(), w = t == null ? void 0 : t.selectedOutlet, D = (w == null ? void 0 : w.isActive) !== false, _ = w && qe({
    openTime: (_b = (_a = w.openTime) != null ? _a : w.opening_time) != null ? _b : "",
    closeTime: (_d = (_c = w.closeTime) != null ? _c : w.closing_time) != null ? _d : "",
    daysOpen: (_f = (_e2 = w.daysOpen) != null ? _e2 : w.days_open) != null ? _f : [],
    isActive: D
  }), {
    data: k = []
  } = W({
    queryKey: ["/api/outlets"],
    queryFn: ee({
      on401: "throw"
    }),
    enabled: !!w,
    refetchInterval: w ? 6e4 : false,
    refetchOnWindowFocus: false,
    staleTime: 6e4
  });
  n.useEffect(() => {
    if (!(t != null && t.selectedOutlet) || !Array.isArray(k) || k.length === 0) return;
    const x = k.find((L) => {
      var G;
      return Number(L.id) === Number((G = t.selectedOutlet) == null ? void 0 : G.id);
    });
    if (!x) return;
    const j = t.selectedOutlet;
    if (!(j.isActive !== x.isActive || j.openTime !== x.openTime || j.closeTime !== x.closeTime || JSON.stringify(j.daysOpen) !== JSON.stringify(x.daysOpen))) return;
    const C = __spreadProps(__spreadValues({}, t), {
      selectedOutlet: x
    });
    u(C), localStorage.setItem("user-location", JSON.stringify(C)), window.dispatchEvent(new CustomEvent("location-change", {
      detail: C
    }));
  }, [k, t]);
  const a = n.useMemo(() => {
    const x = !r || r.name === "EatYum" ? "/eatyum-logo.png" : "/logo.png", j = (r == null ? void 0 : r.logoLightUrl) || (r == null ? void 0 : r.logoDarkUrl) || (r == null ? void 0 : r.logoUrl) || x, E = (r == null ? void 0 : r.logoDarkUrl) || j;
    return {
      light: j,
      dark: E
    };
  }, [r == null ? void 0 : r.logoDarkUrl, r == null ? void 0 : r.logoLightUrl, r == null ? void 0 : r.logoUrl, r == null ? void 0 : r.name]);
  n.useEffect(() => {
    i !== null && window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [i]);
  const N = () => {
    l(true);
  };
  const {
    data: b = []
  } = W({
    queryKey: ["/api/categories"],
    queryFn: ee({
      on401: "throw"
    })
  }), {
    data: F,
    error: I,
    isLoading: H
  } = W({
    queryKey: ["/api/homepage-layout"],
    queryFn: () => __async(null, null, function* () {
      const x = yield fetch("/api/homepage-layout");
      if (!x.ok) throw new Error("Failed to fetch homepage layout");
      return x.json();
    }),
    staleTime: 5 * 60 * 1e3,
    gcTime: 10 * 60 * 1e3
  }), P = (F == null ? void 0 : F.layout) === "vertical_list";
  n.useEffect(() => {
    const x = s.partnerSlug;
    x && (() => __async(null, null, function* () {
      try {
        let E = localStorage.getItem("visitor-session-id");
        E || (E = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, localStorage.setItem("visitor-session-id", E)), sessionStorage.setItem("partner-slug", x);
        const C = yield fetch("/api/partners/visit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            partnerSlug: x,
            sessionId: E,
            userAgent: navigator.userAgent
          })
        });
        if (C.ok) {
          const L = yield C.json();
          console.log("Partner visit tracked:", L);
        }
      } catch (E) {
        console.error("Failed to track partner visit:", E);
      }
    }))();
  }, [s.partnerSlug]), n.useEffect(() => {
    (() => __async(null, null, function* () {
      try {
        const C = yield fetch("/api/location/nearest-outlet");
        if (C.ok) {
          const L = yield C.json();
          if (L && L.id) {
            const G = {
              latitude: L.latitude || 0,
              longitude: L.longitude || 0,
              selectedOutlet: L,
              distance: L.distance || 0
            };
            u(G);
            try {
              localStorage.setItem("user-location", JSON.stringify(G));
            } catch (e) {
              console.error("Failed to save location to localStorage:", e);
            }
          }
        }
      } catch (E) {
        console.error("Failed to load outlet:", E);
      }
    }))();
  }, []), console.log("Homepage layout debug:", {
    homepageLayoutSettings: F,
    layout: F == null ? void 0 : F.layout,
    isVerticalLayout: P,
    layoutError: I,
    layoutLoading: H,
    queryFn: ee
  }), n.useEffect(() => {
    try {
      ke({
        item_category: "food",
        uuid_c1: "homepage"
      }), Ce("Homepage", {
        content_type: "page",
        content_name: `${(r == null ? void 0 : r.name) || "EatYum"} Food Delivery Homepage`,
        content_category: "homepage"
      }), Fe("Homepage");
    } catch (x) {
      console.warn("Page view tracking error:", x);
    }
  }, []);
  const z = (x) => __async(null, null, function* () {
    var j;
    try {
      const E = yield fetch("/api/location/nearest-outlet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          latitude: x.latitude,
          longitude: x.longitude
        })
      });
      let C = null;
      E.ok && (C = yield E.json());
      const L = __spreadProps(__spreadValues({}, x), {
        selectedOutlet: C,
        distance: C == null ? void 0 : C.distance
      }), G = (j = t == null ? void 0 : t.selectedOutlet) == null ? void 0 : j.id, Z = C == null ? void 0 : C.id;
      u(L), localStorage.setItem("user-location", JSON.stringify(L)), G && Z && G !== Z && window.dispatchEvent(new CustomEvent("outlet-changed", {
        detail: {
          previousOutletId: G,
          newOutletId: Z
        }
      })), window.dispatchEvent(new CustomEvent("location-change", {
        detail: L
      }));
    } catch (E) {
      console.error("Failed to set location:", E);
    }
  });
  const B = () => {
    p(false), v(true);
  }, J = (x, j) => {
    t != null && t.selectedOutlet && (U(x, j, t.selectedOutlet.id), v(false), S({
      title: "Delivery Scheduled",
      description: `Your order will be delivered on ${x} at ${j}`
    }));
  };
  return e.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [e.jsx(Oe, {
      onCartClick: () => f(true),
      userLocation: t,
      onLocationClick: () => l(true)
    }), e.jsx(ge, {}), T && (t == null ? void 0 : t.selectedOutlet) && e.jsx(Ae, {
      scheduledDate: T.date,
      scheduledTime: T.time,
      onChangeSchedule: () => v(true),
      onRemoveSchedule: q
    }), (t == null ? void 0 : t.selectedOutlet) && e.jsxs(e.Fragment, {
      children: [e.jsx(ye, {
        selectedCategory: i,
        onCategorySelect: g
      }), e.jsx("div", {
        className: "bg-white border-b border-gray-200",
        children: e.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
          children: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [e.jsxs("div", {
              className: "flex items-center space-x-3",
              children: [e.jsx("div", {
                className: ["w-2 h-2 rounded-full", D ? _ ? "bg-green-500" : "bg-red-500" : "bg-gray-400"].join(" ")
              }), e.jsxs("div", {
                children: [e.jsx("h2", {
                  className: "text-lg font-semibold text-gray-900",
                  children: t.selectedOutlet.name
                }), e.jsx("p", {
                  className: "text-sm text-gray-600",
                  children: t.selectedOutlet.address
                })]
              })]
            }), e.jsxs("div", {
              className: "text-right",
              children: [e.jsx("p", {
                className: ["text-sm font-medium", D ? _ ? "text-green-600" : "text-red-600" : "text-gray-600"].join(" "),
                children: D ? _ ? "Open for delivery" : "Closed" : "Inactive"
              }), e.jsx("p", {
                className: "text-xs text-gray-500",
                children: t.distance != null ? `${t.distance} km away` : ""
              })]
            })]
          })
        })
      }), P ? e.jsx("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: e.jsx(be, {
          outletId: t.selectedOutlet.id,
          selectedCategory: i,
          onProductClick: (x) => {
            console.log("Product clicked:", x);
          }
        })
      }) : i ? e.jsx("main", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
        children: e.jsx(ve, {
          selectedCategory: i,
          outletId: t.selectedOutlet.id
        })
      }) : e.jsxs("main", {
        className: "bg-gray-50",
        children: [e.jsx(Pe, {
          outletId: t.selectedOutlet.id
        }), b.filter((x) => x.isActive !== false).sort((x, j) => (x.sortOrder || 999) - (j.sortOrder || 999)).map((x) => e.jsx(Be, {
          category: x,
          outletId: t.selectedOutlet.id,
          onCategoryClick: g
        }, x.id))]
      })]
    }), e.jsx($e, {
      onClick: () => f(true)
    }), e.jsx(De, {}), e.jsx(Ee, {
      isOpen: y,
      onClose: () => f(false)
    }), e.jsx(Ie, {
      isOpen: h,
      onClose: () => l(false),
      onLocationSelected: z,
      preventClose: false
    }), e.jsx(We, {
      outletId: ((de = t == null ? void 0 : t.selectedOutlet) == null ? void 0 : de.id) || null
    }), e.jsx(Ke, {
      outletId: ((me = t == null ? void 0 : t.selectedOutlet) == null ? void 0 : me.id) || null
    }), e.jsx(Me, {
      isOpen: o,
      onClose: () => p(false),
      onScheduleDelivery: B,
      userLocation: t
    }), e.jsx(_e, {
      isOpen: M,
      onClose: () => v(false),
      onConfirm: J,
      userLocation: t
    }), e.jsx("footer", {
      className: "bg-black text-gray-400 py-16 mt-16",
      children: e.jsxs("div", {
        className: "max-w-6xl mx-auto px-6",
        children: [e.jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-12 mb-12",
          children: [e.jsxs("div", {
            children: [e.jsx("h3", {
              className: "text-white font-semibold mb-4 text-sm tracking-wide",
              children: "MENU"
            }), e.jsxs("ul", {
              className: "space-y-3 text-xs",
              children: [e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "All Items"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Categories"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Popular"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Special Offers"
                })
              })]
            })]
          }), e.jsxs("div", {
            children: [e.jsx("h3", {
              className: "text-white font-semibold mb-4 text-sm tracking-wide",
              children: "SUPPORT"
            }), e.jsxs("ul", {
              className: "space-y-3 text-xs",
              children: [e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Help Center"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Contact Us"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Delivery Info"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "FAQ"
                })
              })]
            })]
          }), e.jsxs("div", {
            children: [e.jsx("h3", {
              className: "text-white font-semibold mb-4 text-sm tracking-wide",
              children: "COMPANY"
            }), e.jsxs("ul", {
              className: "space-y-3 text-xs",
              children: [e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "About Us"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Our Story"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Locations"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Careers"
                })
              })]
            })]
          }), e.jsxs("div", {
            children: [e.jsx("h3", {
              className: "text-white font-semibold mb-4 text-sm tracking-wide",
              children: "LEGAL"
            }), e.jsxs("ul", {
              className: "space-y-3 text-xs",
              children: [e.jsx("li", {
                children: e.jsx("a", {
                  href: "/terms-of-service",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Terms of Service"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Privacy Policy"
                })
              }), e.jsx("li", {
                children: e.jsx("a", {
                  href: "/",
                  className: "hover:text-white transition-colors duration-200",
                  children: "Refund Policy"
                })
              }), (r == null ? void 0 : r.supportEmail) && e.jsx("li", {
                children: e.jsx("a", {
                  href: `mailto:${r.supportEmail}`,
                  className: "hover:text-white transition-colors duration-200",
                  children: r.supportEmail
                })
              })]
            })]
          })]
        }), e.jsxs("div", {
          className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center",
          children: [e.jsxs("p", {
            className: "text-xs",
            children: ["\xA9 2025 ", (r == null ? void 0 : r.name) || "EatYum", ". All rights reserved."]
          }), e.jsx("div", {
            className: "flex items-center space-x-6 mt-4 md:mt-0",
            children: e.jsx("a", {
              href: "/",
              className: "text-gray-400 hover:text-white transition-colors duration-200",
              children: "Order Now"
            })
          })]
        })]
      })
    })]
  });
}
export {
  Kt as default
};
