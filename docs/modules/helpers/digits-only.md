---
title: digitsOnly() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts the first argument into a string and then tests it for purely digit characters. If the test passes, then the digits are returned, and otherwise the second argument is returned (which should be the original number).

This helper function is essentially a function tailored specifically for a number counter UI type of functionality.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { digitsOnly } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import digitsOnly from '@obewds/vueventus/dist/helpers/digitsOnly.js'
```






## Use Example

```javascript
const startNumber = 10

console.log( digitsOnly(11, startNumber) )
// returns (number): 11

console.log( digitsOnly(9, startNumber) )
// returns (number): 9

console.log( digitsOnly(11.123, startNumber) )
// returns (number): 10

console.log( digitsOnly('11.123', startNumber) )
// returns (number): 10

console.log( digitsOnly('abc', startNumber) )
// returns (number): 10
```






<DocsPackageVersion/>
