---
title: ObeKnockoutMark Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { ObeKnockoutMark } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides an `<svg>` component of the OBE (Online Business Engineering) Knockout Mark artwork. You can therefore customize the SVGs shapes by using Tailwind classes in the `.fill-[colorKey]-[keyValue]` format such as `.fill-gray-900` and `dark:fill-gray-100`, etc.





## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { ObeKnockoutMark } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} SFC directly:

```javascript
import ObeKnockoutMark from '@obewds/vueventus/dist/components/logos/ObeKnockoutMark.vue'
```






## Prop: blueFill

Type: **`String`**  
Default: **`"fill-lightBlue-400"`**

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

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

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

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

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

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

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

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

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

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
