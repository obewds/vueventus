---
title: Text Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

{{ $frontmatter.title }} documentation coming soon!

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for elements/coponents containing rendered text string in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Text } from '@obewds/vueventus'
```

<!-- #TODO: update doc by removing example below and replacing all examples referencing this variable on this docs page -->

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appText = Text
```






## Text.cursor

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.align = ''
```






## Text.decoration

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.decoration = ''
```






## Text.family

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.family = ''
```






## Text.lineHeight

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.lineHeight = ''
```






## Text.sizes

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

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

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.smoothing = ''
```






## Text.spacing

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.spacing = ''
```






## Text.weight

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.weight = ''
```






## Text.wordBreak

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appText.wordBreak = ''
```






## Text.base()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const textBase = Text.base()
```






## Text.classes()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const textClasses = Text.classes() // default is 'md'
```

```javascript
const textClasses = Text.classes('lg')
```






## Text.getSizeClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const textSizeClasses = Text.getSizeClasses() // default is 'md'
```

```javascript
const textSizeClasses = Text.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Text.js






<DocsPackageVersion/>
