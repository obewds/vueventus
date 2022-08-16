---
title: BorderDefault Palette Config Module
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
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig borders palette colors individually
appVv.borders.palettes.default.default = '...'
appVv.borders.palettes.default.error = '...'
appVv.borders.palettes.default.primary = '...'
appVv.borders.palettes.default.secondary = '...'
appVv.borders.palettes.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig borders palette
appVv.borders.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.borders.palettes.myCustomAppPalette = {
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
import { BorderDefault } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/BorderDefault.ts






<DocsPackageVersion/>


