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
import { N as K, c as O, b as J, j as e, E as w, H as b, I as C, F as P, Z as W, B as c, L as Z, r as D, a6 as A } from "./index-DOfu0sXg.js";
import { u as $ } from "./useMutation-CVmbONMy.js";
import { A as L } from "./admin-layout-DH7sAIhq.js";
import { F as G } from "./formatted-number-input-DhzuNqOG.js";
import { I as S } from "./input-FyV2XACZ.js";
import { T as X } from "./textarea-__Yhw9VH.js";
import { S as Y } from "./switch-DvySixFh.js";
import { D as q, e as U, a as I, b as V, c as Q } from "./dialog-BUvIuveX.js";
import { T as _, a as ee, b as M, c as f, d as se, e as v } from "./table-CzdeB6gz.js";
import { B as te } from "./badge-BAjaXL1S.js";
import { z as l, u as re, t as ie } from "./index-Ph36iM9Q.js";
import { F as ae, a as h, b as p, c as u, e as j, d as y } from "./form-DpW_ADfq.js";
import { U as ne } from "./users-CBtjfzvJ.js";
import { E as R } from "./eye-DhxFEmT5.js";
import { S as oe } from "./shopping-cart-C1hOzoyN.js";
import { T as ce } from "./trending-up-bEYf6wvk.js";
import { C as B } from "./copy-Dm_kp7Au.js";
import { D as le } from "./dollar-sign-CJk2KsjA.js";
import { T as de } from "./trash-2-MFuZdLCA.js";
import { S as me } from "./square-pen-B4PbNjTL.js";
import { P as xe } from "./plus-xl2HqeIg.js";
import { C as he } from "./check-AkIa94Y-.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./arrow-right-CS_UFvxY.js";
import "./label-B38UEnoM.js";
import "./clock-DQ0X7PrC.js";
import "./package-CpPTLD0o.js";
import "./map-pin-ChG4yLkU.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const pe = K("QrCode", [["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }], ["rect", { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" }], ["rect", { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" }], ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }], ["path", { d: "M21 21v.01", key: "ents32" }], ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }], ["path", { d: "M3 12h.01", key: "nlz23k" }], ["path", { d: "M12 3h.01", key: "n36tog" }], ["path", { d: "M12 16v.01", key: "133mhm" }], ["path", { d: "M16 12h1", key: "1slzba" }], ["path", { d: "M21 12v.01", key: "1lwtk9" }], ["path", { d: "M12 21v-1", key: "1880an" }]]), ue = l.object({ name: l.string().min(1, "Partner name is required"), slug: l.string().min(1, "Partner slug is required").regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"), email: l.string().email("Valid email is required"), phone: l.string().min(1, "Phone number is required"), commissionRate: l.number().min(0, "Commission rate must be positive").max(100, "Commission rate cannot exceed 100%"), contactPerson: l.string().optional(), description: l.string().optional(), isActive: l.boolean().default(true) });
function z({ partner: n, onSuccess: d }) {
  const [k, g] = D.useState(false), [F, N] = D.useState(false), { toast: m } = O(), i = re({ resolver: ie(ue), defaultValues: n || { name: "", slug: "", email: "", phone: "", commissionRate: 5, contactPerson: "", description: "", isActive: true } }), s = $({ mutationFn: (t) => __async(null, null, function* () {
    const a = yield fetch("/api/admin/partners", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify(t) });
    if (!a.ok) {
      const E = yield a.json();
      throw new Error(E.message || "Failed to create partner");
    }
    return a.json();
  }), onSuccess: () => {
    A.invalidateQueries({ queryKey: ["/api/admin/partners"] }), g(false), i.reset(), d(), m({ title: "Success", description: "Partner created successfully" });
  }, onError: (t) => {
    m({ title: "Error", description: t.message, variant: "destructive" });
  } }), r = $({ mutationFn: (t) => __async(null, null, function* () {
    const a = yield fetch(`/api/admin/partners/${n.id}`, { method: "PATCH", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify(t) });
    if (!a.ok) {
      const E = yield a.json();
      throw new Error(E.message || "Failed to update partner");
    }
    return a.json();
  }), onSuccess: () => {
    A.invalidateQueries({ queryKey: ["/api/admin/partners"] }), g(false), d(), m({ title: "Success", description: "Partner updated successfully" });
  }, onError: (t) => {
    m({ title: "Error", description: t.message, variant: "destructive" });
  } }), o = (t) => {
    n ? r.mutate(t) : s.mutate(t);
  }, x = (t) => `${window.location.origin}/p/${t}`, T = (t) => __async(null, null, function* () {
    try {
      yield navigator.clipboard.writeText(t), N(true), setTimeout(() => N(false), 2e3), m({ title: "Copied!", description: "Partner URL copied to clipboard" });
    } catch (e2) {
      m({ title: "Error", description: "Failed to copy to clipboard", variant: "destructive" });
    }
  }), H = (t) => {
    const a = t.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
    i.setValue("slug", a);
  };
  return e.jsxs(q, { open: k, onOpenChange: g, children: [e.jsx(U, { asChild: true, children: n ? e.jsx(c, { variant: "outline", size: "sm", children: e.jsx(me, { className: "h-4 w-4" }) }) : e.jsxs(c, { children: [e.jsx(xe, { className: "h-4 w-4 mr-2" }), "Add Partner"] }) }), e.jsxs(I, { className: "max-w-2xl", children: [e.jsx(V, { children: e.jsx(Q, { children: n ? "Edit Partner" : "Add New Partner" }) }), e.jsx(ae, __spreadProps(__spreadValues({}, i), { children: e.jsxs("form", { onSubmit: i.handleSubmit(o), className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(h, { control: i.control, name: "name", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Partner Name" }), e.jsx(j, { children: e.jsx(S, __spreadProps(__spreadValues({}, t), { onChange: (a) => {
    t.onChange(a), n || H(a.target.value);
  } })) }), e.jsx(y, {})] }) }), e.jsx(h, { control: i.control, name: "slug", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Partner Slug" }), e.jsx(j, { children: e.jsx(S, __spreadValues({}, t)) }), e.jsx(y, {}), t.value && e.jsxs("div", { className: "flex items-center gap-2 mt-2", children: [e.jsx("code", { className: "text-xs bg-gray-100 px-2 py-1 rounded", children: x(t.value) }), e.jsx(c, { type: "button", variant: "outline", size: "sm", onClick: () => T(x(t.value)), children: F ? e.jsx(he, { className: "h-3 w-3" }) : e.jsx(B, { className: "h-3 w-3" }) })] })] }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(h, { control: i.control, name: "email", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Email" }), e.jsx(j, { children: e.jsx(S, __spreadProps(__spreadValues({}, t), { type: "email" })) }), e.jsx(y, {})] }) }), e.jsx(h, { control: i.control, name: "phone", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Phone" }), e.jsx(j, { children: e.jsx(S, __spreadValues({}, t)) }), e.jsx(y, {})] }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(h, { control: i.control, name: "commissionRate", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Commission Rate (%)" }), e.jsx(j, { children: e.jsx(G, { value: t.value, onChange: (a) => t.onChange(a != null ? a : 0), category: "percentage", min: 0, max: 100 }) }), e.jsx(y, {})] }) }), e.jsx(h, { control: i.control, name: "contactPerson", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Contact Person (Optional)" }), e.jsx(j, { children: e.jsx(S, __spreadValues({}, t)) }), e.jsx(y, {})] }) })] }), e.jsx(h, { control: i.control, name: "description", render: ({ field: t }) => e.jsxs(p, { children: [e.jsx(u, { children: "Description (Optional)" }), e.jsx(j, { children: e.jsx(X, __spreadProps(__spreadValues({}, t), { rows: 3 })) }), e.jsx(y, {})] }) }), e.jsx(h, { control: i.control, name: "isActive", render: ({ field: t }) => e.jsxs(p, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(u, { className: "text-base", children: "Active Status" }), e.jsx("div", { className: "text-sm text-muted-foreground", children: "Enable or disable this partner" })] }), e.jsx(j, { children: e.jsx(Y, { checked: t.value, onCheckedChange: t.onChange }) })] }) }), e.jsxs("div", { className: "flex justify-end gap-2", children: [e.jsx(c, { type: "button", variant: "outline", onClick: () => g(false), children: "Cancel" }), e.jsx(c, { type: "submit", disabled: s.isPending || r.isPending, children: s.isPending || r.isPending ? "Saving..." : n ? "Update" : "Create" })] })] }) }))] })] });
}
function cs() {
  const { toast: n } = O(), { data: d = [], isLoading: k } = J({ queryKey: ["/api/admin/partners"], staleTime: 5 * 60 * 1e3, gcTime: 30 * 60 * 1e3, refetchOnWindowFocus: false }), g = $({ mutationFn: (s) => __async(null, null, function* () {
    const r = yield fetch(`/api/admin/partners/${s}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!r.ok) {
      const o = yield r.json();
      throw new Error(o.message || "Failed to delete partner");
    }
  }), onSuccess: () => {
    A.invalidateQueries({ queryKey: ["/api/admin/partners"] }), n({ title: "Success", description: "Partner deleted successfully" });
  }, onError: (s) => {
    n({ title: "Error", description: s.message, variant: "destructive" });
  } }), F = (s) => `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(s)}`, N = (s) => __async(null, null, function* () {
    const r = `${window.location.origin}/p/${s}`;
    try {
      yield navigator.clipboard.writeText(r), n({ title: "Copied!", description: "Partner URL copied to clipboard" });
    } catch (e2) {
      n({ title: "Error", description: "Failed to copy to clipboard", variant: "destructive" });
    }
  }), m = (s) => __async(null, null, function* () {
    const r = `${window.location.origin}/partner-earnings/${s}`;
    try {
      yield navigator.clipboard.writeText(r), n({ title: "Copied!", description: "Partner earnings link copied to clipboard" });
    } catch (e2) {
      n({ title: "Error", description: "Failed to copy to clipboard", variant: "destructive" });
    }
  }), i = d.reduce((s, r) => {
    var o, x, T;
    return { totalVisits: s.totalVisits + (((o = r.stats) == null ? void 0 : o.totalVisits) || 0), totalOrders: s.totalOrders + (((x = r.stats) == null ? void 0 : x.totalOrders) || 0), totalCommission: s.totalCommission + (((T = r.stats) == null ? void 0 : T.totalCommission) || 0) };
  }, { totalVisits: 0, totalOrders: 0, totalCommission: 0 });
  return k ? e.jsx(L, { currentPage: "partners", children: e.jsx("div", { className: "p-6", children: e.jsxs("div", { className: "animate-pulse", children: [e.jsx("div", { className: "h-8 bg-gray-200 rounded w-1/4 mb-6" }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [1, 2, 3].map((s) => e.jsx("div", { className: "h-32 bg-gray-200 rounded" }, s)) }), e.jsx("div", { className: "h-96 bg-gray-200 rounded" })] }) }) }) : e.jsx(L, { currentPage: "partners", children: e.jsxs("div", { className: "p-6 space-y-6", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold", children: "Partner Management" }), e.jsx("p", { className: "text-gray-600", children: "Manage your partners and track their performance" })] }), e.jsx(z, { onSuccess: () => {
  } })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [e.jsxs(w, { children: [e.jsxs(b, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(C, { className: "text-sm font-medium", children: "Total Partners" }), e.jsx(ne, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(P, { children: [e.jsx("div", { className: "text-2xl font-bold", children: d.length }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [d.filter((s) => s.isActive).length, " active"] })] })] }), e.jsxs(w, { children: [e.jsxs(b, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(C, { className: "text-sm font-medium", children: "Total Visits" }), e.jsx(R, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(P, { children: [e.jsx("div", { className: "text-2xl font-bold", children: i.totalVisits.toLocaleString() }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "All partner visits" })] })] }), e.jsxs(w, { children: [e.jsxs(b, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(C, { className: "text-sm font-medium", children: "Total Orders" }), e.jsx(oe, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(P, { children: [e.jsx("div", { className: "text-2xl font-bold", children: i.totalOrders }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "From partner referrals" })] })] }), e.jsxs(w, { children: [e.jsxs(b, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(C, { className: "text-sm font-medium", children: "Total Commission" }), e.jsx(ce, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(P, { children: [e.jsxs("div", { className: "text-2xl font-bold", children: ["\u20A6", (i.totalCommission / 100).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Commission earned" })] })] })] }), e.jsxs(w, { children: [e.jsxs(b, { children: [e.jsx(C, { children: "Partners" }), e.jsx(W, { children: "Manage your partner network and track their performance" })] }), e.jsxs(P, { children: [e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(_, { className: "table-fixed min-w-[1120px]", children: [e.jsx(ee, { children: e.jsxs(M, { children: [e.jsx(f, { className: "w-[140px]", children: "Partner" }), e.jsx(f, { className: "w-[170px]", children: "Contact" }), e.jsx(f, { className: "w-[110px] text-right", children: "Commission" }), e.jsx(f, { className: "w-[120px]", children: "Stats" }), e.jsx(f, { className: "w-[90px]", children: "Status" }), e.jsx(f, { className: "w-[210px]", children: "Partner URL" }), e.jsx(f, { className: "w-[220px] text-right", children: "Actions" })] }) }), e.jsx(se, { children: d.map((s) => {
    var r, o, x;
    return e.jsxs(M, { children: [e.jsx(v, { children: e.jsxs("div", { children: [e.jsx("div", { className: "font-medium truncate", children: s.name }), e.jsxs("div", { className: "text-sm text-gray-500 truncate", children: ["/", s.slug] }), s.contactPerson && e.jsx("div", { className: "text-xs text-gray-400 truncate", children: s.contactPerson })] }) }), e.jsx(v, { children: e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "truncate", children: s.email }), e.jsx("div", { className: "text-gray-500 truncate", children: s.phone })] }) }), e.jsxs(v, { className: "whitespace-nowrap text-right tabular-nums", children: [s.commissionRate, "%"] }), e.jsx(v, { children: e.jsxs("div", { className: "text-sm", children: [e.jsxs("div", { children: [((r = s.stats) == null ? void 0 : r.totalVisits) || 0, " visits"] }), e.jsxs("div", { children: [((o = s.stats) == null ? void 0 : o.totalOrders) || 0, " orders"] }), e.jsxs("div", { className: "text-green-600", children: ["\u20A6", ((((x = s.stats) == null ? void 0 : x.totalCommission) || 0) / 100).toLocaleString(void 0, { minimumFractionDigits: 2, maximumFractionDigits: 2 })] })] }) }), e.jsx(v, { children: e.jsx(te, { variant: s.isActive ? "default" : "secondary", children: s.isActive ? "Active" : "Inactive" }) }), e.jsx(v, { children: e.jsxs("div", { className: "flex flex-col gap-2", children: [e.jsxs("div", { className: "flex items-center gap-1 whitespace-nowrap", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => N(s.slug), children: [e.jsx(B, { className: "h-3 w-3 mr-1" }), "Copy URL"] }), e.jsxs(q, { children: [e.jsx(U, { asChild: true, children: e.jsxs(c, { variant: "outline", size: "sm", children: [e.jsx(pe, { className: "h-3 w-3 mr-1" }), "QR"] }) }), e.jsxs(I, { children: [e.jsx(V, { children: e.jsxs(Q, { children: ["QR Code for ", s.name] }) }), e.jsxs("div", { className: "flex flex-col items-center gap-4", children: [e.jsx("img", { src: F(`${window.location.origin}/p/${s.slug}`), alt: `QR Code for ${s.name}`, className: "border rounded" }), e.jsxs("code", { className: "text-sm bg-gray-100 px-3 py-2 rounded", children: [window.location.origin, "/p/", s.slug] }), e.jsx(c, { onClick: () => N(s.slug), className: "w-full", children: "Copy Partner URL" })] })] })] })] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => m(s.slug), className: "w-fit", children: [e.jsx(le, { className: "h-3 w-3 mr-1" }), "Copy Earnings Link"] })] }) }), e.jsx(v, { className: "text-right", children: e.jsxs("div", { className: "ml-auto inline-flex w-fit items-center justify-end gap-1 whitespace-nowrap", children: [e.jsx(Z, { href: `/control/partners/${s.id}`, children: e.jsxs(c, { variant: "outline", size: "sm", "data-testid": `button-view-partner-${s.id}`, children: [e.jsx(R, { className: "h-4 w-4 mr-1" }), "View Details"] }) }), e.jsx(z, { partner: s, onSuccess: () => {
    } }), e.jsx(c, { variant: "outline", size: "sm", onClick: () => {
      confirm("Are you sure you want to delete this partner?") && g.mutate(s.id);
    }, disabled: g.isPending, children: e.jsx(de, { className: "h-4 w-4" }) })] }) })] }, s.id);
  }) })] }) }), d.length === 0 && e.jsx("div", { className: "text-center py-8 text-gray-500", children: "No partners found. Add your first partner to get started." })] })] })] }) });
}
export { cs as default };
