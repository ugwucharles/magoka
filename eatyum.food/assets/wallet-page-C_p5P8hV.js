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
import { N as H, c as J, r as k, b as T, j as e, L, B as c, E as u, H as f, I as p, F as j, W as I } from "./index-DOfu0sXg.js";
import { u as Q } from "./use-auth-d_ltKWkf.js";
import { I as X } from "./input-FyV2XACZ.js";
import { B as S } from "./badge-BAjaXL1S.js";
import { T as Z, a as D, b as W, c as A } from "./tabs-qGTQ6MVs.js";
import { u as ee, f as y } from "./useReferralReward-BeyZodYI.js";
import { l as se } from "./paystack-BWoQWccF.js";
import { W as o } from "./wallet-e6BSu-fo.js";
import { C as g } from "./circle-check-Cntb4uoq.js";
import { U as F } from "./users-CBtjfzvJ.js";
import { G as Y } from "./gift-C_SZrOe8.js";
import { C as B } from "./copy-Dm_kp7Au.js";
import { C as ae } from "./clock-DQ0X7PrC.js";
import { f as $ } from "./formatDistanceToNow-BStQM2-5.js";
import "./index-Czlrzsbg.js";
import "./index-D5alJfFq.js";
import "./en-US-BIej3L2x.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const re = H("CirclePlus", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M8 12h8", key: "1wcyev" }], ["path", { d: "M12 8v8", key: "napkw2" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const te = H("Link2", [["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }], ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }], ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }]]);
function Le() {
  var _a, _b;
  const { user: i, loading: z } = Q(), { toast: l } = J(), [m, C] = k.useState(false), [E, M] = k.useState("1000"), [N, x] = k.useState(false), { data: r, isLoading: ie, error: ne } = ee(), { data: t, isLoading: P, isError: b, refetch: R } = T({ queryKey: ["/api/wallet"], enabled: !!i }), { data: a, isLoading: w } = T({ queryKey: ["/api/referrals"], enabled: !!i }), v = () => a != null && a.referralCode ? `https://eatyum.food/r/${a.referralCode}` : "", h = () => __async(null, null, function* () {
    const s = v();
    if (s) try {
      yield navigator.clipboard.writeText(s), C(true), l({ title: "Link copied!", description: "Your referral link has been copied to clipboard" }), setTimeout(() => C(false), 2e3);
    } catch (e2) {
      l({ title: "Failed to copy", description: "Please copy the link manually", variant: "destructive" });
    }
  }), q = () => __async(null, null, function* () {
    const s = v();
    if (s) if (navigator.share) try {
      yield navigator.share({ title: `Join EatYum and get ${y((r == null ? void 0 : r.amountInNaira) || 2e3)} bonus!`, text: `Use my referral link to sign up for EatYum and get ${y((r == null ? void 0 : r.amountInNaira) || 2e3)} bonus after your first order of \u20A61500+`, url: s });
    } catch (e2) {
      h();
    }
    else h();
  }), U = (s) => `\u20A6${(s / 100).toFixed(2)}`, G = Number((_b = (_a = t == null ? void 0 : t.balance) != null ? _a : t == null ? void 0 : t.walletBalance) != null ? _b : 0), K = () => __async(null, null, function* () {
    const s = Math.round(Number(E || 0));
    if (!Number.isFinite(s) || s < 100) {
      l({ title: "Invalid amount", description: "Enter an amount of at least \u20A6100.", variant: "destructive" });
      return;
    }
    x(true);
    try {
      if (yield se(), !window.PaystackPop) throw new Error("Payment service is not loaded. Please refresh and try again.");
      const V = yield (yield I("POST", "/api/wallet/topup/initialize", { amount: s })).json();
      window.PaystackPop.setup({ key: "pk_live_51d38ad85ab130cafa9cd8d675f62374d2193b91", email: (i == null ? void 0 : i.email) || `wallet${(i == null ? void 0 : i.id) || "user"}@eatyum.food`, amount: s * 100, ref: V.reference, currency: "NGN", callback: function(_) {
        I("POST", "/api/wallet/topup/verify", { reference: _.reference }).then((n) => n.json()).then((n) => __async(null, null, function* () {
          if (!(n != null && n.success)) throw new Error("Top-up verification failed");
          yield R(), l({ title: "Wallet funded", description: `Your wallet has been credited with \u20A6${s.toLocaleString()}.` });
        })).catch((n) => {
          l({ title: "Verification failed", description: n instanceof Error ? n.message : "Payment was made but verification failed.", variant: "destructive" });
        }).finally(() => {
          x(false);
        });
      }, onClose: () => {
        x(false);
      } }).openIframe();
    } catch (d) {
      x(false), l({ title: "Unable to fund wallet", description: d instanceof Error ? d.message : "Please try again.", variant: "destructive" });
    }
  }), O = (s) => {
    switch (s) {
      case "referral":
        return e.jsx(Y, { className: "h-4 w-4 text-green-600" });
      case "checkout":
        return e.jsx(o, { className: "h-4 w-4 text-red-600" });
      default:
        return e.jsx(o, { className: "h-4 w-4 text-gray-600" });
    }
  };
  return z ? e.jsx("div", { className: "container mx-auto p-4 text-center", children: e.jsx("h1", { className: "text-2xl font-bold mb-4", children: "Loading your wallet..." }) }) : i ? e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-40", children: e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: e.jsxs("div", { className: "flex items-center justify-between h-16", children: [e.jsx("div", { className: "flex items-center", children: e.jsx(L, { href: "/profile", children: e.jsxs(c, { variant: "ghost", size: "sm", className: "flex items-center gap-2", children: [e.jsx(o, { className: "h-4 w-4" }), "Back to Profile"] }) }) }), e.jsx(L, { href: "/", className: "flex items-center", children: e.jsx("img", { src: "/eatyum-logo.png", alt: "EatYum Logo", className: "h-10" }) }), e.jsx("div", { className: "w-24" }), " "] }) }) }), e.jsxs("div", { className: "container mx-auto p-4 space-y-6 py-8", children: [e.jsxs("div", { className: "text-center mb-6", children: [e.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "EatYum Wallet" }), e.jsx("p", { className: "text-gray-600 mt-2", children: "Manage your rewards and share with friends" })] }), e.jsxs(u, { className: "mb-6", children: [e.jsx(f, { children: e.jsxs(p, { className: "flex items-center gap-2", children: [e.jsx(o, { className: "h-5 w-5" }), "Wallet Balance"] }) }), e.jsx(j, { children: e.jsxs("div", { className: "text-center space-y-3", children: [e.jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: P ? "Loading..." : b ? "Unavailable" : U(G) }), e.jsx("p", { className: "text-gray-600", children: b ? "We could not load your balance right now." : "Available for checkout" }), b ? e.jsx(c, { variant: "outline", size: "sm", onClick: () => R(), children: "Retry Balance" }) : null, e.jsxs("div", { className: "mx-auto flex w-full max-w-sm items-center gap-2", children: [e.jsx(X, { type: "number", min: 100, step: 100, value: E, onChange: (s) => M(s.target.value), placeholder: "Enter amount", disabled: N }), e.jsxs(c, { className: "inline-flex items-center gap-2", onClick: K, disabled: N, children: [e.jsx(re, { className: "h-4 w-4" }), N ? "Processing..." : "Add Funds"] })] })] }) })] }), e.jsxs(Z, { defaultValue: "transactions", className: "w-full", children: [e.jsxs(D, { className: "grid w-full grid-cols-2", children: [e.jsxs(W, { value: "transactions", className: "flex items-center gap-2", children: [e.jsx(g, { className: "h-4 w-4" }), "Transactions"] }), e.jsxs(W, { value: "referrals", className: "flex items-center gap-2", children: [e.jsx(F, { className: "h-4 w-4" }), "Share & Earn"] })] }), e.jsx(A, { value: "transactions", className: "space-y-4", children: e.jsxs(u, { children: [e.jsx(f, { children: e.jsx(p, { children: "Transaction History" }) }), e.jsx(j, { children: P ? e.jsx("div", { className: "text-center py-4", children: "Loading transactions..." }) : (t == null ? void 0 : t.transactions.length) === 0 ? e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(o, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }), e.jsx("p", { children: "No transactions yet" }), e.jsx("p", { className: "text-sm", children: "Start referring friends to earn rewards!" })] }) : e.jsx("div", { className: "space-y-3", children: t == null ? void 0 : t.transactions.map((s) => e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [O(s.source), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: s.description }), e.jsx("p", { className: "text-sm text-gray-500", children: $(new Date(s.createdAt), { addSuffix: true }) })] })] }), e.jsxs("div", { className: "text-right", children: [e.jsxs("p", { className: `font-bold ${s.type === "credit" ? "text-green-600" : "text-red-600"}`, children: [s.type === "credit" ? "+" : "-", "\u20A6", s.displayAmount] }), e.jsx(S, { variant: s.type === "credit" ? "default" : "secondary", children: s.type === "credit" ? "Credit" : "Debit" })] })] }, s.id)) }) })] }) }), e.jsxs(A, { value: "referrals", className: "space-y-4", children: [e.jsxs(u, { children: [e.jsx(f, { children: e.jsxs(p, { className: "flex items-center gap-2", children: [e.jsx(Y, { className: "h-5 w-5" }), "Share & Earn ", y((r == null ? void 0 : r.amountInNaira) || 2e3)] }) }), e.jsxs(j, { className: "space-y-4", children: [e.jsxs("div", { className: "bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200", children: [e.jsx("h3", { className: "font-bold text-red-800 mb-2", children: "How it works:" }), e.jsxs("ul", { className: "text-sm text-red-700 space-y-1", children: [e.jsx("li", { children: "\u2022 Share your unique referral link with friends" }), e.jsx("li", { children: "\u2022 They sign up using your link" }), e.jsxs("li", { children: ["\u2022 When they place their first order of \u20A61500+, you both get ", y((r == null ? void 0 : r.amountInNaira) || 2e3), "!"] }), e.jsx("li", { children: "\u2022 Rewards are added to your EatYum Wallet automatically" })] })] }), e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Your Referral Code" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx("code", { className: "bg-gray-100 px-3 py-2 rounded border flex-1 font-mono text-lg", children: w ? "Loading..." : a == null ? void 0 : a.referralCode }), e.jsx(c, { variant: "outline", size: "sm", onClick: h, disabled: m, children: m ? e.jsx(g, { className: "h-4 w-4" }) : e.jsx(B, { className: "h-4 w-4" }) })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium text-gray-700", children: "Your Referral Link" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx("input", { type: "text", value: w ? "Loading..." : v(), readOnly: true, className: "bg-gray-100 px-3 py-2 rounded border flex-1 text-sm" }), e.jsx(c, { variant: "outline", size: "sm", onClick: h, disabled: m, children: m ? e.jsx(g, { className: "h-4 w-4" }) : e.jsx(B, { className: "h-4 w-4" }) })] })] }), e.jsxs(c, { onClick: q, className: "w-full bg-[#F02819] hover:bg-[#d41e0f]", children: [e.jsx(te, { className: "h-4 w-4 mr-2" }), "Share Referral Link"] })] })] })] }), e.jsxs(u, { children: [e.jsx(f, { children: e.jsx(p, { children: "Your Referrals" }) }), e.jsx(j, { children: w ? e.jsx("div", { className: "text-center py-4", children: "Loading referrals..." }) : (a == null ? void 0 : a.referrals.length) === 0 ? e.jsxs("div", { className: "text-center py-8 text-gray-500", children: [e.jsx(F, { className: "h-12 w-12 mx-auto mb-4 text-gray-300" }), e.jsx("p", { children: "No referrals yet" }), e.jsx("p", { className: "text-sm", children: "Share your link to start earning!" })] }) : e.jsx("div", { className: "space-y-3", children: a == null ? void 0 : a.referrals.map((s) => e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: `p-2 rounded-full ${s.rewardIssued ? "bg-green-100" : "bg-gray-100"}`, children: s.rewardIssued ? e.jsx(g, { className: "h-4 w-4 text-green-600" }) : e.jsx(ae, { className: "h-4 w-4 text-gray-600" }) }), e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: "Friend referred" }), e.jsx("p", { className: "text-sm text-gray-500", children: $(new Date(s.createdAt), { addSuffix: true }) })] })] }), e.jsxs("div", { className: "text-right", children: [e.jsx("p", { className: `font-bold ${s.rewardIssued ? "text-green-600" : "text-gray-500"}`, children: s.displayRewardAmount }), e.jsx(S, { variant: s.rewardIssued ? "default" : "secondary", children: s.rewardIssued ? "Rewarded" : "Pending" })] })] }, s.id)) }) })] })] })] })] })] }) : e.jsxs("div", { className: "container mx-auto p-4 text-center", children: [e.jsx("h1", { className: "text-2xl font-bold mb-4", children: "Please log in to view your wallet" }), e.jsx(L, { href: "/auth", className: "text-primary hover:underline", children: "Sign in here" })] });
}
export { Le as default };
