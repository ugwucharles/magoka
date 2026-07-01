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
import { r as p, c as Ye, Y as Je, u as Xe, b as Q, j as e, B as x, E as Y, H as J, I as X, F as Z, X as Oe, ab as Ze, W as es, a6 as ss, i as ee } from "./index-DOfu0sXg.js";
import { u as ts } from "./useMutation-CVmbONMy.js";
import { u as rs, z as j, t as as } from "./index-Ph36iM9Q.js";
import { u as is, A as ns, c as se } from "./admin-layout-DH7sAIhq.js";
import { I as $ } from "./input-FyV2XACZ.js";
import { C as Pe } from "./currency-input-Bsi8j9jy.js";
import { L as h } from "./label-B38UEnoM.js";
import { S as te, a as re, b as ae, c as ie, d as k } from "./select-ets7bQkN.js";
import { T as ze } from "./textarea-__Yhw9VH.js";
import { C as cs } from "./custom-autocomplete-Cusxb0jm.js";
import { S as qe } from "./separator-B__B0Kv_.js";
import { D as ls, a as os, b as ds, c as ms } from "./dialog-BUvIuveX.js";
import { C as us } from "./checkbox-CrTtWijP.js";
import { f as y } from "./currency-cZDvJQzL.js";
import { U as ke } from "./upload-Bxi1uLXD.js";
import { P as ps } from "./package-CpPTLD0o.js";
import { S as xs } from "./search-BFN4Wc19.js";
import { P as B } from "./plus-xl2HqeIg.js";
import { S as hs } from "./shopping-cart-C1hOzoyN.js";
import { M as ne } from "./minus-zDmsn0vk.js";
import { T as js } from "./trash-2-MFuZdLCA.js";
import "./badge-BAjaXL1S.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./clock-DQ0X7PrC.js";
import "./map-pin-ChG4yLkU.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./users-CBtjfzvJ.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
import "./formatted-number-input-DhzuNqOG.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./index-D-8nYH0_.js";
const T = (f) => f.trim().toLowerCase().replace(/\s+/g, "_"), fs = j.object({ source: j.string().min(1, "Order source is required"), orderType: j.string().min(1, "Order type is required"), outletId: j.string().min(1, "Outlet is required"), customerName: j.string().optional(), customerEmail: j.string().optional(), customerPhone: j.string().optional(), deliveryAddress: j.string().optional(), specialInstructions: j.string().optional(), customDeliveryFee: j.string().optional(), discount: j.string().optional(), receiptFile: j.any().optional() });
function ut() {
  const [f, S] = p.useState([]), [b, ce] = p.useState(""), [le, U] = p.useState(false), [o, K] = p.useState(null), [M, w] = p.useState({}), [F, I] = p.useState(1), [O, oe] = p.useState(""), [P, de] = p.useState(null), [me, ue] = p.useState(false), [D, Te] = p.useState(false), { toast: g } = Ye();
  Je();
  const [, pe] = Xe(), { selectedBrandId: C } = is(), l = rs({ resolver: as(fs), defaultValues: { source: "", orderType: "", outletId: "", customerName: "", customerEmail: "", customerPhone: "", deliveryAddress: "", specialInstructions: "", customDeliveryFee: "", discount: "" } }), { data: Me = [] } = Q({ queryKey: ["/api/admin/outlets-rbac", { brandId: C }], queryFn: ee({ on401: "throw" }), enabled: !!C, staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: W } = Q({ queryKey: ["/api/sales-channels"], queryFn: ee({ on401: "returnNull" }) }), xe = (W == null ? void 0 : W.channels) || [{ value: "whatsapp", label: "WhatsApp" }, { value: "walkin", label: "Walk-in" }, { value: "glovo", label: "Glovo" }, { value: "chowdeck", label: "Chowdeck" }, { value: "foodelo", label: "Foodelo" }], De = xe, { data: N = [] } = Q({ queryKey: ["/api/admin/products", { brandId: C, includeInactive: false }], queryFn: ee({ on401: "throw" }), enabled: !!C }), v = p.useMemo(() => {
    const s = {};
    for (const t of N) t.channelPrices && t.channelPrices.length > 0 && (s[t.id.toString()] = t.channelPrices);
    return s;
  }, [N]), he = l.watch("source"), u = he ? T(he) : "", A = (s) => {
    if (u && v) {
      const t = v[s.id.toString()];
      if (t) {
        const r = t.find((a) => T(a.salesChannel) === u);
        if (r && r.price > 0) return r.price / 100;
      }
    }
    return parseFloat(s.basePrice || "0");
  }, je = p.useRef(u);
  p.useEffect(() => {
    je.current !== u && (je.current = u, S((s) => {
      if (s.length === 0) return s;
      let t = false;
      const r = s.map((a) => {
        if (a.isCustomItem || !a.productId) return a;
        const i = N.find((d) => d.id === a.productId);
        if (!i) return a;
        let c = parseFloat(i.basePrice || "0");
        if (u && v) {
          const d = v[i.id.toString()];
          if (d) {
            const m = d.find((q) => T(q.salesChannel) === u);
            m && m.price > 0 && (c = m.price / 100);
          }
        }
        const n = a.customizations.reduce((d, m) => d + m.price * m.quantity, 0);
        return Math.abs(c - a.price) < 1e-3 ? a : (t = true, __spreadProps(__spreadValues({}, a), { price: c, totalPrice: c * a.quantity + n }));
      });
      return t ? r : s;
    }));
  }, [u, v, N]);
  const { data: z = [], isLoading: fe } = Q({ queryKey: ["/api/products", o == null ? void 0 : o.id, "customizations", b, u], queryFn: () => __async(null, null, function* () {
    if (!(o != null && o.id) || !b) return [];
    const s = new URLSearchParams();
    s.set("outletId", b), u && s.set("salesChannel", u);
    const t = {}, r = localStorage.getItem("adminToken");
    r && (t.Authorization = `Bearer ${r}`);
    const a = yield fetch(`/api/products/${o.id}/customizations?${s.toString()}`, { headers: t });
    if (!a.ok) throw new Error("Failed to fetch customizations");
    return a.json();
  }), enabled: le && !!(o != null && o.id) && !!b, staleTime: 0, gcTime: 5 * 60 * 1e3, refetchOnMount: true, refetchOnWindowFocus: true }), G = ts({ mutationFn: (s) => __async(null, null, function* () {
    return (yield es("POST", "/api/admin/orders", s)).json();
  }), onSuccess: () => {
    ss.invalidateQueries({ queryKey: ["/api/admin/orders"] }), g({ title: "Success", description: "Order created successfully" }), l.reset(), S([]), ce(""), pe("/control/orders");
  }, onError: (s) => {
    g({ title: "Error", description: s.message || "Failed to create order", variant: "destructive" });
  } }), Ae = (s) => {
    if (!s || !s.trim()) return 0;
    const t = parseFloat(s);
    return Number.isNaN(t) ? 0 : Math.max(0, t);
  }, E = (s) => {
    const t = parseFloat(s.extraPrice || s.price || "0");
    return Number.isNaN(t) ? 0 : t;
  }, ye = (s) => {
    const t = M[s] || {};
    return Object.values(t).reduce((r, a) => r + a, 0);
  }, Ee = (s, t) => {
    var r;
    return ((r = M[s]) == null ? void 0 : r[t]) || 0;
  }, Re = (s) => {
    const t = [...s].map((r) => ({ groupId: r.groupId, optionId: r.optionId, quantity: r.quantity, price: Number(r.price.toFixed(2)) })).sort((r, a) => r.groupId !== a.groupId ? r.groupId - a.groupId : r.optionId - a.optionId);
    return JSON.stringify(t);
  }, ge = () => z.reduce((s, t) => {
    const r = M[t.id] || {}, a = Object.entries(r).reduce((i, [c, n]) => {
      const d = t.options.find((m) => m.id === Number(c));
      return !d || n <= 0 ? i : i + E(d) * n;
    }, 0);
    return s + a;
  }, 0), Ne = () => fe ? false : z.every((s) => {
    var _a;
    const t = Math.max(0, Number((_a = s.minSelections) != null ? _a : 0)), r = s.isRequired ? Math.max(1, t) : t;
    return ye(s.id) >= r;
  }), Ve = (s) => {
    if (!b) {
      g({ title: "Outlet required", description: "Select an outlet before adding products.", variant: "destructive" });
      return;
    }
    K(s), w({}), I(1), U(true);
  }, ve = () => {
    U(false), K(null), w({}), I(1);
  }, Le = (s, t) => {
    w((r) => {
      var _a;
      const a = r[s.id] || {}, i = Object.values(a).reduce((n, d) => n + d, 0), c = Math.max(1, Number((_a = s.maxSelections) != null ? _a : 1));
      return i >= c ? r : __spreadProps(__spreadValues({}, r), { [s.id]: __spreadProps(__spreadValues({}, a), { [t.id]: (a[t.id] || 0) + 1 }) });
    });
  }, Qe = (s, t) => {
    w((r) => {
      const a = r[s] || {}, i = a[t] || 0;
      if (i <= 0) return r;
      const c = i - 1;
      if (c === 0) {
        const _a = a, { [t]: n } = _a, d = __objRest(_a, [__restKey(t)]);
        return __spreadProps(__spreadValues({}, r), { [s]: d });
      }
      return __spreadProps(__spreadValues({}, r), { [s]: __spreadProps(__spreadValues({}, a), { [t]: c }) });
    });
  }, $e = () => {
    if (!o) return;
    if (!Ne()) {
      g({ title: "Missing selections", description: "Please complete required customizations before adding to cart.", variant: "destructive" });
      return;
    }
    const s = z.flatMap((i) => {
      const c = M[i.id] || {};
      return Object.entries(c).flatMap(([n, d]) => {
        if (d <= 0) return [];
        const m = i.options.find((q) => q.id === Number(n));
        return m ? [{ groupId: i.id, groupName: i.name, optionId: m.id, optionName: m.name, price: E(m), quantity: d }] : [];
      });
    }), t = A(o), r = ge(), a = Re(s);
    S((i) => {
      const c = i.findIndex((n) => !n.isCustomItem && n.productId === o.id && n.customizationSignature === a);
      return c >= 0 ? i.map((n, d) => {
        if (d !== c) return n;
        const m = n.quantity + F, q = n.customizations.reduce((He, Ie) => He + Ie.price * Ie.quantity, 0);
        return __spreadProps(__spreadValues({}, n), { quantity: m, totalPrice: n.price * m + q });
      }) : [...i, { id: `cart-${Date.now()}-${Math.random()}`, productId: o.id, productName: o.name, price: t, quantity: F, totalPrice: t * F + r, customizations: s, customizationSignature: a }];
    }), ve();
  }, be = (s, t) => {
    if (t <= 0) {
      Ce(s);
      return;
    }
    S((r) => r.map((a) => {
      if (a.id !== s) return a;
      const i = (a.customizations || []).reduce((c, n) => c + n.price * n.quantity, 0);
      return __spreadProps(__spreadValues({}, a), { quantity: t, totalPrice: t * a.price + i });
    }));
  }, Ce = (s) => {
    S((t) => t.filter((r) => r.id !== s));
  }, R = f.reduce((s, t) => s + t.totalPrice, 0), Se = l.watch("orderType"), _ = l.watch("customDeliveryFee"), Be = l.watch("discount"), we = _ && _.trim() !== "" ? parseFloat(_) : 0, V = Se === "delivery" && !isNaN(we) ? we : 0, Ue = Ae(Be), Ke = R + V, H = Math.min(Ue, Ke), Fe = Math.max(0, R + V - H), L = p.useMemo(() => {
    const s = Array.isArray(N) ? N.filter((r) => r.isActive !== false) : [], t = O.trim().toLowerCase();
    return t ? s.filter((r) => r.name.toLowerCase().includes(t) || (r.description || "").toLowerCase().includes(t)) : s;
  }, [N, O]), We = (s) => __async(null, null, function* () {
    const t = new FormData();
    t.append("image", s);
    const r = yield fetch("/api/admin/upload", { method: "POST", body: t, headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!r.ok) throw new Error("Failed to upload receipt");
    return (yield r.json()).url;
  }), Ge = (s) => __async(null, null, function* () {
    if (!C) {
      g({ title: "Error", description: "Select a brand before creating an order", variant: "destructive" });
      return;
    }
    if (f.length === 0) {
      g({ title: "Error", description: "Please add items to cart before creating order", variant: "destructive" });
      return;
    }
    if (!D) {
      g({ title: "Payment Confirmation Required", description: "Please confirm that payment has been received before creating the order.", variant: "destructive" });
      return;
    }
    try {
      let t = null;
      P && (ue(true), t = yield We(P));
      const _a = s, { discount: r } = _a, a = __objRest(_a, ["discount"]), i = __spreadProps(__spreadValues({}, a), { brandId: C, outletId: parseInt(s.outletId), subtotal: R.toFixed(2), deliveryFee: V.toFixed(2), discount: H.toFixed(2), total: Fe.toFixed(2), paymentStatus: "paid", paymentConfirmed: true, receiptUrl: t, items: f.map((c) => ({ productId: c.productId, quantity: c.quantity, unitPrice: c.price.toFixed(2), totalPrice: c.totalPrice.toFixed(2), customizations: c.isCustomItem ? { customItemName: c.productName } : c.customizations || [], addons: c.addons || [] })) });
      G.mutate(i);
    } catch (t) {
      g({ title: "Error", description: t.message || "Failed to upload receipt", variant: "destructive" });
    } finally {
      ue(false);
    }
  }), _e = (s) => {
    ce(s), l.setValue("outletId", s);
  };
  return e.jsx(ns, { currentPage: "create-order", children: e.jsxs("div", { className: "p-6 space-y-6 max-w-full overflow-hidden", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Create New Order" }), e.jsx("p", { className: "text-gray-600", children: "Create orders for customers across different channels" })] }), e.jsx(x, { variant: "outline", onClick: () => pe("/control/orders"), children: "Back to Orders" })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [e.jsxs(Y, { children: [e.jsx(J, { children: e.jsx(X, { children: "Order Details" }) }), e.jsx(Z, { children: e.jsxs("form", { onSubmit: l.handleSubmit(Ge), className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(h, { htmlFor: "source", children: "Order Source *" }), e.jsxs(te, { value: l.watch("source"), onValueChange: (s) => l.setValue("source", s), children: [e.jsx(re, { children: e.jsx(ae, { placeholder: "Select source" }) }), e.jsx(ie, { children: De.map((s) => e.jsx(k, { value: s.value, children: s.label }, s.value)) })] })] }), e.jsxs("div", { children: [e.jsx(h, { htmlFor: "orderType", children: "Order Type *" }), e.jsxs(te, { value: l.watch("orderType"), onValueChange: (s) => l.setValue("orderType", s), children: [e.jsx(re, { children: e.jsx(ae, { placeholder: "Select type" }) }), e.jsxs(ie, { children: [e.jsx(k, { value: "delivery", children: "Delivery" }), e.jsx(k, { value: "pickup", children: "Pickup" }), e.jsx(k, { value: "dine_in", children: "Dine In" })] })] })] })] }), e.jsxs("div", { children: [e.jsx(h, { htmlFor: "outletId", children: "Outlet *" }), e.jsxs(te, { value: b, onValueChange: _e, children: [e.jsx(re, { children: e.jsx(ae, { placeholder: "Select outlet" }) }), e.jsx(ie, { children: Me.map((s) => e.jsx(k, { value: s.id.toString(), children: s.name }, s.id)) })] })] }), e.jsxs("p", { className: "text-sm text-gray-500", children: ["Payment status is automatically set to ", e.jsx("span", { className: "font-medium", children: "Paid" }), " for orders created here."] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(h, { htmlFor: "customerName", children: "Customer Name" }), e.jsx($, __spreadProps(__spreadValues({}, l.register("customerName")), { placeholder: "Enter customer name (optional)" }))] }), e.jsxs("div", { children: [e.jsx(h, { htmlFor: "customerEmail", children: "Customer Email" }), e.jsx($, __spreadProps(__spreadValues({}, l.register("customerEmail")), { placeholder: "Enter email (optional)", type: "email" }))] })] }), e.jsxs("div", { children: [e.jsx(h, { htmlFor: "customerPhone", children: "Customer Phone" }), e.jsx($, __spreadProps(__spreadValues({}, l.register("customerPhone")), { placeholder: "Enter phone number (optional)" }))] }), e.jsxs("div", { className: "space-y-3", children: [e.jsx(h, { htmlFor: "deliveryAddress", children: "Delivery Address" }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("label", { className: "text-xs text-muted-foreground", children: "Search for address" }), e.jsx(cs, { onPlaceSelect: (s) => {
    l.setValue("deliveryAddress", s.address);
  }, placeholder: "Start typing to search for an address...", className: "" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("div", { className: "flex-1 border-t border-gray-200" }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "or enter manually" }), e.jsx("div", { className: "flex-1 border-t border-gray-200" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx("label", { className: "text-xs text-muted-foreground", children: "Manual address entry" }), e.jsx(ze, __spreadProps(__spreadValues({}, l.register("deliveryAddress")), { placeholder: "Enter delivery address manually", rows: 2 }))] }), l.watch("deliveryAddress") && e.jsx("div", { className: "p-2 bg-green-50 rounded border border-green-200", children: e.jsxs("p", { className: "text-sm text-green-800", children: ["\u2713 Address: ", l.watch("deliveryAddress")] }) })] }), Se === "delivery" && e.jsxs("div", { children: [e.jsx(h, { htmlFor: "customDeliveryFee", children: "Custom Delivery Fee (\u20A6)" }), e.jsx(Pe, { value: l.watch("customDeliveryFee"), onValueChange: (s) => l.setValue("customDeliveryFee", s), placeholder: "0.00" }), e.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Leave empty to use default delivery fee of \u20A6500" })] }), e.jsxs("div", { children: [e.jsx(h, { htmlFor: "specialInstructions", children: "Special Instructions" }), e.jsx(ze, __spreadProps(__spreadValues({}, l.register("specialInstructions")), { placeholder: "Any special instructions (optional)", rows: 3 }))] }), e.jsxs("div", { children: [e.jsxs(h, { htmlFor: "receiptFile", children: ["Receipt Upload", e.jsx("span", { className: "text-sm text-gray-500 ml-2", children: "(Optional)" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-gray-400 transition-colors", children: [e.jsx("input", { type: "file", id: "receiptFile", accept: "image/*,.pdf", onChange: (s) => {
    var r;
    const t = (r = s.target.files) == null ? void 0 : r[0];
    t && (de(t), l.setValue("receiptFile", t));
  }, className: "hidden" }), e.jsxs("label", { htmlFor: "receiptFile", className: "cursor-pointer flex flex-col items-center justify-center space-y-2", children: [e.jsx(ke, { className: "w-8 h-8 text-gray-400" }), e.jsx("span", { className: "text-sm text-gray-600", children: "Click to upload receipt (Images or PDF)" })] })] }), P && e.jsxs("div", { className: "flex items-center justify-between bg-gray-50 p-3 rounded-lg", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ke, { className: "w-4 h-4 text-green-600" }), e.jsx("span", { className: "text-sm text-gray-700 truncate max-w-xs", children: P.name }), e.jsxs("span", { className: "text-xs text-gray-500", children: ["(", (P.size / 1024 / 1024).toFixed(2), " MB)"] })] }), e.jsx(x, { type: "button", variant: "ghost", size: "sm", onClick: () => {
    de(null), l.setValue("receiptFile", null);
  }, children: e.jsx(Oe, { className: "w-4 h-4" }) })] }), l.formState.errors.receiptFile && e.jsx("p", { className: "text-sm text-red-600", children: typeof l.formState.errors.receiptFile.message == "string" ? l.formState.errors.receiptFile.message : "Invalid receipt file" })] })] }), e.jsxs("div", { className: "border border-amber-200 bg-amber-50 rounded-lg p-4 space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2 text-amber-700", children: [e.jsx(Ze, { className: "w-5 h-5" }), e.jsx("span", { className: "font-medium", children: "Payment Confirmation Required" })] }), e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx(us, { id: "paymentConfirmed", checked: D, onCheckedChange: (s) => Te(s === true) }), e.jsx(h, { htmlFor: "paymentConfirmed", className: "text-sm font-medium text-gray-900 cursor-pointer select-none", children: "I confirm that payment has been received for this order." })] }), !D && e.jsx("p", { className: "text-sm text-amber-600", children: "You must check this box before creating the order." })] }), e.jsx(x, { type: "submit", className: "w-full bg-red-600 hover:bg-red-700", disabled: G.isPending || f.length === 0 || me || !D, children: me ? "Uploading Receipt..." : G.isPending ? "Creating Order..." : "Create Order" })] }) })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs(Y, { children: [e.jsx(J, { children: e.jsxs(X, { className: "flex items-center gap-2", children: [e.jsx(ps, { className: "w-5 h-5" }), "Products"] }) }), e.jsxs(Z, { children: [e.jsxs("div", { className: "relative mb-3", children: [e.jsx(xs, { className: "w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" }), e.jsx($, { value: O, onChange: (s) => oe(s.target.value), placeholder: "Search products by name or description", className: "pl-9 pr-9" }), O.trim() && e.jsx("button", { type: "button", onClick: () => oe(""), className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600", "aria-label": "Clear product search", children: e.jsx(Oe, { className: "w-4 h-4" }) })] }), e.jsxs("p", { className: "text-xs text-gray-500 mb-3", children: [L.length, " product", L.length === 1 ? "" : "s", " available"] }), e.jsx(se, { className: "h-64", children: L.length === 0 ? e.jsx("p", { className: "text-gray-500 text-center py-8", children: O.trim() ? "No products match your search" : "No products available" }) : e.jsx("div", { className: "space-y-3", children: L.map((s) => e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50", children: [e.jsxs("div", { className: "flex-1", children: [e.jsx("p", { className: "font-medium", children: s.name }), e.jsx("p", { className: "text-sm text-gray-600", children: y(A(s)) }), s.description && e.jsx("p", { className: "text-xs text-gray-500 line-clamp-1", children: s.description }), e.jsx("p", { className: "text-xs text-blue-600", children: "Customize and add" })] }), e.jsx(x, { size: "sm", onClick: () => Ve(s), className: "bg-red-600 hover:bg-red-700", children: e.jsx(B, { className: "w-4 h-4" }) })] }, s.id)) }) })] })] }), e.jsxs(Y, { children: [e.jsx(J, { children: e.jsxs(X, { className: "flex items-center gap-2", children: [e.jsx(hs, { className: "w-5 h-5" }), "Cart (", f.length, ")"] }) }), e.jsxs(Z, { children: [e.jsx(se, { className: "h-64", children: f.length === 0 ? e.jsx("p", { className: "text-gray-500 text-center py-8", children: "Cart is empty" }) : e.jsx("div", { className: "space-y-3", children: f.map((s) => e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [e.jsxs("div", { className: "flex-1", children: [e.jsx("div", { className: "flex items-center gap-2", children: e.jsx("p", { className: "font-medium", children: s.productName }) }), e.jsxs("p", { className: "text-sm text-gray-600", children: [y(s.price), " each"] }), s.customizations && s.customizations.length > 0 && e.jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [e.jsx("span", { className: "font-medium", children: "Extras:" }), s.customizations.map((t, r) => e.jsx("div", { className: "ml-2", children: e.jsxs("span", { className: "block", children: [t.optionName, " x", t.quantity, " (+", y(t.price * t.quantity), ")"] }) }, `${t.optionId}-${r}`))] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(x, { size: "sm", variant: "outline", onClick: () => be(s.id, s.quantity - 1), children: e.jsx(ne, { className: "w-3 h-3" }) }), e.jsx("span", { className: "w-8 text-center", children: s.quantity }), e.jsx(x, { size: "sm", variant: "outline", onClick: () => be(s.id, s.quantity + 1), children: e.jsx(B, { className: "w-3 h-3" }) }), e.jsx(x, { size: "sm", variant: "outline", onClick: () => Ce(s.id), className: "text-red-600 hover:text-red-700", children: e.jsx(js, { className: "w-3 h-3" }) })] })] }, s.id)) }) }), f.length > 0 && e.jsxs("div", { className: "mt-4 pt-4 border-t", children: [e.jsxs("div", { className: "mb-4", children: [e.jsx(h, { htmlFor: "discount", className: "text-sm", children: "Discount (Optional)" }), e.jsx(Pe, { value: l.watch("discount"), onValueChange: (s) => l.setValue("discount", s), placeholder: "0.00" }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Applied to the total order amount at checkout." })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Subtotal:" }), e.jsx("span", { children: y(R) })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Delivery Fee:" }), e.jsx("span", { children: y(V) })] }), e.jsxs("div", { className: "flex justify-between", children: [e.jsx("span", { children: "Discount:" }), e.jsxs("span", { className: "text-green-700", children: ["-", y(H)] })] }), e.jsx(qe, {}), e.jsxs("div", { className: "flex justify-between font-bold", children: [e.jsx("span", { children: "Total:" }), e.jsx("span", { children: y(Fe) })] })] })] })] })] })] })] }), e.jsx(ls, { open: le, onOpenChange: (s) => {
    U(s), s || (K(null), w({}), I(1));
  }, children: e.jsx(os, { className: "w-full max-h-[90vh] gap-0 overflow-hidden p-0 sm:max-w-lg", children: e.jsxs("div", { className: "flex max-h-[90vh] flex-col", children: [e.jsxs(ds, { className: "border-b px-6 pb-4 pt-6 pr-14", children: [e.jsxs(ms, { children: ["Customize ", o == null ? void 0 : o.name] }), o && e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Unit price: ", e.jsx("span", { className: "font-medium text-foreground", children: y(A(o)) }), u && v && (() => {
    var a;
    const s = v[o.id.toString()], t = s == null ? void 0 : s.some((i) => T(i.salesChannel) === u && i.price > 0), r = (a = xe.find((i) => T(i.value) === u)) == null ? void 0 : a.label;
    return t && r ? e.jsxs("span", { className: "text-xs ml-1", children: ["(", r, " price)"] }) : r ? e.jsxs("span", { className: "text-xs ml-1", children: ["(base price \u2014 no ", r, " price set)"] }) : null;
  })()] })] }), e.jsx(se, { className: "min-h-0 flex-1 px-6", children: e.jsx("div", { className: "space-y-4 py-4", children: fe ? e.jsx("p", { className: "py-4 text-center text-gray-500", children: "Loading options..." }) : z.length > 0 ? z.map((s) => {
    var _a, _b;
    var c;
    const t = Math.max(0, Number((_a = s.minSelections) != null ? _a : 0)), r = Math.max(1, Number((_b = s.maxSelections) != null ? _b : 1)), a = s.isRequired ? Math.max(1, t) : t, i = ye(s.id);
    return e.jsxs("div", { className: "space-y-2", children: [e.jsx("h4", { className: "font-medium", children: s.name }), e.jsxs("p", { className: "text-xs text-gray-500", children: [s.isRequired ? "Required" : "Optional", " \u2022 Select ", a, r > a ? `-${r}` : "", " item(s)", i > 0 ? ` \u2022 ${i} selected` : ""] }), e.jsx("div", { className: "space-y-2", children: (c = s.options) == null ? void 0 : c.map((n) => {
      const d = Ee(s.id, n.id), m = i < r;
      return e.jsxs("div", { className: "flex items-center justify-between gap-3 rounded border p-2", children: [e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx(h, { children: n.name }), n.description && e.jsx("p", { className: "truncate text-xs text-gray-500", children: n.description })] }), e.jsxs("div", { className: "flex shrink-0 items-center gap-2", children: [E(n) > 0 && e.jsxs("span", { className: "text-sm text-gray-600", children: ["+", y(E(n))] }), e.jsx(x, { type: "button", size: "icon", variant: "outline", onClick: () => Qe(s.id, n.id), disabled: d === 0, className: "h-7 w-7", children: e.jsx(ne, { className: "h-3 w-3" }) }), e.jsx("span", { className: "w-6 text-center text-sm font-medium", children: d }), e.jsx(x, { type: "button", size: "icon", variant: "outline", onClick: () => Le(s, n), disabled: !m, className: "h-7 w-7", children: e.jsx(B, { className: "h-3 w-3" }) })] })] }, n.id);
    }) })] }, s.id);
  }) : e.jsx("p", { className: "py-4 text-center text-gray-500", children: "No customizations available for this product" }) }) }), e.jsxs("div", { className: "border-t bg-background px-6 py-4", children: [e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [e.jsx("span", { className: "font-medium", children: "Quantity" }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(x, { type: "button", size: "icon", variant: "outline", onClick: () => I((s) => Math.max(1, s - 1)), className: "h-8 w-8", children: e.jsx(ne, { className: "h-4 w-4" }) }), e.jsx("span", { className: "w-8 text-center font-semibold", children: F }), e.jsx(x, { type: "button", size: "icon", variant: "outline", onClick: () => I((s) => s + 1), className: "h-8 w-8", children: e.jsx(B, { className: "h-4 w-4" }) })] })] }), e.jsx(qe, { className: "my-4" }), e.jsxs("div", { className: "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", children: [e.jsx(x, { variant: "outline", onClick: ve, children: "Cancel" }), e.jsxs(x, { onClick: $e, className: "bg-red-600 hover:bg-red-700", disabled: !Ne(), children: ["Add to Cart \u2022 ", y((o ? A(o) : 0) * F + ge())] })] })] })] }) }) })] }) });
}
export { ut as default };
