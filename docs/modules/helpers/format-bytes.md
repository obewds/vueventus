---
title: formatBytes() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes in a decimal number and an optional number of decimal places, and returns a formatted string of that number in the bytes, kilobytes, megabytes, etc. depending on the size of the input decimal number.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { formatBytes } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import formatBytes from '@obewds/vueventus/dist/helpers/formatBytes.js'
```






## Use Example

```javascript
console.log( formatBytes(0) )
// returns (string): '0 Bytes'

console.log( formatBytes(1000.12345, 5) )
// returns (string): '1000.12345 Bytes'

console.log( formatBytes('1000') )
// returns (string): '1000 Bytes'

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






<DocsPackageVersion/>
