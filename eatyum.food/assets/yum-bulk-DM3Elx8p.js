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
import { N as Ze, a as et, c as tt, r as c, b as V, i as st, j as e, L as D, B as J, X as rt } from "./index-DOfu0sXg.js";
import { u as at, a as lt, b as it, O as ot } from "./use-scheduled-delivery-QXJaYNqy.js";
import { u as nt } from "./use-auth-d_ltKWkf.js";
import { P as ct, D as dt, a as mt, b as ht, c as le, d as xt } from "./product-search-DjJMGOuy.js";
import { F as ut, L as pt } from "./location-modal-Cr-IHIoa.js";
import { a as gt, S as ft, F as yt, C as bt, O as vt, b as jt, L as Oe } from "./scheduled-delivery-notice-Cf3rNKIR.js";
import { i as Ce } from "./outlet-utils-Dqa2FQkG.js";
import { S as Se } from "./skeleton-Bv9tx7fM.js";
import { D as Nt, a as wt, b as kt, c as Ot } from "./dialog-BUvIuveX.js";
import { M as Ct } from "./map-pin-ChG4yLkU.js";
import { S as St } from "./shopping-cart-C1hOzoyN.js";
import { U as Mt } from "./user-adl9AYKF.js";
import { C as Pt } from "./chevron-down-DegxUQDE.js";
import { F as At } from "./filter-56Ct97Iz.js";
import { M as Lt } from "./minus-zDmsn0vk.js";
import { P as Ft } from "./plus-xl2HqeIg.js";
import { P as Dt } from "./phone-Cx4FTVKN.js";
import "./input-FyV2XACZ.js";
import "./label-B38UEnoM.js";
import "./auth-AqNcfriC.js";
import "./useReferralReward-BeyZodYI.js";
import "./arrow-left-CK7JF7w9.js";
import "./gift-C_SZrOe8.js";
import "./mail-WBbfgCoF.js";
import "./smartphone-DMb4mbpx.js";
import "./useMutation-CVmbONMy.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-Czlrzsbg.js";
import "./chevron-right-DkUlsPHD.js";
import "./check-AkIa94Y-.js";
import "./currency-cZDvJQzL.js";
import "./search-BFN4Wc19.js";
import "./message-circle-Ctbm3h4-.js";
import "./index-D-8nYH0_.js";
import "./custom-autocomplete-Cusxb0jm.js";
import "./calendar-DfgMOSD7.js";
import "./trash-2-MFuZdLCA.js";
import "./store-Cr0AuVYD.js";
import "./timezone-utils-D5P8NMTs.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
import "./triangle-alert-BZPq43t0.js";
import "./clock-DQ0X7PrC.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Tt = Ze("ArrowUpRight", [["path", { d: "M7 7h10v10", key: "1tivn9" }], ["path", { d: "M7 17 17 7", key: "1vkiza" }]]), It = `
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(-25deg); }
    50% { transform: translateY(-20px) rotate(-25deg); }
  }
  @keyframes floatRight {
    0%, 100% { transform: translateY(0) rotate(25deg); }
    50% { transform: translateY(-20px) rotate(25deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    50% { box-shadow: 0 0 20px 10px rgba(37, 211, 102, 0.3); }
  }
  .hero-ribbon-left { animation: float 6s ease-in-out infinite; }
  .hero-ribbon-right { animation: floatRight 6s ease-in-out infinite 0.5s; }
  .whatsapp-float { animation: pulse-glow 2s ease-in-out infinite; }
  .product-card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.15); }
  .category-card-hover:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }
