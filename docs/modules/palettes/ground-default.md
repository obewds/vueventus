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
import type { ConfigVv, DefaultPaletteColors } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig grounds palette colors individually
appVv.grounds.palettes.default.default = '...'
appVv.grounds.palettes.default.error = '...'
appVv.grounds.palettes.default.primary = '...'
appVv.grounds.palettes.default.secondary = '...'
appVv.grounds.palettes.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig grounds palette
appVv.grounds.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.grounds.palettes.myCustomAppPalette = {
    default: '...',
    error: '...',
    primary: '...',
    secondary: '...',
    success: '...',
    // Add a new custom app anchor color name & value
    anotherAppColor: '...',
} as DefaultPaletteColors

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


