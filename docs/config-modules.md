# Config Modules

Config Modules keep reusable and customizable groups of Tailwind CSS classes for use in element, component, and layout levels of an application.

<br>



## Transitions

The Transitions Config Module provides Tailwind CSS transition orientated classes using a collection of methods such as `.classes()`, `.custom()`, `.getDurationClasses()`, `.getEasingClasses()` and `.getTransitionClasses()`

### Import

```javascript
import { Transitions } from '@obewds/vueventus'
```

### .classes()

```javascript
const transition = Transitions.classes()
const transitionColorsSlow = Transitions.classes('colors', 'linear', '1000')
```

### .custom()

```javascript
const transition = Transitions.custom()
const transitionColorsSlow = Transitions.custom({
    transitions: 'colors',
    easings: 'linear',
    durations: '1000'
})
```

### .getDurationClasses()

```javascript
const duration = Transitions.getDurationClasses()
const durationSlow = Transitions.getDurationClasses('1000')
```

### .getEasingClasses()

```javascript
const easing = Transitions.getEasingClasses()
const easingIn = Transitions.getEasingClasses('in')
```

### .getTransitionClasses()

```javascript
const transition = Transitions.getTransitionClasses()
const transitionColors = Transitions.getTransitionClasses('colors')
```

### Module

<<< @/../src/configs/Transitions.js

<br>



