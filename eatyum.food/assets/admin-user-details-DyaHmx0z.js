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
import { U as ee, Y as se, r as E, b as j, j as e, E as n, F as c, B as R, H as x, I as m } from "./index-DOfu0sXg.js";
import { A as I } from "./admin-layout-DH7sAIhq.js";
import { B as u } from "./badge-BAjaXL1S.js";
import { T as S, a as k, b as N, c as t, d as P, e as r } from "./table-CzdeB6gz.js";
import { T as ae, a as te, b as C, c as A } from "./tabs-qGTQ6MVs.js";
import { f as re } from "./timezone-utils-D5P8NMTs.js";
import { s as le, a as ie, L as ne } from "./lead-status-modal-DKnJBnai.js";
import { A as ce } from "./arrow-left-CK7JF7w9.js";
import { U as de } from "./user-adl9AYKF.js";
import { M as xe } from "./mail-WBbfgCoF.js";
import { P as me } from "./phone-Cx4FTVKN.js";
import { C as oe } from "./calendar-DfgMOSD7.js";
import { M as O } from "./map-pin-ChG4yLkU.js";
import { P as he } from "./phone-call-DUwUkqpA.js";
import { P as pe } from "./pen-BTOfVmxO.js";
import { S as B } from "./shopping-bag-8aLpcCGk.js";
import { C as F } from "./credit-card-6s_6kQps.js";
import { A as U } from "./award-oue7kKvF.js";
import { G as D } from "./gift-C_SZrOe8.js";
import { T as je } from "./truck-BHJTFh2e.js";
import { U as K } from "./users-CBtjfzvJ.js";
import { S as ue } from "./star-o2YGpjzJ.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./label-B38UEnoM.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./package-CpPTLD0o.js";
import "./image-Cm0cVFFU.js";
import "./store-Cr0AuVYD.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
import "./index-Czlrzsbg.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
import "./useMutation-CVmbONMy.js";
import "./dialog-BUvIuveX.js";
import "./textarea-__Yhw9VH.js";
function us() {
  const [, q] = ee("/control/users/:userId"), a = q == null ? void 0 : q.userId;
  se();
  const [H, $] = E.useState(false), [y, M] = E.useState("orders"), o = () => {
    const s = localStorage.getItem("adminToken");
    if (!s) throw new Error("No authentication token found");
    return { Authorization: `Bearer ${s}` };
  }, h = { staleTime: 6e4, gcTime: 5 * 60 * 1e3, enabled: !!a }, { data: d, isLoading: z } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}`, { headers: o() });
    if (!s.ok) {
      const p = yield s.json();
      throw new Error(p.message || "Failed to fetch user details");
    }
    return s.json();
  }) }, h), { enabled: !!a })), { data: f, isLoading: G } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "addresses"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/addresses`, { headers: o() });
    return s.ok ? s.json() : [];
  }) }, h), { enabled: !!a && y === "addresses" })), { data: T, isLoading: Ne } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "proximity"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/proximity`, { headers: o() });
    return s.ok ? s.json() : null;
  }) }, h), { enabled: !!a })), { data: w, isLoading: V } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "orders"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/orders`, { headers: o() });
    return s.ok ? s.json() : [];
  }) }, h), { enabled: !!a && y === "orders" })), { data: b, isLoading: W } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "wallet-transactions"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/wallet-transactions`, { headers: o() });
    return s.ok ? s.json() : [];
  }) }, h), { enabled: !!a && y === "wallet" })), { data: v, isLoading: Y } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "points-transactions"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/points-transactions`, { headers: o() });
    return s.ok ? s.json() : [];
  }) }, h), { enabled: !!a && y === "points" })), { data: l, isLoading: J } = j(__spreadProps(__spreadValues({ queryKey: ["/api/admin/users", a, "referrals"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/referrals`, { headers: o() });
    return s.ok ? s.json() : { statistics: { totalReferred: 0, totalEarned: 0, totalRedeemed: 0, totalOutstanding: 0 }, referredUsers: [] };
  }) }, h), { enabled: !!a && y === "referrals" })), { data: i, isLoading: ge } = j(__spreadValues({ queryKey: ["/api/admin/users", a, "lead-status"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch(`/api/admin/users/${a}/lead-status`, { headers: o() });
    return s.ok ? s.json() : null;
  }) }, h)), g = (s) => re(s), L = (s) => (typeof s == "string" ? parseFloat(s) : s).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 }), Q = (s) => {
    switch (s.toLowerCase()) {
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "confirmed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "pending":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }, _ = (s) => {
    switch (s) {
      case "Hot":
        return "bg-red-100 text-red-800 border-red-200";
      case "Good":
        return "bg-green-100 text-green-800 border-green-200";
      case "Average":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }, X = (s) => {
    const p = s.split(",").map((Z) => Z.trim());
    return p.length >= 2 ? `${p[p.length - 2]}, ${p[p.length - 1]}` : s;
  };
  return z ? e.jsx(I, { currentPage: "users", children: e.jsx("div", { className: "p-6", children: e.jsx(n, { children: e.jsx(c, { className: "p-6", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading user details..." })] }) }) }) }) }) : d ? e.jsx(I, { currentPage: "users", children: e.jsxs("div", { className: "p-6 space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs(R, { variant: "outline", size: "sm", onClick: () => window.history.back(), className: "flex items-center gap-2", children: [e.jsx(ce, { className: "h-4 w-4" }), "Back to Users"] }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "User Details" }), e.jsx("p", { className: "text-gray-600", children: "Comprehensive user information and activity history" })] })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [e.jsxs(n, { children: [e.jsx(x, { className: "pb-3", children: e.jsx(m, { className: "text-sm font-medium text-gray-600", children: "User Information" }) }), e.jsxs(c, { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [e.jsx(de, { className: "h-5 w-5 text-gray-400 shrink-0" }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium break-anywhere", children: d.fullName }), e.jsxs("p", { className: "text-sm text-gray-500", children: ["ID: #", d.id] })] })] }), e.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [e.jsx(xe, { className: "h-5 w-5 text-gray-400 shrink-0" }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium break-anywhere", children: d.email }), e.jsx("p", { className: "text-sm text-gray-500", children: "Email" })] })] }), e.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [e.jsx(me, { className: "h-5 w-5 text-gray-400 shrink-0" }), e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium break-anywhere", children: d.phone }), e.jsx("p", { className: "text-sm text-gray-500", children: "Phone" })] })] }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx(oe, { className: "h-5 w-5 text-gray-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: g(d.createdAt) }), e.jsx("p", { className: "text-sm text-gray-500", children: "Joined" })] })] }), e.jsx("div", { className: "pt-2", children: e.jsx(u, { variant: d.isVerified ? "default" : "secondary", children: d.isVerified ? "Verified Account" : "Unverified" }) })] })] }), e.jsxs(n, { children: [e.jsx(x, { className: "pb-3", children: e.jsx(m, { className: "text-sm font-medium text-gray-600", children: "Financial Overview" }) }), e.jsxs(c, { className: "space-y-4", children: [e.jsxs("div", { className: "text-center p-3 bg-blue-50 rounded-lg", children: [e.jsxs("p", { className: "text-xl font-bold text-blue-600", children: ["\u20A6", d.walletBalance ? L(Number(d.walletBalance) / 100) : "0.00"] }), e.jsx("p", { className: "text-sm text-gray-600", children: "Wallet Balance" })] }), e.jsxs("div", { className: "text-center p-3 bg-purple-50 rounded-lg", children: [e.jsx("p", { className: "text-xl font-bold text-purple-600", children: d.pointsBalance || 0 }), e.jsx("p", { className: "text-sm text-gray-600", children: "Points Balance" })] })] })] }), e.jsxs(n, { children: [e.jsx(x, { className: "pb-3", children: e.jsx(m, { className: "text-sm font-medium text-gray-600", children: "Order Statistics" }) }), e.jsxs(c, { className: "space-y-4", children: [e.jsxs("div", { className: "text-center p-3 bg-red-50 rounded-lg", children: [e.jsx("p", { className: "text-xl font-bold text-red-600", children: d.totalOrders || 0 }), e.jsx("p", { className: "text-sm text-gray-600", children: "Total Orders" })] }), e.jsxs("div", { className: "text-center p-3 bg-green-50 rounded-lg", children: [e.jsxs("p", { className: "text-xl font-bold text-green-600", children: ["\u20A6", d.totalSpent ? L(d.totalSpent) : "0.00"] }), e.jsx("p", { className: "text-sm text-gray-600", children: "Total Spent" })] })] })] })] }), T && e.jsxs(n, { children: [e.jsx(x, { className: "pb-3", children: e.jsxs(m, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(O, { className: "h-4 w-4" }), "Lead Classification & Proximity"] }) }), e.jsx(c, { children: e.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { className: "text-center", children: [e.jsxs("p", { className: "text-2xl font-bold text-gray-800", children: [T.distanceToNearestOutlet.toFixed(1), " km"] }), e.jsx("p", { className: "text-xs text-gray-500", children: "to nearest outlet" })] }), e.jsx("div", { className: "border-l border-gray-300 h-12 mx-2" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-700", children: T.nearestOutletName }), e.jsx("p", { className: "text-xs text-gray-500", children: "Nearest magoka location" })] })] }), e.jsxs(u, { className: `${_(T.leadType)} border font-medium`, children: [T.leadType, " Lead"] })] }) })] }), e.jsxs(n, { children: [e.jsxs(x, { className: "pb-3 flex flex-row items-center justify-between", children: [e.jsxs(m, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(he, { className: "h-4 w-4" }), "Lead Status & Contact History"] }), e.jsxs(R, { size: "sm", onClick: () => $(true), className: "flex items-center gap-2", children: [e.jsx(pe, { className: "h-4 w-4" }), "Update Status"] })] }), e.jsx(c, { children: i ? e.jsx("div", { className: "space-y-4", children: e.jsx("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { className: "text-sm text-gray-600", children: "Current Status:" }), e.jsx(u, { className: `${le[i.status]} border font-medium`, children: ie[i.status] })] }), i.notes && e.jsxs("div", { className: "text-sm break-anywhere", children: [e.jsx("span", { className: "text-gray-600", children: "Notes:" }), e.jsx("p", { className: "text-gray-800 mt-1", children: i.notes })] }), i.lastContactedAt && e.jsxs("div", { className: "text-sm text-gray-600", children: ["Last contacted: ", g(i.lastContactedAt)] }), i.updatedByAdmin && e.jsxs("div", { className: "text-sm text-gray-600", children: ["Updated by: ", i.updatedByAdmin.fullName, " (", i.updatedByAdmin.role, ")"] }), e.jsxs("div", { className: "text-xs text-gray-500", children: ["Last updated: ", g(i.updatedAt)] })] }) }) }) : e.jsxs("div", { className: "text-center p-4 bg-gray-50 rounded-lg", children: [e.jsx("p", { className: "text-sm text-gray-600", children: "No lead status recorded yet" }), e.jsx(R, { size: "sm", variant: "outline", onClick: () => $(true), className: "mt-2", children: "Add First Contact" })] }) })] }), e.jsx(ne, { isOpen: H, onClose: () => $(false), userId: parseInt(a || "0"), currentStatus: i == null ? void 0 : i.status, currentNotes: i == null ? void 0 : i.notes }), e.jsxs(ae, { value: y, onValueChange: M, className: "space-y-6", children: [e.jsxs(te, { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 w-full h-auto sm:h-10", children: [e.jsxs(C, { value: "orders", className: "flex items-center gap-2", children: [e.jsx(B, { className: "h-4 w-4" }), "Orders (", (w == null ? void 0 : w.length) || 0, ")"] }), e.jsxs(C, { value: "wallet", className: "flex items-center gap-2", children: [e.jsx(F, { className: "h-4 w-4" }), "Wallet (", (b == null ? void 0 : b.length) || 0, ")"] }), e.jsxs(C, { value: "points", className: "flex items-center gap-2", children: [e.jsx(U, { className: "h-4 w-4" }), "Points (", (v == null ? void 0 : v.length) || 0, ")"] }), e.jsxs(C, { value: "referrals", className: "flex items-center gap-2", children: [e.jsx(D, { className: "h-4 w-4" }), "Referrals (", (l == null ? void 0 : l.statistics.totalReferred) || 0, ")"] }), e.jsxs(C, { value: "addresses", className: "flex items-center gap-2", children: [e.jsx(O, { className: "h-4 w-4" }), "Addresses (", (f == null ? void 0 : f.length) || 0, ")"] })] }), e.jsx(A, { value: "orders", children: e.jsxs(n, { children: [e.jsx(x, { children: e.jsxs(m, { className: "flex items-center gap-2", children: [e.jsx(B, { className: "h-5 w-5" }), "Order History"] }) }), e.jsx(c, { children: V ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading orders..." })] }) : w && w.length > 0 ? e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(S, { className: "table-fixed min-w-[820px]", children: [e.jsx(k, { children: e.jsxs(N, { children: [e.jsx(t, { className: "w-[130px]", children: "Order #" }), e.jsx(t, { className: "w-[100px]", children: "Status" }), e.jsx(t, { className: "w-[105px]", children: "Type" }), e.jsx(t, { className: "w-[95px]", children: "Outlet" }), e.jsx(t, { className: "w-[100px] text-right", children: "Amount" }), e.jsx(t, { className: "w-[90px] text-right", children: "Delivery" }), e.jsx(t, { className: "w-[90px] text-right", children: "Discount" }), e.jsx(t, { className: "w-[110px]", children: "Date" })] }) }), e.jsx(P, { children: w.map((s) => e.jsxs(N, { children: [e.jsxs(r, { className: "truncate font-medium", title: `#${s.orderNumber}`, children: ["#", s.orderNumber] }), e.jsx(r, { className: "whitespace-nowrap", children: e.jsx(u, { className: Q(s.status), children: s.status.replace("_", " ") }) }), e.jsx(r, { className: "whitespace-nowrap", children: e.jsxs("div", { className: "flex items-center gap-1", children: [s.orderType === "delivery" ? e.jsx(je, { className: "h-4 w-4 shrink-0" }) : e.jsx(B, { className: "h-4 w-4 shrink-0" }), e.jsx("span", { className: "truncate", children: s.orderType })] }) }), e.jsx(r, { className: "truncate", children: s.outletName }), e.jsxs(r, { className: "whitespace-nowrap text-right tabular-nums", children: ["\u20A6", L(s.totalAmount)] }), e.jsxs(r, { className: "whitespace-nowrap text-right tabular-nums", children: ["\u20A6", L(s.deliveryFee)] }), e.jsxs(r, { className: "whitespace-nowrap text-right tabular-nums", children: ["\u20A6", L(s.promoDiscount)] }), e.jsx(r, { className: "whitespace-nowrap", children: g(s.createdAt) })] }, s.id)) })] }) }) : e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(B, { className: "h-12 w-12 mx-auto mb-3 text-gray-300" }), e.jsx("p", { children: "No orders found" }), e.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "This user hasn't placed any orders yet" })] }) })] }) }), e.jsx(A, { value: "wallet", children: e.jsxs(n, { children: [e.jsx(x, { children: e.jsxs(m, { className: "flex items-center gap-2", children: [e.jsx(F, { className: "h-5 w-5" }), "Wallet Transactions"] }) }), e.jsx(c, { children: W ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading transactions..." })] }) : b && b.length > 0 ? e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(S, { className: "table-fixed min-w-[620px]", children: [e.jsx(k, { children: e.jsxs(N, { children: [e.jsx(t, { className: "w-[110px]", children: "Type" }), e.jsx(t, { className: "w-[140px] text-right", children: "Amount" }), e.jsx(t, { className: "w-[130px]", children: "Description" }), e.jsx(t, { className: "w-[120px]", children: "Source" }), e.jsx(t, { className: "w-[120px]", children: "Date" })] }) }), e.jsx(P, { children: b.map((s) => e.jsxs(N, { children: [e.jsx(r, { className: "whitespace-nowrap", children: e.jsx(u, { className: "whitespace-nowrap", variant: s.type === "credit" ? "default" : "secondary", children: s.type }) }), e.jsxs(r, { className: `whitespace-nowrap text-right tabular-nums ${s.type === "credit" ? "text-green-600 font-medium" : "text-red-600 font-medium"}`, children: [s.type === "credit" ? "+" : "-", "\u20A6", L(s.amount / 100)] }), e.jsx(r, { className: "truncate", title: s.description, children: s.description }), e.jsx(r, { className: "truncate", title: s.source, children: s.source }), e.jsx(r, { className: "whitespace-nowrap", children: g(s.createdAt) })] }, s.id)) })] }) }) : e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(F, { className: "h-12 w-12 mx-auto mb-3 text-gray-300" }), e.jsx("p", { children: "No wallet transactions found" }), e.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "This user hasn't had any wallet activity yet" })] }) })] }) }), e.jsx(A, { value: "points", children: e.jsxs(n, { children: [e.jsx(x, { children: e.jsxs(m, { className: "flex items-center gap-2", children: [e.jsx(U, { className: "h-5 w-5" }), "Points Transactions"] }) }), e.jsx(c, { children: Y ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading points..." })] }) : v && v.length > 0 ? e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(S, { className: "table-fixed min-w-[610px]", children: [e.jsx(k, { children: e.jsxs(N, { children: [e.jsx(t, { className: "w-[110px]", children: "Type" }), e.jsx(t, { className: "w-[100px] text-right", children: "Points" }), e.jsx(t, { className: "w-[160px]", children: "Description" }), e.jsx(t, { className: "w-[120px]", children: "Source" }), e.jsx(t, { className: "w-[120px]", children: "Date" })] }) }), e.jsx(P, { children: v.map((s) => e.jsxs(N, { children: [e.jsx(r, { className: "whitespace-nowrap", children: e.jsx(u, { className: "whitespace-nowrap", variant: s.type === "earned" ? "default" : "secondary", children: s.type }) }), e.jsxs(r, { className: `whitespace-nowrap text-right tabular-nums ${s.type === "earned" ? "text-green-600 font-medium" : "text-red-600 font-medium"}`, children: [s.type === "earned" ? "+" : "-", s.points] }), e.jsx(r, { className: "truncate", title: s.description, children: s.description }), e.jsx(r, { className: "truncate", title: s.source, children: s.source }), e.jsx(r, { className: "whitespace-nowrap", children: g(s.createdAt) })] }, s.id)) })] }) }) : e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(U, { className: "h-12 w-12 mx-auto mb-3 text-gray-300" }), e.jsx("p", { children: "No points transactions found" }), e.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "This user hasn't earned or redeemed any points yet" })] }) })] }) }), e.jsx(A, { value: "referrals", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [e.jsx(n, { children: e.jsx(c, { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Referred" }), e.jsx("p", { className: "text-2xl font-bold text-gray-900", children: (l == null ? void 0 : l.statistics.totalReferred) || 0 })] }), e.jsx(K, { className: "h-8 w-8 text-blue-500" })] }) }) }), e.jsx(n, { children: e.jsx(c, { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Earned" }), e.jsxs("p", { className: "text-2xl font-bold text-green-600", children: ["\u20A6", Number((l == null ? void 0 : l.statistics.totalEarned) || 0).toLocaleString()] })] }), e.jsx(F, { className: "h-8 w-8 text-green-500" })] }) }) }), e.jsx(n, { children: e.jsx(c, { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Total Redeemed" }), e.jsxs("p", { className: "text-2xl font-bold text-blue-600", children: ["\u20A6", Number((l == null ? void 0 : l.statistics.totalRedeemed) || 0).toLocaleString()] })] }), e.jsx(U, { className: "h-8 w-8 text-blue-500" })] }) }) }), e.jsx(n, { children: e.jsx(c, { className: "p-4", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-600", children: "Outstanding Balance" }), e.jsxs("p", { className: "text-2xl font-bold text-purple-600", children: ["\u20A6", Number((l == null ? void 0 : l.statistics.totalOutstanding) || 0).toLocaleString()] })] }), e.jsx(D, { className: "h-8 w-8 text-purple-500" })] }) }) })] }), e.jsxs(n, { children: [e.jsx(x, { children: e.jsxs(m, { className: "flex items-center gap-2", children: [e.jsx(K, { className: "h-5 w-5" }), "Referred Users"] }) }), e.jsx(c, { children: J ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading referral details..." })] }) : l && l.referredUsers.length > 0 ? e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(S, { className: "table-fixed min-w-[780px]", children: [e.jsx(k, { children: e.jsxs(N, { children: [e.jsx(t, { className: "w-[140px]", children: "User" }), e.jsx(t, { className: "w-[160px]", children: "Contact" }), e.jsx(t, { className: "w-[100px]", children: "Joined" }), e.jsx(t, { className: "w-[90px]", children: "Ordered" }), e.jsx(t, { className: "w-[85px] text-right", children: "Orders" }), e.jsx(t, { className: "w-[105px] text-right", children: "Spent" })] }) }), e.jsx(P, { children: l.referredUsers.map((s) => e.jsxs(N, { children: [e.jsx(r, { className: "font-medium", children: e.jsxs("div", { children: [e.jsx("p", { className: "font-medium truncate", children: s.fullName }), e.jsxs("p", { className: "text-xs text-gray-500", children: ["ID: #", s.id] })] }) }), e.jsx(r, { children: e.jsxs("div", { className: "text-sm", children: [e.jsx("p", { className: "truncate", children: s.email }), e.jsx("p", { className: "text-gray-500 truncate", children: s.phone })] }) }), e.jsx(r, { className: "whitespace-nowrap", children: g(s.createdAt) }), e.jsx(r, { className: "whitespace-nowrap", children: e.jsx(u, { className: s.hasOrdered ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-800 border-gray-200", children: s.hasOrdered ? "Yes" : "No" }) }), e.jsx(r, { className: "whitespace-nowrap text-right tabular-nums", children: s.totalOrders || 0 }), e.jsxs(r, { className: "whitespace-nowrap text-right tabular-nums", children: ["\u20A6", Number(s.totalSpent || 0).toLocaleString()] })] }, s.id)) })] }) }) : e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(D, { className: "h-12 w-12 mx-auto mb-3 text-gray-300" }), e.jsx("p", { children: "No referrals found" }), e.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "This user hasn't referred anyone yet" })] }) })] })] }) }), e.jsx(A, { value: "addresses", children: e.jsxs(n, { children: [e.jsx(x, { children: e.jsxs(m, { className: "flex items-center gap-2", children: [e.jsx(O, { className: "h-5 w-5" }), "Saved Addresses"] }) }), e.jsx(c, { children: G ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading addresses..." })] }) : f && f.length > 0 ? e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: f.map((s) => e.jsxs("div", { className: "p-4 border rounded-lg bg-gray-50", children: [e.jsx("div", { className: "flex items-start justify-between mb-2", children: e.jsxs("div", { className: "flex items-center gap-2", children: [s.addressName && e.jsx("span", { className: "text-sm font-medium text-gray-700", children: s.addressName }), s.isPrimary && e.jsxs(u, { variant: "secondary", className: "text-xs", children: [e.jsx(ue, { className: "h-3 w-3 mr-1" }), "Primary"] })] }) }), e.jsx("p", { className: "text-sm text-gray-600 mb-2", children: X(s.fullAddress) }), s.latitude && s.longitude && e.jsxs("p", { className: "text-xs text-gray-400", children: ["Coordinates: ", s.latitude, ", ", s.longitude] })] }, s.id)) }) : e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(O, { className: "h-12 w-12 mx-auto mb-3 text-gray-300" }), e.jsx("p", { children: "No saved addresses found" }), e.jsx("p", { className: "text-sm text-gray-400 mt-1", children: "This user hasn't saved any delivery addresses yet" })] }) })] }) })] })] }) }) : e.jsx(I, { currentPage: "users", children: e.jsx("div", { className: "p-6", children: e.jsx(n, { children: e.jsx(c, { className: "p-6", children: e.jsx("div", { className: "text-center text-red-600", children: e.jsx("p", { children: "User not found" }) }) }) }) }) });
}
export { us as default };
