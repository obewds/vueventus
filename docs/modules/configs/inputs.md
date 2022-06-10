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








## Inputs.display

```javascript
import { Inputs } from '@obewds/vueventus'

let appInputs = Inputs

appInputs.display = ''
```








## Inputs.ring

```javascript
import { Inputs } from '@obewds/vueventus'

let appInputs = Inputs

appInputs.ring = ''
```








## Inputs.text

```javascript
import { Inputs } from '@obewds/vueventus'

let appInputs = Inputs

appInputs.text = ''
```






## Inputs.base()

```javascript
const inputBase = Inputs.base()
```













## Module Code

<<< @/../src/configs/Inputs.js










<DocsPackageVersion/>
