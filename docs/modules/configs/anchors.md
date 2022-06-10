---
title: Anchors Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for Anchor elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).





## Import

```javascript
import { Anchors } from '@obewds/vueventus'
```

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appAnchors = Anchors
```






## Anchors.cursor

```javascript
appAnchors.cursor = ''
```






## Anchors.display

```javascript
appAnchors.display = ''
```






## Anchors.focus

```javascript
appAnchors.focus = ''
```






## Anchors.sizes

The `Anchors.sizes` parameter object for the {{ $frontmatter.title }} is inhereted directly from the [Text Config Module](/modules/configs/text#text-sizes).








## Anchors.text

```javascript
appAnchors.text = ''
```






## Anchors.base()

```javascript
const anchorBase = Anchors.base()
```






## Anchors.classes()

```javascript
const anchorClasses = Anchors.classes() // default is 'md'
```

```javascript
const anchorClasses = Anchors.classes('lg')
```






## Anchors.getSizeClasses()

```javascript
const anchorSizeClasses = Anchors.getSizeClasses() // default is 'md'
```

```javascript
const anchorSizeClasses = Anchors.getSizeClasses('sm')
```









## Module Code

<<< @/../src/configs/Anchors.js





<DocsPackageVersion/>
