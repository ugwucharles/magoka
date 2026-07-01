let r = null;
function o() {
  return typeof window > "u" || window.PaystackPop ? Promise.resolve() : (r || (r = new Promise((t, n) => {
    const e = document.createElement("script");
    e.src = "https://js.paystack.co/v1/inline.js", e.async = true, e.onload = () => t(), e.onerror = () => {
      r = null, n(new Error("Paystack failed to load. Please try again."));
    }, document.head.appendChild(e);
  })), r);
}
export { o as l };
