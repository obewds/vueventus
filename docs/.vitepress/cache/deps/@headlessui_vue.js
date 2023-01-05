import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  provide,
  reactive,
  ref,
  shallowRef,
  toRaw,
  unref,
  watch,
  watchEffect
} from "./chunk-3T6VSYDD.js";
import "./chunk-RSJERJUL.js";

// node_modules/@headlessui/vue/dist/utils/match.js
function u(r4, n4, ...a4) {
  if (r4 in n4) {
    let e5 = n4[r4];
    return typeof e5 == "function" ? e5(...a4) : e5;
  }
  let t3 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e5) => `"${e5}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t3, u), t3;
}

// node_modules/@headlessui/vue/dist/utils/render.js
var R = ((o4) => (o4[o4.None = 0] = "None", o4[o4.RenderStrategy = 1] = "RenderStrategy", o4[o4.Static = 2] = "Static", o4))(R || {});
var O = ((e5) => (e5[e5.Unmount = 0] = "Unmount", e5[e5.Hidden = 1] = "Hidden", e5))(O || {});
function P({ visible: r4 = true, features: t3 = 0, ourProps: e5, theirProps: o4, ...i2 }) {
  var a4;
  let n4 = k(o4, e5), s4 = Object.assign(i2, { props: n4 });
  if (r4 || t3 & 2 && n4.static)
    return p(s4);
  if (t3 & 1) {
    let l4 = (a4 = n4.unmount) == null || a4 ? 0 : 1;
    return u(l4, { [0]() {
      return null;
    }, [1]() {
      return p({ ...i2, props: { ...n4, hidden: true, style: { display: "none" } } });
    } });
  }
  return p(s4);
}
function p({ props: r4, attrs: t3, slots: e5, slot: o4, name: i2 }) {
  var y2;
  let { as: n4, ...s4 } = w(r4, ["unmount", "static"]), a4 = (y2 = e5.default) == null ? void 0 : y2.call(e5, o4), l4 = {};
  if (o4) {
    let d8 = false, u6 = [];
    for (let [f6, c3] of Object.entries(o4))
      typeof c3 == "boolean" && (d8 = true), c3 === true && u6.push(f6);
    d8 && (l4["data-headlessui-state"] = u6.join(" "));
  }
  if (n4 === "template") {
    if (a4 = g(a4 != null ? a4 : []), Object.keys(s4).length > 0 || Object.keys(t3).length > 0) {
      let [d8, ...u6] = a4 != null ? a4 : [];
      if (!x(d8) || u6.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i2} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(s4).concat(Object.keys(t3)).sort((f6, c3) => f6.localeCompare(c3)).map((f6) => `  - ${f6}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f6) => `  - ${f6}`).join(`
`)].join(`
`));
      return cloneVNode(d8, Object.assign({}, s4, l4));
    }
    return Array.isArray(a4) && a4.length === 1 ? a4[0] : a4;
  }
  return h(n4, Object.assign({}, s4, l4), { default: () => a4 });
}
function g(r4) {
  return r4.flatMap((t3) => t3.type === Fragment ? g(t3.children) : [t3]);
}
function k(...r4) {
  var o4;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t3 = {}, e5 = {};
  for (let i2 of r4)
    for (let n4 in i2)
      n4.startsWith("on") && typeof i2[n4] == "function" ? ((o4 = e5[n4]) != null || (e5[n4] = []), e5[n4].push(i2[n4])) : t3[n4] = i2[n4];
  if (t3.disabled || t3["aria-disabled"])
    return Object.assign(t3, Object.fromEntries(Object.keys(e5).map((i2) => [i2, void 0])));
  for (let i2 in e5)
    Object.assign(t3, { [i2](n4, ...s4) {
      let a4 = e5[i2];
      for (let l4 of a4) {
        if (n4 instanceof Event && n4.defaultPrevented)
          return;
        l4(n4, ...s4);
      }
    } });
  return t3;
}
function V(r4) {
  let t3 = Object.assign({}, r4);
  for (let e5 in t3)
    t3[e5] === void 0 && delete t3[e5];
  return t3;
}
function w(r4, t3 = []) {
  let e5 = Object.assign({}, r4);
  for (let o4 of t3)
    o4 in e5 && delete e5[o4];
  return e5;
}
function x(r4) {
  return r4 == null ? false : typeof r4.type == "string" || typeof r4.type == "object" || typeof r4.type == "function";
}

// node_modules/@headlessui/vue/dist/hooks/use-id.js
var e = 0;
function n() {
  return ++e;
}
function t() {
  return n();
}

// node_modules/@headlessui/vue/dist/keyboard.js
var o = ((r4) => (r4.Space = " ", r4.Enter = "Enter", r4.Escape = "Escape", r4.Backspace = "Backspace", r4.Delete = "Delete", r4.ArrowLeft = "ArrowLeft", r4.ArrowUp = "ArrowUp", r4.ArrowRight = "ArrowRight", r4.ArrowDown = "ArrowDown", r4.Home = "Home", r4.End = "End", r4.PageUp = "PageUp", r4.PageDown = "PageDown", r4.Tab = "Tab", r4))(o || {});

// node_modules/@headlessui/vue/dist/utils/calculate-active-index.js
function f(r4) {
  throw new Error("Unexpected object: " + r4);
}
var a = ((e5) => (e5[e5.First = 0] = "First", e5[e5.Previous = 1] = "Previous", e5[e5.Next = 2] = "Next", e5[e5.Last = 3] = "Last", e5[e5.Specific = 4] = "Specific", e5[e5.Nothing = 5] = "Nothing", e5))(a || {});
function x2(r4, n4) {
  let t3 = n4.resolveItems();
  if (t3.length <= 0)
    return null;
  let l4 = n4.resolveActiveIndex(), s4 = l4 != null ? l4 : -1, d8 = (() => {
    switch (r4.focus) {
      case 0:
        return t3.findIndex((e5) => !n4.resolveDisabled(e5));
      case 1: {
        let e5 = t3.slice().reverse().findIndex((i2, c3, u6) => s4 !== -1 && u6.length - c3 - 1 >= s4 ? false : !n4.resolveDisabled(i2));
        return e5 === -1 ? e5 : t3.length - 1 - e5;
      }
      case 2:
        return t3.findIndex((e5, i2) => i2 <= s4 ? false : !n4.resolveDisabled(e5));
      case 3: {
        let e5 = t3.slice().reverse().findIndex((i2) => !n4.resolveDisabled(i2));
        return e5 === -1 ? e5 : t3.length - 1 - e5;
      }
      case 4:
        return t3.findIndex((e5) => n4.resolveId(e5) === r4.id);
      case 5:
        return null;
      default:
        f(r4);
    }
  })();
  return d8 === -1 ? l4 : d8;
}

// node_modules/@headlessui/vue/dist/utils/dom.js
function o2(n4) {
  var l4;
  return n4 == null || n4.value == null ? null : (l4 = n4.value.$el) != null ? l4 : n4.value;
}

// node_modules/@headlessui/vue/dist/internal/open-closed.js
var n2 = Symbol("Context");
var l = ((e5) => (e5[e5.Open = 0] = "Open", e5[e5.Closed = 1] = "Closed", e5))(l || {});
function f2() {
  return p2() !== null;
}
function p2() {
  return inject(n2, null);
}
function c(o4) {
  provide(n2, o4);
}

// node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function r(t3, e5) {
  if (t3)
    return t3;
  let n4 = e5 != null ? e5 : "button";
  if (typeof n4 == "string" && n4.toLowerCase() === "button")
    return "button";
}
function b(t3, e5) {
  let n4 = ref(r(t3.value.type, t3.value.as));
  return onMounted(() => {
    n4.value = r(t3.value.type, t3.value.as);
  }), watchEffect(() => {
    var o4;
    n4.value || !o2(e5) || o2(e5) instanceof HTMLButtonElement && !((o4 = o2(e5)) != null && o4.hasAttribute("type")) && (n4.value = "button");
  }), n4;
}

// node_modules/@headlessui/vue/dist/utils/ssr.js
var e2 = typeof window == "undefined" || typeof document == "undefined";

// node_modules/@headlessui/vue/dist/utils/owner.js
function m(r4) {
  if (e2)
    return null;
  if (r4 instanceof Node)
    return r4.ownerDocument;
  if (r4 != null && r4.hasOwnProperty("value")) {
    let o4 = o2(r4);
    if (o4)
      return o4.ownerDocument;
  }
  return document;
}

// node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function p3({ container: e5, accept: t3, walk: d8, enabled: o4 }) {
  watchEffect(() => {
    let r4 = e5.value;
    if (!r4 || o4 !== void 0 && !o4.value)
      return;
    let l4 = m(e5);
    if (!l4)
      return;
    let c3 = Object.assign((f6) => t3(f6), { acceptNode: t3 }), n4 = l4.createTreeWalker(r4, NodeFilter.SHOW_ELEMENT, c3, false);
    for (; n4.nextNode(); )
      d8(n4.currentNode);
  });
}

