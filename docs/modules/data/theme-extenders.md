---
title: Theme Extenders
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

VueVentus {{ $frontmatter.title }} are simple and static JSON object data files that contain Tailwind CSS specific property names and values for your app's Tailwind CSS config file.

{{ $frontmatter.title }} themselves **extend** existing Tailwind CSS defaults, and therefore follow the naming conventions of Tailwind's awesome defaults.









## extend.animation.json

The `extend.animation.json` data module extends a Tailwind config object's `theme.extend.animation` values with the data below:

<<< @/../src/data/extend.animation.json










## extend.keyframes.json

The `extend.keyframes.json` data module extends a Tailwind config object's `theme.extend.keyframes` values with the data below:

<<< @/../src/data/extend.keyframes.json









## extend.maxWidth.json

The `extend.maxWidth.json` data module extends a Tailwind config object's `theme.extend.maxWidth` values with the data below:

<<< @/../src/data/extend.maxWidth.json





## extend.rotate.json

The `extend.rotate.json` data module extends a Tailwind config object's `theme.extend.rotate` values with the data below:

<<< @/../src/data/extend.rotate.json





## extend.scale.json

The `extend.scale.json` data module extends a Tailwind config object's `theme.extend.scale` values with the data below:

<<< @/../src/data/extend.scale.json





## extend.transitionDuration.json

The `extend.transitionDuration.json` data module extends a Tailwind config object's `theme.extend.transitionDuration` values with the data below:

<<< @/../src/data/extend.transitionDuration.json





## extend.width.json

The `extend.width.json` data module extends a Tailwind config object's `theme.extend.width` values with the data below:

<<< @/../src/data/extend.width.json






<DocsPackageVersion/>



