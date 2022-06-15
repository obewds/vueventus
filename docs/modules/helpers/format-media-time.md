---
title: formatMediaTime()
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} helper module provides a helper function that returns a string formatted as minutes:seconds time code for time-based media.






## Import

```javascript
import { formatMediaTime } from '@obewds/vueventus'
```






## Use Example

```javascript
console.log( formatMediaTime(2.123) )
// returns (string): '00:02'

console.log( formatMediaTime(122.123) )
// returns (string): '02:02'

console.log( formatMediaTime(6069) )
// returns (string): '01:41:09'

console.log( formatMediaTime(6069) )
// returns (string): '01:41:09'

console.log( formatMediaTime(806069) )
// returns (string): '09:07:54:29'
```






<DocsPackageVersion/>
