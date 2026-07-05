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
import { g as w, c as k, r as v, b as C, j as e, a2 as _, ab as S, T as N, B as j, w as f } from "./index-DOfu0sXg.js";
import { u as T } from "./useMutation-CVmbONMy.js";
import { T as E } from "./textarea-__Yhw9VH.js";
import { C as R } from "./circle-x-ve1y_gH0.js";
import { T as A, a as q } from "./thumbs-up-1uuMjzDP.js";
import { C as G } from "./chevron-right-DkUlsPHD.js";
const P = { food_quality: { good: ["fresh_food", "great_taste", "good_packaging", "good_portion"], bad: ["cold_food", "late_delivery", "poor_packaging", "small_portion", "wrong_item"] }, csr_performance: { good: ["polite", "helpful", "clear_communication", "quick_response"], bad: ["slow_response", "poor_communication", "unhelpful", "did_not_resolve_issue"] }, delivery_rider_service: { good: ["fast_delivery", "polite_rider", "careful_handling"], bad: ["late_delivery", "poor_handling", "could_not_locate_address", "unprofessional"] } }, F = { food_quality: "Food Quality", csr_performance: "Customer Service", delivery_rider_service: "Delivery Rider" }, L = { food_quality: "How was the food from your order?", csr_performance: "How did our customer service team do?", delivery_rider_service: "How was the delivery experience?" }, B = { fresh_food: "Fresh food", great_taste: "Great taste", good_packaging: "Good packaging", good_portion: "Good portion", cold_food: "Food was cold", late_delivery: "Late delivery", poor_packaging: "Poor packaging", small_portion: "Small portion", wrong_item: "Wrong item", polite: "Polite", helpful: "Helpful", clear_communication: "Clear communication", quick_response: "Quick response", slow_response: "Slow response", poor_communication: "Poor communication", unhelpful: "Unhelpful", did_not_resolve_issue: "Did not resolve issue", fast_delivery: "Fast delivery", polite_rider: "Polite rider", careful_handling: "Careful handling", poor_handling: "Poor handling", could_not_locate_address: "Could not locate address", unprofessional: "Unprofessional" };
function O(a) {
  return a ? new Date(a).toLocaleString("en-NG", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";
}
const y = ["food_quality", "csr_performance", "delivery_rider_service"];
function Y({ outletName: a, orderNumber: s, onStart: t }) {
  return e.jsxs("div", { className: "flex flex-col items-center text-center gap-6 py-4", children: [e.jsx("div", { className: "w-16 h-16 rounded-full bg-red-50 flex items-center justify-center", children: e.jsx("span", { className: "text-3xl", children: "\u{1F37D}\uFE0F" }) }), e.jsxs("div", { children: [e.jsxs("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: ["How was your order from ", a, "?"] }), e.jsxs("p", { className: "text-gray-500 text-sm", children: ["Order #", s] })] }), e.jsx("p", { className: "text-gray-600 text-sm", children: "Share your experience and help us improve. It takes less than 60 seconds." }), e.jsx(j, { onClick: t, className: "w-full bg-red-600 hover:bg-red-700 text-white rounded-xl py-6 text-base font-semibold", children: "Start Review" })] });
}
function D({ category: a, rating: s, onChange: t, onNext: c, onBack: l, stepNumber: x, totalSteps: i }) {
  const p = s.sentiment ? P[a][s.sentiment] : [], u = (r) => {
    const g = s.tags, b = g.includes(r) ? g.filter((h) => h !== r) : [...g, r];
    t({ tags: b });
  };
  return e.jsxs("div", { className: "flex flex-col gap-5", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("div", { className: "flex-1 bg-gray-100 rounded-full h-1.5", children: e.jsx("div", { className: "bg-red-500 h-1.5 rounded-full transition-all duration-300", style: { width: `${x / i * 100}%` } }) }), e.jsxs("span", { className: "text-xs text-gray-400 shrink-0", children: [x, "/", i] })] }), e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-bold text-gray-900", children: F[a] }), e.jsx("p", { className: "text-gray-500 text-sm mt-1", children: L[a] })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("button", { onClick: () => t({ sentiment: "good", tags: [] }), className: f("flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border-2 transition-all font-semibold", s.sentiment === "good" ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 bg-white text-gray-600 hover:border-green-300"), children: [e.jsx(A, { className: f("w-7 h-7", s.sentiment === "good" ? "text-green-600" : "text-gray-400") }), "Good"] }), e.jsxs("button", { onClick: () => t({ sentiment: "bad", tags: [] }), className: f("flex flex-col items-center justify-center gap-2 py-5 rounded-2xl border-2 transition-all font-semibold", s.sentiment === "bad" ? "border-red-500 bg-red-50 text-red-700" : "border-gray-200 bg-white text-gray-600 hover:border-red-300"), children: [e.jsx(q, { className: f("w-7 h-7", s.sentiment === "bad" ? "text-red-600" : "text-gray-400") }), "Bad"] })] }), s.sentiment && p.length > 0 && e.jsx("div", { className: "flex flex-wrap gap-2", children: p.map((r) => e.jsx("button", { onClick: () => u(r), className: f("px-3 py-1.5 rounded-full text-xs font-medium border transition-all", s.tags.includes(r) ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-400"), children: B[r] || r }, r)) }), e.jsxs("div", { children: [e.jsx("label", { className: "block text-sm text-gray-500 mb-1.5", children: "Add a comment (optional)" }), e.jsx(E, { placeholder: "Tell us more...", value: s.comment, onChange: (r) => t({ comment: r.target.value }), className: "resize-none rounded-xl border-gray-200 text-sm", rows: 3 })] }), e.jsxs("div", { className: "flex gap-3 pt-1", children: [e.jsx(j, { variant: "outline", onClick: l, className: "flex-1 rounded-xl", children: "Back" }), e.jsxs(j, { onClick: c, disabled: !s.sentiment, className: "flex-[2] bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold", children: [x === i ? "Submit" : "Next", x < i && e.jsx(G, { className: "w-4 h-4 ml-1" })] })] })] });
}
function H() {
  return e.jsxs("div", { className: "flex flex-col items-center text-center gap-5 py-6", children: [e.jsx("div", { className: "w-20 h-20 rounded-full bg-green-50 flex items-center justify-center", children: e.jsx(N, { className: "w-10 h-10 text-green-500" }) }), e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Thank you!" }), e.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: "Your feedback helps us improve the food, service, and delivery experience for your next order." })] }), e.jsx("p", { className: "text-xs text-gray-400", children: "You can now close this page." })] });
}
function W() {
  const { token: a } = w(), { toast: s } = k(), [t, c] = v.useState("welcome"), [l, x] = v.useState({ food_quality: { category: "food_quality", sentiment: null, comment: "", tags: [] }, csr_performance: { category: "csr_performance", sentiment: null, comment: "", tags: [] }, delivery_rider_service: { category: "delivery_rider_service", sentiment: null, comment: "", tags: [] } }), { data: i, isLoading: p, error: u } = C({ queryKey: ["/api/review-requests", a], queryFn: () => __async(null, null, function* () {
    const o = yield fetch(`/api/review-requests/${a}`);
    if (!o.ok) {
      const m = yield o.json().catch(() => ({}));
      throw new Error(m.message || "Failed to load review");
    }
    return o.json();
  }), enabled: !!a, retry: false }), r = T({ mutationFn: () => __async(null, null, function* () {
    const o = { token: a, ratings: y.filter((n) => l[n].sentiment !== null).map((n) => ({ category: n, sentiment: l[n].sentiment, comment: l[n].comment || void 0, tags: l[n].tags.length > 0 ? l[n].tags : void 0 })) }, m = yield fetch("/api/reviews/order-feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(o) });
    if (!m.ok) {
      const n = yield m.json().catch(() => ({}));
      throw new Error(n.message || "Failed to submit feedback");
    }
    return m.json();
  }), onSuccess: () => {
    c("done");
  }, onError: (o) => {
    s({ title: "Error", description: o.message || "Failed to submit feedback. Please try again.", variant: "destructive" });
  } }), g = (o, m) => {
    x((n) => __spreadProps(__spreadValues({}, n), { [o]: __spreadValues(__spreadValues({}, n[o]), m) }));
  }, b = typeof t == "number" ? t - 1 : 0, h = y[b];
  if (p) return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50", children: e.jsx(_, { className: "w-8 h-8 animate-spin text-red-500" }) });
  if (u || !(i != null && i.data)) return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-4", children: e.jsxs("div", { className: "text-center max-w-sm", children: [e.jsx(S, { className: "w-12 h-12 text-red-400 mx-auto mb-4" }), e.jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Review Not Found" }), e.jsx("p", { className: "text-gray-500 text-sm", children: (u == null ? void 0 : u.message) || "This review link is not valid." })] }) });
  const d = i.data;
  return d.expiredMessage ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-4", children: e.jsxs("div", { className: "text-center max-w-sm", children: [e.jsx(R, { className: "w-12 h-12 text-amber-400 mx-auto mb-4" }), e.jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Link Expired" }), e.jsx("p", { className: "text-gray-500 text-sm", children: d.expiredMessage })] }) }) : d.alreadyCompleted ? e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-4", children: e.jsxs("div", { className: "text-center max-w-sm", children: [e.jsx(N, { className: "w-12 h-12 text-green-500 mx-auto mb-4" }), e.jsx("h2", { className: "text-lg font-semibold text-gray-800 mb-2", children: "Already Submitted" }), e.jsxs("p", { className: "text-gray-500 text-sm", children: ["You've already submitted your feedback for order #", d.orderNumber, ". Thank you!"] })] }) }) : e.jsxs("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: [e.jsx("div", { className: "fixed top-0 left-0 right-0 h-1 bg-red-600 z-10" }), e.jsxs("div", { className: "w-full max-w-md", children: [e.jsx("div", { className: "text-center mb-6", children: e.jsx("span", { className: "inline-block bg-red-600 text-white font-bold text-lg px-4 py-1.5 rounded-full tracking-tight", children: "magoka" }) }), e.jsxs("div", { className: "bg-white rounded-3xl shadow-lg border border-gray-100 p-6", children: [t === "welcome" && e.jsx(Y, { outletName: d.outletName, orderNumber: d.orderNumber, onStart: () => c(1) }), typeof t == "number" && e.jsx(D, { category: h, rating: l[h], onChange: (o) => g(h, o), onNext: () => {
    t < y.length ? c(t + 1) : r.mutate();
  }, onBack: () => {
    c(t === 1 ? "welcome" : t - 1);
  }, stepNumber: t, totalSteps: y.length }), r.isPending && typeof t == "number" && e.jsxs("div", { className: "flex items-center justify-center py-4 mt-2", children: [e.jsx(_, { className: "w-5 h-5 animate-spin text-red-500 mr-2" }), e.jsx("span", { className: "text-sm text-gray-500", children: "Submitting your feedback..." })] }), t === "done" && e.jsx(H, {})] }), e.jsx("p", { className: "text-center text-xs text-gray-400 mt-4", children: d.expiresAt ? `Review link valid until ${O(d.expiresAt)}` : "" })] })] });
}
export { W as default };
