import { defineComponent as S, inject as m, computed as x, openBlock as b, createElementBlock as y, normalizeClass as h, renderSlot as I, ref as De, onMounted as at, resolveComponent as Le, createBlock as Y, withCtx as N, createCommentVNode as G, createElementVNode as v, resolveDynamicComponent as nt, createVNode as lt, createTextVNode as re, toDisplayString as se, useCssVars as Ne } from "vue";
const Ge = {
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
}, D = {
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
}, it = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: D.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Ge.sizes,
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
}, ut = {
  border: "border",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: D.classes("all", "inOut", "300"),
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
}, ct = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "rounded",
  shadow: "",
  transition: D.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.baseColors,
      this.border,
      this.outline,
      this.ring,
      this.rounding,
      this.shadow,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
    "2xl": "h-8 w-8"
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
}, dt = {
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
}, Ue = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: D.classes("colors", "inOut", "300"),
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
}, ft = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "",
  shadow: "",
  transition: D.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.baseColors,
      this.border,
      this.outline,
      this.ring,
      this.rounding,
      this.shadow,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-7 w-7",
    "2xl": "h-8 w-8"
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
}, gt = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: D.classes("colors", "inOut", "300"),
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
  sizes: Ue.sizes,
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
}, ht = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, bt = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, pt = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, xt = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, mt = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, yt = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, kt = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, wt = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, vt = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, Me = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, Te = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, Ct = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, St = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, Vt = {
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
  VvCheckbox: {
    color: "default",
    checked: !1,
    darkCheckHex: "#242426",
    lightCheckHex: "#e1e1e3",
    palette: "default",
    size: "md"
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
  VvFormGroup: {
    displayError: !1,
    displayHelp: !1,
    displaySuccess: !1,
    errorClasses: "text-sm",
    errorText: "",
    errorTextColor: "error",
    errorTextPalette: "default",
    helpClasses: "text-sm opacity-75",
    helpText: "",
    helpTextColor: "default",
    helpTextPalette: "default",
    labelClasses: "text-lg capitalize",
    labelTextColor: "default",
    labelTextPalette: "default",
    slotParentClasses: "flex items-center gap-1",
    successClasses: "text-sm",
    successText: "",
    successTextColor: "success",
    successTextPalette: "default",
    wrapperClasses: "w-full flex flex-col space-y-1"
  },
  VvInput: {
    color: "default",
    checked: !1,
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
  VvRadio: {
    color: "default",
    checked: !1,
    darkRadioHex: "#242426",
    lightRadioHex: "#e1e1e3",
    palette: "default",
    size: "md"
  },
  VvRouterLink: {
    button: !1,
    buttonBlock: !1,
    buttonFab: !1,
    buttonSize: "md",
    color: "default",
    external: !1,
    to: "/",
    palette: "default"
  },
  VvTextarea: {
    color: "default",
    palette: "default",
    size: "md",
    rowSize: "md"
  }
}, l = {
  anchors: {
    ...it,
    palettes: {
      default: ht
    }
  },
  borders: {
    palettes: {
      default: bt
    }
  },
  buttons: {
    ...ut,
    palettes: {
      outline: pt,
      solid: xt
    }
  },
  checkboxes: {
    ...ct,
    palettes: {
      default: mt
    }
  },
  inputs: {
    ...Ue,
    palettes: {
      default: Me,
      underlined: Te
    }
  },
  colorModes: {
    ...dt
  },
  grounds: {
    palettes: {
      console: yt,
      default: kt,
      monochromatic: wt,
      pastel: vt
    }
  },
  radios: {
    ...ft,
    palettes: {
      default: Ct
    }
  },
  text: {
    ...Ge,
    palettes: {
      default: St
    }
  },
  textareas: {
    ...gt,
    palettes: {
      default: Me,
      underlined: Te
    }
  },
  transitions: {
    ...D
  },
  defaults: Vt
}, w = Math.round, _ = Math.min, A = Math.max, $t = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, ne = (e) => typeof e == "string" && e.includes("%"), ye = (e) => e < 1 ? w(e) : e, zt = (e) => w(100 * e) / 100, qe = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), Z = (e) => e.a < 1 && e.a >= 0, ge = (e) => _(1, A(0, e)), Mt = (e) => e.length === 1 ? `0${e}` : `${e}`, Tt = "[-\\+]?\\d+%?", _t = "[-\\+]?\\d*\\.\\d+%?", O = `(?:${_t})|(?:${Tt})`, B = (e) => new RegExp(O).test(e), Je = (e) => B(e.r) && B(e.g) && B(e.b), ke = `[\\s|\\(]+(${O})[,|\\s]+(${O})[,|\\s]+(${O})\\s*\\)?`, we = `[\\s|\\(]+(${O})[,|\\s]+(${O})[,|\\s]+(${O})[,|\\s]+(${O})\\s*\\)?`;
function C(e, t) {
  $t(e) && (e = "100%");
  const r = ne(e);
  return e = _(t, A(0, Number.parseFloat(e))), r && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const Q = (e) => Number.parseInt(e, 16), _e = (e) => Q(e) / 255, X = (e) => e <= 1 ? `${e * 100}%` : e, E = (e) => {
  const [t, r, s] = [e._r, e._g, e._b].map((o) => w(o));
  return { r: t, g: r, b: s, a: e._roundA };
}, P = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), le = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => C(o, 255) * 255);
  return { r: t, g: r, b: s, a: qe(e.a) };
}, ie = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => `${w(C(o, 255) * 100)}%`);
  return { r: t, g: r, b: s, a: e.a };
}, ue = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Ye = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, w(e.a * 255)], ce = (e, t) => {
  const r = Ye(e).map((s) => s.toString(16)).map((s) => Mt(s));
  return t && r.every((s) => s.charAt(0) === s.charAt(1)) ? r.map((s) => s.charAt(0)).join("") : r.join("");
}, K = (e, t) => ce({ ...e, a: 1 }, t), At = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Ft(e) {
  const t = e.r / 255, r = e.g / 255, s = e.b / 255, o = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, a = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4, n = s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * a + 0.0722 * n;
}
function Rt(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  const s = new u(e).toRgb(), o = new u(t).toRgb(), a = r / 100, n = {
    r: (o.r - s.r) * a + s.r,
    g: (o.g - s.g) * a + s.g,
    b: (o.b - s.b) * a + s.b,
    a: (o.a - s.a) * a + s.a
  };
  return new u(n);
}
function jt(e) {
  let t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
function ve(e, t) {
  const r = new u(e), s = new u(t);
  return (Math.max(r.getLuminance(), s.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), s.getLuminance()) + 0.05);
}
function Ze(e, t, r) {
  const s = ve(e, t), o = jt(r);
  let a = !1;
  switch (o.level + o.size) {
    case "AAlarge":
      a = s >= 3;
      break;
    case "AAAsmall":
      a = s >= 7;
      break;
    default:
      a = s >= 4.5;
  }
  return a;
}
function We(e, t, r = {}) {
  const { includeFallbackColors: s, level: o, size: a } = r;
  let n, i = null, c = 0;
  for (const d of t)
    n = ve(e, d), n > c && (c = n, i = new u(d));
  return Ze(e, i, { level: o, size: a }) || !s ? i : (r.includeFallbackColors = !1, We(e, ["#fff", "#000"], r));
}
function L(e, t) {
  return { monochromatic: It, analogous: Pt, complement: Bt, splitcomplement: Et, triad: Ht, tetrad: Ot }[e](...t);
}
function Bt(e) {
  const t = new u(e).toHsl();
  return t.h = (t.h + 180) % 360, new u(t);
}
function Ht(e) {
  const t = new u(e).toHsl(), { h: r } = t;
  return [
    new u(e),
    new u({ h: (r + 120) % 360, s: t.s, l: t.l }),
    new u({ h: (r + 240) % 360, s: t.s, l: t.l })
  ];
}
function Ot(e) {
  const t = new u(e).toHsl(), { h: r } = t;
  return [
    new u(e),
    new u({ h: (r + 90) % 360, s: t.s, l: t.l }),
    new u({ h: (r + 180) % 360, s: t.s, l: t.l }),
    new u({ h: (r + 270) % 360, s: t.s, l: t.l })
  ];
}
function Et(e) {
  const t = new u(e).toHsl(), { h: r } = t;
  return [
    new u(e),
    new u({ h: (r + 72) % 360, s: t.s, l: t.l }),
    new u({ h: (r + 216) % 360, s: t.s, l: t.l })
  ];
}
function Pt(e, t = 6, r = 30) {
  const s = new u(e).toHsl(), o = 360 / r, a = [new u(e)];
  for (s.h = (s.h - (o * t >> 1) + 720) % 360; --t; )
    s.h = (s.h + o) % 360, a.push(new u(s));
  return a;
}
function It(e, t = 6) {
  const r = new u(e).toHsv();
  let { h: s, s: o, v: a } = r;
  const n = [], i = 1 / t;
  for (; t--; )
    n.push(new u({ h: s, s: o, v: a })), a = (a + i) % 1;
  return n;
}
function H(e, t) {
  const s = { invert: Dt, desaturate: Lt, saturate: Nt, greyscale: Gt, lighten: Ut, brighten: qt, darken: Jt, spin: Yt }[e](...t), [o] = t;
  return o._r = s._r, o._g = s._g, o._b = s._b, o.setAlpha(s._a), o;
}
function Dt(e) {
  const t = new u(e).toRgb();
  return t.r = A(0, _(255, 255 - t.r)), t.g = A(0, _(255, 255 - t.g)), t.b = A(0, _(255, 255 - t.b)), new u(t);
}
function Lt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new u(e).toHsl();
  return r.s -= t / 100, r.s = ge(r.s), new u(r);
}
function Nt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new u(e).toHsl();
  return r.s += t / 100, r.s = ge(r.s), new u(r);
}
function Gt(e) {
  return new u(e).desaturate(100);
}
function Ut(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new u(e).toHsl();
  return r.l += t / 100, r.l = ge(r.l), new u(r);
}
function qt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new u(e).toRgb();
  return r.r = A(0, _(255, r.r - w(255 * -(t / 100)))), r.g = A(0, _(255, r.g - w(255 * -(t / 100)))), r.b = A(0, _(255, r.b - w(255 * -(t / 100)))), new u(r);
}
function Jt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new u(e).toHsl();
  return r.l -= t / 100, r.l = ge(r.l), new u(r);
}
function Yt(e, t) {
  const r = new u(e).toHsl(), s = (r.h + t) % 360;
  return r.h = s < 0 ? 360 + s : s, new u(r);
}
class Zt {
  constructor(t, r, s = {}) {
    this.api = t, this.id = r, this.options = s;
  }
  use(t) {
    return this.wanted = t, this;
  }
  parse(t) {
    const r = this.api.findColor(t);
    return {
      as: (s) => Object.assign(r, { format: s }),
      rgba: {
        r: r.r,
        g: r.g,
        b: r.b,
        a: r.a
      },
      valueOf: () => r
    };
  }
  print(t, r) {
    return this.api.print(r, t);
  }
  complete(t) {
    const r = this.toString(t);
    return delete this.wanted, r;
  }
}
const Wt = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class Qt {
  constructor() {
    this.colorspaces = {}, this.options = {
      alphaFormat: "rgb",
      shortHex: !1,
      upperCaseHex: !1
    };
  }
  set(t) {
    Object.assign(this.options, t);
    for (const r in this.colorspaces)
      Object.prototype.hasOwnProperty.call(this.colorspaces, r) && Object.assign(this.colorspaces[r].options, t);
  }
  add(t, r) {
    if (this.colorspaces[t] = new Zt(this, t, { ...this.options, ...r }), r.alias)
      for (const s of r.alias)
        this.colorspaces[s] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const r = { ...Wt };
    if (t = typeof t == "string" ? t.trim().toLowerCase() : t, t) {
      for (const s in this.colorspaces)
        if (this.colorspaces[s].shouldHandleInput(t)) {
          Object.assign(r, this.colorspaces[s].toRgb(t)), r.format = r.format || s, r.ok = !0;
          break;
        }
    }
    return r;
  }
  raw(t, r) {
    return r in this.colorspaces ? this.colorspaces[r].toRaw(t) : { r: t.r / 255, g: t.g / 255, b: t.b / 255, a: t.a };
  }
  print(t, r, s) {
    const o = s;
    return s = s || r, s in this.colorspaces ? this.colorspaces[s].use(o).complete(t) : `[${t.r}, ${t.g}, ${t.b}, ${t.a * 255}]`;
  }
}
let Xt = 0;
const F = new Qt();
class u {
  constructor(t, r = {}) {
    if (t = t || "", t instanceof u)
      return t;
    const s = F.findColor(t);
    this._originalInput = t, this._r = ye(s.r), this._g = ye(s.g), this._b = ye(s.b), this._a = s.a, this._roundA = zt(this._a), this._format = r.format || s.format, this._gradientType = r.gradientType, this._ok = s.ok, this._tc_id = u.newId(), F.set(r);
  }
  static newId() {
    return Xt++;
  }
  static registerFormat(t, r = {}) {
    return F.add(t, r);
  }
  static equals(t, r) {
    return !t || !r ? !1 : new u(t).toRgbString() === new u(r).toRgbString();
  }
  static fromRatio(t, r) {
    if (typeof t == "object") {
      const s = {};
      for (const o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (o === "a" ? s[o] = t[o] : s[o] = X(t[o]));
      t = s;
    }
    return new u(t, r);
  }
  static readability(t, r) {
    return ve(t, r);
  }
  static isReadable(t, r, s) {
    return Ze(t, r, s);
  }
  static mostReadable(t, r, s) {
    return We(t, r, s);
  }
  static mix(t, r, s) {
    return Rt(t, r, s);
  }
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return !this.isDark();
  }
  isValid() {
    return this._ok;
  }
  getOriginalInput() {
    return this._originalInput;
  }
  getFormat() {
    return this._format;
  }
  getAlpha() {
    return this._a;
  }
  getBrightness() {
    return At(this.toRgb());
  }
  getLuminance() {
    return Ft(P(this));
  }
  toString(t) {
    return F.print(E(this), this._format, t);
  }
  toName() {
    return F.print(E(this), "name", "toName");
  }
  toRgb() {
    return P(this);
  }
  toRgbString() {
    return ue(E(this));
  }
  toRgbArray() {
    return Ye(E(this));
  }
  toPercentageRgb() {
    return ie(P(this));
  }
  toPercentageRgbString() {
    return ue(ie(E(this)));
  }
  toHex(t) {
    return K(E(this), t);
  }
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  toHex8(t) {
    return ce(E(this), t);
  }
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  toHsv() {
    return F.raw(P(this), "hsv");
  }
  toHsvString() {
    return F.print(P(this), this._format, "hsv");
  }
  toHsl() {
    return F.raw(P(this), "hsl");
  }
  toHslString() {
    return F.print(P(this), this._format, "hsl");
  }
  setAlpha(t) {
    return this._a = qe(t), this._roundA = w(100 * this._a) / 100, this;
  }
  clone() {
    return new u(this.toString());
  }
  lighten(...t) {
    return H("lighten", [this, ...t]);
  }
  brighten(...t) {
    return H("brighten", [this, ...t]);
  }
  darken(...t) {
    return H("darken", [this, ...t]);
  }
  desaturate(...t) {
    return H("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return H("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return H("greyscale", [this, ...t]);
  }
  invert(...t) {
    return H("invert", [this, ...t]);
  }
  spin(...t) {
    return H("spin", [this, ...t]);
  }
  analogous(...t) {
    return L("analogous", [this, ...t]);
  }
  complement(...t) {
    return L("complement", [this, ...t]);
  }
  monochromatic(...t) {
    return L("monochromatic", [this, ...t]);
  }
  splitcomplement(...t) {
    return L("splitcomplement", [this, ...t]);
  }
  triad(...t) {
    return L("triad", [this, ...t]);
  }
  tetrad(...t) {
    return L("tetrad", [this, ...t]);
  }
}
const Ae = function() {
  return {
    rgb: new RegExp(`rgb${ke}`),
    rgba: new RegExp(`rgba${we}`)
  };
}();
function he(e) {
  let t, r, s, o, a;
  return (a = Ae.rgb.exec(e)) ? ([t, r, s] = a.splice(1, 3), { r: t, g: r, b: s }) : (a = Ae.rgba.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { r: t, g: r, b: s, a: o }) : !1;
}
const be = u.registerFormat("rgb");
be.shouldHandleInput = (e) => typeof e == "object" && Je(e) && !ne(e.r) || he(e);
be.toRgb = (e) => typeof e == "object" && le(e) || le(he(e));
be.toRaw = (e) => e;
be.toString = (e) => ue(e);
const pe = u.registerFormat("prgb");
pe.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = he(e);
    return t && ne(t.r);
  }
  return Je(e) && ne(e.r);
};
pe.toRgb = (e) => le(typeof e == "object" ? e : he(e));
pe.toRaw = (e) => ie(e);
pe.toString = (e) => ue(ie(e));
const $ = u.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), de = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Kt(e) {
  let t;
  if (t = de.hex3.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((a) => `${a}${a}`).map((a) => Q(a));
    return { r, g: s, b: o, a: 1 };
  }
  if (t = de.hex6.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((a) => Q(a));
    return { r, g: s, b: o, a: 1 };
  }
  return !1;
}
const oe = (e, t = $.options.shortHex) => `#${$.options.upperCaseHex ? K(e, t).toUpperCase() : K(e, t)}`;
$.shouldHandleInput = (e) => de.hex6.test(e) || de.hex3.test(e);
$.toRgb = (e) => Kt(e);
$.toRaw = (e) => e;
$.toString = (e) => /^hex6?$/.test($.wanted) ? oe(e) : $.wanted === "hex3" ? oe(e, !0) : Z(e) ? $.options.alphaFormat === "hex" ? oe(e) : $.print($.options.alphaFormat, e) : oe(e);
const z = u.registerFormat("hex8", {
  alias: ["hex4"]
}), fe = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function er(e) {
  let t;
  if (t = fe.hex4.exec(e)) {
    const r = _e(`${t[4]}${t[4]}`), [s, o, a] = t.splice(1, 3).map((n) => `${n}${n}`).map((n) => Q(n));
    return { r: s, g: o, b: a, a: r };
  }
  if (t = fe.hex8.exec(e)) {
    const r = _e(t[4]), [s, o, a] = t.splice(1, 3).map((n) => Q(n));
    return { r: s, g: o, b: a, a: r };
  }
  return !1;
}
const ae = (e, t = z.options.shortHex) => `#${z.options.upperCaseHex ? ce(e, t).toUpperCase() : ce(e, t)}`;
z.shouldHandleInput = (e) => fe.hex8.test(e) || fe.hex4.test(e);
z.toRgb = (e) => er(e);
z.toRaw = (e) => e;
z.toString = (e) => z.wanted === "hex4" ? ae(e, !0) : z.wanted === "hex8" ? ae(e) : Z(e) ? z.options.alphaFormat === "hex" ? ae(e) : z.print(z.options.alphaFormat, e) : ae(e);
const xe = u.registerFormat("hsl"), Fe = function() {
  return {
    hsl: new RegExp(`hsl${ke}`),
    hsla: new RegExp(`hsla${we}`)
  };
}(), tr = (e) => B(e.h) && B(e.s) && B(e.l);
function Qe(e) {
  const t = C(e.r, 255), r = C(e.g, 255), s = C(e.b, 255), o = e.a || 1, a = A(t, r, s), n = _(t, r, s);
  let i, c;
  const d = (a + n) / 2;
  if (a === n)
    i = 0, c = 0;
  else {
    const f = a - n;
    switch (c = d > 0.5 ? f / (2 - a - n) : f / (a + n), a) {
      case t:
        i = (r - s) / f + (r < s ? 6 : 0);
        break;
      case r:
        i = (s - t) / f + 2;
        break;
      default:
        i = (t - r) / f + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, l: d, a: o };
}
function Re(e) {
  const t = C(e.h, 360), r = C(X(e.s), 100), s = C(X(e.l), 100), o = e.a || 1;
  let a, n, i;
  function c(d, f, g) {
    return g = g < 0 ? g + 1 : g, g = g > 1 ? g - 1 : g, g < 1 / 6 ? d + (f - d) * 6 * g : g < 1 / 2 ? f : g < 2 / 3 ? d + (f - d) * (2 / 3 - g) * 6 : d;
  }
  if (r === 0)
    a = s, n = s, i = s;
  else {
    const d = s < 0.5 ? s * (1 + r) : s + r - s * r, f = 2 * s - d;
    a = c(f, d, t + 1 / 3), n = c(f, d, t), i = c(f, d, t - 1 / 3);
  }
  return { r: a * 255, g: n * 255, b: i * 255, a: o };
}
function Xe(e) {
  let t, r, s, o, a;
  return (a = Fe.hsl.exec(e)) ? ([t, r, s] = a.splice(1, 3), { h: t, s: r, l: s }) : (a = Fe.hsla.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { h: t, s: r, l: s, a: o }) : !1;
}
function rr(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t = w(t * 360), r = w(r * 100), s = w(s * 100), o === 1 ? `hsl(${t}, ${r}%, ${s}%)` : `hsla(${t}, ${r}%, ${s}%, ${o})`;
}
function sr(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t *= 360, { h: t, s: r, l: s, a: o };
}
xe.shouldHandleInput = (e) => typeof e == "object" && tr(e) || Xe(e);
xe.toRgb = (e) => typeof e == "object" && Re(e) || Re(Xe(e));
xe.toRaw = (e) => sr(Qe(e));
xe.toString = (e) => rr(Qe(e));
const me = u.registerFormat("hsv"), je = function() {
  return {
    hsv: new RegExp(`hsv${ke}`),
    hsva: new RegExp(`hsva${we}`)
  };
}(), or = (e) => B(e.h) && B(e.s) && B(e.v);
function Ke(e) {
  const t = C(e.r, 255), r = C(e.g, 255), s = C(e.b, 255), o = e.a || 1, a = A(t, r, s), n = _(t, r, s), i = a - n;
  let c;
  const d = a === 0 ? 0 : i / a, f = a;
  if (a === n)
    c = 0;
  else {
    switch (a) {
      case t:
        c = (r - s) / i + (r < s ? 6 : 0);
        break;
      case r:
        c = (s - t) / i + 2;
        break;
      default:
        c = (t - r) / i + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: d, v: f, a: o };
}
function Be(e) {
  const t = C(e.h, 360) * 6, r = C(X(e.s), 100), s = C(X(e.v), 100), o = e.a || 1, a = Math.floor(t), n = t - a, i = s * (1 - r), c = s * (1 - n * r), d = s * (1 - (1 - n) * r), f = a % 6, g = [s, c, i, i, d, s][f], p = [d, s, s, c, i, i][f], k = [i, i, d, s, s, c][f];
  return { r: g * 255, g: p * 255, b: k * 255, a: o };
}
function et(e) {
  let t, r, s, o, a;
  return (a = je.hsv.exec(e)) ? ([t, r, s] = a.splice(1, 3), { h: t, s: r, v: s }) : (a = je.hsva.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { h: t, s: r, v: s, a: o }) : !1;
}
function ar(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t = w(t * 360), r = w(r * 100), s = w(s * 100), o === 1 ? `hsv(${t}, ${r}%, ${s}%)` : `hsva(${t}, ${r}%, ${s}%, ${o})`;
}
function nr(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t *= 360, { h: t, s: r, v: s, a: o };
}
me.shouldHandleInput = (e) => typeof e == "object" && or(e) || et(e);
me.toRgb = (e) => typeof e == "object" && Be(e) || Be(et(e));
me.toRaw = (e) => nr(Ke(e));
me.toString = (e) => ar(Ke(e));
const j = u.registerFormat("name", {
  alias: ["toName"]
});
function lr(e) {
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[e[r]] = r);
  return t;
}
const te = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
te.transparent = "00000000";
const ir = lr(te);
j.shouldHandleInput = (e) => te[e];
j.toRgb = (e) => j.parse(te[e]).rgba;
j.toRaw = (e) => e;
j.toString = (e) => e.a === 0 ? "transparent" : Z(e) && j.wanted === "toName" ? !1 : Z(e) && j.wanted === "name" ? `#${K(e)}` : Z(e) ? j.print(j.options.alphaFormat, e) : ir[K(e, !0)] || !1;
function M(e, t) {
  return new u(e, t);
}
M.equals = (e, t) => u.equals(e, t);
M.registerFormat = (e, t = {}) => u.registerFormat(e, t);
M.fromRatio = (e, t) => u.fromRatio(e, t);
M.mix = (e, t, r) => u.mix(e, t, r);
M.readability = (e, t) => u.readability(e, t);
M.isReadable = (e, t, r) => u.isReadable(e, t, r);
M.mostReadable = (e, t, r) => u.mostReadable(e, t, r);
M.names = te;
function xs(e, t = "#fff", r = "#000") {
  let s = JSON.parse(JSON.stringify(e)), o = Object.keys(s), a = {};
  for (let n = 0; n < o.length; n++)
    if (typeof s[o[n]] == "string" || typeof s[o[n]] == "number") {
      const i = M(s[o[n]], {});
      i.isValid() && (a[o[n]] = {
        backgroundColor: i.toHexString(!1),
        color: i.isDark() ? t : r
      });
    } else if (typeof s[o[n]] == "object") {
      const i = Object.keys(s[o[n]]), c = {};
      for (let d = 0; d < i.length; d++)
        if (typeof s[o[n]][i[d]] == "string") {
          const f = M(s[o[n]][i[d]], !1);
          f.isValid() && (c[i[d]] = {
            backgroundColor: f.toHexString(!0),
            color: f.isDark() ? t : r
          });
        }
      a[o[n]] = c;
    }
  return a;
}
function ms(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function ys(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function ks(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function ws() {
  typeof window < "u" && document && document.body.click();
}
function vs(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, s = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, a)).toFixed(s)) + " " + o[a];
}
function W(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function Cs(e, t = "/") {
  return [
    W(e.getMonth() + 1),
    W(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function tt() {
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
function Ss(e, t = "long", r = "english") {
  return tt()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function Vs(e) {
  let t = parseInt(String(e), 10), r = Math.floor(
    parseInt(
      String(Number(t) / (24 * 3600))
    )
  );
  t = t % (24 * 3600);
  let s = Math.floor(
    parseInt(
      String(Number(t) / 3600)
    )
  );
  t %= 3600;
  let o = Math.floor(t / 60);
  t %= 60;
  let a = Math.floor(t), n = r < 10 ? "0" + r : r, i = s < 10 ? "0" + s : s, c = o < 10 ? "0" + o : o, d = a < 10 ? "0" + a : a, f = n === "00" ? "" : n + ":";
  return f += i === "00" ? "" : i + ":", f += c + ":" + d, f;
}
function $s(e) {
  return new Intl.NumberFormat().format(e);
}
function R(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function rt() {
  return "0123456789abcdef".split("");
}
var ur = function(t) {
  return cr(t) && !dr(t);
};
function cr(e) {
  return !!e && typeof e == "object";
}
function dr(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || hr(e);
}
var fr = typeof Symbol == "function" && Symbol.for, gr = fr ? Symbol.for("react.element") : 60103;
function hr(e) {
  return e.$$typeof === gr;
}
function br(e) {
  return Array.isArray(e) ? [] : {};
}
function ee(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? U(br(e), e, t) : e;
}
function pr(e, t, r) {
  return e.concat(t).map(function(s) {
    return ee(s, r);
  });
}
function xr(e, t) {
  if (!t.customMerge)
    return U;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : U;
}
function mr(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function He(e) {
  return Object.keys(e).concat(mr(e));
}
function st(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function yr(e, t) {
  return st(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function kr(e, t, r) {
  var s = {};
  return r.isMergeableObject(e) && He(e).forEach(function(o) {
    s[o] = ee(e[o], r);
  }), He(t).forEach(function(o) {
    yr(e, o) || (st(e, o) && r.isMergeableObject(t[o]) ? s[o] = xr(o, r)(e[o], t[o], r) : s[o] = ee(t[o], r));
  }), s;
}
function U(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || pr, r.isMergeableObject = r.isMergeableObject || ur, r.cloneUnlessOtherwiseSpecified = ee;
  var s = Array.isArray(t), o = Array.isArray(e), a = s === o;
  return a ? s ? r.arrayMerge(e, t, r) : kr(e, t, r) : ee(t, r);
}
U.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(s, o) {
    return U(s, o, r);
  }, {});
};
var wr = U, vr = wr;
function zs(e) {
  return Object.keys(e).length > 0 ? vr(l, e) : l;
}
function Cr() {
  const e = rt(), t = 0, r = 15, s = e[R(t, r)] + e[R(t, r)], o = e[R(t, r)] + e[R(t, r)], a = e[R(t, r)] + e[R(t, r)];
  return "#" + s + o + a;
}
function Ms(e = "#fff", t = "#000") {
  let r = { backgroundColor: "", color: "" }, s = M(Cr(), {}), o = s.isDark();
  return r.backgroundColor = "#" + String(s.toHex(!1)), r.color = o ? e : t, r;
}
function Ts() {
  const e = rt(), t = 0, r = 15, s = e[R(t, r)], o = e[R(t, r)], a = e[R(t, r)];
  return "#" + s + o + a;
}
function _s(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let o = 0; o < Number(e); o++)
    t += r.charAt(Math.floor(Math.random() * s));
  return t;
}
function As(e, t = "-") {
  let r = e || "", s = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, s).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, s);
}
function Fs(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function Rs(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function js(e, t = "short", r = "english", s = "AM", o = "PM") {
  var a = new Date(Number(e) * 1e3), n = tt(), i = n[r][t], c = a.getFullYear(), d = i[a.getMonth()], f = a.getDate(), g = a.getHours(), p = a.getMinutes(), k = a.getSeconds(), T = g >= 12 ? o : s;
  return g = g % 12, g = g === 0 ? 12 : g, d + " " + W(f) + ", " + c + " " + g + ":" + W(p) + ":" + W(k) + " " + T;
}
function Bs(e) {
  return e.filter((t, r, s) => s.indexOf(t) === r);
}
const Hs = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], ot = [
  "button",
  "submit",
  "reset"
], Sr = [
  "light",
  "dark"
], Os = [
  "up",
  "down",
  "left",
  "right",
  ""
], Es = [
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
], Ps = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], Is = [
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
], Ds = [1, 2, 3, 4, 5, 6], Ls = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], Vr = [
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
], Ns = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], $r = S({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: l.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: l.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: l.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: l.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: l.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: l.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: l.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: l.defaults.VvAnchor.palette
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    return { classes: x(() => {
      var o, a, n, i, c, d, f, g, p, k, T, q, J, Ve, $e, ze;
      let s = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && s.push(t.buttons.blockBase()), e.buttonSize !== "" && ((n = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : n[e.buttonSize]) && s.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && s.push(t.buttons.fabBase()), e.buttonSize !== "" && ((d = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : d[e.buttonSize]) && s.push(t.buttons.fabSizes[e.buttonSize])) : ((f = t == null ? void 0 : t.buttons) != null && f.base() && s.push(t.buttons.base()), e.buttonSize !== "" && ((p = (g = t == null ? void 0 : t.buttons) == null ? void 0 : g.sizes) == null ? void 0 : p[e.buttonSize]) && s.push(t.buttons.sizes[e.buttonSize])), (q = (T = (k = t == null ? void 0 : t.buttons) == null ? void 0 : k.palettes) == null ? void 0 : T[e.palette]) != null && q[e.color] && s.push(t.buttons.palettes[e.palette][e.color])) : ((J = t == null ? void 0 : t.anchors) != null && J.base() && s.push(t.anchors.base()), (ze = ($e = (Ve = t == null ? void 0 : t.anchors) == null ? void 0 : Ve.palettes) == null ? void 0 : $e[e.palette]) != null && ze[e.color] && s.push(t.anchors.palettes[e.palette][e.color])), s.join(" ").trim();
    }) };
  }
}), V = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, zr = ["href"], Mr = ["href"];
function Tr(e, t, r, s, o, a) {
  return e.external ? (b(), y("a", {
    key: 0,
    href: e.href,
    class: h(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    I(e.$slots, "default")
  ], 10, zr)) : (b(), y("a", {
    key: 1,
    href: e.href,
    class: h(e.classes)
  }, [
    I(e.$slots, "default")
  ], 10, Mr));
}
const Gs = /* @__PURE__ */ V($r, [["render", Tr]]), _r = S({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: l.defaults.VvButton.block
    },
    color: {
      type: String,
      default: l.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: l.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: l.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: l.defaults.VvButton.size
    },
    type: {
      type: String,
      default: l.defaults.VvButton.type,
      validator: (e) => ot.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l, r = e.type;
    let s = x(() => {
      var a, n, i, c, d, f, g, p, k, T, q, J;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((a = t == null ? void 0 : t.buttons) != null && a.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((i = (n = t == null ? void 0 : t.buttons) == null ? void 0 : n.blockSizes) == null ? void 0 : i[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((c = t == null ? void 0 : t.buttons) != null && c.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((f = (d = t == null ? void 0 : t.buttons) == null ? void 0 : d.fabSizes) == null ? void 0 : f[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((g = t == null ? void 0 : t.buttons) != null && g.base() && o.push(t.buttons.base()), e.size !== "" && ((k = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : k[e.size]) && o.push(t.buttons.sizes[e.size])), (J = (q = (T = t == null ? void 0 : t.buttons) == null ? void 0 : T.palettes) == null ? void 0 : q[e.palette]) != null && J[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: r, classes: s };
  }
}), Ar = ["type"];
function Fr(e, t, r, s, o, a) {
  return b(), y("button", {
    type: e.btnType,
    class: h(e.classes)
  }, [
    I(e.$slots, "default")
  ], 10, Ar);
}
const Rr = /* @__PURE__ */ V(_r, [["render", Fr]]), jr = S({
  name: "VvColorModeButton",
  components: {
    VvButton: Rr
  },
  props: {
    mode: {
      type: String,
      default: l.defaults.VvColorModeButton.mode,
      validator: (e) => Sr.includes(e)
    },
    color: {
      type: String,
      default: l.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: l.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: l.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: l.colorModes.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: l.colorModes.dark.hex
    },
    groundLight: {
      type: String,
      default: l.colorModes.light.ground
    },
    groundLightHex: {
      type: String,
      default: l.colorModes.light.hex
    },
    textDark: {
      type: String,
      default: l.colorModes.dark.text
    },
    textLight: {
      type: String,
      default: l.colorModes.light.text
    },
    titleDark: {
      type: String,
      default: l.colorModes.dark.title
    },
    titleLight: {
      type: String,
      default: l.colorModes.light.title
    },
    type: {
      type: String,
      default: l.defaults.VvColorModeButton.type,
      validator: (e) => ot.includes(e)
    }
  },
  setup(e) {
    const t = De(e.mode), r = x(() => t.value === "dark" ? "sun" : "moon"), s = x(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return at(() => {
      typeof window < "u" && document && (document.documentElement.classList.add(
        e.groundLight,
        e.groundDark,
        e.textLight,
        e.textDark
      ), document.body.classList.add(
        e.textLight,
        e.textDark
      ), t.value === "light" ? (document.documentElement.classList.remove("dark"), document.documentElement.style.backgroundColor = e.groundLightHex) : t.value === "dark" && (document.documentElement.classList.add("dark"), document.documentElement.style.backgroundColor = e.groundDarkHex));
    }), { mode: t, icon: r, title: s };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), Br = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Hr = /* @__PURE__ */ v("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Or = [
  Hr
], Er = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Pr = /* @__PURE__ */ v("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), Ir = [
  Pr
];
function Dr(e, t, r, s, o, a) {
  const n = Le("VvButton");
  return b(), Y(n, {
    title: e.title,
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode(i)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: N(() => [
      e.icon === "moon" ? (b(), y("svg", Br, Or)) : G("", !0),
      e.icon === "sun" ? (b(), y("svg", Er, Ir)) : G("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const Us = /* @__PURE__ */ V(jr, [["render", Dr]]), Lr = S({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: l.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: l.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: l.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: l.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: l.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: l.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: l.defaults.VvEl.textColor
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    return { classes: x(() => {
      var o, a, n, i, c, d, f, g, p;
      let s = [];
      return (n = (a = (o = t == null ? void 0 : t.borders) == null ? void 0 : o.palettes) == null ? void 0 : a[e.borderPalette]) != null && n[e.borderColor] && s.push(t.borders.palettes[e.borderPalette][e.borderColor]), (d = (c = (i = t == null ? void 0 : t.grounds) == null ? void 0 : i.palettes) == null ? void 0 : c[e.groundPalette]) != null && d[e.groundColor] && s.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (p = (g = (f = t == null ? void 0 : t.text) == null ? void 0 : f.palettes) == null ? void 0 : g[e.textPalette]) != null && p[e.textColor] && s.push(t.text.palettes[e.textPalette][e.textColor]), s.join(" ").trim();
    }) };
  }
});
function Nr(e, t, r, s, o, a) {
  return b(), Y(nt(e.tag), {
    class: h(e.classes)
  }, {
    default: N(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Gr = /* @__PURE__ */ V(Lr, [["render", Nr]]), Ur = S({
  components: { VvEl: Gr },
  props: {
    displayError: {
      type: Boolean,
      default: l.defaults.VvFormGroup.displayError
    },
    displayHelp: {
      type: Boolean,
      default: l.defaults.VvFormGroup.displayHelp
    },
    displaySuccess: {
      type: Boolean,
      default: l.defaults.VvFormGroup.displaySuccess
    },
    errorClasses: {
      type: String,
      default: l.defaults.VvFormGroup.errorClasses
    },
    errorText: {
      type: String,
      default: l.defaults.VvFormGroup.errorText
    },
    errorTextColor: {
      type: String,
      default: l.defaults.VvFormGroup.errorTextColor
    },
    errorTextPalette: {
      type: String,
      default: l.defaults.VvFormGroup.errorTextPalette
    },
    helpClasses: {
      type: String,
      default: l.defaults.VvFormGroup.helpClasses
    },
    helpText: {
      type: String,
      default: l.defaults.VvFormGroup.helpText
    },
    helpTextColor: {
      type: String,
      default: l.defaults.VvFormGroup.helpTextColor
    },
    helpTextPalette: {
      type: String,
      default: l.defaults.VvFormGroup.helpTextPalette
    },
    label: {
      type: String,
      required: !0
    },
    labelFor: {
      type: String,
      required: !0
    },
    labelClasses: {
      type: String,
      default: l.defaults.VvFormGroup.labelClasses
    },
    labelTextColor: {
      type: String,
      default: l.defaults.VvFormGroup.labelTextColor
    },
    labelTextPalette: {
      type: String,
      default: l.defaults.VvFormGroup.labelTextPalette
    },
    slotParentClasses: {
      type: String,
      default: l.defaults.VvFormGroup.slotParentClasses
    },
    successClasses: {
      type: String,
      default: l.defaults.VvFormGroup.successClasses
    },
    successText: {
      type: String,
      default: l.defaults.VvFormGroup.successText
    },
    successTextColor: {
      type: String,
      default: l.defaults.VvFormGroup.successTextColor
    },
    successTextPalette: {
      type: String,
      default: l.defaults.VvFormGroup.successTextPalette
    },
    wrapperClasses: {
      type: String,
      default: l.defaults.VvFormGroup.wrapperClasses
    }
  }
});
function qr(e, t, r, s, o, a) {
  const n = Le("VvEl");
  return b(), y("div", {
    class: h(e.wrapperClasses)
  }, [
    lt(n, {
      tag: "label",
      for: e.labelFor,
      "text-palette": e.labelTextPalette,
      "text-color": e.labelTextColor,
      class: h(e.labelClasses)
    }, {
      default: N(() => [
        re(se(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "text-palette", "text-color", "class"]),
    v("div", {
      class: h(e.slotParentClasses)
    }, [
      I(e.$slots, "default")
    ], 2),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (b(), y("div", {
      key: 0,
      class: h(e.helpClasses)
    }, "\xA0 ", 2)) : G("", !0),
    e.displayHelp ? (b(), Y(n, {
      key: 1,
      tag: "div",
      "text-palette": e.helpTextPalette,
      "text-color": e.helpTextColor,
      class: h(e.helpClasses)
    }, {
      default: N(() => [
        re(se(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : G("", !0),
    e.displaySuccess ? (b(), Y(n, {
      key: 2,
      tag: "div",
      "text-palette": e.successTextPalette,
      "text-color": e.successTextColor,
      class: h(e.successClasses)
    }, {
      default: N(() => [
        re(se(e.successText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : G("", !0),
    e.displayError === !0 ? (b(), Y(n, {
      key: 3,
      tag: "div",
      "text-palette": e.errorTextPalette,
      "text-color": e.errorTextColor,
      class: h(e.errorClasses)
    }, {
      default: N(() => [
        re(se(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : G("", !0)
  ], 2);
}
const qs = /* @__PURE__ */ V(Ur, [["render", qr]]), Ce = S({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvCheckbox.color
    },
    checked: {
      type: Boolean,
      default: l.defaults.VvCheckbox.checked
    },
    darkCheckHex: {
      type: String,
      default: l.defaults.VvCheckbox.darkCheckHex
    },
    lightCheckHex: {
      type: String,
      default: l.defaults.VvCheckbox.lightCheckHex
    },
    palette: {
      type: String,
      default: l.defaults.VvCheckbox.palette
    },
    size: {
      type: String,
      default: l.defaults.VvCheckbox.size
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    let r = x(() => {
      var c, d, f, g, p, k;
      let i = [];
      return (c = t == null ? void 0 : t.checkboxes) != null && c.base() && i.push(t.checkboxes.base()), e.size !== "" && ((f = (d = t == null ? void 0 : t.checkboxes) == null ? void 0 : d.sizes) == null ? void 0 : f[e.size]) && i.push(t.checkboxes.sizes[e.size]), (k = (p = (g = t == null ? void 0 : t.checkboxes) == null ? void 0 : g.palettes) == null ? void 0 : p[e.palette]) != null && k[e.color] && i.push(t.checkboxes.palettes[e.palette][e.color]), i.join(" ").trim();
    });
    function s(i) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16'  fill='%23",
        i,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let o = x(() => s(e.darkCheckHex.replace(/#/g, ""))), a = x(() => s(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: r,
      darkCheckCssUrl: o,
      handleCheckboxChange: (i) => i.target.checked === !0,
      lightCheckCssUrl: a
    };
  }
}), Oe = () => {
  Ne((e) => ({
    "16aa95b0": e.lightCheckCssUrl,
    64545718: e.darkCheckCssUrl
  }));
}, Ee = Ce.setup;
Ce.setup = Ee ? (e, t) => (Oe(), Ee(e, t)) : Oe;
const Jr = ["checked", "data-test"];
function Yr(e, t, r, s, o, a) {
  return b(), y("input", {
    type: "checkbox",
    class: h(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleCheckboxChange(n))),
    "data-test": (e.darkCheckCssUrl ? e.darkCheckHex : "") + (e.lightCheckCssUrl ? e.lightCheckHex : "")
  }, null, 42, Jr);
}
const Js = /* @__PURE__ */ V(Ce, [["render", Yr], ["__scopeId", "data-v-5f12ce88"]]), Zr = S({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: l.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: l.defaults.VvInput.size
    },
    type: {
      type: String,
      default: l.defaults.VvInput.type,
      validator: (e) => Vr.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    return { classes: x(() => {
      var a, n, i, c, d, f;
      let o = [];
      return (a = t == null ? void 0 : t.inputs) != null && a.base() && o.push(t.inputs.base()), e.size !== "" && ((i = (n = t == null ? void 0 : t.inputs) == null ? void 0 : n.sizes) == null ? void 0 : i[e.size]) && o.push(t.inputs.sizes[e.size]), (f = (d = (c = t == null ? void 0 : t.inputs) == null ? void 0 : c.palettes) == null ? void 0 : d[e.palette]) != null && f[e.color] && o.push(t.inputs.palettes[e.palette][e.color]), o.join(" ").trim();
    }), handleInputChange: (o) => o.target.value };
  }
}), Wr = ["type", "value"];
function Qr(e, t, r, s, o, a) {
  return b(), y("input", {
    type: e.type,
    class: h(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleInputChange(n)))
  }, null, 42, Wr);
}
const Ys = /* @__PURE__ */ V(Zr, [["render", Qr]]), Se = S({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvRadio.color
    },
    checked: {
      type: Boolean,
      default: l.defaults.VvRadio.checked
    },
    darkRadioHex: {
      type: String,
      default: l.defaults.VvRadio.darkRadioHex
    },
    lightRadioHex: {
      type: String,
      default: l.defaults.VvRadio.lightRadioHex
    },
    palette: {
      type: String,
      default: l.defaults.VvRadio.palette
    },
    size: {
      type: String,
      default: l.defaults.VvRadio.size
    },
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l, r = De(e.checked);
    let s = x(() => {
      var d, f, g, p, k, T;
      let c = [];
      return (d = t == null ? void 0 : t.radios) != null && d.base() && c.push(t.radios.base()), e.size !== "" && ((g = (f = t == null ? void 0 : t.radios) == null ? void 0 : f.sizes) == null ? void 0 : g[e.size]) && c.push(t.radios.sizes[e.size]), (T = (k = (p = t == null ? void 0 : t.radios) == null ? void 0 : p.palettes) == null ? void 0 : k[e.palette]) != null && T[e.color] && c.push(t.radios.palettes[e.palette][e.color]), c.join(" ").trim();
    });
    function o(c) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16' fill='%23",
        c,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let a = x(() => o(e.darkRadioHex.replace(/#/g, ""))), n = x(() => o(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: s,
      darkRadioCssUrl: a,
      handleRadioChange: (c) => {
        const d = c.target;
        return r.value = !1, d.checked === !0 && (r.value = !0), r.value;
      },
      lightRadioCssUrl: n
    };
  }
}), Pe = () => {
  Ne((e) => ({
    "1e2a7d43": e.lightRadioCssUrl,
    "968e4e82": e.darkRadioCssUrl
  }));
}, Ie = Se.setup;
Se.setup = Ie ? (e, t) => (Pe(), Ie(e, t)) : Pe;
const Xr = ["value", "checked", "data-test"];
function Kr(e, t, r, s, o, a) {
  return b(), y("input", {
    type: "radio",
    class: h(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleRadioChange(n))),
    "data-test": (e.darkRadioCssUrl ? e.darkRadioHex : "") + (e.lightRadioCssUrl ? e.lightRadioHex : "")
  }, null, 42, Xr);
}
const Zs = /* @__PURE__ */ V(Se, [["render", Kr], ["__scopeId", "data-v-c740e056"]]), es = S({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: l.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: l.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: l.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: l.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: l.defaults.VvListItem.symbolPalette
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    let r = t == null ? void 0 : t.text.base(), s = x(() => {
      var n, i, c;
      let a = [r];
      return (c = (i = (n = t == null ? void 0 : t.text) == null ? void 0 : n.palettes) == null ? void 0 : i[e.palette]) != null && c[e.color] && a.push(t.text.palettes[e.palette][e.color]), a.join(" ").trim();
    }), o = x(() => {
      var n, i, c;
      let a = [];
      return (c = (i = (n = t == null ? void 0 : t.text) == null ? void 0 : n.palettes) == null ? void 0 : i[e.symbolPalette]) != null && c[e.symbolColor] && a.push(t.text.palettes[e.symbolPalette][e.symbolColor]), a.join(" ").trim();
    });
    return { classes: s, symbolClasses: o };
  }
});
function ts(e, t, r, s, o, a) {
  return b(), y("li", {
    class: h(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (b(), y("span", {
      key: 0,
      class: h([e.classes])
    }, [
      I(e.$slots, "default")
    ], 2)) : I(e.$slots, "default", { key: 1 })
  ], 2);
}
const Ws = /* @__PURE__ */ V(es, [["render", ts]]), rs = S({
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
}), ss = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function os(e, t, r, s, o, a) {
  return b(), y("svg", ss, [
    v("path", {
      class: h(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    v("path", {
      class: h(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    v("path", {
      class: h(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    v("path", {
      class: h(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    v("path", {
      class: h(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    v("path", {
      class: h(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    v("path", {
      class: h(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Qs = /* @__PURE__ */ V(rs, [["render", os]]), as = S({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), ns = /* @__PURE__ */ v("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), ls = [
  ns
];
function is(e, t, r, s, o, a) {
  return b(), y("svg", {
    class: h(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, ls, 2);
}
const Xs = /* @__PURE__ */ V(as, [["render", is]]), us = S({
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
    return { classes: x(() => e.enableAnimation ? e.animationClass : "") };
  }
}), cs = ["fill"], ds = ["fill"];
function fs(e, t, r, s, o, a) {
  return b(), y("svg", {
    class: h(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    v("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: h(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, cs),
    v("g", null, [
      v("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: h(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, ds)
    ])
  ], 2);
}
const Ks = /* @__PURE__ */ V(us, [["render", fs]]), gs = S({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: l.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: l.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: l.defaults.VvTextarea.rowSize
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(m("vv", {})).length > 0 ? m("vv") : l;
    let r = x(() => {
      var n, i, c, d, f, g;
      let a = [];
      return (n = t == null ? void 0 : t.textareas) != null && n.base() && a.push(t.textareas.base()), e.size !== "" && ((c = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.sizes) == null ? void 0 : c[e.size]) && a.push(t.textareas.sizes[e.size]), (g = (f = (d = t == null ? void 0 : t.textareas) == null ? void 0 : d.palettes) == null ? void 0 : f[e.palette]) != null && g[e.color] && a.push(t.textareas.palettes[e.palette][e.color]), a.join(" ").trim();
    }), s = x(() => {
      var a, n;
      if (e.rowSize !== "" && ((n = (a = t == null ? void 0 : t.textareas) == null ? void 0 : a.rowSizes) == null ? void 0 : n[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: s, handleTextareaChange: (a) => a.target.value };
  }
}), hs = ["rows", "value"];
function bs(e, t, r, s, o, a) {
  return b(), y("textarea", {
    class: h(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleTextareaChange(n)))
  }, null, 42, hs);
}
const eo = /* @__PURE__ */ V(gs, [["render", bs]]);
export {
  ht as AnchorDefault,
  it as Anchors,
  bt as BorderDefault,
  pt as ButtonOutline,
  xt as ButtonSolid,
  ut as Buttons,
  mt as CheckboxDefault,
  ct as Checkboxes,
  dt as ColorModes,
  yt as GroundConsole,
  kt as GroundDefault,
  wt as GroundMonochromatic,
  vt as GroundPastel,
  Me as InputDefault,
  Te as InputUnderlined,
  Ue as Inputs,
  Qs as ObeKnockoutMark,
  Ct as RadioDefault,
  ft as Radios,
  Ge as Text,
  St as TextDefault,
  gt as Textareas,
  D as Transitions,
  Hs as ValidAudioSourceTypes,
  ot as ValidButtonTypes,
  Sr as ValidColorModes,
  Os as ValidDirections,
  Es as ValidElementTags,
  Ps as ValidFontAwesomeFamilies,
  Is as ValidFontAwesomeSizes,
  Ds as ValidHeadingLevels,
  Ls as ValidImageSourceTypes,
  Vr as ValidInputTypes,
  Ns as ValidVideoSourceTypes,
  Xs as VueVentusLogoText,
  Ks as VueVentusSpinningMark,
  Gs as VvAnchor,
  Rr as VvButton,
  Js as VvCheckbox,
  Us as VvColorModeButton,
  l as VvConfig,
  Gr as VvEl,
  qs as VvFormGroup,
  Ys as VvInput,
  Ws as VvListItem,
  Zs as VvRadio,
  eo as VvTextarea,
  xs as appColorPairs,
  ms as camelCaseToTitleCase,
  ys as decimalsOnly,
  ks as digitsOnly,
  ws as forceBodyClick,
  vs as formatBytes,
  Cs as formatDateMMDDYYYY,
  Ss as formatDateTraditional,
  Vs as formatMediaTime,
  $s as formatNumber,
  R as getRandomInt,
  rt as hexadecimals,
  zs as mergeWithVvConfig,
  tt as monthNames,
  W as padNumber,
  Ms as randomGroundAndTextColors,
  Cr as randomHex,
  Ts as randomHexShort,
  _s as randomString,
  As as slugifyString,
  Fs as stringToCamelCase,
  Rs as stringToFilename,
  js as timestampToDateTimeAmPm,
  Bs as uniqueArray
};
