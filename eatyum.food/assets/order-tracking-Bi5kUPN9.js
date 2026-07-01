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
import { N as R, U as D, a as se, r as g, b as I, j as e, L as E, B as k, E as N, H as L, I as F, F as w, c as M, T as P, V as q, W as Y } from "./index-DOfu0sXg.js";
import { u as G } from "./useMutation-CVmbONMy.js";
import { B as re } from "./badge-BAjaXL1S.js";
import { T as O } from "./textarea-__Yhw9VH.js";
import { u as Q } from "./use-auth-d_ltKWkf.js";
import { u as U, f as $ } from "./useReferralReward-BeyZodYI.js";
import { f as T } from "./currency-cZDvJQzL.js";
import { f as te, a as ae } from "./timezone-utils-D5P8NMTs.js";
import { g as W } from "./status-utils-BojSicDw.js";
import { P as H } from "./package-CpPTLD0o.js";
import { A as ne } from "./arrow-left-CK7JF7w9.js";
import { C as ie } from "./clock-DQ0X7PrC.js";
import { S as K } from "./star-o2YGpjzJ.js";
import { T as le } from "./truck-BHJTFh2e.js";
import { M as oe } from "./map-pin-ChG4yLkU.js";
import { P as ce } from "./phone-Cx4FTVKN.js";
import { D as de } from "./download-ukPRPFea.js";
import { E as me } from "./external-link-CR-HDEeC.js";
import { S as xe } from "./share-2-CzhGwcTj.js";
import { C as ue } from "./copy-Dm_kp7Au.js";
import { M as he } from "./message-circle-Ctbm3h4-.js";
import { S as pe } from "./smartphone-DMb4mbpx.js";
import { C as je } from "./chevron-down-DegxUQDE.js";
import { C as fe } from "./chevron-right-DkUlsPHD.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const V = R("Bike", [["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }], ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const J = R("ChefHat", [["path", { d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z", key: "1qvrer" }], ["path", { d: "M6 17h12", key: "1jwigz" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Z = R("Headphones", [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3", key: "1xhozi" }]]), ye = () => {
  const s = navigator.userAgent || navigator.vendor;
  return /iPad|iPhone|iPod/.test(s) ? "ios" : /android/i.test(s) ? "android" : "unknown";
}, ge = "https://play.google.com/store/apps/details?id=com.exolvemedia.naijarecipes&hl=en", ve = "https://apps.apple.com/ng/app/eatyum-food/id6615071543", be = (s, m, a) => s === "ios" && a ? a : s === "android" && m ? m : m || a, Ne = ({ brandName: s, playStoreUrl: m, appStoreUrl: a }) => {
  if (!m && !a) return null;
  const t = ye(), l = be(t, m, a);
  if (!l) return null;
  const c = () => l === a ? "Download on App Store" : l === m ? "Get it on Google Play" : "Open the App";
  return e.jsx(N, { className: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-3", children: e.jsx(w, { className: "p-4", children: e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx("div", { className: "bg-blue-500 rounded-full p-2 flex-shrink-0", children: e.jsx(de, { className: "w-5 h-5 text-white" }) }), e.jsxs("div", { className: "flex-1", children: [e.jsxs("h3", { className: "font-bold text-sm text-blue-700 mb-1", children: ["Get the best experience on the ", s, " App!"] }), e.jsx("p", { className: "text-xs text-blue-600", children: "Faster ordering, exclusive deals, and real-time tracking" })] }), e.jsxs(k, { onClick: () => window.open(l, "_blank"), className: "bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-2 h-8 flex items-center gap-1.5 flex-shrink-0", children: [e.jsx(me, { className: "h-3 w-3" }), c()] })] }) }) });
}, X = (s) => {
  switch (s) {
    case "unpaid":
      return "bg-red-500";
    case "pending":
      return "bg-yellow-500";
    case "confirmed":
      return "bg-blue-500";
    case "accepted":
      return "bg-green-500";
    case "in_progress":
      return "bg-purple-500";
    case "ready_for_pickup":
      return "bg-indigo-500";
    case "out_for_delivery":
      return "bg-orange-500";
    case "delivered":
      return "bg-green-600";
    case "cancelled_by_customer":
      return "bg-red-500";
    case "cancelled_by_outlet":
      return "bg-red-500";
    case "failed":
      return "bg-red-500";
    case "refunded":
      return "bg-gray-500";
    default:
      return "bg-gray-500";
  }
}, we = ({ status: s, orderType: m }) => {
  const a = s === "unpaid", t = m === "delivery" ? ["pending", "accepted", "in_progress", "out_for_delivery", "delivered"] : ["pending", "accepted", "in_progress", "ready_for_pickup", "delivered"], c = ["cancelled_by_customer", "cancelled_by_outlet", "failed", "refunded"].includes(s);
  let d = s;
  s === "confirmed" && (d = "pending"), m === "delivery" && s === "ready_for_pickup" && (d = "out_for_delivery");
  const n = t.indexOf(d), i = c || a ? 0 : n >= 0 ? (n + 1) / t.length * 100 : 0;
  return a ? e.jsxs("div", { className: "mb-4", children: [e.jsx("div", { className: "flex items-center justify-between mb-2", children: e.jsx("h3", { className: "font-semibold text-sm text-red-600", children: "Payment Incomplete" }) }), e.jsx("p", { className: "text-xs text-gray-600 mb-2", children: "Complete your payment to process this order." }), e.jsx("div", { className: "w-full bg-red-200 rounded-full h-2", children: e.jsx("div", { className: "h-2 rounded-full bg-red-500", style: { width: "0%" } }) })] }) : e.jsxs("div", { className: "mb-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [e.jsx("h3", { className: "font-semibold text-sm", children: W(s) }), !c && e.jsxs("span", { className: "text-xs text-gray-500", children: [n + 1, " of ", t.length] })] }), e.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: e.jsx("div", { className: `h-2 rounded-full transition-all duration-300 ${X(s)}`, style: { width: `${i}%` } }) })] });
}, z = ({ rating: s, onRatingChange: m, size: a = 20, interactive: t = false }) => e.jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((l) => e.jsx(K, { size: a, className: `transition-colors ${l <= s ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} ${t ? "cursor-pointer hover:text-yellow-300 hover:fill-yellow-300" : ""}`, onClick: t && m ? () => m(l) : void 0 }, l)) }), ke = ({ brandName: s, brandBaseUrl: m }) => {
  const { user: a } = Q(), { toast: t } = M(), [l, c] = g.useState(false), { data: d, isLoading: n } = I({ queryKey: ["/api/referrals"], enabled: !!a }), { data: i, isLoading: v, error: f } = U(), x = () => d != null && d.referralCode ? `${m}/r/${d.referralCode}` : "", A = (j) => `\u{1F37D}\uFE0F Join me on ${s} and get ${$((i == null ? void 0 : i.amountInNaira) || 2e3)} bonus! Use my referral code: ${d == null ? void 0 : d.referralCode} or link: ${j} - Earn ${$((i == null ? void 0 : i.amountInNaira) || 2e3)} after your first order of \u20A61500+. ${s} \u{1F525}`, r = () => __async(null, null, function* () {
    const j = x();
    if (j) try {
      yield navigator.clipboard.writeText(j), c(true), t({ title: "Link copied!", description: "Your referral link has been copied to clipboard" }), setTimeout(() => c(false), 2e3);
    } catch (e2) {
      t({ title: "Failed to copy", description: "Please copy the link manually", variant: "destructive" });
    }
  }), C = () => {
    const j = x(), p = A(j);
    window.open(`https://wa.me/?text=${encodeURIComponent(p)}`);
  }, h = () => __async(null, null, function* () {
    const j = x();
    if (navigator.share) try {
      yield navigator.share({ title: `Join ${s} and get ${$((i == null ? void 0 : i.amountInNaira) || 2e3)} bonus!`, text: `Use my referral code: ${d == null ? void 0 : d.referralCode} to sign up for ${s} and get ${$((i == null ? void 0 : i.amountInNaira) || 2e3)} bonus after your first order of \u20A61500+`, url: j });
    } catch (e2) {
      r();
    }
    else r();
  });
  return !a || n || !d ? null : e.jsx(N, { className: "bg-gradient-to-r from-red-50 to-orange-50 border-red-200 mb-4", children: e.jsx(w, { className: "p-3", children: e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx("div", { className: "bg-red-500 rounded-full p-1.5 flex-shrink-0", children: e.jsx(xe, { className: "w-3.5 h-3.5 text-white" }) }), e.jsxs("div", { className: "flex-1", children: [e.jsxs("h3", { className: "font-bold text-xs text-red-700", children: ["Share & Earn ", $((i == null ? void 0 : i.amountInNaira) || 2e3), "!"] }), e.jsx("p", { className: "text-xs text-red-600 mt-0.5", children: "Invite friends and earn rewards" })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { children: [e.jsxs("label", { className: "text-xs font-medium text-red-700", children: ["Code: ", d.referralCode] }), e.jsx(k, { variant: "outline", size: "sm", onClick: r, className: "text-xs border-red-300 text-red-600 hover:bg-red-50 ml-2 h-6 px-2", children: l ? e.jsx(P, { className: "h-2.5 w-2.5" }) : e.jsx(ue, { className: "h-2.5 w-2.5" }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-1.5", children: [e.jsxs(k, { onClick: C, className: "bg-green-500 hover:bg-green-600 text-white text-xs h-7 flex items-center gap-1.5", children: [e.jsx(he, { className: "h-2.5 w-2.5" }), "WhatsApp"] }), e.jsxs(k, { onClick: h, className: "bg-gray-500 hover:bg-gray-600 text-white text-xs h-7 flex items-center gap-1.5", children: [e.jsx(pe, { className: "h-2.5 w-2.5" }), "Share"] })] })] })] }) }) });
}, Ce = ["", "Terrible \u{1F61E}", "Poor \u{1F615}", "Okay \u{1F610}", "Good \u{1F60A}", "Excellent! \u{1F929}"], Se = ({ item: s, orderId: m, existingReview: a, onDone: t }) => {
  const [l, c] = g.useState((a == null ? void 0 : a.rating) || 0), [d, n] = g.useState((a == null ? void 0 : a.reviewText) || ""), { toast: i } = M(), v = q(), f = G({ mutationFn: (x) => Y("POST", "/api/reviews", x), onSuccess: () => {
    i({ title: "Food rated!", description: "Thanks for rating this item." }), v.invalidateQueries({ queryKey: ["/api/orders"] }), t();
  }, onError: () => i({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" }) });
  return a ? e.jsxs("div", { className: "space-y-1", children: [e.jsx(z, { rating: a.rating, size: 22 }), a.reviewText && e.jsxs("p", { className: "text-xs text-gray-600 italic", children: ['"', a.reviewText, '"'] }), e.jsxs("p", { className: "text-xs text-green-600 flex items-center gap-1", children: [e.jsx(P, { size: 11 }), " Submitted ", ae(a.createdAt, "MMM dd, yyyy")] })] }) : e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { children: [e.jsxs("p", { className: "text-sm font-medium text-gray-700 mb-2", children: ["Rate ", e.jsx("span", { className: "font-semibold", children: s.name })] }), e.jsx(z, { rating: l, onRatingChange: c, size: 28, interactive: true }), l === 0 && e.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "Tap a star to rate" }), l > 0 && e.jsx("p", { className: "text-xs text-yellow-600 mt-1 font-medium", children: Ce[l] })] }), e.jsx(O, { value: d, onChange: (x) => n(x.target.value), placeholder: "What did you think? (optional)", maxLength: 500, className: "text-sm min-h-16 resize-none" }), e.jsx(k, { onClick: () => {
    if (!l) return i({ title: "Pick a star rating first", variant: "destructive" });
    f.mutate({ orderId: m, productId: s.productId, rating: l, reviewText: d.trim() || void 0 });
  }, disabled: f.isPending || l === 0, className: "w-full h-9 text-sm font-semibold", children: f.isPending ? "Submitting\u2026" : "Submit Food Rating" })] });
}, Te = ["On time", "Professional", "Friendly", "Fast delivery", "Careful handling"], ze = ["Helpful", "Responsive", "Resolved my issue", "Polite", "Quick response"], B = ({ label: s, active: m, onClick: a, activeClass: t }) => e.jsx("button", { type: "button", onClick: a, className: `text-xs px-2.5 py-1 rounded-full border transition-colors ${m ? t : "border-gray-300 text-gray-600 hover:border-gray-400"}`, children: s }), Ae = ({ orderNumber: s, orderId: m, orderType: a, existingRating: t, onDone: l }) => {
  var _a, _b, _c, _d;
  const [c, d] = g.useState((_a = t == null ? void 0 : t.riderRating) != null ? _a : 0), [n, i] = g.useState((_b = t == null ? void 0 : t.riderComment) != null ? _b : ""), [v, f] = g.useState([]), [x, A] = g.useState((_c = t == null ? void 0 : t.serviceRating) != null ? _c : 0), [r, C] = g.useState((_d = t == null ? void 0 : t.serviceComment) != null ? _d : ""), [h, j] = g.useState([]), { toast: p } = M(), S = q(), u = (o, y, _) => _(y.includes(o) ? y.filter((ee) => ee !== o) : [...y, o]), b = G({ mutationFn: (o) => Y("POST", `/api/orders/${s}/rating`, o), onSuccess: () => {
    p({ title: "Thanks for your feedback!", description: "Your ratings have been saved." }), S.invalidateQueries({ queryKey: ["/api/orders", s, "rating"] }), l();
  }, onError: () => p({ title: "Error", description: "Failed to save. Please try again.", variant: "destructive" }) });
  return t ? e.jsxs("div", { className: "space-y-3", children: [t.riderRating != null && a === "delivery" && e.jsxs("div", { children: [e.jsx("p", { className: "text-xs text-gray-500 mb-1", children: "Rider" }), e.jsx(z, { rating: t.riderRating, size: 20 }), t.riderComment && e.jsxs("p", { className: "text-xs text-gray-600 italic mt-1", children: ['"', t.riderComment, '"'] })] }), t.serviceRating != null && e.jsxs("div", { children: [e.jsx("p", { className: "text-xs text-gray-500 mb-1", children: "Customer Service" }), e.jsx(z, { rating: t.serviceRating, size: 20 }), t.serviceComment && e.jsxs("p", { className: "text-xs text-gray-600 italic mt-1", children: ['"', t.serviceComment, '"'] })] }), e.jsxs("p", { className: "text-xs text-green-600 flex items-center gap-1", children: [e.jsx(P, { size: 11 }), " Submitted"] })] }) : e.jsxs("div", { className: "space-y-5", children: [a === "delivery" && e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(V, { size: 16, className: "text-orange-500" }), e.jsx("p", { className: "text-sm font-semibold text-gray-800", children: "How was your rider?" })] }), e.jsx(z, { rating: c, onRatingChange: d, size: 28, interactive: true }), c === 0 && e.jsx("p", { className: "text-xs text-gray-400", children: "Tap a star to rate" }), c > 0 && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "flex flex-wrap gap-1.5 mt-1", children: Te.map((o) => e.jsx(B, { label: o, active: v.includes(o), onClick: () => u(o, v, f), activeClass: "bg-orange-500 text-white border-orange-500" }, o)) }), e.jsx(O, { value: n, onChange: (o) => i(o.target.value), placeholder: "Any comments about your rider? (optional)", maxLength: 300, className: "text-sm min-h-14 resize-none" })] })] }), a === "delivery" && e.jsx("div", { className: "border-t border-dashed border-gray-200" }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Z, { size: 16, className: "text-purple-500" }), e.jsx("p", { className: "text-sm font-semibold text-gray-800", children: "How was our customer service?" })] }), e.jsx(z, { rating: x, onRatingChange: A, size: 28, interactive: true }), x === 0 && e.jsx("p", { className: "text-xs text-gray-400", children: "Tap a star to rate" }), x > 0 && e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "flex flex-wrap gap-1.5 mt-1", children: ze.map((o) => e.jsx(B, { label: o, active: h.includes(o), onClick: () => u(o, h, j), activeClass: "bg-purple-500 text-white border-purple-500" }, o)) }), e.jsx(O, { value: r, onChange: (o) => C(o.target.value), placeholder: "Any comments about our support team? (optional)", maxLength: 300, className: "text-sm min-h-14 resize-none" })] })] }), e.jsx(k, { onClick: () => {
    const o = (y, _) => [y.length ? `[${y.join(", ")}]` : "", _.trim()].filter(Boolean).join(" ") || void 0;
    b.mutate({ riderRating: a === "delivery" && c > 0 ? c : void 0, riderComment: a === "delivery" ? o(v, n) : void 0, serviceRating: x > 0 ? x : void 0, serviceComment: o(h, r) });
  }, disabled: b.isPending, className: "w-full h-9 text-sm font-semibold", children: b.isPending ? "Saving\u2026" : "Submit Ratings" })] });
}, _e = ({ order: s, existingRating: m }) => {
  var _a;
  var C;
  const [a, t] = g.useState(null), [l, c] = g.useState(false), [d, n] = g.useState(false), i = ((_a = (C = s.reviews) == null ? void 0 : C.length) != null ? _a : 0) >= s.items.length, v = !!m || d, f = s.orderType === "delivery" ? 3 : 2, x = (i || l ? 1 : 0) + (v ? s.orderType === "delivery" ? 2 : 1 : 0);
  if (x >= f) return e.jsx(N, { className: "mb-4 border-green-300 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm", children: e.jsxs(w, { className: "p-5 text-center", children: [e.jsx(P, { className: "h-10 w-10 text-green-500 mx-auto mb-2" }), e.jsx("h3", { className: "font-bold text-green-800 text-base mb-1", children: "Thank you for your feedback!" }), e.jsx("p", { className: "text-xs text-green-600", children: "Your ratings help us serve you better." })] }) });
  const r = [{ key: "food", icon: e.jsx(J, { size: 20, className: "text-red-500" }), label: "Food Quality", description: `Rate ${s.items.length} item${s.items.length !== 1 ? "s" : ""}`, done: i || l }, ...s.orderType === "delivery" ? [{ key: "rider", icon: e.jsx(V, { size: 20, className: "text-orange-500" }), label: "Delivery Rider", description: "How was your delivery?", done: v }] : [], { key: "service", icon: e.jsx(Z, { size: 20, className: "text-purple-500" }), label: "Customer Service", description: "Rate our support team", done: v }];
  return e.jsx(N, { className: "mb-4 border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 shadow-md", children: e.jsxs(w, { className: "p-0", children: [e.jsxs("div", { className: "px-5 pt-5 pb-4 border-b border-amber-100", children: [e.jsxs("div", { className: "flex items-start justify-between", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-base font-bold text-gray-900", children: "How was your experience? \u2B50" }), e.jsx("p", { className: "text-xs text-gray-500 mt-0.5", children: "Tap a category to leave your rating" })] }), e.jsxs("span", { className: "text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full shrink-0 ml-2", children: [x, " / ", f, " rated"] })] }), e.jsx("div", { className: "mt-3 w-full bg-amber-100 rounded-full h-1.5", children: e.jsx("div", { className: "h-1.5 rounded-full bg-amber-500 transition-all duration-500", style: { width: `${x / f * 100}%` } }) })] }), e.jsx("div", { className: "divide-y divide-amber-100", children: r.map((h) => {
    const j = a === h.key, p = h.done;
    return e.jsxs("div", { children: [e.jsxs("button", { type: "button", onClick: () => !p && t(j ? null : h.key), className: `w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors ${p ? "cursor-default" : "hover:bg-white/60"}`, children: [e.jsx("div", { className: `p-2 rounded-full shadow-sm flex-shrink-0 ${p ? "bg-green-100" : "bg-white"}`, children: p ? e.jsx(P, { size: 20, className: "text-green-500" }) : h.icon }), e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsx("p", { className: `text-sm font-semibold ${p ? "text-gray-400 line-through" : "text-gray-800"}`, children: h.label }), e.jsx("p", { className: "text-xs text-gray-400", children: p ? "Completed \u2713" : h.description })] }), !p && (j ? e.jsx(je, { size: 16, className: "text-gray-400 flex-shrink-0" }) : e.jsx(fe, { size: 16, className: "text-gray-400 flex-shrink-0" }))] }), j && !p && e.jsxs("div", { className: "px-5 pb-5 pt-2 bg-white/80", children: [h.key === "food" && e.jsx("div", { className: "space-y-5", children: s.items.map((S) => {
      var b;
      const u = (b = s.reviews) == null ? void 0 : b.find((o) => o.productId === S.productId);
      return e.jsxs("div", { className: "border-b border-gray-100 last:border-0 pb-4 last:pb-0", children: [e.jsx("p", { className: "text-xs text-gray-400 uppercase tracking-wide mb-2", children: S.name }), e.jsx(Se, { item: S, orderId: s.id, existingReview: u, onDone: () => {
        s.items.length <= 1 && (c(true), t(null));
      } })] }, S.id);
    }) }), (h.key === "rider" || h.key === "service") && e.jsx(Ae, { orderNumber: s.orderNumber, orderId: s.id, orderType: s.orderType, existingRating: m, onDone: () => {
      n(true), t(null);
    } })] })] }, h.key);
  }) }), x === 0 && e.jsx("div", { className: "px-5 py-3 border-t border-amber-100 bg-amber-50/60", children: e.jsx("p", { className: "text-xs text-amber-700 text-center", children: "Your feedback takes less than a minute and helps us improve!" }) })] }) });
};
function as() {
  var _a, _b, _c;
  const [s, m] = D("/orders/:orderNumber/track"), [a, t] = D("/track/:orderNumber"), l = m || t, c = l == null ? void 0 : l.orderNumber, { user: d } = Q();
  U();
  const { data: n } = se(), i = (_a = n == null ? void 0 : n.name) != null ? _a : "EatYum", v = g.useMemo(() => n != null && n.domain ? `https://${n.domain}` : window.location.origin.replace(/\/$/, ""), [n == null ? void 0 : n.domain]), f = (_b = n == null ? void 0 : n.playStoreUrl) != null ? _b : n ? void 0 : ge, x = (_c = n == null ? void 0 : n.appStoreUrl) != null ? _c : n ? void 0 : ve, A = !!(f || x), { data: r, isLoading: C, error: h } = I({ queryKey: ["/api/orders", c, "track"], queryFn: () => __async(null, null, function* () {
    const u = yield fetch(`/api/orders/${c}/track`);
    if (!u.ok) throw new Error("Order not found");
    return u.json();
  }), enabled: !!c, refetchInterval: 5e3 }), { data: j = null } = I({ queryKey: ["/api/orders", c, "rating"], queryFn: () => __async(null, null, function* () {
    const u = yield fetch(`/api/orders/${c}/rating`);
    return u.status === 403 || u.status === 404 || !u.ok ? null : u.json();
  }), enabled: !!c && !!d && (r == null ? void 0 : r.status) === "delivered" });
  if (!c) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsxs("div", { className: "text-center", children: [e.jsx(H, { size: 32, className: "mx-auto mb-2 text-gray-400" }), e.jsx("h1", { className: "text-lg font-bold text-gray-900 mb-2", children: "Invalid Order URL" }), e.jsx(E, { href: "/", children: e.jsx(k, { size: "sm", children: "Go Home" }) })] }) });
  if (C) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-2" }), e.jsx("p", { className: "text-sm text-gray-600", children: "Loading order details\u2026" })] }) });
  if (h || !r) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsxs("div", { className: "text-center", children: [e.jsx(H, { size: 32, className: "mx-auto mb-2 text-gray-400" }), e.jsx("h1", { className: "text-lg font-bold text-gray-900 mb-2", children: "Order Not Found" }), e.jsxs("p", { className: "text-sm text-gray-600 mb-4", children: ["We couldn't find order: ", c] }), e.jsx(E, { href: "/", children: e.jsx(k, { size: "sm", children: "Return to Homepage" }) })] }) });
  const p = r.status === "delivered", S = p && r.canReview && !!d;
  return e.jsx("div", { className: "min-h-screen bg-gray-50", children: e.jsxs("div", { className: "max-w-2xl mx-auto px-4 py-4", children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsx(E, { href: "/my-orders", children: e.jsxs(k, { variant: "ghost", size: "sm", className: "text-xs", children: [e.jsx(ne, { size: 14, className: "mr-1" }), " Back"] }) }), e.jsxs("div", { className: "text-right", children: [e.jsxs("h1", { className: "text-lg font-bold text-gray-900", children: ["Order ", r.orderNumber] }), e.jsx("p", { className: "text-xs text-gray-600", children: te(r.createdAt) })] })] }), e.jsxs(N, { className: "mb-4", children: [e.jsx(L, { className: "pb-2", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs(F, { className: "flex items-center gap-2 text-sm", children: [e.jsx(ie, { size: 16 }), e.jsx("span", { children: "Order Status" })] }), e.jsx(re, { className: `${X(r.status)} text-white text-xs`, children: W(r.status) })] }) }), e.jsx(w, { className: "pt-0", children: e.jsx(we, { status: r.status, orderType: r.orderType }) })] }), S && e.jsx(_e, { order: r, existingRating: j }), !p && e.jsx(N, { className: "mb-4 border-dashed border-gray-300 bg-white", children: e.jsxs(w, { className: "p-4 flex items-center gap-3", children: [e.jsx(K, { size: 18, className: "text-gray-300 flex-shrink-0" }), e.jsx("p", { className: "text-xs text-gray-400", children: "You'll be able to rate your food, rider, and our service once your order is delivered." })] }) }), A && e.jsx(Ne, { brandName: i, playStoreUrl: f, appStoreUrl: x }), e.jsx(ke, { brandName: i, brandBaseUrl: v }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs(N, { children: [e.jsx(L, { className: "pb-2", children: e.jsxs(F, { className: "flex items-center gap-2 text-sm", children: [r.orderType === "delivery" ? e.jsx(le, { size: 16 }) : e.jsx(oe, { size: 16 }), e.jsx("span", { children: r.orderType === "delivery" ? "Delivery" : "Pickup" })] }) }), e.jsxs(w, { className: "pt-0 space-y-2", children: [r.orderType === "delivery" && r.deliveryAddress && e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold text-xs mb-1", children: "Delivery Address" }), e.jsx("p", { className: "text-xs text-gray-700", children: r.deliveryAddress })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold text-xs mb-1", children: "Restaurant" }), e.jsx("p", { className: "text-xs text-gray-700", children: r.outlet.name }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(ce, { size: 12, className: "text-gray-400" }), e.jsx("span", { className: "text-xs text-gray-700", children: r.outlet.phone })] })] })] })] }), e.jsxs(N, { children: [e.jsx(L, { className: "pb-2", children: e.jsx(F, { className: "text-sm", children: "Payment Summary" }) }), e.jsxs(w, { className: "pt-0 space-y-2", children: [e.jsxs("div", { className: "flex justify-between text-xs", children: [e.jsx("span", { children: "Subtotal" }), e.jsx("span", { children: T(r.subtotal) })] }), r.orderType === "delivery" && r.deliveryFee > 0 && e.jsxs("div", { className: "flex justify-between text-xs", children: [e.jsx("span", { children: "Delivery Fee" }), e.jsx("span", { children: T(r.deliveryFee) })] }), r.discount > 0 && e.jsxs("div", { className: "flex justify-between text-xs text-green-600", children: [e.jsx("span", { children: "Discount" }), e.jsxs("span", { children: ["-", T(r.discount)] })] }), r.walletAmount != null && r.walletAmount > 0 && e.jsxs("div", { className: "flex justify-between text-xs text-green-600", children: [e.jsxs("span", { children: [i, " Wallet"] }), e.jsxs("span", { children: ["-", T(r.walletAmount / 100)] })] }), e.jsxs("div", { className: "flex justify-between font-semibold text-sm border-t pt-2", children: [e.jsx("span", { children: "Total" }), e.jsx("span", { children: T(r.total) })] }), r.walletAmount != null && r.walletAmount > 0 && e.jsxs("div", { className: "flex justify-between text-xs text-blue-600 font-medium", children: [e.jsx("span", { children: "Amount Paid" }), e.jsx("span", { children: T(r.total - r.walletAmount / 100) })] })] })] }), e.jsxs(N, { children: [e.jsx(L, { className: "pb-2", children: e.jsxs(F, { className: "text-sm", children: ["Order Items (", r.items.length, ")"] }) }), e.jsx(w, { className: "pt-0 space-y-3", children: r.items.map((u) => {
    var o;
    const b = (o = r.reviews) == null ? void 0 : o.find((y) => y.productId === u.productId);
    return e.jsxs("div", { className: "border rounded-lg p-3", children: [e.jsx("div", { className: "flex items-start gap-3", children: e.jsxs("div", { className: "flex-1", children: [e.jsx("h4", { className: "font-semibold text-sm", children: u.name }), e.jsxs("p", { className: "text-xs text-gray-600", children: ["Qty: ", u.quantity] }), e.jsx("p", { className: "font-medium text-sm", children: T(u.totalPrice) }), u.customizations && u.customizations.length > 0 && e.jsxs("div", { className: "mt-1", children: [e.jsx("p", { className: "text-xs font-medium text-gray-600", children: "Customizations:" }), e.jsx("div", { className: "text-xs text-gray-600", children: u.customizations.map((y, _) => e.jsxs("div", { children: [y.groupName, ": ", y.optionName, y.priceModifier > 0 && ` (+${T(y.priceModifier)})`] }, _)) })] })] }) }), b && e.jsxs("div", { className: "mt-3 border-t pt-3", children: [e.jsxs("p", { className: "text-xs text-gray-400 mb-1 flex items-center gap-1", children: [e.jsx(J, { size: 11 }), " Your food rating"] }), e.jsx(z, { rating: b.rating, size: 14 }), b.reviewText && e.jsxs("p", { className: "text-xs text-gray-500 italic mt-1", children: ['"', b.reviewText, '"'] })] })] }, u.id);
  }) })] })] })] }) });
}
export { as as default };
