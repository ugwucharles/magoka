var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var x = (i) => {
  throw TypeError(i);
};
var g = (i, t, s) => t.has(i) || x("Cannot " + s);
var e = (i, t, s) => (g(i, t, "read from private field"), s ? s.call(i) : t.get(i)), b = (i, t, s) => t.has(i) ? x("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(i) : t.set(i, s), p = (i, t, s, r) => (g(i, t, "write to private field"), r ? r.call(i, s) : t.set(i, s), s), m = (i, t, s) => (g(i, t, "access private method"), s);
import {
  aM as U,
  aN as k,
  aO as R,
  aP as q,
  aQ as K,
  V as L,
  r as f,
  aR as P,
  aS as Q
} from "./index-DOfu0sXg.js";
var n, l, h, o, a, M, C, w, j = (w = class extends U {
  constructor(t, s) {
    super();
    b(this, a);
    b(this, n);
    b(this, l);
    b(this, h);
    b(this, o);
    p(this, n, t), this.setOptions(s), this.bindMethods(), m(this, a, M).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var r;
    const s = this.options;
    this.options = e(this, n).defaultMutationOptions(t), k(this.options, s) || e(this, n).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: e(this, h),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && R(s.mutationKey) !== R(this.options.mutationKey) ? this.reset() : ((r = e(this, h)) == null ? void 0 : r.state.status) === "pending" && e(this, h).setOptions(this.options);
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || (t = e(this, h)) == null || t.removeObserver(this);
  }
  onMutationUpdate(t) {
    m(this, a, M).call(this), m(this, a, C).call(this, t);
  }
  getCurrentResult() {
    return e(this, l);
  }
  reset() {
    var t;
    (t = e(this, h)) == null || t.removeObserver(this), p(this, h, void 0), m(this, a, M).call(this), m(this, a, C).call(this);
  }
  mutate(t, s) {
    var r;
    return p(this, o, s), (r = e(this, h)) == null || r.removeObserver(this), p(this, h, e(this, n).getMutationCache().build(e(this, n), this.options)), e(this, h).addObserver(this), e(this, h).execute(t);
  }
}, n = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), M = function() {
  var _a;
  var s;
  const t = (_a = (s = e(this, h)) == null ? void 0 : s.state) != null ? _a : q();
  p(this, l, __spreadProps(__spreadValues({}, t), {
    isPending: t.status === "pending",
    isSuccess: t.status === "success",
    isError: t.status === "error",
    isIdle: t.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  }));
}, C = function(t) {
  K.batch(() => {
    var s, r, u, v, c, y, S, E;
    if (e(this, o) && this.hasListeners()) {
      const d = e(this, l).variables, O = e(this, l).context;
      (t == null ? void 0 : t.type) === "success" ? ((r = (s = e(this, o)).onSuccess) == null || r.call(s, t.data, d, O), (v = (u = e(this, o)).onSettled) == null || v.call(u, t.data, null, d, O)) : (t == null ? void 0 : t.type) === "error" && ((y = (c = e(this, o)).onError) == null || y.call(c, t.error, d, O), (E = (S = e(this, o)).onSettled) == null || E.call(S, void 0, t.error, d, O));
    }
    this.listeners.forEach((d) => {
      d(e(this, l));
    });
  });
}, w);
function I(i, t) {
  const s = L(), [r] = f.useState(() => new j(s, i));
  f.useEffect(() => {
    r.setOptions(i);
  }, [r, i]);
  const u = f.useSyncExternalStore(f.useCallback((c) => r.subscribe(K.batchCalls(c)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), v = f.useCallback((c, y) => {
    r.mutate(c, y).catch(P);
  }, [r]);
  if (u.error && Q(r.options.throwOnError, [u.error])) throw u.error;
  return __spreadProps(__spreadValues({}, u), {
    mutate: v,
    mutateAsync: u.mutate
  });
}
export {
  I as u
};
