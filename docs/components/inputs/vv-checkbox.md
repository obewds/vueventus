---
title: VvCheckbox Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvCheckbox, VvConfig } from '../../../src/index'
</script>




# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a set of props and config module based settings to make a validation ready set of checkbox input elements for applications with an extremely DRY implementation of atomic classes.







## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvCheckbox from './vv/inputs/VvCheckbox.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvCheckbox } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!










## Emits: update:modelValue

Emits: **`update:modelValue`**  
Emit Value Type: **`Boolean`**  

The {{ $frontmatter.title }} emits a standard Vue key of `update:modelValue`  upon the change event of the component's generated checkbox input's checked attribute.

::: tip
This means when using the {{ $frontmatter.title }} downstream in an end application, you can safely use Vue's `v-model` binding to two-way bind a reactive value through your downstream component and into (and back from) the {{ $frontmatter.title }} instance.
:::

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import { ref } from 'vue'
    import { VvCheckbox } from '@obewds/vueventus'

    const isCheckedDefaultValue = ref(false)

</script>

<template>

    <VvCheckbox v-model="isCheckedDefaultValue"/>

</template>
```










## Prop: checked

Type: **`Boolean`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.checked }}"`**

The {{ $frontmatter.title }} `checked` prop sets the component instance `checked` attribute. This means when the component is initialized with the `checked` prop being `true`, then the rendered checkbox will display in the fully checked state.

### Syntax

```html
<div class="flex gap-3">
    <VvCheckbox/>
    <VvCheckbox :checked="true"/>
</div>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvCheckbox/>
    <VvCheckbox :checked="true"/>
</div>








## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<div class="flex gap-3">
    <VvCheckbox color="default" :checked="true"/>
    <VvCheckbox color="error" :checked="true"/>
    <VvCheckbox color="primary" :checked="true"/>
    <VvCheckbox color="secondary" :checked="true"/>
    <VvCheckbox color="success" :checked="true"/>
</div>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvCheckbox color="default" :checked="true"/>
    <VvCheckbox color="error" :checked="true"/>
    <VvCheckbox color="primary" :checked="true"/>
    <VvCheckbox color="secondary" :checked="true"/>
    <VvCheckbox color="success" :checked="true"/>
</div>








## Prop: darkCheckHex

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.darkCheckHex }}"`**

The {{ $frontmatter.title }} `darkCheckHex` prop sets the component checked state's check icon color in the dark color mode state.

### Syntax

```html
<VvCheckbox
    dark-check-hex="#00ffff"
    light-check-hex="#00ffff"
    checked
/>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvCheckbox dark-check-hex="#00ffff" light-check-hex="#00ffff" checked/>
</div>








## Prop: lightCheckHex

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.lightCheckHex }}"`**

The {{ $frontmatter.title }} `lightCheckHex` prop sets the component checked state's check icon color in the light color mode state.

### Syntax

```html
<VvCheckbox
    light-check-hex="#00ffff"
    dark-check-hex="#00ffff"
    checked
/>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvCheckbox light-check-hex="#00ffff" dark-check-hex="#00ffff" checked/>
</div>












## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance palette based both on the `color` prop and the `palette` prop value.

### Syntax

```html
<div class="flex gap-3">
    <VvCheckbox palette="default" :checked="true"/>
    <VvCheckbox palette="default" color="error" :checked="true"/>
    <VvCheckbox palette="default" color="primary" :checked="true"/>
    <VvCheckbox palette="default" color="secondary" :checked="true"/>
    <VvCheckbox palette="default" color="success" :checked="true"/>
</div>
```

### Result

<div class="w-full flex gap-3 pt-4">
    <VvCheckbox palette="default" :checked="true"/>
    <VvCheckbox palette="default" color="error" :checked="true"/>
    <VvCheckbox palette="default" color="primary" :checked="true"/>
    <VvCheckbox palette="default" color="secondary" :checked="true"/>
    <VvCheckbox palette="default" color="success" :checked="true"/>
</div>










## Prop: size

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvCheckbox.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of checkbox inputs typically involves fixed width and height atomic classes.

### Syntax

```html
<div class="flex items-center gap-3">
    <VvCheckbox size="xs" :checked="true"/>
    <VvCheckbox size="sm" :checked="true"/>
    <VvCheckbox size="md" :checked="true"/>
    <VvCheckbox size="lg" :checked="true"/>
    <VvCheckbox size="xl" :checked="true"/>
    <VvCheckbox size="2xl" :checked="true"/>
