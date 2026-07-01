var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import { N as z, n as G, r as i, j as e, P as N, aE as W, aT as p, w as j, a as E, c as q, b as J, E as g, F as b, L as u, B as d, H as L, I as K } from "./index-DOfu0sXg.js";
import { u as Q } from "./use-auth-d_ltKWkf.js";
import { S as V } from "./separator-B__B0Kv_.js";
import { u as O, f as C } from "./useReferralReward-BeyZodYI.js";
import { U as A } from "./user-adl9AYKF.js";
import { G as S } from "./gift-C_SZrOe8.js";
import { C as X } from "./copy-Dm_kp7Au.js";
import { S as Z } from "./share-2-CzhGwcTj.js";
import { W as D } from "./wallet-e6BSu-fo.js";
import { S as ee } from "./star-o2YGpjzJ.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ae = z("PenLine", [["path", { d: "M12 20h9", key: "t2du7b" }], ["path", { d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z", key: "1ykcvy" }]]);
var v = "Avatar", [se, pe] = G(v), [re, R] = se(v), I = i.forwardRef((s, r) => {
  const _a = s, { __scopeAvatar: t } = _a, l = __objRest(_a, ["__scopeAvatar"]), [n, a] = i.useState("idle");
  return e.jsx(re, { scope: t, imageLoadingStatus: n, onImageLoadingStatusChange: a, children: e.jsx(N.span, __spreadProps(__spreadValues({}, l), { ref: r })) });
});
I.displayName = v;
var P = "AvatarImage", $ = i.forwardRef((s, r) => {
  const _a = s, { __scopeAvatar: t, src: l, onLoadingStatusChange: n = () => {
  } } = _a, a = __objRest(_a, ["__scopeAvatar", "src", "onLoadingStatusChange"]), x = R(P, t), o = te(l, a), c = W((f) => {
    n(f), x.onImageLoadingStatusChange(f);
  });
  return p(() => {
    o !== "idle" && c(o);
  }, [o, c]), o === "loaded" ? e.jsx(N.img, __spreadProps(__spreadValues({}, a), { ref: r, src: l })) : null;
});
$.displayName = P;
var M = "AvatarFallback", U = i.forwardRef((s, r) => {
  const _a = s, { __scopeAvatar: t, delayMs: l } = _a, n = __objRest(_a, ["__scopeAvatar", "delayMs"]), a = R(M, t), [x, o] = i.useState(l === void 0);
  return i.useEffect(() => {
    if (l !== void 0) {
      const c = window.setTimeout(() => o(true), l);
      return () => window.clearTimeout(c);
    }
  }, [l]), x && a.imageLoadingStatus !== "loaded" ? e.jsx(N.span, __spreadProps(__spreadValues({}, n), { ref: r })) : null;
});
U.displayName = M;
function k(s, r) {
  return s ? r ? (s.src !== r && (s.src = r), s.complete && s.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function te(s, { referrerPolicy: r, crossOrigin: t }) {
  const l = le(), n = i.useRef(null), a = l ? (n.current || (n.current = new window.Image()), n.current) : null, [x, o] = i.useState(() => k(a, s));
  return p(() => {
    o(k(a, s));
  }, [a, s]), p(() => {
    const c = (m) => () => {
      o(m);
    };
    if (!a) return;
    const f = c("loaded"), h = c("error");
    return a.addEventListener("load", f), a.addEventListener("error", h), r && (a.referrerPolicy = r), typeof t == "string" && (a.crossOrigin = t), () => {
      a.removeEventListener("load", f), a.removeEventListener("error", h);
    };
  }, [a, t, r]), x;
}
function ne() {
  return () => {
  };
}
function le() {
  return i.useSyncExternalStore(ne, () => true, () => false);
}
var _ = I, F = $, T = U;
const Y = i.forwardRef((_a, t) => {
  var _b = _a, { className: s } = _b, r = __objRest(_b, ["className"]);
  return e.jsx(_, __spreadValues({ ref: t, className: j("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", s) }, r));
});
Y.displayName = _.displayName;
const B = i.forwardRef((_c, t) => {
  var _d = _c, { className: s } = _d, r = __objRest(_d, ["className"]);
  return e.jsx(F, __spreadValues({ ref: t, className: j("aspect-square h-full w-full", s) }, r));
});
B.displayName = F.displayName;
const H = i.forwardRef((_e, t) => {
  var _f = _e, { className: s } = _f, r = __objRest(_f, ["className"]);
  return e.jsx(T, __spreadValues({ ref: t, className: j("flex h-full w-full items-center justify-center rounded-full bg-muted", s) }, r));
});
H.displayName = T.displayName;
const ie = ({ className: s, size: r = "md" }) => {
  const { data: t } = E(), l = (t == null ? void 0 : t.colorScheme) || "#F02819", n = { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" };
  return e.jsx("div", { className: j("animate-spin rounded-full border-b-2", n[r], s), style: { borderColor: l } });
};
function Ne() {
  const { user: s, isAuthenticated: r } = Q(), { toast: t } = q(), { data: l } = E(), { data: n } = O(), { data: a, isLoading: x } = J({ queryKey: ["/api/profile"], enabled: r }), o = () => {
    if (a != null && a.referralCode) {
      const m = `https://eatyum.food/r/${a.referralCode}`;
      navigator.clipboard.writeText(m), t({ title: "Copied!", description: "Referral link copied to clipboard" });
    }
  }, c = () => {
    if (a != null && a.referralCode) {
      const m = `https://eatyum.food/r/${a.referralCode}`, y = C((n == null ? void 0 : n.amountInNaira) || 2e3), w = `Join EatYum and get ${y} off your first order! Use my referral link: ${m}`;
      navigator.share ? navigator.share({ title: `Join EatYum - Get ${y} Off!`, text: w, url: m }) : (navigator.clipboard.writeText(w), t({ title: "Copied!", description: "Referral message copied to clipboard" }));
    }
  };
  if (!r) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsx(g, { className: "w-full max-w-md", children: e.jsxs(b, { className: "p-6 text-center", children: [e.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Please Log In" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "You need to be logged in to view your profile." }), e.jsx(u, { href: "/", children: e.jsx(d, { className: "yum-btn-primary", children: "Go to Home" }) })] }) }) });
  if (x) return e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsxs("div", { className: "text-center", children: [e.jsx(ie, { className: "mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading profile..." })] }) });
  const f = (h) => h.split(" ").map((m) => m[0]).join("").toUpperCase().slice(0, 2);
  return e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-40", children: e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: e.jsxs("div", { className: "flex items-center justify-between h-16", children: [e.jsx("div", { className: "flex items-center", children: e.jsx(u, { href: "/", children: e.jsxs(d, { variant: "ghost", size: "sm", className: "flex items-center gap-2", children: [e.jsx(A, { className: "h-4 w-4" }), "Back to Home"] }) }) }), e.jsx(u, { href: "/", className: "flex items-center", children: e.jsx("img", { src: "/eatyum-logo.png", alt: "EatYum Logo", className: "h-10" }) }), e.jsx("div", { className: "w-24" }), " "] }) }) }), e.jsxs("div", { className: "max-w-4xl mx-auto p-4 py-8", children: [e.jsxs("div", { className: "text-center mb-8", children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "My Profile" }), e.jsx("p", { className: "text-gray-600", children: "Manage your account and preferences" })] }), e.jsx(g, { className: "mb-6", children: e.jsxs(L, { className: "text-center pb-4", children: [e.jsxs("div", { className: "mx-auto", children: [e.jsxs(Y, { className: "w-20 h-20 mx-auto mb-4", children: [e.jsx(B, { src: "" }), e.jsx(H, { className: "text-white text-xl", style: { backgroundColor: (l == null ? void 0 : l.colorScheme) || "#F02819" }, children: a != null && a.fullName ? f(a.fullName) : "U" })] }), e.jsx("h2", { className: "text-xl font-semibold", children: a == null ? void 0 : a.fullName }), e.jsx("p", { className: "text-gray-600", children: (a == null ? void 0 : a.email) || (a == null ? void 0 : a.phone) || "Add your contact details" })] }), (a == null ? void 0 : a.referralCode) && e.jsxs("div", { className: "mt-6 p-4 bg-green-50 rounded-lg border border-green-200", children: [e.jsxs("div", { className: "flex items-center justify-center gap-2 mb-3", children: [e.jsx(S, { className: "h-5 w-5 text-green-600" }), e.jsx("span", { className: "font-medium text-green-800", children: "Your Referral Link" })] }), e.jsxs("div", { className: "flex items-center gap-2 bg-white p-2 rounded border", children: [e.jsx("code", { className: "flex-1 text-sm text-gray-700 text-center", children: `https://eatyum.food/r/${a.referralCode}` }), e.jsx(d, { size: "sm", variant: "outline", onClick: o, className: "px-2", children: e.jsx(X, { className: "h-4 w-4" }) })] }), e.jsxs(d, { className: "w-full mt-3 bg-green-600 hover:bg-green-700", onClick: c, children: [e.jsx(Z, { className: "h-4 w-4 mr-2" }), "Share & Earn ", C((n == null ? void 0 : n.amountInNaira) || 2e3)] })] })] }) }), e.jsxs(g, { children: [e.jsx(L, { children: e.jsx(K, { children: "Quick Actions" }) }), e.jsxs(b, { className: "space-y-3", children: [e.jsx(u, { href: "/profile/edit", children: e.jsxs(d, { variant: "outline", className: "w-full justify-start", children: [e.jsx(ae, { className: "h-4 w-4 mr-2" }), "View Profile Details"] }) }), e.jsx(u, { href: "/wallet", children: e.jsxs(d, { variant: "outline", className: "w-full justify-start", children: [e.jsx(D, { className: "h-4 w-4 mr-2" }), "EatYum Wallet"] }) }), e.jsx(u, { href: "/points", children: e.jsxs(d, { variant: "outline", className: "w-full justify-start", children: [e.jsx(ee, { className: "h-4 w-4 mr-2" }), "EatYum Points"] }) }), e.jsx(u, { href: "/share-earn", children: e.jsxs(d, { variant: "outline", className: "w-full justify-start", children: [e.jsx(S, { className: "h-4 w-4 mr-2" }), "Share & Earn"] }) }), e.jsx(V, {}), e.jsx(u, { href: "/my-orders", children: e.jsxs(d, { variant: "outline", className: "w-full justify-start", children: [e.jsx(A, { className: "h-4 w-4 mr-2" }), "My Orders"] }) })] })] })] })] });
}
export { Ne as default };
