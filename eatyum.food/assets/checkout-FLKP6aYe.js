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
import { n as tt, r as l, o as st, j as e, P as Me, p as Ie, q as Jt, s as Ut, v as Qt, w as rt, c as at, x as be, y as Xt, u as Zt, a as es, b as Fe, k as ts, l as ss, m as rs, z as as, A as os, C as ns, D as oe, E as ee, F as te, L as Oe, B, G as Xe, H as ue, I as me, J as Ze, K as et, M as is } from "./index-DOfu0sXg.js";
import { I as ne } from "./input-FyV2XACZ.js";
import { L as Q } from "./label-B38UEnoM.js";
import { T as ls } from "./textarea-__Yhw9VH.js";
import { c as ot, R as ds, I as cs } from "./index-Czlrzsbg.js";
import { u as us } from "./index-D5alJfFq.js";
import { u as ms } from "./index-CxKYTSZE.js";
import { C as ps, a as hs, u as xs, b as fs } from "./use-scheduled-delivery-QXJaYNqy.js";
import { S as pe } from "./separator-B__B0Kv_.js";
import { C as ys } from "./checkbox-CrTtWijP.js";
import { u as gs } from "./use-auth-d_ltKWkf.js";
import { L as vs, F as bs } from "./location-modal-Cr-IHIoa.js";
import { C as js } from "./checkout-auth-flow-CwcIMq7d.js";
import { P as Ns, S as ws } from "./preorder-schedule-modal-zxs4Au2f.js";
import { l as Cs } from "./paystack-BWoQWccF.js";
import { f as C } from "./currency-cZDvJQzL.js";
import { S as ks } from "./shopping-cart-C1hOzoyN.js";
import { A as Ss } from "./arrow-left-CK7JF7w9.js";
import { U as Ps } from "./user-adl9AYKF.js";
import { M as As } from "./map-pin-ChG4yLkU.js";
import { W as Fs } from "./wallet-e6BSu-fo.js";
import { G as Os } from "./gift-C_SZrOe8.js";
import "./dialog-BUvIuveX.js";
import "./Combination-C65a2kPq.js";
import "./auth-AqNcfriC.js";
import "./useReferralReward-BeyZodYI.js";
import "./mail-WBbfgCoF.js";
import "./smartphone-DMb4mbpx.js";
import "./useMutation-CVmbONMy.js";
import "./check-AkIa94Y-.js";
import "./message-circle-Ctbm3h4-.js";
import "./index-D-8nYH0_.js";
import "./custom-autocomplete-Cusxb0jm.js";
import "./clock-DQ0X7PrC.js";
import "./trophy-COGTR2GG.js";
import "./lock-ABGMYV1t.js";
import "./refresh-cw-C5dId60a.js";
import "./calendar-DfgMOSD7.js";
var De = "Radio", [Is, nt] = tt(De), [Es, Ms] = Is(De), it = l.forwardRef((i, t) => {
  const _a = i, { __scopeRadio: c, name: v, checked: m = false, required: b, disabled: P, value: E = "on", onCheck: x, form: N } = _a, k = __objRest(_a, ["__scopeRadio", "name", "checked", "required", "disabled", "value", "onCheck", "form"]), [f, _] = l.useState(null), S = st(t, (y) => _(y)), M = l.useRef(false), o = f ? N || !!f.closest("form") : true;
  return e.jsxs(Es, { scope: c, checked: m, disabled: P, children: [e.jsx(Me.button, __spreadProps(__spreadValues({ type: "button", role: "radio", "aria-checked": m, "data-state": ct(m), "data-disabled": P ? "" : void 0, disabled: P, value: E }, k), { ref: S, onClick: Ie(i.onClick, (y) => {
    m || x == null || x(), o && (M.current = y.isPropagationStopped(), M.current || y.stopPropagation());
  }) })), o && e.jsx(Ds, { control: f, bubbles: !M.current, name: v, value: E, checked: m, required: b, disabled: P, form: N, style: { transform: "translateX(-100%)" } })] });
});
it.displayName = De;
var lt = "RadioIndicator", dt = l.forwardRef((i, t) => {
  const _a = i, { __scopeRadio: c, forceMount: v } = _a, m = __objRest(_a, ["__scopeRadio", "forceMount"]), b = Ms(lt, c);
  return e.jsx(Jt, { present: v || b.checked, children: e.jsx(Me.span, __spreadProps(__spreadValues({ "data-state": ct(b.checked), "data-disabled": b.disabled ? "" : void 0 }, m), { ref: t })) });
});
dt.displayName = lt;
var Ds = (i) => {
  const _a = i, { control: t, checked: c, bubbles: v = true } = _a, m = __objRest(_a, ["control", "checked", "bubbles"]), b = l.useRef(null), P = ms(c), E = Ut(t);
  return l.useEffect(() => {
    const x = b.current, N = window.HTMLInputElement.prototype, f = Object.getOwnPropertyDescriptor(N, "checked").set;
    if (P !== c && f) {
      const _ = new Event("click", { bubbles: v });
      f.call(x, c), x.dispatchEvent(_);
    }
  }, [P, c, v]), e.jsx("input", __spreadProps(__spreadValues({ type: "radio", "aria-hidden": true, defaultChecked: c }, m), { tabIndex: -1, ref: b, style: __spreadProps(__spreadValues(__spreadValues({}, i.style), E), { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 }) }));
};
function ct(i) {
  return i ? "checked" : "unchecked";
}
var Rs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Re = "RadioGroup", [Ts, Dr] = tt(Re, [ot, nt]), ut = ot(), mt = nt(), [_s, qs] = Ts(Re), pt = l.forwardRef((i, t) => {
  const _a = i, { __scopeRadioGroup: c, name: v, defaultValue: m, value: b, required: P = false, disabled: E = false, orientation: x, dir: N, loop: k = true, onValueChange: f } = _a, _ = __objRest(_a, ["__scopeRadioGroup", "name", "defaultValue", "value", "required", "disabled", "orientation", "dir", "loop", "onValueChange"]), S = ut(c), M = us(N), [o, y] = Qt({ prop: b, defaultProp: m, onChange: f });
  return e.jsx(_s, { scope: c, name: v, required: P, disabled: E, value: o, onValueChange: y, children: e.jsx(ds, __spreadProps(__spreadValues({ asChild: true }, S), { orientation: x, dir: M, loop: k, children: e.jsx(Me.div, __spreadProps(__spreadValues({ role: "radiogroup", "aria-required": P, "aria-orientation": x, "data-disabled": E ? "" : void 0, dir: M }, _), { ref: t })) })) });
});
pt.displayName = Re;
var ht = "RadioGroupItem", xt = l.forwardRef((i, t) => {
  const _a = i, { __scopeRadioGroup: c, disabled: v } = _a, m = __objRest(_a, ["__scopeRadioGroup", "disabled"]), b = qs(ht, c), P = b.disabled || v, E = ut(c), x = mt(c), N = l.useRef(null), k = st(t, N), f = b.value === m.value, _ = l.useRef(false);
  return l.useEffect(() => {
    const S = (o) => {
      Rs.includes(o.key) && (_.current = true);
    }, M = () => _.current = false;
    return document.addEventListener("keydown", S), document.addEventListener("keyup", M), () => {
      document.removeEventListener("keydown", S), document.removeEventListener("keyup", M);
    };
  }, []), e.jsx(cs, __spreadProps(__spreadValues({ asChild: true }, E), { focusable: !P, active: f, children: e.jsx(it, __spreadProps(__spreadValues(__spreadValues({ disabled: P, required: b.required, checked: f }, x), m), { name: b.name, ref: k, onCheck: () => b.onValueChange(m.value), onKeyDown: Ie((S) => {
    S.key === "Enter" && S.preventDefault();
  }), onFocus: Ie(m.onFocus, () => {
    var S;
    _.current && ((S = N.current) == null || S.click());
  }) })) }));
});
xt.displayName = ht;
var Gs = "RadioGroupIndicator", ft = l.forwardRef((i, t) => {
  const _a = i, { __scopeRadioGroup: c } = _a, v = __objRest(_a, ["__scopeRadioGroup"]), m = mt(c);
  return e.jsx(dt, __spreadProps(__spreadValues(__spreadValues({}, m), v), { ref: t }));
});
ft.displayName = Gs;
var yt = pt, gt = xt, $s = ft;
const vt = l.forwardRef((_a, c) => {
  var _b = _a, { className: i } = _b, t = __objRest(_b, ["className"]);
  return e.jsx(yt, __spreadProps(__spreadValues({ className: rt("grid gap-2", i) }, t), { ref: c }));
});
vt.displayName = yt.displayName;
const Ee = l.forwardRef((_c, c) => {
  var _d = _c, { className: i } = _d, t = __objRest(_d, ["className"]);
  return e.jsx(gt, __spreadProps(__spreadValues({ ref: c, className: rt("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", i) }, t), { children: e.jsx($s, { className: "flex items-center justify-center", children: e.jsx(ps, { className: "h-2.5 w-2.5 fill-current text-current" }) }) }));
});
Ee.displayName = gt.displayName;
const Bs = () => {
  const [i, t] = l.useState([]), [c, v] = l.useState(false), { toast: m } = at();
  return l.useEffect(() => {
    const x = be();
    t(x);
  }, []), { offlineOrders: i, isLoading: c, saveOrderOffline: (x) => __async(null, null, function* () {
    try {
      v(true), yield Xt(x);
      const N = be();
      return t(N), m({ title: "Order Saved Offline", description: "Your order has been saved and will be sent when you're back online.", variant: "default" }), true;
    } catch (N) {
      return console.error("Failed to save offline order:", N), m({ title: "Error", description: "Failed to save order offline. Please try again.", variant: "destructive" }), false;
    } finally {
      v(false);
    }
  }), syncOfflineOrders: () => __async(null, null, function* () {
    if (!navigator.onLine) {
      m({ title: "Offline", description: "Cannot sync orders while offline. Orders will sync automatically when you're back online.", variant: "destructive" });
      return;
    }
    try {
      v(true);
      const x = be();
      for (const k of x) try {
        if ((yield fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(__spreadProps(__spreadValues({}, k), { syncedFromOffline: true })) })).ok) {
          const _ = x.filter((S) => S.tempId !== k.tempId);
          localStorage.setItem("offlineOrders", JSON.stringify(_));
        }
      } catch (f) {
        console.error("Failed to sync order:", k.tempId, f);
      }
      const N = be();
      t(N), N.length === 0 ? m({ title: "Orders Synced", description: "All offline orders have been successfully synced." }) : m({ title: "Partial Sync", description: `${x.length - N.length} orders synced. ${N.length} orders still pending.`, variant: "default" });
    } catch (x) {
      console.error("Failed to sync offline orders:", x), m({ title: "Sync Failed", description: "Failed to sync offline orders. Please try again later.", variant: "destructive" });
    } finally {
      v(false);
    }
  }), clearOfflineOrders: () => {
    localStorage.removeItem("offlineOrders"), t([]);
  }, hasOfflineOrders: i.length > 0 };
}, bt = () => window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true || document.referrer.includes("android-app://"), Ws = () => {
  const i = navigator.userAgent.toLowerCase();
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(i);
}, jt = () => {
  const i = navigator.userAgent;
  return /Android/.test(i) && /; wv\)/.test(i);
}, Nt = () => {
  const i = navigator.userAgent;
  if (!/iPad|iPhone|iPod/.test(i)) return false;
  const c = /AppleWebKit/.test(i), v = /Safari\//.test(i), m = /CriOS/.test(i), b = /FxiOS/.test(i);
  return c && !v && !m && !b;
}, wt = () => {
  const i = navigator.userAgent;
  return [/FBAN|FBAV/i, /FB_IAB/i, /Instagram/i, /Twitter/i, /LinkedInApp/i, /Line\//i, /KAKAOTALK/i, /Snapchat/i, /BytedanceWebview/i, /musical_ly/i, /TikTok/i, /WeChat|MicroMessenger/i, /Telegram/i, /WhatsApp/i].some((c) => c.test(i));
}, Ct = () => {
  var k;
  const i = navigator.userAgent.toLowerCase(), t = i.includes("reactnative") || window.ReactNativeWebView !== void 0, c = i.includes("flutter") || window.flutterChannel !== void 0 || window.Flutter !== void 0 || window._flutter_web_set_location_strategy !== void 0, v = window.Capacitor !== void 0, m = window.cordova !== void 0, b = jt(), P = Nt(), E = wt(), x = /webview|wv\)/i.test(navigator.userAgent), N = ((k = window.webkit) == null ? void 0 : k.messageHandlers) !== void 0 || window.Android !== void 0 || window.NativeApp !== void 0 || window.YumApp !== void 0;
  return t || c || v || m || b || P || E || x || N;
}, kt = () => Ct() || bt() ? "app" : "web", zs = (i) => ({ web: "Web", app: "App", mobile: "Web (Mobile)", pwa: "App (PWA)", native: "App (Native)" })[i] || "Unknown", Vs = () => {
  const i = kt();
  console.log("\u{1F4F1} Order Source Detection:", { source: i, label: zs(i), detection: { isPWA: bt(), isMobileDevice: Ws(), isNativeApp: Ct(), isAndroidWebView: jt(), isIOSWebView: Nt(), isInAppBrowser: wt() }, userAgent: navigator.userAgent });
};
function Rr() {
  var _a;
  var Je, Ue;
  const [, i] = Zt(), { cart: t, clearCart: c, removePromoCode: v, validatePromoCodeForUser: m, applyPromoCode: b, autoApplyPromoCode: P, recalculatePromoCode: E, applySpinReward: x, removeSpinReward: N, loading: k } = hs(), { user: f, isAuthenticated: _, getAuthHeader: S, loading: M } = gs(), { location: o } = xs(), { data: y } = es(), { saveOrderOffline: St } = Bs(), { toast: A } = at(), { scheduledDelivery: g, scheduleDelivery: Pt, clearScheduledDelivery: ie } = fs(), X = (s) => {
    if (!s || s.match(/[AP]M/i)) return s;
    const [r, n] = s.split(":").map(Number);
    if (isNaN(r) || isNaN(n)) return s;
    const a = r >= 12 ? "PM" : "AM";
    return `${r > 12 ? r - 12 : r === 0 ? 12 : r}:${String(n).padStart(2, "0")} ${a}`;
  }, F = (y == null ? void 0 : y.colorScheme) || "#F02819", Z = (y == null ? void 0 : y.buttonColor) || "#FFFFFF", q = l.useMemo(() => {
    var _a2;
    return (_a2 = t.items) != null ? _a2 : [];
  }, [t.items]), L = l.useMemo(() => q.some((s) => {
    var a, d;
    const r = ((a = s.product) == null ? void 0 : a.isGiftBox) === true || s.isGiftBox === true, n = (d = s.name) == null ? void 0 : d.toLowerCase().includes("gift box");
    return r || n;
  }), [q]), G = l.useMemo(() => q.some((s) => s.orderAvailabilityMode === "preorder_only"), [q]), Te = (s, r) => {
    const n = /* @__PURE__ */ new Map();
    return s.forEach((a) => {
      if (!a) return;
      const d = a.groupName || "Extras", j = a.optionName || "Extra", w = Number(a.priceModifier || 0), I = typeof a.quantity == "number" && a.quantity > 0 ? a.quantity : 1, D = `${d}|${j}|${w}`, V = n.get(D) || { category: d, name: j, unitPrice: w, quantityBase: 0 };
      V.quantityBase += I, n.set(D, V);
    }), Array.from(n.values()).map((a) => ({ category: a.category, name: a.name, unitPrice: a.unitPrice, quantity: a.quantityBase * Math.max(1, r || 1) }));
  }, _e = (s, r) => {
    if (!s) return [];
    const n = /* @__PURE__ */ new Map();
    return s.forEach((a) => {
      if (!a) return;
      const d = a.groupName || a.categoryName || "Add-ons", j = a.addonName || a.name || "Add-on", w = Number(a.price || 0), I = typeof a.quantity == "number" && a.quantity > 0 ? a.quantity : 1, D = `${d}|${j}|${w}`, V = n.get(D) || { category: d, name: j, unitPrice: w, quantityBase: 0 };
      V.quantityBase += I, n.set(D, V);
    }), Array.from(n.values()).map((a) => ({ category: a.category, name: a.name, unitPrice: a.unitPrice, quantity: a.quantityBase * Math.max(1, r || 1) }));
  }, At = (s) => {
    const r = [...Te(s.customizations, s.quantity), ..._e(s.addons, s.quantity)].filter((a) => a.quantity > 0), n = /* @__PURE__ */ new Map();
    return r.forEach((a) => {
      const d = n.get(a.category) || [];
      d.push(a), n.set(a.category, d);
    }), n;
  }, Ft = (s) => [...Te(s.customizations, s.quantity), ..._e(s.addons, s.quantity)].reduce((n, a) => n + a.unitPrice * a.quantity, 0), J = () => h === "delivery" ? (t.total || 0) + (t.deliveryFee || 0) : t.total || 0, je = () => {
    if (!z || !(p != null && p.balance)) return 0;
    const s = J(), n = p.balance / 100, a = Math.max(0, Math.min(n, s));
    return ye === null ? a : Math.max(0, Math.min(ye, a));
  }, Ot = () => Math.max(0, J() - je()), U = () => Ot(), he = (() => {
    if (!(o != null && o.selectedOutlet)) return false;
    const s = o.selectedOutlet;
    if (!s.opening_time || !s.closing_time) return true;
    const r = /* @__PURE__ */ new Date(), n = r.getHours() * 60 + r.getMinutes();
    try {
      const [a, d] = s.opening_time.split(":").map(Number), [j, w] = s.closing_time.split(":").map(Number), I = a * 60 + d, D = j * 60 + w;
      return D < I ? n >= I || n < D : n >= I && n < D;
    } catch (a) {
      return console.error("Error parsing outlet times:", a), true;
    }
  })(), [h, qe] = l.useState("delivery"), [It, Ne] = l.useState(false), [Ge, xe] = l.useState(false), [Et, $e] = l.useState(false), [u, Be] = l.useState(f), [Mt, fe] = l.useState(false), [se, We] = l.useState(""), [ze, Ve] = l.useState(false), [Dt, re] = l.useState(false), [O, K] = l.useState("now"), [z, Rt] = l.useState(false), [ye, ge] = l.useState(null), [Le, le] = l.useState(false), [we, Tt] = l.useState(false), [Ks, Ke] = l.useState(null), [Hs, He] = l.useState(false), [Ys, Ce] = l.useState(false), [_t, ke] = l.useState(false), { data: ae } = Fe({ queryKey: ["/api/spin-campaigns/active"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/spin-campaigns/active");
    return s.ok ? s.json() : null;
  }) }), H = ae == null ? void 0 : ae.campaign, Ye = ae == null ? void 0 : ae.prizes, { data: W, refetch: qt } = Fe({ queryKey: ["/api/spin-campaigns/eligibility", t.subtotal, !!t.promoCode, !!u], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/spin-campaigns/eligibility", { method: "POST", headers: __spreadValues({ "Content-Type": "application/json" }, S()), body: JSON.stringify({ cartSubtotalKobo: Math.round((t.subtotal || 0) * 100), hasPromoCode: !!t.promoCode }) });
    return s.ok ? s.json() : null;
  }), enabled: !!H }), [$, Se] = l.useState({ firstName: "", lastName: "", email: "", phone: "", specialInstructions: "" }), { data: p, isLoading: Gt, refetch: Js } = Fe({ queryKey: ["/api/wallet/balance"], queryFn: () => __async(null, null, function* () {
    if (!u) return null;
    const s = yield fetch("/api/wallet/balance", { headers: { Authorization: `Bearer ${localStorage.getItem("auth-token")}` } });
    return s.ok ? yield s.json() : null;
  }), enabled: !!u, staleTime: 0 });
  l.useEffect(() => {
    if (!z) {
      ge(null);
      return;
    }
    const s = ((p == null ? void 0 : p.balance) || 0) / 100, r = Math.max(0, Math.min(s, J()));
    ge((n) => n === null ? r : Math.min(n, r));
  }, [z, p, t.total, t.deliveryFee, h]), l.useEffect(() => {
    (L || G) && O === "now" && K("scheduled");
  }, [O, L, G]), l.useEffect(() => {
    M || (f ? (Be(f), fe(true), Se((s) => {
      var r, n;
      return __spreadProps(__spreadValues({}, s), { firstName: ((r = f.fullName) == null ? void 0 : r.split(" ")[0]) || "", lastName: ((n = f.fullName) == null ? void 0 : n.split(" ").slice(1).join(" ")) || "", email: f.email || "", phone: f.phone || "" });
    }), ((t == null ? void 0 : t.items) || []).length > 0 && !k && !(t != null && t.promoCode) && f.id && P().then((s) => {
      s != null && s.success && s.promo && A({ title: "Discount Applied!", description: `${s.message} - Save ${C(s.discount)}` });
    }).catch((s) => {
      console.warn("Auto-apply promo error:", s);
    })) : we || (le(true), fe(false)));
  }, [f, M, we, t == null ? void 0 : t.promoCode, (Je = t == null ? void 0 : t.items) == null ? void 0 : Je.length, t == null ? void 0 : t.subtotal, k]), l.useEffect(() => {
    g ? K("scheduled") : !G && !L && K("now");
  }, [g, G, L]), l.useEffect(() => {
    var s;
    t != null && t.promoCode && ((s = t == null ? void 0 : t.items) == null ? void 0 : s.length) > 0 && !k && (console.log("Checkout: Automatically recalculating promo code:", t.promoCode), E().then((r) => {
      r != null && r.success ? console.log("Checkout: Promo code recalculated successfully") : r != null && r.error && A({ title: "Promo Code Updated", description: r.error, variant: "destructive" });
    }).catch((r) => {
      console.error("Checkout: Error recalculating promo code:", r);
    }));
  }, [t == null ? void 0 : t.promoCode, (Ue = t == null ? void 0 : t.items) == null ? void 0 : Ue.length, k]), l.useEffect(() => {
    var s, r, n;
    try {
      ts({ item_category: "food", uuid_c1: "checkout", user_email: u == null ? void 0 : u.email, user_phone_number: u == null ? void 0 : u.phone }), ss("Checkout", { content_type: "page", content_name: "Checkout", content_category: "checkout", em: u != null && u.email ? btoa(u.email.toLowerCase().trim()) : void 0, ph: u != null && u.phone ? btoa(u.phone.replace(/\D/g, "")) : void 0, external_id: (s = u == null ? void 0 : u.id) == null ? void 0 : s.toString() }), rs("Checkout"), as("Checkout", { page_type: "checkout", cart_value: h === "delivery" ? (t.total || 0) + (t.deliveryFee || 0) : t.total || 0, item_count: ((r = t == null ? void 0 : t.items) == null ? void 0 : r.length) || 0, order_type: h }), u != null && u.id && os(u.id.toString(), { email: u.email, phone: u.phone, name: u.fullName }), ((n = t == null ? void 0 : t.items) == null ? void 0 : n.length) > 0 && (ns(t.items, t.promoCode), oe("begin_checkout", { cart_value: h === "delivery" ? (t.total || 0) + (t.deliveryFee || 0) : t.total || 0, currency: "NGN", item_count: t.items.length, promo_code: t.promoCode || null, order_type: h }));
    } catch (a) {
      console.warn("Page view tracking error:", a);
    }
  }, [u, t]);
  const de = (s) => {
    Se(__spreadProps(__spreadValues({}, $), { [s.target.name]: s.target.value }));
  }, $t = () => {
    const s = ["firstName", "lastName", "email", "phone"];
    for (const r of s) {
      const n = $[r];
      if (typeof n != "string" || !n.trim()) return A({ title: "Validation Error", description: `Please fill in the ${r.replace(/([A-Z])/g, " $1").toLowerCase()} field.`, variant: "destructive" }), false;
    }
    return h === "delivery" && !(o != null && o.address) ? (A({ title: "Address Required", description: "Please set your delivery address from the homepage.", variant: "destructive" }), false) : o != null && o.selectedOutlet ? L && O === "now" ? (A({ title: "Scheduled Delivery Required", description: "Gift boxes require scheduled delivery. Please select a delivery time.", variant: "destructive" }), false) : G && O === "now" ? (A({ title: "Scheduled Delivery Required", description: "Pre-order items require scheduled delivery. Please select a delivery date and time.", variant: "destructive" }), false) : O === "scheduled" && !g ? (A({ title: "Delivery Time Required", description: "Please select a delivery time for your scheduled order.", variant: "destructive" }), false) : true : (A({ title: "Location Required", description: "Please allow location access to proceed with your order.", variant: "destructive" }), false);
  }, Bt = () => __async(null, null, function* () {
    if (!se.trim()) return;
    Ve(true);
    const s = yield b(se);
    if (Ve(false), s.success) {
      We(""), Ke(null), He(false), Ce(false);
      try {
        oe("apply_promo_code", { promo_code: se, discount_amount: t.discount || 0, currency: "NGN" }), Ze(se, Math.round((s.discount || 0) * 100), true);
      } catch (r) {
        console.warn("GA4 promo code tracking error:", r);
      }
      A({ title: "Promo Code Applied", description: "Promo code has been applied to your order." }), window.dispatchEvent(new Event("cart-refresh"));
    } else {
      try {
        Ze(se, 0, false);
      } catch (r) {
        console.warn("GA4 promo code tracking error:", r);
      }
      A({ title: "Invalid Promo Code", description: s.error, variant: "destructive" });
    }
  }), Wt = (s) => {
    Be(s), fe(true), le(false), Se((r) => {
      var n, a;
      return __spreadProps(__spreadValues({}, r), { firstName: ((n = s.fullName) == null ? void 0 : n.split(" ")[0]) || "", lastName: ((a = s.fullName) == null ? void 0 : a.split(" ").slice(1).join(" ")) || "", email: s.email || "", phone: s.phone || "" });
    }), A({ title: "Success", description: "You're now signed in and ready to checkout!" });
  }, zt = () => {
    Tt(true), le(false), fe(true);
  }, Vt = (s) => __async(null, null, function* () {
    var r, n;
    try {
      const a = yield fetch("/api/location/nearest-outlet", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ latitude: s.latitude, longitude: s.longitude }) });
      let d = null;
      a.ok && (d = yield a.json());
      const j = (r = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : r.id, w = d == null ? void 0 : d.id;
      if (j && w && j !== w) {
        if (window.confirm(`Your new location will be served by ${d.name} instead of ${(n = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : n.name}. This will clear your current cart. Continue?`)) {
          c();
          const D = __spreadProps(__spreadValues({}, s), { selectedOutlet: d });
          localStorage.setItem("user-location", JSON.stringify(D)), i("/");
        }
      } else {
        const I = __spreadProps(__spreadValues({}, s), { selectedOutlet: d || (o == null ? void 0 : o.selectedOutlet), distance: (d == null ? void 0 : d.distance) || (o == null ? void 0 : o.distance) });
        localStorage.setItem("user-location", JSON.stringify(I)), window.dispatchEvent(new CustomEvent("location-change", { detail: I })), setTimeout(() => {
          window.dispatchEvent(new CustomEvent("cart-refresh"));
        }, 100), Ne(false);
      }
    } catch (a) {
      console.error("Failed to update location:", a), A({ title: "Error", description: "Failed to update location. Please try again.", variant: "destructive" });
    }
  }), Lt = () => __async(null, null, function* () {
    var r, n, a, d, j;
    if (!$t()) return;
    xe(true);
    const s = { firstName: $.firstName.trim(), lastName: $.lastName.trim(), email: $.email.trim(), phone: $.phone.trim(), specialInstructions: $.specialInstructions.trim() };
    try {
      const w = kt();
      Vs();
      const I = sessionStorage.getItem("partner-slug"), D = __spreadProps(__spreadValues(__spreadValues({ outletId: (r = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : r.id, orderType: h, source: w, subtotal: (t.subtotal || 0).toString(), deliveryFee: (h === "delivery" && t.deliveryFee || 0).toString(), discount: (t.discount || 0).toString(), total: (h === "delivery" ? (t.total || 0) + (t.deliveryFee || 0) : t.total || 0).toString(), paymentStatus: "pending", useWalletBalance: z && (p == null ? void 0 : p.balance) && p.balance > 0, walletAmount: z ? je() : 0, paystackAmount: U(), deliveryAddress: h === "delivery" ? o == null ? void 0 : o.address : null, latitude: h === "delivery" ? (n = o == null ? void 0 : o.latitude) == null ? void 0 : n.toString() : null, longitude: h === "delivery" ? (a = o == null ? void 0 : o.longitude) == null ? void 0 : a.toString() : null, customerPhone: s.phone, customerEmail: s.email, customerName: `${s.firstName} ${s.lastName}`.trim(), specialInstructions: s.specialInstructions, promoCode: t.promoCode, spinRecordId: t.spinRecordId || null }, I ? { partnerSlug: I } : {}), (() => {
        if (O === "scheduled" && g) {
          const R = `${g.date}T${g.time}:00`, ce = new Date(R);
          return isNaN(ce.getTime()) ? (console.error("Invalid scheduled date/time:", { date: g.date, time: g.time, constructed: R }), { isScheduled: false, scheduledAt: null }) : { isScheduled: true, scheduledAt: ce.toISOString() };
        }
        return { isScheduled: false, scheduledAt: null };
      })()), { items: q.map((R) => ({ productId: R.productId, quantity: R.quantity, unitPrice: (R.unitPrice || 0).toString(), totalPrice: (R.totalPrice || 0).toString(), customizations: R.customizations, addons: R.addons, specialInstructions: R.specialInstructions })) }), V = yield fetch("/api/orders", { method: "POST", headers: __spreadValues({ "Content-Type": "application/json" }, u ? S() : {}), body: JSON.stringify(D) }), Y = yield V.json();
      if (V.ok) {
        const R = U();
        if (z && R === 0) {
          console.log("Order fully covered by wallet balance, status set to pending by server");
          try {
            oe("purchase", { transaction_id: Y.orderNumber, value: J(), currency: "NGN", payment_method: "wallet", order_type: h, item_count: t.items.length, shipping: h === "delivery" && t.deliveryFee || 0 }), et(Y.orderNumber, q, Math.round(J() * 100), Math.round((h === "delivery" && t.deliveryFee || 0) * 100), Math.round((t.discount || 0) * 100), t.promoCode, (d = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : d.name);
          } catch (Ae) {
            console.warn("GA4 purchase tracking failed:", Ae);
          }
          $e(true), c(), ie(), i(`/thank-you?orderId=${Y.id}&orderNumber=${Y.orderNumber}`);
          return;
        }
        const ce = yield fetch("/api/payment/initialize", { method: "POST", headers: __spreadValues({ "Content-Type": "application/json" }, u ? S() : {}), body: JSON.stringify({ amount: Math.floor(R), email: s.email, orderId: Y.id, isPartialPayment: true }) }), Pe = yield ce.json();
        if (ce.ok) {
          if (yield Cs(), !window.PaystackPop) throw new Error("Payment service is not loaded. Please refresh the page and try again.");
          try {
            is(q, "paystack");
          } catch (ve) {
            console.warn("GA4 add payment info tracking error:", ve);
          }
          const Ae = window.PaystackPop.setup({ key: "pk_live_51d38ad85ab130cafa9cd8d675f62374d2193b91", email: s.email, amount: Math.floor(R) * 100, ref: Pe.reference, currency: "NGN", callback: function(ve) {
            console.log("Paystack callback triggered:", ve), xe(false), fetch("/api/payment/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ reference: ve.reference }) }).then((T) => T.json()).then((T) => {
              var Qe;
              if (console.log("Payment verification result:", T), T.success) {
                try {
                  oe("purchase", { transaction_id: T.order.orderNumber, value: parseFloat(T.order.total), currency: "NGN", payment_method: "paystack", order_type: h, item_count: t.items.length, shipping: h === "delivery" && t.deliveryFee || 0, wallet_used: z }), et(T.order.orderNumber, q, Math.round(parseFloat(T.order.total) * 100), Math.round((h === "delivery" && t.deliveryFee || 0) * 100), Math.round((t.discount || 0) * 100), t.promoCode, (Qe = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : Qe.name);
                } catch (Yt) {
                  console.warn("GA4 purchase tracking failed:", Yt);
                }
                $e(true), c(), ie(), sessionStorage.setItem("last-order-number", T.order.orderNumber), sessionStorage.setItem("last-order-total", T.order.total), A({ title: "Payment Successful!", description: `Your payment has been processed. Order #${T.order.orderNumber} confirmed.` }), setTimeout(() => {
                  i("/thank-you");
                }, 1e3);
              } else throw new Error("Payment verification failed");
            }).catch((T) => {
              console.error("Payment verification error:", T), A({ title: "Payment Error", description: "Payment was processed but verification failed. Please contact support.", variant: "destructive" });
            });
          }, onClose: function() {
            console.log("Payment modal closed"), xe(false);
          } });
          console.log("Opening Paystack modal...", Pe), Ae.openIframe();
        } else throw new Error(Pe.message || "Payment initialization failed");
      } else throw new Error(Y.message || "Order creation failed");
    } catch (w) {
      if (navigator.onLine) A({ title: "Order Failed", description: w instanceof Error ? w.message : "An unexpected error occurred", variant: "destructive" });
      else {
        const I = { items: q, userInfo: { firstName: s.firstName, lastName: s.lastName, email: s.email, phone: s.phone }, deliveryInfo: __spreadValues({ orderType: h, address: o == null ? void 0 : o.address, specialInstructions: s.specialInstructions, outletId: (j = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : j.id }, (() => {
          if (O === "scheduled" && g) {
            const V = `${g.date}T${g.time}:00`, Y = new Date(V);
            if (!isNaN(Y.getTime())) return { isScheduled: true, scheduledAt: Y.toISOString() };
          }
          return { isScheduled: false, scheduledAt: null };
        })()), paymentMethod: "paystack", total: h === "delivery" ? t.total : t.subtotal - t.discount };
        (yield St(I)) && (c(), ie(), i("/"));
      }
    } finally {
      xe(false);
    }
  }), Kt = (s, r) => {
    var a;
    const n = ((a = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : a.id) || 0;
    Pt(s, r, n), K("scheduled"), re(false), A({ title: "Schedule Updated", description: `Your delivery is now scheduled for ${s} at ${X(r)}` });
  }, Ht = () => {
    re(false), !g && !G && !L && K("now");
  };
  return k || !t ? e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4", style: { borderBottomColor: F } }), e.jsx("p", { className: "text-gray-600", children: "Loading your cart..." })] }) }) : q.length === 0 && !Et ? e.jsx("div", { className: "min-h-screen bg-gray-50", children: e.jsx("div", { className: "max-w-md mx-auto pt-16 px-4", children: e.jsx(ee, { children: e.jsx(te, { className: "pt-6", children: e.jsxs("div", { className: "text-center", children: [e.jsx(ks, { className: "h-16 w-16 mx-auto mb-4 text-gray-400" }), e.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Your cart is empty" }), e.jsx("p", { className: "text-gray-600 mb-6", children: "Add some delicious items to your cart first!" }), e.jsx(Oe, { href: "/", children: e.jsx(B, { style: { backgroundColor: Z, color: "#FFFFFF" }, children: "Browse Menu" }) })] }) }) }) }) }) : M ? e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4", style: { borderBottomColor: F } }), e.jsx("p", { className: "text-gray-600", children: "Loading..." })] }) }) : !Mt && !Le && !f && !M && !we ? e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4", style: { borderBottomColor: F } }), e.jsx("p", { className: "text-gray-600", children: "Loading..." })] }) }) : e.jsx("div", { className: "min-h-screen bg-gray-50", children: e.jsxs("div", { className: "container mx-auto px-4 py-8", children: [e.jsxs("div", { className: "max-w-6xl mx-auto", children: [e.jsxs("div", { className: "flex items-center mb-8", children: [e.jsx(Oe, { href: "/", children: e.jsxs(B, { variant: "ghost", size: "sm", className: "mr-4 hover:bg-gray-200", children: [e.jsx(Ss, { className: "h-4 w-4 mr-2" }), "Back"] }) }), e.jsx("h1", { className: "text-3xl font-bold", children: "Checkout" })] }), e.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsx(ee, { children: e.jsxs(te, { className: "pt-6", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsx("button", { type: "button", onClick: () => {
    qe("delivery");
    try {
      Xe("delivery"), oe("select_delivery_method", { method: "delivery" });
    } catch (s) {
      console.warn("GA4 delivery method tracking error:", s);
    }
  }, className: "p-3 rounded-lg border transition-all border-gray-200 bg-white text-gray-700 hover:border-gray-300", style: h === "delivery" ? { backgroundColor: Z, borderColor: Z, color: "#FFFFFF" } : {}, children: e.jsx("div", { className: "text-center font-semibold", children: "Delivery" }) }), e.jsx("button", { type: "button", onClick: () => {
    qe("pickup");
    try {
      Xe("pickup"), oe("select_delivery_method", { method: "pickup" });
    } catch (s) {
      console.warn("GA4 delivery method tracking error:", s);
    }
  }, className: "p-3 rounded-lg border transition-all border-gray-200 bg-white text-gray-700 hover:border-gray-300", style: h === "pickup" ? { backgroundColor: Z, borderColor: Z, color: "#FFFFFF" } : {}, children: e.jsx("div", { className: "text-center font-semibold", children: "Pickup" }) })] }), h === "pickup" && (o == null ? void 0 : o.selectedOutlet) && e.jsx("div", { className: "mt-4 p-3 bg-blue-50 rounded-lg", children: e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "font-medium text-blue-900", children: "Pickup Location:" }), e.jsx("div", { className: "text-blue-700", children: o.selectedOutlet.name }), e.jsx("div", { className: "text-blue-600", children: o.selectedOutlet.address })] }) })] }) }), e.jsxs(ee, { children: [e.jsx(ue, { children: e.jsxs(me, { className: "flex items-center", children: [e.jsx(Ps, { className: "w-5 h-5 mr-2" }), "Contact Information"] }) }), e.jsxs(te, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(Q, { htmlFor: "firstName", children: "First Name *" }), e.jsx(ne, { id: "firstName", name: "firstName", value: $.firstName, onChange: de, required: true })] }), e.jsxs("div", { children: [e.jsx(Q, { htmlFor: "lastName", children: "Last Name *" }), e.jsx(ne, { id: "lastName", name: "lastName", value: $.lastName, onChange: de, required: true })] })] }), e.jsxs("div", { children: [e.jsx(Q, { htmlFor: "email", children: "Email *" }), e.jsx(ne, { id: "email", name: "email", type: "email", value: $.email, onChange: de, required: true })] }), e.jsxs("div", { children: [e.jsx(Q, { htmlFor: "phone", children: "Phone Number *" }), e.jsx(ne, { id: "phone", name: "phone", type: "tel", value: $.phone, onChange: de, required: true })] })] })] }), h === "delivery" && e.jsxs(ee, { children: [e.jsx(ue, { children: e.jsxs(me, { className: "flex items-center justify-between", children: [e.jsx("span", { children: "Delivery Address" }), e.jsx(B, { variant: "outline", size: "sm", onClick: () => Ne(true), children: "Change Address" })] }) }), e.jsx(te, { children: e.jsx("div", { className: "p-3 bg-gray-50 rounded-lg border", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx(As, { className: "h-4 w-4 text-gray-600 mr-2" }), e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "font-medium text-gray-900", children: (o == null ? void 0 : o.address) || "No address selected" }), (o == null ? void 0 : o.selectedOutlet) && e.jsxs("div", { className: "text-gray-600 mt-1", children: ["Delivery from: ", o.selectedOutlet.name] })] })] }) }) })] }), g && e.jsxs(ee, { children: [e.jsx(ue, { children: e.jsxs(me, { className: "flex items-center justify-between", children: [e.jsx("span", { children: "Scheduled Delivery or Pickup" }), e.jsx(B, { variant: "outline", size: "sm", onClick: () => re(true), children: "Change Schedule" })] }) }), e.jsx(te, { children: e.jsx("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx("div", { className: "w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3", children: e.jsx("svg", { className: "w-4 h-4 text-blue-600", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) }) }), e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "font-medium text-blue-900", children: (() => {
    const s = g.date.split("-"), r = parseInt(s[0]), n = parseInt(s[1]) - 1, a = parseInt(s[2]), d = new Date(r, n, a), j = /* @__PURE__ */ new Date();
    j.setHours(0, 0, 0, 0);
    const w = new Date(j);
    return w.setDate(j.getDate() + 1), d.getTime() === j.getTime() ? `Today at ${X(g.time)}` : d.getTime() === w.getTime() ? `Tomorrow at ${X(g.time)}` : `${d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })} at ${X(g.time)}`;
  })() }), e.jsx("div", { className: "text-blue-700 mt-1", children: "Your order will be prepared and delivered at the scheduled time" })] })] }) }) })] }), e.jsxs(ee, { children: [e.jsx(ue, { children: e.jsx(me, { children: "Special Instructions" }) }), e.jsx(te, { children: e.jsx(ls, { name: "specialInstructions", placeholder: "Any special requests or instructions for your order?", value: $.specialInstructions, onChange: de, className: "h-20 resize-none" }) })] })] }), e.jsx("div", { className: "space-y-6", children: e.jsxs(ee, { className: "sticky top-8", children: [e.jsx(ue, { children: e.jsx(me, { children: "Order Summary" }) }), e.jsxs(te, { className: "space-y-4", children: [L ? e.jsx("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-amber-600", children: "\u{1F381}" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-amber-800", children: "Gift boxes in your cart" }), e.jsx("p", { className: "text-xs text-amber-700 mt-1", children: "Gift boxes require scheduled delivery. To order now, please remove gift boxes from your cart." })] })] }) }) : null, e.jsxs("div", { className: "border-b pb-4", children: [e.jsx("h3", { className: "font-medium text-sm mb-3", children: "When would you like your order?" }), e.jsxs(vt, { value: O, onValueChange: (s) => {
    s === "now" && he && !G && !L ? (K("now"), ie()) : s === "scheduled" && !g ? re(true) : s === "scheduled" && K(s);
  }, className: "space-y-3", children: [(() => {
    var n;
    const s = L, r = !he || s || G;
    return e.jsxs("div", { className: `flex items-center space-x-3 p-3 border rounded-lg transition-colors ${r ? "opacity-50 cursor-not-allowed bg-gray-100" : "cursor-pointer"}`, style: !r && O === "now" ? { backgroundColor: `${F}10`, borderColor: `${F}33` } : r ? {} : {}, onMouseEnter: (a) => {
      !r && O !== "now" && (a.currentTarget.style.backgroundColor = "rgb(249, 250, 251)");
    }, onMouseLeave: (a) => {
      !r && O !== "now" && (a.currentTarget.style.backgroundColor = "transparent");
    }, onClick: () => {
      r || (K("now"), ie());
    }, children: [e.jsx(Ee, { value: "now", id: "now-summary", disabled: r, style: O === "now" && !r ? { borderColor: F, color: F } : {} }), e.jsxs("div", { className: "flex-1", children: [e.jsxs(Q, { htmlFor: "now-summary", className: `font-medium text-sm ${r ? "text-gray-500 cursor-not-allowed" : "cursor-pointer"}`, children: ["Deliver Now ", !he && "(Outlet Closed)", " ", s && !G && "(Not Available for Gift Boxes)", " ", G && "(Not Available for Pre-Order Items)"] }), e.jsx("p", { className: `text-xs mt-1 ${r ? "text-gray-400" : "text-gray-600"}`, children: he ? G ? "Pre-order items require scheduled delivery" : s ? "Gift boxes require scheduled delivery" : "Get your order as soon as possible" : `Outlet opens at ${((n = o == null ? void 0 : o.selectedOutlet) == null ? void 0 : n.opening_time) || "opening time not available"}` })] })] });
  })(), e.jsxs("div", { className: "flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors", style: O === "scheduled" ? { backgroundColor: `${F}10`, borderColor: `${F}33` } : {}, onMouseEnter: (s) => {
    O !== "scheduled" && (s.currentTarget.style.backgroundColor = "rgb(249, 250, 251)");
  }, onMouseLeave: (s) => {
    O !== "scheduled" && (s.currentTarget.style.backgroundColor = "transparent");
  }, onClick: () => {
    g ? K("scheduled") : re(true);
  }, children: [e.jsx(Ee, { value: "scheduled", id: "scheduled-summary", style: O === "scheduled" ? { borderColor: F, color: F } : {} }), e.jsxs("div", { className: "flex-1", children: [e.jsx(Q, { htmlFor: "scheduled-summary", className: "font-medium cursor-pointer text-sm", children: "Schedule for Later" }), e.jsx("p", { className: "text-xs text-gray-600 mt-1", children: g ? `Scheduled for ${(() => {
    const s = g.date.split("-"), r = parseInt(s[0]), n = parseInt(s[1]) - 1, a = parseInt(s[2]), d = new Date(r, n, a), j = /* @__PURE__ */ new Date();
    j.setHours(0, 0, 0, 0);
    const w = new Date(j);
    return w.setDate(j.getDate() + 1), d.getTime() === j.getTime() ? `today at ${X(g.time)}` : d.getTime() === w.getTime() ? `tomorrow at ${X(g.time)}` : `${d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })} at ${X(g.time)}`;
  })()}` : "Choose date and time for delivery" }), g && e.jsx(B, { variant: "outline", size: "sm", className: "mt-2 h-6 text-xs", onClick: (s) => {
    s.stopPropagation(), re(true);
  }, children: "Change Time" })] })] })] })] }), e.jsx("div", { className: "space-y-3", children: q.map((s) => e.jsxs("div", { className: "flex justify-between items-start", children: [e.jsxs("div", { className: "flex-1", children: [e.jsxs("h4", { className: "font-semibold text-sm", children: [s.name, e.jsxs("span", { className: "ml-2 text-base font-bold", children: ["\xD7", s.quantity] })] }), (s.customizations.length > 0 || s.addons && s.addons.length > 0) && e.jsx("div", { className: "text-xs text-gray-600 mt-1 space-y-2", children: Array.from(At(s).entries()).map(([r, n]) => e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "font-medium text-gray-700", children: r }), n.map((a, d) => e.jsxs("div", { className: "flex justify-between", children: [e.jsxs("span", { children: [a.name, " ", e.jsxs("span", { className: "ml-1 text-sm font-semibold text-gray-900", children: ["\xD7", a.quantity] })] }), e.jsx("span", { children: C(a.unitPrice * a.quantity) })] }, `${r}-${d}`))] }, r)) })] }), e.jsx("div", { className: "text-sm font-semibold", children: C(Math.max(0, s.totalPrice - Ft(s))) })] }, s.id)) }), e.jsx(pe, {}), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "Subtotal:" }), e.jsx("span", { children: C(t.subtotal) })] }), h === "delivery" && e.jsxs(e.Fragment, { children: [e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "Delivery Fee:" }), t.qualifiesForFreeDelivery ? e.jsxs("span", { className: "text-green-600", children: [e.jsx("span", { className: "line-through text-gray-500 mr-2", children: C(((_a = t.freeDeliveryThreshold) != null ? _a : 0) > 0 ? 1500 : 0) }), "FREE"] }) : e.jsx("span", { children: C(t.deliveryFee) })] }), (() => {
    const s = y == null ? void 0 : y.hasFreeDelivery, r = parseFloat((y == null ? void 0 : y.freeDeliveryMinAmount) || "0"), n = t.subtotal || 0, a = s && n >= r, d = r - n;
    return s ? a ? e.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-2 mt-1", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-green-600", children: "\u{1F389}" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-medium text-green-800", children: "You qualify for FREE DELIVERY!" }), e.jsxs("p", { className: "text-xs text-green-700 mt-1", children: ["Your order is over ", C(r)] })] })] }) }) : d > 0 ? e.jsx("div", { className: "bg-amber-50 border border-amber-200 rounded-lg p-2 mt-1", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-amber-600", children: "\u{1F69A}" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-medium text-amber-800", children: "Almost there!" }), e.jsxs("p", { className: "text-xs text-amber-700 mt-1", children: ["Add ", C(d), " more to qualify for FREE DELIVERY"] })] })] }) }) : null : null;
  })(), !(y != null && y.hasFreeDelivery) && (t.qualifiesForFreeDelivery ? e.jsx("div", { className: "bg-green-50 border border-green-200 rounded-lg p-2 mt-1", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-green-600", children: "\u2705" }), e.jsx("div", { children: e.jsx("p", { className: "text-xs font-medium text-green-800", children: "You qualify for free delivery!" }) })] }) }) : t.remainingForFreeDelivery && t.remainingForFreeDelivery <= 1e4 ? e.jsx("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-2 mt-1", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-blue-600", children: "\u{1F69A}" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-medium text-blue-800", children: "Get free delivery!" }), e.jsxs("p", { className: "text-xs text-blue-700 mt-1", children: ["Add ", C(t.remainingForFreeDelivery), " more to get free delivery (minimum ", C(t.freeDeliveryThreshold || 5e4), ")."] })] })] }) }) : t.freeDeliveryThreshold && e.jsx("div", { className: "bg-gray-50 border border-gray-200 rounded-lg p-2 mt-1", children: e.jsxs("div", { className: "flex items-start space-x-2", children: [e.jsx("div", { className: "text-gray-600", children: "\u{1F69A}" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-xs font-medium text-gray-800", children: "Get free delivery!" }), e.jsxs("p", { className: "text-xs text-gray-700 mt-1", children: ["Get free delivery on orders over ", C(t.freeDeliveryThreshold), "."] })] })] }) }))] }), (t.discount || 0) > 0 && e.jsxs("div", { className: "flex justify-between text-sm text-green-600", children: [e.jsx("span", { children: "Discount:" }), e.jsxs("span", { children: ["-", C(t.discount)] })] }), t.spinPrize && t.spinPrize.prizeType === "free_item" && e.jsxs("div", { className: "flex justify-between text-sm text-green-600 font-bold", children: [e.jsx("span", { children: "Free Item Reward:" }), e.jsxs("span", { className: "text-emerald-700", children: [t.spinPrize.name, " (Free)"] })] }), t.promoCode && e.jsxs("div", { className: "text-xs text-green-600 font-medium", children: ['Promo code "', t.promoCode, '" applied'] }), t.spinPrize && e.jsxs("div", { className: "text-xs text-amber-600 font-bold flex items-center gap-1", children: ['\u{1F389} Spin & Win: "', t.spinPrize.name, '" applied'] }), e.jsx(pe, {}), e.jsxs("div", { className: "flex justify-between font-semibold text-lg", children: [e.jsx("span", { children: "Total:" }), e.jsx("span", { style: { color: F }, children: C(h === "delivery" ? t.total + (t.deliveryFee || 0) : t.total) })] })] }), e.jsx(pe, {}), u && e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Fs, { className: "h-4 w-4", style: { color: F } }), e.jsxs("span", { className: "font-medium", children: [(y == null ? void 0 : y.name) || "EatYum", " Wallet"] })] }), Gt ? e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2", style: { borderBottomColor: F } }) : e.jsxs("span", { className: "text-sm text-gray-600", children: ["Balance: ", C((p == null ? void 0 : p.displayBalance) || 0)] })] }), (p == null ? void 0 : p.balance) && p.balance > 0 && e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ys, { id: "use-wallet", checked: z, onCheckedChange: (s) => Rt(!!s) }), e.jsx(Q, { htmlFor: "use-wallet", className: "text-sm font-medium", children: "Use wallet balance" })] }), z && (p == null ? void 0 : p.balance) && p.balance > 0 && e.jsxs("div", { className: "bg-green-50 border border-green-200 rounded-lg p-3 space-y-2", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(Q, { htmlFor: "wallet-amount", className: "text-xs font-medium text-gray-700", children: "Wallet amount to apply" }), e.jsx(ne, { id: "wallet-amount", type: "number", min: 0, step: "0.01", value: ye === null ? "" : ye, onChange: (s) => {
    const r = Number(s.target.value), n = ((p == null ? void 0 : p.balance) || 0) / 100, a = Math.max(0, Math.min(n, J()));
    if (!Number.isFinite(r)) {
      ge(0);
      return;
    }
    ge(Math.max(0, Math.min(r, a)));
  }, placeholder: "0.00", className: "h-8" }), e.jsxs("p", { className: "text-[11px] text-gray-500", children: ["Max: ", C(Math.max(0, Math.min(((p == null ? void 0 : p.balance) || 0) / 100, J())))] })] }), e.jsxs("div", { className: "flex justify-between text-sm", children: [e.jsx("span", { children: "Order Total:" }), e.jsx("span", { children: C(J()) })] }), e.jsxs("div", { className: "flex justify-between text-sm text-green-600", children: [e.jsx("span", { children: "Wallet Applied:" }), e.jsxs("span", { children: ["-", C(je())] })] }), e.jsxs("div", { className: "flex justify-between text-sm text-blue-700", children: [e.jsx("span", { children: "Balance to Pay:" }), e.jsx("span", { children: C(U()) })] }), e.jsx(pe, {}), e.jsxs("div", { className: "flex justify-between text-sm font-semibold", children: [e.jsx("span", { children: "Remaining to Pay:" }), e.jsx("span", { className: U() === 0 ? "text-green-600" : "", children: C(U()) })] }), U() === 0 && e.jsx("p", { className: "text-xs text-green-600 font-medium", children: "\u2705 Order fully covered by wallet balance!" })] })] }), e.jsx(pe, {}), e.jsxs("div", { className: "space-y-4", children: [(t == null ? void 0 : t.promoCode) && e.jsx("div", { className: "p-3 bg-green-50 border border-green-200 rounded-lg", children: e.jsxs("div", { className: "flex justify-between items-start", children: [e.jsxs("div", { children: [e.jsxs("p", { className: "text-sm font-medium text-green-800", children: ["\u{1F389} Applied Promo: ", t.promoName || t.promoCode] }), e.jsxs("p", { className: "text-xs text-green-600 mt-1", children: ["Saved ", C(t.promoDiscount || 0), " on your order"] })] }), e.jsx(B, { variant: "outline", size: "sm", onClick: () => {
    v(), Ke(null), He(false), Ce(true), setTimeout(() => {
      Ce(false);
    }, 3e4);
  }, className: "text-xs", children: "Remove" })] }) }), t.spinRecordId && t.spinPrize && e.jsxs("div", { className: "p-4 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/30 rounded-xl relative overflow-hidden shadow-sm", children: [e.jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full -mr-8 -mt-8 pointer-events-none" }), e.jsxs("div", { className: "flex justify-between items-start relative z-10", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-bold text-amber-850 flex items-center gap-1.5", children: "\u{1F389} Spin & Win Reward Active!" }), e.jsx("p", { className: "text-sm font-semibold text-amber-900 mt-1 font-bold", children: t.spinPrize.name }), e.jsx("p", { className: "text-xs text-amber-700 mt-1", children: t.spinPrize.description }), t.spinPrize.prizeType === "free_item" && e.jsx("span", { className: "inline-block mt-2 px-2 py-0.5 bg-amber-500 text-slate-950 font-bold text-[10px] rounded-full uppercase tracking-wider", children: "Free Item Added" })] }), e.jsx(B, { variant: "outline", size: "sm", onClick: () => N(), className: "text-xs border-amber-500/30 text-amber-950 hover:bg-amber-500/10", children: "Remove" })] })] }), !(t != null && t.promoCode) && !t.spinRecordId && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx(ne, { placeholder: "Enter promo code", value: se, onChange: (s) => We(s.target.value), className: "flex-1 text-sm" }), e.jsx(B, { onClick: Bt, disabled: ze, size: "sm", style: { backgroundColor: F, color: "#FFFFFF" }, children: ze ? "Applying..." : "Apply" })] }), H && e.jsxs("div", { className: "p-4 rounded-2xl border border-red-100/50 bg-[#FDEDEE] text-slate-900 shadow-md relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5 select-none", children: [e.jsx("div", { className: "absolute -top-12 -right-12 w-24 h-24 bg-red-400/10 rounded-full blur-xl pointer-events-none" }), e.jsx("div", { className: "absolute -bottom-12 -left-12 w-24 h-24 bg-red-400/5 rounded-full blur-xl pointer-events-none" }), e.jsxs("div", { className: "relative z-10 grid grid-cols-[1fr_auto] gap-3 items-center", children: [e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs("div", { className: "flex flex-wrap gap-1.5 justify-between items-center", children: [e.jsxs("div", { className: "flex items-center gap-1.5 bg-[#ED1B24] text-white font-extrabold text-[9px] pl-1 pr-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm", children: [e.jsx("div", { className: "w-4 h-4 rounded-full bg-white flex items-center justify-center text-[#ED1B24] shadow-sm flex-shrink-0", children: e.jsx(Os, { className: "w-2.5 h-2.5" }) }), e.jsx("span", { children: "Spin & Win" })] }), e.jsxs("span", { className: "text-[9px] text-[#ED1B24] font-black bg-white border border-[#ED1B24]/20 px-2 py-0.5 rounded-md shadow-sm", children: ["MIN SPEND: \u20A6", Math.round(H.minCartValueKobo / 100).toLocaleString()] })] }), e.jsxs("div", { className: "space-y-0.5", children: [e.jsx("h4", { className: "text-[13px] font-black text-slate-950 uppercase tracking-wide", children: "SPIN & WIN" }), e.jsx("p", { className: "text-[9.5px] text-[#ED1B24] font-extrabold leading-tight", children: "Amazing Rewards Every Time!!" })] }), W != null && W.eligible ? e.jsxs(B, { onClick: () => ke(true), className: "w-full bg-[#ED1B24] hover:bg-[#d02013] text-white font-extrabold text-[10px] py-2 h-9 rounded-lg shadow-sm border-none flex items-center justify-between px-3.5 transition-all transform active:scale-[0.98] uppercase tracking-wider mt-0.5", children: [e.jsx("span", { children: "SPIN THE WHEEL NOW" }), e.jsx("div", { className: "w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#ED1B24] shadow-sm flex-shrink-0", children: e.jsxs("svg", { width: "9", height: "9", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), e.jsx("polyline", { points: "12 5 19 12 12 19" })] }) })] }) : e.jsx("div", { className: "space-y-2 mt-0.5", children: u ? t.subtotal < H.minCartValueKobo / 100 && !t.promoCode && (!(W != null && W.reason) || !W.reason.includes("already spun")) ? e.jsxs("div", { className: "space-y-1.5 mt-0.5", children: [e.jsxs("div", { className: "flex justify-between text-[8.5px] text-slate-500 font-extrabold uppercase tracking-wider", children: [e.jsx("span", { children: "Progress to unlock:" }), e.jsxs("span", { className: "text-[#ED1B24] font-black", children: ["\u20A6", Math.round(t.subtotal).toLocaleString(), " / \u20A6", Math.round(H.minCartValueKobo / 100).toLocaleString()] })] }), e.jsx("div", { className: "w-full bg-slate-200 rounded-full h-1 overflow-hidden", children: e.jsx("div", { className: "bg-gradient-to-r from-[#ED1B24] to-red-400 h-1 rounded-full transition-all duration-300", style: { width: `${Math.min(100, t.subtotal / (H.minCartValueKobo / 100) * 100)}%` } }) }), e.jsxs("p", { className: "text-[9.5px] text-[#ED1B24] font-extrabold text-center bg-white border border-[#ED1B24]/10 py-1 rounded-lg", children: ["Add \u20A6", Math.round(H.minCartValueKobo / 100 - t.subtotal).toLocaleString(), " more to qualify!"] })] }) : W != null && W.reason ? e.jsxs("p", { className: "text-[9.5px] text-slate-500 font-bold text-center bg-white border border-red-50/50 rounded-lg py-1.5 px-2", children: ["\u2139\uFE0F ", W.reason] }) : e.jsx("p", { className: "text-[9.5px] text-slate-400 text-center py-1", children: "Checking eligibility..." }) : e.jsxs(B, { onClick: () => ke(true), className: "w-full bg-[#ED1B24] hover:bg-[#d02013] text-white font-extrabold text-[10px] py-2 h-9 rounded-lg shadow-sm border-none flex items-center justify-between px-3.5 transition-all transform active:scale-[0.98] uppercase tracking-wider mt-0.5", children: [e.jsx("span", { children: "SIGN IN TO SPIN NOW" }), e.jsx("div", { className: "w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#ED1B24] shadow-sm flex-shrink-0", children: e.jsxs("svg", { width: "9", height: "9", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "4", strokeLinecap: "round", strokeLinejoin: "round", children: [e.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), e.jsx("polyline", { points: "12 5 19 12 12 19" })] }) })] }) }), e.jsx("div", { children: e.jsx("p", { className: "text-[9.5px] text-slate-500 font-semibold mt-1 leading-tight", children: "Spin and win food items, vouchers, cash back, points, or raffle tickets!" }) })] }), e.jsx("div", { className: "flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center relative", children: e.jsx("img", { src: "/uploads/Group 626516.svg", alt: "Lucky Spin Wheel", className: "w-full h-full object-contain transition-transform duration-500 hover:rotate-12 hover:scale-105" }) })] })] })] })] }), !u && e.jsx("div", { className: "border-t pt-4", children: e.jsxs("div", { className: "text-center mb-3", children: [e.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "\u{1F381} Join or sign in to unlock rewards, promo codes, and wallet payments" }), e.jsx(B, { size: "sm", onClick: () => le(true), className: "transition-opacity hover:opacity-90", style: { backgroundColor: Z, color: "#FFFFFF" }, children: "Join or Sign In" })] }) }), e.jsx(B, { onClick: Lt, disabled: Ge, className: "w-full", style: { backgroundColor: Z, color: "#FFFFFF" }, size: "lg", children: Ge ? "Processing..." : z && U() === 0 ? "Place Order - Fully Paid with Wallet" : `Make Payment - ${C(U())}` }), e.jsxs("div", { className: "text-xs text-gray-600 text-center", children: ["By placing this order, you agree to our", " ", e.jsx(Oe, { href: "/terms-of-service", children: e.jsx("span", { className: "underline cursor-pointer transition-opacity hover:opacity-80", style: { color: F }, children: "Terms of Service" }) })] })] })] }) })] })] }), e.jsx(vs, { isOpen: It, onClose: () => Ne(false), onLocationSelected: Vt }), e.jsx(js, { open: Le, onClose: () => le(false), onAuthenticated: Wt, onContinueAsGuest: zt }), e.jsx(Ns, { isOpen: Dt, onClose: Ht, onConfirm: Kt, userLocation: o, leadTimeHours: (() => {
    const s = q.filter((r) => r.orderAvailabilityMode === "preorder_only");
    return s.length > 0 ? Math.max(...s.map((r) => {
      var _a2, _b;
      var n;
      return (_b = (_a2 = r.preorderLeadTimeHours) != null ? _a2 : (n = r.product) == null ? void 0 : n.preorderLeadTimeHours) != null ? _b : 24;
    })) : 1;
  })(), productName: G ? "Your pre-order items" : void 0 }), H && Ye && e.jsx(ws, { isOpen: _t, onClose: () => ke(false), campaign: H, prizes: Ye, getAuthHeader: S, onRewardClaimed: (s, r) => {
    r.fulfillmentAction !== "issue_voucher_future" && r.prizeType !== "raffle" && x(s, r), qt(), A({ title: r.fulfillmentAction === "issue_voucher_future" || r.prizeType === "raffle" ? "Reward Claimed!" : "Reward Applied!", description: `Claimed: ${r.name}` });
  } }), e.jsx(bs, {})] }) });
}
export { Rr as default };
