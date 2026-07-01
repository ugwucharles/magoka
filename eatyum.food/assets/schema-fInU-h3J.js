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
var wd = Object.defineProperty;
var vd = (e, t, n) => t in e ? wd(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var o = (e, t, n) => vd(e, typeof t != "symbol" ? t + "" : t, n);
import { z as y } from "./index-Ph36iM9Q.js";
const s = /* @__PURE__ */ Symbol.for("drizzle:entityKind");
function O(e, t) {
  var _a2;
  if (!e || typeof e != "object") return false;
  if (e instanceof t) return true;
  if (!Object.prototype.hasOwnProperty.call(t, s)) throw new Error(`Class "${(_a2 = t.name) != null ? _a2 : "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`);
  let n = Object.getPrototypeOf(e).constructor;
  if (n) for (; n; ) {
    if (s in n && n[s] === t[s]) return true;
    n = Object.getPrototypeOf(n);
  }
  return false;
}
var De;
De = s;
class J {
  constructor(t, n) {
    o(this, "name");
    o(this, "keyAsName");
    o(this, "primary");
    o(this, "notNull");
    o(this, "default");
    o(this, "defaultFn");
    o(this, "onUpdateFn");
    o(this, "hasDefault");
    o(this, "isUnique");
    o(this, "uniqueName");
    o(this, "uniqueType");
    o(this, "dataType");
    o(this, "columnType");
    o(this, "enumValues");
    o(this, "generated");
    o(this, "generatedIdentity");
    o(this, "config");
    this.table = t, this.config = n, this.name = n.name, this.keyAsName = n.keyAsName, this.notNull = n.notNull, this.default = n.default, this.defaultFn = n.defaultFn, this.onUpdateFn = n.onUpdateFn, this.hasDefault = n.hasDefault, this.primary = n.primaryKey, this.isUnique = n.isUnique, this.uniqueName = n.uniqueName, this.uniqueType = n.uniqueType, this.dataType = n.dataType, this.columnType = n.columnType, this.generated = n.generated, this.generatedIdentity = n.generatedIdentity;
  }
  mapFromDriverValue(t) {
    return t;
  }
  mapToDriverValue(t) {
    return t;
  }
  shouldDisableInsert() {
    return this.config.generated !== void 0 && this.config.generated.type !== "byDefault";
  }
}
o(J, De, "Column");
var Be;
Be = s;
class Ni {
  constructor(t, n, a) {
    o(this, "config");
    o(this, "$default", this.$defaultFn);
    o(this, "$onUpdate", this.$onUpdateFn);
    this.config = { name: t, keyAsName: t === "", notNull: false, default: void 0, hasDefault: false, primaryKey: false, isUnique: false, uniqueName: void 0, uniqueType: void 0, dataType: n, columnType: a, generated: void 0 };
  }
  $type() {
    return this;
  }
  notNull() {
    return this.config.notNull = true, this;
  }
  default(t) {
    return this.config.default = t, this.config.hasDefault = true, this;
  }
  $defaultFn(t) {
    return this.config.defaultFn = t, this.config.hasDefault = true, this;
  }
  $onUpdateFn(t) {
    return this.config.onUpdateFn = t, this.config.hasDefault = true, this;
  }
  primaryKey() {
    return this.config.primaryKey = true, this.config.notNull = true, this;
  }
  setName(t) {
    this.config.name === "" && (this.config.name = t);
  }
}
o(Ni, Be, "ColumnBuilder");
const X = /* @__PURE__ */ Symbol.for("drizzle:Name");
var Ke;
Ke = s;
class hi {
  constructor(t, n) {
    o(this, "reference");
    o(this, "_onUpdate", "no action");
    o(this, "_onDelete", "no action");
    this.reference = () => {
      const { name: a, columns: u, foreignColumns: p } = t();
      return { name: a, columns: u, foreignTable: p[0].table, foreignColumns: p };
    }, n && (this._onUpdate = n.onUpdate, this._onDelete = n.onDelete);
  }
  onUpdate(t) {
    return this._onUpdate = t === void 0 ? "no action" : t, this;
  }
  onDelete(t) {
    return this._onDelete = t === void 0 ? "no action" : t, this;
  }
  build(t) {
    return new Ai(t, this);
  }
}
o(hi, Ke, "PgForeignKeyBuilder");
var Le;
Le = s;
class Ai {
  constructor(t, n) {
    o(this, "reference");
    o(this, "onUpdate");
    o(this, "onDelete");
    this.table = t, this.reference = n.reference, this.onUpdate = n._onUpdate, this.onDelete = n._onDelete;
  }
  getName() {
    const { name: t, columns: n, foreignColumns: a } = this.reference(), u = n.map((P) => P.name), p = a.map((P) => P.name), h = [this.table[X], ...u, a[0].table[X], ...p];
    return t != null ? t : `${h.join("_")}_fk`;
  }
}
o(Ai, Le, "PgForeignKey");
function Sd(e, ...t) {
  return e(...t);
}
function xd(e, t) {
  return `${e[X]}_${t.join("_")}_unique`;
}
function ve(e, t, n) {
  for (let a = t; a < e.length; a++) {
    const u = e[a];
    if (u === "\\") {
      a++;
      continue;
    }
    if (u === '"') return [e.slice(t, a).replace(/\\/g, ""), a + 1];
    if (!n && (u === "," || u === "}")) return [e.slice(t, a).replace(/\\/g, ""), a];
  }
  return [e.slice(t).replace(/\\/g, ""), e.length];
}
function Ii(e, t = 0) {
  const n = [];
  let a = t, u = false;
  for (; a < e.length; ) {
    const p = e[a];
    if (p === ",") {
      (u || a === t) && n.push(""), u = true, a++;
      continue;
    }
    if (u = false, p === "\\") {
      a += 2;
      continue;
    }
    if (p === '"') {
      const [x, C] = ve(e, a + 1, true);
      n.push(x), a = C;
      continue;
    }
    if (p === "}") return [n, a + 1];
    if (p === "{") {
      const [x, C] = Ii(e, a + 1);
      n.push(x), a = C;
      continue;
    }
    const [h, P] = ve(e, a, false);
    n.push(h), a = P;
  }
  return [n, a];
}
function Pd(e) {
  const [t] = Ii(e, 1);
  return t;
}
function bi(e) {
  return `{${e.map((t) => Array.isArray(t) ? bi(t) : typeof t == "string" ? `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${t}`).join(",")}}`;
}
var Oe, ke;
class S extends (ke = Ni, Oe = s, ke) {
  constructor() {
    super(...arguments);
    o(this, "foreignKeyConfigs", []);
  }
  array(n) {
    return new vi(this.config.name, this, n);
  }
  references(n, a = {}) {
    return this.foreignKeyConfigs.push({ ref: n, actions: a }), this;
  }
  unique(n, a) {
    return this.config.isUnique = true, this.config.uniqueName = n, this.config.uniqueType = a == null ? void 0 : a.nulls, this;
  }
  generatedAlwaysAs(n) {
    return this.config.generated = { as: n, type: "always", mode: "stored" }, this;
  }
  buildForeignKeys(n, a) {
    return this.foreignKeyConfigs.map(({ ref: u, actions: p }) => Sd((h, P) => {
      const x = new hi(() => {
        const C = h();
        return { columns: [n], foreignColumns: [C] };
      });
      return P.onUpdate && x.onUpdate(P.onUpdate), P.onDelete && x.onDelete(P.onDelete), x.build(a);
    }, u, p));
  }
  buildExtraConfigColumn(n) {
    return new wi(n, this.config);
  }
}
o(S, Oe, "PgColumnBuilder");
var Ue, Ee;
class I extends (Ee = J, Ue = s, Ee) {
  constructor(t, n) {
    n.uniqueName || (n.uniqueName = xd(t, [n.name])), super(t, n), this.table = t;
  }
}
o(I, Ue, "PgColumn");
var Ve, ze;
class wi extends (ze = I, Ve = s, ze) {
  constructor() {
    var _a2, _b;
    super(...arguments);
    o(this, "indexConfig", { order: (_a2 = this.config.order) != null ? _a2 : "asc", nulls: (_b = this.config.nulls) != null ? _b : "last", opClass: this.config.opClass });
    o(this, "defaultConfig", { order: "asc", nulls: "last", opClass: void 0 });
  }
  getSQLType() {
    return this.getSQLType();
  }
  asc() {
    return this.indexConfig.order = "asc", this;
  }
  desc() {
    return this.indexConfig.order = "desc", this;
  }
  nullsFirst() {
    return this.indexConfig.nulls = "first", this;
  }
  nullsLast() {
    return this.indexConfig.nulls = "last", this;
  }
  op(n) {
    return this.indexConfig.opClass = n, this;
  }
}
o(wi, Ve, "ExtraConfigColumn");
var Re;
Re = s;
class ee {
  constructor(t, n, a, u) {
    o(this, "name");
    o(this, "keyAsName");
    o(this, "type");
    o(this, "indexConfig");
    this.name = t, this.keyAsName = n, this.type = a, this.indexConfig = u;
  }
}
o(ee, Re, "IndexedColumn");
var Fe, Me;
class vi extends (Me = S, Fe = s, Me) {
  constructor(t, n, a) {
    super(t, "array", "PgArray"), this.config.baseBuilder = n, this.config.size = a;
  }
  build(t) {
    const n = this.config.baseBuilder.build(t);
    return new pe(t, this.config, n);
  }
}
o(vi, Fe, "PgArrayBuilder");
var Qe, $e;
const ae = class ae2 extends ($e = I, Qe = s, $e) {
  constructor(n, a, u, p) {
    super(n, a);
    o(this, "size");
    this.baseColumn = u, this.range = p, this.size = a.size;
  }
  getSQLType() {
    return `${this.baseColumn.getSQLType()}[${typeof this.size == "number" ? this.size : ""}]`;
  }
  mapFromDriverValue(n) {
    return typeof n == "string" && (n = Pd(n)), n.map((a) => this.baseColumn.mapFromDriverValue(a));
  }
  mapToDriverValue(n, a = false) {
    const u = n.map((p) => p === null ? null : O(this.baseColumn, ae2) ? this.baseColumn.mapToDriverValue(p, true) : this.baseColumn.mapToDriverValue(p));
    return a ? u : bi(u);
  }
};
o(ae, Qe, "PgArray");
let pe = ae;
const Se = /* @__PURE__ */ Symbol.for("drizzle:isPgEnum");
function Td(e) {
  return !!e && typeof e == "function" && Se in e && e[Se] === true;
}
var je;
je = s;
class fe {
  constructor(t, n, a, u = false) {
    this._ = { brand: "Subquery", sql: t, selectedFields: n, alias: a, isWith: u };
  }
}
o(fe, je, "Subquery");
const qd = { startActiveSpan(e, t) {
  return t();
} }, H = /* @__PURE__ */ Symbol.for("drizzle:ViewBaseConfig"), le = /* @__PURE__ */ Symbol.for("drizzle:Schema"), xe = /* @__PURE__ */ Symbol.for("drizzle:Columns"), Pe = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigColumns"), ce = /* @__PURE__ */ Symbol.for("drizzle:OriginalName"), _e = /* @__PURE__ */ Symbol.for("drizzle:BaseName"), re = /* @__PURE__ */ Symbol.for("drizzle:IsAlias"), Te = /* @__PURE__ */ Symbol.for("drizzle:ExtraConfigBuilder"), Si = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleTable");
var Ge, Xe, He, Je, We, Ye, Ze, et, tt, rt;
rt = s, tt = X, et = ce, Ze = le, Ye = xe, We = Pe, Je = _e, He = re, Xe = Si, Ge = Te;
class R {
  constructor(t, n, a) {
    o(this, tt);
    o(this, et);
    o(this, Ze);
    o(this, Ye);
    o(this, We);
    o(this, Je);
    o(this, He, false);
    o(this, Xe, true);
    o(this, Ge);
    this[X] = this[ce] = t, this[le] = n, this[_e] = a;
  }
}
o(R, rt, "Table"), o(R, "Symbol", { Name: X, Schema: le, OriginalName: ce, Columns: xe, ExtraConfigColumns: Pe, BaseName: _e, IsAlias: re, ExtraConfigBuilder: Te });
function xi(e) {
  return typeof e == "object" && e !== null && Si in e;
}
function Cd(e) {
  return e != null && typeof e.getSQL == "function";
}
function Dd(e) {
  var n;
  const t = { sql: "", params: [] };
  for (const a of e) t.sql += a.sql, t.params.push(...a.params), (n = a.typings) != null && n.length && (t.typings || (t.typings = []), t.typings.push(...a.typings));
  return t;
}
var nt;
nt = s;
class F {
  constructor(t) {
    o(this, "value");
    this.value = Array.isArray(t) ? t : [t];
  }
  getSQL() {
    return new K([this]);
  }
}
o(F, nt, "StringChunk");
var it;
it = s;
const G = class G2 {
  constructor(t) {
    o(this, "decoder", Pi);
    o(this, "shouldInlineParams", false);
    this.queryChunks = t;
  }
  append(t) {
    return this.queryChunks.push(...t.queryChunks), this;
  }
  toQuery(t) {
    return qd.startActiveSpan("drizzle.buildSQL", (n) => {
      const a = this.buildQueryFromSourceParams(this.queryChunks, t);
      return n == null || n.setAttributes({ "drizzle.query.text": a.sql, "drizzle.query.params": JSON.stringify(a.params) }), a;
    });
  }
  buildQueryFromSourceParams(t, n) {
    const a = Object.assign({}, n, { inlineParams: n.inlineParams || this.shouldInlineParams, paramStartIndex: n.paramStartIndex || { value: 0 } }), { casing: u, escapeName: p, escapeParam: h, prepareTyping: P, inlineParams: x, paramStartIndex: C } = a;
    return Dd(t.map((f) => {
      var Q;
      if (O(f, F)) return { sql: f.value.join(""), params: [] };
      if (O(f, ne)) return { sql: p(f.value), params: [] };
      if (f === void 0) return { sql: "", params: [] };
      if (Array.isArray(f)) {
        const T = [new F("(")];
        for (const [V, bd] of f.entries()) T.push(bd), V < f.length - 1 && T.push(new F(", "));
        return T.push(new F(")")), this.buildQueryFromSourceParams(T, a);
      }
      if (O(f, G2)) return this.buildQueryFromSourceParams(f.queryChunks, __spreadProps(__spreadValues({}, a), { inlineParams: x || f.shouldInlineParams }));
      if (O(f, R)) {
        const T = f[R.Symbol.Schema], V = f[R.Symbol.Name];
        return { sql: T === void 0 || f[re] ? p(V) : p(T) + "." + p(V), params: [] };
      }
      if (O(f, J)) {
        const T = u.getColumnCasing(f);
        if (n.invokeSource === "indexes") return { sql: p(T), params: [] };
        const V = f.table[R.Symbol.Schema];
        return { sql: f.table[re] || V === void 0 ? p(f.table[R.Symbol.Name]) + "." + p(T) : p(V) + "." + p(f.table[R.Symbol.Name]) + "." + p(T), params: [] };
      }
      if (O(f, Ci)) {
        const T = f[H].schema, V = f[H].name;
        return { sql: T === void 0 || f[H].isAlias ? p(V) : p(T) + "." + p(V), params: [] };
      }
      if (O(f, ge)) {
        if (O(f.value, ie)) return { sql: h(C.value++, f), params: [f], typings: ["none"] };
        const T = f.value === null ? null : f.encoder.mapToDriverValue(f.value);
        if (O(T, G2)) return this.buildQueryFromSourceParams([T], a);
        if (x) return { sql: this.mapInlineParam(T, a), params: [] };
        let V = ["none"];
        return P && (V = [P(f.encoder)]), { sql: h(C.value++, T), params: [T], typings: V };
      }
      return O(f, ie) ? { sql: h(C.value++, f), params: [f], typings: ["none"] } : O(f, G2.Aliased) && f.fieldAlias !== void 0 ? { sql: p(f.fieldAlias), params: [] } : O(f, fe) ? f._.isWith ? { sql: p(f._.alias), params: [] } : this.buildQueryFromSourceParams([new F("("), f._.sql, new F(") "), new ne(f._.alias)], a) : Td(f) ? f.schema ? { sql: p(f.schema) + "." + p(f.enumName), params: [] } : { sql: p(f.enumName), params: [] } : Cd(f) ? (Q = f.shouldOmitSQLParens) != null && Q.call(f) ? this.buildQueryFromSourceParams([f.getSQL()], a) : this.buildQueryFromSourceParams([new F("("), f.getSQL(), new F(")")], a) : x ? { sql: this.mapInlineParam(f, a), params: [] } : { sql: h(C.value++, f), params: [f], typings: ["none"] };
    }));
  }
  mapInlineParam(t, { escapeString: n }) {
    if (t === null) return "null";
    if (typeof t == "number" || typeof t == "boolean") return t.toString();
    if (typeof t == "string") return n(t);
    if (typeof t == "object") {
      const a = t.toString();
      return n(a === "[object Object]" ? JSON.stringify(t) : a);
    }
    throw new Error("Unexpected param value: " + t);
  }
  getSQL() {
    return this;
  }
  as(t) {
    return t === void 0 ? this : new G2.Aliased(this, t);
  }
  mapWith(t) {
    return this.decoder = typeof t == "function" ? { mapFromDriverValue: t } : t, this;
  }
  inlineParams() {
    return this.shouldInlineParams = true, this;
  }
  if(t) {
    return t ? this : void 0;
  }
};
o(G, it, "SQL");
let K = G;
var at;
at = s;
class ne {
  constructor(t) {
    o(this, "brand");
    this.value = t;
  }
  getSQL() {
    return new K([this]);
  }
}
o(ne, at, "Name");
const Pi = { mapFromDriverValue: (e) => e }, Ti = { mapToDriverValue: (e) => e };
__spreadValues(__spreadValues({}, Pi), Ti);
var dt;
dt = s;
class ge {
  constructor(t, n = Ti) {
    o(this, "brand");
    this.value = t, this.encoder = n;
  }
  getSQL() {
    return new K([this]);
  }
}
o(ge, dt, "Param");
function M(e, ...t) {
  const n = [];
  (t.length > 0 || e.length > 0 && e[0] !== "") && n.push(new F(e[0]));
  for (const [a, u] of t.entries()) n.push(u, new F(e[a + 1]));
  return new K(n);
}
((e) => {
  function t() {
    return new K([]);
  }
  e.empty = t;
  function n(x) {
    return new K(x);
  }
  e.fromList = n;
  function a(x) {
    return new K([new F(x)]);
  }
  e.raw = a;
  function u(x, C) {
    const f = [];
    for (const [Q, T] of x.entries()) Q > 0 && C !== void 0 && f.push(C), f.push(T);
    return new K(f);
  }
  e.join = u;
  function p(x) {
    return new ne(x);
  }
  e.identifier = p;
  function h(x) {
    return new ie(x);
  }
  e.placeholder = h;
  function P(x, C) {
    return new ge(x, C);
  }
  e.param = P;
})(M || (M = {}));
((e) => {
  var n;
  n = s;
  const a = class a2 {
    constructor(p, h) {
      o(this, "isSelectionField", false);
      this.sql = p, this.fieldAlias = h;
    }
    getSQL() {
      return this.sql;
    }
    clone() {
      return new a2(this.sql, this.fieldAlias);
    }
  };
  o(a, n, "SQL.Aliased");
  let t = a;
  e.Aliased = t;
})(K || (K = {}));
var ot;
ot = s;
class ie {
  constructor(t) {
    this.name = t;
  }
  getSQL() {
    return new K([this]);
  }
}
o(ie, ot, "Placeholder");
const qi = /* @__PURE__ */ Symbol.for("drizzle:IsDrizzleView");
var st, ut, lt;
lt = s, ut = H, st = qi;
class Ci {
  constructor({ name: t, schema: n, selectedFields: a, query: u }) {
    o(this, ut);
    o(this, st, true);
    this[H] = { name: t, originalName: t, schema: n, selectedFields: a, query: u, isExisting: !u, isAlias: false };
  }
  getSQL() {
    return new K([this]);
  }
}
o(Ci, lt, "View");
function Bd(e) {
  return typeof e == "object" && e !== null && qi in e;
}
J.prototype.getSQL = function() {
  return new K([this]);
};
R.prototype.getSQL = function() {
  return new K([this]);
};
fe.prototype.getSQL = function() {
  return new K([this]);
};
function Kd(e) {
  return e[R.Symbol.Columns];
}
function Ld(e) {
  return e[H].selectedFields;
}
function z(e, t) {
  return { name: typeof e == "string" && e.length > 0 ? e : "", config: typeof e == "object" ? e : t };
}
var ct, _t;
class Z extends (_t = S, ct = s, _t) {
  generatedAlwaysAsIdentity(t) {
    if (t) {
      const _a2 = t, { name: n } = _a2, a = __objRest(_a2, ["name"]);
      this.config.generatedIdentity = { type: "always", sequenceName: n, sequenceOptions: a };
    } else this.config.generatedIdentity = { type: "always" };
    return this.config.hasDefault = true, this.config.notNull = true, this;
  }
  generatedByDefaultAsIdentity(t) {
    if (t) {
      const _a2 = t, { name: n } = _a2, a = __objRest(_a2, ["name"]);
      this.config.generatedIdentity = { type: "byDefault", sequenceName: n, sequenceOptions: a };
    } else this.config.generatedIdentity = { type: "byDefault" };
    return this.config.hasDefault = true, this.config.notNull = true, this;
  }
}
o(Z, ct, "PgIntColumnBaseBuilder");
var pt, mt;
class Di extends (mt = Z, pt = s, mt) {
  constructor(t) {
    super(t, "number", "PgBigInt53");
  }
  build(t) {
    return new Bi(t, this.config);
  }
}
o(Di, pt, "PgBigInt53Builder");
var ft, gt;
class Bi extends (gt = I, ft = s, gt) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(t) {
    return typeof t == "number" ? t : Number(t);
  }
}
o(Bi, ft, "PgBigInt53");
var yt, Nt;
class Ki extends (Nt = Z, yt = s, Nt) {
  constructor(t) {
    super(t, "bigint", "PgBigInt64");
  }
  build(t) {
    return new Li(t, this.config);
  }
}
o(Ki, yt, "PgBigInt64Builder");
var ht, At;
class Li extends (At = I, ht = s, At) {
  getSQLType() {
    return "bigint";
  }
  mapFromDriverValue(t) {
    return BigInt(t);
  }
}
o(Li, ht, "PgBigInt64");
function Od(e, t) {
  const { name: n, config: a } = z(e, t);
  return a.mode === "number" ? new Di(n) : new Ki(n);
}
var It, bt;
class Oi extends (bt = S, It = s, bt) {
  constructor(t) {
    super(t, "number", "PgBigSerial53"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(t) {
    return new ki(t, this.config);
  }
}
o(Oi, It, "PgBigSerial53Builder");
var wt, vt;
class ki extends (vt = I, wt = s, vt) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(t) {
    return typeof t == "number" ? t : Number(t);
  }
}
o(ki, wt, "PgBigSerial53");
var St, xt;
class Ui extends (xt = S, St = s, xt) {
  constructor(t) {
    super(t, "bigint", "PgBigSerial64"), this.config.hasDefault = true;
  }
  build(t) {
    return new Ei(t, this.config);
  }
}
o(Ui, St, "PgBigSerial64Builder");
var Pt, Tt;
class Ei extends (Tt = I, Pt = s, Tt) {
  getSQLType() {
    return "bigserial";
  }
  mapFromDriverValue(t) {
    return BigInt(t);
  }
}
o(Ei, Pt, "PgBigSerial64");
function kd(e, t) {
  const { name: n, config: a } = z(e, t);
  return a.mode === "number" ? new Oi(n) : new Ui(n);
}
var qt, Ct;
class Vi extends (Ct = S, qt = s, Ct) {
  constructor(t) {
    super(t, "boolean", "PgBoolean");
  }
  build(t) {
    return new zi(t, this.config);
  }
}
o(Vi, qt, "PgBooleanBuilder");
var Dt, Bt;
class zi extends (Bt = I, Dt = s, Bt) {
  getSQLType() {
    return "boolean";
  }
}
o(zi, Dt, "PgBoolean");
function m(e) {
  return new Vi(e != null ? e : "");
}
var Kt, Lt;
class Ri extends (Lt = S, Kt = s, Lt) {
  constructor(t, n) {
    super(t, "string", "PgChar"), this.config.length = n.length, this.config.enumValues = n.enum;
  }
  build(t) {
    return new Fi(t, this.config);
  }
}
o(Ri, Kt, "PgCharBuilder");
var Ot, kt;
class Fi extends (kt = I, Ot = s, kt) {
  constructor() {
    super(...arguments);
    o(this, "length", this.config.length);
    o(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "char" : `char(${this.length})`;
  }
}
o(Fi, Ot, "PgChar");
function Ud(e, t = {}) {
  const { name: n, config: a } = z(e, t);
  return new Ri(n, a);
}
var Ut, Et;
class Mi extends (Et = S, Ut = s, Et) {
  constructor(t) {
    super(t, "string", "PgCidr");
  }
  build(t) {
    return new Qi(t, this.config);
  }
}
o(Mi, Ut, "PgCidrBuilder");
var Vt, zt;
class Qi extends (zt = I, Vt = s, zt) {
  getSQLType() {
    return "cidr";
  }
}
o(Qi, Vt, "PgCidr");
function Ed(e) {
  return new Mi(e != null ? e : "");
}
var Rt, Ft;
class $i extends (Ft = S, Rt = s, Ft) {
  constructor(t, n, a) {
    super(t, "custom", "PgCustomColumn"), this.config.fieldConfig = n, this.config.customTypeParams = a;
  }
  build(t) {
    return new ji(t, this.config);
  }
}
o($i, Rt, "PgCustomColumnBuilder");
var Mt, Qt;
class ji extends (Qt = I, Mt = s, Qt) {
  constructor(n, a) {
    super(n, a);
    o(this, "sqlName");
    o(this, "mapTo");
    o(this, "mapFrom");
    this.sqlName = a.customTypeParams.dataType(a.fieldConfig), this.mapTo = a.customTypeParams.toDriver, this.mapFrom = a.customTypeParams.fromDriver;
  }
  getSQLType() {
    return this.sqlName;
  }
  mapFromDriverValue(n) {
    return typeof this.mapFrom == "function" ? this.mapFrom(n) : n;
  }
  mapToDriverValue(n) {
    return typeof this.mapTo == "function" ? this.mapTo(n) : n;
  }
}
o(ji, Mt, "PgCustomColumn");
function Vd(e) {
  return (t, n) => {
    const { name: a, config: u } = z(t, n);
    return new $i(a, u, e);
  };
}
var $t, jt;
class W extends (jt = S, $t = s, jt) {
  defaultNow() {
    return this.default(M`now()`);
  }
}
o(W, $t, "PgDateColumnBaseBuilder");
var Gt, Xt;
class Gi extends (Xt = W, Gt = s, Xt) {
  constructor(t) {
    super(t, "date", "PgDate");
  }
  build(t) {
    return new Xi(t, this.config);
  }
}
o(Gi, Gt, "PgDateBuilder");
var Ht, Jt;
class Xi extends (Jt = I, Ht = s, Jt) {
  getSQLType() {
    return "date";
  }
  mapFromDriverValue(t) {
    return new Date(t);
  }
  mapToDriverValue(t) {
    return t.toISOString();
  }
}
o(Xi, Ht, "PgDate");
var Wt, Yt;
class Hi extends (Yt = W, Wt = s, Yt) {
  constructor(t) {
    super(t, "string", "PgDateString");
  }
  build(t) {
    return new Ji(t, this.config);
  }
}
o(Hi, Wt, "PgDateStringBuilder");
var Zt, er;
class Ji extends (er = I, Zt = s, er) {
  getSQLType() {
    return "date";
  }
}
o(Ji, Zt, "PgDateString");
function ye(e, t) {
  const { name: n, config: a } = z(e, t);
  return (a == null ? void 0 : a.mode) === "date" ? new Gi(n) : new Hi(n);
}
var tr, rr;
class Wi extends (rr = S, tr = s, rr) {
  constructor(t) {
    super(t, "number", "PgDoublePrecision");
  }
  build(t) {
    return new Yi(t, this.config);
  }
}
o(Wi, tr, "PgDoublePrecisionBuilder");
var nr, ir;
class Yi extends (ir = I, nr = s, ir) {
  getSQLType() {
    return "double precision";
  }
  mapFromDriverValue(t) {
    return typeof t == "string" ? Number.parseFloat(t) : t;
  }
}
o(Yi, nr, "PgDoublePrecision");
function zd(e) {
  return new Wi(e != null ? e : "");
}
var ar, dr;
class Zi extends (dr = S, ar = s, dr) {
  constructor(t) {
    super(t, "string", "PgInet");
  }
  build(t) {
    return new ea(t, this.config);
  }
}
o(Zi, ar, "PgInetBuilder");
var or, sr;
class ea extends (sr = I, or = s, sr) {
  getSQLType() {
    return "inet";
  }
}
o(ea, or, "PgInet");
function Rd(e) {
  return new Zi(e != null ? e : "");
}
var ur, lr;
class ta extends (lr = Z, ur = s, lr) {
  constructor(t) {
    super(t, "number", "PgInteger");
  }
  build(t) {
    return new ra(t, this.config);
  }
}
o(ta, ur, "PgIntegerBuilder");
var cr, _r;
class ra extends (_r = I, cr = s, _r) {
  getSQLType() {
    return "integer";
  }
  mapFromDriverValue(t) {
    return typeof t == "string" ? Number.parseInt(t) : t;
  }
}
o(ra, cr, "PgInteger");
function i(e) {
  return new ta(e != null ? e : "");
}
var pr, mr;
class na extends (mr = S, pr = s, mr) {
  constructor(t, n) {
    super(t, "string", "PgInterval"), this.config.intervalConfig = n;
  }
  build(t) {
    return new ia(t, this.config);
  }
}
o(na, pr, "PgIntervalBuilder");
var fr, gr;
class ia extends (gr = I, fr = s, gr) {
  constructor() {
    super(...arguments);
    o(this, "fields", this.config.intervalConfig.fields);
    o(this, "precision", this.config.intervalConfig.precision);
  }
  getSQLType() {
    const n = this.fields ? ` ${this.fields}` : "", a = this.precision ? `(${this.precision})` : "";
    return `interval${n}${a}`;
  }
}
o(ia, fr, "PgInterval");
function Fd(e, t = {}) {
  const { name: n, config: a } = z(e, t);
  return new na(n, a);
}
var yr, Nr;
class aa extends (Nr = S, yr = s, Nr) {
  constructor(t) {
    super(t, "json", "PgJson");
  }
  build(t) {
    return new da(t, this.config);
  }
}
o(aa, yr, "PgJsonBuilder");
var hr, Ar;
class da extends (Ar = I, hr = s, Ar) {
  constructor(t, n) {
    super(t, n);
  }
  getSQLType() {
    return "json";
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    if (typeof t == "string") try {
      return JSON.parse(t);
    } catch (e) {
      return t;
    }
    return t;
  }
}
o(da, hr, "PgJson");
function j(e) {
  return new aa(e != null ? e : "");
}
var Ir, br;
class oa extends (br = S, Ir = s, br) {
  constructor(t) {
    super(t, "json", "PgJsonb");
  }
  build(t) {
    return new sa(t, this.config);
  }
}
o(oa, Ir, "PgJsonbBuilder");
var wr, vr;
class sa extends (vr = I, wr = s, vr) {
  constructor(t, n) {
    super(t, n);
  }
  getSQLType() {
    return "jsonb";
  }
  mapToDriverValue(t) {
    return JSON.stringify(t);
  }
  mapFromDriverValue(t) {
    if (typeof t == "string") try {
      return JSON.parse(t);
    } catch (e) {
      return t;
    }
    return t;
  }
}
o(sa, wr, "PgJsonb");
function v(e) {
  return new oa(e != null ? e : "");
}
var Sr, xr;
class ua extends (xr = S, Sr = s, xr) {
  constructor(t) {
    super(t, "array", "PgLine");
  }
  build(t) {
    return new la(t, this.config);
  }
}
o(ua, Sr, "PgLineBuilder");
var Pr, Tr;
class la extends (Tr = I, Pr = s, Tr) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(t) {
    const [n, a, u] = t.slice(1, -1).split(",");
    return [Number.parseFloat(n), Number.parseFloat(a), Number.parseFloat(u)];
  }
  mapToDriverValue(t) {
    return `{${t[0]},${t[1]},${t[2]}}`;
  }
}
o(la, Pr, "PgLine");
var qr, Cr;
class ca extends (Cr = S, qr = s, Cr) {
  constructor(t) {
    super(t, "json", "PgLineABC");
  }
  build(t) {
    return new _a(t, this.config);
  }
}
o(ca, qr, "PgLineABCBuilder");
var Dr, Br;
class _a extends (Br = I, Dr = s, Br) {
  getSQLType() {
    return "line";
  }
  mapFromDriverValue(t) {
    const [n, a, u] = t.slice(1, -1).split(",");
    return { a: Number.parseFloat(n), b: Number.parseFloat(a), c: Number.parseFloat(u) };
  }
  mapToDriverValue(t) {
    return `{${t.a},${t.b},${t.c}}`;
  }
}
o(_a, Dr, "PgLineABC");
function Md(e, t) {
  const { name: n, config: a } = z(e, t);
  return !(a != null && a.mode) || a.mode === "tuple" ? new ua(n) : new ca(n);
}
var Kr, Lr;
class pa extends (Lr = S, Kr = s, Lr) {
  constructor(t) {
    super(t, "string", "PgMacaddr");
  }
  build(t) {
    return new ma(t, this.config);
  }
}
o(pa, Kr, "PgMacaddrBuilder");
var Or, kr;
class ma extends (kr = I, Or = s, kr) {
  getSQLType() {
    return "macaddr";
  }
}
o(ma, Or, "PgMacaddr");
function Qd(e) {
  return new pa(e != null ? e : "");
}
var Ur, Er;
class fa extends (Er = S, Ur = s, Er) {
  constructor(t) {
    super(t, "string", "PgMacaddr8");
  }
  build(t) {
    return new ga(t, this.config);
  }
}
o(fa, Ur, "PgMacaddr8Builder");
var Vr, zr;
class ga extends (zr = I, Vr = s, zr) {
  getSQLType() {
    return "macaddr8";
  }
}
o(ga, Vr, "PgMacaddr8");
function $d(e) {
  return new fa(e != null ? e : "");
}
var Rr, Fr;
class ya extends (Fr = S, Rr = s, Fr) {
  constructor(t, n, a) {
    super(t, "string", "PgNumeric"), this.config.precision = n, this.config.scale = a;
  }
  build(t) {
    return new Na(t, this.config);
  }
}
o(ya, Rr, "PgNumericBuilder");
var Mr, Qr;
class Na extends (Qr = I, Mr = s, Qr) {
  constructor(n, a) {
    super(n, a);
    o(this, "precision");
    o(this, "scale");
    this.precision = a.precision, this.scale = a.scale;
  }
  getSQLType() {
    return this.precision !== void 0 && this.scale !== void 0 ? `numeric(${this.precision}, ${this.scale})` : this.precision === void 0 ? "numeric" : `numeric(${this.precision})`;
  }
}
o(Na, Mr, "PgNumeric");
function ha(e, t) {
  const { name: n, config: a } = z(e, t);
  return new ya(n, a == null ? void 0 : a.precision, a == null ? void 0 : a.scale);
}
const g = ha;
var $r, jr;
class Aa extends (jr = S, $r = s, jr) {
  constructor(t) {
    super(t, "array", "PgPointTuple");
  }
  build(t) {
    return new Ia(t, this.config);
  }
}
o(Aa, $r, "PgPointTupleBuilder");
var Gr, Xr;
class Ia extends (Xr = I, Gr = s, Xr) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(t) {
    if (typeof t == "string") {
      const [n, a] = t.slice(1, -1).split(",");
      return [Number.parseFloat(n), Number.parseFloat(a)];
    }
    return [t.x, t.y];
  }
  mapToDriverValue(t) {
    return `(${t[0]},${t[1]})`;
  }
}
o(Ia, Gr, "PgPointTuple");
var Hr, Jr;
class ba extends (Jr = S, Hr = s, Jr) {
  constructor(t) {
    super(t, "json", "PgPointObject");
  }
  build(t) {
    return new wa(t, this.config);
  }
}
o(ba, Hr, "PgPointObjectBuilder");
var Wr, Yr;
class wa extends (Yr = I, Wr = s, Yr) {
  getSQLType() {
    return "point";
  }
  mapFromDriverValue(t) {
    if (typeof t == "string") {
      const [n, a] = t.slice(1, -1).split(",");
      return { x: Number.parseFloat(n), y: Number.parseFloat(a) };
    }
    return t;
  }
  mapToDriverValue(t) {
    return `(${t.x},${t.y})`;
  }
}
o(wa, Wr, "PgPointObject");
function jd(e, t) {
  const { name: n, config: a } = z(e, t);
  return !(a != null && a.mode) || a.mode === "tuple" ? new Aa(n) : new ba(n);
}
function Gd(e) {
  const t = [];
  for (let n = 0; n < e.length; n += 2) t.push(Number.parseInt(e.slice(n, n + 2), 16));
  return new Uint8Array(t);
}
function qe(e, t) {
  const n = new ArrayBuffer(8), a = new DataView(n);
  for (let u = 0; u < 8; u++) a.setUint8(u, e[t + u]);
  return a.getFloat64(0, true);
}
function va(e) {
  const t = Gd(e);
  let n = 0;
  const a = t[n];
  n += 1;
  const u = new DataView(t.buffer), p = u.getUint32(n, a === 1);
  if (n += 4, p & 536870912 && (u.getUint32(n, a === 1), n += 4), (p & 65535) === 1) {
    const h = qe(t, n);
    n += 8;
    const P = qe(t, n);
    return n += 8, [h, P];
  }
  throw new Error("Unsupported geometry type");
}
var Zr, en;
class Sa extends (en = S, Zr = s, en) {
  constructor(t) {
    super(t, "array", "PgGeometry");
  }
  build(t) {
    return new xa(t, this.config);
  }
}
o(Sa, Zr, "PgGeometryBuilder");
var tn, rn;
class xa extends (rn = I, tn = s, rn) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(t) {
    return va(t);
  }
  mapToDriverValue(t) {
    return `point(${t[0]} ${t[1]})`;
  }
}
o(xa, tn, "PgGeometry");
var nn, an;
class Pa extends (an = S, nn = s, an) {
  constructor(t) {
    super(t, "json", "PgGeometryObject");
  }
  build(t) {
    return new Ta(t, this.config);
  }
}
o(Pa, nn, "PgGeometryObjectBuilder");
var dn, on;
class Ta extends (on = I, dn = s, on) {
  getSQLType() {
    return "geometry(point)";
  }
  mapFromDriverValue(t) {
    const n = va(t);
    return { x: n[0], y: n[1] };
  }
  mapToDriverValue(t) {
    return `point(${t.x} ${t.y})`;
  }
}
o(Ta, dn, "PgGeometryObject");
function Xd(e, t) {
  const { name: n, config: a } = z(e, t);
  return !(a != null && a.mode) || a.mode === "tuple" ? new Sa(n) : new Pa(n);
}
var sn, un;
class qa extends (un = S, sn = s, un) {
  constructor(t, n) {
    super(t, "number", "PgReal"), this.config.length = n;
  }
  build(t) {
    return new Ca(t, this.config);
  }
}
o(qa, sn, "PgRealBuilder");
var ln, cn;
class Ca extends (cn = I, ln = s, cn) {
  constructor(n, a) {
    super(n, a);
    o(this, "mapFromDriverValue", (n2) => typeof n2 == "string" ? Number.parseFloat(n2) : n2);
  }
  getSQLType() {
    return "real";
  }
}
o(Ca, ln, "PgReal");
function Hd(e) {
  return new qa(e != null ? e : "");
}
var _n, pn;
class Da extends (pn = S, _n = s, pn) {
  constructor(t) {
    super(t, "number", "PgSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(t) {
    return new Ba(t, this.config);
  }
}
o(Da, _n, "PgSerialBuilder");
var mn, fn;
class Ba extends (fn = I, mn = s, fn) {
  getSQLType() {
    return "serial";
  }
}
o(Ba, mn, "PgSerial");
function l(e) {
  return new Da(e != null ? e : "");
}
var gn, yn;
class Ka extends (yn = Z, gn = s, yn) {
  constructor(t) {
    super(t, "number", "PgSmallInt");
  }
  build(t) {
    return new La(t, this.config);
  }
}
o(Ka, gn, "PgSmallIntBuilder");
var Nn, hn;
class La extends (hn = I, Nn = s, hn) {
  constructor() {
    super(...arguments);
    o(this, "mapFromDriverValue", (n) => typeof n == "string" ? Number(n) : n);
  }
  getSQLType() {
    return "smallint";
  }
}
o(La, Nn, "PgSmallInt");
function Jd(e) {
  return new Ka(e != null ? e : "");
}
var An, In;
class Oa extends (In = S, An = s, In) {
  constructor(t) {
    super(t, "number", "PgSmallSerial"), this.config.hasDefault = true, this.config.notNull = true;
  }
  build(t) {
    return new ka(t, this.config);
  }
}
o(Oa, An, "PgSmallSerialBuilder");
var bn, wn;
class ka extends (wn = I, bn = s, wn) {
  getSQLType() {
    return "smallserial";
  }
}
o(ka, bn, "PgSmallSerial");
function Wd(e) {
  return new Oa(e != null ? e : "");
}
var vn, Sn;
class Ua extends (Sn = S, vn = s, Sn) {
  constructor(t, n) {
    super(t, "string", "PgText"), this.config.enumValues = n.enum;
  }
  build(t) {
    return new Ea(t, this.config);
  }
}
o(Ua, vn, "PgTextBuilder");
var xn, Pn;
class Ea extends (Pn = I, xn = s, Pn) {
  constructor() {
    super(...arguments);
    o(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return "text";
  }
}
o(Ea, xn, "PgText");
function r(e, t = {}) {
  const { name: n, config: a } = z(e, t);
  return new Ua(n, a);
}
var Tn, qn;
class Va extends (qn = W, Tn = s, qn) {
  constructor(t, n, a) {
    super(t, "string", "PgTime"), this.withTimezone = n, this.precision = a, this.config.withTimezone = n, this.config.precision = a;
  }
  build(t) {
    return new za(t, this.config);
  }
}
o(Va, Tn, "PgTimeBuilder");
var Cn, Dn;
class za extends (Dn = I, Cn = s, Dn) {
  constructor(n, a) {
    super(n, a);
    o(this, "withTimezone");
    o(this, "precision");
    this.withTimezone = a.withTimezone, this.precision = a.precision;
  }
  getSQLType() {
    return `time${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
o(za, Cn, "PgTime");
function Yd(e, t = {}) {
  var _a2;
  const { name: n, config: a } = z(e, t);
  return new Va(n, (_a2 = a.withTimezone) != null ? _a2 : false, a.precision);
}
var Bn, Kn;
class Ra extends (Kn = W, Bn = s, Kn) {
  constructor(t, n, a) {
    super(t, "date", "PgTimestamp"), this.config.withTimezone = n, this.config.precision = a;
  }
  build(t) {
    return new Fa(t, this.config);
  }
}
o(Ra, Bn, "PgTimestampBuilder");
var Ln, On;
class Fa extends (On = I, Ln = s, On) {
  constructor(n, a) {
    super(n, a);
    o(this, "withTimezone");
    o(this, "precision");
    o(this, "mapFromDriverValue", (n2) => new Date(this.withTimezone ? n2 : n2 + "+0000"));
    o(this, "mapToDriverValue", (n2) => n2.toISOString());
    this.withTimezone = a.withTimezone, this.precision = a.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : ` (${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
o(Fa, Ln, "PgTimestamp");
var kn, Un;
class Ma extends (Un = W, kn = s, Un) {
  constructor(t, n, a) {
    super(t, "string", "PgTimestampString"), this.config.withTimezone = n, this.config.precision = a;
  }
  build(t) {
    return new Qa(t, this.config);
  }
}
o(Ma, kn, "PgTimestampStringBuilder");
var En, Vn;
class Qa extends (Vn = I, En = s, Vn) {
  constructor(n, a) {
    super(n, a);
    o(this, "withTimezone");
    o(this, "precision");
    this.withTimezone = a.withTimezone, this.precision = a.precision;
  }
  getSQLType() {
    return `timestamp${this.precision === void 0 ? "" : `(${this.precision})`}${this.withTimezone ? " with time zone" : ""}`;
  }
}
o(Qa, En, "PgTimestampString");
function d(e, t = {}) {
  var _a2, _b;
  const { name: n, config: a } = z(e, t);
  return (a == null ? void 0 : a.mode) === "string" ? new Ma(n, (_a2 = a.withTimezone) != null ? _a2 : false, a.precision) : new Ra(n, (_b = a == null ? void 0 : a.withTimezone) != null ? _b : false, a == null ? void 0 : a.precision);
}
var zn, Rn;
class $a extends (Rn = S, zn = s, Rn) {
  constructor(t) {
    super(t, "string", "PgUUID");
  }
  defaultRandom() {
    return this.default(M`gen_random_uuid()`);
  }
  build(t) {
    return new ja(t, this.config);
  }
}
o($a, zn, "PgUUIDBuilder");
var Fn, Mn;
class ja extends (Mn = I, Fn = s, Mn) {
  getSQLType() {
    return "uuid";
  }
}
o(ja, Fn, "PgUUID");
function Zd(e) {
  return new $a(e != null ? e : "");
}
var Qn, $n;
class Ga extends ($n = S, Qn = s, $n) {
  constructor(t, n) {
    super(t, "string", "PgVarchar"), this.config.length = n.length, this.config.enumValues = n.enum;
  }
  build(t) {
    return new Xa(t, this.config);
  }
}
o(Ga, Qn, "PgVarcharBuilder");
var jn, Gn;
class Xa extends (Gn = I, jn = s, Gn) {
  constructor() {
    super(...arguments);
    o(this, "length", this.config.length);
    o(this, "enumValues", this.config.enumValues);
  }
  getSQLType() {
    return this.length === void 0 ? "varchar" : `varchar(${this.length})`;
  }
}
o(Xa, jn, "PgVarchar");
function A(e, t = {}) {
  const { name: n, config: a } = z(e, t);
  return new Ga(n, a);
}
var Xn, Hn;
class Ha extends (Hn = S, Xn = s, Hn) {
  constructor(t, n) {
    super(t, "string", "PgBinaryVector"), this.config.dimensions = n.dimensions;
  }
  build(t) {
    return new Ja(t, this.config);
  }
}
o(Ha, Xn, "PgBinaryVectorBuilder");
var Jn, Wn;
class Ja extends (Wn = I, Jn = s, Wn) {
  constructor() {
    super(...arguments);
    o(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `bit(${this.dimensions})`;
  }
}
o(Ja, Jn, "PgBinaryVector");
function eo(e, t) {
  const { name: n, config: a } = z(e, t);
  return new Ha(n, a);
}
var Yn, Zn;
class Wa extends (Zn = S, Yn = s, Zn) {
  constructor(t, n) {
    super(t, "array", "PgHalfVector"), this.config.dimensions = n.dimensions;
  }
  build(t) {
    return new Ya(t, this.config);
  }
}
o(Wa, Yn, "PgHalfVectorBuilder");
var ei, ti;
class Ya extends (ti = I, ei = s, ti) {
  constructor() {
    super(...arguments);
    o(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `halfvec(${this.dimensions})`;
  }
  mapToDriverValue(n) {
    return JSON.stringify(n);
  }
  mapFromDriverValue(n) {
    return n.slice(1, -1).split(",").map((a) => Number.parseFloat(a));
  }
}
o(Ya, ei, "PgHalfVector");
function to(e, t) {
  const { name: n, config: a } = z(e, t);
  return new Wa(n, a);
}
var ri, ni;
class Za extends (ni = S, ri = s, ni) {
  constructor(t, n) {
    super(t, "string", "PgSparseVector"), this.config.dimensions = n.dimensions;
  }
  build(t) {
    return new ed(t, this.config);
  }
}
o(Za, ri, "PgSparseVectorBuilder");
var ii, ai;
class ed extends (ai = I, ii = s, ai) {
  constructor() {
    super(...arguments);
    o(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `sparsevec(${this.dimensions})`;
  }
}
o(ed, ii, "PgSparseVector");
function ro(e, t) {
  const { name: n, config: a } = z(e, t);
  return new Za(n, a);
}
var di, oi;
class td extends (oi = S, di = s, oi) {
  constructor(t, n) {
    super(t, "array", "PgVector"), this.config.dimensions = n.dimensions;
  }
  build(t) {
    return new rd(t, this.config);
  }
}
o(td, di, "PgVectorBuilder");
var si, ui;
class rd extends (ui = I, si = s, ui) {
  constructor() {
    super(...arguments);
    o(this, "dimensions", this.config.dimensions);
  }
  getSQLType() {
    return `vector(${this.dimensions})`;
  }
  mapToDriverValue(n) {
    return JSON.stringify(n);
  }
  mapFromDriverValue(n) {
    return n.slice(1, -1).split(",").map((a) => Number.parseFloat(a));
  }
}
o(rd, si, "PgVector");
function no(e, t) {
  const { name: n, config: a } = z(e, t);
  return new td(n, a);
}
function io() {
  return { bigint: Od, bigserial: kd, boolean: m, char: Ud, cidr: Ed, customType: Vd, date: ye, doublePrecision: zd, inet: Rd, integer: i, interval: Fd, json: j, jsonb: v, line: Md, macaddr: Qd, macaddr8: $d, numeric: ha, point: jd, geometry: Xd, real: Hd, serial: l, smallint: Jd, smallserial: Wd, text: r, time: Yd, timestamp: d, uuid: Zd, varchar: A, bit: eo, halfvec: to, sparsevec: ro, vector: no };
}
const me = /* @__PURE__ */ Symbol.for("drizzle:PgInlineForeignKeys"), Ce = /* @__PURE__ */ Symbol.for("drizzle:EnableRLS");
var li, ci, _i, pi, mi;
class Y extends (mi = R, pi = s, _i = me, ci = Ce, li = R.Symbol.ExtraConfigBuilder, mi) {
  constructor() {
    super(...arguments);
    o(this, _i, []);
    o(this, ci, false);
    o(this, li);
  }
}
o(Y, pi, "PgTable"), o(Y, "Symbol", Object.assign({}, R.Symbol, { InlineForeignKeys: me, EnableRLS: Ce }));
function ao(e, t, n, a, u = e) {
  const p = new Y(e, a, u), h = typeof t == "function" ? t(io()) : t, P = Object.fromEntries(Object.entries(h).map(([f, Q]) => {
    const T = Q;
    T.setName(f);
    const V = T.build(p);
    return p[me].push(...T.buildForeignKeys(V, p)), [f, V];
  })), x = Object.fromEntries(Object.entries(h).map(([f, Q]) => {
    const T = Q;
    T.setName(f);
    const V = T.buildExtraConfigColumn(p);
    return [f, V];
  })), C = Object.assign(p, P);
  return C[R.Symbol.Columns] = P, C[R.Symbol.ExtraConfigColumns] = x, n && (C[Y.Symbol.ExtraConfigBuilder] = n), Object.assign(C, { enableRLS: () => (C[Y.Symbol.EnableRLS] = true, C) });
}
const c = (e, t, n) => ao(e, t, n, void 0);
var fi;
fi = s;
class Ne {
  constructor(t, n) {
    this.unique = t, this.name = n;
  }
  on(...t) {
    return new te(t.map((n) => {
      if (O(n, K)) return n;
      n = n;
      const a = new ee(n.name, !!n.keyAsName, n.columnType, n.indexConfig);
      return n.indexConfig = JSON.parse(JSON.stringify(n.defaultConfig)), a;
    }), this.unique, false, this.name);
  }
  onOnly(...t) {
    return new te(t.map((n) => {
      if (O(n, K)) return n;
      n = n;
      const a = new ee(n.name, !!n.keyAsName, n.columnType, n.indexConfig);
      return n.indexConfig = n.defaultConfig, a;
    }), this.unique, true, this.name);
  }
  using(t, ...n) {
    return new te(n.map((a) => {
      if (O(a, K)) return a;
      a = a;
      const u = new ee(a.name, !!a.keyAsName, a.columnType, a.indexConfig);
      return a.indexConfig = JSON.parse(JSON.stringify(a.defaultConfig)), u;
    }), this.unique, true, this.name, t);
  }
}
o(Ne, fi, "PgIndexBuilderOn");
var gi;
gi = s;
class te {
  constructor(t, n, a, u, p = "btree") {
    o(this, "config");
    this.config = { name: u, columns: t, unique: n, only: a, method: p };
  }
  concurrently() {
    return this.config.concurrently = true, this;
  }
  with(t) {
    return this.config.with = t, this;
  }
  where(t) {
    return this.config.where = t, this;
  }
  build(t) {
    return new nd(this.config, t);
  }
}
o(te, gi, "PgIndexBuilder");
var yi;
yi = s;
class nd {
  constructor(t, n) {
    o(this, "config");
    this.config = __spreadProps(__spreadValues({}, t), { table: n });
  }
}
o(nd, yi, "PgIndex");
function w(e) {
  return new Ne(false, e);
}
function N(e) {
  return new Ne(true, e);
}
const B = { INT8_MIN: -128, INT8_MAX: 127, INT8_UNSIGNED_MAX: 255, INT16_MIN: -32768, INT16_MAX: 32767, INT16_UNSIGNED_MAX: 65535, INT24_MIN: -8388608, INT24_MAX: 8388607, INT24_UNSIGNED_MAX: 16777215, INT32_MIN: -2147483648, INT32_MAX: 2147483647, INT32_UNSIGNED_MAX: 4294967295, INT48_MIN: -140737488355328, INT48_MAX: 140737488355327, INT48_UNSIGNED_MAX: 281474976710655, INT64_MIN: -/* @__PURE__ */ BigInt("9223372036854775808"), INT64_MAX: /* @__PURE__ */ BigInt("9223372036854775807"), INT64_UNSIGNED_MAX: /* @__PURE__ */ BigInt("18446744073709551615") };
function L(e, t) {
  return t.includes(e.columnType);
}
function oo(e) {
  return "enumValues" in e && Array.isArray(e.enumValues) && e.enumValues.length > 0;
}
const so = y.union([y.string(), y.number(), y.boolean(), y.null()]), uo = y.union([so, y.record(y.any()), y.array(y.any())]), lo = y.custom((e) => e instanceof Buffer);
function id(e, t) {
  var _a2, _b;
  const n = (_a2 = t == null ? void 0 : t.zodInstance) != null ? _a2 : y, a = (_b = t == null ? void 0 : t.coerce) != null ? _b : {};
  let u;
  return oo(e) && (u = e.enumValues.length ? n.enum(e.enumValues) : n.string()), u || (L(e, ["PgGeometry", "PgPointTuple"]) ? u = n.tuple([n.number(), n.number()]) : L(e, ["PgGeometryObject", "PgPointObject"]) ? u = n.object({ x: n.number(), y: n.number() }) : L(e, ["PgHalfVector", "PgVector"]) ? (u = n.array(n.number()), u = e.dimensions ? u.length(e.dimensions) : u) : L(e, ["PgLine"]) ? u = n.tuple([n.number(), n.number(), n.number()]) : L(e, ["PgLineABC"]) ? u = n.object({ a: n.number(), b: n.number(), c: n.number() }) : L(e, ["PgArray"]) ? (u = n.array(id(e.baseColumn, n)), u = e.size ? u.length(e.size) : u) : e.dataType === "array" ? u = n.array(n.any()) : e.dataType === "number" ? u = co(e, n, a) : e.dataType === "bigint" ? u = _o(e, n, a) : e.dataType === "boolean" ? u = a === true || a.boolean ? n.coerce.boolean() : n.boolean() : e.dataType === "date" ? u = a === true || a.date ? n.coerce.date() : n.date() : e.dataType === "string" ? u = po(e, n, a) : e.dataType === "json" ? u = uo : e.dataType === "custom" ? u = n.any() : e.dataType === "buffer" && (u = lo)), u || (u = n.any()), u;
}
function co(e, t, n) {
  let a = e.getSQLType().includes("unsigned"), u, p, h = false;
  L(e, ["MySqlTinyInt", "SingleStoreTinyInt"]) ? (u = a ? 0 : B.INT8_MIN, p = a ? B.INT8_UNSIGNED_MAX : B.INT8_MAX, h = true) : L(e, ["PgSmallInt", "PgSmallSerial", "MySqlSmallInt", "SingleStoreSmallInt"]) ? (u = a ? 0 : B.INT16_MIN, p = a ? B.INT16_UNSIGNED_MAX : B.INT16_MAX, h = true) : L(e, ["PgReal", "MySqlFloat", "MySqlMediumInt", "SingleStoreMediumInt", "SingleStoreFloat"]) ? (u = a ? 0 : B.INT24_MIN, p = a ? B.INT24_UNSIGNED_MAX : B.INT24_MAX, h = L(e, ["MySqlMediumInt", "SingleStoreMediumInt"])) : L(e, ["PgInteger", "PgSerial", "MySqlInt", "SingleStoreInt"]) ? (u = a ? 0 : B.INT32_MIN, p = a ? B.INT32_UNSIGNED_MAX : B.INT32_MAX, h = true) : L(e, ["PgDoublePrecision", "MySqlReal", "MySqlDouble", "SingleStoreReal", "SingleStoreDouble", "SQLiteReal"]) ? (u = a ? 0 : B.INT48_MIN, p = a ? B.INT48_UNSIGNED_MAX : B.INT48_MAX) : L(e, ["PgBigInt53", "PgBigSerial53", "MySqlBigInt53", "MySqlSerial", "SingleStoreBigInt53", "SingleStoreSerial", "SQLiteInteger"]) ? (a = a || L(e, ["MySqlSerial", "SingleStoreSerial"]), u = a ? 0 : Number.MIN_SAFE_INTEGER, p = Number.MAX_SAFE_INTEGER, h = true) : L(e, ["MySqlYear", "SingleStoreYear"]) ? (u = 1901, p = 2155, h = true) : (u = Number.MIN_SAFE_INTEGER, p = Number.MAX_SAFE_INTEGER);
  let P = n === true || n != null && n.number ? t.coerce.number() : t.number();
  return P = P.min(u).max(p), h ? P.int() : P;
}
function _o(e, t, n) {
  const a = e.getSQLType().includes("unsigned"), u = a ? /* @__PURE__ */ BigInt("0") : B.INT64_MIN, p = a ? B.INT64_UNSIGNED_MAX : B.INT64_MAX;
  return (n === true || n != null && n.bigint ? t.coerce.bigint() : t.bigint()).min(u).max(p);
}
function po(e, t, n) {
  var _a2;
  if (L(e, ["PgUUID"])) return t.string().uuid();
  let a, u, p = false;
  L(e, ["PgVarchar", "SQLiteText"]) ? a = e.length : L(e, ["MySqlVarChar", "SingleStoreVarChar"]) ? a = (_a2 = e.length) != null ? _a2 : B.INT16_UNSIGNED_MAX : L(e, ["MySqlText", "SingleStoreText"]) && (e.textType === "longtext" ? a = B.INT32_UNSIGNED_MAX : e.textType === "mediumtext" ? a = B.INT24_UNSIGNED_MAX : e.textType === "text" ? a = B.INT16_UNSIGNED_MAX : a = B.INT8_UNSIGNED_MAX), L(e, ["PgChar", "MySqlChar", "SingleStoreChar"]) && (a = e.length, p = true), L(e, ["PgBinaryVector"]) && (u = /^[01]+$/, a = e.dimensions);
  let h = n === true || n != null && n.string ? t.coerce.string() : t.string();
  return h = u ? h.regex(u) : h, a && p ? h.length(a) : a ? h.max(a) : h;
}
function ad(e) {
  return xi(e) ? Kd(e) : Ld(e);
}
function dd(e, t, n, a) {
  var _a2;
  const u = {};
  for (const [p, h] of Object.entries(e)) {
    if (!O(h, J) && !O(h, K) && !O(h, K.Aliased) && typeof h == "object") {
      const Q = xi(h) || Bd(h) ? ad(h) : h;
      u[p] = dd(Q, (_a2 = t[p]) != null ? _a2 : {}, n, a);
      continue;
    }
    const P = t[p];
    if (P !== void 0 && typeof P != "function") {
      u[p] = P;
      continue;
    }
    const x = O(h, J) ? h : void 0, C = x ? id(x, a) : y.any(), f = typeof P == "function" ? P(C) : C;
    n.never(x) || (u[p] = f, x && (n.nullable(x) && (u[p] = u[p].nullable()), n.optional(x) && (u[p] = u[p].optional())));
  }
  return y.object(u);
}
const mo = { never: (e) => {
  var t, n;
  return ((t = e == null ? void 0 : e.generated) == null ? void 0 : t.type) === "always" || ((n = e == null ? void 0 : e.generatedIdentity) == null ? void 0 : n.type) === "always";
}, optional: (e) => !e.notNull || e.notNull && e.hasDefault, nullable: (e) => !e.notNull }, _ = (e, t) => {
  const n = ad(e);
  return dd(n, {}, mo);
}, D = c("users", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), email: r("email").notNull().unique(), googleSubject: r("google_subject"), phone: r("phone"), fullName: r("full_name").notNull(), isGuest: m("is_guest").default(false), isVerified: m("is_verified").default(false), emailVerified: m("email_verified").default(false), phoneVerified: m("phone_verified").default(false), walletBalance: i("wallet_balance").default(0), pointsBalance: i("points_balance").default(0), referralCode: r("referral_code").unique(), referredByUserId: i("referred_by_user_id").references(() => D.id), dailyReferralCount: i("daily_referral_count").default(0), lastReferralDate: ye("last_referral_date"), monthlyReferralCount: i("monthly_referral_count").default(0), suspendedUntil: d("suspended_until"), suspensionReason: r("suspension_reason"), distanceToNearestOutlet: g("distance_to_nearest_outlet", { precision: 8, scale: 2 }), nearestOutletId: i("nearest_outlet_id").references(() => U.id), pushToken: r("push_token"), pushTokenUpdatedAt: d("push_token_updated_at"), marketingOptIn: m("marketing_opt_in").default(true), receiveEmails: m("receive_emails").default(true), createdAt: d("created_at").defaultNow() }, (e) => ({ googleSubjectUnique: N("users_google_subject_unique").on(e.googleSubject).where(M`${e.googleSubject} IS NOT NULL`) })), fo = c("customer_addresses", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id, { onDelete: "cascade" }).notNull(), fullAddress: r("full_address").notNull(), addressName: r("address_name"), latitude: g("latitude", { precision: 10, scale: 8 }), longitude: g("longitude", { precision: 11, scale: 8 }), isPrimary: m("is_primary").default(false), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("user_address_unique").on(e.userId, e.fullAddress) })), go = c("otp_verifications", { id: l("id").primaryKey(), identifier: r("identifier").notNull(), otp: r("otp").notNull(), type: r("type", { enum: ["login", "register_email", "register_phone"] }).notNull(), expiresAt: d("expires_at").notNull(), verified: m("verified").default(false), userId: i("user_id").references(() => D.id), createdAt: d("created_at").defaultNow() }), yo = c("custom_roles", { id: l("id").primaryKey(), roleKey: r("role_key").notNull().unique(), displayName: r("display_name").notNull(), description: r("description"), isSystemRole: m("is_system_role").default(false), createdBy: i("created_by"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), b = c("admin_users", { id: l("id").primaryKey(), email: r("email").notNull(), password: r("password").notNull(), fullName: r("full_name").notNull(), phoneNumber: r("phone_number"), role: r("role").notNull().default("order_manager"), isActive: m("is_active").default(true), receiveEmails: m("receive_emails").default(true), deletedAt: d("deleted_at"), lastLoginAt: d("last_login_at"), createdAt: d("created_at").defaultNow() }, (e) => ({ emailUnique: N("admin_users_email_active_unique").on(e.email).where(M`${e.deletedAt} IS NULL`) })), No = c("admin_user_outlets", { id: l("id").primaryKey(), adminUserId: i("admin_user_id").references(() => b.id, { onDelete: "cascade" }).notNull(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("admin_user_outlet_unique").on(e.adminUserId, e.outletId) })), ho = c("role_permissions", { id: l("id").primaryKey(), role: r("role").notNull(), permission: r("permission").notNull(), enabled: m("enabled").notNull().default(true), updatedBy: i("updated_by").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ unique: N("role_permission_unique").on(e.role, e.permission) })), q = c("brands", { id: l("id").primaryKey(), name: A("name", { length: 255 }).notNull(), logoUrl: A("logo_url", { length: 255 }), logoLightUrl: A("logo_light_url", { length: 255 }), logoDarkUrl: A("logo_dark_url", { length: 255 }), colorScheme: A("color_scheme", { length: 10 }), buttonColor: A("button_color", { length: 10 }), playStoreUrl: A("play_store_url", { length: 255 }), appStoreUrl: A("app_store_url", { length: 255 }), supportEmail: A("support_email", { length: 255 }), domain: A("domain", { length: 255 }), isActive: m("is_active").default(true), isDefault: m("is_default").default(false), hasFreeDelivery: m("has_free_delivery").default(false), freeDeliveryMinAmount: g("free_delivery_min_amount", { precision: 10, scale: 2 }).default("0"), freeDeliveryTagColor: r("free_delivery_tag_color").default("#10B981"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ domainUnique: N("brands_domain_unique").on(e.domain), nameUnique: N("brands_name_unique").on(e.name) })), Ao = c("user_brand_access", { id: l("id").primaryKey(), userId: i("user_id").references(() => b.id, { onDelete: "cascade" }).notNull(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }), accessLevel: r("access_level").default("admin"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ unique: N("user_brand_access_unique").on(e.userId, e.brandId) })), U = c("outlets", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), name: r("name").notNull(), address: r("address").notNull(), physicalLocationKey: r("physical_location_key"), latitude: g("latitude", { precision: 10, scale: 8 }).notNull(), longitude: g("longitude", { precision: 11, scale: 8 }).notNull(), email: r("email"), phone: r("phone"), openTime: r("open_time"), closeTime: r("close_time"), daysOpen: j("days_open").$type().default(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]), isActive: m("is_active").default(true), isLegacy: m("is_legacy").default(false), mergedIntoOutletId: i("merged_into_outlet_id").references(() => U.id, { onDelete: "set null" }), mergedAt: d("merged_at"), legacyReason: r("legacy_reason"), deliveryRadius: i("delivery_radius").default(1e4), glovoAddressId: r("glovo_address_id"), createdAt: d("created_at").defaultNow() }), Io = c("outlet_brands", { id: l("id").primaryKey(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("outlet_brands_unique").on(e.outletId, e.brandId) })), bo = c("banners", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), title: r("title"), subtitle: r("subtitle"), imageUrl: r("image_url").notNull(), mobileImageUrl: r("mobile_image_url"), linkUrl: r("link_url"), sortOrder: i("sort_order").default(0), isActive: m("is_active").default(true), bannerType: r("banner_type").default("carousel"), promoText: r("promo_text"), promoBackgroundColor: r("promo_background_color"), promoGradientFrom: r("promo_gradient_from"), promoGradientTo: r("promo_gradient_to"), heroTitleLine1: r("hero_title_line1"), heroTitleLine2: r("hero_title_line2"), heroBrandText: r("hero_brand_text"), heroTagline: r("hero_tagline"), heroBackgroundColor: r("hero_background_color"), heroAccentColor: r("hero_accent_color"), createdAt: d("created_at").defaultNow() }), od = c("popups", { id: l("id").primaryKey(), title: r("title"), imageUrl: r("image_url").notNull(), linkRoute: r("link_route"), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow() }), wo = c("popup_outlets", { id: l("id").primaryKey(), popupId: i("popup_id").references(() => od.id, { onDelete: "cascade" }).notNull(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("popup_outlet_unique").on(e.popupId, e.outletId) })), he = c("categories", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), name: r("name").notNull(), slug: r("slug").notNull().unique(), description: r("description"), imageUrl: r("image_url"), sortOrder: i("sort_order").default(0), isActive: m("is_active").default(true), orderAvailabilityMode: r("order_availability_mode").default("both"), preorderLeadTimeHours: i("preorder_lead_time_hours") }), k = c("products", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), name: r("name").notNull(), slug: r("slug").notNull().unique(), orderProProductId: r("orderpro_product_id"), description: r("description"), imageUrl: r("image_url"), basePrice: g("base_price", { precision: 10, scale: 2 }).notNull(), categoryId: i("category_id").references(() => he.id), isActive: m("is_active").default(true), isGiftBox: m("is_gift_box").default(false), isBestSeller: m("is_best_seller").default(false), sortOrder: i("sort_order").default(0), preparationTime: i("preparation_time").default(15), bulkServingOptions: v("bulk_serving_options").$type().default(null), orderAvailabilityMode: r("order_availability_mode"), preorderLeadTimeHours: i("preorder_lead_time_hours"), createdAt: d("created_at").defaultNow() }), vo = c("product_sales_channels", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), channelValue: r("channel_value").notNull(), applyPlatformFee: m("apply_platform_fee").default(true).notNull(), commissionRateOverride: g("commission_rate_override", { precision: 5, scale: 2 }), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueProductChannel: N("product_sales_channels_unique").on(e.productId, e.channelValue) })), So = c("product_channel_prices", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), salesChannel: r("sales_channel").notNull(), price: i("price").notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueProductChannel: N("product_channel_prices_unique").on(e.productId, e.salesChannel) })), xo = c("product_categories", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), categoryId: i("category_id").references(() => he.id, { onDelete: "cascade" }).notNull(), sortOrder: i("sort_order").default(0), createdAt: d("created_at").defaultNow() }, (e) => ({ uniqueProductCategory: N("product_categories_unique").on(e.productId, e.categoryId) })), Ae = c("customization_groups", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }), productId: i("product_id").references(() => k.id), isLibrary: m("is_library").default(false).notNull(), sharedOptionGroupId: i("shared_option_group_id").references(() => de.id, { onDelete: "set null" }), name: r("name").notNull(), description: r("description"), isRequired: m("is_required").default(false), maxSelections: i("max_selections").default(1), minSelections: i("min_selections").default(0), sortOrder: i("sort_order").default(0) }, (e) => ({ uniqueLibraryGroupNamePerBrand: N("customization_groups_library_brand_name_unique").on(e.brandId, M`LOWER(TRIM(${e.name}))`).where(M`${e.isLibrary} = true AND ${e.brandId} IS NOT NULL`) })), Po = c("product_customization_group_assignments", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), groupId: i("group_id").references(() => Ae.id, { onDelete: "cascade" }).notNull(), sortOrder: i("sort_order").default(0), createdAt: d("created_at").defaultNow() }, (e) => ({ uniqueProductGroupAssignment: N("product_customization_group_assignments_unique").on(e.productId, e.groupId) })), sd = c("customization_options", { id: l("id").primaryKey(), groupId: i("group_id").references(() => Ae.id), name: r("name").notNull(), description: r("description"), extraPrice: g("extra_price", { precision: 10, scale: 2 }).default("0.00"), priceModifier: g("price_modifier", { precision: 10, scale: 2 }).default("0.00"), isDefault: m("is_default").default(false), isAvailable: m("is_available").default(true), sortOrder: i("sort_order").default(0), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueGroupOptionName: N("customization_options_group_name_unique").on(e.groupId, e.name) })), To = c("customization_option_channel_prices", { id: l("id").primaryKey(), optionId: i("option_id").references(() => sd.id, { onDelete: "cascade" }).notNull(), salesChannel: r("sales_channel").notNull(), price: i("price").notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueOptionChannel: N("customization_option_channel_prices_unique").on(e.optionId, e.salesChannel) })), ud = c("product_addons", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id).notNull(), addonProductId: i("addon_product_id").references(() => k.id).notNull(), isRequired: m("is_required").default(false), maxQuantity: i("max_quantity").default(1), sortOrder: i("sort_order").default(0), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueProductAddonPair: N("product_addons_product_addon_unique").on(e.productId, e.addonProductId) })), qo = c("product_addon_channel_prices", { id: l("id").primaryKey(), productAddonId: i("product_addon_id").references(() => ud.id, { onDelete: "cascade" }).notNull(), salesChannel: r("sales_channel").notNull(), price: i("price").notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueProductAddonChannel: N("product_addon_channel_prices_unique").on(e.productAddonId, e.salesChannel) })), Ie = c("addon_presets", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull(), name: r("name").notNull(), description: r("description"), isActive: m("is_active").default(true).notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueBrandPresetName: N("addon_presets_brand_name_unique").on(e.brandId, e.name) })), Co = c("addon_preset_items", { id: l("id").primaryKey(), presetId: i("preset_id").references(() => Ie.id, { onDelete: "cascade" }).notNull(), addonProductId: i("addon_product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), isRequired: m("is_required").default(false), maxQuantity: i("max_quantity").default(1), sortOrder: i("sort_order").default(0), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniquePresetAddonProduct: N("addon_preset_items_unique").on(e.presetId, e.addonProductId) })), Do = c("product_addon_preset_assignments", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), presetId: i("preset_id").references(() => Ie.id, { onDelete: "cascade" }).notNull(), sortOrder: i("sort_order").default(0), createdAt: d("created_at").defaultNow() }, (e) => ({ uniqueProductPresetAssignment: N("product_addon_preset_assignments_unique").on(e.productId, e.presetId) })), de = c("shared_option_groups", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull(), name: r("name").notNull(), description: r("description"), isRequired: m("is_required").default(false).notNull(), maxSelections: i("max_selections").default(1).notNull(), minSelections: i("min_selections").default(0).notNull(), sortOrder: i("sort_order").default(0).notNull(), isActive: m("is_active").default(true).notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueBrandGroupName: N("shared_option_groups_brand_name_unique").on(e.brandId, e.name) })), ld = c("shared_options", { id: l("id").primaryKey(), sharedGroupId: i("shared_group_id").references(() => de.id, { onDelete: "cascade" }).notNull(), name: r("name").notNull(), description: r("description"), extraPrice: g("extra_price", { precision: 10, scale: 2 }).default("0.00").notNull(), isAvailable: m("is_available").default(true).notNull(), sortOrder: i("sort_order").default(0).notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueSharedGroupOptionName: N("shared_options_group_name_unique").on(e.sharedGroupId, e.name) })), Bo = c("shared_option_channel_prices", { id: l("id").primaryKey(), sharedOptionId: i("shared_option_id").references(() => ld.id, { onDelete: "cascade" }).notNull(), salesChannel: r("sales_channel").notNull(), price: i("price").notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueSharedOptionChannel: N("shared_option_channel_prices_unique").on(e.sharedOptionId, e.salesChannel) })), Ko = c("product_shared_option_group_assignments", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), sharedGroupId: i("shared_group_id").references(() => de.id, { onDelete: "cascade" }).notNull(), sortOrder: i("sort_order").default(0).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ uniqueProductSharedGroupAssignment: N("product_shared_option_group_assignments_unique").on(e.productId, e.sharedGroupId) })), cd = c("shared_addons", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull(), addonProductId: i("addon_product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), isRequired: m("is_required").default(false).notNull(), maxQuantity: i("max_quantity").default(1).notNull(), sortOrder: i("sort_order").default(0).notNull(), isActive: m("is_active").default(true).notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueBrandAddonProduct: N("shared_addons_brand_product_unique").on(e.brandId, e.addonProductId) })), Lo = c("product_shared_addon_assignments", { id: l("id").primaryKey(), productId: i("product_id").references(() => k.id, { onDelete: "cascade" }).notNull(), sharedAddonId: i("shared_addon_id").references(() => cd.id, { onDelete: "cascade" }).notNull(), sortOrder: i("sort_order").default(0).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ uniqueProductSharedAddonAssignment: N("product_shared_addon_assignments_unique").on(e.productId, e.sharedAddonId) })), Oo = c("delivery_pricing", { id: l("id").primaryKey(), minDistance: g("min_distance", { precision: 4, scale: 2 }).notNull(), maxDistance: g("max_distance", { precision: 4, scale: 2 }).notNull(), price: g("price", { precision: 10, scale: 2 }).notNull(), minCartTotalForFreeDelivery: g("min_cart_total_for_free_delivery", { precision: 10, scale: 2 }).notNull().default("50000"), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), ko = c("product_availability", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), productId: i("product_id").references(() => k.id), outletId: i("outlet_id").references(() => U.id), isAvailable: m("is_available").default(true), stockQuantity: i("stock_quantity"), priceOverride: g("price_override", { precision: 10, scale: 2 }), customizationGroupAvailability: j("customization_group_availability").$type().default({}), customizationOptionAvailability: j("customization_option_availability").$type().default({}), orderProLastEventId: r("orderpro_last_event_id"), orderProLastEventAt: d("orderpro_last_event_at"), orderProLastSyncedAt: d("orderpro_last_synced_at"), orderProLastSyncSource: r("orderpro_last_sync_source"), orderProLastSyncReason: r("orderpro_last_sync_reason") }), Uo = c("product_deactivation_logs", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), productId: i("product_id").references(() => k.id).notNull(), outletId: i("outlet_id").references(() => U.id).notNull(), adminUserId: i("admin_user_id").references(() => b.id).notNull(), productName: r("product_name").notNull(), outletName: r("outlet_name").notNull(), adminUserName: r("admin_user_name").notNull(), reason: r("reason").notNull(), customReason: r("custom_reason"), deactivatedAt: d("deactivated_at").notNull().defaultNow(), reactivatedAt: d("reactivated_at"), reactivatedById: i("reactivated_by_id").references(() => b.id), reactivatedByName: r("reactivated_by_name"), downtimeMinutes: i("downtime_minutes"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), E = c("orders", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id), outletId: i("outlet_id").references(() => U.id), brandId: i("brand_id").references(() => q.id), orderNumber: r("order_number").notNull().unique(), status: r("status").notNull().default("unpaid"), orderType: r("order_type").notNull(), source: r("source").notNull().default("web"), subtotal: g("subtotal", { precision: 10, scale: 2 }).notNull(), deliveryFee: g("delivery_fee", { precision: 10, scale: 2 }).default("0"), discount: g("discount", { precision: 10, scale: 2 }).default("0"), total: g("total", { precision: 10, scale: 2 }).notNull(), walletAmount: i("wallet_amount").default(0), paymentMethod: r("payment_method"), paymentStatus: r("payment_status").notNull().default("pending"), paymentReference: r("payment_reference"), deliveryAddress: r("delivery_address"), deliveryLatitude: g("delivery_latitude", { precision: 10, scale: 8 }), deliveryLongitude: g("delivery_longitude", { precision: 11, scale: 8 }), customerPhone: r("customer_phone"), customerEmail: r("customer_email"), customerName: r("customer_name"), specialInstructions: r("special_instructions"), promoCode: r("promo_code"), receiptUrl: r("receipt_url"), acceptedBy: i("accepted_by").references(() => b.id), confirmedBy: i("confirmed_by").references(() => b.id), adminComments: r("admin_comments"), confirmedAt: d("confirmed_at"), acceptedAt: d("accepted_at"), preparationStartTime: d("preparation_start_time"), estimatedPreparationTime: i("estimated_preparation_time"), readyForPickupAt: d("ready_for_pickup_at"), outForDeliveryAt: d("out_for_delivery_at"), deliveredAt: d("delivered_at"), failedAt: d("failed_at"), refundedAt: d("refunded_at"), isScheduled: m("is_scheduled").default(false).notNull(), scheduledAt: d("scheduled_at"), fulfillmentStatus: r("fulfillment_status").default("pending").notNull(), dispatchedAt: d("dispatched_at"), isRescheduled: m("is_rescheduled").default(false).notNull(), originalScheduledAt: d("original_scheduled_at"), glovoQuoteId: r("glovo_quote_id"), glovoTrackingNumber: r("glovo_tracking_number"), glovoDeliveryStatus: r("glovo_delivery_status"), glovoDeliveryPrice: g("glovo_delivery_price", { precision: 10, scale: 2 }), glovoCourierInfo: v("glovo_courier_info"), glovoTrackingUrl: r("glovo_tracking_url"), glovoQuoteExpiresAt: d("glovo_quote_expires_at"), chowdeckIntegrationId: i("chowdeck_integration_id").references(() => $.id), chowdeckMerchantReference: r("chowdeck_merchant_reference"), chowdeckOrderReference: r("chowdeck_order_reference"), chowdeckStatus: r("chowdeck_status"), chowdeckEventType: r("chowdeck_event_type"), chowdeckSyncedAt: d("chowdeck_synced_at"), chowdeckLastError: r("chowdeck_last_error"), chowdeckLastEventAt: d("chowdeck_last_event_at"), chowdeckLastOutboundAction: r("chowdeck_last_outbound_action"), chowdeckLastOutboundActionAt: d("chowdeck_last_outbound_action_at"), chowdeckLastInboundEventId: r("chowdeck_last_inbound_event_id"), foodeloAccountId: i("foodelo_account_id").references(() => be.id), foodeloVendorId: r("foodelo_vendor_id"), foodeloOrderId: r("foodelo_order_id"), foodeloOrderRef: r("foodelo_order_ref"), foodeloPublicUid: r("foodelo_public_uid"), foodeloStatus: r("foodelo_status"), foodeloEventType: r("foodelo_event_type"), foodeloLastError: r("foodelo_last_error"), foodeloLastEventAt: d("foodelo_last_event_at"), foodeloLastOutboundAction: r("foodelo_last_outbound_action"), foodeloLastOutboundActionAt: d("foodelo_last_outbound_action_at"), foodeloLastInboundEventId: r("foodelo_last_inbound_event_id"), statusVersion: i("status_version").default(0).notNull(), orderProOrderId: r("orderpro_order_id"), orderProStatus: r("orderpro_status"), orderProLastSyncAttemptAt: d("orderpro_last_sync_attempt_at"), orderProSyncedAt: d("orderpro_synced_at"), orderProLastError: r("orderpro_last_error"), paymentConfirmed: m("payment_confirmed").default(false).notNull(), paymentConfirmedBy: i("payment_confirmed_by").references(() => b.id), paymentConfirmedAt: d("payment_confirmed_at"), createdByType: r("created_by_type").default("customer").notNull(), createdByAdminId: i("created_by_admin_id").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ chowdeckOrderReferenceUnique: N("orders_chowdeck_order_unique").on(e.chowdeckMerchantReference, e.chowdeckOrderReference), foodeloOrderUnique: N("orders_foodelo_order_unique").on(e.foodeloAccountId, e.foodeloOrderId), userIdIdx: w("idx_orders_user_id").on(e.userId), outletIdIdx: w("idx_orders_outlet_id").on(e.outletId), brandIdIdx: w("idx_orders_brand_id").on(e.brandId), statusIdx: w("idx_orders_status").on(e.status), paymentStatusIdx: w("idx_orders_payment_status").on(e.paymentStatus), createdAtIdx: w("idx_orders_created_at").on(e.createdAt), brandCreatedAtIdx: w("idx_orders_brand_created_at").on(e.brandId, e.createdAt), brandStatusCreatedAtIdx: w("idx_orders_brand_status_created_at").on(e.brandId, e.status, e.createdAt), outletCreatedAtIdx: w("idx_orders_outlet_created_at").on(e.outletId, e.createdAt) })), oe = c("riders", { id: l("id").primaryKey(), fullName: r("full_name").notNull(), phoneNormalized: r("phone_normalized").notNull(), createdByAdminId: i("created_by_admin_id").references(() => b.id), createdOutletId: i("created_outlet_id").references(() => U.id), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }, (e) => ({ phoneUnique: N("riders_phone_normalized_unique").on(e.phoneNormalized) })), _d = c("rider_payout_accounts", { id: l("id").primaryKey(), riderId: i("rider_id").references(() => oe.id, { onDelete: "cascade" }).notNull(), bankCode: r("bank_code").notNull(), bankName: r("bank_name").notNull(), accountNumberEncrypted: r("account_number_encrypted").notNull(), accountNumberHash: r("account_number_hash").notNull(), accountNumberLast4: A("account_number_last4", { length: 4 }).notNull(), accountName: r("account_name").notNull(), recipientCode: r("recipient_code"), validatedAt: d("validated_at"), createdByAdminId: i("created_by_admin_id").references(() => b.id), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }, (e) => ({ accountUnique: N("rider_payout_accounts_bank_hash_unique").on(e.bankCode, e.accountNumberHash) })), se = c("order_payouts", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id, { onDelete: "cascade" }).notNull(), riderId: i("rider_id").references(() => oe.id), riderPayoutAccountId: i("rider_payout_account_id").references(() => _d.id), amountKobo: i("amount_kobo").notNull().default(0), status: r("status", { enum: ["draft", "pending_admin_approval", "rejected", "failed", "paid"] }).notNull().default("draft"), bankCode: r("bank_code"), bankName: r("bank_name"), accountNumberHash: r("account_number_hash"), accountNumberLast4: A("account_number_last4", { length: 4 }), accountName: r("account_name"), validatedAccountName: r("validated_account_name"), validatedAt: d("validated_at"), submittedByAdminId: i("submitted_by_admin_id").references(() => b.id), submittedAt: d("submitted_at"), approvedByAdminId: i("approved_by_admin_id").references(() => b.id), approvedAt: d("approved_at"), approval2faMethod: r("approval_2fa_method"), rejectedByAdminId: i("rejected_by_admin_id").references(() => b.id), rejectedAt: d("rejected_at"), rejectionReason: r("rejection_reason"), failedReason: r("failed_reason"), failedAt: d("failed_at"), paidAt: d("paid_at"), transferInFlight: m("transfer_in_flight").notNull().default(false), currentAttemptNumber: i("current_attempt_number").notNull().default(0), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }, (e) => ({ orderUnique: N("order_payouts_order_unique").on(e.orderId) })), pd = c("payout_approval_challenges", { id: l("id").primaryKey(), payoutId: i("payout_id").references(() => se.id, { onDelete: "cascade" }).notNull(), adminUserId: i("admin_user_id").references(() => b.id).notNull(), purpose: r("purpose", { enum: ["approve", "retry"] }).notNull(), otpCodeHash: r("otp_code_hash").notNull(), attemptCount: i("attempt_count").notNull().default(0), maxAttempts: i("max_attempts").notNull().default(5), expiresAt: d("expires_at").notNull(), resendAvailableAt: d("resend_available_at").notNull(), consumedAt: d("consumed_at"), invalidatedAt: d("invalidated_at"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }), Eo = c("order_payout_transfer_attempts", { id: l("id").primaryKey(), payoutId: i("payout_id").references(() => se.id, { onDelete: "cascade" }).notNull(), attemptNumber: i("attempt_number").notNull(), paystackReference: r("paystack_reference").notNull(), paystackTransferCode: r("paystack_transfer_code"), paystackTransferId: r("paystack_transfer_id"), recipientCode: r("recipient_code"), amountKobo: i("amount_kobo").notNull(), requestPayload: v("request_payload"), responsePayload: v("response_payload"), status: r("status").notNull(), failureReason: r("failure_reason"), initiatedByAdminId: i("initiated_by_admin_id").references(() => b.id), approvedChallengeId: i("approved_challenge_id").references(() => pd.id), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull(), finalizedAt: d("finalized_at") }, (e) => ({ referenceUnique: N("order_payout_transfer_attempts_reference_unique").on(e.paystackReference), attemptUnique: N("order_payout_transfer_attempts_attempt_unique").on(e.payoutId, e.attemptNumber) })), Vo = c("order_payout_events", { id: l("id").primaryKey(), payoutId: i("payout_id").references(() => se.id, { onDelete: "cascade" }).notNull(), eventType: r("event_type").notNull(), actorAdminId: i("actor_admin_id").references(() => b.id), eventPayload: v("event_payload"), correlationId: r("correlation_id"), createdAt: d("created_at").defaultNow().notNull() }), md = c("order_archive", { id: l("id").primaryKey(), originalOrderId: i("original_order_id").notNull().unique(), userId: i("user_id"), outletId: i("outlet_id"), brandId: i("brand_id").references(() => q.id), orderNumber: r("order_number").notNull(), status: r("status").notNull(), orderType: r("order_type").notNull(), source: r("source").notNull(), subtotal: g("subtotal", { precision: 10, scale: 2 }).notNull(), deliveryFee: g("delivery_fee", { precision: 10, scale: 2 }), discount: g("discount", { precision: 10, scale: 2 }), total: g("total", { precision: 10, scale: 2 }).notNull(), walletAmount: i("wallet_amount").default(0), paymentStatus: r("payment_status").notNull(), paymentReference: r("payment_reference"), deliveryAddress: r("delivery_address"), deliveryLatitude: g("delivery_latitude", { precision: 10, scale: 8 }), deliveryLongitude: g("delivery_longitude", { precision: 11, scale: 8 }), customerPhone: r("customer_phone"), customerEmail: r("customer_email"), customerName: r("customer_name"), specialInstructions: r("special_instructions"), promoCode: r("promo_code"), receiptUrl: r("receipt_url"), acceptedBy: i("accepted_by"), confirmedBy: i("confirmed_by"), adminComments: r("admin_comments"), isScheduled: m("is_scheduled"), scheduledAt: d("scheduled_at"), fulfillmentStatus: r("fulfillment_status"), dispatchedAt: d("dispatched_at"), isRescheduled: m("is_rescheduled"), originalScheduledAt: d("original_scheduled_at"), originalCreatedAt: d("original_created_at").notNull(), originalUpdatedAt: d("original_updated_at").notNull(), archivedBy: i("archived_by").references(() => b.id), archiveReason: r("archive_reason"), deletionReason: r("deletion_reason"), archivedAt: d("archived_at").defaultNow().notNull() }), zo = c("archived_order_items", { id: l("id").primaryKey(), archiveOrderId: i("archive_order_id").references(() => md.id, { onDelete: "cascade" }).notNull(), originalOrderItemId: i("original_order_item_id").notNull(), productId: i("product_id"), quantity: i("quantity").notNull(), unitPrice: g("unit_price", { precision: 10, scale: 2 }).notNull(), totalPrice: g("total_price", { precision: 10, scale: 2 }).notNull(), customizations: v("customizations"), addons: v("addons"), specialInstructions: r("special_instructions") }), Ro = c("order_items", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id), productId: i("product_id").references(() => k.id), quantity: i("quantity").notNull(), unitPrice: g("unit_price", { precision: 10, scale: 2 }).notNull(), totalPrice: g("total_price", { precision: 10, scale: 2 }).notNull(), customizations: v("customizations"), addons: v("addons"), specialInstructions: r("special_instructions") }, (e) => ({ orderIdIdx: w("idx_order_items_order_id").on(e.orderId), productIdIdx: w("idx_order_items_product_id").on(e.productId) })), fd = c("promo_codes", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), code: r("code").notNull().unique(), name: r("name").notNull(), description: r("description"), type: r("type").notNull(), value: g("value", { precision: 10, scale: 2 }).notNull(), freeItemProductId: i("free_item_product_id").references(() => k.id), itemProductId: i("item_product_id").references(() => k.id), minItemQuantity: i("min_item_quantity").default(1), conditions: v("conditions").default("{}").notNull(), usedCount: i("used_count").default(0).notNull(), isActive: m("is_active").default(true).notNull(), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }), Fo = c("promo_code_usage", { id: l("id").primaryKey(), promoCodeId: i("promo_code_id").references(() => fd.id).notNull(), userId: i("user_id").references(() => D.id), orderId: i("order_id").references(() => E.id), discountAmount: g("discount_amount", { precision: 10, scale: 2 }).notNull(), usedAt: d("used_at").defaultNow().notNull() }, (e) => ({ userIdIdx: w("idx_promo_code_usage_user_id").on(e.userId), orderIdIdx: w("idx_promo_code_usage_order_id").on(e.orderId) })), Mo = c("user_sessions", { id: l("id").primaryKey(), sessionId: r("session_id").notNull().unique(), userId: i("user_id").references(() => D.id), cartData: v("cart_data"), lastActivity: d("last_activity").defaultNow(), createdAt: d("created_at").defaultNow() }), gd = c("referrals", { id: l("id").primaryKey(), referrerId: i("referrer_id").references(() => D.id).notNull(), inviteeId: i("invitee_id").references(() => D.id).notNull(), rewardIssued: m("reward_issued").default(false), orderId: i("order_id").references(() => E.id), createdAt: d("created_at").defaultNow(), rewardIssuedAt: d("reward_issued_at"), rewardEligibleAt: d("reward_eligible_at"), rewardStatus: r("reward_status", { enum: ["pending", "eligible", "issued", "blocked"] }).default("pending") }, (e) => ({ referrerIdIdx: w("idx_referrals_referrer_id").on(e.referrerId), inviteeIdIdx: w("idx_referrals_invitee_id").on(e.inviteeId) })), Qo = c("wallet_transactions", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id).notNull(), amount: i("amount").notNull(), type: r("type", { enum: ["credit", "debit"] }).notNull(), source: r("source", { enum: ["referral", "checkout", "admin_adjustment", "refund"] }).notNull(), referralId: i("referral_id").references(() => gd.id), orderId: i("order_id").references(() => E.id), description: r("description"), createdAt: d("created_at").defaultNow() }, (e) => ({ userIdIdx: w("idx_wallet_transactions_user_id").on(e.userId) })), $o = c("order_refund_challenges", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id, { onDelete: "cascade" }).notNull(), requesterAdminId: i("requester_admin_id").references(() => b.id).notNull(), verifierAdminId: i("verifier_admin_id").references(() => b.id).notNull(), otpCodeHash: r("otp_code_hash").notNull(), attemptCount: i("attempt_count").notNull().default(0), maxAttempts: i("max_attempts").notNull().default(5), expiresAt: d("expires_at").notNull(), resendAvailableAt: d("resend_available_at").notNull(), consumedAt: d("consumed_at"), invalidatedAt: d("invalidated_at"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }), jo = c("point_activities", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id).notNull(), type: r("type", { enum: ["order", "referral", "promo", "redemption"] }).notNull(), refId: i("ref_id"), points: i("points").notNull(), description: r("description").notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ userIdIdx: w("idx_point_activities_user_id").on(e.userId) })), Go = c("scheduled_time_slots", { id: l("id").primaryKey(), outletId: i("outlet_id").references(() => U.id).notNull(), date: r("date").notNull(), timeSlot: r("time_slot").notNull(), maxOrders: i("max_orders").default(10).notNull(), currentOrders: i("current_orders").default(0).notNull(), isAvailable: m("is_available").default(true).notNull(), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("outlet_date_time_unique").on(e.outletId, e.date, e.timeSlot) })), Xo = c("outlet_notification_configs", { id: l("id").primaryKey(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull().unique(), isEnabled: m("is_enabled").default(false).notNull(), webhooks: j("webhooks").$type().default([]), slaThresholdMinutes: i("sla_threshold_minutes").default(5).notNull(), slaReminderEnabled: m("sla_reminder_enabled").default(true).notNull(), slaReminderMessage: r("sla_reminder_message").default("\u26A0\uFE0F Order has not been accepted within SLA threshold"), notifyOnOrderConfirmed: m("notify_on_order_confirmed").default(true).notNull(), notifyOnSlaBreach: m("notify_on_sla_breach").default(true).notNull(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), $ = c("outlet_chowdeck_integrations", { id: l("id").primaryKey(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull().unique(), merchantReference: r("merchant_reference").notNull().unique(), chowdeckSyncFromDate: ye("chowdeck_sync_from_date"), apiKeyEncrypted: r("api_key_encrypted").notNull(), apiKeyLast4: r("api_key_last4").notNull(), webhookTokenHash: r("webhook_token_hash").notNull(), isEnabled: m("is_enabled").default(false).notNull(), lastVerifiedAt: d("last_verified_at"), lastReconciledAt: d("last_reconciled_at"), lastInboundEventAt: d("last_inbound_event_at"), lastError: r("last_error"), createdByAdminId: i("created_by_admin_id").references(() => b.id), updatedByAdminId: i("updated_by_admin_id").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), be = c("foodelo_accounts", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull().unique(), apiKeyEncrypted: r("api_key_encrypted"), apiKeyLast4: r("api_key_last4"), webhookSecretEncrypted: r("webhook_secret_encrypted"), webhookUrl: r("webhook_url"), isEnabled: m("is_enabled").default(false).notNull(), lastVerifiedAt: d("last_verified_at"), lastReconciledAt: d("last_reconciled_at"), lastInboundEventAt: d("last_inbound_event_at"), lastError: r("last_error"), createdByAdminId: i("created_by_admin_id").references(() => b.id), updatedByAdminId: i("updated_by_admin_id").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), Ho = c("foodelo_vendor_mappings", { id: l("id").primaryKey(), foodeloAccountId: i("foodelo_account_id").references(() => be.id, { onDelete: "cascade" }).notNull(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }).notNull(), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull().unique(), foodeloVendorId: r("foodelo_vendor_id").notNull(), vendorType: r("vendor_type"), branchRole: r("branch_role"), vendorName: r("vendor_name"), branchName: r("branch_name"), accountStatus: r("account_status"), isOpen: m("is_open"), pickupEnabled: m("pickup_enabled"), operatingHours: v("operating_hours").$type(), isEnabled: m("is_enabled").default(true).notNull(), lastSyncAt: d("last_sync_at"), lastStateSyncAt: d("last_state_sync_at"), lastStateError: r("last_state_error"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ foodeloVendorUnique: N("foodelo_vendor_mappings_account_vendor_unique").on(e.foodeloAccountId, e.foodeloVendorId), foodeloBrandOutletIdx: w("idx_foodelo_vendor_mappings_brand_outlet").on(e.brandId, e.outletId) }));
c("channel_merchants", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), yumOutletId: i("yum_outlet_id").notNull().references(() => U.id), chowdeckMerchantReference: A("chowdeck_merchant_reference", { length: 100 }).notNull(), syncStatus: A("sync_status", { length: 20 }).notNull().default("active"), lastSyncedAt: d("last_synced_at"), createdAt: d("created_at").defaultNow().notNull() });
const Jo = c("channel_catalog_category_mappings", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), yumCategoryId: i("yum_category_id").notNull(), chowdeckCategoryReference: A("chowdeck_category_reference", { length: 100 }), merchantReference: A("merchant_reference", { length: 100 }).notNull(), syncStatus: A("sync_status", { length: 20 }).notNull().default("pending"), lastSyncedAt: d("last_synced_at"), lastPayloadHash: A("last_payload_hash", { length: 64 }), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }), Wo = c("channel_catalog_item_mappings", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), yumProductId: i("yum_product_id").notNull(), chowdeckMenuReference: A("chowdeck_menu_reference", { length: 100 }), merchantReference: A("merchant_reference", { length: 100 }).notNull(), syncStatus: A("sync_status", { length: 20 }).notNull().default("pending"), lastPayloadHash: A("last_payload_hash", { length: 64 }), lastSyncedAt: d("last_synced_at"), lastPushedAt: d("last_pushed_at"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() });
c("channel_order_mappings", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), yumOrderId: i("yum_order_id").notNull().references(() => E.id), chowdeckOrderReference: A("chowdeck_order_reference", { length: 100 }).notNull(), merchantReference: A("merchant_reference", { length: 100 }).notNull(), chowdeckStatus: A("chowdeck_status", { length: 50 }), normalizedYumStatus: A("normalized_yum_status", { length: 50 }), rawPayload: v("raw_payload"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() });
c("channel_delivery_mappings", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), yumOrderId: i("yum_order_id").notNull().references(() => E.id), chowdeckDeliveryReference: A("chowdeck_delivery_reference", { length: 100 }), deliveryStatus: A("delivery_status", { length: 50 }), rawPayload: v("raw_payload"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() });
const Yo = c("channel_action_logs", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), actionType: A("action_type", { length: 50 }).notNull(), entityType: A("entity_type", { length: 30 }).notNull(), entityId: A("entity_id", { length: 100 }).notNull(), outboundPayload: v("outbound_payload"), responseStatus: i("response_status"), responseBody: v("response_body"), performedByUserId: i("performed_by_user_id").references(() => b.id), idempotencyKey: A("idempotency_key", { length: 100 }), status: A("status", { length: 20 }).notNull().default("success"), errorMessage: r("error_message"), createdAt: d("created_at").defaultNow().notNull() }), Zo = c("channel_sync_events", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), eventType: A("event_type", { length: 50 }).notNull(), merchantReference: A("merchant_reference", { length: 100 }), localEntityId: A("local_entity_id", { length: 100 }), outboundPayload: v("outbound_payload"), response: v("response"), status: A("status", { length: 20 }).notNull().default("pending"), retryCount: i("retry_count").notNull().default(0), createdAt: d("created_at").defaultNow().notNull() }), es = c("channel_reconciliation_runs", { id: l("id").primaryKey(), integrationId: i("integration_id").notNull().references(() => $.id, { onDelete: "cascade" }), runType: A("run_type", { length: 30 }).notNull(), status: A("status", { length: 20 }).notNull().default("running"), mismatchCount: i("mismatch_count").notNull().default(0), fixedCount: i("fixed_count").notNull().default(0), errorCount: i("error_count").notNull().default(0), report: v("report"), startedAt: d("started_at").defaultNow().notNull(), completedAt: d("completed_at") }), ts = c("order_status_events", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id, { onDelete: "cascade" }).notNull(), fromStatus: r("from_status"), toStatus: r("to_status").notNull(), origin: r("origin").notNull(), provider: r("provider"), providerEventId: r("provider_event_id"), providerEventType: r("provider_event_type"), providerStatus: r("provider_status"), actorAdminId: i("actor_admin_id").references(() => b.id), notificationEmitted: m("notification_emitted").default(false).notNull(), metadata: v("metadata"), createdAt: d("created_at").defaultNow() }, (e) => ({ orderStatusEventLookupIdx: N("order_status_events_lookup_idx").on(e.orderId, e.origin, e.createdAt), orderStatusEventStatusIdx: w("idx_order_status_events_order_status").on(e.orderId, e.toStatus, e.id) }));
c("orderpro_sync_events", { id: l("id").primaryKey(), eventKey: r("event_key").notNull().unique(), direction: r("direction").notNull().default("yum_to_orderpro"), eventType: r("event_type").notNull(), aggregateType: r("aggregate_type").notNull(), aggregateId: r("aggregate_id").notNull(), idempotencyKey: r("idempotency_key").notNull().unique(), status: r("status").notNull().default("pending"), force: m("force").notNull().default(false), requestedBy: r("requested_by"), reason: r("reason"), payload: v("payload").notNull().default(M`'{}'::jsonb`), responsePayload: v("response_payload"), attemptCount: i("attempt_count").notNull().default(0), maxAttempts: i("max_attempts").notNull().default(8), nextAttemptAt: d("next_attempt_at").notNull().defaultNow(), processingStartedAt: d("processing_started_at"), processedAt: d("processed_at"), lastError: r("last_error"), lastErrorCode: r("last_error_code"), lastErrorStatus: i("last_error_status"), requestId: r("request_id"), upstreamRequestId: r("upstream_request_id"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ statusNextAttemptIdx: w("orderpro_sync_events_status_next_attempt_idx").on(e.status, e.nextAttemptAt, e.id) }));
c("webhook_events", { id: l("id").primaryKey(), eventId: A("event_id", { length: 255 }).notNull(), eventType: A("event_type", { length: 100 }).notNull(), source: A("source", { length: 50 }).notNull().default("orderpro"), payload: v("payload").notNull(), signature: A("signature", { length: 255 }).notNull(), sourceIp: r("source_ip"), processedAt: d("processed_at"), processingStartedAt: d("processing_started_at"), nextRetryAt: d("next_retry_at").notNull().defaultNow(), deadLetteredAt: d("dead_lettered_at"), status: A("status", { length: 20 }).notNull().default("pending"), retryCount: i("retry_count").notNull().default(0), deliveryCount: i("delivery_count").notNull().default(1), errorMessage: r("error_message"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ sourceEventUnique: N("webhook_events_source_event_unique").on(e.source, e.eventId), eventIdIdx: w("idx_webhook_events_event_id").on(e.eventId), statusIdx: w("idx_webhook_events_status").on(e.status), createdAtIdx: w("idx_webhook_events_created_at").on(e.createdAt), eventTypeIdx: w("idx_webhook_events_event_type").on(e.eventType), sourceStatusRetryIdx: w("idx_webhook_events_source_status_retry").on(e.source, e.status, e.nextRetryAt, e.id) }));
c("webhook_rate_limits", { id: l("id").primaryKey(), sourceIp: r("source_ip").notNull(), windowStart: d("window_start").notNull(), requestCount: i("request_count").default(1), createdAt: d("created_at").defaultNow() }, (e) => ({ sourceWindowUnique: N("webhook_rate_limits_source_window_unique").on(e.sourceIp, e.windowStart), sourceIpIdx: w("idx_webhook_rate_limits_source_ip").on(e.sourceIp), windowStartIdx: w("idx_webhook_rate_limits_window_start").on(e.windowStart) }));
const rs = c("lead_statuses", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id, { onDelete: "cascade" }), orderId: i("order_id").references(() => E.id, { onDelete: "cascade" }), entityType: r("entity_type", { enum: ["user", "order"] }).notNull(), status: r("status", { enum: ["pending_call", "no_answer", "interested", "not_interested", "callback_requested", "converted", "do_not_call"] }).notNull().default("pending_call"), notes: r("notes"), assignedToSales: i("assigned_to_sales").references(() => b.id), updatedBy: i("updated_by").references(() => b.id), lastContactedAt: d("last_contacted_at"), nextFollowUpAt: d("next_follow_up_at"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), ns = c("reviews", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id), orderId: i("order_id").references(() => E.id).notNull(), userId: i("user_id").references(() => D.id).notNull(), productId: i("product_id").references(() => k.id).notNull(), rating: i("rating").notNull(), reviewText: r("review_text"), isVerified: m("is_verified").default(true), adminResponse: r("admin_response"), sentiment: r("sentiment", { enum: ["good", "bad"] }), source: r("source", { enum: ["tracking_page", "email_review_link", "admin_created"] }).default("tracking_page"), reviewRequestId: i("review_request_id"), tags: v("tags").$type(), moderationStatus: r("moderation_status", { enum: ["visible", "hidden", "flagged"] }).default("visible"), adminRespondedAt: d("admin_responded_at"), adminRespondedBy: i("admin_responded_by").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ unique: N("user_product_order_review_unique").on(e.userId, e.productId, e.orderId) })), is = c("order_ratings", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id, { onDelete: "cascade" }).notNull(), userId: i("user_id").references(() => D.id, { onDelete: "cascade" }).notNull(), riderRating: i("rider_rating"), riderComment: r("rider_comment"), serviceRating: i("service_rating"), serviceComment: r("service_comment"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueOrderUser: N("order_ratings_order_user_unique").on(e.orderId, e.userId) })), yd = c("review_requests", { id: l("id").primaryKey(), orderId: i("order_id").references(() => E.id).notNull(), customerId: i("customer_id").references(() => D.id), outletId: i("outlet_id").references(() => U.id), csrId: i("csr_id").references(() => b.id), riderId: i("rider_id").references(() => oe.id), email: r("email"), phone: r("phone"), token: r("token").notNull().unique(), status: r("status", { enum: ["pending", "scheduled", "sent", "opened", "clicked", "completed", "expired", "failed", "cancelled"] }).notNull().default("pending"), scheduledAt: d("scheduled_at"), sentAt: d("sent_at"), openedAt: d("opened_at"), clickedAt: d("clicked_at"), completedAt: d("completed_at"), expiresAt: d("expires_at"), lastReminderSentAt: d("last_reminder_sent_at"), reminderCount: i("reminder_count").notNull().default(0), failureReason: r("failure_reason"), retryCount: i("retry_count").notNull().default(0), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueOrder: N("review_requests_order_id_unique").on(e.orderId) })), as = c("review_category_ratings", { id: l("id").primaryKey(), reviewRequestId: i("review_request_id").references(() => yd.id).notNull(), orderId: i("order_id").references(() => E.id).notNull(), customerId: i("customer_id").references(() => D.id), outletId: i("outlet_id").references(() => U.id), category: r("category", { enum: ["food_quality", "csr_performance", "delivery_rider_service"] }).notNull(), sentiment: r("sentiment", { enum: ["good", "bad"] }).notNull(), rating: i("rating"), comment: r("comment"), tags: v("tags").$type(), entityId: i("entity_id"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ uniqueCategoryPerRequest: N("review_cat_rating_unique").on(e.reviewRequestId, e.category) })), we = c("partners", { id: l("id").primaryKey(), name: r("name").notNull(), slug: r("slug").notNull().unique(), email: r("email"), phone: r("phone"), contactPerson: r("contact_person"), commissionRate: g("commission_rate", { precision: 5, scale: 2 }).notNull().default("0.00"), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), ds = c("partner_visits", { id: l("id").primaryKey(), partnerId: i("partner_id").references(() => we.id).notNull(), ipAddress: r("ip_address"), userAgent: r("user_agent"), referrer: r("referrer"), sessionId: r("session_id"), userId: i("user_id").references(() => D.id), createdAt: d("created_at").defaultNow() }), os = c("partner_orders", { id: l("id").primaryKey(), partnerId: i("partner_id").references(() => we.id).notNull(), orderId: i("order_id").references(() => E.id).notNull(), orderTotal: i("order_total").notNull(), commissionRate: g("commission_rate", { precision: 5, scale: 2 }).notNull(), commissionAmount: i("commission_amount").notNull(), status: r("status", { enum: ["pending", "confirmed", "paid"] }).default("pending"), createdAt: d("created_at").defaultNow() }, (e) => ({ unique: N("partner_order_unique").on(e.partnerId, e.orderId) })), ss = c("performance_metrics_config", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }), metricKey: r("metric_key").notNull(), metricName: r("metric_name").notNull(), description: r("description"), weight: g("weight", { precision: 5, scale: 2 }).notNull().default("0"), minThreshold: g("min_threshold", { precision: 10, scale: 2 }), criticalThreshold: g("critical_threshold", { precision: 10, scale: 2 }), isInverse: m("is_inverse").default(false), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ unique: N("perf_metrics_config_unique").on(e.brandId, e.metricKey) })), us = c("outlet_performance_scores", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull(), scoreDate: d("score_date").notNull(), periodType: r("period_type").notNull().default("daily"), overallScore: g("overall_score", { precision: 5, scale: 2 }).notNull(), scoreGrade: r("score_grade"), productDowntimeScore: g("product_downtime_score", { precision: 5, scale: 2 }), productDowntimeHours: g("product_downtime_hours", { precision: 10, scale: 2 }), bestsellerDowntimeHours: g("bestseller_downtime_hours", { precision: 10, scale: 2 }), fulfillmentSpeedScore: g("fulfillment_speed_score", { precision: 5, scale: 2 }), avgFulfillmentMinutes: g("avg_fulfillment_minutes", { precision: 10, scale: 2 }), stockConsistencyScore: g("stock_consistency_score", { precision: 5, scale: 2 }), stockoutCount: i("stockout_count"), customerRatingsScore: g("customer_ratings_score", { precision: 5, scale: 2 }), avgCustomerRating: g("avg_customer_rating", { precision: 3, scale: 2 }), totalReviews: i("total_reviews"), cancelledOrderScore: g("cancelled_order_score", { precision: 5, scale: 2 }), cancelledOrderRate: g("cancelled_order_rate", { precision: 5, scale: 2 }), cancelledOrderCount: i("cancelled_order_count"), totalOrders: i("total_orders"), salesVolumeScore: g("sales_volume_score", { precision: 5, scale: 2 }), totalRevenue: g("total_revenue", { precision: 12, scale: 2 }), orderCount: i("order_count"), calculatedAt: d("calculated_at").defaultNow(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ unique: N("outlet_perf_score_unique").on(e.outletId, e.scoreDate, e.periodType) })), ls = c("outlet_performance_alerts", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "cascade" }), outletId: i("outlet_id").references(() => U.id, { onDelete: "cascade" }).notNull(), alertType: r("alert_type").notNull(), severity: r("severity").notNull().default("warning"), metricKey: r("metric_key"), metricValue: g("metric_value", { precision: 10, scale: 2 }), thresholdValue: g("threshold_value", { precision: 10, scale: 2 }), message: r("message").notNull(), isResolved: m("is_resolved").default(false), resolvedAt: d("resolved_at"), resolvedBy: i("resolved_by").references(() => b.id), resolutionNotes: r("resolution_notes"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() });
_(go).omit({ id: true, createdAt: true });
_(fo).omit({ id: true, createdAt: true });
_(rs).omit({ id: true, createdAt: true, updatedAt: true });
_(is).omit({ id: true, createdAt: true, updatedAt: true }).extend({ riderRating: y.number().min(1).max(5).optional(), serviceRating: y.number().min(1).max(5).optional(), riderComment: y.string().max(500).nullable().optional(), serviceComment: y.string().max(500).nullable().optional() });
_(ns).omit({ id: true, createdAt: true, updatedAt: true }).extend({ rating: y.number().min(1).max(5), reviewText: y.string().nullable().optional(), brandId: y.number().optional() });
_(yd).omit({ id: true, createdAt: true, updatedAt: true, token: true });
_(as).omit({ id: true, createdAt: true, updatedAt: true }).extend({ category: y.enum(["food_quality", "csr_performance", "delivery_rider_service"]), sentiment: y.enum(["good", "bad"]), rating: y.number().min(1).max(5).optional(), comment: y.string().max(1e3).optional(), tags: y.array(y.string()).optional() });
y.object({ token: y.string().min(1), ratings: y.array(y.object({ category: y.enum(["food_quality", "csr_performance", "delivery_rider_service"]), sentiment: y.enum(["good", "bad"]), rating: y.number().min(1).max(5).optional(), comment: y.string().max(1e3).optional(), tags: y.array(y.string()).max(10).optional() })).min(1).max(3) });
_(D).omit({ id: true, createdAt: true }).extend({ phone: y.string().min(1).optional(), brandId: y.number().optional() });
_(q).omit({ id: true, createdAt: true, updatedAt: true });
const xs = _(U).omit({ id: true, createdAt: true }).extend({ brandId: y.number().optional() });
_(Io).omit({ id: true, createdAt: true });
_(Ao).omit({ id: true, createdAt: true, updatedAt: true });
_(bo).omit({ id: true, createdAt: true }).extend({ brandId: y.number().optional() });
_(od).omit({ id: true, createdAt: true });
_(wo).omit({ id: true, createdAt: true });
const Ps = _(he).omit({ id: true }).extend({ brandId: y.number().optional() }), Ts = _(k).omit({ id: true, createdAt: true }).extend({ brandId: y.number().optional(), bulkServingOptions: y.array(y.object({ size: y.string().min(1), feeds: y.string().min(1), price: y.number().positive() })).optional(), categoryIds: y.array(y.number()).optional() });
_(xo).omit({ id: true, createdAt: true });
_(vo).omit({ id: true, createdAt: true, updatedAt: true });
_(So).omit({ id: true, createdAt: true, updatedAt: true });
_(Ae).omit({ id: true });
_(Po).omit({ id: true, createdAt: true });
_(sd).omit({ id: true, createdAt: true, updatedAt: true });
_(To).omit({ id: true, createdAt: true, updatedAt: true });
_(ud).omit({ id: true, createdAt: true, updatedAt: true });
_(qo).omit({ id: true, createdAt: true, updatedAt: true });
_(Ie).omit({ id: true, createdAt: true, updatedAt: true });
_(Co).omit({ id: true, createdAt: true, updatedAt: true });
_(Do).omit({ id: true, createdAt: true });
_(de).omit({ id: true, createdAt: true, updatedAt: true });
_(ld).omit({ id: true, createdAt: true, updatedAt: true });
_(Bo).omit({ id: true, createdAt: true, updatedAt: true });
_(Ko).omit({ id: true, createdAt: true });
_(cd).omit({ id: true, createdAt: true, updatedAt: true });
_(Lo).omit({ id: true, createdAt: true });
_(Oo).omit({ id: true, createdAt: true, updatedAt: true });
_(ko).omit({ id: true }).extend({ brandId: y.number().optional() });
_(Uo).omit({ id: true, createdAt: true, updatedAt: true }).extend({ brandId: y.number().optional() });
_(E).omit({ id: true, createdAt: true, updatedAt: true }).extend({ brandId: y.number().optional() });
_(oe).omit({ id: true, createdAt: true, updatedAt: true });
_(_d).omit({ id: true, createdAt: true, updatedAt: true });
_(se).omit({ id: true, createdAt: true, updatedAt: true });
_(pd).omit({ id: true, createdAt: true, updatedAt: true });
_(Eo).omit({ id: true, createdAt: true, updatedAt: true });
_(Vo).omit({ id: true, createdAt: true });
_(Ro).omit({ id: true });
_(md).omit({ id: true, archivedAt: true });
_(zo).omit({ id: true });
_(fd).omit({ id: true, createdAt: true, updatedAt: true }).extend({ brandId: y.number().optional() });
_(Fo).omit({ id: true, usedAt: true });
_(Mo).omit({ id: true, createdAt: true });
_(yo).omit({ id: true, createdAt: true, updatedAt: true });
_(b).omit({ id: true, createdAt: true, deletedAt: true, lastLoginAt: true });
_(No).omit({ id: true, createdAt: true });
_(gd).omit({ id: true, createdAt: true, rewardIssuedAt: true });
_(Qo).omit({ id: true, createdAt: true });
_($o).omit({ id: true, createdAt: true, updatedAt: true });
_(jo).omit({ id: true, createdAt: true });
_(Go).omit({ id: true, createdAt: true });
_(Xo).omit({ id: true, createdAt: true, updatedAt: true });
_($).omit({ id: true, createdAt: true, updatedAt: true, apiKeyLast4: true, webhookTokenHash: true, lastVerifiedAt: true, lastReconciledAt: true, lastInboundEventAt: true, lastError: true });
_(be).omit({ id: true, createdAt: true, updatedAt: true, apiKeyLast4: true, webhookSecretEncrypted: true, lastVerifiedAt: true, lastReconciledAt: true, lastInboundEventAt: true, lastError: true });
_(Ho).omit({ id: true, createdAt: true, updatedAt: true, lastSyncAt: true, lastStateSyncAt: true, lastStateError: true });
_(Yo).omit({ id: true, createdAt: true });
_(Zo).omit({ id: true, createdAt: true });
_(es).omit({ id: true, startedAt: true, completedAt: true });
_(Jo).omit({ id: true, createdAt: true, updatedAt: true });
_(Wo).omit({ id: true, createdAt: true, updatedAt: true });
_(ts).omit({ id: true, createdAt: true });
_(ho).omit({ id: true, createdAt: true, updatedAt: true });
const cs = c("campaign_tracking", { id: l("id").primaryKey(), sessionId: r("session_id").notNull(), userId: i("user_id").references(() => D.id), campaign: r("campaign").notNull(), action: r("action").notNull(), source: r("source"), medium: r("medium"), term: r("term"), content: r("content"), referrer: r("referrer"), userAgent: r("user_agent"), ipAddress: r("ip_address"), url: r("url"), metadata: v("metadata"), timestamp: d("timestamp").defaultNow() }), _s = c("settings", { id: l("id").primaryKey(), key: r("key").notNull().unique(), value: r("value").notNull(), description: r("description"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() });
_(cs).omit({ id: true, timestamp: true });
_(_s).omit({ id: true, createdAt: true, updatedAt: true });
const Nd = c("campaigns", { id: l("id").primaryKey(), name: r("name").notNull(), description: r("description"), channel: r("channel").notNull(), status: r("status").notNull().default("draft"), brandScope: r("brand_scope").notNull().default("all"), targetBrandIds: j("target_brand_ids").$type(), outletScope: r("outlet_scope").notNull().default("all"), targetOutletIds: j("target_outlet_ids").$type(), audienceFilters: v("audience_filters").$type(), subject: r("subject"), preheader: r("preheader"), headline: r("headline"), content: r("content"), htmlContent: r("html_content"), imageUrl: r("image_url"), ctaLabel: r("cta_label"), ctaLink: r("cta_link"), socialLinks: v("social_links").$type(), pushTitle: r("push_title"), pushDeepLink: r("push_deep_link"), scheduledAt: d("scheduled_at"), sentAt: d("sent_at"), completedAt: d("completed_at"), totalMatched: i("total_matched").default(0), totalEligible: i("total_eligible").default(0), totalExcluded: i("total_excluded").default(0), totalSent: i("total_sent").default(0), totalDelivered: i("total_delivered").default(0), totalFailed: i("total_failed").default(0), totalOpened: i("total_opened").default(0), totalClicked: i("total_clicked").default(0), exclusionReasons: v("exclusion_reasons").$type(), createdBy: i("created_by").references(() => b.id), sentBy: i("sent_by").references(() => b.id), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), ps = c("campaign_recipients", { id: l("id").primaryKey(), campaignId: i("campaign_id").references(() => Nd.id, { onDelete: "cascade" }).notNull(), userId: i("user_id").references(() => D.id), channel: r("channel").notNull(), contact: r("contact").notNull(), customerName: r("customer_name"), status: r("status").notNull().default("pending"), sentAt: d("sent_at"), deliveredAt: d("delivered_at"), openedAt: d("opened_at"), clickedAt: d("clicked_at"), errorMessage: r("error_message"), retryCount: i("retry_count").default(0), providerMessageId: r("provider_message_id"), createdAt: d("created_at").defaultNow() }), hd = c("campaign_segments", { id: l("id").primaryKey(), name: r("name").notNull(), description: r("description"), audienceFilters: v("audience_filters").$type(), createdBy: i("created_by").references(() => b.id), isActive: m("is_active").default(true), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() });
_(Nd).omit({ id: true, createdAt: true, updatedAt: true, totalMatched: true, totalEligible: true, totalExcluded: true, totalSent: true, totalDelivered: true, totalFailed: true, totalOpened: true, totalClicked: true, sentAt: true, completedAt: true });
_(ps).omit({ id: true, createdAt: true, sentAt: true, deliveredAt: true, openedAt: true, clickedAt: true, retryCount: true });
_(hd).omit({ id: true, createdAt: true, updatedAt: true });
_(we).omit({ id: true, createdAt: true, updatedAt: true });
_(ds).omit({ id: true, createdAt: true });
_(os).omit({ id: true, createdAt: true });
_(ss).omit({ id: true, createdAt: true, updatedAt: true });
_(us).omit({ id: true, createdAt: true, updatedAt: true, calculatedAt: true });
_(ls).omit({ id: true, createdAt: true, updatedAt: true });
const ms = c("push_subscriptions", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id, { onDelete: "cascade" }), brandId: i("brand_id").references(() => q.id), endpoint: r("endpoint").notNull().unique(), p256dhKey: r("p256dh_key").notNull(), authKey: r("auth_key").notNull(), deviceType: r("device_type").default("web"), userAgent: r("user_agent"), isActive: m("is_active").default(true), lastUsedAt: d("last_used_at"), subscribedAt: d("subscribed_at").defaultNow(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), fs = c("push_notification_logs", { id: l("id").primaryKey(), title: r("title").notNull(), body: r("body").notNull(), url: r("url"), imageUrl: r("image_url"), targetingMode: r("targeting_mode").notNull(), targetBrandId: i("target_brand_id").references(() => q.id), targetOutletId: i("target_outlet_id").references(() => U.id), targetSegmentId: i("target_segment_id").references(() => hd.id), targetUserIds: v("target_user_ids").$type(), recipientCount: i("recipient_count").default(0), deliveredCount: i("delivered_count").default(0), failedCount: i("failed_count").default(0), clickedCount: i("clicked_count").default(0), status: r("status").notNull().default("pending"), errorMessage: r("error_message"), sentBy: i("sent_by").references(() => b.id), sentAt: d("sent_at"), completedAt: d("completed_at"), createdAt: d("created_at").defaultNow() }), gs = c("admin_push_subscriptions", { id: l("id").primaryKey(), adminUserId: i("admin_user_id").references(() => b.id, { onDelete: "cascade" }).notNull(), brandId: i("brand_id").references(() => q.id), endpoint: r("endpoint").notNull().unique(), p256dhKey: r("p256dh_key").notNull(), authKey: r("auth_key").notNull(), deviceType: r("device_type").default("web"), userAgent: r("user_agent"), isActive: m("is_active").default(true), lastUsedAt: d("last_used_at"), subscribedAt: d("subscribed_at").defaultNow(), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }), ys = c("notification_preferences", { id: l("id").primaryKey(), userId: i("user_id").references(() => D.id, { onDelete: "cascade" }), adminUserId: i("admin_user_id").references(() => b.id, { onDelete: "cascade" }), eventType: r("event_type").notNull(), channel: r("channel").notNull(), enabled: m("enabled").default(true).notNull(), soundProfile: r("sound_profile"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ userEventChannel: N("notif_pref_user_event_channel").on(e.userId, e.eventType, e.channel).where(M`${e.userId} IS NOT NULL`), adminEventChannel: N("notif_pref_admin_event_channel").on(e.adminUserId, e.eventType, e.channel).where(M`${e.adminUserId} IS NOT NULL`) }));
_(ms).omit({ id: true, createdAt: true, updatedAt: true, subscribedAt: true, lastUsedAt: true });
_(fs).omit({ id: true, createdAt: true, sentAt: true, completedAt: true });
_(gs).omit({ id: true, createdAt: true, updatedAt: true, subscribedAt: true, lastUsedAt: true });
_(ys).omit({ id: true, createdAt: true, updatedAt: true });
const Ns = c("email_logs", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id, { onDelete: "set null" }), emailType: r("email_type").notNull(), triggerSource: r("trigger_source").notNull(), recipientEmail: r("recipient_email").notNull(), recipientName: r("recipient_name"), ccEmails: j("cc_emails").$type(), bccEmails: j("bcc_emails").$type(), subject: r("subject").notNull(), fromAddress: r("from_address"), orderId: i("order_id"), orderNumber: r("order_number"), campaignId: i("campaign_id"), userId: i("user_id"), adminUserId: i("admin_user_id"), status: r("status").notNull().default("sent"), provider: r("provider"), messageId: r("message_id"), idempotencyKey: r("idempotency_key"), failureReason: r("failure_reason"), providerEvent: r("provider_event"), deliveredAt: d("delivered_at"), openedAt: d("opened_at"), openCount: i("open_count").notNull().default(0), lastEventAt: d("last_event_at"), metadata: v("metadata"), sentAt: d("sent_at").defaultNow(), createdAt: d("created_at").defaultNow() }, (e) => ({ brandIdIdx: w("idx_email_logs_brand_id").on(e.brandId), emailTypeIdx: w("idx_email_logs_email_type").on(e.emailType), statusIdx: w("idx_email_logs_status").on(e.status), sentAtIdx: w("idx_email_logs_sent_at").on(e.sentAt), recipientIdx: w("idx_email_logs_recipient").on(e.recipientEmail), messageIdIdx: w("idx_email_logs_message_id").on(e.messageId), idempotencyKeyIdx: N("idx_email_logs_idempotency_key").on(e.idempotencyKey) }));
_(Ns).omit({ id: true, createdAt: true });
const hs = c("email_suppressions", { id: l("id").primaryKey(), email: r("email").notNull(), reason: r("reason").notNull().default("auto_flagged"), source: r("source"), active: m("active").notNull().default(true), failureCount: i("failure_count").notNull().default(1), lastEmailType: r("last_email_type"), lastFailureReason: r("last_failure_reason"), providerEvent: r("provider_event"), notes: r("notes"), flaggedByAdminId: i("flagged_by_admin_id"), unflaggedByAdminId: i("unflagged_by_admin_id"), metadata: v("metadata"), firstFlaggedAt: d("first_flagged_at").defaultNow(), lastFailedAt: d("last_failed_at").defaultNow(), unflaggedAt: d("unflagged_at"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ emailUnique: N("idx_email_suppressions_email").on(e.email), activeIdx: w("idx_email_suppressions_active").on(e.active), reasonIdx: w("idx_email_suppressions_reason").on(e.reason) }));
_(hs).omit({ id: true, createdAt: true, updatedAt: true });
const As = c("cc_recipient_optouts", { id: l("id").primaryKey(), email: r("email").notNull(), adminUserId: i("admin_user_id"), name: r("name"), scope: r("scope").notNull().default("all"), active: m("active").notNull().default(true), reason: r("reason"), optedOutByAdminId: i("opted_out_by_admin_id"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ emailScopeUnique: N("idx_cc_optouts_email_scope").on(e.email, e.scope), activeIdx: w("idx_cc_optouts_active").on(e.active) }));
_(As).omit({ id: true, createdAt: true, updatedAt: true });
const Is = c("email_type_settings", { id: l("id").primaryKey(), emailType: r("email_type").notNull(), enabled: m("enabled").notNull().default(true), updatedByAdminId: i("updated_by_admin_id"), createdAt: d("created_at").defaultNow(), updatedAt: d("updated_at").defaultNow() }, (e) => ({ emailTypeUnique: N("idx_email_type_settings_type").on(e.emailType) }));
_(Is).omit({ id: true, createdAt: true, updatedAt: true });
const ue = c("spin_campaigns", { id: l("id").primaryKey(), brandId: i("brand_id").references(() => q.id).notNull(), name: r("name").notNull(), description: r("description"), minCartValueKobo: i("min_cart_value_kobo").notNull().default(5e5), maxSpinsPerUser: i("max_spins_per_user").notNull().default(1), spinResetHours: i("spin_reset_hours"), spinResetOrderCount: i("spin_reset_order_count"), isActive: m("is_active").default(true).notNull(), startDate: d("start_date").notNull(), endDate: d("end_date").notNull(), bannerIsActive: m("banner_is_active").default(false).notNull(), bannerTitle: r("banner_title"), bannerSubtitle: r("banner_subtitle"), bannerImageUrl: r("banner_image_url"), bannerMobileImageUrl: r("banner_mobile_image_url"), createdAt: d("created_at").defaultNow().notNull(), updatedAt: d("updated_at").defaultNow().notNull() }), Ad = c("spin_prizes", { id: l("id").primaryKey(), campaignId: i("campaign_id").references(() => ue.id, { onDelete: "cascade" }).notNull(), name: r("name").notNull(), description: r("description"), imageUrl: r("image_url"), sliceColor: r("slice_color").notNull().default("#FFFFFF"), textColor: r("text_color").notNull().default("#000000"), prizeType: r("prize_type").notNull(), productId: i("product_id").references(() => k.id), rewardValue: i("reward_value"), fulfillmentAction: r("fulfillment_action").notNull().default("issue_voucher_future"), probabilityWeight: i("probability_weight").notNull().default(10), totalStock: i("total_stock"), remainingStock: i("remaining_stock"), sortOrder: i("sort_order").default(0), createdAt: d("created_at").defaultNow().notNull() }), Id = c("spin_records", { id: l("id").primaryKey(), campaignId: i("campaign_id").references(() => ue.id).notNull(), userId: i("user_id").references(() => D.id).notNull(), orderId: i("order_id").references(() => E.id), prizeId: i("prize_id").references(() => Ad.id).notNull(), claimedStatus: r("claimed_status").notNull().default("pending"), ipAddress: r("ip_address").notNull(), deviceId: r("device_id").notNull(), spinDate: d("spin_date").defaultNow().notNull() }), bs = c("voucher_records", { id: l("id").primaryKey(), voucherCode: r("voucher_code").notNull().unique(), rewardType: r("reward_type").notNull(), userId: i("user_id").references(() => D.id).notNull(), issueDate: d("issue_date").defaultNow().notNull(), expiryDate: d("expiry_date").notNull(), redemptionStatus: r("redemption_status").notNull().default("active"), redeemedOrderId: i("redeemed_order_id").references(() => E.id) }), ws = c("raffle_records", { id: l("id").primaryKey(), ticketNumber: r("ticket_number").notNull().unique(), customerId: i("customer_id").references(() => D.id).notNull(), campaignId: i("campaign_id").references(() => ue.id), spinRecordId: i("spin_record_id").references(() => Id.id), orderId: i("order_id").references(() => E.id), generatedDate: d("generated_date").defaultNow().notNull() });
_(ue).omit({ id: true, createdAt: true, updatedAt: true });
_(Ad).omit({ id: true, createdAt: true });
_(Id).omit({ id: true, spinDate: true });
_(bs).omit({ id: true, issueDate: true });
_(ws).omit({ id: true, generatedDate: true });
export { Ps as a, Ts as b, xs as i };
