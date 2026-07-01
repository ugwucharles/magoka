var __defProp = Object.defineProperty;
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
  N as qe,
  a as Oe,
  c as Ye,
  r as l,
  b as Te,
  j as e,
  X as Me,
  B,
  O as Ze
} from "./index-DOfu0sXg.js";
import {
  D as Ke,
  a as Ue,
  b as Ge,
  c as Xe
} from "./dialog-BUvIuveX.js";
import {
  f as _
} from "./currency-cZDvJQzL.js";
import {
  u as Je
} from "./use-auth-d_ltKWkf.js";
import {
  a as Qe,
  O as et
} from "./use-scheduled-delivery-QXJaYNqy.js";
import {
  T as Fe
} from "./trophy-COGTR2GG.js";
import {
  L as tt
} from "./lock-ABGMYV1t.js";
import {
  R as st
} from "./refresh-cw-C5dId60a.js";
import {
  C as Ae
} from "./clock-DQ0X7PrC.js";
import {
  C as rt
} from "./calendar-DfgMOSD7.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = qe("Frown", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }],
  ["path", {
    d: "M16 16s-1.5-2-4-2-4 2-4 2",
    key: "epbg0q"
  }],
  ["line", {
    x1: "9",
    x2: "9.01",
    y1: "9",
    y2: "9",
    key: "yxxnd0"
  }],
  ["line", {
    x1: "15",
    x2: "15.01",
    y1: "9",
    y2: "9",
    key: "1p4y9e"
  }]
]);
function ft({
  isOpen: b,
  onClose: y,
  campaign: J,
  prizes: ie,
  getAuthHeader: V,
  onRewardClaimed: H
}) {
  var _a, _b, _c;
  const {
    getAuthHeader: v,
    isAuthenticated: P
  } = Je(), {
    data: h
  } = Oe(), {
    cart: C,
    applySpinReward: I
  } = Qe(), {
    toast: N
  } = Ye(), [oe, F] = l.useState(false), [k, W] = l.useState(false), [ce, $] = l.useState(false), [a, q] = l.useState(null), [i, g] = l.useState(null), [D, O] = l.useState(false), [A, de] = l.useState(null), [Y, ue] = l.useState(null), we = l.useRef(null), Z = l.useRef(0), Q = l.useRef(null), {
    data: z,
    isLoading: Le
  } = Te({
    queryKey: ["/api/spin-campaigns/active"],
    queryFn: () => __async(null, null, function* () {
      const s = yield fetch("/api/spin-campaigns/active");
      return s.ok ? s.json() : null;
    }),
    enabled: b && (!J || !ie)
  }), n = J || (z == null ? void 0 : z.campaign), m = ie || (z == null ? void 0 : z.prizes), Ce = V || v, {
    data: f,
    isLoading: Ee,
    refetch: ee
  } = Te({
    queryKey: ["/api/spin-campaigns/eligibility", C.subtotal, !!C.promoCode, P],
    queryFn: () => __async(null, null, function* () {
      if (!n) return null;
      const s = yield fetch("/api/spin-campaigns/eligibility", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, Ce()),
        body: JSON.stringify({
          cartSubtotalKobo: Math.round((C.subtotal || 0) * 100),
          hasPromoCode: !!C.promoCode
        })
      });
      return s.ok ? s.json() : null;
    }),
    enabled: b && !!n
  });
  l.useEffect(() => {
    b && !P && F(true);
  }, [b, P]);
  const xe = f == null ? void 0 : f.eligible, K = f == null ? void 0 : f.reason, te = Number((_a = f == null ? void 0 : f.spinsLeft) != null ? _a : xe ? 1 : 0), Ve = Number((_c = (_b = f == null ? void 0 : f.maxSpins) != null ? _b : n == null ? void 0 : n.maxSpinsPerUser) != null ? _c : 1), je = Array.isArray(m) && m.length > 0, he = !!(xe && n && je && !k && !ce), Pe = (n == null ? void 0 : n.bannerTitle) || (n == null ? void 0 : n.name) || "Spin & Win", Ie = (n == null ? void 0 : n.bannerSubtitle) || (n == null ? void 0 : n.description) || "Spin the wheel for food rewards, discounts, and retry chances.", se = (m == null ? void 0 : m.length) || 0, me = se > 0 ? 360 / se : 0, fe = l.useRef(null), U = l.useRef(null), pe = l.useRef([]);
  class De {
    constructor(r, t) {
      this.x = Math.random() * r, this.y = Math.random() * -t - 20, this.size = Math.random() * 8 + 4;
      const o = ["#fbbf24", "#34d399", "#60a5fa", "#f472b6", "#a78bfa", "#f87171"];
      this.color = o[Math.floor(Math.random() * o.length)], this.speedX = Math.random() * 4 - 2, this.speedY = Math.random() * 4 + 2, this.rotation = Math.random() * 360, this.rotationSpeed = Math.random() * 4 - 2;
    }
    update(r, t) {
      this.x += this.speedX, this.y += this.speedY, this.rotation += this.rotationSpeed, this.y > t && (this.y = -20, this.x = Math.random() * r);
    }
    draw(r) {
      r.save(), r.translate(this.x, this.y), r.rotate(this.rotation * Math.PI / 180), r.fillStyle = this.color, r.fillRect(-this.size / 2, -this.size / 2, this.size, this.size), r.restore();
    }
  }
  const ze = () => {
    var o, c;
    const s = fe.current;
    if (!s) return;
    const r = s.getContext("2d");
    if (!r) return;
    s.width = ((o = s.parentElement) == null ? void 0 : o.clientWidth) || 400, s.height = ((c = s.parentElement) == null ? void 0 : c.clientHeight) || 480, pe.current = [];
    for (let d = 0; d < 80; d++) pe.current.push(new De(s.width, s.height));
    const t = () => {
      r.clearRect(0, 0, s.width, s.height), pe.current.forEach((d) => {
        d.update(s.width, s.height), d.draw(r);
      }), U.current = requestAnimationFrame(t);
    };
    t();
  }, G = () => {
    U.current && cancelAnimationFrame(U.current);
    const s = fe.current;
    if (s) {
      const r = s.getContext("2d");
      r == null || r.clearRect(0, 0, s.width, s.height);
    }
  }, Re = () => {
    try {
      const s = new (window.AudioContext || window.webkitAudioContext)(), r = s.createOscillator(), t = s.createGain();
      r.connect(t), t.connect(s.destination), r.type = "sine", r.frequency.setValueAtTime(600, s.currentTime), t.gain.setValueAtTime(0.08, s.currentTime), t.gain.exponentialRampToValueAtTime(0.01, s.currentTime + 0.04), r.start(), r.stop(s.currentTime + 0.04);
    } catch (e2) {
    }
  }, be = (s) => {
    const r = we.current;
    if (!r || !m || m.length === 0) return;
    const t = r.getContext("2d");
    if (!t) return;
    const o = r.getBoundingClientRect(), c = o.width || 300, d = o.height || 300, j = window.devicePixelRatio || 1, X = Math.round(c * j), R = Math.round(d * j);
    (r.width !== X || r.height !== R) && (r.width = X, r.height = R), t.resetTransform(), t.scale(j, j), t.clearRect(0, 0, c, d);
    const p = c / 2, S = d / 2, M = Math.min(p, S) - 15;
    t.save(), t.shadowBlur = 12, t.shadowColor = "rgba(15, 23, 42, 0.25)", t.shadowOffsetY = 4, t.beginPath(), t.arc(p, S, M, 0, 2 * Math.PI), t.fillStyle = "#ED1B24", t.fill(), t.restore(), t.save(), t.beginPath(), t.arc(p, S, M - 6, 0, 2 * Math.PI), t.lineWidth = 2.5, t.strokeStyle = "#FFFFFF", t.stroke(), t.restore();
    const re = (T) => {
      const w = T.trim().split(/\s+/), u = [];
      for (const x of w) {
        if (u.length === 0) {
          u.push(x);
          continue;
        }
        const L = u[u.length - 1], E = L ? `${L} ${x}` : x;
        E.length <= 12 ? u[u.length - 1] = E : u.length < 2 && u.push(x);
      }
      return u.slice(0, 2).map((x) => x.length > 13 ? `${x.slice(0, 11)}...` : x);
    };
    m.forEach((T, w) => {
      var Se;
      const u = (w * me + s) * (Math.PI / 180), x = ((w + 1) * me + s) * (Math.PI / 180), L = (Se = T.sliceColor) == null ? void 0 : Se.trim().toLowerCase(), E = ["#251c13", "#F37020", "#0089D1", "#D00148", "#08B14B"], We = L && !["#fff", "#ffffff", "white"].includes(L) ? T.sliceColor : E[w % E.length];
      t.beginPath(), t.moveTo(p, S), t.arc(p, S, M - 8, u, x), t.fillStyle = We, t.fill(), t.lineWidth = 1.5, t.strokeStyle = "rgba(255, 255, 255, 0.25)", t.stroke(), t.save();
      const ge = u + (x - u) / 2, ve = (ge % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI), Ne = ve > Math.PI / 2 && ve < 3 * Math.PI / 2, ke = re(T.name);
      t.translate(p, S), Ne ? (t.rotate(ge + Math.PI), t.textAlign = "left") : (t.rotate(ge), t.textAlign = "right"), t.textBaseline = "middle", t.fillStyle = "#FFFFFF", t.strokeStyle = "rgba(15, 23, 42, 0.45)", t.lineWidth = 3.5, t.lineJoin = "round", t.font = "bold 11px Outfit, Inter, system-ui, -apple-system, sans-serif", ke.forEach((ne, $e) => {
        const ae = ($e - (ke.length - 1) / 2) * 14, le = M - 24;
        Ne ? (t.strokeText(ne, -le, ae), t.fillText(ne, -le, ae)) : (t.strokeText(ne, le, ae), t.fillText(ne, le, ae));
      }), t.restore();
    }), t.save(), t.beginPath(), t.arc(p, S, 36, 0, 2 * Math.PI), t.fillStyle = "#FFFFFF", t.fill(), t.restore();
  };
  l.useEffect(() => {
    if (m && m.length > 0) {
      const s = requestAnimationFrame(() => be(Z.current));
      return () => cancelAnimationFrame(s);
    }
  }, [m, b, a]);
  const Be = (s, r, t, o) => {
    const c = (s /= o) * s, d = c * s;
    return r + t * (d + -3 * c + 3 * s);
  }, ye = () => __async(null, null, function* () {
    if (!he) {
      N({
        title: "Spin unavailable",
        description: K || "Please sign in and meet the campaign requirements before spinning.",
        variant: "destructive"
      });
      return;
    }
    W(true);
    try {
      const s = yield fetch(`/api/spin-campaigns/${n.id}/spin`, {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, Ce())
      });
      if (!s.ok) {
        const w = yield s.json();
        throw new Error(w.message || "Failed to spin the wheel");
      }
      const r = yield s.json(), t = r.prize, o = Number(r.spinRecordId), c = m.findIndex((w) => w.id === t.id);
      if (c === -1) throw new Error("Resolved prize not configured on frontend");
      const d = 5e3, j = performance.now(), R = (270 - (c + 0.5) * me + 360) % 360, p = Z.current % 360, M = 8 * 360 + R - p;
      let re = p;
      const T = (w) => {
        const u = w - j;
        if (u < d) {
          const x = Be(u, p, M, d);
          Z.current = x, be(x);
          const L = Math.floor(x / (360 / se)), E = Math.floor(re / (360 / se));
          L !== E && (Re(), re = x), Q.current = requestAnimationFrame(T);
        } else Z.current = p + M, be(Z.current), W(false), $(true), q(t), g(o), O(r.appliedImmediately || false), de(r.voucherCode || null), ue(r.ticketNumber || null), ze(), r.appliedImmediately && I(o, t);
      };
      Q.current = requestAnimationFrame(T);
    } catch (s) {
      W(false), N({
        title: "Spin Error",
        description: s.message || "Failed to roll the wheel. Please check your eligibility.",
        variant: "destructive"
      });
    }
  }), _e = () => {
    if (!a) return;
    const s = a.prizeType === "no_prize", r = a.prizeType === "spin_again";
    if (s || r) {
      te > 0 ? (q(null), $(false), g(null), O(false), de(null), ue(null), G(), ee()) : (G(), y());
      return;
    }
    if (D || A || Y || a.fulfillmentAction === "issue_voucher_future" || a.prizeType === "raffle") {
      ee(), G(), y();
      return;
    }
    i && (H ? H(i, a) : (I(i, a), ee(), N({
      title: "Reward Applied!",
      description: `${a.name} has been added to your cart checkout!`
    })), G(), y());
  }, He = () => {
    typeof navigator < "u" && navigator.clipboard && (navigator.clipboard.writeText(window.location.origin + "/?ref=spin"), N({
      title: "Link Copied!",
      description: "Share this link with friends to unlock more spins!"
    }));
  };
  return l.useEffect(() => {
    b || ($(false), q(null), g(null), O(false), de(null), ue(null), G());
  }, [b]), l.useEffect(() => () => {
    Q.current && cancelAnimationFrame(Q.current), U.current && cancelAnimationFrame(U.current);
  }, []), e.jsxs(e.Fragment, {
    children: [e.jsx(Ke, {
      open: b,
      onOpenChange: () => !k && y(),
      children: e.jsxs(Ue, {
        className: "!fixed max-w-md md:max-w-3xl w-[92%] sm:w-full bg-[#FDEDEE] border border-red-100 text-slate-900 rounded-3xl overflow-hidden shadow-2xl p-0 [&>button]:hidden flex flex-col items-center",
        children: [e.jsx("button", {
          disabled: k,
          onClick: y,
          className: "absolute right-4 top-4 rounded-full w-9 h-9 flex items-center justify-center bg-white border border-red-100 hover:bg-red-50/50 text-slate-500 hover:text-red-600 transition-colors z-30 cursor-pointer shadow-sm",
          children: e.jsx(Me, {
            className: "w-4 h-4"
          })
        }), e.jsx("canvas", {
          ref: fe,
          className: "absolute inset-0 z-20 pointer-events-none w-full h-full"
        }), a ? (() => {
          const s = a.prizeType === "no_prize", r = a.prizeType === "spin_again";
          let t = "bg-emerald-50 border-emerald-100", o = Fe, c = "text-emerald-500", d = "CONGRATULATIONS!", j = "You won a fantastic reward!";
          s ? (t = "bg-slate-100 border-slate-200", o = nt, c = "text-slate-500", d = "BETTER LUCK NEXT TIME!", j = "Aww, you didn't win a reward this time.") : r && (t = "bg-indigo-50 border-indigo-100", o = st, c = "text-indigo-500", d = "SPIN AGAIN!", j = "You earned an extra spin attempt!");
          const X = (() => {
            if (D) return "Continue to Checkout";
            if (A || Y) return "Close & Browse Menu";
            switch (a.prizeType) {
              case "cart_percent_discount":
              case "cart_fixed_discount":
              case "product_discount":
                return "Claim & Apply Discount";
              case "free_item":
                return "Claim Free Item";
              case "wallet_cash":
                return "Claim & Add to Wallet";
              case "points":
                return "Claim & Add Points";
              case "raffle":
                return "Claim Raffle Ticket";
              case "spin_again":
                return "Spin Again";
              case "no_prize":
                return te > 0 ? "Try Again" : "Close";
              default:
                return "Claim Reward";
            }
          })(), R = D ? "Applied immediately! Since Pasta Lite 2 is in your cart, we've automatically applied your \u20A61,000 discount." : A ? "A voucher code has been generated for later use! Copy and apply this code at checkout next time." : Y ? "Your raffle ticket has been generated. Keep this ticket number for the raffle draw." : a.description;
          return e.jsxs("div", {
            className: "flex flex-col items-center justify-center p-4 text-center space-y-5 w-full z-30 animate-in fade-in zoom-in-95 duration-300",
            children: [e.jsx("div", {
              className: `border rounded-full p-4 animate-bounce ${t}`,
              children: e.jsx(o, {
                className: `w-10 h-10 ${c}`
              })
            }), e.jsxs("div", {
              children: [e.jsx("h3", {
                className: "text-2xl font-black text-slate-950 tracking-tight",
                children: d
              }), e.jsx("p", {
                className: "text-slate-500 text-xs mt-1",
                children: j
              })]
            }), e.jsxs("div", {
              className: "bg-slate-50 border border-slate-100 rounded-2xl p-5 w-full",
              children: [e.jsx("h4", {
                className: "text-lg font-bold text-slate-900",
                children: a.name
              }), e.jsx("p", {
                className: "text-xs text-slate-500 mt-1.5 leading-relaxed",
                children: R
              }), A && e.jsxs("div", {
                className: "mt-3.5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-center flex flex-col items-center",
                children: [e.jsx("p", {
                  className: "text-[10px] font-extrabold text-amber-800 uppercase tracking-wide",
                  children: "Voucher Code"
                }), e.jsx("p", {
                  className: "text-lg font-black text-amber-950 mt-0.5 tracking-wider select-all",
                  children: A
                }), e.jsx("p", {
                  className: "text-[9px] text-amber-600 mt-1",
                  children: "Copy and apply this at checkout on your next order!"
                })]
              }), Y && e.jsxs("div", {
                className: "mt-3.5 p-3 bg-amber-50 border border-amber-200 rounded-xl text-center flex flex-col items-center",
                children: [e.jsx("p", {
                  className: "text-[10px] font-extrabold text-amber-800 uppercase tracking-wide",
                  children: "Raffle Ticket"
                }), e.jsx("p", {
                  className: "text-lg font-black text-amber-950 mt-0.5 tracking-wider select-all",
                  children: Y
                }), e.jsx("p", {
                  className: "text-[9px] text-amber-600 mt-1",
                  children: "Use this ticket number for the raffle draw."
                })]
              }), a.prizeType === "cart_fixed_discount" && a.rewardValue && e.jsxs("p", {
                className: "text-sm font-extrabold text-emerald-600 mt-3",
                children: ["Value: ", _(a.rewardValue / 100), " off cart"]
              }), a.prizeType === "cart_percent_discount" && a.rewardValue && e.jsxs("p", {
                className: "text-sm font-extrabold text-emerald-600 mt-3",
                children: ["Value: ", a.rewardValue, "% off cart"]
              }), a.prizeType === "wallet_cash" && a.rewardValue && e.jsxs("p", {
                className: "text-sm font-extrabold text-emerald-600 mt-3",
                children: ["Value: ", _(a.rewardValue / 100), " Cash"]
              }), a.prizeType === "points" && a.rewardValue && e.jsxs("p", {
                className: "text-sm font-extrabold text-emerald-600 mt-3",
                children: ["Value: +", a.rewardValue, " Loyalty Points"]
              })]
            }), e.jsx(B, {
              onClick: _e,
              className: "w-full bg-[#F02819] hover:bg-[#d02013] text-white font-extrabold py-3.5 text-xs rounded-xl shadow-lg transition-transform active:scale-[0.98] h-11",
              children: X
            })]
          });
        })() : e.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] w-full gap-5 md:gap-x-8 md:gap-y-4 p-6 md:p-8 items-center max-h-[85vh] overflow-y-auto",
          children: [e.jsxs("div", {
            className: "md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left w-full gap-3",
            children: [e.jsxs("div", {
              className: "flex justify-between items-center w-full mb-1",
              children: [e.jsxs("div", {
                className: "flex items-center gap-1.5 bg-[#ED1B24] text-white px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm select-none",
                children: [e.jsx(Fe, {
                  className: "w-3.5 h-3.5"
                }), e.jsx("span", {
                  children: "Spin & Win"
                })]
              }), e.jsxs("div", {
                className: "flex items-center gap-1.5 bg-white border border-[#ED1B24]/30 text-slate-800 px-3.5 py-1.5 rounded-xl text-[10px] font-extrabold shadow-sm select-none",
                children: [e.jsx("span", {
                  className: "text-slate-500",
                  children: "Min. Spend:"
                }), e.jsx("span", {
                  className: "text-[#ED1B24] font-black",
                  children: _(((n == null ? void 0 : n.minCartValueKobo) || 5e5) / 100)
                })]
              })]
            }), e.jsxs(Ge, {
              className: "pt-0 px-0 pb-0 text-center md:text-left w-full",
              children: [e.jsx(Xe, {
                className: "text-3xl font-black tracking-tight text-slate-950 uppercase leading-none font-sans",
                children: Pe
              }), e.jsx("p", {
                className: "text-sm text-[#ED1B24] font-black mt-2 uppercase tracking-wide",
                children: "Amazing Rewards Every Time!!"
              }), e.jsx("p", {
                className: "text-xs text-slate-500 font-semibold mt-2 leading-relaxed",
                children: Ie
              })]
            })]
          }), e.jsxs("div", {
            className: "md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col items-center justify-center justify-self-center self-center w-full select-none relative p-3",
            children: [e.jsx("div", {
              className: "absolute -top-1.5 left-1/2 -translate-x-1/2 z-20 filter drop-shadow-md transition-transform duration-150 hover:scale-110",
              children: e.jsxs("svg", {
                width: "28",
                height: "30",
                viewBox: "0 0 28 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [e.jsx("path", {
                  d: "M14 30L28 0H0L14 30Z",
                  fill: "rgba(15,23,42,0.12)"
                }), e.jsx("path", {
                  d: "M14 27L25 2H3L14 27Z",
                  fill: "#FFFFFF",
                  stroke: "#ED1B24",
                  strokeWidth: "2.5",
                  strokeLinejoin: "round"
                })]
              })
            }), e.jsxs("div", {
              className: "relative p-2 rounded-full border border-[#ED1B24]/10 bg-white/40 shadow-inner",
              children: [e.jsx("canvas", {
                ref: we,
                width: 320,
                height: 320,
                className: "w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-full"
              }), (() => {
                const s = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center p-1.5 z-10 select-none transition-transform duration-200", r = e.jsx("div", {
                  className: "absolute -top-2.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[10px] border-b-white filter drop-shadow-[0_-1px_1px_rgba(0,0,0,0.06)]"
                }), o = !h || h.name === "EatYum" ? e.jsxs("svg", {
                  viewBox: "0 0 37 37",
                  className: "w-[50px] h-[50px] select-none pointer-events-none",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [e.jsxs("g", {
                    clipPath: "url(#clip0_159_471)",
                    children: [e.jsx("path", {
                      d: "M29.5497 0.435547H6.67921C3.2277 0.435547 0.429688 3.22856 0.429688 6.67391V29.5035C0.429688 32.9489 3.2277 35.7419 6.67921 35.7419H29.5497C33.0012 35.7419 35.7992 32.9489 35.7992 29.5035V6.67391C35.7992 3.22856 33.0012 0.435547 29.5497 0.435547Z",
                      fill: "#ED1C24"
                    }), e.jsx("path", {
                      d: "M29.5497 0.435547H6.67921C3.2277 0.435547 0.429688 3.22856 0.429688 6.67391V29.5035C0.429688 32.9489 3.2277 35.7419 6.67921 35.7419H29.5497C33.0012 35.7419 35.7992 32.9489 35.7992 29.5035V6.67391C35.7992 3.22856 33.0012 0.435547 29.5497 0.435547Z",
                      stroke: "white",
                      strokeWidth: "1.12737"
                    }), e.jsx("path", {
                      d: "M9.83589 9.60929C10.8615 9.60929 11.7417 9.9797 12.457 10.7125L12.4584 10.7139L12.4596 10.7152C12.6803 10.9465 12.8094 11.223 12.8094 11.5366C12.8094 11.928 12.6328 12.2527 12.3216 12.4953L10.6874 14.0885L10.6862 14.0898L10.6847 14.0911C10.4891 14.2776 10.2634 14.4031 10.0114 14.4411H10.9817C11.3127 14.4411 11.6089 14.548 11.835 14.782C12.0708 15.0081 12.1786 15.3044 12.1786 15.6359C12.1785 15.9671 12.0712 16.2631 11.8422 16.495L11.8423 16.4951C11.6152 16.7344 11.3163 16.8434 10.9817 16.8435H9.83589C8.82345 16.8435 7.95647 16.4936 7.25647 15.7948L7.25569 15.794L7.25484 15.7932C6.56398 15.0942 6.21875 14.2291 6.21875 13.2199C6.21876 12.2107 6.56412 11.3491 7.25647 10.658C7.95647 9.95925 8.82345 9.60929 9.83589 9.60929ZM17.0924 9.60929C18.1039 9.60929 18.9704 9.95872 19.6701 10.6564L19.7348 10.7217C20.3932 11.4012 20.7224 12.2409 20.7224 13.2199V15.623C20.7224 15.9573 20.6132 16.2558 20.3798 16.4888L20.3765 16.4919L20.3733 16.495C20.139 16.7165 19.8421 16.8178 19.5125 16.8178C19.1829 16.8178 18.886 16.7165 18.6517 16.495L18.6451 16.4888L18.639 16.4823C18.417 16.2484 18.3156 15.9519 18.3156 15.623V13.2199C18.3156 12.8822 18.198 12.6043 17.9535 12.367L17.9517 12.3654L17.9502 12.3638C17.7131 12.1272 17.4337 12.0117 17.0924 12.0117C16.7509 12.0117 16.4715 12.1272 16.2345 12.3638C15.9976 12.6003 15.8819 12.8791 15.8818 13.2199C15.8818 13.5604 15.9975 13.845 16.2366 14.0911C16.4731 14.3262 16.7519 14.4411 17.0924 14.4411C17.4241 14.4411 17.7207 14.5482 17.9531 14.7767C18.1927 15.0033 18.3021 15.3019 18.3021 15.6359C18.3021 15.9701 18.1929 16.2687 17.9595 16.5015C17.7262 16.7344 17.4272 16.8434 17.0924 16.8435C16.0799 16.8435 15.2128 16.4936 14.5129 15.7948L14.5121 15.794L14.5113 15.7932C13.8204 15.0941 13.4752 14.2291 13.4752 13.2199C13.4752 12.2107 13.8205 11.3491 14.5129 10.658C15.2128 9.95925 16.0799 9.60929 17.0924 9.60929ZM22.5947 8.08008C22.9297 8.08008 23.2288 8.18908 23.4621 8.42201C23.6954 8.65493 23.8046 8.9535 23.8046 9.28773V9.63498H26.4182C26.75 9.63498 27.0468 9.74231 27.2731 9.97743C27.5079 10.2033 27.6151 10.499 27.6151 10.8298C27.6151 11.1713 27.5308 11.489 27.3033 11.7194C27.0749 11.9508 26.7585 12.0374 26.4182 12.0374H23.8046V13.7082C23.8046 13.9129 23.8698 14.0763 24.0024 14.2169C24.1435 14.3499 24.3074 14.4154 24.513 14.4154C24.7194 14.4154 24.877 14.3495 25.0081 14.2195C25.1424 14.0783 25.2084 13.9141 25.2084 13.7082V13.5927C25.2084 13.2634 25.3198 12.9704 25.5509 12.7397L25.554 12.7367L25.557 12.7338C25.7943 12.5089 26.0884 12.3978 26.4182 12.3978C26.748 12.3978 27.0415 12.5091 27.2726 12.7397C27.5037 12.9704 27.6151 13.2634 27.6151 13.5927V13.7082C27.6151 14.5725 27.3165 15.3172 26.7209 15.9214L26.719 15.9233C26.1216 16.5196 25.3789 16.8178 24.513 16.8178C23.6396 16.8178 22.8922 16.5204 22.294 15.9233C21.6958 15.3262 21.3979 14.5801 21.3979 13.7082V9.28773C21.3979 8.95875 21.4993 8.66238 21.7213 8.42849L21.7243 8.42525L21.7276 8.42201C21.9609 8.1891 22.2599 8.08008 22.5947 8.08008ZM9.213 12.1774C9.13017 12.2278 9.05215 12.2899 8.97817 12.3638C8.7412 12.6003 8.62552 12.8791 8.62551 13.2199C8.62551 13.5597 8.7406 13.844 8.97887 14.0898C9.0962 14.2068 9.22394 14.2941 9.36456 14.3525C9.22508 14.2905 9.09681 14.2008 8.98149 14.0857L8.9758 14.0798C8.74732 13.8404 8.62612 13.5489 8.62612 13.2199C8.62613 12.8967 8.77205 12.6148 9.00732 12.38L9.00811 12.3791L9.0089 12.3784L9.213 12.1774Z",
                      stroke: "white",
                      strokeWidth: "0.764999"
                    }), e.jsx("path", {
                      d: "M10.1025 25.0757C9.87753 25.1318 9.64047 25.1599 9.3914 25.1599C8.57979 25.1599 7.90081 24.8912 7.35442 24.3538C6.81606 23.8084 6.54688 23.1306 6.54688 22.3205V19.6015C6.54688 19.2966 6.6433 19.048 6.83614 18.8555C7.03702 18.655 7.29014 18.5547 7.59548 18.5547C7.90885 18.5547 8.16197 18.6509 8.35481 18.8434C8.55569 19.0359 8.65613 19.2886 8.65613 19.6015V22.3205C8.65613 22.5291 8.72443 22.7055 8.86104 22.8499C9.00562 22.9863 9.18244 23.0545 9.3914 23.0545C9.60027 23.0545 9.77306 22.9863 9.90967 22.8499C10.0462 22.7055 10.1145 22.5291 10.1145 22.3205V19.6015C10.1145 19.2966 10.215 19.048 10.4159 18.8555C10.6168 18.655 10.8699 18.5547 11.1752 18.5547C11.4805 18.5547 11.7296 18.655 11.9224 18.8555C12.1233 19.048 12.2238 19.2966 12.2238 19.6015V24.9674C12.2238 25.7695 11.9506 26.4433 11.4042 26.9887C10.8578 27.5341 10.1828 27.8069 9.37931 27.8069H9.33106C9.02577 27.8069 8.77267 27.7066 8.57176 27.5061C8.37088 27.3136 8.27044 26.7601C8.27044 26.7601C8.27044 26.4553 8.37088 26.2026 8.57176 26.0021C8.77267 25.8016 9.02577 25.7014 9.33106 25.7014H9.37931C9.55604 25.7014 9.7128 25.6412 9.84934 25.5208C9.99401 25.4005 10.0783 25.2522 10.1025 25.0757Z",
                      fill: "white"
                    }), e.jsx("path", {
                      d: "M15.4971 25.1606C14.6855 25.1606 14.0064 24.8919 13.46 24.3544C12.9216 23.809 12.6523 23.1311 12.6523 22.3209V19.6256C12.6523 19.3207 12.7488 19.0681 12.9416 18.8675C13.1426 18.6669 13.3957 18.5668 13.7011 18.5668C14.0064 18.5668 14.2596 18.6669 14.4605 18.8675C14.6614 19.0681 14.7619 19.3207 14.7619 19.6256V22.3209C14.7619 22.5295 14.8302 22.7059 14.9668 22.8504C15.1114 22.9868 15.2883 23.055 15.4971 23.055C15.7061 23.055 15.8788 22.9868 16.0155 22.8504C16.1521 22.7059 16.2204 22.5295 16.2204 22.3209V19.6016C16.2204 19.2967 16.3209 19.0481 16.5218 18.8555C16.7227 18.655 16.9759 18.5547 17.2812 18.5547C17.5866 18.5547 17.8357 18.655 18.0286 18.8555C18.2295 19.0481 18.3299 19.2967 18.3299 19.6016V22.3209C18.3299 23.1232 18.0567 23.797 17.5102 24.3425C16.9718 24.8879 16.3007 25.1606 15.4971 25.1606Z",
                      fill: "white"
                    }), e.jsx("path", {
                      d: "M29.3484 27.5061C29.1476 27.7066 28.8944 27.8069 28.5891 27.8069H28.5408C27.7373 27.8069 27.0624 27.5341 26.516 26.9887C25.9696 26.4433 25.6963 24.9674 25.6963 24.9674V21.382C25.6963 21.1816 25.6241 21.0131 25.4794 20.8767C25.3428 20.7324 25.174 20.6602 24.9732 20.6602C24.7562 20.6602 24.5795 20.7324 24.4429 20.8767V24.1132C24.4429 24.4179 24.3424 24.6667 24.1415 24.8592C23.9407 25.0597 23.6875 25.1599 23.3822 25.1599C23.0768 25.1599 22.8238 25.0597 22.6229 24.8592C22.43 24.6667 22.3336 24.4179 22.3336 24.1132V21.382C22.3336 21.1816 22.2613 21.0131 22.1167 20.8767C21.972 20.7324 21.7993 20.6602 21.5984 20.6602C21.3894 20.6602 21.2127 20.7284 21.068 20.8647C20.9315 21.001 20.8632 21.1735 20.8632 21.382V24.1132C20.8632 24.4179 20.7627 24.6667 20.5618 24.8592C20.369 25.0597 20.1199 25.1599 19.8145 25.1599C19.5093 25.1599 19.2561 25.0597 19.0553 24.8592C18.8544 24.6667 18.7539 24.4179 18.7539 24.1132V21.382C18.7539 20.5799 19.0271 19.9102 19.5735 19.3729C20.1199 18.8274 20.7949 18.5547 21.5984 18.5547C22.2252 18.5547 22.7876 18.7391 23.2858 19.1081C23.776 18.7391 24.3384 18.5547 24.9732 18.5547C25.7767 18.5547 26.4477 18.8274 26.986 19.3729C27.5325 19.9102 27.8056 20.5799 27.8056 21.382V24.9674C27.8056 25.176 27.8739 25.3484 28.0106 25.4847C28.1551 25.6291 28.332 25.7014 28.5408 25.7014H28.5891C28.8944 25.7014 29.1476 25.8016 29.3484 26.0021C29.5493 26.2026 29.6497 26.7601 29.6497 26.7601C29.6497 27.0648 29.5493 27.3136 29.3484 27.5061Z",
                      fill: "white"
                    })]
                  }), e.jsx("defs", {
                    children: e.jsx("clipPath", {
                      id: "clip0_159_471",
                      children: e.jsx("rect", {
                        width: "36.245",
                        height: "36.1803",
                        fill: "white"
                      })
                    })
                  })]
                }) : e.jsx("img", {
                  src: (h == null ? void 0 : h.logoUrl) || "/eatyum-logo.png",
                  alt: `${(h == null ? void 0 : h.name) || "Brand"} Logo`,
                  className: "w-[50px] h-[50px] object-contain select-none pointer-events-none",
                  onError: (c) => {
                    c.currentTarget.src = "/eatyum-logo.png";
                  }
                });
                return he ? e.jsxs("button", {
                  onClick: ye,
                  className: `${s} cursor-pointer hover:scale-105 active:scale-95 focus:outline-none`,
                  title: "Click center to spin!",
                  children: [r, o]
                }) : e.jsxs("div", {
                  className: s,
                  children: [r, o]
                });
              })()]
            })]
          }), e.jsx("div", {
            className: "md:col-start-1 md:row-start-2 flex flex-col items-center md:items-start text-center md:text-left w-full mt-1 md:mt-0 select-none",
            children: Le ? e.jsxs("div", {
              className: "w-full flex flex-col items-center justify-center p-4 border border-slate-100 rounded-2xl bg-white/60",
              children: [e.jsx("div", {
                className: "animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-[#ED1B24]"
              }), e.jsx("p", {
                className: "text-xs text-slate-500 font-semibold mt-3",
                children: "Loading Spin & Win..."
              })]
            }) : !n || !je ? e.jsx("div", {
              className: "w-full flex flex-col items-center justify-center p-4 border border-dashed border-red-200 rounded-2xl bg-white/40 text-center",
              children: e.jsx("p", {
                className: "text-xs text-slate-500 font-semibold",
                children: "Spin & Win is not available right now."
              })
            }) : P ? Ee ? e.jsxs("div", {
              className: "w-full flex flex-col items-center justify-center p-4 border border-slate-100 rounded-2xl bg-white/60",
              children: [e.jsx("div", {
                className: "animate-spin rounded-full h-6 w-6 border-2 border-slate-200 border-t-[#ED1B24]"
              }), e.jsx("p", {
                className: "text-xs text-slate-500 font-semibold mt-3",
                children: "Checking your spin eligibility..."
              })]
            }) : K && K.includes("already spun") ? e.jsxs("div", {
              className: "flex flex-col items-center md:items-start space-y-2 w-full mt-1",
              children: [e.jsxs("div", {
                className: "flex items-center gap-1.5 justify-center md:justify-start w-full",
                children: [e.jsx("span", {
                  className: "text-[10px] text-slate-400 font-extrabold uppercase tracking-wider",
                  children: "Available spins:"
                }), e.jsx("span", {
                  className: "text-base font-black text-slate-900 leading-none",
                  children: "0"
                })]
              }), e.jsx("p", {
                className: "text-xs text-slate-500 font-bold mt-1",
                children: K || "You have used your Spin & Win allowance."
              }), e.jsxs("div", {
                className: "flex w-full gap-2.5 mt-3",
                children: [e.jsx(B, {
                  disabled: true,
                  className: "flex-1 bg-slate-100 text-slate-400 border border-slate-200 py-3 rounded-xl font-bold h-11",
                  children: "Spin Again"
                }), e.jsx(B, {
                  onClick: He,
                  className: "flex-1 bg-slate-950 hover:bg-slate-900 text-white py-3 rounded-xl font-bold h-11",
                  children: "Share"
                })]
              })]
            }) : C.subtotal < ((n == null ? void 0 : n.minCartValueKobo) || 5e5) / 100 ? e.jsxs("div", {
              className: "w-full flex flex-col items-center md:items-start p-4 border border-red-100 rounded-2xl bg-white/60 space-y-3",
              children: [e.jsxs("div", {
                className: "flex justify-between w-full text-[10px] font-extrabold text-slate-500 uppercase tracking-wider",
                children: [e.jsx("span", {
                  children: "Progress to unlock:"
                }), e.jsxs("span", {
                  className: "text-[#ED1B24] font-black",
                  children: [_(C.subtotal), " / ", _(((n == null ? void 0 : n.minCartValueKobo) || 5e5) / 100)]
                })]
              }), e.jsx("div", {
                className: "w-full bg-slate-200 rounded-full h-2 overflow-hidden",
                children: e.jsx("div", {
                  className: "bg-gradient-to-r from-[#ED1B24] to-red-400 h-2 rounded-full transition-all duration-300",
                  style: {
                    width: `${Math.min(100, C.subtotal / (((n == null ? void 0 : n.minCartValueKobo) || 5e5) / 100) * 100)}%`
                  }
                })
              }), e.jsxs("p", {
                className: "text-xs text-slate-500 font-semibold leading-relaxed",
                children: ["\u{1F4A1} Add just ", e.jsx("span", {
                  className: "font-bold text-[#ED1B24]",
                  children: _(((n == null ? void 0 : n.minCartValueKobo) || 5e5) / 100 - C.subtotal)
                }), " more to qualify for a free spin!"]
              }), e.jsx(B, {
                onClick: () => y(),
                className: "w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs h-11 rounded-xl",
                children: "Browse Menu & Add Items"
              })]
            }) : xe ? e.jsxs("div", {
              className: "flex flex-col items-center md:items-start mt-1 w-full",
              children: [e.jsxs("div", {
                className: "flex items-center gap-1.5 justify-center md:justify-start w-full",
                children: [e.jsx("span", {
                  className: "text-[10px] text-slate-400 font-extrabold uppercase tracking-wider",
                  children: "Available spins:"
                }), e.jsx("span", {
                  className: "text-base font-black text-slate-950 leading-none",
                  children: Math.max(1, te)
                }), e.jsxs("span", {
                  className: "text-[10.5px] text-slate-400 font-semibold",
                  children: ["(", Math.max(1, te), " of ", Math.max(1, Ve), " remaining)"]
                })]
              }), e.jsxs(B, {
                disabled: !he,
                onClick: ye,
                className: "mt-4 w-full py-6 text-sm font-black bg-[#ED1B24] hover:bg-[#d02013] text-white rounded-2xl shadow-xl transition-all transform hover:scale-[1.01] active:scale-[0.99] border-none flex items-center justify-between px-6 h-12 uppercase tracking-wide",
                children: [e.jsx("span", {
                  children: k ? "Deciding your fate..." : "Spin the wheel now"
                }), e.jsx("div", {
                  className: "w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#ED1B24] shadow-sm",
                  children: e.jsxs("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [e.jsx("line", {
                      x1: "5",
                      y1: "12",
                      x2: "19",
                      y2: "12"
                    }), e.jsx("polyline", {
                      points: "12 5 19 12 12 19"
                    })]
                  })
                })]
              })]
            }) : e.jsx("div", {
              className: "w-full flex flex-col items-center justify-center p-4 border border-dashed border-red-200 rounded-2xl bg-white/40 text-center",
              children: e.jsx("p", {
                className: "text-xs text-slate-500 font-semibold",
                children: K || "You are not eligible to spin right now."
              })
            }) : e.jsxs("div", {
              className: "w-full flex flex-col items-center md:items-start p-4 border border-red-100 rounded-2xl bg-white/60",
              children: [e.jsxs("p", {
                className: "text-xs text-slate-500 font-semibold mb-3 flex items-center gap-1.5",
                children: [e.jsx(tt, {
                  className: "w-3.5 h-3.5 text-[#ED1B24]"
                }), "You must be logged in to participate in the Spin & Win campaign."]
              }), e.jsx(B, {
                onClick: () => F(true),
                className: "w-full bg-[#ED1B24] hover:bg-[#d02013] text-white font-extrabold py-3.5 rounded-xl shadow-md h-11 transition-all",
                children: "Sign In or Sign Up"
              })]
            })
          })]
        })]
      })
    }), e.jsx(et, {
      isOpen: oe,
      onClose: () => F(false),
      onSuccess: (s, r) => {
        const t = new CustomEvent("auth-change", {
          detail: {
            user: r,
            token: s
          }
        });
        window.dispatchEvent(t), F(false), ee();
      }
    })]
  });
}
function pt({
  isOpen: b,
  onClose: y,
  onConfirm: J,
  userLocation: ie,
  leadTimeHours: V,
  productName: H
}) {
  const [v, P] = l.useState(""), [h, C] = l.useState(""), [I, N] = l.useState(""), {
    minDate: oe,
    minDateTimeISO: F
  } = l.useMemo(() => {
    const i = /* @__PURE__ */ new Date(), g = new Date(i.getTime() + V * 60 * 60 * 1e3), D = g.getFullYear(), O = String(g.getMonth() + 1).padStart(2, "0"), A = String(g.getDate()).padStart(2, "0");
    return {
      minDate: `${D}-${O}-${A}`,
      minDateTimeISO: g
    };
  }, [V, b]), k = (i, g) => !i || !g ? (N(""), false) : /* @__PURE__ */ new Date(`${i}T${g}`) < F ? (N(`Must be at least ${V} hours from now. Earliest: ${F.toLocaleString([], { dateStyle: "medium", timeStyle: "short" })}`), false) : (N(""), true), W = (i) => {
    P(i), k(i, h);
  }, ce = (i) => {
    C(i), k(v, i);
  }, $ = () => {
    !v || !h || k(v, h) && J(v, h);
  }, a = v && h && !I;
  if (!b) return null;
  const q = e.jsxs(e.Fragment, {
    children: [e.jsx("div", {
      className: "fixed inset-0 bg-black/60",
      style: {
        zIndex: 1e4
      },
      onClick: y
    }), e.jsx("div", {
      className: "fixed inset-0 flex items-end sm:items-center justify-center pointer-events-none",
      style: {
        zIndex: 10001
      },
      children: e.jsxs("div", {
        className: "relative bg-white w-full sm:max-w-md sm:rounded-2xl rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl pointer-events-auto overflow-hidden",
        onClick: (i) => i.stopPropagation(),
        children: [e.jsxs("div", {
          className: "sticky top-0 z-10 flex items-center justify-between p-4 border-b bg-white",
          children: [e.jsx("h2", {
            className: "text-xl font-semibold text-gray-900",
            children: "Schedule Your Pre-Order"
          }), e.jsx("button", {
            onClick: y,
            className: "p-2 hover:bg-gray-100 rounded-full transition-colors",
            children: e.jsx(Me, {
              className: "h-5 w-5"
            })
          })]
        }), e.jsxs("div", {
          className: "flex-1 overflow-y-auto p-4",
          children: [e.jsxs("div", {
            className: "flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl mb-6",
            children: [e.jsx(Ae, {
              className: "w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0"
            }), e.jsxs("div", {
              children: [e.jsxs("p", {
                className: "text-sm font-medium text-orange-800",
                children: [H ? `"${H}" requires` : "This item requires", " at least", " ", e.jsxs("strong", {
                  children: [V, " hours"]
                }), " advance notice."]
              }), e.jsx("p", {
                className: "text-xs text-orange-600 mt-1",
                children: "Pick any date and time that works for you."
              })]
            })]
          }), e.jsxs("div", {
            className: "mb-5",
            children: [e.jsx("label", {
              className: "block text-sm font-medium text-gray-700 mb-2",
              children: "Delivery Date"
            }), e.jsxs("div", {
              className: "relative",
              children: [e.jsx(rt, {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              }), e.jsx("input", {
                type: "date",
                value: v,
                min: oe,
                onChange: (i) => W(i.target.value),
                className: "w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              })]
            })]
          }), e.jsxs("div", {
            className: "mb-5",
            children: [e.jsx("label", {
              className: "block text-sm font-medium text-gray-700 mb-2",
              children: "Delivery Time"
            }), e.jsxs("div", {
              className: "relative",
              children: [e.jsx(Ae, {
                className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
              }), e.jsx("input", {
                type: "time",
                value: h,
                onChange: (i) => ce(i.target.value),
                className: "w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              })]
            })]
          }), I && e.jsx("div", {
            className: "p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700",
            children: I
          })]
        }), e.jsx("div", {
          className: "sticky bottom-0 p-4 border-t bg-white",
          children: e.jsx("button", {
            onClick: $,
            disabled: !a,
            className: "w-full py-4 rounded-xl font-semibold text-lg transition-colors",
            style: {
              backgroundColor: a ? "#F97316" : "#d1d5db",
              color: a ? "#FFFFFF" : "#6b7280",
              cursor: a ? "pointer" : "not-allowed"
            },
            children: "Confirm & Add to Cart"
          })
        })]
      })
    })]
  });
  return Ze.createPortal(q, document.body);
}
export {
  pt as P,
  ft as S
};
