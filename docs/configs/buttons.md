---
title: Buttons Config Module
---



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} holds your application's Tailwind CSS classes for Button elements in your application, excluding color and color palette classes (see [Palette Config Modules](/configs/palettes/index) for more info about palette modules).

<br>




## Import

```javascript
import { Buttons } from '@obewds/vueventus'
```

<br>




## Buttons.blockDisplay

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.blockDisplay = ''
```

<br>




## Buttons.blockSizes

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.blockSizes = {
    '4xs': '',
    '3xs': '',
    '2xs': '',
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
}
```

<br>




## Buttons.border

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.border = ''
```

<br>




## Buttons.cursor

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.cursor = ''
```

<br>




## Buttons.disabled

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.disabled = ''
```

<br>




## Buttons.display

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.display = ''
```

<br>




## Buttons.focus

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.focus = ''
```

<br>




## Buttons.sizes

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.sizes = {
    '4xs': '',
    '3xs': '',
    '2xs': '',
    'xs': '',
    'sm': '',
    'md': '',
    'lg': '',
    'xl': '',
    '2xl': '',
    '3xl': '',
    '4xl': '',
}
```

<br>




## Buttons.text

```javascript
import { Buttons } from '@obewds/vueventus'

let appButtons = Buttons

appButtons.text = ''
```

<br>




## Buttons.base()

```javascript
const buttonBase = Buttons.base()
```

<br>




## Buttons.blockBase()

```javascript
const buttonBlockBase = Buttons.blockBase()
```

<br>




## Buttons.classes()

```javascript
const button = Buttons.classes() // default is 'md'
```

```javascript
const button = Buttons.classes('lg')
```

<br>




## Buttons.getBlockSizeClasses()

```javascript
const button = Buttons.getBlockSizeClasses() // default is 'md'
```

```javascript
const button = Buttons.getBlockSizeClasses('sm')
```

<br>




## Buttons.getSizeClasses()

```javascript
const button = Buttons.getSizeClasses() // default is 'md'
```

```javascript
const button = Buttons.getSizeClasses('sm')
```

<br>







## Module Code

<<< @/../src/configs/Buttons.js

<br>

