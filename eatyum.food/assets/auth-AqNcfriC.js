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
  r as g,
  j as i,
  B as j
} from "./index-DOfu0sXg.js";
const k = "yum_referral_code", _ = () => {
  try {
    const e = sessionStorage.getItem(k) || localStorage.getItem(k);
    if (console.log("getStoredReferralCode - checking storage:", e), e) {
      const t = JSON.parse(e), s = Date.now() - t.timestamp < 7 * 24 * 60 * 60 * 1e3;
      if (console.log("getStoredReferralCode - parsed data:", t, "is recent:", s), s && t.code) return console.log("getStoredReferralCode - returning code:", t.code), t.code;
      console.log("getStoredReferralCode - code too old or missing");
    } else console.log("getStoredReferralCode - no stored data found");
  } catch (e) {
    console.error("Error getting stored referral code:", e);
  }
  return null;
}, T = "https://accounts.google.com/gsi/client", f = "974905378513-de6j6qcl4rsf4bevp556kb035uf9f1f7.apps.googleusercontent.com".trim() || "", P = 1e4;
let u = null;
const G = () => new Promise((e, t) => {
  const s = Date.now(), r = () => {
    var o, a;
    if ((a = (o = window.google) == null ? void 0 : o.accounts) != null && a.id) {
      e();
      return;
    }
    if (Date.now() - s >= P) {
      u = null, t(new Error("Google Sign-In failed to initialize. Refresh and try again."));
      return;
    }
    window.setTimeout(r, 50);
  };
  r();
}), C = () => {
  var e, t;
  return typeof window > "u" ? Promise.reject(new Error("Google Sign-In is only available in the browser")) : (t = (e = window.google) == null ? void 0 : e.accounts) != null && t.id ? Promise.resolve() : u || (u = new Promise((s, r) => {
    const o = () => {
      G().then(s).catch(r);
    }, a = document.querySelector(`script[src="${T}"]`);
    if (a) {
      o(), a.addEventListener("load", o, {
        once: true
      }), a.addEventListener("error", () => {
        u = null, r(new Error("Failed to load Google Sign-In"));
      }, {
        once: true
      });
      return;
    }
    const n = document.createElement("script");
    n.src = T, n.async = true, n.defer = true, n.onload = () => o(), n.onerror = () => {
      u = null, r(new Error("Failed to load Google Sign-In"));
    }, document.head.appendChild(n);
  }), u);
};
function b({
  mode: e,
  disabled: t = false,
  onCredential: s,
  onError: r
}) {
  const o = g.useRef(null), a = g.useRef(s), n = g.useRef(r), [l, d] = g.useState("idle");
  a.current = s, n.current = r, g.useEffect(() => {
    if (!f) {
      d("missing"), o.current && (o.current.innerHTML = "");
      return;
    }
    if (t) {
      d("idle"), o.current && (o.current.innerHTML = "");
      return;
    }
    let h = false;
    return (() => __async(null, null, function* () {
      var m, y;
      try {
        d("loading"), yield C();
        const c = window.google;
        if (h || !o.current || !((m = c == null ? void 0 : c.accounts) != null && m.id)) return;
        const p = o.current, I = Math.max(280, Math.min(p.clientWidth || 320, 360));
        p.innerHTML = "", c.accounts.id.initialize({
          client_id: f,
          callback: (w) => {
            var S;
            if (!w.credential) {
              (S = n.current) == null || S.call(n, "Google authentication did not return a credential.");
              return;
            }
            a.current(w.credential);
          },
          auto_select: false,
          cancel_on_tap_outside: true
        }), c.accounts.id.renderButton(p, {
          type: "standard",
          theme: "outline",
          size: "large",
          shape: "rectangular",
          text: e === "register" ? "signup_with" : "signin_with",
          logo_alignment: "left",
          width: I
        }), d("ready");
      } catch (c) {
        h || (d("error"), (y = n.current) == null || y.call(n, c instanceof Error ? c.message : "Google Sign-In is unavailable right now."));
      }
    }))(), () => {
      h = true, o.current && (o.current.innerHTML = "");
    };
  }, [t, e]);
  const v = e === "register" ? "Sign up with Google" : "Sign in with Google", x = !f || l === "loading" || l === "error" || l === "idle";
  return i.jsxs("div", {
    className: "space-y-3",
    children: [i.jsx("div", {
      ref: o,
      className: [l === "ready" ? "" : "hidden", t ? "pointer-events-none opacity-60" : ""].filter(Boolean).join(" ")
    }), x ? i.jsxs(j, {
      type: "button",
      variant: "outline",
      className: "h-12 w-full justify-center gap-3 border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
      disabled: t,
      onClick: () => {
        if (!f) {
          r == null || r("Google Sign-In is not configured in this environment. Add VITE_GOOGLE_CLIENT_ID and restart the Yum app.");
          return;
        }
        if (l === "loading") {
          r == null || r("Google Sign-In is still loading. Try again in a moment.");
          return;
        }
        r == null || r("Google Sign-In failed to load. Check your client ID and network access, then refresh.");
      },
      children: [i.jsxs("svg", {
        "aria-hidden": "true",
        className: "h-5 w-5",
        viewBox: "0 0 24 24",
        children: [i.jsx("path", {
          fill: "#EA4335",
          d: "M12 10.2v3.9h5.5c-.2 1.3-1.5 3.9-5.5 3.9-3.3 0-6-2.7-6-6s2.7-6 6-6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.4 12 2.4A9.6 9.6 0 0 0 2.4 12 9.6 9.6 0 0 0 12 21.6c5.5 0 9.1-3.9 9.1-9.4 0-.6-.1-1.1-.1-1.5H12Z"
        }), i.jsx("path", {
          fill: "#4285F4",
          d: "M3.5 7.4 6.7 9.8C7.6 7.6 9.6 6 12 6c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.4 12 2.4c-3.7 0-6.9 2.1-8.5 5Z"
        }), i.jsx("path", {
          fill: "#FBBC05",
          d: "M2.4 12c0 1.5.4 2.9 1.1 4.2l3.7-2.9c-.2-.4-.3-.8-.3-1.3s.1-.9.3-1.3L3.5 7.4A9.5 9.5 0 0 0 2.4 12Z"
        }), i.jsx("path", {
          fill: "#34A853",
          d: "M12 21.6c2.6 0 4.8-.9 6.4-2.4l-3.1-2.4c-.8.5-1.9.9-3.3.9-4 0-5.2-2.7-5.5-3.9l-3.7 2.8c1.6 3 4.7 5 8.2 5Z"
        })]
      }), i.jsx("span", {
        children: v
      })]
    }) : null, l === "missing" ? i.jsx("div", {
      className: "text-center text-xs text-amber-700",
      children: "Google Sign-In is not configured in this environment yet."
    }) : null, l === "loading" ? i.jsx("div", {
      className: "text-center text-xs text-gray-500",
      children: "Loading Google Sign-In..."
    }) : null]
  });
}
const O = () => {
  const e = localStorage.getItem("auth-token") || localStorage.getItem("authToken") || localStorage.getItem("token");
  return e && !localStorage.getItem("auth-token") && localStorage.setItem("auth-token", e), e;
}, L = {
  sendLoginOTP: (e) => __async(null, null, function* () {
    try {
      const t = yield fetch("/api/auth/login/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: e
        })
      }), s = yield t.json();
      return t.ok ? {
        success: true,
        message: s.message,
        method: s.method,
        identifier: s.identifier,
        token: s.token,
        user: s.user
      } : {
        success: false,
        error: s.message || "Failed to send OTP"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  verifyLoginOTP: (e, t) => __async(null, null, function* () {
    try {
      const s = yield fetch("/api/auth/login/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          emailOrPhone: e,
          otp: t
        })
      }), r = yield s.json();
      return s.ok ? {
        success: true,
        token: r.token,
        user: r.user
      } : {
        success: false,
        error: r.message || "OTP verification failed"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  sendRegistrationOTP: (e, t, s) => __async(null, null, function* () {
    try {
      const r = yield fetch("/api/auth/register/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: e,
          phone: t,
          fullName: s
        })
      }), o = yield r.json();
      return r.ok ? {
        success: true,
        message: o.message,
        identifier: o.email,
        token: o.token,
        user: o.user
      } : {
        success: false,
        error: o.message || "Failed to send OTP"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  verifyRegistrationOTP: (e, t, s, r) => __async(null, null, function* () {
    try {
      const o = yield fetch("/api/auth/register/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: e,
          phone: t,
          fullName: s,
          otp: r
        })
      }), a = yield o.json();
      return o.ok ? {
        success: true,
        token: a.token,
        user: a.user
      } : {
        success: false,
        error: a.message || "OTP verification failed"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  authenticateWithGoogle: (e, t, s) => __async(null, null, function* () {
    try {
      const r = yield fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          credential: e,
          mode: t,
          referralCode: s
        })
      }), o = yield r.json();
      return r.ok ? {
        success: true,
        token: o.token,
        user: o.user,
        isNewUser: o.isNewUser,
        requiresProfileCompletion: o.requiresProfileCompletion,
        missingFields: o.missingFields
      } : {
        success: false,
        error: o.message || "Google authentication failed"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  completeProfile: (e, t) => __async(null, null, function* () {
    try {
      const s = yield fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${e}`
        },
        body: JSON.stringify(t)
      }), r = yield s.json();
      return s.ok ? {
        success: true,
        user: r,
        token: r.token
      } : {
        success: false,
        error: r.message || "Failed to update profile"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  checkUser: (e) => __async(null, null, function* () {
    try {
      const t = yield fetch("/api/auth/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          identifier: e
        })
      }), s = yield t.json();
      return t.ok ? {
        exists: s.exists,
        user: s.user
      } : {
        exists: false
      };
    } catch (e2) {
      return {
        exists: false
      };
    }
  }),
  login: (e, t) => __async(null, null, function* () {
    return {
      success: false,
      error: "Please use the new OTP-based login"
    };
  }),
  register: (e) => __async(null, null, function* () {
    return {
      success: false,
      error: "Please use the new OTP-based registration"
    };
  }),
  verify: (e) => __async(null, null, function* () {
    try {
      const t = yield fetch("/api/auth/me", {
        headers: {
          Authorization: `Bearer ${e}`
        }
      }), s = yield t.json();
      return t.ok ? {
        success: true,
        user: s
      } : {
        success: false,
        error: s.message || "Token verification failed"
      };
    } catch (e2) {
      return {
        success: false,
        error: "Network error occurred"
      };
    }
  }),
  logout: () => {
    localStorage.removeItem("auth-token"), localStorage.removeItem("authToken"), localStorage.removeItem("token");
  },
  getStoredToken: () => O(),
  storeToken: (e) => {
    localStorage.setItem("auth-token", e);
  },
  getAuthHeaders: () => {
    const e = O();
    return e ? {
      Authorization: `Bearer ${e}`
    } : {};
  }
};
export {
  b as G,
  L as a,
  _ as g
};