// node_modules/@headlessui/vue/dist/utils/focus-management.js
var f3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var N = ((n4) => (n4[n4.First = 1] = "First", n4[n4.Previous = 2] = "Previous", n4[n4.Next = 4] = "Next", n4[n4.Last = 8] = "Last", n4[n4.WrapAround = 16] = "WrapAround", n4[n4.NoScroll = 32] = "NoScroll", n4))(N || {});
var T = ((o4) => (o4[o4.Error = 0] = "Error", o4[o4.Overflow = 1] = "Overflow", o4[o4.Success = 2] = "Success", o4[o4.Underflow = 3] = "Underflow", o4))(T || {});
var F = ((r4) => (r4[r4.Previous = -1] = "Previous", r4[r4.Next = 1] = "Next", r4))(F || {});
function d(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(f3)).sort((t3, r4) => Math.sign((t3.tabIndex || Number.MAX_SAFE_INTEGER) - (r4.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h2 = ((r4) => (r4[r4.Strict = 0] = "Strict", r4[r4.Loose = 1] = "Loose", r4))(h2 || {});
function S(e5, t3 = 0) {
  var r4;
  return e5 === ((r4 = m(e5)) == null ? void 0 : r4.body) ? false : u(t3, { [0]() {
    return e5.matches(f3);
  }, [1]() {
    let l4 = e5;
    for (; l4 !== null; ) {
      if (l4.matches(f3))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function g2(e5) {
  let t3 = m(e5);
  nextTick(() => {
    t3 && !S(t3.activeElement, 0) && H(e5);
  });
}
function H(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var w2 = ["textarea", "input"].join(",");
function A(e5) {
  var t3, r4;
  return (r4 = (t3 = e5 == null ? void 0 : e5.matches) == null ? void 0 : t3.call(e5, w2)) != null ? r4 : false;
}
function I(e5, t3 = (r4) => r4) {
  return e5.slice().sort((r4, l4) => {
    let o4 = t3(r4), i2 = t3(l4);
    if (o4 === null || i2 === null)
      return 0;
    let n4 = o4.compareDocumentPosition(i2);
    return n4 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n4 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function D(e5, t3) {
  return O2(d(), t3, { relativeTo: e5 });
}
function O2(e5, t3, { sorted: r4 = true, relativeTo: l4 = null, skipElements: o4 = [] } = {}) {
  var m3;
  let i2 = (m3 = Array.isArray(e5) ? e5.length > 0 ? e5[0].ownerDocument : document : e5 == null ? void 0 : e5.ownerDocument) != null ? m3 : document, n4 = Array.isArray(e5) ? r4 ? I(e5) : e5 : d(e5);
  o4.length > 0 && (n4 = n4.filter((s4) => !o4.includes(s4))), l4 = l4 != null ? l4 : i2.activeElement;
  let x4 = (() => {
    if (t3 & 5)
      return 1;
    if (t3 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p7 = (() => {
    if (t3 & 1)
      return 0;
    if (t3 & 2)
      return Math.max(0, n4.indexOf(l4)) - 1;
    if (t3 & 4)
      return Math.max(0, n4.indexOf(l4)) + 1;
    if (t3 & 8)
      return n4.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M3 = t3 & 32 ? { preventScroll: true } : {}, c3 = 0, a4 = n4.length, u6;
  do {
    if (c3 >= a4 || c3 + a4 <= 0)
      return 0;
    let s4 = p7 + c3;
    if (t3 & 16)
      s4 = (s4 + a4) % a4;
    else {
      if (s4 < 0)
        return 3;
      if (s4 >= a4)
        return 1;
    }
    u6 = n4[s4], u6 == null || u6.focus(M3), c3 += x4;
  } while (u6 !== i2.activeElement);
  return t3 & 6 && A(u6) && u6.select(), u6.hasAttribute("tabindex") || u6.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function v(e5, t3, n4) {
  e2 || watchEffect((o4) => {
    document.addEventListener(e5, t3, n4), o4(() => document.removeEventListener(e5, t3, n4));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function y(f6, m3, i2 = computed(() => true)) {
  function a4(e5, u6) {
    if (!i2.value || e5.defaultPrevented)
      return;
    let n4 = u6(e5);
    if (n4 === null || !n4.getRootNode().contains(n4))
      return;
    let c3 = function o4(t3) {
      return typeof t3 == "function" ? o4(t3()) : Array.isArray(t3) || t3 instanceof Set ? t3 : [t3];
    }(f6);
    for (let o4 of c3) {
      if (o4 === null)
        continue;
      let t3 = o4 instanceof HTMLElement ? o4 : o2(o4);
      if (t3 != null && t3.contains(n4) || e5.composed && e5.composedPath().includes(t3))
        return;
    }
    return !S(n4, h2.Loose) && n4.tabIndex !== -1 && e5.preventDefault(), m3(e5, n4);
  }
  let r4 = ref(null);
  v("mousedown", (e5) => {
    var u6, n4;
    i2.value && (r4.value = ((n4 = (u6 = e5.composedPath) == null ? void 0 : u6.call(e5)) == null ? void 0 : n4[0]) || e5.target);
  }, true), v("click", (e5) => {
    !r4.value || (a4(e5, () => r4.value), r4.value = null);
  }, true), v("blur", (e5) => a4(e5, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/vue/dist/internal/hidden.js
var a2 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.Focusable = 2] = "Focusable", e5[e5.Hidden = 4] = "Hidden", e5))(a2 || {});
var f4 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r4, { slots: t3, attrs: d8 }) {
  return () => {
    let { features: e5, ...o4 } = r4, n4 = { "aria-hidden": (e5 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e5 & 4) === 4 && (e5 & 2) !== 2 && { display: "none" } } };
    return P({ ourProps: n4, theirProps: o4, slot: {}, attrs: d8, slots: t3, name: "Hidden" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/form.js
function e3(n4 = {}, r4 = null, t3 = []) {
  for (let [i2, o4] of Object.entries(n4))
    f5(t3, s(r4, i2), o4);
  return t3;
}
function s(n4, r4) {
  return n4 ? n4 + "[" + r4 + "]" : r4;
}
function f5(n4, r4, t3) {
  if (Array.isArray(t3))
    for (let [i2, o4] of t3.entries())
      f5(n4, s(r4, i2.toString()), o4);
  else
    t3 instanceof Date ? n4.push([r4, t3.toISOString()]) : typeof t3 == "boolean" ? n4.push([r4, t3 ? "1" : "0"]) : typeof t3 == "string" ? n4.push([r4, t3]) : typeof t3 == "number" ? n4.push([r4, `${t3}`]) : t3 == null ? n4.push([r4, ""]) : e3(t3, r4, n4);
}
function p4(n4) {
  var t3;
  let r4 = (t3 = n4 == null ? void 0 : n4.form) != null ? t3 : n4.closest("form");
  if (!!r4) {
    for (let i2 of r4.elements)
      if (i2.tagName === "INPUT" && i2.type === "submit" || i2.tagName === "BUTTON" && i2.type === "submit" || i2.nodeName === "INPUT" && i2.type === "image") {
        i2.click();
        return;
      }
  }
}

// node_modules/@headlessui/vue/dist/hooks/use-controllable.js
function d2(u6, e5, r4) {
  let i2 = ref(r4 == null ? void 0 : r4.value), f6 = computed(() => u6.value !== void 0);
  return [computed(() => f6.value ? u6.value : i2.value), function(t3) {
    return f6.value || (i2.value = t3), e5 == null ? void 0 : e5(t3);
  }];
}

// node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function r2(e5) {
  return [e5.screenX, e5.screenY];
}
function u2() {
  let e5 = ref([-1, -1]);
  return { wasMoved(n4) {
    let t3 = r2(n4);
    return e5.value[0] === t3[0] && e5.value[1] === t3[1] ? false : (e5.value = t3, true);
  }, update(n4) {
    e5.value = r2(n4);
  } };
}

// node_modules/@headlessui/vue/dist/components/combobox/combobox.js
function fe(n4, O3) {
  return n4 === O3;
}
var be = ((r4) => (r4[r4.Open = 0] = "Open", r4[r4.Closed = 1] = "Closed", r4))(be || {});
var ve = ((r4) => (r4[r4.Single = 0] = "Single", r4[r4.Multi = 1] = "Multi", r4))(ve || {});
var ce = ((r4) => (r4[r4.Pointer = 0] = "Pointer", r4[r4.Other = 1] = "Other", r4))(ce || {});
var G = Symbol("ComboboxContext");
function B(n4) {
  let O3 = inject(G, null);
  if (O3 === null) {
    let r4 = new Error(`<${n4} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r4, B), r4;
  }
  return O3;
}
var je = defineComponent({ name: "Combobox", emits: { "update:modelValue": (n4) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => fe }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(n4, { slots: O3, attrs: r4, emit: T3 }) {
  let e5 = ref(1), t3 = ref(null), s4 = ref(null), R4 = ref(null), d8 = ref(null), b3 = ref({ static: false, hold: false }), m3 = ref([]), C = ref(null), S4 = ref(1), y2 = ref(false);
  function M3(a4 = (l4) => l4) {
    let l4 = C.value !== null ? m3.value[C.value] : null, u6 = I(a4(m3.value.slice()), (f6) => o2(f6.dataRef.domRef)), i2 = l4 ? u6.indexOf(l4) : null;
    return i2 === -1 && (i2 = null), { options: u6, activeOptionIndex: i2 };
  }
  let D3 = computed(() => n4.multiple ? 1 : 0), o4 = computed(() => n4.nullable), [c3, I2] = d2(computed(() => n4.modelValue === void 0 ? u(D3.value, { [1]: [], [0]: void 0 }) : n4.modelValue), (a4) => T3("update:modelValue", a4), computed(() => n4.defaultValue)), p7 = { comboboxState: e5, value: c3, mode: D3, compare(a4, l4) {
    if (typeof n4.by == "string") {
      let u6 = n4.by;
      return (a4 == null ? void 0 : a4[u6]) === (l4 == null ? void 0 : l4[u6]);
    }
    return n4.by(a4, l4);
  }, defaultValue: computed(() => n4.defaultValue), nullable: o4, inputRef: s4, labelRef: t3, buttonRef: R4, optionsRef: d8, disabled: computed(() => n4.disabled), options: m3, change(a4) {
    I2(a4);
  }, activeOptionIndex: computed(() => {
    if (y2.value && C.value === null && m3.value.length > 0) {
      let a4 = m3.value.findIndex((l4) => !l4.dataRef.disabled);
      if (a4 !== -1)
        return a4;
    }
    return C.value;
  }), activationTrigger: S4, optionsPropsRef: b3, closeCombobox() {
    y2.value = false, !n4.disabled && e5.value !== 1 && (e5.value = 1, C.value = null);
  }, openCombobox() {
    if (y2.value = true, n4.disabled || e5.value === 0)
      return;
    let a4 = m3.value.findIndex((l4) => {
      let u6 = toRaw(l4.dataRef.value);
      return u(D3.value, { [0]: () => p7.compare(toRaw(p7.value.value), toRaw(u6)), [1]: () => toRaw(p7.value.value).some((f6) => p7.compare(toRaw(f6), toRaw(u6))) });
    });
    a4 !== -1 && (C.value = a4), e5.value = 0;
  }, goToOption(a4, l4, u6) {
    if (y2.value = false, n4.disabled || d8.value && !b3.value.static && e5.value === 1)
      return;
    let i2 = M3();
    if (i2.activeOptionIndex === null) {
      let P4 = i2.options.findIndex((H2) => !H2.dataRef.disabled);
      P4 !== -1 && (i2.activeOptionIndex = P4);
    }
    let f6 = x2(a4 === a.Specific ? { focus: a.Specific, id: l4 } : { focus: a4 }, { resolveItems: () => i2.options, resolveActiveIndex: () => i2.activeOptionIndex, resolveId: (P4) => P4.id, resolveDisabled: (P4) => P4.dataRef.disabled });
    C.value = f6, S4.value = u6 != null ? u6 : 1, m3.value = i2.options;
  }, selectOption(a4) {
    let l4 = m3.value.find((i2) => i2.id === a4);
    if (!l4)
      return;
    let { dataRef: u6 } = l4;
    I2(u(D3.value, { [0]: () => u6.value, [1]: () => {
      let i2 = toRaw(p7.value.value).slice(), f6 = toRaw(u6.value), P4 = i2.findIndex((H2) => p7.compare(f6, toRaw(H2)));
      return P4 === -1 ? i2.push(f6) : i2.splice(P4, 1), i2;
    } }));
  }, selectActiveOption() {
    if (p7.activeOptionIndex.value === null)
      return;
    let { dataRef: a4, id: l4 } = m3.value[p7.activeOptionIndex.value];
    I2(u(D3.value, { [0]: () => a4.value, [1]: () => {
      let u6 = toRaw(p7.value.value).slice(), i2 = toRaw(a4.value), f6 = u6.findIndex((P4) => p7.compare(i2, toRaw(P4)));
      return f6 === -1 ? u6.push(i2) : u6.splice(f6, 1), u6;
    } })), p7.goToOption(a.Specific, l4);
  }, registerOption(a4, l4) {
    let u6 = { id: a4, dataRef: l4 }, i2 = M3((f6) => [...f6, u6]);
    if (C.value === null) {
      let f6 = l4.value.value;
      u(D3.value, { [0]: () => p7.compare(toRaw(p7.value.value), toRaw(f6)), [1]: () => toRaw(p7.value.value).some((H2) => p7.compare(toRaw(H2), toRaw(f6))) }) && (i2.activeOptionIndex = i2.options.indexOf(u6));
    }
    m3.value = i2.options, C.value = i2.activeOptionIndex, S4.value = 1;
  }, unregisterOption(a4) {
    let l4 = M3((u6) => {
      let i2 = u6.findIndex((f6) => f6.id === a4);
      return i2 !== -1 && u6.splice(i2, 1), u6;
    });
    m3.value = l4.options, C.value = l4.activeOptionIndex, S4.value = 1;
  } };
  y([s4, R4, d8], () => p7.closeCombobox(), computed(() => e5.value === 0)), provide(G, p7), c(computed(() => u(e5.value, { [0]: l.Open, [1]: l.Closed })));
  let E4 = computed(() => p7.activeOptionIndex.value === null ? null : m3.value[p7.activeOptionIndex.value].dataRef.value), A4 = computed(() => {
    var a4;
    return (a4 = o2(s4)) == null ? void 0 : a4.closest("form");
  });
  return onMounted(() => {
    watch([A4], () => {
      if (!A4.value || n4.defaultValue === void 0)
        return;
      function a4() {
        p7.change(n4.defaultValue);
      }
      return A4.value.addEventListener("reset", a4), () => {
        var l4;
        (l4 = A4.value) == null || l4.removeEventListener("reset", a4);
      };
    }, { immediate: true });
  }), () => {
    let { name: a4, disabled: l4, ...u6 } = n4, i2 = { open: e5.value === 0, disabled: l4, activeIndex: p7.activeOptionIndex.value, activeOption: E4.value, value: c3.value };
    return h(Fragment, [...a4 != null && c3.value != null ? e3({ [a4]: c3.value }).map(([f6, P4]) => h(f4, V({ features: a2.Hidden, key: f6, as: "input", type: "hidden", hidden: true, readOnly: true, name: f6, value: P4 }))) : [], P({ theirProps: { ...r4, ...w(u6, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: i2, slots: O3, attrs: r4, name: "Combobox" })]);
  };
} });
var Be = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t()}` } }, setup(n4, { attrs: O3, slots: r4 }) {
  let T3 = B("ComboboxLabel");
  function e5() {
    var t3;
    (t3 = o2(T3.inputRef)) == null || t3.focus({ preventScroll: true });
  }
  return () => {
    let t3 = { open: T3.comboboxState.value === 0, disabled: T3.disabled.value }, { id: s4, ...R4 } = n4, d8 = { id: s4, ref: T3.labelRef, onClick: e5 };
    return P({ ourProps: d8, theirProps: R4, slot: t3, attrs: O3, slots: r4, name: "ComboboxLabel" });
  };
} });
var He = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t()}` } }, setup(n4, { attrs: O3, slots: r4, expose: T3 }) {
  let e5 = B("ComboboxButton");
  T3({ el: e5.buttonRef, $el: e5.buttonRef });
  function t3(d8) {
    e5.disabled.value || (e5.comboboxState.value === 0 ? e5.closeCombobox() : (d8.preventDefault(), e5.openCombobox()), nextTick(() => {
      var b3;
      return (b3 = o2(e5.inputRef)) == null ? void 0 : b3.focus({ preventScroll: true });
    }));
  }
  function s4(d8) {
    switch (d8.key) {
      case o.ArrowDown:
        d8.preventDefault(), d8.stopPropagation(), e5.comboboxState.value === 1 && e5.openCombobox(), nextTick(() => {
          var b3;
          return (b3 = e5.inputRef.value) == null ? void 0 : b3.focus({ preventScroll: true });
        });
        return;
      case o.ArrowUp:
        d8.preventDefault(), d8.stopPropagation(), e5.comboboxState.value === 1 && (e5.openCombobox(), nextTick(() => {
          e5.value.value || e5.goToOption(a.Last);
        })), nextTick(() => {
          var b3;
          return (b3 = e5.inputRef.value) == null ? void 0 : b3.focus({ preventScroll: true });
        });
        return;
      case o.Escape:
        if (e5.comboboxState.value !== 0)
          return;
        d8.preventDefault(), e5.optionsRef.value && !e5.optionsPropsRef.value.static && d8.stopPropagation(), e5.closeCombobox(), nextTick(() => {
          var b3;
          return (b3 = e5.inputRef.value) == null ? void 0 : b3.focus({ preventScroll: true });
        });
        return;
    }
  }
  let R4 = b(computed(() => ({ as: n4.as, type: O3.type })), e5.buttonRef);
  return () => {
    var S4, y2;
    let d8 = { open: e5.comboboxState.value === 0, disabled: e5.disabled.value, value: e5.value.value }, { id: b3, ...m3 } = n4, C = { ref: e5.buttonRef, id: b3, type: R4.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (S4 = o2(e5.optionsRef)) == null ? void 0 : S4.id, "aria-expanded": e5.disabled.value ? void 0 : e5.comboboxState.value === 0, "aria-labelledby": e5.labelRef.value ? [(y2 = o2(e5.labelRef)) == null ? void 0 : y2.id, b3].join(" ") : void 0, disabled: e5.disabled.value === true ? true : void 0, onKeydown: s4, onClick: t3 };
    return P({ ourProps: C, theirProps: m3, slot: d8, attrs: O3, slots: r4, name: "ComboboxButton" });
  };
} });
var Ne = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t()}` } }, emits: { change: (n4) => true }, setup(n4, { emit: O3, attrs: r4, slots: T3, expose: e5 }) {
  let t3 = B("ComboboxInput"), s4 = { value: false };
  e5({ el: t3.inputRef, $el: t3.inputRef });
  let R4 = computed(() => {
    var c3;
    let o4 = t3.value.value;
    return o2(t3.inputRef) ? typeof n4.displayValue != "undefined" && o4 !== void 0 ? (c3 = n4.displayValue(o4)) != null ? c3 : "" : typeof o4 == "string" ? o4 : "" : "";
  });
  onMounted(() => {
    watch([R4, t3.comboboxState], ([o4, c3], [I2, p7]) => {
      if (s4.value)
        return;
      let E4 = o2(t3.inputRef);
      !E4 || (p7 === 0 && c3 === 1 || o4 !== I2) && (E4.value = o4);
    }, { immediate: true });
  });
  let d8 = ref(false);
  function b3() {
    d8.value = true;
  }
  function m3() {
    setTimeout(() => {
      d8.value = false;
    });
  }
  function C(o4) {
    switch (s4.value = true, o4.key) {
      case o.Backspace:
      case o.Delete:
        if (t3.mode.value !== 0 || !t3.nullable.value)
          return;
        let c3 = o4.currentTarget;
        requestAnimationFrame(() => {
          if (c3.value === "") {
            t3.change(null);
            let I2 = o2(t3.optionsRef);
            I2 && (I2.scrollTop = 0), t3.goToOption(a.Nothing);
          }
        });
        break;
      case o.Enter:
        if (s4.value = false, t3.comboboxState.value !== 0 || d8.value)
          return;
        if (o4.preventDefault(), o4.stopPropagation(), t3.activeOptionIndex.value === null) {
          t3.closeCombobox();
          return;
        }
        t3.selectActiveOption(), t3.mode.value === 0 && t3.closeCombobox();
        break;
      case o.ArrowDown:
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), u(t3.comboboxState.value, { [0]: () => t3.goToOption(a.Next), [1]: () => t3.openCombobox() });
      case o.ArrowUp:
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), u(t3.comboboxState.value, { [0]: () => t3.goToOption(a.Previous), [1]: () => {
          t3.openCombobox(), nextTick(() => {
            t3.value.value || t3.goToOption(a.Last);
          });
        } });
      case o.Home:
        if (o4.shiftKey)
          break;
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), t3.goToOption(a.First);
      case o.PageUp:
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), t3.goToOption(a.First);
      case o.End:
        if (o4.shiftKey)
          break;
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), t3.goToOption(a.Last);
      case o.PageDown:
        return s4.value = false, o4.preventDefault(), o4.stopPropagation(), t3.goToOption(a.Last);
      case o.Escape:
        if (s4.value = false, t3.comboboxState.value !== 0)
          return;
        o4.preventDefault(), t3.optionsRef.value && !t3.optionsPropsRef.value.static && o4.stopPropagation(), t3.closeCombobox();
        break;
      case o.Tab:
        if (s4.value = false, t3.comboboxState.value !== 0)
          return;
        t3.mode.value === 0 && t3.selectActiveOption(), t3.closeCombobox();
        break;
    }
  }
  function S4(o4) {
    O3("change", o4);
  }
  function y2(o4) {
    t3.openCombobox(), O3("change", o4);
  }
  function M3() {
    s4.value = false;
  }
  let D3 = computed(() => {
    var o4, c3, I2, p7;
    return (p7 = (I2 = (c3 = n4.defaultValue) != null ? c3 : t3.defaultValue.value !== void 0 ? (o4 = n4.displayValue) == null ? void 0 : o4.call(n4, t3.defaultValue.value) : null) != null ? I2 : t3.defaultValue.value) != null ? p7 : "";
  });
  return () => {
    var A4, a4, l4, u6, i2, f6;
    let o4 = { open: t3.comboboxState.value === 0 }, { id: c3, displayValue: I2, ...p7 } = n4, E4 = { "aria-controls": (A4 = t3.optionsRef.value) == null ? void 0 : A4.id, "aria-expanded": t3.disabled.value ? void 0 : t3.comboboxState.value === 0, "aria-activedescendant": t3.activeOptionIndex.value === null || (a4 = t3.options.value[t3.activeOptionIndex.value]) == null ? void 0 : a4.id, "aria-multiselectable": t3.mode.value === 1 ? true : void 0, "aria-labelledby": (i2 = (l4 = o2(t3.labelRef)) == null ? void 0 : l4.id) != null ? i2 : (u6 = o2(t3.buttonRef)) == null ? void 0 : u6.id, id: c3, onCompositionstart: b3, onCompositionend: m3, onKeydown: C, onChange: S4, onInput: y2, onBlur: M3, role: "combobox", type: (f6 = r4.type) != null ? f6 : "text", tabIndex: 0, ref: t3.inputRef, defaultValue: D3.value };
    return P({ ourProps: E4, theirProps: p7, slot: o4, attrs: r4, slots: T3, features: R.RenderStrategy | R.Static, name: "ComboboxInput" });
  };
} });
var Ke = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(n4, { attrs: O3, slots: r4, expose: T3 }) {
  let e5 = B("ComboboxOptions"), t3 = `headlessui-combobox-options-${t()}`;
  T3({ el: e5.optionsRef, $el: e5.optionsRef }), watchEffect(() => {
    e5.optionsPropsRef.value.static = n4.static;
  }), watchEffect(() => {
    e5.optionsPropsRef.value.hold = n4.hold;
  });
  let s4 = p2(), R4 = computed(() => s4 !== null ? s4.value === l.Open : e5.comboboxState.value === 0);
  return p3({ container: computed(() => o2(e5.optionsRef)), enabled: computed(() => e5.comboboxState.value === 0), accept(d8) {
    return d8.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d8) {
    d8.setAttribute("role", "none");
  } }), () => {
    var C, S4, y2, M3;
    let d8 = { open: e5.comboboxState.value === 0 }, b3 = { "aria-activedescendant": e5.activeOptionIndex.value === null || (C = e5.options.value[e5.activeOptionIndex.value]) == null ? void 0 : C.id, "aria-labelledby": (M3 = (S4 = o2(e5.labelRef)) == null ? void 0 : S4.id) != null ? M3 : (y2 = o2(e5.buttonRef)) == null ? void 0 : y2.id, id: t3, ref: e5.optionsRef, role: "listbox" }, m3 = w(n4, ["hold"]);
    return P({ ourProps: b3, theirProps: m3, slot: d8, attrs: O3, slots: r4, features: R.RenderStrategy | R.Static, visible: R4.value, name: "ComboboxOptions" });
  };
} });
var $e = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(n4, { slots: O3, attrs: r4, expose: T3 }) {
  let e5 = B("ComboboxOption"), t3 = `headlessui-combobox-option-${t()}`, s4 = ref(null);
  T3({ el: s4, $el: s4 });
  let R4 = computed(() => e5.activeOptionIndex.value !== null ? e5.options.value[e5.activeOptionIndex.value].id === t3 : false), d8 = computed(() => u(e5.mode.value, { [0]: () => e5.compare(toRaw(e5.value.value), toRaw(n4.value)), [1]: () => toRaw(e5.value.value).some((o4) => e5.compare(toRaw(o4), toRaw(n4.value))) })), b3 = computed(() => ({ disabled: n4.disabled, value: n4.value, domRef: s4 }));
  onMounted(() => e5.registerOption(t3, b3)), onUnmounted(() => e5.unregisterOption(t3)), watchEffect(() => {
    e5.comboboxState.value === 0 && (!R4.value || e5.activationTrigger.value !== 0 && nextTick(() => {
      var o4, c3;
      return (c3 = (o4 = o2(s4)) == null ? void 0 : o4.scrollIntoView) == null ? void 0 : c3.call(o4, { block: "nearest" });
    }));
  });
  function m3(o4) {
    if (n4.disabled)
      return o4.preventDefault();
    e5.selectOption(t3), e5.mode.value === 0 && e5.closeCombobox();
  }
  function C() {
    if (n4.disabled)
      return e5.goToOption(a.Nothing);
    e5.goToOption(a.Specific, t3);
  }
  let S4 = u2();
  function y2(o4) {
    S4.update(o4);
  }
  function M3(o4) {
    !S4.wasMoved(o4) || n4.disabled || R4.value || e5.goToOption(a.Specific, t3, 0);
  }
  function D3(o4) {
    !S4.wasMoved(o4) || n4.disabled || !R4.value || e5.optionsPropsRef.value.hold || e5.goToOption(a.Nothing);
  }
  return () => {
    let { disabled: o4 } = n4, c3 = { active: R4.value, selected: d8.value, disabled: o4 }, I2 = { id: t3, ref: s4, role: "option", tabIndex: o4 === true ? void 0 : -1, "aria-disabled": o4 === true ? true : void 0, "aria-selected": d8.value, disabled: void 0, onClick: m3, onFocus: C, onPointerenter: y2, onMouseenter: y2, onPointermove: M3, onMousemove: M3, onPointerleave: D3, onMouseleave: D3 };
    return P({ ourProps: I2, theirProps: n4, slot: c3, attrs: r4, slots: O3, name: "ComboboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function w3(e5, n4, t3) {
  e2 || watchEffect((o4) => {
    window.addEventListener(e5, n4, t3), o4(() => window.removeEventListener(e5, n4, t3));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var d3 = ((r4) => (r4[r4.Forwards = 0] = "Forwards", r4[r4.Backwards = 1] = "Backwards", r4))(d3 || {});
function n3() {
  let o4 = ref(0);
  return w3("keydown", (e5) => {
    e5.key === "Tab" && (o4.value = e5.shiftKey ? 1 : 0);
  }), o4;
}

// node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function E(n4, e5, o4, r4) {
  e2 || watchEffect((t3) => {
    n4 = n4 != null ? n4 : window, n4.addEventListener(e5, o4, r4), t3(() => n4.removeEventListener(e5, o4, r4));
  });
}

// node_modules/@headlessui/vue/dist/utils/micro-task.js
function t2(e5) {
  typeof queueMicrotask == "function" ? queueMicrotask(e5) : Promise.resolve().then(e5).catch((o4) => setTimeout(() => {
    throw o4;
  }));
}

// node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
var P2 = ((e5) => (e5[e5.None = 1] = "None", e5[e5.InitialFocus = 2] = "InitialFocus", e5[e5.TabLock = 4] = "TabLock", e5[e5.FocusLock = 8] = "FocusLock", e5[e5.RestoreFocus = 16] = "RestoreFocus", e5[e5.All = 30] = "All", e5))(P2 || {});
var le = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(l4, { attrs: i2, slots: n4, expose: r4 }) {
  let t3 = ref(null);
  r4({ el: t3, $el: t3 });
  let o4 = computed(() => m(t3));
  U({ ownerDocument: o4 }, computed(() => Boolean(l4.features & 16)));
  let e5 = _({ ownerDocument: o4, container: t3, initialFocus: computed(() => l4.initialFocus) }, computed(() => Boolean(l4.features & 2)));
  q({ ownerDocument: o4, container: t3, containers: l4.containers, previousActiveElement: e5 }, computed(() => Boolean(l4.features & 8)));
  let s4 = n3();
  function c3(a4) {
    let m3 = o2(t3);
    if (!m3)
      return;
    ((p7) => p7())(() => {
      u(s4.value, { [d3.Forwards]: () => O2(m3, N.First, { skipElements: [a4.relatedTarget] }), [d3.Backwards]: () => O2(m3, N.Last, { skipElements: [a4.relatedTarget] }) });
    });
  }
  let u6 = ref(false);
  function f6(a4) {
    a4.key === "Tab" && (u6.value = true, requestAnimationFrame(() => {
      u6.value = false;
    }));
  }
  function L4(a4) {
    var p7;
    let m3 = new Set((p7 = l4.containers) == null ? void 0 : p7.value);
    m3.add(t3);
    let d8 = a4.relatedTarget;
    !d8 || d8.dataset.headlessuiFocusGuard !== "true" && (B2(m3, d8) || (u6.value ? O2(o2(t3), u(s4.value, { [d3.Forwards]: () => N.Next, [d3.Backwards]: () => N.Previous }) | N.WrapAround, { relativeTo: a4.target }) : a4.target instanceof HTMLElement && H(a4.target)));
  }
  return () => {
    let a4 = {}, m3 = { ref: t3, onKeydown: f6, onFocusout: L4 }, { features: d8, initialFocus: p7, containers: G2, ...S4 } = l4;
    return h(Fragment, [Boolean(d8 & 4) && h(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: c3, features: a2.Focusable }), P({ ourProps: m3, theirProps: { ...i2, ...S4 }, slot: a4, attrs: i2, slots: n4, name: "FocusTrap" }), Boolean(d8 & 4) && h(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: c3, features: a2.Focusable })]);
  };
} }), { features: P2 });
function U({ ownerDocument: l4 }, i2) {
  let n4 = ref(null);
  function r4() {
    var o4;
    n4.value || (n4.value = (o4 = l4.value) == null ? void 0 : o4.activeElement);
  }
  function t3() {
    !n4.value || (H(n4.value), n4.value = null);
  }
  onMounted(() => {
    watch(i2, (o4, e5) => {
      o4 !== e5 && (o4 ? r4() : t3());
    }, { immediate: true });
  }), onUnmounted(t3);
}
function _({ ownerDocument: l4, container: i2, initialFocus: n4 }, r4) {
  let t3 = ref(null), o4 = ref(false);
  return onMounted(() => o4.value = true), onUnmounted(() => o4.value = false), onMounted(() => {
    watch([i2, n4, r4], (e5, s4) => {
      if (e5.every((u6, f6) => (s4 == null ? void 0 : s4[f6]) === u6) || !r4.value)
        return;
      let c3 = o2(i2);
      !c3 || t2(() => {
        var L4, a4;
        if (!o4.value)
          return;
        let u6 = o2(n4), f6 = (L4 = l4.value) == null ? void 0 : L4.activeElement;
        if (u6) {
          if (u6 === f6) {
            t3.value = f6;
            return;
          }
        } else if (c3.contains(f6)) {
          t3.value = f6;
          return;
        }
        u6 ? H(u6) : O2(c3, N.First | N.NoScroll) === T.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), t3.value = (a4 = l4.value) == null ? void 0 : a4.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), t3;
}
function q({ ownerDocument: l4, container: i2, containers: n4, previousActiveElement: r4 }, t3) {
  var o4;
  E((o4 = l4.value) == null ? void 0 : o4.defaultView, "focus", (e5) => {
    if (!t3.value)
      return;
    let s4 = new Set(n4 == null ? void 0 : n4.value);
    s4.add(i2);
    let c3 = r4.value;
    if (!c3)
      return;
    let u6 = e5.target;
    u6 && u6 instanceof HTMLElement ? B2(s4, u6) ? (r4.value = u6, H(u6)) : (e5.preventDefault(), e5.stopPropagation(), H(c3)) : H(r4.value);
  }, true);
}
function B2(l4, i2) {
  var n4;
  for (let r4 of l4)
    if ((n4 = r4.value) != null && n4.contains(i2))
      return true;
  return false;
}

// node_modules/@headlessui/vue/dist/hooks/use-inert-others.js
var l2 = "body > *";
var i = /* @__PURE__ */ new Set();
var r3 = /* @__PURE__ */ new Map();
function u3(t3) {
  t3.setAttribute("aria-hidden", "true"), t3.inert = true;
}
function s2(t3) {
  let n4 = r3.get(t3);
  !n4 || (n4["aria-hidden"] === null ? t3.removeAttribute("aria-hidden") : t3.setAttribute("aria-hidden", n4["aria-hidden"]), t3.inert = n4.inert);
}
function g3(t3, n4 = ref(true)) {
  watchEffect((d8) => {
    if (!n4.value || !t3.value)
      return;
    let a4 = t3.value, o4 = m(a4);
    if (!!o4) {
      i.add(a4);
      for (let e5 of r3.keys())
        e5.contains(a4) && (s2(e5), r3.delete(e5));
      o4.querySelectorAll(l2).forEach((e5) => {
        if (e5 instanceof HTMLElement) {
          for (let f6 of i)
            if (e5.contains(f6))
              return;
          i.size === 1 && (r3.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u3(e5));
        }
      }), d8(() => {
        if (i.delete(a4), i.size > 0)
          o4.querySelectorAll(l2).forEach((e5) => {
            if (e5 instanceof HTMLElement && !r3.has(e5)) {
              for (let f6 of i)
                if (e5.contains(f6))
                  return;
              r3.set(e5, { "aria-hidden": e5.getAttribute("aria-hidden"), inert: e5.inert }), u3(e5);
            }
          });
        else
          for (let e5 of r3.keys())
            s2(e5), r3.delete(e5);
      });
    }
  });
}

// node_modules/@headlessui/vue/dist/internal/portal-force-root.js
var e4 = Symbol("ForcePortalRootContext");
function u4() {
  return inject(e4, false);
}
var P3 = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o4, { slots: t3, attrs: r4 }) {
  return provide(e4, o4.force), () => {
    let { force: f6, ...n4 } = o4;
    return P({ theirProps: n4, ourProps: {}, slot: {}, slots: t3, attrs: r4, name: "ForcePortalRoot" });
  };
} });

// node_modules/@headlessui/vue/dist/components/portal/portal.js
function c2(t3) {
  let r4 = m(t3);
  if (!r4) {
    if (t3 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t3}`);
  }
  let o4 = r4.getElementById("headlessui-portal-root");
  if (o4)
    return o4;
  let e5 = r4.createElement("div");
  return e5.setAttribute("id", "headlessui-portal-root"), r4.body.appendChild(e5);
}
var R2 = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t3, { slots: r4, attrs: o4 }) {
  let e5 = ref(null), p7 = computed(() => m(e5)), n4 = u4(), u6 = inject(g4, null), l4 = ref(n4 === true || u6 == null ? c2(e5.value) : u6.resolveTarget());
  return watchEffect(() => {
    n4 || u6 != null && (l4.value = u6.resolveTarget());
  }), onUnmounted(() => {
    var i2, m3;
    let a4 = (i2 = p7.value) == null ? void 0 : i2.getElementById("headlessui-portal-root");
    !a4 || l4.value === a4 && l4.value.children.length <= 0 && ((m3 = l4.value.parentElement) == null || m3.removeChild(l4.value));
  }), () => {
    if (l4.value === null)
      return null;
    let a4 = { ref: e5, "data-headlessui-portal": "" };
    return h(Teleport, { to: l4.value }, P({ ourProps: a4, theirProps: t3, slot: {}, attrs: o4, slots: r4, name: "Portal" }));
  };
} });
var g4 = Symbol("PortalGroupContext");
var L = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t3, { attrs: r4, slots: o4 }) {
  let e5 = reactive({ resolveTarget() {
    return t3.target;
  } });
  return provide(g4, e5), () => {
    let { target: p7, ...n4 } = t3;
    return P({ theirProps: n4, ourProps: {}, slot: {}, attrs: r4, slots: o4, name: "PortalGroup" });
  };
} });

// node_modules/@headlessui/vue/dist/internal/stack-context.js
var u5 = Symbol("StackContext");
var p5 = ((e5) => (e5[e5.Add = 0] = "Add", e5[e5.Remove = 1] = "Remove", e5))(p5 || {});
function v2() {
  return inject(u5, () => {
  });
}
function S2({ type: o4, enabled: r4, element: e5, onUpdate: i2 }) {
  let a4 = v2();
  function t3(...n4) {
    i2 == null || i2(...n4), a4(...n4);
  }
  onMounted(() => {
    watch(r4, (n4, d8) => {
      n4 ? t3(0, o4, e5) : d8 === true && t3(1, o4, e5);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r4.value && t3(1, o4, e5);
  }), provide(u5, t3);
}

// node_modules/@headlessui/vue/dist/components/description/description.js
var p6 = Symbol("DescriptionContext");
function b2() {
  let t3 = inject(p6, null);
  if (t3 === null)
    throw new Error("Missing parent");
  return t3;
}
function M({ slot: t3 = ref({}), name: i2 = "Description", props: o4 = {} } = {}) {
  let e5 = ref([]);
  function s4(n4) {
    return e5.value.push(n4), () => {
      let r4 = e5.value.indexOf(n4);
      r4 !== -1 && e5.value.splice(r4, 1);
    };
  }
  return provide(p6, { register: s4, slot: t3, name: i2, props: o4 }), computed(() => e5.value.length > 0 ? e5.value.join(" ") : void 0);
}
var E2 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t3, { attrs: i2, slots: o4 }) {
  let e5 = b2();
  return onMounted(() => onUnmounted(e5.register(t3.id))), () => {
    let { name: s4 = "Description", slot: n4 = ref({}), props: r4 = {} } = e5, { id: d8, ...l4 } = t3, c3 = { ...Object.entries(r4).reduce((f6, [a4, g7]) => Object.assign(f6, { [a4]: unref(g7) }), {}), id: d8 };
    return P({ ourProps: c3, theirProps: l4, slot: n4.value, attrs: i2, slots: o4, name: s4 });
  };
} });

// node_modules/@headlessui/vue/dist/utils/disposables.js
function s3() {
  let a4 = [], i2 = [], t3 = { enqueue(e5) {
    i2.push(e5);
  }, addEventListener(e5, n4, o4, r4) {
    return e5.addEventListener(n4, o4, r4), t3.add(() => e5.removeEventListener(n4, o4, r4));
  }, requestAnimationFrame(...e5) {
    let n4 = requestAnimationFrame(...e5);
    t3.add(() => cancelAnimationFrame(n4));
  }, nextFrame(...e5) {
    t3.requestAnimationFrame(() => {
      t3.requestAnimationFrame(...e5);
    });
  }, setTimeout(...e5) {
    let n4 = setTimeout(...e5);
    t3.add(() => clearTimeout(n4));
  }, add(e5) {
    a4.push(e5);
  }, dispose() {
    for (let e5 of a4.splice(0))
      e5();
  }, async workQueue() {
    for (let e5 of i2.splice(0))
      await e5();
  } };
  return t3;
}

// node_modules/@headlessui/vue/dist/utils/platform.js
function o3() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}

// node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var ye = ((t3) => (t3[t3.Open = 0] = "Open", t3[t3.Closed = 1] = "Closed", t3))(ye || {});
var W = Symbol("DialogContext");
function R3(l4) {
  let i2 = inject(W, null);
  if (i2 === null) {
    let t3 = new Error(`<${l4} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t3, R3), t3;
  }
  return i2;
}
var M2 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var Ue = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: M2 }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t()}` } }, emits: { close: (l4) => true }, setup(l4, { emit: i2, attrs: t3, slots: u6, expose: s4 }) {
  var K4;
  let o4 = ref(false);
  onMounted(() => {
    o4.value = true;
  });
  let d8 = ref(0), D3 = p2(), h3 = computed(() => l4.open === M2 && D3 !== null ? u(D3.value, { [l.Open]: true, [l.Closed]: false }) : l4.open), H2 = ref(/* @__PURE__ */ new Set()), m3 = ref(null), V4 = ref(null), x4 = computed(() => m(m3));
  if (s4({ el: m3, $el: m3 }), !(l4.open !== M2 || D3 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof h3.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${h3.value === M2 ? void 0 : l4.open}`);
  let c3 = computed(() => o4.value && h3.value ? 0 : 1), Y2 = computed(() => c3.value === 0), k3 = computed(() => d8.value > 1), Z2 = inject(W, null) !== null, ee = computed(() => k3.value ? "parent" : "leaf");
  g3(m3, computed(() => k3.value ? Y2.value : false)), S2({ type: "Dialog", enabled: computed(() => c3.value === 0), element: m3, onUpdate: (a4, e5, n4) => {
    if (e5 === "Dialog")
      return u(a4, { [p5.Add]() {
        H2.value.add(n4), d8.value += 1;
      }, [p5.Remove]() {
        H2.value.delete(n4), d8.value -= 1;
      } });
  } });
  let te = M({ name: "DialogDescription", slot: computed(() => ({ open: h3.value })) }), L4 = ref(null), b3 = { titleId: L4, panelRef: ref(null), dialogState: c3, setTitleId(a4) {
    L4.value !== a4 && (L4.value = a4);
  }, close() {
    i2("close", false);
  } };
  provide(W, b3);
  function I2() {
    var e5, n4, v3;
    return [...Array.from((n4 = (e5 = x4.value) == null ? void 0 : e5.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? n4 : []).filter((r4) => !(!(r4 instanceof HTMLElement) || r4.contains(o2(V4)) || b3.panelRef.value && r4.contains(b3.panelRef.value))), (v3 = b3.panelRef.value) != null ? v3 : m3.value];
  }
  return y(() => I2(), (a4, e5) => {
    b3.close(), nextTick(() => e5 == null ? void 0 : e5.focus());
  }, computed(() => c3.value === 0 && !k3.value)), E((K4 = x4.value) == null ? void 0 : K4.defaultView, "keydown", (a4) => {
    a4.defaultPrevented || a4.key === o.Escape && c3.value === 0 && (k3.value || (a4.preventDefault(), a4.stopPropagation(), b3.close()));
  }), watchEffect((a4) => {
    var U3;
    if (c3.value !== 0 || Z2)
      return;
    let e5 = x4.value;
    if (!e5)
      return;
    let n4 = s3(), v3 = window.pageYOffset;
    function r4(f6, p7, w5) {
      let F4 = f6.style.getPropertyValue(p7);
      return Object.assign(f6.style, { [p7]: w5 }), n4.add(() => {
        Object.assign(f6.style, { [p7]: F4 });
      });
    }
    let O3 = e5 == null ? void 0 : e5.documentElement, N2 = ((U3 = e5.defaultView) != null ? U3 : window).innerWidth - O3.clientWidth;
    if (r4(O3, "overflow", "hidden"), N2 > 0) {
      let f6 = O3.clientWidth - O3.offsetWidth, p7 = N2 - f6;
      r4(O3, "paddingRight", `${p7}px`);
    }
    if (o3()) {
      r4(e5.body, "marginTop", `-${v3}px`), window.scrollTo(0, 0);
      let f6 = null;
      n4.addEventListener(e5, "click", (p7) => {
        if (p7.target instanceof HTMLElement)
          try {
            let w5 = p7.target.closest("a");
            if (!w5)
              return;
            let { hash: F4 } = new URL(w5.href), $2 = e5.querySelector(F4);
            $2 && !I2().some((le4) => le4.contains($2)) && (f6 = $2);
          } catch {
          }
      }, true), n4.addEventListener(e5, "touchmove", (p7) => {
        p7.target instanceof HTMLElement && !I2().some((w5) => w5.contains(p7.target)) && p7.preventDefault();
      }, { passive: false }), n4.add(() => {
        window.scrollTo(0, window.pageYOffset + v3), f6 && f6.isConnected && (f6.scrollIntoView({ block: "nearest" }), f6 = null);
      });
    }
    a4(n4.dispose);
  }), watchEffect((a4) => {
    if (c3.value !== 0)
      return;
    let e5 = o2(m3);
    if (!e5)
      return;
    let n4 = new IntersectionObserver((v3) => {
      for (let r4 of v3)
        r4.boundingClientRect.x === 0 && r4.boundingClientRect.y === 0 && r4.boundingClientRect.width === 0 && r4.boundingClientRect.height === 0 && b3.close();
    });
    n4.observe(e5), a4(() => n4.disconnect());
  }), () => {
    let { id: a4, open: e5, initialFocus: n4, ...v3 } = l4, r4 = { ...t3, ref: m3, id: a4, role: "dialog", "aria-modal": c3.value === 0 ? true : void 0, "aria-labelledby": L4.value, "aria-describedby": te.value }, O3 = { open: c3.value === 0 };
    return h(P3, { force: true }, () => [h(R2, () => h(L, { target: m3.value }, () => h(P3, { force: false }, () => h(le, { initialFocus: n4, containers: H2, features: Y2.value ? u(ee.value, { parent: le.features.RestoreFocus, leaf: le.features.All & ~le.features.FocusLock }) : le.features.None }, () => P({ ourProps: r4, theirProps: v3, slot: O3, attrs: t3, slots: u6, visible: c3.value === 0, features: R.RenderStrategy | R.Static, name: "Dialog" }))))), h(f4, { features: a2.Hidden, ref: V4 })]);
  };
} });
var _e = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t()}` } }, setup(l4, { attrs: i2, slots: t3 }) {
  let u6 = R3("DialogOverlay");
  function s4(o4) {
    o4.target === o4.currentTarget && (o4.preventDefault(), o4.stopPropagation(), u6.close());
  }
  return () => {
    let { id: o4, ...d8 } = l4;
    return P({ ourProps: { id: o4, "aria-hidden": true, onClick: s4 }, theirProps: d8, slot: { open: u6.dialogState.value === 0 }, attrs: i2, slots: t3, name: "DialogOverlay" });
  };
} });
var qe = defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t()}` } }, inheritAttrs: false, setup(l4, { attrs: i2, slots: t3, expose: u6 }) {
  let s4 = R3("DialogBackdrop"), o4 = ref(null);
  return u6({ el: o4, $el: o4 }), onMounted(() => {
    if (s4.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: d8, ...D3 } = l4, h3 = { id: d8, ref: o4, "aria-hidden": true };
    return h(P3, { force: true }, () => h(R2, () => P({ ourProps: h3, theirProps: { ...i2, ...D3 }, slot: { open: s4.dialogState.value === 0 }, attrs: i2, slots: t3, name: "DialogBackdrop" })));
  };
} });
var Ge = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t()}` } }, setup(l4, { attrs: i2, slots: t3, expose: u6 }) {
  let s4 = R3("DialogPanel");
  u6({ el: s4.panelRef, $el: s4.panelRef });
  function o4(d8) {
    d8.stopPropagation();
  }
  return () => {
    let { id: d8, ...D3 } = l4, h3 = { id: d8, ref: s4.panelRef, onClick: o4 };
    return P({ ourProps: h3, theirProps: D3, slot: { open: s4.dialogState.value === 0 }, attrs: i2, slots: t3, name: "DialogPanel" });
  };
} });
var ze = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t()}` } }, setup(l4, { attrs: i2, slots: t3 }) {
  let u6 = R3("DialogTitle");
  return onMounted(() => {
    u6.setTitleId(l4.id), onUnmounted(() => u6.setTitleId(null));
  }), () => {
    let { id: s4, ...o4 } = l4;
    return P({ ourProps: { id: s4 }, theirProps: o4, slot: { open: u6.dialogState.value === 0 }, attrs: i2, slots: t3, name: "DialogTitle" });
  };
} });
var Je = E2;

