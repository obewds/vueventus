---
title: forceBodyClick() Helper Method
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} module provides a helper function that is a COMPLETE AND TOTALLY DIRTY HACK to be used **sparingly** as a bail out of temporary overlaying state scenarios like a modal with an underlying overlay.

The method is enclosed within a conditional that checks the window object's `typeof` value, to fail gracefully in SSR/SSG scenarios. And of course if the window and document pass the conditional, as the module name implies, the document's body element is used to trigger the built-in JavaScript `HTMLElement.click()` method, and pull the document focus out of the current user's temporary overlaying view states.

:::tip
The ideal use case for this method is to bail out of an off-canvas modal after a page state change in a JavaScript-driven application. So it's ideal for off-canvas nav links that trigger page reflows, but don't trigger server-side page refreshes due to client-side routing.

In these cases, even though this is a **dirty hack**... it gets the job done with the least amount of code across all browsers.
:::

Nevertheless, try to only use a method like this if you have to, or are pinched for time, or are in a creative flow when prototyping!







## Import

To import the {{ $frontmatter.title }}:

```javascript
import { forceBodyClick } from '@obewds/vueventus'
```








## Arguments

Returns: **`void`**  

The {{ $frontmatter.title }} does not have any arguments.






## Use Example

```html
<button @click="forceBodyClick()">Close Modal</button>
// returns (void): Simulates .click() on the document's body element
```










## Module Code

<<< @/../src/helpers/forceBodyClick.ts






<DocsPackageVersion/>
