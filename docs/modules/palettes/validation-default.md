---
title: ValidationDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A validation focused palette of a variety of color class types for use with form input elements via properties/values with the keys of `default`, `error`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { ValidationDefault } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import ValidationDefault from '@obewds/vueventus/dist/configs/palettes/ValidationDefault.js'
```






## Use

```javascript
const inputDefault = ValidationDefault.default
const inputError = ValidationDefault.error
const inputSuccess = ValidationDefault.success
```






## Module

<<< @/../src/configs/palettes/ValidationDefault.ts






<DocsPackageVersion/>


