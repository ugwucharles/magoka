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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { N as Ce, c as ue, Y as ke, r as m, b as D, j as e, f as W, E, H as C, I as k, Z as A, F as _, B as K, V as Ae, a6 as se, T as z } from "./index-DOfu0sXg.js";
import { u as L } from "./useMutation-CVmbONMy.js";
import { A as _e, V as fe, Y as he, i as pe, M as Fe, j as xe, k as Oe, l as Me } from "./admin-layout-DH7sAIhq.js";
import { S as De } from "./switch-DvySixFh.js";
import { T as Le, a as Te, b as te, c as ie } from "./tabs-qGTQ6MVs.js";
import { S as ae } from "./skeleton-Bv9tx7fM.js";
import { A as ne, a as re } from "./alert-CuGTVrCB.js";
import { S as je, a as ge, b as ye, c as we, d as be } from "./select-ets7bQkN.js";
import { B as oe } from "./bell-off-DBs6dVt7.js";
import { S as J } from "./shield-BJZvWIYM.js";
import { U as B } from "./users-CBtjfzvJ.js";
import { R as ce } from "./refresh-cw-C5dId60a.js";
import { S as We } from "./smartphone-DMb4mbpx.js";
import { M as Re } from "./mail-WBbfgCoF.js";
import { S } from "./shopping-bag-8aLpcCGk.js";
import { T as R } from "./triangle-alert-BZPq43t0.js";
import { W as le } from "./wallet-e6BSu-fo.js";
import { P as qe } from "./package-CpPTLD0o.js";
import "./badge-BAjaXL1S.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./label-B38UEnoM.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./map-pin-ChG4yLkU.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./menu-B9h4oOjs.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
import "./index-CxKYTSZE.js";
import "./index-Czlrzsbg.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ie = Ce("Play", [["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }]]), p = () => {
  const a = localStorage.getItem("adminToken");
  return a ? { Authorization: `Bearer ${a}`, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
}, Be = { new_order: { label: "New Order", description: "When a new order is placed", icon: e.jsx(S, { className: "h-4 w-4" }) }, order_cancelled: { label: "Order Cancelled", description: "When an order is cancelled", icon: e.jsx(R, { className: "h-4 w-4" }) }, payout_pending_approval: { label: "Payout Pending Approval", description: "When a payout needs your approval", icon: e.jsx(le, { className: "h-4 w-4" }) }, payout_approved: { label: "Payout Approved", description: "When a payout is approved and processed", icon: e.jsx(z, { className: "h-4 w-4" }) }, payout_rejected: { label: "Payout Rejected", description: "When a payout request is rejected", icon: e.jsx(R, { className: "h-4 w-4" }) }, payout_failed: { label: "Payout Failed", description: "When a transfer fails", icon: e.jsx(R, { className: "h-4 w-4" }) }, sla_breach: { label: "SLA Breach", description: "When an order isn't accepted on time", icon: e.jsx(R, { className: "h-4 w-4" }) }, low_stock_alert: { label: "Low Stock Alert", description: "When a product is running low", icon: e.jsx(qe, { className: "h-4 w-4" }) }, order_confirmed: { label: "Order Confirmed", description: "When a customer's order is confirmed", icon: e.jsx(S, { className: "h-4 w-4" }) }, order_accepted: { label: "Order Accepted", description: "When the kitchen starts preparing", icon: e.jsx(S, { className: "h-4 w-4" }) }, order_ready_for_pickup: { label: "Order Ready", description: "When an order is ready for pickup", icon: e.jsx(S, { className: "h-4 w-4" }) }, order_out_for_delivery: { label: "Out for Delivery", description: "When an order is on its way", icon: e.jsx(S, { className: "h-4 w-4" }) }, order_delivered: { label: "Order Delivered", description: "When an order is delivered", icon: e.jsx(z, { className: "h-4 w-4" }) }, welcome: { label: "Welcome", description: "Welcome notification for new users", icon: e.jsx(B, { className: "h-4 w-4" }) }, loyalty_points_earned: { label: "Loyalty Points", description: "When points are earned", icon: e.jsx(z, { className: "h-4 w-4" }) }, referral_reward: { label: "Referral Reward", description: "When a referral bonus is earned", icon: e.jsx(le, { className: "h-4 w-4" }) }, promo_code_received: { label: "Promo Code", description: "When a promo code is assigned", icon: e.jsx(S, { className: "h-4 w-4" }) } }, q = { push: e.jsx(We, { className: "h-4 w-4" }), email: e.jsx(Re, { className: "h-4 w-4" }), sms: e.jsx(Fe, { className: "h-4 w-4" }) }, I = { push: "Push", email: "Email", sms: "SMS" }, de = (a) => JSON.stringify(a), me = (a) => JSON.stringify(a);
function Ms() {
  const { toast: a } = ue(), { admin: x } = ke(), b = (x == null ? void 0 : x.role) === "super_admin", [j, N] = m.useState("my-preferences"), { data: u, isLoading: g } = D({ queryKey: ["/api/admin/notification-preferences"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/notification-preferences", { headers: p() });
    if (!s.ok) throw new Error("Failed to load preferences");
    return s.json();
  }) }), { data: o } = D({ queryKey: ["/api/admin/notification-preferences/defaults"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/notification-preferences/defaults", { headers: p() });
    if (!s.ok) throw new Error("Failed to load defaults");
    return s.json();
  }) }), [c, v] = m.useState({}), [l, P] = m.useState(false), F = l ? c : (u == null ? void 0 : u.preferences) || {}, $ = m.useRef(F);
  m.useEffect(() => {
    $.current = F;
  }, [F]);
  const Ne = (s, t, n) => {
    const i = __spreadValues({}, F);
    i[s] || (i[s] = {}), i[s][t] = n, v(i), P(true);
  }, y = L({ mutationFn: (s) => __async(null, null, function* () {
    const t = yield fetch("/api/admin/notification-preferences", { method: "PUT", headers: p(), body: JSON.stringify({ preferences: s }) });
    if (!t.ok) throw new Error("Failed to save");
    return t.json();
  }), onSuccess: (s, t) => {
    se.setQueryData(["/api/admin/notification-preferences"], { preferences: t }), de($.current) === de(t) && P(false);
  }, onError: () => a({ title: "Failed to save preferences", variant: "destructive" }) });
  m.useEffect(() => {
    if (!l || y.isPending) return;
    const s = window.setTimeout(() => {
      y.mutate(c);
    }, 400);
    return () => window.clearTimeout(s);
  }, [l, c, y.isPending, y.mutate]);
  const { data: ve, isLoading: Pe } = D({ queryKey: ["/api/admin/notification-config"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/notification-config", { headers: p() });
    if (!s.ok) throw new Error("Failed to load system config");
    return s.json();
  }) }), [O, H] = m.useState(null), [T, U] = m.useState(false), d = T && O ? O : ve, Q = m.useRef(d != null ? d : null);
  m.useEffect(() => {
    Q.current = d != null ? d : null;
  }, [d]);
  const Y = (s, t, n, i) => {
    const h = d || { customerEvents: {}, adminEvents: {}, soundProfiles: {} }, r = __spreadProps(__spreadValues({}, h), { [s]: __spreadValues({}, h[s]) });
    r[s][t] || (r[s][t] = { push: true, email: true, sms: true }), r[s][t] = __spreadProps(__spreadValues({}, r[s][t]), { [n]: i }), H(r), U(true);
  }, Se = (s, t) => {
    const n = d || { customerEvents: {}, adminEvents: {}, soundProfiles: {} }, i = __spreadProps(__spreadValues({}, n), { soundProfiles: __spreadProps(__spreadValues({}, n.soundProfiles), { [s]: t }) });
    H(i), U(true);
  }, w = L({ mutationFn: (s) => __async(null, null, function* () {
    const t = yield fetch("/api/admin/notification-config", { method: "PUT", headers: p(), body: JSON.stringify(s) });
    if (!t.ok) throw new Error("Failed to save");
    return t.json();
  }), onSuccess: (s, t) => {
    se.setQueryData(["/api/admin/notification-config"], t), me(Q.current) === me(t) && U(false);
  }, onError: () => a({ title: "Failed to save config", variant: "destructive" }) });
  m.useEffect(() => {
    if (!T || !O || w.isPending) return;
    const s = window.setTimeout(() => {
      w.mutate(O);
    }, 400);
    return () => window.clearTimeout(s);
  }, [T, O, w.isPending, w.mutate]);
  const { data: f, refetch: G } = D({ queryKey: ["/api/admin/push/status"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/push/status", { headers: p() });
    if (!s.ok) throw new Error("Failed");
    return s.json();
  }) }), X = L({ mutationFn: () => __async(null, null, function* () {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) throw new Error("Push notifications not supported in this browser");
    const s = yield navigator.serviceWorker.ready, t = yield fetch("/api/push/vapid-key"), { publicKey: n } = yield t.json();
    if (!n) throw new Error("VAPID key not configured");
    const i = yield Notification.requestPermission();
    if (i !== "granted") throw new Error(i === "denied" ? "Notifications are blocked. Click the lock icon in your browser's address bar \u2192 Site Settings \u2192 set Notifications to Allow, then try again." : "Notification permission was dismissed. Please try again and click Allow when prompted.");
    const h = yield s.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: Ue(n) }), r = h.toJSON().keys, M = yield fetch("/api/admin/push/subscribe", { method: "POST", headers: p(), body: JSON.stringify({ endpoint: h.endpoint, keys: { p256dh: r == null ? void 0 : r.p256dh, auth: r == null ? void 0 : r.auth } }) });
    if (!M.ok) throw new Error("Failed to register subscription");
    return M.json();
  }), onSuccess: () => {
    a({ title: "Push notifications enabled" }), G();
  }, onError: (s) => {
    a({ title: s.message, variant: "destructive" });
  } }), Z = L({ mutationFn: () => __async(null, null, function* () {
    const t = yield (yield navigator.serviceWorker.ready).pushManager.getSubscription();
    t && (yield fetch("/api/admin/push/unsubscribe", { method: "POST", headers: p(), body: JSON.stringify({ endpoint: t.endpoint }) }), yield t.unsubscribe());
  }), onSuccess: () => {
    a({ title: "Push notifications disabled" }), G();
  }, onError: () => a({ title: "Failed to unsubscribe", variant: "destructive" }) }), V = (s, t, n, i) => {
    const h = Be[s] || { label: s, description: "", icon: e.jsx(W, { className: "h-4 w-4" }) };
    return e.jsxs("div", { className: "flex items-center justify-between py-3 border-b last:border-0", children: [e.jsxs("div", { className: "flex items-center gap-3 min-w-0 flex-1", children: [e.jsx("div", { className: "text-muted-foreground", children: h.icon }), e.jsxs("div", { className: "min-w-0", children: [e.jsx("p", { className: "font-medium text-sm", children: h.label }), e.jsx("p", { className: "text-xs text-muted-foreground truncate", children: h.description })] })] }), e.jsx("div", { className: "flex items-center gap-4 shrink-0", children: t.map((r) => {
      var ee;
      const M = ((ee = n[s]) == null ? void 0 : ee[r]) !== false;
      return e.jsxs("div", { className: "flex items-center gap-1.5", title: `${I[r]} ${M ? "enabled" : "disabled"}`, children: [e.jsx("span", { className: "text-muted-foreground", children: q[r] }), e.jsx(De, { checked: M, onCheckedChange: (Ee) => i(s, r, Ee), className: "scale-75" })] }, r);
    }) })] }, s);
  };
  return e.jsx(_e, { currentPage: "notification-preferences", children: e.jsxs("div", { className: "p-4 md:p-6 max-w-4xl mx-auto", children: [e.jsx("div", { className: "flex items-center justify-between mb-6", children: e.jsxs("div", { children: [e.jsxs("h1", { className: "text-2xl font-bold flex items-center gap-2", children: [e.jsx(W, { className: "h-6 w-6" }), " Notification Settings"] }), e.jsx("p", { className: "text-muted-foreground text-sm mt-1", children: "Manage push notifications and control which notifications are sent" })] }) }), e.jsxs(E, { className: "mb-6", children: [e.jsxs(C, { className: "pb-3", children: [e.jsxs(k, { className: "text-lg flex items-center gap-2", children: [f != null && f.subscribed ? e.jsx(W, { className: "h-5 w-5 text-green-600" }) : e.jsx(oe, { className: "h-5 w-5 text-muted-foreground" }), "Push Notifications"] }), e.jsx(A, { children: f != null && f.subscribed ? `Receiving push notifications (${f.subscriptionCount} active subscription${f.subscriptionCount !== 1 ? "s" : ""})` : "Enable push notifications to receive alerts for new orders, payouts, and more" })] }), e.jsx(_, { children: f != null && f.subscribed ? e.jsxs(K, { variant: "outline", size: "sm", onClick: () => Z.mutate(), disabled: Z.isPending, children: [e.jsx(oe, { className: "h-4 w-4 mr-1" }), " Disable Push Notifications"] }) : e.jsxs(K, { size: "sm", onClick: () => X.mutate(), disabled: X.isPending, children: [e.jsx(W, { className: "h-4 w-4 mr-1" }), " Enable Push Notifications"] }) })] }), e.jsxs(Le, { value: j, onValueChange: N, children: [e.jsxs(Te, { className: "mb-4", children: [e.jsxs(te, { value: "my-preferences", children: [e.jsx(J, { className: "h-4 w-4 mr-1" }), " My Overrides"] }), b && e.jsxs(te, { value: "system-config", children: [e.jsx(B, { className: "h-4 w-4 mr-1" }), " Global Defaults"] })] }), e.jsxs(ie, { value: "my-preferences", children: [e.jsxs(ne, { className: "mb-4", children: [e.jsx(J, { className: "h-4 w-4" }), e.jsxs(re, { children: ["Your personal overrides. These settings override the global defaults set by your administrator. If you haven't customized a setting, the ", e.jsx("strong", { children: "Global Default" }), " applies automatically."] })] }), e.jsxs(E, { children: [e.jsxs(C, { children: [e.jsx(k, { className: "text-lg", children: "My Notification Overrides" }), e.jsx(A, { children: "Customize which notifications you personally receive. Unmodified settings use global defaults. Changes save automatically." })] }), e.jsx(_, { children: g ? e.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((s) => e.jsx(ae, { className: "h-12 w-full" }, s)) }) : e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "flex items-center gap-4 mb-3 text-xs text-muted-foreground font-medium justify-end pr-1", children: ((o == null ? void 0 : o.channels) || ["push", "email", "sms"]).map((s) => e.jsxs("div", { className: "flex items-center gap-1 w-16 justify-center", children: [q[s], " ", I[s]] }, s)) }), ((o == null ? void 0 : o.adminEvents) || []).map((s) => V(s, (o == null ? void 0 : o.channels) || ["push", "email", "sms"], F, Ne)), (l || y.isPending) && e.jsxs("div", { className: "mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground", children: [e.jsx(ce, { className: `h-3.5 w-3.5 ${y.isPending ? "animate-spin" : ""}` }), e.jsx("span", { children: y.isPending ? "Saving changes..." : "Saving shortly..." })] })] }) })] }), e.jsx(Ve, {})] }), b && e.jsxs(ie, { value: "system-config", children: [e.jsxs(ne, { className: "mb-4", children: [e.jsx(B, { className: "h-4 w-4" }), e.jsxs(re, { children: [e.jsx("strong", { children: "Global Defaults" }), " \u2014 These settings apply to ", e.jsx("strong", { children: "all admins and outlets" }), ` automatically. Individual staff can override these in their "My Overrides" tab, but they don't need to. Disabling a channel here prevents it from being sent to anyone, regardless of their personal settings.`] })] }), Pe ? e.jsx("div", { className: "space-y-3", children: [1, 2, 3, 4].map((s) => e.jsx(ae, { className: "h-12 w-full" }, s)) }) : e.jsxs(e.Fragment, { children: [e.jsxs(E, { className: "mb-4", children: [e.jsxs(C, { children: [e.jsxs(k, { className: "text-lg flex items-center gap-2", children: [e.jsx(J, { className: "h-5 w-5" }), " Admin Event Defaults"] }), e.jsx(A, { children: "Default notification channels for all admin staff. Changes save automatically and apply to everyone." })] }), e.jsxs(_, { children: [e.jsx("div", { className: "flex items-center gap-4 mb-3 text-xs text-muted-foreground font-medium justify-end pr-1", children: ["push", "email", "sms"].map((s) => e.jsxs("div", { className: "flex items-center gap-1 w-16 justify-center", children: [q[s], " ", I[s]] }, s)) }), ((o == null ? void 0 : o.adminEvents) || []).map((s) => V(s, ["push", "email", "sms"], (d == null ? void 0 : d.adminEvents) || {}, (t, n, i) => Y("adminEvents", t, n, i)))] })] }), e.jsxs(E, { className: "mb-4", children: [e.jsxs(C, { children: [e.jsxs(k, { className: "text-lg flex items-center gap-2", children: [e.jsx(B, { className: "h-5 w-5" }), " Customer Event Defaults"] }), e.jsx(A, { children: "Default notification channels for customer-facing notifications" })] }), e.jsxs(_, { children: [e.jsx("div", { className: "flex items-center gap-4 mb-3 text-xs text-muted-foreground font-medium justify-end pr-1", children: ["push", "email", "sms"].map((s) => e.jsxs("div", { className: "flex items-center gap-1 w-16 justify-center", children: [q[s], " ", I[s]] }, s)) }), ((o == null ? void 0 : o.customerEvents) || []).map((s) => V(s, ["push", "email", "sms"], (d == null ? void 0 : d.customerEvents) || {}, (t, n, i) => Y("customerEvents", t, n, i)))] })] }), (T || w.isPending) && e.jsxs("div", { className: "flex items-center justify-end gap-2 text-xs text-muted-foreground", children: [e.jsx(ce, { className: `h-3.5 w-3.5 ${w.isPending ? "animate-spin" : ""}` }), e.jsx("span", { children: w.isPending ? "Saving changes..." : "Saving shortly..." })] }), e.jsxs(E, { className: "mt-4", children: [e.jsxs(C, { children: [e.jsxs(k, { className: "text-lg flex items-center gap-2", children: [e.jsx(fe, { className: "h-5 w-5" }), " Default Sound Profiles"] }), e.jsx(A, { children: "Default alert sounds for all staff. Individual admins can override these in their personal settings." })] }), e.jsx(_, { children: e.jsx("div", { className: "space-y-1", children: he.map((s) => {
    var _a;
    var n;
    const t = (_a = (n = d == null ? void 0 : d.soundProfiles) == null ? void 0 : n[s.key]) != null ? _a : s.defaultSoundProfile;
    return e.jsxs("div", { className: "flex items-center justify-between py-3 border-b last:border-0", children: [e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium text-sm", children: s.label }), e.jsx("p", { className: "text-xs text-muted-foreground", children: s.description })] }), e.jsx("div", { className: "flex items-center gap-2 shrink-0 ml-4", children: e.jsxs(je, { value: t, onValueChange: (i) => Se(s.key, i), children: [e.jsx(ge, { className: "h-8 w-[180px] text-xs", children: e.jsx(ye, {}) }), e.jsx(we, { children: pe.map((i) => {
      const h = xe[i];
      return e.jsxs(be, { value: i, children: [h.label, i === s.defaultSoundProfile ? " (default)" : ""] }, i);
    }) })] }) })] }, s.key);
  }) }) })] })] })] })] })] }) });
}
function Ue(a) {
  const x = "=".repeat((4 - a.length % 4) % 4), b = (a + x).replace(/-/g, "+").replace(/_/g, "/"), j = window.atob(b), N = new Uint8Array(j.length);
  for (let u = 0; u < j.length; ++u) N[u] = j.charCodeAt(u);
  return N;
}
function Ve() {
  const { toast: a } = ue(), { isMuted: x, playPreview: b } = Oe(), j = Ae(), [N, u] = m.useState({}), { data: g } = D({ queryKey: ["/api/admin/notification-preferences"], queryFn: () => __async(null, null, function* () {
    const c = yield fetch("/api/admin/notification-preferences", { headers: p() });
    if (!c.ok) throw new Error("Failed to load preferences");
    return c.json();
  }) });
  m.useEffect(() => {
    g != null && g.soundProfiles && u(g.soundProfiles);
  }, [g]);
  const o = L({ mutationFn: (_0) => __async(null, [_0], function* ({ eventType: c, soundProfile: v }) {
    const l = yield fetch("/api/admin/notification-preferences/sound", { method: "PUT", headers: p(), body: JSON.stringify({ eventType: c, soundProfile: v }) });
    if (!l.ok) throw new Error("Failed to update");
    return l.json();
  }), onSuccess: () => {
    a({ title: "Sound preference updated" }), j.invalidateQueries({ queryKey: ["/api/admin/notification-preferences"] });
  }, onError: () => {
    a({ title: "Failed to update sound", variant: "destructive" });
  } });
  return e.jsxs(E, { className: "mt-4", children: [e.jsxs(C, { children: [e.jsxs(k, { className: "text-lg flex items-center gap-2", children: [e.jsx(fe, { className: "h-5 w-5" }), " My Sound Overrides"] }), e.jsx(A, { children: "Override the global default sounds for your account only. If not customized, the global default sound profile is used." })] }), e.jsxs(_, { children: [x && e.jsxs("div", { className: "flex items-center gap-2 rounded-md bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800 mb-4", children: [e.jsx(Me, { className: "h-3.5 w-3.5 shrink-0" }), "All notification sounds are currently muted. Use the speaker icon in the header to unmute."] }), e.jsx("div", { className: "space-y-1", children: he.map((c) => {
    var _a;
    const v = (_a = N[c.key]) != null ? _a : c.defaultSoundProfile;
    return e.jsxs("div", { className: "flex items-center justify-between py-3 border-b last:border-0", children: [e.jsxs("div", { className: "min-w-0 flex-1", children: [e.jsx("p", { className: "font-medium text-sm", children: c.label }), e.jsx("p", { className: "text-xs text-muted-foreground", children: c.description })] }), e.jsxs("div", { className: "flex items-center gap-2 shrink-0 ml-4", children: [e.jsxs(je, { value: v, onValueChange: (l) => {
      u((P) => __spreadProps(__spreadValues({}, P), { [c.key]: l })), o.mutate({ eventType: c.key, soundProfile: l });
    }, children: [e.jsx(ge, { className: "h-8 w-[180px] text-xs", children: e.jsx(ye, {}) }), e.jsx(we, { children: pe.map((l) => {
      const P = xe[l];
      return e.jsxs(be, { value: l, children: [P.label, l === c.defaultSoundProfile ? " (default)" : ""] }, l);
    }) })] }), e.jsx(K, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", disabled: x, onClick: () => b(v), title: "Test sound", children: e.jsx(Ie, { className: "h-3.5 w-3.5" }) })] })] }, c.key);
  }) })] })] });
}
export { Ms as default };
