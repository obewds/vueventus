---
title: Buttons Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Buttons from '../../../src/configs/Buttons'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Button elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.buttons.someProperty = 'some-value'

// ...

export default appVv
```







## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Buttons } from '@obewds/vueventus'
```






## Buttons.blockDisplay

Type: **`String`**  
Default: **`"{{ Buttons.blockDisplay }}"`**

The `Buttons.blockDisplay` parameter is meant to isolate the CSS block level display characteristics and requirements for an application's block level styled button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.blockDisplay = '...'
```








## Buttons.blockSizes

Type: **`Object`**  

| Buttons.blockSizes Properties | Buttons.blockSizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.blockSizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.blockSizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.blockSizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.blockSizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.blockSizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.blockSizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.blockSizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.blockSizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.blockSizes['2xl'] }}"` |
| `"3xl"`                       | `"{{ Buttons.blockSizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.blockSizes['4xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.buttons.blockSizes = {
    '4xs': '...',
    '3xs': '...',
    '2xs': '...',
     'xs': '...',
     'sm': '...',
     'md': '...',
     'lg': '...',
     'xl': '...',
    '2xl': '...',
    '3xl': '...',
    '4xl': '...',
}
```

```javascript
// ./src/app.vv.ts
appVv.buttons.blockSizes['4xs'] = '...'
appVv.buttons.blockSizes['3xs'] = '...'
appVv.buttons.blockSizes['2xs'] = '...'
appVv.buttons.blockSizes['xs']  = '...'
appVv.buttons.blockSizes['sm']  = '...'
appVv.buttons.blockSizes['md']  = '...'
appVv.buttons.blockSizes['lg']  = '...'
appVv.buttons.blockSizes['xl']  = '...'
appVv.buttons.blockSizes['2xl'] = '...'
appVv.buttons.blockSizes['3xl'] = '...'
appVv.buttons.blockSizes['4xl'] = '...'
```






## Buttons.border

Type: **`String`**  
Default: **`"{{ Buttons.border }}"`**

The `Buttons.border` parameter is meant to isolate the border related characteristics and requirements for an application's block level styled button elements, but not including any border color characteristic, which is considered a global element color palette characteristic in VueVentus.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.border = '...'
```








## Buttons.cursor

Type: **`String`**  
Default: **`"{{ Buttons.cursor }}"`**

The `Buttons.cursor` parameter is meant to isolate the CSS cursor orientated characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.cursor = '...'
```







## Buttons.disabled

Type: **`String`**  
Default: **`"{{ Buttons.disabled }}"`**

The `Buttons.disabled` parameter is meant to isolate the disabled characteristics and requirements for an application's button elements. Disabled characteristics in the contexts of Tailwind CSS involve the `disabled:` modifier and the `disabled` HTML element attribute.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.disabled = '...'
```






## Buttons.display

Type: **`String`**  
Default: **`"{{ Buttons.display }}"`**

The `Buttons.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.display = '...'
```






## Buttons.fabDisplay

Type: **`String`**  
Default: **`"{{ Buttons.fabDisplay }}"`**

The `Buttons.fabDisplay` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's button elements when styled like a fab button.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.fabDisplay = '...'
```








## Buttons.fabSizes

Type: **`Object`**  

| Buttons.fabSizes Properties | Buttons.fabSizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.fabSizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.fabSizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.fabSizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.fabSizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.fabSizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.fabSizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.fabSizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.fabSizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.fabSizes['2xl'] }}"` |
| `"3xl"`                       | `"{{ Buttons.fabSizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.fabSizes['4xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.buttons.fabSizes = {
    '4xs': '...',
    '3xs': '...',
    '2xs': '...',
     'xs': '...',
     'sm': '...',
     'md': '...',
     'lg': '...',
     'xl': '...',
    '2xl': '...',
    '3xl': '...',
    '4xl': '...',
}
```

```javascript
// ./src/app.vv.ts
appVv.buttons.fabSizes['4xs'] = '...'
appVv.buttons.fabSizes['3xs'] = '...'
appVv.buttons.fabSizes['2xs'] = '...'
appVv.buttons.fabSizes['xs']  = '...'
appVv.buttons.fabSizes['sm']  = '...'
appVv.buttons.fabSizes['md']  = '...'
appVv.buttons.fabSizes['lg']  = '...'
appVv.buttons.fabSizes['xl']  = '...'
appVv.buttons.fabSizes['2xl'] = '...'
appVv.buttons.fabSizes['3xl'] = '...'
appVv.buttons.fabSizes['4xl'] = '...'
```









## Buttons.focus

Type: **`String`**  
Default: **`"{{ Buttons.focus }}"`**

The `Buttons.focus` parameter is meant to isolate the CSS focus orientated characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.focus = '...'
```








## Buttons.rounding

Type: **`String`**  
Default: **`"{{ Buttons.rounding }}"`**

The `Buttons.rounding` parameter is meant to isolate the CSS border radius orientated characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.rounding = '...'
```








## Buttons.shadow

Type: **`String`**  
Default: **`"{{ Buttons.shadow }}"`**

The `Buttons.shadow` parameter is meant to isolate the Tailwind CSS drop-shadow orientated characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.shadow = '...'
```







## Buttons.sizes

Type: **`Object`**  

| Buttons.sizes Properties      | Buttons.sizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.sizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.sizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.sizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.sizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.sizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.sizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.sizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.sizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.sizes['2xl'] }}"` |
| `"3xl"`                       | `"{{ Buttons.sizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.sizes['4xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.buttons.sizes = {
    '4xs': '...',
    '3xs': '...',
    '2xs': '...',
     'xs': '...',
     'sm': '...',
     'md': '...',
     'lg': '...',
     'xl': '...',
    '2xl': '...',
    '3xl': '...',
    '4xl': '...',
}
```

