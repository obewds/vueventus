---
title: GroundPastel Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A pastel themed palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






<!-- TODO: remove example import xxxxx from @obewds/vueventus/dist/... -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { GroundPastel } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import GroundPastel from '@obewds/vueventus/dist/configs/palettes/GroundPastel.js'
```






## Use

```javascript
const bgDefault = GroundPastel.default
const bgError = GroundPastel.error
const bgPrimary = GroundPastel.primary
const bgSecondary = GroundPastel.secondary
const bgSuccess = GroundPastel.success
```






## Module

<<< @/../src/configs/palettes/GroundPastel.ts






<DocsPackageVersion/>


