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
import { N as tr, _ as Wr, n as Yr, $ as de, j as e, v as ar, o as Gr, p as Xr, P as nr, a0 as Jr, r as p, w as Cs, c as rs, V as ts, b as pe, i as ir, f as Zr, E as Y, H as re, I as xe, Z as we, F as G, B as b, W as le, a1 as et, Y as lr, a2 as Gs, a3 as st, u as rt } from "./index-DOfu0sXg.js";
import { u as as, S as tt, h as at, A as Xs } from "./admin-layout-DH7sAIhq.js";
import { u as he } from "./useMutation-CVmbONMy.js";
import { F as Ce } from "./formatted-number-input-DhzuNqOG.js";
import { I as oe } from "./input-FyV2XACZ.js";
import { T as ns } from "./textarea-__Yhw9VH.js";
import { B as Ae } from "./badge-BAjaXL1S.js";
import { C as Ue } from "./checkbox-CrTtWijP.js";
import { D as $e, a as _e, b as Ve, c as qe, d as Ss, e as As } from "./dialog-BUvIuveX.js";
import { A as nt, a as it, b as lt, c as ot, d as ct, e as dt, f as mt, g as ut } from "./alert-dialog-Dg4XC4Tp.js";
import { c as or, R as xt, T as ht, C as pt } from "./index-4KTxcrAY.js";
import { u as gt } from "./index-D5alJfFq.js";
import { C as jt } from "./chevron-down-DegxUQDE.js";
import { F as Is, a as A, b as I, c as C, d as D, e as E, f as Fe } from "./form-DpW_ADfq.js";
import { z as u, u as Ps, t as Os, a as ft } from "./index-Ph36iM9Q.js";
import { i as yt, a as vt, b as bt } from "./schema-fInU-h3J.js";
import { i as Nt } from "./outlet-utils-Dqa2FQkG.js";
import { L as fe } from "./label-B38UEnoM.js";
import { S as vs } from "./switch-DvySixFh.js";
import { S as ye, a as ve, b as be, c as Ne, d as z } from "./select-ets7bQkN.js";
import { B as wt } from "./bell-off-DBs6dVt7.js";
import { T as is } from "./trash-2-MFuZdLCA.js";
import { P as De } from "./plus-xl2HqeIg.js";
import { M as bs } from "./map-pin-ChG4yLkU.js";
import { S as ks } from "./square-pen-B4PbNjTL.js";
import { M as Ct } from "./mail-WBbfgCoF.js";
import { P as St } from "./phone-Cx4FTVKN.js";
import { C as cr } from "./clock-DQ0X7PrC.js";
import { F as dr } from "./file-upload-BnguOWgd.js";
import { P as Be } from "./package-CpPTLD0o.js";
import { C as ys } from "./currency-input-Bsi8j9jy.js";
import { f as At } from "./currency-cZDvJQzL.js";
import { D as Js } from "./download-ukPRPFea.js";
import { U as It } from "./upload-Bxi1uLXD.js";
import { S as Pt } from "./search-BFN4Wc19.js";
import { I as Ot } from "./image-Cm0cVFFU.js";
import { E as kt } from "./eye-DhxFEmT5.js";
import { C as mr } from "./chevron-left-Cnh0-uPi.js";
import { C as ur } from "./chevron-right-DkUlsPHD.js";
import { T as Tt, a as Dt, b as Zs, c as Pe, d as Rt, e as Oe } from "./table-CzdeB6gz.js";
import { P as Ze } from "./permission-gate-BcxqpHQ-.js";
import { S as Ft } from "./shopping-cart-C1hOzoyN.js";
import { T as er } from "./trending-up-bEYf6wvk.js";
import { U as Lt } from "./users-CBtjfzvJ.js";
import "./Combination-C65a2kPq.js";
import "./star-o2YGpjzJ.js";
import "./user-adl9AYKF.js";
import "./dollar-sign-CJk2KsjA.js";
import "./arrow-right-CS_UFvxY.js";
import "./truck-BHJTFh2e.js";
import "./store-Cr0AuVYD.js";
import "./gift-C_SZrOe8.js";
import "./target-B9hXFhRn.js";
import "./shield-BJZvWIYM.js";
import "./menu-B9h4oOjs.js";
import "./triangle-alert-BZPq43t0.js";
import "./index-CxKYTSZE.js";
import "./check-AkIa94Y-.js";
import "./chevron-up-Cu4mgTvm.js";
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Et = tr("PowerOff", [["path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15", key: "dxknvb" }], ["path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68", key: "1x7qb5" }], ["path", { d: "M12 2v4", key: "3427ic" }], ["path", { d: "m2 2 20 20", key: "1ooewy" }]]);
/**
* @license lucide-react v0.453.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Mt = tr("Power", [["path", { d: "M12 2v10", key: "mnfbl" }], ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]]);
var Se = "Accordion", Ut = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [Ts, $t, _t] = Wr(Se), [ls, pn] = Yr(Se, [_t, or]), Ds = or(), xr = de.forwardRef((n, i) => {
  const _a = n, { type: o } = _a, d = __objRest(_a, ["type"]), m = d, x = d;
  return e.jsx(Ts.Provider, { scope: n.__scopeAccordion, children: o === "multiple" ? e.jsx(Kt, __spreadProps(__spreadValues({}, x), { ref: i })) : e.jsx(Bt, __spreadProps(__spreadValues({}, m), { ref: i })) });
});
xr.displayName = Se;
var [hr, Vt] = ls(Se), [pr, qt] = ls(Se, { collapsible: false }), Bt = de.forwardRef((n, i) => {
  const _a = n, { value: o, defaultValue: d, onValueChange: m = () => {
  }, collapsible: x = false } = _a, h = __objRest(_a, ["value", "defaultValue", "onValueChange", "collapsible"]), [f, P] = ar({ prop: o, defaultProp: d, onChange: m });
  return e.jsx(hr, { scope: n.__scopeAccordion, value: f ? [f] : [], onItemOpen: P, onItemClose: de.useCallback(() => x && P(""), [x, P]), children: e.jsx(pr, { scope: n.__scopeAccordion, collapsible: x, children: e.jsx(gr, __spreadProps(__spreadValues({}, h), { ref: i })) }) });
}), Kt = de.forwardRef((n, i) => {
  const _a = n, { value: o, defaultValue: d, onValueChange: m = () => {
  } } = _a, x = __objRest(_a, ["value", "defaultValue", "onValueChange"]), [h = [], f] = ar({ prop: o, defaultProp: d, onChange: m }), P = de.useCallback((g) => f((R = []) => [...R, g]), [f]), w = de.useCallback((g) => f((R = []) => R.filter((O) => O !== g)), [f]);
  return e.jsx(hr, { scope: n.__scopeAccordion, value: h, onItemOpen: P, onItemClose: w, children: e.jsx(pr, { scope: n.__scopeAccordion, collapsible: true, children: e.jsx(gr, __spreadProps(__spreadValues({}, x), { ref: i })) }) });
}), [zt, os] = ls(Se), gr = de.forwardRef((n, i) => {
  const _a = n, { __scopeAccordion: o, disabled: d, dir: m, orientation: x = "vertical" } = _a, h = __objRest(_a, ["__scopeAccordion", "disabled", "dir", "orientation"]), f = de.useRef(null), P = Gr(f, i), w = $t(o), R = gt(m) === "ltr", O = Xr(n.onKeyDown, (y) => {
    var L;
    if (!Ut.includes(y.key)) return;
    const H = y.target, ee = w().filter((Q) => {
      var k;
      return !((k = Q.ref.current) != null && k.disabled);
    }), X = ee.findIndex((Q) => Q.ref.current === H), J = ee.length;
    if (X === -1) return;
    y.preventDefault();
    let V = X;
    const q = 0, v = J - 1, Z = () => {
      V = X + 1, V > v && (V = q);
    }, a = () => {
      V = X - 1, V < q && (V = v);
    };
    switch (y.key) {
      case "Home":
        V = q;
        break;
      case "End":
        V = v;
        break;
      case "ArrowRight":
        x === "horizontal" && (R ? Z() : a());
        break;
      case "ArrowDown":
        x === "vertical" && Z();
        break;
      case "ArrowLeft":
        x === "horizontal" && (R ? a() : Z());
        break;
      case "ArrowUp":
        x === "vertical" && a();
        break;
    }
    const l = V % J;
    (L = ee[l].ref.current) == null || L.focus();
  });
  return e.jsx(zt, { scope: o, disabled: d, direction: m, orientation: x, children: e.jsx(Ts.Slot, { scope: o, children: e.jsx(nr.div, __spreadProps(__spreadValues({}, h), { "data-orientation": x, ref: P, onKeyDown: d ? void 0 : O })) }) });
}), ss = "AccordionItem", [Ht, Rs] = ls(ss), jr = de.forwardRef((n, i) => {
  const _a = n, { __scopeAccordion: o, value: d } = _a, m = __objRest(_a, ["__scopeAccordion", "value"]), x = os(ss, o), h = Vt(ss, o), f = Ds(o), P = Jr(), w = d && h.value.includes(d) || false, g = x.disabled || n.disabled;
  return e.jsx(Ht, { scope: o, open: w, disabled: g, triggerId: P, children: e.jsx(xt, __spreadProps(__spreadValues(__spreadValues({ "data-orientation": x.orientation, "data-state": wr(w) }, f), m), { ref: i, disabled: g, open: w, onOpenChange: (R) => {
    R ? h.onItemOpen(d) : h.onItemClose(d);
  } })) });
});
jr.displayName = ss;
var fr = "AccordionHeader", yr = de.forwardRef((n, i) => {
  const _a = n, { __scopeAccordion: o } = _a, d = __objRest(_a, ["__scopeAccordion"]), m = os(Se, o), x = Rs(fr, o);
  return e.jsx(nr.h3, __spreadProps(__spreadValues({ "data-orientation": m.orientation, "data-state": wr(x.open), "data-disabled": x.disabled ? "" : void 0 }, d), { ref: i }));
});
yr.displayName = fr;
var Ns = "AccordionTrigger", vr = de.forwardRef((n, i) => {
  const _a = n, { __scopeAccordion: o } = _a, d = __objRest(_a, ["__scopeAccordion"]), m = os(Se, o), x = Rs(Ns, o), h = qt(Ns, o), f = Ds(o);
  return e.jsx(Ts.ItemSlot, { scope: o, children: e.jsx(ht, __spreadProps(__spreadValues(__spreadValues({ "aria-disabled": x.open && !h.collapsible || void 0, "data-orientation": m.orientation, id: x.triggerId }, f), d), { ref: i })) });
});
vr.displayName = Ns;
var br = "AccordionContent", Nr = de.forwardRef((n, i) => {
  const _a = n, { __scopeAccordion: o } = _a, d = __objRest(_a, ["__scopeAccordion"]), m = os(Se, o), x = Rs(br, o), h = Ds(o);
  return e.jsx(pt, __spreadProps(__spreadValues(__spreadValues({ role: "region", "aria-labelledby": x.triggerId, "data-orientation": m.orientation }, h), d), { ref: i, style: __spreadValues({ "--radix-accordion-content-height": "var(--radix-collapsible-content-height)", "--radix-accordion-content-width": "var(--radix-collapsible-content-width)" }, n.style) }));
});
Nr.displayName = br;
function wr(n) {
  return n ? "open" : "closed";
}
var Qt = xr, Wt = jr, Yt = yr, Cr = vr, Sr = Nr;
const Gt = Qt, Ar = p.forwardRef((_a, o) => {
  var _b = _a, { className: n } = _b, i = __objRest(_b, ["className"]);
  return e.jsx(Wt, __spreadValues({ ref: o, className: Cs("border-b", n) }, i));
});
Ar.displayName = "AccordionItem";
const Ir = p.forwardRef((_c, d) => {
  var _d = _c, { className: n, children: i } = _d, o = __objRest(_d, ["className", "children"]);
  return e.jsx(Yt, { className: "flex", children: e.jsxs(Cr, __spreadProps(__spreadValues({ ref: d, className: Cs("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", n) }, o), { children: [i, e.jsx(jt, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })] })) });
});
Ir.displayName = Cr.displayName;
const Pr = p.forwardRef((_e2, d) => {
  var _f = _e2, { className: n, children: i } = _f, o = __objRest(_f, ["className", "children"]);
  return e.jsx(Sr, __spreadProps(__spreadValues({ ref: d, className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, o), { children: e.jsx("div", { className: Cs("pb-4 pt-0", n), children: i }) }));
});
Pr.displayName = Sr.displayName;
function Xt({ outlet: n, open: i, onOpenChange: o }) {
  const { toast: d } = rs(), m = ts(), [x, h] = p.useState(false), [f, P] = p.useState([]), [w, g] = p.useState(5), [R, O] = p.useState(true), [y, H] = p.useState("\u26A0\uFE0F Order has not been accepted within SLA threshold"), [ee, X] = p.useState(true), [J, V] = p.useState(true), { data: q, isLoading: v } = pe({ queryKey: [`/api/admin/outlets/${n.id}/notification-config`], queryFn: ir({ on401: "throw" }), enabled: i });
  p.useEffect(() => {
    q && (h(q.isEnabled), P(q.webhooks || []), g(q.slaThresholdMinutes), O(q.slaReminderEnabled), H(q.slaReminderMessage), X(q.notifyOnOrderConfirmed), V(q.notifyOnSlaBreach));
  }, [q]);
  const Z = he({ mutationFn: (k) => __async(null, null, function* () {
    return yield le("POST", `/api/admin/outlets/${n.id}/notification-config`, k);
  }), onSuccess: () => {
    m.invalidateQueries({ queryKey: [`/api/admin/outlets/${n.id}/notification-config`] }), d({ title: "Configuration saved", description: "Notification settings have been updated successfully." }), o(false);
  }, onError: (k) => {
    d({ title: "Error", description: k.message || "Failed to save configuration", variant: "destructive" });
  } }), a = () => {
    P([...f, { platform: "slack", webhookUrl: "", name: "" }]);
  }, l = (k) => {
    P(f.filter((r, c) => c !== k));
  }, L = (k, r, c) => {
    const S = [...f];
    S[k] = __spreadProps(__spreadValues({}, S[k]), { [r]: c }), P(S);
  }, Q = () => {
    const k = f.filter((r) => r.webhookUrl.trim() !== "");
    if (x && k.length === 0) {
      d({ title: "Validation Error", description: "Please add at least one webhook URL when notifications are enabled.", variant: "destructive" });
      return;
    }
    for (const r of k) try {
      new URL(r.webhookUrl);
    } catch (e2) {
      d({ title: "Validation Error", description: `Invalid webhook URL: ${r.webhookUrl}`, variant: "destructive" });
      return;
    }
    Z.mutate({ isEnabled: x, webhooks: k, slaThresholdMinutes: w, slaReminderEnabled: R, slaReminderMessage: y, notifyOnOrderConfirmed: ee, notifyOnSlaBreach: J });
  };
  return e.jsx($e, { open: i, onOpenChange: o, children: e.jsxs(_e, { className: "max-w-3xl max-h-[90vh] overflow-y-auto", children: [e.jsxs(Ve, { children: [e.jsxs(qe, { className: "flex items-center gap-2", children: [x ? e.jsx(Zr, { className: "h-5 w-5" }) : e.jsx(wt, { className: "h-5 w-5" }), "Configure Notifications - ", n.name] }), e.jsx(Ss, { children: "Set up webhook notifications for order events and SLA reminders" })] }), v ? e.jsx("div", { className: "py-8 text-center text-gray-500", children: "Loading configuration..." }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between p-4 border rounded-lg", children: [e.jsxs("div", { children: [e.jsx(fe, { htmlFor: "enabled", className: "text-base font-semibold", children: "Enable Notifications" }), e.jsx("p", { className: "text-sm text-gray-500 mt-1", children: "Turn on webhook notifications for this outlet" })] }), e.jsx(vs, { id: "enabled", checked: x, onCheckedChange: h })] }), e.jsxs(Y, { children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg", children: "Webhook URLs" }), e.jsx(we, { children: "Add webhook endpoints to receive order notifications" })] }), e.jsxs(G, { className: "space-y-4", children: [f.map((k, r) => e.jsxs("div", { className: "p-4 border rounded-lg space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(Ae, { variant: "outline", children: k.platform }), e.jsx(b, { variant: "ghost", size: "sm", onClick: () => l(r), children: e.jsx(is, { className: "h-4 w-4" }) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(fe, { children: "Platform" }), e.jsxs(ye, { value: k.platform, onValueChange: (c) => L(r, "platform", c), children: [e.jsx(ve, { children: e.jsx(be, {}) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "slack", children: "Slack" }), e.jsx(z, { value: "google_chat", children: "Google Chat" }), e.jsx(z, { value: "other", children: "Other" })] })] })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(fe, { children: "Webhook URL" }), e.jsx(oe, { type: "url", placeholder: "https://hooks.slack.com/services/...", value: k.webhookUrl, onChange: (c) => L(r, "webhookUrl", c.target.value) })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(fe, { children: "Name (Optional)" }), e.jsx(oe, { placeholder: "e.g., Main Slack Channel", value: k.name || "", onChange: (c) => L(r, "name", c.target.value) })] })] }, r)), e.jsxs(b, { variant: "outline", onClick: a, className: "w-full", children: [e.jsx(De, { className: "h-4 w-4 mr-2" }), "Add Webhook"] })] })] }), e.jsxs(Y, { children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg", children: "Notification Triggers" }), e.jsx(we, { children: "Choose when to send notifications" })] }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ue, { id: "notify-confirmed", checked: ee, onCheckedChange: (k) => X(k) }), e.jsx(fe, { htmlFor: "notify-confirmed", className: "cursor-pointer", children: "Send notification when order is confirmed" })] }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ue, { id: "notify-sla", checked: J, onCheckedChange: (k) => V(k) }), e.jsx(fe, { htmlFor: "notify-sla", className: "cursor-pointer", children: "Send notification when SLA threshold is breached" })] })] })] }), e.jsxs(Y, { children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg", children: "SLA Reminder Settings" }), e.jsx(we, { children: "Configure reminders for unaccepted orders" })] }), e.jsxs(G, { className: "space-y-4", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(fe, { htmlFor: "sla-enabled", children: "Enable SLA Reminders" }), e.jsx(vs, { id: "sla-enabled", checked: R, onCheckedChange: O })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(fe, { htmlFor: "sla-threshold", children: "SLA Threshold (minutes)" }), e.jsx(Ce, { id: "sla-threshold", category: "integer", min: 1, max: 120, value: w, onChange: (k) => g(Math.max(1, k != null ? k : 5)) }), e.jsx("p", { className: "text-sm text-gray-500", children: "Send reminder if order is not accepted within this time" })] }), e.jsxs("div", { className: "space-y-2", children: [e.jsx(fe, { htmlFor: "sla-message", children: "Reminder Message" }), e.jsx(ns, { id: "sla-message", value: y, onChange: (k) => H(k.target.value), rows: 3 })] })] })] }), e.jsxs("div", { className: "flex justify-end gap-2 pt-4", children: [e.jsx(b, { variant: "outline", onClick: () => o(false), children: "Cancel" }), e.jsx(b, { onClick: Q, disabled: Z.isPending, children: Z.isPending ? "Saving..." : "Save Configuration" })] })] })] }) });
}
function ue(n) {
  if (n === false) return false;
  if (n === true || n == null) return true;
  if (typeof n == "number") return n !== 0;
  if (typeof n == "string") {
    const i = n.trim().toLowerCase();
    if (i === "false" || i === "f" || i === "0" || i === "no" || i === "inactive") return false;
    if (i === "true" || i === "t" || i === "1" || i === "yes" || i === "active") return true;
  }
  return !!n;
}
const Jt = yt.extend({ address: u.string().min(1, "Address is required"), latitude: u.string().min(1, "Latitude is required"), longitude: u.string().min(1, "Longitude is required"), email: u.string().email("Valid email is required").optional().or(u.literal("")), phone: u.string().optional().or(u.literal("")), openTime: u.string().optional().or(u.literal("")), closeTime: u.string().optional().or(u.literal("")), daysOpen: u.array(u.string()).optional(), brandIds: u.array(u.number().int().positive()).min(1, "Select at least one brand") });
function Zt() {
  const [n, i] = p.useState(false), [o, d] = p.useState(null), [m, x] = p.useState(null), [h, f] = p.useState(null), { toast: P } = rs(), w = ts(), { selectedBrandId: g, brands: R, isLoading: O } = as(), y = Ps({ resolver: Os(Jt), defaultValues: { name: "", address: "", latitude: "", longitude: "", email: "", phone: "", openTime: "08:00", closeTime: "22:00", daysOpen: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], deliveryRadius: 10, isActive: true, brandId: void 0, brandIds: [] } });
  p.useEffect(() => {
    if (g) {
      const r = y.getValues("brandIds");
      r != null && r.length || y.setValue("brandIds", [g]);
    }
  }, [g, y]);
  const { data: H = [], isLoading: ee } = pe({ queryKey: ["/api/admin/outlets", { brandId: g }], queryFn: ir({ on401: "throw" }), enabled: !!g, staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), X = he({ mutationFn: (r) => __async(null, null, function* () {
    return yield le("POST", "/api/admin/outlets", __spreadProps(__spreadValues({}, r), { brandIds: r.brandIds }));
  }), onSuccess: () => {
    w.invalidateQueries({ queryKey: ["/api/admin/outlets"] }), w.invalidateQueries({ queryKey: ["/api/outlets"] }), w.invalidateQueries({ predicate: (r) => r.queryKey.some((c) => typeof c == "string" && c.includes("outlets")) }), i(false), d(null), y.reset(), P({ title: "Success", description: "Outlet created successfully" });
  }, onError: () => {
    P({ title: "Error", description: "Failed to create outlet", variant: "destructive" });
  } }), J = he({ mutationFn: (r) => __async(null, null, function* () {
    if (!o) throw new Error("No outlet selected for editing");
    return yield le("PUT", `/api/admin/outlets/${o.id}`, __spreadProps(__spreadValues({}, r), { brandIds: r.brandIds }));
  }), onSuccess: () => {
    w.invalidateQueries({ queryKey: ["/api/admin/outlets"] }), w.invalidateQueries({ queryKey: ["/api/outlets"] }), w.invalidateQueries({ predicate: (r) => r.queryKey.some((c) => typeof c == "string" && c.includes("outlets")) }), i(false), d(null), y.reset(), P({ title: "Success", description: "Outlet updated successfully" });
  }, onError: () => {
    P({ title: "Error", description: "Failed to update outlet", variant: "destructive" });
  } }), V = (r) => {
    o ? J.mutate(r) : X.mutate(r);
  }, q = (r) => __async(null, null, function* () {
    d(r), y.reset({ name: r.name, address: r.address, latitude: typeof r.latitude == "string" ? r.latitude : String(r.latitude), longitude: typeof r.longitude == "string" ? r.longitude : String(r.longitude), email: r.email || "", phone: r.phone || "", openTime: r.openTime || "08:00", closeTime: r.closeTime || "22:00", daysOpen: r.daysOpen || ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], deliveryRadius: r.deliveryRadius, isActive: r.isActive, brandId: r.brandId || void 0, brandIds: r.brandId ? [r.brandId] : g ? [g] : [] });
    try {
      const c = yield le("GET", `/api/admin/outlets/${r.id}/brands`);
      if (c.ok) {
        const S = yield c.json();
        Array.isArray(S == null ? void 0 : S.brandIds) && S.brandIds.length > 0 && y.setValue("brandIds", S.brandIds);
      }
    } catch (e2) {
    }
    i(true);
  }), v = (r) => {
    x(r);
  }, Z = he({ mutationFn: (r) => __async(null, null, function* () {
    const S = !ue(r.isActive);
    return (yield le("PUT", `/api/admin/outlets/${r.id}`, { isActive: S })).json();
  }), onMutate: (r) => __async(null, null, function* () {
    yield w.cancelQueries({ predicate: (M) => Array.isArray(M.queryKey) && typeof M.queryKey[0] == "string" && (M.queryKey[0].includes("/api/admin/outlets") || M.queryKey[0].includes("/api/outlets")) });
    const c = w.getQueriesData({ predicate: (M) => Array.isArray(M.queryKey) && typeof M.queryKey[0] == "string" && (M.queryKey[0].includes("/api/admin/outlets") || M.queryKey[0].includes("/api/outlets")) }), ne = !ue(r.isActive), U = (M) => Array.isArray(M) ? M.map((me) => Number(me == null ? void 0 : me.id) === Number(r.id) ? __spreadProps(__spreadValues({}, me), { isActive: ne }) : me) : M;
    for (const [M, me] of c) w.setQueryData(M, U(me));
    return { previousData: c };
  }), onSuccess: (r) => {
    const c = (U) => Array.isArray(U) ? U.map((M) => Number(M == null ? void 0 : M.id) === Number(r.id) ? __spreadValues(__spreadValues({}, M), r) : M) : U, S = w.getQueriesData({ predicate: (U) => Array.isArray(U.queryKey) && typeof U.queryKey[0] == "string" && (U.queryKey[0].includes("/api/admin/outlets") || U.queryKey[0].includes("/api/outlets")) });
    for (const [U, M] of S) w.setQueryData(U, c(M));
    w.refetchQueries({ predicate: (U) => Array.isArray(U.queryKey) && typeof U.queryKey[0] == "string" && (U.queryKey[0].includes("/api/admin/outlets") || U.queryKey[0].includes("/api/outlets")), type: "active" });
    const ne = ue(r.isActive) ? "open" : "close";
    P({ title: "Success", description: `Outlet ${ne}ed successfully` }), x(null);
  }, onError: (r, c, S) => {
    if (S != null && S.previousData) for (const [M, me] of S.previousData) w.setQueryData(M, me);
    const U = ue(c.isActive) ? "close" : "open";
    P({ title: "Error", description: r instanceof Error ? r.message : `Failed to ${U} outlet`, variant: "destructive" });
  } }), a = () => {
    m && Z.mutate(m);
  }, l = he({ mutationFn: (r) => __async(null, null, function* () {
    const c = yield le("DELETE", `/api/admin/outlets/${r}`);
    if (!c.ok) {
      const S = yield c.json().catch(() => ({ message: "Failed to delete outlet" }));
      throw new Error(S.message || "Failed to delete outlet");
    }
    return c;
  }), onSuccess: () => {
    w.invalidateQueries({ queryKey: ["/api/admin/outlets"] }), w.invalidateQueries({ queryKey: ["/api/outlets"] }), w.invalidateQueries({ predicate: (r) => r.queryKey.some((c) => typeof c == "string" && c.includes("outlets")) }), P({ title: "Success", description: "Outlet deleted successfully" });
  }, onError: (r) => {
    P({ title: "Error", description: r.message || "Failed to delete outlet", variant: "destructive" });
  } }), L = (r) => {
    confirm("Are you sure you want to delete this outlet?") && l.mutate(r);
  }, Q = () => {
    d(null), y.reset({ name: "", address: "", latitude: "", longitude: "", email: "", phone: "", openTime: "08:00", closeTime: "22:00", daysOpen: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], deliveryRadius: 10, isActive: true, brandId: void 0, brandIds: g ? [g] : [] }), i(true);
  };
  return ee || O ? e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsx("h2", { className: "text-3xl font-bold", children: "Outlets" }) }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [...Array(6)].map((r, c) => e.jsxs(Y, { className: "animate-pulse", children: [e.jsxs(re, { children: [e.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-1/2" })] }), e.jsx(G, { children: e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "h-3 bg-gray-200 rounded" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-2/3" })] }) })] }, c)) })] }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-3xl font-bold", children: "Outlets" }), e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Manage restaurant locations and delivery zones" })] }), e.jsx("div", { className: "flex items-center gap-3", children: e.jsxs($e, { open: n, onOpenChange: i, children: [e.jsx(As, { asChild: true, children: e.jsxs(b, { onClick: Q, disabled: !g, children: [e.jsx(De, { className: "h-4 w-4 mr-2" }), "Add Outlet"] }) }), e.jsxs(_e, { className: "max-w-md max-h-[85vh] overflow-y-auto", children: [e.jsxs(Ve, { children: [e.jsx(qe, { children: o ? "Edit Outlet" : "Add New Outlet" }), e.jsx(Ss, { children: o ? "Update outlet information and delivery settings" : "Create a new outlet location for order fulfillment" })] }), e.jsx(Is, __spreadProps(__spreadValues({}, y), { children: e.jsxs("form", { onSubmit: y.handleSubmit(V), className: "space-y-4", children: [e.jsx(A, { control: y.control, name: "brandIds", render: ({ field: r }) => e.jsxs(I, { children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsx(C, { children: "Brands" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(b, { type: "button", size: "sm", variant: "outline", disabled: O || !(R != null && R.length), onClick: () => r.onChange(R.map((c) => c.id)), children: "Select all" }), e.jsx(b, { type: "button", size: "sm", variant: "ghost", disabled: O || !(R != null && R.length), onClick: () => r.onChange([]), children: "Clear" })] })] }), e.jsx("div", { className: "border rounded-md p-2 max-h-28 overflow-auto space-y-1", children: O ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "Loading brands\u2026" }) : R != null && R.length ? R.map((c) => e.jsxs("label", { className: "flex items-center gap-2 text-sm", children: [e.jsx("input", { type: "checkbox", checked: Array.isArray(r.value) && r.value.includes(c.id), onChange: (S) => {
    const ne = Array.isArray(r.value) ? r.value : [];
    S.target.checked ? r.onChange(Array.from(/* @__PURE__ */ new Set([...ne, c.id]))) : r.onChange(ne.filter((U) => U !== c.id));
  } }), e.jsx("span", { children: c.name })] }, c.id)) : e.jsx("p", { className: "text-sm text-muted-foreground", children: "No brands available." }) }), e.jsx(D, {})] }) }), e.jsx(A, { control: y.control, name: "name", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Outlet Name" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "Downtown Kitchen" }, r)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: y.control, name: "address", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Address" }), e.jsx(E, { children: e.jsx(ns, __spreadValues({ placeholder: "123 Main Street, City, State", className: "min-h-[60px]" }, r)) }), e.jsx(D, {})] }) }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(A, { control: y.control, name: "latitude", render: ({ field: r }) => {
    var _a;
    return e.jsxs(I, { children: [e.jsx(C, { children: "Latitude" }), e.jsx(E, { children: e.jsx(Ce, { category: "factor", decimalPlaces: 6, allowNegative: true, placeholder: "6.5244", value: (_a = r.value) != null ? _a : "", onChange: (c) => r.onChange(c === null ? "" : String(c)) }) }), e.jsx(D, {})] });
  } }), e.jsx(A, { control: y.control, name: "longitude", render: ({ field: r }) => {
    var _a;
    return e.jsxs(I, { children: [e.jsx(C, { children: "Longitude" }), e.jsx(E, { children: e.jsx(Ce, { category: "factor", decimalPlaces: 6, allowNegative: true, placeholder: "3.3792", value: (_a = r.value) != null ? _a : "", onChange: (c) => r.onChange(c === null ? "" : String(c)) }) }), e.jsx(D, {})] });
  } })] }), e.jsx(Gt, { type: "single", collapsible: true, children: e.jsxs(Ar, { value: "advanced", children: [e.jsx(Ir, { children: "Advanced settings" }), e.jsxs(Pr, { className: "space-y-4 max-h-[45vh] overflow-y-auto pr-1", children: [e.jsx(A, { control: y.control, name: "deliveryRadius", render: ({ field: r }) => {
    var _a;
    return e.jsxs(I, { children: [e.jsx(C, { children: "Delivery Radius (km)" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 1, placeholder: "10", value: (_a = r.value) != null ? _a : "", onChange: (c) => r.onChange(c != null ? c : 10) }) }), e.jsx(D, {})] });
  } }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(A, { control: y.control, name: "email", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Email" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "outlet@yum.ng", type: "email" }, r)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: y.control, name: "phone", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Phone" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "+234 123 456 7890" }, r)) }), e.jsx(D, {})] }) })] }), e.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [e.jsx(A, { control: y.control, name: "openTime", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Opening Time" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ type: "time" }, r)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: y.control, name: "closeTime", render: ({ field: r }) => e.jsxs(I, { children: [e.jsx(C, { children: "Closing Time" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ type: "time" }, r)) }), e.jsx(D, {})] }) })] }), e.jsx(A, { control: y.control, name: "daysOpen", render: () => e.jsxs(I, { children: [e.jsx(C, { children: "Days Open" }), e.jsx("div", { className: "grid grid-cols-2 gap-2", children: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((r) => e.jsx(A, { control: y.control, name: "daysOpen", render: ({ field: c }) => {
    var S;
    return e.jsxs(I, { className: "flex flex-row items-start space-x-3 space-y-0", children: [e.jsx(E, { children: e.jsx(Ue, { checked: (S = c.value) == null ? void 0 : S.includes(r), onCheckedChange: (ne) => {
      var U;
      return ne ? c.onChange([...c.value || [], r]) : c.onChange((U = c.value || []) == null ? void 0 : U.filter((M) => M !== r));
    } }) }), e.jsx(C, { className: "text-sm font-normal capitalize", children: r })] }, r);
  } }, r)) }), e.jsx(D, {})] }) })] })] }) }), e.jsxs("div", { className: "flex justify-end space-x-2 pt-4", children: [e.jsx(b, { type: "button", variant: "outline", onClick: () => i(false), children: "Cancel" }), e.jsx(b, { type: "submit", disabled: X.isPending || J.isPending, children: X.isPending || J.isPending ? "Saving..." : `${o ? "Update" : "Create"} Outlet` })] })] }) }))] })] }) })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: H.map((r) => e.jsxs(Y, { className: "hover:shadow-lg transition-shadow overflow-hidden", children: [e.jsx(re, { className: "pb-3", children: e.jsxs("div", { className: "flex items-start justify-between gap-2", children: [e.jsxs("div", { className: "flex-1 min-w-0", children: [e.jsxs(xe, { className: "flex items-center gap-2 flex-wrap", children: [e.jsx("span", { className: "truncate", children: r.name }), (() => {
    const c = ue(r.isActive);
    return c ? Nt({ openTime: r.openTime || "", closeTime: r.closeTime || "", daysOpen: r.daysOpen || [], isActive: c }) ? e.jsx(Ae, { variant: "default", className: "text-xs bg-green-600 shrink-0", children: "Open" }) : e.jsx(Ae, { variant: "destructive", className: "text-xs shrink-0", children: "Closed" }) : e.jsx(Ae, { variant: "secondary", className: "text-xs shrink-0", children: "Inactive" });
  })()] }), e.jsxs(we, { className: "flex items-start gap-1 mt-1", children: [e.jsx(bs, { className: "h-3 w-3 shrink-0 mt-0.5" }), e.jsx("span", { className: "break-words line-clamp-2", children: r.address })] })] }), e.jsxs("div", { className: "flex space-x-1 shrink-0", children: [e.jsx(b, { variant: "ghost", size: "sm", onClick: () => v(r), className: ue(r.isActive) ? "text-green-600 hover:text-green-700" : "text-gray-400 hover:text-gray-600", title: ue(r.isActive) ? "Close outlet" : "Open outlet", children: ue(r.isActive) ? e.jsx(Mt, { className: "h-4 w-4" }) : e.jsx(Et, { className: "h-4 w-4" }) }), e.jsx(b, { variant: "ghost", size: "sm", onClick: () => f(r), title: "Configure notifications", children: e.jsx(tt, { className: "h-4 w-4" }) }), e.jsx(b, { variant: "ghost", size: "sm", onClick: () => q(r), children: e.jsx(ks, { className: "h-4 w-4" }) }), e.jsx(b, { variant: "ghost", size: "sm", onClick: () => L(r.id), children: e.jsx(is, { className: "h-4 w-4" }) })] })] }) }), e.jsx(G, { className: "pt-3", children: e.jsxs("div", { className: "space-y-2 text-sm", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsx("span", { className: "text-gray-500 shrink-0", children: "Delivery Radius:" }), e.jsxs("span", { className: "font-medium", children: [r.deliveryRadius, " km"] })] }), r.email && e.jsxs("div", { className: "flex items-start gap-1", children: [e.jsx(Ct, { className: "h-3 w-3 text-gray-400 shrink-0 mt-0.5" }), e.jsx("span", { className: "text-xs break-all", children: r.email })] }), r.phone && e.jsxs("div", { className: "flex items-start gap-1", children: [e.jsx(St, { className: "h-3 w-3 text-gray-400 shrink-0 mt-0.5" }), e.jsx("span", { className: "text-xs break-all", children: r.phone })] }), r.openTime && r.closeTime && e.jsxs("div", { className: "flex items-start gap-1", children: [e.jsx(cr, { className: "h-3 w-3 text-gray-400 shrink-0 mt-0.5" }), e.jsxs("span", { className: "text-xs", children: [r.openTime, " - ", r.closeTime] })] }), r.daysOpen && Array.isArray(r.daysOpen) && r.daysOpen.length > 0 && e.jsxs("div", { className: "text-xs text-gray-500 break-words", children: [e.jsx("span", { className: "font-medium", children: "Days:" }), " ", r.daysOpen.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")] }), e.jsx("div", { className: "text-xs text-gray-400 mt-2 break-all", children: (() => {
    const c = typeof r.latitude == "number" ? r.latitude : parseFloat(r.latitude), S = typeof r.longitude == "number" ? r.longitude : parseFloat(r.longitude);
    return `${c.toFixed(4)}, ${S.toFixed(4)}`;
  })() })] }) })] }, r.id)) }), H.length === 0 && e.jsx(Y, { className: "text-center py-12", children: e.jsxs(G, { children: [e.jsx(bs, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), e.jsx("h3", { className: "text-lg font-semibold mb-2", children: "No outlets found" }), e.jsx("p", { className: "text-gray-500 mb-4", children: "Get started by adding your first restaurant outlet" }), e.jsxs(b, { onClick: Q, children: [e.jsx(De, { className: "h-4 w-4 mr-2" }), "Add First Outlet"] })] }) }), e.jsx(nt, { open: !!m, onOpenChange: () => x(null), children: e.jsxs(it, { children: [e.jsxs(lt, { children: [e.jsx(ot, { children: m && ue(m.isActive) ? "Close Outlet" : "Open Outlet" }), e.jsx(ct, { children: m ? ue(m.isActive) ? `Are you sure you want to close "${m.name}"? Customers will not be able to place orders from this outlet.` : `Are you sure you want to open "${m.name}"?` : "" })] }), e.jsxs(dt, { children: [e.jsx(mt, { children: "Cancel" }), e.jsx(ut, { onClick: a, children: m && ue(m.isActive) ? "Close" : "Open" })] })] }) }), h && e.jsx(Xt, { outlet: h, open: !!h, onOpenChange: (r) => !r && f(null) })] });
}
const ea = vt.extend({ name: u.string().min(1, "Category name is required"), slug: u.string().min(1, "Slug is required"), sortOrder: u.number().min(0, "Sort order must be 0 or higher").default(0), brandId: u.number().min(1, "Brand is required"), imageUrl: u.string().trim().url("Enter a valid image URL").optional().or(u.literal("")), orderAvailabilityMode: u.enum(["both", "instant_only", "preorder_only"]).default("both"), preorderLeadTimeHours: u.number().int().min(1).nullable().optional() });
function sa() {
  const [n, i] = p.useState(false), [o, d] = p.useState(null), { toast: m } = rs(), x = ts(), { selectedBrandId: h, isLoading: f } = as(), { data: P = [], isLoading: w } = pe({ queryKey: ["/api/admin/categories", { brandId: h }], enabled: !!h }), g = Ps({ resolver: Os(ea), defaultValues: { name: "", slug: "", description: "", isActive: true, sortOrder: 0, brandId: 0, imageUrl: "", orderAvailabilityMode: "both", preorderLeadTimeHours: null } });
  p.useEffect(() => {
    h && g.setValue("brandId", h);
  }, [h, g]);
  const R = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""), O = { onSuccess: () => {
    x.invalidateQueries({ queryKey: ["/api/admin/categories"] }), i(false), d(null), g.reset();
  }, onError: (a) => {
    m({ title: "Error", description: a.message, variant: "destructive" });
  } }, y = he(__spreadProps(__spreadValues({ mutationFn: (a) => le("POST", "/api/admin/categories", a) }, O), { onSuccess: () => {
    O.onSuccess(), m({ title: "Success", description: "Category created successfully" });
  } })), H = he(__spreadProps(__spreadValues({ mutationFn: (a) => le("PUT", `/api/admin/categories/${o == null ? void 0 : o.id}`, a) }, O), { onSuccess: () => {
    O.onSuccess(), m({ title: "Success", description: "Category updated successfully" });
  } })), ee = he(__spreadProps(__spreadValues({ mutationFn: (a) => le("DELETE", `/api/admin/categories/${a}`) }, O), { onSuccess: () => {
    O.onSuccess(), m({ title: "Success", description: "Category deleted successfully" });
  } })), X = (a) => {
    const l = __spreadProps(__spreadValues({}, a), { name: a.name.trim(), slug: a.slug.trim(), imageUrl: (a.imageUrl || "").trim(), brandId: a.brandId || h || 0 });
    o ? H.mutate(l) : y.mutate(l);
  }, J = (a) => {
    d(a), g.reset({ name: a.name, slug: a.slug, description: a.description || "", isActive: a.isActive, sortOrder: a.sortOrder || 0, brandId: a.brandId || h || 0, imageUrl: a.imageUrl || "", orderAvailabilityMode: a.orderAvailabilityMode || "both", preorderLeadTimeHours: a.preorderLeadTimeHours || null }), i(true);
  }, V = (a) => {
    confirm("Are you sure you want to delete this category? This will affect all products in this category.") && ee.mutate(a);
  }, q = () => {
    d(null), g.reset({ name: "", slug: "", description: "", isActive: true, sortOrder: 0, brandId: h || 0, imageUrl: "", orderAvailabilityMode: "both", preorderLeadTimeHours: null }), i(true);
  }, v = (a) => {
    const l = R(a);
    g.setValue("name", a), g.setValue("slug", l);
  };
  return w || f ? e.jsxs("div", { className: "space-y-6", children: [e.jsx("div", { className: "flex items-center justify-between", children: e.jsx("h2", { className: "text-3xl font-bold", children: "Categories" }) }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [...Array(6)].map((a, l) => e.jsxs(Y, { className: "animate-pulse", children: [e.jsxs(re, { children: [e.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-1/2" })] }), e.jsx(G, { children: e.jsx("div", { className: "h-3 bg-gray-200 rounded" }) })] }, l)) })] }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex items-center justify-between gap-4 flex-wrap", children: [e.jsxs("div", { children: [e.jsx("h2", { className: "text-3xl font-bold", children: "Categories" }), e.jsx("p", { className: "text-gray-500 dark:text-gray-400", children: "Organize menu items into categories for better customer navigation" })] }), e.jsx("div", { className: "flex items-center gap-3", children: e.jsxs($e, { open: n, onOpenChange: i, children: [e.jsx(As, { asChild: true, children: e.jsxs(b, { onClick: q, disabled: !h, children: [e.jsx(De, { className: "h-4 w-4 mr-2" }), "Add Category"] }) }), e.jsxs(_e, { className: "max-w-md max-h-[80vh] overflow-y-auto", children: [e.jsxs(Ve, { children: [e.jsx(qe, { children: o ? "Edit Category" : "Add New Category" }), e.jsx(Ss, { children: o ? "Update category information and settings" : "Create a new category to organize menu items" })] }), e.jsx(Is, __spreadProps(__spreadValues({}, g), { children: e.jsxs("form", { onSubmit: g.handleSubmit(X), className: "space-y-4", children: [e.jsx(A, { control: g.control, name: "name", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "Category Name" }), e.jsx(E, { children: e.jsx(oe, __spreadProps(__spreadValues({ placeholder: "Bowls, Grills, Drinks..." }, a), { onChange: (l) => v(l.target.value) })) }), e.jsx(D, {})] }) }), e.jsx(A, { control: g.control, name: "slug", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "URL Slug" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "bowls, grills, drinks..." }, a)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: g.control, name: "description", render: ({ field: a }) => {
    var _a;
    return e.jsxs(I, { children: [e.jsx(C, { children: "Description (Optional)" }), e.jsx(E, { children: e.jsx(ns, __spreadProps(__spreadValues({ placeholder: "Brief description of this category...", className: "min-h-[60px]" }, a), { value: (_a = a.value) != null ? _a : "" })) }), e.jsx(D, {})] });
  } }), e.jsx(A, { control: g.control, name: "imageUrl", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "Category Image (Optional)" }), e.jsx(Fe, { children: "Add an image for brands that need category tiles (e.g. YumBulk). Leave empty for brands that list categories without images." }), e.jsx(E, { children: e.jsx(dr, { value: a.value || "", onChange: a.onChange, accept: "image/*", folder: "categories" }) }), e.jsx(D, {})] }) }), e.jsx(A, { control: g.control, name: "orderAvailabilityMode", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "Order Availability" }), e.jsxs(ye, { onValueChange: a.onChange, value: a.value || "both", children: [e.jsx(E, { children: e.jsx(ve, { children: e.jsx(be, { placeholder: "Select order availability" }) }) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "both", children: "Both (Instant & Pre-Order)" }), e.jsx(z, { value: "instant_only", children: "Instant Order Only" }), e.jsx(z, { value: "preorder_only", children: "Pre-Order Only" })] })] }), e.jsx(Fe, { children: "Controls how products in this category can be ordered. Products can override this setting individually." }), e.jsx(D, {})] }) }), g.watch("orderAvailabilityMode") === "preorder_only" && e.jsx(A, { control: g.control, name: "preorderLeadTimeHours", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "Minimum Lead Time (hours)" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 1, placeholder: "24", value: a.value || 24, onChange: (l) => a.onChange(l != null ? l : null) }) }), e.jsx(Fe, { children: "Minimum hours of advance notice required for pre-orders (default: 24 hours)" }), e.jsx(D, {})] }) }), e.jsx(A, { control: g.control, name: "sortOrder", render: ({ field: a }) => e.jsxs(I, { children: [e.jsx(C, { children: "Sort Order" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 0, placeholder: "0", value: a.value || 0, onChange: (l) => a.onChange(l != null ? l : 0) }) }), e.jsx(Fe, { children: "Lower numbers appear first. Other categories will be moved down automatically." }), e.jsx(D, {})] }) }), e.jsxs("div", { className: "flex justify-end space-x-2 pt-4", children: [e.jsx(b, { type: "button", variant: "outline", onClick: () => i(false), children: "Cancel" }), e.jsx(b, { type: "submit", disabled: y.isPending || H.isPending, children: y.isPending || H.isPending ? "Saving..." : (o ? "Update" : "Create") + " Category" })] })] }) }))] })] }) })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: P.map((a) => e.jsxs(Y, { children: [e.jsx(re, { children: e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { children: [e.jsxs(xe, { className: "flex items-center gap-2", children: [e.jsxs("span", { className: "text-sm text-gray-500 font-normal", children: ["#", a.sortOrder] }), a.name] }), e.jsxs(we, { children: ["/", a.slug] })] }), e.jsx(Ae, { variant: a.isActive ? "default" : "secondary", children: a.isActive ? "Active" : "Inactive" }), a.orderAvailabilityMode === "preorder_only" && e.jsx(Ae, { variant: "outline", className: "ml-1 text-orange-600 border-orange-300", children: "Pre-Order Only" }), a.orderAvailabilityMode === "instant_only" && e.jsx(Ae, { variant: "outline", className: "ml-1 text-blue-600 border-blue-300", children: "Instant Only" })] }) }), e.jsxs(G, { children: [a.imageUrl && e.jsx("div", { className: "mb-4 overflow-hidden rounded-md border bg-gray-50", children: e.jsx("img", { src: a.imageUrl, alt: `${a.name} category artwork`, className: "h-36 w-full object-cover" }) }), a.description && e.jsx("p", { className: "text-sm text-gray-600 dark:text-gray-300 mb-4", children: a.description }), e.jsxs("div", { className: "flex space-x-2", children: [e.jsxs(b, { variant: "outline", size: "sm", onClick: () => J(a), children: [e.jsx(ks, { className: "h-4 w-4 mr-1" }), "Edit"] }), e.jsxs(b, { variant: "outline", size: "sm", onClick: () => V(a.id), disabled: ee.isPending, children: [e.jsx(is, { className: "h-4 w-4 mr-1" }), "Delete"] })] })] })] }, a.id)) }), P.length === 0 && e.jsx(Y, { className: "text-center py-12", children: e.jsxs(G, { children: [e.jsx(Be, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), e.jsx("h3", { className: "text-lg font-semibold mb-2", children: "No categories found" }), e.jsx("p", { className: "text-gray-500 mb-4", children: "Create categories to organize your menu items" }), e.jsxs(b, { onClick: q, children: [e.jsx(De, { className: "h-4 w-4 mr-2" }), "Add First Category"] })] }) })] });
}
const ra = bt.extend({ name: u.string().min(1, "Product name is required"), description: u.string().min(1, "Description is required"), basePrice: u.string().min(1, "Base price is required"), categoryId: u.number().min(1, "Please select a primary category"), additionalCategoryIds: u.array(u.number()).optional(), outletIds: u.array(u.number()).optional(), sortOrder: u.number().min(0, "Sort order must be 0 or higher").default(0), preparationTime: u.number().min(1, "Preparation time must be at least 1 minute").default(15), brandId: u.number().min(1, "Brand is required"), orderAvailabilityMode: u.enum(["both", "instant_only", "preorder_only"]).nullable().optional(), preorderLeadTimeHours: u.number().int().min(1).nullable().optional(), bulkServingOptions: u.array(u.object({ size: u.string().min(1, "Size is required"), feeds: u.string().min(1, "Feeds is required"), price: u.number().positive("Price must be greater than 0") })).optional(), productSalesChannels: u.array(u.object({ channelValue: u.string().min(1, "Sales channel is required"), isListed: u.boolean().default(true), applyPlatformFee: u.boolean().default(true), commissionRateOverride: u.number().min(0).max(100).nullable().optional() })).optional(), channelPrices: u.array(u.object({ salesChannel: u.string().min(1), price: u.number().int().min(0) })).optional() });
function sr(n) {
  return n.toLowerCase().replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
}
const ta = [12, 24, 48, 96], ce = (n) => n.trim().toLowerCase().replace(/\s+/g, "_"), es = (n) => {
  const i = Number.parseFloat(String(n != null ? n : "0"));
  return Number.isNaN(i) ? 0 : Math.max(0, Math.min(100, Math.round(i * 100) / 100));
}, ws = (n) => {
  if (n == null || n === "") return null;
  const i = Number.parseFloat(String(n));
  return Number.isFinite(i) ? es(i) : null;
}, ke = (n, i) => {
  if (n.length === 0) return (i || []).map((m) => {
    var _a;
    return { channelValue: ce(m.channelValue), isListed: true, applyPlatformFee: (_a = m.applyPlatformFee) != null ? _a : true, commissionRateOverride: ws(m.commissionRateOverride) };
  });
  const o = new Map((i || []).map((m) => [ce(m.channelValue), m])), d = o.size > 0;
  return n.map((m) => {
    var _a;
    const x = ce(m.value), h = o.get(x);
    return h ? { channelValue: x, isListed: true, applyPlatformFee: (_a = h.applyPlatformFee) != null ? _a : true, commissionRateOverride: ws(h.commissionRateOverride) } : { channelValue: x, isListed: !d, applyPlatformFee: true, commissionRateOverride: null };
  });
}, Te = (n, i) => {
  const o = new Map((i || []).map((d) => [ce(d.salesChannel), d.price]));
  return n.map((d) => {
    var _a;
    const m = ce(d.value);
    return { salesChannel: m, price: (_a = o.get(m)) != null ? _a : 0 };
  });
}, rr = (n) => (n / 100).toFixed(2), aa = (n) => Math.round(parseFloat(n || "0") * 100), na = (n, i) => {
  const o = ce(i), d = (n.productSalesChannels || []).map((m) => ce(m.channelValue));
  return d.length === 0 ? true : d.includes(o);
};
function ia() {
  var _a, _b, _c, _d, _e2, _f;
  var Bs, Ks, zs, Hs;
  const [n, i] = p.useState(false), [o, d] = p.useState(null), [m, x] = p.useState(""), [h, f] = p.useState("all"), [P, w] = p.useState("all"), [g, R] = p.useState("sort_order"), [O, y] = p.useState(1), [H, ee] = p.useState(24), [X, J] = p.useState(false), [V, q] = p.useState(null), [v, Z] = p.useState(null), [a, l] = p.useState(false), [L, Q] = p.useState(false), [k, r] = p.useState(0), [c, S] = p.useState("idle"), [ne, U] = p.useState(null), [M, me] = p.useState(""), Fs = p.useRef(null), te = p.useRef(null), ge = p.useRef(null), { toast: ie } = rs(), Ke = ts(), { selectedBrandId: B, setSelectedBrandId: Or, isLoading: kr } = as(), { permissions: cs } = et(), { admin: ds } = lr(), Ls = (ds == null ? void 0 : ds.role) === "super_admin" && !!(cs != null && cs.viewInactiveProducts), Le = () => {
    var _a2;
    const s = st();
    return s && s !== B && Or(s), (_a2 = s != null ? s : B) != null ? _a2 : null;
  };
  p.useEffect(() => () => {
    te.current !== null && (window.clearInterval(te.current), te.current = null), ge.current && (ge.current.abort(), ge.current = null);
  }, []);
  const ze = (s, t) => {
    y(1), s === "search" ? x(t) : s === "category" ? f(t) : s === "salesChannel" ? w(t) : s === "sortBy" && R(t);
  }, { data: Tr = [], isLoading: Dr } = pe({ queryKey: ["/api/admin/products", { brandId: B, includeInactive: Ls }], enabled: !!B, staleTime: 6e4, gcTime: 5 * 60 * 1e3, refetchOnMount: false, refetchOnWindowFocus: false }), { data: Ee = [], isLoading: Rr } = pe({ queryKey: ["/api/admin/categories", { brandId: B }], enabled: !!B }), { data: je = [] } = pe({ queryKey: ["/api/admin/outlets", { brandId: B }], enabled: !!B }), { data: ms } = pe({ queryKey: ["/api/admin/settings/sales-channels"], enabled: !!B, staleTime: 5 * 60 * 1e3, gcTime: 10 * 60 * 1e3, refetchOnMount: false }), W = (ms == null ? void 0 : ms.channels) || [], us = p.useMemo(() => new Map(W.map((s) => [ce(s.value), s])), [W]), Es = (s) => {
    const t = s.productSalesChannels || [];
    return t.length === 0 ? "all_channels" : t.map((j) => {
      var $;
      return (($ = us.get(ce(j.channelValue))) == null ? void 0 : $.label) || j.channelValue;
    }).sort((j, $) => j.localeCompare($)).join(", ");
  }, Ms = [...Tr].sort((s, t) => g === "sales_channel" ? Es(s).localeCompare(Es(t), void 0, { sensitivity: "base" }) : (s.sortOrder || 0) - (t.sortOrder || 0)).filter((s) => {
    var T, _;
    const t = m === "" || s.name.toLowerCase().includes(m.toLowerCase()) || ((T = s.description) == null ? void 0 : T.toLowerCase().includes(m.toLowerCase())), j = h === "all" || ((_ = s.categoryId) == null ? void 0 : _.toString()) === h, $ = P === "all" || na(s, P);
    return t && j && $;
  }), He = Ms.length, Re = Math.ceil(He / H), xs = (O - 1) * H, Us = xs + H, $s = Ms.slice(xs, Us), Fr = He > 0 ? xs + 1 : 0, Lr = Math.min(Us, He);
  O > Re && Re > 0 && y(Re);
  const N = Ps({ resolver: Os(ra), defaultValues: { name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: [], slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: 0, orderAvailabilityMode: null, preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: [], channelPrices: [] } }), hs = N.watch("channelPrices") || [], { fields: _s, append: Er, remove: Mr } = ft({ control: N.control, name: "bulkServingOptions" });
  p.useEffect(() => {
    B && N.setValue("brandId", B);
  }, [B, N]), p.useEffect(() => {
    if (!n || !W.length || o) return;
    const s = N.getValues("productSalesChannels");
    s && s.length > 0 || (N.setValue("productSalesChannels", ke(W)), N.setValue("channelPrices", Te(W)));
  }, [n, o, W, N]);
  const Qe = N.watch("bulkServingOptions");
  N.watch("productSalesChannels"), p.useEffect(() => {
    if (Qe && Qe.length > 0) {
      const s = Qe[0];
      if (s && s.price > 0) {
        const t = N.getValues("basePrice"), j = s.price.toString();
        t !== j && N.setValue("basePrice", j);
      }
    }
  }, [Qe, N]);
  const ps = he({ mutationFn: (s) => __async(null, null, function* () {
    const t = Le();
    if (!t) throw new Error("Select a brand before creating a product.");
    const j = [s.categoryId, ...s.additionalCategoryIds || []], $ = (s.productSalesChannels || []).map((F) => {
      var _a2, _b2;
      return { channelValue: ce(F.channelValue), isListed: (_a2 = F.isListed) != null ? _a2 : true, applyPlatformFee: (_b2 = F.applyPlatformFee) != null ? _b2 : true, commissionRateOverride: F.commissionRateOverride === null || F.commissionRateOverride === void 0 ? null : es(F.commissionRateOverride) };
    }), T = (s.channelPrices || []).filter((F) => F.price > 0);
    return (yield le("POST", "/api/admin/products", __spreadProps(__spreadValues({}, s), { basePrice: s.basePrice.toString(), slug: s.slug || sr(s.name), brandId: t, categoryIds: j, outletIds: s.outletIds, productSalesChannels: $, channelPrices: T }))).json();
  }), onSuccess: () => {
    Ke.invalidateQueries({ queryKey: ["/api/admin/products"] }), i(false), d(null);
    const s = je.filter((t) => t.isActive).map((t) => t.id);
    N.reset({ name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: s, slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: B || 0, bulkServingOptions: [], productSalesChannels: ke(W), channelPrices: Te(W) }), ie({ title: "Success", description: "Product created successfully" });
  }, onError: (s) => {
    console.error("Create product error:", s), ie({ title: "Error", description: s.message, variant: "destructive" });
  } }), We = he({ mutationFn: (s) => __async(null, null, function* () {
    if (!o) throw new Error("No product selected for editing");
    const t = Le();
    if (!t) throw new Error("Select a brand before updating a product.");
    const j = [s.categoryId, ...s.additionalCategoryIds || []], $ = (s.productSalesChannels || []).map((F) => {
      var _a2, _b2;
      return { channelValue: ce(F.channelValue), isListed: (_a2 = F.isListed) != null ? _a2 : true, applyPlatformFee: (_b2 = F.applyPlatformFee) != null ? _b2 : true, commissionRateOverride: F.commissionRateOverride === null || F.commissionRateOverride === void 0 ? null : es(F.commissionRateOverride) };
    }), T = (s.channelPrices || []).filter((F) => F.price > 0);
    return (yield le("PUT", `/api/admin/products/${o.id}`, __spreadProps(__spreadValues({}, s), { basePrice: s.basePrice.toString(), slug: s.slug || sr(s.name), brandId: t, categoryIds: j, outletIds: s.outletIds, productSalesChannels: $, channelPrices: T }))).json();
  }), onSuccess: () => {
    Ke.invalidateQueries({ predicate: (t) => Array.isArray(t.queryKey) && typeof t.queryKey[0] == "string" && t.queryKey[0].includes("/api/admin/products") }), i(false), d(null);
    const s = je.filter((t) => t.isActive).map((t) => t.id);
    N.reset({ name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: s, slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: B || 0, bulkServingOptions: [], productSalesChannels: ke(W), channelPrices: Te(W) }), ie({ title: "Success", description: "Product updated successfully" });
  }, onError: (s) => {
    ie({ title: "Error", description: s.message, variant: "destructive" });
  } }), Vs = he({ mutationFn: (s) => {
    const t = Le();
    if (!t) throw new Error("Select a brand before deleting a product.");
    return le("DELETE", `/api/admin/products/${s}?brandId=${t}`);
  }, onSuccess: () => {
    Ke.invalidateQueries({ predicate: (s) => Array.isArray(s.queryKey) && typeof s.queryKey[0] == "string" && s.queryKey[0].includes("/api/admin/products") }), ie({ title: "Success", description: "Product deleted successfully" });
  }, onError: (s) => {
    ie({ title: "Error", description: s.message, variant: "destructive" });
  } }), Ur = (s) => __async(null, null, function* () {
    try {
      o ? yield We.mutateAsync(s) : yield ps.mutateAsync(s);
    } catch (t) {
      console.error("Form submission error:", t);
    }
  }), $r = (s) => {
    var _a2, _b2;
    d(s);
    const t = s.availability ? [s.availability.outletId] : je.filter((j) => j.isActive).map((j) => j.id);
    N.reset({ name: s.name, description: s.description || "", basePrice: s.basePrice.toString(), categoryId: (_a2 = s.categoryId) != null ? _a2 : void 0, additionalCategoryIds: [], outletIds: t, slug: s.slug, imageUrl: s.imageUrl || "", isActive: (_b2 = s.isActive) != null ? _b2 : true, sortOrder: s.sortOrder || 0, preparationTime: s.preparationTime || 15, brandId: s.brandId || B || 0, orderAvailabilityMode: s.orderAvailabilityMode || null, preorderLeadTimeHours: s.preorderLeadTimeHours || null, bulkServingOptions: s.bulkServingOptions || [], productSalesChannels: ke(W, s.productSalesChannels), channelPrices: Te(W, s.channelPrices) }), i(true);
  }, _r = (s) => __async(null, null, function* () {
    window.confirm("Are you sure you want to delete this product?") && (yield Vs.mutateAsync(s));
  }), Vr = () => {
    i(false), d(null);
    const s = je.filter((t) => t.isActive).map((t) => t.id);
    N.reset({ name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: s, slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: B || 0, orderAvailabilityMode: null, preorderLeadTimeHours: null, bulkServingOptions: [], productSalesChannels: ke(W), channelPrices: Te(W) });
  }, gs = Dr || Rr || kr, qs = (s) => __async(null, null, function* () {
    try {
      const t = Le();
      if (!t) {
        ie({ title: "Select a brand", description: "Choose a brand before downloading products.", variant: "destructive" });
        return;
      }
      q(s);
      const $ = yield (yield le("GET", `/api/admin/products/export?format=${s}&brandId=${t}`)).blob(), T = window.URL.createObjectURL($), _ = document.createElement("a");
      _.href = T, _.download = `products-export-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.${s}`, document.body.appendChild(_), _.click(), document.body.removeChild(_), window.URL.revokeObjectURL(T), ie({ title: "Export complete", description: `Products exported as ${s.toUpperCase()}.` });
    } catch (t) {
      console.error("Product export error:", t), ie({ title: "Export failed", description: (t == null ? void 0 : t.message) || "Failed to export products.", variant: "destructive" });
    } finally {
      q(null);
    }
  }), qr = (s) => __async(null, null, function* () {
    var _a2, _b2, _c2, _d2;
    var $, T, _, F, Me, Ye;
    const t = ($ = s.target.files) == null ? void 0 : $[0];
    if (s.target.value = "", !t) return;
    const j = Le();
    if (!j) {
      ie({ title: "Select a brand", description: "Choose a brand before uploading products.", variant: "destructive" });
      return;
    }
    try {
      J(true), Z(null), U(null), me(t.name), r(0), S("uploading"), Q(true), l(true), te.current !== null && (window.clearInterval(te.current), te.current = null), ge.current && (ge.current.abort(), ge.current = null);
      const K = yield new Promise((Br, Kr) => {
        const Qs = new FormData();
        Qs.append("file", t);
        const Ws = localStorage.getItem("adminToken"), Ys = new URL("/api/admin/products/import", window.location.origin);
        Ys.searchParams.set("brandId", j.toString());
        const se = new XMLHttpRequest();
        ge.current = se, se.timeout = 5 * 60 * 1e3, se.open("POST", Ys.toString()), se.withCredentials = true, Ws && se.setRequestHeader("Authorization", `Bearer ${Ws}`);
        let Xe = false;
        const zr = (ae) => {
          Xe || (Xe = true, Br(ae));
        }, Je = (ae) => {
          Xe || (Xe = true, Kr(ae));
        }, Hr = () => {
          te.current === null && (te.current = window.setInterval(() => {
            r((ae) => ae >= 99 ? ae : Math.min(99, ae + 1));
          }, 1200));
        }, Qr = () => {
          te.current !== null && (window.clearInterval(te.current), te.current = null);
        };
        se.upload.onprogress = (ae) => {
          if (!ae.lengthComputable) return;
          const Ie = Math.round(ae.loaded / ae.total * 100);
          Ie >= 100 ? (S("processing"), r(95), Hr()) : (S("uploading"), r(Math.max(0, Math.min(95, Ie))));
        }, se.onerror = () => Je(new Error("Network error while uploading file")), se.onabort = () => Je(new Error("Import request was cancelled")), se.ontimeout = () => Je(new Error("Import timed out while waiting for the server response")), se.onloadend = () => {
          Qr(), ge.current = null;
        }, se.onload = () => {
          const ae = se.responseText || "", Ie = ae ? (() => {
            try {
              return JSON.parse(ae);
            } catch (e2) {
              return null;
            }
          })() : null;
          if (se.status >= 200 && se.status < 300) {
            r(100), zr(Ie || {});
            return;
          }
          Je(new Error((Ie == null ? void 0 : Ie.message) || "Failed to import products."));
        }, se.send(Qs);
      });
      S("completed"), Z(K), Ke.invalidateQueries({ queryKey: ["/api/admin/products"] });
      const js = (_b2 = (_a2 = K.failed) != null ? _a2 : (T = K.errors) == null ? void 0 : T.length) != null ? _b2 : 0, fs = (_c2 = K.skipped) != null ? _c2 : 0, Ge = (_d2 = (_ = K.rowWarnings) == null ? void 0 : _.length) != null ? _d2 : 0;
      (F = K.errors) != null && F.length ? (console.table(K.errors), (Me = K.createdRows) != null && Me.length && console.table(K.createdRows), (Ye = K.rowWarnings) != null && Ye.length && console.table(K.rowWarnings), ie({ title: "Import completed with issues", description: `Created ${K.created || 0}, skipped ${fs}, failed ${js}${Ge ? `, warnings ${Ge}` : ""}.`, variant: "destructive" })) : ie({ title: "Import complete", description: `Created ${K.created || 0} products${fs ? `, skipped ${fs}` : ""}${Ge ? `, warnings ${Ge}` : ""}.` });
    } catch (K) {
      S("failed"), U((K == null ? void 0 : K.message) || "Failed to import products."), r(100), console.error("Product import error:", K), ie({ title: "Import failed", description: (K == null ? void 0 : K.message) || "Failed to import products.", variant: "destructive" });
    } finally {
      J(false), Q(false), te.current !== null && (window.clearInterval(te.current), te.current = null), ge.current = null;
    }
  });
  return e.jsxs("div", { className: "container mx-auto p-6", children: [e.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-6", children: [e.jsxs("div", { className: "space-y-1", children: [e.jsx("h1", { className: "text-3xl font-bold", children: "Product Management" }), e.jsx("p", { className: "text-muted-foreground", children: "Attach every product to the correct brand." })] }), e.jsx("div", { className: "flex items-center gap-3", children: e.jsxs($e, { open: n, onOpenChange: i, children: [e.jsx(As, { asChild: true, children: e.jsxs(b, { onClick: () => {
    d(null);
    const s = je.filter((t) => t.isActive).map((t) => t.id);
    N.reset({ name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: s, slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: B || 0, bulkServingOptions: [], productSalesChannels: ke(W), channelPrices: Te(W) });
  }, disabled: !B, children: [e.jsx(De, { className: "w-4 h-4 mr-2" }), "Add Product"] }) }), e.jsxs(_e, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [e.jsx(Ve, { children: e.jsx(qe, { children: o ? "Edit Product" : "Add New Product" }) }), e.jsx(Is, __spreadProps(__spreadValues({}, N), { children: e.jsxs("form", { onSubmit: N.handleSubmit(Ur), className: "space-y-4", children: [e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [e.jsx(A, { control: N.control, name: "name", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Product Name" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "Enter product name" }, s)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "categoryId", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Primary Category" }), e.jsxs(ye, { onValueChange: (t) => s.onChange(parseInt(t)), value: s.value > 0 ? s.value.toString() : "", children: [e.jsx(E, { children: e.jsx(ve, { children: e.jsx(be, { placeholder: "Select a primary category" }) }) }), e.jsx(Ne, { children: Ee.map((t) => e.jsx(z, { value: t.id.toString(), children: t.name }, t.id)) })] }), e.jsx(D, {})] }) })] }), e.jsx(A, { control: N.control, name: "additionalCategoryIds", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Additional Categories (Optional)" }), e.jsxs("div", { className: "border rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto", children: [e.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Select additional categories where this product should appear" }), Ee.filter((t) => t.id !== N.watch("categoryId")).map((t) => {
    var j;
    return e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ue, { id: `category-${t.id}`, checked: (j = s.value) == null ? void 0 : j.includes(t.id), onCheckedChange: ($) => {
      const T = s.value || [];
      $ ? s.onChange([...T, t.id]) : s.onChange(T.filter((_) => _ !== t.id));
    } }), e.jsx("label", { htmlFor: `category-${t.id}`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer", children: t.name })] }, t.id);
  }), Ee.filter((t) => t.id !== N.watch("categoryId")).length === 0 && e.jsx("p", { className: "text-xs text-muted-foreground", children: "Select a primary category first" })] }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "outletIds", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Available at Outlets" }), e.jsxs("div", { className: "border rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto", children: [e.jsxs("div", { className: "flex items-center justify-between mb-2", children: [e.jsx("p", { className: "text-xs text-muted-foreground", children: "Select outlets where this product should be available" }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(b, { type: "button", variant: "ghost", size: "sm", onClick: () => {
    const t = je.filter((j) => j.isActive).map((j) => j.id);
    s.onChange(t);
  }, children: "Select All" }), e.jsx(b, { type: "button", variant: "ghost", size: "sm", onClick: () => s.onChange([]), children: "Clear" })] })] }), je.filter((t) => t.isActive).map((t) => {
    var j;
    return e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx(Ue, { id: `outlet-${t.id}`, checked: (j = s.value) == null ? void 0 : j.includes(t.id), onCheckedChange: ($) => {
      const T = s.value || [];
      $ ? s.onChange([...T, t.id]) : s.onChange(T.filter((_) => _ !== t.id));
    } }), e.jsx("label", { htmlFor: `outlet-${t.id}`, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer", children: t.name })] }, t.id);
  }), je.filter((t) => t.isActive).length === 0 && e.jsx("p", { className: "text-xs text-muted-foreground", children: "No active outlets available" })] }), e.jsx(D, {})] }) }), e.jsxs("div", { className: "space-y-2 border rounded-lg p-3", children: [e.jsxs("div", { className: "flex items-center justify-between gap-2", children: [e.jsx(C, { children: "Channel Selling Prices (optional)" }), e.jsx("p", { className: "text-[11px] text-muted-foreground shrink-0", children: "Leave empty to use base price" })] }), hs.length === 0 ? e.jsx("p", { className: "text-sm text-muted-foreground", children: "No sales channels configured. Add channels in Settings first." }) : e.jsxs("div", { className: "overflow-hidden rounded-md border", children: [e.jsxs("div", { className: "hidden grid-cols-[minmax(0,1fr)_180px_100px] bg-muted/40 px-3 py-1.5 text-[11px] font-medium text-muted-foreground md:grid", children: [e.jsx("span", { children: "Channel" }), e.jsx("span", { className: "text-center", children: "Selling Price (\u20A6)" }), e.jsx("span", { className: "text-right", children: "Status" })] }), e.jsx("div", { className: "divide-y", children: hs.map((s, t) => {
    const j = us.get(s.salesChannel), $ = (j == null ? void 0 : j.label) || s.salesChannel, T = s.price > 0;
    return e.jsxs("div", { className: "grid grid-cols-1 gap-2 px-3 py-2 md:grid-cols-[minmax(0,1fr)_180px_100px] md:items-center md:gap-3", children: [e.jsx("div", { children: e.jsx("p", { className: "text-sm font-medium", children: $ }) }), e.jsxs("div", { className: "flex items-center justify-between gap-2 md:justify-center", children: [e.jsx("span", { className: "text-[11px] text-muted-foreground md:hidden", children: "Selling Price (\u20A6)" }), e.jsx(ys, { value: T ? rr(s.price) : "", onValueChange: (_) => {
      const F = [...hs];
      F[t] = __spreadProps(__spreadValues({}, F[t]), { price: _ === "" ? 0 : aa(_) }), N.setValue("channelPrices", F, { shouldDirty: true });
    }, placeholder: "Base price", className: "h-8 w-40" })] }), e.jsx("div", { className: "text-[11px] text-muted-foreground md:text-right", children: T ? `\u20A6${rr(s.price)}` : "Base price" })] }, s.salesChannel);
  }) })] })] }), e.jsxs("div", { className: "space-y-2 border rounded-lg p-3", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsx(C, { children: "Bulk Serving Options (optional)" }), e.jsx(b, { type: "button", size: "sm", variant: "outline", onClick: () => Er({ size: "", feeds: "", price: 0 }), children: "Add Size" })] }), _s.length === 0 && e.jsx("p", { className: "text-xs text-muted-foreground", children: "No bulk sizes configured. Add if this product needs serving-size pricing." }), _s.map((s, t) => e.jsxs("div", { className: "grid grid-cols-1 gap-2 sm:grid-cols-4 items-end", children: [e.jsx(A, { control: N.control, name: `bulkServingOptions.${t}.size`, render: ({ field: j }) => e.jsxs(I, { children: [e.jsx(C, { children: "Size" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "e.g., 1L" }, j)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: `bulkServingOptions.${t}.feeds`, render: ({ field: j }) => e.jsxs(I, { children: [e.jsx(C, { children: "Feeds" }), e.jsx(E, { children: e.jsx(oe, __spreadValues({ placeholder: "e.g., 4" }, j)) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: `bulkServingOptions.${t}.price`, render: ({ field: j }) => {
    var _a2;
    return e.jsxs(I, { children: [e.jsx(C, { children: "Price (\u20A6)" }), e.jsx(E, { children: e.jsx(ys, { value: (_a2 = j.value) != null ? _a2 : "", onValueChange: ($) => j.onChange($ ? Number($) : 0), placeholder: "0.00" }) }), e.jsx(D, {})] });
  } }), e.jsx(b, { type: "button", variant: "ghost", className: "sm:justify-self-start", onClick: () => Mr(t), children: "Remove" })] }, s.id))] }), e.jsx(A, { control: N.control, name: "description", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Description" }), e.jsx(E, { children: e.jsx(ns, __spreadValues({ placeholder: "Enter product description" }, s)) }), e.jsx(D, {})] }) }), e.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [e.jsx(A, { control: N.control, name: "basePrice", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Base Price (\u20A6)" }), e.jsx(E, { children: e.jsx(ys, { value: s.value, onValueChange: s.onChange, placeholder: "0.00" }) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "sortOrder", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Sort Order" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 0, placeholder: "0", value: s.value || 0, onChange: (t) => s.onChange(t != null ? t : 0) }) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "preparationTime", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Preparation Time (min)" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 1, placeholder: "15", value: s.value || 15, onChange: (t) => s.onChange(Math.max(1, t != null ? t : 15)) }) }), e.jsx(D, {})] }) })] }), e.jsx(A, { control: N.control, name: "orderAvailabilityMode", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Order Availability" }), e.jsxs(ye, { onValueChange: (t) => s.onChange(t === "inherit" ? null : t), value: s.value || "inherit", children: [e.jsx(E, { children: e.jsx(ve, { children: e.jsx(be, { placeholder: "Inherit from Category" }) }) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "inherit", children: "Inherit from Category" }), e.jsx(z, { value: "both", children: "Both (Instant & Pre-Order)" }), e.jsx(z, { value: "instant_only", children: "Instant Order Only" }), e.jsx(z, { value: "preorder_only", children: "Pre-Order Only" })] })] }), e.jsx(Fe, { children: 'Controls how this product can be ordered. "Inherit" uses the category setting.' }), e.jsx(D, {})] }) }), N.watch("orderAvailabilityMode") === "preorder_only" && e.jsx(A, { control: N.control, name: "preorderLeadTimeHours", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Minimum Lead Time (hours)" }), e.jsx(E, { children: e.jsx(Ce, { category: "integer", min: 1, placeholder: "Inherit from category", value: s.value || "", onChange: (t) => s.onChange(t != null ? t : null) }) }), e.jsx(Fe, { children: "Override the category lead time. Leave empty to inherit." }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "imageUrl", render: ({ field: s }) => e.jsxs(I, { children: [e.jsx(C, { children: "Product Image" }), e.jsx(E, { children: e.jsx(dr, { value: s.value || "", onChange: s.onChange, accept: "image/*" }) }), e.jsx(D, {})] }) }), e.jsx(A, { control: N.control, name: "isActive", render: ({ field: s }) => {
    var _a2;
    return e.jsxs(I, { className: "flex flex-row items-center justify-between rounded-lg border p-4", children: [e.jsxs("div", { className: "space-y-0.5", children: [e.jsx(C, { className: "text-base", children: "Active" }), e.jsx("div", { className: "text-sm text-muted-foreground", children: "Product is available for customers" })] }), e.jsx(E, { children: e.jsx(vs, { checked: (_a2 = s.value) != null ? _a2 : false, onCheckedChange: s.onChange, disabled: !!o && (o == null ? void 0 : o.isActive) === false && !Ls }) })] });
  } }), e.jsxs("div", { className: "flex justify-end space-x-2", children: [e.jsx(b, { type: "button", variant: "outline", onClick: Vr, children: "Cancel" }), e.jsx(b, { type: "submit", disabled: ps.isPending || We.isPending, children: ps.isPending || We.isPending ? "Saving..." : o ? "Update Product" : "Create Product" })] })] }) }))] })] }) })] }), e.jsx($e, { open: a, onOpenChange: (s) => {
    L && !s || l(s);
  }, children: e.jsxs(_e, { className: "max-w-4xl max-h-[90vh] overflow-y-auto", onEscapeKeyDown: (s) => {
    L && s.preventDefault();
  }, onPointerDownOutside: (s) => {
    L && s.preventDefault();
  }, children: [e.jsx(Ve, { children: e.jsx(qe, { children: "Import Products" }) }), e.jsxs("div", { className: "space-y-4", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["File: ", e.jsx("span", { className: "font-medium text-foreground", children: M || "-" })] }), (L || c === "uploading" || c === "processing") && e.jsxs("div", { className: "space-y-2", children: [e.jsx("div", { className: "h-2 w-full rounded bg-muted overflow-hidden", children: e.jsx("div", { className: "h-full bg-primary transition-all duration-200", style: { width: `${Math.max(0, Math.min(100, k))}%` } }) }), e.jsx("div", { className: "text-xs text-muted-foreground", children: c === "processing" ? `Processing rows... ${k}%` : `Uploading file... ${k}%` }), c === "processing" && e.jsx("div", { className: "text-xs text-muted-foreground", children: "Still processing on the server. Large files can take up to a few minutes." })] }), ne && e.jsx("div", { className: "rounded border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2", children: ne }), !L && v && e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2 text-xs", children: [e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Total: ", (_a = v.totalRows) != null ? _a : 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Created: ", v.created || 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Skipped: ", v.skipped || 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Failed: ", (_c = (_b = v.failed) != null ? _b : (Bs = v.errors) == null ? void 0 : Bs.length) != null ? _c : 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Warnings: ", ((Ks = v.rowWarnings) == null ? void 0 : Ks.length) || 0] })] }), v.createdRows && v.createdRows.length > 0 && e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-semibold", children: "Successful Uploads (first 50)" }), e.jsx("div", { className: "max-h-44 overflow-auto rounded border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "bg-muted sticky top-0", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-2 py-1", children: "Row" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Product" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Category" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Warnings" })] }) }), e.jsx("tbody", { children: v.createdRows.slice(0, 50).map((s) => {
    var t;
    return e.jsxs("tr", { className: "border-t", children: [e.jsx("td", { className: "px-2 py-1", children: s.row }), e.jsx("td", { className: "px-2 py-1", children: s.name }), e.jsx("td", { className: "px-2 py-1", children: s.category }), e.jsx("td", { className: "px-2 py-1", children: ((t = s.warnings) == null ? void 0 : t.join(" | ")) || "-" })] }, `dialog-created-${s.row}-${s.productId}`);
  }) })] }) })] }), v.errors && v.errors.length > 0 && e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-semibold", children: "Failed Uploads (first 100)" }), e.jsx("div", { className: "max-h-56 overflow-auto rounded border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "bg-muted sticky top-0", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-2 py-1", children: "Row" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Product" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Category" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Reason" })] }) }), e.jsx("tbody", { children: v.errors.slice(0, 100).map((s, t) => e.jsxs("tr", { className: "border-t", children: [e.jsx("td", { className: "px-2 py-1", children: s.row }), e.jsx("td", { className: "px-2 py-1", children: s.name || "-" }), e.jsx("td", { className: "px-2 py-1", children: s.category || "-" }), e.jsx("td", { className: "px-2 py-1", children: s.message })] }, `dialog-error-${s.row}-${t}`)) })] }) })] })] })] }), !L && e.jsx("div", { className: "flex justify-end", children: e.jsx(b, { onClick: () => l(false), children: "Done" }) })] }) }), e.jsxs(Y, { className: "mb-6", children: [e.jsx(re, { className: "pb-3", children: e.jsx(xe, { className: "text-base", children: "Bulk Upload" }) }), e.jsxs(G, { className: "space-y-3", children: [e.jsxs("div", { className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between", children: [e.jsx("p", { className: "text-sm text-muted-foreground", children: "Upload CSV/XLSX files to add products in bulk, or export the current list to edit offline." }), e.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [e.jsx(b, { variant: "outline", size: "sm", onClick: () => qs("csv"), disabled: !B || V !== null, children: V === "csv" ? e.jsxs(e.Fragment, { children: [e.jsx(Gs, { className: "h-4 w-4 mr-2 animate-spin" }), " Exporting..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(Js, { className: "h-4 w-4 mr-2" }), " Export CSV"] }) }), e.jsx(b, { variant: "outline", size: "sm", onClick: () => qs("xlsx"), disabled: !B || V !== null, children: V === "xlsx" ? e.jsxs(e.Fragment, { children: [e.jsx(Gs, { className: "h-4 w-4 mr-2 animate-spin" }), " Exporting..."] }) : e.jsxs(e.Fragment, { children: [e.jsx(Js, { className: "h-4 w-4 mr-2" }), " Export XLSX"] }) }), e.jsx("input", { ref: Fs, type: "file", accept: ".csv,.xlsx", className: "hidden", onChange: qr }), e.jsxs(b, { size: "sm", onClick: () => {
    var s;
    return (s = Fs.current) == null ? void 0 : s.click();
  }, disabled: !B || X, children: [e.jsx(It, { className: "w-4 h-4 mr-2" }), X ? "Uploading..." : "Upload CSV/XLSX"] })] })] }), e.jsxs("div", { className: "text-xs text-muted-foreground", children: ["Required columns: ", e.jsx("span", { className: "font-medium", children: "name, description, basePrice, categoryId or categoryName" }), ". Optional: slug, imageUrl, isActive, sortOrder, preparationTime, bulkServingOptions (JSON), additionalCategoryIds (comma-separated IDs), outletIds (comma-separated IDs)."] }), v && e.jsxs("div", { className: "rounded-md border p-3 space-y-3", children: [e.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [e.jsx("div", { className: "text-sm font-medium", children: "Last Import Preview" }), e.jsx(b, { size: "sm", variant: "ghost", onClick: () => Z(null), children: "Clear" })] }), e.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-2 text-xs", children: [e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Total: ", (_d = v.totalRows) != null ? _d : 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Created: ", v.created || 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Skipped: ", v.skipped || 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Failed: ", (_f = (_e2 = v.failed) != null ? _e2 : (zs = v.errors) == null ? void 0 : zs.length) != null ? _f : 0] }), e.jsxs("div", { className: "rounded bg-muted px-2 py-1", children: ["Warnings: ", ((Hs = v.rowWarnings) == null ? void 0 : Hs.length) || 0] })] }), v.createdRows && v.createdRows.length > 0 && e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-semibold", children: "Created Rows (first 25)" }), e.jsx("div", { className: "max-h-44 overflow-auto rounded border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "bg-muted sticky top-0", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-2 py-1", children: "Row" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Product" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Category" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Warnings" })] }) }), e.jsx("tbody", { children: v.createdRows.slice(0, 25).map((s) => {
    var t;
    return e.jsxs("tr", { className: "border-t", children: [e.jsx("td", { className: "px-2 py-1", children: s.row }), e.jsx("td", { className: "px-2 py-1", children: s.name }), e.jsx("td", { className: "px-2 py-1", children: s.category }), e.jsx("td", { className: "px-2 py-1", children: ((t = s.warnings) == null ? void 0 : t.join(" | ")) || "-" })] }, `created-${s.row}-${s.productId}`);
  }) })] }) })] }), v.errors && v.errors.length > 0 && e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-semibold", children: "Failed Rows (first 50)" }), e.jsx("div", { className: "max-h-56 overflow-auto rounded border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "bg-muted sticky top-0", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-2 py-1", children: "Row" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Product" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Category" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Error" })] }) }), e.jsx("tbody", { children: v.errors.slice(0, 50).map((s, t) => e.jsxs("tr", { className: "border-t", children: [e.jsx("td", { className: "px-2 py-1", children: s.row }), e.jsx("td", { className: "px-2 py-1", children: s.name || "-" }), e.jsx("td", { className: "px-2 py-1", children: s.category || "-" }), e.jsx("td", { className: "px-2 py-1", children: s.message })] }, `error-${s.row}-${t}`)) })] }) })] }), v.rowWarnings && v.rowWarnings.length > 0 && e.jsxs("div", { className: "space-y-1", children: [e.jsx("div", { className: "text-xs font-semibold", children: "Warnings (first 50)" }), e.jsx("div", { className: "max-h-44 overflow-auto rounded border", children: e.jsxs("table", { className: "w-full text-xs", children: [e.jsx("thead", { className: "bg-muted sticky top-0", children: e.jsxs("tr", { children: [e.jsx("th", { className: "text-left px-2 py-1", children: "Row" }), e.jsx("th", { className: "text-left px-2 py-1", children: "Warning" })] }) }), e.jsx("tbody", { children: v.rowWarnings.slice(0, 50).map((s, t) => e.jsxs("tr", { className: "border-t", children: [e.jsx("td", { className: "px-2 py-1", children: s.row }), e.jsx("td", { className: "px-2 py-1", children: s.message })] }, `warning-${s.row}-${t}`)) })] }) })] })] })] })] }), e.jsx(Y, { className: "mb-6", children: e.jsx(G, { className: "p-4", children: e.jsxs("div", { className: "flex flex-wrap gap-4 items-center", children: [e.jsxs("div", { className: "relative flex-1 min-w-[200px]", children: [e.jsx(Pt, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), e.jsx(oe, { placeholder: "Search products...", value: m, onChange: (s) => ze("search", s.target.value), className: "pl-10" })] }), e.jsxs(ye, { value: h, onValueChange: (s) => ze("category", s), children: [e.jsx(ve, { className: "w-[180px]", children: e.jsx(be, { placeholder: "All Categories" }) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "all", children: "All Categories" }), Ee.map((s) => e.jsx(z, { value: s.id.toString(), children: s.name }, s.id))] })] }), e.jsxs(ye, { value: P, onValueChange: (s) => ze("salesChannel", s), children: [e.jsx(ve, { className: "w-[200px]", children: e.jsx(be, { placeholder: "All Sales Channels" }) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "all", children: "All Sales Channels" }), W.map((s) => e.jsx(z, { value: s.value, children: s.label }, s.value))] })] }), e.jsxs(ye, { value: g, onValueChange: (s) => ze("sortBy", s), children: [e.jsx(ve, { className: "w-[190px]", children: e.jsx(be, {}) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "sort_order", children: "Sort by Sort Order" }), e.jsx(z, { value: "sales_channel", children: "Sort by Sales Channel" })] })] }), e.jsxs(ye, { value: H.toString(), onValueChange: (s) => {
    ee(parseInt(s)), y(1);
  }, children: [e.jsx(ve, { className: "w-[120px]", children: e.jsx(be, {}) }), e.jsx(Ne, { children: ta.map((s) => e.jsxs(z, { value: s.toString(), children: [s, " per page"] }, s)) })] }), e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Showing ", Fr, "-", Lr, " of ", He, " products"] })] }) }) }), gs ? e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [...Array(6)].map((s, t) => e.jsx(Y, { className: "animate-pulse", children: e.jsxs(G, { className: "p-4", children: [e.jsx("div", { className: "h-48 bg-gray-200 rounded-lg mb-4" }), e.jsx("div", { className: "h-4 bg-gray-200 rounded mb-2" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded mb-2" }), e.jsx("div", { className: "h-3 bg-gray-200 rounded w-1/2" })] }) }, t)) }) : e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: $s.map((s) => {
    var $;
    const t = s.productSalesChannels || [], j = t.length === 0 ? ["All channels \u2022 default commissions"] : t.map((T) => {
      var _a2, _b2;
      const _ = ce(T.channelValue), F = us.get(_), Me = (F == null ? void 0 : F.label) || T.channelValue;
      if (!T.applyPlatformFee) return `${Me} \u2022 No fee`;
      const Ye = es((_a2 = F == null ? void 0 : F.defaultCommissionRate) != null ? _a2 : 0), js = (_b2 = ws(T.commissionRateOverride)) != null ? _b2 : Ye;
      return `${Me} \u2022 ${js}%`;
    });
    return e.jsxs(Y, { className: "overflow-hidden hover:shadow-lg transition-shadow", children: [e.jsx(re, { className: "p-0", children: e.jsxs("div", { className: "relative h-48 bg-gray-100 flex items-center justify-center", children: [s.imageUrl ? e.jsx("img", { src: s.imageUrl, alt: s.name, className: "w-full h-full object-cover" }) : e.jsxs("div", { className: "flex flex-col items-center text-gray-400", children: [e.jsx(Ot, { className: "w-12 h-12 mb-2" }), e.jsx("span", { className: "text-sm", children: "No image" })] }), e.jsxs("div", { className: "absolute top-2 right-2 flex space-x-1", children: [e.jsx(b, { variant: "outline", size: "sm", onClick: (T) => {
      T.stopPropagation(), window.location.href = `/control/products/${s.id}`;
    }, title: "View product details & manage customizations", children: e.jsx(kt, { className: "w-4 h-4" }) }), e.jsx(b, { variant: "secondary", size: "sm", onClick: () => $r(s), disabled: We.isPending, children: e.jsx(ks, { className: "w-4 h-4" }) }), e.jsx(b, { variant: "destructive", size: "sm", onClick: () => _r(s.id), disabled: Vs.isPending, children: e.jsx(is, { className: "w-4 h-4" }) })] }), e.jsxs("div", { className: "absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded text-xs", children: ["#", s.sortOrder || 0] })] }) }), e.jsxs(G, { className: "p-4", children: [e.jsxs("div", { className: "flex justify-between items-start mb-2", children: [e.jsx("h3", { className: "font-semibold text-lg line-clamp-1", children: s.name }), e.jsxs("div", { className: "flex items-center space-x-2", children: [e.jsx("span", { className: `px-2 py-1 rounded-full text-xs ${s.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: s.isActive ? "Active" : "Inactive" }), s.orderAvailabilityMode === "preorder_only" && e.jsx("span", { className: "px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800", children: "Pre-Order" }), s.orderAvailabilityMode === "instant_only" && e.jsx("span", { className: "px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800", children: "Instant Only" })] })] }), e.jsx("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: s.description }), e.jsx("div", { className: "mb-3 flex flex-wrap gap-1.5", children: j.map((T, _) => e.jsx("span", { className: "inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700", children: T }, `${s.id}-${T}-${_}`)) }), e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("span", { className: "text-2xl font-bold text-green-600", children: At(s.basePrice) }), e.jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [e.jsx(Be, { className: "w-4 h-4 mr-1" }), (($ = Ee.find((T) => T.id === s.categoryId)) == null ? void 0 : $.name) || "Unknown"] })] })] })] }, s.id);
  }) }), !gs && Re > 1 && e.jsxs("div", { className: "flex items-center justify-between pt-6 border-t mt-6", children: [e.jsxs("div", { className: "text-sm text-muted-foreground", children: ["Page ", O, " of ", Re] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsxs(b, { variant: "outline", size: "sm", onClick: () => y(O - 1), disabled: O === 1, children: [e.jsx(mr, { className: "h-4 w-4 mr-1" }), "Previous"] }), e.jsxs(b, { variant: "outline", size: "sm", onClick: () => y(O + 1), disabled: O === Re, children: ["Next", e.jsx(ur, { className: "h-4 w-4 ml-1" })] })] })] }), !gs && $s.length === 0 && e.jsxs("div", { className: "text-center py-12", children: [e.jsx(Be, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }), m || h !== "all" || P !== "all" || g !== "sort_order" ? e.jsxs(e.Fragment, { children: [e.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No products found" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "Try adjusting your search or filter criteria." }), e.jsx(b, { variant: "outline", onClick: () => {
    x(""), f("all"), w("all"), R("sort_order"), y(1);
  }, children: "Clear Filters" })] }) : e.jsxs(e.Fragment, { children: [e.jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "No products yet" }), e.jsx("p", { className: "text-gray-600 mb-4", children: "Get started by adding your first product." }), e.jsxs(b, { onClick: () => {
    d(null);
    const s = je.filter((t) => t.isActive).map((t) => t.id);
    N.reset({ name: "", description: "", basePrice: "", categoryId: 0, additionalCategoryIds: [], outletIds: s, slug: "", imageUrl: "", isActive: true, sortOrder: 0, preparationTime: 15, brandId: B || 0, bulkServingOptions: [], productSalesChannels: ke(W), channelPrices: Te(W) }), i(true);
  }, children: [e.jsx(De, { className: "w-4 h-4 mr-2" }), "Add Product"] })] })] })] });
}
const la = { totalOrders: 0, totalUsers: 0, totalProducts: 0, totalOutlets: 0, completedOrders: 0, totalRevenue: "0", recentOrders: [] };
function gn() {
  const [n, setLocation] = rt(), [i, o] = p.useState("all_time"), [d, m] = p.useState(""), { admin: x } = lr(), { selectedBrandId: h } = as(), { data: f, isLoading: P } = pe({ queryKey: ["/api/admin/stats/dashboard", { period: i, date: d, brandId: h }], enabled: !!h, placeholderData: la, refetchOnWindowFocus: false, staleTime: 60 * 1e3 }), { data: w, isLoading: g } = pe({ queryKey: ["/api/admin/stats/daily-progress", { days: 7, brandId: h }], enabled: !!h, placeholderData: [] }), R = !!x && at(x.role, "approveRiderPayout"), { data: O, isLoading: y } = pe({ queryKey: ["/api/admin/payouts/pending", { limit: 5, brandId: h }], enabled: !!h && R, refetchOnWindowFocus: false, staleTime: 30 * 1e3 }), H = () => n === "/control/outlets" ? "outlets" : n === "/control/categories" ? "categories" : n === "/control/products" ? "products" : n === "/control/orders" ? "orders" : n === "/control/users" ? "users" : n === "/control/analytics" ? "analytics" : n === "/control/settings" ? "settings" : "dashboard", ee = () => i === "all_time" ? "All Time" : i === "today" ? d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Today" : i === "yesterday" ? d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Yesterday" : "All Time", X = () => {
    const a = /* @__PURE__ */ new Date();
    let l;
    d ? l = new Date(d) : i === "today" ? l = new Date(a.getFullYear(), a.getMonth(), a.getDate()) : i === "yesterday" ? l = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 1) : l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const L = new Date(l.getTime() - 24 * 60 * 60 * 1e3);
    m(L.toISOString().split("T")[0]), o("today");
  }, J = () => {
    const a = /* @__PURE__ */ new Date();
    let l;
    d ? l = new Date(d) : i === "today" ? l = new Date(a.getFullYear(), a.getMonth(), a.getDate()) : i === "yesterday" ? l = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 1) : l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const L = new Date(l.getTime() + 24 * 60 * 60 * 1e3), Q = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    L <= Q && (m(L.toISOString().split("T")[0]), o("today"));
  }, V = () => {
    const a = /* @__PURE__ */ new Date();
    let l;
    if (d) l = new Date(d);
    else if (i === "today") l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    else if (i === "yesterday") l = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 1);
    else return false;
    const L = new Date(l.getTime() + 24 * 60 * 60 * 1e3), Q = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    return L <= Q;
  }, q = () => x ? ["super_admin", "admin", "manager"].includes(x.role) : false, v = [{ title: "Total Orders", value: (f == null ? void 0 : f.totalOrders) || 0, icon: Ft, description: "All time orders", color: "text-blue-600", permission: "viewOrderMetrics" }, { title: "Completed Orders", value: (f == null ? void 0 : f.completedOrders) || 0, icon: Be, description: "Delivered orders", color: "text-green-600", permission: "viewOrderMetrics" }, { title: "Revenue", value: `\u20A6${parseFloat((f == null ? void 0 : f.totalRevenue) || "0").toLocaleString("en-NG")}`, icon: er, description: "From delivered orders", color: "text-purple-600", permission: "viewTotalRevenue" }, { title: "Total Users", value: (f == null ? void 0 : f.totalUsers) || 0, icon: Lt, description: "Registered customers", color: "text-#F02819", permission: "viewUserMetrics" }];
  if (P) return e.jsx(Xs, { currentPage: H(), children: e.jsxs("div", { className: "space-y-6", children: [e.jsx("h2", { className: "text-3xl font-bold", children: "Dashboard" }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: Array.from({ length: 4 }).map((a, l) => e.jsxs(Y, { className: "animate-pulse", children: [e.jsx(re, { className: "pb-3", children: e.jsx("div", { className: "h-4 bg-gray-200 rounded w-3/4" }) }), e.jsx(G, { children: e.jsx("div", { className: "h-8 bg-gray-200 rounded w-1/2" }) })] }, l)) })] }) });
  const Z = () => {
    var _a;
    const a = H();
    return a === "outlets" ? e.jsx(Zt, {}) : a === "categories" ? e.jsx(sa, {}) : a === "products" ? e.jsx(ia, {}) : a !== "dashboard" ? e.jsxs("div", { className: "space-y-6", children: [e.jsx("h2", { className: "text-3xl font-bold capitalize", children: a }), e.jsxs("div", { className: "text-center py-12", children: [e.jsxs("p", { className: "text-gray-500 dark:text-gray-400 text-lg", children: [a.charAt(0).toUpperCase() + a.slice(1), " management coming soon"] }), e.jsxs("p", { className: "text-sm text-gray-400 dark:text-gray-500 mt-2", children: ["This section will include comprehensive ", a, " management tools"] })] })] }) : e.jsxs("div", { className: "space-y-6", children: [e.jsxs("div", { className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [e.jsx("h2", { className: "text-3xl font-bold", children: "Dashboard" }), e.jsxs("div", { className: "flex items-center gap-3", children: [e.jsxs(ye, { value: i, onValueChange: (l) => {
      o(l), l === "all_time" && m("");
    }, children: [e.jsx(ve, { className: "w-40", children: e.jsx(be, {}) }), e.jsxs(Ne, { children: [e.jsx(z, { value: "all_time", children: "All Time" }), e.jsx(z, { value: "today", children: "Today" }), e.jsx(z, { value: "yesterday", children: "Yesterday" })] })] }), i !== "all_time" && e.jsxs("div", { className: "flex items-center gap-2", children: [e.jsx(b, { variant: "outline", size: "sm", onClick: X, className: "h-8 w-8 p-0", children: e.jsx(mr, { className: "h-4 w-4" }) }), e.jsx("span", { className: "text-sm font-medium min-w-[100px] text-center", children: ee() }), e.jsx(b, { variant: "outline", size: "sm", onClick: J, disabled: !V(), className: "h-8 w-8 p-0", children: e.jsx(ur, { className: "h-4 w-4" }) })] }), e.jsxs("div", { className: "flex items-center text-sm text-gray-500 dark:text-gray-400", children: [e.jsx(cr, { className: "h-4 w-4 mr-2" }), "Last updated: ", (/* @__PURE__ */ new Date()).toLocaleTimeString()] })] })] }), e.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: v.map((l) => {
      const L = l.icon;
      return e.jsx(Ze, { permission: l.permission, children: e.jsxs(Y, { className: "relative overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 bg-white/60 backdrop-blur-lg border border-white/40 dark:bg-gray-800/80 dark:border-gray-700", style: { borderRadius: "16px" }, children: [e.jsx("div", { style: { position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: `radial-gradient(circle, ${l.color.includes("blue") ? "rgba(37,99,235,0.08)" : l.color.includes("green") ? "rgba(22,163,74,0.08)" : l.color.includes("purple") ? "rgba(147,51,234,0.08)" : "rgba(240,40,25,0.08)"} 0%, transparent 70%)`, borderTopRightRadius: "16px" } }), e.jsxs(re, { className: "flex flex-row items-center justify-between space-y-0 pb-2 relative z-10", children: [e.jsx(xe, { className: "text-sm font-semibold text-gray-600 dark:text-gray-300", children: l.title }), e.jsx("div", { className: `p-2 rounded-lg bg-gray-50/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm ${l.color}`, children: e.jsx(L, { className: "h-5 w-5" }) })] }), e.jsxs(G, { className: "relative z-10", children: [e.jsx("div", { className: "text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white", style: { letterSpacing: "-0.02em" }, children: l.value }), e.jsx("p", { className: "text-xs font-medium text-gray-500 dark:text-gray-400 mt-1", children: l.description })] })] }) }, l.title);
    }) }), e.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [e.jsx(Ze, { permission: "viewDailyAnalytics", children: q() ? e.jsxs(Y, { className: "bg-white/60 backdrop-blur-lg border border-white/40 dark:bg-gray-800/80 dark:border-gray-700 shadow-lg", style: { borderRadius: "16px" }, children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg font-bold text-gray-900 dark:text-white", children: "Daily Analytics (Last 7 Days)" }), e.jsx(we, { className: "text-sm text-gray-500", children: "Track signups, orders, delivered orders, and sales by day" })] }), e.jsx(G, { children: g ? e.jsx("div", { className: "space-y-2", children: [...Array(7)].map((l, L) => e.jsx("div", { className: "h-12 bg-gray-200 animate-pulse rounded" }, L)) }) : w && w.length > 0 ? e.jsxs(Tt, { children: [e.jsx(Dt, { children: e.jsxs(Zs, { className: "bg-gray-50/50 dark:bg-gray-800/50", children: [e.jsx(Pe, { children: "Date" }), e.jsx(Pe, { className: "text-center", children: "Signups" }), e.jsx(Pe, { className: "text-center", children: "Orders" }), e.jsx(Pe, { className: "text-center", children: "Delivered" }), e.jsx(Pe, { className: "text-center", children: "Conv. Rate" }), e.jsx(Pe, { className: "text-center", children: "Conv. %" }), e.jsx(Ze, { permission: "viewSalesData", children: e.jsx(Pe, { className: "text-right", children: "Sales" }) })] }) }), e.jsx(Rt, { children: w.map((l) => {
      const dailyOrders = l.dailyOrders !== undefined ? l.dailyOrders : (l.orders !== undefined ? l.orders : 0);
      const delivered = l.delivered !== undefined ? l.delivered : (l.deliveredOrders !== undefined ? l.deliveredOrders : 0);
      const sales = l.totalSales !== undefined ? l.totalSales : (l.sales !== undefined ? l.sales : 0);
      const formattedDate = l.formattedDate || l.date || "";
      const L = dailyOrders > 0 ? delivered / dailyOrders : 0, Q = L * 100;
      return e.jsxs(Zs, { className: "hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors", children: [e.jsx(Oe, { className: "font-semibold text-gray-700 dark:text-gray-200", children: formattedDate }), e.jsx(Oe, { className: "text-center font-medium", children: l.signups || 0 }), e.jsx(Oe, { className: "text-center font-medium", children: dailyOrders }), e.jsx(Oe, { className: "text-center font-medium", children: delivered }), e.jsx(Oe, { className: "text-center font-medium", children: e.jsxs("span", { className: `px-2 py-1 rounded-full text-xs ${L > 0.8 ? "bg-green-100 text-green-700" : L > 0.5 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`, children: [delivered, "/", dailyOrders] }) }), e.jsx(Oe, { className: "text-center font-bold", children: e.jsxs("span", { className: Q > 80 ? "text-green-600" : Q > 50 ? "text-yellow-600" : "text-red-600", children: [Q.toFixed(1), "%"] }) }), e.jsx(Ze, { permission: "viewSalesData", children: e.jsxs(Oe, { className: "text-right font-bold text-gray-900 dark:text-white", children: ["\u20A6", sales.toLocaleString()] }) })] }, l.date || formattedDate);
    }) })] }) : e.jsx("div", { className: "text-center py-8 text-gray-500", children: "No daily analytics data available" }) })] }) : e.jsxs(Y, { className: "bg-white/60 backdrop-blur-lg border border-white/40 dark:bg-gray-800/80 dark:border-gray-700 shadow-lg", style: { borderRadius: "16px" }, children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg font-bold text-gray-900 dark:text-white", children: "Recent Orders" }), e.jsx(we, { className: "text-sm text-gray-500", children: "Latest customer orders" })] }), e.jsx(G, { children: e.jsx("div", { className: "space-y-4", children: f == null ? void 0 : f.recentOrders.map((l) => e.jsxs("div", { className: "flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow", children: [e.jsxs("div", { children: [e.jsx("p", { className: "font-bold text-gray-900 dark:text-white text-md", children: l.orderNumber }), e.jsx("p", { className: "text-sm font-medium text-gray-500", children: l.customerName })] }), e.jsxs("div", { className: "text-right", children: [e.jsxs("p", { className: "font-extrabold text-gray-900 dark:text-white text-md mb-1", children: ["\u20A6", l.totalAmount] }), e.jsx("p", { className: `text-[11px] uppercase tracking-wide font-bold px-2.5 py-1 rounded-full inline-block ${l.status === "completed" || l.status === "delivered" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`, children: l.status })] })] }, l.id)) }) })] }) }), e.jsxs("div", { className: "space-y-6", children: [e.jsxs(Y, { className: "bg-white/60 backdrop-blur-lg border border-white/40 dark:bg-gray-800/80 dark:border-gray-700 shadow-lg", style: { borderRadius: "16px" }, children: [e.jsxs(re, { children: [e.jsx(xe, { className: "text-lg font-bold text-gray-900 dark:text-white", children: "Quick Actions" }), e.jsx(we, { className: "text-sm text-gray-500", children: "Common admin tasks" })] }), e.jsx(G, { children: e.jsxs("div", { className: "space-y-3", children: [e.jsx("div", { onClick: () => setLocation("/control/products"), className: "group p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-white cursor-pointer shadow-sm hover:shadow-md transition-all", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx("div", { className: "p-2 rounded-lg bg-blue-100 text-blue-600 mr-4 group-hover:scale-110 transition-transform", children: e.jsx(Be, { className: "h-5 w-5" }) }), e.jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-200", children: "Add New Product" })] }) }), e.jsx("div", { onClick: () => setLocation("/control/outlets"), className: "group p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-green-50 hover:to-white cursor-pointer shadow-sm hover:shadow-md transition-all", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx("div", { className: "p-2 rounded-lg bg-green-100 text-green-600 mr-4 group-hover:scale-110 transition-transform", children: e.jsx(bs, { className: "h-5 w-5" }) }), e.jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-200", children: "Add New Outlet" })] }) }), e.jsx("div", { onClick: () => setLocation("/control/analytics"), className: "group p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-white cursor-pointer shadow-sm hover:shadow-md transition-all", children: e.jsxs("div", { className: "flex items-center", children: [e.jsx("div", { className: "p-2 rounded-lg bg-purple-100 text-purple-600 mr-4 group-hover:scale-110 transition-transform", children: e.jsx(er, { className: "h-5 w-5" }) }), e.jsx("span", { className: "font-semibold text-gray-700 dark:text-gray-200", children: "View Analytics" })] }) })] }) })] }), R && e.jsxs(Y, { className: "bg-white/60 backdrop-blur-lg border border-amber-200/50 dark:bg-gray-800/80 shadow-lg", style: { borderRadius: "16px" }, children: [e.jsxs(re, { children: [e.jsxs(xe, { className: "flex items-center justify-between text-lg font-bold text-gray-900 dark:text-white", children: [e.jsx("span", { children: "Pending Payout Approvals" }), e.jsx(Ae, { variant: "outline", className: "bg-amber-100 text-amber-800 border-amber-200 font-bold", children: (_a = O == null ? void 0 : O.count) != null ? _a : 0 })] }), e.jsx(we, { className: "text-sm text-gray-500", children: "Awaiting admin OTP approval (transfer not yet initiated)" })] }), e.jsx(G, { children: y ? e.jsx("div", { className: "text-sm text-gray-500", children: "Loading pending approvals..." }) : O && O.items.length > 0 ? e.jsx("div", { className: "space-y-3", children: O.items.map((l) => e.jsxs("div", { className: "p-4 bg-white dark:bg-gray-800 border border-amber-100 dark:border-amber-900 rounded-xl shadow-sm hover:shadow-md transition-shadow", children: [e.jsxs("div", { className: "flex items-center justify-between", children: [e.jsxs("div", { className: "text-sm font-bold text-gray-700 dark:text-gray-300", children: ["#", l.orderNumber] }), e.jsxs("div", { className: "text-md font-extrabold text-amber-600", children: ["\u20A6", (l.amountKobo / 100).toLocaleString("en-NG")] })] }), e.jsx("div", { className: "text-xs font-medium text-gray-600 mt-1.5 bg-gray-50 inline-block px-2 py-0.5 rounded", children: l.riderName || "Rider not set" }), e.jsx("div", { className: "text-[11px] text-gray-400 mt-2 font-medium uppercase tracking-wider", children: l.submittedAt ? new Date(l.submittedAt).toLocaleString() : "Submitted" })] }, l.payoutId)) }) : e.jsx("div", { className: "text-sm text-gray-500 italic p-4 bg-gray-50 rounded-xl text-center", children: "No pending payout approvals." }) })] })] })] })] });
  };
  return e.jsx(Xs, { currentPage: H(), children: Z() });
}
export { gn as default };
