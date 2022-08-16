---
title: Radios Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Radios from '../../../src/configs/Radios'
</script>




# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Radio input elements in your application, excluding color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.radios.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Radios } from '@obewds/vueventus'
```










## Radios.baseColors

Type: **`String`**  
Default: **`"{{ Radios.baseColors }}"`**

The `Radios.baseColors` parameter is meant to isolate any base color classes that would apply **in addition** to all palette colors.

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.baseColors = '...'
```










## Radios.border

Type: **`String`**  
Default: **`"{{ Radios.border }}"`**

The `Radios.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.border = '...'
```








## Radios.outline

Type: **`String`**  
Default: **`"{{ Radios.outline }}"`**

The `Radios.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.outline = '...'
```












## Radios.ring

Type: **`String`**  
Default: **`"{{ Radios.ring }}"`**

The `Radios.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.ring = '...'
```












## Radios.rounding

Type: **`String`**  
Default: **`"{{ Radios.rounding }}"`**

The `Radios.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.rounding = '...'
```












## Radios.shadow

Type: **`String`**  
Default: **`"{{ Radios.shadow }}"`**

The `Radios.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.shadow = '...'
```








## Radios.sizes

Type: **`Object`**  

| Radios.sizes Properties | Radios.sizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `"{{ Radios.sizes['xs'] }}"`  |
| `"sm"`                  | `"{{ Radios.sizes['sm'] }}"`  |
| `"md"`                  | `"{{ Radios.sizes['md'] }}"`  |
| `"lg"`                  | `"{{ Radios.sizes['lg'] }}"`  |
| `"xl"`                  | `"{{ Radios.sizes['xl'] }}"`  |
| `"2xl"`                 | `"{{ Radios.sizes['2xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.radios.sizes = {
     'xs': '',
     'sm': '',
     'md': '',
     'lg': '',
     'xl': '',
    '2xl': '',
}
```

```javascript
// ./src/app.vv.ts
appVv.radios.sizes['xs']  = ''
appVv.radios.sizes['sm']  = ''
appVv.radios.sizes['md']  = ''
appVv.radios.sizes['lg']  = ''
appVv.radios.sizes['xl']  = ''
appVv.radios.sizes['2xl'] = ''
```








## Radios.transition

Type: **`String`**  
Default: **`"{{ Radios.transition }}"`**

The `Radios.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.radios.transition = '...'
```











## Radios.base()

Returns: **`String`**  
Default: **`"{{ Radios.base() }}"`**

The `Radios.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <input type="radio" :class="appVv.radios.base()"/>

</template>
```












## Radios.classes()

Returns: **`String`**  
Default: **`"{{ Radios.classes() }}"`**

The `Radios.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Radios.base()` method under the hood.

However, the `Radios.classes()` method also returns `Radios.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of a Radios.sizes object |

The applicable values for the `sizesKey` argument are set via the [Radios.sizes](/modules/configs/radios#radiossizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Regular Sized Radio -->
    <input :class="appVv.radios.classes()"/>

    <!-- Large Sized Radio -->
    <input :class="appVv.radios.classes('lg')"/>

</template>
```








## Radios.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Radios.getSizeClasses() }}"`**

The `Radios.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Radios.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Radios.sizes object |

The applicable values for the `sizesKey` argument are set via the [Radios.sizes](/modules/configs/radios#radiossizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Regular Sized Radio -->
    <input :class="appVv.radios.getSizeClasses()"/>

    <!-- Large Sized Radio -->
    <input :class="appVv.radios.getSizeClasses('lg')"/>

</template>
```













## Module Code

<<< @/../src/configs/Radios.ts









<DocsPackageVersion/>
