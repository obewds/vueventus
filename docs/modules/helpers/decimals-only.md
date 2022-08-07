---
title: decimalsOnly() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts the first argument into a string and then tests it for digit and dot characters. If the test passes, then the digits/dot are returned, and otherwise the second argument is returned (which should be the original number).

This helper function is essentially a function tailored specifically for decimal number counter UI validation.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { decimalsOnly } from '@obewds/vueventus'
```





## Arguments

Returns: **`Number`**  

| Args           | Type                 | Status     | Description |
|----------------|:--------------------:|:----------:|-------------|
| value          | `Number` or `String` | Required   | The string or number to process |
| originalNumber | `Number`             | Required   | A fallback number if the 1st argument value has no positive integer characters |






## Use Examples

```javascript
const startNumber = 10

console.log( decimalsOnly(11, startNumber) )
// returns (number): 11

console.log( decimalsOnly(9, startNumber) )
// returns (number): 9

console.log( decimalsOnly(11.123, startNumber) )
// returns (number): 11.123

console.log( decimalsOnly('11.123', startNumber) )
// returns (number): 11.123

console.log( decimalsOnly('abc', startNumber) )
// returns (number): 10
```









## Module Code

<<< @/../src/helpers/decimalsOnly.ts






<DocsPackageVersion/>
