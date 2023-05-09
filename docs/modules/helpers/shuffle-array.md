---
title: shuffleArray() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that accepts an array and returns a new array in a shuffled order.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { shuffleArray } from '@obewds/vueventus'
```









## Arguments

Returns: **`Array`**  

| Args   | Type             | Status   | Description |
|--------|:----------------:|:--------:|-------------|
| array | `Array` (Generic) | Required | Function requires an array and can accept a generic type |






## Use Example

```javascript
const numbersArray = [ 1, 2, 3, 4, 5 ]

const mixedArray = [ '1', 2, ['three'], {four: 'four'}, false ]

const newNumbers = shuffleArray(numbersArray)

const newMixed = shuffleArray(mixedArray)

console.log( newNumbers )
// returns a shuffled variation of [ 1, 2, 3, 4, 5 ]

console.log( newMixed )
// returns a shuffled variation of [ '1', 2, ['three'], {four: 'four'}, false ]
```









## Module Code

<<< @/../src/helpers/shuffleArray.ts






<DocsPackageVersion/>
