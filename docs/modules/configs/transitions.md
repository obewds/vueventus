---
title: Transitions Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Transitions from '../../../src/configs/Transitions'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for CSS transitions throughout your application.





## Import

To import the compiled library version of the {{ $frontmatter.title }}:

```javascript
import { Transitions } from '@obewds/vueventus'
```

To import the {{ $frontmatter.title }} directly:

```javascript
import Transitions from '@obewds/vueventus/dist/configs/Transitions.js'
```






## Transitions.durations

Type: **`Object`**  

| Transitions.durations Properties | Transitions.durations Prop Values       |
|----------------------------------|-----------------------------------------|
| `"1200"`                         | `"{{ Transitions.durations['1200'] }}"` |
| `"1150"`                         | `"{{ Transitions.durations['1150'] }}"` |
| `"1100"`                         | `"{{ Transitions.durations['1100'] }}"` |
| `"1050"`                         | `"{{ Transitions.durations['1050'] }}"` |
| `"1000"`                         | `"{{ Transitions.durations['1000'] }}"` |
| `"950"`                          | `"{{ Transitions.durations['950'] }}"`  |
| `"900"`                          | `"{{ Transitions.durations['900'] }}"`  |
| `"850"`                          | `"{{ Transitions.durations['850'] }}"`  |
| `"800"`                          | `"{{ Transitions.durations['800'] }}"`  |
| `"750"`                          | `"{{ Transitions.durations['750'] }}"`  |
| `"700"`                          | `"{{ Transitions.durations['700'] }}"`  |
| `"650"`                          | `"{{ Transitions.durations['650'] }}"`  |
| `"600"`                          | `"{{ Transitions.durations['600'] }}"`  |
| `"550"`                          | `"{{ Transitions.durations['550'] }}"`  |
| `"500"`                          | `"{{ Transitions.durations['500'] }}"`  |
| `"475"`                          | `"{{ Transitions.durations['475'] }}"`  |
| `"450"`                          | `"{{ Transitions.durations['450'] }}"`  |
| `"425"`                          | `"{{ Transitions.durations['425'] }}"`  |
| `"400"`                          | `"{{ Transitions.durations['400'] }}"`  |
| `"375"`                          | `"{{ Transitions.durations['375'] }}"`  |
| `"350"`                          | `"{{ Transitions.durations['350'] }}"`  |
| `"325"`                          | `"{{ Transitions.durations['325'] }}"`  |
| `"300"`                          | `"{{ Transitions.durations['300'] }}"`  |
| `"275"`                          | `"{{ Transitions.durations['275'] }}"`  |
| `"250"`                          | `"{{ Transitions.durations['250'] }}"`  |
| `"225"`                          | `"{{ Transitions.durations['225'] }}"`  |
| `"200"`                          | `"{{ Transitions.durations['200'] }}"`  |
| `"175"`                          | `"{{ Transitions.durations['175'] }}"`  |
| `"150"`                          | `"{{ Transitions.durations['150'] }}"`  |
| `"125"`                          | `"{{ Transitions.durations['125'] }}"`  |
| `"100"`                          | `"{{ Transitions.durations['100'] }}"`  |
| `"75"`                           | `"{{ Transitions.durations['75'] }}"`   |
| `"50"`                           | `"{{ Transitions.durations['50'] }}"`   |
| `"25"`                           | `"{{ Transitions.durations['25'] }}"`   |


### Examples

