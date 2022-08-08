---
title: ButtonSolid Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>








# {{ $frontmatter.title }}

A solid themed palette of button colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the solid VvConfig buttons palette colors individually
appVv.buttons.palettes.outline.default = '...'
appVv.buttons.palettes.outline.error = '...'
appVv.buttons.palettes.outline.primary = '...'
appVv.buttons.palettes.outline.secondary = '...'
appVv.buttons.palettes.outline.success = '...'

// Add a new custom app anchor color name & value
// to the solid VvConfig buttons palette
appVv.buttons.palettes.outline.newAppColor = '...'

// Add a new custom app anchor palette
appVv.buttons.palettes.myCustomAppPalette = {
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
import { ButtonSolid } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/ButtonSolid.ts






<DocsPackageVersion/>


