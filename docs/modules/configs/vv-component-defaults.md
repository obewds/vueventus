---
title: VvComponentDefaults Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} are the VueVentus Vue component prop defaults, but abstracted so they can be overridden by an app.vv.ts file.








## app.vv.ts Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data. For brevity, the {{ $frontmatter.title }} is shortened to simply `defaults` when made a property of the VvConfig object.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.defaults.VvAnchor.color = 'success'
// the above line will make the default "color" prop "success"
// so <VvAnchor>Test</VvAnchor> would use the "success" color classes
// unless otherwise specified in a VvAnchor instance prop!

appVv.defaults.VvInput.color = 'error'
// now VvInput components use the "color" prop "error" by default
// which means you can specify the color "default" in all VvInput instances
// then simply toggle the default string as a reactive value of a VvInput instance's 
// color prop to manage 2 input validation state class sets while only keeping 
// track of 1 string to operate the toggle!

export default appVv
```

::: tip
The VvConfig defaults for VueVentus components are very powerful tools when used in strategic conjunction with the dynamic approaches used when implementing those components.

Just be aware that you'll get the best results by taking a tiny bit of time to think out your dynamic moves along with the concept of Atomic CSS **grouped** classes - and especially along with palette and color class groups. 

When used in harmony and with care and restraint, applications start to really become both solid and flexible at the same time... which is really cool and satisfying!
:::








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { VvComponentDefaults } from '@obewds/vueventus'
```







## Module Code

<<< @/../src/configs/VvComponentDefaults.ts






<DocsPackageVersion/>

