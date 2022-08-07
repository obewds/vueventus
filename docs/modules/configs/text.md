---
title: Text Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Text from '../../../src/configs/Text'
</script>







# {{ $frontmatter.title }}

{{ $frontmatter.title }} documentation coming soon!

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for elements/components containing rendered text string in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.text.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Text } from '@obewds/vueventus'
```










## Text.align

Type: **`String`**  
Default: **`"{{ Text.align }}"`**

The `Text.align` parameter is meant to isolate CSS text alignment characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.text.align = '...'
```







## Text.decoration

Type: **`String`**  
Default: **`"{{ Text.decoration }}"`**

The `Text.decoration` parameter is meant to isolate CSS text decoration characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.text.decoration = '...'
```







## Text.family

Type: **`String`**  
Default: **`"{{ Text.family }}"`**

The `Text.family` parameter is meant to isolate CSS text family characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.text.family = '...'
```







## Text.lineHeight

Type: **`String`**  
Default: **`"{{ Text.lineHeight }}"`**

The `Text.lineHeight` parameter is meant to isolate CSS text line height characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.text.lineHeight = '...'
```







## Text.sizes

Type: **`Object`**  

| Text.sizes Properties         | Text.sizes Prop Values       |
|-------------------------------|------------------------------|
| `"5xs"`                       | `"{{ Text.sizes['5xs'] }}"`  |
| `"4xs"`                       | `"{{ Text.sizes['4xs'] }}"`  |
| `"3xs"`                       | `"{{ Text.sizes['3xs'] }}"`  |
| `"2xs"`                       | `"{{ Text.sizes['2xs'] }}"`  |
| `"xs"`                        | `"{{ Text.sizes['xs'] }}"`   |
| `"sm"`                        | `"{{ Text.sizes['sm'] }}"`   |
| `"md"`                        | `"{{ Text.sizes['md'] }}"`   |
| `"lg"`                        | `"{{ Text.sizes['lg'] }}"`   |
| `"xl"`                        | `"{{ Text.sizes['xl'] }}"`   |
| `"2xl"`                       | `"{{ Text.sizes['2xl'] }}"`  |
| `"2xl"`                       | `"{{ Text.sizes['3xl'] }}"`  |
| `"4xl"`                       | `"{{ Text.sizes['4xl'] }}"`  |
| `"5xl"`                       | `"{{ Text.sizes['5xl'] }}"`  |
| `"6xl"`                       | `"{{ Text.sizes['6xl'] }}"`  |
| `"7xl"`                       | `"{{ Text.sizes['7xl'] }}"`  |
| `"8xl"`                       | `"{{ Text.sizes['8xl'] }}"`  |
| `"9xl"`                       | `"{{ Text.sizes['9xl'] }}"`  |
| `"10xl"`                      | `"{{ Text.sizes['10xl'] }}"` |
| `"11xl"`                      | `"{{ Text.sizes['11xl'] }}"` |
| `"12xl"`                      | `"{{ Text.sizes['12xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.text.sizes = {
     '5xs': '',
     '4xs': '',
     '3xs': '',
     '2xs': '',
      'xs': '',
      'sm': '',
      'md': '',
      'lg': '',
      'xl': '',
     '2xl': '',
     '3xl': '',
     '4xl': '',
     '5xl': '',
     '6xl': '',
     '7xl': '',
     '8xl': '',
     '9xl': '',
    '10xl': '',
    '11xl': '',
    '12xl': '',
}
```

```javascript
// ./src/app.vv.ts
appVv.text.sizes['5xs']  = ''
appVv.text.sizes['4xs']  = ''
appVv.text.sizes['3xs']  = ''
appVv.text.sizes['2xs']  = ''
appVv.text.sizes['xs']   = ''
appVv.text.sizes['sm']   = ''
appVv.text.sizes['md']   = ''
appVv.text.sizes['lg']   = ''
appVv.text.sizes['xl']   = ''
appVv.text.sizes['2xl']  = ''
appVv.text.sizes['3xl']  = ''
appVv.text.sizes['4xl']  = ''
appVv.text.sizes['5xl']  = ''
appVv.text.sizes['6xl']  = ''
appVv.text.sizes['7xl']  = ''
appVv.text.sizes['8xl']  = ''
appVv.text.sizes['9xl']  = ''
appVv.text.sizes['10xl'] = ''
appVv.text.sizes['11xl'] = ''
appVv.text.sizes['12xl'] = ''
```











## Text.smoothing

Type: **`String`**  
Default: **`"{{ Text.smoothing }}"`**

The `Text.smoothing` parameter is meant to isolate CSS text smoothing/aliasing characteristics and requirements for an application's text.

### Example

```javascript
// ./src/app.vv.ts
appVv.text.smoothing = '...'
```







## Text.spacing

Type: **`String`**  
Default: **`"{{ Text.spacing }}"`**

The `Text.spacing` parameter is meant to isolate CSS text spacing characteristics and requirements for an application's text.

### Example

```javascript
// ./src/app.vv.ts
appVv.text.spacing = '...'
```







## Text.weight

Type: **`String`**  
Default: **`"{{ Text.weight }}"`**

The `Text.weight` parameter is meant to isolate CSS text weight characteristics and requirements for an application's text.

### Example

```javascript
// ./src/app.vv.ts
appVv.text.weight = '...'
```







## Text.wordBreak

Type: **`String`**  
Default: **`"{{ Text.wordBreak }}"`**

The `Text.wordBreak` parameter is meant to isolate CSS text flow word line break characteristics and requirements for an application's text.

### Example

```javascript
// ./src/app.vv.ts
appVv.text.wordBreak = '...'
```







## Text.base()

Returns: **`String`**  
Default: **`"{{ Text.base() }}"`**

The `Text.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <div :class="appVv.text.base()">
        Base styled text
    </div>

</template>
```







## Text.classes()

Returns: **`String`**  
Default: **`"{{ Text.classes() }}"`**

The `Text.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Text.base()` method under the hood.

However, the `Text.classes()` method also returns `Text.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Text.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text.sizes](/modules/configs/text#text-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <div :class="appVv.text.classes()">
        Regular sized text
    </div>

    <div :class="appVv.text.classes('lg')">
        Large sized text
    </div>

</template>
```







## Text.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Text.getSizeClasses() }}"`**

The `Text.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Text.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Text.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text.sizes](/modules/configs/text#text-sizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <div :class="appVv.text.getSizeClasses()">
        Regular sized text
    </div>

    <div :class="appVv.text.getSizeClasses('sm')">
        Small sized text
    </div>

</template>
```









## Module Code

<<< @/../src/configs/Text.ts






<DocsPackageVersion/>
