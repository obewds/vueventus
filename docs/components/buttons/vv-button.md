---
title: VvButton Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvButton, VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### ### Typing for Downstream Component Instances: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a huge variety of buttons for applications with extremely DRY implementation of atomic classes.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvButton from './vv/buttons/VvButton.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvButton } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!











## Prop: block

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvButton.block }}`**

The {{ $frontmatter.title }} `block` prop sets the component instance to use block-level base classes making the returned `<button>` element a full width and block-level element.

### Syntax

```html
<VvButton :block="true">
    VvButton
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton :block="true">
        VvButton
    </VvButton>
</div>





## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvButton.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value together.

### Syntax

```html
<VvButton color="error">
    VvButton
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton color="error">
        VvButton
    </VvButton>
</div>

::: details color prop default color examples
<div class="pt-4">
    <VvButton color="default" class="p-2 mb-2">
        color="default"
    </VvButton>
    <br>
    <VvButton color="error" class="p-2 mb-2">
        color="error"
    </VvButton>
    <br>
    <VvButton color="primary" class="p-2 mb-2">
        color="primary"
    </VvButton>
    <br>
    <VvButton color="secondary" class="p-2 mb-2">
        color="secondary"
    </VvButton>
    <br>
    <VvButton color="success" class="p-2 mb-2">
        color="success"
    </VvButton>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvButton.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-button-` prefixed HTML attributes.

### Syntax

```html
<VvButton :debug="true">
    VvButton debug
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton :debug="true">
        VvButton debug
    </VvButton>
</div>





## Prop: fab

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvButton.fab }}`**

The {{ $frontmatter.title }} `fab` prop sets the component instance to use base classes with equal width and height classes making the returned `<button>` element a square button element that can also be styled as a circle using a Tailwind CSS `.rounded-full` class.

### Syntax

```html
<VvButton :fab="true">
    +
</VvButton>

<VvButton :fab="true" class="rounded-full">
    +
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton :fab="true">
        +
    </VvButton>
    <VvButton :fab="true" class="rounded-full">
        +
    </VvButton>
</div>





## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvButton.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together.

### Syntax

```html
<VvButton palette="outline">
    VvButton
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton palette="outline" class="border-solid">
        VvButton
    </VvButton>
</div>

::: details color prop default palette color examples
<div class="pt-4">
    <VvButton color="default" class="p-2 mb-2">
        color="default"
    </VvButton>
    <br>
    <VvButton color="error" class="p-2 mb-2">
        color="error"
    </VvButton>
    <br>
    <VvButton color="primary" class="p-2 mb-2">
        color="primary"
    </VvButton>
    <br>
    <VvButton color="secondary" class="p-2 mb-2">
        color="secondary"
    </VvButton>
    <br>
    <VvButton color="success" class="p-2 mb-2">
        color="success"
    </VvButton>
</div>
:::

::: details color prop outline palette color examples
<div class="pt-4">
    <VvButton palette="outline" color="default" class="border-solid p-2 mb-2">
        color="default"
    </VvButton>
    <br>
    <VvButton palette="outline" color="error" class="border-solid p-2 mb-2">
        color="error"
    </VvButton>
    <br>
    <VvButton palette="outline" color="primary" class="border-solid p-2 mb-2">
        color="primary"
    </VvButton>
    <br>
    <VvButton palette="outline" color="secondary" class="border-solid p-2 mb-2">
        color="secondary"
    </VvButton>
    <br>
    <VvButton palette="outline" color="success" class="border-solid p-2 mb-2">
        color="success"
    </VvButton>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvButton.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes.

### Syntax

```html
<VvButton size="xl">
    VvButton
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton size="xl">
        VvButton
    </VvButton>
</div>

::: details size prop button size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvButton size="4xs">
        size="4xs"
    </VvButton>
    <VvButton size="3xs">
        size="3xs"
    </VvButton>
    <VvButton size="2xs">
        size="2xs"
    </VvButton>
    <VvButton size="xs">
        size="xs"
    </VvButton>
    <VvButton size="sm">
        size="sm"
    </VvButton>
    <VvButton size="md">
        size="md"
    </VvButton>
    <VvButton size="lg">
        size="lg"
    </VvButton>
    <VvButton size="xl">
        size="xl"
    </VvButton>
    <VvButton size="2xl">
        size="2xl"
    </VvButton>
    <VvButton size="3xl">
        size="3xl"
    </VvButton>
    <VvButton size="4xl">
        size="4xl"
    </VvButton>
</div>
:::

::: details size prop block button size examples
<div class="flex flex-wrap items-center gap-2 pt-4">
    <VvButton :block="true" size="4xs">
        size="4xs"
    </VvButton>
    <VvButton :block="true" size="3xs">
        size="3xs"
    </VvButton>
    <VvButton :block="true" size="2xs">
        size="2xs"
    </VvButton>
    <VvButton :block="true" size="xs">
        size="xs"
    </VvButton>
    <VvButton :block="true" size="sm">
        size="sm"
    </VvButton>
    <VvButton :block="true" size="md">
        size="md"
    </VvButton>
    <VvButton :block="true" size="lg">
        size="lg"
    </VvButton>
    <VvButton :block="true" size="xl">
        size="xl"
    </VvButton>
    <VvButton :block="true" size="2xl">
        size="2xl"
    </VvButton>
    <VvButton :block="true" size="3xl">
        size="3xl"
    </VvButton>
    <VvButton :block="true" size="4xl">
        size="4xl"
    </VvButton>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: type
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidButtonTypes Module](/components/prop-validators#validbuttontypes)  
Default: **`"{{ VvConfig.defaults.VvButton.type }}"`**

The {{ $frontmatter.title }} `type` prop sets the button HTML `type` attribute to a value that should be present in the [ValidButtonTypes Module](/components/prop-validators#validbuttontypes) to be a valid value for this component.

### Syntax

```html
<VvButton type="submit">
    Submit
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton type="submit">
        Submit
    </VvButton>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvButton>
    Slot<span class="text-yellow-300 pl-2">Content</span>
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton>
        Slot<span class="text-yellow-300 pl-2">Content</span>
    </VvButton>
</div>






<DocsPackageVersion/>


