---
title: randomString()
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} helper module provides a helper function that generates a random continuous string.







## Import

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






<DocsPackageVersion/>
