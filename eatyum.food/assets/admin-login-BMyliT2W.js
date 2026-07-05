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
import { r as t, c as w, u as j, Y as v, j as e, E as N, H as S, I as b, Z as E, F as k, B as L, W as C } from "./index-DOfu0sXg.js";
import { I as m } from "./input-FyV2XACZ.js";
import { L as u } from "./label-B38UEnoM.js";
import { E as I } from "./eye-off-IC2nhfIc.js";
import { E as P } from "./eye-DhxFEmT5.js";
function R() {
  const [o, h] = t.useState(""), [l, p] = t.useState(""), [a, x] = t.useState(false), [d, c] = t.useState(false), { toast: r } = w(), [, f] = j(), { refreshAdmin: g } = v(), y = (s) => __async(null, null, function* () {
    s.preventDefault(), c(true);
    try {
      const i = yield C("POST", "/api/admin/auth/login", { email: o, password: l }), n = yield i.json();
      i.ok ? (localStorage.setItem("adminToken", n.token), localStorage.setItem("adminRefreshToken", n.refreshToken), yield g(), r({ title: "Login successful", description: "Welcome to the admin panel" }), f("/control")) : r({ title: "Login failed", description: n.message || "Invalid credentials", variant: "destructive" });
    } catch (e2) {
      r({ title: "Login failed", description: "Network error. Please try again.", variant: "destructive" });
    } finally {
      c(false);
    }
  });
  return e.jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900", children: e.jsxs(N, { className: "w-full max-w-md", children: [e.jsxs(S, { className: "space-y-1", children: [e.jsx(b, { className: "text-2xl font-bold text-center", children: "magoka Admin Panel" }), e.jsx(E, { className: "text-center", children: "Sign in to access the admin dashboard" })] }), e.jsx(k, { children: e.jsxs("form", { onSubmit: y, className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(u, { htmlFor: "email", children: "Email" }), e.jsx(m, { id: "email", type: "email", placeholder: "admin@magoka.food", value: o, onChange: (s) => h(s.target.value), required: true })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(u, { htmlFor: "password", children: "Password" }), e.jsxs("div", { className: "relative", children: [e.jsx(m, { id: "password", type: a ? "text" : "password", placeholder: "Enter your password", value: l, onChange: (s) => p(s.target.value), required: true }), e.jsx("button", { type: "button", onClick: () => x(!a), className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200", "aria-label": a ? "Hide password" : "Show password", children: a ? e.jsx(I, { className: "w-4 h-4" }) : e.jsx(P, { className: "w-4 h-4" }) })] })] }), e.jsx(L, { type: "submit", className: "w-full", disabled: d, children: d ? "Signing in..." : "Sign In" })] }) })] }) });
}
export { R as default };
