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
import { c as M, V as Q, r as g, b as V, j as e, E as N, H as T, I as b, Z as S, F as w, B as o, X as $, W as D, i as z } from "./index-DOfu0sXg.js";
import { u as f } from "./useMutation-CVmbONMy.js";
import { F as h } from "./formatted-number-input-DhzuNqOG.js";
import { C as x } from "./currency-input-Bsi8j9jy.js";
import { L as p } from "./label-B38UEnoM.js";
import { B as H } from "./badge-BAjaXL1S.js";
import { f as P } from "./currency-cZDvJQzL.js";
import { S as K } from "./switch-DvySixFh.js";
import { T as R, a as O, b as A, c as m, d as U, e as u } from "./table-CzdeB6gz.js";
import { u as W, A as X } from "./admin-layout-DH7sAIhq.js";
import { P as Z } from "./plus-xl2HqeIg.js";
import { S as G } from "./save-BZa-ufS1.js";
import { S as J } from "./square-pen-B4PbNjTL.js";
import { T as Y } from "./trash-2-MFuZdLCA.js";
import "./index-CxKYTSZE.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./package-CpPTLD0o.js";
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
function He() {
  const { toast: t } = M(), v = Q(), { selectedBrandId: c, isLoading: _ } = W(), [n, j] = g.useState(null), [a, l] = g.useState({ minDistance: "", maxDistance: "", price: "", minCartTotalForFreeDelivery: "", isActive: true }), [r, d] = g.useState({ minDistance: "", maxDistance: "", price: "", minCartTotalForFreeDelivery: "", isActive: true }), { data: E = [], isLoading: q } = V({ queryKey: ["/api/admin/delivery-pricing", { brandId: c }], queryFn: z({ on401: "throw" }), enabled: !!c, staleTime: 0, gcTime: 0 }), y = f({ mutationFn: (i) => __async(null, null, function* () {
    return (yield D("POST", `/api/admin/delivery-pricing?brandId=${c}`, i)).json();
  }), onSuccess: () => {
    v.invalidateQueries({ queryKey: ["/api/admin/delivery-pricing"] }), d({ minDistance: "", maxDistance: "", price: "", minCartTotalForFreeDelivery: "", isActive: true }), t({ title: "Success", description: "Delivery pricing created successfully" });
  }, onError: (i) => {
    t({ title: "Error", description: i.message || "Failed to create delivery pricing", variant: "destructive" });
  } }), C = f({ mutationFn: (_0) => __async(null, [_0], function* ({ id: i, data: s }) {
    return (yield D("PUT", `/api/admin/delivery-pricing/${i}?brandId=${c}`, s)).json();
  }), onSuccess: () => {
    v.invalidateQueries({ queryKey: ["/api/admin/delivery-pricing"] }), j(null), t({ title: "Success", description: "Delivery pricing updated successfully" });
  }, onError: (i) => {
    t({ title: "Error", description: i.message || "Failed to update delivery pricing", variant: "destructive" });
  } }), F = f({ mutationFn: (i) => __async(null, null, function* () {
    yield D("DELETE", `/api/admin/delivery-pricing/${i}?brandId=${c}`);
  }), onSuccess: () => {
    v.invalidateQueries({ queryKey: ["/api/admin/delivery-pricing"] }), t({ title: "Success", description: "Delivery pricing deleted successfully" });
  }, onError: (i) => {
    t({ title: "Error", description: i.message || "Failed to delete delivery pricing", variant: "destructive" });
  } }), k = (i) => {
    j(i.id), l({ minDistance: i.minDistance, maxDistance: i.maxDistance, price: i.price, minCartTotalForFreeDelivery: i.minCartTotalForFreeDelivery, isActive: i.isActive });
  }, I = () => {
    n && C.mutate({ id: n, data: a });
  }, B = () => {
    j(null), l({ minDistance: "", maxDistance: "", price: "", minCartTotalForFreeDelivery: "", isActive: true });
  }, L = () => {
    if (!r.minDistance || !r.maxDistance || !r.price || !r.minCartTotalForFreeDelivery) {
      t({ title: "Validation Error", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    y.mutate(r);
  };
  return q ? e.jsx("div", { className: "p-6", children: e.jsxs("div", { className: "animate-pulse space-y-4", children: [e.jsx("div", { className: "h-8 bg-gray-200 rounded w-1/4" }), e.jsx("div", { className: "h-40 bg-gray-200 rounded" })] }) }) : e.jsx(X, { currentPage: "delivery-settings", children: e.jsxs("div", { className: "p-6 space-y-6", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold", children: "Delivery Settings" }), e.jsx("p", { className: "text-muted-foreground mt-2", children: "Manage distance-based delivery pricing and free delivery thresholds for your restaurant" })] }), e.jsxs(N, { children: [e.jsxs(T, { children: [e.jsxs(b, { className: "flex items-center gap-2", children: [e.jsx(Z, { className: "h-5 w-5" }), "Add New Pricing Tier"] }), e.jsx(S, { children: "Create a new distance-based delivery pricing tier with free delivery threshold" })] }), e.jsx(w, { children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-4", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "min-distance", children: "Min Distance (km)" }), e.jsx(h, { id: "min-distance", category: "quantity", decimalPlaces: 2, value: r.minDistance, onChange: (i) => d(__spreadProps(__spreadValues({}, r), { minDistance: i === null ? "" : String(i) })), placeholder: "0.00" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "max-distance", children: "Max Distance (km)" }), e.jsx(h, { id: "max-distance", category: "quantity", decimalPlaces: 2, value: r.maxDistance, onChange: (i) => d(__spreadProps(__spreadValues({}, r), { maxDistance: i === null ? "" : String(i) })), placeholder: "1.00" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "price", children: "Price (\u20A6)" }), e.jsx(x, { value: r.price, onValueChange: (i) => d(__spreadProps(__spreadValues({}, r), { price: i })), placeholder: "700.00" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "free-delivery-threshold", children: "Free Delivery Above (\u20A6)" }), e.jsx(x, { value: r.minCartTotalForFreeDelivery, onValueChange: (i) => d(__spreadProps(__spreadValues({}, r), { minCartTotalForFreeDelivery: i })), placeholder: "50000.00" })] }), e.jsx("div", { className: "flex items-end", children: e.jsx(o, { onClick: L, disabled: y.isPending, className: "w-full", children: y.isPending ? "Creating..." : "Add Pricing" }) })] }) })] }), e.jsxs(N, { children: [e.jsxs(T, { children: [e.jsx(b, { children: "Current Delivery Pricing" }), e.jsx(S, { children: "All distance-based delivery pricing tiers with free delivery thresholds. Click edit to modify pricing and thresholds." })] }), e.jsx(w, { children: e.jsxs(R, { children: [e.jsx(O, { children: e.jsxs(A, { children: [e.jsx(m, { children: "Distance Range" }), e.jsx(m, { children: "Price" }), e.jsx(m, { children: "Free Delivery Above" }), e.jsx(m, { children: "Status" }), e.jsx(m, { className: "text-right", children: "Actions" })] }) }), e.jsx(U, { children: E.map((i) => e.jsxs(A, { children: [e.jsx(u, { children: n === i.id ? e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(h, { category: "quantity", decimalPlaces: 2, value: a.minDistance, onChange: (s) => l(__spreadProps(__spreadValues({}, a), { minDistance: s === null ? "" : String(s) })), className: "w-20" }), e.jsx("span", { children: "-" }), e.jsx(h, { category: "quantity", decimalPlaces: 2, value: a.maxDistance, onChange: (s) => l(__spreadProps(__spreadValues({}, a), { maxDistance: s === null ? "" : String(s) })), className: "w-20" }), e.jsx("span", { children: "km" })] }) : e.jsxs("span", { className: "font-medium", children: [i.minDistance, " - ", i.maxDistance, " km"] }) }), e.jsx(u, { children: n === i.id ? e.jsx("div", { className: "flex gap-2 items-center", children: e.jsx(x, { value: a.price, onValueChange: (s) => l(__spreadProps(__spreadValues({}, a), { price: s })), className: "w-24" }) }) : e.jsx("span", { className: "font-semibold", children: P(i.price) }) }), e.jsx(u, { children: n === i.id ? e.jsx("div", { className: "flex gap-2 items-center", children: e.jsx(x, { value: a.minCartTotalForFreeDelivery, onValueChange: (s) => l(__spreadProps(__spreadValues({}, a), { minCartTotalForFreeDelivery: s })), className: "w-24" }) }) : e.jsx("span", { className: "font-semibold text-green-600", children: P(i.minCartTotalForFreeDelivery) }) }), e.jsx(u, { children: n === i.id ? e.jsx(K, { checked: a.isActive, onCheckedChange: (s) => l(__spreadProps(__spreadValues({}, a), { isActive: s })) }) : e.jsx(H, { variant: i.isActive ? "default" : "secondary", children: i.isActive ? "Active" : "Inactive" }) }), e.jsx(u, { className: "text-right", children: n === i.id ? e.jsxs("div", { className: "flex gap-2 justify-end", children: [e.jsx(o, { size: "sm", onClick: I, disabled: C.isPending, children: e.jsx(G, { className: "h-4 w-4" }) }), e.jsx(o, { size: "sm", variant: "outline", onClick: B, children: e.jsx($, { className: "h-4 w-4" }) })] }) : e.jsxs("div", { className: "flex gap-2 justify-end", children: [e.jsx(o, { size: "sm", variant: "outline", onClick: () => k(i), children: e.jsx(J, { className: "h-4 w-4" }) }), e.jsx(o, { size: "sm", variant: "destructive", onClick: () => F.mutate(i.id), disabled: F.isPending, children: e.jsx(Y, { className: "h-4 w-4" }) })] }) })] }, i.id)) })] }) })] })] }) });
}
export { He as default };
