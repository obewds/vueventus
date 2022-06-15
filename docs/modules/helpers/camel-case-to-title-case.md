---
title: camelCaseToTitleCase()
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} helper module provides a helper function that converts a passed string formatted in camelCase and returns that string formatted in Title Case.






## Import

```javascript
import { camelCaseToTitleCase } from '@obewds/vueventus'
```






## Use Example

```javascript
console.log( camelCaseToTitleCase('testCamelCase') )
// returns (string): 'Test Camel Case'

console.log( camelCaseToTitleCase('testCamelCase22') )
// returns (string): 'Test Camel Case22'

console.log( camelCaseToTitleCase('PascalCaseString') )
// returns (string): 'Pascal Case String'

console.log( camelCaseToTitleCase('spaced camelCase') )
// returns (string): 'Spaced Camel Case'
```






<DocsPackageVersion/>
