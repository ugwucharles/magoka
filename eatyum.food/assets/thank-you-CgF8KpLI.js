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
import { u as O, c as U, r as c, b as S, Q as B, R as q, S as W, l as G, m as J, j as e, E as u, H as N, T as V, I as y, F as v, B as d } from "./index-DOfu0sXg.js";
import { B as E } from "./badge-BAjaXL1S.js";
import { S as K } from "./separator-B__B0Kv_.js";
import { u as z } from "./use-auth-d_ltKWkf.js";
import { c as H, g as Q } from "./points-utils-CJKWL9Rb.js";
import { C as X } from "./checkout-auth-flow-CwcIMq7d.js";
import { u as Z, f as l } from "./useReferralReward-BeyZodYI.js";
import { S as D } from "./star-o2YGpjzJ.js";
import { G as T } from "./gift-C_SZrOe8.js";
import { C as ee } from "./copy-Dm_kp7Au.js";
import { M as re } from "./message-circle-Ctbm3h4-.js";
import { E as se } from "./external-link-CR-HDEeC.js";
import { S as te } from "./send-BggwJqFg.js";
import { S as ae } from "./share-2-CzhGwcTj.js";
import { A as ne } from "./arrow-right-CS_UFvxY.js";
import "./dialog-BUvIuveX.js";
import "./Combination-C65a2kPq.js";
import "./input-FyV2XACZ.js";
import "./label-B38UEnoM.js";
import "./auth-AqNcfriC.js";
import "./arrow-left-CK7JF7w9.js";
import "./user-adl9AYKF.js";
import "./mail-WBbfgCoF.js";
import "./clock-DQ0X7PrC.js";
function Le() {
  const [oe, g] = O(), { user: r } = z(), { toast: w } = U(), [M, p] = c.useState(false), [A, C] = c.useState(false), { data: s, isLoading: ie, error: le } = Z(), [h] = c.useState(() => sessionStorage.getItem("last-order-number")), [n] = c.useState(() => sessionStorage.getItem("last-order-total")), { data: a, isLoading: L } = S({ queryKey: ["/api/orders/by-number", h], enabled: !!h }), { data: I } = S({ queryKey: ["/api/points"], enabled: !!r }), { data: x } = S({ queryKey: ["/api/referrals"], enabled: !!r });
  c.useEffect(() => {
    if (h) {
      const t = setTimeout(() => {
        sessionStorage.removeItem("last-order-number"), sessionStorage.removeItem("last-order-total"), g(`/orders/${h}/track`);
      }, 2e3);
      return () => {
        clearTimeout(t);
      };
    } else g("/");
  }, [h, g]), c.useEffect(() => {
    var t, o;
    if (a && n && r) try {
      const j = sessionStorage.getItem("campaignData");
      if (j) try {
        const i = JSON.parse(j);
        fetch("/api/campaigns/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(__spreadProps(__spreadValues({}, i), { action: "order", orderId: a.id, orderTotal: parseFloat(n), timestamp: (/* @__PURE__ */ new Date()).toISOString() })) }).catch(console.error);
      } catch (i) {
        console.error("Failed to track campaign order:", i);
      }
      B({ price: parseFloat(n), item_category: "food", payment_info_available: true, user_email: r.email, user_phone_number: r.phone, uuid_c1: (t = a.id) == null ? void 0 : t.toString() }), a.items && q({ orderId: a.orderNumber, totalValue: parseFloat(n), currency: "NGN", items: a.items.map((i) => {
        var P;
        return { productId: ((P = i.productId) == null ? void 0 : P.toString()) || "unknown", productName: i.name || "Unknown Product", quantity: i.quantity || 1, price: (i.totalPrice || 0) / 100 };
      }), userEmail: r.email, userPhone: r.phone, userId: (o = r.id) == null ? void 0 : o.toString() }), W({ orderId: a.orderNumber, total: n, items: a.items || [] });
    } catch (j) {
      console.warn("Purchase tracking error:", j);
    }
  }, [a, n, r]), c.useEffect(() => {
    var t;
    try {
      G("Thank You", { content_type: "page", content_name: "Order Confirmation", content_category: "thank-you", value: n ? parseFloat(n) : void 0, currency: "NGN", em: r != null && r.email ? btoa(r.email.toLowerCase().trim()) : void 0, ph: r != null && r.phone ? btoa(r.phone.replace(/\D/g, "")) : void 0, external_id: (t = r == null ? void 0 : r.id) == null ? void 0 : t.toString() }), J("Thank You");
    } catch (o) {
      console.warn("Thank you page view tracking error:", o);
    }
  }, [r, n]);
  const m = () => x != null && x.referralCode ? `https://eatyum.food/r/${x.referralCode}` : "", f = () => __async(null, null, function* () {
    const t = m();
    if (t) try {
      yield navigator.clipboard.writeText(t), C(true), w({ title: "Link copied!", description: "Your referral link has been copied to clipboard" }), setTimeout(() => C(false), 2e3);
    } catch (e2) {
      w({ title: "Failed to copy", description: "Please copy the link manually", variant: "destructive" });
    }
  }), R = () => {
    const t = m(), o = `\u{1F37D}\uFE0F Join me on EatYum and get ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus! Use my referral link: ${t} - Earn ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} after your first order of \u20A61500+. Real EatYum. \u{1F525}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(o)}`, "_blank");
  }, Y = () => {
    m(), f(), w({ title: "Link copied for Instagram!", description: "Paste this link in your Instagram DM or story" });
  }, F = () => {
    const t = m(), o = `\u{1F37D}\uFE0F Join me on EatYum and get ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus! Use my referral link: ${t} - Earn ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} after your first order of \u20A61500+. Real EatYum. \u{1F525}`;
    window.open(`sms:?body=${encodeURIComponent(o)}`);
  }, _ = () => __async(null, null, function* () {
    const t = m();
    if (navigator.share) try {
      yield navigator.share({ title: `Join EatYum and get ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus!`, text: `Use my referral link to sign up for EatYum and get ${l((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus after your first order of \u20A61500+`, url: t });
    } catch (e2) {
      f();
    }
    else f();
  });
  if (L) return e.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center", children: e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }) });
  const b = n ? Math.round(parseFloat(n) * 100) : 0, k = r && b ? H(b) : 0, $ = b ? Q(b, k) : "";
  return e.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-8 px-4", children: [e.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [e.jsx(u, { className: "text-center border-green-200 bg-white shadow-lg", children: e.jsxs(N, { className: "pb-4", children: [e.jsx("div", { className: "flex justify-center mb-4", children: e.jsx(V, { className: "h-16 w-16 text-green-500" }) }), e.jsx(y, { className: "text-2xl font-bold text-gray-900", children: "Order Confirmed!" }), e.jsx("p", { className: "text-gray-600 mt-2", children: "Thank you for your order. We're preparing your delicious meal!" }), e.jsxs("div", { className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg", children: [e.jsx("p", { className: "text-blue-800 text-sm font-medium", children: "Redirecting to order tracking page..." }), e.jsx("p", { className: "text-blue-600 text-xs mt-1", children: "You'll be able to track your order status and leave reviews once delivered" })] })] }) }), a && e.jsxs(u, { className: "bg-white shadow-lg", children: [e.jsx(N, { children: e.jsxs(y, { className: "flex items-center gap-2", children: [e.jsx("span", { children: "Order Details" }), e.jsxs(E, { variant: "secondary", children: ["#", a.orderNumber] })] }) }), e.jsxs(v, { className: "space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-gray-600", children: "Order Total" }), e.jsxs("span", { className: "font-semibold text-lg", children: ["\u20A6", parseFloat(a.total.toString()).toLocaleString()] })] }), e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-gray-600", children: "Payment Method" }), e.jsx("span", { className: "font-medium", children: a.paymentMethod })] }), e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-gray-600", children: "Delivery Address" }), e.jsx("span", { className: "font-medium text-right max-w-xs", children: a.deliveryAddress })] })] })] }), r && k > 0 && e.jsxs(u, { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200 shadow-lg", children: [e.jsx(N, { children: e.jsxs(y, { className: "flex items-center gap-2 text-orange-800", children: [e.jsx(D, { className: "h-5 w-5" }), "EatYum Points (When Delivered)"] }) }), e.jsxs(v, { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("p", { className: "text-orange-700 font-medium", children: ["+", k, " Points Will Be Added"] }), e.jsx("p", { className: "text-orange-600 text-sm", children: $ }), e.jsx("p", { className: "text-orange-600 text-xs mt-1", children: "Points will be credited when your order is delivered" })] }), e.jsx(T, { className: "h-8 w-8 text-orange-500" })] }), I && e.jsxs(e.Fragment, { children: [e.jsx(K, { className: "bg-orange-200" }), e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-orange-700", children: "Your Total Points" }), e.jsxs(E, { variant: "outline", className: "border-orange-300 text-orange-800", children: [I.balance, " points"] })] })] }), e.jsxs("div", { className: "bg-orange-100 p-3 rounded-lg", children: [e.jsx("p", { className: "text-orange-800 text-sm font-medium mb-1", children: "Points Rewards Available:" }), e.jsxs("ul", { className: "text-orange-700 text-xs space-y-1", children: [e.jsx("li", { children: "\u2022 200 points = Free Meal" }), e.jsx("li", { children: "\u2022 500 points = VIP Box" })] })] })] })] }), r && x && e.jsxs(u, { className: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-200 shadow-lg", children: [e.jsxs(N, { className: "text-center pb-4", children: [e.jsx("div", { className: "flex justify-center mb-3", children: e.jsx("div", { className: "bg-green-100 p-3 rounded-full", children: e.jsx(T, { className: "h-8 w-8 text-green-600" }) }) }), e.jsx(y, { className: "text-2xl font-bold text-gray-900", children: "Next Meal On Us? \u{1F440}" }), e.jsxs("p", { className: "text-gray-700 mt-2 text-lg", children: ["Earn ", l((s == null ? void 0 : s.amountInNaira) || 2e3), " for every friend who orders with your link. Unlimited rewards. Real EatYum."] })] }), e.jsxs(v, { className: "space-y-6", children: [e.jsxs("div", { className: "bg-white p-4 rounded-lg border border-green-200", children: [e.jsx("label", { className: "text-sm font-medium text-gray-700 mb-2 block", children: "Your Unique Referral Link" }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "flex-1 bg-gray-50 p-3 rounded border text-sm font-mono text-gray-800 break-all", children: m() }), e.jsx(d, { onClick: f, variant: "outline", size: "sm", className: "shrink-0", children: A ? "Copied!" : e.jsxs(e.Fragment, { children: [e.jsx(ee, { className: "h-4 w-4 mr-1" }), "Copy"] }) })] })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsx("h4", { className: "font-semibold text-gray-900 text-center", children: "Share with friends:" }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs(d, { onClick: R, className: "bg-green-600 hover:bg-green-700 text-white flex items-center gap-2", children: [e.jsx(re, { className: "h-4 w-4" }), "WhatsApp"] }), e.jsxs(d, { onClick: Y, className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white flex items-center gap-2", children: [e.jsx(se, { className: "h-4 w-4" }), "Instagram"] }), e.jsxs(d, { onClick: F, variant: "outline", className: "border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2", children: [e.jsx(te, { className: "h-4 w-4" }), "SMS"] }), e.jsxs(d, { onClick: _, variant: "outline", className: "border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2", children: [e.jsx(ae, { className: "h-4 w-4" }), "More"] })] })] }), e.jsxs("div", { className: "bg-green-100 p-4 rounded-lg", children: [e.jsx("h5", { className: "font-semibold text-green-800 mb-2", children: "How it works:" }), e.jsxs("ul", { className: "text-green-700 text-sm space-y-1", children: [e.jsx("li", { children: "\u2022 Share your link with friends and family" }), e.jsx("li", { children: "\u2022 They sign up using your unique link" }), e.jsxs("li", { children: ["\u2022 When they place their first order of \u20A61500+, you both get ", l((s == null ? void 0 : s.amountInNaira) || 2e3), "!"] }), e.jsx("li", { children: "\u2022 Unlimited referrals = unlimited rewards" })] })] })] })] }), e.jsx("div", { className: "space-y-3", children: e.jsxs(d, { onClick: () => g("/"), className: "w-full bg-red-600 hover:bg-red-700 text-white", size: "lg", children: ["Continue Shopping", e.jsx(ne, { className: "ml-2 h-4 w-4" })] }) }), !r && e.jsx(u, { className: "bg-blue-50 border-blue-200", children: e.jsx(v, { className: "pt-6", children: e.jsxs("div", { className: "text-center space-y-3", children: [e.jsx("h3", { className: "font-semibold text-blue-900", children: "Want to Earn Points on Future Orders?" }), e.jsx("p", { className: "text-blue-700 text-sm", children: "Create an account to start earning EatYum Points with every order and unlock exclusive rewards!" }), e.jsx(d, { onClick: () => p(true), className: "bg-blue-600 hover:bg-blue-700", size: "sm", children: "Create Account" })] }) }) })] }), e.jsx(X, { open: M, onClose: () => p(false), onAuthenticated: () => {
    p(false), window.location.reload();
  }, onContinueAsGuest: () => p(false) })] });
}
export { Le as default };
