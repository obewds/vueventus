---
title: GroundDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A default palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






<!-- TODO: remove example import xxxxx from @obewds/vueventus/dist/... -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { GroundDefault } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import GroundDefault from '@obewds/vueventus/dist/configs/palettes/GroundDefault.js'
```






## Use

```javascript
const bgDefault = GroundDefault.default
const bgError = GroundDefault.error
const bgPrimary = GroundDefault.primary
const bgSecondary = GroundDefault.secondary
const bgSuccess = GroundDefault.success
```






## Module

<<< @/../src/configs/palettes/GroundDefault.ts






<DocsPackageVersion/>


