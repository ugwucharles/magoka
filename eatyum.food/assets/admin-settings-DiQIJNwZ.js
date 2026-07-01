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
import { r as x, j as e, a2 as N, w as it, B as g, Y as lt, c as dt, b as _, E as y, H as P, I as C, F as b, Z as E, L as Os, X as ot, a7 as O, W as R, a6 as I, i as V } from "./index-DOfu0sXg.js";
import { u as A } from "./useMutation-CVmbONMy.js";
import { C as Ss } from "./currency-input-Bsi8j9jy.js";
import { F as ks } from "./formatted-number-input-DhzuNqOG.js";
import { I as j } from "./input-FyV2XACZ.js";
import { L as p } from "./label-B38UEnoM.js";
import { S as be } from "./switch-DvySixFh.js";
import { c as ct, A as mt, g as ut } from "./admin-layout-DH7sAIhq.js";
import { D as xt, a as ht, b as pt, c as ft, d as gt } from "./dialog-BUvIuveX.js";
import { B as ne } from "./badge-BAjaXL1S.js";
import { P as vt } from "./progress-yPUB44od.js";
import { C as jt, a as Nt, b as wt } from "./collapsible-BXfmK0ZU.js";
import { C as yt } from "./chevron-down-DegxUQDE.js";
import { C as Pt } from "./chevron-right-DkUlsPHD.js";
import { S as Us } from "./shield-BJZvWIYM.js";
import { L as Ct } from "./lock-ABGMYV1t.js";
import { T as Es } from "./trending-up-bEYf6wvk.js";
import { G as bt } from "./gift-C_SZrOe8.js";
import { W as Fs } from "./wallet-e6BSu-fo.js";
import { C as Oe } from "./copy-Dm_kp7Au.js";
import { S as Is } from "./shopping-bag-8aLpcCGk.js";
import { E as As } from "./external-link-CR-HDEeC.js";
import { P as Ot } from "./plus-xl2HqeIg.js";
import { A as Ts } from "./archive-D-BZa83x.js";
import "./index-CxKYTSZE.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
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
import "./target-B9hXFhRn.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-left-Cnh0-uPi.js";
import "./index-4KTxcrAY.js";
const St = ["brands", "outlets", "sales_channels", "categories", "products", "options", "addons"], ae = /* @__PURE__ */ new Set(["queued", "running"]), Ds = { queued: "Queued", running: "Running", completed: "Completed", completed_with_errors: "Completed With Errors", failed: "Failed", pending: "Pending" }, Ls = { queued: "secondary", running: "default", completed: "default", completed_with_errors: "secondary", failed: "destructive", pending: "outline" }, Se = (c) => {
  if (!c) return "Not available";
  const n = new Date(c);
  return Number.isNaN(n.getTime()) ? c : n.toLocaleString();
}, kt = (c) => {
  if (!c || c < 0) return "In progress";
  if (c < 1e3) return `${c} ms`;
  const n = Math.round(c / 1e3), t = Math.floor(n / 60), h = n % 60;
  return t > 0 ? `${t}m ${h}s` : `${h}s`;
}, Ut = (c) => {
  const n = [c.message];
  if (c.responseBody) {
    const t = typeof c.responseBody == "string" ? c.responseBody : JSON.stringify(c.responseBody);
    t && t.length > 0 && t.length <= 150 && n.push(t);
  }
  return n.join(" \u2014 ");
}, ke = (c, n, t) => e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("p", { className: "text-sm font-medium", children: c }), e.jsx(ne, { variant: "outline", children: n.length })] }), n.length === 0 ? e.jsx("div", { className: "rounded-md border border-dashed px-3 py-2 text-xs text-muted-foreground", children: t }) : e.jsx("div", { className: "max-h-40 overflow-auto rounded-md border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "sticky top-0 bg-muted", children: e.jsxs("tr", { children: [e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "ID" }), e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Name" }), e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Reason" })] }) }), e.jsx("tbody", { children: n.map((h, F) => {
  var _a, _b, _c;
  return e.jsxs("tr", { className: "border-t align-top", children: [e.jsx("td", { className: "px-3 py-2", children: (_a = h.id) != null ? _a : "-" }), e.jsx("td", { className: "px-3 py-2", children: h.name || "-" }), e.jsx("td", { className: "px-3 py-2", children: h.reason || "-" })] }, `${c}-${String((_c = (_b = h.id) != null ? _b : h.name) != null ? _c : F)}-${F}`);
}) })] }) })] }), Et = (c) => e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("p", { className: "text-sm font-medium", children: "Failed Items" }), e.jsx(ne, { variant: c.length > 0 ? "destructive" : "outline", children: c.length })] }), c.length === 0 ? e.jsx("div", { className: "rounded-md border border-dashed px-3 py-2 text-xs text-muted-foreground", children: "No failed items recorded." }) : e.jsx("div", { className: "max-h-48 overflow-auto rounded-md border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "sticky top-0 bg-muted", children: e.jsxs("tr", { children: [e.jsx("th", { className: "px-2 py-1.5 text-left font-medium w-16", children: "ID" }), e.jsx("th", { className: "px-2 py-1.5 text-left font-medium", children: "Error Details" }), e.jsx("th", { className: "px-2 py-1.5 text-left font-medium w-12", children: "Code" })] }) }), e.jsx("tbody", { children: c.map((n, t) => {
  var _a, _b, _c, _d, _e;
  const h = Ut(n);
  return e.jsxs("tr", { className: "border-t align-top", children: [e.jsx("td", { className: "px-2 py-1.5 font-mono text-[10px]", children: (_b = (_a = n.id) != null ? _a : n.index) != null ? _b : "-" }), e.jsx("td", { className: "px-2 py-1.5 max-w-md", title: h, children: e.jsx("span", { className: "line-clamp-2 break-words", children: h }) }), e.jsx("td", { className: "px-2 py-1.5", children: (_c = n.statusCode) != null ? _c : "-" })] }, `error-${String((_e = (_d = n.id) != null ? _d : n.index) != null ? _e : t)}-${t}`);
}) })] }) })] });
function Ft({ open: c, onOpenChange: n, job: t, isStarting: h, startErrorMessage: F }) {
  var _a, _b;
  var G;
  const [ie, l] = x.useState(/* @__PURE__ */ new Set()), M = h || (t ? ae.has(t.status) : false), le = (d) => {
    l((o) => {
      const m = new Set(o);
      return m.has(d) ? m.delete(d) : m.add(d), m;
    });
  }, K = St.filter((d) => (t == null ? void 0 : t.scope) === "all" ? true : (t == null ? void 0 : t.scope) === d), S = K.reduce((d, o) => {
    var q;
    const m = (q = t == null ? void 0 : t.entities[o]) == null ? void 0 : q.stats;
    return m && (d.total += m.total, d.sent += m.sent, d.skipped += m.duplicatesSkipped, d.failed += m.failed, d.deleted += m.deleted), d;
  }, { total: 0, sent: 0, skipped: 0, failed: 0, deleted: 0 }), J = h ? 5 : Math.max(0, Math.min(100, (_a = t == null ? void 0 : t.progressPercent) != null ? _a : 0)), Y = t == null ? void 0 : t.completedAt, Z = (_b = (G = t == null ? void 0 : t.summary) == null ? void 0 : G.durationMs) != null ? _b : t != null && t.startedAt && Y ? new Date(Y).getTime() - new Date(t.startedAt).getTime() : void 0;
  return e.jsx(xt, { open: c, onOpenChange: (d) => {
    M && !d || n(d);
  }, children: e.jsxs(ht, { className: "max-h-[90vh] max-w-4xl overflow-hidden p-0", onEscapeKeyDown: (d) => {
    M && d.preventDefault();
  }, onPointerDownOutside: (d) => {
    M && d.preventDefault();
  }, children: [e.jsx("div", { className: "border-b px-5 py-3", children: e.jsxs(pt, { children: [e.jsx(ft, { className: "text-base", children: "OrderPro Catalog Sync" }), e.jsx(gt, { className: "text-xs", children: "Sync brands, outlets, sales channels, categories, products, options, and add-ons." })] }) }), e.jsx(ct, { className: "max-h-[calc(92vh-5rem)]", children: e.jsxs("div", { className: "space-y-6 px-6 py-5", children: [e.jsxs("div", { className: "space-y-3 rounded-xl border bg-muted/30 p-4", children: [e.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ne, { variant: Ls[(t == null ? void 0 : t.status) || (h ? "running" : "pending")] || "outline", children: Ds[(t == null ? void 0 : t.status) || (h ? "running" : "pending")] || "Pending" }), t != null && t.jobId ? e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["Job ID: ", t.jobId] }) : null] }), e.jsx("p", { className: "text-sm font-medium", children: F ? "Failed to start OrderPro sync" : (t == null ? void 0 : t.message) || (h ? "Starting OrderPro catalog sync..." : "Ready to sync") }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Started: ", t != null && t.startedAt ? Se(t.startedAt) : "Waiting", " ", Y ? `\u2022 Completed: ${Se(Y)}` : ""] })] }), (h || M) && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [e.jsx(N, { className: "h-4 w-4 animate-spin" }), "Sync in progress"] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [e.jsx("span", { children: t != null && t.currentEntity ? `Current: ${t.currentEntity}` : "Preparing sync" }), e.jsxs("span", { children: [J, "%"] })] }), e.jsx(vt, { value: J, className: "h-2" })] }), F ? e.jsx("div", { className: "rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700", children: F }) : null] }), e.jsx("div", { className: "grid gap-3 md:grid-cols-5", children: [{ label: "Total", value: S.total }, { label: "Synced", value: S.sent }, { label: "Skipped", value: S.skipped }, { label: "Failed", value: S.failed }, { label: "Deleted", value: S.deleted }].map((d) => e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: d.label }), e.jsx("p", { className: "mt-2 text-2xl font-semibold", children: d.value })] }, d.label)) }), t != null && t.summary ? e.jsxs("div", { className: "grid gap-3 md:grid-cols-3", children: [e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Duration" }), e.jsx("p", { className: "mt-2 text-sm font-medium", children: kt(Z) })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Mismatches" }), e.jsx("p", { className: "mt-2 text-sm font-medium", children: t.summary.totalMismatches })] }), e.jsxs("div", { className: "rounded-lg border p-4", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Mode" }), e.jsxs("p", { className: "mt-2 text-sm font-medium", children: [t.mode, " ", t.dryRun ? "\u2022 Dry run" : ""] })] })] }) : null, e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-base font-semibold", children: "Entity Progress" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "Per-entity sync counts, skipped duplicates, failures, and reconciliation status." })] }), K.map((d) => {
    const o = t == null ? void 0 : t.entities[d], m = (o == null ? void 0 : o.stats) || { total: 0, sent: 0, failed: 0, duplicatesSkipped: 0, deleted: 0, errors: [], syncedItems: [], skippedItems: [], deletedItems: [] }, q = ie.has(d), w = m.syncedItems.length > 0 || m.skippedItems.length > 0 || m.errors.length > 0 || m.deletedItems.length > 0;
    return e.jsx(jt, { open: q, onOpenChange: () => le(d), children: e.jsxs("div", { className: "rounded-xl border", children: [e.jsx(Nt, { asChild: true, children: e.jsxs("div", { className: "flex cursor-pointer items-start justify-between gap-3 p-3 hover:bg-muted/30", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [q ? e.jsx(yt, { className: "h-4 w-4 text-muted-foreground" }) : e.jsx(Pt, { className: "h-4 w-4 text-muted-foreground" }), e.jsxs("div", { className: "space-y-0.5", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("h4", { className: "text-sm font-semibold", children: (o == null ? void 0 : o.label) || d }), e.jsx(ne, { variant: Ls[(o == null ? void 0 : o.status) || "pending"] || "outline", className: "text-[10px] px-1.5 py-0", children: Ds[(o == null ? void 0 : o.status) || "pending"] || "Pending" })] }), e.jsx("p", { className: "text-xs text-muted-foreground line-clamp-1", children: (o == null ? void 0 : o.message) || "Waiting to start" })] })] }), e.jsxs("div", { className: "flex items-center gap-1.5 text-xs", children: [e.jsxs("span", { className: "rounded bg-muted px-1.5 py-0.5", children: [m.total, " total"] }), e.jsxs("span", { className: "rounded bg-emerald-100 text-emerald-700 px-1.5 py-0.5", children: [m.sent, " synced"] }), m.failed > 0 && e.jsxs("span", { className: "rounded bg-red-100 text-red-700 px-1.5 py-0.5", children: [m.failed, " failed"] })] })] }) }), e.jsx(wt, { children: e.jsxs("div", { className: "border-t px-3 pb-3 pt-2 space-y-3", children: [o != null && o.reconciliation ? e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["Reconciliation:", " ", o.reconciliation.skipped ? `Skipped (${o.reconciliation.reason || "missing fetch endpoint"})` : o.reconciliation.isConsistent ? "Consistent" : `${o.reconciliation.fieldMismatches.length} mismatch(es), ${o.reconciliation.missingOnOrderPro.length} missing, ${o.reconciliation.duplicatesOnOrderPro.length} duplicate(s)`] }) : null, w ? e.jsxs("div", { className: "grid gap-3 xl:grid-cols-2", children: [ke("Synced Items", m.syncedItems, "No synced items recorded yet."), ke("Skipped Items", m.skippedItems, "No skipped duplicates recorded."), Et(m.errors), ke("Deleted Orphans", m.deletedItems, "No orphaned OrderPro items were deleted.")] }) : e.jsx("p", { className: "text-xs text-muted-foreground italic", children: "No detailed records yet." })] }) })] }) }, d);
  })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-base font-semibold", children: "Activity Log" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "Recent progress events reported by the server while the sync is running." })] }), e.jsx("div", { className: "max-h-64 overflow-auto rounded-xl border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "sticky top-0 bg-muted", children: e.jsxs("tr", { children: [e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Time" }), e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Entity" }), e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Level" }), e.jsx("th", { className: "px-3 py-2 text-left font-medium", children: "Message" })] }) }), e.jsx("tbody", { children: ((t == null ? void 0 : t.recentEvents) || []).length === 0 ? e.jsx("tr", { children: e.jsx("td", { colSpan: 4, className: "px-3 py-4 text-center text-muted-foreground", children: "No progress events yet." }) }) : ((t == null ? void 0 : t.recentEvents) || []).map((d, o) => e.jsxs("tr", { className: "border-t align-top", children: [e.jsx("td", { className: "px-3 py-2 whitespace-nowrap", children: Se(d.timestamp) }), e.jsx("td", { className: "px-3 py-2", children: d.entityType || "-" }), e.jsx("td", { className: "px-3 py-2", children: e.jsx("span", { className: it("font-medium", { "text-red-600": d.level === "error", "text-amber-600": d.level === "warning", "text-emerald-600": d.level === "success", "text-muted-foreground": d.level === "info" }), children: d.level }) }), e.jsx("td", { className: "px-3 py-2", children: d.message })] }, `${d.timestamp}-${o}`)) })] }) })] }), M ? null : e.jsx("div", { className: "flex justify-end border-t pt-4", children: e.jsx(g, { onClick: () => n(false), children: "Close" }) })] }) })] }) });
}
const It = "/api/webhooks/paystack", At = "/api/webhooks/paystack/payouts", Tt = "/api/webhooks/paystack-payout";
function Ur() {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s2;
  var ze, Qe, Je, Ge, Xe, Ze, We, es, ss, ts, rs, as, ns, is, ls, ds, os, cs, ms, us, xs, hs, ps, fs, gs, vs, js, Ns, ws, ys, Ps, Cs;
  const { admin: c } = lt(), { toast: n } = dt(), [t, h] = x.useState({ currentPassword: "", newPassword: "", confirmPassword: "" }), [F, ie] = x.useState(""), [l, M] = x.useState(null), [le, K] = x.useState(false), [S, J] = x.useState(null), [Y, Z] = x.useState(null), [G, d] = x.useState(null), { data: o, refetch: m, isLoading: q } = _({ queryKey: ["/api/popular-items-sort-by"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: w, refetch: _s, isLoading: Rs } = _({ queryKey: ["/api/homepage-layout"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: k, refetch: Ms, isLoading: qs } = _({ queryKey: ["/api/referral-reward-amount"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), [Ue, de] = x.useState(""), [Ee, W] = x.useState(""), [Fe, oe] = x.useState(""), [Ie, ce] = x.useState(""), [Ae, me] = x.useState(""), [Te, De] = x.useState(false), [Le, _e] = x.useState(false), { data: T, refetch: Bs, isLoading: Re } = _({ queryKey: ["/api/admin/settings/payout-cap"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: ue, refetch: $s, isLoading: Vs } = _({ queryKey: ["/api/admin/settings/chowdeck"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: r, refetch: Ks, isLoading: Ys } = _({ queryKey: ["/api/admin/settings/paystack-webhook"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), D = (s) => String(s != null ? s : "").trim(), H = (s, a) => D(s) || D(a), xe = ({ draftValue: s, overrideValue: a, effectiveValue: i }) => {
    const u = D(s), f = D(a), re = D(i);
    return u === f ? u : !u || !f && u === re ? "" : u;
  }, L = (r == null ? void 0 : r.publicBaseUrl) || ((ze = r == null ? void 0 : r.defaults) == null ? void 0 : ze.publicBaseUrl) || "", B = (r == null ? void 0 : r.liveWebhookUrl) || ((Qe = r == null ? void 0 : r.defaults) == null ? void 0 : Qe.liveWebhookUrl) || "", ee = (r == null ? void 0 : r.forwardUrl) || ((Je = r == null ? void 0 : r.defaults) == null ? void 0 : Je.forwardUrl) || "", he = (r == null ? void 0 : r.payoutAliasUrl) || (L ? `${L}${At}` : ""), pe = (r == null ? void 0 : r.legacyPayoutAliasUrl) || (L ? `${L}${Tt}` : ""), Me = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/settings/chowdeck", { enabled: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update Chowdeck settings");
    }
    return a.json();
  }), onSuccess: () => {
    $s(), I.invalidateQueries({ queryKey: ["/api/admin/chowdeck/outlets"] }), n({ title: "Chowdeck setting updated" });
  }, onError: (s) => {
    n({ title: "Failed to update Chowdeck setting", description: O(s), variant: "destructive" });
  } }), fe = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/settings/paystack-webhook", s);
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update Paystack webhook settings");
    }
    return a.json();
  }), onSuccess: (s) => {
    var a, i, u, f, re, bs;
    oe(H((a = s == null ? void 0 : s.config) == null ? void 0 : a.publicBaseUrlOverride, (s == null ? void 0 : s.publicBaseUrl) || ((i = s == null ? void 0 : s.defaults) == null ? void 0 : i.publicBaseUrl))), ce(H((u = s == null ? void 0 : s.config) == null ? void 0 : u.liveWebhookUrlOverride, (s == null ? void 0 : s.liveWebhookUrl) || ((f = s == null ? void 0 : s.defaults) == null ? void 0 : f.liveWebhookUrl))), me(H((re = s == null ? void 0 : s.config) == null ? void 0 : re.forwardUrlOverride, (s == null ? void 0 : s.forwardUrl) || ((bs = s == null ? void 0 : s.defaults) == null ? void 0 : bs.forwardUrl))), Ks(), I.invalidateQueries({ queryKey: ["/api/admin/settings/paystack-webhook"] }), n({ title: "Paystack webhook settings updated" });
  }, onError: (s) => {
    n({ title: "Failed to update Paystack webhook settings", description: O(s), variant: "destructive" });
  } });
  x.useEffect(() => {
    o != null && o.sortBy && De(o.sortBy === "sales");
  }, [o == null ? void 0 : o.sortBy]), x.useEffect(() => {
    typeof (k == null ? void 0 : k.amountInNaira) == "number" && de(String(k.amountInNaira));
  }, [k == null ? void 0 : k.amountInNaira]), x.useEffect(() => {
    w != null && w.layout && _e(w.layout === "vertical_list");
  }, [w == null ? void 0 : w.layout]), x.useEffect(() => {
    typeof (T == null ? void 0 : T.valueNaira) == "number" ? W(String(T.valueNaira)) : T === null && W("");
  }, [T]), x.useEffect(() => {
    var s, a, i;
    oe(H((s = r == null ? void 0 : r.config) == null ? void 0 : s.publicBaseUrlOverride, L)), ce(H((a = r == null ? void 0 : r.config) == null ? void 0 : a.liveWebhookUrlOverride, B)), me(H((i = r == null ? void 0 : r.config) == null ? void 0 : i.forwardUrlOverride, ee));
  }, [(Ge = r == null ? void 0 : r.config) == null ? void 0 : Ge.publicBaseUrlOverride, (Xe = r == null ? void 0 : r.config) == null ? void 0 : Xe.liveWebhookUrlOverride, (Ze = r == null ? void 0 : r.config) == null ? void 0 : Ze.forwardUrlOverride, L, B, ee]);
  const { data: U, refetch: Hs, isLoading: zs } = _({ queryKey: ["/api/admin/settings/sales-channels"], queryFn: V({ on401: "throw" }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), [$, z] = x.useState([]), [ge, qe] = x.useState(""), [ve, Be] = x.useState(""), [$e, Ve] = x.useState("0"), X = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/settings/sales-channels", { channels: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update sales channels");
    }
    return a.json();
  }), onSuccess: () => {
    Hs(), I.invalidateQueries({ queryKey: ["/api/sales-channels"] }), n({ title: "Sales channels updated" });
  }, onError: (s) => {
    n({ title: "Error", description: O(s), variant: "destructive" });
  } });
  x.useEffect(() => {
    U != null && U.channels && z(U.channels.map((s) => __spreadProps(__spreadValues({}, s), { defaultCommissionRate: Number(s.defaultCommissionRate || 0) })));
  }, [U == null ? void 0 : U.channels]);
  const Ke = () => {
    const s = ge.trim().toLowerCase().replace(/\s+/g, "_"), a = ve.trim(), i = Number.parseFloat($e);
    if (!s || !a) {
      n({ title: "Both value and label are required", variant: "destructive" });
      return;
    }
    if (!Number.isFinite(i) || i < 0 || i > 100) {
      n({ title: "Commission must be between 0 and 100", variant: "destructive" });
      return;
    }
    const u = $;
    if (u.some((f) => f.value === s)) {
      n({ title: "Channel already exists", variant: "destructive" });
      return;
    }
    z([...u, { value: s, label: a, defaultCommissionRate: Math.round(i * 100) / 100 }]), qe(""), Be(""), Ve("0");
  }, Qs = (s) => {
    const i = $.filter((u) => u.value !== s);
    if (i.length === 0) {
      n({ title: "At least one channel is required", variant: "destructive" });
      return;
    }
    z(i);
  }, Js = (s, a) => {
    z((i) => i.map((u) => {
      if (u.value !== s) return u;
      const f = Number.parseFloat(a);
      return __spreadProps(__spreadValues({}, u), { defaultCommissionRate: Number.isFinite(f) ? Math.max(0, Math.min(100, Math.round(f * 100) / 100)) : 0 });
    }));
  }, Gs = () => {
    if ($.length === 0) {
      n({ title: "At least one channel is required", variant: "destructive" });
      return;
    }
    const s = $.map((i) => ({ value: i.value.trim().toLowerCase().replace(/\s+/g, "_"), label: i.label.trim(), defaultCommissionRate: Math.max(0, Math.min(100, Math.round(Number(i.defaultCommissionRate || 0) * 100) / 100)) })), a = s.map((i) => i.value);
    if (new Set(a).size !== a.length) {
      n({ title: "Duplicate channel values are not allowed", variant: "destructive" });
      return;
    }
    X.mutate(s);
  }, Xs = JSON.stringify($) !== JSON.stringify((U == null ? void 0 : U.channels) || []), je = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/auth/change-password", s);
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to change password");
    }
    return a.json();
  }), onSuccess: () => {
    n({ title: "Password changed", description: "Your password has been updated successfully" }), h({ currentPassword: "", newPassword: "", confirmPassword: "" });
  }, onError: (s) => {
    n({ title: "Failed to change password", description: O(s), variant: "destructive" });
  } }), Ne = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/popular-items-sort-by", { sortBy: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update sorting preference");
    }
    return a.json();
  }), onSuccess: (s) => {
    n({ title: "Settings updated", description: "Popular items sorting preference has been updated" }), De(s.sortBy === "sales"), I.invalidateQueries({ queryKey: ["/api/popular-items-sort-by"] }), m();
  }, onError: (s) => {
    n({ title: "Failed to update settings", description: O(s), variant: "destructive" });
  } }), Zs = (s) => {
    const a = s ? "sales" : "sort_order";
    Ne.mutate(a);
  }, we = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/homepage-layout", { layout: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update homepage layout");
    }
    return a.json();
  }), onSuccess: (s) => {
    n({ title: "Settings updated", description: "Homepage layout preference has been updated" }), _e(s.layout === "vertical_list"), I.invalidateQueries({ queryKey: ["/api/homepage-layout"] }), I.refetchQueries({ queryKey: ["/api/homepage-layout"] }), _s();
  }, onError: (s) => {
    n({ title: "Failed to update settings", description: O(s), variant: "destructive" });
  } }), ye = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/referral-reward-amount", { amountInNaira: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update referral reward amount");
    }
    return a.json();
  }), onSuccess: (s) => {
    n({ title: "Settings updated", description: "Referral reward amount has been updated" }), de(String(s.amountInNaira)), I.invalidateQueries({ queryKey: ["/api/referral-reward-amount"] }), Ms();
  }, onError: (s) => {
    n({ title: "Failed to update referral reward", description: O(s), variant: "destructive" });
  } }), Ws = () => {
    const s = Number(Ue.replace(/,/g, ""));
    if (!Number.isFinite(s) || s <= 0) {
      n({ title: "Invalid amount", description: "Please enter a positive number (\u20A6).", variant: "destructive" });
      return;
    }
    ye.mutate(Math.round(s));
  }, et = (s) => {
    const a = s ? "vertical_list" : "categories";
    we.mutate(a);
  }, Pe = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = yield R("PUT", "/api/admin/settings/payout-cap", { valueNaira: s });
    if (!a.ok) {
      const i = yield a.json();
      throw new Error(i.message || "Failed to update payout cap");
    }
    return a.json();
  }), onSuccess: (s) => {
    n({ title: "Settings updated", description: "Payout cap has been updated" }), W(String(s.valueNaira)), I.invalidateQueries({ queryKey: ["/api/admin/settings/payout-cap"] }), Bs();
  }, onError: (s) => {
    n({ title: "Failed to update payout cap", description: O(s), variant: "destructive" });
  } }), st = () => {
    const s = Number(Ee.replace(/,/g, ""));
    if (!Number.isFinite(s) || s < 0) {
      n({ title: "Invalid amount", description: "Enter a valid amount in naira (0 or more).", variant: "destructive" });
      return;
    }
    Pe.mutate(s);
  }, Ce = (s, a) => __async(null, null, function* () {
    if (s) try {
      yield navigator.clipboard.writeText(s), n({ title: "Copied!", description: `${a} copied to clipboard` });
    } catch (i) {
      n({ title: "Failed to copy value", description: O(i), variant: "destructive" });
    }
  }), se = { publicBaseUrl: xe({ draftValue: Fe, overrideValue: (We = r == null ? void 0 : r.config) == null ? void 0 : We.publicBaseUrlOverride, effectiveValue: L }), liveWebhookUrl: xe({ draftValue: Ie, overrideValue: (es = r == null ? void 0 : r.config) == null ? void 0 : es.liveWebhookUrlOverride, effectiveValue: B }), forwardUrl: xe({ draftValue: Ae, overrideValue: (ss = r == null ? void 0 : r.config) == null ? void 0 : ss.forwardUrlOverride, effectiveValue: ee }) }, tt = () => {
    fe.mutate(se);
  }, rt = se.publicBaseUrl !== D((ts = r == null ? void 0 : r.config) == null ? void 0 : ts.publicBaseUrlOverride) || se.liveWebhookUrl !== D((rs = r == null ? void 0 : r.config) == null ? void 0 : rs.liveWebhookUrlOverride) || se.forwardUrl !== D((as = r == null ? void 0 : r.config) == null ? void 0 : as.forwardUrlOverride), Ye = () => {
    const s = {}, a = localStorage.getItem("adminToken");
    return a && (s.Authorization = `Bearer ${a}`), s;
  }, { data: v } = _({ queryKey: ["/api/eatyum/orderpro/catalog/sync/jobs", S], enabled: !!S, queryFn: () => __async(null, null, function* () {
    if (!S) return null;
    const s = yield fetch(`/api/eatyum/orderpro/catalog/sync/jobs/${S}`, { method: "GET", headers: Ye(), credentials: "include", cache: "no-store" });
    if (!s.ok) {
      const a = yield s.text();
      throw new Error(a || `Failed to fetch OrderPro sync progress (${s.status})`);
    }
    return s.json();
  }), staleTime: 0, gcTime: 0, refetchOnWindowFocus: true, refetchInterval: (s) => {
    const a = s.state.data;
    return a && ae.has(a.status) ? 1e3 : false;
  } }), te = A({ mutationFn: (s) => __async(null, null, function* () {
    const a = __spreadValues({}, Ye());
    if (s === "cookie") {
      const u = F.trim();
      if (!u) throw new Error("OrderPro session cookie is required");
      a["x-orderpro-cookie"] = u;
    }
    const i = yield fetch("/api/eatyum/orderpro/catalog/sync/jobs?scope=all&mode=bulk", { method: "POST", headers: a, credentials: "include" });
    if (!i.ok) {
      const u = yield i.text();
      throw new Error(u || `OrderPro sync failed (${i.status})`);
    }
    return i.json();
  }), onMutate: () => {
    K(true), Z(null), J(null);
  }, onSuccess: (s) => {
    J(s.jobId), I.setQueryData(["/api/eatyum/orderpro/catalog/sync/jobs", s.jobId], s);
  }, onError: (s) => {
    Z(O(s)), n({ title: "OrderPro sync failed", description: O(s), variant: "destructive" });
  } }), Q = te.isPending || (v ? ae.has(v.status) : false);
  x.useEffect(() => {
    !v || G === v.jobId || ae.has(v.status) || (v.result && M(v.result), v.status === "completed" ? n({ title: "OrderPro sync completed", description: "Catalog sync finished successfully. Review the popup for the full report." }) : v.status === "completed_with_errors" ? n({ title: "OrderPro sync completed with errors", description: "Some items failed or were skipped. Review the popup report for details.", variant: "destructive" }) : v.status === "failed" && n({ title: "OrderPro sync failed", description: v.error || "The sync job failed before completion.", variant: "destructive" }), d(v.jobId));
  }, [v, G, n]);
  const He = ((_a = (ns = l == null ? void 0 : l.brands) == null ? void 0 : ns.failed) != null ? _a : 0) > 0 || ((_b = (is = l == null ? void 0 : l.outlets) == null ? void 0 : is.failed) != null ? _b : 0) > 0 || ((_c = (ls = l == null ? void 0 : l.categories) == null ? void 0 : ls.failed) != null ? _c : 0) > 0 || ((_d = (ds = l == null ? void 0 : l.products) == null ? void 0 : ds.failed) != null ? _d : 0) > 0 || ((_e2 = (os = l == null ? void 0 : l.options) == null ? void 0 : os.failed) != null ? _e2 : 0) > 0 || ((_f = (cs = l == null ? void 0 : l.addons) == null ? void 0 : cs.failed) != null ? _f : 0) > 0, at = He ? { brands: (_g = (ms = l == null ? void 0 : l.brands) == null ? void 0 : ms.errors) != null ? _g : [], outlets: (_h = (us = l == null ? void 0 : l.outlets) == null ? void 0 : us.errors) != null ? _h : [], categories: (_i = (xs = l == null ? void 0 : l.categories) == null ? void 0 : xs.errors) != null ? _i : [], products: (_j = (hs = l == null ? void 0 : l.products) == null ? void 0 : hs.errors) != null ? _j : [], options: (_k = (ps = l == null ? void 0 : l.options) == null ? void 0 : ps.errors) != null ? _k : [], addons: (_l = (fs = l == null ? void 0 : l.addons) == null ? void 0 : fs.errors) != null ? _l : [] } : null, nt = (s) => __async(null, null, function* () {
    if (s.preventDefault(), t.newPassword !== t.confirmPassword) {
      n({ title: "Password mismatch", description: "New password and confirmation do not match", variant: "destructive" });
      return;
    }
    if (t.newPassword.length < 6) {
      n({ title: "Password too short", description: "Password must be at least 6 characters long", variant: "destructive" });
      return;
    }
    je.mutate({ currentPassword: t.currentPassword, newPassword: t.newPassword });
  });
  return e.jsx(mt, { currentPage: "settings", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "Admin Settings" }), e.jsx("p", { className: "text-muted-foreground", children: "Manage your admin account settings and preferences" })] }), e.jsxs(y, { children: [e.jsx(P, { children: e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Us, { className: "h-5 w-5" }), "Account Information"] }) }), e.jsx(b, { children: e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Full Name" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: c == null ? void 0 : c.fullName })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Email" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: c == null ? void 0 : c.email })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Role" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: ut(c == null ? void 0 : c.role) })] })] }) })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Ct, { className: "h-5 w-5" }), "Change Password"] }), e.jsx(E, { children: "Update your admin account password for better security" })] }), e.jsx(b, { children: e.jsxs("form", { onSubmit: nt, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "currentPassword", children: "Current Password" }), e.jsx(j, { id: "currentPassword", type: "password", value: t.currentPassword, onChange: (s) => h(__spreadProps(__spreadValues({}, t), { currentPassword: s.target.value })), required: true })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "newPassword", children: "New Password" }), e.jsx(j, { id: "newPassword", type: "password", value: t.newPassword, onChange: (s) => h(__spreadProps(__spreadValues({}, t), { newPassword: s.target.value })), required: true, minLength: 6 }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Password must be at least 6 characters long" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "confirmPassword", children: "Confirm New Password" }), e.jsx(j, { id: "confirmPassword", type: "password", value: t.confirmPassword, onChange: (s) => h(__spreadProps(__spreadValues({}, t), { confirmPassword: s.target.value })), required: true, minLength: 6 })] }), e.jsxs(g, { type: "submit", disabled: je.isPending, className: "bg-red-600 hover:bg-red-700", children: [je.isPending && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), "Change Password"] })] }) })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Es, { className: "h-5 w-5" }), "Popular Items Display"] }), e.jsx(E, { children: "Configure how popular items are sorted on the homepage" })] }), e.jsxs(b, { children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("h4", { className: "font-medium", children: "Sort by Sales Performance" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "When enabled, popular items are sorted by highest sales (purchase count). When disabled, items are sorted by manual sort order." }), e.jsxs("p", { className: "text-xs text-blue-600", children: ["API: ", (o == null ? void 0 : o.sortBy) || "loading...", " ", "| Local State: ", String(Te)] })] }), q ? e.jsx(N, { className: "h-5 w-5 animate-spin" }) : e.jsx(be, { checked: Te, onCheckedChange: Zs, disabled: Ne.isPending })] }), Ne.isPending && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mt-2", children: [e.jsx(N, { className: "h-4 w-4 animate-spin" }), "Updating sorting preference..."] })] })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Es, { className: "h-5 w-5" }), "Homepage Layout"] }), e.jsx(E, { children: "Configure how products are displayed on the homepage" })] }), e.jsxs(b, { children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("h4", { className: "font-medium", children: "Vertical List View" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "When enabled, shows all products in a single vertical list sorted by sort order. When disabled, shows category-based horizontal scrolling layout." }), e.jsxs("p", { className: "text-xs text-blue-600", children: ["API: ", (w == null ? void 0 : w.layout) || "loading...", " ", "| Local State: ", String(Le)] })] }), Rs ? e.jsx(N, { className: "h-5 w-5 animate-spin" }) : e.jsx(be, { checked: Le, onCheckedChange: et, disabled: we.isPending })] }), we.isPending && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground mt-2", children: [e.jsx(N, { className: "h-4 w-4 animate-spin" }), "Updating homepage layout..."] })] })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(bt, { className: "h-5 w-5" }), "Referral Reward"] }), e.jsx(E, { children: "Configure the reward amount (per person) for successful referrals" })] }), e.jsx(b, { children: e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "referralReward", children: "Referral Reward Amount (\u20A6)" }), e.jsx(Ss, { id: "referralReward", value: Ue, onValueChange: de, placeholder: "1000.00" }), e.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: ["Current from API: \u20A6", (_m = k == null ? void 0 : k.amountInNaira) != null ? _m : "\u2014"] })] }), e.jsx("div", { className: "flex items-end", children: e.jsxs(g, { onClick: Ws, disabled: ye.isPending || qs, className: "w-full sm:w-auto", children: [ye.isPending && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), "Save"] }) })] }) })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Fs, { className: "h-5 w-5" }), "Rider Payout Cap"] }), e.jsx(E, { children: "Set maximum allowed rider payout amount per order (used before approval submission)" })] }), e.jsx(b, { children: e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "payoutCap", children: "Payout Cap (\u20A6)" }), e.jsx(Ss, { id: "payoutCap", value: Ee, onValueChange: W, placeholder: "5000.00" }), e.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: ["Current from API: ", Re ? "Loading..." : T ? `\u20A6${T.valueNaira}` : "Not set"] })] }), e.jsx("div", { className: "flex items-end", children: e.jsxs(g, { onClick: st, disabled: Pe.isPending || Re, className: "w-full sm:w-auto", children: [Pe.isPending && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), "Save"] }) })] }) })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Fs, { className: "h-5 w-5" }), "Paystack Payout Webhook"] }), e.jsx(E, { children: "Copy the Live Webhook URL into Paystack." })] }), e.jsxs(b, { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Live Webhook URL" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(j, { readOnly: true, value: B, className: "font-mono text-xs" }), e.jsx(g, { size: "sm", variant: "outline", onClick: () => Ce(B, "Paystack live webhook URL"), disabled: !B, children: e.jsx(Oe, { className: "w-4 h-4" }) })] }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Use this in Paystack." })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Forward URL for OrderPro" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(j, { readOnly: true, value: he, className: "font-mono text-xs" }), e.jsx(g, { size: "sm", variant: "outline", onClick: () => Ce(he, "Paystack payout alias URL"), disabled: !he, children: e.jsx(Oe, { className: "w-4 h-4" }) })] }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Paste this into OrderPro." })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-sm font-medium", children: "Legacy Yum Fallback URL" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(j, { readOnly: true, value: pe, className: "font-mono text-xs" }), e.jsx(g, { size: "sm", variant: "outline", onClick: () => Ce(pe, "Legacy Paystack payout alias URL"), disabled: !pe, children: e.jsx(Oe, { className: "w-4 h-4" }) })] }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Fallback only. Leave it alone." })] }), e.jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "paystack-public-base-url", className: "text-sm font-medium", children: "Advanced: Yum Website Address" }), e.jsx(j, { id: "paystack-public-base-url", value: Fe, onChange: (s) => oe(s.target.value), placeholder: L || "https://yum.example.com", className: "mt-1" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Leave this as is unless asked to change it." })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "paystack-live-webhook-url", className: "text-sm font-medium", children: "Advanced: Paystack Webhook URL" }), e.jsx(j, { id: "paystack-live-webhook-url", value: Ie, onChange: (s) => ce(s.target.value), placeholder: B || `https://yum.example.com${It}`, className: "mt-1" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Leave this as is unless asked to change it." })] }), e.jsxs("div", { className: "md:col-span-2", children: [e.jsx(p, { htmlFor: "paystack-forward-url", className: "text-sm font-medium", children: "OrderPro Forward URL" }), e.jsx(j, { id: "paystack-forward-url", value: Ae, onChange: (s) => me(s.target.value), placeholder: ee || "https://orderpro.example.com/api/webhooks/paystack", className: "mt-1" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Paste the OrderPro URL here." })] })] }), e.jsxs("div", { className: "rounded-md border bg-muted/40 px-4 py-3 text-xs text-muted-foreground space-y-1", children: [e.jsxs("div", { children: ["Settings source: ", Ys ? "Loading..." : (r == null ? void 0 : r.source) || "derived", "."] }), e.jsxs("div", { children: ["Local platform: ", (r == null ? void 0 : r.localPlatform) || "yum", " (", ((gs = r == null ? void 0 : r.localReferencePrefixes) == null ? void 0 : gs.join(", ")) || "not configured", ")."] }), e.jsxs("div", { children: ["Forward platform: ", (r == null ? void 0 : r.forwardPlatform) || "orderpro", " (", ((vs = r == null ? void 0 : r.forwardReferencePrefixes) == null ? void 0 : vs.join(", ")) || "not configured", ")."] }), e.jsxs("div", { children: ["Effective forward URL: ", (r == null ? void 0 : r.forwardUrl) || "Not configured", "."] })] }), e.jsxs(g, { onClick: tt, disabled: fe.isPending || !rt, children: [fe.isPending && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), "Save Paystack Webhook Settings"] })] })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Is, { className: "h-5 w-5" }), "Chowdeck Integration"] }), e.jsx(E, { children: "Master switch for Chowdeck order ingestion and dashboard status sync" })] }), e.jsxs(b, { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between rounded-lg border p-4", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("h4", { className: "font-medium", children: "Enable Chowdeck" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "When disabled, Chowdeck webhooks and reconciliation stop and dashboard writes are blocked." })] }), Vs ? e.jsx(N, { className: "h-5 w-5 animate-spin" }) : e.jsx(be, { checked: !!(ue != null && ue.enabled), onCheckedChange: (s) => Me.mutate(s), disabled: Me.isPending })] }), e.jsxs("div", { className: "flex flex-col gap-3 rounded-lg border border-dashed p-4 sm:flex-row sm:items-center sm:justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium", children: "Per-outlet credentials" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "Configure Chowdeck merchant references, API keys, webhook URLs, and manual reconciliation per outlet." })] }), e.jsx(Os, { href: "/control/chowdeck", children: e.jsxs(g, { variant: "outline", className: "w-full sm:w-auto", children: ["Open Chowdeck Page", e.jsx(As, { className: "ml-2 h-4 w-4" })] }) })] })] })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Is, { className: "h-5 w-5" }), "Sales Channels"] }), e.jsx(E, { children: "Manage order sources available when creating orders (e.g. WhatsApp, Walk-in, Glovo)" })] }), e.jsx(b, { children: e.jsxs("div", { className: "space-y-4", children: [zs ? e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [e.jsx(N, { className: "h-4 w-4 animate-spin" }), "Loading channels..."] }) : e.jsxs("div", { className: "space-y-3", children: [$.map((s) => e.jsxs("div", { className: "grid grid-cols-1 gap-3 rounded-md border p-3 md:grid-cols-[1fr_1fr_180px_auto]", children: [e.jsxs("div", { children: [e.jsx(p, { className: "text-xs", children: "Display Name" }), e.jsx(j, { value: s.label, onChange: (a) => {
    const i = a.target.value;
    z((u) => u.map((f) => f.value === s.value ? __spreadProps(__spreadValues({}, f), { label: i }) : f));
  }, className: "h-9" })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-xs", children: "Value (internal)" }), e.jsx(j, { value: s.value, onChange: (a) => {
    const i = a.target.value.trim().toLowerCase().replace(/\s+/g, "_");
    z((u) => u.map((f) => f.value === s.value ? __spreadProps(__spreadValues({}, f), { value: i }) : f));
  }, className: "h-9" })] }), e.jsxs("div", { children: [e.jsx(p, { className: "text-xs", children: "Default Commission (%)" }), e.jsx(ks, { category: "percentage", min: 0, max: 100, value: s.defaultCommissionRate, onChange: (a) => Js(s.value, a === null ? "" : String(a)), className: "h-9" })] }), e.jsx("div", { className: "flex items-end justify-end", children: e.jsx(g, { type: "button", size: "icon", variant: "ghost", onClick: () => Qs(s.value), disabled: X.isPending, children: e.jsx(ot, { className: "h-4 w-4" }) }) })] }, s.value)), $.length === 0 && e.jsx("p", { className: "text-sm text-muted-foreground", children: "No channels configured" })] }), e.jsxs("div", { className: "space-y-3 border-t pt-3", children: [e.jsxs("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_180px_auto]", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "channelLabel", className: "text-xs", children: "Display Name" }), e.jsx(j, { id: "channelLabel", value: ve, onChange: (s) => Be(s.target.value), placeholder: "e.g. Instagram", className: "h-9" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "channelValue", className: "text-xs", children: "Value (internal)" }), e.jsx(j, { id: "channelValue", value: ge, onChange: (s) => qe(s.target.value), placeholder: "e.g. instagram", className: "h-9" })] }), e.jsxs("div", { children: [e.jsx(p, { htmlFor: "channelCommission", className: "text-xs", children: "Default Commission (%)" }), e.jsx(ks, { id: "channelCommission", category: "percentage", min: 0, max: 100, value: $e, onChange: (s) => Ve(s === null ? "" : String(s)), className: "h-9", onKeyDown: (s) => {
    s.key === "Enter" && (s.preventDefault(), Ke());
  } })] }), e.jsx("div", { className: "flex items-end justify-end", children: e.jsxs(g, { type: "button", size: "sm", onClick: Ke, disabled: X.isPending || !ge.trim() || !ve.trim(), className: "h-9", children: [e.jsx(Ot, { className: "h-4 w-4 mr-1" }), "Add"] }) })] }), e.jsx("div", { className: "flex justify-end", children: e.jsxs(g, { type: "button", onClick: Gs, disabled: X.isPending || !Xs, children: [X.isPending && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), "Save Sales Channels"] }) })] })] }) })] }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Us, { className: "h-5 w-5" }), "OrderPro Catalog Sync"] }), e.jsx(E, { children: "Push brands, outlets, categories, products, options, and add-ons from EatYum to OrderPro in one sync." })] }), e.jsx(b, { children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(p, { htmlFor: "orderProCookie", children: "OrderPro Session Cookie" }), e.jsx(j, { id: "orderProCookie", type: "text", value: F, onChange: (s) => ie(s.target.value), placeholder: "connect.sid=YOUR_ORDERPRO_SESSION_COOKIE" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Paste the OrderPro business session cookie to run cookie-based sync. You can also run token/tenant env sync without cookie." })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs(g, { onClick: () => te.mutate("cookie"), disabled: Q, children: [Q && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), Q ? "Syncing Catalog..." : "Sync Catalog (Cookie)"] }), e.jsxs(g, { variant: "secondary", onClick: () => te.mutate("token"), disabled: Q, children: [Q && e.jsx(N, { className: "mr-2 h-4 w-4 animate-spin" }), Q ? "Syncing Catalog..." : "Sync Catalog (Token Env)"] }), (v || l) && e.jsx(g, { variant: "outline", onClick: () => K(true), children: "View Sync Report" }), l && e.jsxs("span", { className: "text-sm text-muted-foreground", children: ["Last sync: brands ", (_n = (js = l.brands) == null ? void 0 : js.sent) != null ? _n : 0, " sent, outlets", " ", (_o = (Ns = l.outlets) == null ? void 0 : Ns.sent) != null ? _o : 0, " sent, categories", " ", (_p = (ws = l.categories) == null ? void 0 : ws.sent) != null ? _p : 0, " sent, products", " ", (_q = (ys = l.products) == null ? void 0 : ys.sent) != null ? _q : 0, " sent, options", " ", (_r = (Ps = l.options) == null ? void 0 : Ps.sent) != null ? _r : 0, " sent, add-ons", " ", (_s2 = (Cs = l.addons) == null ? void 0 : Cs.sent) != null ? _s2 : 0, " sent."] })] }), He ? e.jsxs("div", { className: "space-y-2", children: [e.jsx("p", { className: "text-sm text-red-600", children: "Some items failed. See details below." }), e.jsx("pre", { className: "text-xs bg-muted/50 p-3 rounded-md overflow-auto max-h-64", children: JSON.stringify(at, null, 2) })] }) : null] }) })] }), e.jsx(Ft, { open: le, onOpenChange: K, job: v != null ? v : null, isStarting: te.isPending, startErrorMessage: Y }), e.jsxs(y, { children: [e.jsxs(P, { children: [e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx(Ts, { className: "h-5 w-5" }), "Data Management"] }), e.jsx(E, { children: "Access archived data and manage system records" })] }), e.jsx(b, { children: e.jsx("div", { className: "space-y-4", children: e.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [e.jsxs("div", { children: [e.jsx("h4", { className: "font-medium", children: "Archived Orders" }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "View and manage orders that have been archived instead of permanently deleted" })] }), e.jsx(g, { asChild: true, variant: "outline", children: e.jsxs(Os, { href: "/control/archived-orders", className: "flex items-center gap-2", children: [e.jsx(Ts, { className: "h-4 w-4" }), "View Archived Orders", e.jsx(As, { className: "h-3 w-3" })] }) })] }) }) })] })] }) });
}
export { Ur as default };
