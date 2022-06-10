---
title: Buttons Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for Button elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Buttons } from '@obewds/vueventus'
```

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appButtons = Buttons
```






## Buttons.blockDisplay

```javascript
appButtons.blockDisplay = ''
```






## Buttons.blockSizes

```javascript
appButtons.blockSizes = {
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
}
```






## Buttons.border

```javascript
appButtons.border = ''
```






## Buttons.cursor

```javascript
appButtons.cursor = ''
```






## Buttons.disabled

```javascript
appButtons.disabled = ''
```






## Buttons.display

```javascript
appButtons.display = ''
```






## Buttons.focus

```javascript
appButtons.focus = ''
```






## Buttons.sizes

```javascript
appButtons.sizes = {
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
}
```






## Buttons.text

```javascript
appButtons.text = ''
```






## Buttons.base()

```javascript
const buttonBase = Buttons.base()
```






## Buttons.blockBase()

```javascript
const buttonBlockBase = Buttons.blockBase()
```






## Buttons.classes()

```javascript
const buttonClasses = Buttons.classes() // default is 'md'
```

```javascript
const buttonClasses = Buttons.classes('lg')
```






## Buttons.getBlockSizeClasses()

```javascript
const button = Buttons.getBlockSizeClasses() // default is 'md'
```

```javascript
const button = Buttons.getBlockSizeClasses('sm')
```






## Buttons.getSizeClasses()

```javascript
const button = Buttons.getSizeClasses() // default is 'md'
```

```javascript
const button = Buttons.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Buttons.js






<DocsPackageVersion/>



