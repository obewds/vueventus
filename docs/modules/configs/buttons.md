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

The `Buttons.blockDisplay` parameter is meant to isolate the CSS block level display characteristics and requirements for an application's block level styled button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Buttons.blockDisplay = ''
```








## Buttons.blockSizes

Type: **`Object`**  

| Buttons.blockSizes Properties | Buttons.blockSizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.blockSizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.blockSizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.blockSizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.blockSizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.blockSizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.blockSizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.blockSizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.blockSizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.blockSizes['2xl'] }}"` |
| `"2xl"`                       | `"{{ Buttons.blockSizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.blockSizes['4xl'] }}"` |

### Examples

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

```javascript
Buttons.blockSizes['4xs'] = ''
Buttons.blockSizes['3xs'] = ''
Buttons.blockSizes['2xs'] = ''
Buttons.blockSizes['xs'] = ''
Buttons.blockSizes['sm'] = ''
Buttons.blockSizes['md'] = ''
Buttons.blockSizes['lg'] = ''
Buttons.blockSizes['xl'] = ''
Buttons.blockSizes['2xl'] = ''
Buttons.blockSizes['3xl'] = ''
Buttons.blockSizes['4xl'] = ''
```






## Buttons.border

Type: **`String`**  
Default: **`"{{ Buttons.border }}"`**

The `Buttons.border` parameter is meant to isolate the border related characteristics and requirements for an application's block level styled button elements, but not including any border color characteristic, which is considered a global element color palette characteristic in VueVentus.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Buttons.border = ''
```






## Buttons.cursor

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Type: **`String`**  
Default: **`"{{ Buttons.cursor }}"`**

```javascript
Buttons.cursor = ''
```






## Buttons.disabled

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Type: **`String`**  
Default: **`"{{ Buttons.disabled }}"`**

```javascript
Buttons.disabled = ''
```






## Buttons.display

Type: **`String`**  
Default: **`"{{ Buttons.display }}"`**

The `Buttons.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's button elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Buttons.display = ''
```






## Buttons.fabDisplay

Type: **`String`**  
Default: **`"{{ Buttons.fabDisplay }}"`**

The `Buttons.fabDisplay` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's button elements when styled like a fab button.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Buttons.fabDisplay = ''
```








## Buttons.fabSizes

Type: **`Object`**  

| Buttons.fabSizes Properties | Buttons.fabSizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.fabSizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.fabSizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.fabSizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.fabSizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.fabSizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.fabSizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.fabSizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.fabSizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.fabSizes['2xl'] }}"` |
| `"2xl"`                       | `"{{ Buttons.fabSizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.fabSizes['4xl'] }}"` |

### Examples

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

```javascript
Buttons.fabSizes['4xs'] = ''
Buttons.fabSizes['3xs'] = ''
Buttons.fabSizes['2xs'] = ''
Buttons.fabSizes['xs'] = ''
Buttons.fabSizes['sm'] = ''
Buttons.fabSizes['md'] = ''
Buttons.fabSizes['lg'] = ''
Buttons.fabSizes['xl'] = ''
Buttons.fabSizes['2xl'] = ''
Buttons.fabSizes['3xl'] = ''
Buttons.fabSizes['4xl'] = ''
```









## Buttons.focus

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Type: **`String`**  
Default: **`"{{ Buttons.focus }}"`**

```javascript
Buttons.focus = ''
```






## Buttons.sizes

Type: **`Object`**  

| Buttons.sizes Properties      | Buttons.sizes Prop Values      |
|-------------------------------|-------------------------------------|
| `"4xs"`                       | `"{{ Buttons.sizes['4xs'] }}"` |
| `"3xs"`                       | `"{{ Buttons.sizes['3xs'] }}"` |
| `"2xs"`                       | `"{{ Buttons.sizes['2xs'] }}"` |
| `"xs"`                        | `"{{ Buttons.sizes['xs'] }}"`  |
| `"sm"`                        | `"{{ Buttons.sizes['sm'] }}"`  |
| `"md"`                        | `"{{ Buttons.sizes['md'] }}"`  |
| `"lg"`                        | `"{{ Buttons.sizes['lg'] }}"`  |
| `"xl"`                        | `"{{ Buttons.sizes['xl'] }}"`  |
| `"2xl"`                       | `"{{ Buttons.sizes['2xl'] }}"` |
| `"2xl"`                       | `"{{ Buttons.sizes['3xl'] }}"` |
| `"4xl"`                       | `"{{ Buttons.sizes['4xl'] }}"` |

### Examples

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

```javascript
Buttons.sizes['4xs'] = ''
Buttons.sizes['3xs'] = ''
Buttons.sizes['2xs'] = ''
Buttons.sizes['xs'] = ''
Buttons.sizes['sm'] = ''
Buttons.sizes['md'] = ''
Buttons.sizes['lg'] = ''
Buttons.sizes['xl'] = ''
Buttons.sizes['2xl'] = ''
Buttons.sizes['3xl'] = ''
Buttons.sizes['4xl'] = ''
```








## Buttons.text

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Type: **`String`**  
Default: **`"{{ Buttons.text }}"`**

```javascript
Buttons.text = ''
```






## Buttons.base()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Returns: **`String`**  
Default: **`"{{ Buttons.base() }}"`**

```javascript
const buttonsBase = Buttons.base()
```






## Buttons.blockBase()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Returns: **`String`**  
Default: **`"{{ Buttons.blockBase() }}"`**

```javascript
const buttonsBlockBase = Buttons.blockBase()
```






## Buttons.blockClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const mdButtonBlockClasses = Buttons.blockClasses() // default is 'md'
```

```javascript
const lgButtonBlockClasses = Buttons.blockClasses('lg')
```






## Buttons.classes()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const buttonsClasses = Buttons.classes() // default is 'md'
```

```javascript
const buttonsClasses = Buttons.classes('lg')
```






## Buttons.fabBase()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

Returns: **`String`**  
Default: **`"{{ Buttons.fabBase() }}"`**

```javascript
const buttonsFabBase = Buttons.fabBase()
```






## Buttons.fabClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const mdButtonFabClasses = Buttons.fabClasses() // default is 'md'
```

```javascript
const lgButtonFabClasses = Buttons.fabClasses('lg')
```






## Buttons.getBlockSizeClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const mdBlockButtons = Buttons.getBlockSizeClasses() // default is 'md'
```

```javascript
const smBlockButtons = Buttons.getBlockSizeClasses('sm')
```






## Buttons.getFabSizeClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const mdFabButtons = Buttons.getFabSizeClasses() // default is 'md'
```

```javascript
const smFabButtons = Buttons.getFabSizeClasses('sm')
```






## Buttons.getSizeClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const mdButtons = Buttons.getSizeClasses() // default is 'md'
```

```javascript
const smButtons = Buttons.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Buttons.js






<DocsPackageVersion/>



