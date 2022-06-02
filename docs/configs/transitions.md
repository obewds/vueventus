---
title: Transitions Config Module
---



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for CSS transitions throughout your application.

<br>



## Import

```javascript
import { Transitions } from '@obewds/vueventus'
```

<br>




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

<br>




## Transitions.easings

```javascript
easings: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>




## Transitions.transitions

```javascript
transitions: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>




## Transitions.classes()

```javascript
const transition = Transitions.classes() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.classes('colors', 'linear', '1000')
```

<br>




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

<br>



## Transitions.getDurationClasses()

```javascript
const duration = Transitions.getDurationClasses() // default is '300'
```

```javascript
const duration = Transitions.getDurationClasses('1000')
```

<br>




## Transitions.getEasingClasses()

```javascript
const easing = Transitions.getEasingClasses() // default is 'inOut'
```

```javascript
const easing = Transitions.getEasingClasses('in')
```

<br>




## Transitions.getTransitionClasses()

```javascript
const transition = Transitions.getTransitionClasses() // default is 'default'
```

```javascript
const transition = Transitions.getTransitionClasses('colors')
```

<br>







## Module Code

<<< @/../src/configs/Transitions.js

<br>

