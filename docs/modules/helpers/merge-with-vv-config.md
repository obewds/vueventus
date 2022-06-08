---
title: mergeWithVvConfig()
---



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

// import an app VueVentus config file
import appVv from './app.vv.js'

// use the method to merge app configs into default VueVentus configs
const vv = mergeWithVvConfig(appVv)

const app = createApp(App)

// provide the merged configs
app.provide('vv', vv)

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

