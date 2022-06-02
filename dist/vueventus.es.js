import { inject, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot, ref, createBlock, withCtx, createCommentVNode, createElementVNode } from "vue";
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
  "error": "border-rose-600 dark:border-rose-300",
  "primary": "border-blue-600 dark:border-blue-300",
  "secondary": "border-violet-600 dark:border-violet-300",
  "success": "border-green-600 dark:border-green-300"
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
  "error": "text-rose-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  "primary": "text-blue-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  "secondary": "text-violet-200 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80",
  "success": "text-green-300 bg-gray-800 bg-opacity-100 dark:bg-black dark:bg-opacity-80"
};
var GroundDefault = {
  "default": "",
  "error": "text-white bg-rose-500 dark:bg-rose-600",
  "primary": "text-white bg-blue-500 dark:bg-blue-600",
  "secondary": "text-white bg-violet-500 dark:bg-violet-600",
  "success": "text-white bg-green-500 dark:bg-green-600"
};
var GroundMonochromatic = {
  "default": "text-gray-800 bg-gray-200 dark:bg-gray-800 dark:text-gray-200",
  "error": "text-rose-800 bg-rose-200 dark:bg-rose-800 dark:text-rose-200",
  "primary": "text-blue-800 bg-blue-200 dark:bg-blue-800 dark:text-blue-200",
  "secondary": "text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200",
  "success": "text-green-800 bg-green-300 dark:bg-green-800 dark:text-green-300"
};
var GroundPastel = {
  "default": "text-black bg-gray-100 dark:bg-gray-200",
  "error": "text-black bg-rose-200 dark:bg-rose-300",
  "primary": "text-black bg-blue-200 dark:bg-blue-300",
  "secondary": "text-black bg-violet-200 dark:bg-violet-300",
  "success": "text-black bg-green-300 dark:bg-green-400"
};
var TextDefault = {
  "default": "",
  "error": "text-rose-500 dark:text-rose-300",
  "primary": "text-blue-500 dark:text-blue-300",
  "secondary": "text-violet-500 dark:text-violet-300",
  "success": "text-green-600 dark:text-green-300"
};
var Transitions = {
  durations: {
    "1000": "duration-1000",
    "700": "duration-700",
    "500": "duration-500",
    "300": "duration-300",
    "200": "duration-200",
    "150": "duration-150",
    "100": "duration-100",
    "75": "duration-75"
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
    opacity: "transition-opacity",
    shadow: "transition-shadow",
    transform: "transition-transform"
  },
  getDurationClasses: function(durationsKey) {
    const key = durationsKey && this.durations[durationsKey] ? durationsKey : "300";
    return this.durations[key];
  },
  getEasingClasses: function(easingsKey) {
    const key = easingsKey && this.easings[easingsKey] ? easingsKey : "inOut";
    return this.easings[key];
  },
  getTransitionClasses: function(transitionsKey) {
    const key = transitionsKey && this.transitions[transitionsKey] ? transitionsKey : "default";
    return this.transitions[key];
  },
  custom: function(settingsObj) {
    const settings = {
      transitions: settingsObj && settingsObj.transitions ? settingsObj.transitions : "",
      easings: settingsObj && settingsObj.easings ? settingsObj.easings : "",
      durations: settingsObj && settingsObj.durations ? settingsObj.durations : ""
    };
    return [
      this.getTransitionClasses(settings.transitions),
      this.getEasingClasses(settings.easings),
      this.getDurationClasses(settings.durations)
    ].join(" ");
  },
  classes: function(transitionsKey, easingsKey, durationsKey) {
    const transitions = transitionsKey ? transitionsKey : "";
    const easings = easingsKey ? easingsKey : "";
    const durations = durationsKey ? durationsKey : "";
    return [
      this.getTransitionClasses(transitions),
      this.getEasingClasses(easings),
      this.getDurationClasses(durations)
    ].join(" ");
  }
};
var Buttons = {
  border: "border border-transparent",
  cursor: "cursor-pointer",
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  text: "font-semibold uppercase tracking-widest",
  base: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.display,
      this.focus,
      this.text
    ].join(" ");
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
    ].join(" ");
  },
  blockDisplay: "block w-full flex flex-col items-center justify-center",
  blockBase: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.blockDisplay,
      this.focus,
      this.text
    ].join(" ");
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
    ].join(" ");
  },
  fabDisplay: "inline-flex items-center items-center justify-center",
  fabBase: function() {
    return [
      this.border,
      this.cursor,
      this.disabled,
      this.fabDisplay,
      this.focus,
      this.text
    ].join(" ");
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
    ].join(" ");
  }
};
const _hoisted_1$1 = ["type"];
const _sfc_main$1 = {
  name: "VvButton",
  props: {
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: "default"
    },
    fab: {
      type: Boolean,
      default: false
    },
    palette: {
      type: String,
      default: "solid"
    },
    size: {
      type: String,
      default: "md"
    },
    transitionClasses: {
      type: String,
      default: Transitions.classes()
    },
    type: {
      type: String,
      default: "button",
      validator: (prop) => ["button", "submit", "reset"].includes(prop)
    }
  },
  setup(__props) {
    const props = __props;
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : {
      buttons: {
        base: Buttons.base(),
        palettes: {
          outline: ButtonOutline,
          solid: ButtonSolid
        },
        sizes: Buttons.sizes,
        blockBase: Buttons.blockBase(),
        blockSizes: Buttons.blockSizes,
        fabBase: Buttons.fabBase(),
        fabSizes: Buttons.fabSizes
      }
    };
    let classes = computed(() => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      let output = [];
      if (props.block === true && props.fab === false) {
        if ((_a = vv == null ? void 0 : vv.buttons) == null ? void 0 : _a.blockBase) {
          output.push(vv.buttons.blockBase);
        }
        if (props.size !== "" && ((_c = (_b = vv == null ? void 0 : vv.buttons) == null ? void 0 : _b.blockSizes) == null ? void 0 : _c[props.size])) {
          output.push(vv.buttons.blockSizes[props.size]);
        }
      } else if (props.fab === true && props.block === false) {
        if ((_d = vv == null ? void 0 : vv.buttons) == null ? void 0 : _d.fabBase) {
          output.push(vv.buttons.fabBase);
        }
        if (props.size !== "" && ((_f = (_e = vv == null ? void 0 : vv.buttons) == null ? void 0 : _e.fabSizes) == null ? void 0 : _f[props.size])) {
          output.push(vv.buttons.fabSizes[props.size]);
        }
      } else {
        if ((_g = vv == null ? void 0 : vv.buttons) == null ? void 0 : _g.base) {
          output.push(vv.buttons.base);
        }
        if (props.size !== "" && ((_i = (_h = vv == null ? void 0 : vv.buttons) == null ? void 0 : _h.sizes) == null ? void 0 : _i[props.size])) {
          output.push(vv.buttons.sizes[props.size]);
        }
      }
      if (props.transitionClasses !== "") {
        output.push(props.transitionClasses);
      }
      if ((_l = (_k = (_j = vv == null ? void 0 : vv.buttons) == null ? void 0 : _j.palettes) == null ? void 0 : _k[props.palette]) == null ? void 0 : _l[props.color]) {
        output.push(vv.buttons.palettes[props.palette][props.color]);
      }
      return output.join(" ");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: __props.type,
        class: normalizeClass(unref(classes))
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$1);
    };
  }
};
const black = "#0a0a0a";
const white = "#fcfcfc";
const gray = {
  "50": "#f0f0f1",
  "100": "#e1e1e3",
  "200": "#c4c4c8",
  "300": "#a7a7ad",
  "400": "#8c8c93",
  "500": "#71717a",
  "600": "#5f5f67",
  "700": "#434348",
  "800": "#333337",
  "900": "#242426"
};
const trueGray = {
  "50": "#f0f0f0",
  "100": "#e1e1e1",
  "200": "#c5c5c5",
  "300": "#a9a9a9",
  "400": "#8d8d8d",
  "500": "#737373",
  "600": "#616161",
  "700": "#444444",
  "800": "#343434",
  "900": "#252525"
};
const warmGray = {
  "50": "#f1f0ef",
  "100": "#e3e1e0",
  "200": "#c7c4c2",
  "300": "#aca7a4",
  "400": "#928c87",
  "500": "#78716c",
  "600": "#655f5b",
  "700": "#474341",
  "800": "#363331",
  "900": "#262423"
};
const coolGray = {
  "50": "#eff0f2",
  "100": "#e0e1e4",
  "200": "#c1c4ca",
  "300": "#a4a8b1",
  "400": "#878c98",
  "500": "#6b7280",
  "600": "#5b606c",
  "700": "#40444c",
  "800": "#313439",
  "900": "#232428"
};
const red = {
  "50": "#ffeeeb",
  "100": "#ffdcd7",
  "200": "#ffb9b0",
  "300": "#ff968a",
  "400": "#f97066",
  "500": "#ef4444",
  "600": "#c83c3a",
  "700": "#8a2e2b",
  "800": "#672522",
  "900": "#451c19"
};
const rose = {
  "50": "#ffeeee",
  "100": "#ffdcdd",
  "200": "#ffb9bb",
  "300": "#ff959b",
  "400": "#fd6e7c",
  "500": "#f43f5e",
  "600": "#cc3850",
  "700": "#8c2c39",
  "800": "#68242c",
  "900": "#461c1f"
};
const pink = {
  "50": "#ffeef4",
  "100": "#ffdeea",
  "200": "#febcd5",
  "300": "#fa99c1",
  "400": "#f474ad",
  "500": "#ec4899",
  "600": "#c53f80",
  "700": "#873059",
  "800": "#652743",
  "900": "#441d2e"
};
const fuchsia = {
  "50": "#fdeefe",
  "100": "#fbdefd",
  "200": "#f5bcfa",
  "300": "#ed99f7",
  "400": "#e473f3",
  "500": "#d946ef",
  "600": "#b53ec7",
  "700": "#7d3088",
  "800": "#5d2765",
  "900": "#3f1d43"
};
const purple = {
  "50": "#f8eeff",
  "100": "#f1ddfe",
  "200": "#e1bcfd",
  "300": "#d09bfc",
  "400": "#bd79fa",
  "500": "#a855f7",
  "600": "#8d49ce",
  "700": "#63358d",
  "800": "#4a2a68",
  "900": "#331f45"
};
const violet = {
  "50": "#f5eeff",
  "100": "#ebdefe",
  "200": "#d7bdfd",
  "300": "#c09cfb",
  "400": "#a77cf9",
  "500": "#8b5cf6",
  "600": "#764ecd",
  "700": "#53398c",
  "800": "#402c67",
  "900": "#2d2045"
};
const indigo = {
  "50": "#f2effe",
  "100": "#e5dffd",
  "200": "#c9bffb",
  "300": "#aca0f8",
  "400": "#8b83f5",
  "500": "#6366f1",
  "600": "#5656c9",
  "700": "#3f3d89",
  "800": "#322f65",
  "900": "#242244"
};
const blue = {
  "50": "#f0f2ff",
  "100": "#e0e4fe",
  "200": "#c0cbfd",
  "300": "#9db1fb",
  "400": "#7599f9",
  "500": "#3b82f6",
  "600": "#376dcd",
  "700": "#2e4d8c",
  "800": "#273a67",
  "900": "#1e2845"
};
const lightBlue = {
  "50": "#eef6fd",
  "100": "#ddecfb",
  "200": "#badaf7",
  "300": "#93c8f2",
  "400": "#66b6ee",
  "500": "#0ea5e9",
  "600": "#1c8ac2",
  "700": "#216085",
  "800": "#1f4862",
  "900": "#1a3142"
};
const cyan = {
  "50": "#eef8fb",
  "100": "#dcf0f6",
  "200": "#b8e2ee",
  "300": "#91d3e5",
  "400": "#63c5dd",
  "500": "#06b6d4",
  "600": "#1998b1",
  "700": "#1f6979",
  "800": "#1d4e5a",
  "900": "#19353c"
};
const teal = {
  "50": "#edf8f6",
  "100": "#daf1ed",
  "200": "#b4e3db",
  "300": "#8dd5c9",
  "400": "#60c7b7",
  "500": "#14b8a6",
  "600": "#1c9a8b",
  "700": "#1f6a60",
  "800": "#1c4f48",
  "900": "#183631"
};
const emerald = {
  "50": "#ecf8f2",
  "100": "#d9f2e5",
  "200": "#b3e4cb",
  "300": "#8ad6b2",
  "400": "#5dc899",
  "500": "#10b981",
  "600": "#1a9b6d",
  "700": "#1d6b4c",
  "800": "#1b503a",
  "900": "#173628"
};
const green = {
  "50": "#edfaee",
  "100": "#dbf5de",
  "200": "#b7e9be",
  "300": "#90de9e",
  "400": "#64d27e",
  "500": "#22c55e",
  "600": "#25a550",
  "700": "#23723a",
  "800": "#1f552d",
  "900": "#193920"
};
const lime = {
  "50": "#f4faea",
  "100": "#eaf5d5",
  "200": "#d3ebab",
  "300": "#bbe181",
  "400": "#a1d754",
  "500": "#84cc16",
  "600": "#70aa1a",
  "700": "#4f751a",
  "800": "#3d5718",
  "900": "#2b3b14"
};
const yellow = {
  "50": "#fff7e9",
  "100": "#ffefd3",
  "200": "#ffe0a8",
  "300": "#fad07d",
  "400": "#f3c14f",
  "500": "#eab308",
  "600": "#c49612",
  "700": "#876716",
  "800": "#644d15",
  "900": "#433413"
};
const amber = {
  "50": "#fff5e9",
  "100": "#ffebd2",
  "200": "#ffd7a6",
  "300": "#ffc47b",
  "400": "#fdb14d",
  "500": "#f59e0b",
  "600": "#cd8513",
  "700": "#8d5c16",
  "800": "#694515",
  "900": "#462f12"
};
const orange = {
  "50": "#fff1e8",
  "100": "#ffe3d1",
  "200": "#ffc8a4",
  "300": "#ffac77",
  "400": "#ff904b",
  "500": "#f97316",
  "600": "#d06117",
  "700": "#8f4516",
  "800": "#6b3514",
  "900": "#482611"
};
var AppTwColors = {
  black,
  white,
  gray,
  trueGray,
  warmGray,
  coolGray,
  red,
  rose,
  pink,
  fuchsia,
  purple,
  violet,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  emerald,
  green,
  lime,
  yellow,
  amber,
  orange
};
const _hoisted_1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6",
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
const _sfc_main = {
  name: "VvColorModeButton",
  props: {
    mode: {
      type: String,
      default: "light",
      validator: (prop) => ["light", "dark"].includes(prop)
    },
    color: {
      type: String,
      default: "default"
    },
    fab: {
      type: Boolean,
      default: true
    },
    palette: {
      type: String,
      default: "outline"
    },
    size: {
      type: String,
      default: "xs"
    },
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    const props = __props;
    const vv = Object.keys(inject("vv", {})).length > 0 ? inject("vv") : {
      colorMode: {
        dark: {
          bg: "bg-gray-900",
          text: "text-gray-100"
        },
        light: {
          bg: "bg-gray-100",
          text: "text-gray-900"
        }
      }
    };
    const mode = ref(props.mode);
    const icon = computed(() => mode.value === "dark" ? "sun" : "moon");
    const title = computed(() => mode.value === "dark" ? "Enable Light Mode" : "Enable Dark Mode");
    if (mode.value === "light" && document) {
      document.documentElement.classList.remove("dark", vv.colorMode.dark.bg, vv.colorMode.dark.text);
      document.documentElement.classList.add(vv.colorMode.light.bg, vv.colorMode.light.text);
      document.documentElement.style.backgroundColor = AppTwColors.gray["100"];
    }
    if (mode.value === "dark" && document) {
      document.documentElement.classList.remove(vv.colorMode.light.bg, vv.colorMode.light.text);
      document.documentElement.classList.add("dark", vv.colorMode.dark.bg, vv.colorMode.dark.text);
      document.documentElement.style.backgroundColor = AppTwColors.gray["900"];
    }
    function toggleColorMode(event) {
      if (mode.value === "light" && document) {
        mode.value = "dark";
        localStorage.setItem("colorMode", "dark");
        document.documentElement.classList.remove(vv.colorMode.light.bg, vv.colorMode.light.text);
        document.documentElement.classList.add("dark", vv.colorMode.dark.bg, vv.colorMode.dark.text);
        document.documentElement.style.backgroundColor = AppTwColors.gray["900"];
      } else if (mode.value === "dark" && document) {
        mode.value = "light";
        localStorage.setItem("colorMode", "light");
        document.documentElement.classList.remove("dark", vv.colorMode.dark.bg, vv.colorMode.dark.text);
        document.documentElement.classList.add(vv.colorMode.light.bg, vv.colorMode.light.text);
        document.documentElement.style.backgroundColor = AppTwColors.gray["100"];
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        title: unref(title),
        onClick: _cache[0] || (_cache[0] = ($event) => toggleColorMode()),
        class: "rounded-full",
        color: __props.color,
        fab: __props.fab,
        palette: __props.palette,
        type: __props.type,
        size: __props.size
      }, {
        default: withCtx(() => [
          unref(icon) === "moon" ? (openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3)) : createCommentVNode("", true),
          unref(icon) === "sun" ? (openBlock(), createElementBlock("svg", _hoisted_4, _hoisted_6)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["title", "color", "fab", "palette", "type", "size"]);
    };
  }
};
export { AnchorDefault, BorderDefault, ButtonOutline, ButtonSolid, Buttons, GroundConsole, GroundDefault, GroundMonochromatic, GroundPastel, TextDefault, Transitions, _sfc_main$1 as VvButton, _sfc_main as VvColorModeButton };
