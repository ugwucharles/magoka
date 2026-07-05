var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
import { r as o, c as Ne, b as Z, j as e, B as f, W as A, a6 as S } from "./index-DOfu0sXg.js";
import { u as I } from "./useMutation-CVmbONMy.js";
import { u as Se, A as we } from "./admin-layout-DH7sAIhq.js";
import { F as Te } from "./formatted-number-input-DhzuNqOG.js";
import { I as p } from "./input-FyV2XACZ.js";
import { L as m } from "./label-B38UEnoM.js";
import { T as me } from "./textarea-__Yhw9VH.js";
import { S as Y } from "./switch-DvySixFh.js";
import { T as Ce, a as Pe, b as _, c as B } from "./tabs-qGTQ6MVs.js";
import { C as Ae } from "./checkbox-CrTtWijP.js";
import { T as te, a as ie, b as H, c as b, d as ae, e as y } from "./table-CzdeB6gz.js";
import { D as z, e as le, a as V, b as xe, c as ue, d as he, f as pe } from "./dialog-BUvIuveX.js";
import { F as Fe } from "./file-upload-BnguOWgd.js";
import { P as re } from "./plus-xl2HqeIg.js";
import { E as J } from "./eye-DhxFEmT5.js";
import { E as W } from "./eye-off-IC2nhfIc.js";
import { P as ne } from "./pen-BTOfVmxO.js";
import { T as oe } from "./trash-2-MFuZdLCA.js";
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
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
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
import "./index-Czlrzsbg.js";
import "./upload-Bxi1uLXD.js";
function Ts() {
  const [t, l] = o.useState(() => typeof window !== "undefined" && window.location.pathname === "/control/popups" ? "popups" : "banners"), [C, g] = o.useState(false), [u, c] = o.useState(false), [i, x] = o.useState(null), [w, T] = o.useState(false), [n, r] = o.useState(false), [j, P] = o.useState(null), { toast: d } = Ne(), { selectedBrandId: h, isLoading: k } = Se(), { data: E = [], isLoading: M } = Z({ queryKey: ["/api/admin/banners", { brandId: h }], enabled: !!h }), { data: q = [], isLoading: O } = Z({ queryKey: ["/api/admin/popups", { brandId: h }], enabled: !!h }), { data: L = [] } = Z({ queryKey: ["/api/admin/outlets", { brandId: h }], enabled: !!h }), U = M || k, R = O || k, G = I({ mutationFn: (s) => __async(null, null, function* () {
    var _a;
    return yield (yield A("POST", "/api/admin/banners", __spreadProps(__spreadValues({}, s), { brandId: (_a = s.brandId) != null ? _a : h, bannerType: "carousel" }))).json();
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/banners"] }), S.invalidateQueries({ queryKey: ["/api/banners"], exact: false }), g(false), d({ title: "Success", description: "Banner created successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to create banner", variant: "destructive" });
  } }), F = I({ mutationFn: (_a) => __async(null, null, function* () {
    var _b = _a, { id: s } = _b, v = __objRest(_b, ["id"]);
    var _a2;
    return yield (yield A("PUT", `/api/admin/banners/${s}`, __spreadProps(__spreadValues({}, v), { brandId: (_a2 = v.brandId) != null ? _a2 : h }))).json();
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/banners"] }), S.invalidateQueries({ queryKey: ["/api/banners"], exact: false }), c(false), x(null), d({ title: "Success", description: "Banner updated successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to update banner", variant: "destructive" });
  } }), K = I({ mutationFn: (s) => __async(null, null, function* () {
    yield A("DELETE", `/api/admin/banners/${s}`);
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/banners"] }), S.invalidateQueries({ queryKey: ["/api/banners"], exact: false }), d({ title: "Success", description: "Banner deleted successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to delete banner", variant: "destructive" });
  } }), Q = I({ mutationFn: (s) => __async(null, null, function* () {
    return yield (yield A("POST", "/api/admin/popups", s)).json();
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/popups"] }), T(false), d({ title: "Success", description: "Popup created successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to create popup", variant: "destructive" });
  } }), D = I({ mutationFn: (_c) => __async(null, null, function* () {
    var _d = _c, { id: s } = _d, v = __objRest(_d, ["id"]);
    return yield (yield A("PUT", `/api/admin/popups/${s}`, v)).json();
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/popups"] }), r(false), P(null), d({ title: "Success", description: "Popup updated successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to update popup", variant: "destructive" });
  } }), $ = I({ mutationFn: (s) => __async(null, null, function* () {
    yield A("DELETE", `/api/admin/popups/${s}`);
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/popups"] }), d({ title: "Success", description: "Popup deleted successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to delete popup", variant: "destructive" });
  } }), a = E.filter((s) => !s.bannerType || s.bannerType === "carousel"), N = E.find((s) => s.bannerType === "promo"), ee = E.find((s) => s.bannerType === "hero"), se = I({ mutationFn: (s) => __async(null, null, function* () {
    const v = s.type === "promo" ? N : ee;
    return v ? yield (yield A("PUT", `/api/admin/banners/${v.id}`, __spreadProps(__spreadValues({}, s.settings), { bannerType: s.type, brandId: h }))).json() : yield (yield A("POST", "/api/admin/banners", __spreadProps(__spreadValues({}, s.settings), { bannerType: s.type, brandId: h, imageUrl: "placeholder" }))).json();
  }), onSuccess: () => {
    S.invalidateQueries({ queryKey: ["/api/admin/banners"] }), S.invalidateQueries({ queryKey: ["/api/banners"], exact: false }), d({ title: "Success", description: "Page settings saved successfully" });
  }, onError: (s) => {
    d({ title: "Error", description: s.message || "Failed to save page settings", variant: "destructive" });
  } }), ge = (s) => {
    F.mutate({ id: s.id, isActive: !s.isActive });
  }, je = (s) => {
    x(s), c(true);
  }, ve = (s) => {
    confirm("Are you sure you want to delete this banner?") && K.mutate(s);
  }, ye = (s) => {
    D.mutate({ id: s.id, isActive: !s.isActive });
  }, be = (s) => {
    P(s), r(true);
  }, fe = (s) => {
    confirm("Are you sure you want to delete this popup?") && $.mutate(s);
  };
  return e.jsx(we, { currentPage: "banners", children: e.jsxs("div", { className: "p-6", children: [e.jsx("div", { className: "mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: e.jsxs("div", { children: [e.jsx("h1", { className: "text-2xl font-bold", children: "Banners & Popups Management" }), e.jsx("p", { className: "text-gray-600", children: "Manage promotional banners and location-based popups" })] }) }), e.jsxs(Ce, { value: t, onValueChange: l, className: "w-full", children: [e.jsxs(Pe, { className: "grid w-full grid-cols-2", children: [e.jsx(_, { value: "banners", children: "Carousel Banners" }), e.jsx(_, { value: "popups", children: "Popups" })] }), e.jsxs(B, { value: "banners", className: "mt-6", children: [e.jsxs("div", { className: "flex justify-between items-center mb-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-semibold", children: "Homepage Banners" }), e.jsx("p", { className: "text-gray-600", children: "Manage promotional banners for the homepage carousel" })] }), e.jsxs(z, { open: C, onOpenChange: g, children: [e.jsx(le, { asChild: true, children: e.jsxs(f, { className: "flex items-center space-x-2", disabled: !h, children: [e.jsx(re, { className: "w-4 h-4" }), e.jsx("span", { children: "Add Banner" })] }) }), e.jsx(V, { className: "max-w-md", children: e.jsx(ce, { onSubmit: (s) => G.mutate(s), loading: G.isPending, title: "Create Banner", description: "Add a new promotional banner to the homepage carousel", brandId: h }) })] })] }), U ? e.jsx("div", { className: "text-center py-8", children: "Loading banners..." }) : e.jsx("div", { className: "bg-white rounded-lg shadow", children: e.jsxs(te, { children: [e.jsx(ie, { children: e.jsxs(H, { children: [e.jsx(b, { children: "Preview" }), e.jsx(b, { children: "Title" }), e.jsx(b, { children: "Subtitle" }), e.jsx(b, { children: "Order" }), e.jsx(b, { children: "Status" }), e.jsx(b, { children: "Actions" })] }) }), e.jsxs(ae, { children: [a.map((s) => e.jsxs(H, { children: [e.jsx(y, { children: e.jsx("img", { src: s.imageUrl, alt: s.title || "Banner", className: "w-16 h-9 object-contain bg-gray-50 rounded" }) }), e.jsx(y, { className: "font-medium", children: s.title || "Image Only" }), e.jsx(y, { className: "text-gray-600 max-w-40 truncate", children: s.subtitle || "\u2014" }), e.jsx(y, { children: s.sortOrder }), e.jsx(y, { children: e.jsxs("div", { className: "flex items-center space-x-2", children: [s.isActive ? e.jsx(J, { className: "w-4 h-4 text-green-600" }) : e.jsx(W, { className: "w-4 h-4 text-gray-400" }), e.jsx("span", { className: s.isActive ? "text-green-600" : "text-gray-400", children: s.isActive ? "Active" : "Hidden" })] }) }), e.jsx(y, { children: e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(f, { variant: "ghost", size: "sm", onClick: () => ge(s), disabled: F.isPending, children: s.isActive ? e.jsx(W, { className: "w-4 h-4" }) : e.jsx(J, { className: "w-4 h-4" }) }), e.jsx(f, { variant: "ghost", size: "sm", onClick: () => je(s), children: e.jsx(ne, { className: "w-4 h-4" }) }), e.jsx(f, { variant: "ghost", size: "sm", onClick: () => ve(s.id), disabled: K.isPending, className: "text-red-600 hover:text-red-700", children: e.jsx(oe, { className: "w-4 h-4" }) })] }) })] }, s.id)), a.length === 0 && e.jsx(H, { children: e.jsx(y, { colSpan: 6, className: "text-center py-8 text-gray-500", children: "No carousel banners created yet. Add your first banner to get started." }) })] })] }) }), e.jsx(z, { open: u, onOpenChange: c, children: e.jsx(V, { className: "max-w-md", children: i && e.jsx(ce, { banner: i, onSubmit: (s) => F.mutate(__spreadValues({ id: i.id }, s)), loading: F.isPending, title: "Edit Banner", description: "Update the banner details", brandId: h != null ? h : i.brandId }) }) })] }), e.jsxs(B, { value: "popups", className: "mt-6", children: [e.jsxs("div", { className: "flex justify-between items-center mb-6", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-semibold", children: "Location Popups" }), e.jsx("p", { className: "text-gray-600", children: "Create outlet-specific promotional popups that appear after location selection" })] }), e.jsxs(z, { open: w, onOpenChange: T, children: [e.jsx(le, { asChild: true, children: e.jsxs(f, { className: "flex items-center space-x-2", disabled: !h, children: [e.jsx(re, { className: "w-4 h-4" }), e.jsx("span", { children: "Add Popup" })] }) }), e.jsx(V, { className: "max-w-lg", children: e.jsx(de, { outlets: L, onSubmit: (s) => Q.mutate(s), loading: Q.isPending, title: "Create Popup", description: "Create a new promotional popup for specific outlets" }) })] })] }), R ? e.jsx("div", { className: "text-center py-8", children: "Loading popups..." }) : e.jsx("div", { className: "bg-white rounded-lg shadow", children: e.jsxs(te, { children: [e.jsx(ie, { children: e.jsxs(H, { children: [e.jsx(b, { children: "Preview" }), e.jsx(b, { children: "Title" }), e.jsx(b, { children: "Outlets" }), e.jsx(b, { children: "Link" }), e.jsx(b, { children: "Status" }), e.jsx(b, { children: "Actions" })] }) }), e.jsxs(ae, { children: [q.map((s) => e.jsxs(H, { children: [e.jsx(y, { children: e.jsx("img", { src: s.imageUrl, alt: s.title || "Popup image", className: "w-16 h-16 object-contain bg-gray-50 rounded" }) }), e.jsx(y, { className: "font-medium", children: s.title }), e.jsx(y, { children: e.jsx("div", { className: "flex flex-wrap gap-1", children: s.outlets.map((v) => e.jsx("span", { className: "px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded", children: v.name }, v.id)) }) }), e.jsx(y, { className: "text-gray-600 max-w-32 truncate", children: s.linkRoute || "\u2014" }), e.jsx(y, { children: e.jsxs("div", { className: "flex items-center space-x-2", children: [s.isActive ? e.jsx(J, { className: "w-4 h-4 text-green-600" }) : e.jsx(W, { className: "w-4 h-4 text-gray-400" }), e.jsx("span", { className: s.isActive ? "text-green-600" : "text-gray-400", children: s.isActive ? "Active" : "Hidden" })] }) }), e.jsx(y, { children: e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(f, { variant: "ghost", size: "sm", onClick: () => ye(s), disabled: D.isPending, children: s.isActive ? e.jsx(W, { className: "w-4 h-4" }) : e.jsx(J, { className: "w-4 h-4" }) }), e.jsx(f, { variant: "ghost", size: "sm", onClick: () => be(s), children: e.jsx(ne, { className: "w-4 h-4" }) }), e.jsx(f, { variant: "ghost", size: "sm", onClick: () => fe(s.id), disabled: $.isPending, className: "text-red-600 hover:text-red-700", children: e.jsx(oe, { className: "w-4 h-4" }) })] }) })] }, s.id)), q.length === 0 && e.jsx(H, { children: e.jsx(y, { colSpan: 6, className: "text-center py-8 text-gray-500", children: "No popups created yet. Add your first popup to get started." }) })] })] }) }), e.jsx(z, { open: n, onOpenChange: r, children: e.jsx(V, { className: "max-w-lg", children: j && e.jsx(de, { popup: j, outlets: L, onSubmit: (s) => D.mutate(__spreadValues({ id: j.id }, s)), loading: D.isPending, title: "Edit Popup", description: "Update the popup details and outlet assignments" }) }) })] })] })] }) });
}
function ce({ banner: t, onSubmit: l, loading: C, title: g, description: u, brandId: c }) {
  var _a, _b, _c, _d, _e, _f;
  const [i, x] = o.useState({ title: (t == null ? void 0 : t.title) || "", subtitle: (t == null ? void 0 : t.subtitle) || "", imageUrl: (t == null ? void 0 : t.imageUrl) || "", linkUrl: null, sortOrder: (t == null ? void 0 : t.sortOrder) || 0, isActive: (_a = t == null ? void 0 : t.isActive) != null ? _a : true, brandId: (_c = (_b = t == null ? void 0 : t.brandId) != null ? _b : c) != null ? _c : void 0 });
  o.useEffect(() => {
    t != null && t.brandId ? x((n) => {
      var _a2;
      return __spreadProps(__spreadValues({}, n), { brandId: (_a2 = t.brandId) != null ? _a2 : void 0 });
    }) : c && x((n) => __spreadProps(__spreadValues({}, n), { brandId: c != null ? c : void 0 }));
  }, [t == null ? void 0 : t.brandId, c]);
  const w = (n) => __async(null, null, function* () {
    const r = new FileReader();
    r.onload = (j) => {
      var d;
      const P = (d = j.target) == null ? void 0 : d.result;
      x(__spreadProps(__spreadValues({}, i), { imageUrl: P }));
    }, r.readAsDataURL(n);
  }), T = (n) => {
    var _a2, _b2;
    n.preventDefault(), l(__spreadProps(__spreadValues({}, i), { brandId: (_b2 = (_a2 = i.brandId) != null ? _a2 : c) != null ? _b2 : void 0 }));
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs(xe, { children: [e.jsx(ue, { children: g }), e.jsx(he, { children: u })] }), e.jsxs("form", { onSubmit: T, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(m, { htmlFor: "title", children: "Title (Optional)" }), e.jsx(p, { id: "title", value: (_d = i.title) != null ? _d : "", onChange: (n) => x(__spreadProps(__spreadValues({}, i), { title: n.target.value })), placeholder: "Banner title (leave empty for image-only banner)" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "subtitle", children: "Subtitle (Optional)" }), e.jsx(me, { id: "subtitle", value: i.subtitle || "", onChange: (n) => x(__spreadProps(__spreadValues({}, i), { subtitle: n.target.value })), placeholder: "Banner subtitle or description", rows: 2 })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "imageFile", children: "Banner Image" }), e.jsx(p, { id: "imageFile", type: "file", accept: "image/*", onChange: (n) => {
    var j;
    const r = (j = n.target.files) == null ? void 0 : j[0];
    r && w(r);
  }, required: !t }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Recommended aspect ratio: 2:1 to 3:1 for best display. Images will be displayed in full without cropping. Supports JPG, PNG, WebP formats." }), i.imageUrl && e.jsx("div", { className: "mt-2", children: e.jsx("img", { src: i.imageUrl, alt: "Banner preview", className: "w-full h-20 object-contain bg-gray-50 rounded border" }) })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "sortOrder", children: "Display Order" }), e.jsx(Te, { id: "sortOrder", category: "integer", min: 0, value: (_e = i.sortOrder) != null ? _e : 0, onChange: (n) => x(__spreadProps(__spreadValues({}, i), { sortOrder: n != null ? n : 0 })) })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Y, { id: "isActive", checked: (_f = i.isActive) != null ? _f : false, onCheckedChange: (n) => x(__spreadProps(__spreadValues({}, i), { isActive: n })) }), e.jsx(m, { htmlFor: "isActive", children: "Visible on website" })] }), e.jsx(pe, { children: e.jsx(f, { type: "submit", disabled: C, children: C ? "Saving..." : t ? "Update Banner" : "Create Banner" }) })] })] });
}
function de({ popup: t, outlets: l, onSubmit: C, loading: g, title: u, description: c }) {
  var _a;
  const [i, x] = o.useState({ title: (t == null ? void 0 : t.title) || "", imageUrl: (t == null ? void 0 : t.imageUrl) || "", linkRoute: (t == null ? void 0 : t.linkRoute) || "", isActive: (_a = t == null ? void 0 : t.isActive) != null ? _a : true, outletIds: (t == null ? void 0 : t.outlets)?.map((r) => r.id) || (t == null ? void 0 : t.outletIds) || [] }), w = (r) => {
    x(__spreadProps(__spreadValues({}, i), { imageUrl: r }));
  }, T = (r) => {
    r.preventDefault(), !(!i.title.trim() || !i.imageUrl) && C({ title: i.title, imageUrl: i.imageUrl, linkRoute: i.linkRoute || null, isActive: i.isActive, outletIds: i.outletIds });
  }, n = (r) => {
    const j = i.outletIds.includes(r) ? i.outletIds.filter((P) => P !== r) : [...i.outletIds, r];
    x(__spreadProps(__spreadValues({}, i), { outletIds: j }));
  };
  return e.jsxs(e.Fragment, { children: [e.jsxs(xe, { children: [e.jsx(ue, { children: u }), e.jsx(he, { children: c })] }), e.jsxs("form", { onSubmit: T, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(m, { htmlFor: "popup-title", children: "Title (Required)" }), e.jsx(p, { id: "popup-title", value: i.title, onChange: (r) => x(__spreadProps(__spreadValues({}, i), { title: r.target.value })), placeholder: "Popup title", required: true })] }), e.jsxs("div", { children: [e.jsx(Fe, { value: i.imageUrl, onChange: w, label: "Popup Image", accept: "image/*", maxSize: 5 }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Square images work best for popups. Supports JPG, PNG, WebP formats up to 5MB." })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "route-link", children: "Route Link (Optional)" }), e.jsx(p, { id: "route-link", value: i.linkRoute, onChange: (r) => x(__spreadProps(__spreadValues({}, i), { linkRoute: r.target.value })), placeholder: "/products or /tap (internal routes only)" }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Optional route to navigate to when popup is clicked. Leave empty for image-only popups." })] }), e.jsxs("div", { children: [e.jsx(m, { children: "Assign to Outlets" }), e.jsx("div", { className: "max-h-32 overflow-y-auto border rounded p-2 space-y-2", children: l.map((r) => e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ae, { id: `outlet-${r.id}`, checked: i.outletIds.includes(r.id), onCheckedChange: () => n(r.id) }), e.jsx(m, { htmlFor: `outlet-${r.id}`, className: "text-sm", children: r.name })] }, r.id)) }), e.jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Select which outlets should show this popup when users select their location." })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Y, { id: "popup-active", checked: i.isActive, onCheckedChange: (r) => x(__spreadProps(__spreadValues({}, i), { isActive: r })) }), e.jsx(m, { htmlFor: "popup-active", children: "Active on website" })] }), e.jsx(pe, { children: e.jsx(f, { type: "submit", disabled: g || !i.title.trim() || !i.imageUrl || i.outletIds.length === 0, children: g ? "Saving..." : t ? "Update Popup" : "Create Popup" }) })] })] });
}
function Ie({ promoBanner: t, heroBanner: l, onSave: C, loading: g }) {
  var _a, _b;
  const [u, c] = o.useState((t == null ? void 0 : t.promoText) || ""), [i, x] = o.useState((t == null ? void 0 : t.promoGradientFrom) || "#006400"), [w, T] = o.useState((t == null ? void 0 : t.promoGradientTo) || "#008000"), [n, r] = o.useState((_a = t == null ? void 0 : t.isActive) != null ? _a : true), [j, P] = o.useState((l == null ? void 0 : l.heroTitleLine1) || "THIS IS NOT JUST FOOD"), [d, h] = o.useState((l == null ? void 0 : l.heroTitleLine2) || "THIS IS"), [k, E] = o.useState((l == null ? void 0 : l.heroBrandText) || ""), [M, q] = o.useState((l == null ? void 0 : l.heroTagline) || "NIGERIAN FESTIVE MEALS"), [O, L] = o.useState((l == null ? void 0 : l.heroBackgroundColor) || "#1a1a1a"), [U, R] = o.useState((l == null ? void 0 : l.heroAccentColor) || "#FFD700"), [G, F] = o.useState((_b = l == null ? void 0 : l.isActive) != null ? _b : true);
  o.useEffect(() => {
    var _a2;
    t && (c(t.promoText || ""), x(t.promoGradientFrom || "#006400"), T(t.promoGradientTo || "#008000"), r((_a2 = t.isActive) != null ? _a2 : true));
  }, [t]), o.useEffect(() => {
    var _a2;
    l && (P(l.heroTitleLine1 || "THIS IS NOT JUST FOOD"), h(l.heroTitleLine2 || "THIS IS"), E(l.heroBrandText || ""), q(l.heroTagline || "NIGERIAN FESTIVE MEALS"), L(l.heroBackgroundColor || "#1a1a1a"), R(l.heroAccentColor || "#FFD700"), F((_a2 = l.isActive) != null ? _a2 : true));
  }, [l]);
  const K = (a) => {
    C("promo", { promoText: u, promoGradientFrom: i, promoGradientTo: w, isActive: a !== void 0 ? a : n, title: "Promo Banner" });
  }, Q = (a) => {
    C("hero", { heroTitleLine1: j, heroTitleLine2: d, heroBrandText: k, heroTagline: M, heroBackgroundColor: O, heroAccentColor: U, isActive: a !== void 0 ? a : G, title: "Hero Section" });
  }, D = (a) => {
    r(a), t && K(a);
  }, $ = (a) => {
    F(a), l && Q(a);
  };
  return e.jsxs("div", { className: "space-y-8", children: [e.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-semibold", children: "Promo Banner" }), e.jsx("p", { className: "text-gray-600 text-sm", children: "The slim promotional strip displayed at the top of the YumBulk page" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Y, { id: "promo-active", checked: n, onCheckedChange: D, disabled: g }), e.jsx(m, { htmlFor: "promo-active", children: "Active" })] })] }), e.jsx("div", { className: "mb-6 p-3 rounded-lg text-white text-sm text-center", style: { background: `linear-gradient(to right, ${i}, ${w})` }, children: u || "\u{1F389} Your promotional message will appear here" }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { className: "md:col-span-2", children: [e.jsx(m, { htmlFor: "promo-text", children: "Promo Message" }), e.jsx("p", { className: "text-xs text-gray-500 mb-2", children: 'Supports HTML: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <span style="color:#hex">color</span>, emojis \u{1F389}' }), e.jsxs("div", { className: "flex gap-1 mb-2 p-1 bg-gray-100 rounded border", children: [e.jsx("button", { type: "button", className: "px-2 py-1 text-sm font-bold hover:bg-gray-200 rounded", onClick: () => {
    var N;
    const a = ((N = window.getSelection()) == null ? void 0 : N.toString()) || "text";
    c(u + `<strong>${a}</strong>`);
  }, title: "Bold", children: "B" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm italic hover:bg-gray-200 rounded", onClick: () => {
    var N;
    const a = ((N = window.getSelection()) == null ? void 0 : N.toString()) || "text";
    c(u + `<em>${a}</em>`);
  }, title: "Italic", children: "I" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm underline hover:bg-gray-200 rounded", onClick: () => {
    var N;
    const a = ((N = window.getSelection()) == null ? void 0 : N.toString()) || "text";
    c(u + `<u>${a}</u>`);
  }, title: "Underline", children: "U" }), e.jsx("span", { className: "border-l border-gray-300 mx-1" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm hover:bg-gray-200 rounded", onClick: () => c(u + "\u{1F389}"), title: "Party emoji", children: "\u{1F389}" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm hover:bg-gray-200 rounded", onClick: () => c(u + "\u{1F525}"), title: "Fire emoji", children: "\u{1F525}" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm hover:bg-gray-200 rounded", onClick: () => c(u + "\u2728"), title: "Sparkles emoji", children: "\u2728" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm hover:bg-gray-200 rounded", onClick: () => c(u + "\u{1F4B0}"), title: "Money emoji", children: "\u{1F4B0}" }), e.jsx("button", { type: "button", className: "px-2 py-1 text-sm hover:bg-gray-200 rounded", onClick: () => c(u + "\u{1F372}"), title: "Food emoji", children: "\u{1F372}" })] }), e.jsx(me, { id: "promo-text", value: u, onChange: (a) => c(a.target.value), placeholder: "\u{1F389} Save 25% on your first order + 3 months unlimited free deliveries. Use code <strong>NAIJA25</strong>.", rows: 3, className: "font-mono text-sm" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "promo-gradient-from", children: "Gradient Start Color" }), e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(p, { id: "promo-gradient-from", type: "color", value: i, onChange: (a) => x(a.target.value), className: "w-12 h-10 p-1 cursor-pointer" }), e.jsx(p, { type: "text", value: i, onChange: (a) => x(a.target.value), className: "flex-1" })] })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "promo-gradient-to", children: "Gradient End Color" }), e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(p, { id: "promo-gradient-to", type: "color", value: w, onChange: (a) => T(a.target.value), className: "w-12 h-10 p-1 cursor-pointer" }), e.jsx(p, { type: "text", value: w, onChange: (a) => T(a.target.value), className: "flex-1" })] })] })] }), e.jsx("div", { className: "mt-4", children: e.jsx(f, { onClick: () => K(), disabled: g, children: g ? "Saving..." : "Save Promo Banner" }) })] }), e.jsxs("div", { className: "bg-white rounded-lg shadow p-6", children: [e.jsxs("div", { className: "flex items-center justify-between mb-4", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-xl font-semibold", children: "Hero Section" }), e.jsx("p", { className: "text-gray-600 text-sm", children: "The main hero banner displayed on the YumBulk page" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Y, { id: "hero-active", checked: G, onCheckedChange: $, disabled: g }), e.jsx(m, { htmlFor: "hero-active", children: "Active" })] })] }), e.jsxs("div", { className: "mb-6 p-8 rounded-lg text-center relative overflow-hidden", style: { backgroundColor: O }, children: [e.jsxs("h1", { className: "text-2xl font-bold leading-tight", children: [e.jsx("span", { className: "block text-lg text-white", children: j }), e.jsx("span", { className: "block text-2xl text-white", children: d }), e.jsx("span", { className: "block text-3xl", style: { color: U }, children: k || "YUMBULK" })] }), e.jsx("p", { className: "mt-2 text-sm text-white/90", children: M })] }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-title-1", children: "Title Line 1" }), e.jsx(p, { id: "hero-title-1", value: j, onChange: (a) => P(a.target.value), placeholder: "THIS IS NOT JUST FOOD" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-title-2", children: "Title Line 2" }), e.jsx(p, { id: "hero-title-2", value: d, onChange: (a) => h(a.target.value), placeholder: "THIS IS" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-brand", children: "Brand Name (leave empty to use brand name)" }), e.jsx(p, { id: "hero-brand", value: k, onChange: (a) => E(a.target.value), placeholder: "YUMBULK" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-tagline", children: "Tagline" }), e.jsx(p, { id: "hero-tagline", value: M, onChange: (a) => q(a.target.value), placeholder: "NIGERIAN FESTIVE MEALS" })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-bg-color", children: "Background Color" }), e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(p, { id: "hero-bg-color", type: "color", value: O, onChange: (a) => L(a.target.value), className: "w-12 h-10 p-1 cursor-pointer" }), e.jsx(p, { type: "text", value: O, onChange: (a) => L(a.target.value), className: "flex-1" })] })] }), e.jsxs("div", { children: [e.jsx(m, { htmlFor: "hero-accent-color", children: "Accent Color (Brand Text)" }), e.jsxs("div", { className: "flex gap-2 items-center", children: [e.jsx(p, { id: "hero-accent-color", type: "color", value: U, onChange: (a) => R(a.target.value), className: "w-12 h-10 p-1 cursor-pointer" }), e.jsx(p, { type: "text", value: U, onChange: (a) => R(a.target.value), className: "flex-1" })] })] })] }), e.jsx("div", { className: "mt-4", children: e.jsx(f, { onClick: () => Q(), disabled: g, children: g ? "Saving..." : "Save Hero Section" }) })] })] });
}
export { Ts as default };
