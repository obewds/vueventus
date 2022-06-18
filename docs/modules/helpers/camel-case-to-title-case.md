---
title: camelCaseToTitleCase() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts a passed string formatted in camelCase and returns that string formatted in Title Case.






## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { camelCaseToTitleCase } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import camelCaseToTitleCase from '@obewds/vueventus/camelCaseToTitleCase'
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
