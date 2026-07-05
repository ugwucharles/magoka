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
import { c as R, r as w, b as T, k as P, l as _, j as e, E as m, F as o, L as j, B as n, H as x, I as h } from "./index-DOfu0sXg.js";
import { u as B } from "./use-auth-d_ltKWkf.js";
import { B as k } from "./badge-BAjaXL1S.js";
import { u as A, f as i } from "./useReferralReward-BeyZodYI.js";
import { A as F } from "./arrow-left-CK7JF7w9.js";
import { G as C } from "./gift-C_SZrOe8.js";
import { T as $ } from "./target-B9hXFhRn.js";
import { S as L } from "./share-2-CzhGwcTj.js";
import { U as f } from "./users-CBtjfzvJ.js";
import { C as S } from "./copy-Dm_kp7Au.js";
import { S as H } from "./smartphone-DMb4mbpx.js";
import { C as l } from "./circle-check-Cntb4uoq.js";
import { C as U } from "./clock-DQ0X7PrC.js";
import { f as q } from "./formatDistanceToNow-BStQM2-5.js";
import "./en-US-BIej3L2x.js";
function ie() {
  var b, v;
  const { user: t, isAuthenticated: E } = B(), { toast: u } = R(), [I, p] = w.useState(false), { data: s, isLoading: z, error: G } = A(), { data: a, isLoading: N } = T({ queryKey: ["/api/referrals"], enabled: !!t });
  w.useEffect(() => {
    var r;
    if (t) try {
      P({ item_category: "referral", uuid_c1: "share-earn", user_email: t.email, user_phone_number: t.phone }), _("Share & Earn", { content_type: "page", content_name: "Share & Earn Referral Program", content_category: "referral", em: t.email ? btoa(t.email.toLowerCase().trim()) : void 0, ph: t.phone ? btoa(t.phone.replace(/\D/g, "")) : void 0, external_id: (r = t.id) == null ? void 0 : r.toString() });
    } catch (c) {
      console.warn("Page view tracking error:", c);
    }
  }, [t]);
  const g = () => a != null && a.referralCode ? `https://magoka.food/r/${a.referralCode}` : "", d = () => __async(null, null, function* () {
    const r = g();
    if (r) try {
      yield navigator.clipboard.writeText(r), p(true), u({ title: "Link copied!", description: "Your referral link has been copied to clipboard" }), setTimeout(() => p(false), 2e3);
    } catch (e2) {
      u({ title: "Failed to copy", description: "Please copy the link manually", variant: "destructive" });
    }
  }), y = () => __async(null, null, function* () {
    const r = g();
    if (!r) return;
    const c = `Join magoka and get ${i((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus! Use my referral link to sign up and get ${i((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus after your first order of \u20A61500+`;
    if (navigator.share) try {
      yield navigator.share({ title: `Join magoka and get ${i((s == null ? void 0 : s.amountInNaira) || 2e3)} bonus!`, text: c, url: r });
    } catch (e2) {
      d();
    }
    else try {
      yield navigator.clipboard.writeText(`${c}

${r}`), u({ title: "Message copied!", description: "Referral message and link copied to clipboard" });
    } catch (e2) {
      d();
    }
  });
  return E ? e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-40", children: e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: e.jsxs("div", { className: "flex items-center justify-between h-16", children: [e.jsx("div", { className: "flex items-center", children: e.jsx(j, { href: "/profile", children: e.jsxs(n, { variant: "ghost", size: "sm", className: "flex items-center gap-2", children: [e.jsx(F, { className: "h-4 w-4" }), "Back to Profile"] }) }) }), e.jsx(j, { href: "/", className: "flex items-center", children: e.jsx("img", { src: "/magoka-logo.png", alt: "magoka Logo", className: "h-10" }) }), e.jsx("div", { className: "w-24" }), " "] }) }) }), e.jsxs("div", { className: "max-w-4xl mx-auto p-4 py-8", children: [e.jsxs("div", { className: "text-center mb-8", children: [e.jsx("div", { className: "mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4", children: e.jsx(C, { className: "h-8 w-8 text-green-600" }) }), e.jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "Share & Earn" }), e.jsxs("p", { className: "text-gray-600 mt-2", children: ["Invite friends and earn ", i((s == null ? void 0 : s.amountInNaira) || 2e3), " for each successful referral!"] })] }), e.jsxs(m, { className: "mb-6", children: [e.jsx(x, { children: e.jsxs(h, { className: "flex items-center gap-2", children: [e.jsx($, { className: "h-5 w-5 text-green-600" }), "How It Works"] }) }), e.jsx(o, { children: e.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3", children: e.jsx(L, { className: "h-6 w-6 text-blue-600" }) }), e.jsx("h3", { className: "font-semibold mb-2", children: "1. Share Your Link" }), e.jsx("p", { className: "text-sm text-gray-600", children: "Share your unique referral link with friends and family" })] }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "mx-auto w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3", children: e.jsx(f, { className: "h-6 w-6 text-orange-600" }) }), e.jsx("h3", { className: "font-semibold mb-2", children: "2. Friends Sign Up" }), e.jsx("p", { className: "text-sm text-gray-600", children: "Your friends register using your referral link" })] }), e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3", children: e.jsx(C, { className: "h-6 w-6 text-green-600" }) }), e.jsxs("h3", { className: "font-semibold mb-2", children: ["3. Both Earn ", i((s == null ? void 0 : s.amountInNaira) || 2e3)] }), e.jsxs("p", { className: "text-sm text-gray-600", children: ["You both get ", i((s == null ? void 0 : s.amountInNaira) || 2e3), " when they place their first order of \u20A61500+"] })] })] }) })] }), e.jsxs(m, { className: "mb-6", children: [e.jsx(x, { children: e.jsxs(h, { className: "flex items-center gap-2", children: [e.jsx(L, { className: "h-5 w-5 text-[#F02819]" }), "Your Referral Link"] }) }), e.jsx(o, { children: N ? e.jsxs("div", { className: "text-center py-4", children: [e.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-[#F02819] mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading your referral link..." })] }) : e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center gap-2 bg-gray-50 p-3 rounded border", children: [e.jsx("code", { className: "flex-1 text-sm text-gray-700 break-all", children: g() }), e.jsxs(n, { size: "sm", variant: "outline", onClick: d, className: "flex items-center gap-1", children: [e.jsx(S, { className: "h-4 w-4" }), I ? "Copied!" : "Copy"] })] }), e.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [e.jsxs(n, { onClick: y, className: "yum-btn-primary flex items-center gap-2", children: [e.jsx(H, { className: "h-4 w-4" }), "Share via Apps"] }), e.jsxs(n, { variant: "outline", onClick: d, className: "flex items-center gap-2", children: [e.jsx(S, { className: "h-4 w-4" }), "Copy Link"] })] })] }) })] }), e.jsxs(m, { className: "mb-6", children: [e.jsx(x, { children: e.jsx(h, { children: "Terms & Conditions" }) }), e.jsx(o, { children: e.jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [e.jsxs("li", { className: "flex items-start gap-2", children: [e.jsx(l, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }), "Both you and your friend receive ", i((s == null ? void 0 : s.amountInNaira) || 2e3), " bonus when they complete their first order"] }), e.jsxs("li", { className: "flex items-start gap-2", children: [e.jsx(l, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }), "The first order must be \u20A61500 or more to qualify for the bonus"] }), e.jsxs("li", { className: "flex items-start gap-2", children: [e.jsx(l, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }), "Bonus is added to your magoka Wallet and can be used for future orders"] }), e.jsxs("li", { className: "flex items-start gap-2", children: [e.jsx(l, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }), "No limit on the number of friends you can refer"] }), e.jsxs("li", { className: "flex items-start gap-2", children: [e.jsx(l, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }), "magoka reserves the right to modify or terminate this program at any time"] })] }) })] }), e.jsxs(m, { children: [e.jsx(x, { children: e.jsxs(h, { className: "flex items-center gap-2", children: [e.jsx(f, { className: "h-5 w-5" }), "Your Referrals (", ((b = a == null ? void 0 : a.referrals) == null ? void 0 : b.length) || 0, ")"] }) }), e.jsx(o, { children: N ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-[#F02819] mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading referrals..." })] }) : ((v = a == null ? void 0 : a.referrals) == null ? void 0 : v.length) === 0 ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx(f, { className: "h-12 w-12 text-gray-400 mx-auto mb-3" }), e.jsx("h3", { className: "font-medium text-gray-900 mb-1", children: "No referrals yet" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "Start sharing your link to earn rewards!" }), e.jsx(n, { onClick: y, className: "yum-btn-primary", children: "Share Your Link" })] }) : e.jsx("div", { className: "space-y-3", children: a == null ? void 0 : a.referrals.map((r) => e.jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded border", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("div", { className: "w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center", children: e.jsx(f, { className: "h-5 w-5 text-gray-600" }) }), e.jsxs("div", { children: [e.jsxs("p", { className: "font-medium", children: ["Friend #", r.inviteeId] }), e.jsxs("p", { className: "text-sm text-gray-600", children: ["Joined ", q(new Date(r.createdAt), { addSuffix: true })] })] })] }), e.jsx("div", { className: "text-right", children: r.rewardIssued ? e.jsxs(k, { variant: "default", className: "bg-green-100 text-green-800", children: [e.jsx(l, { className: "h-3 w-3 mr-1" }), i((s == null ? void 0 : s.amountInNaira) || 2e3), " Earned"] }) : e.jsxs(k, { variant: "secondary", children: [e.jsx(U, { className: "h-3 w-3 mr-1" }), "Pending Order"] }) })] }, r.id)) }) })] })] })] }) : e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsx(m, { className: "w-full max-w-md", children: e.jsxs(o, { className: "p-6 text-center", children: [e.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Please Log In" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "You need to be logged in to access Share & Earn." }), e.jsx(j, { href: "/", children: e.jsx(n, { className: "yum-btn-primary", children: "Go to Home" }) })] }) }) });
}
export { ie as default };
