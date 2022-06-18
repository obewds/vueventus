---
title: randomString() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that generates a random continuous string.







## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { randomString } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import randomString from '@obewds/vueventus/randomString'
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
