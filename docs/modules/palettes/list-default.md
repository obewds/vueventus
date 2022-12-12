---
title: ListDefault Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A default palette of marker colors (IE bullets and numbered markers for list items) with properties/values with the keys of `default`, `error`, `primary`, `secondary`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultConfigPalette } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig lists palette colors individually
appVv.lists.palette.default.default = '...'
appVv.lists.palette.default.error = '...'
appVv.lists.palette.default.secondary = '...'


// Add a new custom app lists palette color name & value
// to the default VvConfig lists palette
appVv.lists.palette.default.newAppColor = '...'


// Add a new custom app anchor palette
appVv.lists.palette.myCustomAppPalette = {
    default: '...',
    error: '...',
    success: '...',
    secondary: '...',
    // Add a new custom app anchor color name & value
    anotherAppColor: '...',
} as DefaultConfigPalette

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { ListDefault } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/ListDefault.ts






<DocsPackageVersion/>
