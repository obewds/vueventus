---
title: Listboxes Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Listboxes from '../../../src/configs/Listboxes'
</script>








# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Listbox components in your application, excluding color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.listboxes.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Listboxes } from '@obewds/vueventus'
```










## Listboxes.border

Type: **`String`**  
Default: **`"{{ Listboxes.border }}"`**

The `Listboxes.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.border = '...'
```










## Listboxes.display

Type: **`String`**  
Default: **`"{{ Listboxes.display }}"`**

The `Listboxes.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's listbox elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.display = '...'
```








## Listboxes.outline

Type: **`String`**  
Default: **`"{{ Listboxes.outline }}"`**

The `Listboxes.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.outline = '...'
```












## Listboxes.ring

Type: **`String`**  
Default: **`"{{ Listboxes.ring }}"`**

The `Listboxes.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's listbox elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.ring = '...'
```












## Listboxes.rounding

Type: **`String`**  
Default: **`"{{ Listboxes.rounding }}"`**

The `Listboxes.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's listbox elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.rounding = '...'
```












## Listboxes.shadow

Type: **`String`**  
Default: **`"{{ Listboxes.shadow }}"`**

The `Listboxes.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's listbox elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.shadow = '...'
```








## Listboxes.sizes

Type: **`Object`**  

| Listboxes.sizes Properties | Listboxes.sizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `"{{ Listboxes.sizes['xs'] }}"`  |
| `"sm"`                  | `"{{ Listboxes.sizes['sm'] }}"`  |
| `"md"`                  | `"{{ Listboxes.sizes['md'] }}"`  |
| `"lg"`                  | `"{{ Listboxes.sizes['lg'] }}"`  |
| `"xl"`                  | `"{{ Listboxes.sizes['xl'] }}"`  |
| `"2xl"`                 | `"{{ Listboxes.sizes['2xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.listboxes.sizes = {
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
appVv.listboxes.sizes['xs']  = ''
appVv.listboxes.sizes['sm']  = ''
appVv.listboxes.sizes['md']  = ''
appVv.listboxes.sizes['lg']  = ''
appVv.listboxes.sizes['xl']  = ''
appVv.listboxes.sizes['2xl'] = ''
```














## Listboxes.text

Type: **`String`**  
Default: **`"{{ Listboxes.text }}"`**

The `Listboxes.text` parameter is meant to isolate the text orientated characteristics and requirements that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.text = '...'
```








## Listboxes.transition

Type: **`String`**  
Default: **`"{{ Listboxes.transition }}"`**

The `Listboxes.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's listbox elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.listboxes.transition = '...'
```











## Listboxes.base()

Returns: **`String`**  
Default: **`"{{ Listboxes.base() }}"`**

The `Listboxes.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.listboxes.base()">
        Faux Listbox
    </button>

</template>
```












## Listboxes.classes()

Returns: **`String`**  
Default: **`"{{ Listboxes.classes() }}"`**

The `Listboxes.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Listboxes.base()` method under the hood.

However, the `Listboxes.classes()` method also returns `Listboxes.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Listboxes.sizes object |

The applicable values for the `sizesKey` argument are set via the [Listboxes.sizes](#listboxes-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.listboxes.classes()">
        Faux Listbox
    </button>

    <button :class="appVv.listboxes.classes('lg')">
        Large Faux Listbox
    </button>

</template>
```








## Listboxes.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Listboxes.getSizeClasses() }}"`**

The `Listboxes.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Listboxes.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Listboxes.sizes object |

The applicable values for the `sizesKey` argument are set via the [Listboxes.sizes](#listboxes-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.listboxes.getSizeClasses()">
        Faux Listbox
    </button>

    <button :class="appVv.listboxes.getSizeClasses('lg')">
        Large Faux Listbox
    </button>

</template>
```













## Module Code

<<< @/../src/configs/Listboxes.ts










<DocsPackageVersion/>