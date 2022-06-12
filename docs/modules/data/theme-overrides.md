---
title: Theme Overrides
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

VueVentus {{ $frontmatter.title }} are simple and static JSON object data files that contain Tailwind CSS specific property names and values for your app's Tailwind CSS config file.

{{ $frontmatter.title }} themselves sometimes add entirely new nomenclature to Tailwind CSS defaults, and therefore don't necessarily follow the naming conventions of Tailwind's awesome defaults. That said, the naming conventions used aren't far off in most cases.





## theme.fontSize

The `theme.fontSize` data module overrides a Tailwind config object's `theme.fontSize` values with the data below:

<<< @/../src/data/theme.fontSize.json





## theme.listStyleType

The `theme.listStyleType` data module overrides a Tailwind config object's `theme.listStyleType` values with the data below:

<<< @/../src/data/theme.listStyleType.json





## theme.opacity

The `theme.opacity` data module overrides a Tailwind config object's `theme.opacity` values with the data below:

<<< @/../src/data/theme.opacity.json





## theme.screens

The `theme.screens` data module overrides a Tailwind config object's `theme.screens` values with the data below:

<<< @/../src/data/theme.screens.json






<DocsPackageVersion/>

