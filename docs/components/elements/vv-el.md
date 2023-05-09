---
title: VvEl Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvEl } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvEl from './vv/elements/VvEl.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvEl } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!






## Prop: borderPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.borderPalette }}"`**

The {{ $frontmatter.title }} `borderPalette` prop sets the component instance border color based both on the `borderColor` prop and the `borderPalette` prop value together.

### Syntax

```html
<VvEl border-palette="default" class="border p-2">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl border-palette="default" class="border p-2">
        VvEl
    </VvEl>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!






## Prop: borderColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.borderColor }}"`**

The {{ $frontmatter.title }} `borderColor` prop sets the component instance border color based both on the `borderPalette` prop and the `borderColor` prop value together.

### Syntax

```html
<VvEl border-color="error" class="border p-2">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl border-color="error" class="border p-2">
        VvEl
    </VvEl>
</div>

::: details borderColor prop defaults examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl border-color="default" class="border p-2">
        border-color="default"
    </VvEl>
    <VvEl border-color="error" class="border p-2">
        border-color="error"
    </VvEl>
    <VvEl border-color="primary" class="border p-2">
        border-color="primary"
    </VvEl>
    <VvEl border-color="secondary" class="border p-2">
        border-color="secondary"
    </VvEl>
    <VvEl border-color="success" class="border p-2">
        border-color="success"
    </VvEl>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvEl.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-el-` prefixed HTML attributes.

### Syntax

```html
<VvEl :debug="true">
    VvEl debug
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl :debug="true">
        VvEl debug
    </VvEl>
</div>






## Prop: groundPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.groundPalette }}"`**

The {{ $frontmatter.title }} `groundPalette` prop sets the component instance border color based both on the `groundColor` prop and the `groundPalette` prop value together.

### Syntax

```html
<VvEl ground-palette="default" ground-color="primary" class="p-2">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl ground-palette="default" ground-color="primary" class="p-2">
        VvEl
    </VvEl>
</div>

::: details groundPalette "default" palette examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl ground-palette="default" ground-color="default" class="p-2">
        ground-palette="default" ground-color="default"
    </VvEl>
    <VvEl ground-palette="default" ground-color="error" class="p-2">
        ground-palette="default" ground-color="error"
    </VvEl>
    <VvEl ground-palette="default" ground-color="primary" class="p-2">
        ground-palette="default" ground-color="primary"
    </VvEl>
    <VvEl ground-palette="default" ground-color="secondary" class="p-2">
        ground-palette="default" ground-color="secondary"
    </VvEl>
    <VvEl ground-palette="default" ground-color="success" class="p-2">
        ground-palette="default" ground-color="success"
    </VvEl>
</div>
:::

::: details groundPalette "console" palette examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl ground-palette="console" ground-color="default" class="p-2">
        ground-palette="console" ground-color="default"
    </VvEl>
    <VvEl ground-palette="console" ground-color="error" class="p-2">
        ground-palette="console" ground-color="error"
    </VvEl>
    <VvEl ground-palette="console" ground-color="primary" class="p-2">
        ground-palette="console" ground-color="primary"
    </VvEl>
    <VvEl ground-palette="console" ground-color="secondary" class="p-2">
        ground-palette="console" ground-color="secondary"
    </VvEl>
    <VvEl ground-palette="console" ground-color="success" class="p-2">
        ground-palette="console" ground-color="success"
    </VvEl>
</div>
:::

::: details groundPalette "monochromatic" palette examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl ground-palette="monochromatic" ground-color="default" class="p-2">
        ground-palette="monochromatic" ground-color="default"
    </VvEl>
    <VvEl ground-palette="monochromatic" ground-color="error" class="p-2">
        ground-palette="monochromatic" ground-color="error"
    </VvEl>
    <VvEl ground-palette="monochromatic" ground-color="primary" class="p-2">
        ground-palette="monochromatic" ground-color="primary"
    </VvEl>
    <VvEl ground-palette="monochromatic" ground-color="secondary" class="p-2">
        ground-palette="monochromatic" ground-color="secondary"
    </VvEl>
    <VvEl ground-palette="monochromatic" ground-color="success" class="p-2">
        ground-palette="monochromatic" ground-color="success"
    </VvEl>
</div>
:::

::: details groundPalette "pastel" palette examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl ground-palette="pastel" ground-color="default" class="p-2">
        ground-palette="pastel" ground-color="default"
    </VvEl>
    <VvEl ground-palette="pastel" ground-color="error" class="p-2">
        ground-palette="pastel" ground-color="error"
    </VvEl>
    <VvEl ground-palette="pastel" ground-color="primary" class="p-2">
        ground-palette="pastel" ground-color="primary"
    </VvEl>
    <VvEl ground-palette="pastel" ground-color="secondary" class="p-2">
        ground-palette="pastel" ground-color="secondary"
    </VvEl>
    <VvEl ground-palette="pastel" ground-color="success" class="p-2">
        ground-palette="pastel" ground-color="success"
    </VvEl>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!











## Prop: groundColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.groundColor }}"`**

