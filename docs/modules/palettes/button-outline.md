---
title: ButtonOutline Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>








# {{ $frontmatter.title }}

An outline themed palette of button colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






<!-- TODO: remove example import xxxxx from @obewds/vueventus/dist/... -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { ButtonOutline } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import ButtonOutline from '@obewds/vueventus/dist/configs/palettes/ButtonOutline.js'
```






## Use

```javascript
const buttonDefault = ButtonOutline.default
const buttonError = ButtonOutline.error
const buttonPrimary = ButtonOutline.primary
const buttonSecondary = ButtonOutline.secondary
const buttonSuccess = ButtonOutline.success
```






## Module

<<< @/../src/configs/palettes/ButtonOutline.ts






<DocsPackageVersion/>


