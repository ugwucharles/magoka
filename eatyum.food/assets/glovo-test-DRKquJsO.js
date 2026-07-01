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
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as n, j as s, E as f, H as y, I as w, Z as A, F as C, B as d, a2 as o, T as c, W as l } from "./index-DOfu0sXg.js";
import { u as m } from "./useMutation-CVmbONMy.js";
import { A as T } from "./admin-layout-DH7sAIhq.js";
import { C as x } from "./circle-x-ve1y_gH0.js";
import "./badge-BAjaXL1S.js";
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
function ds() {
  const [i, j] = n.useState(null), [t, b] = n.useState(null), [r, v] = n.useState(null), [a, N] = n.useState(null), h = m({ mutationFn: () => __async(null, null, function* () {
    return (yield l("POST", "/api/admin/glovo/test-auth")).json();
  }), onSuccess: (e) => {
    j({ success: true, data: e });
  }, onError: (e) => {
    j({ success: false, error: e.message });
  } }), u = m({ mutationFn: () => __async(null, null, function* () {
    return (yield l("GET", "/api/admin/glovo/test-list-addresses")).json();
  }), onSuccess: (e) => {
    b({ success: true, data: e });
  }, onError: (e) => {
    b({ success: false, error: e.message });
  } }), p = m({ mutationFn: () => __async(null, null, function* () {
    return (yield l("POST", "/api/admin/glovo/test-barcelona")).json();
  }), onSuccess: (e) => {
    v({ success: true, data: e });
  }, onError: (e) => {
    v({ success: false, error: e.message });
  } }), g = m({ mutationFn: () => __async(null, null, function* () {
    return (yield l("POST", "/api/admin/glovo/test-lagos")).json();
  }), onSuccess: (e) => {
    N({ success: true, data: e });
  }, onError: (e) => {
    N({ success: false, error: e.message });
  } });
  return s.jsx(T, { currentPage: "settings", children: s.jsx("div", { className: "container mx-auto py-8 max-w-4xl", children: s.jsxs(f, { children: [s.jsxs(y, { children: [s.jsx(w, { children: "Glovo API Test" }), s.jsx(A, { children: "Test Glovo address creation with Barcelona coordinates (from Glovo documentation)" })] }), s.jsxs(C, { className: "space-y-4", children: [s.jsxs("div", { className: "space-y-3", children: [s.jsx("h3", { className: "font-medium text-gray-900", children: "Diagnostic Tests:" }), s.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h4", { className: "font-medium", children: "1. Test Authentication" }), s.jsx("p", { className: "text-sm text-gray-600", children: "Verify API credentials are valid" })] }), s.jsxs(d, { onClick: () => h.mutate(), disabled: h.isPending, size: "sm", "data-testid": "button-test-auth", children: [h.isPending && s.jsx(o, { className: "mr-2 h-4 w-4 animate-spin" }), "Test"] })] }), i && s.jsx("div", { className: `p-3 rounded border text-sm ${i.success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`, children: i.success ? s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(c, { className: "h-4 w-4" }), s.jsx("span", { children: i.data.message })] }) : s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(x, { className: "h-4 w-4" }), s.jsx("span", { children: i.error })] }) })] }), s.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h4", { className: "font-medium", children: "2. List Address Book" }), s.jsx("p", { className: "text-sm text-gray-600", children: "Read existing addresses (if any)" })] }), s.jsxs(d, { onClick: () => u.mutate(), disabled: u.isPending, size: "sm", "data-testid": "button-test-list", children: [u.isPending && s.jsx(o, { className: "mr-2 h-4 w-4 animate-spin" }), "Test"] })] }), t && s.jsx("div", { className: `p-3 rounded border text-sm ${t.success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`, children: t.success ? s.jsxs("div", { children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [s.jsx(c, { className: "h-4 w-4" }), s.jsx("span", { children: t.data.message })] }), t.data.addresses && t.data.addresses.length > 0 && s.jsx("div", { className: "mt-2 bg-white p-2 rounded border border-green-300 font-mono text-xs max-h-32 overflow-auto", children: JSON.stringify(t.data.addresses, null, 2) })] }) : s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(x, { className: "h-4 w-4" }), s.jsx("span", { children: t.error })] }) })] }), s.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h4", { className: "font-medium", children: "3. Create Barcelona Address" }), s.jsx("p", { className: "text-sm text-gray-600", children: "Lat: 41.39637, Lng: 2.17939" })] }), s.jsxs(d, { onClick: () => p.mutate(), disabled: p.isPending, size: "sm", "data-testid": "button-test-barcelona", children: [p.isPending && s.jsx(o, { className: "mr-2 h-4 w-4 animate-spin" }), "Test"] })] }), r && s.jsx("div", { className: `p-3 rounded border text-sm ${r.success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`, children: r.success ? s.jsxs("div", { children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [s.jsx(c, { className: "h-4 w-4" }), s.jsx("span", { children: r.data.message })] }), s.jsxs("div", { className: "bg-white p-2 rounded border border-green-300 font-mono text-xs", children: ["Address ID: ", r.data.addressId] })] }) : s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(x, { className: "h-4 w-4" }), s.jsx("span", { children: r.error })] }) })] }), s.jsxs("div", { className: "border rounded-lg p-4 space-y-3", children: [s.jsxs("div", { className: "flex items-center justify-between", children: [s.jsxs("div", { children: [s.jsx("h4", { className: "font-medium", children: "4. Create Lagos Address" }), s.jsx("p", { className: "text-sm text-gray-600", children: "Lat: 6.501489, Lng: 3.376399" })] }), s.jsxs(d, { onClick: () => g.mutate(), disabled: g.isPending, size: "sm", "data-testid": "button-test-lagos", children: [g.isPending && s.jsx(o, { className: "mr-2 h-4 w-4 animate-spin" }), "Test"] })] }), a && s.jsx("div", { className: `p-3 rounded border text-sm ${a.success ? "bg-green-50 border-green-200 text-green-700" : "bg-red-50 border-red-200 text-red-700"}`, children: a.success ? s.jsxs("div", { children: [s.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [s.jsx(c, { className: "h-4 w-4" }), s.jsx("span", { children: a.data.message })] }), s.jsxs("div", { className: "bg-white p-2 rounded border border-green-300 font-mono text-xs", children: ["Address ID: ", a.data.addressId] })] }) : s.jsxs("div", { className: "flex items-center gap-2", children: [s.jsx(x, { className: "h-4 w-4" }), s.jsx("span", { children: a.error })] }) })] })] }), s.jsxs("div", { className: "bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm", children: [s.jsx("h3", { className: "font-medium text-gray-900 mb-2", children: "What this test does:" }), s.jsxs("ol", { className: "text-gray-600 space-y-1 list-decimal list-inside", children: [s.jsx("li", { children: "Authenticates with Glovo API using OAuth 2.0" }), s.jsx("li", { children: "Attempts to create an address in Glovo's Address Book" }), s.jsx("li", { children: "Uses Barcelona coordinates (from Glovo's official documentation)" }), s.jsx("li", { children: "Tests if Glovo's staging environment accepts the address creation" })] }), s.jsxs("p", { className: "mt-3 text-gray-600", children: [s.jsx("strong", { children: "Expected outcome:" }), ` If successful, this confirms the Glovo integration code is working correctly. If it fails with "no available server", it means the staging environment doesn't support this geographic area.`] })] })] })] }) }) });
}
export { ds as default };
