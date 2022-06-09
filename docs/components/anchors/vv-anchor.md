---
title: VvAnchor Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvAnchor } from '../../../src/index'
    import appColors from '../../../src/data/app.color.data.json'

    const grayColorStyles = {
        color: appColors.gray['900']
    }
    const whiteColorStyles = {
        color: appColors.white
    }
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of anchor elements for applications with an extremely DRY implementation of atomic classes.





## Import

```javascript
import { VvAnchor } from '@obewds/vueventus'
```








## Prop: button

Type: **`Boolean`**  
Default: **`VvConfig.defaults.VvAnchor.button`**

When the {{ $frontmatter.title }} `button` prop value is `true`, the output element changes from normal anchor element styling set in the [Anchor Config Module](/modules/configs/anchors) to button styling that is driven by the Tailwind CSS classes in the [Button Config Module](/modules/configs/buttons).

### Syntax

```html
<VvAnchor
    :button="true"
    palette="solid"
    color="primary"
    href="#"
>
    VvAnchor
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor
        :button="true"
        palette="solid"
        href="#"
        :style="grayColorStyles"
    >
        VvAnchor
    </VvAnchor>
</div>








## Prop: buttonBlock

Type: **`Boolean`**  
Default: **`VvConfig.defaults.VvAnchor.buttonBlock`**

The {{ $frontmatter.title }} `buttonBlock` prop sets the component instance to use block-level base classes making the returned `<a>` element a full width and block-level button styled element.

### Syntax

```html
<VvAnchor
    :button="true"
    :button-block="true"
    palette="solid"
    color="primary"
    href="#"
>
    VvButton
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" href="#" :style="whiteColorStyles">
        VvButton
    </VvAnchor>
</div>








## Prop: buttonFab

Type: **`Boolean`**  
Default: **`VvConfig.defaults.VvAnchor.buttonFab`**

The {{ $frontmatter.title }} `buttonFab` prop sets the component instance to use base classes with equal width and height classes making the returned `<anchor>` element a square element that can also be styled as a circle using a Tailwind CSS `.rounded-full` class.

### Syntax

```html
<VvAnchor
    :button="true"
    :button-fab="true"
    palette="solid"
>
    +
</VvAnchor>

<VvAnchor
    :button="true"
    :button-fab="true"
    palette="solid"
    class="rounded-full"
>
    +
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-fab="true" palette="solid" :style="grayColorStyles">
        +
    </VvAnchor>
    <VvAnchor :button="true" :button-fab="true" palette="solid" class="rounded-full" :style="grayColorStyles">
        +
    </VvAnchor>
</div>










## Prop: buttonSize

Type: **`String`**  
Default: **`VvConfig.defaults.VvAnchor.buttonSize`**

The {{ $frontmatter.title }} `buttonSize` prop sets the Tailwind CSS size classes applied to the output element. By default, these classes match the size classes (and examples) over in the [VvButton Prop: Size](/components/buttons/vv-button#prop-size) docs section.

### Syntax

```html
<VvAnchor
    :button="true"
    button-size="xl"
    palette="solid"
    color="primary"
>
    VvAnchor
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor
        :button="true"
        button-size="xl"
        palette="solid"
        color="primary"
        :style="whiteColorStyles"
    >
        VvAnchor
    </VvAnchor>
</div>








## Prop: color

Type: **`String`**  
Default: **`VvConfig.defaults.VvAnchor.color`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visully text styled `<anchor>` element, then the `color` prop value pulls a color from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visully text styled `<button>` element, then the `color` prop value is pulls a color from a button palette.

!!!include(snippets/vvAnchorCompoPaletteButtonTip.md)!!!

### Syntax

