---
title: formatNumber()
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} helper module provides a helper function that returns it's passed argument as a formatted number using JavaScript's Intl.NumberFormat() API/method.







## Import

```javascript
import { formatNumber } from '@obewds/vueventus'
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
