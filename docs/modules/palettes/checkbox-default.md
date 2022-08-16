---
title: CheckboxDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

A default palette of checkbox colors with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig checkboxes palette colors individually
appVv.checkboxes.palettes.default.default = '...'
appVv.checkboxes.palettes.default.error = '...'
appVv.checkboxes.palettes.default.primary = '...'
appVv.checkboxes.palettes.default.secondary = '...'
appVv.checkboxes.palettes.default.success = '...'

// Add a new custom app anchor color name & value
// to the default VvConfig checkboxes palette
appVv.checkboxes.palettes.default.newAppColor = '...'

// Add a new custom app anchor palette
appVv.checkboxes.palettes.myCustomAppPalette = {
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
import { CheckboxDefault } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/CheckboxDefault.ts






<DocsPackageVersion/>