// node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
var j = ((o4) => (o4[o4.Open = 0] = "Open", o4[o4.Closed = 1] = "Closed", o4))(j || {});
var x3 = Symbol("DisclosureContext");
function g5(t3) {
  let r4 = inject(x3, null);
  if (r4 === null) {
    let o4 = new Error(`<${t3} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, g5), o4;
  }
  return r4;
}
var B3 = Symbol("DisclosurePanelContext");
function $() {
  return inject(B3, null);
}
var Q = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t3, { slots: r4, attrs: o4 }) {
  let u6 = ref(t3.defaultOpen ? 0 : 1), e5 = ref(null), i2 = ref(null), s4 = { buttonId: ref(null), panelId: ref(null), disclosureState: u6, panel: e5, button: i2, toggleDisclosure() {
    u6.value = u(u6.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    u6.value !== 1 && (u6.value = 1);
  }, close(l4) {
    s4.closeDisclosure();
    let a4 = (() => l4 ? l4 instanceof HTMLElement ? l4 : l4.value instanceof HTMLElement ? o2(l4) : o2(s4.button) : o2(s4.button))();
    a4 == null || a4.focus();
  } };
  return provide(x3, s4), c(computed(() => u(u6.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l4, ...a4 } = t3, c3 = { open: u6.value === 0, close: s4.close };
    return P({ theirProps: a4, ourProps: {}, slot: c3, slots: r4, attrs: o4, name: "Disclosure" });
  };
} });
var V2 = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-disclosure-button-${t()}` } }, setup(t3, { attrs: r4, slots: o4, expose: u6 }) {
  let e5 = g5("DisclosureButton");
  onMounted(() => {
    e5.buttonId.value = t3.id;
  }), onUnmounted(() => {
    e5.buttonId.value = null;
  });
  let i2 = $(), s4 = computed(() => i2 === null ? false : i2.value === e5.panelId.value), l4 = ref(null);
  u6({ el: l4, $el: l4 }), s4.value || watchEffect(() => {
    e5.button.value = l4.value;
  });
  let a4 = b(computed(() => ({ as: t3.as, type: r4.type })), l4);
  function c3() {
    var n4;
    t3.disabled || (s4.value ? (e5.toggleDisclosure(), (n4 = o2(e5.button)) == null || n4.focus()) : e5.toggleDisclosure());
  }
  function D3(n4) {
    var S4;
    if (!t3.disabled)
      if (s4.value)
        switch (n4.key) {
          case o.Space:
          case o.Enter:
            n4.preventDefault(), n4.stopPropagation(), e5.toggleDisclosure(), (S4 = o2(e5.button)) == null || S4.focus();
            break;
        }
      else
        switch (n4.key) {
          case o.Space:
          case o.Enter:
            n4.preventDefault(), n4.stopPropagation(), e5.toggleDisclosure();
            break;
        }
  }
  function T3(n4) {
    switch (n4.key) {
      case o.Space:
        n4.preventDefault();
        break;
    }
  }
  return () => {
    let n4 = { open: e5.disclosureState.value === 0 }, { id: S4, ...k3 } = t3, K4 = s4.value ? { ref: l4, type: a4.value, onClick: c3, onKeydown: D3 } : { id: S4, ref: l4, type: a4.value, "aria-expanded": t3.disabled ? void 0 : e5.disclosureState.value === 0, "aria-controls": o2(e5.panel) ? e5.panelId.value : void 0, disabled: t3.disabled ? true : void 0, onClick: c3, onKeydown: D3, onKeyup: T3 };
    return P({ ourProps: K4, theirProps: k3, slot: n4, attrs: r4, slots: o4, name: "DisclosureButton" });
  };
} });
var X = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-disclosure-panel-${t()}` } }, setup(t3, { attrs: r4, slots: o4, expose: u6 }) {
  let e5 = g5("DisclosurePanel");
  onMounted(() => {
    e5.panelId.value = t3.id;
  }), onUnmounted(() => {
    e5.panelId.value = null;
  }), u6({ el: e5.panel, $el: e5.panel }), provide(B3, e5.panelId);
  let i2 = p2(), s4 = computed(() => i2 !== null ? i2.value === l.Open : e5.disclosureState.value === 0);
  return () => {
    let l4 = { open: e5.disclosureState.value === 0, close: e5.close }, { id: a4, ...c3 } = t3, D3 = { id: a4, ref: e5.panel };
    return P({ ourProps: D3, theirProps: c3, slot: l4, attrs: r4, slots: o4, features: R.RenderStrategy | R.Static, visible: s4.value, name: "DisclosurePanel" });
  };
} });

// node_modules/@headlessui/vue/dist/components/listbox/listbox.js
function se(t3, b3) {
  return t3 === b3;
}
var de = ((u6) => (u6[u6.Open = 0] = "Open", u6[u6.Closed = 1] = "Closed", u6))(de || {});
var fe2 = ((u6) => (u6[u6.Single = 0] = "Single", u6[u6.Multi = 1] = "Multi", u6))(fe2 || {});
var pe = ((u6) => (u6[u6.Pointer = 0] = "Pointer", u6[u6.Other = 1] = "Other", u6))(pe || {});
function ce2(t3) {
  requestAnimationFrame(() => requestAnimationFrame(t3));
}
var U2 = Symbol("ListboxContext");
function E3(t3) {
  let b3 = inject(U2, null);
  if (b3 === null) {
    let u6 = new Error(`<${t3} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u6, E3), u6;
  }
  return b3;
}
var Ee = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t3) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => se }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t3, { slots: b3, attrs: u6, emit: L4 }) {
  let e5 = ref(1), d8 = ref(null), m3 = ref(null), x4 = ref(null), f6 = ref([]), o4 = ref(""), i2 = ref(null), w5 = ref(1);
  function R4(a4 = (l4) => l4) {
    let l4 = i2.value !== null ? f6.value[i2.value] : null, r4 = I(a4(f6.value.slice()), (S4) => o2(S4.dataRef.domRef)), s4 = l4 ? r4.indexOf(l4) : null;
    return s4 === -1 && (s4 = null), { options: r4, activeOptionIndex: s4 };
  }
  let h3 = computed(() => t3.multiple ? 1 : 0), [y2, M3] = d2(computed(() => t3.modelValue === void 0 ? u(h3.value, { [1]: [], [0]: void 0 }) : t3.modelValue), (a4) => L4("update:modelValue", a4), computed(() => t3.defaultValue)), n4 = { listboxState: e5, value: y2, mode: h3, compare(a4, l4) {
    if (typeof t3.by == "string") {
      let r4 = t3.by;
      return (a4 == null ? void 0 : a4[r4]) === (l4 == null ? void 0 : l4[r4]);
    }
    return t3.by(a4, l4);
  }, orientation: computed(() => t3.horizontal ? "horizontal" : "vertical"), labelRef: d8, buttonRef: m3, optionsRef: x4, disabled: computed(() => t3.disabled), options: f6, searchQuery: o4, activeOptionIndex: i2, activationTrigger: w5, closeListbox() {
    t3.disabled || e5.value !== 1 && (e5.value = 1, i2.value = null);
  }, openListbox() {
    t3.disabled || e5.value !== 0 && (e5.value = 0);
  }, goToOption(a4, l4, r4) {
    if (t3.disabled || e5.value === 1)
      return;
    let s4 = R4(), S4 = x2(a4 === a.Specific ? { focus: a.Specific, id: l4 } : { focus: a4 }, { resolveItems: () => s4.options, resolveActiveIndex: () => s4.activeOptionIndex, resolveId: (D3) => D3.id, resolveDisabled: (D3) => D3.dataRef.disabled });
    o4.value = "", i2.value = S4, w5.value = r4 != null ? r4 : 1, f6.value = s4.options;
  }, search(a4) {
    if (t3.disabled || e5.value === 1)
      return;
    let r4 = o4.value !== "" ? 0 : 1;
    o4.value += a4.toLowerCase();
    let S4 = (i2.value !== null ? f6.value.slice(i2.value + r4).concat(f6.value.slice(0, i2.value + r4)) : f6.value).find((j3) => j3.dataRef.textValue.startsWith(o4.value) && !j3.dataRef.disabled), D3 = S4 ? f6.value.indexOf(S4) : -1;
    D3 === -1 || D3 === i2.value || (i2.value = D3, w5.value = 1);
  }, clearSearch() {
    t3.disabled || e5.value !== 1 && o4.value !== "" && (o4.value = "");
  }, registerOption(a4, l4) {
    let r4 = R4((s4) => [...s4, { id: a4, dataRef: l4 }]);
    f6.value = r4.options, i2.value = r4.activeOptionIndex;
  }, unregisterOption(a4) {
    let l4 = R4((r4) => {
      let s4 = r4.findIndex((S4) => S4.id === a4);
      return s4 !== -1 && r4.splice(s4, 1), r4;
    });
    f6.value = l4.options, i2.value = l4.activeOptionIndex, w5.value = 1;
  }, select(a4) {
    t3.disabled || M3(u(h3.value, { [0]: () => a4, [1]: () => {
      let l4 = toRaw(n4.value.value).slice(), r4 = toRaw(a4), s4 = l4.findIndex((S4) => n4.compare(r4, toRaw(S4)));
      return s4 === -1 ? l4.push(r4) : l4.splice(s4, 1), l4;
    } }));
  } };
  y([m3, x4], (a4, l4) => {
    var r4;
    n4.closeListbox(), S(l4, h2.Loose) || (a4.preventDefault(), (r4 = o2(m3)) == null || r4.focus());
  }, computed(() => e5.value === 0)), provide(U2, n4), c(computed(() => u(e5.value, { [0]: l.Open, [1]: l.Closed })));
  let p7 = computed(() => {
    var a4;
    return (a4 = o2(m3)) == null ? void 0 : a4.closest("form");
  });
  return onMounted(() => {
    watch([p7], () => {
      if (!p7.value || t3.defaultValue === void 0)
        return;
      function a4() {
        n4.select(t3.defaultValue);
      }
      return p7.value.addEventListener("reset", a4), () => {
        var l4;
        (l4 = p7.value) == null || l4.removeEventListener("reset", a4);
      };
    }, { immediate: true });
  }), () => {
    let { name: a4, modelValue: l4, disabled: r4, ...s4 } = t3, S4 = { open: e5.value === 0, disabled: r4, value: y2.value };
    return h(Fragment, [...a4 != null && y2.value != null ? e3({ [a4]: y2.value }).map(([D3, j3]) => h(f4, V({ features: a2.Hidden, key: D3, as: "input", type: "hidden", hidden: true, readOnly: true, name: D3, value: j3 }))) : [], P({ ourProps: {}, theirProps: { ...u6, ...w(s4, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: S4, slots: b3, attrs: u6, name: "Listbox" })]);
  };
} });
var je2 = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t3, { attrs: b3, slots: u6 }) {
  let L4 = E3("ListboxLabel");
  function e5() {
    var d8;
    (d8 = o2(L4.buttonRef)) == null || d8.focus({ preventScroll: true });
  }
  return () => {
    let d8 = { open: L4.listboxState.value === 0, disabled: L4.disabled.value }, { id: m3, ...x4 } = t3, f6 = { id: m3, ref: L4.labelRef, onClick: e5 };
    return P({ ourProps: f6, theirProps: x4, slot: d8, attrs: b3, slots: u6, name: "ListboxLabel" });
  };
} });
var Ae = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t3, { attrs: b3, slots: u6, expose: L4 }) {
  let e5 = E3("ListboxButton");
  L4({ el: e5.buttonRef, $el: e5.buttonRef });
  function d8(o4) {
    switch (o4.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o4.preventDefault(), e5.openListbox(), nextTick(() => {
          var i2;
          (i2 = o2(e5.optionsRef)) == null || i2.focus({ preventScroll: true }), e5.value.value || e5.goToOption(a.First);
        });
        break;
      case o.ArrowUp:
        o4.preventDefault(), e5.openListbox(), nextTick(() => {
          var i2;
          (i2 = o2(e5.optionsRef)) == null || i2.focus({ preventScroll: true }), e5.value.value || e5.goToOption(a.Last);
        });
        break;
    }
  }
  function m3(o4) {
    switch (o4.key) {
      case o.Space:
        o4.preventDefault();
        break;
    }
  }
  function x4(o4) {
    e5.disabled.value || (e5.listboxState.value === 0 ? (e5.closeListbox(), nextTick(() => {
      var i2;
      return (i2 = o2(e5.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })) : (o4.preventDefault(), e5.openListbox(), ce2(() => {
      var i2;
      return (i2 = o2(e5.optionsRef)) == null ? void 0 : i2.focus({ preventScroll: true });
    })));
  }
  let f6 = b(computed(() => ({ as: t3.as, type: b3.type })), e5.buttonRef);
  return () => {
    var h3, y2;
    let o4 = { open: e5.listboxState.value === 0, disabled: e5.disabled.value, value: e5.value.value }, { id: i2, ...w5 } = t3, R4 = { ref: e5.buttonRef, id: i2, type: f6.value, "aria-haspopup": "listbox", "aria-controls": (h3 = o2(e5.optionsRef)) == null ? void 0 : h3.id, "aria-expanded": e5.disabled.value ? void 0 : e5.listboxState.value === 0, "aria-labelledby": e5.labelRef.value ? [(y2 = o2(e5.labelRef)) == null ? void 0 : y2.id, i2].join(" ") : void 0, disabled: e5.disabled.value === true ? true : void 0, onKeydown: d8, onKeyup: m3, onClick: x4 };
    return P({ ourProps: R4, theirProps: w5, slot: o4, attrs: b3, slots: u6, name: "ListboxButton" });
  };
} });
var Fe = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t3, { attrs: b3, slots: u6, expose: L4 }) {
  let e5 = E3("ListboxOptions"), d8 = ref(null);
  L4({ el: e5.optionsRef, $el: e5.optionsRef });
  function m3(o4) {
    switch (d8.value && clearTimeout(d8.value), o4.key) {
      case o.Space:
        if (e5.searchQuery.value !== "")
          return o4.preventDefault(), o4.stopPropagation(), e5.search(o4.key);
      case o.Enter:
        if (o4.preventDefault(), o4.stopPropagation(), e5.activeOptionIndex.value !== null) {
          let i2 = e5.options.value[e5.activeOptionIndex.value];
          e5.select(i2.dataRef.value);
        }
        e5.mode.value === 0 && (e5.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o2(e5.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        }));
        break;
      case u(e5.orientation.value, { vertical: o.ArrowDown, horizontal: o.ArrowRight }):
        return o4.preventDefault(), o4.stopPropagation(), e5.goToOption(a.Next);
      case u(e5.orientation.value, { vertical: o.ArrowUp, horizontal: o.ArrowLeft }):
        return o4.preventDefault(), o4.stopPropagation(), e5.goToOption(a.Previous);
      case o.Home:
      case o.PageUp:
        return o4.preventDefault(), o4.stopPropagation(), e5.goToOption(a.First);
      case o.End:
      case o.PageDown:
        return o4.preventDefault(), o4.stopPropagation(), e5.goToOption(a.Last);
      case o.Escape:
        o4.preventDefault(), o4.stopPropagation(), e5.closeListbox(), nextTick(() => {
          var i2;
          return (i2 = o2(e5.buttonRef)) == null ? void 0 : i2.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        o4.preventDefault(), o4.stopPropagation();
        break;
      default:
        o4.key.length === 1 && (e5.search(o4.key), d8.value = setTimeout(() => e5.clearSearch(), 350));
        break;
    }
  }
  let x4 = p2(), f6 = computed(() => x4 !== null ? x4.value === l.Open : e5.listboxState.value === 0);
  return () => {
    var h3, y2, M3, n4;
    let o4 = { open: e5.listboxState.value === 0 }, { id: i2, ...w5 } = t3, R4 = { "aria-activedescendant": e5.activeOptionIndex.value === null || (h3 = e5.options.value[e5.activeOptionIndex.value]) == null ? void 0 : h3.id, "aria-multiselectable": e5.mode.value === 1 ? true : void 0, "aria-labelledby": (n4 = (y2 = o2(e5.labelRef)) == null ? void 0 : y2.id) != null ? n4 : (M3 = o2(e5.buttonRef)) == null ? void 0 : M3.id, "aria-orientation": e5.orientation.value, id: i2, onKeydown: m3, role: "listbox", tabIndex: 0, ref: e5.optionsRef };
    return P({ ourProps: R4, theirProps: w5, slot: o4, attrs: b3, slots: u6, features: R.RenderStrategy | R.Static, visible: f6.value, name: "ListboxOptions" });
  };
} });
var Be2 = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t3, { slots: b3, attrs: u6, expose: L4 }) {
  let e5 = E3("ListboxOption"), d8 = ref(null);
  L4({ el: d8, $el: d8 });
  let m3 = computed(() => e5.activeOptionIndex.value !== null ? e5.options.value[e5.activeOptionIndex.value].id === t3.id : false), x4 = computed(() => u(e5.mode.value, { [0]: () => e5.compare(toRaw(e5.value.value), toRaw(t3.value)), [1]: () => toRaw(e5.value.value).some((n4) => e5.compare(toRaw(n4), toRaw(t3.value))) })), f6 = computed(() => u(e5.mode.value, { [1]: () => {
    var p7;
    let n4 = toRaw(e5.value.value);
    return ((p7 = e5.options.value.find((a4) => n4.some((l4) => e5.compare(toRaw(l4), toRaw(a4.dataRef.value))))) == null ? void 0 : p7.id) === t3.id;
  }, [0]: () => x4.value })), o4 = computed(() => ({ disabled: t3.disabled, value: t3.value, textValue: "", domRef: d8 }));
  onMounted(() => {
    var p7, a4;
    let n4 = (a4 = (p7 = o2(d8)) == null ? void 0 : p7.textContent) == null ? void 0 : a4.toLowerCase().trim();
    n4 !== void 0 && (o4.value.textValue = n4);
  }), onMounted(() => e5.registerOption(t3.id, o4)), onUnmounted(() => e5.unregisterOption(t3.id)), onMounted(() => {
    watch([e5.listboxState, x4], () => {
      e5.listboxState.value === 0 && (!x4.value || u(e5.mode.value, { [1]: () => {
        f6.value && e5.goToOption(a.Specific, t3.id);
      }, [0]: () => {
        e5.goToOption(a.Specific, t3.id);
      } }));
    }, { immediate: true });
  }), watchEffect(() => {
    e5.listboxState.value === 0 && (!m3.value || e5.activationTrigger.value !== 0 && nextTick(() => {
      var n4, p7;
      return (p7 = (n4 = o2(d8)) == null ? void 0 : n4.scrollIntoView) == null ? void 0 : p7.call(n4, { block: "nearest" });
    }));
  });
  function i2(n4) {
    if (t3.disabled)
      return n4.preventDefault();
    e5.select(t3.value), e5.mode.value === 0 && (e5.closeListbox(), nextTick(() => {
      var p7;
      return (p7 = o2(e5.buttonRef)) == null ? void 0 : p7.focus({ preventScroll: true });
    }));
  }
  function w5() {
    if (t3.disabled)
      return e5.goToOption(a.Nothing);
    e5.goToOption(a.Specific, t3.id);
  }
  let R4 = u2();
  function h3(n4) {
    R4.update(n4);
  }
  function y2(n4) {
    !R4.wasMoved(n4) || t3.disabled || m3.value || e5.goToOption(a.Specific, t3.id, 0);
  }
  function M3(n4) {
    !R4.wasMoved(n4) || t3.disabled || !m3.value || e5.goToOption(a.Nothing);
  }
  return () => {
    let { disabled: n4 } = t3, p7 = { active: m3.value, selected: x4.value, disabled: n4 }, { id: a4, value: l4, disabled: r4, ...s4 } = t3, S4 = { id: a4, ref: d8, role: "option", tabIndex: n4 === true ? void 0 : -1, "aria-disabled": n4 === true ? true : void 0, "aria-selected": x4.value, disabled: void 0, onClick: i2, onFocus: w5, onPointerenter: h3, onMouseenter: h3, onPointermove: y2, onMousemove: y2, onPointerleave: M3, onMouseleave: M3 };
    return P({ ourProps: S4, theirProps: s4, slot: p7, attrs: u6, slots: b3, name: "ListboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/components/menu/menu.js
var X2 = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(X2 || {});
var Y = ((l4) => (l4[l4.Pointer = 0] = "Pointer", l4[l4.Other = 1] = "Other", l4))(Y || {});
function Z(a4) {
  requestAnimationFrame(() => requestAnimationFrame(a4));
}
var A2 = Symbol("MenuContext");
function D2(a4) {
  let b3 = inject(A2, null);
  if (b3 === null) {
    let l4 = new Error(`<${a4} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, D2), l4;
  }
  return b3;
}
var ge = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(a4, { slots: b3, attrs: l4 }) {
  let g7 = ref(1), e5 = ref(null), m3 = ref(null), s4 = ref([]), p7 = ref(""), d8 = ref(null), o4 = ref(1);
  function t3(u6 = (r4) => r4) {
    let r4 = d8.value !== null ? s4.value[d8.value] : null, n4 = I(u6(s4.value.slice()), (I2) => o2(I2.dataRef.domRef)), i2 = r4 ? n4.indexOf(r4) : null;
    return i2 === -1 && (i2 = null), { items: n4, activeItemIndex: i2 };
  }
  let v3 = { menuState: g7, buttonRef: e5, itemsRef: m3, items: s4, searchQuery: p7, activeItemIndex: d8, activationTrigger: o4, closeMenu: () => {
    g7.value = 1, d8.value = null;
  }, openMenu: () => g7.value = 0, goToItem(u6, r4, n4) {
    let i2 = t3(), I2 = x2(u6 === a.Specific ? { focus: a.Specific, id: r4 } : { focus: u6 }, { resolveItems: () => i2.items, resolveActiveIndex: () => i2.activeItemIndex, resolveId: (M3) => M3.id, resolveDisabled: (M3) => M3.dataRef.disabled });
    p7.value = "", d8.value = I2, o4.value = n4 != null ? n4 : 1, s4.value = i2.items;
  }, search(u6) {
    let n4 = p7.value !== "" ? 0 : 1;
    p7.value += u6.toLowerCase();
    let I2 = (d8.value !== null ? s4.value.slice(d8.value + n4).concat(s4.value.slice(0, d8.value + n4)) : s4.value).find((P4) => P4.dataRef.textValue.startsWith(p7.value) && !P4.dataRef.disabled), M3 = I2 ? s4.value.indexOf(I2) : -1;
    M3 === -1 || M3 === d8.value || (d8.value = M3, o4.value = 1);
  }, clearSearch() {
    p7.value = "";
  }, registerItem(u6, r4) {
    let n4 = t3((i2) => [...i2, { id: u6, dataRef: r4 }]);
    s4.value = n4.items, d8.value = n4.activeItemIndex, o4.value = 1;
  }, unregisterItem(u6) {
    let r4 = t3((n4) => {
      let i2 = n4.findIndex((I2) => I2.id === u6);
      return i2 !== -1 && n4.splice(i2, 1), n4;
    });
    s4.value = r4.items, d8.value = r4.activeItemIndex, o4.value = 1;
  } };
  return y([e5, m3], (u6, r4) => {
    var n4;
    v3.closeMenu(), S(r4, h2.Loose) || (u6.preventDefault(), (n4 = o2(e5)) == null || n4.focus());
  }, computed(() => g7.value === 0)), provide(A2, v3), c(computed(() => u(g7.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let u6 = { open: g7.value === 0, close: v3.closeMenu };
    return P({ ourProps: {}, theirProps: a4, slot: u6, slots: b3, attrs: l4, name: "Menu" });
  };
} });
var Se = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(a4, { attrs: b3, slots: l4, expose: g7 }) {
  let e5 = D2("MenuButton");
  g7({ el: e5.buttonRef, $el: e5.buttonRef });
  function m3(o4) {
    switch (o4.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o4.preventDefault(), o4.stopPropagation(), e5.openMenu(), nextTick(() => {
          var t3;
          (t3 = o2(e5.itemsRef)) == null || t3.focus({ preventScroll: true }), e5.goToItem(a.First);
        });
        break;
      case o.ArrowUp:
        o4.preventDefault(), o4.stopPropagation(), e5.openMenu(), nextTick(() => {
          var t3;
          (t3 = o2(e5.itemsRef)) == null || t3.focus({ preventScroll: true }), e5.goToItem(a.Last);
        });
        break;
    }
  }
  function s4(o4) {
    switch (o4.key) {
      case o.Space:
        o4.preventDefault();
        break;
    }
  }
  function p7(o4) {
    a4.disabled || (e5.menuState.value === 0 ? (e5.closeMenu(), nextTick(() => {
      var t3;
      return (t3 = o2(e5.buttonRef)) == null ? void 0 : t3.focus({ preventScroll: true });
    })) : (o4.preventDefault(), e5.openMenu(), Z(() => {
      var t3;
      return (t3 = o2(e5.itemsRef)) == null ? void 0 : t3.focus({ preventScroll: true });
    })));
  }
  let d8 = b(computed(() => ({ as: a4.as, type: b3.type })), e5.buttonRef);
  return () => {
    var r4;
    let o4 = { open: e5.menuState.value === 0 }, { id: t3, ...v3 } = a4, u6 = { ref: e5.buttonRef, id: t3, type: d8.value, "aria-haspopup": "menu", "aria-controls": (r4 = o2(e5.itemsRef)) == null ? void 0 : r4.id, "aria-expanded": a4.disabled ? void 0 : e5.menuState.value === 0, onKeydown: m3, onKeyup: s4, onClick: p7 };
    return P({ ourProps: u6, theirProps: v3, slot: o4, attrs: b3, slots: l4, name: "MenuButton" });
  };
} });
var be2 = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(a4, { attrs: b3, slots: l4, expose: g7 }) {
  let e5 = D2("MenuItems"), m3 = ref(null);
  g7({ el: e5.itemsRef, $el: e5.itemsRef }), p3({ container: computed(() => o2(e5.itemsRef)), enabled: computed(() => e5.menuState.value === 0), accept(t3) {
    return t3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t3) {
    t3.setAttribute("role", "none");
  } });
  function s4(t3) {
    var v3;
    switch (m3.value && clearTimeout(m3.value), t3.key) {
      case o.Space:
        if (e5.searchQuery.value !== "")
          return t3.preventDefault(), t3.stopPropagation(), e5.search(t3.key);
      case o.Enter:
        if (t3.preventDefault(), t3.stopPropagation(), e5.activeItemIndex.value !== null) {
          let r4 = e5.items.value[e5.activeItemIndex.value];
          (v3 = o2(r4.dataRef.domRef)) == null || v3.click();
        }
        e5.closeMenu(), g2(o2(e5.buttonRef));
        break;
      case o.ArrowDown:
        return t3.preventDefault(), t3.stopPropagation(), e5.goToItem(a.Next);
      case o.ArrowUp:
        return t3.preventDefault(), t3.stopPropagation(), e5.goToItem(a.Previous);
      case o.Home:
      case o.PageUp:
        return t3.preventDefault(), t3.stopPropagation(), e5.goToItem(a.First);
      case o.End:
      case o.PageDown:
        return t3.preventDefault(), t3.stopPropagation(), e5.goToItem(a.Last);
      case o.Escape:
        t3.preventDefault(), t3.stopPropagation(), e5.closeMenu(), nextTick(() => {
          var u6;
          return (u6 = o2(e5.buttonRef)) == null ? void 0 : u6.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        t3.preventDefault(), t3.stopPropagation(), e5.closeMenu(), nextTick(() => D(o2(e5.buttonRef), t3.shiftKey ? N.Previous : N.Next));
        break;
      default:
        t3.key.length === 1 && (e5.search(t3.key), m3.value = setTimeout(() => e5.clearSearch(), 350));
        break;
    }
  }
  function p7(t3) {
    switch (t3.key) {
      case o.Space:
        t3.preventDefault();
        break;
    }
  }
  let d8 = p2(), o4 = computed(() => d8 !== null ? d8.value === l.Open : e5.menuState.value === 0);
  return () => {
    var n4, i2;
    let t3 = { open: e5.menuState.value === 0 }, { id: v3, ...u6 } = a4, r4 = { "aria-activedescendant": e5.activeItemIndex.value === null || (n4 = e5.items.value[e5.activeItemIndex.value]) == null ? void 0 : n4.id, "aria-labelledby": (i2 = o2(e5.buttonRef)) == null ? void 0 : i2.id, id: v3, onKeydown: s4, onKeyup: p7, role: "menu", tabIndex: 0, ref: e5.itemsRef };
    return P({ ourProps: r4, theirProps: u6, slot: t3, attrs: b3, slots: l4, features: R.RenderStrategy | R.Static, visible: o4.value, name: "MenuItems" });
  };
} });
var Me = defineComponent({ name: "MenuItem", props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(a4, { slots: b3, attrs: l4, expose: g7 }) {
  let e5 = D2("MenuItem"), m3 = ref(null);
  g7({ el: m3, $el: m3 });
  let s4 = computed(() => e5.activeItemIndex.value !== null ? e5.items.value[e5.activeItemIndex.value].id === a4.id : false), p7 = computed(() => ({ disabled: a4.disabled, textValue: "", domRef: m3 }));
  onMounted(() => {
    var i2, I2;
    let n4 = (I2 = (i2 = o2(m3)) == null ? void 0 : i2.textContent) == null ? void 0 : I2.toLowerCase().trim();
    n4 !== void 0 && (p7.value.textValue = n4);
  }), onMounted(() => e5.registerItem(a4.id, p7)), onUnmounted(() => e5.unregisterItem(a4.id)), watchEffect(() => {
    e5.menuState.value === 0 && (!s4.value || e5.activationTrigger.value !== 0 && nextTick(() => {
      var n4, i2;
      return (i2 = (n4 = o2(m3)) == null ? void 0 : n4.scrollIntoView) == null ? void 0 : i2.call(n4, { block: "nearest" });
    }));
  });
  function d8(n4) {
    if (a4.disabled)
      return n4.preventDefault();
    e5.closeMenu(), g2(o2(e5.buttonRef));
  }
  function o4() {
    if (a4.disabled)
      return e5.goToItem(a.Nothing);
    e5.goToItem(a.Specific, a4.id);
  }
  let t3 = u2();
  function v3(n4) {
    t3.update(n4);
  }
  function u6(n4) {
    !t3.wasMoved(n4) || a4.disabled || s4.value || e5.goToItem(a.Specific, a4.id, 0);
  }
  function r4(n4) {
    !t3.wasMoved(n4) || a4.disabled || !s4.value || e5.goToItem(a.Nothing);
  }
  return () => {
    let { disabled: n4 } = a4, i2 = { active: s4.value, disabled: n4, close: e5.closeMenu }, { id: I2, ...M3 } = a4;
    return P({ ourProps: { id: I2, ref: m3, role: "menuitem", tabIndex: n4 === true ? void 0 : -1, "aria-disabled": n4 === true ? true : void 0, onClick: d8, onFocus: o4, onPointerenter: v3, onMouseenter: v3, onPointermove: u6, onMousemove: u6, onPointerleave: r4, onMouseleave: r4 }, theirProps: M3, slot: i2, attrs: l4, slots: b3, name: "MenuItem" });
  };
} });

// node_modules/@headlessui/vue/dist/components/popover/popover.js
var ce3 = ((p7) => (p7[p7.Open = 0] = "Open", p7[p7.Closed = 1] = "Closed", p7))(ce3 || {});
var oe = Symbol("PopoverContext");
function A3(c3) {
  let m3 = inject(oe, null);
  if (m3 === null) {
    let p7 = new Error(`<${c3} /> is missing a parent <${Pe.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p7, A3), p7;
  }
  return m3;
}
var ne = Symbol("PopoverGroupContext");
function le2() {
  return inject(ne, null);
}
var re = Symbol("PopoverPanelContext");
function de2() {
  return inject(re, null);
}
var Pe = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(c3, { slots: m3, attrs: p7, expose: y2 }) {
  var n4;
  let o4 = ref(null);
  y2({ el: o4, $el: o4 });
  let e5 = ref(1), f6 = ref(null), d8 = ref(null), I2 = ref(null), s4 = ref(null), b3 = computed(() => m(o4)), P4 = computed(() => {
    var h3, w5;
    if (!o2(f6) || !o2(s4))
      return false;
    for (let C of document.querySelectorAll("body > *"))
      if (Number(C == null ? void 0 : C.contains(o2(f6))) ^ Number(C == null ? void 0 : C.contains(o2(s4))))
        return true;
    let t3 = d(), r4 = t3.indexOf(o2(f6)), u6 = (r4 + t3.length - 1) % t3.length, v3 = (r4 + 1) % t3.length, S4 = t3[u6], j3 = t3[v3];
    return !((h3 = o2(s4)) != null && h3.contains(S4)) && !((w5 = o2(s4)) != null && w5.contains(j3));
  }), a4 = { popoverState: e5, buttonId: ref(null), panelId: ref(null), panel: s4, button: f6, isPortalled: P4, beforePanelSentinel: d8, afterPanelSentinel: I2, togglePopover() {
    e5.value = u(e5.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e5.value !== 1 && (e5.value = 1);
  }, close(t3) {
    a4.closePopover();
    let r4 = (() => t3 ? t3 instanceof HTMLElement ? t3 : t3.value instanceof HTMLElement ? o2(t3) : o2(a4.button) : o2(a4.button))();
    r4 == null || r4.focus();
  } };
  provide(oe, a4), c(computed(() => u(e5.value, { [0]: l.Open, [1]: l.Closed })));
  let D3 = { buttonId: a4.buttonId, panelId: a4.panelId, close() {
    a4.closePopover();
  } }, g7 = le2(), E4 = g7 == null ? void 0 : g7.registerPopover;
  function i2() {
    var t3, r4, u6, v3;
    return (v3 = g7 == null ? void 0 : g7.isFocusWithinPopoverGroup()) != null ? v3 : ((t3 = b3.value) == null ? void 0 : t3.activeElement) && (((r4 = o2(f6)) == null ? void 0 : r4.contains(b3.value.activeElement)) || ((u6 = o2(s4)) == null ? void 0 : u6.contains(b3.value.activeElement)));
  }
  return watchEffect(() => E4 == null ? void 0 : E4(D3)), E((n4 = b3.value) == null ? void 0 : n4.defaultView, "focus", (t3) => {
    var r4, u6;
    e5.value === 0 && (i2() || !f6 || !s4 || t3.target !== window && ((r4 = o2(a4.beforePanelSentinel)) != null && r4.contains(t3.target) || (u6 = o2(a4.afterPanelSentinel)) != null && u6.contains(t3.target) || a4.closePopover()));
  }, true), y([f6, s4], (t3, r4) => {
    var u6;
    a4.closePopover(), S(r4, h2.Loose) || (t3.preventDefault(), (u6 = o2(f6)) == null || u6.focus());
  }, computed(() => e5.value === 0)), () => {
    let t3 = { open: e5.value === 0, close: a4.close };
    return P({ theirProps: c3, ourProps: { ref: o4 }, slot: t3, slots: m3, attrs: p7, name: "Popover" });
  };
} });
var Be3 = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(c3, { attrs: m3, slots: p7, expose: y2 }) {
  let o4 = A3("PopoverButton"), e5 = computed(() => m(o4.button));
  y2({ el: o4.button, $el: o4.button }), onMounted(() => {
    o4.buttonId.value = c3.id;
  }), onUnmounted(() => {
    o4.buttonId.value = null;
  });
  let f6 = le2(), d8 = f6 == null ? void 0 : f6.closeOthers, I2 = de2(), s4 = computed(() => I2 === null ? false : I2.value === o4.panelId.value), b3 = ref(null), P4 = `headlessui-focus-sentinel-${t()}`;
  s4.value || watchEffect(() => {
    o4.button.value = b3.value;
  });
  let a4 = b(computed(() => ({ as: c3.as, type: m3.type })), b3);
  function D3(n4) {
    var t3, r4, u6, v3, S4;
    if (s4.value) {
      if (o4.popoverState.value === 1)
        return;
      switch (n4.key) {
        case o.Space:
        case o.Enter:
          n4.preventDefault(), (r4 = (t3 = n4.target).click) == null || r4.call(t3), o4.closePopover(), (u6 = o2(o4.button)) == null || u6.focus();
          break;
      }
    } else
      switch (n4.key) {
        case o.Space:
        case o.Enter:
          n4.preventDefault(), n4.stopPropagation(), o4.popoverState.value === 1 && (d8 == null || d8(o4.buttonId.value)), o4.togglePopover();
          break;
        case o.Escape:
          if (o4.popoverState.value !== 0)
            return d8 == null ? void 0 : d8(o4.buttonId.value);
          if (!o2(o4.button) || ((v3 = e5.value) == null ? void 0 : v3.activeElement) && !((S4 = o2(o4.button)) != null && S4.contains(e5.value.activeElement)))
            return;
          n4.preventDefault(), n4.stopPropagation(), o4.closePopover();
          break;
      }
  }
  function g7(n4) {
    s4.value || n4.key === o.Space && n4.preventDefault();
  }
  function E4(n4) {
    var t3, r4;
    c3.disabled || (s4.value ? (o4.closePopover(), (t3 = o2(o4.button)) == null || t3.focus()) : (n4.preventDefault(), n4.stopPropagation(), o4.popoverState.value === 1 && (d8 == null || d8(o4.buttonId.value)), o4.togglePopover(), (r4 = o2(o4.button)) == null || r4.focus()));
  }
  function i2(n4) {
    n4.preventDefault(), n4.stopPropagation();
  }
  return () => {
    let n4 = o4.popoverState.value === 0, t3 = { open: n4 }, { id: r4, ...u6 } = c3, v3 = s4.value ? { ref: b3, type: a4.value, onKeydown: D3, onClick: E4 } : { ref: b3, id: r4, type: a4.value, "aria-expanded": c3.disabled ? void 0 : o4.popoverState.value === 0, "aria-controls": o2(o4.panel) ? o4.panelId.value : void 0, disabled: c3.disabled ? true : void 0, onKeydown: D3, onKeyup: g7, onClick: E4, onMousedown: i2 }, S4 = n3();
    function j3() {
      let h3 = o2(o4.panel);
      if (!h3)
        return;
      function w5() {
        u(S4.value, { [d3.Forwards]: () => O2(h3, N.First), [d3.Backwards]: () => O2(h3, N.Last) });
      }
      w5();
    }
    return h(Fragment, [P({ ourProps: v3, theirProps: { ...m3, ...u6 }, slot: t3, attrs: m3, slots: p7, name: "PopoverButton" }), n4 && !s4.value && o4.isPortalled.value && h(f4, { id: P4, features: a2.Focusable, as: "button", type: "button", onFocus: j3 })]);
  };
} });
var Le = defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(c3, { attrs: m3, slots: p7 }) {
  let y2 = A3("PopoverOverlay"), o4 = `headlessui-popover-overlay-${t()}`, e5 = p2(), f6 = computed(() => e5 !== null ? e5.value === l.Open : y2.popoverState.value === 0);
  function d8() {
    y2.closePopover();
  }
  return () => {
    let I2 = { open: y2.popoverState.value === 0 };
    return P({ ourProps: { id: o4, "aria-hidden": true, onClick: d8 }, theirProps: c3, slot: I2, attrs: m3, slots: p7, features: R.RenderStrategy | R.Static, visible: f6.value, name: "PopoverOverlay" });
  };
} });
var He2 = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(c3, { attrs: m3, slots: p7, expose: y2 }) {
  let { focus: o4 } = c3, e5 = A3("PopoverPanel"), f6 = computed(() => m(e5.panel)), d8 = `headlessui-focus-sentinel-before-${t()}`, I2 = `headlessui-focus-sentinel-after-${t()}`;
  y2({ el: e5.panel, $el: e5.panel }), onMounted(() => {
    e5.panelId.value = c3.id;
  }), onUnmounted(() => {
    e5.panelId.value = null;
  }), provide(re, e5.panelId), watchEffect(() => {
    var n4, t3;
    if (!o4 || e5.popoverState.value !== 0 || !e5.panel)
      return;
    let i2 = (n4 = f6.value) == null ? void 0 : n4.activeElement;
    (t3 = o2(e5.panel)) != null && t3.contains(i2) || O2(o2(e5.panel), N.First);
  });
  let s4 = p2(), b3 = computed(() => s4 !== null ? s4.value === l.Open : e5.popoverState.value === 0);
  function P4(i2) {
    var n4, t3;
    switch (i2.key) {
      case o.Escape:
        if (e5.popoverState.value !== 0 || !o2(e5.panel) || f6.value && !((n4 = o2(e5.panel)) != null && n4.contains(f6.value.activeElement)))
          return;
        i2.preventDefault(), i2.stopPropagation(), e5.closePopover(), (t3 = o2(e5.button)) == null || t3.focus();
        break;
    }
  }
  function a4(i2) {
    var t3, r4, u6, v3, S4;
    let n4 = i2.relatedTarget;
    !n4 || !o2(e5.panel) || (t3 = o2(e5.panel)) != null && t3.contains(n4) || (e5.closePopover(), (((u6 = (r4 = o2(e5.beforePanelSentinel)) == null ? void 0 : r4.contains) == null ? void 0 : u6.call(r4, n4)) || ((S4 = (v3 = o2(e5.afterPanelSentinel)) == null ? void 0 : v3.contains) == null ? void 0 : S4.call(v3, n4))) && n4.focus({ preventScroll: true }));
  }
  let D3 = n3();
  function g7() {
    let i2 = o2(e5.panel);
    if (!i2)
      return;
    function n4() {
      u(D3.value, { [d3.Forwards]: () => {
        O2(i2, N.Next);
      }, [d3.Backwards]: () => {
        var t3;
        (t3 = o2(e5.button)) == null || t3.focus({ preventScroll: true });
      } });
    }
    n4();
  }
  function E4() {
    let i2 = o2(e5.panel);
    if (!i2)
      return;
    function n4() {
      u(D3.value, { [d3.Forwards]: () => {
        var w5, C;
        let t3 = o2(e5.button), r4 = o2(e5.panel);
        if (!t3)
          return;
        let u6 = d(), v3 = u6.indexOf(t3), S4 = u6.slice(0, v3 + 1), h3 = [...u6.slice(v3 + 1), ...S4];
        for (let B5 of h3.slice())
          if (((C = (w5 = B5 == null ? void 0 : B5.id) == null ? void 0 : w5.startsWith) == null ? void 0 : C.call(w5, "headlessui-focus-sentinel-")) || (r4 == null ? void 0 : r4.contains(B5))) {
            let J = h3.indexOf(B5);
            J !== -1 && h3.splice(J, 1);
          }
        O2(h3, N.First, { sorted: false });
      }, [d3.Backwards]: () => O2(i2, N.Previous) });
    }
    n4();
  }
  return () => {
    let i2 = { open: e5.popoverState.value === 0, close: e5.close }, { id: n4, focus: t3, ...r4 } = c3, u6 = { ref: e5.panel, id: n4, onKeydown: P4, onFocusout: o4 && e5.popoverState.value === 0 ? a4 : void 0, tabIndex: -1 };
    return P({ ourProps: u6, theirProps: { ...m3, ...r4 }, attrs: m3, slot: i2, slots: { ...p7, default: (...v3) => {
      var S4;
      return [h(Fragment, [b3.value && e5.isPortalled.value && h(f4, { id: d8, ref: e5.beforePanelSentinel, features: a2.Focusable, as: "button", type: "button", onFocus: g7 }), (S4 = p7.default) == null ? void 0 : S4.call(p7, ...v3), b3.value && e5.isPortalled.value && h(f4, { id: I2, ref: e5.afterPanelSentinel, features: a2.Focusable, as: "button", type: "button", onFocus: E4 })])];
    } }, features: R.RenderStrategy | R.Static, visible: b3.value, name: "PopoverPanel" });
  };
} });
var Ke2 = defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(c3, { attrs: m3, slots: p7, expose: y2 }) {
  let o4 = ref(null), e5 = shallowRef([]), f6 = computed(() => m(o4));
  y2({ el: o4, $el: o4 });
  function d8(P4) {
    let a4 = e5.value.indexOf(P4);
    a4 !== -1 && e5.value.splice(a4, 1);
  }
  function I2(P4) {
    return e5.value.push(P4), () => {
      d8(P4);
    };
  }
  function s4() {
    var D3;
    let P4 = f6.value;
    if (!P4)
      return false;
    let a4 = P4.activeElement;
    return (D3 = o2(o4)) != null && D3.contains(a4) ? true : e5.value.some((g7) => {
      var E4, i2;
      return ((E4 = P4.getElementById(g7.buttonId.value)) == null ? void 0 : E4.contains(a4)) || ((i2 = P4.getElementById(g7.panelId.value)) == null ? void 0 : i2.contains(a4));
    });
  }
  function b3(P4) {
    for (let a4 of e5.value)
      a4.buttonId.value !== P4 && a4.close();
  }
  return provide(ne, { registerPopover: I2, unregisterPopover: d8, isFocusWithinPopoverGroup: s4, closeOthers: b3 }), () => P({ ourProps: { ref: o4 }, theirProps: c3, slot: {}, attrs: m3, slots: p7, name: "PopoverGroup" });
} });

