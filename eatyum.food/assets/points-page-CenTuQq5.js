var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
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
import { N as z, u as F, c as H, V, r as C, b as S, j as e, E as a, F as i, B as n, H as o, I as c } from "./index-DOfu0sXg.js";
import { u as K } from "./useMutation-CVmbONMy.js";
import { B as m } from "./badge-BAjaXL1S.js";
import { S as L } from "./separator-B__B0Kv_.js";
import { u as Q } from "./use-auth-d_ltKWkf.js";
import { P as N } from "./points-utils-CJKWL9Rb.js";
import { S as b } from "./star-o2YGpjzJ.js";
import { A as $ } from "./arrow-left-CK7JF7w9.js";
import { G as R } from "./gift-C_SZrOe8.js";
import { C as T } from "./clock-DQ0X7PrC.js";
import { C as B } from "./copy-Dm_kp7Au.js";
import { C as G } from "./chevron-up-Cu4mgTvm.js";
import { C as Y } from "./chevron-down-DegxUQDE.js";
import { T as W } from "./trophy-COGTR2GG.js";
import { A as U } from "./arrow-right-CS_UFvxY.js";
import { f as P } from "./format-Chey2Vsb.js";
import "./en-US-BIej3L2x.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const J = z("Ticket", [["path", { d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z", key: "qn84l0" }], ["path", { d: "M13 5v2", key: "dyzc3o" }], ["path", { d: "M13 17v2", key: "1ont0d" }], ["path", { d: "M13 11v2", key: "1wjjxi" }]]);
function he() {
  var _a;
  const [Z, h] = F(), { user: d } = Q(), { toast: g } = H(), l = V(), [j, k] = C.useState(false);
  C.useEffect(() => {
    d && (l.invalidateQueries({ queryKey: ["/api/points"] }), l.invalidateQueries({ queryKey: ["/api/spin-win/vouchers"] }));
  }, [d, l]);
  const { data: r, isLoading: M, error: A } = S({ queryKey: ["/api/points"], enabled: !!d, staleTime: 0, refetchOnMount: "always" }), { data: x, isLoading: q } = S({ queryKey: ["/api/spin-win/vouchers"], enabled: !!d, staleTime: 0, refetchOnMount: "always" }), { mutate: E, isPending: f } = K({ mutationFn: (s) => __async(null, null, function* () {
    const t = yield fetch("/api/points/redeem", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ rewardType: s.rewardType, pointsCost: s.points }) });
    if (!t.ok) {
      const p = yield t.json();
      throw new Error(p.message || "Failed to redeem points");
    }
    return yield t.json();
  }), onSuccess: (s, t) => {
    g({ title: "Reward Redeemed!", description: `Successfully redeemed "${t.rewardType}". Your new voucher code is ${s.voucherCode}` }), l.invalidateQueries({ queryKey: ["/api/points"] }), l.invalidateQueries({ queryKey: ["/api/spin-win/vouchers"] });
  }, onError: (s) => {
    g({ title: "Redemption Failed", description: s.message, variant: "destructive" });
  } });
  if (!d) return e.jsx("div", { className: "min-h-screen bg-gray-50 py-8 px-4", children: e.jsx("div", { className: "max-w-md mx-auto", children: e.jsx(a, { children: e.jsx(i, { className: "pt-6", children: e.jsxs("div", { className: "text-center space-y-4", children: [e.jsx(b, { className: "h-16 w-16 mx-auto text-gray-400" }), e.jsx("h2", { className: "text-xl font-semibold", children: "Sign In Required" }), e.jsx("p", { className: "text-gray-600", children: "Please sign in to view your EatYum Points balance and activity." }), e.jsx(n, { onClick: () => h("/auth"), className: "bg-red-600 hover:bg-red-700", children: "Sign In" })] }) }) }) }) });
  if (M) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }) });
  if (A) return e.jsx("div", { className: "min-h-screen bg-gray-50 py-8 px-4", children: e.jsx("div", { className: "max-w-md mx-auto", children: e.jsx(a, { children: e.jsx(i, { className: "pt-6", children: e.jsxs("div", { className: "text-center space-y-4", children: [e.jsx("p", { className: "text-red-600", children: "Failed to load points data. Please try again." }), e.jsx(n, { onClick: () => window.location.reload(), variant: "outline", children: "Retry" })] }) }) }) }) });
  const O = (s) => {
    for (const t of N.redemptionRewards) if (s < t.points) return __spreadProps(__spreadValues({}, t), { pointsNeeded: t.points - s });
    return null;
  }, I = (s) => {
    navigator.clipboard.writeText(s), g({ title: "Promo Code Copied", description: `${s} has been copied to your clipboard.` });
  }, u = O((r == null ? void 0 : r.balance) || 0), v = (_a = r == null ? void 0 : r.balance) != null ? _a : 0, w = x ? x.filter((s) => s.redemptionStatus === "active") : [], y = x ? x.filter((s) => s.redemptionStatus !== "active") : [];
  return e.jsx("div", { className: "min-h-screen bg-gray-50 py-8 px-4", children: e.jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs(n, { variant: "ghost", size: "sm", onClick: () => h("/"), className: "text-gray-600 hover:text-gray-900", children: [e.jsx($, { className: "h-4 w-4 mr-1" }), "Back"] }), e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "EatYum Points" })] }), e.jsxs(a, { className: "bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200", children: [e.jsx(o, { children: e.jsxs(c, { className: "flex items-center gap-2 text-orange-800", children: [e.jsx(b, { className: "h-6 w-6" }), "Your Points Balance"] }) }), e.jsxs(i, { className: "space-y-4", children: [e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "text-4xl font-bold text-orange-600", children: v }), e.jsx("p", { className: "text-orange-700 font-medium", children: "Points Available" })] }), u && e.jsxs(e.Fragment, { children: [e.jsx(L, { className: "bg-orange-200" }), e.jsx("div", { className: "bg-orange-100 p-4 rounded-lg", children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs("p", { className: "font-medium text-orange-800", children: ["Next Reward: ", u.description] }), e.jsxs("p", { className: "text-sm text-orange-600", children: [u.pointsNeeded, " more points needed"] })] }), e.jsx(R, { className: "h-8 w-8 text-orange-500" })] }) })] })] })] }), e.jsxs(a, { className: "border-red-200", children: [e.jsx(o, { className: "pb-3", children: e.jsxs(c, { className: "flex items-center gap-2 text-red-800", children: [e.jsx(J, { className: "h-5 w-5 text-red-600" }), "My Spin & Win Vouchers"] }) }), e.jsx(i, { className: "space-y-4", children: q ? e.jsx("div", { className: "flex justify-center py-4", children: e.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-red-600" }) }) : e.jsxs("div", { className: "space-y-4", children: [w.length > 0 ? e.jsx("div", { className: "grid gap-3", children: w.map((s) => e.jsxs("div", { className: "relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-dashed border-red-300 bg-gradient-to-r from-red-50/50 to-orange-50/50 rounded-lg hover:shadow-sm transition-all", children: [e.jsxs("div", { className: "space-y-1 pr-4", children: [e.jsx(m, { className: "bg-red-100 text-red-800 hover:bg-red-100 border-none font-semibold mb-1", children: s.voucherCode.startsWith("PTS-") ? "Points Reward" : "Spin & Win Reward" }), e.jsx("p", { className: "font-semibold text-gray-900 text-base capitalize", children: s.rewardType }), e.jsxs("p", { className: "text-xs text-gray-500 flex items-center gap-1", children: [e.jsx(T, { className: "h-3 w-3" }), "Valid until ", P(new Date(s.expiryDate), "MMM d, yyyy")] })] }), e.jsxs("div", { className: "mt-3 sm:mt-0 flex items-center gap-2 w-full sm:w-auto", children: [e.jsx("div", { className: "bg-white border border-gray-200 rounded px-3 py-1.5 font-mono text-sm font-bold text-gray-800 tracking-wider shadow-sm flex-1 sm:flex-none text-center", children: s.voucherCode }), e.jsxs(n, { size: "sm", variant: "outline", onClick: () => I(s.voucherCode), className: "border-red-200 hover:bg-red-50 hover:text-red-700 active:scale-95 transition-all text-xs font-medium", children: [e.jsx(B, { className: "h-3.5 w-3.5 mr-1" }), "Copy Code"] })] })] }, s.id)) }) : e.jsxs("div", { className: "text-center py-6 bg-gray-50/50 rounded-lg border border-dashed border-gray-200", children: [e.jsx(R, { className: "h-8 w-8 mx-auto text-gray-400 mb-2" }), e.jsx("p", { className: "text-sm font-medium text-gray-700", children: "No active vouchers yet" }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Redeem your points below or spin the wheel on checkout to earn discounts!" })] }), y.length > 0 && e.jsxs("div", { className: "pt-2", children: [e.jsxs(n, { variant: "ghost", size: "sm", onClick: () => k(!j), className: "w-full flex items-center justify-between text-gray-500 hover:text-gray-700 hover:bg-gray-100/50 text-xs px-2", children: [e.jsxs("span", { children: ["Voucher History (", y.length, ")"] }), j ? e.jsx(G, { className: "h-3 w-3" }) : e.jsx(Y, { className: "h-3 w-3" })] }), j && e.jsx("div", { className: "grid gap-2 mt-2 pt-2 border-t border-gray-100", children: y.map((s) => e.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-50/50 border border-gray-200 rounded-lg text-gray-500", children: [e.jsxs("div", { className: "space-y-0.5", children: [e.jsx("p", { className: "font-medium text-sm text-gray-700 capitalize", children: s.rewardType }), e.jsx("p", { className: "text-[10px] text-gray-400", children: s.redemptionStatus === "redeemed" ? `Used on order ${s.redeemedOrderId ? "#" + s.redeemedOrderId : ""}` : "Expired" })] }), e.jsxs("div", { className: "mt-1 sm:mt-0 flex items-center gap-2", children: [e.jsx("span", { className: "font-mono text-xs line-through text-gray-400 bg-gray-100 px-2 py-1 rounded", children: s.voucherCode }), e.jsx(m, { variant: "outline", className: s.redemptionStatus === "redeemed" ? "bg-neutral-100 text-neutral-600 border-neutral-300" : "bg-red-50 text-red-600 border-red-200", children: s.redemptionStatus })] })] }, s.id)) })] })] }) })] }), e.jsxs(a, { children: [e.jsx(o, { children: e.jsxs(c, { className: "flex items-center gap-2", children: [e.jsx(W, { className: "h-5 w-5" }), "How to Earn Points"] }) }), e.jsx(i, { className: "space-y-3", children: e.jsxs("div", { className: "grid gap-3", children: [e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [e.jsx("span", { className: "text-sm", children: "Order food" }), e.jsx(m, { variant: "secondary", children: "10 to 50 points" })] }), e.jsxs("div", { className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg", children: [e.jsx("span", { className: "text-sm", children: "Refer a friend" }), e.jsxs(m, { className: "bg-blue-600", children: ["+", N.referralRewardPoints, " points"] })] })] }) })] }), e.jsxs(a, { children: [e.jsx(o, { children: e.jsx(c, { children: "Rewards Available" }) }), e.jsx(i, { className: "space-y-3", children: N.redemptionRewards.map((s, t) => {
    const p = v >= s.points;
    return e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: s.description }), e.jsxs("p", { className: "text-sm text-gray-600", children: [s.points, " points required"] })] }), e.jsx(n, { size: "sm", disabled: !p || f, onClick: () => {
      window.confirm(`Are you sure you want to redeem "${s.description}" for ${s.points} points?`) && E({ rewardType: s.rewardType, points: s.points });
    }, className: p ? "bg-green-600 hover:bg-green-700 text-white font-medium shadow-sm transition-all" : "bg-gray-100 text-gray-400 hover:bg-gray-100 cursor-not-allowed", children: f ? "Redeeming..." : "Redeem" })] }, t);
  }) })] }), e.jsxs(a, { children: [e.jsx(o, { children: e.jsxs(c, { className: "flex items-center gap-2", children: [e.jsx(T, { className: "h-5 w-5" }), "Recent Activity"] }) }), e.jsx(i, { children: r != null && r.activities && r.activities.length > 0 ? e.jsx("div", { className: "space-y-3", children: r.activities.slice(0, 10).map((s) => e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium text-sm", children: s.description }), e.jsx("p", { className: "text-xs text-gray-500", children: P(new Date(s.createdAt), "MMM d, yyyy \u2022 h:mm a") })] }), e.jsxs(m, { variant: "outline", className: s.type === "referral" ? "border-blue-300 text-blue-700 bg-blue-50/30" : s.type === "redemption" ? "border-red-300 text-red-700 bg-red-50/30" : "border-green-300 text-green-700 bg-green-50/30", children: [s.type === "redemption" ? "" : "+", s.points] })] }, s.id)) }) : e.jsxs("div", { className: "text-center py-8", children: [e.jsx(b, { className: "h-12 w-12 mx-auto text-gray-400 mb-4" }), e.jsx("p", { className: "text-gray-600", children: "No point activities yet" }), e.jsx("p", { className: "text-sm text-gray-500 mb-4", children: "Start ordering to earn your first points!" }), e.jsxs(n, { onClick: () => h("/"), className: "bg-red-600 hover:bg-red-700", children: ["Start Shopping", e.jsx(U, { className: "ml-2 h-4 w-4" })] })] }) })] }), e.jsx(a, { className: "bg-blue-50 border-blue-200", children: e.jsx(i, { className: "pt-6", children: e.jsxs("div", { className: "text-center space-y-2", children: [e.jsx("p", { className: "text-blue-800 font-medium text-sm", children: "\u{1F4A1} Points are earned only on authenticated orders" }), e.jsx("p", { className: "text-blue-700 text-xs", children: "Guest orders do not earn points. Sign in to start earning rewards!" })] }) }) })] }) });
}
export { he as default };
