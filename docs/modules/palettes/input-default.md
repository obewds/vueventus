---
title: InputDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A validation focused palette of a variety of color class types for use with form input elements via properties/values with the keys of `default`, `error`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig


// ...


// Override the default VvConfig inputs palette colors individually
appVv.inputs.palettes.default.default = '...'
appVv.inputs.palettes.default.error = '...'
appVv.inputs.palettes.default.secondary = '...'

// Bring your overrides to the VvConfig textareas palettes default object
appVv.textareas.palettes.default = appVv.inputs.palettes.default


// Add a new custom app anchor color name & value
// to the default VvConfig inputs palette
appVv.inputs.palettes.default.newAppColor = '...'

// Bring your overrides to the VvConfig textareas palettes
appVv.textareas.palettes.default.newAppColor = appVv.inputs.palettes.default.newAppColor


// Add a new custom app anchor palette
appVv.inputs.palettes.myCustomAppPalette = {
    default: '...',
    error: '...',
    success: '...',
    // Add a new custom app anchor color name & value
    anotherAppColor: '...',
} as DefaultConfigPalette

// Bring your overrides to the VvConfig textareas palettes default object
appVv.textareas.palettes.myCustomAppPalette = appVv.inputs.palettes.myCustomAppPalette


// ...


export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { InputDefault } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/InputDefault.ts






<DocsPackageVersion/>


