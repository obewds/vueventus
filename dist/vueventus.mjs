import { defineComponent as T, inject as V, computed as h, openBlock as m, createElementBlock as L, normalizeClass as b, renderSlot as I, ref as F, onMounted as he, resolveComponent as oe, createBlock as D, withCtx as P, createCommentVNode as q, createElementVNode as C, resolveDynamicComponent as wt, createVNode as $e, createTextVNode as te, toDisplayString as G, useCssVars as Ct, cloneVNode as _t, h as Ye, Fragment as Te, provide as zt, watchEffect as Ae, watch as Vt, onUnmounted as er, nextTick as ue, toRaw as U, renderList as tr } from "vue";
const Xe = {
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
}, ae = {
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
    var a, s, o;
    const t = e && ((a = this.durations) != null && a[e]) ? e : "300";
    return (s = this.durations) != null && s[t] ? (o = this.durations) == null ? void 0 : o[t] : "";
  },
  getEasingClasses: function(e) {
    var a, s, o;
    const t = e && ((a = this.easings) != null && a[e]) ? e : "inOut";
    return (s = this.easings) != null && s[t] ? (o = this.easings) == null ? void 0 : o[t] : "";
  },
  getTransitionClasses: function(e) {
    var a, s, o;
    const t = e && ((a = this.transitions) != null && a[e]) ? e : "default";
    return (s = this.transitions) != null && s[t] ? (o = this.transitions) == null ? void 0 : o[t] : "";
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
    const a = e || "", s = t || "", o = r || "";
    return [
      this.getTransitionClasses(a),
      this.getEasingClasses(s),
      this.getDurationClasses(o)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, rr = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: ae.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Xe.sizes,
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
}, ar = {
  border: "border",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: ae.classes("all", "inOut", "300"),
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
}, sr = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "rounded",
  shadow: "",
  transition: ae.classes("colors", "inOut", "300"),
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
}, or = {
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
}, $t = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: ae.classes("colors", "inOut", "300"),
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
}, lr = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: ae.classes("colors", "inOut", "300"),
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
}, nr = {
  align: "text-left",
  decoration: "",
  family: "",
  lineHeight: "",
  padding: "pl-4",
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
      this.padding,
      this.smoothing,
      this.spacing,
      this.weight,
      this.wordBreak
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Xe.sizes,
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
}, ir = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "",
  shadow: "",
  transition: ae.classes("colors", "inOut", "300"),
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
}, ur = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: ae.classes("colors", "inOut", "300"),
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
}, dr = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: ae.classes("colors", "inOut", "300"),
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
  sizes: $t.sizes,
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
}, cr = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, pr = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, fr = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, br = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, gr = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, hr = {
  default: "dark:fill-gray-100 fill-gray-900",
  error: "fill-rose-500 dark:fill-rose-300",
  primary: "fill-blue-500 dark:fill-blue-300",
  secondary: "fill-violet-500 dark:fill-violet-300",
  success: "fill-green-600 dark:fill-green-300"
}, vr = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, mr = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, yr = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, xr = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, Ue = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, Qe = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, kr = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500"
}, Sr = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500"
}, wr = {
  default: "ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, Cr = {
  default: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, zr = {
  default: "",
  error: "marker:text-rose-500 dark:marker:text-rose-300",
  primary: "marker:text-blue-500 dark:marker:text-blue-300",
  secondary: "marker:text-violet-500 dark:marker:text-violet-300",
  success: "marker:text-green-600 dark:marker:text-green-300"
}, Vr = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, $r = {
  "": "",
  default: "scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800",
  error: "scrollbar scrollbar-thumb-rose-100 scrollbar-track-rose-200 dark:scrollbar-thumb-rose-600 dark:scrollbar-track-rose-800",
  primary: "scrollbar scrollbar-thumb-blue-100 scrollbar-track-blue-200 dark:scrollbar-thumb-blue-600 dark:scrollbar-track-blue-800",
  secondary: "scrollbar scrollbar-thumb-violet-100 scrollbar-track-violet-200 dark:scrollbar-thumb-violet-600 dark:scrollbar-track-violet-800",
  success: "scrollbar scrollbar-thumb-green-100 scrollbar-track-green-200 dark:scrollbar-thumb-green-600 dark:scrollbar-track-green-800"
}, Tr = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, Or = {
  VvAnchor: {
    button: !1,
    buttonBlock: !1,
    buttonFab: !1,
    buttonSize: "md",
    color: "default",
    debug: !1,
    external: !1,
    href: "#",
    palette: "default",
    textSize: "md"
  },
  VvButton: {
    block: !1,
    color: "primary",
    debug: !1,
    fab: !1,
    palette: "solid",
    size: "md",
    type: "button"
  },
  VvCheckbox: {
    checked: !1,
    color: "default",
    darkCheckHex: "#242426",
    debug: !1,
    lightCheckHex: "#e1e1e3",
    palette: "default",
    size: "md"
  },
  VvColorModeButton: {
    color: "default",
    debug: !1,
    mode: "light",
    palette: "outline",
    size: "xs",
    type: "button"
  },
  VvEl: {
    borderPalette: "default",
    borderColor: "",
    debug: !1,
    groundPalette: "default",
    groundColor: "default",
    size: "md",
    tag: "div",
    textPalette: "default",
    textColor: "default"
  },
  VvFa: {
    debug: !1,
    family: "fas",
    icon: "house",
    size: "1x"
  },
  VvFormGroup: {
    debug: !1,
    displayError: !1,
    displayHelp: !1,
    displaySuccess: !1,
    errorClasses: "",
    errorText: "",
    errorTextColor: "error",
    errorTextPalette: "default",
    errorTextSize: "sm",
    helpClasses: "opacity-75",
    helpText: "",
    helpTextColor: "default",
    helpTextPalette: "default",
    helpTextSize: "sm",
    labelClasses: "capitalize",
    labelTextColor: "default",
    labelTextPalette: "default",
    labelTextSize: "md",
    slotParentClasses: "flex items-center gap-1",
    successClasses: "",
    successText: "",
    successTextColor: "success",
    successTextPalette: "default",
    successTextSize: "sm",
    wrapperClasses: "w-full flex flex-col space-y-1"
  },
  VvInput: {
    color: "default",
    debug: !1,
    palette: "default",
    size: "md",
    type: "text"
  },
  VvList: {
    debug: !1,
    listStyleTypeClass: "list-disc",
    markerColor: "primary",
    markerPalette: "default",
    size: "md",
    tag: "ul"
  },
  VvListbox: {
    data: [
      { id: 0, display: "Select an option", value: "", disabled: !1 },
      { id: 1, display: "Default Option One", value: "one", disabled: !1 },
      { id: 2, display: "Default Option Two", value: "two", disabled: !1 },
      { id: 3, display: "Default Option Three", value: "three", disabled: !1 },
      { id: 4, display: "Disabled Option Four Example", value: "four", disabled: !0 },
      { id: 5, display: "Default Option Five", value: "five", disabled: !1 }
    ],
    debug: !1,
    displayClasses: "w-full px-2 py-1 text-left",
    displayDisabledClasses: "opacity-50",
    iconDisabledClasses: "mr-3 opacity-25",
    iconSelectedClasses: "hidden ui-selected:block mr-3",
    iconsSizeClasses: "w-5 h-5",
    label: "",
    labelClasses: "block text-left pb-1",
    listboxButtonClasses: "w-full flex justify-between items-center gap-3 p-2 mx-auto",
    listboxButtonColor: "default",
    listboxButtonPalette: "default",
    listboxOptionClasses: "w-full flex items-center justify-start px-2 ui-active:hover:cursor-pointer ui-not-active:hover:cursor-not-allowed",
    listboxOptionColor: "default",
    listboxOptionPalette: "default",
    listboxOptionsClasses: "w-full shadow-md",
    listboxOptionsWithLabelSpacing: "pt-1",
    listboxOptionsWithoutLabelSpacing: "pt-1",
    optionIconParentClasses: "w-6",
    selectedDisplayClasses: "block text-left",
    selectedIndex: 0,
    size: "md"
  },
  VvListItem: {
    color: "neutral",
    debug: !1,
    enableColoredSymbols: !0,
    palette: "default",
    symbolColor: "primary",
    symbolPalette: "default"
  },
  VvNuxtRouterLink: {
    button: !1,
    buttonBlock: !1,
    buttonFab: !1,
    buttonSize: "md",
    color: "default",
    debug: !1,
    external: !1,
    to: "/",
    palette: "default",
    textSize: "md"
  },
  VvPrism: {
    debug: !1,
    prismVars: !0
  },
  VvPrismVars: {
    commentStyle: "normal",
    debug: !1,
    fontSize: "1rem",
    lineHeight: "1.3rem",
    lineHighlightOpacity: "0.25",
    textShadow: "unset",
    urlDecoration: "underline"
  },
  VvQuadFormGroup: {
    bottomSlotClasses: "",
    bottomWrapperClasses: "flex justify-between gap-3",
    debug: !1,
    displayError: !1,
    displayHelp: !1,
    displaySuccess: !1,
    errorClasses: "",
    errorText: "",
    errorTextColor: "error",
    errorTextPalette: "default",
    errorTextSize: "sm",
    helpClasses: "opacity-75",
    helpText: "",
    helpTextColor: "default",
    helpTextPalette: "default",
    helpTextSize: "sm",
    labelClasses: "capitalize",
    labelTextColor: "default",
    labelTextPalette: "default",
    labelTextSize: "md",
    slotParentClasses: "flex items-center gap-1",
    successClasses: "",
    successText: "",
    successTextColor: "success",
    successTextPalette: "default",
    successTextSize: "sm",
    textParentClasses: "flex justify-between gap-3",
    topSlotClasses: "flex justify-between gap-3",
    topWrapperClasses: "flex justify-between items-end gap-3",
    wrapperClasses: "w-full flex flex-col space-y-1"
  },
  VvRadio: {
    checked: !1,
    color: "default",
    darkRadioHex: "#242426",
    debug: !1,
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
    debug: !1,
    external: !1,
    to: "/",
    palette: "default",
    textSize: "md"
  },
  VvScrollUp: {
    buttonClasses: "rounded-full",
    color: "primary",
    debug: !1,
    fab: !0,
    isVisible: !1,
    offsetMinimum: 100,
    palette: "solid",
    size: "xs",
    title: "Scroll to Top"
  },
  VvSelect: {
    color: "default",
    debug: !1,
    palette: "default",
    size: "md"
  },
  VvTextarea: {
    color: "default",
    debug: !1,
    palette: "default",
    size: "md",
    rowSize: "md"
  }
}, n = {
  //
  // Design System Defaults
  //
  anchors: {
    ...rr,
    palettes: {
      default: cr
    }
  },
  borders: {
    palettes: {
      default: pr
    }
  },
  buttons: {
    ...ar,
    palettes: {
      outline: fr,
      solid: br
    }
  },
  checkboxes: {
    ...sr,
    palettes: {
      default: gr
    }
  },
  fills: {
    palettes: {
      default: hr
    }
  },
  inputs: {
    ...$t,
    palettes: {
      default: Ue,
      underlined: Qe
    }
  },
  colorModes: {
    ...or
  },
  grounds: {
    palettes: {
      console: vr,
      default: mr,
      monochromatic: yr,
      pastel: xr
    }
  },
  listboxes: {
    ...lr,
    buttonPalettes: {
      default: kr,
      underlined: Sr
    },
    optionPalettes: {
      default: wr,
      underlined: Cr
    }
  },
  lists: {
    ...nr,
    palettes: {
      default: zr
    }
  },
  radios: {
    ...ir,
    palettes: {
      default: Vr
    }
  },
  scrollbars: {
    palettes: {
      default: $r
    }
  },
  selects: {
    ...ur,
    palettes: {
      default: Ue,
      underlined: Qe
    }
  },
  text: {
    ...Xe,
    palettes: {
      default: Tr
    }
  },
  textareas: {
    ...dr,
    palettes: {
      default: Ue,
      underlined: Qe
    }
  },
  transitions: {
    ...ae
  },
  //
  // Component Prop Defaults
  //
  defaults: Or
}, E = Math.round, Z = Math.min, X = Math.max, Lr = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, Oe = (e) => typeof e == "string" && e.includes("%"), We = (e) => e < 1 ? E(e) : e, Fr = (e) => E(100 * e) / 100, Tt = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), be = (e) => e.a < 1 && e.a >= 0, Re = (e) => Z(1, X(0, e)), Pr = (e) => e.length === 1 ? `0${e}` : `${e}`, Br = "[-\\+]?\\d+%?", jr = "[-\\+]?\\d*\\.\\d+%?", le = `(?:${jr})|(?:${Br})`, re = (e) => new RegExp(le).test(e), Ot = (e) => re(e.r) && re(e.g) && re(e.b), Ke = `[\\s|\\(]+(${le})[,|\\s]+(${le})[,|\\s]+(${le})\\s*\\)?`, _e = `[\\s|\\(]+(${le})[,|\\s]+(${le})[,|\\s]+(${le})[,|\\s]+(${le})\\s*\\)?`;
function N(e, t) {
  Lr(e) && (e = "100%");
  const r = Oe(e);
  return e = Z(t, X(0, Number.parseFloat(e))), r && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const ve = (e) => Number.parseInt(e, 16), lt = (e) => ve(e) / 255, me = (e) => e <= 1 ? `${e * 100}%` : e, ne = (e) => {
  const [t, r, a] = [e._r, e._g, e._b].map((s) => E(s));
  return { r: t, g: r, b: a, a: e._roundA };
}, ie = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), Le = (e) => {
  const [t, r, a] = [e.r, e.g, e.b].map((s) => N(s, 255) * 255);
  return { r: t, g: r, b: a, a: Tt(e.a) };
}, Fe = (e) => {
  const [t, r, a] = [e.r, e.g, e.b].map((s) => `${E(N(s, 255) * 100)}%`);
  return { r: t, g: r, b: a, a: e.a };
}, Pe = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Lt = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, E(e.a * 255)], Be = (e, t) => {
  const r = Lt(e).map((a) => a.toString(16)).map((a) => Pr(a));
  return t && r.every((a) => a.charAt(0) === a.charAt(1)) ? r.map((a) => a.charAt(0)).join("") : r.join("");
}, ye = (e, t) => Be({ ...e, a: 1 }, t), Mr = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Ar(e) {
  const t = e.r / 255, r = e.g / 255, a = e.b / 255, s = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, o = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4, l = a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  return 0.2126 * s + 0.7152 * o + 0.0722 * l;
}
function Rr(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  const a = new f(e).toRgb(), s = new f(t).toRgb(), o = r / 100, l = {
    r: (s.r - a.r) * o + a.r,
    g: (s.g - a.g) * o + a.g,
    b: (s.b - a.b) * o + a.b,
    a: (s.a - a.a) * o + a.a
  };
  return new f(l);
}
function Dr(e) {
  let t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
function et(e, t) {
  const r = new f(e), a = new f(t);
  return (Math.max(r.getLuminance(), a.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), a.getLuminance()) + 0.05);
}
function Ft(e, t, r) {
  const a = et(e, t), s = Dr(r);
  let o = !1;
  switch (s.level + s.size) {
    case "AAlarge":
      o = a >= 3;
      break;
    case "AAAsmall":
      o = a >= 7;
      break;
    default:
      o = a >= 4.5;
  }
  return o;
}
function Pt(e, t, r = {}) {
  const { includeFallbackColors: a, level: s, size: o } = r;
  let l, i = null, c = 0;
  for (const u of t)
    l = et(e, u), l > c && (c = l, i = new f(u));
  return Ft(e, i, { level: s, size: o }) || !a ? i : (r.includeFallbackColors = !1, Pt(e, ["#fff", "#000"], r));
}
function de(e, t) {
  return { monochromatic: qr, analogous: Gr, complement: Er, splitcomplement: Nr, triad: Hr, tetrad: Ir }[e](...t);
}
function Er(e) {
  const t = new f(e).toHsl();
  return t.h = (t.h + 180) % 360, new f(t);
}
function Hr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 120) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 240) % 360, s: t.s, l: t.l })
  ];
}
function Ir(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 90) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 180) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 270) % 360, s: t.s, l: t.l })
  ];
}
function Nr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 72) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 216) % 360, s: t.s, l: t.l })
  ];
}
function Gr(e, t = 6, r = 30) {
  const a = new f(e).toHsl(), s = 360 / r, o = [new f(e)];
  for (a.h = (a.h - (s * t >> 1) + 720) % 360; --t; )
    a.h = (a.h + s) % 360, o.push(new f(a));
  return o;
}
function qr(e, t = 6) {
  const r = new f(e).toHsv();
  let { h: a, s, v: o } = r;
  const l = [], i = 1 / t;
  for (; t--; )
    l.push(new f({ h: a, s, v: o })), o = (o + i) % 1;
  return l;
}
function se(e, t) {
  const a = { invert: Ur, desaturate: Qr, saturate: Wr, greyscale: Jr, lighten: Yr, brighten: Zr, darken: Xr, spin: Kr }[e](...t), [s] = t;
  return s._r = a._r, s._g = a._g, s._b = a._b, s.setAlpha(a._a), s;
}
function Ur(e) {
  const t = new f(e).toRgb();
  return t.r = X(0, Z(255, 255 - t.r)), t.g = X(0, Z(255, 255 - t.g)), t.b = X(0, Z(255, 255 - t.b)), new f(t);
}
function Qr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s -= t / 100, r.s = Re(r.s), new f(r);
}
function Wr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s += t / 100, r.s = Re(r.s), new f(r);
}
function Jr(e) {
  return new f(e).desaturate(100);
}
function Yr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l += t / 100, r.l = Re(r.l), new f(r);
}
function Zr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toRgb();
  return r.r = X(0, Z(255, r.r - E(255 * -(t / 100)))), r.g = X(0, Z(255, r.g - E(255 * -(t / 100)))), r.b = X(0, Z(255, r.b - E(255 * -(t / 100)))), new f(r);
}
function Xr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l -= t / 100, r.l = Re(r.l), new f(r);
}
function Kr(e, t) {
  const r = new f(e).toHsl(), a = (r.h + t) % 360;
  return r.h = a < 0 ? 360 + a : a, new f(r);
}
class _r {
  constructor(t, r, a = {}) {
    this.api = t, this.id = r, this.options = a;
  }
  use(t) {
    return this.wanted = t, this;
  }
  parse(t) {
    const r = this.api.findColor(t);
    return {
      as: (a) => Object.assign(r, { format: a }),
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
const ea = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class ta {
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
    if (this.colorspaces[t] = new _r(this, t, { ...this.options, ...r }), r.alias)
      for (const a of r.alias)
        this.colorspaces[a] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const r = { ...ea };
    if (t = typeof t == "string" ? t.trim().toLowerCase() : t, t) {
      for (const a in this.colorspaces)
        if (this.colorspaces[a].shouldHandleInput(t)) {
          Object.assign(r, this.colorspaces[a].toRgb(t)), r.format = r.format || a, r.ok = !0;
          break;
        }
    }
    return r;
  }
  raw(t, r) {
    return r in this.colorspaces ? this.colorspaces[r].toRaw(t) : { r: t.r / 255, g: t.g / 255, b: t.b / 255, a: t.a };
  }
  print(t, r, a) {
    const s = a;
    return a = a || r, a in this.colorspaces ? this.colorspaces[a].use(s).complete(t) : `[${t.r}, ${t.g}, ${t.b}, ${t.a * 255}]`;
  }
}
let ra = 0;
const K = new ta();
class f {
  /**
   * Create a new TinyColor instance
   * @param  {string|array|object} color Notation describing a color
   * @param  {object} options            Options object (see below)
   * @return {TinyColor}                 An instance representing the color
   */
  constructor(t, r = {}) {
    if (t = t || "", t instanceof f)
      return t;
    const a = K.findColor(t);
    this._originalInput = t, this._r = We(a.r), this._g = We(a.g), this._b = We(a.b), this._a = a.a, this._roundA = Fr(this._a), this._format = r.format || a.format, this._gradientType = r.gradientType, this._ok = a.ok, this._tc_id = f.newId(), K.set(r);
  }
  /**
   * Create a new ID
   *
   * @return     {number}  Incremented ID counter
   */
  static newId() {
    return ra++;
  }
  /**
   * Register a TinyColor extension
   * @param   {string}  id                   The plugin identifier
   * @param   {object}  [options={}]         Plugin options
   * @param   {string}  options.alphaFormat  rgb|hex
   * @param   {boolean} options.shortHex     Short hex codes #ABC, if possible
   * @param   {boolean} options.upperCaseHex User UPPER case hex
   * @return  {TinyColorExtension}           The TinyColor extension
   */
  static registerFormat(t, r = {}) {
    return K.add(t, r);
  }
  /**
   * Are two TinyColor colours equivalent?
   *
   * @param      {TinyColor}  color1  The first color
   * @param      {TinyColor}  color2  The second color
   * @return     {boolean}  Equivalent or not?
   */
  static equals(t, r) {
    return !t || !r ? !1 : new f(t).toRgbString() === new f(r).toRgbString();
  }
  /**
   * Create a new TinyColor from values from 0..1
   *
   * @param      {object}     color    The color
   * @param      {object}     options  The options
   * @return     {TinyColor}  The tiny color.
   */
  static fromRatio(t, r) {
    if (typeof t == "object") {
      const a = {};
      for (const s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (s === "a" ? a[s] = t[s] : a[s] = me(t[s]));
      t = a;
    }
    return new f(t, r);
  }
  /**
   * Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
   *
   * @param      {TinyColor}  color1  The first color
   * @param      {TinyColor}  color2  The second color
   * @return     {number}             The color contrast defined by (WCAG Version 2)
   */
  static readability(t, r) {
    return et(t, r);
  }
  /**
   * Ensure that foreground and background color combinations meet WCAG2 guidelines.
   *
   * @param   {TinyColor}        color1        The first color
   * @param   {TinyColor}        color2        The second color
   * @param   {object}           wcag2         The WCAG2 properties to test
   * @param   {object}           wcag2.level   The level to test "AA" or "AAA" (default "AA")
   * @param   {object}           wcag2.size    The content size to test "large" or "small" (default "small")
   * @example Tinycolor.isReadable("#000", "#111") → false
   * @example Tinycolor.isReadable("#000", "#111", {level:"AA",size:"large"}) → false
   * @return  {(boolean|number)} True if readable, False otherwise.
   */
  static isReadable(t, r, a) {
    return Ft(t, r, a);
  }
  /**
   * Given a base color and a list of possible foreground or background colors for that
   * base, returns the most readable color.
   *
   * Optionally returns Black or White if the most readable color is unreadable.
   *
   * @param   {TinyColor}    baseColor                     The base color
   * @param   {[TinyColor]}  colorList                     An array of TinyColors
   * @param   {object}       [args={}]                     The arguments
   * @param   {boolean}      args.includeFallbackColors    Include fallback colors?
   * @param   {object}       args.level                    The level to test "AA" or "AAA" (default "AA")
   * @param   {object}       args.size                     The content size to test "large" or "small" (default "small")
   * @example Tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"], {includeFallbackColors:false}).toHexString(); // "#112255"
   * @example Tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"], {includeFallbackColors:true}).toHexString();  // "#ffffff"
   * @example Tinycolor.mostReadable("#a8015a", ["#faf3f3"], {includeFallbackColors:true, level:"AAA", size:"large"}).toHexString(); // "#faf3f3"
   * @example Tinycolor.mostReadable("#a8015a", ["#faf3f3"], {includeFallbackColors:true, level:"AAA", size:"small"}).toHexString(); // "#ffffff"
   * @return  {TinyColor}    A TinyColor instance of the msot readable color.
   */
  static mostReadable(t, r, a) {
    return Pt(t, r, a);
  }
  /**
   * Mix a second colour into the first
   *
   * @param  {TinyColor}  color1  The first color
   * @param  {TinyColor}  color2  The second color
   * @param  {number}     amount  The mix amount of the second color
   * @return {TinyColor}			   A new, mixed TinyColor instance
   */
  static mix(t, r, a) {
    return Rr(t, r, a);
  }
  /**
   * Determines if dark.
   *
   * @return     {boolean}  True if dark, False otherwise.
   */
  isDark() {
    return this.getBrightness() < 128;
  }
  /**
   * Determines if light.
   *
   * @return     {boolean}  True if light, False otherwise.
   */
  isLight() {
    return !this.isDark();
  }
  /**
   * Determines if valid.
   *
   * @return     {boolean}  True if valid, False otherwise.
   */
  isValid() {
    return this._ok;
  }
  /**
   * Gets the original input.
   *
   * @return     {string|object}  The original input.
   */
  getOriginalInput() {
    return this._originalInput;
  }
  /**
   * Gets the format.
   *
   * @return     {string}  The format.
   */
  getFormat() {
    return this._format;
  }
  /**
   * Gets the alpha.
   *
   * @return     {number}  The alpha.
   */
  getAlpha() {
    return this._a;
  }
  /**
   * Gets the brightness.
   *
   * @return     {number}  The brightness.
   */
  getBrightness() {
    return Mr(this.toRgb());
  }
  /**
   * Gets the luminance.
   *
   * @return     {number}  The luminance.
   */
  getLuminance() {
    return Ar(ie(this));
  }
  /**
   * Return the current color as a string.
   *
   * @param      {string}  format  The color format
   * @return     {string}  The current color, as a string.
   */
  toString(t) {
    return K.print(ne(this), this._format, t);
  }
  /**
   * Returns a name representation of the object.
   *
   * @return     {string}  The name of the colour.
   */
  toName() {
    return K.print(ne(this), "name", "toName");
  }
  /**
   * Returns a rgb representation of the object.
   *
   * @return     {object}  Rgb representation of the object.
   */
  toRgb() {
    return ie(this);
  }
  /**
   * Returns a rgb string representation of the object.
   *
   * @return     {string}  Rgb string representation of the object.
   */
  toRgbString() {
    return Pe(ne(this));
  }
  /**
   * Returns a rgb array representation of the object.
   *
   * @return     {[number]}  Rgb array representation of the object.
   */
  toRgbArray() {
    return Lt(ne(this));
  }
  /**
   * Returns a percentage rgb representation of the object.
   *
   * @return     {object}  Percentage rgb representation of the object.
   */
  toPercentageRgb() {
    return Fe(ie(this));
  }
  /**
   * Returns a percentage rgb string representation of the object.
   *
   * @return     {string}  Percentage rgb string representation of the object.
   */
  toPercentageRgbString() {
    return Pe(Fe(ne(this)));
  }
  /**
   * Return the hex string of a color, as pure hexadecimal.
   *
   * @param      {boolean}  allow3Char  Allow 3 digit RGB strings
   * @return     {string}  The Hex string of the color.
   */
  toHex(t) {
    return ye(ne(this), t);
  }
  /**
   * Return the hex string of a color, with a leading #
   *
   * @param      {boolean}  allow3Char  Allow 3 digit RGB strings
   * @return     {string}  The Hex string of the color.
   */
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  /**
   * Return the hex string of a color with aplha, as pure hexadecimal.
   *
   * @param      {boolean}  allow4Char  Allow 4 digit RGBA strings
   * @return     {string}  The Hex string of the color.
   */
  toHex8(t) {
    return Be(ne(this), t);
  }
  /**
   * Return the hex string of a color with aplha, with a leading #
   *
   * @param      {boolean}  allow3Char  Allow 4 digit RGBA strings
   * @return     {string}  The Hex string of the color.
   */
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  /**
   * Returns a HSV object representation of the object.
   *
   * @return     {object}  HSV(A) representation of the color.
   */
  toHsv() {
    return K.raw(ie(this), "hsv");
  }
  /**
   * Returns a HSV string representation of the object.
   *
   * @return     {string}  hsv(h, s, v[, a]) representation of the color.
   */
  toHsvString() {
    return K.print(ie(this), this._format, "hsv");
  }
  /**
   * Returns a HSL object representation of the object.
   *
   * @return     {object}  HSL(A) representation of the color.
   */
  toHsl() {
    return K.raw(ie(this), "hsl");
  }
  /**
   * Returns a HSL string representation of the object.
   *
   * @return     {string}  hsl(h, s, l[, a]) representation of the color.
   */
  toHslString() {
    return K.print(ie(this), this._format, "hsl");
  }
  /**
   * Sets the alpha.
   *
   * @param      {number}  value   The alpha value (0 - 1.0)
   * @return     {TinyColor}  The current colour with the set alpha.
   */
  setAlpha(t) {
    return this._a = Tt(t), this._roundA = E(100 * this._a) / 100, this;
  }
  /**
   * Creates a new instance of the object with same properties than original.
   *
   * @return     {TinyColor}  Copy of this object.
   */
  clone() {
    return new f(this.toString());
  }
  lighten(...t) {
    return se("lighten", [this, ...t]);
  }
  brighten(...t) {
    return se("brighten", [this, ...t]);
  }
  darken(...t) {
    return se("darken", [this, ...t]);
  }
  desaturate(...t) {
    return se("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return se("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return se("greyscale", [this, ...t]);
  }
  invert(...t) {
    return se("invert", [this, ...t]);
  }
  spin(...t) {
    return se("spin", [this, ...t]);
  }
  analogous(...t) {
    return de("analogous", [this, ...t]);
  }
  complement(...t) {
    return de("complement", [this, ...t]);
  }
  monochromatic(...t) {
    return de("monochromatic", [this, ...t]);
  }
  splitcomplement(...t) {
    return de("splitcomplement", [this, ...t]);
  }
  triad(...t) {
    return de("triad", [this, ...t]);
  }
  tetrad(...t) {
    return de("tetrad", [this, ...t]);
  }
}
const nt = function() {
  return {
    rgb: new RegExp(`rgb${Ke}`),
    rgba: new RegExp(`rgba${_e}`)
  };
}();
function De(e) {
  let t, r, a, s, o;
  return (o = nt.rgb.exec(e)) ? ([t, r, a] = o.splice(1, 3), { r: t, g: r, b: a }) : (o = nt.rgba.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { r: t, g: r, b: a, a: s }) : !1;
}
const Ee = f.registerFormat("rgb");
Ee.shouldHandleInput = (e) => typeof e == "object" && Ot(e) && !Oe(e.r) || De(e);
Ee.toRgb = (e) => typeof e == "object" && Le(e) || Le(De(e));
Ee.toRaw = (e) => e;
Ee.toString = (e) => Pe(e);
const He = f.registerFormat("prgb");
He.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = De(e);
    return t && Oe(t.r);
  }
  return Ot(e) && Oe(e.r);
};
He.toRgb = (e) => Le(typeof e == "object" ? e : De(e));
He.toRaw = (e) => Fe(e);
He.toString = (e) => Pe(Fe(e));
const Q = f.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), je = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function aa(e) {
  let t;
  if (t = je.hex3.exec(e)) {
    const [r, a, s] = t.splice(1, 3).map((o) => `${o}${o}`).map((o) => ve(o));
    return { r, g: a, b: s, a: 1 };
  }
  if (t = je.hex6.exec(e)) {
    const [r, a, s] = t.splice(1, 3).map((o) => ve(o));
    return { r, g: a, b: s, a: 1 };
  }
  return !1;
}
const Ce = (e, t = Q.options.shortHex) => `#${Q.options.upperCaseHex ? ye(e, t).toUpperCase() : ye(e, t)}`;
Q.shouldHandleInput = (e) => je.hex6.test(e) || je.hex3.test(e);
Q.toRgb = (e) => aa(e);
Q.toRaw = (e) => e;
Q.toString = (e) => /^hex6?$/.test(Q.wanted) ? Ce(e) : Q.wanted === "hex3" ? Ce(e, !0) : be(e) ? Q.options.alphaFormat === "hex" ? Ce(e) : Q.print(Q.options.alphaFormat, e) : Ce(e);
const W = f.registerFormat("hex8", {
  alias: ["hex4"]
}), Me = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function sa(e) {
  let t;
  if (t = Me.hex4.exec(e)) {
    const r = lt(`${t[4]}${t[4]}`), [a, s, o] = t.splice(1, 3).map((l) => `${l}${l}`).map((l) => ve(l));
    return { r: a, g: s, b: o, a: r };
  }
  if (t = Me.hex8.exec(e)) {
    const r = lt(t[4]), [a, s, o] = t.splice(1, 3).map((l) => ve(l));
    return { r: a, g: s, b: o, a: r };
  }
  return !1;
}
const ze = (e, t = W.options.shortHex) => `#${W.options.upperCaseHex ? Be(e, t).toUpperCase() : Be(e, t)}`;
W.shouldHandleInput = (e) => Me.hex8.test(e) || Me.hex4.test(e);
W.toRgb = (e) => sa(e);
W.toRaw = (e) => e;
W.toString = (e) => W.wanted === "hex4" ? ze(e, !0) : W.wanted === "hex8" ? ze(e) : be(e) ? W.options.alphaFormat === "hex" ? ze(e) : W.print(W.options.alphaFormat, e) : ze(e);
const Ie = f.registerFormat("hsl"), it = function() {
  return {
    hsl: new RegExp(`hsl${Ke}`),
    hsla: new RegExp(`hsla${_e}`)
  };
}(), oa = (e) => re(e.h) && re(e.s) && re(e.l);
function Bt(e) {
  const t = N(e.r, 255), r = N(e.g, 255), a = N(e.b, 255), s = e.a || 1, o = X(t, r, a), l = Z(t, r, a);
  let i, c;
  const u = (o + l) / 2;
  if (o === l)
    i = 0, c = 0;
  else {
    const d = o - l;
    switch (c = u > 0.5 ? d / (2 - o - l) : d / (o + l), o) {
      case t:
        i = (r - a) / d + (r < a ? 6 : 0);
        break;
      case r:
        i = (a - t) / d + 2;
        break;
      default:
        i = (t - r) / d + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, l: u, a: s };
}
function ut(e) {
  const t = N(e.h, 360), r = N(me(e.s), 100), a = N(me(e.l), 100), s = e.a || 1;
  let o, l, i;
  function c(u, d, p) {
    return p = p < 0 ? p + 1 : p, p = p > 1 ? p - 1 : p, p < 1 / 6 ? u + (d - u) * 6 * p : p < 1 / 2 ? d : p < 2 / 3 ? u + (d - u) * (2 / 3 - p) * 6 : u;
  }
  if (r === 0)
    o = a, l = a, i = a;
  else {
    const u = a < 0.5 ? a * (1 + r) : a + r - a * r, d = 2 * a - u;
    o = c(d, u, t + 1 / 3), l = c(d, u, t), i = c(d, u, t - 1 / 3);
  }
  return { r: o * 255, g: l * 255, b: i * 255, a: s };
}
function jt(e) {
  let t, r, a, s, o;
  return (o = it.hsl.exec(e)) ? ([t, r, a] = o.splice(1, 3), { h: t, s: r, l: a }) : (o = it.hsla.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { h: t, s: r, l: a, a: s }) : !1;
}
function la(e) {
  let { h: t, s: r, l: a, a: s } = e;
  return t = E(t * 360), r = E(r * 100), a = E(a * 100), s === 1 ? `hsl(${t}, ${r}%, ${a}%)` : `hsla(${t}, ${r}%, ${a}%, ${s})`;
}
function na(e) {
  let { h: t, s: r, l: a, a: s } = e;
  return t *= 360, { h: t, s: r, l: a, a: s };
}
Ie.shouldHandleInput = (e) => typeof e == "object" && oa(e) || jt(e);
Ie.toRgb = (e) => typeof e == "object" && ut(e) || ut(jt(e));
Ie.toRaw = (e) => na(Bt(e));
Ie.toString = (e) => la(Bt(e));
const Ne = f.registerFormat("hsv"), dt = function() {
  return {
    hsv: new RegExp(`hsv${Ke}`),
    hsva: new RegExp(`hsva${_e}`)
  };
}(), ia = (e) => re(e.h) && re(e.s) && re(e.v);
function Mt(e) {
  const t = N(e.r, 255), r = N(e.g, 255), a = N(e.b, 255), s = e.a || 1, o = X(t, r, a), l = Z(t, r, a), i = o - l;
  let c;
  const u = o === 0 ? 0 : i / o, d = o;
  if (o === l)
    c = 0;
  else {
    switch (o) {
      case t:
        c = (r - a) / i + (r < a ? 6 : 0);
        break;
      case r:
        c = (a - t) / i + 2;
        break;
      default:
        c = (t - r) / i + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: u, v: d, a: s };
}
function ct(e) {
  const t = N(e.h, 360) * 6, r = N(me(e.s), 100), a = N(me(e.v), 100), s = e.a || 1, o = Math.floor(t), l = t - o, i = a * (1 - r), c = a * (1 - l * r), u = a * (1 - (1 - l) * r), d = o % 6, p = [a, c, i, i, u, a][d], v = [u, a, a, c, i, i][d], y = [i, i, u, a, a, c][d];
  return { r: p * 255, g: v * 255, b: y * 255, a: s };
}
function At(e) {
  let t, r, a, s, o;
  return (o = dt.hsv.exec(e)) ? ([t, r, a] = o.splice(1, 3), { h: t, s: r, v: a }) : (o = dt.hsva.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { h: t, s: r, v: a, a: s }) : !1;
}
function ua(e) {
  let { h: t, s: r, v: a, a: s } = e;
  return t = E(t * 360), r = E(r * 100), a = E(a * 100), s === 1 ? `hsv(${t}, ${r}%, ${a}%)` : `hsva(${t}, ${r}%, ${a}%, ${s})`;
}
function da(e) {
  let { h: t, s: r, v: a, a: s } = e;
  return t *= 360, { h: t, s: r, v: a, a: s };
}
Ne.shouldHandleInput = (e) => typeof e == "object" && ia(e) || At(e);
Ne.toRgb = (e) => typeof e == "object" && ct(e) || ct(At(e));
Ne.toRaw = (e) => da(Mt(e));
Ne.toString = (e) => ua(Mt(e));
const ee = f.registerFormat("name", {
  alias: ["toName"]
});
function ca(e) {
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[e[r]] = r);
  return t;
}
const Se = {
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
Se.transparent = "00000000";
const pa = ca(Se);
ee.shouldHandleInput = (e) => Se[e];
ee.toRgb = (e) => ee.parse(Se[e]).rgba;
ee.toRaw = (e) => e;
ee.toString = (e) => e.a === 0 ? "transparent" : be(e) && ee.wanted === "toName" ? !1 : be(e) && ee.wanted === "name" ? `#${ye(e)}` : be(e) ? ee.print(ee.options.alphaFormat, e) : pa[ye(e, !0)] || !1;
function Y(e, t) {
  return new f(e, t);
}
Y.equals = (e, t) => f.equals(e, t);
Y.registerFormat = (e, t = {}) => f.registerFormat(e, t);
Y.fromRatio = (e, t) => f.fromRatio(e, t);
Y.mix = (e, t, r) => f.mix(e, t, r);
Y.readability = (e, t) => f.readability(e, t);
Y.isReadable = (e, t, r) => f.isReadable(e, t, r);
Y.mostReadable = (e, t, r) => f.mostReadable(e, t, r);
Y.names = Se;
function al(e, t = "#fff", r = "#000") {
  let a = JSON.parse(JSON.stringify(e)), s = Object.keys(a), o = {};
  for (let l = 0; l < s.length; l++)
    if (typeof a[s[l]] == "string" || typeof a[s[l]] == "number") {
      const i = Y(a[s[l]], {});
      i.isValid() && (o[s[l]] = {
        backgroundColor: i.toHexString(!1),
        color: i.isDark() ? t : r
      });
    } else if (typeof a[s[l]] == "object") {
      const i = Object.keys(a[s[l]]), c = {};
      for (let u = 0; u < i.length; u++)
        if (typeof a[s[l]][i[u]] == "string") {
          const d = Y(a[s[l]][i[u]], !1);
          d.isValid() && (c[i[u]] = {
            backgroundColor: d.toHexString(!0),
            color: d.isDark() ? t : r
          });
        }
      o[s[l]] = c;
    }
  return o;
}
function sl(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ").trim();
}
function ol(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function ll(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function nl() {
  typeof window < "u" && document && (document.body.click(), document.body.dispatchEvent(new Event("click")));
}
function il(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, a = t < 0 ? 0 : t, s = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, o)).toFixed(a)) + " " + s[o];
}
function ge(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function ul(e, t = "/") {
  return [
    ge(e.getMonth() + 1),
    ge(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function Rt() {
  return {
    english: {
      long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    french: {
      long: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"]
    },
    spanish: {
      long: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
    }
  };
}
function dl(e, t = "long", r = "english") {
  return Rt()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function cl(e) {
  let t = parseInt(String(e), 10), r = Math.floor(
    parseInt(
      String(Number(t) / (24 * 3600))
    )
  );
  t = t % (24 * 3600);
  let a = Math.floor(
    parseInt(
      String(Number(t) / 3600)
    )
  );
  t %= 3600;
  let s = Math.floor(t / 60);
  t %= 60;
  let o = Math.floor(t), l = r < 10 ? "0" + r : r, i = a < 10 ? "0" + a : a, c = s < 10 ? "0" + s : s, u = o < 10 ? "0" + o : o, d = l === "00" ? "" : l + ":";
  return d += i === "00" ? "" : i + ":", d += c + ":" + u, d;
}
function pl(e) {
  return new Intl.NumberFormat().format(e);
}
function _(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Dt() {
  return "0123456789abcdef".split("");
}
function fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ba = function(t) {
  return ga(t) && !ha(t);
};
function ga(e) {
  return !!e && typeof e == "object";
}
function ha(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || ya(e);
}
var va = typeof Symbol == "function" && Symbol.for, ma = va ? Symbol.for("react.element") : 60103;
function ya(e) {
  return e.$$typeof === ma;
}
function xa(e) {
  return Array.isArray(e) ? [] : {};
}
function xe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ce(xa(e), e, t) : e;
}
function ka(e, t, r) {
  return e.concat(t).map(function(a) {
    return xe(a, r);
  });
}
function Sa(e, t) {
  if (!t.customMerge)
    return ce;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : ce;
}
function wa(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function pt(e) {
  return Object.keys(e).concat(wa(e));
}
function Et(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function Ca(e, t) {
  return Et(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function za(e, t, r) {
  var a = {};
  return r.isMergeableObject(e) && pt(e).forEach(function(s) {
    a[s] = xe(e[s], r);
  }), pt(t).forEach(function(s) {
    Ca(e, s) || (Et(e, s) && r.isMergeableObject(t[s]) ? a[s] = Sa(s, r)(e[s], t[s], r) : a[s] = xe(t[s], r));
  }), a;
}
function ce(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || ka, r.isMergeableObject = r.isMergeableObject || ba, r.cloneUnlessOtherwiseSpecified = xe;
  var a = Array.isArray(t), s = Array.isArray(e), o = a === s;
  return o ? a ? r.arrayMerge(e, t, r) : za(e, t, r) : xe(t, r);
}
ce.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(a, s) {
    return ce(a, s, r);
  }, {});
};
var Va = ce, $a = Va;
const Ta = /* @__PURE__ */ fa($a);
function fl(e) {
  return Object.keys(e).length > 0 ? Ta(n, e) : n;
}
function Oa() {
  const e = Dt(), t = 0, r = 15, a = e[_(t, r)] + e[_(t, r)], s = e[_(t, r)] + e[_(t, r)], o = e[_(t, r)] + e[_(t, r)];
  return "#" + a + s + o;
}
function bl(e = "#fff", t = "#000") {
  let r = { backgroundColor: "", color: "" }, a = Y(Oa(), {}), s = a.isDark();
  return r.backgroundColor = "#" + String(a.toHex(!1)), r.color = s ? e : t, r;
}
function gl() {
  const e = Dt(), t = 0, r = 15, a = e[_(t, r)], s = e[_(t, r)], o = e[_(t, r)];
  return "#" + a + s + o;
}
function hl(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = r.length;
  for (let s = 0; s < Number(e); s++)
    t += r.charAt(Math.floor(Math.random() * a));
  return t;
}
function vl(e) {
  let t = [...e];
  for (let r = t.length - 1; r > 0; r--) {
    let a = Math.floor(Math.random() * (r + 1)), s = t[r];
    t[r] = t[a], t[a] = s;
  }
  return t;
}
function ml(e, t = "-") {
  let r = e || "", a = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, a).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, a);
}
function yl(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function xl(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function kl(e, t = "short", r = "english", a = "AM", s = "PM") {
  var o = new Date(Number(e) * 1e3), l = Rt(), i = l[r][t], c = o.getFullYear(), u = i[o.getMonth()], d = o.getDate(), p = o.getHours(), v = o.getMinutes(), y = o.getSeconds(), k = p >= 12 ? s : a;
  return p = p % 12, p = p === 0 ? 12 : p, u + " " + ge(d) + ", " + c + " " + p + ":" + ge(v) + ":" + ge(y) + " " + k;
}
function Sl(e) {
  return e.filter((t, r, a) => a.indexOf(t) === r);
}
function Ge(e, t) {
  return typeof e === t && e !== null;
}
function wl(e) {
  return Ge(e, "string") ? !!(e.length === 10 && /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}$/.test(e)) : !1;
}
function Cl(e, t = 150) {
  return Ge(e, "string") ? !!(e.length >= 6 && e.length <= t && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) : !1;
}
function zl(e, t = 3) {
  if (Ge(e, "string")) {
    if (t !== 1 && t !== 2 && t !== 3)
      return !1;
    if (t === 1)
      return !!/^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{1})$/.test(e);
    if (t === 2)
      return !!/^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{2})$/.test(e);
    if (t === 3)
      return !!/^([0-2]?[0-3][:])?([0-5]?[0-9][:])?([0-5]?[0-9])([.][0-9]{3})$/.test(e);
  }
  return !1;
}
function Vl(e, t = 1, r = 100) {
  return Ge(e, "string") ? e.length >= t && e.length <= r : !1;
}
const La = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], $l = La, Fa = [
  "button",
  "submit",
  "reset"
], Ht = Fa, Pa = [
  "light",
  "dark"
], Ba = Pa, ja = [
  "normal",
  "italic",
  "oblique"
], Tl = ja, Ma = [
  "up",
  "down",
  "left",
  "right",
  ""
], Ol = Ma, Aa = [
  // HTML Main root element
  // 'html',
  // HTML Document metadata elements
  // 'base', 'head', 'link', 'meta',
  "style",
  "title",
  // HTML Sectioning root element
  // 'body',
  // HTML Content sectioning elements
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
  // HTML Text content elements
  // 'hr',
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
  // HTML Inline text semantic elements
  // 'br', 'wbr',
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
  // HTML Image and multimedia elements
  // 'area', 'img', 'track',
  "audio",
  "map",
  "video",
  // HTML Embedded content elements
  // 'embed', 'param', 'source',
  "iframe",
  "object",
  "picture",
  "portal",
  // HTML SVG and MathML elements
  "svg",
  "math",
  // HTML Scripting  elements
  // 'noscript', 'script',
  "canvas",
  // HTML Demarcating edits elements
  "del",
  "ins",
  // HTML Table content elements
  // 'col',
  "caption",
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  // HTML Forms elements
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
  // HTML Interactive elements
  "details",
  "dialog",
  "summary"
  // HTML Web Components elements
  // 'slot', 'template',
], Ra = Aa, Da = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], Ll = Da, Ea = [
  "xs",
  "sm",
  "1x",
  // '1x' is effectively size 'md' & icon size inherits font size
  "lg",
  "2x",
  "3x",
  "4x",
  "5x",
  "6x",
  "7x",
  "8x",
  "9x",
  "10x",
  void 0
  // need to add this or else TS will complain downstream
], Fl = Ea, Ha = [1, 2, 3, 4, 5, 6], Pl = Ha, Ia = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], Bl = Ia, Na = [
  // 'button', // (use VvButton)
  // 'checkbox', // (use VvCheckbox)
  "color",
  "date",
  "datetime-local",
  "email",
  // 'file', // (use TBD)
  // 'hidden',
  // 'image', // (use TBD)
  "month",
  "number",
  "password",
  // 'radio', // (use VvRadio)
  // 'range', // (use TBD)
  // 'reset', // (use VvButton)
  "search",
  // 'submit', // (use VvButton)
  "tel",
  "text",
  "time",
  "url"
  // 'week', // (use TBD)
], Ga = Na, qa = [
  "ul",
  "ol"
], Ua = qa, Qa = [
  "underline",
  "overline",
  "none"
], jl = Qa, Wa = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], Ml = Wa, Ja = T({
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
    debug: {
      type: Boolean,
      default: n.defaults.VvAnchor.debug
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
    },
    textSize: {
      type: String,
      default: n.defaults.VvAnchor.textSize
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var s, o, l, i, c, u, d, p, v, y, k, z, A, S, j, g, x, w;
      let a = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((s = t == null ? void 0 : t.buttons) != null && s.blockBase() && a.push(t.buttons.blockBase()), e.buttonSize !== "" && ((l = (o = t == null ? void 0 : t.buttons) == null ? void 0 : o.blockSizes) != null && l[e.buttonSize]) && a.push(String(t.buttons.blockSizes[e.buttonSize]))) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && a.push(t.buttons.fabBase()), e.buttonSize !== "" && ((u = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) != null && u[e.buttonSize]) && a.push(String(t.buttons.fabSizes[e.buttonSize]))) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && a.push(t.buttons.base()), e.buttonSize !== "" && ((v = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) != null && v[e.buttonSize]) && a.push(String(t.buttons.sizes[e.buttonSize]))), (z = (k = (y = t == null ? void 0 : t.buttons) == null ? void 0 : y.palettes) == null ? void 0 : k[e.palette]) != null && z[e.color] && a.push(String(t.buttons.palettes[e.palette][e.color]))) : ((A = t == null ? void 0 : t.anchors) != null && A.base() && a.push(t.anchors.base()), e.textSize !== "" && ((j = (S = t == null ? void 0 : t.anchors) == null ? void 0 : S.sizes) != null && j[e.textSize]) && a.push(String(t.anchors.sizes[e.textSize])), (w = (x = (g = t == null ? void 0 : t.anchors) == null ? void 0 : g.palettes) == null ? void 0 : x[e.palette]) != null && w[e.color] && a.push(String(t.anchors.palettes[e.palette][e.color]))), a.join(" ").trim();
    }) };
  }
}), M = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of t)
    r[a] = s;
  return r;
}, Ya = ["href", "data-vv-anchor-generated-classes", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"], Za = ["href", "data-vv-anchor-generated-classes", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"];
function Xa(e, t, r, a, s, o) {
  return e.external ? (m(), L("a", {
    key: 0,
    href: e.href,
    class: b(e.classes),
    target: "_blank",
    rel: "noopener noreferrer",
    "data-vv-anchor-generated-classes": e.debug ? e.classes : null,
    "data-vv-anchor-prop-button": e.debug ? e.button : null,
    "data-vv-anchor-prop-button-block": e.debug ? e.buttonBlock : null,
    "data-vv-anchor-prop-button-fab": e.debug ? e.buttonFab : null,
    "data-vv-anchor-prop-button-size": e.debug ? e.buttonSize : null,
    "data-vv-anchor-prop-color": e.debug ? e.color : null,
    "data-vv-anchor-prop-external": e.debug ? e.external : null,
    "data-vv-anchor-prop-href": e.debug ? e.href : null,
    "data-vv-anchor-prop-palette": e.debug ? e.palette : null,
    "data-vv-anchor-prop-text-size": e.debug ? e.textSize : null
  }, [
    I(e.$slots, "default")
  ], 10, Ya)) : (m(), L("a", {
    key: 1,
    href: e.href,
    class: b(e.classes),
    "data-vv-anchor-generated-classes": e.debug ? e.classes : null,
    "data-vv-anchor-prop-button": e.debug ? e.button : null,
    "data-vv-anchor-prop-button-block": e.debug ? e.buttonBlock : null,
    "data-vv-anchor-prop-button-fab": e.debug ? e.buttonFab : null,
    "data-vv-anchor-prop-button-size": e.debug ? e.buttonSize : null,
    "data-vv-anchor-prop-color": e.debug ? e.color : null,
    "data-vv-anchor-prop-external": e.debug ? e.external : null,
    "data-vv-anchor-prop-href": e.debug ? e.href : null,
    "data-vv-anchor-prop-palette": e.debug ? e.palette : null,
    "data-vv-anchor-prop-text-size": e.debug ? e.textSize : null
  }, [
    I(e.$slots, "default")
  ], 10, Za));
}
const Al = /* @__PURE__ */ M(Ja, [["render", Xa]]), Ka = T({
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
    debug: {
      type: Boolean,
      default: n.defaults.VvButton.debug
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
      validator: (e) => Ht.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var s, o, l, i, c, u, d, p, v, y, k, z;
      let a = [];
      return e.block === !0 && e.fab === !1 ? ((s = t == null ? void 0 : t.buttons) != null && s.blockBase() && a.push(t.buttons.blockBase()), e.size !== "" && ((l = (o = t == null ? void 0 : t.buttons) == null ? void 0 : o.blockSizes) != null && l[e.size]) && a.push(String(t.buttons.blockSizes[e.size]))) : e.fab === !0 && e.block === !1 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && a.push(t.buttons.fabBase()), e.size !== "" && ((u = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) != null && u[e.size]) && a.push(String(t.buttons.fabSizes[e.size]))) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && a.push(t.buttons.base()), e.size !== "" && ((v = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) != null && v[e.size]) && a.push(String(t.buttons.sizes[e.size]))), (z = (k = (y = t == null ? void 0 : t.buttons) == null ? void 0 : y.palettes) == null ? void 0 : k[e.palette]) != null && z[e.color] && a.push(String(t.buttons.palettes[e.palette][e.color])), a.join(" ").trim();
    }) };
  }
}), _a = ["type", "data-vv-button-generated-classes", "data-vv-button-prop-block", "data-vv-button-prop-color", "data-vv-button-prop-fab", "data-vv-button-prop-palette", "data-vv-button-prop-size", "data-vv-button-prop-type"];
function es(e, t, r, a, s, o) {
  return m(), L("button", {
    class: b(e.classes),
    type: e.type,
    "data-vv-button-generated-classes": e.debug ? e.classes : null,
    "data-vv-button-prop-block": e.debug ? e.block : null,
    "data-vv-button-prop-color": e.debug ? e.color : null,
    "data-vv-button-prop-fab": e.debug ? e.fab : null,
    "data-vv-button-prop-palette": e.debug ? e.palette : null,
    "data-vv-button-prop-size": e.debug ? e.size : null,
    "data-vv-button-prop-type": e.debug ? e.type : null
  }, [
    I(e.$slots, "default")
  ], 10, _a);
}
const ts = /* @__PURE__ */ M(Ka, [["render", es]]), rs = T({
  name: "VvColorModeButton",
  components: {
    VvButton: ts
  },
  props: {
    color: {
      type: String,
      default: n.defaults.VvColorModeButton.color
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvColorModeButton.debug
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
    mode: {
      type: String,
      default: n.defaults.VvColorModeButton.mode,
      validator: (e) => Ba.includes(e)
    },
    palette: {
      type: String,
      default: n.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: n.defaults.VvColorModeButton.size
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
      validator: (e) => Ht.includes(e)
    }
  },
  setup(e) {
    const t = F(e.mode), r = h(() => t.value === "dark" ? "sun" : "moon"), a = h(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return he(() => {
      typeof window < "u" && document && (document.documentElement.classList.add(
        e.groundLight,
        e.groundDark,
        e.textLight,
        e.textDark
      ), document.body.classList.add(
        e.textLight,
        e.textDark
      ), t.value === "light" ? (document.documentElement.classList.remove("dark"), document.documentElement.style.backgroundColor = e.groundLightHex) : t.value === "dark" && (document.documentElement.classList.add("dark"), document.documentElement.style.backgroundColor = e.groundDarkHex));
    }), { mode: t, icon: r, title: a };
  },
  methods: {
    toggleColorMode() {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), as = {
  key: 0,
  class: "h-5 w-5",
  stroke: "currentColor",
  fill: "none",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, ss = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), os = [
  ss
], ls = {
  key: 1,
  class: "h-5 w-5",
  stroke: "currentColor",
  fill: "none",
  "stroke-width": "2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ns = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), is = [
  ns
];
function us(e, t, r, a, s, o) {
  const l = oe("VvButton");
  return m(), D(l, {
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode()),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    size: e.size,
    title: e.title,
    type: e.type,
    "data-vv-color-mode-button-prop-color": e.debug ? e.color : null,
    "data-vv-color-mode-button-prop-ground-dark": e.debug ? e.groundDark : null,
    "data-vv-color-mode-button-prop-ground-dark-hex": e.debug ? e.groundDarkHex : null,
    "data-vv-color-mode-button-prop-ground-light": e.debug ? e.groundLight : null,
    "data-vv-color-mode-button-prop-ground-light-hex": e.debug ? e.groundLightHex : null,
    "data-vv-color-mode-button-prop-mode": e.debug ? e.mode : null,
    "data-vv-color-mode-button-prop-palette": e.debug ? e.palette : null,
    "data-vv-color-mode-button-prop-size": e.debug ? e.size : null,
    "data-vv-color-mode-button-prop-text-dark": e.debug ? e.textDark : null,
    "data-vv-color-mode-button-prop-text-light": e.debug ? e.textLight : null,
    "data-vv-color-mode-button-prop-title-dark": e.debug ? e.titleDark : null,
    "data-vv-color-mode-button-prop-title-light": e.debug ? e.titleLight : null,
    "data-vv-color-mode-button-prop-type": e.debug ? e.type : null
  }, {
    default: P(() => [
      e.icon === "moon" ? (m(), L("svg", as, os)) : q("", !0),
      e.icon === "sun" ? (m(), L("svg", ls, is)) : q("", !0)
    ]),
    _: 1
  }, 8, ["color", "palette", "size", "title", "type", "data-vv-color-mode-button-prop-color", "data-vv-color-mode-button-prop-ground-dark", "data-vv-color-mode-button-prop-ground-dark-hex", "data-vv-color-mode-button-prop-ground-light", "data-vv-color-mode-button-prop-ground-light-hex", "data-vv-color-mode-button-prop-mode", "data-vv-color-mode-button-prop-palette", "data-vv-color-mode-button-prop-size", "data-vv-color-mode-button-prop-text-dark", "data-vv-color-mode-button-prop-text-light", "data-vv-color-mode-button-prop-title-dark", "data-vv-color-mode-button-prop-title-light", "data-vv-color-mode-button-prop-type"]);
}
const Rl = /* @__PURE__ */ M(rs, [["render", us]]), ds = T({
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
    debug: {
      type: Boolean,
      default: n.defaults.VvEl.debug
    },
    groundPalette: {
      type: String,
      default: n.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: n.defaults.VvEl.groundColor
    },
    size: {
      type: String,
      default: n.defaults.VvEl.size
    },
    tag: {
      type: String,
      default: n.defaults.VvEl.tag,
      validator: (e) => Ra.includes(e)
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
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var s, o, l, i, c, u, d, p, v, y, k;
      let a = [];
      return (o = (s = t == null ? void 0 : t.text) == null ? void 0 : s.sizes) != null && o[e.size] && a.push(String(t.text.sizes[e.size])), (c = (i = (l = t == null ? void 0 : t.borders) == null ? void 0 : l.palettes) == null ? void 0 : i[e.borderPalette]) != null && c[e.borderColor] && a.push(String(t.borders.palettes[e.borderPalette][e.borderColor])), (p = (d = (u = t == null ? void 0 : t.grounds) == null ? void 0 : u.palettes) == null ? void 0 : d[e.groundPalette]) != null && p[e.groundColor] && a.push(String(t.grounds.palettes[e.groundPalette][e.groundColor])), (k = (y = (v = t == null ? void 0 : t.text) == null ? void 0 : v.palettes) == null ? void 0 : y[e.textPalette]) != null && k[e.textColor] && a.push(String(t.text.palettes[e.textPalette][e.textColor])), a.join(" ").trim();
    }) };
  }
});
function cs(e, t, r, a, s, o) {
  return m(), D(wt(e.tag), {
    class: b(e.classes),
    "data-vv-el-generated-classes": e.debug ? e.classes : null,
    "data-vv-el-prop-border-palette": e.debug ? e.borderPalette : null,
    "data-vv-el-prop-border-color": e.debug ? e.borderColor : null,
    "data-vv-el-prop-ground-palette": e.debug ? e.groundPalette : null,
    "data-vv-el-prop-ground-color": e.debug ? e.groundColor : null,
    "data-vv-el-prop-size": e.debug ? e.size : null,
    "data-vv-el-prop-tag": e.debug ? e.tag : null,
    "data-vv-el-prop-text-palette": e.debug ? e.textPalette : null,
    "data-vv-el-prop-text-color": e.debug ? e.textColor : null
  }, {
    default: P(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-vv-el-generated-classes", "data-vv-el-prop-border-palette", "data-vv-el-prop-border-color", "data-vv-el-prop-ground-palette", "data-vv-el-prop-ground-color", "data-vv-el-prop-size", "data-vv-el-prop-tag", "data-vv-el-prop-text-palette", "data-vv-el-prop-text-color"]);
}
const It = /* @__PURE__ */ M(ds, [["render", cs]]), ps = T({
  components: { VvEl: It },
  props: {
    debug: {
      type: Boolean,
      default: n.defaults.VvFormGroup.debug
    },
    displayError: {
      type: Boolean,
      default: n.defaults.VvFormGroup.displayError
    },
    displayHelp: {
      type: Boolean,
      default: n.defaults.VvFormGroup.displayHelp
    },
    displaySuccess: {
      type: Boolean,
      default: n.defaults.VvFormGroup.displaySuccess
    },
    errorClasses: {
      type: String,
      default: n.defaults.VvFormGroup.errorClasses
    },
    errorText: {
      type: String,
      default: n.defaults.VvFormGroup.errorText
    },
    errorTextColor: {
      type: String,
      default: n.defaults.VvFormGroup.errorTextColor
    },
    errorTextPalette: {
      type: String,
      default: n.defaults.VvFormGroup.errorTextPalette
    },
    errorTextSize: {
      type: String,
      default: n.defaults.VvFormGroup.errorTextSize
    },
    helpClasses: {
      type: String,
      default: n.defaults.VvFormGroup.helpClasses
    },
    helpText: {
      type: String,
      default: n.defaults.VvFormGroup.helpText
    },
    helpTextColor: {
      type: String,
      default: n.defaults.VvFormGroup.helpTextColor
    },
    helpTextPalette: {
      type: String,
      default: n.defaults.VvFormGroup.helpTextPalette
    },
    helpTextSize: {
      type: String,
      default: n.defaults.VvFormGroup.helpTextSize
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
      default: n.defaults.VvFormGroup.labelClasses
    },
    labelTextColor: {
      type: String,
      default: n.defaults.VvFormGroup.labelTextColor
    },
    labelTextPalette: {
      type: String,
      default: n.defaults.VvFormGroup.labelTextPalette
    },
    labelTextSize: {
      type: String,
      default: n.defaults.VvFormGroup.labelTextSize
    },
    slotParentClasses: {
      type: String,
      default: n.defaults.VvFormGroup.slotParentClasses
    },
    successClasses: {
      type: String,
      default: n.defaults.VvFormGroup.successClasses
    },
    successText: {
      type: String,
      default: n.defaults.VvFormGroup.successText
    },
    successTextColor: {
      type: String,
      default: n.defaults.VvFormGroup.successTextColor
    },
    successTextPalette: {
      type: String,
      default: n.defaults.VvFormGroup.successTextPalette
    },
    successTextSize: {
      type: String,
      default: n.defaults.VvFormGroup.successTextSize
    },
    wrapperClasses: {
      type: String,
      default: n.defaults.VvFormGroup.wrapperClasses
    }
  }
}), fs = ["data-vv-form-group-prop-wrapper-classes"], bs = ["data-vv-form-group-prop-slot-parent-classes"], gs = { class: "invisible" };
function hs(e, t, r, a, s, o) {
  const l = oe("VvEl");
  return m(), L("div", {
    class: b(e.wrapperClasses),
    "data-vv-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    $e(l, {
      tag: "label",
      for: e.labelFor,
      class: b(e.labelClasses),
      "text-color": e.labelTextColor,
      "text-palette": e.labelTextPalette,
      size: e.labelTextSize,
      "data-vv-form-group-prop-label-classes": e.debug ? e.labelClasses : null,
      "data-vv-form-group-prop-label-text-color": e.debug ? e.labelTextColor : null,
      "data-vv-form-group-prop-label-text-palette": e.debug ? e.labelTextPalette : null,
      "data-vv-form-group-prop-label-text-size": e.debug ? e.labelTextSize : null
    }, {
      default: P(() => [
        te(G(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-form-group-prop-label-classes", "data-vv-form-group-prop-label-text-color", "data-vv-form-group-prop-label-text-palette", "data-vv-form-group-prop-label-text-size"]),
    C("div", {
      class: b(e.slotParentClasses),
      "data-vv-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      I(e.$slots, "default")
    ], 10, bs),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (m(), D(l, {
      key: 0,
      tag: "div",
      class: b(e.helpClasses),
      size: e.helpTextSize,
      "data-vv-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
      "data-vv-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
    }, {
      default: P(() => [
        C("span", gs, " " + G(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-size"])) : q("", !0),
    e.displayHelp ? (m(), D(l, {
      key: 1,
      tag: "div",
      class: b(e.helpClasses),
      "text-color": e.helpTextColor,
      "text-palette": e.helpTextPalette,
      size: e.helpTextSize,
      "data-vv-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
      "data-vv-form-group-prop-help-text-color": e.debug ? e.helpTextColor : null,
      "data-vv-form-group-prop-help-text-palette": e.debug ? e.helpTextPalette : null,
      "data-vv-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
    }, {
      default: P(() => [
        te(G(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-color", "data-vv-form-group-prop-help-text-palette", "data-vv-form-group-prop-help-text-size"])) : q("", !0),
    e.displaySuccess ? (m(), D(l, {
      key: 2,
      tag: "div",
      class: b(e.successClasses),
      "text-color": e.successTextColor,
      "text-palette": e.successTextPalette,
      size: e.successTextSize,
      "data-vv-form-group-prop-success-classes": e.debug ? e.successClasses : null,
      "data-vv-form-group-prop-success-text-color": e.debug ? e.successTextColor : null,
      "data-vv-form-group-prop-success-text-palette": e.debug ? e.successTextPalette : null,
      "data-vv-form-group-prop-success-text-size": e.debug ? e.successTextSize : null
    }, {
      default: P(() => [
        te(G(e.successText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-success-classes", "data-vv-form-group-prop-success-text-color", "data-vv-form-group-prop-success-text-palette", "data-vv-form-group-prop-success-text-size"])) : q("", !0),
    e.displayError === !0 ? (m(), D(l, {
      key: 3,
      tag: "div",
      class: b(e.errorClasses),
      "text-color": e.errorTextColor,
      "text-palette": e.errorTextPalette,
      size: e.errorTextSize,
      "data-vv-form-group-prop-error-classes": e.debug ? e.errorClasses : null,
      "data-vv-form-group-prop-error-text-color": e.debug ? e.errorTextColor : null,
      "data-vv-form-group-prop-error-text-palette": e.debug ? e.errorTextPalette : null,
      "data-vv-form-group-prop-error-text-size": e.debug ? e.errorTextSize : null
    }, {
      default: P(() => [
        te(G(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-error-classes", "data-vv-form-group-prop-error-text-color", "data-vv-form-group-prop-error-text-palette", "data-vv-form-group-prop-error-text-size"])) : q("", !0)
  ], 10, fs);
}
const Dl = /* @__PURE__ */ M(ps, [["render", hs]]), vs = T({
  components: { VvEl: It },
  props: {
    bottomSlotClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.bottomSlotClasses
    },
    bottomWrapperClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.bottomWrapperClasses
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvQuadFormGroup.debug
    },
    displayError: {
      type: Boolean,
      default: n.defaults.VvQuadFormGroup.displayError
    },
    displayHelp: {
      type: Boolean,
      default: n.defaults.VvQuadFormGroup.displayHelp
    },
    displaySuccess: {
      type: Boolean,
      default: n.defaults.VvQuadFormGroup.displaySuccess
    },
    errorClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.errorClasses
    },
    errorText: {
      type: String,
      default: n.defaults.VvQuadFormGroup.errorText
    },
    errorTextColor: {
      type: String,
      default: n.defaults.VvQuadFormGroup.errorTextColor
    },
    errorTextPalette: {
      type: String,
      default: n.defaults.VvQuadFormGroup.errorTextPalette
    },
    errorTextSize: {
      type: String,
      default: n.defaults.VvQuadFormGroup.errorTextSize
    },
    helpClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.helpClasses
    },
    helpText: {
      type: String,
      default: n.defaults.VvQuadFormGroup.helpText
    },
    helpTextColor: {
      type: String,
      default: n.defaults.VvQuadFormGroup.helpTextColor
    },
    helpTextPalette: {
      type: String,
      default: n.defaults.VvQuadFormGroup.helpTextPalette
    },
    helpTextSize: {
      type: String,
      default: n.defaults.VvQuadFormGroup.helpTextSize
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
      default: n.defaults.VvQuadFormGroup.labelClasses
    },
    labelTextColor: {
      type: String,
      default: n.defaults.VvQuadFormGroup.labelTextColor
    },
    labelTextPalette: {
      type: String,
      default: n.defaults.VvQuadFormGroup.labelTextPalette
    },
    labelTextSize: {
      type: String,
      default: n.defaults.VvQuadFormGroup.labelTextSize
    },
    slotParentClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.slotParentClasses
    },
    successClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.successClasses
    },
    successText: {
      type: String,
      default: n.defaults.VvQuadFormGroup.successText
    },
    successTextColor: {
      type: String,
      default: n.defaults.VvQuadFormGroup.successTextColor
    },
    successTextPalette: {
      type: String,
      default: n.defaults.VvQuadFormGroup.successTextPalette
    },
    successTextSize: {
      type: String,
      default: n.defaults.VvQuadFormGroup.successTextSize
    },
    textParentClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.textParentClasses
    },
    topSlotClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.topSlotClasses
    },
    topWrapperClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.topWrapperClasses
    },
    wrapperClasses: {
      type: String,
      default: n.defaults.VvQuadFormGroup.wrapperClasses
    }
  }
}), ms = ["data-vv-quad-form-group-prop-wrapper-classes"], ys = ["data-vv-quad-form-group-prop-top-wrapper-classes"], xs = ["data-vv-quad-form-group-prop-top-slot-classes"], ks = ["data-vv-quad-form-group-prop-slot-parent-classes"], Ss = ["data-vv-quad-form-group-prop-bottom-wrapper-classes"], ws = ["data-vv-quad-form-group-prop-text-parent-classes"], Cs = { class: "invisible" }, zs = ["data-vv-quad-form-group-prop-bottom-slot-classes"];
function Vs(e, t, r, a, s, o) {
  const l = oe("VvEl");
  return m(), L("div", {
    class: b(e.wrapperClasses),
    "data-vv-quad-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    C("div", {
      class: b(e.topWrapperClasses),
      "data-vv-quad-form-group-prop-top-wrapper-classes": e.debug ? e.topWrapperClasses : null
    }, [
      $e(l, {
        tag: "label",
        for: e.labelFor,
        class: b(e.labelClasses),
        "text-color": e.labelTextColor,
        "text-palette": e.labelTextPalette,
        size: e.labelTextSize,
        "data-vv-quad-form-group-prop-label-classes": e.debug ? e.labelClasses : null,
        "data-vv-quad-form-group-prop-label-text-color": e.debug ? e.labelTextColor : null,
        "data-vv-quad-form-group-prop-label-text-palette": e.debug ? e.labelTextPalette : null,
        "data-vv-quad-form-group-prop-label-text-size": e.debug ? e.labelTextSize : null
      }, {
        default: P(() => [
          te(G(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-label-classes", "data-vv-quad-form-group-prop-label-text-color", "data-vv-quad-form-group-prop-label-text-palette", "data-vv-quad-form-group-prop-label-text-size"]),
      C("div", {
        class: b(e.topSlotClasses),
        "data-vv-quad-form-group-prop-top-slot-classes": e.debug ? e.topSlotClasses : null
      }, [
        I(e.$slots, "top")
      ], 10, xs)
    ], 10, ys),
    C("div", {
      class: b(e.slotParentClasses),
      "data-vv-quad-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      I(e.$slots, "default")
    ], 10, ks),
    C("div", {
      class: b(e.bottomWrapperClasses),
      "data-vv-quad-form-group-prop-bottom-wrapper-classes": e.debug ? e.bottomWrapperClasses : null
    }, [
      C("div", {
        class: b(e.textParentClasses),
        "data-vv-quad-form-group-prop-text-parent-classes": e.debug ? e.textParentClasses : null
      }, [
        !e.displayError && !e.displayHelp && !e.displaySuccess ? (m(), D(l, {
          key: 0,
          tag: "div",
          class: b(e.helpClasses),
          size: e.helpTextSize,
          "data-vv-quad-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
          "data-vv-quad-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
        }, {
          default: P(() => [
            C("span", Cs, " " + G(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-size"])) : q("", !0),
        e.displayHelp ? (m(), D(l, {
          key: 1,
          tag: "div",
          class: b(e.helpClasses),
          "text-color": e.helpTextColor,
          "text-palette": e.helpTextPalette,
          size: e.helpTextSize,
          "data-vv-quad-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
          "data-vv-quad-form-group-prop-help-text-color": e.debug ? e.helpTextColor : null,
          "data-vv-quad-form-group-prop-help-text-palette": e.debug ? e.helpTextPalette : null,
          "data-vv-quad-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
        }, {
          default: P(() => [
            te(G(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-color", "data-vv-quad-form-group-prop-help-text-palette", "data-vv-quad-form-group-prop-help-text-size"])) : q("", !0),
        e.displaySuccess ? (m(), D(l, {
          key: 2,
          tag: "div",
          class: b(e.successClasses),
          "text-color": e.successTextColor,
          "text-palette": e.successTextPalette,
          size: e.successTextSize,
          "data-vv-quad-form-group-prop-success-classes": e.debug ? e.successClasses : null,
          "data-vv-quad-form-group-prop-success-text-color": e.debug ? e.successTextColor : null,
          "data-vv-quad-form-group-prop-success-text-palette": e.debug ? e.successTextPalette : null,
          "data-vv-quad-form-group-prop-success-text-size": e.debug ? e.successTextSize : null
        }, {
          default: P(() => [
            te(G(e.successText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-success-classes", "data-vv-quad-form-group-prop-success-text-color", "data-vv-quad-form-group-prop-success-text-palette", "data-vv-quad-form-group-prop-success-text-size"])) : q("", !0),
        e.displayError === !0 ? (m(), D(l, {
          key: 3,
          tag: "div",
          class: b(e.errorClasses),
          "text-color": e.errorTextColor,
          "text-palette": e.errorTextPalette,
          size: e.errorTextSize,
          "data-vv-quad-form-group-prop-error-classes": e.debug ? e.errorClasses : null,
          "data-vv-quad-form-group-prop-error-text-color": e.debug ? e.errorTextColor : null,
          "data-vv-quad-form-group-prop-error-text-palette": e.debug ? e.errorTextPalette : null,
          "data-vv-quad-form-group-prop-error-text-size": e.debug ? e.errorTextSize : null
        }, {
          default: P(() => [
            te(G(e.errorText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-error-classes", "data-vv-quad-form-group-prop-error-text-color", "data-vv-quad-form-group-prop-error-text-palette", "data-vv-quad-form-group-prop-error-text-size"])) : q("", !0)
      ], 10, ws),
      C("div", {
        class: b(e.bottomSlotClasses),
        "data-vv-quad-form-group-prop-bottom-slot-classes": e.debug ? e.bottomSlotClasses : null
      }, [
        I(e.$slots, "bottom")
      ], 10, zs)
    ], 10, Ss)
  ], 10, ms);
}
const El = /* @__PURE__ */ M(vs, [["render", Vs]]), tt = T({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    checked: {
      type: Boolean,
      default: n.defaults.VvCheckbox.checked
    },
    color: {
      type: String,
      default: n.defaults.VvCheckbox.color
    },
    darkCheckHex: {
      type: String,
      default: n.defaults.VvCheckbox.darkCheckHex
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvCheckbox.debug
    },
    lightCheckHex: {
      type: String,
      default: n.defaults.VvCheckbox.lightCheckHex
    },
    palette: {
      type: String,
      default: n.defaults.VvCheckbox.palette
    },
    size: {
      type: String,
      default: n.defaults.VvCheckbox.size
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    let r = h(() => {
      var c, u, d, p, v, y;
      let i = [];
      return (c = t == null ? void 0 : t.checkboxes) != null && c.base() && i.push(t.checkboxes.base()), e.size !== "" && ((d = (u = t == null ? void 0 : t.checkboxes) == null ? void 0 : u.sizes) != null && d[e.size]) && i.push(String(t.checkboxes.sizes[e.size])), (y = (v = (p = t == null ? void 0 : t.checkboxes) == null ? void 0 : p.palettes) == null ? void 0 : v[e.palette]) != null && y[e.color] && i.push(String(t.checkboxes.palettes[e.palette][e.color])), i.join(" ").trim();
    });
    function a(i) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16'  fill='%23",
        i,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let s = h(() => a(e.darkCheckHex.replace(/#/g, ""))), o = h(() => a(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: r,
      darkCheckCssUrl: s,
      handleCheckboxChange: (i) => i.target.checked === !0,
      lightCheckCssUrl: o
    };
  }
}), ft = () => {
  Ct((e) => ({
    be360c64: e.lightCheckCssUrl,
    "788d630e": e.darkCheckCssUrl
  }));
}, bt = tt.setup;
tt.setup = bt ? (e, t) => (ft(), bt(e, t)) : ft;
const $s = tt;
const Ts = ["checked", "data-test", "data-vv-checkbox-generated-classes", "data-vv-checkbox-prop-checked", "data-vv-checkbox-prop-color", "data-vv-checkbox-prop-dark-check-hex", "data-vv-checkbox-prop-light-check-hex", "data-vv-checkbox-prop-palette", "data-vv-checkbox-prop-size"];
function Os(e, t, r, a, s, o) {
  return m(), L("input", {
    type: "checkbox",
    class: b(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleCheckboxChange(l))),
    "data-test": e.darkCheckCssUrl + e.lightCheckCssUrl,
    "data-vv-checkbox-generated-classes": e.debug ? e.classes : null,
    "data-vv-checkbox-prop-checked": e.debug ? e.checked : null,
    "data-vv-checkbox-prop-color": e.debug ? e.color : null,
    "data-vv-checkbox-prop-dark-check-hex": e.debug ? e.darkCheckHex : null,
    "data-vv-checkbox-prop-light-check-hex": e.debug ? e.lightCheckHex : null,
    "data-vv-checkbox-prop-palette": e.debug ? e.palette : null,
    "data-vv-checkbox-prop-size": e.debug ? e.size : null
  }, null, 42, Ts);
}
const Hl = /* @__PURE__ */ M($s, [["render", Os], ["__scopeId", "data-v-2c56b192"]]), Ls = T({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvInput.color
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvInput.debug
    },
    modelValue: {
      type: String,
      default: ""
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
      validator: (e) => Ga.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var o, l, i, c, u, d;
      let s = [];
      return (o = t == null ? void 0 : t.inputs) != null && o.base() && s.push(t.inputs.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.inputs) == null ? void 0 : l.sizes) != null && i[e.size]) && s.push(String(t.inputs.sizes[e.size])), (d = (u = (c = t == null ? void 0 : t.inputs) == null ? void 0 : c.palettes) == null ? void 0 : u[String(e.palette)]) != null && d[e.color] && s.push(String(t.inputs.palettes[String(e.palette)][e.color])), s.join(" ").trim();
    }), handleInputChange: (s) => s.target.value };
  }
}), Fs = ["type", "value", "data-vv-input-generated-classes", "data-vv-input-prop-color", "data-vv-input-prop-model-value", "data-vv-input-prop-palette", "data-vv-input-prop-size", "data-vv-input-prop-type"];
function Ps(e, t, r, a, s, o) {
  return m(), L("input", {
    type: e.type,
    class: b(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleInputChange(l))),
    "data-vv-input-generated-classes": e.debug ? e.classes : null,
    "data-vv-input-prop-color": e.debug ? e.color : null,
    "data-vv-input-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-input-prop-palette": e.debug ? e.palette : null,
    "data-vv-input-prop-size": e.debug ? e.size : null,
    "data-vv-input-prop-type": e.debug ? e.type : null
  }, null, 42, Fs);
}
const Il = /* @__PURE__ */ M(Ls, [["render", Ps]]), rt = T({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    checked: {
      type: Boolean,
      default: n.defaults.VvRadio.checked
    },
    color: {
      type: String,
      default: n.defaults.VvRadio.color
    },
    darkRadioHex: {
      type: String,
      default: n.defaults.VvRadio.darkRadioHex
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvRadio.debug
    },
    lightRadioHex: {
      type: String,
      default: n.defaults.VvRadio.lightRadioHex
    },
    palette: {
      type: String,
      default: n.defaults.VvRadio.palette
    },
    size: {
      type: String,
      default: n.defaults.VvRadio.size
    },
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n, r = F(e.checked);
    let a = h(() => {
      var u, d, p, v, y, k;
      let c = [];
      return (u = t == null ? void 0 : t.radios) != null && u.base() && c.push(t.radios.base()), e.size !== "" && ((p = (d = t == null ? void 0 : t.radios) == null ? void 0 : d.sizes) != null && p[e.size]) && c.push(String(t.radios.sizes[e.size])), (k = (y = (v = t == null ? void 0 : t.radios) == null ? void 0 : v.palettes) == null ? void 0 : y[e.palette]) != null && k[e.color] && c.push(String(t.radios.palettes[e.palette][e.color])), c.join(" ").trim();
    });
    function s(c) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16' fill='%23",
        c,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let o = h(() => s(e.darkRadioHex.replace(/#/g, ""))), l = h(() => s(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: a,
      darkRadioCssUrl: o,
      handleRadioChange: (c) => {
        const u = c.target;
        return r.value = !1, u.checked === !0 && (r.value = !0), r.value;
      },
      lightRadioCssUrl: l
    };
  }
}), gt = () => {
  Ct((e) => ({
    "59720f6b": e.lightRadioCssUrl,
    "92bb3cd2": e.darkRadioCssUrl
  }));
}, ht = rt.setup;
rt.setup = ht ? (e, t) => (gt(), ht(e, t)) : gt;
const Bs = rt;
const js = ["value", "checked", "data-test", "data-vv-radio-generated-classes", "data-vv-radio-prop-checked", "data-vv-radio-prop-color", "data-vv-radio-prop-dark-radio-hex", "data-vv-radio-prop-light-radio-hex", "data-vv-radio-prop-palette", "data-vv-radio-prop-size", "data-vv-radio-prop-value"];
function Ms(e, t, r, a, s, o) {
  return m(), L("input", {
    type: "radio",
    class: b(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleRadioChange(l))),
    "data-test": e.darkRadioCssUrl + e.lightRadioCssUrl,
    "data-vv-radio-generated-classes": e.debug ? e.classes : null,
    "data-vv-radio-prop-checked": e.debug ? e.checked : null,
    "data-vv-radio-prop-color": e.debug ? e.color : null,
    "data-vv-radio-prop-dark-radio-hex": e.debug ? e.darkRadioHex : null,
    "data-vv-radio-prop-light-radio-hex": e.debug ? e.lightRadioHex : null,
    "data-vv-radio-prop-palette": e.debug ? e.palette : null,
    "data-vv-radio-prop-size": e.debug ? e.size : null,
    "data-vv-radio-prop-value": e.debug ? e.value : null
  }, null, 42, js);
}
const Nl = /* @__PURE__ */ M(Bs, [["render", Ms], ["__scopeId", "data-v-2fefc4ec"]]), As = T({
  name: "VvList",
  props: {
    debug: {
      type: Boolean,
      default: n.defaults.VvList.debug
    },
    listStyleTypeClass: {
      type: String,
      default: n.defaults.VvList.listStyleTypeClass
    },
    markerColor: {
      type: String,
      default: n.defaults.VvList.markerColor
    },
    markerPalette: {
      type: String,
      default: n.defaults.VvList.markerPalette
    },
    size: {
      type: String,
      default: n.defaults.VvList.size
    },
    tag: {
      type: String,
      default: n.defaults.VvList.tag,
      validator: (e) => Ua.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var s, o, l, i, c;
      let a = [];
      return t != null && t.text.base() && a.push(t == null ? void 0 : t.text.base()), (o = (s = t == null ? void 0 : t.lists) == null ? void 0 : s.sizes) != null && o[e.size] && a.push(String(t.lists.sizes[e.size])), (c = (i = (l = t == null ? void 0 : t.lists) == null ? void 0 : l.palettes) == null ? void 0 : i[e.markerPalette]) != null && c[e.markerColor] && a.push(String(t.lists.palettes[e.markerPalette][e.markerColor])), a.join(" ").trim();
    }) };
  }
});
function Rs(e, t, r, a, s, o) {
  return m(), D(wt(e.tag), {
    class: b([e.listStyleTypeClass, e.classes]),
    role: "list",
    "data-vv-list-generated-classes": e.debug ? e.classes : null,
    "data-vv-list-prop-list-style-type-class": e.debug ? e.listStyleTypeClass : null,
    "data-vv-list-prop-marker-color": e.debug ? e.markerColor : null,
    "data-vv-list-prop-marker-palette": e.debug ? e.markerPalette : null,
    "data-vv-list-prop-size": e.debug ? e.size : null,
    "data-vv-list-prop-tag": e.debug ? e.tag : null
  }, {
    default: P(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-vv-list-generated-classes", "data-vv-list-prop-list-style-type-class", "data-vv-list-prop-marker-color", "data-vv-list-prop-marker-palette", "data-vv-list-prop-size", "data-vv-list-prop-tag"]);
}
const Gl = /* @__PURE__ */ M(As, [["render", Rs]]), Ds = T({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: n.defaults.VvListItem.color
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvListItem.debug
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
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    let r = h(() => {
      var o, l, i;
      let s = [];
      return t != null && t.text.base() && s.push(t == null ? void 0 : t.text.base()), (i = (l = (o = t == null ? void 0 : t.text) == null ? void 0 : o.palettes) == null ? void 0 : l[e.palette]) != null && i[e.color] && s.push(String(t.text.palettes[e.palette][e.color])), s.join(" ").trim();
    }), a = h(() => {
      var o, l, i;
      let s = [];
      return (i = (l = (o = t == null ? void 0 : t.text) == null ? void 0 : o.palettes) == null ? void 0 : l[e.symbolPalette]) != null && i[e.symbolColor] && s.push(String(t.text.palettes[e.symbolPalette][e.symbolColor])), s.join(" ").trim();
    });
    return { classes: r, symbolClasses: a };
  }
}), Es = ["data-vv-list-item-generated-classes", "data-vv-list-item-prop-color", "data-vv-list-item-prop-enable-colored-symbols", "data-vv-list-item-prop-palette", "data-vv-list-item-prop-symbol-classes", "data-vv-list-item-prop-symbol-color", "data-vv-list-item-prop-symbol-palette"], Hs = ["data-vv-list-item-generated-classes"];
function Is(e, t, r, a, s, o) {
  return m(), L("li", {
    class: b(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes),
    "data-vv-list-item-generated-classes": e.debug ? e.classes : null,
    "data-vv-list-item-prop-color": e.debug ? e.color : null,
    "data-vv-list-item-prop-enable-colored-symbols": e.debug ? e.enableColoredSymbols : null,
    "data-vv-list-item-prop-palette": e.debug ? e.palette : null,
    "data-vv-list-item-prop-symbol-classes": e.debug ? e.symbolClasses : null,
    "data-vv-list-item-prop-symbol-color": e.debug ? e.symbolColor : null,
    "data-vv-list-item-prop-symbol-palette": e.debug ? e.symbolPalette : null
  }, [
    e.enableColoredSymbols === !0 ? (m(), L("span", {
      key: 0,
      class: b([e.classes]),
      "data-vv-list-item-generated-classes": e.debug ? e.classes : null
    }, [
      I(e.$slots, "default")
    ], 10, Hs)) : I(e.$slots, "default", { key: 1 })
  ], 10, Es);
}
const ql = /* @__PURE__ */ M(Ds, [["render", Is]]), Ns = T({
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
}), Gs = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function qs(e, t, r, a, s, o) {
  return m(), L("svg", Gs, [
    C("path", {
      class: b(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    C("path", {
      class: b(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    C("path", {
      class: b(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    C("path", {
      class: b(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    C("path", {
      class: b(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    C("path", {
      class: b(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    C("path", {
      class: b(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Ul = /* @__PURE__ */ M(Ns, [["render", qs]]), Us = T({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), Qs = /* @__PURE__ */ C("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), Ws = [
  Qs
];
function Js(e, t, r, a, s, o) {
  return m(), L("svg", {
    class: b(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, Ws, 2);
}
const Ql = /* @__PURE__ */ M(Us, [["render", Js]]), Ys = T({
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
    return { classes: h(() => e.enableAnimation ? e.animationClass : "") };
  }
}), Zs = ["fill"], Xs = ["fill"];
function Ks(e, t, r, a, s, o) {
  return m(), L("svg", {
    class: b(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    C("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: b(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, Zs),
    C("g", null, [
      C("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: b(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, Xs)
    ])
  ], 2);
}
const Wl = /* @__PURE__ */ M(Ys, [["render", Ks]]);
function J(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, J), a;
}
var Ze = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ze || {}), _s = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_s || {});
function pe({ visible: e = !0, features: t = 0, ourProps: r, theirProps: a, ...s }) {
  var o;
  let l = Gt(a, r), i = Object.assign(s, { props: l });
  if (e || t & 2 && l.static)
    return Je(i);
  if (t & 1) {
    let c = (o = l.unmount) == null || o ? 0 : 1;
    return J(c, { 0() {
      return null;
    }, 1() {
      return Je({ ...s, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Je(i);
}
function Je({ props: e, attrs: t, slots: r, slot: a, name: s }) {
  var o, l;
  let { as: i, ...c } = qt(e, ["unmount", "static"]), u = (o = r.default) == null ? void 0 : o.call(r, a), d = {};
  if (a) {
    let p = !1, v = [];
    for (let [y, k] of Object.entries(a))
      typeof k == "boolean" && (p = !0), k === !0 && v.push(y);
    p && (d["data-headlessui-state"] = v.join(" "));
  }
  if (i === "template") {
    if (u = Nt(u ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [p, ...v] = u ?? [];
      if (!to(p) || v.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((z) => z.trim()).filter((z, A, S) => S.indexOf(z) === A).sort((z, A) => z.localeCompare(A)).map((z) => `  - ${z}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((z) => `  - ${z}`).join(`
`)].join(`
`));
      let y = Gt((l = p.props) != null ? l : {}, c), k = _t(p, y);
      for (let z in y)
        z.startsWith("on") && (k.props || (k.props = {}), k.props[z] = y[z]);
      return k;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return Ye(i, Object.assign({}, c, d), { default: () => u });
}
function Nt(e) {
  return e.flatMap((t) => t.type === Te ? Nt(t.children) : [t]);
}
function Gt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let a of e)
    for (let s in a)
      s.startsWith("on") && typeof a[s] == "function" ? (r[s] != null || (r[s] = []), r[s].push(a[s])) : t[s] = a[s];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((a) => [a, void 0])));
  for (let a in r)
    Object.assign(t, { [a](s, ...o) {
      let l = r[a];
      for (let i of l) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        i(s, ...o);
      }
    } });
  return t;
}
function eo(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function qt(e, t = []) {
  let r = Object.assign({}, e);
  for (let a of t)
    a in r && delete r[a];
  return r;
}
function to(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let ro = 0;
function ao() {
  return ++ro;
}
function qe() {
  return ao();
}
var B = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(B || {});
function so(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function oo(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let a = t.resolveActiveIndex(), s = a ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((l) => !t.resolveDisabled(l));
      case 1: {
        let l = r.slice().reverse().findIndex((i, c, u) => s !== -1 && u.length - c - 1 >= s ? !1 : !t.resolveDisabled(i));
        return l === -1 ? l : r.length - 1 - l;
      }
      case 2:
        return r.findIndex((l, i) => i <= s ? !1 : !t.resolveDisabled(l));
      case 3: {
        let l = r.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return l === -1 ? l : r.length - 1 - l;
      }
      case 4:
        return r.findIndex((l) => t.resolveId(l) === e.id);
      case 5:
        return null;
      default:
        so(e);
    }
  })();
  return o === -1 ? a : o;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ut = Symbol("Context");
var ke = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ke || {});
function lo() {
  return V(Ut, null);
}
function no(e) {
  zt(Ut, e);
}
function vt(e, t) {
  if (e)
    return e;
  let r = t ?? "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function io(e, t) {
  let r = F(vt(e.value.type, e.value.as));
  return he(() => {
    r.value = vt(e.value.type, e.value.as);
  }), Ae(() => {
    var a;
    r.value || O(t) && O(t) instanceof HTMLButtonElement && !((a = O(t)) != null && a.hasAttribute("type")) && (r.value = "button");
  }), r;
}
var uo = Object.defineProperty, co = (e, t, r) => t in e ? uo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, mt = (e, t, r) => (co(e, typeof t != "symbol" ? t + "" : t, r), r);
class po {
  constructor() {
    mt(this, "current", this.detect()), mt(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}
let at = new po();
function fo(e) {
  if (at.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = O(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let yt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var bo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(bo || {}), go = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(go || {}), ho = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(ho || {}), st = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(st || {});
function Qt(e, t = 0) {
  var r;
  return e === ((r = fo(e)) == null ? void 0 : r.body) ? !1 : J(t, { 0() {
    return e.matches(yt);
  }, 1() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(yt))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
var vo = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(vo || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function mo(e, t = (r) => r) {
  return e.slice().sort((r, a) => {
    let s = t(r), o = t(a);
    if (s === null || o === null)
      return 0;
    let l = s.compareDocumentPosition(o);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ve(e, t, r) {
  at.isServer || Ae((a) => {
    document.addEventListener(e, t, r), a(() => document.removeEventListener(e, t, r));
  });
}
function yo(e, t, r) {
  at.isServer || Ae((a) => {
    window.addEventListener(e, t, r), a(() => window.removeEventListener(e, t, r));
  });
}
function xo(e, t, r = h(() => !0)) {
  function a(o, l) {
    if (!r.value || o.defaultPrevented)
      return;
    let i = l(o);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let c = function u(d) {
      return typeof d == "function" ? u(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let u of c) {
      if (u === null)
        continue;
      let d = u instanceof HTMLElement ? u : O(u);
      if (d != null && d.contains(i) || o.composed && o.composedPath().includes(d))
        return;
    }
    return !Qt(i, st.Loose) && i.tabIndex !== -1 && o.preventDefault(), t(o, i);
  }
  let s = F(null);
  Ve("pointerdown", (o) => {
    var l, i;
    r.value && (s.value = ((i = (l = o.composedPath) == null ? void 0 : l.call(o)) == null ? void 0 : i[0]) || o.target);
  }, !0), Ve("mousedown", (o) => {
    var l, i;
    r.value && (s.value = ((i = (l = o.composedPath) == null ? void 0 : l.call(o)) == null ? void 0 : i[0]) || o.target);
  }, !0), Ve("click", (o) => {
    s.value && (a(o, () => s.value), s.value = null);
  }, !0), Ve("touchend", (o) => a(o, () => o.target instanceof HTMLElement ? o.target : null), !0), yo("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Wt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Wt || {});
let ko = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: a, ...s } = e, o = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return pe({ ourProps: o, theirProps: s, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Jt(e = {}, t = null, r = []) {
  for (let [a, s] of Object.entries(e))
    Zt(r, Yt(t, a), s);
  return r;
}
function Yt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Zt(e, t, r) {
  if (Array.isArray(r))
    for (let [a, s] of r.entries())
      Zt(e, Yt(t, a.toString()), s);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : Jt(r, t, e);
}
function So(e, t, r) {
  let a = F(r == null ? void 0 : r.value), s = h(() => e.value !== void 0);
  return [h(() => s.value ? e.value : a.value), function(o) {
    return s.value || (a.value = o), t == null ? void 0 : t(o);
  }];
}
function xt(e) {
  return [e.screenX, e.screenY];
}
function wo() {
  let e = F([-1, -1]);
  return { wasMoved(t) {
    let r = xt(t);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(t) {
    e.value = xt(t);
  } };
}
let kt = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function St(e) {
  var t, r;
  let a = (t = e.innerText) != null ? t : "", s = e.cloneNode(!0);
  if (!(s instanceof HTMLElement))
    return a;
  let o = !1;
  for (let i of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    i.remove(), o = !0;
  let l = o ? (r = s.innerText) != null ? r : "" : a;
  return kt.test(l) && (l = l.replace(kt, "")), l;
}
function Co(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string")
    return t.trim();
  let r = e.getAttribute("aria-labelledby");
  if (r) {
    let a = r.split(" ").map((s) => {
      let o = document.getElementById(s);
      if (o) {
        let l = o.getAttribute("aria-label");
        return typeof l == "string" ? l.trim() : St(o).trim();
      }
      return null;
    }).filter(Boolean);
    if (a.length > 0)
      return a.join(", ");
  }
  return St(e).trim();
}
function zo(e) {
  let t = F(""), r = F("");
  return () => {
    let a = O(e);
    if (!a)
      return "";
    let s = a.innerText;
    if (t.value === s)
      return r.value;
    let o = Co(a).trim().toLowerCase();
    return t.value = s, r.value = o, o;
  };
}
function Vo(e, t) {
  return e === t;
}
var $o = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($o || {}), To = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(To || {}), Oo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Oo || {});
function Lo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Xt = Symbol("ListboxContext");
function we(e) {
  let t = V(Xt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, we), r;
  }
  return t;
}
let Fo = T({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vo }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, form: { type: String, optional: !0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: r, emit: a }) {
  let s = F(1), o = F(null), l = F(null), i = F(null), c = F([]), u = F(""), d = F(null), p = F(1);
  function v(g = (x) => x) {
    let x = d.value !== null ? c.value[d.value] : null, w = mo(g(c.value.slice()), (H) => O(H.dataRef.domRef)), $ = x ? w.indexOf(x) : null;
    return $ === -1 && ($ = null), { options: w, activeOptionIndex: $ };
  }
  let y = h(() => e.multiple ? 1 : 0), [k, z] = So(h(() => e.modelValue), (g) => a("update:modelValue", g), h(() => e.defaultValue)), A = h(() => k.value === void 0 ? J(y.value, { 1: [], 0: void 0 }) : k.value), S = { listboxState: s, value: A, mode: y, compare(g, x) {
    if (typeof e.by == "string") {
      let w = e.by;
      return (g == null ? void 0 : g[w]) === (x == null ? void 0 : x[w]);
    }
    return e.by(g, x);
  }, orientation: h(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: l, optionsRef: i, disabled: h(() => e.disabled), options: c, searchQuery: u, activeOptionIndex: d, activationTrigger: p, closeListbox() {
    e.disabled || s.value !== 1 && (s.value = 1, d.value = null);
  }, openListbox() {
    e.disabled || s.value !== 0 && (s.value = 0);
  }, goToOption(g, x, w) {
    if (e.disabled || s.value === 1)
      return;
    let $ = v(), H = oo(g === R.Specific ? { focus: R.Specific, id: x } : { focus: g }, { resolveItems: () => $.options, resolveActiveIndex: () => $.activeOptionIndex, resolveId: (fe) => fe.id, resolveDisabled: (fe) => fe.dataRef.disabled });
    u.value = "", d.value = H, p.value = w ?? 1, c.value = $.options;
  }, search(g) {
    if (e.disabled || s.value === 1)
      return;
    let x = u.value !== "" ? 0 : 1;
    u.value += g.toLowerCase();
    let w = (d.value !== null ? c.value.slice(d.value + x).concat(c.value.slice(0, d.value + x)) : c.value).find((H) => H.dataRef.textValue.startsWith(u.value) && !H.dataRef.disabled), $ = w ? c.value.indexOf(w) : -1;
    $ === -1 || $ === d.value || (d.value = $, p.value = 1);
  }, clearSearch() {
    e.disabled || s.value !== 1 && u.value !== "" && (u.value = "");
  }, registerOption(g, x) {
    let w = v(($) => [...$, { id: g, dataRef: x }]);
    c.value = w.options, d.value = w.activeOptionIndex;
  }, unregisterOption(g) {
    let x = v((w) => {
      let $ = w.findIndex((H) => H.id === g);
      return $ !== -1 && w.splice($, 1), w;
    });
    c.value = x.options, d.value = x.activeOptionIndex, p.value = 1;
  }, theirOnChange(g) {
    e.disabled || z(g);
  }, select(g) {
    e.disabled || z(J(y.value, { 0: () => g, 1: () => {
      let x = U(S.value.value).slice(), w = U(g), $ = x.findIndex((H) => S.compare(w, U(H)));
      return $ === -1 ? x.push(w) : x.splice($, 1), x;
    } }));
  } };
  xo([l, i], (g, x) => {
    var w;
    S.closeListbox(), Qt(x, st.Loose) || (g.preventDefault(), (w = O(l)) == null || w.focus());
  }, h(() => s.value === 0)), zt(Xt, S), no(h(() => J(s.value, { 0: ke.Open, 1: ke.Closed })));
  let j = h(() => {
    var g;
    return (g = O(l)) == null ? void 0 : g.closest("form");
  });
  return he(() => {
    Vt([j], () => {
      if (!j.value || e.defaultValue === void 0)
        return;
      function g() {
        S.theirOnChange(e.defaultValue);
      }
      return j.value.addEventListener("reset", g), () => {
        var x;
        (x = j.value) == null || x.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: g, modelValue: x, disabled: w, form: $, ...H } = e, fe = { open: s.value === 0, disabled: w, value: A.value };
    return Ye(Te, [...g != null && A.value != null ? Jt({ [g]: A.value }).map(([ot, Kt]) => Ye(ko, eo({ features: Wt.Hidden, key: ot, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: $, name: ot, value: Kt }))) : [], pe({ ourProps: {}, theirProps: { ...r, ...qt(H, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: fe, slots: t, attrs: r, name: "Listbox" })]);
  };
} }), Po = T({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${qe()}` } }, setup(e, { attrs: t, slots: r }) {
  let a = we("ListboxLabel");
  function s() {
    var o;
    (o = O(a.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: a.listboxState.value === 0, disabled: a.disabled.value }, { id: l, ...i } = e, c = { id: l, ref: a.labelRef, onClick: s };
    return pe({ ourProps: c, theirProps: i, slot: o, attrs: t, slots: r, name: "ListboxLabel" });
  };
} }), Bo = T({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${qe()}` } }, setup(e, { attrs: t, slots: r, expose: a }) {
  let s = we("ListboxButton");
  a({ el: s.buttonRef, $el: s.buttonRef });
  function o(u) {
    switch (u.key) {
      case B.Space:
      case B.Enter:
      case B.ArrowDown:
        u.preventDefault(), s.openListbox(), ue(() => {
          var d;
          (d = O(s.optionsRef)) == null || d.focus({ preventScroll: !0 }), s.value.value || s.goToOption(R.First);
        });
        break;
      case B.ArrowUp:
        u.preventDefault(), s.openListbox(), ue(() => {
          var d;
          (d = O(s.optionsRef)) == null || d.focus({ preventScroll: !0 }), s.value.value || s.goToOption(R.Last);
        });
        break;
    }
  }
  function l(u) {
    switch (u.key) {
      case B.Space:
        u.preventDefault();
        break;
    }
  }
  function i(u) {
    s.disabled.value || (s.listboxState.value === 0 ? (s.closeListbox(), ue(() => {
      var d;
      return (d = O(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (u.preventDefault(), s.openListbox(), Lo(() => {
      var d;
      return (d = O(s.optionsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let c = io(h(() => ({ as: e.as, type: t.type })), s.buttonRef);
  return () => {
    var u, d;
    let p = { open: s.listboxState.value === 0, disabled: s.disabled.value, value: s.value.value }, { id: v, ...y } = e, k = { ref: s.buttonRef, id: v, type: c.value, "aria-haspopup": "listbox", "aria-controls": (u = O(s.optionsRef)) == null ? void 0 : u.id, "aria-expanded": s.listboxState.value === 0, "aria-labelledby": s.labelRef.value ? [(d = O(s.labelRef)) == null ? void 0 : d.id, v].join(" ") : void 0, disabled: s.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: l, onClick: i };
    return pe({ ourProps: k, theirProps: y, slot: p, attrs: t, slots: r, name: "ListboxButton" });
  };
} }), jo = T({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${qe()}` } }, setup(e, { attrs: t, slots: r, expose: a }) {
  let s = we("ListboxOptions"), o = F(null);
  a({ el: s.optionsRef, $el: s.optionsRef });
  function l(u) {
    switch (o.value && clearTimeout(o.value), u.key) {
      case B.Space:
        if (s.searchQuery.value !== "")
          return u.preventDefault(), u.stopPropagation(), s.search(u.key);
      case B.Enter:
        if (u.preventDefault(), u.stopPropagation(), s.activeOptionIndex.value !== null) {
          let d = s.options.value[s.activeOptionIndex.value];
          s.select(d.dataRef.value);
        }
        s.mode.value === 0 && (s.closeListbox(), ue(() => {
          var d;
          return (d = O(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        }));
        break;
      case J(s.orientation.value, { vertical: B.ArrowDown, horizontal: B.ArrowRight }):
        return u.preventDefault(), u.stopPropagation(), s.goToOption(R.Next);
      case J(s.orientation.value, { vertical: B.ArrowUp, horizontal: B.ArrowLeft }):
        return u.preventDefault(), u.stopPropagation(), s.goToOption(R.Previous);
      case B.Home:
      case B.PageUp:
        return u.preventDefault(), u.stopPropagation(), s.goToOption(R.First);
      case B.End:
      case B.PageDown:
        return u.preventDefault(), u.stopPropagation(), s.goToOption(R.Last);
      case B.Escape:
        u.preventDefault(), u.stopPropagation(), s.closeListbox(), ue(() => {
          var d;
          return (d = O(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        break;
      case B.Tab:
        u.preventDefault(), u.stopPropagation();
        break;
      default:
        u.key.length === 1 && (s.search(u.key), o.value = setTimeout(() => s.clearSearch(), 350));
        break;
    }
  }
  let i = lo(), c = h(() => i !== null ? (i.value & ke.Open) === ke.Open : s.listboxState.value === 0);
  return () => {
    var u, d, p, v;
    let y = { open: s.listboxState.value === 0 }, { id: k, ...z } = e, A = { "aria-activedescendant": s.activeOptionIndex.value === null || (u = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : u.id, "aria-multiselectable": s.mode.value === 1 ? !0 : void 0, "aria-labelledby": (v = (d = O(s.labelRef)) == null ? void 0 : d.id) != null ? v : (p = O(s.buttonRef)) == null ? void 0 : p.id, "aria-orientation": s.orientation.value, id: k, onKeydown: l, role: "listbox", tabIndex: 0, ref: s.optionsRef };
    return pe({ ourProps: A, theirProps: z, slot: y, attrs: t, slots: r, features: Ze.RenderStrategy | Ze.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), Mo = T({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${qe()}` } }, setup(e, { slots: t, attrs: r, expose: a }) {
  let s = we("ListboxOption"), o = F(null);
  a({ el: o, $el: o });
  let l = h(() => s.activeOptionIndex.value !== null ? s.options.value[s.activeOptionIndex.value].id === e.id : !1), i = h(() => J(s.mode.value, { 0: () => s.compare(U(s.value.value), U(e.value)), 1: () => U(s.value.value).some((S) => s.compare(U(S), U(e.value))) })), c = h(() => J(s.mode.value, { 1: () => {
    var S;
    let j = U(s.value.value);
    return ((S = s.options.value.find((g) => j.some((x) => s.compare(U(x), U(g.dataRef.value))))) == null ? void 0 : S.id) === e.id;
  }, 0: () => i.value })), u = zo(o), d = h(() => ({ disabled: e.disabled, value: e.value, get textValue() {
    return u();
  }, domRef: o }));
  he(() => s.registerOption(e.id, d)), er(() => s.unregisterOption(e.id)), he(() => {
    Vt([s.listboxState, i], () => {
      s.listboxState.value === 0 && i.value && J(s.mode.value, { 1: () => {
        c.value && s.goToOption(R.Specific, e.id);
      }, 0: () => {
        s.goToOption(R.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), Ae(() => {
    s.listboxState.value === 0 && l.value && s.activationTrigger.value !== 0 && ue(() => {
      var S, j;
      return (j = (S = O(o)) == null ? void 0 : S.scrollIntoView) == null ? void 0 : j.call(S, { block: "nearest" });
    });
  });
  function p(S) {
    if (e.disabled)
      return S.preventDefault();
    s.select(e.value), s.mode.value === 0 && (s.closeListbox(), ue(() => {
      var j;
      return (j = O(s.buttonRef)) == null ? void 0 : j.focus({ preventScroll: !0 });
    }));
  }
  function v() {
    if (e.disabled)
      return s.goToOption(R.Nothing);
    s.goToOption(R.Specific, e.id);
  }
  let y = wo();
  function k(S) {
    y.update(S);
  }
  function z(S) {
    y.wasMoved(S) && (e.disabled || l.value || s.goToOption(R.Specific, e.id, 0));
  }
  function A(S) {
    y.wasMoved(S) && (e.disabled || l.value && s.goToOption(R.Nothing));
  }
  return () => {
    let { disabled: S } = e, j = { active: l.value, selected: i.value, disabled: S }, { id: g, value: x, disabled: w, ...$ } = e, H = { id: g, ref: o, role: "option", tabIndex: S === !0 ? void 0 : -1, "aria-disabled": S === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: p, onFocus: v, onPointerenter: k, onMouseenter: k, onPointermove: z, onMousemove: z, onPointerleave: A, onMouseleave: A };
    return pe({ ourProps: H, theirProps: $, slot: j, attrs: r, slots: t, name: "ListboxOption" });
  };
} });
const Ao = T({
  name: "VvListbox",
  emits: ["update:modelValue"],
  components: {
    Listbox: Fo,
    ListboxButton: Bo,
    ListboxLabel: Po,
    ListboxOptions: jo,
    ListboxOption: Mo
  },
  props: {
    data: {
      type: Array,
      default: n.defaults.VvListbox.data
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvListbox.debug
    },
    displayClasses: {
      type: String,
      default: n.defaults.VvListbox.displayClasses
    },
    displayDisabledClasses: {
      type: String,
      default: n.defaults.VvListbox.displayDisabledClasses
    },
    iconDisabledClasses: {
      type: String,
      default: n.defaults.VvListbox.iconDisabledClasses
    },
    iconSelectedClasses: {
      type: String,
      default: n.defaults.VvListbox.iconSelectedClasses
    },
    iconsSizeClasses: {
      type: String,
      default: n.defaults.VvListbox.iconsSizeClasses
    },
    label: {
      type: String,
      default: n.defaults.VvListbox.label
    },
    labelClasses: {
      type: String,
      default: n.defaults.VvListbox.labelClasses
    },
    listboxButtonClasses: {
      type: String,
      default: n.defaults.VvListbox.listboxButtonClasses
    },
    listboxButtonColor: {
      type: String,
      default: n.defaults.VvListbox.listboxButtonColor
    },
    listboxButtonPalette: {
      type: String,
      default: n.defaults.VvListbox.listboxButtonPalette
    },
    listboxOptionClasses: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionClasses
    },
    listboxOptionColor: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionColor
    },
    listboxOptionPalette: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionPalette
    },
    listboxOptionsClasses: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionsClasses
    },
    listboxOptionsWithLabelSpacing: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionsWithLabelSpacing
    },
    listboxOptionsWithoutLabelSpacing: {
      type: String,
      default: n.defaults.VvListbox.listboxOptionsWithoutLabelSpacing
    },
    optionIconParentClasses: {
      type: String,
      default: n.defaults.VvListbox.optionIconParentClasses
    },
    selectedDisplayClasses: {
      type: String,
      default: n.defaults.VvListbox.selectedDisplayClasses
    },
    selectedIndex: {
      type: Number,
      default: n.defaults.VvListbox.selectedIndex
    },
    size: {
      type: String,
      default: n.defaults.VvListbox.size
    }
  },
  setup(e) {
    const t = F(e.data), r = F(t.value[e.selectedIndex]), a = Object.keys(V("vv", {})).length > 0 ? V("vv") : n, s = h(() => {
      var i, c, u, d, p, v;
      let l = [];
      return (i = a == null ? void 0 : a.listboxes) != null && i.base() && l.push(a.listboxes.base()), e.size !== "" && ((u = (c = a == null ? void 0 : a.listboxes) == null ? void 0 : c.sizes) != null && u[e.size]) && l.push(String(a.listboxes.sizes[e.size])), (v = (p = (d = a == null ? void 0 : a.listboxes) == null ? void 0 : d.buttonPalettes) == null ? void 0 : p[e.listboxButtonPalette]) != null && v[e.listboxButtonColor] && l.push(String(a.listboxes.buttonPalettes[e.listboxButtonPalette][e.listboxButtonColor])), l.join(" ").trim();
    }), o = h(() => {
      var i, c, u;
      let l = [];
      return (u = (c = (i = a == null ? void 0 : a.listboxes) == null ? void 0 : i.optionPalettes) == null ? void 0 : c[e.listboxOptionPalette]) != null && u[e.listboxOptionColor] && l.push(String(a.listboxes.optionPalettes[e.listboxOptionPalette][e.listboxOptionColor])), l.join(" ").trim();
    });
    return {
      listboxButtonVvClasses: s,
      listboxOptionVvClasses: o,
      selectData: t,
      selectedItem: r,
      VvConfig: n
    };
  }
}), Ro = ["data-vv-listbox-prop-selected-display-classes"], Do = ["data-vv-listbox-prop-icons-size-classes"], Eo = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Ho = [
  Eo
], Io = ["data-vv-listbox-prop-option-icon-parent-classes"], No = ["data-vv-listbox-prop-icon-size-classes"], Go = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), qo = [
  Go
], Uo = ["data-vv-listbox-prop-icon-size-classes"], Qo = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
}, null, -1), Wo = [
  Qo
], Jo = ["data-vv-listbox-prop-display-classes", "data-vv-listbox-prop-display-disabled-classes"];
function Yo(e, t, r, a, s, o) {
  const l = oe("ListboxLabel"), i = oe("ListboxButton"), c = oe("ListboxOption"), u = oe("ListboxOptions"), d = oe("Listbox");
  return m(), D(d, {
    as: "div",
    modelValue: e.selectedItem,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (p) => e.selectedItem = p),
      t[1] || (t[1] = (p) => e.$emit("update:modelValue", p))
    ],
    by: "id"
  }, {
    default: P(() => [
      e.label.length > 0 ? (m(), D(l, {
        key: 0,
        class: b(e.labelClasses),
        "data-vv-listbox-prop-label-classes": e.debug ? e.labelClasses : null
      }, {
        default: P(() => [
          I(e.$slots, "default", {}, () => [
            te(G(e.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "data-vv-listbox-prop-label-classes"])) : (m(), D(l, {
        key: 1,
        class: b(e.labelClasses),
        "data-vv-listbox-prop-label-classes": e.debug ? e.labelClasses : null
      }, {
        default: P(() => [
          I(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "data-vv-listbox-prop-label-classes"])),
      $e(i, {
        class: b([e.listboxButtonClasses, e.listboxButtonVvClasses]),
        "data-vv-listbox-prop-listbox-button-classes": e.debug ? e.listboxButtonClasses : null
      }, {
        default: P(() => [
          C("span", {
            class: b(e.selectedDisplayClasses),
            "data-vv-listbox-prop-selected-display-classes": e.debug ? e.selectedDisplayClasses : null
          }, G(e.selectedItem.display), 11, Ro),
          (m(), L("svg", {
            class: b(e.iconsSizeClasses),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "data-vv-listbox-prop-icons-size-classes": e.debug ? e.iconsSizeClasses : null
          }, Ho, 10, Do))
        ]),
        _: 1
      }, 8, ["class", "data-vv-listbox-prop-listbox-button-classes"]),
      $e(u, {
        class: b([e.listboxOptionsClasses, e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : e.listboxOptionsWithoutLabelSpacing]),
        "data-vv-listbox-prop-listbox-options-classes": e.debug ? e.listboxOptionsClasses : null,
        "data-vv-listbox-prop-listbox-options-with-label-spacing": e.debug && e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : null,
        "data-vv-listbox-prop-listbox-options-without-label-spacing": e.debug && e.label.length <= 0 ? e.listboxOptionsWithoutLabelSpacing : null
      }, {
        default: P(() => [
          (m(!0), L(Te, null, tr(e.selectData, (p) => (m(), L(Te, null, [
            p.value !== "" ? (m(), D(c, {
              key: p.id,
              value: p,
              disabled: p.disabled,
              class: b([e.listboxOptionClasses, e.listboxOptionVvClasses]),
              "data-vv-listbox-prop-listbox-option-classes": e.debug ? e.listboxOptionClasses : null,
              "data-vv-listbox-prop-listbox-option-vv-classes": e.debug ? e.listboxOptionVvClasses : null
            }, {
              default: P(() => [
                C("span", {
                  class: b(e.optionIconParentClasses),
                  "data-vv-listbox-prop-option-icon-parent-classes": e.debug ? e.optionIconParentClasses : null
                }, [
                  (m(), L("svg", {
                    class: b(["hidden ui-selected:block mr-3", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "data-vv-listbox-prop-icon-size-classes": e.debug ? e.iconsSizeClasses : null
                  }, qo, 10, No)),
                  p.disabled ? (m(), L("svg", {
                    key: 0,
                    class: b(["mr-3 opacity-25", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "data-vv-listbox-prop-icon-size-classes": e.debug ? e.iconsSizeClasses : null
                  }, Wo, 10, Uo)) : q("", !0)
                ], 10, Io),
                C("span", {
                  class: b([e.displayClasses, p.disabled ? e.displayDisabledClasses : ""]),
                  "data-vv-listbox-prop-display-classes": e.debug ? e.displayClasses : null,
                  "data-vv-listbox-prop-display-disabled-classes": e.debug && p.disabled ? e.displayDisabledClasses : null
                }, G(p.display), 11, Jo)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class", "data-vv-listbox-prop-listbox-option-classes", "data-vv-listbox-prop-listbox-option-vv-classes"])) : q("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["class", "data-vv-listbox-prop-listbox-options-classes", "data-vv-listbox-prop-listbox-options-with-label-spacing", "data-vv-listbox-prop-listbox-options-without-label-spacing"])
    ]),
    _: 3
  }, 8, ["modelValue"]);
}
const Jl = /* @__PURE__ */ M(Ao, [["render", Yo]]), Zo = T({
  name: "VvSelect",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvSelect.color
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvSelect.debug
    },
    palette: {
      type: String,
      default: n.defaults.VvSelect.palette
    },
    size: {
      type: String,
      default: n.defaults.VvSelect.size
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    return { classes: h(() => {
      var o, l, i, c, u, d;
      let s = [];
      return (o = t == null ? void 0 : t.selects) != null && o.base() && s.push(t.selects.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.selects) == null ? void 0 : l.sizes) != null && i[e.size]) && s.push(String(t.selects.sizes[e.size])), (d = (u = (c = t == null ? void 0 : t.selects) == null ? void 0 : c.palettes) == null ? void 0 : u[e.palette]) != null && d[e.color] && s.push(String(t.selects.palettes[e.palette][e.color])), s.join(" ").trim();
    }), handleSelectChange: (s) => s.target.value };
  }
}), Xo = ["value", "data-vv-select-generated-classes", "data-vv-select-prop-color", "data-vv-select-prop-model-value", "data-vv-select-prop-palette", "data-vv-select-prop-size"];
function Ko(e, t, r, a, s, o) {
  return m(), L("select", {
    class: b(e.classes),
    value: e.modelValue,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleSelectChange(l))),
    "data-vv-select-generated-classes": e.debug ? e.classes : null,
    "data-vv-select-prop-color": e.debug ? e.color : null,
    "data-vv-select-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-select-prop-palette": e.debug ? e.palette : null,
    "data-vv-select-prop-size": e.debug ? e.size : null
  }, [
    I(e.$slots, "default")
  ], 42, Xo);
}
const Yl = /* @__PURE__ */ M(Zo, [["render", Ko]]), _o = T({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvTextarea.color
    },
    debug: {
      type: Boolean,
      default: n.defaults.VvTextarea.debug
    },
    modelValue: {
      type: String,
      default: ""
    },
    palette: {
      type: String,
      default: n.defaults.VvTextarea.palette
    },
    rowSize: {
      type: String,
      default: n.defaults.VvTextarea.rowSize
    },
    size: {
      type: String,
      default: n.defaults.VvTextarea.size
    }
  },
  setup(e) {
    const t = Object.keys(V("vv", {})).length > 0 ? V("vv") : n;
    let r = h(() => {
      var l, i, c, u, d, p;
      let o = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && o.push(t.textareas.base()), e.size !== "" && ((c = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.sizes) != null && c[e.size]) && o.push(String(t.textareas.sizes[e.size])), (p = (d = (u = t == null ? void 0 : t.textareas) == null ? void 0 : u.palettes) == null ? void 0 : d[e.palette]) != null && p[e.color] && o.push(String(t.textareas.palettes[e.palette][e.color])), o.join(" ").trim();
    }), a = h(() => {
      var o, l;
      if (e.rowSize !== "" && ((l = (o = t == null ? void 0 : t.textareas) == null ? void 0 : o.rowSizes) != null && l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: a, handleTextareaChange: (o) => o.target.value };
  }
}), el = ["rows", "value", "data-vv-textarea-generated-classes", "data-vv-textarea-prop-color", "data-vv-textarea-prop-model-value", "data-vv-textarea-prop-palette", "data-vv-textarea-prop-row-size", "data-vv-textarea-prop-size"];
function tl(e, t, r, a, s, o) {
  return m(), L("textarea", {
    class: b(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleTextareaChange(l))),
    "data-vv-textarea-generated-classes": e.debug ? e.classes : null,
    "data-vv-textarea-prop-color": e.debug ? e.color : null,
    "data-vv-textarea-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-textarea-prop-palette": e.debug ? e.palette : null,
    "data-vv-textarea-prop-row-size": e.debug ? e.rowSize : null,
    "data-vv-textarea-prop-size": e.debug ? e.size : null
  }, null, 42, el);
}
const Zl = /* @__PURE__ */ M(_o, [["render", tl]]);
export {
  cr as AnchorDefault,
  rr as Anchors,
  pr as BorderDefault,
  fr as ButtonOutline,
  br as ButtonSolid,
  ar as Buttons,
  gr as CheckboxDefault,
  sr as Checkboxes,
  or as ColorModes,
  hr as FillDefault,
  vr as GroundConsole,
  mr as GroundDefault,
  yr as GroundMonochromatic,
  xr as GroundPastel,
  Ue as InputDefault,
  Qe as InputUnderlined,
  $t as Inputs,
  zr as ListDefault,
  kr as ListboxButtonDefault,
  Sr as ListboxButtonUnderlined,
  wr as ListboxOptionDefault,
  Cr as ListboxOptionUnderlined,
  lr as Listboxes,
  nr as Lists,
  Ul as ObeKnockoutMark,
  Vr as RadioDefault,
  ir as Radios,
  $r as ScrollbarDefault,
  ur as Selects,
  Xe as Text,
  Tr as TextDefault,
  dr as Textareas,
  ae as Transitions,
  $l as ValidAudioSourceTypes,
  Ht as ValidButtonTypes,
  Ba as ValidColorModes,
  Tl as ValidCommentStyles,
  Ol as ValidDirections,
  Ra as ValidElementTags,
  Ll as ValidFontAwesomeFamilies,
  Fl as ValidFontAwesomeSizes,
  Pl as ValidHeadingLevels,
  Bl as ValidImageSourceTypes,
  Ga as ValidInputTypes,
  Ua as ValidListTypes,
  jl as ValidUrlDecorations,
  Ml as ValidVideoSourceTypes,
  Ql as VueVentusLogoText,
  Wl as VueVentusSpinningMark,
  Al as VvAnchor,
  ts as VvButton,
  Hl as VvCheckbox,
  Rl as VvColorModeButton,
  n as VvConfig,
  It as VvEl,
  Dl as VvFormGroup,
  Il as VvInput,
  Gl as VvList,
  ql as VvListItem,
  Jl as VvListbox,
  El as VvQuadFormGroup,
  Nl as VvRadio,
  Yl as VvSelect,
  Zl as VvTextarea,
  al as appColorPairs,
  sl as camelCaseToTitleCase,
  ol as decimalsOnly,
  ll as digitsOnly,
  nl as forceBodyClick,
  il as formatBytes,
  ul as formatDateMMDDYYYY,
  dl as formatDateTraditional,
  cl as formatMediaTime,
  pl as formatNumber,
  _ as getRandomInt,
  Dt as hexadecimals,
  fl as mergeWithVvConfig,
  Rt as monthNames,
  ge as padNumber,
  bl as randomGroundAndTextColors,
  Oa as randomHex,
  gl as randomHexShort,
  hl as randomString,
  vl as shuffleArray,
  ml as slugifyString,
  yl as stringToCamelCase,
  xl as stringToFilename,
  kl as timestampToDateTimeAmPm,
  Sl as uniqueArray,
  wl as verifyDateMMDDYYYY,
  Cl as verifyEmailString,
  zl as verifyRunTime,
  Vl as verifyStringLengths,
  Ge as verifyType
};
