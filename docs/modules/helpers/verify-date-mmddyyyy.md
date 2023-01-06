---
title: verifyDateMMDDYYYY() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes a string as an argument and returns a `Boolean` value of `true` if the string matches a MM/DD/YYYY syntax, and `false` if it does not match the syntax.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { verifyDateMMDDYYYY } from '@obewds/vueventus'
```











## Arguments

Returns: **`String`**  

| Args  | Type     | Status   | Description |
|-------|:--------:|:--------:|-------------|
| data  | `String` | Required | Checks string argument against regex match for MM/DD/YYYY format |











## Use Example

```javascript
console.log(
    verifyDateMMDDYYYY('01/01/0001'),
    verifyDateMMDDYYYY('12/31/9999'),
    verifyDateMMDDYYYY('06/02/2020'),
    verifyDateMMDDYYYY('10/28/1899')
)
// all return true

console.log(
    verifyDateMMDDYYYY('01-01-0001'),
    verifyDateMMDDYYYY('12.31.9999'),
    verifyDateMMDDYYYY('12/32/1899'),
    verifyDateMMDDYYYY('00/01/1899')
)
// all return false
```









## Module Code

<<< @/../src/helpers/verifyDateMMDDYYYY.ts






<DocsPackageVersion/>