// node_modules/@headlessui/vue/dist/components/label/label.js
var a3 = Symbol("LabelContext");
function d4() {
  let t3 = inject(a3, null);
  if (t3 === null) {
    let n4 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n4, d4), n4;
  }
  return t3;
}
function K({ slot: t3 = {}, name: n4 = "Label", props: i2 = {} } = {}) {
  let e5 = ref([]);
  function l4(r4) {
    return e5.value.push(r4), () => {
      let o4 = e5.value.indexOf(r4);
      o4 !== -1 && e5.value.splice(o4, 1);
    };
  }
  return provide(a3, { register: l4, slot: t3, name: n4, props: i2 }), computed(() => e5.value.length > 0 ? e5.value.join(" ") : void 0);
}
var T2 = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t3, { slots: n4, attrs: i2 }) {
  let e5 = d4();
  return onMounted(() => onUnmounted(e5.register(t3.id))), () => {
    let { name: l4 = "Label", slot: r4 = {}, props: o4 = {} } = e5, { id: p7, passive: c3, ...s4 } = t3, u6 = { ...Object.entries(o4).reduce((f6, [b3, g7]) => Object.assign(f6, { [b3]: unref(g7) }), {}), id: p7 };
    return c3 && (delete u6.onClick, delete s4.onClick), P({ ourProps: u6, theirProps: s4, slot: r4, attrs: i2, slots: n4, name: l4 });
  };
} });

