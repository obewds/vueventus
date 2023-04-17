---
title: VvRouterLink Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import DocsTypingDownstreamText from '../../../src/views/compos/DocsTypingDownstreamText.vue'

    import { VvAnchor, VvConfig } from '../../../src/index'
    import appColors from '../../../src/data/app.color.data.json'

    const grayColorStyles = {
        color: appColors.gray['900']
    }
    const whiteColorStyles = {
        color: appColors.white
    }
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### ### : -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is modeled on the [VvAnchor](/components/anchors/vv-anchor) component, but instead uses a Vue Router `router-link` tag/props instead of an `a` tag/props like the VvAnchor component uses.

The {{ $frontmatter.title }} provides variety of props and config module based settings to make a variety of anchor styled elements for applications with an extremely DRY implementation of atomic classes.






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

### Syntax:

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

### Result:

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

### Syntax:

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

### Result:

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" href="#" :style="whiteColorStyles">
        VvRouterLink
    </VvAnchor>
</div>








## Prop: buttonFab

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvRouterLink.buttonFab }}`**

The {{ $frontmatter.title }} `buttonFab` prop sets the component instance to use base classes with equal width and height classes making the returned `<anchor>` element a square element that can also be styled as a circle using a Tailwind CSS `.rounded-full` class.

### Syntax:

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

### Result:

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-fab="true" palette="solid" :style="grayColorStyles">
        +
    </VvAnchor>
    <VvAnchor :button="true" :button-fab="true" palette="solid" class="rounded-full" :style="grayColorStyles">
        +
    </VvAnchor>
</div>










## Prop: buttonSize

Type: **`String`** as PropType<keyof **[SizesButtons](/typescript/interfaces#sizesbuttons)**>  
Default: **`"{{ VvConfig.defaults.VvRouterLink.buttonSize }}"`**

The {{ $frontmatter.title }} `buttonSize` prop sets the Tailwind CSS size classes applied to the output element. By default, these classes match the size classes (and examples) over in the [VvButton Prop: Size](/components/buttons/vv-button#prop-size) docs section.

### Syntax:

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

### Result:

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

### Typing for Downstream Component Instances:

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { SizesButtons } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvRouterLink from './vv/anchors/VvRouterLink.vue'

    export default defineComponent({

        components: { VvRouterLink },

        props: {
            href: {
                type: String,
                default: '/',
            },
            buttonSize: {
                type: String as PropType<keyof SizesButtons>,
                default: 'md',
            },
        },

    })

</script>

<template>
    <VvRouterLink
        :href="href"
        :button="true"
        :button-size="buttonSize"
    >
        buttonSize prop example
    </VvRouterLink>
</template>
```








## Prop: color

Type: **`String`** as PropType<keyof **[DefaultPaletteColors](/typescript/interfaces#defaultpalettecolors)**>  
Default: **`"{{ VvConfig.defaults.VvRouterLink.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<router-link>` component, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<router-link>` element, then the `color` prop value pulls classes from a button palette.

### Syntax:

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

### Result:

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

### Typing for Downstream Component Instances:

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { DefaultPaletteColors } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvRouterLink from './vv/anchors/VvRouterLink.vue'

    export default defineComponent({

        components: { VvRouterLink },

        props: {
            href: {
                type: String,
                default: '/',
            },
            color: {
                type: String as PropType<keyof DefaultPaletteColors>,
                default: 'primary',
            },
        },

    })

</script>

<template>
    <VvRouterLink
        :href="href"
        :color="color"
    >
        color prop example
    </VvRouterLink>
</template>
```








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvRouterLink.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-router-link-` prefixed HTML attributes.

### Syntax:

```html
<VvRouterLink :debug="true">
    VvRouterLink debug
</VvRouterLink>
```






## Prop: palette

Type: **`String`** as PropType<keyof **[DefaultValidationPalettes](/typescript/interfaces#defaultvalidationpalettes)** | keyof **[DefaultButtonPalettes](/typescript/interfaces#Defaultbuttonpalettes)**>  
Default: **`"{{ VvConfig.defaults.VvRouterLink.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<router-link>` component, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<router-link>` element, then the `color` prop value pulls classes from a button palette.

### Syntax:

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

### Result:

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

### Typing for Downstream Component Instances:

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import { defineComponent } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'
    import type { PropType } from 'vue'
    import type { DefaultButtonPalettes, DefaultPalettes } from '@obewds/vueventus'

    export default defineComponent({

        components: { VvAnchor },

        props: {
            href: {
                type: String,
                default: '/',
            },
            palette: {
                type: String as PropType<keyof DefaultPalettes | keyof DefaultButtonPalettes>,
                default: 'default', // 'default' is an anchor palette, could use 'solid' or 'outline' button palettes, too!
            },
        },

    })

</script>

<template>
    <VvAnchor
        :href="href"
        :palette="palette"
    >
        palette prop example
    </VvAnchor>
</template>
```







## Prop: textSize
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRouterLink.textSize }}"`**

The {{ $frontmatter.title }} `textSize` prop sets the component instance size-based classes which in the context of anchor elements typically involves font size atomic classes.

### Syntax:

```html
<VvRouterLink to="/" text-size="lg">
    "lg" VvRouterLink text
</VvRouterLink>
```

### Result:

<div class="w-full pt-4">
    <VvAnchor href="/" text-size="lg">
        "lg" VvRouterLink text
    </VvAnchor>
</div>

::: details size prop VvAnchor size examples
<div class="pt-4">
    <VvAnchor href="/" text-size="5xs">
        "5xs" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="4xs">
        "4xs" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="3xs">
        "3xs" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="2xs">
        "2xs" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="xs">
        "xs" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="sm">
        "sm" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="md">
        "md" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="lg">
        "lg" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="xl">
        "xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="2xl">
        "2xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="3xl">
        "3xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="4xl">
        "4xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="5xl">
        "5xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="6xl">
        "6xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="7xl">
        "7xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="8xl">
        "8xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="9xl">
        "9xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="10xl">
        "10xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="11xl">
        "11xl" VvRouterLink text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="12xl">
        "12xl" VvRouterLink text
    </VvAnchor>
</div>
:::

### Typing for Downstream Component Instances:
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!





## Prop: to

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvRouterLink.to }}"`**

The {{ $frontmatter.title }} `to` prop value sets the to -> href value for the output `<router-link>` component.

### Syntax:

```html
<VvRouterLink to="/">
    VvRouterLink
</VvRouterLink>
```

### Result:

<div data-css-override class="w-full pt-4">
    <VvAnchor href="/">
        VvRouterLink
    </VvAnchor>
</div>








## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax:

```html
<VvRouterLink to="#">
    Slot <span class="text-red-500 dark:text-red-300">Content</span>
</VvRouterLink>
```

### Result:

<div class="w-full pt-4">
    <VvAnchor href="/">
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvAnchor>
</div>









<DocsPackageVersion/>
