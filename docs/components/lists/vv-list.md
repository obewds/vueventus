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
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: markerPalette
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvList.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of list elements typically involves font size atomic classes.

### Syntax

```html
<VvList size="lg">
    <li>Large Item One</li>
    <li>Large Item Two</li>
</VvList>
```

### Result

<div class="w-full pt-4">
    <VvList size="lg">
        <li>Large Item One</li>
        <li>Large Item Two</li>
    </VvList>
</div>

::: details size prop VvList size examples
<div class="pt-4">
    <VvList size="5xs">
        <li>size="5xs" One</li>
        <li>size="5xs" Two</li>
    </VvList>
    <VvList size="4xs">
        <li>size="4xs" One</li>
        <li>size="4xs" Two</li>
    </VvList>
    <VvList size="3xs">
        <li>size="3xs" One</li>
        <li>size="3xs" Two</li>
    </VvList>
    <VvList size="2xs">
        <li>size="2xs" One</li>
        <li>size="2xs" Two</li>
    </VvList>
    <VvList size="xs">
        <li>size="xs" One</li>
        <li>size="xs" Two</li>
    </VvList>
    <VvList size="sm">
        <li>size="sm" One</li>
        <li>size="sm" Two</li>
    </VvList>
    <VvList size="md">
        <li>size="md" One</li>
        <li>size="md" Two</li>
    </VvList>
    <VvList size="lg">
        <li>size="lg" One</li>
        <li>size="lg" Two</li>
    </VvList>
    <VvList size="xl">
        <li>size="xl" One</li>
        <li>size="xl" Two</li>
    </VvList>
    <VvList size="2xl">
        <li>size="2xl" One</li>
        <li>size="2xl" Two</li>
    </VvList>
    <VvList size="3xl">
        <li>size="3xl" One</li>
        <li>size="3xl" Two</li>
    </VvList>
    <VvList size="4xl">
        <li>size="4xl" One</li>
        <li>size="4xl" Two</li>
    </VvList>
    <VvList size="5xl">
        <li>size="5xl" One</li>
        <li>size="5xl" Two</li>
    </VvList>
    <VvList size="6xl">
        <li>size="6xl" One</li>
        <li>size="6xl" Two</li>
    </VvList>
    <VvList size="7xl">
        <li>size="7xl" One</li>
        <li>size="7xl" Two</li>
    </VvList>
    <VvList size="8xl">
        <li>size="8xl" One</li>
        <li>size="8xl" Two</li>
    </VvList>
    <VvList size="9xl">
        <li>size="9xl" One</li>
        <li>size="9xl" Two</li>
    </VvList>
    <VvList size="10xl">
        <li>size="10xl" One</li>
        <li>size="10xl" Two</li>
    </VvList>
    <VvList size="11xl">
        <li>size="11xl" One</li>
        <li>size="11xl" Two</li>
    </VvList>
    <VvList size="12xl">
        <li>size="12xl" One</li>
        <li>size="12xl" Two</li>
    </VvList>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: tag
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Slot: #default
<!-- TODO: add default slot documentation for component -->
Coming Soon!






<DocsPackageVersion/>
