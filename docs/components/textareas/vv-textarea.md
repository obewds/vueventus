---
title: VvTextarea Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvTextarea, VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### ### Typing for Downstream Component Instances: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of textarea elements for applications with an extremely DRY implementation of atomic classes.










## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvTextarea from './vv/textareas/VvTextarea.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvTextarea } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!











## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`String`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue` upon input event changes of the component's generated textarea value attribute.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/AppTextarea.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvTextarea } from '@obewds/vueventus'

    const someValue = ref('')

</script>

<template>

    <VvTextarea v-model="someValue"/>

</template>
```











## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvTextarea.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-textarea-` prefixed HTML attributes.

### Syntax

```html
<VvTextarea :debug="true"/>
```

### Result

<div class="w-full pt-4">
    <VvTextarea :debug="true"/>
</div>










## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










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
