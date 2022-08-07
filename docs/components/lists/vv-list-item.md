---
title: VvListItem Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvListItem } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides palette and color control of list item text and their symbol/bullet characters separately.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { VvListItem } from '@obewds/vueventus'
```






## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListItem.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance text color in combination with the `palette` prop.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem color="default">default List Item</VvListItem>
    <VvListItem color="error">error List Item</VvListItem>
    <VvListItem color="primary">primary List Item</VvListItem>
    <VvListItem color="secondary">secondary List Item</VvListItem>
    <VvListItem color="success">success List Item</VvListItem>
    <VvListItem color="neutral">neutral List Item</VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem color="default">default List Item</VvListItem>
        <VvListItem color="error">error List Item</VvListItem>
        <VvListItem color="primary">primary List Item</VvListItem>
        <VvListItem color="secondary">secondary List Item</VvListItem>
        <VvListItem color="success">success List Item</VvListItem>
        <VvListItem color="neutral">neutral List Item</VvListItem>
    </ul>
</div>






## Prop: enableColoredSymbols

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvListItem.enableColoredSymbols }}`**

The {{ $frontmatter.title }} `enableColoredSymbols` prop enables the component to be use with separate colors for symbols and list items using the `color`, `palette`, `symbolColor`, `symbolPalette` props.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem :enable-colored-symbols="true" symbol-color="default">default List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="error">error List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="primary">primary List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="secondary">secondary List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="success">success List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="neutral">neutral List Item</VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem :enable-colored-symbols="true" symbol-color="default">default List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="error">error List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="primary">primary List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="secondary">secondary List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="success">success List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="neutral">neutral List Item</VvListItem>
    </ul>
</div>






## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListItem.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance text color in combination with the `color` prop.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem palette="default" color="default">default Palette List Item</VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem palette="default" color="default">default Palette List Item</VvListItem>
    </ul>
</div>






## Prop: symbolColor

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListItem.symbolColor }}"`**

The {{ $frontmatter.title }} `symbolColor` prop sets the component instance symbol color in combination with the `symbolPalette` prop.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem :enable-colored-symbols="true" symbol-color="default">default List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="error">error List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="primary">primary List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="secondary">secondary List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="success">success List Item</VvListItem>
    <VvListItem :enable-colored-symbols="true" symbol-color="neutral">neutral List Item</VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem :enable-colored-symbols="true" symbol-color="default">default List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="error">error List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="primary">primary List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="secondary">secondary List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="success">success List Item</VvListItem>
        <VvListItem :enable-colored-symbols="true" symbol-color="neutral">neutral List Item</VvListItem>
    </ul>
</div>






## Prop: symbolPalette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvListItem.symbolPalette }}"`**

The {{ $frontmatter.title }} `symbolPalette` prop sets the component instance symbol color in combination with the `symbolColor` prop.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem :enable-colored-symbols="true" symbol-palette="default">default Palette List Item</VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem :enable-colored-symbols="true" symbol-palette="default">default Palette List Item</VvListItem>
    </ul>
</div>










## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<ul class="list-disc text-left pl-4">
    <VvListItem>
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvListItem>
</ul>
```

### Result

<div class="w-full pt-4">
    <ul class="list-disc text-left pl-4">
        <VvListItem>
            Slot <span class="text-red-500 dark:text-red-300">Content</span>
        </VvListItem>
    </ul>
</div>






<DocsPackageVersion/>
