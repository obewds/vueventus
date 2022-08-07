---
title: getRandomInt() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that returns a random integer between a range of provided integers.








## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { getRandomInt } from '@obewds/vueventus'
```








## Arguments

Returns: **`Number`**  

| Args | Type     | Status   | Description |
|------|:--------:|:--------:|-------------|
| min  | `Number` | Required | The minimum (inclusive) integer number to return as a possible random integer |
| max  | `Number` | Required | The maximum (inclusive) integer number to return as a possible random integer |






## Use Example

```javascript
console.log( getRandomInt( 0, 1 ) )
// returns (number): 0 or 1

console.log( getRandomInt( 1, 3 ) )
// returns (number): 1, 2 or 3

console.log( getRandomInt( 5, 10 ) )
// returns (number): 5, 6, 7, 8, 9 or 10
```









## Module Code

<<< @/../src/helpers/getRandomInt.ts






<DocsPackageVersion/>