// node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function ne2(t3, m3) {
  return t3 === m3;
}
var V3 = Symbol("RadioGroupContext");
function j2(t3) {
  let m3 = inject(V3, null);
  if (m3 === null) {
    let o4 = new Error(`<${t3} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o4, j2), o4;
  }
  return m3;
}
var Oe = defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t3) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => ne2 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, id: { type: String, default: () => `headlessui-radiogroup-${t()}` } }, inheritAttrs: false, setup(t3, { emit: m3, attrs: o4, slots: k3, expose: d8 }) {
  let s4 = ref(null), i2 = ref([]), b3 = K({ name: "RadioGroupLabel" }), E4 = M({ name: "RadioGroupDescription" });
  d8({ el: s4, $el: s4 });
  let [f6, w5] = d2(computed(() => t3.modelValue), (e5) => m3("update:modelValue", e5), computed(() => t3.defaultValue)), l4 = { options: i2, value: f6, disabled: computed(() => t3.disabled), firstOption: computed(() => i2.value.find((e5) => !e5.propsRef.disabled)), containsCheckedOption: computed(() => i2.value.some((e5) => l4.compare(toRaw(e5.propsRef.value), toRaw(t3.modelValue)))), compare(e5, a4) {
    if (typeof t3.by == "string") {
      let n4 = t3.by;
      return (e5 == null ? void 0 : e5[n4]) === (a4 == null ? void 0 : a4[n4]);
    }
    return t3.by(e5, a4);
  }, change(e5) {
    var n4;
    if (t3.disabled || l4.compare(toRaw(f6.value), toRaw(e5)))
      return false;
    let a4 = (n4 = i2.value.find((r4) => l4.compare(toRaw(r4.propsRef.value), toRaw(e5)))) == null ? void 0 : n4.propsRef;
    return a4 != null && a4.disabled ? false : (w5(e5), true);
  }, registerOption(e5) {
    i2.value.push(e5), i2.value = I(i2.value, (a4) => a4.element);
  }, unregisterOption(e5) {
    let a4 = i2.value.findIndex((n4) => n4.id === e5);
    a4 !== -1 && i2.value.splice(a4, 1);
  } };
  provide(V3, l4), p3({ container: computed(() => o2(s4)), accept(e5) {
    return e5.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e5.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e5) {
    e5.setAttribute("role", "none");
  } });
  function g7(e5) {
    if (!s4.value || !s4.value.contains(e5.target))
      return;
    let a4 = i2.value.filter((n4) => n4.propsRef.disabled === false).map((n4) => n4.element);
    switch (e5.key) {
      case o.Enter:
        p4(e5.currentTarget);
        break;
      case o.ArrowLeft:
      case o.ArrowUp:
        if (e5.preventDefault(), e5.stopPropagation(), O2(a4, N.Previous | N.WrapAround) === T.Success) {
          let r4 = i2.value.find((p7) => {
            var c3;
            return p7.element === ((c3 = m(s4)) == null ? void 0 : c3.activeElement);
          });
          r4 && l4.change(r4.propsRef.value);
        }
        break;
      case o.ArrowRight:
      case o.ArrowDown:
        if (e5.preventDefault(), e5.stopPropagation(), O2(a4, N.Next | N.WrapAround) === T.Success) {
          let r4 = i2.value.find((p7) => {
            var c3;
            return p7.element === ((c3 = m(p7.element)) == null ? void 0 : c3.activeElement);
          });
          r4 && l4.change(r4.propsRef.value);
        }
        break;
      case o.Space:
        {
          e5.preventDefault(), e5.stopPropagation();
          let n4 = i2.value.find((r4) => {
            var p7;
            return r4.element === ((p7 = m(r4.element)) == null ? void 0 : p7.activeElement);
          });
          n4 && l4.change(n4.propsRef.value);
        }
        break;
    }
  }
  let R4 = computed(() => {
    var e5;
    return (e5 = o2(s4)) == null ? void 0 : e5.closest("form");
  });
  return onMounted(() => {
    watch([R4], () => {
      if (!R4.value || t3.defaultValue === void 0)
        return;
      function e5() {
        l4.change(t3.defaultValue);
      }
      return R4.value.addEventListener("reset", e5), () => {
        var a4;
        (a4 = R4.value) == null || a4.removeEventListener("reset", e5);
      };
    }, { immediate: true });
  }), () => {
    let { disabled: e5, name: a4, id: n4, ...r4 } = t3, p7 = { ref: s4, id: n4, role: "radiogroup", "aria-labelledby": b3.value, "aria-describedby": E4.value, onKeydown: g7 };
    return h(Fragment, [...a4 != null && f6.value != null ? e3({ [a4]: f6.value }).map(([c3, S4]) => h(f4, V({ features: a2.Hidden, key: c3, as: "input", type: "hidden", hidden: true, readOnly: true, name: c3, value: S4 }))) : [], P({ ourProps: p7, theirProps: { ...o4, ...w(r4, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o4, slots: k3, name: "RadioGroup" })]);
  };
} });
var re2 = ((o4) => (o4[o4.Empty = 1] = "Empty", o4[o4.Active = 2] = "Active", o4))(re2 || {});
var ke = defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-radiogroup-option-${t()}` } }, setup(t3, { attrs: m3, slots: o4, expose: k3 }) {
  let d8 = j2("RadioGroupOption"), s4 = K({ name: "RadioGroupLabel" }), i2 = M({ name: "RadioGroupDescription" }), b3 = ref(null), E4 = computed(() => ({ value: t3.value, disabled: t3.disabled })), f6 = ref(1);
  k3({ el: b3, $el: b3 }), onMounted(() => d8.registerOption({ id: t3.id, element: b3, propsRef: E4 })), onUnmounted(() => d8.unregisterOption(t3.id));
  let w5 = computed(() => {
    var r4;
    return ((r4 = d8.firstOption.value) == null ? void 0 : r4.id) === t3.id;
  }), l4 = computed(() => d8.disabled.value || t3.disabled), g7 = computed(() => d8.compare(toRaw(d8.value.value), toRaw(t3.value))), R4 = computed(() => l4.value ? -1 : g7.value || !d8.containsCheckedOption.value && w5.value ? 0 : -1);
  function e5() {
    var r4;
    !d8.change(t3.value) || (f6.value |= 2, (r4 = b3.value) == null || r4.focus());
  }
  function a4() {
    f6.value |= 2;
  }
  function n4() {
    f6.value &= -3;
  }
  return () => {
    let { id: r4, value: p7, disabled: c3, ...S4 } = t3, H2 = { checked: g7.value, disabled: l4.value, active: Boolean(f6.value & 2) }, N2 = { id: r4, ref: b3, role: "radio", "aria-checked": g7.value ? "true" : "false", "aria-labelledby": s4.value, "aria-describedby": i2.value, "aria-disabled": l4.value ? true : void 0, tabIndex: R4.value, onClick: l4.value ? void 0 : e5, onFocus: l4.value ? void 0 : a4, onBlur: l4.value ? void 0 : n4 };
    return P({ ourProps: N2, theirProps: S4, slot: H2, attrs: m3, slots: o4, name: "RadioGroupOption" });
  };
} });
var Ee2 = T2;
var we = E2;

