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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as c, c as Te, V as De, b as Me, i as ke, j as e, E as d, F as m, B as g, H as u, I as j, T as U, Z as Be, ah as Oe, W as Le } from "./index-DOfu0sXg.js";
import { u as Pe } from "./useMutation-CVmbONMy.js";
import { B as Fe } from "./badge-BAjaXL1S.js";
import { S as L, a as P, b as F, c as _, d as n } from "./select-ets7bQkN.js";
import { T as _e } from "./textarea-__Yhw9VH.js";
import { u as Ee, A as He, M as Ie } from "./admin-layout-DH7sAIhq.js";
import { e as ee, a as x } from "./timezone-utils-D5P8NMTs.js";
import { D as $e } from "./download-ukPRPFea.js";
import { C as Y } from "./clock-DQ0X7PrC.js";
import { T as se } from "./timer-DMHaMGok.js";
import { T as te } from "./trending-up-bEYf6wvk.js";
import { T as ae } from "./triangle-alert-BZPq43t0.js";
import { F as Ve } from "./filter-56Ct97Iz.js";
import { C as Re } from "./chevron-up-Cu4mgTvm.js";
import { C as ze } from "./chevron-down-DegxUQDE.js";
import { C as qe } from "./circle-x-ve1y_gH0.js";
import { S as Ue } from "./save-BZa-ufS1.js";
import { C as Ye } from "./chevron-left-Cnh0-uPi.js";
import { C as Ke } from "./chevron-right-DkUlsPHD.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-CxKYTSZE.js";
import "./check-AkIa94Y-.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./label-B38UEnoM.js";
import "./shopping-cart-C1hOzoyN.js";
import "./plus-xl2HqeIg.js";
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
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
const Qe = [10, 25, 50, 100], Ze = (h) => {
  const b = /* @__PURE__ */ new Date(), r = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  switch (h) {
    case "today":
      return { start: r, end: new Date(r.getTime() + 24 * 60 * 60 * 1e3) };
    case "last_7_days":
      return { start: new Date(r.getTime() - 7 * 24 * 60 * 60 * 1e3), end: new Date(r.getTime() + 24 * 60 * 60 * 1e3) };
    case "last_30_days":
      return { start: new Date(r.getTime() - 30 * 24 * 60 * 60 * 1e3), end: new Date(r.getTime() + 24 * 60 * 60 * 1e3) };
    case "all_time":
      return { start: /* @__PURE__ */ new Date("2020-01-01"), end: new Date(r.getTime() + 24 * 60 * 60 * 1e3) };
  }
};
function $s() {
  const [h, b] = c.useState("all"), [r, ie] = c.useState("all"), [S, le] = c.useState("last_7_days"), [E, ne] = c.useState(false), [H, ce] = c.useState(/* @__PURE__ */ new Set()), [K, I] = c.useState(/* @__PURE__ */ new Set()), [$, V] = c.useState({}), [p, w] = c.useState(1), [A, re] = c.useState(25), C = (s, t) => {
    w(1), s === "status" ? b(t) : s === "outlet" ? ie(t) : s === "time" ? le(t) : s === "delayed" && ne(t);
  }, { toast: T } = Te(), de = De(), { selectedBrandId: R, isLoading: me } = Ee(), f = c.useMemo(() => Ze(S), [S]), z = Pe({ mutationFn: (_0) => __async(null, [_0], function* ({ orderId: s, comments: t }) {
    return Le("PATCH", `/api/admin/orders/${s}/comments`, { comments: t });
  }), onSuccess: (s, t) => {
    de.invalidateQueries({ queryKey: ["/api/admin/orders/analytics"] }), I((i) => {
      const l = new Set(i);
      return l.delete(t.orderId), l;
    }), T({ title: "Success", description: "Order comments updated successfully" });
  }, onError: (s) => {
    T({ title: "Error", description: s.message || "Failed to update comments", variant: "destructive" });
  } }), { data: D = [], isLoading: oe, error: xe } = Me({ queryKey: ["/api/admin/orders/analytics", { brandId: R, startDate: f.start.toISOString(), endDate: f.end.toISOString(), status: h !== "all" ? h : void 0, limit: 500 }], queryFn: ke({ on401: "throw" }), staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, enabled: !!R }), v = c.useMemo(() => D.filter((s) => {
    const t = ee(s.createdAt), i = ee("2025-07-29T00:00:00Z");
    return !(isNaN(t.getTime()) || t < i || t < f.start || t >= f.end || h !== "all" && s.status !== h || r !== "all" && s.outletName !== r || E && !s.hasSLABreach);
  }), [r, h, D, E, f]), he = c.useMemo(() => Array.from(new Set(D.map((s) => s.outletName))), [D]), M = v.length, y = Math.ceil(M / A), k = (p - 1) * A, q = k + A, Q = c.useMemo(() => v.slice(k, q), [q, v, k]), pe = M > 0 ? k + 1 : 0, ue = Math.min(q, M);
  c.useEffect(() => {
    p > y && y > 0 && w(y);
  }, [p, y]);
  const je = (s) => {
    const t = new Set(H);
    t.has(s) ? t.delete(s) : t.add(s), ce(t);
  }, fe = (s, t) => {
    I((i) => new Set(i).add(s)), V((i) => __spreadProps(__spreadValues({}, i), { [s]: t || "" }));
  }, ye = (s) => {
    I((t) => {
      const i = new Set(t);
      return i.delete(s), i;
    }), V((t) => {
      const i = __spreadValues({}, t);
      return delete i[s], i;
    });
  }, Ne = (s) => {
    const t = $[s] || "";
    z.mutate({ orderId: s, comments: t });
  }, ge = (s, t) => {
    V((i) => __spreadProps(__spreadValues({}, i), { [s]: t }));
  };
  if (me || oe) return e.jsx("div", { className: "p-6", children: e.jsx("div", { className: "grid gap-4", children: [...Array(5)].map((s, t) => e.jsx("div", { className: "animate-pulse", children: e.jsx("div", { className: "h-32 bg-gray-200 rounded-lg" }) }, t)) }) });
  if (!R) return e.jsx("div", { className: "p-6", children: e.jsx(d, { children: e.jsx(m, { className: "pt-6", children: e.jsx("p", { className: "text-muted-foreground", children: "Select a brand to view order analytics." }) }) }) });
  if (xe) return e.jsx("div", { className: "p-6", children: e.jsx(d, { children: e.jsx(m, { className: "pt-6", children: e.jsx("p", { className: "text-destructive", children: "Failed to load order analytics" }) }) }) });
  const { avgTimeToAccept: ve, avgPrepTime: be, avgPickupDelay: we, avgDeliveryTime: Se, slaBreaches: o } = (() => {
    const s = { accept: 0, prep: 0, pickup: 0, delivery: 0 }, t = { accept: 0, prep: 0, pickup: 0, delivery: 0 }, i = { total: 0, acceptance: 0, kitchen: 0, rider: 0, delivery: 0 };
    for (const l of v) l.timeToAcceptMinutes !== null && (s.accept += l.timeToAcceptMinutes, t.accept++), l.prepTimeMinutes !== null && (s.prep += l.prepTimeMinutes, t.prep++), l.pickupDelayMinutes !== null && (s.pickup += l.pickupDelayMinutes, t.pickup++), l.deliveryTimeMinutes !== null && (s.delivery += l.deliveryTimeMinutes, t.delivery++), l.hasSLABreach && i.total++, l.slaBreaches.acceptanceDelay && i.acceptance++, l.slaBreaches.kitchenDelay && i.kitchen++, l.slaBreaches.riderDelay && i.rider++, l.slaBreaches.deliveryDelay && i.delivery++;
    return { avgTimeToAccept: s.accept / Math.max(t.accept, 1), avgPrepTime: s.prep / Math.max(t.prep, 1), avgPickupDelay: s.pickup / Math.max(t.pickup, 1), avgDeliveryTime: s.delivery / Math.max(t.delivery, 1), slaBreaches: i };
  })(), B = (s) => {
    if (s < 60) return `${s}m`;
    const t = Math.floor(s / 60), i = s % 60;
    return i > 0 ? `${t}h ${i}m` : `${t}h`;
  }, Ae = () => {
    const s = v.filter((a) => a.status === "delivered");
    if (s.length === 0) {
      T({ title: "No Data", description: "No delivered orders found for the selected period", variant: "destructive" });
      return;
    }
    const t = ["Order Number", "Customer Name", "Outlet", "Order Type", "Total Amount", "Order Placed", "Delivered At", "Confirmed By", "Accepted By", "Time to Confirm (min)", "Time to Accept (min)", "Prep Time (min)", "Pickup Delay (min)", "Delivery Time (min)", "Total Time (min)", "Acceptance SLA Breach", "Kitchen SLA Breach", "Rider SLA Breach", "Delivery SLA Breach", "Total SLA Breach", "Admin Comments"], i = s.map((a) => {
      var O, Z, G, J, W, X;
      return [a.orderNumber, a.customerDisplayName, a.outletName, a.orderType, `\u20A6${parseFloat(a.total).toLocaleString()}`, x(a.createdAt, "MMM dd, yyyy HH:mm:ss"), a.deliveredAt ? x(a.deliveredAt, "MMM dd, yyyy HH:mm:ss") : "", a.status === "pending" ? "Pending" : a.confirmedByName || "Auto-confirmed", a.acceptedByName || "Not tracked", ((O = a.timeToConfirmMinutes) == null ? void 0 : O.toString()) || "N/A", ((Z = a.timeToAcceptMinutes) == null ? void 0 : Z.toString()) || "N/A", ((G = a.prepTimeMinutes) == null ? void 0 : G.toString()) || "N/A", ((J = a.pickupDelayMinutes) == null ? void 0 : J.toString()) || "N/A", ((W = a.deliveryTimeMinutes) == null ? void 0 : W.toString()) || "N/A", ((X = a.totalTimeMinutes) == null ? void 0 : X.toString()) || "N/A", a.slaBreaches.acceptanceDelay ? "Yes" : "No", a.slaBreaches.kitchenDelay ? "Yes" : "No", a.slaBreaches.riderDelay ? "Yes" : "No", a.slaBreaches.deliveryDelay ? "Yes" : "No", a.hasSLABreach ? "Yes" : "No", a.adminComments || ""];
    }), l = [t, ...i].map((a) => a.map((O) => `"${O}"`).join(",")).join(`
`), Ce = new Blob([l], { type: "text/csv;charset=utf-8;" }), N = document.createElement("a");
    if (N.download !== void 0) {
      const a = URL.createObjectURL(Ce);
      N.setAttribute("href", a), N.setAttribute("download", `order-analytics-${S}-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`), N.style.visibility = "hidden", document.body.appendChild(N), N.click(), document.body.removeChild(N);
    }
    T({ title: "Export Complete", description: `Exported ${s.length} delivered orders to CSV` });
  };
  return e.jsx(He, { currentPage: "order-analytics", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold", children: "Order Lifecycle Analytics" }), e.jsxs("p", { className: "text-muted-foreground", children: ["Comprehensive performance tracking with SLA breach detection (", f.start.toLocaleDateString(), " - ", f.end.toLocaleDateString(), ")"] })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsxs(L, { value: S, onValueChange: (s) => C("time", s), children: [e.jsx(P, { className: "w-40", children: e.jsx(F, {}) }), e.jsxs(_, { children: [e.jsx(n, { value: "today", children: "Today" }), e.jsx(n, { value: "last_7_days", children: "Last 7 Days" }), e.jsx(n, { value: "last_30_days", children: "Last 30 Days" }), e.jsx(n, { value: "all_time", children: "All Time" })] })] }), e.jsxs(g, { variant: "outline", size: "sm", onClick: Ae, children: [e.jsx($e, { className: "h-4 w-4 mr-2" }), "Export CSV"] })] })] }), e.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-6", children: [e.jsxs(d, { children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "Orders in Period" }), e.jsx(Y, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(m, { children: [e.jsx("div", { className: "text-2xl font-bold", children: v.length }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [o.total, " SLA breaches"] })] })] }), e.jsxs(d, { children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "Avg Accept Time" }), e.jsx(U, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(m, { children: [e.jsx("div", { className: "text-2xl font-bold", children: B(Math.round(ve)) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [o.acceptance, " delays"] })] })] }), e.jsxs(d, { children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "Avg Prep Time" }), e.jsx(se, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(m, { children: [e.jsx("div", { className: "text-2xl font-bold", children: B(Math.round(be)) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [o.kitchen, " delays"] })] })] }), e.jsxs(d, { children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "Avg Pickup Delay" }), e.jsx(te, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(m, { children: [e.jsx("div", { className: "text-2xl font-bold", children: B(Math.round(we)) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [o.rider, " delays"] })] })] }), e.jsxs(d, { children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "Avg Delivery Time" }), e.jsx(Y, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(m, { children: [e.jsx("div", { className: "text-2xl font-bold", children: B(Math.round(Se)) }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: [o.delivery, " delays"] })] })] }), e.jsxs(d, { className: o.total > 0 ? "border-red-200 bg-red-50" : "", children: [e.jsxs(u, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(j, { className: "text-sm font-medium", children: "SLA Breaches" }), e.jsx(ae, { className: `h-4 w-4 ${o.total > 0 ? "text-red-500" : "text-muted-foreground"}` })] }), e.jsxs(m, { children: [e.jsx("div", { className: `text-2xl font-bold ${o.total > 0 ? "text-red-600" : ""}`, children: o.total }), e.jsx("p", { className: "text-xs text-muted-foreground", children: ">45 min total time" })] })] })] }), e.jsxs(d, { children: [e.jsx(u, { children: e.jsxs(j, { className: "flex items-center", children: [e.jsx(Ve, { className: "h-4 w-4 mr-2" }), "Filters & Controls"] }) }), e.jsx(m, { children: e.jsxs("div", { className: "flex flex-wrap gap-4", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("label", { className: "text-sm font-medium", children: "Status:" }), e.jsxs(L, { value: h, onValueChange: (s) => C("status", s), children: [e.jsx(P, { className: "w-40", children: e.jsx(F, {}) }), e.jsxs(_, { children: [e.jsx(n, { value: "all", children: "All Status" }), e.jsx(n, { value: "confirmed", children: "Confirmed" }), e.jsx(n, { value: "accepted", children: "Accepted" }), e.jsx(n, { value: "in_progress", children: "In Progress" }), e.jsx(n, { value: "ready_for_pickup", children: "Ready" }), e.jsx(n, { value: "out_for_delivery", children: "Out for Delivery" }), e.jsx(n, { value: "delivered", children: "Delivered" }), e.jsx(n, { value: "cancelled_by_customer", children: "Cancelled by Customer" }), e.jsx(n, { value: "cancelled_by_outlet", children: "Cancelled by Outlet" })] })] })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("label", { className: "text-sm font-medium", children: "Outlet:" }), e.jsxs(L, { value: r, onValueChange: (s) => C("outlet", s), children: [e.jsx(P, { className: "w-40", children: e.jsx(F, {}) }), e.jsxs(_, { children: [e.jsx(n, { value: "all", children: "All Outlets" }), he.map((s) => e.jsx(n, { value: s, children: s }, s))] })] })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("label", { className: "text-sm font-medium", children: "Per page:" }), e.jsxs(L, { value: A.toString(), onValueChange: (s) => {
    re(parseInt(s)), w(1);
  }, children: [e.jsx(P, { className: "w-24", children: e.jsx(F, {}) }), e.jsx(_, { children: Qe.map((s) => e.jsx(n, { value: s.toString(), children: s }, s)) })] })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("input", { type: "checkbox", id: "delayed-only", checked: E, onChange: (s) => C("delayed", s.target.checked), className: "rounded" }), e.jsx("label", { htmlFor: "delayed-only", className: "text-sm font-medium", children: "Show delayed orders only" })] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", pe, "-", ue, " of ", M, " orders (July 29th+ only, no pending)"] })] }) })] }), e.jsxs(d, { children: [e.jsxs(u, { children: [e.jsx(j, { children: "Order Lifecycle Tracking" }), e.jsx(Be, { children: "Detailed timing analysis with SLA breach detection and expandable timelines" })] }), e.jsx(m, { children: Q.length === 0 ? e.jsx("p", { className: "text-center text-muted-foreground py-8", children: "No orders found with current filters" }) : e.jsxs("div", { className: "space-y-3", children: [Q.map((s) => e.jsxs("div", { className: `border rounded-lg ${s.hasSLABreach ? "border-red-200 bg-red-50" : ""}`, children: [e.jsxs("div", { className: "p-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-3", children: [e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx(g, { variant: "ghost", size: "sm", onClick: () => je(s.id), className: "p-1", children: H.has(s.id) ? e.jsx(Re, { className: "h-4 w-4" }) : e.jsx(ze, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsxs("h3", { className: "font-semibold", children: ["#", s.orderNumber] }), s.hasSLABreach && e.jsx(ae, { className: "h-4 w-4 text-red-500" })] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: [s.customerDisplayName, " \u2022 ", s.outletName] }), e.jsx("p", { className: "text-xs text-muted-foreground", children: x(s.createdAt, "MMM dd, yyyy 'at' HH:mm") })] })] }), e.jsxs("div", { className: "text-right", children: [e.jsx("p", { className: "font-semibold", children: Oe(parseFloat(s.total)) }), e.jsx(Fe, { variant: s.status === "delivered" ? "default" : s.status === "pending" ? "secondary" : s.hasSLABreach ? "destructive" : "outline", children: s.status.replace("_", " ") })] })] }), e.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center", children: [e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center justify-center space-x-1 mb-1", children: [e.jsx("span", { className: "text-lg", children: s.acceptanceIndicator }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Accept" })] }), e.jsx("p", { className: "font-mono text-sm font-semibold", children: s.timeToAcceptFormatted }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "SLA: 5m" })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center justify-center space-x-1 mb-1", children: [e.jsx("span", { className: "text-lg", children: s.prepIndicator }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Kitchen" })] }), e.jsx("p", { className: "font-mono text-sm font-semibold", children: s.prepTimeFormatted }), e.jsxs("p", { className: "text-xs text-muted-foreground", children: ["SLA: ", s.kitchenSlaThreshold || 15, "m"] })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center justify-center space-x-1 mb-1", children: [e.jsx("span", { className: "text-lg", children: s.pickupIndicator }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Pickup" })] }), e.jsx("p", { className: "font-mono text-sm font-semibold", children: s.pickupDelayFormatted }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "SLA: 10m" })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center justify-center space-x-1 mb-1", children: [e.jsx("span", { className: "text-lg", children: s.deliveryIndicator }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Delivery" })] }), e.jsx("p", { className: "font-mono text-sm font-semibold", children: s.deliveryTimeFormatted }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "SLA: 20m" })] }), e.jsxs("div", { children: [e.jsxs("div", { className: "flex items-center justify-center space-x-1 mb-1", children: [e.jsx("span", { className: "text-lg", children: s.totalIndicator }), e.jsx("span", { className: "text-xs text-muted-foreground", children: "Total" })] }), e.jsx("p", { className: "font-mono text-sm font-semibold", children: s.totalTimeFormatted }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "SLA: 45m" })] })] })] }), H.has(s.id) && e.jsxs("div", { className: "border-t bg-gray-50 p-4", children: [e.jsx("h4", { className: "font-semibold mb-3", children: "Order Timeline" }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(Y, { className: "h-4 w-4" }), e.jsx("span", { children: "Order Placed" })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.placed, "MMM dd, yyyy HH:mm:ss") })] }), s.timestamps.accepted && e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(U, { className: "h-4 w-4 text-green-500" }), e.jsx("span", { children: "Accepted by Outlet" }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(+", s.timeToAcceptFormatted, ")"] }), s.acceptedByName && e.jsxs("span", { className: "text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded", children: ["by ", s.acceptedByName] })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.accepted, "MMM dd, yyyy HH:mm:ss") })] }), s.timestamps.ready && e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(se, { className: "h-4 w-4 text-blue-500" }), e.jsx("span", { children: "Ready for Pickup" }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(+", s.prepTimeFormatted, ")"] })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.ready, "MMM dd, yyyy HH:mm:ss") })] }), s.timestamps.pickedUp && e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(te, { className: "h-4 w-4 text-orange-500" }), e.jsx("span", { children: "Out for Delivery" }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(+", s.pickupDelayFormatted, ")"] })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.pickedUp, "MMM dd, yyyy HH:mm:ss") })] }), s.timestamps.delivered && e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(U, { className: "h-4 w-4 text-green-600" }), e.jsx("span", { children: "Delivered" }), e.jsxs("span", { className: "text-xs text-muted-foreground", children: ["(+", s.deliveryTimeFormatted, ")"] })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.delivered, "MMM dd, yyyy HH:mm:ss") })] }), s.timestamps.cancelled && e.jsxs("div", { className: "flex items-center justify-between text-sm", children: [e.jsxs("span", { className: "flex items-center space-x-2", children: [e.jsx(qe, { className: "h-4 w-4 text-red-500" }), e.jsx("span", { children: "Cancelled" })] }), e.jsx("span", { className: "font-mono", children: x(s.timestamps.cancelled, "MMM dd, yyyy HH:mm:ss") })] })] }), s.hasSLABreach && e.jsxs("div", { className: "mt-4 p-3 bg-red-100 border border-red-200 rounded", children: [e.jsx("h5", { className: "font-semibold text-red-800 mb-2", children: "SLA Breaches Detected:" }), e.jsxs("div", { className: "text-sm text-red-700 space-y-1", children: [s.slaBreaches.acceptanceDelay && e.jsx("p", { children: "\u2022 Acceptance delay: Over 5 minutes to accept order" }), s.slaBreaches.kitchenDelay && e.jsx("p", { children: "\u2022 Kitchen delay: Over 15 minutes preparation time" }), s.slaBreaches.riderDelay && e.jsx("p", { children: "\u2022 Rider delay: Over 10 minutes pickup delay" }), s.slaBreaches.deliveryDelay && e.jsx("p", { children: "\u2022 Delivery delay: Over 20 minutes delivery time" }), s.slaBreaches.totalSLABreach && e.jsx("p", { children: "\u2022 Total time breach: Over 45 minutes end-to-end" })] })] }), e.jsxs("div", { className: "mt-4 p-3 bg-gray-50 border border-gray-200 rounded", children: [e.jsx("h5", { className: "font-semibold text-gray-800 mb-2", children: "Admin Tracking" }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3 text-sm", children: [e.jsxs("div", { children: [e.jsx("span", { className: "text-muted-foreground", children: "Confirmed by:" }), e.jsx("span", { className: "ml-2 font-medium", children: s.status === "pending" ? "Pending" : s.confirmedByName || "Auto-confirmed" })] }), e.jsxs("div", { children: [e.jsx("span", { className: "text-muted-foreground", children: "Accepted by:" }), e.jsx("span", { className: "ml-2 font-medium", children: s.acceptedByName || "Not tracked" })] })] })] }), e.jsxs("div", { className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded", children: [e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [e.jsxs("h5", { className: "font-semibold text-blue-800 flex items-center", children: [e.jsx(Ie, { className: "h-4 w-4 mr-2" }), "Admin Comments"] }), !K.has(s.id) && e.jsx(g, { variant: "outline", size: "sm", onClick: () => fe(s.id, s.adminComments), className: "text-xs", children: s.adminComments ? "Edit" : "Add Comment" })] }), K.has(s.id) ? e.jsxs("div", { className: "space-y-2", children: [e.jsx(_e, { placeholder: "Add comments about order delays or issues...", value: $[s.id] || "", onChange: (t) => ge(s.id, t.target.value), className: "resize-none", rows: 3, maxLength: 1e3 }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("span", { className: "text-xs text-muted-foreground", children: [($[s.id] || "").length, "/1000 characters"] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(g, { variant: "outline", size: "sm", onClick: () => ye(s.id), disabled: z.isPending, children: "Cancel" }), e.jsxs(g, { size: "sm", onClick: () => Ne(s.id), disabled: z.isPending, children: [e.jsx(Ue, { className: "h-3 w-3 mr-1" }), "Save"] })] })] })] }) : e.jsx("div", { className: "text-sm text-blue-700", children: s.adminComments ? e.jsx("p", { className: "whitespace-pre-wrap", children: s.adminComments }) : e.jsx("p", { className: "text-muted-foreground italic", children: "No comments added" }) })] })] })] }, s.id)), y > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", p, " of ", y] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(g, { variant: "outline", size: "sm", onClick: () => w(p - 1), disabled: p === 1, children: [e.jsx(Ye, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(g, { variant: "outline", size: "sm", onClick: () => w(p + 1), disabled: p === y, children: ["Next", e.jsx(Ke, { className: "h-4 w-4 ml-1" })] })] })] })] }) })] })] }) });
}
export { $s as default };
