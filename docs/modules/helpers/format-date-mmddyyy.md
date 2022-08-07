---
title: formatDateMMDDYYYY() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts a passed JavaScript Date object and an optional string separator, and returns a numerical 2 digit month, 2 digit day, and 4 digit year string with each number separated by a `/` character by default.







## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { formatDateMMDDYYYY } from '@obewds/vueventus'
```





## Arguments

Returns: **`String`**  

| Args      | Type          | Status     | Description |
|-----------|:-------------:|:----------:|-------------|
| date      | `Date object` | Required   | A JavaScript Date object set to the desired date |
| separator | `String`      | Optional   | A character or string to use as a separator for the output date values |






## Use Examples

```javascript
console.log( formatDateMMDDYYYY( new Date('January 10, 2020') ) )
// returns (string): '01/10/2020'

console.log( formatDateMMDDYYYY( new Date('December 9, 2020'), '-' ) )
// returns (string): '12-09-2020'
```









## Module Code

<<< @/../src/helpers/formatDateMMDDYYYY.ts






<DocsPackageVersion/>

