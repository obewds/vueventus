---
title: timestampToDateTimeAmPm() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that takes in a UNIX Timestamp number argument and returns a formatted string date and time of that timestamp, in 12-hour format including the applicable am/pm value.

The method's second optional property accepts one of two string values of either `"long"` or `"short"`, where the default short value outputs 3 character abbreviated month names, while the long value outputs full length month names.

Lastly, the method's third optional property currently accepts one of three string values of either `"english"`, `"french"`, or `"spanish"`, where the default english value outputs full/short month names using English words, or full/short month names using French or Spanish words respectively.

Lastly, the method's fourth and fifth optional properties allow you to specify the AM and PM strings respectively. The default is uppercase `"AM"` and `"PM"` values, so you can explicitly switch them to lowercase as needed.







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { timestampToDateTimeAmPm } from '@obewds/vueventus'
```






## Arguments

Returns: **`String`**  

| Args      | Type        | Status     | Description |
|-----------|:-----------:|:----------:|-------------|
| timestamp | `timestamp` | Required   | A UNIX Timestamp number value |
| format    | `String`    | Optional   | Expects a string with a value of either `"short"` or `"long"` and sets either short or long form verbiage for the output traditional date string |
| language  | `String`    | Optional   | Expects a string with a value of either `"english"`, `"french"` or `"spanish"` and sets the langue of the output traditional date string's month value |
| am        | `String`    | Optional   | Expects a string with a value of either `"am"` or `"AM"` and sets the output am value |
| pm        | `String`    | Optional   | Expects a string with a value of either `"pm"` or `"PM"` and sets the output am value |






## Use Examples

```javascript
console.log(
    timestampToDateTimeAmPm( 1660166705 )
)
// returns (string): 'Aug 10, 2022 5:25:05 PM'
    
console.log(
    timestampToDateTimeAmPm( 1660166705, 'long' )
)
// returns (string): 'August 10, 2022 5:25:05 PM'
    
console.log(
    timestampToDateTimeAmPm( 1660166705, 'long', 'french' )
)
// returns (string): 'Août 10, 2022 5:25:05 PM'
    
console.log(
    timestampToDateTimeAmPm( 1660166705, 'long', 'spanish', 'am', 'pm' )
)
// returns (string): 'Agosto 10, 2022 5:25:05 pm'
```










## Module Code

<<< @/../src/helpers/timestampToDateTimeAmPm.ts






<DocsPackageVersion/>
