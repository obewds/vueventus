---
title: ObeKnockoutMark Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { ObeKnockoutMark } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides an `<svg>` component of the OBE (Online Business Engineering) Knockout Mark artwork. You can therefore customize the SVGs shapes by using Tailwind classes in the `.fill-[colorKey]-[keyValue]` format such as `.fill-gray-900` and `dark:fill-gray-100`, etc.






## Import

To import the {{ $frontmatter.title }}:

```javascript
import { ObeKnockoutMark } from '@obewds/vueventus'
```






## Prop: blueFill

Type: **`String`**  
Default: **`"fill-lightBlue-400"`**

The {{ $frontmatter.title }} `blueFill` prop sets the component instance SVG fill color for the blue mark shape(s).

### Syntax

```html
<ObeKnockoutMark blue-fill="fill-gray-400" class="w-24 mx-auto"/>
```

### Result

<div class="w-full pt-4">
    <ObeKnockoutMark blue-fill="fill-gray-400" class="w-24 mx-auto"/>
</div>






## Prop: greenFill

Type: **`String`**  
Default: **`"fill-green-400"`**

The {{ $frontmatter.title }} `greenFill` prop sets the component instance SVG fill color for the green mark shape(s).

### Syntax

```html
<ObeKnockoutMark green-fill="fill-gray-400" class="w-24 mx-auto"/>
```

### Result

<div class="w-full pt-4">
    <ObeKnockoutMark green-fill="fill-gray-400" class="w-24 mx-auto"/>
</div>






## Prop: orangeFill

Type: **`String`**  
Default: **`"fill-orange-400"`**

The {{ $frontmatter.title }} `orangeFill` prop sets the component instance SVG fill color for the orange mark shape(s).

### Syntax

```html
<ObeKnockoutMark orange-fill="fill-gray-400" class="w-24 mx-auto"/>
```

### Result

<div class="w-full pt-4">
    <ObeKnockoutMark orange-fill="fill-gray-400" class="w-24 mx-auto"/>
</div>






## Prop: redFill

Type: **`String`**  
Default: **`"fill-red-400"`**

The {{ $frontmatter.title }} `redFill` prop sets the component instance SVG fill color for the red mark shape(s).

### Syntax

```html
<ObeKnockoutMark red-fill="fill-gray-400" class="w-24 mx-auto"/>
```

### Result

<div class="w-full pt-4">
    <ObeKnockoutMark red-fill="fill-gray-400" class="w-24 mx-auto"/>
</div>






## Prop: yellowFill

Type: **`String`**  
Default: **`"fill-yellow-400"`**

The {{ $frontmatter.title }} `yellowFill` prop sets the component instance SVG fill color for the yellow mark shape(s).

### Syntax

```html
<ObeKnockoutMark yellow-fill="fill-gray-400" class="w-24 mx-auto"/>
```

### Result

<div class="w-full pt-4">
    <ObeKnockoutMark yellow-fill="fill-gray-400" class="w-24 mx-auto"/>
</div>










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because the component outputs a static `<svg>` element that can be controlled via Tailwind CSS classes - especially `.fill-[colorKey]-[keyValue]` classes like `.fill-green-600` and `dark:fill-green-400` etc.
:::






<DocsPackageVersion/>
