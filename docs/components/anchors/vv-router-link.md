---
title: VvRouterLink Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvAnchor, VvConfig } from '../../../src/index'
    import appColors from '../../../src/data/app.color.data.json'

    const grayColorStyles = {
        color: appColors.gray['900']
    }
    const whiteColorStyles = {
        color: appColors.white
    }
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is modeled on the [VvAnchor](/components/anchors/vv-anchor) component, but instead uses a Vue Router `router-link` tag/props instead of a `a` tag/props like the VvAnchor component uses.

The {{ $frontmatter.title }} provides variety of props and config module based settings to make a variety of anchor elements for applications with an extremely DRY implementation of atomic classes.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvRouterLink from './vv/anchors/VvRouterLink.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!











## Prop: button

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvRouterLink.button }}`**

When the {{ $frontmatter.title }} `button` prop value is `true`, the output element changes from normal anchor element styling set in the [Anchor Config Module](/modules/configs/anchors) to button styling that is driven by the Tailwind CSS classes in the [Button Config Module](/modules/configs/buttons).

### Syntax

```html
<VvRouterLink
    :button="true"
    palette="solid"
    color="primary"
    to="/"
>
    VvRouterLink
</VvRouterLink>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor
        :button="true"
        palette="solid"
        href="#"
        :style="grayColorStyles"
    >
        VvRouterLink
    </VvAnchor>
</div>








## Prop: buttonBlock

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvRouterLink.buttonBlock }}`**

The {{ $frontmatter.title }} `buttonBlock` prop sets the component instance to use block-level base classes making the returned `<a>` element a full width and block-level button styled element.

### Syntax

```html
<VvRouterLink
    :button="true"
    :button-block="true"
    palette="solid"
    color="primary"
    to="/"
>
    VvRouterLink
</VvRouterLink>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" href="#" :style="whiteColorStyles">
        VvRouterLink
    </VvAnchor>
</div>








## Prop: buttonFab

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvRouterLink.buttonFab }}`**

The {{ $frontmatter.title }} `buttonFab` prop sets the component instance to use base classes with equal width and height classes making the returned `<anchor>` element a square element that can also be styled as a circle using a Tailwind CSS `.rounded-full` class.

### Syntax

```html
<VvRouterLink
    :button="true"
    :button-fab="true"
    palette="solid"
>
    +
</VvRouterLink>

<VvRouterLink
    :button="true"
    :button-fab="true"
    palette="solid"
    class="rounded-full"
>
    +
</VvRouterLink>
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
Default: **`"{{ VvConfig.defaults.VvRouterLink.buttonSize }}"`**

The {{ $frontmatter.title }} `buttonSize` prop sets the Tailwind CSS size classes applied to the output element. By default, these classes match the size classes (and examples) over in the [VvButton Prop: Size](/components/buttons/vv-button#prop-size) docs section.

### Syntax

```html
<VvRouterLink
    :button="true"
    button-size="xl"
    palette="solid"
    color="primary"
>
    VvRouterLink
</VvRouterLink>
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
        VvRouterLink
    </VvAnchor>
</div>








## Prop: color

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRouterLink.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<router-link>` component, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<router-link>` element, then the `color` prop value pulls classes from a button palette.

### Syntax

```html
<VvRouterLink color="default">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink color="error">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink color="primary">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink color="secondary">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink color="success">
    VvRouterLink
</VvRouterLink>
```

### Result

<div class="w-full pt-4">
    <VvAnchor color="default">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor color="error">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor color="primary">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor color="secondary">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor color="success">
        VvRouterLink
    </VvAnchor>
</div>

To view the color examples of the {{ $frontmatter.title }} with button mode enabled, check out the docs for the [VvButton Prop: color](/components/buttons/vv-button#prop-color) and [VvButton Prop: palette](/components/buttons/vv-button#prop-palette).








## Prop: palette

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRouterLink.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<router-link>` component, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<router-link>` element, then the `color` prop value pulls classes from a button palette.

### Syntax

```html
<VvRouterLink palette="default" color="default">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink palette="default" color="error">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink palette="default" color="primary">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink palette="default" color="secondary">
    VvRouterLink
</VvRouterLink>, 
<VvRouterLink palette="default" color="success">
    VvRouterLink
</VvRouterLink>
```

```html
<VvRouterLink :button="true" palette="outline" color="default" class="mb-2">
    VvRouterLink
</VvRouterLink>
<br>
<VvRouterLink :button="true" palette="outline" color="error" class="mb-2">
    VvRouterLink
</VvRouterLink>
<br>
<VvRouterLink :button="true" palette="outline" color="primary" class="mb-2">
    VvRouterLink
</VvRouterLink>
<br>
<VvRouterLink :button="true" palette="outline" color="secondary" class="mb-2">
    VvRouterLink
</VvRouterLink>
<br>
<VvRouterLink :button="true" palette="outline" color="success" class="mb-2">
    VvRouterLink
</VvRouterLink>
```

### Result

<div class="w-full pt-4">
    <VvAnchor palette="default" color="default">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor palette="default" color="error">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor palette="default" color="primary">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor palette="default" color="secondary">
        VvRouterLink
    </VvAnchor>, 
    <VvAnchor palette="default" color="success">
        VvRouterLink
    </VvAnchor>
</div>

<div class="w-full pt-4">
    <VvAnchor :button="true" palette="outline" color="default" class="mb-2">
        VvRouterLink
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="error" class="mb-2">
        VvRouterLink
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="primary" class="mb-2">
        VvRouterLink
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="secondary" class="mb-2">
        VvRouterLink
    </VvAnchor>
    <br>
    <VvAnchor :button="true" palette="outline" color="success" class="mb-2">
        VvRouterLink
    </VvAnchor>
</div>

To view the color examples of the {{ $frontmatter.title }} with button mode enabled, check out the docs for the [VvButton Prop: color](/components/buttons/vv-button#prop-color) and [VvButton Prop: palette](/components/buttons/vv-button#prop-palette).







## Prop: to

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRouterLink.to }}"`**

The {{ $frontmatter.title }} `to` prop value sets the to -> href value for the output `<router-link>` component.

### Syntax

```html
<VvRouterLink to="/">
    VvRouterLink
</VvRouterLink>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor href="/">
        VvRouterLink
    </VvAnchor>
</div>








## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvRouterLink to="#">
    Slot <span class="text-red-500 dark:text-red-300">Content</span>
</VvRouterLink>
```

### Result

<div class="w-full pt-4">
    <VvAnchor href="/">
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvAnchor>
</div>









<DocsPackageVersion/>