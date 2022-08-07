---
title: slugifyString() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes a string argument and modifies/returns it as a URL safe and human-readable "slug" string.







<!-- TODO: Add args table and content for helper method like in ...modules/configs/anchors.html#anchors-classes -->
## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { slugifyString } from '@obewds/vueventus'
```






## Use Example

```javascript
console.log( slugifyString('This is a test.') )
// returns (string): 'this-is-a-test'

console.log( slugifyString(' This is a 2nd test!!!') )
// returns (string): 'this-is-a-2nd-test'

console.log( slugifyString('And (&) THIS is a 3rd?!?!') )
// returns (string): 'and-this-is-a-3rd'
```






<DocsPackageVersion/>
