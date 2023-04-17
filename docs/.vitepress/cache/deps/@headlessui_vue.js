import {
  Fragment,
  Teleport,
  cloneVNode,
  computed,
  defineComponent,
  h,
  inject,
  nextTick,
  normalizeClass,
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
} from "./chunk-R647EDCJ.js";
import "./chunk-RSJERJUL.js";

// node_modules/@headlessui/vue/dist/utils/match.js
function u(r4, n6, ...a6) {
  if (r4 in n6) {
    let e4 = n6[r4];
    return typeof e4 == "function" ? e4(...a6) : e4;
  }
  let t5 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n6).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t5, u), t5;
}

// node_modules/@headlessui/vue/dist/utils/render.js
var N = ((o3) => (o3[o3.None = 0] = "None", o3[o3.RenderStrategy = 1] = "RenderStrategy", o3[o3.Static = 2] = "Static", o3))(N || {});
var S = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(S || {});
function H({ visible: r4 = true, features: t5 = 0, ourProps: e4, theirProps: o3, ...i4 }) {
  var a6;
  let n6 = j(o3, e4), l4 = Object.assign(i4, { props: n6 });
  if (r4 || t5 & 2 && n6.static)
    return y(l4);
  if (t5 & 1) {
    let d9 = (a6 = n6.unmount) == null || a6 ? 0 : 1;
    return u(d9, { [0]() {
      return null;
    }, [1]() {
      return y({ ...i4, props: { ...n6, hidden: true, style: { display: "none" } } });
    } });
  }
  return y(l4);
}
function y({ props: r4, attrs: t5, slots: e4, slot: o3, name: i4 }) {
  var m5, h3;
  let { as: n6, ...l4 } = T(r4, ["unmount", "static"]), a6 = (m5 = e4.default) == null ? void 0 : m5.call(e4, o3), d9 = {};
  if (o3) {
    let u6 = false, c5 = [];
    for (let [p7, f5] of Object.entries(o3))
      typeof f5 == "boolean" && (u6 = true), f5 === true && c5.push(p7);
    u6 && (d9["data-headlessui-state"] = c5.join(" "));
  }
  if (n6 === "template") {
    if (a6 = b(a6 != null ? a6 : []), Object.keys(l4).length > 0 || Object.keys(t5).length > 0) {
      let [u6, ...c5] = a6 != null ? a6 : [];
      if (!v(u6) || c5.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${i4} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(l4).concat(Object.keys(t5)).map((s3) => s3.trim()).filter((s3, g4, R3) => R3.indexOf(s3) === g4).sort((s3, g4) => s3.localeCompare(g4)).map((s3) => `  - ${s3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((s3) => `  - ${s3}`).join(`
`)].join(`
`));
      let p7 = j((h3 = u6.props) != null ? h3 : {}, l4), f5 = cloneVNode(u6, p7);
      for (let s3 in p7)
        s3.startsWith("on") && (f5.props || (f5.props = {}), f5.props[s3] = p7[s3]);
      return f5;
    }
    return Array.isArray(a6) && a6.length === 1 ? a6[0] : a6;
  }
  return h(n6, Object.assign({}, l4, d9), { default: () => a6 });
}
function b(r4) {
  return r4.flatMap((t5) => t5.type === Fragment ? b(t5.children) : [t5]);
}
function j(...r4) {
  var o3;
  if (r4.length === 0)
    return {};
  if (r4.length === 1)
    return r4[0];
  let t5 = {}, e4 = {};
  for (let i4 of r4)
    for (let n6 in i4)
      n6.startsWith("on") && typeof i4[n6] == "function" ? ((o3 = e4[n6]) != null || (e4[n6] = []), e4[n6].push(i4[n6])) : t5[n6] = i4[n6];
  if (t5.disabled || t5["aria-disabled"])
    return Object.assign(t5, Object.fromEntries(Object.keys(e4).map((i4) => [i4, void 0])));
  for (let i4 in e4)
    Object.assign(t5, { [i4](n6, ...l4) {
      let a6 = e4[i4];
      for (let d9 of a6) {
        if (n6 instanceof Event && n6.defaultPrevented)
          return;
        d9(n6, ...l4);
      }
    } });
  return t5;
}
function K(r4) {
  let t5 = Object.assign({}, r4);
  for (let e4 in t5)
    t5[e4] === void 0 && delete t5[e4];
  return t5;
}
function T(r4, t5 = []) {
  let e4 = Object.assign({}, r4);
  for (let o3 of t5)
    o3 in e4 && delete e4[o3];
  return e4;
}
function v(r4) {
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
var a = ((e4) => (e4[e4.First = 0] = "First", e4[e4.Previous = 1] = "Previous", e4[e4.Next = 2] = "Next", e4[e4.Last = 3] = "Last", e4[e4.Specific = 4] = "Specific", e4[e4.Nothing = 5] = "Nothing", e4))(a || {});
function x(r4, n6) {
  let t5 = n6.resolveItems();
  if (t5.length <= 0)
    return null;
  let l4 = n6.resolveActiveIndex(), s3 = l4 != null ? l4 : -1, d9 = (() => {
    switch (r4.focus) {
      case 0:
        return t5.findIndex((e4) => !n6.resolveDisabled(e4));
      case 1: {
        let e4 = t5.slice().reverse().findIndex((i4, c5, u6) => s3 !== -1 && u6.length - c5 - 1 >= s3 ? false : !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t5.length - 1 - e4;
      }
      case 2:
        return t5.findIndex((e4, i4) => i4 <= s3 ? false : !n6.resolveDisabled(e4));
      case 3: {
        let e4 = t5.slice().reverse().findIndex((i4) => !n6.resolveDisabled(i4));
        return e4 === -1 ? e4 : t5.length - 1 - e4;
      }
      case 4:
        return t5.findIndex((e4) => n6.resolveId(e4) === r4.id);
      case 5:
        return null;
      default:
        f(r4);
    }
  })();
  return d9 === -1 ? l4 : d9;
}

// node_modules/@headlessui/vue/dist/utils/dom.js
function o2(n6) {
  var l4;
  return n6 == null || n6.value == null ? null : (l4 = n6.value.$el) != null ? l4 : n6.value;
}

// node_modules/@headlessui/vue/dist/internal/open-closed.js
var n2 = Symbol("Context");
var l = ((e4) => (e4[e4.Open = 1] = "Open", e4[e4.Closed = 2] = "Closed", e4[e4.Closing = 4] = "Closing", e4[e4.Opening = 8] = "Opening", e4))(l || {});
function C() {
  return p() !== null;
}
function p() {
  return inject(n2, null);
}
function c(o3) {
  provide(n2, o3);
}

// node_modules/@headlessui/vue/dist/hooks/use-resolve-button-type.js
function r(t5, e4) {
  if (t5)
    return t5;
  let n6 = e4 != null ? e4 : "button";
  if (typeof n6 == "string" && n6.toLowerCase() === "button")
    return "button";
}
function b2(t5, e4) {
  let n6 = ref(r(t5.value.type, t5.value.as));
  return onMounted(() => {
    n6.value = r(t5.value.type, t5.value.as);
  }), watchEffect(() => {
    var o3;
    n6.value || o2(e4) && o2(e4) instanceof HTMLButtonElement && !((o3 = o2(e4)) != null && o3.hasAttribute("type")) && (n6.value = "button");
  }), n6;
}

// node_modules/@headlessui/vue/dist/utils/env.js
var i = Object.defineProperty;
var d = (t5, e4, r4) => e4 in t5 ? i(t5, e4, { enumerable: true, configurable: true, writable: true, value: r4 }) : t5[e4] = r4;
var n3 = (t5, e4, r4) => (d(t5, typeof e4 != "symbol" ? e4 + "" : e4, r4), r4);
var s = class {
  constructor() {
    n3(this, "current", this.detect());
    n3(this, "currentId", 0);
  }
  set(e4) {
    this.current !== e4 && (this.currentId = 0, this.current = e4);
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
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
};
var c2 = new s();

// node_modules/@headlessui/vue/dist/utils/owner.js
function m(r4) {
  if (c2.isServer)
    return null;
  if (r4 instanceof Node)
    return r4.ownerDocument;
  if (r4 != null && r4.hasOwnProperty("value")) {
    let n6 = o2(r4);
    if (n6)
      return n6.ownerDocument;
  }
  return document;
}

// node_modules/@headlessui/vue/dist/hooks/use-tree-walker.js
function p2({ container: e4, accept: t5, walk: d9, enabled: o3 }) {
  watchEffect(() => {
    let r4 = e4.value;
    if (!r4 || o3 !== void 0 && !o3.value)
      return;
    let l4 = m(e4);
    if (!l4)
      return;
    let c5 = Object.assign((f5) => t5(f5), { acceptNode: t5 }), n6 = l4.createTreeWalker(r4, NodeFilter.SHOW_ELEMENT, c5, false);
    for (; n6.nextNode(); )
      d9(n6.currentNode);
  });
}

// node_modules/@headlessui/vue/dist/utils/focus-management.js
var f2 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e4) => `${e4}:not([tabindex='-1'])`).join(",");
var N2 = ((r4) => (r4[r4.First = 1] = "First", r4[r4.Previous = 2] = "Previous", r4[r4.Next = 4] = "Next", r4[r4.Last = 8] = "Last", r4[r4.WrapAround = 16] = "WrapAround", r4[r4.NoScroll = 32] = "NoScroll", r4))(N2 || {});
var T2 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(T2 || {});
var h2 = ((n6) => (n6[n6.Previous = -1] = "Previous", n6[n6.Next = 1] = "Next", n6))(h2 || {});
function d2(e4 = document.body) {
  return e4 == null ? [] : Array.from(e4.querySelectorAll(f2)).sort((t5, n6) => Math.sign((t5.tabIndex || Number.MAX_SAFE_INTEGER) - (n6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var F = ((n6) => (n6[n6.Strict = 0] = "Strict", n6[n6.Loose = 1] = "Loose", n6))(F || {});
function S2(e4, t5 = 0) {
  var n6;
  return e4 === ((n6 = m(e4)) == null ? void 0 : n6.body) ? false : u(t5, { [0]() {
    return e4.matches(f2);
  }, [1]() {
    let l4 = e4;
    for (; l4 !== null; ) {
      if (l4.matches(f2))
        return true;
      l4 = l4.parentElement;
    }
    return false;
  } });
}
function v2(e4) {
  let t5 = m(e4);
  nextTick(() => {
    t5 && !S2(t5.activeElement, 0) && H2(e4);
  });
}
function H2(e4) {
  e4 == null || e4.focus({ preventScroll: true });
}
var w = ["textarea", "input"].join(",");
function A(e4) {
  var t5, n6;
  return (n6 = (t5 = e4 == null ? void 0 : e4.matches) == null ? void 0 : t5.call(e4, w)) != null ? n6 : false;
}
function I(e4, t5 = (n6) => n6) {
  return e4.slice().sort((n6, l4) => {
    let o3 = t5(n6), i4 = t5(l4);
    if (o3 === null || i4 === null)
      return 0;
    let r4 = o3.compareDocumentPosition(i4);
    return r4 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r4 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function D(e4, t5) {
  return O(d2(), t5, { relativeTo: e4 });
}
function O(e4, t5, { sorted: n6 = true, relativeTo: l4 = null, skipElements: o3 = [] } = {}) {
  var m5;
  let i4 = (m5 = Array.isArray(e4) ? e4.length > 0 ? e4[0].ownerDocument : document : e4 == null ? void 0 : e4.ownerDocument) != null ? m5 : document, r4 = Array.isArray(e4) ? n6 ? I(e4) : e4 : d2(e4);
  o3.length > 0 && r4.length > 1 && (r4 = r4.filter((s3) => !o3.includes(s3))), l4 = l4 != null ? l4 : i4.activeElement;
  let x5 = (() => {
    if (t5 & 5)
      return 1;
    if (t5 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p7 = (() => {
    if (t5 & 1)
      return 0;
    if (t5 & 2)
      return Math.max(0, r4.indexOf(l4)) - 1;
    if (t5 & 4)
      return Math.max(0, r4.indexOf(l4)) + 1;
    if (t5 & 8)
      return r4.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M2 = t5 & 32 ? { preventScroll: true } : {}, c5 = 0, a6 = r4.length, u6;
  do {
    if (c5 >= a6 || c5 + a6 <= 0)
      return 0;
    let s3 = p7 + c5;
    if (t5 & 16)
      s3 = (s3 + a6) % a6;
    else {
      if (s3 < 0)
        return 3;
      if (s3 >= a6)
        return 1;
    }
    u6 = r4[s3], u6 == null || u6.focus(M2), c5 += x5;
  } while (u6 !== i4.activeElement);
  return t5 & 6 && A(u6) && u6.select(), u6.hasAttribute("tabindex") || u6.setAttribute("tabindex", "0"), 2;
}

// node_modules/@headlessui/vue/dist/hooks/use-document-event.js
function u2(e4, t5, n6) {
  c2.isServer || watchEffect((o3) => {
    document.addEventListener(e4, t5, n6), o3(() => document.removeEventListener(e4, t5, n6));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-outside-click.js
function y2(f5, m5, i4 = computed(() => true)) {
  function a6(e4, u6) {
    if (!i4.value || e4.defaultPrevented)
      return;
    let n6 = u6(e4);
    if (n6 === null || !n6.getRootNode().contains(n6))
      return;
    let c5 = function o3(t5) {
      return typeof t5 == "function" ? o3(t5()) : Array.isArray(t5) || t5 instanceof Set ? t5 : [t5];
    }(f5);
    for (let o3 of c5) {
      if (o3 === null)
        continue;
      let t5 = o3 instanceof HTMLElement ? o3 : o2(o3);
      if (t5 != null && t5.contains(n6) || e4.composed && e4.composedPath().includes(t5))
        return;
    }
    return !S2(n6, F.Loose) && n6.tabIndex !== -1 && e4.preventDefault(), m5(e4, n6);
  }
  let r4 = ref(null);
  u2("mousedown", (e4) => {
    var u6, n6;
    i4.value && (r4.value = ((n6 = (u6 = e4.composedPath) == null ? void 0 : u6.call(e4)) == null ? void 0 : n6[0]) || e4.target);
  }, true), u2("click", (e4) => {
    r4.value && (a6(e4, () => r4.value), r4.value = null);
  }, true), u2("blur", (e4) => a6(e4, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/vue/dist/internal/hidden.js
var a2 = ((e4) => (e4[e4.None = 1] = "None", e4[e4.Focusable = 2] = "Focusable", e4[e4.Hidden = 4] = "Hidden", e4))(a2 || {});
var f3 = defineComponent({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(r4, { slots: t5, attrs: d9 }) {
  return () => {
    let { features: e4, ...o3 } = r4, n6 = { "aria-hidden": (e4 & 2) === 2 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(e4 & 4) === 4 && (e4 & 2) !== 2 && { display: "none" } } };
    return H({ ourProps: n6, theirProps: o3, slot: {}, attrs: d9, slots: t5, name: "Hidden" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/form.js
function e2(n6 = {}, r4 = null, t5 = []) {
  for (let [i4, o3] of Object.entries(n6))
    f4(t5, s2(r4, i4), o3);
  return t5;
}
function s2(n6, r4) {
  return n6 ? n6 + "[" + r4 + "]" : r4;
}
function f4(n6, r4, t5) {
  if (Array.isArray(t5))
    for (let [i4, o3] of t5.entries())
      f4(n6, s2(r4, i4.toString()), o3);
  else
    t5 instanceof Date ? n6.push([r4, t5.toISOString()]) : typeof t5 == "boolean" ? n6.push([r4, t5 ? "1" : "0"]) : typeof t5 == "string" ? n6.push([r4, t5]) : typeof t5 == "number" ? n6.push([r4, `${t5}`]) : t5 == null ? n6.push([r4, ""]) : e2(t5, r4, n6);
}
function p3(n6) {
  var t5;
  let r4 = (t5 = n6 == null ? void 0 : n6.form) != null ? t5 : n6.closest("form");
  if (r4) {
    for (let i4 of r4.elements)
      if (i4.tagName === "INPUT" && i4.type === "submit" || i4.tagName === "BUTTON" && i4.type === "submit" || i4.nodeName === "INPUT" && i4.type === "image") {
        i4.click();
        return;
      }
  }
}

// node_modules/@headlessui/vue/dist/hooks/use-controllable.js
function d3(u6, e4, r4) {
  let i4 = ref(r4 == null ? void 0 : r4.value), f5 = computed(() => u6.value !== void 0);
  return [computed(() => f5.value ? u6.value : i4.value), function(t5) {
    return f5.value || (i4.value = t5), e4 == null ? void 0 : e4(t5);
  }];
}

// node_modules/@headlessui/vue/dist/hooks/use-tracked-pointer.js
function r2(e4) {
  return [e4.screenX, e4.screenY];
}
function u3() {
  let e4 = ref([-1, -1]);
  return { wasMoved(n6) {
    let t5 = r2(n6);
    return e4.value[0] === t5[0] && e4.value[1] === t5[1] ? false : (e4.value = t5, true);
  }, update(n6) {
    e4.value = r2(n6);
  } };
}

// node_modules/@headlessui/vue/dist/utils/platform.js
function t2() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i2() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n4() {
  return t2() || i2();
}

// node_modules/@headlessui/vue/dist/components/combobox/combobox.js
function be(o3, O3) {
  return o3 === O3;
}
var ve = ((s3) => (s3[s3.Open = 0] = "Open", s3[s3.Closed = 1] = "Closed", s3))(ve || {});
var ce = ((s3) => (s3[s3.Single = 0] = "Single", s3[s3.Multi = 1] = "Multi", s3))(ce || {});
var me = ((s3) => (s3[s3.Pointer = 0] = "Pointer", s3[s3.Other = 1] = "Other", s3))(me || {});
var G = Symbol("ComboboxContext");
function B(o3) {
  let O3 = inject(G, null);
  if (O3 === null) {
    let s3 = new Error(`<${o3} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s3, B), s3;
  }
  return O3;
}
var Ne = defineComponent({ name: "Combobox", emits: { "update:modelValue": (o3) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => be }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: false }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(o3, { slots: O3, attrs: s3, emit: P3 }) {
  let e4 = ref(1), t5 = ref(null), f5 = ref(null), I3 = ref(null), d9 = ref(null), c5 = ref({ static: false, hold: false }), x5 = ref([]), S5 = ref(null), R3 = ref(1), y3 = ref(false);
  function E6(n6 = (r4) => r4) {
    let r4 = S5.value !== null ? x5.value[S5.value] : null, p7 = I(n6(x5.value.slice()), (v4) => o2(v4.dataRef.domRef)), a6 = r4 ? p7.indexOf(r4) : null;
    return a6 === -1 && (a6 = null), { options: p7, activeOptionIndex: a6 };
  }
  let l4 = computed(() => o3.multiple ? 1 : 0), i4 = computed(() => o3.nullable), [b4, w3] = d3(computed(() => o3.modelValue === void 0 ? u(l4.value, { [1]: [], [0]: void 0 }) : o3.modelValue), (n6) => P3("update:modelValue", n6), computed(() => o3.defaultValue)), u6 = { comboboxState: e4, value: b4, mode: l4, compare(n6, r4) {
    if (typeof o3.by == "string") {
      let p7 = o3.by;
      return (n6 == null ? void 0 : n6[p7]) === (r4 == null ? void 0 : r4[p7]);
    }
    return o3.by(n6, r4);
  }, defaultValue: computed(() => o3.defaultValue), nullable: i4, inputRef: f5, labelRef: t5, buttonRef: I3, optionsRef: d9, disabled: computed(() => o3.disabled), options: x5, change(n6) {
    w3(n6);
  }, activeOptionIndex: computed(() => {
    if (y3.value && S5.value === null && x5.value.length > 0) {
      let n6 = x5.value.findIndex((r4) => !r4.dataRef.disabled);
      if (n6 !== -1)
        return n6;
    }
    return S5.value;
  }), activationTrigger: R3, optionsPropsRef: c5, closeCombobox() {
    y3.value = false, !o3.disabled && e4.value !== 1 && (e4.value = 1, S5.value = null);
  }, openCombobox() {
    if (y3.value = true, o3.disabled || e4.value === 0)
      return;
    let n6 = x5.value.findIndex((r4) => {
      let p7 = toRaw(r4.dataRef.value);
      return u(l4.value, { [0]: () => u6.compare(toRaw(u6.value.value), toRaw(p7)), [1]: () => toRaw(u6.value.value).some((v4) => u6.compare(toRaw(v4), toRaw(p7))) });
    });
    n6 !== -1 && (S5.value = n6), e4.value = 0;
  }, goToOption(n6, r4, p7) {
    if (y3.value = false, o3.disabled || d9.value && !c5.value.static && e4.value === 1)
      return;
    let a6 = E6();
    if (a6.activeOptionIndex === null) {
      let h3 = a6.options.findIndex((N4) => !N4.dataRef.disabled);
      h3 !== -1 && (a6.activeOptionIndex = h3);
    }
    let v4 = x(n6 === a.Specific ? { focus: a.Specific, id: r4 } : { focus: n6 }, { resolveItems: () => a6.options, resolveActiveIndex: () => a6.activeOptionIndex, resolveId: (h3) => h3.id, resolveDisabled: (h3) => h3.dataRef.disabled });
    S5.value = v4, R3.value = p7 != null ? p7 : 1, x5.value = a6.options;
  }, selectOption(n6) {
    let r4 = x5.value.find((a6) => a6.id === n6);
    if (!r4)
      return;
    let { dataRef: p7 } = r4;
    w3(u(l4.value, { [0]: () => p7.value, [1]: () => {
      let a6 = toRaw(u6.value.value).slice(), v4 = toRaw(p7.value), h3 = a6.findIndex((N4) => u6.compare(v4, toRaw(N4)));
      return h3 === -1 ? a6.push(v4) : a6.splice(h3, 1), a6;
    } }));
  }, selectActiveOption() {
    if (u6.activeOptionIndex.value === null)
      return;
    let { dataRef: n6, id: r4 } = x5.value[u6.activeOptionIndex.value];
    w3(u(l4.value, { [0]: () => n6.value, [1]: () => {
      let p7 = toRaw(u6.value.value).slice(), a6 = toRaw(n6.value), v4 = p7.findIndex((h3) => u6.compare(a6, toRaw(h3)));
      return v4 === -1 ? p7.push(a6) : p7.splice(v4, 1), p7;
    } })), u6.goToOption(a.Specific, r4);
  }, registerOption(n6, r4) {
    let p7 = { id: n6, dataRef: r4 }, a6 = E6((v4) => [...v4, p7]);
    if (S5.value === null) {
      let v4 = r4.value.value;
      u(l4.value, { [0]: () => u6.compare(toRaw(u6.value.value), toRaw(v4)), [1]: () => toRaw(u6.value.value).some((N4) => u6.compare(toRaw(N4), toRaw(v4))) }) && (a6.activeOptionIndex = a6.options.indexOf(p7));
    }
    x5.value = a6.options, S5.value = a6.activeOptionIndex, R3.value = 1;
  }, unregisterOption(n6) {
    var p7;
    u6.activeOptionIndex.value !== null && ((p7 = u6.options.value[u6.activeOptionIndex.value]) == null ? void 0 : p7.id) === n6 && (y3.value = true);
    let r4 = E6((a6) => {
      let v4 = a6.findIndex((h3) => h3.id === n6);
      return v4 !== -1 && a6.splice(v4, 1), a6;
    });
    x5.value = r4.options, S5.value = r4.activeOptionIndex, R3.value = 1;
  } };
  y2([f5, I3, d9], () => u6.closeCombobox(), computed(() => e4.value === 0)), provide(G, u6), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let F3 = computed(() => u6.activeOptionIndex.value === null ? null : x5.value[u6.activeOptionIndex.value].dataRef.value), D2 = computed(() => {
    var n6;
    return (n6 = o2(f5)) == null ? void 0 : n6.closest("form");
  });
  return onMounted(() => {
    watch([D2], () => {
      if (!D2.value || o3.defaultValue === void 0)
        return;
      function n6() {
        u6.change(o3.defaultValue);
      }
      return D2.value.addEventListener("reset", n6), () => {
        var r4;
        (r4 = D2.value) == null || r4.removeEventListener("reset", n6);
      };
    }, { immediate: true });
  }), () => {
    let { name: n6, disabled: r4, ...p7 } = o3, a6 = { open: e4.value === 0, disabled: r4, activeIndex: u6.activeOptionIndex.value, activeOption: F3.value, value: b4.value };
    return h(Fragment, [...n6 != null && b4.value != null ? e2({ [n6]: b4.value }).map(([v4, h3]) => h(f3, K({ features: a2.Hidden, key: v4, as: "input", type: "hidden", hidden: true, readOnly: true, name: v4, value: h3 }))) : [], H({ theirProps: { ...s3, ...T(p7, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: a6, slots: O3, attrs: s3, name: "Combobox" })]);
  };
} });
var He = defineComponent({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${t()}` } }, setup(o3, { attrs: O3, slots: s3 }) {
  let P3 = B("ComboboxLabel");
  function e4() {
    var t5;
    (t5 = o2(P3.inputRef)) == null || t5.focus({ preventScroll: true });
  }
  return () => {
    let t5 = { open: P3.comboboxState.value === 0, disabled: P3.disabled.value }, { id: f5, ...I3 } = o3, d9 = { id: f5, ref: P3.labelRef, onClick: e4 };
    return H({ ourProps: d9, theirProps: I3, slot: t5, attrs: O3, slots: s3, name: "ComboboxLabel" });
  };
} });
var Ke = defineComponent({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${t()}` } }, setup(o3, { attrs: O3, slots: s3, expose: P3 }) {
  let e4 = B("ComboboxButton");
  P3({ el: e4.buttonRef, $el: e4.buttonRef });
  function t5(d9) {
    e4.disabled.value || (e4.comboboxState.value === 0 ? e4.closeCombobox() : (d9.preventDefault(), e4.openCombobox()), nextTick(() => {
      var c5;
      return (c5 = o2(e4.inputRef)) == null ? void 0 : c5.focus({ preventScroll: true });
    }));
  }
  function f5(d9) {
    switch (d9.key) {
      case o.ArrowDown:
        d9.preventDefault(), d9.stopPropagation(), e4.comboboxState.value === 1 && e4.openCombobox(), nextTick(() => {
          var c5;
          return (c5 = e4.inputRef.value) == null ? void 0 : c5.focus({ preventScroll: true });
        });
        return;
      case o.ArrowUp:
        d9.preventDefault(), d9.stopPropagation(), e4.comboboxState.value === 1 && (e4.openCombobox(), nextTick(() => {
          e4.value.value || e4.goToOption(a.Last);
        })), nextTick(() => {
          var c5;
          return (c5 = e4.inputRef.value) == null ? void 0 : c5.focus({ preventScroll: true });
        });
        return;
      case o.Escape:
        if (e4.comboboxState.value !== 0)
          return;
        d9.preventDefault(), e4.optionsRef.value && !e4.optionsPropsRef.value.static && d9.stopPropagation(), e4.closeCombobox(), nextTick(() => {
          var c5;
          return (c5 = e4.inputRef.value) == null ? void 0 : c5.focus({ preventScroll: true });
        });
        return;
    }
  }
  let I3 = b2(computed(() => ({ as: o3.as, type: O3.type })), e4.buttonRef);
  return () => {
    var R3, y3;
    let d9 = { open: e4.comboboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: c5, ...x5 } = o3, S5 = { ref: e4.buttonRef, id: c5, type: I3.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (R3 = o2(e4.optionsRef)) == null ? void 0 : R3.id, "aria-expanded": e4.disabled.value ? void 0 : e4.comboboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(y3 = o2(e4.labelRef)) == null ? void 0 : y3.id, c5].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: f5, onClick: t5 };
    return H({ ourProps: S5, theirProps: x5, slot: d9, attrs: O3, slots: s3, name: "ComboboxButton" });
  };
} });
var $e = defineComponent({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${t()}` } }, emits: { change: (o3) => true }, setup(o3, { emit: O3, attrs: s3, slots: P3, expose: e4 }) {
  let t5 = B("ComboboxInput"), f5 = { value: false };
  e4({ el: t5.inputRef, $el: t5.inputRef });
  let I3 = computed(() => {
    var i4;
    let l4 = t5.value.value;
    return o2(t5.inputRef) ? typeof o3.displayValue != "undefined" && l4 !== void 0 ? (i4 = o3.displayValue(l4)) != null ? i4 : "" : typeof l4 == "string" ? l4 : "" : "";
  });
  onMounted(() => {
    watch([I3, t5.comboboxState], ([l4, i4], [b4, w3]) => {
      if (f5.value)
        return;
      let u6 = o2(t5.inputRef);
      u6 && (w3 === 0 && i4 === 1 || l4 !== b4) && (u6.value = l4);
    }, { immediate: true }), watch([t5.comboboxState], ([l4], [i4]) => {
      if (l4 === 0 && i4 === 1) {
        let b4 = o2(t5.inputRef);
        if (!b4)
          return;
        let w3 = b4.value, { selectionStart: u6, selectionEnd: F3, selectionDirection: D2 } = b4;
        b4.value = "", b4.value = w3, D2 !== null ? b4.setSelectionRange(u6, F3, D2) : b4.setSelectionRange(u6, F3);
      }
    });
  });
  let d9 = ref(false);
  function c5() {
    d9.value = true;
  }
  function x5() {
    setTimeout(() => {
      d9.value = false;
    });
  }
  function S5(l4) {
    switch (f5.value = true, l4.key) {
      case o.Backspace:
      case o.Delete:
        if (t5.mode.value !== 0 || !t5.nullable.value)
          return;
        let i4 = l4.currentTarget;
        requestAnimationFrame(() => {
          if (i4.value === "") {
            t5.change(null);
            let b4 = o2(t5.optionsRef);
            b4 && (b4.scrollTop = 0), t5.goToOption(a.Nothing);
          }
        });
        break;
      case o.Enter:
        if (f5.value = false, t5.comboboxState.value !== 0 || d9.value)
          return;
        if (l4.preventDefault(), l4.stopPropagation(), t5.activeOptionIndex.value === null) {
          t5.closeCombobox();
          return;
        }
        t5.selectActiveOption(), t5.mode.value === 0 && t5.closeCombobox();
        break;
      case o.ArrowDown:
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), u(t5.comboboxState.value, { [0]: () => t5.goToOption(a.Next), [1]: () => t5.openCombobox() });
      case o.ArrowUp:
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), u(t5.comboboxState.value, { [0]: () => t5.goToOption(a.Previous), [1]: () => {
          t5.openCombobox(), nextTick(() => {
            t5.value.value || t5.goToOption(a.Last);
          });
        } });
      case o.Home:
        if (l4.shiftKey)
          break;
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), t5.goToOption(a.First);
      case o.PageUp:
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), t5.goToOption(a.First);
      case o.End:
        if (l4.shiftKey)
          break;
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), t5.goToOption(a.Last);
      case o.PageDown:
        return f5.value = false, l4.preventDefault(), l4.stopPropagation(), t5.goToOption(a.Last);
      case o.Escape:
        if (f5.value = false, t5.comboboxState.value !== 0)
          return;
        l4.preventDefault(), t5.optionsRef.value && !t5.optionsPropsRef.value.static && l4.stopPropagation(), t5.closeCombobox();
        break;
      case o.Tab:
        if (f5.value = false, t5.comboboxState.value !== 0)
          return;
        t5.mode.value === 0 && t5.selectActiveOption(), t5.closeCombobox();
        break;
    }
  }
  function R3(l4) {
    t5.openCombobox(), O3("change", l4);
  }
  function y3() {
    f5.value = false;
  }
  let E6 = computed(() => {
    var l4, i4, b4, w3;
    return (w3 = (b4 = (i4 = o3.defaultValue) != null ? i4 : t5.defaultValue.value !== void 0 ? (l4 = o3.displayValue) == null ? void 0 : l4.call(o3, t5.defaultValue.value) : null) != null ? b4 : t5.defaultValue.value) != null ? w3 : "";
  });
  return () => {
    var D2, n6, r4, p7, a6, v4;
    let l4 = { open: t5.comboboxState.value === 0 }, { id: i4, displayValue: b4, onChange: w3, ...u6 } = o3, F3 = { "aria-controls": (D2 = t5.optionsRef.value) == null ? void 0 : D2.id, "aria-expanded": t5.disabled.value ? void 0 : t5.comboboxState.value === 0, "aria-activedescendant": t5.activeOptionIndex.value === null || (n6 = t5.options.value[t5.activeOptionIndex.value]) == null ? void 0 : n6.id, "aria-labelledby": (a6 = (r4 = o2(t5.labelRef)) == null ? void 0 : r4.id) != null ? a6 : (p7 = o2(t5.buttonRef)) == null ? void 0 : p7.id, "aria-autocomplete": "list", id: i4, onCompositionstart: c5, onCompositionend: x5, onKeydown: S5, onInput: R3, onBlur: y3, role: "combobox", type: (v4 = s3.type) != null ? v4 : "text", tabIndex: 0, ref: t5.inputRef, defaultValue: E6.value };
    return H({ ourProps: F3, theirProps: u6, slot: l4, attrs: s3, slots: P3, features: N.RenderStrategy | N.Static, name: "ComboboxInput" });
  };
} });
var Ue = defineComponent({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, hold: { type: [Boolean], default: false } }, setup(o3, { attrs: O3, slots: s3, expose: P3 }) {
  let e4 = B("ComboboxOptions"), t5 = `headlessui-combobox-options-${t()}`;
  P3({ el: e4.optionsRef, $el: e4.optionsRef }), watchEffect(() => {
    e4.optionsPropsRef.value.static = o3.static;
  }), watchEffect(() => {
    e4.optionsPropsRef.value.hold = o3.hold;
  });
  let f5 = p(), I3 = computed(() => f5 !== null ? (f5.value & l.Open) === l.Open : e4.comboboxState.value === 0);
  return p2({ container: computed(() => o2(e4.optionsRef)), enabled: computed(() => e4.comboboxState.value === 0), accept(d9) {
    return d9.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d9.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d9) {
    d9.setAttribute("role", "none");
  } }), () => {
    var S5, R3, y3;
    let d9 = { open: e4.comboboxState.value === 0 }, c5 = { "aria-labelledby": (y3 = (S5 = o2(e4.labelRef)) == null ? void 0 : S5.id) != null ? y3 : (R3 = o2(e4.buttonRef)) == null ? void 0 : R3.id, id: t5, ref: e4.optionsRef, role: "listbox", "aria-multiselectable": e4.mode.value === 1 ? true : void 0 }, x5 = T(o3, ["hold"]);
    return H({ ourProps: c5, theirProps: x5, slot: d9, attrs: O3, slots: s3, features: N.RenderStrategy | N.Static, visible: I3.value, name: "ComboboxOptions" });
  };
} });
var _e = defineComponent({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false } }, setup(o3, { slots: O3, attrs: s3, expose: P3 }) {
  let e4 = B("ComboboxOption"), t5 = `headlessui-combobox-option-${t()}`, f5 = ref(null);
  P3({ el: f5, $el: f5 });
  let I3 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t5 : false), d9 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(o3.value)), [1]: () => toRaw(e4.value.value).some((i4) => e4.compare(toRaw(i4), toRaw(o3.value))) })), c5 = computed(() => ({ disabled: o3.disabled, value: o3.value, domRef: f5 }));
  onMounted(() => e4.registerOption(t5, c5)), onUnmounted(() => e4.unregisterOption(t5)), watchEffect(() => {
    e4.comboboxState.value === 0 && I3.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var i4, b4;
      return (b4 = (i4 = o2(f5)) == null ? void 0 : i4.scrollIntoView) == null ? void 0 : b4.call(i4, { block: "nearest" });
    });
  });
  function x5(i4) {
    if (o3.disabled)
      return i4.preventDefault();
    e4.selectOption(t5), e4.mode.value === 0 && e4.closeCombobox(), n4() || requestAnimationFrame(() => {
      var b4;
      return (b4 = o2(e4.inputRef)) == null ? void 0 : b4.focus();
    });
  }
  function S5() {
    if (o3.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t5);
  }
  let R3 = u3();
  function y3(i4) {
    R3.update(i4);
  }
  function E6(i4) {
    R3.wasMoved(i4) && (o3.disabled || I3.value || e4.goToOption(a.Specific, t5, 0));
  }
  function l4(i4) {
    R3.wasMoved(i4) && (o3.disabled || I3.value && (e4.optionsPropsRef.value.hold || e4.goToOption(a.Nothing)));
  }
  return () => {
    let { disabled: i4 } = o3, b4 = { active: I3.value, selected: d9.value, disabled: i4 }, w3 = { id: t5, ref: f5, role: "option", tabIndex: i4 === true ? void 0 : -1, "aria-disabled": i4 === true ? true : void 0, "aria-selected": d9.value, disabled: void 0, onClick: x5, onFocus: S5, onPointerenter: y3, onMouseenter: y3, onPointermove: E6, onMousemove: E6, onPointerleave: l4, onMouseleave: l4 };
    return H({ ourProps: w3, theirProps: o3, slot: b4, attrs: s3, slots: O3, name: "ComboboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/hooks/use-window-event.js
function w2(e4, n6, t5) {
  c2.isServer || watchEffect((o3) => {
    window.addEventListener(e4, n6, t5), o3(() => window.removeEventListener(e4, n6, t5));
  });
}

// node_modules/@headlessui/vue/dist/hooks/use-tab-direction.js
var d4 = ((r4) => (r4[r4.Forwards = 0] = "Forwards", r4[r4.Backwards = 1] = "Backwards", r4))(d4 || {});
function n5() {
  let o3 = ref(0);
  return w2("keydown", (e4) => {
    e4.key === "Tab" && (o3.value = e4.shiftKey ? 1 : 0);
  }), o3;
}

// node_modules/@headlessui/vue/dist/hooks/use-event-listener.js
function E(n6, e4, o3, r4) {
  c2.isServer || watchEffect((t5) => {
    n6 = n6 != null ? n6 : window, n6.addEventListener(e4, o3, r4), t5(() => n6.removeEventListener(e4, o3, r4));
  });
}

// node_modules/@headlessui/vue/dist/utils/micro-task.js
function t3(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}

// node_modules/@headlessui/vue/dist/components/focus-trap/focus-trap.js
function B2(e4) {
  if (!e4)
    return /* @__PURE__ */ new Set();
  if (typeof e4 == "function")
    return new Set(e4());
  let t5 = /* @__PURE__ */ new Set();
  for (let l4 of e4.value) {
    let o3 = o2(l4);
    o3 instanceof HTMLElement && t5.add(o3);
  }
  return t5;
}
var A2 = ((n6) => (n6[n6.None = 1] = "None", n6[n6.InitialFocus = 2] = "InitialFocus", n6[n6.TabLock = 4] = "TabLock", n6[n6.FocusLock = 8] = "FocusLock", n6[n6.RestoreFocus = 16] = "RestoreFocus", n6[n6.All = 30] = "All", n6))(A2 || {});
var ie = Object.assign(defineComponent({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: ref(/* @__PURE__ */ new Set()) } }, inheritAttrs: false, setup(e4, { attrs: t5, slots: l4, expose: o3 }) {
  let r4 = ref(null);
  o3({ el: r4, $el: r4 });
  let i4 = computed(() => m(r4)), n6 = ref(false);
  onMounted(() => n6.value = true), onUnmounted(() => n6.value = false), x2({ ownerDocument: i4 }, computed(() => n6.value && Boolean(e4.features & 16)));
  let m5 = z({ ownerDocument: i4, container: r4, initialFocus: computed(() => e4.initialFocus) }, computed(() => n6.value && Boolean(e4.features & 2)));
  J({ ownerDocument: i4, container: r4, containers: e4.containers, previousActiveElement: m5 }, computed(() => n6.value && Boolean(e4.features & 8)));
  let f5 = n5();
  function u6(a6) {
    let d9 = o2(r4);
    if (!d9)
      return;
    ((R3) => R3())(() => {
      u(f5.value, { [d4.Forwards]: () => {
        O(d9, N2.First, { skipElements: [a6.relatedTarget] });
      }, [d4.Backwards]: () => {
        O(d9, N2.Last, { skipElements: [a6.relatedTarget] });
      } });
    });
  }
  let s3 = ref(false);
  function H4(a6) {
    a6.key === "Tab" && (s3.value = true, requestAnimationFrame(() => {
      s3.value = false;
    }));
  }
  function M2(a6) {
    if (!n6.value)
      return;
    let d9 = B2(e4.containers);
    o2(r4) instanceof HTMLElement && d9.add(o2(r4));
    let E6 = a6.relatedTarget;
    E6 instanceof HTMLElement && E6.dataset.headlessuiFocusGuard !== "true" && (N3(d9, E6) || (s3.value ? O(o2(r4), u(f5.value, { [d4.Forwards]: () => N2.Next, [d4.Backwards]: () => N2.Previous }) | N2.WrapAround, { relativeTo: a6.target }) : a6.target instanceof HTMLElement && H2(a6.target)));
  }
  return () => {
    let a6 = {}, d9 = { ref: r4, onKeydown: H4, onFocusout: M2 }, { features: E6, initialFocus: R3, containers: Q3, ...O3 } = e4;
    return h(Fragment, [Boolean(E6 & 4) && h(f3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable }), H({ ourProps: d9, theirProps: { ...t5, ...O3 }, slot: a6, attrs: t5, slots: l4, name: "FocusTrap" }), Boolean(E6 & 4) && h(f3, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: u6, features: a2.Focusable })]);
  };
} }), { features: A2 });
var L = [];
if (typeof window != "undefined" && typeof document != "undefined") {
  let e4 = function(t5) {
    t5.target instanceof HTMLElement && t5.target !== document.body && L[0] !== t5.target && (L.unshift(t5.target), L = L.filter((l4) => l4 != null && l4.isConnected), L.splice(10));
  };
  handle = e4;
  window.addEventListener("click", e4, { capture: true }), window.addEventListener("mousedown", e4, { capture: true }), window.addEventListener("focus", e4, { capture: true }), document.body.addEventListener("click", e4, { capture: true }), document.body.addEventListener("mousedown", e4, { capture: true }), document.body.addEventListener("focus", e4, { capture: true });
}
var handle;
function $(e4) {
  let t5 = ref(L.slice());
  return watch([e4], ([l4], [o3]) => {
    o3 === true && l4 === false ? t3(() => {
      t5.value.splice(0);
    }) : o3 === false && l4 === true && (t5.value = L.slice());
  }, { flush: "post" }), () => {
    var l4;
    return (l4 = t5.value.find((o3) => o3 != null && o3.isConnected)) != null ? l4 : null;
  };
}
function x2({ ownerDocument: e4 }, t5) {
  let l4 = $(t5);
  onMounted(() => {
    watchEffect(() => {
      var o3, r4;
      t5.value || ((o3 = e4.value) == null ? void 0 : o3.activeElement) === ((r4 = e4.value) == null ? void 0 : r4.body) && H2(l4());
    }, { flush: "post" });
  }), onUnmounted(() => {
    H2(l4());
  });
}
function z({ ownerDocument: e4, container: t5, initialFocus: l4 }, o3) {
  let r4 = ref(null), i4 = ref(false);
  return onMounted(() => i4.value = true), onUnmounted(() => i4.value = false), onMounted(() => {
    watch([t5, l4, o3], (n6, m5) => {
      if (n6.every((u6, s3) => (m5 == null ? void 0 : m5[s3]) === u6) || !o3.value)
        return;
      let f5 = o2(t5);
      f5 && t3(() => {
        var H4, M2;
        if (!i4.value)
          return;
        let u6 = o2(l4), s3 = (H4 = e4.value) == null ? void 0 : H4.activeElement;
        if (u6) {
          if (u6 === s3) {
            r4.value = s3;
            return;
          }
        } else if (f5.contains(s3)) {
          r4.value = s3;
          return;
        }
        u6 ? H2(u6) : O(f5, N2.First | N2.NoScroll) === T2.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), r4.value = (M2 = e4.value) == null ? void 0 : M2.activeElement;
      });
    }, { immediate: true, flush: "post" });
  }), r4;
}
function J({ ownerDocument: e4, container: t5, containers: l4, previousActiveElement: o3 }, r4) {
  var i4;
  E((i4 = e4.value) == null ? void 0 : i4.defaultView, "focus", (n6) => {
    if (!r4.value)
      return;
    let m5 = B2(l4);
    o2(t5) instanceof HTMLElement && m5.add(o2(t5));
    let f5 = o3.value;
    if (!f5)
      return;
    let u6 = n6.target;
    u6 && u6 instanceof HTMLElement ? N3(m5, u6) ? (o3.value = u6, H2(u6)) : (n6.preventDefault(), n6.stopPropagation(), H2(f5)) : H2(o3.value);
  }, true);
}
function N3(e4, t5) {
  for (let l4 of e4)
    if (l4.contains(t5))
      return true;
  return false;
}

// node_modules/@headlessui/vue/dist/hooks/use-inert.js
var i3 = /* @__PURE__ */ new Map();
var t4 = /* @__PURE__ */ new Map();
function E2(d9, f5 = ref(true)) {
  watchEffect((o3) => {
    var a6;
    if (!f5.value)
      return;
    let e4 = o2(d9);
    if (!e4)
      return;
    o3(function() {
      var u6;
      if (!e4)
        return;
      let r4 = (u6 = t4.get(e4)) != null ? u6 : 1;
      if (r4 === 1 ? t4.delete(e4) : t4.set(e4, r4 - 1), r4 !== 1)
        return;
      let n6 = i3.get(e4);
      n6 && (n6["aria-hidden"] === null ? e4.removeAttribute("aria-hidden") : e4.setAttribute("aria-hidden", n6["aria-hidden"]), e4.inert = n6.inert, i3.delete(e4));
    });
    let l4 = (a6 = t4.get(e4)) != null ? a6 : 0;
    t4.set(e4, l4 + 1), l4 === 0 && (i3.set(e4, { "aria-hidden": e4.getAttribute("aria-hidden"), inert: e4.inert }), e4.setAttribute("aria-hidden", "true"), e4.inert = true);
  });
}

// node_modules/@headlessui/vue/dist/internal/portal-force-root.js
var e3 = Symbol("ForcePortalRootContext");
function u4() {
  return inject(e3, false);
}
var P = defineComponent({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: false } }, setup(o3, { slots: t5, attrs: r4 }) {
  return provide(e3, o3.force), () => {
    let { force: f5, ...n6 } = o3;
    return H({ theirProps: n6, ourProps: {}, slot: {}, slots: t5, attrs: r4, name: "ForcePortalRoot" });
  };
} });

// node_modules/@headlessui/vue/dist/components/portal/portal.js
function c3(t5) {
  let r4 = m(t5);
  if (!r4) {
    if (t5 === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${t5}`);
  }
  let o3 = r4.getElementById("headlessui-portal-root");
  if (o3)
    return o3;
  let e4 = r4.createElement("div");
  return e4.setAttribute("id", "headlessui-portal-root"), r4.body.appendChild(e4);
}
var R = defineComponent({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(t5, { slots: r4, attrs: o3 }) {
  let e4 = ref(null), p7 = computed(() => m(e4)), n6 = u4(), u6 = inject(g, null), l4 = ref(n6 === true || u6 == null ? c3(e4.value) : u6.resolveTarget());
  return watchEffect(() => {
    n6 || u6 != null && (l4.value = u6.resolveTarget());
  }), onUnmounted(() => {
    var i4, m5;
    let a6 = (i4 = p7.value) == null ? void 0 : i4.getElementById("headlessui-portal-root");
    a6 && l4.value === a6 && l4.value.children.length <= 0 && ((m5 = l4.value.parentElement) == null || m5.removeChild(l4.value));
  }), () => {
    if (l4.value === null)
      return null;
    let a6 = { ref: e4, "data-headlessui-portal": "" };
    return h(Teleport, { to: l4.value }, H({ ourProps: a6, theirProps: t5, slot: {}, attrs: o3, slots: r4, name: "Portal" }));
  };
} });
var g = Symbol("PortalGroupContext");
var L2 = defineComponent({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(t5, { attrs: r4, slots: o3 }) {
  let e4 = reactive({ resolveTarget() {
    return t5.target;
  } });
  return provide(g, e4), () => {
    let { target: p7, ...n6 } = t5;
    return H({ theirProps: n6, ourProps: {}, slot: {}, attrs: r4, slots: o3, name: "PortalGroup" });
  };
} });

