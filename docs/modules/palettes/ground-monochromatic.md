---
title: GroundMonochromatic Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A monochromatic themed palette of ground colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








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
appVv.grounds.palettes.monochromatic.default = '...'
appVv.grounds.palettes.monochromatic.error = '...'
appVv.grounds.palettes.monochromatic.primary = '...'
appVv.grounds.palettes.monochromatic.secondary = '...'
appVv.grounds.palettes.monochromatic.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig grounds palette
appVv.grounds.palettes.monochromatic.newAppColor = '...'

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
import { GroundMonochromatic } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/GroundMonochromatic.ts






<DocsPackageVersion/>


