var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, inject, computed, openBlock, createElementBlock, normalizeClass, renderSlot, ref, onMounted, resolveComponent, createBlock, withCtx, createCommentVNode, createElementVNode, resolveDynamicComponent } from "vue";
var Text = {
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
    "xs": "text-xs",
    "sm": "text-sm",
    "md": "text-base",
    "lg": "text-lg",
    "xl": "text-xl",
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
  getSizeClasses: function(sizesKey) {
    const key = sizesKey && this.sizes[sizesKey] ? sizesKey : "md";
    return this.sizes[key];
  },
  classes: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.base(),
      this.getSizeClasses(sizes)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
};
var Transitions = {
  durations: {
    "1200": "duration-1200",
    "1150": "duration-1150",
    "1100": "duration-1100",
    "1050": "duration-1050",
    "1000": "duration-1000",
    "950": "duration-950",
    "900": "duration-900",
    "850": "duration-850",
    "800": "duration-800",
    "750": "duration-750",
    "700": "duration-700",
    "650": "duration-650",
    "600": "duration-600",
    "550": "duration-550",
    "500": "duration-500",
    "475": "duration-475",
    "450": "duration-450",
    "425": "duration-425",
    "400": "duration-400",
    "375": "duration-375",
    "350": "duration-350",
    "325": "duration-325",
    "300": "duration-300",
    "275": "duration-275",
    "250": "duration-250",
    "225": "duration-225",
    "200": "duration-200",
    "175": "duration-175",
    "150": "duration-150",
    "125": "duration-125",
    "100": "duration-100",
    "75": "duration-75",
    "50": "duration-50",
    "25": "duration-25"
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
  getDurationClasses: function(durationsKey) {
    var _a, _b, _c;
    const key = durationsKey && ((_a = this.durations) == null ? void 0 : _a[durationsKey]) ? durationsKey : "300";
    const output = ((_b = this.durations) == null ? void 0 : _b[key]) ? (_c = this.durations) == null ? void 0 : _c[key] : "";
    return output;
  },
  getEasingClasses: function(easingsKey) {
    var _a, _b, _c;
    const key = easingsKey && ((_a = this.easings) == null ? void 0 : _a[easingsKey]) ? easingsKey : "inOut";
    const output = ((_b = this.easings) == null ? void 0 : _b[key]) ? (_c = this.easings) == null ? void 0 : _c[key] : "";
    return output;
  },
  getTransitionClasses: function(transitionsKey) {
    var _a, _b, _c;
    const key = transitionsKey && ((_a = this.transitions) == null ? void 0 : _a[transitionsKey]) ? transitionsKey : "default";
    const output = ((_b = this.transitions) == null ? void 0 : _b[key]) ? (_c = this.transitions) == null ? void 0 : _c[key] : "";
    return output;
  },
  custom: function(settings) {
    const obj = {
      transitions: settings && settings.transitions ? settings.transitions : "",
      easings: settings && settings.easings ? settings.easings : "",
      durations: settings && settings.durations ? settings.durations : ""
    };
    return [
      this.getTransitionClasses(obj.transitions),
      this.getEasingClasses(obj.easings),
      this.getDurationClasses(obj.durations)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  classes: function(transitionsKey, easingsKey, durationsKey) {
    const transitions = transitionsKey ? transitionsKey : "";
    const easings = easingsKey ? easingsKey : "";
    const durations = durationsKey ? durationsKey : "";
    return [
      this.getTransitionClasses(transitions),
      this.getEasingClasses(easings),
      this.getDurationClasses(durations)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
};
var Anchors = {
  cursor: "cursor-pointer",
  display: "",
  focus: "",
  text: "underline underline-offset-2",
  transition: Transitions.classes("colors", "inOut", "300"),
  base: function() {
    return [
      this.cursor,
      this.display,
      this.focus,
      this.text,
      this.transition
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  sizes: Text.sizes,
  getSizeClasses: function(sizesKey) {
    const key = sizesKey && this.sizes[sizesKey] ? sizesKey : "md";
    return this.sizes[key];
  },
  classes: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.base(),
      this.getSizeClasses(sizes)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
};
var Buttons = {
  border: "border border-transparent",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  rounding: "",
  shadow: "",
  text: "font-semibold uppercase tracking-widest",
  transition: Transitions.classes("all", "inOut", "300"),
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
    "xs": "px-2.5 py-1.5 text-xs",
    "sm": "px-2.5 py-1.5 text-sm",
    "md": "px-4 py-2 text-sm",
    "lg": "px-4 py-2 text-base",
    "xl": "px-6 py-3 text-base",
    "2xl": "px-7 py-4 text-lg",
    "3xl": "px-8 py-4 text-xl",
    "4xl": "px-8 py-5 text-xl"
  },
  getSizeClasses: function(sizesKey) {
    const key = sizesKey && this.sizes[sizesKey] ? sizesKey : "md";
    return this.sizes[key];
  },
  classes: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.base(),
      this.getSizeClasses(sizes)
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
    "xs": "px-4 py-2 text-sm",
    "sm": "px-4 py-2 text-base",
    "md": "px-6 py-3 text-base",
    "lg": "px-6 py-3 text-lg",
    "xl": "px-7 py-3.5 text-lg",
    "2xl": "px-8 py-5 text-xl",
    "3xl": "px-9 py-5 text-2xl",
    "4xl": "px-10 py-6 text-2xl"
  },
  getBlockSizeClasses: function(sizesKey) {
    const key = sizesKey && this.blockSizes[sizesKey] ? sizesKey : "md";
    return this.blockSizes[key];
  },
  blockClasses: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.blockBase(),
      this.getBlockSizeClasses(sizes)
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
    "xs": "w-9 h-9 text-xs",
    "sm": "w-10 h-10 text-sm",
    "md": "w-11 h-11 text-sm",
    "lg": "w-12 h-12 text-base",
    "xl": "w-14 h-14 text-base",
    "2xl": "w-16 h-16 text-lg",
    "3xl": "w-20 h-20 text-xl",
    "4xl": "w-24 h-24 text-xl"
  },
  getFabSizeClasses: function(sizesKey) {
    const key = sizesKey && this.fabSizes[sizesKey] ? sizesKey : "md";
    return this.fabSizes[key];
  },
  fabClasses: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.fabBase(),
      this.getFabSizeClasses(sizes)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
};
var ColorModes = {
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
};
var Inputs = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: Transitions.classes("colors", "inOut", "300"),
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
    "xs": "px-2 py-1.5 text-sm",
    "sm": "px-3 py-2 text-base",
    "md": "px-3 py-2 text-lg",
    "lg": "px-4 py-3 text-xl",
    "xl": "px-4 py-3 text-2xl",
    "2xl": "px-5 py-4 text-3xl"
  },
  getSizeClasses: function(sizesKey) {
    const key = sizesKey && this.sizes[sizesKey] ? sizesKey : "md";
    return this.sizes[key];
  },
  classes: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.base(),
      this.getSizeClasses(sizes)
    ].join(" ").replace(/\s+/g, " ").trim();
  }
};
var Textareas = {
  border: "border",
  display: "block w-full",
  outline: "",
  placeholder: "placeholder:opacity-50",
  ring: "",
  rounding: "",
  shadow: "",
  text: "",
  transition: Transitions.classes("colors", "inOut", "300"),
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
  sizes: Inputs.sizes,
  getSizeClasses: function(sizesKey) {
    const key = sizesKey && this.sizes[sizesKey] ? sizesKey : "md";
    return this.sizes[key];
  },
  classes: function(sizesKey) {
    const sizes = sizesKey ? sizesKey : "";
    return [
      this.base(),
      this.getSizeClasses(sizes)
    ].join(" ").replace(/\s+/g, " ").trim();
  },
  rowSizes: {
    "xs": 1,
    "sm": 2,
    "md": 3,
    "lg": 4,
    "xl": 6,
    "2xl": 8
  },
  getRowSize: function(sizesKey) {
    const key = sizesKey && this.rowSizes[sizesKey] ? sizesKey : "md";
    return this.rowSizes[key];
  }
};
var AnchorDefault = {
  "default": "text-gray-500 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-200",
  error: "text-rose-500 hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200",
  primary: "text-blue-500 hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-200",
  secondary: "text-teal-500 hover:text-teal-600 dark:text-teal-300 dark:hover:text-teal-200",
  success: "text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-200"
};
var BorderDefault = {
  "": "",
  "default": "border-gray-200 dark:border-gray-600",
  error: "border-rose-600 dark:border-rose-300",
  primary: "border-blue-600 dark:border-blue-300",
  secondary: "border-violet-600 dark:border-violet-300",
  success: "border-green-600 dark:border-green-300"
};
var ButtonOutline = {
  "default": "text-gray-500 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-500 active:bg-gray-600 border-gray-300 hover:border-gray-800 focus:ring-gray-400 focus:border-gray-900",
  error: "text-rose-500 dark:text-rose-300 hover:text-white dark:hover:text-white hover:bg-rose-500 active:bg-rose-600 border-rose-300 hover:border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-blue-500 dark:text-blue-300 hover:text-white dark:hover:text-white hover:bg-blue-500 active:bg-blue-600 border-blue-300 hover:border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-teal-600 dark:text-teal-500 hover:text-white dark:hover:text-white hover:bg-teal-600 active:bg-teal-800 border-teal-600 hover:border-teal-800 focus:ring-teal-500 focus:border-teal-900",
  success: "text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white hover:bg-green-600 active:bg-green-800 border-green-600 hover:border-green-800 focus:ring-green-500 focus:border-green-900"
};
var ButtonSolid = {
  "default": "text-gray-800 hover:text-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300 border-gray-900 focus:border-black focus:ring-gray-400",
  error: "text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700 border-rose-800 focus:ring-rose-400 focus:border-rose-900",
  primary: "text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 border-blue-800 focus:ring-blue-400 focus:border-blue-900",
  secondary: "text-gray-900 hover:text-white bg-teal-500 hover:bg-teal-600 active:text-white active:bg-teal-700 border-teal-800 focus:ring-teal-400 focus:border-teal-900",
  success: "text-gray-900 hover:text-white bg-green-500 hover:bg-green-600 active:text-white active:bg-green-700 border-green-800 focus:ring-green-400 focus:border-green-900"
};
var GroundConsole = {
  "default": "text-gray-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  error: "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  primary: "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  secondary: "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  success: "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
};
var GroundDefault = {
  "default": "",
  error: "text-white bg-rose-500 dark:bg-rose-600",
  primary: "text-white bg-blue-500 dark:bg-blue-600",
  secondary: "text-white bg-violet-500 dark:bg-violet-600",
  success: "text-white bg-green-500 dark:bg-green-600"
};
var GroundMonochromatic = {
  "default": "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  error: "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  primary: "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  secondary: "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  success: "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
};
var GroundPastel = {
  "default": "text-black bg-gray-100 dark:bg-gray-200",
  error: "text-black bg-rose-200 dark:bg-rose-300",
  primary: "text-black bg-blue-200 dark:bg-blue-300",
  secondary: "text-black bg-violet-200 dark:bg-violet-300",
  success: "text-black bg-green-300 dark:bg-green-400"
};
var InputDefault = {
  "default": "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-gray-400 placeholder:dark:text-gray-300 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "text-rose-700 dark:text-rose-200 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-400 dark:focus:border-rose-400 border-rose-300 dark:border-rose-600 bg-rose-100 focus:bg-rose-50 dark:bg-rose-800 dark:focus:bg-rose-700 placeholder:text-rose-400 placeholder:dark:text-rose-300 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "text-green-700 dark:text-green-200 focus:ring-green-500 focus:border-green-500 dark:focus:ring-green-400 dark:focus:border-green-400 border-green-300 dark:border-green-600 bg-green-100 focus:bg-green-50 dark:bg-green-800 dark:focus:bg-green-700 placeholder:text-green-600 placeholder:dark:text-green-400 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
};
var InputUnderlined = {
  "default": "focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-blue-500 focus:border-x-gray-700 dark:focus:border-b-blue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-blue-600 dark:selection:bg-blue-500 selection:text-white",
  error: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-rose-700 dark:text-rose-200 focus:border-b-rose-500 focus:border-x-gray-700 dark:focus:border-b-rose-400 border-b-rose-300 dark:border-b-rose-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-rose-400 placeholder:dark:text-rose-400 selection:bg-rose-600 dark:selection:bg-rose-500 selection:text-white",
  success: "focus:ring-0 border-x-0 border-t-0 border-b-2 text-green-700 dark:text-green-200 focus:border-b-green-500 focus:border-x-gray-700 dark:focus:border-b-green-400 border-b-green-300 dark:border-b-green-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-green-500 placeholder:dark:text-green-500 selection:bg-green-600 dark:selection:bg-green-500 selection:text-white"
};
var TextDefault = {
  "default": "dark:text-gray-100 text-gray-900",
  error: "text-rose-500 dark:text-rose-300",
  primary: "text-blue-500 dark:text-blue-300",
  secondary: "text-violet-500 dark:text-violet-300",
  success: "text-green-600 dark:text-green-300"
};
var VvComponentDefaults = {
  "VvAnchor": {
    button: false,
    buttonBlock: false,
    buttonFab: false,
    buttonSize: "md",
    color: "default",
    external: false,
    href: "#",
    palette: "default"
  },
  "VvButton": {
    block: false,
    color: "primary",
    fab: false,
    palette: "solid",
    size: "md",
    type: "button"
  },
  "VvColorModeButton": {
    color: "default",
    mode: "light",
    palette: "outline",
    size: "xs",
    type: "button"
  },
  "VvEl": {
    borderPalette: "default",
    borderColor: "",
    groundPalette: "default",
    groundColor: "default",
    tag: "div",
    textPalette: "default",
    textColor: "default"
  },
  "VvInput": {
    color: "default",
    palette: "default",
    size: "md",
    type: "text"
  },
  "VvListItem": {
    color: "default",
    enableColoredSymbols: true,
    palette: "default",
    symbolColor: "primary",
    symbolPalette: "default"
  },
  "VvTextarea": {
    color: "default",
    palette: "default",
    size: "md",
    rowSize: "md"
  }
};
var VvConfig = {
  anchors: __spreadProps(__spreadValues({}, Anchors), {
    palettes: {
      default: AnchorDefault
    }
  }),
  borders: {
    palettes: {
      default: BorderDefault
    }
  },
  buttons: __spreadProps(__spreadValues({}, Buttons), {
    palettes: {
      outline: ButtonOutline,
      solid: ButtonSolid
    }
  }),
  inputs: __spreadProps(__spreadValues({}, Inputs), {
    palettes: {
      default: InputDefault,
      underlined: InputUnderlined
    }
  }),
  colorMode: __spreadValues({}, ColorModes),
  grounds: {
    palettes: {
      console: GroundConsole,
      default: GroundDefault,
      monochromatic: GroundMonochromatic,
      pastel: GroundPastel
    }
  },
  text: __spreadProps(__spreadValues({}, Text), {
    palettes: {
      default: TextDefault
    }
  }),
  textareas: __spreadProps(__spreadValues({}, Textareas), {
    palettes: {
      default: InputDefault,
      underlined: InputUnderlined
    }
  }),
  transitions: __spreadValues({}, Transitions),
  defaults: VvComponentDefaults
};
function camelCaseToTitleCase(string) {
  let temp = string.replace(/([A-Z])/g, " $1").replace(/\s+/g, " ");
  let tempArray = temp.split(" ");
  let casedArray = tempArray.map((str) => {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  });
  return casedArray.join(" ").trim();
}
function digitsOnly(value, originalNumber) {
  const val = String(value).trim();
  if (/^[1-9]\d*$/.test(val)) {
    return Number(val);
  } else {
    return originalNumber;
  }
}
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0)
    return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
