---
title: AnchorDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

A default palette of anchor colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultPaletteColors } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig anchors palette colors individually
appVv.anchors.palettes.default.default = '...'
appVv.anchors.palettes.default.error = '...'
appVv.anchors.palettes.default.primary = '...'
appVv.anchors.palettes.default.secondary = '...'
appVv.anchors.palettes.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig anchors palette
appVv.anchors.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.anchors.palettes.myCustomAppPalette = {
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
import { AnchorDefault } from '@obewds/vueventus'
```






## Module Code

<<< @/../src/configs/palettes/AnchorDefault.ts






<DocsPackageVersion/>


