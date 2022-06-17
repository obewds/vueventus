---
title: VvInput Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvInput, VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of input elements for applications with an extremely DRY implementation of atomic classes.





## Import

```javascript
import { VvInput } from '@obewds/vueventus'
```










## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvInput.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvInput color="default" class="mb-2"/>
<VvInput color="error" class="mb-2"/>
<VvInput color="success" class="mb-2"/>
```

### Result

<div class="w-full pt-4">
    <VvInput color="default" class="mb-2"/>
    <VvInput color="error" class="mb-2"/>
    <VvInput color="success" class="mb-2"/>
</div>










## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvInput.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvInput palette="validation" color="default" class="mb-2"/>
<VvInput palette="validation" color="error" class="mb-2"/>
<VvInput palette="validation" color="success" class="mb-2"/>
```

### Result

<div class="w-full pt-4">
    <VvInput palette="validation" color="default" class="mb-2"/>
    <VvInput palette="validation" color="error" class="mb-2"/>
    <VvInput palette="validation" color="success" class="mb-2"/>
</div>










## Prop: size

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvInput.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.

### Syntax

```html
<VvInput size="lg" placeholder="Size: lg"/>
```

### Result

<div class="w-full pt-4">
    <VvInput size="lg" placeholder="Size: lg"/>
</div>

::: details size prop input size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvInput size="xs" placeholder="Size: xs"/>
    <VvInput size="sm" placeholder="Size: sm"/>
    <VvInput size="md" placeholder="Size: md"/>
    <VvInput size="lg" placeholder="Size: lg"/>
    <VvInput size="xl" placeholder="Size: xl"/>
    <VvInput size="2xl" placeholder="Size: 2xl"/>
</div>
:::











## Prop: type

Type: **`String`**  
Valid Values: [ValidInputTypes Module](/components/prop-validators#validinputtypes)  
Default: **`"{{ VvConfig.defaults.VvInput.type }}"`**

The {{ $frontmatter.title }} `type` prop sets the input HTML `type` attribute to a value that should be present in the [ValidInputTypes Module](/components/prop-validators#validinputtypes) to be a valid value for this component.

### Syntax

```html
<VvInput type="email" placeholder="Type: email"/>
```

### Result

<div class="w-full pt-4">
    <VvInput type="email" placeholder="Type: email"/>
</div>










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because an `<input>` element is a HTML Empty Element, which cannot have children or child nodes.
:::









<DocsPackageVersion/>
