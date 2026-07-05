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
import { r as n, c as R, j as e, a2 as m, E as h, H as p, I as x, F as u, T as A, B as N } from "./index-DOfu0sXg.js";
import { A as E, S as w, M as B } from "./admin-layout-DH7sAIhq.js";
import { B as M } from "./badge-BAjaXL1S.js";
import { I as _ } from "./input-FyV2XACZ.js";
import { T as O } from "./textarea-__Yhw9VH.js";
import { C as D } from "./circle-x-ve1y_gH0.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./select-ets7bQkN.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./label-B38UEnoM.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./package-CpPTLD0o.js";
import "./map-pin-ChG4yLkU.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./users-CBtjfzvJ.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
function ve() {
  const [a, j] = n.useState(null), [y, b] = n.useState(true), [S, f] = n.useState(false), [v, g] = n.useState(false), [o, C] = n.useState(""), [l, T] = n.useState("Test SMS from magoka platform"), { toast: r } = R();
  n.useEffect(() => {
    I();
  }, []);
  const d = () => localStorage.getItem("admin-token") || localStorage.getItem("adminToken"), I = () => __async(null, null, function* () {
    try {
      const s = d();
      if (!s) throw new Error("Missing admin token");
      const t = yield fetch("/api/sms/provider", { headers: { Authorization: `Bearer ${s}` } });
      if (t.ok) {
        const i = yield t.json();
        j(i);
      } else r({ title: "Error", description: "Failed to fetch SMS provider status", variant: "destructive" });
    } catch (s) {
      console.error("Error fetching provider status:", s), r({ title: "Error", description: s instanceof Error ? s.message : "Failed to fetch SMS provider status", variant: "destructive" });
    } finally {
      b(false);
    }
  }), P = (s) => __async(null, null, function* () {
    f(true);
    try {
      const t = d();
      if (!t) throw new Error("Missing admin token");
      const i = yield fetch("/api/sms/provider", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${t}` }, body: JSON.stringify({ provider: s }) });
      if (i.ok) {
        const c = yield i.json();
        j(c), r({ title: "Success", description: c.message });
      } else {
        const c = yield i.json();
        r({ title: "Error", description: c.message || "Failed to switch SMS provider", variant: "destructive" });
      }
    } catch (t) {
      console.error("Error switching provider:", t), r({ title: "Error", description: t instanceof Error ? t.message : "Failed to switch SMS provider", variant: "destructive" });
    } finally {
      f(false);
    }
  }), k = () => __async(null, null, function* () {
    if (!o.trim()) {
      r({ title: "Error", description: "Please enter a phone number", variant: "destructive" });
      return;
    }
    g(true);
    try {
      const s = d();
      if (!s) throw new Error("Missing admin token");
      const t = yield fetch("/api/sms/test", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${s}` }, body: JSON.stringify({ phoneNumber: o, message: l }) });
      if (t.ok) {
        const i = yield t.json();
        r({ title: "Success", description: i.message });
      } else {
        const i = yield t.json();
        r({ title: "Error", description: i.message || "Failed to send test SMS", variant: "destructive" });
      }
    } catch (s) {
      console.error("Error sending test SMS:", s), r({ title: "Error", description: s instanceof Error ? s.message : "Failed to send test SMS", variant: "destructive" });
    } finally {
      g(false);
    }
  });
  return y ? e.jsx(E, { currentPage: "sms-provider", children: e.jsx("div", { className: "flex items-center justify-center min-h-screen", children: e.jsx(m, { className: "h-8 w-8 animate-spin" }) }) }) : e.jsx(E, { currentPage: "sms-provider", children: e.jsxs("div", { className: "container mx-auto px-4 py-8 max-w-4xl", children: [e.jsxs("div", { className: "mb-8", children: [e.jsx("h1", { className: "text-3xl font-bold mb-2", children: "SMS Provider Management" }), e.jsx("p", { className: "text-gray-600", children: "Manage Emisri SMS for order notifications and OTP delivery" })] }), e.jsxs(h, { className: "mb-8", children: [e.jsx(p, { children: e.jsxs(x, { className: "flex items-center gap-2", children: [e.jsx(w, { className: "h-5 w-5" }), "Current Provider Status"] }) }), e.jsx(u, { children: a && e.jsx("div", { className: "space-y-4", children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium text-gray-500", children: "Active Provider" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(M, { variant: "outline", className: "text-base", children: a.currentProvider.toUpperCase() }), a.status.success ? e.jsx(A, { className: "h-4 w-4 text-green-500" }) : e.jsx(D, { className: "h-4 w-4 text-red-500" })] })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium text-gray-500", children: "Status" }), e.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [e.jsx(M, { variant: a.status.success ? "default" : "destructive", children: a.status.success ? "Connected" : "Error" }), a.status.error && e.jsx("span", { className: "text-sm text-red-600", children: a.status.error })] })] })] }) }) })] }), e.jsxs(h, { className: "mb-8", children: [e.jsx(p, { children: e.jsx(x, { children: "Emisri SMS Configuration" }) }), e.jsx(u, { children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "p-4 bg-blue-50 rounded-lg text-sm text-blue-800", children: [e.jsx("p", { className: "font-semibold mb-1", children: "Required environment variables" }), e.jsxs("ul", { className: "list-disc pl-5 space-y-1", children: [e.jsx("li", { children: e.jsx("code", { children: "SMS_PROVIDER=emisri" }) }), e.jsx("li", { children: e.jsx("code", { children: "EMISRI_BASE_URL" }) }), e.jsxs("li", { children: [e.jsx("code", { children: "EMISRI_USERNAME" }), " / ", e.jsx("code", { children: "EMISRI_PASSWORD" })] }), e.jsx("li", { children: e.jsx("code", { children: "EMISRI_ACCESS_TOKEN" }) }), e.jsx("li", { children: e.jsx("code", { children: "EMISRI_SENDER_ID" }) })] }), e.jsx("p", { className: "mt-2", children: "Brand policy: SMS is enabled only for magoka and YumBulk." })] }), e.jsxs(N, { onClick: () => P("emisri"), disabled: S, className: "w-full md:w-auto", children: [S ? e.jsx(m, { className: "h-4 w-4 animate-spin mr-2" }) : e.jsx(w, { className: "h-4 w-4 mr-2" }), "Re-run connection test"] })] }) })] }), e.jsxs(h, { children: [e.jsx(p, { children: e.jsx(x, { children: "Test SMS Delivery" }) }), e.jsx(u, { children: e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium", children: "Phone Number" }), e.jsx(_, { type: "tel", placeholder: "e.g., 08012345678 or +2348012345678", value: o, onChange: (s) => C(s.target.value), className: "mt-1" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium", children: "Test Message" }), e.jsx(O, { placeholder: "Enter test message (max 160 characters)", value: l, onChange: (s) => T(s.target.value.substring(0, 160)), className: "mt-1", rows: 3 }), e.jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [l.length, "/160 characters"] })] }), e.jsxs(N, { onClick: k, disabled: v || !o.trim(), className: "w-full md:w-auto", children: [v ? e.jsx(m, { className: "h-4 w-4 animate-spin mr-2" }) : e.jsx(B, { className: "h-4 w-4 mr-2" }), "Send Test SMS"] })] }) })] })] }) });
}
export { ve as default };
