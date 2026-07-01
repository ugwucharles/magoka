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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { N as Je, r as u, c as qe, V as We, b as W, j as e, E as Z, H as X, I as ee, Z as xe, B as g, F as fe, W as R, Y as Ze, a2 as J, a6 as _ } from "./index-DOfu0sXg.js";
import { u as C } from "./useMutation-CVmbONMy.js";
import { I as N } from "./input-FyV2XACZ.js";
import { L as M } from "./label-B38UEnoM.js";
import { S as se, a as ae, b as te, c as re, d as I } from "./select-ets7bQkN.js";
import { B as q } from "./badge-BAjaXL1S.js";
import { S as $e } from "./switch-DvySixFh.js";
import { D as ye, a as Ne, b as je, c as ve, d as we, f as Ce, e as Xe } from "./dialog-BUvIuveX.js";
import { A as Se, a as be, b as Me, c as Re, d as Te, e as Oe, f as De, g as Ue } from "./alert-dialog-Dg4XC4Tp.js";
import { T as es, a as ss, b as ke, c as _e } from "./tabs-qGTQ6MVs.js";
import { R as Ie, A as Ge, S as as, g as Ke } from "./admin-layout-DH7sAIhq.js";
import { P as he } from "./permission-gate-BcxqpHQ-.js";
import { S as Qe } from "./shield-BJZvWIYM.js";
import { S as ts } from "./save-BZa-ufS1.js";
import { R as rs } from "./rotate-ccw-DOK3eGbZ.js";
import { P as ze } from "./plus-xl2HqeIg.js";
import { P as is } from "./pen-BTOfVmxO.js";
import { T as He } from "./trash-2-MFuZdLCA.js";
import { S as ns } from "./search-BFN4Wc19.js";
import { U as Le } from "./users-CBtjfzvJ.js";
import { M as Be } from "./map-pin-ChG4yLkU.js";
import { S as os } from "./square-pen-B4PbNjTL.js";
import { L as ls } from "./lock-ABGMYV1t.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./index-Czlrzsbg.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./package-CpPTLD0o.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./chevron-right-DkUlsPHD.js";
import "./chevron-left-Cnh0-uPi.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ds = Je("Info", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 16v-4", key: "1dtifu" }], ["path", { d: "M12 8h.01", key: "e9boi3" }]]), t = { USER_MANAGEMENT: "User Management", FINANCIAL_DATA: "Financial Data & Metrics", DASHBOARD_METRICS: "Dashboard & Analytics", PRODUCT_MANAGEMENT: "Product & Inventory Management", ORDER_MANAGEMENT: "Order Management", SYSTEM_SETTINGS: "System Settings", OUTLET_MANAGEMENT: "Outlet Management", MARKETING: "Marketing & Promotions" }, Ve = { manageUsers: { name: "manageUsers", displayName: "Manage Users", description: "Create, edit, and delete admin users", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Add User Button", "User Edit Forms"] }, viewUserEmails: { name: "viewUserEmails", displayName: "View User Emails", description: "View customer and admin user email addresses", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Email Column", "Customer Details"] }, viewUserPasswords: { name: "viewUserPasswords", displayName: "Change User Passwords", description: "Access password change functionality for users", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Password Change Button"] }, changeUserRoles: { name: "changeUserRoles", displayName: "Change User Roles", description: "Modify user role assignments", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Role Dropdown"] }, deleteUsers: { name: "deleteUsers", displayName: "Delete Users", description: "Permanently delete user accounts", category: t.USER_MANAGEMENT, affectedComponents: ["User Management - Delete Button"] }, viewAllUsers: { name: "viewAllUsers", displayName: "View All Admin Users", description: "Access the complete list of admin users", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page"] }, viewAllCustomers: { name: "viewAllCustomers", displayName: "View All Customers", description: "Access customer data and information", category: t.USER_MANAGEMENT, affectedComponents: ["Customers Page", "Customer Analytics"] }, viewFinancialMetrics: { name: "viewFinancialMetrics", displayName: "View Financial Metrics", description: "Access all financial data and business metrics", category: t.FINANCIAL_DATA, affectedComponents: ["Dashboard - All Financial Cards", "Reports"] }, viewRevenueData: { name: "viewRevenueData", displayName: "View Revenue Data", description: "See revenue information and monetary values", category: t.FINANCIAL_DATA, affectedComponents: ["Dashboard - Revenue Card", "Order Revenue"] }, viewTotalRevenue: { name: "viewTotalRevenue", displayName: "View Total Revenue", description: "Access total revenue metrics", category: t.FINANCIAL_DATA, affectedComponents: ["Dashboard - Total Revenue", "Orders Page - Total Revenue"] }, viewProcessingValue: { name: "viewProcessingValue", displayName: "View Processing Order Value", description: "See the monetary value of orders in processing", category: t.FINANCIAL_DATA, affectedComponents: ["Orders Page - Processing Value Card"] }, viewSalesData: { name: "viewSalesData", displayName: "View Sales Data", description: "Access sales figures and performance data", category: t.FINANCIAL_DATA, affectedComponents: ["Dashboard - Daily Analytics Sales Column"] }, viewDashboardMetrics: { name: "viewDashboardMetrics", displayName: "View Dashboard Metrics", description: "Access dashboard statistics and KPIs", category: t.DASHBOARD_METRICS, affectedComponents: ["Control Dashboard - All Metric Cards"] }, viewOrderMetrics: { name: "viewOrderMetrics", displayName: "View Order Metrics", description: "See order count statistics", category: t.DASHBOARD_METRICS, affectedComponents: ["Dashboard - Total Orders Card", "Dashboard - Completed Orders Card"] }, viewUserMetrics: { name: "viewUserMetrics", displayName: "View User Metrics", description: "Access user count and signup statistics", category: t.DASHBOARD_METRICS, affectedComponents: ["Dashboard - Total Users Card"] }, viewConversionRates: { name: "viewConversionRates", displayName: "View Conversion Rates", description: "See conversion rate analytics", category: t.DASHBOARD_METRICS, affectedComponents: ["Dashboard - Daily Analytics Conversion Columns"] }, viewDailyAnalytics: { name: "viewDailyAnalytics", displayName: "View Daily Analytics", description: "Access daily progress and analytics tables", category: t.DASHBOARD_METRICS, affectedComponents: ["Dashboard - Daily Analytics Table"] }, viewAnalytics: { name: "viewAnalytics", displayName: "View Analytics", description: "Access advanced analytics and reports", category: t.DASHBOARD_METRICS, affectedComponents: ["Analytics Page", "Reports"] }, manageProducts: { name: "manageProducts", displayName: "Manage Products", description: "Create, edit, and delete products", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Products Page", "Product Forms"] }, viewInactiveProducts: { name: "viewInactiveProducts", displayName: "View Inactive Products", description: "View inactive products in the admin product list", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Products Page - Inactive Product Visibility"] }, manageGlobalProducts: { name: "manageGlobalProducts", displayName: "Manage Global Products", description: "Manage products across all outlets", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Products Page - All Outlets"] }, manageCategories: { name: "manageCategories", displayName: "Manage Categories", description: "Create, edit, and delete product categories", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Categories Page"] }, manageBanners: { name: "manageBanners", displayName: "Manage Banners", description: "Create and manage promotional banners", category: t.MARKETING, affectedComponents: ["Banners Page"] }, managePromoCodes: { name: "managePromoCodes", displayName: "Manage Promo Codes", description: "Create and manage promotional discount codes", category: t.MARKETING, affectedComponents: ["Promo Codes Page"] }, manageCampaigns: { name: "manageCampaigns", displayName: "Manage Campaigns", description: "Create, edit, and send marketing campaigns via SMS, Email, and Push notifications", category: t.MARKETING, affectedComponents: ["Campaigns Page", "Campaign Builder", "Campaign Actions"] }, viewCampaigns: { name: "viewCampaigns", displayName: "View Campaigns", description: "View campaign list, details, and delivery reports", category: t.MARKETING, affectedComponents: ["Campaigns Page", "Campaign Details"] }, viewAllOrders: { name: "viewAllOrders", displayName: "View All Orders", description: "Access all orders across all outlets", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - All Orders"] }, updateOrderStatus: { name: "updateOrderStatus", displayName: "Update Order Status", description: "Change order lifecycle statuses without granting delete or payout access", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - Status Controls", "Order Details - Update Status"] }, markOrderFailed: { name: "markOrderFailed", displayName: "Mark Order Failed", description: "Allow explicitly marking eligible orders as failed.", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - Failed Action", "Order Details - Failed Action"] }, markOrderRefunded: { name: "markOrderRefunded", displayName: "Mark Order Refunded", description: "Allow processing refunds for failed paid orders with OTP verification.", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - Refund Action", "Order Details - Refund Action", "Payouts - Refund OTP Request"] }, deleteOrders: { name: "deleteOrders", displayName: "Delete Orders", description: "Permanently delete order records", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - Delete Button"] }, initiateRiderPayout: { name: "initiateRiderPayout", displayName: "Initiate Rider Payout", description: "Create and submit rider payout drafts for admin approval", category: t.ORDER_MANAGEMENT, affectedComponents: ["Order Details - Payout Draft Module"] }, approveRiderPayout: { name: "approveRiderPayout", displayName: "Approve Rider Payout", description: "Approve, reject, and retry rider payouts using OTP verification", category: t.ORDER_MANAGEMENT, affectedComponents: ["Order Details - Payout Approval", "Dashboard - Pending Payout Approvals"] }, viewAllOutlets: { name: "viewAllOutlets", displayName: "View All Outlets", description: "Access information for all outlets", category: t.OUTLET_MANAGEMENT, affectedComponents: ["Outlets Page - All Outlets"] }, manageOutlets: { name: "manageOutlets", displayName: "Manage Outlets", description: "Create, edit, and delete outlet locations", category: t.OUTLET_MANAGEMENT, affectedComponents: ["Outlets Page"] }, manageSettings: { name: "manageSettings", displayName: "Manage Settings", description: "Modify system configuration and settings", category: t.SYSTEM_SETTINGS, affectedComponents: ["Settings Page"] }, manageGlobalSettings: { name: "manageGlobalSettings", displayName: "Manage Global Settings", description: "Modify platform-wide settings", category: t.SYSTEM_SETTINGS, affectedComponents: ["Settings Page - Global Settings"] }, createSuperAdmin: { name: "createSuperAdmin", displayName: "Create Super Admin", description: "Create new super admin accounts", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Add User"] }, createAdmin: { name: "createAdmin", displayName: "Create Admin", description: "Create new admin accounts", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Add User"] }, createManager: { name: "createManager", displayName: "Create Manager", description: "Create new manager accounts", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Add User"] }, createOrderManager: { name: "createOrderManager", displayName: "Create Order Manager", description: "Create new order manager accounts", category: t.USER_MANAGEMENT, affectedComponents: ["RBAC Users Page - Add User"] }, isGlobalAccess: { name: "isGlobalAccess", displayName: "Global Access", description: "Access data across all outlets (not restricted to assigned outlets)", category: t.SYSTEM_SETTINGS, affectedComponents: ["All Pages - Data Filtering"] }, viewLeads: { name: "viewLeads", displayName: "View Leads", description: "Access lead management and sales pipeline", category: t.USER_MANAGEMENT, affectedComponents: ["Leads Page"] }, manageProductAvailability: { name: "manageProductAvailability", displayName: "Manage Product Availability", description: "Control product availability and stock status", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Product Availability Page"] }, manageOutletOrders: { name: "manageOutletOrders", displayName: "Manage Outlet Orders", description: "Manage orders for assigned outlets", category: t.ORDER_MANAGEMENT, affectedComponents: ["Orders Page - Outlet Orders"] }, viewOutletReports: { name: "viewOutletReports", displayName: "View Outlet Reports", description: "Access reports for assigned outlets", category: t.DASHBOARD_METRICS, affectedComponents: ["Reports Page - Outlet Reports"] }, viewOrders: { name: "viewOrders", displayName: "View Orders", description: "Access the orders management page", category: t.ORDER_MANAGEMENT, affectedComponents: ["Sidebar - Orders Tab", "Orders Page"] }, viewOrderAnalytics: { name: "viewOrderAnalytics", displayName: "View Order Analytics", description: "Access order analytics and statistics", category: t.ORDER_MANAGEMENT, affectedComponents: ["Sidebar - Order Analytics Tab", "Order Analytics Page"] }, createOrders: { name: "createOrders", displayName: "Create Orders", description: "Create new orders manually", category: t.ORDER_MANAGEMENT, affectedComponents: ["Sidebar - Create Order Tab", "Create Order Page"] }, viewReviews: { name: "viewReviews", displayName: "View Reviews", description: "Access customer reviews and ratings", category: t.PRODUCT_MANAGEMENT, affectedComponents: ["Sidebar - Reviews Tab", "Reviews Page"] }, viewUsers: { name: "viewUsers", displayName: "View Users", description: "Access the users/customers page", category: t.USER_MANAGEMENT, affectedComponents: ["Sidebar - Users Tab", "Users Page"] }, viewSettings: { name: "viewSettings", displayName: "View Settings", description: "Access basic settings page", category: t.SYSTEM_SETTINGS, affectedComponents: ["Sidebar - Settings Tab", "Settings Page"] } };
function cs() {
  return Object.values(t);
}
function ms({ className: r }) {
  var _a;
  const [l, G] = u.useState(""), [T, ie] = u.useState(""), [E, w] = u.useState({}), [K, x] = u.useState(false), [O, F] = u.useState(false), [ne, j] = u.useState(false), [L, v] = u.useState(false), [p, y] = u.useState({ roleKey: "", displayName: "", description: "", copyFrom: "" }), [P, D] = u.useState({ displayName: "", description: "" }), { toast: h } = qe(), f = We(), oe = (a) => a.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]+/g, " ").replace(/^./, (n) => n.toUpperCase()), S = (a) => {
    const n = a.toLowerCase();
    return n.includes("product") || n.includes("category") || n.includes("banner") || n.includes("review") ? t.PRODUCT_MANAGEMENT : n.includes("order") || n.includes("payout") ? t.ORDER_MANAGEMENT : n.includes("outlet") ? t.OUTLET_MANAGEMENT : n.includes("campaign") || n.includes("promo") || n.includes("marketing") ? t.MARKETING : n.includes("user") || n.includes("role") || n.includes("lead") ? t.USER_MANAGEMENT : n.includes("analytics") || n.includes("metric") || n.includes("revenue") || n.includes("financial") ? t.DASHBOARD_METRICS : t.SYSTEM_SETTINGS;
  }, { data: b = [], isLoading: $ } = W({ queryKey: ["/api/admin/roles"], queryFn: () => __async(null, null, function* () {
    return yield (yield R("GET", "/api/admin/roles")).json();
  }) });
  b.length > 0 && !l && G(b[0].roleKey);
  const { data: U, isLoading: Ae } = W({ queryKey: ["/api/admin/permissions"], queryFn: () => __async(null, null, function* () {
    return (yield (yield R("GET", "/api/admin/permissions")).json()).customPermissions || [];
  }) }), Q = u.useMemo(() => {
    const a = Ie[l] || {}, n = (U == null ? void 0 : U.filter((A) => A.role === l)) || [], c = __spreadValues({}, a);
    return n.forEach((A) => {
      c[A.permission] = A.enabled;
    }), Object.keys(E).forEach((A) => {
      c[A] = E[A];
    }), c;
  }, [l, U, E]), k = u.useMemo(() => {
    const a = __spreadValues({}, Ve);
    return (/* @__PURE__ */ new Set([...Object.keys(Ve), ...Object.keys(Ie.super_admin || {}), ...Object.keys(Q || {}), ...(U || []).map((c) => c.permission)])).forEach((c) => {
      a[c] || (a[c] = { name: c, displayName: oe(c), description: `Controls access for ${oe(c).toLowerCase()}.`, category: S(c), affectedComponents: ["Permission-gated admin features"] });
    }), a;
  }, [Q, U]), le = u.useMemo(() => {
    if (!T.trim()) return k;
    const a = T.toLowerCase();
    return Object.fromEntries(Object.entries(k).filter(([, n]) => n.displayName.toLowerCase().includes(a) || n.description.toLowerCase().includes(a) || n.name.toLowerCase().includes(a)));
  }, [T, k]), z = u.useMemo(() => {
    const a = cs(), n = {};
    return a.forEach((c) => {
      const A = Object.values(le).filter((ge) => ge.category === c);
      A.length > 0 && (n[c] = A);
    }), n;
  }, [le]), B = C({ mutationFn: (a) => __async(null, null, function* () {
    return yield (yield R("PUT", `/api/admin/permissions/${l}`, { permissions: a })).json();
  }), onSuccess: () => {
    f.invalidateQueries({ queryKey: ["/api/admin/permissions"] }), w({}), window.dispatchEvent(new Event("permissions:updated")), h({ title: "Success", description: `Permissions updated for ${l} role` });
  }, onError: (a) => {
    h({ title: "Error", description: a.message || "Failed to update permissions", variant: "destructive" });
  } }), de = C({ mutationFn: () => __async(null, null, function* () {
    return yield (yield R("POST", `/api/admin/permissions/reset/${l}`)).json();
  }), onSuccess: () => {
    f.invalidateQueries({ queryKey: ["/api/admin/permissions"] }), w({}), x(false), window.dispatchEvent(new Event("permissions:updated")), h({ title: "Success", description: `Permissions reset to default for ${l} role` });
  }, onError: (a) => {
    h({ title: "Error", description: a.message || "Failed to reset permissions", variant: "destructive" });
  } }), ce = C({ mutationFn: () => __async(null, null, function* () {
    return yield (yield R("POST", "/api/admin/roles", { roleKey: p.roleKey, displayName: p.displayName, description: p.description || null, copyPermissionsFrom: p.copyFrom || void 0 })).json();
  }), onSuccess: (a) => {
    f.invalidateQueries({ queryKey: ["/api/admin/roles"] }), f.invalidateQueries({ queryKey: ["/api/admin/permissions"] }), F(false), y({ roleKey: "", displayName: "", description: "", copyFrom: "" }), G(a.roleKey), h({ title: "Success", description: `Role "${a.displayName}" created successfully` });
  }, onError: (a) => {
    h({ title: "Error", description: a.message || "Failed to create role", variant: "destructive" });
  } }), me = C({ mutationFn: () => __async(null, null, function* () {
    return yield (yield R("PUT", `/api/admin/roles/${l}`, { displayName: P.displayName, description: P.description })).json();
  }), onSuccess: () => {
    f.invalidateQueries({ queryKey: ["/api/admin/roles"] }), j(false), h({ title: "Success", description: "Role updated successfully" });
  }, onError: (a) => {
    h({ title: "Error", description: a.message || "Failed to update role", variant: "destructive" });
  } }), ue = C({ mutationFn: () => __async(null, null, function* () {
    return yield (yield R("DELETE", `/api/admin/roles/${l}`)).json();
  }), onSuccess: () => {
    if (f.invalidateQueries({ queryKey: ["/api/admin/roles"] }), f.invalidateQueries({ queryKey: ["/api/admin/permissions"] }), v(false), b.length > 1) {
      const a = b.find((n) => n.roleKey !== l);
      G((a == null ? void 0 : a.roleKey) || "");
    }
    h({ title: "Success", description: "Role deleted successfully" });
  }, onError: (a) => {
    h({ title: "Error", description: a.message || "Failed to delete role", variant: "destructive" });
  } }), pe = (a, n) => {
    w((c) => __spreadProps(__spreadValues({}, c), { [a]: n }));
  }, Ee = () => {
    const a = Object.keys(E).map((n) => ({ permission: n, enabled: E[n] }));
    B.mutate(a);
  }, V = () => {
    de.mutate();
  }, Pe = (a) => {
    w({}), G(a);
  }, H = () => {
    const a = b.find((n) => n.roleKey === l);
    a && (D({ displayName: a.displayName, description: a.description || "" }), j(true));
  }, s = () => {
    if (!p.roleKey || !p.displayName) {
      h({ title: "Error", description: "Role key and display name are required", variant: "destructive" });
      return;
    }
    ce.mutate();
  }, i = () => {
    me.mutate();
  }, o = () => {
    ue.mutate();
  }, m = Object.keys(E).length > 0, d = b.find((a) => a.roleKey === l), Y = (_a = d == null ? void 0 : d.isSystemRole) != null ? _a : false;
  return $ || Ae ? e.jsx(Z, { className: r, children: e.jsxs(X, { children: [e.jsx(ee, { children: "Permission Management" }), e.jsx(xe, { children: "Loading permissions..." })] }) }) : e.jsxs(e.Fragment, { children: [e.jsxs(Z, { className: r, children: [e.jsx(X, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs(ee, { className: "flex items-center gap-2", children: [e.jsx(Qe, { className: "h-5 w-5" }), "Permission Management"] }), e.jsx(xe, { children: "Customize permissions for each role. Changes take effect immediately." })] }), e.jsxs("div", { className: "flex gap-2", children: [m && e.jsxs(g, { onClick: Ee, disabled: B.isPending, children: [e.jsx(ts, { className: "h-4 w-4 mr-2" }), "Save Changes (", Object.keys(E).length, ")"] }), e.jsxs(g, { variant: "outline", onClick: () => x(true), disabled: de.isPending, children: [e.jsx(rs, { className: "h-4 w-4 mr-2" }), "Reset to Default"] })] })] }) }), e.jsxs(fe, { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-end gap-3", children: [e.jsxs("div", { className: "flex-1", children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Select Role" }), e.jsxs(se, { value: l, onValueChange: Pe, children: [e.jsx(ae, { children: e.jsx(te, { placeholder: "Select a role" }) }), e.jsx(re, { children: b.map((a) => e.jsx(I, { value: a.roleKey, children: e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx("span", { children: a.displayName }), a.isSystemRole && e.jsx(q, { variant: "secondary", className: "text-xs", children: "System" }), a.usageCount && a.usageCount > 0 && e.jsxs(q, { variant: "outline", className: "text-xs", children: [a.usageCount, " users"] })] }) }, a.roleKey)) })] })] }), e.jsxs(g, { onClick: () => F(true), className: "gap-2", children: [e.jsx(ze, { className: "h-4 w-4" }), "Create Role"] }), d && e.jsxs(e.Fragment, { children: [e.jsxs(g, { variant: "outline", onClick: H, disabled: Y, className: "gap-2", children: [e.jsx(is, { className: "h-4 w-4" }), "Edit"] }), e.jsxs(g, { variant: "destructive", onClick: () => v(true), disabled: Y, className: "gap-2", children: [e.jsx(He, { className: "h-4 w-4" }), "Delete"] })] })] }), d && e.jsx("div", { className: "p-4 bg-muted rounded-lg", children: e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Display Name" }), e.jsx("p", { className: "font-medium", children: d.displayName })] }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Role Key" }), e.jsx("p", { className: "font-medium font-mono text-sm", children: d.roleKey })] }), d.description && e.jsxs("div", { className: "col-span-2", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Description" }), e.jsx("p", { className: "text-sm", children: d.description })] }), e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Type" }), e.jsx("p", { className: "font-medium", children: d.isSystemRole ? "System Role" : "Custom Role" })] }), d.usageCount !== void 0 && e.jsxs("div", { children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Users Assigned" }), e.jsx("p", { className: "font-medium", children: d.usageCount })] })] }) }), e.jsx("div", { children: e.jsxs("div", { className: "relative", children: [e.jsx(ns, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), e.jsx(N, { placeholder: "Search permissions...", value: T, onChange: (a) => ie(a.target.value), className: "pl-10" })] }) }), e.jsx("div", { className: "space-y-6", children: Object.entries(z).map(([a, n]) => e.jsxs("div", { className: "space-y-3", children: [e.jsx("h3", { className: "text-lg font-semibold", children: a }), e.jsx("div", { className: "space-y-2", children: n.map((c) => {
    var _a2;
    const A = (_a2 = Q[c.name]) != null ? _a2 : false, ge = c.name in E;
    return e.jsxs("div", { className: `flex items-start justify-between p-4 border rounded-lg ${ge ? "border-primary bg-primary/5" : ""}`, children: [e.jsxs("div", { className: "flex-1", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [e.jsx("span", { className: "font-medium", children: c.displayName }), ge && e.jsx(q, { variant: "outline", className: "text-xs", children: "Modified" })] }), e.jsx("p", { className: "text-sm text-muted-foreground mb-2", children: c.description }), e.jsxs("div", { className: "flex items-center gap-1 text-xs text-muted-foreground", children: [e.jsx(ds, { className: "h-3 w-3" }), e.jsxs("span", { children: ["Affects: ", c.affectedComponents.join(", ")] })] })] }), e.jsx($e, { checked: A, onCheckedChange: (Ye) => pe(c.name, Ye) })] }, c.name);
  }) })] }, a)) })] })] }), e.jsx(ye, { open: O, onOpenChange: F, children: e.jsxs(Ne, { children: [e.jsxs(je, { children: [e.jsx(ve, { children: "Create New Role" }), e.jsx(we, { children: "Create a new custom role with specific permissions." })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Role Key" }), e.jsx(N, { placeholder: "e.g., regional_manager", value: p.roleKey, onChange: (a) => y(__spreadProps(__spreadValues({}, p), { roleKey: a.target.value.toLowerCase().replace(/\s+/g, "_") })) }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Unique identifier (lowercase, underscores only)" })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Display Name" }), e.jsx(N, { placeholder: "e.g., Regional Manager", value: p.displayName, onChange: (a) => y(__spreadProps(__spreadValues({}, p), { displayName: a.target.value })) })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Description (Optional)" }), e.jsx(N, { placeholder: "What is this role for?", value: p.description, onChange: (a) => y(__spreadProps(__spreadValues({}, p), { description: a.target.value })) })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Copy Permissions From (Optional)" }), e.jsxs(se, { value: p.copyFrom || "none", onValueChange: (a) => y(__spreadProps(__spreadValues({}, p), { copyFrom: a === "none" ? "" : a })), children: [e.jsx(ae, { children: e.jsx(te, { placeholder: "Select a role to copy from" }) }), e.jsxs(re, { children: [e.jsx(I, { value: "none", children: "None - Start with defaults" }), b.map((a) => e.jsx(I, { value: a.roleKey, children: a.displayName }, a.roleKey))] })] })] })] }), e.jsxs(Ce, { children: [e.jsx(g, { variant: "outline", onClick: () => F(false), children: "Cancel" }), e.jsx(g, { onClick: s, disabled: ce.isPending, children: "Create Role" })] })] }) }), e.jsx(ye, { open: ne, onOpenChange: j, children: e.jsxs(Ne, { children: [e.jsxs(je, { children: [e.jsx(ve, { children: "Edit Role" }), e.jsx(we, { children: "Update the display name and description for this role." })] }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Display Name" }), e.jsx(N, { value: P.displayName, onChange: (a) => D(__spreadProps(__spreadValues({}, P), { displayName: a.target.value })) })] }), e.jsxs("div", { children: [e.jsx("label", { className: "text-sm font-medium mb-2 block", children: "Description" }), e.jsx(N, { value: P.description, onChange: (a) => D(__spreadProps(__spreadValues({}, P), { description: a.target.value })) })] })] }), e.jsxs(Ce, { children: [e.jsx(g, { variant: "outline", onClick: () => j(false), children: "Cancel" }), e.jsx(g, { onClick: i, disabled: me.isPending, children: "Update Role" })] })] }) }), e.jsx(Se, { open: K, onOpenChange: x, children: e.jsxs(be, { children: [e.jsxs(Me, { children: [e.jsx(Re, { children: "Reset Permissions to Default?" }), e.jsxs(Te, { children: ["This will remove all custom permission settings for the ", e.jsx("strong", { children: d == null ? void 0 : d.displayName }), " role and restore the default permissions. This action cannot be undone."] })] }), e.jsxs(Oe, { children: [e.jsx(De, { children: "Cancel" }), e.jsx(Ue, { onClick: V, children: "Reset Permissions" })] })] }) }), e.jsx(Se, { open: L, onOpenChange: v, children: e.jsxs(be, { children: [e.jsxs(Me, { children: [e.jsx(Re, { children: "Delete Role?" }), e.jsxs(Te, { children: ["Are you sure you want to delete the ", e.jsx("strong", { children: d == null ? void 0 : d.displayName }), " role? This action cannot be undone."] })] }), e.jsxs(Oe, { children: [e.jsx(De, { children: "Cancel" }), e.jsx(Ue, { onClick: o, className: "bg-destructive", children: "Delete Role" })] })] }) })] });
}
function ia() {
  const { admin: r } = Ze(), { toast: l } = qe(), [G, T] = u.useState(false), [ie, E] = u.useState(null), [w, K] = u.useState({ newPassword: "", confirmPassword: "" }), [x, O] = u.useState({ email: "", fullName: "", password: "", role: "manager", phoneNumber: "" }), [F, ne] = u.useState([]), [j, L] = u.useState(null), [v, p] = u.useState({ fullName: "", phoneNumber: "", receiveEmails: true }), [y, P] = u.useState(null), [D, h] = u.useState(""), { data: f, isLoading: oe } = W({ queryKey: ["/api/admin/admin-users"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/admin-users", { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!s.ok) throw new Error("Failed to fetch admin users");
    return s.json();
  }) }), { data: S } = W({ queryKey: ["/api/admin/outlets"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/outlets", { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!s.ok) throw new Error("Failed to fetch outlets");
    return s.json();
  }), staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: b = [] } = W({ queryKey: ["/api/admin/roles"], queryFn: () => __async(null, null, function* () {
    const s = yield fetch("/api/admin/roles", { headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!s.ok) throw new Error("Failed to fetch roles");
    return s.json();
  }) }), $ = C({ mutationFn: (s) => __async(null, null, function* () {
    const i = yield fetch("/api/admin/admin-users", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify(s) });
    if (!i.ok) {
      const o = yield i.json();
      throw new Error(o.message || "Failed to create user");
    }
    return i.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), T(false), O({ email: "", fullName: "", password: "", role: "manager", phoneNumber: "" }), ne([]), l({ title: "User created", description: "Admin user created successfully" });
  }, onError: (s) => {
    l({ title: "Failed to create user", description: s.message, variant: "destructive" });
  } }), U = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, outletId: i }) {
    const o = yield fetch(`/api/admin/admin-users/${s}/outlets`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify({ outletId: i }) });
    if (!o.ok) {
      const m = yield o.json();
      throw new Error(m.message || "Failed to assign user to outlet");
    }
    return o.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), l({ title: "User assigned", description: "User assigned to outlet successfully" });
  }, onError: (s) => {
    l({ title: "Failed to assign user", description: s.message, variant: "destructive" });
  } }), Ae = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, outletIds: i }) {
    return { assigned: (yield Promise.all(i.map((m) => __async(null, null, function* () {
      const d = yield fetch(`/api/admin/admin-users/${s}/outlets`, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify({ outletId: m }) });
      if (!d.ok) {
        const Y = yield d.json().catch(() => ({}));
        throw new Error(Y.message || `Failed to assign outlet ${m}`);
      }
      return d.json();
    })))).length };
  }), onSuccess: (s) => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), l({ title: "Outlets assigned", description: `Assigned ${s.assigned} outlet(s) successfully` });
  }, onError: (s) => {
    l({ title: "Failed to assign outlets", description: s.message, variant: "destructive" });
  } }), Q = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, outletId: i }) {
    const o = yield fetch(`/api/admin/admin-users/${s}/outlets/${i}`, { method: "DELETE", headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` } });
    if (!o.ok) {
      const m = yield o.json();
      throw new Error(m.message || "Failed to remove user from outlet");
    }
    return o.status === 204 ? { success: true } : o.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), l({ title: "User removed", description: "User removed from outlet successfully" });
  }, onError: (s) => {
    l({ title: "Failed to remove user", description: s.message, variant: "destructive" });
  } }), k = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, newPassword: i }) {
    const o = yield R("PUT", `/api/admin/admin-users/${s}/password`, { newPassword: i });
    if (!o.ok) {
      const m = yield o.json();
      throw new Error(m.message || "Failed to change password");
    }
    return o.json();
  }), onSuccess: () => {
    l({ title: "Password changed", description: "User password updated successfully" }), E(null), K({ newPassword: "", confirmPassword: "" });
  }, onError: (s) => {
    l({ title: "Failed to change password", description: s.message, variant: "destructive" });
  } }), le = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, role: i }) {
    const o = yield R("PUT", `/api/admin/admin-users/${s}/role`, { role: i });
    if (!o.ok) {
      const m = yield o.json();
      throw new Error(m.message || "Failed to change user role");
    }
    return o.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), l({ title: "Role updated", description: "User role changed successfully" });
  }, onError: (s) => {
    l({ title: "Failed to change role", description: s.message, variant: "destructive" });
  } }), z = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, password: i }) {
    const o = yield fetch(`/api/admin/admin-users/${s}`, { method: "DELETE", headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("adminToken")}` }, body: JSON.stringify({ password: i }) });
    if (!o.ok) {
      const m = o.headers.get("content-type");
      if (m && m.includes("application/json")) {
        const d = yield o.json();
        throw new Error(d.message || "Failed to delete admin user");
      }
      throw new Error(`Failed to delete admin user (${o.status})`);
    }
    return o.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), P(null), h(""), l({ title: "Admin user deleted", description: "The admin user has been deleted" });
  }, onError: (s) => {
    l({ title: "Failed to delete admin user", description: s.message, variant: "destructive" });
  } }), B = C({ mutationFn: (_0) => __async(null, [_0], function* ({ userId: s, fullName: i, phoneNumber: o, receiveEmails: m }) {
    const [d, Y] = yield Promise.all([R("PUT", `/api/admin/admin-users/${s}/profile`, { fullName: i, phoneNumber: o }), R("PUT", `/api/admin/admin-users/${s}/email-preference`, { receiveEmails: m })]);
    if (!d.ok) {
      const Fe = yield d.json();
      throw new Error(Fe.message || "Failed to update profile");
    }
    return d.json();
  }), onSuccess: () => {
    _.invalidateQueries({ queryKey: ["/api/admin/admin-users"] }), L(null), l({ title: "Profile updated", description: "Admin user profile updated successfully" });
  }, onError: (s) => {
    l({ title: "Failed to update profile", description: s.message, variant: "destructive" });
  } }), de = (s) => __async(null, null, function* () {
    s.preventDefault(), $.mutate(__spreadProps(__spreadValues({}, x), { outletIds: F }));
  }), ce = (s) => __async(null, null, function* () {
    if (s.preventDefault(), w.newPassword !== w.confirmPassword) {
      l({ title: "Password mismatch", description: "New password and confirmation do not match", variant: "destructive" });
      return;
    }
    if (w.newPassword.length < 6) {
      l({ title: "Password too short", description: "Password must be at least 6 characters long", variant: "destructive" });
      return;
    }
    ie && k.mutate({ userId: ie.id, newPassword: w.newPassword });
  }), me = (s) => __async(null, null, function* () {
    if (s.preventDefault(), !!j) {
      if (!v.fullName.trim()) {
        l({ title: "Validation error", description: "Full name is required", variant: "destructive" });
        return;
      }
      B.mutate({ userId: j.id, fullName: v.fullName.trim(), phoneNumber: v.phoneNumber.trim(), receiveEmails: v.receiveEmails });
    }
  }), ue = (s) => {
    switch (s) {
      case "super_admin":
        return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400";
      case "admin":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      case "manager":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "order_manager":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  }, pe = (r == null ? void 0 : r.role) === "super_admin" || (r == null ? void 0 : r.role) === "admin", Ee = (r == null ? void 0 : r.role) === "super_admin", V = (s) => (r == null ? void 0 : r.role) === "super_admin" || (r == null ? void 0 : r.role) === "admin" && (s === "manager" || s === "order_manager" || s === "sales"), Pe = () => {
    !y || !D || z.mutate({ userId: y.id, password: D });
  }, H = () => (r == null ? void 0 : r.role) === "super_admin" ? b : (r == null ? void 0 : r.role) === "admin" ? b.filter((s) => !s.isSystemRole || ["manager", "order_manager"].includes(s.roleKey)) : [];
  return oe ? e.jsx(Ge, { currentPage: "rbac-users", children: e.jsx("div", { className: "flex items-center justify-center h-64", children: e.jsx(J, { className: "h-8 w-8 animate-spin text-#F02819" }) }) }) : e.jsxs(Ge, { currentPage: "rbac-users", children: [e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsxs("div", { children: [e.jsx("h2", { className: "text-3xl font-bold tracking-tight", children: "RBAC Management" }), e.jsx("p", { className: "text-muted-foreground", children: "Manage admin users and role permissions" })] }) }), e.jsxs(es, { defaultValue: "users", className: "space-y-6", children: [e.jsxs(ss, { className: "grid w-full max-w-md grid-cols-2", children: [e.jsxs(ke, { value: "users", className: "flex items-center gap-2", children: [e.jsx(Le, { className: "h-4 w-4" }), "Admin Users"] }), (r == null ? void 0 : r.role) === "super_admin" && e.jsxs(ke, { value: "permissions", className: "flex items-center gap-2", children: [e.jsx(as, { className: "h-4 w-4" }), "Permission Management"] })] }), e.jsxs(_e, { value: "users", className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-xl font-semibold", children: "Admin Users" }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Manage admin users and their permissions (", r == null ? void 0 : r.role, " access)"] })] }), e.jsx(he, { permission: "manageUsers", children: pe && e.jsxs(g, { onClick: () => T(true), className: "bg-red-600 hover:bg-red-700 text-white", children: [e.jsx(ze, { className: "mr-2 h-4 w-4" }), "Add User"] }) })] }), e.jsxs(Z, { children: [e.jsx(X, { children: e.jsxs(ee, { className: "flex items-center gap-2", children: [e.jsx(Qe, { className: "h-5 w-5" }), "Your Access Level"] }) }), e.jsx(fe, { children: e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsx(q, { className: ue((r == null ? void 0 : r.role) || ""), children: Ke(r == null ? void 0 : r.role) }), e.jsxs("span", { className: "text-sm text-muted-foreground", children: [r == null ? void 0 : r.fullName, " (", r == null ? void 0 : r.email, ")"] }), (r == null ? void 0 : r.adminUserOutlets) && r.adminUserOutlets.length > 0 && e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Be, { className: "h-4 w-4" }), e.jsxs("span", { className: "text-sm", children: ["Assigned to: ", r.adminUserOutlets.map((s) => s.outlet.name).join(", ")] })] })] }) })] }), G && pe && e.jsxs(Z, { children: [e.jsxs(X, { children: [e.jsx(ee, { children: "Create Admin User" }), e.jsx(xe, { children: "Add a new admin user with specific role permissions" })] }), e.jsx(fe, { children: e.jsxs("form", { onSubmit: de, className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(M, { htmlFor: "email", children: "Email" }), e.jsx(N, { id: "email", type: "email", value: x.email, onChange: (s) => O(__spreadProps(__spreadValues({}, x), { email: s.target.value })), required: true })] }), e.jsxs("div", { children: [e.jsx(M, { htmlFor: "fullName", children: "Full Name" }), e.jsx(N, { id: "fullName", value: x.fullName, onChange: (s) => O(__spreadProps(__spreadValues({}, x), { fullName: s.target.value })), required: true })] })] }), e.jsx("div", { className: "grid grid-cols-2 gap-4", children: e.jsxs("div", { children: [e.jsx(M, { htmlFor: "phoneNumber", children: "Phone Number" }), e.jsx(N, { id: "phoneNumber", type: "tel", value: x.phoneNumber, onChange: (s) => O(__spreadProps(__spreadValues({}, x), { phoneNumber: s.target.value })), placeholder: "08012345678" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Used for payout approval OTP via SMS" })] }) }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(M, { htmlFor: "password", children: "Password" }), e.jsx(N, { id: "password", type: "password", value: x.password, onChange: (s) => O(__spreadProps(__spreadValues({}, x), { password: s.target.value })), required: true })] }), e.jsxs("div", { children: [e.jsx(M, { htmlFor: "role", children: "Role" }), e.jsxs(se, { value: x.role, onValueChange: (s) => O(__spreadProps(__spreadValues({}, x), { role: s })), children: [e.jsx(ae, { children: e.jsx(te, {}) }), e.jsx(re, { children: H().map((s) => e.jsx(I, { value: s.roleKey, children: s.displayName }, s.roleKey)) })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(M, { children: "Assign Outlets (optional)" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Assigning outlets scopes this admin to those outlets and their brands. Leave empty for access to all outlets/brands." }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 max-h-56 overflow-auto border rounded-md p-3", children: S != null && S.length ? S.map((s) => e.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [e.jsx("input", { type: "checkbox", checked: F.includes(s.id), onChange: (i) => {
    ne((o) => i.target.checked ? Array.from(/* @__PURE__ */ new Set([...o, s.id])) : o.filter((m) => m !== s.id));
  } }), e.jsx("span", { children: s.name })] }, s.id)) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "No outlets available." }) })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(g, { type: "submit", disabled: $.isPending, className: "bg-red-600 hover:bg-red-700 text-white", children: [$.isPending && e.jsx(J, { className: "mr-2 h-4 w-4 animate-spin" }), "Create User"] }), e.jsx(g, { type: "button", variant: "outline", onClick: () => T(false), children: "Cancel" })] })] }) })] }), e.jsxs(Z, { children: [e.jsxs(X, { children: [e.jsxs(ee, { className: "flex items-center gap-2", children: [e.jsx(Le, { className: "h-5 w-5" }), "Admin Users"] }), e.jsxs(xe, { children: [(f == null ? void 0 : f.length) || 0, " users found"] })] }), e.jsx(fe, { children: e.jsxs("div", { className: "space-y-4", children: [f == null ? void 0 : f.map((s) => e.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsx("h4", { className: "font-semibold", children: s.fullName }), e.jsx(q, { className: ue(s.role), children: Ke(s.role) }), !s.isActive && e.jsx(q, { variant: "secondary", children: "Inactive" })] }), e.jsx(he, { permission: "viewUserEmails", fallback: e.jsx("p", { className: "text-sm text-muted-foreground", children: "***@***.com" }), children: e.jsxs("p", { className: "text-sm text-muted-foreground", children: [s.email, s.phoneNumber && e.jsxs("span", { className: "ml-2", children: ["\xB7 ", s.phoneNumber] })] }) }), s.adminUserOutlets.length > 0 && e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [e.jsx(Be, { className: "h-3 w-3" }), e.jsxs("div", { className: "flex flex-wrap gap-1", children: [e.jsx("span", { className: "mr-1", children: "Outlets:" }), s.adminUserOutlets.map((i) => e.jsxs("div", { className: "flex items-center gap-1 bg-gray-100 rounded px-2 py-1", children: [e.jsx("span", { children: i.outlet.name }), V(s.role) && e.jsx("button", { onClick: () => Q.mutate({ userId: s.id, outletId: i.outletId }), className: "text-red-500 hover:text-red-700 ml-1", title: "Remove from outlet", children: "\xD7" })] }, i.id))] })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(he, { permission: "changeUserRoles", children: V(s.role) && H().length > 0 && e.jsxs(se, { onValueChange: (i) => le.mutate({ userId: s.id, role: i }), value: s.role, children: [e.jsx(ae, { className: "w-40", children: e.jsx(te, { placeholder: "Change role" }) }), e.jsx(re, { children: H().map((i) => e.jsx(I, { value: i.roleKey, children: i.displayName }, i.roleKey)) })] }) }), V(s.role) && S && S.length > 0 && e.jsxs(se, { onValueChange: (i) => {
    if (i === "__all__") {
      const o = S.filter((m) => !s.adminUserOutlets.some((d) => d.outletId === m.id)).map((m) => m.id);
      if (o.length === 0) return;
      Ae.mutate({ userId: s.id, outletIds: o });
      return;
    }
    U.mutate({ userId: s.id, outletId: parseInt(i, 10) });
  }, children: [e.jsx(ae, { className: "w-48", children: e.jsx(te, { placeholder: "Assign to outlet" }) }), e.jsxs(re, { children: [S.filter((i) => !s.adminUserOutlets.some((o) => o.outletId === i.id)).length > 0 && e.jsx(I, { value: "__all__", children: "All outlets" }), S.filter((i) => !s.adminUserOutlets.some((o) => o.outletId === i.id)).map((i) => e.jsx(I, { value: i.id.toString(), children: i.name }, i.id))] })] }), (V(s.role) || s.id === (r == null ? void 0 : r.id)) && e.jsxs(g, { variant: "outline", size: "sm", onClick: () => {
    L(s), p({ fullName: s.fullName, phoneNumber: s.phoneNumber || "", receiveEmails: s.receiveEmails !== false });
  }, children: [e.jsx(os, { className: "h-4 w-4 mr-2" }), "Edit Profile"] }), e.jsx(he, { permission: "viewUserPasswords", children: (r == null ? void 0 : r.role) === "super_admin" && e.jsxs(ye, { children: [e.jsx(Xe, { asChild: true, children: e.jsxs(g, { variant: "outline", size: "sm", onClick: () => {
    E(s), K({ newPassword: "", confirmPassword: "" });
  }, children: [e.jsx(ls, { className: "h-4 w-4 mr-2" }), "Change Password"] }) }), e.jsxs(Ne, { children: [e.jsxs(je, { children: [e.jsx(ve, { children: "Change Password" }), e.jsxs(we, { children: ["Set a new password for ", s.fullName, " (", s.email, ")"] })] }), e.jsxs("form", { onSubmit: ce, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(M, { htmlFor: "newPassword", children: "New Password" }), e.jsx(N, { id: "newPassword", type: "password", value: w.newPassword, onChange: (i) => K(__spreadProps(__spreadValues({}, w), { newPassword: i.target.value })), required: true, minLength: 6 }), e.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Password must be at least 6 characters long" })] }), e.jsxs("div", { children: [e.jsx(M, { htmlFor: "confirmPassword", children: "Confirm New Password" }), e.jsx(N, { id: "confirmPassword", type: "password", value: w.confirmPassword, onChange: (i) => K(__spreadProps(__spreadValues({}, w), { confirmPassword: i.target.value })), required: true, minLength: 6 })] }), e.jsx(Ce, { children: e.jsxs(g, { type: "submit", disabled: k.isPending, className: "bg-red-600 hover:bg-red-700", children: [k.isPending && e.jsx(J, { className: "mr-2 h-4 w-4 animate-spin" }), "Change Password"] }) })] })] })] }) }), Ee && s.id !== (r == null ? void 0 : r.id) && e.jsxs(g, { variant: "outline", size: "sm", className: "text-red-600 hover:text-red-700 hover:bg-red-50", onClick: () => {
    P(s), h("");
  }, children: [e.jsx(He, { className: "h-4 w-4 mr-2" }), "Delete"] })] })] }, s.id)), (!f || f.length === 0) && e.jsx("div", { className: "text-center py-8 text-muted-foreground", children: "No admin users found" })] }) })] })] }), (r == null ? void 0 : r.role) === "super_admin" && e.jsxs(_e, { value: "permissions", className: "space-y-6", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-xl font-semibold mb-2", children: "Permission Management" }), e.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Customize permissions for each role. Changes take effect immediately." })] }), e.jsx(ms, {})] })] })] }), e.jsx(ye, { open: !!j, onOpenChange: (s) => {
    s || L(null);
  }, children: e.jsxs(Ne, { children: [e.jsxs(je, { children: [e.jsx(ve, { children: "Edit Profile" }), e.jsxs(we, { children: ["Update profile for ", j == null ? void 0 : j.fullName, " (", j == null ? void 0 : j.email, ")"] })] }), e.jsxs("form", { onSubmit: me, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(M, { htmlFor: "editFullName", children: "Full Name" }), e.jsx(N, { id: "editFullName", value: v.fullName, onChange: (s) => p(__spreadProps(__spreadValues({}, v), { fullName: s.target.value })), required: true, placeholder: "Enter full name" })] }), e.jsxs("div", { children: [e.jsx(M, { htmlFor: "editPhoneNumber", children: "Phone Number" }), e.jsx(N, { id: "editPhoneNumber", type: "tel", value: v.phoneNumber, onChange: (s) => p(__spreadProps(__spreadValues({}, v), { phoneNumber: s.target.value })), placeholder: "08012345678" }), e.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Used for payout approval OTP via SMS" })] }), e.jsxs("div", { className: "flex items-center justify-between rounded-md border px-3 py-2", children: [e.jsxs("div", { children: [e.jsx(M, { children: "Receive Email Notifications" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Turn off to stop all email notifications for this user" })] }), e.jsx($e, { checked: v.receiveEmails, onCheckedChange: (s) => p(__spreadProps(__spreadValues({}, v), { receiveEmails: s })) })] }), e.jsxs(Ce, { children: [e.jsx(g, { type: "button", variant: "outline", onClick: () => L(null), children: "Cancel" }), e.jsxs(g, { type: "submit", disabled: B.isPending, children: [B.isPending && e.jsx(J, { className: "mr-2 h-4 w-4 animate-spin" }), "Save Changes"] })] })] })] }) }), e.jsx(Se, { open: !!y, onOpenChange: (s) => !s && P(null), children: e.jsxs(be, { children: [e.jsxs(Me, { children: [e.jsx(Re, { className: "text-red-600", children: "Delete Admin User" }), e.jsxs(Te, { className: "space-y-3", children: [e.jsxs("p", { children: ["You are about to permanently delete the admin user ", e.jsx("strong", { children: y == null ? void 0 : y.fullName }), " (", y == null ? void 0 : y.email, ")."] }), e.jsx("p", { className: "text-red-600 font-medium", children: "\u26A0\uFE0F This action cannot be undone. The user will lose all access to the admin panel." }), e.jsx("p", { children: "To confirm this action, please enter your password below:" }), e.jsx(N, { type: "password", placeholder: "Enter your password to confirm", value: D, onChange: (s) => h(s.target.value), className: "mt-2" })] })] }), e.jsxs(Oe, { children: [e.jsx(De, { onClick: () => {
    P(null), h("");
  }, children: "Cancel" }), e.jsxs(Ue, { onClick: Pe, disabled: !D || z.isPending, className: "bg-red-600 hover:bg-red-700", children: [z.isPending && e.jsx(J, { className: "mr-2 h-4 w-4 animate-spin" }), "Delete Admin User"] })] })] }) })] });
}
export { ia as default };
