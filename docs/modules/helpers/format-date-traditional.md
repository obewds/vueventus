---
title: formatDateTraditional() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts a passed JavaScript `Date` object and two optional string arguments, and returns a traditional full length word for the month and a 2 digit day followed by a comma, a space, and then finally a 4 digit year.

The method's second optional property accepts one of two string values of either `"long"` or `"short"`, where the default long value outputs full length month names, while the short value outputs 3 character abbreviated month names.

Lastly, the method's third optional property currently accepts one of three string values of either `"english"`, `"french"`, or `"spanish"`, where the default english value outputs full/short month names using English words, or full/short month names using French or Spanish words respectively.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { formatDateTraditional } from '@obewds/vueventus'
```






## Arguments

Returns: **`String`**  

| Args     | Type          | Status     | Description |
|----------|:-------------:|:----------:|-------------|
| date     | `Date object` | Required   | A JavaScript Date object set to the desired date |
| format   | `String`      | Optional   | Expects a string with a value of either `"short"` or `"long"` and sets either short or long form verbiage for the output traditional date string |
| language | `String`      | Optional   | Expects a string with a value of either `"english"`, `"french"` or `"spanish"` and sets the langue of the output traditional date string's month value |






## Use Examples

```javascript
console.log(
    formatDateTraditional( new Date('10/10/2020') )
)
// returns (string): 'October 10, 2020'
    
console.log(
    formatDateTraditional( new Date('10/10/2020'), 'short' )
)
// returns (string): 'Oct 10, 2020'
    
console.log( 
    formatDateTraditional( new Date('10/10/2020'), 'long', 'french' )
)
// returns (string): 'Octobre 10, 2020'
    
console.log(
    formatDateTraditional( new Date('12/10/2020'), 'long', 'spanish' )
)
// returns (string): 'Diciembre 10, 2020'
    
console.log(
    formatDateTraditional( new Date('12/10/2020'), 'short', 'spanish' )
)
// returns (string): 'Dic 10, 2020'
```









## Module Code

<<< @/../src/helpers/formatDateTraditional.ts




<DocsPackageVersion/>
