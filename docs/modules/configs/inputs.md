---
title: Inputs Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Inputs from '../../../src/configs/Inputs'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Input elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
<!-- TODO: change this import block to match new approach in ColorModes Config docs page -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { Inputs } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import Inputs from '@obewds/vueventus/dist/configs/Inputs.js'
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.border

Type: **`String`**  
Default: **`"{{ Inputs.border }}"`**

The `Inputs.border` parameter is meant to isolate the border specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.border = ''
```









<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.display

Type: **`String`**  
Default: **`"{{ Inputs.display }}"`**

The `Inputs.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.display = ''
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.outline

Type: **`String`**  
Default: **`"{{ Inputs.outline }}"`**

The `Inputs.outline` parameter is meant to isolate the outline specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.outline = ''
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.placeholder

Type: **`String`**  
Default: **`"{{ Inputs.placeholder }}"`**

The `Inputs.placeholder` parameter is meant to isolate the placeholder specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.placeholder = ''
```











<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.ring

Type: **`String`**  
Default: **`"{{ Inputs.ring }}"`**

The `Inputs.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.ring = ''
```











<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.rounding

Type: **`String`**  
Default: **`"{{ Inputs.rounding }}"`**

The `Inputs.rounding` parameter is meant to isolate the Tailwind CSS border rounding characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.rounding = ''
```











<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.shadow

Type: **`String`**  
Default: **`"{{ Inputs.shadow }}"`**

The `Inputs.shadow` parameter is meant to isolate the Tailwind CSS border shadow characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.shadow = ''
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.sizes

Type: **`Object`**  

| Inputs.sizes Properties | Inputs.sizes Prop Values      |
|-------------------------|-------------------------------|
| `"xs"`                  | `"{{ Inputs.sizes['xs'] }}"`  |
| `"sm"`                  | `"{{ Inputs.sizes['sm'] }}"`  |
| `"md"`                  | `"{{ Inputs.sizes['md'] }}"`  |
| `"lg"`                  | `"{{ Inputs.sizes['lg'] }}"`  |
| `"xl"`                  | `"{{ Inputs.sizes['xl'] }}"`  |
| `"2xl"`                 | `"{{ Inputs.sizes['2xl'] }}"` |

### Examples

```javascript
Inputs.sizes = {
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
    '2xl': '',
}
```

```javascript
Inputs.sizes['xs'] = ''
Inputs.sizes['sm'] = ''
Inputs.sizes['md'] = ''
Inputs.sizes['lg'] = ''
Inputs.sizes['xl'] = ''
Inputs.sizes['2xl'] = ''
```













<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.text

Type: **`String`**  
Default: **`"{{ Inputs.text }}"`**

The `Inputs.text` parameter is meant to isolate the text orientated characteristics and requirements that don't pertain to already represented characteristics in VueVentus like color, size, etc.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.text = ''
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.transition

Type: **`String`**  
Default: **`"{{ Inputs.transition }}"`**

The `Inputs.transition` parameter is meant to isolate the transition/animation characteristics and requirements for an application's input elements.

### Example

```javascript
Inputs.transition = ''
```










<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.base()

Returns: **`String`**  
Default: **`"{{ Inputs.base() }}"`**

The `Inputs.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```javascript
const inputsBase = Inputs.base()
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.classes()

Returns: **`String`**  
Default: **`"{{ Inputs.classes() }}"`**

The `Inputs.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Inputs.base()` method under the hood.

However, the `Inputs.classes()` method also returns `Inputs.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Inputs.sizes object |

The applicable values for the `sizesKey` argument are set via the [Inputs.sizes](/modules/configs/inputs#inputs-sizes) property names/keys and atomic class values.

### Examples

```javascript
const inputsClasses = Inputs.classes() // default is 'md'
```

```javascript
const inputsClasses = Inputs.classes('lg')
```







<!-- TODO: change all Inputs.xxx examples to appVv.inputs.xxx syntax like in new ColorModes config docs page -->
## Inputs.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Inputs.getSizeClasses() }}"`**

The `Inputs.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Inputs.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property name/key of an Inputs.sizes object |

The applicable values for the `sizesKey` argument are set via the [Inputs.sizes](/modules/configs/inputs#inputs-sizes) property names/keys and atomic class values.

### Examples

```javascript
const inputsSizeClasses = Inputs.getSizeClasses() // default is 'md'
```

```javascript
const inputsSizeClasses = Inputs.getSizeClasses('sm')
```













## Module Code

<<< @/../src/configs/Inputs.ts










<DocsPackageVersion/>
