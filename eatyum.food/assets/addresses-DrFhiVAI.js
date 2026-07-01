import { c as v, V as g, b, j as e, L as d, B as a, E as t, F as l, H as w, I as A, W as x } from "./index-DOfu0sXg.js";
import { B as P } from "./badge-BAjaXL1S.js";
import { u as h } from "./useMutation-CVmbONMy.js";
import { u as S } from "./use-auth-d_ltKWkf.js";
import { A as C } from "./arrow-left-CK7JF7w9.js";
import { P as E } from "./plus-xl2HqeIg.js";
import { M as u } from "./map-pin-ChG4yLkU.js";
import { S as j } from "./star-o2YGpjzJ.js";
import { S as k } from "./square-pen-B4PbNjTL.js";
import { T as M } from "./trash-2-MFuZdLCA.js";
function K() {
  const { user: n } = S(), { toast: r } = v(), c = g(), { data: i = [], isLoading: p } = b({ queryKey: ["/api/addresses"], enabled: !!n }), m = h({ mutationFn: (s) => x("PUT", `/api/addresses/${s}/primary`), onSuccess: () => {
    c.invalidateQueries({ queryKey: ["/api/addresses"] }), r({ title: "Success", description: "Primary address updated successfully" });
  }, onError: () => {
    r({ title: "Error", description: "Failed to update primary address", variant: "destructive" });
  } }), o = h({ mutationFn: (s) => x("DELETE", `/api/addresses/${s}`), onSuccess: () => {
    c.invalidateQueries({ queryKey: ["/api/addresses"] }), r({ title: "Success", description: "Address deleted successfully" });
  }, onError: () => {
    r({ title: "Error", description: "Failed to delete address", variant: "destructive" });
  } }), y = (s) => {
    m.mutate(s);
  }, N = (s) => {
    confirm("Are you sure you want to delete this address?") && o.mutate(s);
  };
  return n ? e.jsxs("div", { className: "min-h-screen bg-gray-50", children: [e.jsx("div", { className: "bg-white border-b sticky top-0 z-10", children: e.jsx("div", { className: "max-w-md mx-auto px-4 py-3", children: e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx(d, { href: "/profile", children: e.jsx(a, { variant: "ghost", size: "sm", className: "mr-2", children: e.jsx(C, { className: "h-4 w-4" }) }) }), e.jsx("h1", { className: "text-lg font-semibold", children: "My Addresses" })] }) }) }) }), e.jsxs("div", { className: "max-w-md mx-auto p-4", children: [e.jsx(t, { className: "mb-4", children: e.jsx(l, { className: "p-4", children: e.jsxs(a, { variant: "outline", className: "w-full flex items-center justify-center", onClick: () => {
    r({ title: "Coming Soon", description: "Address management will be available soon" });
  }, children: [e.jsx(E, { className: "h-4 w-4 mr-2" }), "Add New Address"] }) }) }), p ? e.jsx("div", { className: "space-y-3", children: [...Array(3)].map((s, f) => e.jsx(t, { children: e.jsx(l, { className: "p-4", children: e.jsxs("div", { className: "animate-pulse", children: [e.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/4 mb-2" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-3/4 mb-2" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-1/2" })] }) }) }, f)) }) : (i == null ? void 0 : i.length) === 0 ? e.jsx(t, { children: e.jsxs(l, { className: "p-8 text-center", children: [e.jsx(u, { className: "h-12 w-12 mx-auto text-gray-400 mb-4" }), e.jsx("h3", { className: "font-medium text-gray-900 mb-2", children: "No addresses saved" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "Your delivery addresses will appear here after you place orders." }), e.jsx(d, { href: "/", children: e.jsx(a, { children: "Start Shopping" }) })] }) }) : e.jsx("div", { className: "space-y-3", children: i == null ? void 0 : i.map((s) => e.jsx(t, { className: "relative", children: e.jsxs(l, { className: "p-4", children: [e.jsx("div", { className: "flex items-start justify-between", children: e.jsxs("div", { className: "flex-1", children: [e.jsxs("div", { className: "flex items-center mb-2", children: [e.jsx(u, { className: "h-4 w-4 text-gray-500 mr-2" }), e.jsx("span", { className: "font-medium text-sm", children: s.addressName || "Delivery Address" }), s.isPrimary && e.jsxs(P, { variant: "secondary", className: "ml-2 text-xs", children: [e.jsx(j, { className: "h-3 w-3 mr-1" }), "Primary"] })] }), e.jsx("p", { className: "text-sm text-gray-600 leading-relaxed", children: s.fullAddress })] }) }), e.jsxs("div", { className: "flex justify-between items-center mt-4 pt-3 border-t", children: [e.jsx("div", { className: "flex space-x-2", children: !s.isPrimary && e.jsxs(a, { variant: "outline", size: "sm", onClick: () => y(s.id), disabled: m.isPending, children: [e.jsx(j, { className: "h-3 w-3 mr-1" }), "Set Primary"] }) }), e.jsxs("div", { className: "flex space-x-2", children: [e.jsx(a, { variant: "ghost", size: "sm", onClick: () => {
    r({ title: "Coming Soon", description: "Address editing will be available soon" });
  }, children: e.jsx(k, { className: "h-3 w-3" }) }), !s.isPrimary && e.jsx(a, { variant: "ghost", size: "sm", onClick: () => N(s.id), disabled: o.isPending, className: "text-red-600 hover:text-red-700", children: e.jsx(M, { className: "h-3 w-3" }) })] })] })] }) }, s.id)) }), e.jsxs(t, { className: "mt-6", children: [e.jsx(w, { children: e.jsx(A, { className: "text-sm", children: "Address Management" }) }), e.jsx(l, { className: "p-4 pt-0", children: e.jsxs("div", { className: "text-xs text-gray-600 space-y-2", children: [e.jsx("p", { children: "\u2022 Addresses are automatically saved when you place orders" }), e.jsx("p", { children: "\u2022 Your primary address will be selected by default at checkout" }), e.jsx("p", { children: "\u2022 You can have multiple addresses for different locations" })] }) })] })] })] }) : e.jsx("div", { className: "min-h-screen bg-gray-50 p-4", children: e.jsx("div", { className: "max-w-md mx-auto", children: e.jsxs("div", { className: "text-center py-12", children: [e.jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-2", children: "Please Sign In" }), e.jsx("p", { className: "text-gray-600 mb-6", children: "You need to be signed in to manage your addresses." }), e.jsx(d, { href: "/", children: e.jsx(a, { children: "Go to Homepage" }) })] }) }) });
}
export { K as default };