// node_modules/@headlessui/vue/dist/internal/stack-context.js
var u5 = Symbol("StackContext");
var p4 = ((e4) => (e4[e4.Add = 0] = "Add", e4[e4.Remove = 1] = "Remove", e4))(p4 || {});
function v3() {
  return inject(u5, () => {
  });
}
function S3({ type: o3, enabled: r4, element: e4, onUpdate: i4 }) {
  let a6 = v3();
  function t5(...n6) {
    i4 == null || i4(...n6), a6(...n6);
  }
  onMounted(() => {
    watch(r4, (n6, d9) => {
      n6 ? t5(0, o3, e4) : d9 === true && t5(1, o3, e4);
    }, { immediate: true, flush: "sync" });
  }), onUnmounted(() => {
    r4.value && t5(1, o3, e4);
  }), provide(u5, t5);
}

// node_modules/@headlessui/vue/dist/components/description/description.js
var p5 = Symbol("DescriptionContext");
function b3() {
  let t5 = inject(p5, null);
  if (t5 === null)
    throw new Error("Missing parent");
  return t5;
}
function M({ slot: t5 = ref({}), name: i4 = "Description", props: o3 = {} } = {}) {
  let e4 = ref([]);
  function s3(n6) {
    return e4.value.push(n6), () => {
      let r4 = e4.value.indexOf(n6);
      r4 !== -1 && e4.value.splice(r4, 1);
    };
  }
  return provide(p5, { register: s3, slot: t5, name: i4, props: o3 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var E3 = defineComponent({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${t()}` } }, setup(t5, { attrs: i4, slots: o3 }) {
  let e4 = b3();
  return onMounted(() => onUnmounted(e4.register(t5.id))), () => {
    let { name: s3 = "Description", slot: n6 = ref({}), props: r4 = {} } = e4, { id: d9, ...l4 } = t5, c5 = { ...Object.entries(r4).reduce((f5, [a6, g4]) => Object.assign(f5, { [a6]: unref(g4) }), {}), id: d9 };
    return H({ ourProps: c5, theirProps: l4, slot: n6.value, attrs: i4, slots: o3, name: s3 });
  };
} });

// node_modules/@headlessui/vue/dist/hooks/use-store.js
function m2(t5) {
  let e4 = shallowRef(t5.getSnapshot());
  return onUnmounted(t5.subscribe(() => {
    e4.value = t5.getSnapshot();
  })), e4;
}

// node_modules/@headlessui/vue/dist/utils/disposables.js
function r3() {
  let n6 = [], s3 = { addEventListener(e4, t5, i4, a6) {
    return e4.addEventListener(t5, i4, a6), s3.add(() => e4.removeEventListener(t5, i4, a6));
  }, requestAnimationFrame(...e4) {
    let t5 = requestAnimationFrame(...e4);
    s3.add(() => cancelAnimationFrame(t5));
  }, nextFrame(...e4) {
    s3.requestAnimationFrame(() => {
      s3.requestAnimationFrame(...e4);
    });
  }, setTimeout(...e4) {
    let t5 = setTimeout(...e4);
    s3.add(() => clearTimeout(t5));
  }, style(e4, t5, i4) {
    let a6 = e4.style.getPropertyValue(t5);
    return Object.assign(e4.style, { [t5]: i4 }), this.add(() => {
      Object.assign(e4.style, { [t5]: a6 });
    });
  }, group(e4) {
    let t5 = r3();
    return e4(t5), this.add(() => t5.dispose());
  }, add(e4) {
    return n6.push(e4), () => {
      let t5 = n6.indexOf(e4);
      if (t5 >= 0)
        for (let i4 of n6.splice(t5, 1))
          i4();
    };
  }, dispose() {
    for (let e4 of n6.splice(0))
      e4();
  } };
  return s3;
}

// node_modules/@headlessui/vue/dist/utils/store.js
function a3(o3, r4) {
  let t5 = o3(), n6 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t5;
  }, subscribe(e4) {
    return n6.add(e4), () => n6.delete(e4);
  }, dispatch(e4, ...s3) {
    let i4 = r4[e4].call(t5, ...s3);
    i4 && (t5 = i4, n6.forEach((c5) => c5()));
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function c4() {
  let o3;
  return { before({ doc: e4 }) {
    var l4;
    let n6 = e4.documentElement;
    o3 = ((l4 = e4.defaultView) != null ? l4 : window).innerWidth - n6.clientWidth;
  }, after({ doc: e4, d: n6 }) {
    let t5 = e4.documentElement, l4 = t5.clientWidth - t5.offsetWidth, r4 = o3 - l4;
    n6.style(t5, "paddingRight", `${r4}px`);
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/handle-ios-locking.js
function p6() {
  if (!t2())
    return {};
  let o3;
  return { before() {
    o3 = window.pageYOffset;
  }, after({ doc: r4, d: l4, meta: s3 }) {
    function i4(e4) {
      return s3.containers.flatMap((t5) => t5()).some((t5) => t5.contains(e4));
    }
    l4.style(r4.body, "marginTop", `-${o3}px`), window.scrollTo(0, 0);
    let n6 = null;
    l4.addEventListener(r4, "click", (e4) => {
      if (e4.target instanceof HTMLElement)
        try {
          let t5 = e4.target.closest("a");
          if (!t5)
            return;
          let { hash: c5 } = new URL(t5.href), a6 = r4.querySelector(c5);
          a6 && !i4(a6) && (n6 = a6);
        } catch {
        }
    }, true), l4.addEventListener(r4, "touchmove", (e4) => {
      e4.target instanceof HTMLElement && !i4(e4.target) && e4.preventDefault();
    }, { passive: false }), l4.add(() => {
      window.scrollTo(0, window.pageYOffset + o3), n6 && n6.isConnected && (n6.scrollIntoView({ block: "nearest" }), n6 = null);
    });
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/prevent-scroll.js
function l2() {
  return { before({ doc: e4, d: o3 }) {
    o3.style(e4.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/vue/dist/hooks/document-overflow/overflow-store.js
function m3(e4) {
  let n6 = {};
  for (let t5 of e4)
    Object.assign(n6, t5(n6));
  return n6;
}
var a4 = a3(() => /* @__PURE__ */ new Map(), { PUSH(e4, n6) {
  var o3;
  let t5 = (o3 = this.get(e4)) != null ? o3 : { doc: e4, count: 0, d: r3(), meta: /* @__PURE__ */ new Set() };
  return t5.count++, t5.meta.add(n6), this.set(e4, t5), this;
}, POP(e4, n6) {
  let t5 = this.get(e4);
  return t5 && (t5.count--, t5.meta.delete(n6)), this;
}, SCROLL_PREVENT({ doc: e4, d: n6, meta: t5 }) {
  let o3 = { doc: e4, d: n6, meta: m3(t5) }, c5 = [p6(), c4(), l2()];
  c5.forEach(({ before: r4 }) => r4 == null ? void 0 : r4(o3)), c5.forEach(({ after: r4 }) => r4 == null ? void 0 : r4(o3));
}, SCROLL_ALLOW({ d: e4 }) {
  e4.dispose();
}, TEARDOWN({ doc: e4 }) {
  this.delete(e4);
} });
a4.subscribe(() => {
  let e4 = a4.getSnapshot(), n6 = /* @__PURE__ */ new Map();
  for (let [t5] of e4)
    n6.set(t5, t5.documentElement.style.overflow);
  for (let t5 of e4.values()) {
    let o3 = n6.get(t5.doc) === "hidden", c5 = t5.count !== 0;
    (c5 && !o3 || !c5 && o3) && a4.dispatch(t5.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t5), t5.count === 0 && a4.dispatch("TEARDOWN", t5);
  }
});

// node_modules/@headlessui/vue/dist/hooks/document-overflow/use-document-overflow.js
function d5(t5, a6, n6) {
  let i4 = m2(a4), l4 = computed(() => {
    let e4 = t5.value ? i4.value.get(t5.value) : void 0;
    return e4 ? e4.count > 0 : false;
  });
  return watch([t5, a6], ([e4, m5], [r4], o3) => {
    if (!e4 || !m5)
      return;
    a4.dispatch("PUSH", e4, n6);
    let f5 = false;
    o3(() => {
      f5 || (a4.dispatch("POP", r4 != null ? r4 : e4, n6), f5 = true);
    });
  }, { immediate: true }), l4;
}

// node_modules/@headlessui/vue/dist/components/dialog/dialog.js
var ye = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(ye || {});
var I2 = Symbol("DialogContext");
function E4(r4) {
  let n6 = inject(I2, null);
  if (n6 === null) {
    let l4 = new Error(`<${r4} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, E4), l4;
  }
  return n6;
}
var H3 = "DC8F892D-2EBD-447C-A4C8-A03058436FF4";
var qe = defineComponent({ name: "Dialog", inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, open: { type: [Boolean, String], default: H3 }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${t()}` } }, emits: { close: (r4) => true }, setup(r4, { emit: n6, attrs: l4, slots: p7, expose: i4 }) {
  var N4;
  let a6 = ref(false);
  onMounted(() => {
    a6.value = true;
  });
  let f5 = ref(0), d9 = p(), m5 = computed(() => r4.open === H3 && d9 !== null ? (d9.value & l.Open) === l.Open : r4.open), v4 = ref(null), R3 = ref(null), O3 = computed(() => m(v4));
  if (i4({ el: v4, $el: v4 }), !(r4.open !== H3 || d9 !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof m5.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${m5.value === H3 ? void 0 : r4.open}`);
  let c5 = computed(() => a6.value && m5.value ? 0 : 1), k2 = computed(() => c5.value === 0), w3 = computed(() => f5.value > 1), $3 = inject(I2, null) !== null, G2 = computed(() => w3.value ? "parent" : "leaf"), j5 = computed(() => d9 !== null ? (d9.value & l.Closing) === l.Closing : false), V3 = computed(() => $3 || j5.value ? false : k2.value), J3 = computed(() => {
    var e4, t5, u6;
    return (u6 = Array.from((t5 = (e4 = O3.value) == null ? void 0 : e4.querySelectorAll("body > *")) != null ? t5 : []).find((s3) => s3.id === "headlessui-portal-root" ? false : s3.contains(o2(R3)) && s3 instanceof HTMLElement)) != null ? u6 : null;
  });
  E2(J3, V3);
  let Q3 = computed(() => w3.value ? true : k2.value), W2 = computed(() => {
    var e4, t5, u6;
    return (u6 = Array.from((t5 = (e4 = O3.value) == null ? void 0 : e4.querySelectorAll("[data-headlessui-portal]")) != null ? t5 : []).find((s3) => s3.contains(o2(R3)) && s3 instanceof HTMLElement)) != null ? u6 : null;
  });
  E2(W2, Q3), S3({ type: "Dialog", enabled: computed(() => c5.value === 0), element: v4, onUpdate: (e4, t5) => {
    if (t5 === "Dialog")
      return u(e4, { [p4.Add]: () => f5.value += 1, [p4.Remove]: () => f5.value -= 1 });
  } });
  let X3 = M({ name: "DialogDescription", slot: computed(() => ({ open: m5.value })) }), M2 = ref(null), y3 = { titleId: M2, panelRef: ref(null), dialogState: c5, setTitleId(e4) {
    M2.value !== e4 && (M2.value = e4);
  }, close() {
    n6("close", false);
  } };
  provide(I2, y3);
  function x5() {
    var t5, u6, s3;
    return [...Array.from((u6 = (t5 = O3.value) == null ? void 0 : t5.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? u6 : []).filter((g4) => !(g4 === document.body || g4 === document.head || !(g4 instanceof HTMLElement) || g4.contains(o2(R3)) || y3.panelRef.value && g4.contains(y3.panelRef.value))), (s3 = y3.panelRef.value) != null ? s3 : v4.value];
  }
  let Z2 = computed(() => !(!k2.value || w3.value));
  y2(() => x5(), (e4, t5) => {
    y3.close(), nextTick(() => t5 == null ? void 0 : t5.focus());
  }, Z2);
  let ee = computed(() => !(w3.value || c5.value !== 0));
  E((N4 = O3.value) == null ? void 0 : N4.defaultView, "keydown", (e4) => {
    ee.value && (e4.defaultPrevented || e4.key === o.Escape && (e4.preventDefault(), e4.stopPropagation(), y3.close()));
  });
  let te3 = computed(() => !(j5.value || c5.value !== 0 || $3));
  return d5(O3, te3, (e4) => {
    var t5;
    return { containers: [...(t5 = e4.containers) != null ? t5 : [], x5] };
  }), watchEffect((e4) => {
    if (c5.value !== 0)
      return;
    let t5 = o2(v4);
    if (!t5)
      return;
    let u6 = new ResizeObserver((s3) => {
      for (let g4 of s3) {
        let h3 = g4.target.getBoundingClientRect();
        h3.x === 0 && h3.y === 0 && h3.width === 0 && h3.height === 0 && y3.close();
      }
    });
    u6.observe(t5), e4(() => u6.disconnect());
  }), () => {
    let { id: e4, open: t5, initialFocus: u6, ...s3 } = r4, g4 = { ...l4, ref: v4, id: e4, role: "dialog", "aria-modal": c5.value === 0 ? true : void 0, "aria-labelledby": M2.value, "aria-describedby": X3.value }, h3 = { open: c5.value === 0 };
    return h(P, { force: true }, () => [h(R, () => h(L2, { target: v4.value }, () => h(P, { force: false }, () => h(ie, { initialFocus: u6, containers: x5, features: k2.value ? u(G2.value, { parent: ie.features.RestoreFocus, leaf: ie.features.All & ~ie.features.FocusLock }) : ie.features.None }, () => H({ ourProps: g4, theirProps: s3, slot: h3, attrs: l4, slots: p7, visible: c5.value === 0, features: N.RenderStrategy | N.Static, name: "Dialog" }))))), h(f3, { features: a2.Hidden, ref: R3 })]);
  };
} });
var Ke2 = defineComponent({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${t()}` } }, setup(r4, { attrs: n6, slots: l4 }) {
  let p7 = E4("DialogOverlay");
  function i4(a6) {
    a6.target === a6.currentTarget && (a6.preventDefault(), a6.stopPropagation(), p7.close());
  }
  return () => {
    let { id: a6, ...f5 } = r4;
    return H({ ourProps: { id: a6, "aria-hidden": true, onClick: i4 }, theirProps: f5, slot: { open: p7.dialogState.value === 0 }, attrs: n6, slots: l4, name: "DialogOverlay" });
  };
} });
var _e2 = defineComponent({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${t()}` } }, inheritAttrs: false, setup(r4, { attrs: n6, slots: l4, expose: p7 }) {
  let i4 = E4("DialogBackdrop"), a6 = ref(null);
  return p7({ el: a6, $el: a6 }), onMounted(() => {
    if (i4.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: f5, ...d9 } = r4, m5 = { id: f5, ref: a6, "aria-hidden": true };
    return h(P, { force: true }, () => h(R, () => H({ ourProps: m5, theirProps: { ...n6, ...d9 }, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: l4, name: "DialogBackdrop" })));
  };
} });
var Ue2 = defineComponent({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${t()}` } }, setup(r4, { attrs: n6, slots: l4, expose: p7 }) {
  let i4 = E4("DialogPanel");
  p7({ el: i4.panelRef, $el: i4.panelRef });
  function a6(f5) {
    f5.stopPropagation();
  }
  return () => {
    let { id: f5, ...d9 } = r4, m5 = { id: f5, ref: i4.panelRef, onClick: a6 };
    return H({ ourProps: m5, theirProps: d9, slot: { open: i4.dialogState.value === 0 }, attrs: n6, slots: l4, name: "DialogPanel" });
  };
} });
var Ye = defineComponent({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${t()}` } }, setup(r4, { attrs: n6, slots: l4 }) {
  let p7 = E4("DialogTitle");
  return onMounted(() => {
    p7.setTitleId(r4.id), onUnmounted(() => p7.setTitleId(null));
  }), () => {
    let { id: i4, ...a6 } = r4;
    return H({ ourProps: { id: i4 }, theirProps: a6, slot: { open: p7.dialogState.value === 0 }, attrs: n6, slots: l4, name: "DialogTitle" });
  };
} });
var ze = E3;

