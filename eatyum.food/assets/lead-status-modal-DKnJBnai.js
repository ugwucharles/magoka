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
import { r as c, V as v, c as S, j as e, B as p, W as _ } from "./index-DOfu0sXg.js";
import { u as C } from "./useMutation-CVmbONMy.js";
import { D as f, a as q, b as w, c as D } from "./dialog-BUvIuveX.js";
import { L as g } from "./label-B38UEnoM.js";
import { T as L } from "./textarea-__Yhw9VH.js";
import { S as N, a as T, b as k, c as E, d as P } from "./select-ets7bQkN.js";
const F = { pending_call: "Pending Call", no_answer: "No Answer", interested: "Interested", not_interested: "Not Interested", callback_requested: "Callback Requested", converted: "Converted", do_not_call: "Do Not Call" }, A = { pending_call: "bg-yellow-100 text-yellow-800", no_answer: "bg-gray-100 text-gray-800", interested: "bg-green-100 text-green-800", not_interested: "bg-red-100 text-red-800", callback_requested: "bg-blue-100 text-blue-800", converted: "bg-purple-100 text-purple-800", do_not_call: "bg-red-200 text-red-900" };
function B({ isOpen: x, onClose: a, userId: l, currentStatus: m, currentNotes: h, onSuccess: n }) {
  const [i, b] = c.useState(m || "pending_call"), [o, j] = c.useState(h || ""), d = v(), { toast: u } = S(), r = C({ mutationFn: (t) => __async(null, null, function* () {
    return (yield _("POST", "/api/admin/leads/status", t)).json();
  }), onSuccess: () => {
    d.invalidateQueries({ queryKey: ["/api/admin/users", l.toString(), "lead-status"] }), d.invalidateQueries({ queryKey: ["/api/admin/users"] }), u({ title: "Lead status updated successfully" }), n == null || n(), a();
  }, onError: (t) => {
    u({ title: "Error updating lead status", description: t.message, variant: "destructive" });
  } }), y = (t) => {
    t.preventDefault();
    const s = { userId: l, entityType: "user", status: i, notes: o.trim() || void 0 };
    r.mutate(s);
  };
  return e.jsx(f, { open: x, onOpenChange: a, children: e.jsxs(q, { children: [e.jsx(w, { children: e.jsx(D, { children: "Update Lead Status" }) }), e.jsxs("form", { onSubmit: y, className: "space-y-4", children: [e.jsxs("div", { children: [e.jsx(g, { htmlFor: "status", children: "Status" }), e.jsxs(N, { value: i, onValueChange: b, children: [e.jsx(T, { children: e.jsx(k, {}) }), e.jsx(E, { children: Object.entries(F).map(([t, s]) => e.jsx(P, { value: t, children: s }, t)) })] })] }), e.jsxs("div", { children: [e.jsx(g, { htmlFor: "notes", children: "Notes" }), e.jsx(L, { id: "notes", value: o, onChange: (t) => j(t.target.value), placeholder: "Add notes about the call...", rows: 3 })] }), e.jsxs("div", { className: "flex gap-2", children: [e.jsx(p, { type: "submit", disabled: r.isPending, children: r.isPending ? "Updating..." : "Update Status" }), e.jsx(p, { type: "button", variant: "outline", onClick: a, children: "Cancel" })] })] })] }) });
}
export { B as L, F as a, A as s };
