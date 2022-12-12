---
title: Selects Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Selects from '../../../src/configs/Selects'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Input elements in your application, excluding color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.selects.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Selects } from '@obewds/vueventus'
```










## Selects.border

Type: **`String`**  
Default: **`"{{ Selects.border }}"`**

The `Selects.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.border = '...'
```










## Selects.display

Type: **`String`**  
Default: **`"{{ Selects.display }}"`**

The `Selects.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.display = '...'
```








## Selects.outline

Type: **`String`**  
Default: **`"{{ Selects.outline }}"`**

The `Selects.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.outline = '...'
```








## Selects.placeholder

Type: **`String`**  
Default: **`"{{ Selects.placeholder }}"`**

The `Selects.placeholder` parameter is meant to isolate the placeholder specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.placeholder = '...'
```












## Selects.ring

Type: **`String`**  
Default: **`"{{ Selects.ring }}"`**

The `Selects.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.ring = '...'
```












## Selects.rounding

Type: **`String`**  
Default: **`"{{ Selects.rounding }}"`**

The `Selects.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.rounding = '...'
```












## Selects.shadow

Type: **`String`**  
Default: **`"{{ Selects.shadow }}"`**

The `Selects.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.shadow = '...'
```








## Selects.sizes

Type: **`Object`**  

| Selects.sizes Properties | Selects.sizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `"{{ Selects.sizes['xs'] }}"`  |
| `"sm"`                  | `"{{ Selects.sizes['sm'] }}"`  |
| `"md"`                  | `"{{ Selects.sizes['md'] }}"`  |
| `"lg"`                  | `"{{ Selects.sizes['lg'] }}"`  |
| `"xl"`                  | `"{{ Selects.sizes['xl'] }}"`  |
| `"2xl"`                 | `"{{ Selects.sizes['2xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.selects.sizes = {
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
appVv.selects.sizes['xs']  = ''
appVv.selects.sizes['sm']  = ''
appVv.selects.sizes['md']  = ''
appVv.selects.sizes['lg']  = ''
appVv.selects.sizes['xl']  = ''
appVv.selects.sizes['2xl'] = ''
```














## Selects.text

Type: **`String`**  
Default: **`"{{ Selects.text }}"`**

The `Selects.text` parameter is meant to isolate the text orientated characteristics and requirements that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.text = '...'
```








## Selects.transition

Type: **`String`**  
Default: **`"{{ Selects.transition }}"`**

The `Selects.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.selects.transition = '...'
```











## Selects.base()

Returns: **`String`**  
Default: **`"{{ Selects.base() }}"`**

The `Selects.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <input :class="appVv.selects.base()"/>

</template>
```












## Selects.classes()

Returns: **`String`**  
Default: **`"{{ Selects.classes() }}"`**

The `Selects.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Selects.base()` method under the hood.

However, the `Selects.classes()` method also returns `Selects.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Selects.sizes object |

The applicable values for the `sizesKey` argument are set via the [Selects.sizes](/modules/configs/inputs#inputssizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <input placeholder="Regular Sized Input" :class="appVv.selects.classes()"/>

    <input placeholder="Large Sized Input" :class="appVv.selects.classes('lg')"/>

</template>
```








## Selects.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Selects.getSizeClasses() }}"`**

The `Selects.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Selects.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Selects.sizes object |

The applicable values for the `sizesKey` argument are set via the [Selects.sizes](/modules/configs/inputs#inputssizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <input placeholder="Regular Sized Input" :class="appVv.selects.getSizeClasses()"/>

    <input placeholder="Large Sized Input" :class="appVv.selects.getSizeClasses('lg')"/>

</template>
```













## Module Code

<<< @/../src/configs/Selects.ts










<DocsPackageVersion/>
