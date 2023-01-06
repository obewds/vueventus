import { defineComponent as T, inject as z, computed as v, openBlock as x, createElementBlock as O, normalizeClass as g, renderSlot as D, ref as j, onMounted as ce, resolveComponent as oe, createBlock as A, withCtx as L, createCommentVNode as q, createElementVNode as w, resolveDynamicComponent as vt, createVNode as Ce, createTextVNode as ee, toDisplayString as H, useCssVars as mt, cloneVNode as Wt, h as We, Fragment as Ve, provide as xt, watchEffect as Ye, watch as yt, onUnmounted as Jt, nextTick as ie, toRaw as G, renderList as Yt } from "vue";
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
}, Zt = {
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
}, Xt = {
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
}, Kt = {
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
}, er = {
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
}, tr = {
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
}, rr = {
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
}, ar = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, lr = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, nr = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, ir = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, ur = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, dr = {
  default: "dark:fill-gray-100 fill-gray-900",
  error: "fill-rose-500 dark:fill-rose-300",
  primary: "fill-blue-500 dark:fill-blue-300",
  secondary: "fill-violet-500 dark:fill-violet-300",
  success: "fill-green-600 dark:fill-green-300"
}, cr = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, pr = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, fr = {
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
}, qe = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, br = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500"
}, hr = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500"
}, vr = {
  default: "ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, mr = {
  default: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, xr = {
  default: "",
  error: "marker:text-rose-500 dark:marker:text-rose-300",
  primary: "marker:text-blue-500 dark:marker:text-blue-300",
  secondary: "marker:text-violet-500 dark:marker:text-violet-300",
  success: "marker:text-green-600 dark:marker:text-green-300"
}, yr = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, kr = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, Sr = {
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
    size: "md",
    tag: "div",
    textPalette: "default",
    textColor: "default"
  },
  VvFa: {
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
    palette: "default",
    size: "md",
    type: "text"
  },
  VvList: {
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
    enableColoredSymbols: !0,
    palette: "default",
    symbolColor: "primary",
    symbolPalette: "default"
  },
  VvPrism: {
    prismVars: !0
  },
  VvPrismVars: {
    commentStyle: "normal",
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
    palette: "default",
    textSize: "md"
  },
  VvScrollUp: {
    buttonClasses: "rounded-full",
    color: "primary",
    fab: !0,
    palette: "solid",
    isVisible: !1,
    offsetMinimum: 100,
    size: "xs",
    title: "Scroll to Top"
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
}, n = {
  anchors: {
    ...Zt,
    palettes: {
      default: ar
    }
  },
  borders: {
    palettes: {
      default: lr
    }
  },
  buttons: {
    ...Xt,
    palettes: {
      outline: nr,
      solid: ir
    }
  },
  checkboxes: {
    ..._t,
    palettes: {
      default: ur
    }
  },
  fills: {
    palettes: {
      default: dr
    }
  },
  inputs: {
    ...kt,
    palettes: {
      default: Ne,
      underlined: qe
    }
  },
  colorModes: {
    ...Kt
  },
  grounds: {
    palettes: {
      console: cr,
      default: pr,
      monochromatic: fr,
      pastel: gr
    }
  },
  listboxes: {
    ...er,
    buttonPalettes: {
      default: br,
      underlined: hr
    },
    optionPalettes: {
      default: vr,
      underlined: mr
    }
  },
  lists: {
    ...tr,
    palettes: {
      default: xr
    }
  },
  radios: {
    ...rr,
    palettes: {
      default: yr
    }
  },
  selects: {
    ...sr,
    palettes: {
      default: Ne,
      underlined: qe
    }
  },
  text: {
    ...Ze,
    palettes: {
      default: kr
    }
  },
  textareas: {
    ...or,
    palettes: {
      default: Ne,
      underlined: qe
    }
  },
  transitions: {
    ...re
  },
  defaults: Sr
}, B = Math.round, Y = Math.min, Z = Math.max, wr = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, ze = (e) => typeof e == "string" && e.includes("%"), Ge = (e) => e < 1 ? B(e) : e, Cr = (e) => B(100 * e) / 100, St = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), ge = (e) => e.a < 1 && e.a >= 0, Me = (e) => Y(1, Z(0, e)), Vr = (e) => e.length === 1 ? `0${e}` : `${e}`, zr = "[-\\+]?\\d+%?", Tr = "[-\\+]?\\d*\\.\\d+%?", ae = `(?:${Tr})|(?:${zr})`, te = (e) => new RegExp(ae).test(e), wt = (e) => te(e.r) && te(e.g) && te(e.b), Xe = `[\\s|\\(]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})\\s*\\)?`, _e = `[\\s|\\(]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})\\s*\\)?`;
function I(e, t) {
  wr(e) && (e = "100%");
  const r = ze(e);
  return e = Y(t, Z(0, Number.parseFloat(e))), r && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const he = (e) => Number.parseInt(e, 16), st = (e) => he(e) / 255, ve = (e) => e <= 1 ? `${e * 100}%` : e, le = (e) => {
  const [t, r, s] = [e._r, e._g, e._b].map((o) => B(o));
  return { r: t, g: r, b: s, a: e._roundA };
}, ne = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), Te = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => I(o, 255) * 255);
  return { r: t, g: r, b: s, a: St(e.a) };
}, $e = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => `${B(I(o, 255) * 100)}%`);
  return { r: t, g: r, b: s, a: e.a };
}, Oe = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Ct = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, B(e.a * 255)], Pe = (e, t) => {
  const r = Ct(e).map((s) => s.toString(16)).map((s) => Vr(s));
  return t && r.every((s) => s.charAt(0) === s.charAt(1)) ? r.map((s) => s.charAt(0)).join("") : r.join("");
}, me = (e, t) => Pe({ ...e, a: 1 }, t), $r = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Or(e) {
  const t = e.r / 255, r = e.g / 255, s = e.b / 255, o = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, a = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4, l = s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * a + 0.0722 * l;
}
function Pr(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  const s = new f(e).toRgb(), o = new f(t).toRgb(), a = r / 100, l = {
    r: (o.r - s.r) * a + s.r,
    g: (o.g - s.g) * a + s.g,
    b: (o.b - s.b) * a + s.b,
    a: (o.a - s.a) * a + s.a
  };
  return new f(l);
}
function Lr(e) {
  let t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
function Ke(e, t) {
  const r = new f(e), s = new f(t);
  return (Math.max(r.getLuminance(), s.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), s.getLuminance()) + 0.05);
}
function Vt(e, t, r) {
  const s = Ke(e, t), o = Lr(r);
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
function zt(e, t, r = {}) {
  const { includeFallbackColors: s, level: o, size: a } = r;
  let l, i = null, c = 0;
  for (const u of t)
    l = Ke(e, u), l > c && (c = l, i = new f(u));
  return Vt(e, i, { level: o, size: a }) || !s ? i : (r.includeFallbackColors = !1, zt(e, ["#fff", "#000"], r));
}
function de(e, t) {
  return { monochromatic: Br, analogous: Ar, complement: Fr, splitcomplement: Rr, triad: jr, tetrad: Mr }[e](...t);
}
function Fr(e) {
  const t = new f(e).toHsl();
  return t.h = (t.h + 180) % 360, new f(t);
}
function jr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 120) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 240) % 360, s: t.s, l: t.l })
  ];
}
function Mr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 90) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 180) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 270) % 360, s: t.s, l: t.l })
  ];
}
function Rr(e) {
  const t = new f(e).toHsl(), { h: r } = t;
  return [
    new f(e),
    new f({ h: (r + 72) % 360, s: t.s, l: t.l }),
    new f({ h: (r + 216) % 360, s: t.s, l: t.l })
  ];
}
function Ar(e, t = 6, r = 30) {
  const s = new f(e).toHsl(), o = 360 / r, a = [new f(e)];
  for (s.h = (s.h - (o * t >> 1) + 720) % 360; --t; )
    s.h = (s.h + o) % 360, a.push(new f(s));
  return a;
}
function Br(e, t = 6) {
  const r = new f(e).toHsv();
  let { h: s, s: o, v: a } = r;
  const l = [], i = 1 / t;
  for (; t--; )
    l.push(new f({ h: s, s: o, v: a })), a = (a + i) % 1;
  return l;
}
function se(e, t) {
  const s = { invert: Er, desaturate: Dr, saturate: Ir, greyscale: Hr, lighten: Nr, brighten: qr, darken: Gr, spin: Ur }[e](...t), [o] = t;
  return o._r = s._r, o._g = s._g, o._b = s._b, o.setAlpha(s._a), o;
}
function Er(e) {
  const t = new f(e).toRgb();
  return t.r = Z(0, Y(255, 255 - t.r)), t.g = Z(0, Y(255, 255 - t.g)), t.b = Z(0, Y(255, 255 - t.b)), new f(t);
}
function Dr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s -= t / 100, r.s = Me(r.s), new f(r);
}
function Ir(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.s += t / 100, r.s = Me(r.s), new f(r);
}
function Hr(e) {
  return new f(e).desaturate(100);
}
function Nr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l += t / 100, r.l = Me(r.l), new f(r);
}
function qr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toRgb();
  return r.r = Z(0, Y(255, r.r - B(255 * -(t / 100)))), r.g = Z(0, Y(255, r.g - B(255 * -(t / 100)))), r.b = Z(0, Y(255, r.b - B(255 * -(t / 100)))), new f(r);
}
function Gr(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new f(e).toHsl();
  return r.l -= t / 100, r.l = Me(r.l), new f(r);
}
function Ur(e, t) {
  const r = new f(e).toHsl(), s = (r.h + t) % 360;
  return r.h = s < 0 ? 360 + s : s, new f(r);
}
class Qr {
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
const Wr = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class Jr {
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
    if (this.colorspaces[t] = new Qr(this, t, { ...this.options, ...r }), r.alias)
      for (const s of r.alias)
        this.colorspaces[s] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const r = { ...Wr };
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
let Yr = 0;
const X = new Jr();
class f {
  constructor(t, r = {}) {
    if (t = t || "", t instanceof f)
      return t;
    const s = X.findColor(t);
    this._originalInput = t, this._r = Ge(s.r), this._g = Ge(s.g), this._b = Ge(s.b), this._a = s.a, this._roundA = Cr(this._a), this._format = r.format || s.format, this._gradientType = r.gradientType, this._ok = s.ok, this._tc_id = f.newId(), X.set(r);
  }
  static newId() {
    return Yr++;
  }
  static registerFormat(t, r = {}) {
    return X.add(t, r);
  }
  static equals(t, r) {
    return !t || !r ? !1 : new f(t).toRgbString() === new f(r).toRgbString();
  }
  static fromRatio(t, r) {
    if (typeof t == "object") {
      const s = {};
      for (const o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (o === "a" ? s[o] = t[o] : s[o] = ve(t[o]));
      t = s;
    }
    return new f(t, r);
  }
  static readability(t, r) {
    return Ke(t, r);
  }
  static isReadable(t, r, s) {
    return Vt(t, r, s);
  }
  static mostReadable(t, r, s) {
    return zt(t, r, s);
  }
  static mix(t, r, s) {
    return Pr(t, r, s);
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
    return $r(this.toRgb());
  }
  getLuminance() {
    return Or(ne(this));
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
    return Oe(le(this));
  }
  toRgbArray() {
    return Ct(le(this));
  }
  toPercentageRgb() {
    return $e(ne(this));
  }
  toPercentageRgbString() {
    return Oe($e(le(this)));
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
    return this._a = St(t), this._roundA = B(100 * this._a) / 100, this;
  }
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
const ot = function() {
  return {
    rgb: new RegExp(`rgb${Xe}`),
    rgba: new RegExp(`rgba${_e}`)
  };
}();
function Re(e) {
  let t, r, s, o, a;
  return (a = ot.rgb.exec(e)) ? ([t, r, s] = a.splice(1, 3), { r: t, g: r, b: s }) : (a = ot.rgba.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { r: t, g: r, b: s, a: o }) : !1;
}
const Ae = f.registerFormat("rgb");
Ae.shouldHandleInput = (e) => typeof e == "object" && wt(e) && !ze(e.r) || Re(e);
Ae.toRgb = (e) => typeof e == "object" && Te(e) || Te(Re(e));
Ae.toRaw = (e) => e;
Ae.toString = (e) => Oe(e);
const Be = f.registerFormat("prgb");
Be.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = Re(e);
    return t && ze(t.r);
  }
  return wt(e) && ze(e.r);
};
Be.toRgb = (e) => Te(typeof e == "object" ? e : Re(e));
Be.toRaw = (e) => $e(e);
Be.toString = (e) => Oe($e(e));
const U = f.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), Le = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Zr(e) {
  let t;
  if (t = Le.hex3.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((a) => `${a}${a}`).map((a) => he(a));
    return { r, g: s, b: o, a: 1 };
  }
  if (t = Le.hex6.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((a) => he(a));
    return { r, g: s, b: o, a: 1 };
  }
  return !1;
}
const Se = (e, t = U.options.shortHex) => `#${U.options.upperCaseHex ? me(e, t).toUpperCase() : me(e, t)}`;
U.shouldHandleInput = (e) => Le.hex6.test(e) || Le.hex3.test(e);
U.toRgb = (e) => Zr(e);
U.toRaw = (e) => e;
U.toString = (e) => /^hex6?$/.test(U.wanted) ? Se(e) : U.wanted === "hex3" ? Se(e, !0) : ge(e) ? U.options.alphaFormat === "hex" ? Se(e) : U.print(U.options.alphaFormat, e) : Se(e);
const Q = f.registerFormat("hex8", {
  alias: ["hex4"]
}), Fe = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Xr(e) {
  let t;
  if (t = Fe.hex4.exec(e)) {
    const r = st(`${t[4]}${t[4]}`), [s, o, a] = t.splice(1, 3).map((l) => `${l}${l}`).map((l) => he(l));
    return { r: s, g: o, b: a, a: r };
  }
  if (t = Fe.hex8.exec(e)) {
    const r = st(t[4]), [s, o, a] = t.splice(1, 3).map((l) => he(l));
    return { r: s, g: o, b: a, a: r };
  }
  return !1;
}
const we = (e, t = Q.options.shortHex) => `#${Q.options.upperCaseHex ? Pe(e, t).toUpperCase() : Pe(e, t)}`;
Q.shouldHandleInput = (e) => Fe.hex8.test(e) || Fe.hex4.test(e);
Q.toRgb = (e) => Xr(e);
Q.toRaw = (e) => e;
Q.toString = (e) => Q.wanted === "hex4" ? we(e, !0) : Q.wanted === "hex8" ? we(e) : ge(e) ? Q.options.alphaFormat === "hex" ? we(e) : Q.print(Q.options.alphaFormat, e) : we(e);
const Ee = f.registerFormat("hsl"), at = function() {
  return {
    hsl: new RegExp(`hsl${Xe}`),
    hsla: new RegExp(`hsla${_e}`)
  };
}(), _r = (e) => te(e.h) && te(e.s) && te(e.l);
function Tt(e) {
  const t = I(e.r, 255), r = I(e.g, 255), s = I(e.b, 255), o = e.a || 1, a = Z(t, r, s), l = Y(t, r, s);
  let i, c;
  const u = (a + l) / 2;
  if (a === l)
    i = 0, c = 0;
  else {
    const d = a - l;
    switch (c = u > 0.5 ? d / (2 - a - l) : d / (a + l), a) {
      case t:
        i = (r - s) / d + (r < s ? 6 : 0);
        break;
      case r:
        i = (s - t) / d + 2;
        break;
      default:
        i = (t - r) / d + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, l: u, a: o };
}
function lt(e) {
  const t = I(e.h, 360), r = I(ve(e.s), 100), s = I(ve(e.l), 100), o = e.a || 1;
  let a, l, i;
  function c(u, d, p) {
    return p = p < 0 ? p + 1 : p, p = p > 1 ? p - 1 : p, p < 1 / 6 ? u + (d - u) * 6 * p : p < 1 / 2 ? d : p < 2 / 3 ? u + (d - u) * (2 / 3 - p) * 6 : u;
  }
  if (r === 0)
    a = s, l = s, i = s;
  else {
    const u = s < 0.5 ? s * (1 + r) : s + r - s * r, d = 2 * s - u;
    a = c(d, u, t + 1 / 3), l = c(d, u, t), i = c(d, u, t - 1 / 3);
  }
  return { r: a * 255, g: l * 255, b: i * 255, a: o };
}
function $t(e) {
  let t, r, s, o, a;
  return (a = at.hsl.exec(e)) ? ([t, r, s] = a.splice(1, 3), { h: t, s: r, l: s }) : (a = at.hsla.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { h: t, s: r, l: s, a: o }) : !1;
}
function Kr(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t = B(t * 360), r = B(r * 100), s = B(s * 100), o === 1 ? `hsl(${t}, ${r}%, ${s}%)` : `hsla(${t}, ${r}%, ${s}%, ${o})`;
}
function es(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t *= 360, { h: t, s: r, l: s, a: o };
}
Ee.shouldHandleInput = (e) => typeof e == "object" && _r(e) || $t(e);
Ee.toRgb = (e) => typeof e == "object" && lt(e) || lt($t(e));
Ee.toRaw = (e) => es(Tt(e));
Ee.toString = (e) => Kr(Tt(e));
const De = f.registerFormat("hsv"), nt = function() {
  return {
    hsv: new RegExp(`hsv${Xe}`),
    hsva: new RegExp(`hsva${_e}`)
  };
}(), ts = (e) => te(e.h) && te(e.s) && te(e.v);
function Ot(e) {
  const t = I(e.r, 255), r = I(e.g, 255), s = I(e.b, 255), o = e.a || 1, a = Z(t, r, s), l = Y(t, r, s), i = a - l;
  let c;
  const u = a === 0 ? 0 : i / a, d = a;
  if (a === l)
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
  return { h: c, s: u, v: d, a: o };
}
function it(e) {
  const t = I(e.h, 360) * 6, r = I(ve(e.s), 100), s = I(ve(e.v), 100), o = e.a || 1, a = Math.floor(t), l = t - a, i = s * (1 - r), c = s * (1 - l * r), u = s * (1 - (1 - l) * r), d = a % 6, p = [s, c, i, i, u, s][d], b = [u, s, s, c, i, i][d], k = [i, i, u, s, s, c][d];
  return { r: p * 255, g: b * 255, b: k * 255, a: o };
}
function Pt(e) {
  let t, r, s, o, a;
  return (a = nt.hsv.exec(e)) ? ([t, r, s] = a.splice(1, 3), { h: t, s: r, v: s }) : (a = nt.hsva.exec(e)) ? ([t, r, s, o] = a.splice(1, 4), { h: t, s: r, v: s, a: o }) : !1;
}
function rs(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t = B(t * 360), r = B(r * 100), s = B(s * 100), o === 1 ? `hsv(${t}, ${r}%, ${s}%)` : `hsva(${t}, ${r}%, ${s}%, ${o})`;
}
function ss(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t *= 360, { h: t, s: r, v: s, a: o };
}
De.shouldHandleInput = (e) => typeof e == "object" && ts(e) || Pt(e);
De.toRgb = (e) => typeof e == "object" && it(e) || it(Pt(e));
De.toRaw = (e) => ss(Ot(e));
De.toString = (e) => rs(Ot(e));
const K = f.registerFormat("name", {
  alias: ["toName"]
});
function os(e) {
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[e[r]] = r);
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
const as = os(ye);
K.shouldHandleInput = (e) => ye[e];
K.toRgb = (e) => K.parse(ye[e]).rgba;
K.toRaw = (e) => e;
K.toString = (e) => e.a === 0 ? "transparent" : ge(e) && K.wanted === "toName" ? !1 : ge(e) && K.wanted === "name" ? `#${me(e)}` : ge(e) ? K.print(K.options.alphaFormat, e) : as[me(e, !0)] || !1;
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
J.names = ye;
function Ra(e, t = "#fff", r = "#000") {
  let s = JSON.parse(JSON.stringify(e)), o = Object.keys(s), a = {};
  for (let l = 0; l < o.length; l++)
    if (typeof s[o[l]] == "string" || typeof s[o[l]] == "number") {
      const i = J(s[o[l]], {});
      i.isValid() && (a[o[l]] = {
        backgroundColor: i.toHexString(!1),
        color: i.isDark() ? t : r
      });
    } else if (typeof s[o[l]] == "object") {
      const i = Object.keys(s[o[l]]), c = {};
      for (let u = 0; u < i.length; u++)
        if (typeof s[o[l]][i[u]] == "string") {
          const d = J(s[o[l]][i[u]], !1);
          d.isValid() && (c[i[u]] = {
            backgroundColor: d.toHexString(!0),
            color: d.isDark() ? t : r
          });
        }
      a[o[l]] = c;
    }
  return a;
}
function Aa(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function Ba(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function Ea(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function Da() {
  typeof window < "u" && document && (document.body.click(), document.body.dispatchEvent(new Event("click")));
}
function Ia(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, s = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, a)).toFixed(s)) + " " + o[a];
}
function be(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function Ha(e, t = "/") {
  return [
    be(e.getMonth() + 1),
    be(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function Lt() {
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
function Na(e, t = "long", r = "english") {
  return Lt()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function qa(e) {
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
  let a = Math.floor(t), l = r < 10 ? "0" + r : r, i = s < 10 ? "0" + s : s, c = o < 10 ? "0" + o : o, u = a < 10 ? "0" + a : a, d = l === "00" ? "" : l + ":";
  return d += i === "00" ? "" : i + ":", d += c + ":" + u, d;
}
function Ga(e) {
  return new Intl.NumberFormat().format(e);
}
function _(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Ft() {
  return "0123456789abcdef".split("");
}
var ls = function(t) {
  return ns(t) && !is(t);
};
function ns(e) {
  return !!e && typeof e == "object";
}
function is(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || cs(e);
}
var us = typeof Symbol == "function" && Symbol.for, ds = us ? Symbol.for("react.element") : 60103;
function cs(e) {
  return e.$$typeof === ds;
}
function ps(e) {
  return Array.isArray(e) ? [] : {};
}
function xe(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? pe(ps(e), e, t) : e;
}
function fs(e, t, r) {
  return e.concat(t).map(function(s) {
    return xe(s, r);
  });
}
function gs(e, t) {
  if (!t.customMerge)
    return pe;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : pe;
}
function bs(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function ut(e) {
  return Object.keys(e).concat(bs(e));
}
function jt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function hs(e, t) {
  return jt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function vs(e, t, r) {
  var s = {};
  return r.isMergeableObject(e) && ut(e).forEach(function(o) {
    s[o] = xe(e[o], r);
  }), ut(t).forEach(function(o) {
    hs(e, o) || (jt(e, o) && r.isMergeableObject(t[o]) ? s[o] = gs(o, r)(e[o], t[o], r) : s[o] = xe(t[o], r));
  }), s;
}
function pe(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || fs, r.isMergeableObject = r.isMergeableObject || ls, r.cloneUnlessOtherwiseSpecified = xe;
  var s = Array.isArray(t), o = Array.isArray(e), a = s === o;
  return a ? s ? r.arrayMerge(e, t, r) : vs(e, t, r) : xe(t, r);
}
pe.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(s, o) {
    return pe(s, o, r);
  }, {});
};
var ms = pe, xs = ms;
const ys = xs;
function Ua(e) {
  return Object.keys(e).length > 0 ? ys(n, e) : n;
}
function ks() {
  const e = Ft(), t = 0, r = 15, s = e[_(t, r)] + e[_(t, r)], o = e[_(t, r)] + e[_(t, r)], a = e[_(t, r)] + e[_(t, r)];
  return "#" + s + o + a;
}
function Qa(e = "#fff", t = "#000") {
  let r = { backgroundColor: "", color: "" }, s = J(ks(), {}), o = s.isDark();
  return r.backgroundColor = "#" + String(s.toHex(!1)), r.color = o ? e : t, r;
}
function Wa() {
  const e = Ft(), t = 0, r = 15, s = e[_(t, r)], o = e[_(t, r)], a = e[_(t, r)];
  return "#" + s + o + a;
}
function Ja(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let o = 0; o < Number(e); o++)
    t += r.charAt(Math.floor(Math.random() * s));
  return t;
}
function Ya(e, t = "-") {
  let r = e || "", s = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, s).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, s);
}
function Za(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function Xa(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function _a(e, t = "short", r = "english", s = "AM", o = "PM") {
  var a = new Date(Number(e) * 1e3), l = Lt(), i = l[r][t], c = a.getFullYear(), u = i[a.getMonth()], d = a.getDate(), p = a.getHours(), b = a.getMinutes(), k = a.getSeconds(), V = p >= 12 ? o : s;
  return p = p % 12, p = p === 0 ? 12 : p, u + " " + be(d) + ", " + c + " " + p + ":" + be(b) + ":" + be(k) + " " + V;
}
function Ka(e) {
  return e.filter((t, r, s) => s.indexOf(t) === r);
}
function Ie(e, t) {
  return typeof e === t && e !== null;
}
function el(e) {
  return Ie(e, "string") ? !!(e.length === 10 && /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}$/.test(e)) : !1;
}
function tl(e, t = 150) {
  return Ie(e, "string") ? !!(e.length >= 6 && e.length <= t && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) : !1;
}
function rl(e, t = 3) {
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
function sl(e, t = 1, r = 100) {
  return Ie(e, "string") ? e.length >= t && e.length <= r : !1;
}
const Ss = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], ol = Ss, ws = [
  "button",
  "submit",
  "reset"
], Mt = ws, Cs = [
  "light",
  "dark"
], Vs = Cs, zs = [
  "normal",
  "italic",
  "oblique"
], al = zs, Ts = [
  "up",
  "down",
  "left",
  "right",
  ""
], ll = Ts, $s = [
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
], Os = $s, Ps = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], nl = Ps, Ls = [
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
], il = Ls, Fs = [1, 2, 3, 4, 5, 6], ul = Fs, js = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], dl = js, Ms = [
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
], Rs = Ms, As = [
  "ul",
  "ol"
], Bs = As, Es = [
  "underline",
  "overline",
  "none"
], cl = Es, Ds = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], pl = Ds, Is = T({
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    return { classes: v(() => {
      var o, a, l, i, c, u, d, p, b, k, V, N, m, P, h, y, S, C;
      let s = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && s.push(t.buttons.blockBase()), e.buttonSize !== "" && ((l = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : l[e.buttonSize]) && s.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && s.push(t.buttons.fabBase()), e.buttonSize !== "" && ((u = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : u[e.buttonSize]) && s.push(t.buttons.fabSizes[e.buttonSize])) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && s.push(t.buttons.base()), e.buttonSize !== "" && ((b = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : b[e.buttonSize]) && s.push(t.buttons.sizes[e.buttonSize])), (N = (V = (k = t == null ? void 0 : t.buttons) == null ? void 0 : k.palettes) == null ? void 0 : V[e.palette]) != null && N[e.color] && s.push(t.buttons.palettes[e.palette][e.color])) : ((m = t == null ? void 0 : t.anchors) != null && m.base() && s.push(t.anchors.base()), e.textSize !== "" && ((h = (P = t == null ? void 0 : t.anchors) == null ? void 0 : P.sizes) == null ? void 0 : h[e.textSize]) && s.push(t.anchors.sizes[e.textSize]), (C = (S = (y = t == null ? void 0 : t.anchors) == null ? void 0 : y.palettes) == null ? void 0 : S[e.palette]) != null && C[e.color] && s.push(t.anchors.palettes[e.palette][e.color])), s.join(" ").trim();
    }) };
  }
}), M = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, Hs = ["href", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"], Ns = ["href", "data-vv-anchor-generated-classes", "data-vv-anchor-prop-button", "data-vv-anchor-prop-button-block", "data-vv-anchor-prop-button-fab", "data-vv-anchor-prop-button-size", "data-vv-anchor-prop-color", "data-vv-anchor-prop-external", "data-vv-anchor-prop-href", "data-vv-anchor-prop-palette", "data-vv-anchor-prop-text-size"];
function qs(e, t, r, s, o, a) {
  return e.external ? (x(), O("a", {
    key: 0,
    href: e.href,
    class: g(e.classes),
    target: "_blank",
    rel: "noopener noreferrer",
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
    D(e.$slots, "default")
  ], 10, Hs)) : (x(), O("a", {
    key: 1,
    href: e.href,
    class: g(e.classes),
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
    D(e.$slots, "default")
  ], 10, Ns));
}
const fl = /* @__PURE__ */ M(Is, [["render", qs]]), Gs = T({
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
      validator: (e) => Mt.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n, r = e.type;
    let s = v(() => {
      var a, l, i, c, u, d, p, b, k, V, N, m;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((a = t == null ? void 0 : t.buttons) != null && a.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((i = (l = t == null ? void 0 : t.buttons) == null ? void 0 : l.blockSizes) == null ? void 0 : i[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((c = t == null ? void 0 : t.buttons) != null && c.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((d = (u = t == null ? void 0 : t.buttons) == null ? void 0 : u.fabSizes) == null ? void 0 : d[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((p = t == null ? void 0 : t.buttons) != null && p.base() && o.push(t.buttons.base()), e.size !== "" && ((k = (b = t == null ? void 0 : t.buttons) == null ? void 0 : b.sizes) == null ? void 0 : k[e.size]) && o.push(t.buttons.sizes[e.size])), (m = (N = (V = t == null ? void 0 : t.buttons) == null ? void 0 : V.palettes) == null ? void 0 : N[e.palette]) != null && m[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: r, classes: s };
  }
}), Us = ["type"];
function Qs(e, t, r, s, o, a) {
  return x(), O("button", {
    type: e.btnType,
    class: g(e.classes)
  }, [
    D(e.$slots, "default")
  ], 10, Us);
}
const Ws = /* @__PURE__ */ M(Gs, [["render", Qs]]), Js = T({
  name: "VvColorModeButton",
  components: {
    VvButton: Ws
  },
  props: {
    mode: {
      type: String,
      default: n.defaults.VvColorModeButton.mode,
      validator: (e) => Vs.includes(e)
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
      validator: (e) => Mt.includes(e)
    }
  },
  setup(e) {
    const t = j(e.mode), r = v(() => t.value === "dark" ? "sun" : "moon"), s = v(() => t.value === "dark" ? e.titleLight : e.titleDark);
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
    }), { mode: t, icon: r, title: s };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), Ys = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Zs = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Xs = [
  Zs
], _s = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Ks = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), eo = [
  Ks
];
function to(e, t, r, s, o, a) {
  const l = oe("VvButton");
  return x(), A(l, {
    title: e.title,
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode(i)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: L(() => [
      e.icon === "moon" ? (x(), O("svg", Ys, Xs)) : q("", !0),
      e.icon === "sun" ? (x(), O("svg", _s, eo)) : q("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const gl = /* @__PURE__ */ M(Js, [["render", to]]), ro = T({
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
    size: {
      type: String,
      default: n.defaults.VvEl.size
    },
    tag: {
      type: String,
      default: n.defaults.VvEl.tag,
      validator: (e) => Os.includes(e)
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    return { classes: v(() => {
      var o, a, l, i, c, u, d, p, b, k, V;
      let s = [];
      return (a = (o = t == null ? void 0 : t.text) == null ? void 0 : o.sizes) != null && a[e.size] && s.push(t.text.sizes[e.size]), (c = (i = (l = t == null ? void 0 : t.borders) == null ? void 0 : l.palettes) == null ? void 0 : i[e.borderPalette]) != null && c[e.borderColor] && s.push(t.borders.palettes[e.borderPalette][e.borderColor]), (p = (d = (u = t == null ? void 0 : t.grounds) == null ? void 0 : u.palettes) == null ? void 0 : d[e.groundPalette]) != null && p[e.groundColor] && s.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (V = (k = (b = t == null ? void 0 : t.text) == null ? void 0 : b.palettes) == null ? void 0 : k[e.textPalette]) != null && V[e.textColor] && s.push(t.text.palettes[e.textPalette][e.textColor]), s.join(" ").trim();
    }) };
  }
});
function so(e, t, r, s, o, a) {
  return x(), A(vt(e.tag), {
    class: g(e.classes)
  }, {
    default: L(() => [
      D(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Rt = /* @__PURE__ */ M(ro, [["render", so]]), oo = T({
  components: { VvEl: Rt },
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
}), ao = ["data-vv-form-group-prop-wrapper-classes"], lo = ["data-vv-form-group-prop-slot-parent-classes"], no = { class: "invisible" };
function io(e, t, r, s, o, a) {
  const l = oe("VvEl");
  return x(), O("div", {
    class: g(e.wrapperClasses),
    "data-vv-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    Ce(l, {
      tag: "label",
      for: e.labelFor,
      class: g(e.labelClasses),
      "text-color": e.labelTextColor,
      "text-palette": e.labelTextPalette,
      size: e.labelTextSize,
      "data-vv-form-group-prop-label-classes": e.debug ? e.labelClasses : null,
      "data-vv-form-group-prop-label-text-color": e.debug ? e.labelTextColor : null,
      "data-vv-form-group-prop-label-text-palette": e.debug ? e.labelTextPalette : null,
      "data-vv-form-group-prop-label-text-size": e.debug ? e.labelTextSize : null
    }, {
      default: L(() => [
        ee(H(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-form-group-prop-label-classes", "data-vv-form-group-prop-label-text-color", "data-vv-form-group-prop-label-text-palette", "data-vv-form-group-prop-label-text-size"]),
    w("div", {
      class: g(e.slotParentClasses),
      "data-vv-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      D(e.$slots, "default")
    ], 10, lo),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (x(), A(l, {
      key: 0,
      tag: "div",
      class: g(e.helpClasses),
      size: e.helpTextSize,
      "data-vv-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
      "data-vv-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
    }, {
      default: L(() => [
        w("span", no, "\xA0" + H(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-size"])) : q("", !0),
    e.displayHelp ? (x(), A(l, {
      key: 1,
      tag: "div",
      class: g(e.helpClasses),
      "text-color": e.helpTextColor,
      "text-palette": e.helpTextPalette,
      size: e.helpTextSize,
      "data-vv-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
      "data-vv-form-group-prop-help-text-color": e.debug ? e.helpTextColor : null,
      "data-vv-form-group-prop-help-text-palette": e.debug ? e.helpTextPalette : null,
      "data-vv-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
    }, {
      default: L(() => [
        ee(H(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-help-classes", "data-vv-form-group-prop-help-text-color", "data-vv-form-group-prop-help-text-palette", "data-vv-form-group-prop-help-text-size"])) : q("", !0),
    e.displaySuccess ? (x(), A(l, {
      key: 2,
      tag: "div",
      class: g(e.successClasses),
      "text-color": e.successTextColor,
      "text-palette": e.successTextPalette,
      size: e.successTextSize,
      "data-vv-form-group-prop-success-classes": e.debug ? e.successClasses : null,
      "data-vv-form-group-prop-success-text-color": e.debug ? e.successTextColor : null,
      "data-vv-form-group-prop-success-text-palette": e.debug ? e.successTextPalette : null,
      "data-vv-form-group-prop-success-text-size": e.debug ? e.successTextSize : null
    }, {
      default: L(() => [
        ee(H(e.successText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-success-classes", "data-vv-form-group-prop-success-text-color", "data-vv-form-group-prop-success-text-palette", "data-vv-form-group-prop-success-text-size"])) : q("", !0),
    e.displayError === !0 ? (x(), A(l, {
      key: 3,
      tag: "div",
      class: g(e.errorClasses),
      "text-color": e.errorTextColor,
      "text-palette": e.errorTextPalette,
      size: e.errorTextSize,
      "data-vv-form-group-prop-error-classes": e.debug ? e.errorClasses : null,
      "data-vv-form-group-prop-error-text-color": e.debug ? e.errorTextColor : null,
      "data-vv-form-group-prop-error-text-palette": e.debug ? e.errorTextPalette : null,
      "data-vv-form-group-prop-error-text-size": e.debug ? e.errorTextSize : null
    }, {
      default: L(() => [
        ee(H(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["class", "text-color", "text-palette", "size", "data-vv-form-group-prop-error-classes", "data-vv-form-group-prop-error-text-color", "data-vv-form-group-prop-error-text-palette", "data-vv-form-group-prop-error-text-size"])) : q("", !0)
  ], 10, ao);
}
const bl = /* @__PURE__ */ M(oo, [["render", io]]), uo = T({
  components: { VvEl: Rt },
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
}), co = ["data-vv-quad-form-group-prop-wrapper-classes"], po = ["data-vv-quad-form-group-prop-top-wrapper-classes"], fo = ["data-vv-quad-form-group-prop-top-slot-classes"], go = ["data-vv-quad-form-group-prop-slot-parent-classes"], bo = ["data-vv-quad-form-group-prop-bottom-wrapper-classes"], ho = ["data-vv-quad-form-group-prop-text-parent-classes"], vo = { class: "invisible" }, mo = ["data-vv-quad-form-group-prop-bottom-slot-classes"];
function xo(e, t, r, s, o, a) {
  const l = oe("VvEl");
  return x(), O("div", {
    class: g(e.wrapperClasses),
    "data-vv-quad-form-group-prop-wrapper-classes": e.debug ? e.wrapperClasses : null
  }, [
    w("div", {
      class: g(e.topWrapperClasses),
      "data-vv-quad-form-group-prop-top-wrapper-classes": e.debug ? e.topWrapperClasses : null
    }, [
      Ce(l, {
        tag: "label",
        for: e.labelFor,
        class: g(e.labelClasses),
        "text-color": e.labelTextColor,
        "text-palette": e.labelTextPalette,
        size: e.labelTextSize,
        "data-vv-quad-form-group-prop-label-classes": e.debug ? e.labelClasses : null,
        "data-vv-quad-form-group-prop-label-text-color": e.debug ? e.labelTextColor : null,
        "data-vv-quad-form-group-prop-label-text-palette": e.debug ? e.labelTextPalette : null,
        "data-vv-quad-form-group-prop-label-text-size": e.debug ? e.labelTextSize : null
      }, {
        default: L(() => [
          ee(H(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-label-classes", "data-vv-quad-form-group-prop-label-text-color", "data-vv-quad-form-group-prop-label-text-palette", "data-vv-quad-form-group-prop-label-text-size"]),
      w("div", {
        class: g(e.topSlotClasses),
        "data-vv-quad-form-group-prop-top-slot-classes": e.debug ? e.topSlotClasses : null
      }, [
        D(e.$slots, "top")
      ], 10, fo)
    ], 10, po),
    w("div", {
      class: g(e.slotParentClasses),
      "data-vv-quad-form-group-prop-slot-parent-classes": e.debug ? e.slotParentClasses : null
    }, [
      D(e.$slots, "default")
    ], 10, go),
    w("div", {
      class: g(e.bottomWrapperClasses),
      "data-vv-quad-form-group-prop-bottom-wrapper-classes": e.debug ? e.bottomWrapperClasses : null
    }, [
      w("div", {
        class: g(e.textParentClasses),
        "data-vv-quad-form-group-prop-text-parent-classes": e.debug ? e.textParentClasses : null
      }, [
        !e.displayError && !e.displayHelp && !e.displaySuccess ? (x(), A(l, {
          key: 0,
          tag: "div",
          class: g(e.helpClasses),
          size: e.helpTextSize,
          "data-vv-quad-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
          "data-vv-quad-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
        }, {
          default: L(() => [
            w("span", vo, "\xA0" + H(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-size"])) : q("", !0),
        e.displayHelp ? (x(), A(l, {
          key: 1,
          tag: "div",
          class: g(e.helpClasses),
          "text-color": e.helpTextColor,
          "text-palette": e.helpTextPalette,
          size: e.helpTextSize,
          "data-vv-quad-form-group-prop-help-classes": e.debug ? e.helpClasses : null,
          "data-vv-quad-form-group-prop-help-text-color": e.debug ? e.helpTextColor : null,
          "data-vv-quad-form-group-prop-help-text-palette": e.debug ? e.helpTextPalette : null,
          "data-vv-quad-form-group-prop-help-text-size": e.debug ? e.helpTextSize : null
        }, {
          default: L(() => [
            ee(H(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-help-classes", "data-vv-quad-form-group-prop-help-text-color", "data-vv-quad-form-group-prop-help-text-palette", "data-vv-quad-form-group-prop-help-text-size"])) : q("", !0),
        e.displaySuccess ? (x(), A(l, {
          key: 2,
          tag: "div",
          class: g(e.successClasses),
          "text-color": e.successTextColor,
          "text-palette": e.successTextPalette,
          size: e.successTextSize,
          "data-vv-quad-form-group-prop-success-classes": e.debug ? e.successClasses : null,
          "data-vv-quad-form-group-prop-success-text-color": e.debug ? e.successTextColor : null,
          "data-vv-quad-form-group-prop-success-text-palette": e.debug ? e.successTextPalette : null,
          "data-vv-quad-form-group-prop-success-text-size": e.debug ? e.successTextSize : null
        }, {
          default: L(() => [
            ee(H(e.successText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-success-classes", "data-vv-quad-form-group-prop-success-text-color", "data-vv-quad-form-group-prop-success-text-palette", "data-vv-quad-form-group-prop-success-text-size"])) : q("", !0),
        e.displayError === !0 ? (x(), A(l, {
          key: 3,
          tag: "div",
          class: g(e.errorClasses),
          "text-color": e.errorTextColor,
          "text-palette": e.errorTextPalette,
          size: e.errorTextSize,
          "data-vv-quad-form-group-prop-error-classes": e.debug ? e.errorClasses : null,
          "data-vv-quad-form-group-prop-error-text-color": e.debug ? e.errorTextColor : null,
          "data-vv-quad-form-group-prop-error-text-palette": e.debug ? e.errorTextPalette : null,
          "data-vv-quad-form-group-prop-error-text-size": e.debug ? e.errorTextSize : null
        }, {
          default: L(() => [
            ee(H(e.errorText), 1)
          ]),
          _: 1
        }, 8, ["class", "text-color", "text-palette", "size", "data-vv-quad-form-group-prop-error-classes", "data-vv-quad-form-group-prop-error-text-color", "data-vv-quad-form-group-prop-error-text-palette", "data-vv-quad-form-group-prop-error-text-size"])) : q("", !0)
      ], 10, ho),
      w("div", {
        class: g(e.bottomSlotClasses),
        "data-vv-quad-form-group-prop-bottom-slot-classes": e.debug ? e.bottomSlotClasses : null
      }, [
        D(e.$slots, "bottom")
      ], 10, mo)
    ], 10, bo)
  ], 10, co);
}
const hl = /* @__PURE__ */ M(uo, [["render", xo]]), et = T({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvCheckbox.color
    },
    checked: {
      type: Boolean,
      default: n.defaults.VvCheckbox.checked
    },
    darkCheckHex: {
      type: String,
      default: n.defaults.VvCheckbox.darkCheckHex
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    let r = v(() => {
      var c, u, d, p, b, k;
      let i = [];
      return (c = t == null ? void 0 : t.checkboxes) != null && c.base() && i.push(t.checkboxes.base()), e.size !== "" && ((d = (u = t == null ? void 0 : t.checkboxes) == null ? void 0 : u.sizes) == null ? void 0 : d[e.size]) && i.push(t.checkboxes.sizes[e.size]), (k = (b = (p = t == null ? void 0 : t.checkboxes) == null ? void 0 : p.palettes) == null ? void 0 : b[e.palette]) != null && k[e.color] && i.push(t.checkboxes.palettes[e.palette][e.color]), i.join(" ").trim();
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
    let o = v(() => s(e.darkCheckHex.replace(/#/g, ""))), a = v(() => s(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: r,
      darkCheckCssUrl: o,
      handleCheckboxChange: (i) => i.target.checked === !0,
      lightCheckCssUrl: a
    };
  }
}), dt = () => {
  mt((e) => ({
    "0c1123ef": e.lightCheckCssUrl,
    "83da1e66": e.darkCheckCssUrl
  }));
}, ct = et.setup;
et.setup = ct ? (e, t) => (dt(), ct(e, t)) : dt;
const yo = et;
const ko = ["checked", "data-test"];
function So(e, t, r, s, o, a) {
  return x(), O("input", {
    type: "checkbox",
    class: g(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleCheckboxChange(l))),
    "data-test": e.darkCheckCssUrl + e.lightCheckCssUrl
  }, null, 42, ko);
}
const vl = /* @__PURE__ */ M(yo, [["render", So], ["__scopeId", "data-v-7a474fea"]]), wo = T({
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
      validator: (e) => Rs.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    return { classes: v(() => {
      var a, l, i, c, u, d;
      let o = [];
      return (a = t == null ? void 0 : t.inputs) != null && a.base() && o.push(t.inputs.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.inputs) == null ? void 0 : l.sizes) == null ? void 0 : i[e.size]) && o.push(t.inputs.sizes[e.size]), (d = (u = (c = t == null ? void 0 : t.inputs) == null ? void 0 : c.palettes) == null ? void 0 : u[String(e.palette)]) != null && d[e.color] && o.push(t.inputs.palettes[String(e.palette)][e.color]), o.join(" ").trim();
    }), handleInputChange: (o) => o.target.value };
  }
}), Co = ["type", "value"];
function Vo(e, t, r, s, o, a) {
  return x(), O("input", {
    type: e.type,
    class: g(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleInputChange(l)))
  }, null, 42, Co);
}
const ml = /* @__PURE__ */ M(wo, [["render", Vo]]), tt = T({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvRadio.color
    },
    checked: {
      type: Boolean,
      default: n.defaults.VvRadio.checked
    },
    darkRadioHex: {
      type: String,
      default: n.defaults.VvRadio.darkRadioHex
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n, r = j(e.checked);
    let s = v(() => {
      var u, d, p, b, k, V;
      let c = [];
      return (u = t == null ? void 0 : t.radios) != null && u.base() && c.push(t.radios.base()), e.size !== "" && ((p = (d = t == null ? void 0 : t.radios) == null ? void 0 : d.sizes) == null ? void 0 : p[e.size]) && c.push(t.radios.sizes[e.size]), (V = (k = (b = t == null ? void 0 : t.radios) == null ? void 0 : b.palettes) == null ? void 0 : k[e.palette]) != null && V[e.color] && c.push(t.radios.palettes[e.palette][e.color]), c.join(" ").trim();
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
    let a = v(() => o(e.darkRadioHex.replace(/#/g, ""))), l = v(() => o(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: s,
      darkRadioCssUrl: a,
      handleRadioChange: (c) => {
        const u = c.target;
        return r.value = !1, u.checked === !0 && (r.value = !0), r.value;
      },
      lightRadioCssUrl: l
    };
  }
}), pt = () => {
  mt((e) => ({
    "2bb23a2f": e.lightRadioCssUrl,
    "520fce53": e.darkRadioCssUrl
  }));
}, ft = tt.setup;
tt.setup = ft ? (e, t) => (pt(), ft(e, t)) : pt;
const zo = tt;
const To = ["value", "checked", "data-test"];
function $o(e, t, r, s, o, a) {
  return x(), O("input", {
    type: "radio",
    class: g(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleRadioChange(l))),
    "data-test": e.darkRadioCssUrl + e.lightRadioCssUrl
  }, null, 42, To);
}
const xl = /* @__PURE__ */ M(zo, [["render", $o], ["__scopeId", "data-v-8b8ebe7e"]]), Oo = T({
  name: "VvList",
  props: {
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
      validator: (e) => Bs.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    return { classes: v(() => {
      var o, a, l, i, c;
      let s = [];
      return t != null && t.text.base() && s.push(t == null ? void 0 : t.text.base()), (a = (o = t == null ? void 0 : t.lists) == null ? void 0 : o.sizes) != null && a[e.size] && s.push(t.lists.sizes[e.size]), (c = (i = (l = t == null ? void 0 : t.lists) == null ? void 0 : l.palettes) == null ? void 0 : i[e.markerPalette]) != null && c[e.markerColor] && s.push(String(t.lists.palettes[e.markerPalette][e.markerColor])), s.join(" ").trim();
    }) };
  }
});
function Po(e, t, r, s, o, a) {
  return x(), A(vt(e.tag), {
    class: g([e.listStyleTypeClass, e.classes]),
    role: "list"
  }, {
    default: L(() => [
      D(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const yl = /* @__PURE__ */ M(Oo, [["render", Po]]), Lo = T({
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    let r = v(() => {
      var a, l, i;
      let o = [];
      return t != null && t.text.base() && o.push(t == null ? void 0 : t.text.base()), (i = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.palette]) != null && i[e.color] && o.push(t.text.palettes[e.palette][e.color]), o.join(" ").trim();
    }), s = v(() => {
      var a, l, i;
      let o = [];
      return (i = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.symbolPalette]) != null && i[e.symbolColor] && o.push(t.text.palettes[e.symbolPalette][e.symbolColor]), o.join(" ").trim();
    });
    return { classes: r, symbolClasses: s };
  }
});
function Fo(e, t, r, s, o, a) {
  return x(), O("li", {
    class: g(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (x(), O("span", {
      key: 0,
      class: g([e.classes])
    }, [
      D(e.$slots, "default")
    ], 2)) : D(e.$slots, "default", { key: 1 })
  ], 2);
}
const kl = /* @__PURE__ */ M(Lo, [["render", Fo]]), jo = T({
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
}), Mo = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Ro(e, t, r, s, o, a) {
  return x(), O("svg", Mo, [
    w("path", {
      class: g(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    w("path", {
      class: g(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    w("path", {
      class: g(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    w("path", {
      class: g(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    w("path", {
      class: g(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    w("path", {
      class: g(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    w("path", {
      class: g(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Sl = /* @__PURE__ */ M(jo, [["render", Ro]]), Ao = T({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), Bo = /* @__PURE__ */ w("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), Eo = [
  Bo
];
function Do(e, t, r, s, o, a) {
  return x(), O("svg", {
    class: g(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, Eo, 2);
}
const wl = /* @__PURE__ */ M(Ao, [["render", Do]]), Io = T({
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
    return { classes: v(() => e.enableAnimation ? e.animationClass : "") };
  }
}), Ho = ["fill"], No = ["fill"];
function qo(e, t, r, s, o, a) {
  return x(), O("svg", {
    class: g(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    w("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: g(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, Ho),
    w("g", null, [
      w("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: g(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, No)
    ])
  ], 2);
}
const Cl = /* @__PURE__ */ M(Io, [["render", qo]]);
function W(e, t, ...r) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...r) : o;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, W), s;
}
var Je = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Je || {}), Go = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Go || {});
function fe({ visible: e = !0, features: t = 0, ourProps: r, theirProps: s, ...o }) {
  var a;
  let l = Uo(s, r), i = Object.assign(o, { props: l });
  if (e || t & 2 && l.static)
    return Ue(i);
  if (t & 1) {
    let c = (a = l.unmount) == null || a ? 0 : 1;
    return W(c, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...o, props: { ...l, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(i);
}
function Ue({ props: e, attrs: t, slots: r, slot: s, name: o }) {
  var a;
  let { as: l, ...i } = Bt(e, ["unmount", "static"]), c = (a = r.default) == null ? void 0 : a.call(r, s), u = {};
  if (s) {
    let d = !1, p = [];
    for (let [b, k] of Object.entries(s))
      typeof k == "boolean" && (d = !0), k === !0 && p.push(b);
    d && (u["data-headlessui-state"] = p.join(" "));
  }
  if (l === "template") {
    if (c = At(c != null ? c : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [d, ...p] = c != null ? c : [];
      if (!Wo(d) || p.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).sort((b, k) => b.localeCompare(k)).map((b) => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((b) => `  - ${b}`).join(`
`)].join(`
`));
      return Wt(d, Object.assign({}, i, u));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return We(l, Object.assign({}, i, u), { default: () => c });
}
function At(e) {
  return e.flatMap((t) => t.type === Ve ? At(t.children) : [t]);
}
function Uo(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let s of e)
    for (let o in s)
      o.startsWith("on") && typeof s[o] == "function" ? (r[o] != null || (r[o] = []), r[o].push(s[o])) : t[o] = s[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((s) => [s, void 0])));
  for (let s in r)
    Object.assign(t, { [s](o, ...a) {
      let l = r[s];
      for (let i of l) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        i(o, ...a);
      }
    } });
  return t;
}
function Qo(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Bt(e, t = []) {
  let r = Object.assign({}, e);
  for (let s of t)
    s in r && delete r[s];
  return r;
}
function Wo(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Jo = 0;
function Yo() {
  return ++Jo;
}
function He() {
  return Yo();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function Zo(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function Xo(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let s = t.resolveActiveIndex(), o = s != null ? s : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((l) => !t.resolveDisabled(l));
      case 1: {
        let l = r.slice().reverse().findIndex((i, c, u) => o !== -1 && u.length - c - 1 >= o ? !1 : !t.resolveDisabled(i));
        return l === -1 ? l : r.length - 1 - l;
      }
      case 2:
        return r.findIndex((l, i) => i <= o ? !1 : !t.resolveDisabled(l));
      case 3: {
        let l = r.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return l === -1 ? l : r.length - 1 - l;
      }
      case 4:
        return r.findIndex((l) => t.resolveId(l) === e.id);
      case 5:
        return null;
      default:
        Zo(e);
    }
  })();
  return a === -1 ? s : a;
}
function $(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Et = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function _o() {
  return z(Et, null);
}
function Ko(e) {
  xt(Et, e);
}
function gt(e, t) {
  if (e)
    return e;
  let r = t != null ? t : "button";
  if (typeof r == "string" && r.toLowerCase() === "button")
    return "button";
}
function ea(e, t) {
  let r = j(gt(e.value.type, e.value.as));
  return ce(() => {
    r.value = gt(e.value.type, e.value.as);
  }), Ye(() => {
    var s;
    r.value || !$(t) || $(t) instanceof HTMLButtonElement && !((s = $(t)) != null && s.hasAttribute("type")) && (r.value = "button");
  }), r;
}
const Dt = typeof window > "u" || typeof document > "u";
function ta(e) {
  if (Dt)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = $(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let bt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ra = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ra || {}), sa = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(sa || {}), oa = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(oa || {}), rt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rt || {});
function It(e, t = 0) {
  var r;
  return e === ((r = ta(e)) == null ? void 0 : r.body) ? !1 : W(t, { [0]() {
    return e.matches(bt);
  }, [1]() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(bt))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function aa(e, t = (r) => r) {
  return e.slice().sort((r, s) => {
    let o = t(r), a = t(s);
    if (o === null || a === null)
      return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qe(e, t, r) {
  Dt || Ye((s) => {
    document.addEventListener(e, t, r), s(() => document.removeEventListener(e, t, r));
  });
}
function la(e, t, r = v(() => !0)) {
  function s(a, l) {
    if (!r.value || a.defaultPrevented)
      return;
    let i = l(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let c = function u(d) {
      return typeof d == "function" ? u(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let u of c) {
      if (u === null)
        continue;
      let d = u instanceof HTMLElement ? u : $(u);
      if (d != null && d.contains(i) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !It(i, rt.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let o = j(null);
  Qe("mousedown", (a) => {
    var l, i;
    r.value && (o.value = ((i = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), Qe("click", (a) => {
    !o.value || (s(a, () => o.value), o.value = null);
  }, !0), Qe("blur", (a) => s(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ht || {});
let na = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: r }) {
  return () => {
    let { features: s, ...o } = e, a = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return fe({ ourProps: a, theirProps: o, slot: {}, attrs: r, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, r = []) {
  for (let [s, o] of Object.entries(e))
    Gt(r, qt(t, s), o);
  return r;
}
function qt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Gt(e, t, r) {
  if (Array.isArray(r))
    for (let [s, o] of r.entries())
      Gt(e, qt(t, s.toString()), o);
  else
    r instanceof Date ? e.push([t, r.toISOString()]) : typeof r == "boolean" ? e.push([t, r ? "1" : "0"]) : typeof r == "string" ? e.push([t, r]) : typeof r == "number" ? e.push([t, `${r}`]) : r == null ? e.push([t, ""]) : Nt(r, t, e);
}
function ia(e, t, r) {
  let s = j(r == null ? void 0 : r.value), o = v(() => e.value !== void 0);
  return [v(() => o.value ? e.value : s.value), function(a) {
    return o.value || (s.value = a), t == null ? void 0 : t(a);
  }];
}
function ht(e) {
  return [e.screenX, e.screenY];
}
function ua() {
  let e = j([-1, -1]);
  return { wasMoved(t) {
    let r = ht(t);
    return e.value[0] === r[0] && e.value[1] === r[1] ? !1 : (e.value = r, !0);
  }, update(t) {
    e.value = ht(t);
  } };
}
function da(e, t) {
  return e === t;
}
var ca = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ca || {}), pa = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(pa || {}), fa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(fa || {});
function ga(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ut = Symbol("ListboxContext");
function ke(e) {
  let t = z(Ut, null);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ke), r;
  }
  return t;
}
let ba = T({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => da }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: r, emit: s }) {
  let o = j(1), a = j(null), l = j(null), i = j(null), c = j([]), u = j(""), d = j(null), p = j(1);
  function b(h = (y) => y) {
    let y = d.value !== null ? c.value[d.value] : null, S = aa(h(c.value.slice()), (E) => $(E.dataRef.domRef)), C = y ? S.indexOf(y) : null;
    return C === -1 && (C = null), { options: S, activeOptionIndex: C };
  }
  let k = v(() => e.multiple ? 1 : 0), [V, N] = ia(v(() => e.modelValue === void 0 ? W(k.value, { [1]: [], [0]: void 0 }) : e.modelValue), (h) => s("update:modelValue", h), v(() => e.defaultValue)), m = { listboxState: o, value: V, mode: k, compare(h, y) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (h == null ? void 0 : h[S]) === (y == null ? void 0 : y[S]);
    }
    return e.by(h, y);
  }, orientation: v(() => e.horizontal ? "horizontal" : "vertical"), labelRef: a, buttonRef: l, optionsRef: i, disabled: v(() => e.disabled), options: c, searchQuery: u, activeOptionIndex: d, activationTrigger: p, closeListbox() {
    e.disabled || o.value !== 1 && (o.value = 1, d.value = null);
  }, openListbox() {
    e.disabled || o.value !== 0 && (o.value = 0);
  }, goToOption(h, y, S) {
    if (e.disabled || o.value === 1)
      return;
    let C = b(), E = Xo(h === R.Specific ? { focus: R.Specific, id: y } : { focus: h }, { resolveItems: () => C.options, resolveActiveIndex: () => C.activeOptionIndex, resolveId: (ue) => ue.id, resolveDisabled: (ue) => ue.dataRef.disabled });
    u.value = "", d.value = E, p.value = S != null ? S : 1, c.value = C.options;
  }, search(h) {
    if (e.disabled || o.value === 1)
      return;
    let y = u.value !== "" ? 0 : 1;
    u.value += h.toLowerCase();
    let S = (d.value !== null ? c.value.slice(d.value + y).concat(c.value.slice(0, d.value + y)) : c.value).find((E) => E.dataRef.textValue.startsWith(u.value) && !E.dataRef.disabled), C = S ? c.value.indexOf(S) : -1;
    C === -1 || C === d.value || (d.value = C, p.value = 1);
  }, clearSearch() {
    e.disabled || o.value !== 1 && u.value !== "" && (u.value = "");
  }, registerOption(h, y) {
    let S = b((C) => [...C, { id: h, dataRef: y }]);
    c.value = S.options, d.value = S.activeOptionIndex;
  }, unregisterOption(h) {
    let y = b((S) => {
      let C = S.findIndex((E) => E.id === h);
      return C !== -1 && S.splice(C, 1), S;
    });
    c.value = y.options, d.value = y.activeOptionIndex, p.value = 1;
  }, select(h) {
    e.disabled || N(W(k.value, { [0]: () => h, [1]: () => {
      let y = G(m.value.value).slice(), S = G(h), C = y.findIndex((E) => m.compare(S, G(E)));
      return C === -1 ? y.push(S) : y.splice(C, 1), y;
    } }));
  } };
  la([l, i], (h, y) => {
    var S;
    m.closeListbox(), It(y, rt.Loose) || (h.preventDefault(), (S = $(l)) == null || S.focus());
  }, v(() => o.value === 0)), xt(Ut, m), Ko(v(() => W(o.value, { [0]: je.Open, [1]: je.Closed })));
  let P = v(() => {
    var h;
    return (h = $(l)) == null ? void 0 : h.closest("form");
  });
  return ce(() => {
    yt([P], () => {
      if (!P.value || e.defaultValue === void 0)
        return;
      function h() {
        m.select(e.defaultValue);
      }
      return P.value.addEventListener("reset", h), () => {
        var y;
        (y = P.value) == null || y.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: h, modelValue: y, disabled: S, ...C } = e, E = { open: o.value === 0, disabled: S, value: V.value };
    return We(Ve, [...h != null && V.value != null ? Nt({ [h]: V.value }).map(([ue, Qt]) => We(na, Qo({ features: Ht.Hidden, key: ue, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: ue, value: Qt }))) : [], fe({ ourProps: {}, theirProps: { ...r, ...Bt(C, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: E, slots: t, attrs: r, name: "Listbox" })]);
  };
} }), ha = T({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${He()}` } }, setup(e, { attrs: t, slots: r }) {
  let s = ke("ListboxLabel");
  function o() {
    var a;
    (a = $(s.buttonRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: s.listboxState.value === 0, disabled: s.disabled.value }, { id: l, ...i } = e, c = { id: l, ref: s.labelRef, onClick: o };
    return fe({ ourProps: c, theirProps: i, slot: a, attrs: t, slots: r, name: "ListboxLabel" });
  };
} }), va = T({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${He()}` } }, setup(e, { attrs: t, slots: r, expose: s }) {
  let o = ke("ListboxButton");
  s({ el: o.buttonRef, $el: o.buttonRef });
  function a(u) {
    switch (u.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        u.preventDefault(), o.openListbox(), ie(() => {
          var d;
          (d = $(o.optionsRef)) == null || d.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.First);
        });
        break;
      case F.ArrowUp:
        u.preventDefault(), o.openListbox(), ie(() => {
          var d;
          (d = $(o.optionsRef)) == null || d.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.Last);
        });
        break;
    }
  }
  function l(u) {
    switch (u.key) {
      case F.Space:
        u.preventDefault();
        break;
    }
  }
  function i(u) {
    o.disabled.value || (o.listboxState.value === 0 ? (o.closeListbox(), ie(() => {
      var d;
      return (d = $(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (u.preventDefault(), o.openListbox(), ga(() => {
      var d;
      return (d = $(o.optionsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let c = ea(v(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var u, d;
    let p = { open: o.listboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: b, ...k } = e, V = { ref: o.buttonRef, id: b, type: c.value, "aria-haspopup": "listbox", "aria-controls": (u = $(o.optionsRef)) == null ? void 0 : u.id, "aria-expanded": o.disabled.value ? void 0 : o.listboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(d = $(o.labelRef)) == null ? void 0 : d.id, b].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: a, onKeyup: l, onClick: i };
    return fe({ ourProps: V, theirProps: k, slot: p, attrs: t, slots: r, name: "ListboxButton" });
  };
} }), ma = T({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${He()}` } }, setup(e, { attrs: t, slots: r, expose: s }) {
  let o = ke("ListboxOptions"), a = j(null);
  s({ el: o.optionsRef, $el: o.optionsRef });
  function l(u) {
    switch (a.value && clearTimeout(a.value), u.key) {
      case F.Space:
        if (o.searchQuery.value !== "")
          return u.preventDefault(), u.stopPropagation(), o.search(u.key);
      case F.Enter:
        if (u.preventDefault(), u.stopPropagation(), o.activeOptionIndex.value !== null) {
          let d = o.options.value[o.activeOptionIndex.value];
          o.select(d.dataRef.value);
        }
        o.mode.value === 0 && (o.closeListbox(), ie(() => {
          var d;
          return (d = $(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        }));
        break;
      case W(o.orientation.value, { vertical: F.ArrowDown, horizontal: F.ArrowRight }):
        return u.preventDefault(), u.stopPropagation(), o.goToOption(R.Next);
      case W(o.orientation.value, { vertical: F.ArrowUp, horizontal: F.ArrowLeft }):
        return u.preventDefault(), u.stopPropagation(), o.goToOption(R.Previous);
      case F.Home:
      case F.PageUp:
        return u.preventDefault(), u.stopPropagation(), o.goToOption(R.First);
      case F.End:
      case F.PageDown:
        return u.preventDefault(), u.stopPropagation(), o.goToOption(R.Last);
      case F.Escape:
        u.preventDefault(), u.stopPropagation(), o.closeListbox(), ie(() => {
          var d;
          return (d = $(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        break;
      case F.Tab:
        u.preventDefault(), u.stopPropagation();
        break;
      default:
        u.key.length === 1 && (o.search(u.key), a.value = setTimeout(() => o.clearSearch(), 350));
        break;
    }
  }
  let i = _o(), c = v(() => i !== null ? i.value === je.Open : o.listboxState.value === 0);
  return () => {
    var u, d, p, b;
    let k = { open: o.listboxState.value === 0 }, { id: V, ...N } = e, m = { "aria-activedescendant": o.activeOptionIndex.value === null || (u = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : u.id, "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, "aria-labelledby": (b = (d = $(o.labelRef)) == null ? void 0 : d.id) != null ? b : (p = $(o.buttonRef)) == null ? void 0 : p.id, "aria-orientation": o.orientation.value, id: V, onKeydown: l, role: "listbox", tabIndex: 0, ref: o.optionsRef };
    return fe({ ourProps: m, theirProps: N, slot: k, attrs: t, slots: r, features: Je.RenderStrategy | Je.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), xa = T({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${He()}` } }, setup(e, { slots: t, attrs: r, expose: s }) {
  let o = ke("ListboxOption"), a = j(null);
  s({ el: a, $el: a });
  let l = v(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === e.id : !1), i = v(() => W(o.mode.value, { [0]: () => o.compare(G(o.value.value), G(e.value)), [1]: () => G(o.value.value).some((m) => o.compare(G(m), G(e.value))) })), c = v(() => W(o.mode.value, { [1]: () => {
    var m;
    let P = G(o.value.value);
    return ((m = o.options.value.find((h) => P.some((y) => o.compare(G(y), G(h.dataRef.value))))) == null ? void 0 : m.id) === e.id;
  }, [0]: () => i.value })), u = v(() => ({ disabled: e.disabled, value: e.value, textValue: "", domRef: a }));
  ce(() => {
    var m, P;
    let h = (P = (m = $(a)) == null ? void 0 : m.textContent) == null ? void 0 : P.toLowerCase().trim();
    h !== void 0 && (u.value.textValue = h);
  }), ce(() => o.registerOption(e.id, u)), Jt(() => o.unregisterOption(e.id)), ce(() => {
    yt([o.listboxState, i], () => {
      o.listboxState.value === 0 && (!i.value || W(o.mode.value, { [1]: () => {
        c.value && o.goToOption(R.Specific, e.id);
      }, [0]: () => {
        o.goToOption(R.Specific, e.id);
      } }));
    }, { immediate: !0 });
  }), Ye(() => {
    o.listboxState.value === 0 && (!l.value || o.activationTrigger.value !== 0 && ie(() => {
      var m, P;
      return (P = (m = $(a)) == null ? void 0 : m.scrollIntoView) == null ? void 0 : P.call(m, { block: "nearest" });
    }));
  });
  function d(m) {
    if (e.disabled)
      return m.preventDefault();
    o.select(e.value), o.mode.value === 0 && (o.closeListbox(), ie(() => {
      var P;
      return (P = $(o.buttonRef)) == null ? void 0 : P.focus({ preventScroll: !0 });
    }));
  }
  function p() {
    if (e.disabled)
      return o.goToOption(R.Nothing);
    o.goToOption(R.Specific, e.id);
  }
  let b = ua();
  function k(m) {
    b.update(m);
  }
  function V(m) {
    !b.wasMoved(m) || e.disabled || l.value || o.goToOption(R.Specific, e.id, 0);
  }
  function N(m) {
    !b.wasMoved(m) || e.disabled || !l.value || o.goToOption(R.Nothing);
  }
  return () => {
    let { disabled: m } = e, P = { active: l.value, selected: i.value, disabled: m }, { id: h, value: y, disabled: S, ...C } = e, E = { id: h, ref: a, role: "option", tabIndex: m === !0 ? void 0 : -1, "aria-disabled": m === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: d, onFocus: p, onPointerenter: k, onMouseenter: k, onPointermove: V, onMousemove: V, onPointerleave: N, onMouseleave: N };
    return fe({ ourProps: E, theirProps: C, slot: P, attrs: r, slots: t, name: "ListboxOption" });
  };
} });
const ya = T({
  name: "VvListbox",
  emits: ["update:modelValue"],
  components: {
    Listbox: ba,
    ListboxButton: va,
    ListboxLabel: ha,
    ListboxOptions: ma,
    ListboxOption: xa
  },
  props: {
    data: {
      type: Array,
      default: n.defaults.VvListbox.data
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
    const t = j(e.data), r = j(t.value[e.selectedIndex]), s = Object.keys(z("vv", {})).length > 0 ? z("vv") : n, o = v(() => {
      var i, c, u, d, p, b;
      let l = [];
      return (i = s == null ? void 0 : s.listboxes) != null && i.base() && l.push(s.listboxes.base()), e.size !== "" && ((u = (c = s == null ? void 0 : s.listboxes) == null ? void 0 : c.sizes) == null ? void 0 : u[e.size]) && l.push(s.listboxes.sizes[e.size]), (b = (p = (d = s == null ? void 0 : s.listboxes) == null ? void 0 : d.buttonPalettes) == null ? void 0 : p[e.listboxButtonPalette]) != null && b[e.listboxButtonColor] && l.push(s.listboxes.buttonPalettes[e.listboxButtonPalette][e.listboxButtonColor]), l.join(" ").trim();
    }), a = v(() => {
      var i, c, u;
      let l = [];
      return (u = (c = (i = s == null ? void 0 : s.listboxes) == null ? void 0 : i.optionPalettes) == null ? void 0 : c[e.listboxOptionPalette]) != null && u[e.listboxOptionColor] && l.push(s.listboxes.optionPalettes[e.listboxOptionPalette][e.listboxOptionColor]), l.join(" ").trim();
    });
    return {
      listboxButtonVvClasses: o,
      listboxOptionVvClasses: a,
      selectData: t,
      selectedItem: r,
      VvConfig: n
    };
  }
}), ka = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), Sa = [
  ka
], wa = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), Ca = [
  wa
], Va = /* @__PURE__ */ w("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
}, null, -1), za = [
  Va
];
function Ta(e, t, r, s, o, a) {
  const l = oe("ListboxLabel"), i = oe("ListboxButton"), c = oe("ListboxOption"), u = oe("ListboxOptions"), d = oe("Listbox");
  return x(), A(d, {
    modelValue: e.selectedItem,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (p) => e.selectedItem = p),
      t[1] || (t[1] = (p) => e.$emit("update:modelValue", p))
    ],
    by: "id"
  }, {
    default: L(() => [
      e.label.length > 0 ? (x(), A(l, {
        key: 0,
        class: g(e.labelClasses)
      }, {
        default: L(() => [
          D(e.$slots, "default", {}, () => [
            ee(H(e.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"])) : (x(), A(l, {
        key: 1,
        class: g(e.labelClasses)
      }, {
        default: L(() => [
          D(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      Ce(i, {
        class: g([e.listboxButtonClasses, e.listboxButtonVvClasses])
      }, {
        default: L(() => [
          w("span", {
            class: g(e.selectedDisplayClasses)
          }, H(e.selectedItem.display), 3),
          (x(), O("svg", {
            class: g(e.iconsSizeClasses),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, Sa, 2))
        ]),
        _: 1
      }, 8, ["class"]),
      Ce(u, {
        class: g([e.listboxOptionsClasses, e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : e.listboxOptionsWithoutLabelSpacing])
      }, {
        default: L(() => [
          (x(!0), O(Ve, null, Yt(e.selectData, (p) => (x(), O(Ve, null, [
            p.value !== "" ? (x(), A(c, {
              key: p.id,
              value: p,
              disabled: p.disabled,
              class: g([e.listboxOptionClasses, e.listboxOptionVvClasses])
            }, {
              default: L(() => [
                w("span", {
                  class: g(e.optionIconParentClasses)
                }, [
                  (x(), O("svg", {
                    class: g(["hidden ui-selected:block mr-3", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, Ca, 2)),
                  p.disabled ? (x(), O("svg", {
                    key: 0,
                    class: g(["mr-3 opacity-25", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, za, 2)) : q("", !0)
                ], 2),
                w("span", {
                  class: g([e.displayClasses, p.disabled ? e.displayDisabledClasses : ""])
                }, H(p.display), 3)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class"])) : q("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 3
  }, 8, ["modelValue"]);
}
const Vl = /* @__PURE__ */ M(ya, [["render", Ta]]), $a = T({
  name: "VvSelect",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: n.defaults.VvSelect.color
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    return { classes: v(() => {
      var a, l, i, c, u, d;
      let o = [];
      return (a = t == null ? void 0 : t.selects) != null && a.base() && o.push(t.selects.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.selects) == null ? void 0 : l.sizes) == null ? void 0 : i[e.size]) && o.push(t.selects.sizes[e.size]), (d = (u = (c = t == null ? void 0 : t.selects) == null ? void 0 : c.palettes) == null ? void 0 : u[e.palette]) != null && d[e.color] && o.push(t.selects.palettes[e.palette][e.color]), o.join(" ").trim();
    }), handleSelectChange: (o) => o.target.value };
  }
}), Oa = ["value"];
function Pa(e, t, r, s, o, a) {
  return x(), O("select", {
    class: g(e.classes),
    value: e.modelValue,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleSelectChange(l)))
  }, [
    D(e.$slots, "default")
  ], 42, Oa);
}
const zl = /* @__PURE__ */ M($a, [["render", Pa]]), La = T({
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
    const t = Object.keys(z("vv", {})).length > 0 ? z("vv") : n;
    let r = v(() => {
      var l, i, c, u, d, p;
      let a = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && a.push(t.textareas.base()), e.size !== "" && ((c = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.sizes) == null ? void 0 : c[e.size]) && a.push(t.textareas.sizes[e.size]), (p = (d = (u = t == null ? void 0 : t.textareas) == null ? void 0 : u.palettes) == null ? void 0 : d[e.palette]) != null && p[e.color] && a.push(t.textareas.palettes[e.palette][e.color]), a.join(" ").trim();
    }), s = v(() => {
      var a, l;
      if (e.rowSize !== "" && ((l = (a = t == null ? void 0 : t.textareas) == null ? void 0 : a.rowSizes) == null ? void 0 : l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: s, handleTextareaChange: (a) => a.target.value };
  }
}), Fa = ["rows", "value"];
function ja(e, t, r, s, o, a) {
  return x(), O("textarea", {
    class: g(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleTextareaChange(l)))
  }, null, 42, Fa);
}
const Tl = /* @__PURE__ */ M(La, [["render", ja]]);
export {
  ar as AnchorDefault,
  Zt as Anchors,
  lr as BorderDefault,
  nr as ButtonOutline,
  ir as ButtonSolid,
  Xt as Buttons,
  ur as CheckboxDefault,
  _t as Checkboxes,
  Kt as ColorModes,
  dr as FillDefault,
  cr as GroundConsole,
  pr as GroundDefault,
  fr as GroundMonochromatic,
  gr as GroundPastel,
  Ne as InputDefault,
  qe as InputUnderlined,
  kt as Inputs,
  xr as ListDefault,
  br as ListboxButtonDefault,
  hr as ListboxButtonUnderlined,
  vr as ListboxOptionDefault,
  mr as ListboxOptionUnderlined,
  er as Listboxes,
  tr as Lists,
  Sl as ObeKnockoutMark,
  yr as RadioDefault,
  rr as Radios,
  sr as Selects,
  Ze as Text,
  kr as TextDefault,
  or as Textareas,
  re as Transitions,
  ol as ValidAudioSourceTypes,
  Mt as ValidButtonTypes,
  Vs as ValidColorModes,
  al as ValidCommentStyles,
  ll as ValidDirections,
  Os as ValidElementTags,
  nl as ValidFontAwesomeFamilies,
  il as ValidFontAwesomeSizes,
  ul as ValidHeadingLevels,
  dl as ValidImageSourceTypes,
  Rs as ValidInputTypes,
  Bs as ValidListTypes,
  cl as ValidUrlDecorations,
  pl as ValidVideoSourceTypes,
  wl as VueVentusLogoText,
  Cl as VueVentusSpinningMark,
  fl as VvAnchor,
  Ws as VvButton,
  vl as VvCheckbox,
  gl as VvColorModeButton,
  n as VvConfig,
  Rt as VvEl,
  bl as VvFormGroup,
  ml as VvInput,
  yl as VvList,
  kl as VvListItem,
  Vl as VvListbox,
  hl as VvQuadFormGroup,
  xl as VvRadio,
  zl as VvSelect,
  Tl as VvTextarea,
  Ra as appColorPairs,
  Aa as camelCaseToTitleCase,
  Ba as decimalsOnly,
  Ea as digitsOnly,
  Da as forceBodyClick,
  Ia as formatBytes,
  Ha as formatDateMMDDYYYY,
  Na as formatDateTraditional,
  qa as formatMediaTime,
  Ga as formatNumber,
  _ as getRandomInt,
  Ft as hexadecimals,
  Ua as mergeWithVvConfig,
  Lt as monthNames,
  be as padNumber,
  Qa as randomGroundAndTextColors,
  ks as randomHex,
  Wa as randomHexShort,
  Ja as randomString,
  Ya as slugifyString,
  Za as stringToCamelCase,
  Xa as stringToFilename,
  _a as timestampToDateTimeAmPm,
  Ka as uniqueArray,
  el as verifyDateMMDDYYYY,
  tl as verifyEmailString,
  rl as verifyRunTime,
  sl as verifyStringLengths,
  Ie as verifyType
};
