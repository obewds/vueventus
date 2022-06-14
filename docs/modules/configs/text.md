---
title: Text Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Text from '../../../src/configs/Text.js'
</script>







# {{ $frontmatter.title }}

{{ $frontmatter.title }} documentation coming soon!

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for elements/components containing rendered text string in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

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
Text.align = ''
```






## Text.decoration

Type: **`String`**  
Default: **`"{{ Text.decoration }}"`**

The `Text.decoration` parameter is meant to isolate CSS text decoration characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Text.decoration = ''
```






## Text.family

Type: **`String`**  
Default: **`"{{ Text.family }}"`**

The `Text.family` parameter is meant to isolate CSS text family characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Text.family = ''
```






## Text.lineHeight

Type: **`String`**  
Default: **`"{{ Text.lineHeight }}"`**

The `Text.lineHeight` parameter is meant to isolate CSS text line height characteristics and requirements for an application's text.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Text.lineHeight = ''
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
Text.sizes = {
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
Text.sizes['5xs'] = ''
Text.sizes['4xs'] = ''
Text.sizes['3xs'] = ''
Text.sizes['2xs'] = ''
Text.sizes['xs'] = ''
Text.sizes['sm'] = ''
Text.sizes['md'] = ''
Text.sizes['lg'] = ''
Text.sizes['xl'] = ''
Text.sizes['2xl'] = ''
Text.sizes['3xl'] = ''
Text.sizes['4xl'] = ''
Text.sizes['5xl'] = ''
Text.sizes['6xl'] = ''
Text.sizes['7xl'] = ''
Text.sizes['8xl'] = ''
Text.sizes['9xl'] = ''
Text.sizes['10xl'] = ''
Text.sizes['11xl'] = ''
Text.sizes['12xl'] = ''
```










## Text.smoothing

Type: **`String`**  
Default: **`"{{ Text.smoothing }}"`**

The `Text.smoothing` parameter is meant to isolate CSS text smoothing/aliasing characteristics and requirements for an application's text.

### Example

```javascript
Text.smoothing = ''
```






## Text.spacing

Type: **`String`**  
Default: **`"{{ Text.spacing }}"`**

The `Text.spacing` parameter is meant to isolate CSS text spacing characteristics and requirements for an application's text.

### Example

```javascript
Text.spacing = ''
```






## Text.weight

Type: **`String`**  
Default: **`"{{ Text.weight }}"`**

The `Text.weight` parameter is meant to isolate CSS text weight characteristics and requirements for an application's text.

### Example

```javascript
Text.weight = ''
```






## Text.wordBreak

Type: **`String`**  
Default: **`"{{ Text.wordBreak }}"`**

The `Text.wordBreak` parameter is meant to isolate CSS text flow word line break characteristics and requirements for an application's text.

### Example

```javascript
Text.wordBreak = ''
```






## Text.base()

Returns: **`String`**  
Default: **`"{{ Text.base() }}"`**

The `Text.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```javascript
const textBase = Text.base()
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


```javascript
const textClasses = Text.classes() // default is 'md'
```

```javascript
const textClasses = Text.classes('lg')
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

```javascript
const textSizeClasses = Text.getSizeClasses() // default is 'md'
```

```javascript
const textSizeClasses = Text.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Text.js






<DocsPackageVersion/>
