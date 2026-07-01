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
import { N as be, c as we, r as N, b as O, i as I, j as e, E as Z, H as G, I as J, Z as X, F as ee, B as p, aU as ke, a6 as A, W as g } from "./index-DOfu0sXg.js";
import { u as b } from "./useMutation-CVmbONMy.js";
import { u as Ee, A as Se } from "./admin-layout-DH7sAIhq.js";
import { B as T } from "./badge-BAjaXL1S.js";
import { I as se } from "./input-FyV2XACZ.js";
import { L as he } from "./label-B38UEnoM.js";
import { S as Fe, a as Ce, b as Pe, c as Oe, d as Ie } from "./select-ets7bQkN.js";
import { S as K } from "./switch-DvySixFh.js";
import { S as Ae } from "./shield-BJZvWIYM.js";
import { R as u } from "./refresh-cw-C5dId60a.js";
import { S as xe } from "./save-BZa-ufS1.js";
import { W as ge } from "./webhook-CMu-F_1L.js";
import { C as Te } from "./copy-Dm_kp7Au.js";
import { S as Ke } from "./store-Cr0AuVYD.js";
import { T as Me } from "./trash-2-MFuZdLCA.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./package-CpPTLD0o.js";
import "./map-pin-ChG4yLkU.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./users-CBtjfzvJ.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qe = be("ArrowDownUp", [["path", { d: "m3 16 4 4 4-4", key: "1co6wj" }], ["path", { d: "M7 20V4", key: "1yoxec" }], ["path", { d: "m21 8-4-4-4 4", key: "1c9v7m" }], ["path", { d: "M17 4v16", key: "7dpous" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const He = be("Clock3", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }]]), L = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], v = (i) => {
  if (!i) return "Never";
  try {
    return new Date(i).toLocaleString();
  } catch (e2) {
    return "Never";
  }
}, je = () => L.reduce((i, r) => (i[r] = { available: false, opening: "09:00", closing: "22:00" }, i), {}), R = (i) => {
  const r = je();
  for (const o of L) {
    const l = i == null ? void 0 : i[o];
    l && (r[o] = { available: !!l.available, opening: l.opening || "09:00", closing: l.closing || "22:00" });
  }
  return r;
}, Re = (i) => {
  const r = R(i), o = L.filter((l) => {
    var c;
    return (c = r[l]) == null ? void 0 : c.available;
  });
  return o.length === 0 ? "Closed all week" : `${o.length} open day${o.length === 1 ? "" : "s"}`;
};
function Le({ value: i, onChange: r }) {
  const o = R(i);
  return e.jsxs("div", { className: "space-y-2 rounded-md border border-dashed p-3", children: [e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-500", children: "Operating Hours" }), e.jsx("div", { className: "space-y-2", children: L.map((l) => {
    const c = o[l] || { available: false, opening: "09:00", closing: "22:00" };
    return e.jsxs("div", { className: "grid grid-cols-[110px_80px_1fr_1fr] items-center gap-2", children: [e.jsx("div", { className: "text-sm capitalize text-gray-700", children: l }), e.jsx(K, { checked: !!c.available, onCheckedChange: (j) => r(__spreadProps(__spreadValues({}, o), { [l]: __spreadProps(__spreadValues({}, c), { available: j }) })) }), e.jsx(se, { type: "time", value: c.opening || "09:00", disabled: !c.available, onChange: (j) => r(__spreadProps(__spreadValues({}, o), { [l]: __spreadProps(__spreadValues({}, c), { opening: j.target.value }) })) }), e.jsx(se, { type: "time", value: c.closing || "22:00", disabled: !c.available, onChange: (j) => r(__spreadProps(__spreadValues({}, o), { [l]: __spreadProps(__spreadValues({}, c), { closing: j.target.value }) })) })] }, l);
  }) })] });
}
function Ss() {
  var re, oe;
  const { toast: i } = we(), { selectedBrandId: r } = Ee(), [o, l] = N.useState({ apiKey: "", isEnabled: false }), [c, j] = N.useState(false), [ae, te] = N.useState({}), { data: h } = O({ queryKey: ["/api/admin/foodelo/account"], queryFn: I({ on401: "throw" }), enabled: !!r, staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: ye = [] } = O({ queryKey: ["/api/admin/outlets-rbac", { brandId: r }], queryFn: I({ on401: "throw" }), enabled: !!r }), { data: W } = O({ queryKey: ["/api/admin/foodelo/mappings"], queryFn: I({ on401: "throw" }), enabled: !!r, staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), { data: f, isFetching: ie } = O({ queryKey: ["/api/admin/foodelo/vendors"], queryFn: I({ on401: "throw" }), enabled: !!r && c && !!((re = h == null ? void 0 : h.account) != null && re.hasApiKey), staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), { data: _ } = O({ queryKey: ["/api/admin/webhooks/events", { source: "foodelo", limit: 20 }], queryFn: I({ on401: "throw" }), enabled: !!r, staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), t = (h == null ? void 0 : h.account) || null, M = (W == null ? void 0 : W.mappings) || [], w = (h == null ? void 0 : h.webhookUrl) || null, q = (_ == null ? void 0 : _.events) || [];
  N.useEffect(() => {
    l({ apiKey: "", isEnabled: !!(t != null && t.isEnabled) });
  }, [t == null ? void 0 : t.id, t == null ? void 0 : t.isEnabled]), N.useEffect(() => {
    const s = {};
    M.forEach((a) => {
      s[a.foodeloVendorId] = { mappingId: a.id, outletId: String(a.outletId), isEnabled: a.isEnabled, isOpen: a.isOpen, pickupEnabled: a.pickupEnabled, operatingHours: R(a.operatingHours) };
    }), te((a) => {
      const n = __spreadValues({}, s);
      return Object.entries(a).forEach(([d, y]) => {
        n[d] || (n[d] = y);
      }), n;
    });
  }, [M]);
  const H = N.useMemo(() => {
    const s = /* @__PURE__ */ new Map();
    return M.forEach((a) => {
      s.set(a.foodeloVendorId, { id: a.foodeloVendorId, vendorName: a.vendorName || a.branchName || a.foodeloVendorId, branchName: a.branchName, vendorType: a.vendorType, branchRole: a.branchRole, accountStatus: a.accountStatus, open: a.isOpen, mapping: a });
    }), ((f == null ? void 0 : f.vendors) || []).forEach((a) => {
      var n;
      s.set(a._id, { id: a._id, vendorName: a.vendorName || a.restaurantName || a.storeName || a._id, branchName: a.restaurantName || a.storeName || null, vendorType: a.type || null, branchRole: a.branchRole || null, accountStatus: a.accountStatus || null, open: typeof a.open == "boolean" ? a.open : null, mapping: (n = s.get(a._id)) == null ? void 0 : n.mapping });
    }), Array.from(s.values()).sort((a, n) => a.vendorName.localeCompare(n.vendorName));
  }, [M, f == null ? void 0 : f.vendors]), x = () => {
    A.invalidateQueries({ queryKey: ["/api/admin/foodelo/account"] }), A.invalidateQueries({ queryKey: ["/api/admin/foodelo/mappings"] }), A.invalidateQueries({ queryKey: ["/api/admin/foodelo/vendors"] }), A.invalidateQueries({ queryKey: ["/api/admin/webhooks/events"] });
  }, ne = b({ mutationFn: () => __async(null, null, function* () {
    const s = { isEnabled: o.isEnabled };
    return o.apiKey.trim() && (s.apiKey = o.apiKey.trim()), (yield g("PUT", "/api/admin/foodelo/account", s)).json();
  }), onSuccess: () => {
    x(), l((s) => __spreadProps(__spreadValues({}, s), { apiKey: "" })), i({ title: "Foodelo account saved" });
  }, onError: (s) => {
    i({ title: "Failed to save Foodelo account", description: s.message, variant: "destructive" });
  } }), V = b({ mutationFn: () => __async(null, null, function* () {
    return (yield g("POST", "/api/admin/foodelo/account/test")).json();
  }), onSuccess: (s) => {
    x(), i({ title: "Foodelo connection verified", description: `${(s == null ? void 0 : s.totalVendors) || 0} vendor(s) returned.` }), j(true);
  }, onError: (s) => {
    i({ title: "Foodelo test failed", description: s.message, variant: "destructive" });
  } }), B = b({ mutationFn: () => __async(null, null, function* () {
    return (yield g("POST", "/api/admin/foodelo/account/webhook")).json();
  }), onSuccess: (s) => __async(null, null, function* () {
    x(), s != null && s.webhookUrl && (yield navigator.clipboard.writeText(s.webhookUrl)), i({ title: "Foodelo webhook configured", description: s != null && s.webhookUrl ? "Webhook URL copied to clipboard." : "Webhook configured successfully." });
  }), onError: (s) => {
    i({ title: "Failed to configure webhook", description: s.message, variant: "destructive" });
  } }), U = b({ mutationFn: () => __async(null, null, function* () {
    const s = H.map((n) => {
      const d = ae[n.id];
      return d != null && d.outletId ? { foodeloVendorId: n.id, outletId: Number(d.outletId), vendorType: n.vendorType, branchRole: n.branchRole, vendorName: n.vendorName, branchName: n.branchName, accountStatus: n.accountStatus, isOpen: d.isOpen, pickupEnabled: d.pickupEnabled, operatingHours: d.operatingHours, isEnabled: d.isEnabled } : null;
    }).filter(Boolean);
    if (!s.length) throw new Error("Select at least one outlet mapping before saving.");
    return (yield g("POST", "/api/admin/foodelo/mappings", { mappings: s })).json();
  }), onSuccess: () => {
    x(), i({ title: "Foodelo mappings saved" });
  }, onError: (s) => {
    i({ title: "Failed to save Foodelo mappings", description: s.message, variant: "destructive" });
  } }), $ = b({ mutationFn: (s) => __async(null, null, function* () {
    return (yield g("DELETE", `/api/admin/foodelo/mappings/${s}`)).json();
  }), onSuccess: () => {
    x(), i({ title: "Foodelo mapping deleted" });
  }, onError: (s) => {
    i({ title: "Failed to delete mapping", description: s.message, variant: "destructive" });
  } }), D = b({ mutationFn: () => __async(null, null, function* () {
    return (yield g("POST", "/api/admin/foodelo/reconcile")).json();
  }), onSuccess: () => {
    x(), i({ title: "Foodelo reconciliation started" });
  }, onError: (s) => {
    i({ title: "Foodelo reconciliation failed", description: s.message, variant: "destructive" });
  } }), Q = b({ mutationFn: (s) => __async(null, null, function* () {
    return (yield g("POST", `/api/admin/webhooks/events/${encodeURIComponent(s)}/requeue`, { source: "foodelo", resetRetries: true })).json();
  }), onSuccess: () => {
    x(), i({ title: "Webhook event requeued" });
  }, onError: (s) => {
    i({ title: "Failed to requeue webhook event", description: s.message, variant: "destructive" });
  } }), Y = b({ mutationFn: (s) => __async(null, null, function* () {
    return (yield g("POST", `/api/admin/foodelo/mappings/${s}/pull-state`)).json();
  }), onSuccess: () => {
    x(), i({ title: "Foodelo branch state refreshed" });
  }, onError: (s) => {
    i({ title: "Failed to refresh branch state", description: s.message, variant: "destructive" });
  } }), k = b({ mutationFn: (s) => __async(null, null, function* () {
    return (yield g("POST", `/api/admin/foodelo/mappings/${s.mappingId}/push-state`, s.payload)).json();
  }), onSuccess: () => {
    x(), i({ title: "Foodelo branch state synced" });
  }, onError: (s) => {
    i({ title: "Failed to sync branch state", description: s.message, variant: "destructive" });
  } }), z = q.filter((s) => s.status === "failed" || s.status === "dead_letter"), fe = q.filter((s) => s.status === "pending" || s.status === "processing").length, Ne = q.filter((s) => s.status === "processed").length, ve = () => __async(null, null, function* () {
    w && (yield navigator.clipboard.writeText(w), i({ title: "Webhook URL copied" }));
  }), E = (s, a) => {
    te((n) => {
      var _a, _b, _c, _d;
      var d, y, S, F, C, P;
      return __spreadProps(__spreadValues({}, n), { [s]: __spreadValues({ mappingId: (d = n[s]) == null ? void 0 : d.mappingId, outletId: ((y = n[s]) == null ? void 0 : y.outletId) || "", isEnabled: (_a = (S = n[s]) == null ? void 0 : S.isEnabled) != null ? _a : true, isOpen: (_b = (F = n[s]) == null ? void 0 : F.isOpen) != null ? _b : null, pickupEnabled: (_c = (C = n[s]) == null ? void 0 : C.pickupEnabled) != null ? _c : null, operatingHours: (_d = (P = n[s]) == null ? void 0 : P.operatingHours) != null ? _d : je() }, a) });
    });
  };
  return e.jsx(Se, { currentPage: "foodelo", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Foodelo Integration" }), e.jsx("p", { className: "text-gray-600", children: "Configure the brand-level Foodelo account, map Foodelo vendors to Yum outlets, and manage webhook plus reconciliation health." })] }), e.jsxs(Z, { children: [e.jsxs(G, { children: [e.jsxs(J, { className: "flex items-center gap-2", children: [e.jsx(Ae, { className: "h-5 w-5" }), "Account Configuration"] }), e.jsx(X, { children: "Foodelo uses one API key and webhook secret per Yum brand. Keys are stored encrypted and masked after save." })] }), e.jsxs(ee, { className: "space-y-4", children: [!r && e.jsx("div", { className: "rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900", children: "Select a brand from the top navigation before configuring Foodelo." }), e.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [e.jsxs("div", { className: "space-y-2 md:col-span-2", children: [e.jsx(he, { children: t != null && t.hasApiKey ? "API Key (leave blank to keep existing)" : "API Key" }), e.jsx(se, { type: "password", value: o.apiKey, onChange: (s) => l((a) => __spreadProps(__spreadValues({}, a), { apiKey: s.target.value })), placeholder: t != null && t.hasApiKey ? `\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022${t.apiKeyLast4 || ""}` : "Enter brand Foodelo API key", disabled: !r })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Stored API Key" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: t != null && t.hasApiKey ? `\u2022\u2022\u2022\u2022${t.apiKeyLast4 || ""}` : "Not configured" })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Webhook Secret" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: t != null && t.hasWebhookSecret ? "Configured" : "Not configured" })] })] }), e.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: "Enable Foodelo for this brand" }), e.jsx("p", { className: "text-sm text-gray-500", children: "Webhook processing, reconciliation, and dashboard write-backs only run when the brand account is enabled." })] }), e.jsx(K, { checked: o.isEnabled, onCheckedChange: (s) => l((a) => __spreadProps(__spreadValues({}, a), { isEnabled: s })), disabled: !r })] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(p, { onClick: () => ne.mutate(), disabled: !r || !o.apiKey.trim() && !t, children: [ne.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(xe, { className: "mr-2 h-4 w-4" }), "Save Account"] }), e.jsxs(p, { variant: "outline", onClick: () => V.mutate(), disabled: !(t != null && t.hasApiKey) || V.isPending, children: [V.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(ke, { className: "mr-2 h-4 w-4" }), "Test Connection"] }), e.jsxs(p, { variant: "outline", onClick: () => B.mutate(), disabled: !(t != null && t.hasApiKey) || B.isPending, children: [B.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(ge, { className: "mr-2 h-4 w-4" }), "Setup Webhook"] })] }), e.jsxs("div", { className: "grid gap-4 md:grid-cols-2 xl:grid-cols-4", children: [e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Last Verified" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: v(t == null ? void 0 : t.lastVerifiedAt) })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Last Webhook" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: v(t == null ? void 0 : t.lastInboundEventAt) })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Last Reconcile" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: v(t == null ? void 0 : t.lastReconciledAt) })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Account Health" }), e.jsx("div", { className: "mt-1", children: e.jsx(T, { variant: t != null && t.lastError ? "destructive" : "secondary", children: t != null && t.lastError ? "Error" : "Healthy" }) })] })] }), ((t == null ? void 0 : t.lastError) || w) && e.jsxs("div", { className: "space-y-2 rounded-lg border p-4", children: [w && e.jsxs("div", { className: "flex items-center justify-between gap-4", children: [e.jsxs("div", { className: "min-w-0", children: [e.jsx("p", { className: "font-medium text-gray-900", children: "Webhook URL" }), e.jsx("p", { className: "truncate text-sm text-gray-600", children: w })] }), e.jsxs(p, { variant: "outline", onClick: ve, children: [e.jsx(Te, { className: "mr-2 h-4 w-4" }), "Copy"] })] }), (t == null ? void 0 : t.lastError) && e.jsxs("div", { className: "text-sm text-red-600", children: ["Last error: ", t.lastError] })] })] })] }), e.jsxs(Z, { children: [e.jsxs(G, { children: [e.jsxs(J, { className: "flex items-center gap-2", children: [e.jsx(ge, { className: "h-5 w-5" }), "Webhook Health"] }), e.jsx(X, { children: "Foodelo webhook deliveries are acknowledged immediately, then processed asynchronously inside Yum." })] }), e.jsxs(ee, { className: "space-y-4", children: [e.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Processed" }), e.jsx("div", { className: "mt-1 text-2xl font-semibold", children: Ne })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Pending" }), e.jsx("div", { className: "mt-1 text-2xl font-semibold", children: fe })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Failed / Dead Letter" }), e.jsx("div", { className: "mt-1 text-2xl font-semibold", children: z.length })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Latest Event" }), e.jsx("div", { className: "mt-1 text-sm font-medium", children: v((oe = q[0]) == null ? void 0 : oe.created_at) })] })] }), z.length > 0 ? e.jsxs("div", { className: "space-y-3 rounded-lg border border-red-200 bg-red-50 p-4", children: [e.jsx("div", { className: "text-sm font-medium text-red-900", children: "Failed Foodelo webhook events" }), z.slice(0, 5).map((s) => e.jsxs("div", { className: "flex flex-col gap-2 rounded-md border border-red-200 bg-white p-3 md:flex-row md:items-center md:justify-between", children: [e.jsxs("div", { className: "min-w-0", children: [e.jsx("div", { className: "text-sm font-medium text-gray-900", children: s.event_type }), e.jsxs("div", { className: "text-xs text-gray-500", children: [s.event_id, " \u2022 ", s.status, " \u2022 retries ", s.retry_count, " \u2022 deliveries ", s.delivery_count] }), s.error_message && e.jsx("div", { className: "mt-1 text-xs text-red-700", children: s.error_message })] }), e.jsxs(p, { variant: "outline", onClick: () => Q.mutate(s.event_id), disabled: Q.isPending, children: [Q.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Requeue"] })] }, s.event_id))] }) : e.jsx("div", { className: "rounded-md border border-dashed p-4 text-sm text-gray-500", children: "No failed Foodelo webhook events in the latest sample window." })] })] }), e.jsxs(Z, { children: [e.jsxs(G, { children: [e.jsxs(J, { className: "flex items-center gap-2", children: [e.jsx(Ke, { className: "h-5 w-5" }), "Vendor Mapping"] }), e.jsx(X, { children: "Fetch Foodelo branches, map each one to a Yum outlet, then save the brand mapping set. Branch-state sync controls live alongside each mapping." })] }), e.jsxs(ee, { className: "space-y-4", children: [e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(p, { variant: "outline", onClick: () => {
    j(true), A.invalidateQueries({ queryKey: ["/api/admin/foodelo/vendors"] });
  }, disabled: !(t != null && t.hasApiKey) || ie, children: [ie ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(qe, { className: "mr-2 h-4 w-4" }), "Fetch Vendors"] }), e.jsxs(p, { onClick: () => U.mutate(), disabled: U.isPending || H.length === 0, children: [U.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(xe, { className: "mr-2 h-4 w-4" }), "Save Mappings"] }), e.jsxs(p, { variant: "outline", onClick: () => D.mutate(), disabled: !t || D.isPending, children: [D.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(He, { className: "mr-2 h-4 w-4" }), "Run Reconciliation"] })] }), H.length === 0 ? e.jsx("div", { className: "rounded-md border border-dashed p-6 text-sm text-gray-500", children: "No Foodelo vendors loaded yet. Save the account, test the connection, then fetch vendors." }) : e.jsx("div", { className: "space-y-4", children: H.map((s) => {
    var _a, _b, _c, _d;
    var n, d, y, S, F, C, P, le, de, ce, me, pe, ue;
    const a = ae[s.id] || { outletId: s.mapping ? String(s.mapping.outletId) : "", isEnabled: (_a = (n = s.mapping) == null ? void 0 : n.isEnabled) != null ? _a : true, isOpen: (_c = (_b = (d = s.mapping) == null ? void 0 : d.isOpen) != null ? _b : s.open) != null ? _c : null, pickupEnabled: (_d = (y = s.mapping) == null ? void 0 : y.pickupEnabled) != null ? _d : null, operatingHours: R((S = s.mapping) == null ? void 0 : S.operatingHours), mappingId: (F = s.mapping) == null ? void 0 : F.id };
    return e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h3", { className: "font-medium text-gray-900", children: s.vendorName }), s.vendorType && e.jsx(T, { variant: "outline", children: s.vendorType }), s.branchRole && e.jsx(T, { variant: "outline", children: s.branchRole }), s.accountStatus && e.jsx(T, { variant: "outline", children: s.accountStatus }), e.jsx(T, { variant: a.isEnabled ? "secondary" : "outline", children: a.isEnabled ? "Enabled" : "Disabled" })] }), s.branchName && e.jsxs("div", { className: "text-sm text-gray-600", children: ["Branch: ", s.branchName] }), e.jsxs("div", { className: "text-xs text-gray-500", children: ["Vendor ID: ", s.id] }), e.jsxs("div", { className: "text-xs text-gray-500", children: ["Mapped outlet: ", ((C = s.mapping) == null ? void 0 : C.outletName) || "Not mapped"] }), e.jsxs("div", { className: "text-xs text-gray-500", children: ["Hours: ", Re(a.operatingHours)] }), ((P = s.mapping) == null ? void 0 : P.lastSyncAt) && e.jsxs("div", { className: "text-xs text-gray-500", children: ["Last order sync: ", v(s.mapping.lastSyncAt)] }), ((le = s.mapping) == null ? void 0 : le.lastStateSyncAt) && e.jsxs("div", { className: "text-xs text-gray-500", children: ["Last state sync: ", v(s.mapping.lastStateSyncAt)] }), ((de = s.mapping) == null ? void 0 : de.lastStateError) && e.jsxs("div", { className: "text-xs text-red-600", children: ["Last state error: ", s.mapping.lastStateError] })] }), e.jsxs("div", { className: "grid w-full gap-3 lg:w-[360px]", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(he, { children: "Yum Outlet" }), e.jsxs(Fe, { value: a.outletId, onValueChange: (m) => E(s.id, { outletId: m }), children: [e.jsx(Ce, { children: e.jsx(Pe, { placeholder: "Select outlet" }) }), e.jsx(Oe, { children: ye.map((m) => e.jsx(Ie, { value: String(m.id), children: m.name }, m.id)) })] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3 rounded-md border p-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("div", { children: [e.jsx("div", { className: "text-sm font-medium", children: "Enable" }), e.jsx("div", { className: "text-xs text-gray-500", children: "Webhook + reconcile" })] }), e.jsx(K, { checked: a.isEnabled, onCheckedChange: (m) => E(s.id, { isEnabled: m }) })] }), e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("div", { children: [e.jsx("div", { className: "text-sm font-medium", children: "Open" }), e.jsx("div", { className: "text-xs text-gray-500", children: "Branch state" })] }), e.jsx(K, { checked: !!a.isOpen, onCheckedChange: (m) => E(s.id, { isOpen: m }) })] }), e.jsxs("div", { className: "flex items-center justify-between gap-2 col-span-2", children: [e.jsxs("div", { children: [e.jsx("div", { className: "text-sm font-medium", children: "Pickup Enabled" }), e.jsx("div", { className: "text-xs text-gray-500", children: "Foodelo pickup toggle" })] }), e.jsx(K, { checked: !!a.pickupEnabled, onCheckedChange: (m) => E(s.id, { pickupEnabled: m }) })] })] })] })] }), e.jsxs("div", { className: "mt-4 space-y-3", children: [e.jsx(Le, { value: a.operatingHours, onChange: (m) => E(s.id, { operatingHours: m }) }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [((ce = s.mapping) == null ? void 0 : ce.id) && e.jsxs(p, { variant: "outline", onClick: () => Y.mutate(s.mapping.id), disabled: Y.isPending, children: [Y.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Pull State"] }), ((me = s.mapping) == null ? void 0 : me.id) && e.jsxs(p, { variant: "outline", onClick: () => k.mutate({ mappingId: s.mapping.id, payload: { isOpen: a.isOpen, pickupEnabled: a.pickupEnabled, operatingHours: a.operatingHours } }), disabled: k.isPending, children: [k.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Push State"] }), ((pe = s.mapping) == null ? void 0 : pe.id) && e.jsx(p, { variant: "outline", onClick: () => k.mutate({ mappingId: s.mapping.id, payload: { useOutletHours: true } }), disabled: k.isPending, children: "Use Outlet Hours" }), ((ue = s.mapping) == null ? void 0 : ue.id) && e.jsxs(p, { variant: "destructive", onClick: () => {
      window.confirm(`Delete Foodelo mapping for ${s.vendorName}?`) && $.mutate(s.mapping.id);
    }, disabled: $.isPending, children: [$.isPending ? e.jsx(u, { className: "mr-2 h-4 w-4 animate-spin" }) : e.jsx(Me, { className: "mr-2 h-4 w-4" }), "Delete Mapping"] })] })] })] }, s.id);
  }) })] })] })] }) });
}
export { Ss as default };
