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
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { c as se, r as x, b as g, j as s, E as b, H as w, I as f, Z as y, F as v, B as i, W as d, i as k, a6 as O } from "./index-DOfu0sXg.js";
import { u as l } from "./useMutation-CVmbONMy.js";
import { u as te, A as re } from "./admin-layout-DH7sAIhq.js";
import { I as A } from "./input-FyV2XACZ.js";
import { L as N } from "./label-B38UEnoM.js";
import { S as ae, a as ne, b as ie, c as oe, d as ce } from "./select-ets7bQkN.js";
import { S as Q } from "./switch-DvySixFh.js";
import { B as H } from "./badge-BAjaXL1S.js";
import { S as de } from "./shield-BJZvWIYM.js";
import { S as le } from "./store-Cr0AuVYD.js";
import { R as m } from "./refresh-cw-C5dId60a.js";
import { S as me } from "./save-BZa-ufS1.js";
import { C as he } from "./copy-Dm_kp7Au.js";
import { W as V } from "./webhook-CMu-F_1L.js";
import { T as ue } from "./trash-2-MFuZdLCA.js";
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
const C = (r) => {
  if (!r) return "Never";
  try {
    return new Date(r).toLocaleString();
  } catch (e) {
    return "Never";
  }
};
function ss() {
  var B;
  const { toast: r } = se(), { selectedBrandId: h } = te(), [n, D] = x.useState(null), [p, S] = x.useState(""), [a, o] = x.useState({ outletId: "", merchantReference: "", syncFromDate: "", apiKey: "", isEnabled: false }), { data: E } = g({ queryKey: ["/api/admin/settings/chowdeck"], queryFn: k({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: F = [] } = g({ queryKey: ["/api/admin/outlets-rbac", { brandId: h }], queryFn: k({ on401: "throw" }), enabled: !!h }), { data: u, isLoading: G } = g({ queryKey: ["/api/admin/chowdeck/outlets"], queryFn: k({ on401: "throw" }), staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), { data: I } = g({ queryKey: ["/api/admin/webhooks/events", { source: "chowdeck", limit: 20 }], queryFn: k({ on401: "throw" }), staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), _ = x.useMemo(() => new Set(F.map((e) => e.id)), [F]), P = x.useMemo(() => {
    const e = (u == null ? void 0 : u.integrations) || [];
    return h ? e.filter((t) => _.has(t.outletId)) : e;
  }, [u == null ? void 0 : u.integrations, _, h]), j = (I == null ? void 0 : I.events) || [], Y = j.filter((e) => e.status === "pending" || e.status === "processing").length, R = j.filter((e) => e.status === "failed" || e.status === "dead_letter"), Z = j.filter((e) => e.status === "processed").length, z = ((B = j.find((e) => e.processed_at)) == null ? void 0 : B.processed_at) || P.map((e) => e.lastInboundEventAt).find((e) => !!e) || null, T = () => {
    D(null), o({ outletId: "", merchantReference: "", syncFromDate: "", apiKey: "", isEnabled: false });
  }, c = () => {
    O.invalidateQueries({ queryKey: ["/api/admin/chowdeck/outlets"] }), O.invalidateQueries({ queryKey: ["/api/admin/settings/chowdeck"] }), O.invalidateQueries({ queryKey: ["/api/admin/webhooks/events"] });
  }, K = l({ mutationFn: () => __async(null, null, function* () {
    const e = __spreadValues({ outletId: Number(a.outletId), merchantReference: a.merchantReference.trim(), syncFromDate: a.syncFromDate || null, isEnabled: a.isEnabled }, a.apiKey.trim() ? { apiKey: a.apiKey.trim() } : {}), t = n ? "PUT" : "POST", ee = n ? `/api/admin/chowdeck/outlets/${n}` : "/api/admin/chowdeck/outlets";
    return (yield d(t, ee, e)).json();
  }), onSuccess: (e) => {
    c(), S((e == null ? void 0 : e.webhookUrl) || ""), T(), r({ title: n ? "Chowdeck outlet updated" : "Chowdeck outlet created", description: e != null && e.webhookUrl ? "Webhook URL refreshed. Copy it now if you need to register it in Chowdeck." : "Configuration saved successfully." });
  }, onError: (e) => {
    r({ title: "Failed to save Chowdeck configuration", description: e.message, variant: "destructive" });
  } }), L = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("POST", `/api/admin/chowdeck/outlets/${e}/test`)).json();
  }), onSuccess: () => {
    c(), r({ title: "Credentials verified" });
  }, onError: (e) => {
    r({ title: "Credential test failed", description: e.message, variant: "destructive" });
  } }), U = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("POST", `/api/admin/chowdeck/outlets/${e}/reconcile`)).json();
  }), onSuccess: () => {
    c(), r({ title: "Reconciliation started" });
  }, onError: (e) => {
    r({ title: "Reconciliation failed", description: e.message, variant: "destructive" });
  } }), q = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("POST", `/api/admin/chowdeck/outlets/${e}/regenerate-webhook-token`)).json();
  }), onSuccess: (e) => __async(null, null, function* () {
    c(), S((e == null ? void 0 : e.webhookUrl) || ""), e != null && e.webhookUrl && (yield navigator.clipboard.writeText(e.webhookUrl)), r({ title: "Webhook token regenerated", description: e != null && e.webhookUrl ? "New webhook URL copied to clipboard." : "Token regenerated successfully." });
  }), onError: (e) => {
    r({ title: "Failed to regenerate webhook token", description: e.message, variant: "destructive" });
  } }), W = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("DELETE", `/api/admin/chowdeck/outlets/${e}`)).json();
  }), onSuccess: () => {
    c(), T(), r({ title: "Integration deleted", description: "You can now re-add the outlet." });
  }, onError: (e) => {
    r({ title: "Failed to delete integration", description: e.message, variant: "destructive" });
  } }), $ = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("PUT", "/api/admin/settings/chowdeck", { enabled: e })).json();
  }), onSuccess: () => {
    c(), r({ title: "Chowdeck setting updated" });
  }, onError: (e) => {
    r({ title: "Failed to update Chowdeck setting", description: e.message, variant: "destructive" });
  } }), M = l({ mutationFn: (e) => __async(null, null, function* () {
    return (yield d("POST", `/api/admin/webhooks/events/${encodeURIComponent(e)}/requeue`, { source: "chowdeck", resetRetries: true })).json();
  }), onSuccess: () => {
    c(), r({ title: "Webhook event requeued" });
  }, onError: (e) => {
    r({ title: "Failed to requeue webhook event", description: e.message, variant: "destructive" });
  } }), J = (e) => {
    D(e.id), o({ outletId: String(e.outletId), merchantReference: e.merchantReference, syncFromDate: e.syncFromDate || "", apiKey: "", isEnabled: e.isEnabled }), S("");
  }, X = () => __async(null, null, function* () {
    p && (yield navigator.clipboard.writeText(p), r({ title: "Webhook URL copied" }));
  });
  return s.jsx(re, { currentPage: "chowdeck", children: s.jsxs("div", { className: "space-y-6", children: [s.jsxs("div", { children: [s.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Chowdeck Integration" }), s.jsx("p", { className: "text-gray-600", children: "Configure per-outlet API keys, webhook URLs, and reconciliation for Chowdeck." })] }), s.jsxs(b, { children: [s.jsxs(w, { children: [s.jsxs(f, { className: "flex items-center gap-2", children: [s.jsx(de, { className: "h-5 w-5" }), "Master Switch"] }), s.jsx(y, { children: "Global enablement must be on before any outlet-level Chowdeck config will process orders." })] }), s.jsxs(v, { className: "flex items-center justify-between rounded-lg border p-4", children: [s.jsxs("div", { children: [s.jsx("p", { className: "font-medium", children: "Enable Chowdeck integration" }), s.jsx("p", { className: "text-sm text-gray-500", children: "Stops webhook processing, reconciliation, and dashboard writes when disabled." })] }), s.jsx(Q, { checked: !!(E != null && E.enabled), onCheckedChange: (e) => $.mutate(e), disabled: $.isPending })] })] }), s.jsxs(b, { children: [s.jsxs(w, { children: [s.jsxs(f, { className: "flex items-center gap-2", children: [s.jsx(le, { className: "h-5 w-5" }), "Outlet Configuration"] }), s.jsx(y, { children: "Each outlet uses its own Chowdeck merchant reference and API key. Keys are stored encrypted and never shown again after save." })] }), s.jsxs(v, { className: "space-y-4", children: [!h && s.jsx("div", { className: "rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900", children: "Select a brand from the top navigation before configuring outlet integrations." }), s.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsx(N, { children: "Outlet" }), s.jsxs(ae, { value: a.outletId, onValueChange: (e) => o((t) => __spreadProps(__spreadValues({}, t), { outletId: e })), disabled: !h, children: [s.jsx(ne, { children: s.jsx(ie, { placeholder: "Select outlet" }) }), s.jsx(oe, { children: F.map((e) => s.jsx(ce, { value: String(e.id), children: e.name }, e.id)) })] })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx(N, { children: "Merchant Reference" }), s.jsx(A, { value: a.merchantReference, onChange: (e) => o((t) => __spreadProps(__spreadValues({}, t), { merchantReference: e.target.value })), placeholder: "merchant_ref" })] }), s.jsxs("div", { className: "space-y-2", children: [s.jsx(N, { children: "Sync Orders From" }), s.jsx(A, { type: "date", value: a.syncFromDate, onChange: (e) => o((t) => __spreadProps(__spreadValues({}, t), { syncFromDate: e.target.value })) })] }), s.jsxs("div", { className: "space-y-2 md:col-span-2", children: [s.jsx(N, { children: n ? "API Key (leave blank to keep existing)" : "API Key" }), s.jsx(A, { type: "password", value: a.apiKey, onChange: (e) => o((t) => __spreadProps(__spreadValues({}, t), { apiKey: e.target.value })), placeholder: n ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" : "Enter outlet Chowdeck API key" })] })] }), s.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [s.jsxs("div", { children: [s.jsx("p", { className: "font-medium", children: "Enable this outlet" }), s.jsx("p", { className: "text-sm text-gray-500", children: "This outlet will only process Chowdeck orders when both this toggle and the master switch are enabled." })] }), s.jsx(Q, { checked: a.isEnabled, onCheckedChange: (e) => o((t) => __spreadProps(__spreadValues({}, t), { isEnabled: e })) })] }), s.jsxs("div", { className: "flex flex-wrap gap-2", children: [s.jsxs(i, { onClick: () => K.mutate(), disabled: !a.outletId || !a.merchantReference.trim() || !n && !a.apiKey.trim() || K.isPending, children: [K.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : s.jsx(me, { className: "mr-2 h-4 w-4" }), n ? "Update Outlet" : "Save Outlet"] }), n && s.jsx(i, { variant: "outline", onClick: T, children: "Cancel Edit" })] }), p && s.jsx("div", { className: "rounded-lg border border-blue-200 bg-blue-50 p-4", children: s.jsxs("div", { className: "flex items-center justify-between gap-4", children: [s.jsxs("div", { className: "min-w-0", children: [s.jsx("p", { className: "font-medium text-blue-900", children: "Webhook URL" }), s.jsx("p", { className: "truncate text-sm text-blue-800", children: p })] }), s.jsxs(i, { variant: "outline", onClick: X, children: [s.jsx(he, { className: "mr-2 h-4 w-4" }), "Copy"] })] }) })] })] }), s.jsxs(b, { children: [s.jsxs(w, { children: [s.jsxs(f, { className: "flex items-center gap-2", children: [s.jsx(V, { className: "h-5 w-5" }), "Webhook Health"] }), s.jsx(y, { children: "Chowdeck webhook deliveries are acknowledged immediately and retried in the background when processing fails." })] }), s.jsxs(v, { className: "space-y-4", children: [s.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [s.jsxs("div", { className: "rounded-lg border p-4", children: [s.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Processed" }), s.jsx("div", { className: "mt-1 text-2xl font-semibold", children: Z })] }), s.jsxs("div", { className: "rounded-lg border p-4", children: [s.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Pending" }), s.jsx("div", { className: "mt-1 text-2xl font-semibold", children: Y })] }), s.jsxs("div", { className: "rounded-lg border p-4", children: [s.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Failed / Dead Letter" }), s.jsx("div", { className: "mt-1 text-2xl font-semibold", children: R.length })] }), s.jsxs("div", { className: "rounded-lg border p-4", children: [s.jsx("div", { className: "text-xs uppercase tracking-wide text-gray-500", children: "Last Success" }), s.jsx("div", { className: "mt-1 text-sm font-medium", children: C(z) })] })] }), R.length > 0 ? s.jsxs("div", { className: "space-y-3 rounded-lg border border-red-200 bg-red-50 p-4", children: [s.jsx("div", { className: "text-sm font-medium text-red-900", children: "Failed Chowdeck webhook events" }), R.slice(0, 5).map((e) => s.jsxs("div", { className: "flex flex-col gap-2 rounded-md border border-red-200 bg-white p-3 md:flex-row md:items-center md:justify-between", children: [s.jsxs("div", { className: "min-w-0", children: [s.jsx("div", { className: "text-sm font-medium text-gray-900", children: e.event_type }), s.jsxs("div", { className: "text-xs text-gray-500", children: [e.event_id, " \u2022 ", e.status, " \u2022 retries ", e.retry_count, " \u2022 deliveries ", e.delivery_count] }), e.error_message && s.jsx("div", { className: "mt-1 text-xs text-red-700", children: e.error_message })] }), s.jsxs(i, { variant: "outline", onClick: () => M.mutate(e.event_id), disabled: M.isPending, children: [M.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Requeue"] })] }, e.event_id))] }) : s.jsx("div", { className: "rounded-md border border-dashed p-4 text-sm text-gray-500", children: "No failed Chowdeck webhook events in the latest sample window." })] })] }), s.jsxs(b, { children: [s.jsxs(w, { children: [s.jsxs(f, { className: "flex items-center gap-2", children: [s.jsx(V, { className: "h-5 w-5" }), "Configured Outlets"] }), s.jsx(y, { children: "Review health, verify credentials, regenerate webhook tokens, and trigger reconciliation per outlet." })] }), s.jsx(v, { className: "space-y-4", children: G ? s.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [s.jsx(m, { className: "h-4 w-4 animate-spin" }), "Loading Chowdeck integrations..."] }) : P.length === 0 ? s.jsx("div", { className: "rounded-md border border-dashed p-6 text-sm text-gray-500", children: "No Chowdeck outlet configuration found for the selected brand." }) : P.map((e) => s.jsx("div", { className: "rounded-lg border p-4", children: s.jsxs("div", { className: "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between", children: [s.jsxs("div", { className: "space-y-2", children: [s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx("h3", { className: "font-medium", children: e.outletName || `Outlet #${e.outletId}` }), s.jsx(H, { variant: e.isEnabled ? "secondary" : "outline", children: e.isEnabled ? "Enabled" : "Disabled" }), s.jsx(H, { variant: e.lastError ? "destructive" : "outline", children: e.lastError ? "Unhealthy" : "Healthy" })] }), s.jsxs("div", { className: "text-sm text-gray-600", children: ["Merchant: ", e.merchantReference] }), s.jsxs("div", { className: "text-sm text-gray-600", children: ["Sync from: ", e.syncFromDate || "Not set"] }), s.jsxs("div", { className: "text-sm text-gray-600", children: ["API key: \u2022\u2022\u2022\u2022", e.apiKeyLast4] }), s.jsxs("div", { className: "text-xs text-gray-500", children: ["Last verified: ", C(e.lastVerifiedAt)] }), s.jsxs("div", { className: "text-xs text-gray-500", children: ["Last inbound event: ", C(e.lastInboundEventAt)] }), s.jsxs("div", { className: "text-xs text-gray-500", children: ["Last reconciled: ", C(e.lastReconciledAt)] }), e.lastError && s.jsxs("div", { className: "text-xs text-red-600", children: ["Last error: ", e.lastError] })] }), s.jsxs("div", { className: "flex flex-wrap gap-2", children: [s.jsx(i, { variant: "outline", onClick: () => J(e), children: "Edit" }), s.jsxs(i, { variant: "outline", onClick: () => L.mutate(e.id), disabled: L.isPending, children: [L.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Test"] }), s.jsxs(i, { variant: "outline", onClick: () => U.mutate(e.id), disabled: U.isPending, children: [U.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Reconcile"] }), s.jsxs(i, { variant: "outline", onClick: () => q.mutate(e.id), disabled: q.isPending, children: [q.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : null, "Regenerate Webhook"] }), s.jsxs(i, { variant: "destructive", onClick: () => {
    window.confirm(`Delete integration for ${e.outletName || `Outlet #${e.outletId}`}? This cannot be undone.`) && W.mutate(e.id);
  }, disabled: W.isPending, children: [W.isPending ? s.jsx(m, { className: "mr-2 h-4 w-4 animate-spin" }) : s.jsx(ue, { className: "mr-2 h-4 w-4" }), "Delete"] })] })] }) }, e.id)) })] })] }) });
}
export { ss as default };
