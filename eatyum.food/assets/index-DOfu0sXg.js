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
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var _K;
const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ["assets/home-BfXSjIBe.js", "assets/header-C5DANLb6.js", "assets/product-search-DjJMGOuy.js", "assets/index-D5alJfFq.js", "assets/Combination-C65a2kPq.js", "assets/index-Czlrzsbg.js", "assets/chevron-right-DkUlsPHD.js", "assets/check-AkIa94Y-.js", "assets/use-scheduled-delivery-QXJaYNqy.js", "assets/dialog-BUvIuveX.js", "assets/input-FyV2XACZ.js", "assets/label-B38UEnoM.js", "assets/auth-AqNcfriC.js", "assets/useReferralReward-BeyZodYI.js", "assets/arrow-left-CK7JF7w9.js", "assets/gift-C_SZrOe8.js", "assets/mail-WBbfgCoF.js", "assets/smartphone-DMb4mbpx.js", "assets/useMutation-CVmbONMy.js", "assets/use-auth-d_ltKWkf.js", "assets/currency-cZDvJQzL.js", "assets/minus-zDmsn0vk.js", "assets/plus-xl2HqeIg.js", "assets/search-BFN4Wc19.js", "assets/menu-B9h4oOjs.js", "assets/user-adl9AYKF.js", "assets/wallet-e6BSu-fo.js", "assets/star-o2YGpjzJ.js", "assets/shopping-cart-C1hOzoyN.js", "assets/chevron-down-DegxUQDE.js", "assets/map-pin-ChG4yLkU.js", "assets/scheduled-delivery-notice-Cf3rNKIR.js", "assets/calendar-DfgMOSD7.js", "assets/trash-2-MFuZdLCA.js", "assets/outlet-utils-Dqa2FQkG.js", "assets/store-Cr0AuVYD.js", "assets/timezone-utils-D5P8NMTs.js", "assets/en-US-BIej3L2x.js", "assets/format-Chey2Vsb.js", "assets/formatDistanceToNow-BStQM2-5.js", "assets/triangle-alert-BZPq43t0.js", "assets/clock-DQ0X7PrC.js", "assets/chevron-left-Cnh0-uPi.js", "assets/preorder-schedule-modal-zxs4Au2f.js", "assets/trophy-COGTR2GG.js", "assets/lock-ABGMYV1t.js", "assets/refresh-cw-C5dId60a.js", "assets/skeleton-Bv9tx7fM.js", "assets/arrow-right-CS_UFvxY.js", "assets/location-modal-Cr-IHIoa.js", "assets/message-circle-Ctbm3h4-.js", "assets/index-D-8nYH0_.js", "assets/custom-autocomplete-Cusxb0jm.js", "assets/checkout-FLKP6aYe.js", "assets/textarea-__Yhw9VH.js", "assets/index-CxKYTSZE.js", "assets/separator-B__B0Kv_.js", "assets/checkbox-CrTtWijP.js", "assets/checkout-auth-flow-CwcIMq7d.js", "assets/paystack-BWoQWccF.js", "assets/thank-you-CgF8KpLI.js", "assets/badge-BAjaXL1S.js", "assets/points-utils-CJKWL9Rb.js", "assets/copy-Dm_kp7Au.js", "assets/external-link-CR-HDEeC.js", "assets/send-BggwJqFg.js", "assets/share-2-CzhGwcTj.js", "assets/order-tracking-Bi5kUPN9.js", "assets/status-utils-BojSicDw.js", "assets/package-CpPTLD0o.js", "assets/truck-BHJTFh2e.js", "assets/phone-Cx4FTVKN.js", "assets/download-ukPRPFea.js", "assets/admin-login-BMyliT2W.js", "assets/eye-off-IC2nhfIc.js", "assets/eye-DhxFEmT5.js", "assets/admin-dashboard-Oc256O1M.js", "assets/admin-layout-DH7sAIhq.js", "assets/select-ets7bQkN.js", "assets/chevron-up-Cu4mgTvm.js", "assets/dollar-sign-CJk2KsjA.js", "assets/image-Cm0cVFFU.js", "assets/users-CBtjfzvJ.js", "assets/target-B9hXFhRn.js", "assets/shield-BJZvWIYM.js", "assets/formatted-number-input-DhzuNqOG.js", "assets/alert-dialog-Dg4XC4Tp.js", "assets/index-4KTxcrAY.js", "assets/form-DpW_ADfq.js", "assets/index-Ph36iM9Q.js", "assets/schema-fInU-h3J.js", "assets/switch-DvySixFh.js", "assets/bell-off-DBs6dVt7.js", "assets/square-pen-B4PbNjTL.js", "assets/file-upload-BnguOWgd.js", "assets/upload-Bxi1uLXD.js", "assets/currency-input-Bsi8j9jy.js", "assets/table-CzdeB6gz.js", "assets/permission-gate-BcxqpHQ-.js", "assets/trending-up-bEYf6wvk.js", "assets/admin-product-view-CVfTm9Qq.js", "assets/tabs-qGTQ6MVs.js", "assets/save-BZa-ufS1.js", "assets/admin-users-CefYZ3DE.js", "assets/lead-status-modal-DKnJBnai.js", "assets/filter-56Ct97Iz.js", "assets/phone-call-DUwUkqpA.js", "assets/shopping-bag-8aLpcCGk.js", "assets/file-spreadsheet-6rHXWmH4.js", "assets/admin-user-details-DyaHmx0z.js", "assets/pen-BTOfVmxO.js", "assets/credit-card-6s_6kQps.js", "assets/award-oue7kKvF.js", "assets/admin-orders-D4hFACED.js", "assets/progress-yPUB44od.js", "assets/order-receipt-dialog-fyimRXC9.js", "assets/file-text-BbJNGgaq.js", "assets/archive-D-BZa83x.js", "assets/rotate-ccw-DOK3eGbZ.js", "assets/timer-DMHaMGok.js", "assets/circle-x-ve1y_gH0.js", "assets/admin-order-details--YEu4Qn7.js", "assets/shield-x-BOiNLJct.js", "assets/alert-CuGTVrCB.js", "assets/admin-payouts-CQ1bMrV3.js", "assets/trending-down-Cww3HZfJ.js", "assets/admin-archived-orders-4rdPWeUy.js", "assets/admin-create-order-BGmI8Bdo.js", "assets/admin-rbac-users-BrLlzPwX.js", "assets/admin-product-availability-B9fqAhFl.js", "assets/activity-CG8KHg7p.js", "assets/zap-BL35eo9v.js", "assets/sparkles-CLmY5P9m.js", "assets/admin-delivery-settings-Bn2pLDt6.js", "assets/admin-promo-codes-pFwrj8UK.js", "assets/admin-banners-DzDbT1sm.js", "assets/admin-spin-win-D8qTtHt8.js", "assets/generateCategoricalChart-ByTQVtaT.js", "assets/BarChart-Dz8BNaem.js", "assets/admin-settings-DiQIJNwZ.js", "assets/collapsible-BXfmK0ZU.js", "assets/admin-analytics-br4WzYCF.js", "assets/user-check-BRMuyHBP.js", "assets/circle-check-Cntb4uoq.js", "assets/admin-leads-CS_9joDs.js", "assets/admin-order-analytics-3coIntK1.js", "assets/admin-reviews-BwmaGg8d.js", "assets/thumbs-up-1uuMjzDP.js", "assets/admin-referrals-rtfTnp2Q.js", "assets/admin-r2-test-Bn2ScJiu.js", "assets/admin-sms-provider-C_1940qQ.js", "assets/admin-brands-Dpsx6JYS.js", "assets/partners-Dpdemx8u.js", "assets/partner-details-dhb9vHKK.js", "assets/partner-earnings-0BF4BjEw.js", "assets/my-orders-CyTBSY_I.js", "assets/glovo-test-DRKquJsO.js", "assets/admin-glovo-integration-BVSCIWYx.js", "assets/webhook-CMu-F_1L.js", "assets/admin-chowdeck-integration-BS5D53Y3.js", "assets/admin-foodelo-integration-3V8ZNrqK.js", "assets/admin-email-logs-3VivBCKd.js", "assets/admin-notification-preferences-Uf5Q0zP8.js", "assets/tap-game-XPp3jz09.js", "assets/wallet-page-C_p5P8hV.js", "assets/points-page-CenTuQq5.js", "assets/profile-page-5biplcbQ.js", "assets/edit-profile-page-CXYIxZZH.js", "assets/addresses-DrFhiVAI.js", "assets/share-earn-page-UEUTOpTp.js", "assets/terms-of-service-DaxqTUvE.js", "assets/kitchen-display-W7mYQmEZ.js", "assets/debug-api-Dt_z-c9B.js", "assets/yum-bulk-DM3Elx8p.js", "assets/review-D1s8OAH6.js"])) => i.map((i2) => d[i2]);
var Oc = (e) => {
  throw TypeError(e);
};
var il = (e, t, n) => t.has(e) || Oc("Cannot " + n);
var _ = (e, t, n) => (il(e, t, "read from private field"), n ? n.call(e) : t.get(e)), U = (e, t, n) => t.has(e) ? Oc("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), L = (e, t, n, r) => (il(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), G = (e, t, n) => (il(e, t, "access private method"), n);
var di = (e, t, n, r) => ({ set _(o) {
  L(e, t, o, n);
}, get _() {
  return _(e, t, r);
} });
function ay(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r) if (o !== "default" && !(o in e)) {
        const i = Object.getOwnPropertyDescriptor(r, o);
        i && Object.defineProperty(e, o, i.get ? i : { enumerable: true, get: () => r[o] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function() {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o) if (i.type === "childList") for (const s of i.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: true, subtree: true });
  function n(o) {
    const i = {};
    return o.integrity && (i.integrity = o.integrity), o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? i.credentials = "include" : o.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
  }
  function r(o) {
    if (o.ep) return;
    o.ep = true;
    const i = n(o);
    fetch(o.href, i);
  }
})();
var aP = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Uf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vf = { exports: {} }, Rs = {}, Wf = { exports: {} }, Q = {};
/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var ni = /* @__PURE__ */ Symbol.for("react.element"), uy = /* @__PURE__ */ Symbol.for("react.portal"), cy = /* @__PURE__ */ Symbol.for("react.fragment"), dy = /* @__PURE__ */ Symbol.for("react.strict_mode"), fy = /* @__PURE__ */ Symbol.for("react.profiler"), py = /* @__PURE__ */ Symbol.for("react.provider"), hy = /* @__PURE__ */ Symbol.for("react.context"), my = /* @__PURE__ */ Symbol.for("react.forward_ref"), gy = /* @__PURE__ */ Symbol.for("react.suspense"), yy = /* @__PURE__ */ Symbol.for("react.memo"), vy = /* @__PURE__ */ Symbol.for("react.lazy"), Nc = Symbol.iterator;
function wy(e) {
  return e === null || typeof e != "object" ? null : (e = Nc && e[Nc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Bf = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Hf = Object.assign, Qf = {};
function Kr(e, t, n) {
  this.props = e, this.context = t, this.refs = Qf, this.updater = n || Bf;
}
Kr.prototype.isReactComponent = {};
Kr.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kr.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qf() {
}
qf.prototype = Kr.prototype;
function ou(e, t, n) {
  this.props = e, this.context = t, this.refs = Qf, this.updater = n || Bf;
}
var iu = ou.prototype = new qf();
iu.constructor = ou;
Hf(iu, Kr.prototype);
iu.isPureReactComponent = true;
var bc = Array.isArray, Gf = Object.prototype.hasOwnProperty, su = { current: null }, Kf = { key: true, ref: true, __self: true, __source: true };
function Yf(e, t, n) {
  var r, o = {}, i = null, s = null;
  if (t != null) for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Gf.call(t, r) && !Kf.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in l = e.defaultProps, l) o[r] === void 0 && (o[r] = l[r]);
  return { $$typeof: ni, type: e, key: i, ref: s, props: o, _owner: su.current };
}
function xy(e, t) {
  return { $$typeof: ni, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function lu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ni;
}
function Sy(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Ic = /\/+/g;
function sl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Sy("" + e.key) : t.toString(36);
}
function Li(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = false;
  if (e === null) s = true;
  else switch (i) {
    case "string":
    case "number":
      s = true;
      break;
    case "object":
      switch (e.$$typeof) {
        case ni:
        case uy:
          s = true;
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + sl(s, 0) : r, bc(o) ? (n = "", e != null && (n = e.replace(Ic, "$&/") + "/"), Li(o, t, n, "", function(u) {
    return u;
  })) : o != null && (lu(o) && (o = xy(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ic, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", bc(e)) for (var l = 0; l < e.length; l++) {
    i = e[l];
    var a = r + sl(i, l);
    s += Li(i, t, n, a, o);
  }
  else if (a = wy(e), typeof a == "function") for (e = a.call(e), l = 0; !(i = e.next()).done; ) i = i.value, a = r + sl(i, l++), s += Li(i, t, n, a, o);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s;
}
function fi(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return Li(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Ey(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ie = { current: null }, Di = { transition: null }, _y = { ReactCurrentDispatcher: Ie, ReactCurrentBatchConfig: Di, ReactCurrentOwner: su };
function Xf() {
  throw Error("act(...) is not supported in production builds of React.");
}
Q.Children = { map: fi, forEach: function(e, t, n) {
  fi(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return fi(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return fi(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!lu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
Q.Component = Kr;
Q.Fragment = cy;
Q.Profiler = fy;
Q.PureComponent = ou;
Q.StrictMode = dy;
Q.Suspense = gy;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _y;
Q.act = Xf;
Q.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Hf({}, e.props), o = e.key, i = e.ref, s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = su.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
    for (a in t) Gf.call(t, a) && !Kf.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: ni, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Q.createContext = function(e) {
  return e = { $$typeof: hy, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: py, _context: e }, e.Consumer = e;
};
Q.createElement = Yf;
Q.createFactory = function(e) {
  var t = Yf.bind(null, e);
  return t.type = e, t;
};
Q.createRef = function() {
  return { current: null };
};
Q.forwardRef = function(e) {
  return { $$typeof: my, render: e };
};
Q.isValidElement = lu;
Q.lazy = function(e) {
  return { $$typeof: vy, _payload: { _status: -1, _result: e }, _init: Ey };
};
Q.memo = function(e, t) {
  return { $$typeof: yy, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function(e) {
  var t = Di.transition;
  Di.transition = {};
  try {
    e();
  } finally {
    Di.transition = t;
  }
};
Q.unstable_act = Xf;
Q.useCallback = function(e, t) {
  return Ie.current.useCallback(e, t);
};
Q.useContext = function(e) {
  return Ie.current.useContext(e);
};
Q.useDebugValue = function() {
};
Q.useDeferredValue = function(e) {
  return Ie.current.useDeferredValue(e);
};
Q.useEffect = function(e, t) {
  return Ie.current.useEffect(e, t);
};
Q.useId = function() {
  return Ie.current.useId();
};
Q.useImperativeHandle = function(e, t, n) {
  return Ie.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function(e, t) {
  return Ie.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function(e, t) {
  return Ie.current.useLayoutEffect(e, t);
};
Q.useMemo = function(e, t) {
  return Ie.current.useMemo(e, t);
};
Q.useReducer = function(e, t, n) {
  return Ie.current.useReducer(e, t, n);
};
Q.useRef = function(e) {
  return Ie.current.useRef(e);
};
Q.useState = function(e) {
  return Ie.current.useState(e);
};
Q.useSyncExternalStore = function(e, t, n) {
  return Ie.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function() {
  return Ie.current.useTransition();
};
Q.version = "18.3.1";
Wf.exports = Q;
var v = Wf.exports;
const Xt = Uf(v), Zf = ay({ __proto__: null, default: Xt }, [v]);
/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Py = v, Cy = /* @__PURE__ */ Symbol.for("react.element"), ky = /* @__PURE__ */ Symbol.for("react.fragment"), Ty = Object.prototype.hasOwnProperty, Ry = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ay = { key: true, ref: true, __self: true, __source: true };
function Jf(e, t, n) {
  var r, o = {}, i = null, s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) Ty.call(t, r) && !Ay.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Cy, type: e, key: i, ref: s, props: o, _owner: Ry.current };
}
Rs.Fragment = ky;
Rs.jsx = Jf;
Rs.jsxs = Jf;
Vf.exports = Rs;
var h = Vf.exports, ep = { exports: {} }, Ye = {}, tp = { exports: {} }, np = {};
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function(e) {
  function t(R, b) {
    var F = R.length;
    R.push(b);
    e: for (; 0 < F; ) {
      var B = F - 1 >>> 1, se = R[B];
      if (0 < o(se, b)) R[B] = b, R[F] = se, F = B;
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var b = R[0], F = R.pop();
    if (F !== b) {
      R[0] = F;
      e: for (var B = 0, se = R.length, lt = se >>> 1; B < lt; ) {
        var Ze = 2 * (B + 1) - 1, no = R[Ze], It = Ze + 1, Nn = R[It];
        if (0 > o(no, F)) It < se && 0 > o(Nn, no) ? (R[B] = Nn, R[It] = F, B = It) : (R[B] = no, R[Ze] = F, B = Ze);
        else if (It < se && 0 > o(Nn, F)) R[B] = Nn, R[It] = F, B = It;
        else break e;
      }
    }
    return b;
  }
  function o(R, b) {
    var F = R.sortIndex - b.sortIndex;
    return F !== 0 ? F : R.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var s = Date, l = s.now();
    e.unstable_now = function() {
      return s.now() - l;
    };
  }
  var a = [], u = [], d = 1, c = null, p = 3, w = false, x = false, g = false, S = typeof setTimeout == "function" ? setTimeout : null, m = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(R) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= R) r(u), b.sortIndex = b.expirationTime, t(a, b);
      else break;
      b = n(u);
    }
  }
  function E(R) {
    if (g = false, y(R), !x) if (n(a) !== null) x = true, H(P);
    else {
      var b = n(u);
      b !== null && Z(E, b.startTime - R);
    }
  }
  function P(R, b) {
    x = false, g && (g = false, m(T), T = -1), w = true;
    var F = p;
    try {
      for (y(b), c = n(a); c !== null && (!(c.expirationTime > b) || R && !V()); ) {
        var B = c.callback;
        if (typeof B == "function") {
          c.callback = null, p = c.priorityLevel;
          var se = B(c.expirationTime <= b);
          b = e.unstable_now(), typeof se == "function" ? c.callback = se : c === n(a) && r(a), y(b);
        } else r(a);
        c = n(a);
      }
      if (c !== null) var lt = true;
      else {
        var Ze = n(u);
        Ze !== null && Z(E, Ze.startTime - b), lt = false;
      }
      return lt;
    } finally {
      c = null, p = F, w = false;
    }
  }
  var k = false, C = null, T = -1, O = 5, N = -1;
  function V() {
    return !(e.unstable_now() - N < O);
  }
  function D() {
    if (C !== null) {
      var R = e.unstable_now();
      N = R;
      var b = true;
      try {
        b = C(true, R);
      } finally {
        b ? Y() : (k = false, C = null);
      }
    } else k = false;
  }
  var Y;
  if (typeof f == "function") Y = function() {
    f(D);
  };
  else if (typeof MessageChannel < "u") {
    var j = new MessageChannel(), J = j.port2;
    j.port1.onmessage = D, Y = function() {
      J.postMessage(null);
    };
  } else Y = function() {
    S(D, 0);
  };
  function H(R) {
    C = R, k || (k = true, Y());
  }
  function Z(R, b) {
    T = S(function() {
      R(e.unstable_now());
    }, b);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(R) {
    R.callback = null;
  }, e.unstable_continueExecution = function() {
    x || w || (x = true, H(P));
  }, e.unstable_forceFrameRate = function(R) {
    0 > R || 125 < R ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : O = 0 < R ? Math.floor(1e3 / R) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(R) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = p;
    }
    var F = p;
    p = b;
    try {
      return R();
    } finally {
      p = F;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(R, b) {
    switch (R) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        R = 3;
    }
    var F = p;
    p = R;
    try {
      return b();
    } finally {
      p = F;
    }
  }, e.unstable_scheduleCallback = function(R, b, F) {
    var B = e.unstable_now();
    switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? B + F : B) : F = B, R) {
      case 1:
        var se = -1;
        break;
      case 2:
        se = 250;
        break;
      case 5:
        se = 1073741823;
        break;
      case 4:
        se = 1e4;
        break;
      default:
        se = 5e3;
    }
    return se = F + se, R = { id: d++, callback: b, priorityLevel: R, startTime: F, expirationTime: se, sortIndex: -1 }, F > B ? (R.sortIndex = F, t(u, R), n(a) === null && R === n(u) && (g ? (m(T), T = -1) : g = true, Z(E, F - B))) : (R.sortIndex = se, t(a, R), x || w || (x = true, H(P))), R;
  }, e.unstable_shouldYield = V, e.unstable_wrapCallback = function(R) {
    var b = p;
    return function() {
      var F = p;
      p = b;
      try {
        return R.apply(this, arguments);
      } finally {
        p = F;
      }
    };
  };
})(np);
tp.exports = np;
var Oy = tp.exports;
/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Ny = v, Ke = Oy;
function A(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var rp = /* @__PURE__ */ new Set(), Oo = {};
function Jn(e, t) {
  Fr(e, t), Fr(e + "Capture", t);
}
function Fr(e, t) {
  for (Oo[e] = t, e = 0; e < t.length; e++) rp.add(t[e]);
}
var Ut = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wl = Object.prototype.hasOwnProperty, by = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, jc = {}, Lc = {};
function Iy(e) {
  return Wl.call(Lc, e) ? true : Wl.call(jc, e) ? false : by.test(e) ? Lc[e] = true : (jc[e] = true, false);
}
function jy(e, t, n, r) {
  if (n !== null && n.type === 0) return false;
  switch (typeof t) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      return r ? false : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return false;
  }
}
function Ly(e, t, n, r) {
  if (t === null || typeof t > "u" || jy(e, t, n, r)) return true;
  if (r) return false;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === false;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return false;
}
function je(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s;
}
var _e = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  _e[e] = new je(e, 0, false, e, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  _e[t] = new je(t, 1, false, e[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  _e[e] = new je(e, 2, false, e.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  _e[e] = new je(e, 2, false, e, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  _e[e] = new je(e, 3, false, e.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  _e[e] = new je(e, 3, true, e, null, false, false);
});
["capture", "download"].forEach(function(e) {
  _e[e] = new je(e, 4, false, e, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  _e[e] = new je(e, 6, false, e, null, false, false);
});
["rowSpan", "start"].forEach(function(e) {
  _e[e] = new je(e, 5, false, e.toLowerCase(), null, false, false);
});
var au = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(au, uu);
  _e[t] = new je(t, 1, false, e, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(au, uu);
  _e[t] = new je(t, 1, false, e, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(au, uu);
  _e[t] = new je(t, 1, false, e, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  _e[e] = new je(e, 1, false, e.toLowerCase(), null, false, false);
});
_e.xlinkHref = new je("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(e) {
  _e[e] = new je(e, 1, false, e.toLowerCase(), null, true, true);
});
function cu(e, t, n, r) {
  var o = _e.hasOwnProperty(t) ? _e[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Ly(t, n, o, r) && (n = null), r || o === null ? Iy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? false : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === true ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var qt = Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pi = /* @__PURE__ */ Symbol.for("react.element"), rr = /* @__PURE__ */ Symbol.for("react.portal"), or = /* @__PURE__ */ Symbol.for("react.fragment"), du = /* @__PURE__ */ Symbol.for("react.strict_mode"), Bl = /* @__PURE__ */ Symbol.for("react.profiler"), op = /* @__PURE__ */ Symbol.for("react.provider"), ip = /* @__PURE__ */ Symbol.for("react.context"), fu = /* @__PURE__ */ Symbol.for("react.forward_ref"), Hl = /* @__PURE__ */ Symbol.for("react.suspense"), Ql = /* @__PURE__ */ Symbol.for("react.suspense_list"), pu = /* @__PURE__ */ Symbol.for("react.memo"), Jt = /* @__PURE__ */ Symbol.for("react.lazy"), sp = /* @__PURE__ */ Symbol.for("react.offscreen"), Dc = Symbol.iterator;
function oo(e) {
  return e === null || typeof e != "object" ? null : (e = Dc && e[Dc] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ce = Object.assign, ll;
function mo(e) {
  if (ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    ll = t && t[1] || "";
  }
  return `
` + ll + e;
}
var al = false;
function ul(e, t) {
  if (!e || al) return "";
  al = true;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (u) {
        var r = u;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (u) {
        r = u;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, l = i.length - 1; 1 <= s && 0 <= l && o[s] !== i[l]; ) l--;
      for (; 1 <= s && 0 <= l; s--, l--) if (o[s] !== i[l]) {
        if (s !== 1 || l !== 1) do
          if (s--, l--, 0 > l || o[s] !== i[l]) {
            var a = `
` + o[s].replace(" at new ", " at ");
            return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
          }
        while (1 <= s && 0 <= l);
        break;
      }
    }
  } finally {
    al = false, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? mo(e) : "";
}
function Dy(e) {
  switch (e.tag) {
    case 5:
      return mo(e.type);
    case 16:
      return mo("Lazy");
    case 13:
      return mo("Suspense");
    case 19:
      return mo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = ul(e.type, false), e;
    case 11:
      return e = ul(e.type.render, false), e;
    case 1:
      return e = ul(e.type, true), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case rr:
      return "Portal";
    case Bl:
      return "Profiler";
    case du:
      return "StrictMode";
    case Hl:
      return "Suspense";
    case Ql:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ip:
      return (e.displayName || "Context") + ".Consumer";
    case op:
      return (e._context.displayName || "Context") + ".Provider";
    case fu:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pu:
      return t = e.displayName || null, t !== null ? t : ql(e.type) || "Memo";
    case Jt:
      t = e._payload, e = e._init;
      try {
        return ql(e(t));
      } catch (e2) {
      }
  }
  return null;
}
function My(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ql(t);
    case 8:
      return t === du ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Sn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function lp(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Fy(e) {
  var t = lp(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: true, get: function() {
      return o.call(this);
    }, set: function(s) {
      r = "" + s, i.call(this, s);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(s) {
      r = "" + s;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function hi(e) {
  e._valueTracker || (e._valueTracker = Fy(e));
}
function ap(e) {
  if (!e) return false;
  var t = e._valueTracker;
  if (!t) return true;
  var n = t.getValue(), r = "";
  return e && (r = lp(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), true) : false;
}
function Xi(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch (e2) {
    return e.body;
  }
}
function Gl(e, t) {
  var n = t.checked;
  return ce({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n != null ? n : e._wrapperState.initialChecked });
}
function Mc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Sn(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function up(e, t) {
  t = t.checked, t != null && cu(e, "checked", t, false);
}
function Kl(e, t) {
  up(e, t);
  var n = Sn(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yl(e, t.type, Sn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Yl(e, t, n) {
  (t !== "number" || Xi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var go = Array.isArray;
function gr(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = true;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = true);
  } else {
    for (n = "" + Sn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = true, r && (e[o].defaultSelected = true);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = true);
  }
}
function Xl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(A(91));
  return ce({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function zc(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(A(92));
      if (go(n)) {
        if (1 < n.length) throw Error(A(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Sn(n) };
}
function cp(e, t) {
  var n = Sn(t.value), r = Sn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function $c(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Zl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? dp(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var mi, fp = (function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
})(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (mi = mi || document.createElement("div"), mi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = mi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function No(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xo = { animationIterationCount: true, aspectRatio: true, borderImageOutset: true, borderImageSlice: true, borderImageWidth: true, boxFlex: true, boxFlexGroup: true, boxOrdinalGroup: true, columnCount: true, columns: true, flex: true, flexGrow: true, flexPositive: true, flexShrink: true, flexNegative: true, flexOrder: true, gridArea: true, gridRow: true, gridRowEnd: true, gridRowSpan: true, gridRowStart: true, gridColumn: true, gridColumnEnd: true, gridColumnSpan: true, gridColumnStart: true, fontWeight: true, lineClamp: true, lineHeight: true, opacity: true, order: true, orphans: true, tabSize: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeDasharray: true, strokeDashoffset: true, strokeMiterlimit: true, strokeOpacity: true, strokeWidth: true }, zy = ["Webkit", "ms", "Moz", "O"];
Object.keys(xo).forEach(function(e) {
  zy.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), xo[t] = xo[e];
  });
});
function pp(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || xo.hasOwnProperty(e) && xo[e] ? ("" + t).trim() : t + "px";
}
function hp(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = pp(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var $y = ce({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function Jl(e, t) {
  if (t) {
    if ($y[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(A(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(A(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(A(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(A(62));
  }
}
function ea(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var ta = null;
function hu(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var na = null, yr = null, vr = null;
function Uc(e) {
  if (e = ii(e)) {
    if (typeof na != "function") throw Error(A(280));
    var t = e.stateNode;
    t && (t = Is(t), na(e.stateNode, e.type, t));
  }
}
function mp(e) {
  yr ? vr ? vr.push(e) : vr = [e] : yr = e;
}
function gp() {
  if (yr) {
    var e = yr, t = vr;
    if (vr = yr = null, Uc(e), t) for (e = 0; e < t.length; e++) Uc(t[e]);
  }
}
function yp(e, t) {
  return e(t);
}
function vp() {
}
var cl = false;
function wp(e, t, n) {
  if (cl) return e(t, n);
  cl = true;
  try {
    return yp(e, t, n);
  } finally {
    cl = false, (yr !== null || vr !== null) && (vp(), gp());
  }
}
function bo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Is(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = false;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(A(231, t, typeof n));
  return n;
}
var ra = false;
if (Ut) try {
  var io = {};
  Object.defineProperty(io, "passive", { get: function() {
    ra = true;
  } }), window.addEventListener("test", io, io), window.removeEventListener("test", io, io);
} catch (e) {
  ra = false;
}
function Uy(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var So = false, Zi = null, Ji = false, oa = null, Vy = { onError: function(e) {
  So = true, Zi = e;
} };
function Wy(e, t, n, r, o, i, s, l, a) {
  So = false, Zi = null, Uy.apply(Vy, arguments);
}
function By(e, t, n, r, o, i, s, l, a) {
  if (Wy.apply(this, arguments), So) {
    if (So) {
      var u = Zi;
      So = false, Zi = null;
    } else throw Error(A(198));
    Ji || (Ji = true, oa = u);
  }
}
function er(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function xp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vc(e) {
  if (er(e) !== e) throw Error(A(188));
}
function Hy(e) {
  var t = e.alternate;
  if (!t) {
    if (t = er(e), t === null) throw Error(A(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Vc(o), e;
        if (i === r) return Vc(o), t;
        i = i.sibling;
      }
      throw Error(A(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = false, l = o.child; l; ) {
        if (l === n) {
          s = true, n = o, r = i;
          break;
        }
        if (l === r) {
          s = true, r = o, n = i;
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            s = true, n = i, r = o;
            break;
          }
          if (l === r) {
            s = true, r = i, n = o;
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(A(189));
      }
    }
    if (n.alternate !== r) throw Error(A(190));
  }
  if (n.tag !== 3) throw Error(A(188));
  return n.stateNode.current === n ? e : t;
}
function Sp(e) {
  return e = Hy(e), e !== null ? Ep(e) : null;
}
function Ep(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ep(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _p = Ke.unstable_scheduleCallback, Wc = Ke.unstable_cancelCallback, Qy = Ke.unstable_shouldYield, qy = Ke.unstable_requestPaint, pe = Ke.unstable_now, Gy = Ke.unstable_getCurrentPriorityLevel, mu = Ke.unstable_ImmediatePriority, Pp = Ke.unstable_UserBlockingPriority, es = Ke.unstable_NormalPriority, Ky = Ke.unstable_LowPriority, Cp = Ke.unstable_IdlePriority, As = null, Tt = null;
function Yy(e) {
  if (Tt && typeof Tt.onCommitFiberRoot == "function") try {
    Tt.onCommitFiberRoot(As, e, void 0, (e.current.flags & 128) === 128);
  } catch (e2) {
  }
}
var ht = Math.clz32 ? Math.clz32 : Jy, Xy = Math.log, Zy = Math.LN2;
function Jy(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Xy(e) / Zy | 0) | 0;
}
var gi = 64, yi = 4194304;
function yo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ts(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, o = e.suspendedLanes, i = e.pingedLanes, s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? r = yo(l) : (i &= s, i !== 0 && (r = yo(i)));
  } else s = n & ~o, s !== 0 ? r = yo(s) : i !== 0 && (r = yo(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - ht(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function ev(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function tv(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var s = 31 - ht(i), l = 1 << s, a = o[s];
    a === -1 ? (!(l & n) || l & r) && (o[s] = ev(l, t)) : a <= t && (e.expiredLanes |= l), i &= ~l;
  }
}
function ia(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function kp() {
  var e = gi;
  return gi <<= 1, !(gi & 4194240) && (gi = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ri(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - ht(t), e[t] = n;
}
function nv(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - ht(n), i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i;
  }
}
function gu(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - ht(n), o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o;
  }
}
var te = 0;
function Tp(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Rp, yu, Ap, Op, Np, sa = false, vi = [], pn = null, hn = null, mn = null, Io = /* @__PURE__ */ new Map(), jo = /* @__PURE__ */ new Map(), tn = [], rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Bc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      mn = null;
      break;
    case "pointerover":
    case "pointerout":
      Io.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      jo.delete(t.pointerId);
  }
}
function so(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }, t !== null && (t = ii(t), t !== null && yu(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function ov(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return pn = so(pn, e, t, n, r, o), true;
    case "dragenter":
      return hn = so(hn, e, t, n, r, o), true;
    case "mouseover":
      return mn = so(mn, e, t, n, r, o), true;
    case "pointerover":
      var i = o.pointerId;
      return Io.set(i, so(Io.get(i) || null, e, t, n, r, o)), true;
    case "gotpointercapture":
      return i = o.pointerId, jo.set(i, so(jo.get(i) || null, e, t, n, r, o)), true;
  }
  return false;
}
function bp(e) {
  var t = jn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = xp(n), t !== null) {
          e.blockedOn = t, Np(e.priority, function() {
            Ap(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mi(e) {
  if (e.blockedOn !== null) return false;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = la(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ta = r, n.target.dispatchEvent(r), ta = null;
    } else return t = ii(n), t !== null && yu(t), e.blockedOn = n, false;
    t.shift();
  }
  return true;
}
function Hc(e, t, n) {
  Mi(e) && n.delete(t);
}
function iv() {
  sa = false, pn !== null && Mi(pn) && (pn = null), hn !== null && Mi(hn) && (hn = null), mn !== null && Mi(mn) && (mn = null), Io.forEach(Hc), jo.forEach(Hc);
}
function lo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, sa || (sa = true, Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, iv)));
}
function Lo(e) {
  function t(o) {
    return lo(o, e);
  }
  if (0 < vi.length) {
    lo(vi[0], e);
    for (var n = 1; n < vi.length; n++) {
      var r = vi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (pn !== null && lo(pn, e), hn !== null && lo(hn, e), mn !== null && lo(mn, e), Io.forEach(t), jo.forEach(t), n = 0; n < tn.length; n++) r = tn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tn.length && (n = tn[0], n.blockedOn === null); ) bp(n), n.blockedOn === null && tn.shift();
}
var wr = qt.ReactCurrentBatchConfig, ns = true;
function sv(e, t, n, r) {
  var o = te, i = wr.transition;
  wr.transition = null;
  try {
    te = 1, vu(e, t, n, r);
  } finally {
    te = o, wr.transition = i;
  }
}
function lv(e, t, n, r) {
  var o = te, i = wr.transition;
  wr.transition = null;
  try {
    te = 4, vu(e, t, n, r);
  } finally {
    te = o, wr.transition = i;
  }
}
function vu(e, t, n, r) {
  if (ns) {
    var o = la(e, t, n, r);
    if (o === null) Sl(e, t, r, rs, n), Bc(e, r);
    else if (ov(o, e, t, n, r)) r.stopPropagation();
    else if (Bc(e, r), t & 4 && -1 < rv.indexOf(e)) {
      for (; o !== null; ) {
        var i = ii(o);
        if (i !== null && Rp(i), i = la(e, t, n, r), i === null && Sl(e, t, r, rs, n), i === o) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Sl(e, t, r, null, n);
  }
}
var rs = null;
function la(e, t, n, r) {
  if (rs = null, e = hu(r), e = jn(e), e !== null) if (t = er(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = xp(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return rs = e, null;
}
function Ip(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Gy()) {
        case mu:
          return 1;
        case Pp:
          return 4;
        case es:
        case Ky:
          return 16;
        case Cp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dn = null, wu = null, Fi = null;
function jp() {
  if (Fi) return Fi;
  var e, t = wu, n = t.length, r, o = "value" in dn ? dn.value : dn.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++) ;
  return Fi = o.slice(e, 1 < r ? 1 - r : void 0);
}
function zi(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function wi() {
  return true;
}
function Qc() {
  return false;
}
function Xe(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(i) : i[l]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === false) ? wi : Qc, this.isPropagationStopped = Qc, this;
  }
  return ce(t.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = false), this.isDefaultPrevented = wi);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = true), this.isPropagationStopped = wi);
  }, persist: function() {
  }, isPersistent: wi }), t;
}
var Yr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, xu = Xe(Yr), oi = ce({}, Yr, { view: 0, detail: 0 }), av = Xe(oi), fl, pl, ao, Os = ce({}, oi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Su, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== ao && (ao && e.type === "mousemove" ? (fl = e.screenX - ao.screenX, pl = e.screenY - ao.screenY) : pl = fl = 0, ao = e), fl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : pl;
} }), qc = Xe(Os), uv = ce({}, Os, { dataTransfer: 0 }), cv = Xe(uv), dv = ce({}, oi, { relatedTarget: 0 }), hl = Xe(dv), fv = ce({}, Yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pv = Xe(fv), hv = ce({}, Yr, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), mv = Xe(hv), gv = ce({}, Yr, { data: 0 }), Gc = Xe(gv), yv = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, vv = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, wv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = wv[e]) ? !!t[e] : false;
}
function Su() {
  return xv;
}
var Sv = ce({}, oi, { key: function(e) {
  if (e.key) {
    var t = yv[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vv[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Su, charCode: function(e) {
  return e.type === "keypress" ? zi(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ev = Xe(Sv), _v = ce({}, Os, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Kc = Xe(_v), Pv = ce({}, oi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Su }), Cv = Xe(Pv), kv = ce({}, Yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = Xe(kv), Rv = ce({}, Os, { deltaX: function(e) {
  return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
}, deltaY: function(e) {
  return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 }), Av = Xe(Rv), Ov = [9, 13, 27, 32], Eu = Ut && "CompositionEvent" in window, Eo = null;
Ut && "documentMode" in document && (Eo = document.documentMode);
var Nv = Ut && "TextEvent" in window && !Eo, Lp = Ut && (!Eu || Eo && 8 < Eo && 11 >= Eo), Yc = " ", Xc = false;
function Dp(e, t) {
  switch (e) {
    case "keyup":
      return Ov.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function Mp(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var ir = false;
function bv(e, t) {
  switch (e) {
    case "compositionend":
      return Mp(t);
    case "keypress":
      return t.which !== 32 ? null : (Xc = true, Yc);
    case "textInput":
      return e = t.data, e === Yc && Xc ? null : e;
    default:
      return null;
  }
}
function Iv(e, t) {
  if (ir) return e === "compositionend" || !Eu && Dp(e, t) ? (e = jp(), Fi = wu = dn = null, ir = false, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lp && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var jv = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function Zc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!jv[e.type] : t === "textarea";
}
function Fp(e, t, n, r) {
  mp(r), t = os(t, "onChange"), 0 < t.length && (n = new xu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var _o = null, Do = null;
function Lv(e) {
  Kp(e, 0);
}
function Ns(e) {
  var t = ar(e);
  if (ap(t)) return e;
}
function Dv(e, t) {
  if (e === "change") return t;
}
var zp = false;
if (Ut) {
  var ml;
  if (Ut) {
    var gl = "oninput" in document;
    if (!gl) {
      var Jc = document.createElement("div");
      Jc.setAttribute("oninput", "return;"), gl = typeof Jc.oninput == "function";
    }
    ml = gl;
  } else ml = false;
  zp = ml && (!document.documentMode || 9 < document.documentMode);
}
function ed() {
  _o && (_o.detachEvent("onpropertychange", $p), Do = _o = null);
}
function $p(e) {
  if (e.propertyName === "value" && Ns(Do)) {
    var t = [];
    Fp(t, Do, e, hu(e)), wp(Lv, t);
  }
}
function Mv(e, t, n) {
  e === "focusin" ? (ed(), _o = t, Do = n, _o.attachEvent("onpropertychange", $p)) : e === "focusout" && ed();
}
function Fv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ns(Do);
}
function zv(e, t) {
  if (e === "click") return Ns(t);
}
function $v(e, t) {
  if (e === "input" || e === "change") return Ns(t);
}
function Uv(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var gt = typeof Object.is == "function" ? Object.is : Uv;
function Mo(e, t) {
  if (gt(e, t)) return true;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return false;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Wl.call(t, o) || !gt(e[o], t[o])) return false;
  }
  return true;
}
function td(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nd(e, t) {
  var n = td(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = td(n);
  }
}
function Up(e, t) {
  return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Up(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
}
function Vp() {
  for (var e = window, t = Xi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch (e2) {
      n = false;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xi(e.document);
  }
  return t;
}
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Vv(e) {
  var t = Vp(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Up(n.ownerDocument.documentElement, n)) {
    if (r !== null && _u(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length, i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = nd(n, i);
        var s = nd(n, r);
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var Wv = Ut && "documentMode" in document && 11 >= document.documentMode, sr = null, aa = null, Po = null, ua = false;
function rd(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ua || sr == null || sr !== Xi(r) || (r = sr, "selectionStart" in r && _u(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Po && Mo(Po, r) || (Po = r, r = os(aa, "onSelect"), 0 < r.length && (t = new xu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = sr)));
}
function xi(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var lr = { animationend: xi("Animation", "AnimationEnd"), animationiteration: xi("Animation", "AnimationIteration"), animationstart: xi("Animation", "AnimationStart"), transitionend: xi("Transition", "TransitionEnd") }, yl = {}, Wp = {};
Ut && (Wp = document.createElement("div").style, "AnimationEvent" in window || (delete lr.animationend.animation, delete lr.animationiteration.animation, delete lr.animationstart.animation), "TransitionEvent" in window || delete lr.transitionend.transition);
function bs(e) {
  if (yl[e]) return yl[e];
  if (!lr[e]) return e;
  var t = lr[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Wp) return yl[e] = t[n];
  return e;
}
var Bp = bs("animationend"), Hp = bs("animationiteration"), Qp = bs("animationstart"), qp = bs("transitionend"), Gp = /* @__PURE__ */ new Map(), od = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Tn(e, t) {
  Gp.set(e, t), Jn(t, [e]);
}
for (var vl = 0; vl < od.length; vl++) {
  var wl = od[vl], Bv = wl.toLowerCase(), Hv = wl[0].toUpperCase() + wl.slice(1);
  Tn(Bv, "on" + Hv);
}
Tn(Bp, "onAnimationEnd");
Tn(Hp, "onAnimationIteration");
Tn(Qp, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(qp, "onTransitionEnd");
Fr("onMouseEnter", ["mouseout", "mouseover"]);
Fr("onMouseLeave", ["mouseout", "mouseover"]);
Fr("onPointerEnter", ["pointerout", "pointerover"]);
Fr("onPointerLeave", ["pointerout", "pointerover"]);
Jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var vo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Qv = new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));
function id(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, By(r, t, void 0, e), e.currentTarget = null;
}
function Kp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var s = r.length - 1; 0 <= s; s--) {
        var l = r[s], a = l.instance, u = l.currentTarget;
        if (l = l.listener, a !== i && o.isPropagationStopped()) break e;
        id(o, l, u), i = a;
      }
      else for (s = 0; s < r.length; s++) {
        if (l = r[s], a = l.instance, u = l.currentTarget, l = l.listener, a !== i && o.isPropagationStopped()) break e;
        id(o, l, u), i = a;
      }
    }
  }
  if (Ji) throw e = oa, Ji = false, oa = null, e;
}
function oe(e, t) {
  var n = t[ha];
  n === void 0 && (n = t[ha] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Yp(t, e, 2, false), n.add(r));
}
function xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Yp(n, e, r, t);
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function Fo(e) {
  if (!e[Si]) {
    e[Si] = true, rp.forEach(function(n) {
      n !== "selectionchange" && (Qv.has(n) || xl(n, false, e), xl(n, true, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Si] || (t[Si] = true, xl("selectionchange", false, t));
  }
}
function Yp(e, t, n, r) {
  switch (Ip(t)) {
    case 1:
      var o = sv;
      break;
    case 4:
      o = lv;
      break;
    default:
      o = vu;
  }
  n = o.bind(null, t, n, e), o = void 0, !ra || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = true), r ? o !== void 0 ? e.addEventListener(t, n, { capture: true, passive: o }) : e.addEventListener(t, n, true) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, false);
}
function Sl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var l = r.stateNode.containerInfo;
      if (l === o || l.nodeType === 8 && l.parentNode === o) break;
      if (s === 4) for (s = r.return; s !== null; ) {
        var a = s.tag;
        if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === o || a.nodeType === 8 && a.parentNode === o)) return;
        s = s.return;
      }
      for (; l !== null; ) {
        if (s = jn(l), s === null) return;
        if (a = s.tag, a === 5 || a === 6) {
          r = i = s;
          continue e;
        }
        l = l.parentNode;
      }
    }
    r = r.return;
  }
  wp(function() {
    var u = i, d = hu(n), c = [];
    e: {
      var p = Gp.get(e);
      if (p !== void 0) {
        var w = xu, x = e;
        switch (e) {
          case "keypress":
            if (zi(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Ev;
            break;
          case "focusin":
            x = "focus", w = hl;
            break;
          case "focusout":
            x = "blur", w = hl;
            break;
          case "beforeblur":
          case "afterblur":
            w = hl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = qc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = cv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Cv;
            break;
          case Bp:
          case Hp:
          case Qp:
            w = pv;
            break;
          case qp:
            w = Tv;
            break;
          case "scroll":
            w = av;
            break;
          case "wheel":
            w = Av;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = mv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Kc;
        }
        var g = (t & 4) !== 0, S = !g && e === "scroll", m = g ? p !== null ? p + "Capture" : null : p;
        g = [];
        for (var f = u, y; f !== null; ) {
          y = f;
          var E = y.stateNode;
          if (y.tag === 5 && E !== null && (y = E, m !== null && (E = bo(f, m), E != null && g.push(zo(f, E, y)))), S) break;
          f = f.return;
        }
        0 < g.length && (p = new w(p, x, null, n, d), c.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== ta && (x = n.relatedTarget || n.fromElement) && (jn(x) || x[Vt])) break e;
        if ((w || p) && (p = d.window === d ? d : (p = d.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (x = n.relatedTarget || n.toElement, w = u, x = x ? jn(x) : null, x !== null && (S = er(x), x !== S || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null, x = u), w !== x)) {
          if (g = qc, E = "onMouseLeave", m = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (g = Kc, E = "onPointerLeave", m = "onPointerEnter", f = "pointer"), S = w == null ? p : ar(w), y = x == null ? p : ar(x), p = new g(E, f + "leave", w, n, d), p.target = S, p.relatedTarget = y, E = null, jn(d) === u && (g = new g(m, f + "enter", x, n, d), g.target = y, g.relatedTarget = S, E = g), S = E, w && x) t: {
            for (g = w, m = x, f = 0, y = g; y; y = nr(y)) f++;
            for (y = 0, E = m; E; E = nr(E)) y++;
            for (; 0 < f - y; ) g = nr(g), f--;
            for (; 0 < y - f; ) m = nr(m), y--;
            for (; f--; ) {
              if (g === m || m !== null && g === m.alternate) break t;
              g = nr(g), m = nr(m);
            }
            g = null;
          }
          else g = null;
          w !== null && sd(c, p, w, g, false), x !== null && S !== null && sd(c, S, x, g, true);
        }
      }
      e: {
        if (p = u ? ar(u) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var P = Dv;
        else if (Zc(p)) if (zp) P = $v;
        else {
          P = Fv;
          var k = Mv;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (P = zv);
        if (P && (P = P(e, u))) {
          Fp(c, P, n, d);
          break e;
        }
        k && k(e, p, u), e === "focusout" && (k = p._wrapperState) && k.controlled && p.type === "number" && Yl(p, "number", p.value);
      }
      switch (k = u ? ar(u) : window, e) {
        case "focusin":
          (Zc(k) || k.contentEditable === "true") && (sr = k, aa = u, Po = null);
          break;
        case "focusout":
          Po = aa = sr = null;
          break;
        case "mousedown":
          ua = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ua = false, rd(c, n, d);
          break;
        case "selectionchange":
          if (Wv) break;
        case "keydown":
        case "keyup":
          rd(c, n, d);
      }
      var C;
      if (Eu) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else ir ? Dp(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Lp && n.locale !== "ko" && (ir || T !== "onCompositionStart" ? T === "onCompositionEnd" && ir && (C = jp()) : (dn = d, wu = "value" in dn ? dn.value : dn.textContent, ir = true)), k = os(u, T), 0 < k.length && (T = new Gc(T, e, null, n, d), c.push({ event: T, listeners: k }), C ? T.data = C : (C = Mp(n), C !== null && (T.data = C)))), (C = Nv ? bv(e, n) : Iv(e, n)) && (u = os(u, "onBeforeInput"), 0 < u.length && (d = new Gc("onBeforeInput", "beforeinput", null, n, d), c.push({ event: d, listeners: u }), d.data = C));
    }
    Kp(c, t);
  });
}
function zo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function os(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = bo(e, n), i != null && r.unshift(zo(e, i, o)), i = bo(e, t), i != null && r.push(zo(e, i, o))), e = e.return;
  }
  return r;
}
function nr(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function sd(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n, a = l.alternate, u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 && u !== null && (l = u, o ? (a = bo(n, i), a != null && s.unshift(zo(n, a, l))) : o || (a = bo(n, i), a != null && s.push(zo(n, a, l)))), n = n.return;
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var qv = /\r\n?/g, Gv = /\u0000|\uFFFD/g;
function ld(e) {
  return (typeof e == "string" ? e : "" + e).replace(qv, `
`).replace(Gv, "");
}
function Ei(e, t, n) {
  if (t = ld(t), ld(e) !== t && n) throw Error(A(425));
}
function is() {
}
var ca = null, da = null;
function fa(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var pa = typeof setTimeout == "function" ? setTimeout : void 0, Kv = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, Yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(e) {
  return ad.resolve(null).then(e).catch(Xv);
} : pa;
function Xv(e) {
  setTimeout(function() {
    throw e;
  });
}
function El(e, t) {
  var n = t, r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
      if (r === 0) {
        e.removeChild(o), Lo(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o;
  } while (n);
  Lo(t);
}
function gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ud(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Xr = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Xr, $o = "__reactProps$" + Xr, Vt = "__reactContainer$" + Xr, ha = "__reactEvents$" + Xr, Zv = "__reactListeners$" + Xr, Jv = "__reactHandles$" + Xr;
function jn(e) {
  var t = e[kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Vt] || n[kt]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ud(e); e !== null; ) {
        if (n = e[kt]) return n;
        e = ud(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ii(e) {
  return e = e[kt] || e[Vt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function ar(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(A(33));
}
function Is(e) {
  return e[$o] || null;
}
var ma = [], ur = -1;
function Rn(e) {
  return { current: e };
}
function ie(e) {
  0 > ur || (e.current = ma[ur], ma[ur] = null, ur--);
}
function ne(e, t) {
  ur++, ma[ur] = e.current, e.current = t;
}
var En = {}, Re = Rn(En), Fe = Rn(false), Qn = En;
function zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ze(e) {
  return e = e.childContextTypes, e != null;
}
function ss() {
  ie(Fe), ie(Re);
}
function cd(e, t, n) {
  if (Re.current !== En) throw Error(A(168));
  ne(Re, t), ne(Fe, n);
}
function Xp(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(A(108, My(e) || "Unknown", o));
  return ce({}, n, r);
}
function ls(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || En, Qn = Re.current, ne(Re, e), ne(Fe, Fe.current), true;
}
function dd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(A(169));
  n ? (e = Xp(e, t, Qn), r.__reactInternalMemoizedMergedChildContext = e, ie(Fe), ie(Re), ne(Re, e)) : ie(Fe), ne(Fe, n);
}
var Mt = null, js = false, _l = false;
function Zp(e) {
  Mt === null ? Mt = [e] : Mt.push(e);
}
function ew(e) {
  js = true, Zp(e);
}
function An() {
  if (!_l && Mt !== null) {
    _l = true;
    var e = 0, t = te;
    try {
      var n = Mt;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(true);
        while (r !== null);
      }
      Mt = null, js = false;
    } catch (o) {
      throw Mt !== null && (Mt = Mt.slice(e + 1)), _p(mu, An), o;
    } finally {
      te = t, _l = false;
    }
  }
  return null;
}
var cr = [], dr = 0, as = null, us = 0, tt = [], nt = 0, qn = null, Ft = 1, zt = "";
function bn(e, t) {
  cr[dr++] = us, cr[dr++] = as, as = e, us = t;
}
function Jp(e, t, n) {
  tt[nt++] = Ft, tt[nt++] = zt, tt[nt++] = qn, qn = e;
  var r = Ft;
  e = zt;
  var o = 32 - ht(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - ht(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, Ft = 1 << 32 - ht(t) + o | n << o | r, zt = i + e;
  } else Ft = 1 << i | n << o | r, zt = e;
}
function Pu(e) {
  e.return !== null && (bn(e, 1), Jp(e, 1, 0));
}
function Cu(e) {
  for (; e === as; ) as = cr[--dr], cr[dr] = null, us = cr[--dr], cr[dr] = null;
  for (; e === qn; ) qn = tt[--nt], tt[nt] = null, zt = tt[--nt], tt[nt] = null, Ft = tt[--nt], tt[nt] = null;
}
var qe = null, Qe = null, le = false, ft = null;
function eh(e, t) {
  var n = rt(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function fd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, qe = e, Qe = gn(t.firstChild), true) : false;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, qe = e, Qe = null, true) : false;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = qn !== null ? { id: Ft, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = rt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, qe = e, Qe = null, true) : false;
    default:
      return false;
  }
}
function ga(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ya(e) {
  if (le) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!fd(e, t)) {
        if (ga(e)) throw Error(A(418));
        t = gn(n.nextSibling);
        var r = qe;
        t && fd(e, t) ? eh(r, n) : (e.flags = e.flags & -4097 | 2, le = false, qe = e);
      }
    } else {
      if (ga(e)) throw Error(A(418));
      e.flags = e.flags & -4097 | 2, le = false, qe = e;
    }
  }
}
function pd(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function _i(e) {
  if (e !== qe) return false;
  if (!le) return pd(e), le = true, false;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !fa(e.type, e.memoizedProps)), t && (t = Qe)) {
    if (ga(e)) throw th(), Error(A(418));
    for (; t; ) eh(e, t), t = gn(t.nextSibling);
  }
  if (pd(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(A(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = gn(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = qe ? gn(e.stateNode.nextSibling) : null;
  return true;
}
function th() {
  for (var e = Qe; e; ) e = gn(e.nextSibling);
}
function $r() {
  Qe = qe = null, le = false;
}
function ku(e) {
  ft === null ? ft = [e] : ft.push(e);
}
var tw = qt.ReactCurrentBatchConfig;
function uo(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(A(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(A(147, e));
      var o = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var l = o.refs;
        s === null ? delete l[i] : l[i] = s;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(A(284));
    if (!n._owner) throw Error(A(290, e));
  }
  return e;
}
function Pi(e, t) {
  throw e = Object.prototype.toString.call(t), Error(A(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function hd(e) {
  var t = e._init;
  return t(e._payload);
}
function nh(e) {
  function t(m, f) {
    if (e) {
      var y = m.deletions;
      y === null ? (m.deletions = [f], m.flags |= 16) : y.push(f);
    }
  }
  function n(m, f) {
    if (!e) return null;
    for (; f !== null; ) t(m, f), f = f.sibling;
    return null;
  }
  function r(m, f) {
    for (m = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? m.set(f.key, f) : m.set(f.index, f), f = f.sibling;
    return m;
  }
  function o(m, f) {
    return m = xn(m, f), m.index = 0, m.sibling = null, m;
  }
  function i(m, f, y) {
    return m.index = y, e ? (y = m.alternate, y !== null ? (y = y.index, y < f ? (m.flags |= 2, f) : y) : (m.flags |= 2, f)) : (m.flags |= 1048576, f);
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, f, y, E) {
    return f === null || f.tag !== 6 ? (f = Ol(y, m.mode, E), f.return = m, f) : (f = o(f, y), f.return = m, f);
  }
  function a(m, f, y, E) {
    var P = y.type;
    return P === or ? d(m, f, y.props.children, E, y.key) : f !== null && (f.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Jt && hd(P) === f.type) ? (E = o(f, y.props), E.ref = uo(m, f, y), E.return = m, E) : (E = Qi(y.type, y.key, y.props, null, m.mode, E), E.ref = uo(m, f, y), E.return = m, E);
  }
  function u(m, f, y, E) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== y.containerInfo || f.stateNode.implementation !== y.implementation ? (f = Nl(y, m.mode, E), f.return = m, f) : (f = o(f, y.children || []), f.return = m, f);
  }
  function d(m, f, y, E, P) {
    return f === null || f.tag !== 7 ? (f = Hn(y, m.mode, E, P), f.return = m, f) : (f = o(f, y), f.return = m, f);
  }
  function c(m, f, y) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = Ol("" + f, m.mode, y), f.return = m, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case pi:
          return y = Qi(f.type, f.key, f.props, null, m.mode, y), y.ref = uo(m, null, f), y.return = m, y;
        case rr:
          return f = Nl(f, m.mode, y), f.return = m, f;
        case Jt:
          var E = f._init;
          return c(m, E(f._payload), y);
      }
      if (go(f) || oo(f)) return f = Hn(f, m.mode, y, null), f.return = m, f;
      Pi(m, f);
    }
    return null;
  }
  function p(m, f, y, E) {
    var P = f !== null ? f.key : null;
    if (typeof y == "string" && y !== "" || typeof y == "number") return P !== null ? null : l(m, f, "" + y, E);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pi:
          return y.key === P ? a(m, f, y, E) : null;
        case rr:
          return y.key === P ? u(m, f, y, E) : null;
        case Jt:
          return P = y._init, p(m, f, P(y._payload), E);
      }
      if (go(y) || oo(y)) return P !== null ? null : d(m, f, y, E, null);
      Pi(m, y);
    }
    return null;
  }
  function w(m, f, y, E, P) {
    if (typeof E == "string" && E !== "" || typeof E == "number") return m = m.get(y) || null, l(f, m, "" + E, P);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case pi:
          return m = m.get(E.key === null ? y : E.key) || null, a(f, m, E, P);
        case rr:
          return m = m.get(E.key === null ? y : E.key) || null, u(f, m, E, P);
        case Jt:
          var k = E._init;
          return w(m, f, y, k(E._payload), P);
      }
      if (go(E) || oo(E)) return m = m.get(y) || null, d(f, m, E, P, null);
      Pi(f, E);
    }
    return null;
  }
  function x(m, f, y, E) {
    for (var P = null, k = null, C = f, T = f = 0, O = null; C !== null && T < y.length; T++) {
      C.index > T ? (O = C, C = null) : O = C.sibling;
      var N = p(m, C, y[T], E);
      if (N === null) {
        C === null && (C = O);
        break;
      }
      e && C && N.alternate === null && t(m, C), f = i(N, f, T), k === null ? P = N : k.sibling = N, k = N, C = O;
    }
    if (T === y.length) return n(m, C), le && bn(m, T), P;
    if (C === null) {
      for (; T < y.length; T++) C = c(m, y[T], E), C !== null && (f = i(C, f, T), k === null ? P = C : k.sibling = C, k = C);
      return le && bn(m, T), P;
    }
    for (C = r(m, C); T < y.length; T++) O = w(C, m, T, y[T], E), O !== null && (e && O.alternate !== null && C.delete(O.key === null ? T : O.key), f = i(O, f, T), k === null ? P = O : k.sibling = O, k = O);
    return e && C.forEach(function(V) {
      return t(m, V);
    }), le && bn(m, T), P;
  }
  function g(m, f, y, E) {
    var P = oo(y);
    if (typeof P != "function") throw Error(A(150));
    if (y = P.call(y), y == null) throw Error(A(151));
    for (var k = P = null, C = f, T = f = 0, O = null, N = y.next(); C !== null && !N.done; T++, N = y.next()) {
      C.index > T ? (O = C, C = null) : O = C.sibling;
      var V = p(m, C, N.value, E);
      if (V === null) {
        C === null && (C = O);
        break;
      }
      e && C && V.alternate === null && t(m, C), f = i(V, f, T), k === null ? P = V : k.sibling = V, k = V, C = O;
    }
    if (N.done) return n(m, C), le && bn(m, T), P;
    if (C === null) {
      for (; !N.done; T++, N = y.next()) N = c(m, N.value, E), N !== null && (f = i(N, f, T), k === null ? P = N : k.sibling = N, k = N);
      return le && bn(m, T), P;
    }
    for (C = r(m, C); !N.done; T++, N = y.next()) N = w(C, m, T, N.value, E), N !== null && (e && N.alternate !== null && C.delete(N.key === null ? T : N.key), f = i(N, f, T), k === null ? P = N : k.sibling = N, k = N);
    return e && C.forEach(function(D) {
      return t(m, D);
    }), le && bn(m, T), P;
  }
  function S(m, f, y, E) {
    if (typeof y == "object" && y !== null && y.type === or && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case pi:
          e: {
            for (var P = y.key, k = f; k !== null; ) {
              if (k.key === P) {
                if (P = y.type, P === or) {
                  if (k.tag === 7) {
                    n(m, k.sibling), f = o(k, y.props.children), f.return = m, m = f;
                    break e;
                  }
                } else if (k.elementType === P || typeof P == "object" && P !== null && P.$$typeof === Jt && hd(P) === k.type) {
                  n(m, k.sibling), f = o(k, y.props), f.ref = uo(m, k, y), f.return = m, m = f;
                  break e;
                }
                n(m, k);
                break;
              } else t(m, k);
              k = k.sibling;
            }
            y.type === or ? (f = Hn(y.props.children, m.mode, E, y.key), f.return = m, m = f) : (E = Qi(y.type, y.key, y.props, null, m.mode, E), E.ref = uo(m, f, y), E.return = m, m = E);
          }
          return s(m);
        case rr:
          e: {
            for (k = y.key; f !== null; ) {
              if (f.key === k) if (f.tag === 4 && f.stateNode.containerInfo === y.containerInfo && f.stateNode.implementation === y.implementation) {
                n(m, f.sibling), f = o(f, y.children || []), f.return = m, m = f;
                break e;
              } else {
                n(m, f);
                break;
              }
              else t(m, f);
              f = f.sibling;
            }
            f = Nl(y, m.mode, E), f.return = m, m = f;
          }
          return s(m);
        case Jt:
          return k = y._init, S(m, f, k(y._payload), E);
      }
      if (go(y)) return x(m, f, y, E);
      if (oo(y)) return g(m, f, y, E);
      Pi(m, y);
    }
    return typeof y == "string" && y !== "" || typeof y == "number" ? (y = "" + y, f !== null && f.tag === 6 ? (n(m, f.sibling), f = o(f, y), f.return = m, m = f) : (n(m, f), f = Ol(y, m.mode, E), f.return = m, m = f), s(m)) : n(m, f);
  }
  return S;
}
var Ur = nh(true), rh = nh(false), cs = Rn(null), ds = null, fr = null, Tu = null;
function Ru() {
  Tu = fr = ds = null;
}
function Au(e) {
  var t = cs.current;
  ie(cs), e._currentValue = t;
}
function va(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function xr(e, t) {
  ds = e, Tu = fr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Me = true), e.firstContext = null);
}
function it(e) {
  var t = e._currentValue;
  if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, fr === null) {
    if (ds === null) throw Error(A(308));
    fr = e, ds.dependencies = { lanes: 0, firstContext: e };
  } else fr = fr.next = e;
  return t;
}
var Ln = null;
function Ou(e) {
  Ln === null ? Ln = [e] : Ln.push(e);
}
function oh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, Ou(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var en = false;
function Nu(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ih(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function $t(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, X & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Wt(e, n);
  }
  return o = r.interleaved, o === null ? (t.next = t, Ou(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Wt(e, n);
}
function $i(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
function md(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = s : i = i.next = s, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function fs(e, t, n, r) {
  var o = e.updateQueue;
  en = false;
  var i = o.firstBaseUpdate, s = o.lastBaseUpdate, l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l, u = a.next;
    a.next = null, s === null ? i = u : s.next = u, s = a;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, l = d.lastBaseUpdate, l !== s && (l === null ? d.firstBaseUpdate = u : l.next = u, d.lastBaseUpdate = a));
  }
  if (i !== null) {
    var c = o.baseState;
    s = 0, d = u = a = null, l = i;
    do {
      var p = l.lane, w = l.eventTime;
      if ((r & p) === p) {
        d !== null && (d = d.next = { eventTime: w, lane: 0, tag: l.tag, payload: l.payload, callback: l.callback, next: null });
        e: {
          var x = e, g = l;
          switch (p = t, w = n, g.tag) {
            case 1:
              if (x = g.payload, typeof x == "function") {
                c = x.call(w, c, p);
                break e;
              }
              c = x;
              break e;
            case 3:
              x.flags = x.flags & -65537 | 128;
            case 0:
              if (x = g.payload, p = typeof x == "function" ? x.call(w, c, p) : x, p == null) break e;
              c = ce({}, c, p);
              break e;
            case 2:
              en = true;
          }
        }
        l.callback !== null && l.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [l] : p.push(l));
      } else w = { eventTime: w, lane: p, tag: l.tag, payload: l.payload, callback: l.callback, next: null }, d === null ? (u = d = w, a = c) : d = d.next = w, s |= p;
      if (l = l.next, l === null) {
        if (l = o.shared.pending, l === null) break;
        p = l, l = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null;
      }
    } while (true);
    if (d === null && (a = c), o.baseState = a, o.firstBaseUpdate = u, o.lastBaseUpdate = d, t = o.shared.interleaved, t !== null) {
      o = t;
      do
        s |= o.lane, o = o.next;
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    Kn |= s, e.lanes = s, e.memoizedState = c;
  }
}
function gd(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(A(191, o));
      o.call(r);
    }
  }
}
var si = {}, Rt = Rn(si), Uo = Rn(si), Vo = Rn(si);
function Dn(e) {
  if (e === si) throw Error(A(174));
  return e;
}
function bu(e, t) {
  switch (ne(Vo, t), ne(Uo, e), ne(Rt, si), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Zl(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zl(t, e);
  }
  ie(Rt), ne(Rt, t);
}
function Vr() {
  ie(Rt), ie(Uo), ie(Vo);
}
function sh(e) {
  Dn(Vo.current);
  var t = Dn(Rt.current), n = Zl(t, e.type);
  t !== n && (ne(Uo, e), ne(Rt, n));
}
function Iu(e) {
  Uo.current === e && (ie(Rt), ie(Uo));
}
var ae = Rn(0);
function ps(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Pl = [];
function ju() {
  for (var e = 0; e < Pl.length; e++) Pl[e]._workInProgressVersionPrimary = null;
  Pl.length = 0;
}
var Ui = qt.ReactCurrentDispatcher, Cl = qt.ReactCurrentBatchConfig, Gn = 0, ue = null, me = null, ve = null, hs = false, Co = false, Wo = 0, nw = 0;
function Pe() {
  throw Error(A(321));
}
function Lu(e, t) {
  if (t === null) return false;
  for (var n = 0; n < t.length && n < e.length; n++) if (!gt(e[n], t[n])) return false;
  return true;
}
function Du(e, t, n, r, o, i) {
  if (Gn = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ui.current = e === null || e.memoizedState === null ? sw : lw, e = n(r, o), Co) {
    i = 0;
    do {
      if (Co = false, Wo = 0, 25 <= i) throw Error(A(301));
      i += 1, ve = me = null, t.updateQueue = null, Ui.current = aw, e = n(r, o);
    } while (Co);
  }
  if (Ui.current = ms, t = me !== null && me.next !== null, Gn = 0, ve = me = ue = null, hs = false, t) throw Error(A(300));
  return e;
}
function Mu() {
  var e = Wo !== 0;
  return Wo = 0, e;
}
function St() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ve === null ? ue.memoizedState = ve = e : ve = ve.next = e, ve;
}
function st() {
  if (me === null) {
    var e = ue.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = me.next;
  var t = ve === null ? ue.memoizedState : ve.next;
  if (t !== null) ve = t, me = e;
  else {
    if (e === null) throw Error(A(310));
    me = e, e = { memoizedState: me.memoizedState, baseState: me.baseState, baseQueue: me.baseQueue, queue: me.queue, next: null }, ve === null ? ue.memoizedState = ve = e : ve = ve.next = e;
  }
  return ve;
}
function Bo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function kl(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = me, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var l = s = null, a = null, u = i;
    do {
      var d = u.lane;
      if ((Gn & d) === d) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var c = { lane: d, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? (l = a = c, s = r) : a = a.next = c, ue.lanes |= d, Kn |= d;
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? s = r : a.next = l, gt(r, t.memoizedState) || (Me = true), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do
      i = o.lane, ue.lanes |= i, Kn |= i, o = o.next;
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Tl(e) {
  var t = st(), n = t.queue;
  if (n === null) throw Error(A(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do
      i = e(i, s.action), s = s.next;
    while (s !== o);
    gt(i, t.memoizedState) || (Me = true), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function lh() {
}
function ah(e, t) {
  var n = ue, r = st(), o = t(), i = !gt(r.memoizedState, o);
  if (i && (r.memoizedState = o, Me = true), r = r.queue, Fu(dh.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
    if (n.flags |= 2048, Ho(9, ch.bind(null, n, r, o, t), void 0, null), we === null) throw Error(A(349));
    Gn & 30 || uh(n, t, o);
  }
  return o;
}
function uh(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ch(e, t, n, r) {
  t.value = n, t.getSnapshot = r, fh(t) && ph(e);
}
function dh(e, t, n) {
  return n(function() {
    fh(t) && ph(e);
  });
}
function fh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !gt(e, n);
  } catch (e2) {
    return true;
  }
}
function ph(e) {
  var t = Wt(e, 1);
  t !== null && mt(t, e, 1, -1);
}
function yd(e) {
  var t = St();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bo, lastRenderedState: e }, t.queue = e, e = e.dispatch = iw.bind(null, ue, e), [t.memoizedState, e];
}
function Ho(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ue.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ue.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function hh() {
  return st().memoizedState;
}
function Vi(e, t, n, r) {
  var o = St();
  ue.flags |= e, o.memoizedState = Ho(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ls(e, t, n, r) {
  var o = st();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (me !== null) {
    var s = me.memoizedState;
    if (i = s.destroy, r !== null && Lu(r, s.deps)) {
      o.memoizedState = Ho(t, n, i, r);
      return;
    }
  }
  ue.flags |= e, o.memoizedState = Ho(1 | t, n, i, r);
}
function vd(e, t) {
  return Vi(8390656, 8, e, t);
}
function Fu(e, t) {
  return Ls(2048, 8, e, t);
}
function mh(e, t) {
  return Ls(4, 2, e, t);
}
function gh(e, t) {
  return Ls(4, 4, e, t);
}
function yh(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function vh(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ls(4, 4, yh.bind(null, t, e), n);
}
function zu() {
}
function wh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function xh(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Lu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Sh(e, t, n) {
  return Gn & 21 ? (gt(n, t) || (n = kp(), ue.lanes |= n, Kn |= n, e.baseState = true), t) : (e.baseState && (e.baseState = false, Me = true), e.memoizedState = n);
}
function rw(e, t) {
  var n = te;
  te = n !== 0 && 4 > n ? n : 4, e(true);
  var r = Cl.transition;
  Cl.transition = {};
  try {
    e(false), t();
  } finally {
    te = n, Cl.transition = r;
  }
}
function Eh() {
  return st().memoizedState;
}
function ow(e, t, n) {
  var r = wn(e);
  if (n = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null }, _h(e)) Ph(t, n);
  else if (n = oh(e, t, n, r), n !== null) {
    var o = be();
    mt(n, e, r, o), Ch(n, t, r);
  }
}
function iw(e, t, n) {
  var r = wn(e), o = { lane: r, action: n, hasEagerState: false, eagerState: null, next: null };
  if (_h(e)) Ph(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState, l = i(s, n);
      if (o.hasEagerState = true, o.eagerState = l, gt(l, s)) {
        var a = t.interleaved;
        a === null ? (o.next = o, Ou(t)) : (o.next = a.next, a.next = o), t.interleaved = o;
        return;
      }
    } catch (e2) {
    } finally {
    }
    n = oh(e, t, o, r), n !== null && (o = be(), mt(n, e, r, o), Ch(n, t, r));
  }
}
function _h(e) {
  var t = e.alternate;
  return e === ue || t !== null && t === ue;
}
function Ph(e, t) {
  Co = hs = true;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ch(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, gu(e, n);
  }
}
var ms = { readContext: it, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: false }, sw = { readContext: it, useCallback: function(e, t) {
  return St().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: it, useEffect: vd, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Vi(4194308, 4, yh.bind(null, t, e), n);
}, useLayoutEffect: function(e, t) {
  return Vi(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Vi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = St();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = St();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = ow.bind(null, ue, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = St();
  return e = { current: e }, t.memoizedState = e;
}, useState: yd, useDebugValue: zu, useDeferredValue: function(e) {
  return St().memoizedState = e;
}, useTransition: function() {
  var e = yd(false), t = e[0];
  return e = rw.bind(null, e[1]), St().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = ue, o = St();
  if (le) {
    if (n === void 0) throw Error(A(407));
    n = n();
  } else {
    if (n = t(), we === null) throw Error(A(349));
    Gn & 30 || uh(r, t, n);
  }
  o.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return o.queue = i, vd(dh.bind(null, r, i, e), [e]), r.flags |= 2048, Ho(9, ch.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = St(), t = we.identifierPrefix;
  if (le) {
    var n = zt, r = Ft;
    n = (r & ~(1 << 32 - ht(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Wo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = nw++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: false }, lw = { readContext: it, useCallback: wh, useContext: it, useEffect: Fu, useImperativeHandle: vh, useInsertionEffect: mh, useLayoutEffect: gh, useMemo: xh, useReducer: kl, useRef: hh, useState: function() {
  return kl(Bo);
}, useDebugValue: zu, useDeferredValue: function(e) {
  var t = st();
  return Sh(t, me.memoizedState, e);
}, useTransition: function() {
  var e = kl(Bo)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: lh, useSyncExternalStore: ah, useId: Eh, unstable_isNewReconciler: false }, aw = { readContext: it, useCallback: wh, useContext: it, useEffect: Fu, useImperativeHandle: vh, useInsertionEffect: mh, useLayoutEffect: gh, useMemo: xh, useReducer: Tl, useRef: hh, useState: function() {
  return Tl(Bo);
}, useDebugValue: zu, useDeferredValue: function(e) {
  var t = st();
  return me === null ? t.memoizedState = e : Sh(t, me.memoizedState, e);
}, useTransition: function() {
  var e = Tl(Bo)[0], t = st().memoizedState;
  return [e, t];
}, useMutableSource: lh, useSyncExternalStore: ah, useId: Eh, unstable_isNewReconciler: false };
function ut(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function wa(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : ce({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ds = { isMounted: function(e) {
  return (e = e._reactInternals) ? er(e) === e : false;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), o = wn(e), i = $t(r, o);
  i.payload = t, n != null && (i.callback = n), t = yn(e, i, o), t !== null && (mt(t, e, o, r), $i(t, e, o));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = be(), o = wn(e), i = $t(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yn(e, i, o), t !== null && (mt(t, e, o, r), $i(t, e, o));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = be(), r = wn(e), o = $t(n, r);
  o.tag = 2, t != null && (o.callback = t), t = yn(e, o, r), t !== null && (mt(t, e, r, n), $i(t, e, r));
} };
function wd(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Mo(n, r) || !Mo(o, i) : true;
}
function kh(e, t, n) {
  var r = false, o = En, i = t.contextType;
  return typeof i == "object" && i !== null ? i = it(i) : (o = ze(t) ? Qn : Re.current, r = t.contextTypes, i = (r = r != null) ? zr(e, o) : En), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ds, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function xd(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ds.enqueueReplaceState(t, t.state, null);
}
function xa(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = {}, Nu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = it(i) : (i = ze(t) ? Qn : Re.current, o.context = zr(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (wa(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ds.enqueueReplaceState(o, o.state, null), fs(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Wr(e, t) {
  try {
    var n = "", r = t;
    do
      n += Dy(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function Rl(e, t, n) {
  return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null };
}
function Sa(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var uw = typeof WeakMap == "function" ? WeakMap : Map;
function Th(e, t, n) {
  n = $t(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ys || (ys = true, Na = r), Sa(e, t);
  }, n;
}
function Rh(e, t, n) {
  n = $t(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o);
    }, n.callback = function() {
      Sa(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Sa(e, t), typeof r != "function" && (vn === null ? vn = /* @__PURE__ */ new Set([this]) : vn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
  }), n;
}
function Sd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uw();
    var o = /* @__PURE__ */ new Set();
    r.set(t, o);
  } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
  o.has(n) || (o.add(n), e = _w.bind(null, e, t, n), t.then(e, e));
}
function Ed(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : true), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function _d(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = $t(-1, 1), t.tag = 2, yn(n, t, 1))), n.lanes |= 1), e);
}
var cw = qt.ReactCurrentOwner, Me = false;
function Ne(e, t, n, r) {
  t.child = e === null ? rh(t, null, n, r) : Ur(t, e.child, n, r);
}
function Pd(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return xr(t, o), r = Du(e, t, n, r, i, o), n = Mu(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (le && n && Pu(t), t.flags |= 1, Ne(e, t, r, o), t.child);
}
function Cd(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !qu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Ah(e, t, i, r, o)) : (e = Qi(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Mo, n(s, r) && e.ref === t.ref) return Bt(e, t, o);
  }
  return t.flags |= 1, e = xn(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ah(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Mo(i, r) && e.ref === t.ref) if (Me = false, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (Me = true);
    else return t.lanes = e.lanes, Bt(e, t, o);
  }
  return Ea(e, t, n, r, o);
}
function Oh(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(hr, Be), Be |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ne(hr, Be), Be |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, ne(hr, Be), Be |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, ne(hr, Be), Be |= r;
  return Ne(e, t, o, n), t.child;
}
function Nh(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ea(e, t, n, r, o) {
  var i = ze(n) ? Qn : Re.current;
  return i = zr(t, i), xr(t, o), n = Du(e, t, n, r, i, o), r = Mu(), e !== null && !Me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Bt(e, t, o)) : (le && r && Pu(t), t.flags |= 1, Ne(e, t, n, o), t.child);
}
function kd(e, t, n, r, o) {
  if (ze(n)) {
    var i = true;
    ls(t);
  } else i = false;
  if (xr(t, o), t.stateNode === null) Wi(e, t), kh(t, n, r), xa(t, n, r, o), r = true;
  else if (e === null) {
    var s = t.stateNode, l = t.memoizedProps;
    s.props = l;
    var a = s.context, u = n.contextType;
    typeof u == "object" && u !== null ? u = it(u) : (u = ze(n) ? Qn : Re.current, u = zr(t, u));
    var d = n.getDerivedStateFromProps, c = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    c || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== u) && xd(t, s, r, u), en = false;
    var p = t.memoizedState;
    s.state = p, fs(t, r, s, o), a = t.memoizedState, l !== r || p !== a || Fe.current || en ? (typeof d == "function" && (wa(t, n, d, r), a = t.memoizedState), (l = en || wd(t, n, l, r, p, a, u)) ? (c || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = u, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = false);
  } else {
    s = t.stateNode, ih(e, t), l = t.memoizedProps, u = t.type === t.elementType ? l : ut(t.type, l), s.props = u, c = t.pendingProps, p = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = it(a) : (a = ze(n) ? Qn : Re.current, a = zr(t, a));
    var w = n.getDerivedStateFromProps;
    (d = typeof w == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== c || p !== a) && xd(t, s, r, a), en = false, p = t.memoizedState, s.state = p, fs(t, r, s, o);
    var x = t.memoizedState;
    l !== c || p !== x || Fe.current || en ? (typeof w == "function" && (wa(t, n, w, r), x = t.memoizedState), (u = en || wd(t, n, u, r, p, x, a) || false) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, x, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, x, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), s.props = r, s.state = x, s.context = a, r = u) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = false);
  }
  return _a(e, t, n, r, i, o);
}
function _a(e, t, n, r, o, i) {
  Nh(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && dd(t, n, false), Bt(e, t, i);
  r = t.stateNode, cw.current = t;
  var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = Ur(t, e.child, null, i), t.child = Ur(t, null, l, i)) : Ne(e, t, l, i), t.memoizedState = r.state, o && dd(t, n, true), t.child;
}
function bh(e) {
  var t = e.stateNode;
  t.pendingContext ? cd(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cd(e, t.context, false), bu(e, t.containerInfo);
}
function Td(e, t, n, r, o) {
  return $r(), ku(o), t.flags |= 256, Ne(e, t, n, r), t.child;
}
var Pa = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ca(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ih(e, t, n) {
  var r = t.pendingProps, o = ae.current, i = false, s = (t.flags & 128) !== 0, l;
  if ((l = s) || (l = e !== null && e.memoizedState === null ? false : (o & 2) !== 0), l ? (i = true, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ne(ae, o & 1), e === null) return ya(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = { mode: "hidden", children: s }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = zs(s, r, 0, null), e = Hn(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ca(n), t.memoizedState = Pa, e) : $u(t, s));
  if (o = e.memoizedState, o !== null && (l = o.dehydrated, l !== null)) return dw(e, t, s, r, l, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, l = o.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = xn(o, a), r.subtreeFlags = o.subtreeFlags & 14680064), l !== null ? i = xn(l, i) : (i = Hn(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Ca(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = Pa, r;
  }
  return i = e.child, e = i.sibling, r = xn(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function $u(e, t) {
  return t = zs({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Ci(e, t, n, r) {
  return r !== null && ku(r), Ur(t, e.child, null, n), e = $u(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function dw(e, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Rl(Error(A(422))), Ci(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = zs({ mode: "visible", children: r.children }, o, 0, null), i = Hn(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Ur(t, e.child, null, s), t.child.memoizedState = Ca(s), t.memoizedState = Pa, i);
  if (!(t.mode & 1)) return Ci(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
    return r = l, i = Error(A(419)), r = Rl(i, r, void 0), Ci(e, t, s, r);
  }
  if (l = (s & e.childLanes) !== 0, Me || l) {
    if (r = we, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Wt(e, o), mt(r, e, o, -1));
    }
    return Qu(), r = Rl(Error(A(421))), Ci(e, t, s, r);
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Pw.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, Qe = gn(o.nextSibling), qe = t, le = true, ft = null, e !== null && (tt[nt++] = Ft, tt[nt++] = zt, tt[nt++] = qn, Ft = e.id, zt = e.overflow, qn = t), t = $u(t, r.children), t.flags |= 4096, t);
}
function Rd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), va(e.return, t, n);
}
function Al(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o);
}
function jh(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (Ne(e, t, r.children, n), r = ae.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Rd(e, n, t);
      else if (e.tag === 19) Rd(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (ne(ae, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && ps(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Al(t, false, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && ps(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      Al(t, true, n, null, i);
      break;
    case "together":
      Al(t, false, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Wi(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Bt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(A(153));
  if (t.child !== null) {
    for (e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xn(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function fw(e, t, n) {
  switch (t.tag) {
    case 3:
      bh(t), $r();
      break;
    case 5:
      sh(t);
      break;
    case 1:
      ze(t.type) && ls(t);
      break;
    case 4:
      bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, o = t.memoizedProps.value;
      ne(cs, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (ne(ae, ae.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Ih(e, t, n) : (ne(ae, ae.current & 1), e = Bt(e, t, n), e !== null ? e.sibling : null);
      ne(ae, ae.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return jh(e, t, n);
        t.flags |= 128;
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ne(ae, ae.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Oh(e, t, n);
  }
  return Bt(e, t, n);
}
var Lh, ka, Dh, Mh;
Lh = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
ka = function() {
};
Dh = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, Dn(Rt.current);
    var i = null;
    switch (n) {
      case "input":
        o = Gl(e, o), r = Gl(e, r), i = [];
        break;
      case "select":
        o = ce({}, o, { value: void 0 }), r = ce({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = Xl(e, o), r = Xl(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = is);
    }
    Jl(n, r);
    var s;
    n = null;
    for (u in o) if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null) if (u === "style") {
      var l = o[u];
      for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
    } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Oo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (l = o != null ? o[u] : void 0, r.hasOwnProperty(u) && a !== l && (a != null || l != null)) if (u === "style") if (l) {
        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s]);
      } else n || (i || (i = []), i.push(u, n)), n = a;
      else u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (i = i || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Oo.hasOwnProperty(u) ? (a != null && u === "onScroll" && oe("scroll", e), i || l === a || (i = [])) : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Mh = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function co(e, t) {
  if (!le) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function Ce(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function pw(e, t, n) {
  var r = t.pendingProps;
  switch (Cu(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ce(t), null;
    case 1:
      return ze(t.type) && ss(), Ce(t), null;
    case 3:
      return r = t.stateNode, Vr(), ie(Fe), ie(Re), ju(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_i(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ft !== null && (ja(ft), ft = null))), ka(e, t), Ce(t), null;
    case 5:
      Iu(t);
      var o = Dn(Vo.current);
      if (n = t.type, e !== null && t.stateNode != null) Dh(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(A(166));
          return Ce(t), null;
        }
        if (e = Dn(Rt.current), _i(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[kt] = t, r[$o] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < vo.length; o++) oe(vo[o], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Mc(r, i), oe("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, oe("invalid", r);
              break;
            case "textarea":
              zc(r, i), oe("invalid", r);
          }
          Jl(n, i), o = null;
          for (var s in i) if (i.hasOwnProperty(s)) {
            var l = i[s];
            s === "children" ? typeof l == "string" ? r.textContent !== l && (i.suppressHydrationWarning !== true && Ei(r.textContent, l, e), o = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (i.suppressHydrationWarning !== true && Ei(r.textContent, l, e), o = ["children", "" + l]) : Oo.hasOwnProperty(s) && l != null && s === "onScroll" && oe("scroll", r);
          }
          switch (n) {
            case "input":
              hi(r), Fc(r, i, true);
              break;
            case "textarea":
              hi(r), $c(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = is);
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = dp(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = true : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[kt] = t, e[$o] = r, Lh(e, t, false, false), t.stateNode = e;
          e: {
            switch (s = ea(n, r), n) {
              case "dialog":
                oe("cancel", e), oe("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < vo.length; o++) oe(vo[o], e);
                o = r;
                break;
              case "source":
                oe("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), o = r;
                break;
              case "details":
                oe("toggle", e), o = r;
                break;
              case "input":
                Mc(e, r), o = Gl(e, r), oe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, o = ce({}, r, { value: void 0 }), oe("invalid", e);
                break;
              case "textarea":
                zc(e, r), o = Xl(e, r), oe("invalid", e);
                break;
              default:
                o = r;
            }
            Jl(n, o), l = o;
            for (i in l) if (l.hasOwnProperty(i)) {
              var a = l[i];
              i === "style" ? hp(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && fp(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && No(e, a) : typeof a == "number" && No(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Oo.hasOwnProperty(i) ? a != null && i === "onScroll" && oe("scroll", e) : a != null && cu(e, i, a, s));
            }
            switch (n) {
              case "input":
                hi(e), Fc(e, r, false);
                break;
              case "textarea":
                hi(e), $c(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Sn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? gr(e, !!r.multiple, i, false) : r.defaultValue != null && gr(e, !!r.multiple, r.defaultValue, true);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = is);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = true;
                break e;
              default:
                r = false;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Mh(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(A(166));
        if (n = Dn(Vo.current), Dn(Rt.current), _i(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (i = r.nodeValue !== n) && (e = qe, e !== null)) switch (e.tag) {
            case 3:
              Ei(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== true && Ei(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
      }
      return Ce(t), null;
    case 13:
      if (ie(ae), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (le && Qe !== null && t.mode & 1 && !(t.flags & 128)) th(), $r(), t.flags |= 98560, i = false;
        else if (i = _i(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(A(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(A(317));
            i[kt] = t;
          } else $r(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          Ce(t), i = false;
        } else ft !== null && (ja(ft), ft = null), i = true;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ae.current & 1 ? ye === 0 && (ye = 3) : Qu())), t.updateQueue !== null && (t.flags |= 4), Ce(t), null);
    case 4:
      return Vr(), ka(e, t), e === null && Fo(t.stateNode.containerInfo), Ce(t), null;
    case 10:
      return Au(t.type._context), Ce(t), null;
    case 17:
      return ze(t.type) && ss(), Ce(t), null;
    case 19:
      if (ie(ae), i = t.memoizedState, i === null) return Ce(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null) if (r) co(i, false);
      else {
        if (ye !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (s = ps(e), s !== null) {
            for (t.flags |= 128, co(i, false), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return ne(ae, ae.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && pe() > Br && (t.flags |= 128, r = true, co(i, false), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ps(s), e !== null) {
          if (t.flags |= 128, r = true, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), co(i, true), i.tail === null && i.tailMode === "hidden" && !s.alternate && !le) return Ce(t), null;
        } else 2 * pe() - i.renderingStartTime > Br && n !== 1073741824 && (t.flags |= 128, r = true, co(i, false), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = pe(), t.sibling = null, n = ae.current, ne(ae, r ? n & 1 | 2 : n & 1), t) : (Ce(t), null);
    case 22:
    case 23:
      return Hu(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ce(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(A(156, t.tag));
}
function hw(e, t) {
  switch (Cu(t), t.tag) {
    case 1:
      return ze(t.type) && ss(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Vr(), ie(Fe), ie(Re), ju(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Iu(t), null;
    case 13:
      if (ie(ae), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(A(340));
        $r();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return ie(ae), null;
    case 4:
      return Vr(), null;
    case 10:
      return Au(t.type._context), null;
    case 22:
    case 23:
      return Hu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ki = false, Te = false, mw = typeof WeakSet == "function" ? WeakSet : Set, I = null;
function pr(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    fe(e, t, r);
  }
  else n.current = null;
}
function Ta(e, t, n) {
  try {
    n();
  } catch (r) {
    fe(e, t, r);
  }
}
var Ad = false;
function gw(e, t) {
  if (ca = ns, e = Vp(), _u(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch (e2) {
          n = null;
          break e;
        }
        var s = 0, l = -1, a = -1, u = 0, d = 0, c = e, p = null;
        t: for (; ; ) {
          for (var w; c !== n || o !== 0 && c.nodeType !== 3 || (l = s + o), c !== i || r !== 0 && c.nodeType !== 3 || (a = s + r), c.nodeType === 3 && (s += c.nodeValue.length), (w = c.firstChild) !== null; ) p = c, c = w;
          for (; ; ) {
            if (c === e) break t;
            if (p === n && ++u === o && (l = s), p === i && ++d === r && (a = s), (w = c.nextSibling) !== null) break;
            c = p, p = c.parentNode;
          }
          c = w;
        }
        n = l === -1 || a === -1 ? null : { start: l, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (da = { focusedElem: e, selectionRange: n }, ns = false, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
  else for (; I !== null; ) {
    t = I;
    try {
      var x = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (x !== null) {
            var g = x.memoizedProps, S = x.memoizedState, m = t.stateNode, f = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : ut(t.type, g), S);
            m.__reactInternalSnapshotBeforeUpdate = f;
          }
          break;
        case 3:
          var y = t.stateNode.containerInfo;
          y.nodeType === 1 ? y.textContent = "" : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(A(163));
      }
    } catch (E) {
      fe(t, t.return, E);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, I = e;
      break;
    }
    I = t.return;
  }
  return x = Ad, Ad = false, x;
}
function ko(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Ta(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ms(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ra(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function Fh(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Fh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[$o], delete t[ha], delete t[Zv], delete t[Jv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function zh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Od(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || zh(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = is));
  else if (r !== 4 && (e = e.child, e !== null)) for (Aa(e, t, n), e = e.sibling; e !== null; ) Aa(e, t, n), e = e.sibling;
}
function Oa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Oa(e, t, n), e = e.sibling; e !== null; ) Oa(e, t, n), e = e.sibling;
}
var xe = null, dt = false;
function Gt(e, t, n) {
  for (n = n.child; n !== null; ) $h(e, t, n), n = n.sibling;
}
function $h(e, t, n) {
  if (Tt && typeof Tt.onCommitFiberUnmount == "function") try {
    Tt.onCommitFiberUnmount(As, n);
  } catch (e2) {
  }
  switch (n.tag) {
    case 5:
      Te || pr(n, t);
    case 6:
      var r = xe, o = dt;
      xe = null, Gt(e, t, n), xe = r, dt = o, xe !== null && (dt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : xe.removeChild(n.stateNode));
      break;
    case 18:
      xe !== null && (dt ? (e = xe, n = n.stateNode, e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n), Lo(e)) : El(xe, n.stateNode));
      break;
    case 4:
      r = xe, o = dt, xe = n.stateNode.containerInfo, dt = true, Gt(e, t, n), xe = r, dt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o, s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Ta(n, t, s), o = o.next;
        } while (o !== r);
      }
      Gt(e, t, n);
      break;
    case 1:
      if (!Te && (pr(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (l) {
        fe(n, t, l);
      }
      Gt(e, t, n);
      break;
    case 21:
      Gt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, Gt(e, t, n), Te = r) : Gt(e, t, n);
      break;
    default:
      Gt(e, t, n);
  }
}
function Nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mw()), t.forEach(function(r) {
      var o = Cw.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var o = n[r];
    try {
      var i = e, s = t, l = s;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 5:
            xe = l.stateNode, dt = false;
            break e;
          case 3:
            xe = l.stateNode.containerInfo, dt = true;
            break e;
          case 4:
            xe = l.stateNode.containerInfo, dt = true;
            break e;
        }
        l = l.return;
      }
      if (xe === null) throw Error(A(160));
      $h(i, s, o), xe = null, dt = false;
      var a = o.alternate;
      a !== null && (a.return = null), o.return = null;
    } catch (u) {
      fe(o, t, u);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Uh(t, e), t = t.sibling;
}
function Uh(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (at(t, e), xt(e), r & 4) {
        try {
          ko(3, e, e.return), Ms(3, e);
        } catch (g) {
          fe(e, e.return, g);
        }
        try {
          ko(5, e, e.return);
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 1:
      at(t, e), xt(e), r & 512 && n !== null && pr(n, n.return);
      break;
    case 5:
      if (at(t, e), xt(e), r & 512 && n !== null && pr(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          No(o, "");
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps, s = n !== null ? n.memoizedProps : i, l = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          l === "input" && i.type === "radio" && i.name != null && up(o, i), ea(l, s);
          var u = ea(l, i);
          for (s = 0; s < a.length; s += 2) {
            var d = a[s], c = a[s + 1];
            d === "style" ? hp(o, c) : d === "dangerouslySetInnerHTML" ? fp(o, c) : d === "children" ? No(o, c) : cu(o, d, c, u);
          }
          switch (l) {
            case "input":
              Kl(o, i);
              break;
            case "textarea":
              cp(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var w = i.value;
              w != null ? gr(o, !!i.multiple, w, false) : p !== !!i.multiple && (i.defaultValue != null ? gr(o, !!i.multiple, i.defaultValue, true) : gr(o, !!i.multiple, i.multiple ? [] : "", false));
          }
          o[$o] = i;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 6:
      if (at(t, e), xt(e), r & 4) {
        if (e.stateNode === null) throw Error(A(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i;
        } catch (g) {
          fe(e, e.return, g);
        }
      }
      break;
    case 3:
      if (at(t, e), xt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Lo(t.containerInfo);
      } catch (g) {
        fe(e, e.return, g);
      }
      break;
    case 4:
      at(t, e), xt(e);
      break;
    case 13:
      at(t, e), xt(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Wu = pe())), r & 4 && Nd(e);
      break;
    case 22:
      if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (u = Te) || d, at(t, e), Te = u) : at(t, e), xt(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1) for (I = e, d = e.child; d !== null; ) {
          for (c = I = d; I !== null; ) {
            switch (p = I, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ko(4, p, p.return);
                break;
              case 1:
                pr(p, p.return);
                var x = p.stateNode;
                if (typeof x.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount();
                  } catch (g) {
                    fe(r, n, g);
                  }
                }
                break;
              case 5:
                pr(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Id(c);
                  continue;
                }
            }
            w !== null ? (w.return = p, I = w) : Id(c);
          }
          d = d.sibling;
        }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                o = c.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (l = c.stateNode, a = c.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = pp("display", s));
              } catch (g) {
                fe(e, e.return, g);
              }
            }
          } else if (c.tag === 6) {
            if (d === null) try {
              c.stateNode.nodeValue = u ? "" : c.memoizedProps;
            } catch (g) {
              fe(e, e.return, g);
            }
          } else if ((c.tag !== 22 && c.tag !== 23 || c.memoizedState === null || c === e) && c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), c = c.return;
          }
          d === c && (d = null), c.sibling.return = c.return, c = c.sibling;
        }
      }
      break;
    case 19:
      at(t, e), xt(e), r & 4 && Nd(e);
      break;
    case 21:
      break;
    default:
      at(t, e), xt(e);
  }
}
function xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(A(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (No(o, ""), r.flags &= -33);
          var i = Od(e);
          Oa(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo, l = Od(e);
          Aa(e, l, s);
          break;
        default:
          throw Error(A(161));
      }
    } catch (a) {
      fe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function yw(e, t, n) {
  I = e, Vh(e);
}
function Vh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I, i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || ki;
      if (!s) {
        var l = o.alternate, a = l !== null && l.memoizedState !== null || Te;
        l = ki;
        var u = Te;
        if (ki = s, (Te = a) && !u) for (I = o; I !== null; ) s = I, a = s.child, s.tag === 22 && s.memoizedState !== null ? jd(o) : a !== null ? (a.return = s, I = a) : jd(o);
        for (; i !== null; ) I = i, Vh(i), i = i.sibling;
        I = o, ki = l, Te = u;
      }
      bd(e);
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, I = i) : bd(e);
  }
}
function bd(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            Te || Ms(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !Te) if (n === null) r.componentDidMount();
            else {
              var o = t.elementType === t.type ? n.memoizedProps : ut(t.type, n.memoizedProps);
              r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && gd(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              gd(t, s, n);
            }
            break;
          case 5:
            var l = t.stateNode;
            if (n === null && t.flags & 4) {
              n = l;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var d = u.memoizedState;
                if (d !== null) {
                  var c = d.dehydrated;
                  c !== null && Lo(c);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(A(163));
        }
        Te || t.flags & 512 && Ra(t);
      } catch (p) {
        fe(t, t.return, p);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function Id(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, I = n;
      break;
    }
    I = t.return;
  }
}
function jd(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ms(4, t);
          } catch (a) {
            fe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              fe(t, o, a);
            }
          }
          var i = t.return;
          try {
            Ra(t);
          } catch (a) {
            fe(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ra(t);
          } catch (a) {
            fe(t, s, a);
          }
      }
    } catch (a) {
      fe(t, t.return, a);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      l.return = t.return, I = l;
      break;
    }
    I = t.return;
  }
}
var vw = Math.ceil, gs = qt.ReactCurrentDispatcher, Uu = qt.ReactCurrentOwner, ot = qt.ReactCurrentBatchConfig, X = 0, we = null, he = null, Ee = 0, Be = 0, hr = Rn(0), ye = 0, Qo = null, Kn = 0, Fs = 0, Vu = 0, To = null, De = null, Wu = 0, Br = 1 / 0, Dt = null, ys = false, Na = null, vn = null, Ti = false, fn = null, vs = 0, Ro = 0, ba = null, Bi = -1, Hi = 0;
function be() {
  return X & 6 ? pe() : Bi !== -1 ? Bi : Bi = pe();
}
function wn(e) {
  return e.mode & 1 ? X & 2 && Ee !== 0 ? Ee & -Ee : tw.transition !== null ? (Hi === 0 && (Hi = kp()), Hi) : (e = te, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ip(e.type)), e) : 1;
}
function mt(e, t, n, r) {
  if (50 < Ro) throw Ro = 0, ba = null, Error(A(185));
  ri(e, n, r), (!(X & 2) || e !== we) && (e === we && (!(X & 2) && (Fs |= n), ye === 4 && nn(e, Ee)), $e(e, r), n === 1 && X === 0 && !(t.mode & 1) && (Br = pe() + 500, js && An()));
}
function $e(e, t) {
  var n = e.callbackNode;
  tv(e, t);
  var r = ts(e, e === we ? Ee : 0);
  if (r === 0) n !== null && Wc(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Wc(n), t === 1) e.tag === 0 ? ew(Ld.bind(null, e)) : Zp(Ld.bind(null, e)), Yv(function() {
      !(X & 6) && An();
    }), n = null;
    else {
      switch (Tp(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = Pp;
          break;
        case 16:
          n = es;
          break;
        case 536870912:
          n = Cp;
          break;
        default:
          n = es;
      }
      n = Yh(n, Wh.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Wh(e, t) {
  if (Bi = -1, Hi = 0, X & 6) throw Error(A(327));
  var n = e.callbackNode;
  if (Sr() && e.callbackNode !== n) return null;
  var r = ts(e, e === we ? Ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ws(e, r);
  else {
    t = r;
    var o = X;
    X |= 2;
    var i = Hh();
    (we !== e || Ee !== t) && (Dt = null, Br = pe() + 500, Bn(e, t));
    do
      try {
        Sw();
        break;
      } catch (l) {
        Bh(e, l);
      }
    while (true);
    Ru(), gs.current = i, X = o, he !== null ? t = 0 : (we = null, Ee = 0, t = ye);
  }
  if (t !== 0) {
    if (t === 2 && (o = ia(e), o !== 0 && (r = o, t = Ia(e, o))), t === 1) throw n = Qo, Bn(e, 0), nn(e, r), $e(e, pe()), n;
    if (t === 6) nn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !ww(o) && (t = ws(e, r), t === 2 && (i = ia(e), i !== 0 && (r = i, t = Ia(e, i))), t === 1)) throw n = Qo, Bn(e, 0), nn(e, r), $e(e, pe()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(A(345));
        case 2:
          In(e, De, Dt);
          break;
        case 3:
          if (nn(e, r), (r & 130023424) === r && (t = Wu + 500 - pe(), 10 < t)) {
            if (ts(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              be(), e.pingedLanes |= e.suspendedLanes & o;
              break;
            }
            e.timeoutHandle = pa(In.bind(null, e, De, Dt), t);
            break;
          }
          In(e, De, Dt);
          break;
        case 4:
          if (nn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - ht(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i;
          }
          if (r = o, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vw(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = pa(In.bind(null, e, De, Dt), r);
            break;
          }
          In(e, De, Dt);
          break;
        case 5:
          In(e, De, Dt);
          break;
        default:
          throw Error(A(329));
      }
    }
  }
  return $e(e, pe()), e.callbackNode === n ? Wh.bind(null, e) : null;
}
function Ia(e, t) {
  var n = To;
  return e.current.memoizedState.isDehydrated && (Bn(e, t).flags |= 256), e = ws(e, t), e !== 2 && (t = De, De = n, t !== null && ja(t)), e;
}
function ja(e) {
  De === null ? De = e : De.push.apply(De, e);
}
function ww(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var o = n[r], i = o.getSnapshot;
        o = o.value;
        try {
          if (!gt(i(), o)) return false;
        } catch (e2) {
          return false;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return true;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return true;
}
function nn(e, t) {
  for (t &= ~Vu, t &= ~Fs, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - ht(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Ld(e) {
  if (X & 6) throw Error(A(327));
  Sr();
  var t = ts(e, 0);
  if (!(t & 1)) return $e(e, pe()), null;
  var n = ws(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ia(e);
    r !== 0 && (t = r, n = Ia(e, r));
  }
  if (n === 1) throw n = Qo, Bn(e, 0), nn(e, t), $e(e, pe()), n;
  if (n === 6) throw Error(A(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, In(e, De, Dt), $e(e, pe()), null;
}
function Bu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    X = n, X === 0 && (Br = pe() + 500, js && An());
  }
}
function Yn(e) {
  fn !== null && fn.tag === 0 && !(X & 6) && Sr();
  var t = X;
  X |= 1;
  var n = ot.transition, r = te;
  try {
    if (ot.transition = null, te = 1, e) return e();
  } finally {
    te = r, ot.transition = n, X = t, !(X & 6) && An();
  }
}
function Hu() {
  Be = hr.current, ie(hr);
}
function Bn(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Kv(n)), he !== null) for (n = he.return; n !== null; ) {
    var r = n;
    switch (Cu(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && ss();
        break;
      case 3:
        Vr(), ie(Fe), ie(Re), ju();
        break;
      case 5:
        Iu(r);
        break;
      case 4:
        Vr();
        break;
      case 13:
        ie(ae);
        break;
      case 19:
        ie(ae);
        break;
      case 10:
        Au(r.type._context);
        break;
      case 22:
      case 23:
        Hu();
    }
    n = n.return;
  }
  if (we = e, he = e = xn(e.current, null), Ee = Be = t, ye = 0, Qo = null, Vu = Fs = Kn = 0, De = To = null, Ln !== null) {
    for (t = 0; t < Ln.length; t++) if (n = Ln[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var o = r.next, i = n.pending;
      if (i !== null) {
        var s = i.next;
        i.next = o, r.next = s;
      }
      n.pending = r;
    }
    Ln = null;
  }
  return e;
}
function Bh(e, t) {
  do {
    var n = he;
    try {
      if (Ru(), Ui.current = ms, hs) {
        for (var r = ue.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        hs = false;
      }
      if (Gn = 0, ve = me = ue = null, Co = false, Wo = 0, Uu.current = null, n === null || n.return === null) {
        ye = 1, Qo = t, he = null;
        break;
      }
      e: {
        var i = e, s = n.return, l = n, a = t;
        if (t = Ee, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var u = a, d = l, c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var p = d.alternate;
            p ? (d.updateQueue = p.updateQueue, d.memoizedState = p.memoizedState, d.lanes = p.lanes) : (d.updateQueue = null, d.memoizedState = null);
          }
          var w = Ed(s);
          if (w !== null) {
            w.flags &= -257, _d(w, s, l, i, t), w.mode & 1 && Sd(i, u, t), t = w, a = u;
            var x = t.updateQueue;
            if (x === null) {
              var g = /* @__PURE__ */ new Set();
              g.add(a), t.updateQueue = g;
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Sd(i, u, t), Qu();
              break e;
            }
            a = Error(A(426));
          }
        } else if (le && l.mode & 1) {
          var S = Ed(s);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), _d(S, s, l, i, t), ku(Wr(a, l));
            break e;
          }
        }
        i = a = Wr(a, l), ye !== 4 && (ye = 2), To === null ? To = [i] : To.push(i), i = s;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var m = Th(i, a, t);
              md(i, m);
              break e;
            case 1:
              l = a;
              var f = i.type, y = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (vn === null || !vn.has(y)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var E = Rh(i, l, t);
                md(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qh(n);
    } catch (P) {
      t = P, he === n && n !== null && (he = n = n.return);
      continue;
    }
    break;
  } while (true);
}
function Hh() {
  var e = gs.current;
  return gs.current = ms, e === null ? ms : e;
}
function Qu() {
  (ye === 0 || ye === 3 || ye === 2) && (ye = 4), we === null || !(Kn & 268435455) && !(Fs & 268435455) || nn(we, Ee);
}
function ws(e, t) {
  var n = X;
  X |= 2;
  var r = Hh();
  (we !== e || Ee !== t) && (Dt = null, Bn(e, t));
  do
    try {
      xw();
      break;
    } catch (o) {
      Bh(e, o);
    }
  while (true);
  if (Ru(), X = n, gs.current = r, he !== null) throw Error(A(261));
  return we = null, Ee = 0, ye;
}
function xw() {
  for (; he !== null; ) Qh(he);
}
function Sw() {
  for (; he !== null && !Qy(); ) Qh(he);
}
function Qh(e) {
  var t = Kh(e.alternate, e, Be);
  e.memoizedProps = e.pendingProps, t === null ? qh(e) : he = t, Uu.current = null;
}
function qh(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = hw(n, t), n !== null) {
        n.flags &= 32767, he = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        ye = 6, he = null;
        return;
      }
    } else if (n = pw(n, t, Be), n !== null) {
      he = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      he = t;
      return;
    }
    he = t = e;
  } while (t !== null);
  ye === 0 && (ye = 5);
}
function In(e, t, n) {
  var r = te, o = ot.transition;
  try {
    ot.transition = null, te = 1, Ew(e, t, n, r);
  } finally {
    ot.transition = o, te = r;
  }
  return null;
}
function Ew(e, t, n, r) {
  do
    Sr();
  while (fn !== null);
  if (X & 6) throw Error(A(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(A(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (nv(e, i), e === we && (he = we = null, Ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ti || (Ti = true, Yh(es, function() {
    return Sr(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ot.transition, ot.transition = null;
    var s = te;
    te = 1;
    var l = X;
    X |= 4, Uu.current = null, gw(e, n), Uh(n, e), Vv(da), ns = !!ca, da = ca = null, e.current = n, yw(n), qy(), X = l, te = s, ot.transition = i;
  } else e.current = n;
  if (Ti && (Ti = false, fn = e, vs = o), i = e.pendingLanes, i === 0 && (vn = null), Yy(n.stateNode), $e(e, pe()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ys) throw ys = false, e = Na, Na = null, e;
  return vs & 1 && e.tag !== 0 && Sr(), i = e.pendingLanes, i & 1 ? e === ba ? Ro++ : (Ro = 0, ba = e) : Ro = 0, An(), null;
}
function Sr() {
  if (fn !== null) {
    var e = Tp(vs), t = ot.transition, n = te;
    try {
      if (ot.transition = null, te = 16 > e ? 16 : e, fn === null) var r = false;
      else {
        if (e = fn, fn = null, vs = 0, X & 6) throw Error(A(331));
        var o = X;
        for (X |= 4, I = e.current; I !== null; ) {
          var i = I, s = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (I = u; I !== null; ) {
                  var d = I;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ko(8, d, i);
                  }
                  var c = d.child;
                  if (c !== null) c.return = d, I = c;
                  else for (; I !== null; ) {
                    d = I;
                    var p = d.sibling, w = d.return;
                    if (Fh(d), d === u) {
                      I = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, I = p;
                      break;
                    }
                    I = w;
                  }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var S = g.sibling;
                    g.sibling = null, g = S;
                  } while (g !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, I = s;
          else e: for (; I !== null; ) {
            if (i = I, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                ko(9, i, i.return);
            }
            var m = i.sibling;
            if (m !== null) {
              m.return = i.return, I = m;
              break e;
            }
            I = i.return;
          }
        }
        var f = e.current;
        for (I = f; I !== null; ) {
          s = I;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) y.return = s, I = y;
          else e: for (s = f; I !== null; ) {
            if (l = I, l.flags & 2048) try {
              switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  Ms(9, l);
              }
            } catch (P) {
              fe(l, l.return, P);
            }
            if (l === s) {
              I = null;
              break e;
            }
            var E = l.sibling;
            if (E !== null) {
              E.return = l.return, I = E;
              break e;
            }
            I = l.return;
          }
        }
        if (X = o, An(), Tt && typeof Tt.onPostCommitFiberRoot == "function") try {
          Tt.onPostCommitFiberRoot(As, e);
        } catch (e2) {
        }
        r = true;
      }
      return r;
    } finally {
      te = n, ot.transition = t;
    }
  }
  return false;
}
function Dd(e, t, n) {
  t = Wr(n, t), t = Th(e, t, 1), e = yn(e, t, 1), t = be(), e !== null && (ri(e, 1, t), $e(e, t));
}
function fe(e, t, n) {
  if (e.tag === 3) Dd(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Dd(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vn === null || !vn.has(r))) {
        e = Wr(n, e), e = Rh(t, e, 1), t = yn(t, e, 1), e = be(), t !== null && (ri(t, 1, e), $e(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function _w(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, we === e && (Ee & n) === n && (ye === 4 || ye === 3 && (Ee & 130023424) === Ee && 500 > pe() - Wu ? Bn(e, 0) : Vu |= n), $e(e, t);
}
function Gh(e, t) {
  t === 0 && (e.mode & 1 ? (t = yi, yi <<= 1, !(yi & 130023424) && (yi = 4194304)) : t = 1);
  var n = be();
  e = Wt(e, t), e !== null && (ri(e, t, n), $e(e, n));
}
function Pw(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Gh(e, n);
}
function Cw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(A(314));
  }
  r !== null && r.delete(t), Gh(e, n);
}
var Kh;
Kh = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || Fe.current) Me = true;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return Me = false, fw(e, t, n);
    Me = !!(e.flags & 131072);
  }
  else Me = false, le && t.flags & 1048576 && Jp(t, us, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Wi(e, t), e = t.pendingProps;
      var o = zr(t, Re.current);
      xr(t, n), o = Du(null, t, r, e, o, n);
      var i = Mu();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ze(r) ? (i = true, ls(t)) : i = false, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Nu(t), o.updater = Ds, t.stateNode = o, o._reactInternals = t, xa(t, r, e, n), t = _a(null, t, r, true, i, n)) : (t.tag = 0, le && i && Pu(t), Ne(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Wi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Tw(r), e = ut(r, e), o) {
          case 0:
            t = Ea(null, t, r, e, n);
            break e;
          case 1:
            t = kd(null, t, r, e, n);
            break e;
          case 11:
            t = Pd(null, t, r, e, n);
            break e;
          case 14:
            t = Cd(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(A(306, r, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Ea(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), kd(e, t, r, o, n);
    case 3:
      e: {
        if (bh(t), e === null) throw Error(A(387));
        r = t.pendingProps, i = t.memoizedState, o = i.element, ih(e, t), fs(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated) if (i = { element: r, isDehydrated: false, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          o = Wr(Error(A(423)), t), t = Td(e, t, r, n, o);
          break e;
        } else if (r !== o) {
          o = Wr(Error(A(424)), t), t = Td(e, t, r, n, o);
          break e;
        } else for (Qe = gn(t.stateNode.containerInfo.firstChild), qe = t, le = true, ft = null, n = rh(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if ($r(), r === o) {
            t = Bt(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return sh(t), e === null && ya(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, fa(r, o) ? s = null : i !== null && fa(r, i) && (t.flags |= 32), Nh(e, t), Ne(e, t, s, n), t.child;
    case 6:
      return e === null && ya(t), null;
    case 13:
      return Ih(e, t, n);
    case 4:
      return bu(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ur(t, null, r, n) : Ne(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Pd(e, t, r, o, n);
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, ne(cs, r._currentValue), r._currentValue = s, i !== null) if (gt(i.value, s)) {
          if (i.children === o.children && !Fe.current) {
            t = Bt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var l = i.dependencies;
          if (l !== null) {
            s = i.child;
            for (var a = l.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = $t(-1, n & -n), a.tag = 2;
                  var u = i.updateQueue;
                  if (u !== null) {
                    u = u.shared;
                    var d = u.pending;
                    d === null ? a.next = a : (a.next = d.next, d.next = a), u.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), va(i.return, n, t), l.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (s = i.return, s === null) throw Error(A(341));
            s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), va(s, n, t), s = i.sibling;
          } else s = i.child;
          if (s !== null) s.return = i;
          else for (s = i; s !== null; ) {
            if (s === t) {
              s = null;
              break;
            }
            if (i = s.sibling, i !== null) {
              i.return = s.return, s = i;
              break;
            }
            s = s.return;
          }
          i = s;
        }
        Ne(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, xr(t, n), o = it(o), r = r(o), t.flags |= 1, Ne(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = ut(r, t.pendingProps), o = ut(r.type, o), Cd(e, t, r, o, n);
    case 15:
      return Ah(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ut(r, o), Wi(e, t), t.tag = 1, ze(r) ? (e = true, ls(t)) : e = false, xr(t, n), kh(t, r, o), xa(t, r, o, n), _a(null, t, r, true, e, n);
    case 19:
      return jh(e, t, n);
    case 22:
      return Oh(e, t, n);
  }
  throw Error(A(156, t.tag));
};
function Yh(e, t) {
  return _p(e, t);
}
function kw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function rt(e, t, n, r) {
  return new kw(e, t, n, r);
}
function qu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Tw(e) {
  if (typeof e == "function") return qu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fu) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return n === null ? (n = rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Qi(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") qu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case or:
      return Hn(n.children, o, i, t);
    case du:
      s = 8, o |= 8;
      break;
    case Bl:
      return e = rt(12, n, t, o | 2), e.elementType = Bl, e.lanes = i, e;
    case Hl:
      return e = rt(13, n, t, o), e.elementType = Hl, e.lanes = i, e;
    case Ql:
      return e = rt(19, n, t, o), e.elementType = Ql, e.lanes = i, e;
    case sp:
      return zs(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case op:
          s = 10;
          break e;
        case ip:
          s = 9;
          break e;
        case fu:
          s = 11;
          break e;
        case pu:
          s = 14;
          break e;
        case Jt:
          s = 16, r = null;
          break e;
      }
      throw Error(A(130, e == null ? e : typeof e, ""));
  }
  return t = rt(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Hn(e, t, n, r) {
  return e = rt(7, e, r, t), e.lanes = n, e;
}
function zs(e, t, n, r) {
  return e = rt(22, e, r, t), e.elementType = sp, e.lanes = n, e.stateNode = { isHidden: false }, e;
}
function Ol(e, t, n) {
  return e = rt(6, e, null, t), e.lanes = n, e;
}
function Nl(e, t, n) {
  return t = rt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = dl(0), this.expirationTimes = dl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = dl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
}
function Gu(e, t, n, r, o, i, s, l, a) {
  return e = new Rw(e, t, n, l, a), t === 1 ? (t = 1, i === true && (t |= 8)) : t = 0, i = rt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Nu(i), e;
}
function Aw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: rr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Xh(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(A(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(A(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ze(n)) return Xp(e, n, t);
  }
  return t;
}
function Zh(e, t, n, r, o, i, s, l, a) {
  return e = Gu(n, r, true, e, o, i, s, l, a), e.context = Xh(null), n = e.current, r = be(), o = wn(n), i = $t(r, o), i.callback = t != null ? t : null, yn(n, i, o), e.current.lanes = o, ri(e, o, r), $e(e, r), e;
}
function $s(e, t, n, r) {
  var o = t.current, i = be(), s = wn(o);
  return n = Xh(n), t.context === null ? t.context = n : t.pendingContext = n, t = $t(i, s), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yn(o, t, s), e !== null && (mt(e, o, s, i), $i(e, o, s)), s;
}
function xs(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Md(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ku(e, t) {
  Md(e, t), (e = e.alternate) && Md(e, t);
}
function Ow() {
  return null;
}
var Jh = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Yu(e) {
  this._internalRoot = e;
}
Us.prototype.render = Yu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(A(409));
  $s(e, t, null, null);
};
Us.prototype.unmount = Yu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Yn(function() {
      $s(null, e, null, null);
    }), t[Vt] = null;
  }
};
function Us(e) {
  this._internalRoot = e;
}
Us.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Op();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tn.length && t !== 0 && t < tn[n].priority; n++) ;
    tn.splice(n, 0, e), n === 0 && bp(e);
  }
};
function Xu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Vs(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Fd() {
}
function Nw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = xs(s);
        i.call(u);
      };
    }
    var s = Zh(t, r, e, 0, null, false, false, "", Fd);
    return e._reactRootContainer = s, e[Vt] = s.current, Fo(e.nodeType === 8 ? e.parentNode : e), Yn(), s;
  }
  for (; o = e.lastChild; ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function() {
      var u = xs(a);
      l.call(u);
    };
  }
  var a = Gu(e, 0, false, null, null, false, false, "", Fd);
  return e._reactRootContainer = a, e[Vt] = a.current, Fo(e.nodeType === 8 ? e.parentNode : e), Yn(function() {
    $s(t, a, n, r);
  }), a;
}
function Ws(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function() {
        var a = xs(s);
        l.call(a);
      };
    }
    $s(t, s, e, o);
  } else s = Nw(n, t, e, o, r);
  return xs(s);
}
Rp = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yo(t.pendingLanes);
        n !== 0 && (gu(t, n | 1), $e(t, pe()), !(X & 6) && (Br = pe() + 500, An()));
      }
      break;
    case 13:
      Yn(function() {
        var r = Wt(e, 1);
        if (r !== null) {
          var o = be();
          mt(r, e, 1, o);
        }
      }), Ku(e, 1);
  }
};
yu = function(e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = be();
      mt(t, e, 134217728, n);
    }
    Ku(e, 134217728);
  }
};
Ap = function(e) {
  if (e.tag === 13) {
    var t = wn(e), n = Wt(e, t);
    if (n !== null) {
      var r = be();
      mt(n, e, t, r);
    }
    Ku(e, t);
  }
};
Op = function() {
  return te;
};
Np = function(e, t) {
  var n = te;
  try {
    return te = e, t();
  } finally {
    te = n;
  }
};
na = function(e, t, n) {
  switch (t) {
    case "input":
      if (Kl(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Is(r);
            if (!o) throw Error(A(90));
            ap(r), Kl(r, o);
          }
        }
      }
      break;
    case "textarea":
      cp(e, n);
      break;
    case "select":
      t = n.value, t != null && gr(e, !!n.multiple, t, false);
  }
};
yp = Bu;
vp = Yn;
var bw = { usingClientEntryPoint: false, Events: [ii, ar, Is, mp, gp, Bu] }, fo = { findFiberByHostInstance: jn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Iw = { bundleType: fo.bundleType, version: fo.version, rendererPackageName: fo.rendererPackageName, rendererConfig: fo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: qt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Sp(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: fo.findFiberByHostInstance || Ow, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ri.isDisabled && Ri.supportsFiber) try {
    As = Ri.inject(Iw), Tt = Ri;
  } catch (e) {
  }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bw;
Ye.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xu(t)) throw Error(A(200));
  return Aw(e, t, null, n);
};
Ye.createRoot = function(e, t) {
  if (!Xu(e)) throw Error(A(299));
  var n = false, r = "", o = Jh;
  return t != null && (t.unstable_strictMode === true && (n = true), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Gu(e, 1, false, null, null, n, false, r, o), e[Vt] = t.current, Fo(e.nodeType === 8 ? e.parentNode : e), new Yu(t);
};
Ye.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(A(188)) : (e = Object.keys(e).join(","), Error(A(268, e)));
  return e = Sp(t), e = e === null ? null : e.stateNode, e;
};
Ye.flushSync = function(e) {
  return Yn(e);
};
Ye.hydrate = function(e, t, n) {
  if (!Vs(t)) throw Error(A(200));
  return Ws(null, e, t, true, n);
};
Ye.hydrateRoot = function(e, t, n) {
  if (!Xu(e)) throw Error(A(405));
  var r = n != null && n.hydratedSources || null, o = false, i = "", s = Jh;
  if (n != null && (n.unstable_strictMode === true && (o = true), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Zh(t, null, e, 1, n != null ? n : null, o, false, i, s), e[Vt] = t.current, Fo(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new Us(t);
};
Ye.render = function(e, t, n) {
  if (!Vs(t)) throw Error(A(200));
  return Ws(null, e, t, false, n);
};
Ye.unmountComponentAtNode = function(e) {
  if (!Vs(e)) throw Error(A(40));
  return e._reactRootContainer ? (Yn(function() {
    Ws(null, null, e, false, function() {
      e._reactRootContainer = null, e[Vt] = null;
    });
  }), true) : false;
};
Ye.unstable_batchedUpdates = Bu;
Ye.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Vs(n)) throw Error(A(200));
  if (e == null || e._reactInternals === void 0) throw Error(A(38));
  return Ws(e, t, n, false, r);
};
Ye.version = "18.3.1-next-f1338f8080-20240426";
function em() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(em);
  } catch (e) {
    console.error(e);
  }
}
em(), ep.exports = Ye;
var li = ep.exports;
const jw = Uf(li);
var tm, zd = li;
tm = zd.createRoot, zd.hydrateRoot;
console.log = () => {
}, console.debug = () => {
}, console.info = () => {
};
const Lw = "modulepreload", Dw = function(e) {
  return "/" + e;
}, $d = {}, z = function(t, n, r) {
  let o = Promise.resolve();
  if (n && n.length > 0) {
    document.getElementsByTagName("link");
    const s = document.querySelector("meta[property=csp-nonce]"), l = (s == null ? void 0 : s.nonce) || (s == null ? void 0 : s.getAttribute("nonce"));
    o = Promise.allSettled(n.map((a) => {
      if (a = Dw(a), a in $d) return;
      $d[a] = true;
      const u = a.endsWith(".css"), d = u ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${a}"]${d}`)) return;
      const c = document.createElement("link");
      if (c.rel = u ? "stylesheet" : Lw, u || (c.as = "script"), c.crossOrigin = "", c.href = a, l && c.setAttribute("nonce", l), document.head.appendChild(c), u) return new Promise((p, w) => {
        c.addEventListener("load", p), c.addEventListener("error", () => w(new Error(`Unable to preload CSS for ${a}`)));
      });
    }));
  }
  function i(s) {
    const l = new Event("vite:preloadError", { cancelable: true });
    if (l.payload = s, window.dispatchEvent(l), !l.defaultPrevented) throw s;
  }
  return o.then((s) => {
    for (const l of s || []) l.status === "rejected" && i(l.reason);
    return t().catch(i);
  });
};
function Mw(e, t) {
  if (e instanceof RegExp) return { keys: false, pattern: e };
  var n, r, o, i, s = [], l = "", a = e.split("/");
  for (a[0] || a.shift(); o = a.shift(); ) n = o[0], n === "*" ? (s.push(n), l += o[1] === "?" ? "(?:/(.*))?" : "/(.*)") : n === ":" ? (r = o.indexOf("?", 1), i = o.indexOf(".", 1), s.push(o.substring(1, ~r ? r : ~i ? i : o.length)), l += ~r && !~i ? "(?:/([^/]+?))?" : "/([^/]+?)", ~i && (l += (~r ? "?" : "") + "\\" + o.substring(i))) : l += "/" + o;
  return { keys: s, pattern: new RegExp("^" + l + (t ? "(?=$|/)" : "/?$"), "i") };
}
var nm = { exports: {} }, rm = {};
/**
* @license React
* use-sync-external-store-shim.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var Hr = v;
function Fw(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var zw = typeof Object.is == "function" ? Object.is : Fw, $w = Hr.useState, Uw = Hr.useEffect, Vw = Hr.useLayoutEffect, Ww = Hr.useDebugValue;
function Bw(e, t) {
  var n = t(), r = $w({ inst: { value: n, getSnapshot: t } }), o = r[0].inst, i = r[1];
  return Vw(function() {
    o.value = n, o.getSnapshot = t, bl(o) && i({ inst: o });
  }, [e, n, t]), Uw(function() {
    return bl(o) && i({ inst: o }), e(function() {
      bl(o) && i({ inst: o });
    });
  }, [e]), Ww(n), n;
}
function bl(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !zw(e, n);
  } catch (e2) {
    return true;
  }
}
function Hw(e, t) {
  return t();
}
var Qw = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Hw : Bw;
rm.useSyncExternalStore = Hr.useSyncExternalStore !== void 0 ? Hr.useSyncExternalStore : Qw;
nm.exports = rm;
var qw = nm.exports;
const Gw = Zf.useInsertionEffect, Kw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", om = Kw ? v.useLayoutEffect : v.useEffect, Yw = Gw || om, Zu = (e) => {
  const t = v.useRef([e, (...n) => t[0](...n)]).current;
  return Yw(() => {
    t[0] = e;
  }), t[1];
}, Xw = "popstate", Ju = "pushState", ec = "replaceState", Zw = "hashchange", Ud = [Xw, Ju, ec, Zw], Jw = (e) => {
  for (const t of Ud) addEventListener(t, e);
  return () => {
    for (const t of Ud) removeEventListener(t, e);
  };
}, im = (e, t) => qw.useSyncExternalStore(Jw, e, t), e0 = () => location.search, t0 = ({ ssrSearch: e = "" } = {}) => im(e0, () => e), Vd = () => location.pathname, n0 = ({ ssrPath: e } = {}) => im(Vd, e ? () => e : Vd), r0 = (e, { replace: t = false, state: n = null } = {}) => history[t ? ec : Ju](n, "", e), o0 = (e = {}) => [n0(e), r0], Wd = /* @__PURE__ */ Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Wd] > "u") {
  for (const e of [Ju, ec]) {
    const t = history[e];
    history[e] = function() {
      const n = t.apply(this, arguments), r = new Event(e);
      return r.arguments = arguments, dispatchEvent(r), n;
    };
  }
  Object.defineProperty(window, Wd, { value: true });
}
const i0 = (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) ? "~" + t : t.slice(e.length) || "/", sm = (e = "") => e === "/" ? "" : e, s0 = (e, t) => e[0] === "~" ? e.slice(1) : sm(t) + e, l0 = (e = "", t) => i0(Bd(sm(e)), Bd(t)), Bd = (e) => {
  try {
    return decodeURI(e);
  } catch (e2) {
    return e;
  }
}, lm = { hook: o0, searchHook: t0, parser: Mw, base: "", ssrPath: void 0, ssrSearch: void 0, hrefs: (e) => e }, am = v.createContext(lm), Zr = () => v.useContext(am), um = {}, cm = v.createContext(um), a0 = () => v.useContext(cm), Bs = (e) => {
  const [t, n] = e.hook(e);
  return [l0(e.base, t), Zu((r, o) => n(s0(r, e.base), o))];
}, Hs = () => Bs(Zr()), tc = (e, t, n, r) => {
  const { pattern: o, keys: i } = t instanceof RegExp ? { keys: false, pattern: t } : e(t || "*", r), s = o.exec(n) || [], [l, ...a] = s;
  return l !== void 0 ? [true, (() => {
    const u = i !== false ? Object.fromEntries(i.map((c, p) => [c, a[p]])) : s.groups;
    let d = __spreadValues({}, a);
    return u && Object.assign(d, u), d;
  })(), ...r ? [l] : []] : [false, null];
}, uP = (e) => tc(Zr().parser, e, Hs()[0]), dm = (_a2) => {
  var _b = _a2, { children: e } = _b, t = __objRest(_b, ["children"]);
  var _a3, _b2;
  var d, c;
  const n = Zr(), r = t.hook ? lm : n;
  let o = r;
  const [i, s] = (_a3 = (d = t.ssrPath) == null ? void 0 : d.split("?")) != null ? _a3 : [];
  s && (t.ssrSearch = s, t.ssrPath = i), t.hrefs = (_b2 = t.hrefs) != null ? _b2 : (c = t.hook) == null ? void 0 : c.hrefs;
  let l = v.useRef({}), a = l.current, u = a;
  for (let p in r) {
    const w = p === "base" ? r[p] + (t[p] || "") : t[p] || r[p];
    a === u && w !== u[p] && (l.current = u = __spreadValues({}, u)), u[p] = w, w !== r[p] && (o = u);
  }
  return v.createElement(am.Provider, { value: o, children: e });
}, Hd = ({ children: e, component: t }, n) => t ? v.createElement(t, { params: n }) : typeof e == "function" ? e(n) : e, u0 = (e) => {
  let t = v.useRef(um), n = t.current;
  for (const r in e) e[r] !== n[r] && (n = e);
  return Object.keys(e).length === 0 && (n = e), t.current = n;
}, M = (_c2) => {
  var _d2 = _c2, { path: e, nest: t, match: n } = _d2, r = __objRest(_d2, ["path", "nest", "match"]);
  const o = Zr(), [i] = Bs(o), [s, l, a] = n != null ? n : tc(o.parser, e, i, t), u = u0(__spreadValues(__spreadValues({}, a0()), l));
  if (!s) return null;
  const d = a ? v.createElement(dm, { base: a }, Hd(r, u)) : Hd(r, u);
  return v.createElement(cm.Provider, { value: u, children: d });
}, cP = v.forwardRef((e, t) => {
  const n = Zr(), [r, o] = Bs(n), _a2 = e, { to: i = "", href: s = i, onClick: l, asChild: a, children: u, className: d, replace: c, state: p } = _a2, w = __objRest(_a2, ["to", "href", "onClick", "asChild", "children", "className", "replace", "state"]), x = Zu((S) => {
    S.ctrlKey || S.metaKey || S.altKey || S.shiftKey || S.button !== 0 || (l == null || l(S), S.defaultPrevented || (S.preventDefault(), o(s, e)));
  }), g = n.hrefs(s[0] === "~" ? s.slice(1) : n.base + s, n);
  return a && v.isValidElement(u) ? v.cloneElement(u, { onClick: x, href: g }) : v.createElement("a", __spreadProps(__spreadValues({}, w), { onClick: x, href: g, className: d != null && d.call ? d(r === s) : d, children: u, ref: t }));
}), fm = (e) => Array.isArray(e) ? e.flatMap((t) => fm(t && t.type === v.Fragment ? t.props.children : t)) : [e], c0 = ({ children: e, location: t }) => {
  const n = Zr(), [r] = Bs(n);
  for (const o of fm(e)) {
    let i = 0;
    if (v.isValidElement(o) && (i = tc(n.parser, o.props.path, t || r, o.props.nest))[0]) return v.cloneElement(o, { match: i });
  }
  return null;
}, d0 = (e) => {
  const { to: t, href: n = t } = e, [, r] = Hs(), o = Zu(() => r(t || n, e));
  return om(() => {
    o();
  }, []), null;
};
var ai = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Xn = typeof window > "u" || "Deno" in globalThis;
function et() {
}
function f0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function La(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function pm(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Er(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function pt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qd(e, t) {
  const { type: n = "all", exact: r, fetchStatus: o, predicate: i, queryKey: s, stale: l } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== nc(s, t.options)) return false;
    } else if (!Go(t.queryKey, s)) return false;
  }
  if (n !== "all") {
    const a = t.isActive();
    if (n === "active" && !a || n === "inactive" && a) return false;
  }
  return !(typeof l == "boolean" && t.isStale() !== l || o && o !== t.state.fetchStatus || i && !i(t));
}
function qd(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return false;
    if (n) {
      if (qo(t.options.mutationKey) !== qo(i)) return false;
    } else if (!Go(t.options.mutationKey, i)) return false;
  }
  return !(r && t.state.status !== r || o && !o(t));
}
function nc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || qo)(e);
}
function qo(e) {
  return JSON.stringify(e, (t, n) => Ma(n) ? Object.keys(n).sort().reduce((r, o) => (r[o] = n[o], r), {}) : n);
}
function Go(e, t) {
  return e === t ? true : typeof e != typeof t ? false : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((n) => !Go(e[n], t[n])) : false;
}
function hm(e, t) {
  if (e === t) return e;
  const n = Gd(e) && Gd(t);
  if (n || Ma(e) && Ma(t)) {
    const r = n ? e : Object.keys(e), o = r.length, i = n ? t : Object.keys(t), s = i.length, l = n ? [] : {};
    let a = 0;
    for (let u = 0; u < s; u++) {
      const d = n ? u : i[u];
      (!n && r.includes(d) || n) && e[d] === void 0 && t[d] === void 0 ? (l[d] = void 0, a++) : (l[d] = hm(e[d], t[d]), l[d] === e[d] && e[d] !== void 0 && a++);
    }
    return o === s && a === o ? e : l;
  }
  return t;
}
function Da(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length) return false;
  for (const n in e) if (e[n] !== t[n]) return false;
  return true;
}
function Gd(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ma(e) {
  if (!Kd(e)) return false;
  const t = e.constructor;
  if (t === void 0) return true;
  const n = t.prototype;
  return !(!Kd(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Kd(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function p0(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Fa(e, t, n) {
  return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== false ? hm(e, t) : t;
}
function h0(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function m0(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var rc = /* @__PURE__ */ Symbol();
function mm(e, t) {
  return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === rc ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var Mn, rn, Cr, bf, g0 = (bf = class extends ai {
  constructor() {
    super();
    U(this, Mn);
    U(this, rn);
    U(this, Cr);
    L(this, Cr, (t) => {
      if (!Xn && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, false), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    _(this, rn) || this.setEventListener(_(this, Cr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = _(this, rn)) == null || t.call(this), L(this, rn, void 0));
  }
  setEventListener(t) {
    var n;
    L(this, Cr, t), (n = _(this, rn)) == null || n.call(this), L(this, rn, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    _(this, Mn) !== t && (L(this, Mn, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof _(this, Mn) == "boolean" ? _(this, Mn) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Mn = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), bf), oc = new g0(), kr, on, Tr, If, y0 = (If = class extends ai {
  constructor() {
    super();
    U(this, kr, true);
    U(this, on);
    U(this, Tr);
    L(this, Tr, (t) => {
      if (!Xn && window.addEventListener) {
        const n = () => t(true), r = () => t(false);
        return window.addEventListener("online", n, false), window.addEventListener("offline", r, false), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    _(this, on) || this.setEventListener(_(this, Tr));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = _(this, on)) == null || t.call(this), L(this, on, void 0));
  }
  setEventListener(t) {
    var n;
    L(this, Tr, t), (n = _(this, on)) == null || n.call(this), L(this, on, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    _(this, kr) !== t && (L(this, kr, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return _(this, kr);
  }
}, kr = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), If), Ss = new y0();
function za() {
  let e, t;
  const n = new Promise((o, i) => {
    e = o, t = i;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return n.resolve = (o) => {
    r({ status: "fulfilled", value: o }), e(o);
  }, n.reject = (o) => {
    r({ status: "rejected", reason: o }), t(o);
  }, n;
}
function v0(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function gm(e) {
  return (e != null ? e : "online") === "online" ? Ss.isOnline() : true;
}
var ym = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Il(e) {
  return e instanceof ym;
}
function vm(e) {
  let t = false, n = 0, r = false, o;
  const i = za(), s = (g) => {
    var S;
    r || (p(new ym(g)), (S = e.abort) == null || S.call(e));
  }, l = () => {
    t = true;
  }, a = () => {
    t = false;
  }, u = () => oc.isFocused() && (e.networkMode === "always" || Ss.isOnline()) && e.canRun(), d = () => gm(e.networkMode) && e.canRun(), c = (g) => {
    var S;
    r || (r = true, (S = e.onSuccess) == null || S.call(e, g), o == null || o(), i.resolve(g));
  }, p = (g) => {
    var S;
    r || (r = true, (S = e.onError) == null || S.call(e, g), o == null || o(), i.reject(g));
  }, w = () => new Promise((g) => {
    var S;
    o = (m) => {
      (r || u()) && g(m);
    }, (S = e.onPause) == null || S.call(e);
  }).then(() => {
    var g;
    o = void 0, r || (g = e.onContinue) == null || g.call(e);
  }), x = () => {
    if (r) return;
    let g;
    const S = n === 0 ? e.initialPromise : void 0;
    try {
      g = S != null ? S : e.fn();
    } catch (m) {
      g = Promise.reject(m);
    }
    Promise.resolve(g).then(c).catch((m) => {
      var _a2, _b;
      var k;
      if (r) return;
      const f = (_a2 = e.retry) != null ? _a2 : Xn ? 0 : 3, y = (_b = e.retryDelay) != null ? _b : v0, E = typeof y == "function" ? y(n, m) : y, P = f === true || typeof f == "number" && n < f || typeof f == "function" && f(n, m);
      if (t || !P) {
        p(m);
        return;
      }
      n++, (k = e.onFail) == null || k.call(e, n, m), p0(E).then(() => u() ? void 0 : w()).then(() => {
        t ? p(m) : x();
      });
    });
  };
  return { promise: i, cancel: s, continue: () => (o == null || o(), i), cancelRetry: l, continueRetry: a, canStart: d, start: () => (d() ? x() : w().then(x), i) };
}
function w0() {
  let e = [], t = 0, n = (l) => {
    l();
  }, r = (l) => {
    l();
  }, o = (l) => setTimeout(l, 0);
  const i = (l) => {
    t ? e.push(l) : o(() => {
      n(l);
    });
  }, s = () => {
    const l = e;
    e = [], l.length && o(() => {
      r(() => {
        l.forEach((a) => {
          n(a);
        });
      });
    });
  };
  return { batch: (l) => {
    let a;
    t++;
    try {
      a = l();
    } finally {
      t--, t || s();
    }
    return a;
  }, batchCalls: (l) => (...a) => {
    i(() => {
      l(...a);
    });
  }, schedule: i, setNotifyFunction: (l) => {
    n = l;
  }, setBatchNotifyFunction: (l) => {
    r = l;
  }, setScheduler: (l) => {
    o = l;
  } };
}
var Se = w0(), Fn, jf, wm = (jf = class {
  constructor() {
    U(this, Fn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), La(this.gcTime) && L(this, Fn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e != null ? e : Xn ? 1 / 0 : 5 * 60 * 1e3);
  }
  clearGcTimeout() {
    _(this, Fn) && (clearTimeout(_(this, Fn)), L(this, Fn, void 0));
  }
}, Fn = /* @__PURE__ */ new WeakMap(), jf), Rr, Ar, Je, ke, Zo, zn, ct, Lt, Lf, x0 = (Lf = class extends wm {
  constructor(t) {
    var _a2;
    super();
    U(this, ct);
    U(this, Rr);
    U(this, Ar);
    U(this, Je);
    U(this, ke);
    U(this, Zo);
    U(this, zn);
    L(this, zn, false), L(this, Zo, t.defaultOptions), this.setOptions(t.options), this.observers = [], L(this, Je, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, L(this, Rr, S0(this.options)), this.state = (_a2 = t.state) != null ? _a2 : _(this, Rr), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = _(this, ke)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = __spreadValues(__spreadValues({}, _(this, Zo)), t), this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && _(this, Je).remove(this);
  }
  setData(t, n) {
    const r = Fa(this.state.data, t, this.options);
    return G(this, ct, Lt).call(this, { data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r;
  }
  setState(t, n) {
    G(this, ct, Lt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, o;
    const n = (r = _(this, ke)) == null ? void 0 : r.promise;
    return (o = _(this, ke)) == null || o.cancel(t), n ? n.then(et).catch(et) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: true });
  }
  reset() {
    this.destroy(), this.setState(_(this, Rr));
  }
  isActive() {
    return this.observers.some((t) => pt(t.options.enabled, this) !== false);
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === rc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? true : this.getObserversCount() > 0 ? this.observers.some((t) => t.getCurrentResult().isStale) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !pm(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: false }), (n = _(this, ke)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: false }), (n = _(this, ke)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), _(this, Je).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (_(this, ke) && (_(this, zn) ? _(this, ke).cancel({ revert: true }) : _(this, ke).cancelRetry()), this.scheduleGc()), _(this, Je).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || G(this, ct, Lt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var a, u, d;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch)) this.cancel({ silent: true });
      else if (_(this, ke)) return _(this, ke).continueRetry(), _(this, ke).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const c = this.observers.find((p) => p.options.queryFn);
      c && this.setOptions(c.options);
    }
    const r = new AbortController(), o = (c) => {
      Object.defineProperty(c, "signal", { enumerable: true, get: () => (L(this, zn, true), r.signal) });
    }, i = () => {
      const c = mm(this.options, n), p = { queryKey: this.queryKey, meta: this.meta };
      return o(p), L(this, zn, false), this.options.persister ? this.options.persister(c, p, this) : c(p);
    }, s = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: i };
    o(s), (a = this.options.behavior) == null || a.onFetch(s, this), L(this, Ar, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = s.fetchOptions) == null ? void 0 : u.meta)) && G(this, ct, Lt).call(this, { type: "fetch", meta: (d = s.fetchOptions) == null ? void 0 : d.meta });
    const l = (c) => {
      var p, w, x, g;
      Il(c) && c.silent || G(this, ct, Lt).call(this, { type: "error", error: c }), Il(c) || ((w = (p = _(this, Je).config).onError) == null || w.call(p, c, this), (g = (x = _(this, Je).config).onSettled) == null || g.call(x, this.state.data, c, this)), this.scheduleGc();
    };
    return L(this, ke, vm({ initialPromise: n == null ? void 0 : n.initialPromise, fn: s.fetchFn, abort: r.abort.bind(r), onSuccess: (c) => {
      var p, w, x, g;
      if (c === void 0) {
        l(new Error(`${this.queryHash} data is undefined`));
        return;
      }
      try {
        this.setData(c);
      } catch (S) {
        l(S);
        return;
      }
      (w = (p = _(this, Je).config).onSuccess) == null || w.call(p, c, this), (g = (x = _(this, Je).config).onSettled) == null || g.call(x, c, this.state.error, this), this.scheduleGc();
    }, onError: l, onFail: (c, p) => {
      G(this, ct, Lt).call(this, { type: "failed", failureCount: c, error: p });
    }, onPause: () => {
      G(this, ct, Lt).call(this, { type: "pause" });
    }, onContinue: () => {
      G(this, ct, Lt).call(this, { type: "continue" });
    }, retry: s.options.retry, retryDelay: s.options.retryDelay, networkMode: s.options.networkMode, canRun: () => true })), _(this, ke).start();
  }
}, Rr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Je = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakSet(), Lt = function(t) {
  const n = (r) => {
    var _a2, _b;
    switch (t.type) {
      case "failed":
        return __spreadProps(__spreadValues({}, r), { fetchFailureCount: t.failureCount, fetchFailureReason: t.error });
      case "pause":
        return __spreadProps(__spreadValues({}, r), { fetchStatus: "paused" });
      case "continue":
        return __spreadProps(__spreadValues({}, r), { fetchStatus: "fetching" });
      case "fetch":
        return __spreadProps(__spreadValues(__spreadValues({}, r), xm(r.data, this.options)), { fetchMeta: (_a2 = t.meta) != null ? _a2 : null });
      case "success":
        return __spreadValues(__spreadProps(__spreadValues({}, r), { data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: (_b = t.dataUpdatedAt) != null ? _b : Date.now(), error: null, isInvalidated: false, status: "success" }), !t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null });
      case "error":
        const o = t.error;
        return Il(o) && o.revert && _(this, Ar) ? __spreadProps(__spreadValues({}, _(this, Ar)), { fetchStatus: "idle" }) : __spreadProps(__spreadValues({}, r), { error: o, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: o, fetchStatus: "idle", status: "error" });
      case "invalidate":
        return __spreadProps(__spreadValues({}, r), { isInvalidated: true });
      case "setState":
        return __spreadValues(__spreadValues({}, r), t.state);
    }
  };
  this.state = n(this.state), Se.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), _(this, Je).notify({ query: this, type: "updated", action: t });
  });
}, Lf);
function xm(e, t) {
  return __spreadValues({ fetchFailureCount: 0, fetchFailureReason: null, fetchStatus: gm(t.networkMode) ? "fetching" : "paused" }, e === void 0 && { error: null, status: "pending" });
}
function S0(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return { data: t, dataUpdateCount: 0, dataUpdatedAt: n ? r != null ? r : Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: false, status: n ? "success" : "pending", fetchStatus: "idle" };
}
var Et, Df, E0 = (Df = class extends ai {
  constructor(t = {}) {
    super();
    U(this, Et);
    this.config = t, L(this, Et, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    var _a2;
    const o = n.queryKey, i = (_a2 = n.queryHash) != null ? _a2 : nc(o, n);
    let s = this.get(i);
    return s || (s = new x0({ cache: this, queryKey: o, queryHash: i, options: t.defaultQueryOptions(n), state: r, defaultOptions: t.getQueryDefaults(o) }), this.add(s)), s;
  }
  add(t) {
    _(this, Et).has(t.queryHash) || (_(this, Et).set(t.queryHash, t), this.notify({ type: "added", query: t }));
  }
  remove(t) {
    const n = _(this, Et).get(t.queryHash);
    n && (t.destroy(), n === t && _(this, Et).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Se.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return _(this, Et).get(t);
  }
  getAll() {
    return [..._(this, Et).values()];
  }
  find(t) {
    const n = __spreadValues({ exact: true }, t);
    return this.getAll().find((r) => Qd(n, r));
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Qd(t, r)) : n;
  }
  notify(t) {
    Se.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    Se.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Se.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Et = /* @__PURE__ */ new WeakMap(), Df), _t, Ae, $n, Pt, Zt, Mf, _0 = (Mf = class extends wm {
  constructor(t) {
    super();
    U(this, Pt);
    U(this, _t);
    U(this, Ae);
    U(this, $n);
    this.mutationId = t.mutationId, L(this, Ae, t.mutationCache), L(this, _t, []), this.state = t.state || P0(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    _(this, _t).includes(t) || (_(this, _t).push(t), this.clearGcTimeout(), _(this, Ae).notify({ type: "observerAdded", mutation: this, observer: t }));
  }
  removeObserver(t) {
    L(this, _t, _(this, _t).filter((n) => n !== t)), this.scheduleGc(), _(this, Ae).notify({ type: "observerRemoved", mutation: this, observer: t });
  }
  optionalRemove() {
    _(this, _t).length || (this.state.status === "pending" ? this.scheduleGc() : _(this, Ae).remove(this));
  }
  continue() {
    var _a2;
    var t;
    return (_a2 = (t = _(this, $n)) == null ? void 0 : t.continue()) != null ? _a2 : this.execute(this.state.variables);
  }
  execute(t) {
    return __async(this, null, function* () {
      var _a2;
      var o, i, s, l, a, u, d, c, p, w, x, g, S, m, f, y, E, P, k, C;
      L(this, $n, vm({ fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")), onFail: (T, O) => {
        G(this, Pt, Zt).call(this, { type: "failed", failureCount: T, error: O });
      }, onPause: () => {
        G(this, Pt, Zt).call(this, { type: "pause" });
      }, onContinue: () => {
        G(this, Pt, Zt).call(this, { type: "continue" });
      }, retry: (_a2 = this.options.retry) != null ? _a2 : 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode, canRun: () => _(this, Ae).canRun(this) }));
      const n = this.state.status === "pending", r = !_(this, $n).canStart();
      try {
        if (!n) {
          G(this, Pt, Zt).call(this, { type: "pending", variables: t, isPaused: r }), yield (i = (o = _(this, Ae).config).onMutate) == null ? void 0 : i.call(o, t, this);
          const O = yield (l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t);
          O !== this.state.context && G(this, Pt, Zt).call(this, { type: "pending", context: O, variables: t, isPaused: r });
        }
        const T = yield _(this, $n).start();
        return yield (u = (a = _(this, Ae).config).onSuccess) == null ? void 0 : u.call(a, T, t, this.state.context, this), yield (c = (d = this.options).onSuccess) == null ? void 0 : c.call(d, T, t, this.state.context), yield (w = (p = _(this, Ae).config).onSettled) == null ? void 0 : w.call(p, T, null, this.state.variables, this.state.context, this), yield (g = (x = this.options).onSettled) == null ? void 0 : g.call(x, T, null, t, this.state.context), G(this, Pt, Zt).call(this, { type: "success", data: T }), T;
      } catch (T) {
        try {
          throw yield (m = (S = _(this, Ae).config).onError) == null ? void 0 : m.call(S, T, t, this.state.context, this), yield (y = (f = this.options).onError) == null ? void 0 : y.call(f, T, t, this.state.context), yield (P = (E = _(this, Ae).config).onSettled) == null ? void 0 : P.call(E, void 0, T, this.state.variables, this.state.context, this), yield (C = (k = this.options).onSettled) == null ? void 0 : C.call(k, void 0, T, t, this.state.context), T;
        } finally {
          G(this, Pt, Zt).call(this, { type: "error", error: T });
        }
      } finally {
        _(this, Ae).runNext(this);
      }
    });
  }
}, _t = /* @__PURE__ */ new WeakMap(), Ae = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakSet(), Zt = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return __spreadProps(__spreadValues({}, r), { failureCount: t.failureCount, failureReason: t.error });
      case "pause":
        return __spreadProps(__spreadValues({}, r), { isPaused: true });
      case "continue":
        return __spreadProps(__spreadValues({}, r), { isPaused: false });
      case "pending":
        return __spreadProps(__spreadValues({}, r), { context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now() });
      case "success":
        return __spreadProps(__spreadValues({}, r), { data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: false });
      case "error":
        return __spreadProps(__spreadValues({}, r), { data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: false, status: "error" });
    }
  };
  this.state = n(this.state), Se.batch(() => {
    _(this, _t).forEach((r) => {
      r.onMutationUpdate(t);
    }), _(this, Ae).notify({ mutation: this, type: "updated", action: t });
  });
}, Mf);
function P0() {
  return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: false, status: "idle", variables: void 0, submittedAt: 0 };
}
var We, Jo, Ff, C0 = (Ff = class extends ai {
  constructor(t = {}) {
    super();
    U(this, We);
    U(this, Jo);
    this.config = t, L(this, We, /* @__PURE__ */ new Map()), L(this, Jo, Date.now());
  }
  build(t, n, r) {
    const o = new _0({ mutationCache: this, mutationId: ++di(this, Jo)._, options: t.defaultMutationOptions(n), state: r });
    return this.add(o), o;
  }
  add(t) {
    var _a2;
    const n = Ai(t), r = (_a2 = _(this, We).get(n)) != null ? _a2 : [];
    r.push(t), _(this, We).set(n, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const n = Ai(t);
    if (_(this, We).has(n)) {
      const o = (r = _(this, We).get(n)) == null ? void 0 : r.filter((i) => i !== t);
      o && (o.length === 0 ? _(this, We).delete(n) : _(this, We).set(n, o));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const n = (r = _(this, We).get(Ai(t))) == null ? void 0 : r.find((o) => o.state.status === "pending");
    return !n || n === t;
  }
  runNext(t) {
    var _a2;
    var r;
    const n = (r = _(this, We).get(Ai(t))) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
    return (_a2 = n == null ? void 0 : n.continue()) != null ? _a2 : Promise.resolve();
  }
  clear() {
    Se.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [..._(this, We).values()].flat();
  }
  find(t) {
    const n = __spreadValues({ exact: true }, t);
    return this.getAll().find((r) => qd(n, r));
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => qd(t, n));
  }
  notify(t) {
    Se.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return Se.batch(() => Promise.all(t.map((n) => n.continue().catch(et))));
  }
}, We = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Ff);
function Ai(e) {
  var _a2;
  var t;
  return (_a2 = (t = e.options.scope) == null ? void 0 : t.id) != null ? _a2 : String(e.mutationId);
}
function Yd(e) {
  return { onFetch: (t, n) => {
    var d, c, p, w, x;
    const r = t.options, o = (p = (c = (d = t.fetchOptions) == null ? void 0 : d.meta) == null ? void 0 : c.fetchMore) == null ? void 0 : p.direction, i = ((w = t.state.data) == null ? void 0 : w.pages) || [], s = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
    let l = { pages: [], pageParams: [] }, a = 0;
    const u = () => __async(null, null, function* () {
      var _a2;
      let g = false;
      const S = (y) => {
        Object.defineProperty(y, "signal", { enumerable: true, get: () => (t.signal.aborted ? g = true : t.signal.addEventListener("abort", () => {
          g = true;
        }), t.signal) });
      }, m = mm(t.options, t.fetchOptions), f = (y, E, P) => __async(null, null, function* () {
        if (g) return Promise.reject();
        if (E == null && y.pages.length) return Promise.resolve(y);
        const k = { queryKey: t.queryKey, pageParam: E, direction: P ? "backward" : "forward", meta: t.options.meta };
        S(k);
        const C = yield m(k), { maxPages: T } = t.options, O = P ? m0 : h0;
        return { pages: O(y.pages, C, T), pageParams: O(y.pageParams, E, T) };
      });
      if (o && i.length) {
        const y = o === "backward", E = y ? k0 : Xd, P = { pages: i, pageParams: s }, k = E(r, P);
        l = yield f(P, k, y);
      } else {
        const y = e != null ? e : i.length;
        do {
          const E = a === 0 ? (_a2 = s[0]) != null ? _a2 : r.initialPageParam : Xd(r, l);
          if (a > 0 && E == null) break;
          l = yield f(l, E), a++;
        } while (a < y);
      }
      return l;
    });
    t.options.persister ? t.fetchFn = () => {
      var g, S;
      return (S = (g = t.options).persister) == null ? void 0 : S.call(g, u, { queryKey: t.queryKey, meta: t.options.meta, signal: t.signal }, n);
    } : t.fetchFn = u;
  } };
}
function Xd(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function k0(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var de, sn, ln, Or, Nr, an, br, Ir, zf, T0 = (zf = class {
  constructor(e = {}) {
    U(this, de);
    U(this, sn);
    U(this, ln);
    U(this, Or);
    U(this, Nr);
    U(this, an);
    U(this, br);
    U(this, Ir);
    L(this, de, e.queryCache || new E0()), L(this, sn, e.mutationCache || new C0()), L(this, ln, e.defaultOptions || {}), L(this, Or, /* @__PURE__ */ new Map()), L(this, Nr, /* @__PURE__ */ new Map()), L(this, an, 0);
  }
  mount() {
    di(this, an)._++, _(this, an) === 1 && (L(this, br, oc.subscribe((e) => __async(this, null, function* () {
      e && (yield this.resumePausedMutations(), _(this, de).onFocus());
    }))), L(this, Ir, Ss.subscribe((e) => __async(this, null, function* () {
      e && (yield this.resumePausedMutations(), _(this, de).onOnline());
    }))));
  }
  unmount() {
    var e, t;
    di(this, an)._--, _(this, an) === 0 && ((e = _(this, br)) == null || e.call(this), L(this, br, void 0), (t = _(this, Ir)) == null || t.call(this), L(this, Ir, void 0));
  }
  isFetching(e) {
    return _(this, de).findAll(__spreadProps(__spreadValues({}, e), { fetchStatus: "fetching" })).length;
  }
  isMutating(e) {
    return _(this, sn).findAll(__spreadProps(__spreadValues({}, e), { status: "pending" })).length;
  }
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = _(this, de).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    if (t === void 0) return this.fetchQuery(e);
    {
      const n = this.defaultQueryOptions(e), r = _(this, de).build(this, n);
      return e.revalidateIfStale && r.isStaleByTime(Er(n.staleTime, r)) && this.prefetchQuery(n), Promise.resolve(t);
    }
  }
  getQueriesData(e) {
    return _(this, de).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), o = _(this, de).get(r.queryHash), i = o == null ? void 0 : o.state.data, s = f0(t, i);
    if (s !== void 0) return _(this, de).build(this, r).setData(s, __spreadProps(__spreadValues({}, n), { manual: true }));
  }
  setQueriesData(e, t, n) {
    return Se.batch(() => _(this, de).findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]));
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = _(this, de).get(t.queryHash)) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = _(this, de);
    Se.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = _(this, de), r = __spreadValues({ type: "active" }, e);
    return Se.batch(() => (n.findAll(e).forEach((o) => {
      o.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const n = __spreadValues({ revert: true }, t), r = Se.batch(() => _(this, de).findAll(e).map((o) => o.cancel(n)));
    return Promise.all(r).then(et).catch(et);
  }
  invalidateQueries(e = {}, t = {}) {
    return Se.batch(() => {
      var _a2, _b;
      if (_(this, de).findAll(e).forEach((r) => {
        r.invalidate();
      }), e.refetchType === "none") return Promise.resolve();
      const n = __spreadProps(__spreadValues({}, e), { type: (_b = (_a2 = e.refetchType) != null ? _a2 : e.type) != null ? _b : "active" });
      return this.refetchQueries(n, t);
    });
  }
  refetchQueries(e = {}, t) {
    var _a2;
    const n = __spreadProps(__spreadValues({}, t), { cancelRefetch: (_a2 = t == null ? void 0 : t.cancelRefetch) != null ? _a2 : true }), r = Se.batch(() => _(this, de).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
      let i = o.fetch(void 0, n);
      return n.throwOnError || (i = i.catch(et)), o.state.fetchStatus === "paused" ? Promise.resolve() : i;
    }));
    return Promise.all(r).then(et);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = false);
    const n = _(this, de).build(this, t);
    return n.isStaleByTime(Er(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(et).catch(et);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Yd(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(et).catch(et);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Yd(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Ss.isOnline() ? _(this, sn).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return _(this, de);
  }
  getMutationCache() {
    return _(this, sn);
  }
  getDefaultOptions() {
    return _(this, ln);
  }
  setDefaultOptions(e) {
    L(this, ln, e);
  }
  setQueryDefaults(e, t) {
    _(this, Or).set(qo(e), { queryKey: e, defaultOptions: t });
  }
  getQueryDefaults(e) {
    const t = [..._(this, Or).values()];
    let n = {};
    return t.forEach((r) => {
      Go(e, r.queryKey) && (n = __spreadValues(__spreadValues({}, n), r.defaultOptions));
    }), n;
  }
  setMutationDefaults(e, t) {
    _(this, Nr).set(qo(e), { mutationKey: e, defaultOptions: t });
  }
  getMutationDefaults(e) {
    const t = [..._(this, Nr).values()];
    let n = {};
    return t.forEach((r) => {
      Go(e, r.mutationKey) && (n = __spreadValues(__spreadValues({}, n), r.defaultOptions));
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted) return e;
    const t = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, _(this, ln).queries), this.getQueryDefaults(e.queryKey)), e), { _defaulted: true });
    return t.queryHash || (t.queryHash = nc(t.queryKey, t)), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.enabled !== true && t.queryFn === rc && (t.enabled = false), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, _(this, ln).mutations), (e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)), e), { _defaulted: true });
  }
  clear() {
    _(this, de).clear(), _(this, sn).clear();
  }
}, de = /* @__PURE__ */ new WeakMap(), sn = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), zf), Le, K, ei, Oe, Un, jr, un, Ct, ti, Lr, Dr, Vn, Wn, cn, Mr, ee, wo, $a, Ua, Va, Wa, Ba, Ha, Qa, Sm, $f, R0 = ($f = class extends ai {
  constructor(t, n) {
    super();
    U(this, ee);
    U(this, Le);
    U(this, K);
    U(this, ei);
    U(this, Oe);
    U(this, Un);
    U(this, jr);
    U(this, un);
    U(this, Ct);
    U(this, ti);
    U(this, Lr);
    U(this, Dr);
    U(this, Vn);
    U(this, Wn);
    U(this, cn);
    U(this, Mr, /* @__PURE__ */ new Set());
    this.options = n, L(this, Le, t), L(this, Ct, null), L(this, un, za()), this.options.experimental_prefetchInRender || _(this, un).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (_(this, K).addObserver(this), Zd(_(this, K), this.options) ? G(this, ee, wo).call(this) : this.updateResult(), G(this, ee, Wa).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return qa(_(this, K), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return qa(_(this, K), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), G(this, ee, Ba).call(this), G(this, ee, Ha).call(this), _(this, K).removeObserver(this);
  }
  setOptions(t, n) {
    const r = this.options, o = _(this, K);
    if (this.options = _(this, Le).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof pt(this.options.enabled, _(this, K)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    G(this, ee, Qa).call(this), _(this, K).setOptions(this.options), r._defaulted && !Da(this.options, r) && _(this, Le).getQueryCache().notify({ type: "observerOptionsUpdated", query: _(this, K), observer: this });
    const i = this.hasListeners();
    i && Jd(_(this, K), o, this.options, r) && G(this, ee, wo).call(this), this.updateResult(n), i && (_(this, K) !== o || pt(this.options.enabled, _(this, K)) !== pt(r.enabled, _(this, K)) || Er(this.options.staleTime, _(this, K)) !== Er(r.staleTime, _(this, K))) && G(this, ee, $a).call(this);
    const s = G(this, ee, Ua).call(this);
    i && (_(this, K) !== o || pt(this.options.enabled, _(this, K)) !== pt(r.enabled, _(this, K)) || s !== _(this, cn)) && G(this, ee, Va).call(this, s);
  }
  getOptimisticResult(t) {
    const n = _(this, Le).getQueryCache().build(_(this, Le), t), r = this.createResult(n, t);
    return O0(this, r) && (L(this, Oe, r), L(this, jr, this.options), L(this, Un, _(this, K).state)), r;
  }
  getCurrentResult() {
    return _(this, Oe);
  }
  trackResult(t, n) {
    const r = {};
    return Object.keys(t).forEach((o) => {
      Object.defineProperty(r, o, { configurable: false, enumerable: true, get: () => (this.trackProp(o), n == null || n(o), t[o]) });
    }), r;
  }
  trackProp(t) {
    _(this, Mr).add(t);
  }
  getCurrentQuery() {
    return _(this, K);
  }
  refetch(_e2 = {}) {
    var t = __objRest(_e2, []);
    return this.fetch(__spreadValues({}, t));
  }
  fetchOptimistic(t) {
    const n = _(this, Le).defaultQueryOptions(t), r = _(this, Le).getQueryCache().build(_(this, Le), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    var _a2;
    return G(this, ee, wo).call(this, __spreadProps(__spreadValues({}, t), { cancelRefetch: (_a2 = t.cancelRefetch) != null ? _a2 : true })).then(() => (this.updateResult(), _(this, Oe)));
  }
  createResult(t, n) {
    var T;
    const r = _(this, K), o = this.options, i = _(this, Oe), s = _(this, Un), l = _(this, jr), u = t !== r ? t.state : _(this, ei), { state: d } = t;
    let c = __spreadValues({}, d), p = false, w;
    if (n._optimisticResults) {
      const O = this.hasListeners(), N = !O && Zd(t, n), V = O && Jd(t, r, n, o);
      (N || V) && (c = __spreadValues(__spreadValues({}, c), xm(d.data, t.options))), n._optimisticResults === "isRestoring" && (c.fetchStatus = "idle");
    }
    let { error: x, errorUpdatedAt: g, status: S } = c;
    if (n.select && c.data !== void 0) if (i && c.data === (s == null ? void 0 : s.data) && n.select === _(this, ti)) w = _(this, Lr);
    else try {
      L(this, ti, n.select), w = n.select(c.data), w = Fa(i == null ? void 0 : i.data, w, n), L(this, Lr, w), L(this, Ct, null);
    } catch (O) {
      L(this, Ct, O);
    }
    else w = c.data;
    if (n.placeholderData !== void 0 && w === void 0 && S === "pending") {
      let O;
      if (i != null && i.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData)) O = i.data;
      else if (O = typeof n.placeholderData == "function" ? n.placeholderData((T = _(this, Dr)) == null ? void 0 : T.state.data, _(this, Dr)) : n.placeholderData, n.select && O !== void 0) try {
        O = n.select(O), L(this, Ct, null);
      } catch (N) {
        L(this, Ct, N);
      }
      O !== void 0 && (S = "success", w = Fa(i == null ? void 0 : i.data, O, n), p = true);
    }
    _(this, Ct) && (x = _(this, Ct), w = _(this, Lr), g = Date.now(), S = "error");
    const m = c.fetchStatus === "fetching", f = S === "pending", y = S === "error", E = f && m, P = w !== void 0, C = { status: S, fetchStatus: c.fetchStatus, isPending: f, isSuccess: S === "success", isError: y, isInitialLoading: E, isLoading: E, data: w, dataUpdatedAt: c.dataUpdatedAt, error: x, errorUpdatedAt: g, failureCount: c.fetchFailureCount, failureReason: c.fetchFailureReason, errorUpdateCount: c.errorUpdateCount, isFetched: c.dataUpdateCount > 0 || c.errorUpdateCount > 0, isFetchedAfterMount: c.dataUpdateCount > u.dataUpdateCount || c.errorUpdateCount > u.errorUpdateCount, isFetching: m, isRefetching: m && !f, isLoadingError: y && !P, isPaused: c.fetchStatus === "paused", isPlaceholderData: p, isRefetchError: y && P, isStale: ic(t, n), refetch: this.refetch, promise: _(this, un) };
    if (this.options.experimental_prefetchInRender) {
      const O = (D) => {
        C.status === "error" ? D.reject(C.error) : C.data !== void 0 && D.resolve(C.data);
      }, N = () => {
        const D = L(this, un, C.promise = za());
        O(D);
      }, V = _(this, un);
      switch (V.status) {
        case "pending":
          t.queryHash === r.queryHash && O(V);
          break;
        case "fulfilled":
          (C.status === "error" || C.data !== V.value) && N();
          break;
        case "rejected":
          (C.status !== "error" || C.error !== V.reason) && N();
          break;
      }
    }
    return C;
  }
  updateResult(t) {
    const n = _(this, Oe), r = this.createResult(_(this, K), this.options);
    if (L(this, Un, _(this, K).state), L(this, jr, this.options), _(this, Un).data !== void 0 && L(this, Dr, _(this, K)), Da(r, n)) return;
    L(this, Oe, r);
    const o = {}, i = () => {
      if (!n) return true;
      const { notifyOnChangeProps: s } = this.options, l = typeof s == "function" ? s() : s;
      if (l === "all" || !l && !_(this, Mr).size) return true;
      const a = new Set(l != null ? l : _(this, Mr));
      return this.options.throwOnError && a.add("error"), Object.keys(_(this, Oe)).some((u) => {
        const d = u;
        return _(this, Oe)[d] !== n[d] && a.has(d);
      });
    };
    (t == null ? void 0 : t.listeners) !== false && i() && (o.listeners = true), G(this, ee, Sm).call(this, __spreadValues(__spreadValues({}, o), t));
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && G(this, ee, Wa).call(this);
  }
}, Le = /* @__PURE__ */ new WeakMap(), K = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), un = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), ee = /* @__PURE__ */ new WeakSet(), wo = function(t) {
  G(this, ee, Qa).call(this);
  let n = _(this, K).fetch(this.options, t);
  return t != null && t.throwOnError || (n = n.catch(et)), n;
}, $a = function() {
  G(this, ee, Ba).call(this);
  const t = Er(this.options.staleTime, _(this, K));
  if (Xn || _(this, Oe).isStale || !La(t)) return;
  const r = pm(_(this, Oe).dataUpdatedAt, t) + 1;
  L(this, Vn, setTimeout(() => {
    _(this, Oe).isStale || this.updateResult();
  }, r));
}, Ua = function() {
  var _a2;
  return (_a2 = typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(_(this, K)) : this.options.refetchInterval) != null ? _a2 : false;
}, Va = function(t) {
  G(this, ee, Ha).call(this), L(this, cn, t), !(Xn || pt(this.options.enabled, _(this, K)) === false || !La(_(this, cn)) || _(this, cn) === 0) && L(this, Wn, setInterval(() => {
    (this.options.refetchIntervalInBackground || oc.isFocused()) && G(this, ee, wo).call(this);
  }, _(this, cn)));
}, Wa = function() {
  G(this, ee, $a).call(this), G(this, ee, Va).call(this, G(this, ee, Ua).call(this));
}, Ba = function() {
  _(this, Vn) && (clearTimeout(_(this, Vn)), L(this, Vn, void 0));
}, Ha = function() {
  _(this, Wn) && (clearInterval(_(this, Wn)), L(this, Wn, void 0));
}, Qa = function() {
  const t = _(this, Le).getQueryCache().build(_(this, Le), this.options);
  if (t === _(this, K)) return;
  const n = _(this, K);
  L(this, K, t), L(this, ei, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, Sm = function(t) {
  Se.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(_(this, Oe));
    }), _(this, Le).getQueryCache().notify({ query: _(this, K), type: "observerResultsUpdated" });
  });
}, $f);
function A0(e, t) {
  return pt(t.enabled, e) !== false && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === false);
}
function Zd(e, t) {
  return A0(e, t) || e.state.data !== void 0 && qa(e, t, t.refetchOnMount);
}
function qa(e, t, n) {
  if (pt(t.enabled, e) !== false) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== false && ic(e, t);
  }
  return false;
}
function Jd(e, t, n, r) {
  return (e !== t || pt(r.enabled, e) === false) && (!n.suspense || e.state.status !== "error") && ic(e, n);
}
function ic(e, t) {
  return pt(t.enabled, e) !== false && e.isStaleByTime(Er(t.staleTime, e));
}
function O0(e, t) {
  return !Da(e.getCurrentResult(), t);
}
var Em = v.createContext(void 0), _m = (e) => {
  const t = v.useContext(Em);
  if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, N0 = ({ client: e, children: t }) => (v.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), h.jsx(Em.Provider, { value: e, children: t })), Pm = v.createContext(false), b0 = () => v.useContext(Pm);
Pm.Provider;
function I0() {
  let e = false;
  return { clearReset: () => {
    e = false;
  }, reset: () => {
    e = true;
  }, isReset: () => e };
}
var j0 = v.createContext(I0()), L0 = () => v.useContext(j0);
function D0(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function ef() {
}
var M0 = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = false));
}, F0 = (e) => {
  v.useEffect(() => {
    e.clearReset();
  }, [e]);
}, z0 = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r }) => e.isError && !t.isReset() && !e.isFetching && r && D0(n, [e.error, r]), $0 = (e) => {
  e.suspense && (e.staleTime === void 0 && (e.staleTime = 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, U0 = (e, t) => e.isLoading && e.isFetching && !t, V0 = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, tf = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function W0(e, t, n) {
  var d, c, p, w, x;
  const r = _m(), o = b0(), i = L0(), s = r.defaultQueryOptions(e);
  (c = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || c.call(d, s), s._optimisticResults = o ? "isRestoring" : "optimistic", $0(s), M0(s, i), F0(i);
  const l = !r.getQueryCache().get(s.queryHash), [a] = v.useState(() => new t(r, s)), u = a.getOptimisticResult(s);
  if (v.useSyncExternalStore(v.useCallback((g) => {
    const S = o ? ef : a.subscribe(Se.batchCalls(g));
    return a.updateResult(), S;
  }, [a, o]), () => a.getCurrentResult(), () => a.getCurrentResult()), v.useEffect(() => {
    a.setOptions(s, { listeners: false });
  }, [s, a]), V0(s, u)) throw tf(s, a, i);
  if (z0({ result: u, errorResetBoundary: i, throwOnError: s.throwOnError, query: r.getQueryCache().get(s.queryHash) })) throw u.error;
  if ((w = (p = r.getDefaultOptions().queries) == null ? void 0 : p._experimental_afterQuery) == null || w.call(p, s, u), s.experimental_prefetchInRender && !Xn && U0(u, o)) {
    const g = l ? tf(s, a, i) : (x = r.getQueryCache().get(s.queryHash)) == null ? void 0 : x.promise;
    g == null || g.catch(ef).finally(() => {
      a.updateResult();
    });
  }
  return s.notifyOnChangeProps ? u : a.trackResult(u);
}
function Cm(e, t) {
  return W0(e, R0);
}
const km = "adminSelectedBrandId", Tm = "adminCachedBrands", B0 = 10 * 60 * 1e3;
function H0() {
  if (typeof window > "u") return null;
  const e = window.sessionStorage.getItem(km), t = e ? Number(e) : null;
  return Number.isFinite(t) ? t : null;
}
function dP(e) {
  typeof window > "u" || window.sessionStorage.setItem(km, String(e));
}
function Q0() {
  if (typeof window > "u") return null;
  const e = window.localStorage.getItem(Tm);
  if (!e) return null;
  try {
    return JSON.parse(e);
  } catch (e2) {
    return null;
  }
}
function fP(e = B0) {
  const t = Q0();
  return !t || Date.now() - t.timestamp > e ? null : t;
}
function pP(e) {
  if (typeof window > "u") return;
  const t = { brands: e, timestamp: Date.now() };
  window.localStorage.setItem(Tm, JSON.stringify(t));
}
function Rm() {
  const e = localStorage.getItem("auth-token") || localStorage.getItem("authToken") || localStorage.getItem("token");
  return e && !localStorage.getItem("auth-token") && localStorage.setItem("auth-token", e), e;
}
function Am(e) {
  if (!e.includes("/api/admin/") || /[\?&]brandId=/.test(e)) return e;
  const t = H0();
  if (!t) return e;
  try {
    const n = new URL(e, window.location.origin);
    return n.searchParams.set("brandId", String(t)), n.pathname + n.search;
  } catch (e2) {
    return e;
  }
}
function Om(e) {
  return __async(this, null, function* () {
    if (!e.ok) {
      const t = (yield e.text()) || e.statusText;
      throw new Error(`${e.status}: ${t}`);
    }
  });
}
function nf(e, t, n) {
  return __async(this, null, function* () {
    const r = {};
    if (n && (r["Content-Type"] = "application/json"), t.includes("/api/admin/")) {
      const s = localStorage.getItem("adminToken");
      s && (r.Authorization = `Bearer ${s}`);
    } else {
      const s = Rm();
      s && (r.Authorization = `Bearer ${s}`);
    }
    const o = Am(t), i = yield fetch(o, { method: e, headers: r, body: n ? JSON.stringify(n) : void 0, credentials: "include" });
    return yield Om(i), i;
  });
}
const q0 = ({ on401: e }) => (_02) => __async(null, [_02], function* ({ queryKey: t }) {
  let n = t[0];
  if (t.length > 1 && typeof t[1] == "object" && t[1] !== null) {
    const s = new URLSearchParams(), l = t[1];
    Object.entries(l).forEach(([a, u]) => {
      u != null && s.append(a, String(u));
    }), s.toString() && (n += `?${s.toString()}`);
  } else t.length > 1 && (n = t.filter((s) => typeof s == "string" || typeof s == "number").join("/"));
  const r = {};
  if (n.includes("/api/admin/")) {
    const s = localStorage.getItem("adminToken");
    s && (r.Authorization = `Bearer ${s}`);
  } else {
    const s = Rm();
    s && (r.Authorization = `Bearer ${s}`);
  }
  const o = Am(n), i = yield fetch(o, { credentials: "include", headers: r });
  return e === "returnNull" && i.status === 401 ? null : (yield Om(i), yield i.json());
}), Nm = new T0({ defaultOptions: { queries: { queryFn: q0({ on401: "throw" }), refetchInterval: false, refetchOnWindowFocus: false, staleTime: 30 * 1e3, gcTime: 5 * 60 * 1e3, placeholderData: (e) => e, retry: (e, t) => {
  var n;
  return (n = t == null ? void 0 : t.message) != null && n.includes("4") ? false : e < 2;
} }, mutations: { retry: (e, t) => {
  var n;
  return (n = t == null ? void 0 : t.message) != null && n.includes("4") ? false : e < 1;
} } } }), G0 = 1, K0 = 1e6;
let jl = 0;
function Y0() {
  return jl = (jl + 1) % Number.MAX_SAFE_INTEGER, jl.toString();
}
const Ll = /* @__PURE__ */ new Map(), rf = (e) => {
  if (Ll.has(e)) return;
  const t = setTimeout(() => {
    Ll.delete(e), Ao({ type: "REMOVE_TOAST", toastId: e });
  }, K0);
  Ll.set(e, t);
}, X0 = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return __spreadProps(__spreadValues({}, e), { toasts: [t.toast, ...e.toasts].slice(0, G0) });
    case "UPDATE_TOAST":
      return __spreadProps(__spreadValues({}, e), { toasts: e.toasts.map((n) => n.id === t.toast.id ? __spreadValues(__spreadValues({}, n), t.toast) : n) });
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? rf(n) : e.toasts.forEach((r) => {
        rf(r.id);
      }), __spreadProps(__spreadValues({}, e), { toasts: e.toasts.map((r) => r.id === n || n === void 0 ? __spreadProps(__spreadValues({}, r), { open: false }) : r) });
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? __spreadProps(__spreadValues({}, e), { toasts: [] }) : __spreadProps(__spreadValues({}, e), { toasts: e.toasts.filter((n) => n.id !== t.toastId) });
  }
}, qi = [];
let Gi = { toasts: [] };
function Ao(e) {
  Gi = X0(Gi, e), qi.forEach((t) => {
    t(Gi);
  });
}
function Z0(_f2) {
  var e = __objRest(_f2, []);
  const t = Y0(), n = (o) => Ao({ type: "UPDATE_TOAST", toast: __spreadProps(__spreadValues({}, o), { id: t }) }), r = () => Ao({ type: "DISMISS_TOAST", toastId: t });
  return Ao({ type: "ADD_TOAST", toast: __spreadProps(__spreadValues({}, e), { id: t, open: true, onOpenChange: (o) => {
    o || r();
  } }) }), { id: t, dismiss: r, update: n };
}
function bm() {
  const [e, t] = v.useState(Gi);
  return v.useEffect(() => (qi.push(t), () => {
    const n = qi.indexOf(t);
    n > -1 && qi.splice(n, 1);
  }), [e]), __spreadProps(__spreadValues({}, e), { toast: Z0, dismiss: (n) => Ao({ type: "DISMISS_TOAST", toastId: n }) });
}
function ge(e, t, { checkForDefaultPrevented: n = true } = {}) {
  return function(o) {
    if (e == null || e(o), n === false || !o.defaultPrevented) return t == null ? void 0 : t(o);
  };
}
function of(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Im(...e) {
  return (t) => {
    let n = false;
    const r = e.map((o) => {
      const i = of(o, t);
      return !n && typeof i == "function" && (n = true), i;
    });
    if (n) return () => {
      for (let o = 0; o < r.length; o++) {
        const i = r[o];
        typeof i == "function" ? i() : of(e[o], null);
      }
    };
  };
}
function yt(...e) {
  return v.useCallback(Im(...e), e);
}
function hP(e, t) {
  const n = v.createContext(t), r = (i) => {
    const _a2 = i, { children: s } = _a2, l = __objRest(_a2, ["children"]), a = v.useMemo(() => l, Object.values(l));
    return h.jsx(n.Provider, { value: a, children: s });
  };
  r.displayName = e + "Provider";
  function o(i) {
    const s = v.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Qs(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = v.createContext(s), a = n.length;
    n = [...n, s];
    const u = (c) => {
      var m;
      const _a2 = c, { scope: p, children: w } = _a2, x = __objRest(_a2, ["scope", "children"]), g = ((m = p == null ? void 0 : p[e]) == null ? void 0 : m[a]) || l, S = v.useMemo(() => x, Object.values(x));
      return h.jsx(g.Provider, { value: S, children: w });
    };
    u.displayName = i + "Provider";
    function d(c, p) {
      var g;
      const w = ((g = p == null ? void 0 : p[e]) == null ? void 0 : g[a]) || l, x = v.useContext(w);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${c}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => v.createContext(s));
    return function(l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return v.useMemo(() => ({ [`__scope${e}`]: __spreadProps(__spreadValues({}, l), { [e]: a }) }), [l, a]);
    };
  };
  return o.scopeName = e, [r, J0(o, ...t)];
}
function J0(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function(i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const c = a(i)[`__scope${u}`];
        return __spreadValues(__spreadValues({}, l), c);
      }, {});
      return v.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Es(e) {
  const t = tx(e), n = v.forwardRef((r, o) => {
    const _a2 = r, { children: i } = _a2, s = __objRest(_a2, ["children"]), l = v.Children.toArray(i), a = l.find(rx);
    if (a) {
      const u = a.props.children, d = l.map((c) => c === a ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : c);
      return h.jsx(t, __spreadProps(__spreadValues({}, s), { ref: o, children: v.isValidElement(u) ? v.cloneElement(u, void 0, d) : null }));
    }
    return h.jsx(t, __spreadProps(__spreadValues({}, s), { ref: o, children: i }));
  });
  return n.displayName = `${e}.Slot`, n;
}
var ex = Es("Slot");
function tx(e) {
  const t = v.forwardRef((n, r) => {
    const _a2 = n, { children: o } = _a2, i = __objRest(_a2, ["children"]);
    if (v.isValidElement(o)) {
      const s = ix(o), l = ox(i, o.props);
      return o.type !== v.Fragment && (l.ref = r ? Im(r, s) : s), v.cloneElement(o, l);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var jm = /* @__PURE__ */ Symbol("radix.slottable");
function nx(e) {
  const t = ({ children: n }) => h.jsx(h.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = jm, t;
}
function rx(e) {
  return v.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === jm;
}
function ox(e, t) {
  const n = __spreadValues({}, t);
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...l) => {
      i(...l), o(...l);
    } : o && (n[r] = o) : r === "style" ? n[r] = __spreadValues(__spreadValues({}, o), i) : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return __spreadValues(__spreadValues({}, e), n);
}
function ix(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function sx(e) {
  const t = e + "CollectionProvider", [n, r] = Qs(t), [o, i] = n(t, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), s = (g) => {
    const { scope: S, children: m } = g, f = Xt.useRef(null), y = Xt.useRef(/* @__PURE__ */ new Map()).current;
    return h.jsx(o, { scope: S, itemMap: y, collectionRef: f, children: m });
  };
  s.displayName = t;
  const l = e + "CollectionSlot", a = Es(l), u = Xt.forwardRef((g, S) => {
    const { scope: m, children: f } = g, y = i(l, m), E = yt(S, y.collectionRef);
    return h.jsx(a, { ref: E, children: f });
  });
  u.displayName = l;
  const d = e + "CollectionItemSlot", c = "data-radix-collection-item", p = Es(d), w = Xt.forwardRef((g, S) => {
    const _a2 = g, { scope: m, children: f } = _a2, y = __objRest(_a2, ["scope", "children"]), E = Xt.useRef(null), P = yt(S, E), k = i(d, m);
    return Xt.useEffect(() => (k.itemMap.set(E, __spreadValues({ ref: E }, y)), () => void k.itemMap.delete(E))), h.jsx(p, { [c]: "", ref: P, children: f });
  });
  w.displayName = d;
  function x(g) {
    const S = i(e + "CollectionConsumer", g);
    return Xt.useCallback(() => {
      const f = S.collectionRef.current;
      if (!f) return [];
      const y = Array.from(f.querySelectorAll(`[${c}]`));
      return Array.from(S.itemMap.values()).sort((k, C) => y.indexOf(k.ref.current) - y.indexOf(C.ref.current));
    }, [S.collectionRef, S.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: w }, x, r];
}
var lx = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"], Ue = lx.reduce((e, t) => {
  const n = Es(`Primitive.${t}`), r = v.forwardRef((o, i) => {
    const _a2 = o, { asChild: s } = _a2, l = __objRest(_a2, ["asChild"]), a = s ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = true), h.jsx(a, __spreadProps(__spreadValues({}, l), { ref: i }));
  });
  return r.displayName = `Primitive.${t}`, __spreadProps(__spreadValues({}, e), { [t]: r });
}, {});
function Lm(e, t) {
  e && li.flushSync(() => e.dispatchEvent(t));
}
function Ot(e) {
  const t = v.useRef(e);
  return v.useEffect(() => {
    t.current = e;
  }), v.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function ax(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e);
  v.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: true }), () => t.removeEventListener("keydown", r, { capture: true });
  }, [n, t]);
}
var ux = "DismissableLayer", Ga = "dismissableLayer.update", cx = "dismissableLayer.pointerDownOutside", dx = "dismissableLayer.focusOutside", sf, Dm = v.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() }), sc = v.forwardRef((e, t) => {
  var _a2;
  const _b = e, { disableOutsidePointerEvents: n = false, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: s, onDismiss: l } = _b, a = __objRest(_b, ["disableOutsidePointerEvents", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss"]), u = v.useContext(Dm), [d, c] = v.useState(null), p = (_a2 = d == null ? void 0 : d.ownerDocument) != null ? _a2 : globalThis == null ? void 0 : globalThis.document, [, w] = v.useState({}), x = yt(t, (C) => c(C)), g = Array.from(u.layers), [S] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), m = g.indexOf(S), f = d ? g.indexOf(d) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, E = f >= m, P = px((C) => {
    const T = C.target, O = [...u.branches].some((N) => N.contains(T));
    !E || O || (o == null || o(C), s == null || s(C), C.defaultPrevented || l == null || l());
  }, p), k = hx((C) => {
    const T = C.target;
    [...u.branches].some((N) => N.contains(T)) || (i == null || i(C), s == null || s(C), C.defaultPrevented || l == null || l());
  }, p);
  return ax((C) => {
    f === u.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && l && (C.preventDefault(), l()));
  }, p), v.useEffect(() => {
    if (d) return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (sf = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), lf(), () => {
      n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = sf);
    };
  }, [d, p, n, u]), v.useEffect(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), lf());
  }, [d, u]), v.useEffect(() => {
    const C = () => w({});
    return document.addEventListener(Ga, C), () => document.removeEventListener(Ga, C);
  }, []), h.jsx(Ue.div, __spreadProps(__spreadValues({}, a), { ref: x, style: __spreadValues({ pointerEvents: y ? E ? "auto" : "none" : void 0 }, e.style), onFocusCapture: ge(e.onFocusCapture, k.onFocusCapture), onBlurCapture: ge(e.onBlurCapture, k.onBlurCapture), onPointerDownCapture: ge(e.onPointerDownCapture, P.onPointerDownCapture) }));
});
sc.displayName = ux;
var fx = "DismissableLayerBranch", Mm = v.forwardRef((e, t) => {
  const n = v.useContext(Dm), r = v.useRef(null), o = yt(t, r);
  return v.useEffect(() => {
    const i = r.current;
    if (i) return n.branches.add(i), () => {
      n.branches.delete(i);
    };
  }, [n.branches]), h.jsx(Ue.div, __spreadProps(__spreadValues({}, e), { ref: o }));
});
Mm.displayName = fx;
function px(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e), r = v.useRef(false), o = v.useRef(() => {
  });
  return v.useEffect(() => {
    const i = (l) => {
      if (l.target && !r.current) {
        let a = function() {
          Fm(cx, n, u, { discrete: true });
        };
        const u = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = a, t.addEventListener("click", o.current, { once: true })) : a();
      } else t.removeEventListener("click", o.current);
      r.current = false;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), { onPointerDownCapture: () => r.current = true };
}
function hx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e), r = v.useRef(false);
  return v.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Fm(dx, n, { originalEvent: i }, { discrete: false });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), { onFocusCapture: () => r.current = true, onBlurCapture: () => r.current = false };
}
function lf() {
  const e = new CustomEvent(Ga);
  document.dispatchEvent(e);
}
function Fm(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: false, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? Lm(o, i) : o.dispatchEvent(i);
}
var mx = sc, gx = Mm, _n = globalThis != null && globalThis.document ? v.useLayoutEffect : () => {
}, yx = "Portal", zm = v.forwardRef((e, t) => {
  var l;
  const _a2 = e, { container: n } = _a2, r = __objRest(_a2, ["container"]), [o, i] = v.useState(false);
  _n(() => i(true), []);
  const s = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return s ? jw.createPortal(h.jsx(Ue.div, __spreadProps(__spreadValues({}, r), { ref: t })), s) : null;
});
zm.displayName = yx;
function vx(e, t) {
  return v.useReducer((n, r) => {
    var _a2;
    return (_a2 = t[n][r]) != null ? _a2 : n;
  }, e);
}
var lc = (e) => {
  const { present: t, children: n } = e, r = wx(t), o = typeof n == "function" ? n({ present: r.isPresent }) : v.Children.only(n), i = yt(r.ref, xx(o));
  return typeof n == "function" || r.isPresent ? v.cloneElement(o, { ref: i }) : null;
};
lc.displayName = "Presence";
function wx(e) {
  const [t, n] = v.useState(), r = v.useRef({}), o = v.useRef(e), i = v.useRef("none"), s = e ? "mounted" : "unmounted", [l, a] = vx(s, { mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" }, unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" }, unmounted: { MOUNT: "mounted" } });
  return v.useEffect(() => {
    const u = Oi(r.current);
    i.current = l === "mounted" ? u : "none";
  }, [l]), _n(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = i.current, w = Oi(u);
      e ? a("MOUNT") : w === "none" || (u == null ? void 0 : u.display) === "none" ? a("UNMOUNT") : a(d && p !== w ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, a]), _n(() => {
    var _a2;
    if (t) {
      let u;
      const d = (_a2 = t.ownerDocument.defaultView) != null ? _a2 : window, c = (w) => {
        const g = Oi(r.current).includes(w.animationName);
        if (w.target === t && g && (a("ANIMATION_END"), !o.current)) {
          const S = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = S);
          });
        }
      }, p = (w) => {
        w.target === t && (i.current = Oi(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else a("ANIMATION_END");
  }, [t, a]), { isPresent: ["mounted", "unmountSuspended"].includes(l), ref: v.useCallback((u) => {
    u && (r.current = getComputedStyle(u)), n(u);
  }, []) };
}
function Oi(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function xx(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function $m({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Sx({ defaultProp: t, onChange: n }), i = e !== void 0, s = i ? e : r, l = Ot(n), a = v.useCallback((u) => {
    if (i) {
      const c = typeof u == "function" ? u(e) : u;
      c !== e && l(c);
    } else o(u);
  }, [i, e, o, l]);
  return [s, a];
}
function Sx({ defaultProp: e, onChange: t }) {
  const n = v.useState(e), [r] = n, o = v.useRef(r), i = Ot(t);
  return v.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
var Ex = "VisuallyHidden", qs = v.forwardRef((e, t) => h.jsx(Ue.span, __spreadProps(__spreadValues({}, e), { ref: t, style: __spreadValues({ position: "absolute", border: 0, width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", wordWrap: "normal" }, e.style) })));
qs.displayName = Ex;
var _x = qs, ac = "ToastProvider", [uc, Px, Cx] = sx("Toast"), [Um, mP] = Qs("Toast", [Cx]), [kx, Gs] = Um(ac), Vm = (e) => {
  const { __scopeToast: t, label: n = "Notification", duration: r = 5e3, swipeDirection: o = "right", swipeThreshold: i = 50, children: s } = e, [l, a] = v.useState(null), [u, d] = v.useState(0), c = v.useRef(false), p = v.useRef(false);
  return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${ac}\`. Expected non-empty \`string\`.`), h.jsx(uc.Provider, { scope: t, children: h.jsx(kx, { scope: t, label: n, duration: r, swipeDirection: o, swipeThreshold: i, toastCount: u, viewport: l, onViewportChange: a, onToastAdd: v.useCallback(() => d((w) => w + 1), []), onToastRemove: v.useCallback(() => d((w) => w - 1), []), isFocusedToastEscapeKeyDownRef: c, isClosePausedRef: p, children: s }) });
};
Vm.displayName = ac;
var Wm = "ToastViewport", Tx = ["F8"], Ka = "toast.viewportPause", Ya = "toast.viewportResume", Bm = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n, hotkey: r = Tx, label: o = "Notifications ({hotkey})" } = _a2, i = __objRest(_a2, ["__scopeToast", "hotkey", "label"]), s = Gs(Wm, n), l = Px(n), a = v.useRef(null), u = v.useRef(null), d = v.useRef(null), c = v.useRef(null), p = yt(t, c, s.onViewportChange), w = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), x = s.toastCount > 0;
  v.useEffect(() => {
    const S = (m) => {
      var y;
      r.length !== 0 && r.every((E) => m[E] || m.code === E) && ((y = c.current) == null || y.focus());
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [r]), v.useEffect(() => {
    const S = a.current, m = c.current;
    if (x && S && m) {
      const f = () => {
        if (!s.isClosePausedRef.current) {
          const k = new CustomEvent(Ka);
          m.dispatchEvent(k), s.isClosePausedRef.current = true;
        }
      }, y = () => {
        if (s.isClosePausedRef.current) {
          const k = new CustomEvent(Ya);
          m.dispatchEvent(k), s.isClosePausedRef.current = false;
        }
      }, E = (k) => {
        !S.contains(k.relatedTarget) && y();
      }, P = () => {
        S.contains(document.activeElement) || y();
      };
      return S.addEventListener("focusin", f), S.addEventListener("focusout", E), S.addEventListener("pointermove", f), S.addEventListener("pointerleave", P), window.addEventListener("blur", f), window.addEventListener("focus", y), () => {
        S.removeEventListener("focusin", f), S.removeEventListener("focusout", E), S.removeEventListener("pointermove", f), S.removeEventListener("pointerleave", P), window.removeEventListener("blur", f), window.removeEventListener("focus", y);
      };
    }
  }, [x, s.isClosePausedRef]);
  const g = v.useCallback(({ tabbingDirection: S }) => {
    const f = l().map((y) => {
      const E = y.ref.current, P = [E, ...$x(E)];
      return S === "forwards" ? P : P.reverse();
    });
    return (S === "forwards" ? f.reverse() : f).flat();
  }, [l]);
  return v.useEffect(() => {
    const S = c.current;
    if (S) {
      const m = (f) => {
        var P, k, C;
        const y = f.altKey || f.ctrlKey || f.metaKey;
        if (f.key === "Tab" && !y) {
          const T = document.activeElement, O = f.shiftKey;
          if (f.target === S && O) {
            (P = u.current) == null || P.focus();
            return;
          }
          const D = g({ tabbingDirection: O ? "backwards" : "forwards" }), Y = D.findIndex((j) => j === T);
          Dl(D.slice(Y + 1)) ? f.preventDefault() : O ? (k = u.current) == null || k.focus() : (C = d.current) == null || C.focus();
        }
      };
      return S.addEventListener("keydown", m), () => S.removeEventListener("keydown", m);
    }
  }, [l, g]), h.jsxs(gx, { ref: a, role: "region", "aria-label": o.replace("{hotkey}", w), tabIndex: -1, style: { pointerEvents: x ? void 0 : "none" }, children: [x && h.jsx(Xa, { ref: u, onFocusFromOutsideViewport: () => {
    const S = g({ tabbingDirection: "forwards" });
    Dl(S);
  } }), h.jsx(uc.Slot, { scope: n, children: h.jsx(Ue.ol, __spreadProps(__spreadValues({ tabIndex: -1 }, i), { ref: p })) }), x && h.jsx(Xa, { ref: d, onFocusFromOutsideViewport: () => {
    const S = g({ tabbingDirection: "backwards" });
    Dl(S);
  } })] });
});
Bm.displayName = Wm;
var Hm = "ToastFocusProxy", Xa = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n, onFocusFromOutsideViewport: r } = _a2, o = __objRest(_a2, ["__scopeToast", "onFocusFromOutsideViewport"]), i = Gs(Hm, n);
  return h.jsx(qs, __spreadProps(__spreadValues({ "aria-hidden": true, tabIndex: 0 }, o), { ref: t, style: { position: "fixed" }, onFocus: (s) => {
    var u;
    const l = s.relatedTarget;
    !((u = i.viewport) != null && u.contains(l)) && r();
  } }));
});
Xa.displayName = Hm;
var Ks = "Toast", Rx = "toast.swipeStart", Ax = "toast.swipeMove", Ox = "toast.swipeCancel", Nx = "toast.swipeEnd", Qm = v.forwardRef((e, t) => {
  const _a2 = e, { forceMount: n, open: r, defaultOpen: o, onOpenChange: i } = _a2, s = __objRest(_a2, ["forceMount", "open", "defaultOpen", "onOpenChange"]), [l = true, a] = $m({ prop: r, defaultProp: o, onChange: i });
  return h.jsx(lc, { present: n || l, children: h.jsx(jx, __spreadProps(__spreadValues({ open: l }, s), { ref: t, onClose: () => a(false), onPause: Ot(e.onPause), onResume: Ot(e.onResume), onSwipeStart: ge(e.onSwipeStart, (u) => {
    u.currentTarget.setAttribute("data-swipe", "start");
  }), onSwipeMove: ge(e.onSwipeMove, (u) => {
    const { x: d, y: c } = u.detail.delta;
    u.currentTarget.setAttribute("data-swipe", "move"), u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${c}px`);
  }), onSwipeCancel: ge(e.onSwipeCancel, (u) => {
    u.currentTarget.setAttribute("data-swipe", "cancel"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
  }), onSwipeEnd: ge(e.onSwipeEnd, (u) => {
    const { x: d, y: c } = u.detail.delta;
    u.currentTarget.setAttribute("data-swipe", "end"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${d}px`), u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${c}px`), a(false);
  }) })) });
});
Qm.displayName = Ks;
var [bx, Ix] = Um(Ks, { onClose() {
} }), jx = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n, type: r = "foreground", duration: o, open: i, onClose: s, onEscapeKeyDown: l, onPause: a, onResume: u, onSwipeStart: d, onSwipeMove: c, onSwipeCancel: p, onSwipeEnd: w } = _a2, x = __objRest(_a2, ["__scopeToast", "type", "duration", "open", "onClose", "onEscapeKeyDown", "onPause", "onResume", "onSwipeStart", "onSwipeMove", "onSwipeCancel", "onSwipeEnd"]), g = Gs(Ks, n), [S, m] = v.useState(null), f = yt(t, (j) => m(j)), y = v.useRef(null), E = v.useRef(null), P = o || g.duration, k = v.useRef(0), C = v.useRef(P), T = v.useRef(0), { onToastAdd: O, onToastRemove: N } = g, V = Ot(() => {
    var J;
    (S == null ? void 0 : S.contains(document.activeElement)) && ((J = g.viewport) == null || J.focus()), s();
  }), D = v.useCallback((j) => {
    !j || j === 1 / 0 || (window.clearTimeout(T.current), k.current = (/* @__PURE__ */ new Date()).getTime(), T.current = window.setTimeout(V, j));
  }, [V]);
  v.useEffect(() => {
    const j = g.viewport;
    if (j) {
      const J = () => {
        D(C.current), u == null || u();
      }, H = () => {
        const Z = (/* @__PURE__ */ new Date()).getTime() - k.current;
        C.current = C.current - Z, window.clearTimeout(T.current), a == null || a();
      };
      return j.addEventListener(Ka, H), j.addEventListener(Ya, J), () => {
        j.removeEventListener(Ka, H), j.removeEventListener(Ya, J);
      };
    }
  }, [g.viewport, P, a, u, D]), v.useEffect(() => {
    i && !g.isClosePausedRef.current && D(P);
  }, [i, P, g.isClosePausedRef, D]), v.useEffect(() => (O(), () => N()), [O, N]);
  const Y = v.useMemo(() => S ? Jm(S) : null, [S]);
  return g.viewport ? h.jsxs(h.Fragment, { children: [Y && h.jsx(Lx, { __scopeToast: n, role: "status", "aria-live": r === "foreground" ? "assertive" : "polite", "aria-atomic": true, children: Y }), h.jsx(bx, { scope: n, onClose: V, children: li.createPortal(h.jsx(uc.ItemSlot, { scope: n, children: h.jsx(mx, { asChild: true, onEscapeKeyDown: ge(l, () => {
    g.isFocusedToastEscapeKeyDownRef.current || V(), g.isFocusedToastEscapeKeyDownRef.current = false;
  }), children: h.jsx(Ue.li, __spreadProps(__spreadValues({ role: "status", "aria-live": "off", "aria-atomic": true, tabIndex: 0, "data-state": i ? "open" : "closed", "data-swipe-direction": g.swipeDirection }, x), { ref: f, style: __spreadValues({ userSelect: "none", touchAction: "none" }, e.style), onKeyDown: ge(e.onKeyDown, (j) => {
    j.key === "Escape" && (l == null || l(j.nativeEvent), j.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = true, V()));
  }), onPointerDown: ge(e.onPointerDown, (j) => {
    j.button === 0 && (y.current = { x: j.clientX, y: j.clientY });
  }), onPointerMove: ge(e.onPointerMove, (j) => {
    if (!y.current) return;
    const J = j.clientX - y.current.x, H = j.clientY - y.current.y, Z = !!E.current, R = ["left", "right"].includes(g.swipeDirection), b = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, F = R ? b(0, J) : 0, B = R ? 0 : b(0, H), se = j.pointerType === "touch" ? 10 : 2, lt = { x: F, y: B }, Ze = { originalEvent: j, delta: lt };
    Z ? (E.current = lt, Ni(Ax, c, Ze, { discrete: false })) : af(lt, g.swipeDirection, se) ? (E.current = lt, Ni(Rx, d, Ze, { discrete: false }), j.target.setPointerCapture(j.pointerId)) : (Math.abs(J) > se || Math.abs(H) > se) && (y.current = null);
  }), onPointerUp: ge(e.onPointerUp, (j) => {
    const J = E.current, H = j.target;
    if (H.hasPointerCapture(j.pointerId) && H.releasePointerCapture(j.pointerId), E.current = null, y.current = null, J) {
      const Z = j.currentTarget, R = { originalEvent: j, delta: J };
      af(J, g.swipeDirection, g.swipeThreshold) ? Ni(Nx, w, R, { discrete: true }) : Ni(Ox, p, R, { discrete: true }), Z.addEventListener("click", (b) => b.preventDefault(), { once: true });
    }
  }) })) }) }), g.viewport) })] }) : null;
}), Lx = (e) => {
  const _a2 = e, { __scopeToast: t, children: n } = _a2, r = __objRest(_a2, ["__scopeToast", "children"]), o = Gs(Ks, t), [i, s] = v.useState(false), [l, a] = v.useState(false);
  return Fx(() => s(true)), v.useEffect(() => {
    const u = window.setTimeout(() => a(true), 1e3);
    return () => window.clearTimeout(u);
  }, []), l ? null : h.jsx(zm, { asChild: true, children: h.jsx(qs, __spreadProps(__spreadValues({}, r), { children: i && h.jsxs(h.Fragment, { children: [o.label, " ", n] }) })) });
}, Dx = "ToastTitle", qm = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n } = _a2, r = __objRest(_a2, ["__scopeToast"]);
  return h.jsx(Ue.div, __spreadProps(__spreadValues({}, r), { ref: t }));
});
qm.displayName = Dx;
var Mx = "ToastDescription", Gm = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n } = _a2, r = __objRest(_a2, ["__scopeToast"]);
  return h.jsx(Ue.div, __spreadProps(__spreadValues({}, r), { ref: t }));
});
Gm.displayName = Mx;
var Km = "ToastAction", Ym = v.forwardRef((e, t) => {
  const _a2 = e, { altText: n } = _a2, r = __objRest(_a2, ["altText"]);
  return n.trim() ? h.jsx(Zm, { altText: n, asChild: true, children: h.jsx(cc, __spreadProps(__spreadValues({}, r), { ref: t })) }) : (console.error(`Invalid prop \`altText\` supplied to \`${Km}\`. Expected non-empty \`string\`.`), null);
});
Ym.displayName = Km;
var Xm = "ToastClose", cc = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n } = _a2, r = __objRest(_a2, ["__scopeToast"]), o = Ix(Xm, n);
  return h.jsx(Zm, { asChild: true, children: h.jsx(Ue.button, __spreadProps(__spreadValues({ type: "button" }, r), { ref: t, onClick: ge(e.onClick, o.onClose) })) });
});
cc.displayName = Xm;
var Zm = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeToast: n, altText: r } = _a2, o = __objRest(_a2, ["__scopeToast", "altText"]);
  return h.jsx(Ue.div, __spreadProps(__spreadValues({ "data-radix-toast-announce-exclude": "", "data-radix-toast-announce-alt": r || void 0 }, o), { ref: t }));
});
function Jm(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), zx(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", i = r.dataset.radixToastAnnounceExclude === "";
      if (!o) if (i) {
        const s = r.dataset.radixToastAnnounceAlt;
        s && t.push(s);
      } else t.push(...Jm(r));
    }
  }), t;
}
function Ni(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: true, cancelable: true, detail: n });
  t && o.addEventListener(e, t, { once: true }), r ? Lm(o, i) : o.dispatchEvent(i);
}
var af = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function Fx(e = () => {
}) {
  const t = Ot(e);
  _n(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function zx(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function $x(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (r) => {
    const o = r.tagName === "INPUT" && r.type === "hidden";
    return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Dl(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? true : (n.focus(), document.activeElement !== t));
}
var Ux = Vm, eg = Bm, tg = Qm, ng = qm, rg = Gm, og = Ym, ig = cc;
function sg(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = sg(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function lg() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = sg(e)) && (r && (r += " "), r += t);
  return r;
}
const uf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, cf = lg, ag = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return cf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, s = Object.keys(o).map((u) => {
    const d = n == null ? void 0 : n[u], c = i == null ? void 0 : i[u];
    if (d === null) return null;
    const p = uf(d) || uf(c);
    return o[u][p];
  }), l = n && Object.entries(n).reduce((u, d) => {
    let [c, p] = d;
    return p === void 0 || (u[c] = p), u;
  }, {}), a = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let _a2 = d, { class: c, className: p } = _a2, w = __objRest(_a2, ["class", "className"]);
    return Object.entries(w).every((x) => {
      let [g, S] = x;
      return Array.isArray(S) ? S.includes(__spreadValues(__spreadValues({}, i), l)[g]) : __spreadValues(__spreadValues({}, i), l)[g] === S;
    }) ? [...u, c, p] : u;
  }, []);
  return cf(e, s, a, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Vx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ug = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Wx = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Bx = v.forwardRef((_g2, a) => {
  var _h2 = _g2, { color: e = "currentColor", size: t = 24, strokeWidth: n = 2, absoluteStrokeWidth: r, className: o = "", children: i, iconNode: s } = _h2, l = __objRest(_h2, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children", "iconNode"]);
  return v.createElement("svg", __spreadValues(__spreadProps(__spreadValues({ ref: a }, Wx), { width: t, height: t, stroke: e, strokeWidth: r ? Number(n) * 24 / Number(t) : n, className: ug("lucide", o) }), l), [...s.map(([u, d]) => v.createElement(u, d)), ...Array.isArray(i) ? i : [i]]);
});
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const tr = (e, t) => {
  const n = v.forwardRef((_a2, i) => {
    var _b = _a2, { className: r } = _b, o = __objRest(_b, ["className"]);
    return v.createElement(Bx, __spreadValues({ ref: i, iconNode: t, className: ug(`lucide-${Vx(e)}`, r) }, o));
  });
  return n.displayName = `${e}`, n;
};
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const df = tr("Bell", [["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }], ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Hx = tr("CircleAlert", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Qx = tr("CircleCheckBig", [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const qx = tr("LoaderCircle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Gx = tr("WifiOff", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }], ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }], ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }], ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }], ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Kx = tr("Wifi", [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const cg = tr("X", [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]]), dc = "-", Yx = (e) => {
  const t = Zx(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  return { getClassGroupId: (s) => {
    const l = s.split(dc);
    return l[0] === "" && l.length !== 1 && l.shift(), dg(l, t) || Xx(s);
  }, getConflictingClassGroupIds: (s, l) => {
    const a = n[s] || [];
    return l && r[s] ? [...a, ...r[s]] : a;
  } };
}, dg = (e, t) => {
  var s;
  if (e.length === 0) return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? dg(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(dc);
  return (s = t.validators.find(({ validator: l }) => l(i))) == null ? void 0 : s.classGroupId;
}, ff = /^\[(.+)\]$/, Xx = (e) => {
  if (ff.test(e)) {
    const t = ff.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}, Zx = (e) => {
  const { theme: t, prefix: n } = e, r = { nextPart: /* @__PURE__ */ new Map(), validators: [] };
  return e1(Object.entries(e.classGroups), n).forEach(([i, s]) => {
    Za(s, r, i, t);
  }), r;
}, Za = (e, t, n, r) => {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : pf(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (Jx(o)) {
        Za(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, s]) => {
      Za(s, pf(t, i), n, r);
    });
  });
}, pf = (e, t) => {
  let n = e;
  return t.split(dc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, { nextPart: /* @__PURE__ */ new Map(), validators: [] }), n = n.nextPart.get(r);
  }), n;
}, Jx = (e) => e.isThemeGetter, e1 = (e, t) => t ? e.map(([n, r]) => {
  const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([s, l]) => [t + s, l])) : i);
  return [n, o];
}) : e, t1 = (e) => {
  if (e < 1) return { get: () => {
  }, set: () => {
  } };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const o = (i, s) => {
    n.set(i, s), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return { get(i) {
    let s = n.get(i);
    if (s !== void 0) return s;
    if ((s = r.get(i)) !== void 0) return o(i, s), s;
  }, set(i, s) {
    n.has(i) ? n.set(i, s) : o(i, s);
  } };
}, fg = "!", n1 = (e) => {
  const { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, o = t[0], i = t.length, s = (l) => {
    const a = [];
    let u = 0, d = 0, c;
    for (let S = 0; S < l.length; S++) {
      let m = l[S];
      if (u === 0) {
        if (m === o && (r || l.slice(S, S + i) === t)) {
          a.push(l.slice(d, S)), d = S + i;
          continue;
        }
        if (m === "/") {
          c = S;
          continue;
        }
      }
      m === "[" ? u++ : m === "]" && u--;
    }
    const p = a.length === 0 ? l : l.substring(d), w = p.startsWith(fg), x = w ? p.substring(1) : p, g = c && c > d ? c - d : void 0;
    return { modifiers: a, hasImportantModifier: w, baseClassName: x, maybePostfixModifierPosition: g };
  };
  return n ? (l) => n({ className: l, parseClassName: s }) : s;
}, r1 = (e) => {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}, o1 = (e) => __spreadValues({ cache: t1(e.cacheSize), parseClassName: n1(e) }, Yx(e)), i1 = /\s+/, s1 = (e, t) => {
  const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t, i = [], s = e.trim().split(i1);
  let l = "";
  for (let a = s.length - 1; a >= 0; a -= 1) {
    const u = s[a], { modifiers: d, hasImportantModifier: c, baseClassName: p, maybePostfixModifierPosition: w } = n(u);
    let x = !!w, g = r(x ? p.substring(0, w) : p);
    if (!g) {
      if (!x) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (g = r(p), !g) {
        l = u + (l.length > 0 ? " " + l : l);
        continue;
      }
      x = false;
    }
    const S = r1(d).join(":"), m = c ? S + fg : S, f = m + g;
    if (i.includes(f)) continue;
    i.push(f);
    const y = o(g, x);
    for (let E = 0; E < y.length; ++E) {
      const P = y[E];
      i.push(m + P);
    }
    l = u + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function l1() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; ) (t = arguments[e++]) && (n = pg(t)) && (r && (r += " "), r += n);
  return r;
}
const pg = (e) => {
  if (typeof e == "string") return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++) e[r] && (t = pg(e[r])) && (n && (n += " "), n += t);
  return n;
};
function a1(e, ...t) {
  let n, r, o, i = s;
  function s(a) {
    const u = t.reduce((d, c) => c(d), e());
    return n = o1(u), r = n.cache.get, o = n.cache.set, i = l, l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = s1(a, n);
    return o(a, d), d;
  }
  return function() {
    return i(l1.apply(null, arguments));
  };
}
const re = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = true, t;
}, hg = /^\[(?:([a-z-]+):)?(.+)\]$/i, u1 = /^\d+\/\d+$/, c1 = /* @__PURE__ */ new Set(["px", "full", "screen"]), d1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, f1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, p1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, h1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, m1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, jt = (e) => _r(e) || c1.has(e) || u1.test(e), Kt = (e) => Jr(e, "length", _1), _r = (e) => !!e && !Number.isNaN(Number(e)), Ml = (e) => Jr(e, "number", _r), po = (e) => !!e && Number.isInteger(Number(e)), g1 = (e) => e.endsWith("%") && _r(e.slice(0, -1)), W = (e) => hg.test(e), Yt = (e) => d1.test(e), y1 = /* @__PURE__ */ new Set(["length", "size", "percentage"]), v1 = (e) => Jr(e, y1, mg), w1 = (e) => Jr(e, "position", mg), x1 = /* @__PURE__ */ new Set(["image", "url"]), S1 = (e) => Jr(e, x1, C1), E1 = (e) => Jr(e, "", P1), ho = () => true, Jr = (e, t, n) => {
  const r = hg.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : false;
}, _1 = (e) => f1.test(e) && !p1.test(e), mg = () => false, P1 = (e) => h1.test(e), C1 = (e) => m1.test(e), k1 = () => {
  const e = re("colors"), t = re("spacing"), n = re("blur"), r = re("brightness"), o = re("borderColor"), i = re("borderRadius"), s = re("borderSpacing"), l = re("borderWidth"), a = re("contrast"), u = re("grayscale"), d = re("hueRotate"), c = re("invert"), p = re("gap"), w = re("gradientColorStops"), x = re("gradientColorStopPositions"), g = re("inset"), S = re("margin"), m = re("opacity"), f = re("padding"), y = re("saturate"), E = re("scale"), P = re("sepia"), k = re("skew"), C = re("space"), T = re("translate"), O = () => ["auto", "contain", "none"], N = () => ["auto", "hidden", "clip", "visible", "scroll"], V = () => ["auto", W, t], D = () => [W, t], Y = () => ["", jt, Kt], j = () => ["auto", _r, W], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], R = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], b = () => ["", "0", W], F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [_r, W];
  return { cacheSize: 500, separator: ":", theme: { colors: [ho], spacing: [jt, Kt], blur: ["none", "", Yt, W], brightness: B(), borderColor: [e], borderRadius: ["none", "", "full", Yt, W], borderSpacing: D(), borderWidth: Y(), contrast: B(), grayscale: b(), hueRotate: B(), invert: b(), gap: D(), gradientColorStops: [e], gradientColorStopPositions: [g1, Kt], inset: V(), margin: V(), opacity: B(), padding: D(), saturate: B(), scale: B(), sepia: b(), skew: B(), space: D(), translate: D() }, classGroups: { aspect: [{ aspect: ["auto", "square", "video", W] }], container: ["container"], columns: [{ columns: [Yt] }], "break-after": [{ "break-after": F() }], "break-before": [{ "break-before": F() }], "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }], "box-decoration": [{ "box-decoration": ["slice", "clone"] }], box: [{ box: ["border", "content"] }], display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"], float: [{ float: ["right", "left", "none", "start", "end"] }], clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }], isolation: ["isolate", "isolation-auto"], "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }], "object-position": [{ object: [...J(), W] }], overflow: [{ overflow: N() }], "overflow-x": [{ "overflow-x": N() }], "overflow-y": [{ "overflow-y": N() }], overscroll: [{ overscroll: O() }], "overscroll-x": [{ "overscroll-x": O() }], "overscroll-y": [{ "overscroll-y": O() }], position: ["static", "fixed", "absolute", "relative", "sticky"], inset: [{ inset: [g] }], "inset-x": [{ "inset-x": [g] }], "inset-y": [{ "inset-y": [g] }], start: [{ start: [g] }], end: [{ end: [g] }], top: [{ top: [g] }], right: [{ right: [g] }], bottom: [{ bottom: [g] }], left: [{ left: [g] }], visibility: ["visible", "invisible", "collapse"], z: [{ z: ["auto", po, W] }], basis: [{ basis: V() }], "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }], "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }], flex: [{ flex: ["1", "auto", "initial", "none", W] }], grow: [{ grow: b() }], shrink: [{ shrink: b() }], order: [{ order: ["first", "last", "none", po, W] }], "grid-cols": [{ "grid-cols": [ho] }], "col-start-end": [{ col: ["auto", { span: ["full", po, W] }, W] }], "col-start": [{ "col-start": j() }], "col-end": [{ "col-end": j() }], "grid-rows": [{ "grid-rows": [ho] }], "row-start-end": [{ row: ["auto", { span: [po, W] }, W] }], "row-start": [{ "row-start": j() }], "row-end": [{ "row-end": j() }], "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }], "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", W] }], "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", W] }], gap: [{ gap: [p] }], "gap-x": [{ "gap-x": [p] }], "gap-y": [{ "gap-y": [p] }], "justify-content": [{ justify: ["normal", ...R()] }], "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }], "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }], "align-content": [{ content: ["normal", ...R(), "baseline"] }], "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }], "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }], "place-content": [{ "place-content": [...R(), "baseline"] }], "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }], "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }], p: [{ p: [f] }], px: [{ px: [f] }], py: [{ py: [f] }], ps: [{ ps: [f] }], pe: [{ pe: [f] }], pt: [{ pt: [f] }], pr: [{ pr: [f] }], pb: [{ pb: [f] }], pl: [{ pl: [f] }], m: [{ m: [S] }], mx: [{ mx: [S] }], my: [{ my: [S] }], ms: [{ ms: [S] }], me: [{ me: [S] }], mt: [{ mt: [S] }], mr: [{ mr: [S] }], mb: [{ mb: [S] }], ml: [{ ml: [S] }], "space-x": [{ "space-x": [C] }], "space-x-reverse": ["space-x-reverse"], "space-y": [{ "space-y": [C] }], "space-y-reverse": ["space-y-reverse"], w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", W, t] }], "min-w": [{ "min-w": [W, t, "min", "max", "fit"] }], "max-w": [{ "max-w": [W, t, "none", "full", "min", "max", "fit", "prose", { screen: [Yt] }, Yt] }], h: [{ h: [W, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }], "min-h": [{ "min-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], "max-h": [{ "max-h": [W, t, "min", "max", "fit", "svh", "lvh", "dvh"] }], size: [{ size: [W, t, "auto", "min", "max", "fit"] }], "font-size": [{ text: ["base", Yt, Kt] }], "font-smoothing": ["antialiased", "subpixel-antialiased"], "font-style": ["italic", "not-italic"], "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ml] }], "font-family": [{ font: [ho] }], "fvn-normal": ["normal-nums"], "fvn-ordinal": ["ordinal"], "fvn-slashed-zero": ["slashed-zero"], "fvn-figure": ["lining-nums", "oldstyle-nums"], "fvn-spacing": ["proportional-nums", "tabular-nums"], "fvn-fraction": ["diagonal-fractions", "stacked-fractions"], tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", W] }], "line-clamp": [{ "line-clamp": ["none", _r, Ml] }], leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", jt, W] }], "list-image": [{ "list-image": ["none", W] }], "list-style-type": [{ list: ["none", "disc", "decimal", W] }], "list-style-position": [{ list: ["inside", "outside"] }], "placeholder-color": [{ placeholder: [e] }], "placeholder-opacity": [{ "placeholder-opacity": [m] }], "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }], "text-color": [{ text: [e] }], "text-opacity": [{ "text-opacity": [m] }], "text-decoration": ["underline", "overline", "line-through", "no-underline"], "text-decoration-style": [{ decoration: [...H(), "wavy"] }], "text-decoration-thickness": [{ decoration: ["auto", "from-font", jt, Kt] }], "underline-offset": [{ "underline-offset": ["auto", jt, W] }], "text-decoration-color": [{ decoration: [e] }], "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"], "text-overflow": ["truncate", "text-ellipsis", "text-clip"], "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }], indent: [{ indent: D() }], "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W] }], whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }], break: [{ break: ["normal", "words", "all", "keep"] }], hyphens: [{ hyphens: ["none", "manual", "auto"] }], content: [{ content: ["none", W] }], "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }], "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }], "bg-opacity": [{ "bg-opacity": [m] }], "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }], "bg-position": [{ bg: [...J(), w1] }], "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }], "bg-size": [{ bg: ["auto", "cover", "contain", v1] }], "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, S1] }], "bg-color": [{ bg: [e] }], "gradient-from-pos": [{ from: [x] }], "gradient-via-pos": [{ via: [x] }], "gradient-to-pos": [{ to: [x] }], "gradient-from": [{ from: [w] }], "gradient-via": [{ via: [w] }], "gradient-to": [{ to: [w] }], rounded: [{ rounded: [i] }], "rounded-s": [{ "rounded-s": [i] }], "rounded-e": [{ "rounded-e": [i] }], "rounded-t": [{ "rounded-t": [i] }], "rounded-r": [{ "rounded-r": [i] }], "rounded-b": [{ "rounded-b": [i] }], "rounded-l": [{ "rounded-l": [i] }], "rounded-ss": [{ "rounded-ss": [i] }], "rounded-se": [{ "rounded-se": [i] }], "rounded-ee": [{ "rounded-ee": [i] }], "rounded-es": [{ "rounded-es": [i] }], "rounded-tl": [{ "rounded-tl": [i] }], "rounded-tr": [{ "rounded-tr": [i] }], "rounded-br": [{ "rounded-br": [i] }], "rounded-bl": [{ "rounded-bl": [i] }], "border-w": [{ border: [l] }], "border-w-x": [{ "border-x": [l] }], "border-w-y": [{ "border-y": [l] }], "border-w-s": [{ "border-s": [l] }], "border-w-e": [{ "border-e": [l] }], "border-w-t": [{ "border-t": [l] }], "border-w-r": [{ "border-r": [l] }], "border-w-b": [{ "border-b": [l] }], "border-w-l": [{ "border-l": [l] }], "border-opacity": [{ "border-opacity": [m] }], "border-style": [{ border: [...H(), "hidden"] }], "divide-x": [{ "divide-x": [l] }], "divide-x-reverse": ["divide-x-reverse"], "divide-y": [{ "divide-y": [l] }], "divide-y-reverse": ["divide-y-reverse"], "divide-opacity": [{ "divide-opacity": [m] }], "divide-style": [{ divide: H() }], "border-color": [{ border: [o] }], "border-color-x": [{ "border-x": [o] }], "border-color-y": [{ "border-y": [o] }], "border-color-s": [{ "border-s": [o] }], "border-color-e": [{ "border-e": [o] }], "border-color-t": [{ "border-t": [o] }], "border-color-r": [{ "border-r": [o] }], "border-color-b": [{ "border-b": [o] }], "border-color-l": [{ "border-l": [o] }], "divide-color": [{ divide: [o] }], "outline-style": [{ outline: ["", ...H()] }], "outline-offset": [{ "outline-offset": [jt, W] }], "outline-w": [{ outline: [jt, Kt] }], "outline-color": [{ outline: [e] }], "ring-w": [{ ring: Y() }], "ring-w-inset": ["ring-inset"], "ring-color": [{ ring: [e] }], "ring-opacity": [{ "ring-opacity": [m] }], "ring-offset-w": [{ "ring-offset": [jt, Kt] }], "ring-offset-color": [{ "ring-offset": [e] }], shadow: [{ shadow: ["", "inner", "none", Yt, E1] }], "shadow-color": [{ shadow: [ho] }], opacity: [{ opacity: [m] }], "mix-blend": [{ "mix-blend": [...Z(), "plus-lighter", "plus-darker"] }], "bg-blend": [{ "bg-blend": Z() }], filter: [{ filter: ["", "none"] }], blur: [{ blur: [n] }], brightness: [{ brightness: [r] }], contrast: [{ contrast: [a] }], "drop-shadow": [{ "drop-shadow": ["", "none", Yt, W] }], grayscale: [{ grayscale: [u] }], "hue-rotate": [{ "hue-rotate": [d] }], invert: [{ invert: [c] }], saturate: [{ saturate: [y] }], sepia: [{ sepia: [P] }], "backdrop-filter": [{ "backdrop-filter": ["", "none"] }], "backdrop-blur": [{ "backdrop-blur": [n] }], "backdrop-brightness": [{ "backdrop-brightness": [r] }], "backdrop-contrast": [{ "backdrop-contrast": [a] }], "backdrop-grayscale": [{ "backdrop-grayscale": [u] }], "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }], "backdrop-invert": [{ "backdrop-invert": [c] }], "backdrop-opacity": [{ "backdrop-opacity": [m] }], "backdrop-saturate": [{ "backdrop-saturate": [y] }], "backdrop-sepia": [{ "backdrop-sepia": [P] }], "border-collapse": [{ border: ["collapse", "separate"] }], "border-spacing": [{ "border-spacing": [s] }], "border-spacing-x": [{ "border-spacing-x": [s] }], "border-spacing-y": [{ "border-spacing-y": [s] }], "table-layout": [{ table: ["auto", "fixed"] }], caption: [{ caption: ["top", "bottom"] }], transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", W] }], duration: [{ duration: B() }], ease: [{ ease: ["linear", "in", "out", "in-out", W] }], delay: [{ delay: B() }], animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", W] }], transform: [{ transform: ["", "gpu", "none"] }], scale: [{ scale: [E] }], "scale-x": [{ "scale-x": [E] }], "scale-y": [{ "scale-y": [E] }], rotate: [{ rotate: [po, W] }], "translate-x": [{ "translate-x": [T] }], "translate-y": [{ "translate-y": [T] }], "skew-x": [{ "skew-x": [k] }], "skew-y": [{ "skew-y": [k] }], "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", W] }], accent: [{ accent: ["auto", e] }], appearance: [{ appearance: ["none", "auto"] }], cursor: [{ cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W] }], "caret-color": [{ caret: [e] }], "pointer-events": [{ "pointer-events": ["none", "auto"] }], resize: [{ resize: ["none", "y", "x", ""] }], "scroll-behavior": [{ scroll: ["auto", "smooth"] }], "scroll-m": [{ "scroll-m": D() }], "scroll-mx": [{ "scroll-mx": D() }], "scroll-my": [{ "scroll-my": D() }], "scroll-ms": [{ "scroll-ms": D() }], "scroll-me": [{ "scroll-me": D() }], "scroll-mt": [{ "scroll-mt": D() }], "scroll-mr": [{ "scroll-mr": D() }], "scroll-mb": [{ "scroll-mb": D() }], "scroll-ml": [{ "scroll-ml": D() }], "scroll-p": [{ "scroll-p": D() }], "scroll-px": [{ "scroll-px": D() }], "scroll-py": [{ "scroll-py": D() }], "scroll-ps": [{ "scroll-ps": D() }], "scroll-pe": [{ "scroll-pe": D() }], "scroll-pt": [{ "scroll-pt": D() }], "scroll-pr": [{ "scroll-pr": D() }], "scroll-pb": [{ "scroll-pb": D() }], "scroll-pl": [{ "scroll-pl": D() }], "snap-align": [{ snap: ["start", "end", "center", "align-none"] }], "snap-stop": [{ snap: ["normal", "always"] }], "snap-type": [{ snap: ["none", "x", "y", "both"] }], "snap-strictness": [{ snap: ["mandatory", "proximity"] }], touch: [{ touch: ["auto", "none", "manipulation"] }], "touch-x": [{ "touch-pan": ["x", "left", "right"] }], "touch-y": [{ "touch-pan": ["y", "up", "down"] }], "touch-pz": ["touch-pinch-zoom"], select: [{ select: ["none", "text", "all", "auto"] }], "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", W] }], fill: [{ fill: [e, "none"] }], "stroke-w": [{ stroke: [jt, Kt, Ml] }], stroke: [{ stroke: [e, "none"] }], sr: ["sr-only", "not-sr-only"], "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }] }, conflictingClassGroups: { overflow: ["overflow-x", "overflow-y"], overscroll: ["overscroll-x", "overscroll-y"], inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"], "inset-x": ["right", "left"], "inset-y": ["top", "bottom"], flex: ["basis", "grow", "shrink"], gap: ["gap-x", "gap-y"], p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"], px: ["pr", "pl"], py: ["pt", "pb"], m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"], mx: ["mr", "ml"], my: ["mt", "mb"], size: ["w", "h"], "font-size": ["leading"], "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"], "fvn-ordinal": ["fvn-normal"], "fvn-slashed-zero": ["fvn-normal"], "fvn-figure": ["fvn-normal"], "fvn-spacing": ["fvn-normal"], "fvn-fraction": ["fvn-normal"], "line-clamp": ["display", "overflow"], rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"], "rounded-s": ["rounded-ss", "rounded-es"], "rounded-e": ["rounded-se", "rounded-ee"], "rounded-t": ["rounded-tl", "rounded-tr"], "rounded-r": ["rounded-tr", "rounded-br"], "rounded-b": ["rounded-br", "rounded-bl"], "rounded-l": ["rounded-tl", "rounded-bl"], "border-spacing": ["border-spacing-x", "border-spacing-y"], "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"], "border-w-x": ["border-w-r", "border-w-l"], "border-w-y": ["border-w-t", "border-w-b"], "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"], "border-color-x": ["border-color-r", "border-color-l"], "border-color-y": ["border-color-t", "border-color-b"], "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"], "scroll-mx": ["scroll-mr", "scroll-ml"], "scroll-my": ["scroll-mt", "scroll-mb"], "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"], "scroll-px": ["scroll-pr", "scroll-pl"], "scroll-py": ["scroll-pt", "scroll-pb"], touch: ["touch-x", "touch-y", "touch-pz"], "touch-x": ["touch"], "touch-y": ["touch"], "touch-pz": ["touch"] }, conflictingClassGroupModifiers: { "font-size": ["leading"] } };
}, T1 = a1(k1), R1 = "\u20A6", A1 = { currency: { decimalPlaces: 2, prefix: R1, suffix: "", allowNegative: false, showZero: true, useGrouping: true, inputMode: "decimal" }, quantity: { decimalPlaces: 2, prefix: "", suffix: "", allowNegative: false, showZero: true, useGrouping: true, inputMode: "decimal" }, percentage: { decimalPlaces: 2, prefix: "", suffix: "%", allowNegative: false, showZero: true, useGrouping: false, inputMode: "decimal" }, weight: { decimalPlaces: 3, prefix: "", suffix: "", allowNegative: false, showZero: true, useGrouping: true, inputMode: "decimal" }, factor: { decimalPlaces: 4, prefix: "", suffix: "", allowNegative: false, showZero: true, useGrouping: true, inputMode: "decimal" }, integer: { decimalPlaces: 0, prefix: "", suffix: "", allowNegative: false, showZero: true, useGrouping: true, inputMode: "numeric" } }, fc = (e, t = {}) => {
  var _a2, _b, _c2, _d2, _e2, _f2;
  const n = A1[e];
  return { category: e, decimalPlaces: (_a2 = t.decimalPlaces) != null ? _a2 : n.decimalPlaces, prefix: (_b = t.prefix) != null ? _b : n.prefix, suffix: (_c2 = t.suffix) != null ? _c2 : n.suffix, allowNegative: (_d2 = t.allowNegative) != null ? _d2 : n.allowNegative, showZero: (_e2 = t.showZero) != null ? _e2 : n.showZero, useGrouping: (_f2 = t.useGrouping) != null ? _f2 : n.useGrouping, inputMode: n.inputMode };
}, O1 = (e, t) => {
  if (!t) return e.replace(/-/g, "");
  const n = e.replace(/-/g, "");
  return e.trimStart().startsWith("-") ? `-${n}` : n;
}, gg = (e) => {
  if (e == null || e === "") return null;
  if (typeof e == "number") return Number.isFinite(e) ? e : null;
  const t = yg(e, { allowNegative: true, decimalPlaces: 12 });
  if (!t || t === "-" || t === "." || t === "-.") return null;
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}, yg = (e, t) => {
  if (!e) return "";
  const n = e.replace(/[\s,\t\r\n]+/g, "").replace(/[^\d.-]/g, ""), r = O1(n, t.allowNegative), o = t.allowNegative && r.startsWith("-"), i = o ? r.slice(1) : r, s = i.indexOf("."), l = s === -1 ? i : i.slice(0, s), a = s === -1 ? "" : i.slice(s + 1).replace(/\./g, ""), u = l.replace(/\D/g, ""), d = u.length > 0 ? u.replace(/^0+(?=\d)/, "") || "0" : "";
  if (s === -1 || t.decimalPlaces === 0) {
    const w = d;
    return w ? `${o ? "-" : ""}${w}` : o ? "-" : "";
  }
  const c = a.slice(0, Math.max(t.decimalPlaces, 0));
  return `${o ? "-" : ""}${d || "0"}.${c}`;
}, gP = (e, t) => {
  let n = 0;
  for (let r = 0; r < t && r < e.length; r += 1) /[0-9.-]/.test(e[r]) && (n += 1);
  return n;
}, yP = (e, t) => {
  if (t <= 0) return 0;
  let n = 0;
  for (let r = 0; r < e.length; r += 1) if (/[0-9.-]/.test(e[r]) && (n += 1, n === t)) return r + 1;
  return e.length;
}, vP = (e, t, n = {}) => {
  const r = fc(t, n), o = yg(e, r);
  if (!o) return "";
  if (o === "-") return o;
  const i = o.startsWith("-"), s = i ? o.slice(1) : o, l = s.includes(".") && r.decimalPlaces > 0, [a, u = ""] = s.split("."), d = a || (l ? "0" : ""), c = r.useGrouping ? d.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : d, p = i ? "-" : "";
  return l ? `${p}${c}.${u}` : `${p}${c}`;
}, N1 = (e, t, n = {}) => {
  const r = fc(t, n), o = gg(e);
  if (o === null || !r.showZero && o === 0) return "\u2014";
  const i = new Intl.NumberFormat("en-US", { minimumFractionDigits: r.decimalPlaces, maximumFractionDigits: r.decimalPlaces, useGrouping: r.useGrouping });
  return `${r.prefix}${i.format(o)}${r.suffix}`;
}, wP = (e, t, n = {}) => {
  const r = fc(t, n), o = gg(e);
  return o === null || !r.showZero && o === 0 ? "" : new Intl.NumberFormat("en-US", { minimumFractionDigits: r.decimalPlaces, maximumFractionDigits: r.decimalPlaces, useGrouping: r.useGrouping }).format(o);
};
function Ve(...e) {
  return T1(lg(e));
}
function xP(e) {
  const t = e instanceof Error ? e.message : typeof e == "string" ? e : "An unexpected error occurred";
  return t.includes("<html>") || t.includes("<!DOCTYPE") ? t.includes("504 Gateway Time-out") || t.includes("504:") ? "The request is taking too long. Please try syncing fewer orders at a time, or try again later." : t.includes("502 Bad Gateway") || t.includes("502:") ? "The server is temporarily unavailable. Please try again in a few moments." : t.includes("503 Service Unavailable") || t.includes("503:") ? "The service is temporarily unavailable. Please try again later." : t.includes("500 Internal Server Error") || t.includes("500:") ? "Something went wrong on our end. Please try again or contact support if the issue persists." : "A server error occurred. Please try again or contact support." : /^504[:\s]/.test(t) ? "The request is taking too long. Please try syncing fewer orders at a time, or try again later." : /^502[:\s]/.test(t) ? "The server is temporarily unavailable. Please try again in a few moments." : /^503[:\s]/.test(t) ? "The service is temporarily unavailable. Please try again later." : /^500[:\s]/.test(t) ? "Something went wrong on our end. Please try again or contact support if the issue persists." : /^404[:\s]/.test(t) || t.includes("Not Found") ? "The requested resource was not found. Please refresh and try again." : /^401[:\s]/.test(t) || t.includes("Unauthorized") ? "Your session has expired. Please log in again." : /^403[:\s]/.test(t) || t.includes("Forbidden") ? "You don't have permission to perform this action." : /^400[:\s]/.test(t) && t.includes("Invalid payload") ? "The order data could not be processed. Please check the order details and try again." : /^400[:\s]/.test(t) ? "Invalid request. Please check your input and try again." : t.includes("Failed to fetch") || t.includes("NetworkError") || t.includes("fetch") ? "Unable to connect to the server. Please check your internet connection and try again." : t.includes("timeout") || t.includes("ETIMEDOUT") ? "The request timed out. Please try again." : t.includes("OrderPro not configured") ? "OrderPro integration is not set up. Please contact your administrator." : t.includes("ORDERPRO_SYNC_ENABLED") ? "OrderPro sync is currently disabled." : t.length > 200 ? "An error occurred while processing your request. Please try again or contact support." : t;
}
function SP(e) {
  const t = typeof e == "string" ? parseFloat(e) : e;
  return N1((Number.isFinite(t) ? t : 0) / 100, "currency", { decimalPlaces: 0 });
}
const b1 = Ux, vg = v.forwardRef((_i2, n) => {
  var _j = _i2, { className: e } = _j, t = __objRest(_j, ["className"]);
  return h.jsx(eg, __spreadValues({ ref: n, className: Ve("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e) }, t));
});
vg.displayName = eg.displayName;
const I1 = ag("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", { variants: { variant: { default: "border bg-background text-foreground", destructive: "destructive group border-destructive bg-destructive text-destructive-foreground" } }, defaultVariants: { variant: "default" } }), wg = v.forwardRef((_k, r) => {
  var _l2 = _k, { className: e, variant: t } = _l2, n = __objRest(_l2, ["className", "variant"]);
  return h.jsx(tg, __spreadValues({ ref: r, className: Ve(I1({ variant: t }), e) }, n));
});
wg.displayName = tg.displayName;
const j1 = v.forwardRef((_m2, n) => {
  var _n2 = _m2, { className: e } = _n2, t = __objRest(_n2, ["className"]);
  return h.jsx(og, __spreadValues({ ref: n, className: Ve("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e) }, t));
});
j1.displayName = og.displayName;
const xg = v.forwardRef((_o2, n) => {
  var _p2 = _o2, { className: e } = _p2, t = __objRest(_p2, ["className"]);
  return h.jsx(ig, __spreadProps(__spreadValues({ ref: n, className: Ve("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e), "toast-close": "" }, t), { children: h.jsx(cg, { className: "h-4 w-4" }) }));
});
xg.displayName = ig.displayName;
const Sg = v.forwardRef((_q, n) => {
  var _r2 = _q, { className: e } = _r2, t = __objRest(_r2, ["className"]);
  return h.jsx(ng, __spreadValues({ ref: n, className: Ve("text-sm font-semibold", e) }, t));
});
Sg.displayName = ng.displayName;
const Eg = v.forwardRef((_s2, n) => {
  var _t2 = _s2, { className: e } = _t2, t = __objRest(_t2, ["className"]);
  return h.jsx(rg, __spreadValues({ ref: n, className: Ve("text-sm opacity-90", e) }, t));
});
Eg.displayName = rg.displayName;
function L1() {
  const { toasts: e } = bm();
  return h.jsxs(b1, { children: [e.map(function(_a2) {
    var _b = _a2, { id: t, title: n, description: r, action: o } = _b, i = __objRest(_b, ["id", "title", "description", "action"]);
    return h.jsxs(wg, __spreadProps(__spreadValues({}, i), { children: [h.jsxs("div", { className: "grid gap-1", children: [n && h.jsx(Sg, { children: n }), r && h.jsx(Eg, { children: r })] }), o, h.jsx(xg, {})] }), t);
  }), h.jsx(vg, {})] });
}
var D1 = Zf[" useId ".trim().toString()] || (() => {
}), M1 = 0;
function F1(e) {
  const [t, n] = v.useState(D1());
  return _n(() => {
    n((r) => r != null ? r : String(M1++));
  }, [e]), t ? `radix-${t}` : "";
}
const z1 = ["top", "right", "bottom", "left"], Pn = Math.min, He = Math.max, _s = Math.round, bi = Math.floor, At = (e) => ({ x: e, y: e }), $1 = { left: "right", right: "left", bottom: "top", top: "bottom" }, U1 = { start: "end", end: "start" };
function Ja(e, t, n) {
  return He(e, Pn(t, n));
}
function Ht(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qt(e) {
  return e.split("-")[0];
}
function eo(e) {
  return e.split("-")[1];
}
function pc(e) {
  return e === "x" ? "y" : "x";
}
function hc(e) {
  return e === "y" ? "height" : "width";
}
function Cn(e) {
  return ["top", "bottom"].includes(Qt(e)) ? "y" : "x";
}
function mc(e) {
  return pc(Cn(e));
}
function V1(e, t, n) {
  n === void 0 && (n = false);
  const r = eo(e), o = mc(e), i = hc(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = Ps(s)), [s, Ps(s)];
}
function W1(e) {
  const t = Ps(e);
  return [eu(e), t, eu(t)];
}
function eu(e) {
  return e.replace(/start|end/g, (t) => U1[t]);
}
function B1(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function H1(e, t, n, r) {
  const o = eo(e);
  let i = B1(Qt(e), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), t && (i = i.concat(i.map(eu)))), i;
}
function Ps(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $1[t]);
}
function Q1(e) {
  return __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, e);
}
function _g(e) {
  return typeof e != "number" ? Q1(e) : { top: e, right: e, bottom: e, left: e };
}
function Cs(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function hf(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Cn(t), s = mc(t), l = hc(s), a = Qt(t), u = i === "y", d = r.x + r.width / 2 - o.width / 2, c = r.y + r.height / 2 - o.height / 2, p = r[l] / 2 - o[l] / 2;
  let w;
  switch (a) {
    case "top":
      w = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      w = { x: d, y: r.y + r.height };
      break;
    case "right":
      w = { x: r.x + r.width, y: c };
      break;
    case "left":
      w = { x: r.x - o.width, y: c };
      break;
    default:
      w = { x: r.x, y: r.y };
  }
  switch (eo(t)) {
    case "start":
      w[s] -= p * (n && u ? -1 : 1);
      break;
    case "end":
      w[s] += p * (n && u ? -1 : 1);
      break;
  }
  return w;
}
const q1 = (e, t, n) => __async(null, null, function* () {
  const { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n, l = i.filter(Boolean), a = yield s.isRTL == null ? void 0 : s.isRTL(t);
  let u = yield s.getElementRects({ reference: e, floating: t, strategy: o }), { x: d, y: c } = hf(u, r, a), p = r, w = {}, x = 0;
  for (let g = 0; g < l.length; g++) {
    const { name: S, fn: m } = l[g], { x: f, y, data: E, reset: P } = yield m({ x: d, y: c, initialPlacement: r, placement: p, strategy: o, middlewareData: w, rects: u, platform: s, elements: { reference: e, floating: t } });
    d = f != null ? f : d, c = y != null ? y : c, w = __spreadProps(__spreadValues({}, w), { [S]: __spreadValues(__spreadValues({}, w[S]), E) }), P && x <= 50 && (x++, typeof P == "object" && (P.placement && (p = P.placement), P.rects && (u = P.rects === true ? yield s.getElementRects({ reference: e, floating: t, strategy: o }) : P.rects), { x: d, y: c } = hf(u, p, a)), g = -1);
  }
  return { x: d, y: c, placement: p, strategy: o, middlewareData: w };
});
function Ko(e, t) {
  return __async(this, null, function* () {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e, { boundary: u = "clippingAncestors", rootBoundary: d = "viewport", elementContext: c = "floating", altBoundary: p = false, padding: w = 0 } = Ht(t, e), x = _g(w), S = l[p ? c === "floating" ? "reference" : "floating" : c], m = Cs(yield i.getClippingRect({ element: (n = yield i.isElement == null ? void 0 : i.isElement(S)) == null || n ? S : S.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)), boundary: u, rootBoundary: d, strategy: a })), f = c === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference, y = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating), E = (yield i.isElement == null ? void 0 : i.isElement(y)) ? (yield i.getScale == null ? void 0 : i.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, P = Cs(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: f, offsetParent: y, strategy: a }) : f);
    return { top: (m.top - P.top + x.top) / E.y, bottom: (P.bottom - m.bottom + x.bottom) / E.y, left: (m.left - P.left + x.left) / E.x, right: (P.right - m.right + x.right) / E.x };
  });
}
const G1 = (e) => ({ name: "arrow", options: e, fn(t) {
  return __async(this, null, function* () {
    const { x: n, y: r, placement: o, rects: i, platform: s, elements: l, middlewareData: a } = t, { element: u, padding: d = 0 } = Ht(e, t) || {};
    if (u == null) return {};
    const c = _g(d), p = { x: n, y: r }, w = mc(o), x = hc(w), g = yield s.getDimensions(u), S = w === "y", m = S ? "top" : "left", f = S ? "bottom" : "right", y = S ? "clientHeight" : "clientWidth", E = i.reference[x] + i.reference[w] - p[w] - i.floating[x], P = p[w] - i.reference[w], k = yield s.getOffsetParent == null ? void 0 : s.getOffsetParent(u);
    let C = k ? k[y] : 0;
    (!C || !(yield s.isElement == null ? void 0 : s.isElement(k))) && (C = l.floating[y] || i.floating[x]);
    const T = E / 2 - P / 2, O = C / 2 - g[x] / 2 - 1, N = Pn(c[m], O), V = Pn(c[f], O), D = N, Y = C - g[x] - V, j = C / 2 - g[x] / 2 + T, J = Ja(D, j, Y), H = !a.arrow && eo(o) != null && j !== J && i.reference[x] / 2 - (j < D ? N : V) - g[x] / 2 < 0, Z = H ? j < D ? j - D : j - Y : 0;
    return { [w]: p[w] + Z, data: __spreadValues({ [w]: J, centerOffset: j - J - Z }, H && { alignmentOffset: Z }), reset: H };
  });
} }), K1 = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, fn(t) {
    return __async(this, null, function* () {
      var n, r;
      const { placement: o, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: u } = t, _a3 = Ht(e, t), { mainAxis: d = true, crossAxis: c = true, fallbackPlacements: p, fallbackStrategy: w = "bestFit", fallbackAxisSideDirection: x = "none", flipAlignment: g = true } = _a3, S = __objRest(_a3, ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]);
      if ((n = i.arrow) != null && n.alignmentOffset) return {};
      const m = Qt(o), f = Cn(l), y = Qt(l) === l, E = yield a.isRTL == null ? void 0 : a.isRTL(u.floating), P = p || (y || !g ? [Ps(l)] : W1(l)), k = x !== "none";
      !p && k && P.push(...H1(l, g, x, E));
      const C = [l, ...P], T = yield Ko(t, S), O = [];
      let N = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && O.push(T[m]), c) {
        const j = V1(o, s, E);
        O.push(T[j[0]], T[j[1]]);
      }
      if (N = [...N, { placement: o, overflows: O }], !O.every((j) => j <= 0)) {
        var V, D;
        const j = (((V = i.flip) == null ? void 0 : V.index) || 0) + 1, J = C[j];
        if (J) return { data: { index: j, overflows: N }, reset: { placement: J } };
        let H = (D = N.filter((Z) => Z.overflows[0] <= 0).sort((Z, R) => Z.overflows[1] - R.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!H) switch (w) {
          case "bestFit": {
            var Y;
            const Z = (Y = N.filter((R) => {
              if (k) {
                const b = Cn(R.placement);
                return b === f || b === "y";
              }
              return true;
            }).map((R) => [R.placement, R.overflows.filter((b) => b > 0).reduce((b, F) => b + F, 0)]).sort((R, b) => R[1] - b[1])[0]) == null ? void 0 : Y[0];
            Z && (H = Z);
            break;
          }
          case "initialPlacement":
            H = l;
            break;
        }
        if (o !== H) return { reset: { placement: H } };
      }
      return {};
    });
  } };
};
function mf(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function gf(e) {
  return z1.some((t) => e[t] >= 0);
}
const Y1 = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, fn(t) {
    return __async(this, null, function* () {
      const { rects: n } = t, _a3 = Ht(e, t), { strategy: r = "referenceHidden" } = _a3, o = __objRest(_a3, ["strategy"]);
      switch (r) {
        case "referenceHidden": {
          const i = yield Ko(t, __spreadProps(__spreadValues({}, o), { elementContext: "reference" })), s = mf(i, n.reference);
          return { data: { referenceHiddenOffsets: s, referenceHidden: gf(s) } };
        }
        case "escaped": {
          const i = yield Ko(t, __spreadProps(__spreadValues({}, o), { altBoundary: true })), s = mf(i, n.floating);
          return { data: { escapedOffsets: s, escaped: gf(s) } };
        }
        default:
          return {};
      }
    });
  } };
};
function X1(e, t) {
  return __async(this, null, function* () {
    const { placement: n, platform: r, elements: o } = e, i = yield r.isRTL == null ? void 0 : r.isRTL(o.floating), s = Qt(n), l = eo(n), a = Cn(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, d = i && a ? -1 : 1, c = Ht(t, e);
    let { mainAxis: p, crossAxis: w, alignmentAxis: x } = typeof c == "number" ? { mainAxis: c, crossAxis: 0, alignmentAxis: null } : { mainAxis: c.mainAxis || 0, crossAxis: c.crossAxis || 0, alignmentAxis: c.alignmentAxis };
    return l && typeof x == "number" && (w = l === "end" ? x * -1 : x), a ? { x: w * d, y: p * u } : { x: p * u, y: w * d };
  });
}
const Z1 = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, fn(t) {
    return __async(this, null, function* () {
      var n, r;
      const { x: o, y: i, placement: s, middlewareData: l } = t, a = yield X1(t, e);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : { x: o + a.x, y: i + a.y, data: __spreadProps(__spreadValues({}, a), { placement: s }) };
    });
  } };
}, J1 = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, fn(t) {
    return __async(this, null, function* () {
      const { x: n, y: r, placement: o } = t, _a3 = Ht(e, t), { mainAxis: i = true, crossAxis: s = false, limiter: l = { fn: (S) => {
        let { x: m, y: f } = S;
        return { x: m, y: f };
      } } } = _a3, a = __objRest(_a3, ["mainAxis", "crossAxis", "limiter"]), u = { x: n, y: r }, d = yield Ko(t, a), c = Cn(Qt(o)), p = pc(c);
      let w = u[p], x = u[c];
      if (i) {
        const S = p === "y" ? "top" : "left", m = p === "y" ? "bottom" : "right", f = w + d[S], y = w - d[m];
        w = Ja(f, w, y);
      }
      if (s) {
        const S = c === "y" ? "top" : "left", m = c === "y" ? "bottom" : "right", f = x + d[S], y = x - d[m];
        x = Ja(f, x, y);
      }
      const g = l.fn(__spreadProps(__spreadValues({}, t), { [p]: w, [c]: x }));
      return __spreadProps(__spreadValues({}, g), { data: { x: g.x - n, y: g.y - r, enabled: { [p]: i, [c]: s } } });
    });
  } };
}, eS = function(e) {
  return e === void 0 && (e = {}), { options: e, fn(t) {
    const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t, { offset: l = 0, mainAxis: a = true, crossAxis: u = true } = Ht(e, t), d = { x: n, y: r }, c = Cn(o), p = pc(c);
    let w = d[p], x = d[c];
    const g = Ht(l, t), S = typeof g == "number" ? { mainAxis: g, crossAxis: 0 } : __spreadValues({ mainAxis: 0, crossAxis: 0 }, g);
    if (a) {
      const y = p === "y" ? "height" : "width", E = i.reference[p] - i.floating[y] + S.mainAxis, P = i.reference[p] + i.reference[y] - S.mainAxis;
      w < E ? w = E : w > P && (w = P);
    }
    if (u) {
      var m, f;
      const y = p === "y" ? "width" : "height", E = ["top", "left"].includes(Qt(o)), P = i.reference[c] - i.floating[y] + (E && ((m = s.offset) == null ? void 0 : m[c]) || 0) + (E ? 0 : S.crossAxis), k = i.reference[c] + i.reference[y] + (E ? 0 : ((f = s.offset) == null ? void 0 : f[c]) || 0) - (E ? S.crossAxis : 0);
      x < P ? x = P : x > k && (x = k);
    }
    return { [p]: w, [c]: x };
  } };
}, tS = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, fn(t) {
    return __async(this, null, function* () {
      var n, r;
      const { placement: o, rects: i, platform: s, elements: l } = t, _a3 = Ht(e, t), { apply: a = () => {
      } } = _a3, u = __objRest(_a3, ["apply"]), d = yield Ko(t, u), c = Qt(o), p = eo(o), w = Cn(o) === "y", { width: x, height: g } = i.floating;
      let S, m;
      c === "top" || c === "bottom" ? (S = c, m = p === ((yield s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (m = c, S = p === "end" ? "top" : "bottom");
      const f = g - d.top - d.bottom, y = x - d.left - d.right, E = Pn(g - d[S], f), P = Pn(x - d[m], y), k = !t.middlewareData.shift;
      let C = E, T = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (T = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = f), k && !p) {
        const N = He(d.left, 0), V = He(d.right, 0), D = He(d.top, 0), Y = He(d.bottom, 0);
        w ? T = x - 2 * (N !== 0 || V !== 0 ? N + V : He(d.left, d.right)) : C = g - 2 * (D !== 0 || Y !== 0 ? D + Y : He(d.top, d.bottom));
      }
      yield a(__spreadProps(__spreadValues({}, t), { availableWidth: T, availableHeight: C }));
      const O = yield s.getDimensions(l.floating);
      return x !== O.width || g !== O.height ? { reset: { rects: true } } : {};
    });
  } };
};
function Ys() {
  return typeof window < "u";
}
function to(e) {
  return Pg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  var t;
  return (t = (Pg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Pg(e) {
  return Ys() ? e instanceof Node || e instanceof Ge(e).Node : false;
}
function vt(e) {
  return Ys() ? e instanceof Element || e instanceof Ge(e).Element : false;
}
function Nt(e) {
  return Ys() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : false;
}
function yf(e) {
  return !Ys() || typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function ui(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = wt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function nS(e) {
  return ["table", "td", "th"].includes(to(e));
}
function Xs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch (e2) {
      return false;
    }
  });
}
function gc(e) {
  const t = yc(), n = vt(e) ? wt(e) : e;
  return ["transform", "translate", "scale", "rotate", "perspective"].some((r) => n[r] ? n[r] !== "none" : false) || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function rS(e) {
  let t = kn(e);
  for (; Nt(t) && !Qr(t); ) {
    if (gc(t)) return t;
    if (Xs(t)) return null;
    t = kn(t);
  }
  return null;
}
function yc() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function Qr(e) {
  return ["html", "body", "#document"].includes(to(e));
}
function wt(e) {
  return Ge(e).getComputedStyle(e);
}
function Zs(e) {
  return vt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function kn(e) {
  if (to(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || yf(e) && e.host || bt(e);
  return yf(t) ? t.host : t;
}
function Cg(e) {
  const t = kn(e);
  return Qr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nt(t) && ui(t) ? t : Cg(t);
}
function Yo(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const o = Cg(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = Ge(o);
  if (i) {
    const l = tu(s);
    return t.concat(s, s.visualViewport || [], ui(o) ? o : [], l && n ? Yo(l) : []);
  }
  return t.concat(o, Yo(o, [], n));
}
function tu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function kg(e) {
  const t = wt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Nt(e), i = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, l = _s(n) !== i || _s(r) !== s;
  return l && (n = i, r = s), { width: n, height: r, $: l };
}
function vc(e) {
  return vt(e) ? e : e.contextElement;
}
function Pr(e) {
  const t = vc(e);
  if (!Nt(t)) return At(1);
  const n = t.getBoundingClientRect(), { width: r, height: o, $: i } = kg(t);
  let s = (i ? _s(n.width) : n.width) / r, l = (i ? _s(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const oS = At(0);
function Tg(e) {
  const t = Ge(e);
  return !yc() || !t.visualViewport ? oS : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function iS(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Ge(e) ? false : t;
}
function Zn(e, t, n, r) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const o = e.getBoundingClientRect(), i = vc(e);
  let s = At(1);
  t && (r ? vt(r) && (s = Pr(r)) : s = Pr(e));
  const l = iS(i, n, r) ? Tg(i) : At(0);
  let a = (o.left + l.x) / s.x, u = (o.top + l.y) / s.y, d = o.width / s.x, c = o.height / s.y;
  if (i) {
    const p = Ge(i), w = r && vt(r) ? Ge(r) : r;
    let x = p, g = tu(x);
    for (; g && r && w !== x; ) {
      const S = Pr(g), m = g.getBoundingClientRect(), f = wt(g), y = m.left + (g.clientLeft + parseFloat(f.paddingLeft)) * S.x, E = m.top + (g.clientTop + parseFloat(f.paddingTop)) * S.y;
      a *= S.x, u *= S.y, d *= S.x, c *= S.y, a += y, u += E, x = Ge(g), g = tu(x);
    }
  }
  return Cs({ width: d, height: c, x: a, y: u });
}
function wc(e, t) {
  const n = Zs(e).scrollLeft;
  return t ? t.left + n : Zn(bt(e)).left + n;
}
function Rg(e, t, n) {
  n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), o = r.left + t.scrollLeft - (n ? 0 : wc(e, r)), i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function sS(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed", s = bt(r), l = t ? Xs(t.floating) : false;
  if (r === s || l && i) return n;
  let a = { scrollLeft: 0, scrollTop: 0 }, u = At(1);
  const d = At(0), c = Nt(r);
  if ((c || !c && !i) && ((to(r) !== "body" || ui(s)) && (a = Zs(r)), Nt(r))) {
    const w = Zn(r);
    u = Pr(r), d.x = w.x + r.clientLeft, d.y = w.y + r.clientTop;
  }
  const p = s && !c && !i ? Rg(s, a, true) : At(0);
  return { width: n.width * u.x, height: n.height * u.y, x: n.x * u.x - a.scrollLeft * u.x + d.x + p.x, y: n.y * u.y - a.scrollTop * u.y + d.y + p.y };
}
function lS(e) {
  return Array.from(e.getClientRects());
}
function aS(e) {
  const t = bt(e), n = Zs(e), r = e.ownerDocument.body, o = He(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = He(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + wc(e);
  const l = -n.scrollTop;
  return wt(r).direction === "rtl" && (s += He(t.clientWidth, r.clientWidth) - o), { width: o, height: i, x: s, y: l };
}
function uS(e, t) {
  const n = Ge(e), r = bt(e), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const u = yc();
    (!u || u && t === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  return { width: i, height: s, x: l, y: a };
}
function cS(e, t) {
  const n = Zn(e, true, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = Nt(e) ? Pr(e) : At(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = o * i.x, u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function vf(e, t, n) {
  let r;
  if (t === "viewport") r = uS(e, n);
  else if (t === "document") r = aS(bt(e));
  else if (vt(t)) r = cS(t, n);
  else {
    const o = Tg(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return Cs(r);
}
function Ag(e, t) {
  const n = kn(e);
  return n === t || !vt(n) || Qr(n) ? false : wt(n).position === "fixed" || Ag(n, t);
}
function dS(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Yo(e, [], false).filter((l) => vt(l) && to(l) !== "body"), o = null;
  const i = wt(e).position === "fixed";
  let s = i ? kn(e) : e;
  for (; vt(s) && !Qr(s); ) {
    const l = wt(s), a = gc(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || ui(s) && !a && Ag(e, s)) ? r = r.filter((d) => d !== s) : o = l, s = kn(s);
  }
  return t.set(e, r), r;
}
function fS(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [...n === "clippingAncestors" ? Xs(t) ? [] : dS(t, this._c) : [].concat(n), r], l = s[0], a = s.reduce((u, d) => {
    const c = vf(t, d, o);
    return u.top = He(c.top, u.top), u.right = Pn(c.right, u.right), u.bottom = Pn(c.bottom, u.bottom), u.left = He(c.left, u.left), u;
  }, vf(t, l, o));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function pS(e) {
  const { width: t, height: n } = kg(e);
  return { width: t, height: n };
}
function hS(e, t, n) {
  const r = Nt(t), o = bt(t), i = n === "fixed", s = Zn(e, true, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = At(0);
  if (r || !r && !i) if ((to(t) !== "body" || ui(o)) && (l = Zs(t)), r) {
    const p = Zn(t, true, i, t);
    a.x = p.x + t.clientLeft, a.y = p.y + t.clientTop;
  } else o && (a.x = wc(o));
  const u = o && !r && !i ? Rg(o, l) : At(0), d = s.left + l.scrollLeft - a.x - u.x, c = s.top + l.scrollTop - a.y - u.y;
  return { x: d, y: c, width: s.width, height: s.height };
}
function Fl(e) {
  return wt(e).position === "static";
}
function wf(e, t) {
  if (!Nt(e) || wt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return bt(e) === n && (n = n.ownerDocument.body), n;
}
function Og(e, t) {
  const n = Ge(e);
  if (Xs(e)) return n;
  if (!Nt(e)) {
    let o = kn(e);
    for (; o && !Qr(o); ) {
      if (vt(o) && !Fl(o)) return o;
      o = kn(o);
    }
    return n;
  }
  let r = wf(e, t);
  for (; r && nS(r) && Fl(r); ) r = wf(r, t);
  return r && Qr(r) && Fl(r) && !gc(r) ? n : r || rS(e) || n;
}
const mS = function(e) {
  return __async(this, null, function* () {
    const t = this.getOffsetParent || Og, n = this.getDimensions, r = yield n(e.floating);
    return { reference: hS(e.reference, yield t(e.floating), e.strategy), floating: { x: 0, y: 0, width: r.width, height: r.height } };
  });
};
function gS(e) {
  return wt(e).direction === "rtl";
}
const yS = { convertOffsetParentRelativeRectToViewportRelativeRect: sS, getDocumentElement: bt, getClippingRect: fS, getOffsetParent: Og, getElementRects: mS, getClientRects: lS, getDimensions: pS, getScale: Pr, isElement: vt, isRTL: gS };
function Ng(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function vS(e, t) {
  let n = null, r;
  const o = bt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = false), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(), { left: d, top: c, width: p, height: w } = u;
    if (l || t(), !p || !w) return;
    const x = bi(c), g = bi(o.clientWidth - (d + p)), S = bi(o.clientHeight - (c + w)), m = bi(d), y = { rootMargin: -x + "px " + -g + "px " + -S + "px " + -m + "px", threshold: He(0, Pn(1, a)) || 1 };
    let E = true;
    function P(k) {
      const C = k[0].intersectionRatio;
      if (C !== a) {
        if (!E) return s();
        C ? s(false, C) : r = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ng(u, e.getBoundingClientRect()) && s(), E = false;
    }
    try {
      n = new IntersectionObserver(P, __spreadProps(__spreadValues({}, y), { root: o.ownerDocument }));
    } catch (e2) {
      n = new IntersectionObserver(P, y);
    }
    n.observe(e);
  }
  return s(true), i;
}
function wS(e, t, n, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: o = true, ancestorResize: i = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: a = false } = r, u = vc(e), d = o || i ? [...u ? Yo(u) : [], ...Yo(t)] : [];
  d.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: true }), i && m.addEventListener("resize", n);
  });
  const c = u && l ? vS(u, n) : null;
  let p = -1, w = null;
  s && (w = new ResizeObserver((m) => {
    let [f] = m;
    f && f.target === u && w && (w.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var y;
      (y = w) == null || y.observe(t);
    })), n();
  }), u && !a && w.observe(u), w.observe(t));
  let x, g = a ? Zn(e) : null;
  a && S();
  function S() {
    const m = Zn(e);
    g && !Ng(g, m) && n(), g = m, x = requestAnimationFrame(S);
  }
  return n(), () => {
    var m;
    d.forEach((f) => {
      o && f.removeEventListener("scroll", n), i && f.removeEventListener("resize", n);
    }), c == null || c(), (m = w) == null || m.disconnect(), w = null, a && cancelAnimationFrame(x);
  };
}
const xS = Z1, SS = J1, ES = K1, _S = tS, PS = Y1, xf = G1, CS = eS, kS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = __spreadValues({ platform: yS }, n), i = __spreadProps(__spreadValues({}, o.platform), { _c: r });
  return q1(e, t, __spreadProps(__spreadValues({}, o), { platform: i }));
};
var Ki = typeof document < "u" ? v.useLayoutEffect : v.useEffect;
function ks(e, t) {
  if (e === t) return true;
  if (typeof e != typeof t) return false;
  if (typeof e == "function" && e.toString() === t.toString()) return true;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return false;
      for (r = n; r-- !== 0; ) if (!ks(e[r], t[r])) return false;
      return true;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return false;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return false;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !ks(e[i], t[i])) return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function bg(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Sf(e, t) {
  const n = bg(e);
  return Math.round(t * n) / n;
}
function zl(e) {
  const t = v.useRef(e);
  return Ki(() => {
    t.current = e;
  }), t;
}
function TS(e) {
  e === void 0 && (e = {});
  const { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: o, elements: { reference: i, floating: s } = {}, transform: l = true, whileElementsMounted: a, open: u } = e, [d, c] = v.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: false }), [p, w] = v.useState(r);
  ks(p, r) || w(r);
  const [x, g] = v.useState(null), [S, m] = v.useState(null), f = v.useCallback((R) => {
    R !== k.current && (k.current = R, g(R));
  }, []), y = v.useCallback((R) => {
    R !== C.current && (C.current = R, m(R));
  }, []), E = i || x, P = s || S, k = v.useRef(null), C = v.useRef(null), T = v.useRef(d), O = a != null, N = zl(a), V = zl(o), D = zl(u), Y = v.useCallback(() => {
    if (!k.current || !C.current) return;
    const R = { placement: t, strategy: n, middleware: p };
    V.current && (R.platform = V.current), kS(k.current, C.current, R).then((b) => {
      const F = __spreadProps(__spreadValues({}, b), { isPositioned: D.current !== false });
      j.current && !ks(T.current, F) && (T.current = F, li.flushSync(() => {
        c(F);
      }));
    });
  }, [p, t, n, V, D]);
  Ki(() => {
    u === false && T.current.isPositioned && (T.current.isPositioned = false, c((R) => __spreadProps(__spreadValues({}, R), { isPositioned: false })));
  }, [u]);
  const j = v.useRef(false);
  Ki(() => (j.current = true, () => {
    j.current = false;
  }), []), Ki(() => {
    if (E && (k.current = E), P && (C.current = P), E && P) {
      if (N.current) return N.current(E, P, Y);
      Y();
    }
  }, [E, P, Y, N, O]);
  const J = v.useMemo(() => ({ reference: k, floating: C, setReference: f, setFloating: y }), [f, y]), H = v.useMemo(() => ({ reference: E, floating: P }), [E, P]), Z = v.useMemo(() => {
    const R = { position: n, left: 0, top: 0 };
    if (!H.floating) return R;
    const b = Sf(H.floating, d.x), F = Sf(H.floating, d.y);
    return l ? __spreadValues(__spreadProps(__spreadValues({}, R), { transform: "translate(" + b + "px, " + F + "px)" }), bg(H.floating) >= 1.5 && { willChange: "transform" }) : { position: n, left: b, top: F };
  }, [n, l, H.floating, d.x, d.y]);
  return v.useMemo(() => __spreadProps(__spreadValues({}, d), { update: Y, refs: J, elements: H, floatingStyles: Z }), [d, Y, J, H, Z]);
}
const RS = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return { name: "arrow", options: e, fn(n) {
    const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
    return r && t(r) ? r.current != null ? xf({ element: r.current, padding: o }).fn(n) : {} : r ? xf({ element: r, padding: o }).fn(n) : {};
  } };
}, AS = (e, t) => __spreadProps(__spreadValues({}, xS(e)), { options: [e, t] }), OS = (e, t) => __spreadProps(__spreadValues({}, SS(e)), { options: [e, t] }), NS = (e, t) => __spreadProps(__spreadValues({}, CS(e)), { options: [e, t] }), bS = (e, t) => __spreadProps(__spreadValues({}, ES(e)), { options: [e, t] }), IS = (e, t) => __spreadProps(__spreadValues({}, _S(e)), { options: [e, t] }), jS = (e, t) => __spreadProps(__spreadValues({}, PS(e)), { options: [e, t] }), LS = (e, t) => __spreadProps(__spreadValues({}, RS(e)), { options: [e, t] });
var DS = "Arrow", Ig = v.forwardRef((e, t) => {
  const _a2 = e, { children: n, width: r = 10, height: o = 5 } = _a2, i = __objRest(_a2, ["children", "width", "height"]);
  return h.jsx(Ue.svg, __spreadProps(__spreadValues({}, i), { ref: t, width: r, height: o, viewBox: "0 0 30 10", preserveAspectRatio: "none", children: e.asChild ? n : h.jsx("polygon", { points: "0,0 30,0 15,10" }) }));
});
Ig.displayName = DS;
var MS = Ig;
function FS(e) {
  const [t, n] = v.useState(void 0);
  return _n(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length) return;
        const i = o[0];
        let s, l;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, u = Array.isArray(a) ? a[0] : a;
          s = u.inlineSize, l = u.blockSize;
        } else s = e.offsetWidth, l = e.offsetHeight;
        n({ width: s, height: l });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else n(void 0);
  }, [e]), t;
}
var xc = "Popper", [jg, Lg] = Qs(xc), [zS, Dg] = jg(xc), Mg = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = v.useState(null);
  return h.jsx(zS, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Mg.displayName = xc;
var Fg = "PopperAnchor", zg = v.forwardRef((e, t) => {
  const _a2 = e, { __scopePopper: n, virtualRef: r } = _a2, o = __objRest(_a2, ["__scopePopper", "virtualRef"]), i = Dg(Fg, n), s = v.useRef(null), l = yt(t, s);
  return v.useEffect(() => {
    i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
  }), r ? null : h.jsx(Ue.div, __spreadProps(__spreadValues({}, o), { ref: l }));
});
zg.displayName = Fg;
var Sc = "PopperContent", [$S, US] = jg(Sc), $g = v.forwardRef((e, t) => {
  var _a2, _b;
  var Nn, Pc, Cc, kc, Tc, Rc;
  const _c2 = e, { __scopePopper: n, side: r = "bottom", sideOffset: o = 0, align: i = "center", alignOffset: s = 0, arrowPadding: l = 0, avoidCollisions: a = true, collisionBoundary: u = [], collisionPadding: d = 0, sticky: c = "partial", hideWhenDetached: p = false, updatePositionStrategy: w = "optimized", onPlaced: x } = _c2, g = __objRest(_c2, ["__scopePopper", "side", "sideOffset", "align", "alignOffset", "arrowPadding", "avoidCollisions", "collisionBoundary", "collisionPadding", "sticky", "hideWhenDetached", "updatePositionStrategy", "onPlaced"]), S = Dg(Sc, n), [m, f] = v.useState(null), y = yt(t, (ro) => f(ro)), [E, P] = v.useState(null), k = FS(E), C = (_a2 = k == null ? void 0 : k.width) != null ? _a2 : 0, T = (_b = k == null ? void 0 : k.height) != null ? _b : 0, O = r + (i !== "center" ? "-" + i : ""), N = typeof d == "number" ? d : __spreadValues({ top: 0, right: 0, bottom: 0, left: 0 }, d), V = Array.isArray(u) ? u : [u], D = V.length > 0, Y = { padding: N, boundary: V.filter(WS), altBoundary: D }, { refs: j, floatingStyles: J, placement: H, isPositioned: Z, middlewareData: R } = TS({ strategy: "fixed", placement: O, whileElementsMounted: (...ro) => wS(...ro, { animationFrame: w === "always" }), elements: { reference: S.anchor }, middleware: [AS({ mainAxis: o + T, alignmentAxis: s }), a && OS(__spreadValues({ mainAxis: true, crossAxis: false, limiter: c === "partial" ? NS() : void 0 }, Y)), a && bS(__spreadValues({}, Y)), IS(__spreadProps(__spreadValues({}, Y), { apply: ({ elements: ro, rects: Ac, availableWidth: oy, availableHeight: iy }) => {
    const { width: sy, height: ly } = Ac.reference, ci = ro.floating.style;
    ci.setProperty("--radix-popper-available-width", `${oy}px`), ci.setProperty("--radix-popper-available-height", `${iy}px`), ci.setProperty("--radix-popper-anchor-width", `${sy}px`), ci.setProperty("--radix-popper-anchor-height", `${ly}px`);
  } })), E && LS({ element: E, padding: l }), BS({ arrowWidth: C, arrowHeight: T }), p && jS(__spreadValues({ strategy: "referenceHidden" }, Y))] }), [b, F] = Wg(H), B = Ot(x);
  _n(() => {
    Z && (B == null || B());
  }, [Z, B]);
  const se = (Nn = R.arrow) == null ? void 0 : Nn.x, lt = (Pc = R.arrow) == null ? void 0 : Pc.y, Ze = ((Cc = R.arrow) == null ? void 0 : Cc.centerOffset) !== 0, [no, It] = v.useState();
  return _n(() => {
    m && It(window.getComputedStyle(m).zIndex);
  }, [m]), h.jsx("div", { ref: j.setFloating, "data-radix-popper-content-wrapper": "", style: __spreadValues(__spreadProps(__spreadValues({}, J), { transform: Z ? J.transform : "translate(0, -200%)", minWidth: "max-content", zIndex: no, "--radix-popper-transform-origin": [(kc = R.transformOrigin) == null ? void 0 : kc.x, (Tc = R.transformOrigin) == null ? void 0 : Tc.y].join(" ") }), ((Rc = R.hide) == null ? void 0 : Rc.referenceHidden) && { visibility: "hidden", pointerEvents: "none" }), dir: e.dir, children: h.jsx($S, { scope: n, placedSide: b, onArrowChange: P, arrowX: se, arrowY: lt, shouldHideArrow: Ze, children: h.jsx(Ue.div, __spreadProps(__spreadValues({ "data-side": b, "data-align": F }, g), { ref: y, style: __spreadProps(__spreadValues({}, g.style), { animation: Z ? void 0 : "none" }) })) }) });
});
$g.displayName = Sc;
var Ug = "PopperArrow", VS = { top: "bottom", right: "left", bottom: "top", left: "right" }, Vg = v.forwardRef(function(t, n) {
  const _a2 = t, { __scopePopper: r } = _a2, o = __objRest(_a2, ["__scopePopper"]), i = US(Ug, r), s = VS[i.placedSide];
  return h.jsx("span", { ref: i.onArrowChange, style: { position: "absolute", left: i.arrowX, top: i.arrowY, [s]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[i.placedSide], visibility: i.shouldHideArrow ? "hidden" : void 0 }, children: h.jsx(MS, __spreadProps(__spreadValues({}, o), { ref: n, style: __spreadProps(__spreadValues({}, o.style), { display: "block" }) })) });
});
Vg.displayName = Ug;
function WS(e) {
  return e !== null;
}
var BS = (e) => ({ name: "transformOrigin", options: e, fn(t) {
  var _a2, _b;
  var S, m, f;
  const { placement: n, rects: r, middlewareData: o } = t, s = ((S = o.arrow) == null ? void 0 : S.centerOffset) !== 0, l = s ? 0 : e.arrowWidth, a = s ? 0 : e.arrowHeight, [u, d] = Wg(n), c = { start: "0%", center: "50%", end: "100%" }[d], p = ((_a2 = (m = o.arrow) == null ? void 0 : m.x) != null ? _a2 : 0) + l / 2, w = ((_b = (f = o.arrow) == null ? void 0 : f.y) != null ? _b : 0) + a / 2;
  let x = "", g = "";
  return u === "bottom" ? (x = s ? c : `${p}px`, g = `${-a}px`) : u === "top" ? (x = s ? c : `${p}px`, g = `${r.floating.height + a}px`) : u === "right" ? (x = `${-a}px`, g = s ? c : `${w}px`) : u === "left" && (x = `${r.floating.width + a}px`, g = s ? c : `${w}px`), { data: { x, y: g } };
} });
function Wg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var HS = Mg, QS = zg, qS = $g, GS = Vg, [Js, EP] = Qs("Tooltip", [Lg]), el = Lg(), Bg = "TooltipProvider", KS = 700, nu = "tooltip.open", [YS, Ec] = Js(Bg), Hg = (e) => {
  const { __scopeTooltip: t, delayDuration: n = KS, skipDelayDuration: r = 300, disableHoverableContent: o = false, children: i } = e, s = v.useRef(true), l = v.useRef(false), a = v.useRef(0);
  return v.useEffect(() => {
    const u = a.current;
    return () => window.clearTimeout(u);
  }, []), h.jsx(YS, { scope: t, isOpenDelayedRef: s, delayDuration: n, onOpen: v.useCallback(() => {
    window.clearTimeout(a.current), s.current = false;
  }, []), onClose: v.useCallback(() => {
    window.clearTimeout(a.current), a.current = window.setTimeout(() => s.current = true, r);
  }, [r]), isPointerInTransitRef: l, onPointerInTransitChange: v.useCallback((u) => {
    l.current = u;
  }, []), disableHoverableContent: o, children: i });
};
Hg.displayName = Bg;
var tl = "Tooltip", [XS, nl] = Js(tl), Qg = (e) => {
  const { __scopeTooltip: t, children: n, open: r, defaultOpen: o = false, onOpenChange: i, disableHoverableContent: s, delayDuration: l } = e, a = Ec(tl, e.__scopeTooltip), u = el(t), [d, c] = v.useState(null), p = F1(), w = v.useRef(0), x = s != null ? s : a.disableHoverableContent, g = l != null ? l : a.delayDuration, S = v.useRef(false), [m = false, f] = $m({ prop: r, defaultProp: o, onChange: (C) => {
    C ? (a.onOpen(), document.dispatchEvent(new CustomEvent(nu))) : a.onClose(), i == null || i(C);
  } }), y = v.useMemo(() => m ? S.current ? "delayed-open" : "instant-open" : "closed", [m]), E = v.useCallback(() => {
    window.clearTimeout(w.current), w.current = 0, S.current = false, f(true);
  }, [f]), P = v.useCallback(() => {
    window.clearTimeout(w.current), w.current = 0, f(false);
  }, [f]), k = v.useCallback(() => {
    window.clearTimeout(w.current), w.current = window.setTimeout(() => {
      S.current = true, f(true), w.current = 0;
    }, g);
  }, [g, f]);
  return v.useEffect(() => () => {
    w.current && (window.clearTimeout(w.current), w.current = 0);
  }, []), h.jsx(HS, __spreadProps(__spreadValues({}, u), { children: h.jsx(XS, { scope: t, contentId: p, open: m, stateAttribute: y, trigger: d, onTriggerChange: c, onTriggerEnter: v.useCallback(() => {
    a.isOpenDelayedRef.current ? k() : E();
  }, [a.isOpenDelayedRef, k, E]), onTriggerLeave: v.useCallback(() => {
    x ? P() : (window.clearTimeout(w.current), w.current = 0);
  }, [P, x]), onOpen: E, onClose: P, disableHoverableContent: x, children: n }) }));
};
Qg.displayName = tl;
var ru = "TooltipTrigger", qg = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeTooltip: n } = _a2, r = __objRest(_a2, ["__scopeTooltip"]), o = nl(ru, n), i = Ec(ru, n), s = el(n), l = v.useRef(null), a = yt(t, l, o.onTriggerChange), u = v.useRef(false), d = v.useRef(false), c = v.useCallback(() => u.current = false, []);
  return v.useEffect(() => () => document.removeEventListener("pointerup", c), [c]), h.jsx(QS, __spreadProps(__spreadValues({ asChild: true }, s), { children: h.jsx(Ue.button, __spreadProps(__spreadValues({ "aria-describedby": o.open ? o.contentId : void 0, "data-state": o.stateAttribute }, r), { ref: a, onPointerMove: ge(e.onPointerMove, (p) => {
    p.pointerType !== "touch" && !d.current && !i.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = true);
  }), onPointerLeave: ge(e.onPointerLeave, () => {
    o.onTriggerLeave(), d.current = false;
  }), onPointerDown: ge(e.onPointerDown, () => {
    o.open && o.onClose(), u.current = true, document.addEventListener("pointerup", c, { once: true });
  }), onFocus: ge(e.onFocus, () => {
    u.current || o.onOpen();
  }), onBlur: ge(e.onBlur, o.onClose), onClick: ge(e.onClick, o.onClose) })) }));
});
qg.displayName = ru;
var ZS = "TooltipPortal", [_P, JS] = Js(ZS, { forceMount: void 0 }), qr = "TooltipContent", Gg = v.forwardRef((e, t) => {
  const n = JS(qr, e.__scopeTooltip), _a2 = e, { forceMount: r = n.forceMount, side: o = "top" } = _a2, i = __objRest(_a2, ["forceMount", "side"]), s = nl(qr, e.__scopeTooltip);
  return h.jsx(lc, { present: r || s.open, children: s.disableHoverableContent ? h.jsx(Kg, __spreadProps(__spreadValues({ side: o }, i), { ref: t })) : h.jsx(eE, __spreadProps(__spreadValues({ side: o }, i), { ref: t })) });
}), eE = v.forwardRef((e, t) => {
  const n = nl(qr, e.__scopeTooltip), r = Ec(qr, e.__scopeTooltip), o = v.useRef(null), i = yt(t, o), [s, l] = v.useState(null), { trigger: a, onClose: u } = n, d = o.current, { onPointerInTransitChange: c } = r, p = v.useCallback(() => {
    l(null), c(false);
  }, [c]), w = v.useCallback((x, g) => {
    const S = x.currentTarget, m = { x: x.clientX, y: x.clientY }, f = iE(m, S.getBoundingClientRect()), y = sE(m, f), E = lE(g.getBoundingClientRect()), P = uE([...y, ...E]);
    l(P), c(true);
  }, [c]);
  return v.useEffect(() => () => p(), [p]), v.useEffect(() => {
    if (a && d) {
      const x = (S) => w(S, d), g = (S) => w(S, a);
      return a.addEventListener("pointerleave", x), d.addEventListener("pointerleave", g), () => {
        a.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", g);
      };
    }
  }, [a, d, w, p]), v.useEffect(() => {
    if (s) {
      const x = (g) => {
        const S = g.target, m = { x: g.clientX, y: g.clientY }, f = (a == null ? void 0 : a.contains(S)) || (d == null ? void 0 : d.contains(S)), y = !aE(m, s);
        f ? p() : y && (p(), u());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [a, d, s, u, p]), h.jsx(Kg, __spreadProps(__spreadValues({}, e), { ref: i }));
}), [tE, nE] = Js(tl, { isInside: false }), rE = nx("TooltipContent"), Kg = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeTooltip: n, children: r, "aria-label": o, onEscapeKeyDown: i, onPointerDownOutside: s } = _a2, l = __objRest(_a2, ["__scopeTooltip", "children", "aria-label", "onEscapeKeyDown", "onPointerDownOutside"]), a = nl(qr, n), u = el(n), { onClose: d } = a;
  return v.useEffect(() => (document.addEventListener(nu, d), () => document.removeEventListener(nu, d)), [d]), v.useEffect(() => {
    if (a.trigger) {
      const c = (p) => {
        const w = p.target;
        w != null && w.contains(a.trigger) && d();
      };
      return window.addEventListener("scroll", c, { capture: true }), () => window.removeEventListener("scroll", c, { capture: true });
    }
  }, [a.trigger, d]), h.jsx(sc, { asChild: true, disableOutsidePointerEvents: false, onEscapeKeyDown: i, onPointerDownOutside: s, onFocusOutside: (c) => c.preventDefault(), onDismiss: d, children: h.jsxs(qS, __spreadProps(__spreadValues(__spreadValues({ "data-state": a.stateAttribute }, u), l), { ref: t, style: __spreadProps(__spreadValues({}, l.style), { "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)", "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)", "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)", "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)", "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)" }), children: [h.jsx(rE, { children: r }), h.jsx(tE, { scope: n, isInside: true, children: h.jsx(_x, { id: a.contentId, role: "tooltip", children: o || r }) })] })) });
});
Gg.displayName = qr;
var Yg = "TooltipArrow", oE = v.forwardRef((e, t) => {
  const _a2 = e, { __scopeTooltip: n } = _a2, r = __objRest(_a2, ["__scopeTooltip"]), o = el(n);
  return nE(Yg, n).isInside ? null : h.jsx(GS, __spreadProps(__spreadValues(__spreadValues({}, o), r), { ref: t }));
});
oE.displayName = Yg;
function iE(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function sE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function lE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [{ x: o, y: t }, { x: n, y: t }, { x: n, y: r }, { x: o, y: r }];
}
function aE(e, t) {
  const { x: n, y: r } = e;
  let o = false;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i].x, a = t[i].y, u = t[s].x, d = t[s].y;
    a > r != d > r && n < (u - l) * (r - a) / (d - a) + l && (o = !o);
  }
  return o;
}
function uE(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), cE(t);
}
function cE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1], s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1], s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var dE = Hg, fE = Qg, pE = qg, Xg = Gg;
const hE = dE, PP = fE, CP = pE, mE = v.forwardRef((_u2, r) => {
  var _v2 = _u2, { className: e, sideOffset: t = 4 } = _v2, n = __objRest(_v2, ["className", "sideOffset"]);
  return h.jsx(Xg, __spreadValues({ ref: r, sideOffset: t, className: Ve("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e) }, n));
});
mE.displayName = Xg.displayName;
const gE = ag("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90", outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-10 px-4 py-2", sm: "h-9 rounded-md px-3", lg: "h-11 rounded-md px-8", icon: "h-10 w-10" } }, defaultVariants: { variant: "default", size: "default" } }), Yi = v.forwardRef((_w2, i) => {
  var _x2 = _w2, { className: e, variant: t, size: n, asChild: r = false } = _x2, o = __objRest(_x2, ["className", "variant", "size", "asChild"]);
  const s = r ? ex : "button";
  return h.jsx(s, __spreadValues({ className: Ve(gE({ variant: t, size: n, className: e })), ref: i }, o));
});
Yi.displayName = "Button";
const Xo = v.forwardRef((_y2, n) => {
  var _z = _y2, { className: e } = _z, t = __objRest(_z, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("rounded-lg border bg-card text-card-foreground shadow-sm min-w-0", e) }, t));
});
Xo.displayName = "Card";
const yE = v.forwardRef((_A, n) => {
  var _B = _A, { className: e } = _B, t = __objRest(_B, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("flex flex-col space-y-1.5 p-6", e) }, t));
});
yE.displayName = "CardHeader";
const vE = v.forwardRef((_C, n) => {
  var _D = _C, { className: e } = _D, t = __objRest(_D, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("text-2xl font-semibold leading-none tracking-tight", e) }, t));
});
vE.displayName = "CardTitle";
const wE = v.forwardRef((_E2, n) => {
  var _F = _E2, { className: e } = _F, t = __objRest(_F, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("text-sm text-muted-foreground", e) }, t));
});
wE.displayName = "CardDescription";
const Ts = v.forwardRef((_G, n) => {
  var _H = _G, { className: e } = _H, t = __objRest(_H, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("p-6 pt-0 min-w-0 overflow-wrap-anywhere", e) }, t));
});
Ts.displayName = "CardContent";
const xE = v.forwardRef((_I, n) => {
  var _J = _I, { className: e } = _J, t = __objRest(_J, ["className"]);
  return h.jsx("div", __spreadValues({ ref: n, className: Ve("flex items-center p-6 pt-0", e) }, t));
});
xE.displayName = "CardFooter";
let Ef = false;
const SE = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "::1"]), EE = [".ngrok-free.dev", ".ngrok.app", ".ngrok.io", ".lhr.life", ".loca.lt"], _E = () => typeof window > "u" ? false : SE.has(window.location.hostname) || window.location.hostname.endsWith(".local") || EE.some((e) => window.location.hostname.endsWith(e)), PE = () => __async(null, null, function* () {
  if (!("serviceWorker" in navigator)) return;
  const e = yield navigator.serviceWorker.getRegistrations();
  if (yield Promise.all(e.map((t) => t.unregister())), "caches" in window) {
    const t = yield caches.keys();
    yield Promise.all(t.map((n) => caches.delete(n)));
  }
}), CE = () => __async(null, null, function* () {
  if ("serviceWorker" in navigator) try {
    if (_E()) return yield PE(), console.log("PWA: Skipping service worker registration on localhost"), false;
    const e = yield navigator.serviceWorker.register("/sw.js");
    return console.log("PWA: Service Worker registered successfully", e.scope), e.addEventListener("updatefound", () => {
      const t = e.installing;
      t && t.addEventListener("statechange", () => {
        t.state === "installed" && (navigator.serviceWorker.controller ? console.log("PWA: New content available, please refresh.") : console.log("PWA: Content cached for offline use."));
      });
    }), true;
  } catch (e) {
    return console.error("PWA: Service Worker registration failed:", e), false;
  }
  return false;
}), kE = () => {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    console.log("PWA: Skipping install prompt setup for iOS device");
    return;
  }
  window.addEventListener("beforeinstallprompt", (t) => {
    t.preventDefault(), console.log("PWA: Install prompt event captured");
  });
}, kP = (e) => __async(null, null, function* () {
  try {
    const t = __spreadProps(__spreadValues({}, e), { tempId: `offline_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, createdOffline: true, timestamp: (/* @__PURE__ */ new Date()).toISOString() }), r = [...Zg(), t];
    localStorage.setItem("offlineOrders", JSON.stringify(r)), console.log("PWA: Order saved offline:", t.tempId);
  } catch (t) {
    throw console.error("PWA: Failed to save offline order:", t), t;
  }
}), Zg = () => {
  try {
    const e = localStorage.getItem("offlineOrders");
    return e ? JSON.parse(e) : [];
  } catch (e) {
    return console.error("PWA: Failed to get offline orders:", e), [];
  }
}, Jg = () => __async(null, null, function* () {
  if (!navigator.onLine) {
    console.log("PWA: Cannot sync orders while offline");
    return;
  }
  const e = Zg();
  if (e.length === 0) {
    console.log("PWA: No offline orders to sync");
    return;
  }
  console.log(`PWA: Syncing ${e.length} offline orders...`);
  const t = [];
  for (const n of e) try {
    const r = yield fetch("/api/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ outletId: n.deliveryInfo.outletId, orderType: n.deliveryInfo.orderType || "delivery", items: n.items.map((o) => ({ productId: o.productId, quantity: o.quantity, unitPrice: o.unitPrice, totalPrice: o.totalPrice, customizations: o.customizations, addons: o.addons, specialInstructions: o.specialInstructions })), customerPhone: n.userInfo.phone, customerEmail: n.userInfo.email, deliveryAddress: n.deliveryInfo.orderType === "delivery" ? `${n.deliveryInfo.address}, ${n.deliveryInfo.city}, ${n.deliveryInfo.state}` : null, specialInstructions: n.deliveryInfo.specialInstructions, total: n.total, syncedFromOffline: true, originalTempId: n.tempId }) });
    r.ok ? (t.push(n.tempId), console.log(`PWA: Successfully synced order ${n.tempId}`)) : console.error(`PWA: Failed to sync order ${n.tempId}:`, yield r.text());
  } catch (r) {
    console.error(`PWA: Error syncing order ${n.tempId}:`, r);
  }
  if (t.length > 0) {
    const n = e.filter((r) => !t.includes(r.tempId));
    localStorage.setItem("offlineOrders", JSON.stringify(n)), console.log(`PWA: Synced ${t.length} orders, ${n.length} remaining`);
  }
}), TE = () => {
  console.log("PWA: Back online, attempting to sync offline orders..."), Jg();
}, RE = () => {
  Ef || typeof window > "u" || (Ef = true, console.log("PWA: Initializing..."), CE(), kE(), window.addEventListener("online", TE), navigator.onLine && setTimeout(Jg, 2e3), console.log("PWA: Initialization complete"));
};
RE();
const AE = () => null, $l = "push-notification-prompt-dismissed", _f = "push-notification-subscribed", Pf = () => {
  const e = localStorage.getItem("auth-token") || localStorage.getItem("authToken") || localStorage.getItem("token");
  return e ? { Authorization: `Bearer ${e}` } : {};
}, Cf = () => {
  const e = navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test(e) ? "ios" : /android/.test(e) ? "android" : "web";
}, kf = () => __async(null, null, function* () {
  const e = yield navigator.serviceWorker.getRegistration();
  if (e != null && e.active) return e;
  e && (yield e.unregister());
  const t = yield navigator.serviceWorker.register("/sw.js", { scope: "/" });
  return t.active || (yield new Promise((n) => {
    const r = t.installing || t.waiting;
    if (!r) {
      n();
      return;
    }
    r.addEventListener("statechange", () => {
      r.state === "activated" && n();
    });
  })), t;
}), OE = () => {
  const [e, t] = v.useState(false), [n, r] = v.useState(false), [o, i] = v.useState(false), { toast: s } = bm(), { data: l } = Cm({ queryKey: ["vapid-key"], queryFn: () => __async(null, null, function* () {
    const d = yield fetch("/api/push/vapid-key");
    if (!d.ok) throw new Error("Failed to fetch VAPID key");
    return d.json();
  }), staleTime: 1 / 0, retry: false });
  v.useEffect(() => {
    if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window) || localStorage.getItem(_f) === "true" || localStorage.getItem($l) === "true" && Notification.permission !== "granted" || Notification.permission === "denied") return;
    if (Notification.permission === "granted") {
      (() => __async(null, null, function* () {
        try {
          const c = yield navigator.serviceWorker.getRegistration();
          if (yield c == null ? void 0 : c.pushManager.getSubscription()) return;
        } catch (e2) {
        }
        t(true);
      }))();
      return;
    }
    const d = setTimeout(() => {
      t(true);
    }, 5e3);
    return () => clearTimeout(d);
  }, []), v.useEffect(() => {
    const d = () => __async(null, null, function* () {
      var w;
      if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window) || Notification.permission !== "granted") return;
      const p = Pf();
      if (p.Authorization) try {
        const x = yield kf();
        let g = yield x.pushManager.getSubscription();
        if (!g) {
          const m = yield fetch("/api/push/vapid-key");
          if (!m.ok) return;
          const { publicKey: f } = yield m.json();
          if (!f) return;
          const y = (E) => {
            const P = "=".repeat((4 - E.length % 4) % 4), k = (E + P).replace(/-/g, "+").replace(/_/g, "/"), C = window.atob(k), T = new Uint8Array(C.length);
            for (let O = 0; O < C.length; ++O) T[O] = C.charCodeAt(O);
            return T;
          };
          g = yield x.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: y(f) });
        }
        const S = g == null ? void 0 : g.toJSON();
        if (!g || !((w = S == null ? void 0 : S.keys) != null && w.p256dh) || !S.keys.auth) return;
        yield fetch("/api/push/subscribe", { method: "POST", headers: __spreadValues({ "Content-Type": "application/json" }, p), body: JSON.stringify({ endpoint: g.endpoint, keys: { p256dh: S.keys.p256dh, auth: S.keys.auth }, deviceType: Cf() }) });
      } catch (x) {
        console.error("Push subscription sync error:", x);
      }
    });
    d();
    const c = () => {
      d();
    };
    return window.addEventListener("auth-change", c), () => {
      window.removeEventListener("auth-change", c);
    };
  }, []);
  const a = () => __async(null, null, function* () {
    var d, c;
    r(true);
    try {
      if ((yield Notification.requestPermission()) !== "granted") {
        s({ title: "Notifications blocked", description: "You can enable notifications in your browser settings", variant: "destructive" }), t(false), localStorage.setItem($l, "true");
        return;
      }
      const w = yield kf();
      if (!(l != null && l.publicKey)) throw new Error("VAPID key not available");
      const x = (f) => {
        const y = "=".repeat((4 - f.length % 4) % 4), E = (f + y).replace(/-/g, "+").replace(/_/g, "/"), P = window.atob(E), k = new Uint8Array(P.length);
        for (let C = 0; C < P.length; ++C) k[C] = P.charCodeAt(C);
        return k;
      }, g = yield w.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: x(l.publicKey) }), S = g.toJSON();
      if (!((d = S.keys) != null && d.p256dh) || !((c = S.keys) != null && c.auth)) throw new Error("Incomplete push subscription");
      if (!(yield fetch("/api/push/subscribe", { method: "POST", headers: __spreadValues({ "Content-Type": "application/json" }, Pf()), body: JSON.stringify({ endpoint: g.endpoint, keys: { p256dh: S.keys.p256dh, auth: S.keys.auth }, deviceType: Cf() }) })).ok) throw new Error("Failed to save subscription");
      localStorage.setItem(_f, "true"), i(true), s({ title: "Notifications enabled!", description: "You'll receive updates about your orders" }), setTimeout(() => {
        t(false);
      }, 2e3);
    } catch (p) {
      console.error("Push subscription error:", p), s({ title: "Something went wrong", description: "Could not enable notifications. Please try again.", variant: "destructive" });
    } finally {
      r(false);
    }
  }), u = () => {
    t(false), localStorage.setItem($l, "true");
  };
  return e ? o ? h.jsx("div", { className: "fixed bottom-20 left-4 right-4 z-50 max-w-md mx-auto", children: h.jsx(Xo, { className: "bg-white shadow-lg border border-green-200", children: h.jsx(Ts, { className: "p-4", children: h.jsxs("div", { className: "flex items-center space-x-3", children: [h.jsx("div", { className: "flex-shrink-0", children: h.jsx("div", { className: "w-10 h-10 bg-green-50 rounded-full flex items-center justify-center", children: h.jsx(Qx, { className: "w-5 h-5 text-green-600" }) }) }), h.jsx("div", { className: "flex-1", children: h.jsx("p", { className: "text-sm font-medium text-gray-900", children: "Notifications enabled!" }) })] }) }) }) }) : h.jsx("div", { className: "fixed bottom-20 left-4 right-4 z-50 max-w-md mx-auto", children: h.jsx(Xo, { className: "bg-white shadow-lg border border-gray-200", children: h.jsx(Ts, { className: "p-4", children: h.jsxs("div", { className: "flex items-start space-x-3", children: [h.jsx("div", { className: "flex-shrink-0", children: h.jsx("div", { className: "w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center", children: h.jsx(df, { className: "w-6 h-6 text-red-600" }) }) }), h.jsxs("div", { className: "flex-1 min-w-0", children: [h.jsx("h3", { className: "text-sm font-semibold text-gray-900", children: "Stay Updated" }), h.jsx("p", { className: "text-sm text-gray-600 mt-1", children: "Get notified about order updates, new deals, and promotions!" }), h.jsxs("div", { className: "flex items-center space-x-2 mt-3", children: [h.jsx(Yi, { size: "sm", onClick: a, disabled: n, className: "bg-[#F02819] hover:bg-[#d92416] text-white", children: n ? h.jsxs(h.Fragment, { children: [h.jsx("span", { className: "animate-spin mr-2", children: "\u23F3" }), "Enabling..."] }) : h.jsxs(h.Fragment, { children: [h.jsx(df, { className: "w-4 h-4 mr-1" }), "Enable"] }) }), h.jsx(Yi, { size: "sm", variant: "ghost", onClick: u, className: "text-gray-500", children: "Not now" })] })] }), h.jsx(Yi, { size: "icon", variant: "ghost", className: "flex-shrink-0 h-8 w-8", onClick: u, children: h.jsx(cg, { className: "h-4 w-4" }) })] }) }) }) }) : null;
}, NE = () => {
  const [e, t] = v.useState(navigator.onLine), [n, r] = v.useState(false);
  return v.useEffect(() => {
    const o = () => {
      t(true), r(false);
    }, i = () => {
      t(false), r(true);
    };
    return window.addEventListener("online", o), window.addEventListener("offline", i), () => {
      window.removeEventListener("online", o), window.removeEventListener("offline", i);
    };
  }, []), e && !n ? null : h.jsx("div", { className: "fixed top-4 left-4 right-4 z-50 max-w-md mx-auto", children: h.jsx(Xo, { className: `p-3 ${e ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`, children: h.jsx("div", { className: "flex items-center space-x-2", children: e ? h.jsxs(h.Fragment, { children: [h.jsx(Kx, { className: "w-5 h-5 text-green-600" }), h.jsx("span", { className: "text-sm font-medium text-green-800", children: "Back online! Your orders will sync automatically." })] }) : h.jsxs(h.Fragment, { children: [h.jsx(Gx, { className: "w-5 h-5 text-red-600" }), h.jsx("span", { className: "text-sm font-medium text-red-800", children: "You're offline. You can still browse the menu, but orders will be saved and sent when you're back online." })] }) }) }) });
};
function bE() {
  const [e, t] = v.useState(null), [n, r] = v.useState(true), o = (s) => __async(null, null, function* () {
    try {
      const l = yield nf("POST", "/api/store-referral", { referralCode: s });
      console.log("Referral code stored:", l), t(s);
    } catch (l) {
      console.error("Failed to store referral code:", l);
    }
  }), i = () => __async(null, null, function* () {
    try {
      r(true);
      const l = yield (yield nf("GET", "/api/current-referral")).json();
      return t(l.referralCode), l.referralCode;
    } catch (s) {
      return console.error("Failed to get referral code:", s), t(null), null;
    } finally {
      r(false);
    }
  });
  return v.useEffect(() => {
    const l = new URLSearchParams(window.location.search).get("ref");
    if (l) {
      console.log("Found referral code in URL:", l), o(l);
      const a = new URL(window.location.href);
      a.searchParams.delete("ref"), window.history.replaceState({}, "", a);
    } else i();
  }, []), { currentReferralCode: e, isLoading: n, storeReferralCode: o, getCurrentReferralCode: i };
}
function Gr(e) {
  try {
    return btoa(e.toLowerCase().trim()).slice(0, 20);
  } catch (t) {
    return console.warn("Failed to hash data for privacy:", t), e.substring(0, 5) + "*".repeat(Math.max(0, e.length - 5));
  }
}
function IE() {
  if (typeof window > "u" || window.snaptr) return;
  (function(t, n, r) {
    if (!t.snaptr) {
      var o = t.snaptr = function(...a) {
        var u;
        o.handleRequest ? o.handleRequest(...a) : (u = o.queue) == null || u.push(a);
      };
      o.queue = [];
      var i = "script", s = n.createElement(i);
      s.async = true, s.src = r;
      var l = n.getElementsByTagName(i)[0];
      l.parentNode.insertBefore(s, l);
    }
  })(window, document, "https://sc-static.net/scevent.min.js");
  const e = window.snaptr;
  e == null || e("init", "65691d96-01a4-4b99-a9d5-7b542cc0b55e", { user_email: "__INSERT_USER_EMAIL__" });
}
function TP(e) {
  var n;
  if (typeof window > "u" || !window.snaptr) return;
  const t = {};
  e != null && e.item_ids && (t.item_ids = e.item_ids), e != null && e.item_category && (t.item_category = e.item_category), e != null && e.uuid_c1 && (t.uuid_c1 = e.uuid_c1), e != null && e.user_email && (t.user_email = e.user_email, t.user_hashed_email = Gr(e.user_email)), e != null && e.user_phone_number && (t.user_phone_number = e.user_phone_number, t.user_hashed_phone_number = Gr(e.user_phone_number)), (n = window.snaptr) == null || n.call(window, "track", "PAGE_VIEW", t);
}
function RP(e) {
  var n;
  if (typeof window > "u" || !window.snaptr) return;
  const t = { price: e.price, currency: e.currency || "NGN", item_ids: e.item_ids, item_category: e.item_category || "food", number_items: e.number_items, uuid_c1: e.uuid_c1 };
  e.user_email && (t.user_email = e.user_email, t.user_hashed_email = Gr(e.user_email)), e.user_phone_number && (t.user_phone_number = e.user_phone_number, t.user_hashed_phone_number = Gr(e.user_phone_number)), (n = window.snaptr) == null || n.call(window, "track", "ADD_CART", t);
}
function AP(e) {
  var n;
  if (typeof window > "u" || !window.snaptr) return;
  const t = { price: e.price, item_category: e.item_category || "food", payment_info_available: 1, uuid_c1: e.uuid_c1 };
  e.user_email && (t.user_email = e.user_email, t.user_hashed_email = Gr(e.user_email)), e.user_phone_number && (t.user_phone_number = e.user_phone_number, t.user_hashed_phone_number = Gr(e.user_phone_number)), (n = window.snaptr) == null || n.call(window, "track", "PURCHASE", t);
}
const jE = [{ slug: "bigmouthchops", name: "BigMouthChops", domain: "bigmouthchops.com", basePath: "/bigmouthchops", supportEmail: "support@bigmouthchops.com", logoUrl: null, colorScheme: "#c2410c" }, { slug: "yumbulk", name: "YumBulk", domain: "bulk.eatyum.food", basePath: "/yumbulk", supportEmail: "support@bulk.eatyum.food", logoUrl: null, colorScheme: "#006400", buttonColor: "#FFD700" }], ey = jE.map((e) => __spreadProps(__spreadValues({}, e), { basePath: LE(e.basePath), domain: DE(e.domain) }));
function LE(e) {
  const t = e.trim();
  if (!t) return "";
  const n = t.startsWith("/") ? t : `/${t}`;
  return n.length === 1 ? "/" : n.endsWith("/") ? n.slice(0, -1) : n;
}
function DE(e) {
  return e ? e.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0].split(":")[0] : "";
}
[...ey.map((e) => e.basePath)];
const ME = (e) => e ? e.startsWith("/") ? e : `/${e}` : "/", rl = (e) => {
  var _a2;
  const t = ME(e != null ? e : typeof window < "u" ? window.location.pathname : "/"), n = ey.find(({ basePath: r }) => !r || r === "/" ? false : t === r || t.startsWith(`${r}/`));
  return (_a2 = n == null ? void 0 : n.basePath) != null ? _a2 : "";
}, FE = () => __async(null, null, function* () {
  const e = new URLSearchParams();
  typeof window < "u" && window.location.hostname && e.set("domain", window.location.hostname);
  const t = rl();
  t && e.set("brandPath", t);
  const n = e.toString(), r = `/api/brands/current${n ? `?${n}` : ""}`, o = yield fetch(r);
  return o.ok ? o.json() : null;
}), zE = () => Cm({ queryKey: ["/api/brands/current"], queryFn: FE, staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3 }), $E = () => {
  const e = "G-LQEPE2DTXW", t = document.createElement("script");
  t.async = true, t.src = `https://www.googletagmanager.com/gtag/js?id=${e}`, document.head.appendChild(t);
  const n = document.createElement("script");
  n.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${e}', {
      currency: 'NGN',
      country: 'NG',
      send_page_view: false
    });
  `, document.head.appendChild(n);
}, UE = (e) => {
  if (typeof window > "u" || !window.gtag) return;
  window.gtag("config", "G-LQEPE2DTXW", { page_path: e });
}, OP = (e, t, n, r) => {
  typeof window > "u" || !window.gtag || window.gtag("event", e, { event_category: t, event_label: n, value: r });
}, On = (e, t = 1) => {
  var n, r;
  return { item_id: ((n = e.id) == null ? void 0 : n.toString()) || "", item_name: e.name || "", category: ((r = e.category) == null ? void 0 : r.name) || "Food", price: Number(e.price || 0) / 100 || 0, quantity: t, currency: "NGN", item_brand: "EatYum", item_variant: e.description ? e.description.substring(0, 50) : void 0 };
}, ol = (e) => e.product ? e.product : { id: e.productId, name: e.name, price: typeof e.unitPrice == "number" ? e.unitPrice * 100 : e.unitPrice }, NP = (e, t = "Product List") => {
  if (typeof window > "u" || !window.gtag || !(e != null && e.length)) return;
  const n = e.slice(0, 20).map((r, o) => __spreadProps(__spreadValues({}, On(r)), { index: o }));
  window.gtag("event", "view_item_list", { item_list_id: t.toLowerCase().replace(/\s/g, "_"), item_list_name: t, items: n });
}, bP = (e) => {
  if (typeof window > "u" || !window.gtag || !e) return;
  const t = [On(e)];
  window.gtag("event", "view_item", { currency: "NGN", value: t[0].price, items: t });
}, IP = (e, t = 1, n) => {
  if (typeof window > "u" || !window.gtag || !e) return;
  const r = On(e, t);
  if (n && n.length > 0) {
    const i = n.map((s) => s.name).join(", ");
    r.item_variant = i.substring(0, 50);
  }
  const o = r.price * t;
  window.gtag("event", "add_to_cart", { currency: "NGN", value: o, items: [r] });
}, jP = (e, t = 1) => {
  if (typeof window > "u" || !window.gtag || !e) return;
  const n = On(e, t), r = n.price * t;
  window.gtag("event", "remove_from_cart", { currency: "NGN", value: r, items: [n] });
}, LP = (e) => {
  if (typeof window > "u" || !window.gtag || !(e != null && e.length)) return;
  const t = e.map((r) => On(ol(r), r.quantity)), n = t.reduce((r, o) => r + o.price * o.quantity, 0);
  window.gtag("event", "view_cart", { currency: "NGN", value: n, items: t });
}, DP = (e, t) => {
  if (typeof window > "u" || !window.gtag || !(e != null && e.length)) return;
  const n = e.map((o) => On(ol(o), o.quantity)), r = n.reduce((o, i) => o + i.price * i.quantity, 0);
  window.gtag("event", "begin_checkout", { currency: "NGN", value: r, coupon: t, items: n });
}, MP = (e, t) => {
  if (typeof window > "u" || !window.gtag || !(e != null && e.length)) return;
  const n = e.map((o) => On(ol(o), o.quantity)), r = n.reduce((o, i) => o + i.price * i.quantity, 0);
  window.gtag("event", "add_payment_info", { currency: "NGN", value: r, payment_type: t, items: n });
}, FP = (e, t, n, r = 0, o = 0, i, s) => {
  if (typeof window > "u" || !window.gtag || !(t != null && t.length)) return;
  const l = t.map((a) => On(ol(a), a.quantity));
  window.gtag("event", "purchase", { transaction_id: e, value: n / 100, currency: "NGN", coupon: i, shipping: r / 100, tax: 0, affiliation: s || "EatYum", items: l });
}, zP = (e, t, n) => {
  typeof window > "u" || !window.gtag || window.gtag("event", n ? "apply_coupon" : "coupon_failed", { event_category: "Promotion", coupon_name: e, discount_amount: t / 100, currency: "NGN" });
}, $P = (e, t) => {
  typeof window > "u" || !window.gtag || window.gtag("event", "select_delivery_method", { event_category: "Order", delivery_method: e, scheduled: "no", scheduled_time: t });
}, Tf = (e, t) => {
  typeof window > "u" || !window.gtag || window.gtag("event", "page_engagement", { event_category: "Engagement", page_name: e, time_spent_seconds: Math.round(t) });
}, VE = () => {
  const [e] = Hs(), t = v.useRef(e), n = v.useRef(Date.now());
  v.useEffect(() => {
    const r = Date.now();
    if (t.current !== e && t.current) {
      const o = (r - n.current) / 1e3;
      Tf(t.current, o);
    }
    e !== t.current && (UE(e), t.current = e, n.current = r);
  }, [e]), v.useEffect(() => () => {
    const r = (Date.now() - n.current) / 1e3;
    Tf(e, r);
  }, [e]);
}, WE = (e) => {
  const t = typeof e[0] == "string" ? e[0] : "";
  return t ? t.startsWith("/api/products") || t.startsWith("/api/admin/products") || t.startsWith("/api/admin/products/availability") || t.startsWith("/api/admin/product-availability") : false;
};
function BE() {
  const e = _m();
  v.useEffect(() => {
    if (typeof window > "u") return;
    let t = null, n = false, r = null;
    const o = () => {
      const i = window.location.protocol === "https:" ? "wss:" : "ws:", s = window.location.hostname, l = window.location.port ? `:${window.location.port}` : "", a = `${i}//${s}${l}/availability-ws`;
      r = new WebSocket(a), r.onmessage = (u) => {
        try {
          const d = JSON.parse(u.data);
          if ((d == null ? void 0 : d.type) !== "availability_updated") return;
          e.invalidateQueries({ predicate: (c) => WE(c.queryKey) });
        } catch (d) {
          console.error("Failed to process availability realtime event:", d);
        }
      }, r.onclose = () => {
        n || (t = window.setTimeout(() => {
          o();
        }, 1500));
      }, r.onerror = () => {
        r == null || r.close();
      };
    };
    return o(), () => {
      n = true, t !== null && window.clearTimeout(t), r == null || r.close();
    };
  }, [e]);
}
const ty = v.createContext(void 0);
function HE({ children: e }) {
  const [t, n] = v.useState(null), [r, o] = v.useState(true), i = v.useRef(true);
  v.useEffect(() => () => {
    i.current = false;
  }, []);
  const s = v.useCallback(() => __async(null, null, function* () {
    const a = localStorage.getItem("adminToken");
    if (!a) {
      i.current && (n(null), o(false));
      return;
    }
    i.current && o(true);
    try {
      const u = yield fetch("/api/admin/auth/me", { method: "GET", headers: { Authorization: `Bearer ${a}`, "Content-Type": "application/json" } });
      if (!i.current) return;
      if (u.ok) {
        const d = yield u.json();
        n(d);
      } else localStorage.removeItem("adminToken"), n(null);
    } catch (e2) {
      i.current && (localStorage.removeItem("adminToken"), n(null));
    } finally {
      i.current && o(false);
    }
  }), []);
  v.useEffect(() => {
    s();
  }, [s]);
  const l = v.useCallback(() => {
    localStorage.removeItem("adminToken"), i.current && (n(null), o(false));
  }, []);
  return h.jsx(ty.Provider, { value: { admin: t, isLoading: r, refreshAdmin: s, logout: l }, children: e });
}
function QE() {
  const e = v.useContext(ty);
  if (!e) throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  return e;
}
function q({ children: e }) {
  const { admin: t, isLoading: n } = QE();
  return n ? h.jsx("div", { className: "flex items-center justify-center min-h-screen", children: h.jsx(qx, { className: "h-8 w-8 animate-spin text-#F02819" }) }) : t ? h.jsx(h.Fragment, { children: e }) : h.jsx(d0, { to: "/control/login" });
}
function qE() {
  return h.jsx("div", { className: "min-h-screen w-full flex items-center justify-center bg-gray-50", children: h.jsx(Xo, { className: "w-full max-w-md mx-4", children: h.jsxs(Ts, { className: "pt-6", children: [h.jsxs("div", { className: "flex mb-4 gap-2", children: [h.jsx(Hx, { className: "h-8 w-8 text-red-500" }), h.jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" })] }), h.jsx("p", { className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" })] }) }) });
}
const Rf = (e) => {
  if (!(typeof window > "u")) {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(e);
      return;
    }
    window.setTimeout(e, 1);
  }
}, $ = (e) => v.lazy(e), GE = $(() => z(() => import("./home-BfXSjIBe.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]))), KE = $(() => z(() => import("./checkout-FLKP6aYe.js"), __vite__mapDeps([53, 10, 11, 54, 5, 3, 55, 8, 9, 4, 12, 13, 14, 15, 16, 17, 18, 19, 56, 57, 7, 49, 50, 51, 52, 30, 58, 25, 41, 43, 20, 44, 45, 46, 32, 59, 28, 26]))), YE = $(() => z(() => import("./thank-you-CgF8KpLI.js"), __vite__mapDeps([60, 61, 56, 19, 62, 58, 9, 4, 10, 11, 12, 14, 25, 16, 41, 13, 27, 15, 63, 50, 64, 65, 66, 48]))), Af = $(() => z(() => import("./order-tracking-Bi5kUPN9.js"), __vite__mapDeps([67, 18, 61, 54, 19, 13, 20, 36, 37, 38, 39, 68, 69, 14, 41, 27, 70, 30, 71, 72, 64, 66, 63, 50, 17, 29, 6]))), XE = $(() => z(() => import("./admin-login-BMyliT2W.js"), __vite__mapDeps([73, 10, 11, 74, 75]))), Ii = $(() => z(() => import("./admin-dashboard-Oc256O1M.js"), __vite__mapDeps([76, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 18, 85, 10, 54, 57, 9, 86, 87, 88, 89, 90, 34, 91, 92, 33, 93, 71, 94, 95, 96, 20, 72, 23, 75, 97, 98, 99]))), ZE = $(() => z(() => import("./admin-product-view-CVfTm9Qq.js"), __vite__mapDeps([100, 96, 85, 10, 54, 61, 91, 55, 101, 5, 3, 88, 89, 11, 90, 9, 4, 77, 78, 29, 79, 7, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 20, 23, 86, 93, 33, 18, 14, 74, 75, 102]))), JE = $(() => z(() => import("./admin-users-CefYZ3DE.js"), __vite__mapDeps([103, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 97, 9, 86, 91, 104, 54, 101, 5, 36, 37, 38, 39, 72, 32, 105, 23, 71, 106, 33, 64, 107, 108]))), e_ = $(() => z(() => import("./admin-user-details-DyaHmx0z.js"), __vite__mapDeps([109, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 97, 101, 5, 36, 37, 38, 39, 104, 18, 9, 54, 14, 71, 32, 106, 110, 107, 111, 112]))), t_ = $(() => z(() => import("./admin-orders-D4hFACED.js"), __vite__mapDeps([113, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 54, 57, 97, 101, 5, 9, 114, 86, 98, 36, 37, 38, 39, 68, 20, 115, 116, 72, 46, 99, 105, 23, 111, 32, 117, 75, 118, 108, 33, 119, 120]))), n_ = $(() => z(() => import("./admin-order-details--YEu4Qn7.js"), __vite__mapDeps([121, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 9, 56, 10, 54, 36, 37, 38, 39, 68, 119, 52, 51, 96, 85, 46, 122, 123, 20, 115, 116, 72, 14, 117, 26, 111, 110, 102, 17, 50, 120]))), r_ = $(() => z(() => import("./admin-payouts-CQ1bMrV3.js"), __vite__mapDeps([124, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 98, 20, 9, 10, 97, 54, 46, 32, 26, 99, 125, 75, 122]))), o_ = $(() => z(() => import("./admin-archived-orders-4rdPWeUy.js"), __vite__mapDeps([126, 18, 97, 61, 9, 4, 77, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 68, 36, 37, 38, 39, 117, 32, 75, 118]))), i_ = $(() => z(() => import("./admin-create-order-BGmI8Bdo.js"), __vite__mapDeps([127, 18, 89, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 96, 85, 54, 52, 51, 56, 9, 57, 20, 95, 23, 21, 33]))), s_ = $(() => z(() => import("./admin-rbac-users-BrLlzPwX.js"), __vite__mapDeps([128, 18, 10, 11, 78, 3, 4, 55, 29, 79, 7, 61, 91, 9, 86, 101, 5, 77, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 98, 102, 118, 110, 33, 23, 93, 45]))), l_ = $(() => z(() => import("./admin-product-availability-B9fqAhFl.js"), __vite__mapDeps([129, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 9, 10, 56, 91, 101, 5, 54, 130, 46, 131, 23, 132]))), a_ = $(() => z(() => import("./admin-delivery-settings-Bn2pLDt6.js"), __vite__mapDeps([133, 18, 85, 96, 11, 61, 20, 91, 55, 97, 77, 4, 3, 78, 29, 79, 7, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 102, 93, 33]))), u_ = $(() => z(() => import("./admin-promo-codes-pFwrj8UK.js"), __vite__mapDeps([134, 18, 61, 9, 4, 96, 85, 10, 54, 78, 3, 55, 29, 79, 7, 11, 57, 77, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 93, 33, 32]))), c_ = $(() => z(() => import("./admin-banners-DzDbT1sm.js"), __vite__mapDeps([135, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 85, 10, 54, 91, 101, 5, 57, 97, 9, 94, 95, 75, 74, 110, 33]))), d_ = $(() => z(() => import("./admin-spin-win-D8qTtHt8.js"), __vite__mapDeps([136, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 54, 91, 101, 5, 97, 9, 94, 95, 96, 85, 132, 110, 33, 23, 72, 44, 99, 137, 138]))), f_ = $(() => z(() => import("./admin-settings-DiQIJNwZ.js"), __vite__mapDeps([139, 18, 96, 85, 10, 11, 91, 55, 77, 61, 4, 3, 78, 29, 79, 7, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 9, 114, 140, 87, 45, 99, 26, 63, 107, 64, 117]))), p_ = $(() => z(() => import("./admin-analytics-br4WzYCF.js"), __vite__mapDeps([141, 78, 3, 4, 55, 29, 79, 7, 61, 97, 101, 5, 10, 77, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 138, 137, 118, 112, 32, 130, 142, 106, 46, 120, 143, 125]))), h_ = $(() => z(() => import("./admin-leads-CS_9joDs.js"), __vite__mapDeps([144, 18, 61, 11, 54, 78, 3, 4, 55, 29, 79, 7, 101, 5, 9, 77, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 71, 110]))), m_ = $(() => z(() => import("./admin-order-analytics-3coIntK1.js"), __vite__mapDeps([145, 18, 61, 78, 3, 4, 55, 29, 79, 7, 54, 77, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 36, 37, 38, 39, 72, 119, 99, 105, 120, 102]))), g_ = $(() => z(() => import("./admin-reviews-BwmaGg8d.js"), __vite__mapDeps([146, 18, 61, 10, 54, 78, 3, 4, 55, 29, 79, 7, 77, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 101, 5, 46, 32, 147, 99, 23, 75, 65, 137]))), Of = $(() => z(() => import("./admin-referrals-rtfTnp2Q.js"), __vite__mapDeps([148, 61, 97, 101, 5, 3, 77, 4, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 142, 112, 64, 26, 99, 38, 37]))), y_ = $(() => z(() => import("./admin-r2-test-Bn2ScJiu.js"), __vite__mapDeps([149, 61, 94, 10, 11, 81, 95, 120]))), v_ = $(() => z(() => import("./admin-sms-provider-C_1940qQ.js"), __vite__mapDeps([150, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 54, 120]))), w_ = $(() => z(() => import("./admin-brands-Dpsx6JYS.js"), __vite__mapDeps([151, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 96, 85, 10, 91, 123, 94, 95]))), x_ = $(() => z(() => import("./partners-Dpdemx8u.js"), __vite__mapDeps([152, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 85, 10, 54, 91, 9, 97, 89, 88, 75, 99, 63, 33, 93]))), S_ = $(() => z(() => import("./partner-details-dhb9vHKK.js"), __vite__mapDeps([153, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 47, 101, 5, 14, 71, 107, 99, 75, 32]))), E_ = $(() => z(() => import("./partner-earnings-0BF4BjEw.js"), __vite__mapDeps([154, 61, 47, 32, 80, 107, 99, 75, 82]))), __ = $(() => z(() => import("./my-orders-CyTBSY_I.js"), __vite__mapDeps([155, 61, 10, 78, 3, 4, 55, 29, 79, 7, 1, 2, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 68, 36, 37, 38, 39, 69, 75, 118, 111, 41, 70, 120, 46]))), P_ = $(() => z(() => import("./glovo-test-DRKquJsO.js"), __vite__mapDeps([156, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 120]))), C_ = $(() => z(() => import("./admin-glovo-integration-BVSCIWYx.js"), __vite__mapDeps([157, 18, 10, 11, 61, 77, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 140, 87, 123, 101, 5, 97, 46, 158, 64, 131, 33, 125, 99, 105]))), k_ = $(() => z(() => import("./admin-chowdeck-integration-BS5D53Y3.js"), __vite__mapDeps([159, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 91, 46, 102, 63, 158, 33]))), T_ = $(() => z(() => import("./admin-foodelo-integration-3V8ZNrqK.js"), __vite__mapDeps([160, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 91, 46, 102, 158, 63, 33]))), R_ = $(() => z(() => import("./admin-email-logs-3VivBCKd.js"), __vite__mapDeps([161, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 10, 97, 47, 101, 5, 18, 9, 46, 23, 38, 37, 91, 102, 92, 65, 75, 45, 143, 120, 99, 105, 107, 26]))), A_ = $(() => z(() => import("./admin-notification-preferences-Uf5Q0zP8.js"), __vite__mapDeps([162, 18, 77, 61, 4, 3, 78, 55, 29, 79, 7, 27, 25, 80, 48, 11, 28, 41, 22, 69, 30, 16, 81, 70, 35, 82, 15, 83, 84, 24, 40, 6, 42, 91, 101, 5, 47, 123, 92, 46, 17, 107, 26]))), O_ = $(() => z(() => import("./tap-game-XPp3jz09.js"), __vite__mapDeps([163, 14, 83, 119, 44]))), N_ = $(() => z(() => import("./wallet-page-C_p5P8hV.js"), __vite__mapDeps([164, 19, 10, 61, 101, 5, 3, 13, 59, 26, 143, 82, 15, 63, 41, 39, 37]))), b_ = $(() => z(() => import("./points-page-CenTuQq5.js"), __vite__mapDeps([165, 18, 61, 56, 19, 62, 27, 14, 15, 41, 63, 79, 29, 44, 48, 38, 37]))), I_ = $(() => z(() => import("./profile-page-5biplcbQ.js"), __vite__mapDeps([166, 19, 56, 13, 25, 15, 63, 66, 26, 27]))), j_ = $(() => z(() => import("./edit-profile-page-CXYIxZZH.js"), __vite__mapDeps([167, 19, 18, 10, 11, 14, 25, 16, 143, 45, 71, 102]))), L_ = $(() => z(() => import("./addresses-DrFhiVAI.js"), __vite__mapDeps([168, 61, 18, 19, 14, 22, 30, 27, 93, 33]))), D_ = $(() => z(() => import("./share-earn-page-UEUTOpTp.js"), __vite__mapDeps([169, 19, 61, 13, 14, 15, 83, 66, 82, 63, 17, 143, 41, 39, 37]))), M_ = $(() => z(() => import("./campaign-free-Bc2FugQU.js"), [])), F_ = $(() => z(() => import("./terms-of-service-DaxqTUvE.js"), __vite__mapDeps([170, 56, 14, 116, 84, 70, 82, 111, 40, 71, 16]))), z_ = $(() => z(() => import("./kitchen-display-W7mYQmEZ.js"), __vite__mapDeps([171, 18, 78, 3, 4, 55, 29, 79, 7, 61, 36, 37, 38, 39, 68, 41, 69, 82, 119]))), $_ = $(() => z(() => import("./debug-api-Dt_z-c9B.js"), __vite__mapDeps([172, 40, 120]))), U_ = $(() => z(() => import("./yum-bulk-DM3Elx8p.js"), __vite__mapDeps([173, 8, 9, 4, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 2, 3, 5, 6, 7, 20, 21, 22, 23, 49, 50, 51, 52, 30, 31, 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 47, 25, 29, 105, 71]))), V_ = $(() => z(() => import("./review-D1s8OAH6.js"), __vite__mapDeps([174, 18, 54, 120, 147, 6]))), W_ = $(() => z(() => import("./spin-win-C7bflSeY.js"), []));
function B_() {
  return BE(), null;
}
function H_() {
  var o;
  VE();
  const { data: e } = zE(), t = ((o = e == null ? void 0 : e.name) == null ? void 0 : o.trim().toLowerCase()) === "yumbulk", n = rl() === "/yumbulk", r = t || n ? U_ : GE;
  return h.jsx(v.Suspense, { fallback: h.jsx("div", { className: "flex items-center justify-center min-h-screen", children: h.jsx("div", { className: "animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" }) }), children: h.jsxs(c0, { children: [h.jsx(M, { path: "/", component: r }), h.jsx(M, { path: "/p/:partnerSlug", component: r }), h.jsx(M, { path: "/checkout", component: KE }), h.jsx(M, { path: "/thank-you", component: YE }), h.jsx(M, { path: "/orders/:orderNumber/track", component: Af }), h.jsx(M, { path: "/track/:orderNumber", component: Af }), h.jsx(M, { path: "/review/:token", component: V_ }), h.jsx(M, { path: "/my-orders", component: __ }),  h.jsx(M, { path: "/wallet", component: N_ }), h.jsx(M, { path: "/points", component: b_ }), h.jsx(M, { path: "/profile", component: I_ }), h.jsx(M, { path: "/profile/edit", component: j_ }), h.jsx(M, { path: "/addresses", component: L_ }), h.jsx(M, { path: "/share-earn", component: D_ }), h.jsx(M, { path: "/free", component: M_ }),  h.jsx(M, { path: "/terms-of-service", component: F_ }), h.jsx(M, { path: "/kitchen-display", component: z_ }), h.jsx(M, { path: "/debug-api", component: $_ }), h.jsx(M, { path: "/partner-earnings/:slug", component: E_ }), h.jsx(M, { path: "/control/login", component: XE }), h.jsx(M, { path: "/control", component: () => h.jsx(q, { children: h.jsx(Ii, {}) }) }), h.jsx(M, { path: "/control/outlets", component: () => h.jsx(q, { children: h.jsx(Ii, {}) }) }), h.jsx(M, { path: "/control/categories", component: () => h.jsx(q, { children: h.jsx(Ii, {}) }) }), h.jsx(M, { path: "/control/products/:id", component: () => h.jsx(q, { children: h.jsx(ZE, {}) }) }), h.jsx(M, { path: "/control/products", component: () => h.jsx(q, { children: h.jsx(Ii, {}) }) }), h.jsx(M, { path: "/control/orders", component: () => h.jsx(q, { children: h.jsx(t_, {}) }) }), h.jsx(M, { path: "/control/orders/:id", component: () => h.jsx(q, { children: h.jsx(n_, {}) }) }), h.jsx(M, { path: "/control/payouts", component: () => h.jsx(q, { children: h.jsx(r_, {}) }) }), h.jsx(M, { path: "/control/archived-orders", component: () => h.jsx(q, { children: h.jsx(o_, {}) }) }), h.jsx(M, { path: "/control/create-order", component: () => h.jsx(q, { children: h.jsx(i_, {}) }) }), h.jsx(M, { path: "/control/reviews", component: () => h.jsx(q, { children: h.jsx(g_, {}) }) }), h.jsx(M, { path: "/control/referrals", component: () => h.jsx(q, { children: h.jsx(Of, {}) }) }), h.jsx(M, { path: "/control/users", component: () => h.jsx(q, { children: h.jsx(JE, {}) }) }), h.jsx(M, { path: "/control/users/:userId", component: () => h.jsx(q, { children: h.jsx(e_, {}) }) }), h.jsx(M, { path: "/control/referrals", component: () => h.jsx(q, { children: h.jsx(Of, {}) }) }), h.jsx(M, { path: "/control/analytics", component: () => h.jsx(q, { children: h.jsx(p_, {}) }) }), h.jsx(M, { path: "/control/settings", component: () => h.jsx(q, { children: h.jsx(f_, {}) }) }), h.jsx(M, { path: "/control/rbac-users", component: () => h.jsx(q, { children: h.jsx(s_, {}) }) }), h.jsx(M, { path: "/control/product-availability", component: () => h.jsx(q, { children: h.jsx(l_, {}) }) }), h.jsx(M, { path: "/control/delivery-settings", component: () => h.jsx(q, { children: h.jsx(a_, {}) }) }), h.jsx(M, { path: "/control/promo-codes", component: () => h.jsx(q, { children: h.jsx(u_, {}) }) }), h.jsx(M, { path: "/control/banners", component: () => h.jsx(q, { children: h.jsx(c_, {}) }) }), h.jsx(M, { path: "/control/spin-win", component: () => h.jsx(q, { children: h.jsx(d_, {}) }) }), h.jsx(M, { path: "/control/campaigns", component: () => h.jsx(q, { children: h.jsx(R_, {}) }) }), h.jsx(M, { path: "/control/notification-preferences", component: () => h.jsx(q, { children: h.jsx(A_, {}) }) }), h.jsx(M, { path: "/control/brands", component: () => h.jsx(q, { children: h.jsx(w_, {}) }) }), h.jsx(M, { path: "/control/leads", component: () => h.jsx(q, { children: h.jsx(h_, {}) }) }), h.jsx(M, { path: "/control/order-analytics", component: () => h.jsx(q, { children: h.jsx(m_, {}) }) }), h.jsx(M, { path: "/control/r2-test", component: () => h.jsx(q, { children: h.jsx(y_, {}) }) }), h.jsx(M, { path: "/control/sms-provider", component: () => h.jsx(q, { children: h.jsx(v_, {}) }) }), h.jsx(M, { path: "/control/partners", component: () => h.jsx(q, { children: h.jsx(x_, {}) }) }), h.jsx(M, { path: "/control/partners/:id", component: () => h.jsx(q, { children: h.jsx(S_, {}) }) }), h.jsx(M, { path: "/control/glovo-test", component: () => h.jsx(q, { children: h.jsx(P_, {}) }) }), h.jsx(M, { path: "/control/glovo", component: () => h.jsx(q, { children: h.jsx(C_, {}) }) }), h.jsx(M, { path: "/control/chowdeck", component: () => h.jsx(q, { children: h.jsx(k_, {}) }) }), h.jsx(M, { path: "/control/foodelo", component: () => h.jsx(q, { children: h.jsx(T_, {}) }) }), h.jsx(M, { component: qE })] }) });
}
function Q_() {
  const [e] = Hs(), t = rl(typeof window < "u" ? window.location.pathname : e);
  bE(), v.useEffect(() => {
    Rf(() => {
      $E();
    });
  }, []), v.useEffect(() => {
    Rf(() => {
      IE();
    });
  }, []);
  try {
    return h.jsxs(N0, { client: Nm, children: [h.jsx(B_, {}), h.jsxs(hE, { children: [h.jsx(L1, {}), h.jsx(NE, {}), h.jsx(AE, {}), h.jsx(OE, {}), h.jsx(dm, { base: t || void 0, children: h.jsx(H_, {}) })] })] });
  } catch (n) {
    return console.error("App Error:", n), h.jsxs("div", { style: { padding: "20px", color: "red" }, children: [h.jsx("h1", { children: "Application Error" }), h.jsxs("p", { children: ["Something went wrong: ", n instanceof Error ? n.message : "Unknown error"] })] });
  }
}
const q_ = () => {
  try {
    (function(e, t, n) {
      let r, o, i;
      e.twq || (r = e.twq = function() {
        r.exe ? r.exe.apply(r, arguments) : r.queue.push(arguments);
      }, r.version = "1.1", r.queue = [], o = t.createElement(n), o.async = true, o.src = "https://static.ads-twitter.com/uwt.js", i = t.getElementsByTagName(n)[0], i.parentNode.insertBefore(o, i));
    })(window, document, "script"), window.twq("config", "pyf2o"), console.log("Twitter Pixel: Initialized successfully");
  } catch (e) {
    console.error("Twitter Pixel: Initialization failed", e);
  }
}, UP = (e) => {
  try {
    typeof window < "u" && window.twq && (window.twq("track", "PageView"), console.log("Twitter Pixel: PageView tracked", { pageName: e }));
  } catch (t) {
    console.error("Twitter Pixel: PageView tracking failed", t);
  }
}, VP = (e) => {
  var t;
  try {
    if (typeof window < "u" && window.twq) {
      const n = { content_type: "product", content_ids: ((t = e.items) == null ? void 0 : t.map((r) => r.productId)) || [], value: parseFloat(e.total), currency: "NGN", order_id: e.orderId };
      window.twq("event", "tw-pyf2o-pyf2p", n), console.log("Twitter Pixel: Purchase tracked", n);
    }
  } catch (n) {
    console.error("Twitter Pixel: Purchase tracking failed", n);
  }
}, WP = (e) => {
  try {
    if (typeof window < "u" && window.twq) {
      const t = { content_type: "product", content_id: e.productId.toString(), content_name: e.productName, value: parseFloat(e.price) * e.quantity, currency: "NGN", num_items: e.quantity };
      window.twq("event", "tw-pyf2o-pyf2p", t), console.log("Twitter Pixel: AddToCart tracked", t);
    }
  } catch (t) {
    console.error("Twitter Pixel: AddToCart tracking failed", t);
  }
}, BP = (e) => {
  try {
    if (typeof window < "u" && window.twq) {
      const t = { content_type: "signup" };
      window.twq("event", "tw-pyf2o-pyf2p", t), console.log("Twitter Pixel: SignUp tracked", t);
    }
  } catch (t) {
    console.error("Twitter Pixel: SignUp tracking failed", t);
  }
};
function Ul() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "x" ? t : t & 3 | 8).toString(16);
  });
}
const G_ = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
function K_(e) {
  var _a2, _b;
  var n;
  const t = {};
  try {
    const r = e.includes("?") ? (_a2 = e.split("?")[1]) != null ? _a2 : "" : "";
    if (!r) return t;
    const o = (_b = (n = r.split("#")[0]) == null ? void 0 : n.split("&")) != null ? _b : [];
    for (const i of o) {
      const s = i.indexOf("=");
      if (s === -1) continue;
      const l = decodeURIComponent(i.slice(0, s)), a = decodeURIComponent(i.slice(s + 1));
      G_.includes(l) && (t[l] = a);
    }
  } catch (e2) {
  }
  return t;
}
function ny(e, t) {
  return __async(this, null, function* () {
    const { maxRetries: n, baseDelay: r = 1e3 } = t;
    let o;
    for (let i = 0; i <= n; i++) try {
      return yield e();
    } catch (s) {
      if (o = s, i < n) {
        const l = Math.random() * 0.3 + 0.85, a = r * Math.pow(2, i) * l;
        yield Y_(a);
      }
    }
    throw o;
  });
}
function Y_(e) {
  return new Promise((t) => setTimeout(t, e));
}
function X_(e) {
  if (!e) return;
  const t = e.indexOf(".");
  if (t > 0) return e.slice(0, t);
}
class Z_ {
  constructor(t) {
    this.queue = [], this.timer = null, this.flushing = false, this.opts = t, this.startTimer();
  }
  enqueue(t) {
    this.queue.push(t), this.queue.length >= this.opts.flushSize && this.flush();
  }
  flush() {
    return __async(this, null, function* () {
      if (this.flushing || this.queue.length === 0) return;
      this.flushing = true;
      const t = this.queue.splice(0, this.queue.length);
      try {
        yield this.sendBatch(t);
      } catch (e) {
        this.queue.unshift(...t);
      } finally {
        this.flushing = false;
      }
    });
  }
  stopTimer() {
    this.timer !== null && (clearInterval(this.timer), this.timer = null);
  }
  get length() {
    return this.queue.length;
  }
  startTimer() {
    this.opts.flushInterval > 0 && (this.timer = setInterval(() => {
      this.flush();
    }, this.opts.flushInterval), typeof this.timer == "object" && "unref" in this.timer && this.timer.unref());
  }
  sendBatch(t) {
    return __async(this, null, function* () {
      const n = `${this.opts.endpoint}/v1/events/batch`, r = { batch: t };
      yield ny(() => __async(this, null, function* () {
        const o = yield fetch(n, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.opts.apiKey}` }, body: JSON.stringify(r) });
        if (!o.ok) throw new Error(`AppsPro collector responded with ${o.status}: ${o.statusText}`);
      }), { maxRetries: this.opts.maxRetries });
    });
  }
}
function J_() {
  return typeof window < "u" && typeof document < "u" && typeof window.location < "u";
}
function eP() {
  const e = {};
  try {
    e.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e2) {
  }
  if (typeof navigator < "u" && navigator.language && (e.locale = navigator.language), !J_()) return e;
  try {
    e.page_url = window.location.href;
  } catch (e2) {
  }
  try {
    document.referrer && (e.referrer = document.referrer);
  } catch (e2) {
  }
  try {
    e.user_agent = navigator.userAgent;
  } catch (e2) {
  }
  try {
    typeof screen < "u" && (e.screen_width = screen.width, e.screen_height = screen.height);
  } catch (e2) {
  }
  try {
    const t = K_(window.location.href);
    t.utm_source && (e.utm_source = t.utm_source), t.utm_medium && (e.utm_medium = t.utm_medium), t.utm_campaign && (e.utm_campaign = t.utm_campaign), t.utm_content && (e.utm_content = t.utm_content), t.utm_term && (e.utm_term = t.utm_term);
  } catch (e2) {
  }
  return e;
}
const ji = { endpoint: "https://collector.appspro.credpal.co", flushInterval: 1e4, flushSize: 20, maxRetries: 3 };
class tP {
  constructor(t) {
    var _a2, _b, _c2, _d2;
    if (!t.apiKey) throw new Error("AppsPro: apiKey is required");
    this.apiKey = t.apiKey, this.endpoint = ji.endpoint, this.maxRetries = (_a2 = t.maxRetries) != null ? _a2 : ji.maxRetries, this.workspaceId = (_b = t.workspaceId) != null ? _b : X_(t.apiKey), this.anonymousId = Ul(), this.queue = new Z_({ endpoint: this.endpoint, apiKey: this.apiKey, flushSize: (_c2 = t.flushSize) != null ? _c2 : ji.flushSize, flushInterval: (_d2 = t.flushInterval) != null ? _d2 : ji.flushInterval, maxRetries: this.maxRetries });
  }
  track(t, n) {
    const r = this.buildEvent(t, n);
    this.queue.enqueue(r);
  }
  identify(t, n) {
    this.userId = t;
    const r = { v: 1, workspace_id: this.workspaceId, user_id: t, anonymous_id: this.anonymousId, traits: n, occurred_at: (/* @__PURE__ */ new Date()).toISOString() };
    this.sendIdentify(r);
  }
  page(t, n) {
    const r = this.getContext(), o = __spreadValues({}, n);
    t && (o.page_name = t), r.page_url && (o.page_url = r.page_url), r.referrer && (o.referrer = r.referrer), this.track("page_view", o);
  }
  setAnonymousId(t) {
    this.anonymousId = t;
  }
  flush() {
    return __async(this, null, function* () {
      yield this.queue.flush();
    });
  }
  shutdown() {
    return __async(this, null, function* () {
      this.queue.stopTimer(), yield this.queue.flush();
    });
  }
  reset() {
    this.anonymousId = Ul(), this.userId = void 0;
  }
  buildEvent(t, n) {
    return { workspace_id: this.workspaceId, event_id: Ul(), occurred_at: (/* @__PURE__ */ new Date()).toISOString(), type: t, identity: { anonymous_id: this.anonymousId, user_id: this.userId }, properties: n, context: this.getContext() };
  }
  getContext() {
    return eP();
  }
  sendIdentify(t) {
    return __async(this, null, function* () {
      const n = `${this.endpoint}/v1/identify`;
      try {
        yield ny(() => __async(this, null, function* () {
          const r = yield fetch(n, { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${this.apiKey}` }, body: JSON.stringify(t) });
          if (!r.ok) throw new Error(`AppsPro identify responded with ${r.status}: ${r.statusText}`);
        }), { maxRetries: this.maxRetries });
      } catch (e) {
      }
    });
  }
}
let mr = null;
const nP = () => {
  const e = "appspro_962fb07fb34043f6c212b5430845b6ab2e0f395a584dbd18", t = "f8501d29-c8d2-434c-975d-06e7f635ef0f";
  return mr ? (console.warn("AppsPro SDK already initialized"), mr) : (mr = new tP({ apiKey: e, workspaceId: t, flushInterval: 1e4, flushSize: 20, maxRetries: 3 }), console.log("AppsPro SDK initialized successfully"), mr);
}, _c = () => (mr || console.warn("AppsPro SDK not initialized. Call initAppsPro() first."), mr), HP = (e, t) => {
  const n = _c();
  n && n.track(e, t);
}, QP = (e, t) => {
  const n = _c();
  n && n.page(e, t);
}, qP = (e, t) => {
  const n = _c();
  n && n.identify(e, t);
}, rP = "1280986499778281";
let Nf = false;
function oP() {
  var e;
  if (!(typeof window > "u" || Nf)) {
    if (!window.fbq) {
      const t = function(...o) {
        t.callMethod ? t.callMethod(...o) : t.queue.push(o);
      };
      t.push = t, t.loaded = true, t.version = "2.0", t.queue = [], window.fbq = t, window._fbq = t;
      const n = document.createElement("script");
      n.async = true, n.src = "https://connect.facebook.net/en_US/fbevents.js";
      const r = document.getElementsByTagName("script")[0];
      (e = r.parentNode) == null || e.insertBefore(n, r);
    }
    window.fbq("init", rP), window.fbq("track", "PageView"), Nf = true;
  }
}
function GP(e, t) {
  if (typeof window < "u" && window.fbq) try {
    const n = __spreadProps(__spreadValues({}, t), { content_name: e });
    window.fbq("track", "PageView", n), console.log("Meta Pixel: PageView tracked", { pageName: e, eventData: n });
  } catch (n) {
    console.error("Meta Pixel PageView tracking error:", n);
  }
}
function KP(e) {
  if (typeof window < "u" && window.fbq) try {
    const t = { content_type: "product", content_ids: [e.productId], contents: [{ id: e.productId, quantity: e.quantity, item_price: e.price }], content_name: e.productName, content_category: e.category, currency: e.currency || "NGN", value: e.price * e.quantity, num_items: e.quantity };
    e.userEmail && (t.em = btoa(e.userEmail.toLowerCase().trim())), e.userPhone && (t.ph = btoa(e.userPhone.replace(/\D/g, ""))), e.userId && (t.external_id = e.userId), window.fbq("track", "AddToCart", t), console.log("Meta Pixel: AddToCart tracked", t);
  } catch (t) {
    console.error("Meta Pixel AddToCart tracking error:", t);
  }
}
function YP(e) {
  if (typeof window < "u" && window.fbq) try {
    const t = { content_type: "product", content_ids: e.items.map((n) => n.productId), contents: e.items.map((n) => ({ id: n.productId, quantity: n.quantity, item_price: n.price })), currency: e.currency || "NGN", value: e.totalValue, num_items: e.items.reduce((n, r) => n + r.quantity, 0) };
    e.userEmail && (t.em = btoa(e.userEmail.toLowerCase().trim())), e.userPhone && (t.ph = btoa(e.userPhone.replace(/\D/g, ""))), e.userId && (t.external_id = e.userId), window.fbq("track", "Purchase", t), console.log("Meta Pixel: Purchase tracked", t);
  } catch (t) {
    console.error("Meta Pixel Purchase tracking error:", t);
  }
}
const ry = v.createContext(void 0);
function iP({ children: e }) {
  const [t, n] = v.useState(null), [r, o] = v.useState(true), [i, s] = v.useState(null), [l, a] = v.useState(0), u = v.useCallback(() => a((c) => c + 1), []);
  v.useEffect(() => {
    let c = true;
    function p() {
      return __async(this, null, function* () {
        var _a2;
        try {
          o(true), s(null);
          const w = localStorage.getItem("adminToken");
          if (!w) {
            if (!c) return;
            console.log("[usePermissions] No token found in localStorage"), n(null), o(false);
            return;
          }
          console.log("[usePermissions] Fetching permissions from /api/admin/auth/permissions");
          const x = yield fetch("/api/admin/auth/permissions", { headers: { Authorization: `Bearer ${w}`, "Content-Type": "application/json" } });
          if (!c) return;
          if (x.ok) {
            const g = yield x.json(), S = g != null && g.permissions ? Object.keys(g.permissions).filter((m) => g.permissions[m]).length : 0;
            console.log(`[usePermissions] \u2713 Loaded ${S} enabled permissions for role ${g == null ? void 0 : g.role}`), n((_a2 = g == null ? void 0 : g.permissions) != null ? _a2 : null);
          } else if (x.status === 401) console.log("[usePermissions] \u2717 Not authenticated (401)"), n(null);
          else {
            const g = yield x.text();
            console.error("[usePermissions] \u2717 Error response:", x.status, g), s(g || "Failed to load permissions"), n(null);
          }
        } catch (w) {
          if (!c) return;
          console.error("[usePermissions] \u2717 Exception:", w == null ? void 0 : w.message, w), s((w == null ? void 0 : w.message) || "Failed to load permissions"), n(null);
        } finally {
          c && o(false);
        }
      });
    }
    return p(), () => {
      c = false;
    };
  }, [l]), v.useEffect(() => {
    const c = () => u();
    return window.addEventListener("permissions:updated", c), () => window.removeEventListener("permissions:updated", c);
  }, [u]);
  const d = { permissions: t, isLoading: r, error: i, reload: u };
  return h.jsx(ry.Provider, { value: d, children: e });
}
function XP() {
  const e = v.useContext(ry);
  return e || { permissions: null, isLoading: false, error: null, reload: () => {
  } };
}
window.addEventListener("error", (e) => {
  console.error("Global Error:", e.error);
});
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise Rejection:", e.reason);
});
const sP = (_K = window.requestIdleCallback) != null ? _K : ((e) => window.setTimeout(() => {
  e({ didTimeout: false, timeRemaining: () => 0 });
}, 1));
sP(() => {
  q_(), nP(), oP();
});
Nm.prefetchQuery({ queryKey: ["/api/brands/current"], queryFn: () => __async(null, null, function* () {
  const e = new URLSearchParams();
  typeof window < "u" && window.location.hostname && e.set("domain", window.location.hostname);
  const t = rl();
  t && e.set("brandPath", t);
  const n = e.toString(), r = `/api/brands/current${n ? `?${n}` : ""}`, o = yield fetch(r);
  return o.ok ? o.json() : null;
}) });
const Vl = document.getElementById("root");
if (Vl) try {
  tm(Vl).render(h.jsx(HE, { children: h.jsx(iP, { children: h.jsx(Q_, {}) }) }));
} catch (e) {
  console.error("Render Error:", e), Vl.innerHTML = `<div style="padding: 20px; color: red;"><h1>Render Error</h1><p>${e instanceof Error ? e.message : "Unknown error"}</p></div>`;
}
else console.error("Root element not found");
export { Xt as $, qP as A, Yi as B, DP as C, HP as D, Xo as E, Ts as F, $P as G, yE as H, vE as I, zP as J, FP as K, cP as L, MP as M, tr as N, li as O, Ue as P, AP as Q, YP as R, VP as S, Qx as T, uP as U, _m as V, nf as W, cg as X, QE as Y, wE as Z, sx as _, zE as a, OP as a$, F1 as a0, XP as a1, qx as a2, H0 as a3, Im as a4, Z0 as a5, Nm as a6, xP as a7, PP as a8, CP as a9, Lg as aA, QS as aB, sc as aC, qS as aD, Ot as aE, GS as aF, Lm as aG, HS as aH, zm as aI, Es as aJ, WP as aK, hP as aL, ai as aM, Da as aN, qo as aO, P0 as aP, Se as aQ, ef as aR, D0 as aS, _n as aT, Kx as aU, Gx as aV, fP as aW, pP as aX, dP as aY, qs as aZ, UE as a_, mE as aa, Hx as ab, hE as ac, nx as ad, gE as ae, lg as af, Uf as ag, SP as ah, aP as ai, DE as aj, ey as ak, R1 as al, ex as am, fc as an, wP as ao, gg as ap, vP as aq, yP as ar, N1 as as, gP as at, ag as au, LP as av, BP as aw, RP as ax, KP as ay, jP as az, Cm as b, z as b0, rl as b1, bm as c, bP as d, NP as e, df as f, a0 as g, bE as h, q0 as i, h as j, TP as k, GP as l, UP as m, Qs as n, yt as o, ge as p, lc as q, v as r, FS as s, IP as t, Hs as u, $m as v, Ve as w, Zg as x, kP as y, QP as z };
