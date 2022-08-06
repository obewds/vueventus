---
title: Theme Overrides
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

VueVentus {{ $frontmatter.title }} are simple and static JSON object data files that contain Tailwind CSS specific property names and values for your app's Tailwind CSS config file.

{{ $frontmatter.title }} themselves sometimes add entirely new nomenclature to Tailwind CSS defaults, and therefore don't necessarily follow the naming conventions of Tailwind's awesome defaults. That said, the naming conventions used aren't far off in most cases.





<!-- TODO: Add import example in CJS style for config.tailwind.cjs files -->
## theme.fontSize.json

The `theme.fontSize.json` data module overrides a Tailwind config object's `theme.fontSize` values with the data below:

<<< @/../src/data/theme.fontSize.json





<!-- TODO: Add import example in CJS style for config.tailwind.cjs files -->
## theme.listStyleType.json

The `theme.listStyleType.json` data module overrides a Tailwind config object's `theme.listStyleType` values with the data below:

<<< @/../src/data/theme.listStyleType.json





<!-- TODO: Add import example in CJS style for config.tailwind.cjs files -->
## theme.opacity.json

The `theme.opacity.json` data module overrides a Tailwind config object's `theme.opacity` values with the data below:

<<< @/../src/data/theme.opacity.json





<!-- TODO: Add import example in CJS style for config.tailwind.cjs files -->
## theme.screens.json

The `theme.screens.json` data module overrides a Tailwind config object's `theme.screens` values with the data below:

<<< @/../src/data/theme.screens.json






<DocsPackageVersion/>