The {{ $frontmatter.title }} `groundColor` prop sets the component instance border color based both on the `groundPalette` prop and the `groundColor` prop value together.

### Syntax

```html
<VvEl ground-color="secondary" class="p-2">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl ground-color="secondary" class="p-2">
        VvEl
    </VvEl>
</div>

::: details groundColor prop defaults examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl ground-color="default" class="p-2">
        ground-color="default"
    </VvEl>
    <VvEl ground-color="error" class="p-2">
        ground-color="error"
    </VvEl>
    <VvEl ground-color="primary" class="p-2">
        ground-color="primary"
    </VvEl>
    <VvEl ground-color="secondary" class="p-2">
        ground-color="secondary"
    </VvEl>
    <VvEl ground-color="success" class="p-2">
        ground-color="success"
    </VvEl>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of elements typically involves font size atomic classes.

### Syntax

```html
<VvEl size="lg">
    Large VvEl Text
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl size="lg">
        VvEl "lg" Text
    </VvEl>
</div>

::: details size prop VvEl size examples
<div class="pt-4">
    <VvEl size="5xs">
        VvEl "5xs" Text
    </VvEl>
    <VvEl size="4xs">
        VvEl "4xs" Text
    </VvEl>
    <VvEl size="3xs">
        VvEl "3xs" Text
    </VvEl>
    <VvEl size="2xs">
        VvEl "2xs" Text
    </VvEl>
    <VvEl size="xs">
        VvEl "xs" Text
    </VvEl>
    <VvEl size="sm">
        VvEl "sm" Text
    </VvEl>
    <VvEl size="md">
        VvEl "md" Text
    </VvEl>
    <VvEl size="lg">
        VvEl "lg" Text
    </VvEl>
    <VvEl size="xl">
        VvEl "xl" Text
    </VvEl>
    <VvEl size="2xl">
        VvEl "2xl" Text
    </VvEl>
    <VvEl size="3xl">
        VvEl "3xl" Text
    </VvEl>
    <VvEl size="4xl">
        VvEl "4xl" Text
    </VvEl>
    <VvEl size="5xl">
        VvEl "5xl" Text
    </VvEl>
    <VvEl size="6xl">
        VvEl "6xl" Text
    </VvEl>
    <VvEl size="7xl">
        VvEl "7xl" Text
    </VvEl>
    <VvEl size="8xl">
        VvEl "8xl" Text
    </VvEl>
    <VvEl size="9xl">
        VvEl "9xl" Text
    </VvEl>
    <VvEl size="10xl">
        VvEl "10xl" Text
    </VvEl>
    <VvEl size="11xl">
        VvEl "11xl" Text
    </VvEl>
    <VvEl size="12xl">
        VvEl "12xl" Text
    </VvEl>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: tag
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidElementTags Module](/components/prop-validators#validelementtags)  
Default: **`"{{ VvConfig.defaults.VvEl.tag }}"`**

The {{ $frontmatter.title }} `tag` prop sets the HTML `tag` attribute to a value that should be present in the [ValidElementTags Module](/components/prop-validators#validelementtags) to be a valid value for this component.

### Syntax

```html
<VvEl tag="span" class="border-b-2">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl tag="span" class="border-b-2">
        VvEl
    </VvEl>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: textPalette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.textPalette }}"`**

The {{ $frontmatter.title }} `textPalette` prop sets the component instance border color based both on the `textColor` prop and the `textPalette` prop value together.

### Syntax

```html
<VvEl text-palette="default" text-color="primary">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl text-palette="default" text-color="primary">
        VvEl
    </VvEl>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!









## Prop: textColor
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvEl.textColor }}"`**

The {{ $frontmatter.title }} `textColor` prop sets the component instance border color based both on the `textPalette` prop and the `textColor` prop value together.

### Syntax

```html
<VvEl text-color="secondary">
    VvEl
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl text-color="secondary">
        VvEl
    </VvEl>
</div>

::: details textColor prop defaults examples
<div class="flex flex-col space-y-2 w-full pt-4">
    <VvEl text-color="default">
        text-color="default"
    </VvEl>
    <VvEl text-color="error">
        text-color="error"
    </VvEl>
    <VvEl text-color="primary">
        text-color="primary"
    </VvEl>
    <VvEl text-color="secondary">
        text-color="secondary"
    </VvEl>
    <VvEl text-color="success">
        text-color="success"
    </VvEl>
</div>
:::

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvEl>
    Slot <span class="text-red-500 dark:text-red-300">Content</span>
</VvEl>
```

### Result

<div class="w-full pt-4">
    <VvEl>
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvEl>
</div>







<DocsPackageVersion/>


