---
title: padNumber() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module accepts a number argument and two optional string arguments, and returns a string. The returned string will be "padded" by prefixing the string in the 3rd argument, according to the number of characters defined in the 2nd argument.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { padNumber } from '@obewds/vueventus'
```








## Arguments

Returns: **`String`**  

| Args         | Type     | Status   | Description |
|--------------|:--------:|:--------:|-------------|
| number       | `Number` | Required | The number to be padded |
| outputLength | `Number` | Optional | The total number of characters to output (including the number to be padded), where the default value is `2` |
| padCharacter | `String` | Optional | The maximum (inclusive) integer number to return as a possible random integer |






## Use Example

```javascript
console.log( padNumber(5) )
// returns (string): 05

console.log( padNumber(10) )
// returns (string): 10

console.log( padNumber(10, 3) )
// returns (string): 010

console.log( padNumber(10, 4, '-') )
// returns (string): --10
```









## Module Code

<<< @/../src/helpers/padNumber.ts






<DocsPackageVersion/>
