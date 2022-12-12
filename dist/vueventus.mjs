import { defineComponent as $, inject as S, computed as h, openBlock as m, createElementBlock as V, normalizeClass as g, renderSlot as H, ref as A, onMounted as fe, resolveComponent as oe, createBlock as U, withCtx as F, createCommentVNode as ee, createElementVNode as T, resolveDynamicComponent as pt, createVNode as Ue, createTextVNode as ce, toDisplayString as ae, useCssVars as ht, cloneVNode as Ht, h as Ge, Fragment as Se, provide as xt, watchEffect as Je, onUnmounted as Nt, watch as Ut, nextTick as le, toRaw as I, renderList as Gt } from "vue";
const We = {
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
}, X = {
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
    var r, o, a;
    const t = e && ((r = this.durations) == null ? void 0 : r[e]) ? e : "300";
    return (o = this.durations) != null && o[t] ? (a = this.durations) == null ? void 0 : a[t] : "";
  },
  getEasingClasses: function(e) {
    var r, o, a;
    const t = e && ((r = this.easings) == null ? void 0 : r[e]) ? e : "inOut";
    return (o = this.easings) != null && o[t] ? (a = this.easings) == null ? void 0 : a[t] : "";
  },
  getTransitionClasses: function(e) {
    var r, o, a;
    const t = e && ((r = this.transitions) == null ? void 0 : r[e]) ? e : "default";
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
  classes: function(e, t, s) {
    const r = e || "", o = t || "", a = s || "";
    return [
      this.getTransitionClasses(r),
      this.getEasingClasses(o),
      this.getDurationClasses(a)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, qt = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: X.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: We.sizes,
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
}, Jt = {
  border: "border",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: X.classes("all", "inOut", "300"),
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
}, Wt = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "rounded",
  shadow: "",
  transition: X.classes("colors", "inOut", "300"),
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
}, Yt = {
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
}, mt = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: X.classes("colors", "inOut", "300"),
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
}, Zt = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: X.classes("colors", "inOut", "300"),
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
}, Qt = {
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
  sizes: We.sizes,
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
}, Xt = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "",
  shadow: "",
  transition: X.classes("colors", "inOut", "300"),
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
}, Kt = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: X.classes("colors", "inOut", "300"),
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
}, es = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: X.classes("colors", "inOut", "300"),
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
  sizes: mt.sizes,
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
}, ts = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, ss = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, rs = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, os = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, as = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, ls = {
  default: "dark:fill-gray-100 fill-gray-900",
  error: "fill-rose-500 dark:fill-rose-300",
  primary: "fill-blue-500 dark:fill-blue-300",
  secondary: "fill-violet-500 dark:fill-violet-300",
  success: "fill-green-600 dark:fill-green-300"
}, ns = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, is = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, us = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, ds = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, Ie = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, De = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, cs = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500"
}, fs = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500"
}, bs = {
  default: "ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, gs = {
  default: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, ps = {
  default: "",
  error: "marker:text-rose-500 dark:marker:text-rose-300",
  primary: "marker:text-blue-500 dark:marker:text-blue-300",
  secondary: "marker:text-violet-500 dark:marker:text-violet-300",
  success: "marker:text-green-600 dark:marker:text-green-300"
}, hs = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, xs = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, ms = {
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
    palette: "default",
    size: "md",
    type: "text"
  },
  VvList: {
    listStyleTypeClass: "list-disc",
    markerColor: "primary",
    markerPalette: "default",
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
    listboxOptionsWithoutLabelSpacing: "-mt-7",
    optionIconParentClasses: "w-6",
    selectedDisplayClasses: "block text-left",
    selectedIndex: 0,
    size: "md"
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
  VvSelect: {
    color: "default",
    palette: "default",
    size: "md"
  },
  VvTextarea: {
    color: "default",
    palette: "default",
    size: "md",
    rowSize: "md"
  }
}, u = {
  anchors: {
    ...qt,
    palettes: {
      default: ts
    }
  },
  borders: {
    palettes: {
      default: ss
    }
  },
  buttons: {
    ...Jt,
    palettes: {
      outline: rs,
      solid: os
    }
  },
  checkboxes: {
    ...Wt,
    palettes: {
      default: as
    }
  },
  fills: {
    palettes: {
      default: ls
    }
  },
  inputs: {
    ...mt,
    palettes: {
      default: Ie,
      underlined: De
    }
  },
  colorModes: {
    ...Yt
  },
  grounds: {
    palettes: {
      console: ns,
      default: is,
      monochromatic: us,
      pastel: ds
    }
  },
  listboxes: {
    ...Zt,
    buttonPalettes: {
      default: cs,
      underlined: fs
    },
    optionPalettes: {
      default: bs,
      underlined: gs
    }
  },
  lists: {
    ...Qt,
    palettes: {
      default: ps
    }
  },
  radios: {
    ...Xt,
    palettes: {
      default: hs
    }
  },
  selects: {
    ...Kt,
    palettes: {
      default: Ie,
      underlined: De
    }
  },
  text: {
    ...We,
    palettes: {
      default: xs
    }
  },
  textareas: {
    ...es,
    palettes: {
      default: Ie,
      underlined: De
    }
  },
  transitions: {
    ...X
  },
  defaults: ms
}, P = Math.round, G = Math.min, q = Math.max, ys = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, Ce = (e) => typeof e == "string" && e.includes("%"), Ee = (e) => e < 1 ? P(e) : e, vs = (e) => P(100 * e) / 100, yt = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), be = (e) => e.a < 1 && e.a >= 0, Ae = (e) => G(1, q(0, e)), ks = (e) => e.length === 1 ? `0${e}` : `${e}`, ws = "[-\\+]?\\d+%?", Ss = "[-\\+]?\\d*\\.\\d+%?", te = `(?:${Ss})|(?:${ws})`, Q = (e) => new RegExp(te).test(e), vt = (e) => Q(e.r) && Q(e.g) && Q(e.b), Ye = `[\\s|\\(]+(${te})[,|\\s]+(${te})[,|\\s]+(${te})\\s*\\)?`, Ze = `[\\s|\\(]+(${te})[,|\\s]+(${te})[,|\\s]+(${te})[,|\\s]+(${te})\\s*\\)?`;
function B(e, t) {
  ys(e) && (e = "100%");
  const s = Ce(e);
  return e = G(t, q(0, Number.parseFloat(e))), s && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const pe = (e) => Number.parseInt(e, 16), st = (e) => pe(e) / 255, he = (e) => e <= 1 ? `${e * 100}%` : e, se = (e) => {
  const [t, s, r] = [e._r, e._g, e._b].map((o) => P(o));
  return { r: t, g: s, b: r, a: e._roundA };
}, re = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), Ve = (e) => {
  const [t, s, r] = [e.r, e.g, e.b].map((o) => B(o, 255) * 255);
  return { r: t, g: s, b: r, a: yt(e.a) };
}, $e = (e) => {
  const [t, s, r] = [e.r, e.g, e.b].map((o) => `${P(B(o, 255) * 100)}%`);
  return { r: t, g: s, b: r, a: e.a };
}, Oe = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, kt = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, P(e.a * 255)], ze = (e, t) => {
  const s = kt(e).map((r) => r.toString(16)).map((r) => ks(r));
  return t && s.every((r) => r.charAt(0) === r.charAt(1)) ? s.map((r) => r.charAt(0)).join("") : s.join("");
}, xe = (e, t) => ze({ ...e, a: 1 }, t), Cs = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Vs(e) {
  const t = e.r / 255, s = e.g / 255, r = e.b / 255, o = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, a = s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4, l = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * a + 0.0722 * l;
}
function $s(e, t, s) {
  s = s === 0 ? 0 : s || 50;
  const r = new b(e).toRgb(), o = new b(t).toRgb(), a = s / 100, l = {
    r: (o.r - r.r) * a + r.r,
    g: (o.g - r.g) * a + r.g,
    b: (o.b - r.b) * a + r.b,
    a: (o.a - r.a) * a + r.a
  };
  return new b(l);
}
function Os(e) {
  let t, s;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), s = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), s !== "small" && s !== "large" && (s = "small"), { level: t, size: s };
}
function Qe(e, t) {
  const s = new b(e), r = new b(t);
  return (Math.max(s.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(s.getLuminance(), r.getLuminance()) + 0.05);
}
function wt(e, t, s) {
  const r = Qe(e, t), o = Os(s);
  let a = !1;
  switch (o.level + o.size) {
    case "AAlarge":
      a = r >= 3;
      break;
    case "AAAsmall":
      a = r >= 7;
      break;
    default:
      a = r >= 4.5;
  }
  return a;
}
function St(e, t, s = {}) {
  const { includeFallbackColors: r, level: o, size: a } = s;
  let l, n = null, d = 0;
  for (const f of t)
    l = Qe(e, f), l > d && (d = l, n = new b(f));
  return wt(e, n, { level: o, size: a }) || !r ? n : (s.includeFallbackColors = !1, St(e, ["#fff", "#000"], s));
}
function ie(e, t) {
  return { monochromatic: Ms, analogous: As, complement: zs, splitcomplement: js, triad: Ls, tetrad: Ts }[e](...t);
}
function zs(e) {
  const t = new b(e).toHsl();
  return t.h = (t.h + 180) % 360, new b(t);
}
function Ls(e) {
  const t = new b(e).toHsl(), { h: s } = t;
  return [
    new b(e),
    new b({ h: (s + 120) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 240) % 360, s: t.s, l: t.l })
  ];
}
function Ts(e) {
  const t = new b(e).toHsl(), { h: s } = t;
  return [
    new b(e),
    new b({ h: (s + 90) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 180) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 270) % 360, s: t.s, l: t.l })
  ];
}
function js(e) {
  const t = new b(e).toHsl(), { h: s } = t;
  return [
    new b(e),
    new b({ h: (s + 72) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 216) % 360, s: t.s, l: t.l })
  ];
}
function As(e, t = 6, s = 30) {
  const r = new b(e).toHsl(), o = 360 / s, a = [new b(e)];
  for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
    r.h = (r.h + o) % 360, a.push(new b(r));
  return a;
}
function Ms(e, t = 6) {
  const s = new b(e).toHsv();
  let { h: r, s: o, v: a } = s;
  const l = [], n = 1 / t;
  for (; t--; )
    l.push(new b({ h: r, s: o, v: a })), a = (a + n) % 1;
  return l;
}
function K(e, t) {
  const r = { invert: Rs, desaturate: Ps, saturate: Bs, greyscale: Fs, lighten: _s, brighten: Is, darken: Ds, spin: Es }[e](...t), [o] = t;
  return o._r = r._r, o._g = r._g, o._b = r._b, o.setAlpha(r._a), o;
}
function Rs(e) {
  const t = new b(e).toRgb();
  return t.r = q(0, G(255, 255 - t.r)), t.g = q(0, G(255, 255 - t.g)), t.b = q(0, G(255, 255 - t.b)), new b(t);
}
function Ps(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.s -= t / 100, s.s = Ae(s.s), new b(s);
}
function Bs(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.s += t / 100, s.s = Ae(s.s), new b(s);
}
function Fs(e) {
  return new b(e).desaturate(100);
}
function _s(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.l += t / 100, s.l = Ae(s.l), new b(s);
}
function Is(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toRgb();
  return s.r = q(0, G(255, s.r - P(255 * -(t / 100)))), s.g = q(0, G(255, s.g - P(255 * -(t / 100)))), s.b = q(0, G(255, s.b - P(255 * -(t / 100)))), new b(s);
}
function Ds(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.l -= t / 100, s.l = Ae(s.l), new b(s);
}
function Es(e, t) {
  const s = new b(e).toHsl(), r = (s.h + t) % 360;
  return s.h = r < 0 ? 360 + r : r, new b(s);
}
class Hs {
  constructor(t, s, r = {}) {
    this.api = t, this.id = s, this.options = r;
  }
  use(t) {
    return this.wanted = t, this;
  }
  parse(t) {
    const s = this.api.findColor(t);
    return {
      as: (r) => Object.assign(s, { format: r }),
      rgba: {
        r: s.r,
        g: s.g,
        b: s.b,
        a: s.a
      },
      valueOf: () => s
    };
  }
  print(t, s) {
    return this.api.print(s, t);
  }
  complete(t) {
    const s = this.toString(t);
    return delete this.wanted, s;
  }
}
const Ns = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class Us {
  constructor() {
    this.colorspaces = {}, this.options = {
      alphaFormat: "rgb",
      shortHex: !1,
      upperCaseHex: !1
    };
  }
  set(t) {
    Object.assign(this.options, t);
    for (const s in this.colorspaces)
      Object.prototype.hasOwnProperty.call(this.colorspaces, s) && Object.assign(this.colorspaces[s].options, t);
  }
  add(t, s) {
    if (this.colorspaces[t] = new Hs(this, t, { ...this.options, ...s }), s.alias)
      for (const r of s.alias)
        this.colorspaces[r] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const s = { ...Ns };
    if (t = typeof t == "string" ? t.trim().toLowerCase() : t, t) {
      for (const r in this.colorspaces)
        if (this.colorspaces[r].shouldHandleInput(t)) {
          Object.assign(s, this.colorspaces[r].toRgb(t)), s.format = s.format || r, s.ok = !0;
          break;
        }
    }
    return s;
  }
  raw(t, s) {
    return s in this.colorspaces ? this.colorspaces[s].toRaw(t) : { r: t.r / 255, g: t.g / 255, b: t.b / 255, a: t.a };
  }
  print(t, s, r) {
    const o = r;
    return r = r || s, r in this.colorspaces ? this.colorspaces[r].use(o).complete(t) : `[${t.r}, ${t.g}, ${t.b}, ${t.a * 255}]`;
  }
}
let Gs = 0;
const W = new Us();
class b {
  constructor(t, s = {}) {
    if (t = t || "", t instanceof b)
      return t;
    const r = W.findColor(t);
    this._originalInput = t, this._r = Ee(r.r), this._g = Ee(r.g), this._b = Ee(r.b), this._a = r.a, this._roundA = vs(this._a), this._format = s.format || r.format, this._gradientType = s.gradientType, this._ok = r.ok, this._tc_id = b.newId(), W.set(s);
  }
  static newId() {
    return Gs++;
  }
  static registerFormat(t, s = {}) {
    return W.add(t, s);
  }
  static equals(t, s) {
    return !t || !s ? !1 : new b(t).toRgbString() === new b(s).toRgbString();
  }
  static fromRatio(t, s) {
    if (typeof t == "object") {
      const r = {};
      for (const o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (o === "a" ? r[o] = t[o] : r[o] = he(t[o]));
      t = r;
    }
    return new b(t, s);
  }
  static readability(t, s) {
    return Qe(t, s);
  }
  static isReadable(t, s, r) {
    return wt(t, s, r);
  }
  static mostReadable(t, s, r) {
    return St(t, s, r);
  }
  static mix(t, s, r) {
    return $s(t, s, r);
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
    return Cs(this.toRgb());
  }
  getLuminance() {
    return Vs(re(this));
  }
  toString(t) {
    return W.print(se(this), this._format, t);
  }
  toName() {
    return W.print(se(this), "name", "toName");
  }
  toRgb() {
    return re(this);
  }
  toRgbString() {
    return Oe(se(this));
  }
  toRgbArray() {
    return kt(se(this));
  }
  toPercentageRgb() {
    return $e(re(this));
  }
  toPercentageRgbString() {
    return Oe($e(se(this)));
  }
  toHex(t) {
    return xe(se(this), t);
  }
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  toHex8(t) {
    return ze(se(this), t);
  }
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  toHsv() {
    return W.raw(re(this), "hsv");
  }
  toHsvString() {
    return W.print(re(this), this._format, "hsv");
  }
  toHsl() {
    return W.raw(re(this), "hsl");
  }
  toHslString() {
    return W.print(re(this), this._format, "hsl");
  }
  setAlpha(t) {
    return this._a = yt(t), this._roundA = P(100 * this._a) / 100, this;
  }
  clone() {
    return new b(this.toString());
  }
  lighten(...t) {
    return K("lighten", [this, ...t]);
  }
  brighten(...t) {
    return K("brighten", [this, ...t]);
  }
  darken(...t) {
    return K("darken", [this, ...t]);
  }
  desaturate(...t) {
    return K("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return K("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return K("greyscale", [this, ...t]);
  }
  invert(...t) {
    return K("invert", [this, ...t]);
  }
  spin(...t) {
    return K("spin", [this, ...t]);
  }
  analogous(...t) {
    return ie("analogous", [this, ...t]);
  }
  complement(...t) {
    return ie("complement", [this, ...t]);
  }
  monochromatic(...t) {
    return ie("monochromatic", [this, ...t]);
  }
  splitcomplement(...t) {
    return ie("splitcomplement", [this, ...t]);
  }
  triad(...t) {
    return ie("triad", [this, ...t]);
  }
  tetrad(...t) {
    return ie("tetrad", [this, ...t]);
  }
}
const rt = function() {
  return {
    rgb: new RegExp(`rgb${Ye}`),
    rgba: new RegExp(`rgba${Ze}`)
  };
}();
function Me(e) {
  let t, s, r, o, a;
  return (a = rt.rgb.exec(e)) ? ([t, s, r] = a.splice(1, 3), { r: t, g: s, b: r }) : (a = rt.rgba.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { r: t, g: s, b: r, a: o }) : !1;
}
const Re = b.registerFormat("rgb");
Re.shouldHandleInput = (e) => typeof e == "object" && vt(e) && !Ce(e.r) || Me(e);
Re.toRgb = (e) => typeof e == "object" && Ve(e) || Ve(Me(e));
Re.toRaw = (e) => e;
Re.toString = (e) => Oe(e);
const Pe = b.registerFormat("prgb");
Pe.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = Me(e);
    return t && Ce(t.r);
  }
  return vt(e) && Ce(e.r);
};
Pe.toRgb = (e) => Ve(typeof e == "object" ? e : Me(e));
Pe.toRaw = (e) => $e(e);
Pe.toString = (e) => Oe($e(e));
const D = b.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), Le = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function qs(e) {
  let t;
  if (t = Le.hex3.exec(e)) {
    const [s, r, o] = t.splice(1, 3).map((a) => `${a}${a}`).map((a) => pe(a));
    return { r: s, g: r, b: o, a: 1 };
  }
  if (t = Le.hex6.exec(e)) {
    const [s, r, o] = t.splice(1, 3).map((a) => pe(a));
    return { r: s, g: r, b: o, a: 1 };
  }
  return !1;
}
const ke = (e, t = D.options.shortHex) => `#${D.options.upperCaseHex ? xe(e, t).toUpperCase() : xe(e, t)}`;
D.shouldHandleInput = (e) => Le.hex6.test(e) || Le.hex3.test(e);
D.toRgb = (e) => qs(e);
D.toRaw = (e) => e;
D.toString = (e) => /^hex6?$/.test(D.wanted) ? ke(e) : D.wanted === "hex3" ? ke(e, !0) : be(e) ? D.options.alphaFormat === "hex" ? ke(e) : D.print(D.options.alphaFormat, e) : ke(e);
const E = b.registerFormat("hex8", {
  alias: ["hex4"]
}), Te = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Js(e) {
  let t;
  if (t = Te.hex4.exec(e)) {
    const s = st(`${t[4]}${t[4]}`), [r, o, a] = t.splice(1, 3).map((l) => `${l}${l}`).map((l) => pe(l));
    return { r, g: o, b: a, a: s };
  }
  if (t = Te.hex8.exec(e)) {
    const s = st(t[4]), [r, o, a] = t.splice(1, 3).map((l) => pe(l));
    return { r, g: o, b: a, a: s };
  }
  return !1;
}
const we = (e, t = E.options.shortHex) => `#${E.options.upperCaseHex ? ze(e, t).toUpperCase() : ze(e, t)}`;
E.shouldHandleInput = (e) => Te.hex8.test(e) || Te.hex4.test(e);
E.toRgb = (e) => Js(e);
E.toRaw = (e) => e;
E.toString = (e) => E.wanted === "hex4" ? we(e, !0) : E.wanted === "hex8" ? we(e) : be(e) ? E.options.alphaFormat === "hex" ? we(e) : E.print(E.options.alphaFormat, e) : we(e);
const Be = b.registerFormat("hsl"), ot = function() {
  return {
    hsl: new RegExp(`hsl${Ye}`),
    hsla: new RegExp(`hsla${Ze}`)
  };
}(), Ws = (e) => Q(e.h) && Q(e.s) && Q(e.l);
function Ct(e) {
  const t = B(e.r, 255), s = B(e.g, 255), r = B(e.b, 255), o = e.a || 1, a = q(t, s, r), l = G(t, s, r);
  let n, d;
  const f = (a + l) / 2;
  if (a === l)
    n = 0, d = 0;
  else {
    const i = a - l;
    switch (d = f > 0.5 ? i / (2 - a - l) : i / (a + l), a) {
      case t:
        n = (s - r) / i + (s < r ? 6 : 0);
        break;
      case s:
        n = (r - t) / i + 2;
        break;
      default:
        n = (t - s) / i + 4;
        break;
    }
    n /= 6;
  }
  return { h: n, s: d, l: f, a: o };
}
function at(e) {
  const t = B(e.h, 360), s = B(he(e.s), 100), r = B(he(e.l), 100), o = e.a || 1;
  let a, l, n;
  function d(f, i, c) {
    return c = c < 0 ? c + 1 : c, c = c > 1 ? c - 1 : c, c < 1 / 6 ? f + (i - f) * 6 * c : c < 1 / 2 ? i : c < 2 / 3 ? f + (i - f) * (2 / 3 - c) * 6 : f;
  }
  if (s === 0)
    a = r, l = r, n = r;
  else {
    const f = r < 0.5 ? r * (1 + s) : r + s - r * s, i = 2 * r - f;
    a = d(i, f, t + 1 / 3), l = d(i, f, t), n = d(i, f, t - 1 / 3);
  }
  return { r: a * 255, g: l * 255, b: n * 255, a: o };
}
function Vt(e) {
  let t, s, r, o, a;
  return (a = ot.hsl.exec(e)) ? ([t, s, r] = a.splice(1, 3), { h: t, s, l: r }) : (a = ot.hsla.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { h: t, s, l: r, a: o }) : !1;
}
function Ys(e) {
  let { h: t, s, l: r, a: o } = e;
  return t = P(t * 360), s = P(s * 100), r = P(r * 100), o === 1 ? `hsl(${t}, ${s}%, ${r}%)` : `hsla(${t}, ${s}%, ${r}%, ${o})`;
}
function Zs(e) {
  let { h: t, s, l: r, a: o } = e;
  return t *= 360, { h: t, s, l: r, a: o };
}
Be.shouldHandleInput = (e) => typeof e == "object" && Ws(e) || Vt(e);
Be.toRgb = (e) => typeof e == "object" && at(e) || at(Vt(e));
Be.toRaw = (e) => Zs(Ct(e));
Be.toString = (e) => Ys(Ct(e));
const Fe = b.registerFormat("hsv"), lt = function() {
  return {
    hsv: new RegExp(`hsv${Ye}`),
    hsva: new RegExp(`hsva${Ze}`)
  };
}(), Qs = (e) => Q(e.h) && Q(e.s) && Q(e.v);
function $t(e) {
  const t = B(e.r, 255), s = B(e.g, 255), r = B(e.b, 255), o = e.a || 1, a = q(t, s, r), l = G(t, s, r), n = a - l;
  let d;
  const f = a === 0 ? 0 : n / a, i = a;
  if (a === l)
    d = 0;
  else {
    switch (a) {
      case t:
        d = (s - r) / n + (s < r ? 6 : 0);
        break;
      case s:
        d = (r - t) / n + 2;
        break;
      default:
        d = (t - s) / n + 4;
        break;
    }
    d /= 6;
  }
  return { h: d, s: f, v: i, a: o };
}
function nt(e) {
  const t = B(e.h, 360) * 6, s = B(he(e.s), 100), r = B(he(e.v), 100), o = e.a || 1, a = Math.floor(t), l = t - a, n = r * (1 - s), d = r * (1 - l * s), f = r * (1 - (1 - l) * s), i = a % 6, c = [r, d, n, n, f, r][i], p = [f, r, r, d, n, n][i], y = [n, n, f, r, r, d][i];
  return { r: c * 255, g: p * 255, b: y * 255, a: o };
}
function Ot(e) {
  let t, s, r, o, a;
  return (a = lt.hsv.exec(e)) ? ([t, s, r] = a.splice(1, 3), { h: t, s, v: r }) : (a = lt.hsva.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { h: t, s, v: r, a: o }) : !1;
}
function Xs(e) {
  let { h: t, s, v: r, a: o } = e;
  return t = P(t * 360), s = P(s * 100), r = P(r * 100), o === 1 ? `hsv(${t}, ${s}%, ${r}%)` : `hsva(${t}, ${s}%, ${r}%, ${o})`;
}
function Ks(e) {
  let { h: t, s, v: r, a: o } = e;
  return t *= 360, { h: t, s, v: r, a: o };
}
Fe.shouldHandleInput = (e) => typeof e == "object" && Qs(e) || Ot(e);
Fe.toRgb = (e) => typeof e == "object" && nt(e) || nt(Ot(e));
Fe.toRaw = (e) => Ks($t(e));
Fe.toString = (e) => Xs($t(e));
const Z = b.registerFormat("name", {
  alias: ["toName"]
});
function er(e) {
  const t = {};
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (t[e[s]] = s);
  return t;
}
const ye = {
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
ye.transparent = "00000000";
const tr = er(ye);
Z.shouldHandleInput = (e) => ye[e];
Z.toRgb = (e) => Z.parse(ye[e]).rgba;
Z.toRaw = (e) => e;
Z.toString = (e) => e.a === 0 ? "transparent" : be(e) && Z.wanted === "toName" ? !1 : be(e) && Z.wanted === "name" ? `#${xe(e)}` : be(e) ? Z.print(Z.options.alphaFormat, e) : tr[xe(e, !0)] || !1;
function N(e, t) {
  return new b(e, t);
}
N.equals = (e, t) => b.equals(e, t);
N.registerFormat = (e, t = {}) => b.registerFormat(e, t);
N.fromRatio = (e, t) => b.fromRatio(e, t);
N.mix = (e, t, s) => b.mix(e, t, s);
N.readability = (e, t) => b.readability(e, t);
N.isReadable = (e, t, s) => b.isReadable(e, t, s);
N.mostReadable = (e, t, s) => b.mostReadable(e, t, s);
N.names = ye;
function pa(e, t = "#fff", s = "#000") {
  let r = JSON.parse(JSON.stringify(e)), o = Object.keys(r), a = {};
  for (let l = 0; l < o.length; l++)
    if (typeof r[o[l]] == "string" || typeof r[o[l]] == "number") {
      const n = N(r[o[l]], {});
      n.isValid() && (a[o[l]] = {
        backgroundColor: n.toHexString(!1),
        color: n.isDark() ? t : s
      });
    } else if (typeof r[o[l]] == "object") {
      const n = Object.keys(r[o[l]]), d = {};
      for (let f = 0; f < n.length; f++)
        if (typeof r[o[l]][n[f]] == "string") {
          const i = N(r[o[l]][n[f]], !1);
          i.isValid() && (d[n[f]] = {
            backgroundColor: i.toHexString(!0),
            color: i.isDark() ? t : s
          });
        }
      a[o[l]] = d;
    }
  return a;
}
function ha(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function xa(e, t) {
  const s = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(s) ? Number(s) : t;
}
function ma(e, t) {
  const s = String(e).trim();
  return /^[1-9]\d*$/.test(s) ? Number(s) : t;
}
function ya() {
  typeof window < "u" && document && document.body.click();
}
function va(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const s = 1024, r = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(s));
  return parseFloat((e / Math.pow(s, a)).toFixed(r)) + " " + o[a];
}
function ge(e, t = 2, s = "0") {
  return e.toString().padStart(t, s);
}
function ka(e, t = "/") {
  return [
    ge(e.getMonth() + 1),
    ge(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function zt() {
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
function wa(e, t = "long", s = "english") {
  return zt()[s][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function Sa(e) {
  let t = parseInt(String(e), 10), s = Math.floor(
    parseInt(
      String(Number(t) / (24 * 3600))
    )
  );
  t = t % (24 * 3600);
  let r = Math.floor(
    parseInt(
      String(Number(t) / 3600)
    )
  );
  t %= 3600;
  let o = Math.floor(t / 60);
  t %= 60;
  let a = Math.floor(t), l = s < 10 ? "0" + s : s, n = r < 10 ? "0" + r : r, d = o < 10 ? "0" + o : o, f = a < 10 ? "0" + a : a, i = l === "00" ? "" : l + ":";
  return i += n === "00" ? "" : n + ":", i += d + ":" + f, i;
}
function Ca(e) {
  return new Intl.NumberFormat().format(e);
}
function Y(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Lt() {
  return "0123456789abcdef".split("");
}
var sr = function(t) {
  return rr(t) && !or(t);
};
function rr(e) {
  return !!e && typeof e == "object";
}
function or(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || nr(e);
}
var ar = typeof Symbol == "function" && Symbol.for, lr = ar ? Symbol.for("react.element") : 60103;
function nr(e) {
  return e.$$typeof === lr;
}
function ir(e) {
  return Array.isArray(e) ? [] : {};
}
function me(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? ue(ir(e), e, t) : e;
}
function ur(e, t, s) {
  return e.concat(t).map(function(r) {
    return me(r, s);
  });
}
function dr(e, t) {
  if (!t.customMerge)
    return ue;
  var s = t.customMerge(e);
  return typeof s == "function" ? s : ue;
}
function cr(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function it(e) {
  return Object.keys(e).concat(cr(e));
}
function Tt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function fr(e, t) {
  return Tt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function br(e, t, s) {
  var r = {};
  return s.isMergeableObject(e) && it(e).forEach(function(o) {
    r[o] = me(e[o], s);
  }), it(t).forEach(function(o) {
    fr(e, o) || (Tt(e, o) && s.isMergeableObject(t[o]) ? r[o] = dr(o, s)(e[o], t[o], s) : r[o] = me(t[o], s));
  }), r;
}
function ue(e, t, s) {
  s = s || {}, s.arrayMerge = s.arrayMerge || ur, s.isMergeableObject = s.isMergeableObject || sr, s.cloneUnlessOtherwiseSpecified = me;
  var r = Array.isArray(t), o = Array.isArray(e), a = r === o;
  return a ? r ? s.arrayMerge(e, t, s) : br(e, t, s) : me(t, s);
}
ue.all = function(t, s) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, o) {
    return ue(r, o, s);
  }, {});
};
var gr = ue, pr = gr;
const hr = pr;
function Va(e) {
  return Object.keys(e).length > 0 ? hr(u, e) : u;
}
function xr() {
  const e = Lt(), t = 0, s = 15, r = e[Y(t, s)] + e[Y(t, s)], o = e[Y(t, s)] + e[Y(t, s)], a = e[Y(t, s)] + e[Y(t, s)];
  return "#" + r + o + a;
}
function $a(e = "#fff", t = "#000") {
  let s = { backgroundColor: "", color: "" }, r = N(xr(), {}), o = r.isDark();
  return s.backgroundColor = "#" + String(r.toHex(!1)), s.color = o ? e : t, s;
}
function Oa() {
  const e = Lt(), t = 0, s = 15, r = e[Y(t, s)], o = e[Y(t, s)], a = e[Y(t, s)];
  return "#" + r + o + a;
}
function za(e = 10) {
  let t = "";
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = s.length;
  for (let o = 0; o < Number(e); o++)
    t += s.charAt(Math.floor(Math.random() * r));
  return t;
}
function La(e, t = "-") {
  let s = e || "", r = t || "-";
  return s.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, r).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, r);
}
function Ta(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, s) {
    return s === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function ja(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function Aa(e, t = "short", s = "english", r = "AM", o = "PM") {
  var a = new Date(Number(e) * 1e3), l = zt(), n = l[s][t], d = a.getFullYear(), f = n[a.getMonth()], i = a.getDate(), c = a.getHours(), p = a.getMinutes(), y = a.getSeconds(), L = c >= 12 ? o : r;
  return c = c % 12, c = c === 0 ? 12 : c, f + " " + ge(i) + ", " + d + " " + c + ":" + ge(p) + ":" + ge(y) + " " + L;
}
function Ma(e) {
  return e.filter((t, s, r) => r.indexOf(t) === s);
}
const mr = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], Ra = mr, yr = [
  "button",
  "submit",
  "reset"
], jt = yr, vr = [
  "light",
  "dark"
], kr = vr, wr = [
  "up",
  "down",
  "left",
  "right",
  ""
], Pa = wr, Sr = [
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
], Ba = Sr, Cr = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], Fa = Cr, Vr = [
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
  "10x",
  null
], _a = Vr, $r = [1, 2, 3, 4, 5, 6], Ia = $r, Or = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], Da = Or, zr = [
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
], Lr = zr, Tr = [
  "ul",
  "ol"
], jr = Tr, Ar = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], Ea = Ar, Mr = $({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: u.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: u.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: u.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: u.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: u.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: u.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: u.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: u.defaults.VvAnchor.palette
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    return { classes: h(() => {
      var o, a, l, n, d, f, i, c, p, y, L, w, C, x, v, k;
      let r = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && r.push(t.buttons.blockBase()), e.buttonSize !== "" && ((l = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : l[e.buttonSize]) && r.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((n = t == null ? void 0 : t.buttons) != null && n.fabBase() && r.push(t.buttons.fabBase()), e.buttonSize !== "" && ((f = (d = t == null ? void 0 : t.buttons) == null ? void 0 : d.fabSizes) == null ? void 0 : f[e.buttonSize]) && r.push(t.buttons.fabSizes[e.buttonSize])) : ((i = t == null ? void 0 : t.buttons) != null && i.base() && r.push(t.buttons.base()), e.buttonSize !== "" && ((p = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.sizes) == null ? void 0 : p[e.buttonSize]) && r.push(t.buttons.sizes[e.buttonSize])), (w = (L = (y = t == null ? void 0 : t.buttons) == null ? void 0 : y.palettes) == null ? void 0 : L[e.palette]) != null && w[e.color] && r.push(t.buttons.palettes[e.palette][e.color])) : ((C = t == null ? void 0 : t.anchors) != null && C.base() && r.push(t.anchors.base()), (k = (v = (x = t == null ? void 0 : t.anchors) == null ? void 0 : x.palettes) == null ? void 0 : v[e.palette]) != null && k[e.color] && r.push(t.anchors.palettes[e.palette][e.color])), r.join(" ").trim();
    }) };
  }
}), M = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Rr = ["href"], Pr = ["href"];
function Br(e, t, s, r, o, a) {
  return e.external ? (m(), V("a", {
    key: 0,
    href: e.href,
    class: g(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    H(e.$slots, "default")
  ], 10, Rr)) : (m(), V("a", {
    key: 1,
    href: e.href,
    class: g(e.classes)
  }, [
    H(e.$slots, "default")
  ], 10, Pr));
}
const Ha = /* @__PURE__ */ M(Mr, [["render", Br]]), Fr = $({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: u.defaults.VvButton.block
    },
    color: {
      type: String,
      default: u.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: u.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: u.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: u.defaults.VvButton.size
    },
    type: {
      type: String,
      default: u.defaults.VvButton.type,
      validator: (e) => jt.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u, s = e.type;
    let r = h(() => {
      var a, l, n, d, f, i, c, p, y, L, w, C;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((a = t == null ? void 0 : t.buttons) != null && a.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((n = (l = t == null ? void 0 : t.buttons) == null ? void 0 : l.blockSizes) == null ? void 0 : n[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((d = t == null ? void 0 : t.buttons) != null && d.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((i = (f = t == null ? void 0 : t.buttons) == null ? void 0 : f.fabSizes) == null ? void 0 : i[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((c = t == null ? void 0 : t.buttons) != null && c.base() && o.push(t.buttons.base()), e.size !== "" && ((y = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : y[e.size]) && o.push(t.buttons.sizes[e.size])), (C = (w = (L = t == null ? void 0 : t.buttons) == null ? void 0 : L.palettes) == null ? void 0 : w[e.palette]) != null && C[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: s, classes: r };
  }
}), _r = ["type"];
function Ir(e, t, s, r, o, a) {
  return m(), V("button", {
    type: e.btnType,
    class: g(e.classes)
  }, [
    H(e.$slots, "default")
  ], 10, _r);
}
const Dr = /* @__PURE__ */ M(Fr, [["render", Ir]]), Er = $({
  name: "VvColorModeButton",
  components: {
    VvButton: Dr
  },
  props: {
    mode: {
      type: String,
      default: u.defaults.VvColorModeButton.mode,
      validator: (e) => kr.includes(e)
    },
    color: {
      type: String,
      default: u.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: u.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: u.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: u.colorModes.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: u.colorModes.dark.hex
    },
    groundLight: {
      type: String,
      default: u.colorModes.light.ground
    },
    groundLightHex: {
      type: String,
      default: u.colorModes.light.hex
    },
    textDark: {
      type: String,
      default: u.colorModes.dark.text
    },
    textLight: {
      type: String,
      default: u.colorModes.light.text
    },
    titleDark: {
      type: String,
      default: u.colorModes.dark.title
    },
    titleLight: {
      type: String,
      default: u.colorModes.light.title
    },
    type: {
      type: String,
      default: u.defaults.VvColorModeButton.type,
      validator: (e) => jt.includes(e)
    }
  },
  setup(e) {
    const t = A(e.mode), s = h(() => t.value === "dark" ? "sun" : "moon"), r = h(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return fe(() => {
      typeof window < "u" && document && (document.documentElement.classList.add(
        e.groundLight,
        e.groundDark,
        e.textLight,
        e.textDark
      ), document.body.classList.add(
        e.textLight,
        e.textDark
      ), t.value === "light" ? (document.documentElement.classList.remove("dark"), document.documentElement.style.backgroundColor = e.groundLightHex) : t.value === "dark" && (document.documentElement.classList.add("dark"), document.documentElement.style.backgroundColor = e.groundDarkHex));
    }), { mode: t, icon: s, title: r };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), Hr = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Nr = /* @__PURE__ */ T("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Ur = [
  Nr
], Gr = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, qr = /* @__PURE__ */ T("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), Jr = [
  qr
];
function Wr(e, t, s, r, o, a) {
  const l = oe("VvButton");
  return m(), U(l, {
    title: e.title,
    onClick: t[0] || (t[0] = (n) => e.toggleColorMode(n)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: F(() => [
      e.icon === "moon" ? (m(), V("svg", Hr, Ur)) : ee("", !0),
      e.icon === "sun" ? (m(), V("svg", Gr, Jr)) : ee("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const Na = /* @__PURE__ */ M(Er, [["render", Wr]]), Yr = $({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: u.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: u.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: u.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: u.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: u.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: u.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: u.defaults.VvEl.textColor
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    return { classes: h(() => {
      var o, a, l, n, d, f, i, c, p;
      let r = [];
      return (l = (a = (o = t == null ? void 0 : t.borders) == null ? void 0 : o.palettes) == null ? void 0 : a[e.borderPalette]) != null && l[e.borderColor] && r.push(t.borders.palettes[e.borderPalette][e.borderColor]), (f = (d = (n = t == null ? void 0 : t.grounds) == null ? void 0 : n.palettes) == null ? void 0 : d[e.groundPalette]) != null && f[e.groundColor] && r.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (p = (c = (i = t == null ? void 0 : t.text) == null ? void 0 : i.palettes) == null ? void 0 : c[e.textPalette]) != null && p[e.textColor] && r.push(t.text.palettes[e.textPalette][e.textColor]), r.join(" ").trim();
    }) };
  }
});
function Zr(e, t, s, r, o, a) {
  return m(), U(pt(e.tag), {
    class: g(e.classes)
  }, {
    default: F(() => [
      H(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Qr = /* @__PURE__ */ M(Yr, [["render", Zr]]), Xr = $({
  components: { VvEl: Qr },
  props: {
    displayError: {
      type: Boolean,
      default: u.defaults.VvFormGroup.displayError
    },
    displayHelp: {
      type: Boolean,
      default: u.defaults.VvFormGroup.displayHelp
    },
    displaySuccess: {
      type: Boolean,
      default: u.defaults.VvFormGroup.displaySuccess
    },
    errorClasses: {
      type: String,
      default: u.defaults.VvFormGroup.errorClasses
    },
    errorText: {
      type: String,
      default: u.defaults.VvFormGroup.errorText
    },
    errorTextColor: {
      type: String,
      default: u.defaults.VvFormGroup.errorTextColor
    },
    errorTextPalette: {
      type: String,
      default: u.defaults.VvFormGroup.errorTextPalette
    },
    helpClasses: {
      type: String,
      default: u.defaults.VvFormGroup.helpClasses
    },
    helpText: {
      type: String,
      default: u.defaults.VvFormGroup.helpText
    },
    helpTextColor: {
      type: String,
      default: u.defaults.VvFormGroup.helpTextColor
    },
    helpTextPalette: {
      type: String,
      default: u.defaults.VvFormGroup.helpTextPalette
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
      default: u.defaults.VvFormGroup.labelClasses
    },
    labelTextColor: {
      type: String,
      default: u.defaults.VvFormGroup.labelTextColor
    },
    labelTextPalette: {
      type: String,
      default: u.defaults.VvFormGroup.labelTextPalette
    },
    slotParentClasses: {
      type: String,
      default: u.defaults.VvFormGroup.slotParentClasses
    },
    successClasses: {
      type: String,
      default: u.defaults.VvFormGroup.successClasses
    },
    successText: {
      type: String,
      default: u.defaults.VvFormGroup.successText
    },
    successTextColor: {
      type: String,
      default: u.defaults.VvFormGroup.successTextColor
    },
    successTextPalette: {
      type: String,
      default: u.defaults.VvFormGroup.successTextPalette
    },
    wrapperClasses: {
      type: String,
      default: u.defaults.VvFormGroup.wrapperClasses
    }
  }
});
function Kr(e, t, s, r, o, a) {
  const l = oe("VvEl");
  return m(), V("div", {
    class: g(e.wrapperClasses)
  }, [
    Ue(l, {
      tag: "label",
      for: e.labelFor,
      "text-palette": e.labelTextPalette,
      "text-color": e.labelTextColor,
      class: g(e.labelClasses)
    }, {
      default: F(() => [
        ce(ae(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "text-palette", "text-color", "class"]),
    T("div", {
      class: g(e.slotParentClasses)
    }, [
      H(e.$slots, "default")
    ], 2),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (m(), V("div", {
      key: 0,
      class: g(e.helpClasses)
    }, "\xA0 ", 2)) : ee("", !0),
    e.displayHelp ? (m(), U(l, {
      key: 1,
      tag: "div",
      "text-palette": e.helpTextPalette,
      "text-color": e.helpTextColor,
      class: g(e.helpClasses)
    }, {
      default: F(() => [
        ce(ae(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : ee("", !0),
    e.displaySuccess ? (m(), U(l, {
      key: 2,
      tag: "div",
      "text-palette": e.successTextPalette,
      "text-color": e.successTextColor,
      class: g(e.successClasses)
    }, {
      default: F(() => [
        ce(ae(e.successText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : ee("", !0),
    e.displayError === !0 ? (m(), U(l, {
      key: 3,
      tag: "div",
      "text-palette": e.errorTextPalette,
      "text-color": e.errorTextColor,
      class: g(e.errorClasses)
    }, {
      default: F(() => [
        ce(ae(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class"])) : ee("", !0)
  ], 2);
}
const Ua = /* @__PURE__ */ M(Xr, [["render", Kr]]), Xe = $({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: u.defaults.VvCheckbox.color
    },
    checked: {
      type: Boolean,
      default: u.defaults.VvCheckbox.checked
    },
    darkCheckHex: {
      type: String,
      default: u.defaults.VvCheckbox.darkCheckHex
    },
    lightCheckHex: {
      type: String,
      default: u.defaults.VvCheckbox.lightCheckHex
    },
    palette: {
      type: String,
      default: u.defaults.VvCheckbox.palette
    },
    size: {
      type: String,
      default: u.defaults.VvCheckbox.size
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    let s = h(() => {
      var d, f, i, c, p, y;
      let n = [];
      return (d = t == null ? void 0 : t.checkboxes) != null && d.base() && n.push(t.checkboxes.base()), e.size !== "" && ((i = (f = t == null ? void 0 : t.checkboxes) == null ? void 0 : f.sizes) == null ? void 0 : i[e.size]) && n.push(t.checkboxes.sizes[e.size]), (y = (p = (c = t == null ? void 0 : t.checkboxes) == null ? void 0 : c.palettes) == null ? void 0 : p[e.palette]) != null && y[e.color] && n.push(t.checkboxes.palettes[e.palette][e.color]), n.join(" ").trim();
    });
    function r(n) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16'  fill='%23",
        n,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let o = h(() => r(e.darkCheckHex.replace(/#/g, ""))), a = h(() => r(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: s,
      darkCheckCssUrl: o,
      handleCheckboxChange: (n) => n.target.checked === !0,
      lightCheckCssUrl: a
    };
  }
}), ut = () => {
  ht((e) => ({
    ea570cc4: e.lightCheckCssUrl,
    "35c6a93e": e.darkCheckCssUrl
  }));
}, dt = Xe.setup;
Xe.setup = dt ? (e, t) => (ut(), dt(e, t)) : ut;
const eo = Xe;
const to = ["checked", "data-test"];
function so(e, t, s, r, o, a) {
  return m(), V("input", {
    type: "checkbox",
    class: g(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleCheckboxChange(l))),
    "data-test": e.darkCheckCssUrl + e.lightCheckCssUrl
  }, null, 42, to);
}
const Ga = /* @__PURE__ */ M(eo, [["render", so], ["__scopeId", "data-v-8a20db38"]]), ro = $({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: u.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: u.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: u.defaults.VvInput.size
    },
    type: {
      type: String,
      default: u.defaults.VvInput.type,
      validator: (e) => Lr.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e, t) {
    const s = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    return { classes: h(() => {
      var l, n, d, f, i, c;
      let a = [];
      return (l = s == null ? void 0 : s.inputs) != null && l.base() && a.push(s.inputs.base()), e.size !== "" && ((d = (n = s == null ? void 0 : s.inputs) == null ? void 0 : n.sizes) == null ? void 0 : d[e.size]) && a.push(s.inputs.sizes[e.size]), (c = (i = (f = s == null ? void 0 : s.inputs) == null ? void 0 : f.palettes) == null ? void 0 : i[e.palette]) != null && c[e.color] && a.push(s.inputs.palettes[e.palette][e.color]), a.join(" ").trim();
    }), handleInputChange: (a) => a.target.value };
  }
}), oo = ["type", "value"];
function ao(e, t, s, r, o, a) {
  return m(), V("input", {
    type: e.type,
    class: g(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleInputChange(l)))
  }, null, 42, oo);
}
const qa = /* @__PURE__ */ M(ro, [["render", ao]]), Ke = $({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: u.defaults.VvRadio.color
    },
    checked: {
      type: Boolean,
      default: u.defaults.VvRadio.checked
    },
    darkRadioHex: {
      type: String,
      default: u.defaults.VvRadio.darkRadioHex
    },
    lightRadioHex: {
      type: String,
      default: u.defaults.VvRadio.lightRadioHex
    },
    palette: {
      type: String,
      default: u.defaults.VvRadio.palette
    },
    size: {
      type: String,
      default: u.defaults.VvRadio.size
    },
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u, s = A(e.checked);
    let r = h(() => {
      var f, i, c, p, y, L;
      let d = [];
      return (f = t == null ? void 0 : t.radios) != null && f.base() && d.push(t.radios.base()), e.size !== "" && ((c = (i = t == null ? void 0 : t.radios) == null ? void 0 : i.sizes) == null ? void 0 : c[e.size]) && d.push(t.radios.sizes[e.size]), (L = (y = (p = t == null ? void 0 : t.radios) == null ? void 0 : p.palettes) == null ? void 0 : y[e.palette]) != null && L[e.color] && d.push(t.radios.palettes[e.palette][e.color]), d.join(" ").trim();
    });
    function o(d) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16' fill='%23",
        d,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let a = h(() => o(e.darkRadioHex.replace(/#/g, ""))), l = h(() => o(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: r,
      darkRadioCssUrl: a,
      handleRadioChange: (d) => {
        const f = d.target;
        return s.value = !1, f.checked === !0 && (s.value = !0), s.value;
      },
      lightRadioCssUrl: l
    };
  }
}), ct = () => {
  ht((e) => ({
    "5fe7784f": e.lightRadioCssUrl,
    "012a4c33": e.darkRadioCssUrl
  }));
}, ft = Ke.setup;
Ke.setup = ft ? (e, t) => (ct(), ft(e, t)) : ct;
const lo = Ke;
const no = ["value", "checked", "data-test"];
function io(e, t, s, r, o, a) {
  return m(), V("input", {
    type: "radio",
    class: g(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleRadioChange(l))),
    "data-test": e.darkRadioCssUrl + e.lightRadioCssUrl
  }, null, 42, no);
}
const Ja = /* @__PURE__ */ M(lo, [["render", io], ["__scopeId", "data-v-e39a142a"]]), uo = $({
  name: "VvList",
  props: {
    listStyleTypeClass: {
      type: String,
      default: u.defaults.VvList.listStyleTypeClass
    },
    markerColor: {
      type: String,
      default: u.defaults.VvList.markerColor
    },
    markerPalette: {
      type: String,
      default: u.defaults.VvList.markerPalette
    },
    tag: {
      type: String,
      default: u.defaults.VvList.tag,
      validator: (e) => jr.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    let s = t == null ? void 0 : t.lists.base();
    return { classes: h(() => {
      var a, l, n;
      let o = [s];
      return (n = (l = (a = t == null ? void 0 : t.lists) == null ? void 0 : a.palettes) == null ? void 0 : l[e.markerPalette]) != null && n[String(e.markerColor)] && o.push(t.lists.palettes[e.markerPalette][String(e.markerColor)]), o.join(" ").trim();
    }) };
  }
});
function co(e, t, s, r, o, a) {
  return m(), U(pt(e.tag), {
    class: g([e.listStyleTypeClass, e.classes]),
    role: "list"
  }, {
    default: F(() => [
      H(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Wa = /* @__PURE__ */ M(uo, [["render", co]]), fo = $({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: u.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: u.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: u.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: u.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: u.defaults.VvListItem.symbolPalette
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    let s = t == null ? void 0 : t.text.base(), r = h(() => {
      var l, n, d;
      let a = [s];
      return (d = (n = (l = t == null ? void 0 : t.text) == null ? void 0 : l.palettes) == null ? void 0 : n[e.palette]) != null && d[e.color] && a.push(t.text.palettes[e.palette][e.color]), a.join(" ").trim();
    }), o = h(() => {
      var l, n, d;
      let a = [];
      return (d = (n = (l = t == null ? void 0 : t.text) == null ? void 0 : l.palettes) == null ? void 0 : n[e.symbolPalette]) != null && d[e.symbolColor] && a.push(t.text.palettes[e.symbolPalette][e.symbolColor]), a.join(" ").trim();
    });
    return { classes: r, symbolClasses: o };
  }
});
function bo(e, t, s, r, o, a) {
  return m(), V("li", {
    class: g(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (m(), V("span", {
      key: 0,
      class: g([e.classes])
    }, [
      H(e.$slots, "default")
    ], 2)) : H(e.$slots, "default", { key: 1 })
  ], 2);
}
const Ya = /* @__PURE__ */ M(fo, [["render", bo]]), go = $({
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
}), po = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function ho(e, t, s, r, o, a) {
  return m(), V("svg", po, [
    T("path", {
      class: g(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    T("path", {
      class: g(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    T("path", {
      class: g(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    T("path", {
      class: g(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    T("path", {
      class: g(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    T("path", {
      class: g(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    T("path", {
      class: g(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Za = /* @__PURE__ */ M(go, [["render", ho]]), xo = $({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), mo = /* @__PURE__ */ T("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), yo = [
  mo
];
function vo(e, t, s, r, o, a) {
  return m(), V("svg", {
    class: g(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, yo, 2);
}
const Qa = /* @__PURE__ */ M(xo, [["render", vo]]), ko = $({
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
}), wo = ["fill"], So = ["fill"];
function Co(e, t, s, r, o, a) {
  return m(), V("svg", {
    class: g(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    T("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: g(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, wo),
    T("g", null, [
      T("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: g(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, So)
    ])
  ], 2);
}
const Xa = /* @__PURE__ */ M(ko, [["render", Co]]);
function J(e, t, ...s) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...s) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, J), r;
}
var qe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qe || {}), Vo = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Vo || {});
function de({ visible: e = !0, features: t = 0, ourProps: s, theirProps: r, ...o }) {
  var a;
  let l = $o(r, s), n = Object.assign(o, { props: l });
  if (e || t & 2 && l.static)
    return He(n);
  if (t & 1) {
    let d = (a = l.unmount) == null || a ? 0 : 1;
    return J(d, { [0]() {
      return null;
    }, [1]() {
      return He({ ...o, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return He(n);
}
function He({ props: e, attrs: t, slots: s, slot: r, name: o }) {
  var a;
  let { as: l, ...n } = et(e, ["unmount", "static"]), d = (a = s.default) == null ? void 0 : a.call(s, r), f = {};
  if (r) {
    let i = !1, c = [];
    for (let [p, y] of Object.entries(r))
      typeof y == "boolean" && (i = !0), y === !0 && c.push(p);
    i && (f["data-headlessui-state"] = c.join(" "));
  }
  if (l === "template") {
    if (d = At(d != null ? d : []), Object.keys(n).length > 0 || Object.keys(t).length > 0) {
      let [i, ...c] = d != null ? d : [];
      if (!zo(i) || c.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(n).concat(Object.keys(t)).sort((p, y) => p.localeCompare(y)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
      return Ht(i, Object.assign({}, n, f));
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return Ge(l, Object.assign({}, n, f), { default: () => d });
}
function At(e) {
  return e.flatMap((t) => t.type === Se ? At(t.children) : [t]);
}
function $o(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, s = {};
  for (let r of e)
    for (let o in r)
      o.startsWith("on") && typeof r[o] == "function" ? (s[o] != null || (s[o] = []), s[o].push(r[o])) : t[o] = r[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(s).map((r) => [r, void 0])));
  for (let r in s)
    Object.assign(t, { [r](o, ...a) {
      let l = s[r];
      for (let n of l) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        n(o, ...a);
      }
    } });
  return t;
}
function Oo(e) {
  let t = Object.assign({}, e);
  for (let s in t)
    t[s] === void 0 && delete t[s];
  return t;
}
function et(e, t = []) {
  let s = Object.assign({}, e);
  for (let r of t)
    r in s && delete s[r];
  return s;
}
function zo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Lo = 0;
function To() {
  return ++Lo;
}
function _e() {
  return To();
}
var j = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(j || {});
function jo(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function Ao(e, t) {
  let s = t.resolveItems();
  if (s.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), o = r != null ? r : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return s.findIndex((l) => !t.resolveDisabled(l));
      case 1: {
        let l = s.slice().reverse().findIndex((n, d, f) => o !== -1 && f.length - d - 1 >= o ? !1 : !t.resolveDisabled(n));
        return l === -1 ? l : s.length - 1 - l;
      }
      case 2:
        return s.findIndex((l, n) => n <= o ? !1 : !t.resolveDisabled(l));
      case 3: {
        let l = s.slice().reverse().findIndex((n) => !t.resolveDisabled(n));
        return l === -1 ? l : s.length - 1 - l;
      }
      case 4:
        return s.findIndex((l) => t.resolveId(l) === e.id);
      case 5:
        return null;
      default:
        jo(e);
    }
  })();
  return a === -1 ? r : a;
}
function z(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Mt = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Mo() {
  return S(Mt, null);
}
function Ro(e) {
  xt(Mt, e);
}
function bt(e, t) {
  if (e)
    return e;
  let s = t != null ? t : "button";
  if (typeof s == "string" && s.toLowerCase() === "button")
    return "button";
}
function Po(e, t) {
  let s = A(bt(e.value.type, e.value.as));
  return fe(() => {
    s.value = bt(e.value.type, e.value.as);
  }), Je(() => {
    var r;
    s.value || !z(t) || z(t) instanceof HTMLButtonElement && !((r = z(t)) != null && r.hasAttribute("type")) && (s.value = "button");
  }), s;
}
const Rt = typeof window > "u" || typeof document > "u";
function Bo(e) {
  if (Rt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = z(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let gt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Fo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Fo || {}), _o = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(_o || {}), Io = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Io || {}), tt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(tt || {});
function Pt(e, t = 0) {
  var s;
  return e === ((s = Bo(e)) == null ? void 0 : s.body) ? !1 : J(t, { [0]() {
    return e.matches(gt);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(gt))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function Do(e, t = (s) => s) {
  return e.slice().sort((s, r) => {
    let o = t(s), a = t(r);
    if (o === null || a === null)
      return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Ne(e, t, s) {
  Rt || Je((r) => {
    document.addEventListener(e, t, s), r(() => document.removeEventListener(e, t, s));
  });
}
function Eo(e, t, s = h(() => !0)) {
  function r(a, l) {
    if (!s.value || a.defaultPrevented)
      return;
    let n = l(a);
    if (n === null || !n.getRootNode().contains(n))
      return;
    let d = function f(i) {
      return typeof i == "function" ? f(i()) : Array.isArray(i) || i instanceof Set ? i : [i];
    }(e);
    for (let f of d) {
      if (f === null)
        continue;
      let i = f instanceof HTMLElement ? f : z(f);
      if (i != null && i.contains(n))
        return;
    }
    return !Pt(n, tt.Loose) && n.tabIndex !== -1 && a.preventDefault(), t(a, n);
  }
  let o = A(null);
  Ne("mousedown", (a) => {
    var l, n;
    s.value && (o.value = ((n = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : n[0]) || a.target);
  }, !0), Ne("click", (a) => {
    !o.value || (r(a, () => o.value), o.value = null);
  }, !0), Ne("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Bt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Bt || {});
let Ho = $({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: s }) {
  return () => {
    let { features: r, ...o } = e, a = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return de({ ourProps: a, theirProps: o, slot: {}, attrs: s, slots: t, name: "Hidden" });
  };
} });
function Ft(e = {}, t = null, s = []) {
  for (let [r, o] of Object.entries(e))
    It(s, _t(t, r), o);
  return s;
}
function _t(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function It(e, t, s) {
  if (Array.isArray(s))
    for (let [r, o] of s.entries())
      It(e, _t(t, r.toString()), o);
  else
    s instanceof Date ? e.push([t, s.toISOString()]) : typeof s == "boolean" ? e.push([t, s ? "1" : "0"]) : typeof s == "string" ? e.push([t, s]) : typeof s == "number" ? e.push([t, `${s}`]) : s == null ? e.push([t, ""]) : Ft(s, t, e);
}
function No(e, t, s) {
  let r = A(s == null ? void 0 : s.value), o = h(() => e.value !== void 0);
  return [h(() => o.value ? e.value : r.value), function(a) {
    return o.value || (r.value = a), t == null ? void 0 : t(a);
  }];
}
function Uo(e, t) {
  return e === t;
}
var Go = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Go || {}), qo = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(qo || {}), Jo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Jo || {});
function Wo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Dt = Symbol("ListboxContext");
function ve(e) {
  let t = S(Dt, null);
  if (t === null) {
    let s = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, ve), s;
  }
  return t;
}
let Yo = $({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Uo }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: s, emit: r }) {
  let o = A(1), a = A(null), l = A(null), n = A(null), d = A([]), f = A(""), i = A(null), c = A(1);
  function p(x = (v) => v) {
    let v = i.value !== null ? d.value[i.value] : null, k = Do(x(d.value.slice()), (_) => z(_.dataRef.domRef)), O = v ? k.indexOf(v) : null;
    return O === -1 && (O = null), { options: k, activeOptionIndex: O };
  }
  let y = h(() => e.multiple ? 1 : 0), [L, w] = No(h(() => e.modelValue), (x) => r("update:modelValue", x), h(() => e.defaultValue)), C = { listboxState: o, value: L, mode: y, compare(x, v) {
    if (typeof e.by == "string") {
      let k = e.by;
      return (x == null ? void 0 : x[k]) === (v == null ? void 0 : v[k]);
    }
    return e.by(x, v);
  }, orientation: h(() => e.horizontal ? "horizontal" : "vertical"), labelRef: a, buttonRef: l, optionsRef: n, disabled: h(() => e.disabled), options: d, searchQuery: f, activeOptionIndex: i, activationTrigger: c, closeListbox() {
    e.disabled || o.value !== 1 && (o.value = 1, i.value = null);
  }, openListbox() {
    e.disabled || o.value !== 0 && (o.value = 0);
  }, goToOption(x, v, k) {
    if (e.disabled || o.value === 1)
      return;
    let O = p(), _ = Ao(x === R.Specific ? { focus: R.Specific, id: v } : { focus: x }, { resolveItems: () => O.options, resolveActiveIndex: () => O.activeOptionIndex, resolveId: (ne) => ne.id, resolveDisabled: (ne) => ne.dataRef.disabled });
    f.value = "", i.value = _, c.value = k != null ? k : 1, d.value = O.options;
  }, search(x) {
    if (e.disabled || o.value === 1)
      return;
    let v = f.value !== "" ? 0 : 1;
    f.value += x.toLowerCase();
    let k = (i.value !== null ? d.value.slice(i.value + v).concat(d.value.slice(0, i.value + v)) : d.value).find((_) => _.dataRef.textValue.startsWith(f.value) && !_.dataRef.disabled), O = k ? d.value.indexOf(k) : -1;
    O === -1 || O === i.value || (i.value = O, c.value = 1);
  }, clearSearch() {
    e.disabled || o.value !== 1 && f.value !== "" && (f.value = "");
  }, registerOption(x, v) {
    let k = p((O) => [...O, { id: x, dataRef: v }]);
    d.value = k.options, i.value = k.activeOptionIndex;
  }, unregisterOption(x) {
    let v = p((k) => {
      let O = k.findIndex((_) => _.id === x);
      return O !== -1 && k.splice(O, 1), k;
    });
    d.value = v.options, i.value = v.activeOptionIndex, c.value = 1;
  }, select(x) {
    e.disabled || w(J(y.value, { [0]: () => x, [1]: () => {
      let v = I(C.value.value).slice(), k = I(x), O = v.findIndex((_) => C.compare(k, I(_)));
      return O === -1 ? v.push(k) : v.splice(O, 1), v;
    } }));
  } };
  return Eo([l, n], (x, v) => {
    var k;
    C.closeListbox(), Pt(v, tt.Loose) || (x.preventDefault(), (k = z(l)) == null || k.focus());
  }, h(() => o.value === 0)), xt(Dt, C), Ro(h(() => J(o.value, { [0]: je.Open, [1]: je.Closed }))), () => {
    let { name: x, modelValue: v, disabled: k, ...O } = e, _ = { open: o.value === 0, disabled: k, value: L.value };
    return Ge(Se, [...x != null && L.value != null ? Ft({ [x]: L.value }).map(([ne, Et]) => Ge(Ho, Oo({ features: Bt.Hidden, key: ne, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: ne, value: Et }))) : [], de({ ourProps: {}, theirProps: { ...s, ...et(O, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: _, slots: t, attrs: s, name: "Listbox" })]);
  };
} }), Zo = $({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" } }, setup(e, { attrs: t, slots: s }) {
  let r = ve("ListboxLabel"), o = `headlessui-listbox-label-${_e()}`;
  function a() {
    var l;
    (l = z(r.buttonRef)) == null || l.focus({ preventScroll: !0 });
  }
  return () => {
    let l = { open: r.listboxState.value === 0, disabled: r.disabled.value }, n = { id: o, ref: r.labelRef, onClick: a };
    return de({ ourProps: n, theirProps: e, slot: l, attrs: t, slots: s, name: "ListboxLabel" });
  };
} }), Qo = $({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" } }, setup(e, { attrs: t, slots: s, expose: r }) {
  let o = ve("ListboxButton"), a = `headlessui-listbox-button-${_e()}`;
  r({ el: o.buttonRef, $el: o.buttonRef });
  function l(i) {
    switch (i.key) {
      case j.Space:
      case j.Enter:
      case j.ArrowDown:
        i.preventDefault(), o.openListbox(), le(() => {
          var c;
          (c = z(o.optionsRef)) == null || c.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.First);
        });
        break;
      case j.ArrowUp:
        i.preventDefault(), o.openListbox(), le(() => {
          var c;
          (c = z(o.optionsRef)) == null || c.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.Last);
        });
        break;
    }
  }
  function n(i) {
    switch (i.key) {
      case j.Space:
        i.preventDefault();
        break;
    }
  }
  function d(i) {
    o.disabled.value || (o.listboxState.value === 0 ? (o.closeListbox(), le(() => {
      var c;
      return (c = z(o.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
    })) : (i.preventDefault(), o.openListbox(), Wo(() => {
      var c;
      return (c = z(o.optionsRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
    })));
  }
  let f = Po(h(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var i, c;
    let p = { open: o.listboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, y = { ref: o.buttonRef, id: a, type: f.value, "aria-haspopup": !0, "aria-controls": (i = z(o.optionsRef)) == null ? void 0 : i.id, "aria-expanded": o.disabled.value ? void 0 : o.listboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(c = z(o.labelRef)) == null ? void 0 : c.id, a].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: l, onKeyup: n, onClick: d };
    return de({ ourProps: y, theirProps: e, slot: p, attrs: t, slots: s, name: "ListboxButton" });
  };
} }), Xo = $({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: s, expose: r }) {
  let o = ve("ListboxOptions"), a = `headlessui-listbox-options-${_e()}`, l = A(null);
  r({ el: o.optionsRef, $el: o.optionsRef });
  function n(i) {
    switch (l.value && clearTimeout(l.value), i.key) {
      case j.Space:
        if (o.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), o.search(i.key);
      case j.Enter:
        if (i.preventDefault(), i.stopPropagation(), o.activeOptionIndex.value !== null) {
          let c = o.options.value[o.activeOptionIndex.value];
          o.select(c.dataRef.value);
        }
        o.mode.value === 0 && (o.closeListbox(), le(() => {
          var c;
          return (c = z(o.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
        }));
        break;
      case J(o.orientation.value, { vertical: j.ArrowDown, horizontal: j.ArrowRight }):
        return i.preventDefault(), i.stopPropagation(), o.goToOption(R.Next);
      case J(o.orientation.value, { vertical: j.ArrowUp, horizontal: j.ArrowLeft }):
        return i.preventDefault(), i.stopPropagation(), o.goToOption(R.Previous);
      case j.Home:
      case j.PageUp:
        return i.preventDefault(), i.stopPropagation(), o.goToOption(R.First);
      case j.End:
      case j.PageDown:
        return i.preventDefault(), i.stopPropagation(), o.goToOption(R.Last);
      case j.Escape:
        i.preventDefault(), i.stopPropagation(), o.closeListbox(), le(() => {
          var c;
          return (c = z(o.buttonRef)) == null ? void 0 : c.focus({ preventScroll: !0 });
        });
        break;
      case j.Tab:
        i.preventDefault(), i.stopPropagation();
        break;
      default:
        i.key.length === 1 && (o.search(i.key), l.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  let d = Mo(), f = h(() => d !== null ? d.value === je.Open : o.listboxState.value === 0);
  return () => {
    var i, c, p, y;
    let L = { open: o.listboxState.value === 0 }, w = { "aria-activedescendant": o.activeOptionIndex.value === null || (i = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : i.id, "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, "aria-labelledby": (y = (c = z(o.labelRef)) == null ? void 0 : c.id) != null ? y : (p = z(o.buttonRef)) == null ? void 0 : p.id, "aria-orientation": o.orientation.value, id: a, onKeydown: n, role: "listbox", tabIndex: 0, ref: o.optionsRef };
    return de({ ourProps: w, theirProps: e, slot: L, attrs: t, slots: s, features: qe.RenderStrategy | qe.Static, visible: f.value, name: "ListboxOptions" });
  };
} }), Ko = $({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: s, expose: r }) {
  let o = ve("ListboxOption"), a = `headlessui-listbox-option-${_e()}`, l = A(null);
  r({ el: l, $el: l });
  let n = h(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === a : !1), d = h(() => J(o.mode.value, { [0]: () => o.compare(I(o.value.value), I(e.value)), [1]: () => I(o.value.value).some((w) => o.compare(I(w), I(e.value))) })), f = h(() => J(o.mode.value, { [1]: () => {
    var w;
    let C = I(o.value.value);
    return ((w = o.options.value.find((x) => C.some((v) => o.compare(I(v), I(x.dataRef.value))))) == null ? void 0 : w.id) === a;
  }, [0]: () => d.value })), i = h(() => ({ disabled: e.disabled, value: e.value, textValue: "", domRef: l }));
  fe(() => {
    var w, C;
    let x = (C = (w = z(l)) == null ? void 0 : w.textContent) == null ? void 0 : C.toLowerCase().trim();
    x !== void 0 && (i.value.textValue = x);
  }), fe(() => o.registerOption(a, i)), Nt(() => o.unregisterOption(a)), fe(() => {
    Ut([o.listboxState, d], () => {
      o.listboxState.value === 0 && (!d.value || J(o.mode.value, { [1]: () => {
        f.value && o.goToOption(R.Specific, a);
      }, [0]: () => {
        o.goToOption(R.Specific, a);
      } }));
    }, { immediate: !0 });
  }), Je(() => {
    o.listboxState.value === 0 && (!n.value || o.activationTrigger.value !== 0 && le(() => {
      var w, C;
      return (C = (w = z(l)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : C.call(w, { block: "nearest" });
    }));
  });
  function c(w) {
    if (e.disabled)
      return w.preventDefault();
    o.select(e.value), o.mode.value === 0 && (o.closeListbox(), le(() => {
      var C;
      return (C = z(o.buttonRef)) == null ? void 0 : C.focus({ preventScroll: !0 });
    }));
  }
  function p() {
    if (e.disabled)
      return o.goToOption(R.Nothing);
    o.goToOption(R.Specific, a);
  }
  function y() {
    e.disabled || n.value || o.goToOption(R.Specific, a, 0);
  }
  function L() {
    e.disabled || !n.value || o.goToOption(R.Nothing);
  }
  return () => {
    let { disabled: w } = e, C = { active: n.value, selected: d.value, disabled: w }, x = { id: a, ref: l, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: c, onFocus: p, onPointermove: y, onMousemove: y, onPointerleave: L, onMouseleave: L };
    return de({ ourProps: x, theirProps: et(e, ["value", "disabled"]), slot: C, attrs: s, slots: t, name: "ListboxOption" });
  };
} });
const ea = $({
  name: "VvListbox",
  emits: ["update:modelValue"],
  components: {
    Listbox: Yo,
    ListboxButton: Qo,
    ListboxLabel: Zo,
    ListboxOptions: Xo,
    ListboxOption: Ko
  },
  props: {
    data: {
      type: Array,
      default: u.defaults.VvListbox.data
    },
    displayClasses: {
      type: String,
      default: u.defaults.VvListbox.displayClasses
    },
    displayDisabledClasses: {
      type: String,
      default: u.defaults.VvListbox.displayDisabledClasses
    },
    iconDisabledClasses: {
      type: String,
      default: u.defaults.VvListbox.iconDisabledClasses
    },
    iconSelectedClasses: {
      type: String,
      default: u.defaults.VvListbox.iconSelectedClasses
    },
    iconsSizeClasses: {
      type: String,
      default: u.defaults.VvListbox.iconsSizeClasses
    },
    label: {
      type: String,
      default: u.defaults.VvListbox.label
    },
    labelClasses: {
      type: String,
      default: u.defaults.VvListbox.labelClasses
    },
    listboxButtonClasses: {
      type: String,
      default: u.defaults.VvListbox.listboxButtonClasses
    },
    listboxButtonColor: {
      type: String,
      default: u.defaults.VvListbox.listboxButtonColor
    },
    listboxButtonPalette: {
      type: String,
      default: u.defaults.VvListbox.listboxButtonPalette
    },
    listboxOptionClasses: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionClasses
    },
    listboxOptionColor: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionColor
    },
    listboxOptionPalette: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionPalette
    },
    listboxOptionsClasses: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionsClasses
    },
    listboxOptionsWithLabelSpacing: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionsWithLabelSpacing
    },
    listboxOptionsWithoutLabelSpacing: {
      type: String,
      default: u.defaults.VvListbox.listboxOptionsWithoutLabelSpacing
    },
    optionIconParentClasses: {
      type: String,
      default: u.defaults.VvListbox.optionIconParentClasses
    },
    selectedDisplayClasses: {
      type: String,
      default: u.defaults.VvListbox.selectedDisplayClasses
    },
    selectedIndex: {
      type: Number,
      default: u.defaults.VvListbox.selectedIndex
    },
    size: {
      type: String,
      default: u.defaults.VvListbox.size
    }
  },
  setup(e) {
    const t = A(e.data), s = A(t.value[e.selectedIndex]), r = Object.keys(S("vv", {})).length > 0 ? S("vv") : u, o = h(() => {
      var n, d, f, i, c, p;
      let l = [];
      return (n = r == null ? void 0 : r.listboxes) != null && n.base() && l.push(r.listboxes.base()), e.size !== "" && ((f = (d = r == null ? void 0 : r.listboxes) == null ? void 0 : d.sizes) == null ? void 0 : f[e.size]) && l.push(r.listboxes.sizes[e.size]), (p = (c = (i = r == null ? void 0 : r.listboxes) == null ? void 0 : i.buttonPalettes) == null ? void 0 : c[e.listboxButtonPalette]) != null && p[e.listboxButtonColor] && l.push(r.listboxes.buttonPalettes[e.listboxButtonPalette][e.listboxButtonColor]), l.join(" ").trim();
    }), a = h(() => {
      var n, d, f;
      let l = "";
      return (f = (d = (n = r == null ? void 0 : r.listboxes) == null ? void 0 : n.optionPalettes) == null ? void 0 : d[e.listboxOptionPalette]) != null && f[e.listboxOptionColor] && (l = String(r.listboxes.optionPalettes[e.listboxOptionPalette][e.listboxOptionColor])), l;
    });
    return {
      listboxButtonVvClasses: o,
      listboxOptionVvClasses: a,
      selectData: t,
      selectedItem: s,
      VvConfig: u
    };
  }
}), ta = /* @__PURE__ */ T("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), sa = [
  ta
], ra = /* @__PURE__ */ T("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), oa = [
  ra
], aa = /* @__PURE__ */ T("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
}, null, -1), la = [
  aa
];
function na(e, t, s, r, o, a) {
  const l = oe("ListboxLabel"), n = oe("ListboxButton"), d = oe("ListboxOption"), f = oe("ListboxOptions"), i = oe("Listbox");
  return m(), U(i, {
    modelValue: e.selectedItem,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (c) => e.selectedItem = c),
      t[1] || (t[1] = (c) => e.$emit("update:modelValue", c))
    ],
    by: "id"
  }, {
    default: F(() => [
      e.label.length > 0 ? (m(), U(l, {
        key: 0,
        class: g(e.labelClasses)
      }, {
        default: F(() => [
          H(e.$slots, "default", {}, () => [
            ce(ae(e.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"])) : (m(), U(l, {
        key: 1,
        class: g(e.labelClasses)
      }, {
        default: F(() => [
          H(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      Ue(n, {
        class: g([e.listboxButtonClasses, e.listboxButtonVvClasses])
      }, {
        default: F(() => [
          T("span", {
            class: g(e.selectedDisplayClasses)
          }, ae(e.selectedItem.display), 3),
          (m(), V("svg", {
            class: g(e.iconsSizeClasses),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, sa, 2))
        ]),
        _: 1
      }, 8, ["class"]),
      Ue(f, {
        class: g([e.listboxOptionsClasses, e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : e.listboxOptionsWithoutLabelSpacing])
      }, {
        default: F(() => [
          (m(!0), V(Se, null, Gt(e.selectData, (c) => (m(), V(Se, null, [
            c.value !== "" ? (m(), U(d, {
              key: c.id,
              value: c,
              disabled: c.disabled,
              class: g([e.listboxOptionClasses, e.listboxOptionVvClasses])
            }, {
              default: F(() => [
                T("span", {
                  class: g(e.optionIconParentClasses)
                }, [
                  (m(), V("svg", {
                    class: g(["hidden ui-selected:block mr-3", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, oa, 2)),
                  c.disabled ? (m(), V("svg", {
                    key: 0,
                    class: g(["mr-3 opacity-25", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, la, 2)) : ee("", !0)
                ], 2),
                T("span", {
                  class: g([e.displayClasses, c.disabled ? e.displayDisabledClasses : ""])
                }, ae(c.display), 3)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class"])) : ee("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 3
  }, 8, ["modelValue"]);
}
const Ka = /* @__PURE__ */ M(ea, [["render", na]]), ia = $({
  name: "VvSelect",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: u.defaults.VvSelect.color
    },
    palette: {
      type: String,
      default: u.defaults.VvSelect.palette
    },
    size: {
      type: String,
      default: u.defaults.VvSelect.size
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e, t) {
    const s = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    return { classes: h(() => {
      var l, n, d, f, i, c;
      let a = [];
      return (l = s == null ? void 0 : s.selects) != null && l.base() && a.push(s.selects.base()), e.size !== "" && ((d = (n = s == null ? void 0 : s.selects) == null ? void 0 : n.sizes) == null ? void 0 : d[e.size]) && a.push(s.selects.sizes[e.size]), (c = (i = (f = s == null ? void 0 : s.selects) == null ? void 0 : f.palettes) == null ? void 0 : i[e.palette]) != null && c[e.color] && a.push(s.selects.palettes[e.palette][e.color]), a.join(" ").trim();
    }), handleSelectChange: (a) => a.target.value };
  }
}), ua = ["value"];
function da(e, t, s, r, o, a) {
  return m(), V("select", {
    class: g(e.classes),
    value: e.modelValue,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleSelectChange(l)))
  }, [
    H(e.$slots, "default")
  ], 42, ua);
}
const el = /* @__PURE__ */ M(ia, [["render", da]]), ca = $({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: u.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: u.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: u.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: u.defaults.VvTextarea.rowSize
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(S("vv", {})).length > 0 ? S("vv") : u;
    let s = h(() => {
      var l, n, d, f, i, c;
      let a = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && a.push(t.textareas.base()), e.size !== "" && ((d = (n = t == null ? void 0 : t.textareas) == null ? void 0 : n.sizes) == null ? void 0 : d[e.size]) && a.push(t.textareas.sizes[e.size]), (c = (i = (f = t == null ? void 0 : t.textareas) == null ? void 0 : f.palettes) == null ? void 0 : i[e.palette]) != null && c[e.color] && a.push(t.textareas.palettes[e.palette][e.color]), a.join(" ").trim();
    }), r = h(() => {
      var a, l;
      if (e.rowSize !== "" && ((l = (a = t == null ? void 0 : t.textareas) == null ? void 0 : a.rowSizes) == null ? void 0 : l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: s, rows: r, handleTextareaChange: (a) => a.target.value };
  }
}), fa = ["rows", "value"];
function ba(e, t, s, r, o, a) {
  return m(), V("textarea", {
    class: g(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleTextareaChange(l)))
  }, null, 42, fa);
}
const tl = /* @__PURE__ */ M(ca, [["render", ba]]);
export {
  ts as AnchorDefault,
  qt as Anchors,
  ss as BorderDefault,
  rs as ButtonOutline,
  os as ButtonSolid,
  Jt as Buttons,
  as as CheckboxDefault,
  Wt as Checkboxes,
  Yt as ColorModes,
  ls as FillDefault,
  ns as GroundConsole,
  is as GroundDefault,
  us as GroundMonochromatic,
  ds as GroundPastel,
  Ie as InputDefault,
  De as InputUnderlined,
  mt as Inputs,
  ps as ListDefault,
  cs as ListboxButtonDefault,
  fs as ListboxButtonUnderlined,
  bs as ListboxOptionDefault,
  gs as ListboxOptionUnderlined,
  Zt as Listboxes,
  Qt as Lists,
  Za as ObeKnockoutMark,
  hs as RadioDefault,
  Xt as Radios,
  Kt as Selects,
  We as Text,
  xs as TextDefault,
  es as Textareas,
  X as Transitions,
  Ra as ValidAudioSourceTypes,
  jt as ValidButtonTypes,
  kr as ValidColorModes,
  Pa as ValidDirections,
  Ba as ValidElementTags,
  Fa as ValidFontAwesomeFamilies,
  _a as ValidFontAwesomeSizes,
  Ia as ValidHeadingLevels,
  Da as ValidImageSourceTypes,
  Lr as ValidInputTypes,
  jr as ValidListTypes,
  Ea as ValidVideoSourceTypes,
  Qa as VueVentusLogoText,
  Xa as VueVentusSpinningMark,
  Ha as VvAnchor,
  Dr as VvButton,
  Ga as VvCheckbox,
  Na as VvColorModeButton,
  u as VvConfig,
  Qr as VvEl,
  Ua as VvFormGroup,
  qa as VvInput,
  Wa as VvList,
  Ya as VvListItem,
  Ka as VvListbox,
  Ja as VvRadio,
  el as VvSelect,
  tl as VvTextarea,
  pa as appColorPairs,
  ha as camelCaseToTitleCase,
  xa as decimalsOnly,
  ma as digitsOnly,
  ya as forceBodyClick,
  va as formatBytes,
  ka as formatDateMMDDYYYY,
  wa as formatDateTraditional,
  Sa as formatMediaTime,
  Ca as formatNumber,
  Y as getRandomInt,
  Lt as hexadecimals,
  Va as mergeWithVvConfig,
  zt as monthNames,
  ge as padNumber,
  $a as randomGroundAndTextColors,
  xr as randomHex,
  Oa as randomHexShort,
  za as randomString,
  La as slugifyString,
  Ta as stringToCamelCase,
  ja as stringToFilename,
  Aa as timestampToDateTimeAmPm,
  Ma as uniqueArray
};
