---
title: ScrollbarDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

A default palette of border colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultPaletteColors } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig borders palette colors individually
appVv.scrollbars.palettes.default.default = '...'
appVv.scrollbars.palettes.default.error = '...'
appVv.scrollbars.palettes.default.primary = '...'
appVv.scrollbars.palettes.default.secondary = '...'
appVv.scrollbars.palettes.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig borders palette
appVv.scrollbars.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.scrollbars.palettes.newAppPalette = {
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
import { ScrollbarDefault } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/ScrollbarDefault.ts






<DocsPackageVersion/>