// node_modules/@headlessui/vue/dist/components/switch/switch.js
var S3 = Symbol("GroupContext");
var oe2 = defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l4, { slots: c3, attrs: o4 }) {
  let r4 = ref(null), p7 = K({ name: "SwitchLabel", props: { onClick() {
    !r4.value || (r4.value.click(), r4.value.focus({ preventScroll: true }));
  } } }), t3 = M({ name: "SwitchDescription" });
  return provide(S3, { switchRef: r4, labelledby: p7, describedby: t3 }), () => P({ theirProps: l4, ourProps: {}, slot: {}, slots: c3, attrs: o4, name: "SwitchGroup" });
} });
var ue = defineComponent({ name: "Switch", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l4, { emit: c3, attrs: o4, slots: r4, expose: p7 }) {
  let t3 = inject(S3, null), [i2, s4] = d2(computed(() => l4.modelValue), (e5) => c3("update:modelValue", e5), computed(() => l4.defaultChecked));
  function f6() {
    s4(!i2.value);
  }
  let w5 = ref(null), u6 = t3 === null ? w5 : t3.switchRef, k3 = b(computed(() => ({ as: l4.as, type: o4.type })), u6);
  p7({ el: u6, $el: u6 });
  function C(e5) {
    e5.preventDefault(), f6();
  }
  function g7(e5) {
    e5.key === o.Space ? (e5.preventDefault(), f6()) : e5.key === o.Enter && p4(e5.currentTarget);
  }
  function R4(e5) {
    e5.preventDefault();
  }
  let a4 = computed(() => {
    var e5, n4;
    return (n4 = (e5 = o2(u6)) == null ? void 0 : e5.closest) == null ? void 0 : n4.call(e5, "form");
  });
  return onMounted(() => {
    watch([a4], () => {
      if (!a4.value || l4.defaultChecked === void 0)
        return;
      function e5() {
        s4(l4.defaultChecked);
      }
      return a4.value.addEventListener("reset", e5), () => {
        var n4;
        (n4 = a4.value) == null || n4.removeEventListener("reset", e5);
      };
    }, { immediate: true });
  }), () => {
    let { id: e5, name: n4, value: D3, ...E4 } = l4, K4 = { checked: i2.value }, L4 = { id: e5, ref: u6, role: "switch", type: k3.value, tabIndex: 0, "aria-checked": i2.value, "aria-labelledby": t3 == null ? void 0 : t3.labelledby.value, "aria-describedby": t3 == null ? void 0 : t3.describedby.value, onClick: C, onKeyup: g7, onKeypress: R4 };
    return h(Fragment, [n4 != null && i2.value != null ? h(f4, V({ features: a2.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: i2.value, name: n4, value: D3 })) : null, P({ ourProps: L4, theirProps: { ...o4, ...w(E4, ["modelValue", "defaultChecked"]) }, slot: K4, attrs: o4, slots: r4, name: "Switch" })]);
  };
} });
var ae = T2;
var de3 = E2;

