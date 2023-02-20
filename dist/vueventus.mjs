import { defineComponent as $, inject as T, computed as m, openBlock as y, createElementBlock as P, normalizeClass as b, renderSlot as I, ref as j, onMounted as ce, resolveComponent as se, createBlock as A, withCtx as F, createCommentVNode as G, createElementVNode as C, resolveDynamicComponent as vt, createVNode as ze, createTextVNode as ee, toDisplayString as N, useCssVars as mt, cloneVNode as Jt, h as We, Fragment as Ve, provide as yt, watchEffect as Ye, watch as xt, onUnmounted as Yt, nextTick as ie, toRaw as q, renderList as Zt } from "vue";
const Ze = {
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
}, re = {
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
    const t = e && ((a = this.durations) == null ? void 0 : a[e]) ? e : "300";
    return (s = this.durations) != null && s[t] ? (o = this.durations) == null ? void 0 : o[t] : "";
  },
  getEasingClasses: function(e) {
    var a, s, o;
    const t = e && ((a = this.easings) == null ? void 0 : a[e]) ? e : "inOut";
    return (s = this.easings) != null && s[t] ? (o = this.easings) == null ? void 0 : o[t] : "";
  },
  getTransitionClasses: function(e) {
    var a, s, o;
    const t = e && ((a = this.transitions) == null ? void 0 : a[e]) ? e : "default";
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
}, Xt = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: re.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Ze.sizes,
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
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: re.classes("all", "inOut", "300"),
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
}, _t = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "rounded",
  shadow: "",
  transition: re.classes("colors", "inOut", "300"),
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
}, er = {
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
}, kt = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: re.classes("colors", "inOut", "300"),
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
}, tr = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: re.classes("colors", "inOut", "300"),
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
}, rr = {
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
  sizes: Ze.sizes,
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
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "",
  shadow: "",
  transition: re.classes("colors", "inOut", "300"),
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
}, sr = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: re.classes("colors", "inOut", "300"),
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
}, or = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: re.classes("colors", "inOut", "300"),
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
  sizes: kt.sizes,
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
}, lr = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, nr = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, ir = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, ur = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, dr = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, cr = {
  default: "dark:fill-gray-100 fill-gray-900",
  error: "fill-rose-500 dark:fill-rose-300",
  primary: "fill-blue-500 dark:fill-blue-300",
  secondary: "fill-violet-500 dark:fill-violet-300",
  success: "fill-green-600 dark:fill-green-300"
}, pr = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, fr = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, br = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, gr = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, Ne = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, Ge = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, hr = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500"
}, vr = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500"
}, mr = {
  default: "ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, yr = {
  default: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, xr = {
  default: "",
  error: "marker:text-rose-500 dark:marker:text-rose-300",
  primary: "marker:text-blue-500 dark:marker:text-blue-300",
  secondary: "marker:text-violet-500 dark:marker:text-violet-300",
  success: "marker:text-green-600 dark:marker:text-green-300"
}, kr = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, Sr = {
  "": "",
  default: "scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800",
  error: "scrollbar scrollbar-thumb-rose-100 scrollbar-track-rose-200 dark:scrollbar-thumb-rose-600 dark:scrollbar-track-rose-800",
  primary: "scrollbar scrollbar-thumb-blue-100 scrollbar-track-blue-200 dark:scrollbar-thumb-blue-600 dark:scrollbar-track-blue-800",
  secondary: "scrollbar scrollbar-thumb-violet-100 scrollbar-track-violet-200 dark:scrollbar-thumb-violet-600 dark:scrollbar-track-violet-800",
  success: "scrollbar scrollbar-thumb-green-100 scrollbar-track-green-200 dark:scrollbar-thumb-green-600 dark:scrollbar-track-green-800"
}, wr = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, Cr = {
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
}, l = {
  anchors: {
    ...Xt,
    palettes: {
      default: lr
    }
  },
  borders: {
    palettes: {
      default: nr
    }
  },
  buttons: {
    ...Kt,
    palettes: {
      outline: ir,
      solid: ur
    }
  },
  checkboxes: {
    ..._t,
    palettes: {
      default: dr
    }
  },
  fills: {
    palettes: {
      default: cr
    }
  },
  inputs: {
    ...kt,
    palettes: {
      default: Ne,
      underlined: Ge
    }
  },
  colorModes: {
    ...er
  },
  grounds: {
    palettes: {
      console: pr,
      default: fr,
      monochromatic: br,
      pastel: gr
    }
  },
  listboxes: {
    ...tr,
    buttonPalettes: {
      default: hr,
      underlined: vr
    },
    optionPalettes: {
      default: mr,
      underlined: yr
    }
  },
  lists: {
    ...rr,
    palettes: {
      default: xr
    }
  },
  radios: {
    ...ar,
    palettes: {
      default: kr
    }
  },
  scrollbars: {
    palettes: {
      default: Sr
    }
  },
  selects: {
    ...sr,
    palettes: {
      default: Ne,
      underlined: Ge
    }
  },
  text: {
    ...Ze,
    palettes: {
      default: wr
    }
  },
  textareas: {
    ...or,
    palettes: {
      default: Ne,
      underlined: Ge
    }
  },
  transitions: {
    ...re
  },
  defaults: Cr
}, D = Math.round, Y = Math.min, Z = Math.max, zr = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, Te = (e) => typeof e == "string" && e.includes("%"), qe = (e) => e < 1 ? D(e) : e, Vr = (e) => D(100 * e) / 100, St = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), be = (e) => e.a < 1 && e.a >= 0, je = (e) => Y(1, Z(0, e)), Tr = (e) => e.length === 1 ? `0${e}` : `${e}`, $r = "[-\\+]?\\d+%?", Or = "[-\\+]?\\d*\\.\\d+%?", oe = `(?:${Or})|(?:${$r})`, te = (e) => new RegExp(oe).test(e), wt = (e) => te(e.r) && te(e.g) && te(e.b), Xe = `[\\s|\\(]+(${oe})[,|\\s]+(${oe})[,|\\s]+(${oe})\\s*\\)?`, Ke = `[\\s|\\(]+(${oe})[,|\\s]+(${oe})[,|\\s]+(${oe})[,|\\s]+(${oe})\\s*\\)?`;
function H(e, t) {
  zr(e) && (e = "100%");
  const r = Te(e);
  return e = Y(t, Z(0, Number.parseFloat(e))), r && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const he = (e) => Number.parseInt(e, 16), at = (e) => he(e) / 255, ve = (e) => e <= 1 ? `${e * 100}%` : e, le = (e) => {
  const [t, r, a] = [e._r, e._g, e._b].map((s) => D(s));
  return { r: t, g: r, b: a, a: e._roundA };
}, ne = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), $e = (e) => {
  const [t, r, a] = [e.r, e.g, e.b].map((s) => H(s, 255) * 255);
  return { r: t, g: r, b: a, a: St(e.a) };
}, Oe = (e) => {
  const [t, r, a] = [e.r, e.g, e.b].map((s) => `${D(H(s, 255) * 100)}%`);
  return { r: t, g: r, b: a, a: e.a };
}, Le = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Ct = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, D(e.a * 255)], Pe = (e, t) => {
  const r = Ct(e).map((a) => a.toString(16)).map((a) => Tr(a));
  return t && r.every((a) => a.charAt(0) === a.charAt(1)) ? r.map((a) => a.charAt(0)).join("") : r.join("");
}, me = (e, t) => Pe({ ...e, a: 1 }, t), Lr = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Pr(e) {
  const t = e.r / 255, r = e.g / 255, a = e.b / 255, s = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, o = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4, n = a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4;
  return 0.2126 * s + 0.7152 * o + 0.0722 * n;
}
function Fr(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  const a = new f(e).toRgb(), s = new f(t).toRgb(), o = r / 100, n = {
    r: (s.r - a.r) * o + a.r,
    g: (s.g - a.g) * o + a.g,
    b: (s.b - a.b) * o + a.b,
    a: (s.a - a.a) * o + a.a
  };
  return new f(n);
}
function Br(e) {
  let t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
function _e(e, t) {
  const r = new f(e), a = new f(t);
  return (Math.max(r.getLuminance(), a.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), a.getLuminance()) + 0.05);
}
function zt(e, t, r) {
  const a = _e(e, t), s = Br(r);
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
function Vt(e, t, r = {}) {
  const { includeFallbackColors: a, level: s, size: o } = r;
  let n, u = null, c = 0;
  for (const i of t)
    n = _e(e, i), n > c && (c = n, u = new f(i));
  return zt(e, u, { level: s, size: o }) || !a ? u : (r.includeFallbackColors = !1, Vt(e, ["#fff", "#000"], r));
}
function de(e, t) {
  return { monochromatic: Er, analogous: Dr, complement: jr, splitcomplement: Ar, triad: Mr, tetrad: Rr }[e](...t);
}
function jr(e) {
  const t = new f(e).toHsl();
  return t.h = (t.h + 180) % 360, new f(t);
}
function Mr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 120) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 240) % 360, s: t.s, l: t.l })
  ];
}
function Rr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 90) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 180) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 270) % 360, s: t.s, l: t.l })
  ];
}
function Ar(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 72) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 216) % 360, s: t.s, l: t.l })
  ];
}
function Dr(e, t = 6, r = 30) {
  const a = new f(e).toHsl(), s = 360 / r, o = [new f(e)];
  for (a.h = (a.h - (s * t >> 1) + 720) % 360; --t; )
    a.h = (a.h + s) % 360, o.push(new f(a));
  return o;
}
function Er(e, t = 6) {
  const r = new f(e).toHsv();
  let { h: a, s, v: o } = r;
  const n = [], u = 1 / t;
  for (; t--; )
    n.push(new f({ h: a, s, v: o })), o = (o + u) % 1;
  return n;
}
function ae(e, t) {
  const a = { invert: Ir, desaturate: Hr, saturate: Nr, greyscale: Gr, lighten: qr, brighten: Ur, darken: Qr, spin: Wr }[e](...t), [s] = t;
  return s._r = a._r, s._g = a._g, s._b = a._b, s.setAlpha(a._a), s;
}
function Ir(e) {
  const t = new f(e).toRgb();
  return t.r = Z(0, Y(255, 255 - t.r)), t.g = Z(0, Y(255, 255 - t.g)), t.b = Z(0, Y(255, 255 - t.b)), new f(t);
}
function Hr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s -= t / 100, r.s = je(r.s), new f(r);
}
function Nr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s += t / 100, r.s = je(r.s), new f(r);
}
function Gr(e) {
  return new f(e).desaturate(100);
}
function qr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l += t / 100, r.l = je(r.l), new f(r);
}
function Ur(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toRgb();
  return r.r = Z(0, Y(255, r.r - D(255 * -(t / 100)))), r.g = Z(0, Y(255, r.g - D(255 * -(t / 100)))), r.b = Z(0, Y(255, r.b - D(255 * -(t / 100)))), new f(r);
}
function Qr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l -= t / 100, r.l = je(r.l), new f(r);
}
function Wr(e, t) {
  const r = new f(e).toHsl(), a = (r.h + t) % 360;
  return r.h = a < 0 ? 360 + a : a, new f(r);
}
class Jr {
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
const Yr = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class Zr {
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
    if (this.colorspaces[t] = new Jr(this, t, { ...this.options, ...r }), r.alias)
      for (const a of r.alias)
        this.colorspaces[a] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const r = { ...Yr };
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
let Xr = 0;
const X = new Zr();
class f {
  constructor(t, r = {}) {
    if (t = t || "", t instanceof f)
      return t;
    const a = X.findColor(t);
    this._originalInput = t, this._r = qe(a.r), this._g = qe(a.g), this._b = qe(a.b), this._a = a.a, this._roundA = Vr(this._a), this._format = r.format || a.format, this._gradientType = r.gradientType, this._ok = a.ok, this._tc_id = f.newId(), X.set(r);
  }
  static newId() {
    return Xr++;
  }
  static registerFormat(t, r = {}) {
    return X.add(t, r);
  }
  static equals(t, r) {
    return !t || !r ? !1 : new f(t).toRgbString() === new f(r).toRgbString();
  }
  static fromRatio(t, r) {
    if (typeof t == "object") {
      const a = {};
      for (const s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (s === "a" ? a[s] = t[s] : a[s] = ve(t[s]));
      t = a;
    }
    return new f(t, r);
  }
  static readability(t, r) {
    return _e(t, r);
  }
  static isReadable(t, r, a) {
    return zt(t, r, a);
  }
  static mostReadable(t, r, a) {
    return Vt(t, r, a);
  }
  static mix(t, r, a) {
    return Fr(t, r, a);
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
    return Lr(this.toRgb());
  }
  getLuminance() {
    return Pr(ne(this));
  }
  toString(t) {
    return X.print(le(this), this._format, t);
  }
  toName() {
    return X.print(le(this), "name", "toName");
  }
  toRgb() {
    return ne(this);
  }
  toRgbString() {
    return Le(le(this));
  }
  toRgbArray() {
    return Ct(le(this));
  }
  toPercentageRgb() {
    return Oe(ne(this));
  }
  toPercentageRgbString() {
    return Le(Oe(le(this)));
  }
  toHex(t) {
    return me(le(this), t);
  }
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  toHex8(t) {
    return Pe(le(this), t);
  }
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  toHsv() {
    return X.raw(ne(this), "hsv");
  }
  toHsvString() {
    return X.print(ne(this), this._format, "hsv");
  }
  toHsl() {
    return X.raw(ne(this), "hsl");
  }
  toHslString() {
    return X.print(ne(this), this._format, "hsl");
  }
  setAlpha(t) {
    return this._a = St(t), this._roundA = D(100 * this._a) / 100, this;
  }
  clone() {
    return new f(this.toString());
  }
  lighten(...t) {
    return ae("lighten", [this, ...t]);
  }
  brighten(...t) {
    return ae("brighten", [this, ...t]);
  }
  darken(...t) {
    return ae("darken", [this, ...t]);
  }
  desaturate(...t) {
    return ae("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return ae("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return ae("greyscale", [this, ...t]);
  }
  invert(...t) {
    return ae("invert", [this, ...t]);
  }
  spin(...t) {
    return ae("spin", [this, ...t]);
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
const st = function() {
  return {
    rgb: new RegExp(`rgb${Xe}`),
    rgba: new RegExp(`rgba${Ke}`)
  };
}();
function Me(e) {
  let t, r, a, s, o;
  return (o = st.rgb.exec(e)) ? ([t, r, a] = o.splice(1, 3), { r: t, g: r, b: a }) : (o = st.rgba.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { r: t, g: r, b: a, a: s }) : !1;
}
const Re = f.registerFormat("rgb");
Re.shouldHandleInput = (e) => typeof e == "object" && wt(e) && !Te(e.r) || Me(e);
Re.toRgb = (e) => typeof e == "object" && $e(e) || $e(Me(e));
Re.toRaw = (e) => e;
Re.toString = (e) => Le(e);
const Ae = f.registerFormat("prgb");
Ae.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = Me(e);
    return t && Te(t.r);
  }
  return wt(e) && Te(e.r);
};
Ae.toRgb = (e) => $e(typeof e == "object" ? e : Me(e));
Ae.toRaw = (e) => Oe(e);
Ae.toString = (e) => Le(Oe(e));
const U = f.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), Fe = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Kr(e) {
  let t;
  if (t = Fe.hex3.exec(e)) {
    const [r, a, s] = t.splice(1, 3).map((o) => `${o}${o}`).map((o) => he(o));
    return { r, g: a, b: s, a: 1 };
  }
  if (t = Fe.hex6.exec(e)) {
    const [r, a, s] = t.splice(1, 3).map((o) => he(o));
    return { r, g: a, b: s, a: 1 };
  }
  return !1;
}
const we = (e, t = U.options.shortHex) => `#${U.options.upperCaseHex ? me(e, t).toUpperCase() : me(e, t)}`;
U.shouldHandleInput = (e) => Fe.hex6.test(e) || Fe.hex3.test(e);
U.toRgb = (e) => Kr(e);
U.toRaw = (e) => e;
U.toString = (e) => /^hex6?$/.test(U.wanted) ? we(e) : U.wanted === "hex3" ? we(e, !0) : be(e) ? U.options.alphaFormat === "hex" ? we(e) : U.print(U.options.alphaFormat, e) : we(e);
const Q = f.registerFormat("hex8", {
  alias: ["hex4"]
}), Be = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function _r(e) {
  let t;
  if (t = Be.hex4.exec(e)) {
    const r = at(`${t[4]}${t[4]}`), [a, s, o] = t.splice(1, 3).map((n) => `${n}${n}`).map((n) => he(n));
    return { r: a, g: s, b: o, a: r };
  }
  if (t = Be.hex8.exec(e)) {
    const r = at(t[4]), [a, s, o] = t.splice(1, 3).map((n) => he(n));
    return { r: a, g: s, b: o, a: r };
  }
  return !1;
}
const Ce = (e, t = Q.options.shortHex) => `#${Q.options.upperCaseHex ? Pe(e, t).toUpperCase() : Pe(e, t)}`;
Q.shouldHandleInput = (e) => Be.hex8.test(e) || Be.hex4.test(e);
Q.toRgb = (e) => _r(e);
Q.toRaw = (e) => e;
Q.toString = (e) => Q.wanted === "hex4" ? Ce(e, !0) : Q.wanted === "hex8" ? Ce(e) : be(e) ? Q.options.alphaFormat === "hex" ? Ce(e) : Q.print(Q.options.alphaFormat, e) : Ce(e);
const De = f.registerFormat("hsl"), ot = function() {
  return {
    hsl: new RegExp(`hsl${Xe}`),
    hsla: new RegExp(`hsla${Ke}`)
  };
}(), ea = (e) => te(e.h) && te(e.s) && te(e.l);
function Tt(e) {
  const t = H(e.r, 255), r = H(e.g, 255), a = H(e.b, 255), s = e.a || 1, o = Z(t, r, a), n = Y(t, r, a);
  let u, c;
  const i = (o + n) / 2;
  if (o === n)
    u = 0, c = 0;
  else {
    const d = o - n;
    switch (c = i > 0.5 ? d / (2 - o - n) : d / (o + n), o) {
      case t:
        u = (r - a) / d + (r < a ? 6 : 0);
        break;
      case r:
        u = (a - t) / d + 2;
        break;
      default:
        u = (t - r) / d + 4;
        break;
    }
    u /= 6;
  }
  return { h: u, s: c, l: i, a: s };
}
function lt(e) {
  const t = H(e.h, 360), r = H(ve(e.s), 100), a = H(ve(e.l), 100), s = e.a || 1;
  let o, n, u;
  function c(i, d, p) {
    return p = p < 0 ? p + 1 : p, p = p > 1 ? p - 1 : p, p < 1 / 6 ? i + (d - i) * 6 * p : p < 1 / 2 ? d : p < 2 / 3 ? i + (d - i) * (2 / 3 - p) * 6 : i;
  }
  if (r === 0)
    o = a, n = a, u = a;
  else {
    const i = a < 0.5 ? a * (1 + r) : a + r - a * r, d = 2 * a - i;
    o = c(d, i, t + 1 / 3), n = c(d, i, t), u = c(d, i, t - 1 / 3);
  }
  return { r: o * 255, g: n * 255, b: u * 255, a: s };
}
function $t(e) {
  let t, r, a, s, o;
  return (o = ot.hsl.exec(e)) ? ([t, r, a] = o.splice(1, 3), { h: t, s: r, l: a }) : (o = ot.hsla.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { h: t, s: r, l: a, a: s }) : !1;
}
function ta(e) {
  let { h: t, s: r, l: a, a: s } = e;
  return t = D(t * 360), r = D(r * 100), a = D(a * 100), s === 1 ? `hsl(${t}, ${r}%, ${a}%)` : `hsla(${t}, ${r}%, ${a}%, ${s})`;
}
function ra(e) {
  let { h: t, s: r, l: a, a: s } = e;
  return t *= 360, { h: t, s: r, l: a, a: s };
}
De.shouldHandleInput = (e) => typeof e == "object" && ea(e) || $t(e);
De.toRgb = (e) => typeof e == "object" && lt(e) || lt($t(e));
De.toRaw = (e) => ra(Tt(e));
De.toString = (e) => ta(Tt(e));
const Ee = f.registerFormat("hsv"), nt = function() {
  return {
    hsv: new RegExp(`hsv${Xe}`),
    hsva: new RegExp(`hsva${Ke}`)
  };
}(), aa = (e) => te(e.h) && te(e.s) && te(e.v);
function Ot(e) {
  const t = H(e.r, 255), r = H(e.g, 255), a = H(e.b, 255), s = e.a || 1, o = Z(t, r, a), n = Y(t, r, a), u = o - n;
  let c;
  const i = o === 0 ? 0 : u / o, d = o;
  if (o === n)
    c = 0;
  else {
    switch (o) {
      case t:
        c = (r - a) / u + (r < a ? 6 : 0);
        break;
      case r:
        c = (a - t) / u + 2;
        break;
      default:
        c = (t - r) / u + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: i, v: d, a: s };
}
function it(e) {
  const t = H(e.h, 360) * 6, r = H(ve(e.s), 100), a = H(ve(e.v), 100), s = e.a || 1, o = Math.floor(t), n = t - o, u = a * (1 - r), c = a * (1 - n * r), i = a * (1 - (1 - n) * r), d = o % 6, p = [a, c, u, u, i, a][d], g = [i, a, a, c, u, u][d], x = [u, u, i, a, a, c][d];
  return { r: p * 255, g: g * 255, b: x * 255, a: s };
}
function Lt(e) {
  let t, r, a, s, o;
  return (o = nt.hsv.exec(e)) ? ([t, r, a] = o.splice(1, 3), { h: t, s: r, v: a }) : (o = nt.hsva.exec(e)) ? ([t, r, a, s] = o.splice(1, 4), { h: t, s: r, v: a, a: s }) : !1;
}
function sa(e) {
  let { h: t, s: r, v: a, a: s } = e;
  return t = D(t * 360), r = D(r * 100), a = D(a * 100), s === 1 ? `hsv(${t}, ${r}%, ${a}%)` : `hsva(${t}, ${r}%, ${a}%, ${s})`;
}
function oa(e) {
  let { h: t, s: r, v: a, a: s } = e;
  return t *= 360, { h: t, s: r, v: a, a: s };
}
Ee.shouldHandleInput = (e) => typeof e == "object" && aa(e) || Lt(e);
Ee.toRgb = (e) => typeof e == "object" && it(e) || it(Lt(e));
Ee.toRaw = (e) => oa(Ot(e));
Ee.toString = (e) => sa(Ot(e));
const _ = f.registerFormat("name", {
  alias: ["toName"]
});
function la(e) {
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[e[r]] = r);
  return t;
}
const ke = {
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
ke.transparent = "00000000";
const na = la(ke);
_.shouldHandleInput = (e) => ke[e];
_.toRgb = (e) => _.parse(ke[e]).rgba;
_.toRaw = (e) => e;
_.toString = (e) => e.a === 0 ? "transparent" : be(e) && _.wanted === "toName" ? !1 : be(e) && _.wanted === "name" ? `#${me(e)}` : be(e) ? _.print(_.options.alphaFormat, e) : na[me(e, !0)] || !1;
function J(e, t) {
  return new f(e, t);
}
J.equals = (e, t) => f.equals(e, t);
J.registerFormat = (e, t = {}) => f.registerFormat(e, t);
J.fromRatio = (e, t) => f.fromRatio(e, t);
J.mix = (e, t, r) => f.mix(e, t, r);
J.readability = (e, t) => f.readability(e, t);
J.isReadable = (e, t, r) => f.isReadable(e, t, r);
J.mostReadable = (e, t, r) => f.mostReadable(e, t, r);
J.names = ke;
function Uo(e, t = "#fff", r = "#000") {
  let a = JSON.parse(JSON.stringify(e)), s = Object.keys(a), o = {};
  for (let n = 0; n < s.length; n++)
    if (typeof a[s[n]] == "string" || typeof a[s[n]] == "number") {
      const u = J(a[s[n]], {});
      u.isValid() && (o[s[n]] = {
        backgroundColor: u.toHexString(!1),
        color: u.isDark() ? t : r
      });
    } else if (typeof a[s[n]] == "object") {
      const u = Object.keys(a[s[n]]), c = {};
      for (let i = 0; i < u.length; i++)
        if (typeof a[s[n]][u[i]] == "string") {
          const d = J(a[s[n]][u[i]], !1);
          d.isValid() && (c[u[i]] = {
            backgroundColor: d.toHexString(!0),
            color: d.isDark() ? t : r
          });
        }
      o[s[n]] = c;
    }
  return o;
}
function Qo(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((s) => s.charAt(0).toUpperCase() + s.substring(1).toLowerCase()).join(" ").trim();
}
function Wo(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function Jo(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function Yo() {
  typeof window < "u" && document && (document.body.click(), document.body.dispatchEvent(new Event("click")));
}
function Zo(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, a = t < 0 ? 0 : t, s = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], o = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, o)).toFixed(a)) + " " + s[o];
}
function ge(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function Xo(e, t = "/") {
  return [
    ge(e.getMonth() + 1),
    ge(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function Pt() {
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
function Ko(e, t = "long", r = "english") {
  return Pt()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function _o(e) {
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
  let o = Math.floor(t), n = r < 10 ? "0" + r : r, u = a < 10 ? "0" + a : a, c = s < 10 ? "0" + s : s, i = o < 10 ? "0" + o : o, d = n === "00" ? "" : n + ":";
  return d += u === "00" ? "" : u + ":", d += c + ":" + i, d;
}
function el(e) {
  return new Intl.NumberFormat().format(e);
}
function K(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Ft() {
  return "0123456789abcdef".split("");
}
var ia = function(t) {
  return ua(t) && !da(t);
};
function ua(e) {
  return !!e && typeof e == "object";
}
function da(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || fa(e);
}
var ca = typeof Symbol == "function" && Symbol.for, pa = ca ? Symbol.for("react.element") : 60103;
function fa(e) {
  return e.$$typeof === pa;
}
function ba(e) {
  return Array.isArray(e) ? [] : {};
}
function ye(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? pe(ba(e), e, t) : e;
}
function ga(e, t, r) {
  return e.concat(t).map(function(a) {
    return ye(a, r);
  });
}
function ha(e, t) {
  if (!t.customMerge)
    return pe;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : pe;
}
function va(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return Object.propertyIsEnumerable.call(e, t);
  }) : [];
}
function ut(e) {
  return Object.keys(e).concat(va(e));
}
function Bt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function ma(e, t) {
  return Bt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function ya(e, t, r) {
  var a = {};
  return r.isMergeableObject(e) && ut(e).forEach(function(s) {
    a[s] = ye(e[s], r);
  }), ut(t).forEach(function(s) {
    ma(e, s) || (Bt(e, s) && r.isMergeableObject(t[s]) ? a[s] = ha(s, r)(e[s], t[s], r) : a[s] = ye(t[s], r));
  }), a;
}
function pe(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || ga, r.isMergeableObject = r.isMergeableObject || ia, r.cloneUnlessOtherwiseSpecified = ye;
  var a = Array.isArray(t), s = Array.isArray(e), o = a === s;
  return o ? a ? r.arrayMerge(e, t, r) : ya(e, t, r) : ye(t, r);
}
pe.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(a, s) {
    return pe(a, s, r);
  }, {});
};
var xa = pe, ka = xa;
const Sa = ka;
function tl(e) {
  return Object.keys(e).length > 0 ? Sa(l, e) : l;
}
function wa() {
  const e = Ft(), t = 0, r = 15, a = e[K(t, r)] + e[K(t, r)], s = e[K(t, r)] + e[K(t, r)], o = e[K(t, r)] + e[K(t, r)];
  return "#" + a + s + o;
}
function rl(e = "#fff", t = "#000") {
  let r = { backgroundColor: "", color: "" }, a = J(wa(), {}), s = a.isDark();
  return r.backgroundColor = "#" + String(a.toHex(!1)), r.color = s ? e : t, r;
}
function al() {
  const e = Ft(), t = 0, r = 15, a = e[K(t, r)], s = e[K(t, r)], o = e[K(t, r)];
  return "#" + a + s + o;
}
function sl(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", a = r.length;
  for (let s = 0; s < Number(e); s++)
    t += r.charAt(Math.floor(Math.random() * a));
  return t;
}
function ol(e, t = "-") {
  let r = e || "", a = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, a).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, a);
}
function ll(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function nl(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function il(e, t = "short", r = "english", a = "AM", s = "PM") {
  var o = new Date(Number(e) * 1e3), n = Pt(), u = n[r][t], c = o.getFullYear(), i = u[o.getMonth()], d = o.getDate(), p = o.getHours(), g = o.getMinutes(), x = o.getSeconds(), S = p >= 12 ? s : a;
  return p = p % 12, p = p === 0 ? 12 : p, i + " " + ge(d) + ", " + c + " " + p + ":" + ge(g) + ":" + ge(x) + " " + S;
}
function ul(e) {
  return e.filter((t, r, a) => a.indexOf(t) === r);
}
function Ie(e, t) {
  return typeof e === t && e !== null;
}
function dl(e) {
  return Ie(e, "string") ? !!(e.length === 10 && /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}$/.test(e)) : !1;
}
function cl(e, t = 150) {
  return Ie(e, "string") ? !!(e.length >= 6 && e.length <= t && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) : !1;
}
function pl(e, t = 3) {
  if (Ie(e, "string")) {
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
function fl(e, t = 1, r = 100) {
  return Ie(e, "string") ? e.length >= t && e.length <= r : !1;
}
const Ca = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], bl = Ca, za = [
  "button",
  "submit",
  "reset"
], jt = za, Va = [
  "light",
  "dark"
], Ta = Va, $a = [
  "normal",
  "italic",
  "oblique"
], gl = $a, Oa = [
  "up",
  "down",
  "left",
  "right",
  ""
], hl = Oa, La = [
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
], Pa = La, Fa = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], vl = Fa, Ba = [
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
  void 0
], ml = Ba, ja = [1, 2, 3, 4, 5, 6], yl = ja, Ma = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], xl = Ma, Ra = [
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
], Aa = Ra, Da = [
  "ul",
  "ol"
], Ea = Da, Ia = [
  "underline",
  "overline",
  "none"
], kl = Ia, Ha = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], Sl = Ha, Na = $({
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
    debug: {
      type: Boolean,
      default: l.defaults.VvAnchor.debug
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
    },
    textSize: {
      type: String,
      default: l.defaults.VvAnchor.textSize
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var s, o, n, u, c, i, d, p, g, x, S, z, v, O, h, k, w, V;
      let a = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((s = t == null ? void 0 : t.buttons) != null && s.blockBase() && a.push(t.buttons.blockBase()), e.buttonSize !== "" && ((n = (o = t == null ? void 0 : t.buttons) == null ? void 0 : o.blockSizes) == null ? void 0 : n[e.buttonSize]) && a.push(String(t.buttons.blockSizes[e.buttonSize]))) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((u = t == null ? void 0 : t.buttons) != null && u.fabBase() && a.push(t.buttons.fabBase()), e.buttonSize !== "" && ((i = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : i[e.buttonSize]) && a.push(String(t.buttons.fabSizes[e.buttonSize]))) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && a.push(t.buttons.base()), e.buttonSize !== "" && ((g = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : g[e.buttonSize]) && a.push(String(t.buttons.sizes[e.buttonSize]))), (z = (S = (x = t == null ? void 0 : t.buttons) == null ? void 0 : x.palettes) == null ? void 0 : S[e.palette]) != null && z[e.color] && a.push(String(t.buttons.palettes[e.palette][e.color]))) : ((v = t == null ? void 0 : t.anchors) != null && v.base() && a.push(t.anchors.base()), e.textSize !== "" && ((h = (O = t == null ? void 0 : t.anchors) == null ? void 0 : O.sizes) == null ? void 0 : h[e.textSize]) && a.push(String(t.anchors.sizes[e.textSize])), (V = (w = (k = t == null ? void 0 : t.anchors) == null ? void 0 : k.palettes) == null ? void 0 : w[e.palette]) != null && V[e.color] && a.push(String(t.anchors.palettes[e.palette][e.color]))), a.join(" ").trim();
    }) };
  }
}), M = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [a, s] of t)
    r[a] = s;
  return r;
}, Ga = ["href", "data-vv-anchor-generated-classes", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"], qa = ["href", "data-vv-anchor-generated-classes", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"];
function Ua(e, t, r, a, s, o) {
  return e.external ? (y(), P("a", {
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
  ], 10, Ga)) : (y(), P("a", {
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
  ], 10, qa));
}
const wl = /* @__PURE__ */ M(Na, [["render", Ua]]), Qa = $({
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
    debug: {
      type: Boolean,
      default: l.defaults.VvButton.debug
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
      validator: (e) => jt.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var s, o, n, u, c, i, d, p, g, x, S, z;
      let a = [];
      return e.block === !0 && e.fab === !1 ? ((s = t == null ? void 0 : t.buttons) != null && s.blockBase() && a.push(t.buttons.blockBase()), e.size !== "" && ((n = (o = t == null ? void 0 : t.buttons) == null ? void 0 : o.blockSizes) == null ? void 0 : n[e.size]) && a.push(String(t.buttons.blockSizes[e.size]))) : e.fab === !0 && e.block === !1 ? ((u = t == null ? void 0 : t.buttons) != null && u.fabBase() && a.push(t.buttons.fabBase()), e.size !== "" && ((i = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : i[e.size]) && a.push(String(t.buttons.fabSizes[e.size]))) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && a.push(t.buttons.base()), e.size !== "" && ((g = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : g[e.size]) && a.push(String(t.buttons.sizes[e.size]))), (z = (S = (x = t == null ? void 0 : t.buttons) == null ? void 0 : x.palettes) == null ? void 0 : S[e.palette]) != null && z[e.color] && a.push(String(t.buttons.palettes[e.palette][e.color])), a.join(" ").trim();
    }) };
  }
}), Wa = ["type", "data-vv-button-generated-classes", "data-vv-button-prop-block", "data-vv-button-prop-color", "data-vv-button-prop-fab", "data-vv-button-prop-palette", "data-vv-button-prop-size", "data-vv-button-prop-type"];
function Ja(e, t, r, a, s, o) {
  return y(), P("button", {
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
  ], 10, Wa);
}
const Ya = /* @__PURE__ */ M(Qa, [["render", Ja]]), Za = $({
  name: "VvColorModeButton",
  components: {
    VvButton: Ya
  },
  props: {
    color: {
      type: String,
      default: l.defaults.VvColorModeButton.color
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvColorModeButton.debug
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
    mode: {
      type: String,
      default: l.defaults.VvColorModeButton.mode,
      validator: (e) => Ta.includes(e)
    },
    palette: {
      type: String,
      default: l.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: l.defaults.VvColorModeButton.size
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
      validator: (e) => jt.includes(e)
    }
  },
  setup(e) {
    const t = j(e.mode), r = m(() => t.value === "dark" ? "sun" : "moon"), a = m(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return ce(() => {
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
}), Xa = {
  key: 0,
  class: "h-5 w-5",
  stroke: "currentColor",
  fill: "none",
  "stroke-width": "2",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, Ka = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), _a = [
  Ka
], es = {
  key: 1,
  class: "h-5 w-5",
  stroke: "currentColor",
  fill: "none",
  "stroke-width": "2",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, ts = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), rs = [
  ts
];
function as(e, t, r, a, s, o) {
  const n = se("VvButton");
  return y(), A(n, {
    onClick: t[0] || (t[0] = (u) => e.toggleColorMode()),
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
    default: F(() => [
      e.icon === "moon" ? (y(), P("svg", Xa, _a)) : G("", !0),
      e.icon === "sun" ? (y(), P("svg", es, rs)) : G("", !0)
    ]),
    _: 1
  }, 8, ["color", "palette", "size", "title", "type", "data-vv-color-mode-button-prop-color", "data-vv-color-mode-button-prop-ground-dark", "data-vv-color-mode-button-prop-ground-dark-hex", "data-vv-color-mode-button-prop-ground-light", "data-vv-color-mode-button-prop-ground-light-hex", "data-vv-color-mode-button-prop-mode", "data-vv-color-mode-button-prop-palette", "data-vv-color-mode-button-prop-size", "data-vv-color-mode-button-prop-text-dark", "data-vv-color-mode-button-prop-text-light", "data-vv-color-mode-button-prop-title-dark", "data-vv-color-mode-button-prop-title-light", "data-vv-color-mode-button-prop-type"]);
}
const Cl = /* @__PURE__ */ M(Za, [["render", as]]), ss = $({
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
    debug: {
      type: Boolean,
      default: l.defaults.VvEl.debug
    },
    groundPalette: {
      type: String,
      default: l.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: l.defaults.VvEl.groundColor
    },
    size: {
      type: String,
      default: l.defaults.VvEl.size
    },
    tag: {
      type: String,
      default: l.defaults.VvEl.tag,
      validator: (e) => Pa.includes(e)
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
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var s, o, n, u, c, i, d, p, g, x, S;
      let a = [];
      return (o = (s = t == null ? void 0 : t.text) == null ? void 0 : s.sizes) != null && o[e.size] && a.push(String(t.text.sizes[e.size])), (c = (u = (n = t == null ? void 0 : t.borders) == null ? void 0 : n.palettes) == null ? void 0 : u[e.borderPalette]) != null && c[e.borderColor] && a.push(String(t.borders.palettes[e.borderPalette][e.borderColor])), (p = (d = (i = t == null ? void 0 : t.grounds) == null ? void 0 : i.palettes) == null ? void 0 : d[e.groundPalette]) != null && p[e.groundColor] && a.push(String(t.grounds.palettes[e.groundPalette][e.groundColor])), (S = (x = (g = t == null ? void 0 : t.text) == null ? void 0 : g.palettes) == null ? void 0 : x[e.textPalette]) != null && S[e.textColor] && a.push(String(t.text.palettes[e.textPalette][e.textColor])), a.join(" ").trim();
    }) };
  }
});
function os(e, t, r, a, s, o) {
  return y(), A(vt(e.tag), {
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
    default: F(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-vv-el-generated-classes", "data-vv-el-prop-border-palette", "data-vv-el-prop-border-color", "data-vv-el-prop-ground-palette", "data-vv-el-prop-ground-color", "data-vv-el-prop-size", "data-vv-el-prop-tag", "data-vv-el-prop-text-palette", "data-vv-el-prop-text-color"]);
}
const Mt = /* @__PURE__ */ M(ss, [["render", os]]), ls = $({
  components: { VvEl: Mt },
  props: {
    debug: {
      type: Boolean,
      default: l.defaults.VvFormGroup.debug
    },
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
    errorTextSize: {
      type: String,
      default: l.defaults.VvFormGroup.errorTextSize
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
    helpTextSize: {
      type: String,
      default: l.defaults.VvFormGroup.helpTextSize
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
    labelTextSize: {
      type: String,
      default: l.defaults.VvFormGroup.labelTextSize
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
    successTextSize: {
      type: String,
      default: l.defaults.VvFormGroup.successTextSize
    },
    wrapperClasses: {
      type: String,
      default: l.defaults.VvFormGroup.wrapperClasses
    }
  }
}), ns = ["data-vv-form-group-prop-wrapper-classes"], is = ["data-vv-form-group-prop-slot-parent-classes"], us = { class: "invisible" };
function ds(e, t, r, a, s, o) {
  const n = se("VvEl");
  return y(), P("div", {
    class: b(e.wrapperClasses),
    "data-vv-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    ze(n, {
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
      default: F(() => [
        ee(N(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-form-group-prop-label-classes", "data-vv-form-group-prop-label-text-color", "data-vv-form-group-prop-label-text-palette", "data-vv-form-group-prop-label-text-size"]),
    C("div", {
      class: b(e.slotParentClasses),
      "data-vv-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      I(e.$slots, "default")
    ], 10, is),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (y(), A(n, {
      key: 0,
      tag: "div",
      class: b(e.helpClasses),
      size: e.helpTextSize,
      "data-vv-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
      "data-vv-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
    }, {
      default: F(() => [
        C("span", us, "\xA0" + N(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-size"])) : G("", !0),
    e.displayHelp ? (y(), A(n, {
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
      default: F(() => [
        ee(N(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-color", "data-vv-form-group-prop-help-text-palette", "data-vv-form-group-prop-help-text-size"])) : G("", !0),
    e.displaySuccess ? (y(), A(n, {
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
      default: F(() => [
        ee(N(e.successText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-success-classes", "data-vv-form-group-prop-success-text-color", "data-vv-form-group-prop-success-text-palette", "data-vv-form-group-prop-success-text-size"])) : G("", !0),
    e.displayError === !0 ? (y(), A(n, {
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
      default: F(() => [
        ee(N(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-error-classes", "data-vv-form-group-prop-error-text-color", "data-vv-form-group-prop-error-text-palette", "data-vv-form-group-prop-error-text-size"])) : G("", !0)
  ], 10, ns);
}
const zl = /* @__PURE__ */ M(ls, [["render", ds]]), cs = $({
  components: { VvEl: Mt },
  props: {
    bottomSlotClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.bottomSlotClasses
    },
    bottomWrapperClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.bottomWrapperClasses
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvQuadFormGroup.debug
    },
    displayError: {
      type: Boolean,
      default: l.defaults.VvQuadFormGroup.displayError
    },
    displayHelp: {
      type: Boolean,
      default: l.defaults.VvQuadFormGroup.displayHelp
    },
    displaySuccess: {
      type: Boolean,
      default: l.defaults.VvQuadFormGroup.displaySuccess
    },
    errorClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.errorClasses
    },
    errorText: {
      type: String,
      default: l.defaults.VvQuadFormGroup.errorText
    },
    errorTextColor: {
      type: String,
      default: l.defaults.VvQuadFormGroup.errorTextColor
    },
    errorTextPalette: {
      type: String,
      default: l.defaults.VvQuadFormGroup.errorTextPalette
    },
    errorTextSize: {
      type: String,
      default: l.defaults.VvQuadFormGroup.errorTextSize
    },
    helpClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.helpClasses
    },
    helpText: {
      type: String,
      default: l.defaults.VvQuadFormGroup.helpText
    },
    helpTextColor: {
      type: String,
      default: l.defaults.VvQuadFormGroup.helpTextColor
    },
    helpTextPalette: {
      type: String,
      default: l.defaults.VvQuadFormGroup.helpTextPalette
    },
    helpTextSize: {
      type: String,
      default: l.defaults.VvQuadFormGroup.helpTextSize
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
      default: l.defaults.VvQuadFormGroup.labelClasses
    },
    labelTextColor: {
      type: String,
      default: l.defaults.VvQuadFormGroup.labelTextColor
    },
    labelTextPalette: {
      type: String,
      default: l.defaults.VvQuadFormGroup.labelTextPalette
    },
    labelTextSize: {
      type: String,
      default: l.defaults.VvQuadFormGroup.labelTextSize
    },
    slotParentClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.slotParentClasses
    },
    successClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.successClasses
    },
    successText: {
      type: String,
      default: l.defaults.VvQuadFormGroup.successText
    },
    successTextColor: {
      type: String,
      default: l.defaults.VvQuadFormGroup.successTextColor
    },
    successTextPalette: {
      type: String,
      default: l.defaults.VvQuadFormGroup.successTextPalette
    },
    successTextSize: {
      type: String,
      default: l.defaults.VvQuadFormGroup.successTextSize
    },
    textParentClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.textParentClasses
    },
    topSlotClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.topSlotClasses
    },
    topWrapperClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.topWrapperClasses
    },
    wrapperClasses: {
      type: String,
      default: l.defaults.VvQuadFormGroup.wrapperClasses
    }
  }
}), ps = ["data-vv-quad-form-group-prop-wrapper-classes"], fs = ["data-vv-quad-form-group-prop-top-wrapper-classes"], bs = ["data-vv-quad-form-group-prop-top-slot-classes"], gs = ["data-vv-quad-form-group-prop-slot-parent-classes"], hs = ["data-vv-quad-form-group-prop-bottom-wrapper-classes"], vs = ["data-vv-quad-form-group-prop-text-parent-classes"], ms = { class: "invisible" }, ys = ["data-vv-quad-form-group-prop-bottom-slot-classes"];
function xs(e, t, r, a, s, o) {
  const n = se("VvEl");
  return y(), P("div", {
    class: b(e.wrapperClasses),
    "data-vv-quad-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    C("div", {
      class: b(e.topWrapperClasses),
      "data-vv-quad-form-group-prop-top-wrapper-classes": e.debug ? e.topWrapperClasses : null
    }, [
      ze(n, {
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
        default: F(() => [
          ee(N(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-label-classes", "data-vv-quad-form-group-prop-label-text-color", "data-vv-quad-form-group-prop-label-text-palette", "data-vv-quad-form-group-prop-label-text-size"]),
      C("div", {
        class: b(e.topSlotClasses),
        "data-vv-quad-form-group-prop-top-slot-classes": e.debug ? e.topSlotClasses : null
      }, [
        I(e.$slots, "top")
      ], 10, bs)
    ], 10, fs),
    C("div", {
      class: b(e.slotParentClasses),
      "data-vv-quad-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      I(e.$slots, "default")
    ], 10, gs),
    C("div", {
      class: b(e.bottomWrapperClasses),
      "data-vv-quad-form-group-prop-bottom-wrapper-classes": e.debug ? e.bottomWrapperClasses : null
    }, [
      C("div", {
        class: b(e.textParentClasses),
        "data-vv-quad-form-group-prop-text-parent-classes": e.debug ? e.textParentClasses : null
      }, [
        !e.displayError && !e.displayHelp && !e.displaySuccess ? (y(), A(n, {
          key: 0,
          tag: "div",
          class: b(e.helpClasses),
          size: e.helpTextSize,
          "data-vv-quad-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
          "data-vv-quad-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
        }, {
          default: F(() => [
            C("span", ms, "\xA0" + N(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-size"])) : G("", !0),
        e.displayHelp ? (y(), A(n, {
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
          default: F(() => [
            ee(N(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-color", "data-vv-quad-form-group-prop-help-text-palette", "data-vv-quad-form-group-prop-help-text-size"])) : G("", !0),
        e.displaySuccess ? (y(), A(n, {
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
          default: F(() => [
            ee(N(e.successText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-success-classes", "data-vv-quad-form-group-prop-success-text-color", "data-vv-quad-form-group-prop-success-text-palette", "data-vv-quad-form-group-prop-success-text-size"])) : G("", !0),
        e.displayError === !0 ? (y(), A(n, {
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
          default: F(() => [
            ee(N(e.errorText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-error-classes", "data-vv-quad-form-group-prop-error-text-color", "data-vv-quad-form-group-prop-error-text-palette", "data-vv-quad-form-group-prop-error-text-size"])) : G("", !0)
      ], 10, vs),
      C("div", {
        class: b(e.bottomSlotClasses),
        "data-vv-quad-form-group-prop-bottom-slot-classes": e.debug ? e.bottomSlotClasses : null
      }, [
        I(e.$slots, "bottom")
      ], 10, ys)
    ], 10, hs)
  ], 10, ps);
}
const Vl = /* @__PURE__ */ M(cs, [["render", xs]]), et = $({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    checked: {
      type: Boolean,
      default: l.defaults.VvCheckbox.checked
    },
    color: {
      type: String,
      default: l.defaults.VvCheckbox.color
    },
    darkCheckHex: {
      type: String,
      default: l.defaults.VvCheckbox.darkCheckHex
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvCheckbox.debug
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
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    let r = m(() => {
      var c, i, d, p, g, x;
      let u = [];
      return (c = t == null ? void 0 : t.checkboxes) != null && c.base() && u.push(t.checkboxes.base()), e.size !== "" && ((d = (i = t == null ? void 0 : t.checkboxes) == null ? void 0 : i.sizes) == null ? void 0 : d[e.size]) && u.push(String(t.checkboxes.sizes[e.size])), (x = (g = (p = t == null ? void 0 : t.checkboxes) == null ? void 0 : p.palettes) == null ? void 0 : g[e.palette]) != null && x[e.color] && u.push(String(t.checkboxes.palettes[e.palette][e.color])), u.join(" ").trim();
    });
    function a(u) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16'  fill='%23",
        u,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let s = m(() => a(e.darkCheckHex.replace(/#/g, ""))), o = m(() => a(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: r,
      darkCheckCssUrl: s,
      handleCheckboxChange: (u) => u.target.checked === !0,
      lightCheckCssUrl: o
    };
  }
}), dt = () => {
  mt((e) => ({
    be360c64: e.lightCheckCssUrl,
    "788d630e": e.darkCheckCssUrl
  }));
}, ct = et.setup;
et.setup = ct ? (e, t) => (dt(), ct(e, t)) : dt;
const ks = et;
const Ss = ["checked", "data-test", "data-vv-checkbox-generated-classes", "data-vv-checkbox-prop-checked", "data-vv-checkbox-prop-color", "data-vv-checkbox-prop-dark-check-hex", "data-vv-checkbox-prop-light-check-hex", "data-vv-checkbox-prop-palette", "data-vv-checkbox-prop-size"];
function ws(e, t, r, a, s, o) {
  return y(), P("input", {
    type: "checkbox",
    class: b(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleCheckboxChange(n))),
    "data-test": e.darkCheckCssUrl + e.lightCheckCssUrl,
    "data-vv-checkbox-generated-classes": e.debug ? e.classes : null,
    "data-vv-checkbox-prop-checked": e.debug ? e.checked : null,
    "data-vv-checkbox-prop-color": e.debug ? e.color : null,
    "data-vv-checkbox-prop-dark-check-hex": e.debug ? e.darkCheckHex : null,
    "data-vv-checkbox-prop-light-check-hex": e.debug ? e.lightCheckHex : null,
    "data-vv-checkbox-prop-palette": e.debug ? e.palette : null,
    "data-vv-checkbox-prop-size": e.debug ? e.size : null
  }, null, 42, Ss);
}
const Tl = /* @__PURE__ */ M(ks, [["render", ws], ["__scopeId", "data-v-2c56b192"]]), Cs = $({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvInput.color
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvInput.debug
    },
    modelValue: {
      type: String,
      default: ""
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
      validator: (e) => Aa.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var o, n, u, c, i, d;
      let s = [];
      return (o = t == null ? void 0 : t.inputs) != null && o.base() && s.push(t.inputs.base()), e.size !== "" && ((u = (n = t == null ? void 0 : t.inputs) == null ? void 0 : n.sizes) == null ? void 0 : u[e.size]) && s.push(String(t.inputs.sizes[e.size])), (d = (i = (c = t == null ? void 0 : t.inputs) == null ? void 0 : c.palettes) == null ? void 0 : i[String(e.palette)]) != null && d[e.color] && s.push(String(t.inputs.palettes[String(e.palette)][e.color])), s.join(" ").trim();
    }), handleInputChange: (s) => s.target.value };
  }
}), zs = ["type", "value", "data-vv-input-generated-classes", "data-vv-input-prop-color", "data-vv-input-prop-model-value", "data-vv-input-prop-palette", "data-vv-input-prop-size", "data-vv-input-prop-type"];
function Vs(e, t, r, a, s, o) {
  return y(), P("input", {
    type: e.type,
    class: b(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleInputChange(n))),
    "data-vv-input-generated-classes": e.debug ? e.classes : null,
    "data-vv-input-prop-color": e.debug ? e.color : null,
    "data-vv-input-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-input-prop-palette": e.debug ? e.palette : null,
    "data-vv-input-prop-size": e.debug ? e.size : null,
    "data-vv-input-prop-type": e.debug ? e.type : null
  }, null, 42, zs);
}
const $l = /* @__PURE__ */ M(Cs, [["render", Vs]]), tt = $({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    checked: {
      type: Boolean,
      default: l.defaults.VvRadio.checked
    },
    color: {
      type: String,
      default: l.defaults.VvRadio.color
    },
    darkRadioHex: {
      type: String,
      default: l.defaults.VvRadio.darkRadioHex
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvRadio.debug
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
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l, r = j(e.checked);
    let a = m(() => {
      var i, d, p, g, x, S;
      let c = [];
      return (i = t == null ? void 0 : t.radios) != null && i.base() && c.push(t.radios.base()), e.size !== "" && ((p = (d = t == null ? void 0 : t.radios) == null ? void 0 : d.sizes) == null ? void 0 : p[e.size]) && c.push(String(t.radios.sizes[e.size])), (S = (x = (g = t == null ? void 0 : t.radios) == null ? void 0 : g.palettes) == null ? void 0 : x[e.palette]) != null && S[e.color] && c.push(String(t.radios.palettes[e.palette][e.color])), c.join(" ").trim();
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
    let o = m(() => s(e.darkRadioHex.replace(/#/g, ""))), n = m(() => s(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: a,
      darkRadioCssUrl: o,
      handleRadioChange: (c) => {
        const i = c.target;
        return r.value = !1, i.checked === !0 && (r.value = !0), r.value;
      },
      lightRadioCssUrl: n
    };
  }
}), pt = () => {
  mt((e) => ({
    "59720f6b": e.lightRadioCssUrl,
    "92bb3cd2": e.darkRadioCssUrl
  }));
}, ft = tt.setup;
tt.setup = ft ? (e, t) => (pt(), ft(e, t)) : pt;
const Ts = tt;
const $s = ["value", "checked", "data-test", "data-vv-radio-generated-classes", "data-vv-radio-prop-checked", "data-vv-radio-prop-color", "data-vv-radio-prop-dark-radio-hex", "data-vv-radio-prop-light-radio-hex", "data-vv-radio-prop-palette", "data-vv-radio-prop-size", "data-vv-radio-prop-value"];
function Os(e, t, r, a, s, o) {
  return y(), P("input", {
    type: "radio",
    class: b(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleRadioChange(n))),
    "data-test": e.darkRadioCssUrl + e.lightRadioCssUrl,
    "data-vv-radio-generated-classes": e.debug ? e.classes : null,
    "data-vv-radio-prop-checked": e.debug ? e.checked : null,
    "data-vv-radio-prop-color": e.debug ? e.color : null,
    "data-vv-radio-prop-dark-radio-hex": e.debug ? e.darkRadioHex : null,
    "data-vv-radio-prop-light-radio-hex": e.debug ? e.lightRadioHex : null,
    "data-vv-radio-prop-palette": e.debug ? e.palette : null,
    "data-vv-radio-prop-size": e.debug ? e.size : null,
    "data-vv-radio-prop-value": e.debug ? e.value : null
  }, null, 42, $s);
}
const Ol = /* @__PURE__ */ M(Ts, [["render", Os], ["__scopeId", "data-v-2fefc4ec"]]), Ls = $({
  name: "VvList",
  props: {
    debug: {
      type: Boolean,
      default: l.defaults.VvList.debug
    },
    listStyleTypeClass: {
      type: String,
      default: l.defaults.VvList.listStyleTypeClass
    },
    markerColor: {
      type: String,
      default: l.defaults.VvList.markerColor
    },
    markerPalette: {
      type: String,
      default: l.defaults.VvList.markerPalette
    },
    size: {
      type: String,
      default: l.defaults.VvList.size
    },
    tag: {
      type: String,
      default: l.defaults.VvList.tag,
      validator: (e) => Ea.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var s, o, n, u, c;
      let a = [];
      return t != null && t.text.base() && a.push(t == null ? void 0 : t.text.base()), (o = (s = t == null ? void 0 : t.lists) == null ? void 0 : s.sizes) != null && o[e.size] && a.push(String(t.lists.sizes[e.size])), (c = (u = (n = t == null ? void 0 : t.lists) == null ? void 0 : n.palettes) == null ? void 0 : u[e.markerPalette]) != null && c[e.markerColor] && a.push(String(t.lists.palettes[e.markerPalette][e.markerColor])), a.join(" ").trim();
    }) };
  }
});
function Ps(e, t, r, a, s, o) {
  return y(), A(vt(e.tag), {
    class: b([e.listStyleTypeClass, e.classes]),
    role: "list",
    "data-vv-list-generated-classes": e.debug ? e.classes : null,
    "data-vv-list-prop-list-style-type-class": e.debug ? e.listStyleTypeClass : null,
    "data-vv-list-prop-marker-color": e.debug ? e.markerColor : null,
    "data-vv-list-prop-marker-palette": e.debug ? e.markerPalette : null,
    "data-vv-list-prop-size": e.debug ? e.size : null,
    "data-vv-list-prop-tag": e.debug ? e.tag : null
  }, {
    default: F(() => [
      I(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "data-vv-list-generated-classes", "data-vv-list-prop-list-style-type-class", "data-vv-list-prop-marker-color", "data-vv-list-prop-marker-palette", "data-vv-list-prop-size", "data-vv-list-prop-tag"]);
}
const Ll = /* @__PURE__ */ M(Ls, [["render", Ps]]), Fs = $({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: l.defaults.VvListItem.color
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvListItem.debug
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
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    let r = m(() => {
      var o, n, u;
      let s = [];
      return t != null && t.text.base() && s.push(t == null ? void 0 : t.text.base()), (u = (n = (o = t == null ? void 0 : t.text) == null ? void 0 : o.palettes) == null ? void 0 : n[e.palette]) != null && u[e.color] && s.push(String(t.text.palettes[e.palette][e.color])), s.join(" ").trim();
    }), a = m(() => {
      var o, n, u;
      let s = [];
      return (u = (n = (o = t == null ? void 0 : t.text) == null ? void 0 : o.palettes) == null ? void 0 : n[e.symbolPalette]) != null && u[e.symbolColor] && s.push(String(t.text.palettes[e.symbolPalette][e.symbolColor])), s.join(" ").trim();
    });
    return { classes: r, symbolClasses: a };
  }
}), Bs = ["data-vv-list-item-generated-classes", "data-vv-list-item-prop-color", "data-vv-list-item-prop-enable-colored-symbols", "data-vv-list-item-prop-palette", "data-vv-list-item-prop-symbol-classes", "data-vv-list-item-prop-symbol-color", "data-vv-list-item-prop-symbol-palette"], js = ["data-vv-list-item-generated-classes"];
function Ms(e, t, r, a, s, o) {
  return y(), P("li", {
    class: b(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes),
    "data-vv-list-item-generated-classes": e.debug ? e.classes : null,
    "data-vv-list-item-prop-color": e.debug ? e.color : null,
    "data-vv-list-item-prop-enable-colored-symbols": e.debug ? e.enableColoredSymbols : null,
    "data-vv-list-item-prop-palette": e.debug ? e.palette : null,
    "data-vv-list-item-prop-symbol-classes": e.debug ? e.symbolClasses : null,
    "data-vv-list-item-prop-symbol-color": e.debug ? e.symbolColor : null,
    "data-vv-list-item-prop-symbol-palette": e.debug ? e.symbolPalette : null
  }, [
    e.enableColoredSymbols === !0 ? (y(), P("span", {
      key: 0,
      class: b([e.classes]),
      "data-vv-list-item-generated-classes": e.debug ? e.classes : null
    }, [
      I(e.$slots, "default")
    ], 10, js)) : I(e.$slots, "default", { key: 1 })
  ], 10, Bs);
}
const Pl = /* @__PURE__ */ M(Fs, [["render", Ms]]), Rs = $({
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
}), As = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Ds(e, t, r, a, s, o) {
  return y(), P("svg", As, [
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
const Fl = /* @__PURE__ */ M(Rs, [["render", Ds]]), Es = $({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), Is = /* @__PURE__ */ C("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), Hs = [
  Is
];
function Ns(e, t, r, a, s, o) {
  return y(), P("svg", {
    class: b(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, Hs, 2);
}
const Bl = /* @__PURE__ */ M(Es, [["render", Ns]]), Gs = $({
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
}), qs = ["fill"], Us = ["fill"];
function Qs(e, t, r, a, s, o) {
  return y(), P("svg", {
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
    }, null, 10, qs),
    C("g", null, [
      C("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: b(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, Us)
    ])
  ], 2);
}
const jl = /* @__PURE__ */ M(Gs, [["render", Qs]]);
function W(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let a = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(a, W), a;
}
var Je = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Je || {}), Ws = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ws || {});
function fe({ visible: e = !0, features: t = 0, ourProps: r, theirProps: a, ...s }) {
  var o;
  let n = At(a, r), u = Object.assign(s, { props: n });
  if (e || t & 2 && n.static)
    return Ue(u);
  if (t & 1) {
    let c = (o = n.unmount) == null || o ? 0 : 1;
    return W(c, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...s, props: { ...n, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(u);
}
function Ue({ props: e, attrs: t, slots: r, slot: a, name: s }) {
  var o, n;
  let { as: u, ...c } = Dt(e, ["unmount", "static"]), i = (o = r.default) == null ? void 0 : o.call(r, a), d = {};
  if (a) {
    let p = !1, g = [];
    for (let [x, S] of Object.entries(a))
      typeof S == "boolean" && (p = !0), S === !0 && g.push(x);
    p && (d["data-headlessui-state"] = g.join(" "));
  }
  if (u === "template") {
    if (i = Rt(i != null ? i : []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [p, ...g] = i != null ? i : [];
      if (!Ys(p) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((z) => z.trim()).filter((z, v, O) => O.indexOf(z) === v).sort((z, v) => z.localeCompare(v)).map((z) => `  - ${z}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((z) => `  - ${z}`).join(`
`)].join(`
`));
      let x = At((n = p.props) != null ? n : {}, c), S = Jt(p, x);
      for (let z in x)
        z.startsWith("on") && (S.props || (S.props = {}), S.props[z] = x[z]);
      return S;
    }
    return Array.isArray(i) && i.length === 1 ? i[0] : i;
  }
  return We(u, Object.assign({}, c, d), { default: () => i });
}
function Rt(e) {
  return e.flatMap((t) => t.type === Ve ? Rt(t.children) : [t]);
}
function At(...e) {
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
      let n = r[a];
      for (let u of n) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        u(s, ...o);
      }
    } });
  return t;
}
function Js(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Dt(e, t = []) {
  let r = Object.assign({}, e);
  for (let a of t)
    a in r && delete r[a];
  return r;
}
function Ys(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Zs = 0;
function Xs() {
  return ++Zs;
}
function He() {
  return Xs();
}
var B = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(B || {});
function Ks(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function _s(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let a = t.resolveActiveIndex(), s = a != null ? a : -1, o = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((n) => !t.resolveDisabled(n));
      case 1: {
        let n = r.slice().reverse().findIndex((u, c, i) => s !== -1 && i.length - c - 1 >= s ? !1 : !t.resolveDisabled(u));
        return n === -1 ? n : r.length - 1 - n;
      }
      case 2:
        return r.findIndex((n, u) => u <= s ? !1 : !t.resolveDisabled(n));
      case 3: {
        let n = r.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return n === -1 ? n : r.length - 1 - n;
      }
      case 4:
        return r.findIndex((n) => t.resolveId(n) === e.id);
      case 5:
        return null;
      default:
        Ks(e);
    }
  })();
  return o === -1 ? a : o;
}
function L(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Et = Symbol("Context");
var xe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(xe || {});
function eo() {
  return T(Et, null);
}
function to(e) {
  yt(Et, e);
}
function bt(e, t) {
  if (e)
    return e;
  let r = t != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function ro(e, t) {
  let r = j(bt(e.value.type, e.value.as));
  return ce(() => {
    r.value = bt(e.value.type, e.value.as);
  }), Ye(() => {
    var a;
    r.value || !L(t) || L(t) instanceof HTMLButtonElement && !((a = L(t)) != null && a.hasAttribute("type")) && (r.value = "button");
  }), r;
}
class ao {
  constructor() {
    this.current = this.detect(), this.currentId = 0;
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
let It = new ao();
function so(e) {
  if (It.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = L(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let gt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var oo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(oo || {}), lo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(lo || {}), no = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(no || {}), rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rt || {});
function Ht(e, t = 0) {
  var r;
  return e === ((r = so(e)) == null ? void 0 : r.body) ? !1 : W(t, { [0]() {
    return e.matches(gt);
  }, [1]() {
    let a = e;
    for (; a !== null; ) {
      if (a.matches(gt))
        return !0;
      a = a.parentElement;
    }
    return !1;
  } });
}
function io(e, t = (r) => r) {
  return e.slice().sort((r, a) => {
    let s = t(r), o = t(a);
    if (s === null || o === null)
      return 0;
    let n = s.compareDocumentPosition(o);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qe(e, t, r) {
  It.isServer || Ye((a) => {
    document.addEventListener(e, t, r), a(() => document.removeEventListener(e, t, r));
  });
}
function uo(e, t, r = m(() => !0)) {
  function a(o, n) {
    if (!r.value || o.defaultPrevented)
      return;
    let u = n(o);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let c = function i(d) {
      return typeof d == "function" ? i(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let i of c) {
      if (i === null)
        continue;
      let d = i instanceof HTMLElement ? i : L(i);
      if (d != null && d.contains(u) || o.composed && o.composedPath().includes(d))
        return;
    }
    return !Ht(u, rt.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let s = j(null);
  Qe("mousedown", (o) => {
    var n, u;
    r.value && (s.value = ((u = (n = o.composedPath) == null ? void 0 : n.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Qe("click", (o) => {
    !s.value || (a(o, () => s.value), s.value = null);
  }, !0), Qe("blur", (o) => a(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Nt = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Nt || {});
let co = $({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: a, ...s } = e, o = { "aria-hidden": (a & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(a & 4) === 4 && (a & 2) !== 2 && { display: "none" } } };
    return fe({ ourProps: o, theirProps: s, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Gt(e = {}, t = null, r = []) {
  for (let [a, s] of Object.entries(e))
    Ut(r, qt(t, a), s);
  return r;
}
function qt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ut(e, t, r) {
  if (Array.isArray(r))
    for (let [a, s] of r.entries())
      Ut(e, qt(t, a.toString()), s);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : Gt(r, t, e);
}
function po(e, t, r) {
  let a = j(r == null ? void 0 : r.value), s = m(() => e.value !== void 0);
  return [m(() => s.value ? e.value : a.value), function(o) {
    return s.value || (a.value = o), t == null ? void 0 : t(o);
  }];
}
function ht(e) {
  return [e.screenX, e.screenY];
}
function fo() {
  let e = j([-1, -1]);
  return { wasMoved(t) {
    let r = ht(t);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(t) {
    e.value = ht(t);
  } };
}
function bo(e, t) {
  return e === t;
}
var go = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(go || {}), ho = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ho || {}), vo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(vo || {});
function mo(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Qt = Symbol("ListboxContext");
function Se(e) {
  let t = T(Qt, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Se), r;
  }
  return t;
}
let yo = $({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => bo }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: r, emit: a }) {
  let s = j(1), o = j(null), n = j(null), u = j(null), c = j([]), i = j(""), d = j(null), p = j(1);
  function g(h = (k) => k) {
    let k = d.value !== null ? c.value[d.value] : null, w = io(h(c.value.slice()), (E) => L(E.dataRef.domRef)), V = k ? w.indexOf(k) : null;
    return V === -1 && (V = null), { options: w, activeOptionIndex: V };
  }
  let x = m(() => e.multiple ? 1 : 0), [S, z] = po(m(() => e.modelValue === void 0 ? W(x.value, { [1]: [], [0]: void 0 }) : e.modelValue), (h) => a("update:modelValue", h), m(() => e.defaultValue)), v = { listboxState: s, value: S, mode: x, compare(h, k) {
    if (typeof e.by == "string") {
      let w = e.by;
      return (h == null ? void 0 : h[w]) === (k == null ? void 0 : k[w]);
    }
    return e.by(h, k);
  }, orientation: m(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: n, optionsRef: u, disabled: m(() => e.disabled), options: c, searchQuery: i, activeOptionIndex: d, activationTrigger: p, closeListbox() {
    e.disabled || s.value !== 1 && (s.value = 1, d.value = null);
  }, openListbox() {
    e.disabled || s.value !== 0 && (s.value = 0);
  }, goToOption(h, k, w) {
    if (e.disabled || s.value === 1)
      return;
    let V = g(), E = _s(h === R.Specific ? { focus: R.Specific, id: k } : { focus: h }, { resolveItems: () => V.options, resolveActiveIndex: () => V.activeOptionIndex, resolveId: (ue) => ue.id, resolveDisabled: (ue) => ue.dataRef.disabled });
    i.value = "", d.value = E, p.value = w != null ? w : 1, c.value = V.options;
  }, search(h) {
    if (e.disabled || s.value === 1)
      return;
    let k = i.value !== "" ? 0 : 1;
    i.value += h.toLowerCase();
    let w = (d.value !== null ? c.value.slice(d.value + k).concat(c.value.slice(0, d.value + k)) : c.value).find((E) => E.dataRef.textValue.startsWith(i.value) && !E.dataRef.disabled), V = w ? c.value.indexOf(w) : -1;
    V === -1 || V === d.value || (d.value = V, p.value = 1);
  }, clearSearch() {
    e.disabled || s.value !== 1 && i.value !== "" && (i.value = "");
  }, registerOption(h, k) {
    let w = g((V) => [...V, { id: h, dataRef: k }]);
    c.value = w.options, d.value = w.activeOptionIndex;
  }, unregisterOption(h) {
    let k = g((w) => {
      let V = w.findIndex((E) => E.id === h);
      return V !== -1 && w.splice(V, 1), w;
    });
    c.value = k.options, d.value = k.activeOptionIndex, p.value = 1;
  }, select(h) {
    e.disabled || z(W(x.value, { [0]: () => h, [1]: () => {
      let k = q(v.value.value).slice(), w = q(h), V = k.findIndex((E) => v.compare(w, q(E)));
      return V === -1 ? k.push(w) : k.splice(V, 1), k;
    } }));
  } };
  uo([n, u], (h, k) => {
    var w;
    v.closeListbox(), Ht(k, rt.Loose) || (h.preventDefault(), (w = L(n)) == null || w.focus());
  }, m(() => s.value === 0)), yt(Qt, v), to(m(() => W(s.value, { [0]: xe.Open, [1]: xe.Closed })));
  let O = m(() => {
    var h;
    return (h = L(n)) == null ? void 0 : h.closest("form");
  });
  return ce(() => {
    xt([O], () => {
      if (!O.value || e.defaultValue === void 0)
        return;
      function h() {
        v.select(e.defaultValue);
      }
      return O.value.addEventListener("reset", h), () => {
        var k;
        (k = O.value) == null || k.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: h, modelValue: k, disabled: w, ...V } = e, E = { open: s.value === 0, disabled: w, value: S.value };
    return We(Ve, [...h != null && S.value != null ? Gt({ [h]: S.value }).map(([ue, Wt]) => We(co, Js({ features: Nt.Hidden, key: ue, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: ue, value: Wt }))) : [], fe({ ourProps: {}, theirProps: { ...r, ...Dt(V, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: E, slots: t, attrs: r, name: "Listbox" })]);
  };
} }), xo = $({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${He()}` } }, setup(e, { attrs: t, slots: r }) {
  let a = Se("ListboxLabel");
  function s() {
    var o;
    (o = L(a.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: a.listboxState.value === 0, disabled: a.disabled.value }, { id: n, ...u } = e, c = { id: n, ref: a.labelRef, onClick: s };
    return fe({ ourProps: c, theirProps: u, slot: o, attrs: t, slots: r, name: "ListboxLabel" });
  };
} }), ko = $({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${He()}` } }, setup(e, { attrs: t, slots: r, expose: a }) {
  let s = Se("ListboxButton");
  a({ el: s.buttonRef, $el: s.buttonRef });
  function o(i) {
    switch (i.key) {
      case B.Space:
      case B.Enter:
      case B.ArrowDown:
        i.preventDefault(), s.openListbox(), ie(() => {
          var d;
          (d = L(s.optionsRef)) == null || d.focus({ preventScroll: !0 }), s.value.value || s.goToOption(R.First);
        });
        break;
      case B.ArrowUp:
        i.preventDefault(), s.openListbox(), ie(() => {
          var d;
          (d = L(s.optionsRef)) == null || d.focus({ preventScroll: !0 }), s.value.value || s.goToOption(R.Last);
        });
        break;
    }
  }
  function n(i) {
    switch (i.key) {
      case B.Space:
        i.preventDefault();
        break;
    }
  }
  function u(i) {
    s.disabled.value || (s.listboxState.value === 0 ? (s.closeListbox(), ie(() => {
      var d;
      return (d = L(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (i.preventDefault(), s.openListbox(), mo(() => {
      var d;
      return (d = L(s.optionsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let c = ro(m(() => ({ as: e.as, type: t.type })), s.buttonRef);
  return () => {
    var i, d;
    let p = { open: s.listboxState.value === 0, disabled: s.disabled.value, value: s.value.value }, { id: g, ...x } = e, S = { ref: s.buttonRef, id: g, type: c.value, "aria-haspopup": "listbox", "aria-controls": (i = L(s.optionsRef)) == null ? void 0 : i.id, "aria-expanded": s.disabled.value ? void 0 : s.listboxState.value === 0, "aria-labelledby": s.labelRef.value ? [(d = L(s.labelRef)) == null ? void 0 : d.id, g].join(" ") : void 0, disabled: s.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: n, onClick: u };
    return fe({ ourProps: S, theirProps: x, slot: p, attrs: t, slots: r, name: "ListboxButton" });
  };
} }), So = $({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${He()}` } }, setup(e, { attrs: t, slots: r, expose: a }) {
  let s = Se("ListboxOptions"), o = j(null);
  a({ el: s.optionsRef, $el: s.optionsRef });
  function n(i) {
    switch (o.value && clearTimeout(o.value), i.key) {
      case B.Space:
        if (s.searchQuery.value !== "")
          return i.preventDefault(), i.stopPropagation(), s.search(i.key);
      case B.Enter:
        if (i.preventDefault(), i.stopPropagation(), s.activeOptionIndex.value !== null) {
          let d = s.options.value[s.activeOptionIndex.value];
          s.select(d.dataRef.value);
        }
        s.mode.value === 0 && (s.closeListbox(), ie(() => {
          var d;
          return (d = L(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        }));
        break;
      case W(s.orientation.value, { vertical: B.ArrowDown, horizontal: B.ArrowRight }):
        return i.preventDefault(), i.stopPropagation(), s.goToOption(R.Next);
      case W(s.orientation.value, { vertical: B.ArrowUp, horizontal: B.ArrowLeft }):
        return i.preventDefault(), i.stopPropagation(), s.goToOption(R.Previous);
      case B.Home:
      case B.PageUp:
        return i.preventDefault(), i.stopPropagation(), s.goToOption(R.First);
      case B.End:
      case B.PageDown:
        return i.preventDefault(), i.stopPropagation(), s.goToOption(R.Last);
      case B.Escape:
        i.preventDefault(), i.stopPropagation(), s.closeListbox(), ie(() => {
          var d;
          return (d = L(s.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        break;
      case B.Tab:
        i.preventDefault(), i.stopPropagation();
        break;
      default:
        i.key.length === 1 && (s.search(i.key), o.value = setTimeout(() => s.clearSearch(), 350));
        break;
    }
  }
  let u = eo(), c = m(() => u !== null ? (u.value & xe.Open) === xe.Open : s.listboxState.value === 0);
  return () => {
    var i, d, p, g;
    let x = { open: s.listboxState.value === 0 }, { id: S, ...z } = e, v = { "aria-activedescendant": s.activeOptionIndex.value === null || (i = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : i.id, "aria-multiselectable": s.mode.value === 1 ? !0 : void 0, "aria-labelledby": (g = (d = L(s.labelRef)) == null ? void 0 : d.id) != null ? g : (p = L(s.buttonRef)) == null ? void 0 : p.id, "aria-orientation": s.orientation.value, id: S, onKeydown: n, role: "listbox", tabIndex: 0, ref: s.optionsRef };
    return fe({ ourProps: v, theirProps: z, slot: x, attrs: t, slots: r, features: Je.RenderStrategy | Je.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), wo = $({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${He()}` } }, setup(e, { slots: t, attrs: r, expose: a }) {
  let s = Se("ListboxOption"), o = j(null);
  a({ el: o, $el: o });
  let n = m(() => s.activeOptionIndex.value !== null ? s.options.value[s.activeOptionIndex.value].id === e.id : !1), u = m(() => W(s.mode.value, { [0]: () => s.compare(q(s.value.value), q(e.value)), [1]: () => q(s.value.value).some((v) => s.compare(q(v), q(e.value))) })), c = m(() => W(s.mode.value, { [1]: () => {
    var v;
    let O = q(s.value.value);
    return ((v = s.options.value.find((h) => O.some((k) => s.compare(q(k), q(h.dataRef.value))))) == null ? void 0 : v.id) === e.id;
  }, [0]: () => u.value })), i = m(() => ({ disabled: e.disabled, value: e.value, textValue: "", domRef: o }));
  ce(() => {
    var v, O;
    let h = (O = (v = L(o)) == null ? void 0 : v.textContent) == null ? void 0 : O.toLowerCase().trim();
    h !== void 0 && (i.value.textValue = h);
  }), ce(() => s.registerOption(e.id, i)), Yt(() => s.unregisterOption(e.id)), ce(() => {
    xt([s.listboxState, u], () => {
      s.listboxState.value === 0 && (!u.value || W(s.mode.value, { [1]: () => {
        c.value && s.goToOption(R.Specific, e.id);
      }, [0]: () => {
        s.goToOption(R.Specific, e.id);
      } }));
    }, { immediate: !0 });
  }), Ye(() => {
    s.listboxState.value === 0 && (!n.value || s.activationTrigger.value !== 0 && ie(() => {
      var v, O;
      return (O = (v = L(o)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : O.call(v, { block: "nearest" });
    }));
  });
  function d(v) {
    if (e.disabled)
      return v.preventDefault();
    s.select(e.value), s.mode.value === 0 && (s.closeListbox(), ie(() => {
      var O;
      return (O = L(s.buttonRef)) == null ? void 0 : O.focus({ preventScroll: !0 });
    }));
  }
  function p() {
    if (e.disabled)
      return s.goToOption(R.Nothing);
    s.goToOption(R.Specific, e.id);
  }
  let g = fo();
  function x(v) {
    g.update(v);
  }
  function S(v) {
    !g.wasMoved(v) || e.disabled || n.value || s.goToOption(R.Specific, e.id, 0);
  }
  function z(v) {
    !g.wasMoved(v) || e.disabled || !n.value || s.goToOption(R.Nothing);
  }
  return () => {
    let { disabled: v } = e, O = { active: n.value, selected: u.value, disabled: v }, { id: h, value: k, disabled: w, ...V } = e, E = { id: h, ref: o, role: "option", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: d, onFocus: p, onPointerenter: x, onMouseenter: x, onPointermove: S, onMousemove: S, onPointerleave: z, onMouseleave: z };
    return fe({ ourProps: E, theirProps: V, slot: O, attrs: r, slots: t, name: "ListboxOption" });
  };
} });
const Co = $({
  name: "VvListbox",
  emits: ["update:modelValue"],
  components: {
    Listbox: yo,
    ListboxButton: ko,
    ListboxLabel: xo,
    ListboxOptions: So,
    ListboxOption: wo
  },
  props: {
    data: {
      type: Array,
      default: l.defaults.VvListbox.data
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvListbox.debug
    },
    displayClasses: {
      type: String,
      default: l.defaults.VvListbox.displayClasses
    },
    displayDisabledClasses: {
      type: String,
      default: l.defaults.VvListbox.displayDisabledClasses
    },
    iconDisabledClasses: {
      type: String,
      default: l.defaults.VvListbox.iconDisabledClasses
    },
    iconSelectedClasses: {
      type: String,
      default: l.defaults.VvListbox.iconSelectedClasses
    },
    iconsSizeClasses: {
      type: String,
      default: l.defaults.VvListbox.iconsSizeClasses
    },
    label: {
      type: String,
      default: l.defaults.VvListbox.label
    },
    labelClasses: {
      type: String,
      default: l.defaults.VvListbox.labelClasses
    },
    listboxButtonClasses: {
      type: String,
      default: l.defaults.VvListbox.listboxButtonClasses
    },
    listboxButtonColor: {
      type: String,
      default: l.defaults.VvListbox.listboxButtonColor
    },
    listboxButtonPalette: {
      type: String,
      default: l.defaults.VvListbox.listboxButtonPalette
    },
    listboxOptionClasses: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionClasses
    },
    listboxOptionColor: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionColor
    },
    listboxOptionPalette: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionPalette
    },
    listboxOptionsClasses: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionsClasses
    },
    listboxOptionsWithLabelSpacing: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionsWithLabelSpacing
    },
    listboxOptionsWithoutLabelSpacing: {
      type: String,
      default: l.defaults.VvListbox.listboxOptionsWithoutLabelSpacing
    },
    optionIconParentClasses: {
      type: String,
      default: l.defaults.VvListbox.optionIconParentClasses
    },
    selectedDisplayClasses: {
      type: String,
      default: l.defaults.VvListbox.selectedDisplayClasses
    },
    selectedIndex: {
      type: Number,
      default: l.defaults.VvListbox.selectedIndex
    },
    size: {
      type: String,
      default: l.defaults.VvListbox.size
    }
  },
  setup(e) {
    const t = j(e.data), r = j(t.value[e.selectedIndex]), a = Object.keys(T("vv", {})).length > 0 ? T("vv") : l, s = m(() => {
      var u, c, i, d, p, g;
      let n = [];
      return (u = a == null ? void 0 : a.listboxes) != null && u.base() && n.push(a.listboxes.base()), e.size !== "" && ((i = (c = a == null ? void 0 : a.listboxes) == null ? void 0 : c.sizes) == null ? void 0 : i[e.size]) && n.push(String(a.listboxes.sizes[e.size])), (g = (p = (d = a == null ? void 0 : a.listboxes) == null ? void 0 : d.buttonPalettes) == null ? void 0 : p[e.listboxButtonPalette]) != null && g[e.listboxButtonColor] && n.push(String(a.listboxes.buttonPalettes[e.listboxButtonPalette][e.listboxButtonColor])), n.join(" ").trim();
    }), o = m(() => {
      var u, c, i;
      let n = [];
      return (i = (c = (u = a == null ? void 0 : a.listboxes) == null ? void 0 : u.optionPalettes) == null ? void 0 : c[e.listboxOptionPalette]) != null && i[e.listboxOptionColor] && n.push(String(a.listboxes.optionPalettes[e.listboxOptionPalette][e.listboxOptionColor])), n.join(" ").trim();
    });
    return {
      listboxButtonVvClasses: s,
      listboxOptionVvClasses: o,
      selectData: t,
      selectedItem: r,
      VvConfig: l
    };
  }
}), zo = ["data-vv-listbox-prop-selected-display-classes"], Vo = ["data-vv-listbox-prop-icons-size-classes"], To = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), $o = [
  To
], Oo = ["data-vv-listbox-prop-option-icon-parent-classes"], Lo = ["data-vv-listbox-prop-icon-size-classes"], Po = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), Fo = [
  Po
], Bo = ["data-vv-listbox-prop-icon-size-classes"], jo = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
}, null, -1), Mo = [
  jo
], Ro = ["data-vv-listbox-prop-display-classes", "data-vv-listbox-prop-display-disabled-classes"];
function Ao(e, t, r, a, s, o) {
  const n = se("ListboxLabel"), u = se("ListboxButton"), c = se("ListboxOption"), i = se("ListboxOptions"), d = se("Listbox");
  return y(), A(d, {
    as: "div",
    modelValue: e.selectedItem,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (p) => e.selectedItem = p),
      t[1] || (t[1] = (p) => e.$emit("update:modelValue", p))
    ],
    by: "id"
  }, {
    default: F(() => [
      e.label.length > 0 ? (y(), A(n, {
        key: 0,
        class: b(e.labelClasses),
        "data-vv-listbox-prop-label-classes": e.debug ? e.labelClasses : null
      }, {
        default: F(() => [
          I(e.$slots, "default", {}, () => [
            ee(N(e.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "data-vv-listbox-prop-label-classes"])) : (y(), A(n, {
        key: 1,
        class: b(e.labelClasses),
        "data-vv-listbox-prop-label-classes": e.debug ? e.labelClasses : null
      }, {
        default: F(() => [
          I(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "data-vv-listbox-prop-label-classes"])),
      ze(u, {
        class: b([e.listboxButtonClasses, e.listboxButtonVvClasses]),
        "data-vv-listbox-prop-listbox-button-classes": e.debug ? e.listboxButtonClasses : null
      }, {
        default: F(() => [
          C("span", {
            class: b(e.selectedDisplayClasses),
            "data-vv-listbox-prop-selected-display-classes": e.debug ? e.selectedDisplayClasses : null
          }, N(e.selectedItem.display), 11, zo),
          (y(), P("svg", {
            class: b(e.iconsSizeClasses),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            "data-vv-listbox-prop-icons-size-classes": e.debug ? e.iconsSizeClasses : null
          }, $o, 10, Vo))
        ]),
        _: 1
      }, 8, ["class", "data-vv-listbox-prop-listbox-button-classes"]),
      ze(i, {
        class: b([e.listboxOptionsClasses, e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : e.listboxOptionsWithoutLabelSpacing]),
        "data-vv-listbox-prop-listbox-options-classes": e.debug ? e.listboxOptionsClasses : null,
        "data-vv-listbox-prop-listbox-options-with-label-spacing": e.debug && e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : null,
        "data-vv-listbox-prop-listbox-options-without-label-spacing": e.debug && e.label.length <= 0 ? e.listboxOptionsWithoutLabelSpacing : null
      }, {
        default: F(() => [
          (y(!0), P(Ve, null, Zt(e.selectData, (p) => (y(), P(Ve, null, [
            p.value !== "" ? (y(), A(c, {
              key: p.id,
              value: p,
              disabled: p.disabled,
              class: b([e.listboxOptionClasses, e.listboxOptionVvClasses]),
              "data-vv-listbox-prop-listbox-option-classes": e.debug ? e.listboxOptionClasses : null,
              "data-vv-listbox-prop-listbox-option-vv-classes": e.debug ? e.listboxOptionVvClasses : null
            }, {
              default: F(() => [
                C("span", {
                  class: b(e.optionIconParentClasses),
                  "data-vv-listbox-prop-option-icon-parent-classes": e.debug ? e.optionIconParentClasses : null
                }, [
                  (y(), P("svg", {
                    class: b(["hidden ui-selected:block mr-3", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "data-vv-listbox-prop-icon-size-classes": e.debug ? e.iconsSizeClasses : null
                  }, Fo, 10, Lo)),
                  p.disabled ? (y(), P("svg", {
                    key: 0,
                    class: b(["mr-3 opacity-25", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    "data-vv-listbox-prop-icon-size-classes": e.debug ? e.iconsSizeClasses : null
                  }, Mo, 10, Bo)) : G("", !0)
                ], 10, Oo),
                C("span", {
                  class: b([e.displayClasses, p.disabled ? e.displayDisabledClasses : ""]),
                  "data-vv-listbox-prop-display-classes": e.debug ? e.displayClasses : null,
                  "data-vv-listbox-prop-display-disabled-classes": e.debug && p.disabled ? e.displayDisabledClasses : null
                }, N(p.display), 11, Ro)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class", "data-vv-listbox-prop-listbox-option-classes", "data-vv-listbox-prop-listbox-option-vv-classes"])) : G("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["class", "data-vv-listbox-prop-listbox-options-classes", "data-vv-listbox-prop-listbox-options-with-label-spacing", "data-vv-listbox-prop-listbox-options-without-label-spacing"])
    ]),
    _: 3
  }, 8, ["modelValue"]);
}
const Ml = /* @__PURE__ */ M(Co, [["render", Ao]]), Do = $({
  name: "VvSelect",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvSelect.color
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvSelect.debug
    },
    palette: {
      type: String,
      default: l.defaults.VvSelect.palette
    },
    size: {
      type: String,
      default: l.defaults.VvSelect.size
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    return { classes: m(() => {
      var o, n, u, c, i, d;
      let s = [];
      return (o = t == null ? void 0 : t.selects) != null && o.base() && s.push(t.selects.base()), e.size !== "" && ((u = (n = t == null ? void 0 : t.selects) == null ? void 0 : n.sizes) == null ? void 0 : u[e.size]) && s.push(String(t.selects.sizes[e.size])), (d = (i = (c = t == null ? void 0 : t.selects) == null ? void 0 : c.palettes) == null ? void 0 : i[e.palette]) != null && d[e.color] && s.push(String(t.selects.palettes[e.palette][e.color])), s.join(" ").trim();
    }), handleSelectChange: (s) => s.target.value };
  }
}), Eo = ["value", "data-vv-select-generated-classes", "data-vv-select-prop-color", "data-vv-select-prop-model-value", "data-vv-select-prop-palette", "data-vv-select-prop-size"];
function Io(e, t, r, a, s, o) {
  return y(), P("select", {
    class: b(e.classes),
    value: e.modelValue,
    onChange: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleSelectChange(n))),
    "data-vv-select-generated-classes": e.debug ? e.classes : null,
    "data-vv-select-prop-color": e.debug ? e.color : null,
    "data-vv-select-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-select-prop-palette": e.debug ? e.palette : null,
    "data-vv-select-prop-size": e.debug ? e.size : null
  }, [
    I(e.$slots, "default")
  ], 42, Eo);
}
const Rl = /* @__PURE__ */ M(Do, [["render", Io]]), Ho = $({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: l.defaults.VvTextarea.color
    },
    debug: {
      type: Boolean,
      default: l.defaults.VvTextarea.debug
    },
    modelValue: {
      type: String,
      default: ""
    },
    palette: {
      type: String,
      default: l.defaults.VvTextarea.palette
    },
    rowSize: {
      type: String,
      default: l.defaults.VvTextarea.rowSize
    },
    size: {
      type: String,
      default: l.defaults.VvTextarea.size
    }
  },
  setup(e) {
    const t = Object.keys(T("vv", {})).length > 0 ? T("vv") : l;
    let r = m(() => {
      var n, u, c, i, d, p;
      let o = [];
      return (n = t == null ? void 0 : t.textareas) != null && n.base() && o.push(t.textareas.base()), e.size !== "" && ((c = (u = t == null ? void 0 : t.textareas) == null ? void 0 : u.sizes) == null ? void 0 : c[e.size]) && o.push(String(t.textareas.sizes[e.size])), (p = (d = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.palettes) == null ? void 0 : d[e.palette]) != null && p[e.color] && o.push(String(t.textareas.palettes[e.palette][e.color])), o.join(" ").trim();
    }), a = m(() => {
      var o, n;
      if (e.rowSize !== "" && ((n = (o = t == null ? void 0 : t.textareas) == null ? void 0 : o.rowSizes) == null ? void 0 : n[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: a, handleTextareaChange: (o) => o.target.value };
  }
}), No = ["rows", "value", "data-vv-textarea-generated-classes", "data-vv-textarea-prop-color", "data-vv-textarea-prop-model-value", "data-vv-textarea-prop-palette", "data-vv-textarea-prop-row-size", "data-vv-textarea-prop-size"];
function Go(e, t, r, a, s, o) {
  return y(), P("textarea", {
    class: b(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (n) => e.$emit("update:modelValue", e.handleTextareaChange(n))),
    "data-vv-textarea-generated-classes": e.debug ? e.classes : null,
    "data-vv-textarea-prop-color": e.debug ? e.color : null,
    "data-vv-textarea-prop-model-value": e.debug ? e.modelValue : null,
    "data-vv-textarea-prop-palette": e.debug ? e.palette : null,
    "data-vv-textarea-prop-row-size": e.debug ? e.rowSize : null,
    "data-vv-textarea-prop-size": e.debug ? e.size : null
  }, null, 42, No);
}
const Al = /* @__PURE__ */ M(Ho, [["render", Go]]);
export {
  lr as AnchorDefault,
  Xt as Anchors,
  nr as BorderDefault,
  ir as ButtonOutline,
  ur as ButtonSolid,
  Kt as Buttons,
  dr as CheckboxDefault,
  _t as Checkboxes,
  er as ColorModes,
  cr as FillDefault,
  pr as GroundConsole,
  fr as GroundDefault,
  br as GroundMonochromatic,
  gr as GroundPastel,
  Ne as InputDefault,
  Ge as InputUnderlined,
  kt as Inputs,
  xr as ListDefault,
  hr as ListboxButtonDefault,
  vr as ListboxButtonUnderlined,
  mr as ListboxOptionDefault,
  yr as ListboxOptionUnderlined,
  tr as Listboxes,
  rr as Lists,
  Fl as ObeKnockoutMark,
  kr as RadioDefault,
  ar as Radios,
  Sr as ScrollbarDefault,
  sr as Selects,
  Ze as Text,
  wr as TextDefault,
  or as Textareas,
  re as Transitions,
  bl as ValidAudioSourceTypes,
  jt as ValidButtonTypes,
  Ta as ValidColorModes,
  gl as ValidCommentStyles,
  hl as ValidDirections,
  Pa as ValidElementTags,
  vl as ValidFontAwesomeFamilies,
  ml as ValidFontAwesomeSizes,
  yl as ValidHeadingLevels,
  xl as ValidImageSourceTypes,
  Aa as ValidInputTypes,
  Ea as ValidListTypes,
  kl as ValidUrlDecorations,
  Sl as ValidVideoSourceTypes,
  Bl as VueVentusLogoText,
  jl as VueVentusSpinningMark,
  wl as VvAnchor,
  Ya as VvButton,
  Tl as VvCheckbox,
  Cl as VvColorModeButton,
  l as VvConfig,
  Mt as VvEl,
  zl as VvFormGroup,
  $l as VvInput,
  Ll as VvList,
  Pl as VvListItem,
  Ml as VvListbox,
  Vl as VvQuadFormGroup,
  Ol as VvRadio,
  Rl as VvSelect,
  Al as VvTextarea,
  Uo as appColorPairs,
  Qo as camelCaseToTitleCase,
  Wo as decimalsOnly,
  Jo as digitsOnly,
  Yo as forceBodyClick,
  Zo as formatBytes,
  Xo as formatDateMMDDYYYY,
  Ko as formatDateTraditional,
  _o as formatMediaTime,
  el as formatNumber,
  K as getRandomInt,
  Ft as hexadecimals,
  tl as mergeWithVvConfig,
  Pt as monthNames,
  ge as padNumber,
  rl as randomGroundAndTextColors,
  wa as randomHex,
  al as randomHexShort,
  sl as randomString,
  ol as slugifyString,
  ll as stringToCamelCase,
  nl as stringToFilename,
  il as timestampToDateTimeAmPm,
  ul as uniqueArray,
  dl as verifyDateMMDDYYYY,
  cl as verifyEmailString,
  pl as verifyRunTime,
  fl as verifyStringLengths,
  Ie as verifyType
};