// node_modules/@headlessui/vue/dist/components/disclosure/disclosure.js
var j2 = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(j2 || {});
var x3 = Symbol("DisclosureContext");
function g2(t5) {
  let r4 = inject(x3, null);
  if (r4 === null) {
    let o3 = new Error(`<${t5} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, g2), o3;
  }
  return r4;
}
var B3 = Symbol("DisclosurePanelContext");
function $2() {
  return inject(B3, null);
}
var Q = defineComponent({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: false } }, setup(t5, { slots: r4, attrs: o3 }) {
  let u6 = ref(t5.defaultOpen ? 0 : 1), e4 = ref(null), i4 = ref(null), s3 = { buttonId: ref(null), panelId: ref(null), disclosureState: u6, panel: e4, button: i4, toggleDisclosure() {
    u6.value = u(u6.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    u6.value !== 1 && (u6.value = 1);
  }, close(l4) {
    s3.closeDisclosure();
    let a6 = (() => l4 ? l4 instanceof HTMLElement ? l4 : l4.value instanceof HTMLElement ? o2(l4) : o2(s3.button) : o2(s3.button))();
    a6 == null || a6.focus();
  } };
  return provide(x3, s3), c(computed(() => u(u6.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let { defaultOpen: l4, ...a6 } = t5, c5 = { open: u6.value === 0, close: s3.close };
    return H({ theirProps: a6, ourProps: {}, slot: c5, slots: r4, attrs: o3, name: "Disclosure" });
  };
} });
var V = defineComponent({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-disclosure-button-${t()}` } }, setup(t5, { attrs: r4, slots: o3, expose: u6 }) {
  let e4 = g2("DisclosureButton");
  onMounted(() => {
    e4.buttonId.value = t5.id;
  }), onUnmounted(() => {
    e4.buttonId.value = null;
  });
  let i4 = $2(), s3 = computed(() => i4 === null ? false : i4.value === e4.panelId.value), l4 = ref(null);
  u6({ el: l4, $el: l4 }), s3.value || watchEffect(() => {
    e4.button.value = l4.value;
  });
  let a6 = b2(computed(() => ({ as: t5.as, type: r4.type })), l4);
  function c5() {
    var n6;
    t5.disabled || (s3.value ? (e4.toggleDisclosure(), (n6 = o2(e4.button)) == null || n6.focus()) : e4.toggleDisclosure());
  }
  function D2(n6) {
    var S5;
    if (!t5.disabled)
      if (s3.value)
        switch (n6.key) {
          case o.Space:
          case o.Enter:
            n6.preventDefault(), n6.stopPropagation(), e4.toggleDisclosure(), (S5 = o2(e4.button)) == null || S5.focus();
            break;
        }
      else
        switch (n6.key) {
          case o.Space:
          case o.Enter:
            n6.preventDefault(), n6.stopPropagation(), e4.toggleDisclosure();
            break;
        }
  }
  function T5(n6) {
    switch (n6.key) {
      case o.Space:
        n6.preventDefault();
        break;
    }
  }
  return () => {
    let n6 = { open: e4.disclosureState.value === 0 }, { id: S5, ...k2 } = t5, K3 = s3.value ? { ref: l4, type: a6.value, onClick: c5, onKeydown: D2 } : { id: S5, ref: l4, type: a6.value, "aria-expanded": t5.disabled ? void 0 : e4.disclosureState.value === 0, "aria-controls": o2(e4.panel) ? e4.panelId.value : void 0, disabled: t5.disabled ? true : void 0, onClick: c5, onKeydown: D2, onKeyup: T5 };
    return H({ ourProps: K3, theirProps: k2, slot: n6, attrs: r4, slots: o3, name: "DisclosureButton" });
  };
} });
var X = defineComponent({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-disclosure-panel-${t()}` } }, setup(t5, { attrs: r4, slots: o3, expose: u6 }) {
  let e4 = g2("DisclosurePanel");
  onMounted(() => {
    e4.panelId.value = t5.id;
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), u6({ el: e4.panel, $el: e4.panel }), provide(B3, e4.panelId);
  let i4 = p(), s3 = computed(() => i4 !== null ? (i4.value & l.Open) === l.Open : e4.disclosureState.value === 0);
  return () => {
    let l4 = { open: e4.disclosureState.value === 0, close: e4.close }, { id: a6, ...c5 } = t5, D2 = { id: a6, ref: e4.panel };
    return H({ ourProps: D2, theirProps: c5, slot: l4, attrs: r4, slots: o3, features: N.RenderStrategy | N.Static, visible: s3.value, name: "DisclosurePanel" });
  };
} });

// node_modules/@headlessui/vue/dist/components/listbox/listbox.js
function se(t5, b4) {
  return t5 === b4;
}
var de = ((u6) => (u6[u6.Open = 0] = "Open", u6[u6.Closed = 1] = "Closed", u6))(de || {});
var fe = ((u6) => (u6[u6.Single = 0] = "Single", u6[u6.Multi = 1] = "Multi", u6))(fe || {});
var pe = ((u6) => (u6[u6.Pointer = 0] = "Pointer", u6[u6.Other = 1] = "Other", u6))(pe || {});
function ce2(t5) {
  requestAnimationFrame(() => requestAnimationFrame(t5));
}
var U = Symbol("ListboxContext");
function E5(t5) {
  let b4 = inject(U, null);
  if (b4 === null) {
    let u6 = new Error(`<${t5} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(u6, E5), u6;
  }
  return b4;
}
var Ee = defineComponent({ name: "Listbox", emits: { "update:modelValue": (t5) => true }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => se }, horizontal: { type: [Boolean], default: false }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, multiple: { type: [Boolean], default: false } }, inheritAttrs: false, setup(t5, { slots: b4, attrs: u6, emit: L4 }) {
  let e4 = ref(1), d9 = ref(null), m5 = ref(null), x5 = ref(null), f5 = ref([]), o3 = ref(""), i4 = ref(null), w3 = ref(1);
  function R3(a6 = (l4) => l4) {
    let l4 = i4.value !== null ? f5.value[i4.value] : null, r4 = I(a6(f5.value.slice()), (S5) => o2(S5.dataRef.domRef)), s3 = l4 ? r4.indexOf(l4) : null;
    return s3 === -1 && (s3 = null), { options: r4, activeOptionIndex: s3 };
  }
  let h3 = computed(() => t5.multiple ? 1 : 0), [y3, M2] = d3(computed(() => t5.modelValue === void 0 ? u(h3.value, { [1]: [], [0]: void 0 }) : t5.modelValue), (a6) => L4("update:modelValue", a6), computed(() => t5.defaultValue)), n6 = { listboxState: e4, value: y3, mode: h3, compare(a6, l4) {
    if (typeof t5.by == "string") {
      let r4 = t5.by;
      return (a6 == null ? void 0 : a6[r4]) === (l4 == null ? void 0 : l4[r4]);
    }
    return t5.by(a6, l4);
  }, orientation: computed(() => t5.horizontal ? "horizontal" : "vertical"), labelRef: d9, buttonRef: m5, optionsRef: x5, disabled: computed(() => t5.disabled), options: f5, searchQuery: o3, activeOptionIndex: i4, activationTrigger: w3, closeListbox() {
    t5.disabled || e4.value !== 1 && (e4.value = 1, i4.value = null);
  }, openListbox() {
    t5.disabled || e4.value !== 0 && (e4.value = 0);
  }, goToOption(a6, l4, r4) {
    if (t5.disabled || e4.value === 1)
      return;
    let s3 = R3(), S5 = x(a6 === a.Specific ? { focus: a.Specific, id: l4 } : { focus: a6 }, { resolveItems: () => s3.options, resolveActiveIndex: () => s3.activeOptionIndex, resolveId: (D2) => D2.id, resolveDisabled: (D2) => D2.dataRef.disabled });
    o3.value = "", i4.value = S5, w3.value = r4 != null ? r4 : 1, f5.value = s3.options;
  }, search(a6) {
    if (t5.disabled || e4.value === 1)
      return;
    let r4 = o3.value !== "" ? 0 : 1;
    o3.value += a6.toLowerCase();
    let S5 = (i4.value !== null ? f5.value.slice(i4.value + r4).concat(f5.value.slice(0, i4.value + r4)) : f5.value).find((j5) => j5.dataRef.textValue.startsWith(o3.value) && !j5.dataRef.disabled), D2 = S5 ? f5.value.indexOf(S5) : -1;
    D2 === -1 || D2 === i4.value || (i4.value = D2, w3.value = 1);
  }, clearSearch() {
    t5.disabled || e4.value !== 1 && o3.value !== "" && (o3.value = "");
  }, registerOption(a6, l4) {
    let r4 = R3((s3) => [...s3, { id: a6, dataRef: l4 }]);
    f5.value = r4.options, i4.value = r4.activeOptionIndex;
  }, unregisterOption(a6) {
    let l4 = R3((r4) => {
      let s3 = r4.findIndex((S5) => S5.id === a6);
      return s3 !== -1 && r4.splice(s3, 1), r4;
    });
    f5.value = l4.options, i4.value = l4.activeOptionIndex, w3.value = 1;
  }, select(a6) {
    t5.disabled || M2(u(h3.value, { [0]: () => a6, [1]: () => {
      let l4 = toRaw(n6.value.value).slice(), r4 = toRaw(a6), s3 = l4.findIndex((S5) => n6.compare(r4, toRaw(S5)));
      return s3 === -1 ? l4.push(r4) : l4.splice(s3, 1), l4;
    } }));
  } };
  y2([m5, x5], (a6, l4) => {
    var r4;
    n6.closeListbox(), S2(l4, F.Loose) || (a6.preventDefault(), (r4 = o2(m5)) == null || r4.focus());
  }, computed(() => e4.value === 0)), provide(U, n6), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let p7 = computed(() => {
    var a6;
    return (a6 = o2(m5)) == null ? void 0 : a6.closest("form");
  });
  return onMounted(() => {
    watch([p7], () => {
      if (!p7.value || t5.defaultValue === void 0)
        return;
      function a6() {
        n6.select(t5.defaultValue);
      }
      return p7.value.addEventListener("reset", a6), () => {
        var l4;
        (l4 = p7.value) == null || l4.removeEventListener("reset", a6);
      };
    }, { immediate: true });
  }), () => {
    let { name: a6, modelValue: l4, disabled: r4, ...s3 } = t5, S5 = { open: e4.value === 0, disabled: r4, value: y3.value };
    return h(Fragment, [...a6 != null && y3.value != null ? e2({ [a6]: y3.value }).map(([D2, j5]) => h(f3, K({ features: a2.Hidden, key: D2, as: "input", type: "hidden", hidden: true, readOnly: true, name: D2, value: j5 }))) : [], H({ ourProps: {}, theirProps: { ...u6, ...T(s3, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: S5, slots: b4, attrs: u6, name: "Listbox" })]);
  };
} });
var je = defineComponent({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${t()}` } }, setup(t5, { attrs: b4, slots: u6 }) {
  let L4 = E5("ListboxLabel");
  function e4() {
    var d9;
    (d9 = o2(L4.buttonRef)) == null || d9.focus({ preventScroll: true });
  }
  return () => {
    let d9 = { open: L4.listboxState.value === 0, disabled: L4.disabled.value }, { id: m5, ...x5 } = t5, f5 = { id: m5, ref: L4.labelRef, onClick: e4 };
    return H({ ourProps: f5, theirProps: x5, slot: d9, attrs: b4, slots: u6, name: "ListboxLabel" });
  };
} });
var Ae = defineComponent({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${t()}` } }, setup(t5, { attrs: b4, slots: u6, expose: L4 }) {
  let e4 = E5("ListboxButton");
  L4({ el: e4.buttonRef, $el: e4.buttonRef });
  function d9(o3) {
    switch (o3.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o3.preventDefault(), e4.openListbox(), nextTick(() => {
          var i4;
          (i4 = o2(e4.optionsRef)) == null || i4.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.First);
        });
        break;
      case o.ArrowUp:
        o3.preventDefault(), e4.openListbox(), nextTick(() => {
          var i4;
          (i4 = o2(e4.optionsRef)) == null || i4.focus({ preventScroll: true }), e4.value.value || e4.goToOption(a.Last);
        });
        break;
    }
  }
  function m5(o3) {
    switch (o3.key) {
      case o.Space:
        o3.preventDefault();
        break;
    }
  }
  function x5(o3) {
    e4.disabled.value || (e4.listboxState.value === 0 ? (e4.closeListbox(), nextTick(() => {
      var i4;
      return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
    })) : (o3.preventDefault(), e4.openListbox(), ce2(() => {
      var i4;
      return (i4 = o2(e4.optionsRef)) == null ? void 0 : i4.focus({ preventScroll: true });
    })));
  }
  let f5 = b2(computed(() => ({ as: t5.as, type: b4.type })), e4.buttonRef);
  return () => {
    var h3, y3;
    let o3 = { open: e4.listboxState.value === 0, disabled: e4.disabled.value, value: e4.value.value }, { id: i4, ...w3 } = t5, R3 = { ref: e4.buttonRef, id: i4, type: f5.value, "aria-haspopup": "listbox", "aria-controls": (h3 = o2(e4.optionsRef)) == null ? void 0 : h3.id, "aria-expanded": e4.disabled.value ? void 0 : e4.listboxState.value === 0, "aria-labelledby": e4.labelRef.value ? [(y3 = o2(e4.labelRef)) == null ? void 0 : y3.id, i4].join(" ") : void 0, disabled: e4.disabled.value === true ? true : void 0, onKeydown: d9, onKeyup: m5, onClick: x5 };
    return H({ ourProps: R3, theirProps: w3, slot: o3, attrs: b4, slots: u6, name: "ListboxButton" });
  };
} });
var Fe = defineComponent({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-listbox-options-${t()}` } }, setup(t5, { attrs: b4, slots: u6, expose: L4 }) {
  let e4 = E5("ListboxOptions"), d9 = ref(null);
  L4({ el: e4.optionsRef, $el: e4.optionsRef });
  function m5(o3) {
    switch (d9.value && clearTimeout(d9.value), o3.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return o3.preventDefault(), o3.stopPropagation(), e4.search(o3.key);
      case o.Enter:
        if (o3.preventDefault(), o3.stopPropagation(), e4.activeOptionIndex.value !== null) {
          let i4 = e4.options.value[e4.activeOptionIndex.value];
          e4.select(i4.dataRef.value);
        }
        e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
          var i4;
          return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
        }));
        break;
      case u(e4.orientation.value, { vertical: o.ArrowDown, horizontal: o.ArrowRight }):
        return o3.preventDefault(), o3.stopPropagation(), e4.goToOption(a.Next);
      case u(e4.orientation.value, { vertical: o.ArrowUp, horizontal: o.ArrowLeft }):
        return o3.preventDefault(), o3.stopPropagation(), e4.goToOption(a.Previous);
      case o.Home:
      case o.PageUp:
        return o3.preventDefault(), o3.stopPropagation(), e4.goToOption(a.First);
      case o.End:
      case o.PageDown:
        return o3.preventDefault(), o3.stopPropagation(), e4.goToOption(a.Last);
      case o.Escape:
        o3.preventDefault(), o3.stopPropagation(), e4.closeListbox(), nextTick(() => {
          var i4;
          return (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        o3.preventDefault(), o3.stopPropagation();
        break;
      default:
        o3.key.length === 1 && (e4.search(o3.key), d9.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  let x5 = p(), f5 = computed(() => x5 !== null ? (x5.value & l.Open) === l.Open : e4.listboxState.value === 0);
  return () => {
    var h3, y3, M2, n6;
    let o3 = { open: e4.listboxState.value === 0 }, { id: i4, ...w3 } = t5, R3 = { "aria-activedescendant": e4.activeOptionIndex.value === null || (h3 = e4.options.value[e4.activeOptionIndex.value]) == null ? void 0 : h3.id, "aria-multiselectable": e4.mode.value === 1 ? true : void 0, "aria-labelledby": (n6 = (y3 = o2(e4.labelRef)) == null ? void 0 : y3.id) != null ? n6 : (M2 = o2(e4.buttonRef)) == null ? void 0 : M2.id, "aria-orientation": e4.orientation.value, id: i4, onKeydown: m5, role: "listbox", tabIndex: 0, ref: e4.optionsRef };
    return H({ ourProps: R3, theirProps: w3, slot: o3, attrs: b4, slots: u6, features: N.RenderStrategy | N.Static, visible: f5.value, name: "ListboxOptions" });
  };
} });
var Be = defineComponent({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-listbox.option-${t()}` } }, setup(t5, { slots: b4, attrs: u6, expose: L4 }) {
  let e4 = E5("ListboxOption"), d9 = ref(null);
  L4({ el: d9, $el: d9 });
  let m5 = computed(() => e4.activeOptionIndex.value !== null ? e4.options.value[e4.activeOptionIndex.value].id === t5.id : false), x5 = computed(() => u(e4.mode.value, { [0]: () => e4.compare(toRaw(e4.value.value), toRaw(t5.value)), [1]: () => toRaw(e4.value.value).some((n6) => e4.compare(toRaw(n6), toRaw(t5.value))) })), f5 = computed(() => u(e4.mode.value, { [1]: () => {
    var p7;
    let n6 = toRaw(e4.value.value);
    return ((p7 = e4.options.value.find((a6) => n6.some((l4) => e4.compare(toRaw(l4), toRaw(a6.dataRef.value))))) == null ? void 0 : p7.id) === t5.id;
  }, [0]: () => x5.value })), o3 = computed(() => ({ disabled: t5.disabled, value: t5.value, textValue: "", domRef: d9 }));
  onMounted(() => {
    var p7, a6;
    let n6 = (a6 = (p7 = o2(d9)) == null ? void 0 : p7.textContent) == null ? void 0 : a6.toLowerCase().trim();
    n6 !== void 0 && (o3.value.textValue = n6);
  }), onMounted(() => e4.registerOption(t5.id, o3)), onUnmounted(() => e4.unregisterOption(t5.id)), onMounted(() => {
    watch([e4.listboxState, x5], () => {
      e4.listboxState.value === 0 && x5.value && u(e4.mode.value, { [1]: () => {
        f5.value && e4.goToOption(a.Specific, t5.id);
      }, [0]: () => {
        e4.goToOption(a.Specific, t5.id);
      } });
    }, { immediate: true });
  }), watchEffect(() => {
    e4.listboxState.value === 0 && m5.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var n6, p7;
      return (p7 = (n6 = o2(d9)) == null ? void 0 : n6.scrollIntoView) == null ? void 0 : p7.call(n6, { block: "nearest" });
    });
  });
  function i4(n6) {
    if (t5.disabled)
      return n6.preventDefault();
    e4.select(t5.value), e4.mode.value === 0 && (e4.closeListbox(), nextTick(() => {
      var p7;
      return (p7 = o2(e4.buttonRef)) == null ? void 0 : p7.focus({ preventScroll: true });
    }));
  }
  function w3() {
    if (t5.disabled)
      return e4.goToOption(a.Nothing);
    e4.goToOption(a.Specific, t5.id);
  }
  let R3 = u3();
  function h3(n6) {
    R3.update(n6);
  }
  function y3(n6) {
    R3.wasMoved(n6) && (t5.disabled || m5.value || e4.goToOption(a.Specific, t5.id, 0));
  }
  function M2(n6) {
    R3.wasMoved(n6) && (t5.disabled || m5.value && e4.goToOption(a.Nothing));
  }
  return () => {
    let { disabled: n6 } = t5, p7 = { active: m5.value, selected: x5.value, disabled: n6 }, { id: a6, value: l4, disabled: r4, ...s3 } = t5, S5 = { id: a6, ref: d9, role: "option", tabIndex: n6 === true ? void 0 : -1, "aria-disabled": n6 === true ? true : void 0, "aria-selected": x5.value, disabled: void 0, onClick: i4, onFocus: w3, onPointerenter: h3, onMouseenter: h3, onPointermove: y3, onMousemove: y3, onPointerleave: M2, onMouseleave: M2 };
    return H({ ourProps: S5, theirProps: s3, slot: p7, attrs: u6, slots: b4, name: "ListboxOption" });
  };
} });

