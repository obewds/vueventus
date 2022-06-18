---
title: InputValidation Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A validation focused palette of a variety of color class types for use with form input elements via properties/values with the keys of `default`, `error`, and `success`.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { InputValidation } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import InputValidation from '@obewds/vueventus/InputValidation'
```






## Use

```javascript
const inputDefault = InputValidation.default
const inputError = InputValidation.error
const inputSuccess = InputValidation.success
```






## Module

<<< @/../src/configs/palettes/InputValidation.ts






<DocsPackageVersion/>


