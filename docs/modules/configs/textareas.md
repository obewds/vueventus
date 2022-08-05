---
title: Textareas Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Textareas from '../../../src/configs/Textareas'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Textarea elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






<!-- TODO: change all Textareas.xxx examples to appVv.textareas.xxx syntax like in new ColorModes config docs page -->
<!-- TODO: change this import block to match new approach in ColorModes Config docs page -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { Textareas } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import Textareas from '@obewds/vueventus/dist/configs/Textareas.js'
```







## Textareas.border

Type: **`String`**  
Default: **`"{{ Textareas.border }}"`**

The `Textareas.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.border = ''
```









## Textareas.display

Type: **`String`**  
Default: **`"{{ Textareas.display }}"`**

The `Textareas.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.display = ''
```







## Textareas.outline

Type: **`String`**  
Default: **`"{{ Textareas.outline }}"`**

The `Textareas.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.outline = ''
```







## Textareas.placeholder

Type: **`String`**  
Default: **`"{{ Textareas.placeholder }}"`**

The `Textareas.placeholder` parameter is meant to isolate the placeholder specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.placeholder = ''
```











## Textareas.ring

Type: **`String`**  
Default: **`"{{ Textareas.ring }}"`**

The `Textareas.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.ring = ''
```











## Textareas.rounding

Type: **`String`**  
Default: **`"{{ Textareas.rounding }}"`**

The `Textareas.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.rounding = ''
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
Textareas.sizes = {
    'xs': 1,
    'sm': 2,
    'md': 3,
    'lg': 4,
    'xl': 6,
    '2xl': 8,
}
```

```javascript
Textareas.sizes['xs'] = 1
Textareas.sizes['sm'] = 2
Textareas.sizes['md'] = 3
Textareas.sizes['lg'] = 4
Textareas.sizes['xl'] = 6
Textareas.sizes['2xl'] = 8
```











## Textareas.shadow

Type: **`String`**  
Default: **`"{{ Textareas.shadow }}"`**

The `Textareas.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.shadow = ''
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
Textareas.sizes = {
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
    '2xl': '',
}
```

```javascript
Textareas.sizes['xs'] = ''
Textareas.sizes['sm'] = ''
Textareas.sizes['md'] = ''
Textareas.sizes['lg'] = ''
Textareas.sizes['xl'] = ''
Textareas.sizes['2xl'] = ''
```













## Textareas.text

Type: **`String`**  
Default: **`"{{ Textareas.text }}"`**

The `Textareas.text` parameter is meant to isolate the text orientated characteristics and requirements that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Textareas.text = ''
```







## Textareas.transition

Type: **`String`**  
Default: **`"{{ Textareas.transition }}"`**

The `Textareas.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
Textareas.transition = ''
```










## Textareas.base()

Returns: **`String`**  
Default: **`"{{ Textareas.base() }}"`**

The `Textareas.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```javascript
const inputsBase = Textareas.base()
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

The applicable values for the `sizesKey` argument are set via the [Textareas.sizes](/modules/configs/inputs#inputs-sizes) property names/keys and atomic class values.

### Examples

```javascript
const inputsClasses = Textareas.classes() // default is 'md'
```

```javascript
const inputsClasses = Textareas.classes('lg')
```







## Textareas.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Textareas.getSizeClasses() }}"`**

The `Textareas.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Textareas.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Textareas.sizes object |

The applicable values for the `sizesKey` argument are set via the [Textareas.sizes](/modules/configs/inputs#inputs-sizes) property names/keys and atomic class values.

### Examples

```javascript
const inputsSizeClasses = Textareas.getSizeClasses() // default is 'md'
```

```javascript
const inputsSizeClasses = Textareas.getSizeClasses('sm')
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

```javascript
const inputsSizeClasses = Textareas.getRowSize() // default key is 'md' = 4
```

```javascript
const inputsSizeClasses = Textareas.getRowSize('sm')
```













## Module Code

<<< @/../src/configs/Textareas.ts










<DocsPackageVersion/>
