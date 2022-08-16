---
title: Textareas Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Textareas from '../../../src/configs/Textareas'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Textarea elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.textareas.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Textareas } from '@obewds/vueventus'
```








## Textareas.border

Type: **`String`**  
Default: **`"{{ Textareas.border }}"`**

The `Textareas.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.border = '...'
```










## Textareas.display

Type: **`String`**  
Default: **`"{{ Textareas.display }}"`**

The `Textareas.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.display = '...'
```








## Textareas.outline

Type: **`String`**  
Default: **`"{{ Textareas.outline }}"`**

The `Textareas.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.outline = '...'
```








## Textareas.placeholder

Type: **`String`**  
Default: **`"{{ Textareas.placeholder }}"`**

The `Textareas.placeholder` parameter is meant to isolate the placeholder specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.placeholder = '...'
```












## Textareas.ring

Type: **`String`**  
Default: **`"{{ Textareas.ring }}"`**

The `Textareas.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.ring = '...'
```












## Textareas.rounding

Type: **`String`**  
Default: **`"{{ Textareas.rounding }}"`**

The `Textareas.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.rounding = '...'
```








## Textareas.rowSizes

Type: **`Object`**  

| Textareas.rowSizes Properties | Textareas.rowSizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `{{ Textareas.rowSizes['xs'] }}`  |
| `"sm"`                  | `{{ Textareas.rowSizes['sm'] }}`  |
| `"md"`                  | `{{ Textareas.rowSizes['md'] }}`  |
| `"lg"`                  | `{{ Textareas.rowSizes['lg'] }}`  |
| `"xl"`                  | `{{ Textareas.rowSizes['xl'] }}`  |
| `"2xl"`                 | `{{ Textareas.rowSizes['2xl'] }}` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.textareas.rowSizes = {
     'xs': 1,
     'sm': 2,
     'md': 3,
     'lg': 4,
     'xl': 6,
    '2xl': 8,
}
```

```javascript
// ./src/app.vv.ts
appVv.textareas.rowSizes['xs']  = 1
appVv.textareas.rowSizes['sm']  = 2
appVv.textareas.rowSizes['md']  = 3
appVv.textareas.rowSizes['lg']  = 4
appVv.textareas.rowSizes['xl']  = 6
appVv.textareas.rowSizes['2xl'] = 8
```











## Textareas.shadow

Type: **`String`**  
Default: **`"{{ Textareas.shadow }}"`**

The `Textareas.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.shadow = '...'
```








## Textareas.sizes

Type: **`Object`**  

| Textareas.sizes Properties | Textareas.sizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `"{{ Textareas.sizes['xs'] }}"`  |
| `"sm"`                  | `"{{ Textareas.sizes['sm'] }}"`  |
| `"md"`                  | `"{{ Textareas.sizes['md'] }}"`  |
| `"lg"`                  | `"{{ Textareas.sizes['lg'] }}"`  |
| `"xl"`                  | `"{{ Textareas.sizes['xl'] }}"`  |
| `"2xl"`                 | `"{{ Textareas.sizes['2xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.textareas.sizes = {
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
appVv.textareas.sizes['xs']  = ''
appVv.textareas.sizes['sm']  = ''
appVv.textareas.sizes['md']  = ''
appVv.textareas.sizes['lg']  = ''
appVv.textareas.sizes['xl']  = ''
appVv.textareas.sizes['2xl'] = ''
```














## Textareas.text

Type: **`String`**  
Default: **`"{{ Textareas.text }}"`**

The `Textareas.text` parameter is meant to isolate the text orientated characteristics and requirements that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.text = '...'
```








## Textareas.transition

Type: **`String`**  
Default: **`"{{ Textareas.transition }}"`**

The `Textareas.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.textareas.transition = '...'
```











## Textareas.base()

Returns: **`String`**  
Default: **`"{{ Textareas.base() }}"`**

The `Textareas.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <textarea :class="appVv.textareas.base()"/>

</template>
```








## Textareas.classes()

Returns: **`String`**  
Default: **`"{{ Textareas.classes() }}"`**

The `Textareas.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Textareas.base()` method under the hood.

However, the `Textareas.classes()` method also returns `Textareas.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Textareas.sizes object |

The applicable values for the `sizesKey` argument are set via the [Textareas.sizes](/modules/configs/inputs#inputssizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <textarea placeholder="Regular size" :class="appVv.textareas.classes()"/>

    <textarea placeholder="Large size" :class="appVv.textareas.classes('lg')"/>

</template>
```








## Textareas.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Textareas.getSizeClasses() }}"`**

The `Textareas.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Textareas.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Textareas.sizes object |

The applicable values for the `sizesKey` argument are set via the [Textareas.sizes](/modules/configs/inputs#inputssizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <textarea placeholder="Regular size" :class="appVv.textareas.getSizeClasses()"/>

    <textarea placeholder="Small size" :class="appVv.textareas.getSizeClasses('sm')"/>

</template>
```








## Textareas.getRowSize()

Returns: **`String`**  
Default: **`"{{ Textareas.getRowSize() }}"`**

The `Textareas.getRowSize()` method returns rows HTML attribute number based on the optional argument value passed into the method. The number itself comes from the `Textareas.rowSizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Textareas.rowSizes object |

The applicable values for the `sizesKey` argument are set via the [Textareas.rowSizes](/modules/configs/textareas#textareas-rowsizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <textarea placeholder="Regular Row Size" :class="appVv.textareas.getRowSize()"/>

    <textarea placeholder="Small Row Size" :class="appVv.textareas.getRowSize('sm')"/>

</template>
```













## Module Code

<<< @/../src/configs/Textareas.ts










<DocsPackageVersion/>
