---
title: Anchors Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Anchors from '../../../src/configs/Anchors.js'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Anchor elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).





## Import

```javascript
import { Anchors } from '@obewds/vueventus'
```






## Anchors.cursor

Type: **`String`**  
Default: **`"{{ Anchors.cursor }}"`**

The `Anchors.cursor` parameter is meant to isolate the CSS cursor focused characteristics and requirements for an application's anchor elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Anchors.cursor = ''
```






## Anchors.display

Type: **`String`**  
Default: **`"{{ Anchors.display }}"`**

The `Anchors.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's anchor elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Anchors.display = ''
```






## Anchors.focus

Type: **`String`**  
Default: **`"{{ Anchors.focus }}"`**

The `Anchors.focus` parameter is meant to isolate the CSS focus orientated characteristics and requirements for an application's anchor elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Anchors.focus = ''
```






## Anchors.sizes

The `Anchors.sizes` parameter object for the {{ $frontmatter.title }} is inherited directly from the [Text Config Module](/modules/configs/text#text-sizes).








## Anchors.text

Type: **`String`**  
Default: **`"{{ Anchors.text }}"`**

The `Anchors.text` parameter is meant to isolate the text specific atomic classes that don't pertain to already represented characteristics in VueVentus like color, size, etc. Instead, the `Anchors.text` parameter is meant for classes that would make anchor text unique from other text for more design/accessibility reasons.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Anchors.text = ''
```






## Anchors.base()

Returns: **`String`**  
Default: **`"{{ Anchors.base() }}"`**

The `Anchors.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```javascript
const anchorsBase = Anchors.base()
```






## Anchors.classes()

Returns: **`String`**  
Default: **`"{{ Anchors.classes() }}"`**

The `Anchors.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Anchors.base()` method under the hood.

However, the `Anchors.classes()` method also returns `Anchors.getSizeClasses()` method classes in addition to the base property classes/values, which augments the returned value based on the optional argument value passed into the method.

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property names/keys of an Anchors.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text Config Module Text.sizes](/modules/configs/text#text-sizes) property names/keys and atomic class values.

### Examples

```javascript
const anchorsClasses = Anchors.classes() // default is 'md'
```

```javascript
const anchorsClasses = Anchors.classes('lg')
```






## Anchors.getSizeClasses()

Returns: **`String`**  
Default: **`"{{ Anchors.getSizeClasses() }}"`**

The `Anchors.getSizeClasses()` method returns text size related classes based on the optional argument value passed into the method. These size related classes come from the `Anchors.sizes` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| sizesKey   | `String`  | Optional   | Property names/keys of an Anchors.sizes object |

The applicable values for the `sizesKey` argument are set via the [Text Config Module Text.sizes](/modules/configs/text#text-sizes) property names/keys and atomic class values.

### Examples

```javascript
const anchorsSizeClasses = Anchors.getSizeClasses() // default is 'md'
```

```javascript
const anchorsSizeClasses = Anchors.getSizeClasses('sm')
```








## Module Code

<<< @/../src/configs/Anchors.js





<DocsPackageVersion/>
