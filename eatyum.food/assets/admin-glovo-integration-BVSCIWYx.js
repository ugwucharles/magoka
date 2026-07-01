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
import { j as e, c as Le, r as t, b as me, ab as xe, E as n, H as o, I as c, Z as I, F as d, B as r, W as F, a6 as he } from "./index-DOfu0sXg.js";
import { u as A } from "./useMutation-CVmbONMy.js";
import { I as v } from "./input-FyV2XACZ.js";
import { L as m } from "./label-B38UEnoM.js";
import { B as U } from "./badge-BAjaXL1S.js";
import { A as Pe, u as De } from "./admin-layout-DH7sAIhq.js";
import { C as ue, a as Ee, b as Ie } from "./collapsible-BXfmK0ZU.js";
import { S as G, a as O, b as R, c as W, d as l } from "./select-ets7bQkN.js";
import { A as ge, b as je, a as pe } from "./alert-CuGTVrCB.js";
import { T as Fe, a as Ae, b as ve, c as Ne } from "./tabs-qGTQ6MVs.js";
import { T as Ue, a as Ge, b as be, c as x, d as Oe, e as h } from "./table-CzdeB6gz.js";
import { P as fe } from "./plus-xl2HqeIg.js";
import { R as _ } from "./refresh-cw-C5dId60a.js";
import { W as Re } from "./webhook-CMu-F_1L.js";
import { E as We } from "./external-link-CR-HDEeC.js";
import { Z as _e } from "./zap-BL35eo9v.js";
import { T as ze } from "./trash-2-MFuZdLCA.js";
import { D as Me, C as $e } from "./dollar-sign-CJk2KsjA.js";
import { T as Ve } from "./trending-down-Cww3HZfJ.js";
import { T as Be } from "./trending-up-bEYf6wvk.js";
import { F as qe } from "./filter-56Ct97Iz.js";
import { C as He } from "./chevron-down-DegxUQDE.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
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
import "./index-4KTxcrAY.js";
import "./index-CxKYTSZE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./index-Czlrzsbg.js";
function Ke() {
  var ie, re, le, ne, oe;
  const { toast: u } = Le(), [z, ye] = t.useState("webhooks"), [N, Ce] = t.useState("STATUS_UPDATE"), [C, we] = t.useState(""), [w, M] = t.useState(false), [j, a] = t.useState(1), [$, Te] = t.useState(25), [V, B] = t.useState(""), [q, H] = t.useState(""), [K, Z] = t.useState(""), [Q, Y] = t.useState(""), [J, X] = t.useState("all"), { selectedBrandId: T } = De(), S = (s) => C || `${window.location.origin}/api/webhooks/glovo`, { data: k, refetch: Se, isLoading: L, error: P } = me({ queryKey: ["/api/admin/glovo/webhooks"] }), ee = ((ie = k == null ? void 0 : k.data) == null ? void 0 : ie.webhookList) || [], b = (re = P == null ? void 0 : P.message) == null ? void 0 : re.includes("Glovo API credentials not configured"), { data: i, isLoading: p, error: f, refetch: ke } = me({ queryKey: ["/api/admin/glovo/financial-transactions", { page: j, pageSize: $, startDate: V, endDate: q, customerSearch: K, orderNumberSearch: Q, profitLossFilter: J, brandId: T }], enabled: z === "transactions" && !!T }), g = (i == null ? void 0 : i.summary) || {}, y = (i == null ? void 0 : i.pagination) || {}, se = (i == null ? void 0 : i.transactions) || [], D = A({ mutationFn: () => __async(null, null, function* () {
    return yield F("POST", "/api/admin/glovo/webhooks", { callbackUrl: S(), eventType: N });
  }), onSuccess: () => {
    u({ title: "Webhook registered", description: `${N} webhook created successfully` }), he.invalidateQueries({ queryKey: ["/api/admin/glovo/webhooks"] });
  }, onError: (s) => {
    u({ title: "Failed to register webhook", description: s.message, variant: "destructive" });
  } }), te = A({ mutationFn: (s) => __async(null, null, function* () {
    return yield F("DELETE", `/api/admin/glovo/webhooks/${s}`);
  }), onSuccess: () => {
    u({ title: "Webhook deleted", description: "Webhook removed successfully" }), he.invalidateQueries({ queryKey: ["/api/admin/glovo/webhooks"] });
  }, onError: (s) => {
    u({ title: "Failed to delete webhook", description: s.message, variant: "destructive" });
  } }), ae = A({ mutationFn: (s) => __async(null, null, function* () {
    return yield F("POST", `/api/admin/glovo/webhooks/${s}/simulate`);
  }), onSuccess: () => {
    u({ title: "Webhook simulated", description: "Simulation triggered successfully (check logs)" });
  }, onError: (s) => {
    u({ title: "Failed to simulate webhook", description: s.message, variant: "destructive" });
  } });
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Glovo Integration" }), e.jsx("p", { className: "text-gray-600", children: "Manage webhooks and test Glovo API integration" })] }), e.jsxs(Fe, { value: z, onValueChange: (s) => ye(s), className: "w-full", children: [e.jsxs(Ae, { className: "grid w-full grid-cols-2", children: [e.jsx(ve, { value: "webhooks", children: "Webhooks" }), e.jsx(ve, { value: "transactions", children: "Financial Transactions" })] }), e.jsxs(Ne, { value: "webhooks", className: "space-y-6", children: [b && e.jsxs(ge, { variant: "destructive", children: [e.jsx(xe, { className: "h-4 w-4" }), e.jsx(je, { children: "Glovo API Credentials Not Configured" }), e.jsxs(pe, { children: [e.jsx("p", { className: "mb-2", children: "The Glovo API credentials are missing from your environment configuration. To use the Glovo integration, please add the following environment variables:" }), e.jsxs("ul", { className: "list-disc list-inside space-y-1 text-sm", children: [e.jsxs("li", { children: [e.jsx("code", { className: "bg-red-100 px-1 rounded", children: "GLOVO_API_URL" }), " - The Glovo API endpoint URL"] }), e.jsxs("li", { children: [e.jsx("code", { className: "bg-red-100 px-1 rounded", children: "GLOVO_CLIENT_ID" }), " - Your Glovo client ID"] }), e.jsxs("li", { children: [e.jsx("code", { className: "bg-red-100 px-1 rounded", children: "GLOVO_CLIENT_SECRET" }), " - Your Glovo client secret"] })] }), e.jsxs("p", { className: "mt-2 text-sm", children: ["Contact your Glovo account manager to obtain these credentials, then add them to your ", e.jsx("code", { className: "bg-red-100 px-1 rounded", children: ".env" }), " file."] })] })] }), e.jsxs(n, { children: [e.jsxs(o, { children: [e.jsxs(c, { className: "flex items-center gap-2", children: [e.jsx(fe, { className: "h-5 w-5" }), "Register Webhook"] }), e.jsx(I, { children: "Create a webhook to receive real-time updates from Glovo" })] }), e.jsxs(d, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(m, { htmlFor: "eventType", children: "Event Type" }), e.jsxs(G, { value: N, onValueChange: (s) => Ce(s), children: [e.jsx(O, { "data-testid": "select-webhook-event-type", children: e.jsx(R, {}) }), e.jsxs(W, { children: [e.jsx(l, { value: "STATUS_UPDATE", children: "Status Update" }), e.jsx(l, { value: "POSITION_UPDATE", children: "Position Update" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(m, { htmlFor: "callbackUrl", children: ["Callback URL", e.jsx("span", { className: "text-sm text-gray-500 ml-2", children: "(optional - uses current URL)" })] }), e.jsx(v, { id: "callbackUrl", "data-testid": "input-callback-url", placeholder: S(), value: C, onChange: (s) => we(s.target.value) })] })] }), e.jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm", children: [e.jsxs("p", { className: "text-blue-900", children: [e.jsx("strong", { children: "Webhook URL:" }), " ", S()] }), e.jsxs("p", { className: "text-blue-700 mt-1 text-xs", children: ["This webhook will receive ", N === "STATUS_UPDATE" ? "order status changes" : "courier position updates", " from Glovo"] })] }), e.jsx(r, { onClick: () => D.mutate(), disabled: D.isPending || b, className: "w-full md:w-auto", "data-testid": "button-register-webhook", children: D.isPending ? e.jsxs(e.Fragment, { children: [e.jsx(_, { className: "mr-2 h-4 w-4 animate-spin" }), "Registering..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(fe, { className: "mr-2 h-4 w-4" }), "Register Webhook"] }) })] })] }), e.jsxs(n, { children: [e.jsx(o, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs(c, { className: "flex items-center gap-2", children: [e.jsx(Re, { className: "h-5 w-5" }), "Registered Webhooks"] }), e.jsx(I, { children: "Manage and test your Glovo webhooks" })] }), e.jsx(r, { variant: "outline", size: "sm", onClick: () => Se(), disabled: L || b, "data-testid": "button-refresh-webhooks", children: e.jsx(_, { className: `h-4 w-4 ${L ? "animate-spin" : ""}` }) })] }) }), e.jsx(d, { children: L ? e.jsx("div", { className: "text-center py-8 text-gray-500", children: "Loading webhooks..." }) : b ? e.jsx("div", { className: "text-center py-8 text-gray-500", children: "Configure Glovo API credentials to view webhooks." }) : ee.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-500", children: "No webhooks registered yet. Create one above to get started." }) : e.jsx("div", { className: "space-y-3", children: ee.map((s) => e.jsx("div", { className: "border rounded-lg p-4 bg-white hover:shadow-md transition-shadow", "data-testid": `webhook-item-${s.webhookId}`, children: e.jsxs("div", { className: "flex items-start justify-between gap-4", children: [e.jsxs("div", { className: "flex-1 space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(U, { variant: "outline", className: "text-xs", children: s.eventSubscribed }), e.jsxs("code", { className: "text-xs bg-gray-100 px-2 py-1 rounded", children: ["ID: ", s.webhookId] })] }), e.jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [e.jsx(We, { className: "h-4 w-4" }), e.jsx("a", { href: s.callbackUrl, target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-600 truncate", children: s.callbackUrl })] }), s.retryConfig && e.jsxs("div", { className: "text-xs text-gray-500", children: ["Max retries: ", s.retryConfig.maxRetryCount] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(r, { variant: "outline", size: "sm", onClick: () => ae.mutate(s.webhookId), disabled: ae.isPending, "data-testid": `button-simulate-${s.webhookId}`, children: e.jsx(_e, { className: "h-4 w-4" }) }), e.jsx(r, { variant: "outline", size: "sm", onClick: () => te.mutate(s.webhookId), disabled: te.isPending, "data-testid": `button-delete-${s.webhookId}`, children: e.jsx(ze, { className: "h-4 w-4 text-red-600" }) })] })] }) }, s.webhookId)) }) })] }), e.jsxs(n, { className: "border-yellow-200 bg-yellow-50", children: [e.jsx(o, { children: e.jsx(c, { className: "text-yellow-900", children: "Integration Notes" }) }), e.jsxs(d, { className: "space-y-2 text-sm text-yellow-800", children: [e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "STATUS_UPDATE" }), ": Receives notifications when order status changes (CREATED, SCHEDULED, PICKED, DELIVERED, etc.)"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "POSITION_UPDATE" }), ": Receives courier GPS position updates during delivery"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Simulate Webhook" }), " (Zap icon): Triggers a test webhook call (staging only)"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Environment-specific URLs" }), ": The callback URL automatically uses the current domain, so you can register different webhooks for staging and production"] }), e.jsx("p", { children: "\u2022 Webhooks are authenticated using the GLOVO_CLIENT_SECRET environment variable" })] })] })] }), e.jsxs(Ne, { value: "transactions", className: "space-y-6", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [e.jsxs(n, { children: [e.jsx(o, { className: "pb-2", children: e.jsxs(c, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(Me, { className: "h-4 w-4 text-green-600" }), "Total Inflow"] }) }), e.jsxs(d, { children: [e.jsxs("div", { className: "text-2xl font-bold", children: ["\u20A6", ((le = g.totalInflow) == null ? void 0 : le.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })) || "0.00"] }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Customer charges" })] })] }), e.jsxs(n, { children: [e.jsx(o, { className: "pb-2", children: e.jsxs(c, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(Ve, { className: "h-4 w-4 text-red-600" }), "Total Outflow"] }) }), e.jsxs(d, { children: [e.jsxs("div", { className: "text-2xl font-bold", children: ["\u20A6", ((ne = g.totalOutflow) == null ? void 0 : ne.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })) || "0.00"] }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Glovo delivery costs" })] })] }), e.jsxs(n, { children: [e.jsx(o, { className: "pb-2", children: e.jsxs(c, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx($e, { className: "h-4 w-4 text-blue-600" }), "Net Profit/Loss"] }) }), e.jsxs(d, { children: [e.jsxs("div", { className: `text-2xl font-bold ${g.netProfitLoss >= 0 ? "text-green-600" : "text-red-600"}`, children: ["\u20A6", ((oe = g.netProfitLoss) == null ? void 0 : oe.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })) || "0.00"] }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Inflow - Outflow" })] })] }), e.jsxs(n, { children: [e.jsx(o, { className: "pb-2", children: e.jsxs(c, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(Be, { className: "h-4 w-4 text-purple-600" }), "Profit Margin"] }) }), e.jsxs(d, { children: [e.jsxs("div", { className: "text-2xl font-bold", children: [g.profitMargin || "0.00", "%"] }), e.jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [g.transactionCount || 0, " transactions"] })] })] })] }), e.jsxs(n, { children: [e.jsx(o, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx(c, { children: "Transactions" }), e.jsxs(I, { children: [y.totalCount || 0, " transactions found"] })] }), e.jsx(ue, { open: w, onOpenChange: M, children: e.jsx(Ee, { asChild: true, children: e.jsxs(r, { variant: "outline", size: "sm", className: "gap-2", children: [e.jsx(qe, { className: "h-4 w-4" }), "Filters", e.jsx(He, { className: `h-4 w-4 transition-transform ${w ? "rotate-180" : ""}` })] }) }) })] }) }), e.jsx(ue, { open: w, onOpenChange: M, children: e.jsxs(Ie, { className: "border-t px-6 py-4 space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "startDate", className: "text-xs font-medium", children: "Start Date" }), e.jsx(v, { id: "startDate", type: "date", value: V, onChange: (s) => {
    B(s.target.value), a(1);
  }, className: "h-8 text-sm" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "endDate", className: "text-xs font-medium", children: "End Date" }), e.jsx(v, { id: "endDate", type: "date", value: q, onChange: (s) => {
    H(s.target.value), a(1);
  }, className: "h-8 text-sm" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "customerSearch", className: "text-xs font-medium", children: "Customer" }), e.jsx(v, { id: "customerSearch", placeholder: "Email/Phone...", value: K, onChange: (s) => {
    Z(s.target.value), a(1);
  }, className: "h-8 text-sm" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "orderNumber", className: "text-xs font-medium", children: "Order #" }), e.jsx(v, { id: "orderNumber", placeholder: "Order number...", value: Q, onChange: (s) => {
    Y(s.target.value), a(1);
  }, className: "h-8 text-sm" })] })] }), e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 items-end", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "profitLoss", className: "text-xs font-medium", children: "Profit/Loss" }), e.jsxs(G, { value: J, onValueChange: (s) => {
    X(s), a(1);
  }, children: [e.jsx(O, { id: "profitLoss", className: "h-8 text-sm", children: e.jsx(R, {}) }), e.jsxs(W, { children: [e.jsx(l, { value: "all", children: "All" }), e.jsx(l, { value: "profit", children: "Profit Only" }), e.jsx(l, { value: "loss", children: "Loss Only" })] })] })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(m, { htmlFor: "pageSize", className: "text-xs font-medium", children: "Page Size" }), e.jsxs(G, { value: String($), onValueChange: (s) => {
    Te(parseInt(s)), a(1);
  }, children: [e.jsx(O, { id: "pageSize", className: "h-8 text-sm", children: e.jsx(R, {}) }), e.jsxs(W, { children: [e.jsx(l, { value: "10", children: "10" }), e.jsx(l, { value: "25", children: "25" }), e.jsx(l, { value: "50", children: "50" }), e.jsx(l, { value: "100", children: "100" })] })] })] }), e.jsxs(r, { onClick: () => ke(), disabled: p, variant: "outline", size: "sm", className: "h-8 text-sm", children: [e.jsx(_, { className: `h-3 w-3 mr-1 ${p ? "animate-spin" : ""}` }), "Refresh"] }), e.jsx(r, { onClick: () => {
    B(""), H(""), Z(""), Y(""), X("all"), a(1);
  }, variant: "outline", size: "sm", className: "h-8 text-sm", children: "Clear" })] })] }) }), e.jsx(d, { children: T ? p ? e.jsx("div", { className: "text-center py-8 text-gray-500", children: "Loading transactions..." }) : f ? e.jsxs(ge, { variant: "destructive", children: [e.jsx(xe, { className: "h-4 w-4" }), e.jsx(je, { children: "Error" }), e.jsx(pe, { children: (f == null ? void 0 : f.message) || "Failed to load transactions" })] }) : se.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-500", children: "No transactions found. Try adjusting your filters." }) : e.jsxs("div", { className: "space-y-4", children: [e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(Ue, { children: [e.jsx(Ge, { children: e.jsxs(be, { children: [e.jsx(x, { children: "Order #" }), e.jsx(x, { children: "Customer" }), e.jsx(x, { children: "Date" }), e.jsx(x, { className: "text-right", children: "Customer Charge" }), e.jsx(x, { className: "text-right", children: "Glovo Cost" }), e.jsx(x, { className: "text-right", children: "Profit/Loss" }), e.jsx(x, { className: "text-right", children: "Margin %" }), e.jsx(x, { children: "Status" })] }) }), e.jsx(Oe, { children: se.map((s) => {
    var E, ce, de;
    return e.jsxs(be, { children: [e.jsx(h, { className: "font-mono text-sm", children: s.orderNumber }), e.jsxs(h, { className: "text-sm", children: [e.jsx("div", { children: s.customerEmail }), e.jsx("div", { className: "text-xs text-gray-500", children: s.customerPhone })] }), e.jsx(h, { className: "text-sm", children: new Date(s.createdAt).toLocaleDateString() }), e.jsxs(h, { className: "text-right font-medium", children: ["\u20A6", (E = s.customerCharge) == null ? void 0 : E.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })] }), e.jsxs(h, { className: "text-right font-medium", children: ["\u20A6", (ce = s.glovoCost) == null ? void 0 : ce.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })] }), e.jsxs(h, { className: `text-right font-bold ${s.profitLoss >= 0 ? "text-green-600" : "text-red-600"}`, children: ["\u20A6", (de = s.profitLoss) == null ? void 0 : de.toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })] }), e.jsx(h, { className: "text-right", children: e.jsxs(U, { variant: parseFloat(s.profitMargin) >= 0 ? "default" : "destructive", children: [s.profitMargin, "%"] }) }), e.jsx(h, { children: e.jsx(U, { variant: "outline", children: s.glovoDeliveryStatus || "N/A" }) })] }, s.id);
  }) })] }) }), e.jsxs("div", { className: "flex items-center justify-between pt-4", children: [e.jsxs("div", { className: "text-sm text-gray-600", children: ["Page ", y.currentPage, " of ", y.totalPages] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(r, { onClick: () => a(Math.max(1, j - 1)), disabled: j === 1 || p, variant: "outline", size: "sm", children: "Previous" }), e.jsx(r, { onClick: () => a(j + 1), disabled: j >= (y.totalPages || 1) || p, variant: "outline", size: "sm", children: "Next" })] })] })] }) : e.jsx("div", { className: "text-center py-8 text-gray-500", children: "Select a brand to view Glovo financial transactions." }) })] })] })] })] });
}
function $s() {
  return e.jsx(Pe, { currentPage: "glovo", children: e.jsx(Ke, {}) });
}
export { $s as default };
