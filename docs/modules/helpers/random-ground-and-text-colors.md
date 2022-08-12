---
title: randomGroundAndTextColors() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module accepts two optional string arguments, and returns a [&lt;GroundTextColors&gt;](/typescript/interfaces#groundtextcolors) type interface object, which has JavaScript CSS Style formatted `backgroundColor` and `color` properties.

The `backgroundColor` property is assigned a random background color value, and the `color` property has an accessible contrast color for text on top of that background color.

The `color` property value returned by the {{ $frontmatter.title }} uses the awesome [tinycolor](https://thebespokepixel.github.io/es-tinycolor/) (converted to esm by the excellent [@thebespokepixel](https://github.com/thebespokepixel/es-tinycolor)) dependency under the hood to check if the random generated backgroundColor color is "dark" or "light". So the {{ $frontmatter.title }} will determine that for you depending on the random backgroundColor color that is generated.

The two optional properties allow you to specify the text color for both the "dark" and "light" text colors the helper outputs respectively.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { randomGroundAndTextColors } from '@obewds/vueventus'
```








## Arguments

Returns: **`<GroundTextColors> Object`** ([GroundTextColors Interface](/typescript/interfaces#groundtextcolors))  

| Args         | Type     | Status   | Description |
|--------------|:--------:|:--------:|-------------|
| darkTextColor  | `String` | Optional | The color code value for randomly generated **dark** backgroundColor colors, where the default value is `#fff` |
| lightTextColor | `String` | Optional | The color code value for randomly generated **light** backgroundColor colors, where the default value is `#000` |






## Use Examples

Pure JavaScript:

```javascript
console.log( randomGroundAndTextColors() )
// returns (<GroundTextColors>):
// { backgroundColor: "#0135f7", color: "#fff" } or
// { backgroundColor: "#76a1cb", color: "#000" } etc...

console.log( randomGroundAndTextColors('#f8f8f8', '#111') )
// returns (<GroundTextColors>):
// { backgroundColor: "#256228", color: "#f8f8f8" } or
// { backgroundColor: "#7597d7", color: "#111" } etc...
```

In a Vue SFC:

```html
<!-- ./src/components/someComponent.vue -->

<script setup lang="ts">

    import { randomGroundAndTextColors } from '@obewds/vueventus'

</script>

<template>

    <div class="p-5" :style="randomGroundAndTextColors()">
        Random Style One
    </div>

    <div class="p-5" :style="randomGroundAndTextColors('#f8f8f8', '#111')">
        Random Style Two
    </div>
    
</template>
```









## Module Code
<!-- TODO
<<< @/../src/helpers/randomGroundAndTextColors.ts
-->





<DocsPackageVersion/>
