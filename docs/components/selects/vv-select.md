---
title: VvSelect Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvSelect, VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of select elements for applications with an extremely DRY implementation of atomic classes.







## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvSelect from './vv/selects/VvSelect.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvSelect } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!










## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`String`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue` upon input event changes of the component's currently selected child option's value attribute.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/AppInput.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvSelect } from '@obewds/vueventus'

    const someValue = ref('')

</script>

<template>

    <VvSelect v-model="someValue"/>

</template>
```








## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvSelect.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvSelect color="default" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Default Color Option 1</option>
    <option value="two">Default Color Option 2</option>
</VvSelect>

<VvSelect color="error" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Error Color Option 1</option>
    <option value="two">Error Color Option 2</option>
</VvSelect>

<VvSelect color="success" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Success Color Option 1</option>
    <option value="two">Success Color Option 2</option>
</VvSelect>
```

### Result

<div class="w-full pt-4">
    <VvSelect color="default" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">Default Color Option 1</option>
        <option value="two">Default Color Option 2</option>
    </VvSelect>
    <VvSelect color="error" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">Error Color Option 1</option>
        <option value="two">Error Color Option 2</option>
    </VvSelect>
    <VvSelect color="success" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">Success Color Option 1</option>
        <option value="two">Success Color Option 2</option>
    </VvSelect>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvSelect.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-select-` prefixed HTML attributes.

### Syntax

```html
<VvSelect :debug="true">
    <option value="">Select Option</option>
    <option value="one">Option 1</option>
</VvSelect>
```

### Result

<div class="w-full pt-4">
    <VvSelect :debug="true">
        <option value="">Select Option</option>
        <option value="one">Option 1</option>
    </VvSelect>
</div>










## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvSelect.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvSelect palette="underlined" color="default" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Default Color Option 1</option>
    <option value="two">Default Color Option 2</option>
</VvSelect>

<VvSelect palette="underlined" color="error" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Error Color Option 1</option>
    <option value="two">Error Color Option 2</option>
</VvSelect>

<VvSelect palette="underlined" color="success" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">Success Color Option 1</option>
    <option value="two">Success Color Option 2</option>
</VvSelect>
```

### Result

<div class="w-full pt-4">
    <VvSelect palette="underlined" color="default" class="mb-2" style="border-bottom:2px;">
        <option value="">Select an Option</option>
        <option value="one">Default Color Option 1</option>
        <option value="two">Default Color Option 2</option>
    </VvSelect>
    <VvSelect palette="underlined" color="error" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">Error Color Option 1</option>
        <option value="two">Error Color Option 2</option>
    </VvSelect>
    <VvSelect palette="underlined" color="success" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">Success Color Option 1</option>
        <option value="two">Success Color Option 2</option>
    </VvSelect>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvSelect.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of inputs typically involves padding and font size atomic classes.

### Syntax

```html
<VvSelect size="lg" class="mb-2">
    <option value="">Select an Option</option>
    <option value="one">"lg" Size Option 1</option>
    <option value="one">"lg" Size Option 2</option>
</VvSelect>
```

### Result

<div class="w-full pt-4">
    <VvSelect size="lg" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"lg" Size Option 1</option>
        <option value="one">"lg" Size Option 2</option>
    </VvSelect>
</div>

::: details size prop input size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvSelect size="xs" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"xs" Size Option 1</option>
        <option value="one">"xs" Size Option 2</option>
    </VvSelect>
    <VvSelect size="sm" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"sm" Size Option 1</option>
        <option value="one">"sm" Size Option 2</option>
    </VvSelect>
    <VvSelect size="md" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"md" Size Option 1</option>
        <option value="one">"md" Size Option 2</option>
    </VvSelect>
    <VvSelect size="lg" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"lg" Size Option 1</option>
        <option value="one">"lg" Size Option 2</option>
    </VvSelect>
    <VvSelect size="xl" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"xl" Size Option 1</option>
        <option value="one">"xl" Size Option 2</option>
    </VvSelect>
    <VvSelect size="2xl" class="mb-2">
        <option value="">Select an Option</option>
        <option value="one">"2xl" Size Option 1</option>
        <option value="one">"2xl" Size Option 2</option>
    </VvSelect>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvSelect>
    <option value="">Select an Option</option>
    <option value="one">Slot Example Option 1</option>
</VvSelect>
```

### Result

<div class="w-full pt-4">
    <VvSelect>
        <option value="">Select an Option</option>
        <option value="one">Slot Example Option 1</option>
    </VvSelect>
</div>









<DocsPackageVersion/>
