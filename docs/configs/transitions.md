# Transitions

The Transitions Config Module provides Tailwind CSS transition orientated classes using a collection of methods such as `.classes()`, `.custom()`, `.getDurationClasses()`, `.getEasingClasses()` and `.getTransitionClasses()`

<br>



## Import

```javascript
import { Transitions } from '@obewds/vueventus'
```

<br>




## .classes()

```javascript
const transition = Transitions.classes()
const transitionColorsSlow = Transitions.classes('colors', 'linear', '1000')
```

<br>




## .custom()

```javascript
const transition = Transitions.custom()
const transitionColorsSlow = Transitions.custom({
    transitions: 'colors',
    easings: 'linear',
    durations: '1000'
})
```

<br>




## .durations

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




## .easings

```javascript
easings: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>



## .getDurationClasses()

```javascript
const duration = Transitions.getDurationClasses()
const durationSlow = Transitions.getDurationClasses('1000')
```

<br>




## .getEasingClasses()

```javascript
const easing = Transitions.getEasingClasses()
const easingIn = Transitions.getEasingClasses('in')
```

<br>




## .getTransitionClasses()

```javascript
const transition = Transitions.getTransitionClasses()
const transitionColors = Transitions.getTransitionClasses('colors')
```

<br>




## .transitions

```javascript
transitions: {
    linear: '',
    in: '',
    out: '',
    inOut: '',
}
```

<br>




## Module

<<< @/../src/configs/Transitions.js

<br>

