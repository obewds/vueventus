---
title: VvConfig Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} is the backbone of VueVentus in a prototypal sense. However, it should and will also be used as a blueprint to define your app's brand and color palettes at the global level, as well!






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

