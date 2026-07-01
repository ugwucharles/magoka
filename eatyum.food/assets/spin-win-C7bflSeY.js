import { r as n, j as t, b1 as s } from "./index-DOfu0sXg.js";
const r = () => `${s() || ""}/?open-spin=true`;
function i() {
  const e = r();
  return n.useEffect(() => {
    window.location.replace(e);
  }, [e]), t.jsxs("div", { className: "min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center", children: [t.jsx("div", { className: "animate-spin rounded-full h-10 w-10 border-4 border-slate-200 border-t-[#F02819]" }), t.jsx("p", { className: "text-slate-600 text-sm mt-4", children: "Opening Spin & Win..." }), t.jsx("a", { href: e, className: "text-[#F02819] text-sm font-semibold mt-3", children: "Continue to Spin & Win" })] });
}
export { i as default };
