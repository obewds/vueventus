---
title: Anchors Config Module
---



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for Anchor elements in your application, excluding color and color palette classes (see [Palette Config Modules](/modules/palettes/) for more info about palette modules).





## Import

```javascript
import { Anchors } from '@obewds/vueventus'
```






## Anchors.cursor

```javascript
import { Anchors } from '@obewds/vueventus'

let appAnchors = Anchors

appAnchors.cursor = ''
```






## Anchors.display

```javascript
import { Anchors } from '@obewds/vueventus'

let appAnchors = Anchors

appAnchors.display = ''
```






## Anchors.focus

```javascript
import { Anchors } from '@obewds/vueventus'

let appAnchors = Anchors

appAnchors.focus = ''
```






## Anchors.sizes

The `Anchors.sizes` parameter object for the {{ $frontmatter.title }} is inhereted directly from the [Text Config Module](/modules/text#text-sizes).








## Anchors.text

```javascript
import { Anchors } from '@obewds/vueventus'

let appAnchors = Anchors

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
