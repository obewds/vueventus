---
title: ColorModes Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import ColorModes from '../../../src/configs/ColorModes'
</script>






# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes and color codes for the foundation of the dark and light mode options throughout VueVentus and for use in end applications.









## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { ColorModes } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import ColorModes from '@obewds/vueventus/dist/configs/ColorModes.js'
```











## ColorModes.dark.ground

Type: **`String`**  
Default: **`"{{ ColorModes.dark.ground }}"`**

The `ColorModes.dark.ground` parameter is meant to isolate the CSS ground (background) color class for an application's dark mode color state.

### Example

```javascript
ColorModes.dark.ground = ''
```











## ColorModes.dark.hex

Type: **`String`**  
Default: **`"{{ ColorModes.dark.hex }}"`**

The `ColorModes.dark.hex` parameter is meant to isolate the CSS ground (background) hex color code value for an application's dark mode mode state.

### Example

```javascript
ColorModes.dark.hex = ''
```











## ColorModes.dark.text

Type: **`String`**  
Default: **`"{{ ColorModes.dark.text }}"`**

The `ColorModes.dark.text` parameter is meant to isolate the CSS text color class for an application's dark mode color state.

### Example

```javascript
ColorModes.dark.text = ''
```











## ColorModes.dark.title

Type: **`String`**  
Default: **`"{{ ColorModes.dark.title }}"`**

The `ColorModes.dark.title` parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a `title` HTML attribute)

### Example

```javascript
ColorModes.dark.title = ''
```











## ColorModes.light.ground

Type: **`String`**  
Default: **`"{{ ColorModes.light.ground }}"`**

The `ColorModes.light.ground` parameter is meant to isolate the CSS ground (background) color class for an application's light mode color state.

### Example

```javascript
ColorModes.light.ground = ''
```











## ColorModes.light.hex

Type: **`String`**  
Default: **`"{{ ColorModes.light.hex }}"`**

The `ColorModes.light.hex` parameter is meant to isolate the CSS ground (background) hex color code value for an application's light mode mode state.

### Example

```javascript
ColorModes.light.hex = ''
```











## ColorModes.light.text

Type: **`String`**  
Default: **`"{{ ColorModes.light.text }}"`**

The `ColorModes.light.text` parameter is meant to isolate the CSS text color class for an application's light mode color state.

### Example

```javascript
ColorModes.light.text = ''
```











## ColorModes.light.title

Type: **`String`**  
Default: **`"{{ ColorModes.light.title }}"`**

The `ColorModes.light.title` parameter is meant to describe the color mode state to an end user for accessibility reasons (which can often be as simple as a `title` HTML attribute)

### Example

```javascript
ColorModes.light.title = ''
```






<DocsPackageVersion/>
