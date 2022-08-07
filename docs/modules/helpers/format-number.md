---
title: formatNumber() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that returns it's passed argument as a formatted number using JavaScript's Intl.NumberFormat() API/method.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { formatNumber } from '@obewds/vueventus'
```








## Arguments

Returns: **`String`**  

| Args   | Type     | Status   | Description |
|--------|:--------:|:--------:|-------------|
| number | `Number` | Required | A number to format as a human readable number string (with thousandths separators etc.) |






## Use Example

```javascript
console.log( formatNumber(123456) )
// returns (string): '123,456'

console.log( formatNumber(123456789) )
// returns (string): '123,456,789'

console.log( formatNumber(123456.1234) )
// returns (string): '123,456.123'
```









## Module Code

<<< @/../src/helpers/formatNumber.ts







<DocsPackageVersion/>
