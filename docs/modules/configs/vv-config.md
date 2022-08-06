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






<!-- TODO: change this import block to match new approach in ColorModes Config docs page -->
## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { VvConfig } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import VvConfig from '@obewds/vueventus/dist/configs/VvConfig.js'
```






## Module Code

<<< @/../src/configs/VvConfig.ts






<DocsPackageVersion/>

