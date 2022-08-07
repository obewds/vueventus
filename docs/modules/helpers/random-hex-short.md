---
title: randomHexShort() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module returns a randomized and formatted "shorthand" hex code.

:::danger PLEASE BE AWARE
When using the {{ $frontmatter.title }} to generate a random shorthand hex code, the nature of shortened hex codes means that the normal range of RGB color space colors (16,777,216 colors) is **drastically** reduced to a total possible number of **4,096** values!
:::

A really cool page to check out to visually see both the vastness and the finite amount of 3 digit hex code available is [https://borderleft.com/toolbox/hex/](https://borderleft.com/toolbox/hex/).








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { randomHexShort } from '@obewds/vueventus'
```








## Arguments

Returns: **`String`**  

The {{ $frontmatter.title }} does not have any arguments.






## Use Example

```javascript
console.log( randomHexShort() )
// returns (string): "#fff", "#333", "#168", "#bd1" etc.
```













## Module Code

<<< @/../src/helpers/randomHexShort.ts






<DocsPackageVersion/>
