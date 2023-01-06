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

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvInput from './vv/inputs/VvInput.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvInput } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!










## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`String`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue` upon input event changes of the component's generated input value attribute.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/AppInput.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvInput } from '@obewds/vueventus'

    const someValue = ref('')

</script>

<template>

    <VvInput v-model="someValue"/>

</template>
```








## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvInput.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-input-` prefixed HTML attributes.

### Syntax

```html
<VvInput :debug="true"/>
```

### Result

<div class="w-full pt-4">
    <VvInput :debug="true"/>
</div>










## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvInput.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<VvInput palette="underlined" color="default" placeholder="default" class="mb-2"/>
<VvInput palette="underlined" color="error" placeholder="error" class="mb-2"/>
<VvInput palette="underlined" color="success" placeholder="success" class="mb-2"/>
```

### Result

<div class="w-full pt-4">
    <VvInput palette="underlined" color="default" class="mb-2" placeholder="default" style="border-bottom-style: solid;"/>
    <VvInput palette="underlined" color="error" class="mb-2" placeholder="error" style="border-bottom-style: solid;"/>
    <VvInput palette="underlined" color="success" class="mb-2" placeholder="success" style="border-bottom-style: solid;"/>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!











## Prop: type
<!-- TODO: change this type to new PropType keyof syntax -->
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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because an `<input>` element is a HTML Empty Element, which cannot have children or child nodes.
:::









<DocsPackageVersion/>
