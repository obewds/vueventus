---
title: Checkboxes Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Checkboxes from '../../../src/configs/Checkboxes'
</script>




# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Checkbox input elements in your application, excluding color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.checkboxes.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Checkboxes } from '@obewds/vueventus'
```










## Checkboxes.baseColors

Type: **`String`**  
Default: **`"{{ Checkboxes.baseColors }}"`**

The `Checkboxes.baseColors` parameter is meant to isolate any base color classes that would apply **in addition** to all palette colors.

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.baseColors = '...'
```








## Checkboxes.border

Type: **`String`**  
Default: **`"{{ Checkboxes.border }}"`**

The `Checkboxes.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.border = '...'
```








## Checkboxes.outline

Type: **`String`**  
Default: **`"{{ Checkboxes.outline }}"`**

The `Checkboxes.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.outline = '...'
```












## Checkboxes.ring

Type: **`String`**  
Default: **`"{{ Checkboxes.ring }}"`**

The `Checkboxes.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.ring = '...'
```












## Checkboxes.rounding

Type: **`String`**  
Default: **`"{{ Checkboxes.rounding }}"`**

The `Checkboxes.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.rounding = '...'
```












## Checkboxes.shadow

Type: **`String`**  
Default: **`"{{ Checkboxes.shadow }}"`**

The `Checkboxes.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.shadow = '...'
```








## Checkboxes.sizes

Type: **`Object`**  

| Checkboxes.sizes Properties | Checkboxes.sizes Prop Values      |
|-----------------------------|-----------------------------------|
| `"xs"`                      | `"{{ Checkboxes.sizes['xs'] }}"`  |
| `"sm"`                      | `"{{ Checkboxes.sizes['sm'] }}"`  |
| `"md"`                      | `"{{ Checkboxes.sizes['md'] }}"`  |
| `"lg"`                      | `"{{ Checkboxes.sizes['lg'] }}"`  |
| `"xl"`                      | `"{{ Checkboxes.sizes['xl'] }}"`  |
| `"2xl"`                     | `"{{ Checkboxes.sizes['2xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.checkboxes.sizes = {
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
appVv.checkboxes.sizes['xs']  = ''
appVv.checkboxes.sizes['sm']  = ''
appVv.checkboxes.sizes['md']  = ''
appVv.checkboxes.sizes['lg']  = ''
appVv.checkboxes.sizes['xl']  = ''
appVv.checkboxes.sizes['2xl'] = ''
```








## Checkboxes.transition

Type: **`String`**  
Default: **`"{{ Checkboxes.transition }}"`**

The `Checkboxes.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.checkboxes.transition = '...'
```











## Checkboxes.base()

Returns: **`String`**  
Default: **`"{{ Checkboxes.base() }}"`**

The `Checkboxes.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <input type="checkbox" :class="appVv.checkboxes.base()"/>

</template>
```












## Checkboxes.classes()

Returns: **`String`**  
Default: **`"{{ Checkboxes.classes() }}"`**

The `Checkboxes.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Checkboxes.base()` method under the hood.

However, the `Checkboxes.classes()` method also returns `Checkboxes.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of a Checkboxes.sizes object |

The applicable values for the `sizesKey` argument are set via the [Checkboxes.sizes](/modules/configs/checkboxes#checkboxessizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Regular Sized Checkbox -->
    <input :class="appVv.checkboxes.classes()"/>

    <!-- Large Sized Checkbox -->
    <input :class="appVv.checkboxes.classes('lg')"/>

</template>
```








## Checkboxes.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Checkboxes.getSizeClasses() }}"`**

The `Checkboxes.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Checkboxes.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Checkboxes.sizes object |

The applicable values for the `sizesKey` argument are set via the [Checkboxes.sizes](/modules/configs/checkboxes#checkboxessizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <!-- Regular Sized Checkbox -->
    <input :class="appVv.checkboxes.getSizeClasses()"/>

    <!-- Large Sized Checkbox -->
    <input :class="appVv.checkboxes.getSizeClasses('lg')"/>

</template>
```













## Module Code

<<< @/../src/configs/Checkboxes.ts









<DocsPackageVersion/>
