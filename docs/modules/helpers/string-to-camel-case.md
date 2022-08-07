---
title: stringToCamelCase() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts a passed in string and returns that string formatted in camelCase.







<!-- TODO: Add args table and content for helper method like in ...modules/configs/anchors.html#anchors-classes -->
## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { stringToCamelCase } from '@obewds/vueventus'
```






## Use Example

```javascript
console.log( stringToCamelCase('test string here') )
// returns (string): 'testStringHere'

console.log( stringToCamelCase('Test String Here') )
// returns (string): 'testStringHere'

console.log( stringToCamelCase('TestString here') )
// returns (string): 'testStringHere'

console.log( stringToCamelCase('Test stringHere') )
// returns (string): 'testStringHere'

console.log( stringToCamelCase('test-string-here') )
// returns (string): 'testStringHere'
```









## Module Code

<<< @/../src/helpers/stringToCamelCase.ts






<DocsPackageVersion/>
