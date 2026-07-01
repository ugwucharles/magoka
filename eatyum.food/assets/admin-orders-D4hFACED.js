var __defProp = Object.defineProperty;
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
import { j as e, r, c as da, Y as ca, a1 as oa, b as xe, E as D, F as A, B as c, H as E, I, T as ae, X as ma, a2 as Te, L as ys, W as U, a6 as se, a7 as Q, i as mt } from "./index-DOfu0sXg.js";
import { u as De } from "./useMutation-CVmbONMy.js";
import { u as ua, h as Ae, A as ut, P as xa, a as ha, b as pa } from "./admin-layout-DH7sAIhq.js";
import { I as he } from "./input-FyV2XACZ.js";
import { T as ja } from "./textarea-__Yhw9VH.js";
import { B as te } from "./badge-BAjaXL1S.js";
import { L as K } from "./label-B38UEnoM.js";
import { C as ga } from "./checkbox-CrTtWijP.js";
import { S as W, a as H, b as Y, c as G, d as n } from "./select-ets7bQkN.js";
import { T as xt, a as ht, b as Ue, c as j, d as pt, e as g } from "./table-CzdeB6gz.js";
import { T as fa, a as va, b as pe, c as je } from "./tabs-qGTQ6MVs.js";
import { D as Qe, a as We, b as He, c as Ye, d as Ge, f as Xe } from "./dialog-BUvIuveX.js";
import { P as Na } from "./progress-yPUB44od.js";
import { A as ya, a as ba, b as wa, c as Sa, d as Oa, e as Ca, f as Pa, g as ka } from "./alert-dialog-Dg4XC4Tp.js";
import { P as jt } from "./permission-gate-BcxqpHQ-.js";
import { a as gt, f as ft, g as Ct, b as Ta, c as Da, d as Aa } from "./timezone-utils-D5P8NMTs.js";
import { a as bs, b as Ra, c as Fa } from "./status-utils-BojSicDw.js";
import { f as Re } from "./currency-cZDvJQzL.js";
import { b as Ea, n as vt, f as Fe, O as Ia, c as $a, g as _a, P as La } from "./order-receipt-dialog-fyimRXC9.js";
import { R as ws } from "./refresh-cw-C5dId60a.js";
import { D as Nt } from "./download-ukPRPFea.js";
import { T as yt } from "./triangle-alert-BZPq43t0.js";
import { C as es } from "./clock-DQ0X7PrC.js";
import { P as Ze } from "./package-CpPTLD0o.js";
import { T as Ba } from "./trending-up-bEYf6wvk.js";
import { F as qa } from "./filter-56Ct97Iz.js";
import { S as Ma } from "./search-BFN4Wc19.js";
import { C as za } from "./chevron-down-DegxUQDE.js";
import { C as Ps } from "./credit-card-6s_6kQps.js";
import { C as Ka } from "./calendar-DfgMOSD7.js";
import { A as Ss } from "./archive-D-BZa83x.js";
import { C as ge } from "./chevron-left-Cnh0-uPi.js";
import { C as fe } from "./chevron-right-DkUlsPHD.js";
import { E as bt } from "./eye-DhxFEmT5.js";
import { R as Os } from "./rotate-ccw-DOK3eGbZ.js";
import { F as Va } from "./file-spreadsheet-6rHXWmH4.js";
import { T as Cs } from "./trash-2-MFuZdLCA.js";
import { T as Pt } from "./timer-DMHaMGok.js";
import { T as Ua } from "./truck-BHJTFh2e.js";
import { C as Je } from "./circle-x-ve1y_gH0.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./plus-xl2HqeIg.js";
import "./map-pin-ChG4yLkU.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./store-Cr0AuVYD.js";
import "./users-CBtjfzvJ.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./index-CxKYTSZE.js";
import "./check-AkIa94Y-.js";
import "./chevron-up-Cu4mgTvm.js";
import "./index-Czlrzsbg.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
import "./file-text-BbJNGgaq.js";
const wt = ["Customer unreachable after multiple attempts", "Customer refused delivery", "Incorrect or inaccessible delivery address", "Payment verification failed", "Out of stock after order confirmation", "Kitchen unable to fulfill order", "Rider unavailable", "Other"], St = ["Order failed and customer requested refund", "Duplicate order placed in error", "Item quality issue reported by customer", "Significant delay \u2014 customer requested cancellation", "Wrong items delivered", "Customer no longer wants the order", "Other"];
class Qa extends r.Component {
  constructor(v) {
    super(v), this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(v) {
    return { hasError: true, error: v };
  }
  componentDidCatch(v, N) {
    console.error("[AdminOrders] Render error caught by boundary:", v, N);
  }
  render() {
    var v;
    return this.state.hasError ? e.jsx("div", { className: "p-6", children: e.jsxs("div", { className: "rounded-lg border border-red-200 bg-red-50 p-6 text-center", children: [e.jsx("h2", { className: "text-lg font-semibold text-red-800 mb-2", children: "Something went wrong" }), e.jsx("p", { className: "text-red-600 mb-4", children: ((v = this.state.error) == null ? void 0 : v.message) || "Failed to render the orders page." }), e.jsx("button", { className: "inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700", onClick: () => {
      this.setState({ hasError: false, error: null }), window.location.reload();
    }, children: "Reload Page" })] }) }) : this.props.children;
  }
}
const Ot = { unpaid: { color: "bg-red-50 text-red-700", icon: Ps }, pending: { color: "bg-yellow-100 text-yellow-800", icon: es }, confirmed: { color: "bg-green-100 text-green-800", icon: ae }, accepted: { color: "bg-blue-100 text-blue-800", icon: ae }, in_progress: { color: "bg-orange-100 text-orange-800", icon: Ze }, awaiting_pickup: { color: "bg-indigo-100 text-indigo-800", icon: Ze }, ready_for_pickup: { color: "bg-green-100 text-green-800", icon: Ze }, out_for_delivery: { color: "bg-purple-100 text-purple-800", icon: Ua }, delivered: { color: "bg-green-100 text-green-800", icon: ae }, completed: { color: "bg-emerald-100 text-emerald-800", icon: ae }, cancelled_by_customer: { color: "bg-red-100 text-red-800", icon: Je }, cancelled_by_outlet: { color: "bg-red-100 text-red-800", icon: Je }, failed: { color: "bg-red-100 text-red-800", icon: Je }, refunded: { color: "bg-gray-100 text-gray-800", icon: Je } }, Wa = { draft: { label: "Payout Draft", className: "bg-gray-100 text-gray-700 border-gray-200" }, pending_admin_approval: { label: "Payout Pending", className: "bg-amber-100 text-amber-800 border-amber-200" }, rejected: { label: "Payout Rejected", className: "bg-rose-100 text-rose-700 border-rose-200" }, failed: { label: "Payout Failed", className: "bg-red-100 text-red-700 border-red-200" }, paid: { label: "Payout Paid", className: "bg-emerald-100 text-emerald-700 border-emerald-200" } };
function Ha({ startTime: f }) {
  const [v, N] = r.useState("");
  return r.useEffect(() => {
    const $ = () => {
      const _ = Aa(f);
      N(_.formatted);
    };
    $();
    const P = setInterval($, 1e3);
    return () => clearInterval(P);
  }, [f]), e.jsxs("div", { className: "flex items-center gap-1 text-sm text-gray-600", children: [e.jsx(Pt, { className: "h-3 w-3" }), e.jsx("span", { children: v })] });
}
function Ya({ scheduledAt: f }) {
  const [v, N] = r.useState(""), [$, P] = r.useState(false);
  return r.useEffect(() => {
    const _ = () => {
      const X = Ct(f);
      N(X.formatted), P(X.isUrgent);
    };
    _();
    const F = setInterval(_, 1e3);
    return () => clearInterval(F);
  }, [f]), e.jsxs("div", { className: `flex items-center gap-1 text-sm ${$ ? "text-red-600 font-medium" : "text-blue-600"}`, children: [e.jsx(es, { className: "h-3 w-3" }), e.jsx("span", { children: v })] });
}
function Ga({ preparationStartTime: f, estimatedPreparationTime: v }) {
  const [N, $] = r.useState(0);
  r.useEffect(() => {
    if (!f) {
      $(0);
      return;
    }
    const J = () => {
      const ss = (/* @__PURE__ */ new Date()).getTime(), d = new Date(f).getTime(), h = Math.floor((ss - d) / 1e3), ts = (v || 15) * 60 - h;
      $(ts);
    };
    J();
    const b = setInterval(J, 1e3);
    return () => clearInterval(b);
  }, [f, v]);
  const P = N < 0, _ = Math.abs(N), F = Math.floor(_ / 60), X = _ % 60, y = () => P ? "text-red-600" : N <= 300 ? "text-orange-600" : "text-green-600";
  return e.jsxs("div", { className: `flex items-center gap-1 text-sm font-medium ${y()}`, children: [e.jsx(Pt, { className: "h-3 w-3" }), e.jsxs("span", { children: [P ? "-" : "", F, ":", X.toString().padStart(2, "0")] })] });
}
const Xa = [25, 50, 100];
function ml() {
  return e.jsx(Qa, { children: e.jsx(Ja, {}) });
}
function Ja() {
  var _a2, _b, _c, _d;
  var st, tt, at, rt, lt, nt, it, dt, ct;
  const [f, v] = r.useState(""), [N, $] = r.useState("all"), [P, _] = r.useState("all"), [F, X] = r.useState("all"), [y, J] = r.useState([]), [b, ss] = r.useState("live"), [d, h] = r.useState(1), [re, ts] = r.useState(50), kt = r.useDeferredValue(f.trim()), [Tt, ks] = r.useState(false), [Dt, At] = r.useState(null), [Rt, Ee] = r.useState(false), [Ts, Ds] = r.useState(null), [Ft, As] = r.useState(""), [Za, Rs] = r.useState(""), [Z, as] = r.useState(""), [ve, rs] = r.useState(""), [Et, Ie] = r.useState(false), [le, ls] = r.useState(null), [k, Fs] = r.useState(""), [ne, $e] = r.useState(""), [ns, is] = r.useState(""), [Es, Is] = r.useState(false), [ie, ds] = r.useState(null), [It, _e] = r.useState(false), [Ne, ee] = r.useState(() => {
    const s = /* @__PURE__ */ new Date();
    return s.setDate(s.getDate() - 7), s.toISOString().split("T")[0];
  }), [ye, Le] = r.useState(() => (/* @__PURE__ */ new Date()).toISOString().split("T")[0]), [cs, $t] = r.useState("all"), [os, $s] = r.useState(false), [_s, ms] = r.useState(false), [be, Ls] = r.useState(false), [L, Bs] = r.useState(null), [us, _t] = r.useState(null), [Be, qs] = r.useState(""), [qe, Ms] = r.useState(""), { toast: u } = da(), { admin: l } = ca(), { permissions: w } = oa(), { selectedBrandId: S } = ua(), Me = !!(l != null && l.role) && (w && Object.keys(w).length > 0 ? !!w.updateOrderStatus : Ae(l.role, "updateOrderStatus")), Lt = !!(l != null && l.role) && (w && Object.keys(w).length > 0 ? !!w.markOrderFailed : Ae(l.role, "markOrderFailed")), Bt = !!(l != null && l.role) && (w && Object.keys(w).length > 0 ? !!w.markOrderRefunded : Ae(l.role, "markOrderRefunded")), o = xe({ queryKey: ["/api/admin/orderpro/sync-status", { brandId: S }], queryFn: mt({ on401: "returnNull" }), enabled: !!S, refetchInterval: be ? 1200 : _s ? 5e3 : false }), zs = (((st = o.data) == null ? void 0 : st.notSynced) || 0) + (((tt = o.data) == null ? void 0 : tt.failed) || 0) + (((at = o.data) == null ? void 0 : at.nonDeliveredSynced) || 0), we = (_a2 = us == null ? void 0 : us.totalWork) != null ? _a2 : zs, Ks = Math.max(0, we - zs), xs = we > 0 ? Math.min(100, Math.max(0, Math.round(Ks / we * 100))) : 0, qt = (s) => __async(null, null, function* () {
    try {
      const t = yield (yield U("GET", `/api/admin/orders/${s}`)).json();
      At(t), ks(true);
    } catch (e2) {
      u({ title: "Error", description: "Failed to load order details for printing", variant: "destructive" });
    }
  }), Mt = (s) => {
    ss(s), h(1);
  }, Se = (s, a) => {
    h(1), s === "status" ? $(a) : s === "type" ? _(a) : s === "outlet" ? X(a) : s === "search" && v(a);
  }, { data: q, isLoading: zt, error: Kt } = xe({ queryKey: ["/api/admin/orders", { limit: re, page: d, brandId: S, status: N !== "all" ? N : b, search: kt || void 0, type: P !== "all" ? P : void 0, outletId: F !== "all" ? F : void 0, sources: y.length > 0 ? y.join(",") : void 0 }], enabled: !!S && b !== "deleted", refetchOnWindowFocus: false, staleTime: 3e4, gcTime: 5 * 60 * 1e3 }), { data: R } = xe({ queryKey: ["/api/sales-channels"], queryFn: mt({ on401: "returnNull" }), staleTime: 1 / 0, gcTime: 24 * 60 * 60 * 1e3 }), { data: Vt, isLoading: Ut, isError: hs, error: B } = xe({ queryKey: ["/api/admin/orders/stats", { brandId: S }], enabled: !!S, staleTime: 6e4, gcTime: 5 * 60 * 1e3, retry: false });
  r.useEffect(() => {
    var _a3;
    hs && B && console.warn(`[OrderStats] Failed to fetch dashboard stats: ${(_a3 = B == null ? void 0 : B.message) != null ? _a3 : B}`);
  }, [hs, B]);
  const ps = !!(l != null && l.role) && (w && Object.keys(w).length > 0 ? !!w.viewDeletedOrders : Ae(l.role, "viewDeletedOrders")), Qt = !!(l != null && l.role) && (w && Object.keys(w).length > 0 ? !!w.restoreOrders : Ae(l.role, "restoreOrders")), { data: de, isLoading: Vs, refetch: Wt } = xe({ queryKey: ["/api/admin/orders/archived", { brandId: S }], queryFn: () => __async(null, null, function* () {
    const s = new URLSearchParams();
    S && s.set("brandId", String(S));
    const a = yield U("GET", `/api/admin/orders/archived?${s}`);
    if (!a.ok) throw new Error(yield a.text());
    return a.json();
  }), enabled: !!S && ps && b === "deleted", refetchOnWindowFocus: false, staleTime: 6e4, gcTime: 5 * 60 * 1e3 }), Oe = (de == null ? void 0 : de.orders) || [], Us = (de == null ? void 0 : de.total) || 0, [Ht, js] = r.useState(false), [Qs, Ws] = r.useState(null), [Hs, Ys] = r.useState(""), ze = De({ mutationFn: (s) => __async(null, null, function* () {
    return yield U("POST", `/api/admin/orders/archived/${s}/restore`);
  }), onSuccess: () => {
    u({ title: "Order Restored", description: `Order ${Hs} has been restored successfully` }), js(false), Ws(null), Ys(""), Wt(), se.invalidateQueries({ queryKey: ["/api/admin/orders"] });
  }, onError: (s) => {
    u({ variant: "destructive", title: "Failed to restore order", description: Q(s) });
  } }), { data: Yt } = xe({ queryKey: ["/api/admin/outlets-rbac", { brandId: S }], enabled: !!S, refetchOnWindowFocus: false, staleTime: 5 * 60 * 1e3, gcTime: 30 * 60 * 1e3 }), Gt = De({ mutationFn: (_0) => __async(null, [_0], function* ({ orderId: s }) {
    return $a(s, { retries: 0 });
  }), onSuccess: (s) => {
    var _a3;
    se.invalidateQueries({ predicate: (a) => Array.isArray(a.queryKey) && typeof a.queryKey[0] == "string" && a.queryKey[0].includes("/api/admin/orders") }), s != null && s.retryable ? u({ title: "OrderPro temporarily unreachable", description: (_a3 = s.message) != null ? _a3 : "The order is queued and will sync automatically when OrderPro comes back online.", variant: "default" }) : u({ title: "OrderPro synced", description: "Order created successfully in OrderPro." });
  }, onError: (s) => {
    u({ title: "OrderPro sync failed", description: Q(s), variant: "destructive" });
  } }), V = De({ mutationFn: (_0) => __async(null, [_0], function* ({ orderId: s, status: a, reason: t, otp: i }) {
    return (yield U("PATCH", `/api/admin/orders/${s}/status`, { status: a, reason: t, otp: i })).json();
  }), onSuccess: (s, a) => {
    se.invalidateQueries({ predicate: (t) => Array.isArray(t.queryKey) && typeof t.queryKey[0] == "string" && t.queryKey[0].includes("/api/admin/orders") }), u({ title: "Success", description: "Order status updated successfully" }), Ie(false), ls(null), Fs(""), $e(""), is(""), ds(null), a.status === "delivered" && (s == null ? void 0 : s.orderProStatus) !== "created" && Gt.mutate({ orderId: a.orderId });
  }, onError: (s) => {
    u({ title: "Error", description: Q(s), variant: "destructive" });
  } }), Ke = De({ mutationFn: (_0) => __async(null, [_0], function* ({ orderId: s, deletionReason: a }) {
    return (yield U("DELETE", `/api/admin/orders/${s}`, { deletionReason: a })).json();
  }), onSuccess: () => {
    se.invalidateQueries({ predicate: (s) => Array.isArray(s.queryKey) && typeof s.queryKey[0] == "string" && s.queryKey[0].includes("/api/admin/orders") }), u({ title: "Success", description: "Order deleted successfully" }), Ee(false), Ds(null), As(""), Rs(""), as(""), rs("");
  }, onError: (s) => {
    const a = (s == null ? void 0 : s.message) || Q(s);
    u({ title: "Error", description: a, variant: "destructive" });
  } });
  De({ mutationFn: (s) => __async(null, null, function* () {
    return (yield U("PATCH", `/api/admin/orders/${s}/confirm`)).json();
  }), onSuccess: () => {
    se.invalidateQueries({ predicate: (s) => Array.isArray(s.queryKey) && typeof s.queryKey[0] == "string" && (s.queryKey[0].includes("/api/admin/orders") || s.queryKey[0].includes("/api/admin/orders/stats")) }), u({ title: "Success", description: "Order confirmed successfully" });
  }, onError: (s) => {
    u({ title: "Error", description: Q(s), variant: "destructive" });
  } });
  const Xt = () => __async(null, null, function* () {
    var a, t, i;
    Ls(true), Bs(null);
    const s = (((a = o.data) == null ? void 0 : a.notSynced) || 0) + (((t = o.data) == null ? void 0 : t.failed) || 0) + (((i = o.data) == null ? void 0 : i.nonDeliveredSynced) || 0);
    _t({ totalWork: s });
    try {
      const x = yield (yield U("POST", "/api/admin/orderpro/bulk-sync", __spreadValues(__spreadValues({ includeStatus: [null, "failed"], removeNonDeliveredSynced: true, brandId: S }, Be ? { startDate: Be } : {}), qe ? { endDate: qe } : {}))).json();
      Bs(x), se.invalidateQueries({ queryKey: ["/api/admin/orderpro/sync-status"] }), se.invalidateQueries({ predicate: (z) => Array.isArray(z.queryKey) && typeof z.queryKey[0] == "string" && z.queryKey[0].includes("/api/admin/orders") }), u({ title: x.synced > 0 ? "Bulk sync completed" : "Sync completed", description: `${x.synced} synced, ${x.failed} failed, ${x.removed || 0} removed from non-delivered out of ${x.total} delivered sync targets`, variant: x.failed > 0 ? "destructive" : "default" });
    } catch (p) {
      u({ title: "Bulk sync failed", description: Q(p), variant: "destructive" });
    } finally {
      Ls(false), o.refetch();
    }
  }), gs = (q == null ? void 0 : q.orders) || [], ce = r.useMemo(() => Ea(R == null ? void 0 : R.channels), [R == null ? void 0 : R.channels]), Jt = r.useMemo(() => {
    const s = /* @__PURE__ */ new Map(), a = (t, i) => {
      const p = vt(t), x = String(i != null ? i : "").trim() || Fe(t, ce);
      !p || !x || s.set(p, x);
    };
    return ["web", "app", "walkin", "whatsapp", "admin", "chowdeck", "foodelo", "glovo"].forEach((t) => a(t)), ((R == null ? void 0 : R.channels) || []).forEach((t) => a(t.value, t.label)), [...gs, ...Oe].forEach((t) => a(t.source)), Array.from(s.entries()).map(([t, i]) => ({ value: t, label: i }));
  }, [gs, Oe, ce, R == null ? void 0 : R.channels]), Gs = r.useMemo(() => b !== "deleted" ? [] : Oe.filter((s) => {
    var Pe, ke, T;
    const a = f.trim().replace(/^#/, "").toLowerCase(), t = parseFloat(a), i = !isNaN(t) && t > 0 && (a.includes(".") || t > 999), p = !a || s.orderNumber.toLowerCase().includes(a) || ((Pe = s.customerName) == null ? void 0 : Pe.toLowerCase().includes(a)) || ((ke = s.customerEmail) == null ? void 0 : ke.toLowerCase().includes(a)) || ((T = s.customerPhone) == null ? void 0 : T.includes(a)) || i && Math.abs(Number(s.total) - t) / t <= 0.05, x = N === "all" || s.status === N, z = P === "all" || s.orderType === P, vs = F === "all" || s.outletId === parseInt(F), Ns = vt(s.source), Ve = y.length === 0 || y.includes(Ns);
    return p && x && z && vs && Ve;
  }), [b, Oe, F, f, y, N, P]), M = b === "deleted" ? Gs.length : (q == null ? void 0 : q.total) || 0, m = b === "deleted" ? Math.ceil(M / re) : (q == null ? void 0 : q.totalPages) || 0, fs = (d - 1) * re, Xs = fs + re, oe = b === "deleted" ? Gs.slice(fs, Xs) : gs, me = M > 0 ? fs + 1 : 0, ue = Math.min(Xs, M);
  r.useEffect(() => {
    d > m && m > 0 && h(m);
  }, [d, m]);
  const Js = (s) => {
    const a = String(s.paymentStatus || "").toLowerCase(), t = String(s.paymentMethod || "").toLowerCase(), i = ["paid", "success", "successful", "completed"].includes(a) || s.paymentConfirmed === true || t === "wallet" && Number(s.walletAmount || 0) > 0;
    return s.status === "delivered" ? "Delivered orders cannot be refunded." : s.status === "unpaid" || !i ? "Only paid failed orders can be refunded." : s.status !== "failed" ? "Mark this order as Failed before refunding." : null;
  }, Zs = (s, a) => {
    if (a !== "failed" && a !== "refunded") {
      V.mutate({ orderId: s.id, status: a });
      return;
    }
    ls(s), Fs(a), $e(""), is(""), ds(null), Ie(true);
  }, Zt = () => __async(null, null, function* () {
    if (le) {
      Is(true);
      try {
        const a = yield (yield U("POST", `/api/admin/orders/${le.id}/refund-otp/request`)).json();
        ds({ verifierName: a == null ? void 0 : a.verifierName, expiresAt: a == null ? void 0 : a.expiresAt }), u({ title: "OTP Sent", description: a != null && a.verifierName ? `OTP sent to ${a.verifierName}` : "OTP sent to a secondary admin" });
      } catch (s) {
        u({ title: "OTP Request Failed", description: Q(s), variant: "destructive" });
      } finally {
        Is(false);
      }
    }
  }), ea = () => {
    if (!le || !k) return;
    const s = k === "failed" || k === "refunded";
    if (s && ne.trim().length < 5) {
      u({ title: "Reason required", description: "Provide at least 5 characters for status change reason.", variant: "destructive" });
      return;
    }
    if (k === "refunded" && ns.trim().length !== 6) {
      u({ title: "OTP required", description: "Enter the 6-digit refund OTP.", variant: "destructive" });
      return;
    }
    V.mutate({ orderId: le.id, status: k, reason: s ? ne.trim() : void 0, otp: k === "refunded" ? ns.trim() : void 0 });
  }, sa = (s) => {
    Ds(s.id), As(s.orderNumber), Rs(s.status), as(""), rs(""), Ee(true);
  }, ta = () => {
    const s = Z === "Other" ? `Other: ${ve.trim()}` : Z;
    if (!Ts || !s || s.length < 5) {
      u({ title: "Reason Required", description: "Please select a reason for deleting this order.", variant: "destructive" });
      return;
    }
    Ke.mutate({ orderId: Ts, deletionReason: s });
  }, aa = () => __async(null, null, function* () {
    $s(true);
    try {
      const s = localStorage.getItem("adminToken"), a = new URLSearchParams({ startDate: Ne, endDate: ye });
      cs !== "all" && a.set("status", cs), S && a.set("brandId", String(S));
      const t = yield fetch(`/api/admin/orders/export?${a}`, { method: "GET", headers: { Authorization: `Bearer ${s}` } });
      if (!t.ok) {
        const z = yield t.json().catch(() => ({ message: "Export failed" }));
        throw new Error(z.message || "Failed to export orders");
      }
      const i = yield t.blob(), p = window.URL.createObjectURL(i), x = document.createElement("a");
      x.style.display = "none", x.href = p, x.download = `orders-export-${Ne}_to_${ye}.csv`, document.body.appendChild(x), x.click(), window.URL.revokeObjectURL(p), document.body.removeChild(x), u({ title: "Success", description: "Orders exported successfully" }), _e(false);
    } catch (s) {
      u({ title: "Error", description: Q(s), variant: "destructive" });
    } finally {
      $s(false);
    }
  }), ra = (s) => {
    const a = /* @__PURE__ */ new Date(), t = (i) => i.toISOString().split("T")[0];
    switch (Le(t(a)), s) {
      case "today": {
        ee(t(a));
        break;
      }
      case "yesterday": {
        const i = new Date(a);
        i.setDate(i.getDate() - 1), ee(t(i)), Le(t(i));
        break;
      }
      case "7d": {
        const i = new Date(a);
        i.setDate(i.getDate() - 7), ee(t(i));
        break;
      }
      case "30d": {
        const i = new Date(a);
        i.setDate(i.getDate() - 30), ee(t(i));
        break;
      }
      case "this_month": {
        ee(t(new Date(a.getFullYear(), a.getMonth(), 1)));
        break;
      }
      case "last_month": {
        const i = new Date(a.getFullYear(), a.getMonth() - 1, 1), p = new Date(a.getFullYear(), a.getMonth(), 0);
        ee(t(i)), Le(t(p));
        break;
      }
    }
  }, la = (s) => ft(s), et = (s, a) => {
    const t = Ra(s, a), i = Ot[t] || Ot.pending, p = i.icon;
    return e.jsxs(te, { className: `${i.color} inline-flex h-6 max-w-full items-center gap-1 rounded-md px-2 py-0 text-[11px] font-medium whitespace-nowrap`, children: [e.jsx(p, { className: "h-3 w-3" }), Fa(t)] });
  }, na = (s) => {
    if (!s) return e.jsx(te, { variant: "outline", className: "inline-flex h-5 max-w-full items-center rounded-md border-gray-200 px-1.5 py-0 text-[10px] font-medium text-gray-500 whitespace-nowrap", children: "No Payout" });
    const a = Wa[s];
    return a ? e.jsx(te, { variant: "outline", className: `inline-flex h-5 max-w-full items-center rounded-md px-1.5 py-0 text-[10px] font-medium whitespace-nowrap ${a.className}`, children: a.label }) : e.jsx(te, { variant: "outline", className: "inline-flex h-5 max-w-full items-center rounded-md border-gray-200 px-1.5 py-0 text-[10px] font-medium text-gray-500 whitespace-nowrap", children: s });
  }, Ce = ({ orders: s, showTimers: a = false }) => zt ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-500 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading orders..." })] }) : s.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-600", children: f || N !== "all" || P !== "all" || F !== "all" || y.length > 0 ? e.jsxs("div", { children: [e.jsx("p", { children: "No orders found matching your filters." }), f && e.jsx("p", { className: "text-sm mt-1", children: "Try searching by order number, customer name, email, phone, or amount." }), e.jsx(c, { variant: "outline", size: "sm", className: "mt-2", onClick: () => {
    v(""), $("all"), _("all"), X("all"), J([]);
  }, children: "Clear all filters" })] }) : "No orders found." }) : e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(xt, { className: "table-fixed min-w-[1320px]", children: [e.jsx(ht, { children: e.jsxs(Ue, { children: [e.jsx(j, { className: "w-[170px]", children: "Order" }), e.jsx(j, { className: "w-[170px]", children: "Customer" }), e.jsx(j, { className: "w-[72px]", children: "Type" }), e.jsx(j, { className: "w-[90px] hidden md:table-cell", children: "Source" }), e.jsx(j, { className: "w-[180px]", children: "Status" }), e.jsx(j, { className: "w-[90px]", children: "Total" }), e.jsx(j, { className: "w-[85px] hidden md:table-cell", children: "Prep" }), a && e.jsx(j, { className: "w-[95px]", children: "Timer" }), e.jsx(j, { className: "w-[75px] hidden md:table-cell", children: "Promo" }), e.jsx(j, { className: "w-[130px] hidden lg:table-cell", children: b === "scheduled" ? "Scheduled" : "Date" }), e.jsx(j, { className: "w-[190px] text-right", children: "Actions" }), ((l == null ? void 0 : l.role) === "super_admin" || (l == null ? void 0 : l.role) === "admin") && e.jsx(j, { className: "w-[50px]", children: "Del" })] }) }), e.jsx(pt, { children: s.map((t) => {
    var Ve, Pe, ke;
    const i = !!(l != null && l.id && t.failedByAdminId && t.failedByAdminId === l.id), p = (((Ve = t.statusControls) == null ? void 0 : Ve.allowedActions) || []).filter((T) => T === "failed" ? Lt : T === "refunded" ? Bt : true), x = Me && p.includes("accepted"), z = b === "scheduled" && t.isScheduled && t.scheduledAt && Ct(t.scheduledAt).minutes <= 60, vs = t.status === "unpaid", Ns = z ? "bg-yellow-50 border-yellow-200" : "";
    return e.jsxs(Ue, { className: Ns, children: [e.jsx(g, { children: e.jsxs("div", { children: [e.jsxs("div", { className: "font-medium text-sm truncate flex items-center gap-1.5", children: [e.jsxs("span", { className: "truncate", title: `#${t.orderNumber}`, children: ["#", t.orderNumber] }), vs && e.jsx(Ps, { className: "h-3.5 w-3.5 text-red-500 shrink-0" })] }), e.jsxs("div", { className: "text-xs text-gray-500 truncate", children: [t.outletName, " \u2022 ", t.itemCount || 0, " items"] })] }) }), e.jsx(g, { children: e.jsxs("div", { children: [e.jsx("div", { className: "font-medium text-sm truncate", children: t.customerName || "\u2014" }), e.jsx("div", { className: "text-xs text-gray-500 truncate", children: t.customerEmail || "\u2014" }), e.jsx("div", { className: "text-xs text-gray-500 truncate", children: t.customerPhone || "\u2014" })] }) }), e.jsx(g, { className: "whitespace-nowrap", children: e.jsx(te, { variant: "outline", className: "whitespace-nowrap text-xs", children: t.isScheduled ? "Sched" : t.orderType === "delivery" ? "Del" : t.orderType === "pickup" ? "Pick" : "Dine" }) }), e.jsx(g, { className: "hidden md:table-cell whitespace-nowrap", children: e.jsx(te, { variant: "outline", className: `max-w-full whitespace-nowrap text-xs ${_a(t.source)}`, title: Fe(t.source, ce), children: e.jsx("span", { className: "truncate", children: Fe(t.source, ce) }) }) }), e.jsx(g, { className: "align-top", children: e.jsxs("div", { className: "flex min-w-0 flex-col items-start gap-1.5", children: [et(t.status, t.provider), na(t.payoutStatus), t.provider && e.jsxs("div", { className: "max-w-full truncate text-[11px] text-gray-500", children: [t.provider.type === "foodelo" ? "Foodelo" : "Chowdeck", ": ", t.provider.externalStatus || "syncing"] })] }) }), e.jsx(g, { className: "whitespace-nowrap", children: e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "font-medium", children: Re(t.total) }), t.walletAmount && parseInt(t.walletAmount) > 0 && e.jsxs("div", { className: "text-xs text-green-600", children: ["Wallet: -", Re(parseInt(t.walletAmount) / 100)] })] }) }), e.jsx(g, { className: "hidden md:table-cell whitespace-nowrap", children: t.status === "in_progress" && t.preparationStartTime ? e.jsx(Ga, { preparationStartTime: t.preparationStartTime, estimatedPreparationTime: t.estimatedPreparationTime }) : e.jsx("div", { className: "text-sm text-gray-600", children: t.estimatedPreparationTime ? `${t.estimatedPreparationTime} min` : "15 min" }) }), a && e.jsx(g, { className: "whitespace-nowrap", children: b === "live" ? e.jsx(Ha, { startTime: t.createdAt }) : b === "scheduled" && t.isScheduled && t.scheduledAt ? e.jsx(Ya, { scheduledAt: t.scheduledAt }) : null }), e.jsx(g, { className: "hidden md:table-cell", children: t.promoCode ? e.jsx("div", { className: "text-xs font-mono bg-blue-50 text-blue-700 px-2 py-1 rounded truncate", children: t.promoCode }) : e.jsx("span", { className: "text-gray-400 text-xs", children: "None" }) }), e.jsx(g, { className: "hidden lg:table-cell whitespace-nowrap", children: e.jsx("div", { className: "text-xs", children: b === "scheduled" && t.isScheduled && t.scheduledAt ? e.jsxs("div", { children: [e.jsxs("div", { className: "text-gray-700", children: [Ta(t.scheduledAt), ", ", gt(t.scheduledAt, "yyyy")] }), e.jsx("div", { className: "text-blue-600 font-medium", children: Da(t.scheduledAt) })] }) : e.jsx("span", { children: la(t.createdAt) }) }) }), e.jsxs(g, { className: "text-right", children: [e.jsxs("div", { className: "ml-auto flex w-fit items-center justify-end gap-1 whitespace-nowrap", children: [(l == null ? void 0 : l.role) && e.jsx(ys, { href: `/control/orders/${t.id}`, children: e.jsxs(c, { variant: "outline", size: "sm", className: "flex items-center gap-1 text-xs px-2 py-1", children: [e.jsx(bt, { className: "h-3 w-3" }), "View"] }) }), (l == null ? void 0 : l.role) && e.jsx(c, { variant: "outline", size: "sm", className: "flex items-center gap-1 text-xs px-2 py-1", onClick: () => qt(t.id), children: e.jsx(La, { className: "h-3 w-3" }) }), x && (t.status === "pending" || t.status === "confirmed") && e.jsxs(c, { onClick: () => Zs(t, "accepted"), disabled: V.isPending, size: "sm", className: "flex items-center gap-1 text-xs px-2 py-1 bg-blue-600 hover:bg-blue-700", children: [e.jsx(ae, { className: "h-3 w-3" }), V.isPending ? "Accepting..." : "Accept"] }), Me && p.length > 0 ? e.jsxs(W, { value: void 0, onValueChange: (T) => Zs(t, T), disabled: V.isPending, children: [e.jsx(H, { className: "w-28 h-8 text-xs", children: e.jsx(Y, { placeholder: "Action" }) }), e.jsx(G, { children: p.map((T) => {
      const ot = T === "refunded" && i;
      return e.jsx(n, { value: T, disabled: ot, children: ot ? `${bs(T)} (Needs another admin)` : bs(T) }, `${t.id}-${T}`);
    }) })] }) : e.jsx("div", { className: "text-xs text-gray-500 px-2 py-1 bg-gray-50 rounded border", children: Me ? "Read Only" : "View Only" })] }), ((Pe = t.statusControls) == null ? void 0 : Pe.isIntegrationManaged) && ((ke = t.statusControls) == null ? void 0 : ke.reason) && e.jsx("p", { className: "mt-1 text-left text-[11px] text-gray-500", children: t.statusControls.reason }), i && e.jsx("p", { className: "mt-1 text-left text-[11px] text-amber-700", children: "You started this failed/refund flow. Another admin must confirm the refund action." }), Me && !i && !p.includes("refunded") && Js(t) && e.jsx("p", { className: "mt-1 text-left text-[11px] text-amber-700", children: Js(t) })] }), ((l == null ? void 0 : l.role) === "super_admin" || (l == null ? void 0 : l.role) === "admin") && e.jsx(g, { children: e.jsx(c, { variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700", onClick: () => sa(t), title: "Delete order", children: e.jsx(Cs, { className: "h-3 w-3" }) }) })] }, t.id);
  }) })] }) });
  if (Kt) return e.jsx(ut, { currentPage: "orders", children: e.jsx("div", { className: "p-6", children: e.jsx(D, { children: e.jsx(A, { className: "p-6", children: e.jsx("div", { className: "text-center text-red-600", children: e.jsx("p", { children: "Unable to load orders. Please refresh the page or try again later." }) }) }) }) }) });
  const O = Vt || { liveOrdersCount: 0, unpaidOrdersCount: 0, scheduledOrdersCount: 0, failedOrdersCount: 0, completedOrdersCount: 0, processingOrdersCount: 0, processingOrdersValue: 0, totalRevenue: 0, deletedOrdersCount: 0 }, ia = hs, C = Ut;
  return e.jsxs(ut, { currentPage: "orders", children: [e.jsxs("div", { className: "p-6 space-y-6 max-w-full", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold", children: "Orders" }), e.jsx("p", { className: "text-gray-600", children: "Manage and track customer orders" })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(c, { onClick: () => ms(true), className: "flex items-center gap-2", variant: "outline", children: [e.jsx(ws, { className: "h-4 w-4" }), "Sync to OrderPro", o.data && (o.data.notSynced > 0 || o.data.failed > 0) && e.jsx(te, { variant: "destructive", className: "ml-1 text-xs", children: o.data.notSynced + o.data.failed })] }), e.jsxs(c, { onClick: () => _e(true), variant: "outline", size: "sm", children: [e.jsx(Nt, { className: "h-4 w-4 mr-2" }), "Export CSV"] })] })] }), e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4", children: [ia && e.jsx("div", { className: "col-span-full", children: e.jsx(D, { className: "border-destructive/50 bg-destructive/5", children: e.jsxs(A, { className: "p-4 flex items-center gap-3", children: [e.jsx(yt, { className: "h-5 w-5 text-destructive shrink-0" }), e.jsxs("div", { className: "text-sm text-destructive-foreground", children: [e.jsx("strong", { children: "Stats unavailable" }), " \u2014 The order statistics could not be loaded.", (B == null ? void 0 : B.message) && e.jsxs("span", { className: "ml-1 opacity-80", children: ["(", B.message, ")"] }), e.jsx("span", { className: "ml-1", children: "Check that the brand is active and your session is still valid." })] })] }) }) }), e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(I, { className: "text-sm font-medium", children: "\u{1F504} Processing Orders" }), e.jsx(es, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(A, { children: [C ? e.jsx("div", { className: "h-8 w-16 bg-muted animate-pulse rounded" }) : e.jsx("div", { className: "text-2xl font-bold", children: O.processingOrdersCount }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Confirmed to Out for Delivery" })] })] }), e.jsx(jt, { permission: "viewProcessingValue", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(I, { className: "text-sm font-medium", children: "\u{1F4B0} Processing Value" }), e.jsx(Ze, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsxs(A, { children: [C ? e.jsx("div", { className: "h-8 w-24 bg-muted animate-pulse rounded" }) : e.jsx("div", { className: "text-2xl font-bold", children: Re(O.processingOrdersValue) }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Total value in processing" })] })] }) }), e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(I, { className: "text-sm font-medium", children: "\u2705 Completed Orders" }), e.jsx(ae, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsx(A, { children: C ? e.jsx("div", { className: "h-8 w-16 bg-muted animate-pulse rounded" }) : e.jsx("div", { className: "text-2xl font-bold", children: O.completedOrdersCount }) })] }), e.jsx(jt, { permission: "viewTotalRevenue", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(I, { className: "text-sm font-medium", children: "Total Revenue" }), e.jsx(Ba, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsx(A, { children: C ? e.jsx("div", { className: "h-8 w-24 bg-muted animate-pulse rounded" }) : e.jsx("div", { className: "text-2xl font-bold", children: Re(O.totalRevenue) }) })] }) })] }), e.jsxs(D, { children: [e.jsx(E, { children: e.jsxs(I, { className: "flex items-center gap-2", children: [e.jsx(qa, { className: "h-5 w-5" }), "Search and Filter Orders"] }) }), e.jsxs(A, { className: "space-y-4", children: [e.jsxs("div", { className: "relative", children: [e.jsx(Ma, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), e.jsx(he, { placeholder: "Search order #, name, email, phone or amount...", value: f, onChange: (s) => Se("search", s.target.value), className: "pl-10 pr-10" }), f && e.jsx("button", { onClick: () => Se("search", ""), className: "absolute right-3 top-3 text-muted-foreground hover:text-foreground", children: e.jsx(ma, { className: "h-4 w-4" }) })] }), e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3", children: [e.jsx("div", { children: e.jsxs(W, { value: N, onValueChange: (s) => Se("status", s), children: [e.jsx(H, { children: e.jsx(Y, { placeholder: "Filter by status" }) }), e.jsxs(G, { children: [e.jsx(n, { value: "all", children: "All Status" }), e.jsx(n, { value: "unpaid", children: "Unpaid" }), e.jsx(n, { value: "pending", children: "Payment Confirmed" }), e.jsx(n, { value: "accepted", children: "Accepted" }), e.jsx(n, { value: "in_progress", children: "In Progress" }), e.jsx(n, { value: "ready_for_pickup", children: "Ready for Pickup" }), e.jsx(n, { value: "out_for_delivery", children: "Out for Delivery" }), e.jsx(n, { value: "delivered", children: "Delivered" }), e.jsx(n, { value: "cancelled_by_customer", children: "Cancelled by Customer" }), e.jsx(n, { value: "cancelled_by_outlet", children: "Cancelled by Outlet" }), e.jsx(n, { value: "failed", children: "Failed" }), e.jsx(n, { value: "refunded", children: "Refunded" })] })] }) }), e.jsx("div", { children: e.jsxs(W, { value: P, onValueChange: (s) => Se("type", s), children: [e.jsx(H, { children: e.jsx(Y, { placeholder: "Filter by type" }) }), e.jsxs(G, { children: [e.jsx(n, { value: "all", children: "All Types" }), e.jsx(n, { value: "delivery", children: "Delivery" }), e.jsx(n, { value: "pickup", children: "Pickup" }), e.jsx(n, { value: "scheduled", children: "Scheduled" })] })] }) }), e.jsx("div", { children: e.jsxs(W, { value: F, onValueChange: (s) => Se("outlet", s), children: [e.jsx(H, { children: e.jsx(Y, { placeholder: "Filter by outlet" }) }), e.jsxs(G, { children: [e.jsx(n, { value: "all", children: "All Outlets" }), (Yt || []).map((s) => e.jsx(n, { value: s.id.toString(), children: s.name }, s.id))] })] }) }), e.jsx("div", { children: e.jsxs(xa, { children: [e.jsx(ha, { asChild: true, children: e.jsxs(c, { variant: "outline", className: "w-full justify-between", children: [e.jsx("span", { className: "truncate", children: y.length === 0 ? "All Sources" : y.length === 1 ? Fe(y[0], ce) : `${y.length} sources` }), e.jsx(za, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(pa, { className: "w-[200px] p-3", children: e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("span", { className: "text-sm font-medium", children: "Filter by Source" }), y.length > 0 && e.jsx(c, { variant: "ghost", size: "sm", className: "h-6 px-2 text-xs", onClick: () => {
    J([]), h(1);
  }, children: "Clear" })] }), Jt.map(({ value: s, label: a }) => e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ga, { id: `source-${s}`, checked: y.includes(s), onCheckedChange: (t) => {
    h(1), J(t ? [...y, s] : y.filter((i) => i !== s));
  } }), e.jsx("label", { htmlFor: `source-${s}`, className: "text-sm leading-none cursor-pointer", children: a })] }, s))] }) })] }) }), e.jsx("div", { children: e.jsxs(W, { value: re.toString(), onValueChange: (s) => {
    ts(parseInt(s)), h(1);
  }, children: [e.jsx(H, { children: e.jsx(Y, { placeholder: "Items per page" }) }), e.jsx(G, { children: Xa.map((s) => e.jsxs(n, { value: s.toString(), children: [s, " per page"] }, s)) })] }) })] })] })] }), e.jsxs(fa, { value: b, onValueChange: Mt, className: "w-full", children: [e.jsxs(va, { className: "flex flex-wrap justify-center gap-1 w-full h-auto sm:h-10", children: [e.jsxs(pe, { value: "live", className: "flex items-center gap-2", children: [e.jsx(es, { className: "h-4 w-4" }), "\u{1F534} Live ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${O.liveOrdersCount})`] }), e.jsxs(pe, { value: "unpaid", className: "flex items-center gap-2", children: [e.jsx(Ps, { className: "h-4 w-4" }), "\u{1F4B3} Unpaid ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${O.unpaidOrdersCount})`] }), e.jsxs(pe, { value: "scheduled", className: "flex items-center gap-2", children: [e.jsx(Ka, { className: "h-4 w-4" }), "\u{1F7E1} Scheduled ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${O.scheduledOrdersCount})`] }), e.jsxs(pe, { value: "failed", className: "flex items-center gap-2", children: [e.jsx(yt, { className: "h-4 w-4" }), "\u274C Failed ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${(_b = O.failedOrdersCount) != null ? _b : 0})`] }), e.jsxs(pe, { value: "completed", className: "flex items-center gap-2", children: [e.jsx(ae, { className: "h-4 w-4" }), "\u2705 Completed ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${O.completedOrdersCount})`] }), ps && e.jsxs(pe, { value: "deleted", className: "flex items-center gap-2", children: [e.jsx(Ss, { className: "h-4 w-4" }), "\u{1F5D1}\uFE0F Deleted ", C ? e.jsx("span", { className: "w-5 h-4 bg-muted animate-pulse rounded inline-block" }) : `(${(_c = O.deletedOrdersCount) != null ? _c : Us})`] })] }), e.jsx(je, { value: "live", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { children: ["Live Orders ", C ? e.jsx("span", { className: "w-6 h-5 bg-muted animate-pulse rounded inline-block ml-1" }) : `(${O.liveOrdersCount})`] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", me, "-", ue, " of ", M, " filtered"] })] }), e.jsxs(A, { children: [e.jsx(Ce, { orders: oe, showTimers: true }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] })] }) }), e.jsx(je, { value: "unpaid", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { children: ["Unpaid Orders ", C ? e.jsx("span", { className: "w-6 h-5 bg-muted animate-pulse rounded inline-block ml-1" }) : `(${O.unpaidOrdersCount})`] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", me, "-", ue, " of ", M, " filtered"] })] }), e.jsxs(A, { children: [e.jsx(Ce, { orders: oe, showTimers: false }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] })] }) }), e.jsx(je, { value: "scheduled", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { children: ["Scheduled Orders ", C ? e.jsx("span", { className: "w-6 h-5 bg-muted animate-pulse rounded inline-block ml-1" }) : `(${O.scheduledOrdersCount})`] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", me, "-", ue, " of ", M, " filtered"] })] }), e.jsxs(A, { children: [e.jsx(Ce, { orders: oe, showTimers: true }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] })] }) }), e.jsx(je, { value: "completed", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { children: ["Completed Orders ", C ? e.jsx("span", { className: "w-6 h-5 bg-muted animate-pulse rounded inline-block ml-1" }) : `(${O.completedOrdersCount})`] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", me, "-", ue, " of ", M, " filtered"] })] }), e.jsxs(A, { children: [e.jsx(Ce, { orders: oe, showTimers: false }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] })] }) }), e.jsx(je, { value: "failed", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { children: ["Failed Orders ", C ? e.jsx("span", { className: "w-6 h-5 bg-muted animate-pulse rounded inline-block ml-1" }) : `(${(_d = O.failedOrdersCount) != null ? _d : 0})`] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", me, "-", ue, " of ", M, " filtered"] })] }), e.jsxs(A, { children: [e.jsx(Ce, { orders: oe, showTimers: false }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] })] }) }), ps && e.jsx(je, { value: "deleted", className: "mt-6", children: e.jsxs(D, { children: [e.jsxs(E, { className: "flex flex-row items-center justify-between", children: [e.jsxs(I, { className: "flex items-center gap-2", children: [e.jsx(Ss, { className: "h-5 w-5 text-muted-foreground" }), "Deleted Orders (", Us, ")"] }), e.jsx("div", { className: "text-sm text-muted-foreground", children: Vs ? "Loading..." : `Showing ${me}-${ue} of ${M} filtered` })] }), e.jsx(A, { children: Vs ? e.jsx("div", { className: "flex items-center justify-center py-12", children: e.jsx(Te, { className: "h-8 w-8 animate-spin text-muted-foreground" }) }) : Oe.length === 0 ? e.jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [e.jsx(Ss, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "No deleted orders found" })] }) : e.jsxs(e.Fragment, { children: [e.jsxs(xt, { className: "table-fixed min-w-[1240px]", children: [e.jsx(ht, { children: e.jsxs(Ue, { children: [e.jsx(j, { className: "w-[170px]", children: "Order #" }), e.jsx(j, { className: "w-[180px]", children: "Customer" }), e.jsx(j, { className: "w-[150px]", children: "Previous Status" }), e.jsx(j, { className: "w-[100px]", children: "Total" }), e.jsx(j, { className: "w-[170px]", children: "Deleted At" }), e.jsx(j, { className: "w-[140px]", children: "Deleted By" }), e.jsx(j, { className: "w-[170px]", children: "Reason" }), e.jsx(j, { className: "w-[160px] text-right", children: "Actions" })] }) }), e.jsx(pt, { children: oe.map((s) => e.jsxs(Ue, { children: [e.jsx(g, { children: e.jsxs("div", { children: [e.jsx("div", { className: "truncate font-medium text-sm", title: `#${s.orderNumber}`, children: e.jsxs(ys, { href: `/control/orders/${s.originalOrderId}`, className: "hover:underline text-blue-600 hover:text-blue-800", children: ["#", s.orderNumber] }) }), e.jsx("div", { className: "text-xs text-gray-500 truncate", children: Fe(s.source, ce) })] }) }), e.jsx(g, { children: e.jsxs("div", { className: "text-sm", children: [e.jsx("div", { className: "truncate", children: s.customerName || "Unknown" }), e.jsx("div", { className: "truncate text-muted-foreground text-xs", children: s.customerPhone || s.customerEmail || "-" })] }) }), e.jsx(g, { children: et(s.status, s.provider) }), e.jsx(g, { className: "whitespace-nowrap", children: Re(s.total) }), e.jsx(g, { className: "whitespace-nowrap text-sm text-muted-foreground", children: s.archivedAt ? gt(s.archivedAt) : "-" }), e.jsx(g, { className: "truncate text-sm", title: s.archivedByName || s.archivedBy || "-", children: s.archivedByName || s.archivedBy || "-" }), e.jsx(g, { className: "max-w-[200px]", children: e.jsx("span", { className: "text-sm text-muted-foreground truncate block", title: s.deletionReason || "-", children: s.deletionReason || "-" }) }), e.jsx(g, { className: "text-right", children: e.jsxs("div", { className: "flex items-center justify-end gap-1", children: [e.jsx(ys, { href: `/control/orders/${s.originalOrderId}`, children: e.jsxs(c, { variant: "ghost", size: "sm", className: "text-blue-600 hover:text-blue-700 hover:bg-blue-50", children: [e.jsx(bt, { className: "h-4 w-4 mr-1" }), "View"] }) }), Qt && e.jsxs(c, { variant: "ghost", size: "sm", className: "text-green-600 hover:text-green-700 hover:bg-green-50", onClick: () => {
    Ws(s.id), Ys(s.orderNumber), js(true);
  }, children: [e.jsx(Os, { className: "h-4 w-4 mr-1" }), "Restore"] })] }) })] }, s.id)) })] }), m > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t mt-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d, " of ", m] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d - 1), disabled: d === 1, children: [e.jsx(ge, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(c, { variant: "outline", size: "sm", onClick: () => h(d + 1), disabled: d === m, children: ["Next", e.jsx(fe, { className: "h-4 w-4 ml-1" })] })] })] })] }) })] }) })] })] }), e.jsx(Ia, { order: Dt, open: Tt, onOpenChange: ks }), e.jsx(Qe, { open: It, onOpenChange: _e, children: e.jsxs(We, { className: "sm:max-w-md", children: [e.jsxs(He, { children: [e.jsxs(Ye, { className: "flex items-center gap-2", children: [e.jsx(Va, { className: "h-5 w-5" }), "Export Orders"] }), e.jsx(Ge, { children: "Select a date range and optional status filter to export orders as CSV." })] }), e.jsxs("div", { className: "space-y-4 py-2", children: [e.jsxs("div", { children: [e.jsx(K, { className: "text-xs text-muted-foreground mb-1.5 block", children: "Quick Range" }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: [{ label: "Today", value: "today" }, { label: "Yesterday", value: "yesterday" }, { label: "Last 7 days", value: "7d" }, { label: "Last 30 days", value: "30d" }, { label: "This month", value: "this_month" }, { label: "Last month", value: "last_month" }].map((s) => e.jsx(c, { variant: "outline", size: "sm", className: "h-7 text-xs", onClick: () => ra(s.value), children: s.label }, s.value)) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { children: [e.jsx(K, { htmlFor: "export-start", className: "text-sm", children: "Start Date" }), e.jsx(he, { id: "export-start", type: "date", value: Ne, onChange: (s) => ee(s.target.value), max: ye })] }), e.jsxs("div", { children: [e.jsx(K, { htmlFor: "export-end", className: "text-sm", children: "End Date" }), e.jsx(he, { id: "export-end", type: "date", value: ye, onChange: (s) => Le(s.target.value), min: Ne, max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] })] })] }), e.jsxs("div", { children: [e.jsx(K, { htmlFor: "export-status", className: "text-sm", children: "Status (optional)" }), e.jsxs(W, { value: cs, onValueChange: $t, children: [e.jsx(H, { id: "export-status", children: e.jsx(Y, { placeholder: "All statuses" }) }), e.jsxs(G, { children: [e.jsx(n, { value: "all", children: "All Statuses" }), e.jsx(n, { value: "pending", children: "Pending" }), e.jsx(n, { value: "confirmed", children: "Confirmed" }), e.jsx(n, { value: "accepted", children: "Accepted" }), e.jsx(n, { value: "in_progress", children: "In Progress" }), e.jsx(n, { value: "ready_for_pickup", children: "Ready for Pickup" }), e.jsx(n, { value: "out_for_delivery", children: "Out for Delivery" }), e.jsx(n, { value: "delivered", children: "Delivered" }), e.jsx(n, { value: "cancelled_by_customer", children: "Cancelled (Customer)" }), e.jsx(n, { value: "cancelled_by_outlet", children: "Cancelled (Outlet)" }), e.jsx(n, { value: "failed", children: "Failed" }), e.jsx(n, { value: "refunded", children: "Refunded" })] })] })] })] }), e.jsxs(Xe, { className: "gap-2 sm:gap-0", children: [e.jsx(c, { variant: "ghost", onClick: () => _e(false), disabled: os, children: "Cancel" }), e.jsx(c, { onClick: aa, disabled: os || !Ne || !ye, children: os ? e.jsxs(e.Fragment, { children: [e.jsx(Te, { className: "h-4 w-4 mr-2 animate-spin" }), "Exporting\u2026"] }) : e.jsxs(e.Fragment, { children: [e.jsx(Nt, { className: "h-4 w-4 mr-2" }), "Export CSV"] }) })] })] }) }), e.jsx(Qe, { open: _s, onOpenChange: ms, children: e.jsxs(We, { className: "max-w-md", children: [e.jsxs(He, { children: [e.jsxs(Ye, { className: "flex items-center gap-2", children: [e.jsx(ws, { className: "h-5 w-5" }), "Sync Orders to OrderPro"] }), e.jsx(Ge, { children: "Sync all delivered orders that are missing or failed on OrderPro. Non-delivered orders currently synced to OrderPro are removed first." })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(K, { className: "text-sm font-medium", children: "Date Range (optional)" }), e.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [e.jsxs("div", { children: [e.jsx(K, { className: "text-xs text-muted-foreground", children: "From" }), e.jsx(he, { type: "date", value: Be, onChange: (s) => qs(s.target.value), className: "h-9" })] }), e.jsxs("div", { children: [e.jsx(K, { className: "text-xs text-muted-foreground", children: "To" }), e.jsx(he, { type: "date", value: qe, onChange: (s) => Ms(s.target.value), className: "h-9" })] })] }), (Be || qe) && e.jsx(c, { variant: "link", size: "sm", className: "h-auto p-0 text-xs", onClick: () => {
    qs(""), Ms("");
  }, children: "Clear date filter" })] }), be && we > 0 && e.jsxs("div", { className: "space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-3", children: [e.jsxs("div", { className: "flex items-center justify-between text-xs text-blue-700", children: [e.jsx("span", { children: "Sync progress" }), e.jsxs("span", { children: [xs, "%"] })] }), e.jsx(Na, { value: xs, className: "h-2" }), e.jsxs("p", { className: "text-xs text-blue-700", children: [Ks, " of ", we, " items processed"] })] }), o.data && e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "bg-green-50 rounded-lg p-3 text-center", children: [e.jsx("div", { className: "text-2xl font-bold text-green-700", children: o.data.synced }), e.jsx("div", { className: "text-xs text-green-600", children: "Synced" })] }), e.jsxs("div", { className: "bg-red-50 rounded-lg p-3 text-center", children: [e.jsx("div", { className: "text-2xl font-bold text-red-700", children: o.data.failed }), e.jsx("div", { className: "text-xs text-red-600", children: "Failed" })] }), e.jsxs("div", { className: "bg-yellow-50 rounded-lg p-3 text-center", children: [e.jsx("div", { className: "text-2xl font-bold text-yellow-700", children: o.data.notSynced }), e.jsx("div", { className: "text-xs text-yellow-600", children: "Not Synced" })] }), e.jsxs("div", { className: "bg-blue-50 rounded-lg p-3 text-center", children: [e.jsx("div", { className: "text-2xl font-bold text-blue-700", children: o.data.totalDelivered }), e.jsx("div", { className: "text-xs text-blue-600", children: "Total Delivered" })] }), e.jsxs("div", { className: "bg-orange-50 rounded-lg p-3 text-center col-span-2", children: [e.jsx("div", { className: "text-2xl font-bold text-orange-700", children: o.data.nonDeliveredSynced || 0 }), e.jsx("div", { className: "text-xs text-orange-600", children: "Non-delivered currently on OrderPro" })] })] }), L && e.jsxs("div", { className: `rounded-lg p-3 ${L.failed > 0 ? "bg-amber-50 border border-amber-200" : "bg-green-50 border border-green-200"}`, children: [e.jsxs("p", { className: "text-sm font-medium", children: [L.synced, " synced, ", L.failed, " failed out of ", L.total, " delivered orders."] }), e.jsxs("p", { className: "mt-1 text-xs text-gray-700", children: ["Cleanup: ", L.removed || 0, " non-delivered removed from OrderPro, ", L.removeFailed || 0, " failed to remove."] }), L.results && L.results.filter((s) => !s.success).length > 0 && e.jsx("div", { className: "mt-2 max-h-32 overflow-y-auto text-xs space-y-1", children: L.results.filter((s) => !s.success).map((s, a) => e.jsxs("div", { className: "text-red-600", children: ["Order #", s.orderId, " (", s.orderNumber, "): ", s.error] }, a)) })] })] }), e.jsxs(Xe, { className: "gap-2 sm:gap-0", children: [e.jsx(c, { variant: "ghost", onClick: () => ms(false), disabled: be, children: "Close" }), e.jsx(c, { onClick: Xt, disabled: be || (((rt = o.data) == null ? void 0 : rt.notSynced) || 0) === 0 && (((lt = o.data) == null ? void 0 : lt.failed) || 0) === 0 && (((nt = o.data) == null ? void 0 : nt.nonDeliveredSynced) || 0) === 0, children: be ? e.jsxs(e.Fragment, { children: [e.jsx(Te, { className: "h-4 w-4 mr-2 animate-spin" }), "Syncing... ", xs, "%"] }) : e.jsxs(e.Fragment, { children: [e.jsx(ws, { className: "h-4 w-4 mr-2" }), "Sync All (", (((it = o.data) == null ? void 0 : it.notSynced) || 0) + (((dt = o.data) == null ? void 0 : dt.failed) || 0) + (((ct = o.data) == null ? void 0 : ct.nonDeliveredSynced) || 0), " items)"] }) })] })] }) }), e.jsx(Qe, { open: Et, onOpenChange: Ie, children: e.jsxs(We, { className: "sm:max-w-md", children: [e.jsxs(He, { children: [e.jsx(Ye, { children: k === "refunded" ? "Confirm Refund" : "Confirm Status Change" }), e.jsx(Ge, { children: le ? `Order #${le.orderNumber}: ${bs(k || "")}` : "Confirm this status change." })] }), e.jsxs("div", { className: "space-y-3 py-2", children: [(k === "failed" || k === "refunded") && e.jsxs("div", { className: "space-y-1", children: [e.jsx(K, { htmlFor: "status-reason", children: "Reason" }), e.jsxs(e.Fragment, { children: [e.jsxs(W, { value: ne, onValueChange: (s) => $e(s === "__other__" ? "" : s), children: [e.jsx(H, { id: "status-reason", children: e.jsx(Y, { placeholder: "Select a reason\u2026" }) }), e.jsxs(G, { children: [(k === "failed" ? wt : St).map((s) => e.jsx(n, { value: s, children: s }, s)), e.jsx(n, { value: "__other__", children: "Other (type below)" })] })] }), (!ne || ![...k === "failed" ? wt : St].includes(ne)) && e.jsx(ja, { id: "status-reason-text", value: ne, onChange: (s) => $e(s.target.value), rows: 2, placeholder: "Describe the reason\u2026" })] })] }), k === "refunded" && e.jsxs("div", { className: "space-y-2 rounded-md border bg-amber-50 p-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-amber-800", children: "Secondary OTP Verification" }), e.jsx("p", { className: "text-xs text-amber-700", children: "Enter the OTP sent to your email to authorise this refund." })] }), e.jsx(c, { size: "sm", variant: "outline", onClick: Zt, disabled: Es, children: Es ? "Sending..." : "Request OTP" })] }), (ie == null ? void 0 : ie.verifierName) && e.jsxs("p", { className: "text-xs text-amber-700", children: ["Sent to ", ie.verifierName, ie.expiresAt ? `, expires ${ft(ie.expiresAt)}` : ""] }), e.jsx(he, { value: ns, onChange: (s) => is(s.target.value.replace(/\D/g, "").slice(0, 6)), placeholder: "Enter 6-digit OTP", inputMode: "numeric" })] })] }), e.jsxs(Xe, { children: [e.jsx(c, { variant: "ghost", onClick: () => {
    Ie(false), ls(null);
  }, disabled: V.isPending, children: "Cancel" }), e.jsx(c, { onClick: ea, disabled: V.isPending, children: V.isPending ? "Updating..." : "Confirm" })] })] }) }), e.jsx(Qe, { open: Rt, onOpenChange: Ee, children: e.jsxs(We, { className: "sm:max-w-md", children: [e.jsxs(He, { children: [e.jsxs(Ye, { className: "text-red-600 flex items-center gap-2", children: [e.jsx(Cs, { className: "h-5 w-5" }), "Delete Order"] }), e.jsxs(Ge, { children: ["You are about to delete order ", e.jsxs("strong", { children: ["#", Ft] }), ".", e.jsx("span", { className: "block mt-2", children: "This action will archive the order. Please provide a reason for this deletion." })] })] }), e.jsxs("div", { className: "space-y-4 py-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(K, { htmlFor: "deletionReason", className: "text-sm font-medium", children: ["Reason for Deletion ", e.jsx("span", { className: "text-red-500", children: "*" })] }), e.jsxs(W, { value: Z, onValueChange: (s) => as(s), children: [e.jsx(H, { id: "deletionReason", children: e.jsx(Y, { placeholder: "Select a reason..." }) }), e.jsxs(G, { children: [e.jsx(n, { value: "Duplicate order", children: "Duplicate order" }), e.jsx(n, { value: "Customer requested cancellation", children: "Customer requested cancellation" }), e.jsx(n, { value: "Payment not received", children: "Payment not received" }), e.jsx(n, { value: "Out of stock / Cannot fulfill", children: "Out of stock / Cannot fulfill" }), e.jsx(n, { value: "Fraudulent order", children: "Fraudulent order" }), e.jsx(n, { value: "Test order", children: "Test order" }), e.jsx(n, { value: "System error / Incorrect order", children: "System error / Incorrect order" }), e.jsx(n, { value: "Other", children: "Other" })] })] }), Z === "Other" && e.jsx("textarea", { value: ve, onChange: (s) => rs(s.target.value), placeholder: "Please specify the reason...", className: "w-full min-h-[80px] px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none" }), Z === "Other" && ve.trim().length > 0 && ve.trim().length < 5 && e.jsx("p", { className: "text-xs text-red-500", children: "Please provide at least 5 characters" })] }), e.jsx("div", { className: "bg-amber-50 border border-amber-200 rounded-md p-3", children: e.jsxs("p", { className: "text-sm text-amber-800", children: [e.jsx("strong", { children: "Note:" }), " This deletion will be recorded in the audit log with your user information and the reason provided."] }) })] }), e.jsxs(Xe, { className: "gap-2 sm:gap-0", children: [e.jsx(c, { variant: "ghost", onClick: () => Ee(false), disabled: Ke.isPending, children: "Cancel" }), e.jsx(c, { variant: "destructive", onClick: ta, disabled: Ke.isPending || !Z || Z === "Other" && ve.trim().length < 5, children: Ke.isPending ? e.jsxs(e.Fragment, { children: [e.jsx(Te, { className: "h-4 w-4 mr-2 animate-spin" }), "Deleting..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(Cs, { className: "h-4 w-4 mr-2" }), "Delete Order"] }) })] })] }) }), e.jsx(ya, { open: Ht, onOpenChange: js, children: e.jsxs(ba, { children: [e.jsxs(wa, { children: [e.jsxs(Sa, { className: "flex items-center gap-2 text-green-600", children: [e.jsx(Os, { className: "h-5 w-5" }), "Restore Order"] }), e.jsxs(Oa, { children: ["Are you sure you want to restore order ", e.jsxs("strong", { children: ["#", Hs] }), "?", e.jsx("span", { className: "block mt-2", children: "This will move the order back to its previous status and make it visible in the orders list." })] })] }), e.jsxs(Ca, { children: [e.jsx(Pa, { disabled: ze.isPending, children: "Cancel" }), e.jsx(ka, { onClick: () => {
    Qs && ze.mutate(Qs);
  }, disabled: ze.isPending, className: "bg-green-600 hover:bg-green-700", children: ze.isPending ? e.jsxs(e.Fragment, { children: [e.jsx(Te, { className: "h-4 w-4 mr-2 animate-spin" }), "Restoring..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(Os, { className: "h-4 w-4 mr-2" }), "Restore Order"] }) })] })] }) })] });
}
export { ml as default };
