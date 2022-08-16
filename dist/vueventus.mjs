import { defineComponent as C, inject as x, computed as p, openBlock as m, createElementBlock as v, normalizeClass as h, renderSlot as P, ref as Te, onMounted as rt, resolveComponent as st, createBlock as Ee, withCtx as Ie, createCommentVNode as Se, createElementVNode as S, resolveDynamicComponent as ot, useCssVars as De } from "vue";
const Le = {
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
    var s, o, n;
    const t = e && ((s = this.durations) == null ? void 0 : s[e]) ? e : "300";
    return (o = this.durations) != null && o[t] ? (n = this.durations) == null ? void 0 : n[t] : "";
  },
  getEasingClasses: function(e) {
    var s, o, n;
    const t = e && ((s = this.easings) == null ? void 0 : s[e]) ? e : "inOut";
    return (o = this.easings) != null && o[t] ? (n = this.easings) == null ? void 0 : n[t] : "";
  },
  getTransitionClasses: function(e) {
    var s, o, n;
    const t = e && ((s = this.transitions) == null ? void 0 : s[e]) ? e : "default";
    return (o = this.transitions) != null && o[t] ? (n = this.transitions) == null ? void 0 : n[t] : "";
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
    const s = e || "", o = t || "", n = r || "";
    return [
      this.getTransitionClasses(s),
      this.getEasingClasses(o),
      this.getDurationClasses(n)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
}, nt = {
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
  sizes: Le.sizes,
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
}, at = {
  border: "border border-transparent",
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
}, lt = {
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
}, it = {
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
}, Pe = {
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
}, ct = {
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
}, ut = {
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
  sizes: Pe.sizes,
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
}, dt = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, ft = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, gt = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",
  success: "text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"
}, ht = {
  default: "text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",
  error: "text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",
  success: "text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"
}, bt = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, pt = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, mt = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, xt = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, yt = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, Ce = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, $e = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, kt = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, wt = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, vt = {
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
  VvTextarea: {
    color: "default",
    palette: "default",
    size: "md",
    rowSize: "md"
  }
}, i = {
  anchors: {
    ...nt,
    palettes: {
      default: dt
    }
  },
  borders: {
    palettes: {
      default: ft
    }
  },
  buttons: {
    ...at,
    palettes: {
      outline: gt,
      solid: ht
    }
  },
  checkboxes: {
    ...lt,
    palettes: {
      default: bt
    }
  },
  inputs: {
    ...Pe,
    palettes: {
      default: Ce,
      underlined: $e
    }
  },
  colorModes: {
    ...it
  },
  grounds: {
    palettes: {
      console: pt,
      default: mt,
      monochromatic: xt,
      pastel: yt
    }
  },
  radios: {
    ...ct,
    palettes: {
      default: kt
    }
  },
  text: {
    ...Le,
    palettes: {
      default: wt
    }
  },
  textareas: {
    ...ut,
    palettes: {
      default: Ce,
      underlined: $e
    }
  },
  transitions: {
    ...D
  },
  defaults: vt
}, k = Math.round, A = Math.min, R = Math.max, St = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, te = (e) => typeof e == "string" && e.includes("%"), he = (e) => e < 1 ? k(e) : e, Ct = (e) => k(100 * e) / 100, Ne = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), q = (e) => e.a < 1 && e.a >= 0, ie = (e) => A(1, R(0, e)), $t = (e) => e.length === 1 ? `0${e}` : `${e}`, zt = "[-\\+]?\\d+%?", Vt = "[-\\+]?\\d*\\.\\d+%?", T = `(?:${Vt})|(?:${zt})`, F = (e) => new RegExp(T).test(e), Ue = (e) => F(e.r) && F(e.g) && F(e.b), be = `[\\s|\\(]+(${T})[,|\\s]+(${T})[,|\\s]+(${T})\\s*\\)?`, pe = `[\\s|\\(]+(${T})[,|\\s]+(${T})[,|\\s]+(${T})[,|\\s]+(${T})\\s*\\)?`;
function w(e, t) {
  St(e) && (e = "100%");
  const r = te(e);
  return e = A(t, R(0, Number.parseFloat(e))), r && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const Y = (e) => Number.parseInt(e, 16), ze = (e) => Y(e) / 255, Z = (e) => e <= 1 ? `${e * 100}%` : e, E = (e) => {
  const [t, r, s] = [e._r, e._g, e._b].map((o) => k(o));
  return { r: t, g: r, b: s, a: e._roundA };
}, I = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), re = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => w(o, 255) * 255);
  return { r: t, g: r, b: s, a: Ne(e.a) };
}, se = (e) => {
  const [t, r, s] = [e.r, e.g, e.b].map((o) => `${k(w(o, 255) * 100)}%`);
  return { r: t, g: r, b: s, a: e.a };
}, oe = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Je = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, k(e.a * 255)], ne = (e, t) => {
  const r = Je(e).map((s) => s.toString(16)).map((s) => $t(s));
  return t && r.every((s) => s.charAt(0) === s.charAt(1)) ? r.map((s) => s.charAt(0)).join("") : r.join("");
}, W = (e, t) => ne({ ...e, a: 1 }, t), Mt = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function _t(e) {
  const t = e.r / 255, r = e.g / 255, s = e.b / 255, o = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, n = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4, a = s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * n + 0.0722 * a;
}
function At(e, t, r) {
  r = r === 0 ? 0 : r || 50;
  const s = new c(e).toRgb(), o = new c(t).toRgb(), n = r / 100, a = {
    r: (o.r - s.r) * n + s.r,
    g: (o.g - s.g) * n + s.g,
    b: (o.b - s.b) * n + s.b,
    a: (o.a - s.a) * n + s.a
  };
  return new c(a);
}
function Rt(e) {
  let t, r;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), r = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), r !== "small" && r !== "large" && (r = "small"), { level: t, size: r };
}
function me(e, t) {
  const r = new c(e), s = new c(t);
  return (Math.max(r.getLuminance(), s.getLuminance()) + 0.05) / (Math.min(r.getLuminance(), s.getLuminance()) + 0.05);
}
function qe(e, t, r) {
  const s = me(e, t), o = Rt(r);
  let n = !1;
  switch (o.level + o.size) {
    case "AAlarge":
      n = s >= 3;
      break;
    case "AAAsmall":
      n = s >= 7;
      break;
    default:
      n = s >= 4.5;
  }
  return n;
}
function Ge(e, t, r = {}) {
  const { includeFallbackColors: s, level: o, size: n } = r;
  let a, l = null, u = 0;
  for (const d of t)
    a = me(e, d), a > u && (u = a, l = new c(d));
  return qe(e, l, { level: o, size: n }) || !s ? l : (r.includeFallbackColors = !1, Ge(e, ["#fff", "#000"], r));
}
function L(e, t) {
  return { monochromatic: Tt, analogous: Ot, complement: jt, splitcomplement: Ft, triad: Bt, tetrad: Ht }[e](...t);
}
function jt(e) {
  const t = new c(e).toHsl();
  return t.h = (t.h + 180) % 360, new c(t);
}
function Bt(e) {
  const t = new c(e).toHsl(), { h: r } = t;
  return [
    new c(e),
    new c({ h: (r + 120) % 360, s: t.s, l: t.l }),
    new c({ h: (r + 240) % 360, s: t.s, l: t.l })
  ];
}
function Ht(e) {
  const t = new c(e).toHsl(), { h: r } = t;
  return [
    new c(e),
    new c({ h: (r + 90) % 360, s: t.s, l: t.l }),
    new c({ h: (r + 180) % 360, s: t.s, l: t.l }),
    new c({ h: (r + 270) % 360, s: t.s, l: t.l })
  ];
}
function Ft(e) {
  const t = new c(e).toHsl(), { h: r } = t;
  return [
    new c(e),
    new c({ h: (r + 72) % 360, s: t.s, l: t.l }),
    new c({ h: (r + 216) % 360, s: t.s, l: t.l })
  ];
}
function Ot(e, t = 6, r = 30) {
  const s = new c(e).toHsl(), o = 360 / r, n = [new c(e)];
  for (s.h = (s.h - (o * t >> 1) + 720) % 360; --t; )
    s.h = (s.h + o) % 360, n.push(new c(s));
  return n;
}
function Tt(e, t = 6) {
  const r = new c(e).toHsv();
  let { h: s, s: o, v: n } = r;
  const a = [], l = 1 / t;
  for (; t--; )
    a.push(new c({ h: s, s: o, v: n })), n = (n + l) % 1;
  return a;
}
function O(e, t) {
  const s = { invert: Et, desaturate: It, saturate: Dt, greyscale: Lt, lighten: Pt, brighten: Nt, darken: Ut, spin: Jt }[e](...t), [o] = t;
  return o._r = s._r, o._g = s._g, o._b = s._b, o.setAlpha(s._a), o;
}
function Et(e) {
  const t = new c(e).toRgb();
  return t.r = R(0, A(255, 255 - t.r)), t.g = R(0, A(255, 255 - t.g)), t.b = R(0, A(255, 255 - t.b)), new c(t);
}
function It(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new c(e).toHsl();
  return r.s -= t / 100, r.s = ie(r.s), new c(r);
}
function Dt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new c(e).toHsl();
  return r.s += t / 100, r.s = ie(r.s), new c(r);
}
function Lt(e) {
  return new c(e).desaturate(100);
}
function Pt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new c(e).toHsl();
  return r.l += t / 100, r.l = ie(r.l), new c(r);
}
function Nt(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new c(e).toRgb();
  return r.r = R(0, A(255, r.r - k(255 * -(t / 100)))), r.g = R(0, A(255, r.g - k(255 * -(t / 100)))), r.b = R(0, A(255, r.b - k(255 * -(t / 100)))), new c(r);
}
function Ut(e, t) {
  t = t === 0 ? 0 : t || 10;
  const r = new c(e).toHsl();
  return r.l -= t / 100, r.l = ie(r.l), new c(r);
}
function Jt(e, t) {
  const r = new c(e).toHsl(), s = (r.h + t) % 360;
  return r.h = s < 0 ? 360 + s : s, new c(r);
}
class qt {
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
const Gt = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class Yt {
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
    if (this.colorspaces[t] = new qt(this, t, { ...this.options, ...r }), r.alias)
      for (const s of r.alias)
        this.colorspaces[s] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const r = { ...Gt };
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
let Zt = 0;
const j = new Yt();
class c {
  constructor(t, r = {}) {
    if (t = t || "", t instanceof c)
      return t;
    const s = j.findColor(t);
    this._originalInput = t, this._r = he(s.r), this._g = he(s.g), this._b = he(s.b), this._a = s.a, this._roundA = Ct(this._a), this._format = r.format || s.format, this._gradientType = r.gradientType, this._ok = s.ok, this._tc_id = c.newId(), j.set(r);
  }
  static newId() {
    return Zt++;
  }
  static registerFormat(t, r = {}) {
    return j.add(t, r);
  }
  static equals(t, r) {
    return !t || !r ? !1 : new c(t).toRgbString() === new c(r).toRgbString();
  }
  static fromRatio(t, r) {
    if (typeof t == "object") {
      const s = {};
      for (const o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (o === "a" ? s[o] = t[o] : s[o] = Z(t[o]));
      t = s;
    }
    return new c(t, r);
  }
  static readability(t, r) {
    return me(t, r);
  }
  static isReadable(t, r, s) {
    return qe(t, r, s);
  }
  static mostReadable(t, r, s) {
    return Ge(t, r, s);
  }
  static mix(t, r, s) {
    return At(t, r, s);
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
    return Mt(this.toRgb());
  }
  getLuminance() {
    return _t(I(this));
  }
  toString(t) {
    return j.print(E(this), this._format, t);
  }
  toName() {
    return j.print(E(this), "name", "toName");
  }
  toRgb() {
    return I(this);
  }
  toRgbString() {
    return oe(E(this));
  }
  toRgbArray() {
    return Je(E(this));
  }
  toPercentageRgb() {
    return se(I(this));
  }
  toPercentageRgbString() {
    return oe(se(E(this)));
  }
  toHex(t) {
    return W(E(this), t);
  }
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  toHex8(t) {
    return ne(E(this), t);
  }
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  toHsv() {
    return j.raw(I(this), "hsv");
  }
  toHsvString() {
    return j.print(I(this), this._format, "hsv");
  }
  toHsl() {
    return j.raw(I(this), "hsl");
  }
  toHslString() {
    return j.print(I(this), this._format, "hsl");
  }
  setAlpha(t) {
    return this._a = Ne(t), this._roundA = k(100 * this._a) / 100, this;
  }
  clone() {
    return new c(this.toString());
  }
  lighten(...t) {
    return O("lighten", [this, ...t]);
  }
  brighten(...t) {
    return O("brighten", [this, ...t]);
  }
  darken(...t) {
    return O("darken", [this, ...t]);
  }
  desaturate(...t) {
    return O("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return O("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return O("greyscale", [this, ...t]);
  }
  invert(...t) {
    return O("invert", [this, ...t]);
  }
  spin(...t) {
    return O("spin", [this, ...t]);
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
const Ve = function() {
  return {
    rgb: new RegExp(`rgb${be}`),
    rgba: new RegExp(`rgba${pe}`)
  };
}();
function ce(e) {
  let t, r, s, o, n;
  return (n = Ve.rgb.exec(e)) ? ([t, r, s] = n.splice(1, 3), { r: t, g: r, b: s }) : (n = Ve.rgba.exec(e)) ? ([t, r, s, o] = n.splice(1, 4), { r: t, g: r, b: s, a: o }) : !1;
}
const ue = c.registerFormat("rgb");
ue.shouldHandleInput = (e) => typeof e == "object" && Ue(e) && !te(e.r) || ce(e);
ue.toRgb = (e) => typeof e == "object" && re(e) || re(ce(e));
ue.toRaw = (e) => e;
ue.toString = (e) => oe(e);
const de = c.registerFormat("prgb");
de.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = ce(e);
    return t && te(t.r);
  }
  return Ue(e) && te(e.r);
};
de.toRgb = (e) => re(typeof e == "object" ? e : ce(e));
de.toRaw = (e) => se(e);
de.toString = (e) => oe(se(e));
const z = c.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), ae = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Wt(e) {
  let t;
  if (t = ae.hex3.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((n) => `${n}${n}`).map((n) => Y(n));
    return { r, g: s, b: o, a: 1 };
  }
  if (t = ae.hex6.exec(e)) {
    const [r, s, o] = t.splice(1, 3).map((n) => Y(n));
    return { r, g: s, b: o, a: 1 };
  }
  return !1;
}
const K = (e, t = z.options.shortHex) => `#${z.options.upperCaseHex ? W(e, t).toUpperCase() : W(e, t)}`;
z.shouldHandleInput = (e) => ae.hex6.test(e) || ae.hex3.test(e);
z.toRgb = (e) => Wt(e);
z.toRaw = (e) => e;
z.toString = (e) => /^hex6?$/.test(z.wanted) ? K(e) : z.wanted === "hex3" ? K(e, !0) : q(e) ? z.options.alphaFormat === "hex" ? K(e) : z.print(z.options.alphaFormat, e) : K(e);
const V = c.registerFormat("hex8", {
  alias: ["hex4"]
}), le = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Qt(e) {
  let t;
  if (t = le.hex4.exec(e)) {
    const r = ze(`${t[4]}${t[4]}`), [s, o, n] = t.splice(1, 3).map((a) => `${a}${a}`).map((a) => Y(a));
    return { r: s, g: o, b: n, a: r };
  }
  if (t = le.hex8.exec(e)) {
    const r = ze(t[4]), [s, o, n] = t.splice(1, 3).map((a) => Y(a));
    return { r: s, g: o, b: n, a: r };
  }
  return !1;
}
const ee = (e, t = V.options.shortHex) => `#${V.options.upperCaseHex ? ne(e, t).toUpperCase() : ne(e, t)}`;
V.shouldHandleInput = (e) => le.hex8.test(e) || le.hex4.test(e);
V.toRgb = (e) => Qt(e);
V.toRaw = (e) => e;
V.toString = (e) => V.wanted === "hex4" ? ee(e, !0) : V.wanted === "hex8" ? ee(e) : q(e) ? V.options.alphaFormat === "hex" ? ee(e) : V.print(V.options.alphaFormat, e) : ee(e);
const fe = c.registerFormat("hsl"), Me = function() {
  return {
    hsl: new RegExp(`hsl${be}`),
    hsla: new RegExp(`hsla${pe}`)
  };
}(), Xt = (e) => F(e.h) && F(e.s) && F(e.l);
function Ye(e) {
  const t = w(e.r, 255), r = w(e.g, 255), s = w(e.b, 255), o = e.a || 1, n = R(t, r, s), a = A(t, r, s);
  let l, u;
  const d = (n + a) / 2;
  if (n === a)
    l = 0, u = 0;
  else {
    const f = n - a;
    switch (u = d > 0.5 ? f / (2 - n - a) : f / (n + a), n) {
      case t:
        l = (r - s) / f + (r < s ? 6 : 0);
        break;
      case r:
        l = (s - t) / f + 2;
        break;
      default:
        l = (t - r) / f + 4;
        break;
    }
    l /= 6;
  }
  return { h: l, s: u, l: d, a: o };
}
function _e(e) {
  const t = w(e.h, 360), r = w(Z(e.s), 100), s = w(Z(e.l), 100), o = e.a || 1;
  let n, a, l;
  function u(d, f, g) {
    return g = g < 0 ? g + 1 : g, g = g > 1 ? g - 1 : g, g < 1 / 6 ? d + (f - d) * 6 * g : g < 1 / 2 ? f : g < 2 / 3 ? d + (f - d) * (2 / 3 - g) * 6 : d;
  }
  if (r === 0)
    n = s, a = s, l = s;
  else {
    const d = s < 0.5 ? s * (1 + r) : s + r - s * r, f = 2 * s - d;
    n = u(f, d, t + 1 / 3), a = u(f, d, t), l = u(f, d, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: l * 255, a: o };
}
function Ze(e) {
  let t, r, s, o, n;
  return (n = Me.hsl.exec(e)) ? ([t, r, s] = n.splice(1, 3), { h: t, s: r, l: s }) : (n = Me.hsla.exec(e)) ? ([t, r, s, o] = n.splice(1, 4), { h: t, s: r, l: s, a: o }) : !1;
}
function Kt(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t = k(t * 360), r = k(r * 100), s = k(s * 100), o === 1 ? `hsl(${t}, ${r}%, ${s}%)` : `hsla(${t}, ${r}%, ${s}%, ${o})`;
}
function er(e) {
  let { h: t, s: r, l: s, a: o } = e;
  return t *= 360, { h: t, s: r, l: s, a: o };
}
fe.shouldHandleInput = (e) => typeof e == "object" && Xt(e) || Ze(e);
fe.toRgb = (e) => typeof e == "object" && _e(e) || _e(Ze(e));
fe.toRaw = (e) => er(Ye(e));
fe.toString = (e) => Kt(Ye(e));
const ge = c.registerFormat("hsv"), Ae = function() {
  return {
    hsv: new RegExp(`hsv${be}`),
    hsva: new RegExp(`hsva${pe}`)
  };
}(), tr = (e) => F(e.h) && F(e.s) && F(e.v);
function We(e) {
  const t = w(e.r, 255), r = w(e.g, 255), s = w(e.b, 255), o = e.a || 1, n = R(t, r, s), a = A(t, r, s), l = n - a;
  let u;
  const d = n === 0 ? 0 : l / n, f = n;
  if (n === a)
    u = 0;
  else {
    switch (n) {
      case t:
        u = (r - s) / l + (r < s ? 6 : 0);
        break;
      case r:
        u = (s - t) / l + 2;
        break;
      default:
        u = (t - r) / l + 4;
        break;
    }
    u /= 6;
  }
  return { h: u, s: d, v: f, a: o };
}
function Re(e) {
  const t = w(e.h, 360) * 6, r = w(Z(e.s), 100), s = w(Z(e.v), 100), o = e.a || 1, n = Math.floor(t), a = t - n, l = s * (1 - r), u = s * (1 - a * r), d = s * (1 - (1 - a) * r), f = n % 6, g = [s, u, l, l, d, s][f], b = [d, s, s, u, l, l][f], y = [l, l, d, s, s, u][f];
  return { r: g * 255, g: b * 255, b: y * 255, a: o };
}
function Qe(e) {
  let t, r, s, o, n;
  return (n = Ae.hsv.exec(e)) ? ([t, r, s] = n.splice(1, 3), { h: t, s: r, v: s }) : (n = Ae.hsva.exec(e)) ? ([t, r, s, o] = n.splice(1, 4), { h: t, s: r, v: s, a: o }) : !1;
}
function rr(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t = k(t * 360), r = k(r * 100), s = k(s * 100), o === 1 ? `hsv(${t}, ${r}%, ${s}%)` : `hsva(${t}, ${r}%, ${s}%, ${o})`;
}
function sr(e) {
  let { h: t, s: r, v: s, a: o } = e;
  return t *= 360, { h: t, s: r, v: s, a: o };
}
ge.shouldHandleInput = (e) => typeof e == "object" && tr(e) || Qe(e);
ge.toRgb = (e) => typeof e == "object" && Re(e) || Re(Qe(e));
ge.toRaw = (e) => sr(We(e));
ge.toString = (e) => rr(We(e));
const H = c.registerFormat("name", {
  alias: ["toName"]
});
function or(e) {
  const t = {};
  for (const r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[e[r]] = r);
  return t;
}
const X = {
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
X.transparent = "00000000";
const nr = or(X);
H.shouldHandleInput = (e) => X[e];
H.toRgb = (e) => H.parse(X[e]).rgba;
H.toRaw = (e) => e;
H.toString = (e) => e.a === 0 ? "transparent" : q(e) && H.wanted === "toName" ? !1 : q(e) && H.wanted === "name" ? `#${W(e)}` : q(e) ? H.print(H.options.alphaFormat, e) : nr[W(e, !0)] || !1;
function M(e, t) {
  return new c(e, t);
}
M.equals = (e, t) => c.equals(e, t);
M.registerFormat = (e, t = {}) => c.registerFormat(e, t);
M.fromRatio = (e, t) => c.fromRatio(e, t);
M.mix = (e, t, r) => c.mix(e, t, r);
M.readability = (e, t) => c.readability(e, t);
M.isReadable = (e, t, r) => c.isReadable(e, t, r);
M.mostReadable = (e, t, r) => c.mostReadable(e, t, r);
M.names = X;
function ds(e, t = "#fff", r = "#000") {
  let s = JSON.parse(JSON.stringify(e)), o = Object.keys(s), n = {};
  for (let a = 0; a < o.length; a++)
    if (typeof s[o[a]] == "string" || typeof s[o[a]] == "number") {
      const l = M(s[o[a]], {});
      l.isValid() && (n[o[a]] = {
        backgroundColor: l.toHexString(!1),
        color: l.isDark() ? t : r
      });
    } else if (typeof s[o[a]] == "object") {
      const l = Object.keys(s[o[a]]), u = {};
      for (let d = 0; d < l.length; d++)
        if (typeof s[o[a]][l[d]] == "string") {
          const f = M(s[o[a]][l[d]], !1);
          f.isValid() && (u[l[d]] = {
            backgroundColor: f.toHexString(!0),
            color: f.isDark() ? t : r
          });
        }
      n[o[a]] = u;
    }
  return n;
}
function fs(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function gs(e, t) {
  const r = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(r) ? Number(r) : t;
}
function hs(e, t) {
  const r = String(e).trim();
  return /^[1-9]\d*$/.test(r) ? Number(r) : t;
}
function bs() {
  typeof window < "u" && document && document.body.click();
}
function ps(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const r = 1024, s = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], n = Math.floor(Math.log(e) / Math.log(r));
  return parseFloat((e / Math.pow(r, n)).toFixed(s)) + " " + o[n];
}
function G(e, t = 2, r = "0") {
  return e.toString().padStart(t, r);
}
function ms(e, t = "/") {
  return [
    G(e.getMonth() + 1),
    G(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function Xe() {
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
function xs(e, t = "long", r = "english") {
  return Xe()[r][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function ys(e) {
  let t = parseInt(String(e), 10), r = Math.floor(parseInt(String(Number(t) / (24 * 3600))));
  t = t % (24 * 3600);
  let s = Math.floor(parseInt(String(Number(t) / 3600)));
  t %= 3600;
  let o = Math.floor(t / 60);
  t %= 60;
  let n = Math.floor(t), a = r < 10 ? "0" + r : r, l = s < 10 ? "0" + s : s, u = o < 10 ? "0" + o : o, d = n < 10 ? "0" + n : n, f = a === "00" ? "" : a + ":";
  return f += l === "00" ? "" : l + ":", f += u + ":" + d, f;
}
function ks(e) {
  return new Intl.NumberFormat().format(e);
}
function B(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Ke() {
  return "0123456789abcdef".split("");
}
var ar = function(t) {
  return lr(t) && !ir(t);
};
function lr(e) {
  return !!e && typeof e == "object";
}
function ir(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || dr(e);
}
var cr = typeof Symbol == "function" && Symbol.for, ur = cr ? Symbol.for("react.element") : 60103;
function dr(e) {
  return e.$$typeof === ur;
}
function fr(e) {
  return Array.isArray(e) ? [] : {};
}
function Q(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? N(fr(e), e, t) : e;
}
function gr(e, t, r) {
  return e.concat(t).map(function(s) {
    return Q(s, r);
  });
}
function hr(e, t) {
  if (!t.customMerge)
    return N;
  var r = t.customMerge(e);
  return typeof r == "function" ? r : N;
}
function br(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function je(e) {
  return Object.keys(e).concat(br(e));
}
function et(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function pr(e, t) {
  return et(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function mr(e, t, r) {
  var s = {};
  return r.isMergeableObject(e) && je(e).forEach(function(o) {
    s[o] = Q(e[o], r);
  }), je(t).forEach(function(o) {
    pr(e, o) || (et(e, o) && r.isMergeableObject(t[o]) ? s[o] = hr(o, r)(e[o], t[o], r) : s[o] = Q(t[o], r));
  }), s;
}
function N(e, t, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || gr, r.isMergeableObject = r.isMergeableObject || ar, r.cloneUnlessOtherwiseSpecified = Q;
  var s = Array.isArray(t), o = Array.isArray(e), n = s === o;
  return n ? s ? r.arrayMerge(e, t, r) : mr(e, t, r) : Q(t, r);
}
N.all = function(t, r) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(s, o) {
    return N(s, o, r);
  }, {});
};
var xr = N, yr = xr;
function ws(e) {
  return Object.keys(e).length > 0 ? yr(i, e) : i;
}
function kr() {
  const e = Ke(), t = 0, r = 15, s = e[B(t, r)] + e[B(t, r)], o = e[B(t, r)] + e[B(t, r)], n = e[B(t, r)] + e[B(t, r)];
  return "#" + s + o + n;
}
function vs(e = "#fff", t = "#000") {
  let r = { backgroundColor: "", color: "" }, s = M(kr(), {}), o = s.isDark();
  return r.backgroundColor = "#" + String(s.toHex(!1)), r.color = o ? e : t, r;
}
function Ss() {
  const e = Ke(), t = 0, r = 15, s = e[B(t, r)], o = e[B(t, r)], n = e[B(t, r)];
  return "#" + s + o + n;
}
function Cs(e = 10) {
  let t = "";
  const r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = r.length;
  for (let o = 0; o < Number(e); o++)
    t += r.charAt(Math.floor(Math.random() * s));
  return t;
}
function $s(e, t = "-") {
  let r = e || "", s = t || "-";
  return r.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, s).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, s);
}
function zs(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, r) {
    return r === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function Vs(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function Ms(e, t = "short", r = "english", s = "AM", o = "PM") {
  var n = new Date(Number(e) * 1e3), a = Xe(), l = a[r][t], u = n.getFullYear(), d = l[n.getMonth()], f = n.getDate(), g = n.getHours(), b = n.getMinutes(), y = n.getSeconds(), _ = g >= 12 ? o : s;
  return g = g % 12, g = g === 0 ? 12 : g, d + " " + G(f) + ", " + u + " " + g + ":" + G(b) + ":" + G(y) + " " + _;
}
function _s(e) {
  return e.filter((t, r, s) => s.indexOf(t) === r);
}
const As = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], tt = [
  "button",
  "submit",
  "reset"
], wr = [
  "light",
  "dark"
], Rs = [
  "up",
  "down",
  "left",
  "right",
  ""
], js = [
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
], Bs = [
  "fab",
  "fad",
  "fal",
  "far",
  "fas",
  "fat"
], Hs = [
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
], Fs = [1, 2, 3, 4, 5, 6], Os = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], vr = [
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
], Ts = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], Sr = C({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: i.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: i.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: i.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: i.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: i.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: i.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: i.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: i.defaults.VvAnchor.palette
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    return { classes: p(() => {
      var o, n, a, l, u, d, f, g, b, y, _, U, J, ke, we, ve;
      let s = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && s.push(t.buttons.blockBase()), e.buttonSize !== "" && ((a = (n = t == null ? void 0 : t.buttons) == null ? void 0 : n.blockSizes) == null ? void 0 : a[e.buttonSize]) && s.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((l = t == null ? void 0 : t.buttons) != null && l.fabBase() && s.push(t.buttons.fabBase()), e.buttonSize !== "" && ((d = (u = t == null ? void 0 : t.buttons) == null ? void 0 : u.fabSizes) == null ? void 0 : d[e.buttonSize]) && s.push(t.buttons.fabSizes[e.buttonSize])) : ((f = t == null ? void 0 : t.buttons) != null && f.base() && s.push(t.buttons.base()), e.buttonSize !== "" && ((b = (g = t == null ? void 0 : t.buttons) == null ? void 0 : g.sizes) == null ? void 0 : b[e.buttonSize]) && s.push(t.buttons.sizes[e.buttonSize])), (U = (_ = (y = t == null ? void 0 : t.buttons) == null ? void 0 : y.palettes) == null ? void 0 : _[e.palette]) != null && U[e.color] && s.push(t.buttons.palettes[e.palette][e.color])) : ((J = t == null ? void 0 : t.anchors) != null && J.base() && s.push(t.anchors.base()), (ve = (we = (ke = t == null ? void 0 : t.anchors) == null ? void 0 : ke.palettes) == null ? void 0 : we[e.palette]) != null && ve[e.color] && s.push(t.anchors.palettes[e.palette][e.color])), s.join(" ").trim();
    }) };
  }
}), $ = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [s, o] of t)
    r[s] = o;
  return r;
}, Cr = ["href"], $r = ["href"];
function zr(e, t, r, s, o, n) {
  return e.external ? (m(), v("a", {
    key: 0,
    href: e.href,
    class: h(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    P(e.$slots, "default")
  ], 10, Cr)) : (m(), v("a", {
    key: 1,
    href: e.href,
    class: h(e.classes)
  }, [
    P(e.$slots, "default")
  ], 10, $r));
}
const Es = /* @__PURE__ */ $(Sr, [["render", zr]]), Vr = C({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: i.defaults.VvButton.block
    },
    color: {
      type: String,
      default: i.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: i.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: i.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: i.defaults.VvButton.size
    },
    type: {
      type: String,
      default: i.defaults.VvButton.type,
      validator: (e) => tt.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i, r = e.type;
    let s = p(() => {
      var n, a, l, u, d, f, g, b, y, _, U, J;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((n = t == null ? void 0 : t.buttons) != null && n.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((l = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : l[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((u = t == null ? void 0 : t.buttons) != null && u.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((f = (d = t == null ? void 0 : t.buttons) == null ? void 0 : d.fabSizes) == null ? void 0 : f[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((g = t == null ? void 0 : t.buttons) != null && g.base() && o.push(t.buttons.base()), e.size !== "" && ((y = (b = t == null ? void 0 : t.buttons) == null ? void 0 : b.sizes) == null ? void 0 : y[e.size]) && o.push(t.buttons.sizes[e.size])), (J = (U = (_ = t == null ? void 0 : t.buttons) == null ? void 0 : _.palettes) == null ? void 0 : U[e.palette]) != null && J[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: r, classes: s };
  }
}), Mr = ["type"];
function _r(e, t, r, s, o, n) {
  return m(), v("button", {
    type: e.btnType,
    class: h(e.classes)
  }, [
    P(e.$slots, "default")
  ], 10, Mr);
}
const Ar = /* @__PURE__ */ $(Vr, [["render", _r]]), Rr = C({
  name: "VvColorModeButton",
  components: {
    VvButton: Ar
  },
  props: {
    mode: {
      type: String,
      default: i.defaults.VvColorModeButton.mode,
      validator: (e) => wr.includes(e)
    },
    color: {
      type: String,
      default: i.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: i.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: i.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: i.colorModes.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: i.colorModes.dark.hex
    },
    groundLight: {
      type: String,
      default: i.colorModes.light.ground
    },
    groundLightHex: {
      type: String,
      default: i.colorModes.light.hex
    },
    textDark: {
      type: String,
      default: i.colorModes.dark.text
    },
    textLight: {
      type: String,
      default: i.colorModes.light.text
    },
    titleDark: {
      type: String,
      default: i.colorModes.dark.title
    },
    titleLight: {
      type: String,
      default: i.colorModes.light.title
    },
    type: {
      type: String,
      default: i.defaults.VvColorModeButton.type,
      validator: (e) => tt.includes(e)
    }
  },
  setup(e) {
    const t = Te(e.mode), r = p(() => t.value === "dark" ? "sun" : "moon"), s = p(() => t.value === "dark" ? e.titleLight : e.titleDark);
    return rt(() => {
      typeof window < "u" && document && (document.documentElement.classList.add(e.groundLight, e.groundDark, e.textLight, e.textDark), document.body.classList.add(e.textLight, e.textDark), t.value === "light" ? (document.documentElement.classList.remove("dark"), document.documentElement.style.backgroundColor = e.groundLightHex) : t.value === "dark" && (document.documentElement.classList.add("dark"), document.documentElement.style.backgroundColor = e.groundDarkHex));
    }), { mode: t, icon: r, title: s };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), jr = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Br = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Hr = [
  Br
], Fr = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Or = /* @__PURE__ */ S("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), Tr = [
  Or
];
function Er(e, t, r, s, o, n) {
  const a = st("VvButton");
  return m(), Ee(a, {
    title: e.title,
    onClick: t[0] || (t[0] = (l) => e.toggleColorMode(l)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: Ie(() => [
      e.icon === "moon" ? (m(), v("svg", jr, Hr)) : Se("", !0),
      e.icon === "sun" ? (m(), v("svg", Fr, Tr)) : Se("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const Is = /* @__PURE__ */ $(Rr, [["render", Er]]), Ir = C({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: i.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: i.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: i.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: i.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: i.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: i.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: i.defaults.VvEl.textColor
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    return { classes: p(() => {
      var o, n, a, l, u, d, f, g, b;
      let s = [];
      return (a = (n = (o = t == null ? void 0 : t.borders) == null ? void 0 : o.palettes) == null ? void 0 : n[e.borderPalette]) != null && a[e.borderColor] && s.push(t.borders.palettes[e.borderPalette][e.borderColor]), (d = (u = (l = t == null ? void 0 : t.grounds) == null ? void 0 : l.palettes) == null ? void 0 : u[e.groundPalette]) != null && d[e.groundColor] && s.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (b = (g = (f = t == null ? void 0 : t.text) == null ? void 0 : f.palettes) == null ? void 0 : g[e.textPalette]) != null && b[e.textColor] && s.push(t.text.palettes[e.textPalette][e.textColor]), s.join(" ").trim();
    }) };
  }
});
function Dr(e, t, r, s, o, n) {
  return m(), Ee(ot(e.tag), {
    class: h(e.classes)
  }, {
    default: Ie(() => [
      P(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Ds = /* @__PURE__ */ $(Ir, [["render", Dr]]), xe = C({
  name: "VvCheckbox",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: i.defaults.VvCheckbox.color
    },
    checked: {
      type: Boolean,
      default: i.defaults.VvCheckbox.checked
    },
    darkCheckHex: {
      type: String,
      default: i.defaults.VvCheckbox.darkCheckHex
    },
    lightCheckHex: {
      type: String,
      default: i.defaults.VvCheckbox.lightCheckHex
    },
    palette: {
      type: String,
      default: i.defaults.VvCheckbox.palette
    },
    size: {
      type: String,
      default: i.defaults.VvCheckbox.size
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    let r = p(() => {
      var u, d, f, g, b, y;
      let l = [];
      return (u = t == null ? void 0 : t.checkboxes) != null && u.base() && l.push(t.checkboxes.base()), e.size !== "" && ((f = (d = t == null ? void 0 : t.checkboxes) == null ? void 0 : d.sizes) == null ? void 0 : f[e.size]) && l.push(t.checkboxes.sizes[e.size]), (y = (b = (g = t == null ? void 0 : t.checkboxes) == null ? void 0 : g.palettes) == null ? void 0 : b[e.palette]) != null && y[e.color] && l.push(t.checkboxes.palettes[e.palette][e.color]), l.join(" ").trim();
    });
    function s(l) {
      return `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23${l}' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`;
    }
    let o = p(() => s(e.darkCheckHex.replace(/#/g, ""))), n = p(() => s(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: r,
      darkCheckCssUrl: o,
      handleCheckboxChange: (l) => l.target.checked === !0,
      lightCheckCssUrl: n
    };
  }
}), Be = () => {
  De((e) => ({
    "1961a848": e.lightCheckCssUrl,
    "5a2db740": e.darkCheckCssUrl
  }));
}, He = xe.setup;
xe.setup = He ? (e, t) => (Be(), He(e, t)) : Be;
const Lr = ["checked"];
function Pr(e, t, r, s, o, n) {
  return m(), v("input", {
    type: "checkbox",
    class: h(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (a) => e.$emit("update:modelValue", e.handleCheckboxChange(a)))
  }, null, 42, Lr);
}
const Ls = /* @__PURE__ */ $(xe, [["render", Pr]]), Nr = C({
  name: "VvInput",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: i.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: i.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: i.defaults.VvInput.size
    },
    type: {
      type: String,
      default: i.defaults.VvInput.type,
      validator: (e) => vr.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    return { classes: p(() => {
      var n, a, l, u, d, f;
      let o = [];
      return (n = t == null ? void 0 : t.inputs) != null && n.base() && o.push(t.inputs.base()), e.size !== "" && ((l = (a = t == null ? void 0 : t.inputs) == null ? void 0 : a.sizes) == null ? void 0 : l[e.size]) && o.push(t.inputs.sizes[e.size]), (f = (d = (u = t == null ? void 0 : t.inputs) == null ? void 0 : u.palettes) == null ? void 0 : d[e.palette]) != null && f[e.color] && o.push(t.inputs.palettes[e.palette][e.color]), o.join(" ").trim();
    }), handleInputChange: (o) => o.target.value };
  }
}), Ur = ["type", "value"];
function Jr(e, t, r, s, o, n) {
  return m(), v("input", {
    type: e.type,
    class: h(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (a) => e.$emit("update:modelValue", e.handleInputChange(a)))
  }, null, 42, Ur);
}
const Ps = /* @__PURE__ */ $(Nr, [["render", Jr]]), ye = C({
  name: "VvRadio",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: i.defaults.VvRadio.color
    },
    checked: {
      type: Boolean,
      default: i.defaults.VvRadio.checked
    },
    darkRadioHex: {
      type: String,
      default: i.defaults.VvRadio.darkRadioHex
    },
    lightRadioHex: {
      type: String,
      default: i.defaults.VvRadio.lightRadioHex
    },
    palette: {
      type: String,
      default: i.defaults.VvRadio.palette
    },
    size: {
      type: String,
      default: i.defaults.VvRadio.size
    },
    value: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i, r = Te(e.checked);
    let s = p(() => {
      var d, f, g, b, y, _;
      let u = [];
      return (d = t == null ? void 0 : t.radios) != null && d.base() && u.push(t.radios.base()), e.size !== "" && ((g = (f = t == null ? void 0 : t.radios) == null ? void 0 : f.sizes) == null ? void 0 : g[e.size]) && u.push(t.radios.sizes[e.size]), (_ = (y = (b = t == null ? void 0 : t.radios) == null ? void 0 : b.palettes) == null ? void 0 : y[e.palette]) != null && _[e.color] && u.push(t.radios.palettes[e.palette][e.color]), u.join(" ").trim();
    });
    function o(u) {
      return `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='%23${u}' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`;
    }
    let n = p(() => o(e.darkRadioHex.replace(/#/g, ""))), a = p(() => o(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: s,
      darkRadioCssUrl: n,
      handleRadioChange: (u) => (u.target.checked === !0 ? r.value = !0 : r.value = !1, r.value),
      lightRadioCssUrl: a
    };
  }
}), Fe = () => {
  De((e) => ({
    "274151b2": e.lightRadioCssUrl,
    "794f325b": e.darkRadioCssUrl
  }));
}, Oe = ye.setup;
ye.setup = Oe ? (e, t) => (Fe(), Oe(e, t)) : Fe;
const qr = ["value", "checked"];
function Gr(e, t, r, s, o, n) {
  return m(), v("input", {
    type: "radio",
    class: h(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (a) => e.$emit("update:modelValue", e.handleRadioChange(a)))
  }, null, 42, qr);
}
const Ns = /* @__PURE__ */ $(ye, [["render", Gr]]), Yr = C({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: i.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: i.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: i.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: i.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: i.defaults.VvListItem.symbolPalette
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    let r = t == null ? void 0 : t.text.base(), s = p(() => {
      var a, l, u;
      let n = [r];
      return (u = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.palette]) != null && u[e.color] && n.push(t.text.palettes[e.palette][e.color]), n.join(" ").trim();
    }), o = p(() => {
      var a, l, u;
      let n = [];
      return (u = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.symbolPalette]) != null && u[e.symbolColor] && n.push(t.text.palettes[e.symbolPalette][e.symbolColor]), n.join(" ").trim();
    });
    return { classes: s, symbolClasses: o };
  }
});
function Zr(e, t, r, s, o, n) {
  return m(), v("li", {
    class: h(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (m(), v("span", {
      key: 0,
      class: h([e.classes])
    }, [
      P(e.$slots, "default")
    ], 2)) : P(e.$slots, "default", { key: 1 })
  ], 2);
}
const Us = /* @__PURE__ */ $(Yr, [["render", Zr]]), Wr = C({
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
}), Qr = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Xr(e, t, r, s, o, n) {
  return m(), v("svg", Qr, [
    S("path", {
      class: h(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    S("path", {
      class: h(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    S("path", {
      class: h(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    S("path", {
      class: h(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    S("path", {
      class: h(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    S("path", {
      class: h(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    S("path", {
      class: h(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const Js = /* @__PURE__ */ $(Wr, [["render", Xr]]), Kr = C({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), es = /* @__PURE__ */ S("path", { d: "m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), ts = [
  es
];
function rs(e, t, r, s, o, n) {
  return m(), v("svg", {
    class: h(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 129",
    "xml:space": "preserve"
  }, ts, 2);
}
const qs = /* @__PURE__ */ $(Kr, [["render", rs]]), ss = C({
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
}), os = ["fill"], ns = ["fill"];
function as(e, t, r, s, o, n) {
  return m(), v("svg", {
    class: h(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    S("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: h(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, os),
    S("g", null, [
      S("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: h(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, ns)
    ])
  ], 2);
}
const Gs = /* @__PURE__ */ $(ss, [["render", as]]), ls = C({
  name: "VvTextarea",
  emits: ["update:modelValue"],
  props: {
    color: {
      type: String,
      default: i.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: i.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: i.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: i.defaults.VvTextarea.rowSize
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys(x("vv", {})).length > 0 ? x("vv") : i;
    let r = p(() => {
      var a, l, u, d, f, g;
      let n = [];
      return (a = t == null ? void 0 : t.textareas) != null && a.base() && n.push(t.textareas.base()), e.size !== "" && ((u = (l = t == null ? void 0 : t.textareas) == null ? void 0 : l.sizes) == null ? void 0 : u[e.size]) && n.push(t.textareas.sizes[e.size]), (g = (f = (d = t == null ? void 0 : t.textareas) == null ? void 0 : d.palettes) == null ? void 0 : f[e.palette]) != null && g[e.color] && n.push(t.textareas.palettes[e.palette][e.color]), n.join(" ").trim();
    }), s = p(() => {
      var n, a;
      if (e.rowSize !== "" && ((a = (n = t == null ? void 0 : t.textareas) == null ? void 0 : n.rowSizes) == null ? void 0 : a[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: r, rows: s, handleTextareaChange: (n) => n.target.value };
  }
}), is = ["rows", "value"];
function cs(e, t, r, s, o, n) {
  return m(), v("textarea", {
    class: h(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (a) => e.$emit("update:modelValue", e.handleTextareaChange(a)))
  }, null, 42, is);
}
const Ys = /* @__PURE__ */ $(ls, [["render", cs]]);
export {
  dt as AnchorDefault,
  nt as Anchors,
  ft as BorderDefault,
  gt as ButtonOutline,
  ht as ButtonSolid,
  at as Buttons,
  bt as CheckboxDefault,
  lt as Checkboxes,
  it as ColorModes,
  pt as GroundConsole,
  mt as GroundDefault,
  xt as GroundMonochromatic,
  yt as GroundPastel,
  Ce as InputDefault,
  $e as InputUnderlined,
  Pe as Inputs,
  Js as ObeKnockoutMark,
  kt as RadioDefault,
  ct as Radios,
  Le as Text,
  wt as TextDefault,
  ut as Textareas,
  D as Transitions,
  As as ValidAudioSourceTypes,
  tt as ValidButtonTypes,
  wr as ValidColorModes,
  Rs as ValidDirections,
  js as ValidElementTags,
  Bs as ValidFontAwesomeFamilies,
  Hs as ValidFontAwesomeSizes,
  Fs as ValidHeadingLevels,
  Os as ValidImageSourceTypes,
  vr as ValidInputTypes,
  Ts as ValidVideoSourceTypes,
  qs as VueVentusLogoText,
  Gs as VueVentusSpinningMark,
  Es as VvAnchor,
  Ar as VvButton,
  Ls as VvCheckbox,
  Is as VvColorModeButton,
  i as VvConfig,
  Ds as VvEl,
  Ps as VvInput,
  Us as VvListItem,
  Ns as VvRadio,
  Ys as VvTextarea,
  ds as appColorPairs,
  fs as camelCaseToTitleCase,
  gs as decimalsOnly,
  hs as digitsOnly,
  bs as forceBodyClick,
  ps as formatBytes,
  ms as formatDateMMDDYYYY,
  xs as formatDateTraditional,
  ys as formatMediaTime,
  ks as formatNumber,
  B as getRandomInt,
  Ke as hexadecimals,
  ws as mergeWithVvConfig,
  Xe as monthNames,
  G as padNumber,
  vs as randomGroundAndTextColors,
  kr as randomHex,
  Ss as randomHexShort,
  Cs as randomString,
  $s as slugifyString,
  zs as stringToCamelCase,
  Vs as stringToFilename,
  Ms as timestampToDateTimeAmPm,
  _s as uniqueArray
};
