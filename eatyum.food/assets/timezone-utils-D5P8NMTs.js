import {
  m as I,
  a as F
} from "./en-US-BIej3L2x.js";
import {
  f as L
} from "./format-Chey2Vsb.js";
import {
  a as W,
  g as k,
  f as R,
  d as j
} from "./formatDistanceToNow-BStQM2-5.js";
function Z(e, t, n) {
  const r = W(e, t) / I;
  return k()(r);
}
function v(e, t) {
  const r = q(e);
  let i;
  if (r.date) {
    const u = V(r.date, 2);
    i = X(u.restDateString, u.year);
  }
  if (!i || isNaN(i.getTime())) return /* @__PURE__ */ new Date(NaN);
  const a = i.getTime();
  let s = 0, o;
  if (r.time && (s = B(r.time), isNaN(s))) return /* @__PURE__ */ new Date(NaN);
  if (r.timezone) {
    if (o = K(r.timezone), isNaN(o)) return /* @__PURE__ */ new Date(NaN);
  } else {
    const u = new Date(a + s), f = /* @__PURE__ */ new Date(0);
    return f.setFullYear(u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()), f.setHours(u.getUTCHours(), u.getUTCMinutes(), u.getUTCSeconds(), u.getUTCMilliseconds()), f;
  }
  return new Date(a + s + o);
}
const m = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, P = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, G = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, J = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function q(e) {
  const t = {}, n = e.split(m.dateTimeDelimiter);
  let r;
  if (n.length > 2) return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], m.timeZoneDelimiter.test(t.date) && (t.date = e.split(m.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    const i = m.timezone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timezone = i[1]) : t.time = r;
  }
  return t;
}
function V(e, t) {
  const n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
  if (!r) return {
    year: NaN,
    restDateString: ""
  };
  const i = r[1] ? parseInt(r[1]) : null, a = r[2] ? parseInt(r[2]) : null;
  return {
    year: a === null ? i : a * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function X(e, t) {
  if (t === null) return /* @__PURE__ */ new Date(NaN);
  const n = e.match(P);
  if (!n) return /* @__PURE__ */ new Date(NaN);
  const r = !!n[4], i = l(n[1]), a = l(n[2]) - 1, s = l(n[3]), o = l(n[4]), u = l(n[5]) - 1;
  if (r) return re(t, o, u) ? Q(t, o, u) : /* @__PURE__ */ new Date(NaN);
  {
    const f = /* @__PURE__ */ new Date(0);
    return !te(t, a, s) || !ne(t, i) ? /* @__PURE__ */ new Date(NaN) : (f.setUTCFullYear(t, a, Math.max(i, s)), f);
  }
}
function l(e) {
  return e ? parseInt(e) : 1;
}
function B(e) {
  const t = e.match(G);
  if (!t) return NaN;
  const n = D(t[1]), r = D(t[2]), i = D(t[3]);
  return ie(n, r, i) ? n * F + r * I + i * 1e3 : NaN;
}
function D(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function K(e) {
  if (e === "Z") return 0;
  const t = e.match(J);
  if (!t) return 0;
  const n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), i = t[3] && parseInt(t[3]) || 0;
  return ae(r, i) ? n * (r * F + i * I) : NaN;
}
function Q(e, t, n) {
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = (t - 1) * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const ee = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function S(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function te(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (ee[t] || (S(e) ? 29 : 28));
}
function ne(e, t) {
  return t >= 1 && t <= (S(e) ? 366 : 365);
}
function re(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function ie(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function ae(e, t) {
  return t >= 0 && t <= 59;
}
function se(e, t) {
  const n = le(t);
  return "formatToParts" in n ? ue(n, e) : ce(n, e);
}
const oe = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function ue(e, t) {
  try {
    const n = e.formatToParts(t), r = [];
    for (let i = 0; i < n.length; i++) {
      const a = oe[n[i].type];
      a !== void 0 && (r[a] = parseInt(n[i].value, 10));
    }
    return r;
  } catch (n) {
    if (n instanceof RangeError) return [NaN];
    throw n;
  }
}
function ce(e, t) {
  const n = e.format(t), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [parseInt(r[3], 10), parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[4], 10), parseInt(r[5], 10), parseInt(r[6], 10)];
}
const N = {}, M = new Intl.DateTimeFormat("en-US", {
  hourCycle: "h23",
  timeZone: "America/New_York",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
}).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), fe = M === "06/25/2014, 00:00:00" || M === "\u200E06\u200E/\u200E25\u200E/\u200E2014\u200E \u200E00\u200E:\u200E00\u200E:\u200E00";
function le(e) {
  return N[e] || (N[e] = fe ? new Intl.DateTimeFormat("en-US", {
    hourCycle: "h23",
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) : new Intl.DateTimeFormat("en-US", {
    hour12: false,
    timeZone: e,
    year: "numeric",
    month: "numeric",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), N[e];
}
function _(e, t, n, r, i, a, s) {
  const o = /* @__PURE__ */ new Date(0);
  return o.setUTCFullYear(e, t, n), o.setUTCHours(r, i, a, s), o;
}
const h = 36e5, me = 6e4, p = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/
};
function E(e, t, n) {
  if (!e) return 0;
  let r = p.timezoneZ.exec(e);
  if (r) return 0;
  let i, a;
  if (r = p.timezoneHH.exec(e), r) return i = parseInt(r[1], 10), U(i) ? -(i * h) : NaN;
  if (r = p.timezoneHHMM.exec(e), r) {
    i = parseInt(r[2], 10);
    const s = parseInt(r[3], 10);
    return U(i, s) ? (a = Math.abs(i) * h + s * me, r[1] === "+" ? -a : a) : NaN;
  }
  if (Ne(e)) {
    t = new Date(t || Date.now());
    const s = n ? t : de(t), o = w(s, e);
    return -(n ? o : De(t, o, e));
  }
  return NaN;
}
function de(e) {
  return _(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds());
}
function w(e, t) {
  const n = se(e, t), r = _(n[0], n[1] - 1, n[2], n[3] % 24, n[4], n[5], 0).getTime();
  let i = e.getTime();
  const a = i % 1e3;
  return i -= a >= 0 ? a : 1e3 + a, r - i;
}
function De(e, t, n) {
  let i = e.getTime() - t;
  const a = w(new Date(i), n);
  if (t === a) return t;
  i -= a - t;
  const s = w(new Date(i), n);
  return a === s ? a : Math.max(a, s);
}
function U(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
const $ = {};
function Ne(e) {
  if ($[e]) return true;
  try {
    return new Intl.DateTimeFormat(void 0, {
      timeZone: e
    }), $[e] = true, true;
  } catch (e2) {
    return false;
  }
}
function y(e) {
  const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), +e - +t;
}
const pe = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/, T = 36e5, C = 6e4, Te = 2, c = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  YY: /^(\d{2})$/,
  YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
  YYYY: /^(\d{4})/,
  YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  timeZone: pe
};
function ge(e, t = {}) {
  if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null) return /* @__PURE__ */ new Date(NaN);
  const n = t.additionalDigits == null ? Te : Number(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]") return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") return new Date(e);
  if (Object.prototype.toString.call(e) !== "[object String]") return /* @__PURE__ */ new Date(NaN);
  const r = we(e), {
    year: i,
    restDateString: a
  } = Ie(r.date, n), s = Ye(a, i);
  if (s === null || isNaN(s.getTime())) return /* @__PURE__ */ new Date(NaN);
  if (s) {
    const o = s.getTime();
    let u = 0, f;
    if (r.time && (u = Me(r.time), u === null || isNaN(u))) return /* @__PURE__ */ new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (f = E(r.timeZone || t.timeZone, new Date(o + u)), isNaN(f)) return /* @__PURE__ */ new Date(NaN);
    } else f = y(new Date(o + u)), f = y(new Date(o + u + f));
    return new Date(o + u + f);
  } else return /* @__PURE__ */ new Date(NaN);
}
function we(e) {
  const t = {};
  let n = c.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = c.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    const i = c.timeZone.exec(r);
    i ? (t.time = r.replace(i[1], ""), t.timeZone = i[1].trim()) : t.time = r;
  }
  return t;
}
function Ie(e, t) {
  if (e) {
    const n = c.YYY[t], r = c.YYYYY[t];
    let i = c.YYYY.exec(e) || r.exec(e);
    if (i) {
      const a = i[1];
      return {
        year: parseInt(a, 10),
        restDateString: e.slice(a.length)
      };
    }
    if (i = c.YY.exec(e) || n.exec(e), i) {
      const a = i[1];
      return {
        year: parseInt(a, 10) * 100,
        restDateString: e.slice(a.length)
      };
    }
  }
  return {
    year: null
  };
}
function Ye(e, t) {
  if (t === null) return null;
  let n, r, i;
  if (!e || !e.length) return n = /* @__PURE__ */ new Date(0), n.setUTCFullYear(t), n;
  let a = c.MM.exec(e);
  if (a) return n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1, x(t, r) ? (n.setUTCFullYear(t, r), n) : /* @__PURE__ */ new Date(NaN);
  if (a = c.DDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0);
    const s = parseInt(a[1], 10);
    return $e(t, s) ? (n.setUTCFullYear(t, 0, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = c.MMDD.exec(e), a) {
    n = /* @__PURE__ */ new Date(0), r = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10);
    return x(t, r, s) ? (n.setUTCFullYear(t, r, s), n) : /* @__PURE__ */ new Date(NaN);
  }
  if (a = c.Www.exec(e), a) return i = parseInt(a[1], 10) - 1, O(i) ? H(t, i) : /* @__PURE__ */ new Date(NaN);
  if (a = c.WwwD.exec(e), a) {
    i = parseInt(a[1], 10) - 1;
    const s = parseInt(a[2], 10) - 1;
    return O(i, s) ? H(t, i, s) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Me(e) {
  let t, n, r = c.HH.exec(e);
  if (r) return t = parseFloat(r[1].replace(",", ".")), g(t) ? t % 24 * T : NaN;
  if (r = c.HHMM.exec(e), r) return t = parseInt(r[1], 10), n = parseFloat(r[2].replace(",", ".")), g(t, n) ? t % 24 * T + n * C : NaN;
  if (r = c.HHMMSS.exec(e), r) {
    t = parseInt(r[1], 10), n = parseInt(r[2], 10);
    const i = parseFloat(r[3].replace(",", "."));
    return g(t, n, i) ? t % 24 * T + n * C + i * 1e3 : NaN;
  }
  return null;
}
function H(e, t, n) {
  t = t || 0, n = n || 0;
  const r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  const i = r.getUTCDay() || 7, a = t * 7 + n + 1 - i;
  return r.setUTCDate(r.getUTCDate() + a), r;
}
const he = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Ue = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function z(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function x(e, t, n) {
  if (t < 0 || t > 11) return false;
  if (n != null) {
    if (n < 1) return false;
    const r = z(e);
    if (r && n > Ue[t] || !r && n > he[t]) return false;
  }
  return true;
}
function $e(e, t) {
  if (t < 1) return false;
  const n = z(e);
  return !(n && t > 366 || !n && t > 365);
}
function O(e, t) {
  return !(e < 0 || e > 52 || t != null && (t < 0 || t > 6));
}
function g(e, t, n) {
  return !(e < 0 || e >= 25 || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
function A(e, t, n) {
  e = ge(e, n);
  const r = E(t, e, true), i = new Date(e.getTime() - r), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), a.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), a;
}
const b = "Africa/Lagos", ye = /(Z|[+-]\d{2}(?::?\d{2})?)$/i;
function d(e) {
  if (!e) return /* @__PURE__ */ new Date();
  const t = e.trim().replace(" ", "T"), n = ye.test(t) ? t : `${t}Z`;
  return v(n);
}
function Ce(e) {
  const t = d(e);
  return A(t, b);
}
function Fe() {
  return A(/* @__PURE__ */ new Date(), b);
}
function Y(e, t = "MMM dd, yyyy HH:mm") {
  const n = Ce(e);
  return L(n, t);
}
function Ze(e) {
  try {
    if (!e) return {
      minutes: 0,
      formatted: "just now"
    };
    const t = d(e), n = /* @__PURE__ */ new Date();
    if (isNaN(t.getTime())) return {
      minutes: 0,
      formatted: "just now"
    };
    const r = Z(n, t), i = j(n, t);
    if (i < 0 || r < 0) return {
      minutes: 0,
      formatted: "just now"
    };
    let a;
    if (i < 60) a = `${i}s ago`;
    else if (r < 60) a = `${r}m ago`;
    else {
      const s = Math.floor(r / 60), o = r % 60;
      a = `${s}h ${o}m ago`;
    }
    return {
      minutes: r,
      formatted: a
    };
  } catch (t) {
    return console.error("Error calculating elapsed time:", t, "Input:", e), {
      minutes: 0,
      formatted: "just now"
    };
  }
}
function Se(e) {
  try {
    if (!e) return {
      minutes: 0,
      formatted: "Starting now",
      isUrgent: true
    };
    const t = d(e), n = /* @__PURE__ */ new Date();
    if (isNaN(t.getTime())) return {
      minutes: 0,
      formatted: "Starting now",
      isUrgent: true
    };
    const r = Z(t, n);
    let i, a = false;
    if (r <= 0) i = "Starting now", a = true;
    else if (r < 60) i = `${r}m left`, a = r <= 60;
    else {
      const s = Math.floor(r / 60), o = r % 60;
      i = `${s}h ${o}m left`, a = false;
    }
    return {
      minutes: r,
      formatted: i,
      isUrgent: a
    };
  } catch (t) {
    return console.error("Error calculating time remaining:", t), {
      minutes: 0,
      formatted: "Starting now",
      isUrgent: true
    };
  }
}
function _e(e) {
  return Y(e, "MMM dd, yyyy HH:mm");
}
function Ee(e) {
  return Y(e, "MMM dd");
}
function ze(e) {
  return Y(e, "HH:mm");
}
function Ae(e) {
  try {
    if (!e) return "recently";
    const t = d(e);
    return isNaN(t.getTime()) ? "recently" : R(t, {
      addSuffix: true
    });
  } catch (e2) {
    return "recently";
  }
}
export {
  Y as a,
  Ee as b,
  ze as c,
  Ze as d,
  d as e,
  _e as f,
  Se as g,
  Ae as h,
  Ce as i,
  Fe as j,
  v as p
};
