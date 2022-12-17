---
title: ButtonOutline Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>








# {{ $frontmatter.title }}

An outline themed palette of button colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultPaletteColors } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the outline VvConfig buttons palette colors individually
appVv.buttons.palettes.solid.default = '...'
appVv.buttons.palettes.solid.error = '...'
appVv.buttons.palettes.solid.primary = '...'
appVv.buttons.palettes.solid.secondary = '...'
appVv.buttons.palettes.solid.success = '...'

// Add a new custom app anchor color name & value
// to the outline VvConfig buttons palette
appVv.buttons.palettes.solid.newAppColor = '...'

// Add a new custom app anchor palette
appVv.buttons.palettes.myCustomAppPalette = {
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
import { ButtonOutline } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/ButtonOutline.ts






<DocsPackageVersion/>


