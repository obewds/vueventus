---
title: TextDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A default palette of text colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { TextDefault } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import TextDefault from '@obewds/vueventus/TextDefault'
```






## Use

```javascript
const borderDefault = BorderDefault.default
const borderError = BorderDefault.error
const borderPrimary = BorderDefault.primary
const borderSecondary = BorderDefault.secondary
const borderSuccess = BorderDefault.success
```






## Module

<<< @/../src/configs/palettes/BorderDefault.ts






<DocsPackageVersion/>


