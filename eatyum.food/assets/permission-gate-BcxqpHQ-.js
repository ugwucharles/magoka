import { Y as f, a1 as g, j as s } from "./index-DOfu0sXg.js";
import { h as u } from "./admin-layout-DH7sAIhq.js";
function A({ permission: t, children: n, fallback: i = null, className: r }) {
  const { admin: e, isLoading: a } = f(), { permissions: o, isLoading: m } = g();
  return a ? null : e ? m ? u(e.role, t) ? r ? s.jsx("div", { className: r, children: n }) : s.jsx(s.Fragment, { children: n }) : i : (o && Object.keys(o).length > 0 ? !!o[t] : u(e.role, t)) ? r ? s.jsx("div", { className: r, children: n }) : s.jsx(s.Fragment, { children: n }) : i : i;
}
export { A as P };
