---
title: Inputs Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for Input elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).






## Import

```javascript
import { Inputs } from '@obewds/vueventus'
```

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appInputs = Inputs
```








## Inputs.display

```javascript
appInputs.display = ''
```








## Inputs.ring

```javascript
appInputs.ring = ''
```








## Inputs.text

```javascript
appInputs.text = ''
```






## Inputs.base()

```javascript
const inputBase = Inputs.base()
```













## Module Code

<<< @/../src/configs/Inputs.js










<DocsPackageVersion/>
