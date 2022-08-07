---
title: Transitions Config Module
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import Transitions from '../../../src/configs/Transitions'
</script>







# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's default/prototypal Tailwind CSS classes for CSS transitions throughout your application.








## app.vv Use

You'll usually work with the {{ $frontmatter.title }} after it's already been merged into VueVentus VvConfig data.

Here's what that generally looks like in practice in a real world app context:

```javascript
// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

appVv.transitions.someProperty = 'some-value'

// ...

export default appVv
```








## Import

However, if you need to import the compiled library version of the {{ $frontmatter.title }}, you can use:

```javascript
import { Transitions } from '@obewds/vueventus'
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
// ./src/app.vv.ts
appVv.transitions.durations = {
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
// ./src/app.vv.ts
appVv.transitions.durations['1200'] = ''
appVv.transitions.durations['1150'] = ''
appVv.transitions.durations['1100'] = ''
appVv.transitions.durations['1050'] = ''
appVv.transitions.durations['1000'] = ''
appVv.transitions.durations['950']  = ''
appVv.transitions.durations['900']  = ''
appVv.transitions.durations['850']  = ''
appVv.transitions.durations['800']  = ''
appVv.transitions.durations['750']  = ''
appVv.transitions.durations['700']  = ''
appVv.transitions.durations['650']  = ''
appVv.transitions.durations['600']  = ''
appVv.transitions.durations['550']  = ''
appVv.transitions.durations['500']  = ''
appVv.transitions.durations['475']  = ''
appVv.transitions.durations['450']  = ''
appVv.transitions.durations['425']  = ''
appVv.transitions.durations['400']  = ''
appVv.transitions.durations['375']  = ''
appVv.transitions.durations['350']  = ''
appVv.transitions.durations['325']  = ''
appVv.transitions.durations['300']  = ''
appVv.transitions.durations['275']  = ''
appVv.transitions.durations['250']  = ''
appVv.transitions.durations['225']  = ''
appVv.transitions.durations['200']  = ''
appVv.transitions.durations['175']  = ''
appVv.transitions.durations['150']  = ''
appVv.transitions.durations['125']  = ''
appVv.transitions.durations['100']  = ''
appVv.transitions.durations['75']   = ''
appVv.transitions.durations['50']   = ''
appVv.transitions.durations['25']   = ''
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
// ./src/app.vv.ts
appVv.transitions.easings = {
    'linear': '',
        'in': '',
       'out': '',
     'inOut': '',
}
```

```javascript
// ./src/app.vv.ts
appVv.transitions.easings.linear = ''
appVv.transitions.easings.in     = ''
appVv.transitions.easings.out    = ''
appVv.transitions.easings.inOut  = ''
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
// ./src/app.vv.ts
appVv.transitions.transitions = {
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
// ./src/app.vv.ts
appVv.transitions.transitions.default   = ''
appVv.transitions.transitions.all       = ''
appVv.transitions.transitions.colors    = ''
appVv.transitions.transitions.none      = ''
appVv.transitions.transitions.opacity   = ''
appVv.transitions.transitions.shadow    = ''
appVv.transitions.transitions.transform = ''
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

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.transitions.classes()">
        Default Transition
    </button>

    <button :class="appVv.transitions.classes('colors', 'linear', '1000')">
        Linear Color Transition
    </button>

</template>
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

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.transitions.custom()">
        Default Transition
    </button>

    <button :class="appVv.transitions.custom({
        transitions: 'colors',
        easings: 'linear',
        durations: '1000'
    })">
        Linear Color Transition
    </button>

</template>
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

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.transitions.getDurationClasses()">
        300ms Default Duration
    </button>

    <button :class="appVv.transitions.getDurationClasses('1000')">
       1000ms Duration
    </button>

</template>
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

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.transitions.getEasingClasses()">
        Ease-In-Out Default Easing
    </button>

    <button :class="appVv.transitions.getEasingClasses('in')">
       Ease-In Easing
    </button>

</template>
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

```html
<!-- ./src/components/SomeComponent.vue -->

<script setup lang="ts">

    import appVv from '../app.vv'
    
</script>

<template>

    <button :class="appVv.transitions.getTransitionClasses()">
        Default Transition Type
    </button>

    <button :class="appVv.transitions.getTransitionClasses('colors')">
       Transition Colors
    </button>

</template>
```









## Module Code

<<< @/../src/configs/Transitions.ts






<DocsPackageVersion/>



