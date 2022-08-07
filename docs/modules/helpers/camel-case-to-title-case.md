---
title: camelCaseToTitleCase() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that converts a passed string formatted in camelCase and returns that string formatted in Title Case.






## Import

To import the {{ $frontmatter.title }} helper method:

```javascript
import { camelCaseToTitleCase } from '@obewds/vueventus'
```





## Argument

Returns: **`String`**  

| Args     | Type      | Status     | Description |
|----------|:---------:|:----------:|-------------|
| string   | `String`  | Required   | A camel case string to be converted to title case |






## Use Examples

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









## Module Code

<<< @/../src/helpers/camelCaseToTitleCase.ts






<DocsPackageVersion/>
