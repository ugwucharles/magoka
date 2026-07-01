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
import { r as y, j as e, E as N, H as b, I as E, F as v, B as T, a2 as G, b0 as S, T as _ } from "./index-DOfu0sXg.js";
import { T as R } from "./triangle-alert-BZPq43t0.js";
import { C as k } from "./circle-x-ve1y_gH0.js";
function K() {
  const [u, p] = y.useState(false), [r, P] = y.useState(null), w = () => __async(null, null, function* () {
    var x, h, j, f;
    p(true);
    const s = [], a = "AIzaSyD0kF8hlXvFyFb9iVNMeTjUhZ8KWcQlWJQ", A = !!a;
    console.log("API Key found:", a.substring(0, 10) + "...");
    let l = false, g = false, m = false, i = false;
    try {
      if ((h = (x = window.google) == null ? void 0 : x.maps) != null && h.places) l = true, console.log("Google Maps Places API is loaded");
      else {
        const { Loader: o } = yield S(() => __async(null, null, function* () {
          const { Loader: t } = yield import("./index-D-8nYH0_.js");
          return { Loader: t };
        }), []);
        yield new o({ apiKey: a, version: "weekly", libraries: ["places"] }).load(), l = !!((f = (j = window.google) == null ? void 0 : j.maps) != null && f.places), l ? console.log("Google Maps Places API loaded successfully") : s.push("Could not load Google Maps Places API");
      }
    } catch (o) {
      console.error("Error loading Places API:", o), s.push(`Places API loading error: ${o}`);
    }
    if (l) try {
      const o = new google.maps.places.AutocompleteService();
      console.log("AutocompleteService created successfully");
      const d = yield new Promise((t) => {
        o.getPlacePredictions({ input: "Lagos Nigeria", types: ["address"], componentRestrictions: { country: "ng" } }, (I, c) => {
          console.log("Autocomplete test status:", c), console.log("Autocomplete test results:", I), c === google.maps.places.PlacesServiceStatus.OK ? (g = true, t(true)) : c === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT ? (i = true, s.push("Google Places API quota exceeded"), t(false)) : c === google.maps.places.PlacesServiceStatus.REQUEST_DENIED ? (s.push("Google Places API request denied - check API key and restrictions"), t(false)) : (s.push(`Autocomplete test failed: ${c}`), t(false));
        });
      });
      console.log("Autocomplete test result:", d);
    } catch (o) {
      console.error("Autocomplete test error:", o), s.push(`Autocomplete test error: ${o}`);
    }
    try {
      const o = `https://maps.googleapis.com/maps/api/geocode/json?address=Lagos,Nigeria&key=${a}`;
      console.log("Testing geocoding with URL:", o.replace(a, "***"));
      const t = yield (yield fetch(o)).json();
      console.log("Geocoding response status:", t.status), console.log("Geocoding response:", t), t.status === "OK" ? m = true : t.status === "OVER_QUERY_LIMIT" ? (i = true, s.push("Geocoding API quota exceeded")) : t.status === "REQUEST_DENIED" ? s.push(`Geocoding API request denied: ${t.error_message || "Unknown error"}`) : s.push(`Geocoding test failed: ${t.status} - ${t.error_message || "Unknown error"}`);
    } catch (o) {
      console.error("Geocoding test error:", o), s.push(`Geocoding test error: ${o}`);
    }
    P({ apiKeyExists: A, placesApiLoaded: l, autocompleteTest: g, geocodingTest: m, quotaExceeded: i, errors: s }), p(false);
  }), n = ({ success: s }) => s ? e.jsx(_, { className: "h-5 w-5 text-green-500" }) : e.jsx(k, { className: "h-5 w-5 text-red-500" });
  return e.jsx("div", { className: "container mx-auto py-8 px-4", children: e.jsxs(N, { className: "max-w-2xl mx-auto", children: [e.jsxs(b, { children: [e.jsx(E, { children: "Google Maps API Debug Tool" }), e.jsx("p", { className: "text-sm text-gray-600", children: "This tool helps debug why address autocomplete isn't working" })] }), e.jsxs(v, { className: "space-y-4", children: [e.jsx(T, { onClick: w, disabled: u, className: "w-full", children: u ? e.jsxs(e.Fragment, { children: [e.jsx(G, { className: "mr-2 h-4 w-4 animate-spin" }), "Testing Google Maps API..."] }) : "Run API Debug Test" }), r && e.jsxs("div", { className: "space-y-3", children: [e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded", children: [e.jsx("span", { children: "API Key Configured" }), e.jsx(n, { success: r.apiKeyExists })] }), e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded", children: [e.jsx("span", { children: "Places API Loaded" }), e.jsx(n, { success: r.placesApiLoaded })] }), e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded", children: [e.jsx("span", { children: "Autocomplete Service Working" }), e.jsx(n, { success: r.autocompleteTest })] }), e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded", children: [e.jsx("span", { children: "Geocoding API Working" }), e.jsx(n, { success: r.geocodingTest })] }), r.quotaExceeded && e.jsxs("div", { className: "flex items-center justify-between p-3 border rounded bg-yellow-50", children: [e.jsx("span", { className: "text-yellow-800", children: "API Quota Status" }), e.jsxs("div", { className: "flex items-center", children: [e.jsx(R, { className: "h-5 w-5 text-yellow-500" }), e.jsx("span", { className: "ml-2 text-yellow-800", children: "Quota Exceeded" })] })] }), r.errors.length > 0 && e.jsxs("div", { className: "space-y-2", children: [e.jsx("h4", { className: "font-semibold text-red-600", children: "Errors Found:" }), e.jsx("div", { className: "bg-red-50 p-3 rounded border border-red-200", children: r.errors.map((s, a) => e.jsxs("div", { className: "text-sm text-red-700", children: ["\u2022 ", s] }, a)) })] }), r.apiKeyExists && !r.quotaExceeded && r.errors.length === 0 && e.jsx("div", { className: "bg-green-50 p-3 rounded border border-green-200", children: e.jsx("p", { className: "text-green-700 text-sm", children: "\u2705 All Google Maps services are working properly" }) })] })] })] }) });
}
export { K as default };
