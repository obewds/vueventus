---
title: randomHex() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module returns a randomized and formatted full length hex code.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { randomHex } from '@obewds/vueventus'
```








## Arguments

Returns: **`String`**  

The {{ $frontmatter.title }} does not have any arguments.






## Use Example

```javascript
console.log( randomHex() )
// returns (string): "#d0a1fc", "#8d0340" etc.
```











## Module Code

<<< @/../src/helpers/randomHex.ts






<DocsPackageVersion/>