function formatMediaTime(currentTime) {
  let sec_num = parseInt(currentTime, 10);
  let days = Math.floor(parseInt(String(Number(sec_num) / (24 * 3600))));
  sec_num = sec_num % (24 * 3600);
  let hours = Math.floor(parseInt(String(Number(sec_num) / 3600)));
  sec_num %= 3600;
  let minutes = Math.floor(sec_num / 60);
  sec_num %= 60;
  let seconds = Math.floor(sec_num);
  let sDays = days < 10 ? "0" + days : days;
  let sHrs = hours < 10 ? "0" + hours : hours;
  let sMins = minutes < 10 ? "0" + minutes : minutes;
  let sSecs = seconds < 10 ? "0" + seconds : seconds;
  let output = sDays === "00" ? "" : sDays + ":";
  output += sHrs === "00" ? "" : sHrs + ":";
  output += sMins + ":" + sSecs;
  return output;
}
function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}
var isMergeableObject = function isMergeableObject2(value) {
  return isNonNullObject(value) && !isSpecial(value);
};
function isNonNullObject(value) {
  return !!value && typeof value === "object";
}
function isSpecial(value) {
  var stringValue = Object.prototype.toString.call(value);
  return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
}
var canUseSymbol = typeof Symbol === "function" && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
function isReactElement(value) {
  return value.$$typeof === REACT_ELEMENT_TYPE;
}
function emptyTarget(val) {
  return Array.isArray(val) ? [] : {};
}
function cloneUnlessOtherwiseSpecified(value, options) {
  return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
}
function defaultArrayMerge(target, source, options) {
  return target.concat(source).map(function(element) {
    return cloneUnlessOtherwiseSpecified(element, options);
  });
}
function getMergeFunction(key, options) {
  if (!options.customMerge) {
    return deepmerge;
  }
  var customMerge = options.customMerge(key);
  return typeof customMerge === "function" ? customMerge : deepmerge;
}
function getEnumerableOwnPropertySymbols(target) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
    return target.propertyIsEnumerable(symbol);
  }) : [];
}
function getKeys(target) {
  return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
}
function propertyIsOnObject(object, property) {
  try {
    return property in object;
  } catch (_) {
    return false;
  }
}
function propertyIsUnsafe(target, key) {
  return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
}
function mergeObject(target, source, options) {
  var destination = {};
  if (options.isMergeableObject(target)) {
    getKeys(target).forEach(function(key) {
      destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
    });
  }
  getKeys(source).forEach(function(key) {
    if (propertyIsUnsafe(target, key)) {
      return;
    }
    if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
      destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
    } else {
      destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
    }
  });
  return destination;
}
function deepmerge(target, source, options) {
  options = options || {};
  options.arrayMerge = options.arrayMerge || defaultArrayMerge;
  options.isMergeableObject = options.isMergeableObject || isMergeableObject;
  options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
  var sourceIsArray = Array.isArray(source);
  var targetIsArray = Array.isArray(target);
  var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
  if (!sourceAndTargetTypesMatch) {
    return cloneUnlessOtherwiseSpecified(source, options);
  } else if (sourceIsArray) {
    return options.arrayMerge(target, source, options);
  } else {
    return mergeObject(target, source, options);
  }
}
deepmerge.all = function deepmergeAll(array, options) {
  if (!Array.isArray(array)) {
    throw new Error("first argument should be an array");
  }
  return array.reduce(function(prev, next) {
    return deepmerge(prev, next, options);
  }, {});
};
var deepmerge_1 = deepmerge;
var cjs = deepmerge_1;
function mergeWithVvConfig(appTwConfig) {
  return Object.keys(appTwConfig).length > 0 ? cjs(VvConfig, appTwConfig) : VvConfig;
}
function randomString(length = 10) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < Number(length); i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function slugifyString(text, separator) {
  let txt = text ? text : "";
  let sep = separator ? separator : "-";
  return txt.toString().toLowerCase().normalize("NFD").trim().replace(/\s+/g, sep).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, sep);
}
function stringToCamelCase(str) {
  return str.replace(/[^\w\s\']|_/g, " ").replace(/\s+/g, " ").replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}
function stringToFilename(str) {
  return str.replace(/[^A-z0-9._-]/gi, "");
}
function uniqueArray(array) {
  return array.filter((value, index, self) => self.indexOf(value) === index);
}
const ValidAudioSourceTypes = [
  "audio/flac",
  "audio/mp4",
  "audio/mpeg",
  "audio/ogg",
  "audio/x-flac",
  "audio/webm"
];
const ValidButtonTypes = [
  "button",
  "submit",
  "reset"
];
const ValidColorModes = [
  "light",
  "dark"
];
const ValidDirections = [
  "up",
  "down",
  "left",
  "right",
  ""
];
const ValidElementTags = [
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
];
const ValidFontAwesomeFamilies = [
  "fab",
  "fad",
  "fal",
  "far",
  "fas",
  "fat"
];
const ValidFontAwesomeSizes = [
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
];
const ValidHeadingLevels = [1, 2, 3, 4, 5, 6];
const ValidImageSourceTypes = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp"
];
const ValidInputTypes = [
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
];
const ValidVideoSourceTypes = [
  "video/mp4",
  "video/ogg",
  "video/webm"
];
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = defineComponent({
  name: "VvAnchor",
  props: {
    button: {
      type: Boolean,
      default: VvConfig.defaults.VvAnchor.button
    },
    buttonBlock: {
      type: Boolean,
      default: VvConfig.defaults.VvAnchor.buttonBlock
    },
    buttonFab: {
      type: Boolean,
      default: VvConfig.defaults.VvAnchor.buttonFab
    },
    buttonSize: {
      type: String,
      default: VvConfig.defaults.VvAnchor.buttonSize
    },
    color: {
      type: String,
      default: VvConfig.defaults.VvAnchor.color
    },
    external: {
      type: Boolean,
      default: VvConfig.defaults.VvAnchor.external
    },
    href: {
      type: String,
      default: VvConfig.defaults.VvAnchor.href
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvAnchor.palette
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      let output = [];
      if (props.button === true) {
        if (props.buttonBlock === true && props.buttonFab === false) {
          if ((_a = vv == null ? void 0 : vv.buttons) == null ? void 0 : _a.blockBase()) {
            output.push(vv.buttons.blockBase());
          }
          if (props.buttonSize !== "" && ((_c = (_b = vv == null ? void 0 : vv.buttons) == null ? void 0 : _b.blockSizes) == null ? void 0 : _c[props.buttonSize])) {
            output.push(vv.buttons.blockSizes[props.buttonSize]);
          }
        } else if (props.buttonBlock === false && props.buttonFab === true) {
          if ((_d = vv == null ? void 0 : vv.buttons) == null ? void 0 : _d.fabBase()) {
            output.push(vv.buttons.fabBase());
          }
          if (props.buttonSize !== "" && ((_f = (_e = vv == null ? void 0 : vv.buttons) == null ? void 0 : _e.fabSizes) == null ? void 0 : _f[props.buttonSize])) {
            output.push(vv.buttons.fabSizes[props.buttonSize]);
          }
        } else {
          if ((_g = vv == null ? void 0 : vv.buttons) == null ? void 0 : _g.base()) {
            output.push(vv.buttons.base());
          }
          if (props.buttonSize !== "" && ((_i = (_h = vv == null ? void 0 : vv.buttons) == null ? void 0 : _h.sizes) == null ? void 0 : _i[props.buttonSize])) {
            output.push(vv.buttons.sizes[props.buttonSize]);
          }
        }
        if ((_l = (_k = (_j = vv == null ? void 0 : vv.buttons) == null ? void 0 : _j.palettes) == null ? void 0 : _k[props.palette]) == null ? void 0 : _l[props.color]) {
          output.push(vv.buttons.palettes[props.palette][props.color]);
        }
      } else {
        if ((_m = vv == null ? void 0 : vv.anchors) == null ? void 0 : _m.base()) {
          output.push(vv.anchors.base());
        }
        if ((_p = (_o = (_n = vv == null ? void 0 : vv.anchors) == null ? void 0 : _n.palettes) == null ? void 0 : _o[props.palette]) == null ? void 0 : _p[props.color]) {
          output.push(vv.anchors.palettes[props.palette][props.color]);
        }
      }
      return output.join(" ").trim();
    });
    return { classes };
  }
});
const _hoisted_1$6 = ["href"];
const _hoisted_2$3 = ["href"];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.external ? (openBlock(), createElementBlock("a", {
    key: 0,
    href: _ctx.href,
    class: normalizeClass(_ctx.classes),
    target: "_blank",
    rel: "noopener noreferrer"
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$6)) : (openBlock(), createElementBlock("a", {
    key: 1,
    href: _ctx.href,
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_2$3));
}
var VvAnchor = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = defineComponent({
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: VvConfig.defaults.VvButton.block
    },
    color: {
      type: String,
      default: VvConfig.defaults.VvButton.color
    },
    fab: {
      type: Boolean,
      default: VvConfig.defaults.VvButton.fab
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvButton.palette
    },
    size: {
      type: String,
      default: VvConfig.defaults.VvButton.size
    },
    type: {
      type: String,
      default: VvConfig.defaults.VvButton.type,
      validator: (prop) => ValidButtonTypes.includes(prop)
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    const btnType = props.type;
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      let output = [];
      if (props.block === true && props.fab === false) {
        if ((_a = vv == null ? void 0 : vv.buttons) == null ? void 0 : _a.blockBase()) {
          output.push(vv.buttons.blockBase());
        }
        if (props.size !== "" && ((_c = (_b = vv == null ? void 0 : vv.buttons) == null ? void 0 : _b.blockSizes) == null ? void 0 : _c[props.size])) {
          output.push(vv.buttons.blockSizes[props.size]);
        }
      } else if (props.fab === true && props.block === false) {
        if ((_d = vv == null ? void 0 : vv.buttons) == null ? void 0 : _d.fabBase()) {
          output.push(vv.buttons.fabBase());
        }
        if (props.size !== "" && ((_f = (_e = vv == null ? void 0 : vv.buttons) == null ? void 0 : _e.fabSizes) == null ? void 0 : _f[props.size])) {
          output.push(vv.buttons.fabSizes[props.size]);
        }
      } else {
        if ((_g = vv == null ? void 0 : vv.buttons) == null ? void 0 : _g.base()) {
          output.push(vv.buttons.base());
        }
        if (props.size !== "" && ((_i = (_h = vv == null ? void 0 : vv.buttons) == null ? void 0 : _h.sizes) == null ? void 0 : _i[props.size])) {
          output.push(vv.buttons.sizes[props.size]);
        }
      }
      if ((_l = (_k = (_j = vv == null ? void 0 : vv.buttons) == null ? void 0 : _j.palettes) == null ? void 0 : _k[props.palette]) == null ? void 0 : _l[props.color]) {
        output.push(vv.buttons.palettes[props.palette][props.color]);
      }
      return output.join(" ").trim();
    });
    return { btnType, classes };
  }
});
const _hoisted_1$5 = ["type"];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: _ctx.btnType,
    class: normalizeClass(_ctx.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1$5);
}
var VvButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = defineComponent({
  name: "VvColorModeButton",
  components: {
    VvButton
  },
  props: {
    mode: {
      type: String,
      default: VvConfig.defaults.VvColorModeButton.mode,
      validator: (prop) => ValidColorModes.includes(prop)
    },
    color: {
      type: String,
      default: VvConfig.defaults.VvColorModeButton.color
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvColorModeButton.palette
    },
    size: {
      type: String,
      default: VvConfig.defaults.VvColorModeButton.size
    },
    groundDark: {
      type: String,
      default: VvConfig.colorMode.dark.ground
    },
    groundDarkHex: {
      type: String,
      default: VvConfig.colorMode.dark.hex
    },
    groundLight: {
      type: String,
      default: VvConfig.colorMode.light.ground
    },
    groundLightHex: {
      type: String,
      default: VvConfig.colorMode.light.hex
    },
    textDark: {
      type: String,
      default: VvConfig.colorMode.dark.text
    },
    textLight: {
      type: String,
      default: VvConfig.colorMode.light.text
    },
    titleDark: {
      type: String,
      default: VvConfig.colorMode.dark.title
    },
    titleLight: {
      type: String,
      default: VvConfig.colorMode.light.title
    },
    type: {
      type: String,
      default: VvConfig.defaults.VvColorModeButton.type,
      validator: (prop) => ValidButtonTypes.includes(prop)
    }
  },
  setup(props) {
    const mode = ref(props.mode);
    const icon = computed(() => mode.value === "dark" ? "sun" : "moon");
    const title = computed(() => mode.value === "dark" ? props.titleLight : props.titleDark);
    onMounted(() => {
      if (document && mode.value === "light") {
        document.documentElement.classList.remove("dark", props.groundDark, props.textDark);
        document.documentElement.classList.add(props.groundLight, props.textLight);
        document.documentElement.style.backgroundColor = props.groundLightHex;
      }
      if (document && mode.value === "dark") {
        document.documentElement.classList.remove(props.groundLight, props.textLight);
        document.documentElement.classList.add("dark", props.groundDark, props.textDark);
        document.documentElement.style.backgroundColor = props.groundDarkHex;
      }
    });
    return { mode, icon, title };
  },
  methods: {
    toggleColorMode(event) {
      if (document && this.mode === "light") {
        this.mode = "dark";
        localStorage.setItem("colorMode", "dark");
        document.documentElement.classList.remove(this.groundLight, this.textLight);
        document.documentElement.classList.add("dark", this.groundDark, this.textDark);
        document.documentElement.style.backgroundColor = this.groundDarkHex;
      } else if (document && this.mode === "dark") {
        this.mode = "light";
        localStorage.setItem("colorMode", "light");
        document.documentElement.classList.remove("dark", this.groundDark, this.textDark);
        document.documentElement.classList.add(this.groundLight, this.textLight);
        document.documentElement.style.backgroundColor = this.groundLightHex;
      }
    }
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$2
];
const _hoisted_4 = {
  key: 1,
  class: "h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};
const _hoisted_5 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
}, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VvButton = resolveComponent("VvButton");
  return openBlock(), createBlock(_component_VvButton, {
    title: _ctx.title,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggleColorMode($event)),
    class: "rounded-full",
    color: _ctx.color,
    fab: true,
    palette: _ctx.palette,
    type: "button",
    size: _ctx.size
  }, {
    default: withCtx(() => [
      _ctx.icon === "moon" ? (openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_3)) : createCommentVNode("", true),
      _ctx.icon === "sun" ? (openBlock(), createElementBlock("svg", _hoisted_4, _hoisted_6)) : createCommentVNode("", true)
    ]),
    _: 1
  }, 8, ["title", "color", "palette", "size"]);
}
var VvColorModeButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = defineComponent({
  name: "VvEl",
  props: {
    borderPalette: {
      type: String,
      default: VvConfig.defaults.VvEl.borderPalette
    },
    borderColor: {
      type: String,
      default: VvConfig.defaults.VvEl.borderColor
    },
    groundPalette: {
      type: String,
      default: VvConfig.defaults.VvEl.groundPalette
    },
    groundColor: {
      type: String,
      default: VvConfig.defaults.VvEl.groundColor
    },
    tag: {
      type: String,
      default: VvConfig.defaults.VvEl.tag
    },
    textPalette: {
      type: String,
      default: VvConfig.defaults.VvEl.textPalette
    },
    textColor: {
      type: String,
      default: VvConfig.defaults.VvEl.textColor
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      let output = [];
      if ((_c = (_b = (_a = vv == null ? void 0 : vv.borders) == null ? void 0 : _a.palettes) == null ? void 0 : _b[props.borderPalette]) == null ? void 0 : _c[props.borderColor]) {
        output.push(vv.borders.palettes[props.borderPalette][props.borderColor]);
      }
      if ((_f = (_e = (_d = vv == null ? void 0 : vv.grounds) == null ? void 0 : _d.palettes) == null ? void 0 : _e[props.groundPalette]) == null ? void 0 : _f[props.groundColor]) {
        output.push(vv.grounds.palettes[props.groundPalette][props.groundColor]);
      }
      if ((_i = (_h = (_g = vv == null ? void 0 : vv.text) == null ? void 0 : _g.palettes) == null ? void 0 : _h[props.textPalette]) == null ? void 0 : _i[props.textColor]) {
        output.push(vv.text.palettes[props.textPalette][props.textColor]);
      }
      return output.join(" ").trim();
    });
    return { classes };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: normalizeClass(_ctx.classes)
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class"]);
}
var VvEl = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = defineComponent({
  name: "VvInput",
  props: {
    color: {
      type: String,
      default: VvConfig.defaults.VvInput.color
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvInput.palette
    },
    size: {
      type: String,
      default: VvConfig.defaults.VvInput.size
    },
    type: {
      type: String,
      default: VvConfig.defaults.VvInput.type,
      validator: (prop) => ValidInputTypes.includes(prop)
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      let output = [];
      if ((_a = vv == null ? void 0 : vv.inputs) == null ? void 0 : _a.base()) {
        output.push(vv.inputs.base());
      }
      if (props.size !== "" && ((_c = (_b = vv == null ? void 0 : vv.inputs) == null ? void 0 : _b.sizes) == null ? void 0 : _c[props.size])) {
        output.push(vv.inputs.sizes[props.size]);
      }
      if ((_f = (_e = (_d = vv == null ? void 0 : vv.inputs) == null ? void 0 : _d.palettes) == null ? void 0 : _e[props.palette]) == null ? void 0 : _f[props.color]) {
        output.push(vv.inputs.palettes[props.palette][props.color]);
      }
      return output.join(" ").trim();
    });
    return { classes };
  }
});
const _hoisted_1$3 = ["type"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    type: _ctx.type,
    class: normalizeClass(_ctx.classes)
  }, null, 10, _hoisted_1$3);
}
var VvInput = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  name: "VvListItem",
  props: {
    color: {
      type: String,
      default: VvConfig.defaults.VvListItem.color
    },
    enableColoredSymbols: {
      type: Boolean,
      default: VvConfig.defaults.VvListItem.enableColoredSymbols
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvListItem.palette
    },
    symbolColor: {
      type: String,
      default: VvConfig.defaults.VvListItem.symbolColor
    },
    symbolPalette: {
      type: String,
      default: VvConfig.defaults.VvListItem.symbolPalette
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    let baseClasses = vv == null ? void 0 : vv.text.base();
    let classes = computed(() => {
      var _a, _b, _c;
      let output = [baseClasses];
      if ((_c = (_b = (_a = vv == null ? void 0 : vv.text) == null ? void 0 : _a.palettes) == null ? void 0 : _b[props.palette]) == null ? void 0 : _c[props.color]) {
        output.push(vv.text.palettes[props.palette][props.color]);
      }
      return output.join(" ").trim();
    });
    let symbolClasses = computed(() => {
      var _a, _b, _c;
      let output = [];
      if ((_c = (_b = (_a = vv == null ? void 0 : vv.text) == null ? void 0 : _a.palettes) == null ? void 0 : _b[props.symbolPalette]) == null ? void 0 : _c[props.symbolColor]) {
        output.push(vv.text.palettes[props.symbolPalette][props.symbolColor]);
      }
      return output.join(" ").trim();
    });
    return { classes, symbolClasses };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.enableColoredSymbols === true ? _ctx.symbolClasses : _ctx.classes)
  }, [
    _ctx.enableColoredSymbols === true ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([_ctx.classes])
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : renderSlot(_ctx.$slots, "default", { key: 1 })
  ], 2);
}
var VvListItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  name: "VueVentusLogoText",
  props: {
    colorClasses: {
      type: String,
      default: "w-full fill-gray-900 dark:fill-gray-100"
    }
  }
});
const _hoisted_1$2 = /* @__PURE__ */ createElementVNode("path", { d: "m6.5 0 51.9 121.1L110.3 0h6.7L61.6 129h-6.2L0 0h6.5zM181.2 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM333.6 123.8v5.2h-75.8V14.2h74.3v5.2h-68.7v48.3h60.1v5.2h-60.1v50.9h70.2zM351.3 0l51.9 121.1L455 0h6.7l-55.4 129h-6.2L344.7 0h6.6zM556.1 123.8v5.2h-75.8V14.2h74.3v5.2H486v48.3h60.1v5.2H486v50.9h70.1zM585.4 24.9V129h-5.7V14.2h4.2l84.4 105.9V14.2h5.7V129h-5.5L585.4 24.9zM784 19.4h-43V129h-5.7V19.4h-43v-5.2H784v5.2zM848 124.4c8.2 0 15-1.5 20.4-4.6 5.4-3.1 9.7-7.1 12.8-12 3.1-5 5.3-10.6 6.6-16.9 1.3-6.3 1.9-12.7 1.9-19.2V14.2h5.5v57.5c0 7.7-.8 15-2.4 22-1.6 7-4.3 13.2-8 18.5-3.7 5.3-8.6 9.6-14.5 12.8-6 3.2-13.4 4.8-22.2 4.8-9.1 0-16.6-1.7-22.7-5-6.1-3.3-11-7.7-14.6-13.2-3.7-5.4-6.3-11.6-7.8-18.6-1.6-6.9-2.3-14-2.3-21.3V14.2h5.7v57.5c0 6.7.6 13.2 1.9 19.5 1.3 6.3 3.6 11.9 6.8 16.8 3.2 4.9 7.5 8.9 12.8 11.9 5.3 3 12 4.5 20.1 4.5zM991.2 31.2c-4.2-4.6-8.8-7.9-13.9-9.8-5.1-1.9-11-2.8-17.8-2.8-12.2 0-21 2.3-26.5 6.9-5.5 4.6-8.2 10.8-8.2 18.6 0 3.9.7 7.1 2 9.8 1.3 2.6 3.4 4.9 6.2 6.7 2.8 1.8 6.4 3.4 10.8 4.6 4.4 1.2 9.7 2.5 15.8 3.8 6.2 1.3 11.9 2.7 17 4.2s9.4 3.4 12.9 5.7c3.6 2.3 6.3 5.2 8.2 8.6 1.9 3.4 2.9 7.7 2.9 12.8 0 4.8-.9 9.1-2.8 12.8-1.9 3.7-4.6 6.7-8.2 9.2-3.6 2.5-7.8 4.3-12.8 5.6-5 1.2-10.6 1.9-16.7 1.9-9.2 0-17.4-1.4-24.7-4.3-7.3-2.9-14.1-7.2-20.4-13.2l3.4-4c5.4 5.5 11.5 9.6 18.4 12.4 6.9 2.8 14.7 4.2 23.4 4.2 10.8 0 19.3-2 25.5-5.9 6.2-3.9 9.3-9.9 9.3-18 0-4.1-.8-7.6-2.3-10.4-1.5-2.9-3.8-5.3-6.9-7.3-3.1-2-7-3.7-11.6-5.2S964 75.3 957.6 74c-6.3-1.3-11.8-2.6-16.6-4-4.8-1.4-8.8-3.2-12.1-5.3-3.3-2.2-5.8-4.8-7.4-7.9-1.7-3.1-2.5-7.1-2.5-11.8 0-5.1 1-9.6 2.9-13.5 1.9-3.9 4.7-7.2 8.2-9.9 3.5-2.6 7.7-4.7 12.7-6.1 5-1.4 10.4-2.1 16.5-2.1 7.4 0 14 1.1 19.6 3.2 5.6 2.2 10.7 5.6 15.4 10.3l-3.1 4.3z" }, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(_ctx.colorClasses),
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1000 129",
    "xml:space": "preserve"
  }, _hoisted_2$1, 2);
}
var VueVentusLogoText = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = defineComponent({
  name: "VueVentusSpinningMark",
  props: {
    animationClass: {
      type: String,
      default: "animate-spin-reverse-4s"
    },
    enableAnimation: {
      type: Boolean,
      default: true
    },
    enableClassFills: {
      type: Boolean,
      default: false
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
  setup(props) {
    const classes = computed(() => props.enableAnimation ? props.animationClass : "");
    return { classes };
  }
});
const _hoisted_1$1 = ["fill"];
const _hoisted_2 = ["fill"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    class: normalizeClass(_ctx.classes),
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    viewBox: "0 0 1000 1000",
    "xml:space": "preserve"
  }, [
    createElementVNode("path", {
      fill: _ctx.enableClassFills ? "" : _ctx.fillOne,
      class: normalizeClass(_ctx.enableClassFills ? _ctx.fillOneClasses : ""),
      d: "M210.3 237.6c0-61.4 19.2-118.5 51.8-165.4C88.8 152.1-84.2 466.7 81 657c134.5 134.8 363 48.8 386.2-131.2-66.9-7.6-126.8-37.9-172-83.1-52.4-52.4-84.9-125-84.9-205.1zM919.7 336c-134.5-134.8-363-48.8-386.2 131.2 66.9 7.6 126.8 37.9 172 83.1 52.5 52.5 85 125 85 205.1 0 61.4-19.2 118.5-51.8 165.4 173.2-79.9 346.3-394.6 181-584.8z"
    }, null, 10, _hoisted_1$1),
    createElementVNode("g", null, [
      createElementVNode("path", {
        fill: _ctx.enableClassFills ? "" : _ctx.fillTwo,
        class: normalizeClass(_ctx.enableClassFills ? _ctx.fillTwoClasses : ""),
        d: "M529.7 529.6C505.2 745.2 253.8 858.5 76.1 734.7c38.9 115.6 205.6 246 371.4 255.6 161.6 9.4 309.9-110.9 268.4-282.5-21.1-87.5-88.6-165.6-186.2-178.2zM339.8 77.1C205 211.6 291 440.2 471 463.4c7.6-66.9 37.9-126.8 83.1-172 52.5-52.5 125-85 205.1-85 61.4 0 118.5 19.2 165.4 51.8C844.8 84.9 530.1-88.1 339.8 77.1z"
      }, null, 10, _hoisted_2)
    ])
  ], 2);
}
var VueVentusSpinningMark = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = defineComponent({
  name: "VvTextarea",
  props: {
    color: {
      type: String,
      default: VvConfig.defaults.VvTextarea.color
    },
    palette: {
      type: String,
      default: VvConfig.defaults.VvTextarea.palette
    },
    size: {
      type: String,
      default: VvConfig.defaults.VvTextarea.size
    },
    rowSize: {
      type: String,
      default: VvConfig.defaults.VvTextarea.rowSize
    }
  },
  setup(props) {
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : VvConfig;
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f;
      let output = [];
      if ((_a = vv == null ? void 0 : vv.textareas) == null ? void 0 : _a.base()) {
        output.push(vv.textareas.base());
      }
      if (props.size !== "" && ((_c = (_b = vv == null ? void 0 : vv.textareas) == null ? void 0 : _b.sizes) == null ? void 0 : _c[props.size])) {
        output.push(vv.textareas.sizes[props.size]);
      }
      if ((_f = (_e = (_d = vv == null ? void 0 : vv.textareas) == null ? void 0 : _d.palettes) == null ? void 0 : _e[props.palette]) == null ? void 0 : _f[props.color]) {
        output.push(vv.textareas.palettes[props.palette][props.color]);
      }
      return output.join(" ").trim();
    });
    let rows = computed(() => {
      var _a, _b;
      if (props.rowSize !== "" && ((_b = (_a = vv == null ? void 0 : vv.textareas) == null ? void 0 : _a.rowSizes) == null ? void 0 : _b[props.rowSize])) {
        return vv.textareas.rowSizes[props.rowSize];
      }
    });
    return { classes, rows };
  }
});
const _hoisted_1 = ["rows"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", {
    class: normalizeClass(_ctx.classes),
    rows: _ctx.rows
  }, null, 10, _hoisted_1);
}
var VvTextarea = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { AnchorDefault, Anchors, BorderDefault, ButtonOutline, ButtonSolid, Buttons, ColorModes, GroundConsole, GroundDefault, GroundMonochromatic, GroundPastel, InputDefault, InputUnderlined, Inputs, Text, TextDefault, Textareas, Transitions, ValidAudioSourceTypes, ValidButtonTypes, ValidColorModes, ValidDirections, ValidElementTags, ValidFontAwesomeFamilies, ValidFontAwesomeSizes, ValidHeadingLevels, ValidImageSourceTypes, ValidInputTypes, ValidVideoSourceTypes, VueVentusLogoText, VueVentusSpinningMark, VvAnchor, VvButton, VvColorModeButton, VvConfig, VvEl, VvInput, VvListItem, VvTextarea, camelCaseToTitleCase, digitsOnly, formatBytes, formatMediaTime, formatNumber, mergeWithVvConfig, randomString, slugifyString, stringToCamelCase, stringToFilename, uniqueArray };
