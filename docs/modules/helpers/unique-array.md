---
title: uniqueArray() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes an array as an argument and returns a new array with any duplicate values in the argument array removed.







## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { uniqueArray } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import uniqueArray from '@obewds/vueventus/uniqueArray'
```






## Use Example

```javascript
console.log(
    uniqueArray([true, 12, 'test string', true, 12, 'test string'])
)
// returns (array): [true, 12, 'test string']


console.log(
    uniqueArray([{prop:'test'}, [3,'a'], {prop:'test'}, [3,'a']])
)
// returns (array): [{prop:'test'}, [3,'a']]
```






<DocsPackageVersion/>
