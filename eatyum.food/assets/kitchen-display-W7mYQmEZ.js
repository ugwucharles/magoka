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
import { N as E, r as l, V as M, b as N, j as e, B as v, T as k, E as F, H as z, F as R, a5 as b } from "./index-DOfu0sXg.js";
import { u as I } from "./useMutation-CVmbONMy.js";
import { S as _, a as O, b as P, c as A, d as D } from "./select-ets7bQkN.js";
import { B as w } from "./badge-BAjaXL1S.js";
import { j as L, i as $ } from "./timezone-utils-D5P8NMTs.js";
import { c as q } from "./status-utils-BojSicDw.js";
import { C as S } from "./clock-DQ0X7PrC.js";
import { P as K } from "./package-CpPTLD0o.js";
import { U as V } from "./users-CBtjfzvJ.js";
import { T as B } from "./timer-DMHaMGok.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const H = E("Maximize", [["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }], ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }], ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }], ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const U = E("Minimize", [["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }], ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }], ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }], ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }]]);
function Q({ preparationStartTime: s, status: x }) {
  const [o, g] = l.useState(0);
  l.useEffect(() => {
    if (x !== "in_progress" || !s) {
      g(0);
      return;
    }
    const m = () => {
      const y = L().getTime(), j = $(s).getTime(), h = Math.floor((y - j) / 1e3), i = 15 * 60 - h;
      g(i);
    };
    m();
    const u = setInterval(m, 1e3);
    return () => clearInterval(u);
  }, [s, x]);
  const p = o <= 0, d = Math.max(0, o), f = Math.floor(d / 60), c = d % 60, n = () => p ? "text-red-600 bg-red-100 border-red-500" : o <= 300 ? "text-orange-600 bg-orange-100 border-orange-500" : "text-green-600 bg-green-100 border-green-500";
  return e.jsxs("div", { className: `flex items-center space-x-2 px-3 py-2 rounded-lg border-2 ${n()}`, children: [e.jsx(B, { className: "h-5 w-5" }), e.jsxs("div", { className: "flex flex-col items-start", children: [e.jsxs("span", { className: "text-xl font-bold", children: [f, ":", c.toString().padStart(2, "0")] }), p && e.jsx("span", { className: "text-xs font-semibold", children: "Ready!" })] })] });
}
function ue() {
  const [s, x] = l.useState(null), [o, g] = l.useState(true), [p, d] = l.useState(false), f = M(), { data: c = [] } = N({ queryKey: ["/api/outlets"], staleTime: 10 * 60 * 1e3 }), { data: n = [], isLoading: m } = N({ queryKey: ["/api/kitchen/orders", s], enabled: !!s, refetchInterval: 1e4, staleTime: 0 }), u = I({ mutationFn: (t) => __async(null, null, function* () {
    const i = yield fetch(`/api/kitchen/orders/${t}/ready`, { method: "POST" });
    if (!i.ok) throw new Error("Failed to mark order as ready");
    return i.json();
  }), onSuccess: () => {
    f.invalidateQueries({ queryKey: ["/api/kitchen/orders", s] }), b({ title: "Order Ready", description: "Order has been marked as ready for pickup" });
  }, onError: () => {
    b({ title: "Error", description: "Failed to mark order as ready", variant: "destructive" });
  } });
  l.useEffect(() => {
    c.length > 0 && !s && x(c[0].id);
  }, [c, s]), l.useEffect(() => {
    o && n.length > 0 && (document.body.style.border = "5px solid #F02819", setTimeout(() => {
      document.body.style.border = "none";
    }, 1e3));
  }, [n.length, o]);
  const y = (t) => {
    u.mutate(t);
  }, j = () => {
    document.fullscreenElement ? document.exitFullscreen().then(() => {
      d(false);
    }) : document.documentElement.requestFullscreen().then(() => {
      d(true);
    }).catch((t) => {
      console.error("Error attempting to enable fullscreen:", t), b({ title: "Fullscreen Error", description: "Could not enable fullscreen mode", variant: "destructive" });
    });
  };
  l.useEffect(() => {
    const t = () => {
      d(!!document.fullscreenElement);
    };
    return document.addEventListener("fullscreenchange", t), () => {
      document.removeEventListener("fullscreenchange", t);
    };
  }, []);
  const h = c.find((t) => t.id === s);
  return e.jsxs("div", { className: "min-h-screen bg-white p-6", children: [e.jsxs("div", { className: "flex items-center justify-between mb-8", children: [e.jsxs("div", { className: "flex items-center space-x-4", children: [e.jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Kitchen Display" }), h && e.jsx("div", { className: "text-2xl font-semibold text-gray-700", children: h.name })] }), e.jsxs("div", { className: "flex items-center space-x-4", children: [e.jsxs(_, { value: (s == null ? void 0 : s.toString()) || "", onValueChange: (t) => x(parseInt(t)), children: [e.jsx(O, { className: "w-64 text-lg h-12", children: e.jsx(P, { placeholder: "Select Outlet" }) }), e.jsx(A, { children: c.map((t) => e.jsx(D, { value: t.id.toString(), children: t.name }, t.id)) })] }), e.jsx(v, { onClick: j, variant: "outline", size: "lg", className: "h-12 px-4", children: p ? e.jsxs(e.Fragment, { children: [e.jsx(U, { className: "h-5 w-5 mr-2" }), "Exit Fullscreen"] }) : e.jsxs(e.Fragment, { children: [e.jsx(H, { className: "h-5 w-5 mr-2" }), "Fullscreen"] }) }), e.jsxs("div", { className: "text-lg text-gray-600 flex items-center space-x-2", children: [e.jsx(S, { className: "h-5 w-5" }), e.jsx("span", { children: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }) })] })] })] }), e.jsx("div", { className: "mb-8 text-center", children: e.jsxs("div", { className: "inline-flex items-center justify-center bg-red-100 border-4 border-red-500 rounded-xl px-8 py-6", children: [e.jsx(K, { className: "h-12 w-12 text-red-600 mr-4" }), e.jsx("span", { className: "text-6xl font-bold text-red-600", children: n.length }), e.jsx("span", { className: "text-3xl font-semibold text-red-600 ml-4", children: "Orders" })] }) }), m && e.jsx("div", { className: "text-center text-2xl text-gray-500 py-12", children: "Loading orders..." }), !s && !m && e.jsx("div", { className: "text-center text-2xl text-gray-500 py-12", children: "Please select an outlet to view orders" }), s && !m && n.length === 0 && e.jsxs("div", { className: "text-center text-2xl text-gray-500 py-12", children: [e.jsx(k, { className: "h-16 w-16 mx-auto mb-4 text-green-500" }), "All caught up! No active orders."] }), n.length > 0 && e.jsx("div", { className: "overflow-x-auto pb-4", children: e.jsx("div", { className: "flex space-x-6 min-w-max", children: n.sort((t, i) => new Date(t.createdAt).getTime() - new Date(i.createdAt).getTime()).map((t) => {
    const i = t.orderNumber.split("-").pop() || t.orderNumber, T = t.customerDisplayName || "Guest";
    return e.jsxs(F, { className: `min-w-[400px] max-w-[400px] border-4 ${t.status === "ready_for_pickup" ? "border-green-500 bg-green-50" : t.status === "accepted" ? "border-red-500 bg-red-50" : "border-yellow-500 bg-yellow-50"}`, children: [e.jsxs(z, { className: "pb-3", children: [e.jsxs("div", { className: "text-center mb-4", children: [e.jsxs("div", { className: "text-6xl font-bold text-gray-800 mb-2", children: ["#", i] }), e.jsxs("div", { className: "flex items-center justify-center space-x-2 mb-2", children: [e.jsx(S, { className: "h-5 w-5" }), e.jsx("span", { className: "text-2xl font-semibold", children: t.timeFormatted })] }), t.status === "in_progress" && e.jsx("div", { className: "flex justify-center mb-3", children: e.jsx(Q, { preparationStartTime: t.preparationStartTime, status: t.status }) }), e.jsx(w, { variant: t.status === "ready_for_pickup" ? "default" : "secondary", className: "text-lg px-4 py-2", children: q(t.status) })] }), e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(V, { className: "h-5 w-5" }), e.jsx("span", { className: "text-xl font-medium", children: T })] }), e.jsx(w, { variant: "outline", className: "text-lg px-3 py-1", children: t.orderType === "delivery" ? "DELIVERY" : "PICKUP" })] })] }), e.jsxs(R, { children: [e.jsx("div", { className: "space-y-4 mb-6", children: t.items.map((a, C) => e.jsxs("div", { className: "border-b-2 pb-3 last:border-b-0", children: [e.jsxs("div", { className: "text-3xl font-bold text-gray-900 mb-2", children: [a.quantity, "\xD7 ", a.productName] }), a.customizations && e.jsxs("div", { className: "text-lg text-blue-700 bg-blue-100 p-3 rounded-lg mt-2", children: [e.jsx("strong", { children: "Options:" }), " ", typeof a.customizations == "string" ? a.customizations : Array.isArray(a.customizations) ? a.customizations.map((r) => typeof r == "object" ? `${r.groupName}: ${r.optionName}` : r).join(", ") : "Custom options selected"] }), a.addons && e.jsxs("div", { className: "text-lg text-purple-700 bg-purple-100 p-3 rounded-lg mt-2", children: [e.jsx("strong", { children: "Extras:" }), " ", typeof a.addons == "string" ? a.addons : Array.isArray(a.addons) ? a.addons.map((r) => typeof r == "object" ? `${r.groupName}: ${r.optionName}` : r).join(", ") : "Extra items selected"] })] }, C)) }), t.status !== "ready_for_pickup" && e.jsxs(v, { onClick: () => y(t.id), disabled: u.isPending, className: "w-full text-2xl py-6 bg-green-600 hover:bg-green-700", size: "lg", children: [e.jsx(k, { className: "h-8 w-8 mr-3" }), u.isPending ? "Marking Ready..." : "Mark as Ready"] }), t.status === "ready_for_pickup" && e.jsx("div", { className: "w-full text-center text-2xl font-bold text-green-700 py-6 bg-green-200 rounded-lg", children: "\u2705 Ready for Pickup" })] })] }, t.id);
  }) }) })] });
}
export { ue as default };
