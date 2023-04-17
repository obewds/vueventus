---
title: VueVentusLogoText Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VueVentusLogoText } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### ### Typing for Downstream Component Instances: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides an `<svg>` component of the VueVentus logo text's freely scalable geometry as a group. You can therefore influence the SVGs shapes by using Tailwind classes in the `.fill-[colorKey]-[keyValue]` format such as `.fill-gray-900` and `dark:fill-gray-100`, etc.






## Import

To import the {{ $frontmatter.title }}:

```javascript
import { VueVentusLogoText } from '@obewds/vueventus'
```






## Prop: class

Type: **`String`**  
Default: **`"w-full fill-gray-900 dark:fill-gray-100"`**

The {{ $frontmatter.title }} `class` prop sets the component instance SVGs CSS classes.

### Syntax

```html
<VueVentusLogoText class="w-full fill-green-600 dark:fill-green-400"/>
```

### Result

<div class="w-full pt-4">
    <VueVentusLogoText class="max-w-md fill-green-600 dark:fill-green-400"/>
</div>










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because the component outputs a static `<svg>` element that can be controlled via Tailwind CSS classes - especially `.fill-[colorKey]-[keyValue]` classes like `.fill-green-600` and `dark:fill-green-400` in the example above.
:::






<DocsPackageVersion/>