// node_modules/@headlessui/vue/dist/components/menu/menu.js
var X2 = ((l4) => (l4[l4.Open = 0] = "Open", l4[l4.Closed = 1] = "Closed", l4))(X2 || {});
var Y = ((l4) => (l4[l4.Pointer = 0] = "Pointer", l4[l4.Other = 1] = "Other", l4))(Y || {});
function Z(a6) {
  requestAnimationFrame(() => requestAnimationFrame(a6));
}
var A3 = Symbol("MenuContext");
function P2(a6) {
  let b4 = inject(A3, null);
  if (b4 === null) {
    let l4 = new Error(`<${a6} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l4, P2), l4;
  }
  return b4;
}
var ge = defineComponent({ name: "Menu", props: { as: { type: [Object, String], default: "template" } }, setup(a6, { slots: b4, attrs: l4 }) {
  let g4 = ref(1), e4 = ref(null), m5 = ref(null), s3 = ref([]), p7 = ref(""), d9 = ref(null), o3 = ref(1);
  function t5(u6 = (r4) => r4) {
    let r4 = d9.value !== null ? s3.value[d9.value] : null, n6 = I(u6(s3.value.slice()), (I3) => o2(I3.dataRef.domRef)), i4 = r4 ? n6.indexOf(r4) : null;
    return i4 === -1 && (i4 = null), { items: n6, activeItemIndex: i4 };
  }
  let v4 = { menuState: g4, buttonRef: e4, itemsRef: m5, items: s3, searchQuery: p7, activeItemIndex: d9, activationTrigger: o3, closeMenu: () => {
    g4.value = 1, d9.value = null;
  }, openMenu: () => g4.value = 0, goToItem(u6, r4, n6) {
    let i4 = t5(), I3 = x(u6 === a.Specific ? { focus: a.Specific, id: r4 } : { focus: u6 }, { resolveItems: () => i4.items, resolveActiveIndex: () => i4.activeItemIndex, resolveId: (M2) => M2.id, resolveDisabled: (M2) => M2.dataRef.disabled });
    p7.value = "", d9.value = I3, o3.value = n6 != null ? n6 : 1, s3.value = i4.items;
  }, search(u6) {
    let n6 = p7.value !== "" ? 0 : 1;
    p7.value += u6.toLowerCase();
    let I3 = (d9.value !== null ? s3.value.slice(d9.value + n6).concat(s3.value.slice(0, d9.value + n6)) : s3.value).find((O3) => O3.dataRef.textValue.startsWith(p7.value) && !O3.dataRef.disabled), M2 = I3 ? s3.value.indexOf(I3) : -1;
    M2 === -1 || M2 === d9.value || (d9.value = M2, o3.value = 1);
  }, clearSearch() {
    p7.value = "";
  }, registerItem(u6, r4) {
    let n6 = t5((i4) => [...i4, { id: u6, dataRef: r4 }]);
    s3.value = n6.items, d9.value = n6.activeItemIndex, o3.value = 1;
  }, unregisterItem(u6) {
    let r4 = t5((n6) => {
      let i4 = n6.findIndex((I3) => I3.id === u6);
      return i4 !== -1 && n6.splice(i4, 1), n6;
    });
    s3.value = r4.items, d9.value = r4.activeItemIndex, o3.value = 1;
  } };
  return y2([e4, m5], (u6, r4) => {
    var n6;
    v4.closeMenu(), S2(r4, F.Loose) || (u6.preventDefault(), (n6 = o2(e4)) == null || n6.focus());
  }, computed(() => g4.value === 0)), provide(A3, v4), c(computed(() => u(g4.value, { [0]: l.Open, [1]: l.Closed }))), () => {
    let u6 = { open: g4.value === 0, close: v4.closeMenu };
    return H({ ourProps: {}, theirProps: a6, slot: u6, slots: b4, attrs: l4, name: "Menu" });
  };
} });
var Se = defineComponent({ name: "MenuButton", props: { disabled: { type: Boolean, default: false }, as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-menu-button-${t()}` } }, setup(a6, { attrs: b4, slots: l4, expose: g4 }) {
  let e4 = P2("MenuButton");
  g4({ el: e4.buttonRef, $el: e4.buttonRef });
  function m5(o3) {
    switch (o3.key) {
      case o.Space:
      case o.Enter:
      case o.ArrowDown:
        o3.preventDefault(), o3.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t5;
          (t5 = o2(e4.itemsRef)) == null || t5.focus({ preventScroll: true }), e4.goToItem(a.First);
        });
        break;
      case o.ArrowUp:
        o3.preventDefault(), o3.stopPropagation(), e4.openMenu(), nextTick(() => {
          var t5;
          (t5 = o2(e4.itemsRef)) == null || t5.focus({ preventScroll: true }), e4.goToItem(a.Last);
        });
        break;
    }
  }
  function s3(o3) {
    switch (o3.key) {
      case o.Space:
        o3.preventDefault();
        break;
    }
  }
  function p7(o3) {
    a6.disabled || (e4.menuState.value === 0 ? (e4.closeMenu(), nextTick(() => {
      var t5;
      return (t5 = o2(e4.buttonRef)) == null ? void 0 : t5.focus({ preventScroll: true });
    })) : (o3.preventDefault(), e4.openMenu(), Z(() => {
      var t5;
      return (t5 = o2(e4.itemsRef)) == null ? void 0 : t5.focus({ preventScroll: true });
    })));
  }
  let d9 = b2(computed(() => ({ as: a6.as, type: b4.type })), e4.buttonRef);
  return () => {
    var r4;
    let o3 = { open: e4.menuState.value === 0 }, { id: t5, ...v4 } = a6, u6 = { ref: e4.buttonRef, id: t5, type: d9.value, "aria-haspopup": "menu", "aria-controls": (r4 = o2(e4.itemsRef)) == null ? void 0 : r4.id, "aria-expanded": a6.disabled ? void 0 : e4.menuState.value === 0, onKeydown: m5, onKeyup: s3, onClick: p7 };
    return H({ ourProps: u6, theirProps: v4, slot: o3, attrs: b4, slots: l4, name: "MenuButton" });
  };
} });
var be2 = defineComponent({ name: "MenuItems", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-menu-items-${t()}` } }, setup(a6, { attrs: b4, slots: l4, expose: g4 }) {
  let e4 = P2("MenuItems"), m5 = ref(null);
  g4({ el: e4.itemsRef, $el: e4.itemsRef }), p2({ container: computed(() => o2(e4.itemsRef)), enabled: computed(() => e4.menuState.value === 0), accept(t5) {
    return t5.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : t5.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(t5) {
    t5.setAttribute("role", "none");
  } });
  function s3(t5) {
    var v4;
    switch (m5.value && clearTimeout(m5.value), t5.key) {
      case o.Space:
        if (e4.searchQuery.value !== "")
          return t5.preventDefault(), t5.stopPropagation(), e4.search(t5.key);
      case o.Enter:
        if (t5.preventDefault(), t5.stopPropagation(), e4.activeItemIndex.value !== null) {
          let r4 = e4.items.value[e4.activeItemIndex.value];
          (v4 = o2(r4.dataRef.domRef)) == null || v4.click();
        }
        e4.closeMenu(), v2(o2(e4.buttonRef));
        break;
      case o.ArrowDown:
        return t5.preventDefault(), t5.stopPropagation(), e4.goToItem(a.Next);
      case o.ArrowUp:
        return t5.preventDefault(), t5.stopPropagation(), e4.goToItem(a.Previous);
      case o.Home:
      case o.PageUp:
        return t5.preventDefault(), t5.stopPropagation(), e4.goToItem(a.First);
      case o.End:
      case o.PageDown:
        return t5.preventDefault(), t5.stopPropagation(), e4.goToItem(a.Last);
      case o.Escape:
        t5.preventDefault(), t5.stopPropagation(), e4.closeMenu(), nextTick(() => {
          var u6;
          return (u6 = o2(e4.buttonRef)) == null ? void 0 : u6.focus({ preventScroll: true });
        });
        break;
      case o.Tab:
        t5.preventDefault(), t5.stopPropagation(), e4.closeMenu(), nextTick(() => D(o2(e4.buttonRef), t5.shiftKey ? N2.Previous : N2.Next));
        break;
      default:
        t5.key.length === 1 && (e4.search(t5.key), m5.value = setTimeout(() => e4.clearSearch(), 350));
        break;
    }
  }
  function p7(t5) {
    switch (t5.key) {
      case o.Space:
        t5.preventDefault();
        break;
    }
  }
  let d9 = p(), o3 = computed(() => d9 !== null ? (d9.value & l.Open) === l.Open : e4.menuState.value === 0);
  return () => {
    var n6, i4;
    let t5 = { open: e4.menuState.value === 0 }, { id: v4, ...u6 } = a6, r4 = { "aria-activedescendant": e4.activeItemIndex.value === null || (n6 = e4.items.value[e4.activeItemIndex.value]) == null ? void 0 : n6.id, "aria-labelledby": (i4 = o2(e4.buttonRef)) == null ? void 0 : i4.id, id: v4, onKeydown: s3, onKeyup: p7, role: "menu", tabIndex: 0, ref: e4.itemsRef };
    return H({ ourProps: r4, theirProps: u6, slot: t5, attrs: b4, slots: l4, features: N.RenderStrategy | N.Static, visible: o3.value, name: "MenuItems" });
  };
} });
var Me = defineComponent({ name: "MenuItem", inheritAttrs: false, props: { as: { type: [Object, String], default: "template" }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-menu-item-${t()}` } }, setup(a6, { slots: b4, attrs: l4, expose: g4 }) {
  let e4 = P2("MenuItem"), m5 = ref(null);
  g4({ el: m5, $el: m5 });
  let s3 = computed(() => e4.activeItemIndex.value !== null ? e4.items.value[e4.activeItemIndex.value].id === a6.id : false), p7 = computed(() => ({ disabled: a6.disabled, textValue: "", domRef: m5 }));
  onMounted(() => {
    var i4, I3;
    let n6 = (I3 = (i4 = o2(m5)) == null ? void 0 : i4.textContent) == null ? void 0 : I3.toLowerCase().trim();
    n6 !== void 0 && (p7.value.textValue = n6);
  }), onMounted(() => e4.registerItem(a6.id, p7)), onUnmounted(() => e4.unregisterItem(a6.id)), watchEffect(() => {
    e4.menuState.value === 0 && s3.value && e4.activationTrigger.value !== 0 && nextTick(() => {
      var n6, i4;
      return (i4 = (n6 = o2(m5)) == null ? void 0 : n6.scrollIntoView) == null ? void 0 : i4.call(n6, { block: "nearest" });
    });
  });
  function d9(n6) {
    if (a6.disabled)
      return n6.preventDefault();
    e4.closeMenu(), v2(o2(e4.buttonRef));
  }
  function o3() {
    if (a6.disabled)
      return e4.goToItem(a.Nothing);
    e4.goToItem(a.Specific, a6.id);
  }
  let t5 = u3();
  function v4(n6) {
    t5.update(n6);
  }
  function u6(n6) {
    t5.wasMoved(n6) && (a6.disabled || s3.value || e4.goToItem(a.Specific, a6.id, 0));
  }
  function r4(n6) {
    t5.wasMoved(n6) && (a6.disabled || s3.value && e4.goToItem(a.Nothing));
  }
  return () => {
    let { disabled: n6 } = a6, i4 = { active: s3.value, disabled: n6, close: e4.closeMenu }, { id: I3, ...M2 } = a6;
    return H({ ourProps: { id: I3, ref: m5, role: "menuitem", tabIndex: n6 === true ? void 0 : -1, "aria-disabled": n6 === true ? true : void 0, disabled: void 0, onClick: d9, onFocus: o3, onPointerenter: v4, onMouseenter: v4, onPointermove: u6, onMousemove: u6, onPointerleave: r4, onMouseleave: r4 }, theirProps: { ...l4, ...M2 }, slot: i4, attrs: l4, slots: b4, name: "MenuItem" });
  };
} });

