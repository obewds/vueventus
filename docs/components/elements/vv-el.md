---
title: VvEl Component
---

<script setup>
    import { VvEl } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of element configurations for any element itself or as a parent, child, or sibling element with color contextual relations with other contextual elements.





## Import

```javascript
import { VvEl } from '@obewds/vueventus'
```






## Prop: borderPalette

Type: **`String`**  
Default: **`VvConfig.defaults.VvEl.borderPalette`**

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
Default: **`VvConfig.defaults.VvEl.borderColor`**

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






## Prop: groundPalette

Type: **`String`**  
Default: **`VvConfig.defaults.VvEl.groundPalette`**

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






## Prop: groundColor

Type: **`String`**  
Default: **`VvConfig.defaults.VvEl.groundColor`**

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






## Prop: tag

Type: **`String`**  
Valid Values: [ValidElementTags Module](/components/prop-validators#validelementtags)  
Default: **`VvConfig.defaults.VvButton.type`**

The {{ $frontmatter.title }} `tag` prop sets the HTML `tag` attribute to a value that should be present in the [ValidElementTags Module](/components/prop-validators#validelementtags) to be a valid value for this component.

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






## Prop: textPalette

Type: **`String`**  
Default: **`VvConfig.defaults.VvEl.textPalette`**

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
Default: **`VvConfig.defaults.VvEl.textColor`**

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