```javascript
Transitions.durations = {
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

```javascript
Transitions.durations['1200'] = ''
Transitions.durations['1150'] = ''
Transitions.durations['1100'] = ''
Transitions.durations['1050'] = ''
Transitions.durations['1000'] = ''
Transitions.durations['950'] = ''
Transitions.durations['900'] = ''
Transitions.durations['850'] = ''
Transitions.durations['800'] = ''
Transitions.durations['750'] = ''
Transitions.durations['700'] = ''
Transitions.durations['650'] = ''
Transitions.durations['600'] = ''
Transitions.durations['550'] = ''
Transitions.durations['500'] = ''
Transitions.durations['475'] = ''
Transitions.durations['450'] = ''
Transitions.durations['425'] = ''
Transitions.durations['400'] = ''
Transitions.durations['375'] = ''
Transitions.durations['350'] = ''
Transitions.durations['325'] = ''
Transitions.durations['300'] = ''
Transitions.durations['275'] = ''
Transitions.durations['250'] = ''
Transitions.durations['225'] = ''
Transitions.durations['200'] = ''
Transitions.durations['175'] = ''
Transitions.durations['150'] = ''
Transitions.durations['125'] = ''
Transitions.durations['100'] = ''
Transitions.durations['75'] = ''
Transitions.durations['50'] = ''
Transitions.durations['25'] = ''
```









## Transitions.easings

Type: **`Object`**  

| Transitions.easings Properties | Transitions.easings Prop Values      |
|--------------------------------|--------------------------------------|
| `"linear"`                     | `"{{ Transitions.easings.linear }}"` |
| `"in"`                         | `"{{ Transitions.easings.in }}"`     |
| `"out"`                        | `"{{ Transitions.easings.out }}"`    |
| `"inOut"`                      | `"{{ Transitions.easings.inOut }}"`  |

### Examples

```javascript
Transitions.easings = {
    'linear': '',
    'in': '',
    'out': '',
    'inOut': '',
}
```

```javascript
Transitions.easings.linear = ''
Transitions.easings.in = ''
Transitions.easings.out = ''
Transitions.easings.inOut = ''
```






## Transitions.transitions

Type: **`Object`**  

| Transitions.transitions Properties | Transitions.transitions Prop Values         |
|------------------------------------|---------------------------------------------|
| `"default"`                        | `"{{ Transitions.transitions.default }}"`   |
| `"all"`                            | `"{{ Transitions.transitions.all }}"`       |
| `"colors"`                         | `"{{ Transitions.transitions.colors }}"`    |
| `"none"`                           | `"{{ Transitions.transitions.none }}"`      |
| `"opacity"`                        | `"{{ Transitions.transitions.opacity }}"`   |
| `"shadow"`                         | `"{{ Transitions.transitions.shadow }}"`    |
| `"transform"`                      | `"{{ Transitions.transitions.transform }}"` |

### Examples

```javascript
Transitions.transitions = {
    'default': '',
    'all': '',
    'colors': '',
    'none': '',
    'opacity': '',
    'shadow': '',
    'transform': '',
}
```

```javascript
Transitions.transitions.default = ''
Transitions.transitions.all = ''
Transitions.transitions.colors = ''
Transitions.transitions.none = ''
Transitions.transitions.opacity = ''
Transitions.transitions.shadow = ''
Transitions.transitions.transform = ''
```








## Transitions.classes()

Returns: **`String`**  
Default: **`"{{ Transitions.classes() }}"`**

The `Transitions.classes()` method returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Transitions.getTransitionClasses()`, `Transitions.getEasingClasses()`, and `Transitions.getDurationClasses()` methods under the hood.

### Arguments

| Args           | Type      | Status     | Description |
|----------------|:---------:|:----------:|-------------|
| transitionsKey | `String`  | Optional   | Property name/key of a Transitions.transitions object |
| easingsKey     | `String`  | Optional   | Property name/key of a Transitions.easings object |
| durationsKey   | `String`  | Optional   | Property name/key of a Transitions.durations object |

