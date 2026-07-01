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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { N as J, c as X, r as h, b as E, j as e, B as p, E as $, H as I, I as R, Z as q, F as O, a2 as L, aj as ee, ak as z, W as v, a6 as K } from "./index-DOfu0sXg.js";
import { u as G } from "./useMutation-CVmbONMy.js";
import { A as re } from "./admin-layout-DH7sAIhq.js";
import { C as se } from "./currency-input-Bsi8j9jy.js";
import { I as i } from "./input-FyV2XACZ.js";
import { L as n } from "./label-B38UEnoM.js";
import { S as Q } from "./switch-DvySixFh.js";
import { A as N, b, a as C } from "./alert-CuGTVrCB.js";
import { F as H } from "./file-upload-BnguOWgd.js";
import { P as te } from "./plus-xl2HqeIg.js";
import "./badge-BAjaXL1S.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
import "./index-CxKYTSZE.js";
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
import "./formatted-number-input-DhzuNqOG.js";
import "./upload-Bxi1uLXD.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ae = J("RefreshCcw", [["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }], ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }], ["path", { d: "M16 16h5v5", key: "ccwih5" }]]), w = { name: "", domain: "", supportEmail: "", logoLightUrl: "", logoDarkUrl: "", colorScheme: "#F02819", buttonColor: "#FFFFFF", playStoreUrl: "", appStoreUrl: "", isActive: true, hasFreeDelivery: false, freeDeliveryMinAmount: "0", freeDeliveryTagColor: "#10B981" };
function We() {
  const { toast: c } = X(), [l, x] = h.useState(null), [s, a] = h.useState(w), [u, f] = h.useState([]), [F, W] = h.useState(""), { data: d, isLoading: T, error: B, refetch: D } = E({ queryKey: ["/api/admin/brands"] }), { data: g = [], isLoading: Z, error: _ } = E({ queryKey: ["/api/admin/outlets/all"], queryFn: () => __async(null, null, function* () {
    const r = yield v("GET", "/api/admin/outlets/all");
    if (r.ok) return r.json();
    if (r.status === 403) {
      const t = yield v("GET", "/api/admin/outlets");
      if (!t.ok) throw new Error("Failed to fetch outlets");
      return t.json();
    }
    throw new Error("Failed to fetch outlets");
  }) }), { data: j = [] } = E({ queryKey: ["/api/admin/outlets", { brandId: l }], queryFn: () => __async(null, null, function* () {
    if (!l) return [];
    const r = yield v("GET", `/api/admin/outlets?brandId=${l}`);
    if (!r.ok) throw new Error("Failed to fetch brand outlets");
    return r.json();
  }), enabled: !!l }), o = h.useMemo(() => d == null ? void 0 : d.find((r) => r.id === l), [d, l]), S = h.useMemo(() => {
    if (!(d != null && d.length)) return [];
    const r = F.trim().toLowerCase();
    return r ? d.filter((t) => `${t.name} ${t.domain || ""}`.toLowerCase().includes(r)) : d;
  }, [d, F]);
  h.useEffect(() => {
    var _a, _b;
    a(o ? { name: o.name || "", domain: o.domain || "", supportEmail: o.supportEmail || "", logoLightUrl: o.logoLightUrl || o.logoDarkUrl || o.logoUrl || "", logoDarkUrl: o.logoDarkUrl || "", colorScheme: o.colorScheme || "#F02819", buttonColor: o.buttonColor || "#FFFFFF", playStoreUrl: o.playStoreUrl || "", appStoreUrl: o.appStoreUrl || "", isActive: (_a = o.isActive) != null ? _a : true, hasFreeDelivery: (_b = o.hasFreeDelivery) != null ? _b : false, freeDeliveryMinAmount: o.freeDeliveryMinAmount || "0", freeDeliveryTagColor: o.freeDeliveryTagColor || "#10B981" } : w), f(o ? j.map((r) => r.id) : []);
  }, [o, j]);
  const P = h.useMemo(() => {
    const r = s.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return r ? `/${r}` : "/brand-route";
  }, [s.name]), M = () => {
    x(null), a(w);
  }, k = G({ mutationFn: (r) => __async(null, null, function* () {
    const t = !!r.id, m = t ? `/api/admin/brands/${r.id}` : "/api/admin/brands", A = yield v(t ? "PUT" : "POST", m, r);
    if (!A.ok) {
      const Y = yield A.json().catch(() => ({}));
      throw new Error(Y.message || "Failed to save brand");
    }
    return yield A.json();
  }), onSuccess: (r) => {
    c({ title: "Brand saved", description: `${r.name} has been ${l ? "updated" : "created"}.` }), K.invalidateQueries({ queryKey: ["/api/admin/brands"] }), D(), x(r.id);
  }, onError: (r) => {
    c({ title: "Failed to save brand", description: r.message || "Unknown error", variant: "destructive" });
  } }), V = (r) => {
    r.preventDefault();
    const t = s.logoLightUrl.trim() || s.logoDarkUrl.trim() || void 0, m = __spreadProps(__spreadValues({}, s), { id: l || void 0, domain: s.domain.trim() || void 0, supportEmail: s.supportEmail.trim() || void 0, logoUrl: t, logoLightUrl: s.logoLightUrl.trim() || t, logoDarkUrl: s.logoDarkUrl.trim() || void 0, colorScheme: s.colorScheme.trim() || void 0, buttonColor: s.buttonColor.trim() || void 0, playStoreUrl: s.playStoreUrl.trim() || void 0, appStoreUrl: s.appStoreUrl.trim() || void 0, outletIds: l || u.length ? u : void 0 });
    k.mutate(m);
  }, U = G({ mutationFn: () => __async(null, null, function* () {
    var _a, _b, _c;
    if (!l) throw new Error("No brand selected");
    const r = yield v("DELETE", `/api/admin/brands/${l}`);
    if (!r.ok) {
      const t = yield r.json().catch(() => ({})), m = (t == null ? void 0 : t.message) || "Failed to delete brand", y = t != null && t.outlets || t != null && t.products || t != null && t.orders ? ` (Outlets: ${(_a = t.outlets) != null ? _a : 0}, Products: ${(_b = t.products) != null ? _b : 0}, Orders: ${(_c = t.orders) != null ? _c : 0})` : "";
      throw new Error(`${m}${y}`);
    }
    return r.json();
  }), onSuccess: () => {
    c({ title: "Brand deleted", description: "Brand removed successfully." }), x(null), a(w), K.invalidateQueries({ queryKey: ["/api/admin/brands"] }), D();
  }, onError: (r) => {
    c({ title: "Failed to delete brand", description: (r == null ? void 0 : r.message) || "Unknown error", variant: "destructive" });
  } });
  return e.jsxs(re, { currentPage: "brands", children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold", children: "Brand Configuration" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "Create storefronts that all share the eatyum.food/control backend, each with its own route, domain, and branding." })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(p, { variant: "outline", size: "sm", onClick: M, children: [e.jsx(te, { className: "h-4 w-4 mr-2" }), "New Brand"] }), e.jsxs(p, { variant: "ghost", size: "sm", onClick: () => D(), children: [e.jsx(ae, { className: "h-4 w-4 mr-2" }), "Refresh"] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-4", children: [e.jsx("div", { className: "space-y-4", children: e.jsxs($, { children: [e.jsxs(I, { children: [e.jsx(R, { children: "Brands" }), e.jsx(q, { children: "Select a brand to edit or create a new one." })] }), e.jsxs(O, { className: "space-y-2", children: [T && e.jsxs("div", { className: "flex items-center text-sm text-muted-foreground", children: [e.jsx(L, { className: "h-4 w-4 animate-spin mr-2" }), "Loading brands..."] }), B && e.jsx("p", { className: "text-sm text-destructive", children: "Failed to load brands. Please refresh." }), !T && !B && (!d || d.length === 0) && e.jsx("p", { className: "text-sm text-muted-foreground", children: "No brands created yet." }), e.jsx("div", { className: "space-y-2", children: e.jsx(i, { value: F, onChange: (r) => W(r.target.value), placeholder: "Search brands\u2026" }) }), e.jsx("div", { className: "space-y-2 max-h-[60vh] overflow-auto pr-1", children: S == null ? void 0 : S.map((r) => e.jsx("button", { onClick: () => x(r.id), className: `w-full text-left border rounded-md p-3 hover:border-primary transition ${l === r.id ? "border-primary bg-primary/5" : "border-border"}`, children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-semibold", children: r.name }), e.jsx("p", { className: "text-xs text-muted-foreground", children: r.domain || "No domain set" })] }), e.jsx("div", { className: `text-xs px-2 py-1 rounded-full ${r.isActive ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`, children: r.isActive ? "Active" : "Inactive" })] }) }, r.id)) })] })] }) }), e.jsxs($, { className: "lg:col-span-2", children: [e.jsxs(I, { children: [e.jsx(R, { children: o ? `Edit ${o.name}` : "Create a Brand" }), e.jsx(q, { children: "App store links are optional. Leave them empty if the brand has no live apps." })] }), e.jsx(O, { children: e.jsxs("form", { onSubmit: V, className: "space-y-4", children: [e.jsx(oe, { brand: o, routeSuggestion: P }), e.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [e.jsxs("div", { className: "rounded-lg border p-4 space-y-3", children: [e.jsx("p", { className: "text-sm font-semibold", children: "Identity & routing" }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "name", children: "Brand Name" }), e.jsx(i, { id: "name", value: s.name, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { name: r.target.value })), required: true, placeholder: "e.g. EatYum or Bigmouthchops" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "routePreview", children: "Frontend Route (auto)" }), e.jsx(i, { id: "routePreview", value: P, readOnly: true, disabled: true }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Generated from the brand name; served alongside ", e.jsx("code", { children: "/control" }), "."] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "domain", children: "Customer Domain" }), e.jsx(i, { id: "domain", value: s.domain, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { domain: r.target.value })), placeholder: "example.com" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "supportEmail", children: "Support Email" }), e.jsx(i, { id: "supportEmail", type: "email", value: s.supportEmail, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { supportEmail: r.target.value })), placeholder: "support@brand.com" })] }), e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(n, { children: "Assign Outlets To This Brand" }), e.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Currently assigned: ", e.jsx("span", { className: "font-medium", children: u.length }), l ? " (saving updates the assignments)" : ""] }), e.jsx(p, { type: "button", variant: "outline", size: "sm", onClick: () => {
    u.length === g.length ? f([]) : f(g.map((r) => r.id));
  }, disabled: !g.length, children: u.length === g.length ? "Clear All" : "Select All" })] }), l && e.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Assigned outlets:", " ", j.length ? j.map((r) => r.name).join(", ") : "None"] }), e.jsx(p, { type: "button", variant: "ghost", size: "sm", onClick: () => f(j.map((r) => r.id)), disabled: !l, children: "Reset" })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 max-h-56 overflow-auto border rounded-md p-3", children: Z ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading outlets\u2026" }) : _ ? e.jsx("p", { className: "text-sm text-destructive", children: "Failed to load outlets. Please refresh." }) : g.length ? g.map((r) => e.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [e.jsx("input", { type: "checkbox", checked: u.includes(r.id), onChange: (t) => {
    f((m) => t.target.checked ? Array.from(/* @__PURE__ */ new Set([...m, r.id])) : m.filter((y) => y !== r.id));
  } }), e.jsx("span", { children: r.name })] }, r.id)) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "No outlets available." }) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "colorScheme", children: "Primary Color" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(i, { id: "colorScheme", type: "color", value: s.colorScheme, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { colorScheme: r.target.value })), className: "w-20 h-10 p-1 cursor-pointer" }), e.jsx(i, { type: "text", value: s.colorScheme, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { colorScheme: r.target.value })), placeholder: "#F02819", className: "flex-1" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "buttonColor", children: "Button Color" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(i, { id: "buttonColor", type: "color", value: s.buttonColor, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { buttonColor: r.target.value })), className: "w-20 h-10 p-1 cursor-pointer" }), e.jsx(i, { type: "text", value: s.buttonColor, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { buttonColor: r.target.value })), placeholder: "#FFFFFF", className: "flex-1" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Color used for buttons and call-to-action elements" })] })] })] }), e.jsxs("div", { className: "rounded-lg border p-4 space-y-3", children: [e.jsx("p", { className: "text-sm font-semibold", children: "Logos" }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { children: "Logo for light backgrounds" }), e.jsx(H, { label: "Upload light logo", value: s.logoLightUrl || "", onChange: (r) => a(__spreadProps(__spreadValues({}, s), { logoLightUrl: r })), folder: "brands" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Used for light sections like the header. If only one logo is uploaded, it is used everywhere." })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { children: "Logo for dark backgrounds (optional)" }), e.jsx(H, { label: "Upload dark logo", value: s.logoDarkUrl || "", onChange: (r) => a(__spreadProps(__spreadValues({}, s), { logoDarkUrl: r })), folder: "brands" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Used on dark sections like the footer. Falls back to the light logo if empty." })] })] })] }), e.jsxs("div", { className: "rounded-lg border p-4 space-y-3", children: [e.jsx("p", { className: "text-sm font-semibold", children: "App links" }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "playStoreUrl", children: "Play Store URL (optional)" }), e.jsx(i, { id: "playStoreUrl", value: s.playStoreUrl, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { playStoreUrl: r.target.value })), placeholder: "https://play.google.com/..." })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "appStoreUrl", children: "App Store URL (optional)" }), e.jsx(i, { id: "appStoreUrl", value: s.appStoreUrl, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { appStoreUrl: r.target.value })), placeholder: "https://apps.apple.com/..." })] })] })] }), e.jsxs("div", { className: "rounded-lg border p-4 space-y-3", children: [e.jsx("p", { className: "text-sm font-semibold", children: "\u{1F69A} Free Delivery Settings" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: 'Enable free delivery for marketing campaigns. When enabled, all product cards will display a "Free Delivery" tag.' }), e.jsxs("div", { className: "flex items-center justify-between border rounded-md p-3 bg-gray-50", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-sm", children: "Enable Free Delivery" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: 'Show "Free Delivery" tag on all product cards for this brand' })] }), e.jsx(Q, { checked: s.hasFreeDelivery, onCheckedChange: (r) => a(__spreadProps(__spreadValues({}, s), { hasFreeDelivery: r })) })] }), s.hasFreeDelivery && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "freeDeliveryMinAmount", children: "Minimum Order Amount for Free Delivery (\u20A6)" }), e.jsx(se, { id: "freeDeliveryMinAmount", value: s.freeDeliveryMinAmount, onValueChange: (r) => a(__spreadProps(__spreadValues({}, s), { freeDeliveryMinAmount: r })), placeholder: "25000.00" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Orders meeting or exceeding this amount qualify for free delivery. Set to 0 for unconditional free delivery." })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(n, { htmlFor: "freeDeliveryTagColor", children: "Tag Background Color" }), e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(i, { id: "freeDeliveryTagColor", type: "color", value: s.freeDeliveryTagColor, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { freeDeliveryTagColor: r.target.value })), className: "w-12 h-10 p-1 cursor-pointer" }), e.jsx(i, { type: "text", value: s.freeDeliveryTagColor, onChange: (r) => a(__spreadProps(__spreadValues({}, s), { freeDeliveryTagColor: r.target.value })), placeholder: "#10B981", className: "flex-1" }), e.jsx("div", { className: "rounded-md px-2 py-1 text-xs font-semibold text-white shadow", style: { backgroundColor: s.freeDeliveryTagColor }, children: "\u{1F69A} Free Delivery" })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: 'The background color for the "Free Delivery" tag on product cards.' })] })] })] })] }), e.jsxs("div", { className: "flex items-center justify-between border rounded-md p-3", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-sm", children: "Brand is active" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Toggle off to temporarily hide this brand from customer-facing experiences." })] }), e.jsx(Q, { checked: s.isActive, onCheckedChange: (r) => a(__spreadProps(__spreadValues({}, s), { isActive: r })) })] }), e.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between gap-3 md:items-center", children: [e.jsx("div", { children: o != null && o.isDefault ? e.jsx("p", { className: "text-xs text-muted-foreground", children: "Default brand cannot be deleted." }) : l ? e.jsxs(p, { type: "button", variant: "destructive", disabled: U.isPending, onClick: () => {
    !l || !window.confirm("Delete this brand? This is only allowed if it has no outlets, products, or orders.") || U.mutate();
  }, children: [U.isPending && e.jsx(L, { className: "h-4 w-4 animate-spin mr-2" }), "Delete brand"] }) : null }), e.jsxs("div", { className: "flex justify-end gap-2 md:ml-auto", children: [e.jsx(p, { type: "button", variant: "outline", onClick: M, children: "Cancel" }), e.jsxs(p, { type: "submit", disabled: k.isPending, children: [k.isPending && e.jsx(L, { className: "h-4 w-4 animate-spin mr-2" }), l ? "Update Brand" : "Create Brand"] })] })] })] }) })] })] })] });
}
function oe({ brand: c, routeSuggestion: l }) {
  if (!c) return e.jsxs(N, { variant: "default", className: "border-dashed", children: [e.jsx(b, { children: "Frontend route" }), e.jsxs(C, { className: "text-sm", children: ["Routes auto-generate from the brand name (e.g. ", e.jsx("code", { children: l }), ") and still use the shared", " ", e.jsx("code", { children: "/control" }), " backend."] })] });
  const x = ee(c.domain), s = z.find((a) => a.domain === x) || z.find((a) => a.name.toLowerCase() === c.name.toLowerCase());
  return s ? e.jsxs(N, { variant: "default", children: [e.jsx(b, { children: "Frontend route" }), e.jsxs(C, { className: "text-sm space-y-1", children: [e.jsxs("div", { children: ["Route: ", e.jsx("code", { children: s.basePath })] }), e.jsxs("div", { children: ["Domain: ", e.jsx("code", { children: s.domain })] }), e.jsxs("div", { className: "text-xs text-muted-foreground", children: ["The storefront is served at this path/domain, while all admin functions stay at ", e.jsx("code", { children: "/control" }), "."] })] })] }) : c.isDefault ? e.jsxs(N, { variant: "default", children: [e.jsx(b, { children: "Frontend route" }), e.jsxs(C, { className: "text-sm space-y-1", children: [e.jsxs("div", { children: ["Route: ", e.jsx("code", { children: "/" })] }), e.jsxs("div", { children: ["Domain: ", e.jsx("code", { children: c.domain || "eatyum.food" })] }), e.jsxs("div", { className: "text-xs text-muted-foreground", children: ["This is the default brand and owns ", e.jsx("code", { children: "/control" }), ". Additional brands can sit alongside it on their own routes without affecting this backend."] })] })] }) : e.jsxs(N, { variant: "default", children: [e.jsx(b, { children: "Frontend route" }), e.jsxs(C, { className: "text-sm", children: ["This brand doesn't have a mapped storefront route yet. Use the generated path (e.g.", " ", e.jsx("code", { children: l }), ") when wiring DNS or proxy rules."] })] });
}
export { We as default };
