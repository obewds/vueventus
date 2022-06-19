---
title: formatNumber() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that returns it's passed argument as a formatted number using JavaScript's Intl.NumberFormat() API/method.







## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { formatNumber } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import formatNumber from '@obewds/vueventus/dist/helpers/formatNumber.js'
```






## Use Example

```javascript
console.log( formatNumber(123456) )
// returns (string): '123,456'

console.log( formatNumber(123456789) )
// returns (string): '123,456,789'

console.log( formatNumber(123456.1234) )
// returns (string): '123,456.123'
```






<DocsPackageVersion/>
