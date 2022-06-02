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




## Properties

The {{ $frontmatter.title }} has the following properties:

<br>




### .durations

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




### .easings

```javascript
easings: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>




### .transitions

```javascript
transitions: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>













## Methods

The {{ $frontmatter.title }} has the following methods:

<br>




### .classes()

```javascript
const transition = Transitions.classes() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.classes('colors', 'linear', '1000')
```

<br>




### .custom()

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



### .getDurationClasses()

```javascript
const duration = Transitions.getDurationClasses() // default is '300'
```

```javascript
const duration = Transitions.getDurationClasses('1000')
```

<br>




### .getEasingClasses()

```javascript
const easing = Transitions.getEasingClasses() // default is 'inOut'
```

```javascript
const easing = Transitions.getEasingClasses('in')
```

<br>




### .getTransitionClasses()

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

