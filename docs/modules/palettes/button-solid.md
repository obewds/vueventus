---
title: ButtonSolid Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>








# {{ $frontmatter.title }}

A solid themed palette of button colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { ButtonSolid } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import ButtonSolid from '@obewds/vueventus/dist/configs/palettes/ButtonSolid.js'
```






## Use

```javascript
const buttonDefault = ButtonSolid.default
const buttonError = ButtonSolid.error
const buttonPrimary = ButtonSolid.primary
const buttonSecondary = ButtonSolid.secondary
const buttonSuccess = ButtonSolid.success
```






## Module

<<< @/../src/configs/palettes/ButtonSolid.ts






<DocsPackageVersion/>