```html
<VvAnchor color="default">
    VvAnchor
</VvAnchor>, 
<VvAnchor color="error">
    VvAnchor
</VvAnchor>, 
<VvAnchor color="primary">
    VvAnchor
</VvAnchor>, 
<VvAnchor color="secondary">
    VvAnchor
</VvAnchor>, 
<VvAnchor color="success">
    VvAnchor
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor color="default">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor color="error">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor color="primary">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor color="secondary">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor color="success">
        VvAnchor
    </VvAnchor>
</div>

To view the color examples of the {{ $frontmatter.title }} with button mode enabled, check out the docs for the [VvButton Prop: color](/components/buttons/vv-button#prop-color) and [VvButton Prop: palette](/components/buttons/vv-button#prop-palette).







## Prop: href

Type: **`String`**  
Default: **`VvConfig.defaults.VvAnchor.href`**

The {{ $frontmatter.title }} `href` prop value sets the href value for the output `<a>` element.

### Syntax

```html
<VvAnchor href="#">
    VvAnchor
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor href="#">
        VvAnchor
    </VvAnchor>
</div>








## Prop: palette

Type: **`String`**  
Default: **`VvConfig.defaults.VvAnchor.palette`**

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visully text styled `<anchor>` element, then the `palette` prop value points to an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visully text styled `<button>` element, then the `color` prop value points to a button palette.

!!!include(snippets/vvAnchorCompoPaletteButtonTip.md)!!!

### Syntax

```html
<VvAnchor palette="default" color="default">
    VvAnchor
</VvAnchor>, 
<VvAnchor palette="default" color="error">
    VvAnchor
</VvAnchor>, 
<VvAnchor palette="default" color="primary">
    VvAnchor
</VvAnchor>, 
<VvAnchor palette="default" color="secondary">
    VvAnchor
</VvAnchor>, 
<VvAnchor palette="default" color="success">
    VvAnchor
</VvAnchor>
```

```html
<VvAnchor :button="true" palette="outline" color="default" class="mb-2">
    VvAnchor
</VvAnchor>
<br>
<VvAnchor :button="true" palette="outline" color="error" class="mb-2">
    VvAnchor
</VvAnchor>
<br>
<VvAnchor :button="true" palette="outline" color="primary" class="mb-2">
    VvAnchor
</VvAnchor>
<br>
<VvAnchor :button="true" palette="outline" color="secondary" class="mb-2">
    VvAnchor
</VvAnchor>
<br>
<VvAnchor :button="true" palette="outline" color="success" class="mb-2">
    VvAnchor
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor palette="default" color="default">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor palette="default" color="error">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor palette="default" color="primary">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor palette="default" color="secondary">
        VvAnchor
    </VvAnchor>, 
    <VvAnchor palette="default" color="success">
        VvAnchor
    </VvAnchor>
</div>

<div class="w-full pt-4">
    <VvAnchor :button="true" palette="outline" color="default" class="mb-2">
        VvAnchor
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="error" class="mb-2">
        VvAnchor
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="primary" class="mb-2">
        VvAnchor
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="secondary" class="mb-2">
        VvAnchor
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="success" class="mb-2">
        VvAnchor
    </VvAnchor>
</div>

To view the color examples of the {{ $frontmatter.title }} with button mode enabled, check out the docs for the [VvButton Prop: color](/components/buttons/vv-button#prop-color) and [VvButton Prop: palette](/components/buttons/vv-button#prop-palette).








## Prop: transitionClasses

Type: **`String`**  
Default: **`VvConfig.transitions.classes()`**

The {{ $frontmatter.title }} `transitionClasses` prop value sets the Tailwind CSS transition group classes that are applied to the output `<a>` element.

### Syntax

```html
<VvAnchor transition-classes="transition-colors ease-in-out duration-300" href="#">
    VvAnchor
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor transition-classes="transition-colors ease-in-out duration-300" href="#">
        VvAnchor
    </VvAnchor>
</div>








## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvAnchor href="#">
    Slot <span class="text-red-500">Content</span>
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor href="#">
        Slot <span class="text-red-500">Content</span>
    </VvAnchor>
</div>






<DocsPackageVersion/>
