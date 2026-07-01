var __defProp = Object.defineProperty;
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
import { N as z, r as f, j as e, B as h } from "./index-DOfu0sXg.js";
import { D as N, a as T, b as F, c as C, f as A } from "./dialog-BUvIuveX.js";
import { S as W, a as k, b as P, c as B, d as D } from "./select-ets7bQkN.js";
import { f as m } from "./currency-cZDvJQzL.js";
import { a as v, f as O } from "./timezone-utils-D5P8NMTs.js";
import { F as $ } from "./file-text-BbJNGgaq.js";
import { D as E } from "./download-ukPRPFea.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const I = z("Printer", [["path", { d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2", key: "143wyd" }], ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }], ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]]), M = (t) => new Promise((i) => setTimeout(i, t)), R = (t) => {
  const i = {};
  i["Content-Type"] = "application/json";
  const n = localStorage.getItem("adminToken");
  return n && (i.Authorization = `Bearer ${n}`), i;
}, H = (t) => __async(null, null, function* () {
  if (!t.ok) {
    const i = (yield t.text()) || t.statusText;
    throw new Error(`${t.status}: ${i}`);
  }
}), se = (_0, ..._1) => __async(null, [_0, ..._1], function* (t, i = {}) {
  var _a, _b;
  const { retries: n = 0, retryDelayMs: s = 800, onRetry: l, force: d = false } = i;
  let p = 0, o = null;
  for (; p <= n; ) try {
    const c = `/api/eatyum/orders/${t}/completed`, x = d ? `${c}?force=true` : c, r = yield fetch(x, { method: "POST", headers: R(true), credentials: "include" });
    if (r.status === 503) {
      const a = yield r.json().catch(() => ({}));
      if (a.retryable) return { success: false, retryable: true, orderProStatus: (_a = a.orderProStatus) != null ? _a : "pending", message: (_b = a.message) != null ? _b : "OrderPro is temporarily unreachable. Sync will be retried automatically." };
    }
    return yield H(r), yield r.json();
  } catch (c) {
    if (o = c, p >= n) break;
    l == null || l(p + 1, o), yield M(s * Math.pow(2, p)), p += 1;
  }
  throw o || new Error("OrderPro sync failed");
}), L = { website: "web", mobile: "web", yum_web: "web", yumweb: "web", app: "app", pwa: "app", native: "app", yum_app: "app", yumapp: "app", walk_in: "walkin" }, S = { web: "Web", app: "App", walkin: "Walk-in", whatsapp: "WhatsApp", admin: "Admin", glovo: "Glovo", chowdeck: "Chowdeck", foodelo: "Foodelo", api: "API", kiosk: "Kiosk" }, _ = { api: "API", pwa: "PWA", pos: "POS", qr: "QR", sms: "SMS" }, b = (t) => {
  var _a;
  const i = String(t != null ? t : "").trim().toLowerCase();
  if (!i) return "";
  const n = i.replace(/[\s-]+/g, "_");
  return (_a = L[n]) != null ? _a : n;
}, U = (t) => t.split(/[_\s]+/).filter(Boolean).map((i) => {
  var _a;
  return (_a = _[i]) != null ? _a : `${i.charAt(0).toUpperCase()}${i.slice(1)}`;
}).join(" "), re = (t) => {
  var _a;
  const i = __spreadValues({}, S);
  for (const n of t != null ? t : []) {
    const s = b(n == null ? void 0 : n.value), l = String((_a = n == null ? void 0 : n.label) != null ? _a : "").trim();
    s && l && (i[s] = l);
  }
  return i;
}, ae = (t, i = {}) => {
  var _a, _b;
  const n = b(t);
  return n ? (_b = (_a = i[n]) != null ? _a : S[n]) != null ? _b : U(n) : "N/A";
}, oe = (t) => {
  switch (b(t)) {
    case "web":
    case "app":
      return "bg-blue-50 text-blue-700 border-blue-200";
    case "walkin":
      return "bg-green-50 text-green-700 border-green-200";
    case "whatsapp":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "admin":
      return "bg-purple-50 text-purple-700 border-purple-200";
    case "glovo":
    case "chowdeck":
    case "foodelo":
      return "bg-orange-50 text-orange-700 border-orange-200";
    default:
      return "bg-gray-50 text-gray-700 border-gray-200";
  }
}, g = { "44mm": { pageWidth: "44mm", contentWidth: "36mm", fontSize: "7pt", smallFontSize: "6pt", headerFontSize: "9pt", totalFontSize: "8.5pt", lineHeight: "1.25", pageMargin: "0mm 2mm", label: "44 mm", previewWidth: "168px" }, "57mm": { pageWidth: "57mm", contentWidth: "47mm", fontSize: "8pt", smallFontSize: "7pt", headerFontSize: "10.5pt", totalFontSize: "9.5pt", lineHeight: "1.3", pageMargin: "0mm 2mm", label: "57 mm", previewWidth: "216px" }, "58mm": { pageWidth: "58mm", contentWidth: "48mm", fontSize: "8pt", smallFontSize: "7pt", headerFontSize: "11pt", totalFontSize: "10pt", lineHeight: "1.3", pageMargin: "0mm 2mm", label: "58 mm", previewWidth: "220px" }, "76mm": { pageWidth: "76mm", contentWidth: "68mm", fontSize: "9pt", smallFontSize: "7.5pt", headerFontSize: "12pt", totalFontSize: "10.5pt", lineHeight: "1.35", pageMargin: "0mm 2mm", label: "76 mm", previewWidth: "288px" }, "80mm": { pageWidth: "80mm", contentWidth: "72mm", fontSize: "9pt", smallFontSize: "7.5pt", headerFontSize: "13pt", totalFontSize: "11pt", lineHeight: "1.35", pageMargin: "0mm 2mm", label: "80 mm", previewWidth: "302px" }, "82.5mm": { pageWidth: "82.5mm", contentWidth: "74mm", fontSize: "9.5pt", smallFontSize: "7.5pt", headerFontSize: "13pt", totalFontSize: "11pt", lineHeight: "1.35", pageMargin: "0mm 2mm", label: "82.5 mm", previewWidth: "312px" } }, Y = "80mm";
function V(t) {
  const i = g[t];
  return `
    /* ---- reset ---- */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    @page {
      size: ${i.pageWidth} auto;
      margin: 0;
    }

    html, body {
      width: 100% !important;
      max-width: ${i.pageWidth} !important;
      margin: 0 !important;
      padding: 0 !important;
      background: #fff;
      color: #000;
      font-family: 'Courier New', 'Lucida Console', monospace;
      font-size: ${i.fontSize};
      line-height: ${i.lineHeight};
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }

    body {
      padding: 0 1mm !important;
    }

    /* ---- receipt structure ---- */
    /*
     * !important overrides inline styles that come from the React
     * preview component (fixed pixel widths, padding, etc.).
     */
    .receipt {
      width: 100% !important;
      max-width: 100% !important;
      padding: 1mm 0 !important;
      font-family: 'Courier New', 'Lucida Console', monospace !important;
      font-size: ${i.fontSize} !important;
      line-height: ${i.lineHeight} !important;
    }

    .receipt-header {
      text-align: center;
      font-weight: bold;
      font-size: ${i.headerFontSize} !important;
      padding-bottom: 1mm;
    }

    .receipt-outlet {
      text-align: center;
      font-size: ${i.smallFontSize} !important;
    }

    .receipt-divider {
      border: none !important;
      border-top: 1px dashed #000 !important;
      margin: 1.5mm 0 !important;
    }

    .receipt-divider-thick {
      border: none !important;
      border-top: 1px solid #000 !important;
      margin: 1.5mm 0 !important;
    }

    .receipt-row {
      display: flex;
      justify-content: space-between;
      gap: 2mm;
    }

    .receipt-row-label {
      flex-shrink: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .receipt-row-value {
      flex-shrink: 0;
      text-align: right;
      white-space: nowrap;
    }

    .receipt-item {
      margin-bottom: 1mm;
    }

    .receipt-item-name {
      font-weight: bold;
    }

    .receipt-item-detail {
      padding-left: 2mm;
    }

    .receipt-item-extra {
      padding-left: 3mm;
      font-size: ${i.smallFontSize};
      color: #000;
    }

    .receipt-total-row {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: ${i.totalFontSize} !important;
    }

    .receipt-center {
      text-align: center;
    }

    .receipt-small {
      font-size: ${i.smallFontSize} !important;
    }

    .receipt-footer {
      text-align: center;
      margin-top: 2mm;
      font-size: ${i.smallFontSize} !important;
    }

    .receipt-note {
      word-break: break-word;
    }

    .receipt-item-extra {
      font-size: ${i.smallFontSize} !important;
    }

    /* ---- print overrides ---- */
    @media print {
      html, body {
        width: 100% !important;
        max-width: ${i.pageWidth} !important;
        margin: 0 !important;
        padding: 0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }

      body { padding: 0 1mm !important; }

      .receipt {
        width: 100% !important;
        max-width: 100% !important;
        padding: 0 !important;
      }

      /* Force all text pure black for thermal printers */
      .receipt, .receipt * {
        color: #000 !important;
      }

      /* Heavier weight for better thermal print legibility */
      .receipt-header {
        font-weight: 900 !important;
      }

      .receipt-item-name {
        font-weight: 900 !important;
      }

      .receipt-total-row {
        font-weight: 900 !important;
      }

      /* prevent page breaks inside receipt sections */
      .receipt-item, .receipt-total-row {
        page-break-inside: avoid;
        break-inside: avoid;
      }
    }

    /* ---- screen preview (when viewing in popup before print) ---- */
    @media screen {
      html, body {
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
      }
      body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8mm 4mm !important;
        background: #f5f5f5;
        min-height: 100vh;
      }
      .receipt {
        width: ${i.contentWidth} !important;
        max-width: ${i.contentWidth} !important;
        background: #fff;
        padding: 4mm !important;
        box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      }
    }
  `;
}
function w(t, i, n = "print") {
  const s = window.open("", "_blank");
  if (!s) return;
  const l = V(i), d = n === "pdf" ? '<div style="text-align:center;padding:6px;background:#fffbeb;border:1px solid #fde68a;border-radius:4px;margin-bottom:8px;font-family:sans-serif;font-size:12px;color:#92400e;" class="no-print">To save as PDF: select <strong>"Save as PDF"</strong> as the destination.</div>' : "", p = n === "pdf" ? "@media print { .no-print { display: none !important; } }" : "";
  s.document.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Receipt${n === "pdf" ? " - Save as PDF" : ""}</title>
<style>${l}
${p}</style>
</head>
<body>
${d}
${t}
</body>
</html>`), s.document.close(), s.focus(), setTimeout(() => {
    s.print(), n === "print" && setTimeout(() => s.close(), 500);
  }, 300);
}
function y(t) {
  return t ? typeof t == "string" ? [t] : Array.isArray(t) ? t.map((i) => typeof i == "string" ? i : i.optionName || i.addonName || i.name || i.label || JSON.stringify(i)) : typeof t == "object" ? Array.isArray(t.selectedOptions) ? y(t.selectedOptions) : Array.isArray(t.addons) ? y(t.addons) : Object.entries(t).map(([i, n]) => `${i}: ${typeof n == "object" ? JSON.stringify(n) : n}`) : [String(t)] : [];
}
function u(t) {
  if (!t) return [];
  if (typeof t == "object") return y(t);
  if (typeof t != "string") return [String(t)];
  try {
    const i = JSON.parse(t);
    return y(i);
  } catch (e2) {
    return [t];
  }
}
function q(t) {
  try {
    return v(t, "dd/MM/yy HH:mm");
  } catch (e2) {
    return t;
  }
}
function J({ order: t, paperSize: i = "80mm" }) {
  var d, p, o, c, x;
  const n = ((d = t.items) == null ? void 0 : d.reduce((r, a) => r + a.quantity, 0)) || 0, s = g[i], l = { fontFamily: "'Courier New', 'Lucida Console', monospace", fontSize: s.fontSize, lineHeight: s.lineHeight, width: s.previewWidth, padding: "12px", backgroundColor: "white", color: "#000" };
  return e.jsxs("div", { className: "receipt", style: l, children: [e.jsx("div", { className: "receipt-header", style: { textAlign: "center", fontWeight: "bold", fontSize: s.headerFontSize }, children: "EATYUM" }), t.outletName && e.jsx("div", { className: "receipt-outlet", style: { textAlign: "center", fontSize: s.smallFontSize }, children: t.outletName.toUpperCase() }), e.jsx("hr", { className: "receipt-divider-thick", style: { border: "none", borderTop: "1px solid #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Order #" }), e.jsx("span", { children: t.orderNumber })] }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Date" }), e.jsx("span", { children: q(t.createdAt) })] }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Type" }), e.jsx("span", { children: (p = t.orderType) == null ? void 0 : p.replace(/_/g, " ").toUpperCase() })] }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Status" }), e.jsx("span", { children: (o = t.status) == null ? void 0 : o.replace(/_/g, " ").toUpperCase() })] }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Payment" }), e.jsx("span", { children: (c = t.paymentStatus) == null ? void 0 : c.toUpperCase() })] }), (t.customerName || t.customerPhone || t.deliveryAddress) && e.jsxs(e.Fragment, { children: [e.jsx("hr", { className: "receipt-divider", style: { border: "none", borderTop: "1px dashed #000", margin: "4px 0" } }), t.customerName && e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Customer" }), e.jsx("span", { children: t.customerName })] }), t.customerPhone && e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Phone" }), e.jsx("span", { children: t.customerPhone })] }), t.deliveryAddress && e.jsxs("div", { className: "receipt-note", style: { wordBreak: "break-word" }, children: ["Addr: ", t.deliveryAddress] })] }), e.jsx("hr", { className: "receipt-divider-thick", style: { border: "none", borderTop: "1px solid #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between", fontWeight: "bold" }, children: [e.jsx("span", { children: "ITEM" }), e.jsxs("span", { children: ["QTY", "    ", "AMT"] })] }), e.jsx("hr", { className: "receipt-divider", style: { border: "none", borderTop: "1px dashed #000", margin: "4px 0" } }), (x = t.items) == null ? void 0 : x.map((r) => e.jsxs("div", { className: "receipt-item", style: { marginBottom: "3px" }, children: [e.jsx("div", { className: "receipt-item-name", style: { fontWeight: "bold" }, children: r.productName }), e.jsxs("div", { className: "receipt-item-detail", style: { display: "flex", justifyContent: "space-between", paddingLeft: "2mm" }, children: [e.jsxs("span", { children: [r.quantity, " x ", m(r.unitPrice)] }), e.jsx("span", { children: m(r.totalPrice) })] }), u(r.customizations).map((a, j) => e.jsxs("div", { className: "receipt-item-extra", style: { paddingLeft: "3mm", fontSize: s.smallFontSize, color: "#000" }, children: ["\u2022 ", a] }, `c-${j}`)), u(r.addons).map((a, j) => e.jsxs("div", { className: "receipt-item-extra", style: { paddingLeft: "3mm", fontSize: s.smallFontSize, color: "#000" }, children: ["+ ", a] }, `a-${j}`))] }, r.id)), e.jsx("hr", { className: "receipt-divider-thick", style: { border: "none", borderTop: "1px solid #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Subtotal" }), e.jsx("span", { children: m(t.subtotal) })] }), parseFloat(t.deliveryFee || "0") > 0 && e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Delivery" }), e.jsx("span", { children: m(t.deliveryFee) })] }), parseFloat(t.discount || "0") > 0 && e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Discount" }), e.jsxs("span", { children: ["-", m(t.discount)] })] }), parseFloat(t.walletAmount || "0") > 0 && e.jsxs("div", { className: "receipt-row", style: { display: "flex", justifyContent: "space-between" }, children: [e.jsx("span", { children: "Wallet" }), e.jsxs("span", { children: ["-", m(t.walletAmount)] })] }), e.jsx("hr", { className: "receipt-divider", style: { border: "none", borderTop: "1px dashed #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-total-row", style: { display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: s.totalFontSize }, children: [e.jsx("span", { children: "TOTAL" }), e.jsx("span", { children: m(t.total) })] }), e.jsx("hr", { className: "receipt-divider-thick", style: { border: "none", borderTop: "1px solid #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-center", style: { textAlign: "center" }, children: [n, " item", n !== 1 ? "s" : ""] }), t.specialInstructions && e.jsxs(e.Fragment, { children: [e.jsx("hr", { className: "receipt-divider", style: { border: "none", borderTop: "1px dashed #000", margin: "4px 0" } }), e.jsxs("div", { className: "receipt-note", style: { wordBreak: "break-word" }, children: ["NOTE: ", t.specialInstructions] })] }), t.promoCode && e.jsxs("div", { className: "receipt-center receipt-small", style: { fontSize: s.smallFontSize, textAlign: "center", marginTop: "2px" }, children: ["Promo: ", t.promoCode] }), (t.acceptedByName || t.processedByName) && e.jsxs(e.Fragment, { children: [e.jsx("hr", { className: "receipt-divider", style: { border: "none", borderTop: "1px dashed #000", margin: "4px 0" } }), t.acceptedByName && e.jsxs("div", { className: "receipt-row receipt-small", style: { display: "flex", justifyContent: "space-between", fontSize: s.smallFontSize }, children: [e.jsx("span", { children: "Accepted by" }), e.jsx("span", { children: t.acceptedByName })] }), t.processedByName && t.processedByName !== t.acceptedByName && e.jsxs("div", { className: "receipt-row receipt-small", style: { display: "flex", justifyContent: "space-between", fontSize: s.smallFontSize }, children: [e.jsx("span", { children: "Processed by" }), e.jsx("span", { children: t.processedByName })] })] }), e.jsx("div", { className: "receipt-footer", style: { textAlign: "center", marginTop: "6px", fontSize: s.smallFontSize }, children: "Thank you for your order!" }), e.jsx("div", { className: "receipt-footer", style: { textAlign: "center", fontSize: s.smallFontSize, color: "#555" }, children: "Powered by EatYum" })] });
}
function Q({ order: t }) {
  var s, l, d, p;
  const i = ((s = t.items) == null ? void 0 : s.reduce((o, c) => o + c.quantity, 0)) || 0;
  let n;
  try {
    n = v(t.createdAt, "MMMM dd, yyyy 'at' hh:mm a");
  } catch (e2) {
    n = O(t.createdAt);
  }
  return e.jsxs("div", { style: { fontFamily: "'Helvetica Neue', Arial, sans-serif", maxWidth: "800px", margin: "0 auto", padding: "40px", backgroundColor: "white", color: "#333", lineHeight: "1.6" }, children: [e.jsx("div", { style: { borderBottom: "3px solid #F02819", paddingBottom: "20px", marginBottom: "24px" }, children: e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [e.jsxs("div", { children: [e.jsx("h1", { style: { fontSize: "28px", fontWeight: "bold", color: "#F02819", margin: 0 }, children: "EATYUM" }), t.outletName && e.jsx("p", { style: { fontSize: "14px", color: "#666", margin: "4px 0 0 0" }, children: t.outletName })] }), e.jsxs("div", { style: { textAlign: "right" }, children: [e.jsx("h2", { style: { fontSize: "20px", fontWeight: "bold", margin: 0, color: "#333" }, children: "INVOICE" }), e.jsxs("p", { style: { fontSize: "14px", color: "#666", margin: "4px 0 0 0" }, children: ["#", t.orderNumber] })] })] }) }), e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "24px", padding: "16px", backgroundColor: "#f9fafb", borderRadius: "8px" }, children: [e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#999", textTransform: "uppercase", fontWeight: 600 }, children: "Date" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500 }, children: n })] }), e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#999", textTransform: "uppercase", fontWeight: 600 }, children: "Order Type" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500, textTransform: "capitalize" }, children: (l = t.orderType) == null ? void 0 : l.replace(/_/g, " ") })] }), e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#999", textTransform: "uppercase", fontWeight: 600 }, children: "Status" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500, textTransform: "capitalize" }, children: (d = t.status) == null ? void 0 : d.replace(/_/g, " ") })] }), e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#999", textTransform: "uppercase", fontWeight: 600 }, children: "Payment" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500, textTransform: "capitalize" }, children: t.paymentStatus })] }), t.promoCode && e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#999", textTransform: "uppercase", fontWeight: 600 }, children: "Promo Code" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500 }, children: t.promoCode })] })] }), (t.customerName || t.customerPhone || t.customerEmail || t.deliveryAddress) && e.jsxs("div", { style: { marginBottom: "24px" }, children: [e.jsx("h3", { style: { fontSize: "14px", fontWeight: 600, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Customer Information" }), e.jsxs("div", { style: { padding: "12px 16px", border: "1px solid #e5e7eb", borderRadius: "8px" }, children: [t.customerName && e.jsxs("div", { style: { fontSize: "13px", marginBottom: "4px" }, children: [e.jsx("strong", { children: "Name:" }), " ", t.customerName] }), t.customerPhone && e.jsxs("div", { style: { fontSize: "13px", marginBottom: "4px" }, children: [e.jsx("strong", { children: "Phone:" }), " ", t.customerPhone] }), t.customerEmail && e.jsxs("div", { style: { fontSize: "13px", marginBottom: "4px" }, children: [e.jsx("strong", { children: "Email:" }), " ", t.customerEmail] }), t.deliveryAddress && e.jsxs("div", { style: { fontSize: "13px" }, children: [e.jsx("strong", { children: "Delivery Address:" }), " ", t.deliveryAddress] })] })] }), e.jsxs("div", { style: { marginBottom: "24px" }, children: [e.jsx("h3", { style: { fontSize: "14px", fontWeight: 600, color: "#333", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }, children: "Order Items" }), e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [e.jsx("thead", { children: e.jsxs("tr", { style: { borderBottom: "2px solid #F02819" }, children: [e.jsx("th", { style: { textAlign: "left", padding: "8px 12px", fontSize: "12px", fontWeight: 600, color: "#666", textTransform: "uppercase" }, children: "Item" }), e.jsx("th", { style: { textAlign: "center", padding: "8px 12px", fontSize: "12px", fontWeight: 600, color: "#666", textTransform: "uppercase" }, children: "Qty" }), e.jsx("th", { style: { textAlign: "right", padding: "8px 12px", fontSize: "12px", fontWeight: 600, color: "#666", textTransform: "uppercase" }, children: "Unit Price" }), e.jsx("th", { style: { textAlign: "right", padding: "8px 12px", fontSize: "12px", fontWeight: 600, color: "#666", textTransform: "uppercase" }, children: "Total" })] }) }), e.jsx("tbody", { children: (p = t.items) == null ? void 0 : p.map((o) => {
    const c = u(o.customizations), x = u(o.addons);
    return e.jsxs("tr", { style: { borderBottom: "1px solid #eee" }, children: [e.jsxs("td", { style: { padding: "10px 12px", fontSize: "13px" }, children: [e.jsx("div", { style: { fontWeight: 500 }, children: o.productName }), c.length > 0 && e.jsx("div", { style: { fontSize: "11px", color: "#888", marginTop: "2px" }, children: c.map((r, a) => e.jsxs("div", { children: ["\u2022 ", r] }, a)) }), x.length > 0 && e.jsx("div", { style: { fontSize: "11px", color: "#888", marginTop: "2px" }, children: x.map((r, a) => e.jsxs("div", { children: ["+ ", r] }, a)) })] }), e.jsx("td", { style: { padding: "10px 12px", fontSize: "13px", textAlign: "center" }, children: o.quantity }), e.jsx("td", { style: { padding: "10px 12px", fontSize: "13px", textAlign: "right" }, children: m(o.unitPrice) }), e.jsx("td", { style: { padding: "10px 12px", fontSize: "13px", textAlign: "right", fontWeight: 500 }, children: m(o.totalPrice) })] }, o.id);
  }) })] })] }), e.jsx("div", { style: { display: "flex", justifyContent: "flex-end", marginBottom: "24px" }, children: e.jsxs("div", { style: { width: "280px" }, children: [e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "13px" }, children: [e.jsx("span", { children: "Subtotal" }), e.jsx("span", { children: m(t.subtotal) })] }), parseFloat(t.deliveryFee || "0") > 0 && e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "13px" }, children: [e.jsx("span", { children: "Delivery Fee" }), e.jsx("span", { children: m(t.deliveryFee) })] }), parseFloat(t.discount || "0") > 0 && e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "13px", color: "#16a34a" }, children: [e.jsx("span", { children: "Discount" }), e.jsxs("span", { children: ["-", m(t.discount)] })] }), parseFloat(t.walletAmount || "0") > 0 && e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: "13px", color: "#2563eb" }, children: [e.jsx("span", { children: "Wallet" }), e.jsxs("span", { children: ["-", m(t.walletAmount)] })] }), e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "10px 0", fontSize: "16px", fontWeight: "bold", borderTop: "2px solid #333", marginTop: "4px" }, children: [e.jsx("span", { children: "TOTAL" }), e.jsx("span", { children: m(t.total) })] }), e.jsxs("div", { style: { textAlign: "right", fontSize: "12px", color: "#888" }, children: [i, " item", i !== 1 ? "s" : ""] })] }) }), t.specialInstructions && e.jsxs("div", { style: { marginBottom: "24px", padding: "12px 16px", backgroundColor: "#fffbeb", border: "1px solid #fde68a", borderRadius: "8px" }, children: [e.jsx("div", { style: { fontSize: "12px", fontWeight: 600, color: "#92400e", marginBottom: "4px", textTransform: "uppercase" }, children: "Special Instructions" }), e.jsx("div", { style: { fontSize: "13px", color: "#78350f" }, children: t.specialInstructions })] }), (t.acceptedByName || t.processedByName) && e.jsxs("div", { style: { marginBottom: "24px", padding: "12px 16px", backgroundColor: "#f0f9ff", border: "1px solid #bae6fd", borderRadius: "8px" }, children: [e.jsx("div", { style: { fontSize: "12px", fontWeight: 600, color: "#0369a1", marginBottom: "8px", textTransform: "uppercase" }, children: "Processed By" }), e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }, children: [t.acceptedByName && e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#64748b" }, children: "Accepted by" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500, color: "#0c4a6e" }, children: t.acceptedByName })] }), t.processedByName && t.processedByName !== t.acceptedByName && e.jsxs("div", { children: [e.jsx("div", { style: { fontSize: "11px", color: "#64748b" }, children: "Processed by" }), e.jsx("div", { style: { fontSize: "13px", fontWeight: 500, color: "#0c4a6e" }, children: t.processedByName })] })] })] }), e.jsxs("div", { style: { textAlign: "center", paddingTop: "24px", borderTop: "1px solid #eee" }, children: [e.jsx("p", { style: { fontSize: "14px", color: "#666", margin: "0 0 4px 0" }, children: "Thank you for your order!" }), e.jsx("p", { style: { fontSize: "11px", color: "#aaa", margin: 0 }, children: "Powered by EatYum" })] })] });
}
const G = f.forwardRef(function({ order: i, size: n, paperSize: s = "80mm" }, l) {
  return e.jsx("div", { ref: l, children: n === "thermal" ? e.jsx(J, { order: i, paperSize: s }) : e.jsx(Q, { order: i }) });
});
function le({ order: t, open: i, onOpenChange: n }) {
  const [s, l] = f.useState("thermal"), [d, p] = f.useState(Y), o = f.useRef(null), c = () => {
    const r = o.current;
    if (r) if (s === "thermal") w(r.innerHTML, d, "print");
    else {
      const a = window.open("", "_blank");
      if (!a) return;
      a.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Invoice</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 20px; }
  @media print { body { margin: 0; padding: 0; } }
</style></head><body>${r.innerHTML}</body></html>`), a.document.close(), a.focus(), setTimeout(() => {
        a.print(), setTimeout(() => a.close(), 500);
      }, 300);
    }
  }, x = () => {
    const r = o.current;
    if (r) if (s === "thermal") w(r.innerHTML, d, "pdf");
    else {
      const a = window.open("", "_blank");
      if (!a) return;
      a.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Invoice - Save as PDF</title>
<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; padding: 20px; }
  @media print { body { margin: 0; padding: 0; } .pdf-hint { display: none !important; } }
  .pdf-hint { text-align: center; padding: 10px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; margin-bottom: 16px; font-family: sans-serif; font-size: 13px; color: #92400e; }
</style></head><body>
<div class="pdf-hint">To save as PDF: Select <strong>"Save as PDF"</strong> as the destination in the print dialog below.</div>
${r.innerHTML}</body></html>`), a.document.close(), a.focus(), setTimeout(() => {
        a.print();
      }, 300);
    }
  };
  return t ? e.jsx(N, { open: i, onOpenChange: n, children: e.jsxs(T, { className: "max-w-3xl max-h-[90vh] flex flex-col", children: [e.jsx(F, { children: e.jsxs(C, { className: "flex items-center gap-2", children: [e.jsx($, { className: "h-5 w-5" }), "Order Receipt \u2014 #", t.orderNumber] }) }), e.jsxs("div", { className: "flex items-center gap-2 border-b pb-3 flex-wrap", children: [e.jsx(h, { variant: s === "thermal" ? "default" : "outline", size: "sm", onClick: () => l("thermal"), children: "Thermal Receipt" }), e.jsx(h, { variant: s === "a4" ? "default" : "outline", size: "sm", onClick: () => l("a4"), children: "A4 Invoice" }), s === "thermal" && e.jsxs("div", { className: "flex items-center gap-1 ml-auto", children: [e.jsx("span", { className: "text-xs text-muted-foreground", children: "Paper:" }), e.jsxs(W, { value: d, onValueChange: (r) => p(r), children: [e.jsx(k, { className: "h-7 w-[120px] text-xs", children: e.jsx(P, {}) }), e.jsx(B, { children: Object.keys(g).map((r) => e.jsx(D, { value: r, className: "text-xs", children: g[r].label }, r)) })] })] })] }), e.jsx("div", { className: "flex-1 overflow-auto border rounded-lg bg-gray-50 p-4 flex justify-center", children: e.jsx(G, { ref: o, order: t, size: s, paperSize: d }) }), e.jsxs(A, { className: "flex gap-2 sm:gap-2", children: [e.jsxs(h, { variant: "outline", onClick: c, className: "flex items-center gap-2", children: [e.jsx(I, { className: "h-4 w-4" }), "Print"] }), e.jsxs(h, { variant: "outline", onClick: x, className: "flex items-center gap-2", children: [e.jsx(E, { className: "h-4 w-4" }), "Download PDF"] }), e.jsx(h, { variant: "secondary", onClick: () => n(false), children: "Close" })] })] }) }) : null;
}
export { le as O, I as P, re as b, se as c, ae as f, oe as g, b as n };