`, Me = "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop";
function Ss() {
  var _a, _b, _c, _d, _e2, _f, _g, _h;
  var ye, be;
  const { data: s } = et(), { location: a, loading: ie, updateLocation: oe } = at(), { addItem: Pe, itemCount: ne } = lt(), { logout: Ae, isAuthenticated: Le } = nt(), { scheduledDelivery: F, scheduleDelivery: Fe, clearScheduledDelivery: De } = it(), { toast: T } = tt(), [C, K] = c.useState("all"), [Te, B] = c.useState(false), [Ie, X] = c.useState(false), [$e, Z] = c.useState(false), [ee, ze] = c.useState("featured"), [ce, E] = c.useState(false), [_] = c.useState(""), [Ue, te] = c.useState(false), [b, I] = c.useState(null), [M, $] = c.useState(1), [d, se] = c.useState(null), [Be, Ee] = c.useState(true), [_e, re] = c.useState(false), [Ye, z] = c.useState(false), [de, Y] = c.useState(0), [h, A] = c.useState({ offer: false, new: false, vegetarian: false, vegan: false, spicy: false, "price-low": false, "price-mid": false, "price-high": false }), R = ((ye = a == null ? void 0 : a.selectedOutlet) == null ? void 0 : ye.isActive) !== false, U = a != null && a.selectedOutlet ? Ce({ openTime: (_b = (_a = a.selectedOutlet.openTime) != null ? _a : a.selectedOutlet.opening_time) != null ? _b : "", closeTime: (_d = (_c = a.selectedOutlet.closeTime) != null ? _c : a.selectedOutlet.closing_time) != null ? _d : "", daysOpen: (_f = (_e2 = a.selectedOutlet.daysOpen) != null ? _e2 : a.selectedOutlet.days_open) != null ? _f : [], isActive: R }) : true, { data: G = [] } = V({ queryKey: ["/api/outlets"], queryFn: st({ on401: "throw" }), enabled: !!(a != null && a.selectedOutlet), refetchInterval: a != null && a.selectedOutlet ? 6e4 : false, refetchOnWindowFocus: false, staleTime: 6e4 });
  c.useEffect(() => {
    if (!(a != null && a.selectedOutlet) || !Array.isArray(G) || G.length === 0) return;
    const t = G.find((g) => {
      var m;
      return Number(g.id) === Number((m = a.selectedOutlet) == null ? void 0 : m.id);
    });
    if (!t) return;
    const r = a.selectedOutlet;
    if (!(r.isActive !== t.isActive || r.openTime !== t.openTime || r.closeTime !== t.closeTime || JSON.stringify(r.daysOpen) !== JSON.stringify(t.daysOpen))) return;
    const x = __spreadProps(__spreadValues({}, a), { selectedOutlet: t });
    oe(x), localStorage.setItem("yum-bulk-location", JSON.stringify(x));
  }, [G, a]);
  const p = (s == null ? void 0 : s.colorScheme) || "#006400", Re = (s == null ? void 0 : s.name) || "YumBulk", me = c.useMemo(() => {
    const t = !s || s.name === "EatYum" ? "/eatyum-logo.png" : "/logo.png", r = (s == null ? void 0 : s.logoLightUrl) || (s == null ? void 0 : s.logoDarkUrl) || (s == null ? void 0 : s.logoUrl) || t, l = (s == null ? void 0 : s.logoDarkUrl) || r;
    return { light: r, dark: l };
  }, [s]), { data: he = [], isLoading: Ge } = V({ queryKey: ["/api/categories", s == null ? void 0 : s.id], queryFn: () => __async(null, null, function* () {
    if (!(s != null && s.id)) return [];
    const t = yield fetch(`/api/categories?brandId=${s.id}`);
    if (!t.ok) throw new Error("Failed to fetch categories");
    return t.json();
  }), enabled: !!(s != null && s.id), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: S = [] } = V({ queryKey: ["/api/banners", s == null ? void 0 : s.id], queryFn: () => __async(null, null, function* () {
    if (!(s != null && s.id)) return [];
    const t = yield fetch(`/api/banners?brandId=${s.id}`);
    if (!t.ok) throw new Error("Failed to fetch banners");
    return t.json();
  }), enabled: !!(s != null && s.id), staleTime: 6e4, gcTime: 5 * 60 * 1e3 }), w = (S == null ? void 0 : S.filter((t) => t.isActive !== false && (!t.bannerType || t.bannerType === "carousel"))) || [], u = S == null ? void 0 : S.find((t) => t.isActive !== false && t.bannerType === "promo"), P = S == null ? void 0 : S.find((t) => t.isActive !== false && t.bannerType === "hero");
  w[0];
  const xe = c.useMemo(() => he.filter((t) => t.isActive !== false).sort((t, r) => {
    var _a2, _b2;
    return ((_a2 = t.sortOrder) != null ? _a2 : 999) - ((_b2 = r.sortOrder) != null ? _b2 : 999);
  }), [he]);
  c.useEffect(() => {
    !ie && !a && B(true);
  }, [ie, a]), c.useEffect(() => {
    if (a != null && a.selectedOutlet && !Ce(a.selectedOutlet) && !F) {
      const t = setTimeout(() => {
        re(true);
      }, 1e3);
      return () => clearTimeout(t);
    }
  }, [a == null ? void 0 : a.selectedOutlet, F]);
  const qe = () => {
    re(false), z(true);
  }, He = (t, r) => {
    a != null && a.selectedOutlet && (Fe(t, r, a.selectedOutlet.id), z(false), T({ title: "Delivery Scheduled", description: `Your delivery is scheduled for ${t} at ${r}` }));
  };
  c.useEffect(() => {
    if (w.length <= 1) return;
    const t = setInterval(() => {
      Y((r) => (r + 1) % w.length);
    }, 5e3);
    return () => clearInterval(t);
  }, [w.length]);
  const ae = (be = a == null ? void 0 : a.selectedOutlet) == null ? void 0 : be.id, { data: q = [], isLoading: Qe } = V({ queryKey: ["/api/products", C, ae, s == null ? void 0 : s.id], queryFn: () => __async(null, null, function* () {
    const t = new URLSearchParams();
    C !== "all" && t.append("categoryId", String(C)), ae && t.append("outletId", String(ae)), s != null && s.id && t.append("brandId", String(s.id));
    const r = yield fetch(`/api/products?${t.toString()}`);
    if (!r.ok) throw new Error("Failed to fetch products");
    return r.json();
  }), enabled: !!(s != null && s.id), staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), ue = c.useMemo(() => {
    const t = (o) => {
      const f = (o.description || "").toLowerCase(), n = [];
      return f.includes("vegan") && n.push("vegan"), f.includes("vegetarian") && n.push("vegetarian"), (f.includes("spicy") || f.includes("pepper")) && n.push("spicy"), __spreadProps(__spreadValues({}, o), { tags: n });
    }, r = q.filter((o) => o.isActive !== false).map(t), l = r.map((o) => {
      var n;
      const f = o.bulkServingOptions;
      if (f && Array.isArray(f) && f.length > 0) {
        const v = f.filter((y) => y.price && y.price > 0);
        if (v.length > 0) return Math.min(...v.map((y) => Number(y.price)));
      }
      return Number(((n = o.availability) == null ? void 0 : n.priceOverride) || o.basePrice || 0);
    }).filter((o) => o > 0), x = l.length > 0 ? Math.min(...l) : 0, m = (l.length > 0 ? Math.max(...l) : 0) - x, j = x + m / 3, O = x + m * 2 / 3;
    return r.filter((o) => {
      var L, ve, je, Ne, we;
      const f = C === "all" || o.categoryId === C, n = _ ? o.name.toLowerCase().includes(_.toLowerCase()) || (o.description || "").toLowerCase().includes(_.toLowerCase()) : true, v = o.bulkServingOptions;
      let y = Number(((L = o.availability) == null ? void 0 : L.priceOverride) || o.basePrice || 0);
      if (v && Array.isArray(v) && v.length > 0) {
        const ke = v.filter((W) => W.price && W.price > 0);
        ke.length > 0 && (y = Math.min(...ke.map((W) => Number(W.price))));
      }
      const i = !h["price-low"] || y < j, N = !h["price-mid"] || y >= j && y <= O, H = !h["price-high"] || y > O, Q = (!h.offer || ((ve = o.availability) == null ? void 0 : ve.priceOverride)) && (!h.new || o.sortOrder === 0) && (!h.vegetarian || ((je = o.tags) == null ? void 0 : je.includes("vegetarian"))) && (!h.vegan || ((Ne = o.tags) == null ? void 0 : Ne.includes("vegan"))) && (!h.spicy || ((we = o.tags) == null ? void 0 : we.includes("spicy"))) && i && N && H;
      return f && n && Q;
    });
  }, [q, C, _, h]), pe = c.useMemo(() => [...ue].sort((t, r) => {
    var _a2, _b2;
    var l, x, g, m;
    switch (ee) {
      case "price-low":
        return Number(((l = t.availability) == null ? void 0 : l.priceOverride) || t.basePrice) - Number(((x = r.availability) == null ? void 0 : x.priceOverride) || r.basePrice);
      case "price-high":
        return Number(((g = r.availability) == null ? void 0 : g.priceOverride) || r.basePrice) - Number(((m = t.availability) == null ? void 0 : m.priceOverride) || t.basePrice);
      case "name":
        return t.name.localeCompare(r.name);
      case "featured":
      default:
        return ((_a2 = t.sortOrder) != null ? _a2 : 999) - ((_b2 = r.sortOrder) != null ? _b2 : 999);
    }
  }), [ue, ee]), k = c.useMemo(() => {
    const t = q.filter((i) => i.isActive !== false), r = t.map((i) => {
      var H;
      const N = i.bulkServingOptions;
      if (N && Array.isArray(N) && N.length > 0) {
        const Q = N.filter((L) => L.price && L.price > 0);
        if (Q.length > 0) return Math.min(...Q.map((L) => Number(L.price)));
      }
      return Number(((H = i.availability) == null ? void 0 : H.priceOverride) || i.basePrice || 0);
    }).filter((i) => i > 0), l = r.length > 0 ? Math.min(...r) : 0, x = r.length > 0 ? Math.max(...r) : 0, g = x - l, m = l + g / 3, j = l + g * 2 / 3, O = (i) => i >= 1e3 ? `\u20A6${(i / 1e3).toFixed(i % 1e3 === 0 ? 0 : 1)}k` : `\u20A6${i.toLocaleString()}`, o = g > 0 ? [{ key: "price-low", label: `Under ${O(Math.round(m))}`, max: m }, { key: "price-mid", label: `${O(Math.round(m))} - ${O(Math.round(j))}`, min: m, max: j }, { key: "price-high", label: `Over ${O(Math.round(j))}`, min: j }] : [], f = t.some((i) => {
      var N;
      return (N = i.availability) == null ? void 0 : N.priceOverride;
    }), n = t.some((i) => i.sortOrder === 0), v = new Set(t.map((i) => i.categoryId).filter(Boolean)), y = { vegetarian: t.some((i) => (i.description || "").toLowerCase().includes("vegetarian")), vegan: t.some((i) => (i.description || "").toLowerCase().includes("vegan")), spicy: t.some((i) => (i.description || "").toLowerCase().includes("spicy") || (i.description || "").toLowerCase().includes("pepper")) };
    return { priceRanges: o, hasSpecialOffers: f, hasNewProducts: n, productCategories: v, hasDietaryProducts: y, minPrice: l, maxPrice: x };
  }, [q]), We = (t) => __async(null, null, function* () {
    try {
      console.log("[YumBulk] Finding nearest outlet for:", t);
      const r = yield fetch("/api/location/nearest-outlet", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ latitude: t.latitude, longitude: t.longitude }) });
      if (!r.ok) {
        const x = yield r.json().catch(() => ({ message: "Unknown error" }));
        console.error("[YumBulk] Failed to find nearest outlet:", x), T({ title: "No outlets found", description: x.message || "Please try a different location.", variant: "destructive" });
        return;
      }
      const l = yield r.json();
      console.log("[YumBulk] Found outlet:", l), oe({ latitude: t.latitude, longitude: t.longitude, address: t.address, selectedOutlet: l, distance: l == null ? void 0 : l.distance }), T({ title: "Location updated", description: `Delivering from ${l.name}` });
    } catch (r) {
      console.error("[YumBulk] Error finding nearest outlet:", r), T({ title: "Error", description: "Failed to update location. Please try again.", variant: "destructive" });
    } finally {
      B(false);
    }
  }), ge = (t) => {
    var _a2;
    var x, g;
    if (!(((_a2 = (x = t.availability) == null ? void 0 : x.isAvailable) != null ? _a2 : true) && t.isActive !== false)) return;
    const l = (t.bulkServingOptions || []).filter((m) => m.price > 0);
    if (se(__spreadProps(__spreadValues({}, t), { bulkServingOptions: l })), l.length === 0) {
      const m = Number(((g = t.availability) == null ? void 0 : g.priceOverride) || t.basePrice || 0);
      I({ size: "Standard", feeds: "1+", price: m });
    } else I(null);
    $(1), te(true);
  }, Ve = (t, r, l) => {
    I({ size: t, feeds: r, price: l });
  }, Je = () => {
    var _a2;
    if (!d || !b) return;
    const { size: t, feeds: r, price: l } = b, g = (d.bulkServingOptions || []).filter((O) => O.price > 0).length === 0, m = g ? d.name : `${d.name} \u2022 ${t} (Feeds ${r})`, j = g ? null : { groupId: -1, groupName: "Serving Size", optionId: -1, optionName: `${t} (Feeds ${r})`, priceModifier: 0 };
    Pe({ id: Date.now(), productId: d.id, name: m, imageUrl: d.imageUrl || "", unitPrice: l, quantity: M, totalPrice: l * M, customizations: j ? [j] : [], product: { isGiftBox: (_a2 = d.isGiftBox) != null ? _a2 : void 0 } }), T({ title: "Added to cart", description: `${M}x ${m}` }), se(null), I(null), $(1), te(false);
  }, fe = () => {
    se(null), I(null), $(1), te(false);
  }, Ke = (t) => e.jsxs("button", { onClick: () => {
    var r;
    K(t.id), (r = document.getElementById("bulk-products")) == null || r.scrollIntoView({ behavior: "smooth" });
  }, className: "category-card-hover group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 text-left", children: [e.jsxs("div", { className: "relative h-36 w-full overflow-hidden", children: [e.jsx(Oe, { src: t.imageUrl || Me, alt: t.name, className: "h-full w-full object-cover transition duration-300 group-hover:scale-110" }), e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" })] }), e.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-white", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "font-bold text-lg drop-shadow-lg", children: t.name }), e.jsx(Tt, { className: "h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" })] }), t.description && e.jsx("p", { className: "mt-1 line-clamp-1 text-xs text-white/80", children: t.description })] })] }, t.id), Xe = (t) => {
    var _a2;
    var O, o, f;
    const r = ((_a2 = (O = t.availability) == null ? void 0 : O.isAvailable) != null ? _a2 : true) && t.isActive !== false, l = !!((o = t.availability) != null && o.priceOverride);
    t.sortOrder;
    const x = t.sortOrder === 1, g = (t.bulkServingOptions || []).filter((n) => n.price > 0).sort((n, v) => n.price - v.price), m = g.length > 0, j = Number(l ? (f = t.availability) == null ? void 0 : f.priceOverride : m ? g[0].price : t.basePrice);
    return e.jsxs("div", { className: `product-card-hover relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 cursor-pointer ${r ? "" : "opacity-75"}`, onClick: () => ge(t), children: [l && e.jsx("div", { className: "absolute top-3 left-3 z-10 rounded-md bg-[#FF6B35] px-2 py-1 text-xs font-semibold text-white shadow", children: "Special Offer" }), x && e.jsx("div", { className: "absolute top-3 left-3 z-10 rounded-md bg-[#4CAF50] px-2 py-1 text-xs font-semibold text-white shadow", children: "New" }), t.isGiftBox && e.jsx("div", { className: "absolute top-3 right-3 z-10 rounded-full bg-purple-600 px-2 py-1 text-xs font-semibold text-white shadow", children: "\u{1F381} Gift" }), (() => {
      var i;
      if (!(s != null && s.hasFreeDelivery)) return null;
      const n = Number(s == null ? void 0 : s.freeDeliveryMinAmount) || 0, v = (t.bulkServingOptions || []).filter((N) => N.price > 0);
      let y = Number(((i = t.availability) == null ? void 0 : i.priceOverride) || t.basePrice || 0);
      return v.length > 0 && (y = Math.max(...v.map((N) => N.price))), n > 0 && y < n ? null : e.jsx("div", { className: "absolute z-10 rounded-md px-2 py-1 text-xs font-semibold text-white shadow", style: { top: t.isGiftBox ? "48px" : "12px", right: "12px", backgroundColor: (s == null ? void 0 : s.freeDeliveryTagColor) || "#10B981" }, children: "\u{1F69A} Free Delivery" });
    })(), e.jsxs("div", { className: "relative h-40 w-full overflow-hidden", children: [e.jsx(Oe, { src: t.imageUrl || Me, alt: t.name, className: "h-full w-full object-cover transition duration-300 group-hover:scale-105" }), !r && e.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/60 text-white font-semibold", children: "Out of Stock" })] }), e.jsxs("div", { className: "p-3 space-y-2", children: [t.tags && t.tags.length > 0 && e.jsx("div", { className: "flex flex-wrap gap-1", children: t.tags.map((n) => e.jsx("span", { className: `inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${n === "vegetarian" ? "bg-green-100 text-green-700" : n === "vegan" ? "bg-emerald-100 text-emerald-700" : n === "spicy" ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-600"}`, children: n }, n)) }), e.jsx("h3", { className: "text-sm font-semibold text-gray-900 leading-tight line-clamp-2", children: t.name }), t.description && e.jsx("p", { className: "text-xs text-gray-500 line-clamp-2", children: t.description }), l && e.jsxs("div", { className: "rounded bg-[#FFF3E0] px-2 py-1 text-xs font-medium text-[#E65100]", children: ["Now \u20A6", j.toLocaleString()] }), e.jsxs("div", { className: "flex items-center justify-between pt-1", children: [e.jsxs("div", { children: [m && e.jsx("div", { className: "text-[10px] text-gray-500 -mb-0.5", children: "From" }), e.jsxs("span", { className: "text-lg font-bold", style: { color: p }, children: ["\u20A6", j.toLocaleString()] })] }), e.jsx("button", { className: "rounded-md px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90", style: { backgroundColor: p }, onClick: (n) => {
      n.stopPropagation(), ge(t);
    }, disabled: !r, children: r ? "Add" : "N/A" })] })] })] }, t.id);
  };
  return e.jsxs("div", { className: "min-h-screen bg-[#f8f9fa] text-gray-900", style: { fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }, children: [e.jsx("style", { dangerouslySetInnerHTML: { __html: It } }), e.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-50", children: e.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [e.jsxs("div", { className: "flex items-center h-14 gap-4", children: [e.jsxs("div", { className: "flex items-center gap-3 flex-1", children: [e.jsx(D, { href: "/", className: "flex-shrink-0", children: e.jsx("img", { src: me.light, alt: `${(_g = s == null ? void 0 : s.name) != null ? _g : "YumBulk"} Logo`, className: "h-8" }) }), e.jsx("div", { className: "hidden sm:flex flex-1 max-w-sm", children: (a == null ? void 0 : a.selectedOutlet) && e.jsx(ct, { outletId: a.selectedOutlet.id }) })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs("button", { onClick: () => B(true), className: "flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100", children: [e.jsx(Ct, { className: "w-4 h-4 flex-shrink-0", style: { color: p } }), e.jsx("span", { className: "hidden md:inline max-w-32 truncate", children: (a == null ? void 0 : a.address) || "Select location" })] }), e.jsxs("button", { onClick: () => X(true), className: "relative p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100", children: [e.jsx(St, { className: "w-5 h-5" }), ne > 0 && e.jsx("span", { className: "absolute -top-1 -right-1 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs", style: { backgroundColor: p }, children: ne })] }), Le ? e.jsxs(dt, { children: [e.jsx(mt, { asChild: true, children: e.jsxs("button", { className: "flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 px-2 py-1 rounded-md hover:bg-gray-100", children: [e.jsx(Mt, { className: "w-4 h-4" }), e.jsx(Pt, { className: "w-3 h-3" })] }) }), e.jsxs(ht, { align: "end", className: "w-48", children: [e.jsx(le, { asChild: true, children: e.jsx(D, { href: "/profile", className: "flex items-center", children: "My Profile" }) }), e.jsx(le, { asChild: true, children: e.jsx(D, { href: "/my-orders", className: "flex items-center", children: "My Orders" }) }), e.jsx(xt, {}), e.jsx(le, { onClick: Ae, className: "text-red-600", children: "Logout" })] })] }) : e.jsx(J, { onClick: () => Z(true), size: "sm", className: "text-sm px-3 py-1.5", style: { backgroundColor: p, color: "#fff" }, children: "Login" })] })] }), e.jsxs("div", { className: "flex items-center gap-1 pb-2 overflow-x-auto scrollbar-hide border-t border-gray-100 pt-2", children: [e.jsx("button", { onClick: () => K("all"), className: `flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${C === "all" ? "text-white" : "text-gray-600 hover:bg-gray-100"}`, style: C === "all" ? { backgroundColor: p } : {}, children: "All" }), xe.map((t) => e.jsx("button", { onClick: () => K(t.id), className: `flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${C === t.id ? "text-white" : "text-gray-600 hover:bg-gray-100"}`, style: C === t.id ? { backgroundColor: p } : {}, children: t.name }, t.id))] })] }) }), e.jsx(ot, { isOpen: $e, onClose: () => Z(false), onSuccess: (t, r) => {
    const l = new CustomEvent("auth-change", { detail: { user: r, token: t } });
    window.dispatchEvent(l), Z(false);
  } }), Be && u && e.jsx("div", { className: "promo-banner text-white", style: { background: u != null && u.promoGradientFrom && (u != null && u.promoGradientTo) ? `linear-gradient(to right, ${u.promoGradientFrom}, ${u.promoGradientTo})` : "linear-gradient(to right, #006400, #008000)", borderBottom: "1px solid rgba(255,255,255,0.1)" }, children: e.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm sm:px-6 lg:px-8", children: [e.jsx("p", { children: u != null && u.promoText ? e.jsx("span", { dangerouslySetInnerHTML: { __html: u.promoText } }) : e.jsxs(e.Fragment, { children: [e.jsx("strong", { children: u.title || "" }), " ", u.subtitle || ""] }) }), (u == null ? void 0 : u.linkUrl) && e.jsx("a", { href: u.linkUrl, className: "mr-4 text-white underline underline-offset-2 hover:opacity-90", children: "Learn more" }), e.jsx(J, { variant: "ghost", size: "icon", className: "text-white hover:bg-white/10", onClick: () => Ee(false), children: "\xD7" })] }) }), !F && (a == null ? void 0 : a.selectedOutlet) && !U && e.jsx(gt, { scheduledDate: "", scheduledTime: "", onChangeSchedule: () => z(true), outlet: a.selectedOutlet }), F && (a == null ? void 0 : a.selectedOutlet) && !U && e.jsx(ft, { scheduledDate: F.date, scheduledTime: F.time, onChangeSchedule: () => z(true), onRemoveSchedule: De }), (a == null ? void 0 : a.selectedOutlet) && e.jsx("div", { className: "bg-white border-b border-gray-200", children: e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx("div", { className: "w-2 h-2 rounded-full", style: { backgroundColor: R ? U ? "#22c55e" : "#ef4444" : "#9ca3af" } }), e.jsxs("div", { children: [e.jsxs("h2", { className: "text-sm sm:text-base font-semibold text-gray-900", children: ["Delivering from: ", a.selectedOutlet.name] }), a.selectedOutlet.address && e.jsx("p", { className: "text-xs sm:text-sm text-gray-600", children: a.selectedOutlet.address })] })] }), e.jsxs("div", { className: "text-right", children: [e.jsx("p", { className: "text-xs sm:text-sm font-medium", style: { color: R ? U ? "#16a34a" : "#dc2626" : "#6b7280" }, children: R ? U ? "Open for delivery" : "Closed" : "Inactive" }), a.distance && e.jsxs("p", { className: "text-xs text-gray-500", children: [a.distance, " km away"] })] })] }) }) }), w.length > 0 ? e.jsxs("section", { className: "relative overflow-hidden", children: [e.jsx("div", { className: "relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]", children: w.map((t, r) => e.jsxs("div", { className: `absolute inset-0 transition-opacity duration-700 ease-in-out ${r === de ? "opacity-100 z-10" : "opacity-0 z-0"}`, children: [t.imageUrl ? e.jsx("img", { src: t.imageUrl, alt: t.title || "Banner", className: "w-full h-full object-cover" }) : e.jsx("div", { className: "w-full h-full flex items-center justify-center", style: { backgroundColor: p }, children: e.jsxs("div", { className: "text-center text-white px-4", children: [e.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-2", children: t.title }), t.subtitle && e.jsx("p", { className: "text-sm sm:text-base md:text-lg opacity-90", children: t.subtitle })] }) }), t.imageUrl && (t.title || t.subtitle) && e.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end", children: e.jsxs("div", { className: "p-4 sm:p-6 md:p-8 text-white", children: [t.title && e.jsx("h2", { className: "text-xl sm:text-2xl md:text-3xl font-bold mb-1", children: t.title }), t.subtitle && e.jsx("p", { className: "text-sm sm:text-base opacity-90", children: t.subtitle })] }) })] }, t.id)) }), w.length > 1 && e.jsx("div", { className: "absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2", children: w.map((t, r) => e.jsx("button", { onClick: () => Y(r), className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${r === de ? "w-6 bg-white" : "bg-white/50 hover:bg-white/75"}`, "aria-label": `Go to slide ${r + 1}` }, r)) }), w.length > 1 && e.jsxs(e.Fragment, { children: [e.jsx("button", { onClick: () => Y((t) => (t - 1 + w.length) % w.length), className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors", "aria-label": "Previous slide", children: e.jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), e.jsx("button", { onClick: () => Y((t) => (t + 1) % w.length), className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors", "aria-label": "Next slide", children: e.jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: e.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] })] }) : P ? e.jsxs("section", { className: "relative overflow-hidden text-white", style: { backgroundColor: P.heroBackgroundColor || "#1a1a1a" }, children: [e.jsx("div", { className: "hero-ribbon hero-ribbon-left absolute -left-12 -top-20 h-96 w-72 rotate-[-25deg] rounded-full bg-gradient-to-br from-[#8B0000] to-[#DC143C] opacity-30 blur-3xl" }), e.jsx("div", { className: "hero-ribbon hero-ribbon-right absolute -right-12 -top-20 h-96 w-72 rotate-[25deg] rounded-full bg-gradient-to-br from-[#8B0000] to-[#DC143C] opacity-30 blur-3xl" }), e.jsxs("div", { className: "relative mx-auto flex max-w-7xl flex-col items-center px-4 py-14 text-center sm:px-6 lg:px-8", children: [e.jsxs("h1", { className: "text-4xl font-bold leading-tight sm:text-5xl", style: { color: P.heroAccentColor || "#FFD700" }, children: [e.jsx("span", { className: "block text-2xl text-white", children: P.heroTitleLine1 || "THIS IS NOT JUST FOOD" }), e.jsx("span", { className: "block text-4xl text-white", children: P.heroTitleLine2 || "THIS IS" }), e.jsx("span", { className: "block text-5xl", style: { color: P.heroAccentColor || "#FFD700" }, children: P.heroBrandText || Re.toUpperCase() })] }), e.jsx("p", { className: "mt-3 text-base text-white/90", children: P.heroTagline || "NIGERIAN FESTIVE MEALS" })] })] }) : null, e.jsxs("main", { className: "mx-auto max-w-7xl px-3 py-8 sm:px-6 lg:px-8", children: [e.jsxs("section", { className: "category-cards space-y-4", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsx("h2", { className: "text-lg font-semibold text-gray-900", children: "Browse by occasion" }) }), Ge ? e.jsx("div", { className: "grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", children: Array.from({ length: 8 }).map((t, r) => e.jsx(Se, { className: "h-40 w-full rounded-xl" }, r)) }) : e.jsx("div", { className: "category-cards-grid grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4", children: xe.map(Ke) })] }), e.jsx("section", { className: "filters-section border-b border-gray-200 py-4", children: e.jsxs("div", { className: "filters-bar flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [e.jsxs(J, { variant: "default", className: "text-white sm:w-auto flex items-center gap-2", style: { backgroundColor: p }, onClick: () => E(true), children: [e.jsx(At, { className: "h-4 w-4" }), "Filter"] }), e.jsxs("div", { className: "sort-dropdown flex items-center gap-2 text-sm", children: [e.jsx("span", { className: "text-gray-700", children: "Sort:" }), e.jsxs("select", { value: ee, onChange: (t) => ze(t.target.value), className: "rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none", children: [e.jsx("option", { value: "featured", children: "Favourites first" }), e.jsx("option", { value: "price-low", children: "Price: Low to High" }), e.jsx("option", { value: "price-high", children: "Price: High to Low" }), e.jsx("option", { value: "name", children: "Name: A to Z" })] })] })] }) }), e.jsx("section", { id: "bulk-products", className: "main-content mt-6", children: Qe ? e.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", children: Array.from({ length: 12 }).map((t, r) => e.jsx(Se, { className: "h-72 w-full rounded-xl" }, r)) }) : pe.length === 0 ? e.jsxs("div", { className: "rounded-xl border bg-white p-10 text-center shadow-sm", children: [e.jsx("p", { className: "text-lg font-semibold text-gray-900", children: "No products available" }), e.jsx("p", { className: "mt-2 text-sm text-gray-600", children: "Try another category or location." })] }) : e.jsx("div", { className: "products-grid grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", children: pe.map(Xe) }) })] }), e.jsx("footer", { className: "yum-bg-gray text-white py-12 mt-16", children: e.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [e.jsxs("div", { children: [e.jsx("div", { className: "flex items-center mb-4", children: e.jsx("img", { src: me.dark, alt: `${(_h = s == null ? void 0 : s.name) != null ? _h : "EatYum"} Logo`, className: "h-8" }) }), e.jsx("p", { className: "text-gray-300", children: "Delicious food delivered fast to your door from our multiple locations." })] }), ((s == null ? void 0 : s.appStoreUrl) || (s == null ? void 0 : s.playStoreUrl)) && e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-4", children: "Download the App" }), e.jsxs("div", { className: "space-y-3", children: [(s == null ? void 0 : s.appStoreUrl) && e.jsx("a", { href: s.appStoreUrl, target: "_blank", rel: "noopener noreferrer", className: "block", children: e.jsx("img", { src: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1280620800", alt: "Download on the App Store", className: "h-10 hover:opacity-80 transition-opacity" }) }), (s == null ? void 0 : s.playStoreUrl) && e.jsx("a", { href: s.playStoreUrl, target: "_blank", rel: "noopener noreferrer", className: "block", children: e.jsx("img", { src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png", alt: "Get it on Google Play", className: "h-[60px] -ml-2 hover:opacity-80 transition-opacity" }) })] })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-4", children: "Quick Links" }), e.jsxs("nav", { className: "space-y-3", children: [e.jsx(D, { href: "/tap", className: "block text-gray-300 hover:text-white transition-colors", children: "\u{1F96F} Tap for Puff Puff" }), e.jsx(D, { href: "/terms-of-service", className: "block text-gray-300 hover:text-white transition-colors", children: "Terms of Service" })] })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-4", children: "Contact Info" }), e.jsx("div", { className: "space-y-3 text-gray-300", children: (s == null ? void 0 : s.supportEmail) && e.jsx("p", { children: e.jsx("a", { href: `mailto:${s.supportEmail}`, className: "hover:text-white transition-colors", children: s.supportEmail }) }) })] })] }), e.jsxs("div", { className: "border-t border-gray-700 mt-8 pt-8 text-center text-gray-400", children: [e.jsxs("p", { children: ["\xA9 2025 ", (s == null ? void 0 : s.name) || "EatYum", ". All rights reserved."] }), e.jsx("div", { className: "flex justify-center space-x-4 mt-2", children: e.jsx(D, { href: "/terms-of-service", className: "text-gray-400 hover:text-white text-sm", children: "Terms of Service" }) })] })] }) }), e.jsx(yt, { onClick: () => X(true) }), e.jsx(ut, {}), e.jsx(bt, { isOpen: Ie, onClose: () => X(false) }), e.jsx(pt, { isOpen: Te, onClose: () => B(false), onLocationSelected: We, preventClose: !a }), e.jsxs("div", { className: `fixed left-0 top-0 z-40 h-full w-80 transform bg-white shadow-2xl transition-transform duration-300 ease-out ${ce ? "translate-x-0" : "-translate-x-full"}`, children: [e.jsxs("div", { className: "flex items-center justify-between px-6 py-5 border-b border-gray-100", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-bold text-gray-900", children: "Filters" }), e.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: "Refine your search" })] }), e.jsx("button", { className: "p-2 rounded-full hover:bg-gray-100 transition-colors", onClick: () => E(false), "aria-label": "Close filters", children: e.jsx(rt, { className: "h-5 w-5 text-gray-500" }) })] }), e.jsxs("div", { className: "flex-1 overflow-y-auto px-6 py-5 space-y-6", children: [(k.hasSpecialOffers || k.hasNewProducts) && e.jsxs("div", { className: "space-y-3", children: [e.jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Offers" }), e.jsxs("div", { className: "space-y-2", children: [k.hasSpecialOffers && e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h.offer, onChange: (t) => A(__spreadProps(__spreadValues({}, h), { offer: t.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: "Special Offers" })] }), k.hasNewProducts && e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h.new, onChange: (t) => A(__spreadProps(__spreadValues({}, h), { new: t.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: "New Products" })] })] })] }), (k.hasDietaryProducts.vegetarian || k.hasDietaryProducts.vegan || k.hasDietaryProducts.spicy) && e.jsxs("div", { className: "space-y-3", children: [e.jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Dietary" }), e.jsxs("div", { className: "space-y-2", children: [k.hasDietaryProducts.vegetarian && e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h.vegetarian, onChange: (t) => A(__spreadProps(__spreadValues({}, h), { vegetarian: t.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: "\u{1F96C} Vegetarian" })] }), k.hasDietaryProducts.vegan && e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h.vegan, onChange: (t) => A(__spreadProps(__spreadValues({}, h), { vegan: t.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: "\u{1F331} Vegan" })] }), k.hasDietaryProducts.spicy && e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h.spicy, onChange: (t) => A(__spreadProps(__spreadValues({}, h), { spicy: t.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: "\u{1F336}\uFE0F Spicy" })] })] })] }), k.priceRanges.length > 0 && e.jsxs("div", { className: "space-y-3", children: [e.jsx("h3", { className: "text-xs font-semibold text-gray-400 uppercase tracking-wider", children: "Price Range" }), e.jsx("div", { className: "space-y-2", children: k.priceRanges.map((t) => e.jsxs("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 cursor-pointer transition-all", children: [e.jsx("input", { type: "checkbox", checked: h[t.key] || false, onChange: (r) => A(__spreadProps(__spreadValues({}, h), { [t.key]: r.target.checked })), className: "w-4 h-4 rounded border-gray-300", style: { accentColor: p } }), e.jsx("span", { className: "text-sm text-gray-700", children: t.label })] }, t.key)) })] })] }), e.jsxs("div", { className: "border-t border-gray-100 px-6 py-4 bg-gray-50 space-y-3", children: [e.jsx(J, { className: "w-full py-2.5 text-sm font-medium", style: { backgroundColor: p, color: "#fff" }, onClick: () => E(false), children: "Apply Filters" }), e.jsx("button", { className: "w-full py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors", onClick: () => {
    A({ offer: false, new: false, vegetarian: false, vegan: false, spicy: false, "price-low": false, "price-mid": false, "price-high": false });
  }, children: "Clear All" })] })] }), ce && e.jsx("div", { className: "overlay active fixed inset-0 z-30 bg-black/50", onClick: () => E(false) }), e.jsx(Nt, { open: Ue, onOpenChange: (t) => {
    t || fe();
  }, children: e.jsxs(wt, { className: "w-[calc(100%-2rem)] max-w-md mx-auto p-0 overflow-hidden rounded-2xl", children: [e.jsxs(kt, { className: "px-5 pt-5 pb-4 border-b border-gray-100", children: [e.jsx(Ot, { className: "text-lg font-semibold text-gray-900", children: (d == null ? void 0 : d.name) || "Select Serving Size" }), (d == null ? void 0 : d.description) && e.jsx("p", { className: "text-sm text-gray-500 mt-0.5 line-clamp-2", children: d.description })] }), ((d == null ? void 0 : d.bulkServingOptions) || []).length > 0 ? e.jsx("div", { className: "px-5 py-4 space-y-2 max-h-[40vh] overflow-y-auto", children: ((d == null ? void 0 : d.bulkServingOptions) || []).map((t) => {
    const r = (b == null ? void 0 : b.size) === t.size && b.feeds === t.feeds;
    return e.jsxs("button", { className: `w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-150 ${r ? "border-gray-900 bg-gray-900 text-white" : "border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50"}`, onClick: () => Ve(t.size, t.feeds, Number(t.price)), children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("span", { className: "font-semibold", children: t.size }), e.jsxs("span", { className: `text-sm ${r ? "text-gray-300" : "text-gray-500"}`, children: ["Feeds ", t.feeds] })] }), e.jsxs("span", { className: "font-semibold", style: { color: r ? "white" : p }, children: ["\u20A6", Number(t.price || 0).toLocaleString()] })] }, `${t.size}-${t.feeds}`);
  }) }) : e.jsx("div", { className: "px-5 py-4", children: e.jsxs("div", { className: "flex items-center justify-between px-4 py-3 rounded-xl border-2 border-gray-900 bg-gray-900 text-white", children: [e.jsx("span", { className: "font-semibold", children: "Price" }), e.jsxs("span", { className: "text-xl font-bold", children: ["\u20A6", Number((b == null ? void 0 : b.price) || 0).toLocaleString()] })] }) }), b && e.jsx("div", { className: "px-5 py-4 border-t border-gray-100 bg-gray-50", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm font-medium text-gray-700", children: "Quantity" }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("button", { onClick: () => $(Math.max(1, M - 1)), className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed", disabled: M <= 1, children: e.jsx(Lt, { className: "w-4 h-4" }) }), e.jsx("span", { className: "w-12 text-center text-lg font-semibold text-gray-900", children: M }), e.jsx("button", { onClick: () => $(M + 1), className: "w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95", children: e.jsx(Ft, { className: "w-4 h-4" }) })] })] }) }), e.jsxs("div", { className: "px-5 py-4 border-t border-gray-100 space-y-3", children: [e.jsx("button", { onClick: Je, disabled: !b, className: "w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]", style: { backgroundColor: b ? p : "#9ca3af" }, children: b ? e.jsxs(e.Fragment, { children: ["Add to Cart \u2022 \u20A6", ((b.price || 0) * M).toLocaleString()] }) : "Select a size" }), e.jsx("button", { onClick: fe, className: "w-full py-3 px-4 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all duration-150 active:scale-[0.98]", children: "Cancel" }), e.jsxs("button", { className: "w-full flex items-center justify-center gap-2 py-2.5 text-gray-500 hover:text-gray-700 transition-colors text-sm", onClick: () => {
    const t = (d == null ? void 0 : d.name) || "bulk order";
    window.open(`https://wa.me/23456789012?text=${encodeURIComponent(`Hello! I would like to place a custom order for ${t}. Please contact me for more details.`)}`, "_blank");
  }, children: [e.jsx(Dt, { className: "h-4 w-4" }), e.jsx("span", { children: "Need More? Call/WhatsApp to Order" })] })] })] }) }), e.jsx(vt, { isOpen: _e, onClose: () => re(false), onScheduleDelivery: qe, userLocation: a }), e.jsx(jt, { isOpen: Ye, onClose: () => z(false), onConfirm: He, userLocation: a })] });
}
export { Ss as default };
