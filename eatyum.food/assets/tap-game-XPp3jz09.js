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
import { r as t, c as H, j as e, L as w, B as c, E as o, F as d, H as v, I as k } from "./index-DOfu0sXg.js";
import { A as I } from "./arrow-left-CK7JF7w9.js";
import { T as M } from "./target-B9hXFhRn.js";
import { T as $ } from "./timer-DMHaMGok.js";
import { T as B } from "./trophy-COGTR2GG.js";
const P = "/assets/puffy_1752366639036-BYEFGijI.png";
function J() {
  const [a, h] = t.useState("idle"), [l, p] = t.useState(0), [g, j] = t.useState(15), [S, x] = t.useState([]), [Y, N] = t.useState(false), [F, A] = t.useState(false), u = t.useRef(null), i = t.useRef(), { toast: f } = H();
  t.useEffect(() => {
    const s = new Image();
    s.onload = () => A(true), s.src = P;
  }, []);
  const b = 15, m = 5, R = 0.02, G = 2, L = t.useCallback(() => {
    h("playing"), p(0), j(b), x([]), N(false);
  }, []), T = t.useCallback(() => {
    i.current && cancelAnimationFrame(i.current), l >= m ? (h("won"), N(true), f({ title: "\u{1F389} You Won!", description: "Congratulations! You've earned a free puff puff with your next order!", duration: 5e3 })) : h("lost");
  }, [l, f]), C = t.useCallback(() => {
    h("idle"), p(0), j(b), x([]), N(false), i.current && cancelAnimationFrame(i.current);
  }, []), E = t.useCallback(() => {
    if (!u.current) return;
    const s = u.current.getBoundingClientRect(), r = 50 + Math.random() * 25, n = { id: Date.now() + Math.random(), x: Math.random() * (s.width - r), y: -r, speed: G + Math.random() * 2, size: r };
    x((z) => [...z, n]);
  }, []), U = t.useCallback((s) => {
    x((r) => r.filter((n) => n.id !== s)), p((r) => r + 1), f({ title: "Nice tap! \u{1F973}", description: `Score: ${l + 1}`, duration: 1e3 });
  }, [l, f]), y = t.useCallback(() => {
    a === "playing" && (Math.random() < R && E(), x((s) => {
      if (!u.current) return s;
      const r = u.current.clientHeight;
      return s.map((n) => __spreadProps(__spreadValues({}, n), { y: n.y + n.speed })).filter((n) => n.y < r + n.size);
    }), i.current = requestAnimationFrame(y));
  }, [a, E]);
  return t.useEffect(() => {
    if (a === "playing" && g > 0) {
      const s = setTimeout(() => {
        j((r) => r - 1);
      }, 1e3);
      return () => clearTimeout(s);
    } else a === "playing" && g === 0 && T();
  }, [a, g, T]), t.useEffect(() => (a === "playing" && (i.current = requestAnimationFrame(y)), () => {
    i.current && cancelAnimationFrame(i.current);
  }), [a, y]), e.jsx("div", { className: "min-h-screen bg-gradient-to-br from-rgb(240, 40, 25, 0.1) to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20", children: e.jsxs("div", { className: "container mx-auto px-4 py-8", children: [e.jsxs("div", { className: "flex items-center justify-between mb-8", children: [e.jsx(w, { href: "/", children: e.jsxs(c, { variant: "ghost", size: "sm", children: [e.jsx(I, { className: "w-4 h-4 mr-2" }), "Back to Home"] }) }), e.jsx("h1", { className: "text-3xl font-bold text-center yum-text-primary", children: "\u{1F96F} Tap for Puff Puff \u{1F96F}" }), e.jsx("div", { className: "w-20" }), " "] }), e.jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6 max-w-md mx-auto", children: [e.jsx(o, { children: e.jsxs(d, { className: "p-4 text-center", children: [e.jsx(M, { className: "w-6 h-6 mx-auto mb-2 text-#F02819" }), e.jsx("div", { className: "text-2xl font-bold", children: l }), e.jsx("div", { className: "text-sm text-gray-600", children: "Score" })] }) }), e.jsx(o, { children: e.jsxs(d, { className: "p-4 text-center", children: [e.jsx($, { className: "w-6 h-6 mx-auto mb-2 text-blue-500" }), e.jsx("div", { className: "text-2xl font-bold", children: g }), e.jsx("div", { className: "text-sm text-gray-600", children: "Seconds" })] }) }), e.jsx(o, { children: e.jsxs(d, { className: "p-4 text-center", children: [e.jsx(B, { className: "w-6 h-6 mx-auto mb-2 text-yellow-500" }), e.jsx("div", { className: "text-2xl font-bold", children: m }), e.jsx("div", { className: "text-sm text-gray-600", children: "Target" })] }) })] }), a === "idle" && e.jsxs(o, { className: "max-w-md mx-auto mb-6", children: [e.jsx(v, { children: e.jsx(k, { className: "text-center", children: "How to Play" }) }), e.jsxs(d, { className: "text-center space-y-4", children: [e.jsx("p", { children: "Tap the falling puff puffs to catch them!" }), e.jsxs("p", { className: "text-sm text-gray-600", children: ["Catch ", e.jsxs("strong", { children: [m, " puff puffs"] }), " within ", e.jsxs("strong", { children: [b, " seconds"] }), " to win free puff puff with your next order!"] }), e.jsx(c, { onClick: L, className: "yum-btn-primary w-full", disabled: !F, children: F ? "Start Game" : "Loading..." })] })] }), a === "won" && e.jsxs(o, { className: "max-w-md mx-auto mb-6 border-green-200 bg-green-50 dark:bg-green-900/20", children: [e.jsx(v, { children: e.jsx(k, { className: "text-center text-green-700 dark:text-green-300", children: "\u{1F389} Congratulations! \u{1F389}" }) }), e.jsxs(d, { className: "text-center space-y-4", children: [e.jsxs("p", { className: "text-lg font-semibold", children: ["You caught ", l, " puff puffs!"] }), e.jsxs("p", { className: "text-green-600 dark:text-green-400", children: ["You've earned ", e.jsx("strong", { children: "FREE PUFF PUFF" }), " with your next order!"] }), e.jsxs("div", { className: "bg-white border-2 border-green-300 rounded-lg p-4", children: [e.jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Use this promo code:" }), e.jsxs("div", { className: "flex items-center justify-center gap-2", children: [e.jsx("code", { className: "bg-gray-100 px-3 py-2 rounded font-mono text-lg font-bold text-[#F02819]", children: "FREEPUFFPUFF" }), e.jsx(c, { size: "sm", variant: "outline", onClick: () => {
    navigator.clipboard.writeText("FREEPUFFPUFF"), f({ title: "Copied!", description: "Promo code copied to clipboard", duration: 2e3 });
  }, className: "h-8", children: "Copy" })] })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(c, { onClick: C, variant: "outline", className: "flex-1", children: "Play Again" }), e.jsx(w, { href: "/", className: "flex-1", children: e.jsx(c, { className: "yum-btn-primary w-full", children: "Order Now" }) })] })] })] }), a === "lost" && e.jsxs(o, { className: "max-w-md mx-auto mb-6 border-red-200 bg-red-50 dark:bg-red-900/20", children: [e.jsx(v, { children: e.jsx(k, { className: "text-center text-red-700 dark:text-red-300", children: "Time's Up! \u23F0" }) }), e.jsxs(d, { className: "text-center space-y-4", children: [e.jsxs("p", { children: ["You caught ", l, " out of ", m, " puff puffs!"] }), e.jsx("p", { className: "text-gray-600", children: "So close! Try again to win a free puff puff!" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(c, { onClick: C, className: "yum-btn-primary flex-1", children: "Try Again" }), e.jsx(w, { href: "/", className: "flex-1", children: e.jsx(c, { variant: "outline", className: "w-full", children: "Back to Menu" }) })] })] })] }), e.jsx("div", { className: "max-w-md mx-auto", children: e.jsx(o, { children: e.jsx(d, { className: "p-0", children: e.jsxs("div", { ref: u, className: "relative w-full h-96 bg-gradient-to-b from-sky-200 to-sky-300 dark:from-sky-800 dark:to-sky-900 overflow-hidden rounded-lg", style: { touchAction: "manipulation" }, children: [S.map((s) => e.jsx("button", { className: "absolute transition-none cursor-pointer hover:scale-110 active:scale-95", style: { left: `${s.x}px`, top: `${s.y}px`, width: `${s.size}px`, height: `${s.size}px`, fontSize: `${s.size * 0.8}px`, background: "none", border: "none", padding: 0, zIndex: 10 }, onClick: () => U(s.id), disabled: a !== "playing", children: e.jsx("img", { src: P, alt: "Puff Puff", className: "w-full h-full object-cover rounded-full shadow-lg pointer-events-none" }) }, s.id)), a === "idle" && e.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg", children: e.jsx("div", { className: "text-white text-lg font-semibold", children: "Ready to catch some puff puffs?" }) }), (a === "won" || a === "lost") && e.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg", children: e.jsx("div", { className: "text-white text-2xl font-bold", children: "Game Over!" }) })] }) }) }) }), a === "playing" && e.jsxs("div", { className: "max-w-md mx-auto mt-4", children: [e.jsxs("div", { className: "flex justify-between text-sm mb-2", children: [e.jsx("span", { children: "Progress" }), e.jsxs("span", { children: [l, "/", m] })] }), e.jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: e.jsx("div", { className: "bg-[#F02819] h-2 rounded-full transition-all duration-300", style: { width: `${Math.min(l / m * 100, 100)}%` } }) })] })] }) });
}
export { J as default };
