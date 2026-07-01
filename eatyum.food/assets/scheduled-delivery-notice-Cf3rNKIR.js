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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import {
  r as x,
  j as e,
  w as $,
  a as M,
  av as U,
  B as S,
  X as T,
  L as V
} from "./index-DOfu0sXg.js";
import {
  a as I,
  b as W
} from "./use-scheduled-delivery-QXJaYNqy.js";
import {
  S as P
} from "./shopping-cart-C1hOzoyN.js";
import {
  C as z
} from "./calendar-DfgMOSD7.js";
import {
  T as Q
} from "./trash-2-MFuZdLCA.js";
import {
  M as X
} from "./minus-zDmsn0vk.js";
import {
  P as _
} from "./plus-xl2HqeIg.js";
import {
  f as G
} from "./currency-cZDvJQzL.js";
import {
  D as A,
  a as O,
  b as J,
  c as K
} from "./dialog-BUvIuveX.js";
import {
  g as Z
} from "./outlet-utils-Dqa2FQkG.js";
import {
  S as L
} from "./store-Cr0AuVYD.js";
import {
  j as E
} from "./timezone-utils-D5P8NMTs.js";
import {
  T as ee
} from "./triangle-alert-BZPq43t0.js";
import {
  C as te
} from "./clock-DQ0X7PrC.js";
function ge({
  src: u,
  alt: f,
  className: l,
  placeholder: s = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E",
  onLoad: d,
  onError: n
}) {
  const [i, c] = x.useState(false), [g, C] = x.useState(false), [m, p] = x.useState(false), j = x.useRef(null);
  x.useEffect(() => {
    const a = new IntersectionObserver(([h]) => {
      h.isIntersecting && (C(true), a.unobserve(h.target));
    }, {
      threshold: 0.1
    });
    return j.current && a.observe(j.current), () => a.disconnect();
  }, []);
  const D = () => {
    c(true), d == null || d();
  }, b = () => {
    p(true), n == null || n();
  };
  return e.jsxs("div", {
    ref: j,
    className: $("relative overflow-hidden", l),
    children: [!g && e.jsx("img", {
      src: s,
      alt: "",
      className: "w-full h-full object-cover blur-sm"
    }), g && e.jsx("img", {
      src: m ? s : u,
      alt: f,
      onLoad: D,
      onError: b,
      className: $("w-full h-full object-cover transition-opacity duration-300", i ? "opacity-100" : "opacity-0")
    })]
  });
}
const pe = ({
  isOpen: u,
  onClose: f
}) => {
  const {
    cart: l,
    updateItemQuantity: s,
    removeItem: d,
    loading: n
  } = I(), {
    data: i
  } = M(), {
    scheduledDelivery: c
  } = W(), g = (i == null ? void 0 : i.colorScheme) || "#F02819", C = (i == null ? void 0 : i.buttonColor) || "#FFFFFF", m = x.useMemo(() => {
    var _a;
    return (_a = l.items) != null ? _a : [];
  }, [l.items]);
  x.useEffect(() => {
    u && m.length > 0 && U(m);
  }, [u, m]);
  const p = (a) => `\u20A6${(a || 0).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, j = (a, h) => {
    const r = /* @__PURE__ */ new Map();
    return a.forEach((t) => {
      if (!t) return;
      const o = t.groupName || "Extras", v = t.optionName || "Extra", N = Number(t.priceModifier || 0), w = typeof t.quantity == "number" && t.quantity > 0 ? t.quantity : 1, y = `${o}|${v}|${N}`, F = r.get(y) || {
        category: o,
        name: v,
        unitPrice: N,
        quantityBase: 0
      };
      F.quantityBase += w, r.set(y, F);
    }), Array.from(r.values()).map((t) => ({
      category: t.category,
      name: t.name,
      unitPrice: t.unitPrice,
      quantity: t.quantityBase * Math.max(1, h || 1)
    }));
  }, D = (a, h) => {
    if (!a) return [];
    const r = /* @__PURE__ */ new Map();
    return a.forEach((t) => {
      if (!t) return;
      const o = t.groupName || t.categoryName || "Add-ons", v = t.addonName || t.name || "Add-on", N = Number(t.price || 0), w = typeof t.quantity == "number" && t.quantity > 0 ? t.quantity : 1, y = `${o}|${v}|${N}`, F = r.get(y) || {
        category: o,
        name: v,
        unitPrice: N,
        quantityBase: 0
      };
      F.quantityBase += w, r.set(y, F);
    }), Array.from(r.values()).map((t) => ({
      category: t.category,
      name: t.name,
      unitPrice: t.unitPrice,
      quantity: t.quantityBase * Math.max(1, h || 1)
    }));
  }, b = (a) => {
    const h = [...j(a.customizations, a.quantity), ...D(a.addons, a.quantity)].filter((t) => t.quantity > 0), r = /* @__PURE__ */ new Map();
    return h.forEach((t) => {
      const o = r.get(t.category) || [];
      o.push(t), r.set(t.category, o);
    }), r;
  };
  return e.jsxs(e.Fragment, {
    children: [u && e.jsx("div", {
      className: "fixed inset-0 bg-black bg-opacity-50 z-[55]",
      onClick: f
    }), e.jsx("div", {
      className: `cart-sidebar ${u ? "cart-open" : "cart-closed"}`,
      children: e.jsxs("div", {
        className: "flex flex-col h-full",
        children: [e.jsxs("div", {
          className: "flex items-center justify-between p-4 border-b",
          children: [e.jsx("h2", {
            className: "text-lg font-semibold",
            children: "Your Order"
          }), e.jsx(S, {
            variant: "ghost",
            size: "sm",
            onClick: f,
            children: e.jsx(T, {
              className: "w-4 h-4"
            })
          })]
        }), e.jsx("div", {
          className: "flex-1 overflow-y-auto p-4",
          children: m.length === 0 ? e.jsxs("div", {
            className: "text-center text-gray-500 py-8",
            children: [e.jsx(P, {
              className: "w-16 h-16 mx-auto mb-4 text-gray-300"
            }), e.jsx("p", {
              children: "Your cart is empty"
            })]
          }) : e.jsxs("div", {
            className: "space-y-4",
            children: [c && m.some((a) => a.orderAvailabilityMode === "preorder_only") && e.jsxs("div", {
              className: "flex items-center gap-2 p-3 bg-orange-50 border border-orange-200 rounded-lg",
              children: [e.jsx(z, {
                className: "w-4 h-4 text-orange-500 flex-shrink-0"
              }), e.jsxs("p", {
                className: "text-sm text-orange-800",
                children: [e.jsx("span", {
                  className: "font-medium",
                  children: "Scheduled order"
                }), " for ", c.date, " at ", c.time]
              })]
            }), m.map((a) => e.jsxs("div", {
              className: "bg-gray-50 rounded-lg p-4",
              children: [e.jsxs("div", {
                className: "flex items-start justify-between mb-2",
                children: [e.jsx("h3", {
                  className: "font-semibold text-sm",
                  children: a.name
                }), a.id !== -999 && e.jsx(S, {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => d(a.id),
                  title: "Remove item",
                  children: e.jsx(Q, {
                    className: "w-4 h-4 text-red-500"
                  })
                })]
              }), (a.customizations.length > 0 || a.addons && a.addons.length > 0) && e.jsx("div", {
                className: "text-xs text-gray-600 mb-2 space-y-2",
                children: Array.from(b(a).entries()).map(([h, r]) => e.jsxs("div", {
                  className: "space-y-1",
                  children: [e.jsx("div", {
                    className: "font-medium text-gray-700",
                    children: h
                  }), r.map((t, o) => {
                    const v = t.unitPrice * t.quantity;
                    return e.jsxs("div", {
                      className: "flex justify-between",
                      children: [e.jsxs("span", {
                        children: [t.name, " \xD7", t.quantity]
                      }), e.jsx("span", {
                        children: p(v)
                      })]
                    }, `${h}-${o}`);
                  })]
                }, h))
              }), e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [a.id === -999 ? e.jsx("span", {
                  className: "text-xs font-semibold px-2.5 py-1 bg-green-100 text-green-800 rounded-full",
                  children: "Free Gift"
                }) : e.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [e.jsx(S, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => s(a.id, a.quantity - 1),
                    children: e.jsx(X, {
                      className: "w-3 h-3"
                    })
                  }), e.jsx("span", {
                    className: "w-8 text-center",
                    children: a.quantity
                  }), e.jsx(S, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => s(a.id, a.quantity + 1),
                    children: e.jsx(_, {
                      className: "w-3 h-3"
                    })
                  })]
                }), e.jsxs("span", {
                  className: "font-semibold",
                  style: {
                    color: g
                  },
                  children: ["\u20A6", a.totalPrice.toLocaleString()]
                })]
              })]
            }, a.id))]
          })
        }), m.length > 0 && e.jsxs("div", {
          className: "border-t p-4",
          children: [e.jsxs("div", {
            className: "space-y-2 mb-4",
            children: [e.jsxs("div", {
              className: "flex justify-between text-sm",
              children: [e.jsx("span", {
                children: "Subtotal:"
              }), e.jsx("span", {
                children: p(l.subtotal)
              })]
            }), (l.discount || 0) > 0 && e.jsxs("div", {
              className: "flex justify-between text-sm text-green-600",
              children: [e.jsx("span", {
                children: "Discount:"
              }), e.jsxs("span", {
                children: ["-", p(l.discount)]
              })]
            }), l.freeItem && e.jsxs("div", {
              className: "flex justify-between text-sm text-green-600",
              children: [e.jsx("span", {
                children: "Free Item:"
              }), e.jsx("span", {
                children: l.freeItem.name
              })]
            }), e.jsxs("div", {
              className: "flex justify-between font-semibold",
              children: [e.jsx("span", {
                children: "Total:"
              }), e.jsx("span", {
                style: {
                  color: g
                },
                children: p(l.total)
              })]
            }), l.qualifiesForFreeDelivery ? e.jsx("div", {
              className: "text-xs text-green-600 mt-2 bg-green-50 p-2 rounded",
              children: "\u2705 You qualify for free delivery!"
            }) : l.remainingForFreeDelivery && l.remainingForFreeDelivery <= 1e4 ? e.jsxs("div", {
              className: "text-xs text-blue-600 mt-2 bg-blue-50 p-2 rounded",
              children: ["\u{1F69A} Add ", p(l.remainingForFreeDelivery), " more for free delivery"]
            }) : e.jsx("div", {
              className: "text-xs text-gray-500 mt-1",
              children: "*Delivery fee calculated at checkout"
            })]
          }), e.jsx(V, {
            href: "/checkout",
            onClick: f,
            children: e.jsx(S, {
              className: "w-full transition-opacity hover:opacity-90",
              style: {
                backgroundColor: C,
                color: "#FFFFFF"
              },
              disabled: n || m.length === 0,
              children: n ? "Loading..." : "Proceed to Checkout"
            })
          })]
        })]
      })
    })]
  });
}, ye = ({
  onClick: u
}) => {
  const {
    cart: f,
    itemCount: l
  } = I(), {
    data: s
  } = M(), d = (s == null ? void 0 : s.colorScheme) || "#F02819", n = (s == null ? void 0 : s.buttonColor) || "#FFFFFF";
  return l === 0 ? null : e.jsx("div", {
    className: "floating-cart",
    onClick: u,
    style: {
      backgroundColor: n,
      color: "#FFFFFF"
    },
    children: e.jsxs("div", {
      className: "flex items-center",
      children: [e.jsx(P, {
        className: "w-5 h-5 mr-2"
      }), e.jsx("span", {
        className: "font-medium",
        children: G(f.total)
      }), e.jsx("span", {
        className: "ml-2 bg-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold",
        style: {
          color: d
        },
        children: l
      })]
    })
  });
};
function be({
  isOpen: u,
  onClose: f,
  onScheduleDelivery: l,
  userLocation: s
}) {
  const [d, n] = x.useState("");
  return x.useEffect(() => {
    if (!(s != null && s.selectedOutlet) || !u) return;
    const i = () => {
      const g = Z(s.selectedOutlet);
      n(g || "Closed");
    };
    i();
    const c = setInterval(i, 1e3);
    return () => clearInterval(c);
  }, [s == null ? void 0 : s.selectedOutlet, u]), s != null && s.selectedOutlet ? e.jsx(A, {
    open: u,
    onOpenChange: f,
    children: e.jsxs(O, {
      className: "sm:max-w-md mx-4 rounded-2xl",
      children: [e.jsxs("button", {
        onClick: f,
        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
        children: [e.jsx(T, {
          className: "h-4 w-4"
        }), e.jsx("span", {
          className: "sr-only",
          children: "Close"
        })]
      }), e.jsxs("div", {
        className: "flex flex-col items-center text-center py-6",
        children: [e.jsx("div", {
          className: "w-24 h-24 mb-6 relative",
          children: e.jsxs("div", {
            className: "w-full h-full bg-gray-100 rounded-lg flex items-center justify-center relative",
            children: [e.jsx(L, {
              className: "w-12 h-12 text-gray-600"
            }), e.jsx("div", {
              className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium",
              children: "CLOSED"
            }), e.jsx("div", {
              className: "absolute bottom-0 left-0 right-0 h-6 bg-gray-800 rounded-b-lg"
            }), e.jsx("div", {
              className: "absolute top-3 left-3 right-3 h-8 bg-white rounded border-2 border-gray-300"
            }), e.jsx("div", {
              className: "absolute top-3 right-3 w-6 h-8 bg-white rounded border-2 border-gray-300"
            })]
          })
        }), e.jsx("h2", {
          className: "text-2xl font-semibold text-gray-900 mb-2",
          children: d && `Opens ${d}`
        }), e.jsx("p", {
          className: "text-gray-600 mb-8 max-w-sm leading-relaxed",
          children: "We are closed currently. Would you like to schedule a delivery ahead of time?"
        }), e.jsx(S, {
          onClick: l,
          className: "w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-medium transition-colors",
          children: "Schedule delivery or pickup"
        })]
      })]
    })
  }) : null;
}
function je({
  isOpen: u,
  onClose: f,
  onConfirm: l,
  userLocation: s,
  hasGiftBoxItems: d = false
}) {
  const [n, i] = x.useState(""), [c, g] = x.useState(""), [C, m] = x.useState([]), [p, j] = x.useState([]), [D, b] = x.useState(false);
  x.useEffect(() => {
    var N;
    const r = [], t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0);
    const o = d ? 2 : 0, v = 7;
    for (let w = 0; w < v; w++) {
      const y = new Date(t);
      y.setDate(t.getDate() + o + w);
      const F = y.getFullYear(), B = String(y.getMonth() + 1).padStart(2, "0"), R = String(y.getDate()).padStart(2, "0"), H = `${F}-${B}-${R}`;
      let k;
      const q = o + w;
      q === 0 ? k = "Today" : q === 1 ? k = "Tomorrow" : k = y.toLocaleDateString("en-US", {
        weekday: "long"
      });
      const Y = y.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
      });
      r.push({
        date: H,
        label: k,
        shortLabel: Y
      });
    }
    m(r), i(((N = r[0]) == null ? void 0 : N.date) || "");
  }, [d]), x.useEffect(() => {
    if (!n || !(s != null && s.selectedOutlet)) return;
    (() => __async(null, null, function* () {
      var t;
      b(true);
      try {
        const o = yield fetch(`/api/scheduled-delivery/time-slots/${s.selectedOutlet.id}/${n}?hasGiftBoxItems=${d}`);
        if (o.ok) {
          const N = ((t = (yield o.json()).availableSlots) == null ? void 0 : t.map((w) => w.timeSlot)) || [];
          j(N);
        } else console.error("Failed to fetch time slots:", o.status, o.statusText);
      } catch (o) {
        console.error("Failed to load time slots:", o), j([]);
      } finally {
        b(false);
      }
    }))();
  }, [n, s == null ? void 0 : s.selectedOutlet, d]);
  const a = () => {
    n && c && l(n, c);
  }, h = () => {
    var r;
    i(((r = C[0]) == null ? void 0 : r.date) || ""), g("");
  };
  return e.jsx(A, {
    open: u,
    onOpenChange: f,
    children: e.jsxs(O, {
      className: "sm:max-w-lg mx-4 rounded-2xl max-h-[90vh] overflow-y-auto",
      children: [e.jsxs(J, {
        className: "text-left",
        children: [e.jsxs("button", {
          onClick: f,
          className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          children: [e.jsx(T, {
            className: "h-4 w-4"
          }), e.jsx("span", {
            className: "sr-only",
            children: "Close"
          })]
        }), e.jsx(K, {
          className: "text-xl font-semibold",
          children: "Schedule delivery or pickup"
        })]
      }), e.jsxs("div", {
        className: "py-4",
        children: [e.jsxs("div", {
          className: "mb-8",
          children: [e.jsx("h3", {
            className: "text-base font-medium mb-4",
            children: "Choose a date"
          }), e.jsx("div", {
            className: "grid grid-cols-2 gap-3",
            children: C.map((r) => e.jsxs("button", {
              onClick: () => i(r.date),
              className: `p-3 rounded-xl text-left transition-colors ${n === r.date ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`,
              children: [e.jsx("div", {
                className: "font-medium",
                children: r.label
              }), e.jsx("div", {
                className: "text-sm opacity-75",
                children: r.shortLabel
              })]
            }, r.date))
          })]
        }), e.jsxs("div", {
          className: "mb-8",
          children: [e.jsx("h3", {
            className: "text-base font-medium mb-4",
            children: "Choose a time"
          }), D ? e.jsx("div", {
            className: "text-center py-8 text-gray-500",
            children: "Loading available times..."
          }) : p.length > 0 ? e.jsx("div", {
            className: "space-y-3 max-h-64 overflow-y-auto",
            children: p.map((r) => e.jsx("button", {
              onClick: () => g(r),
              className: `w-full p-4 rounded-xl text-left transition-colors ${c === r ? "bg-black text-white" : "bg-gray-100 hover:bg-gray-200"}`,
              children: r
            }, r))
          }) : e.jsx("div", {
            className: "text-center py-8 text-gray-500",
            children: "No available time slots for this date"
          })]
        }), e.jsxs("div", {
          className: "space-y-3",
          children: [e.jsx(S, {
            onClick: a,
            disabled: !n || !c,
            className: `w-full py-3 rounded-xl font-medium transition-colors ${n && c ? "bg-black hover:bg-gray-800 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`,
            children: "Confirm"
          }), e.jsx("button", {
            onClick: h,
            className: "w-full py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors",
            children: "Reset"
          })]
        })]
      })]
    })
  });
}
function ve({
  scheduledDate: u,
  scheduledTime: f,
  onChangeSchedule: l,
  outlet: s,
  onRemoveSchedule: d
}) {
  const [n, i] = x.useState("");
  return x.useEffect(() => {
    const c = () => {
      const C = E();
      let m = E();
      const p = (s == null ? void 0 : s.openTime) || "07:00", [j, D] = p.split(":").map(Number);
      m.setHours(j, D, 0, 0), C >= m && m.setDate(m.getDate() + 1);
      const b = m.getTime() - C.getTime();
      if (b <= 0) {
        i("Opening now");
        return;
      }
      const a = Math.floor(b / (1e3 * 60 * 60)), h = Math.floor(b % (1e3 * 60 * 60) / (1e3 * 60)), r = Math.floor(b % (1e3 * 60) / 1e3);
      i(`${a} hours ${h} minutes ${r} seconds`);
    };
    c();
    const g = setInterval(c, 1e3);
    return () => clearInterval(g);
  }, [s]), e.jsx("div", {
    className: "bg-red-50 border-b border-red-200",
    children: e.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
      children: e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [e.jsx(ee, {
            className: "w-4 h-4 text-red-600"
          }), e.jsxs("div", {
            className: "flex items-center space-x-3 text-xs",
            children: [e.jsxs("span", {
              className: "text-red-800 font-medium",
              children: ["The restaurant is closed until the next opening, which is in ", n, "."]
            }), e.jsx("span", {
              className: "text-red-700",
              children: "Schedule order ahead of time."
            })]
          })]
        }), e.jsx(S, {
          onClick: l,
          variant: "outline",
          size: "sm",
          className: "bg-white border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400 text-xs px-2 py-1 h-6",
          children: "Schedule delivery"
        })]
      })
    })
  });
}
function Ne({
  scheduledDate: u,
  scheduledTime: f,
  onChangeSchedule: l,
  onRemoveSchedule: s
}) {
  const d = (n) => {
    const i = new Date(n), c = /* @__PURE__ */ new Date(), g = new Date(c);
    return g.setDate(c.getDate() + 1), i.toDateString() === c.toDateString() ? "Today" : i.toDateString() === g.toDateString() ? "Tomorrow" : i.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric"
    });
  };
  return e.jsx("div", {
    className: "bg-blue-50 border-b border-blue-200",
    children: e.jsx("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3",
      children: e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [e.jsx(z, {
            className: "w-4 h-4 text-blue-600"
          }), e.jsxs("div", {
            className: "flex items-center space-x-1 text-xs",
            children: [e.jsx("span", {
              className: "text-blue-800 font-medium",
              children: "Scheduled delivery:"
            }), e.jsxs("span", {
              className: "text-blue-700 flex items-center space-x-1",
              children: [e.jsx("span", {
                children: d(u)
              }), e.jsx(te, {
                className: "w-3 h-3 mx-1"
              }), e.jsx("span", {
                children: f
              })]
            })]
          })]
        }), e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [e.jsx(S, {
            onClick: l,
            variant: "outline",
            size: "sm",
            className: "bg-white border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 text-xs px-2 py-1 h-6",
            children: "Change"
          }), s && e.jsx(S, {
            onClick: s,
            variant: "ghost",
            size: "sm",
            className: "text-blue-600 hover:text-blue-800 hover:bg-blue-100 text-xs px-2 py-1 h-6",
            children: "Remove"
          })]
        })]
      })
    })
  });
}
export {
  pe as C,
  ye as F,
  ge as L,
  be as O,
  Ne as S,
  ve as a,
  je as b
};
