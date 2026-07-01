import {
  t as o,
  c as T,
  f as x,
  b as S,
  h as X,
  i as M,
  g as y
} from "./en-US-BIej3L2x.js";
function D(s, t) {
  const e = o(s), a = o(t), n = e.getTime() - a.getTime();
  return n < 0 ? -1 : n > 0 ? 1 : n;
}
function O(s) {
  return T(s, Date.now());
}
function _(s, t) {
  const e = o(s), a = o(t), n = e.getFullYear() - a.getFullYear(), f = e.getMonth() - a.getMonth();
  return n * 12 + f;
}
function Y(s) {
  return (t) => {
    const e = Math.trunc, a = e(t);
    return a === 0 ? 0 : a;
  };
}
function b(s, t) {
  return +o(s) - +o(t);
}
function w(s) {
  const t = o(s);
  return t.setHours(23, 59, 59, 999), t;
}
function F(s) {
  const t = o(s), e = t.getMonth();
  return t.setFullYear(t.getFullYear(), e + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function N(s) {
  const t = o(s);
  return +w(t) == +F(t);
}
function R(s, t) {
  const e = o(s), a = o(t), n = D(e, a), f = Math.abs(_(e, a));
  let i;
  if (f < 1) i = 0;
  else {
    e.getMonth() === 1 && e.getDate() > 27 && e.setDate(30), e.setMonth(e.getMonth() - n * f);
    let r = D(e, a) === -n;
    N(o(s)) && f === 1 && D(s, a) === 1 && (r = false), i = n * (f - Number(r));
  }
  return i === 0 ? 0 : i;
}
function H(s, t, e) {
  const a = b(s, t) / 1e3;
  return Y()(a);
}
function L(s, t, e) {
  var _a, _b;
  const a = y(), n = (_b = (_a = e == null ? void 0 : e.locale) != null ? _a : a.locale) != null ? _b : x, f = 2520, i = D(s, t);
  if (isNaN(i)) throw new RangeError("Invalid time value");
  const r = Object.assign({}, e, {
    addSuffix: e == null ? void 0 : e.addSuffix,
    comparison: i
  });
  let h, m;
  i > 0 ? (h = o(t), m = o(s)) : (h = o(s), m = o(t));
  const l = H(m, h), I = (S(m) - S(h)) / 1e3, c = Math.round((l - I) / 60);
  let d;
  if (c < 2) return e != null && e.includeSeconds ? l < 5 ? n.formatDistance("lessThanXSeconds", 5, r) : l < 10 ? n.formatDistance("lessThanXSeconds", 10, r) : l < 20 ? n.formatDistance("lessThanXSeconds", 20, r) : l < 40 ? n.formatDistance("halfAMinute", 0, r) : l < 60 ? n.formatDistance("lessThanXMinutes", 1, r) : n.formatDistance("xMinutes", 1, r) : c === 0 ? n.formatDistance("lessThanXMinutes", 1, r) : n.formatDistance("xMinutes", c, r);
  if (c < 45) return n.formatDistance("xMinutes", c, r);
  if (c < 90) return n.formatDistance("aboutXHours", 1, r);
  if (c < X) {
    const u = Math.round(c / 60);
    return n.formatDistance("aboutXHours", u, r);
  } else {
    if (c < f) return n.formatDistance("xDays", 1, r);
    if (c < M) {
      const u = Math.round(c / X);
      return n.formatDistance("xDays", u, r);
    } else if (c < M * 2) return d = Math.round(c / M), n.formatDistance("aboutXMonths", d, r);
  }
  if (d = R(m, h), d < 12) {
    const u = Math.round(c / M);
    return n.formatDistance("xMonths", u, r);
  } else {
    const u = d % 12, g = Math.trunc(d / 12);
    return u < 3 ? n.formatDistance("aboutXYears", g, r) : u < 9 ? n.formatDistance("overXYears", g, r) : n.formatDistance("almostXYears", g + 1, r);
  }
}
function A(s, t) {
  return L(s, O(s), t);
}
export {
  b as a,
  H as d,
  A as f,
  Y as g
};
