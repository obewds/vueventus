---
title: GroundMonochromatic Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A monochromatic themed palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






<!-- TODO: remove example import xxxxx from @obewds/vueventus/dist/... -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { GroundMonochromatic } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import GroundMonochromatic from '@obewds/vueventus/dist/configs/palettes/GroundMonochromatic.js'
```






## Use

```javascript
const bgDefault = GroundMonochromatic.default
const bgError = GroundMonochromatic.error
const bgPrimary = GroundMonochromatic.primary
const bgSecondary = GroundMonochromatic.secondary
const bgSuccess = GroundMonochromatic.success
```






## Module

<<< @/../src/configs/palettes/GroundMonochromatic.ts






<DocsPackageVersion/>


