---
title: Text Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

{{ $frontmatter.title }} documentation coming soon!

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for elements/coponents containing rendered text string in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Text } from '@obewds/vueventus'
```

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appText = Text
```






## Text.cursor

```javascript
appText.align = ''
```






## Text.decoration

```javascript
appText.decoration = ''
```






## Text.family

```javascript
appText.family = ''
```






## Text.lineHeight

```javascript
appText.lineHeight = ''
```






## Text.sizes

```javascript
appText.sizes = {
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






## Text.smoothing

```javascript
appText.smoothing = ''
```






## Text.spacing

```javascript
appText.spacing = ''
```






## Text.weight

```javascript
appText.weight = ''
```






## Text.wordBreak

```javascript
appText.wordBreak = ''
```






## Text.base()

```javascript
const textBase = Text.base()
```






## Text.classes()

```javascript
const textClasses = Text.classes() // default is 'md'
```

```javascript
const textClasses = Text.classes('lg')
```






## Text.getSizeClasses()

```javascript
const textSizeClasses = Text.getSizeClasses() // default is 'md'
```

```javascript
const textSizeClasses = Text.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Text.js






<DocsPackageVersion/>
