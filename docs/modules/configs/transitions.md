---
title: Transitions Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for CSS transitions throughout your application.





## Import

```javascript
import { Transitions } from '@obewds/vueventus'
```






## Transitions.durations

```javascript
durations: {
    '1000': '',
    '700': '',
    '500': '',
    '300': '',
    '200': '',
    '150': '',
    '100': '',
    '75': '',
}
```






## Transitions.easings

```javascript
easings: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```






## Transitions.transitions

```javascript
transitions: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```






## Transitions.classes()

```javascript
const transition = Transitions.classes() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.classes('colors', 'linear', '1000')
```






## Transitions.custom()

```javascript
const transition = Transitions.custom() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.custom({
    transitions: 'colors',
    easings: 'linear',
    durations: '1000'
})
```





## Transitions.getDurationClasses()

```javascript
const duration = Transitions.getDurationClasses() // default is '300'
```

```javascript
const duration = Transitions.getDurationClasses('1000')
```






## Transitions.getEasingClasses()

```javascript
const easing = Transitions.getEasingClasses() // default is 'inOut'
```

```javascript
const easing = Transitions.getEasingClasses('in')
```






## Transitions.getTransitionClasses()

```javascript
const transition = Transitions.getTransitionClasses() // default is 'default'
```

```javascript
const transition = Transitions.getTransitionClasses('colors')
```









## Module Code

<<< @/../src/configs/Transitions.js






<DocsPackageVersion/>



