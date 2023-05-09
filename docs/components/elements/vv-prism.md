---
title: VvPrism Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->





# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is a wrapper component allowing you to use it's slot to receive code content you want highlighted with [Prism.js](https://prismjs.com/).

The component doesn't provide any `<pre>` or `<code>` elements that [Prism.js](https://prismjs.com/) requires, so you can freely add your own, wrapping your code to be highlighted in them, and allowing you to define whatever languages and plugins you may be using with [Prism.js](https://prismjs.com/) in your project's contexts.

The {{ $frontmatter.title }} does however give you boolean control over the inclusion of it's sister [VvPrismVars](/components/elements/vv-prism-vars) component, which provides Tailwind CSS driven [Prism.js](https://prismjs.com/) colors and even light and dark mode functionality for your highlighted code for your users!






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvPrism from './vv/elements/VvPrism.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvPrism.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-prism-` prefixed HTML attributes.

### Syntax

```html
<VvPrism :debug="true">
    <pre class="language-html">
        <code>
            &lt;br/&gt;
        </code>
    </pre>
</VvPrism>
```






## Prop: prismVars

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvPrism.prismVars }}`**

The {{ $frontmatter.title }} `prismVars` prop sets the component instance border color based both on the `prismVars` prop and the `prismVars` prop value together.

### Syntax

```html
<VvPrism :prism-vars="true">
    <pre class="language-html">
        <code>
            &lt;div&gt;
                VvPrism example
            &lt;/div&gt;
        </code>
    </pre>
</VvPrism>
```

### Result

```html
<div>
    VvPrism example
</div>
```










## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component that will be processed by [Prism.js](https://prismjs.com/).

### Syntax

```html
<VvPrism :prism-vars="true">
    <pre class="language-html">
        <code>
            &lt;div&gt;
                VvPrism example
            &lt;/div&gt;
        </code>
    </pre>
</VvPrism>
```

### Result

```html
<div>
    VvPrism example
</div>
```









<DocsPackageVersion/>