// node_modules/@headlessui/vue/dist/components/popover/popover.js
var ce3 = ((p7) => (p7[p7.Open = 0] = "Open", p7[p7.Closed = 1] = "Closed", p7))(ce3 || {});
var te = Symbol("PopoverContext");
function W(c5) {
  let m5 = inject(te, null);
  if (m5 === null) {
    let p7 = new Error(`<${c5} /> is missing a parent <${Pe.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(p7, W), p7;
  }
  return m5;
}
var oe = Symbol("PopoverGroupContext");
function ne() {
  return inject(oe, null);
}
var le = Symbol("PopoverPanelContext");
function de2() {
  return inject(le, null);
}
var Pe = defineComponent({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(c5, { slots: m5, attrs: p7, expose: y3 }) {
  var n6;
  let o3 = ref(null);
  y3({ el: o3, $el: o3 });
  let e4 = ref(1), f5 = ref(null), d9 = ref(null), I3 = ref(null), s3 = ref(null), b4 = computed(() => m(o3)), P3 = computed(() => {
    var h3, D2;
    if (!o2(f5) || !o2(s3))
      return false;
    for (let w3 of document.querySelectorAll("body > *"))
      if (Number(w3 == null ? void 0 : w3.contains(o2(f5))) ^ Number(w3 == null ? void 0 : w3.contains(o2(s3))))
        return true;
    let t5 = d2(), r4 = t5.indexOf(o2(f5)), u6 = (r4 + t5.length - 1) % t5.length, v4 = (r4 + 1) % t5.length, S5 = t5[u6], $3 = t5[v4];
    return !((h3 = o2(s3)) != null && h3.contains(S5)) && !((D2 = o2(s3)) != null && D2.contains($3));
  }), a6 = { popoverState: e4, buttonId: ref(null), panelId: ref(null), panel: s3, button: f5, isPortalled: P3, beforePanelSentinel: d9, afterPanelSentinel: I3, togglePopover() {
    e4.value = u(e4.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    e4.value !== 1 && (e4.value = 1);
  }, close(t5) {
    a6.closePopover();
    let r4 = (() => t5 ? t5 instanceof HTMLElement ? t5 : t5.value instanceof HTMLElement ? o2(t5) : o2(a6.button) : o2(a6.button))();
    r4 == null || r4.focus();
  } };
  provide(te, a6), c(computed(() => u(e4.value, { [0]: l.Open, [1]: l.Closed })));
  let F3 = { buttonId: a6.buttonId, panelId: a6.panelId, close() {
    a6.closePopover();
  } }, g4 = ne(), E6 = g4 == null ? void 0 : g4.registerPopover;
  function i4() {
    var t5, r4, u6, v4;
    return (v4 = g4 == null ? void 0 : g4.isFocusWithinPopoverGroup()) != null ? v4 : ((t5 = b4.value) == null ? void 0 : t5.activeElement) && (((r4 = o2(f5)) == null ? void 0 : r4.contains(b4.value.activeElement)) || ((u6 = o2(s3)) == null ? void 0 : u6.contains(b4.value.activeElement)));
  }
  return watchEffect(() => E6 == null ? void 0 : E6(F3)), E((n6 = b4.value) == null ? void 0 : n6.defaultView, "focus", (t5) => {
    var r4, u6;
    e4.value === 0 && (i4() || f5 && s3 && t5.target !== window && ((r4 = o2(a6.beforePanelSentinel)) != null && r4.contains(t5.target) || (u6 = o2(a6.afterPanelSentinel)) != null && u6.contains(t5.target) || a6.closePopover()));
  }, true), y2([f5, s3], (t5, r4) => {
    var u6;
    a6.closePopover(), S2(r4, F.Loose) || (t5.preventDefault(), (u6 = o2(f5)) == null || u6.focus());
  }, computed(() => e4.value === 0)), () => {
    let t5 = { open: e4.value === 0, close: a6.close };
    return H({ theirProps: c5, ourProps: { ref: o3 }, slot: t5, slots: m5, attrs: p7, name: "Popover" });
  };
} });
var Be2 = defineComponent({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-popover-button-${t()}` } }, inheritAttrs: false, setup(c5, { attrs: m5, slots: p7, expose: y3 }) {
  let o3 = W("PopoverButton"), e4 = computed(() => m(o3.button));
  y3({ el: o3.button, $el: o3.button }), onMounted(() => {
    o3.buttonId.value = c5.id;
  }), onUnmounted(() => {
    o3.buttonId.value = null;
  });
  let f5 = ne(), d9 = f5 == null ? void 0 : f5.closeOthers, I3 = de2(), s3 = computed(() => I3 === null ? false : I3.value === o3.panelId.value), b4 = ref(null), P3 = `headlessui-focus-sentinel-${t()}`;
  s3.value || watchEffect(() => {
    o3.button.value = b4.value;
  });
  let a6 = b2(computed(() => ({ as: c5.as, type: m5.type })), b4);
  function F3(n6) {
    var t5, r4, u6, v4, S5;
    if (s3.value) {
      if (o3.popoverState.value === 1)
        return;
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), (r4 = (t5 = n6.target).click) == null || r4.call(t5), o3.closePopover(), (u6 = o2(o3.button)) == null || u6.focus();
          break;
      }
    } else
      switch (n6.key) {
        case o.Space:
        case o.Enter:
          n6.preventDefault(), n6.stopPropagation(), o3.popoverState.value === 1 && (d9 == null || d9(o3.buttonId.value)), o3.togglePopover();
          break;
        case o.Escape:
          if (o3.popoverState.value !== 0)
            return d9 == null ? void 0 : d9(o3.buttonId.value);
          if (!o2(o3.button) || (v4 = e4.value) != null && v4.activeElement && !((S5 = o2(o3.button)) != null && S5.contains(e4.value.activeElement)))
            return;
          n6.preventDefault(), n6.stopPropagation(), o3.closePopover();
          break;
      }
  }
  function g4(n6) {
    s3.value || n6.key === o.Space && n6.preventDefault();
  }
  function E6(n6) {
    var t5, r4;
    c5.disabled || (s3.value ? (o3.closePopover(), (t5 = o2(o3.button)) == null || t5.focus()) : (n6.preventDefault(), n6.stopPropagation(), o3.popoverState.value === 1 && (d9 == null || d9(o3.buttonId.value)), o3.togglePopover(), (r4 = o2(o3.button)) == null || r4.focus()));
  }
  function i4(n6) {
    n6.preventDefault(), n6.stopPropagation();
  }
  return () => {
    let n6 = o3.popoverState.value === 0, t5 = { open: n6 }, { id: r4, ...u6 } = c5, v4 = s3.value ? { ref: b4, type: a6.value, onKeydown: F3, onClick: E6 } : { ref: b4, id: r4, type: a6.value, "aria-expanded": c5.disabled ? void 0 : o3.popoverState.value === 0, "aria-controls": o2(o3.panel) ? o3.panelId.value : void 0, disabled: c5.disabled ? true : void 0, onKeydown: F3, onKeyup: g4, onClick: E6, onMousedown: i4 }, S5 = n5();
    function $3() {
      let h3 = o2(o3.panel);
      if (!h3)
        return;
      function D2() {
        u(S5.value, { [d4.Forwards]: () => O(h3, N2.First), [d4.Backwards]: () => O(h3, N2.Last) }) === T2.Error && O(d2().filter((re2) => re2.dataset.headlessuiFocusGuard !== "true"), u(S5.value, { [d4.Forwards]: N2.Next, [d4.Backwards]: N2.Previous }), { relativeTo: o2(o3.button) });
      }
      D2();
    }
    return h(Fragment, [H({ ourProps: v4, theirProps: { ...m5, ...u6 }, slot: t5, attrs: m5, slots: p7, name: "PopoverButton" }), n6 && !s3.value && o3.isPortalled.value && h(f3, { id: P3, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: $3 })]);
  };
} });
var Le = defineComponent({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true } }, setup(c5, { attrs: m5, slots: p7 }) {
  let y3 = W("PopoverOverlay"), o3 = `headlessui-popover-overlay-${t()}`, e4 = p(), f5 = computed(() => e4 !== null ? (e4.value & l.Open) === l.Open : y3.popoverState.value === 0);
  function d9() {
    y3.closePopover();
  }
  return () => {
    let I3 = { open: y3.popoverState.value === 0 };
    return H({ ourProps: { id: o3, "aria-hidden": true, onClick: d9 }, theirProps: c5, slot: I3, attrs: m5, slots: p7, features: N.RenderStrategy | N.Static, visible: f5.value, name: "PopoverOverlay" });
  };
} });
var He2 = defineComponent({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, focus: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-popover-panel-${t()}` } }, inheritAttrs: false, setup(c5, { attrs: m5, slots: p7, expose: y3 }) {
  let { focus: o3 } = c5, e4 = W("PopoverPanel"), f5 = computed(() => m(e4.panel)), d9 = `headlessui-focus-sentinel-before-${t()}`, I3 = `headlessui-focus-sentinel-after-${t()}`;
  y3({ el: e4.panel, $el: e4.panel }), onMounted(() => {
    e4.panelId.value = c5.id;
  }), onUnmounted(() => {
    e4.panelId.value = null;
  }), provide(le, e4.panelId), watchEffect(() => {
    var n6, t5;
    if (!o3 || e4.popoverState.value !== 0 || !e4.panel)
      return;
    let i4 = (n6 = f5.value) == null ? void 0 : n6.activeElement;
    (t5 = o2(e4.panel)) != null && t5.contains(i4) || O(o2(e4.panel), N2.First);
  });
  let s3 = p(), b4 = computed(() => s3 !== null ? (s3.value & l.Open) === l.Open : e4.popoverState.value === 0);
  function P3(i4) {
    var n6, t5;
    switch (i4.key) {
      case o.Escape:
        if (e4.popoverState.value !== 0 || !o2(e4.panel) || f5.value && !((n6 = o2(e4.panel)) != null && n6.contains(f5.value.activeElement)))
          return;
        i4.preventDefault(), i4.stopPropagation(), e4.closePopover(), (t5 = o2(e4.button)) == null || t5.focus();
        break;
    }
  }
  function a6(i4) {
    var t5, r4, u6, v4, S5;
    let n6 = i4.relatedTarget;
    n6 && o2(e4.panel) && ((t5 = o2(e4.panel)) != null && t5.contains(n6) || (e4.closePopover(), ((u6 = (r4 = o2(e4.beforePanelSentinel)) == null ? void 0 : r4.contains) != null && u6.call(r4, n6) || (S5 = (v4 = o2(e4.afterPanelSentinel)) == null ? void 0 : v4.contains) != null && S5.call(v4, n6)) && n6.focus({ preventScroll: true })));
  }
  let F3 = n5();
  function g4() {
    let i4 = o2(e4.panel);
    if (!i4)
      return;
    function n6() {
      u(F3.value, { [d4.Forwards]: () => {
        var r4;
        O(i4, N2.First) === T2.Error && ((r4 = o2(e4.afterPanelSentinel)) == null || r4.focus());
      }, [d4.Backwards]: () => {
        var t5;
        (t5 = o2(e4.button)) == null || t5.focus({ preventScroll: true });
      } });
    }
    n6();
  }
  function E6() {
    let i4 = o2(e4.panel);
    if (!i4)
      return;
    function n6() {
      u(F3.value, { [d4.Forwards]: () => {
        let t5 = o2(e4.button), r4 = o2(e4.panel);
        if (!t5)
          return;
        let u6 = d2(), v4 = u6.indexOf(t5), S5 = u6.slice(0, v4 + 1), h3 = [...u6.slice(v4 + 1), ...S5];
        for (let D2 of h3.slice())
          if (D2.dataset.headlessuiFocusGuard === "true" || r4 != null && r4.contains(D2)) {
            let w3 = h3.indexOf(D2);
            w3 !== -1 && h3.splice(w3, 1);
          }
        O(h3, N2.First, { sorted: false });
      }, [d4.Backwards]: () => {
        var r4;
        O(i4, N2.Previous) === T2.Error && ((r4 = o2(e4.button)) == null || r4.focus());
      } });
    }
    n6();
  }
  return () => {
    let i4 = { open: e4.popoverState.value === 0, close: e4.close }, { id: n6, focus: t5, ...r4 } = c5, u6 = { ref: e4.panel, id: n6, onKeydown: P3, onFocusout: o3 && e4.popoverState.value === 0 ? a6 : void 0, tabIndex: -1 };
    return H({ ourProps: u6, theirProps: { ...m5, ...r4 }, attrs: m5, slot: i4, slots: { ...p7, default: (...v4) => {
      var S5;
      return [h(Fragment, [b4.value && e4.isPortalled.value && h(f3, { id: d9, ref: e4.beforePanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: g4 }), (S5 = p7.default) == null ? void 0 : S5.call(p7, ...v4), b4.value && e4.isPortalled.value && h(f3, { id: I3, ref: e4.afterPanelSentinel, features: a2.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: E6 })])];
    } }, features: N.RenderStrategy | N.Static, visible: b4.value, name: "PopoverPanel" });
  };
} });
var Ke3 = defineComponent({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(c5, { attrs: m5, slots: p7, expose: y3 }) {
  let o3 = ref(null), e4 = shallowRef([]), f5 = computed(() => m(o3));
  y3({ el: o3, $el: o3 });
  function d9(P3) {
    let a6 = e4.value.indexOf(P3);
    a6 !== -1 && e4.value.splice(a6, 1);
  }
  function I3(P3) {
    return e4.value.push(P3), () => {
      d9(P3);
    };
  }
  function s3() {
    var F3;
    let P3 = f5.value;
    if (!P3)
      return false;
    let a6 = P3.activeElement;
    return (F3 = o2(o3)) != null && F3.contains(a6) ? true : e4.value.some((g4) => {
      var E6, i4;
      return ((E6 = P3.getElementById(g4.buttonId.value)) == null ? void 0 : E6.contains(a6)) || ((i4 = P3.getElementById(g4.panelId.value)) == null ? void 0 : i4.contains(a6));
    });
  }
  function b4(P3) {
    for (let a6 of e4.value)
      a6.buttonId.value !== P3 && a6.close();
  }
  return provide(oe, { registerPopover: I3, unregisterPopover: d9, isFocusWithinPopoverGroup: s3, closeOthers: b4 }), () => H({ ourProps: { ref: o3 }, theirProps: c5, slot: {}, attrs: m5, slots: p7, name: "PopoverGroup" });
} });

// node_modules/@headlessui/vue/dist/components/label/label.js
var a5 = Symbol("LabelContext");
function d6() {
  let t5 = inject(a5, null);
  if (t5 === null) {
    let n6 = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(n6, d6), n6;
  }
  return t5;
}
function K2({ slot: t5 = {}, name: n6 = "Label", props: i4 = {} } = {}) {
  let e4 = ref([]);
  function l4(r4) {
    return e4.value.push(r4), () => {
      let o3 = e4.value.indexOf(r4);
      o3 !== -1 && e4.value.splice(o3, 1);
    };
  }
  return provide(a5, { register: l4, slot: t5, name: n6, props: i4 }), computed(() => e4.value.length > 0 ? e4.value.join(" ") : void 0);
}
var T3 = defineComponent({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-label-${t()}` } }, setup(t5, { slots: n6, attrs: i4 }) {
  let e4 = d6();
  return onMounted(() => onUnmounted(e4.register(t5.id))), () => {
    let { name: l4 = "Label", slot: r4 = {}, props: o3 = {} } = e4, { id: p7, passive: c5, ...u6 } = t5, s3 = { ...Object.entries(o3).reduce((f5, [b4, g4]) => Object.assign(f5, { [b4]: unref(g4) }), {}), id: p7 };
    return c5 && (delete s3.onClick, delete s3.htmlFor, delete u6.onClick), H({ ourProps: s3, theirProps: u6, slot: r4, attrs: i4, slots: n6, name: l4 });
  };
} });

