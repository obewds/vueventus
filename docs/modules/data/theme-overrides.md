---
title: Theme Overrides
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

VueVentus {{ $frontmatter.title }} are simple and static JSON object data files that contain Tailwind CSS specific property names and values for your app's Tailwind CSS config file.

{{ $frontmatter.title }} themselves sometimes add entirely new nomenclature to Tailwind CSS defaults, and therefore don't necessarily follow the naming conventions of Tailwind's awesome defaults. That said, the naming conventions used aren't far off in most cases.





## theme.fontSize.json

To import for use in a Tailwind CSS config file:

```javascript
const fontSize = require('./node_modules/@obewds/vueventus/dist/data/theme.fontSize.json')
```

The `theme.fontSize.json` data module overrides a Tailwind config object's `theme.fontSize` values with the data below:

<<< @/../src/data/theme.fontSize.json






## theme.listStyleType.json

To import for use in a Tailwind CSS config file:

```javascript
const listStyleType = require('./node_modules/@obewds/vueventus/dist/data/theme.listStyleType.json')
```

The `theme.listStyleType.json` data module overrides a Tailwind config object's `theme.listStyleType` values with the data below:

<<< @/../src/data/theme.listStyleType.json






## theme.opacity.json

To import for use in a Tailwind CSS config file:

```javascript
const opacity = require('./node_modules/@obewds/vueventus/dist/data/theme.opacity.json')
```

The `theme.opacity.json` data module overrides a Tailwind config object's `theme.opacity` values with the data below:

<<< @/../src/data/theme.opacity.json






## theme.screens.json

To import for use in a Tailwind CSS config file:

```javascript
const screens = require('./node_modules/@obewds/vueventus/dist/data/theme.screens.json')
```

The `theme.screens.json` data module overrides a Tailwind config object's `theme.screens` values with the data below:

<<< @/../src/data/theme.screens.json






<DocsPackageVersion/>

