---
title: VvAnchor Component
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



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a variety of props and config module based settings to make a variety of anchor elements for applications with an extremely DRY implementation of atomic classes.






## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvAnchor from './vv/anchors/VvAnchor.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvAnchor } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!











## Prop: button

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvAnchor.button }}`**

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
Default: **`{{ VvConfig.defaults.VvAnchor.buttonBlock }}`**

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
    VvAnchor
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor :button="true" :button-block="true" palette="solid" color="primary" href="#" :style="whiteColorStyles">
        VvAnchor
    </VvAnchor>
</div>








## Prop: buttonFab

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvAnchor.buttonFab }}`**

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

Type: **`String`** as PropType<keyof **[SizesButtons](/typescript/interfaces#sizesbuttons)**>  
Default: **`"{{ VvConfig.defaults.VvAnchor.buttonSize }}"`**

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


### Typing for Downstream Component Instances

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { SizesButtons } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'

    export default defineComponent({

        components: { VvAnchor },

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
    <VvAnchor
        :href="href"
        :button="true"
        :button-size="buttonSize"
    >
        buttonSize prop example
    </VvAnchor>
</template>
```








## Prop: color

Type: **`String`** as PropType<keyof **[DefaultPaletteColors](/typescript/interfaces#defaultpalettecolors)**>  
Default: **`"{{ VvConfig.defaults.VvAnchor.color }}"`**

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<a>` element, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<a>` element, then the `color` prop value pulls classes from a button palette.

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

### Typing for Downstream Component Instances

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { SizesButtons } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'

    export default defineComponent({

        components: { VvAnchor },

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
    <VvAnchor
        :href="href"
        :color="buttonSize"
    >
        buttonSize prop example
    </VvAnchor>
</template>
```








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvAnchor.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-anchor-` prefixed HTML attributes.

### Syntax

```html
<VvAnchor :debug="true">
    VvAnchor debug
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor :debug="true">
        VvAnchor debug
    </VvAnchor>
</div>










## Prop: external

Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvAnchor.external }}`**

When the {{ $frontmatter.title }} `external` prop value is `true`, the output `<anchor>` element will have a `target="_blank"` and `rel="noopener noreferrer"` attributes/values so links that leave the application space open in a new tab for users.

### Syntax

```html
<VvAnchor
    :external="true"
    href="https://obewds.github.io/vueventus/components/anchors/vv-anchor.html"
>
    VueVentus VvAnchor Docs
</VvAnchor>
```

### Result

<div data-css-override class="w-full pt-4">
    <VvAnchor :external="true" href="https://obewds.github.io/vueventus/components/anchors/vv-anchor.html">
        VueVentus VvAnchor Docs
    </VvAnchor>
</div>








## Prop: href

Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvAnchor.href }}"`**

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

Type: **`String`** as PropType<keyof **[DefaultValidationPalettes](/typescript/interfaces#defaultvalidationpalettes)** | keyof **[DefaultButtonPalettes](/typescript/interfaces#Defaultbuttonpalettes)**>  
Default: **`"{{ VvConfig.defaults.VvAnchor.palette }}"`**

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together with the `button` prop value.

If the `button` prop value is `false` and the component is being used to output a visually text styled `<a>` element, then the `color` prop value pulls classes from an anchor palette.

Conversely, if the `button` prop value is `true` and button mode is enabled to output a visually button styled `<a>` element, then the `color` prop value pulls classes from a button palette.

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


### Typing for Downstream Component Instances

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

Type: **`String`** as PropType<keyof **[SizesText](/typescript/interfaces#sizestext)**>  
Default: **`"{{ VvConfig.defaults.VvAnchor.textSize }}"`**

The {{ $frontmatter.title }} `textSize` prop sets the component instance size-based classes which in the context of anchor elements typically involves font size atomic classes.

### Syntax

```html
<VvAnchor href="/" text-size="lg">
    "lg" VvAnchor text
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor href="/" text-size="lg">
        "lg" VvAnchor text
    </VvAnchor>
</div>

::: details size prop VvAnchor size examples
<div class="pt-4">
    <VvAnchor href="/" text-size="5xs">
        "5xs" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="4xs">
        "4xs" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="3xs">
        "3xs" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="2xs">
        "2xs" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="xs">
        "xs" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="sm">
        "sm" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="md">
        "md" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="lg">
        "lg" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="xl">
        "xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="2xl">
        "2xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="3xl">
        "3xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="4xl">
        "4xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="5xl">
        "5xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="6xl">
        "6xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="7xl">
        "7xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="8xl">
        "8xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="9xl">
        "9xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="10xl">
        "10xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="11xl">
        "11xl" VvAnchor text
    </VvAnchor>
    <br>
    <VvAnchor href="/" text-size="12xl">
        "12xl" VvAnchor text
    </VvAnchor>
</div>
:::


### Typing for Downstream Component Instances

<DocsTypingDownstreamText :name="$frontmatter.title"/>

```html
<!-- ./src/components/MyComponent.vue -->

<script lang="ts">

    import type { PropType } from 'vue'
    import type { SizesText } from '@obewds/vueventus'

    import { defineComponent } from 'vue'
    import VvAnchor from './vv/anchors/VvAnchor.vue'

    export default defineComponent({

        components: { VvAnchor },

        props: {
            href: {
                type: String,
                default: '/',
            },
            textSize: {
                type: String as PropType<keyof SizesText>,
                default: '2xl',
            },
        },

    })

</script>

<template>
    <VvAnchor
        :href="href"
        :text-size="textSize"
    >
        "2xl" VvAnchor text
    </VvAnchor>
</template>
```








## Slot: #default

The {{ $frontmatter.title }} has a standard `#default` Vue slot to insert child elements/nodes into the component.

### Syntax

```html
<VvAnchor href="#">
    Slot <span class="text-red-500 dark:text-red-300">Content</span>
</VvAnchor>
```

### Result

<div class="w-full pt-4">
    <VvAnchor href="#">
        Slot <span class="text-red-500 dark:text-red-300">Content</span>
    </VvAnchor>
</div>






<DocsPackageVersion/>
