---
title: VvList Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvList, VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides marker color control (think bulleted and numbered lists) for child list item `<li>` elements.







## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvList from './vv/lists/VvList.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvList } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!







## Prop: listStyleTypeClass

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvList.listStyleTypeClass }}"`**

The {{ $frontmatter.title }} `listStyleTypeClass` prop sets the Tailwind list style type class for the component instance.

### Syntax

```html
<VvList list-style-type-class="list-disc">
    <li>.list-disc Item One</li>
    <li>.list-disc Item Two</li>
</VvList>

<VvList list-style-type-class="list-circle">
    <li>.list-circle Item One</li>
    <li>.list-circle Item Two</li>
</VvList>

<VvList list-style-type-class="list-decimal">
    <li>.list-decimal Item One</li>
    <li>.list-decimal Item Two</li>
</VvList>

<VvList list-style-type-class="list-square">
    <li>.list-square Item One</li>
    <li>.list-square Item Two</li>
</VvList>
```

### Result

<div class="w-full pt-4">
    <VvList list-style-type-class="list-disc">
        <li>.list-disc Item One</li>
        <li>.list-disc Item Two</li>
    </VvList>
    <VvList list-style-type-class="list-circle" style="list-style-type:circle;">
        <li>.list-circle Item One</li>
        <li>.list-circle Item Two</li>
    </VvList>
    <VvList list-style-type-class="list-decimal" style="list-style-type:decimal;">
        <li>.list-decimal Item One</li>
        <li>.list-decimal Item Two</li>
    </VvList>
    <VvList list-style-type-class="list-square" style="list-style-type:square;">
        <li>.list-square Item One</li>
        <li>.list-square Item Two</li>
    </VvList>
</div>







## Prop: markerColor

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvList.markerColor }}"`**

The {{ $frontmatter.title }} `markerColor` prop sets the component instance marker color in combination with the `markerPalette` prop.

### Syntax

```html
<VvList marker-color="default">
    <li>Default Item One</li>
    <li>Default Item Two</li>
</VvList>

<VvList marker-color="error">
    <li>Error Item One</li>
    <li>Error Item Two</li>
</VvList>

<VvList marker-color="primary">
    <li>Primary Item One</li>
    <li>Primary Item Two</li>
</VvList>

<VvList marker-color="secondary">
    <li>Secondary Item One</li>
    <li>Secondary Item Two</li>
</VvList>

<VvList marker-color="success">
    <li>Success Item One</li>
    <li>Success Item Two</li>
</VvList>
```

### Result

<div class="w-full pt-4">
    <VvList marker-color="default">
        <li>Default Item One</li>
        <li>Default Item Two</li>
    </VvList>
    <VvList marker-color="error">
        <li>Error Item One</li>
        <li>Error Item Two</li>
    </VvList>
    <VvList marker-color="primary">
        <li>Primary Item One</li>
        <li>Primary Item Two</li>
    </VvList>
    <VvList marker-color="secondary">
        <li>Secondary Item One</li>
        <li>Secondary Item Two</li>
    </VvList>
    <VvList marker-color="success">
        <li>Success Item One</li>
        <li>Success Item Two</li>
    </VvList>
</div>







## Prop: markerPalette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvList.markerPalette }}"`**

The {{ $frontmatter.title }} `markerPalette` prop sets the component instance marker color in combination with the `markerColor` prop.

### Syntax

```html
<VvList marker-palette="default" marker-color="primary">
    <li>Default Item One</li>
    <li>Default Item Two</li>
</VvList>
```

### Result

<div class="w-full pt-4">
    <VvList marker-palette="default" marker-color="primary">
        <li>Default Palette Primary Color Item One</li>
        <li>Default Palette Primary Color Item Two</li>
    </VvList>
</div>







## Prop: tag

Type: **`String`**  
Valid Values: [ValidListTypes Module](/components/prop-validators#validlisttypes)  
Default: **`"{{ VvConfig.defaults.VvList.tag }}"`**

The {{ $frontmatter.title }} `tag` prop sets the component's output HTML tag name.

### Syntax

```html
<VvList tag="ul">
    <li>Unordered List Item One</li>
    <li>Unordered List Item Two</li>
</VvList>

<VvList tag="ol">
    <li>Ordered List Item One</li>
    <li>Ordered List Item Two</li>
</VvList>
```

### Result

<div class="w-full pt-4">
    <VvList tag="ul">
        <li>Unordered List Item One</li>
        <li>Unordered List Item Two</li>
    </VvList>
    <VvList tag="ol">
        <li>Ordered List Item One</li>
        <li>Ordered List Item Two</li>
    </VvList>
</div>






<DocsPackageVersion/>
