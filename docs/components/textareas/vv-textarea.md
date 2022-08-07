---
title: VvTextarea Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvTextarea, VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.










## Import

To import the {{ $frontmatter.title }}:

```javascript
import { VvTextarea } from '@obewds/vueventus'
```





<!-- TODO: Add documentation/example for new component emit functionality -->






## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvTextarea.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvTextarea color="default" class="mb-2"/>
<VvTextarea color="error" class="mb-2"/>
<VvTextarea color="success" class="mb-2"/>
```

### Result

<div class="w-full pt-4">
    <VvTextarea color="default" class="mb-2"/>
    <VvTextarea color="error" class="mb-2"/>
    <VvTextarea color="success" class="mb-2"/>
</div>










## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvTextarea.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvTextarea palette="default" color="default" class="mb-2"/>
<VvTextarea palette="default" color="error" class="mb-2"/>
<VvTextarea palette="default" color="success" class="mb-2"/>
```

### Result

<div class="w-full pt-4">
    <VvTextarea palette="default" color="default" class="mb-2"/>
    <VvTextarea palette="default" color="error" class="mb-2"/>
    <VvTextarea palette="default" color="success" class="mb-2"/>
</div>










## Prop: size

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvTextarea.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of textarea typically involves padding and font size atomic classes.

### Syntax

```html
<VvTextarea size="lg" placeholder="Size: lg"/>
```

### Result

<div class="w-full pt-4">
    <VvTextarea size="lg" placeholder="Size: lg"/>
</div>

::: details size prop textarea size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvTextarea size="xs" placeholder="Size: xs"/>
    <VvTextarea size="sm" placeholder="Size: sm"/>
    <VvTextarea size="md" placeholder="Size: md"/>
    <VvTextarea size="lg" placeholder="Size: lg"/>
    <VvTextarea size="xl" placeholder="Size: xl"/>
    <VvTextarea size="2xl" placeholder="Size: 2xl"/>
</div>
:::










## Prop: rowSize

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvTextarea.rowSize }}"`**

The {{ $frontmatter.title }} `rowSize` prop sets the component instance `<textarea row="">` number value for the rendered Textarea element, which controls the vertical height of the element.

### Syntax

```html
<VvTextarea row-size="lg" placeholder="Size: lg"/>
```

### Result

<div class="w-full pt-4">
    <VvTextarea row-size="lg" placeholder="Size: lg"/>
</div>

::: details size prop textarea size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvTextarea row-size="xs" placeholder="Size: xs"/>
    <VvTextarea row-size="sm" placeholder="Size: sm"/>
    <VvTextarea row-size="md" placeholder="Size: md"/>
    <VvTextarea row-size="lg" placeholder="Size: lg"/>
    <VvTextarea row-size="xl" placeholder="Size: xl"/>
    <VvTextarea row-size="2xl" placeholder="Size: 2xl"/>
</div>
:::









## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because it's expected to use this `<textarea>` based component with reactive values that are bound to this component (like `v-bind-""` etc.)
:::










<DocsPackageVersion/>
