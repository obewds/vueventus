---
title: GroundConsole Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A console themed palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { GroundConsole } from '@obewds/vueventus'
```






## Use

```javascript
const bgDefault = GroundConsole.default
const bgError = GroundConsole.error
const bgPrimary = GroundConsole.primary
const bgSecondary = GroundConsole.secondary
const bgSuccess = GroundConsole.success
```






## Module Code

<<< @/../src/configs/palettes/GroundConsole.ts






<DocsPackageVersion/>


