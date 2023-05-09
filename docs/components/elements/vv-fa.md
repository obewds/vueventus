---
title: VvFa Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is essentially a pass-through for the `font-awesome-icon` component from FontAwesome's [vue-fontawesome](https://fontawesome.com/docs/web/use-with/vue/add-icons), but setup for VueVentus config defaults and components.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvFa from './vv/elements/VvFa.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvFa.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-fa-` prefixed HTML attributes.

### Syntax

```html
<VvFa :debug="true"/>
```






## Prop: family
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidFontAwesomeFamilies Module](/components/prop-validators#validfontawesomefamilies)  
Default: **`"{{ VvConfig.defaults.VvFa.family }}"`**

The {{ $frontmatter.title }} `family` prop sets the font awesome family of icons you are using via your FontAwesome `library()` icon families.

### Syntax

```html
<VvFa family="fas"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: icon

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvFa.icon }}"`**

The {{ $frontmatter.title }} `icon` prop sets the font awesome icon from the icons you are using via your FontAwesome `library()` declared icons.

### Syntax

```html
<VvFa icon="house"/>
```






## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidFontAwesomeSizes Module](/components/prop-validators#validfontawesomesizes)  
Default: **`"{{ VvConfig.defaults.VvFa.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the font awesome size for any icons you are using via your FontAwesome `library()` declared icons.

### Syntax

```html
<VvFa size="1x"/>
```

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!












## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have a Vue slot option.
:::










<DocsPackageVersion/>
