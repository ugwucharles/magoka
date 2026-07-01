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
import { r as c, c as ne, a as ce, u as de, j as e, B as d } from "./index-DOfu0sXg.js";
import { D as me, a as ue, b as C, c as F } from "./dialog-BUvIuveX.js";
import { I as f } from "./input-FyV2XACZ.js";
import { L as g } from "./label-B38UEnoM.js";
import { g as P, a as q, G as he } from "./auth-AqNcfriC.js";
import { A as k } from "./arrow-left-CK7JF7w9.js";
import { U as xe } from "./user-adl9AYKF.js";
import { M as H } from "./mail-WBbfgCoF.js";
import { C as fe } from "./clock-DQ0X7PrC.js";
function Fe({ open: O, onClose: M, onAuthenticated: W, onContinueAsGuest: K }) {
  const [v, h] = c.useState("choice"), [i, m] = c.useState(false), [j, E] = c.useState(0), [Q, D] = c.useState("email"), { toast: n } = ne(), { data: a } = ce(), [, Z] = de(), x = (a == null ? void 0 : a.colorScheme) || "#F02819", y = (a == null ? void 0 : a.buttonColor) || "#FFFFFF", [N, T] = c.useState({ identifier: "" }), [r, u] = c.useState({ fullName: "", email: "", phone: "", referralCode: "" }), [w, I] = c.useState(""), [p, L] = c.useState({}), [b, A] = c.useState(null), [U, z] = c.useState(null);
  c.useEffect(() => {
    const s = P();
    s && u((l) => __spreadProps(__spreadValues({}, l), { referralCode: s }));
  }, []), c.useEffect(() => {
    O || S();
  }, [O]), c.useEffect(() => {
    if (j > 0) {
      const s = setTimeout(() => E(j - 1), 1e3);
      return () => clearTimeout(s);
    }
  }, [j]);
  const R = () => __async(null, null, function* () {
    if (!N.identifier) {
      n({ title: "Error", description: "Please enter your email or phone number", variant: "destructive" });
      return;
    }
    m(true);
    try {
      const s = N.identifier.includes("@"), l = s ? N.identifier.toLowerCase() : N.identifier, o = yield fetch("/api/auth/login/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ emailOrPhone: l }) }), t = yield o.json();
      o.ok ? (L({ email: s ? l : void 0, phone: s ? void 0 : l }), D(s ? "email" : "phone"), h("otp-verification"), E(60), n({ title: "Verification Code Sent", description: `Check ${s ? "your email" : "your phone"} for the verification code`, variant: "default" })) : n({ title: "Error", description: t.message || "Failed to send verification code", variant: "destructive" });
    } catch (s) {
      n({ title: "Error", description: s instanceof Error ? s.message : "Login failed", variant: "destructive" });
    } finally {
      m(false);
    }
  }), V = () => __async(null, null, function* () {
    if (!r.fullName || !r.email || !r.phone) {
      n({ title: "Error", description: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!r.email.includes("@")) {
      n({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    m(true);
    try {
      const s = r.email.toLowerCase(), l = r.phone.trim(), o = yield fetch("/api/auth/register/send-otp", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fullName: r.fullName, email: s, phone: l, referralCode: r.referralCode || void 0 }) }), t = yield o.json();
      if (o.ok) L({ email: s, phone: l, tempUserId: "signup" }), D("email"), h("otp-verification"), E(60), n({ title: "Registration Initiated", description: t.message || "Please verify your account with the OTP sent to you." });
      else throw new Error(t.message || "Registration failed");
    } catch (s) {
      n({ title: "Error", description: s instanceof Error ? s.message : "Registration failed", variant: "destructive" });
    } finally {
      m(false);
    }
  }), X = (s, l, o) => {
    localStorage.setItem("auth-token", s);
    const t = new CustomEvent("auth-change", { detail: { user: l, token: s } });
    window.dispatchEvent(t), n({ title: "Success", description: o }), setTimeout(() => {
      W(l), M();
    }, 300);
  }, _ = (s, l) => __async(null, null, function* () {
    m(true);
    try {
      const o = s === "register" && (r.referralCode || P()) || void 0, t = yield q.authenticateWithGoogle(l, s, o);
      if (!t.success || !t.token || !t.user) {
        n({ title: "Error", description: t.error || "Google authentication failed", variant: "destructive" });
        return;
      }
      if (t.requiresProfileCompletion) {
        z(s), A({ token: t.token, user: t.user, missingFields: t.missingFields || [] }), u((B) => {
          var $, J, Y;
          return __spreadProps(__spreadValues({}, B), { fullName: (($ = t.user) == null ? void 0 : $.fullName) || "", email: ((J = t.user) == null ? void 0 : J.email) || "", phone: ((Y = t.user) == null ? void 0 : Y.phone) || "" });
        }), h("google-profile"), n({ title: "Almost Done", description: "Complete the remaining details to finish setting up your account." });
        return;
      }
      X(t.token, t.user, s === "register" ? "Account created successfully with Google!" : "Login successful!");
    } finally {
      m(false);
    }
  }), ee = () => __async(null, null, function* () {
    if (b) {
      if (b.missingFields.includes("fullName") && !r.fullName.trim()) {
        n({ title: "Error", description: "Please enter your full name", variant: "destructive" });
        return;
      }
      if (b.missingFields.includes("phone") && !r.phone.trim()) {
        n({ title: "Error", description: "Please enter your phone number", variant: "destructive" });
        return;
      }
      m(true);
      try {
        const s = yield q.completeProfile(b.token, { fullName: r.fullName.trim(), phone: r.phone.trim() });
        if (!s.success || !s.user) {
          n({ title: "Error", description: s.error || "Failed to complete your profile", variant: "destructive" });
          return;
        }
        X(s.token || b.token, s.user, "Account ready for checkout!");
      } finally {
        m(false);
      }
    }
  }), se = () => __async(null, null, function* () {
    if (!w || w.length < 4) {
      n({ title: "Error", description: "Please enter a valid OTP code", variant: "destructive" });
      return;
    }
    m(true);
    try {
      if (p.tempUserId === "signup") {
        const s = p.email.toLowerCase(), l = p.phone.trim(), o = yield fetch("/api/auth/register/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: s, phone: l, fullName: r.fullName, otp: w, referralCode: r.referralCode || void 0 }) }), t = yield o.json();
        if (o.ok && t.user && t.token) X(t.token, t.user, "Account created successfully!");
        else throw new Error(t.message || "Registration verification failed");
      } else {
        const l = !!p.email ? p.email.toLowerCase() : p.phone, o = yield fetch("/api/auth/login/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ emailOrPhone: l, otp: w }) }), t = yield o.json();
        if (o.ok && t.user && t.token) X(t.token, t.user, "Login successful!");
        else throw new Error(t.message || "OTP verification failed");
      }
    } catch (s) {
      n({ title: "Error", description: s instanceof Error ? s.message : "OTP verification failed", variant: "destructive" });
    } finally {
      m(false);
    }
  }), S = () => {
    h("choice"), T({ identifier: "" }), u({ fullName: "", email: "", phone: "", referralCode: P() || "" }), I(""), L({}), E(0), A(null), z(null);
  }, te = () => {
    Z("/");
  }, G = (s, l = "Or continue manually") => e.jsxs("div", { className: "space-y-4", children: [e.jsx(he, { mode: s, disabled: i, onCredential: (o) => _(s, o), onError: (o) => {
    n({ title: "Google Sign-In Unavailable", description: o, variant: "destructive" });
  } }), e.jsxs("div", { className: "relative", children: [e.jsx("div", { className: "absolute inset-0 flex items-center", children: e.jsx("span", { className: "w-full border-t border-gray-200" }) }), e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: e.jsx("span", { className: "bg-white px-2 text-gray-500", children: l }) })] })] }), ae = () => e.jsxs("div", { className: "space-y-8", children: [e.jsxs(C, { className: "text-center space-y-4", children: [e.jsxs("div", { className: "flex justify-between items-start w-full", children: [e.jsx(d, { variant: "ghost", size: "sm", onClick: te, className: "p-2 h-8 w-8 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700", title: "Go back to homepage", children: e.jsx(k, { className: "h-4 w-4" }) }), a != null && a.logoUrl || a != null && a.logoLightUrl ? e.jsx("div", { className: "mx-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white", children: e.jsx("img", { src: (a == null ? void 0 : a.logoLightUrl) || (a == null ? void 0 : a.logoUrl) || "", alt: `${(a == null ? void 0 : a.name) || "Brand"} logo`, className: "w-full h-full object-contain p-2" }) }) : e.jsx("div", { className: "mx-auto w-16 h-16 rounded-full flex items-center justify-center shadow-lg", style: { background: `linear-gradient(to right, ${x}, ${x}dd)` }, children: e.jsx("span", { className: "text-white font-bold text-2xl", children: ((a == null ? void 0 : a.name) || "Y").charAt(0).toUpperCase() }) }), e.jsx("div", { className: "w-8 h-8" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsxs(F, { className: "text-2xl font-bold", style: { color: x }, children: ["Welcome to ", (a == null ? void 0 : a.name) || "EatYum", "!"] }), e.jsx("p", { className: "text-gray-600", children: "Choose how you'd like to proceed with your order" })] })] }), e.jsxs("div", { className: "space-y-4", children: [G("login", "Or choose another option"), e.jsxs(d, { onClick: () => h("login"), className: "w-full h-14 text-left justify-start space-x-4 transition-all duration-200", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: [e.jsx("div", { className: "w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center transition-colors", children: e.jsx(xe, { className: "h-5 w-5 text-white" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-medium", children: "I have an account" }), e.jsx("div", { className: "text-sm opacity-90", children: "Login with email or phone" })] })] }), e.jsxs(d, { onClick: () => h("signup"), className: "w-full h-14 text-left justify-start space-x-4 transition-all duration-200", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: [e.jsx("div", { className: "w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center transition-colors", children: e.jsx(H, { className: "h-5 w-5 text-white" }) }), e.jsxs("div", { className: "text-left", children: [e.jsx("div", { className: "font-medium", children: "Create new account" }), e.jsx("div", { className: "text-sm opacity-90", children: "Sign up for exclusive offers" })] })] }), e.jsxs("div", { className: "relative", children: [e.jsx("div", { className: "absolute inset-0 flex items-center", children: e.jsx("span", { className: "w-full border-t border-gray-200" }) }), e.jsx("div", { className: "relative flex justify-center text-xs uppercase", children: e.jsx("span", { className: "bg-white px-2 text-gray-500", children: "Or" }) })] }), e.jsx(d, { onClick: K, className: "w-full h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-all duration-200", disabled: i, children: "Continue as Guest" })] }), e.jsx("div", { className: "text-center", children: e.jsx("p", { className: "text-xs text-gray-500", children: "By continuing, you agree to our Terms of Service and Privacy Policy" }) })] }), re = () => e.jsxs("div", { className: "space-y-6", children: [e.jsx(C, { children: e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx(d, { variant: "ghost", size: "sm", onClick: S, className: "p-2 h-8 w-8 rounded-full hover:bg-gray-100", children: e.jsx(k, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsx(F, { className: "text-xl font-bold text-gray-900", children: "Login to your account" }), e.jsx("p", { className: "text-sm text-gray-500", children: "Enter your email or phone number" })] })] }) }), e.jsxs("div", { className: "space-y-4", children: [G("login"), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "identifier", className: "text-sm font-medium text-gray-700", children: "Email or Phone Number" }), e.jsx(f, { id: "identifier", type: "text", placeholder: "Enter your email or phone (08XXXXXXXXX)", value: N.identifier, onChange: (s) => T({ identifier: s.target.value }), className: "h-12 border-2", style: { borderColor: "rgb(229, 231, 235)", "--tw-ring-color": `${x}20` }, onFocus: (s) => s.target.style.borderColor = x, onBlur: (s) => s.target.style.borderColor = "rgb(229, 231, 235)", disabled: i }), e.jsx("p", { className: "text-xs text-gray-500", children: "Format: email@example.com or 08XXXXXXXXX" })] }), e.jsx(d, { onClick: R, className: "w-full h-12 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: i ? e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), e.jsx("span", { children: "Sending Code..." })] }) : "Send Verification Code" }), e.jsxs("div", { className: "text-center text-sm text-gray-600", children: ["Don't have an account?", " ", e.jsx("button", { onClick: () => {
    h("signup"), T({ identifier: "" });
  }, className: "font-medium transition-opacity hover:opacity-80", style: { color: x }, children: "Sign up" })] })] })] }), ie = () => e.jsxs("div", { className: "space-y-6", children: [e.jsx(C, { children: e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx(d, { variant: "ghost", size: "sm", onClick: S, className: "p-2 h-8 w-8 rounded-full hover:bg-gray-100", children: e.jsx(k, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsx(F, { className: "text-xl font-bold text-gray-900", children: "Create your account" }), e.jsxs("p", { className: "text-sm text-gray-500", children: ["Join ", (a == null ? void 0 : a.name) || "EatYum", " and enjoy exclusive offers"] })] })] }) }), e.jsxs("div", { className: "space-y-4", children: [G("register"), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "fullName", className: "text-sm font-medium text-gray-700", children: "Full Name *" }), e.jsx(f, { id: "fullName", type: "text", placeholder: "Enter your full name", value: r.fullName, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { fullName: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "email", className: "text-sm font-medium text-gray-700", children: "Email Address *" }), e.jsx(f, { id: "email", type: "email", placeholder: "Enter your email address", value: r.email, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { email: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "phone", className: "text-sm font-medium text-gray-700", children: "Phone Number *" }), e.jsx(f, { id: "phone", type: "tel", placeholder: "08XXXXXXXXX", value: r.phone, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { phone: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i }), e.jsx("p", { className: "text-xs text-gray-500", children: "Format: 08XXXXXXXXX (Nigerian number)" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "referralCode", className: "text-sm font-medium text-gray-700", children: "Referral Code (Optional)" }), e.jsx(f, { id: "referralCode", type: "text", placeholder: "Enter referral code if you have one", value: r.referralCode, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { referralCode: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i })] }), e.jsx(d, { onClick: V, className: "w-full h-12 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: i ? e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), e.jsx("span", { children: "Creating Account..." })] }) : "Create Account & Send OTP" }), e.jsxs("div", { className: "text-center text-sm text-gray-600", children: ["Already have an account?", " ", e.jsx("button", { onClick: () => {
    h("login"), u({ fullName: "", email: "", phone: "", referralCode: P() || "" });
  }, className: "font-medium transition-opacity hover:opacity-80", style: { color: x }, children: "Login" })] })] })] }), le = () => e.jsxs("div", { className: "space-y-6", children: [e.jsx(C, { children: e.jsxs("div", { className: "flex items-center space-x-3", children: [e.jsx(d, { variant: "ghost", size: "sm", onClick: () => {
    A(null), h(U === "register" ? "signup" : "login");
  }, className: "p-2 h-8 w-8 rounded-full hover:bg-gray-100", children: e.jsx(k, { className: "h-4 w-4" }) }), e.jsxs("div", { children: [e.jsx(F, { className: "text-xl font-bold text-gray-900", children: "Complete your profile" }), e.jsx("p", { className: "text-sm text-gray-500", children: "Add the remaining details we need for checkout." })] })] }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsx("div", { className: "rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900", children: "Google sign-in was successful. Finish your account setup with the details below." }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "google-fullName", className: "text-sm font-medium text-gray-700", children: "Full Name *" }), e.jsx(f, { id: "google-fullName", type: "text", placeholder: "Enter your full name", value: r.fullName, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { fullName: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "google-email", className: "text-sm font-medium text-gray-700", children: "Email Address" }), e.jsx(f, { id: "google-email", type: "email", value: r.email, className: "h-12 bg-gray-50 text-gray-500", disabled: true }), e.jsx("p", { className: "text-xs text-gray-500", children: "Verified with Google" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "google-phone", className: "text-sm font-medium text-gray-700", children: "Phone Number *" }), e.jsx(f, { id: "google-phone", type: "tel", placeholder: "08XXXXXXXXX", value: r.phone, onChange: (s) => u(__spreadProps(__spreadValues({}, r), { phone: s.target.value })), className: "h-12 border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i })] }), e.jsx(d, { onClick: ee, className: "w-full h-12 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: i ? e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), e.jsx("span", { children: "Saving..." })] }) : U === "register" ? "Complete Sign-Up" : "Complete Sign-In" })] })] }), oe = () => e.jsxs("div", { className: "space-y-6", children: [e.jsxs(C, { className: "text-center space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between w-full", children: [e.jsx(d, { variant: "ghost", size: "sm", onClick: S, className: "p-2 h-8 w-8 rounded-full hover:bg-gray-100", children: e.jsx(k, { className: "h-4 w-4" }) }), e.jsx("div", { className: "mx-auto w-12 h-12 bg-gradient-to-r from-[#F02819] to-[#FF4433] rounded-full flex items-center justify-center", children: e.jsx(H, { className: "h-6 w-6 text-white" }) }), e.jsx("div", { className: "w-8 h-8" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(F, { className: "text-xl font-bold text-gray-900", children: "Verify your account" }), e.jsxs("p", { className: "text-gray-600 text-sm", children: ["Enter the 4-digit verification code sent to your ", Q] })] })] }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(g, { htmlFor: "otp", className: "text-sm font-medium text-gray-700", children: "Verification Code" }), e.jsx(f, { id: "otp", type: "text", placeholder: "Enter 4-digit code", value: w, onChange: (s) => I(s.target.value), className: "h-12 text-center text-2xl font-mono tracking-widest border-2 focus:border-[#F02819] focus:ring-[#F02819]/20", disabled: i, maxLength: 4 })] }), e.jsx(d, { onClick: se, className: "w-full h-12 font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl", style: { backgroundColor: y, color: "#FFFFFF" }, disabled: i, children: i ? e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }), e.jsx("span", { children: "Verifying..." })] }) : "Verify OTP" }), j > 0 ? e.jsxs("div", { className: "text-center text-sm text-gray-500 flex items-center justify-center space-x-2 bg-gray-50 py-3 rounded-lg", children: [e.jsx(fe, { className: "h-4 w-4" }), e.jsxs("span", { children: ["Resend code in ", j, "s"] })] }) : e.jsx(d, { variant: "ghost", onClick: () => p.tempUserId === "signup" ? V() : R(), className: "w-full text-sm py-3 transition-colors", style: { color: x }, onMouseEnter: (s) => {
    s.currentTarget.style.backgroundColor = `${x}0d`;
  }, onMouseLeave: (s) => {
    s.currentTarget.style.backgroundColor = "transparent";
  }, disabled: i, children: "Resend OTP" })] })] });
  return e.jsx(me, { open: O, onOpenChange: () => {
  }, modal: true, children: e.jsxs(ue, { className: "sm:max-w-md p-8 rounded-xl border-0 shadow-2xl bg-white [&>button]:hidden", onInteractOutside: (s) => s.preventDefault(), onEscapeKeyDown: (s) => s.preventDefault(), children: [v === "choice" && ae(), v === "login" && re(), v === "signup" && ie(), v === "google-profile" && le(), v === "otp-verification" && oe()] }) });
}
export { Fe as C };
