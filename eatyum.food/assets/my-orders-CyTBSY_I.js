import { r as j, c as F, b as L, j as e, E as i, F as c, ab as w, L as x, B as o, T as f, i as B } from "./index-DOfu0sXg.js";
import { B as O } from "./badge-BAjaXL1S.js";
import { I as A } from "./input-FyV2XACZ.js";
import { S as E, a as P, b as R, c as M, d as r } from "./select-ets7bQkN.js";
import { H as y } from "./header-C5DANLb6.js";
import { g as t } from "./status-utils-BojSicDw.js";
import { f as D } from "./currency-cZDvJQzL.js";
import { f as I, h as z } from "./timezone-utils-D5P8NMTs.js";
import { A as V } from "./arrow-left-CK7JF7w9.js";
import { S as $ } from "./search-BFN4Wc19.js";
import { P as h } from "./package-CpPTLD0o.js";
import { E as q } from "./eye-DhxFEmT5.js";
import { R as H } from "./rotate-ccw-DOK3eGbZ.js";
import { C as Q } from "./credit-card-6s_6kQps.js";
import { C as N } from "./clock-DQ0X7PrC.js";
import { T as K } from "./truck-BHJTFh2e.js";
import { C as b } from "./circle-x-ve1y_gH0.js";
import { R as X } from "./refresh-cw-C5dId60a.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./product-search-DjJMGOuy.js";
import "./index-Czlrzsbg.js";
import "./chevron-right-DkUlsPHD.js";
import "./use-scheduled-delivery-QXJaYNqy.js";
import "./dialog-BUvIuveX.js";
import "./label-B38UEnoM.js";
import "./auth-AqNcfriC.js";
import "./useReferralReward-BeyZodYI.js";
import "./gift-C_SZrOe8.js";
import "./mail-WBbfgCoF.js";
import "./smartphone-DMb4mbpx.js";
import "./useMutation-CVmbONMy.js";
import "./use-auth-d_ltKWkf.js";
import "./minus-zDmsn0vk.js";
import "./plus-xl2HqeIg.js";
import "./menu-B9h4oOjs.js";
import "./user-adl9AYKF.js";
import "./wallet-e6BSu-fo.js";
import "./star-o2YGpjzJ.js";
import "./shopping-cart-C1hOzoyN.js";
import "./map-pin-ChG4yLkU.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
const v = { unpaid: { color: "bg-red-50 text-red-700", icon: Q, customerText: "Payment incomplete" }, pending: { color: "bg-yellow-100 text-yellow-800", icon: N, customerText: "Payment confirmed" }, confirmed: { color: "bg-yellow-100 text-yellow-800", icon: N, customerText: "Payment confirmed" }, accepted: { color: "bg-blue-100 text-blue-800", icon: f, customerText: "Preparing your order" }, in_progress: { color: "bg-rgb(240, 40, 25, 0.1) #F02819800", icon: h, customerText: "Being prepared" }, ready_for_pickup: { color: "bg-green-100 text-green-800", icon: h, customerText: "Ready for pickup" }, out_for_delivery: { color: "bg-purple-100 text-purple-800", icon: K, customerText: "Out for delivery" }, delivered: { color: "bg-green-100 text-green-800", icon: f, customerText: "Delivered" }, cancelled_by_customer: { color: "bg-red-100 text-red-800", icon: b, customerText: "Cancelled by you" }, cancelled_by_outlet: { color: "bg-red-100 text-red-800", icon: b, customerText: "Cancelled by restaurant" }, failed: { color: "bg-red-100 text-red-800", icon: w, customerText: "Order failed" }, refunded: { color: "bg-gray-100 text-gray-800", icon: X, customerText: "Refunded" } };
function $e() {
  const [n, C] = j.useState(""), [m, _] = j.useState("all");
  F();
  const { data: a, isLoading: T, error: u } = L({ queryKey: ["/api/orders/my-orders"], queryFn: B({ on401: "throw" }) }), g = u instanceof Error ? u.message : "", S = g.includes("401") || g.includes("403"), l = (a == null ? void 0 : a.filter((s) => {
    const d = s.orderNumber.toLowerCase().includes(n.toLowerCase()) || s.outletName.toLowerCase().includes(n.toLowerCase()), p = m === "all" || s.status === m;
    return d && p;
  })) || [], k = (s) => {
    const d = v[s] || v.pending, p = d.icon;
    return e.jsxs(O, { className: `${d.color} flex items-center gap-1`, children: [e.jsx(p, { className: "h-3 w-3" }), t(s)] });
  };
  return u ? e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx(y, { onCartClick: () => {
  } }), e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: e.jsx(i, { children: e.jsx(c, { className: "p-12", children: e.jsxs("div", { className: "text-center text-red-600", children: [e.jsx(w, { className: "h-12 w-12 mx-auto mb-4" }), e.jsx("h2", { className: "text-xl font-semibold mb-2", children: "Error Loading Orders" }), e.jsx("p", { children: S ? "Your session has expired. Please sign in again and retry." : "Please try again later or contact support if the problem persists." }), e.jsx(x, { href: "/", children: e.jsx(o, { className: "mt-4", children: "Back to Menu" }) })] }) }) }) })] }) : e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx(y, { onCartClick: () => {
  } }), e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center space-x-4", children: [e.jsx(x, { href: "/", children: e.jsxs(o, { variant: "ghost", size: "sm", className: "flex items-center space-x-2", children: [e.jsx(V, { className: "h-4 w-4" }), e.jsx("span", { children: "Back to Menu" })] }) }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "My Orders" }), e.jsx("p", { className: "text-gray-600", children: "Track your order history and current deliveries" })] })] }) }), e.jsx(i, { className: "bg-white shadow-sm", children: e.jsx(c, { className: "p-6", children: e.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [e.jsxs("div", { className: "relative flex-1", children: [e.jsx($, { className: "absolute left-3 top-3 h-4 w-4 text-gray-400" }), e.jsx(A, { placeholder: "Search by order number or restaurant...", value: n, onChange: (s) => C(s.target.value), className: "pl-10" })] }), e.jsx("div", { className: "sm:w-64", children: e.jsxs(E, { value: m, onValueChange: _, children: [e.jsx(P, { children: e.jsx(R, { placeholder: "Filter by status" }) }), e.jsxs(M, { children: [e.jsx(r, { value: "all", children: "All Orders" }), e.jsx(r, { value: "unpaid", children: t("unpaid") }), e.jsx(r, { value: "pending", children: t("pending") }), e.jsx(r, { value: "accepted", children: t("accepted") }), e.jsx(r, { value: "in_progress", children: t("in_progress") }), e.jsx(r, { value: "ready_for_pickup", children: t("ready_for_pickup") }), e.jsx(r, { value: "out_for_delivery", children: t("out_for_delivery") }), e.jsx(r, { value: "delivered", children: t("delivered") }), e.jsx(r, { value: "cancelled_by_customer", children: t("cancelled_by_customer") }), e.jsx(r, { value: "cancelled_by_outlet", children: t("cancelled_by_outlet") }), e.jsx(r, { value: "failed", children: t("failed") }), e.jsx(r, { value: "refunded", children: t("refunded") })] })] }) })] }) }) }), T ? e.jsxs("div", { className: "text-center py-12", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 yum-border-primary mx-auto" }), e.jsx("p", { className: "mt-4 text-gray-600", children: "Loading your orders..." })] }) : l.length === 0 ? e.jsx(i, { className: "bg-white shadow-sm", children: e.jsx(c, { className: "py-12", children: e.jsx("div", { className: "text-center text-gray-500", children: n || m !== "all" ? e.jsxs(e.Fragment, { children: [e.jsx(h, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }), e.jsx("h3", { className: "text-lg font-medium mb-2", children: "No orders found" }), e.jsx("p", { children: "Try adjusting your search or filter criteria." })] }) : e.jsxs(e.Fragment, { children: [e.jsx(h, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }), e.jsx("h3", { className: "text-lg font-medium mb-2", children: "No orders yet" }), e.jsx("p", { children: "Start browsing our menu to place your first order!" }), e.jsx(x, { href: "/", children: e.jsx(o, { className: "mt-4 yum-btn-primary", children: "Start Ordering" }) })] }) }) }) }) : e.jsx("div", { className: "space-y-4", children: l.map((s) => e.jsx(i, { className: "bg-white shadow-sm hover:shadow-md transition-shadow", children: e.jsx(c, { className: "p-6", children: e.jsx("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: e.jsxs("div", { className: "flex-1", children: [e.jsxs("div", { className: "flex items-start justify-between mb-4", children: [e.jsxs("div", { children: [e.jsxs("h3", { className: "font-semibold text-lg text-gray-900", children: ["Order #", s.orderNumber] }), e.jsx("p", { className: "text-gray-600 font-medium", children: s.outletName }), e.jsxs("p", { className: "text-sm text-gray-500", children: [s.itemCount, " item", s.itemCount !== 1 ? "s" : "", " \u2022 ", s.orderType] })] }), e.jsxs("div", { className: "text-right", children: [e.jsx("p", { className: "font-bold text-lg text-gray-900", children: D(s.total) }), e.jsxs("p", { className: "text-sm text-gray-500", children: [I(s.createdAt), " \u2022 ", z(s.createdAt)] })] })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("div", { children: k(s.status) }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(o, { variant: "outline", size: "sm", className: "flex items-center gap-1", asChild: true, children: e.jsxs(x, { href: `/orders/${s.orderNumber}/track`, children: [e.jsx(q, { className: "h-3 w-3" }), "View Details"] }) }), (s.status === "delivered" || s.status === "cancelled_by_customer" || s.status === "cancelled_by_outlet") && e.jsxs(o, { variant: "outline", size: "sm", className: "flex items-center gap-1", children: [e.jsx(H, { className: "h-3 w-3" }), "Reorder"] })] })] })] }) }) }) }, s.id)) }), l.length > 0 && e.jsx(i, { className: "bg-white shadow-sm", children: e.jsx(c, { className: "p-4", children: e.jsxs("div", { className: "text-center text-gray-600", children: ["Showing ", l.length, " order", l.length !== 1 ? "s" : "", a && l.length !== a.length && ` of ${a.length} total`] }) }) })] }) })] });
}
export { $e as default };
