---
title: slugifyString() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes a string argument and modifies/returns it as a URL safe and human-readable "slug" string.







## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { slugifyString } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import slugifyString from '@obewds/vueventus/dist/helpers/slugifyString.js'
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
