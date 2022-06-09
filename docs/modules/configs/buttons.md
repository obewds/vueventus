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






## Buttons.blockDisplay

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.blockDisplay = ''
```






## Buttons.blockSizes

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

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
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.border = ''
```






## Buttons.cursor

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.cursor = ''
```






## Buttons.disabled

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.disabled = ''
```






## Buttons.display

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.display = ''
```






## Buttons.focus

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.focus = ''
```






## Buttons.sizes

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

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
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

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



