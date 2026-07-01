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
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import {
  N as me,
  a as pe,
  r as E,
  c as fe,
  j as t,
  B as q,
  X as ae,
  aw as he,
  V as ge,
  b as ye,
  ax as ve,
  ay as xe,
  t as Ne,
  az as we
} from "./index-DOfu0sXg.js";
import {
  D as Ce,
  a as je
} from "./dialog-BUvIuveX.js";
import {
  I as J
} from "./input-FyV2XACZ.js";
import {
  L as M
} from "./label-B38UEnoM.js";
import {
  g as te,
  a as ie,
  G as Se
} from "./auth-AqNcfriC.js";
import {
  u as be,
  f as ne
} from "./useReferralReward-BeyZodYI.js";
import {
  A as le
} from "./arrow-left-CK7JF7w9.js";
import {
  G as re
} from "./gift-C_SZrOe8.js";
import {
  M as ce
} from "./mail-WBbfgCoF.js";
import {
  S as de
} from "./smartphone-DMb4mbpx.js";
import {
  u as Ie
} from "./useMutation-CVmbONMy.js";
import {
  u as Fe
} from "./use-auth-d_ltKWkf.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = me("Circle", [
  ["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
  }]
]), _e = ({
  isOpen: O,
  onClose: m,
  onSuccess: g
}) => {
  const {
    data: k
  } = be(), {
    data: A
  } = pe(), j = (A == null ? void 0 : A.colorScheme) || "#F02819", T = (A == null ? void 0 : A.buttonColor) || "#FFFFFF", $ = (s) => {
    const i = s.trim().toLowerCase(), l = i.startsWith("#") ? i.slice(1) : i, u = l.length === 3 ? l.split("").map((se) => `${se}${se}`).join("") : l;
    if (!/^[0-9a-f]{6}$/i.test(u)) return "#FFFFFF";
    const P = parseInt(u.slice(0, 2), 16), B = parseInt(u.slice(2, 4), 16), W = parseInt(u.slice(4, 6), 16);
    return (0.299 * P + 0.587 * B + 0.114 * W) / 255 > 0.65 ? "#111827" : "#FFFFFF";
  }, y = (() => {
    const s = String(T || "").trim().toLowerCase();
    return !s || s === "#fff" || s === "#ffffff" || s === "white" ? j : T;
  })(), I = {
    backgroundColor: y,
    color: $(y)
  }, o = (A == null ? void 0 : A.name) || "EatYum";
  E.useEffect(() => {
    O && (() => __async(null, null, function* () {
      let l = new URLSearchParams(window.location.search).get("ref");
      if (l || (l = te()), !l) try {
        const u = yield fetch("/api/current-referral");
        if (u.ok) {
          const P = yield u.json();
          P.referralCode && (l = P.referralCode, console.log("Loaded referral code from server session:", l));
        }
      } catch (u) {
        console.error("Failed to fetch referral code from server:", u);
      }
      l && l !== "invalid" && (L((u) => __spreadProps(__spreadValues({}, u), {
        referralCode: l
      })), v(l));
    }))();
  }, [O]);
  const v = (s) => __async(null, null, function* () {
    if (!s.trim()) {
      _(null);
      return;
    }
    try {
      const i = yield fetch(`/api/validate-referral/${s}`), l = yield i.json();
      i.ok && l.valid ? _({
        valid: true,
        referrerName: l.referrerName,
        message: l.message
      }) : _({
        valid: false,
        message: l.message || "Invalid referral code"
      });
    } catch (e2) {
      _({
        valid: false,
        message: "Failed to validate referral code"
      });
    }
  }), [p, N] = E.useState("mode"), [S, D] = E.useState("login"), [F, b] = E.useState(false), [G, Y] = E.useState(""), [h, L] = E.useState({
    email: "",
    phone: "",
    fullName: "",
    referralCode: ""
  }), [V, _] = E.useState(null), [X, z] = E.useState({
    registerOtp: "",
    loginOtp: ""
  }), [Z, oe] = E.useState("email"), [Q, r] = E.useState(null), {
    toast: e
  } = fe(), c = () => {
    N("mode"), D("login"), Y(""), L({
      email: "",
      phone: "",
      fullName: "",
      referralCode: ""
    }), _(null), z({
      registerOtp: "",
      loginOtp: ""
    }), r(null), b(false);
  };
  E.useEffect(() => {
    O || c();
  }, [O]);
  const a = () => __async(null, null, function* () {
    if (!G.trim()) {
      e({
        title: "Error",
        description: "Please enter your email or phone number",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const s = G.includes("@"), i = s ? G.toLowerCase() : G.trim(), l = yield fetch("/api/auth/login/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: i
        })
      }), u = yield l.json();
      l.ok ? (oe(s ? "email" : "phone"), N("otp-login"), e({
        title: "Success",
        description: `Verification code sent to ${s ? "your email" : "your phone"}`
      })) : e({
        title: "Error",
        description: u.message || "Failed to send verification code",
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Failed to send verification code",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), d = () => __async(null, null, function* () {
    if (!h.email || !h.phone || !h.fullName) {
      e({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const s = __spreadProps(__spreadValues({}, h), {
        email: h.email.toLowerCase(),
        referralCode: h.referralCode || void 0
      }), i = yield fetch("/api/auth/register/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(s)
      }), l = yield i.json();
      i.ok ? (N("otp-register"), e({
        title: "Success",
        description: l.message
      }), l.warnings && (l.warnings.email && e({
        title: "Email Warning",
        description: l.warnings.email,
        variant: "destructive"
      }), l.warnings.phone && e({
        title: "SMS Warning",
        description: l.warnings.phone,
        variant: "destructive"
      }))) : e({
        title: "Error",
        description: l.message,
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Failed to send OTP",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), w = (s, i, l) => {
    localStorage.setItem("auth-token", s), g(s, i), c(), m(), e({
      title: "Success",
      description: l
    });
  }, n = (s, i) => __async(null, null, function* () {
    b(true);
    try {
      const l = s === "register" && (h.referralCode || te()) || void 0, u = yield ie.authenticateWithGoogle(i, s, l);
      if (!u.success || !u.token || !u.user) {
        e({
          title: "Error",
          description: u.error || "Google authentication failed",
          variant: "destructive"
        });
        return;
      }
      if (u.requiresProfileCompletion) {
        D(s), r({
          token: u.token,
          user: u.user,
          missingFields: u.missingFields || []
        }), L((P) => {
          var B, W, ee;
          return __spreadProps(__spreadValues({}, P), {
            fullName: ((B = u.user) == null ? void 0 : B.fullName) || "",
            email: ((W = u.user) == null ? void 0 : W.email) || "",
            phone: ((ee = u.user) == null ? void 0 : ee.phone) || ""
          });
        }), N("google-profile"), e({
          title: "Almost Done",
          description: "Complete the missing details to finish setting up your account."
        });
        return;
      }
      w(u.token, u.user, s === "register" ? "Account created successfully with Google!" : "Login successful!");
    } finally {
      b(false);
    }
  }), x = () => __async(null, null, function* () {
    if (!Q) return;
    const s = Q.missingFields.map((i) => i === "fullName" ? "full name" : i === "phone" ? "phone number" : "email address");
    if (s.includes("full name") && !h.fullName.trim()) {
      e({
        title: "Error",
        description: "Please enter your full name",
        variant: "destructive"
      });
      return;
    }
    if (s.includes("phone number") && !h.phone.trim()) {
      e({
        title: "Error",
        description: "Please enter your phone number",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const i = yield ie.completeProfile(Q.token, {
        fullName: h.fullName.trim(),
        phone: h.phone.trim()
      });
      if (!i.success || !i.user) {
        e({
          title: "Error",
          description: i.error || "Failed to complete your profile",
          variant: "destructive"
        });
        return;
      }
      w(i.token || Q.token, i.user, S === "register" ? "Account created successfully with Google!" : "Login successful!");
    } finally {
      b(false);
    }
  }), f = () => __async(null, null, function* () {
    if (!X.loginOtp.trim()) {
      e({
        title: "Error",
        description: "Please enter verification code",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const i = G.includes("@") ? G.toLowerCase() : G.trim(), l = yield fetch("/api/auth/login/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: i,
          otp: X.loginOtp
        })
      }), u = yield l.json();
      l.ok ? (localStorage.setItem("auth-token", u.token), g(u.token, u.user), c(), m(), e({
        title: "Success",
        description: "Login successful!"
      })) : e({
        title: "Error",
        description: u.message || "Invalid verification code",
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Login failed",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), C = () => __async(null, null, function* () {
    if (!X.registerOtp.trim()) {
      e({
        title: "Error",
        description: "Please enter verification code",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const s = __spreadProps(__spreadValues({}, h), {
        email: h.email.toLowerCase()
      }), i = yield fetch("/api/auth/register/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(__spreadProps(__spreadValues({}, s), {
          otp: X.registerOtp,
          referralCode: h.referralCode || te() || void 0
        }))
      }), l = yield i.json();
      if (i.ok) {
        localStorage.setItem("auth-token", l.token);
        const u = localStorage.getItem("user-location");
        if (console.log("Saved location data:", u), u) try {
          const P = JSON.parse(u);
          console.log("Parsed location data:", P);
          const B = P.address || P.fullAddress;
          if (console.log("Address text to save:", B), B) {
            const W = yield fetch("/api/addresses", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${l.token}`
              },
              body: JSON.stringify({
                fullAddress: B,
                addressName: "Primary Address",
                latitude: P.latitude,
                longitude: P.longitude,
                isPrimary: true
              })
            });
            console.log("Address save response:", W.status, yield W.text());
          } else console.log("No address text found in location data");
        } catch (P) {
          console.log("Could not save address during registration:", P);
        }
        else console.log("No saved location found");
        try {
          he({
            email: l.user.email,
            phone: l.user.phone
          });
        } catch (P) {
          console.warn("Twitter SignUp tracking failed:", P);
        }
        g(l.token, l.user), c(), m(), e({
          title: "Success",
          description: "Account created and logged in successfully!"
        });
      } else e({
        title: "Error",
        description: l.message,
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Registration failed",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), R = () => __async(null, null, function* () {
    b(true);
    try {
      const s = yield fetch("/api/auth/register/resend-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: h.email
        })
      }), i = yield s.json();
      s.ok ? e({
        title: "Success",
        description: i.message
      }) : e({
        title: "Error",
        description: i.message,
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Failed to resend code",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), K = () => __async(null, null, function* () {
    b(true);
    try {
      const s = yield fetch("/api/auth/register/resend-phone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: h.phone
        })
      }), i = yield s.json();
      s.ok ? e({
        title: "Success",
        description: i.message
      }) : e({
        title: "Error",
        description: i.message,
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Failed to resend code",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), H = () => __async(null, null, function* () {
    if (!h.fullName.trim() || !h.email.trim()) {
      e({
        title: "Error",
        description: "Please fill in your name and email",
        variant: "destructive"
      });
      return;
    }
    b(true);
    try {
      const s = yield fetch("/api/auth/complete-phone-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: h.fullName,
          email: h.email
        })
      }), i = yield s.json();
      if (s.ok) {
        localStorage.setItem("auth-token", i.token);
        const l = localStorage.getItem("user-location");
        if (l) try {
          const u = JSON.parse(l), P = u.address || u.fullAddress;
          P && (yield fetch("/api/addresses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${i.token}`
            },
            body: JSON.stringify({
              fullAddress: P,
              addressName: "Primary Address",
              latitude: u.latitude,
              longitude: u.longitude,
              isPrimary: true
            })
          }));
        } catch (u) {
          console.log("Could not save address during phone registration:", u);
        }
        g(i.token, i.user), c(), m(), e({
          title: "Success",
          description: "Account created successfully!"
        });
      } else e({
        title: "Error",
        description: i.message,
        variant: "destructive"
      });
    } catch (e2) {
      e({
        title: "Error",
        description: "Registration completion failed",
        variant: "destructive"
      });
    } finally {
      b(false);
    }
  }), U = (s, i = "Or continue manually") => t.jsxs("div", {
    className: "space-y-4",
    children: [t.jsx(Se, {
      mode: s,
      disabled: F,
      onCredential: (l) => n(s, l),
      onError: (l) => {
        e({
          title: "Google Sign-In Unavailable",
          description: l,
          variant: "destructive"
        });
      }
    }), t.jsxs("div", {
      className: "relative",
      children: [t.jsx("div", {
        className: "absolute inset-0 flex items-center",
        children: t.jsx("span", {
          className: "w-full border-t border-gray-200"
        })
      }), t.jsx("div", {
        className: "relative flex justify-center text-xs uppercase",
        children: t.jsx("span", {
          className: "bg-white px-2 text-gray-500",
          children: i
        })
      })]
    })]
  });
  return t.jsx(Ce, {
    open: O,
    onOpenChange: (s) => !s && m(),
    children: t.jsxs(je, {
      className: "max-w-md w-[92%] sm:w-full bg-white rounded-xl overflow-y-auto max-h-[90vh] shadow-2xl p-6 [&>button]:hidden border-none",
      children: [t.jsxs("div", {
        className: "flex justify-between items-center mb-6",
        children: [t.jsxs("div", {
          className: "flex items-center",
          children: [p !== "mode" && t.jsx(q, {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              p === "identifier" || p === "register-details" ? N("mode") : p === "otp-login" ? N("identifier") : p === "otp-register" ? N("register-details") : p === "google-profile" && (r(null), N(S === "register" ? "register-details" : "identifier"));
            },
            className: "mr-2",
            children: t.jsx(le, {
              className: "w-4 h-4"
            })
          }), t.jsxs("div", {
            className: "text-center flex-1",
            children: [t.jsxs("h3", {
              className: "text-2xl font-bold text-gray-900",
              children: [p === "mode" && `Welcome to ${o}`, p === "identifier" && "Login", p === "register-details" && "Create Account", p === "otp-login" && "Enter Verification Code", p === "otp-register" && "Verify Your Details", p === "google-profile" && "Complete Your Profile"]
            }), t.jsxs("p", {
              className: "text-gray-600 mt-2",
              children: [p === "mode" && "Choose how you'd like to continue", p === "identifier" && "Enter your email address or phone number to login", p === "register-details" && "Fill in your details to create an account", p === "otp-login" && "We sent a verification code to your email or phone", p === "otp-register" && "We sent the same code to your email and phone", p === "google-profile" && "Add the remaining details needed for checkout and account setup"]
            })]
          })]
        }), t.jsx(q, {
          variant: "ghost",
          size: "sm",
          onClick: m,
          children: t.jsx(ae, {
            className: "w-5 h-5"
          })
        })]
      }), p === "mode" && t.jsxs("div", {
        className: "space-y-4",
        children: [U("login", "Or choose another option"), t.jsx(q, {
          className: "w-full h-12",
          style: I,
          onClick: () => {
            D("login"), N("identifier");
          },
          children: "Login to Existing Account"
        }), t.jsx(q, {
          variant: "outline",
          className: "w-full h-12",
          onClick: () => {
            D("register"), N("register-details");
          },
          children: "Create New Account"
        })]
      }), p === "identifier" && t.jsxs("div", {
        className: "space-y-4",
        children: [U("login"), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "identifier",
            children: "Email or Phone Number"
          }), t.jsx(J, {
            id: "identifier",
            type: "text",
            value: G,
            onChange: (s) => Y(s.target.value),
            placeholder: "Enter email or 08XXXXXXXXX",
            className: "mt-1"
          }), t.jsx("p", {
            className: "text-xs text-gray-500 mt-2",
            children: "Format: email@example.com or 08XXXXXXXXX"
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: a,
          disabled: F,
          children: F ? "Sending..." : "Send Verification Code"
        }), t.jsxs("div", {
          className: "text-center text-sm text-gray-600",
          children: ["Don't have an account?", " ", t.jsx("button", {
            onClick: () => {
              D("register"), N("register-details"), Y("");
            },
            className: "font-medium transition-colors hover:opacity-80",
            style: {
              color: j
            },
            children: "Sign up"
          })]
        })]
      }), p === "register-details" && t.jsxs("div", {
        className: "space-y-4",
        children: [U("register"), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "fullName",
            children: "Full Name"
          }), t.jsx(J, {
            id: "fullName",
            type: "text",
            value: h.fullName,
            onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
              fullName: s.target.value
            })),
            placeholder: "Enter your full name",
            className: "mt-1"
          })]
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "email",
            children: "Email Address"
          }), t.jsx(J, {
            id: "email",
            type: "email",
            value: h.email,
            onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
              email: s.target.value
            })),
            placeholder: "Enter your email address",
            className: "mt-1"
          })]
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "phone",
            children: "Phone Number"
          }), t.jsx(J, {
            id: "phone",
            type: "tel",
            value: h.phone,
            onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
              phone: s.target.value
            })),
            placeholder: "Enter your phone number",
            className: "mt-1"
          })]
        }), t.jsxs("div", {
          children: [t.jsxs(M, {
            htmlFor: "referralCode",
            className: "flex items-center gap-2",
            children: [t.jsx(re, {
              className: "h-4 w-4",
              style: {
                color: j
              }
            }), "Referral Code (Optional)"]
          }), t.jsx(J, {
            id: "referralCode",
            type: "text",
            value: h.referralCode,
            onChange: (s) => {
              const i = s.target.value.toUpperCase();
              L((l) => __spreadProps(__spreadValues({}, l), {
                referralCode: i
              })), v(i);
            },
            placeholder: "Enter referral code",
            className: "mt-1",
            maxLength: 10
          }), V && t.jsx("div", {
            className: `mt-2 p-2 rounded-md text-sm ${V.valid ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`,
            children: t.jsxs("div", {
              className: "flex items-center gap-2",
              children: [V.valid ? t.jsx(re, {
                className: "h-4 w-4"
              }) : t.jsx(ae, {
                className: "h-4 w-4"
              }), t.jsx("span", {
                children: V.valid ? `Valid! Referred by ${V.referrerName}. You'll both get ${ne((k == null ? void 0 : k.amountInNaira) || 2e3)} when you place your first order of \u20A61500+.` : V.message
              })]
            })
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: d,
          disabled: F,
          children: F ? "Sending..." : "Create Account"
        }), t.jsxs("div", {
          className: "text-center text-sm text-gray-600",
          children: ["Already have an account?", " ", t.jsx("button", {
            onClick: () => {
              D("login"), N("identifier"), L({
                fullName: "",
                email: "",
                phone: "",
                referralCode: ""
              });
            },
            className: "font-medium transition-colors hover:opacity-80",
            style: {
              color: j
            },
            children: "Login"
          })]
        })]
      }), p === "otp-login" && t.jsxs("div", {
        className: "space-y-4",
        children: [t.jsx("div", {
          className: "text-center",
          children: t.jsx("div", {
            className: "mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4",
            style: {
              backgroundColor: `${j}20`
            },
            children: Z === "email" ? t.jsx(ce, {
              className: "h-6 w-6",
              style: {
                color: j
              }
            }) : t.jsx(de, {
              className: "h-6 w-6",
              style: {
                color: j
              }
            })
          })
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "loginOtp",
            children: "Verification Code"
          }), t.jsx(J, {
            id: "loginOtp",
            type: "text",
            maxLength: 4,
            value: X.loginOtp,
            onChange: (s) => z((i) => __spreadProps(__spreadValues({}, i), {
              loginOtp: s.target.value.replace(/\D/g, "")
            })),
            placeholder: "Enter 4-digit code",
            className: "mt-1 text-center text-lg font-mono"
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: f,
          disabled: F,
          children: F ? "Verifying..." : "Verify & Login"
        }), t.jsx(q, {
          variant: "outline",
          className: "w-full",
          onClick: a,
          disabled: F,
          children: "Resend Code"
        })]
      }), p === "otp-register" && t.jsxs("div", {
        className: "space-y-4",
        children: [t.jsx("div", {
          className: "text-center",
          children: t.jsx("div", {
            className: "mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4",
            style: {
              backgroundColor: `${j}20`
            },
            children: t.jsx(ce, {
              className: "h-6 w-6",
              style: {
                color: j
              }
            })
          })
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "registerOtp",
            children: "Verification Code"
          }), t.jsx(J, {
            id: "registerOtp",
            type: "text",
            maxLength: 4,
            value: X.registerOtp,
            onChange: (s) => z((i) => __spreadProps(__spreadValues({}, i), {
              registerOtp: s.target.value.replace(/\D/g, "")
            })),
            placeholder: "Enter 4-digit code",
            className: "mt-1 text-center text-lg font-mono"
          }), t.jsx("p", {
            className: "text-sm text-gray-600 mt-2",
            children: "Enter the verification code sent to your email and/or phone"
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: C,
          disabled: F,
          children: F ? "Verifying..." : "Verify & Create Account"
        }), t.jsxs("div", {
          className: "grid grid-cols-2 gap-2",
          children: [t.jsx(q, {
            variant: "outline",
            size: "sm",
            onClick: R,
            disabled: F,
            className: "text-xs",
            children: "Resend to Email"
          }), t.jsx(q, {
            variant: "outline",
            size: "sm",
            onClick: K,
            disabled: F,
            className: "text-xs",
            children: "Resend to Phone"
          })]
        })]
      }), p === "google-profile" && Q && t.jsxs("div", {
        className: "space-y-4",
        children: [t.jsx("div", {
          className: "rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-900",
          children: "Google sign-in was successful. Add your remaining details to finish setting up your account."
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "google-fullName",
            children: "Full Name"
          }), t.jsx(J, {
            id: "google-fullName",
            type: "text",
            value: h.fullName,
            onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
              fullName: s.target.value
            })),
            placeholder: "Enter your full name",
            className: "mt-1",
            disabled: F
          })]
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "google-email",
            children: "Email Address"
          }), t.jsx(J, {
            id: "google-email",
            type: "email",
            value: h.email,
            className: "mt-1 bg-gray-50 text-gray-500",
            disabled: true
          }), t.jsx("p", {
            className: "mt-1 text-xs text-gray-500",
            children: "Verified with Google"
          })]
        }), t.jsxs("div", {
          children: [t.jsx(M, {
            htmlFor: "google-phone",
            children: "Phone Number *"
          }), t.jsx(J, {
            id: "google-phone",
            type: "tel",
            value: h.phone,
            onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
              phone: s.target.value
            })),
            placeholder: "Enter your phone number",
            className: "mt-1",
            disabled: F
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: x,
          disabled: F,
          children: F ? "Saving..." : S === "register" ? "Complete Sign-Up" : "Complete Sign-In"
        })]
      }), p === "phone-register-details" && t.jsxs("div", {
        className: "space-y-4",
        children: [t.jsxs("div", {
          className: "text-center",
          children: [t.jsx("div", {
            className: "mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4",
            children: t.jsx(de, {
              className: "h-6 w-6 text-green-600"
            })
          }), t.jsx("h3", {
            className: "text-lg font-semibold text-gray-900",
            children: "Phone Verified!"
          }), t.jsx("p", {
            className: "text-sm text-gray-600 mt-2",
            children: "Complete your account setup by providing your details"
          })]
        }), t.jsxs("div", {
          className: "space-y-4",
          children: [t.jsxs("div", {
            children: [t.jsx(M, {
              htmlFor: "fullName",
              children: "Full Name"
            }), t.jsx(J, {
              id: "fullName",
              type: "text",
              value: h.fullName,
              onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
                fullName: s.target.value
              })),
              placeholder: "Enter your full name",
              className: "mt-1"
            })]
          }), t.jsxs("div", {
            children: [t.jsx(M, {
              htmlFor: "email",
              children: "Email Address"
            }), t.jsx(J, {
              id: "email",
              type: "email",
              value: h.email,
              onChange: (s) => L((i) => __spreadProps(__spreadValues({}, i), {
                email: s.target.value
              })),
              placeholder: "Enter your email address",
              className: "mt-1"
            })]
          }), t.jsxs("div", {
            children: [t.jsx(M, {
              htmlFor: "phoneDisplay",
              children: "Phone Number"
            }), t.jsx(J, {
              id: "phoneDisplay",
              type: "tel",
              value: h.phone,
              disabled: true,
              className: "mt-1 bg-gray-50 text-gray-500"
            }), t.jsx("p", {
              className: "text-xs text-gray-500 mt-1",
              children: "Phone number verified \u2713"
            })]
          }), h.referralCode && (V == null ? void 0 : V.valid) && t.jsxs("div", {
            className: "p-3 bg-green-50 border border-green-200 rounded-md",
            children: [t.jsxs("div", {
              className: "flex items-center gap-2 text-green-700",
              children: [t.jsx(re, {
                className: "h-4 w-4"
              }), t.jsxs("span", {
                className: "text-sm font-medium",
                children: ["Referral Applied: ", V.referrerName]
              })]
            }), t.jsxs("p", {
              className: "text-xs text-green-600 mt-1",
              children: ["You'll both get ", ne((k == null ? void 0 : k.amountInNaira) || 2e3), " when you place your first order of \u20A61500+"]
            })]
          })]
        }), t.jsx(q, {
          className: "w-full",
          style: I,
          onClick: H,
          disabled: F,
          children: F ? "Creating Account..." : "Complete Registration"
        }), t.jsxs(q, {
          variant: "outline",
          className: "w-full",
          onClick: () => N("identifier"),
          disabled: F,
          children: [t.jsx(le, {
            className: "h-4 w-4 mr-2"
          }), "Back to Phone Entry"]
        })]
      })]
    })
  });
}, Oe = () => {
  const [O, m] = E.useState(null), [g, k] = E.useState(true), [A, j] = E.useState(null), T = () => {
    if (k(true), j(null), !navigator.geolocation) {
      j("Geolocation is not supported by this browser."), k(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((y) => __async(null, null, function* () {
      const {
        latitude: I,
        longitude: o
      } = y.coords;
      try {
        const v = yield fetch("/api/location/nearest-outlet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            latitude: I,
            longitude: o
          })
        }), p = yield v.json(), N = {
          latitude: I,
          longitude: o,
          selectedOutlet: v.ok ? p : null,
          distance: v.ok && (p != null && p.distance) ? p.distance : void 0
        };
        m(N), localStorage.setItem("user-location", JSON.stringify(N));
      } catch (v) {
        console.error("Failed to find nearest outlet:", v), m({
          latitude: I,
          longitude: o,
          selectedOutlet: null
        });
      } finally {
        k(false);
      }
    }), (y) => {
      j(y.message), k(false);
    }, {
      enableHighAccuracy: true,
      timeout: 1e4,
      maximumAge: 3e5
    });
  };
  return E.useEffect(() => {
    const y = localStorage.getItem("user-location");
    if (y) try {
      const v = JSON.parse(y);
      (() => __async(null, null, function* () {
        if (v.latitude && v.longitude) try {
          const N = yield fetch("/api/location/nearest-outlet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              latitude: v.latitude,
              longitude: v.longitude
            })
          });
          if (N.ok) {
            const S = yield N.json(), D = __spreadProps(__spreadValues({}, v), {
              selectedOutlet: S,
              distance: S == null ? void 0 : S.distance
            });
            m(D), localStorage.setItem("user-location", JSON.stringify(D));
          } else {
            const S = __spreadProps(__spreadValues({}, v), {
              selectedOutlet: null,
              distance: void 0
            });
            m(S), localStorage.setItem("user-location", JSON.stringify(S));
          }
        } catch (N) {
          console.error("Failed to revalidate outlet status:", N), m(v);
        }
        else m(v);
        k(false);
      }))();
    } catch (v) {
      console.error("Failed to parse saved location:", v), T();
    }
    else T();
    const I = (v) => {
      m(v.detail);
    }, o = (v) => {
      if (v.key === "user-location" && v.newValue) try {
        const p = JSON.parse(v.newValue);
        m(p);
      } catch (p) {
        console.error("Failed to parse location from storage event:", p);
      }
    };
    return window.addEventListener("location-change", I), window.addEventListener("storage", o), () => {
      window.removeEventListener("location-change", I), window.removeEventListener("storage", o);
    };
  }, []), {
    location: O,
    loading: g,
    error: A,
    getCurrentLocation: T,
    updateLocation: (y) => {
      var v, p;
      const I = (v = O == null ? void 0 : O.selectedOutlet) == null ? void 0 : v.id, o = (p = y == null ? void 0 : y.selectedOutlet) == null ? void 0 : p.id;
      m(y), localStorage.setItem("user-location", JSON.stringify(y)), I && o && I !== o && window.dispatchEvent(new CustomEvent("outlet-changed", {
        detail: {
          previousOutletId: I,
          newOutletId: o
        }
      })), window.dispatchEvent(new CustomEvent("location-change", {
        detail: y
      }));
    }
  };
}, ue = "cart-session-id", $e = () => {
  const {
    getAuthHeader: O,
    user: m
  } = Fe(), {
    location: g
  } = Oe(), k = ge(), A = {
    items: [],
    subtotal: 0,
    deliveryFee: 0,
    discount: 0,
    total: 0
  }, j = () => {
    let r = localStorage.getItem(ue);
    return r || (r = `cart-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, localStorage.setItem(ue, r)), r;
  }, T = () => {
    const r = {
      cart: o,
      sessionId: y,
      timestamp: Date.now()
    };
    localStorage.setItem("cart-auth-backup", JSON.stringify(r));
  }, $ = () => {
    const r = localStorage.getItem("cart-auth-backup");
    if (r) try {
      const e = JSON.parse(r);
      Date.now() - e.timestamp < 10 * 60 * 1e3 && (localStorage.removeItem("cart-auth-backup"), k.invalidateQueries({
        queryKey: ["/api/cart", y]
      }), window.dispatchEvent(new Event("cart-refresh")));
    } catch (e) {
      console.error("Failed to restore cart after auth:", e);
    }
  }, y = j(), I = () => {
    const r = {
      items: [],
      subtotal: 0,
      deliveryFee: 0,
      discount: 0,
      total: 0
    };
    S.mutate(r);
  };
  E.useEffect(() => {
    const r = () => {
      I();
    }, e = () => {
      k.invalidateQueries({
        queryKey: ["/api/cart", y]
      });
    };
    return window.addEventListener("outlet-changed", r), window.addEventListener("cart-refresh", e), () => {
      window.removeEventListener("outlet-changed", r), window.removeEventListener("cart-refresh", e);
    };
  }, [y, k]);
  const {
    data: o = A,
    isLoading: v,
    error: p
  } = ye({
    queryKey: ["/api/cart", y, g == null ? void 0 : g.distance],
    queryFn: () => __async(null, null, function* () {
      const r = g != null && g.distance ? `?distance=${g.distance}` : "", e = yield fetch(`/api/cart/${y}${r}`, {
        headers: O()
      });
      return e.ok ? yield e.json() : A;
    }),
    refetchOnWindowFocus: false,
    refetchInterval: false,
    staleTime: 3e4,
    gcTime: 5 * 60 * 1e3,
    retry: 2,
    retryDelay: (r) => Math.min(1e3 * 2 ** r, 1e4),
    placeholderData: (r) => r
  }), N = E.useMemo(() => {
    if (!o || !o.items) return o;
    const r = o.items || [], e = o.spinPrize;
    if (e && e.prizeType === "free_item" && e.productId) {
      const c = e.productId, a = Number(e.productPrice || 0), d = e.productName || e.name || "Free Gift";
      if (r.some((n) => n.productId === c)) {
        const n = r.find((R) => R.productId === c), x = n ? n.unitPrice : a, f = (o.discount || 0) + x, C = Math.max(0, o.subtotal - f);
        return __spreadProps(__spreadValues({}, o), {
          discount: f,
          total: C
        });
      } else {
        const n = {
          id: -999,
          productId: c,
          name: `${d} (Free Gift)`,
          imageUrl: e.imageUrl || "",
          quantity: 1,
          unitPrice: a,
          totalPrice: a,
          customizations: [],
          addons: []
        }, x = [...r, n], f = x.reduce((K, H) => K + H.totalPrice, 0), C = (o.discount || 0) + a, R = Math.max(0, f - C);
        return __spreadProps(__spreadValues({}, o), {
          items: x,
          subtotal: f,
          discount: C,
          total: R
        });
      }
    }
    return o;
  }, [o]), S = Ie({
    mutationFn: (r) => __async(null, null, function* () {
      const e = yield fetch("/api/cart/save", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, O()),
        body: JSON.stringify({
          sessionId: y,
          cartData: r
        })
      });
      if (!e.ok) throw new Error("Failed to save cart");
      return e.json();
    }),
    onSuccess: () => {
      k.invalidateQueries({
        queryKey: ["/api/cart", y]
      });
    }
  }), D = (r, e = 0, c, a) => {
    const d = r.reduce((f, C) => f + C.totalPrice, 0), w = 0;
    let n = parseFloat((e == null ? void 0 : e.toString()) || "0");
    if (a) {
      if (a.prizeType === "cart_percent_discount") n = d * ((a.rewardValue || 0) / 100);
      else if (a.prizeType === "cart_fixed_discount") n = (a.rewardValue || 0) / 100;
      else if (a.prizeType === "product_discount" && a.productId) {
        const f = r.find((C) => C.productId === a.productId);
        if (f) {
          const C = f.unitPrice;
          a.rewardValue <= 100 ? n = C * (a.rewardValue / 100) : n = Math.min(C, (a.rewardValue || 0) / 100);
        }
      }
    }
    const x = Math.max(0, d - n);
    return {
      subtotal: parseFloat(d.toString()),
      deliveryFee: parseFloat(w.toString()),
      discount: parseFloat(n.toString()),
      total: parseFloat(x.toString())
    };
  }, F = () => !o || !Array.isArray(o.items) ? false : o.items.some((r) => {
    var a, d;
    const e = ((a = r.product) == null ? void 0 : a.isGiftBox) === true || r.isGiftBox === true, c = (d = r.name) == null ? void 0 : d.toLowerCase().includes("gift box");
    return e || c;
  }), b = (r) => {
    if (!o.items || o.items.length === 0) return null;
    const e = r.orderAvailabilityMode || "both";
    if (e === "both") return null;
    const c = o.items.map((a) => a.orderAvailabilityMode || "both");
    return e === "preorder_only" && c.some((d) => d === "instant_only") ? "This item is available for pre-order only. Items in your cart are for instant ordering. Please place pre-order items as a separate scheduled order." : e === "instant_only" && c.some((d) => d === "preorder_only") ? "This item is for instant ordering only. Your cart contains pre-order items. Please place instant items as a separate order." : null;
  }, G = () => !o || !Array.isArray(o.items) ? false : o.items.some((r) => r.orderAvailabilityMode === "preorder_only"), Y = (r) => {
    var x;
    const e = b(r);
    if (e) return {
      success: false,
      error: e
    };
    const c = (o.items || []).filter((f) => f.id !== -999), a = c.findIndex((f) => f.productId === r.productId && JSON.stringify(f.customizations) === JSON.stringify(r.customizations));
    let d;
    a >= 0 ? d = c.map((f, C) => {
      if (C !== a) return f;
      const R = f.quantity + r.quantity, K = (f.addons || []).reduce((U, s) => U + s.price * s.quantity, 0), H = (f.customizations || []).reduce((U, s) => U + s.priceModifier * (s.quantity || 1), 0);
      return __spreadProps(__spreadValues({}, f), {
        quantity: R,
        totalPrice: f.unitPrice * R + H + K
      });
    }) : d = [...c, __spreadProps(__spreadValues({}, r), {
      id: Date.now()
    })];
    const w = D(d, o.promoDiscount, void 0, o.spinPrize), n = __spreadValues(__spreadProps(__spreadValues({}, o), {
      items: d
    }), w);
    try {
      ve({
        price: r.totalPrice,
        currency: "NGN",
        item_ids: [r.productId.toString()],
        item_category: "food",
        number_items: r.quantity,
        user_email: m == null ? void 0 : m.email,
        user_phone_number: m == null ? void 0 : m.phone,
        uuid_c1: y
      }), xe({
        productId: r.productId.toString(),
        productName: r.name,
        category: "food",
        price: r.unitPrice / 100,
        quantity: r.quantity,
        currency: "NGN",
        userEmail: m == null ? void 0 : m.email,
        userPhone: m == null ? void 0 : m.phone,
        userId: (x = m == null ? void 0 : m.id) == null ? void 0 : x.toString()
      }), Ne({
        id: r.productId,
        name: r.name,
        price: (r.unitPrice || 0).toString(),
        description: "",
        category: {
          name: "Food"
        }
      }, r.quantity, r.customizations);
    } catch (f) {
      console.warn("Pixel tracking error:", f);
    }
    return S.mutate(n), {
      success: true
    };
  }, h = (r, e) => {
    const a = (o.items || []).filter((n) => n.id !== -999).map((n) => {
      if (n.id !== r) return n;
      const x = (n.addons || []).reduce((C, R) => C + R.price * R.quantity, 0), f = (n.customizations || []).reduce((C, R) => C + R.priceModifier * (R.quantity || 1), 0);
      return __spreadProps(__spreadValues({}, n), {
        quantity: e,
        totalPrice: n.unitPrice * e + f + x
      });
    }).filter((n) => n.quantity > 0), d = D(a, o.promoDiscount, void 0, o.spinPrize), w = __spreadValues(__spreadProps(__spreadValues({}, o), {
      items: a
    }), d);
    S.mutate(w);
  }, L = (r) => {
    const e = (o.items || []).filter((n) => n.id !== -999), c = e.find((n) => n.id === r), a = e.filter((n) => n.id !== r), d = D(a, o.promoDiscount, void 0, o.spinPrize), w = __spreadValues(__spreadProps(__spreadValues({}, o), {
      items: a
    }), d);
    if (c) try {
      we({
        id: c.productId,
        name: c.name,
        price: (c.unitPrice || 0).toString(),
        description: "",
        category: {
          name: "Food"
        }
      }, c.quantity);
    } catch (n) {
      console.warn("GA4 remove from cart tracking error:", n);
    }
    S.mutate(w);
  }, V = (r) => __async(null, null, function* () {
    var e;
    try {
      const c = yield fetch("/api/promo-codes/validate", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, O()),
        body: JSON.stringify({
          code: r,
          orderAmount: o.subtotal,
          outletId: (e = g == null ? void 0 : g.selectedOutlet) == null ? void 0 : e.id,
          cartItems: (o.items || []).map((d) => ({
            productId: d.productId,
            quantity: d.quantity,
            unitPrice: d.unitPrice
          }))
        })
      }), a = yield c.json();
      if (c.ok) {
        const d = Math.min(a.deliveryFeeDiscount || 0, o.deliveryFee), w = o.subtotal, n = Math.max(0, o.deliveryFee - d), x = a.discountAmount || 0, f = Math.max(0, w + n - x), C = __spreadProps(__spreadValues({}, o), {
          promoCode: r,
          promoDiscount: x,
          deliveryFeeDiscount: d,
          promoType: a.type,
          promoName: a.name,
          freeItem: a.freeItem || void 0,
          subtotal: w,
          deliveryFee: n,
          discount: x,
          total: f
        });
        return S.mutate(C), {
          success: true,
          discount: x,
          deliveryFeeDiscount: d,
          freeItem: a.freeItem
        };
      } else return {
        success: false,
        error: a.message
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error"
      };
    }
  }), _ = () => {
    const r = D(o.items || [], 0, o.deliveryFee), e = __spreadValues(__spreadProps(__spreadValues({}, o), {
      promoCode: void 0,
      promoDiscount: 0,
      deliveryFeeDiscount: 0,
      promoType: void 0,
      promoName: void 0,
      freeItem: void 0
    }), r);
    S.mutate(e);
  }, X = () => __async(null, null, function* () {
    var r;
    try {
      const e = yield fetch("/api/promo-codes/auto-apply", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, O()),
        body: JSON.stringify({
          orderAmount: o.subtotal,
          outletId: (r = g == null ? void 0 : g.selectedOutlet) == null ? void 0 : r.id,
          cartItems: (o.items || []).map((a) => ({
            productId: a.productId,
            quantity: a.quantity,
            unitPrice: a.unitPrice
          }))
        })
      }), c = yield e.json();
      if (e.ok && c.bestPromo) {
        const a = c.bestPromo, d = Math.min(a.deliveryFeeDiscount || 0, o.deliveryFee), w = o.subtotal, n = Math.max(0, o.deliveryFee - d), x = a.discountAmount || 0, f = Math.max(0, w + n - x), C = __spreadProps(__spreadValues({}, o), {
          promoCode: a.code,
          promoDiscount: x,
          deliveryFeeDiscount: d,
          promoType: a.type,
          promoName: a.name,
          freeItem: a.freeItem || void 0,
          subtotal: w,
          deliveryFee: n,
          discount: x,
          total: f
        });
        return S.mutate(C), {
          success: true,
          promo: a,
          message: c.message,
          discount: x,
          deliveryFeeDiscount: d,
          freeItem: a.freeItem
        };
      } else return {
        success: false,
        error: c.message || "No applicable promo codes found"
      };
    } catch (e) {
      return console.error("Auto-apply promo code error:", e), {
        success: false,
        error: "Network error"
      };
    }
  }), z = (r) => __async(null, null, function* () {
    var e;
    if (!o.promoCode) return {
      valid: true
    };
    try {
      const c = yield fetch("/api/promo-codes/validate", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, O()),
        body: JSON.stringify({
          code: o.promoCode,
          orderAmount: o.subtotal,
          outletId: (e = g == null ? void 0 : g.selectedOutlet) == null ? void 0 : e.id,
          userId: r,
          cartItems: (o.items || []).map((d) => ({
            productId: d.productId,
            quantity: d.quantity,
            unitPrice: d.unitPrice
          }))
        })
      }), a = yield c.json();
      return c.ok ? {
        valid: true,
        data: a
      } : {
        valid: false,
        error: a.message
      };
    } catch (e2) {
      return {
        valid: false,
        error: "Network error"
      };
    }
  }), Z = () => __async(null, null, function* () {
    var r;
    if (o.promoCode) try {
      const e = yield fetch("/api/promo-codes/validate", {
        method: "POST",
        headers: __spreadValues({
          "Content-Type": "application/json"
        }, O()),
        body: JSON.stringify({
          code: o.promoCode,
          orderAmount: o.subtotal,
          outletId: (r = g == null ? void 0 : g.selectedOutlet) == null ? void 0 : r.id,
          cartItems: (o.items || []).map((a) => ({
            productId: a.productId,
            quantity: a.quantity,
            unitPrice: a.unitPrice
          }))
        })
      }), c = yield e.json();
      if (e.ok) {
        const a = Math.min(c.deliveryFeeDiscount || 0, o.deliveryFee), d = o.subtotal, w = Math.max(0, o.deliveryFee - a), n = c.discountAmount || 0, x = Math.max(0, d + w - n), f = __spreadProps(__spreadValues({}, o), {
          promoDiscount: n,
          deliveryFeeDiscount: a,
          promoType: c.type,
          promoName: c.name,
          freeItem: c.freeItem || void 0,
          discount: n,
          total: x
        });
        return S.mutate(f), {
          success: true,
          discount: n
        };
      } else return _(), {
        success: false,
        error: c.message
      };
    } catch (e) {
      return {
        success: false,
        error: "Network error"
      };
    }
  });
  return E.useEffect(() => {
    var a;
    const r = (a = o.promoCode) == null ? void 0 : a.trim();
    if (!(r != null && r.toUpperCase().startsWith("SPIN-"))) return;
    if (!(m != null && m.id)) {
      _();
      return;
    }
    let e = false;
    return (() => __async(null, null, function* () {
      var d;
      try {
        const w = yield fetch("/api/promo-codes/validate", {
          method: "POST",
          headers: __spreadValues({
            "Content-Type": "application/json"
          }, O()),
          body: JSON.stringify({
            code: r,
            orderAmount: o.subtotal,
            outletId: (d = g == null ? void 0 : g.selectedOutlet) == null ? void 0 : d.id,
            cartItems: (o.items || []).map((n) => ({
              productId: n.productId,
              quantity: n.quantity,
              unitPrice: n.unitPrice
            }))
          })
        });
        !e && !w.ok && _();
      } catch (w) {
        console.error("Spin voucher ownership validation error:", w);
      }
    }))(), () => {
      e = true;
    };
  }, [o.promoCode, m == null ? void 0 : m.id]), {
    cart: N,
    loading: v,
    addItem: Y,
    updateItemQuantity: h,
    removeItem: L,
    applyPromoCode: V,
    autoApplyPromoCode: X,
    removePromoCode: _,
    validatePromoCodeForUser: z,
    recalculatePromoCode: Z,
    applySpinReward: (r, e) => {
      if ((e == null ? void 0 : e.fulfillmentAction) === "issue_voucher_future" || (e == null ? void 0 : e.prizeType) === "raffle") return;
      const c = o.subtotal;
      let a = 0;
      if (e.prizeType === "cart_percent_discount") a = c * ((e.rewardValue || 0) / 100);
      else if (e.prizeType === "cart_fixed_discount") a = (e.rewardValue || 0) / 100;
      else if (e.prizeType === "product_discount" && e.productId) {
        const n = (o.items || []).find((x) => x.productId === e.productId);
        if (n) {
          const x = n.unitPrice;
          e.rewardValue <= 100 ? a = x * (e.rewardValue / 100) : a = Math.min(x, (e.rewardValue || 0) / 100);
        }
      }
      const d = Math.max(0, c - a), w = __spreadProps(__spreadValues({}, o), {
        promoCode: void 0,
        promoDiscount: 0,
        promoType: void 0,
        promoName: void 0,
        freeItem: void 0,
        spinRecordId: r,
        spinPrize: e,
        discount: a,
        total: d
      });
      S.mutate(w);
    },
    removeSpinReward: () => {
      const r = o.subtotal, e = __spreadProps(__spreadValues({}, o), {
        spinRecordId: void 0,
        spinPrize: void 0,
        discount: 0,
        total: r
      });
      S.mutate(e);
    },
    clearCart: I,
    hasGiftBoxItems: F,
    hasPreOrderItems: G,
    checkMixedCartConflict: b,
    itemCount: (N.items || []).reduce((r, e) => r + e.quantity, 0),
    preserveCartDuringAuth: T,
    restoreCartAfterAuth: $
  };
}, Xe = () => {
  const [O, m] = E.useState(null);
  E.useEffect(() => {
    const j = localStorage.getItem("scheduled-delivery");
    if (j) try {
      const T = JSON.parse(j);
      m(T);
    } catch (T) {
      console.error("Failed to parse scheduled delivery:", T), localStorage.removeItem("scheduled-delivery");
    }
  }, []);
  const g = (j, T, $) => {
    const y = {
      date: j,
      time: T,
      outletId: $
    };
    m(y), localStorage.setItem("scheduled-delivery", JSON.stringify(y)), window.dispatchEvent(new CustomEvent("schedule-change", {
      detail: y
    }));
  };
  return {
    scheduledDelivery: O,
    scheduleDelivery: g,
    clearScheduledDelivery: () => {
      m(null), localStorage.removeItem("scheduled-delivery"), window.dispatchEvent(new CustomEvent("schedule-change", {
        detail: null
      }));
    },
    updateScheduledDelivery: (j, T, $) => {
      g(j, T, $);
    }
  };
};
export {
  Ge as C,
  _e as O,
  $e as a,
  Xe as b,
  Oe as u
};
