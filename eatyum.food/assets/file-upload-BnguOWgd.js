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
import { r as n, c as C, j as e, B as u, X as j } from "./index-DOfu0sXg.js";
import { I as S } from "./input-FyV2XACZ.js";
import { L as B } from "./label-B38UEnoM.js";
import { I as E } from "./image-Cm0cVFFU.js";
import { U as R } from "./upload-Bxi1uLXD.js";
function M({ value: b, onChange: c, label: N = "Upload Image", accept: w = "image/*", maxSize: d = 5, folder: y = "products" }) {
  const [p, m] = n.useState(false), [s, f] = n.useState(b || null), [T, v] = n.useState(null), r = n.useRef(null), { toast: l } = C(), U = (o) => __async(null, null, function* () {
    var g;
    const i = (g = o.target.files) == null ? void 0 : g[0];
    if (i) {
      if (i.size > d * 1024 * 1024) {
        l({ title: "File too large", description: `File size must be less than ${d}MB`, variant: "destructive" });
        return;
      }
      if (!i.type.startsWith("image/")) {
        l({ title: "Invalid file type", description: "Please select an image file", variant: "destructive" });
        return;
      }
      m(true);
      try {
        const t = new FormData();
        t.append("image", i);
        const k = localStorage.getItem("adminToken"), F = `/api/admin/upload?folder=${y}`, h = yield fetch(F, { method: "POST", headers: { Authorization: `Bearer ${k}` }, body: t });
        if (!h.ok) throw new Error("Upload failed");
        const a = yield h.json();
        if (a.success) {
          f(a.url), v(a.provider), c(a.url), setTimeout(() => {
            c(a.url);
          }, 100);
          const P = a.provider === "credpal-file-service" ? "CredPal File Service" : a.provider === "cloudflare-r2" ? "Cloudflare R2" : a.provider === "local-fallback" ? "Local Storage (Fallback)" : "Local Storage";
          l({ title: "Upload successful", description: `Image uploaded to ${P}` });
        } else throw new Error(a.message || "Upload failed");
      } catch (t) {
        l({ title: "Upload failed", description: t instanceof Error ? t.message : "Failed to upload image", variant: "destructive" });
      } finally {
        m(false);
      }
    }
  }), x = () => {
    f(null), v(null), c(""), r.current && (r.current.value = "");
  }, I = () => {
    var o;
    (o = r.current) == null || o.click();
  };
  return e.jsxs("div", { className: "space-y-2", children: [e.jsx(B, { children: N }), e.jsx("div", { className: "border-2 border-dashed border-gray-300 rounded-lg p-4", children: s ? e.jsxs("div", { className: "relative", children: [e.jsx("img", { src: s, alt: "Preview", className: "max-w-full h-32 object-cover rounded-lg mx-auto" }), e.jsx(u, { type: "button", variant: "destructive", size: "sm", className: "absolute top-2 right-2", onClick: x, children: e.jsx(j, { className: "h-4 w-4" }) })] }) : e.jsxs("div", { className: "text-center", children: [e.jsx(E, { className: "mx-auto h-12 w-12 text-gray-400 mb-2" }), e.jsx("p", { className: "text-sm text-gray-500 mb-2", children: "Click to upload or drag and drop" }), e.jsxs("p", { className: "text-xs text-gray-400", children: ["PNG, JPG, GIF up to ", d, "MB"] })] }) }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(u, { type: "button", variant: "outline", onClick: I, disabled: p, className: "flex-1", children: [e.jsx(R, { className: "h-4 w-4 mr-2" }), p ? "Uploading..." : s ? "Change Image" : "Upload Image"] }), s && e.jsx(u, { type: "button", variant: "outline", onClick: x, children: e.jsx(j, { className: "h-4 w-4" }) })] }), e.jsx(S, { ref: r, type: "file", accept: w, onChange: U, className: "hidden" })] });
}
export { M as F };
