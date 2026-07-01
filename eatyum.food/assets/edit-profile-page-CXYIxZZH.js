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
import { c as b, V as v, r as u, b as w, j as e, E as f, F as j, L as l, B as n, H as C, I as E } from "./index-DOfu0sXg.js";
import { u as P } from "./use-auth-d_ltKWkf.js";
import { u as F } from "./useMutation-CVmbONMy.js";
import { I as o } from "./input-FyV2XACZ.js";
import { L as x } from "./label-B38UEnoM.js";
import { A as k } from "./arrow-left-CK7JF7w9.js";
import { U as L } from "./user-adl9AYKF.js";
import { M as V } from "./mail-WBbfgCoF.js";
import { C as p } from "./circle-check-Cntb4uoq.js";
import { L as m } from "./lock-ABGMYV1t.js";
import { P as S } from "./phone-Cx4FTVKN.js";
import { S as A } from "./save-BZa-ufS1.js";
function G() {
  const { user: T, isAuthenticated: h } = P(), { toast: c } = b(), g = v(), [t, i] = u.useState({ fullName: "", email: "", phone: "" }), { data: s, isLoading: N } = w({ queryKey: ["/api/profile"], enabled: h });
  u.useEffect(() => {
    s && i({ fullName: s.fullName, email: s.email, phone: s.phone });
  }, [s]);
  const d = F({ mutationFn: (a) => __async(null, null, function* () {
    const r = yield fetch("/api/profile", { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("auth-token")}` }, body: JSON.stringify(a) });
    if (!r.ok) throw new Error("Failed to update profile");
    return r.json();
  }), onSuccess: () => {
    g.invalidateQueries({ queryKey: ["/api/profile"] }), c({ title: "Success", description: "Profile updated successfully" });
  }, onError: (a) => {
    c({ title: "Error", description: a.message, variant: "destructive" });
  } }), y = () => {
    const a = {};
    t.fullName !== (s == null ? void 0 : s.fullName) && (a.fullName = t.fullName), !(s != null && s.emailVerified) && t.email !== (s == null ? void 0 : s.email) && (a.email = t.email), !(s != null && s.phoneVerified) && t.phone !== (s == null ? void 0 : s.phone) && (a.phone = t.phone), Object.keys(a).length > 0 ? d.mutate(a) : c({ title: "No Changes", description: "No changes to save" });
  };
  return h ? N ? e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: e.jsxs("div", { className: "text-center", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#F02819] mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading profile..." })] }) }) : e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx("header", { className: "bg-white shadow-sm sticky top-0 z-40", children: e.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: e.jsxs("div", { className: "flex items-center justify-between h-16", children: [e.jsx("div", { className: "flex items-center", children: e.jsx(l, { href: "/profile", children: e.jsxs(n, { variant: "ghost", size: "sm", className: "flex items-center gap-2", children: [e.jsx(k, { className: "h-4 w-4" }), "Back to Profile"] }) }) }), e.jsx(l, { href: "/", className: "flex items-center", children: e.jsx("img", { src: "/eatyum-logo.png", alt: "EatYum Logo", className: "h-10" }) }), e.jsx("div", { className: "w-24" }), " "] }) }) }), e.jsxs("div", { className: "max-w-2xl mx-auto p-4 py-8", children: [e.jsxs("div", { className: "text-center mb-8", children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Edit Profile" }), e.jsx("p", { className: "text-gray-600", children: "Update your account information" })] }), e.jsxs(f, { children: [e.jsx(C, { children: e.jsxs(E, { className: "flex items-center gap-2", children: [e.jsx(L, { className: "h-5 w-5" }), "Profile Details"] }) }), e.jsxs(j, { className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx(x, { htmlFor: "fullName", children: "Full Name" }), e.jsx(o, { id: "fullName", value: t.fullName, onChange: (a) => i((r) => __spreadProps(__spreadValues({}, r), { fullName: a.target.value })), className: "mt-1", placeholder: "Enter your full name" })] }), e.jsxs("div", { children: [e.jsxs(x, { htmlFor: "email", className: "flex items-center gap-2", children: [e.jsx(V, { className: "h-4 w-4" }), "Email Address", (s == null ? void 0 : s.emailVerified) && e.jsxs(e.Fragment, { children: [e.jsx(p, { className: "h-4 w-4 text-green-600" }), e.jsx("span", { className: "text-xs text-green-600 font-medium", children: "Verified" })] })] }), s != null && s.emailVerified ? e.jsxs("div", { className: "mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between", children: [e.jsx("span", { className: "text-gray-900 font-medium", children: s == null ? void 0 : s.email }), e.jsx(m, { className: "h-4 w-4 text-gray-400" })] }) : e.jsx(o, { id: "email", type: "email", value: t.email, onChange: (a) => i((r) => __spreadProps(__spreadValues({}, r), { email: a.target.value })), className: "mt-1", placeholder: "Enter your email address" }), (s == null ? void 0 : s.emailVerified) && e.jsxs("p", { className: "text-xs text-gray-500 mt-2 flex items-center gap-1", children: [e.jsx(m, { className: "h-3 w-3" }), "This field is locked because your email is verified"] })] }), e.jsxs("div", { children: [e.jsxs(x, { htmlFor: "phone", className: "flex items-center gap-2", children: [e.jsx(S, { className: "h-4 w-4" }), "Phone Number", (s == null ? void 0 : s.phoneVerified) && e.jsxs(e.Fragment, { children: [e.jsx(p, { className: "h-4 w-4 text-green-600" }), e.jsx("span", { className: "text-xs text-green-600 font-medium", children: "Verified" })] })] }), s != null && s.phoneVerified ? e.jsxs("div", { className: "mt-1 p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between", children: [e.jsx("span", { className: "text-gray-900 font-medium", children: s == null ? void 0 : s.phone }), e.jsx(m, { className: "h-4 w-4 text-gray-400" })] }) : e.jsx(o, { id: "phone", type: "tel", value: t.phone, onChange: (a) => i((r) => __spreadProps(__spreadValues({}, r), { phone: a.target.value })), className: "mt-1", placeholder: "Enter your phone number" }), (s == null ? void 0 : s.phoneVerified) && e.jsxs("p", { className: "text-xs text-gray-500 mt-2 flex items-center gap-1", children: [e.jsx(m, { className: "h-3 w-3" }), "This field is locked because your phone is verified"] })] }), e.jsxs("div", { className: "flex gap-3 pt-4", children: [e.jsx(n, { onClick: y, disabled: d.isPending, className: "flex-1 yum-btn-primary flex items-center gap-2", children: d.isPending ? e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }), "Saving..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(A, { className: "h-4 w-4" }), "Save Changes"] }) }), e.jsx(l, { href: "/profile", children: e.jsx(n, { variant: "outline", className: "px-6", children: "Cancel" }) })] })] })] })] })] }) : e.jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center p-4", children: e.jsx(f, { className: "w-full max-w-md", children: e.jsxs(j, { className: "p-6 text-center", children: [e.jsx("h2", { className: "text-xl font-semibold mb-4", children: "Please Log In" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "You need to be logged in to edit your profile." }), e.jsx(l, { href: "/", children: e.jsx(n, { className: "yum-btn-primary", children: "Go to Home" }) })] }) }) });
}
export { G as default };
