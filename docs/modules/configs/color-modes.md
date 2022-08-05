---
title: ColorModes Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import ColorModes from '../../../src/configs/ColorModes'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes and color codes for the foundation of the dark and light mode options throughout VueVentus and for use in end applications.









## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.colorModes.someProperty = 'some-value'

// ...

export default appVv
```






## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { ColorModes } from '@obewds/vueventus'
```











## ColorModes.dark.ground

Type: **`String`**  
Default: **`"{{ ColorModes.dark.ground }}"`**

The `ColorModes.dark.ground` parameter is meant to isolate the CSS ground (background) color class for an application's dark mode color state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.dark.ground = '...'
```











## ColorModes.dark.hex

Type: **`String`**  
Default: **`"{{ ColorModes.dark.hex }}"`**

The `ColorModes.dark.hex` parameter is meant to isolate the CSS ground (background) hex color code value for an application's dark mode mode state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.dark.hex = '...'
```











## ColorModes.dark.text

Type: **`String`**  
Default: **`"{{ ColorModes.dark.text }}"`**

The `ColorModes.dark.text` parameter is meant to isolate the CSS text color class for an application's dark mode color state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.dark.text = '...'
```











## ColorModes.dark.title

Type: **`String`**  
Default: **`"{{ ColorModes.dark.title }}"`**

The `ColorModes.dark.title` parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a `title` HTML attribute)

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.dark.title = '...'
```











## ColorModes.light.ground

Type: **`String`**  
Default: **`"{{ ColorModes.light.ground }}"`**

The `ColorModes.light.ground` parameter is meant to isolate the CSS ground (background) color class for an application's light mode color state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.light.ground = '...'
```











## ColorModes.light.hex

Type: **`String`**  
Default: **`"{{ ColorModes.light.hex }}"`**

The `ColorModes.light.hex` parameter is meant to isolate the CSS ground (background) hex color code value for an application's light mode mode state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.light.hex = '...'
```











## ColorModes.light.text

Type: **`String`**  
Default: **`"{{ ColorModes.light.text }}"`**

The `ColorModes.light.text` parameter is meant to isolate the CSS text color class for an application's light mode color state.

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.light.text = '...'
```











## ColorModes.light.title

Type: **`String`**  
Default: **`"{{ ColorModes.light.title }}"`**

The `ColorModes.light.title` parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a `title` HTML attribute)

### Example

```javascript
// ./src/app.vv.ts
appVv.colorModes.light.title = '...'
```









## ColorModes.base()

Returns: **`String`**  
Default: **`"{{ ColorModes.base() }}"`**

The `ColorModes.base()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object.

### Example

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'

    const someVar = appVv.colorModes.base()
    
</script>

<template>

    <div :class="someVar">
        This div now has all of the base color mode classes!
    </div>

</template>
```









## Module Code

<<< @/../src/configs/ColorModes.ts






<DocsPackageVersion/>
