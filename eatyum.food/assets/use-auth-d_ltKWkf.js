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
  r as s
} from "./index-DOfu0sXg.js";
const d = () => {
  const [n, o] = s.useState(null), [u, a] = s.useState(true);
  return s.useEffect(() => {
    const e = localStorage.getItem("auth-token") || localStorage.getItem("authToken") || localStorage.getItem("token");
    e && !localStorage.getItem("auth-token") && localStorage.setItem("auth-token", e), e ? fetch("/api/auth/me", {
      headers: {
        Authorization: `Bearer ${e}`
      }
    }).then((t) => t.json()).then((t) => {
      t.id ? o(t) : localStorage.removeItem("auth-token");
    }).catch(() => {
      localStorage.removeItem("auth-token");
    }).finally(() => {
      a(false);
    }) : a(false);
    const r = (t) => {
      const {
        user: l,
        token: c
      } = t.detail;
      l && c && (o(l), a(false));
    };
    return window.addEventListener("auth-change", r), () => {
      window.removeEventListener("auth-change", r);
    };
  }, []), {
    user: n,
    loading: u,
    setUser: o,
    login: (e, r) => __async(null, null, function* () {
      try {
        return {
          success: false,
          error: "Please use the OTP-based login through the auth modal"
        };
      } catch (e2) {
        return {
          success: false,
          error: "Network error"
        };
      }
    }),
    register: (e) => __async(null, null, function* () {
      try {
        return {
          success: false,
          error: "Please use the OTP-based registration through the auth modal"
        };
      } catch (e2) {
        return {
          success: false,
          error: "Network error"
        };
      }
    }),
    logout: () => {
      localStorage.removeItem("auth-token"), localStorage.removeItem("authToken"), localStorage.removeItem("token"), o(null);
    },
    getAuthHeader: () => {
      const e = localStorage.getItem("auth-token") || localStorage.getItem("authToken") || localStorage.getItem("token");
      return e ? {
        Authorization: `Bearer ${e}`
      } : {};
    },
    isAuthenticated: !!n
  };
};
export {
  d as u
};
