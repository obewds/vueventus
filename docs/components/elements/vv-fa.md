---
title: VvFa Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is essentially a pass-through for the `font-awesome-icon` component from FontAwesome's [vue-fontawesome](https://fontawesome.com/docs/web/use-with/vue/add-icons), but setup for VueVentus config defaults and components.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvFa from './vv/elements/VvFa.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!






## Prop: family

Type: **`String`**  
Valid Values: [ValidFontAwesomeFamilies Module](/components/prop-validators#validfontawesomefamilies)  
Default: **`"fas"`**

The {{ $frontmatter.title }} `family` prop sets the font awesome family of icons you are using via your FontAwesome `library()` icon families.

### Syntax

```html
<VvFa family="fas"/>
```






## Prop: icon

Type: **`String`**  
Default: **`"house"`**

The {{ $frontmatter.title }} `icon` prop sets the font awesome icon from the icons you are using via your FontAwesome `library()` declared icons.

### Syntax

```html
<VvFa icon="house"/>
```






## Prop: size

Type: **`String`**  
Valid Values: [ValidFontAwesomeSizes Module](/components/prop-validators#validfontawesomesizes)  
Default: **`"1x"`**

The {{ $frontmatter.title }} `size` prop sets the font awesome size for any icons you are using via your FontAwesome `library()` declared icons.

### Syntax

```html
<VvFa size="1x"/>
```










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have a Vue slot option.
:::










<DocsPackageVersion/>
