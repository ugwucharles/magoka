var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { r as s, u as c, a_ as m, a$ as g, j as r } from "./index-DOfu0sXg.js";
function u() {
  return s.useMemo(() => {
    const t = new URLSearchParams(window.location.search);
    return { get: (e) => t.get(e), getAll: (e) => t.getAll(e), has: (e) => t.has(e), keys: () => t.keys(), values: () => t.values(), entries: () => t.entries(), forEach: (e) => t.forEach(e) };
  }, []);
}
function p() {
  const [, t] = c(), e = u();
  return s.useEffect(() => {
    try {
      m("/free"), g("campaign_view", "engagement", "free_campaign");
    } catch (a) {
      console.warn("GA4 tracking error on /free page:", a);
    }
    (() => __async(null, null, function* () {
      try {
        const a = yield fetch("/api/campaigns/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ campaign: "free", action: "view", source: e.get("source") || "", medium: e.get("medium") || "", term: e.get("term") || "", content: e.get("content") || "", referrer: document.referrer || "", userAgent: navigator.userAgent, timestamp: (/* @__PURE__ */ new Date()).toISOString(), url: window.location.href, sessionId: `campaign-${Date.now()}-${Math.random().toString(36).substr(2, 9)}` }) });
        if (a.ok) {
          const n = yield a.json();
          console.log("Campaign tracking successful:", n);
        } else {
          const n = yield a.text();
          console.error("Campaign tracking failed:", a.status, n);
        }
      } catch (a) {
        console.error("Failed to track campaign view:", a);
      }
    }))();
    const o = { campaign: "free", source: e.get("source") || "", medium: e.get("medium") || "", term: e.get("term") || "", content: e.get("content") || "", viewTime: (/* @__PURE__ */ new Date()).toISOString() };
    sessionStorage.setItem("campaignData", JSON.stringify(o));
    const i = setTimeout(() => {
      t("/");
    }, 200);
    return () => clearTimeout(i);
  }, [t, e]), r.jsx("div", { className: "min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center", children: r.jsxs("div", { className: "text-center", children: [r.jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto mb-4" }), r.jsx("p", { className: "text-gray-600", children: "Redirecting..." })] }) });
}
export { p as default };
