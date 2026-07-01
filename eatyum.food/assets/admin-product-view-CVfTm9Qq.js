var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
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
import { N as rt, r as a, a0 as Qe, P as Te, a4 as et, j as e, w as Se, c as Dt, b as Le, W as z, B as E, E as pe, H as be, I as we, Z as Ve, F as he, V as is, X as bs, U as Ns, u as ws } from "./index-DOfu0sXg.js";
import { C as tt } from "./currency-input-Bsi8j9jy.js";
import { F as st } from "./formatted-number-input-DhzuNqOG.js";
import { I as ze } from "./input-FyV2XACZ.js";
import { T as Et } from "./textarea-__Yhw9VH.js";
import { B as Ne } from "./badge-BAjaXL1S.js";
import { S as qe } from "./switch-DvySixFh.js";
import { T as os, a as ls, b as Be, c as Ye } from "./tabs-qGTQ6MVs.js";
import { F as Ot, a as J, b as W, c as X, e as Y, d as ue } from "./form-DpW_ADfq.js";
import { z as se, u as $t, t as It } from "./index-Ph36iM9Q.js";
import { b as Ss } from "./schema-fInU-h3J.js";
import { L as ye } from "./label-B38UEnoM.js";
import { R as Cs, P as Ps, O as ks, C as As, D as Qt, e as Es, a as _t, b as Ht, c as Jt, d as Wt } from "./dialog-BUvIuveX.js";
import { P as Tt, a as Ft, b as Rt, S as cs, c as Os, u as $s, A as wt } from "./admin-layout-DH7sAIhq.js";
import { f as St } from "./currency-cZDvJQzL.js";
import { S as ds } from "./search-BFN4Wc19.js";
import { A as Is, a as Ts, b as Fs, c as Rs, d as Xt, e as Ls, f as zs, g as qs } from "./alert-dialog-Dg4XC4Tp.js";
import { P as lt } from "./plus-xl2HqeIg.js";
import { C as ct } from "./check-AkIa94Y-.js";
import { S as Yt } from "./square-pen-B4PbNjTL.js";
import { T as Ct } from "./trash-2-MFuZdLCA.js";
import { S as Ds, a as Ms, b as Gs, c as Ks, d as Us } from "./select-ets7bQkN.js";
import { u as $e } from "./useMutation-CVmbONMy.js";
import { P as Ze } from "./package-CpPTLD0o.js";
import { A as Zt } from "./arrow-left-CK7JF7w9.js";
import { E as Vs } from "./eye-off-IC2nhfIc.js";
import { E as Bs } from "./eye-DhxFEmT5.js";
import { S as Qs } from "./save-BZa-ufS1.js";
import "./index-CxKYTSZE.js";
import "./index-Czlrzsbg.js";
import "./index-D5alJfFq.js";
import "./Combination-C65a2kPq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./shopping-cart-C1hOzoyN.js";
import "./clock-DQ0X7PrC.js";
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
import "./chevron-down-DegxUQDE.js";
import "./chevron-up-Cu4mgTvm.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const es = rt("ArrowDown", [["path", { d: "M12 5v14", key: "s699le" }], ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ts = rt("ArrowUp", [["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }], ["path", { d: "M12 19V5", key: "x0mq9r" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Lt = rt("ChevronsUpDown", [["path", { d: "m7 15 5 5 5-5", key: "1hf1tw" }], ["path", { d: "m7 9 5-5 5 5", key: "sgt6xg" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const ss = rt("GripVertical", [["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }], ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }], ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }], ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }], ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }], ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _s = rt("Library", [["path", { d: "m16 6 4 14", key: "ji33uf" }], ["path", { d: "M12 6v14", key: "1n7gus" }], ["path", { d: "M8 8v12", key: "1gg7y9" }], ["path", { d: "M4 4v16", key: "6qkkli" }]]);
var rs = 1, Hs = 0.9, Js = 0.8, Ws = 0.17, Pt = 0.1, kt = 0.999, Xs = 0.9999, Ys = 0.99, Zs = /[\\\/_+.#"@\[\(\{&]/, er = /[\\\/_+.#"@\[\(\{&]/g, tr = /[\s-]/, us = /[\s-]/g;
function zt(r, l, i, j, o, p, f) {
  if (p === l.length) return o === r.length ? rs : Ys;
  var C = `${o},${p}`;
  if (f[C] !== void 0) return f[C];
  for (var I = j.charAt(p), x = i.indexOf(I, o), w = 0, O, U, q, V; x >= 0; ) O = zt(r, l, i, j, x + 1, p + 1, f), O > w && (x === o ? O *= rs : Zs.test(r.charAt(x - 1)) ? (O *= Js, q = r.slice(o, x - 1).match(er), q && o > 0 && (O *= Math.pow(kt, q.length))) : tr.test(r.charAt(x - 1)) ? (O *= Hs, V = r.slice(o, x - 1).match(us), V && o > 0 && (O *= Math.pow(kt, V.length))) : (O *= Ws, o > 0 && (O *= Math.pow(kt, x - o))), r.charAt(x) !== l.charAt(p) && (O *= Xs)), (O < Pt && i.charAt(x - 1) === j.charAt(p + 1) || j.charAt(p + 1) === j.charAt(p) && i.charAt(x - 1) !== j.charAt(p)) && (U = zt(r, l, i, j, x + 1, p + 2, f), U * Pt > O && (O = U * Pt)), O > w && (w = O), x = i.indexOf(I, x + 1);
  return f[C] = w, w;
}
function as(r) {
  return r.toLowerCase().replace(us, " ");
}
function sr(r, l, i) {
  return r = i && i.length > 0 ? `${r + " " + i.join(" ")}` : r, zt(r, l, as(r), as(l), 0, 0, {});
}
var Xe = '[cmdk-group=""]', At = '[cmdk-group-items=""]', rr = '[cmdk-group-heading=""]', ms = '[cmdk-item=""]', ns = `${ms}:not([aria-disabled="true"])`, qt = "cmdk-item-select", Ke = "data-value", ar = (r, l, i) => sr(r, l, i), ps = a.createContext(void 0), at = () => a.useContext(ps), hs = a.createContext(void 0), Mt = () => a.useContext(hs), xs = a.createContext(void 0), fs = a.forwardRef((r, l) => {
  let i = Ue(() => {
    var n, v;
    return { search: "", value: (v = (n = r.value) != null ? n : r.defaultValue) != null ? v : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), j = Ue(() => /* @__PURE__ */ new Set()), o = Ue(() => /* @__PURE__ */ new Map()), p = Ue(() => /* @__PURE__ */ new Map()), f = Ue(() => /* @__PURE__ */ new Set()), C = gs(r), _a = r, { label: I, children: x, value: w, onValueChange: O, filter: U, shouldFilter: q, loop: V, disablePointerSelection: _ = false, vimBindings: oe = true } = _a, xe = __objRest(_a, ["label", "children", "value", "onValueChange", "filter", "shouldFilter", "loop", "disablePointerSelection", "vimBindings"]), F = Qe(), le = Qe(), Q = Qe(), G = a.useRef(null), S = xr();
  De(() => {
    if (w !== void 0) {
      let n = w.trim();
      i.current.value = n, M.emit();
    }
  }, [w]), De(() => {
    S(6, Z);
  }, []);
  let M = a.useMemo(() => ({ subscribe: (n) => (f.current.add(n), () => f.current.delete(n)), snapshot: () => i.current, setState: (n, v, N) => {
    var m, A, T, B;
    if (!Object.is(i.current[n], v)) {
      if (i.current[n] = v, n === "search") ce(), P(), S(1, re);
      else if (n === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let L = document.getElementById(Q);
          L ? L.focus() : (m = document.getElementById(F)) == null || m.focus();
        }
        if (S(7, () => {
          var L;
          i.current.selectedItemId = (L = fe()) == null ? void 0 : L.id, M.emit();
        }), N || S(5, Z), ((A = C.current) == null ? void 0 : A.value) !== void 0) {
          let L = v != null ? v : "";
          (B = (T = C.current).onValueChange) == null || B.call(T, L);
          return;
        }
      }
      M.emit();
    }
  }, emit: () => {
    f.current.forEach((n) => n());
  } }), []), c = a.useMemo(() => ({ value: (n, v, N) => {
    var m;
    v !== ((m = p.current.get(n)) == null ? void 0 : m.value) && (p.current.set(n, { value: v, keywords: N }), i.current.filtered.items.set(n, b(v, N)), S(2, () => {
      P(), M.emit();
    }));
  }, item: (n, v) => (j.current.add(n), v && (o.current.has(v) ? o.current.get(v).add(n) : o.current.set(v, /* @__PURE__ */ new Set([n]))), S(3, () => {
    ce(), P(), i.current.value || re(), M.emit();
  }), () => {
    p.current.delete(n), j.current.delete(n), i.current.filtered.items.delete(n);
    let N = fe();
    S(4, () => {
      ce(), (N == null ? void 0 : N.getAttribute("id")) === n && re(), M.emit();
    });
  }), group: (n) => (o.current.has(n) || o.current.set(n, /* @__PURE__ */ new Set()), () => {
    p.current.delete(n), o.current.delete(n);
  }), filter: () => C.current.shouldFilter, label: I || r["aria-label"], getDisablePointerSelection: () => C.current.disablePointerSelection, listId: F, inputId: Q, labelId: le, listInnerRef: G }), []);
  function b(n, v) {
    var N, m;
    let A = (m = (N = C.current) == null ? void 0 : N.filter) != null ? m : ar;
    return n ? A(n, i.current.search, v) : 0;
  }
  function P() {
    if (!i.current.search || C.current.shouldFilter === false) return;
    let n = i.current.filtered.items, v = [];
    i.current.filtered.groups.forEach((m) => {
      let A = o.current.get(m), T = 0;
      A.forEach((B) => {
        let L = n.get(B);
        T = Math.max(L, T);
      }), v.push([m, T]);
    });
    let N = G.current;
    Ce().sort((m, A) => {
      var T, B;
      let L = m.getAttribute("id"), $ = A.getAttribute("id");
      return ((T = n.get($)) != null ? T : 0) - ((B = n.get(L)) != null ? B : 0);
    }).forEach((m) => {
      let A = m.closest(At);
      A ? A.appendChild(m.parentElement === A ? m : m.closest(`${At} > *`)) : N.appendChild(m.parentElement === N ? m : m.closest(`${At} > *`));
    }), v.sort((m, A) => A[1] - m[1]).forEach((m) => {
      var A;
      let T = (A = G.current) == null ? void 0 : A.querySelector(`${Xe}[${Ke}="${encodeURIComponent(m[0])}"]`);
      T == null || T.parentElement.appendChild(T);
    });
  }
  function re() {
    let n = Ce().find((N) => N.getAttribute("aria-disabled") !== "true"), v = n == null ? void 0 : n.getAttribute(Ke);
    M.setState("value", v || void 0);
  }
  function ce() {
    var n, v, N, m;
    if (!i.current.search || C.current.shouldFilter === false) {
      i.current.filtered.count = j.current.size;
      return;
    }
    i.current.filtered.groups = /* @__PURE__ */ new Set();
    let A = 0;
    for (let T of j.current) {
      let B = (v = (n = p.current.get(T)) == null ? void 0 : n.value) != null ? v : "", L = (m = (N = p.current.get(T)) == null ? void 0 : N.keywords) != null ? m : [], $ = b(B, L);
      i.current.filtered.items.set(T, $), $ > 0 && A++;
    }
    for (let [T, B] of o.current) for (let L of B) if (i.current.filtered.items.get(L) > 0) {
      i.current.filtered.groups.add(T);
      break;
    }
    i.current.filtered.count = A;
  }
  function Z() {
    var n, v, N;
    let m = fe();
    m && (((n = m.parentElement) == null ? void 0 : n.firstChild) === m && ((N = (v = m.closest(Xe)) == null ? void 0 : v.querySelector(rr)) == null || N.scrollIntoView({ block: "nearest" })), m.scrollIntoView({ block: "nearest" }));
  }
  function fe() {
    var n;
    return (n = G.current) == null ? void 0 : n.querySelector(`${ms}[aria-selected="true"]`);
  }
  function Ce() {
    var n;
    return Array.from(((n = G.current) == null ? void 0 : n.querySelectorAll(ns)) || []);
  }
  function Pe(n) {
    let v = Ce()[n];
    v && M.setState("value", v.getAttribute(Ke));
  }
  function ae(n) {
    var v;
    let N = fe(), m = Ce(), A = m.findIndex((B) => B === N), T = m[A + n];
    (v = C.current) != null && v.loop && (T = A + n < 0 ? m[m.length - 1] : A + n === m.length ? m[0] : m[A + n]), T && M.setState("value", T.getAttribute(Ke));
  }
  function ge(n) {
    let v = fe(), N = v == null ? void 0 : v.closest(Xe), m;
    for (; N && !m; ) N = n > 0 ? pr(N, Xe) : hr(N, Xe), m = N == null ? void 0 : N.querySelector(ns);
    m ? M.setState("value", m.getAttribute(Ke)) : ae(n);
  }
  let de = () => Pe(Ce().length - 1), Fe = (n) => {
    n.preventDefault(), n.metaKey ? de() : n.altKey ? ge(1) : ae(1);
  }, ee = (n) => {
    n.preventDefault(), n.metaKey ? Pe(0) : n.altKey ? ge(-1) : ae(-1);
  };
  return a.createElement(Te.div, __spreadProps(__spreadValues({ ref: l, tabIndex: -1 }, xe), { "cmdk-root": "", onKeyDown: (n) => {
    var v;
    (v = xe.onKeyDown) == null || v.call(xe, n);
    let N = n.nativeEvent.isComposing || n.keyCode === 229;
    if (!(n.defaultPrevented || N)) switch (n.key) {
      case "n":
      case "j": {
        oe && n.ctrlKey && Fe(n);
        break;
      }
      case "ArrowDown": {
        Fe(n);
        break;
      }
      case "p":
      case "k": {
        oe && n.ctrlKey && ee(n);
        break;
      }
      case "ArrowUp": {
        ee(n);
        break;
      }
      case "Home": {
        n.preventDefault(), Pe(0);
        break;
      }
      case "End": {
        n.preventDefault(), de();
        break;
      }
      case "Enter": {
        n.preventDefault();
        let m = fe();
        if (m) {
          let A = new Event(qt);
          m.dispatchEvent(A);
        }
      }
    }
  } }), a.createElement("label", { "cmdk-label": "", htmlFor: c.inputId, id: c.labelId, style: gr }, I), ft(r, (n) => a.createElement(hs.Provider, { value: M }, a.createElement(ps.Provider, { value: c }, n))));
}), nr = a.forwardRef((r, l) => {
  var i, j;
  let o = Qe(), p = a.useRef(null), f = a.useContext(xs), C = at(), I = gs(r), x = (j = (i = I.current) == null ? void 0 : i.forceMount) != null ? j : f == null ? void 0 : f.forceMount;
  De(() => {
    if (!x) return C.item(o, f == null ? void 0 : f.id);
  }, [x]);
  let w = js(o, p, [r.value, r.children, p], r.keywords), O = Mt(), U = Ie((S) => S.value && S.value === w.current), q = Ie((S) => x || C.filter() === false ? true : S.search ? S.filtered.items.get(o) > 0 : true);
  a.useEffect(() => {
    let S = p.current;
    if (!(!S || r.disabled)) return S.addEventListener(qt, V), () => S.removeEventListener(qt, V);
  }, [q, r.onSelect, r.disabled]);
  function V() {
    var S, M;
    _(), (M = (S = I.current).onSelect) == null || M.call(S, w.current);
  }
  function _() {
    O.setState("value", w.current, true);
  }
  if (!q) return null;
  let _a = r, { disabled: oe, value: xe, onSelect: F, forceMount: le, keywords: Q } = _a, G = __objRest(_a, ["disabled", "value", "onSelect", "forceMount", "keywords"]);
  return a.createElement(Te.div, __spreadProps(__spreadValues({ ref: et(p, l) }, G), { id: o, "cmdk-item": "", role: "option", "aria-disabled": !!oe, "aria-selected": !!U, "data-disabled": !!oe, "data-selected": !!U, onPointerMove: oe || C.getDisablePointerSelection() ? void 0 : _, onClick: oe ? void 0 : V }), r.children);
}), ir = a.forwardRef((r, l) => {
  let _a = r, { heading: i, children: j, forceMount: o } = _a, p = __objRest(_a, ["heading", "children", "forceMount"]), f = Qe(), C = a.useRef(null), I = a.useRef(null), x = Qe(), w = at(), O = Ie((q) => o || w.filter() === false ? true : q.search ? q.filtered.groups.has(f) : true);
  De(() => w.group(f), []), js(f, C, [r.value, r.heading, I]);
  let U = a.useMemo(() => ({ id: f, forceMount: o }), [o]);
  return a.createElement(Te.div, __spreadProps(__spreadValues({ ref: et(C, l) }, p), { "cmdk-group": "", role: "presentation", hidden: O ? void 0 : true }), i && a.createElement("div", { ref: I, "cmdk-group-heading": "", "aria-hidden": true, id: x }, i), ft(r, (q) => a.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": i ? x : void 0 }, a.createElement(xs.Provider, { value: U }, q))));
}), or = a.forwardRef((r, l) => {
  let _a = r, { alwaysRender: i } = _a, j = __objRest(_a, ["alwaysRender"]), o = a.useRef(null), p = Ie((f) => !f.search);
  return !i && !p ? null : a.createElement(Te.div, __spreadProps(__spreadValues({ ref: et(o, l) }, j), { "cmdk-separator": "", role: "separator" }));
}), lr = a.forwardRef((r, l) => {
  let _a = r, { onValueChange: i } = _a, j = __objRest(_a, ["onValueChange"]), o = r.value != null, p = Mt(), f = Ie((x) => x.search), C = Ie((x) => x.selectedItemId), I = at();
  return a.useEffect(() => {
    r.value != null && p.setState("search", r.value);
  }, [r.value]), a.createElement(Te.input, __spreadProps(__spreadValues({ ref: l }, j), { "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: false, "aria-autocomplete": "list", role: "combobox", "aria-expanded": true, "aria-controls": I.listId, "aria-labelledby": I.labelId, "aria-activedescendant": C, id: I.inputId, type: "text", value: o ? r.value : f, onChange: (x) => {
    o || p.setState("search", x.target.value), i == null || i(x.target.value);
  } }));
}), cr = a.forwardRef((r, l) => {
  let _a = r, { children: i, label: j = "Suggestions" } = _a, o = __objRest(_a, ["children", "label"]), p = a.useRef(null), f = a.useRef(null), C = Ie((x) => x.selectedItemId), I = at();
  return a.useEffect(() => {
    if (f.current && p.current) {
      let x = f.current, w = p.current, O, U = new ResizeObserver(() => {
        O = requestAnimationFrame(() => {
          let q = x.offsetHeight;
          w.style.setProperty("--cmdk-list-height", q.toFixed(1) + "px");
        });
      });
      return U.observe(x), () => {
        cancelAnimationFrame(O), U.unobserve(x);
      };
    }
  }, []), a.createElement(Te.div, __spreadProps(__spreadValues({ ref: et(p, l) }, o), { "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": C, "aria-label": j, id: I.listId }), ft(r, (x) => a.createElement("div", { ref: et(f, I.listInnerRef), "cmdk-list-sizer": "" }, x)));
}), dr = a.forwardRef((r, l) => {
  let _a = r, { open: i, onOpenChange: j, overlayClassName: o, contentClassName: p, container: f } = _a, C = __objRest(_a, ["open", "onOpenChange", "overlayClassName", "contentClassName", "container"]);
  return a.createElement(Cs, { open: i, onOpenChange: j }, a.createElement(Ps, { container: f }, a.createElement(ks, { "cmdk-overlay": "", className: o }), a.createElement(As, { "aria-label": r.label, "cmdk-dialog": "", className: p }, a.createElement(fs, __spreadValues({ ref: l }, C)))));
}), ur = a.forwardRef((r, l) => Ie((i) => i.filtered.count === 0) ? a.createElement(Te.div, __spreadProps(__spreadValues({ ref: l }, r), { "cmdk-empty": "", role: "presentation" })) : null), mr = a.forwardRef((r, l) => {
  let _a = r, { progress: i, children: j, label: o = "Loading..." } = _a, p = __objRest(_a, ["progress", "children", "label"]);
  return a.createElement(Te.div, __spreadProps(__spreadValues({ ref: l }, p), { "cmdk-loading": "", role: "progressbar", "aria-valuenow": i, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": o }), ft(r, (f) => a.createElement("div", { "aria-hidden": true }, f)));
}), me = Object.assign(fs, { List: cr, Item: nr, Input: lr, Group: ir, Separator: or, Dialog: dr, Empty: ur, Loading: mr });
function pr(r, l) {
  let i = r.nextElementSibling;
  for (; i; ) {
    if (i.matches(l)) return i;
    i = i.nextElementSibling;
  }
}
function hr(r, l) {
  let i = r.previousElementSibling;
  for (; i; ) {
    if (i.matches(l)) return i;
    i = i.previousElementSibling;
  }
}
function gs(r) {
  let l = a.useRef(r);
  return De(() => {
    l.current = r;
  }), l;
}
var De = typeof window > "u" ? a.useEffect : a.useLayoutEffect;
function Ue(r) {
  let l = a.useRef();
  return l.current === void 0 && (l.current = r()), l;
}
function Ie(r) {
  let l = Mt(), i = () => r(l.snapshot());
  return a.useSyncExternalStore(l.subscribe, i, i);
}
function js(r, l, i, j = []) {
  let o = a.useRef(), p = at();
  return De(() => {
    var f;
    let C = (() => {
      var x;
      for (let w of i) {
        if (typeof w == "string") return w.trim();
        if (typeof w == "object" && "current" in w) return w.current ? (x = w.current.textContent) == null ? void 0 : x.trim() : o.current;
      }
    })(), I = j.map((x) => x.trim());
    p.value(r, C, I), (f = l.current) == null || f.setAttribute(Ke, C), o.current = C;
  }), o;
}
var xr = () => {
  let [r, l] = a.useState(), i = Ue(() => /* @__PURE__ */ new Map());
  return De(() => {
    i.current.forEach((j) => j()), i.current = /* @__PURE__ */ new Map();
  }, [r]), (j, o) => {
    i.current.set(j, o), l({});
  };
};
function fr(r) {
  let l = r.type;
  return typeof l == "function" ? l(r.props) : "render" in l ? l.render(r.props) : r;
}
function ft({ asChild: r, children: l }, i) {
  return r && a.isValidElement(l) ? a.cloneElement(fr(l), { ref: l.ref }, i(l.props.children)) : i(l);
}
var gr = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
const dt = a.forwardRef((_a, i) => {
  var _b = _a, { className: r } = _b, l = __objRest(_b, ["className"]);
  return e.jsx(me, __spreadValues({ ref: i, className: Se("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", r) }, l));
});
dt.displayName = me.displayName;
const ut = a.forwardRef((_c, i) => {
  var _d = _c, { className: r } = _d, l = __objRest(_d, ["className"]);
  return e.jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [e.jsx(ds, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }), e.jsx(me.Input, __spreadValues({ ref: i, className: Se("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", r) }, l))] });
});
ut.displayName = me.Input.displayName;
const mt = a.forwardRef((_e, i) => {
  var _f = _e, { className: r } = _f, l = __objRest(_f, ["className"]);
  return e.jsx(me.List, __spreadValues({ ref: i, className: Se("max-h-[300px] overflow-y-auto overflow-x-hidden", r) }, l));
});
mt.displayName = me.List.displayName;
const pt = a.forwardRef((r, l) => e.jsx(me.Empty, __spreadValues({ ref: l, className: "py-6 text-center text-sm" }, r)));
pt.displayName = me.Empty.displayName;
const ht = a.forwardRef((_g, i) => {
  var _h = _g, { className: r } = _h, l = __objRest(_h, ["className"]);
  return e.jsx(me.Group, __spreadValues({ ref: i, className: Se("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", r) }, l));
});
ht.displayName = me.Group.displayName;
const jr = a.forwardRef((_i, i) => {
  var _j = _i, { className: r } = _j, l = __objRest(_j, ["className"]);
  return e.jsx(me.Separator, __spreadValues({ ref: i, className: Se("-mx-1 h-px bg-border", r) }, l));
});
jr.displayName = me.Separator.displayName;
const xt = a.forwardRef((_k, i) => {
  var _l = _k, { className: r } = _l, l = __objRest(_l, ["className"]);
  return e.jsx(me.Item, __spreadValues({ ref: i, className: Se("relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", r) }, l));
});
xt.displayName = me.Item.displayName;
const vr = se.object({ name: se.string().min(1, "Group name is required"), description: se.string().optional(), isRequired: se.boolean().default(false), maxSelections: se.number().min(1).default(1), minSelections: se.number().min(0).default(0) }), yr = se.object({ name: se.string().min(1, "Option name is required"), description: se.string().optional(), extraPrice: se.string().default("0"), isAvailable: se.boolean().default(true) }), br = ({ productId: r, productName: l }) => {
  var Bt;
  const i = a.useRef(0), j = a.useRef(null), [o, p] = a.useState([]), [f, C] = a.useState(null), [I, x] = a.useState([]), [w, O] = a.useState(""), [U, q] = a.useState(false), [V, _] = a.useState(false), [oe, xe] = a.useState(true), [F, le] = a.useState(false), [Q, G] = a.useState(false), [S, M] = a.useState(null), [c, b] = a.useState(null), [P, re] = a.useState(null), [ce, Z] = a.useState("existing"), [fe, Ce] = a.useState([]), [Pe, ae] = a.useState(""), [ge, de] = a.useState(""), [Fe, ee] = a.useState(false), [n, v] = a.useState(null), [N, m] = a.useState(false), [A, T] = a.useState([]), [B, L] = a.useState({}), { toast: $ } = Dt(), { data: _e } = Le({ queryKey: ["/api/admin/settings/sales-channels"], staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), nt = (_e == null ? void 0 : _e.channels) || [], Ae = (t) => t.trim().toLowerCase().replace(/\s+/g, "_"), gt = (t) => (t / 100).toFixed(2), jt = (t) => Math.round(parseFloat(t || "0") * 100), ke = nt.filter((t) => A.length === 0 ? true : A.includes(Ae(t.value))), je = $t({ resolver: It(vr), defaultValues: { name: "", description: "", isRequired: false, maxSelections: 1, minSelections: 0 } }), ve = $t({ resolver: It(yr), defaultValues: { name: "", description: "", extraPrice: "0", isAvailable: true } });
  a.useEffect(() => {
    ne(), vt();
  }, [r]), a.useEffect(() => {
    if (!Q || c || ce !== "existing" || !f) return;
    const t = setTimeout(() => {
      He(Pe);
    }, 250);
    return () => clearTimeout(t);
  }, [Q, c, ce, f, Pe]);
  const vt = () => __async(null, null, function* () {
    try {
      const d = yield (yield z("GET", `/api/admin/products/${r}`)).json(), u = Number(d == null ? void 0 : d.brandId);
      Number.isFinite(u) && (C(u), yield Re(u));
      const h = ((d == null ? void 0 : d.productSalesChannels) || []).filter((g) => (g == null ? void 0 : g.isListed) !== false).map((g) => Ae(String((g == null ? void 0 : g.channelValue) || ""))).filter((g) => g.length > 0);
      T(Array.from(new Set(h)));
    } catch (t) {
      console.error("Failed to fetch product brand:", t);
    }
  }), it = () => Object.entries(B).map(([t, d]) => ({ salesChannel: t, price: jt(d) })).filter((t) => Number.isFinite(t.price) && t.price > 0), Re = (t) => __async(null, null, function* () {
    const d = t != null ? t : f;
    if (d) try {
      const h = yield (yield z("GET", `/api/admin/customization-groups/library?brandId=${d}`)).json();
      x(h);
    } catch (u) {
      console.error("Failed to fetch customization library:", u);
    }
  }), He = (t) => __async(null, null, function* () {
    if (!(!f || !P)) {
      ee(true);
      try {
        const d = new URLSearchParams();
        d.set("brandId", String(f)), d.set("groupId", String(P)), t.trim().length > 0 && d.set("query", t.trim());
        const h = yield (yield z("GET", `/api/admin/customization-options/library?${d.toString()}`)).json();
        Ce(h);
      } catch (d) {
        console.error("Failed to fetch existing options:", d);
      } finally {
        ee(false);
      }
    }
  }), ne = (..._0) => __async(null, [..._0], function* ({ showErrorToast: t = true } = {}) {
    const d = ++i.current;
    try {
      const h = yield (yield z("GET", `/api/admin/products/${r}/customization-groups?t=${Date.now()}`)).json();
      d === i.current && p(h);
    } catch (e2) {
      d === i.current && t && $({ title: "Error", description: "Failed to fetch customization groups", variant: "destructive" });
    } finally {
      d === i.current && xe(false);
    }
  });
  a.useEffect(() => {
    const t = setInterval(() => {
      document.visibilityState !== "visible" || Q || F || ne({ showErrorToast: false });
    }, 5e3);
    return () => clearInterval(t);
  }, [r, Q, F]), a.useEffect(() => {
    var u, h;
    if (!Q || ke.length === 0) return;
    const t = c ? `edit-${c.id}` : "new";
    if (j.current === t) return;
    j.current = t;
    const d = {};
    for (const g of ke) {
      const R = Ae(g.value), k = (h = (u = c == null ? void 0 : c.channelPrices) == null ? void 0 : u.find((te) => Ae(te.salesChannel) === R)) == null ? void 0 : h.price;
      d[R] = k && k > 0 ? gt(k) : "";
    }
    L(d);
  }, [Q, c, ke]);
  const s = (t) => __async(null, null, function* () {
    try {
      const d = t.name.trim().toLowerCase();
      if (!S && o.some((D) => D.name.trim().toLowerCase() === d)) {
        $({ title: "Duplicate group", description: "A required option group with this name already exists on this product.", variant: "destructive" });
        return;
      }
      const u = !S && V, h = u ? "/api/admin/customization-groups/library" : S ? `/api/admin/customization-groups/${S.id}` : `/api/admin/products/${r}/customization-groups`, k = yield (yield z(S ? "PUT" : "POST", h, __spreadProps(__spreadValues(__spreadValues({}, t), u ? { brandId: f } : {}), { productId: S || u ? void 0 : r }))).json();
      if (!S && !u && (k != null && k.id) && p((te) => te.some((D) => D.id === k.id) ? te : [...te, __spreadProps(__spreadValues({}, k), { options: [] })]), S && (k != null && k.id) && p((te) => te.map((D) => D.id === k.id ? __spreadValues(__spreadValues({}, D), k) : D)), u && (k != null && k.id)) {
        const D = yield (yield z("POST", `/api/admin/products/${r}/customization-group-assignments`, { groupId: k.id })).json().catch(() => ({})), H = D == null ? void 0 : D.assignedGroup;
        H != null && H.id && p((We) => We.some((Nt) => Nt.id === H.id) ? We : [...We, H]);
      }
      yield ne(), yield Re(), le(false), M(null), _(false), je.reset(), $({ title: "Success", description: u ? "Reusable library group created and assigned" : `Customization group ${S ? "updated" : "created"} successfully` });
    } catch (d) {
      $({ title: "Error", description: d instanceof Error ? d.message : `Failed to ${S ? "update" : "create"} customization group`, variant: "destructive" });
    }
  }), y = (t) => __async(null, null, function* () {
    var d;
    if (P) try {
      const u = o.find((D) => D.id === P), h = t.name.trim().toLowerCase();
      if (!c && ((d = u == null ? void 0 : u.options) != null && d.some((D) => D.name.trim().toLowerCase() === h))) {
        $({ title: "Duplicate option", description: "An option with this name already exists in this group.", variant: "destructive" });
        return;
      }
      const g = localStorage.getItem("adminToken"), R = c ? `/api/admin/customization-options/${c.id}` : `/api/admin/customization-groups/${P}/options`, te = yield fetch(R, { method: c ? "PUT" : "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${g}` }, body: JSON.stringify(__spreadProps(__spreadValues({}, t), { groupId: c ? void 0 : P, channelPrices: it() })) });
      if (te.ok) yield ne(), G(false), b(null), re(null), ve.reset(), $({ title: "Success", description: `Option ${c ? "updated" : "created"} successfully` });
      else {
        const D = yield te.json().catch(() => ({}));
        throw new Error((D == null ? void 0 : D.message) || "Failed to save option");
      }
    } catch (u) {
      $({ title: "Error", description: u instanceof Error ? u.message : `Failed to ${c ? "update" : "create"} option`, variant: "destructive" });
    }
  }), K = (t) => __async(null, null, function* () {
    const d = o.find((h) => h.id === t);
    if (!d) return;
    if (!!d.isLibrary) {
      const h = confirm("Delete this reusable group from the entire library (all products)? Click Cancel to only unlink from this product.");
      try {
        const g = localStorage.getItem("adminToken");
        (yield fetch(h ? `/api/admin/customization-groups/${t}` : `/api/admin/products/${r}/customization-group-assignments/${t}`, { method: "DELETE", headers: { Authorization: `Bearer ${g}` } })).ok && (yield ne(), yield Re(), $({ title: "Success", description: h ? "Reusable library group deleted" : "Reusable library group unlinked" }));
      } catch (e2) {
        $({ title: "Error", description: "Failed to delete customization group", variant: "destructive" });
      }
      return;
    }
    if (confirm("Are you sure you want to delete this customization group and all its options?")) try {
      const h = localStorage.getItem("adminToken");
      (yield fetch(`/api/admin/customization-groups/${t}`, { method: "DELETE", headers: { Authorization: `Bearer ${h}` } })).ok && (yield ne(), $({ title: "Success", description: "Customization group deleted successfully" }));
    } catch (e2) {
      $({ title: "Error", description: "Failed to delete customization group", variant: "destructive" });
    }
  }), ie = (t, d) => {
    v({ id: t.id, name: t.name, groupName: d, extraPrice: t.extraPrice });
  }, Ee = () => __async(null, null, function* () {
    if (n) {
      m(true);
      try {
        yield z("DELETE", `/api/admin/customization-options/${n.id}`), yield ne(), v(null), $({ title: "Success", description: "Option deleted successfully" });
      } catch (e2) {
        $({ title: "Error", description: "Failed to delete option", variant: "destructive" });
      } finally {
        m(false);
      }
    }
  }), Oe = (t) => {
    M(t), je.reset({ name: t.name, description: t.description || "", isRequired: t.isRequired, maxSelections: t.maxSelections, minSelections: t.minSelections }), le(true);
  }, Me = (t) => {
    b(t), Z("new"), re(t.groupId), ve.reset({ name: t.name, description: t.description || "", extraPrice: t.extraPrice, isAvailable: t.isAvailable }), j.current = null, G(true);
  }, Ge = (t) => {
    re(t), b(null), Z("existing"), de(""), ae(""), ve.reset(), j.current = null, L({}), G(true);
  }, ot = () => __async(null, null, function* () {
    if (!P || !ge) return;
    const t = fe.find((d) => String(d.id) === ge);
    if (!t) {
      $({ title: "Select an option", description: "Choose an existing option to attach.", variant: "destructive" });
      return;
    }
    try {
      yield z("POST", `/api/admin/customization-groups/${P}/options`, { name: t.name, description: t.description || "", extraPrice: t.extraPrice, isAvailable: t.isAvailable, channelPrices: it() }), yield ne(), G(false), re(null), de(""), ae(""), L({}), $({ title: "Success", description: "Existing option attached to group" });
    } catch (d) {
      const u = d instanceof Error ? d.message : "Failed to attach existing option";
      $({ title: "Error", description: u, variant: "destructive" });
    }
  }), Je = () => __async(null, null, function* () {
    if (w) try {
      const t = Number(w), u = yield (yield z("POST", `/api/admin/products/${r}/customization-group-assignments`, { groupId: t })).json().catch(() => ({}));
      if (!(u != null && u.alreadyAssigned)) {
        const h = u == null ? void 0 : u.assignedGroup;
        if (h != null && h.id) p((g) => g.some((R) => R.id === h.id) ? g : [...g, h]);
        else {
          const g = I.find((R) => R.id === t);
          g && p((R) => R.some((k) => k.id === g.id) ? R : [...R, __spreadProps(__spreadValues({}, g), { options: [] })]);
        }
      }
      O(""), q(false), x((h) => h.filter((g) => g.id !== t)), yield ne(), $({ title: u != null && u.alreadyAssigned ? "Already assigned" : "Success", description: u != null && u.alreadyAssigned ? "This reusable group is already assigned to the product." : "Reusable group assigned to product" });
    } catch (t) {
      const d = t instanceof Error ? t.message : "Failed to assign reusable group";
      $({ title: "Error", description: d, variant: "destructive" });
    }
  }), yt = (t) => __async(null, null, function* () {
    try {
      yield z("POST", `/api/admin/customization-groups/${t}/publish-to-library`), yield ne(), yield Re(), $({ title: "Success", description: "Group published to reusable library" });
    } catch (d) {
      const u = d instanceof Error ? d.message : "Failed to publish group";
      $({ title: "Error", description: u, variant: "destructive" });
    }
  }), Gt = (t, d) => __async(null, null, function* () {
    const u = o.findIndex((k) => k.id === t);
    if (u === -1) return;
    const h = d === "up" ? u - 1 : u + 1;
    if (h < 0 || h >= o.length) return;
    const g = [...o];
    [g[u], g[h]] = [g[h], g[u]];
    const R = o;
    p(g);
    try {
      const k = localStorage.getItem("adminToken"), te = yield Promise.all([fetch(`/api/admin/customization-groups/${g[u].id}`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${k}` }, body: JSON.stringify({ sortOrder: u, productId: r }) }), fetch(`/api/admin/customization-groups/${g[h].id}`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${k}` }, body: JSON.stringify({ sortOrder: h, productId: r }) })]);
      for (const D of te) if (!D.ok) throw new Error("Failed to update group sort order on the server");
      yield ne(), $({ title: "Success", description: "Group order updated successfully" });
    } catch (e2) {
      p(R), $({ title: "Error", description: "Failed to update group order", variant: "destructive" });
    }
  }), Kt = (t, d, u) => __async(null, null, function* () {
    const h = o.find((H) => H.id === t);
    if (!h || !h.options) return;
    const g = h.options.findIndex((H) => H.id === d);
    if (g === -1) return;
    const R = u === "up" ? g - 1 : g + 1;
    if (R < 0 || R >= h.options.length) return;
    const k = [...h.options];
    [k[g], k[R]] = [k[R], k[g]];
    const te = o, D = o.map((H) => H.id === t ? __spreadProps(__spreadValues({}, H), { options: k }) : H);
    p(D);
    try {
      const H = localStorage.getItem("adminToken"), We = yield Promise.all([fetch(`/api/admin/customization-options/${k[g].id}`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${H}` }, body: JSON.stringify({ sortOrder: g }) }), fetch(`/api/admin/customization-options/${k[R].id}`, { method: "PUT", headers: { "Content-Type": "application/json", Authorization: `Bearer ${H}` }, body: JSON.stringify({ sortOrder: R }) })]);
      for (const Nt of We) if (!Nt.ok) throw new Error("Failed to update option sort order on the server");
      yield ne(), $({ title: "Success", description: "Option order updated successfully" });
    } catch (e2) {
      p(te), $({ title: "Error", description: "Failed to update option order", variant: "destructive" });
    }
  });
  if (oe) return e.jsxs("div", { className: "space-y-4", children: [e.jsx("div", { className: "h-8 bg-gray-200 rounded animate-pulse" }), e.jsx("div", { className: "space-y-2", children: [...Array(3)].map((t, d) => e.jsx("div", { className: "h-20 bg-gray-200 rounded animate-pulse" }, d)) })] });
  const vs = new Set(o.map((t) => (t.name || "").trim().toLowerCase()).filter(Boolean)), bt = I.filter((t) => {
    const d = (t.name || "").trim().toLowerCase(), u = o.some((g) => g.id === t.id), h = d.length > 0 && vs.has(d);
    return !u && !h;
  }), Ut = bt.find((t) => String(t.id) === w), ys = new Set((((Bt = o.find((t) => t.id === P)) == null ? void 0 : Bt.options) || []).map((t) => (t.name || "").trim().toLowerCase()).filter(Boolean)), Vt = fe.filter((t) => !ys.has((t.name || "").trim().toLowerCase()));
  return e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsx("h3", { className: "text-lg font-semibold", children: "Customization Groups" }), e.jsxs("p", { className: "text-sm text-gray-500", children: ["Configure options for ", l] })] }), e.jsxs(Qt, { open: F, onOpenChange: le, children: [e.jsx(Es, { asChild: true, children: e.jsxs(E, { children: [e.jsx(lt, { className: "h-4 w-4 mr-2" }), "Add Group"] }) }), e.jsxs(_t, { children: [e.jsxs(Ht, { children: [e.jsx(Jt, { children: S ? "Edit Customization Group" : "Add Customization Group" }), e.jsx(Wt, { children: 'Create option groups like "Choose a Base", "Select Sauce", etc.' })] }), e.jsx(Ot, __spreadProps(__spreadValues({}, je), { children: e.jsxs("form", { onSubmit: je.handleSubmit(s), className: "space-y-4", children: [e.jsx(J, { control: je.control, name: "name", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Group Name" }), e.jsx(Y, { children: e.jsx(ze, __spreadValues({ placeholder: "Choose a Base" }, t)) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: je.control, name: "description", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Description (Optional)" }), e.jsx(Y, { children: e.jsx(Et, __spreadValues({ placeholder: "Select your preferred base..." }, t)) }), e.jsx(ue, {})] }) }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(J, { control: je.control, name: "minSelections", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Min Selections" }), e.jsx(Y, { children: e.jsx(st, { value: t.value, onChange: (d) => t.onChange(d != null ? d : 0), category: "integer", min: 0 }) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: je.control, name: "maxSelections", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Max Selections" }), e.jsx(Y, { children: e.jsx(st, { value: t.value, onChange: (d) => t.onChange(Math.max(1, d != null ? d : 1)), category: "integer", min: 1 }) }), e.jsx(ue, {})] }) })] }), e.jsx(J, { control: je.control, name: "isRequired", render: ({ field: t }) => e.jsxs(W, { className: "flex items-center space-x-2", children: [e.jsx(Y, { children: e.jsx(qe, { checked: t.value, onCheckedChange: t.onChange }) }), e.jsx(X, { children: "Required Selection" })] }) }), !S && e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(qe, { checked: V, onCheckedChange: _ }), e.jsx(ye, { children: "Save as reusable library group" })] }), e.jsxs("div", { className: "flex justify-end space-x-2", children: [e.jsx(E, { type: "button", variant: "outline", onClick: () => le(false), children: "Cancel" }), e.jsxs(E, { type: "submit", children: [S ? "Update" : "Create", " Group"] })] })] }) }))] })] })] }), e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsx(we, { className: "text-base", children: "Reusable Option Library" }), e.jsx(Ve, { children: "Assign existing reusable groups instead of rebuilding options for each product." })] }), e.jsxs(he, { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 items-start", children: [e.jsxs(Tt, { open: U, onOpenChange: q, children: [e.jsx(Ft, { asChild: true, children: e.jsxs(E, { variant: "outline", role: "combobox", "aria-expanded": U, className: "justify-between", children: [Ut ? Ut.name : "Select a reusable group", e.jsx(Lt, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(Rt, { className: "p-0 w-[380px]", align: "start", children: e.jsxs(dt, { children: [e.jsx(ut, { placeholder: "Type to search reusable groups..." }), e.jsxs(mt, { children: [e.jsx(pt, { children: "No reusable groups found." }), e.jsx(ht, { children: bt.map((t) => e.jsxs(xt, { value: `${t.name} ${t.description || ""}`, onSelect: () => {
    O(String(t.id)), q(false);
  }, children: [e.jsx(ct, { className: Se("mr-2 h-4 w-4", w === String(t.id) ? "opacity-100" : "opacity-0") }), e.jsxs("div", { className: "flex flex-col", children: [e.jsx("span", { children: t.name }), t.description ? e.jsx("span", { className: "text-xs text-muted-foreground", children: t.description }) : null] })] }, t.id)) })] })] }) })] }), e.jsx(E, { type: "button", onClick: Je, disabled: !w, children: "Assign Group" })] }), bt.length === 0 && e.jsx("p", { className: "text-xs text-muted-foreground", children: 'No reusable groups available. Create one and toggle "Save as reusable library group".' })] })] }), e.jsx("div", { className: "space-y-4", children: o.map((t, d) => {
    var u;
    return e.jsxs(pe, { children: [e.jsx(be, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ss, { className: "h-4 w-4 text-gray-400" }), e.jsxs("div", { children: [e.jsxs(we, { className: "text-base flex items-center gap-2", children: [t.name, t.isLibrary && e.jsx(Ne, { variant: "outline", className: "text-xs", children: "Library" }), t.isRequired && e.jsx(Ne, { variant: "destructive", className: "text-xs", children: "Required" })] }), e.jsxs(Ve, { className: "text-sm", children: [t.minSelections === t.maxSelections ? `Select ${t.maxSelections}` : `Select ${t.minSelections}-${t.maxSelections}`, " options"] })] })] }), e.jsxs("div", { className: "flex space-x-1", children: [e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Gt(t.id, "up"), disabled: d === 0, title: "Move group up", children: e.jsx(ts, { className: "h-4 w-4" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Gt(t.id, "down"), disabled: d === o.length - 1, title: "Move group down", children: e.jsx(es, { className: "h-4 w-4" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Ge(t.id), title: "Add option", children: e.jsx(lt, { className: "h-4 w-4" }) }), !t.isLibrary && e.jsx(E, { variant: "ghost", size: "sm", onClick: () => yt(t.id), title: "Publish to reusable library", children: e.jsx(_s, { className: "h-4 w-4" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Oe(t), title: "Edit group", children: e.jsx(Yt, { className: "h-4 w-4" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => K(t.id), title: "Delete group", children: e.jsx(Ct, { className: "h-4 w-4" }) })] })] }) }), e.jsx(he, { children: e.jsxs("div", { className: "space-y-2", children: [(u = t.options) == null ? void 0 : u.map((h, g) => {
      var R;
      return e.jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ss, { className: "h-4 w-4 text-gray-400" }), e.jsx("span", { className: "font-medium", children: h.name }), parseFloat(h.extraPrice) > 0 && e.jsxs(Ne, { variant: "outline", className: "text-xs", children: ["+", St(h.extraPrice)] }), !h.isAvailable && e.jsx(Ne, { variant: "secondary", className: "text-xs", children: "Unavailable" })] }), e.jsxs("div", { className: "flex space-x-1", children: [e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Kt(t.id, h.id, "up"), disabled: g === 0, title: "Move up", children: e.jsx(ts, { className: "h-3 w-3" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Kt(t.id, h.id, "down"), disabled: g === (((R = t.options) == null ? void 0 : R.length) || 0) - 1, title: "Move down", children: e.jsx(es, { className: "h-3 w-3" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => Me(h), title: "Edit option", children: e.jsx(Yt, { className: "h-3 w-3" }) }), e.jsx(E, { variant: "ghost", size: "sm", onClick: () => ie(h, t.name), title: "Delete option", children: e.jsx(Ct, { className: "h-3 w-3" }) })] })] }, h.id);
    }), (!t.options || t.options.length === 0) && e.jsx("div", { className: "text-center py-4 text-gray-500", children: "No options yet. Add your first option above." })] }) })] }, t.id);
  }) }), o.length === 0 && e.jsx(pe, { className: "text-center py-8", children: e.jsxs(he, { children: [e.jsx(cs, { className: "h-8 w-8 text-gray-400 mx-auto mb-2" }), e.jsx("p", { className: "text-gray-500", children: "No customization groups yet. Add your first group to get started." })] }) }), e.jsx(Qt, { open: Q, onOpenChange: (t) => {
    G(t), t || (b(null), re(null), de(""), ae(""), L({}));
  }, children: e.jsx(_t, { className: "max-h-[90vh] max-w-lg overflow-hidden p-0", children: e.jsx(Os, { className: "max-h-[90vh]", children: e.jsxs("div", { className: "p-6", children: [e.jsxs(Ht, { children: [e.jsx(Jt, { children: c ? "Edit Option" : "Add Option" }), e.jsx(Wt, { children: c ? "Configure this option" : "Select an existing option or create a new one for this group" })] }), !c && e.jsxs(os, { value: ce, onValueChange: (t) => Z(t), className: "space-y-4", children: [e.jsxs(ls, { className: "grid w-full grid-cols-2", children: [e.jsx(Be, { value: "existing", children: "Select Existing" }), e.jsx(Be, { value: "new", children: "Create New" })] }), e.jsxs(Ye, { value: "existing", className: "space-y-3", children: [e.jsxs("div", { className: "relative", children: [e.jsx(ds, { className: "absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" }), e.jsx(ze, { className: "pl-9", placeholder: "Search existing options...", value: Pe, onChange: (t) => ae(t.target.value) })] }), e.jsx("div", { className: "max-h-64 overflow-y-auto rounded-md border", children: Fe ? e.jsx("div", { className: "p-4 text-sm text-muted-foreground", children: "Loading options..." }) : Vt.length === 0 ? e.jsx("div", { className: "p-4 text-sm text-muted-foreground", children: 'No options found. Switch to "Create New" to add one.' }) : e.jsx("div", { className: "divide-y", children: Vt.map((t) => {
    const d = ge === String(t.id);
    return e.jsxs("button", { type: "button", className: Se("w-full px-3 py-2 text-left hover:bg-muted/50", d ? "bg-accent" : ""), onClick: () => de(String(t.id)), children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsx("span", { className: "font-medium", children: t.name }), e.jsxs("div", { className: "flex items-center gap-2", children: [Number(t.extraPrice || 0) > 0 && e.jsxs(Ne, { variant: "outline", className: "text-xs", children: ["+", St(t.extraPrice)] }), d ? e.jsx(ct, { className: "h-4 w-4" }) : null] })] }), e.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [t.groupName ? `From ${t.groupName}` : "Reusable option", t.description ? ` \u2022 ${t.description}` : ""] })] }, t.id);
  }) }) }), e.jsxs("div", { className: "flex justify-end space-x-2", children: [e.jsx(E, { type: "button", variant: "outline", onClick: () => G(false), children: "Cancel" }), e.jsx(E, { type: "button", onClick: ot, disabled: !ge, children: "Attach Selected Option" })] })] })] }), (c || ce === "new") && e.jsx(Ot, __spreadProps(__spreadValues({}, ve), { children: e.jsxs("form", { onSubmit: ve.handleSubmit(y), className: "space-y-4", children: [e.jsx(J, { control: ve.control, name: "name", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Option Name" }), e.jsx(Y, { children: e.jsx(ze, __spreadValues({ placeholder: "Jollof Rice" }, t)) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: ve.control, name: "description", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Description (Optional)" }), e.jsx(Y, { children: e.jsx(Et, __spreadValues({ placeholder: "Nigerian spiced rice..." }, t)) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: ve.control, name: "extraPrice", render: ({ field: t }) => e.jsxs(W, { children: [e.jsx(X, { children: "Extra Price (\u20A6)" }), e.jsx(Y, { children: e.jsx(tt, { value: t.value, onValueChange: t.onChange, placeholder: "0.00" }) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: ve.control, name: "isAvailable", render: ({ field: t }) => e.jsxs(W, { className: "flex items-center space-x-2", children: [e.jsx(Y, { children: e.jsx(qe, { checked: t.value, onCheckedChange: t.onChange }) }), e.jsx(X, { children: "Available" })] }) }), ke.length > 0 && e.jsxs("div", { className: "space-y-3 rounded-md border p-3", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium", children: "Sales Channel Prices" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Optional per-channel override prices for this option." })] }), e.jsx("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-2", children: ke.map((t) => {
    const d = Ae(t.value);
    return e.jsxs("div", { className: "space-y-1", children: [e.jsx(ye, { children: t.label }), e.jsx(tt, { value: B[d] || "", onValueChange: (u) => L((h) => __spreadProps(__spreadValues({}, h), { [d]: u })), placeholder: "0.00" })] }, d);
  }) })] }), e.jsxs("div", { className: "flex justify-end space-x-2", children: [e.jsx(E, { type: "button", variant: "outline", onClick: () => G(false), children: "Cancel" }), e.jsxs(E, { type: "submit", children: [c ? "Update" : "Create", " Option"] })] })] }) }))] }) }) }) }), e.jsx(Is, { open: !!n, onOpenChange: (t) => {
    !t && !N && v(null);
  }, children: e.jsxs(Ts, { className: "sm:max-w-md", children: [e.jsxs(Fs, { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-start gap-3", children: [e.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-600", children: e.jsx(Ct, { className: "h-5 w-5" }) }), e.jsxs("div", { className: "space-y-1", children: [e.jsx(Rs, { className: "text-left text-red-600", children: "Delete Option?" }), e.jsx(Xt, { className: "text-left", children: "This will permanently remove this option from the customization group." })] })] }), n && e.jsxs("div", { className: "rounded-2xl border border-red-100 bg-red-50/60 p-4 text-left", children: [e.jsx("p", { className: "text-sm font-semibold text-slate-900", children: n.name }), e.jsxs("p", { className: "mt-1 text-sm text-slate-600", children: ["Group: ", n.groupName] }), Number(n.extraPrice || 0) > 0 && e.jsxs(Ne, { variant: "outline", className: "mt-3 border-red-200 bg-white text-red-700", children: ["+", St(n.extraPrice)] })] }), e.jsx(Xt, { className: "text-left text-sm", children: "Customers will no longer be able to select this option anywhere it appears on this product." })] }), e.jsxs(Ls, { children: [e.jsx(zs, { disabled: N, children: "Keep Option" }), e.jsx(qs, { onClick: (t) => {
    t.preventDefault(), Ee();
  }, disabled: N, className: "bg-red-600 hover:bg-red-700 focus:ring-red-600", children: N ? "Deleting..." : "Delete Option" })] })] }) })] });
};
function Nr({ productId: r, productName: l }) {
  const [i, j] = a.useState(false), [o, p] = a.useState(""), [f, C] = a.useState(""), [I, x] = a.useState(""), [w, O] = a.useState(""), [U, q] = a.useState(false), [V, _] = a.useState(false), [oe, xe] = a.useState(1), [F, le] = a.useState(false), [Q, G] = a.useState({}), [S, M] = a.useState({}), c = is(), { toast: b } = Dt(), P = (s) => s.trim().toLowerCase().replace(/\s+/g, "_"), re = (s) => (s / 100).toFixed(2), ce = (s) => Math.round(parseFloat(s || "0") * 100), { data: Z = [], isLoading: fe } = Le({ queryKey: [`/api/admin/products/${r}/addons`], staleTime: 3e4, refetchOnMount: false, refetchOnWindowFocus: false, refetchInterval: false }), { data: Ce = [], isLoading: Pe } = Le({ queryKey: ["/api/admin/products"] }), { data: ae } = Le({ queryKey: [`/api/admin/products/${r}`] }), { data: ge } = Le({ queryKey: ["/api/admin/settings/sales-channels"], staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), de = Number(ae == null ? void 0 : ae.brandId), Fe = ((ae == null ? void 0 : ae.productSalesChannels) || []).filter((s) => (s == null ? void 0 : s.isListed) !== false).map((s) => P(String((s == null ? void 0 : s.channelValue) || ""))).filter((s) => s.length > 0), ee = ((ge == null ? void 0 : ge.channels) || []).filter((s) => Fe.length === 0 ? true : Fe.includes(P(s.value))), n = (s) => Object.entries(s).map(([y, K]) => ({ salesChannel: y, price: ce(K) })).filter((y) => Number.isFinite(y.price) && y.price > 0), { data: v = [] } = Le({ queryKey: ["/api/admin/addon-presets", de], enabled: Number.isFinite(de), queryFn: () => __async(null, null, function* () {
    return (yield z("GET", `/api/admin/addon-presets?brandId=${de}`)).json();
  }) }), { data: N = [] } = Le({ queryKey: [`/api/admin/products/${r}/addon-preset-assignments`], staleTime: 3e4, refetchOnMount: false, refetchOnWindowFocus: false, refetchInterval: false }), m = Ce.filter((s) => s.id !== r && !Z.some((y) => y.addonProductId === s.id)), A = $e({ mutationFn: (s) => __async(null, null, function* () {
    return (yield z("POST", `/api/admin/products/${r}/addons`, s)).json();
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), j(false), p(""), xe(1), le(false), G({}), b({ title: "Add-on created", description: "Product add-on has been successfully created." });
  }, onError: (s) => {
    const y = s instanceof Error ? s.message : "Failed to create add-on. Please try again.";
    b({ title: "Error", description: y, variant: "destructive" }), console.error("Create addon error:", s);
  } }), T = $e({ mutationFn: (_0) => __async(null, [_0], function* ({ id: s, data: y }) {
    return (yield z("PUT", `/api/admin/addons/${s}`, y)).json();
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), b({ title: "Add-on updated", description: "Product add-on has been successfully updated." });
  }, onError: (s) => {
    b({ title: "Error", description: "Failed to update add-on. Please try again.", variant: "destructive" }), console.error("Update addon error:", s);
  } }), B = $e({ mutationFn: (_0) => __async(null, [_0], function* ({ id: s, channelPrices: y }) {
    return (yield z("PUT", `/api/admin/addons/${s}/channel-prices`, { channelPrices: y })).json();
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), b({ title: "Channel prices updated", description: "Add-on channel prices saved successfully." });
  }, onError: (s) => {
    const y = s instanceof Error ? s.message : "Failed to update channel prices.";
    b({ title: "Error", description: y, variant: "destructive" });
  } }), L = $e({ mutationFn: (s) => __async(null, null, function* () {
    yield z("DELETE", `/api/admin/addons/${s}`);
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), b({ title: "Add-on deleted", description: "Product add-on has been successfully deleted." });
  }, onError: (s) => {
    b({ title: "Error", description: "Failed to delete add-on. Please try again.", variant: "destructive" }), console.error("Delete addon error:", s);
  } }), $ = $e({ mutationFn: (s) => __async(null, null, function* () {
    return (yield z("POST", `/api/admin/products/${r}/addon-preset-assignments`, { presetId: s })).json();
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addon-preset-assignments`] }), c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), C(""), b({ title: "Preset assigned", description: "Reusable add-on preset assigned to this product." });
  }, onError: (s) => {
    b({ title: "Error", description: "Failed to assign add-on preset.", variant: "destructive" }), console.error("Assign preset error:", s);
  } }), _e = $e({ mutationFn: (s) => __async(null, null, function* () {
    yield z("DELETE", `/api/admin/products/${r}/addon-preset-assignments/${s}`);
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addon-preset-assignments`] }), c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), b({ title: "Preset removed", description: "Preset unlinked from this product." });
  }, onError: (s) => {
    b({ title: "Error", description: "Failed to remove preset assignment.", variant: "destructive" }), console.error("Unassign preset error:", s);
  } }), nt = $e({ mutationFn: (s) => __async(null, null, function* () {
    return (yield z("POST", `/api/admin/products/${r}/addon-presets/from-current`, { name: s })).json();
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: ["/api/admin/addon-presets", de] }), c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addon-preset-assignments`] }), c.invalidateQueries({ queryKey: [`/api/admin/products/${r}/addons`] }), b({ title: "Preset created", description: "Current add-ons saved as a reusable preset and assigned." });
  }, onError: (s) => {
    b({ title: "Error", description: "Failed to save current add-ons as preset.", variant: "destructive" }), console.error("Create preset from current error:", s);
  } }), Ae = $e({ mutationFn: (s) => __async(null, null, function* () {
    const K = yield (yield z("POST", "/api/admin/addon-presets", { brandId: de, name: s.name })).json();
    return yield z("POST", `/api/admin/addon-presets/${K.id}/items`, { addonProductId: s.addonProductId, isRequired: false, maxQuantity: 1, sortOrder: 0, isActive: true }), K;
  }), onSuccess: () => {
    c.invalidateQueries({ queryKey: ["/api/admin/addon-presets", de] }), x(""), O(""), b({ title: "Preset created", description: "Reusable add-on preset created successfully." });
  }, onError: (s) => {
    const y = s instanceof Error ? s.message : "Failed to create preset.";
    b({ title: "Error", description: y, variant: "destructive" });
  } }), gt = () => {
    o && A.mutate({ addonProductId: Number(o), isRequired: F, maxQuantity: oe, channelPrices: n(Q) });
  }, jt = (s) => {
    const y = S[s] || {};
    B.mutate({ id: s, channelPrices: n(y) });
  }, ke = (s, y, K) => {
    T.mutate({ id: s, data: { [y]: K } });
  }, je = (s) => {
    confirm("Are you sure you want to delete this add-on?") && L.mutate(s);
  }, ve = () => {
    f && $.mutate(Number(f));
  }, vt = () => {
    const s = `${l} Add-ons`, y = window.prompt("Preset name", s);
    !y || !y.trim() || nt.mutate(y.trim());
  }, it = () => {
    !I.trim() || !w || Ae.mutate({ name: I.trim(), addonProductId: Number(w) });
  }, Re = v.filter((s) => !N.some((y) => y.presetId === s.id)), He = Re.find((s) => String(s.id) === f), ne = m.find((s) => String(s.id) === w);
  return a.useEffect(() => {
    if (ee.length === 0 || Object.keys(Q).length > 0) return;
    const s = {};
    for (const y of ee) s[P(y.value)] = "";
    G(s);
  }, [ee, Q]), a.useEffect(() => {
    Z.length === 0 || ee.length === 0 || M((s) => {
      var ie, Ee;
      const y = __spreadValues({}, s);
      let K = false;
      for (const Oe of Z) {
        if (y[Oe.id]) continue;
        const Me = {};
        for (const Ge of ee) {
          const ot = P(Ge.value), Je = (Ee = (ie = Oe.channelPrices) == null ? void 0 : ie.find((yt) => P(yt.salesChannel) === ot)) == null ? void 0 : Ee.price;
          Me[ot] = Je && Je > 0 ? re(Je) : "";
        }
        y[Oe.id] = Me, K = true;
      }
      return K ? y : s;
    });
  }, [Z, ee]), fe || Pe ? e.jsxs(pe, { children: [e.jsx(be, { children: e.jsxs(we, { className: "flex items-center gap-2", children: [e.jsx(Ze, { className: "h-5 w-5" }), "Product Add-ons"] }) }), e.jsx(he, { children: e.jsx("div", { className: "text-center py-8", children: "Loading..." }) })] }) : e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsxs(we, { className: "flex items-center gap-2", children: [e.jsx(Ze, { className: "h-5 w-5" }), "Product Add-ons for ", l] }), e.jsx("p", { className: "text-sm text-muted-foreground", children: "Link other products as add-ons that customers can purchase alongside this item." })] }), e.jsxs(he, { className: "space-y-6", children: [e.jsxs(pe, { children: [e.jsx(be, { children: e.jsx(we, { className: "text-lg", children: "Reusable Add-on Presets" }) }), e.jsxs(he, { className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2", children: [e.jsxs(Tt, { open: U, onOpenChange: q, children: [e.jsx(Ft, { asChild: true, children: e.jsxs(E, { variant: "outline", role: "combobox", "aria-expanded": U, className: "justify-between", children: [He ? `${He.name} (${He.items.length} items)` : "Select an add-on preset", e.jsx(Lt, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(Rt, { className: "p-0 w-[420px]", align: "start", children: e.jsxs(dt, { children: [e.jsx(ut, { placeholder: "Type to search presets..." }), e.jsxs(mt, { children: [e.jsx(pt, { children: "No presets found." }), e.jsx(ht, { children: Re.map((s) => e.jsxs(xt, { value: `${s.name} ${s.description || ""}`, onSelect: () => {
    C(String(s.id)), q(false);
  }, children: [e.jsx(ct, { className: Se("mr-2 h-4 w-4", f === String(s.id) ? "opacity-100" : "opacity-0") }), e.jsxs("span", { children: [s.name, " (", s.items.length, " items)"] })] }, s.id)) })] })] }) })] }), e.jsx(E, { onClick: ve, disabled: !f || $.isPending, children: "Assign Preset" })] }), v.length === 0 && e.jsxs("div", { className: "rounded-md border border-dashed p-3 text-sm text-muted-foreground space-y-3", children: [e.jsx("p", { children: "No reusable add-on presets yet." }), e.jsx("p", { children: 'Add direct add-ons then use "Save Current As Preset", or quickly create a preset from an existing product below.' }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-2", children: [e.jsx(ze, { placeholder: "Preset name", value: I, onChange: (s) => x(s.target.value) }), e.jsxs(Tt, { open: V, onOpenChange: _, children: [e.jsx(Ft, { asChild: true, children: e.jsxs(E, { variant: "outline", role: "combobox", "aria-expanded": V, className: "justify-between", children: [ne ? ne.name : "Select product", e.jsx(Lt, { className: "ml-2 h-4 w-4 shrink-0 opacity-50" })] }) }), e.jsx(Rt, { className: "p-0 w-[420px]", align: "start", children: e.jsxs(dt, { children: [e.jsx(ut, { placeholder: "Type to search products..." }), e.jsxs(mt, { children: [e.jsx(pt, { children: "No products found." }), e.jsx(ht, { children: m.map((s) => e.jsxs(xt, { value: `${s.name}`, onSelect: () => {
    O(String(s.id)), _(false);
  }, children: [e.jsx(ct, { className: Se("mr-2 h-4 w-4", w === String(s.id) ? "opacity-100" : "opacity-0") }), e.jsx("span", { children: s.name })] }, s.id)) })] })] }) })] }), e.jsx(E, { type: "button", onClick: it, disabled: Ae.isPending || !I.trim() || !w, children: "Create Preset" })] })] }), e.jsx("div", { className: "flex gap-2", children: e.jsx(E, { variant: "outline", onClick: vt, disabled: nt.isPending || Z.length === 0, children: "Save Current As Preset" }) }), N.length > 0 && e.jsxs("div", { className: "space-y-2", children: [e.jsx(ye, { children: "Assigned Presets" }), e.jsx("div", { className: "flex flex-wrap gap-2", children: N.map((s) => {
    var y, K;
    return e.jsxs(Ne, { variant: "secondary", className: "flex items-center gap-2", children: [(y = s.preset) == null ? void 0 : y.name, e.jsx("button", { type: "button", onClick: () => _e.mutate(s.presetId), className: "text-xs", "aria-label": `Remove ${(K = s.preset) == null ? void 0 : K.name}`, children: "\xD7" })] }, s.id);
  }) })] })] })] }), i ? e.jsxs(pe, { children: [e.jsx(be, { children: e.jsx(we, { className: "text-lg", children: "Add New Add-on" }) }), e.jsxs(he, { className: "space-y-4", children: [e.jsxs("div", { className: "space-y-2", children: [e.jsx(ye, { htmlFor: "addon-product", children: "Select Product" }), e.jsxs(Ds, { value: o, onValueChange: p, children: [e.jsx(Ms, { children: e.jsx(Gs, { placeholder: "Choose a product to add as add-on" }) }), e.jsx(Ks, { children: m.map((s) => e.jsxs(Us, { value: s.id.toString(), children: [s.name, " - $", s.basePrice] }, s.id)) })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(ye, { htmlFor: "max-quantity", children: "Maximum Quantity" }), e.jsx(st, { id: "max-quantity", category: "integer", min: 1, value: oe, onChange: (s) => xe(Math.max(1, s != null ? s : 1)) })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(qe, { id: "required", checked: F, onCheckedChange: le }), e.jsx(ye, { htmlFor: "required", children: "Required Add-on" })] }), ee.length > 0 && e.jsxs("div", { className: "space-y-3 rounded-md border p-3", children: [e.jsxs("div", { children: [e.jsx("p", { className: "text-sm font-medium", children: "Sales Channel Prices" }), e.jsx("p", { className: "text-xs text-muted-foreground", children: "Optional per-channel override prices for this add-on relationship." })] }), e.jsx("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-2", children: ee.map((s) => {
    const y = P(s.value);
    return e.jsxs("div", { className: "space-y-1", children: [e.jsx(ye, { children: s.label }), e.jsx(tt, { value: Q[y] || "", onValueChange: (K) => G((ie) => __spreadProps(__spreadValues({}, ie), { [y]: K })), placeholder: "0.00" })] }, y);
  }) })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(E, { onClick: gt, disabled: !o || A.isPending, children: A.isPending ? "Creating..." : "Create Add-on" }), e.jsx(E, { variant: "outline", onClick: () => j(false), children: "Cancel" })] })] })] }) : e.jsxs(E, { onClick: () => j(true), disabled: m.length === 0, children: [e.jsx(lt, { className: "h-4 w-4 mr-2" }), "Add Product Add-on"] }), m.length === 0 && !i && e.jsx("p", { className: "text-sm text-muted-foreground", children: "No products available to add as add-ons. All products are either already added or this is the only product." }), Z.length > 0 && e.jsxs("div", { className: "space-y-4", children: [e.jsxs("h3", { className: "font-semibold", children: ["Current Add-ons (", Z.length, ")"] }), Z.map((s) => {
    var _a, _b, _c;
    var y, K;
    return e.jsx(pe, { className: "border-l-4 border-l-blue-500", children: e.jsxs(he, { className: "p-4", children: [e.jsxs("div", { className: "flex items-start justify-between", children: [e.jsxs("div", { className: "flex-1", children: [e.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [e.jsx("h4", { className: "font-medium", children: (y = s.addonProduct) == null ? void 0 : y.name }), e.jsx(Ne, { variant: s.isRequired ? "destructive" : "secondary", children: s.isRequired ? "Required" : "Optional" }), e.jsx(Ne, { variant: s.isActive ? "default" : "secondary", children: s.isActive ? "Active" : "Inactive" })] }), e.jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: ["Base Price: $", (K = s.addonProduct) == null ? void 0 : K.basePrice] }), e.jsxs("p", { className: "text-sm text-muted-foreground", children: ["Max Quantity: ", s.maxQuantity] })] }), e.jsx("div", { className: "flex items-center gap-2", children: e.jsx(E, { variant: "ghost", size: "sm", onClick: () => je(s.id), disabled: L.isPending, children: e.jsx(bs, { className: "h-4 w-4" }) }) })] }), e.jsxs("div", { className: "flex items-center gap-4 mt-4", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(qe, { id: `required-${s.id}`, checked: (_a = s.isRequired) != null ? _a : false, onCheckedChange: (ie) => ke(s.id, "isRequired", ie), disabled: T.isPending }), e.jsx(ye, { htmlFor: `required-${s.id}`, children: "Required" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(qe, { id: `active-${s.id}`, checked: (_b = s.isActive) != null ? _b : false, onCheckedChange: (ie) => ke(s.id, "isActive", ie), disabled: T.isPending }), e.jsx(ye, { htmlFor: `active-${s.id}`, children: "Active" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(ye, { htmlFor: `max-qty-${s.id}`, children: "Max Qty:" }), e.jsx(st, { id: `max-qty-${s.id}`, category: "integer", min: 1, value: (_c = s.maxQuantity) != null ? _c : 1, onChange: (ie) => ke(s.id, "maxQuantity", Math.max(1, ie != null ? ie : 1)), className: "w-20", disabled: T.isPending })] })] }), ee.length > 0 && e.jsxs("div", { className: "mt-4 space-y-3 rounded-md border p-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx("p", { className: "text-sm font-medium", children: "Sales Channel Prices" }), e.jsx(E, { variant: "outline", size: "sm", onClick: () => jt(s.id), disabled: B.isPending, children: "Save Channel Prices" })] }), e.jsx("div", { className: "grid grid-cols-1 gap-3 md:grid-cols-2", children: ee.map((ie) => {
      var Oe;
      const Ee = P(ie.value);
      return e.jsxs("div", { className: "space-y-1", children: [e.jsx(ye, { children: ie.label }), e.jsx(tt, { value: ((Oe = S[s.id]) == null ? void 0 : Oe[Ee]) || "", onValueChange: (Me) => M((Ge) => __spreadProps(__spreadValues({}, Ge), { [s.id]: __spreadProps(__spreadValues({}, Ge[s.id] || {}), { [Ee]: Me }) })), placeholder: "0.00" })] }, `${s.id}-${Ee}`);
    }) })] })] }) }, s.id);
  })] }), Z.length === 0 && !i && e.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [e.jsx(Ze, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "No add-ons configured for this product." }), e.jsx("p", { className: "text-sm", children: "Add-ons allow customers to purchase additional items alongside this product." })] })] })] });
}
const wr = Ss.extend({ name: se.string().min(1, "Product name is required"), description: se.string().min(1, "Description is required"), basePrice: se.string().min(1, "Base price is required"), categoryId: se.number().min(1, "Category is required"), preparationTime: se.number().min(1, "Preparation time must be at least 1 minute").default(15) });
function wa() {
  const [r, l] = Ns("/control/products/:id"), [, i] = ws(), j = l != null && l.id ? parseInt(l.id) : null, [o, p] = a.useState(null), [f, C] = a.useState([]), [I, x] = a.useState(true), [w, O] = a.useState(false), [U, q] = a.useState("details"), { toast: V } = Dt(), { selectedBrandId: _, isLoading: oe } = $s(), xe = is(), F = $t({ resolver: It(wr), defaultValues: { name: "", description: "", basePrice: "", categoryId: 0, slug: "", imageUrl: "", isActive: true, preparationTime: 15 } });
  a.useEffect(() => {
    j && _ && le();
  }, [j, _]);
  const le = () => __async(null, null, function* () {
    if (!(!j || !_)) try {
      x(true);
      const [c, b] = yield Promise.all([z("GET", `/api/admin/products/${j}`), z("GET", "/api/admin/categories")]), [P, re] = yield Promise.all([c.json(), b.json()]);
      p(P), C(re), F.reset({ name: P.name, description: P.description || "", basePrice: P.basePrice.toString(), categoryId: P.categoryId, slug: P.slug, imageUrl: P.imageUrl || "", isActive: P.isActive, preparationTime: P.preparationTime || 15 });
    } catch (e2) {
      V({ title: "Error", description: "Failed to load product details", variant: "destructive" });
    } finally {
      x(false);
    }
  }), Q = (c) => c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""), G = (c) => {
    const b = Q(c);
    F.setValue("name", c), F.setValue("slug", b);
  }, S = (c) => __async(null, null, function* () {
    if (!(!j || !_)) {
      O(true);
      try {
        const b = { name: c.name, description: c.description, basePrice: parseFloat(c.basePrice), categoryId: c.categoryId, slug: c.slug, imageUrl: c.imageUrl, isActive: c.isActive, preparationTime: c.preparationTime, brandId: _ }, re = yield (yield z("PUT", `/api/admin/products/${j}`, b)).json();
        p(re), xe.invalidateQueries({ predicate: (ce) => Array.isArray(ce.queryKey) && typeof ce.queryKey[0] == "string" && ce.queryKey[0].includes("/api/products") }), le(), V({ title: "Success", description: "Product updated successfully" });
      } catch (b) {
        V({ title: "Error", description: b instanceof Error ? b.message : "Failed to update product", variant: "destructive" });
      } finally {
        O(false);
      }
    }
  }), M = () => __async(null, null, function* () {
    if (!(!o || !_)) try {
      const b = yield (yield z("PUT", `/api/admin/products/${o.id}`, { isActive: !o.isActive, brandId: _ })).json();
      p(b), F.setValue("isActive", b.isActive), xe.invalidateQueries({ predicate: (P) => Array.isArray(P.queryKey) && typeof P.queryKey[0] == "string" && P.queryKey[0].includes("/api/products") }), le(), V({ title: "Success", description: `Product ${b.isActive ? "activated" : "deactivated"}` });
    } catch (e2) {
      V({ title: "Error", description: "Failed to update product status", variant: "destructive" });
    }
  });
  return j ? I || oe ? e.jsx(wt, { currentPage: "products", children: e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex items-center gap-4", children: e.jsxs(E, { variant: "ghost", size: "sm", onClick: () => i("/control/products"), children: [e.jsx(Zt, { className: "h-4 w-4 mr-2" }), "Back to Products"] }) }), e.jsxs(pe, { className: "animate-pulse", children: [e.jsxs(be, { children: [e.jsx("div", { className: "h-6 bg-gray-200 rounded w-1/3" }), e.jsx("div", { className: "h-4 bg-gray-200 rounded w-1/2" })] }), e.jsx(he, { children: e.jsxs("div", { className: "space-y-4", children: [e.jsx("div", { className: "h-4 bg-gray-200 rounded" }), e.jsx("div", { className: "h-4 bg-gray-200 rounded w-2/3" })] }) })] })] }) }) : e.jsx(wt, { currentPage: "products", children: e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "flex items-center gap-4", children: [e.jsxs(E, { variant: "ghost", size: "sm", onClick: () => i("/control/products"), children: [e.jsx(Zt, { className: "h-4 w-4 mr-2" }), "Back to Products"] }), e.jsxs("div", { children: [e.jsxs("h2", { className: "text-3xl font-bold flex items-center gap-3", children: [e.jsx(Ze, { className: "h-8 w-8" }), o == null ? void 0 : o.name, e.jsx(Ne, { variant: o != null && o.isActive ? "default" : "secondary", children: o != null && o.isActive ? "Active" : "Inactive" })] }), e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Manage all aspects of this product" })] })] }), e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(E, { variant: "outline", onClick: M, className: "flex items-center gap-2", children: o != null && o.isActive ? e.jsxs(e.Fragment, { children: [e.jsx(Vs, { className: "h-4 w-4" }), "Deactivate"] }) : e.jsxs(e.Fragment, { children: [e.jsx(Bs, { className: "h-4 w-4" }), "Activate"] }) }), e.jsxs(E, { onClick: F.handleSubmit(S), disabled: w, className: "flex items-center gap-2", children: [e.jsx(Qs, { className: "h-4 w-4" }), w ? "Saving..." : "Save Changes"] })] })] }), e.jsxs(os, { value: U, onValueChange: q, className: "w-full", children: [e.jsxs(ls, { className: "grid w-full grid-cols-2 sm:grid-cols-4 h-auto sm:h-10", children: [e.jsx(Be, { value: "details", children: "Product Details" }), e.jsx(Be, { value: "customizations", children: "Required Options" }), e.jsx(Be, { value: "addons", children: "Add-ons" }), e.jsx(Be, { value: "availability", children: "Outlet Availability" })] }), e.jsx(Ye, { value: "details", children: e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsx(we, { children: "Product Information" }), e.jsx(Ve, { children: "Update basic product details, pricing, and categorization" })] }), e.jsx(he, { children: e.jsx(Ot, __spreadProps(__spreadValues({}, F), { children: e.jsx("form", { onSubmit: F.handleSubmit(S), className: "space-y-6", children: e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [e.jsx(J, { control: F.control, name: "name", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "Product Name" }), e.jsx(Y, { children: e.jsx(ze, __spreadProps(__spreadValues({}, c), { onChange: (b) => G(b.target.value), placeholder: "Enter product name" })) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: F.control, name: "basePrice", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "Base Price (\u20A6)" }), e.jsx(Y, { children: e.jsx(tt, { value: c.value, onValueChange: c.onChange, placeholder: "0.00" }) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: F.control, name: "preparationTime", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "Preparation Time (minutes)" }), e.jsx(Y, { children: e.jsx(st, { value: c.value || 15, onChange: (b) => c.onChange(Math.max(1, b != null ? b : 15)), category: "integer", min: 1, placeholder: "15" }) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: F.control, name: "categoryId", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "Category" }), e.jsx(Y, { children: e.jsxs("select", __spreadProps(__spreadValues({}, c), { value: c.value, onChange: (b) => c.onChange(parseInt(b.target.value)), className: "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background", children: [e.jsx("option", { value: 0, children: "Select category" }), f.map((b) => e.jsx("option", { value: b.id, children: b.name }, b.id))] })) }), e.jsx(ue, {})] }) }), e.jsx(J, { control: F.control, name: "slug", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "URL Slug" }), e.jsx(Y, { children: e.jsx(ze, __spreadProps(__spreadValues({}, c), { placeholder: "product-url-slug" })) }), e.jsx(ue, {})] }) }), e.jsx("div", { className: "md:col-span-2", children: e.jsx(J, { control: F.control, name: "imageUrl", render: ({ field: c }) => {
    var _a;
    return e.jsxs(W, { children: [e.jsx(X, { children: "Image URL" }), e.jsx(Y, { children: e.jsx(ze, __spreadProps(__spreadValues({}, c), { value: (_a = c.value) != null ? _a : "", placeholder: "https://example.com/image.jpg" })) }), e.jsx(ue, {})] });
  } }) }), e.jsx("div", { className: "md:col-span-2", children: e.jsx(J, { control: F.control, name: "description", render: ({ field: c }) => e.jsxs(W, { children: [e.jsx(X, { children: "Description" }), e.jsx(Y, { children: e.jsx(Et, __spreadProps(__spreadValues({}, c), { placeholder: "Describe the product...", rows: 4 })) }), e.jsx(ue, {})] }) }) }), e.jsx("div", { className: "md:col-span-2", children: e.jsx(J, { control: F.control, name: "isActive", render: ({ field: c }) => {
    var _a;
    return e.jsxs(W, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(X, { className: "text-base", children: "Active Status" }), e.jsx("div", { className: "text-sm text-muted-foreground", children: "Enable this product for ordering" })] }), e.jsx(Y, { children: e.jsx(qe, { checked: (_a = c.value) != null ? _a : false, onCheckedChange: c.onChange }) })] });
  } }) })] }) }) })) })] }) }), e.jsx(Ye, { value: "customizations", children: e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsxs(we, { className: "flex items-center gap-2", children: [e.jsx(cs, { className: "h-5 w-5" }), "Required Options & Sub-options"] }), e.jsx(Ve, { children: "Configure required option groups and their sub-options with individual pricing" })] }), e.jsx(he, { children: o && e.jsx(br, { productId: o.id, productName: o.name }) })] }) }), e.jsx(Ye, { value: "addons", children: e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsxs(we, { className: "flex items-center gap-2", children: [e.jsx(lt, { className: "h-5 w-5" }), "Product Add-ons"] }), e.jsx(Ve, { children: "Link other products as add-ons that customers can purchase alongside this item" })] }), e.jsx(he, { children: o && e.jsx(Nr, { productId: o.id, productName: o.name }) })] }) }), e.jsx(Ye, { value: "availability", children: e.jsxs(pe, { children: [e.jsxs(be, { children: [e.jsx(we, { children: "Outlet Availability" }), e.jsx(Ve, { children: "Manage product availability and pricing across different outlets" })] }), e.jsx(he, { children: e.jsxs("div", { className: "text-center py-8 text-muted-foreground", children: [e.jsx(Ze, { className: "h-12 w-12 mx-auto mb-4 opacity-50" }), e.jsx("p", { children: "Outlet availability management coming soon" }), e.jsx("p", { className: "text-sm", children: "Configure which outlets can sell this product and set outlet-specific pricing" })] }) })] }) })] })] }) }) : e.jsx(wt, { currentPage: "products", children: e.jsx("div", { className: "space-y-6", children: e.jsxs("div", { className: "text-center py-8", children: [e.jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100", children: "Product Not Found" }), e.jsx("p", { className: "text-gray-500 dark:text-gray-400 mt-2", children: "The requested product could not be found." })] }) }) });
}
export { wa as default };
