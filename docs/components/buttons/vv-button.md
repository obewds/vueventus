---
title: VvButton Component
---

<script setup>
    import { VvButton, VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a huge variety of buttons for applications with extremely DRY implementation of atomic classes.

<br>



## Import

```javascript
import { VvButton } from '@obewds/vueventus'
```

<br>



## Prop: block

Type: **`String`**

The VvButton `block` prop sets the component instance to use block-level base classes making the returned `<button>` element a full width and block-level element.

### Syntax

```html
<VvButton :block="true">
    VvButton
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton :block="true">
        VvButton
    </VvButton>
</div>

<br>



## Prop: color

Type: **`String`**

The VvButton `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value together.

### Syntax

```html
<VvButton color="primary">
    VvButton
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton color="primary">
        VvButton
    </VvButton>
</div>

<br>



## Prop: fab

Type: **`Boolean`**

The VvButton `fab` prop sets the component instance to use base classes with equal width and height classes making the returned `<button>` element a square button element that can also be styled as a circle using a Tailwind CSS `.rounded-full` class.

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

<div class="w-full py-4">
    <VvButton :fab="true">
        +
    </VvButton>
    <VvButton :fab="true" class="rounded-full">
        +
    </VvButton>
</div>

<br>



## Prop: palette

Type: **`String`**

The VvButton `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together.

### Syntax

```html
<VvButton palette="outline" color="primary">
    VvButton
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton palette="outline" color="primary">
        VvButton
    </VvButton>
</div>

<br>



## Prop: size

Type: **`String`**

The VvButton `size` prop sets the component instance size-based classes with in the context of buttons typically involves padding and font size atomic classes.

### Syntax

```html
<VvButton size="xl">
    VvButton
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton size="xl">
        VvButton
    </VvButton>
</div>

<br>



## Prop: transitionClasses

Type: **`String`**

The VvButton `transitionClasses` prop sets the button transition classes to animate between different states. In the context of a button this is often background colors, text colors, sometimes border colors and more.

### Syntax

```html
<VvButton color="success" transition-classes="transition-colors ease-in duration-1000">
    VvButton
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton color="success" transition-classes="transition-colors ease-in duration-1000">
        VvButton
    </VvButton>
</div>

<br>



## Prop: type

Type: **`String`**  
Valid: **`"button"`**, **`"submit"`**, **`"reset"`**

The VvButton `type` prop sets the button HTML `type` attribute to a value that should be either `"button"`, `"submit"` or `"reset"` to be a valid value for this element attribute.

### Syntax

```html
<VvButton type="submit">
    Submit
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton type="submit">
        Submit
    </VvButton>
</div>

<br>



## Slot: #default

The VvButton has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvButton>
    Slot <span class="text-red-500">Content</span>
</VvButton>
```

### Result

<div class="w-full py-4">
    <VvButton>
        Slot <span class="text-red-500">Content</span>
    </VvButton>
</div>

<br>
