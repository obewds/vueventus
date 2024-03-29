---
title: stringToFilename() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes in a string argument and returns a filename safe variation of the argument string.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { stringToFilename } from '@obewds/vueventus'
```











## Arguments

Returns: **`String`**  

| Args | Type     | Status   | Description |
|------|:--------:|:--------:|-------------|
| text | `String` | Required | String to convert to a file name safe format |










## Use Example

```javascript
console.log( stringToFilename('Test String') )
// returns (string): 'TestString'

console.log( stringToFilename('Test-String _here') )
// returns (string): 'Test-String_here'

console.log( stringToFilename('Test-String! _@here') )
// returns (string): 'Test-String_here'

console.log( stringToFilename('Test.String._@here.jpg') )
// returns (string): 'Test.String._here.jpg'

console.log( stringToFilename('Test. 12345._@here.jpg') )
// returns (string): 'Test.12345._here.jpg'
```









## Module Code

<<< @/../src/helpers/stringToFilename.ts






<DocsPackageVersion/>
