---
title: VvButton Component
---

<script setup>
    import { VvButton } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a huge variety of buttons for applications with extremely DRY implementation of atomic classes.





## Import

```javascript
import { VvButton } from '@obewds/vueventus'
```





## Prop: block

Type: **`String`**  
Default: **`VvConfig.defaults.VvButton.block`**

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

Type: **`String`**  
Default: **`VvConfig.defaults.VvButton.color`**

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





## Prop: fab

Type: **`Boolean`**  
Default: **`VvConfig.defaults.VvButton.fab`**

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

Type: **`String`**  
Default: **`VvConfig.defaults.VvButton.palette`**

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





## Prop: size

Type: **`String`**  
Default: **`VvConfig.defaults.VvButton.size`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes with in the context of buttons typically involves padding and font size atomic classes.

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





## Prop: transitionClasses

Type: **`String`**  
Default: **`VvConfig.transitions.classes()`**

The {{ $frontmatter.title }} `transitionClasses` prop sets the button transition classes to animate between different states. In the context of a button this is often background colors, text colors, sometimes border colors and more.

### Syntax

```html
<VvButton color="success" transition-classes="transition-colors ease-in duration-1000">
    VvButton
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton color="success" transition-classes="transition-colors ease-in duration-1000">
        VvButton
    </VvButton>
</div>





## Prop: type

Type: **`String`**  
Valid Values: [ValidButtonTypes Module](/components/prop-validators#validbuttontypes)  
Default: **`VvConfig.defaults.VvButton.type`**

The {{ $frontmatter.title }} `type` prop sets the button HTML `type` attribute to a value that should be present in the [ValidButtonTypes Module](/components/prop-validators#validbuttontypes) to be a valid value for this this component.

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





## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvButton>
    Slot <span class="text-red-500">Content</span>
</VvButton>
```

### Result

<div class="w-full pt-4">
    <VvButton>
        Slot <span class="text-red-500">Content</span>
    </VvButton>
</div>


