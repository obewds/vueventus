import { defineComponent as m, inject as h, computed as p, openBlock as b, createElementBlock as x, normalizeClass as d, renderSlot as w, ref as U, onMounted as G, resolveComponent as R, createBlock as D, withCtx as F, createCommentVNode as O, createElementVNode as f, resolveDynamicComponent as q } from "vue";
const I = {
  align: "",
  decoration: "",
  family: "",
  lineHeight: "",
  smoothing: "subpixel-antialiased",
  spacing: "",
  weight: "",
  wordBreak: "",
  base: function() {
    return [
      this.align,
      this.decoration,
      this.family,
      this.lineHeight,
      this.smoothing,
      this.spacing,
      this.weight,
      this.wordBreak
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: {
    "5xs": "text-5xs",
    "4xs": "text-4xs",
    "3xs": "text-3xs",
    "2xs": "text-2xs",
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl",
    "10xl": "text-10xl",
    "11xl": "text-11xl",
    "12xl": "text-12xl"
  },
  getSizeClasses: function(e) {
    const t = e && this.sizes[e] ? e : "md";
    return this.sizes[t];
  },
  classes: function(e) {
    const t = e || "";
    return [
      this.base(),
      this.getSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, B = {
  durations: {
    1200: "duration-1200",
    1150: "duration-1150",
    1100: "duration-1100",
    1050: "duration-1050",
    1e3: "duration-1000",
    950: "duration-950",
    900: "duration-900",
    850: "duration-850",
    800: "duration-800",
    750: "duration-750",
    700: "duration-700",
    650: "duration-650",
    600: "duration-600",
    550: "duration-550",
    500: "duration-500",
    475: "duration-475",
    450: "duration-450",
    425: "duration-425",
    400: "duration-400",
    375: "duration-375",
    350: "duration-350",
    325: "duration-325",
    300: "duration-300",
    275: "duration-275",
    250: "duration-250",
    225: "duration-225",
    200: "duration-200",
    175: "duration-175",
    150: "duration-150",
    125: "duration-125",
    100: "duration-100",
    75: "duration-75",
    50: "duration-50",
    25: "duration-25"
  },
  easings: {
    linear: "ease-linear",
    in: "ease-in",
    out: "ease-out",
    inOut: "ease-in-out"
  },
  transitions: {
    default: "transition",
    all: "transition-all",
    colors: "transition-colors",
    none: "transition-none",
    opacity: "transition-opacity",
    shadow: "transition-shadow",
    transform: "transition-transform"
  },
  getDurationClasses: function(e) {
    var s, r, l;
    const t = e && ((s = this.durations) == null ? void 0 : s[e]) ? e : "300";
    return (r = this.durations) != null && r[t] ? (l = this.durations) == null ? void 0 : l[t] : "";
  },
  getEasingClasses: function(e) {
    var s, r, l;
    const t = e && ((s = this.easings) == null ? void 0 : s[e]) ? e : "inOut";
    return (r = this.easings) != null && r[t] ? (l = this.easings) == null ? void 0 : l[t] : "";
  },
  getTransitionClasses: function(e) {
    var s, r, l;
    const t = e && ((s = this.transitions) == null ? void 0 : s[e]) ? e : "default";
    return (r = this.transitions) != null && r[t] ? (l = this.transitions) == null ? void 0 : l[t] : "";
  },
  custom: function(e) {
    const t = {
      transitions: e && e.transitions ? e.transitions : "",
      easings: e && e.easings ? e.easings : "",
      durations: e && e.durations ? e.durations : ""
    };
    return [
      this.getTransitionClasses(t.transitions),
      this.getEasingClasses(t.easings),
      this.getDurationClasses(t.durations)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  classes: function(e, t, o) {
    const s = e || "", r = t || "", l = o || "";
    return [
      this.getTransitionClasses(s),
      this.getEasingClasses(r),
      this.getDurationClasses(l)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, Z = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: B.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: I.sizes,
  getSizeClasses: function(e) {
    const t = e && this.sizes[e] ? e : "md";
    return this.sizes[t];
  },
  classes: function(e) {
    const t = e || "";
    return [
      this.base(),
      this.getSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, Y = {
  border: "border border-transparent",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: B.classes("all", "inOut", "300"),
  base: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.display,
      this.focus,
      this.rounding,
      this.shadow,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: {
    "4xs": "px-1 py-px text-xxs",
    "3xs": "px-1.5 py-0.5 text-xxs",
    "2xs": "px-2 py-1 text-xs",
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-6 py-3 text-base",
    "2xl": "px-7 py-4 text-lg",
    "3xl": "px-8 py-4 text-xl",
    "4xl": "px-8 py-5 text-xl"
  },
  getSizeClasses: function(e) {
    const t = e && this.sizes[e] ? e : "md";
    return this.sizes[t];
  },
  classes: function(e) {
    const t = e || "";
    return [
      this.base(),
      this.getSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  blockDisplay: "block w-full flex flex-col items-center justify-center",
  blockBase: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.blockDisplay,
      this.focus,
      this.rounding,
      this.shadow,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  blockSizes: {
    "4xs": "px-1 py-1 text-2xs",
    "3xs": "px-2.5 py-1.5 text-2xs",
    "2xs": "px-2.5 py-1.5 text-xs",
    xs: "px-4 py-2 text-sm",
    sm: "px-4 py-2 text-base",
    md: "px-6 py-3 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-7 py-3.5 text-lg",
    "2xl": "px-8 py-5 text-xl",
    "3xl": "px-9 py-5 text-2xl",
    "4xl": "px-10 py-6 text-2xl"
  },
  getBlockSizeClasses: function(e) {
    const t = e && this.blockSizes[e] ? e : "md";
    return this.blockSizes[t];
  },
  blockClasses: function(e) {
    const t = e || "";
    return [
      this.blockBase(),
      this.getBlockSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  fabDisplay: "inline-flex items-center items-center justify-center",
  fabBase: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.fabDisplay,
      this.focus,
      this.rounding,
      this.shadow,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  fabSizes: {
    "4xs": "w-6 h-6 text-xxs",
    "3xs": "w-7 h-7 text-xxs",
    "2xs": "w-8 h-8 text-xs",
    xs: "w-9 h-9 text-xs",
    sm: "w-10 h-10 text-sm",
    md: "w-11 h-11 text-sm",
    lg: "w-12 h-12 text-base",
    xl: "w-14 h-14 text-base",
    "2xl": "w-16 h-16 text-lg",
    "3xl": "w-20 h-20 text-xl",
    "4xl": "w-24 h-24 text-xl"
  },
  getFabSizeClasses: function(e) {
    const t = e && this.fabSizes[e] ? e : "md";
    return this.fabSizes[t];
  },
  fabClasses: function(e) {
    const t = e || "";
    return [
      this.fabBase(),
      this.getFabSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, W = {
  dark: {
    ground: "bg-gray-900",
    hex: "#242426",
    text: "text-gray-100",
    title: "Enable Dark Mode"
  },
  light: {
    ground: "bg-gray-100",
    hex: "#e1e1e3",
    text: "text-gray-900",
    title: "Enable Light Mode"
  }
}, P = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: B.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.border,
      this.display,
      this.outline,
      this.placeholder,
      this.ring,
      this.rounding,
      this.shadow,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: {
    xs: "px-2 py-1.5 text-sm",
    sm: "px-3 py-2 text-base",
    md: "px-3 py-2 text-lg",
    lg: "px-4 py-3 text-xl",
    xl: "px-4 py-3 text-2xl",
    "2xl": "px-5 py-4 text-3xl"
  },
  getSizeClasses: function(e) {
    const t = e && this.sizes[e] ? e : "md";
    return this.sizes[t];
  },
  classes: function(e) {
    const t = e || "";
    return [
      this.base(),
      this.getSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, J = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: B.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.border,
      this.display,
      this.outline,
      this.placeholder,
      this.ring,
      this.rounding,
      this.shadow,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: P.sizes,
  getSizeClasses: function(e) {
    const t = e && this.sizes[e] ? e : "md";
    return this.sizes[t];
  },
  classes: function(e) {
    const t = e || "";
    return [
      this.base(),
      this.getSizeClasses(t)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  rowSizes: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 6,
    "2xl": 8
  },
  getRowSize: function(e) {
    const t = e && this.rowSizes[e] ? e : "md";
    return this.rowSizes[t];
  }
}, Q = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, X = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, K = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",
  success: "text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"
}, ee = {
  default: "text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",
  error: "text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",
  success: "text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"
}, te = {
  default: "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, re = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, se = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, oe = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, E = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, A = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, ae = {
  default: "dark:text-gray-100 text-gray-900",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300"
}, le = {
  VvAnchor: {
    button: !1,
    buttonBlock: !1,
    buttonFab: !1,
    buttonSize: "md",
    color: "default",
    external: !1,
    href: "#",
    palette: "default"
  },
  VvButton: {
    block: !1,
    color: "primary",
    fab: !1,
    palette: "solid",
    size: "md",
    type: "button"
  },
  VvColorModeButton: {
    color: "default",
    mode: "light",
    palette: "outline",
    size: "xs",
    type: "button"
  },
  VvEl: {
    borderPalette: "default",
    borderColor: "",
    groundPalette: "default",
    groundColor: "default",
    tag: "div",
    textPalette: "default",
    textColor: "default"
  },
  VvInput: {
    color: "default",
    palette: "default",
    size: "md",
    type: "text"
  },
  VvListItem: {
    color: "default",
    enableColoredSymbols: !0,
    palette: "default",
    symbolColor: "primary",
    symbolPalette: "default"
  },
  VvTextarea: {
    color: "default",
    palette: "default",
    size: "md",
    rowSize: "md"
  }
}, a = {
  anchors: {
    ...Z,
    palettes: {
      default: Q
    }
  },
  borders: {
    palettes: {
      default: X
    }
  },
  buttons: {
    ...Y,
    palettes: {
      outline: K,
      solid: ee
    }
  },
  inputs: {
    ...P,
    palettes: {
      default: E,
      underlined: A
    }
  },
  colorMode: {
    ...W
  },
  grounds: {
    palettes: {
      console: te,
      default: re,
      monochromatic: se,
      pastel: oe
    }
  },
  text: {
    ...I,
    palettes: {
      default: ae
    }
  },
  textareas: {
    ...J,
    palettes: {
      default: E,
      underlined: A
    }
  },
  transitions: {
    ...B
  },
  defaults: le
};
function nt(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((r) => r.charAt(0).toUpperCase() + r.substring(1).toLowerCase()).join(" ").trim();
}
function it(e, t) {
  const o = String(e).trim();
  return /^[1-9]\d*$/.test(o) ? Number(o) : t;
}
function ut(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const o = 1024, s = t < 0 ? 0 : t, r = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], l = Math.floor(Math.log(e) / Math.log(o));
  return parseFloat((e / Math.pow(o, l)).toFixed(s)) + " " + r[l];
}
function dt(e) {
  let t = parseInt(e, 10), o = Math.floor(parseInt(String(Number(t) / (24 * 3600))));
  t = t % (24 * 3600);
  let s = Math.floor(parseInt(String(Number(t) / 3600)));
  t %= 3600;
  let r = Math.floor(t / 60);
  t %= 60;
  let l = Math.floor(t), n = o < 10 ? "0" + o : o, i = s < 10 ? "0" + s : s, u = r < 10 ? "0" + r : r, c = l < 10 ? "0" + l : l, g = n === "00" ? "" : n + ":";
  return g += i === "00" ? "" : i + ":", g += u + ":" + c, g;
}
function ct(e) {
  return new Intl.NumberFormat().format(e);
}
var ne = function(t) {
  return ie(t) && !ue(t);
};
function ie(e) {
  return !!e && typeof e == "object";
}
function ue(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ge(e);
}
var de = typeof Symbol == "function" && Symbol.for, ce = de ? Symbol.for("react.element") : 60103;
function ge(e) {
  return e.$$typeof === ce;
}
function be(e) {
  return Array.isArray(e) ? [] : {};
}
function $(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? v(be(e), e, t) : e;
}
function fe(e, t, o) {
  return e.concat(t).map(function(s) {
    return $(s, o);
  });
}
function he(e, t) {
  if (!t.customMerge)
    return v;
  var o = t.customMerge(e);
  return typeof o == "function" ? o : v;
}
function xe(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function T(e) {
  return Object.keys(e).concat(xe(e));
}
function H(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function pe(e, t) {
  return H(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function me(e, t, o) {
  var s = {};
  return o.isMergeableObject(e) && T(e).forEach(function(r) {
    s[r] = $(e[r], o);
  }), T(t).forEach(function(r) {
    pe(e, r) || (H(e, r) && o.isMergeableObject(t[r]) ? s[r] = he(r, o)(e[r], t[r], o) : s[r] = $(t[r], o));
  }), s;
}
function v(e, t, o) {
  o = o || {}, o.arrayMerge = o.arrayMerge || fe, o.isMergeableObject = o.isMergeableObject || ne, o.cloneUnlessOtherwiseSpecified = $;
  var s = Array.isArray(t), r = Array.isArray(e), l = s === r;
  return l ? s ? o.arrayMerge(e, t, o) : me(e, t, o) : $(t, o);
}
v.all = function(t, o) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(s, r) {
    return v(s, r, o);
  }, {});
};
var ye = v, ke = ye;
function gt(e) {
  return Object.keys(e).length > 0 ? ke(a, e) : a;
}
function bt(e = 10) {
  let t = "";
  const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = o.length;
  for (let r = 0; r < Number(e); r++)
    t += o.charAt(Math.floor(Math.random() * s));
  return t;
}
function ft(e, t) {
  let o = e || "", s = t || "-";
  return o.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, s).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, s);
}
function ht(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, o) {
    return o === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function xt(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function pt(e) {
  return e.filter((t, o, s) => s.indexOf(t) === o);
}
const mt = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], N = [
  "button",
  "submit",
  "reset"
], Se = [
  "light",
  "dark"
], yt = [
  "up",
  "down",
  "left",
  "right",
  ""
], kt = [
  "style",
  "title",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "main",
  "nav",
  "section",
  "blockquote",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "li",
  "menu",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "cite",
  "code",
  "data",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "audio",
  "map",
  "video",
  "iframe",
  "object",
  "picture",
  "portal",
  "svg",
  "math",
  "canvas",
  "del",
  "ins",
  "caption",
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "button",
  "datalist",
  "fieldset",
  "form",
  "input",
  "label",
  "legend",
  "meter",
  "optgroup",
  "option",
  "output",
  "progress",
  "select",
  "textarea",
  "details",
  "dialog",
  "summary"
], St = [
  "fab",
  "fad",
  "fal",
  "far",
  "fas",
  "fat"
], wt = [
  "xs",
  "sm",
  "1x",
  "lg",
  "2x",
  "3x",
  "4x",
  "5x",
  "6x",
  "7x",
  "8x",
  "9x",
  "10x"
], vt = [1, 2, 3, 4, 5, 6], zt = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], we = [
  "color",
  "date",
  "datetime-local",
  "email",
  "month",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "time",
  "url"
], Ct = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], ve = m({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: a.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: a.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: a.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: a.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: a.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: a.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: a.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: a.defaults.VvAnchor.palette
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a;
    return { classes: p(() => {
      var r, l, n, i, u, c, g, k, S, z, C, V, M, j, _, L;
      let s = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((r = t == null ? void 0 : t.buttons) != null && r.blockBase() && s.push(t.buttons.blockBase()), e.buttonSize !== "" && ((n = (l = t == null ? void 0 : t.buttons) == null ? void 0 : l.blockSizes) == null ? void 0 : n[e.buttonSize]) && s.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && s.push(t.buttons.fabBase()), e.buttonSize !== "" && ((c = (u = t == null ? void 0 : t.buttons) == null ? void 0 : u.fabSizes) == null ? void 0 : c[e.buttonSize]) && s.push(t.buttons.fabSizes[e.buttonSize])) : ((g = t == null ? void 0 : t.buttons) != null && g.base() && s.push(t.buttons.base()), e.buttonSize !== "" && ((S = (k = t == null ? void 0 : t.buttons) == null ? void 0 : k.sizes) == null ? void 0 : S[e.buttonSize]) && s.push(t.buttons.sizes[e.buttonSize])), (V = (C = (z = t == null ? void 0 : t.buttons) == null ? void 0 : z.palettes) == null ? void 0 : C[e.palette]) != null && V[e.color] && s.push(t.buttons.palettes[e.palette][e.color])) : ((M = t == null ? void 0 : t.anchors) != null && M.base() && s.push(t.anchors.base()), (L = (_ = (j = t == null ? void 0 : t.anchors) == null ? void 0 : j.palettes) == null ? void 0 : _[e.palette]) != null && L[e.color] && s.push(t.anchors.palettes[e.palette][e.color])), s.join(" ").trim();
    }) };
  }
}), y = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, r] of t)
    o[s] = r;
  return o;
}, ze = ["href"], Ce = ["href"];
function Ve(e, t, o, s, r, l) {
  return e.external ? (b(), x("a", {
    key: 0,
    href: e.href,
    class: d(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    w(e.$slots, "default")
  ], 10, ze)) : (b(), x("a", {
    key: 1,
    href: e.href,
    class: d(e.classes)
  }, [
    w(e.$slots, "default")
  ], 10, Ce));
}
const Vt = /* @__PURE__ */ y(ve, [["render", Ve]]), Me = m({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: a.defaults.VvButton.block
    },
    color: {
      type: String,
      default: a.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: a.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: a.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: a.defaults.VvButton.size
    },
    type: {
      type: String,
      default: a.defaults.VvButton.type,
      validator: (e) => N.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a, o = e.type;
    let s = p(() => {
      var l, n, i, u, c, g, k, S, z, C, V, M;
      let r = [];
      return e.block === !0 && e.fab === !1 ? ((l = t == null ? void 0 : t.buttons) != null && l.blockBase() && r.push(t.buttons.blockBase()), e.size !== "" && ((i = (n = t == null ? void 0 : t.buttons) == null ? void 0 : n.blockSizes) == null ? void 0 : i[e.size]) && r.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((u = t == null ? void 0 : t.buttons) != null && u.fabBase() && r.push(t.buttons.fabBase()), e.size !== "" && ((g = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : g[e.size]) && r.push(t.buttons.fabSizes[e.size])) : ((k = t == null ? void 0 : t.buttons) != null && k.base() && r.push(t.buttons.base()), e.size !== "" && ((z = (S = t == null ? void 0 : t.buttons) == null ? void 0 : S.sizes) == null ? void 0 : z[e.size]) && r.push(t.buttons.sizes[e.size])), (M = (V = (C = t == null ? void 0 : t.buttons) == null ? void 0 : C.palettes) == null ? void 0 : V[e.palette]) != null && M[e.color] && r.push(t.buttons.palettes[e.palette][e.color]), r.join(" ").trim();
    });
    return { btnType: o, classes: s };
  }
}), $e = ["type"];
function Be(e, t, o, s, r, l) {
  return b(), x("button", {
    type: e.btnType,
    class: d(e.classes)
  }, [
    w(e.$slots, "default")
  ], 10, $e);
}
const je = /* @__PURE__ */ y(Me, [["render", Be]]), _e = m({
  name: "VvColorModeButton",
  components: {
    VvButton: je
  },
  props: {
    mode: {
      type: String,
      default: a.defaults.VvColorModeButton.mode,
      validator: (e) => Se.includes(e)
    },
    color: {
      type: String,
      default: a.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: a.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: a.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: a.colorMode.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: a.colorMode.dark.hex
    },
    groundLight: {
      type: String,
      default: a.colorMode.light.ground
    },
    groundLightHex: {
      type: String,
      default: a.colorMode.light.hex
    },
    textDark: {
      type: String,
      default: a.colorMode.dark.text
    },
    textLight: {
      type: String,
      default: a.colorMode.light.text
    },
    titleDark: {
      type: String,
      default: a.colorMode.dark.title
    },
    titleLight: {
      type: String,
      default: a.colorMode.light.title
    },
    type: {
      type: String,
      default: a.defaults.VvColorModeButton.type,
      validator: (e) => N.includes(e)
    }
  },
  setup(e) {
    const t = U(e.mode), o = p(() => t.value === "dark" ? "sun" : "moon"), s = p(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return G(() => {
      document && t.value === "light" && (document.documentElement.classList.remove("dark", e.groundDark, e.textDark), document.documentElement.classList.add(e.groundLight, e.textLight), document.documentElement.style.backgroundColor = e.groundLightHex), document && t.value === "dark" && (document.documentElement.classList.remove(e.groundLight, e.textLight), document.documentElement.classList.add("dark", e.groundDark, e.textDark), document.documentElement.style.backgroundColor = e.groundDarkHex);
    }), { mode: t, icon: o, title: s };
  },
  methods: {
    toggleColorMode(e) {
      document && this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.classList.remove(this.groundLight, this.textLight), document.documentElement.classList.add("dark", this.groundDark, this.textDark), document.documentElement.style.backgroundColor = this.groundDarkHex) : document && this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.classList.remove("dark", this.groundDark, this.textDark), document.documentElement.classList.add(this.groundLight, this.textLight), document.documentElement.style.backgroundColor = this.groundLightHex);
    }
  }
}), Le = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Oe = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Ee = [
  Oe
], Ae = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Te = /* @__PURE__ */ f("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), De = [
  Te
];
function Fe(e, t, o, s, r, l) {
  const n = R("VvButton");
  return b(), D(n, {
    title: e.title,
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode(i)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: F(() => [
      e.icon === "moon" ? (b(), x("svg", Le, Ee)) : O("", !0),
      e.icon === "sun" ? (b(), x("svg", Ae, De)) : O("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const Mt = /* @__PURE__ */ y(_e, [["render", Fe]]), Ie = m({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: a.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: a.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: a.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: a.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: a.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: a.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: a.defaults.VvEl.textColor
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a;
    return { classes: p(() => {
      var r, l, n, i, u, c, g, k, S;
      let s = [];
      return (n = (l = (r = t == null ? void 0 : t.borders) == null ? void 0 : r.palettes) == null ? void 0 : l[e.borderPalette]) != null && n[e.borderColor] && s.push(t.borders.palettes[e.borderPalette][e.borderColor]), (c = (u = (i = t == null ? void 0 : t.grounds) == null ? void 0 : i.palettes) == null ? void 0 : u[e.groundPalette]) != null && c[e.groundColor] && s.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (S = (k = (g = t == null ? void 0 : t.text) == null ? void 0 : g.palettes) == null ? void 0 : k[e.textPalette]) != null && S[e.textColor] && s.push(t.text.palettes[e.textPalette][e.textColor]), s.join(" ").trim();
    }) };
  }
});
function Pe(e, t, o, s, r, l) {
  return b(), D(q(e.tag), {
    class: d(e.classes)
  }, {
    default: F(() => [
      w(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const $t = /* @__PURE__ */ y(Ie, [["render", Pe]]), He = m({
  name: "VvInput",
  props: {
    color: {
      type: String,
      default: a.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: a.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: a.defaults.VvInput.size
    },
    type: {
      type: String,
      default: a.defaults.VvInput.type,
      validator: (e) => we.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a;
    return { classes: p(() => {
      var r, l, n, i, u, c;
      let s = [];
      return (r = t == null ? void 0 : t.inputs) != null && r.base() && s.push(t.inputs.base()), e.size !== "" && ((n = (l = t == null ? void 0 : t.inputs) == null ? void 0 : l.sizes) == null ? void 0 : n[e.size]) && s.push(t.inputs.sizes[e.size]), (c = (u = (i = t == null ? void 0 : t.inputs) == null ? void 0 : i.palettes) == null ? void 0 : u[e.palette]) != null && c[e.color] && s.push(t.inputs.palettes[e.palette][e.color]), s.join(" ").trim();
    }) };
  }
}), Ne = ["type"];
function Ue(e, t, o, s, r, l) {
  return b(), x("input", {
    type: e.type,
    class: d(e.classes)
  }, null, 10, Ne);
}
const Bt = /* @__PURE__ */ y(He, [["render", Ue]]), Ge = m({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: a.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: a.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: a.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: a.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: a.defaults.VvListItem.symbolPalette
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a;
    let o = t == null ? void 0 : t.text.base(), s = p(() => {
      var n, i, u;
      let l = [o];
      return (u = (i = (n = t == null ? void 0 : t.text) == null ? void 0 : n.palettes) == null ? void 0 : i[e.palette]) != null && u[e.color] && l.push(t.text.palettes[e.palette][e.color]), l.join(" ").trim();
    }), r = p(() => {
      var n, i, u;
      let l = [];
      return (u = (i = (n = t == null ? void 0 : t.text) == null ? void 0 : n.palettes) == null ? void 0 : i[e.symbolPalette]) != null && u[e.symbolColor] && l.push(t.text.palettes[e.symbolPalette][e.symbolColor]), l.join(" ").trim();
    });
    return { classes: s, symbolClasses: r };
  }
});
function Re(e, t, o, s, r, l) {
  return b(), x("li", {
    class: d(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (b(), x("span", {
      key: 0,
      class: d([e.classes])
    }, [
      w(e.$slots, "default")
    ], 2)) : w(e.$slots, "default", { key: 1 })
  ], 2);
}
const jt = /* @__PURE__ */ y(Ge, [["render", Re]]), qe = m({
  name: "ObeKnockoutMark",
  props: {
    blueFill: {
      type: String,
      default: "fill-lightBlue-400"
    },
    greenFill: {
      type: String,
      default: "fill-green-400"
    },
    orangeFill: {
      type: String,
      default: "fill-orange-400"
    },
    redFill: {
      type: String,
      default: "fill-red-400"
    },
    yellowFill: {
      type: String,
      default: "fill-yellow-400"
    }
  }
}), Ze = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Ye(e, t, o, s, r, l) {
  return b(), x("svg", Ze, [
    f("path", {
      class: d(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    f("path", {
      class: d(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    f("path", {
      class: d(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    f("path", {
      class: d(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    f("path", {
      class: d(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    f("path", {
      class: d(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    f("path", {
      class: d(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const _t = /* @__PURE__ */ y(qe, [["render", Ye]]), We = m({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), Je = /* @__PURE__ */ f("path", { d: "m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), Qe = [
  Je
];
function Xe(e, t, o, s, r, l) {
  return b(), x("svg", {
    class: d(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 129",
    "xml:space": "preserve"
  }, Qe, 2);
}
const Lt = /* @__PURE__ */ y(We, [["render", Xe]]), Ke = m({
  name: "VueVentusSpinningMark",
  props: {
    animationClass: {
      type: String,
      default: "animate-spin-reverse-4s"
    },
    enableAnimation: {
      type: Boolean,
      default: !0
    },
    enableClassFills: {
      type: Boolean,
      default: !1
    },
    fillOne: {
      type: String,
      default: "#41b883"
    },
    fillOneClasses: {
      type: String,
      default: "fill-emerald-500"
    },
    fillTwo: {
      type: String,
      default: "#2298bd"
    },
    fillTwoClasses: {
      type: String,
      default: "fill-cyan-500"
    }
  },
  setup(e) {
    return { classes: p(() => e.enableAnimation ? e.animationClass : "") };
  }
}), et = ["fill"], tt = ["fill"];
function rt(e, t, o, s, r, l) {
  return b(), x("svg", {
    class: d(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    f("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: d(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, et),
    f("g", null, [
      f("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: d(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, tt)
    ])
  ], 2);
}
const Ot = /* @__PURE__ */ y(Ke, [["render", rt]]), st = m({
  name: "VvTextarea",
  props: {
    color: {
      type: String,
      default: a.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: a.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: a.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: a.defaults.VvTextarea.rowSize
    }
  },
  setup(e) {
    const t = Object.keys(h("vv", {})).length > 0 ? h("vv") : a;
    let o = p(() => {
      var l, n, i, u, c, g;
      let r = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && r.push(t.textareas.base()), e.size !== "" && ((i = (n = t == null ? void 0 : t.textareas) == null ? void 0 : n.sizes) == null ? void 0 : i[e.size]) && r.push(t.textareas.sizes[e.size]), (g = (c = (u = t == null ? void 0 : t.textareas) == null ? void 0 : u.palettes) == null ? void 0 : c[e.palette]) != null && g[e.color] && r.push(t.textareas.palettes[e.palette][e.color]), r.join(" ").trim();
    }), s = p(() => {
      var r, l;
      if (e.rowSize !== "" && ((l = (r = t == null ? void 0 : t.textareas) == null ? void 0 : r.rowSizes) == null ? void 0 : l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: o, rows: s };
  }
}), ot = ["rows"];
function at(e, t, o, s, r, l) {
  return b(), x("textarea", {
    class: d(e.classes),
    rows: e.rows
  }, null, 10, ot);
}
const Et = /* @__PURE__ */ y(st, [["render", at]]);
export {
  Q as AnchorDefault,
  Z as Anchors,
  X as BorderDefault,
  K as ButtonOutline,
  ee as ButtonSolid,
  Y as Buttons,
  W as ColorModes,
  te as GroundConsole,
  re as GroundDefault,
  se as GroundMonochromatic,
  oe as GroundPastel,
  E as InputDefault,
  A as InputUnderlined,
  P as Inputs,
  _t as ObeKnockoutMark,
  I as Text,
  ae as TextDefault,
  J as Textareas,
  B as Transitions,
  mt as ValidAudioSourceTypes,
  N as ValidButtonTypes,
  Se as ValidColorModes,
  yt as ValidDirections,
  kt as ValidElementTags,
  St as ValidFontAwesomeFamilies,
  wt as ValidFontAwesomeSizes,
  vt as ValidHeadingLevels,
  zt as ValidImageSourceTypes,
  we as ValidInputTypes,
  Ct as ValidVideoSourceTypes,
  Lt as VueVentusLogoText,
  Ot as VueVentusSpinningMark,
  Vt as VvAnchor,
  je as VvButton,
  Mt as VvColorModeButton,
  a as VvConfig,
  $t as VvEl,
  Bt as VvInput,
  jt as VvListItem,
  Et as VvTextarea,
  nt as camelCaseToTitleCase,
  it as digitsOnly,
  ut as formatBytes,
  dt as formatMediaTime,
  ct as formatNumber,
  gt as mergeWithVvConfig,
  bt as randomString,
  ft as slugifyString,
  ht as stringToCamelCase,
  xt as stringToFilename,
  pt as uniqueArray
};
