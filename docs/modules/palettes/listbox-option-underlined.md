---
title: ListboxOptionUnderlined Palette Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>





# {{ $frontmatter.title }}

A validation focused palette of a variety of color class types for use with listbox components via properties/values with the keys of `default`, `error`, and `success`.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv, DefaultPaletteColors } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

// Override the default VvConfig listboxes optionPalettes colors individually
appVv.listboxes.optionPalettes.underlined.default = '...'
appVv.listboxes.optionPalettes.underlined.error = '...'
appVv.listboxes.optionPalettes.underlined.success = '...'


// Add a new custom app listboxes optionPalettes color name & value
// to the default VvConfig listboxes palette
appVv.listboxes.optionPalettes.underlined.newAppColor = '...'


// Add a new custom app anchor palette
appVv.listboxes.optionPalettes.myCustomAppPalette = {
    default: '...',
    error: '...',
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
import { ListboxOptionUnderlined } from '@obewds/vueventus'
```













## Module Code

<<< @/../src/configs/palettes/ListboxOptionUnderlined.ts






<DocsPackageVersion/>
