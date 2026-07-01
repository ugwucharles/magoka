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
import { c as A, r as C, b as T, j as e, E as D, H as O, I as P, Z as R, F as _, B as o, W as E, a6 as f } from "./index-DOfu0sXg.js";
import { u as S } from "./useMutation-CVmbONMy.js";
import { T as q, a as F, b as y, c as a, d as k, e as t } from "./table-CzdeB6gz.js";
import { B as x } from "./badge-BAjaXL1S.js";
import { D as B, e as H, a as I, b as M, c as z, d as G } from "./dialog-BUvIuveX.js";
import { A as h } from "./admin-layout-DH7sAIhq.js";
import { g as Q } from "./status-utils-BojSicDw.js";
import { f as K } from "./timezone-utils-D5P8NMTs.js";
import { A as c } from "./archive-D-BZa83x.js";
import { M as L } from "./map-pin-ChG4yLkU.js";
import { C as W } from "./calendar-DfgMOSD7.js";
import { E as $ } from "./eye-DhxFEmT5.js";
import { R as v } from "./rotate-ccw-DOK3eGbZ.js";
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
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
const p = (d) => new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(d);
function He() {
  const { toast: d } = A(), [r, j] = C.useState(null), { data: n, isLoading: b, error: u } = T({ queryKey: ["/api/admin/orders/archived"], staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), l = S({ mutationFn: (s) => __async(null, null, function* () {
    return E(`/api/admin/orders/archived/${s}/restore`, "POST");
  }), onSuccess: () => {
    f.invalidateQueries({ queryKey: ["/api/admin/orders/archived"] }), f.invalidateQueries({ queryKey: ["/api/admin/orders"] }), d({ title: "Success", description: "Order restored successfully" }), j(null);
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to restore order", variant: "destructive" });
  } }), m = (s) => K(s), g = (s) => {
    const i = { pending: "bg-yellow-100 text-yellow-800", confirmed: "bg-green-100 text-green-800", accepted: "bg-blue-100 text-blue-800", in_progress: "bg-purple-100 text-purple-800", ready_for_pickup: "bg-green-100 text-green-800", out_for_delivery: "bg-orange-100 text-orange-800", delivered: "bg-green-100 text-green-800", cancelled_by_customer: "bg-red-100 text-red-800", cancelled_by_outlet: "bg-red-100 text-red-800", failed: "bg-red-100 text-red-800", refunded: "bg-gray-100 text-gray-800" };
    return e.jsx(x, { className: `${i[s] || "bg-gray-100 text-gray-800"}`, children: Q(s) });
  }, N = (s) => {
    if (!s) return "Unknown";
    switch (s) {
      case "admin_delete":
        return "Deleted by Admin";
      case "auto_cleanup":
        return "Automatic Cleanup";
      case "data_migration":
        return "Data Migration";
      default:
        return s;
    }
  };
  return b ? e.jsx(h, { currentPage: "archived-orders", children: e.jsx("div", { className: "flex items-center justify-center py-12", children: e.jsxs("div", { className: "text-center", children: [e.jsx(c, { className: "mx-auto h-12 w-12 text-gray-400 mb-4" }), e.jsx("p", { className: "text-gray-500", children: "Loading archived orders..." })] }) }) }) : u ? e.jsx(h, { currentPage: "archived-orders", children: e.jsx("div", { className: "flex items-center justify-center py-12", children: e.jsxs("div", { className: "text-center", children: [e.jsx(c, { className: "mx-auto h-12 w-12 text-red-400 mb-4" }), e.jsx("p", { className: "text-red-500", children: "Error loading archived orders" }), e.jsx("p", { className: "text-sm text-gray-500 mt-2", children: u.message })] }) }) }) : e.jsx(h, { currentPage: "archived-orders", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-3xl font-bold", children: "Archived Orders" }), e.jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "View and manage archived orders that have been soft-deleted" })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsxs(x, { variant: "secondary", className: "flex items-center gap-1", children: [e.jsx(c, { className: "h-3 w-3" }), (n == null ? void 0 : n.length) || 0, " Archived"] }) })] }), e.jsxs(D, { children: [e.jsxs(O, { children: [e.jsxs(P, { className: "flex items-center gap-2", children: [e.jsx(c, { className: "h-5 w-5" }), "Archived Orders History"] }), e.jsx(R, { children: "Orders that have been archived instead of permanently deleted. You can restore these orders if needed." })] }), e.jsx(_, { children: !n || n.length === 0 ? e.jsxs("div", { className: "text-center py-12", children: [e.jsx(c, { className: "mx-auto h-16 w-16 text-gray-300 mb-4" }), e.jsx("h3", { className: "text-lg font-semibold text-gray-600", children: "No Archived Orders" }), e.jsx("p", { className: "text-gray-500 mt-2", children: "When orders are deleted, they'll appear here as archived records." })] }) : e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(q, { children: [e.jsx(F, { children: e.jsxs(y, { children: [e.jsx(a, { children: "Order #" }), e.jsx(a, { children: "Customer" }), e.jsx(a, { children: "Outlet" }), e.jsx(a, { children: "Status" }), e.jsx(a, { children: "Total" }), e.jsx(a, { children: "Type" }), e.jsx(a, { children: "Archived" }), e.jsx(a, { children: "Reason" }), e.jsx(a, { children: "Actions" })] }) }), e.jsx(k, { children: n.map((s) => e.jsxs(y, { children: [e.jsx(t, { className: "font-medium", children: s.orderNumber }), e.jsx(t, { children: e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { className: "font-medium", children: s.customerName || "Guest" }), s.customerPhone && e.jsx("span", { className: "text-xs text-gray-500", children: s.customerPhone })] }) }), e.jsx(t, { children: e.jsxs("div", { className: "flex items-center gap-1", children: [e.jsx(L, { className: "h-3 w-3 text-gray-400" }), e.jsx("span", { className: "text-sm", children: s.outletName })] }) }), e.jsx(t, { children: g(s.status) }), e.jsx(t, { className: "font-semibold", children: p(s.total) }), e.jsx(t, { children: e.jsx(x, { variant: s.orderType === "delivery" ? "default" : "secondary", children: s.orderType }) }), e.jsx(t, { children: e.jsxs("div", { className: "flex items-center gap-1", children: [e.jsx(W, { className: "h-3 w-3 text-gray-400" }), e.jsx("span", { className: "text-sm", children: m(s.archivedAt) })] }) }), e.jsx(t, { children: e.jsx("span", { className: "text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded", children: N(s.archiveReason) }) }), e.jsx(t, { children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(B, { children: [e.jsx(H, { asChild: true, children: e.jsx(o, { variant: "ghost", size: "sm", onClick: () => j(s), children: e.jsx($, { className: "h-4 w-4" }) }) }), e.jsxs(I, { className: "max-w-2xl", children: [e.jsxs(M, { children: [e.jsxs(z, { className: "flex items-center gap-2", children: [e.jsx(c, { className: "h-5 w-5" }), "Archived Order Details"] }), e.jsxs(G, { children: ["Order #", r == null ? void 0 : r.orderNumber, " - Archived on ", r && m(r.archivedAt)] })] }), r && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-2", children: "Customer Information" }), e.jsxs("div", { className: "space-y-1 text-sm", children: [e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Name:" }), " ", r.customerName || "Guest"] }), r.customerEmail && e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Email:" }), " ", r.customerEmail] }), r.customerPhone && e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Phone:" }), " ", r.customerPhone] })] })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-2", children: "Order Information" }), e.jsxs("div", { className: "space-y-1 text-sm", children: [e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Status:" }), " ", g(r.status)] }), e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Type:" }), " ", r.orderType] }), e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Total:" }), " ", p(r.total)] }), e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Outlet:" }), " ", r.outletName] })] })] })] }), e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-2", children: "Archive Information" }), e.jsxs("div", { className: "space-y-1 text-sm", children: [e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Archived:" }), " ", m(r.archivedAt)] }), e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Reason:" }), " ", N(r.archiveReason)] }), e.jsxs("p", { children: [e.jsx("span", { className: "font-medium", children: "Original Order Date:" }), " ", m(r.originalCreatedAt)] })] })] }), r.items && r.items.length > 0 && e.jsxs("div", { children: [e.jsx("h4", { className: "font-semibold mb-2", children: "Order Items" }), e.jsx("div", { className: "space-y-2", children: r.items.map((i, w) => e.jsxs("div", { className: "flex justify-between items-start p-3 bg-gray-50 rounded", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-medium", children: i.productName }), e.jsxs("p", { className: "text-sm text-gray-600", children: ["Qty: ", i.quantity] }), i.customizations && e.jsx("p", { className: "text-xs text-gray-500", children: i.customizations })] }), e.jsx("p", { className: "font-semibold", children: p(i.price * i.quantity) })] }, w)) })] }), e.jsx("div", { className: "flex justify-end gap-2 pt-4 border-t", children: e.jsxs(o, { onClick: () => l.mutate(r.id), disabled: l.isPending, className: "bg-green-600 hover:bg-green-700", children: [e.jsx(v, { className: "h-4 w-4 mr-2" }), l.isPending ? "Restoring..." : "Restore Order"] }) })] })] })] }), e.jsx(o, { variant: "ghost", size: "sm", onClick: () => l.mutate(s.id), disabled: l.isPending, className: "text-green-600 hover:text-green-700", children: e.jsx(v, { className: "h-4 w-4" }) })] }) })] }, s.id)) })] }) }) })] })] }) });
}
export { He as default };
