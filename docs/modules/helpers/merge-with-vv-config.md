---
title: mergeWithVvConfig()
---


<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} helper module provides a helper function that requires a single argument, which is expected to be an app-specific VueVentus config object that will be deeply merged on top of any defaults VueVentus uses from the [VvConfig](/modules/vv-config) module.






## Import

```javascript
import { mergeWithVvConfig } from '@obewds/vueventus'
```






## Use Example

```javascript
// ./src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import './index.css' // (Tailwind CSS file)

// import the mergeWithVvConfig() method
import { mergeWithVvConfig } from '@obewds/vueventus'

// import an app specific config file
import appVv from './app.vv.js'

const app = createApp(App)

// Use the mergeWithVvConfig method to merge an app 
// specific config into the default VueVentus VvConfig
// and provide the merged result to VueVentus as 'vv'
app.provide('vv', mergeWithVvConfig(appVv))

app.mount('#app')
```

```javascript
// ./src/app.vv.js

export default {
    test: {
        name: 'test',
        value: true,
    },
    anchors: {
        palettes: {
            default: {
                primary: 'text-yellow-600 hover:text-yellow-500'
            },
            myCustomPalette: {
                default: 'text-indigo-500 hover:text-indigo-400'
            },
        }
    }
}
```

So considering the two files above:

```javascript
console.log(vv.test.name)
// returns (string): test

console.log(vv.test.value)
// returns (boolean): true

console.log(vv.anchors.palettes.default.primary)
// returns (string): text-yellow-600 hover:text-yellow-500

console.log(vv.anchors.palettes.default.secondary)
// still returns (string): text-teal-500 hover:text-teal-600...

console.log(vv.anchors.palettes.myCustomPalette.default)
// returns (string): text-indigo-500 hover:text-indigo-400
```






<DocsPackageVersion/>

