---
title: GroundDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A default palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig grounds palette colors individually
appVv.grounds.default.default = '...'
appVv.grounds.default.error = '...'
appVv.grounds.default.primary = '...'
appVv.grounds.default.secondary = '...'
appVv.grounds.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig grounds palette
appVv.grounds.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.grounds.myCustomAppPalette = {
    default: '...',
    error: '...',
    primary: '...',
    secondary: '...',
    success: '...',
    // Add a new custom app anchor color name & value
    anotherAppColor: '...',
} as DefaultConfigPalette

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { GroundDefault } from '@obewds/vueventus'
```


















## Module Code

<<< @/../src/configs/palettes/GroundDefault.ts






<DocsPackageVersion/>


