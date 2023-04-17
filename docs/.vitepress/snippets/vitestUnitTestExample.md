## Vitest Unit Test Example

Now to actually ensure everything is working, we need to create a quick component and a couple of rudimentary tests for that component to know we're ready to get to business!

The first step is to create a new component. For this example, and a standard Vue structure this would be: `./src/components/HelloVueVentus.vue`, while in a Nuxt.js project structure this would be: `./components/HelloVueVentus.vue`. Either way, add code like this to taste:

```html
<!-- ./src/components/HelloVueVentus.vue // for Vue/Vite CLIs -->
<!-- ./components/HelloVueVentus.vue // for Nuxt -->
<script setup lang="ts">
    import { VvButton } from '@obewds/vueventus'
</script>
<template>
    <VvButton>
        <slot>Hello VueVentus</slot>
    </VvButton>
</template>
```

And lastly, create a new directory and/or test file `./tests/HelloVueVentus.test.js` and add the following tests:

```javascript
// ./tests/HelloVueVentus.test.js

import { mount } from '@vue/test-utils'
// for Vue/Vite CLI projects use:
import HelloVueVentus from '../src/components/HelloVueVentus.vue'
// for Nuxt projects use:
import HelloVueVentus from '../components/HelloVueVentus.vue'

test('HelloVueVentus.vue component imports successfully', async () => {
    expect(HelloVueVentus).toBeTruthy()
})

test('HelloVueVentus.vue component accepts an object literal slot value with markup and text content', async () => {
    const testObjLiteral = `<div>Hello VueVentus!!!</div>`
    const wrapper = mount(HelloVueVentus, {
        slots: { default: testObjLiteral },
    })
    expect(wrapper.html()).toContain(testObjLiteral)
})
```

Now you can run Vitest and see the fruits of your labor with:

```bash
npm run test
```

And assuming `@vitest/coverage-c8` was installed, you can run your testing coverage, too:

```bash
npm run coverage
```