// node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d5 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t3) {
  let n4 = ref(true);
  return () => n4.value ? h(f4, { as: "button", type: "button", features: a2.Focusable, onFocus(o4) {
    o4.preventDefault();
    let e5, a4 = 50;
    function r4() {
      var u6;
      if (a4-- <= 0) {
        e5 && cancelAnimationFrame(e5);
        return;
      }
      if ((u6 = t3.onFocus) != null && u6.call(t3)) {
        n4.value = false, cancelAnimationFrame(e5);
        return;
      }
      e5 = requestAnimationFrame(r4);
    }
    e5 = requestAnimationFrame(r4);
  } }) : null;
} });

// node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var K2 = Symbol("TabsContext");
function L2(a4) {
  let o4 = inject(K2, null);
  if (o4 === null) {
    let s4 = new Error(`<${a4} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s4, L2), s4;
  }
  return o4;
}
var k2 = Symbol("TabsSSRContext");
var de4 = defineComponent({ name: "TabGroup", emits: { change: (a4) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a4, { slots: o4, attrs: s4, emit: p7 }) {
  let t3 = ref(null), n4 = ref([]), u6 = ref([]), g7 = computed(() => a4.selectedIndex !== null), x4 = computed(() => g7.value ? a4.selectedIndex : t3.value), d8 = { selectedIndex: computed(() => {
    var l4, r4;
    return (r4 = (l4 = t3.value) != null ? l4 : a4.defaultIndex) != null ? r4 : null;
  }), orientation: computed(() => a4.vertical ? "vertical" : "horizontal"), activation: computed(() => a4.manual ? "manual" : "auto"), tabs: n4, panels: u6, setSelectedIndex(l4) {
    x4.value !== l4 && p7("change", l4), g7.value || (t3.value = l4);
  }, registerTab(l4) {
    n4.value.includes(l4) || n4.value.push(l4);
  }, unregisterTab(l4) {
    let r4 = n4.value.indexOf(l4);
    r4 !== -1 && n4.value.splice(r4, 1);
  }, registerPanel(l4) {
    u6.value.includes(l4) || u6.value.push(l4);
  }, unregisterPanel(l4) {
    let r4 = u6.value.indexOf(l4);
    r4 !== -1 && u6.value.splice(r4, 1);
  } };
  provide(K2, d8);
  let f6 = ref({ tabs: [], panels: [] }), h3 = ref(false);
  return onMounted(() => {
    h3.value = true;
  }), provide(k2, computed(() => h3.value ? null : f6.value)), watchEffect(() => {
    var D3;
    if (d8.tabs.value.length <= 0 || a4.selectedIndex === null && t3.value !== null)
      return;
    let l4 = d8.tabs.value.map((e5) => o2(e5)).filter(Boolean), r4 = l4.filter((e5) => !e5.hasAttribute("disabled")), i2 = (D3 = a4.selectedIndex) != null ? D3 : a4.defaultIndex;
    if (i2 < 0)
      t3.value = l4.indexOf(r4[0]);
    else if (i2 > d8.tabs.value.length)
      t3.value = l4.indexOf(r4[r4.length - 1]);
    else {
      let e5 = l4.slice(0, i2), y2 = [...l4.slice(i2), ...e5].find((S4) => r4.includes(S4));
      if (!y2)
        return;
      t3.value = l4.indexOf(y2);
    }
  }), () => {
    let l4 = { selectedIndex: t3.value };
    return h(Fragment, [n4.value.length <= 0 && h(d5, { onFocus: () => {
      for (let r4 of n4.value) {
        let i2 = o2(r4);
        if ((i2 == null ? void 0 : i2.tabIndex) === 0)
          return i2.focus(), true;
      }
      return false;
    } }), P({ theirProps: { ...s4, ...w(a4, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: l4, slots: o4, attrs: s4, name: "TabGroup" })]);
  };
} });
var fe3 = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a4, { attrs: o4, slots: s4 }) {
  let p7 = L2("TabList");
  return () => {
    let t3 = { selectedIndex: p7.selectedIndex.value }, n4 = { role: "tablist", "aria-orientation": p7.orientation.value };
    return P({ ourProps: n4, theirProps: a4, slot: t3, attrs: o4, slots: s4, name: "TabList" });
  };
} });
var ce4 = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t()}` } }, setup(a4, { attrs: o4, slots: s4, expose: p7 }) {
  let t3 = L2("Tab"), n4 = ref(null);
  p7({ el: n4, $el: n4 }), onMounted(() => t3.registerTab(n4)), onUnmounted(() => t3.unregisterTab(n4));
  let u6 = inject(k2), g7 = computed(() => {
    if (u6.value) {
      let e5 = u6.value.tabs.indexOf(a4.id);
      return e5 === -1 ? u6.value.tabs.push(a4.id) - 1 : e5;
    }
    return -1;
  }), x4 = computed(() => {
    let e5 = t3.tabs.value.indexOf(n4);
    return e5 === -1 ? g7.value : e5;
  }), d8 = computed(() => x4.value === t3.selectedIndex.value);
  function f6(e5) {
    var y2;
    let b3 = e5();
    if (b3 === T.Success && t3.activation.value === "auto") {
      let S4 = (y2 = m(n4)) == null ? void 0 : y2.activeElement, R4 = t3.tabs.value.findIndex(($2) => o2($2) === S4);
      R4 !== -1 && t3.setSelectedIndex(R4);
    }
    return b3;
  }
  function h3(e5) {
    let b3 = t3.tabs.value.map((S4) => o2(S4)).filter(Boolean);
    if (e5.key === o.Space || e5.key === o.Enter) {
      e5.preventDefault(), e5.stopPropagation(), t3.setSelectedIndex(x4.value);
      return;
    }
    switch (e5.key) {
      case o.Home:
      case o.PageUp:
        return e5.preventDefault(), e5.stopPropagation(), f6(() => O2(b3, N.First));
      case o.End:
      case o.PageDown:
        return e5.preventDefault(), e5.stopPropagation(), f6(() => O2(b3, N.Last));
    }
    if (f6(() => u(t3.orientation.value, { vertical() {
      return e5.key === o.ArrowUp ? O2(b3, N.Previous | N.WrapAround) : e5.key === o.ArrowDown ? O2(b3, N.Next | N.WrapAround) : T.Error;
    }, horizontal() {
      return e5.key === o.ArrowLeft ? O2(b3, N.Previous | N.WrapAround) : e5.key === o.ArrowRight ? O2(b3, N.Next | N.WrapAround) : T.Error;
    } })) === T.Success)
      return e5.preventDefault();
  }
  let l4 = ref(false);
  function r4() {
    var e5;
    l4.value || (l4.value = true, !a4.disabled && ((e5 = o2(n4)) == null || e5.focus(), t3.setSelectedIndex(x4.value), t2(() => {
      l4.value = false;
    })));
  }
  function i2(e5) {
    e5.preventDefault();
  }
  let D3 = b(computed(() => ({ as: a4.as, type: o4.type })), n4);
  return () => {
    var R4;
    let e5 = { selected: d8.value }, { id: b3, ...y2 } = a4, S4 = { ref: n4, onKeydown: h3, onMousedown: i2, onClick: r4, id: b3, role: "tab", type: D3.value, "aria-controls": (R4 = o2(t3.panels.value[x4.value])) == null ? void 0 : R4.id, "aria-selected": d8.value, tabIndex: d8.value ? 0 : -1, disabled: a4.disabled ? true : void 0 };
    return P({ ourProps: S4, theirProps: y2, slot: e5, attrs: o4, slots: s4, name: "Tab" });
  };
} });
var be3 = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a4, { slots: o4, attrs: s4 }) {
  let p7 = L2("TabPanels");
  return () => {
    let t3 = { selectedIndex: p7.selectedIndex.value };
    return P({ theirProps: a4, ourProps: {}, slot: t3, attrs: s4, slots: o4, name: "TabPanels" });
  };
} });
var pe2 = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t()}` } }, setup(a4, { attrs: o4, slots: s4, expose: p7 }) {
  let t3 = L2("TabPanel"), n4 = ref(null);
  p7({ el: n4, $el: n4 }), onMounted(() => t3.registerPanel(n4)), onUnmounted(() => t3.unregisterPanel(n4));
  let u6 = inject(k2), g7 = computed(() => {
    if (u6.value) {
      let f6 = u6.value.panels.indexOf(a4.id);
      return f6 === -1 ? u6.value.panels.push(a4.id) - 1 : f6;
    }
    return -1;
  }), x4 = computed(() => {
    let f6 = t3.panels.value.indexOf(n4);
    return f6 === -1 ? g7.value : f6;
  }), d8 = computed(() => x4.value === t3.selectedIndex.value);
  return () => {
    var i2;
    let f6 = { selected: d8.value }, { id: h3, ...l4 } = a4, r4 = { ref: n4, id: h3, role: "tabpanel", "aria-labelledby": (i2 = o2(t3.tabs.value[x4.value])) == null ? void 0 : i2.id, tabIndex: d8.value ? 0 : -1 };
    return !d8.value && a4.unmount && !a4.static ? h(f4, { as: "span", ...r4 }) : P({ ourProps: r4, theirProps: l4, slot: f6, attrs: o4, slots: s4, features: R.Static | R.RenderStrategy, visible: d8.value, name: "TabPanel" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/once.js
function l3(r4) {
  let e5 = { called: false };
  return (...t3) => {
    if (!e5.called)
      return e5.called = true, r4(...t3);
  };
}

// node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function m2(e5, ...t3) {
  e5 && t3.length > 0 && e5.classList.add(...t3);
}
function d6(e5, ...t3) {
  e5 && t3.length > 0 && e5.classList.remove(...t3);
}
var g6 = ((i2) => (i2.Finished = "finished", i2.Cancelled = "cancelled", i2))(g6 || {});
function F2(e5, t3) {
  let i2 = s3();
  if (!e5)
    return i2.dispose;
  let { transitionDuration: n4, transitionDelay: a4 } = getComputedStyle(e5), [l4, s4] = [n4, a4].map((o4) => {
    let [u6 = 0] = o4.split(",").filter(Boolean).map((r4) => r4.includes("ms") ? parseFloat(r4) : parseFloat(r4) * 1e3).sort((r4, c3) => c3 - r4);
    return u6;
  });
  return l4 !== 0 ? i2.setTimeout(() => t3("finished"), l4 + s4) : t3("finished"), i2.add(() => t3("cancelled")), i2.dispose;
}
function L3(e5, t3, i2, n4, a4, l4) {
  let s4 = s3(), o4 = l4 !== void 0 ? l3(l4) : () => {
  };
  return d6(e5, ...a4), m2(e5, ...t3, ...i2), s4.nextFrame(() => {
    d6(e5, ...i2), m2(e5, ...n4), s4.add(F2(e5, (u6) => (d6(e5, ...n4, ...t3), m2(e5, ...a4), o4(u6))));
  }), s4.add(() => d6(e5, ...t3, ...i2, ...n4, ...a4)), s4.add(() => o4("cancelled")), s4.dispose;
}

// node_modules/@headlessui/vue/dist/components/transitions/transition.js
function d7(e5 = "") {
  return e5.split(" ").filter((t3) => t3.trim().length > 1);
}
var B4 = Symbol("TransitionContext");
var ae2 = ((a4) => (a4.Visible = "visible", a4.Hidden = "hidden", a4))(ae2 || {});
function le3() {
  return inject(B4, null) !== null;
}
function ie() {
  let e5 = inject(B4, null);
  if (e5 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e5;
}
function se2() {
  let e5 = inject(F3, null);
  if (e5 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e5;
}
var F3 = Symbol("NestingContext");
function w4(e5) {
  return "children" in e5 ? w4(e5.children) : e5.value.filter(({ state: t3 }) => t3 === "visible").length > 0;
}
function K3(e5) {
  let t3 = ref([]), a4 = ref(false);
  onMounted(() => a4.value = true), onUnmounted(() => a4.value = false);
  function s4(r4, n4 = O.Hidden) {
    let l4 = t3.value.findIndex(({ id: i2 }) => i2 === r4);
    l4 !== -1 && (u(n4, { [O.Unmount]() {
      t3.value.splice(l4, 1);
    }, [O.Hidden]() {
      t3.value[l4].state = "hidden";
    } }), !w4(t3) && a4.value && (e5 == null || e5()));
  }
  function v3(r4) {
    let n4 = t3.value.find(({ id: l4 }) => l4 === r4);
    return n4 ? n4.state !== "visible" && (n4.state = "visible") : t3.value.push({ id: r4, state: "visible" }), () => s4(r4, O.Unmount);
  }
  return { children: t3, register: v3, unregister: s4 };
}
var _2 = R.RenderStrategy;
var oe3 = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e5, { emit: t3, attrs: a4, slots: s4, expose: v3 }) {
  if (!le3() && f2())
    return () => h(fe4, { ...e5, onBeforeEnter: () => t3("beforeEnter"), onAfterEnter: () => t3("afterEnter"), onBeforeLeave: () => t3("beforeLeave"), onAfterLeave: () => t3("afterLeave") }, s4);
  let r4 = ref(null), n4 = ref("visible"), l4 = computed(() => e5.unmount ? O.Unmount : O.Hidden);
  v3({ el: r4, $el: r4 });
  let { show: i2, appear: x4 } = ie(), { register: g7, unregister: p7 } = se2(), R4 = { value: true }, m3 = t(), S4 = { value: false }, N2 = K3(() => {
    S4.value || (n4.value = "hidden", p7(m3), t3("afterLeave"));
  });
  onMounted(() => {
    let o4 = g7(m3);
    onUnmounted(o4);
  }), watchEffect(() => {
    if (l4.value === O.Hidden && !!m3) {
      if (i2 && n4.value !== "visible") {
        n4.value = "visible";
        return;
      }
      u(n4.value, { ["hidden"]: () => p7(m3), ["visible"]: () => g7(m3) });
    }
  });
  let k3 = d7(e5.enter), $2 = d7(e5.enterFrom), q2 = d7(e5.enterTo), O3 = d7(e5.entered), z = d7(e5.leave), G2 = d7(e5.leaveFrom), J = d7(e5.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (n4.value === "visible") {
        let o4 = o2(r4);
        if (o4 instanceof Comment && o4.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Q2(o4) {
    let c3 = R4.value && !x4.value, u6 = o2(r4);
    !u6 || !(u6 instanceof HTMLElement) || c3 || (S4.value = true, i2.value && t3("beforeEnter"), i2.value || t3("beforeLeave"), o4(i2.value ? L3(u6, k3, $2, q2, O3, (C) => {
      S4.value = false, C === g6.Finished && t3("afterEnter");
    }) : L3(u6, z, G2, J, O3, (C) => {
      S4.value = false, C === g6.Finished && (w4(N2) || (n4.value = "hidden", p7(m3), t3("afterLeave")));
    })));
  }
  return onMounted(() => {
    watch([i2], (o4, c3, u6) => {
      Q2(u6), R4.value = false;
    }, { immediate: true });
  }), provide(F3, N2), c(computed(() => u(n4.value, { ["visible"]: l.Open, ["hidden"]: l.Closed }))), () => {
    let { appear: o4, show: c3, enter: u6, enterFrom: C, enterTo: de5, entered: ve2, leave: pe3, leaveFrom: me, leaveTo: Te, ...W2 } = e5;
    return P({ theirProps: W2, ourProps: { ref: r4 }, slot: {}, slots: s4, attrs: a4, features: _2, visible: n4.value === "visible", name: "TransitionChild" });
  };
} });
var ue2 = oe3;
var fe4 = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e5, { emit: t3, attrs: a4, slots: s4 }) {
  let v3 = p2(), r4 = computed(() => e5.show === null && v3 !== null ? u(v3.value, { [l.Open]: true, [l.Closed]: false }) : e5.show);
  watchEffect(() => {
    if (![true, false].includes(r4.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let n4 = ref(r4.value ? "visible" : "hidden"), l4 = K3(() => {
    n4.value = "hidden";
  }), i2 = ref(true), x4 = { show: r4, appear: computed(() => e5.appear || !i2.value) };
  return onMounted(() => {
    watchEffect(() => {
      i2.value = false, r4.value ? n4.value = "visible" : w4(l4) || (n4.value = "hidden");
    });
  }), provide(F3, l4), provide(B4, x4), () => {
    let g7 = w(e5, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), p7 = { unmount: e5.unmount };
    return P({ ourProps: { ...p7, as: "template" }, theirProps: {}, slot: {}, slots: { ...s4, default: () => [h(ue2, { onBeforeEnter: () => t3("beforeEnter"), onAfterEnter: () => t3("afterEnter"), onBeforeLeave: () => t3("beforeLeave"), onAfterLeave: () => t3("afterLeave"), ...a4, ...p7, ...g7 }, s4.default)] }, attrs: {}, features: _2, visible: n4.value === "visible", name: "Transition" });
  };
} });
export {
  je as Combobox,
  He as ComboboxButton,
  Ne as ComboboxInput,
  Be as ComboboxLabel,
  $e as ComboboxOption,
  Ke as ComboboxOptions,
  Ue as Dialog,
  qe as DialogBackdrop,
  Je as DialogDescription,
  _e as DialogOverlay,
  Ge as DialogPanel,
  ze as DialogTitle,
  Q as Disclosure,
  V2 as DisclosureButton,
  X as DisclosurePanel,
  le as FocusTrap,
  Ee as Listbox,
  Ae as ListboxButton,
  je2 as ListboxLabel,
  Be2 as ListboxOption,
  Fe as ListboxOptions,
  ge as Menu,
  Se as MenuButton,
  Me as MenuItem,
  be2 as MenuItems,
  Pe as Popover,
  Be3 as PopoverButton,
  Ke2 as PopoverGroup,
  Le as PopoverOverlay,
  He2 as PopoverPanel,
  R2 as Portal,
  L as PortalGroup,
  Oe as RadioGroup,
  we as RadioGroupDescription,
  Ee2 as RadioGroupLabel,
  ke as RadioGroupOption,
  ue as Switch,
  de3 as SwitchDescription,
  oe2 as SwitchGroup,
  ae as SwitchLabel,
  ce4 as Tab,
  de4 as TabGroup,
  fe3 as TabList,
  pe2 as TabPanel,
  be3 as TabPanels,
  oe3 as TransitionChild,
  fe4 as TransitionRoot
};
//# sourceMappingURL=@headlessui_vue.js.map
