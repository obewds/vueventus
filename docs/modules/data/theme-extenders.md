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

To import for use in a Tailwind CSS config file:

```javascript
const animation = require('./node_modules/@obewds/vueventus/dist/data/extend.animation.json')
```

The `extend.animation.json` data module extends a Tailwind config object's `theme.extend.animation` values with the data below:

<<< @/../src/data/extend.animation.json











## extend.keyframes.json

To import for use in a Tailwind CSS config file:

```javascript
const keyframes = require('./node_modules/@obewds/vueventus/dist/data/extend.keyframes.json')
```

The `extend.keyframes.json` data module extends a Tailwind config object's `theme.extend.keyframes` values with the data below:

<<< @/../src/data/extend.keyframes.json










## extend.maxWidth.json

To import for use in a Tailwind CSS config file:

```javascript
const maxWidth = require('./node_modules/@obewds/vueventus/dist/data/extend.maxWidth.json')
```

The `extend.maxWidth.json` data module extends a Tailwind config object's `theme.extend.maxWidth` values with the data below:

<<< @/../src/data/extend.maxWidth.json






## extend.rotate.json

To import for use in a Tailwind CSS config file:

```javascript
const rotate = require('./node_modules/@obewds/vueventus/dist/data/extend.rotate.json')
```

The `extend.rotate.json` data module extends a Tailwind config object's `theme.extend.rotate` values with the data below:

<<< @/../src/data/extend.rotate.json






## extend.scale.json

To import for use in a Tailwind CSS config file:

```javascript
const scale = require('./node_modules/@obewds/vueventus/dist/data/extend.scale.json')
```

The `extend.scale.json` data module extends a Tailwind config object's `theme.extend.scale` values with the data below:

<<< @/../src/data/extend.scale.json






## extend.transitionDuration.json

To import for use in a Tailwind CSS config file:

```javascript
const transitionDuration = require('./node_modules/@obewds/vueventus/dist/data/extend.transitionDuration.json')
```

The `extend.transitionDuration.json` data module extends a Tailwind config object's `theme.extend.transitionDuration` values with the data below:

<<< @/../src/data/extend.transitionDuration.json






## extend.width.json

To import for use in a Tailwind CSS config file:

```javascript
const width = require('./node_modules/@obewds/vueventus/dist/data/extend.width.json')
```

The `extend.width.json` data module extends a Tailwind config object's `theme.extend.width` values with the data below:

<<< @/../src/data/extend.width.json






<DocsPackageVersion/>



