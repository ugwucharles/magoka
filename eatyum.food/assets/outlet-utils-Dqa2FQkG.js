function T(e) {
  if (Array.isArray(e)) return e.filter((n) => typeof n == "string");
  if (typeof e == "string") {
    const n = e.trim();
    if (!n) return [];
    if (n.startsWith("[")) try {
      const t = JSON.parse(n);
      if (Array.isArray(t)) return t.filter((o) => typeof o == "string");
    } catch (e2) {
    }
    return n.split(",").map((t) => t.trim()).filter(Boolean);
  }
  return [];
}
function D(e) {
  if (!e.isActive) return false;
  const n = T(e.daysOpen);
  if (!e.openTime || !e.closeTime || n.length === 0) return true;
  const t = /* @__PURE__ */ new Date(), o = 1 * 60, y = t.getTime() + t.getTimezoneOffset() * 6e4, s = new Date(y + o * 6e4), c = s.toLocaleDateString("en-US", {
    weekday: "long"
  }).toLowerCase().trim();
  if (!n.map((g) => g.toLowerCase().trim()).includes(c)) return false;
  const [m, u] = e.openTime.split(":").map(Number), [f, p] = e.closeTime.split(":").map(Number);
  if (Number.isNaN(m) || Number.isNaN(u) || Number.isNaN(f) || Number.isNaN(p)) return true;
  const i = s.getHours() * 60 + s.getMinutes(), r = m * 60 + u, a = f * 60 + p;
  return a < r ? i >= r || i < a : i >= r && i < a;
}
function O(e) {
  const n = T(e.daysOpen);
  if (!e.openTime || n.length === 0) return null;
  const t = /* @__PURE__ */ new Date(), o = 1 * 60, y = t.getTime() + t.getTimezoneOffset() * 6e4, s = new Date(y + o * 6e4), c = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"], d = s.getDay(), [m, u] = e.openTime.split(":").map(Number), f = s.getHours() * 60 + s.getMinutes(), p = m * 60 + u, i = c[d];
  if (n.includes(i) && f < p) return `Today at ${e.openTime}`;
  for (let r = 1; r <= 7; r++) {
    const a = (d + r) % 7, g = c[a];
    if (n.includes(g)) {
      const l = r;
      if (l === 1) return `Tomorrow at ${e.openTime}`;
      {
        const N = new Date(t);
        return N.setDate(t.getDate() + l), `${N.toLocaleDateString("en-US", { weekday: "long" })} at ${e.openTime}`;
      }
    }
  }
  return null;
}
export {
  O as g,
  D as i
};
