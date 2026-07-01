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
import { N, r as h, c as k, j as e, E as n, H as r, I as l, Z as o, F as c, B as g, T as w } from "./index-DOfu0sXg.js";
import { B as C } from "./badge-BAjaXL1S.js";
import { F as x } from "./file-upload-BnguOWgd.js";
import { U as b } from "./upload-Bxi1uLXD.js";
import { C as U } from "./circle-x-ve1y_gH0.js";
import "./input-FyV2XACZ.js";
import "./label-B38UEnoM.js";
import "./image-Cm0cVFFU.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const I = N("Loader", [["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }], ["path", { d: "M18 12h4", key: "wj9ykh" }], ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }], ["path", { d: "M12 18v4", key: "jadmvz" }], ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }], ["path", { d: "M2 12h4", key: "j09sii" }], ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }]]);
function A() {
  const [a, m] = h.useState(null), [u, j] = h.useState(false), [f, i] = h.useState([]), { toast: d } = k(), y = () => __async(null, null, function* () {
    j(true);
    try {
      const s = localStorage.getItem("adminToken"), p = yield (yield fetch("/api/admin/r2-test", { method: "GET", headers: { Authorization: `Bearer ${s}` } })).json();
      m(p), p.success ? d({ title: "R2 Connection Test", description: "Cloudflare R2 connection successful!" }) : d({ title: "R2 Connection Test", description: `R2 connection failed: ${p.error}`, variant: "destructive" });
    } catch (s) {
      const t = { success: false, error: s instanceof Error ? s.message : "Network error" };
      m(t), d({ title: "R2 Connection Test", description: "Failed to test R2 connection", variant: "destructive" });
    } finally {
      j(false);
    }
  }), v = (s) => {
    i((t) => [...t, { type: "products", url: s }]);
  }, R = (s) => {
    i((t) => [...t, { type: "banners", url: s }]);
  }, T = (s) => {
    i((t) => [...t, { type: "popups", url: s }]);
  };
  return e.jsxs("div", { className: "max-w-4xl mx-auto p-6 space-y-6", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold", children: "Cloudflare R2 Upload Test" }), e.jsx("p", { className: "text-gray-600 mt-2", children: "Test the R2 connection and upload functionality for different folder types" })] }), e.jsxs(n, { children: [e.jsxs(r, { children: [e.jsxs(l, { className: "flex items-center gap-2", children: [e.jsx(b, { className: "h-5 w-5" }), "R2 Connection Test"] }), e.jsx(o, { children: "Test the connection to Cloudflare R2 storage" })] }), e.jsxs(c, { className: "space-y-4", children: [e.jsx(g, { onClick: y, disabled: u, className: "w-full", children: u ? e.jsxs(e.Fragment, { children: [e.jsx(I, { className: "h-4 w-4 mr-2 animate-spin" }), "Testing Connection..."] }) : "Test R2 Connection" }), a && e.jsxs("div", { className: "flex items-center gap-2 p-3 rounded-lg border", children: [a.success ? e.jsx(w, { className: "h-5 w-5 text-green-500" }) : e.jsx(U, { className: "h-5 w-5 text-red-500" }), e.jsxs("div", { children: [e.jsx(C, { variant: a.success ? "default" : "destructive", children: a.success ? "Success" : "Failed" }), a.error && e.jsx("p", { className: "text-sm text-gray-600 mt-1", children: a.error })] })] })] })] }), e.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [e.jsxs(n, { children: [e.jsxs(r, { children: [e.jsx(l, { children: "Product Images" }), e.jsx(o, { children: "Test product image uploads" })] }), e.jsx(c, { children: e.jsx(x, { value: "", onChange: v, label: "Upload Product Image", folder: "products" }) })] }), e.jsxs(n, { children: [e.jsxs(r, { children: [e.jsx(l, { children: "Banner Images" }), e.jsx(o, { children: "Test banner image uploads" })] }), e.jsx(c, { children: e.jsx(x, { value: "", onChange: R, label: "Upload Banner Image", folder: "banners" }) })] }), e.jsxs(n, { children: [e.jsxs(r, { children: [e.jsx(l, { children: "Popup Images" }), e.jsx(o, { children: "Test popup image uploads" })] }), e.jsx(c, { children: e.jsx(x, { value: "", onChange: T, label: "Upload Popup Image", folder: "popups" }) })] })] }), f.length > 0 && e.jsxs(n, { children: [e.jsxs(r, { children: [e.jsx(l, { children: "Upload Results" }), e.jsx(o, { children: "Recently uploaded files" })] }), e.jsx(c, { children: e.jsx("div", { className: "space-y-3", children: f.map((s, t) => e.jsxs("div", { className: "flex items-center gap-3 p-3 border rounded-lg", children: [e.jsx(C, { variant: "outline", children: s.type }), e.jsx("div", { className: "flex-1", children: e.jsx("p", { className: "text-sm font-medium truncate", children: s.url }) }), e.jsx(g, { variant: "outline", size: "sm", onClick: () => window.open(s.url, "_blank"), children: "View" })] }, t)) }) })] })] });
}
export { A as default };
