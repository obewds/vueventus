---
title: monthNames() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module returns a data object with language top-level properties and long/short sub properties all of which provide various languages, full names and abbreviated names of strings as months of the year.








## Import

To import the {{ $frontmatter.title }}:

```javascript
import { monthNames } from '@obewds/vueventus'
```

And if you need the Typescript interface to extend the {{ $frontmatter.title }} data with long and short form months for other languages, you can import `MonthNames` interface like this:

```javascript
import type { MonthNames } from '@obewds/vueventus'
```








## Arguments

Returns: **`Object`**  
Type: **`<MonthNames>`**

The {{ $frontmatter.title }} does not have any arguments.






## Use Example

```javascript
console.log( monthNames() )

// returns (<MonthNames>object): 
// {
//     english: {
//         long: ['January', '...'],
//         short: ['Jan', '...'],
//     },
//     french: {...},
//     spanish: {...},
// }
```












## Module Code

<<< @/../src/helpers/monthNames.ts






<DocsPackageVersion/>
