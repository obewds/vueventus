---
title: GroundConsole Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A console themed palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { GroundConsole } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import GroundConsole from '@obewds/vueventus/dist/configs/palettes/GroundConsole.js'
```






## Use

```javascript
const bgDefault = GroundConsole.default
const bgError = GroundConsole.error
const bgPrimary = GroundConsole.primary
const bgSecondary = GroundConsole.secondary
const bgSuccess = GroundConsole.success
```






## Module

<<< @/../src/configs/palettes/GroundConsole.ts






<DocsPackageVersion/>