The applicable values for the `transitionsKey` argument are set via the [Transitions.transitions](/modules/configs/transitions#transitions-transitions) property names/keys and atomic class values.

The applicable values for the `easingsKey` argument are set via the [Transitions.easings](/modules/configs/transitions#transitions-easings) property names/keys and atomic class values.

The applicable values for the `durationsKey` argument are set via the [Transitions.durations](/modules/configs/transitions#transitions-durations) property names/keys and atomic class values.

### Examples

```javascript
const transition = Transitions.classes() // defaults are 'default', 'inOut', '300'
```

```javascript
const transition = Transitions.classes('colors', 'linear', '1000')
```






## Transitions.custom()

Returns: **`String`**  
Default: **`"{{ Transitions.classes() }}"`**

The `Transitions.custom()` method is essentially a more verbose and declarative version of the `Transitions.classes()` method, which also returns a joined `String` of the atomic classes within the various base properties of the {{ $frontmatter.title }} object using the `Transitions.getTransitionClasses()`, `Transitions.getEasingClasses()`, and `Transitions.getDurationClasses()` methods under the hood.

### Arguments

| Args               | Type      | Status     | Description |
|--------------------|:---------:|:----------:|-------------|
| object             | `Object`  | Required   | A settings parameter object |
| object.transitions | `String`  | Optional   | Property name/key of a Transitions.transitions object |
| object.easings     | `String`  | Optional   | Property name/key of a Transitions.easings object |
| object.durations   | `String`  | Optional   | Property name/key of a Transitions.durations object |

The applicable values for the `object.transitions` settings object property are set via the [Transitions.transitions](/modules/configs/transitions#transitions-transitions) property names/keys and atomic class values.

The applicable values for the `object.easings` settings object property are set via the [Transitions.easings](/modules/configs/transitions#transitions-easings) property names/keys and atomic class values.

The applicable values for the `object.durations` settings object property are set via the [Transitions.durations](/modules/configs/transitions#transitions-durations) property names/keys and atomic class values.

### Examples

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

Returns: **`String`**  
Default: **`"{{ Transitions.getDurationClasses() }}"`**

The `Transitions.getDurationClasses()` method returns transition duration classes based on the optional argument value passed into the method. These duration related classes come from the `Transitions.durations` object property names/keys and values (of atomic classes).

### Arguments

| Args         | Type      | Status     | Description |
|--------------|:---------:|:----------:|-------------|
| durationsKey | `String`  | Optional   | Property name/key of an Transitions.durations object |

The applicable values for the `durationsKey` argument are set via the [Transitions.durations](/modules/configs/transitions#transitions-durations) property names/keys and atomic class values.

### Examples

```javascript
const duration = Transitions.getDurationClasses() // default is '300'
```

```javascript
const duration = Transitions.getDurationClasses('1000')
```






## Transitions.getEasingClasses()

Returns: **`String`**  
Default: **`"{{ Transitions.getEasingClasses() }}"`**

The `Transitions.getEasingClasses()` method returns transition duration classes based on the optional argument value passed into the method. These duration related classes come from the `Transitions.easings` object property names/keys and values (of atomic classes).

### Arguments

| Args       | Type      | Status     | Description |
|------------|:---------:|:----------:|-------------|
| easingsKey | `String`  | Optional   | Property name/key of an Transitions.easings object |

The applicable values for the `easingsKey` argument are set via the [Transitions.easings](/modules/configs/transitions#transitions-easings) property names/keys and atomic class values.

### Examples

```javascript
const easing = Transitions.getEasingClasses() // default is 'inOut'
```

```javascript
const easing = Transitions.getEasingClasses('in')
```






## Transitions.getTransitionClasses()

Returns: **`String`**  
Default: **`"{{ Transitions.getTransitionClasses() }}"`**

The `Transitions.getTransitionClasses()` method returns transition duration classes based on the optional argument value passed into the method. These duration related classes come from the `Transitions.transitions` object property names/keys and values (of atomic classes).

### Arguments

| Args           | Type      | Status     | Description |
|----------------|:---------:|:----------:|-------------|
| transitionsKey | `String`  | Optional   | Property name/key of an Transitions.transitions object |

The applicable values for the `transitionsKey` argument are set via the [Transitions.transitions](/modules/configs/transitions#transitions-transitions) property names/keys and atomic class values.

### Examples

```javascript
const transition = Transitions.getTransitionClasses() // default is 'default'
```

```javascript
const transition = Transitions.getTransitionClasses('colors')
```









## Module Code

<<< @/../src/configs/Transitions.ts






<DocsPackageVersion/>



