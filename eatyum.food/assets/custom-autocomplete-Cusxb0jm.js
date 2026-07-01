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
import {
  r as s,
  j as a,
  a2 as F
} from "./index-DOfu0sXg.js";
import {
  Loader as B
} from "./index-D-8nYH0_.js";
import {
  M as O
} from "./map-pin-ChG4yLkU.js";
const p = 50, R = 3, Q = 400, q = ({
  onPlaceSelect: j,
  placeholder: C = "Enter your address",
  className: L = ""
}) => {
  const [I, A] = s.useState(""), [u, h] = s.useState([]), [$, x] = s.useState(false), [E, l] = s.useState(false), [b, P] = s.useState(-1), [D, _] = s.useState(false), [g, k] = s.useState(0), y = s.useRef(null), v = s.useRef(null), S = s.useRef(/* @__PURE__ */ new Map()), c = s.useRef(null), N = s.useRef(""), w = s.useRef(false);
  s.useEffect(() => {
    (() => __async(null, null, function* () {
      var t, o, n, i;
      try {
        if (typeof window < "u" && ((o = (t = window.google) == null ? void 0 : t.maps) != null && o.places)) {
          y.current = new google.maps.places.AutocompleteService();
          const d = document.createElement("div");
          v.current = new google.maps.places.PlacesService(d), w.current = true, _(true), console.log("\u2705 Google Maps services already loaded");
          return;
        }
        const r = "AIzaSyD0kF8hlXvFyFb9iVNMeTjUhZ8KWcQlWJQ";
        if (console.log("\u{1F504} Loading Google Maps API with key:", r.substring(0, 10) + "..."), yield new B({
          apiKey: r,
          version: "weekly",
          libraries: ["places"]
        }).load(), console.log("\u2705 Google Maps library loaded"), !((i = (n = window.google) == null ? void 0 : n.maps) != null && i.places)) {
          console.error("\u274C Google Maps Places library not available after loading");
          return;
        }
        y.current = new google.maps.places.AutocompleteService();
        const m = document.createElement("div");
        v.current = new google.maps.places.PlacesService(m), w.current = true, _(true), console.log("\u2705 Google Maps API loaded and services initialized");
      } catch (r) {
        console.error("\u274C Failed to load Google Maps API:", r), console.error("Error details:", (r == null ? void 0 : r.message) || "Unknown error");
      }
    }))();
  }, []), s.useEffect(() => () => {
    c.current && clearTimeout(c.current);
  }, []);
  const G = s.useCallback((e) => __async(null, null, function* () {
    if (c.current && clearTimeout(c.current), e.length < R) {
      h([]), l(false);
      return;
    }
    const t = e.toLowerCase().trim();
    if (S.current.has(t)) {
      console.log(`Cache hit for: "${e}"`);
      const o = S.current.get(t);
      h(o), l(o.length > 0);
      return;
    }
    c.current = setTimeout(() => __async(null, null, function* () {
      if (w.current && y.current && g < p) {
        if (N.current === e) {
          console.log(`Preventing duplicate API call for: "${e}"`);
          return;
        }
        try {
          x(true), N.current = e, console.log(`\u{1F50D} Making Google Places API call for: "${e}" (${g + 1}/${p})`);
          const o = {
            input: e,
            types: ["geocode"],
            componentRestrictions: {
              country: "ng"
            },
            locationBias: {
              center: {
                lat: 6.5244,
                lng: 3.3792
              },
              radius: 5e4
            }
          }, n = yield new Promise((r, f) => {
            y.current.getPlacePredictions(o, (m, d) => {
              console.log(`\u{1F4CD} Places API response - Status: ${d}, Results: ${(m == null ? void 0 : m.length) || 0}`), d === google.maps.places.PlacesServiceStatus.OK && m ? r(m.slice(0, 5)) : d === google.maps.places.PlacesServiceStatus.ZERO_RESULTS ? (console.log("\u{1F4CD} No results found for query"), r([])) : d === google.maps.places.PlacesServiceStatus.REQUEST_DENIED ? (console.error("\u274C Places API REQUEST_DENIED - check if Maps JavaScript API is enabled"), f(new Error(`Places API error: ${d} - Maps JavaScript API may not be enabled`))) : (console.warn("\u26A0\uFE0F Places API error:", d), f(new Error(`Places API error: ${d}`)));
            });
          });
          k((r) => r + 1);
          const i = n.map((r) => ({
            description: r.description,
            place_id: r.place_id,
            structured_formatting: {
              main_text: r.structured_formatting.main_text,
              secondary_text: r.structured_formatting.secondary_text || ""
            },
            isLocal: false
          }));
          S.current.set(t, i), h(i), l(i.length > 0), console.log(`Google API successful: ${i.length} results`);
        } catch (o) {
          console.error("Google API error:", o), h([]), l(false);
        } finally {
          x(false);
        }
      } else console.log(`Google API not available or limit reached. Loaded: ${w.current}, Service: ${!!y.current}, API calls: ${g}/${p}`), h([]), l(false);
    }), Q);
  }), [g]), T = (e) => {
    const t = e.target.value;
    A(t), G(t);
  }, M = (e) => __async(null, null, function* () {
    var t;
    if (c.current && clearTimeout(c.current), A(e.description), l(false), P(-1), !v.current) {
      console.error("Places service not available");
      return;
    }
    try {
      x(true);
      const o = yield new Promise((n, i) => {
        v.current.getDetails({
          placeId: e.place_id,
          fields: ["geometry", "formatted_address"]
        }, (r, f) => {
          f === google.maps.places.PlacesServiceStatus.OK && r ? n(r) : i(new Error(`Place details error: ${f}`));
        });
      });
      if ((t = o.geometry) != null && t.location) {
        const n = o.formatted_address || e.description;
        console.log("\u2705 Address selection successful:", {
          selectedPrediction: e.description,
          googleFormatted: o.formatted_address,
          finalAddress: n,
          coordinates: {
            latitude: o.geometry.location.lat(),
            longitude: o.geometry.location.lng()
          }
        }), j({
          latitude: o.geometry.location.lat(),
          longitude: o.geometry.location.lng(),
          address: n,
          placeId: e.place_id
        });
      }
    } catch (o) {
      console.error("\u274C Error getting place details:", o);
    } finally {
      x(false);
    }
  }), U = (e) => {
    if (!(!E || u.length === 0)) switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), P((t) => (t + 1) % u.length);
        break;
      case "ArrowUp":
        e.preventDefault(), P((t) => t <= 0 ? u.length - 1 : t - 1);
        break;
      case "Enter":
        e.preventDefault(), b >= 0 && M(u[b]);
        break;
      case "Escape":
        l(false), P(-1);
        break;
    }
  }, K = () => {
    c.current && clearTimeout(c.current), setTimeout(() => l(false), 200);
  };
  return a.jsxs("div", {
    className: `relative w-full ${L}`,
    children: [a.jsxs("div", {
      className: "relative",
      children: [a.jsx("input", {
        type: "text",
        value: I,
        onChange: T,
        onFocus: () => l(u.length > 0),
        onBlur: K,
        onKeyDown: U,
        placeholder: C,
        className: "w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
      }), $ && a.jsx("div", {
        className: "absolute right-3 top-1/2 transform -translate-y-1/2",
        children: a.jsx(F, {
          className: "h-5 w-5 animate-spin text-gray-400"
        })
      })]
    }), E && u.length > 0 && a.jsx("div", {
      className: "absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-64 overflow-y-auto",
      children: u.map((e, t) => a.jsx("div", {
        className: `px-3 py-2 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 ${t === b ? "bg-gray-50" : ""}`,
        onClick: () => M(e),
        children: a.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [a.jsx("div", {
            className: "flex-shrink-0",
            children: a.jsx(O, {
              className: "h-4 w-4 text-gray-400"
            })
          }), a.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [a.jsx("div", {
              className: "text-sm font-medium text-gray-900 truncate",
              children: e.structured_formatting.main_text
            }), a.jsx("div", {
              className: "text-sm text-gray-500 truncate",
              children: e.structured_formatting.secondary_text
            })]
          })]
        })
      }, e.place_id))
    }), !D && I.length >= R && a.jsx("div", {
      className: "mt-2 text-xs text-amber-600",
      children: "Loading address search..."
    }), g >= p - 5 && a.jsxs("div", {
      className: "mt-2 text-xs text-gray-500",
      children: ["API calls used: ", g, "/", p, g >= p && " (limit reached - please refresh page)"]
    })]
  });
};
export {
  q as C
};
