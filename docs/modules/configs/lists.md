---
title: Lists Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Lists from '../../../src/configs/Lists'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for VueVentus list components.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.lists.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Lists } from '@obewds/vueventus'
```










## Lists.align

Type: **`String`**  
Default: **`"{{ Lists.align }}"`**

The `Lists.align` parameter is meant to isolate CSS text alignment characteristics and requirements for an application's list elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.align = '...'
```







## Lists.decoration

Type: **`String`**  
Default: **`"{{ Lists.decoration }}"`**

The `Lists.decoration` parameter is meant to isolate CSS text decoration characteristics and requirements for an application's list elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.decoration = '...'
```







## Lists.family

Type: **`String`**  
Default: **`"{{ Lists.family }}"`**

The `Lists.family` parameter is meant to isolate CSS text family characteristics and requirements for an application's list elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.family = '...'
```







## Lists.lineHeight

Type: **`String`**  
Default: **`"{{ Lists.lineHeight }}"`**

The `Lists.lineHeight` parameter is meant to isolate CSS text line height characteristics and requirements for an application's list elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.lineHeight = '...'
```







## Lists.padding

Type: **`String`**  
Default: **`"{{ Lists.padding }}"`**

The `Lists.padding` parameter is meant to isolate CSS list element padding characteristics and requirements for an application's list elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.padding = '...'
```







## Lists.sizes

Type: **`Object`**  

| Text.sizes Properties         | Text.sizes Prop Values       |
|-------------------------------|------------------------------|
| `"5xs"`                       | `"{{ Lists.sizes['5xs'] }}"`  |
| `"4xs"`                       | `"{{ Lists.sizes['4xs'] }}"`  |
| `"3xs"`                       | `"{{ Lists.sizes['3xs'] }}"`  |
| `"2xs"`                       | `"{{ Lists.sizes['2xs'] }}"`  |
| `"xs"`                        | `"{{ Lists.sizes['xs'] }}"`   |
| `"sm"`                        | `"{{ Lists.sizes['sm'] }}"`   |
| `"md"`                        | `"{{ Lists.sizes['md'] }}"`   |
| `"lg"`                        | `"{{ Lists.sizes['lg'] }}"`   |
| `"xl"`                        | `"{{ Lists.sizes['xl'] }}"`   |
| `"2xl"`                       | `"{{ Lists.sizes['2xl'] }}"`  |
| `"2xl"`                       | `"{{ Lists.sizes['3xl'] }}"`  |
| `"4xl"`                       | `"{{ Lists.sizes['4xl'] }}"`  |
| `"5xl"`                       | `"{{ Lists.sizes['5xl'] }}"`  |
| `"6xl"`                       | `"{{ Lists.sizes['6xl'] }}"`  |
| `"7xl"`                       | `"{{ Lists.sizes['7xl'] }}"`  |
| `"8xl"`                       | `"{{ Lists.sizes['8xl'] }}"`  |
| `"9xl"`                       | `"{{ Lists.sizes['9xl'] }}"`  |
| `"10xl"`                      | `"{{ Lists.sizes['10xl'] }}"` |
| `"11xl"`                      | `"{{ Lists.sizes['11xl'] }}"` |
| `"12xl"`                      | `"{{ Lists.sizes['12xl'] }}"` |

### Examples

```javascript
// ./src/app.vv.ts
appVv.lists.sizes = {
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
appVv.lists.sizes['5xs']  = ''
appVv.lists.sizes['4xs']  = ''
appVv.lists.sizes['3xs']  = ''
appVv.lists.sizes['2xs']  = ''
appVv.lists.sizes['xs']   = ''
appVv.lists.sizes['sm']   = ''
appVv.lists.sizes['md']   = ''
appVv.lists.sizes['lg']   = ''
appVv.lists.sizes['xl']   = ''
appVv.lists.sizes['2xl']  = ''
appVv.lists.sizes['3xl']  = ''
appVv.lists.sizes['4xl']  = ''
appVv.lists.sizes['5xl']  = ''
appVv.lists.sizes['6xl']  = ''
appVv.lists.sizes['7xl']  = ''
appVv.lists.sizes['8xl']  = ''
appVv.lists.sizes['9xl']  = ''
appVv.lists.sizes['10xl'] = ''
appVv.lists.sizes['11xl'] = ''
appVv.lists.sizes['12xl'] = ''
```







## Lists.spacing

Type: **`String`**  
Default: **`"{{ Lists.spacing }}"`**

The `Lists.spacing` parameter is meant to isolate CSS text spacing characteristics and requirements for an application's list elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.spacing = '...'
```







## Lists.weight

Type: **`String`**  
Default: **`"{{ Lists.weight }}"`**

The `Lists.weight` parameter is meant to isolate CSS text weight characteristics and requirements for an application's list elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.weight = '...'
```







## Lists.wordBreak

Type: **`String`**  
Default: **`"{{ Lists.wordBreak }}"`**

The `Lists.wordBreak` parameter is meant to isolate CSS text flow word line break characteristics and requirements for an application's list elements.

### Example

```javascript
// ./src/app.vv.ts
appVv.lists.wordBreak = '...'
```







## Lists.base()

Returns: **`String`**  
Default: **`"{{ Lists.base() }}"`**

The `Lists.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <ul :class="appVv.text.base()">
        <li>Base styled text</li>
    </ul>

</template>
```







## Lists.classes()

Returns: **`String`**  
Default: **`"{{ Lists.classes() }}"`**

The `Lists.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Lists.base()` method under the hood.

However, the `Lists.classes()` method also returns `Lists.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of a Lists.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text.sizes](/modules/configs/text#textsizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <ul :class="appVv.text.classes()">
        <li>Regular sized text</li>
    </ul>

    <ul :class="appVv.text.classes('lg')">
        <li>Large sized text</li>
    </ul>

</template>
```







## Lists.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Lists.getSizeClasses() }}"`**

The `Lists.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Lists.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Lists.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text.sizes](/modules/configs/text#textsizes) property names/keys and atomic class values.

### Examples

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <ul :class="appVv.text.getSizeClasses()">
        <li>Regular sized text</li>
    </ul>

    <ul :class="appVv.text.getSizeClasses('sm')">
        <li>Small sized text</li>
    </ul>

</template>
```









## Module Code

<<< @/../src/configs/Lists.ts






<DocsPackageVersion/>
