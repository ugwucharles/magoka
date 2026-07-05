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
import {
  N as E,
  j as e,
  r as y,
  c as D,
  a2 as f,
  B as S
} from "./index-DOfu0sXg.js";
import {
  M as I
} from "./message-circle-Ctbm3h4-.js";
import {
  D as k,
  a as C,
  b as M,
  c as A
} from "./dialog-BUvIuveX.js";
import {
  Loader as P
} from "./index-D-8nYH0_.js";
import {
  C as U
} from "./custom-autocomplete-Cusxb0jm.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = E("Navigation", [
  ["polygon", {
    points: "3 11 22 2 13 21 11 13 3 11",
    key: "1ltx0t"
  }]
]);
function O() {
  const l = "+23456789012", i = "Hi magoka! I need help with my order.", d = () => {
    const r = encodeURIComponent(i), u = `https://wa.me/${l.replace("+", "")}?text=${r}`;
    window.open(u, "_blank");
  };
  return e.jsxs("button", {
    onClick: d,
    className: "fixed bottom-6 left-6 z-30 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group",
    title: "Chat with us on WhatsApp",
    children: [e.jsx(I, {
      className: "h-6 w-6"
    }), e.jsx("div", {
      className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap",
      children: "Chat with us on WhatsApp"
    })]
  });
}
const _ = ({
  isOpen: l,
  onClose: i,
  onLocationSelected: d,
  preventClose: r = false
}) => {
  const [u, m] = y.useState(false), [v, g] = y.useState(false), [b, w] = y.useState(false), {
    toast: c
  } = D();
  y.useEffect(() => {
    if (!l) return;
    (() => __async(null, null, function* () {
      try {
        const a = "AIzaSyD0kF8hlXvFyFb9iVNMeTjUhZ8KWcQlWJQ";
        yield new P({
          apiKey: a,
          version: "weekly",
          libraries: ["places"]
        }).load(), w(true), console.log("\u2705 Google Maps loaded successfully");
      } catch (a) {
        console.error("Failed to load Google Maps:", a), c({
          title: "Location Service Error",
          description: "Unable to load location services. You can still enter your address manually.",
          variant: "destructive"
        });
      }
    }))();
  }, [l, c]);
  const N = (o) => {
    d(o), i();
  }, j = () => {
    if (m(true), g(true), console.log("\u{1F4CD} Requesting current location..."), !navigator.geolocation) {
      console.error("\u274C Geolocation not supported by browser"), c({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services. Please enter your address manually.",
        variant: "destructive"
      }), g(false), m(false);
      return;
    }
    navigator.geolocation.getCurrentPosition((o) => __async(null, null, function* () {
      var h;
      const {
        latitude: a,
        longitude: s,
        accuracy: L
      } = o.coords;
      console.log(`\u2705 Got location: ${a}, ${s} (accuracy: ${L}m)`);
      try {
        let n = "Current Location";
        const x = "AIzaSyD0kF8hlXvFyFb9iVNMeTjUhZ8KWcQlWJQ";
        if (x) try {
          console.log("\u{1F4CD} Reverse geocoding location...");
          const p = yield fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${a},${s}&key=${x}`);
          if (p.ok) {
            const t = yield p.json();
            t.status === "OK" && ((h = t.results) != null && h[0]) ? (n = t.results[0].formatted_address, console.log(`\u2705 Reverse geocoded to: ${n}`)) : t.status === "REQUEST_DENIED" ? console.error("\u274C Geocoding API request denied:", t.error_message) : t.status === "ZERO_RESULTS" ? console.warn("\u26A0\uFE0F No address found for location") : console.warn("\u26A0\uFE0F Geocoding returned status:", t.status);
          }
        } catch (p) {
          console.warn("\u26A0\uFE0F Failed to reverse geocode:", p);
        }
        console.log(`\u{1F4CD} Selecting location: ${n} (${a}, ${s})`), d({
          latitude: a,
          longitude: s,
          address: n
        }), i();
      } catch (n) {
        console.error("\u274C Error processing location:", n), c({
          title: "Location Error",
          description: "Unable to process your location. Please try again or enter your address manually.",
          variant: "destructive"
        });
      } finally {
        g(false), m(false);
      }
    }), (o) => {
      console.error("\u274C Geolocation error:", o.code, o.message);
      let a = "Please enable location access or enter your address manually.", s = "Location Access Denied";
      switch (o.code) {
        case o.PERMISSION_DENIED:
          s = "Location Permission Denied", a = "You denied the location permission. Please allow location access in your browser settings, or enter your address manually.";
          break;
        case o.POSITION_UNAVAILABLE:
          s = "Location Unavailable", a = "Your location could not be determined. Please check your device's location settings or enter your address manually.";
          break;
        case o.TIMEOUT:
          s = "Location Request Timed Out", a = "Getting your location took too long. Please try again or enter your address manually.";
          break;
      }
      c({
        title: s,
        description: a,
        variant: "destructive"
      }), g(false), m(false);
    }, {
      enableHighAccuracy: true,
      timeout: 15e3,
      maximumAge: 3e5
    });
  };
  return e.jsx(k, {
    open: l,
    onOpenChange: r ? void 0 : i,
    children: e.jsxs(C, {
      className: `sm:max-w-md ${r ? "[&>button]:hidden" : ""}`,
      onPointerDownOutside: r ? (o) => o.preventDefault() : void 0,
      onEscapeKeyDown: r ? (o) => o.preventDefault() : void 0,
      children: [e.jsxs(M, {
        children: [e.jsx(A, {
          children: "Select Your Location"
        }), e.jsx("p", {
          className: "text-sm text-muted-foreground mt-2",
          children: "Choose your delivery location to see available restaurants and accurate delivery fees."
        })]
      }), e.jsxs("div", {
        className: "space-y-4",
        children: [e.jsxs("div", {
          className: "space-y-2",
          children: [e.jsx("label", {
            className: "text-sm font-medium",
            children: "Search for your address"
          }), b ? e.jsx(U, {
            onPlaceSelect: N,
            placeholder: "Enter your address (e.g., Victoria Island, Lagos)",
            className: "w-full"
          }) : e.jsxs("div", {
            className: "flex items-center justify-center p-4 border rounded-md bg-gray-50",
            children: [e.jsx(f, {
              className: "h-4 w-4 animate-spin mr-2"
            }), e.jsx("span", {
              className: "text-sm text-gray-600",
              children: "Loading location services..."
            })]
          })]
        }), e.jsxs("div", {
          className: "flex items-center space-x-2",
          children: [e.jsx("div", {
            className: "flex-1 border-t border-gray-300"
          }), e.jsx("span", {
            className: "text-sm text-gray-500",
            children: "or"
          }), e.jsx("div", {
            className: "flex-1 border-t border-gray-300"
          })]
        }), e.jsx("div", {
          className: "space-y-2",
          children: e.jsxs(S, {
            onClick: j,
            disabled: v || u,
            className: "w-full",
            variant: "outline",
            children: [u ? e.jsx(f, {
              className: "h-4 w-4 animate-spin mr-2"
            }) : e.jsx($, {
              className: "h-4 w-4 mr-2"
            }), "Use Current Location"]
          })
        }), e.jsxs("div", {
          className: "text-xs text-muted-foreground bg-yellow-50 p-3 rounded mt-4 border-l-4 border-yellow-400",
          children: [e.jsx("p", {
            className: "font-medium text-yellow-800 mb-1",
            children: "\u26A0\uFE0F Important Notice"
          }), e.jsx("p", {
            className: "text-yellow-700",
            children: "Changing your location may switch your serving restaurant and clear your current cart."
          })]
        })]
      })]
    })
  });
};
export {
  O as F,
  _ as L
};
