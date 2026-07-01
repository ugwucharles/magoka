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
import { r as o, c as hs, V as xs, b as I, W as g, j as e, B as A, a2 as T, E as D, H as se, I as te, Z as ae, F as G } from "./index-DOfu0sXg.js";
import { u as k } from "./useMutation-CVmbONMy.js";
import { u as gs, A as fs, S as vs } from "./admin-layout-DH7sAIhq.js";
import { B as i } from "./badge-BAjaXL1S.js";
import { D as Re, a as _e, b as Me, c as De, d as Ge, f as js } from "./dialog-BUvIuveX.js";
import { I as ie } from "./input-FyV2XACZ.js";
import { L as K } from "./label-B38UEnoM.js";
import { S as Ke, a as Qe, b as Ue, c as Be, d as Ve } from "./select-ets7bQkN.js";
import { S as ys } from "./separator-B__B0Kv_.js";
import { S as Q } from "./switch-DvySixFh.js";
import { T as bs, a as Ns, b as fe, c as ve } from "./tabs-qGTQ6MVs.js";
import { T as ws } from "./textarea-__Yhw9VH.js";
import { A as Ss } from "./activity-CG8KHg7p.js";
import { R as As } from "./refresh-cw-C5dId60a.js";
import { M as Cs } from "./map-pin-ChG4yLkU.js";
import { Z as Ps } from "./zap-BL35eo9v.js";
import { S as ne } from "./search-BFN4Wc19.js";
import { P as Os } from "./package-CpPTLD0o.js";
import { S as Is } from "./sparkles-CLmY5P9m.js";
import { S as Ts } from "./store-Cr0AuVYD.js";
import { S as ks } from "./star-o2YGpjzJ.js";
import { C as Es } from "./chevron-left-Cnh0-uPi.js";
import { C as Fs } from "./chevron-right-DkUlsPHD.js";
import "./Combination-C65a2kPq.js";
import "./index-D5alJfFq.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
import "./plus-xl2HqeIg.js";
import "./mail-WBbfgCoF.js";
import "./image-Cm0cVFFU.js";
import "./truck-BHJTFh2e.js";
import "./users-CBtjfzvJ.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./index-CxKYTSZE.js";
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
import "./check-AkIa94Y-.js";
import "./index-Czlrzsbg.js";
const $s = [{ value: "out_of_stock", label: "Out of stock" }, { value: "low_demand", label: "Low demand" }, { value: "ingredient_unavailable", label: "Ingredient unavailable" }, { value: "staff_issue", label: "Staff issue" }, { value: "other", label: "Other" }], y = 12;
function re(h) {
  const p = Number(h != null ? h : 0);
  return Number.isFinite(p) ? p.toLocaleString() : "0";
}
function je(h, p) {
  const a = p.trim().toLowerCase();
  return a ? h.map((C) => String(C != null ? C : "").toLowerCase()).join(" ").includes(a) : true;
}
function ye({ page: h, totalPages: p, onPageChange: a }) {
  return p <= 1 ? null : e.jsxs("div", { className: "flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between", children: [e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Page ", h, " of ", p] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsxs(A, { type: "button", variant: "outline", size: "sm", onClick: () => a(h - 1), disabled: h <= 1, className: "gap-2", children: [e.jsx(Es, { className: "h-4 w-4" }), "Previous"] }), e.jsxs(A, { type: "button", variant: "outline", size: "sm", onClick: () => a(h + 1), disabled: h >= p, className: "gap-2", children: ["Next", e.jsx(Fs, { className: "h-4 w-4" })] })] })] });
}
function Ct() {
  var qe;
  const [h, p] = o.useState("products"), [a, C] = o.useState(() => localStorage.getItem("productAvailability_selectedOutletId") || ""), [d, be] = o.useState(null), [We, U] = o.useState({}), [Ze, le] = o.useState(false), [E, oe] = o.useState(null), [P, B] = o.useState(""), [de, V] = o.useState(""), [v, Ne] = o.useState(""), [ce, He] = o.useState(""), [ue, Xe] = o.useState(""), [me, Je] = o.useState(""), [F, $] = o.useState(1), [L, q] = o.useState(1), [z, R] = o.useState(1), { toast: m } = hs(), j = xs(), { selectedBrandId: u } = gs();
  o.useEffect(() => {
    if (a) {
      localStorage.setItem("productAvailability_selectedOutletId", a);
      return;
    }
    localStorage.removeItem("productAvailability_selectedOutletId");
  }, [a]), o.useEffect(() => {
    U({}), $(1), q(1), R(1);
  }, [a]), o.useEffect(() => {
    $(1);
  }, [ce]), o.useEffect(() => {
    q(1);
  }, [ue]), o.useEffect(() => {
    R(1);
  }, [me]), o.useEffect(() => {
    $(1), q(1), R(1);
  }, [v]);
  const { data: f = [], isLoading: Ye } = I({ queryKey: ["/api/admin/outlets-rbac", u], queryFn: () => __async(null, null, function* () {
    return (yield g("GET", "/api/admin/outlets-rbac")).json();
  }), enabled: !!u, staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false });
  o.useEffect(() => {
    if (!f.length) {
      a && C("");
      return;
    }
    if (!a) {
      f.length === 1 && C(f[0].id.toString());
      return;
    }
    f.some((t) => t.id.toString() === a) || C(f.length === 1 ? f[0].id.toString() : "");
  }, [f, a]);
  const { data: es = [], isLoading: ss } = I({ queryKey: ["/api/admin/categories", u], enabled: !!u, staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), { data: W = [], isLoading: we, refetch: pe } = I({ queryKey: ["/api/admin/products/availability", a, u], queryFn: () => __async(null, null, function* () {
    return a ? (yield g("GET", `/api/admin/products/availability/${a}`)).json() : [];
  }), enabled: !!a && !!u, staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: Z, isLoading: ts } = I({ queryKey: ["/api/admin/products", d == null ? void 0 : d.id, "details"], queryFn: () => __async(null, null, function* () {
    return d != null && d.id ? (yield g("GET", `/api/admin/products/${d.id}/details`)).json() : null;
  }), enabled: !!(d != null && d.id), staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: he = [], isLoading: Se } = I({ queryKey: ["/api/admin/product-availability/options", a, u], queryFn: () => __async(null, null, function* () {
    return a ? (yield g("GET", `/api/admin/product-availability/options?outletId=${a}`)).json() : [];
  }), enabled: !!a && !!u, staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: xe = [], isLoading: Ae } = I({ queryKey: ["/api/admin/product-availability/addons", a, u], queryFn: () => __async(null, null, function* () {
    return a ? (yield g("GET", `/api/admin/product-availability/addons?outletId=${a}`)).json() : [];
  }), enabled: !!a && !!u, staleTime: 3e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), Ce = k({ mutationFn: (_0) => __async(null, [_0], function* ({ productId: s, outletId: t, isAvailable: n, reason: r, customReason: l }) {
    return (yield g("POST", `/api/admin/products/${s}/availability`, { outletId: t, isAvailable: n, customPrice: null, reason: r, customReason: l })).json();
  }), onSuccess: (s, t) => {
    j.setQueryData(["/api/admin/products/availability", a, u], (r) => r && r.map((l) => l.id !== t.productId ? l : __spreadProps(__spreadValues({}, l), { availability: { id: s.id, productId: s.productId, outletId: s.outletId, isAvailable: s.isAvailable, stockQuantity: s.stockQuantity || null, priceOverride: s.priceOverride || null, customizationGroupAvailability: s.customizationGroupAvailability || {}, customizationOptionAvailability: s.customizationOptionAvailability || {} } })));
    const n = `${t.productId}-${t.outletId}`;
    setTimeout(() => {
      U((r) => {
        const l = __spreadValues({}, r);
        return delete l[n], l;
      });
    }, 100), m({ title: "Availability updated", description: `Product ${t.isAvailable ? "enabled" : "disabled"} for this outlet` });
  }, onError: (s, t) => {
    const n = `${t.productId}-${t.outletId}`;
    U((r) => {
      const l = __spreadValues({}, r);
      return delete l[n], l;
    }), m({ title: "Update failed", description: s.message || "Failed to update product availability", variant: "destructive" });
  } }), Pe = k({ mutationFn: (_0) => __async(null, [_0], function* ({ productId: s, outletId: t, groupId: n, isAvailable: r }) {
    return (yield g("PUT", `/api/admin/products/${s}/availability/group`, { outletId: t, groupId: n, isAvailable: r })).json();
  }), onSuccess: (s, t) => __async(null, null, function* () {
    yield j.invalidateQueries({ queryKey: ["/api/admin/products/availability", a, u] }), yield j.invalidateQueries({ queryKey: ["/api/admin/products", t.productId, "details"] }), pe(), m({ title: "Group updated", description: "Customization group availability updated for this outlet" });
  }), onError: (s) => {
    m({ title: "Update failed", description: s.message || "Failed to update customization group availability", variant: "destructive" });
  } }), Oe = k({ mutationFn: (_0) => __async(null, [_0], function* ({ productId: s, outletId: t, optionId: n, isAvailable: r }) {
    return (yield g("PUT", `/api/admin/products/${s}/availability/option`, { outletId: t, optionId: n, isAvailable: r })).json();
  }), onSuccess: (s, t) => __async(null, null, function* () {
    yield j.invalidateQueries({ queryKey: ["/api/admin/products/availability", a, u] }), yield j.invalidateQueries({ queryKey: ["/api/admin/products", t.productId, "details"] }), pe(), m({ title: "Option updated", description: "Customization option availability updated for this outlet" });
  }), onError: (s) => {
    m({ title: "Update failed", description: s.message || "Failed to update customization option availability", variant: "destructive" });
  } }), Ie = k({ mutationFn: (_0) => __async(null, [_0], function* ({ optionId: s, isAvailable: t }) {
    if (!a) throw new Error("Select an outlet first");
    return (yield g("PUT", `/api/admin/product-availability/options/${s}`, { outletId: Number(a), isAvailable: t })).json();
  }), onSuccess: (s, t) => __async(null, null, function* () {
    yield j.invalidateQueries({ queryKey: ["/api/admin/product-availability/options", a, u] }), yield j.invalidateQueries({ queryKey: ["/api/admin/products/availability", a, u] }), m({ title: "Option updated", description: `Option ${t.isAvailable ? "enabled" : "disabled"} across linked products for this outlet` });
  }), onError: (s) => {
    m({ title: "Update failed", description: s.message || "Failed to update outlet option availability", variant: "destructive" });
  } }), Te = k({ mutationFn: (_0) => __async(null, [_0], function* ({ addonProductId: s, isAvailable: t }) {
    if (!a) throw new Error("Select an outlet first");
    return (yield g("PUT", `/api/admin/product-availability/addons/${s}`, { outletId: Number(a), isAvailable: t })).json();
  }), onSuccess: (s, t) => __async(null, null, function* () {
    yield j.invalidateQueries({ queryKey: ["/api/admin/product-availability/addons", a, u] }), yield j.invalidateQueries({ queryKey: ["/api/admin/products/availability", a, u] }), m({ title: "Add-on updated", description: `Add-on ${t.isAvailable ? "enabled" : "disabled"} for this outlet` });
  }), onError: (s) => {
    m({ title: "Update failed", description: s.message || "Failed to update outlet add-on availability", variant: "destructive" });
  } }), ge = k({ mutationFn: () => __async(null, null, function* () {
    return (yield g("POST", "/api/admin/products/migrate-availability", {})).json();
  }), onSuccess: (s) => {
    m({ title: "Availability synced", description: `Created ${s.stats.recordsCreated} availability records for ${s.stats.totalProducts} products across ${s.stats.totalOutlets} outlets.` }), pe();
  }, onError: (s) => {
    m({ title: "Sync failed", description: s.message || "Failed to migrate product availability", variant: "destructive" });
  } }), x = f.find((s) => s.id === Number(a)), b = {};
  for (const s of es) b[s.id] = s;
  const as = [...W].sort((s, t) => {
    var _a, _b, _c, _d;
    var _, M, ee, ze;
    const n = (_a = (_ = b[s.categoryId]) == null ? void 0 : _.sortOrder) != null ? _a : Number.MAX_SAFE_INTEGER, r = (_b = (M = b[t.categoryId]) == null ? void 0 : M.sortOrder) != null ? _b : Number.MAX_SAFE_INTEGER;
    if (n !== r) return n - r;
    const l = (_c = (ee = b[s.categoryId]) == null ? void 0 : ee.name) != null ? _c : "", c = (_d = (ze = b[t.categoryId]) == null ? void 0 : ze.name) != null ? _d : "", Y = l.localeCompare(c);
    return Y !== 0 ? Y : s.name.localeCompare(t.name);
  }), is = v || ce, ns = v || ue, rs = v || me, N = as.filter((s) => {
    var t;
    return je([s.name, s.description, (t = b[s.categoryId]) == null ? void 0 : t.name, s.basePrice], is);
  }), w = he.filter((s) => je([s.name, s.groupName, s.description, s.extraPrice, s.linkedProductsCount], ns)), S = xe.filter((s) => {
    var t, n;
    return je([(t = s.addonProduct) == null ? void 0 : t.name, (n = s.addonProduct) == null ? void 0 : n.basePrice, s.linkedProductsCount, s.directAssignments, s.presetAssignments, s.sharedAssignments], rs);
  }), H = Math.max(1, Math.ceil(N.length / y)), X = Math.max(1, Math.ceil(w.length / y)), J = Math.max(1, Math.ceil(S.length / y)), ls = N.slice((F - 1) * y, F * y), os = w.slice((L - 1) * y, L * y), ds = S.slice((z - 1) * y, z * y);
  o.useEffect(() => {
    F > H && $(H);
  }, [F, H]), o.useEffect(() => {
    L > X && q(X);
  }, [L, X]), o.useEffect(() => {
    z > J && R(J);
  }, [z, J]);
  const ke = W.filter((s) => {
    var _a;
    var t;
    return ((_a = (t = s.availability) == null ? void 0 : t.isAvailable) != null ? _a : true) === true;
  }).length, Ee = he.filter((s) => s.isAvailable).length, Fe = xe.filter((s) => s.isAvailable).length, cs = (s, t) => {
    if (a) {
      if (!t) {
        oe(s), B(""), V(""), le(true);
        return;
      }
      $e(s, t);
    }
  }, $e = (s, t, n, r) => {
    if (!a) return;
    const l = `${s.id}-${a}`;
    U((c) => __spreadProps(__spreadValues({}, c), { [l]: t })), Ce.mutate({ productId: s.id, outletId: Number(a), isAvailable: t, reason: n, customReason: r });
  }, us = () => {
    if (!E || !P) {
      m({ title: "Reason required", description: "Select a reason before disabling this product", variant: "destructive" });
      return;
    }
    if (P === "other" && !de.trim()) {
      m({ title: "Reason required", description: "Add a custom reason before disabling this product", variant: "destructive" });
      return;
    }
    $e(E, false, P, P === "other" ? de : void 0), le(false), oe(null), B(""), V("");
  }, Le = () => {
    le(false), oe(null), B(""), V("");
  }, ms = (s, t) => {
    !d || !a || Pe.mutate({ productId: d.id, outletId: Number(a), groupId: s, isAvailable: t });
  }, ps = (s, t) => {
    !d || !a || Oe.mutate({ productId: d.id, outletId: Number(a), optionId: s, isAvailable: t });
  }, O = d ? W.find((s) => s.id === d.id) || d : null;
  return e.jsx(fs, { currentPage: "product-availability", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs(i, { variant: "outline", className: "w-fit gap-2 px-3 py-1", children: [e.jsx(Ss, { className: "h-3.5 w-3.5" }), "Live availability control"] }), e.jsxs("div", { children: [e.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Product Availability" }), e.jsx("p", { className: "text-muted-foreground", children: "Pick an outlet, then search and update products, reusable options, and add-ons without leaving this page." })] })] }), h === "products" && e.jsx(A, { onClick: () => ge.mutate(), disabled: ge.isPending, variant: "outline", className: "gap-2 self-start lg:self-auto", children: ge.isPending ? e.jsxs(e.Fragment, { children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Syncing..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(As, { className: "h-4 w-4" }), "Sync Missing Records"] }) })] }), e.jsxs(D, { className: "border-border/60 shadow-sm", children: [e.jsxs(se, { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(Cs, { className: "h-5 w-5" }), e.jsx(te, { children: "Outlet Scope" })] }), e.jsx(ae, { children: "Products, options, and add-ons below update availability for the selected outlet only." })] }), e.jsx(G, { className: "space-y-4", children: Ye ? e.jsxs("div", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Loading outlets..."] }) : f.length === 0 ? e.jsx("div", { className: "rounded-lg border border-dashed p-6 text-sm text-muted-foreground", children: "No outlets are available for the selected brand." }) : e.jsxs(e.Fragment, { children: [e.jsxs(Ke, { value: a, onValueChange: C, children: [e.jsx(Qe, { className: "w-full lg:max-w-md", children: e.jsx(Ue, { placeholder: "Select an outlet" }) }), e.jsx(Be, { children: f.map((s) => e.jsx(Ve, { value: s.id.toString(), children: s.name }, s.id)) })] }), x && e.jsxs("div", { className: "grid gap-4 rounded-xl border bg-muted/30 p-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h2", { className: "text-lg font-semibold", children: x.name }), e.jsx(i, { variant: x.isActive ? "default" : "secondary", children: x.isActive ? "Outlet active" : "Outlet inactive" }), e.jsxs(i, { variant: "outline", className: "gap-1", children: [e.jsx(Ps, { className: "h-3 w-3" }), "Realtime sync on"] })] }), e.jsx("p", { className: "text-sm text-muted-foreground", children: x.address }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Phone: ", x.phone || "Not set"] })] }), e.jsxs("div", { className: "grid gap-3 sm:grid-cols-3 lg:min-w-[360px]", children: [e.jsxs("div", { className: "rounded-lg border bg-background p-3", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Products on" }), e.jsx("p", { className: "mt-1 text-2xl font-semibold", children: we ? "..." : `${ke}/${W.length}` })] }), e.jsxs("div", { className: "rounded-lg border bg-background p-3", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Options on" }), e.jsx("p", { className: "mt-1 text-2xl font-semibold", children: Se ? "..." : `${Ee}/${he.length}` })] }), e.jsxs("div", { className: "rounded-lg border bg-background p-3", children: [e.jsx("p", { className: "text-xs uppercase tracking-wide text-muted-foreground", children: "Add-ons on" }), e.jsx("p", { className: "mt-1 text-2xl font-semibold", children: Ae ? "..." : `${Fe}/${xe.length}` })] })] })] })] }) })] }), a ? e.jsxs("div", { className: "space-y-6", children: [e.jsx(D, { className: "border-border/60 shadow-sm", children: e.jsxs(G, { className: "pt-6", children: [e.jsxs("div", { className: "relative", children: [e.jsx(ne, { className: "pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" }), e.jsx(ie, { id: "unified-search", value: v, onChange: (s) => Ne(s.target.value), placeholder: "Search across all Products, Options, and Add-ons...", className: "h-12 pl-10 text-base" })] }), v && e.jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-2 text-sm", children: [e.jsx("span", { className: "text-muted-foreground", children: "Found:" }), e.jsxs(i, { variant: N.length > 0 ? "default" : "secondary", className: "cursor-pointer", onClick: () => p("products"), children: [N.length, " Products"] }), e.jsxs(i, { variant: w.length > 0 ? "default" : "secondary", className: "cursor-pointer", onClick: () => p("options"), children: [w.length, " Options"] }), e.jsxs(i, { variant: S.length > 0 ? "default" : "secondary", className: "cursor-pointer", onClick: () => p("addons"), children: [S.length, " Add-ons"] }), e.jsx(A, { variant: "ghost", size: "sm", onClick: () => Ne(""), className: "ml-auto h-6 px-2 text-xs", children: "Clear search" })] })] }) }), e.jsxs(bs, { value: h, onValueChange: (s) => p(s), className: "space-y-6", children: [e.jsxs(Ns, { className: "grid w-full max-w-lg grid-cols-3", children: [e.jsxs(fe, { value: "products", className: "gap-2", children: [e.jsx(Os, { className: "h-4 w-4" }), "Products", v && e.jsx(i, { variant: "outline", className: "ml-1 h-5 min-w-5 px-1 text-[10px]", children: N.length })] }), e.jsxs(fe, { value: "options", className: "gap-2", children: [e.jsx(Is, { className: "h-4 w-4" }), "Options", v && e.jsx(i, { variant: "outline", className: "ml-1 h-5 min-w-5 px-1 text-[10px]", children: w.length })] }), e.jsxs(fe, { value: "addons", className: "gap-2", children: [e.jsx(Ts, { className: "h-4 w-4" }), "Add-ons", v && e.jsx(i, { variant: "outline", className: "ml-1 h-5 min-w-5 px-1 text-[10px]", children: S.length })] })] }), e.jsx(ve, { value: "products", className: "space-y-6", children: e.jsxs(D, { className: "shadow-sm", children: [e.jsx(se, { className: "gap-4", children: e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", children: [e.jsxs("div", { children: [e.jsx(te, { children: "Products" }), e.jsx(ae, { children: "Search products quickly, then switch outlet availability or open the detail drawer for group and option-level controls." })] }), e.jsxs("div", { className: "w-full lg:max-w-sm", children: [e.jsx(K, { htmlFor: "product-search", className: "sr-only", children: "Search products" }), e.jsxs("div", { className: "relative", children: [e.jsx(ne, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), e.jsx(ie, { id: "product-search", value: ce, onChange: (s) => He(s.target.value), placeholder: "Search by product, description, category, or price", className: "pl-9" })] })] })] }) }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [e.jsxs(i, { variant: "secondary", children: [N.length, " results"] }), e.jsxs(i, { variant: "outline", children: [ke, " currently on"] }), e.jsx(i, { variant: "outline", children: "12 per page" })] }), we || ss ? e.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-muted-foreground", children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Loading products..."] }) : N.length === 0 ? e.jsx("div", { className: "rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground", children: "No products match this search." }) : e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "space-y-3", children: ls.map((s) => {
    var _a, _b;
    var r, l;
    const t = `${s.id}-${a}`, n = (_b = (_a = We[t]) != null ? _a : (r = s.availability) == null ? void 0 : r.isAvailable) != null ? _b : true;
    return e.jsxs("div", { className: "grid gap-4 rounded-xl border p-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h3", { className: "font-semibold", children: s.name }), s.isBestSeller && e.jsxs(i, { variant: "secondary", className: "border-yellow-300 bg-yellow-100 text-yellow-800", children: [e.jsx(ks, { className: "mr-1 h-3 w-3 fill-yellow-500" }), "Best seller"] }), e.jsx(i, { variant: n ? "default" : "secondary", children: n ? "Available" : "Unavailable" }), b[s.categoryId] && e.jsx(i, { variant: "outline", children: (l = b[s.categoryId]) == null ? void 0 : l.name })] }), e.jsx("p", { className: "text-sm text-muted-foreground", children: s.description }), e.jsxs("p", { className: "text-sm font-medium", children: ["\u20A6", re(s.basePrice)] })] }), e.jsxs("div", { className: "flex items-center justify-between gap-3 lg:justify-end", children: [e.jsxs(A, { type: "button", variant: "outline", size: "sm", onClick: () => be(s), className: "gap-2", children: [e.jsx(vs, { className: "h-4 w-4" }), "Customize"] }), e.jsx(Q, { checked: n, onCheckedChange: (c) => cs(s, c), disabled: Ce.isPending })] })] }, s.id);
  }) }), e.jsx(ye, { page: F, totalPages: H, onPageChange: $ })] })] })] }) }), e.jsx(ve, { value: "options", className: "space-y-6", children: e.jsxs(D, { className: "shadow-sm", children: [e.jsx(se, { className: "gap-4", children: e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", children: [e.jsxs("div", { children: [e.jsx(te, { children: "Options" }), e.jsx(ae, { children: "These are reusable options assigned to products. Turning one off here updates the selected outlet for every linked product immediately." })] }), e.jsxs("div", { className: "w-full lg:max-w-sm", children: [e.jsx(K, { htmlFor: "option-search", className: "sr-only", children: "Search options" }), e.jsxs("div", { className: "relative", children: [e.jsx(ne, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), e.jsx(ie, { id: "option-search", value: ue, onChange: (s) => Xe(s.target.value), placeholder: "Search option, group, description, or price", className: "pl-9" })] })] })] }) }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [e.jsxs(i, { variant: "secondary", children: [w.length, " results"] }), e.jsxs(i, { variant: "outline", children: [Ee, " fully on"] }), e.jsx(i, { variant: "outline", children: "Outlet scoped" })] }), Se ? e.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-muted-foreground", children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Loading options..."] }) : w.length === 0 ? e.jsx("div", { className: "rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground", children: "No reusable options match this search for the selected outlet." }) : e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "space-y-3", children: os.map((s) => e.jsxs("div", { className: "grid gap-4 rounded-xl border p-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h3", { className: "font-semibold", children: s.name }), e.jsx(i, { variant: s.isAvailable ? "default" : "secondary", children: s.isPartiallyAvailable ? "Partially on" : s.isAvailable ? "On" : "Off" }), e.jsx(i, { variant: "outline", children: s.groupName }), !s.isGloballyAvailable && e.jsx(i, { variant: "outline", children: "Globally off" }), Number(s.extraPrice || 0) > 0 && e.jsxs(i, { variant: "secondary", children: ["+\u20A6", re(s.extraPrice)] })] }), s.description ? e.jsx("p", { className: "text-sm text-muted-foreground", children: s.description }) : null, e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(i, { variant: "secondary", children: [s.enabledProductsCount, "/", s.linkedProductsCount, " products on"] }), s.disabledProductsCount > 0 && e.jsxs(i, { variant: "outline", children: [s.disabledProductsCount, " products off"] })] })] }), e.jsx("div", { className: "flex items-center justify-end", children: e.jsx(Q, { checked: s.isAvailable, onCheckedChange: (t) => Ie.mutate({ optionId: s.optionId, isAvailable: t }), disabled: Ie.isPending }) })] }, s.optionId)) }), e.jsx(ye, { page: L, totalPages: X, onPageChange: q })] })] })] }) }), e.jsx(ve, { value: "addons", className: "space-y-6", children: e.jsxs(D, { className: "shadow-sm", children: [e.jsx(se, { className: "gap-4", children: e.jsxs("div", { className: "flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", children: [e.jsxs("div", { children: [e.jsx(te, { children: "Add-ons" }), e.jsx(ae, { children: "Each add-on below respects outlet availability like a product. Switching it off here removes it from every linked parent product at this outlet." })] }), e.jsxs("div", { className: "w-full lg:max-w-sm", children: [e.jsx(K, { htmlFor: "addon-search", className: "sr-only", children: "Search add-ons" }), e.jsxs("div", { className: "relative", children: [e.jsx(ne, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), e.jsx(ie, { id: "addon-search", value: me, onChange: (s) => Je(s.target.value), placeholder: "Search add-on, price, or assignment counts", className: "pl-9" })] })] })] }) }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground", children: [e.jsxs(i, { variant: "secondary", children: [S.length, " results"] }), e.jsxs(i, { variant: "outline", children: [Fe, " currently on"] }), e.jsx(i, { variant: "outline", children: "Outlet scoped" })] }), Ae ? e.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-muted-foreground", children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Loading add-ons..."] }) : S.length === 0 ? e.jsx("div", { className: "rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground", children: "No add-ons match this search for the selected outlet." }) : e.jsxs(e.Fragment, { children: [e.jsx("div", { className: "space-y-3", children: ds.map((s) => {
    var t, n, r;
    return e.jsxs("div", { className: "grid gap-4 rounded-xl border p-4 lg:grid-cols-[minmax(0,1fr)_auto]", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h3", { className: "font-semibold", children: ((t = s.addonProduct) == null ? void 0 : t.name) || `Add-on #${s.addonProductId}` }), e.jsx(i, { variant: s.isAvailable ? "default" : "secondary", children: s.isAvailable ? "On" : "Off" }), !s.hasOutletAvailabilityRecord && e.jsx(i, { variant: "outline", children: "Using default availability" }), ((n = s.addonProduct) == null ? void 0 : n.isActive) === false && e.jsx(i, { variant: "outline", children: "Base product inactive" })] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Base price: \u20A6", re((r = s.addonProduct) == null ? void 0 : r.basePrice)] }), e.jsxs("div", { className: "flex flex-wrap gap-2", children: [e.jsxs(i, { variant: "secondary", children: [s.linkedProductsCount, " linked products"] }), s.sharedAssignments > 0 && e.jsxs(i, { variant: "outline", children: [s.sharedAssignments, " shared"] }), s.directAssignments > 0 && e.jsxs(i, { variant: "outline", children: [s.directAssignments, " direct"] }), s.presetAssignments > 0 && e.jsxs(i, { variant: "outline", children: [s.presetAssignments, " preset"] })] })] }), e.jsx("div", { className: "flex items-center justify-end", children: e.jsx(Q, { checked: s.isAvailable, onCheckedChange: (l) => Te.mutate({ addonProductId: s.addonProductId, isAvailable: l }), disabled: Te.isPending }) })] }, s.addonProductId);
  }) }), e.jsx(ye, { page: z, totalPages: J, onPageChange: R })] })] })] }) })] })] }) : null, e.jsx(Re, { open: !!d, onOpenChange: (s) => {
    s || be(null);
  }, children: e.jsxs(_e, { className: "max-h-[85vh] max-w-2xl overflow-y-auto", children: [e.jsxs(Me, { children: [e.jsx(De, { children: d ? `Customize Availability - ${d.name}` : "Customize Availability" }), e.jsxs(Ge, { children: ["Adjust per-product groups and options for ", (x == null ? void 0 : x.name) || "the selected outlet", "."] })] }), ts ? e.jsxs("div", { className: "flex items-center justify-center gap-2 py-12 text-muted-foreground", children: [e.jsx(T, { className: "h-4 w-4 animate-spin" }), "Loading customization settings..."] }) : (qe = Z == null ? void 0 : Z.customizationGroups) != null && qe.length ? e.jsx("div", { className: "space-y-6", children: Z.customizationGroups.map((s) => {
    var _a;
    var n, r, l;
    const t = (_a = (r = (n = O == null ? void 0 : O.availability) == null ? void 0 : n.customizationGroupAvailability) == null ? void 0 : r[s.id.toString()]) != null ? _a : true;
    return e.jsxs("div", { className: "space-y-4 rounded-xl border p-4", children: [e.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("h3", { className: "font-semibold", children: s.name }), e.jsx(i, { variant: s.isRequired ? "default" : "secondary", children: s.isRequired ? "Required" : "Optional" }), e.jsxs(i, { variant: "outline", children: ["Min ", s.minSelections, " / Max ", s.maxSelections] })] }), s.description ? e.jsx("p", { className: "text-sm text-muted-foreground", children: s.description }) : null] }), e.jsx(Q, { checked: t, onCheckedChange: (c) => ms(s.id, c), disabled: Pe.isPending })] }), (l = s.customizationOptions) != null && l.length ? e.jsxs("div", { className: "space-y-3", children: [e.jsx(ys, {}), s.customizationOptions.map((c) => {
      var _a2;
      var _, M;
      const Y = (_a2 = (M = (_ = O == null ? void 0 : O.availability) == null ? void 0 : _.customizationOptionAvailability) == null ? void 0 : M[c.id.toString()]) != null ? _a2 : true;
      return e.jsxs("div", { className: "flex flex-col gap-3 rounded-lg bg-muted/30 p-3 sm:flex-row sm:items-center sm:justify-between", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx("span", { className: "font-medium", children: c.name }), Number(c.extraPrice || 0) > 0 && e.jsxs(i, { variant: "secondary", children: ["+\u20A6", re(c.extraPrice)] }), !c.isAvailable && e.jsx(i, { variant: "outline", children: "Globally off" })] }), c.description ? e.jsx("p", { className: "text-sm text-muted-foreground", children: c.description }) : null] }), e.jsx(Q, { checked: Y, onCheckedChange: (ee) => ps(c.id, ee), disabled: Oe.isPending })] }, c.id);
    })] }) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "No options configured in this group." })] }, s.id);
  }) }) : e.jsx("div", { className: "rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground", children: "No customization groups are configured for this product." })] }) }), e.jsx(Re, { open: Ze, onOpenChange: (s) => s ? null : Le(), children: e.jsxs(_e, { className: "sm:max-w-[425px]", children: [e.jsxs(Me, { children: [e.jsx(De, { children: "Disable Product" }), e.jsxs(Ge, { children: ['Add a reason for disabling "', E == null ? void 0 : E.name, '" at ', (x == null ? void 0 : x.name) || "this outlet", "."] })] }), e.jsxs("div", { className: "grid gap-4 py-4", children: [e.jsxs("div", { className: "grid gap-2", children: [e.jsx(K, { htmlFor: "reason", children: "Reason" }), e.jsxs(Ke, { value: P, onValueChange: B, children: [e.jsx(Qe, { id: "reason", children: e.jsx(Ue, { placeholder: "Select a reason" }) }), e.jsx(Be, { children: $s.map((s) => e.jsx(Ve, { value: s.value, children: s.label }, s.value)) })] })] }), P === "other" ? e.jsxs("div", { className: "grid gap-2", children: [e.jsx(K, { htmlFor: "custom-reason", children: "Custom reason" }), e.jsx(ws, { id: "custom-reason", value: de, onChange: (s) => V(s.target.value), placeholder: "Describe why this product is unavailable", rows: 3 })] }) : null] }), e.jsxs(js, { children: [e.jsx(A, { type: "button", variant: "outline", onClick: Le, children: "Cancel" }), e.jsx(A, { type: "button", onClick: us, children: "Disable product" })] })] }) })] }) });
}
export { Ct as default };
