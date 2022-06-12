---
title: Buttons Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Buttons from '../../../src/configs/Buttons.js'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Button elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Buttons } from '@obewds/vueventus'
```






## Buttons.blockDisplay

Type: **`String`**  
Default: **`"{{ Buttons.blockDisplay }}"`**

```javascript
Buttons.blockDisplay = ''
```






## Buttons.blockSizes

```javascript
Buttons.blockSizes = {
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

Type: **`String`**  
Default: **`"{{ Buttons.border }}"`**

```javascript
Buttons.border = ''
```






## Buttons.cursor

Type: **`String`**  
Default: **`"{{ Buttons.cursor }}"`**

```javascript
Buttons.cursor = ''
```






## Buttons.disabled

Type: **`String`**  
Default: **`"{{ Buttons.disabled }}"`**

```javascript
Buttons.disabled = ''
```






## Buttons.display

Type: **`String`**  
Default: **`"{{ Buttons.display }}"`**

```javascript
Buttons.display = ''
```






## Buttons.fabDisplay

Type: **`String`**  
Default: **`"{{ Buttons.fabDisplay }}"`**

```javascript
Buttons.fabDisplay = ''
```






## Buttons.fabSizes

```javascript
Buttons.fabSizes = {
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





## Buttons.focus

Type: **`String`**  
Default: **`"{{ Buttons.focus }}"`**

```javascript
Buttons.focus = ''
```






## Buttons.sizes

```javascript
Buttons.sizes = {
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

Type: **`String`**  
Default: **`"{{ Buttons.text }}"`**

```javascript
Buttons.text = ''
```






## Buttons.base()

Returns: **`String`**  
Default: **`"{{ Buttons.base() }}"`**

```javascript
const buttonsBase = Buttons.base()
```






## Buttons.blockBase()

Returns: **`String`**  
Default: **`"{{ Buttons.blockBase() }}"`**

```javascript
const buttonsBlockBase = Buttons.blockBase()
```






## Buttons.blockClasses()

```javascript
const mdButtonBlockClasses = Buttons.blockClasses() // default is 'md'
```

```javascript
const lgButtonBlockClasses = Buttons.blockClasses('lg')
```






## Buttons.classes()

```javascript
const buttonsClasses = Buttons.classes() // default is 'md'
```

```javascript
const buttonsClasses = Buttons.classes('lg')
```






## Buttons.fabBase()

Returns: **`String`**  
Default: **`"{{ Buttons.fabBase() }}"`**

```javascript
const buttonsFabBase = Buttons.fabBase()
```






## Buttons.fabClasses()

```javascript
const mdButtonFabClasses = Buttons.fabClasses() // default is 'md'
```

```javascript
const lgButtonFabClasses = Buttons.fabClasses('lg')
```






## Buttons.getBlockSizeClasses()

```javascript
const mdBlockButtons = Buttons.getBlockSizeClasses() // default is 'md'
```

```javascript
const smBlockButtons = Buttons.getBlockSizeClasses('sm')
```






## Buttons.getFabSizeClasses()

```javascript
const mdFabButtons = Buttons.getFabSizeClasses() // default is 'md'
```

```javascript
const smFabButtons = Buttons.getFabSizeClasses('sm')
```






## Buttons.getSizeClasses()

```javascript
const mdButtons = Buttons.getSizeClasses() // default is 'md'
```

```javascript
const smButtons = Buttons.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Buttons.js






<DocsPackageVersion/>



