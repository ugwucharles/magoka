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
import { r as c, V as fs, Y as ws, b as H, i as Z, j as e, E as o, F as x, B as j, a2 as Ae, H as m, I as h, L as ys, a5 as z } from "./index-DOfu0sXg.js";
import { u as vs } from "./useMutation-CVmbONMy.js";
import { A as Ee } from "./admin-layout-DH7sAIhq.js";
import { I as q } from "./input-FyV2XACZ.js";
import { B as T } from "./badge-BAjaXL1S.js";
import { T as ne, a as ie, b as E, c as n, d as ce, e as i } from "./table-CzdeB6gz.js";
import { D as de, a as oe, b as xe, c as me, d as bs, f as Ss } from "./dialog-BUvIuveX.js";
import { A as Ue, h as Be, a as Ie, b as Me, c as $e, d as Ve, e as Re, f as He, g as ze } from "./alert-dialog-Dg4XC4Tp.js";
import { S as qe, a as Je, b as Ye, c as _e, d as N } from "./select-ets7bQkN.js";
import { S as Ke } from "./switch-DvySixFh.js";
import { L as v } from "./label-B38UEnoM.js";
import { s as Ds, a as Cs, L as Ts } from "./lead-status-modal-DKnJBnai.js";
import { T as Os, a as Ls, b as Ge, c as Qe } from "./tabs-qGTQ6MVs.js";
import { f as ks } from "./timezone-utils-D5P8NMTs.js";
import { D as We } from "./download-ukPRPFea.js";
import { U as he } from "./users-CBtjfzvJ.js";
import { U as Xe } from "./user-adl9AYKF.js";
import { C as Ze } from "./calendar-DfgMOSD7.js";
import { F as Fs } from "./filter-56Ct97Iz.js";
import { S as Ps } from "./search-BFN4Wc19.js";
import { M as ee } from "./mail-WBbfgCoF.js";
import { P as se } from "./phone-Cx4FTVKN.js";
import { P as As } from "./phone-call-DUwUkqpA.js";
import { T as es } from "./trash-2-MFuZdLCA.js";
import { C as Es } from "./chevron-left-Cnh0-uPi.js";
import { C as Us } from "./chevron-right-DkUlsPHD.js";
import { G as ss } from "./gift-C_SZrOe8.js";
import { E as as } from "./external-link-CR-HDEeC.js";
import { S as Bs } from "./shopping-bag-8aLpcCGk.js";
import { M as ts } from "./map-pin-ChG4yLkU.js";
import { S as Is } from "./star-o2YGpjzJ.js";
import { F as Ms } from "./file-spreadsheet-6rHXWmH4.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./package-CpPTLD0o.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./textarea-__Yhw9VH.js";
import "./index-Czlrzsbg.js";
import "./en-US-BIej3L2x.js";
import "./format-Chey2Vsb.js";
import "./formatDistanceToNow-BStQM2-5.js";
function Ha() {
  var Fe, Pe;
  const [U, je] = c.useState(""), [B, ue] = c.useState(""), [t, J] = c.useState(null), [$s, rs] = c.useState(null), [O, w] = c.useState(1), [Y] = c.useState(50), [I, pe] = c.useState(false), [ge, ls] = c.useState("users"), [p, ae] = c.useState(null), [ns, Ne] = c.useState(false), [_, fe] = c.useState(null), [K, we] = c.useState("createdAt"), [te, ye] = c.useState("desc"), [G, ve] = c.useState(false), [M, be] = c.useState(""), [$, Se] = c.useState(""), [is, Q] = c.useState(false), [W, b] = c.useState(""), [X, V] = c.useState(""), [De, Ce] = c.useState(false), cs = fs(), { admin: f } = ws();
  c.useEffect(() => {
    if (U === "") {
      ue("");
      return;
    }
    const s = setTimeout(() => {
      ue(U);
    }, 400);
    return () => {
      clearTimeout(s);
    };
  }, [U]);
  const Te = (f == null ? void 0 : f.role) === "super_admin" || (f == null ? void 0 : f.role) === "admin", Oe = ["super_admin", "admin", "manager"].includes((f == null ? void 0 : f.role) || ""), { data: L, isLoading: ds, error: Le } = H({ queryKey: ["/api/admin/users", O, Y, B, K, te, G, M, $], queryFn: () => __async(null, null, function* () {
    const s = localStorage.getItem("adminToken");
    if (!s) throw new Error("No authentication token found");
    const l = new URLSearchParams(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({ page: O.toString(), limit: Y.toString() }, B && { search: B }), K && { sortBy: K }), { sortOrder: te, hasOrdersOnly: G.toString() }), M && { startDate: M }), $ && { endDate: $ })), a = yield fetch(`/api/admin/users?${l}`, { headers: { Authorization: `Bearer ${s}`, "Content-Type": "application/json" } });
    if (!a.ok) {
      const u = yield a.text();
      throw console.error("Admin users API error:", u), new Error(`Failed to fetch users: ${a.status} ${a.statusText}`);
    }
    const r = a.headers.get("content-type");
    if (!r || !r.includes("application/json")) {
      const u = yield a.text();
      throw console.error("Non-JSON response:", u), new Error("Server returned non-JSON response");
    }
    return a.json();
  }), staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, enabled: !!f }), S = (L == null ? void 0 : L.users) || [], d = L == null ? void 0 : L.pagination, os = (s) => {
    je(s), w(1);
  }, xs = (s) => {
    const l = /* @__PURE__ */ new Date(), a = (r) => r.toISOString().split("T")[0];
    switch (V(a(l)), s) {
      case "today": {
        b(a(l));
        break;
      }
      case "yesterday": {
        const r = new Date(l);
        r.setDate(r.getDate() - 1), b(a(r)), V(a(r));
        break;
      }
      case "7d": {
        const r = new Date(l);
        r.setDate(r.getDate() - 7), b(a(r));
        break;
      }
      case "30d": {
        const r = new Date(l);
        r.setDate(r.getDate() - 30), b(a(r));
        break;
      }
      case "this_month": {
        b(a(new Date(l.getFullYear(), l.getMonth(), 1)));
        break;
      }
      case "last_month": {
        const r = new Date(l.getFullYear(), l.getMonth() - 1, 1), u = new Date(l.getFullYear(), l.getMonth(), 0);
        b(a(r)), V(a(u));
        break;
      }
    }
  }, ms = () => __async(null, null, function* () {
    var s;
    if (!Oe) {
      z({ title: "Access Denied", description: "You don't have permission to download user data", variant: "destructive" });
      return;
    }
    pe(true);
    try {
      const l = localStorage.getItem("adminToken"), a = new URL("/api/admin/users/download", window.location.origin);
      B && a.searchParams.set("search", B), W && a.searchParams.set("startDate", W), X && a.searchParams.set("endDate", X), De && a.searchParams.set("hasOrdersOnly", "true");
      const r = yield fetch(a.toString(), { headers: { Authorization: `Bearer ${l}` } });
      if (!r.ok) throw new Error("Failed to download users data");
      const u = r.headers.get("content-disposition"), P = ((s = u == null ? void 0 : u.match(/filename="([^"]+)"/)) == null ? void 0 : s[1]) || "yum_users.csv", C = yield r.blob(), A = window.URL.createObjectURL(C), y = document.createElement("a");
      y.href = A, y.download = P, document.body.appendChild(y), y.click(), document.body.removeChild(y), window.URL.revokeObjectURL(A), z({ title: "Download Complete", description: `Successfully downloaded ${P}` }), Q(false);
    } catch (l) {
      console.error("Download error:", l), z({ title: "Download Failed", description: "Failed to download users data. Please try again.", variant: "destructive" });
    } finally {
      pe(false);
    }
  }), { data: k, isLoading: hs } = H({ queryKey: ["/api/admin/users", t == null ? void 0 : t.id, "addresses"], queryFn: Z({ on401: "throw" }), enabled: !!(t != null && t.id) }), { data: R, isLoading: js } = H({ queryKey: ["/api/admin/users", t == null ? void 0 : t.id, "proximity"], queryFn: Z({ on401: "throw" }), enabled: !!(t != null && t.id) }), { data: re, isLoading: us } = H({ queryKey: ["/api/admin/users/referrals"], queryFn: Z({ on401: "throw" }), enabled: ge === "referrals", staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false }), { data: D, isLoading: ps } = H({ queryKey: ["/api/admin/users", p == null ? void 0 : p.userId, "referrals"], queryFn: Z({ on401: "throw" }), enabled: !!(p != null && p.userId) }), gs = (s) => {
    if (!s) return "Location not specified";
    const l = s.split(",").map((a) => a.trim());
    return l.length >= 2 ? l.slice(-2).join(", ") : l[l.length - 1] || "Location not specified";
  }, Ns = (s) => {
    switch (s) {
      case "Hot":
        return "bg-red-100 text-red-800 border-red-200";
      case "Good":
        return "bg-green-100 text-green-800 border-green-200";
      case "Average":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  }, F = vs({ mutationFn: (s) => __async(null, null, function* () {
    const l = localStorage.getItem("adminToken");
    if (!l) throw new Error("No authentication token found");
    const a = yield fetch(`/api/admin/users/${s}`, { method: "DELETE", headers: { Authorization: `Bearer ${l}` } });
    if (!a.ok) {
      const r = yield a.json();
      throw new Error(r.message || "Failed to delete user");
    }
    return a.json();
  }), onSuccess: () => {
    cs.invalidateQueries({ queryKey: ["/api/admin/users"] }), rs(null), z({ title: "Success", description: "User deleted successfully" });
  }, onError: (s) => {
    z({ title: "Error", description: s.message, variant: "destructive" });
  } }), le = (s) => ks(s), ke = (s) => {
    const l = /* @__PURE__ */ new Date(), a = new Date(s), r = l.getTime() - a.getTime(), u = Math.floor(r / (1e3 * 60)), P = Math.floor(r / (1e3 * 60 * 60)), C = Math.floor(r / (1e3 * 60 * 60 * 24)), A = Math.floor(C / 30), y = Math.floor(C / 365);
    return y > 0 ? `${y} year${y === 1 ? "" : "s"} ago` : A > 0 ? `${A} month${A === 1 ? "" : "s"} ago` : C > 0 ? `${C} day${C === 1 ? "" : "s"} ago` : P > 0 ? `${P} hour${P === 1 ? "" : "s"} ago` : u > 0 ? `${u} minute${u === 1 ? "" : "s"} ago` : "Just now";
  }, g = (s) => (typeof s == "string" ? parseFloat(s) : s).toLocaleString("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return Le ? e.jsx(Ee, { currentPage: "users", children: e.jsx("div", { className: "p-6", children: e.jsx(o, { children: e.jsx(x, { className: "p-6", children: e.jsx("div", { className: "text-center text-red-600", children: e.jsxs("p", { children: ["Error loading users: ", Le.message] }) }) }) }) }) }) : e.jsx(Ee, { currentPage: "users", children: e.jsxs("div", { className: "p-6 space-y-6", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "Users" }), e.jsxs("p", { className: "text-gray-600", children: ["Manage customer accounts and view user activity", d && ` \u2022 Page ${d.currentPage} of ${d.totalPages}`] })] }), Oe && e.jsx(j, { onClick: () => {
    b(M), V($), Ce(G), Q(true);
  }, disabled: I, variant: "outline", size: "sm", children: I ? e.jsxs(e.Fragment, { children: [e.jsx(Ae, { className: "h-4 w-4 mr-2 animate-spin" }), " Exporting..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(We, { className: "h-4 w-4 mr-2" }), " Export CSV"] }) })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [e.jsxs(o, { children: [e.jsxs(m, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(h, { className: "text-sm font-medium", children: "Total Users" }), e.jsx(he, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsx(x, { children: e.jsx("div", { className: "text-2xl font-bold", children: (d == null ? void 0 : d.totalUsers) || 0 }) })] }), e.jsxs(o, { children: [e.jsxs(m, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(h, { className: "text-sm font-medium", children: "Verified Users" }), e.jsx(Xe, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsx(x, { children: e.jsx("div", { className: "text-2xl font-bold", children: (S == null ? void 0 : S.filter((s) => s.isVerified).length) || 0 }) })] }), e.jsxs(o, { children: [e.jsxs(m, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [e.jsx(h, { className: "text-sm font-medium", children: "Current Page" }), e.jsx(Ze, { className: "h-4 w-4 text-muted-foreground" })] }), e.jsx(x, { children: e.jsx("div", { className: "text-2xl font-bold", children: (S == null ? void 0 : S.length) || 0 }) })] })] }), e.jsxs(Os, { value: ge, onValueChange: ls, children: [e.jsxs(Ls, { className: "grid w-full grid-cols-2", children: [e.jsx(Ge, { value: "users", children: "All Users" }), e.jsx(Ge, { value: "referrals", children: "Referrals" })] }), e.jsxs(Qe, { value: "users", className: "space-y-6", children: [e.jsxs(o, { children: [e.jsx(m, { children: e.jsxs(h, { className: "flex items-center gap-2", children: [e.jsx(Fs, { className: "h-5 w-5" }), "Search & Filter Users"] }) }), e.jsxs(x, { className: "space-y-4", children: [e.jsxs("div", { className: "relative", children: [e.jsx(Ps, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), e.jsx(q, { placeholder: "Search by name, email, or phone...", value: U, onChange: (s) => os(s.target.value), className: "pl-10" })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-4 p-4 bg-gray-50 rounded-lg items-end", children: [e.jsxs("div", { className: "flex items-center space-x-2 pb-2", children: [e.jsx(Ke, { id: "has-orders", checked: G, onCheckedChange: (s) => {
    ve(s), w(1);
  } }), e.jsx(v, { htmlFor: "has-orders", className: "text-sm font-medium", children: "Customers with orders only" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { htmlFor: "start-date", className: "text-sm font-medium", children: "Joined From" }), e.jsx(q, { id: "start-date", type: "date", value: M, onChange: (s) => {
    be(s.target.value), w(1);
  }, className: "bg-white" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { htmlFor: "end-date", className: "text-sm font-medium", children: "Joined To" }), e.jsx(q, { id: "end-date", type: "date", value: $, onChange: (s) => {
    Se(s.target.value), w(1);
  }, className: "bg-white" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { className: "text-sm font-medium", children: "Sort by" }), e.jsxs(qe, { value: K, onValueChange: (s) => {
    we(s), w(1);
  }, children: [e.jsx(Je, { className: "bg-white", children: e.jsx(Ye, {}) }), e.jsxs(_e, { children: [e.jsx(N, { value: "createdAt", children: "Join Date" }), e.jsx(N, { value: "fullName", children: "Name" }), e.jsx(N, { value: "email", children: "Email" }), e.jsx(N, { value: "totalOrders", children: "Order Count" }), e.jsx(N, { value: "totalSpent", children: "Total Spent" }), e.jsx(N, { value: "walletBalance", children: "Wallet Balance" }), e.jsx(N, { value: "pointsBalance", children: "Points" }), e.jsx(N, { value: "distanceFromNearestOutlet", children: "Distance" }), e.jsx(N, { value: "lastOrderDate", children: "Last Order" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(v, { className: "text-sm font-medium", children: "Order" }), e.jsxs(qe, { value: te, onValueChange: (s) => {
    ye(s), w(1);
  }, children: [e.jsx(Je, { className: "bg-white", children: e.jsx(Ye, {}) }), e.jsxs(_e, { children: [e.jsx(N, { value: "desc", children: "High to Low" }), e.jsx(N, { value: "asc", children: "Low to High" })] })] })] }), e.jsx("div", { children: e.jsx(j, { variant: "outline", size: "sm", onClick: () => {
    je(""), we("createdAt"), ye("desc"), ve(false), be(""), Se(""), w(1);
  }, className: "w-full bg-white", children: "Reset" }) })] })] })] }), e.jsxs(o, { children: [e.jsxs(m, { className: "flex flex-row items-center justify-between", children: [e.jsxs(h, { children: ["Users (", (d == null ? void 0 : d.totalUsers) || 0, " total)"] }), d && e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", (O - 1) * Y + 1, "-", Math.min(O * Y, d.totalUsers), " of ", d.totalUsers] })] }), e.jsxs(x, { children: [ds ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading users..." })] }) : S.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-600", children: U ? "No users found matching your search." : "No users found." }) : e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(ne, { className: "table-fixed min-w-[1285px]", children: [e.jsx(ie, { children: e.jsxs(E, { children: [e.jsx(n, { className: "w-[150px]", children: "User" }), e.jsx(n, { className: "w-[180px]", children: "Contact" }), e.jsx(n, { className: "w-[90px]", children: "Status" }), e.jsx(n, { className: "w-[110px]", children: "Lead Status" }), e.jsx(n, { className: "w-[110px] text-right", children: "Wallet" }), e.jsx(n, { className: "w-[80px] text-right", children: "Points" }), e.jsx(n, { className: "w-[80px] text-right", children: "Orders" }), e.jsx(n, { className: "w-[115px] text-right", children: "Total Spent" }), e.jsx(n, { className: "w-[95px]", children: "Joined" }), e.jsx(n, { className: "w-[90px]", children: "Joined Ago" }), e.jsx(n, { className: "w-[170px] text-right", children: "Actions" })] }) }), e.jsx(ce, { children: S.map((s) => e.jsxs(E, { children: [e.jsx(i, { className: "whitespace-nowrap", children: e.jsxs("div", { children: [e.jsx("div", { className: "font-medium truncate", children: s.fullName }), e.jsxs("div", { className: "text-sm text-gray-500", children: ["ID: ", s.id] })] }) }), e.jsx(i, { className: "whitespace-nowrap", children: e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(ee, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.email })] }), e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(se, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.phone })] })] }) }), e.jsx(i, { className: "whitespace-nowrap", children: e.jsx(T, { variant: s.isVerified ? "default" : "secondary", children: s.isVerified ? "Verified" : "Unverified" }) }), e.jsx(i, { className: "whitespace-nowrap", children: s.leadStatus ? e.jsx(T, { className: `${Ds[s.leadStatus.status]} border font-medium`, children: Cs[s.leadStatus.status] }) : e.jsx("span", { className: "text-sm text-gray-400", children: "No status" }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium text-blue-600", children: ["\u20A6", s.walletBalance ? g(s.walletBalance) : "0.00"] }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsx("span", { className: "font-medium text-purple-600", children: s.pointsBalance || 0 }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsx("span", { className: "font-medium", children: s.totalOrders || 0 }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium", children: ["\u20A6", s.totalSpent ? g(s.totalSpent) : "0.00"] }) }), e.jsx(i, { className: "whitespace-nowrap", children: e.jsx("span", { className: "text-sm", children: le(s.createdAt) }) }), e.jsx(i, { className: "whitespace-nowrap", children: e.jsx("span", { className: "text-sm text-gray-600", children: ke(s.createdAt) }) }), e.jsx(i, { className: "whitespace-nowrap text-right", children: e.jsxs("div", { className: "ml-auto inline-flex w-fit items-center justify-end gap-1", children: [e.jsx(j, { variant: "outline", size: "sm", onClick: () => J(s), children: "View Details" }), e.jsx(j, { variant: "outline", size: "sm", onClick: () => {
    fe(s), Ne(true);
  }, className: "text-blue-600 hover:text-blue-700 hover:bg-blue-50", title: "Update Lead Status", children: e.jsx(As, { className: "h-4 w-4" }) }), Te && e.jsxs(Ue, { children: [e.jsx(Be, { asChild: true, children: e.jsx(j, { variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700 hover:bg-red-50", children: e.jsx(es, { className: "h-4 w-4" }) }) }), e.jsxs(Ie, { children: [e.jsxs(Me, { children: [e.jsx($e, { children: "Delete User" }), e.jsxs(Ve, { children: ["Are you sure you want to delete ", e.jsx("strong", { children: s.fullName }), "? This action cannot be undone and will permanently delete:", e.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [e.jsx("li", { children: "User account and profile" }), e.jsx("li", { children: "All orders and order history" }), e.jsx("li", { children: "Wallet transactions and points" }), e.jsx("li", { children: "All associated data" })] })] })] }), e.jsxs(Re, { children: [e.jsx(He, { children: "Cancel" }), e.jsx(ze, { onClick: () => F.mutate(s.id), disabled: F.isPending, className: "bg-red-600 hover:bg-red-700", children: F.isPending ? "Deleting..." : "Delete User" })] })] })] })] }) })] }, s.id)) })] }) }), d && d.totalPages > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-4 border-t", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", d.currentPage, " of ", d.totalPages] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(j, { variant: "outline", size: "sm", onClick: () => w(O - 1), disabled: !d.hasPreviousPage, children: [e.jsx(Es, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(j, { variant: "outline", size: "sm", onClick: () => w(O + 1), disabled: !d.hasNextPage, children: ["Next", e.jsx(Us, { className: "h-4 w-4 ml-1" })] })] })] })] })] })] }), e.jsx(Qe, { value: "referrals", className: "space-y-6", children: e.jsxs(o, { children: [e.jsxs(m, { children: [e.jsxs(h, { className: "flex items-center gap-2", children: [e.jsx(ss, { className: "h-5 w-5" }), "Referral Statistics"] }), e.jsx("p", { className: "text-gray-600", children: "Users who have referred others and their earnings" })] }), e.jsx(x, { children: us ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading referral statistics..." })] }) : !re || re.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-600", children: "No users have made referrals yet." }) : e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(ne, { className: "table-fixed min-w-[940px]", children: [e.jsx(ie, { children: e.jsxs(E, { children: [e.jsx(n, { className: "w-[140px]", children: "User" }), e.jsx(n, { className: "w-[170px]", children: "Contact" }), e.jsx(n, { className: "w-[100px]", children: "Ref Code" }), e.jsx(n, { className: "w-[85px] text-right", children: "Referred" }), e.jsx(n, { className: "w-[105px] text-right", children: "Earned" }), e.jsx(n, { className: "w-[105px] text-right", children: "Redeemed" }), e.jsx(n, { className: "w-[115px] text-right", children: "Outstanding" }), e.jsx(n, { className: "w-[130px] text-right", children: "Actions" })] }) }), e.jsx(ce, { children: re.map((s) => e.jsxs(E, { children: [e.jsx(i, { children: e.jsxs("div", { children: [e.jsx("div", { className: "font-medium truncate", children: s.fullName }), e.jsxs("div", { className: "text-sm text-gray-500", children: ["ID: ", s.userId] })] }) }), e.jsx(i, { children: e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(ee, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.email })] }), e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(se, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.phone })] })] }) }), e.jsx(i, { children: e.jsx(T, { variant: "outline", className: "font-mono truncate max-w-full", children: s.referralCode }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsx("span", { className: "font-medium text-green-600", children: s.totalReferred }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium text-blue-600", children: ["\u20A6", g(s.totalEarned / 100)] }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium text-purple-600", children: ["\u20A6", g(s.totalRedeemed / 100)] }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium text-orange-600", children: ["\u20A6", g(s.totalOutstanding / 100)] }) }), e.jsx(i, { className: "whitespace-nowrap text-right", children: e.jsxs(j, { variant: "outline", size: "sm", onClick: () => ae(s), className: "h-8 px-2 text-xs", children: [e.jsx(as, { className: "h-3 w-3 mr-1" }), "View Details"] }) })] }, s.userId)) })] }) }) })] }) })] }), e.jsx(de, { open: !!t, onOpenChange: () => J(null), children: e.jsxs(oe, { className: "max-w-2xl max-h-[80vh] overflow-y-auto", children: [e.jsx(xe, { children: e.jsxs(me, { className: "flex items-center gap-2", children: [e.jsx(Xe, { className: "h-5 w-5" }), "User Details"] }) }), t && e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Basic Information" }) }), e.jsxs(x, { className: "space-y-3", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "Full Name" }), e.jsx("p", { className: "font-medium", children: t.fullName })] }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "User ID" }), e.jsxs("p", { className: "font-medium", children: ["#", t.id] })] }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "Account Status" }), e.jsx(T, { variant: t.isVerified ? "default" : "secondary", children: t.isVerified ? "Verified" : "Unverified" })] })] })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Contact Information" }) }), e.jsxs(x, { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(ee, { className: "h-4 w-4 text-gray-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "Email" }), e.jsx("p", { className: "font-medium", children: t.email })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(se, { className: "h-4 w-4 text-gray-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "Phone" }), e.jsx("p", { className: "font-medium", children: t.phone })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Ze, { className: "h-4 w-4 text-gray-400" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-gray-500", children: "Joined" }), e.jsx("p", { className: "font-medium", children: le(t.createdAt) })] })] })] })] })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Financial Information" }) }), e.jsx(x, { children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [e.jsxs("p", { className: "text-2xl font-bold text-blue-600", children: ["\u20A6", t.walletBalance ? g(t.walletBalance) : "0.00"] }), e.jsx("p", { className: "text-sm text-gray-600", children: "Wallet Balance" })] }), e.jsxs("div", { className: "text-center p-4 bg-purple-50 rounded-lg", children: [e.jsx("p", { className: "text-2xl font-bold text-purple-600", children: t.pointsBalance || 0 }), e.jsx("p", { className: "text-sm text-gray-600", children: "Points Balance" })] })] }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsxs(h, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(Bs, { className: "h-4 w-4" }), "Order Statistics"] }) }), e.jsx(x, { children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "text-center p-4 bg-red-50 rounded-lg", children: [e.jsx("p", { className: "text-2xl font-bold text-red-600", children: t.totalOrders || 0 }), e.jsx("p", { className: "text-sm text-gray-600", children: "Total Orders" })] }), e.jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [e.jsxs("p", { className: "text-2xl font-bold text-green-600", children: ["\u20A6", t.totalSpent ? g(t.totalSpent) : "0.00"] }), e.jsx("p", { className: "text-sm text-gray-600", children: "Total Spent" })] })] }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsxs(h, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(ts, { className: "h-4 w-4" }), "Saved Addresses (", (k == null ? void 0 : k.length) || 0, ")"] }) }), e.jsx(x, { children: hs ? e.jsxs("div", { className: "text-center py-4", children: [e.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-sm text-gray-500", children: "Loading addresses..." })] }) : k && k.length > 0 ? e.jsx("div", { className: "space-y-3 max-h-40 overflow-y-auto", children: k.map((s) => e.jsx("div", { className: "p-3 border rounded-lg bg-gray-50", children: e.jsx("div", { className: "flex items-start justify-between", children: e.jsxs("div", { className: "flex-1", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [s.addressName && e.jsx("span", { className: "text-sm font-medium text-gray-700", children: s.addressName }), s.isPrimary && e.jsxs(T, { variant: "secondary", className: "text-xs", children: [e.jsx(Is, { className: "h-3 w-3 mr-1" }), "Primary"] })] }), e.jsx("p", { className: "text-sm text-gray-600", children: gs(s.fullAddress) }), s.latitude && s.longitude && e.jsxs("p", { className: "text-xs text-gray-400 mt-1", children: ["Coordinates: ", s.latitude, ", ", s.longitude] })] }) }) }, s.id)) }) : e.jsxs("div", { className: "text-center py-6 text-gray-500", children: [e.jsx(ts, { className: "h-12 w-12 mx-auto mb-2 text-gray-300" }), e.jsx("p", { className: "text-sm", children: "No saved addresses found" }), e.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "User hasn't saved any delivery addresses yet" })] }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsxs(h, { className: "text-sm font-medium text-gray-600 flex items-center gap-2", children: [e.jsx(he, { className: "h-4 w-4" }), "Lead Classification"] }) }), e.jsx(x, { children: js ? e.jsxs("div", { className: "text-center py-4", children: [e.jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-sm text-gray-500", children: "Calculating proximity..." })] }) : R ? e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 bg-gray-50 rounded-lg", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs("div", { className: "text-center", children: [e.jsxs("p", { className: "text-2xl font-bold text-gray-800", children: [R.distanceToNearestOutlet.toFixed(1), " km"] }), e.jsx("p", { className: "text-xs text-gray-500", children: "to nearest outlet" })] }), e.jsx("div", { className: "border-l border-gray-300 h-12 mx-2" }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium text-gray-700", children: R.nearestOutletName }), e.jsx("p", { className: "text-xs text-gray-500", children: "Nearest magoka location" })] })] }), e.jsxs(T, { className: `${Ns(R.leadType)} border font-medium`, children: [R.leadType, " Lead"] })] }), e.jsxs("div", { className: "text-xs text-gray-500 space-y-1", children: [e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Hot Lead:" }), " Less than 6km from outlet"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Good Lead:" }), " 6-15km from outlet"] }), e.jsxs("p", { children: ["\u2022 ", e.jsx("strong", { children: "Average Lead:" }), " More than 15km from outlet"] })] })] }) : e.jsxs("div", { className: "text-center py-6 text-gray-500", children: [e.jsx(he, { className: "h-12 w-12 mx-auto mb-2 text-gray-300" }), e.jsx("p", { className: "text-sm", children: "No location data available" }), e.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "User hasn't provided location information" })] }) })] }), e.jsxs("div", { className: "flex justify-between pt-4 border-t", children: [e.jsxs("div", { className: "flex gap-2", children: [e.jsx(ys, { href: `/control/users/${t.id}`, children: e.jsxs(j, { variant: "default", className: "flex items-center gap-2", children: [e.jsx(as, { className: "h-4 w-4" }), "Full Details"] }) }), Te && e.jsxs(Ue, { children: [e.jsx(Be, { asChild: true, children: e.jsxs(j, { variant: "outline", className: "text-red-600 hover:text-red-700 hover:bg-red-50", children: [e.jsx(es, { className: "h-4 w-4 mr-2" }), "Delete User"] }) }), e.jsxs(Ie, { children: [e.jsxs(Me, { children: [e.jsx($e, { children: "Delete User" }), e.jsxs(Ve, { children: ["Are you sure you want to delete ", e.jsx("strong", { children: t.fullName }), "? This action cannot be undone and will permanently delete:", e.jsxs("ul", { className: "list-disc list-inside mt-2 space-y-1", children: [e.jsx("li", { children: "User account and profile" }), e.jsx("li", { children: "All orders and order history" }), e.jsx("li", { children: "Wallet transactions and points" }), e.jsx("li", { children: "All associated data" })] })] })] }), e.jsxs(Re, { children: [e.jsx(He, { children: "Cancel" }), e.jsx(ze, { onClick: () => {
    F.mutate(t.id), J(null);
  }, disabled: F.isPending, className: "bg-red-600 hover:bg-red-700", children: F.isPending ? "Deleting..." : "Delete User" })] })] })] })] }), e.jsx(j, { variant: "outline", onClick: () => J(null), children: "Close" })] })] })] }) }), e.jsx(de, { open: !!p, onOpenChange: () => ae(null), children: e.jsxs(oe, { className: "max-w-4xl max-h-[80vh] overflow-y-auto", children: [e.jsx(xe, { children: e.jsxs(me, { className: "flex items-center gap-2", children: [e.jsx(ss, { className: "h-5 w-5" }), "Referral Details - ", p == null ? void 0 : p.fullName] }) }), p && D && e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Total Referred" }) }), e.jsx(x, { children: e.jsx("div", { className: "text-2xl font-bold text-green-600", children: D.statistics.totalReferred }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Total Earned" }) }), e.jsx(x, { children: e.jsxs("div", { className: "text-2xl font-bold text-blue-600", children: ["\u20A6", g(D.statistics.totalEarned / 100)] }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Redeemed" }) }), e.jsx(x, { children: e.jsxs("div", { className: "text-2xl font-bold text-purple-600", children: ["\u20A6", g(D.statistics.totalRedeemed / 100)] }) })] }), e.jsxs(o, { children: [e.jsx(m, { className: "pb-3", children: e.jsx(h, { className: "text-sm font-medium text-gray-600", children: "Outstanding" }) }), e.jsx(x, { children: e.jsxs("div", { className: "text-2xl font-bold text-orange-600", children: ["\u20A6", g(D.statistics.totalOutstanding / 100)] }) })] })] }), e.jsxs(o, { children: [e.jsxs(m, { children: [e.jsxs(h, { children: ["Referred Users (", D.referredUsers.length, ")"] }), e.jsxs("p", { className: "text-gray-600", children: ["People referred by ", p.fullName] })] }), e.jsx(x, { children: ps ? e.jsxs("div", { className: "text-center py-8", children: [e.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto" }), e.jsx("p", { className: "mt-2 text-gray-600", children: "Loading referred users..." })] }) : D.referredUsers.length === 0 ? e.jsx("div", { className: "text-center py-8 text-gray-600", children: "No referred users found." }) : e.jsx("div", { className: "overflow-x-auto", children: e.jsxs(ne, { className: "table-fixed min-w-[820px]", children: [e.jsx(ie, { children: e.jsxs(E, { children: [e.jsx(n, { className: "w-[160px]", children: "User" }), e.jsx(n, { className: "w-[190px]", children: "Contact" }), e.jsx(n, { className: "w-[130px]", children: "Referred Date" }), e.jsx(n, { className: "w-[130px]", children: "Orders Status" }), e.jsx(n, { className: "w-[100px] text-right", children: "Orders" }), e.jsx(n, { className: "w-[110px] text-right", children: "Total Spent" })] }) }), e.jsx(ce, { children: D.referredUsers.map((s) => e.jsxs(E, { children: [e.jsx(i, { children: e.jsxs("div", { children: [e.jsx("div", { className: "truncate font-medium", children: s.fullName }), e.jsxs("div", { className: "text-sm text-gray-500", children: ["ID: ", s.id] })] }) }), e.jsx(i, { children: e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(ee, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.email })] }), e.jsxs("div", { className: "flex items-center text-sm", children: [e.jsx(se, { className: "h-3 w-3 mr-1 shrink-0" }), e.jsx("span", { className: "truncate", children: s.phone })] })] }) }), e.jsxs(i, { className: "whitespace-nowrap", children: [e.jsx("div", { className: "text-sm", children: le(s.referralDate) }), e.jsx("div", { className: "text-xs text-gray-500", children: ke(s.referralDate) })] }), e.jsx(i, { className: "whitespace-nowrap", children: e.jsx(T, { variant: s.hasOrdered ? "default" : "secondary", children: s.hasOrdered ? "Has Ordered" : "No Orders" }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsx("span", { className: "font-medium", children: s.totalOrders }) }), e.jsx(i, { className: "whitespace-nowrap text-right tabular-nums", children: e.jsxs("span", { className: "font-medium", children: ["\u20A6", g(s.totalSpent)] }) })] }, s.id)) })] }) }) })] }), e.jsx("div", { className: "flex justify-end pt-4 border-t", children: e.jsx(j, { variant: "outline", onClick: () => ae(null), children: "Close" }) })] })] }) }), _ && e.jsx(Ts, { isOpen: ns, onClose: () => {
    Ne(false), fe(null);
  }, userId: _.id, currentStatus: (Fe = _.leadStatus) == null ? void 0 : Fe.status, currentNotes: (Pe = _.leadStatus) == null ? void 0 : Pe.notes }), e.jsx(de, { open: is, onOpenChange: Q, children: e.jsxs(oe, { className: "sm:max-w-md bg-white", children: [e.jsxs(xe, { children: [e.jsxs(me, { className: "flex items-center gap-2 text-slate-900", children: [e.jsx(Ms, { className: "h-5 w-5 text-emerald-600" }), "Export Users / Customers"] }), e.jsx(bs, { className: "text-slate-500", children: "Select registration date range and filters to export user statistics as CSV." })] }), e.jsxs("div", { className: "space-y-4 py-2", children: [e.jsxs("div", { children: [e.jsx(v, { className: "text-xs text-slate-500 mb-1.5 block", children: "Quick Range" }), e.jsx("div", { className: "flex flex-wrap gap-1.5", children: [{ label: "Today", value: "today" }, { label: "Yesterday", value: "yesterday" }, { label: "Last 7 days", value: "7d" }, { label: "Last 30 days", value: "30d" }, { label: "This month", value: "this_month" }, { label: "Last month", value: "last_month" }].map((s) => e.jsx(j, { variant: "outline", size: "sm", className: "h-7 text-xs bg-slate-50 hover:bg-slate-100 animate-none", onClick: () => xs(s.value), children: s.label }, s.value)) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx(v, { htmlFor: "export-start", className: "text-sm font-medium text-slate-700", children: "Joined From" }), e.jsx(q, { id: "export-start", type: "date", value: W, onChange: (s) => b(s.target.value), max: X || void 0, className: "bg-white" })] }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(v, { htmlFor: "export-end", className: "text-sm font-medium text-slate-700", children: "Joined To" }), e.jsx(q, { id: "export-end", type: "date", value: X, onChange: (s) => V(s.target.value), min: W || void 0, max: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], className: "bg-white" })] })] }), e.jsxs("div", { className: "flex items-center space-x-2 pt-2", children: [e.jsx(Ke, { id: "export-has-orders", checked: De, onCheckedChange: (s) => Ce(s) }), e.jsx(v, { htmlFor: "export-has-orders", className: "text-sm font-medium text-slate-700", children: "Customers with orders only" })] })] }), e.jsxs(Ss, { className: "gap-2 sm:gap-0 border-t pt-4", children: [e.jsx(j, { variant: "ghost", onClick: () => Q(false), disabled: I, className: "hover:bg-slate-100", children: "Cancel" }), e.jsx(j, { onClick: ms, disabled: I, className: "bg-emerald-600 hover:bg-emerald-700 text-white", children: I ? e.jsxs(e.Fragment, { children: [e.jsx(Ae, { className: "h-4 w-4 mr-2 animate-spin" }), "Exporting\u2026"] }) : e.jsxs(e.Fragment, { children: [e.jsx(We, { className: "h-4 w-4 mr-2" }), "Export CSV"] }) })] })] }) })] }) });
}
export { Ha as default };
