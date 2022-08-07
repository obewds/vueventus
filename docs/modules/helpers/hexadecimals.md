---
title: hexadecimals() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that returns an array of valid individual hexadecimal character strings for further processing.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { hexadecimals } from '@obewds/vueventus'
```








## Arguments

Returns: **`Number`**  

The {{ $frontmatter.title }} does not have any arguments.






## Use Example

```javascript
console.log( hexadecimals() )
// returns (array): ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
```












## Module Code

<<< @/../src/helpers/hexadecimals.ts






<DocsPackageVersion/>
