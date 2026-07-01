const c = { unpaid: { customerText: "Payment incomplete", internalText: "Unpaid", color: "bg-red-50 text-red-700", icon: "CreditCard", isTerminal: false, isActive: false }, pending: { customerText: "Payment confirmed", internalText: "Pending", color: "bg-yellow-100 text-yellow-800", icon: "Clock", isTerminal: false, isActive: true }, confirmed: { customerText: "Payment confirmed", internalText: "Payment confirmed", color: "bg-green-100 text-green-800", icon: "CheckCircle", isTerminal: false, isActive: true }, accepted: { customerText: "Preparing your order", internalText: "Order accepted", color: "bg-blue-100 text-blue-800", icon: "CheckCircle", isTerminal: false, isActive: true }, in_progress: { customerText: "Being prepared", internalText: "Cooking in progress", color: "bg-orange-100 text-orange-800", icon: "Package", isTerminal: false, isActive: true }, awaiting_pickup: { customerText: "Awaiting pickup", internalText: "Awaiting Pickup", color: "bg-indigo-100 text-indigo-800", icon: "Package", isTerminal: false, isActive: true }, ready_for_pickup: { customerText: "Ready for pickup", internalText: "Ready for pickup", color: "bg-green-100 text-green-800", icon: "Package", isTerminal: false, isActive: true }, out_for_delivery: { customerText: "Out for delivery", internalText: "Out for delivery", color: "bg-purple-100 text-purple-800", icon: "Truck", isTerminal: false, isActive: true }, delivered: { customerText: "Delivered", internalText: "Delivered to customer", color: "bg-green-100 text-green-800", icon: "CheckCircle", isTerminal: true, isActive: false }, completed: { customerText: "Completed", internalText: "Completed", color: "bg-emerald-100 text-emerald-800", icon: "CheckCircle", isTerminal: true, isActive: false }, cancelled_by_customer: { customerText: "Cancelled by you", internalText: "Cancelled by customer", color: "bg-red-100 text-red-800", icon: "XCircle", isTerminal: true, isActive: false }, cancelled_by_outlet: { customerText: "Cancelled by restaurant", internalText: "Cancelled by outlet", color: "bg-red-100 text-red-800", icon: "XCircle", isTerminal: true, isActive: false }, failed: { customerText: "Order failed", internalText: "Order failed", color: "bg-red-100 text-red-800", icon: "XCircle", isTerminal: true, isActive: false }, refunded: { customerText: "Refunded", internalText: "Refunded / finance logged", color: "bg-gray-100 text-gray-800", icon: "RefreshCw", isTerminal: true, isActive: false } }, a = { unpaid: "Mark as Unpaid", pending: "Confirm Payment", confirmed: "Confirm Payment", accepted: "Accept Order", in_progress: "Start Preparing", awaiting_pickup: "Awaiting Pickup", ready_for_pickup: "Mark Ready for Pickup", out_for_delivery: "Send Out for Delivery", delivered: "Mark as Delivered", completed: "Completed", cancelled_by_customer: "Cancel by Customer", cancelled_by_outlet: "Cancel Order", failed: "Mark as Failed", refunded: "Mark as Refunded" };
function l(t, e) {
  const r = String(t || "").trim().toLowerCase(), n = String((e == null ? void 0 : e.type) || "").trim().toLowerCase(), i = String((e == null ? void 0 : e.externalStatus) || "").trim().toLowerCase();
  if (n === "chowdeck") {
    if (r === "ready_for_pickup" && i === "awaiting_pickup") return "awaiting_pickup";
    if (r === "delivered" && ["success", "complete", "completed"].includes(i)) return "completed";
  }
  if (n === "foodelo") {
    if (r === "ready_for_pickup" && i === "awaiting_pickup") return "awaiting_pickup";
    if (r === "delivered" && i === "completed") return "completed";
  }
  return r;
}
function o(t) {
  const e = c[t];
  return (e == null ? void 0 : e.customerText) || t;
}
function s(t) {
  const e = c[t];
  return (e == null ? void 0 : e.internalText) || t;
}
function d(t) {
  return a[t] || t;
}
export { d as a, l as b, s as c, o as g };
