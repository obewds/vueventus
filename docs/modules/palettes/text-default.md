---
title: TextDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A default palette of text colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig text palette colors individually
appVv.text.palettes.default.default = '...'
appVv.text.palettes.default.error = '...'
appVv.text.palettes.default.primary = '...'
appVv.text.palettes.default.secondary = '...'
appVv.text.palettes.default.success = '...'
appVv.text.palettes.default.neutral = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig text palette
appVv.text.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.text.palettes.myCustomAppPalette = {
    default: '...',
    error: '...',
    primary: '...',
    secondary: '...',
    success: '...',
    neutral: '...',
    // Add a new custom app anchor color name & value
    anotherAppColor: '...',
} as DefaultConfigPalette

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { TextDefault } from '@obewds/vueventus'
```












## Module Code

<<< @/../src/configs/palettes/TextDefault.ts






<DocsPackageVersion/>


