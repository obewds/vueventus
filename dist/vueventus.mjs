import { defineComponent as k, inject as x, computed as m, openBlock as f, createElementBlock as p, normalizeClass as g, renderSlot as C, ref as R, onMounted as q, resolveComponent as Z, createBlock as I, withCtx as P, createCommentVNode as T, createElementVNode as h, resolveDynamicComponent as W } from "vue";
const N = {
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
}, A = {
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
    var s, o, a;
    const t = e && ((s = this.durations) == null ? void 0 : s[e]) ? e : "300";
    return (o = this.durations) != null && o[t] ? (a = this.durations) == null ? void 0 : a[t] : "";
  },
  getEasingClasses: function(e) {
    var s, o, a;
    const t = e && ((s = this.easings) == null ? void 0 : s[e]) ? e : "inOut";
    return (o = this.easings) != null && o[t] ? (a = this.easings) == null ? void 0 : a[t] : "";
  },
  getTransitionClasses: function(e) {
    var s, o, a;
    const t = e && ((s = this.transitions) == null ? void 0 : s[e]) ? e : "default";
    return (o = this.transitions) != null && o[t] ? (a = this.transitions) == null ? void 0 : a[t] : "";
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
  classes: function(e, t, r) {
    const s = e || "", o = t || "", a = r || "";
    return [
      this.getTransitionClasses(s),
      this.getEasingClasses(o),
      this.getDurationClasses(a)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, Q = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: A.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: N.sizes,
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
}, X = {
  border: "border border-transparent",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: A.classes("all", "inOut", "300"),
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
}, K = {
  dark: {
    ground: "dark:bg-gray-900",
    hex: "#242426",
    text: "dark:text-gray-100",
    title: "Enable Dark Mode"
  },
  light: {
    ground: "bg-gray-100",
    hex: "#e1e1e3",
    text: "text-gray-900",
    title: "Enable Light Mode"
  },
  base: function() {
    return [
      this.light.ground,
      this.light.text,
      this.dark.ground,
      this.dark.text
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, H = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: A.classes("colors", "inOut", "300"),
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
}, ee = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: A.classes("colors", "inOut", "300"),
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
  sizes: H.sizes,
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
}, te = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, re = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, oe = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",
  success: "text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"
}, se = {
  default: "text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",
  error: "text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",
  success: "text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"
}, ae = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, ne = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, le = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, ie = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, D = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, F = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, ue = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, de = {
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
    color: "neutral",
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
}, n = {
  anchors: {
    ...Q,
    palettes: {
      default: te
    }
  },
  borders: {
    palettes: {
      default: re
    }
  },
  buttons: {
    ...X,
    palettes: {
      outline: oe,
      solid: se
    }
  },
  inputs: {
    ...H,
    palettes: {
      default: D,
      underlined: F
    }
  },
  colorModes: {
    ...K
  },
  grounds: {
    palettes: {
      console: ae,
      default: ne,
      monochromatic: le,
      pastel: ie
    }
  },
  text: {
    ...N,
    palettes: {
      default: ue
    }
  },
  textareas: {
    ...ee,
    palettes: {
      default: D,
      underlined: F
    }
  },
  transitions: {
    ...A
  },
  defaults: de
};
function ct(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function gt(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function bt(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function ft() {
  typeof window < "u" && document && document.body.click();
}
function ht(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, s = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, a)).toFixed(s)) + " " + o[a];
}
function B(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function xt(e, t = "/") {
  return [
    B(e.getMonth() + 1),
    B(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function J() {
  return {
    english: {
      long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    french: {
      long: ["Janvier", "F\xE9vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Ao\xFBt", "Septembre", "Octobre", "Novembre", "D\xE9cembre"],
      short: ["Jan", "F\xE9v", "Mar", "Avr", "Mai", "Jui", "Jul", "Ao\xFB", "Sep", "Oct", "Nov", "D\xE9c"]
    },
    spanish: {
      long: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    }
  };
}
function pt(e, t = "long", r = "english") {
  return J()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function mt(e) {
  let t = parseInt(String(e), 10), r = Math.floor(parseInt(String(Number(t) / (24 * 3600))));
  t = t % (24 * 3600);
  let s = Math.floor(parseInt(String(Number(t) / 3600)));
  t %= 3600;
  let o = Math.floor(t / 60);
  t %= 60;
  let a = Math.floor(t), l = r < 10 ? "0" + r : r, i = s < 10 ? "0" + s : s, u = o < 10 ? "0" + o : o, b = a < 10 ? "0" + a : a, d = l === "00" ? "" : l + ":";
  return d += i === "00" ? "" : i + ":", d += u + ":" + b, d;
}
function yt(e) {
  return new Intl.NumberFormat().format(e);
}
function S(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Y() {
  return "0123456789abcdef".split("");
}
var ce = function(t) {
  return ge(t) && !be(t);
};
function ge(e) {
  return !!e && typeof e == "object";
}
function be(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || xe(e);
}
var fe = typeof Symbol == "function" && Symbol.for, he = fe ? Symbol.for("react.element") : 60103;
function xe(e) {
  return e.$$typeof === he;
}
function pe(e) {
  return Array.isArray(e) ? [] : {};
}
function j(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? M(pe(e), e, t) : e;
}
function me(e, t, r) {
  return e.concat(t).map(function(s) {
    return j(s, r);
  });
}
function ye(e, t) {
  if (!t.customMerge)
    return M;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : M;
}
function ke(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function L(e) {
  return Object.keys(e).concat(ke(e));
}
function U(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function ve(e, t) {
  return U(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function Se(e, t, r) {
  var s = {};
  return r.isMergeableObject(e) && L(e).forEach(function(o) {
    s[o] = j(e[o], r);
  }), L(t).forEach(function(o) {
    ve(e, o) || (U(e, o) && r.isMergeableObject(t[o]) ? s[o] = ye(o, r)(e[o], t[o], r) : s[o] = j(t[o], r));
  }), s;
}
function M(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || me, r.isMergeableObject = r.isMergeableObject || ce, r.cloneUnlessOtherwiseSpecified = j;
  var s = Array.isArray(t), o = Array.isArray(e), a = s === o;
  return a ? s ? r.arrayMerge(e, t, r) : Se(e, t, r) : j(t, r);
}
M.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(s, o) {
    return M(s, o, r);
  }, {});
};
var we = M, ze = we;
function kt(e) {
  return Object.keys(e).length > 0 ? ze(n, e) : n;
}
function vt() {
  const e = Y(), t = 0, r = 15, s = e[S(t, r)] + e[S(t, r)], o = e[S(t, r)] + e[S(t, r)], a = e[S(t, r)] + e[S(t, r)];
  return "#" + s + o + a;
}
function St() {
  const e = Y(), t = 0, r = 15, s = e[S(t, r)], o = e[S(t, r)], a = e[S(t, r)];
  return "#" + s + o + a;
}
function wt(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let o = 0; o < Number(e); o++)
    t += r.charAt(Math.floor(Math.random() * s));
  return t;
}
function zt(e, t = "-") {
  let r = e || "", s = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, s).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, s);
}
function Ct(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function Mt(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function Vt(e, t = "short", r = "english", s = "AM", o = "PM") {
  var a = new Date(Number(e) * 1e3), l = J(), i = l[r][t], u = a.getFullYear(), b = i[a.getMonth()], d = a.getDate(), c = a.getHours(), y = a.getMinutes(), w = a.getSeconds(), z = c >= 12 ? o : s;
  return c = c % 12, c = c === 0 ? 12 : c, b + " " + B(d) + ", " + u + " " + c + ":" + B(y) + ":" + B(w) + " " + z;
}
function $t(e) {
  return e.filter((t, r, s) => s.indexOf(t) === r);
}
const Bt = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], G = [
  "button",
  "submit",
  "reset"
], Ce = [
  "light",
  "dark"
], jt = [
  "up",
  "down",
  "left",
  "right",
  ""
], At = [
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
], Ot = [
  "fab",
  "fad",
  "fal",
  "far",
  "fas",
  "fat"
], Et = [
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
], _t = [1, 2, 3, 4, 5, 6], Tt = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], Me = [
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
], Dt = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], Ve = k({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: n.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: n.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: n.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: n.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: n.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: n.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: n.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: n.defaults.VvAnchor.palette
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n;
    return { classes: m(() => {
      var o, a, l, i, u, b, d, c, y, w, z, V, $, O, E, _;
      let s = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && s.push(t.buttons.blockBase()), e.buttonSize !== "" && ((l = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : l[e.buttonSize]) && s.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && s.push(t.buttons.fabBase()), e.buttonSize !== "" && ((b = (u = t == null ? void 0 : t.buttons) == null ? void 0 : u.fabSizes) == null ? void 0 : b[e.buttonSize]) && s.push(t.buttons.fabSizes[e.buttonSize])) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && s.push(t.buttons.base()), e.buttonSize !== "" && ((y = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.sizes) == null ? void 0 : y[e.buttonSize]) && s.push(t.buttons.sizes[e.buttonSize])), (V = (z = (w = t == null ? void 0 : t.buttons) == null ? void 0 : w.palettes) == null ? void 0 : z[e.palette]) != null && V[e.color] && s.push(t.buttons.palettes[e.palette][e.color])) : (($ = t == null ? void 0 : t.anchors) != null && $.base() && s.push(t.anchors.base()), (_ = (E = (O = t == null ? void 0 : t.anchors) == null ? void 0 : O.palettes) == null ? void 0 : E[e.palette]) != null && _[e.color] && s.push(t.anchors.palettes[e.palette][e.color])), s.join(" ").trim();
    }) };
  }
}), v = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, $e = ["href"], Be = ["href"];
function je(e, t, r, s, o, a) {
  return e.external ? (f(), p("a", {
    key: 0,
    href: e.href,
    class: g(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    C(e.$slots, "default")
  ], 10, $e)) : (f(), p("a", {
    key: 1,
    href: e.href,
    class: g(e.classes)
  }, [
    C(e.$slots, "default")
  ], 10, Be));
}
const Ft = /* @__PURE__ */ v(Ve, [["render", je]]), Ae = k({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: n.defaults.VvButton.block
    },
    color: {
      type: String,
      default: n.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: n.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: n.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: n.defaults.VvButton.size
    },
    type: {
      type: String,
      default: n.defaults.VvButton.type,
      validator: (e) => G.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n, r = e.type;
    let s = m(() => {
      var a, l, i, u, b, d, c, y, w, z, V, $;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((a = t == null ? void 0 : t.buttons) != null && a.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((i = (l = t == null ? void 0 : t.buttons) == null ? void 0 : l.blockSizes) == null ? void 0 : i[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((u = t == null ? void 0 : t.buttons) != null && u.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((d = (b = t == null ? void 0 : t.buttons) == null ? void 0 : b.fabSizes) == null ? void 0 : d[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((c = t == null ? void 0 : t.buttons) != null && c.base() && o.push(t.buttons.base()), e.size !== "" && ((w = (y = t == null ? void 0 : t.buttons) == null ? void 0 : y.sizes) == null ? void 0 : w[e.size]) && o.push(t.buttons.sizes[e.size])), ($ = (V = (z = t == null ? void 0 : t.buttons) == null ? void 0 : z.palettes) == null ? void 0 : V[e.palette]) != null && $[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: r, classes: s };
  }
}), Oe = ["type"];
function Ee(e, t, r, s, o, a) {
  return f(), p("button", {
    type: e.btnType,
    class: g(e.classes)
  }, [
    C(e.$slots, "default")
  ], 10, Oe);
}
const _e = /* @__PURE__ */ v(Ae, [["render", Ee]]), Te = k({
  name: "VvColorModeButton",
  components: {
    VvButton: _e
  },
  props: {
    mode: {
      type: String,
      default: n.defaults.VvColorModeButton.mode,
      validator: (e) => Ce.includes(e)
    },
    color: {
      type: String,
      default: n.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: n.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: n.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: n.colorModes.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: n.colorModes.dark.hex
    },
    groundLight: {
      type: String,
      default: n.colorModes.light.ground
    },
    groundLightHex: {
      type: String,
      default: n.colorModes.light.hex
    },
    textDark: {
      type: String,
      default: n.colorModes.dark.text
    },
    textLight: {
      type: String,
      default: n.colorModes.light.text
    },
    titleDark: {
      type: String,
      default: n.colorModes.dark.title
    },
    titleLight: {
      type: String,
      default: n.colorModes.light.title
    },
    type: {
      type: String,
      default: n.defaults.VvColorModeButton.type,
      validator: (e) => G.includes(e)
    }
  },
  setup(e) {
    const t = R(e.mode), r = m(() => t.value === "dark" ? "sun" : "moon"), s = m(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return q(() => {
      typeof window < "u" && document && (document.documentElement.classList.add(e.groundLight, e.groundDark, e.textLight, e.textDark), document.body.classList.add(e.textLight, e.textDark), t.value === "light" ? (document.documentElement.classList.remove("dark"), document.documentElement.style.backgroundColor = e.groundLightHex) : t.value === "dark" && (document.documentElement.classList.add("dark"), document.documentElement.style.backgroundColor = e.groundDarkHex));
    }), { mode: t, icon: r, title: s };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), De = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Fe = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Le = [
  Fe
], Ie = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Pe = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), Ne = [
  Pe
];
function He(e, t, r, s, o, a) {
  const l = Z("VvButton");
  return f(), I(l, {
    title: e.title,
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode(i)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: P(() => [
      e.icon === "moon" ? (f(), p("svg", De, Le)) : T("", !0),
      e.icon === "sun" ? (f(), p("svg", Ie, Ne)) : T("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const Lt = /* @__PURE__ */ v(Te, [["render", He]]), Je = k({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: n.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: n.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: n.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: n.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: n.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: n.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: n.defaults.VvEl.textColor
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n;
    return { classes: m(() => {
      var o, a, l, i, u, b, d, c, y;
      let s = [];
      return (l = (a = (o = t == null ? void 0 : t.borders) == null ? void 0 : o.palettes) == null ? void 0 : a[e.borderPalette]) != null && l[e.borderColor] && s.push(t.borders.palettes[e.borderPalette][e.borderColor]), (b = (u = (i = t == null ? void 0 : t.grounds) == null ? void 0 : i.palettes) == null ? void 0 : u[e.groundPalette]) != null && b[e.groundColor] && s.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (y = (c = (d = t == null ? void 0 : t.text) == null ? void 0 : d.palettes) == null ? void 0 : c[e.textPalette]) != null && y[e.textColor] && s.push(t.text.palettes[e.textPalette][e.textColor]), s.join(" ").trim();
    }) };
  }
});
function Ye(e, t, r, s, o, a) {
  return f(), I(W(e.tag), {
    class: g(e.classes)
  }, {
    default: P(() => [
      C(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const It = /* @__PURE__ */ v(Je, [["render", Ye]]), Ue = k({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: n.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: n.defaults.VvInput.size
    },
    type: {
      type: String,
      default: n.defaults.VvInput.type,
      validator: (e) => Me.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n;
    return { classes: m(() => {
      var a, l, i, u, b, d;
      let o = [];
      return (a = t == null ? void 0 : t.inputs) != null && a.base() && o.push(t.inputs.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.inputs) == null ? void 0 : l.sizes) == null ? void 0 : i[e.size]) && o.push(t.inputs.sizes[e.size]), (d = (b = (u = t == null ? void 0 : t.inputs) == null ? void 0 : u.palettes) == null ? void 0 : b[e.palette]) != null && d[e.color] && o.push(t.inputs.palettes[e.palette][e.color]), o.join(" ").trim();
    }), handleInputChange: (o) => o.target.value };
  }
}), Ge = ["type", "value"];
function Re(e, t, r, s, o, a) {
  return f(), p("input", {
    type: e.type,
    class: g(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleInputChange(l)))
  }, null, 42, Ge);
}
const Pt = /* @__PURE__ */ v(Ue, [["render", Re]]), qe = k({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: n.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: n.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: n.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: n.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: n.defaults.VvListItem.symbolPalette
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n;
    let r = t == null ? void 0 : t.text.base(), s = m(() => {
      var l, i, u;
      let a = [r];
      return (u = (i = (l = t == null ? void 0 : t.text) == null ? void 0 : l.palettes) == null ? void 0 : i[e.palette]) != null && u[e.color] && a.push(t.text.palettes[e.palette][e.color]), a.join(" ").trim();
    }), o = m(() => {
      var l, i, u;
      let a = [];
      return (u = (i = (l = t == null ? void 0 : t.text) == null ? void 0 : l.palettes) == null ? void 0 : i[e.symbolPalette]) != null && u[e.symbolColor] && a.push(t.text.palettes[e.symbolPalette][e.symbolColor]), a.join(" ").trim();
    });
    return { classes: s, symbolClasses: o };
  }
});
function Ze(e, t, r, s, o, a) {
  return f(), p("li", {
    class: g(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (f(), p("span", {
      key: 0,
      class: g([e.classes])
    }, [
      C(e.$slots, "default")
    ], 2)) : C(e.$slots, "default", { key: 1 })
  ], 2);
}
const Nt = /* @__PURE__ */ v(qe, [["render", Ze]]), We = k({
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
}), Qe = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Xe(e, t, r, s, o, a) {
  return f(), p("svg", Qe, [
    h("path", {
      class: g(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    h("path", {
      class: g(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    h("path", {
      class: g(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    h("path", {
      class: g(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    h("path", {
      class: g(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    h("path", {
      class: g(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    h("path", {
      class: g(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Ht = /* @__PURE__ */ v(We, [["render", Xe]]), Ke = k({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), et = /* @__PURE__ */ h("path", { d: "m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), tt = [
  et
];
function rt(e, t, r, s, o, a) {
  return f(), p("svg", {
    class: g(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 129",
    "xml:space": "preserve"
  }, tt, 2);
}
const Jt = /* @__PURE__ */ v(Ke, [["render", rt]]), ot = k({
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
    return { classes: m(() => e.enableAnimation ? e.animationClass : "") };
  }
}), st = ["fill"], at = ["fill"];
function nt(e, t, r, s, o, a) {
  return f(), p("svg", {
    class: g(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    h("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: g(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, st),
    h("g", null, [
      h("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: g(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, at)
    ])
  ], 2);
}
const Yt = /* @__PURE__ */ v(ot, [["render", nt]]), lt = k({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: n.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: n.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: n.defaults.VvTextarea.rowSize
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : n;
    let r = m(() => {
      var l, i, u, b, d, c;
      let a = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && a.push(t.textareas.base()), e.size !== "" && ((u = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.sizes) == null ? void 0 : u[e.size]) && a.push(t.textareas.sizes[e.size]), (c = (d = (b = t == null ? void 0 : t.textareas) == null ? void 0 : b.palettes) == null ? void 0 : d[e.palette]) != null && c[e.color] && a.push(t.textareas.palettes[e.palette][e.color]), a.join(" ").trim();
    }), s = m(() => {
      var a, l;
      if (e.rowSize !== "" && ((l = (a = t == null ? void 0 : t.textareas) == null ? void 0 : a.rowSizes) == null ? void 0 : l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: s, handleTextareaChange: (a) => a.target.value };
  }
}), it = ["rows", "value"];
function ut(e, t, r, s, o, a) {
  return f(), p("textarea", {
    class: g(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleTextareaChange(l)))
  }, null, 42, it);
}
const Ut = /* @__PURE__ */ v(lt, [["render", ut]]);
export {
  te as AnchorDefault,
  Q as Anchors,
  re as BorderDefault,
  oe as ButtonOutline,
  se as ButtonSolid,
  X as Buttons,
  K as ColorModes,
  ae as GroundConsole,
  ne as GroundDefault,
  le as GroundMonochromatic,
  ie as GroundPastel,
  D as InputDefault,
  F as InputUnderlined,
  H as Inputs,
  Ht as ObeKnockoutMark,
  N as Text,
  ue as TextDefault,
  ee as Textareas,
  A as Transitions,
  Bt as ValidAudioSourceTypes,
  G as ValidButtonTypes,
  Ce as ValidColorModes,
  jt as ValidDirections,
  At as ValidElementTags,
  Ot as ValidFontAwesomeFamilies,
  Et as ValidFontAwesomeSizes,
  _t as ValidHeadingLevels,
  Tt as ValidImageSourceTypes,
  Me as ValidInputTypes,
  Dt as ValidVideoSourceTypes,
  Jt as VueVentusLogoText,
  Yt as VueVentusSpinningMark,
  Ft as VvAnchor,
  _e as VvButton,
  Lt as VvColorModeButton,
  n as VvConfig,
  It as VvEl,
  Pt as VvInput,
  Nt as VvListItem,
  Ut as VvTextarea,
  ct as camelCaseToTitleCase,
  gt as decimalsOnly,
  bt as digitsOnly,
  ft as forceBodyClick,
  ht as formatBytes,
  xt as formatDateMMDDYYYY,
  pt as formatDateTraditional,
  mt as formatMediaTime,
  yt as formatNumber,
  S as getRandomInt,
  Y as hexadecimals,
  kt as mergeWithVvConfig,
  J as monthNames,
  B as padNumber,
  vt as randomHex,
  St as randomHexShort,
  wt as randomString,
  zt as slugifyString,
  Ct as stringToCamelCase,
  Mt as stringToFilename,
  Vt as timestampToDateTimeAmPm,
  $t as uniqueArray
};
