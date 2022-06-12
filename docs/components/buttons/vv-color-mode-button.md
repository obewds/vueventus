---
title: VvColorModeButton Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvColorModeButton } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a `localStorage()` based solution to quickly implement and manage a user's dark or light color mode setting (with optional unnoticable faux-persistence) for a VueVentus powered application.









## Installation

The {{ $frontmatter.title }} requires a little bit of extra work due to the nature of Color Modes and JavaScript applications in a browser context.

To get this component working without any [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), you'll want to access your app's main/base HTML structure's `<head>` tag, and add a script. This script needs to run before the body is parsed and before the Vue app runs, to syncronize the user's session and any already existing `localStorage` data a user may have already from this component.

Here's the script that needs to be added to an app's main/base HTML:

```html
<html lang="en">

    <head>
        
        <!-- ... -->

        <!-- Color Mode Functionality -->
        <script>
            // On page load or when changing colorMode, best to add inline in `head` to avoid FOUC
            if (document && localStorage) {
                if (localStorage.colorMode === 'dark' || (!('colorMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    localStorage.setItem('colorMode', 'dark');
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.backgroundColor = '#242426';
                } else {
                    localStorage.setItem('colorMode', 'light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.backgroundColor = '#e1e1e3';
                }
            }
        </script>

    </head>

    <body>...</body>

</html>
```






## Import

```javascript
import { VvColorModeButton } from '@obewds/vueventus'
```







## Prop: color

Type: **`String`**  
Default: **`VvConfig.defaults.VvColorModeButton.color`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `color` prop sets the component instance color based both on the `color` prop and the `palette` prop value together.

### Syntax

```html
<VvColorModeButton color="primary"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :color="VvConfig.defaults.VvColorModeButton.color" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: groundDark

Type: **`String`**  
Default: **`VvConfig.colorMode.dark.ground`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `groundDark` prop sets the component instance class(es) for the background color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton ground-dark="bg-gray-900"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-dark="VvConfig.colorMode.dark.ground" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: groundDarkHex

Type: **`String`**  
Default: **`VvConfig.colorMode.dark.hex`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `groundDarkHex` prop sets the component instance color code for the background color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton ground-dark-hex="#242426"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-dark-hex="VvConfig.colorMode.dark.hex" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: groundLight

Type: **`String`**  
Default: **`VvConfig.colorMode.light.ground`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `groundLight` prop sets the component instance class(es) for the background color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton ground-light="bg-gray-100"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-light="VvConfig.colorMode.light.ground" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: groundLightHex

Type: **`String`**  
Default: **`VvConfig.colorMode.light.hex`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `groundLightHex` prop sets the component instance color code for the background color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton ground-light-hex="#e1e1e3"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-light-hex="VvConfig.colorMode.light.hex" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: mode

Type: **`String`**  
Valid Values: [ValidColorModes Module](/components/prop-validators#validcolormodes)  
Default: **`VvConfig.defaults.VvColorModeButton.mode`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `type` prop sets the button HTML `type` attribute to a value that should be present in the [ValidColorModes Module](/components/prop-validators#validcolormodes) to be a valid value for this component.

### Syntax

```html
<VvColorModeButton mode="light"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :mode="VvConfig.defaults.VvColorModeButton.mode" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: palette

Type: **`String`**  
Default: **`VvConfig.defaults.VvColorModeButton.palette`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `palette` prop sets the component instance color based both on the `palette` prop and the `color` prop values together.

### Syntax

```html
<VvColorModeButton palette="solid"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :palette="VvConfig.defaults.VvColorModeButton.palette" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: size

Type: **`String`**  
Default: **`VvConfig.defaults.VvColorModeButton.size`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes with in the context of buttons typically involves padding and font size atomic classes.

### Syntax

```html
<VvColorModeButton size="xl"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :size="VvConfig.defaults.VvColorModeButton.size" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: textDark

Type: **`String`**  
Default: **`VvConfig.colorMode.dark.text`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `textDark` prop sets the component instance class(es) for the text color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton text-dark="text-gray-100"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :text-dark="VvConfig.colorMode.dark.text" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: textLight

Type: **`String`**  
Default: **`VvConfig.colorMode.light.text`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `textLight` prop sets the component instance class(es) for the text color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton text-light="text-gray-900"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :text-light="VvConfig.colorMode.light.text" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: titleDark

Type: **`String`**  
Default: **`VvConfig.colorMode.dark.title`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `titleDark` prop sets the component instance title attribute string of the component when the app is currently in the dark color mode state.

!!!include(snippets/lightModeDarkModeTitleTip.md)!!!

### Syntax

```html
<VvColorModeButton title-dark="Custom Enable Light Mode"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :title-dark="'Custom ' + VvConfig.colorMode.dark.title" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: titleLight

Type: **`String`**  
Default: **`VvConfig.colorMode.light.title`**

<!-- #TODO: change default to dynamic vue default value and instead link to VvConfig page with code string -->

The {{ $frontmatter.title }} `titleLight` prop sets the component instance title attribute string of the component when the app is currently in the light color mode state.

!!!include(snippets/lightModeDarkModeTitleTip.md)!!!

### Syntax

```html
<VvColorModeButton title-light="Custom Enable Dark Mode"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :title-light="'Custom ' + VvConfig.colorMode.light.title" class="border-solid"/>
</div>


!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because the component uses two [heroicons](https://heroicons.com/) and is intended to output an equal in height and width `<button>` element that toggles between two icons and leverages HTML `title` attributes to compensate for the use of non-text iconography.
:::






<DocsPackageVersion/>

