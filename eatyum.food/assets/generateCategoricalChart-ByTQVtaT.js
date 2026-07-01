import { ai as Xn, ag as ue, r as R, af as ee, $ } from "./index-DOfu0sXg.js";
var my = Array.isArray, Ne = my, by = typeof Xn == "object" && Xn && Xn.Object === Object && Xn, Wp = by, xy = Wp, wy = typeof self == "object" && self && self.Object === Object && self, Oy = xy || wy || Function("return this")(), at = Oy, Sy = at, _y = Sy.Symbol, Ln = _y, es = Ln, Up = Object.prototype, Ay = Up.hasOwnProperty, Py = Up.toString, Ur = es ? es.toStringTag : void 0;
function $y(e6) {
  var t = Ay.call(e6, Ur), r = e6[Ur];
  try {
    e6[Ur] = void 0;
    var n = true;
  } catch (e7) {
  }
  var i = Py.call(e6);
  return n && (t ? e6[Ur] = r : delete e6[Ur]), i;
}
var Ty = $y, Ey = Object.prototype, jy = Ey.toString;
function My(e6) {
  return jy.call(e6);
}
var Cy = My, ts = Ln, Iy = Ty, Ny = Cy, Dy = "[object Null]", ky = "[object Undefined]", rs = ts ? ts.toStringTag : void 0;
function Ry(e6) {
  return e6 == null ? e6 === void 0 ? ky : Dy : rs && rs in Object(e6) ? Iy(e6) : Ny(e6);
}
var yt = Ry;
function By(e6) {
  return e6 != null && typeof e6 == "object";
}
var gt = By, Ly = yt, Fy = gt, Wy = "[object Symbol]";
function Uy(e6) {
  return typeof e6 == "symbol" || Fy(e6) && Ly(e6) == Wy;
}
var Mr = Uy, zy = Ne, qy = Mr, Hy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gy = /^\w*$/;
function Ky(e6, t) {
  if (zy(e6)) return false;
  var r = typeof e6;
  return r == "number" || r == "symbol" || r == "boolean" || e6 == null || qy(e6) ? true : Gy.test(e6) || !Hy.test(e6) || t != null && e6 in Object(t);
}
var Xu = Ky;
function Xy(e6) {
  var t = typeof e6;
  return e6 != null && (t == "object" || t == "function");
}
var Pt = Xy;
const Cr = ue(Pt);
var Vy = yt, Yy = Pt, Zy = "[object AsyncFunction]", Jy = "[object Function]", Qy = "[object GeneratorFunction]", eg = "[object Proxy]";
function tg(e6) {
  if (!Yy(e6)) return false;
  var t = Vy(e6);
  return t == Jy || t == Qy || t == Zy || t == eg;
}
var Vu = tg;
const Y = ue(Vu);
var rg = at, ng = rg["__core-js_shared__"], ig = ng, Za = ig, ns = (function() {
  var e6 = /[^.]+$/.exec(Za && Za.keys && Za.keys.IE_PROTO || "");
  return e6 ? "Symbol(src)_1." + e6 : "";
})();
function ag(e6) {
  return !!ns && ns in e6;
}
var og = ag, ug = Function.prototype, cg = ug.toString;
function sg(e6) {
  if (e6 != null) {
    try {
      return cg.call(e6);
    } catch (e7) {
    }
    try {
      return e6 + "";
    } catch (e7) {
    }
  }
  return "";
}
var zp = sg, lg = Vu, fg = og, pg = Pt, hg = zp, dg = /[\\^$.*+?()[\]{}|]/g, vg = /^\[object .+?Constructor\]$/, yg = Function.prototype, gg = Object.prototype, mg = yg.toString, bg = gg.hasOwnProperty, xg = RegExp("^" + mg.call(bg).replace(dg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function wg(e6) {
  if (!pg(e6) || fg(e6)) return false;
  var t = lg(e6) ? xg : vg;
  return t.test(hg(e6));
}
var Og = wg;
function Sg(e6, t) {
  return e6 == null ? void 0 : e6[t];
}
var _g = Sg, Ag = Og, Pg = _g;
function $g(e6, t) {
  var r = Pg(e6, t);
  return Ag(r) ? r : void 0;
}
var Vt = $g, Tg = Vt, Eg = Tg(Object, "create"), ua = Eg, is = ua;
function jg() {
  this.__data__ = is ? is(null) : {}, this.size = 0;
}
var Mg = jg;
function Cg(e6) {
  var t = this.has(e6) && delete this.__data__[e6];
  return this.size -= t ? 1 : 0, t;
}
var Ig = Cg, Ng = ua, Dg = "__lodash_hash_undefined__", kg = Object.prototype, Rg = kg.hasOwnProperty;
function Bg(e6) {
  var t = this.__data__;
  if (Ng) {
    var r = t[e6];
    return r === Dg ? void 0 : r;
  }
  return Rg.call(t, e6) ? t[e6] : void 0;
}
var Lg = Bg, Fg = ua, Wg = Object.prototype, Ug = Wg.hasOwnProperty;
function zg(e6) {
  var t = this.__data__;
  return Fg ? t[e6] !== void 0 : Ug.call(t, e6);
}
var qg = zg, Hg = ua, Gg = "__lodash_hash_undefined__";
function Kg(e6, t) {
  var r = this.__data__;
  return this.size += this.has(e6) ? 0 : 1, r[e6] = Hg && t === void 0 ? Gg : t, this;
}
var Xg = Kg, Vg = Mg, Yg = Ig, Zg = Lg, Jg = qg, Qg = Xg;
function Ir(e6) {
  var t = -1, r = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t < r; ) {
    var n = e6[t];
    this.set(n[0], n[1]);
  }
}
Ir.prototype.clear = Vg;
Ir.prototype.delete = Yg;
Ir.prototype.get = Zg;
Ir.prototype.has = Jg;
Ir.prototype.set = Qg;
var em = Ir;
function tm() {
  this.__data__ = [], this.size = 0;
}
var rm = tm;
function nm(e6, t) {
  return e6 === t || e6 !== e6 && t !== t;
}
var Yu = nm, im = Yu;
function am(e6, t) {
  for (var r = e6.length; r--; ) if (im(e6[r][0], t)) return r;
  return -1;
}
var ca = am, om = ca, um = Array.prototype, cm = um.splice;
function sm(e6) {
  var t = this.__data__, r = om(t, e6);
  if (r < 0) return false;
  var n = t.length - 1;
  return r == n ? t.pop() : cm.call(t, r, 1), --this.size, true;
}
var lm = sm, fm = ca;
function pm(e6) {
  var t = this.__data__, r = fm(t, e6);
  return r < 0 ? void 0 : t[r][1];
}
var hm = pm, dm = ca;
function vm(e6) {
  return dm(this.__data__, e6) > -1;
}
var ym = vm, gm = ca;
function mm(e6, t) {
  var r = this.__data__, n = gm(r, e6);
  return n < 0 ? (++this.size, r.push([e6, t])) : r[n][1] = t, this;
}
var bm = mm, xm = rm, wm = lm, Om = hm, Sm = ym, _m = bm;
function Nr(e6) {
  var t = -1, r = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t < r; ) {
    var n = e6[t];
    this.set(n[0], n[1]);
  }
}
Nr.prototype.clear = xm;
Nr.prototype.delete = wm;
Nr.prototype.get = Om;
Nr.prototype.has = Sm;
Nr.prototype.set = _m;
var sa = Nr, Am = Vt, Pm = at, $m = Am(Pm, "Map"), Zu = $m, as = em, Tm = sa, Em = Zu;
function jm() {
  this.size = 0, this.__data__ = { hash: new as(), map: new (Em || Tm)(), string: new as() };
}
var Mm = jm;
function Cm(e6) {
  var t = typeof e6;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e6 !== "__proto__" : e6 === null;
}
var Im = Cm, Nm = Im;
function Dm(e6, t) {
  var r = e6.__data__;
  return Nm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var la = Dm, km = la;
function Rm(e6) {
  var t = km(this, e6).delete(e6);
  return this.size -= t ? 1 : 0, t;
}
var Bm = Rm, Lm = la;
function Fm(e6) {
  return Lm(this, e6).get(e6);
}
var Wm = Fm, Um = la;
function zm(e6) {
  return Um(this, e6).has(e6);
}
var qm = zm, Hm = la;
function Gm(e6, t) {
  var r = Hm(this, e6), n = r.size;
  return r.set(e6, t), this.size += r.size == n ? 0 : 1, this;
}
var Km = Gm, Xm = Mm, Vm = Bm, Ym = Wm, Zm = qm, Jm = Km;
function Dr(e6) {
  var t = -1, r = e6 == null ? 0 : e6.length;
  for (this.clear(); ++t < r; ) {
    var n = e6[t];
    this.set(n[0], n[1]);
  }
}
Dr.prototype.clear = Xm;
Dr.prototype.delete = Vm;
Dr.prototype.get = Ym;
Dr.prototype.has = Zm;
Dr.prototype.set = Jm;
var Ju = Dr, qp = Ju, Qm = "Expected a function";
function Qu(e6, t) {
  if (typeof e6 != "function" || t != null && typeof t != "function") throw new TypeError(Qm);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i)) return a.get(i);
    var o = e6.apply(this, n);
    return r.cache = a.set(i, o) || a, o;
  };
  return r.cache = new (Qu.Cache || qp)(), r;
}
Qu.Cache = qp;
var Hp = Qu;
const eb = ue(Hp);
var tb = Hp, rb = 500;
function nb(e6) {
  var t = tb(e6, function(n) {
    return r.size === rb && r.clear(), n;
  }), r = t.cache;
  return t;
}
var ib = nb, ab = ib, ob = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ub = /\\(\\)?/g, cb = ab(function(e6) {
  var t = [];
  return e6.charCodeAt(0) === 46 && t.push(""), e6.replace(ob, function(r, n, i, a) {
    t.push(i ? a.replace(ub, "$1") : n || r);
  }), t;
}), sb = cb;
function lb(e6, t) {
  for (var r = -1, n = e6 == null ? 0 : e6.length, i = Array(n); ++r < n; ) i[r] = t(e6[r], r, e6);
  return i;
}
var ec = lb, os = Ln, fb = ec, pb = Ne, hb = Mr, db = 1 / 0, us = os ? os.prototype : void 0, cs = us ? us.toString : void 0;
function Gp(e6) {
  if (typeof e6 == "string") return e6;
  if (pb(e6)) return fb(e6, Gp) + "";
  if (hb(e6)) return cs ? cs.call(e6) : "";
  var t = e6 + "";
  return t == "0" && 1 / e6 == -db ? "-0" : t;
}
var vb = Gp, yb = vb;
function gb(e6) {
  return e6 == null ? "" : yb(e6);
}
var Kp = gb, mb = Ne, bb = Xu, xb = sb, wb = Kp;
function Ob(e6, t) {
  return mb(e6) ? e6 : bb(e6, t) ? [e6] : xb(wb(e6));
}
var Xp = Ob, Sb = Mr, _b = 1 / 0;
function Ab(e6) {
  if (typeof e6 == "string" || Sb(e6)) return e6;
  var t = e6 + "";
  return t == "0" && 1 / e6 == -_b ? "-0" : t;
}
var fa = Ab, Pb = Xp, $b = fa;
function Tb(e6, t) {
  t = Pb(t, e6);
  for (var r = 0, n = t.length; e6 != null && r < n; ) e6 = e6[$b(t[r++])];
  return r && r == n ? e6 : void 0;
}
var tc = Tb, Eb = tc;
function jb(e6, t, r) {
  var n = e6 == null ? void 0 : Eb(e6, t);
  return n === void 0 ? r : n;
}
var Vp = jb;
const ze = ue(Vp);
function Mb(e6) {
  return e6 == null;
}
var Cb = Mb;
const Z = ue(Cb);
var Ib = yt, Nb = Ne, Db = gt, kb = "[object String]";
function Rb(e6) {
  return typeof e6 == "string" || !Nb(e6) && Db(e6) && Ib(e6) == kb;
}
var Bb = Rb;
const Gt = ue(Bb);
var Yp = { exports: {} }, ne = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var rc = /* @__PURE__ */ Symbol.for("react.element"), nc = /* @__PURE__ */ Symbol.for("react.portal"), pa = /* @__PURE__ */ Symbol.for("react.fragment"), ha = /* @__PURE__ */ Symbol.for("react.strict_mode"), da = /* @__PURE__ */ Symbol.for("react.profiler"), va = /* @__PURE__ */ Symbol.for("react.provider"), ya = /* @__PURE__ */ Symbol.for("react.context"), Lb = /* @__PURE__ */ Symbol.for("react.server_context"), ga = /* @__PURE__ */ Symbol.for("react.forward_ref"), ma = /* @__PURE__ */ Symbol.for("react.suspense"), ba = /* @__PURE__ */ Symbol.for("react.suspense_list"), xa = /* @__PURE__ */ Symbol.for("react.memo"), wa = /* @__PURE__ */ Symbol.for("react.lazy"), Fb = /* @__PURE__ */ Symbol.for("react.offscreen"), Zp;
Zp = /* @__PURE__ */ Symbol.for("react.module.reference");
function He(e6) {
  if (typeof e6 == "object" && e6 !== null) {
    var t = e6.$$typeof;
    switch (t) {
      case rc:
        switch (e6 = e6.type, e6) {
          case pa:
          case da:
          case ha:
          case ma:
          case ba:
            return e6;
          default:
            switch (e6 = e6 && e6.$$typeof, e6) {
              case Lb:
              case ya:
              case ga:
              case wa:
              case xa:
              case va:
                return e6;
              default:
                return t;
            }
        }
      case nc:
        return t;
    }
  }
}
ne.ContextConsumer = ya;
ne.ContextProvider = va;
ne.Element = rc;
ne.ForwardRef = ga;
ne.Fragment = pa;
ne.Lazy = wa;
ne.Memo = xa;
ne.Portal = nc;
ne.Profiler = da;
ne.StrictMode = ha;
ne.Suspense = ma;
ne.SuspenseList = ba;
ne.isAsyncMode = function() {
  return false;
};
ne.isConcurrentMode = function() {
  return false;
};
ne.isContextConsumer = function(e6) {
  return He(e6) === ya;
};
ne.isContextProvider = function(e6) {
  return He(e6) === va;
};
ne.isElement = function(e6) {
  return typeof e6 == "object" && e6 !== null && e6.$$typeof === rc;
};
ne.isForwardRef = function(e6) {
  return He(e6) === ga;
};
ne.isFragment = function(e6) {
  return He(e6) === pa;
};
ne.isLazy = function(e6) {
  return He(e6) === wa;
};
ne.isMemo = function(e6) {
  return He(e6) === xa;
};
ne.isPortal = function(e6) {
  return He(e6) === nc;
};
ne.isProfiler = function(e6) {
  return He(e6) === da;
};
ne.isStrictMode = function(e6) {
  return He(e6) === ha;
};
ne.isSuspense = function(e6) {
  return He(e6) === ma;
};
ne.isSuspenseList = function(e6) {
  return He(e6) === ba;
};
ne.isValidElementType = function(e6) {
  return typeof e6 == "string" || typeof e6 == "function" || e6 === pa || e6 === da || e6 === ha || e6 === ma || e6 === ba || e6 === Fb || typeof e6 == "object" && e6 !== null && (e6.$$typeof === wa || e6.$$typeof === xa || e6.$$typeof === va || e6.$$typeof === ya || e6.$$typeof === ga || e6.$$typeof === Zp || e6.getModuleId !== void 0);
};
ne.typeOf = He;
Yp.exports = ne;
var Wb = Yp.exports, Ub = yt, zb = gt, qb = "[object Number]";
function Hb(e6) {
  return typeof e6 == "number" || zb(e6) && Ub(e6) == qb;
}
var Jp = Hb;
const Gb = ue(Jp);
var Kb = Jp;
function Xb(e6) {
  return Kb(e6) && e6 != +e6;
}
var Vb = Xb;
const Fn = ue(Vb);
var Ye = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Bt = function(t) {
  return Gt(t) && t.indexOf("%") === t.length - 1;
}, F = function(t) {
  return Gb(t) && !Fn(t);
}, Yb = function(t) {
  return Z(t);
}, we = function(t) {
  return F(t) || Gt(t);
}, Zb = 0, Oa = function(t) {
  var r = ++Zb;
  return "".concat(t || "").concat(r);
}, Ze = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (!F(t) && !Gt(t)) return n;
  var a;
  if (Bt(t)) {
    var o = t.indexOf("%");
    a = r * parseFloat(t.slice(0, o)) / 100;
  } else a = +t;
  return Fn(a) && (a = n), i && a > r && (a = r), a;
}, wt = function(t) {
  if (!t) return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, Jb = function(t) {
  if (!Array.isArray(t)) return false;
  for (var r = t.length, n = {}, i = 0; i < r; i++) if (!n[t[i]]) n[t[i]] = true;
  else return true;
  return false;
}, er = function(t, r) {
  return F(t) && F(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function si(e6, t, r) {
  return !e6 || !e6.length ? null : e6.find(function(n) {
    return n && (typeof t == "function" ? t(n) : ze(n, t)) === r;
  });
}
var Qb = function(t, r) {
  return F(t) && F(r) ? t - r : Gt(t) && Gt(r) ? t.localeCompare(r) : t instanceof Date && r instanceof Date ? t.getTime() - r.getTime() : String(t).localeCompare(String(r));
};
function or(e6, t) {
  for (var r in e6) if ({}.hasOwnProperty.call(e6, r) && (!{}.hasOwnProperty.call(t, r) || e6[r] !== t[r])) return false;
  for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e6, n)) return false;
  return true;
}
function Po(e6) {
  "@babel/helpers - typeof";
  return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Po(e6);
}
var e0 = ["viewBox", "children"], t0 = ["aria-activedescendant", "aria-atomic", "aria-autocomplete", "aria-busy", "aria-checked", "aria-colcount", "aria-colindex", "aria-colspan", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-errormessage", "aria-expanded", "aria-flowto", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-level", "aria-live", "aria-modal", "aria-multiline", "aria-multiselectable", "aria-orientation", "aria-owns", "aria-placeholder", "aria-posinset", "aria-pressed", "aria-readonly", "aria-relevant", "aria-required", "aria-roledescription", "aria-rowcount", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-setsize", "aria-sort", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext", "className", "color", "height", "id", "lang", "max", "media", "method", "min", "name", "style", "target", "width", "role", "tabIndex", "accentHeight", "accumulate", "additive", "alignmentBaseline", "allowReorder", "alphabetic", "amplitude", "arabicForm", "ascent", "attributeName", "attributeType", "autoReverse", "azimuth", "baseFrequency", "baselineShift", "baseProfile", "bbox", "begin", "bias", "by", "calcMode", "capHeight", "clip", "clipPath", "clipPathUnits", "clipRule", "colorInterpolation", "colorInterpolationFilters", "colorProfile", "colorRendering", "contentScriptType", "contentStyleType", "cursor", "cx", "cy", "d", "decelerate", "descent", "diffuseConstant", "direction", "display", "divisor", "dominantBaseline", "dur", "dx", "dy", "edgeMode", "elevation", "enableBackground", "end", "exponent", "externalResourcesRequired", "fill", "fillOpacity", "fillRule", "filter", "filterRes", "filterUnits", "floodColor", "floodOpacity", "focusable", "fontFamily", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontWeight", "format", "from", "fx", "fy", "g1", "g2", "glyphName", "glyphOrientationHorizontal", "glyphOrientationVertical", "glyphRef", "gradientTransform", "gradientUnits", "hanging", "horizAdvX", "horizOriginX", "href", "ideographic", "imageRendering", "in2", "in", "intercept", "k1", "k2", "k3", "k4", "k", "kernelMatrix", "kernelUnitLength", "kerning", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "letterSpacing", "lightingColor", "limitingConeAngle", "local", "markerEnd", "markerHeight", "markerMid", "markerStart", "markerUnits", "markerWidth", "mask", "maskContentUnits", "maskUnits", "mathematical", "mode", "numOctaves", "offset", "opacity", "operator", "order", "orient", "orientation", "origin", "overflow", "overlinePosition", "overlineThickness", "paintOrder", "panose1", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointerEvents", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "r", "radius", "refX", "refY", "renderingIntent", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "restart", "result", "rotate", "rx", "ry", "seed", "shapeRendering", "slope", "spacing", "specularConstant", "specularExponent", "speed", "spreadMethod", "startOffset", "stdDeviation", "stemh", "stemv", "stitchTiles", "stopColor", "stopOpacity", "strikethroughPosition", "strikethroughThickness", "string", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textAnchor", "textDecoration", "textLength", "textRendering", "to", "transform", "u1", "u2", "underlinePosition", "underlineThickness", "unicode", "unicodeBidi", "unicodeRange", "unitsPerEm", "vAlphabetic", "values", "vectorEffect", "version", "vertAdvY", "vertOriginX", "vertOriginY", "vHanging", "vIdeographic", "viewTarget", "visibility", "vMathematical", "widths", "wordSpacing", "writingMode", "x1", "x2", "x", "xChannelSelector", "xHeight", "xlinkActuate", "xlinkArcrole", "xlinkHref", "xlinkRole", "xlinkShow", "xlinkTitle", "xlinkType", "xmlBase", "xmlLang", "xmlns", "xmlnsXlink", "xmlSpace", "y1", "y2", "y", "yChannelSelector", "z", "zoomAndPan", "ref", "key", "angle"], ss = ["points", "pathLength"], Ja = { svg: e0, polygon: ss, polyline: ss }, ic = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], li = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var n = t;
  if (R.isValidElement(t) && (n = t.props), !Cr(n)) return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    ic.includes(a) && (i[a] = r || function(o) {
      return n[a](n, o);
    });
  }), i;
}, r0 = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, fi = function(t, r, n) {
  if (!Cr(t) || Po(t) !== "object") return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var o = t[a];
    ic.includes(a) && typeof o == "function" && (i || (i = {}), i[a] = r0(o, r, n));
  }), i;
}, n0 = ["children"], i0 = ["children"];
function ls(e6, t) {
  if (e6 == null) return {};
  var r = a0(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function a0(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function $o(e6) {
  "@babel/helpers - typeof";
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e6);
}
var fs = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart", contextmenu: "onContextMenu", dblclick: "onDoubleClick" }, ft = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, ps = null, Qa = null, ac = function e(t) {
  if (t === ps && Array.isArray(Qa)) return Qa;
  var r = [];
  return R.Children.forEach(t, function(n) {
    Z(n) || (Wb.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), Qa = r, ps = t, r;
};
function Je(e6, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return ft(i);
  }) : n = [ft(t)], ac(e6).forEach(function(i) {
    var a = ze(i, "type.displayName") || ze(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function Re(e6, t) {
  var r = Je(e6, t);
  return r && r[0];
}
var hs = function(t) {
  if (!t || !t.props) return false;
  var r = t.props, n = r.width, i = r.height;
  return !(!F(n) || n <= 0 || !F(i) || i <= 0);
}, o0 = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], u0 = function(t) {
  return t && t.type && Gt(t.type) && o0.indexOf(t.type) >= 0;
}, MF = function(t) {
  return t && $o(t) === "object" && "clipDot" in t;
}, c0 = function(t, r, n, i) {
  var a, o = (a = Ja == null ? void 0 : Ja[i]) !== null && a !== void 0 ? a : [];
  return r.startsWith("data-") || !Y(t) && (i && o.includes(r) || t0.includes(r)) || n && ic.includes(r);
}, re = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean") return null;
  var i = t;
  if (R.isValidElement(t) && (i = t.props), !Cr(i)) return null;
  var a = {};
  return Object.keys(i).forEach(function(o) {
    var u;
    c0((u = i) === null || u === void 0 ? void 0 : u[o], o, r, n) && (a[o] = i[o]);
  }), a;
}, To = function e2(t, r) {
  if (t === r) return true;
  var n = R.Children.count(t);
  if (n !== R.Children.count(r)) return false;
  if (n === 0) return true;
  if (n === 1) return ds(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], o = r[i];
    if (Array.isArray(a) || Array.isArray(o)) {
      if (!e2(a, o)) return false;
    } else if (!ds(a, o)) return false;
  }
  return true;
}, ds = function(t, r) {
  if (Z(t) && Z(r)) return true;
  if (!Z(t) && !Z(r)) {
    var n = t.props || {}, i = n.children, a = ls(n, n0), o = r.props || {}, u = o.children, c = ls(o, i0);
    return i && u ? or(a, c) && To(i, u) : !i && !u ? or(a, c) : false;
  }
  return false;
}, vs = function(t, r) {
  var n = [], i = {};
  return ac(t).forEach(function(a, o) {
    if (u0(a)) n.push(a);
    else if (a) {
      var u = ft(a.type), c = r[u] || {}, s = c.handler, f = c.once;
      if (s && (!f || !i[u])) {
        var l = s(a, u, o);
        n.push(l), i[u] = true;
      }
    }
  }), n;
}, s0 = function(t) {
  var r = t && t.type;
  return r && fs[r] ? fs[r] : null;
}, l0 = function(t, r) {
  return ac(r).indexOf(t);
}, f0 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Eo.apply(this, arguments);
}
function p0(e6, t) {
  if (e6 == null) return {};
  var r = h0(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function h0(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function jo(e6) {
  var t = e6.children, r = e6.width, n = e6.height, i = e6.viewBox, a = e6.className, o = e6.style, u = e6.title, c = e6.desc, s = p0(e6, f0), f = i || { width: r, height: n, x: 0, y: 0 }, l = ee("recharts-surface", a);
  return $.createElement("svg", Eo({}, re(s, true, "svg"), { className: l, width: r, height: n, style: o, viewBox: "".concat(f.x, " ").concat(f.y, " ").concat(f.width, " ").concat(f.height) }), $.createElement("title", null, u), $.createElement("desc", null, c), t);
}
var d0 = ["children", "className"];
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Mo.apply(this, arguments);
}
function v0(e6, t) {
  if (e6 == null) return {};
  var r = y0(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function y0(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
var _e = $.forwardRef(function(e6, t) {
  var r = e6.children, n = e6.className, i = v0(e6, d0), a = ee("recharts-layer", n);
  return $.createElement("g", Mo({ className: a }, re(i, true), { ref: t }), r);
}), Ut = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++) i[a - 2] = arguments[a];
};
function g0(e6, t, r) {
  var n = -1, i = e6.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; ) a[n] = e6[n + t];
  return a;
}
var m0 = g0, b0 = m0;
function x0(e6, t, r) {
  var n = e6.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e6 : b0(e6, t, r);
}
var w0 = x0, O0 = "\\ud800-\\udfff", S0 = "\\u0300-\\u036f", _0 = "\\ufe20-\\ufe2f", A0 = "\\u20d0-\\u20ff", P0 = S0 + _0 + A0, $0 = "\\ufe0e\\ufe0f", T0 = "\\u200d", E0 = RegExp("[" + T0 + O0 + P0 + $0 + "]");
function j0(e6) {
  return E0.test(e6);
}
var Qp = j0;
function M0(e6) {
  return e6.split("");
}
var C0 = M0, eh = "\\ud800-\\udfff", I0 = "\\u0300-\\u036f", N0 = "\\ufe20-\\ufe2f", D0 = "\\u20d0-\\u20ff", k0 = I0 + N0 + D0, R0 = "\\ufe0e\\ufe0f", B0 = "[" + eh + "]", Co = "[" + k0 + "]", Io = "\\ud83c[\\udffb-\\udfff]", L0 = "(?:" + Co + "|" + Io + ")", th = "[^" + eh + "]", rh = "(?:\\ud83c[\\udde6-\\uddff]){2}", nh = "[\\ud800-\\udbff][\\udc00-\\udfff]", F0 = "\\u200d", ih = L0 + "?", ah = "[" + R0 + "]?", W0 = "(?:" + F0 + "(?:" + [th, rh, nh].join("|") + ")" + ah + ih + ")*", U0 = ah + ih + W0, z0 = "(?:" + [th + Co + "?", Co, rh, nh, B0].join("|") + ")", q0 = RegExp(Io + "(?=" + Io + ")|" + z0 + U0, "g");
function H0(e6) {
  return e6.match(q0) || [];
}
var G0 = H0, K0 = C0, X0 = Qp, V0 = G0;
function Y0(e6) {
  return X0(e6) ? V0(e6) : K0(e6);
}
var Z0 = Y0, J0 = w0, Q0 = Qp, ex = Z0, tx = Kp;
function rx(e6) {
  return function(t) {
    t = tx(t);
    var r = Q0(t) ? ex(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? J0(r, 1).join("") : t.slice(1);
    return n[e6]() + i;
  };
}
var nx = rx, ix = nx, ax = ix("toUpperCase"), ox = ax;
const Sa = ue(ox);
function oe(e6) {
  return function() {
    return e6;
  };
}
const oh = Math.cos, pi = Math.sin, et = Math.sqrt, hi = Math.PI, _a = 2 * hi, No = Math.PI, Do = 2 * No, Dt = 1e-6, ux = Do - Dt;
function uh(e6) {
  this._ += e6[0];
  for (let t = 1, r = e6.length; t < r; ++t) this._ += arguments[t] + e6[t];
}
function cx(e6) {
  let t = Math.floor(e6);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e6}`);
  if (t > 15) return uh;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i) this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class sx {
  constructor(t) {
    this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "", this._append = t == null ? uh : cx(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, o) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, u = this._y1, c = n - t, s = i - r, f = o - t, l = u - r, p = f * f + l * l;
    if (this._x1 === null) this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > Dt) if (!(Math.abs(l * c - s * f) > Dt) || !a) this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - o, d = i - u, v = c * c + s * s, y = h * h + d * d, x = Math.sqrt(v), w = Math.sqrt(p), b = a * Math.tan((No - Math.acos((v + p - y) / (2 * x * w))) / 2), S = b / w, g = b / x;
      Math.abs(S - 1) > Dt && this._append`L${t + S * f},${r + S * l}`, this._append`A${a},${a},0,0,${+(l * h > f * d)},${this._x1 = t + g * c},${this._y1 = r + g * s}`;
    }
  }
  arc(t, r, n, i, a, o) {
    if (t = +t, r = +r, n = +n, o = !!o, n < 0) throw new Error(`negative radius: ${n}`);
    let u = n * Math.cos(i), c = n * Math.sin(i), s = t + u, f = r + c, l = 1 ^ o, p = o ? i - a : a - i;
    this._x1 === null ? this._append`M${s},${f}` : (Math.abs(this._x1 - s) > Dt || Math.abs(this._y1 - f) > Dt) && this._append`L${s},${f}`, n && (p < 0 && (p = p % Do + Do), p > ux ? this._append`A${n},${n},0,1,${l},${t - u},${r - c}A${n},${n},0,1,${l},${this._x1 = s},${this._y1 = f}` : p > Dt && this._append`A${n},${n},0,${+(p >= No)},${l},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function oc(e6) {
  let t = 3;
  return e6.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null) t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e6;
  }, () => new sx(t);
}
function uc(e6) {
  return typeof e6 == "object" && "length" in e6 ? e6 : Array.from(e6);
}
function ch(e6) {
  this._context = e6;
}
ch.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e6, t) {
  switch (e6 = +e6, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e6, t) : this._context.moveTo(e6, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(e6, t);
      break;
  }
} };
function Aa(e6) {
  return new ch(e6);
}
function sh(e6) {
  return e6[0];
}
function lh(e6) {
  return e6[1];
}
function fh(e6, t) {
  var r = oe(true), n = null, i = Aa, a = null, o = oc(u);
  e6 = typeof e6 == "function" ? e6 : e6 === void 0 ? sh : oe(e6), t = typeof t == "function" ? t : t === void 0 ? lh : oe(t);
  function u(c) {
    var s, f = (c = uc(c)).length, l, p = false, h;
    for (n == null && (a = i(h = o())), s = 0; s <= f; ++s) !(s < f && r(l = c[s], s, c)) === p && ((p = !p) ? a.lineStart() : a.lineEnd()), p && a.point(+e6(l, s, c), +t(l, s, c));
    if (h) return a = null, h + "" || null;
  }
  return u.x = function(c) {
    return arguments.length ? (e6 = typeof c == "function" ? c : oe(+c), u) : e6;
  }, u.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : oe(+c), u) : t;
  }, u.defined = function(c) {
    return arguments.length ? (r = typeof c == "function" ? c : oe(!!c), u) : r;
  }, u.curve = function(c) {
    return arguments.length ? (i = c, n != null && (a = i(n)), u) : i;
  }, u.context = function(c) {
    return arguments.length ? (c == null ? n = a = null : a = i(n = c), u) : n;
  }, u;
}
function Vn(e6, t, r) {
  var n = null, i = oe(true), a = null, o = Aa, u = null, c = oc(s);
  e6 = typeof e6 == "function" ? e6 : e6 === void 0 ? sh : oe(+e6), t = typeof t == "function" ? t : oe(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? lh : oe(+r);
  function s(l) {
    var p, h, d, v = (l = uc(l)).length, y, x = false, w, b = new Array(v), S = new Array(v);
    for (a == null && (u = o(w = c())), p = 0; p <= v; ++p) {
      if (!(p < v && i(y = l[p], p, l)) === x) if (x = !x) h = p, u.areaStart(), u.lineStart();
      else {
        for (u.lineEnd(), u.lineStart(), d = p - 1; d >= h; --d) u.point(b[d], S[d]);
        u.lineEnd(), u.areaEnd();
      }
      x && (b[p] = +e6(y, p, l), S[p] = +t(y, p, l), u.point(n ? +n(y, p, l) : b[p], r ? +r(y, p, l) : S[p]));
    }
    if (w) return u = null, w + "" || null;
  }
  function f() {
    return fh().defined(i).curve(o).context(a);
  }
  return s.x = function(l) {
    return arguments.length ? (e6 = typeof l == "function" ? l : oe(+l), n = null, s) : e6;
  }, s.x0 = function(l) {
    return arguments.length ? (e6 = typeof l == "function" ? l : oe(+l), s) : e6;
  }, s.x1 = function(l) {
    return arguments.length ? (n = l == null ? null : typeof l == "function" ? l : oe(+l), s) : n;
  }, s.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), r = null, s) : t;
  }, s.y0 = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : oe(+l), s) : t;
  }, s.y1 = function(l) {
    return arguments.length ? (r = l == null ? null : typeof l == "function" ? l : oe(+l), s) : r;
  }, s.lineX0 = s.lineY0 = function() {
    return f().x(e6).y(t);
  }, s.lineY1 = function() {
    return f().x(e6).y(r);
  }, s.lineX1 = function() {
    return f().x(n).y(t);
  }, s.defined = function(l) {
    return arguments.length ? (i = typeof l == "function" ? l : oe(!!l), s) : i;
  }, s.curve = function(l) {
    return arguments.length ? (o = l, a != null && (u = o(a)), s) : o;
  }, s.context = function(l) {
    return arguments.length ? (l == null ? a = u = null : u = o(a = l), s) : a;
  }, s;
}
class ph {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function lx(e6) {
  return new ph(e6, true);
}
function fx(e6) {
  return new ph(e6, false);
}
const cc = { draw(e6, t) {
  const r = et(t / hi);
  e6.moveTo(r, 0), e6.arc(0, 0, r, 0, _a);
} }, px = { draw(e6, t) {
  const r = et(t / 5) / 2;
  e6.moveTo(-3 * r, -r), e6.lineTo(-r, -r), e6.lineTo(-r, -3 * r), e6.lineTo(r, -3 * r), e6.lineTo(r, -r), e6.lineTo(3 * r, -r), e6.lineTo(3 * r, r), e6.lineTo(r, r), e6.lineTo(r, 3 * r), e6.lineTo(-r, 3 * r), e6.lineTo(-r, r), e6.lineTo(-3 * r, r), e6.closePath();
} }, hh = et(1 / 3), hx = hh * 2, dx = { draw(e6, t) {
  const r = et(t / hx), n = r * hh;
  e6.moveTo(0, -r), e6.lineTo(n, 0), e6.lineTo(0, r), e6.lineTo(-n, 0), e6.closePath();
} }, vx = { draw(e6, t) {
  const r = et(t), n = -r / 2;
  e6.rect(n, n, r, r);
} }, yx = 0.8908130915292852, dh = pi(hi / 10) / pi(7 * hi / 10), gx = pi(_a / 10) * dh, mx = -oh(_a / 10) * dh, bx = { draw(e6, t) {
  const r = et(t * yx), n = gx * r, i = mx * r;
  e6.moveTo(0, -r), e6.lineTo(n, i);
  for (let a = 1; a < 5; ++a) {
    const o = _a * a / 5, u = oh(o), c = pi(o);
    e6.lineTo(c * r, -u * r), e6.lineTo(u * n - c * i, c * n + u * i);
  }
  e6.closePath();
} }, eo = et(3), xx = { draw(e6, t) {
  const r = -et(t / (eo * 3));
  e6.moveTo(0, r * 2), e6.lineTo(-eo * r, -r), e6.lineTo(eo * r, -r), e6.closePath();
} }, Le = -0.5, Fe = et(3) / 2, ko = 1 / et(12), wx = (ko / 2 + 1) * 3, Ox = { draw(e6, t) {
  const r = et(t / wx), n = r / 2, i = r * ko, a = n, o = r * ko + r, u = -a, c = o;
  e6.moveTo(n, i), e6.lineTo(a, o), e6.lineTo(u, c), e6.lineTo(Le * n - Fe * i, Fe * n + Le * i), e6.lineTo(Le * a - Fe * o, Fe * a + Le * o), e6.lineTo(Le * u - Fe * c, Fe * u + Le * c), e6.lineTo(Le * n + Fe * i, Le * i - Fe * n), e6.lineTo(Le * a + Fe * o, Le * o - Fe * a), e6.lineTo(Le * u + Fe * c, Le * c - Fe * u), e6.closePath();
} };
function Sx(e6, t) {
  let r = null, n = oc(i);
  e6 = typeof e6 == "function" ? e6 : oe(e6 || cc), t = typeof t == "function" ? t : oe(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e6.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e6 = typeof a == "function" ? a : oe(a), i) : e6;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : oe(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a != null ? a : null, i) : r;
  }, i;
}
function di() {
}
function vi(e6, t, r) {
  e6._context.bezierCurveTo((2 * e6._x0 + e6._x1) / 3, (2 * e6._y0 + e6._y1) / 3, (e6._x0 + 2 * e6._x1) / 3, (e6._y0 + 2 * e6._y1) / 3, (e6._x0 + 4 * e6._x1 + t) / 6, (e6._y0 + 4 * e6._y1 + r) / 6);
}
function vh(e6) {
  this._context = e6;
}
vh.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 3:
      vi(this, this._x1, this._y1);
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e6, t) {
  switch (e6 = +e6, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e6, t) : this._context.moveTo(e6, t);
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
    default:
      vi(this, e6, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e6, this._y0 = this._y1, this._y1 = t;
} };
function _x(e6) {
  return new vh(e6);
}
function yh(e6) {
  this._context = e6;
}
yh.prototype = { areaStart: di, areaEnd: di, lineStart: function() {
  this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 1: {
      this._context.moveTo(this._x2, this._y2), this._context.closePath();
      break;
    }
    case 2: {
      this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
      break;
    }
    case 3: {
      this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
      break;
    }
  }
}, point: function(e6, t) {
  switch (e6 = +e6, t = +t, this._point) {
    case 0:
      this._point = 1, this._x2 = e6, this._y2 = t;
      break;
    case 1:
      this._point = 2, this._x3 = e6, this._y3 = t;
      break;
    case 2:
      this._point = 3, this._x4 = e6, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e6) / 6, (this._y0 + 4 * this._y1 + t) / 6);
      break;
    default:
      vi(this, e6, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e6, this._y0 = this._y1, this._y1 = t;
} };
function Ax(e6) {
  return new yh(e6);
}
function gh(e6) {
  this._context = e6;
}
gh.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e6, t) {
  switch (e6 = +e6, t = +t, this._point) {
    case 0:
      this._point = 1;
      break;
    case 1:
      this._point = 2;
      break;
    case 2:
      this._point = 3;
      var r = (this._x0 + 4 * this._x1 + e6) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
      this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
      break;
    case 3:
      this._point = 4;
    default:
      vi(this, e6, t);
      break;
  }
  this._x0 = this._x1, this._x1 = e6, this._y0 = this._y1, this._y1 = t;
} };
function Px(e6) {
  return new gh(e6);
}
function mh(e6) {
  this._context = e6;
}
mh.prototype = { areaStart: di, areaEnd: di, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  this._point && this._context.closePath();
}, point: function(e6, t) {
  e6 = +e6, t = +t, this._point ? this._context.lineTo(e6, t) : (this._point = 1, this._context.moveTo(e6, t));
} };
function $x(e6) {
  return new mh(e6);
}
function ys(e6) {
  return e6 < 0 ? -1 : 1;
}
function gs(e6, t, r) {
  var n = e6._x1 - e6._x0, i = t - e6._x1, a = (e6._y1 - e6._y0) / (n || i < 0 && -0), o = (r - e6._y1) / (i || n < 0 && -0), u = (a * i + o * n) / (n + i);
  return (ys(a) + ys(o)) * Math.min(Math.abs(a), Math.abs(o), 0.5 * Math.abs(u)) || 0;
}
function ms(e6, t) {
  var r = e6._x1 - e6._x0;
  return r ? (3 * (e6._y1 - e6._y0) / r - t) / 2 : t;
}
function to(e6, t, r) {
  var n = e6._x0, i = e6._y0, a = e6._x1, o = e6._y1, u = (a - n) / 3;
  e6._context.bezierCurveTo(n + u, i + u * t, a - u, o - u * r, a, o);
}
function yi(e6) {
  this._context = e6;
}
yi.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
}, lineEnd: function() {
  switch (this._point) {
    case 2:
      this._context.lineTo(this._x1, this._y1);
      break;
    case 3:
      to(this, this._t0, ms(this, this._t0));
      break;
  }
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(e6, t) {
  var r = NaN;
  if (e6 = +e6, t = +t, !(e6 === this._x1 && t === this._y1)) {
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e6, t) : this._context.moveTo(e6, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, to(this, ms(this, r = gs(this, e6, t)), r);
        break;
      default:
        to(this, this._t0, r = gs(this, e6, t));
        break;
    }
    this._x0 = this._x1, this._x1 = e6, this._y0 = this._y1, this._y1 = t, this._t0 = r;
  }
} };
function bh(e6) {
  this._context = new xh(e6);
}
(bh.prototype = Object.create(yi.prototype)).point = function(e6, t) {
  yi.prototype.point.call(this, t, e6);
};
function xh(e6) {
  this._context = e6;
}
xh.prototype = { moveTo: function(e6, t) {
  this._context.moveTo(t, e6);
}, closePath: function() {
  this._context.closePath();
}, lineTo: function(e6, t) {
  this._context.lineTo(t, e6);
}, bezierCurveTo: function(e6, t, r, n, i, a) {
  this._context.bezierCurveTo(t, e6, n, r, a, i);
} };
function Tx(e6) {
  return new yi(e6);
}
function Ex(e6) {
  return new bh(e6);
}
function wh(e6) {
  this._context = e6;
}
wh.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = [], this._y = [];
}, lineEnd: function() {
  var e6 = this._x, t = this._y, r = e6.length;
  if (r) if (this._line ? this._context.lineTo(e6[0], t[0]) : this._context.moveTo(e6[0], t[0]), r === 2) this._context.lineTo(e6[1], t[1]);
  else for (var n = bs(e6), i = bs(t), a = 0, o = 1; o < r; ++a, ++o) this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e6[o], t[o]);
  (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
}, point: function(e6, t) {
  this._x.push(+e6), this._y.push(+t);
} };
function bs(e6) {
  var t, r = e6.length - 1, n, i = new Array(r), a = new Array(r), o = new Array(r);
  for (i[0] = 0, a[0] = 2, o[0] = e6[0] + 2 * e6[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, o[t] = 4 * e6[t] + 2 * e6[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * e6[r - 1] + e6[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, o[t] -= n * o[t - 1];
  for (i[r - 1] = o[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (o[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e6[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e6[t + 1] - i[t + 1];
  return [i, a];
}
function jx(e6) {
  return new wh(e6);
}
function Pa(e6, t) {
  this._context = e6, this._t = t;
}
Pa.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._x = this._y = NaN, this._point = 0;
}, lineEnd: function() {
  0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
}, point: function(e6, t) {
  switch (e6 = +e6, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(e6, t) : this._context.moveTo(e6, t);
      break;
    case 1:
      this._point = 2;
    default: {
      if (this._t <= 0) this._context.lineTo(this._x, t), this._context.lineTo(e6, t);
      else {
        var r = this._x * (1 - this._t) + e6 * this._t;
        this._context.lineTo(r, this._y), this._context.lineTo(r, t);
      }
      break;
    }
  }
  this._x = e6, this._y = t;
} };
function Mx(e6) {
  return new Pa(e6, 0.5);
}
function Cx(e6) {
  return new Pa(e6, 0);
}
function Ix(e6) {
  return new Pa(e6, 1);
}
function lr(e6, t) {
  if ((o = e6.length) > 1) for (var r = 1, n, i, a = e6[t[0]], o, u = a.length; r < o; ++r) for (i = a, a = e6[t[r]], n = 0; n < u; ++n) a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Ro(e6) {
  for (var t = e6.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function Nx(e6, t) {
  return e6[t];
}
function Dx(e6) {
  const t = [];
  return t.key = e6, t;
}
function kx() {
  var e6 = oe([]), t = Ro, r = lr, n = Nx;
  function i(a) {
    var o = Array.from(e6.apply(this, arguments), Dx), u, c = o.length, s = -1, f;
    for (const l of a) for (u = 0, ++s; u < c; ++u) (o[u][s] = [0, +n(l, o[u].key, s, a)]).data = l;
    for (u = 0, f = uc(t(o)); u < c; ++u) o[f[u]].index = u;
    return r(o, f), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (e6 = typeof a == "function" ? a : oe(Array.from(a)), i) : e6;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : oe(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Ro : typeof a == "function" ? a : oe(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a != null ? a : lr, i) : r;
  }, i;
}
function Rx(e6, t) {
  if ((n = e6.length) > 0) {
    for (var r, n, i = 0, a = e6[0].length, o; i < a; ++i) {
      for (o = r = 0; r < n; ++r) o += e6[r][i][1] || 0;
      if (o) for (r = 0; r < n; ++r) e6[r][i][1] /= o;
    }
    lr(e6, t);
  }
}
function Bx(e6, t) {
  if ((i = e6.length) > 0) {
    for (var r = 0, n = e6[t[0]], i, a = n.length; r < a; ++r) {
      for (var o = 0, u = 0; o < i; ++o) u += e6[o][r][1] || 0;
      n[r][1] += n[r][0] = -u / 2;
    }
    lr(e6, t);
  }
}
function Lx(e6, t) {
  if (!(!((o = e6.length) > 0) || !((a = (i = e6[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, o; n < a; ++n) {
      for (var u = 0, c = 0, s = 0; u < o; ++u) {
        for (var f = e6[t[u]], l = f[n][1] || 0, p = f[n - 1][1] || 0, h = (l - p) / 2, d = 0; d < u; ++d) {
          var v = e6[t[d]], y = v[n][1] || 0, x = v[n - 1][1] || 0;
          h += y - x;
        }
        c += l, s += h * l;
      }
      i[n - 1][1] += i[n - 1][0] = r, c && (r -= s / c);
    }
    i[n - 1][1] += i[n - 1][0] = r, lr(e6, t);
  }
}
function nn(e6) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e6);
}
var Fx = ["type", "size", "sizeType"];
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Bo.apply(this, arguments);
}
function xs(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ws(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xs(Object(r), true).forEach(function(n) {
      Wx(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : xs(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Wx(e6, t, r) {
  return t = Ux(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Ux(e6) {
  var t = zx(e6, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function zx(e6, t) {
  if (nn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function qx(e6, t) {
  if (e6 == null) return {};
  var r = Hx(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function Hx(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
var Oh = { symbolCircle: cc, symbolCross: px, symbolDiamond: dx, symbolSquare: vx, symbolStar: bx, symbolTriangle: xx, symbolWye: Ox }, Gx = Math.PI / 180, Kx = function(t) {
  var r = "symbol".concat(Sa(t));
  return Oh[r] || cc;
}, Xx = function(t, r, n) {
  if (r === "area") return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * Gx;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, Vx = function(t, r) {
  Oh["symbol".concat(Sa(t))] = r;
}, sc = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, o = t.sizeType, u = o === void 0 ? "area" : o, c = qx(t, Fx), s = ws(ws({}, c), {}, { type: n, size: a, sizeType: u }), f = function() {
    var y = Kx(n), x = Sx().type(y).size(Xx(a, u, n));
    return x();
  }, l = s.className, p = s.cx, h = s.cy, d = re(s, true);
  return p === +p && h === +h && a === +a ? $.createElement("path", Bo({}, d, { className: ee("recharts-symbols", l), transform: "translate(".concat(p, ", ").concat(h, ")"), d: f() })) : null;
};
sc.registerSymbol = Vx;
function fr(e6) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fr(e6);
}
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Lo.apply(this, arguments);
}
function Os(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yx(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Os(Object(r), true).forEach(function(n) {
      an(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Os(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Zx(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Jx(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, _h(n.key), n);
  }
}
function Qx(e6, t, r) {
  return t && Jx(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function ew(e6, t, r) {
  return t = gi(t), tw(e6, Sh() ? Reflect.construct(t, r || [], gi(e6).constructor) : t.apply(e6, r));
}
function tw(e6, t) {
  if (t && (fr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return rw(e6);
}
function rw(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Sh() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Sh = function() {
    return !!e6;
  })();
}
function gi(e6) {
  return gi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gi(e6);
}
function nw(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Fo(e6, t);
}
function Fo(e6, t) {
  return Fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Fo(e6, t);
}
function an(e6, t, r) {
  return t = _h(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function _h(e6) {
  var t = iw(e6, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function iw(e6, t) {
  if (fr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (fr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var We = 32, lc = (function(e6) {
  function t() {
    return Zx(this, t), ew(this, t, arguments);
  }
  return nw(t, e6), Qx(t, [{ key: "renderIcon", value: function(n) {
    var i = this.props.inactiveColor, a = We / 2, o = We / 6, u = We / 3, c = n.inactive ? i : n.color;
    if (n.type === "plainline") return $.createElement("line", { strokeWidth: 4, fill: "none", stroke: c, strokeDasharray: n.payload.strokeDasharray, x1: 0, y1: a, x2: We, y2: a, className: "recharts-legend-icon" });
    if (n.type === "line") return $.createElement("path", { strokeWidth: 4, fill: "none", stroke: c, d: "M0,".concat(a, "h").concat(u, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(2 * u, ",").concat(a, `
            H`).concat(We, "M").concat(2 * u, ",").concat(a, `
            A`).concat(o, ",").concat(o, ",0,1,1,").concat(u, ",").concat(a), className: "recharts-legend-icon" });
    if (n.type === "rect") return $.createElement("path", { stroke: "none", fill: c, d: "M0,".concat(We / 8, "h").concat(We, "v").concat(We * 3 / 4, "h").concat(-We, "z"), className: "recharts-legend-icon" });
    if ($.isValidElement(n.legendIcon)) {
      var s = Yx({}, n);
      return delete s.legendIcon, $.cloneElement(n.legendIcon, s);
    }
    return $.createElement(sc, { fill: c, cx: a, cy: a, size: We, sizeType: "diameter", type: n.type });
  } }, { key: "renderItems", value: function() {
    var n = this, i = this.props, a = i.payload, o = i.iconSize, u = i.layout, c = i.formatter, s = i.inactiveColor, f = { x: 0, y: 0, width: We, height: We }, l = { display: u === "horizontal" ? "inline-block" : "block", marginRight: 10 }, p = { display: "inline-block", verticalAlign: "middle", marginRight: 4 };
    return a.map(function(h, d) {
      var v = h.formatter || c, y = ee(an(an({ "recharts-legend-item": true }, "legend-item-".concat(d), true), "inactive", h.inactive));
      if (h.type === "none") return null;
      var x = Y(h.value) ? null : h.value;
      Ut(!Y(h.value), `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`);
      var w = h.inactive ? s : h.color;
      return $.createElement("li", Lo({ className: y, style: l, key: "legend-item-".concat(d) }, fi(n.props, h, d)), $.createElement(jo, { width: o, height: o, viewBox: f, style: p }, n.renderIcon(h)), $.createElement("span", { className: "recharts-legend-item-text", style: { color: w } }, v ? v(x, h, d) : x));
    });
  } }, { key: "render", value: function() {
    var n = this.props, i = n.payload, a = n.layout, o = n.align;
    if (!i || !i.length) return null;
    var u = { padding: 0, margin: 0, textAlign: a === "horizontal" ? o : "left" };
    return $.createElement("ul", { className: "recharts-default-legend", style: u }, this.renderItems());
  } }]);
})(R.PureComponent);
an(lc, "displayName", "Legend");
an(lc, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "middle", inactiveColor: "#ccc" });
var aw = sa;
function ow() {
  this.__data__ = new aw(), this.size = 0;
}
var uw = ow;
function cw(e6) {
  var t = this.__data__, r = t.delete(e6);
  return this.size = t.size, r;
}
var sw = cw;
function lw(e6) {
  return this.__data__.get(e6);
}
var fw = lw;
function pw(e6) {
  return this.__data__.has(e6);
}
var hw = pw, dw = sa, vw = Zu, yw = Ju, gw = 200;
function mw(e6, t) {
  var r = this.__data__;
  if (r instanceof dw) {
    var n = r.__data__;
    if (!vw || n.length < gw - 1) return n.push([e6, t]), this.size = ++r.size, this;
    r = this.__data__ = new yw(n);
  }
  return r.set(e6, t), this.size = r.size, this;
}
var bw = mw, xw = sa, ww = uw, Ow = sw, Sw = fw, _w = hw, Aw = bw;
function kr(e6) {
  var t = this.__data__ = new xw(e6);
  this.size = t.size;
}
kr.prototype.clear = ww;
kr.prototype.delete = Ow;
kr.prototype.get = Sw;
kr.prototype.has = _w;
kr.prototype.set = Aw;
var Ah = kr, Pw = "__lodash_hash_undefined__";
function $w(e6) {
  return this.__data__.set(e6, Pw), this;
}
var Tw = $w;
function Ew(e6) {
  return this.__data__.has(e6);
}
var jw = Ew, Mw = Ju, Cw = Tw, Iw = jw;
function mi(e6) {
  var t = -1, r = e6 == null ? 0 : e6.length;
  for (this.__data__ = new Mw(); ++t < r; ) this.add(e6[t]);
}
mi.prototype.add = mi.prototype.push = Cw;
mi.prototype.has = Iw;
var Ph = mi;
function Nw(e6, t) {
  for (var r = -1, n = e6 == null ? 0 : e6.length; ++r < n; ) if (t(e6[r], r, e6)) return true;
  return false;
}
var $h = Nw;
function Dw(e6, t) {
  return e6.has(t);
}
var Th = Dw, kw = Ph, Rw = $h, Bw = Th, Lw = 1, Fw = 2;
function Ww(e6, t, r, n, i, a) {
  var o = r & Lw, u = e6.length, c = t.length;
  if (u != c && !(o && c > u)) return false;
  var s = a.get(e6), f = a.get(t);
  if (s && f) return s == t && f == e6;
  var l = -1, p = true, h = r & Fw ? new kw() : void 0;
  for (a.set(e6, t), a.set(t, e6); ++l < u; ) {
    var d = e6[l], v = t[l];
    if (n) var y = o ? n(v, d, l, t, e6, a) : n(d, v, l, e6, t, a);
    if (y !== void 0) {
      if (y) continue;
      p = false;
      break;
    }
    if (h) {
      if (!Rw(t, function(x, w) {
        if (!Bw(h, w) && (d === x || i(d, x, r, n, a))) return h.push(w);
      })) {
        p = false;
        break;
      }
    } else if (!(d === v || i(d, v, r, n, a))) {
      p = false;
      break;
    }
  }
  return a.delete(e6), a.delete(t), p;
}
var Eh = Ww, Uw = at, zw = Uw.Uint8Array, qw = zw;
function Hw(e6) {
  var t = -1, r = Array(e6.size);
  return e6.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var Gw = Hw;
function Kw(e6) {
  var t = -1, r = Array(e6.size);
  return e6.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var fc = Kw, Ss = Ln, _s = qw, Xw = Yu, Vw = Eh, Yw = Gw, Zw = fc, Jw = 1, Qw = 2, e1 = "[object Boolean]", t1 = "[object Date]", r1 = "[object Error]", n1 = "[object Map]", i1 = "[object Number]", a1 = "[object RegExp]", o1 = "[object Set]", u1 = "[object String]", c1 = "[object Symbol]", s1 = "[object ArrayBuffer]", l1 = "[object DataView]", As = Ss ? Ss.prototype : void 0, ro = As ? As.valueOf : void 0;
function f1(e6, t, r, n, i, a, o) {
  switch (r) {
    case l1:
      if (e6.byteLength != t.byteLength || e6.byteOffset != t.byteOffset) return false;
      e6 = e6.buffer, t = t.buffer;
    case s1:
      return !(e6.byteLength != t.byteLength || !a(new _s(e6), new _s(t)));
    case e1:
    case t1:
    case i1:
      return Xw(+e6, +t);
    case r1:
      return e6.name == t.name && e6.message == t.message;
    case a1:
    case u1:
      return e6 == t + "";
    case n1:
      var u = Yw;
    case o1:
      var c = n & Jw;
      if (u || (u = Zw), e6.size != t.size && !c) return false;
      var s = o.get(e6);
      if (s) return s == t;
      n |= Qw, o.set(e6, t);
      var f = Vw(u(e6), u(t), n, i, a, o);
      return o.delete(e6), f;
    case c1:
      if (ro) return ro.call(e6) == ro.call(t);
  }
  return false;
}
var p1 = f1;
function h1(e6, t) {
  for (var r = -1, n = t.length, i = e6.length; ++r < n; ) e6[i + r] = t[r];
  return e6;
}
var jh = h1, d1 = jh, v1 = Ne;
function y1(e6, t, r) {
  var n = t(e6);
  return v1(e6) ? n : d1(n, r(e6));
}
var g1 = y1;
function m1(e6, t) {
  for (var r = -1, n = e6 == null ? 0 : e6.length, i = 0, a = []; ++r < n; ) {
    var o = e6[r];
    t(o, r, e6) && (a[i++] = o);
  }
  return a;
}
var b1 = m1;
function x1() {
  return [];
}
var w1 = x1, O1 = b1, S1 = w1, _1 = Object.prototype, A1 = _1.propertyIsEnumerable, Ps = Object.getOwnPropertySymbols, P1 = Ps ? function(e6) {
  return e6 == null ? [] : (e6 = Object(e6), O1(Ps(e6), function(t) {
    return A1.call(e6, t);
  }));
} : S1, $1 = P1;
function T1(e6, t) {
  for (var r = -1, n = Array(e6); ++r < e6; ) n[r] = t(r);
  return n;
}
var E1 = T1, j1 = yt, M1 = gt, C1 = "[object Arguments]";
function I1(e6) {
  return M1(e6) && j1(e6) == C1;
}
var N1 = I1, $s = N1, D1 = gt, Mh = Object.prototype, k1 = Mh.hasOwnProperty, R1 = Mh.propertyIsEnumerable, B1 = $s(/* @__PURE__ */ (function() {
  return arguments;
})()) ? $s : function(e6) {
  return D1(e6) && k1.call(e6, "callee") && !R1.call(e6, "callee");
}, pc = B1, bi = { exports: {} };
function L1() {
  return false;
}
var F1 = L1;
bi.exports;
(function(e6, t) {
  var r = at, n = F1, i = t && !t.nodeType && t, a = i && true && e6 && !e6.nodeType && e6, o = a && a.exports === i, u = o ? r.Buffer : void 0, c = u ? u.isBuffer : void 0, s = c || n;
  e6.exports = s;
})(bi, bi.exports);
var Ch = bi.exports, W1 = 9007199254740991, U1 = /^(?:0|[1-9]\d*)$/;
function z1(e6, t) {
  var r = typeof e6;
  return t = t != null ? t : W1, !!t && (r == "number" || r != "symbol" && U1.test(e6)) && e6 > -1 && e6 % 1 == 0 && e6 < t;
}
var hc = z1, q1 = 9007199254740991;
function H1(e6) {
  return typeof e6 == "number" && e6 > -1 && e6 % 1 == 0 && e6 <= q1;
}
var dc = H1, G1 = yt, K1 = dc, X1 = gt, V1 = "[object Arguments]", Y1 = "[object Array]", Z1 = "[object Boolean]", J1 = "[object Date]", Q1 = "[object Error]", eO = "[object Function]", tO = "[object Map]", rO = "[object Number]", nO = "[object Object]", iO = "[object RegExp]", aO = "[object Set]", oO = "[object String]", uO = "[object WeakMap]", cO = "[object ArrayBuffer]", sO = "[object DataView]", lO = "[object Float32Array]", fO = "[object Float64Array]", pO = "[object Int8Array]", hO = "[object Int16Array]", dO = "[object Int32Array]", vO = "[object Uint8Array]", yO = "[object Uint8ClampedArray]", gO = "[object Uint16Array]", mO = "[object Uint32Array]", se = {};
se[lO] = se[fO] = se[pO] = se[hO] = se[dO] = se[vO] = se[yO] = se[gO] = se[mO] = true;
se[V1] = se[Y1] = se[cO] = se[Z1] = se[sO] = se[J1] = se[Q1] = se[eO] = se[tO] = se[rO] = se[nO] = se[iO] = se[aO] = se[oO] = se[uO] = false;
function bO(e6) {
  return X1(e6) && K1(e6.length) && !!se[G1(e6)];
}
var xO = bO;
function wO(e6) {
  return function(t) {
    return e6(t);
  };
}
var Ih = wO, xi = { exports: {} };
xi.exports;
(function(e6, t) {
  var r = Wp, n = t && !t.nodeType && t, i = n && true && e6 && !e6.nodeType && e6, a = i && i.exports === n, o = a && r.process, u = (function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || o && o.binding && o.binding("util");
    } catch (e7) {
    }
  })();
  e6.exports = u;
})(xi, xi.exports);
var OO = xi.exports, SO = xO, _O = Ih, Ts = OO, Es = Ts && Ts.isTypedArray, AO = Es ? _O(Es) : SO, Nh = AO, PO = E1, $O = pc, TO = Ne, EO = Ch, jO = hc, MO = Nh, CO = Object.prototype, IO = CO.hasOwnProperty;
function NO(e6, t) {
  var r = TO(e6), n = !r && $O(e6), i = !r && !n && EO(e6), a = !r && !n && !i && MO(e6), o = r || n || i || a, u = o ? PO(e6.length, String) : [], c = u.length;
  for (var s in e6) (t || IO.call(e6, s)) && !(o && (s == "length" || i && (s == "offset" || s == "parent") || a && (s == "buffer" || s == "byteLength" || s == "byteOffset") || jO(s, c))) && u.push(s);
  return u;
}
var DO = NO, kO = Object.prototype;
function RO(e6) {
  var t = e6 && e6.constructor, r = typeof t == "function" && t.prototype || kO;
  return e6 === r;
}
var BO = RO;
function LO(e6, t) {
  return function(r) {
    return e6(t(r));
  };
}
var Dh = LO, FO = Dh, WO = FO(Object.keys, Object), UO = WO, zO = BO, qO = UO, HO = Object.prototype, GO = HO.hasOwnProperty;
function KO(e6) {
  if (!zO(e6)) return qO(e6);
  var t = [];
  for (var r in Object(e6)) GO.call(e6, r) && r != "constructor" && t.push(r);
  return t;
}
var XO = KO, VO = Vu, YO = dc;
function ZO(e6) {
  return e6 != null && YO(e6.length) && !VO(e6);
}
var Wn = ZO, JO = DO, QO = XO, eS = Wn;
function tS(e6) {
  return eS(e6) ? JO(e6) : QO(e6);
}
var $a = tS, rS = g1, nS = $1, iS = $a;
function aS(e6) {
  return rS(e6, iS, nS);
}
var oS = aS, js = oS, uS = 1, cS = Object.prototype, sS = cS.hasOwnProperty;
function lS(e6, t, r, n, i, a) {
  var o = r & uS, u = js(e6), c = u.length, s = js(t), f = s.length;
  if (c != f && !o) return false;
  for (var l = c; l--; ) {
    var p = u[l];
    if (!(o ? p in t : sS.call(t, p))) return false;
  }
  var h = a.get(e6), d = a.get(t);
  if (h && d) return h == t && d == e6;
  var v = true;
  a.set(e6, t), a.set(t, e6);
  for (var y = o; ++l < c; ) {
    p = u[l];
    var x = e6[p], w = t[p];
    if (n) var b = o ? n(w, x, p, t, e6, a) : n(x, w, p, e6, t, a);
    if (!(b === void 0 ? x === w || i(x, w, r, n, a) : b)) {
      v = false;
      break;
    }
    y || (y = p == "constructor");
  }
  if (v && !y) {
    var S = e6.constructor, g = t.constructor;
    S != g && "constructor" in e6 && "constructor" in t && !(typeof S == "function" && S instanceof S && typeof g == "function" && g instanceof g) && (v = false);
  }
  return a.delete(e6), a.delete(t), v;
}
var fS = lS, pS = Vt, hS = at, dS = pS(hS, "DataView"), vS = dS, yS = Vt, gS = at, mS = yS(gS, "Promise"), bS = mS, xS = Vt, wS = at, OS = xS(wS, "Set"), kh = OS, SS = Vt, _S = at, AS = SS(_S, "WeakMap"), PS = AS, Wo = vS, Uo = Zu, zo = bS, qo = kh, Ho = PS, Rh = yt, Rr = zp, Ms = "[object Map]", $S = "[object Object]", Cs = "[object Promise]", Is = "[object Set]", Ns = "[object WeakMap]", Ds = "[object DataView]", TS = Rr(Wo), ES = Rr(Uo), jS = Rr(zo), MS = Rr(qo), CS = Rr(Ho), kt = Rh;
(Wo && kt(new Wo(new ArrayBuffer(1))) != Ds || Uo && kt(new Uo()) != Ms || zo && kt(zo.resolve()) != Cs || qo && kt(new qo()) != Is || Ho && kt(new Ho()) != Ns) && (kt = function(e6) {
  var t = Rh(e6), r = t == $S ? e6.constructor : void 0, n = r ? Rr(r) : "";
  if (n) switch (n) {
    case TS:
      return Ds;
    case ES:
      return Ms;
    case jS:
      return Cs;
    case MS:
      return Is;
    case CS:
      return Ns;
  }
  return t;
});
var IS = kt, no = Ah, NS = Eh, DS = p1, kS = fS, ks = IS, Rs = Ne, Bs = Ch, RS = Nh, BS = 1, Ls = "[object Arguments]", Fs = "[object Array]", Yn = "[object Object]", LS = Object.prototype, Ws = LS.hasOwnProperty;
function FS(e6, t, r, n, i, a) {
  var o = Rs(e6), u = Rs(t), c = o ? Fs : ks(e6), s = u ? Fs : ks(t);
  c = c == Ls ? Yn : c, s = s == Ls ? Yn : s;
  var f = c == Yn, l = s == Yn, p = c == s;
  if (p && Bs(e6)) {
    if (!Bs(t)) return false;
    o = true, f = false;
  }
  if (p && !f) return a || (a = new no()), o || RS(e6) ? NS(e6, t, r, n, i, a) : DS(e6, t, c, r, n, i, a);
  if (!(r & BS)) {
    var h = f && Ws.call(e6, "__wrapped__"), d = l && Ws.call(t, "__wrapped__");
    if (h || d) {
      var v = h ? e6.value() : e6, y = d ? t.value() : t;
      return a || (a = new no()), i(v, y, r, n, a);
    }
  }
  return p ? (a || (a = new no()), kS(e6, t, r, n, i, a)) : false;
}
var WS = FS, US = WS, Us = gt;
function Bh(e6, t, r, n, i) {
  return e6 === t ? true : e6 == null || t == null || !Us(e6) && !Us(t) ? e6 !== e6 && t !== t : US(e6, t, r, n, Bh, i);
}
var vc = Bh, zS = Ah, qS = vc, HS = 1, GS = 2;
function KS(e6, t, r, n) {
  var i = r.length, a = i, o = !n;
  if (e6 == null) return !a;
  for (e6 = Object(e6); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== e6[u[0]] : !(u[0] in e6)) return false;
  }
  for (; ++i < a; ) {
    u = r[i];
    var c = u[0], s = e6[c], f = u[1];
    if (o && u[2]) {
      if (s === void 0 && !(c in e6)) return false;
    } else {
      var l = new zS();
      if (n) var p = n(s, f, c, e6, t, l);
      if (!(p === void 0 ? qS(f, s, HS | GS, n, l) : p)) return false;
    }
  }
  return true;
}
var XS = KS, VS = Pt;
function YS(e6) {
  return e6 === e6 && !VS(e6);
}
var Lh = YS, ZS = Lh, JS = $a;
function QS(e6) {
  for (var t = JS(e6), r = t.length; r--; ) {
    var n = t[r], i = e6[n];
    t[r] = [n, i, ZS(i)];
  }
  return t;
}
var e_ = QS;
function t_(e6, t) {
  return function(r) {
    return r == null ? false : r[e6] === t && (t !== void 0 || e6 in Object(r));
  };
}
var Fh = t_, r_ = XS, n_ = e_, i_ = Fh;
function a_(e6) {
  var t = n_(e6);
  return t.length == 1 && t[0][2] ? i_(t[0][0], t[0][1]) : function(r) {
    return r === e6 || r_(r, e6, t);
  };
}
var o_ = a_;
function u_(e6, t) {
  return e6 != null && t in Object(e6);
}
var c_ = u_, s_ = Xp, l_ = pc, f_ = Ne, p_ = hc, h_ = dc, d_ = fa;
function v_(e6, t, r) {
  t = s_(t, e6);
  for (var n = -1, i = t.length, a = false; ++n < i; ) {
    var o = d_(t[n]);
    if (!(a = e6 != null && r(e6, o))) break;
    e6 = e6[o];
  }
  return a || ++n != i ? a : (i = e6 == null ? 0 : e6.length, !!i && h_(i) && p_(o, i) && (f_(e6) || l_(e6)));
}
var y_ = v_, g_ = c_, m_ = y_;
function b_(e6, t) {
  return e6 != null && m_(e6, t, g_);
}
var x_ = b_, w_ = vc, O_ = Vp, S_ = x_, __ = Xu, A_ = Lh, P_ = Fh, $_ = fa, T_ = 1, E_ = 2;
function j_(e6, t) {
  return __(e6) && A_(t) ? P_($_(e6), t) : function(r) {
    var n = O_(r, e6);
    return n === void 0 && n === t ? S_(r, e6) : w_(t, n, T_ | E_);
  };
}
var M_ = j_;
function C_(e6) {
  return e6;
}
var Br = C_;
function I_(e6) {
  return function(t) {
    return t == null ? void 0 : t[e6];
  };
}
var N_ = I_, D_ = tc;
function k_(e6) {
  return function(t) {
    return D_(t, e6);
  };
}
var R_ = k_, B_ = N_, L_ = R_, F_ = Xu, W_ = fa;
function U_(e6) {
  return F_(e6) ? B_(W_(e6)) : L_(e6);
}
var z_ = U_, q_ = o_, H_ = M_, G_ = Br, K_ = Ne, X_ = z_;
function V_(e6) {
  return typeof e6 == "function" ? e6 : e6 == null ? G_ : typeof e6 == "object" ? K_(e6) ? H_(e6[0], e6[1]) : q_(e6) : X_(e6);
}
var $t = V_;
function Y_(e6, t, r, n) {
  for (var i = e6.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; ) if (t(e6[a], a, e6)) return a;
  return -1;
}
var Wh = Y_;
function Z_(e6) {
  return e6 !== e6;
}
var J_ = Z_;
function Q_(e6, t, r) {
  for (var n = r - 1, i = e6.length; ++n < i; ) if (e6[n] === t) return n;
  return -1;
}
var eA = Q_, tA = Wh, rA = J_, nA = eA;
function iA(e6, t, r) {
  return t === t ? nA(e6, t, r) : tA(e6, rA, r);
}
var aA = iA, oA = aA;
function uA(e6, t) {
  var r = e6 == null ? 0 : e6.length;
  return !!r && oA(e6, t, 0) > -1;
}
var cA = uA;
function sA(e6, t, r) {
  for (var n = -1, i = e6 == null ? 0 : e6.length; ++n < i; ) if (r(t, e6[n])) return true;
  return false;
}
var lA = sA;
function fA() {
}
var pA = fA, io = kh, hA = pA, dA = fc, vA = 1 / 0, yA = io && 1 / dA(new io([, -0]))[1] == vA ? function(e6) {
  return new io(e6);
} : hA, gA = yA, mA = Ph, bA = cA, xA = lA, wA = Th, OA = gA, SA = fc, _A = 200;
function AA(e6, t, r) {
  var n = -1, i = bA, a = e6.length, o = true, u = [], c = u;
  if (r) o = false, i = xA;
  else if (a >= _A) {
    var s = t ? null : OA(e6);
    if (s) return SA(s);
    o = false, i = wA, c = new mA();
  } else c = t ? [] : u;
  e: for (; ++n < a; ) {
    var f = e6[n], l = t ? t(f) : f;
    if (f = r || f !== 0 ? f : 0, o && l === l) {
      for (var p = c.length; p--; ) if (c[p] === l) continue e;
      t && c.push(l), u.push(f);
    } else i(c, l, r) || (c !== u && c.push(l), u.push(f));
  }
  return u;
}
var PA = AA, $A = $t, TA = PA;
function EA(e6, t) {
  return e6 && e6.length ? TA(e6, $A(t)) : [];
}
var jA = EA;
const zs = ue(jA);
function Uh(e6, t, r) {
  return t === true ? zs(e6, r) : Y(t) ? zs(e6, t) : e6;
}
function pr(e6) {
  "@babel/helpers - typeof";
  return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, pr(e6);
}
var MA = ["ref"];
function qs(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ot(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qs(Object(r), true).forEach(function(n) {
      Ta(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function CA(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Hs(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, qh(n.key), n);
  }
}
function IA(e6, t, r) {
  return t && Hs(e6.prototype, t), r && Hs(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function NA(e6, t, r) {
  return t = wi(t), DA(e6, zh() ? Reflect.construct(t, r || [], wi(e6).constructor) : t.apply(e6, r));
}
function DA(e6, t) {
  if (t && (pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return kA(e6);
}
function kA(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function zh() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (zh = function() {
    return !!e6;
  })();
}
function wi(e6) {
  return wi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wi(e6);
}
function RA(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Go(e6, t);
}
function Go(e6, t) {
  return Go = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Go(e6, t);
}
function Ta(e6, t, r) {
  return t = qh(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function qh(e6) {
  var t = BA(e6, "string");
  return pr(t) == "symbol" ? t : t + "";
}
function BA(e6, t) {
  if (pr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function LA(e6, t) {
  if (e6 == null) return {};
  var r = FA(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function FA(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function WA(e6) {
  return e6.value;
}
function UA(e6, t) {
  if ($.isValidElement(e6)) return $.cloneElement(e6, t);
  if (typeof e6 == "function") return $.createElement(e6, t);
  t.ref;
  var r = LA(t, MA);
  return $.createElement(lc, r);
}
var Gs = 1, ur = (function(e6) {
  function t() {
    var r;
    CA(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = NA(this, t, [].concat(i)), Ta(r, "lastBoundingBox", { width: -1, height: -1 }), r;
  }
  return RA(t, e6), IA(t, [{ key: "componentDidMount", value: function() {
    this.updateBBox();
  } }, { key: "componentDidUpdate", value: function() {
    this.updateBBox();
  } }, { key: "getBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
    }
    return null;
  } }, { key: "updateBBox", value: function() {
    var n = this.props.onBBoxUpdate, i = this.getBBox();
    i ? (Math.abs(i.width - this.lastBoundingBox.width) > Gs || Math.abs(i.height - this.lastBoundingBox.height) > Gs) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
  } }, { key: "getBBoxSnapshot", value: function() {
    return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ot({}, this.lastBoundingBox) : { width: 0, height: 0 };
  } }, { key: "getDefaultPosition", value: function(n) {
    var i = this.props, a = i.layout, o = i.align, u = i.verticalAlign, c = i.margin, s = i.chartWidth, f = i.chartHeight, l, p;
    if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null)) if (o === "center" && a === "vertical") {
      var h = this.getBBoxSnapshot();
      l = { left: ((s || 0) - h.width) / 2 };
    } else l = o === "right" ? { right: c && c.right || 0 } : { left: c && c.left || 0 };
    if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null)) if (u === "middle") {
      var d = this.getBBoxSnapshot();
      p = { top: ((f || 0) - d.height) / 2 };
    } else p = u === "bottom" ? { bottom: c && c.bottom || 0 } : { top: c && c.top || 0 };
    return ot(ot({}, l), p);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.content, o = i.width, u = i.height, c = i.wrapperStyle, s = i.payloadUniqBy, f = i.payload, l = ot(ot({ position: "absolute", width: o || "auto", height: u || "auto" }, this.getDefaultPosition(c)), c);
    return $.createElement("div", { className: "recharts-legend-wrapper", style: l, ref: function(h) {
      n.wrapperNode = h;
    } }, UA(a, ot(ot({}, this.props), {}, { payload: Uh(f, s, WA) })));
  } }], [{ key: "getWithHeight", value: function(n, i) {
    var a = ot(ot({}, this.defaultProps), n.props), o = a.layout;
    return o === "vertical" && F(n.props.height) ? { height: n.props.height } : o === "horizontal" ? { width: n.props.width || i } : null;
  } }]);
})(R.PureComponent);
Ta(ur, "displayName", "Legend");
Ta(ur, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
var Ks = Ln, zA = pc, qA = Ne, Xs = Ks ? Ks.isConcatSpreadable : void 0;
function HA(e6) {
  return qA(e6) || zA(e6) || !!(Xs && e6 && e6[Xs]);
}
var GA = HA, KA = jh, XA = GA;
function Hh(e6, t, r, n, i) {
  var a = -1, o = e6.length;
  for (r || (r = XA), i || (i = []); ++a < o; ) {
    var u = e6[a];
    t > 0 && r(u) ? t > 1 ? Hh(u, t - 1, r, n, i) : KA(i, u) : n || (i[i.length] = u);
  }
  return i;
}
var Gh = Hh;
function VA(e6) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), o = n(t), u = o.length; u--; ) {
      var c = o[e6 ? u : ++i];
      if (r(a[c], c, a) === false) break;
    }
    return t;
  };
}
var YA = VA, ZA = YA, JA = ZA(), QA = JA, eP = QA, tP = $a;
function rP(e6, t) {
  return e6 && eP(e6, t, tP);
}
var Kh = rP, nP = Wn;
function iP(e6, t) {
  return function(r, n) {
    if (r == null) return r;
    if (!nP(r)) return e6(r, n);
    for (var i = r.length, a = t ? i : -1, o = Object(r); (t ? a-- : ++a < i) && n(o[a], a, o) !== false; ) ;
    return r;
  };
}
var aP = iP, oP = Kh, uP = aP, cP = uP(oP), yc = cP, sP = yc, lP = Wn;
function fP(e6, t) {
  var r = -1, n = lP(e6) ? Array(e6.length) : [];
  return sP(e6, function(i, a, o) {
    n[++r] = t(i, a, o);
  }), n;
}
var Xh = fP;
function pP(e6, t) {
  var r = e6.length;
  for (e6.sort(t); r--; ) e6[r] = e6[r].value;
  return e6;
}
var hP = pP, Vs = Mr;
function dP(e6, t) {
  if (e6 !== t) {
    var r = e6 !== void 0, n = e6 === null, i = e6 === e6, a = Vs(e6), o = t !== void 0, u = t === null, c = t === t, s = Vs(t);
    if (!u && !s && !a && e6 > t || a && o && c && !u && !s || n && o && c || !r && c || !i) return 1;
    if (!n && !a && !s && e6 < t || s && r && i && !n && !a || u && r && i || !o && i || !c) return -1;
  }
  return 0;
}
var vP = dP, yP = vP;
function gP(e6, t, r) {
  for (var n = -1, i = e6.criteria, a = t.criteria, o = i.length, u = r.length; ++n < o; ) {
    var c = yP(i[n], a[n]);
    if (c) {
      if (n >= u) return c;
      var s = r[n];
      return c * (s == "desc" ? -1 : 1);
    }
  }
  return e6.index - t.index;
}
var mP = gP, ao = ec, bP = tc, xP = $t, wP = Xh, OP = hP, SP = Ih, _P = mP, AP = Br, PP = Ne;
function $P(e6, t, r) {
  t.length ? t = ao(t, function(a) {
    return PP(a) ? function(o) {
      return bP(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [AP];
  var n = -1;
  t = ao(t, SP(xP));
  var i = wP(e6, function(a, o, u) {
    var c = ao(t, function(s) {
      return s(a);
    });
    return { criteria: c, index: ++n, value: a };
  });
  return OP(i, function(a, o) {
    return _P(a, o, r);
  });
}
var TP = $P;
function EP(e6, t, r) {
  switch (r.length) {
    case 0:
      return e6.call(t);
    case 1:
      return e6.call(t, r[0]);
    case 2:
      return e6.call(t, r[0], r[1]);
    case 3:
      return e6.call(t, r[0], r[1], r[2]);
  }
  return e6.apply(t, r);
}
var jP = EP, MP = jP, Ys = Math.max;
function CP(e6, t, r) {
  return t = Ys(t === void 0 ? e6.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = Ys(n.length - t, 0), o = Array(a); ++i < a; ) o[i] = n[t + i];
    i = -1;
    for (var u = Array(t + 1); ++i < t; ) u[i] = n[i];
    return u[t] = r(o), MP(e6, this, u);
  };
}
var IP = CP;
function NP(e6) {
  return function() {
    return e6;
  };
}
var DP = NP, kP = Vt, RP = (function() {
  try {
    var e6 = kP(Object, "defineProperty");
    return e6({}, "", {}), e6;
  } catch (e7) {
  }
})(), Vh = RP, BP = DP, Zs = Vh, LP = Br, FP = Zs ? function(e6, t) {
  return Zs(e6, "toString", { configurable: true, enumerable: false, value: BP(t), writable: true });
} : LP, WP = FP, UP = 800, zP = 16, qP = Date.now;
function HP(e6) {
  var t = 0, r = 0;
  return function() {
    var n = qP(), i = zP - (n - r);
    if (r = n, i > 0) {
      if (++t >= UP) return arguments[0];
    } else t = 0;
    return e6.apply(void 0, arguments);
  };
}
var GP = HP, KP = WP, XP = GP, VP = XP(KP), YP = VP, ZP = Br, JP = IP, QP = YP;
function e$(e6, t) {
  return QP(JP(e6, t, ZP), e6 + "");
}
var t$ = e$, r$ = Yu, n$ = Wn, i$ = hc, a$ = Pt;
function o$(e6, t, r) {
  if (!a$(r)) return false;
  var n = typeof t;
  return (n == "number" ? n$(r) && i$(t, r.length) : n == "string" && t in r) ? r$(r[t], e6) : false;
}
var Ea = o$, u$ = Gh, c$ = TP, s$ = t$, Js = Ea, l$ = s$(function(e6, t) {
  if (e6 == null) return [];
  var r = t.length;
  return r > 1 && Js(e6, t[0], t[1]) ? t = [] : r > 2 && Js(t[0], t[1], t[2]) && (t = [t[0]]), c$(e6, u$(t, 1), []);
}), f$ = l$;
const gc = ue(f$);
function on(e6) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e6);
}
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Ko.apply(this, arguments);
}
function p$(e6, t) {
  return y$(e6) || v$(e6, t) || d$(e6, t) || h$();
}
function h$() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function d$(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Qs(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Qs(e6, t);
  }
}
function Qs(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function v$(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function y$(e6) {
  if (Array.isArray(e6)) return e6;
}
function el(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oo(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? el(Object(r), true).forEach(function(n) {
      g$(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function g$(e6, t, r) {
  return t = m$(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function m$(e6) {
  var t = b$(e6, "string");
  return on(t) == "symbol" ? t : t + "";
}
function b$(e6, t) {
  if (on(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (on(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function x$(e6) {
  return Array.isArray(e6) && we(e6[0]) && we(e6[1]) ? e6.join(" ~ ") : e6;
}
var w$ = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, o = t.itemStyle, u = o === void 0 ? {} : o, c = t.labelStyle, s = c === void 0 ? {} : c, f = t.payload, l = t.formatter, p = t.itemSorter, h = t.wrapperClassName, d = t.labelClassName, v = t.label, y = t.labelFormatter, x = t.accessibilityLayer, w = x === void 0 ? false : x, b = function() {
    if (f && f.length) {
      var T = { padding: 0, margin: 0 }, I = (p ? gc(f, p) : f).map(function(C, M) {
        if (C.type === "none") return null;
        var N = oo({ display: "block", paddingTop: 4, paddingBottom: 4, color: C.color || "#000" }, u), k = C.formatter || l || x$, B = C.value, L = C.name, q = B, G = L;
        if (k && q != null && G != null) {
          var U = k(B, L, C, M, f);
          if (Array.isArray(U)) {
            var K = p$(U, 2);
            q = K[0], G = K[1];
          } else q = U;
        }
        return $.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-".concat(M), style: N }, we(G) ? $.createElement("span", { className: "recharts-tooltip-item-name" }, G) : null, we(G) ? $.createElement("span", { className: "recharts-tooltip-item-separator" }, n) : null, $.createElement("span", { className: "recharts-tooltip-item-value" }, q), $.createElement("span", { className: "recharts-tooltip-item-unit" }, C.unit || ""));
      });
      return $.createElement("ul", { className: "recharts-tooltip-item-list", style: T }, I);
    }
    return null;
  }, S = oo({ margin: 0, padding: 10, backgroundColor: "#fff", border: "1px solid #ccc", whiteSpace: "nowrap" }, a), g = oo({ margin: 0 }, s), m = !Z(v), O = m ? v : "", _ = ee("recharts-default-tooltip", h), A = ee("recharts-tooltip-label", d);
  m && y && f !== void 0 && f !== null && (O = y(v, f));
  var j = w ? { role: "status", "aria-live": "assertive" } : {};
  return $.createElement("div", Ko({ className: _, style: S }, j), $.createElement("p", { className: A, style: g }, $.isValidElement(O) ? O : "".concat(O)), b());
};
function un(e6) {
  "@babel/helpers - typeof";
  return un = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, un(e6);
}
function Zn(e6, t, r) {
  return t = O$(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function O$(e6) {
  var t = S$(e6, "string");
  return un(t) == "symbol" ? t : t + "";
}
function S$(e6, t) {
  if (un(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (un(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var zr = "recharts-tooltip-wrapper", _$ = { visibility: "hidden" };
function A$(e6) {
  var t = e6.coordinate, r = e6.translateX, n = e6.translateY;
  return ee(zr, Zn(Zn(Zn(Zn({}, "".concat(zr, "-right"), F(r) && t && F(t.x) && r >= t.x), "".concat(zr, "-left"), F(r) && t && F(t.x) && r < t.x), "".concat(zr, "-bottom"), F(n) && t && F(t.y) && n >= t.y), "".concat(zr, "-top"), F(n) && t && F(t.y) && n < t.y));
}
function tl(e6) {
  var t = e6.allowEscapeViewBox, r = e6.coordinate, n = e6.key, i = e6.offsetTopLeft, a = e6.position, o = e6.reverseDirection, u = e6.tooltipDimension, c = e6.viewBox, s = e6.viewBoxDimension;
  if (a && F(a[n])) return a[n];
  var f = r[n] - u - i, l = r[n] + i;
  if (t[n]) return o[n] ? f : l;
  if (o[n]) {
    var p = f, h = c[n];
    return p < h ? Math.max(l, c[n]) : Math.max(f, c[n]);
  }
  var d = l + u, v = c[n] + s;
  return d > v ? Math.max(f, c[n]) : Math.max(l, c[n]);
}
function P$(e6) {
  var t = e6.translateX, r = e6.translateY, n = e6.useTranslate3d;
  return { transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
}
function $$(e6) {
  var t = e6.allowEscapeViewBox, r = e6.coordinate, n = e6.offsetTopLeft, i = e6.position, a = e6.reverseDirection, o = e6.tooltipBox, u = e6.useTranslate3d, c = e6.viewBox, s, f, l;
  return o.height > 0 && o.width > 0 && r ? (f = tl({ allowEscapeViewBox: t, coordinate: r, key: "x", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.width, viewBox: c, viewBoxDimension: c.width }), l = tl({ allowEscapeViewBox: t, coordinate: r, key: "y", offsetTopLeft: n, position: i, reverseDirection: a, tooltipDimension: o.height, viewBox: c, viewBoxDimension: c.height }), s = P$({ translateX: f, translateY: l, useTranslate3d: u })) : s = _$, { cssProperties: s, cssClasses: A$({ translateX: f, translateY: l, coordinate: r }) };
}
function hr(e6) {
  "@babel/helpers - typeof";
  return hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, hr(e6);
}
function rl(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nl(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rl(Object(r), true).forEach(function(n) {
      Vo(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : rl(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function T$(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function E$(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Zh(n.key), n);
  }
}
function j$(e6, t, r) {
  return t && E$(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function M$(e6, t, r) {
  return t = Oi(t), C$(e6, Yh() ? Reflect.construct(t, r || [], Oi(e6).constructor) : t.apply(e6, r));
}
function C$(e6, t) {
  if (t && (hr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return I$(e6);
}
function I$(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Yh() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Yh = function() {
    return !!e6;
  })();
}
function Oi(e6) {
  return Oi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Oi(e6);
}
function N$(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Xo(e6, t);
}
function Xo(e6, t) {
  return Xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xo(e6, t);
}
function Vo(e6, t, r) {
  return t = Zh(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Zh(e6) {
  var t = D$(e6, "string");
  return hr(t) == "symbol" ? t : t + "";
}
function D$(e6, t) {
  if (hr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (hr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var il = 1, k$ = (function(e6) {
  function t() {
    var r;
    T$(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = M$(this, t, [].concat(i)), Vo(r, "state", { dismissed: false, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }), Vo(r, "handleKeyDown", function(o) {
      if (o.key === "Escape") {
        var u, c, s, f;
        r.setState({ dismissed: true, dismissedAtCoordinate: { x: (u = (c = r.props.coordinate) === null || c === void 0 ? void 0 : c.x) !== null && u !== void 0 ? u : 0, y: (s = (f = r.props.coordinate) === null || f === void 0 ? void 0 : f.y) !== null && s !== void 0 ? s : 0 } });
      }
    }), r;
  }
  return N$(t, e6), j$(t, [{ key: "updateBBox", value: function() {
    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
      var n = this.wrapperNode.getBoundingClientRect();
      (Math.abs(n.width - this.state.lastBoundingBox.width) > il || Math.abs(n.height - this.state.lastBoundingBox.height) > il) && this.setState({ lastBoundingBox: { width: n.width, height: n.height } });
    } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({ lastBoundingBox: { width: -1, height: -1 } });
  } }, { key: "componentDidMount", value: function() {
    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
  } }, { key: "componentWillUnmount", value: function() {
    document.removeEventListener("keydown", this.handleKeyDown);
  } }, { key: "componentDidUpdate", value: function() {
    var n, i;
    this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = false);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.children, f = i.coordinate, l = i.hasPayload, p = i.isAnimationActive, h = i.offset, d = i.position, v = i.reverseDirection, y = i.useTranslate3d, x = i.viewBox, w = i.wrapperStyle, b = $$({ allowEscapeViewBox: o, coordinate: f, offsetTopLeft: h, position: d, reverseDirection: v, tooltipBox: this.state.lastBoundingBox, useTranslate3d: y, viewBox: x }), S = b.cssClasses, g = b.cssProperties, m = nl(nl({ transition: p && a ? "transform ".concat(u, "ms ").concat(c) : void 0 }, g), {}, { pointerEvents: "none", visibility: !this.state.dismissed && a && l ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, w);
    return $.createElement("div", { tabIndex: -1, className: S, style: m, ref: function(_) {
      n.wrapperNode = _;
    } }, s);
  } }]);
})(R.PureComponent), R$ = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, St = { isSsr: R$(), get: function(t) {
  return St[t];
}, set: function(t, r) {
  if (typeof t == "string") St[t] = r;
  else {
    var n = Object.keys(t);
    n && n.length && n.forEach(function(i) {
      St[i] = t[i];
    });
  }
} };
function dr(e6) {
  "@babel/helpers - typeof";
  return dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dr(e6);
}
function al(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ol(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? al(Object(r), true).forEach(function(n) {
      mc(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : al(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function B$(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function L$(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Qh(n.key), n);
  }
}
function F$(e6, t, r) {
  return t && L$(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function W$(e6, t, r) {
  return t = Si(t), U$(e6, Jh() ? Reflect.construct(t, r || [], Si(e6).constructor) : t.apply(e6, r));
}
function U$(e6, t) {
  if (t && (dr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return z$(e6);
}
function z$(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Jh() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Jh = function() {
    return !!e6;
  })();
}
function Si(e6) {
  return Si = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Si(e6);
}
function q$(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Yo(e6, t);
}
function Yo(e6, t) {
  return Yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Yo(e6, t);
}
function mc(e6, t, r) {
  return t = Qh(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Qh(e6) {
  var t = H$(e6, "string");
  return dr(t) == "symbol" ? t : t + "";
}
function H$(e6, t) {
  if (dr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (dr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function G$(e6) {
  return e6.dataKey;
}
function K$(e6, t) {
  return $.isValidElement(e6) ? $.cloneElement(e6, t) : typeof e6 == "function" ? $.createElement(e6, t) : $.createElement(w$, t);
}
var ut = (function(e6) {
  function t() {
    return B$(this, t), W$(this, t, arguments);
  }
  return q$(t, e6), F$(t, [{ key: "render", value: function() {
    var n = this, i = this.props, a = i.active, o = i.allowEscapeViewBox, u = i.animationDuration, c = i.animationEasing, s = i.content, f = i.coordinate, l = i.filterNull, p = i.isAnimationActive, h = i.offset, d = i.payload, v = i.payloadUniqBy, y = i.position, x = i.reverseDirection, w = i.useTranslate3d, b = i.viewBox, S = i.wrapperStyle, g = d != null ? d : [];
    l && g.length && (g = Uh(d.filter(function(O) {
      return O.value != null && (O.hide !== true || n.props.includeHidden);
    }), v, G$));
    var m = g.length > 0;
    return $.createElement(k$, { allowEscapeViewBox: o, animationDuration: u, animationEasing: c, isAnimationActive: p, active: a, coordinate: f, hasPayload: m, offset: h, position: y, reverseDirection: x, useTranslate3d: w, viewBox: b, wrapperStyle: S }, K$(s, ol(ol({}, this.props), {}, { payload: g })));
  } }]);
})(R.PureComponent);
mc(ut, "displayName", "Tooltip");
mc(ut, "defaultProps", { accessibilityLayer: false, allowEscapeViewBox: { x: false, y: false }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: true, cursorStyle: {}, filterNull: true, isAnimationActive: !St.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: false, y: false }, separator: " : ", trigger: "hover", useTranslate3d: false, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
var X$ = at, V$ = function() {
  return X$.Date.now();
}, Y$ = V$, Z$ = /\s/;
function J$(e6) {
  for (var t = e6.length; t-- && Z$.test(e6.charAt(t)); ) ;
  return t;
}
var Q$ = J$, eT = Q$, tT = /^\s+/;
function rT(e6) {
  return e6 && e6.slice(0, eT(e6) + 1).replace(tT, "");
}
var nT = rT, iT = nT, ul = Pt, aT = Mr, cl = NaN, oT = /^[-+]0x[0-9a-f]+$/i, uT = /^0b[01]+$/i, cT = /^0o[0-7]+$/i, sT = parseInt;
function lT(e6) {
  if (typeof e6 == "number") return e6;
  if (aT(e6)) return cl;
  if (ul(e6)) {
    var t = typeof e6.valueOf == "function" ? e6.valueOf() : e6;
    e6 = ul(t) ? t + "" : t;
  }
  if (typeof e6 != "string") return e6 === 0 ? e6 : +e6;
  e6 = iT(e6);
  var r = uT.test(e6);
  return r || cT.test(e6) ? sT(e6.slice(2), r ? 2 : 8) : oT.test(e6) ? cl : +e6;
}
var ed = lT, fT = Pt, uo = Y$, sl = ed, pT = "Expected a function", hT = Math.max, dT = Math.min;
function vT(e6, t, r) {
  var n, i, a, o, u, c, s = 0, f = false, l = false, p = true;
  if (typeof e6 != "function") throw new TypeError(pT);
  t = sl(t) || 0, fT(r) && (f = !!r.leading, l = "maxWait" in r, a = l ? hT(sl(r.maxWait) || 0, t) : a, p = "trailing" in r ? !!r.trailing : p);
  function h(m) {
    var O = n, _ = i;
    return n = i = void 0, s = m, o = e6.apply(_, O), o;
  }
  function d(m) {
    return s = m, u = setTimeout(x, t), f ? h(m) : o;
  }
  function v(m) {
    var O = m - c, _ = m - s, A = t - O;
    return l ? dT(A, a - _) : A;
  }
  function y(m) {
    var O = m - c, _ = m - s;
    return c === void 0 || O >= t || O < 0 || l && _ >= a;
  }
  function x() {
    var m = uo();
    if (y(m)) return w(m);
    u = setTimeout(x, v(m));
  }
  function w(m) {
    return u = void 0, p && n ? h(m) : (n = i = void 0, o);
  }
  function b() {
    u !== void 0 && clearTimeout(u), s = 0, n = c = i = u = void 0;
  }
  function S() {
    return u === void 0 ? o : w(uo());
  }
  function g() {
    var m = uo(), O = y(m);
    if (n = arguments, i = this, c = m, O) {
      if (u === void 0) return d(c);
      if (l) return clearTimeout(u), u = setTimeout(x, t), h(c);
    }
    return u === void 0 && (u = setTimeout(x, t)), o;
  }
  return g.cancel = b, g.flush = S, g;
}
var yT = vT, gT = yT, mT = Pt, bT = "Expected a function";
function xT(e6, t, r) {
  var n = true, i = true;
  if (typeof e6 != "function") throw new TypeError(bT);
  return mT(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), gT(e6, t, { leading: n, maxWait: t, trailing: i });
}
var wT = xT;
const td = ue(wT);
function cn(e6) {
  "@babel/helpers - typeof";
  return cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cn(e6);
}
function ll(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jn(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ll(Object(r), true).forEach(function(n) {
      OT(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function OT(e6, t, r) {
  return t = ST(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function ST(e6) {
  var t = _T(e6, "string");
  return cn(t) == "symbol" ? t : t + "";
}
function _T(e6, t) {
  if (cn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (cn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function AT(e6, t) {
  return ET(e6) || TT(e6, t) || $T(e6, t) || PT();
}
function PT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $T(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return fl(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fl(e6, t);
  }
}
function fl(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function TT(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function ET(e6) {
  if (Array.isArray(e6)) return e6;
}
var CF = R.forwardRef(function(e6, t) {
  var r = e6.aspect, n = e6.initialDimension, i = n === void 0 ? { width: -1, height: -1 } : n, a = e6.width, o = a === void 0 ? "100%" : a, u = e6.height, c = u === void 0 ? "100%" : u, s = e6.minWidth, f = s === void 0 ? 0 : s, l = e6.minHeight, p = e6.maxHeight, h = e6.children, d = e6.debounce, v = d === void 0 ? 0 : d, y = e6.id, x = e6.className, w = e6.onResize, b = e6.style, S = b === void 0 ? {} : b, g = R.useRef(null), m = R.useRef();
  m.current = w, R.useImperativeHandle(t, function() {
    return Object.defineProperty(g.current, "current", { get: function() {
      return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), g.current;
    }, configurable: true });
  });
  var O = R.useState({ containerWidth: i.width, containerHeight: i.height }), _ = AT(O, 2), A = _[0], j = _[1], P = R.useCallback(function(I, C) {
    j(function(M) {
      var N = Math.round(I), k = Math.round(C);
      return M.containerWidth === N && M.containerHeight === k ? M : { containerWidth: N, containerHeight: k };
    });
  }, []);
  R.useEffect(function() {
    var I = function(L) {
      var q, G = L[0].contentRect, U = G.width, K = G.height;
      P(U, K), (q = m.current) === null || q === void 0 || q.call(m, U, K);
    };
    v > 0 && (I = td(I, v, { trailing: true, leading: false }));
    var C = new ResizeObserver(I), M = g.current.getBoundingClientRect(), N = M.width, k = M.height;
    return P(N, k), C.observe(g.current), function() {
      C.disconnect();
    };
  }, [P, v]);
  var T = R.useMemo(function() {
    var I = A.containerWidth, C = A.containerHeight;
    if (I < 0 || C < 0) return null;
    Ut(Bt(o) || Bt(c), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, o, c), Ut(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var M = Bt(o) ? I : o, N = Bt(c) ? C : c;
    r && r > 0 && (M ? N = M / r : N && (M = N * r), p && N > p && (N = p)), Ut(M > 0 || N > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, M, N, o, c, f, l, r);
    var k = !Array.isArray(h) && ft(h.type).endsWith("Chart");
    return $.Children.map(h, function(B) {
      return $.isValidElement(B) ? R.cloneElement(B, Jn({ width: M, height: N }, k ? { style: Jn({ height: "100%", width: "100%", maxHeight: N, maxWidth: M }, B.props.style) } : {})) : B;
    });
  }, [r, h, c, p, l, f, A, o]);
  return $.createElement("div", { id: y ? "".concat(y) : void 0, className: ee("recharts-responsive-container", x), style: Jn(Jn({}, S), {}, { width: o, height: c, minWidth: f, minHeight: l, maxHeight: p }), ref: g }, T);
}), rd = function(t) {
  return null;
};
rd.displayName = "Cell";
function sn(e6) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e6);
}
function pl(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zo(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pl(Object(r), true).forEach(function(n) {
      jT(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : pl(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function jT(e6, t, r) {
  return t = MT(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function MT(e6) {
  var t = CT(e6, "string");
  return sn(t) == "symbol" ? t : t + "";
}
function CT(e6, t) {
  if (sn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var tr = { widthCache: {}, cacheCount: 0 }, IT = 2e3, NT = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" }, hl = "recharts_measurement_span";
function DT(e6) {
  var t = Zo({}, e6);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var Qr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || St.isSsr) return { width: 0, height: 0 };
  var n = DT(r), i = JSON.stringify({ text: t, copyStyle: n });
  if (tr.widthCache[i]) return tr.widthCache[i];
  try {
    var a = document.getElementById(hl);
    a || (a = document.createElement("span"), a.setAttribute("id", hl), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var o = Zo(Zo({}, NT), n);
    Object.assign(a.style, o), a.textContent = "".concat(t);
    var u = a.getBoundingClientRect(), c = { width: u.width, height: u.height };
    return tr.widthCache[i] = c, ++tr.cacheCount > IT && (tr.cacheCount = 0, tr.widthCache = {}), c;
  } catch (e6) {
    return { width: 0, height: 0 };
  }
}, kT = function(t) {
  return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
};
function ln(e6) {
  "@babel/helpers - typeof";
  return ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ln(e6);
}
function _i(e6, t) {
  return FT(e6) || LT(e6, t) || BT(e6, t) || RT();
}
function RT() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function BT(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return dl(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return dl(e6, t);
  }
}
function dl(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function LT(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t === 0) {
        if (Object(r) !== r) return;
        c = false;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function FT(e6) {
  if (Array.isArray(e6)) return e6;
}
function WT(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function vl(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, zT(n.key), n);
  }
}
function UT(e6, t, r) {
  return t && vl(e6.prototype, t), r && vl(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function zT(e6) {
  var t = qT(e6, "string");
  return ln(t) == "symbol" ? t : t + "";
}
function qT(e6, t) {
  if (ln(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t);
    if (ln(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e6);
}
var yl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, gl = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, HT = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, GT = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, nd = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 96 / 6, in: 96, Q: 96 / (2.54 * 40), px: 1 }, KT = Object.keys(nd), nr = "NaN";
function XT(e6, t) {
  return e6 * nd[t];
}
var Qn = (function() {
  function e6(t, r) {
    WT(this, e6), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !HT.test(r) && (this.num = NaN, this.unit = ""), KT.includes(r) && (this.num = XT(t, r), this.unit = "px");
  }
  return UT(e6, [{ key: "add", value: function(r) {
    return this.unit !== r.unit ? new e6(NaN, "") : new e6(this.num + r.num, this.unit);
  } }, { key: "subtract", value: function(r) {
    return this.unit !== r.unit ? new e6(NaN, "") : new e6(this.num - r.num, this.unit);
  } }, { key: "multiply", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e6(NaN, "") : new e6(this.num * r.num, this.unit || r.unit);
  } }, { key: "divide", value: function(r) {
    return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e6(NaN, "") : new e6(this.num / r.num, this.unit || r.unit);
  } }, { key: "toString", value: function() {
    return "".concat(this.num).concat(this.unit);
  } }, { key: "isNaN", value: function() {
    return Number.isNaN(this.num);
  } }], [{ key: "parse", value: function(r) {
    var n, i = (n = GT.exec(r)) !== null && n !== void 0 ? n : [], a = _i(i, 3), o = a[1], u = a[2];
    return new e6(parseFloat(o), u != null ? u : "");
  } }]);
})();
function id(e6) {
  if (e6.includes(nr)) return nr;
  for (var t = e6; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = yl.exec(t)) !== null && r !== void 0 ? r : [], i = _i(n, 4), a = i[1], o = i[2], u = i[3], c = Qn.parse(a != null ? a : ""), s = Qn.parse(u != null ? u : ""), f = o === "*" ? c.multiply(s) : c.divide(s);
    if (f.isNaN()) return nr;
    t = t.replace(yl, f.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var l, p = (l = gl.exec(t)) !== null && l !== void 0 ? l : [], h = _i(p, 4), d = h[1], v = h[2], y = h[3], x = Qn.parse(d != null ? d : ""), w = Qn.parse(y != null ? y : ""), b = v === "+" ? x.add(w) : x.subtract(w);
    if (b.isNaN()) return nr;
    t = t.replace(gl, b.toString());
  }
  return t;
}
var ml = /\(([^()]*)\)/;
function VT(e6) {
  for (var t = e6; t.includes("("); ) {
    var r = ml.exec(t), n = _i(r, 2), i = n[1];
    t = t.replace(ml, id(i));
  }
  return t;
}
function YT(e6) {
  var t = e6.replace(/\s+/g, "");
  return t = VT(t), t = id(t), t;
}
function ZT(e6) {
  try {
    return YT(e6);
  } catch (e7) {
    return nr;
  }
}
function co(e6) {
  var t = ZT(e6.slice(5, -1));
  return t === nr ? "" : t;
}
var JT = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], QT = ["dx", "dy", "angle", "className", "breakAll"];
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Jo.apply(this, arguments);
}
function bl(e6, t) {
  if (e6 == null) return {};
  var r = eE(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function eE(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function xl(e6, t) {
  return iE(e6) || nE(e6, t) || rE(e6, t) || tE();
}
function tE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rE(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return wl(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wl(e6, t);
  }
}
function wl(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function nE(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t === 0) {
        if (Object(r) !== r) return;
        c = false;
      } else for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function iE(e6) {
  if (Array.isArray(e6)) return e6;
}
var ad = /[ \f\n\r\t\v\u2028\u2029]+/, od = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Z(r) || (n ? a = r.toString().split("") : a = r.toString().split(ad));
    var o = a.map(function(c) {
      return { word: c, width: Qr(c, i).width };
    }), u = n ? 0 : Qr("\xA0", i).width;
    return { wordsWithComputedWidth: o, spaceWidth: u };
  } catch (e6) {
    return null;
  }
}, aE = function(t, r, n, i, a) {
  var o = t.maxLines, u = t.children, c = t.style, s = t.breakAll, f = F(o), l = u, p = function() {
    var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return M.reduce(function(N, k) {
      var B = k.word, L = k.width, q = N[N.length - 1];
      if (q && (i == null || a || q.width + L + n < Number(i))) q.words.push(B), q.width += L + n;
      else {
        var G = { words: [B], width: L };
        N.push(G);
      }
      return N;
    }, []);
  }, h = p(r), d = function(M) {
    return M.reduce(function(N, k) {
      return N.width > k.width ? N : k;
    });
  };
  if (!f) return h;
  for (var v = "\u2026", y = function(M) {
    var N = l.slice(0, M), k = od({ breakAll: s, style: c, children: N + v }).wordsWithComputedWidth, B = p(k), L = B.length > o || d(B).width > Number(i);
    return [L, B];
  }, x = 0, w = l.length - 1, b = 0, S; x <= w && b <= l.length - 1; ) {
    var g = Math.floor((x + w) / 2), m = g - 1, O = y(m), _ = xl(O, 2), A = _[0], j = _[1], P = y(g), T = xl(P, 1), I = T[0];
    if (!A && !I && (x = g + 1), A && I && (w = g - 1), !A && I) {
      S = j;
      break;
    }
    b++;
  }
  return S || h;
}, Ol = function(t) {
  var r = Z(t) ? [] : t.toString().split(ad);
  return [{ words: r }];
}, oE = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, o = t.breakAll, u = t.maxLines;
  if ((r || n) && !St.isSsr) {
    var c, s, f = od({ breakAll: o, children: i, style: a });
    if (f) {
      var l = f.wordsWithComputedWidth, p = f.spaceWidth;
      c = l, s = p;
    } else return Ol(i);
    return aE({ breakAll: o, children: i, maxLines: u, style: a }, c, s, r, n);
  }
  return Ol(i);
}, Sl = "#808080", Ai = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.lineHeight, u = o === void 0 ? "1em" : o, c = t.capHeight, s = c === void 0 ? "0.71em" : c, f = t.scaleToFit, l = f === void 0 ? false : f, p = t.textAnchor, h = p === void 0 ? "start" : p, d = t.verticalAnchor, v = d === void 0 ? "end" : d, y = t.fill, x = y === void 0 ? Sl : y, w = bl(t, JT), b = R.useMemo(function() {
    return oE({ breakAll: w.breakAll, children: w.children, maxLines: w.maxLines, scaleToFit: l, style: w.style, width: w.width });
  }, [w.breakAll, w.children, w.maxLines, l, w.style, w.width]), S = w.dx, g = w.dy, m = w.angle, O = w.className, _ = w.breakAll, A = bl(w, QT);
  if (!we(n) || !we(a)) return null;
  var j = n + (F(S) ? S : 0), P = a + (F(g) ? g : 0), T;
  switch (v) {
    case "start":
      T = co("calc(".concat(s, ")"));
      break;
    case "middle":
      T = co("calc(".concat((b.length - 1) / 2, " * -").concat(u, " + (").concat(s, " / 2))"));
      break;
    default:
      T = co("calc(".concat(b.length - 1, " * -").concat(u, ")"));
      break;
  }
  var I = [];
  if (l) {
    var C = b[0].width, M = w.width;
    I.push("scale(".concat((F(M) ? M / C : 1) / C, ")"));
  }
  return m && I.push("rotate(".concat(m, ", ").concat(j, ", ").concat(P, ")")), I.length && (A.transform = I.join(" ")), $.createElement("text", Jo({}, re(A, true), { x: j, y: P, className: ee("recharts-text", O), textAnchor: h, fill: x.includes("url") ? Sl : x }), b.map(function(N, k) {
    var B = N.words.join(_ ? "" : " ");
    return $.createElement("tspan", { x: j, dy: k === 0 ? T : u, key: "".concat(B, "-").concat(k) }, B);
  }));
};
function _t(e6, t) {
  return e6 == null || t == null ? NaN : e6 < t ? -1 : e6 > t ? 1 : e6 >= t ? 0 : NaN;
}
function uE(e6, t) {
  return e6 == null || t == null ? NaN : t < e6 ? -1 : t > e6 ? 1 : t >= e6 ? 0 : NaN;
}
function bc(e6) {
  let t, r, n;
  e6.length !== 2 ? (t = _t, r = (u, c) => _t(e6(u), c), n = (u, c) => e6(u) - c) : (t = e6 === _t || e6 === uE ? e6 : cE, r = e6, n = e6);
  function i(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f;
      do {
        const l = s + f >>> 1;
        r(u[l], c) < 0 ? s = l + 1 : f = l;
      } while (s < f);
    }
    return s;
  }
  function a(u, c, s = 0, f = u.length) {
    if (s < f) {
      if (t(c, c) !== 0) return f;
      do {
        const l = s + f >>> 1;
        r(u[l], c) <= 0 ? s = l + 1 : f = l;
      } while (s < f);
    }
    return s;
  }
  function o(u, c, s = 0, f = u.length) {
    const l = i(u, c, s, f - 1);
    return l > s && n(u[l - 1], c) > -n(u[l], c) ? l - 1 : l;
  }
  return { left: i, center: o, right: a };
}
function cE() {
  return 0;
}
function ud(e6) {
  return e6 === null ? NaN : +e6;
}
function* sE(e6, t) {
  for (let r of e6) r != null && (r = +r) >= r && (yield r);
}
const lE = bc(_t), Un = lE.right;
bc(ud).center;
class _l extends Map {
  constructor(t, r = hE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(Al(this, t));
  }
  has(t) {
    return super.has(Al(this, t));
  }
  set(t, r) {
    return super.set(fE(this, t), r);
  }
  delete(t) {
    return super.delete(pE(this, t));
  }
}
function Al({ _intern: e6, _key: t }, r) {
  const n = t(r);
  return e6.has(n) ? e6.get(n) : r;
}
function fE({ _intern: e6, _key: t }, r) {
  const n = t(r);
  return e6.has(n) ? e6.get(n) : (e6.set(n, r), r);
}
function pE({ _intern: e6, _key: t }, r) {
  const n = t(r);
  return e6.has(n) && (r = e6.get(n), e6.delete(n)), r;
}
function hE(e6) {
  return e6 !== null && typeof e6 == "object" ? e6.valueOf() : e6;
}
function dE(e6 = _t) {
  if (e6 === _t) return cd;
  if (typeof e6 != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e6(t, r);
    return n || n === 0 ? n : (e6(r, r) === 0) - (e6(t, t) === 0);
  };
}
function cd(e6, t) {
  return (e6 == null || !(e6 >= e6)) - (t == null || !(t >= t)) || (e6 < t ? -1 : e6 > t ? 1 : 0);
}
const vE = Math.sqrt(50), yE = Math.sqrt(10), gE = Math.sqrt(2);
function Pi(e6, t, r) {
  const n = (t - e6) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), o = a >= vE ? 10 : a >= yE ? 5 : a >= gE ? 2 : 1;
  let u, c, s;
  return i < 0 ? (s = Math.pow(10, -i) / o, u = Math.round(e6 * s), c = Math.round(t * s), u / s < e6 && ++u, c / s > t && --c, s = -s) : (s = Math.pow(10, i) * o, u = Math.round(e6 / s), c = Math.round(t / s), u * s < e6 && ++u, c * s > t && --c), c < u && 0.5 <= r && r < 2 ? Pi(e6, t, r * 2) : [u, c, s];
}
function Qo(e6, t, r) {
  if (t = +t, e6 = +e6, r = +r, !(r > 0)) return [];
  if (e6 === t) return [e6];
  const n = t < e6, [i, a, o] = n ? Pi(t, e6, r) : Pi(e6, t, r);
  if (!(a >= i)) return [];
  const u = a - i + 1, c = new Array(u);
  if (n) if (o < 0) for (let s = 0; s < u; ++s) c[s] = (a - s) / -o;
  else for (let s = 0; s < u; ++s) c[s] = (a - s) * o;
  else if (o < 0) for (let s = 0; s < u; ++s) c[s] = (i + s) / -o;
  else for (let s = 0; s < u; ++s) c[s] = (i + s) * o;
  return c;
}
function eu(e6, t, r) {
  return t = +t, e6 = +e6, r = +r, Pi(e6, t, r)[2];
}
function tu(e6, t, r) {
  t = +t, e6 = +e6, r = +r;
  const n = t < e6, i = n ? eu(t, e6, r) : eu(e6, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Pl(e6, t) {
  let r;
  for (const n of e6) n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function $l(e6, t) {
  let r;
  for (const n of e6) n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function sd(e6, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e6.length - 1, n)), !(r <= t && t <= n)) return e6;
  for (i = i === void 0 ? cd : dE(i); n > r; ) {
    if (n - r > 600) {
      const c = n - r + 1, s = t - r + 1, f = Math.log(c), l = 0.5 * Math.exp(2 * f / 3), p = 0.5 * Math.sqrt(f * l * (c - l) / c) * (s - c / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - s * l / c + p)), d = Math.min(n, Math.floor(t + (c - s) * l / c + p));
      sd(e6, t, h, d, i);
    }
    const a = e6[t];
    let o = r, u = n;
    for (qr(e6, r, t), i(e6[n], a) > 0 && qr(e6, r, n); o < u; ) {
      for (qr(e6, o, u), ++o, --u; i(e6[o], a) < 0; ) ++o;
      for (; i(e6[u], a) > 0; ) --u;
    }
    i(e6[r], a) === 0 ? qr(e6, r, u) : (++u, qr(e6, u, n)), u <= t && (r = u + 1), t <= u && (n = u - 1);
  }
  return e6;
}
function qr(e6, t, r) {
  const n = e6[t];
  e6[t] = e6[r], e6[r] = n;
}
function mE(e6, t, r) {
  if (e6 = Float64Array.from(sE(e6)), !(!(n = e6.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return $l(e6);
    if (t >= 1) return Pl(e6);
    var n, i = (n - 1) * t, a = Math.floor(i), o = Pl(sd(e6, a).subarray(0, a + 1)), u = $l(e6.subarray(a + 1));
    return o + (u - o) * (i - a);
  }
}
function bE(e6, t, r = ud) {
  if (!(!(n = e6.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e6[0], 0, e6);
    if (t >= 1) return +r(e6[n - 1], n - 1, e6);
    var n, i = (n - 1) * t, a = Math.floor(i), o = +r(e6[a], a, e6), u = +r(e6[a + 1], a + 1, e6);
    return o + (u - o) * (i - a);
  }
}
function xE(e6, t, r) {
  e6 = +e6, t = +t, r = (i = arguments.length) < 2 ? (t = e6, e6 = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e6) / r)) | 0, a = new Array(i); ++n < i; ) a[n] = e6 + n * r;
  return a;
}
function Ge(e6, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e6);
      break;
    default:
      this.range(t).domain(e6);
      break;
  }
  return this;
}
function mt(e6, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e6 == "function" ? this.interpolator(e6) : this.range(e6);
      break;
    }
    default: {
      this.domain(e6), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const ru = /* @__PURE__ */ Symbol("implicit");
function xc() {
  var e6 = new _l(), t = [], r = [], n = ru;
  function i(a) {
    let o = e6.get(a);
    if (o === void 0) {
      if (n !== ru) return n;
      e6.set(a, o = t.push(a) - 1);
    }
    return r[o % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e6 = new _l();
    for (const o of a) e6.has(o) || e6.set(o, t.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return xc(t, r).unknown(n);
  }, Ge.apply(i, arguments), i;
}
function fn() {
  var e6 = xc().unknown(void 0), t = e6.domain, r = e6.range, n = 0, i = 1, a, o, u = false, c = 0, s = 0, f = 0.5;
  delete e6.unknown;
  function l() {
    var p = t().length, h = i < n, d = h ? i : n, v = h ? n : i;
    a = (v - d) / Math.max(1, p - c + s * 2), u && (a = Math.floor(a)), d += (v - d - a * (p - c)) * f, o = a * (1 - c), u && (d = Math.round(d), o = Math.round(o));
    var y = xE(p).map(function(x) {
      return d + a * x;
    });
    return r(h ? y.reverse() : y);
  }
  return e6.domain = function(p) {
    return arguments.length ? (t(p), l()) : t();
  }, e6.range = function(p) {
    return arguments.length ? ([n, i] = p, n = +n, i = +i, l()) : [n, i];
  }, e6.rangeRound = function(p) {
    return [n, i] = p, n = +n, i = +i, u = true, l();
  }, e6.bandwidth = function() {
    return o;
  }, e6.step = function() {
    return a;
  }, e6.round = function(p) {
    return arguments.length ? (u = !!p, l()) : u;
  }, e6.padding = function(p) {
    return arguments.length ? (c = Math.min(1, s = +p), l()) : c;
  }, e6.paddingInner = function(p) {
    return arguments.length ? (c = Math.min(1, p), l()) : c;
  }, e6.paddingOuter = function(p) {
    return arguments.length ? (s = +p, l()) : s;
  }, e6.align = function(p) {
    return arguments.length ? (f = Math.max(0, Math.min(1, p)), l()) : f;
  }, e6.copy = function() {
    return fn(t(), [n, i]).round(u).paddingInner(c).paddingOuter(s).align(f);
  }, Ge.apply(l(), arguments);
}
function ld(e6) {
  var t = e6.copy;
  return e6.padding = e6.paddingOuter, delete e6.paddingInner, delete e6.paddingOuter, e6.copy = function() {
    return ld(t());
  }, e6;
}
function en() {
  return ld(fn.apply(null, arguments).paddingInner(1));
}
function wc(e6, t, r) {
  e6.prototype = t.prototype = r, r.constructor = e6;
}
function fd(e6, t) {
  var r = Object.create(e6.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function zn() {
}
var pn = 0.7, $i = 1 / pn, cr = "\\s*([+-]?\\d+)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", wE = /^#([0-9a-f]{3,8})$/, OE = new RegExp(`^rgb\\(${cr},${cr},${cr}\\)$`), SE = new RegExp(`^rgb\\(${rt},${rt},${rt}\\)$`), _E = new RegExp(`^rgba\\(${cr},${cr},${cr},${hn}\\)$`), AE = new RegExp(`^rgba\\(${rt},${rt},${rt},${hn}\\)$`), PE = new RegExp(`^hsl\\(${hn},${rt},${rt}\\)$`), $E = new RegExp(`^hsla\\(${hn},${rt},${rt},${hn}\\)$`), Tl = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
wc(zn, dn, { copy(e6) {
  return Object.assign(new this.constructor(), this, e6);
}, displayable() {
  return this.rgb().displayable();
}, hex: El, formatHex: El, formatHex8: TE, formatHsl: EE, formatRgb: jl, toString: jl });
function El() {
  return this.rgb().formatHex();
}
function TE() {
  return this.rgb().formatHex8();
}
function EE() {
  return pd(this).formatHsl();
}
function jl() {
  return this.rgb().formatRgb();
}
function dn(e6) {
  var t, r;
  return e6 = (e6 + "").trim().toLowerCase(), (t = wE.exec(e6)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ml(t) : r === 3 ? new Ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? ei(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? ei(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = OE.exec(e6)) ? new Ie(t[1], t[2], t[3], 1) : (t = SE.exec(e6)) ? new Ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _E.exec(e6)) ? ei(t[1], t[2], t[3], t[4]) : (t = AE.exec(e6)) ? ei(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = PE.exec(e6)) ? Nl(t[1], t[2] / 100, t[3] / 100, 1) : (t = $E.exec(e6)) ? Nl(t[1], t[2] / 100, t[3] / 100, t[4]) : Tl.hasOwnProperty(e6) ? Ml(Tl[e6]) : e6 === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function Ml(e6) {
  return new Ie(e6 >> 16 & 255, e6 >> 8 & 255, e6 & 255, 1);
}
function ei(e6, t, r, n) {
  return n <= 0 && (e6 = t = r = NaN), new Ie(e6, t, r, n);
}
function jE(e6) {
  return e6 instanceof zn || (e6 = dn(e6)), e6 ? (e6 = e6.rgb(), new Ie(e6.r, e6.g, e6.b, e6.opacity)) : new Ie();
}
function nu(e6, t, r, n) {
  return arguments.length === 1 ? jE(e6) : new Ie(e6, t, r, n != null ? n : 1);
}
function Ie(e6, t, r, n) {
  this.r = +e6, this.g = +t, this.b = +r, this.opacity = +n;
}
wc(Ie, nu, fd(zn, { brighter(e6) {
  return e6 = e6 == null ? $i : Math.pow($i, e6), new Ie(this.r * e6, this.g * e6, this.b * e6, this.opacity);
}, darker(e6) {
  return e6 = e6 == null ? pn : Math.pow(pn, e6), new Ie(this.r * e6, this.g * e6, this.b * e6, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new Ie(zt(this.r), zt(this.g), zt(this.b), Ti(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: Cl, formatHex: Cl, formatHex8: ME, formatRgb: Il, toString: Il }));
function Cl() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}`;
}
function ME() {
  return `#${Lt(this.r)}${Lt(this.g)}${Lt(this.b)}${Lt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Il() {
  const e6 = Ti(this.opacity);
  return `${e6 === 1 ? "rgb(" : "rgba("}${zt(this.r)}, ${zt(this.g)}, ${zt(this.b)}${e6 === 1 ? ")" : `, ${e6})`}`;
}
function Ti(e6) {
  return isNaN(e6) ? 1 : Math.max(0, Math.min(1, e6));
}
function zt(e6) {
  return Math.max(0, Math.min(255, Math.round(e6) || 0));
}
function Lt(e6) {
  return e6 = zt(e6), (e6 < 16 ? "0" : "") + e6.toString(16);
}
function Nl(e6, t, r, n) {
  return n <= 0 ? e6 = t = r = NaN : r <= 0 || r >= 1 ? e6 = t = NaN : t <= 0 && (e6 = NaN), new Ve(e6, t, r, n);
}
function pd(e6) {
  if (e6 instanceof Ve) return new Ve(e6.h, e6.s, e6.l, e6.opacity);
  if (e6 instanceof zn || (e6 = dn(e6)), !e6) return new Ve();
  if (e6 instanceof Ve) return e6;
  e6 = e6.rgb();
  var t = e6.r / 255, r = e6.g / 255, n = e6.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = NaN, u = a - i, c = (a + i) / 2;
  return u ? (t === a ? o = (r - n) / u + (r < n) * 6 : r === a ? o = (n - t) / u + 2 : o = (t - r) / u + 4, u /= c < 0.5 ? a + i : 2 - a - i, o *= 60) : u = c > 0 && c < 1 ? 0 : o, new Ve(o, u, c, e6.opacity);
}
function CE(e6, t, r, n) {
  return arguments.length === 1 ? pd(e6) : new Ve(e6, t, r, n != null ? n : 1);
}
function Ve(e6, t, r, n) {
  this.h = +e6, this.s = +t, this.l = +r, this.opacity = +n;
}
wc(Ve, CE, fd(zn, { brighter(e6) {
  return e6 = e6 == null ? $i : Math.pow($i, e6), new Ve(this.h, this.s, this.l * e6, this.opacity);
}, darker(e6) {
  return e6 = e6 == null ? pn : Math.pow(pn, e6), new Ve(this.h, this.s, this.l * e6, this.opacity);
}, rgb() {
  var e6 = this.h % 360 + (this.h < 0) * 360, t = isNaN(e6) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
  return new Ie(so(e6 >= 240 ? e6 - 240 : e6 + 120, i, n), so(e6, i, n), so(e6 < 120 ? e6 + 240 : e6 - 120, i, n), this.opacity);
}, clamp() {
  return new Ve(Dl(this.h), ti(this.s), ti(this.l), Ti(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const e6 = Ti(this.opacity);
  return `${e6 === 1 ? "hsl(" : "hsla("}${Dl(this.h)}, ${ti(this.s) * 100}%, ${ti(this.l) * 100}%${e6 === 1 ? ")" : `, ${e6})`}`;
} }));
function Dl(e6) {
  return e6 = (e6 || 0) % 360, e6 < 0 ? e6 + 360 : e6;
}
function ti(e6) {
  return Math.max(0, Math.min(1, e6 || 0));
}
function so(e6, t, r) {
  return (e6 < 60 ? t + (r - t) * e6 / 60 : e6 < 180 ? r : e6 < 240 ? t + (r - t) * (240 - e6) / 60 : t) * 255;
}
const Oc = (e6) => () => e6;
function IE(e6, t) {
  return function(r) {
    return e6 + r * t;
  };
}
function NE(e6, t, r) {
  return e6 = Math.pow(e6, r), t = Math.pow(t, r) - e6, r = 1 / r, function(n) {
    return Math.pow(e6 + n * t, r);
  };
}
function DE(e6) {
  return (e6 = +e6) == 1 ? hd : function(t, r) {
    return r - t ? NE(t, r, e6) : Oc(isNaN(t) ? r : t);
  };
}
function hd(e6, t) {
  var r = t - e6;
  return r ? IE(e6, r) : Oc(isNaN(e6) ? t : e6);
}
const kl = (function e3(t) {
  var r = DE(t);
  function n(i, a) {
    var o = r((i = nu(i)).r, (a = nu(a)).r), u = r(i.g, a.g), c = r(i.b, a.b), s = hd(i.opacity, a.opacity);
    return function(f) {
      return i.r = o(f), i.g = u(f), i.b = c(f), i.opacity = s(f), i + "";
    };
  }
  return n.gamma = e3, n;
})(1);
function kE(e6, t) {
  t || (t = []);
  var r = e6 ? Math.min(t.length, e6.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e6[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function RE(e6) {
  return ArrayBuffer.isView(e6) && !(e6 instanceof DataView);
}
function BE(e6, t) {
  var r = t ? t.length : 0, n = e6 ? Math.min(r, e6.length) : 0, i = new Array(n), a = new Array(r), o;
  for (o = 0; o < n; ++o) i[o] = Lr(e6[o], t[o]);
  for (; o < r; ++o) a[o] = t[o];
  return function(u) {
    for (o = 0; o < n; ++o) a[o] = i[o](u);
    return a;
  };
}
function LE(e6, t) {
  var r = /* @__PURE__ */ new Date();
  return e6 = +e6, t = +t, function(n) {
    return r.setTime(e6 * (1 - n) + t * n), r;
  };
}
function Ei(e6, t) {
  return e6 = +e6, t = +t, function(r) {
    return e6 * (1 - r) + t * r;
  };
}
function FE(e6, t) {
  var r = {}, n = {}, i;
  (e6 === null || typeof e6 != "object") && (e6 = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t) i in e6 ? r[i] = Lr(e6[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var iu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, lo = new RegExp(iu.source, "g");
function WE(e6) {
  return function() {
    return e6;
  };
}
function UE(e6) {
  return function(t) {
    return e6(t) + "";
  };
}
function zE(e6, t) {
  var r = iu.lastIndex = lo.lastIndex = 0, n, i, a, o = -1, u = [], c = [];
  for (e6 = e6 + "", t = t + ""; (n = iu.exec(e6)) && (i = lo.exec(t)); ) (a = i.index) > r && (a = t.slice(r, a), u[o] ? u[o] += a : u[++o] = a), (n = n[0]) === (i = i[0]) ? u[o] ? u[o] += i : u[++o] = i : (u[++o] = null, c.push({ i: o, x: Ei(n, i) })), r = lo.lastIndex;
  return r < t.length && (a = t.slice(r), u[o] ? u[o] += a : u[++o] = a), u.length < 2 ? c[0] ? UE(c[0].x) : WE(t) : (t = c.length, function(s) {
    for (var f = 0, l; f < t; ++f) u[(l = c[f]).i] = l.x(s);
    return u.join("");
  });
}
function Lr(e6, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Oc(t) : (r === "number" ? Ei : r === "string" ? (n = dn(t)) ? (t = n, kl) : zE : t instanceof dn ? kl : t instanceof Date ? LE : RE(t) ? kE : Array.isArray(t) ? BE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? FE : Ei)(e6, t);
}
function Sc(e6, t) {
  return e6 = +e6, t = +t, function(r) {
    return Math.round(e6 * (1 - r) + t * r);
  };
}
function qE(e6, t) {
  t === void 0 && (t = e6, e6 = Lr);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e6(i, i = t[++r]);
  return function(o) {
    var u = Math.max(0, Math.min(n - 1, Math.floor(o *= n)));
    return a[u](o - u);
  };
}
function HE(e6) {
  return function() {
    return e6;
  };
}
function ji(e6) {
  return +e6;
}
var Rl = [0, 1];
function je(e6) {
  return e6;
}
function au(e6, t) {
  return (t -= e6 = +e6) ? function(r) {
    return (r - e6) / t;
  } : HE(isNaN(t) ? NaN : 0.5);
}
function GE(e6, t) {
  var r;
  return e6 > t && (r = e6, e6 = t, t = r), function(n) {
    return Math.max(e6, Math.min(t, n));
  };
}
function KE(e6, t, r) {
  var n = e6[0], i = e6[1], a = t[0], o = t[1];
  return i < n ? (n = au(i, n), a = r(o, a)) : (n = au(n, i), a = r(a, o)), function(u) {
    return a(n(u));
  };
}
function XE(e6, t, r) {
  var n = Math.min(e6.length, t.length) - 1, i = new Array(n), a = new Array(n), o = -1;
  for (e6[n] < e6[0] && (e6 = e6.slice().reverse(), t = t.slice().reverse()); ++o < n; ) i[o] = au(e6[o], e6[o + 1]), a[o] = r(t[o], t[o + 1]);
  return function(u) {
    var c = Un(e6, u, 1, n) - 1;
    return a[c](i[c](u));
  };
}
function qn(e6, t) {
  return t.domain(e6.domain()).range(e6.range()).interpolate(e6.interpolate()).clamp(e6.clamp()).unknown(e6.unknown());
}
function ja() {
  var e6 = Rl, t = Rl, r = Lr, n, i, a, o = je, u, c, s;
  function f() {
    var p = Math.min(e6.length, t.length);
    return o !== je && (o = GE(e6[0], e6[p - 1])), u = p > 2 ? XE : KE, c = s = null, l;
  }
  function l(p) {
    return p == null || isNaN(p = +p) ? a : (c || (c = u(e6.map(n), t, r)))(n(o(p)));
  }
  return l.invert = function(p) {
    return o(i((s || (s = u(t, e6.map(n), Ei)))(p)));
  }, l.domain = function(p) {
    return arguments.length ? (e6 = Array.from(p, ji), f()) : e6.slice();
  }, l.range = function(p) {
    return arguments.length ? (t = Array.from(p), f()) : t.slice();
  }, l.rangeRound = function(p) {
    return t = Array.from(p), r = Sc, f();
  }, l.clamp = function(p) {
    return arguments.length ? (o = p ? true : je, f()) : o !== je;
  }, l.interpolate = function(p) {
    return arguments.length ? (r = p, f()) : r;
  }, l.unknown = function(p) {
    return arguments.length ? (a = p, l) : a;
  }, function(p, h) {
    return n = p, i = h, f();
  };
}
function _c() {
  return ja()(je, je);
}
function VE(e6) {
  return Math.abs(e6 = Math.round(e6)) >= 1e21 ? e6.toLocaleString("en").replace(/,/g, "") : e6.toString(10);
}
function Mi(e6, t) {
  if ((r = (e6 = t ? e6.toExponential(t - 1) : e6.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e6.slice(0, r);
  return [n.length > 1 ? n[0] + n.slice(2) : n, +e6.slice(r + 1)];
}
function vr(e6) {
  return e6 = Mi(Math.abs(e6)), e6 ? e6[1] : NaN;
}
function YE(e6, t) {
  return function(r, n) {
    for (var i = r.length, a = [], o = 0, u = e6[0], c = 0; i > 0 && u > 0 && (c + u + 1 > n && (u = Math.max(1, n - c)), a.push(r.substring(i -= u, i + u)), !((c += u + 1) > n)); ) u = e6[o = (o + 1) % e6.length];
    return a.reverse().join(t);
  };
}
function ZE(e6) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e6[+r];
    });
  };
}
var JE = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function vn(e6) {
  if (!(t = JE.exec(e6))) throw new Error("invalid format: " + e6);
  var t;
  return new Ac({ fill: t[1], align: t[2], sign: t[3], symbol: t[4], zero: t[5], width: t[6], comma: t[7], precision: t[8] && t[8].slice(1), trim: t[9], type: t[10] });
}
vn.prototype = Ac.prototype;
function Ac(e6) {
  this.fill = e6.fill === void 0 ? " " : e6.fill + "", this.align = e6.align === void 0 ? ">" : e6.align + "", this.sign = e6.sign === void 0 ? "-" : e6.sign + "", this.symbol = e6.symbol === void 0 ? "" : e6.symbol + "", this.zero = !!e6.zero, this.width = e6.width === void 0 ? void 0 : +e6.width, this.comma = !!e6.comma, this.precision = e6.precision === void 0 ? void 0 : +e6.precision, this.trim = !!e6.trim, this.type = e6.type === void 0 ? "" : e6.type + "";
}
Ac.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function QE(e6) {
  e: for (var t = e6.length, r = 1, n = -1, i; r < t; ++r) switch (e6[r]) {
    case ".":
      n = i = r;
      break;
    case "0":
      n === 0 && (n = r), i = r;
      break;
    default:
      if (!+e6[r]) break e;
      n > 0 && (n = 0);
      break;
  }
  return n > 0 ? e6.slice(0, n) + e6.slice(i + 1) : e6;
}
var dd;
function ej(e6, t) {
  var r = Mi(e6, t);
  if (!r) return e6 + "";
  var n = r[0], i = r[1], a = i - (dd = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = n.length;
  return a === o ? n : a > o ? n + new Array(a - o + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Mi(e6, Math.max(0, t + a - 1))[0];
}
function Bl(e6, t) {
  var r = Mi(e6, t);
  if (!r) return e6 + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Ll = { "%": (e6, t) => (e6 * 100).toFixed(t), b: (e6) => Math.round(e6).toString(2), c: (e6) => e6 + "", d: VE, e: (e6, t) => e6.toExponential(t), f: (e6, t) => e6.toFixed(t), g: (e6, t) => e6.toPrecision(t), o: (e6) => Math.round(e6).toString(8), p: (e6, t) => Bl(e6 * 100, t), r: Bl, s: ej, X: (e6) => Math.round(e6).toString(16).toUpperCase(), x: (e6) => Math.round(e6).toString(16) };
function Fl(e6) {
  return e6;
}
var Wl = Array.prototype.map, Ul = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function tj(e6) {
  var t = e6.grouping === void 0 || e6.thousands === void 0 ? Fl : YE(Wl.call(e6.grouping, Number), e6.thousands + ""), r = e6.currency === void 0 ? "" : e6.currency[0] + "", n = e6.currency === void 0 ? "" : e6.currency[1] + "", i = e6.decimal === void 0 ? "." : e6.decimal + "", a = e6.numerals === void 0 ? Fl : ZE(Wl.call(e6.numerals, String)), o = e6.percent === void 0 ? "%" : e6.percent + "", u = e6.minus === void 0 ? "\u2212" : e6.minus + "", c = e6.nan === void 0 ? "NaN" : e6.nan + "";
  function s(l) {
    l = vn(l);
    var p = l.fill, h = l.align, d = l.sign, v = l.symbol, y = l.zero, x = l.width, w = l.comma, b = l.precision, S = l.trim, g = l.type;
    g === "n" ? (w = true, g = "g") : Ll[g] || (b === void 0 && (b = 12), S = true, g = "g"), (y || p === "0" && h === "=") && (y = true, p = "0", h = "=");
    var m = v === "$" ? r : v === "#" && /[boxX]/.test(g) ? "0" + g.toLowerCase() : "", O = v === "$" ? n : /[%p]/.test(g) ? o : "", _ = Ll[g], A = /[defgprs%]/.test(g);
    b = b === void 0 ? 6 : /[gprs]/.test(g) ? Math.max(1, Math.min(21, b)) : Math.max(0, Math.min(20, b));
    function j(P) {
      var T = m, I = O, C, M, N;
      if (g === "c") I = _(P) + I, P = "";
      else {
        P = +P;
        var k = P < 0 || 1 / P < 0;
        if (P = isNaN(P) ? c : _(Math.abs(P), b), S && (P = QE(P)), k && +P == 0 && d !== "+" && (k = false), T = (k ? d === "(" ? d : u : d === "-" || d === "(" ? "" : d) + T, I = (g === "s" ? Ul[8 + dd / 3] : "") + I + (k && d === "(" ? ")" : ""), A) {
          for (C = -1, M = P.length; ++C < M; ) if (N = P.charCodeAt(C), 48 > N || N > 57) {
            I = (N === 46 ? i + P.slice(C + 1) : P.slice(C)) + I, P = P.slice(0, C);
            break;
          }
        }
      }
      w && !y && (P = t(P, 1 / 0));
      var B = T.length + P.length + I.length, L = B < x ? new Array(x - B + 1).join(p) : "";
      switch (w && y && (P = t(L + P, L.length ? x - I.length : 1 / 0), L = ""), h) {
        case "<":
          P = T + P + I + L;
          break;
        case "=":
          P = T + L + P + I;
          break;
        case "^":
          P = L.slice(0, B = L.length >> 1) + T + P + I + L.slice(B);
          break;
        default:
          P = L + T + P + I;
          break;
      }
      return a(P);
    }
    return j.toString = function() {
      return l + "";
    }, j;
  }
  function f(l, p) {
    var h = s((l = vn(l), l.type = "f", l)), d = Math.max(-8, Math.min(8, Math.floor(vr(p) / 3))) * 3, v = Math.pow(10, -d), y = Ul[8 + d / 3];
    return function(x) {
      return h(v * x) + y;
    };
  }
  return { format: s, formatPrefix: f };
}
var ri, Pc, vd;
rj({ thousands: ",", grouping: [3], currency: ["$", ""] });
function rj(e6) {
  return ri = tj(e6), Pc = ri.format, vd = ri.formatPrefix, ri;
}
function nj(e6) {
  return Math.max(0, -vr(Math.abs(e6)));
}
function ij(e6, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vr(t) / 3))) * 3 - vr(Math.abs(e6)));
}
function aj(e6, t) {
  return e6 = Math.abs(e6), t = Math.abs(t) - e6, Math.max(0, vr(t) - vr(e6)) + 1;
}
function yd(e6, t, r, n) {
  var i = tu(e6, t, r), a;
  switch (n = vn(n != null ? n : ",f"), n.type) {
    case "s": {
      var o = Math.max(Math.abs(e6), Math.abs(t));
      return n.precision == null && !isNaN(a = ij(i, o)) && (n.precision = a), vd(n, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = aj(i, Math.max(Math.abs(e6), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = nj(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Pc(n);
}
function Tt(e6) {
  var t = e6.domain;
  return e6.ticks = function(r) {
    var n = t();
    return Qo(n[0], n[n.length - 1], r != null ? r : 10);
  }, e6.tickFormat = function(r, n) {
    var i = t();
    return yd(i[0], i[i.length - 1], r != null ? r : 10, n);
  }, e6.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, o = n[i], u = n[a], c, s, f = 10;
    for (u < o && (s = o, o = u, u = s, s = i, i = a, a = s); f-- > 0; ) {
      if (s = eu(o, u, r), s === c) return n[i] = o, n[a] = u, t(n);
      if (s > 0) o = Math.floor(o / s) * s, u = Math.ceil(u / s) * s;
      else if (s < 0) o = Math.ceil(o * s) / s, u = Math.floor(u * s) / s;
      else break;
      c = s;
    }
    return e6;
  }, e6;
}
function Ci() {
  var e6 = _c();
  return e6.copy = function() {
    return qn(e6, Ci());
  }, Ge.apply(e6, arguments), Tt(e6);
}
function gd(e6) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e6 = Array.from(n, ji), r) : e6.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return gd(e6).unknown(t);
  }, e6 = arguments.length ? Array.from(e6, ji) : [0, 1], Tt(r);
}
function md(e6, t) {
  e6 = e6.slice();
  var r = 0, n = e6.length - 1, i = e6[r], a = e6[n], o;
  return a < i && (o = r, r = n, n = o, o = i, i = a, a = o), e6[r] = t.floor(i), e6[n] = t.ceil(a), e6;
}
function zl(e6) {
  return Math.log(e6);
}
function ql(e6) {
  return Math.exp(e6);
}
function oj(e6) {
  return -Math.log(-e6);
}
function uj(e6) {
  return -Math.exp(-e6);
}
function cj(e6) {
  return isFinite(e6) ? +("1e" + e6) : e6 < 0 ? 0 : e6;
}
function sj(e6) {
  return e6 === 10 ? cj : e6 === Math.E ? Math.exp : (t) => Math.pow(e6, t);
}
function lj(e6) {
  return e6 === Math.E ? Math.log : e6 === 10 && Math.log10 || e6 === 2 && Math.log2 || (e6 = Math.log(e6), (t) => Math.log(t) / e6);
}
function Hl(e6) {
  return (t, r) => -e6(-t, r);
}
function $c(e6) {
  const t = e6(zl, ql), r = t.domain;
  let n = 10, i, a;
  function o() {
    return i = lj(n), a = sj(n), r()[0] < 0 ? (i = Hl(i), a = Hl(a), e6(oj, uj)) : e6(zl, ql), t;
  }
  return t.base = function(u) {
    return arguments.length ? (n = +u, o()) : n;
  }, t.domain = function(u) {
    return arguments.length ? (r(u), o()) : r();
  }, t.ticks = (u) => {
    const c = r();
    let s = c[0], f = c[c.length - 1];
    const l = f < s;
    l && ([s, f] = [f, s]);
    let p = i(s), h = i(f), d, v;
    const y = u == null ? 10 : +u;
    let x = [];
    if (!(n % 1) && h - p < y) {
      if (p = Math.floor(p), h = Math.ceil(h), s > 0) {
        for (; p <= h; ++p) for (d = 1; d < n; ++d) if (v = p < 0 ? d / a(-p) : d * a(p), !(v < s)) {
          if (v > f) break;
          x.push(v);
        }
      } else for (; p <= h; ++p) for (d = n - 1; d >= 1; --d) if (v = p > 0 ? d / a(-p) : d * a(p), !(v < s)) {
        if (v > f) break;
        x.push(v);
      }
      x.length * 2 < y && (x = Qo(s, f, y));
    } else x = Qo(p, h, Math.min(h - p, y)).map(a);
    return l ? x.reverse() : x;
  }, t.tickFormat = (u, c) => {
    if (u == null && (u = 10), c == null && (c = n === 10 ? "s" : ","), typeof c != "function" && (!(n % 1) && (c = vn(c)).precision == null && (c.trim = true), c = Pc(c)), u === 1 / 0) return c;
    const s = Math.max(1, n * u / t.ticks().length);
    return (f) => {
      let l = f / a(Math.round(i(f)));
      return l * n < n - 0.5 && (l *= n), l <= s ? c(f) : "";
    };
  }, t.nice = () => r(md(r(), { floor: (u) => a(Math.floor(i(u))), ceil: (u) => a(Math.ceil(i(u))) })), t;
}
function bd() {
  const e6 = $c(ja()).domain([1, 10]);
  return e6.copy = () => qn(e6, bd()).base(e6.base()), Ge.apply(e6, arguments), e6;
}
function Gl(e6) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e6));
  };
}
function Kl(e6) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e6;
  };
}
function Tc(e6) {
  var t = 1, r = e6(Gl(t), Kl(t));
  return r.constant = function(n) {
    return arguments.length ? e6(Gl(t = +n), Kl(t)) : t;
  }, Tt(r);
}
function xd() {
  var e6 = Tc(ja());
  return e6.copy = function() {
    return qn(e6, xd()).constant(e6.constant());
  }, Ge.apply(e6, arguments);
}
function Xl(e6) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e6) : Math.pow(t, e6);
  };
}
function fj(e6) {
  return e6 < 0 ? -Math.sqrt(-e6) : Math.sqrt(e6);
}
function pj(e6) {
  return e6 < 0 ? -e6 * e6 : e6 * e6;
}
function Ec(e6) {
  var t = e6(je, je), r = 1;
  function n() {
    return r === 1 ? e6(je, je) : r === 0.5 ? e6(fj, pj) : e6(Xl(r), Xl(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Tt(t);
}
function jc() {
  var e6 = Ec(ja());
  return e6.copy = function() {
    return qn(e6, jc()).exponent(e6.exponent());
  }, Ge.apply(e6, arguments), e6;
}
function hj() {
  return jc.apply(null, arguments).exponent(0.5);
}
function Vl(e6) {
  return Math.sign(e6) * e6 * e6;
}
function dj(e6) {
  return Math.sign(e6) * Math.sqrt(Math.abs(e6));
}
function wd() {
  var e6 = _c(), t = [0, 1], r = false, n;
  function i(a) {
    var o = dj(e6(a));
    return isNaN(o) ? n : r ? Math.round(o) : o;
  }
  return i.invert = function(a) {
    return e6.invert(Vl(a));
  }, i.domain = function(a) {
    return arguments.length ? (e6.domain(a), i) : e6.domain();
  }, i.range = function(a) {
    return arguments.length ? (e6.range((t = Array.from(a, ji)).map(Vl)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(true);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e6.clamp(a), i) : e6.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return wd(e6.domain(), t).round(r).clamp(e6.clamp()).unknown(n);
  }, Ge.apply(i, arguments), Tt(i);
}
function Od() {
  var e6 = [], t = [], r = [], n;
  function i() {
    var o = 0, u = Math.max(1, t.length);
    for (r = new Array(u - 1); ++o < u; ) r[o - 1] = bE(e6, o / u);
    return a;
  }
  function a(o) {
    return o == null || isNaN(o = +o) ? n : t[Un(r, o)];
  }
  return a.invertExtent = function(o) {
    var u = t.indexOf(o);
    return u < 0 ? [NaN, NaN] : [u > 0 ? r[u - 1] : e6[0], u < r.length ? r[u] : e6[e6.length - 1]];
  }, a.domain = function(o) {
    if (!arguments.length) return e6.slice();
    e6 = [];
    for (let u of o) u != null && !isNaN(u = +u) && e6.push(u);
    return e6.sort(_t), i();
  }, a.range = function(o) {
    return arguments.length ? (t = Array.from(o), i()) : t.slice();
  }, a.unknown = function(o) {
    return arguments.length ? (n = o, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return Od().domain(e6).range(t).unknown(n);
  }, Ge.apply(a, arguments);
}
function Sd() {
  var e6 = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function o(c) {
    return c != null && c <= c ? i[Un(n, c, 0, r)] : a;
  }
  function u() {
    var c = -1;
    for (n = new Array(r); ++c < r; ) n[c] = ((c + 1) * t - (c - r) * e6) / (r + 1);
    return o;
  }
  return o.domain = function(c) {
    return arguments.length ? ([e6, t] = c, e6 = +e6, t = +t, u()) : [e6, t];
  }, o.range = function(c) {
    return arguments.length ? (r = (i = Array.from(c)).length - 1, u()) : i.slice();
  }, o.invertExtent = function(c) {
    var s = i.indexOf(c);
    return s < 0 ? [NaN, NaN] : s < 1 ? [e6, n[0]] : s >= r ? [n[r - 1], t] : [n[s - 1], n[s]];
  }, o.unknown = function(c) {
    return arguments.length && (a = c), o;
  }, o.thresholds = function() {
    return n.slice();
  }, o.copy = function() {
    return Sd().domain([e6, t]).range(i).unknown(a);
  }, Ge.apply(Tt(o), arguments);
}
function _d() {
  var e6 = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[Un(e6, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e6 = Array.from(a), n = Math.min(e6.length, t.length - 1), i) : e6.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e6.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var o = t.indexOf(a);
    return [e6[o - 1], e6[o]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return _d().domain(e6).range(t).unknown(r);
  }, Ge.apply(i, arguments);
}
const fo = /* @__PURE__ */ new Date(), po = /* @__PURE__ */ new Date();
function Oe(e6, t, r, n) {
  function i(a) {
    return e6(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e6(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e6(a = new Date(a - 1)), t(a, 1), e6(a), a), i.round = (a) => {
    const o = i(a), u = i.ceil(a);
    return a - o < u - a ? o : u;
  }, i.offset = (a, o) => (t(a = /* @__PURE__ */ new Date(+a), o == null ? 1 : Math.floor(o)), a), i.range = (a, o, u) => {
    const c = [];
    if (a = i.ceil(a), u = u == null ? 1 : Math.floor(u), !(a < o) || !(u > 0)) return c;
    let s;
    do
      c.push(s = /* @__PURE__ */ new Date(+a)), t(a, u), e6(a);
    while (s < a && a < o);
    return c;
  }, i.filter = (a) => Oe((o) => {
    if (o >= o) for (; e6(o), !a(o); ) o.setTime(o - 1);
  }, (o, u) => {
    if (o >= o) if (u < 0) for (; ++u <= 0; ) for (; t(o, -1), !a(o); ) ;
    else for (; --u >= 0; ) for (; t(o, 1), !a(o); ) ;
  }), r && (i.count = (a, o) => (fo.setTime(+a), po.setTime(+o), e6(fo), e6(po), Math.floor(r(fo, po))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (o) => n(o) % a === 0 : (o) => i.count(0, o) % a === 0) : i)), i;
}
const Ii = Oe(() => {
}, (e6, t) => {
  e6.setTime(+e6 + t);
}, (e6, t) => t - e6);
Ii.every = (e6) => (e6 = Math.floor(e6), !isFinite(e6) || !(e6 > 0) ? null : e6 > 1 ? Oe((t) => {
  t.setTime(Math.floor(t / e6) * e6);
}, (t, r) => {
  t.setTime(+t + r * e6);
}, (t, r) => (r - t) / e6) : Ii);
Ii.range;
const st = 1e3, Ue = st * 60, lt = Ue * 60, ht = lt * 24, Mc = ht * 7, Yl = ht * 30, ho = ht * 365, Ft = Oe((e6) => {
  e6.setTime(e6 - e6.getMilliseconds());
}, (e6, t) => {
  e6.setTime(+e6 + t * st);
}, (e6, t) => (t - e6) / st, (e6) => e6.getUTCSeconds());
Ft.range;
const Cc = Oe((e6) => {
  e6.setTime(e6 - e6.getMilliseconds() - e6.getSeconds() * st);
}, (e6, t) => {
  e6.setTime(+e6 + t * Ue);
}, (e6, t) => (t - e6) / Ue, (e6) => e6.getMinutes());
Cc.range;
const Ic = Oe((e6) => {
  e6.setUTCSeconds(0, 0);
}, (e6, t) => {
  e6.setTime(+e6 + t * Ue);
}, (e6, t) => (t - e6) / Ue, (e6) => e6.getUTCMinutes());
Ic.range;
const Nc = Oe((e6) => {
  e6.setTime(e6 - e6.getMilliseconds() - e6.getSeconds() * st - e6.getMinutes() * Ue);
}, (e6, t) => {
  e6.setTime(+e6 + t * lt);
}, (e6, t) => (t - e6) / lt, (e6) => e6.getHours());
Nc.range;
const Dc = Oe((e6) => {
  e6.setUTCMinutes(0, 0, 0);
}, (e6, t) => {
  e6.setTime(+e6 + t * lt);
}, (e6, t) => (t - e6) / lt, (e6) => e6.getUTCHours());
Dc.range;
const Hn = Oe((e6) => e6.setHours(0, 0, 0, 0), (e6, t) => e6.setDate(e6.getDate() + t), (e6, t) => (t - e6 - (t.getTimezoneOffset() - e6.getTimezoneOffset()) * Ue) / ht, (e6) => e6.getDate() - 1);
Hn.range;
const Ma = Oe((e6) => {
  e6.setUTCHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setUTCDate(e6.getUTCDate() + t);
}, (e6, t) => (t - e6) / ht, (e6) => e6.getUTCDate() - 1);
Ma.range;
const Ad = Oe((e6) => {
  e6.setUTCHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setUTCDate(e6.getUTCDate() + t);
}, (e6, t) => (t - e6) / ht, (e6) => Math.floor(e6 / ht));
Ad.range;
function Yt(e6) {
  return Oe((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e6) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ue) / Mc);
}
const Ca = Yt(0), Ni = Yt(1), vj = Yt(2), yj = Yt(3), yr = Yt(4), gj = Yt(5), mj = Yt(6);
Ca.range;
Ni.range;
vj.range;
yj.range;
yr.range;
gj.range;
mj.range;
function Zt(e6) {
  return Oe((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e6) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Mc);
}
const Ia = Zt(0), Di = Zt(1), bj = Zt(2), xj = Zt(3), gr = Zt(4), wj = Zt(5), Oj = Zt(6);
Ia.range;
Di.range;
bj.range;
xj.range;
gr.range;
wj.range;
Oj.range;
const kc = Oe((e6) => {
  e6.setDate(1), e6.setHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setMonth(e6.getMonth() + t);
}, (e6, t) => t.getMonth() - e6.getMonth() + (t.getFullYear() - e6.getFullYear()) * 12, (e6) => e6.getMonth());
kc.range;
const Rc = Oe((e6) => {
  e6.setUTCDate(1), e6.setUTCHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setUTCMonth(e6.getUTCMonth() + t);
}, (e6, t) => t.getUTCMonth() - e6.getUTCMonth() + (t.getUTCFullYear() - e6.getUTCFullYear()) * 12, (e6) => e6.getUTCMonth());
Rc.range;
const dt = Oe((e6) => {
  e6.setMonth(0, 1), e6.setHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setFullYear(e6.getFullYear() + t);
}, (e6, t) => t.getFullYear() - e6.getFullYear(), (e6) => e6.getFullYear());
dt.every = (e6) => !isFinite(e6 = Math.floor(e6)) || !(e6 > 0) ? null : Oe((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e6) * e6), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e6);
});
dt.range;
const vt = Oe((e6) => {
  e6.setUTCMonth(0, 1), e6.setUTCHours(0, 0, 0, 0);
}, (e6, t) => {
  e6.setUTCFullYear(e6.getUTCFullYear() + t);
}, (e6, t) => t.getUTCFullYear() - e6.getUTCFullYear(), (e6) => e6.getUTCFullYear());
vt.every = (e6) => !isFinite(e6 = Math.floor(e6)) || !(e6 > 0) ? null : Oe((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e6) * e6), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e6);
});
vt.range;
function Pd(e6, t, r, n, i, a) {
  const o = [[Ft, 1, st], [Ft, 5, 5 * st], [Ft, 15, 15 * st], [Ft, 30, 30 * st], [a, 1, Ue], [a, 5, 5 * Ue], [a, 15, 15 * Ue], [a, 30, 30 * Ue], [i, 1, lt], [i, 3, 3 * lt], [i, 6, 6 * lt], [i, 12, 12 * lt], [n, 1, ht], [n, 2, 2 * ht], [r, 1, Mc], [t, 1, Yl], [t, 3, 3 * Yl], [e6, 1, ho]];
  function u(s, f, l) {
    const p = f < s;
    p && ([s, f] = [f, s]);
    const h = l && typeof l.range == "function" ? l : c(s, f, l), d = h ? h.range(s, +f + 1) : [];
    return p ? d.reverse() : d;
  }
  function c(s, f, l) {
    const p = Math.abs(f - s) / l, h = bc(([, , y]) => y).right(o, p);
    if (h === o.length) return e6.every(tu(s / ho, f / ho, l));
    if (h === 0) return Ii.every(Math.max(tu(s, f, l), 1));
    const [d, v] = o[p / o[h - 1][2] < o[h][2] / p ? h - 1 : h];
    return d.every(v);
  }
  return [u, c];
}
const [Sj, _j] = Pd(vt, Rc, Ia, Ad, Dc, Ic), [Aj, Pj] = Pd(dt, kc, Ca, Hn, Nc, Cc);
function vo(e6) {
  if (0 <= e6.y && e6.y < 100) {
    var t = new Date(-1, e6.m, e6.d, e6.H, e6.M, e6.S, e6.L);
    return t.setFullYear(e6.y), t;
  }
  return new Date(e6.y, e6.m, e6.d, e6.H, e6.M, e6.S, e6.L);
}
function yo(e6) {
  if (0 <= e6.y && e6.y < 100) {
    var t = new Date(Date.UTC(-1, e6.m, e6.d, e6.H, e6.M, e6.S, e6.L));
    return t.setUTCFullYear(e6.y), t;
  }
  return new Date(Date.UTC(e6.y, e6.m, e6.d, e6.H, e6.M, e6.S, e6.L));
}
function Hr(e6, t, r) {
  return { y: e6, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function $j(e6) {
  var t = e6.dateTime, r = e6.date, n = e6.time, i = e6.periods, a = e6.days, o = e6.shortDays, u = e6.months, c = e6.shortMonths, s = Gr(i), f = Kr(i), l = Gr(a), p = Kr(a), h = Gr(o), d = Kr(o), v = Gr(u), y = Kr(u), x = Gr(c), w = Kr(c), b = { a: k, A: B, b: L, B: q, c: null, d: rf, e: rf, f: Yj, g: oM, G: cM, H: Kj, I: Xj, j: Vj, L: $d, m: Zj, M: Jj, p: G, q: U, Q: of, s: uf, S: Qj, u: eM, U: tM, V: rM, w: nM, W: iM, x: null, X: null, y: aM, Y: uM, Z: sM, "%": af }, S = { a: K, A: ce, b: de, B: De, c: null, d: nf, e: nf, f: hM, g: SM, G: AM, H: lM, I: fM, j: pM, L: Ed, m: dM, M: vM, p: Mt, q: Me, Q: of, s: uf, S: yM, u: gM, U: mM, V: bM, w: xM, W: wM, x: null, X: null, y: OM, Y: _M, Z: PM, "%": af }, g = { a: j, A: P, b: T, B: I, c: C, d: ef, e: ef, f: zj, g: Ql, G: Jl, H: tf, I: tf, j: Lj, L: Uj, m: Bj, M: Fj, p: A, q: Rj, Q: Hj, s: Gj, S: Wj, u: Cj, U: Ij, V: Nj, w: Mj, W: Dj, x: M, X: N, y: Ql, Y: Jl, Z: kj, "%": qj };
  b.x = m(r, b), b.X = m(n, b), b.c = m(t, b), S.x = m(r, S), S.X = m(n, S), S.c = m(t, S);
  function m(W, X) {
    return function(V) {
      var D = [], pe = -1, J = 0, ge = W.length, me, Ce, bt;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++pe < ge; ) W.charCodeAt(pe) === 37 && (D.push(W.slice(J, pe)), (Ce = Zl[me = W.charAt(++pe)]) != null ? me = W.charAt(++pe) : Ce = me === "e" ? " " : "0", (bt = X[me]) && (me = bt(V, Ce)), D.push(me), J = pe + 1);
      return D.push(W.slice(J, pe)), D.join("");
    };
  }
  function O(W, X) {
    return function(V) {
      var D = Hr(1900, void 0, 1), pe = _(D, W, V += "", 0), J, ge;
      if (pe != V.length) return null;
      if ("Q" in D) return new Date(D.Q);
      if ("s" in D) return new Date(D.s * 1e3 + ("L" in D ? D.L : 0));
      if (X && !("Z" in D) && (D.Z = 0), "p" in D && (D.H = D.H % 12 + D.p * 12), D.m === void 0 && (D.m = "q" in D ? D.q : 0), "V" in D) {
        if (D.V < 1 || D.V > 53) return null;
        "w" in D || (D.w = 1), "Z" in D ? (J = yo(Hr(D.y, 0, 1)), ge = J.getUTCDay(), J = ge > 4 || ge === 0 ? Di.ceil(J) : Di(J), J = Ma.offset(J, (D.V - 1) * 7), D.y = J.getUTCFullYear(), D.m = J.getUTCMonth(), D.d = J.getUTCDate() + (D.w + 6) % 7) : (J = vo(Hr(D.y, 0, 1)), ge = J.getDay(), J = ge > 4 || ge === 0 ? Ni.ceil(J) : Ni(J), J = Hn.offset(J, (D.V - 1) * 7), D.y = J.getFullYear(), D.m = J.getMonth(), D.d = J.getDate() + (D.w + 6) % 7);
      } else ("W" in D || "U" in D) && ("w" in D || (D.w = "u" in D ? D.u % 7 : "W" in D ? 1 : 0), ge = "Z" in D ? yo(Hr(D.y, 0, 1)).getUTCDay() : vo(Hr(D.y, 0, 1)).getDay(), D.m = 0, D.d = "W" in D ? (D.w + 6) % 7 + D.W * 7 - (ge + 5) % 7 : D.w + D.U * 7 - (ge + 6) % 7);
      return "Z" in D ? (D.H += D.Z / 100 | 0, D.M += D.Z % 100, yo(D)) : vo(D);
    };
  }
  function _(W, X, V, D) {
    for (var pe = 0, J = X.length, ge = V.length, me, Ce; pe < J; ) {
      if (D >= ge) return -1;
      if (me = X.charCodeAt(pe++), me === 37) {
        if (me = X.charAt(pe++), Ce = g[me in Zl ? X.charAt(pe++) : me], !Ce || (D = Ce(W, V, D)) < 0) return -1;
      } else if (me != V.charCodeAt(D++)) return -1;
    }
    return D;
  }
  function A(W, X, V) {
    var D = s.exec(X.slice(V));
    return D ? (W.p = f.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function j(W, X, V) {
    var D = h.exec(X.slice(V));
    return D ? (W.w = d.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function P(W, X, V) {
    var D = l.exec(X.slice(V));
    return D ? (W.w = p.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function T(W, X, V) {
    var D = x.exec(X.slice(V));
    return D ? (W.m = w.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function I(W, X, V) {
    var D = v.exec(X.slice(V));
    return D ? (W.m = y.get(D[0].toLowerCase()), V + D[0].length) : -1;
  }
  function C(W, X, V) {
    return _(W, t, X, V);
  }
  function M(W, X, V) {
    return _(W, r, X, V);
  }
  function N(W, X, V) {
    return _(W, n, X, V);
  }
  function k(W) {
    return o[W.getDay()];
  }
  function B(W) {
    return a[W.getDay()];
  }
  function L(W) {
    return c[W.getMonth()];
  }
  function q(W) {
    return u[W.getMonth()];
  }
  function G(W) {
    return i[+(W.getHours() >= 12)];
  }
  function U(W) {
    return 1 + ~~(W.getMonth() / 3);
  }
  function K(W) {
    return o[W.getUTCDay()];
  }
  function ce(W) {
    return a[W.getUTCDay()];
  }
  function de(W) {
    return c[W.getUTCMonth()];
  }
  function De(W) {
    return u[W.getUTCMonth()];
  }
  function Mt(W) {
    return i[+(W.getUTCHours() >= 12)];
  }
  function Me(W) {
    return 1 + ~~(W.getUTCMonth() / 3);
  }
  return { format: function(W) {
    var X = m(W += "", b);
    return X.toString = function() {
      return W;
    }, X;
  }, parse: function(W) {
    var X = O(W += "", false);
    return X.toString = function() {
      return W;
    }, X;
  }, utcFormat: function(W) {
    var X = m(W += "", S);
    return X.toString = function() {
      return W;
    }, X;
  }, utcParse: function(W) {
    var X = O(W += "", true);
    return X.toString = function() {
      return W;
    }, X;
  } };
}
var Zl = { "-": "", _: " ", 0: "0" }, Ae = /^\s*\d+/, Tj = /^%/, Ej = /[\\^$*+?|[\]().{}]/g;
function Q(e6, t, r) {
  var n = e6 < 0 ? "-" : "", i = (n ? -e6 : e6) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function jj(e6) {
  return e6.replace(Ej, "\\$&");
}
function Gr(e6) {
  return new RegExp("^(?:" + e6.map(jj).join("|") + ")", "i");
}
function Kr(e6) {
  return new Map(e6.map((t, r) => [t.toLowerCase(), r]));
}
function Mj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e6.w = +n[0], r + n[0].length) : -1;
}
function Cj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e6.u = +n[0], r + n[0].length) : -1;
}
function Ij(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.U = +n[0], r + n[0].length) : -1;
}
function Nj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.V = +n[0], r + n[0].length) : -1;
}
function Dj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.W = +n[0], r + n[0].length) : -1;
}
function Jl(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 4));
  return n ? (e6.y = +n[0], r + n[0].length) : -1;
}
function Ql(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function kj(e6, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e6.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Rj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 1));
  return n ? (e6.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Bj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.m = n[0] - 1, r + n[0].length) : -1;
}
function ef(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.d = +n[0], r + n[0].length) : -1;
}
function Lj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e6.m = 0, e6.d = +n[0], r + n[0].length) : -1;
}
function tf(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.H = +n[0], r + n[0].length) : -1;
}
function Fj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.M = +n[0], r + n[0].length) : -1;
}
function Wj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 2));
  return n ? (e6.S = +n[0], r + n[0].length) : -1;
}
function Uj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 3));
  return n ? (e6.L = +n[0], r + n[0].length) : -1;
}
function zj(e6, t, r) {
  var n = Ae.exec(t.slice(r, r + 6));
  return n ? (e6.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function qj(e6, t, r) {
  var n = Tj.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function Hj(e6, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e6.Q = +n[0], r + n[0].length) : -1;
}
function Gj(e6, t, r) {
  var n = Ae.exec(t.slice(r));
  return n ? (e6.s = +n[0], r + n[0].length) : -1;
}
function rf(e6, t) {
  return Q(e6.getDate(), t, 2);
}
function Kj(e6, t) {
  return Q(e6.getHours(), t, 2);
}
function Xj(e6, t) {
  return Q(e6.getHours() % 12 || 12, t, 2);
}
function Vj(e6, t) {
  return Q(1 + Hn.count(dt(e6), e6), t, 3);
}
function $d(e6, t) {
  return Q(e6.getMilliseconds(), t, 3);
}
function Yj(e6, t) {
  return $d(e6, t) + "000";
}
function Zj(e6, t) {
  return Q(e6.getMonth() + 1, t, 2);
}
function Jj(e6, t) {
  return Q(e6.getMinutes(), t, 2);
}
function Qj(e6, t) {
  return Q(e6.getSeconds(), t, 2);
}
function eM(e6) {
  var t = e6.getDay();
  return t === 0 ? 7 : t;
}
function tM(e6, t) {
  return Q(Ca.count(dt(e6) - 1, e6), t, 2);
}
function Td(e6) {
  var t = e6.getDay();
  return t >= 4 || t === 0 ? yr(e6) : yr.ceil(e6);
}
function rM(e6, t) {
  return e6 = Td(e6), Q(yr.count(dt(e6), e6) + (dt(e6).getDay() === 4), t, 2);
}
function nM(e6) {
  return e6.getDay();
}
function iM(e6, t) {
  return Q(Ni.count(dt(e6) - 1, e6), t, 2);
}
function aM(e6, t) {
  return Q(e6.getFullYear() % 100, t, 2);
}
function oM(e6, t) {
  return e6 = Td(e6), Q(e6.getFullYear() % 100, t, 2);
}
function uM(e6, t) {
  return Q(e6.getFullYear() % 1e4, t, 4);
}
function cM(e6, t) {
  var r = e6.getDay();
  return e6 = r >= 4 || r === 0 ? yr(e6) : yr.ceil(e6), Q(e6.getFullYear() % 1e4, t, 4);
}
function sM(e6) {
  var t = e6.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Q(t / 60 | 0, "0", 2) + Q(t % 60, "0", 2);
}
function nf(e6, t) {
  return Q(e6.getUTCDate(), t, 2);
}
function lM(e6, t) {
  return Q(e6.getUTCHours(), t, 2);
}
function fM(e6, t) {
  return Q(e6.getUTCHours() % 12 || 12, t, 2);
}
function pM(e6, t) {
  return Q(1 + Ma.count(vt(e6), e6), t, 3);
}
function Ed(e6, t) {
  return Q(e6.getUTCMilliseconds(), t, 3);
}
function hM(e6, t) {
  return Ed(e6, t) + "000";
}
function dM(e6, t) {
  return Q(e6.getUTCMonth() + 1, t, 2);
}
function vM(e6, t) {
  return Q(e6.getUTCMinutes(), t, 2);
}
function yM(e6, t) {
  return Q(e6.getUTCSeconds(), t, 2);
}
function gM(e6) {
  var t = e6.getUTCDay();
  return t === 0 ? 7 : t;
}
function mM(e6, t) {
  return Q(Ia.count(vt(e6) - 1, e6), t, 2);
}
function jd(e6) {
  var t = e6.getUTCDay();
  return t >= 4 || t === 0 ? gr(e6) : gr.ceil(e6);
}
function bM(e6, t) {
  return e6 = jd(e6), Q(gr.count(vt(e6), e6) + (vt(e6).getUTCDay() === 4), t, 2);
}
function xM(e6) {
  return e6.getUTCDay();
}
function wM(e6, t) {
  return Q(Di.count(vt(e6) - 1, e6), t, 2);
}
function OM(e6, t) {
  return Q(e6.getUTCFullYear() % 100, t, 2);
}
function SM(e6, t) {
  return e6 = jd(e6), Q(e6.getUTCFullYear() % 100, t, 2);
}
function _M(e6, t) {
  return Q(e6.getUTCFullYear() % 1e4, t, 4);
}
function AM(e6, t) {
  var r = e6.getUTCDay();
  return e6 = r >= 4 || r === 0 ? gr(e6) : gr.ceil(e6), Q(e6.getUTCFullYear() % 1e4, t, 4);
}
function PM() {
  return "+0000";
}
function af() {
  return "%";
}
function of(e6) {
  return +e6;
}
function uf(e6) {
  return Math.floor(+e6 / 1e3);
}
var rr, Md, Cd;
$M({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] });
function $M(e6) {
  return rr = $j(e6), Md = rr.format, rr.parse, Cd = rr.utcFormat, rr.utcParse, rr;
}
function TM(e6) {
  return new Date(e6);
}
function EM(e6) {
  return e6 instanceof Date ? +e6 : +/* @__PURE__ */ new Date(+e6);
}
function Bc(e6, t, r, n, i, a, o, u, c, s) {
  var f = _c(), l = f.invert, p = f.domain, h = s(".%L"), d = s(":%S"), v = s("%I:%M"), y = s("%I %p"), x = s("%a %d"), w = s("%b %d"), b = s("%B"), S = s("%Y");
  function g(m) {
    return (c(m) < m ? h : u(m) < m ? d : o(m) < m ? v : a(m) < m ? y : n(m) < m ? i(m) < m ? x : w : r(m) < m ? b : S)(m);
  }
  return f.invert = function(m) {
    return new Date(l(m));
  }, f.domain = function(m) {
    return arguments.length ? p(Array.from(m, EM)) : p().map(TM);
  }, f.ticks = function(m) {
    var O = p();
    return e6(O[0], O[O.length - 1], m != null ? m : 10);
  }, f.tickFormat = function(m, O) {
    return O == null ? g : s(O);
  }, f.nice = function(m) {
    var O = p();
    return (!m || typeof m.range != "function") && (m = t(O[0], O[O.length - 1], m != null ? m : 10)), m ? p(md(O, m)) : f;
  }, f.copy = function() {
    return qn(f, Bc(e6, t, r, n, i, a, o, u, c, s));
  }, f;
}
function jM() {
  return Ge.apply(Bc(Aj, Pj, dt, kc, Ca, Hn, Nc, Cc, Ft, Md).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function MM() {
  return Ge.apply(Bc(Sj, _j, vt, Rc, Ia, Ma, Dc, Ic, Ft, Cd).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Na() {
  var e6 = 0, t = 1, r, n, i, a, o = je, u = false, c;
  function s(l) {
    return l == null || isNaN(l = +l) ? c : o(i === 0 ? 0.5 : (l = (a(l) - r) * i, u ? Math.max(0, Math.min(1, l)) : l));
  }
  s.domain = function(l) {
    return arguments.length ? ([e6, t] = l, r = a(e6 = +e6), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), s) : [e6, t];
  }, s.clamp = function(l) {
    return arguments.length ? (u = !!l, s) : u;
  }, s.interpolator = function(l) {
    return arguments.length ? (o = l, s) : o;
  };
  function f(l) {
    return function(p) {
      var h, d;
      return arguments.length ? ([h, d] = p, o = l(h, d), s) : [o(0), o(1)];
    };
  }
  return s.range = f(Lr), s.rangeRound = f(Sc), s.unknown = function(l) {
    return arguments.length ? (c = l, s) : c;
  }, function(l) {
    return a = l, r = l(e6), n = l(t), i = r === n ? 0 : 1 / (n - r), s;
  };
}
function Et(e6, t) {
  return t.domain(e6.domain()).interpolator(e6.interpolator()).clamp(e6.clamp()).unknown(e6.unknown());
}
function Id() {
  var e6 = Tt(Na()(je));
  return e6.copy = function() {
    return Et(e6, Id());
  }, mt.apply(e6, arguments);
}
function Nd() {
  var e6 = $c(Na()).domain([1, 10]);
  return e6.copy = function() {
    return Et(e6, Nd()).base(e6.base());
  }, mt.apply(e6, arguments);
}
function Dd() {
  var e6 = Tc(Na());
  return e6.copy = function() {
    return Et(e6, Dd()).constant(e6.constant());
  }, mt.apply(e6, arguments);
}
function Lc() {
  var e6 = Ec(Na());
  return e6.copy = function() {
    return Et(e6, Lc()).exponent(e6.exponent());
  }, mt.apply(e6, arguments);
}
function CM() {
  return Lc.apply(null, arguments).exponent(0.5);
}
function kd() {
  var e6 = [], t = je;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((Un(e6, n, 1) - 1) / (e6.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e6.slice();
    e6 = [];
    for (let i of n) i != null && !isNaN(i = +i) && e6.push(i);
    return e6.sort(_t), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e6.map((n, i) => t(i / (e6.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => mE(e6, a / n));
  }, r.copy = function() {
    return kd(t).domain(e6);
  }, mt.apply(r, arguments);
}
function Da() {
  var e6 = 0, t = 0.5, r = 1, n = 1, i, a, o, u, c, s = je, f, l = false, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +f(v)) - a) * (n * v < n * a ? u : c), s(l ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e6, t, r] = v, i = f(e6 = +e6), a = f(t = +t), o = f(r = +r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h) : [e6, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (l = !!v, h) : l;
  }, h.interpolator = function(v) {
    return arguments.length ? (s = v, h) : s;
  };
  function d(v) {
    return function(y) {
      var x, w, b;
      return arguments.length ? ([x, w, b] = y, s = qE(v, [x, w, b]), h) : [s(0), s(0.5), s(1)];
    };
  }
  return h.range = d(Lr), h.rangeRound = d(Sc), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return f = v, i = v(e6), a = v(t), o = v(r), u = i === a ? 0 : 0.5 / (a - i), c = a === o ? 0 : 0.5 / (o - a), n = a < i ? -1 : 1, h;
  };
}
function Rd() {
  var e6 = Tt(Da()(je));
  return e6.copy = function() {
    return Et(e6, Rd());
  }, mt.apply(e6, arguments);
}
function Bd() {
  var e6 = $c(Da()).domain([0.1, 1, 10]);
  return e6.copy = function() {
    return Et(e6, Bd()).base(e6.base());
  }, mt.apply(e6, arguments);
}
function Ld() {
  var e6 = Tc(Da());
  return e6.copy = function() {
    return Et(e6, Ld()).constant(e6.constant());
  }, mt.apply(e6, arguments);
}
function Fc() {
  var e6 = Ec(Da());
  return e6.copy = function() {
    return Et(e6, Fc()).exponent(e6.exponent());
  }, mt.apply(e6, arguments);
}
function IM() {
  return Fc.apply(null, arguments).exponent(0.5);
}
const cf = Object.freeze(Object.defineProperty({ __proto__: null, scaleBand: fn, scaleDiverging: Rd, scaleDivergingLog: Bd, scaleDivergingPow: Fc, scaleDivergingSqrt: IM, scaleDivergingSymlog: Ld, scaleIdentity: gd, scaleImplicit: ru, scaleLinear: Ci, scaleLog: bd, scaleOrdinal: xc, scalePoint: en, scalePow: jc, scaleQuantile: Od, scaleQuantize: Sd, scaleRadial: wd, scaleSequential: Id, scaleSequentialLog: Nd, scaleSequentialPow: Lc, scaleSequentialQuantile: kd, scaleSequentialSqrt: CM, scaleSequentialSymlog: Dd, scaleSqrt: hj, scaleSymlog: xd, scaleThreshold: _d, scaleTime: jM, scaleUtc: MM, tickFormat: yd }, Symbol.toStringTag, { value: "Module" }));
var NM = Mr;
function DM(e6, t, r) {
  for (var n = -1, i = e6.length; ++n < i; ) {
    var a = e6[n], o = t(a);
    if (o != null && (u === void 0 ? o === o && !NM(o) : r(o, u))) var u = o, c = a;
  }
  return c;
}
var Fd = DM;
function kM(e6, t) {
  return e6 > t;
}
var RM = kM, BM = Fd, LM = RM, FM = Br;
function WM(e6) {
  return e6 && e6.length ? BM(e6, FM, LM) : void 0;
}
var UM = WM;
const ka = ue(UM);
function zM(e6, t) {
  return e6 < t;
}
var qM = zM, HM = Fd, GM = qM, KM = Br;
function XM(e6) {
  return e6 && e6.length ? HM(e6, KM, GM) : void 0;
}
var VM = XM;
const Ra = ue(VM);
var YM = ec, ZM = $t, JM = Xh, QM = Ne;
function eC(e6, t) {
  var r = QM(e6) ? YM : JM;
  return r(e6, ZM(t));
}
var tC = eC, rC = Gh, nC = tC;
function iC(e6, t) {
  return rC(nC(e6, t), 1);
}
var aC = iC;
const oC = ue(aC);
var uC = vc;
function cC(e6, t) {
  return uC(e6, t);
}
var sC = cC;
const Wc = ue(sC);
var Fr = 1e9, lC = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, zc, fe = true, qe = "[DecimalError] ", qt = qe + "Invalid argument: ", Uc = qe + "Exponent out of range: ", Wr = Math.floor, Rt = Math.pow, fC = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Be, Se = 1e7, le = 7, Wd = 9007199254740991, ki = Wr(Wd / le), z = {};
z.absoluteValue = z.abs = function() {
  var e6 = new this.constructor(this);
  return e6.s && (e6.s = 1), e6;
};
z.comparedTo = z.cmp = function(e6) {
  var t, r, n, i, a = this;
  if (e6 = new a.constructor(e6), a.s !== e6.s) return a.s || -e6.s;
  if (a.e !== e6.e) return a.e > e6.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e6.d.length, t = 0, r = n < i ? n : i; t < r; ++t) if (a.d[t] !== e6.d[t]) return a.d[t] > e6.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
z.decimalPlaces = z.dp = function() {
  var e6 = this, t = e6.d.length - 1, r = (t - e6.e) * le;
  if (t = e6.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
z.dividedBy = z.div = function(e6) {
  return pt(this, new this.constructor(e6));
};
z.dividedToIntegerBy = z.idiv = function(e6) {
  var t = this, r = t.constructor;
  return ae(pt(t, new r(e6), 0, 1), r.precision);
};
z.equals = z.eq = function(e6) {
  return !this.cmp(e6);
};
z.exponent = function() {
  return ye(this);
};
z.greaterThan = z.gt = function(e6) {
  return this.cmp(e6) > 0;
};
z.greaterThanOrEqualTo = z.gte = function(e6) {
  return this.cmp(e6) >= 0;
};
z.isInteger = z.isint = function() {
  return this.e > this.d.length - 2;
};
z.isNegative = z.isneg = function() {
  return this.s < 0;
};
z.isPositive = z.ispos = function() {
  return this.s > 0;
};
z.isZero = function() {
  return this.s === 0;
};
z.lessThan = z.lt = function(e6) {
  return this.cmp(e6) < 0;
};
z.lessThanOrEqualTo = z.lte = function(e6) {
  return this.cmp(e6) < 1;
};
z.logarithm = z.log = function(e6) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e6 === void 0) e6 = new n(10);
  else if (e6 = new n(e6), e6.s < 1 || e6.eq(Be)) throw Error(qe + "NaN");
  if (r.s < 1) throw Error(qe + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Be) ? new n(0) : (fe = false, t = pt(yn(r, a), yn(e6, a), a), fe = true, ae(t, i));
};
z.minus = z.sub = function(e6) {
  var t = this;
  return e6 = new t.constructor(e6), t.s == e6.s ? qd(t, e6) : Ud(t, (e6.s = -e6.s, e6));
};
z.modulo = z.mod = function(e6) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e6 = new n(e6), !e6.s) throw Error(qe + "NaN");
  return r.s ? (fe = false, t = pt(r, e6, 0, 1).times(e6), fe = true, r.minus(t)) : ae(new n(r), i);
};
z.naturalExponential = z.exp = function() {
  return zd(this);
};
z.naturalLogarithm = z.ln = function() {
  return yn(this);
};
z.negated = z.neg = function() {
  var e6 = new this.constructor(this);
  return e6.s = -e6.s || 0, e6;
};
z.plus = z.add = function(e6) {
  var t = this;
  return e6 = new t.constructor(e6), t.s == e6.s ? Ud(t, e6) : qd(t, (e6.s = -e6.s, e6));
};
z.precision = z.sd = function(e6) {
  var t, r, n, i = this;
  if (e6 !== void 0 && e6 !== !!e6 && e6 !== 1 && e6 !== 0) throw Error(qt + e6);
  if (t = ye(i) + 1, n = i.d.length - 1, r = n * le + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e6 && t > r ? t : r;
};
z.squareRoot = z.sqrt = function() {
  var e6, t, r, n, i, a, o, u = this, c = u.constructor;
  if (u.s < 1) {
    if (!u.s) return new c(0);
    throw Error(qe + "NaN");
  }
  for (e6 = ye(u), fe = false, i = Math.sqrt(+u), i == 0 || i == 1 / 0 ? (t = tt(u.d), (t.length + e6) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e6 = Wr((e6 + 1) / 2) - (e6 < 0 || e6 % 2), i == 1 / 0 ? t = "5e" + e6 : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e6), n = new c(t)) : n = new c(i.toString()), r = c.precision, i = o = r + 3; ; ) if (a = n, n = a.plus(pt(u, a, o + 2)).times(0.5), tt(a.d).slice(0, o) === (t = tt(n.d)).slice(0, o)) {
    if (t = t.slice(o - 3, o + 1), i == o && t == "4999") {
      if (ae(a, r + 1, 0), a.times(a).eq(u)) {
        n = a;
        break;
      }
    } else if (t != "9999") break;
    o += 4;
  }
  return fe = true, ae(n, r);
};
z.times = z.mul = function(e6) {
  var t, r, n, i, a, o, u, c, s, f = this, l = f.constructor, p = f.d, h = (e6 = new l(e6)).d;
  if (!f.s || !e6.s) return new l(0);
  for (e6.s *= f.s, r = f.e + e6.e, c = p.length, s = h.length, c < s && (a = p, p = h, h = a, o = c, c = s, s = o), a = [], o = c + s, n = o; n--; ) a.push(0);
  for (n = s; --n >= 0; ) {
    for (t = 0, i = c + n; i > n; ) u = a[i] + h[n] * p[i - n - 1] + t, a[i--] = u % Se | 0, t = u / Se | 0;
    a[i] = (a[i] + t) % Se | 0;
  }
  for (; !a[--o]; ) a.pop();
  return t ? ++r : a.shift(), e6.d = a, e6.e = r, fe ? ae(e6, l.precision) : e6;
};
z.toDecimalPlaces = z.todp = function(e6, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e6 === void 0 ? r : (it(e6, 0, Fr), t === void 0 ? t = n.rounding : it(t, 0, 8), ae(r, e6 + ye(r) + 1, t));
};
z.toExponential = function(e6, t) {
  var r, n = this, i = n.constructor;
  return e6 === void 0 ? r = Kt(n, true) : (it(e6, 0, Fr), t === void 0 ? t = i.rounding : it(t, 0, 8), n = ae(new i(n), e6 + 1, t), r = Kt(n, true, e6 + 1)), r;
};
z.toFixed = function(e6, t) {
  var r, n, i = this, a = i.constructor;
  return e6 === void 0 ? Kt(i) : (it(e6, 0, Fr), t === void 0 ? t = a.rounding : it(t, 0, 8), n = ae(new a(i), e6 + ye(i) + 1, t), r = Kt(n.abs(), false, e6 + ye(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
z.toInteger = z.toint = function() {
  var e6 = this, t = e6.constructor;
  return ae(new t(e6), ye(e6) + 1, t.rounding);
};
z.toNumber = function() {
  return +this;
};
z.toPower = z.pow = function(e6) {
  var t, r, n, i, a, o, u = this, c = u.constructor, s = 12, f = +(e6 = new c(e6));
  if (!e6.s) return new c(Be);
  if (u = new c(u), !u.s) {
    if (e6.s < 1) throw Error(qe + "Infinity");
    return u;
  }
  if (u.eq(Be)) return u;
  if (n = c.precision, e6.eq(Be)) return ae(u, n);
  if (t = e6.e, r = e6.d.length - 1, o = t >= r, a = u.s, o) {
    if ((r = f < 0 ? -f : f) <= Wd) {
      for (i = new c(Be), t = Math.ceil(n / le + 4), fe = false; r % 2 && (i = i.times(u), lf(i.d, t)), r = Wr(r / 2), r !== 0; ) u = u.times(u), lf(u.d, t);
      return fe = true, e6.s < 0 ? new c(Be).div(i) : ae(i, n);
    }
  } else if (a < 0) throw Error(qe + "NaN");
  return a = a < 0 && e6.d[Math.max(t, r)] & 1 ? -1 : 1, u.s = 1, fe = false, i = e6.times(yn(u, n + s)), fe = true, i = zd(i), i.s = a, i;
};
z.toPrecision = function(e6, t) {
  var r, n, i = this, a = i.constructor;
  return e6 === void 0 ? (r = ye(i), n = Kt(i, r <= a.toExpNeg || r >= a.toExpPos)) : (it(e6, 1, Fr), t === void 0 ? t = a.rounding : it(t, 0, 8), i = ae(new a(i), e6, t), r = ye(i), n = Kt(i, e6 <= r || r <= a.toExpNeg, e6)), n;
};
z.toSignificantDigits = z.tosd = function(e6, t) {
  var r = this, n = r.constructor;
  return e6 === void 0 ? (e6 = n.precision, t = n.rounding) : (it(e6, 1, Fr), t === void 0 ? t = n.rounding : it(t, 0, 8)), ae(new n(r), e6, t);
};
z.toString = z.valueOf = z.val = z.toJSON = z[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e6 = this, t = ye(e6), r = e6.constructor;
  return Kt(e6, t <= r.toExpNeg || t >= r.toExpPos);
};
function Ud(e6, t) {
  var r, n, i, a, o, u, c, s, f = e6.constructor, l = f.precision;
  if (!e6.s || !t.s) return t.s || (t = new f(e6)), fe ? ae(t, l) : t;
  if (c = e6.d, s = t.d, o = e6.e, i = t.e, c = c.slice(), a = o - i, a) {
    for (a < 0 ? (n = c, a = -a, u = s.length) : (n = s, i = o, u = c.length), o = Math.ceil(l / le), u = o > u ? o + 1 : u + 1, a > u && (a = u, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (u = c.length, a = s.length, u - a < 0 && (a = u, n = s, s = c, c = n), r = 0; a; ) r = (c[--a] = c[a] + s[a] + r) / Se | 0, c[a] %= Se;
  for (r && (c.unshift(r), ++i), u = c.length; c[--u] == 0; ) c.pop();
  return t.d = c, t.e = i, fe ? ae(t, l) : t;
}
function it(e6, t, r) {
  if (e6 !== ~~e6 || e6 < t || e6 > r) throw Error(qt + e6);
}
function tt(e6) {
  var t, r, n, i = e6.length - 1, a = "", o = e6[0];
  if (i > 0) {
    for (a += o, t = 1; t < i; t++) n = e6[t] + "", r = le - n.length, r && (a += xt(r)), a += n;
    o = e6[t], n = o + "", r = le - n.length, r && (a += xt(r));
  } else if (o === 0) return "0";
  for (; o % 10 === 0; ) o /= 10;
  return a + o;
}
var pt = /* @__PURE__ */ (function() {
  function e6(n, i) {
    var a, o = 0, u = n.length;
    for (n = n.slice(); u--; ) a = n[u] * i + o, n[u] = a % Se | 0, o = a / Se | 0;
    return o && n.unshift(o), n;
  }
  function t(n, i, a, o) {
    var u, c;
    if (a != o) c = a > o ? 1 : -1;
    else for (u = c = 0; u < a; u++) if (n[u] != i[u]) {
      c = n[u] > i[u] ? 1 : -1;
      break;
    }
    return c;
  }
  function r(n, i, a) {
    for (var o = 0; a--; ) n[a] -= o, o = n[a] < i[a] ? 1 : 0, n[a] = o * Se + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, o) {
    var u, c, s, f, l, p, h, d, v, y, x, w, b, S, g, m, O, _, A = n.constructor, j = n.s == i.s ? 1 : -1, P = n.d, T = i.d;
    if (!n.s) return new A(n);
    if (!i.s) throw Error(qe + "Division by zero");
    for (c = n.e - i.e, O = T.length, g = P.length, h = new A(j), d = h.d = [], s = 0; T[s] == (P[s] || 0); ) ++s;
    if (T[s] > (P[s] || 0) && --c, a == null ? w = a = A.precision : o ? w = a + (ye(n) - ye(i)) + 1 : w = a, w < 0) return new A(0);
    if (w = w / le + 2 | 0, s = 0, O == 1) for (f = 0, T = T[0], w++; (s < g || f) && w--; s++) b = f * Se + (P[s] || 0), d[s] = b / T | 0, f = b % T | 0;
    else {
      for (f = Se / (T[0] + 1) | 0, f > 1 && (T = e6(T, f), P = e6(P, f), O = T.length, g = P.length), S = O, v = P.slice(0, O), y = v.length; y < O; ) v[y++] = 0;
      _ = T.slice(), _.unshift(0), m = T[0], T[1] >= Se / 2 && ++m;
      do
        f = 0, u = t(T, v, O, y), u < 0 ? (x = v[0], O != y && (x = x * Se + (v[1] || 0)), f = x / m | 0, f > 1 ? (f >= Se && (f = Se - 1), l = e6(T, f), p = l.length, y = v.length, u = t(l, v, p, y), u == 1 && (f--, r(l, O < p ? _ : T, p))) : (f == 0 && (u = f = 1), l = T.slice()), p = l.length, p < y && l.unshift(0), r(v, l, y), u == -1 && (y = v.length, u = t(T, v, O, y), u < 1 && (f++, r(v, O < y ? _ : T, y))), y = v.length) : u === 0 && (f++, v = [0]), d[s++] = f, u && v[0] ? v[y++] = P[S] || 0 : (v = [P[S]], y = 1);
      while ((S++ < g || v[0] !== void 0) && w--);
    }
    return d[0] || d.shift(), h.e = c, ae(h, o ? a + ye(h) + 1 : a);
  };
})();
function zd(e6, t) {
  var r, n, i, a, o, u, c = 0, s = 0, f = e6.constructor, l = f.precision;
  if (ye(e6) > 16) throw Error(Uc + ye(e6));
  if (!e6.s) return new f(Be);
  for (t == null ? (fe = false, u = l) : u = t, o = new f(0.03125); e6.abs().gte(0.1); ) e6 = e6.times(o), s += 5;
  for (n = Math.log(Rt(2, s)) / Math.LN10 * 2 + 5 | 0, u += n, r = i = a = new f(Be), f.precision = u; ; ) {
    if (i = ae(i.times(e6), u), r = r.times(++c), o = a.plus(pt(i, r, u)), tt(o.d).slice(0, u) === tt(a.d).slice(0, u)) {
      for (; s--; ) a = ae(a.times(a), u);
      return f.precision = l, t == null ? (fe = true, ae(a, l)) : a;
    }
    a = o;
  }
}
function ye(e6) {
  for (var t = e6.e * le, r = e6.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function go(e6, t, r) {
  if (t > e6.LN10.sd()) throw fe = true, r && (e6.precision = r), Error(qe + "LN10 precision limit exceeded");
  return ae(new e6(e6.LN10), t);
}
function xt(e6) {
  for (var t = ""; e6--; ) t += "0";
  return t;
}
function yn(e6, t) {
  var r, n, i, a, o, u, c, s, f, l = 1, p = 10, h = e6, d = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(qe + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Be)) return new v(0);
  if (t == null ? (fe = false, s = y) : s = t, h.eq(10)) return t == null && (fe = true), go(v, s);
  if (s += p, v.precision = s, r = tt(d), n = r.charAt(0), a = ye(h), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) h = h.times(e6), r = tt(h.d), n = r.charAt(0), l++;
    a = ye(h), n > 1 ? (h = new v("0." + r), a++) : h = new v(n + "." + r.slice(1));
  } else return c = go(v, s + 2, y).times(a + ""), h = yn(new v(n + "." + r.slice(1)), s - p).plus(c), v.precision = y, t == null ? (fe = true, ae(h, y)) : h;
  for (u = o = h = pt(h.minus(Be), h.plus(Be), s), f = ae(h.times(h), s), i = 3; ; ) {
    if (o = ae(o.times(f), s), c = u.plus(pt(o, new v(i), s)), tt(c.d).slice(0, s) === tt(u.d).slice(0, s)) return u = u.times(2), a !== 0 && (u = u.plus(go(v, s + 2, y).times(a + ""))), u = pt(u, new v(l), s), v.precision = y, t == null ? (fe = true, ae(u, y)) : u;
    u = c, i += 2;
  }
}
function sf(e6, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e6.e = Wr(r / le), e6.d = [], n = (r + 1) % le, r < 0 && (n += le), n < i) {
      for (n && e6.d.push(+t.slice(0, n)), i -= le; n < i; ) e6.d.push(+t.slice(n, n += le));
      t = t.slice(n), n = le - t.length;
    } else n -= i;
    for (; n--; ) t += "0";
    if (e6.d.push(+t), fe && (e6.e > ki || e6.e < -ki)) throw Error(Uc + r);
  } else e6.s = 0, e6.e = 0, e6.d = [0];
  return e6;
}
function ae(e6, t, r) {
  var n, i, a, o, u, c, s, f, l = e6.d;
  for (o = 1, a = l[0]; a >= 10; a /= 10) o++;
  if (n = t - o, n < 0) n += le, i = t, s = l[f = 0];
  else {
    if (f = Math.ceil((n + 1) / le), a = l.length, f >= a) return e6;
    for (s = a = l[f], o = 1; a >= 10; a /= 10) o++;
    n %= le, i = n - le + o;
  }
  if (r !== void 0 && (a = Rt(10, o - i - 1), u = s / a % 10 | 0, c = t < 0 || l[f + 1] !== void 0 || s % a, c = r < 4 ? (u || c) && (r == 0 || r == (e6.s < 0 ? 3 : 2)) : u > 5 || u == 5 && (r == 4 || c || r == 6 && (n > 0 ? i > 0 ? s / Rt(10, o - i) : 0 : l[f - 1]) % 10 & 1 || r == (e6.s < 0 ? 8 : 7))), t < 1 || !l[0]) return c ? (a = ye(e6), l.length = 1, t = t - a - 1, l[0] = Rt(10, (le - t % le) % le), e6.e = Wr(-t / le) || 0) : (l.length = 1, l[0] = e6.e = e6.s = 0), e6;
  if (n == 0 ? (l.length = f, a = 1, f--) : (l.length = f + 1, a = Rt(10, le - n), l[f] = i > 0 ? (s / Rt(10, o - i) % Rt(10, i) | 0) * a : 0), c) for (; ; ) if (f == 0) {
    (l[0] += a) == Se && (l[0] = 1, ++e6.e);
    break;
  } else {
    if (l[f] += a, l[f] != Se) break;
    l[f--] = 0, a = 1;
  }
  for (n = l.length; l[--n] === 0; ) l.pop();
  if (fe && (e6.e > ki || e6.e < -ki)) throw Error(Uc + ye(e6));
  return e6;
}
function qd(e6, t) {
  var r, n, i, a, o, u, c, s, f, l, p = e6.constructor, h = p.precision;
  if (!e6.s || !t.s) return t.s ? t.s = -t.s : t = new p(e6), fe ? ae(t, h) : t;
  if (c = e6.d, l = t.d, n = t.e, s = e6.e, c = c.slice(), o = s - n, o) {
    for (f = o < 0, f ? (r = c, o = -o, u = l.length) : (r = l, n = s, u = c.length), i = Math.max(Math.ceil(h / le), u) + 2, o > i && (o = i, r.length = 1), r.reverse(), i = o; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = c.length, u = l.length, f = i < u, f && (u = i), i = 0; i < u; i++) if (c[i] != l[i]) {
      f = c[i] < l[i];
      break;
    }
    o = 0;
  }
  for (f && (r = c, c = l, l = r, t.s = -t.s), u = c.length, i = l.length - u; i > 0; --i) c[u++] = 0;
  for (i = l.length; i > o; ) {
    if (c[--i] < l[i]) {
      for (a = i; a && c[--a] === 0; ) c[a] = Se - 1;
      --c[a], c[i] += Se;
    }
    c[i] -= l[i];
  }
  for (; c[--u] === 0; ) c.pop();
  for (; c[0] === 0; c.shift()) --n;
  return c[0] ? (t.d = c, t.e = n, fe ? ae(t, h) : t) : new p(0);
}
function Kt(e6, t, r) {
  var n, i = ye(e6), a = tt(e6.d), o = a.length;
  return t ? (r && (n = r - o) > 0 ? a = a.charAt(0) + "." + a.slice(1) + xt(n) : o > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + xt(-i - 1) + a, r && (n = r - o) > 0 && (a += xt(n))) : i >= o ? (a += xt(i + 1 - o), r && (n = r - i - 1) > 0 && (a = a + "." + xt(n))) : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - o) > 0 && (i + 1 === o && (a += "."), a += xt(n))), e6.s < 0 ? "-" + a : a;
}
function lf(e6, t) {
  if (e6.length > t) return e6.length = t, true;
}
function Hd(e6) {
  var t, r, n;
  function i(a) {
    var o = this;
    if (!(o instanceof i)) return new i(a);
    if (o.constructor = i, a instanceof i) {
      o.s = a.s, o.e = a.e, o.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0) throw Error(qt + a);
      if (a > 0) o.s = 1;
      else if (a < 0) a = -a, o.s = -1;
      else {
        o.s = 0, o.e = 0, o.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        o.e = 0, o.d = [a];
        return;
      }
      return sf(o, a.toString());
    } else if (typeof a != "string") throw Error(qt + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), o.s = -1) : o.s = 1, fC.test(a)) sf(o, a);
    else throw Error(qt + a);
  }
  if (i.prototype = z, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = Hd, i.config = i.set = pC, e6 === void 0 && (e6 = {}), e6) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e6.hasOwnProperty(r = n[t++]) || (e6[r] = this[r]);
  return i.config(e6), i;
}
function pC(e6) {
  if (!e6 || typeof e6 != "object") throw Error(qe + "Object expected");
  var t, r, n, i = ["precision", 1, Fr, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
  for (t = 0; t < i.length; t += 3) if ((n = e6[r = i[t]]) !== void 0) if (Wr(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
  else throw Error(qt + r + ": " + n);
  if ((n = e6[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
  else throw Error(qt + r + ": " + n);
  return this;
}
var zc = Hd(lC);
Be = new zc(1);
const ie = zc;
function hC(e6) {
  return gC(e6) || yC(e6) || vC(e6) || dC();
}
function dC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vC(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return ou(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ou(e6, t);
  }
}
function yC(e6) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e6)) return Array.from(e6);
}
function gC(e6) {
  if (Array.isArray(e6)) return ou(e6);
}
function ou(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
var mC = function(t) {
  return t;
}, Gd = { "@@functional/placeholder": true }, Kd = function(t) {
  return t === Gd;
}, ff = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && Kd(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, bC = function e4(t, r) {
  return t === 1 ? r : ff(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    var o = i.filter(function(u) {
      return u !== Gd;
    }).length;
    return o >= t ? r.apply(void 0, i) : e4(t - o, ff(function() {
      for (var u = arguments.length, c = new Array(u), s = 0; s < u; s++) c[s] = arguments[s];
      var f = i.map(function(l) {
        return Kd(l) ? c.shift() : l;
      });
      return r.apply(void 0, hC(f).concat(c));
    }));
  });
}, Ba = function(t) {
  return bC(t.length, t);
}, uu = function(t, r) {
  for (var n = [], i = t; i < r; ++i) n[i - t] = i;
  return n;
}, xC = Ba(function(e6, t) {
  return Array.isArray(t) ? t.map(e6) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e6);
}), wC = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  if (!r.length) return mC;
  var i = r.reverse(), a = i[0], o = i.slice(1);
  return function() {
    return o.reduce(function(u, c) {
      return c(u);
    }, a.apply(void 0, arguments));
  };
}, cu = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, Xd = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) a[o] = arguments[o];
    return r && a.every(function(u, c) {
      return u === r[c];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function OC(e6) {
  var t;
  return e6 === 0 ? t = 1 : t = Math.floor(new ie(e6).abs().log(10).toNumber()) + 1, t;
}
function SC(e6, t, r) {
  for (var n = new ie(e6), i = 0, a = []; n.lt(t) && i < 1e5; ) a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var _C = Ba(function(e6, t, r) {
  var n = +e6, i = +t;
  return n + r * (i - n);
}), AC = Ba(function(e6, t, r) {
  var n = t - +e6;
  return n = n || 1 / 0, (r - e6) / n;
}), PC = Ba(function(e6, t, r) {
  var n = t - +e6;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e6) / n));
});
const La = { rangeStep: SC, getDigitCount: OC, interpolateNumber: _C, uninterpolateNumber: AC, uninterpolateTruncation: PC };
function su(e6) {
  return EC(e6) || TC(e6) || Vd(e6) || $C();
}
function $C() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function TC(e6) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e6)) return Array.from(e6);
}
function EC(e6) {
  if (Array.isArray(e6)) return lu(e6);
}
function gn(e6, t) {
  return CC(e6) || MC(e6, t) || Vd(e6, t) || jC();
}
function jC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vd(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return lu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lu(e6, t);
  }
}
function lu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function MC(e6, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e6)))) {
    var r = [], n = true, i = false, a = void 0;
    try {
      for (var o = e6[Symbol.iterator](), u; !(n = (u = o.next()).done) && (r.push(u.value), !(t && r.length === t)); n = true) ;
    } catch (c) {
      i = true, a = c;
    } finally {
      try {
        !n && o.return != null && o.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function CC(e6) {
  if (Array.isArray(e6)) return e6;
}
function Yd(e6) {
  var t = gn(e6, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function Zd(e6, t, r) {
  if (e6.lte(0)) return new ie(0);
  var n = La.getDigitCount(e6.toNumber()), i = new ie(10).pow(n), a = e6.div(i), o = n !== 1 ? 0.05 : 0.1, u = new ie(Math.ceil(a.div(o).toNumber())).add(r).mul(o), c = u.mul(i);
  return t ? c : new ie(Math.ceil(c));
}
function IC(e6, t, r) {
  var n = 1, i = new ie(e6);
  if (!i.isint() && r) {
    var a = Math.abs(e6);
    a < 1 ? (n = new ie(10).pow(La.getDigitCount(e6) - 1), i = new ie(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new ie(Math.floor(e6)));
  } else e6 === 0 ? i = new ie(Math.floor((t - 1) / 2)) : r || (i = new ie(Math.floor(e6)));
  var o = Math.floor((t - 1) / 2), u = wC(xC(function(c) {
    return i.add(new ie(c - o).mul(n)).toNumber();
  }), uu);
  return u(0, t);
}
function Jd(e6, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e6) / (r - 1))) return { step: new ie(0), tickMin: new ie(0), tickMax: new ie(0) };
  var a = Zd(new ie(t).sub(e6).div(r - 1), n, i), o;
  e6 <= 0 && t >= 0 ? o = new ie(0) : (o = new ie(e6).add(t).div(2), o = o.sub(new ie(o).mod(a)));
  var u = Math.ceil(o.sub(e6).div(a).toNumber()), c = Math.ceil(new ie(t).sub(o).div(a).toNumber()), s = u + c + 1;
  return s > r ? Jd(e6, t, r, n, i + 1) : (s < r && (c = t > 0 ? c + (r - s) : c, u = t > 0 ? u : u + (r - s)), { step: a, tickMin: o.sub(new ie(u).mul(a)), tickMax: o.add(new ie(c).mul(a)) });
}
function NC(e6) {
  var t = gn(e6, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Math.max(i, 2), u = Yd([r, n]), c = gn(u, 2), s = c[0], f = c[1];
  if (s === -1 / 0 || f === 1 / 0) {
    var l = f === 1 / 0 ? [s].concat(su(uu(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(su(uu(0, i - 1).map(function() {
      return -1 / 0;
    })), [f]);
    return r > n ? cu(l) : l;
  }
  if (s === f) return IC(s, i, a);
  var p = Jd(s, f, o, a), h = p.step, d = p.tickMin, v = p.tickMax, y = La.rangeStep(d, v.add(new ie(0.1).mul(h)), h);
  return r > n ? cu(y) : y;
}
function DC(e6, t) {
  var r = gn(e6, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true, o = Yd([n, i]), u = gn(o, 2), c = u[0], s = u[1];
  if (c === -1 / 0 || s === 1 / 0) return [n, i];
  if (c === s) return [c];
  var f = Math.max(t, 2), l = Zd(new ie(s).sub(c).div(f - 1), a, 0), p = [].concat(su(La.rangeStep(new ie(c), new ie(s).sub(new ie(0.99).mul(l)), l)), [s]);
  return n > i ? cu(p) : p;
}
var kC = Xd(NC), RC = Xd(DC), BC = "Invariant failed";
function Xt(e6, t) {
  throw new Error(BC);
}
var LC = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function mr(e6) {
  "@babel/helpers - typeof";
  return mr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mr(e6);
}
function Ri() {
  return Ri = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Ri.apply(this, arguments);
}
function FC(e6, t) {
  return qC(e6) || zC(e6, t) || UC(e6, t) || WC();
}
function WC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UC(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return pf(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pf(e6, t);
  }
}
function pf(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function zC(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function qC(e6) {
  if (Array.isArray(e6)) return e6;
}
function HC(e6, t) {
  if (e6 == null) return {};
  var r = GC(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function GC(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function KC(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function XC(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, tv(n.key), n);
  }
}
function VC(e6, t, r) {
  return t && XC(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function YC(e6, t, r) {
  return t = Bi(t), ZC(e6, Qd() ? Reflect.construct(t, r || [], Bi(e6).constructor) : t.apply(e6, r));
}
function ZC(e6, t) {
  if (t && (mr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return JC(e6);
}
function JC(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Qd() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Qd = function() {
    return !!e6;
  })();
}
function Bi(e6) {
  return Bi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bi(e6);
}
function QC(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && fu(e6, t);
}
function fu(e6, t) {
  return fu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, fu(e6, t);
}
function ev(e6, t, r) {
  return t = tv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function tv(e6) {
  var t = eI(e6, "string");
  return mr(t) == "symbol" ? t : t + "";
}
function eI(e6, t) {
  if (mr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (mr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Fa = (function(e6) {
  function t() {
    return KC(this, t), YC(this, t, arguments);
  }
  return QC(t, e6), VC(t, [{ key: "render", value: function() {
    var n = this.props, i = n.offset, a = n.layout, o = n.width, u = n.dataKey, c = n.data, s = n.dataPointFormatter, f = n.xAxis, l = n.yAxis, p = HC(n, LC), h = re(p, false);
    this.props.direction === "x" && f.type !== "number" && Xt();
    var d = c.map(function(v) {
      var y = s(v, u), x = y.x, w = y.y, b = y.value, S = y.errorVal;
      if (!S) return null;
      var g = [], m, O;
      if (Array.isArray(S)) {
        var _ = FC(S, 2);
        m = _[0], O = _[1];
      } else m = O = S;
      if (a === "vertical") {
        var A = f.scale, j = w + i, P = j + o, T = j - o, I = A(b - m), C = A(b + O);
        g.push({ x1: C, y1: P, x2: C, y2: T }), g.push({ x1: I, y1: j, x2: C, y2: j }), g.push({ x1: I, y1: P, x2: I, y2: T });
      } else if (a === "horizontal") {
        var M = l.scale, N = x + i, k = N - o, B = N + o, L = M(b - m), q = M(b + O);
        g.push({ x1: k, y1: q, x2: B, y2: q }), g.push({ x1: N, y1: L, x2: N, y2: q }), g.push({ x1: k, y1: L, x2: B, y2: L });
      }
      return $.createElement(_e, Ri({ className: "recharts-errorBar", key: "bar-".concat(g.map(function(G) {
        return "".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2);
      })) }, h), g.map(function(G) {
        return $.createElement("line", Ri({}, G, { key: "line-".concat(G.x1, "-").concat(G.x2, "-").concat(G.y1, "-").concat(G.y2) }));
      }));
    });
    return $.createElement(_e, { className: "recharts-errorBars" }, d);
  } }]);
})($.Component);
ev(Fa, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" });
ev(Fa, "displayName", "ErrorBar");
function mn(e6) {
  "@babel/helpers - typeof";
  return mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mn(e6);
}
function hf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nt(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hf(Object(r), true).forEach(function(n) {
      tI(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function tI(e6, t, r) {
  return t = rI(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function rI(e6) {
  var t = nI(e6, "string");
  return mn(t) == "symbol" ? t : t + "";
}
function nI(e6, t) {
  if (mn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var rv = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, o = Re(r, ur);
  if (!o) return null;
  var u = ur.defaultProps, c = u !== void 0 ? Nt(Nt({}, u), o.props) : {}, s;
  return o.props && o.props.payload ? s = o.props && o.props.payload : a === "children" ? s = (n || []).reduce(function(f, l) {
    var p = l.item, h = l.props, d = h.sectors || h.data || [];
    return f.concat(d.map(function(v) {
      return { type: o.props.iconType || p.props.legendType, value: v.name, color: v.fill, payload: v };
    }));
  }, []) : s = (n || []).map(function(f) {
    var l = f.item, p = l.type.defaultProps, h = p !== void 0 ? Nt(Nt({}, p), l.props) : {}, d = h.dataKey, v = h.name, y = h.legendType, x = h.hide;
    return { inactive: x, dataKey: d, type: c.iconType || y || "square", color: qc(l), value: v || d, payload: h };
  }), Nt(Nt(Nt({}, c), ur.getWithHeight(o, i)), {}, { payload: s, item: o });
};
function bn(e6) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bn(e6);
}
function df(e6) {
  return uI(e6) || oI(e6) || aI(e6) || iI();
}
function iI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aI(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return pu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pu(e6, t);
  }
}
function oI(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function uI(e6) {
  if (Array.isArray(e6)) return pu(e6);
}
function pu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function vf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function he(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vf(Object(r), true).forEach(function(n) {
      sr(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : vf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function sr(e6, t, r) {
  return t = cI(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function cI(e6) {
  var t = sI(e6, "string");
  return bn(t) == "symbol" ? t : t + "";
}
function sI(e6, t) {
  if (bn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function Qe(e6, t, r) {
  return Z(e6) || Z(t) ? r : we(t) ? ze(e6, t, r) : Y(t) ? t(e6) : r;
}
function tn(e6, t, r, n) {
  var i = oC(e6, function(u) {
    return Qe(u, t);
  });
  if (r === "number") {
    var a = i.filter(function(u) {
      return F(u) || parseFloat(u);
    });
    return a.length ? [Ra(a), ka(a)] : [1 / 0, -1 / 0];
  }
  var o = n ? i.filter(function(u) {
    return !Z(u);
  }) : i;
  return o.map(function(u) {
    return we(u) || u instanceof Date ? u : "";
  });
}
var lI = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, o = -1, u = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (u <= 1) return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6) for (var c = a.range, s = 0; s < u; s++) {
    var f = s > 0 ? i[s - 1].coordinate : i[u - 1].coordinate, l = i[s].coordinate, p = s >= u - 1 ? i[0].coordinate : i[s + 1].coordinate, h = void 0;
    if (Ye(l - f) !== Ye(p - l)) {
      var d = [];
      if (Ye(p - l) === Ye(c[1] - c[0])) {
        h = p;
        var v = l + c[1] - c[0];
        d[0] = Math.min(v, (v + f) / 2), d[1] = Math.max(v, (v + f) / 2);
      } else {
        h = f;
        var y = p + c[1] - c[0];
        d[0] = Math.min(l, (y + l) / 2), d[1] = Math.max(l, (y + l) / 2);
      }
      var x = [Math.min(l, (h + l) / 2), Math.max(l, (h + l) / 2)];
      if (t > x[0] && t <= x[1] || t >= d[0] && t <= d[1]) {
        o = i[s].index;
        break;
      }
    } else {
      var w = Math.min(f, p), b = Math.max(f, p);
      if (t > (w + l) / 2 && t <= (b + l) / 2) {
        o = i[s].index;
        break;
      }
    }
  }
  else for (var S = 0; S < u; S++) if (S === 0 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S > 0 && S < u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2 && t <= (n[S].coordinate + n[S + 1].coordinate) / 2 || S === u - 1 && t > (n[S].coordinate + n[S - 1].coordinate) / 2) {
    o = n[S].index;
    break;
  }
  return o;
}, qc = function(t) {
  var r, n = t, i = n.type.displayName, a = (r = t.type) !== null && r !== void 0 && r.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, o = a.stroke, u = a.fill, c;
  switch (i) {
    case "Line":
      c = o;
      break;
    case "Area":
    case "Radar":
      c = o && o !== "none" ? o : u;
      break;
    default:
      c = u;
      break;
  }
  return c;
}, fI = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a) return {};
  for (var o = {}, u = Object.keys(a), c = 0, s = u.length; c < s; c++) for (var f = a[u[c]].stackGroups, l = Object.keys(f), p = 0, h = l.length; p < h; p++) {
    var d = f[l[p]], v = d.items, y = d.cateAxisId, x = v.filter(function(O) {
      return ft(O.type).indexOf("Bar") >= 0;
    });
    if (x && x.length) {
      var w = x[0].type.defaultProps, b = w !== void 0 ? he(he({}, w), x[0].props) : x[0].props, S = b.barSize, g = b[y];
      o[g] || (o[g] = []);
      var m = Z(S) ? r : S;
      o[g].push({ item: x[0], stackList: x.slice(1), barSize: Z(m) ? void 0 : Ze(m, n, 0) });
    }
  }
  return o;
}, pI = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, o = a === void 0 ? [] : a, u = t.maxBarSize, c = o.length;
  if (c < 1) return null;
  var s = Ze(r, i, 0, true), f, l = [];
  if (o[0].barSize === +o[0].barSize) {
    var p = false, h = i / c, d = o.reduce(function(S, g) {
      return S + g.barSize || 0;
    }, 0);
    d += (c - 1) * s, d >= i && (d -= (c - 1) * s, s = 0), d >= i && h > 0 && (p = true, h *= 0.9, d = c * h);
    var v = (i - d) / 2 >> 0, y = { offset: v - s, size: 0 };
    f = o.reduce(function(S, g) {
      var m = { item: g.item, position: { offset: y.offset + y.size + s, size: p ? h : g.barSize } }, O = [].concat(df(S), [m]);
      return y = O[O.length - 1].position, g.stackList && g.stackList.length && g.stackList.forEach(function(_) {
        O.push({ item: _, position: y });
      }), O;
    }, l);
  } else {
    var x = Ze(n, i, 0, true);
    i - 2 * x - (c - 1) * s <= 0 && (s = 0);
    var w = (i - 2 * x - (c - 1) * s) / c;
    w > 1 && (w >>= 0);
    var b = u === +u ? Math.min(w, u) : w;
    f = o.reduce(function(S, g, m) {
      var O = [].concat(df(S), [{ item: g.item, position: { offset: x + (w + s) * m + (w - b) / 2, size: b } }]);
      return g.stackList && g.stackList.length && g.stackList.forEach(function(_) {
        O.push({ item: _, position: O[O.length - 1].position });
      }), O;
    }, l);
  }
  return f;
}, hI = function(t, r, n, i) {
  var a = n.children, o = n.width, u = n.margin, c = o - (u.left || 0) - (u.right || 0), s = rv({ children: a, legendWidth: c });
  if (s) {
    var f = i || {}, l = f.width, p = f.height, h = s.align, d = s.verticalAlign, v = s.layout;
    if ((v === "vertical" || v === "horizontal" && d === "middle") && h !== "center" && F(t[h])) return he(he({}, t), {}, sr({}, h, t[h] + (l || 0)));
    if ((v === "horizontal" || v === "vertical" && h === "center") && d !== "middle" && F(t[d])) return he(he({}, t), {}, sr({}, d, t[d] + (p || 0)));
  }
  return t;
}, dI = function(t, r, n) {
  return Z(r) ? true : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : true;
}, nv = function(t, r, n, i, a) {
  var o = r.props.children, u = Je(o, Fa).filter(function(s) {
    return dI(i, a, s.props.direction);
  });
  if (u && u.length) {
    var c = u.map(function(s) {
      return s.props.dataKey;
    });
    return t.reduce(function(s, f) {
      var l = Qe(f, n);
      if (Z(l)) return s;
      var p = Array.isArray(l) ? [Ra(l), ka(l)] : [l, l], h = c.reduce(function(d, v) {
        var y = Qe(f, v, 0), x = p[0] - Math.abs(Array.isArray(y) ? y[0] : y), w = p[1] + Math.abs(Array.isArray(y) ? y[1] : y);
        return [Math.min(x, d[0]), Math.max(w, d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(h[0], s[0]), Math.max(h[1], s[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, vI = function(t, r, n, i, a) {
  var o = r.map(function(u) {
    return nv(t, u, n, a, i);
  }).filter(function(u) {
    return !Z(u);
  });
  return o && o.length ? o.reduce(function(u, c) {
    return [Math.min(u[0], c[0]), Math.max(u[1], c[1])];
  }, [1 / 0, -1 / 0]) : null;
}, iv = function(t, r, n, i, a) {
  var o = r.map(function(c) {
    var s = c.props.dataKey;
    return n === "number" && s && nv(t, c, s, i) || tn(t, s, n, a);
  });
  if (n === "number") return o.reduce(function(c, s) {
    return [Math.min(c[0], s[0]), Math.max(c[1], s[1])];
  }, [1 / 0, -1 / 0]);
  var u = {};
  return o.reduce(function(c, s) {
    for (var f = 0, l = s.length; f < l; f++) u[s[f]] || (u[s[f]] = true, c.push(s[f]));
    return c;
  }, []);
}, av = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, IF = function(t, r, n, i) {
  if (i) return t.map(function(c) {
    return c.coordinate;
  });
  var a, o, u = t.map(function(c) {
    return c.coordinate === r && (a = true), c.coordinate === n && (o = true), c.coordinate;
  });
  return a || u.push(r), o || u.push(n), u;
}, Wt = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, o = t.type, u = t.range, c = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, s = (r || n) && o === "category" && i.bandwidth ? i.bandwidth() / c : 0;
  if (s = t.axisType === "angleAxis" && (u == null ? void 0 : u.length) >= 2 ? Ye(u[0] - u[1]) * 2 * s : s, r && (t.ticks || t.niceTicks)) {
    var f = (t.ticks || t.niceTicks).map(function(l) {
      var p = a ? a.indexOf(l) : l;
      return { coordinate: i(p) + s, value: l, offset: s };
    });
    return f.filter(function(l) {
      return !Fn(l.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(l, p) {
    return { coordinate: i(l) + s, value: l, index: p, offset: s };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(l) {
    return { coordinate: i(l) + s, value: l, offset: s };
  }) : i.domain().map(function(l, p) {
    return { coordinate: i(l) + s, value: a ? a[l] : l, index: p, offset: s };
  });
}, mo = /* @__PURE__ */ new WeakMap(), ni = function(t, r) {
  if (typeof r != "function") return t;
  mo.has(t) || mo.set(t, /* @__PURE__ */ new WeakMap());
  var n = mo.get(t);
  if (n.has(r)) return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, ov = function(t, r, n) {
  var i = t.scale, a = t.type, o = t.layout, u = t.axisType;
  if (i === "auto") return o === "radial" && u === "radiusAxis" ? { scale: fn(), realScaleType: "band" } : o === "radial" && u === "angleAxis" ? { scale: Ci(), realScaleType: "linear" } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? { scale: en(), realScaleType: "point" } : a === "category" ? { scale: fn(), realScaleType: "band" } : { scale: Ci(), realScaleType: "linear" };
  if (Gt(i)) {
    var c = "scale".concat(Sa(i));
    return { scale: (cf[c] || en)(), realScaleType: cf[c] ? c : "point" };
  }
  return Y(i) ? { scale: i } : { scale: en(), realScaleType: "point" };
}, yf = 1e-4, uv = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - yf, o = Math.max(i[0], i[1]) + yf, u = t(r[0]), c = t(r[n - 1]);
    (u < a || u > o || c < a || c > o) && t.domain([r[0], r[n - 1]]);
  }
}, yI = function(t, r) {
  if (!t) return null;
  for (var n = 0, i = t.length; n < i; n++) if (t[n].item === r) return t[n].position;
  return null;
}, gI = function(t, r) {
  if (!r || r.length !== 2 || !F(r[0]) || !F(r[1])) return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!F(t[0]) || t[0] < n) && (a[0] = n), (!F(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, mI = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0, u = 0; u < r; ++u) {
    var c = Fn(t[u][n][1]) ? t[u][n][0] : t[u][n][1];
    c >= 0 ? (t[u][n][0] = a, t[u][n][1] = a + c, a = t[u][n][1]) : (t[u][n][0] = o, t[u][n][1] = o + c, o = t[u][n][1]);
  }
}, bI = function(t) {
  var r = t.length;
  if (!(r <= 0)) for (var n = 0, i = t[0].length; n < i; ++n) for (var a = 0, o = 0; o < r; ++o) {
    var u = Fn(t[o][n][1]) ? t[o][n][0] : t[o][n][1];
    u >= 0 ? (t[o][n][0] = a, t[o][n][1] = a + u, a = t[o][n][1]) : (t[o][n][0] = 0, t[o][n][1] = 0);
  }
}, xI = { sign: mI, expand: Rx, none: lr, silhouette: Bx, wiggle: Lx, positive: bI }, wI = function(t, r, n) {
  var i = r.map(function(u) {
    return u.props.dataKey;
  }), a = xI[n], o = kx().keys(i).value(function(u, c) {
    return +Qe(u, c, 0);
  }).order(Ro).offset(a);
  return o(t);
}, OI = function(t, r, n, i, a, o) {
  if (!t) return null;
  var u = o ? r.reverse() : r, c = {}, s = u.reduce(function(l, p) {
    var h, d = (h = p.type) !== null && h !== void 0 && h.defaultProps ? he(he({}, p.type.defaultProps), p.props) : p.props, v = d.stackId, y = d.hide;
    if (y) return l;
    var x = d[n], w = l[x] || { hasStack: false, stackGroups: {} };
    if (we(v)) {
      var b = w.stackGroups[v] || { numericAxisId: n, cateAxisId: i, items: [] };
      b.items.push(p), w.hasStack = true, w.stackGroups[v] = b;
    } else w.stackGroups[Oa("_stackId_")] = { numericAxisId: n, cateAxisId: i, items: [p] };
    return he(he({}, l), {}, sr({}, x, w));
  }, c), f = {};
  return Object.keys(s).reduce(function(l, p) {
    var h = s[p];
    if (h.hasStack) {
      var d = {};
      h.stackGroups = Object.keys(h.stackGroups).reduce(function(v, y) {
        var x = h.stackGroups[y];
        return he(he({}, v), {}, sr({}, y, { numericAxisId: n, cateAxisId: i, items: x.items, stackedData: wI(t, x.items, a) }));
      }, d);
    }
    return he(he({}, l), {}, sr({}, p, h));
  }, f);
}, cv = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, o = r.originalDomain, u = r.allowDecimals, c = n || r.scale;
  if (c !== "auto" && c !== "linear") return null;
  if (a && i === "number" && o && (o[0] === "auto" || o[1] === "auto")) {
    var s = t.domain();
    if (!s.length) return null;
    var f = kC(s, a, u);
    return t.domain([Ra(f), ka(f)]), { niceTicks: f };
  }
  if (a && i === "number") {
    var l = t.domain(), p = RC(l, a, u);
    return { niceTicks: p };
  }
  return null;
};
function NF(e6) {
  var t = e6.axis, r = e6.ticks, n = e6.bandSize, i = e6.entry, a = e6.index, o = e6.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Z(i[t.dataKey])) {
      var u = si(r, "value", i[t.dataKey]);
      if (u) return u.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var c = Qe(i, Z(o) ? t.dataKey : o);
  return Z(c) ? null : t.scale(c);
}
var gf = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, o = t.entry, u = t.index;
  if (r.type === "category") return n[u] ? n[u].coordinate + i : null;
  var c = Qe(o, r.dataKey, r.domain[u]);
  return Z(c) ? null : r.scale(c) - a / 2 + i;
}, SI = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, _I = function(t, r) {
  var n, i = (n = t.type) !== null && n !== void 0 && n.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, a = i.stackId;
  if (we(a)) {
    var o = r[a];
    if (o) {
      var u = o.items.indexOf(t);
      return u >= 0 ? o.stackedData[u] : null;
    }
  }
  return null;
}, AI = function(t) {
  return t.reduce(function(r, n) {
    return [Ra(n.concat([r[0]]).filter(F)), ka(n.concat([r[1]]).filter(F))];
  }, [1 / 0, -1 / 0]);
}, sv = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var o = t[a], u = o.stackedData, c = u.reduce(function(s, f) {
      var l = AI(f.slice(r, n + 1));
      return [Math.min(s[0], l[0]), Math.max(s[1], l[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(c[0], i[0]), Math.max(c[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, mf = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, bf = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, hu = function(t, r, n) {
  if (Y(t)) return t(r, n);
  if (!Array.isArray(t)) return r;
  var i = [];
  if (F(t[0])) i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (mf.test(t[0])) {
    var a = +mf.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Y(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (F(t[1])) i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (bf.test(t[1])) {
    var o = +bf.exec(t[1])[1];
    i[1] = r[1] + o;
  } else Y(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, Li = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0) return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = gc(r, function(l) {
      return l.coordinate;
    }), o = 1 / 0, u = 1, c = a.length; u < c; u++) {
      var s = a[u], f = a[u - 1];
      o = Math.min((s.coordinate || 0) - (f.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return n ? void 0 : 0;
}, xf = function(t, r, n) {
  return !t || !t.length || Wc(t, ze(n, "type.defaultProps.domain")) ? r : t;
}, lv = function(t, r) {
  var n = t.type.defaultProps ? he(he({}, t.type.defaultProps), t.props) : t.props, i = n.dataKey, a = n.name, o = n.unit, u = n.formatter, c = n.tooltipType, s = n.chartType, f = n.hide;
  return he(he({}, re(t, false)), {}, { dataKey: i, unit: o, formatter: u, name: a || i, color: qc(t), value: Qe(r, i), type: c, payload: r, chartType: s, hide: f });
};
function xn(e6) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xn(e6);
}
function wf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ct(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wf(Object(r), true).forEach(function(n) {
      fv(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : wf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function fv(e6, t, r) {
  return t = PI(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function PI(e6) {
  var t = $I(e6, "string");
  return xn(t) == "symbol" ? t : t + "";
}
function $I(e6, t) {
  if (xn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (xn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function TI(e6, t) {
  return CI(e6) || MI(e6, t) || jI(e6, t) || EI();
}
function EI() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jI(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Of(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Of(e6, t);
  }
}
function Of(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function MI(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function CI(e6) {
  if (Array.isArray(e6)) return e6;
}
var Fi = Math.PI / 180, II = function(t) {
  return t * 180 / Math.PI;
}, $e = function(t, r, n, i) {
  return { x: t + Math.cos(-Fi * i) * n, y: r + Math.sin(-Fi * i) * n };
}, NI = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, DF = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.startAngle, s = t.endAngle, f = Ze(t.cx, o, o / 2), l = Ze(t.cy, u, u / 2), p = NI(o, u, n), h = Ze(t.innerRadius, p, 0), d = Ze(t.outerRadius, p, p * 0.8), v = Object.keys(r);
  return v.reduce(function(y, x) {
    var w = r[x], b = w.domain, S = w.reversed, g;
    if (Z(w.range)) i === "angleAxis" ? g = [c, s] : i === "radiusAxis" && (g = [h, d]), S && (g = [g[1], g[0]]);
    else {
      g = w.range;
      var m = g, O = TI(m, 2);
      c = O[0], s = O[1];
    }
    var _ = ov(w, a), A = _.realScaleType, j = _.scale;
    j.domain(b).range(g), uv(j);
    var P = cv(j, ct(ct({}, w), {}, { realScaleType: A })), T = ct(ct(ct({}, w), P), {}, { range: g, radius: d, realScaleType: A, scale: j, cx: f, cy: l, innerRadius: h, outerRadius: d, startAngle: c, endAngle: s });
    return ct(ct({}, y), {}, fv({}, x, T));
  }, {});
}, DI = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - o, 2));
}, kI = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, o = r.cy, u = DI({ x: n, y: i }, { x: a, y: o });
  if (u <= 0) return { radius: u };
  var c = (n - a) / u, s = Math.acos(c);
  return i > o && (s = 2 * Math.PI - s), { radius: u, angle: II(s), angleInRadian: s };
}, RI = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), o = Math.min(i, a);
  return { startAngle: r - o * 360, endAngle: n - o * 360 };
}, BI = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), o = Math.floor(i / 360), u = Math.min(a, o);
  return t + u * 360;
}, Sf = function(t, r) {
  var n = t.x, i = t.y, a = kI({ x: n, y: i }, r), o = a.radius, u = a.angle, c = r.innerRadius, s = r.outerRadius;
  if (o < c || o > s) return false;
  if (o === 0) return true;
  var f = RI(r), l = f.startAngle, p = f.endAngle, h = u, d;
  if (l <= p) {
    for (; h > p; ) h -= 360;
    for (; h < l; ) h += 360;
    d = h >= l && h <= p;
  } else {
    for (; h > l; ) h -= 360;
    for (; h < p; ) h += 360;
    d = h >= p && h <= l;
  }
  return d ? ct(ct({}, r), {}, { radius: o, angle: BI(h, r) }) : null;
}, kF = function(t) {
  return !R.isValidElement(t) && !Y(t) && typeof t != "boolean" ? t.className : "";
};
function wn(e6) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wn(e6);
}
var LI = ["offset"];
function FI(e6) {
  return qI(e6) || zI(e6) || UI(e6) || WI();
}
function WI() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UI(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return du(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return du(e6, t);
  }
}
function zI(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function qI(e6) {
  if (Array.isArray(e6)) return du(e6);
}
function du(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function HI(e6, t) {
  if (e6 == null) return {};
  var r = GI(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function GI(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function _f(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xe(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _f(Object(r), true).forEach(function(n) {
      KI(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : _f(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function KI(e6, t, r) {
  return t = XI(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function XI(e6) {
  var t = VI(e6, "string");
  return wn(t) == "symbol" ? t : t + "";
}
function VI(e6, t) {
  if (wn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (wn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function On() {
  return On = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, On.apply(this, arguments);
}
var YI = function(t) {
  var r = t.value, n = t.formatter, i = Z(t.children) ? r : t.children;
  return Y(n) ? n(i) : i;
}, ZI = function(t, r) {
  var n = Ye(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, JI = function(t, r, n) {
  var i = t.position, a = t.viewBox, o = t.offset, u = t.className, c = a, s = c.cx, f = c.cy, l = c.innerRadius, p = c.outerRadius, h = c.startAngle, d = c.endAngle, v = c.clockWise, y = (l + p) / 2, x = ZI(h, d), w = x >= 0 ? 1 : -1, b, S;
  i === "insideStart" ? (b = h + w * o, S = v) : i === "insideEnd" ? (b = d - w * o, S = !v) : i === "end" && (b = d + w * o, S = v), S = x <= 0 ? S : !S;
  var g = $e(s, f, y, b), m = $e(s, f, y, b + (S ? 1 : -1) * 359), O = "M".concat(g.x, ",").concat(g.y, `
    A`).concat(y, ",").concat(y, ",0,1,").concat(S ? 0 : 1, `,
    `).concat(m.x, ",").concat(m.y), _ = Z(t.id) ? Oa("recharts-radial-line-") : t.id;
  return $.createElement("text", On({}, n, { dominantBaseline: "central", className: ee("recharts-radial-bar-label", u) }), $.createElement("defs", null, $.createElement("path", { id: _, d: O })), $.createElement("textPath", { xlinkHref: "#".concat(_) }, r));
}, QI = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, o = a.cx, u = a.cy, c = a.innerRadius, s = a.outerRadius, f = a.startAngle, l = a.endAngle, p = (f + l) / 2;
  if (i === "outside") {
    var h = $e(o, u, s + n, p), d = h.x, v = h.y;
    return { x: d, y: v, textAnchor: d >= o ? "start" : "end", verticalAnchor: "middle" };
  }
  if (i === "center") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "middle" };
  if (i === "centerTop") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "start" };
  if (i === "centerBottom") return { x: o, y: u, textAnchor: "middle", verticalAnchor: "end" };
  var y = (c + s) / 2, x = $e(o, u, y, p), w = x.x, b = x.y;
  return { x: w, y: b, textAnchor: "middle", verticalAnchor: "middle" };
}, e22 = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, o = r, u = o.x, c = o.y, s = o.width, f = o.height, l = f >= 0 ? 1 : -1, p = l * i, h = l > 0 ? "end" : "start", d = l > 0 ? "start" : "end", v = s >= 0 ? 1 : -1, y = v * i, x = v > 0 ? "end" : "start", w = v > 0 ? "start" : "end";
  if (a === "top") {
    var b = { x: u + s / 2, y: c - l * i, textAnchor: "middle", verticalAnchor: h };
    return xe(xe({}, b), n ? { height: Math.max(c - n.y, 0), width: s } : {});
  }
  if (a === "bottom") {
    var S = { x: u + s / 2, y: c + f + p, textAnchor: "middle", verticalAnchor: d };
    return xe(xe({}, S), n ? { height: Math.max(n.y + n.height - (c + f), 0), width: s } : {});
  }
  if (a === "left") {
    var g = { x: u - y, y: c + f / 2, textAnchor: x, verticalAnchor: "middle" };
    return xe(xe({}, g), n ? { width: Math.max(g.x - n.x, 0), height: f } : {});
  }
  if (a === "right") {
    var m = { x: u + s + y, y: c + f / 2, textAnchor: w, verticalAnchor: "middle" };
    return xe(xe({}, m), n ? { width: Math.max(n.x + n.width - m.x, 0), height: f } : {});
  }
  var O = n ? { width: s, height: f } : {};
  return a === "insideLeft" ? xe({ x: u + y, y: c + f / 2, textAnchor: w, verticalAnchor: "middle" }, O) : a === "insideRight" ? xe({ x: u + s - y, y: c + f / 2, textAnchor: x, verticalAnchor: "middle" }, O) : a === "insideTop" ? xe({ x: u + s / 2, y: c + p, textAnchor: "middle", verticalAnchor: d }, O) : a === "insideBottom" ? xe({ x: u + s / 2, y: c + f - p, textAnchor: "middle", verticalAnchor: h }, O) : a === "insideTopLeft" ? xe({ x: u + y, y: c + p, textAnchor: w, verticalAnchor: d }, O) : a === "insideTopRight" ? xe({ x: u + s - y, y: c + p, textAnchor: x, verticalAnchor: d }, O) : a === "insideBottomLeft" ? xe({ x: u + y, y: c + f - p, textAnchor: w, verticalAnchor: h }, O) : a === "insideBottomRight" ? xe({ x: u + s - y, y: c + f - p, textAnchor: x, verticalAnchor: h }, O) : Cr(a) && (F(a.x) || Bt(a.x)) && (F(a.y) || Bt(a.y)) ? xe({ x: u + Ze(a.x, s), y: c + Ze(a.y, f), textAnchor: "end", verticalAnchor: "end" }, O) : xe({ x: u + s / 2, y: c + f / 2, textAnchor: "middle", verticalAnchor: "middle" }, O);
}, t2 = function(t) {
  return "cx" in t && F(t.cx);
};
function Ee(e6) {
  var t = e6.offset, r = t === void 0 ? 5 : t, n = HI(e6, LI), i = xe({ offset: r }, n), a = i.viewBox, o = i.position, u = i.value, c = i.children, s = i.content, f = i.className, l = f === void 0 ? "" : f, p = i.textBreakAll;
  if (!a || Z(u) && Z(c) && !R.isValidElement(s) && !Y(s)) return null;
  if (R.isValidElement(s)) return R.cloneElement(s, i);
  var h;
  if (Y(s)) {
    if (h = R.createElement(s, i), R.isValidElement(h)) return h;
  } else h = YI(i);
  var d = t2(a), v = re(i, true);
  if (d && (o === "insideStart" || o === "insideEnd" || o === "end")) return JI(i, h, v);
  var y = d ? QI(i) : e22(i);
  return $.createElement(Ai, On({ className: ee("recharts-label", l) }, v, y, { breakAll: p }), h);
}
Ee.displayName = "Label";
var pv = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, o = t.endAngle, u = t.r, c = t.radius, s = t.innerRadius, f = t.outerRadius, l = t.x, p = t.y, h = t.top, d = t.left, v = t.width, y = t.height, x = t.clockWise, w = t.labelViewBox;
  if (w) return w;
  if (F(v) && F(y)) {
    if (F(l) && F(p)) return { x: l, y: p, width: v, height: y };
    if (F(h) && F(d)) return { x: h, y: d, width: v, height: y };
  }
  return F(l) && F(p) ? { x: l, y: p, width: 0, height: 0 } : F(r) && F(n) ? { cx: r, cy: n, startAngle: a || i || 0, endAngle: o || i || 0, innerRadius: s || 0, outerRadius: f || c || u || 0, clockWise: x } : t.viewBox ? t.viewBox : {};
}, r2 = function(t, r) {
  return t ? t === true ? $.createElement(Ee, { key: "label-implicit", viewBox: r }) : we(t) ? $.createElement(Ee, { key: "label-implicit", viewBox: r, value: t }) : R.isValidElement(t) ? t.type === Ee ? R.cloneElement(t, { key: "label-implicit", viewBox: r }) : $.createElement(Ee, { key: "label-implicit", content: t, viewBox: r }) : Y(t) ? $.createElement(Ee, { key: "label-implicit", content: t, viewBox: r }) : Cr(t) ? $.createElement(Ee, On({ viewBox: r }, t, { key: "label-implicit" })) : null : null;
}, n2 = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!t || !t.children && n && !t.label) return null;
  var i = t.children, a = pv(t), o = Je(i, Ee).map(function(c, s) {
    return R.cloneElement(c, { viewBox: r || a, key: "label-".concat(s) });
  });
  if (!n) return o;
  var u = r2(t.label, r || a);
  return [u].concat(FI(o));
};
Ee.parseViewBox = pv;
Ee.renderCallByParent = n2;
function i2(e6) {
  var t = e6 == null ? 0 : e6.length;
  return t ? e6[t - 1] : void 0;
}
var a2 = i2;
const o2 = ue(a2);
function Sn(e6) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sn(e6);
}
var u2 = ["valueAccessor"], c2 = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function s2(e6) {
  return h2(e6) || p2(e6) || f2(e6) || l2();
}
function l2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function f2(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return vu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vu(e6, t);
  }
}
function p2(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function h2(e6) {
  if (Array.isArray(e6)) return vu(e6);
}
function vu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function Wi() {
  return Wi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Wi.apply(this, arguments);
}
function Af(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pf(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Af(Object(r), true).forEach(function(n) {
      d2(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Af(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function d2(e6, t, r) {
  return t = v2(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function v2(e6) {
  var t = y2(e6, "string");
  return Sn(t) == "symbol" ? t : t + "";
}
function y2(e6, t) {
  if (Sn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function $f(e6, t) {
  if (e6 == null) return {};
  var r = g2(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function g2(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
var m2 = function(t) {
  return Array.isArray(t.value) ? o2(t.value) : t.value;
};
function Ht(e6) {
  var t = e6.valueAccessor, r = t === void 0 ? m2 : t, n = $f(e6, u2), i = n.data, a = n.dataKey, o = n.clockWise, u = n.id, c = n.textBreakAll, s = $f(n, c2);
  return !i || !i.length ? null : $.createElement(_e, { className: "recharts-label-list" }, i.map(function(f, l) {
    var p = Z(a) ? r(f, l) : Qe(f && f.payload, a), h = Z(u) ? {} : { id: "".concat(u, "-").concat(l) };
    return $.createElement(Ee, Wi({}, re(f, true), s, h, { parentViewBox: f.parentViewBox, value: p, textBreakAll: c, viewBox: Ee.parseViewBox(Z(o) ? f : Pf(Pf({}, f), {}, { clockWise: o })), key: "label-".concat(l), index: l }));
  }));
}
Ht.displayName = "LabelList";
function b2(e6, t) {
  return e6 ? e6 === true ? $.createElement(Ht, { key: "labelList-implicit", data: t }) : $.isValidElement(e6) || Y(e6) ? $.createElement(Ht, { key: "labelList-implicit", data: t, content: e6 }) : Cr(e6) ? $.createElement(Ht, Wi({ data: t }, e6, { key: "labelList-implicit" })) : null : null;
}
function x2(e6, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
  if (!e6 || !e6.children && r && !e6.label) return null;
  var n = e6.children, i = Je(n, Ht).map(function(o, u) {
    return R.cloneElement(o, { data: t, key: "labelList-".concat(u) });
  });
  if (!r) return i;
  var a = b2(e6.label, t);
  return [a].concat(s2(i));
}
Ht.renderCallByParent = x2;
function _n(e6) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _n(e6);
}
function yu() {
  return yu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, yu.apply(this, arguments);
}
function Tf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ef(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tf(Object(r), true).forEach(function(n) {
      w2(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Tf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function w2(e6, t, r) {
  return t = O2(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function O2(e6) {
  var t = S2(e6, "string");
  return _n(t) == "symbol" ? t : t + "";
}
function S2(e6, t) {
  if (_n(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (_n(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var _2 = function(t, r) {
  var n = Ye(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, ii = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, o = t.sign, u = t.isExternal, c = t.cornerRadius, s = t.cornerIsExternal, f = c * (u ? 1 : -1) + i, l = Math.asin(c / f) / Fi, p = s ? a : a + o * l, h = $e(r, n, f, p), d = $e(r, n, i, p), v = s ? a - o * l : a, y = $e(r, n, f * Math.cos(l * Fi), v);
  return { center: h, circleTangency: d, lineTangency: y, theta: l };
}, hv = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.startAngle, u = t.endAngle, c = _2(o, u), s = o + c, f = $e(r, n, a, o), l = $e(r, n, a, s), p = "M ".concat(f.x, ",").concat(f.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(c) > 180), ",").concat(+(o > s), `,
    `).concat(l.x, ",").concat(l.y, `
  `);
  if (i > 0) {
    var h = $e(r, n, i, o), d = $e(r, n, i, s);
    p += "L ".concat(d.x, ",").concat(d.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(c) > 180), ",").concat(+(o <= s), `,
            `).concat(h.x, ",").concat(h.y, " Z");
  } else p += "L ".concat(r, ",").concat(n, " Z");
  return p;
}, A2 = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, o = t.cornerRadius, u = t.forceCornerRadius, c = t.cornerIsExternal, s = t.startAngle, f = t.endAngle, l = Ye(f - s), p = ii({ cx: r, cy: n, radius: a, angle: s, sign: l, cornerRadius: o, cornerIsExternal: c }), h = p.circleTangency, d = p.lineTangency, v = p.theta, y = ii({ cx: r, cy: n, radius: a, angle: f, sign: -l, cornerRadius: o, cornerIsExternal: c }), x = y.circleTangency, w = y.lineTangency, b = y.theta, S = c ? Math.abs(s - f) : Math.abs(s - f) - v - b;
  if (S < 0) return u ? "M ".concat(d.x, ",").concat(d.y, `
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(o * 2, `,0
        a`).concat(o, ",").concat(o, ",0,0,1,").concat(-o * 2, `,0
      `) : hv({ cx: r, cy: n, innerRadius: i, outerRadius: a, startAngle: s, endAngle: f });
  var g = "M ".concat(d.x, ",").concat(d.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(h.x, ",").concat(h.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(S > 180), ",").concat(+(l < 0), ",").concat(x.x, ",").concat(x.y, `
    A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(w.x, ",").concat(w.y, `
  `);
  if (i > 0) {
    var m = ii({ cx: r, cy: n, radius: i, angle: s, sign: l, isExternal: true, cornerRadius: o, cornerIsExternal: c }), O = m.circleTangency, _ = m.lineTangency, A = m.theta, j = ii({ cx: r, cy: n, radius: i, angle: f, sign: -l, isExternal: true, cornerRadius: o, cornerIsExternal: c }), P = j.circleTangency, T = j.lineTangency, I = j.theta, C = c ? Math.abs(s - f) : Math.abs(s - f) - A - I;
    if (C < 0 && o === 0) return "".concat(g, "L").concat(r, ",").concat(n, "Z");
    g += "L".concat(T.x, ",").concat(T.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(P.x, ",").concat(P.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(C > 180), ",").concat(+(l > 0), ",").concat(O.x, ",").concat(O.y, `
      A`).concat(o, ",").concat(o, ",0,0,").concat(+(l < 0), ",").concat(_.x, ",").concat(_.y, "Z");
  } else g += "L".concat(r, ",").concat(n, "Z");
  return g;
}, P2 = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: false, cornerIsExternal: false }, dv = function(t) {
  var r = Ef(Ef({}, P2), t), n = r.cx, i = r.cy, a = r.innerRadius, o = r.outerRadius, u = r.cornerRadius, c = r.forceCornerRadius, s = r.cornerIsExternal, f = r.startAngle, l = r.endAngle, p = r.className;
  if (o < a || f === l) return null;
  var h = ee("recharts-sector", p), d = o - a, v = Ze(u, d, 0, true), y;
  return v > 0 && Math.abs(f - l) < 360 ? y = A2({ cx: n, cy: i, innerRadius: a, outerRadius: o, cornerRadius: Math.min(v, d / 2), forceCornerRadius: c, cornerIsExternal: s, startAngle: f, endAngle: l }) : y = hv({ cx: n, cy: i, innerRadius: a, outerRadius: o, startAngle: f, endAngle: l }), $.createElement("path", yu({}, re(r, true), { className: h, d: y, role: "img" }));
};
function An(e6) {
  "@babel/helpers - typeof";
  return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, An(e6);
}
function gu() {
  return gu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, gu.apply(this, arguments);
}
function jf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mf(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jf(Object(r), true).forEach(function(n) {
      $2(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : jf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function $2(e6, t, r) {
  return t = T2(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function T2(e6) {
  var t = E2(e6, "string");
  return An(t) == "symbol" ? t : t + "";
}
function E2(e6, t) {
  if (An(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (An(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Cf = { curveBasisClosed: Ax, curveBasisOpen: Px, curveBasis: _x, curveBumpX: lx, curveBumpY: fx, curveLinearClosed: $x, curveLinear: Aa, curveMonotoneX: Tx, curveMonotoneY: Ex, curveNatural: jx, curveStep: Mx, curveStepAfter: Ix, curveStepBefore: Cx }, ai = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, Xr = function(t) {
  return t.x;
}, Vr = function(t) {
  return t.y;
}, j2 = function(t, r) {
  if (Y(t)) return t;
  var n = "curve".concat(Sa(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Cf["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Cf[n] || Aa;
}, M2 = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, o = t.baseLine, u = t.layout, c = t.connectNulls, s = c === void 0 ? false : c, f = j2(n, u), l = s ? a.filter(function(v) {
    return ai(v);
  }) : a, p;
  if (Array.isArray(o)) {
    var h = s ? o.filter(function(v) {
      return ai(v);
    }) : o, d = l.map(function(v, y) {
      return Mf(Mf({}, v), {}, { base: h[y] });
    });
    return u === "vertical" ? p = Vn().y(Vr).x1(Xr).x0(function(v) {
      return v.base.x;
    }) : p = Vn().x(Xr).y1(Vr).y0(function(v) {
      return v.base.y;
    }), p.defined(ai).curve(f), p(d);
  }
  return u === "vertical" && F(o) ? p = Vn().y(Vr).x1(Xr).x0(o) : F(o) ? p = Vn().x(Xr).y1(Vr).y0(o) : p = fh().x(Xr).y(Vr), p.defined(ai).curve(f), p(l);
}, If = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i) return null;
  var o = n && n.length ? M2(t) : i;
  return R.createElement("path", gu({}, re(t, false), li(t), { className: ee("recharts-curve", r), d: o, ref: a }));
}, vv = { exports: {} }, C2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", I2 = C2, N2 = I2;
function yv() {
}
function gv() {
}
gv.resetWarningCache = yv;
var D2 = function() {
  function e6(n, i, a, o, u, c) {
    if (c !== N2) {
      var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw s.name = "Invariant Violation", s;
    }
  }
  e6.isRequired = e6;
  function t() {
    return e6;
  }
  var r = { array: e6, bigint: e6, bool: e6, func: e6, number: e6, object: e6, string: e6, symbol: e6, any: e6, arrayOf: t, element: e6, elementType: e6, instanceOf: t, node: e6, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: gv, resetWarningCache: yv };
  return r.PropTypes = r, r;
};
vv.exports = D2();
var k2 = vv.exports;
const te = ue(k2);
var R2 = Object.getOwnPropertyNames, B2 = Object.getOwnPropertySymbols, L2 = Object.prototype.hasOwnProperty;
function Nf(e6, t) {
  return function(n, i, a) {
    return e6(n, i, a) && t(n, i, a);
  };
}
function oi(e6) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object") return e6(r, n, i);
    var a = i.cache, o = a.get(r), u = a.get(n);
    if (o && u) return o === n && u === r;
    a.set(r, n), a.set(n, r);
    var c = e6(r, n, i);
    return a.delete(r), a.delete(n), c;
  };
}
function Df(e6) {
  return R2(e6).concat(B2(e6));
}
var F2 = Object.hasOwn || function(e6, t) {
  return L2.call(e6, t);
};
function Jt(e6, t) {
  return e6 === t || !e6 && !t && e6 !== e6 && t !== t;
}
var W2 = "__v", U2 = "__o", z2 = "_owner", kf = Object.getOwnPropertyDescriptor, Rf = Object.keys;
function q2(e6, t, r) {
  var n = e6.length;
  if (t.length !== n) return false;
  for (; n-- > 0; ) if (!r.equals(e6[n], t[n], n, n, e6, t, r)) return false;
  return true;
}
function H2(e6, t) {
  return Jt(e6.getTime(), t.getTime());
}
function G2(e6, t) {
  return e6.name === t.name && e6.message === t.message && e6.cause === t.cause && e6.stack === t.stack;
}
function K2(e6, t) {
  return e6 === t;
}
function Bf(e6, t, r) {
  var n = e6.size;
  if (n !== t.size) return false;
  if (!n) return true;
  for (var i = new Array(n), a = e6.entries(), o, u, c = 0; (o = a.next()) && !o.done; ) {
    for (var s = t.entries(), f = false, l = 0; (u = s.next()) && !u.done; ) {
      if (i[l]) {
        l++;
        continue;
      }
      var p = o.value, h = u.value;
      if (r.equals(p[0], h[0], c, l, e6, t, r) && r.equals(p[1], h[1], p[0], h[0], e6, t, r)) {
        f = i[l] = true;
        break;
      }
      l++;
    }
    if (!f) return false;
    c++;
  }
  return true;
}
var X2 = Jt;
function V2(e6, t, r) {
  var n = Rf(e6), i = n.length;
  if (Rf(t).length !== i) return false;
  for (; i-- > 0; ) if (!mv(e6, t, r, n[i])) return false;
  return true;
}
function Yr(e6, t, r) {
  var n = Df(e6), i = n.length;
  if (Df(t).length !== i) return false;
  for (var a, o, u; i-- > 0; ) if (a = n[i], !mv(e6, t, r, a) || (o = kf(e6, a), u = kf(t, a), (o || u) && (!o || !u || o.configurable !== u.configurable || o.enumerable !== u.enumerable || o.writable !== u.writable))) return false;
  return true;
}
function Y2(e6, t) {
  return Jt(e6.valueOf(), t.valueOf());
}
function Z2(e6, t) {
  return e6.source === t.source && e6.flags === t.flags;
}
function Lf(e6, t, r) {
  var n = e6.size;
  if (n !== t.size) return false;
  if (!n) return true;
  for (var i = new Array(n), a = e6.values(), o, u; (o = a.next()) && !o.done; ) {
    for (var c = t.values(), s = false, f = 0; (u = c.next()) && !u.done; ) {
      if (!i[f] && r.equals(o.value, u.value, o.value, u.value, e6, t, r)) {
        s = i[f] = true;
        break;
      }
      f++;
    }
    if (!s) return false;
  }
  return true;
}
function J2(e6, t) {
  var r = e6.length;
  if (t.length !== r) return false;
  for (; r-- > 0; ) if (e6[r] !== t[r]) return false;
  return true;
}
function Q2(e6, t) {
  return e6.hostname === t.hostname && e6.pathname === t.pathname && e6.protocol === t.protocol && e6.port === t.port && e6.hash === t.hash && e6.username === t.username && e6.password === t.password;
}
function mv(e6, t, r, n) {
  return (n === z2 || n === U2 || n === W2) && (e6.$$typeof || t.$$typeof) ? true : F2(t, n) && r.equals(e6[n], t[n], n, n, e6, t, r);
}
var eN = "[object Arguments]", tN = "[object Boolean]", rN = "[object Date]", nN = "[object Error]", iN = "[object Map]", aN = "[object Number]", oN = "[object Object]", uN = "[object RegExp]", cN = "[object Set]", sN = "[object String]", lN = "[object URL]", fN = Array.isArray, Ff = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, Wf = Object.assign, pN = Object.prototype.toString.call.bind(Object.prototype.toString);
function hN(e6) {
  var t = e6.areArraysEqual, r = e6.areDatesEqual, n = e6.areErrorsEqual, i = e6.areFunctionsEqual, a = e6.areMapsEqual, o = e6.areNumbersEqual, u = e6.areObjectsEqual, c = e6.arePrimitiveWrappersEqual, s = e6.areRegExpsEqual, f = e6.areSetsEqual, l = e6.areTypedArraysEqual, p = e6.areUrlsEqual;
  return function(d, v, y) {
    if (d === v) return true;
    if (d == null || v == null) return false;
    var x = typeof d;
    if (x !== typeof v) return false;
    if (x !== "object") return x === "number" ? o(d, v, y) : x === "function" ? i(d, v, y) : false;
    var w = d.constructor;
    if (w !== v.constructor) return false;
    if (w === Object) return u(d, v, y);
    if (fN(d)) return t(d, v, y);
    if (Ff != null && Ff(d)) return l(d, v, y);
    if (w === Date) return r(d, v, y);
    if (w === RegExp) return s(d, v, y);
    if (w === Map) return a(d, v, y);
    if (w === Set) return f(d, v, y);
    var b = pN(d);
    return b === rN ? r(d, v, y) : b === uN ? s(d, v, y) : b === iN ? a(d, v, y) : b === cN ? f(d, v, y) : b === oN ? typeof d.then != "function" && typeof v.then != "function" && u(d, v, y) : b === lN ? p(d, v, y) : b === nN ? n(d, v, y) : b === eN ? u(d, v, y) : b === tN || b === aN || b === sN ? c(d, v, y) : false;
  };
}
function dN(e6) {
  var t = e6.circular, r = e6.createCustomConfig, n = e6.strict, i = { areArraysEqual: n ? Yr : q2, areDatesEqual: H2, areErrorsEqual: G2, areFunctionsEqual: K2, areMapsEqual: n ? Nf(Bf, Yr) : Bf, areNumbersEqual: X2, areObjectsEqual: n ? Yr : V2, arePrimitiveWrappersEqual: Y2, areRegExpsEqual: Z2, areSetsEqual: n ? Nf(Lf, Yr) : Lf, areTypedArraysEqual: n ? Yr : J2, areUrlsEqual: Q2 };
  if (r && (i = Wf({}, i, r(i))), t) {
    var a = oi(i.areArraysEqual), o = oi(i.areMapsEqual), u = oi(i.areObjectsEqual), c = oi(i.areSetsEqual);
    i = Wf({}, i, { areArraysEqual: a, areMapsEqual: o, areObjectsEqual: u, areSetsEqual: c });
  }
  return i;
}
function vN(e6) {
  return function(t, r, n, i, a, o, u) {
    return e6(t, r, u);
  };
}
function yN(e6) {
  var t = e6.circular, r = e6.comparator, n = e6.createState, i = e6.equals, a = e6.strict;
  if (n) return function(c, s) {
    var f = n(), l = f.cache, p = l === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : l, h = f.meta;
    return r(c, s, { cache: p, equals: i, meta: h, strict: a });
  };
  if (t) return function(c, s) {
    return r(c, s, { cache: /* @__PURE__ */ new WeakMap(), equals: i, meta: void 0, strict: a });
  };
  var o = { cache: void 0, equals: i, meta: void 0, strict: a };
  return function(c, s) {
    return r(c, s, o);
  };
}
var gN = jt();
jt({ strict: true });
jt({ circular: true });
jt({ circular: true, strict: true });
jt({ createInternalComparator: function() {
  return Jt;
} });
jt({ strict: true, createInternalComparator: function() {
  return Jt;
} });
jt({ circular: true, createInternalComparator: function() {
  return Jt;
} });
jt({ circular: true, createInternalComparator: function() {
  return Jt;
}, strict: true });
function jt(e6) {
  e6 === void 0 && (e6 = {});
  var t = e6.circular, r = t === void 0 ? false : t, n = e6.createInternalComparator, i = e6.createState, a = e6.strict, o = a === void 0 ? false : a, u = dN(e6), c = hN(u), s = n ? n(c) : vN(c);
  return yN({ circular: r, comparator: c, createState: i, equals: s, strict: o });
}
function mN(e6) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e6);
}
function Uf(e6) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e6(a), r = -1) : mN(i);
  };
  requestAnimationFrame(n);
}
function mu(e6) {
  "@babel/helpers - typeof";
  return mu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mu(e6);
}
function bN(e6) {
  return SN(e6) || ON(e6) || wN(e6) || xN();
}
function xN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wN(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return zf(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zf(e6, t);
  }
}
function zf(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function ON(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function SN(e6) {
  if (Array.isArray(e6)) return e6;
}
function _N() {
  var e6 = {}, t = function() {
    return null;
  }, r = false, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length) return;
        var o = a, u = bN(o), c = u[0], s = u.slice(1);
        if (typeof c == "number") {
          Uf(i.bind(null, s), c);
          return;
        }
        i(c), Uf(i.bind(null, s));
        return;
      }
      mu(a) === "object" && (e6 = a, t(e6)), typeof a == "function" && a();
    }
  };
  return { stop: function() {
    r = true;
  }, start: function(a) {
    r = false, n(a);
  }, subscribe: function(a) {
    return t = a, function() {
      t = function() {
        return null;
      };
    };
  } };
}
function Pn(e6) {
  "@babel/helpers - typeof";
  return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pn(e6);
}
function qf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hf(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qf(Object(r), true).forEach(function(n) {
      bv(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function bv(e6, t, r) {
  return t = AN(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function AN(e6) {
  var t = PN(e6, "string");
  return Pn(t) === "symbol" ? t : String(t);
}
function PN(e6, t) {
  if (Pn(e6) !== "object" || e6 === null) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Pn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var $N = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, TN = function(t) {
  return t;
}, EN = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, rn = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return Hf(Hf({}, n), {}, bv({}, i, t(i, r[i])));
  }, {});
}, Gf = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(EN(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
};
function jN(e6, t) {
  return IN(e6) || CN(e6, t) || xv(e6, t) || MN();
}
function MN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function CN(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function IN(e6) {
  if (Array.isArray(e6)) return e6;
}
function NN(e6) {
  return RN(e6) || kN(e6) || xv(e6) || DN();
}
function DN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xv(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return bu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bu(e6, t);
  }
}
function kN(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function RN(e6) {
  if (Array.isArray(e6)) return bu(e6);
}
function bu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
var Ui = 1e-4, wv = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, Ov = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, Kf = function(t, r) {
  return function(n) {
    var i = wv(t, r);
    return Ov(i, n);
  };
}, BN = function(t, r) {
  return function(n) {
    var i = wv(t, r), a = [].concat(NN(i.map(function(o, u) {
      return o * u;
    }).slice(1)), [0]);
    return Ov(a, n);
  };
}, Xf = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0], a = r[1], o = r[2], u = r[3];
  if (r.length === 1) switch (r[0]) {
    case "linear":
      i = 0, a = 0, o = 1, u = 1;
      break;
    case "ease":
      i = 0.25, a = 0.1, o = 0.25, u = 1;
      break;
    case "ease-in":
      i = 0.42, a = 0, o = 1, u = 1;
      break;
    case "ease-out":
      i = 0.42, a = 0, o = 0.58, u = 1;
      break;
    case "ease-in-out":
      i = 0, a = 0, o = 0.58, u = 1;
      break;
    default: {
      var c = r[0].split("(");
      if (c[0] === "cubic-bezier" && c[1].split(")")[0].split(",").length === 4) {
        var s = c[1].split(")")[0].split(",").map(function(y) {
          return parseFloat(y);
        }), f = jN(s, 4);
        i = f[0], a = f[1], o = f[2], u = f[3];
      }
    }
  }
  var l = Kf(i, o), p = Kf(a, u), h = BN(i, o), d = function(x) {
    return x > 1 ? 1 : x < 0 ? 0 : x;
  }, v = function(x) {
    for (var w = x > 1 ? 1 : x, b = w, S = 0; S < 8; ++S) {
      var g = l(b) - w, m = h(b);
      if (Math.abs(g - w) < Ui || m < Ui) return p(b);
      b = d(b - g / m);
    }
    return p(b);
  };
  return v.isStepper = false, v;
}, LN = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, o = t.dt, u = o === void 0 ? 17 : o, c = function(f, l, p) {
    var h = -(f - l) * n, d = p * a, v = p + (h - d) * u / 1e3, y = p * u / 1e3 + f;
    return Math.abs(y - l) < Ui && Math.abs(v) < Ui ? [l, 0] : [y, v];
  };
  return c.isStepper = true, c.dt = u, c;
}, FN = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string") switch (i) {
    case "ease":
    case "ease-in-out":
    case "ease-out":
    case "ease-in":
    case "linear":
      return Xf(i);
    case "spring":
      return LN();
    default:
      if (i.split("(")[0] === "cubic-bezier") return Xf(i);
  }
  return typeof i == "function" ? i : null;
};
function $n(e6) {
  "@babel/helpers - typeof";
  return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $n(e6);
}
function Vf(e6) {
  return zN(e6) || UN(e6) || Sv(e6) || WN();
}
function WN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function UN(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function zN(e6) {
  if (Array.isArray(e6)) return wu(e6);
}
function Yf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pe(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yf(Object(r), true).forEach(function(n) {
      xu(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Yf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function xu(e6, t, r) {
  return t = qN(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function qN(e6) {
  var t = HN(e6, "string");
  return $n(t) === "symbol" ? t : String(t);
}
function HN(e6, t) {
  if ($n(e6) !== "object" || e6 === null) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if ($n(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function GN(e6, t) {
  return VN(e6) || XN(e6, t) || Sv(e6, t) || KN();
}
function KN() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Sv(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return wu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return wu(e6, t);
  }
}
function wu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function XN(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function VN(e6) {
  if (Array.isArray(e6)) return e6;
}
var zi = function(t, r, n) {
  return t + (r - t) * n;
}, Ou = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, YN = function e5(t, r, n) {
  var i = rn(function(a, o) {
    if (Ou(o)) {
      var u = t(o.from, o.to, o.velocity), c = GN(u, 2), s = c[0], f = c[1];
      return Pe(Pe({}, o), {}, { from: s, velocity: f });
    }
    return o;
  }, r);
  return n < 1 ? rn(function(a, o) {
    return Ou(o) ? Pe(Pe({}, o), {}, { velocity: zi(o.velocity, i[a].velocity, n), from: zi(o.from, i[a].from, n) }) : o;
  }, r) : e5(t, i, n - 1);
};
const ZN = function(e6, t, r, n, i) {
  var a = $N(e6, t), o = a.reduce(function(y, x) {
    return Pe(Pe({}, y), {}, xu({}, x, [e6[x], t[x]]));
  }, {}), u = a.reduce(function(y, x) {
    return Pe(Pe({}, y), {}, xu({}, x, { from: e6[x], velocity: 0, to: t[x] }));
  }, {}), c = -1, s, f, l = function() {
    return null;
  }, p = function() {
    return rn(function(x, w) {
      return w.from;
    }, u);
  }, h = function() {
    return !Object.values(u).filter(Ou).length;
  }, d = function(x) {
    s || (s = x);
    var w = x - s, b = w / r.dt;
    u = YN(r, u, b), i(Pe(Pe(Pe({}, e6), t), p())), s = x, h() || (c = requestAnimationFrame(l));
  }, v = function(x) {
    f || (f = x);
    var w = (x - f) / n, b = rn(function(g, m) {
      return zi.apply(void 0, Vf(m).concat([r(w)]));
    }, o);
    if (i(Pe(Pe(Pe({}, e6), t), b)), w < 1) c = requestAnimationFrame(l);
    else {
      var S = rn(function(g, m) {
        return zi.apply(void 0, Vf(m).concat([r(1)]));
      }, o);
      i(Pe(Pe(Pe({}, e6), t), S));
    }
  };
  return l = r.isStepper ? d : v, function() {
    return requestAnimationFrame(l), function() {
      cancelAnimationFrame(c);
    };
  };
};
function br(e6) {
  "@babel/helpers - typeof";
  return br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, br(e6);
}
var JN = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function QN(e6, t) {
  if (e6 == null) return {};
  var r = eD(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function eD(e6, t) {
  if (e6 == null) return {};
  var r = {}, n = Object.keys(e6), i, a;
  for (a = 0; a < n.length; a++) i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e6[i]);
  return r;
}
function bo(e6) {
  return iD(e6) || nD(e6) || rD(e6) || tD();
}
function tD() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rD(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Su(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Su(e6, t);
  }
}
function nD(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function iD(e6) {
  if (Array.isArray(e6)) return Su(e6);
}
function Su(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function Zf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ke(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zf(Object(r), true).forEach(function(n) {
      Jr(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Zf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Jr(e6, t, r) {
  return t = _v(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function aD(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function oD(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, _v(n.key), n);
  }
}
function uD(e6, t, r) {
  return t && oD(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function _v(e6) {
  var t = cD(e6, "string");
  return br(t) === "symbol" ? t : String(t);
}
function cD(e6, t) {
  if (br(e6) !== "object" || e6 === null) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (br(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function sD(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && _u(e6, t);
}
function _u(e6, t) {
  return _u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, _u(e6, t);
}
function lD(e6) {
  var t = fD();
  return function() {
    var n = qi(e6), i;
    if (t) {
      var a = qi(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else i = n.apply(this, arguments);
    return Au(this, i);
  };
}
function Au(e6, t) {
  if (t && (br(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Pu(e6);
}
function Pu(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function fD() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (e6) {
    return false;
  }
}
function qi(e6) {
  return qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, qi(e6);
}
var At = (function(e6) {
  sD(r, e6);
  var t = lD(r);
  function r(n, i) {
    var a;
    aD(this, r), a = t.call(this, n, i);
    var o = a.props, u = o.isActive, c = o.attributeName, s = o.from, f = o.to, l = o.steps, p = o.children, h = o.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind(Pu(a)), a.changeStyle = a.changeStyle.bind(Pu(a)), !u || h <= 0) return a.state = { style: {} }, typeof p == "function" && (a.state = { style: f }), Au(a);
    if (l && l.length) a.state = { style: l[0].style };
    else if (s) {
      if (typeof p == "function") return a.state = { style: s }, Au(a);
      a.state = { style: c ? Jr({}, c, s) : s };
    } else a.state = { style: {} };
    return a;
  }
  return uD(r, [{ key: "componentDidMount", value: function() {
    var i = this.props, a = i.isActive, o = i.canBegin;
    this.mounted = true, !(!a || !o) && this.runAnimation(this.props);
  } }, { key: "componentDidUpdate", value: function(i) {
    var a = this.props, o = a.isActive, u = a.canBegin, c = a.attributeName, s = a.shouldReAnimate, f = a.to, l = a.from, p = this.state.style;
    if (u) {
      if (!o) {
        var h = { style: c ? Jr({}, c, f) : f };
        this.state && p && (c && p[c] !== f || !c && p !== f) && this.setState(h);
        return;
      }
      if (!(gN(i.to, f) && i.canBegin && i.isActive)) {
        var d = !i.canBegin || !i.isActive;
        this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
        var v = d || s ? l : i.to;
        if (this.state && p) {
          var y = { style: c ? Jr({}, c, v) : v };
          (c && p[c] !== v || !c && p !== v) && this.setState(y);
        }
        this.runAnimation(Ke(Ke({}, this.props), {}, { from: v, begin: 0 }));
      }
    }
  } }, { key: "componentWillUnmount", value: function() {
    this.mounted = false;
    var i = this.props.onAnimationEnd;
    this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
  } }, { key: "handleStyleChange", value: function(i) {
    this.changeStyle(i);
  } }, { key: "changeStyle", value: function(i) {
    this.mounted && this.setState({ style: i });
  } }, { key: "runJSAnimation", value: function(i) {
    var a = this, o = i.from, u = i.to, c = i.duration, s = i.easing, f = i.begin, l = i.onAnimationEnd, p = i.onAnimationStart, h = ZN(o, u, FN(s), c, this.changeStyle), d = function() {
      a.stopJSAnimation = h();
    };
    this.manager.start([p, f, d, c, l]);
  } }, { key: "runStepAnimation", value: function(i) {
    var a = this, o = i.steps, u = i.begin, c = i.onAnimationStart, s = o[0], f = s.style, l = s.duration, p = l === void 0 ? 0 : l, h = function(v, y, x) {
      if (x === 0) return v;
      var w = y.duration, b = y.easing, S = b === void 0 ? "ease" : b, g = y.style, m = y.properties, O = y.onAnimationEnd, _ = x > 0 ? o[x - 1] : y, A = m || Object.keys(g);
      if (typeof S == "function" || S === "spring") return [].concat(bo(v), [a.runJSAnimation.bind(a, { from: _.style, to: g, duration: w, easing: S }), w]);
      var j = Gf(A, w, S), P = Ke(Ke(Ke({}, _.style), g), {}, { transition: j });
      return [].concat(bo(v), [P, w, O]).filter(TN);
    };
    return this.manager.start([c].concat(bo(o.reduce(h, [f, Math.max(p, u)])), [i.onAnimationEnd]));
  } }, { key: "runAnimation", value: function(i) {
    this.manager || (this.manager = _N());
    var a = i.begin, o = i.duration, u = i.attributeName, c = i.to, s = i.easing, f = i.onAnimationStart, l = i.onAnimationEnd, p = i.steps, h = i.children, d = this.manager;
    if (this.unSubscribe = d.subscribe(this.handleStyleChange), typeof s == "function" || typeof h == "function" || s === "spring") {
      this.runJSAnimation(i);
      return;
    }
    if (p.length > 1) {
      this.runStepAnimation(i);
      return;
    }
    var v = u ? Jr({}, u, c) : c, y = Gf(Object.keys(v), o, s);
    d.start([f, a, Ke(Ke({}, v), {}, { transition: y }), o, l]);
  } }, { key: "render", value: function() {
    var i = this.props, a = i.children;
    i.begin;
    var o = i.duration;
    i.attributeName, i.easing;
    var u = i.isActive;
    i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
    var c = QN(i, JN), s = R.Children.count(a), f = this.state.style;
    if (typeof a == "function") return a(f);
    if (!u || s === 0 || o <= 0) return a;
    var l = function(h) {
      var d = h.props, v = d.style, y = v === void 0 ? {} : v, x = d.className, w = R.cloneElement(h, Ke(Ke({}, c), {}, { style: Ke(Ke({}, y), f), className: x }));
      return w;
    };
    return s === 1 ? l(R.Children.only(a)) : $.createElement("div", null, R.Children.map(a, function(p) {
      return l(p);
    }));
  } }]), r;
})(R.PureComponent);
At.displayName = "Animate";
At.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: true, canBegin: true, steps: [], onAnimationEnd: function() {
}, onAnimationStart: function() {
} };
At.propTypes = { from: te.oneOfType([te.object, te.string]), to: te.oneOfType([te.object, te.string]), attributeName: te.string, duration: te.number, begin: te.number, easing: te.oneOfType([te.string, te.func]), steps: te.arrayOf(te.shape({ duration: te.number.isRequired, style: te.object.isRequired, easing: te.oneOfType([te.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), te.func]), properties: te.arrayOf("string"), onAnimationEnd: te.func })), children: te.oneOfType([te.node, te.func]), isActive: te.bool, canBegin: te.bool, onAnimationEnd: te.func, shouldReAnimate: te.bool, onAnimationStart: te.func, onAnimationReStart: te.func };
function Tn(e6) {
  "@babel/helpers - typeof";
  return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tn(e6);
}
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Hi.apply(this, arguments);
}
function pD(e6, t) {
  return yD(e6) || vD(e6, t) || dD(e6, t) || hD();
}
function hD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dD(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Jf(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Jf(e6, t);
  }
}
function Jf(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function vD(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function yD(e6) {
  if (Array.isArray(e6)) return e6;
}
function Qf(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ep(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qf(Object(r), true).forEach(function(n) {
      gD(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Qf(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function gD(e6, t, r) {
  return t = mD(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function mD(e6) {
  var t = bD(e6, "string");
  return Tn(t) == "symbol" ? t : t + "";
}
function bD(e6, t) {
  if (Tn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Tn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var tp = function(t, r, n, i, a) {
  var o = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), u = i >= 0 ? 1 : -1, c = n >= 0 ? 1 : -1, s = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, f;
  if (o > 0 && a instanceof Array) {
    for (var l = [0, 0, 0, 0], p = 0, h = 4; p < h; p++) l[p] = a[p] > o ? o : a[p];
    f = "M".concat(t, ",").concat(r + u * l[0]), l[0] > 0 && (f += "A ".concat(l[0], ",").concat(l[0], ",0,0,").concat(s, ",").concat(t + c * l[0], ",").concat(r)), f += "L ".concat(t + n - c * l[1], ",").concat(r), l[1] > 0 && (f += "A ".concat(l[1], ",").concat(l[1], ",0,0,").concat(s, `,
        `).concat(t + n, ",").concat(r + u * l[1])), f += "L ".concat(t + n, ",").concat(r + i - u * l[2]), l[2] > 0 && (f += "A ".concat(l[2], ",").concat(l[2], ",0,0,").concat(s, `,
        `).concat(t + n - c * l[2], ",").concat(r + i)), f += "L ".concat(t + c * l[3], ",").concat(r + i), l[3] > 0 && (f += "A ".concat(l[3], ",").concat(l[3], ",0,0,").concat(s, `,
        `).concat(t, ",").concat(r + i - u * l[3])), f += "Z";
  } else if (o > 0 && a === +a && a > 0) {
    var d = Math.min(o, a);
    f = "M ".concat(t, ",").concat(r + u * d, `
            A `).concat(d, ",").concat(d, ",0,0,").concat(s, ",").concat(t + c * d, ",").concat(r, `
            L `).concat(t + n - c * d, ",").concat(r, `
            A `).concat(d, ",").concat(d, ",0,0,").concat(s, ",").concat(t + n, ",").concat(r + u * d, `
            L `).concat(t + n, ",").concat(r + i - u * d, `
            A `).concat(d, ",").concat(d, ",0,0,").concat(s, ",").concat(t + n - c * d, ",").concat(r + i, `
            L `).concat(t + c * d, ",").concat(r + i, `
            A `).concat(d, ",").concat(d, ",0,0,").concat(s, ",").concat(t, ",").concat(r + i - u * d, " Z");
  } else f = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return f;
}, xD = function(t, r) {
  if (!t || !r) return false;
  var n = t.x, i = t.y, a = r.x, o = r.y, u = r.width, c = r.height;
  if (Math.abs(u) > 0 && Math.abs(c) > 0) {
    var s = Math.min(a, a + u), f = Math.max(a, a + u), l = Math.min(o, o + c), p = Math.max(o, o + c);
    return n >= s && n <= f && i >= l && i <= p;
  }
  return false;
}, wD = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: false, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, Hc = function(t) {
  var r = ep(ep({}, wD), t), n = R.useRef(), i = R.useState(-1), a = pD(i, 2), o = a[0], u = a[1];
  R.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var S = n.current.getTotalLength();
      S && u(S);
    } catch (e6) {
    }
  }, []);
  var c = r.x, s = r.y, f = r.width, l = r.height, p = r.radius, h = r.className, d = r.animationEasing, v = r.animationDuration, y = r.animationBegin, x = r.isAnimationActive, w = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || f !== +f || l !== +l || f === 0 || l === 0) return null;
  var b = ee("recharts-rectangle", h);
  return w ? $.createElement(At, { canBegin: o > 0, from: { width: f, height: l, x: c, y: s }, to: { width: f, height: l, x: c, y: s }, duration: v, animationEasing: d, isActive: w }, function(S) {
    var g = S.width, m = S.height, O = S.x, _ = S.y;
    return $.createElement(At, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: y, duration: v, isActive: x, easing: d }, $.createElement("path", Hi({}, re(r, true), { className: b, d: tp(O, _, g, m, p), ref: n })));
  }) : $.createElement("path", Hi({}, re(r, true), { className: b, d: tp(c, s, f, l, p) }));
};
function $u() {
  return $u = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, $u.apply(this, arguments);
}
var Av = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, o = ee("recharts-dot", a);
  return r === +r && n === +n && i === +i ? R.createElement("circle", $u({}, re(t, false), li(t), { className: o, cx: r, cy: n, r: i })) : null;
};
function En(e6) {
  "@babel/helpers - typeof";
  return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, En(e6);
}
var OD = ["x", "y", "top", "left", "width", "height", "className"];
function Tu() {
  return Tu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Tu.apply(this, arguments);
}
function rp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function SD(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rp(Object(r), true).forEach(function(n) {
      _D(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function _D(e6, t, r) {
  return t = AD(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function AD(e6) {
  var t = PD(e6, "string");
  return En(t) == "symbol" ? t : t + "";
}
function PD(e6, t) {
  if (En(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (En(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function $D(e6, t) {
  if (e6 == null) return {};
  var r = TD(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function TD(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
var ED = function(t, r, n, i, a, o) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(o, ",").concat(r, "h").concat(n);
}, jD = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, o = t.top, u = o === void 0 ? 0 : o, c = t.left, s = c === void 0 ? 0 : c, f = t.width, l = f === void 0 ? 0 : f, p = t.height, h = p === void 0 ? 0 : p, d = t.className, v = $D(t, OD), y = SD({ x: n, y: a, top: u, left: s, width: l, height: h }, v);
  return !F(n) || !F(a) || !F(l) || !F(h) || !F(u) || !F(s) ? null : $.createElement("path", Tu({}, re(y, true), { className: ee("recharts-cross", d), d: ED(n, a, l, h, u, s) }));
}, MD = Dh, CD = MD(Object.getPrototypeOf, Object), ID = CD, ND = yt, DD = ID, kD = gt, RD = "[object Object]", BD = Function.prototype, LD = Object.prototype, Pv = BD.toString, FD = LD.hasOwnProperty, WD = Pv.call(Object);
function UD(e6) {
  if (!kD(e6) || ND(e6) != RD) return false;
  var t = DD(e6);
  if (t === null) return true;
  var r = FD.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Pv.call(r) == WD;
}
var zD = UD;
const qD = ue(zD);
var HD = yt, GD = gt, KD = "[object Boolean]";
function XD(e6) {
  return e6 === true || e6 === false || GD(e6) && HD(e6) == KD;
}
var VD = XD;
const YD = ue(VD);
function jn(e6) {
  "@babel/helpers - typeof";
  return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, jn(e6);
}
function Gi() {
  return Gi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Gi.apply(this, arguments);
}
function ZD(e6, t) {
  return tk(e6) || ek(e6, t) || QD(e6, t) || JD();
}
function JD() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function QD(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return np(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return np(e6, t);
  }
}
function np(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function ek(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function tk(e6) {
  if (Array.isArray(e6)) return e6;
}
function ip(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ap(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ip(Object(r), true).forEach(function(n) {
      rk(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : ip(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function rk(e6, t, r) {
  return t = nk(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function nk(e6) {
  var t = ik(e6, "string");
  return jn(t) == "symbol" ? t : t + "";
}
function ik(e6, t) {
  if (jn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (jn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var op = function(t, r, n, i, a) {
  var o = n - i, u;
  return u = "M ".concat(t, ",").concat(r), u += "L ".concat(t + n, ",").concat(r), u += "L ".concat(t + n - o / 2, ",").concat(r + a), u += "L ".concat(t + n - o / 2 - i, ",").concat(r + a), u += "L ".concat(t, ",").concat(r, " Z"), u;
}, ak = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: false, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" }, ok = function(t) {
  var r = ap(ap({}, ak), t), n = R.useRef(), i = R.useState(-1), a = ZD(i, 2), o = a[0], u = a[1];
  R.useEffect(function() {
    if (n.current && n.current.getTotalLength) try {
      var b = n.current.getTotalLength();
      b && u(b);
    } catch (e6) {
    }
  }, []);
  var c = r.x, s = r.y, f = r.upperWidth, l = r.lowerWidth, p = r.height, h = r.className, d = r.animationEasing, v = r.animationDuration, y = r.animationBegin, x = r.isUpdateAnimationActive;
  if (c !== +c || s !== +s || f !== +f || l !== +l || p !== +p || f === 0 && l === 0 || p === 0) return null;
  var w = ee("recharts-trapezoid", h);
  return x ? $.createElement(At, { canBegin: o > 0, from: { upperWidth: 0, lowerWidth: 0, height: p, x: c, y: s }, to: { upperWidth: f, lowerWidth: l, height: p, x: c, y: s }, duration: v, animationEasing: d, isActive: x }, function(b) {
    var S = b.upperWidth, g = b.lowerWidth, m = b.height, O = b.x, _ = b.y;
    return $.createElement(At, { canBegin: o > 0, from: "0px ".concat(o === -1 ? 1 : o, "px"), to: "".concat(o, "px 0px"), attributeName: "strokeDasharray", begin: y, duration: v, easing: d }, $.createElement("path", Gi({}, re(r, true), { className: w, d: op(O, _, S, g, m), ref: n })));
  }) : $.createElement("g", null, $.createElement("path", Gi({}, re(r, true), { className: w, d: op(c, s, f, l, p) })));
}, uk = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Mn(e6) {
  "@babel/helpers - typeof";
  return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Mn(e6);
}
function ck(e6, t) {
  if (e6 == null) return {};
  var r = sk(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function sk(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function up(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ki(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? up(Object(r), true).forEach(function(n) {
      lk(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : up(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function lk(e6, t, r) {
  return t = fk(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function fk(e6) {
  var t = pk(e6, "string");
  return Mn(t) == "symbol" ? t : t + "";
}
function pk(e6, t) {
  if (Mn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Mn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function hk(e6, t) {
  return Ki(Ki({}, t), e6);
}
function dk(e6, t) {
  return e6 === "symbols";
}
function cp(e6) {
  var t = e6.shapeType, r = e6.elementProps;
  switch (t) {
    case "rectangle":
      return $.createElement(Hc, r);
    case "trapezoid":
      return $.createElement(ok, r);
    case "sector":
      return $.createElement(dv, r);
    case "symbols":
      if (dk(t)) return $.createElement(sc, r);
      break;
    default:
      return null;
  }
}
function vk(e6) {
  return R.isValidElement(e6) ? e6.props : e6;
}
function yk(e6) {
  var t = e6.option, r = e6.shapeType, n = e6.propTransformer, i = n === void 0 ? hk : n, a = e6.activeClassName, o = a === void 0 ? "recharts-active-shape" : a, u = e6.isActive, c = ck(e6, uk), s;
  if (R.isValidElement(t)) s = R.cloneElement(t, Ki(Ki({}, c), vk(t)));
  else if (Y(t)) s = t(c);
  else if (qD(t) && !YD(t)) {
    var f = i(t, c);
    s = $.createElement(cp, { shapeType: r, elementProps: f });
  } else {
    var l = c;
    s = $.createElement(cp, { shapeType: r, elementProps: l });
  }
  return u ? $.createElement(_e, { className: o }, s) : s;
}
function Wa(e6, t) {
  return t != null && "trapezoids" in e6.props;
}
function Ua(e6, t) {
  return t != null && "sectors" in e6.props;
}
function Cn(e6, t) {
  return t != null && "points" in e6.props;
}
function gk(e6, t) {
  var r, n, i = e6.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e6.x === t.x, a = e6.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e6.y === t.y;
  return i && a;
}
function mk(e6, t) {
  var r = e6.endAngle === t.endAngle, n = e6.startAngle === t.startAngle;
  return r && n;
}
function bk(e6, t) {
  var r = e6.x === t.x, n = e6.y === t.y, i = e6.z === t.z;
  return r && n && i;
}
function xk(e6, t) {
  var r;
  return Wa(e6, t) ? r = gk : Ua(e6, t) ? r = mk : Cn(e6, t) && (r = bk), r;
}
function wk(e6, t) {
  var r;
  return Wa(e6, t) ? r = "trapezoids" : Ua(e6, t) ? r = "sectors" : Cn(e6, t) && (r = "points"), r;
}
function Ok(e6, t) {
  if (Wa(e6, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (Ua(e6, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return Cn(e6, t) ? t.payload : {};
}
function Sk(e6) {
  var t = e6.activeTooltipItem, r = e6.graphicalItem, n = e6.itemData, i = wk(r, t), a = Ok(r, t), o = n.filter(function(c, s) {
    var f = Wc(a, c), l = r.props[i].filter(function(d) {
      var v = xk(r, t);
      return v(d, t);
    }), p = r.props[i].indexOf(l[l.length - 1]), h = s === p;
    return f && h;
  }), u = n.indexOf(o[o.length - 1]);
  return u;
}
var _k = Math.ceil, Ak = Math.max;
function Pk(e6, t, r, n) {
  for (var i = -1, a = Ak(_k((t - e6) / (r || 1)), 0), o = Array(a); a--; ) o[n ? a : ++i] = e6, e6 += r;
  return o;
}
var $k = Pk, Tk = ed, sp = 1 / 0, Ek = 17976931348623157e292;
function jk(e6) {
  if (!e6) return e6 === 0 ? e6 : 0;
  if (e6 = Tk(e6), e6 === sp || e6 === -sp) {
    var t = e6 < 0 ? -1 : 1;
    return t * Ek;
  }
  return e6 === e6 ? e6 : 0;
}
var $v = jk, Mk = $k, Ck = Ea, xo = $v;
function Ik(e6) {
  return function(t, r, n) {
    return n && typeof n != "number" && Ck(t, r, n) && (r = n = void 0), t = xo(t), r === void 0 ? (r = t, t = 0) : r = xo(r), n = n === void 0 ? t < r ? 1 : -1 : xo(n), Mk(t, r, n, e6);
  };
}
var Nk = Ik, Dk = Nk, kk = Dk(), Rk = kk;
const Xi = ue(Rk);
function In(e6) {
  "@babel/helpers - typeof";
  return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, In(e6);
}
function lp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fp(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lp(Object(r), true).forEach(function(n) {
      Tv(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : lp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Tv(e6, t, r) {
  return t = Bk(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Bk(e6) {
  var t = Lk(e6, "string");
  return In(t) == "symbol" ? t : t + "";
}
function Lk(e6, t) {
  if (In(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (In(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Fk = ["Webkit", "Moz", "O", "ms"], Wk = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = Fk.reduce(function(a, o) {
    return fp(fp({}, a), {}, Tv({}, o + n, r));
  }, {});
  return i[t] = r, i;
};
function xr(e6) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xr(e6);
}
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Vi.apply(this, arguments);
}
function pp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wo(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pp(Object(r), true).forEach(function(n) {
      ke(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : pp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Uk(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function hp(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, jv(n.key), n);
  }
}
function zk(e6, t, r) {
  return t && hp(e6.prototype, t), r && hp(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function qk(e6, t, r) {
  return t = Yi(t), Hk(e6, Ev() ? Reflect.construct(t, r || [], Yi(e6).constructor) : t.apply(e6, r));
}
function Hk(e6, t) {
  if (t && (xr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return Gk(e6);
}
function Gk(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Ev() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Ev = function() {
    return !!e6;
  })();
}
function Yi(e6) {
  return Yi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Yi(e6);
}
function Kk(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Eu(e6, t);
}
function Eu(e6, t) {
  return Eu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Eu(e6, t);
}
function ke(e6, t, r) {
  return t = jv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function jv(e6) {
  var t = Xk(e6, "string");
  return xr(t) == "symbol" ? t : t + "";
}
function Xk(e6, t) {
  if (xr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (xr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Vk = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, o = t.width, u = t.travellerWidth;
  if (!r || !r.length) return {};
  var c = r.length, s = en().domain(Xi(0, c)).range([a, a + o - u]), f = s.domain().map(function(l) {
    return s(l);
  });
  return { isTextActive: false, isSlideMoving: false, isTravellerMoving: false, isTravellerFocused: false, startX: s(n), endX: s(i), scale: s, scaleValues: f };
}, dp = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, wr = (function(e6) {
  function t(r) {
    var n;
    return Uk(this, t), n = qk(this, t, [r]), ke(n, "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), ke(n, "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), ke(n, "handleDragEnd", function() {
      n.setState({ isTravellerMoving: false, isSlideMoving: false }, function() {
        var i = n.props, a = i.endIndex, o = i.onDragEnd, u = i.startIndex;
        o == null || o({ endIndex: a, startIndex: u });
      }), n.detachDragEndListener();
    }), ke(n, "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), ke(n, "handleEnterSlideOrTraveller", function() {
      n.setState({ isTextActive: true });
    }), ke(n, "handleLeaveSlideOrTraveller", function() {
      n.setState({ isTextActive: false });
    }), ke(n, "handleSlideDragStart", function(i) {
      var a = dp(i) ? i.changedTouches[0] : i;
      n.setState({ isTravellerMoving: false, isSlideMoving: true, slideMoveStartX: a.pageX }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = { startX: n.handleTravellerDragStart.bind(n, "startX"), endX: n.handleTravellerDragStart.bind(n, "endX") }, n.state = {}, n;
  }
  return Kk(t, e6), zk(t, [{ key: "componentWillUnmount", value: function() {
    this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
  } }, { key: "getIndex", value: function(n) {
    var i = n.startX, a = n.endX, o = this.state.scaleValues, u = this.props, c = u.gap, s = u.data, f = s.length - 1, l = Math.min(i, a), p = Math.max(i, a), h = t.getIndexInRange(o, l), d = t.getIndexInRange(o, p);
    return { startIndex: h - h % c, endIndex: d === f ? f : d - d % c };
  } }, { key: "getTextOfTick", value: function(n) {
    var i = this.props, a = i.data, o = i.tickFormatter, u = i.dataKey, c = Qe(a[n], u, n);
    return Y(o) ? o(c, n) : c;
  } }, { key: "attachDragEndListener", value: function() {
    window.addEventListener("mouseup", this.handleDragEnd, true), window.addEventListener("touchend", this.handleDragEnd, true), window.addEventListener("mousemove", this.handleDrag, true);
  } }, { key: "detachDragEndListener", value: function() {
    window.removeEventListener("mouseup", this.handleDragEnd, true), window.removeEventListener("touchend", this.handleDragEnd, true), window.removeEventListener("mousemove", this.handleDrag, true);
  } }, { key: "handleSlideDrag", value: function(n) {
    var i = this.state, a = i.slideMoveStartX, o = i.startX, u = i.endX, c = this.props, s = c.x, f = c.width, l = c.travellerWidth, p = c.startIndex, h = c.endIndex, d = c.onChange, v = n.pageX - a;
    v > 0 ? v = Math.min(v, s + f - l - u, s + f - l - o) : v < 0 && (v = Math.max(v, s - o, s - u));
    var y = this.getIndex({ startX: o + v, endX: u + v });
    (y.startIndex !== p || y.endIndex !== h) && d && d(y), this.setState({ startX: o + v, endX: u + v, slideMoveStartX: n.pageX });
  } }, { key: "handleTravellerDragStart", value: function(n, i) {
    var a = dp(i) ? i.changedTouches[0] : i;
    this.setState({ isSlideMoving: false, isTravellerMoving: true, movingTravellerId: n, brushMoveStartX: a.pageX }), this.attachDragEndListener();
  } }, { key: "handleTravellerMove", value: function(n) {
    var i = this.state, a = i.brushMoveStartX, o = i.movingTravellerId, u = i.endX, c = i.startX, s = this.state[o], f = this.props, l = f.x, p = f.width, h = f.travellerWidth, d = f.onChange, v = f.gap, y = f.data, x = { startX: this.state.startX, endX: this.state.endX }, w = n.pageX - a;
    w > 0 ? w = Math.min(w, l + p - h - s) : w < 0 && (w = Math.max(w, l - s)), x[o] = s + w;
    var b = this.getIndex(x), S = b.startIndex, g = b.endIndex, m = function() {
      var _ = y.length - 1;
      return o === "startX" && (u > c ? S % v === 0 : g % v === 0) || u < c && g === _ || o === "endX" && (u > c ? g % v === 0 : S % v === 0) || u > c && g === _;
    };
    this.setState(ke(ke({}, o, s + w), "brushMoveStartX", n.pageX), function() {
      d && m() && d(b);
    });
  } }, { key: "handleTravellerMoveKeyboard", value: function(n, i) {
    var a = this, o = this.state, u = o.scaleValues, c = o.startX, s = o.endX, f = this.state[i], l = u.indexOf(f);
    if (l !== -1) {
      var p = l + n;
      if (!(p === -1 || p >= u.length)) {
        var h = u[p];
        i === "startX" && h >= s || i === "endX" && h <= c || this.setState(ke({}, i, h), function() {
          a.props.onChange(a.getIndex({ startX: a.state.startX, endX: a.state.endX }));
        });
      }
    }
  } }, { key: "renderBackground", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.fill, s = n.stroke;
    return $.createElement("rect", { stroke: s, fill: c, x: i, y: a, width: o, height: u });
  } }, { key: "renderPanorama", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.data, s = n.children, f = n.padding, l = R.Children.only(s);
    return l ? $.cloneElement(l, { x: i, y: a, width: o, height: u, margin: f, compact: true, data: c }) : null;
  } }, { key: "renderTravellerLayer", value: function(n, i) {
    var a, o, u = this, c = this.props, s = c.y, f = c.travellerWidth, l = c.height, p = c.traveller, h = c.ariaLabel, d = c.data, v = c.startIndex, y = c.endIndex, x = Math.max(n, this.props.x), w = wo(wo({}, re(this.props, false)), {}, { x, y: s, width: f, height: l }), b = h || "Min value: ".concat((a = d[v]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((o = d[y]) === null || o === void 0 ? void 0 : o.name);
    return $.createElement(_e, { tabIndex: 0, role: "slider", "aria-label": b, "aria-valuenow": n, className: "recharts-brush-traveller", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.travellerDragStartHandlers[i], onTouchStart: this.travellerDragStartHandlers[i], onKeyDown: function(g) {
      ["ArrowLeft", "ArrowRight"].includes(g.key) && (g.preventDefault(), g.stopPropagation(), u.handleTravellerMoveKeyboard(g.key === "ArrowRight" ? 1 : -1, i));
    }, onFocus: function() {
      u.setState({ isTravellerFocused: true });
    }, onBlur: function() {
      u.setState({ isTravellerFocused: false });
    }, style: { cursor: "col-resize" } }, t.renderTraveller(p, w));
  } }, { key: "renderSlide", value: function(n, i) {
    var a = this.props, o = a.y, u = a.height, c = a.stroke, s = a.travellerWidth, f = Math.min(n, i) + s, l = Math.max(Math.abs(i - n) - s, 0);
    return $.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: c, fillOpacity: 0.2, x: f, y: o, width: l, height: u });
  } }, { key: "renderText", value: function() {
    var n = this.props, i = n.startIndex, a = n.endIndex, o = n.y, u = n.height, c = n.travellerWidth, s = n.stroke, f = this.state, l = f.startX, p = f.endX, h = 5, d = { pointerEvents: "none", fill: s };
    return $.createElement(_e, { className: "recharts-brush-texts" }, $.createElement(Ai, Vi({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(l, p) - h, y: o + u / 2 }, d), this.getTextOfTick(i)), $.createElement(Ai, Vi({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(l, p) + c + h, y: o + u / 2 }, d), this.getTextOfTick(a)));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.data, a = n.className, o = n.children, u = n.x, c = n.y, s = n.width, f = n.height, l = n.alwaysShowText, p = this.state, h = p.startX, d = p.endX, v = p.isTextActive, y = p.isSlideMoving, x = p.isTravellerMoving, w = p.isTravellerFocused;
    if (!i || !i.length || !F(u) || !F(c) || !F(s) || !F(f) || s <= 0 || f <= 0) return null;
    var b = ee("recharts-brush", a), S = $.Children.count(o) === 1, g = Wk("userSelect", "none");
    return $.createElement(_e, { className: b, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: g }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(h, d), this.renderTravellerLayer(h, "startX"), this.renderTravellerLayer(d, "endX"), (v || y || x || w || l) && this.renderText());
  } }], [{ key: "renderDefaultTraveller", value: function(n) {
    var i = n.x, a = n.y, o = n.width, u = n.height, c = n.stroke, s = Math.floor(a + u / 2) - 1;
    return $.createElement($.Fragment, null, $.createElement("rect", { x: i, y: a, width: o, height: u, fill: c, stroke: "none" }), $.createElement("line", { x1: i + 1, y1: s, x2: i + o - 1, y2: s, fill: "none", stroke: "#fff" }), $.createElement("line", { x1: i + 1, y1: s + 2, x2: i + o - 1, y2: s + 2, fill: "none", stroke: "#fff" }));
  } }, { key: "renderTraveller", value: function(n, i) {
    var a;
    return $.isValidElement(n) ? a = $.cloneElement(n, i) : Y(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
  } }, { key: "getDerivedStateFromProps", value: function(n, i) {
    var a = n.data, o = n.width, u = n.x, c = n.travellerWidth, s = n.updateId, f = n.startIndex, l = n.endIndex;
    if (a !== i.prevData || s !== i.prevUpdateId) return wo({ prevData: a, prevTravellerWidth: c, prevUpdateId: s, prevX: u, prevWidth: o }, a && a.length ? Vk({ data: a, width: o, x: u, travellerWidth: c, startIndex: f, endIndex: l }) : { scale: null, scaleValues: null });
    if (i.scale && (o !== i.prevWidth || u !== i.prevX || c !== i.prevTravellerWidth)) {
      i.scale.range([u, u + o - c]);
      var p = i.scale.domain().map(function(h) {
        return i.scale(h);
      });
      return { prevData: a, prevTravellerWidth: c, prevUpdateId: s, prevX: u, prevWidth: o, startX: i.scale(n.startIndex), endX: i.scale(n.endIndex), scaleValues: p };
    }
    return null;
  } }, { key: "getIndexInRange", value: function(n, i) {
    for (var a = n.length, o = 0, u = a - 1; u - o > 1; ) {
      var c = Math.floor((o + u) / 2);
      n[c] > i ? u = c : o = c;
    }
    return i >= n[u] ? u : o;
  } }]);
})(R.PureComponent);
ke(wr, "displayName", "Brush");
ke(wr, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: false });
var Yk = yc;
function Zk(e6, t) {
  var r;
  return Yk(e6, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var Jk = Zk, Qk = $h, eR = $t, tR = Jk, rR = Ne, nR = Ea;
function iR(e6, t, r) {
  var n = rR(e6) ? Qk : tR;
  return r && nR(e6, t, r) && (t = void 0), n(e6, eR(t));
}
var aR = iR;
const oR = ue(aR);
var nt = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, vp = Vh;
function uR(e6, t, r) {
  t == "__proto__" && vp ? vp(e6, t, { configurable: true, enumerable: true, value: r, writable: true }) : e6[t] = r;
}
var cR = uR, sR = cR, lR = Kh, fR = $t;
function pR(e6, t) {
  var r = {};
  return t = fR(t), lR(e6, function(n, i, a) {
    sR(r, i, t(n, i, a));
  }), r;
}
var hR = pR;
const dR = ue(hR);
function vR(e6, t) {
  for (var r = -1, n = e6 == null ? 0 : e6.length; ++r < n; ) if (!t(e6[r], r, e6)) return false;
  return true;
}
var yR = vR, gR = yc;
function mR(e6, t) {
  var r = true;
  return gR(e6, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var bR = mR, xR = yR, wR = bR, OR = $t, SR = Ne, _R = Ea;
function AR(e6, t, r) {
  var n = SR(e6) ? xR : wR;
  return r && _R(e6, t, r) && (t = void 0), n(e6, OR(t));
}
var PR = AR;
const Mv = ue(PR);
var $R = ["x", "y"];
function Nn(e6) {
  "@babel/helpers - typeof";
  return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nn(e6);
}
function ju() {
  return ju = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, ju.apply(this, arguments);
}
function yp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zr(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yp(Object(r), true).forEach(function(n) {
      TR(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : yp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function TR(e6, t, r) {
  return t = ER(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function ER(e6) {
  var t = jR(e6, "string");
  return Nn(t) == "symbol" ? t : t + "";
}
function jR(e6, t) {
  if (Nn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Nn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function MR(e6, t) {
  if (e6 == null) return {};
  var r = CR(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function CR(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function IR(e6, t) {
  var r = e6.x, n = e6.y, i = MR(e6, $R), a = "".concat(r), o = parseInt(a, 10), u = "".concat(n), c = parseInt(u, 10), s = "".concat(t.height || i.height), f = parseInt(s, 10), l = "".concat(t.width || i.width), p = parseInt(l, 10);
  return Zr(Zr(Zr(Zr(Zr({}, t), i), o ? { x: o } : {}), c ? { y: c } : {}), {}, { height: f, width: p, name: t.name, radius: t.radius });
}
function gp(e6) {
  return $.createElement(yk, ju({ shapeType: "rectangle", propTransformer: IR, activeClassName: "recharts-active-bar" }, e6));
}
var NR = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = F(n) || Yb(n);
    return a ? t(n, i) : (a || Xt(), r);
  };
}, DR = ["value", "background"], Cv;
function Or(e6) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e6);
}
function kR(e6, t) {
  if (e6 == null) return {};
  var r = RR(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function RR(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function Zi() {
  return Zi = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Zi.apply(this, arguments);
}
function mp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ve(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mp(Object(r), true).forEach(function(n) {
      Ot(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function BR(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function bp(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Nv(n.key), n);
  }
}
function LR(e6, t, r) {
  return t && bp(e6.prototype, t), r && bp(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function FR(e6, t, r) {
  return t = Ji(t), WR(e6, Iv() ? Reflect.construct(t, r || [], Ji(e6).constructor) : t.apply(e6, r));
}
function WR(e6, t) {
  if (t && (Or(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return UR(e6);
}
function UR(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Iv() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Iv = function() {
    return !!e6;
  })();
}
function Ji(e6) {
  return Ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ji(e6);
}
function zR(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Mu(e6, t);
}
function Mu(e6, t) {
  return Mu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Mu(e6, t);
}
function Ot(e6, t, r) {
  return t = Nv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Nv(e6) {
  var t = qR(e6, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function qR(e6, t) {
  if (Or(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Or(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Gn = (function(e6) {
  function t() {
    var r;
    BR(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
    return r = FR(this, t, [].concat(i)), Ot(r, "state", { isAnimationFinished: false }), Ot(r, "id", Oa("recharts-bar-")), Ot(r, "handleAnimationEnd", function() {
      var o = r.props.onAnimationEnd;
      r.setState({ isAnimationFinished: true }), o && o();
    }), Ot(r, "handleAnimationStart", function() {
      var o = r.props.onAnimationStart;
      r.setState({ isAnimationFinished: false }), o && o();
    }), r;
  }
  return zR(t, e6), LR(t, [{ key: "renderRectanglesStatically", value: function(n) {
    var i = this, a = this.props, o = a.shape, u = a.dataKey, c = a.activeIndex, s = a.activeBar, f = re(this.props, false);
    return n && n.map(function(l, p) {
      var h = p === c, d = h ? s : o, v = ve(ve(ve({}, f), l), {}, { isActive: h, option: d, index: p, dataKey: u, onAnimationStart: i.handleAnimationStart, onAnimationEnd: i.handleAnimationEnd });
      return $.createElement(_e, Zi({ className: "recharts-bar-rectangle" }, fi(i.props, l, p), { key: "rectangle-".concat(l == null ? void 0 : l.x, "-").concat(l == null ? void 0 : l.y, "-").concat(l == null ? void 0 : l.value, "-").concat(p) }), $.createElement(gp, v));
    });
  } }, { key: "renderRectanglesWithAnimation", value: function() {
    var n = this, i = this.props, a = i.data, o = i.layout, u = i.isAnimationActive, c = i.animationBegin, s = i.animationDuration, f = i.animationEasing, l = i.animationId, p = this.state.prevData;
    return $.createElement(At, { begin: c, duration: s, isActive: u, easing: f, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(l), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function(h) {
      var d = h.t, v = a.map(function(y, x) {
        var w = p && p[x];
        if (w) {
          var b = er(w.x, y.x), S = er(w.y, y.y), g = er(w.width, y.width), m = er(w.height, y.height);
          return ve(ve({}, y), {}, { x: b(d), y: S(d), width: g(d), height: m(d) });
        }
        if (o === "horizontal") {
          var O = er(0, y.height), _ = O(d);
          return ve(ve({}, y), {}, { y: y.y + y.height - _, height: _ });
        }
        var A = er(0, y.width), j = A(d);
        return ve(ve({}, y), {}, { width: j });
      });
      return $.createElement(_e, null, n.renderRectanglesStatically(v));
    });
  } }, { key: "renderRectangles", value: function() {
    var n = this.props, i = n.data, a = n.isAnimationActive, o = this.state.prevData;
    return a && i && i.length && (!o || !Wc(o, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
  } }, { key: "renderBackground", value: function() {
    var n = this, i = this.props, a = i.data, o = i.dataKey, u = i.activeIndex, c = re(this.props.background, false);
    return a.map(function(s, f) {
      s.value;
      var l = s.background, p = kR(s, DR);
      if (!l) return null;
      var h = ve(ve(ve(ve(ve({}, p), {}, { fill: "#eee" }, l), c), fi(n.props, s, f)), {}, { onAnimationStart: n.handleAnimationStart, onAnimationEnd: n.handleAnimationEnd, dataKey: o, index: f, className: "recharts-bar-background-rectangle" });
      return $.createElement(gp, Zi({ key: "background-bar-".concat(f), option: n.props.background, isActive: f === u }, h));
    });
  } }, { key: "renderErrorBar", value: function(n, i) {
    if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
    var a = this.props, o = a.data, u = a.xAxis, c = a.yAxis, s = a.layout, f = a.children, l = Je(f, Fa);
    if (!l) return null;
    var p = s === "vertical" ? o[0].height / 2 : o[0].width / 2, h = function(y, x) {
      var w = Array.isArray(y.value) ? y.value[1] : y.value;
      return { x: y.x, y: y.y, value: w, errorVal: Qe(y, x) };
    }, d = { clipPath: n ? "url(#clipPath-".concat(i, ")") : null };
    return $.createElement(_e, d, l.map(function(v) {
      return $.cloneElement(v, { key: "error-bar-".concat(i, "-").concat(v.props.dataKey), data: o, xAxis: u, yAxis: c, layout: s, offset: p, dataPointFormatter: h });
    }));
  } }, { key: "render", value: function() {
    var n = this.props, i = n.hide, a = n.data, o = n.className, u = n.xAxis, c = n.yAxis, s = n.left, f = n.top, l = n.width, p = n.height, h = n.isAnimationActive, d = n.background, v = n.id;
    if (i || !a || !a.length) return null;
    var y = this.state.isAnimationFinished, x = ee("recharts-bar", o), w = u && u.allowDataOverflow, b = c && c.allowDataOverflow, S = w || b, g = Z(v) ? this.id : v;
    return $.createElement(_e, { className: x }, w || b ? $.createElement("defs", null, $.createElement("clipPath", { id: "clipPath-".concat(g) }, $.createElement("rect", { x: w ? s : s - l / 2, y: b ? f : f - p / 2, width: w ? l : l * 2, height: b ? p : p * 2 }))) : null, $.createElement(_e, { className: "recharts-bar-rectangles", clipPath: S ? "url(#clipPath-".concat(g, ")") : null }, d ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, g), (!h || y) && Ht.renderCallByParent(this.props, a));
  } }], [{ key: "getDerivedStateFromProps", value: function(n, i) {
    return n.animationId !== i.prevAnimationId ? { prevAnimationId: n.animationId, curData: n.data, prevData: i.curData } : n.data !== i.curData ? { curData: n.data } : null;
  } }]);
})(R.PureComponent);
Cv = Gn;
Ot(Gn, "displayName", "Bar");
Ot(Gn, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: false, data: [], layout: "vertical", activeBar: false, isAnimationActive: !St.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" });
Ot(Gn, "getComposedData", function(e6) {
  var t = e6.props, r = e6.item, n = e6.barPosition, i = e6.bandSize, a = e6.xAxis, o = e6.yAxis, u = e6.xAxisTicks, c = e6.yAxisTicks, s = e6.stackedData, f = e6.dataStartIndex, l = e6.displayedData, p = e6.offset, h = yI(n, r);
  if (!h) return null;
  var d = t.layout, v = r.type.defaultProps, y = v !== void 0 ? ve(ve({}, v), r.props) : r.props, x = y.dataKey, w = y.children, b = y.minPointSize, S = d === "horizontal" ? o : a, g = s ? S.scale.domain() : null, m = SI({ numericAxis: S }), O = Je(w, rd), _ = l.map(function(A, j) {
    var P, T, I, C, M, N;
    s ? P = gI(s[f + j], g) : (P = Qe(A, x), Array.isArray(P) || (P = [m, P]));
    var k = NR(b, Cv.defaultProps.minPointSize)(P[1], j);
    if (d === "horizontal") {
      var B, L = [o.scale(P[0]), o.scale(P[1])], q = L[0], G = L[1];
      T = gf({ axis: a, ticks: u, bandSize: i, offset: h.offset, entry: A, index: j }), I = (B = G != null ? G : q) !== null && B !== void 0 ? B : void 0, C = h.size;
      var U = q - G;
      if (M = Number.isNaN(U) ? 0 : U, N = { x: T, y: o.y, width: C, height: o.height }, Math.abs(k) > 0 && Math.abs(M) < Math.abs(k)) {
        var K = Ye(M || k) * (Math.abs(k) - Math.abs(M));
        I -= K, M += K;
      }
    } else {
      var ce = [a.scale(P[0]), a.scale(P[1])], de = ce[0], De = ce[1];
      if (T = de, I = gf({ axis: o, ticks: c, bandSize: i, offset: h.offset, entry: A, index: j }), C = De - de, M = h.size, N = { x: a.x, y: I, width: a.width, height: M }, Math.abs(k) > 0 && Math.abs(C) < Math.abs(k)) {
        var Mt = Ye(C || k) * (Math.abs(k) - Math.abs(C));
        C += Mt;
      }
    }
    return ve(ve(ve({}, A), {}, { x: T, y: I, width: C, height: M, value: s ? P : P[1], payload: A, background: N }, O && O[j] && O[j].props), {}, { tooltipPayload: [lv(r, A)], tooltipPosition: { x: T + C / 2, y: I + M / 2 } });
  });
  return ve({ data: _, layout: d }, p);
});
function Dn(e6) {
  "@babel/helpers - typeof";
  return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dn(e6);
}
function HR(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xp(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Dv(n.key), n);
  }
}
function GR(e6, t, r) {
  return t && xp(e6.prototype, t), r && xp(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function wp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xe(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wp(Object(r), true).forEach(function(n) {
      za(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : wp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function za(e6, t, r) {
  return t = Dv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Dv(e6) {
  var t = KR(e6, "string");
  return Dn(t) == "symbol" ? t : t + "";
}
function KR(e6, t) {
  if (Dn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Dn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var RF = function(t, r, n, i, a) {
  var o = t.width, u = t.height, c = t.layout, s = t.children, f = Object.keys(r), l = { left: n.left, leftMirror: n.left, right: o - n.right, rightMirror: o - n.right, top: n.top, topMirror: n.top, bottom: u - n.bottom, bottomMirror: u - n.bottom }, p = !!Re(s, Gn);
  return f.reduce(function(h, d) {
    var v = r[d], y = v.orientation, x = v.domain, w = v.padding, b = w === void 0 ? {} : w, S = v.mirror, g = v.reversed, m = "".concat(y).concat(S ? "Mirror" : ""), O, _, A, j, P;
    if (v.type === "number" && (v.padding === "gap" || v.padding === "no-gap")) {
      var T = x[1] - x[0], I = 1 / 0, C = v.categoricalDomain.sort(Qb);
      if (C.forEach(function(ce, de) {
        de > 0 && (I = Math.min((ce || 0) - (C[de - 1] || 0), I));
      }), Number.isFinite(I)) {
        var M = I / T, N = v.layout === "vertical" ? n.height : n.width;
        if (v.padding === "gap" && (O = M * N / 2), v.padding === "no-gap") {
          var k = Ze(t.barCategoryGap, M * N), B = M * N / 2;
          O = B - k - (B - k) / N * k;
        }
      }
    }
    i === "xAxis" ? _ = [n.left + (b.left || 0) + (O || 0), n.left + n.width - (b.right || 0) - (O || 0)] : i === "yAxis" ? _ = c === "horizontal" ? [n.top + n.height - (b.bottom || 0), n.top + (b.top || 0)] : [n.top + (b.top || 0) + (O || 0), n.top + n.height - (b.bottom || 0) - (O || 0)] : _ = v.range, g && (_ = [_[1], _[0]]);
    var L = ov(v, a, p), q = L.scale, G = L.realScaleType;
    q.domain(x).range(_), uv(q);
    var U = cv(q, Xe(Xe({}, v), {}, { realScaleType: G }));
    i === "xAxis" ? (P = y === "top" && !S || y === "bottom" && S, A = n.left, j = l[m] - P * v.height) : i === "yAxis" && (P = y === "left" && !S || y === "right" && S, A = l[m] - P * v.width, j = n.top);
    var K = Xe(Xe(Xe({}, v), U), {}, { realScaleType: G, x: A, y: j, scale: q, width: i === "xAxis" ? n.width : v.width, height: i === "yAxis" ? n.height : v.height });
    return K.bandSize = Li(K, U), !v.hide && i === "xAxis" ? l[m] += (P ? -1 : 1) * K.height : v.hide || (l[m] += (P ? -1 : 1) * K.width), Xe(Xe({}, h), {}, za({}, d, K));
  }, {});
}, kv = function(t, r) {
  var n = t.x, i = t.y, a = r.x, o = r.y;
  return { x: Math.min(n, a), y: Math.min(i, o), width: Math.abs(a - n), height: Math.abs(o - i) };
}, XR = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return kv({ x: r, y: n }, { x: i, y: a });
}, Rv = (function() {
  function e6(t) {
    HR(this, e6), this.scale = t;
  }
  return GR(e6, [{ key: "domain", get: function() {
    return this.scale.domain;
  } }, { key: "range", get: function() {
    return this.scale.range;
  } }, { key: "rangeMin", get: function() {
    return this.range()[0];
  } }, { key: "rangeMax", get: function() {
    return this.range()[1];
  } }, { key: "bandwidth", get: function() {
    return this.scale.bandwidth;
  } }, { key: "apply", value: function(r) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
    if (r !== void 0) {
      if (a) switch (a) {
        case "start":
          return this.scale(r);
        case "middle": {
          var o = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + o;
        }
        case "end": {
          var u = this.bandwidth ? this.bandwidth() : 0;
          return this.scale(r) + u;
        }
        default:
          return this.scale(r);
      }
      if (i) {
        var c = this.bandwidth ? this.bandwidth() / 2 : 0;
        return this.scale(r) + c;
      }
      return this.scale(r);
    }
  } }, { key: "isInRange", value: function(r) {
    var n = this.range(), i = n[0], a = n[n.length - 1];
    return i <= a ? r >= i && r <= a : r >= a && r <= i;
  } }], [{ key: "create", value: function(r) {
    return new e6(r);
  } }]);
})();
za(Rv, "EPS", 1e-4);
var Gc = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Xe(Xe({}, n), {}, za({}, i, Rv.create(t[i])));
  }, {});
  return Xe(Xe({}, r), {}, { apply: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = a.bandAware, u = a.position;
    return dR(i, function(c, s) {
      return r[s].apply(c, { bandAware: o, position: u });
    });
  }, isInRange: function(i) {
    return Mv(i, function(a, o) {
      return r[o].isInRange(a);
    });
  } });
};
function VR(e6) {
  return (e6 % 180 + 180) % 180;
}
var YR = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = VR(i), o = a * Math.PI / 180, u = Math.atan(n / r), c = o > u && o < Math.PI - u ? n / Math.sin(o) : r / Math.cos(o);
  return Math.abs(c);
}, ZR = $t, JR = Wn, QR = $a;
function eB(e6) {
  return function(t, r, n) {
    var i = Object(t);
    if (!JR(t)) {
      var a = ZR(r);
      t = QR(t), r = function(u) {
        return a(i[u], u, i);
      };
    }
    var o = e6(t, r, n);
    return o > -1 ? i[a ? t[o] : o] : void 0;
  };
}
var tB = eB, rB = $v;
function nB(e6) {
  var t = rB(e6), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var iB = nB, aB = Wh, oB = $t, uB = iB, cB = Math.max;
function sB(e6, t, r) {
  var n = e6 == null ? 0 : e6.length;
  if (!n) return -1;
  var i = r == null ? 0 : uB(r);
  return i < 0 && (i = cB(n + i, 0)), aB(e6, oB(t), i);
}
var lB = sB, fB = tB, pB = lB, hB = fB(pB), dB = hB;
const vB = ue(dB);
var yB = eb(function(e6) {
  return { x: e6.left, y: e6.top, width: e6.width, height: e6.height };
}, function(e6) {
  return ["l", e6.left, "t", e6.top, "w", e6.width, "h", e6.height].join("");
}), Kc = R.createContext(void 0), Xc = R.createContext(void 0), Bv = R.createContext(void 0), Lv = R.createContext({}), Fv = R.createContext(void 0), Wv = R.createContext(0), Uv = R.createContext(0), Op = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, o = t.clipPathId, u = t.children, c = t.width, s = t.height, f = yB(a);
  return $.createElement(Kc.Provider, { value: n }, $.createElement(Xc.Provider, { value: i }, $.createElement(Lv.Provider, { value: a }, $.createElement(Bv.Provider, { value: f }, $.createElement(Fv.Provider, { value: o }, $.createElement(Wv.Provider, { value: s }, $.createElement(Uv.Provider, { value: c }, u)))))));
}, gB = function() {
  return R.useContext(Fv);
}, zv = function(t) {
  var r = R.useContext(Kc);
  r == null && Xt();
  var n = r[t];
  return n == null && Xt(), n;
}, BF = function() {
  var t = R.useContext(Kc);
  return wt(t);
}, LF = function() {
  var t = R.useContext(Xc), r = vB(t, function(n) {
    return Mv(n.domain, Number.isFinite);
  });
  return r || wt(t);
}, qv = function(t) {
  var r = R.useContext(Xc);
  r == null && Xt();
  var n = r[t];
  return n == null && Xt(), n;
}, mB = function() {
  var t = R.useContext(Bv);
  return t;
}, FF = function() {
  return R.useContext(Lv);
}, Hv = function() {
  return R.useContext(Uv);
}, Gv = function() {
  return R.useContext(Wv);
};
function Sr(e6) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e6);
}
function bB(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function xB(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Xv(n.key), n);
  }
}
function wB(e6, t, r) {
  return t && xB(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function OB(e6, t, r) {
  return t = Qi(t), SB(e6, Kv() ? Reflect.construct(t, r || [], Qi(e6).constructor) : t.apply(e6, r));
}
function SB(e6, t) {
  if (t && (Sr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _B(e6);
}
function _B(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Kv() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Kv = function() {
    return !!e6;
  })();
}
function Qi(e6) {
  return Qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Qi(e6);
}
function AB(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Cu(e6, t);
}
function Cu(e6, t) {
  return Cu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Cu(e6, t);
}
function Sp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _p(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sp(Object(r), true).forEach(function(n) {
      Vc(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Sp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Vc(e6, t, r) {
  return t = Xv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Xv(e6) {
  var t = PB(e6, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function PB(e6, t) {
  if (Sr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Sr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function $B(e6, t) {
  return MB(e6) || jB(e6, t) || EB(e6, t) || TB();
}
function TB() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function EB(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Ap(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ap(e6, t);
  }
}
function Ap(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function jB(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function MB(e6) {
  if (Array.isArray(e6)) return e6;
}
function Iu() {
  return Iu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Iu.apply(this, arguments);
}
var CB = function(t, r) {
  var n;
  return $.isValidElement(t) ? n = $.cloneElement(t, r) : Y(t) ? n = t(r) : n = $.createElement("line", Iu({}, r, { className: "recharts-reference-line-line" })), n;
}, IB = function(t, r, n, i, a, o, u, c, s) {
  var f = a.x, l = a.y, p = a.width, h = a.height;
  if (n) {
    var d = s.y, v = t.y.apply(d, { position: o });
    if (nt(s, "discard") && !t.y.isInRange(v)) return null;
    var y = [{ x: f + p, y: v }, { x: f, y: v }];
    return c === "left" ? y.reverse() : y;
  }
  if (r) {
    var x = s.x, w = t.x.apply(x, { position: o });
    if (nt(s, "discard") && !t.x.isInRange(w)) return null;
    var b = [{ x: w, y: l + h }, { x: w, y: l }];
    return u === "top" ? b.reverse() : b;
  }
  if (i) {
    var S = s.segment, g = S.map(function(m) {
      return t.apply(m, { position: o });
    });
    return nt(s, "discard") && oR(g, function(m) {
      return !t.isInRange(m);
    }) ? null : g;
  }
  return null;
};
function NB(e6) {
  var t = e6.x, r = e6.y, n = e6.segment, i = e6.xAxisId, a = e6.yAxisId, o = e6.shape, u = e6.className, c = e6.alwaysShow, s = gB(), f = zv(i), l = qv(a), p = mB();
  if (!s || !p) return null;
  Ut(c === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var h = Gc({ x: f.scale, y: l.scale }), d = we(t), v = we(r), y = n && n.length === 2, x = IB(h, d, v, y, p, e6.position, f.orientation, l.orientation, e6);
  if (!x) return null;
  var w = $B(x, 2), b = w[0], S = b.x, g = b.y, m = w[1], O = m.x, _ = m.y, A = nt(e6, "hidden") ? "url(#".concat(s, ")") : void 0, j = _p(_p({ clipPath: A }, re(e6, true)), {}, { x1: S, y1: g, x2: O, y2: _ });
  return $.createElement(_e, { className: ee("recharts-reference-line", u) }, CB(o, j), Ee.renderCallByParent(e6, XR({ x1: S, y1: g, x2: O, y2: _ })));
}
var Yc = (function(e6) {
  function t() {
    return bB(this, t), OB(this, t, arguments);
  }
  return AB(t, e6), wB(t, [{ key: "render", value: function() {
    return $.createElement(NB, this.props);
  } }]);
})($.Component);
Vc(Yc, "displayName", "ReferenceLine");
Vc(Yc, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, fill: "none", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1, position: "middle" });
function Nu() {
  return Nu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Nu.apply(this, arguments);
}
function _r(e6) {
  "@babel/helpers - typeof";
  return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _r(e6);
}
function Pp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $p(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pp(Object(r), true).forEach(function(n) {
      qa(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Pp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function DB(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function kB(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Yv(n.key), n);
  }
}
function RB(e6, t, r) {
  return t && kB(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function BB(e6, t, r) {
  return t = ea(t), LB(e6, Vv() ? Reflect.construct(t, r || [], ea(e6).constructor) : t.apply(e6, r));
}
function LB(e6, t) {
  if (t && (_r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return FB(e6);
}
function FB(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Vv() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Vv = function() {
    return !!e6;
  })();
}
function ea(e6) {
  return ea = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ea(e6);
}
function WB(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Du(e6, t);
}
function Du(e6, t) {
  return Du = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Du(e6, t);
}
function qa(e6, t, r) {
  return t = Yv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Yv(e6) {
  var t = UB(e6, "string");
  return _r(t) == "symbol" ? t : t + "";
}
function UB(e6, t) {
  if (_r(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (_r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var zB = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, o = Gc({ x: i.scale, y: a.scale }), u = o.apply({ x: r, y: n }, { bandAware: true });
  return nt(t, "discard") && !o.isInRange(u) ? null : u;
}, Ha = (function(e6) {
  function t() {
    return DB(this, t), BB(this, t, arguments);
  }
  return WB(t, e6), RB(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.r, u = n.alwaysShow, c = n.clipPathId, s = we(i), f = we(a);
    if (Ut(u === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !f) return null;
    var l = zB(this.props);
    if (!l) return null;
    var p = l.x, h = l.y, d = this.props, v = d.shape, y = d.className, x = nt(this.props, "hidden") ? "url(#".concat(c, ")") : void 0, w = $p($p({ clipPath: x }, re(this.props, true)), {}, { cx: p, cy: h });
    return $.createElement(_e, { className: ee("recharts-reference-dot", y) }, t.renderDot(v, w), Ee.renderCallByParent(this.props, { x: p - o, y: h - o, width: 2 * o, height: 2 * o }));
  } }]);
})($.Component);
qa(Ha, "displayName", "ReferenceDot");
qa(Ha, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#fff", stroke: "#ccc", fillOpacity: 1, strokeWidth: 1 });
qa(Ha, "renderDot", function(e6, t) {
  var r;
  return $.isValidElement(e6) ? r = $.cloneElement(e6, t) : Y(e6) ? r = e6(t) : r = $.createElement(Av, Nu({}, t, { cx: t.cx, cy: t.cy, className: "recharts-reference-dot-dot" })), r;
});
function ku() {
  return ku = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, ku.apply(this, arguments);
}
function Ar(e6) {
  "@babel/helpers - typeof";
  return Ar = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ar(e6);
}
function Tp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ep(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tp(Object(r), true).forEach(function(n) {
      Ga(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Tp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function qB(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function HB(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, Jv(n.key), n);
  }
}
function GB(e6, t, r) {
  return t && HB(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function KB(e6, t, r) {
  return t = ta(t), XB(e6, Zv() ? Reflect.construct(t, r || [], ta(e6).constructor) : t.apply(e6, r));
}
function XB(e6, t) {
  if (t && (Ar(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return VB(e6);
}
function VB(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function Zv() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (Zv = function() {
    return !!e6;
  })();
}
function ta(e6) {
  return ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ta(e6);
}
function YB(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Ru(e6, t);
}
function Ru(e6, t) {
  return Ru = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ru(e6, t);
}
function Ga(e6, t, r) {
  return t = Jv(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function Jv(e6) {
  var t = ZB(e6, "string");
  return Ar(t) == "symbol" ? t : t + "";
}
function ZB(e6, t) {
  if (Ar(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Ar(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var JB = function(t, r, n, i, a) {
  var o = a.x1, u = a.x2, c = a.y1, s = a.y2, f = a.xAxis, l = a.yAxis;
  if (!f || !l) return null;
  var p = Gc({ x: f.scale, y: l.scale }), h = { x: t ? p.x.apply(o, { position: "start" }) : p.x.rangeMin, y: n ? p.y.apply(c, { position: "start" }) : p.y.rangeMin }, d = { x: r ? p.x.apply(u, { position: "end" }) : p.x.rangeMax, y: i ? p.y.apply(s, { position: "end" }) : p.y.rangeMax };
  return nt(a, "discard") && (!p.isInRange(h) || !p.isInRange(d)) ? null : kv(h, d);
}, Ka = (function(e6) {
  function t() {
    return qB(this, t), KB(this, t, arguments);
  }
  return YB(t, e6), GB(t, [{ key: "render", value: function() {
    var n = this.props, i = n.x1, a = n.x2, o = n.y1, u = n.y2, c = n.className, s = n.alwaysShow, f = n.clipPathId;
    Ut(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var l = we(i), p = we(a), h = we(o), d = we(u), v = this.props.shape;
    if (!l && !p && !h && !d && !v) return null;
    var y = JB(l, p, h, d, this.props);
    if (!y && !v) return null;
    var x = nt(this.props, "hidden") ? "url(#".concat(f, ")") : void 0;
    return $.createElement(_e, { className: ee("recharts-reference-area", c) }, t.renderRect(v, Ep(Ep({ clipPath: x }, re(this.props, true)), y)), Ee.renderCallByParent(this.props, y));
  } }]);
})($.Component);
Ga(Ka, "displayName", "ReferenceArea");
Ga(Ka, "defaultProps", { isFront: false, ifOverflow: "discard", xAxisId: 0, yAxisId: 0, r: 10, fill: "#ccc", fillOpacity: 0.5, stroke: "none", strokeWidth: 1 });
Ga(Ka, "renderRect", function(e6, t) {
  var r;
  return $.isValidElement(e6) ? r = $.cloneElement(e6, t) : Y(e6) ? r = e6(t) : r = $.createElement(Hc, ku({}, t, { className: "recharts-reference-area-rect" })), r;
});
function Qv(e6, t, r) {
  if (t < 1) return [];
  if (t === 1 && r === void 0) return e6;
  for (var n = [], i = 0; i < e6.length; i += t) n.push(e6[i]);
  return n;
}
function QB(e6, t, r) {
  var n = { width: e6.width + t.width, height: e6.height + t.height };
  return YR(n, r);
}
function eL(e6, t, r) {
  var n = r === "width", i = e6.x, a = e6.y, o = e6.width, u = e6.height;
  return t === 1 ? { start: n ? i : a, end: n ? i + o : a + u } : { start: n ? i + o : a + u, end: n ? i : a };
}
function ra(e6, t, r, n, i) {
  if (e6 * t < e6 * n || e6 * t > e6 * i) return false;
  var a = r();
  return e6 * (t - e6 * a / 2 - n) >= 0 && e6 * (t + e6 * a / 2 - i) <= 0;
}
function tL(e6, t) {
  return Qv(e6, t + 1);
}
function rL(e6, t, r, n, i) {
  for (var a = (n || []).slice(), o = t.start, u = t.end, c = 0, s = 1, f = o, l = function() {
    var d = n == null ? void 0 : n[c];
    if (d === void 0) return { v: Qv(n, s) };
    var v = c, y, x = function() {
      return y === void 0 && (y = r(d, v)), y;
    }, w = d.coordinate, b = c === 0 || ra(e6, w, x, f, u);
    b || (c = 0, f = o, s += 1), b && (f = w + e6 * (x() / 2 + i), c += s);
  }, p; s <= a.length; ) if (p = l(), p) return p.v;
  return [];
}
function kn(e6) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kn(e6);
}
function jp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Te(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(r), true).forEach(function(n) {
      nL(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function nL(e6, t, r) {
  return t = iL(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function iL(e6) {
  var t = aL(e6, "string");
  return kn(t) == "symbol" ? t : t + "";
}
function aL(e6, t) {
  if (kn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (kn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function oL(e6, t, r, n, i) {
  for (var a = (n || []).slice(), o = a.length, u = t.start, c = t.end, s = function(p) {
    var h = a[p], d, v = function() {
      return d === void 0 && (d = r(h, p)), d;
    };
    if (p === o - 1) {
      var y = e6 * (h.coordinate + e6 * v() / 2 - c);
      a[p] = h = Te(Te({}, h), {}, { tickCoord: y > 0 ? h.coordinate - y * e6 : h.coordinate });
    } else a[p] = h = Te(Te({}, h), {}, { tickCoord: h.coordinate });
    var x = ra(e6, h.tickCoord, v, u, c);
    x && (c = h.tickCoord - e6 * (v() / 2 + i), a[p] = Te(Te({}, h), {}, { isShow: true }));
  }, f = o - 1; f >= 0; f--) s(f);
  return a;
}
function uL(e6, t, r, n, i, a) {
  var o = (n || []).slice(), u = o.length, c = t.start, s = t.end;
  if (a) {
    var f = n[u - 1], l = r(f, u - 1), p = e6 * (f.coordinate + e6 * l / 2 - s);
    o[u - 1] = f = Te(Te({}, f), {}, { tickCoord: p > 0 ? f.coordinate - p * e6 : f.coordinate });
    var h = ra(e6, f.tickCoord, function() {
      return l;
    }, c, s);
    h && (s = f.tickCoord - e6 * (l / 2 + i), o[u - 1] = Te(Te({}, f), {}, { isShow: true }));
  }
  for (var d = a ? u - 1 : u, v = function(w) {
    var b = o[w], S, g = function() {
      return S === void 0 && (S = r(b, w)), S;
    };
    if (w === 0) {
      var m = e6 * (b.coordinate - e6 * g() / 2 - c);
      o[w] = b = Te(Te({}, b), {}, { tickCoord: m < 0 ? b.coordinate - m * e6 : b.coordinate });
    } else o[w] = b = Te(Te({}, b), {}, { tickCoord: b.coordinate });
    var O = ra(e6, b.tickCoord, g, c, s);
    O && (c = b.tickCoord + e6 * (g() / 2 + i), o[w] = Te(Te({}, b), {}, { isShow: true }));
  }, y = 0; y < d; y++) v(y);
  return o;
}
function cL(e6, t, r) {
  var n = e6.tick, i = e6.ticks, a = e6.viewBox, o = e6.minTickGap, u = e6.orientation, c = e6.interval, s = e6.tickFormatter, f = e6.unit, l = e6.angle;
  if (!i || !i.length || !n) return [];
  if (F(c) || St.isSsr) return tL(i, typeof c == "number" && F(c) ? c : 0);
  var p = [], h = u === "top" || u === "bottom" ? "width" : "height", d = f && h === "width" ? Qr(f, { fontSize: t, letterSpacing: r }) : { width: 0, height: 0 }, v = function(b, S) {
    var g = Y(s) ? s(b.value, S) : b.value;
    return h === "width" ? QB(Qr(g, { fontSize: t, letterSpacing: r }), d, l) : Qr(g, { fontSize: t, letterSpacing: r })[h];
  }, y = i.length >= 2 ? Ye(i[1].coordinate - i[0].coordinate) : 1, x = eL(a, y, h);
  return c === "equidistantPreserveStart" ? rL(y, x, v, i, o) : (c === "preserveStart" || c === "preserveStartEnd" ? p = uL(y, x, v, i, o, c === "preserveStartEnd") : p = oL(y, x, v, i, o), p.filter(function(w) {
    return w.isShow;
  }));
}
var sL = ["viewBox"], lL = ["viewBox"], fL = ["ticks"];
function Pr(e6) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e6);
}
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, ir.apply(this, arguments);
}
function Mp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function be(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mp(Object(r), true).forEach(function(n) {
      Zc(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Mp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function Oo(e6, t) {
  if (e6 == null) return {};
  var r = pL(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function pL(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function hL(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Cp(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, ty(n.key), n);
  }
}
function dL(e6, t, r) {
  return t && Cp(e6.prototype, t), r && Cp(e6, r), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function vL(e6, t, r) {
  return t = na(t), yL(e6, ey() ? Reflect.construct(t, r || [], na(e6).constructor) : t.apply(e6, r));
}
function yL(e6, t) {
  if (t && (Pr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return gL(e6);
}
function gL(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function ey() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (ey = function() {
    return !!e6;
  })();
}
function na(e6) {
  return na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, na(e6);
}
function mL(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Bu(e6, t);
}
function Bu(e6, t) {
  return Bu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Bu(e6, t);
}
function Zc(e6, t, r) {
  return t = ty(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function ty(e6) {
  var t = bL(e6, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function bL(e6, t) {
  if (Pr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Pr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var Xa = (function(e6) {
  function t(r) {
    var n;
    return hL(this, t), n = vL(this, t, [r]), n.state = { fontSize: "", letterSpacing: "" }, n;
  }
  return mL(t, e6), dL(t, [{ key: "shouldComponentUpdate", value: function(n, i) {
    var a = n.viewBox, o = Oo(n, sL), u = this.props, c = u.viewBox, s = Oo(u, lL);
    return !or(a, c) || !or(o, s) || !or(i, this.state);
  } }, { key: "componentDidMount", value: function() {
    var n = this.layerReference;
    if (n) {
      var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
      i && this.setState({ fontSize: window.getComputedStyle(i).fontSize, letterSpacing: window.getComputedStyle(i).letterSpacing });
    }
  } }, { key: "getTickLineCoord", value: function(n) {
    var i = this.props, a = i.x, o = i.y, u = i.width, c = i.height, s = i.orientation, f = i.tickSize, l = i.mirror, p = i.tickMargin, h, d, v, y, x, w, b = l ? -1 : 1, S = n.tickSize || f, g = F(n.tickCoord) ? n.tickCoord : n.coordinate;
    switch (s) {
      case "top":
        h = d = n.coordinate, y = o + +!l * c, v = y - b * S, w = v - b * p, x = g;
        break;
      case "left":
        v = y = n.coordinate, d = a + +!l * u, h = d - b * S, x = h - b * p, w = g;
        break;
      case "right":
        v = y = n.coordinate, d = a + +l * u, h = d + b * S, x = h + b * p, w = g;
        break;
      default:
        h = d = n.coordinate, y = o + +l * c, v = y + b * S, w = v + b * p, x = g;
        break;
    }
    return { line: { x1: h, y1: v, x2: d, y2: y }, tick: { x, y: w } };
  } }, { key: "getTickTextAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o;
    switch (i) {
      case "left":
        o = a ? "start" : "end";
        break;
      case "right":
        o = a ? "end" : "start";
        break;
      default:
        o = "middle";
        break;
    }
    return o;
  } }, { key: "getTickVerticalAnchor", value: function() {
    var n = this.props, i = n.orientation, a = n.mirror, o = "end";
    switch (i) {
      case "left":
      case "right":
        o = "middle";
        break;
      case "top":
        o = a ? "start" : "end";
        break;
      default:
        o = a ? "end" : "start";
        break;
    }
    return o;
  } }, { key: "renderAxisLine", value: function() {
    var n = this.props, i = n.x, a = n.y, o = n.width, u = n.height, c = n.orientation, s = n.mirror, f = n.axisLine, l = be(be(be({}, re(this.props, false)), re(f, false)), {}, { fill: "none" });
    if (c === "top" || c === "bottom") {
      var p = +(c === "top" && !s || c === "bottom" && s);
      l = be(be({}, l), {}, { x1: i, y1: a + p * u, x2: i + o, y2: a + p * u });
    } else {
      var h = +(c === "left" && !s || c === "right" && s);
      l = be(be({}, l), {}, { x1: i + h * o, y1: a, x2: i + h * o, y2: a + u });
    }
    return $.createElement("line", ir({}, l, { className: ee("recharts-cartesian-axis-line", ze(f, "className")) }));
  } }, { key: "renderTicks", value: function(n, i, a) {
    var o = this, u = this.props, c = u.tickLine, s = u.stroke, f = u.tick, l = u.tickFormatter, p = u.unit, h = cL(be(be({}, this.props), {}, { ticks: n }), i, a), d = this.getTickTextAnchor(), v = this.getTickVerticalAnchor(), y = re(this.props, false), x = re(f, false), w = be(be({}, y), {}, { fill: "none" }, re(c, false)), b = h.map(function(S, g) {
      var m = o.getTickLineCoord(S), O = m.line, _ = m.tick, A = be(be(be(be({ textAnchor: d, verticalAnchor: v }, y), {}, { stroke: "none", fill: s }, x), _), {}, { index: g, payload: S, visibleTicksCount: h.length, tickFormatter: l });
      return $.createElement(_e, ir({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(S.value, "-").concat(S.coordinate, "-").concat(S.tickCoord) }, fi(o.props, S, g)), c && $.createElement("line", ir({}, w, O, { className: ee("recharts-cartesian-axis-tick-line", ze(c, "className")) })), f && t.renderTickItem(f, A, "".concat(Y(l) ? l(S.value, g) : S.value).concat(p || "")));
    });
    return $.createElement("g", { className: "recharts-cartesian-axis-ticks" }, b);
  } }, { key: "render", value: function() {
    var n = this, i = this.props, a = i.axisLine, o = i.width, u = i.height, c = i.ticksGenerator, s = i.className, f = i.hide;
    if (f) return null;
    var l = this.props, p = l.ticks, h = Oo(l, fL), d = p;
    return Y(c) && (d = p && p.length > 0 ? c(this.props) : c(h)), o <= 0 || u <= 0 || !d || !d.length ? null : $.createElement(_e, { className: ee("recharts-cartesian-axis", s), ref: function(y) {
      n.layerReference = y;
    } }, a && this.renderAxisLine(), this.renderTicks(d, this.state.fontSize, this.state.letterSpacing), Ee.renderCallByParent(this.props));
  } }], [{ key: "renderTickItem", value: function(n, i, a) {
    var o, u = ee(i.className, "recharts-cartesian-axis-tick-value");
    return $.isValidElement(n) ? o = $.cloneElement(n, be(be({}, i), {}, { className: u })) : Y(n) ? o = n(be(be({}, i), {}, { className: u })) : o = $.createElement(Ai, ir({}, i, { className: "recharts-cartesian-axis-tick-value" }), a), o;
  } }]);
})(R.Component);
Zc(Xa, "displayName", "CartesianAxis");
Zc(Xa, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: true, axisLine: true, tick: true, mirror: false, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
function $r(e6) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e6);
}
function xL(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function wL(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, iy(n.key), n);
  }
}
function OL(e6, t, r) {
  return t && wL(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function SL(e6, t, r) {
  return t = ia(t), _L(e6, ry() ? Reflect.construct(t, r || [], ia(e6).constructor) : t.apply(e6, r));
}
function _L(e6, t) {
  if (t && ($r(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return AL(e6);
}
function AL(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function ry() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (ry = function() {
    return !!e6;
  })();
}
function ia(e6) {
  return ia = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ia(e6);
}
function PL(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Lu(e6, t);
}
function Lu(e6, t) {
  return Lu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lu(e6, t);
}
function ny(e6, t, r) {
  return t = iy(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function iy(e6) {
  var t = $L(e6, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function $L(e6, t) {
  if ($r(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if ($r(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function Fu() {
  return Fu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Fu.apply(this, arguments);
}
function TL(e6) {
  var t = e6.xAxisId, r = Hv(), n = Gv(), i = zv(t);
  return i == null ? null : R.createElement(Xa, Fu({}, i, { className: ee("recharts-".concat(i.axisType, " ").concat(i.axisType), i.className), viewBox: { x: 0, y: 0, width: r, height: n }, ticksGenerator: function(o) {
    return Wt(o, true);
  } }));
}
var ay = (function(e6) {
  function t() {
    return xL(this, t), SL(this, t, arguments);
  }
  return PL(t, e6), OL(t, [{ key: "render", value: function() {
    return R.createElement(TL, this.props);
  } }]);
})(R.Component);
ny(ay, "displayName", "XAxis");
ny(ay, "defaultProps", { allowDecimals: true, hide: false, orientation: "bottom", width: 0, height: 30, mirror: false, xAxisId: 0, tickCount: 5, type: "category", padding: { left: 0, right: 0 }, allowDataOverflow: false, scale: "auto", reversed: false, allowDuplicatedCategory: true });
function Tr(e6) {
  "@babel/helpers - typeof";
  return Tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tr(e6);
}
function EL(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jL(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, cy(n.key), n);
  }
}
function ML(e6, t, r) {
  return t && jL(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function CL(e6, t, r) {
  return t = aa(t), IL(e6, oy() ? Reflect.construct(t, r || [], aa(e6).constructor) : t.apply(e6, r));
}
function IL(e6, t) {
  if (t && (Tr(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return NL(e6);
}
function NL(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function oy() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (oy = function() {
    return !!e6;
  })();
}
function aa(e6) {
  return aa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, aa(e6);
}
function DL(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Wu(e6, t);
}
function Wu(e6, t) {
  return Wu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Wu(e6, t);
}
function uy(e6, t, r) {
  return t = cy(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function cy(e6) {
  var t = kL(e6, "string");
  return Tr(t) == "symbol" ? t : t + "";
}
function kL(e6, t) {
  if (Tr(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Tr(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function Uu() {
  return Uu = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, Uu.apply(this, arguments);
}
var RL = function(t) {
  var r = t.yAxisId, n = Hv(), i = Gv(), a = qv(r);
  return a == null ? null : R.createElement(Xa, Uu({}, a, { className: ee("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className), viewBox: { x: 0, y: 0, width: n, height: i }, ticksGenerator: function(u) {
    return Wt(u, true);
  } }));
}, sy = (function(e6) {
  function t() {
    return EL(this, t), CL(this, t, arguments);
  }
  return DL(t, e6), ML(t, [{ key: "render", value: function() {
    return R.createElement(RL, this.props);
  } }]);
})(R.Component);
uy(sy, "displayName", "YAxis");
uy(sy, "defaultProps", { allowDuplicatedCategory: true, allowDecimals: true, hide: false, orientation: "left", width: 60, height: 0, mirror: false, yAxisId: 0, tickCount: 5, type: "number", padding: { top: 0, bottom: 0 }, allowDataOverflow: false, scale: "auto", reversed: false });
function Ip(e6) {
  return WL(e6) || FL(e6) || LL(e6) || BL();
}
function BL() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function LL(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return zu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return zu(e6, t);
  }
}
function FL(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function WL(e6) {
  if (Array.isArray(e6)) return zu(e6);
}
function zu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
var qu = function(t, r, n, i, a) {
  var o = Je(t, Yc), u = Je(t, Ha), c = [].concat(Ip(o), Ip(u)), s = Je(t, Ka), f = "".concat(i, "Id"), l = i[0], p = r;
  if (c.length && (p = c.reduce(function(v, y) {
    if (y.props[f] === n && nt(y.props, "extendDomain") && F(y.props[l])) {
      var x = y.props[l];
      return [Math.min(v[0], x), Math.max(v[1], x)];
    }
    return v;
  }, p)), s.length) {
    var h = "".concat(l, "1"), d = "".concat(l, "2");
    p = s.reduce(function(v, y) {
      if (y.props[f] === n && nt(y.props, "extendDomain") && F(y.props[h]) && F(y.props[d])) {
        var x = y.props[h], w = y.props[d];
        return [Math.min(v[0], x, w), Math.max(v[1], x, w)];
      }
      return v;
    }, p);
  }
  return a && a.length && (p = a.reduce(function(v, y) {
    return F(y) ? [Math.min(v[0], y), Math.max(v[1], y)] : v;
  }, p)), p;
}, ly = { exports: {} };
(function(e6) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = false));
  function i(c, s, f) {
    this.fn = c, this.context = s, this.once = f || false;
  }
  function a(c, s, f, l, p) {
    if (typeof f != "function") throw new TypeError("The listener must be a function");
    var h = new i(f, l || c, p), d = r ? r + s : s;
    return c._events[d] ? c._events[d].fn ? c._events[d] = [c._events[d], h] : c._events[d].push(h) : (c._events[d] = h, c._eventsCount++), c;
  }
  function o(c, s) {
    --c._eventsCount === 0 ? c._events = new n() : delete c._events[s];
  }
  function u() {
    this._events = new n(), this._eventsCount = 0;
  }
  u.prototype.eventNames = function() {
    var s = [], f, l;
    if (this._eventsCount === 0) return s;
    for (l in f = this._events) t.call(f, l) && s.push(r ? l.slice(1) : l);
    return Object.getOwnPropertySymbols ? s.concat(Object.getOwnPropertySymbols(f)) : s;
  }, u.prototype.listeners = function(s) {
    var f = r ? r + s : s, l = this._events[f];
    if (!l) return [];
    if (l.fn) return [l.fn];
    for (var p = 0, h = l.length, d = new Array(h); p < h; p++) d[p] = l[p].fn;
    return d;
  }, u.prototype.listenerCount = function(s) {
    var f = r ? r + s : s, l = this._events[f];
    return l ? l.fn ? 1 : l.length : 0;
  }, u.prototype.emit = function(s, f, l, p, h, d) {
    var v = r ? r + s : s;
    if (!this._events[v]) return false;
    var y = this._events[v], x = arguments.length, w, b;
    if (y.fn) {
      switch (y.once && this.removeListener(s, y.fn, void 0, true), x) {
        case 1:
          return y.fn.call(y.context), true;
        case 2:
          return y.fn.call(y.context, f), true;
        case 3:
          return y.fn.call(y.context, f, l), true;
        case 4:
          return y.fn.call(y.context, f, l, p), true;
        case 5:
          return y.fn.call(y.context, f, l, p, h), true;
        case 6:
          return y.fn.call(y.context, f, l, p, h, d), true;
      }
      for (b = 1, w = new Array(x - 1); b < x; b++) w[b - 1] = arguments[b];
      y.fn.apply(y.context, w);
    } else {
      var S = y.length, g;
      for (b = 0; b < S; b++) switch (y[b].once && this.removeListener(s, y[b].fn, void 0, true), x) {
        case 1:
          y[b].fn.call(y[b].context);
          break;
        case 2:
          y[b].fn.call(y[b].context, f);
          break;
        case 3:
          y[b].fn.call(y[b].context, f, l);
          break;
        case 4:
          y[b].fn.call(y[b].context, f, l, p);
          break;
        default:
          if (!w) for (g = 1, w = new Array(x - 1); g < x; g++) w[g - 1] = arguments[g];
          y[b].fn.apply(y[b].context, w);
      }
    }
    return true;
  }, u.prototype.on = function(s, f, l) {
    return a(this, s, f, l, false);
  }, u.prototype.once = function(s, f, l) {
    return a(this, s, f, l, true);
  }, u.prototype.removeListener = function(s, f, l, p) {
    var h = r ? r + s : s;
    if (!this._events[h]) return this;
    if (!f) return o(this, h), this;
    var d = this._events[h];
    if (d.fn) d.fn === f && (!p || d.once) && (!l || d.context === l) && o(this, h);
    else {
      for (var v = 0, y = [], x = d.length; v < x; v++) (d[v].fn !== f || p && !d[v].once || l && d[v].context !== l) && y.push(d[v]);
      y.length ? this._events[h] = y.length === 1 ? y[0] : y : o(this, h);
    }
    return this;
  }, u.prototype.removeAllListeners = function(s) {
    var f;
    return s ? (f = r ? r + s : s, this._events[f] && o(this, f)) : (this._events = new n(), this._eventsCount = 0), this;
  }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = r, u.EventEmitter = u, e6.exports = u;
})(ly);
var UL = ly.exports;
const zL = ue(UL);
var So = new zL(), _o = "recharts.syncMouseEvents";
function Rn(e6) {
  "@babel/helpers - typeof";
  return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rn(e6);
}
function qL(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function HL(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, fy(n.key), n);
  }
}
function GL(e6, t, r) {
  return t && HL(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function Ao(e6, t, r) {
  return t = fy(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function fy(e6) {
  var t = KL(e6, "string");
  return Rn(t) == "symbol" ? t : t + "";
}
function KL(e6, t) {
  if (Rn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t);
    if (Rn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e6);
}
var XL = (function() {
  function e6() {
    qL(this, e6), Ao(this, "activeIndex", 0), Ao(this, "coordinateList", []), Ao(this, "layout", "horizontal");
  }
  return GL(e6, [{ key: "setDetails", value: function(r) {
    var n, i = r.coordinateList, a = i === void 0 ? null : i, o = r.container, u = o === void 0 ? null : o, c = r.layout, s = c === void 0 ? null : c, f = r.offset, l = f === void 0 ? null : f, p = r.mouseHandlerCallback, h = p === void 0 ? null : p;
    this.coordinateList = (n = a != null ? a : this.coordinateList) !== null && n !== void 0 ? n : [], this.container = u != null ? u : this.container, this.layout = s != null ? s : this.layout, this.offset = l != null ? l : this.offset, this.mouseHandlerCallback = h != null ? h : this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
  } }, { key: "focus", value: function() {
    this.spoofMouse();
  } }, { key: "keyboardEvent", value: function(r) {
    if (this.coordinateList.length !== 0) switch (r.key) {
      case "ArrowRight": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
        break;
      }
      case "ArrowLeft": {
        if (this.layout !== "horizontal") return;
        this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
        break;
      }
    }
  } }, { key: "setIndex", value: function(r) {
    this.activeIndex = r;
  } }, { key: "spoofMouse", value: function() {
    var r, n;
    if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
      var i = this.container.getBoundingClientRect(), a = i.x, o = i.y, u = i.height, c = this.coordinateList[this.activeIndex].coordinate, s = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, f = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, l = a + c + s, p = o + this.offset.top + u / 2 + f;
      this.mouseHandlerCallback({ pageX: l, pageY: p });
    }
  } }]);
})();
function VL(e6, t, r) {
  if (r === "number" && t === true && Array.isArray(e6)) {
    var n = e6 == null ? void 0 : e6[0], i = e6 == null ? void 0 : e6[1];
    if (n && i && F(n) && F(i)) return true;
  }
  return false;
}
function YL(e6, t, r, n) {
  var i = n / 2;
  return { stroke: "none", fill: "#ccc", x: e6 === "horizontal" ? t.x - i : r.left + 0.5, y: e6 === "horizontal" ? r.top + 0.5 : t.y - i, width: e6 === "horizontal" ? n : r.width - 1, height: e6 === "horizontal" ? r.height - 1 : n };
}
function py(e6) {
  var t = e6.cx, r = e6.cy, n = e6.radius, i = e6.startAngle, a = e6.endAngle, o = $e(t, r, n, i), u = $e(t, r, n, a);
  return { points: [o, u], cx: t, cy: r, radius: n, startAngle: i, endAngle: a };
}
function ZL(e6, t, r) {
  var n, i, a, o;
  if (e6 === "horizontal") n = t.x, a = n, i = r.top, o = r.top + r.height;
  else if (e6 === "vertical") i = t.y, o = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null) if (e6 === "centric") {
    var u = t.cx, c = t.cy, s = t.innerRadius, f = t.outerRadius, l = t.angle, p = $e(u, c, s, l), h = $e(u, c, f, l);
    n = p.x, i = p.y, a = h.x, o = h.y;
  } else return py(t);
  return [{ x: n, y: i }, { x: a, y: o }];
}
function Bn(e6) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bn(e6);
}
function Np(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ui(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Np(Object(r), true).forEach(function(n) {
      JL(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Np(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function JL(e6, t, r) {
  return t = QL(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function QL(e6) {
  var t = eF(e6, "string");
  return Bn(t) == "symbol" ? t : t + "";
}
function eF(e6, t) {
  if (Bn(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
function tF(e6) {
  var t, r, n = e6.element, i = e6.tooltipEventType, a = e6.isActive, o = e6.activeCoordinate, u = e6.activePayload, c = e6.offset, s = e6.activeTooltipIndex, f = e6.tooltipAxisBandSize, l = e6.layout, p = e6.chartName, h = (t = n.props.cursor) !== null && t !== void 0 ? t : (r = n.type.defaultProps) === null || r === void 0 ? void 0 : r.cursor;
  if (!n || !h || !a || !o || p !== "ScatterChart" && i !== "axis") return null;
  var d, v = If;
  if (p === "ScatterChart") d = o, v = jD;
  else if (p === "BarChart") d = YL(l, o, c, f), v = Hc;
  else if (l === "radial") {
    var y = py(o), x = y.cx, w = y.cy, b = y.radius, S = y.startAngle, g = y.endAngle;
    d = { cx: x, cy: w, startAngle: S, endAngle: g, innerRadius: b, outerRadius: b }, v = dv;
  } else d = { points: ZL(l, o, c) }, v = If;
  var m = ui(ui(ui(ui({ stroke: "#ccc", pointerEvents: "none" }, c), d), re(h, false)), {}, { payload: u, payloadIndex: s, className: ee("recharts-tooltip-cursor", h.className) });
  return R.isValidElement(h) ? R.cloneElement(h, m) : R.createElement(v, m);
}
var rF = ["item"], nF = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function Er(e6) {
  "@babel/helpers - typeof";
  return Er = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Er(e6);
}
function ar() {
  return ar = Object.assign ? Object.assign.bind() : function(e6) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e6[n] = r[n]);
    }
    return e6;
  }, ar.apply(this, arguments);
}
function Dp(e6, t) {
  return oF(e6) || aF(e6, t) || dy(e6, t) || iF();
}
function iF() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aF(e6, t) {
  var r = e6 == null ? null : typeof Symbol < "u" && e6[Symbol.iterator] || e6["@@iterator"];
  if (r != null) {
    var n, i, a, o, u = [], c = true, s = false;
    try {
      if (a = (r = r.call(e6)).next, t !== 0) for (; !(c = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); c = true) ;
    } catch (f) {
      s = true, i = f;
    } finally {
      try {
        if (!c && r.return != null && (o = r.return(), Object(o) !== o)) return;
      } finally {
        if (s) throw i;
      }
    }
    return u;
  }
}
function oF(e6) {
  if (Array.isArray(e6)) return e6;
}
function kp(e6, t) {
  if (e6 == null) return {};
  var r = uF(e6, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e6);
    for (i = 0; i < a.length; i++) n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e6, n) && (r[n] = e6[n]);
  }
  return r;
}
function uF(e6, t) {
  if (e6 == null) return {};
  var r = {};
  for (var n in e6) if (Object.prototype.hasOwnProperty.call(e6, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e6[n];
  }
  return r;
}
function cF(e6, t) {
  if (!(e6 instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function sF(e6, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(e6, vy(n.key), n);
  }
}
function lF(e6, t, r) {
  return t && sF(e6.prototype, t), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function fF(e6, t, r) {
  return t = oa(t), pF(e6, hy() ? Reflect.construct(t, r || [], oa(e6).constructor) : t.apply(e6, r));
}
function pF(e6, t) {
  if (t && (Er(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return hF(e6);
}
function hF(e6) {
  if (e6 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e6;
}
function hy() {
  try {
    var e6 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (e7) {
  }
  return (hy = function() {
    return !!e6;
  })();
}
function oa(e6) {
  return oa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, oa(e6);
}
function dF(e6, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t && t.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t && Hu(e6, t);
}
function Hu(e6, t) {
  return Hu = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hu(e6, t);
}
function jr(e6) {
  return gF(e6) || yF(e6) || dy(e6) || vF();
}
function vF() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dy(e6, t) {
  if (e6) {
    if (typeof e6 == "string") return Gu(e6, t);
    var r = Object.prototype.toString.call(e6).slice(8, -1);
    if (r === "Object" && e6.constructor && (r = e6.constructor.name), r === "Map" || r === "Set") return Array.from(e6);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gu(e6, t);
  }
}
function yF(e6) {
  if (typeof Symbol < "u" && e6[Symbol.iterator] != null || e6["@@iterator"] != null) return Array.from(e6);
}
function gF(e6) {
  if (Array.isArray(e6)) return Gu(e6);
}
function Gu(e6, t) {
  (t == null || t > e6.length) && (t = e6.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e6[r];
  return n;
}
function Rp(e6, t) {
  var r = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e6);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e6, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function E(e6) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rp(Object(r), true).forEach(function(n) {
      H(e6, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e6, Object.getOwnPropertyDescriptors(r)) : Rp(Object(r)).forEach(function(n) {
      Object.defineProperty(e6, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e6;
}
function H(e6, t, r) {
  return t = vy(t), t in e6 ? Object.defineProperty(e6, t, { value: r, enumerable: true, configurable: true, writable: true }) : e6[t] = r, e6;
}
function vy(e6) {
  var t = mF(e6, "string");
  return Er(t) == "symbol" ? t : t + "";
}
function mF(e6, t) {
  if (Er(e6) != "object" || !e6) return e6;
  var r = e6[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e6, t || "default");
    if (Er(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e6);
}
var bF = { xAxis: ["bottom", "top"], yAxis: ["left", "right"] }, xF = { width: "100%", height: "100%" }, yy = { x: 0, y: 0 };
function ci(e6) {
  return e6;
}
var wF = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, OF = function(t, r, n, i) {
  var a = r.find(function(f) {
    return f && f.index === n;
  });
  if (a) {
    if (t === "horizontal") return { x: a.coordinate, y: i.y };
    if (t === "vertical") return { x: i.x, y: a.coordinate };
    if (t === "centric") {
      var o = a.coordinate, u = i.radius;
      return E(E(E({}, i), $e(i.cx, i.cy, u, o)), {}, { angle: o, radius: u });
    }
    var c = a.coordinate, s = i.angle;
    return E(E(E({}, i), $e(i.cx, i.cy, c, s)), {}, { angle: s, radius: c });
  }
  return yy;
}, Va = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, o = (n != null ? n : []).reduce(function(u, c) {
    var s = c.props.data;
    return s && s.length ? [].concat(jr(u), jr(s)) : u;
  }, []);
  return o.length > 0 ? o : t && t.length && F(i) && F(a) ? t.slice(i, a + 1) : [];
};
function gy(e6) {
  return e6 === "number" ? [0, "auto"] : void 0;
}
var Ku = function(t, r, n, i) {
  var a = t.graphicalItems, o = t.tooltipAxis, u = Va(r, t);
  return n < 0 || !a || !a.length || n >= u.length ? null : a.reduce(function(c, s) {
    var f, l = (f = s.props.data) !== null && f !== void 0 ? f : r;
    l && t.dataStartIndex + t.dataEndIndex !== 0 && t.dataEndIndex - t.dataStartIndex >= n && (l = l.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var p;
    if (o.dataKey && !o.allowDuplicatedCategory) {
      var h = l === void 0 ? u : l;
      p = si(h, o.dataKey, i);
    } else p = l && l[n] || u[n];
    return p ? [].concat(jr(c), [lv(s, p)]) : c;
  }, []);
}, Bp = function(t, r, n, i) {
  var a = i || { x: t.chartX, y: t.chartY }, o = wF(a, n), u = t.orderedTooltipTicks, c = t.tooltipAxis, s = t.tooltipTicks, f = lI(o, u, s, c);
  if (f >= 0 && s) {
    var l = s[f] && s[f].value, p = Ku(t, r, f, l), h = OF(n, u, f, a);
    return { activeTooltipIndex: f, activeLabel: l, activePayload: p, activeCoordinate: h };
  }
  return null;
}, SF = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.layout, l = t.children, p = t.stackOffset, h = av(f, a);
  return n.reduce(function(d, v) {
    var y, x = v.type.defaultProps !== void 0 ? E(E({}, v.type.defaultProps), v.props) : v.props, w = x.type, b = x.dataKey, S = x.allowDataOverflow, g = x.allowDuplicatedCategory, m = x.scale, O = x.ticks, _ = x.includeHidden, A = x[o];
    if (d[A]) return d;
    var j = Va(t.data, { graphicalItems: i.filter(function(U) {
      var K, ce = o in U.props ? U.props[o] : (K = U.type.defaultProps) === null || K === void 0 ? void 0 : K[o];
      return ce === A;
    }), dataStartIndex: c, dataEndIndex: s }), P = j.length, T, I, C;
    VL(x.domain, S, w) && (T = hu(x.domain, null, S), h && (w === "number" || m !== "auto") && (C = tn(j, b, "category")));
    var M = gy(w);
    if (!T || T.length === 0) {
      var N, k = (N = x.domain) !== null && N !== void 0 ? N : M;
      if (b) {
        if (T = tn(j, b, w), w === "category" && h) {
          var B = Jb(T);
          g && B ? (I = T, T = Xi(0, P)) : g || (T = xf(k, T, v).reduce(function(U, K) {
            return U.indexOf(K) >= 0 ? U : [].concat(jr(U), [K]);
          }, []));
        } else if (w === "category") g ? T = T.filter(function(U) {
          return U !== "" && !Z(U);
        }) : T = xf(k, T, v).reduce(function(U, K) {
          return U.indexOf(K) >= 0 || K === "" || Z(K) ? U : [].concat(jr(U), [K]);
        }, []);
        else if (w === "number") {
          var L = vI(j, i.filter(function(U) {
            var K, ce, de = o in U.props ? U.props[o] : (K = U.type.defaultProps) === null || K === void 0 ? void 0 : K[o], De = "hide" in U.props ? U.props.hide : (ce = U.type.defaultProps) === null || ce === void 0 ? void 0 : ce.hide;
            return de === A && (_ || !De);
          }), b, a, f);
          L && (T = L);
        }
        h && (w === "number" || m !== "auto") && (C = tn(j, b, "category"));
      } else h ? T = Xi(0, P) : u && u[A] && u[A].hasStack && w === "number" ? T = p === "expand" ? [0, 1] : sv(u[A].stackGroups, c, s) : T = iv(j, i.filter(function(U) {
        var K = o in U.props ? U.props[o] : U.type.defaultProps[o], ce = "hide" in U.props ? U.props.hide : U.type.defaultProps.hide;
        return K === A && (_ || !ce);
      }), w, f, true);
      if (w === "number") T = qu(l, T, A, a, O), k && (T = hu(k, T, S));
      else if (w === "category" && k) {
        var q = k, G = T.every(function(U) {
          return q.indexOf(U) >= 0;
        });
        G && (T = q);
      }
    }
    return E(E({}, d), {}, H({}, A, E(E({}, x), {}, { axisType: a, domain: T, categoricalDomain: C, duplicateDomain: I, originalDomain: (y = x.domain) !== null && y !== void 0 ? y : M, isCategorical: h, layout: f })));
  }, {});
}, _F = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, o = r.axisIdKey, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.layout, l = t.children, p = Va(t.data, { graphicalItems: n, dataStartIndex: c, dataEndIndex: s }), h = p.length, d = av(f, a), v = -1;
  return n.reduce(function(y, x) {
    var w = x.type.defaultProps !== void 0 ? E(E({}, x.type.defaultProps), x.props) : x.props, b = w[o], S = gy("number");
    if (!y[b]) {
      v++;
      var g;
      return d ? g = Xi(0, h) : u && u[b] && u[b].hasStack ? (g = sv(u[b].stackGroups, c, s), g = qu(l, g, b, a)) : (g = hu(S, iv(p, n.filter(function(m) {
        var O, _, A = o in m.props ? m.props[o] : (O = m.type.defaultProps) === null || O === void 0 ? void 0 : O[o], j = "hide" in m.props ? m.props.hide : (_ = m.type.defaultProps) === null || _ === void 0 ? void 0 : _.hide;
        return A === b && !j;
      }), "number", f), i.defaultProps.allowDataOverflow), g = qu(l, g, b, a)), E(E({}, y), {}, H({}, b, E(E({ axisType: a }, i.defaultProps), {}, { hide: true, orientation: ze(bF, "".concat(a, ".").concat(v % 2), null), domain: g, originalDomain: S, isCategorical: d, layout: f })));
    }
    return y;
  }, {});
}, AF = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, o = r.graphicalItems, u = r.stackGroups, c = r.dataStartIndex, s = r.dataEndIndex, f = t.children, l = "".concat(i, "Id"), p = Je(f, a), h = {};
  return p && p.length ? h = SF(t, { axes: p, graphicalItems: o, axisType: i, axisIdKey: l, stackGroups: u, dataStartIndex: c, dataEndIndex: s }) : o && o.length && (h = _F(t, { Axis: a, graphicalItems: o, axisType: i, axisIdKey: l, stackGroups: u, dataStartIndex: c, dataEndIndex: s })), h;
}, PF = function(t) {
  var r = wt(t), n = Wt(r, false, true);
  return { tooltipTicks: n, orderedTooltipTicks: gc(n, function(i) {
    return i.coordinate;
  }), tooltipAxis: r, tooltipAxisBandSize: Li(r, n) };
}, Lp = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = Re(r, wr), a = 0, o = 0;
  return t.data && t.data.length !== 0 && (o = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (o = i.props.endIndex)), { chartX: 0, chartY: 0, dataStartIndex: a, dataEndIndex: o, activeTooltipIndex: -1, isTooltipActive: !!n };
}, $F = function(t) {
  return !t || !t.length ? false : t.some(function(r) {
    var n = ft(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, Fp = function(t) {
  return t === "horizontal" ? { numericAxisName: "yAxis", cateAxisName: "xAxis" } : t === "vertical" ? { numericAxisName: "xAxis", cateAxisName: "yAxis" } : t === "centric" ? { numericAxisName: "radiusAxis", cateAxisName: "angleAxis" } : { numericAxisName: "angleAxis", cateAxisName: "radiusAxis" };
}, TF = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, o = a === void 0 ? {} : a, u = t.yAxisMap, c = u === void 0 ? {} : u, s = n.width, f = n.height, l = n.children, p = n.margin || {}, h = Re(l, wr), d = Re(l, ur), v = Object.keys(c).reduce(function(g, m) {
    var O = c[m], _ = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, g), {}, H({}, _, g[_] + O.width)) : g;
  }, { left: p.left || 0, right: p.right || 0 }), y = Object.keys(o).reduce(function(g, m) {
    var O = o[m], _ = O.orientation;
    return !O.mirror && !O.hide ? E(E({}, g), {}, H({}, _, ze(g, "".concat(_)) + O.height)) : g;
  }, { top: p.top || 0, bottom: p.bottom || 0 }), x = E(E({}, y), v), w = x.bottom;
  h && (x.bottom += h.props.height || wr.defaultProps.height), d && r && (x = hI(x, i, n, r));
  var b = s - x.left - x.right, S = f - x.top - x.bottom;
  return E(E({ brushBottom: w }, x), {}, { width: Math.max(b, 0), height: Math.max(S, 0) });
}, EF = function(t, r) {
  if (r === "xAxis") return t[r].width;
  if (r === "yAxis") return t[r].height;
}, WF = function(t) {
  var r = t.chartName, n = t.GraphicalChild, i = t.defaultTooltipEventType, a = i === void 0 ? "axis" : i, o = t.validateTooltipEventTypes, u = o === void 0 ? ["axis"] : o, c = t.axisComponents, s = t.legendContent, f = t.formatAxisMap, l = t.defaultProps, p = function(x, w) {
    var b = w.graphicalItems, S = w.stackGroups, g = w.offset, m = w.updateId, O = w.dataStartIndex, _ = w.dataEndIndex, A = x.barSize, j = x.layout, P = x.barGap, T = x.barCategoryGap, I = x.maxBarSize, C = Fp(j), M = C.numericAxisName, N = C.cateAxisName, k = $F(b), B = [];
    return b.forEach(function(L, q) {
      var G = Va(x.data, { graphicalItems: [L], dataStartIndex: O, dataEndIndex: _ }), U = L.type.defaultProps !== void 0 ? E(E({}, L.type.defaultProps), L.props) : L.props, K = U.dataKey, ce = U.maxBarSize, de = U["".concat(M, "Id")], De = U["".concat(N, "Id")], Mt = {}, Me = c.reduce(function(Ct, It) {
        var Ya = w["".concat(It.axisType, "Map")], Jc = U["".concat(It.axisType, "Id")];
        Ya && Ya[Jc] || It.axisType === "zAxis" || Xt();
        var Qc = Ya[Jc];
        return E(E({}, Ct), {}, H(H({}, It.axisType, Qc), "".concat(It.axisType, "Ticks"), Wt(Qc)));
      }, Mt), W = Me[N], X = Me["".concat(N, "Ticks")], V = S && S[de] && S[de].hasStack && _I(L, S[de].stackGroups), D = ft(L.type).indexOf("Bar") >= 0, pe = Li(W, X), J = [], ge = k && fI({ barSize: A, stackGroups: S, totalSize: EF(Me, N) });
      if (D) {
        var me, Ce, bt = Z(ce) ? I : ce, Qt = (me = (Ce = Li(W, X, true)) !== null && Ce !== void 0 ? Ce : bt) !== null && me !== void 0 ? me : 0;
        J = pI({ barGap: P, barCategoryGap: T, bandSize: Qt !== pe ? Qt : pe, sizeList: ge[De], maxBarSize: bt }), Qt !== pe && (J = J.map(function(Ct) {
          return E(E({}, Ct), {}, { position: E(E({}, Ct.position), {}, { offset: Ct.position.offset - Qt / 2 }) });
        }));
      }
      var Kn = L && L.type && L.type.getComposedData;
      Kn && B.push({ props: E(E({}, Kn(E(E({}, Me), {}, { displayedData: G, props: x, dataKey: K, item: L, bandSize: pe, barPosition: J, offset: g, stackedData: V, layout: j, dataStartIndex: O, dataEndIndex: _ }))), {}, H(H(H({ key: L.key || "item-".concat(q) }, M, Me[M]), N, Me[N]), "animationId", m)), childIndex: l0(L, x.children), item: L });
    }), B;
  }, h = function(x, w) {
    var b = x.props, S = x.dataStartIndex, g = x.dataEndIndex, m = x.updateId;
    if (!hs({ props: b })) return null;
    var O = b.children, _ = b.layout, A = b.stackOffset, j = b.data, P = b.reverseStackOrder, T = Fp(_), I = T.numericAxisName, C = T.cateAxisName, M = Je(O, n), N = OI(j, M, "".concat(I, "Id"), "".concat(C, "Id"), A, P), k = c.reduce(function(U, K) {
      var ce = "".concat(K.axisType, "Map");
      return E(E({}, U), {}, H({}, ce, AF(b, E(E({}, K), {}, { graphicalItems: M, stackGroups: K.axisType === I && N, dataStartIndex: S, dataEndIndex: g }))));
    }, {}), B = TF(E(E({}, k), {}, { props: b, graphicalItems: M }), w == null ? void 0 : w.legendBBox);
    Object.keys(k).forEach(function(U) {
      k[U] = f(b, k[U], B, U.replace("Map", ""), r);
    });
    var L = k["".concat(C, "Map")], q = PF(L), G = p(b, E(E({}, k), {}, { dataStartIndex: S, dataEndIndex: g, updateId: m, graphicalItems: M, stackGroups: N, offset: B }));
    return E(E({ formattedGraphicalItems: G, graphicalItems: M, offset: B, stackGroups: N }, q), k);
  }, d = (function(y) {
    function x(w) {
      var b, S, g;
      return cF(this, x), g = fF(this, x, [w]), H(g, "eventEmitterSymbol", /* @__PURE__ */ Symbol("rechartsEventEmitter")), H(g, "accessibilityManager", new XL()), H(g, "handleLegendBBoxUpdate", function(m) {
        if (m) {
          var O = g.state, _ = O.dataStartIndex, A = O.dataEndIndex, j = O.updateId;
          g.setState(E({ legendBBox: m }, h({ props: g.props, dataStartIndex: _, dataEndIndex: A, updateId: j }, E(E({}, g.state), {}, { legendBBox: m }))));
        }
      }), H(g, "handleReceiveSyncEvent", function(m, O, _) {
        if (g.props.syncId === m) {
          if (_ === g.eventEmitterSymbol && typeof g.props.syncMethod != "function") return;
          g.applySyncEvent(O);
        }
      }), H(g, "handleBrushChange", function(m) {
        var O = m.startIndex, _ = m.endIndex;
        if (O !== g.state.dataStartIndex || _ !== g.state.dataEndIndex) {
          var A = g.state.updateId;
          g.setState(function() {
            return E({ dataStartIndex: O, dataEndIndex: _ }, h({ props: g.props, dataStartIndex: O, dataEndIndex: _, updateId: A }, g.state));
          }), g.triggerSyncEvent({ dataStartIndex: O, dataEndIndex: _ });
        }
      }), H(g, "handleMouseEnter", function(m) {
        var O = g.getMouseInfo(m);
        if (O) {
          var _ = E(E({}, O), {}, { isTooltipActive: true });
          g.setState(_), g.triggerSyncEvent(_);
          var A = g.props.onMouseEnter;
          Y(A) && A(_, m);
        }
      }), H(g, "triggeredAfterMouseMove", function(m) {
        var O = g.getMouseInfo(m), _ = O ? E(E({}, O), {}, { isTooltipActive: true }) : { isTooltipActive: false };
        g.setState(_), g.triggerSyncEvent(_);
        var A = g.props.onMouseMove;
        Y(A) && A(_, m);
      }), H(g, "handleItemMouseEnter", function(m) {
        g.setState(function() {
          return { isTooltipActive: true, activeItem: m, activePayload: m.tooltipPayload, activeCoordinate: m.tooltipPosition || { x: m.cx, y: m.cy } };
        });
      }), H(g, "handleItemMouseLeave", function() {
        g.setState(function() {
          return { isTooltipActive: false };
        });
      }), H(g, "handleMouseMove", function(m) {
        m.persist(), g.throttleTriggeredAfterMouseMove(m);
      }), H(g, "handleMouseLeave", function(m) {
        g.throttleTriggeredAfterMouseMove.cancel();
        var O = { isTooltipActive: false };
        g.setState(O), g.triggerSyncEvent(O);
        var _ = g.props.onMouseLeave;
        Y(_) && _(O, m);
      }), H(g, "handleOuterEvent", function(m) {
        var O = s0(m), _ = ze(g.props, "".concat(O));
        if (O && Y(_)) {
          var A, j;
          /.*touch.*/i.test(O) ? j = g.getMouseInfo(m.changedTouches[0]) : j = g.getMouseInfo(m), _((A = j) !== null && A !== void 0 ? A : {}, m);
        }
      }), H(g, "handleClick", function(m) {
        var O = g.getMouseInfo(m);
        if (O) {
          var _ = E(E({}, O), {}, { isTooltipActive: true });
          g.setState(_), g.triggerSyncEvent(_);
          var A = g.props.onClick;
          Y(A) && A(_, m);
        }
      }), H(g, "handleMouseDown", function(m) {
        var O = g.props.onMouseDown;
        if (Y(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), H(g, "handleMouseUp", function(m) {
        var O = g.props.onMouseUp;
        if (Y(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), H(g, "handleTouchMove", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.throttleTriggeredAfterMouseMove(m.changedTouches[0]);
      }), H(g, "handleTouchStart", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseDown(m.changedTouches[0]);
      }), H(g, "handleTouchEnd", function(m) {
        m.changedTouches != null && m.changedTouches.length > 0 && g.handleMouseUp(m.changedTouches[0]);
      }), H(g, "handleDoubleClick", function(m) {
        var O = g.props.onDoubleClick;
        if (Y(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), H(g, "handleContextMenu", function(m) {
        var O = g.props.onContextMenu;
        if (Y(O)) {
          var _ = g.getMouseInfo(m);
          O(_, m);
        }
      }), H(g, "triggerSyncEvent", function(m) {
        g.props.syncId !== void 0 && So.emit(_o, g.props.syncId, m, g.eventEmitterSymbol);
      }), H(g, "applySyncEvent", function(m) {
        var O = g.props, _ = O.layout, A = O.syncMethod, j = g.state.updateId, P = m.dataStartIndex, T = m.dataEndIndex;
        if (m.dataStartIndex !== void 0 || m.dataEndIndex !== void 0) g.setState(E({ dataStartIndex: P, dataEndIndex: T }, h({ props: g.props, dataStartIndex: P, dataEndIndex: T, updateId: j }, g.state)));
        else if (m.activeTooltipIndex !== void 0) {
          var I = m.chartX, C = m.chartY, M = m.activeTooltipIndex, N = g.state, k = N.offset, B = N.tooltipTicks;
          if (!k) return;
          if (typeof A == "function") M = A(B, m);
          else if (A === "value") {
            M = -1;
            for (var L = 0; L < B.length; L++) if (B[L].value === m.activeLabel) {
              M = L;
              break;
            }
          }
          var q = E(E({}, k), {}, { x: k.left, y: k.top }), G = Math.min(I, q.x + q.width), U = Math.min(C, q.y + q.height), K = B[M] && B[M].value, ce = Ku(g.state, g.props.data, M), de = B[M] ? { x: _ === "horizontal" ? B[M].coordinate : G, y: _ === "horizontal" ? U : B[M].coordinate } : yy;
          g.setState(E(E({}, m), {}, { activeLabel: K, activeCoordinate: de, activePayload: ce, activeTooltipIndex: M }));
        } else g.setState(m);
      }), H(g, "renderCursor", function(m) {
        var O, _ = g.state, A = _.isTooltipActive, j = _.activeCoordinate, P = _.activePayload, T = _.offset, I = _.activeTooltipIndex, C = _.tooltipAxisBandSize, M = g.getTooltipEventType(), N = (O = m.props.active) !== null && O !== void 0 ? O : A, k = g.props.layout, B = m.key || "_recharts-cursor";
        return $.createElement(tF, { key: B, activeCoordinate: j, activePayload: P, activeTooltipIndex: I, chartName: r, element: m, isActive: N, layout: k, offset: T, tooltipAxisBandSize: C, tooltipEventType: M });
      }), H(g, "renderPolarAxis", function(m, O, _) {
        var A = ze(m, "type.axisType"), j = ze(g.state, "".concat(A, "Map")), P = m.type.defaultProps, T = P !== void 0 ? E(E({}, P), m.props) : m.props, I = j && j[T["".concat(A, "Id")]];
        return R.cloneElement(m, E(E({}, I), {}, { className: ee(A, I.className), key: m.key || "".concat(O, "-").concat(_), ticks: Wt(I, true) }));
      }), H(g, "renderPolarGrid", function(m) {
        var O = m.props, _ = O.radialLines, A = O.polarAngles, j = O.polarRadius, P = g.state, T = P.radiusAxisMap, I = P.angleAxisMap, C = wt(T), M = wt(I), N = M.cx, k = M.cy, B = M.innerRadius, L = M.outerRadius;
        return R.cloneElement(m, { polarAngles: Array.isArray(A) ? A : Wt(M, true).map(function(q) {
          return q.coordinate;
        }), polarRadius: Array.isArray(j) ? j : Wt(C, true).map(function(q) {
          return q.coordinate;
        }), cx: N, cy: k, innerRadius: B, outerRadius: L, key: m.key || "polar-grid", radialLines: _ });
      }), H(g, "renderLegend", function() {
        var m = g.state.formattedGraphicalItems, O = g.props, _ = O.children, A = O.width, j = O.height, P = g.props.margin || {}, T = A - (P.left || 0) - (P.right || 0), I = rv({ children: _, formattedGraphicalItems: m, legendWidth: T, legendContent: s });
        if (!I) return null;
        var C = I.item, M = kp(I, rF);
        return R.cloneElement(C, E(E({}, M), {}, { chartWidth: A, chartHeight: j, margin: P, onBBoxUpdate: g.handleLegendBBoxUpdate }));
      }), H(g, "renderTooltip", function() {
        var m, O = g.props, _ = O.children, A = O.accessibilityLayer, j = Re(_, ut);
        if (!j) return null;
        var P = g.state, T = P.isTooltipActive, I = P.activeCoordinate, C = P.activePayload, M = P.activeLabel, N = P.offset, k = (m = j.props.active) !== null && m !== void 0 ? m : T;
        return R.cloneElement(j, { viewBox: E(E({}, N), {}, { x: N.left, y: N.top }), active: k, label: M, payload: k ? C : [], coordinate: I, accessibilityLayer: A });
      }), H(g, "renderBrush", function(m) {
        var O = g.props, _ = O.margin, A = O.data, j = g.state, P = j.offset, T = j.dataStartIndex, I = j.dataEndIndex, C = j.updateId;
        return R.cloneElement(m, { key: m.key || "_recharts-brush", onChange: ni(g.handleBrushChange, m.props.onChange), data: A, x: F(m.props.x) ? m.props.x : P.left, y: F(m.props.y) ? m.props.y : P.top + P.height + P.brushBottom - (_.bottom || 0), width: F(m.props.width) ? m.props.width : P.width, startIndex: T, endIndex: I, updateId: "brush-".concat(C) });
      }), H(g, "renderReferenceElement", function(m, O, _) {
        if (!m) return null;
        var A = g, j = A.clipPathId, P = g.state, T = P.xAxisMap, I = P.yAxisMap, C = P.offset, M = m.type.defaultProps || {}, N = m.props, k = N.xAxisId, B = k === void 0 ? M.xAxisId : k, L = N.yAxisId, q = L === void 0 ? M.yAxisId : L;
        return R.cloneElement(m, { key: m.key || "".concat(O, "-").concat(_), xAxis: T[B], yAxis: I[q], viewBox: { x: C.left, y: C.top, width: C.width, height: C.height }, clipPathId: j });
      }), H(g, "renderActivePoints", function(m) {
        var O = m.item, _ = m.activePoint, A = m.basePoint, j = m.childIndex, P = m.isRange, T = [], I = O.props.key, C = O.item.type.defaultProps !== void 0 ? E(E({}, O.item.type.defaultProps), O.item.props) : O.item.props, M = C.activeDot, N = C.dataKey, k = E(E({ index: j, dataKey: N, cx: _.x, cy: _.y, r: 4, fill: qc(O.item), strokeWidth: 2, stroke: "#fff", payload: _.payload, value: _.value }, re(M, false)), li(M));
        return T.push(x.renderActiveDot(M, k, "".concat(I, "-activePoint-").concat(j))), A ? T.push(x.renderActiveDot(M, E(E({}, k), {}, { cx: A.x, cy: A.y }), "".concat(I, "-basePoint-").concat(j))) : P && T.push(null), T;
      }), H(g, "renderGraphicChild", function(m, O, _) {
        var A = g.filterFormatItem(m, O, _);
        if (!A) return null;
        var j = g.getTooltipEventType(), P = g.state, T = P.isTooltipActive, I = P.tooltipAxis, C = P.activeTooltipIndex, M = P.activeLabel, N = g.props.children, k = Re(N, ut), B = A.props, L = B.points, q = B.isRange, G = B.baseLine, U = A.item.type.defaultProps !== void 0 ? E(E({}, A.item.type.defaultProps), A.item.props) : A.item.props, K = U.activeDot, ce = U.hide, de = U.activeBar, De = U.activeShape, Mt = !!(!ce && T && k && (K || de || De)), Me = {};
        j !== "axis" && k && k.props.trigger === "click" ? Me = { onClick: ni(g.handleItemMouseEnter, m.props.onClick) } : j !== "axis" && (Me = { onMouseLeave: ni(g.handleItemMouseLeave, m.props.onMouseLeave), onMouseEnter: ni(g.handleItemMouseEnter, m.props.onMouseEnter) });
        var W = R.cloneElement(m, E(E({}, A.props), Me));
        function X(It) {
          return typeof I.dataKey == "function" ? I.dataKey(It.payload) : null;
        }
        if (Mt) if (C >= 0) {
          var V, D;
          if (I.dataKey && !I.allowDuplicatedCategory) {
            var pe = typeof I.dataKey == "function" ? X : "payload.".concat(I.dataKey.toString());
            V = si(L, pe, M), D = q && G && si(G, pe, M);
          } else V = L == null ? void 0 : L[C], D = q && G && G[C];
          if (De || de) {
            var J = m.props.activeIndex !== void 0 ? m.props.activeIndex : C;
            return [R.cloneElement(m, E(E(E({}, A.props), Me), {}, { activeIndex: J })), null, null];
          }
          if (!Z(V)) return [W].concat(jr(g.renderActivePoints({ item: A, activePoint: V, basePoint: D, childIndex: C, isRange: q })));
        } else {
          var ge, me = (ge = g.getItemByXY(g.state.activeCoordinate)) !== null && ge !== void 0 ? ge : { graphicalItem: W }, Ce = me.graphicalItem, bt = Ce.item, Qt = bt === void 0 ? m : bt, Kn = Ce.childIndex, Ct = E(E(E({}, A.props), Me), {}, { activeIndex: Kn });
          return [R.cloneElement(Qt, Ct), null, null];
        }
        return q ? [W, null, null] : [W, null];
      }), H(g, "renderCustomized", function(m, O, _) {
        return R.cloneElement(m, E(E({ key: "recharts-customized-".concat(_) }, g.props), g.state));
      }), H(g, "renderMap", { CartesianGrid: { handler: ci, once: true }, ReferenceArea: { handler: g.renderReferenceElement }, ReferenceLine: { handler: ci }, ReferenceDot: { handler: g.renderReferenceElement }, XAxis: { handler: ci }, YAxis: { handler: ci }, Brush: { handler: g.renderBrush, once: true }, Bar: { handler: g.renderGraphicChild }, Line: { handler: g.renderGraphicChild }, Area: { handler: g.renderGraphicChild }, Radar: { handler: g.renderGraphicChild }, RadialBar: { handler: g.renderGraphicChild }, Scatter: { handler: g.renderGraphicChild }, Pie: { handler: g.renderGraphicChild }, Funnel: { handler: g.renderGraphicChild }, Tooltip: { handler: g.renderCursor, once: true }, PolarGrid: { handler: g.renderPolarGrid, once: true }, PolarAngleAxis: { handler: g.renderPolarAxis }, PolarRadiusAxis: { handler: g.renderPolarAxis }, Customized: { handler: g.renderCustomized } }), g.clipPathId = "".concat((b = w.id) !== null && b !== void 0 ? b : Oa("recharts"), "-clip"), g.throttleTriggeredAfterMouseMove = td(g.triggeredAfterMouseMove, (S = w.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), g.state = {}, g;
    }
    return dF(x, y), lF(x, [{ key: "componentDidMount", value: function() {
      var b, S;
      this.addListener(), this.accessibilityManager.setDetails({ container: this.container, offset: { left: (b = this.props.margin.left) !== null && b !== void 0 ? b : 0, top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0 }, coordinateList: this.state.tooltipTicks, mouseHandlerCallback: this.triggeredAfterMouseMove, layout: this.props.layout }), this.displayDefaultTooltip();
    } }, { key: "displayDefaultTooltip", value: function() {
      var b = this.props, S = b.children, g = b.data, m = b.height, O = b.layout, _ = Re(S, ut);
      if (_) {
        var A = _.props.defaultIndex;
        if (!(typeof A != "number" || A < 0 || A > this.state.tooltipTicks.length - 1)) {
          var j = this.state.tooltipTicks[A] && this.state.tooltipTicks[A].value, P = Ku(this.state, g, A, j), T = this.state.tooltipTicks[A].coordinate, I = (this.state.offset.top + m) / 2, C = O === "horizontal", M = C ? { x: T, y: I } : { y: T, x: I }, N = this.state.formattedGraphicalItems.find(function(B) {
            var L = B.item;
            return L.type.name === "Scatter";
          });
          N && (M = E(E({}, M), N.props.points[A].tooltipPosition), P = N.props.points[A].tooltipPayload);
          var k = { activeTooltipIndex: A, isTooltipActive: true, activeLabel: j, activePayload: P, activeCoordinate: M };
          this.setState(k), this.renderCursor(_), this.accessibilityManager.setIndex(A);
        }
      }
    } }, { key: "getSnapshotBeforeUpdate", value: function(b, S) {
      if (!this.props.accessibilityLayer) return null;
      if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({ coordinateList: this.state.tooltipTicks }), this.props.layout !== b.layout && this.accessibilityManager.setDetails({ layout: this.props.layout }), this.props.margin !== b.margin) {
        var g, m;
        this.accessibilityManager.setDetails({ offset: { left: (g = this.props.margin.left) !== null && g !== void 0 ? g : 0, top: (m = this.props.margin.top) !== null && m !== void 0 ? m : 0 } });
      }
      return null;
    } }, { key: "componentDidUpdate", value: function(b) {
      To([Re(b.children, ut)], [Re(this.props.children, ut)]) || this.displayDefaultTooltip();
    } }, { key: "componentWillUnmount", value: function() {
      this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
    } }, { key: "getTooltipEventType", value: function() {
      var b = Re(this.props.children, ut);
      if (b && typeof b.props.shared == "boolean") {
        var S = b.props.shared ? "axis" : "item";
        return u.indexOf(S) >= 0 ? S : a;
      }
      return a;
    } }, { key: "getMouseInfo", value: function(b) {
      if (!this.container) return null;
      var S = this.container, g = S.getBoundingClientRect(), m = kT(g), O = { chartX: Math.round(b.pageX - m.left), chartY: Math.round(b.pageY - m.top) }, _ = g.width / S.offsetWidth || 1, A = this.inRange(O.chartX, O.chartY, _);
      if (!A) return null;
      var j = this.state, P = j.xAxisMap, T = j.yAxisMap, I = this.getTooltipEventType(), C = Bp(this.state, this.props.data, this.props.layout, A);
      if (I !== "axis" && P && T) {
        var M = wt(P).scale, N = wt(T).scale, k = M && M.invert ? M.invert(O.chartX) : null, B = N && N.invert ? N.invert(O.chartY) : null;
        return E(E({}, O), {}, { xValue: k, yValue: B }, C);
      }
      return C ? E(E({}, O), C) : null;
    } }, { key: "inRange", value: function(b, S) {
      var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, m = this.props.layout, O = b / g, _ = S / g;
      if (m === "horizontal" || m === "vertical") {
        var A = this.state.offset, j = O >= A.left && O <= A.left + A.width && _ >= A.top && _ <= A.top + A.height;
        return j ? { x: O, y: _ } : null;
      }
      var P = this.state, T = P.angleAxisMap, I = P.radiusAxisMap;
      if (T && I) {
        var C = wt(T);
        return Sf({ x: O, y: _ }, C);
      }
      return null;
    } }, { key: "parseEventsOfWrapper", value: function() {
      var b = this.props.children, S = this.getTooltipEventType(), g = Re(b, ut), m = {};
      g && S === "axis" && (g.props.trigger === "click" ? m = { onClick: this.handleClick } : m = { onMouseEnter: this.handleMouseEnter, onDoubleClick: this.handleDoubleClick, onMouseMove: this.handleMouseMove, onMouseLeave: this.handleMouseLeave, onTouchMove: this.handleTouchMove, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onContextMenu: this.handleContextMenu });
      var O = li(this.props, this.handleOuterEvent);
      return E(E({}, O), m);
    } }, { key: "addListener", value: function() {
      So.on(_o, this.handleReceiveSyncEvent);
    } }, { key: "removeListener", value: function() {
      So.removeListener(_o, this.handleReceiveSyncEvent);
    } }, { key: "filterFormatItem", value: function(b, S, g) {
      for (var m = this.state.formattedGraphicalItems, O = 0, _ = m.length; O < _; O++) {
        var A = m[O];
        if (A.item === b || A.props.key === b.key || S === ft(A.item.type) && g === A.childIndex) return A;
      }
      return null;
    } }, { key: "renderClipPath", value: function() {
      var b = this.clipPathId, S = this.state.offset, g = S.left, m = S.top, O = S.height, _ = S.width;
      return $.createElement("defs", null, $.createElement("clipPath", { id: b }, $.createElement("rect", { x: g, y: m, height: O, width: _ })));
    } }, { key: "getXScales", value: function() {
      var b = this.state.xAxisMap;
      return b ? Object.entries(b).reduce(function(S, g) {
        var m = Dp(g, 2), O = m[0], _ = m[1];
        return E(E({}, S), {}, H({}, O, _.scale));
      }, {}) : null;
    } }, { key: "getYScales", value: function() {
      var b = this.state.yAxisMap;
      return b ? Object.entries(b).reduce(function(S, g) {
        var m = Dp(g, 2), O = m[0], _ = m[1];
        return E(E({}, S), {}, H({}, O, _.scale));
      }, {}) : null;
    } }, { key: "getXScaleByAxisId", value: function(b) {
      var S;
      return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[b]) === null || S === void 0 ? void 0 : S.scale;
    } }, { key: "getYScaleByAxisId", value: function(b) {
      var S;
      return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[b]) === null || S === void 0 ? void 0 : S.scale;
    } }, { key: "getItemByXY", value: function(b) {
      var S = this.state, g = S.formattedGraphicalItems, m = S.activeItem;
      if (g && g.length) for (var O = 0, _ = g.length; O < _; O++) {
        var A = g[O], j = A.props, P = A.item, T = P.type.defaultProps !== void 0 ? E(E({}, P.type.defaultProps), P.props) : P.props, I = ft(P.type);
        if (I === "Bar") {
          var C = (j.data || []).find(function(B) {
            return xD(b, B);
          });
          if (C) return { graphicalItem: A, payload: C };
        } else if (I === "RadialBar") {
          var M = (j.data || []).find(function(B) {
            return Sf(b, B);
          });
          if (M) return { graphicalItem: A, payload: M };
        } else if (Wa(A, m) || Ua(A, m) || Cn(A, m)) {
          var N = Sk({ graphicalItem: A, activeTooltipItem: m, itemData: T.data }), k = T.activeIndex === void 0 ? N : T.activeIndex;
          return { graphicalItem: E(E({}, A), {}, { childIndex: k }), payload: Cn(A, m) ? T.data[N] : A.props.data[N] };
        }
      }
      return null;
    } }, { key: "render", value: function() {
      var b = this;
      if (!hs(this)) return null;
      var S = this.props, g = S.children, m = S.className, O = S.width, _ = S.height, A = S.style, j = S.compact, P = S.title, T = S.desc, I = kp(S, nF), C = re(I, false);
      if (j) return $.createElement(Op, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, $.createElement(jo, ar({}, C, { width: O, height: _, title: P, desc: T }), this.renderClipPath(), vs(g, this.renderMap)));
      if (this.props.accessibilityLayer) {
        var M, N;
        C.tabIndex = (M = this.props.tabIndex) !== null && M !== void 0 ? M : 0, C.role = (N = this.props.role) !== null && N !== void 0 ? N : "application", C.onKeyDown = function(B) {
          b.accessibilityManager.keyboardEvent(B);
        }, C.onFocus = function() {
          b.accessibilityManager.focus();
        };
      }
      var k = this.parseEventsOfWrapper();
      return $.createElement(Op, { state: this.state, width: this.props.width, height: this.props.height, clipPathId: this.clipPathId }, $.createElement("div", ar({ className: ee("recharts-wrapper", m), style: E({ position: "relative", cursor: "default", width: O, height: _ }, A) }, k, { ref: function(L) {
        b.container = L;
      } }), $.createElement(jo, ar({}, C, { width: O, height: _, title: P, desc: T, style: xF }), this.renderClipPath(), vs(g, this.renderMap)), this.renderLegend(), this.renderTooltip()));
    } }]);
  })(R.Component);
  H(d, "displayName", r), H(d, "defaultProps", E({ layout: "horizontal", stackOffset: "none", barCategoryGap: "10%", barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: "index" }, l)), H(d, "getDerivedStateFromProps", function(y, x) {
    var w = y.dataKey, b = y.data, S = y.children, g = y.width, m = y.height, O = y.layout, _ = y.stackOffset, A = y.margin, j = x.dataStartIndex, P = x.dataEndIndex;
    if (x.updateId === void 0) {
      var T = Lp(y);
      return E(E(E({}, T), {}, { updateId: 0 }, h(E(E({ props: y }, T), {}, { updateId: 0 }), x)), {}, { prevDataKey: w, prevData: b, prevWidth: g, prevHeight: m, prevLayout: O, prevStackOffset: _, prevMargin: A, prevChildren: S });
    }
    if (w !== x.prevDataKey || b !== x.prevData || g !== x.prevWidth || m !== x.prevHeight || O !== x.prevLayout || _ !== x.prevStackOffset || !or(A, x.prevMargin)) {
      var I = Lp(y), C = { chartX: x.chartX, chartY: x.chartY, isTooltipActive: x.isTooltipActive }, M = E(E({}, Bp(x, b, O)), {}, { updateId: x.updateId + 1 }), N = E(E(E({}, I), C), M);
      return E(E(E({}, N), h(E({ props: y }, N), x)), {}, { prevDataKey: w, prevData: b, prevWidth: g, prevHeight: m, prevLayout: O, prevStackOffset: _, prevMargin: A, prevChildren: S });
    }
    if (!To(S, x.prevChildren)) {
      var k, B, L, q, G = Re(S, wr), U = G && (k = (B = G.props) === null || B === void 0 ? void 0 : B.startIndex) !== null && k !== void 0 ? k : j, K = G && (L = (q = G.props) === null || q === void 0 ? void 0 : q.endIndex) !== null && L !== void 0 ? L : P, ce = U !== j || K !== P, de = !Z(b), De = de && !ce ? x.updateId : x.updateId + 1;
      return E(E({ updateId: De }, h(E(E({ props: y }, x), {}, { updateId: De, dataStartIndex: U, dataEndIndex: K }), x)), {}, { prevChildren: S, dataStartIndex: U, dataEndIndex: K });
    }
    return null;
  }), H(d, "renderActiveDot", function(y, x, w) {
    var b;
    return R.isValidElement(y) ? b = R.cloneElement(y, x) : Y(y) ? b = y(x) : b = $.createElement(Av, x), $.createElement(_e, { className: "recharts-active-dot", key: w }, b);
  });
  var v = R.forwardRef(function(x, w) {
    return $.createElement(d, ar({}, x, { ref: w }));
  });
  return v.displayName = d.displayName, v;
};
export { At as A, Gn as B, If as C, Av as D, DF as E, Hv as F, St as G, Gv as H, FF as I, BF as J, LF as K, ur as L, IF as M, cL as N, Wt as O, Xa as P, RF as Q, CF as R, yk as S, ut as T, Fa as U, MF as V, NF as W, ay as X, sy as Y, Fd as _, $t as a, RM as b, qM as c, Ai as d, _e as e, re as f, kF as g, fi as h, Y as i, Ee as j, Z as k, Qe as l, ze as m, er as n, Wc as o, $e as p, F as q, Ht as r, Je as s, rd as t, NI as u, Ze as v, Ut as w, Ye as x, Oa as y, WF as z };
