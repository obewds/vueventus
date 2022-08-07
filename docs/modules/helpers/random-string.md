---
title: randomString() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that generates a random continuous string.







<!-- TODO: Add args table and content for helper method like in ...modules/configs/anchors.html#anchors-classes -->
## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { randomString } from '@obewds/vueventus'
```






## Use Example

```javascript
console.log( randomString() )
// returns 10 character long random (string)

console.log( randomString(5) )
// returns 5 character long random (string)

console.log( randomString(35) )
// returns 35 character long random (string)
```









## Module Code

<<< @/../src/helpers/randomString.ts






<DocsPackageVersion/>
