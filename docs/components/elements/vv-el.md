---
title: VvEl Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvEl } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.





<!-- TODO: replace ''@/components/vv/...' imports with { xxx } from '@obewds/vueventus' imports -->
## Import

Import the CLI installation version of the {{ $frontmatter.title }} into your project with:

```javascript
import VvEl from '@/components/vv/elements/VvEl.vue'
```

To import the prototyping/compiled lib version of the {{ $frontmatter.title }}, use:

```javascript
import { VvEl } from '@obewds/vueventus'
```






## Prop: borderPalette

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






## Prop: borderColor

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




## Prop: groundPalette

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











## Prop: groundColor

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






## Prop: tag

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






## Prop: textPalette

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






## Prop: textColor

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


