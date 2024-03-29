---
title: formatBytes() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes in a decimal number and an optional number of decimal places, and returns a formatted string of that number in the bytes, kilobytes, megabytes, etc. depending on the size of the input decimal number.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { formatBytes } from '@obewds/vueventus'
```





## Arguments

Returns: **`String`**  

| Args     | Type      | Status     | Description |
|----------|:---------:|:----------:|-------------|
| bytes    | `Number`  | Required   | A number of bytes |
| decimals | `Number`  | Required   | A number of decimal places for the output number |






## Use Examples

```javascript
console.log( formatBytes(0) )
// returns (string): '0 Bytes'

console.log( formatBytes(1000.12345, 5) )
// returns (string): '1000.12345 Bytes'

console.log( formatBytes(10000) )
// returns (string): '9.77 KB'

console.log( formatBytes(10000000) )
// returns (string): '9.54 MB'

console.log( formatBytes(10000000000) )
// returns (string): '9.31 GB'

console.log( formatBytes(10000000000000) )
// returns (string): '9.09 TB'

console.log( formatBytes(10000000000000000) )
// returns (string): '8.67 EB'

console.log( formatBytes(10000000000000000000000) )
// returns (string): '8.47 ZB'

console.log( formatBytes(10000000000000000000000000) )
// returns (string): '8.27 YB'
```









## Module Code

<<< @/../src/helpers/formatBytes.ts






<DocsPackageVersion/>
