---
title: VvConfig Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is the backbone of VueVentus in a prototypal sense, and it's used in conjunction with your app's `./src/app.vv.ts` file to define your app's global design states.

::: tip
The VvConfig file basically works as a blueprint to work from, so you can define your app's global visual styling classes and color palettes at a global level as you override the VvConfig defaults in your app's app.vv file!
:::








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} as the starting point for your app.vv file.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { VvConfig } from '@obewds/vueventus'
```






## Module Code

<<< @/../src/configs/VvConfig.ts






<DocsPackageVersion/>

