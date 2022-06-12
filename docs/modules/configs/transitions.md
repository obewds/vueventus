---
title: Transitions Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for CSS transitions throughout your application.





## Import

```javascript
import { Transitions } from '@obewds/vueventus'
```

<!-- #TODO: update doc by removing example below and replacing all examples referencing this variable on this docs page -->

For the remainder of the examples for this component, assume the following declaration:

```javascript
let appTransitions = Transitions
```






## Transitions.durations

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appTransitions.durations = {
    '1200': '',
    '1150': '',
    '1100': '',
    '1050': '',
    '1000': '',
    '950': '',
    '900': '',
    '850': '',
    '800': '',
    '750': '',
    '700': '',
    '650': '',
    '600': '',
    '550': '',
    '500': '',
    '475': '',
    '450': '',
    '425': '',
    '400': '',
    '375': '',
    '350': '',
    '325': '',
    '300': '',
    '275': '',
    '250': '',
    '225': '',
    '200': '',
    '175': '',
    '150': '',
    '125': '',
    '100': '',
    '75': '',
    '50': '',
    '25': '',
}
```






## Transitions.easings

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appTransitions.easings = {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```






## Transitions.transitions

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
appTransitions.transitions = {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```






## Transitions.classes()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const transition = Transitions.classes() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.classes('colors', 'linear', '1000')
```






## Transitions.custom()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

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

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const duration = Transitions.getDurationClasses() // default is '300'
```

```javascript
const duration = Transitions.getDurationClasses('1000')
```






## Transitions.getEasingClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const easing = Transitions.getEasingClasses() // default is 'inOut'
```

```javascript
const easing = Transitions.getEasingClasses('in')
```






## Transitions.getTransitionClasses()

<!-- #TODO: update doc item with type, default, descriptions, and example subhead -->

```javascript
const transition = Transitions.getTransitionClasses() // default is 'default'
```

```javascript
const transition = Transitions.getTransitionClasses('colors')
```









## Module Code

<<< @/../src/configs/Transitions.js






<DocsPackageVersion/>



