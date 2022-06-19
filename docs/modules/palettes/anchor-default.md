---
title: AnchorDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

A default palette of anchor colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { AnchorDefault } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import AnchorDefault from '@obewds/vueventus/dist/configs/palettes/AnchorDefault.js'
```






## Use

```javascript
const anchorDefault = AnchorDefault.default
const anchorError = AnchorDefault.error
const anchorPrimary = AnchorDefault.primary
const anchorSecondary = AnchorDefault.secondary
const anchorSuccess = AnchorDefault.success
```






## Module

<<< @/../src/configs/palettes/AnchorDefault.ts






<DocsPackageVersion/>