</div>
```

### Result

<div class="w-full flex items-center gap-3 pt-4">
    <VvCheckbox size="xs" :checked="true"/>
    <VvCheckbox size="sm" :checked="true"/>
    <VvCheckbox size="md" :checked="true"/>
    <VvCheckbox size="lg" :checked="true"/>
    <VvCheckbox size="xl" :checked="true"/>
    <VvCheckbox size="2xl" :checked="true"/>
</div>

::: details size prop checkboxes with sized labels examples
**Syntax**

```html
<div class="flex flex-col w-full space-y-2">

    <div class="flex items-center gap-1">
        <VvCheckbox id="vvCheck-xs" size="xs" :checked="true"/>
        <label htmlFor="vvCheck-xs" class="text-2xs">XS Size</label>
    </div>

    <div class="flex items-center gap-1.5">
        <VvCheckbox id="vvCheck-sm" size="sm" :checked="true"/>
        <label htmlFor="vvCheck-sm" class="text-xs">SM Size</label>
    </div>

    <div class="flex items-center gap-2">
        <VvCheckbox id="vvCheck-md" size="md" :checked="true"/>
        <label htmlFor="vvCheck-md" class="text-md">MD Size</label>
    </div>

    <div class="flex items-center gap-2.5">
        <VvCheckbox id="vvCheck-lg" size="lg" :checked="true"/>
        <label htmlFor="vvCheck-lg" class="text-lg">LG Size</label>
    </div>

    <div class="flex items-center gap-3">
        <VvCheckbox id="vvCheck-xl" size="xl" :checked="true"/>
        <label htmlFor="vvCheck-xl" class="text-xl">XL Size</label>
    </div>

    <div class="flex items-center gap-3">
        <VvCheckbox id="vvCheck-2xl" size="2xl" :checked="true"/>
        <label htmlFor="vvCheck-2xl" class="text-2xl">2XL Size</label>
    </div>

</div>
```

**Result**

<div class="flex flex-col w-full space-y-2">
    <div class="flex items-center gap-1">
        <VvCheckbox id="vvCheck-xs" size="xs" :checked="true"/>
        <label htmlFor="vvCheck-xs" class="text-2xs">XS Size</label>
    </div>
    <div class="flex items-center gap-1.5">
        <VvCheckbox id="vvCheck-sm" size="sm" :checked="true"/>
        <label htmlFor="vvCheck-sm" class="text-xs">SM Size</label>
    </div>
    <div class="flex items-center gap-2">
        <VvCheckbox id="vvCheck-md" size="md" :checked="true"/>
        <label htmlFor="vvCheck-md" class="text-md">MD Size</label>
    </div>
    <div class="flex items-center gap-2.5">
        <VvCheckbox id="vvCheck-lg" size="lg" :checked="true"/>
        <label htmlFor="vvCheck-lg" class="text-lg">LG Size</label>
    </div>
    <div class="flex items-center gap-3">
        <VvCheckbox id="vvCheck-xl" size="xl" :checked="true"/>
        <label htmlFor="vvCheck-xl" class="text-xl">XL Size</label>
    </div>
    <div class="flex items-center gap-3">
        <VvCheckbox id="vvCheck-2xl" size="2xl" :checked="true"/>
        <label htmlFor="vvCheck-2xl" class="text-2xl">2XL Size</label>
    </div>
</div>

:::










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because an `<input>` element is a HTML Empty Element, which cannot have children or child nodes.
:::










## Use with Labels

In most application contexts, you'll want to use the {{ $frontmatter.title }} with label text and the inherent functionality between associated label and input elements. Here's a few examples to illustrate one of endless ways this can be accomplished within an atomic class and VueVentus context:

### Syntax

```html
<div class="flex flex-col w-full space-y-2">

    <div class="flex items-center gap-2">
        <VvCheckbox id="option-one" color="primary" :checked="true"/>
        <label for="option-one">The First Option</label>
    </div>

    <div class="flex items-center gap-2">
        <VvCheckbox id="option-two" color="primary"/>
        <label for="option-two">The Second Option</label>
    </div>

</div>
```

### Result

<div class="flex flex-col w-full space-y-2 pt-4">
    <div class="flex items-center gap-2">
        <VvCheckbox id="option-one" color="primary" :checked="true"/>
        <label for="option-one">The First Option</label>
    </div>
    <div class="flex items-center gap-2">
        <VvCheckbox id="option-two" color="primary"/>
        <label for="option-two">The Second Option</label>
    </div>
</div>









<DocsPackageVersion/>
