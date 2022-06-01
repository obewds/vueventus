import { inject, computed, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
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
  disabled: "disabled:opacity-25",
  display: "inline-flex items-center",
  focus: "focus:outline-none focus:ring focus:ring-opacity-50",
  text: "font-semibold uppercase tracking-widest",
  base: function() {
    return [
      this.border,
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
const _hoisted_1 = ["type"];
const _sfc_main = {
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
      ], 10, _hoisted_1);
    };
  }
};
export { AnchorDefault, BorderDefault, ButtonOutline, ButtonSolid, GroundConsole, GroundDefault, GroundMonochromatic, GroundPastel, TextDefault, Transitions, _sfc_main as VvButton };
