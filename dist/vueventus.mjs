import { defineComponent as T, inject as $, computed as x, openBlock as y, createElementBlock as z, normalizeClass as g, renderSlot as E, ref as P, onMounted as ce, resolveComponent as oe, createBlock as I, withCtx as j, createCommentVNode as _, createElementVNode as C, resolveDynamicComponent as xt, createVNode as Ce, createTextVNode as ee, toDisplayString as Q, useCssVars as mt, cloneVNode as Wt, h as We, Fragment as Ve, provide as yt, watchEffect as Je, watch as vt, onUnmounted as qt, nextTick as ie, toRaw as N, renderList as Jt } from "vue";
const Ye = {
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
}, se = {
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
}, Yt = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: se.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Ye.sizes,
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
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: se.classes("all", "inOut", "300"),
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
}, Xt = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "rounded",
  shadow: "",
  transition: se.classes("colors", "inOut", "300"),
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
  transition: se.classes("colors", "inOut", "300"),
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
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: se.classes("colors", "inOut", "300"),
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
}, ts = {
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
  sizes: Ye.sizes,
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
}, ss = {
  baseColors: "bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800",
  border: "",
  outline: "",
  ring: "focus:ring-offset-2 focus:ring-2",
  rounding: "",
  shadow: "",
  transition: se.classes("colors", "inOut", "300"),
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
}, rs = {
  border: "border",
  display: "block w-full",
  outline: "",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: se.classes("colors", "inOut", "300"),
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
}, os = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: se.classes("colors", "inOut", "300"),
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
}, as = {
  default: "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
}, ls = {
  "": "",
  default: "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
}, ns = {
  default: "text-gray-500 dark:text-gray-300 hover:text-white focus:text-white dark:hover:text-white dark:focus:text-white hover:bg-gray-500 focus:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-200 focus:border-gray-50 dark:focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-rose-500 focus:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-500 focus:ring-rose-400 dark:focus:ring-rose-200 focus:border-rose-50 dark:focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-500 focus:ring-blue-400 dark:focus:ring-blue-200 focus:border-blue-50 dark:focus:border-blue-900",
  secondary: "text-teal-500 dark:text-teal-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-600 border-teal-300 hover:border-teal-500 focus:ring-teal-400 dark:focus:ring-teal-200 focus:border-teal-50 dark:focus:border-teal-900",
  success: "text-green-500 dark:text-green-300 hover:text-white dark:hover:text-white focus:text-white dark:focus:text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600 border-green-300 hover:border-green-500 focus:ring-green-400 dark:focus:ring-green-200 focus:border-green-50 dark:focus:border-green-900"
}, is = {
  default: "text-gray-900 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-300 border-gray-100 hover:border-gray-200 focus:border-gray-50 dark:focus:border-gray-900 focus:ring-gray-600 dark:focus:ring-gray-50",
  error: "text-white bg-rose-500 hover:bg-rose-600 focus:bg-rose-600 active:bg-rose-700 border-rose-500 hover:border-rose-600 focus:border-rose-100 dark:focus:border-rose-900 focus:ring-rose-600 dark:focus:ring-rose-200",
  primary: "text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 border-blue-500 hover:border-blue-600 focus:border-blue-100 dark:focus:border-blue-900 focus:ring-blue-600 dark:focus:ring-blue-200",
  secondary: "text-white bg-teal-500 hover:bg-teal-600 focus:bg-teal-600 active:bg-teal-700 border-teal-500 hover:border-teal-600 focus:border-teal-100 dark:focus:border-teal-900 focus:ring-teal-600 dark:focus:ring-teal-200",
  success: "text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 active:bg-green-700 border-green-500 hover:border-green-600 focus:border-green-100 dark:focus:border-green-900 focus:ring-green-600 dark:focus:ring-green-200"
}, us = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, ds = {
  default: "dark:fill-gray-100 fill-gray-900",
  error: "fill-rose-500 dark:fill-rose-300",
  primary: "fill-blue-500 dark:fill-blue-300",
  secondary: "fill-violet-500 dark:fill-violet-300",
  success: "fill-green-600 dark:fill-green-300"
}, cs = {
  default: "font-mono text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "font-mono text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "font-mono text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "font-mono text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "font-mono text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
}, fs = {
  default: "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
}, bs = {
  default: "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
}, gs = {
  default: "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
}, _e = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, Ne = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
}, ps = {
  default: "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-gray-300 dark:border-gray-600 bg-rose-100 focus:bg-rose-50 hover:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 dark:hover:bg-rose-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-gray-300 dark:border-gray-600 bg-green-100 focus:bg-green-50 hover:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 dark:hover:bg-green-700 border-gray-500"
}, hs = {
  default: "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  error: "text-rose-700 dark:text-rose-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500",
  success: "text-green-700 dark:text-green-200 focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white hover:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 dark:hover:bg-gray-700 border-gray-500"
}, xs = {
  default: "ui-active:font-bold ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-rose-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-green-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, ms = {
  default: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-blue-500 dark:ui-active:text-blue-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  error: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-rose-500 dark:ui-active:text-rose-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white",
  success: "ui-active:font-bold ui-active:bg-white dark:ui-active:bg-gray-700 ui-active:text-green-500 dark:ui-active:text-green-300 ui-not-active:bg-white ui-not-active:text-gray-900 dark:ui-not-active:bg-gray-700 dark:ui-not-active:text-white"
}, ys = {
  default: "",
  error: "marker:text-rose-500 dark:marker:text-rose-300",
  primary: "marker:text-blue-500 dark:marker:text-blue-300",
  secondary: "marker:text-violet-500 dark:marker:text-violet-300",
  success: "marker:text-green-600 dark:marker:text-green-300"
}, vs = {
  default: "focus:ring-gray-500 text-gray-600 dark:focus:ring-gray-200 dark:text-gray-300",
  error: "focus:ring-rose-500 text-rose-500 dark:focus:ring-rose-200 dark:text-rose-300",
  primary: "focus:ring-blue-500 text-blue-500 dark:focus:ring-blue-200 dark:text-blue-300",
  secondary: "focus:ring-teal-500 text-teal-600 dark:focus:ring-teal-200 dark:text-teal-300",
  success: "focus:ring-green-600 text-green-600 dark:focus:ring-green-200 dark:text-green-300"
}, ks = {
  default: "",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300",
  neutral: "dark:text-gray-100 text-gray-900"
}, Ss = {
  VvAnchor: {
    button: !1,
    buttonBlock: !1,
    buttonFab: !1,
    buttonSize: "md",
    color: "default",
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
    topWrapperClasses: "flex justify-between gap-3",
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
    ...Yt,
    palettes: {
      default: as
    }
  },
  borders: {
    palettes: {
      default: ls
    }
  },
  buttons: {
    ...Zt,
    palettes: {
      outline: ns,
      solid: is
    }
  },
  checkboxes: {
    ...Xt,
    palettes: {
      default: us
    }
  },
  fills: {
    palettes: {
      default: ds
    }
  },
  inputs: {
    ...kt,
    palettes: {
      default: _e,
      underlined: Ne
    }
  },
  colorModes: {
    ...Kt
  },
  grounds: {
    palettes: {
      console: cs,
      default: fs,
      monochromatic: bs,
      pastel: gs
    }
  },
  listboxes: {
    ...es,
    buttonPalettes: {
      default: ps,
      underlined: hs
    },
    optionPalettes: {
      default: xs,
      underlined: ms
    }
  },
  lists: {
    ...ts,
    palettes: {
      default: ys
    }
  },
  radios: {
    ...ss,
    palettes: {
      default: vs
    }
  },
  selects: {
    ...rs,
    palettes: {
      default: _e,
      underlined: Ne
    }
  },
  text: {
    ...Ye,
    palettes: {
      default: ks
    }
  },
  textareas: {
    ...os,
    palettes: {
      default: _e,
      underlined: Ne
    }
  },
  transitions: {
    ...se
  },
  defaults: Ss
}, A = Math.round, J = Math.min, Y = Math.max, ws = (e) => typeof e == "string" && e.includes(".") && Number.parseFloat(e) === 1, ze = (e) => typeof e == "string" && e.includes("%"), Ge = (e) => e < 1 ? A(e) : e, Cs = (e) => A(100 * e) / 100, St = (e) => (e = Number.parseFloat(e), Number.isNaN(e) || e < 0 || e > 1 ? 1 : e), ge = (e) => e.a < 1 && e.a >= 0, Me = (e) => J(1, Y(0, e)), Vs = (e) => e.length === 1 ? `0${e}` : `${e}`, zs = "[-\\+]?\\d+%?", $s = "[-\\+]?\\d*\\.\\d+%?", ae = `(?:${$s})|(?:${zs})`, te = (e) => new RegExp(ae).test(e), wt = (e) => te(e.r) && te(e.g) && te(e.b), Ze = `[\\s|\\(]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})\\s*\\)?`, Xe = `[\\s|\\(]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})[,|\\s]+(${ae})\\s*\\)?`;
function D(e, t) {
  ws(e) && (e = "100%");
  const s = ze(e);
  return e = J(t, Y(0, Number.parseFloat(e))), s && (e = Number.parseInt(e * t, 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : e % t / Number.parseFloat(t);
}
const he = (e) => Number.parseInt(e, 16), rt = (e) => he(e) / 255, xe = (e) => e <= 1 ? `${e * 100}%` : e, le = (e) => {
  const [t, s, r] = [e._r, e._g, e._b].map((o) => A(o));
  return { r: t, g: s, b: r, a: e._roundA };
}, ne = (e) => ({ r: e._r, g: e._g, b: e._b, a: e._a }), $e = (e) => {
  const [t, s, r] = [e.r, e.g, e.b].map((o) => D(o, 255) * 255);
  return { r: t, g: s, b: r, a: St(e.a) };
}, Te = (e) => {
  const [t, s, r] = [e.r, e.g, e.b].map((o) => `${A(D(o, 255) * 100)}%`);
  return { r: t, g: s, b: r, a: e.a };
}, Oe = (e) => e.a === 1 ? `rgb(${e.r}, ${e.g}, ${e.b})` : `rgba(${e.r}, ${e.g}, ${e.b}, ${e.a})`, Ct = (e) => e.a === 1 ? [e.r, e.g, e.b] : [e.r, e.g, e.b, A(e.a * 255)], Le = (e, t) => {
  const s = Ct(e).map((r) => r.toString(16)).map((r) => Vs(r));
  return t && s.every((r) => r.charAt(0) === r.charAt(1)) ? s.map((r) => r.charAt(0)).join("") : s.join("");
}, me = (e, t) => Le({ ...e, a: 1 }, t), Ts = (e) => (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
function Os(e) {
  const t = e.r / 255, s = e.g / 255, r = e.b / 255, o = t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4, a = s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4, l = r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4;
  return 0.2126 * o + 0.7152 * a + 0.0722 * l;
}
function Ls(e, t, s) {
  s = s === 0 ? 0 : s || 50;
  const r = new b(e).toRgb(), o = new b(t).toRgb(), a = s / 100, l = {
    r: (o.r - r.r) * a + r.r,
    g: (o.g - r.g) * a + r.g,
    b: (o.b - r.b) * a + r.b,
    a: (o.a - r.a) * a + r.a
  };
  return new b(l);
}
function Fs(e) {
  let t, s;
  return e = e || {
    level: "AA",
    size: "small"
  }, t = (e.level || "AA").toUpperCase(), s = (e.size || "small").toLowerCase(), t !== "AA" && t !== "AAA" && (t = "AA"), s !== "small" && s !== "large" && (s = "small"), { level: t, size: s };
}
function Ke(e, t) {
  const s = new b(e), r = new b(t);
  return (Math.max(s.getLuminance(), r.getLuminance()) + 0.05) / (Math.min(s.getLuminance(), r.getLuminance()) + 0.05);
}
function Vt(e, t, s) {
  const r = Ke(e, t), o = Fs(s);
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
function zt(e, t, s = {}) {
  const { includeFallbackColors: r, level: o, size: a } = s;
  let l, i = null, c = 0;
  for (const u of t)
    l = Ke(e, u), l > c && (c = l, i = new b(u));
  return Vt(e, i, { level: o, size: a }) || !r ? i : (s.includeFallbackColors = !1, zt(e, ["#fff", "#000"], s));
}
function de(e, t) {
  return { monochromatic: Bs, analogous: As, complement: Ps, splitcomplement: Rs, triad: js, tetrad: Ms }[e](...t);
}
function Ps(e) {
  const t = new b(e).toHsl();
  return t.h = (t.h + 180) % 360, new b(t);
}
function js(e) {
  const t = new b(e).toHsl(), { h: s } = t;
  return [
    new b(e),
    new b({ h: (s + 120) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 240) % 360, s: t.s, l: t.l })
  ];
}
function Ms(e) {
  const t = new b(e).toHsl(), { h: s } = t;
  return [
    new b(e),
    new b({ h: (s + 90) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 180) % 360, s: t.s, l: t.l }),
    new b({ h: (s + 270) % 360, s: t.s, l: t.l })
  ];
}
function Rs(e) {
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
function Bs(e, t = 6) {
  const s = new b(e).toHsv();
  let { h: r, s: o, v: a } = s;
  const l = [], i = 1 / t;
  for (; t--; )
    l.push(new b({ h: r, s: o, v: a })), a = (a + i) % 1;
  return l;
}
function re(e, t) {
  const r = { invert: Es, desaturate: Ds, saturate: Is, greyscale: Hs, lighten: _s, brighten: Ns, darken: Gs, spin: Us }[e](...t), [o] = t;
  return o._r = r._r, o._g = r._g, o._b = r._b, o.setAlpha(r._a), o;
}
function Es(e) {
  const t = new b(e).toRgb();
  return t.r = Y(0, J(255, 255 - t.r)), t.g = Y(0, J(255, 255 - t.g)), t.b = Y(0, J(255, 255 - t.b)), new b(t);
}
function Ds(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.s -= t / 100, s.s = Me(s.s), new b(s);
}
function Is(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.s += t / 100, s.s = Me(s.s), new b(s);
}
function Hs(e) {
  return new b(e).desaturate(100);
}
function _s(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.l += t / 100, s.l = Me(s.l), new b(s);
}
function Ns(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toRgb();
  return s.r = Y(0, J(255, s.r - A(255 * -(t / 100)))), s.g = Y(0, J(255, s.g - A(255 * -(t / 100)))), s.b = Y(0, J(255, s.b - A(255 * -(t / 100)))), new b(s);
}
function Gs(e, t) {
  t = t === 0 ? 0 : t || 10;
  const s = new b(e).toHsl();
  return s.l -= t / 100, s.l = Me(s.l), new b(s);
}
function Us(e, t) {
  const s = new b(e).toHsl(), r = (s.h + t) % 360;
  return s.h = r < 0 ? 360 + r : r, new b(s);
}
class Qs {
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
const Ws = {
  format: !1,
  ok: !1,
  r: 0,
  g: 0,
  b: 0,
  a: 1
};
class qs {
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
    if (this.colorspaces[t] = new Qs(this, t, { ...this.options, ...s }), s.alias)
      for (const r of s.alias)
        this.colorspaces[r] = this.colorspaces[t];
    return this.colorspaces[t];
  }
  findColor(t) {
    const s = { ...Ws };
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
let Js = 0;
const Z = new qs();
class b {
  constructor(t, s = {}) {
    if (t = t || "", t instanceof b)
      return t;
    const r = Z.findColor(t);
    this._originalInput = t, this._r = Ge(r.r), this._g = Ge(r.g), this._b = Ge(r.b), this._a = r.a, this._roundA = Cs(this._a), this._format = s.format || r.format, this._gradientType = s.gradientType, this._ok = r.ok, this._tc_id = b.newId(), Z.set(s);
  }
  static newId() {
    return Js++;
  }
  static registerFormat(t, s = {}) {
    return Z.add(t, s);
  }
  static equals(t, s) {
    return !t || !s ? !1 : new b(t).toRgbString() === new b(s).toRgbString();
  }
  static fromRatio(t, s) {
    if (typeof t == "object") {
      const r = {};
      for (const o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (o === "a" ? r[o] = t[o] : r[o] = xe(t[o]));
      t = r;
    }
    return new b(t, s);
  }
  static readability(t, s) {
    return Ke(t, s);
  }
  static isReadable(t, s, r) {
    return Vt(t, s, r);
  }
  static mostReadable(t, s, r) {
    return zt(t, s, r);
  }
  static mix(t, s, r) {
    return Ls(t, s, r);
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
    return Ts(this.toRgb());
  }
  getLuminance() {
    return Os(ne(this));
  }
  toString(t) {
    return Z.print(le(this), this._format, t);
  }
  toName() {
    return Z.print(le(this), "name", "toName");
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
    return Te(ne(this));
  }
  toPercentageRgbString() {
    return Oe(Te(le(this)));
  }
  toHex(t) {
    return me(le(this), t);
  }
  toHexString(t) {
    return `#${this.toHex(t)}`;
  }
  toHex8(t) {
    return Le(le(this), t);
  }
  toHex8String(t) {
    return `#${this.toHex8(t)}`;
  }
  toHsv() {
    return Z.raw(ne(this), "hsv");
  }
  toHsvString() {
    return Z.print(ne(this), this._format, "hsv");
  }
  toHsl() {
    return Z.raw(ne(this), "hsl");
  }
  toHslString() {
    return Z.print(ne(this), this._format, "hsl");
  }
  setAlpha(t) {
    return this._a = St(t), this._roundA = A(100 * this._a) / 100, this;
  }
  clone() {
    return new b(this.toString());
  }
  lighten(...t) {
    return re("lighten", [this, ...t]);
  }
  brighten(...t) {
    return re("brighten", [this, ...t]);
  }
  darken(...t) {
    return re("darken", [this, ...t]);
  }
  desaturate(...t) {
    return re("desaturate", [this, ...t]);
  }
  saturate(...t) {
    return re("saturate", [this, ...t]);
  }
  greyscale(...t) {
    return re("greyscale", [this, ...t]);
  }
  invert(...t) {
    return re("invert", [this, ...t]);
  }
  spin(...t) {
    return re("spin", [this, ...t]);
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
    rgb: new RegExp(`rgb${Ze}`),
    rgba: new RegExp(`rgba${Xe}`)
  };
}();
function Re(e) {
  let t, s, r, o, a;
  return (a = ot.rgb.exec(e)) ? ([t, s, r] = a.splice(1, 3), { r: t, g: s, b: r }) : (a = ot.rgba.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { r: t, g: s, b: r, a: o }) : !1;
}
const Ae = b.registerFormat("rgb");
Ae.shouldHandleInput = (e) => typeof e == "object" && wt(e) && !ze(e.r) || Re(e);
Ae.toRgb = (e) => typeof e == "object" && $e(e) || $e(Re(e));
Ae.toRaw = (e) => e;
Ae.toString = (e) => Oe(e);
const Be = b.registerFormat("prgb");
Be.shouldHandleInput = (e) => {
  if (typeof e == "string") {
    const t = Re(e);
    return t && ze(t.r);
  }
  return wt(e) && ze(e.r);
};
Be.toRgb = (e) => $e(typeof e == "object" ? e : Re(e));
Be.toRaw = (e) => Te(e);
Be.toString = (e) => Oe(Te(e));
const G = b.registerFormat("hex", {
  alias: ["hex3", "hex6"]
}), Fe = function() {
  return {
    hex3: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex6: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Ys(e) {
  let t;
  if (t = Fe.hex3.exec(e)) {
    const [s, r, o] = t.splice(1, 3).map((a) => `${a}${a}`).map((a) => he(a));
    return { r: s, g: r, b: o, a: 1 };
  }
  if (t = Fe.hex6.exec(e)) {
    const [s, r, o] = t.splice(1, 3).map((a) => he(a));
    return { r: s, g: r, b: o, a: 1 };
  }
  return !1;
}
const Se = (e, t = G.options.shortHex) => `#${G.options.upperCaseHex ? me(e, t).toUpperCase() : me(e, t)}`;
G.shouldHandleInput = (e) => Fe.hex6.test(e) || Fe.hex3.test(e);
G.toRgb = (e) => Ys(e);
G.toRaw = (e) => e;
G.toString = (e) => /^hex6?$/.test(G.wanted) ? Se(e) : G.wanted === "hex3" ? Se(e, !0) : ge(e) ? G.options.alphaFormat === "hex" ? Se(e) : G.print(G.options.alphaFormat, e) : Se(e);
const U = b.registerFormat("hex8", {
  alias: ["hex4"]
}), Pe = function() {
  return {
    hex4: /^#?([\da-fA-F])([\da-fA-F])([\da-fA-F])([\da-fA-F])$/,
    hex8: /^#?([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/
  };
}();
function Zs(e) {
  let t;
  if (t = Pe.hex4.exec(e)) {
    const s = rt(`${t[4]}${t[4]}`), [r, o, a] = t.splice(1, 3).map((l) => `${l}${l}`).map((l) => he(l));
    return { r, g: o, b: a, a: s };
  }
  if (t = Pe.hex8.exec(e)) {
    const s = rt(t[4]), [r, o, a] = t.splice(1, 3).map((l) => he(l));
    return { r, g: o, b: a, a: s };
  }
  return !1;
}
const we = (e, t = U.options.shortHex) => `#${U.options.upperCaseHex ? Le(e, t).toUpperCase() : Le(e, t)}`;
U.shouldHandleInput = (e) => Pe.hex8.test(e) || Pe.hex4.test(e);
U.toRgb = (e) => Zs(e);
U.toRaw = (e) => e;
U.toString = (e) => U.wanted === "hex4" ? we(e, !0) : U.wanted === "hex8" ? we(e) : ge(e) ? U.options.alphaFormat === "hex" ? we(e) : U.print(U.options.alphaFormat, e) : we(e);
const Ee = b.registerFormat("hsl"), at = function() {
  return {
    hsl: new RegExp(`hsl${Ze}`),
    hsla: new RegExp(`hsla${Xe}`)
  };
}(), Xs = (e) => te(e.h) && te(e.s) && te(e.l);
function $t(e) {
  const t = D(e.r, 255), s = D(e.g, 255), r = D(e.b, 255), o = e.a || 1, a = Y(t, s, r), l = J(t, s, r);
  let i, c;
  const u = (a + l) / 2;
  if (a === l)
    i = 0, c = 0;
  else {
    const d = a - l;
    switch (c = u > 0.5 ? d / (2 - a - l) : d / (a + l), a) {
      case t:
        i = (s - r) / d + (s < r ? 6 : 0);
        break;
      case s:
        i = (r - t) / d + 2;
        break;
      default:
        i = (t - s) / d + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: c, l: u, a: o };
}
function lt(e) {
  const t = D(e.h, 360), s = D(xe(e.s), 100), r = D(xe(e.l), 100), o = e.a || 1;
  let a, l, i;
  function c(u, d, f) {
    return f = f < 0 ? f + 1 : f, f = f > 1 ? f - 1 : f, f < 1 / 6 ? u + (d - u) * 6 * f : f < 1 / 2 ? d : f < 2 / 3 ? u + (d - u) * (2 / 3 - f) * 6 : u;
  }
  if (s === 0)
    a = r, l = r, i = r;
  else {
    const u = r < 0.5 ? r * (1 + s) : r + s - r * s, d = 2 * r - u;
    a = c(d, u, t + 1 / 3), l = c(d, u, t), i = c(d, u, t - 1 / 3);
  }
  return { r: a * 255, g: l * 255, b: i * 255, a: o };
}
function Tt(e) {
  let t, s, r, o, a;
  return (a = at.hsl.exec(e)) ? ([t, s, r] = a.splice(1, 3), { h: t, s, l: r }) : (a = at.hsla.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { h: t, s, l: r, a: o }) : !1;
}
function Ks(e) {
  let { h: t, s, l: r, a: o } = e;
  return t = A(t * 360), s = A(s * 100), r = A(r * 100), o === 1 ? `hsl(${t}, ${s}%, ${r}%)` : `hsla(${t}, ${s}%, ${r}%, ${o})`;
}
function er(e) {
  let { h: t, s, l: r, a: o } = e;
  return t *= 360, { h: t, s, l: r, a: o };
}
Ee.shouldHandleInput = (e) => typeof e == "object" && Xs(e) || Tt(e);
Ee.toRgb = (e) => typeof e == "object" && lt(e) || lt(Tt(e));
Ee.toRaw = (e) => er($t(e));
Ee.toString = (e) => Ks($t(e));
const De = b.registerFormat("hsv"), nt = function() {
  return {
    hsv: new RegExp(`hsv${Ze}`),
    hsva: new RegExp(`hsva${Xe}`)
  };
}(), tr = (e) => te(e.h) && te(e.s) && te(e.v);
function Ot(e) {
  const t = D(e.r, 255), s = D(e.g, 255), r = D(e.b, 255), o = e.a || 1, a = Y(t, s, r), l = J(t, s, r), i = a - l;
  let c;
  const u = a === 0 ? 0 : i / a, d = a;
  if (a === l)
    c = 0;
  else {
    switch (a) {
      case t:
        c = (s - r) / i + (s < r ? 6 : 0);
        break;
      case s:
        c = (r - t) / i + 2;
        break;
      default:
        c = (t - s) / i + 4;
        break;
    }
    c /= 6;
  }
  return { h: c, s: u, v: d, a: o };
}
function it(e) {
  const t = D(e.h, 360) * 6, s = D(xe(e.s), 100), r = D(xe(e.v), 100), o = e.a || 1, a = Math.floor(t), l = t - a, i = r * (1 - s), c = r * (1 - l * s), u = r * (1 - (1 - l) * s), d = a % 6, f = [r, c, i, i, u, r][d], p = [u, r, r, c, i, i][d], k = [i, i, u, r, r, c][d];
  return { r: f * 255, g: p * 255, b: k * 255, a: o };
}
function Lt(e) {
  let t, s, r, o, a;
  return (a = nt.hsv.exec(e)) ? ([t, s, r] = a.splice(1, 3), { h: t, s, v: r }) : (a = nt.hsva.exec(e)) ? ([t, s, r, o] = a.splice(1, 4), { h: t, s, v: r, a: o }) : !1;
}
function sr(e) {
  let { h: t, s, v: r, a: o } = e;
  return t = A(t * 360), s = A(s * 100), r = A(r * 100), o === 1 ? `hsv(${t}, ${s}%, ${r}%)` : `hsva(${t}, ${s}%, ${r}%, ${o})`;
}
function rr(e) {
  let { h: t, s, v: r, a: o } = e;
  return t *= 360, { h: t, s, v: r, a: o };
}
De.shouldHandleInput = (e) => typeof e == "object" && tr(e) || Lt(e);
De.toRgb = (e) => typeof e == "object" && it(e) || it(Lt(e));
De.toRaw = (e) => rr(Ot(e));
De.toString = (e) => sr(Ot(e));
const K = b.registerFormat("name", {
  alias: ["toName"]
});
function or(e) {
  const t = {};
  for (const s in e)
    Object.prototype.hasOwnProperty.call(e, s) && (t[e[s]] = s);
  return t;
}
const ve = {
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
ve.transparent = "00000000";
const ar = or(ve);
K.shouldHandleInput = (e) => ve[e];
K.toRgb = (e) => K.parse(ve[e]).rgba;
K.toRaw = (e) => e;
K.toString = (e) => e.a === 0 ? "transparent" : ge(e) && K.wanted === "toName" ? !1 : ge(e) && K.wanted === "name" ? `#${me(e)}` : ge(e) ? K.print(K.options.alphaFormat, e) : ar[me(e, !0)] || !1;
function q(e, t) {
  return new b(e, t);
}
q.equals = (e, t) => b.equals(e, t);
q.registerFormat = (e, t = {}) => b.registerFormat(e, t);
q.fromRatio = (e, t) => b.fromRatio(e, t);
q.mix = (e, t, s) => b.mix(e, t, s);
q.readability = (e, t) => b.readability(e, t);
q.isReadable = (e, t, s) => b.isReadable(e, t, s);
q.mostReadable = (e, t, s) => b.mostReadable(e, t, s);
q.names = ve;
function Ca(e, t = "#fff", s = "#000") {
  let r = JSON.parse(JSON.stringify(e)), o = Object.keys(r), a = {};
  for (let l = 0; l < o.length; l++)
    if (typeof r[o[l]] == "string" || typeof r[o[l]] == "number") {
      const i = q(r[o[l]], {});
      i.isValid() && (a[o[l]] = {
        backgroundColor: i.toHexString(!1),
        color: i.isDark() ? t : s
      });
    } else if (typeof r[o[l]] == "object") {
      const i = Object.keys(r[o[l]]), c = {};
      for (let u = 0; u < i.length; u++)
        if (typeof r[o[l]][i[u]] == "string") {
          const d = q(r[o[l]][i[u]], !1);
          d.isValid() && (c[i[u]] = {
            backgroundColor: d.toHexString(!0),
            color: d.isDark() ? t : s
          });
        }
      a[o[l]] = c;
    }
  return a;
}
function Va(e) {
  return e.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ").split(" ").map((o) => o.charAt(0).toUpperCase() + o.substring(1).toLowerCase()).join(" ").trim();
}
function za(e, t) {
  const s = String(e).trim();
  return /^[0-9]*\.?[0-9]*$/.test(s) ? Number(s) : t;
}
function $a(e, t) {
  const s = String(e).trim();
  return /^[1-9]\d*$/.test(s) ? Number(s) : t;
}
function Ta() {
  typeof window < "u" && document && (document.body.click(), document.body.dispatchEvent(new Event("click")));
}
function Oa(e, t = 2) {
  if (e === 0)
    return "0 Bytes";
  const s = 1024, r = t < 0 ? 0 : t, o = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], a = Math.floor(Math.log(e) / Math.log(s));
  return parseFloat((e / Math.pow(s, a)).toFixed(r)) + " " + o[a];
}
function pe(e, t = 2, s = "0") {
  return e.toString().padStart(t, s);
}
function La(e, t = "/") {
  return [
    pe(e.getMonth() + 1),
    pe(e.getDate()),
    e.getFullYear()
  ].join(t);
}
function Ft() {
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
function Fa(e, t = "long", s = "english") {
  return Ft()[s][t][e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear();
}
function Pa(e) {
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
  let a = Math.floor(t), l = s < 10 ? "0" + s : s, i = r < 10 ? "0" + r : r, c = o < 10 ? "0" + o : o, u = a < 10 ? "0" + a : a, d = l === "00" ? "" : l + ":";
  return d += i === "00" ? "" : i + ":", d += c + ":" + u, d;
}
function ja(e) {
  return new Intl.NumberFormat().format(e);
}
function X(e, t) {
  return e = Math.ceil(e), t = Math.floor(t), Math.floor(Math.random() * (t - e + 1) + e);
}
function Pt() {
  return "0123456789abcdef".split("");
}
var lr = function(t) {
  return nr(t) && !ir(t);
};
function nr(e) {
  return !!e && typeof e == "object";
}
function ir(e) {
  var t = Object.prototype.toString.call(e);
  return t === "[object RegExp]" || t === "[object Date]" || cr(e);
}
var ur = typeof Symbol == "function" && Symbol.for, dr = ur ? Symbol.for("react.element") : 60103;
function cr(e) {
  return e.$$typeof === dr;
}
function fr(e) {
  return Array.isArray(e) ? [] : {};
}
function ye(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? fe(fr(e), e, t) : e;
}
function br(e, t, s) {
  return e.concat(t).map(function(r) {
    return ye(r, s);
  });
}
function gr(e, t) {
  if (!t.customMerge)
    return fe;
  var s = t.customMerge(e);
  return typeof s == "function" ? s : fe;
}
function pr(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(t) {
    return e.propertyIsEnumerable(t);
  }) : [];
}
function ut(e) {
  return Object.keys(e).concat(pr(e));
}
function jt(e, t) {
  try {
    return t in e;
  } catch {
    return !1;
  }
}
function hr(e, t) {
  return jt(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t));
}
function xr(e, t, s) {
  var r = {};
  return s.isMergeableObject(e) && ut(e).forEach(function(o) {
    r[o] = ye(e[o], s);
  }), ut(t).forEach(function(o) {
    hr(e, o) || (jt(e, o) && s.isMergeableObject(t[o]) ? r[o] = gr(o, s)(e[o], t[o], s) : r[o] = ye(t[o], s));
  }), r;
}
function fe(e, t, s) {
  s = s || {}, s.arrayMerge = s.arrayMerge || br, s.isMergeableObject = s.isMergeableObject || lr, s.cloneUnlessOtherwiseSpecified = ye;
  var r = Array.isArray(t), o = Array.isArray(e), a = r === o;
  return a ? r ? s.arrayMerge(e, t, s) : xr(e, t, s) : ye(t, s);
}
fe.all = function(t, s) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, o) {
    return fe(r, o, s);
  }, {});
};
var mr = fe, yr = mr;
const vr = yr;
function Ma(e) {
  return Object.keys(e).length > 0 ? vr(n, e) : n;
}
function kr() {
  const e = Pt(), t = 0, s = 15, r = e[X(t, s)] + e[X(t, s)], o = e[X(t, s)] + e[X(t, s)], a = e[X(t, s)] + e[X(t, s)];
  return "#" + r + o + a;
}
function Ra(e = "#fff", t = "#000") {
  let s = { backgroundColor: "", color: "" }, r = q(kr(), {}), o = r.isDark();
  return s.backgroundColor = "#" + String(r.toHex(!1)), s.color = o ? e : t, s;
}
function Aa() {
  const e = Pt(), t = 0, s = 15, r = e[X(t, s)], o = e[X(t, s)], a = e[X(t, s)];
  return "#" + r + o + a;
}
function Ba(e = 10) {
  let t = "";
  const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = s.length;
  for (let o = 0; o < Number(e); o++)
    t += s.charAt(Math.floor(Math.random() * r));
  return t;
}
function Ea(e, t = "-") {
  let s = e || "", r = t || "-";
  return s.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, r).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, r);
}
function Da(e) {
  return e.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(t, s) {
    return s === 0 ? t.toLowerCase() : t.toUpperCase();
  }).replace(/\s+/g, "");
}
function Ia(e) {
  return e.replace(/[^A-z0-9._-]/gi, "");
}
function Ha(e, t = "short", s = "english", r = "AM", o = "PM") {
  var a = new Date(Number(e) * 1e3), l = Ft(), i = l[s][t], c = a.getFullYear(), u = i[a.getMonth()], d = a.getDate(), f = a.getHours(), p = a.getMinutes(), k = a.getSeconds(), V = f >= 12 ? o : r;
  return f = f % 12, f = f === 0 ? 12 : f, u + " " + pe(d) + ", " + c + " " + f + ":" + pe(p) + ":" + pe(k) + " " + V;
}
function _a(e) {
  return e.filter((t, s, r) => r.indexOf(t) === s);
}
function Ie(e, t) {
  return typeof e === t && e !== null;
}
function Na(e) {
  return Ie(e, "string") ? !!(e.length === 10 && /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/[0-9]{4}$/.test(e)) : !1;
}
function Ga(e, t = 150) {
  return Ie(e, "string") ? !!(e.length >= 6 && e.length <= t && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)) : !1;
}
function Ua(e, t = 3) {
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
function Qa(e, t = 1, s = 100) {
  return Ie(e, "string") ? e.length >= t && e.length <= s : !1;
}
const Sr = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
], Wa = Sr, wr = [
  "button",
  "submit",
  "reset"
], Mt = wr, Cr = [
  "light",
  "dark"
], Vr = Cr, zr = [
  "normal",
  "italic",
  "oblique"
], qa = zr, $r = [
  "up",
  "down",
  "left",
  "right",
  ""
], Ja = $r, Tr = [
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
], Or = Tr, Lr = [
  "fab",
  "fad",
  "fak",
  "fal",
  "far",
  "fas",
  "fass",
  "fat"
], Ya = Lr, Fr = [
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
], Za = Fr, Pr = [1, 2, 3, 4, 5, 6], Xa = Pr, jr = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
], Ka = jr, Mr = [
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
], Rr = Mr, Ar = [
  "ul",
  "ol"
], Br = Ar, Er = [
  "underline",
  "overline",
  "none"
], el = Er, Dr = [
  "video/mp4",
  "video/ogg",
  "video/webm"
], tl = Dr, Ir = T({
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
    },
    textSize: {
      type: String,
      default: n.defaults.VvAnchor.textSize
    }
  },
  setup(e) {
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    return { classes: x(() => {
      var o, a, l, i, c, u, d, f, p, k, V, H, m, L, h, v, S, w;
      let r = [];
      return e.button === !0 ? (e.buttonBlock === !0 && e.buttonFab === !1 ? ((o = t == null ? void 0 : t.buttons) != null && o.blockBase() && r.push(t.buttons.blockBase()), e.buttonSize !== "" && ((l = (a = t == null ? void 0 : t.buttons) == null ? void 0 : a.blockSizes) == null ? void 0 : l[e.buttonSize]) && r.push(t.buttons.blockSizes[e.buttonSize])) : e.buttonBlock === !1 && e.buttonFab === !0 ? ((i = t == null ? void 0 : t.buttons) != null && i.fabBase() && r.push(t.buttons.fabBase()), e.buttonSize !== "" && ((u = (c = t == null ? void 0 : t.buttons) == null ? void 0 : c.fabSizes) == null ? void 0 : u[e.buttonSize]) && r.push(t.buttons.fabSizes[e.buttonSize])) : ((d = t == null ? void 0 : t.buttons) != null && d.base() && r.push(t.buttons.base()), e.buttonSize !== "" && ((p = (f = t == null ? void 0 : t.buttons) == null ? void 0 : f.sizes) == null ? void 0 : p[e.buttonSize]) && r.push(t.buttons.sizes[e.buttonSize])), (H = (V = (k = t == null ? void 0 : t.buttons) == null ? void 0 : k.palettes) == null ? void 0 : V[e.palette]) != null && H[e.color] && r.push(t.buttons.palettes[e.palette][e.color])) : ((m = t == null ? void 0 : t.anchors) != null && m.base() && r.push(t.anchors.base()), e.textSize !== "" && ((h = (L = t == null ? void 0 : t.anchors) == null ? void 0 : L.sizes) == null ? void 0 : h[e.textSize]) && r.push(t.anchors.sizes[e.textSize]), (w = (S = (v = t == null ? void 0 : t.anchors) == null ? void 0 : v.palettes) == null ? void 0 : S[e.palette]) != null && w[e.color] && r.push(t.anchors.palettes[e.palette][e.color])), r.join(" ").trim();
    }) };
  }
}), M = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [r, o] of t)
    s[r] = o;
  return s;
}, Hr = ["href"], _r = ["href"];
function Nr(e, t, s, r, o, a) {
  return e.external ? (y(), z("a", {
    key: 0,
    href: e.href,
    class: g(e.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    E(e.$slots, "default")
  ], 10, Hr)) : (y(), z("a", {
    key: 1,
    href: e.href,
    class: g(e.classes)
  }, [
    E(e.$slots, "default")
  ], 10, _r));
}
const sl = /* @__PURE__ */ M(Ir, [["render", Nr]]), Gr = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n, s = e.type;
    let r = x(() => {
      var a, l, i, c, u, d, f, p, k, V, H, m;
      let o = [];
      return e.block === !0 && e.fab === !1 ? ((a = t == null ? void 0 : t.buttons) != null && a.blockBase() && o.push(t.buttons.blockBase()), e.size !== "" && ((i = (l = t == null ? void 0 : t.buttons) == null ? void 0 : l.blockSizes) == null ? void 0 : i[e.size]) && o.push(t.buttons.blockSizes[e.size])) : e.fab === !0 && e.block === !1 ? ((c = t == null ? void 0 : t.buttons) != null && c.fabBase() && o.push(t.buttons.fabBase()), e.size !== "" && ((d = (u = t == null ? void 0 : t.buttons) == null ? void 0 : u.fabSizes) == null ? void 0 : d[e.size]) && o.push(t.buttons.fabSizes[e.size])) : ((f = t == null ? void 0 : t.buttons) != null && f.base() && o.push(t.buttons.base()), e.size !== "" && ((k = (p = t == null ? void 0 : t.buttons) == null ? void 0 : p.sizes) == null ? void 0 : k[e.size]) && o.push(t.buttons.sizes[e.size])), (m = (H = (V = t == null ? void 0 : t.buttons) == null ? void 0 : V.palettes) == null ? void 0 : H[e.palette]) != null && m[e.color] && o.push(t.buttons.palettes[e.palette][e.color]), o.join(" ").trim();
    });
    return { btnType: s, classes: r };
  }
}), Ur = ["type"];
function Qr(e, t, s, r, o, a) {
  return y(), z("button", {
    type: e.btnType,
    class: g(e.classes)
  }, [
    E(e.$slots, "default")
  ], 10, Ur);
}
const Wr = /* @__PURE__ */ M(Gr, [["render", Qr]]), qr = T({
  name: "VvColorModeButton",
  components: {
    VvButton: Wr
  },
  props: {
    mode: {
      type: String,
      default: n.defaults.VvColorModeButton.mode,
      validator: (e) => Vr.includes(e)
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
    const t = P(e.mode), s = x(() => t.value === "dark" ? "sun" : "moon"), r = x(() => t.value === "dark" ? e.titleLight : e.titleDark);
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
    }), { mode: t, icon: s, title: r };
  },
  methods: {
    toggleColorMode(e) {
      typeof window < "u" && document && (this.mode === "light" ? (this.mode = "dark", localStorage.setItem("colorMode", "dark"), document.documentElement.style.backgroundColor = this.groundDarkHex, document.documentElement.classList.add("dark")) : this.mode === "dark" && (this.mode = "light", localStorage.setItem("colorMode", "light"), document.documentElement.style.backgroundColor = this.groundLightHex, document.documentElement.classList.remove("dark")));
    }
  }
}), Jr = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Yr = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1), Zr = [
  Yr
], Xr = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, Kr = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1), eo = [
  Kr
];
function to(e, t, s, r, o, a) {
  const l = oe("VvButton");
  return y(), I(l, {
    title: e.title,
    onClick: t[0] || (t[0] = (i) => e.toggleColorMode(i)),
    class: "rounded-full",
    color: e.color,
    fab: !0,
    palette: e.palette,
    type: "button",
    size: e.size
  }, {
    default: j(() => [
      e.icon === "moon" ? (y(), z("svg", Jr, Zr)) : _("", !0),
      e.icon === "sun" ? (y(), z("svg", Xr, eo)) : _("", !0)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
const rl = /* @__PURE__ */ M(qr, [["render", to]]), so = T({
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
      validator: (e) => Or.includes(e)
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    return { classes: x(() => {
      var o, a, l, i, c, u, d, f, p, k, V;
      let r = [];
      return (a = (o = t == null ? void 0 : t.text) == null ? void 0 : o.sizes) != null && a[e.size] && r.push(t.text.sizes[e.size]), (c = (i = (l = t == null ? void 0 : t.borders) == null ? void 0 : l.palettes) == null ? void 0 : i[e.borderPalette]) != null && c[e.borderColor] && r.push(t.borders.palettes[e.borderPalette][e.borderColor]), (f = (d = (u = t == null ? void 0 : t.grounds) == null ? void 0 : u.palettes) == null ? void 0 : d[e.groundPalette]) != null && f[e.groundColor] && r.push(t.grounds.palettes[e.groundPalette][e.groundColor]), (V = (k = (p = t == null ? void 0 : t.text) == null ? void 0 : p.palettes) == null ? void 0 : k[e.textPalette]) != null && V[e.textColor] && r.push(t.text.palettes[e.textPalette][e.textColor]), r.join(" ").trim();
    }) };
  }
});
function ro(e, t, s, r, o, a) {
  return y(), I(xt(e.tag), {
    class: g(e.classes)
  }, {
    default: j(() => [
      E(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const Rt = /* @__PURE__ */ M(so, [["render", ro]]), oo = T({
  components: { VvEl: Rt },
  props: {
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
});
function ao(e, t, s, r, o, a) {
  const l = oe("VvEl");
  return y(), z("div", {
    class: g(e.wrapperClasses)
  }, [
    Ce(l, {
      tag: "label",
      for: e.labelFor,
      "text-palette": e.labelTextPalette,
      "text-color": e.labelTextColor,
      class: g(e.labelClasses),
      size: e.labelTextSize
    }, {
      default: j(() => [
        ee(Q(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "text-palette", "text-color", "class", "size"]),
    C("div", {
      class: g(e.slotParentClasses)
    }, [
      E(e.$slots, "default")
    ], 2),
    !e.displayError && !e.displayHelp && !e.displaySuccess ? (y(), z("div", {
      key: 0,
      class: g(e.helpClasses)
    }, "\xA0 ", 2)) : _("", !0),
    e.displayHelp ? (y(), I(l, {
      key: 1,
      tag: "div",
      "text-palette": e.helpTextPalette,
      "text-color": e.helpTextColor,
      class: g(e.helpClasses),
      size: e.helpTextSize
    }, {
      default: j(() => [
        ee(Q(e.helpText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0),
    e.displaySuccess ? (y(), I(l, {
      key: 2,
      tag: "div",
      "text-palette": e.successTextPalette,
      "text-color": e.successTextColor,
      class: g(e.successClasses),
      size: e.successTextSize
    }, {
      default: j(() => [
        ee(Q(e.successText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0),
    e.displayError === !0 ? (y(), I(l, {
      key: 3,
      tag: "div",
      "text-palette": e.errorTextPalette,
      "text-color": e.errorTextColor,
      class: g(e.errorClasses),
      size: e.errorTextSize
    }, {
      default: j(() => [
        ee(Q(e.errorText), 1)
      ]),
      _: 1
    }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0)
  ], 2);
}
const ol = /* @__PURE__ */ M(oo, [["render", ao]]), lo = T({
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
});
function no(e, t, s, r, o, a) {
  const l = oe("VvEl");
  return y(), z("div", {
    class: g(e.wrapperClasses)
  }, [
    C("div", {
      class: g(e.topWrapperClasses)
    }, [
      Ce(l, {
        tag: "label",
        for: e.labelFor,
        "text-palette": e.labelTextPalette,
        "text-color": e.labelTextColor,
        class: g(e.labelClasses),
        size: e.labelTextSize
      }, {
        default: j(() => [
          ee(Q(e.label), 1)
        ]),
        _: 1
      }, 8, ["for", "text-palette", "text-color", "class", "size"]),
      C("div", {
        class: g(e.topSlotClasses)
      }, [
        E(e.$slots, "top")
      ], 2)
    ], 2),
    C("div", {
      class: g(e.slotParentClasses)
    }, [
      E(e.$slots, "default")
    ], 2),
    C("div", {
      class: g(e.bottomWrapperClasses)
    }, [
      C("div", {
        class: g(e.textParentClasses)
      }, [
        !e.displayError && !e.displayHelp && !e.displaySuccess ? (y(), z("div", {
          key: 0,
          class: g(e.helpClasses)
        }, "\xA0 ", 2)) : _("", !0),
        e.displayHelp ? (y(), I(l, {
          key: 1,
          tag: "div",
          "text-palette": e.helpTextPalette,
          "text-color": e.helpTextColor,
          class: g(e.helpClasses),
          size: e.helpTextSize
        }, {
          default: j(() => [
            ee(Q(e.helpText), 1)
          ]),
          _: 1
        }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0),
        e.displaySuccess ? (y(), I(l, {
          key: 2,
          tag: "div",
          "text-palette": e.successTextPalette,
          "text-color": e.successTextColor,
          class: g(e.successClasses),
          size: e.successTextSize
        }, {
          default: j(() => [
            ee(Q(e.successText), 1)
          ]),
          _: 1
        }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0),
        e.displayError === !0 ? (y(), I(l, {
          key: 3,
          tag: "div",
          "text-palette": e.errorTextPalette,
          "text-color": e.errorTextColor,
          class: g(e.errorClasses),
          size: e.errorTextSize
        }, {
          default: j(() => [
            ee(Q(e.errorText), 1)
          ]),
          _: 1
        }, 8, ["text-palette", "text-color", "class", "size"])) : _("", !0)
      ], 2),
      C("div", {
        class: g(e.bottomSlotClasses)
      }, [
        E(e.$slots, "bottom")
      ], 2)
    ], 2)
  ], 2);
}
const al = /* @__PURE__ */ M(lo, [["render", no]]), et = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    let s = x(() => {
      var c, u, d, f, p, k;
      let i = [];
      return (c = t == null ? void 0 : t.checkboxes) != null && c.base() && i.push(t.checkboxes.base()), e.size !== "" && ((d = (u = t == null ? void 0 : t.checkboxes) == null ? void 0 : u.sizes) == null ? void 0 : d[e.size]) && i.push(t.checkboxes.sizes[e.size]), (k = (p = (f = t == null ? void 0 : t.checkboxes) == null ? void 0 : f.palettes) == null ? void 0 : p[e.palette]) != null && k[e.color] && i.push(t.checkboxes.palettes[e.palette][e.color]), i.join(" ").trim();
    });
    function r(i) {
      return [
        'url("data:image/svg+xml,%3csvg viewBox=',
        "'0 0 16 16'  fill='%23",
        i,
        "' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'",
        '/%3e%3c/svg%3e")'
      ].join("");
    }
    let o = x(() => r(e.darkCheckHex.replace(/#/g, ""))), a = x(() => r(e.lightCheckHex.replace(/#/g, "")));
    return {
      classes: s,
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
const io = et;
const uo = ["checked", "data-test"];
function co(e, t, s, r, o, a) {
  return y(), z("input", {
    type: "checkbox",
    class: g(e.classes),
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleCheckboxChange(l))),
    "data-test": e.darkCheckCssUrl + e.lightCheckCssUrl
  }, null, 42, uo);
}
const ll = /* @__PURE__ */ M(io, [["render", co], ["__scopeId", "data-v-7a474fea"]]), fo = T({
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
      validator: (e) => Rr.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    return { classes: x(() => {
      var a, l, i, c, u, d;
      let o = [];
      return (a = t == null ? void 0 : t.inputs) != null && a.base() && o.push(t.inputs.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.inputs) == null ? void 0 : l.sizes) == null ? void 0 : i[e.size]) && o.push(t.inputs.sizes[e.size]), (d = (u = (c = t == null ? void 0 : t.inputs) == null ? void 0 : c.palettes) == null ? void 0 : u[String(e.palette)]) != null && d[e.color] && o.push(t.inputs.palettes[String(e.palette)][e.color]), o.join(" ").trim();
    }), handleInputChange: (o) => o.target.value };
  }
}), bo = ["type", "value"];
function go(e, t, s, r, o, a) {
  return y(), z("input", {
    type: e.type,
    class: g(e.classes),
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleInputChange(l)))
  }, null, 42, bo);
}
const nl = /* @__PURE__ */ M(fo, [["render", go]]), tt = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n, s = P(e.checked);
    let r = x(() => {
      var u, d, f, p, k, V;
      let c = [];
      return (u = t == null ? void 0 : t.radios) != null && u.base() && c.push(t.radios.base()), e.size !== "" && ((f = (d = t == null ? void 0 : t.radios) == null ? void 0 : d.sizes) == null ? void 0 : f[e.size]) && c.push(t.radios.sizes[e.size]), (V = (k = (p = t == null ? void 0 : t.radios) == null ? void 0 : p.palettes) == null ? void 0 : k[e.palette]) != null && V[e.color] && c.push(t.radios.palettes[e.palette][e.color]), c.join(" ").trim();
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
    let a = x(() => o(e.darkRadioHex.replace(/#/g, ""))), l = x(() => o(e.lightRadioHex.replace(/#/g, "")));
    return {
      classes: r,
      darkRadioCssUrl: a,
      handleRadioChange: (c) => {
        const u = c.target;
        return s.value = !1, u.checked === !0 && (s.value = !0), s.value;
      },
      lightRadioCssUrl: l
    };
  }
}), ft = () => {
  mt((e) => ({
    "2bb23a2f": e.lightRadioCssUrl,
    "520fce53": e.darkRadioCssUrl
  }));
}, bt = tt.setup;
tt.setup = bt ? (e, t) => (ft(), bt(e, t)) : ft;
const po = tt;
const ho = ["value", "checked", "data-test"];
function xo(e, t, s, r, o, a) {
  return y(), z("input", {
    type: "radio",
    class: g(e.classes),
    value: e.value,
    checked: e.checked,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleRadioChange(l))),
    "data-test": e.darkRadioCssUrl + e.lightRadioCssUrl
  }, null, 42, ho);
}
const il = /* @__PURE__ */ M(po, [["render", xo], ["__scopeId", "data-v-8b8ebe7e"]]), mo = T({
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
      validator: (e) => Br.includes(e)
    }
  },
  setup(e) {
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    return { classes: x(() => {
      var o, a, l, i, c;
      let r = [];
      return t != null && t.text.base() && r.push(t == null ? void 0 : t.text.base()), (a = (o = t == null ? void 0 : t.lists) == null ? void 0 : o.sizes) != null && a[e.size] && r.push(t.lists.sizes[e.size]), (c = (i = (l = t == null ? void 0 : t.lists) == null ? void 0 : l.palettes) == null ? void 0 : i[e.markerPalette]) != null && c[e.markerColor] && r.push(String(t.lists.palettes[e.markerPalette][e.markerColor])), r.join(" ").trim();
    }) };
  }
});
function yo(e, t, s, r, o, a) {
  return y(), I(xt(e.tag), {
    class: g([e.listStyleTypeClass, e.classes]),
    role: "list"
  }, {
    default: j(() => [
      E(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
const ul = /* @__PURE__ */ M(mo, [["render", yo]]), vo = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    let s = x(() => {
      var a, l, i;
      let o = [];
      return t != null && t.text.base() && o.push(t == null ? void 0 : t.text.base()), (i = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.palette]) != null && i[e.color] && o.push(t.text.palettes[e.palette][e.color]), o.join(" ").trim();
    }), r = x(() => {
      var a, l, i;
      let o = [];
      return (i = (l = (a = t == null ? void 0 : t.text) == null ? void 0 : a.palettes) == null ? void 0 : l[e.symbolPalette]) != null && i[e.symbolColor] && o.push(t.text.palettes[e.symbolPalette][e.symbolColor]), o.join(" ").trim();
    });
    return { classes: s, symbolClasses: r };
  }
});
function ko(e, t, s, r, o, a) {
  return y(), z("li", {
    class: g(e.enableColoredSymbols === !0 ? e.symbolClasses : e.classes)
  }, [
    e.enableColoredSymbols === !0 ? (y(), z("span", {
      key: 0,
      class: g([e.classes])
    }, [
      E(e.$slots, "default")
    ], 2)) : E(e.$slots, "default", { key: 1 })
  ], 2);
}
const dl = /* @__PURE__ */ M(vo, [["render", ko]]), So = T({
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
}), wo = {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 500 500",
  "xml:space": "preserve"
};
function Co(e, t, s, r, o, a) {
  return y(), z("svg", wo, [
    C("path", {
      class: g(e.orangeFill),
      d: "M166.3 304.7c7.9-48.1 36.4-89.4 76-114.5-22.3-11.7-47.6-18.4-74.5-18.4-27.7 0-53.8 7.1-76.6 19.5 7.1 47.9 35.4 89.1 75.1 113.4zM257.6 190.2c39.7 25.1 68.1 66.4 76 114.5 39.7-24.4 68-65.5 75-113.4-22.8-12.4-48.9-19.5-76.6-19.5-26.8 0-52.2 6.7-74.4 18.4zM328.2 332.1c0-5.1-.3-10.2-.7-15.2-23.2 12.1-49.6 19-77.5 19s-54.3-6.9-77.5-19c-.5 5-.7 10.1-.7 15.2 0 58.4 31.4 109.7 78.3 137.7 46.7-28 78.1-79.2 78.1-137.7z"
    }, null, 2),
    C("path", {
      class: g(e.yellowFill),
      d: "M249.9 194.5c-40.5 24.2-69.5 65.8-76.6 114.4 22.8 12.4 48.9 19.5 76.6 19.5 27.7 0 53.8-7.1 76.6-19.5-7.1-48.6-36.1-90.2-76.6-114.4z"
    }, null, 2),
    C("path", {
      class: g(e.blueFill),
      d: "M273.2 63.2c-2.5-3.4-5.6-6.2-9.5-8.3-3.9-2.1-8.5-3.1-13.8-3.1-5.3 0-9.9 1-13.8 3.1-3.9 2.1-7 4.9-9.5 8.3-2.5 3.4-4.3 7.3-5.4 11.6-1.2 4.3-1.7 8.7-1.7 13.1s.6 8.8 1.7 13.1c1.1 4.3 3 8.2 5.4 11.6s5.6 6.2 9.5 8.3c3.9 2.1 8.5 3.1 13.8 3.1 5.3 0 9.9-1 13.8-3.1 3.9-2.1 7-4.9 9.5-8.3 2.5-3.4 4.3-7.3 5.4-11.6 1.1-4.3 1.7-8.7 1.7-13.1s-.6-8.8-1.7-13.1c-1.1-4.3-2.9-8.2-5.4-11.6z"
    }, null, 2),
    C("path", {
      class: g(e.blueFill),
      d: "M249.9 7.6c-88.4 0-160.3 72-160.3 160.4 0 5.1.3 10.2.7 15.2 23.2-12.1 49.6-19 77.5-19 29.8 0 57.8 7.8 82.1 21.5 24.3-13.7 52.3-21.5 82.1-21.5 28 0 54.3 6.9 77.5 19 .5-5 .7-10.1.7-15.2.1-88.4-71.8-160.4-160.3-160.4zm39.5 97.6c-1.8 5.5-4.4 10.4-7.9 14.7-3.5 4.3-7.9 7.7-13.2 10.2-5.3 2.5-11.4 3.8-18.3 3.8-7 0-13.1-1.3-18.3-3.8-5.3-2.5-9.6-6-13.2-10.2-3.5-4.3-6.2-9.2-7.9-14.7-1.8-5.5-2.6-11.3-2.6-17.3s.9-11.8 2.6-17.3c1.8-5.5 4.4-10.4 7.9-14.7 3.5-4.3 7.9-7.7 13.2-10.2 5.3-2.5 11.4-3.8 18.3-3.8 7 0 13.1 1.3 18.3 3.8 5.3 2.5 9.6 6 13.2 10.2 3.5 4.3 6.2 9.2 7.9 14.7 1.8 5.5 2.6 11.3 2.6 17.3.1 6-.8 11.8-2.6 17.3z"
    }, null, 2),
    C("path", {
      class: g(e.greenFill),
      d: "M123.5 378.1c-1.8-1.1-3.8-1.9-6.1-2.3-2.3-.5-4.7-.7-7.1-.7H83.5v30.4h29.3c5.1 0 9.1-1.4 12.1-4.2 3-2.8 4.4-6.7 4.4-11.5 0-2.9-.5-5.3-1.6-7.1-1.1-2-2.5-3.5-4.2-4.6zM121.3 361.7c2.9-2.3 4.4-5.8 4.4-10.5 0-3-.5-5.5-1.5-7.3-1-1.8-2.3-3.3-4.1-4.2-1.7-1-3.7-1.6-6-1.9-2.3-.3-4.7-.4-7.2-.4H83.5v28h23.4c6.7-.2 11.4-1.3 14.4-3.7z"
    }, null, 2),
    C("path", {
      class: g(e.greenFill),
      d: "M164 332.1c0-6.5.4-12.9 1.1-19.2-42.2-24.8-72.7-67.5-80.9-117.5-46 28.2-76.7 79-76.7 136.7 0 88.4 71.9 160.3 160.3 160.3 26.9 0 52.2-6.7 74.5-18.4-47-29.7-78.3-82.2-78.3-141.9zm-24.7 67.4c-1.2 3-2.9 5.7-5.1 8.1-2.3 2.3-5 4.2-8.4 5.7-3.3 1.4-7.2 2.2-11.5 2.2H71.8v-87.9h31.9c2 0 4 0 6.2.1 2.1 0 4.2.2 6.3.4 2.1.2 4.1.5 6 .9 1.9.4 3.5 1 4.8 1.8 2.9 1.7 5.3 4.1 7.3 7.2 2 3.1 3 6.8 3 11.1 0 4.7-1.2 8.7-3.4 12.1-2.3 3.4-5.5 5.9-9.6 7.6v.2c5.4 1.2 9.6 3.6 12.4 7.4 2.9 3.8 4.3 8.4 4.3 13.8 0 3.1-.6 6.2-1.7 9.3z"
    }, null, 2),
    C("path", {
      class: g(e.redFill),
      d: "M415.7 195.4c-8.3 50.1-38.7 92.8-80.9 117.5.7 6.3 1.1 12.7 1.1 19.2 0 59.7-31.3 112.2-78.3 142 22.3 11.7 47.6 18.4 74.5 18.4 88.4 0 160.3-71.9 160.3-160.3 0-57.8-30.8-108.6-76.7-136.8zm20.5 220h-61.1v-87.9h60.7v9.9h-49v28h45.7v9.9h-45.7v30.4h49.4v9.7z"
    }, null, 2)
  ]);
}
const cl = /* @__PURE__ */ M(So, [["render", Co]]), Vo = T({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
}), zo = /* @__PURE__ */ C("path", { d: "m8.8 2.3 51.9 121.1L112.5 2.3h6.7l-55.4 129h-6.2L2.3 2.3h6.5zM183.4 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM335.8 126.1v5.2H260V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM353.5 2.3l51.9 121.1L457.2 2.3h6.7l-55.4 129h-6.2L347 2.3h6.5zM558.4 126.1v5.2h-75.8V16.5h74.3v5.2h-68.7V70h60.1v5.2h-60.1v50.9h70.2zM587.6 27.1v104.1H582V16.5h4.2l84.4 105.9V16.5h5.7v114.8h-5.5L587.6 27.1zM786.2 21.6h-43v109.6h-5.7V21.6h-43v-5.2h91.6v5.2zM850.2 126.7c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V16.5h5.5V74c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V16.5h5.7V74c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.4 3 12.1 4.5 20.1 4.5zM993.4 33.4c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2-4.7-1.5-10.2-2.8-16.6-4.1-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1), $o = [
  zo
];
function To(e, t, s, r, o, a) {
  return y(), z("svg", {
    class: g(e.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1004.5 133.5",
    "xml:space": "preserve"
  }, $o, 2);
}
const fl = /* @__PURE__ */ M(Vo, [["render", To]]), Oo = T({
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
}), Lo = ["fill"], Fo = ["fill"];
function Po(e, t, s, r, o, a) {
  return y(), z("svg", {
    class: g(e.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    C("path", {
      fill: e.enableClassFills ? "" : e.fillOne,
      class: g(e.enableClassFills ? e.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, Lo),
    C("g", null, [
      C("path", {
        fill: e.enableClassFills ? "" : e.fillTwo,
        class: g(e.enableClassFills ? e.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, Fo)
    ])
  ], 2);
}
const bl = /* @__PURE__ */ M(Oo, [["render", Po]]);
function W(e, t, ...s) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...s) : o;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, W), r;
}
var qe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(qe || {}), jo = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(jo || {});
function be({ visible: e = !0, features: t = 0, ourProps: s, theirProps: r, ...o }) {
  var a;
  let l = Mo(r, s), i = Object.assign(o, { props: l });
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
function Ue({ props: e, attrs: t, slots: s, slot: r, name: o }) {
  var a;
  let { as: l, ...i } = Bt(e, ["unmount", "static"]), c = (a = s.default) == null ? void 0 : a.call(s, r), u = {};
  if (r) {
    let d = !1, f = [];
    for (let [p, k] of Object.entries(r))
      typeof k == "boolean" && (d = !0), k === !0 && f.push(p);
    d && (u["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (c = At(c != null ? c : []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = c != null ? c : [];
      if (!Ao(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).sort((p, k) => p.localeCompare(k)).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
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
function Mo(...e) {
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
      for (let i of l) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        i(o, ...a);
      }
    } });
  return t;
}
function Ro(e) {
  let t = Object.assign({}, e);
  for (let s in t)
    t[s] === void 0 && delete t[s];
  return t;
}
function Bt(e, t = []) {
  let s = Object.assign({}, e);
  for (let r of t)
    r in s && delete s[r];
  return s;
}
function Ao(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Bo = 0;
function Eo() {
  return ++Bo;
}
function He() {
  return Eo();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function Do(e) {
  throw new Error("Unexpected object: " + e);
}
var R = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(R || {});
function Io(e, t) {
  let s = t.resolveItems();
  if (s.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), o = r != null ? r : -1, a = (() => {
    switch (e.focus) {
      case 0:
        return s.findIndex((l) => !t.resolveDisabled(l));
      case 1: {
        let l = s.slice().reverse().findIndex((i, c, u) => o !== -1 && u.length - c - 1 >= o ? !1 : !t.resolveDisabled(i));
        return l === -1 ? l : s.length - 1 - l;
      }
      case 2:
        return s.findIndex((l, i) => i <= o ? !1 : !t.resolveDisabled(l));
      case 3: {
        let l = s.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return l === -1 ? l : s.length - 1 - l;
      }
      case 4:
        return s.findIndex((l) => t.resolveId(l) === e.id);
      case 5:
        return null;
      default:
        Do(e);
    }
  })();
  return a === -1 ? r : a;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Et = Symbol("Context");
var je = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(je || {});
function Ho() {
  return $(Et, null);
}
function _o(e) {
  yt(Et, e);
}
function gt(e, t) {
  if (e)
    return e;
  let s = t != null ? t : "button";
  if (typeof s == "string" && s.toLowerCase() === "button")
    return "button";
}
function No(e, t) {
  let s = P(gt(e.value.type, e.value.as));
  return ce(() => {
    s.value = gt(e.value.type, e.value.as);
  }), Je(() => {
    var r;
    s.value || !O(t) || O(t) instanceof HTMLButtonElement && !((r = O(t)) != null && r.hasAttribute("type")) && (s.value = "button");
  }), s;
}
const Dt = typeof window > "u" || typeof document > "u";
function Go(e) {
  if (Dt)
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
let pt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var Uo = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Uo || {}), Qo = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Qo || {}), Wo = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Wo || {}), st = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(st || {});
function It(e, t = 0) {
  var s;
  return e === ((s = Go(e)) == null ? void 0 : s.body) ? !1 : W(t, { [0]() {
    return e.matches(pt);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(pt))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function qo(e, t = (s) => s) {
  return e.slice().sort((s, r) => {
    let o = t(s), a = t(r);
    if (o === null || a === null)
      return 0;
    let l = o.compareDocumentPosition(a);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Qe(e, t, s) {
  Dt || Je((r) => {
    document.addEventListener(e, t, s), r(() => document.removeEventListener(e, t, s));
  });
}
function Jo(e, t, s = x(() => !0)) {
  function r(a, l) {
    if (!s.value || a.defaultPrevented)
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
      let d = u instanceof HTMLElement ? u : O(u);
      if (d != null && d.contains(i) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !It(i, st.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let o = P(null);
  Qe("mousedown", (a) => {
    var l, i;
    s.value && (o.value = ((i = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), Qe("click", (a) => {
    !o.value || (r(a, () => o.value), o.value = null);
  }, !0), Qe("blur", (a) => r(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ht = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ht || {});
let Yo = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: s }) {
  return () => {
    let { features: r, ...o } = e, a = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return be({ ourProps: a, theirProps: o, slot: {}, attrs: s, slots: t, name: "Hidden" });
  };
} });
function _t(e = {}, t = null, s = []) {
  for (let [r, o] of Object.entries(e))
    Gt(s, Nt(t, r), o);
  return s;
}
function Nt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Gt(e, t, s) {
  if (Array.isArray(s))
    for (let [r, o] of s.entries())
      Gt(e, Nt(t, r.toString()), o);
  else
    s instanceof Date ? e.push([t, s.toISOString()]) : typeof s == "boolean" ? e.push([t, s ? "1" : "0"]) : typeof s == "string" ? e.push([t, s]) : typeof s == "number" ? e.push([t, `${s}`]) : s == null ? e.push([t, ""]) : _t(s, t, e);
}
function Zo(e, t, s) {
  let r = P(s == null ? void 0 : s.value), o = x(() => e.value !== void 0);
  return [x(() => o.value ? e.value : r.value), function(a) {
    return o.value || (r.value = a), t == null ? void 0 : t(a);
  }];
}
function ht(e) {
  return [e.screenX, e.screenY];
}
function Xo() {
  let e = P([-1, -1]);
  return { wasMoved(t) {
    let s = ht(t);
    return e.value[0] === s[0] && e.value[1] === s[1] ? !1 : (e.value = s, !0);
  }, update(t) {
    e.value = ht(t);
  } };
}
function Ko(e, t) {
  return e === t;
}
var ea = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ea || {}), ta = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(ta || {}), sa = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(sa || {});
function ra(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Ut = Symbol("ListboxContext");
function ke(e) {
  let t = $(Ut, null);
  if (t === null) {
    let s = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, ke), s;
  }
  return t;
}
let oa = T({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Ko }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: s, emit: r }) {
  let o = P(1), a = P(null), l = P(null), i = P(null), c = P([]), u = P(""), d = P(null), f = P(1);
  function p(h = (v) => v) {
    let v = d.value !== null ? c.value[d.value] : null, S = qo(h(c.value.slice()), (B) => O(B.dataRef.domRef)), w = v ? S.indexOf(v) : null;
    return w === -1 && (w = null), { options: S, activeOptionIndex: w };
  }
  let k = x(() => e.multiple ? 1 : 0), [V, H] = Zo(x(() => e.modelValue === void 0 ? W(k.value, { [1]: [], [0]: void 0 }) : e.modelValue), (h) => r("update:modelValue", h), x(() => e.defaultValue)), m = { listboxState: o, value: V, mode: k, compare(h, v) {
    if (typeof e.by == "string") {
      let S = e.by;
      return (h == null ? void 0 : h[S]) === (v == null ? void 0 : v[S]);
    }
    return e.by(h, v);
  }, orientation: x(() => e.horizontal ? "horizontal" : "vertical"), labelRef: a, buttonRef: l, optionsRef: i, disabled: x(() => e.disabled), options: c, searchQuery: u, activeOptionIndex: d, activationTrigger: f, closeListbox() {
    e.disabled || o.value !== 1 && (o.value = 1, d.value = null);
  }, openListbox() {
    e.disabled || o.value !== 0 && (o.value = 0);
  }, goToOption(h, v, S) {
    if (e.disabled || o.value === 1)
      return;
    let w = p(), B = Io(h === R.Specific ? { focus: R.Specific, id: v } : { focus: h }, { resolveItems: () => w.options, resolveActiveIndex: () => w.activeOptionIndex, resolveId: (ue) => ue.id, resolveDisabled: (ue) => ue.dataRef.disabled });
    u.value = "", d.value = B, f.value = S != null ? S : 1, c.value = w.options;
  }, search(h) {
    if (e.disabled || o.value === 1)
      return;
    let v = u.value !== "" ? 0 : 1;
    u.value += h.toLowerCase();
    let S = (d.value !== null ? c.value.slice(d.value + v).concat(c.value.slice(0, d.value + v)) : c.value).find((B) => B.dataRef.textValue.startsWith(u.value) && !B.dataRef.disabled), w = S ? c.value.indexOf(S) : -1;
    w === -1 || w === d.value || (d.value = w, f.value = 1);
  }, clearSearch() {
    e.disabled || o.value !== 1 && u.value !== "" && (u.value = "");
  }, registerOption(h, v) {
    let S = p((w) => [...w, { id: h, dataRef: v }]);
    c.value = S.options, d.value = S.activeOptionIndex;
  }, unregisterOption(h) {
    let v = p((S) => {
      let w = S.findIndex((B) => B.id === h);
      return w !== -1 && S.splice(w, 1), S;
    });
    c.value = v.options, d.value = v.activeOptionIndex, f.value = 1;
  }, select(h) {
    e.disabled || H(W(k.value, { [0]: () => h, [1]: () => {
      let v = N(m.value.value).slice(), S = N(h), w = v.findIndex((B) => m.compare(S, N(B)));
      return w === -1 ? v.push(S) : v.splice(w, 1), v;
    } }));
  } };
  Jo([l, i], (h, v) => {
    var S;
    m.closeListbox(), It(v, st.Loose) || (h.preventDefault(), (S = O(l)) == null || S.focus());
  }, x(() => o.value === 0)), yt(Ut, m), _o(x(() => W(o.value, { [0]: je.Open, [1]: je.Closed })));
  let L = x(() => {
    var h;
    return (h = O(l)) == null ? void 0 : h.closest("form");
  });
  return ce(() => {
    vt([L], () => {
      if (!L.value || e.defaultValue === void 0)
        return;
      function h() {
        m.select(e.defaultValue);
      }
      return L.value.addEventListener("reset", h), () => {
        var v;
        (v = L.value) == null || v.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: h, modelValue: v, disabled: S, ...w } = e, B = { open: o.value === 0, disabled: S, value: V.value };
    return We(Ve, [...h != null && V.value != null ? _t({ [h]: V.value }).map(([ue, Qt]) => We(Yo, Ro({ features: Ht.Hidden, key: ue, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: ue, value: Qt }))) : [], be({ ourProps: {}, theirProps: { ...s, ...Bt(w, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: B, slots: t, attrs: s, name: "Listbox" })]);
  };
} }), aa = T({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${He()}` } }, setup(e, { attrs: t, slots: s }) {
  let r = ke("ListboxLabel");
  function o() {
    var a;
    (a = O(r.buttonRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { id: l, ...i } = e, c = { id: l, ref: r.labelRef, onClick: o };
    return be({ ourProps: c, theirProps: i, slot: a, attrs: t, slots: s, name: "ListboxLabel" });
  };
} }), la = T({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${He()}` } }, setup(e, { attrs: t, slots: s, expose: r }) {
  let o = ke("ListboxButton");
  r({ el: o.buttonRef, $el: o.buttonRef });
  function a(u) {
    switch (u.key) {
      case F.Space:
      case F.Enter:
      case F.ArrowDown:
        u.preventDefault(), o.openListbox(), ie(() => {
          var d;
          (d = O(o.optionsRef)) == null || d.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.First);
        });
        break;
      case F.ArrowUp:
        u.preventDefault(), o.openListbox(), ie(() => {
          var d;
          (d = O(o.optionsRef)) == null || d.focus({ preventScroll: !0 }), o.value.value || o.goToOption(R.Last);
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
      return (d = O(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })) : (u.preventDefault(), o.openListbox(), ra(() => {
      var d;
      return (d = O(o.optionsRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    })));
  }
  let c = No(x(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var u, d;
    let f = { open: o.listboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: p, ...k } = e, V = { ref: o.buttonRef, id: p, type: c.value, "aria-haspopup": "listbox", "aria-controls": (u = O(o.optionsRef)) == null ? void 0 : u.id, "aria-expanded": o.disabled.value ? void 0 : o.listboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(d = O(o.labelRef)) == null ? void 0 : d.id, p].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: a, onKeyup: l, onClick: i };
    return be({ ourProps: V, theirProps: k, slot: f, attrs: t, slots: s, name: "ListboxButton" });
  };
} }), na = T({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${He()}` } }, setup(e, { attrs: t, slots: s, expose: r }) {
  let o = ke("ListboxOptions"), a = P(null);
  r({ el: o.optionsRef, $el: o.optionsRef });
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
          return (d = O(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
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
          return (d = O(o.buttonRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
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
  let i = Ho(), c = x(() => i !== null ? i.value === je.Open : o.listboxState.value === 0);
  return () => {
    var u, d, f, p;
    let k = { open: o.listboxState.value === 0 }, { id: V, ...H } = e, m = { "aria-activedescendant": o.activeOptionIndex.value === null || (u = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : u.id, "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, "aria-labelledby": (p = (d = O(o.labelRef)) == null ? void 0 : d.id) != null ? p : (f = O(o.buttonRef)) == null ? void 0 : f.id, "aria-orientation": o.orientation.value, id: V, onKeydown: l, role: "listbox", tabIndex: 0, ref: o.optionsRef };
    return be({ ourProps: m, theirProps: H, slot: k, attrs: t, slots: s, features: qe.RenderStrategy | qe.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), ia = T({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${He()}` } }, setup(e, { slots: t, attrs: s, expose: r }) {
  let o = ke("ListboxOption"), a = P(null);
  r({ el: a, $el: a });
  let l = x(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === e.id : !1), i = x(() => W(o.mode.value, { [0]: () => o.compare(N(o.value.value), N(e.value)), [1]: () => N(o.value.value).some((m) => o.compare(N(m), N(e.value))) })), c = x(() => W(o.mode.value, { [1]: () => {
    var m;
    let L = N(o.value.value);
    return ((m = o.options.value.find((h) => L.some((v) => o.compare(N(v), N(h.dataRef.value))))) == null ? void 0 : m.id) === e.id;
  }, [0]: () => i.value })), u = x(() => ({ disabled: e.disabled, value: e.value, textValue: "", domRef: a }));
  ce(() => {
    var m, L;
    let h = (L = (m = O(a)) == null ? void 0 : m.textContent) == null ? void 0 : L.toLowerCase().trim();
    h !== void 0 && (u.value.textValue = h);
  }), ce(() => o.registerOption(e.id, u)), qt(() => o.unregisterOption(e.id)), ce(() => {
    vt([o.listboxState, i], () => {
      o.listboxState.value === 0 && (!i.value || W(o.mode.value, { [1]: () => {
        c.value && o.goToOption(R.Specific, e.id);
      }, [0]: () => {
        o.goToOption(R.Specific, e.id);
      } }));
    }, { immediate: !0 });
  }), Je(() => {
    o.listboxState.value === 0 && (!l.value || o.activationTrigger.value !== 0 && ie(() => {
      var m, L;
      return (L = (m = O(a)) == null ? void 0 : m.scrollIntoView) == null ? void 0 : L.call(m, { block: "nearest" });
    }));
  });
  function d(m) {
    if (e.disabled)
      return m.preventDefault();
    o.select(e.value), o.mode.value === 0 && (o.closeListbox(), ie(() => {
      var L;
      return (L = O(o.buttonRef)) == null ? void 0 : L.focus({ preventScroll: !0 });
    }));
  }
  function f() {
    if (e.disabled)
      return o.goToOption(R.Nothing);
    o.goToOption(R.Specific, e.id);
  }
  let p = Xo();
  function k(m) {
    p.update(m);
  }
  function V(m) {
    !p.wasMoved(m) || e.disabled || l.value || o.goToOption(R.Specific, e.id, 0);
  }
  function H(m) {
    !p.wasMoved(m) || e.disabled || !l.value || o.goToOption(R.Nothing);
  }
  return () => {
    let { disabled: m } = e, L = { active: l.value, selected: i.value, disabled: m }, { id: h, value: v, disabled: S, ...w } = e, B = { id: h, ref: a, role: "option", tabIndex: m === !0 ? void 0 : -1, "aria-disabled": m === !0 ? !0 : void 0, "aria-selected": i.value, disabled: void 0, onClick: d, onFocus: f, onPointerenter: k, onMouseenter: k, onPointermove: V, onMousemove: V, onPointerleave: H, onMouseleave: H };
    return be({ ourProps: B, theirProps: w, slot: L, attrs: s, slots: t, name: "ListboxOption" });
  };
} });
const ua = T({
  name: "VvListbox",
  emits: ["update:modelValue"],
  components: {
    Listbox: oa,
    ListboxButton: la,
    ListboxLabel: aa,
    ListboxOptions: na,
    ListboxOption: ia
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
    const t = P(e.data), s = P(t.value[e.selectedIndex]), r = Object.keys($("vv", {})).length > 0 ? $("vv") : n, o = x(() => {
      var i, c, u, d, f, p;
      let l = [];
      return (i = r == null ? void 0 : r.listboxes) != null && i.base() && l.push(r.listboxes.base()), e.size !== "" && ((u = (c = r == null ? void 0 : r.listboxes) == null ? void 0 : c.sizes) == null ? void 0 : u[e.size]) && l.push(r.listboxes.sizes[e.size]), (p = (f = (d = r == null ? void 0 : r.listboxes) == null ? void 0 : d.buttonPalettes) == null ? void 0 : f[e.listboxButtonPalette]) != null && p[e.listboxButtonColor] && l.push(r.listboxes.buttonPalettes[e.listboxButtonPalette][e.listboxButtonColor]), l.join(" ").trim();
    }), a = x(() => {
      var i, c, u;
      let l = [];
      return (u = (c = (i = r == null ? void 0 : r.listboxes) == null ? void 0 : i.optionPalettes) == null ? void 0 : c[e.listboxOptionPalette]) != null && u[e.listboxOptionColor] && l.push(r.listboxes.optionPalettes[e.listboxOptionPalette][e.listboxOptionColor]), l.join(" ").trim();
    });
    return {
      listboxButtonVvClasses: o,
      listboxOptionVvClasses: a,
      selectData: t,
      selectedItem: s,
      VvConfig: n
    };
  }
}), da = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
}, null, -1), ca = [
  da
], fa = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1), ba = [
  fa
], ga = /* @__PURE__ */ C("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
}, null, -1), pa = [
  ga
];
function ha(e, t, s, r, o, a) {
  const l = oe("ListboxLabel"), i = oe("ListboxButton"), c = oe("ListboxOption"), u = oe("ListboxOptions"), d = oe("Listbox");
  return y(), I(d, {
    modelValue: e.selectedItem,
    "onUpdate:modelValue": [
      t[0] || (t[0] = (f) => e.selectedItem = f),
      t[1] || (t[1] = (f) => e.$emit("update:modelValue", f))
    ],
    by: "id"
  }, {
    default: j(() => [
      e.label.length > 0 ? (y(), I(l, {
        key: 0,
        class: g(e.labelClasses)
      }, {
        default: j(() => [
          E(e.$slots, "default", {}, () => [
            ee(Q(e.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class"])) : (y(), I(l, {
        key: 1,
        class: g(e.labelClasses)
      }, {
        default: j(() => [
          E(e.$slots, "default")
        ]),
        _: 3
      }, 8, ["class"])),
      Ce(i, {
        class: g([e.listboxButtonClasses, e.listboxButtonVvClasses])
      }, {
        default: j(() => [
          C("span", {
            class: g(e.selectedDisplayClasses)
          }, Q(e.selectedItem.display), 3),
          (y(), z("svg", {
            class: g(e.iconsSizeClasses),
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor"
          }, ca, 2))
        ]),
        _: 1
      }, 8, ["class"]),
      Ce(u, {
        class: g([e.listboxOptionsClasses, e.label.length > 0 ? e.listboxOptionsWithLabelSpacing : e.listboxOptionsWithoutLabelSpacing])
      }, {
        default: j(() => [
          (y(!0), z(Ve, null, Jt(e.selectData, (f) => (y(), z(Ve, null, [
            f.value !== "" ? (y(), I(c, {
              key: f.id,
              value: f,
              disabled: f.disabled,
              class: g([e.listboxOptionClasses, e.listboxOptionVvClasses])
            }, {
              default: j(() => [
                C("span", {
                  class: g(e.optionIconParentClasses)
                }, [
                  (y(), z("svg", {
                    class: g(["hidden ui-selected:block mr-3", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, ba, 2)),
                  f.disabled ? (y(), z("svg", {
                    key: 0,
                    class: g(["mr-3 opacity-25", e.iconsSizeClasses]),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, pa, 2)) : _("", !0)
                ], 2),
                C("span", {
                  class: g([e.displayClasses, f.disabled ? e.displayDisabledClasses : ""])
                }, Q(f.display), 3)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "class"])) : _("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    _: 3
  }, 8, ["modelValue"]);
}
const gl = /* @__PURE__ */ M(ua, [["render", ha]]), xa = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    return { classes: x(() => {
      var a, l, i, c, u, d;
      let o = [];
      return (a = t == null ? void 0 : t.selects) != null && a.base() && o.push(t.selects.base()), e.size !== "" && ((i = (l = t == null ? void 0 : t.selects) == null ? void 0 : l.sizes) == null ? void 0 : i[e.size]) && o.push(t.selects.sizes[e.size]), (d = (u = (c = t == null ? void 0 : t.selects) == null ? void 0 : c.palettes) == null ? void 0 : u[e.palette]) != null && d[e.color] && o.push(t.selects.palettes[e.palette][e.color]), o.join(" ").trim();
    }), handleSelectChange: (o) => o.target.value };
  }
}), ma = ["value"];
function ya(e, t, s, r, o, a) {
  return y(), z("select", {
    class: g(e.classes),
    value: e.modelValue,
    onChange: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleSelectChange(l)))
  }, [
    E(e.$slots, "default")
  ], 42, ma);
}
const pl = /* @__PURE__ */ M(xa, [["render", ya]]), va = T({
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
    const t = Object.keys($("vv", {})).length > 0 ? $("vv") : n;
    let s = x(() => {
      var l, i, c, u, d, f;
      let a = [];
      return (l = t == null ? void 0 : t.textareas) != null && l.base() && a.push(t.textareas.base()), e.size !== "" && ((c = (i = t == null ? void 0 : t.textareas) == null ? void 0 : i.sizes) == null ? void 0 : c[e.size]) && a.push(t.textareas.sizes[e.size]), (f = (d = (u = t == null ? void 0 : t.textareas) == null ? void 0 : u.palettes) == null ? void 0 : d[e.palette]) != null && f[e.color] && a.push(t.textareas.palettes[e.palette][e.color]), a.join(" ").trim();
    }), r = x(() => {
      var a, l;
      if (e.rowSize !== "" && ((l = (a = t == null ? void 0 : t.textareas) == null ? void 0 : a.rowSizes) == null ? void 0 : l[e.rowSize]))
        return t.textareas.rowSizes[e.rowSize];
    });
    return { classes: s, rows: r, handleTextareaChange: (a) => a.target.value };
  }
}), ka = ["rows", "value"];
function Sa(e, t, s, r, o, a) {
  return y(), z("textarea", {
    class: g(e.classes),
    rows: e.rows,
    value: e.modelValue,
    onInput: t[0] || (t[0] = (l) => e.$emit("update:modelValue", e.handleTextareaChange(l)))
  }, null, 42, ka);
}
const hl = /* @__PURE__ */ M(va, [["render", Sa]]);
export {
  as as AnchorDefault,
  Yt as Anchors,
  ls as BorderDefault,
  ns as ButtonOutline,
  is as ButtonSolid,
  Zt as Buttons,
  us as CheckboxDefault,
  Xt as Checkboxes,
  Kt as ColorModes,
  ds as FillDefault,
  cs as GroundConsole,
  fs as GroundDefault,
  bs as GroundMonochromatic,
  gs as GroundPastel,
  _e as InputDefault,
  Ne as InputUnderlined,
  kt as Inputs,
  ys as ListDefault,
  ps as ListboxButtonDefault,
  hs as ListboxButtonUnderlined,
  xs as ListboxOptionDefault,
  ms as ListboxOptionUnderlined,
  es as Listboxes,
  ts as Lists,
  cl as ObeKnockoutMark,
  vs as RadioDefault,
  ss as Radios,
  rs as Selects,
  Ye as Text,
  ks as TextDefault,
  os as Textareas,
  se as Transitions,
  Wa as ValidAudioSourceTypes,
  Mt as ValidButtonTypes,
  Vr as ValidColorModes,
  qa as ValidCommentStyles,
  Ja as ValidDirections,
  Or as ValidElementTags,
  Ya as ValidFontAwesomeFamilies,
  Za as ValidFontAwesomeSizes,
  Xa as ValidHeadingLevels,
  Ka as ValidImageSourceTypes,
  Rr as ValidInputTypes,
  Br as ValidListTypes,
  el as ValidUrlDecorations,
  tl as ValidVideoSourceTypes,
  fl as VueVentusLogoText,
  bl as VueVentusSpinningMark,
  sl as VvAnchor,
  Wr as VvButton,
  ll as VvCheckbox,
  rl as VvColorModeButton,
  n as VvConfig,
  Rt as VvEl,
  ol as VvFormGroup,
  nl as VvInput,
  ul as VvList,
  dl as VvListItem,
  gl as VvListbox,
  al as VvQuadFormGroup,
  il as VvRadio,
  pl as VvSelect,
  hl as VvTextarea,
  Ca as appColorPairs,
  Va as camelCaseToTitleCase,
  za as decimalsOnly,
  $a as digitsOnly,
  Ta as forceBodyClick,
  Oa as formatBytes,
  La as formatDateMMDDYYYY,
  Fa as formatDateTraditional,
  Pa as formatMediaTime,
  ja as formatNumber,
  X as getRandomInt,
  Pt as hexadecimals,
  Ma as mergeWithVvConfig,
  Ft as monthNames,
  pe as padNumber,
  Ra as randomGroundAndTextColors,
  kr as randomHex,
  Aa as randomHexShort,
  Ba as randomString,
  Ea as slugifyString,
  Da as stringToCamelCase,
  Ia as stringToFilename,
  Ha as timestampToDateTimeAmPm,
  _a as uniqueArray,
  Na as verifyDateMMDDYYYY,
  Ga as verifyEmailString,
  Ua as verifyRunTime,
  Qa as verifyStringLengths,
  Ie as verifyType
};