// node_modules/@headlessui/vue/dist/components/radio-group/radio-group.js
function ne2(t5, m5) {
  return t5 === m5;
}
var V2 = Symbol("RadioGroupContext");
function j3(t5) {
  let m5 = inject(V2, null);
  if (m5 === null) {
    let o3 = new Error(`<${t5} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, j3), o3;
  }
  return m5;
}
var Oe = defineComponent({ name: "RadioGroup", emits: { "update:modelValue": (t5) => true }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: false }, by: { type: [String, Function], default: () => ne2 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: true }, id: { type: String, default: () => `headlessui-radiogroup-${t()}` } }, inheritAttrs: false, setup(t5, { emit: m5, attrs: o3, slots: k2, expose: d9 }) {
  let s3 = ref(null), i4 = ref([]), b4 = K2({ name: "RadioGroupLabel" }), E6 = M({ name: "RadioGroupDescription" });
  d9({ el: s3, $el: s3 });
  let [f5, w3] = d3(computed(() => t5.modelValue), (e4) => m5("update:modelValue", e4), computed(() => t5.defaultValue)), l4 = { options: i4, value: f5, disabled: computed(() => t5.disabled), firstOption: computed(() => i4.value.find((e4) => !e4.propsRef.disabled)), containsCheckedOption: computed(() => i4.value.some((e4) => l4.compare(toRaw(e4.propsRef.value), toRaw(t5.modelValue)))), compare(e4, a6) {
    if (typeof t5.by == "string") {
      let n6 = t5.by;
      return (e4 == null ? void 0 : e4[n6]) === (a6 == null ? void 0 : a6[n6]);
    }
    return t5.by(e4, a6);
  }, change(e4) {
    var n6;
    if (t5.disabled || l4.compare(toRaw(f5.value), toRaw(e4)))
      return false;
    let a6 = (n6 = i4.value.find((r4) => l4.compare(toRaw(r4.propsRef.value), toRaw(e4)))) == null ? void 0 : n6.propsRef;
    return a6 != null && a6.disabled ? false : (w3(e4), true);
  }, registerOption(e4) {
    i4.value.push(e4), i4.value = I(i4.value, (a6) => a6.element);
  }, unregisterOption(e4) {
    let a6 = i4.value.findIndex((n6) => n6.id === e4);
    a6 !== -1 && i4.value.splice(a6, 1);
  } };
  provide(V2, l4), p2({ container: computed(() => o2(s3)), accept(e4) {
    return e4.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : e4.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e4) {
    e4.setAttribute("role", "none");
  } });
  function g4(e4) {
    if (!s3.value || !s3.value.contains(e4.target))
      return;
    let a6 = i4.value.filter((n6) => n6.propsRef.disabled === false).map((n6) => n6.element);
    switch (e4.key) {
      case o.Enter:
        p3(e4.currentTarget);
        break;
      case o.ArrowLeft:
      case o.ArrowUp:
        if (e4.preventDefault(), e4.stopPropagation(), O(a6, N2.Previous | N2.WrapAround) === T2.Success) {
          let r4 = i4.value.find((p7) => {
            var c5;
            return p7.element === ((c5 = m(s3)) == null ? void 0 : c5.activeElement);
          });
          r4 && l4.change(r4.propsRef.value);
        }
        break;
      case o.ArrowRight:
      case o.ArrowDown:
        if (e4.preventDefault(), e4.stopPropagation(), O(a6, N2.Next | N2.WrapAround) === T2.Success) {
          let r4 = i4.value.find((p7) => {
            var c5;
            return p7.element === ((c5 = m(p7.element)) == null ? void 0 : c5.activeElement);
          });
          r4 && l4.change(r4.propsRef.value);
        }
        break;
      case o.Space:
        {
          e4.preventDefault(), e4.stopPropagation();
          let n6 = i4.value.find((r4) => {
            var p7;
            return r4.element === ((p7 = m(r4.element)) == null ? void 0 : p7.activeElement);
          });
          n6 && l4.change(n6.propsRef.value);
        }
        break;
    }
  }
  let R3 = computed(() => {
    var e4;
    return (e4 = o2(s3)) == null ? void 0 : e4.closest("form");
  });
  return onMounted(() => {
    watch([R3], () => {
      if (!R3.value || t5.defaultValue === void 0)
        return;
      function e4() {
        l4.change(t5.defaultValue);
      }
      return R3.value.addEventListener("reset", e4), () => {
        var a6;
        (a6 = R3.value) == null || a6.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { disabled: e4, name: a6, id: n6, ...r4 } = t5, p7 = { ref: s3, id: n6, role: "radiogroup", "aria-labelledby": b4.value, "aria-describedby": E6.value, onKeydown: g4 };
    return h(Fragment, [...a6 != null && f5.value != null ? e2({ [a6]: f5.value }).map(([c5, S5]) => h(f3, K({ features: a2.Hidden, key: c5, as: "input", type: "hidden", hidden: true, readOnly: true, name: c5, value: S5 }))) : [], H({ ourProps: p7, theirProps: { ...o3, ...T(r4, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o3, slots: k2, name: "RadioGroup" })]);
  };
} });
var re = ((o3) => (o3[o3.Empty = 1] = "Empty", o3[o3.Active = 2] = "Active", o3))(re || {});
var ke = defineComponent({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: false }, id: { type: String, default: () => `headlessui-radiogroup-option-${t()}` } }, setup(t5, { attrs: m5, slots: o3, expose: k2 }) {
  let d9 = j3("RadioGroupOption"), s3 = K2({ name: "RadioGroupLabel" }), i4 = M({ name: "RadioGroupDescription" }), b4 = ref(null), E6 = computed(() => ({ value: t5.value, disabled: t5.disabled })), f5 = ref(1);
  k2({ el: b4, $el: b4 }), onMounted(() => d9.registerOption({ id: t5.id, element: b4, propsRef: E6 })), onUnmounted(() => d9.unregisterOption(t5.id));
  let w3 = computed(() => {
    var r4;
    return ((r4 = d9.firstOption.value) == null ? void 0 : r4.id) === t5.id;
  }), l4 = computed(() => d9.disabled.value || t5.disabled), g4 = computed(() => d9.compare(toRaw(d9.value.value), toRaw(t5.value))), R3 = computed(() => l4.value ? -1 : g4.value || !d9.containsCheckedOption.value && w3.value ? 0 : -1);
  function e4() {
    var r4;
    d9.change(t5.value) && (f5.value |= 2, (r4 = b4.value) == null || r4.focus());
  }
  function a6() {
    f5.value |= 2;
  }
  function n6() {
    f5.value &= -3;
  }
  return () => {
    let { id: r4, value: p7, disabled: c5, ...S5 } = t5, H4 = { checked: g4.value, disabled: l4.value, active: Boolean(f5.value & 2) }, N4 = { id: r4, ref: b4, role: "radio", "aria-checked": g4.value ? "true" : "false", "aria-labelledby": s3.value, "aria-describedby": i4.value, "aria-disabled": l4.value ? true : void 0, tabIndex: R3.value, onClick: l4.value ? void 0 : e4, onFocus: l4.value ? void 0 : a6, onBlur: l4.value ? void 0 : n6 };
    return H({ ourProps: N4, theirProps: S5, slot: H4, attrs: m5, slots: o3, name: "RadioGroupOption" });
  };
} });
var Ee2 = T3;
var we = E3;

// node_modules/@headlessui/vue/dist/components/switch/switch.js
var S4 = Symbol("GroupContext");
var oe2 = defineComponent({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(l4, { slots: p7, attrs: a6 }) {
  let i4 = ref(null), s3 = K2({ name: "SwitchLabel", props: { htmlFor: computed(() => {
    var n6;
    return (n6 = i4.value) == null ? void 0 : n6.id;
  }), onClick(n6) {
    i4.value && (n6.currentTarget.tagName === "LABEL" && n6.preventDefault(), i4.value.click(), i4.value.focus({ preventScroll: true }));
  } } }), t5 = M({ name: "SwitchDescription" });
  return provide(S4, { switchRef: i4, labelledby: s3, describedby: t5 }), () => H({ theirProps: l4, ourProps: {}, slot: {}, slots: p7, attrs: a6, name: "SwitchGroup" });
} });
var ae = defineComponent({ name: "Switch", emits: { "update:modelValue": (l4) => true }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: true }, name: { type: String, optional: true }, value: { type: String, optional: true }, id: { type: String, default: () => `headlessui-switch-${t()}` } }, inheritAttrs: false, setup(l4, { emit: p7, attrs: a6, slots: i4, expose: s3 }) {
  let t5 = inject(S4, null), [o3, n6] = d3(computed(() => l4.modelValue), (e4) => p7("update:modelValue", e4), computed(() => l4.defaultChecked));
  function f5() {
    n6(!o3.value);
  }
  let w3 = ref(null), u6 = t5 === null ? w3 : t5.switchRef, k2 = b2(computed(() => ({ as: l4.as, type: a6.type })), u6);
  s3({ el: u6, $el: u6 });
  function g4(e4) {
    e4.preventDefault(), f5();
  }
  function C2(e4) {
    e4.key === o.Space ? (e4.preventDefault(), f5()) : e4.key === o.Enter && p3(e4.currentTarget);
  }
  function E6(e4) {
    e4.preventDefault();
  }
  let c5 = computed(() => {
    var e4, r4;
    return (r4 = (e4 = o2(u6)) == null ? void 0 : e4.closest) == null ? void 0 : r4.call(e4, "form");
  });
  return onMounted(() => {
    watch([c5], () => {
      if (!c5.value || l4.defaultChecked === void 0)
        return;
      function e4() {
        n6(l4.defaultChecked);
      }
      return c5.value.addEventListener("reset", e4), () => {
        var r4;
        (r4 = c5.value) == null || r4.removeEventListener("reset", e4);
      };
    }, { immediate: true });
  }), () => {
    let { id: e4, name: r4, value: L4, ...D2 } = l4, R3 = { checked: o3.value }, K3 = { id: e4, ref: u6, role: "switch", type: k2.value, tabIndex: 0, "aria-checked": o3.value, "aria-labelledby": t5 == null ? void 0 : t5.labelledby.value, "aria-describedby": t5 == null ? void 0 : t5.describedby.value, onClick: g4, onKeyup: C2, onKeypress: E6 };
    return h(Fragment, [r4 != null && o3.value != null ? h(f3, K({ features: a2.Hidden, as: "input", type: "checkbox", hidden: true, readOnly: true, checked: o3.value, name: r4, value: L4 })) : null, H({ ourProps: K3, theirProps: { ...a6, ...T(D2, ["modelValue", "defaultChecked"]) }, slot: R3, attrs: a6, slots: i4, name: "Switch" })]);
  };
} });
var ue = T3;
var de3 = E3;

// node_modules/@headlessui/vue/dist/internal/focus-sentinel.js
var d7 = defineComponent({ props: { onFocus: { type: Function, required: true } }, setup(t5) {
  let n6 = ref(true);
  return () => n6.value ? h(f3, { as: "button", type: "button", features: a2.Focusable, onFocus(o3) {
    o3.preventDefault();
    let e4, a6 = 50;
    function r4() {
      var u6;
      if (a6-- <= 0) {
        e4 && cancelAnimationFrame(e4);
        return;
      }
      if ((u6 = t5.onFocus) != null && u6.call(t5)) {
        n6.value = false, cancelAnimationFrame(e4);
        return;
      }
      e4 = requestAnimationFrame(r4);
    }
    e4 = requestAnimationFrame(r4);
  } }) : null;
} });

// node_modules/@headlessui/vue/dist/components/tabs/tabs.js
var te2 = ((i4) => (i4[i4.Forwards = 0] = "Forwards", i4[i4.Backwards = 1] = "Backwards", i4))(te2 || {});
var le2 = ((s3) => (s3[s3.Less = -1] = "Less", s3[s3.Equal = 0] = "Equal", s3[s3.Greater = 1] = "Greater", s3))(le2 || {});
var U2 = Symbol("TabsContext");
function k(a6) {
  let v4 = inject(U2, null);
  if (v4 === null) {
    let i4 = new Error(`<${a6} /> is missing a parent <TabGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i4, k), i4;
  }
  return v4;
}
var j4 = Symbol("TabsSSRContext");
var xe = defineComponent({ name: "TabGroup", emits: { change: (a6) => true }, props: { as: { type: [Object, String], default: "template" }, selectedIndex: { type: [Number], default: null }, defaultIndex: { type: [Number], default: 0 }, vertical: { type: [Boolean], default: false }, manual: { type: [Boolean], default: false } }, inheritAttrs: false, setup(a6, { slots: v4, attrs: i4, emit: s3 }) {
  var h3;
  let l4 = ref((h3 = a6.selectedIndex) != null ? h3 : a6.defaultIndex), n6 = ref([]), o3 = ref([]), T5 = computed(() => a6.selectedIndex !== null), b4 = computed(() => T5.value ? a6.selectedIndex : l4.value);
  function m5(t5) {
    var S5;
    let e4 = I(r4.tabs.value, o2), u6 = I(r4.panels.value, o2), f5 = e4.filter((p7) => {
      var E6;
      return !((E6 = o2(p7)) != null && E6.hasAttribute("disabled"));
    });
    if (t5 < 0 || t5 > e4.length - 1) {
      let p7 = u(l4.value === null ? 0 : Math.sign(t5 - l4.value), { [-1]: () => 1, [0]: () => u(Math.sign(t5), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
      l4.value = u(p7, { [0]: () => e4.indexOf(f5[0]), [1]: () => e4.indexOf(f5[f5.length - 1]) }), r4.tabs.value = e4, r4.panels.value = u6;
    } else {
      let p7 = e4.slice(0, t5), G2 = [...e4.slice(t5), ...p7].find((W2) => f5.includes(W2));
      if (!G2)
        return;
      let B4 = (S5 = e4.indexOf(G2)) != null ? S5 : r4.selectedIndex.value;
      B4 === -1 && (B4 = r4.selectedIndex.value), l4.value = B4, r4.tabs.value = e4, r4.panels.value = u6;
    }
  }
  let r4 = { selectedIndex: computed(() => {
    var t5, e4;
    return (e4 = (t5 = l4.value) != null ? t5 : a6.defaultIndex) != null ? e4 : null;
  }), orientation: computed(() => a6.vertical ? "vertical" : "horizontal"), activation: computed(() => a6.manual ? "manual" : "auto"), tabs: n6, panels: o3, setSelectedIndex(t5) {
    b4.value !== t5 && s3("change", t5), T5.value || m5(t5);
  }, registerTab(t5) {
    var f5;
    if (n6.value.includes(t5))
      return;
    let e4 = n6.value[l4.value];
    n6.value.push(t5), n6.value = I(n6.value, o2);
    let u6 = (f5 = n6.value.indexOf(e4)) != null ? f5 : l4.value;
    u6 !== -1 && (l4.value = u6);
  }, unregisterTab(t5) {
    let e4 = n6.value.indexOf(t5);
    e4 !== -1 && n6.value.splice(e4, 1);
  }, registerPanel(t5) {
    o3.value.includes(t5) || (o3.value.push(t5), o3.value = I(o3.value, o2));
  }, unregisterPanel(t5) {
    let e4 = o3.value.indexOf(t5);
    e4 !== -1 && o3.value.splice(e4, 1);
  } };
  provide(U2, r4);
  let R3 = ref({ tabs: [], panels: [] }), y3 = ref(false);
  onMounted(() => {
    y3.value = true;
  }), provide(j4, computed(() => y3.value ? null : R3.value));
  let w3 = computed(() => a6.selectedIndex);
  return onMounted(() => {
    watch([w3], () => {
      var t5;
      return m5((t5 = a6.selectedIndex) != null ? t5 : a6.defaultIndex);
    }, { immediate: true });
  }), watchEffect(() => {
    if (!T5.value || b4.value == null || r4.tabs.value.length <= 0)
      return;
    let t5 = I(r4.tabs.value, o2);
    t5.some((u6, f5) => o2(r4.tabs.value[f5]) !== o2(u6)) && r4.setSelectedIndex(t5.findIndex((u6) => o2(u6) === o2(r4.tabs.value[b4.value])));
  }), () => {
    let t5 = { selectedIndex: l4.value };
    return h(Fragment, [n6.value.length <= 0 && h(d7, { onFocus: () => {
      for (let e4 of n6.value) {
        let u6 = o2(e4);
        if ((u6 == null ? void 0 : u6.tabIndex) === 0)
          return u6.focus(), true;
      }
      return false;
    } }), H({ theirProps: { ...i4, ...T(a6, ["selectedIndex", "defaultIndex", "manual", "vertical", "onChange"]) }, ourProps: {}, slot: t5, slots: v4, attrs: i4, name: "TabGroup" })]);
  };
} });
var Ie = defineComponent({ name: "TabList", props: { as: { type: [Object, String], default: "div" } }, setup(a6, { attrs: v4, slots: i4 }) {
  let s3 = k("TabList");
  return () => {
    let l4 = { selectedIndex: s3.selectedIndex.value }, n6 = { role: "tablist", "aria-orientation": s3.orientation.value };
    return H({ ourProps: n6, theirProps: a6, slot: l4, attrs: v4, slots: i4, name: "TabList" });
  };
} });
var ye2 = defineComponent({ name: "Tab", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: false }, id: { type: String, default: () => `headlessui-tabs-tab-${t()}` } }, setup(a6, { attrs: v4, slots: i4, expose: s3 }) {
  let l4 = k("Tab"), n6 = ref(null);
  s3({ el: n6, $el: n6 }), onMounted(() => l4.registerTab(n6)), onUnmounted(() => l4.unregisterTab(n6));
  let o3 = inject(j4), T5 = computed(() => {
    if (o3.value) {
      let e4 = o3.value.tabs.indexOf(a6.id);
      return e4 === -1 ? o3.value.tabs.push(a6.id) - 1 : e4;
    }
    return -1;
  }), b4 = computed(() => {
    let e4 = l4.tabs.value.indexOf(n6);
    return e4 === -1 ? T5.value : e4;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  function r4(e4) {
    var f5;
    let u6 = e4();
    if (u6 === T2.Success && l4.activation.value === "auto") {
      let S5 = (f5 = m(n6)) == null ? void 0 : f5.activeElement, p7 = l4.tabs.value.findIndex((E6) => o2(E6) === S5);
      p7 !== -1 && l4.setSelectedIndex(p7);
    }
    return u6;
  }
  function R3(e4) {
    let u6 = l4.tabs.value.map((S5) => o2(S5)).filter(Boolean);
    if (e4.key === o.Space || e4.key === o.Enter) {
      e4.preventDefault(), e4.stopPropagation(), l4.setSelectedIndex(b4.value);
      return;
    }
    switch (e4.key) {
      case o.Home:
      case o.PageUp:
        return e4.preventDefault(), e4.stopPropagation(), r4(() => O(u6, N2.First));
      case o.End:
      case o.PageDown:
        return e4.preventDefault(), e4.stopPropagation(), r4(() => O(u6, N2.Last));
    }
    if (r4(() => u(l4.orientation.value, { vertical() {
      return e4.key === o.ArrowUp ? O(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowDown ? O(u6, N2.Next | N2.WrapAround) : T2.Error;
    }, horizontal() {
      return e4.key === o.ArrowLeft ? O(u6, N2.Previous | N2.WrapAround) : e4.key === o.ArrowRight ? O(u6, N2.Next | N2.WrapAround) : T2.Error;
    } })) === T2.Success)
      return e4.preventDefault();
  }
  let y3 = ref(false);
  function w3() {
    var e4;
    y3.value || (y3.value = true, !a6.disabled && ((e4 = o2(n6)) == null || e4.focus(), l4.setSelectedIndex(b4.value), t3(() => {
      y3.value = false;
    })));
  }
  function h3(e4) {
    e4.preventDefault();
  }
  let t5 = b2(computed(() => ({ as: a6.as, type: v4.type })), n6);
  return () => {
    var p7;
    let e4 = { selected: m5.value }, { id: u6, ...f5 } = a6, S5 = { ref: n6, onKeydown: R3, onMousedown: h3, onClick: w3, id: u6, role: "tab", type: t5.value, "aria-controls": (p7 = o2(l4.panels.value[b4.value])) == null ? void 0 : p7.id, "aria-selected": m5.value, tabIndex: m5.value ? 0 : -1, disabled: a6.disabled ? true : void 0 };
    return H({ ourProps: S5, theirProps: f5, slot: e4, attrs: v4, slots: i4, name: "Tab" });
  };
} });
var Se2 = defineComponent({ name: "TabPanels", props: { as: { type: [Object, String], default: "div" } }, setup(a6, { slots: v4, attrs: i4 }) {
  let s3 = k("TabPanels");
  return () => {
    let l4 = { selectedIndex: s3.selectedIndex.value };
    return H({ theirProps: a6, ourProps: {}, slot: l4, attrs: i4, slots: v4, name: "TabPanels" });
  };
} });
var ge2 = defineComponent({ name: "TabPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: false }, unmount: { type: Boolean, default: true }, id: { type: String, default: () => `headlessui-tabs-panel-${t()}` }, tabIndex: { type: Number, default: 0 } }, setup(a6, { attrs: v4, slots: i4, expose: s3 }) {
  let l4 = k("TabPanel"), n6 = ref(null);
  s3({ el: n6, $el: n6 }), onMounted(() => l4.registerPanel(n6)), onUnmounted(() => l4.unregisterPanel(n6));
  let o3 = inject(j4), T5 = computed(() => {
    if (o3.value) {
      let r4 = o3.value.panels.indexOf(a6.id);
      return r4 === -1 ? o3.value.panels.push(a6.id) - 1 : r4;
    }
    return -1;
  }), b4 = computed(() => {
    let r4 = l4.panels.value.indexOf(n6);
    return r4 === -1 ? T5.value : r4;
  }), m5 = computed(() => b4.value === l4.selectedIndex.value);
  return () => {
    var t5;
    let r4 = { selected: m5.value }, { id: R3, tabIndex: y3, ...w3 } = a6, h3 = { ref: n6, id: R3, role: "tabpanel", "aria-labelledby": (t5 = o2(l4.tabs.value[b4.value])) == null ? void 0 : t5.id, tabIndex: m5.value ? y3 : -1 };
    return !m5.value && a6.unmount && !a6.static ? h(f3, { as: "span", ...h3 }) : H({ ourProps: h3, theirProps: w3, slot: r4, attrs: v4, slots: i4, features: N.Static | N.RenderStrategy, visible: m5.value, name: "TabPanel" });
  };
} });

// node_modules/@headlessui/vue/dist/utils/once.js
function l3(r4) {
  let e4 = { called: false };
  return (...t5) => {
    if (!e4.called)
      return e4.called = true, r4(...t5);
  };
}

// node_modules/@headlessui/vue/dist/components/transitions/utils/transition.js
function m4(e4, ...t5) {
  e4 && t5.length > 0 && e4.classList.add(...t5);
}
function d8(e4, ...t5) {
  e4 && t5.length > 0 && e4.classList.remove(...t5);
}
var g3 = ((i4) => (i4.Finished = "finished", i4.Cancelled = "cancelled", i4))(g3 || {});
function F2(e4, t5) {
  let i4 = r3();
  if (!e4)
    return i4.dispose;
  let { transitionDuration: n6, transitionDelay: a6 } = getComputedStyle(e4), [l4, s3] = [n6, a6].map((o3) => {
    let [u6 = 0] = o3.split(",").filter(Boolean).map((r4) => r4.includes("ms") ? parseFloat(r4) : parseFloat(r4) * 1e3).sort((r4, c5) => c5 - r4);
    return u6;
  });
  return l4 !== 0 ? i4.setTimeout(() => t5("finished"), l4 + s3) : t5("finished"), i4.add(() => t5("cancelled")), i4.dispose;
}
function L3(e4, t5, i4, n6, a6, l4) {
  let s3 = r3(), o3 = l4 !== void 0 ? l3(l4) : () => {
  };
  return d8(e4, ...a6), m4(e4, ...t5, ...i4), s3.nextFrame(() => {
    d8(e4, ...i4), m4(e4, ...n6), s3.add(F2(e4, (u6) => (d8(e4, ...n6, ...t5), m4(e4, ...a6), o3(u6))));
  }), s3.add(() => d8(e4, ...t5, ...i4, ...n6, ...a6)), s3.add(() => o3("cancelled")), s3.dispose;
}

// node_modules/@headlessui/vue/dist/components/transitions/transition.js
function T4(e4 = "") {
  return e4.split(" ").filter((t5) => t5.trim().length > 1);
}
var O2 = Symbol("TransitionContext");
var pe2 = ((i4) => (i4.Visible = "visible", i4.Hidden = "hidden", i4))(pe2 || {});
function me2() {
  return inject(O2, null) !== null;
}
function Te() {
  let e4 = inject(O2, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
function ge3() {
  let e4 = inject(R2, null);
  if (e4 === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e4;
}
var R2 = Symbol("NestingContext");
function x4(e4) {
  return "children" in e4 ? x4(e4.children) : e4.value.filter(({ state: t5 }) => t5 === "visible").length > 0;
}
function J2(e4) {
  let t5 = ref([]), i4 = ref(false);
  onMounted(() => i4.value = true), onUnmounted(() => i4.value = false);
  function s3(n6, r4 = S.Hidden) {
    let l4 = t5.value.findIndex(({ id: f5 }) => f5 === n6);
    l4 !== -1 && (u(r4, { [S.Unmount]() {
      t5.value.splice(l4, 1);
    }, [S.Hidden]() {
      t5.value[l4].state = "hidden";
    } }), !x4(t5) && i4.value && (e4 == null || e4()));
  }
  function g4(n6) {
    let r4 = t5.value.find(({ id: l4 }) => l4 === n6);
    return r4 ? r4.state !== "visible" && (r4.state = "visible") : t5.value.push({ id: n6, state: "visible" }), () => s3(n6, S.Unmount);
  }
  return { children: t5, register: g4, unregister: s3 };
}
var Q2 = N.RenderStrategy;
var he = defineComponent({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t5, attrs: i4, slots: s3, expose: g4 }) {
  let n6 = ref(0);
  function r4() {
    n6.value |= l.Opening, t5("beforeEnter");
  }
  function l4() {
    n6.value &= ~l.Opening, t5("afterEnter");
  }
  function f5() {
    n6.value |= l.Closing, t5("beforeLeave");
  }
  function S5() {
    n6.value &= ~l.Closing, t5("afterLeave");
  }
  if (!me2() && C())
    return () => h(Se3, { ...e4, onBeforeEnter: r4, onAfterEnter: l4, onBeforeLeave: f5, onAfterLeave: S5 }, s3);
  let d9 = ref(null), a6 = ref("visible"), W2 = computed(() => e4.unmount ? S.Unmount : S.Hidden);
  g4({ el: d9, $el: d9 });
  let { show: h3, appear: N4 } = Te(), { register: A4, unregister: L4 } = ge3(), D2 = { value: true }, c5 = t(), b4 = { value: false }, I3 = J2(() => {
    !b4.value && a6.value !== "hidden" && (a6.value = "hidden", L4(c5), S5());
  });
  onMounted(() => {
    let o3 = A4(c5);
    onUnmounted(o3);
  }), watchEffect(() => {
    if (W2.value === S.Hidden && c5) {
      if (h3 && a6.value !== "visible") {
        a6.value = "visible";
        return;
      }
      u(a6.value, { ["hidden"]: () => L4(c5), ["visible"]: () => A4(c5) });
    }
  });
  let P3 = T4(e4.enter), j5 = T4(e4.enterFrom), X3 = T4(e4.enterTo), M2 = T4(e4.entered), Y2 = T4(e4.leave), Z2 = T4(e4.leaveFrom), ee = T4(e4.leaveTo);
  onMounted(() => {
    watchEffect(() => {
      if (a6.value === "visible") {
        let o3 = o2(d9);
        if (o3 instanceof Comment && o3.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function te3(o3) {
    let y3 = D2.value && !N4.value, v4 = o2(d9);
    !v4 || !(v4 instanceof HTMLElement) || y3 || (b4.value = true, h3.value && r4(), h3.value || f5(), o3(h3.value ? L3(v4, P3, j5, X3, M2, (E6) => {
      b4.value = false, E6 === g3.Finished && l4();
    }) : L3(v4, Y2, Z2, ee, M2, (E6) => {
      b4.value = false, E6 === g3.Finished && (x4(I3) || (a6.value = "hidden", L4(c5), S5()));
    })));
  }
  return onMounted(() => {
    watch([h3], (o3, y3, v4) => {
      te3(v4), D2.value = false;
    }, { immediate: true });
  }), provide(R2, I3), c(computed(() => u(a6.value, { ["visible"]: l.Open, ["hidden"]: l.Closed }) | n6.value)), () => {
    let { appear: o3, show: y3, enter: v4, enterFrom: E6, enterTo: Ce, entered: be3, leave: ye3, leaveFrom: Ee3, leaveTo: Ve, ..._ } = e4, ne3 = { ref: d9 }, re2 = { ..._, ...N4 && h3 && c2.isServer ? { class: normalizeClass([i4.class, _.class, ...P3, ...j5]) } : {} };
    return H({ theirProps: re2, ourProps: ne3, slot: {}, slots: s3, attrs: i4, features: Q2, visible: a6.value === "visible", name: "TransitionChild" });
  };
} });
var ce4 = he;
var Se3 = defineComponent({ inheritAttrs: false, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: true }, appear: { type: [Boolean], default: false }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => true, afterEnter: () => true, beforeLeave: () => true, afterLeave: () => true }, setup(e4, { emit: t5, attrs: i4, slots: s3 }) {
  let g4 = p(), n6 = computed(() => e4.show === null && g4 !== null ? (g4.value & l.Open) === l.Open : e4.show);
  watchEffect(() => {
    if (![true, false].includes(n6.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r4 = ref(n6.value ? "visible" : "hidden"), l4 = J2(() => {
    r4.value = "hidden";
  }), f5 = ref(true), S5 = { show: n6, appear: computed(() => e4.appear || !f5.value) };
  return onMounted(() => {
    watchEffect(() => {
      f5.value = false, n6.value ? r4.value = "visible" : x4(l4) || (r4.value = "hidden");
    });
  }), provide(R2, l4), provide(O2, S5), () => {
    let d9 = T(e4, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), a6 = { unmount: e4.unmount };
    return H({ ourProps: { ...a6, as: "template" }, theirProps: {}, slot: {}, slots: { ...s3, default: () => [h(ce4, { onBeforeEnter: () => t5("beforeEnter"), onAfterEnter: () => t5("afterEnter"), onBeforeLeave: () => t5("beforeLeave"), onAfterLeave: () => t5("afterLeave"), ...i4, ...a6, ...d9 }, s3.default)] }, attrs: {}, features: Q2, visible: r4.value === "visible", name: "Transition" });
  };
} });
export {
  Ne as Combobox,
  Ke as ComboboxButton,
  $e as ComboboxInput,
  He as ComboboxLabel,
  _e as ComboboxOption,
  Ue as ComboboxOptions,
  qe as Dialog,
  _e2 as DialogBackdrop,
  ze as DialogDescription,
  Ke2 as DialogOverlay,
  Ue2 as DialogPanel,
  Ye as DialogTitle,
  Q as Disclosure,
  V as DisclosureButton,
  X as DisclosurePanel,
  ie as FocusTrap,
  Ee as Listbox,
  Ae as ListboxButton,
  je as ListboxLabel,
  Be as ListboxOption,
  Fe as ListboxOptions,
  ge as Menu,
  Se as MenuButton,
  Me as MenuItem,
  be2 as MenuItems,
  Pe as Popover,
  Be2 as PopoverButton,
  Ke3 as PopoverGroup,
  Le as PopoverOverlay,
  He2 as PopoverPanel,
  R as Portal,
  L2 as PortalGroup,
  Oe as RadioGroup,
  we as RadioGroupDescription,
  Ee2 as RadioGroupLabel,
  ke as RadioGroupOption,
  ae as Switch,
  de3 as SwitchDescription,
  oe2 as SwitchGroup,
  ue as SwitchLabel,
  ye2 as Tab,
  xe as TabGroup,
  Ie as TabList,
  ge2 as TabPanel,
  Se2 as TabPanels,
  he as TransitionChild,
  Se3 as TransitionRoot
};
//# sourceMappingURL=@headlessui_vue.js.map
