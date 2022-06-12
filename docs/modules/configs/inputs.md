---
title: Inputs Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Inputs from '../../../src/configs/Inputs.js'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for Input elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Inputs } from '@obewds/vueventus'
```








## Inputs.display

Type: **`String`**  
Default: **`"{{ Inputs.display }}"`**

The `Inputs.display` parameter is meant to isolate the CSS display/block level characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.display = ''
```








## Inputs.ring

Type: **`String`**  
Default: **`"{{ Inputs.ring }}"`**

The `Inputs.ring` parameter is meant to isolate the Tailwind CSS ring visualization interaction characteristics and requirements for an application's input elements. Tailwind CSS ring classes for example, are typically used in conjunction with the `focus:` modifier for user focus interactions.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.ring = ''
```








## Inputs.text

The `Inputs.text` parameter is meant to isolate the text orientated characteristics and requirements for an application's input elements.

!!!include(snippets/avoidingVueVentusAbstractsTip.md)!!!

### Example

```javascript
Inputs.text = ''
```






## Inputs.base()

Returns: **`String`**  
Default: **`"{{ Inputs.base() }}"`**

The `Inputs.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```javascript
const inputsBase = Inputs.base()
```













## Module Code

<<< @/../src/configs/Inputs.js










<DocsPackageVersion/>