```javascript
// ./src/app.vv.ts
appVv.buttons.sizes['4xs'] = '...'
appVv.buttons.sizes['3xs'] = '...'
appVv.buttons.sizes['2xs'] = '...'
appVv.buttons.sizes['xs']  = '...'
appVv.buttons.sizes['sm']  = '...'
appVv.buttons.sizes['md']  = '...'
appVv.buttons.sizes['lg']  = '...'
appVv.buttons.sizes['xl']  = '...'
appVv.buttons.sizes['2xl'] = '...'
appVv.buttons.sizes['3xl'] = '...'
appVv.buttons.sizes['4xl'] = '...'
```








## Buttons.text

Type: **`String`**  
Default: **`"{{ Buttons.text }}"`**

The `Buttons.text` parameter is meant to isolate the text specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc. Instead, the `Buttons.text` parameter is meant for classes that would make button text unique from other text for more design/accessibility reasons.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.text = '...'
```








## Buttons.transition

Type: **`String`**  
Default: **`"{{ Buttons.transition }}"`**

The `Buttons.transition` parameter is meant to isolate the transition/animation specific atomic classes for an application's button elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.buttons.transition = '...'
```










## Buttons.base()

Returns: **`String`**  
Default: **`"{{ Buttons.base() }}"`**

The `Buttons.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="[appVv.buttons.base(), String(appVv.buttons.palettes.solid.primary)]">
        Solid Primary Btn
    </button>

</template>
```







## Buttons.blockBase()

Returns: **`String`**  
Default: **`"{{ Buttons.blockBase() }}"`**

The `Buttons.blockBase()` method returns a joined `String` of the atomic classes within the various button mode base properties of the block-level variation of a button from the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="appVv.buttons.blockBase()">
        Base Block-Level Button
    </button>

</template>
```







## Buttons.blockClasses()

Returns: **`String`**  
Default: **`"{{ Buttons.blockClasses() }}"`**

The `Buttons.blockClasses()` method returns a joined `String` of the atomic classes within the various blockBase properties of the {{ $frontmatter.title }} object using the `Buttons.blockBase()` method under the hood.

However, the `Buttons.blockClasses()` method also returns `Buttons.getBlockSizeClasses()` method classes in addition to the blockBase property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.blockSizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.blockSizes](/modules/configs/buttons#buttons-blocksizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="appVv.buttons.blockClasses()">
        Default Sized Block Button
    </button>

    <button type="button" :class="appVv.buttons.blockClasses('lg')">
        Large Sized Block Button
    </button>

</template>
```







## Buttons.classes()

Returns: **`String`**  
Default: **`"{{ Buttons.classes() }}"`**

The `Buttons.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Buttons.base()` method under the hood.

However, the `Buttons.classes()` method also returns `Buttons.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.sizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.sizes](/modules/configs/buttons#buttons-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="appVv.buttons.classes()">
        Default Sized Button
    </button>

    <button type="button" :class="appVv.buttons.classes('lg')">
        Large Sized Button
    </button>

</template>
```







## Buttons.fabBase()

Returns: **`String`**  
Default: **`"{{ Buttons.fabBase() }}"`**

The `Buttons.fabBase()` method returns a joined `String` of the atomic classes within the various button mode base properties of the fab variation of a button from the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Base Fab Button -->
    <button type="button" :class="appVv.buttons.fabBase()"/>

</template>
```







## Buttons.fabClasses()

Returns: **`String`**  
Default: **`"{{ Buttons.fabClasses() }}"`**

The `Buttons.fabClasses()` method returns a joined `String` of the atomic classes within the various fabBase properties of the {{ $frontmatter.title }} object using the `Buttons.fabBase()` method under the hood.

However, the `Buttons.fabClasses()` method also returns `Buttons.getFabSizeClasses()` method classes in addition to the fabBase property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.fabSizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.fabSizes](/modules/configs/buttons#buttons-fabsizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Default Fab Button -->
    <button type="button" :class="appVv.buttons.fabClasses()"/>

    <!-- Large Fab Button -->
    <button type="button" :class="appVv.buttons.fabClasses('lg')"/>

</template>
```







## Buttons.getBlockSizeClasses()

Returns: **`String`**  
Default: **`"{{ Buttons.getBlockSizeClasses() }}"`**

The `Buttons.getBlockSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Buttons.blockSizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.sizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.blockSizes](/modules/configs/buttons#buttons-blocksizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="appVv.buttons.getBlockSizeClasses()">
        Default Sized Block Button
    </button>

    <button type="button" :class="appVv.buttons.getBlockSizeClasses('sm')">
        Small Sized Block Button
    </button>

</template>
```







## Buttons.getFabSizeClasses()

Returns: **`String`**  
Default: **`"{{ Buttons.getFabSizeClasses() }}"`**

The `Buttons.getFabSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Buttons.fabSizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.sizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.fabSizes](/modules/configs/buttons#buttons-fabsizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Default Sized Fab Button -->
    <button type="button" :class="appVv.buttons.getFabSizeClasses()"/>

    <!-- Small Sized Fab Button -->
    <button type="button" :class="appVv.buttons.getFabSizeClasses('sm')"/>

</template>
```







## Buttons.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Buttons.getSizeClasses() }}"`**

The `Buttons.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Buttons.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Buttons.sizes object |

The applicable values for the `sizesKey` argument are set via the [Buttons.sizes](/modules/configs/buttons#buttons-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button type="button" :class="appVv.buttons.getSizeClasses()">
        Default Sized Button
    </button>

    <button type="button" :class="appVv.buttons.getSizeClasses('sm')">
        Small Sized Button
    </button>

</template>
```









## Module Code

<<< @/../src/configs/Buttons.ts






<DocsPackageVersion/>



