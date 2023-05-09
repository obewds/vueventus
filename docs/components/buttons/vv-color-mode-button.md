---
title: VvColorModeButton Component
---

<script setup>
    import DocsPackageVersion from '../../../src/views/compos/DocsPackageVersion.vue'
    import { VvColorModeButton } from '../../../src/index'
    import { VvConfig } from '../../../src/index'
</script>

<!-- TODO: Add semicolons to all sub-sub heads to > ### Syntax: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Result: -->
<!-- TODO: Add semicolons to all sub-sub heads to > ### Downstream Typescript Prop Typing: -->



# {{ $frontmatter.title }}

The {{ $frontmatter.title }} provides a `localStorage()` based solution to quickly implement and manage a user's dark or light color mode setting (with optional unnoticeable faux-persistence) for a VueVentus powered application.










## Import

To import a {{ $frontmatter.title }} installed by the [vueventus CLI](/guides/vueventus-cli) or [vv-update CLI](/guides/vv-update-cli):

```javascript
// ./src/components/SomeComponent.vue
import VvColorModeButton from './vv/buttons/VvColorModeButton.vue'
```

!!!include(snippets/vueVentusCliComponentsTip.md)!!!

Alternatively, you can install the raw library {{ $frontmatter.title }} with:

```javascript
import { VvColorModeButton } from '@obewds/vueventus'
```

!!!include(snippets/vueVentusRawComposTip.md)!!!

!!!include(snippets/differenceBetweenRawAndCliTip.md)!!!









## Manual Installation

Manually installing the {{ $frontmatter.title }} requires a little bit of extra work due to the nature of Color Modes and JavaScript applications in browser contexts.

To get this component working without any [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), you'll want to access your app's main/base HTML structure's `<head>` tag, and add a script. This script needs to run before the body is parsed and before the Vue app runs, to synchronize the user's session and any already existing `localStorage` color mode data a user may have already from this setup.

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
                    document.documentElement.style.color = '#e1e1e3';
                } else {
                    localStorage.setItem('colorMode', 'light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.backgroundColor = '#e1e1e3';
                    document.documentElement.style.color = '#242426';
                }
            }
        </script>

    </head>

    <body>...</body>

</html>
```

Additionally and for completeness when installing of the {{ $frontmatter.title }}, after adding the script above to a code base there's still one more important step to do.

It's generally a good idea to go ahead and add an additional `localStorage` check within Vue, so Vue and the application both match what the script above adds to `localStorage` on page load, like this:

```html
<script setup lang="ts">

    // ./src/App.vue

    import VvColorModeButton from './components/vv/buttons/VvColorModeButton.vue'

    const colorMode = localStorage && localStorage.getItem('colorMode') ? localStorage.getItem('colorMode') : 'light'

</script>

<template>

    <main>

        <aside class="fixed bottom-0 right-0 text-right z-40">

            <nav class="relative bottom-0 pb-3 pr-4">

                <div class="flex flex-col justify-end space-y-3">

                    <VvColorModeButton :mode="(colorMode as string)"/>

                </div>

            </nav>

        </aside>

    </main>

</template>
```







## Prop: color
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvColorModeButton.color }}"`**

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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: debug
Type: **`Boolean`**  
Default: **`{{ VvConfig.defaults.VvColorModeButton.debug }}`**

The {{ $frontmatter.title }} `debug` prop toggles the debugging state of a component instance. When in debugging mode, each component instance prop value can be viewed through `data-vv-color-mode-button-` prefixed HTML attributes.

### Syntax

```html
<VvColorModeButton :debug="true"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :debug="true"/>
</div>








## Prop: groundDark

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.dark.ground }}"`**

The {{ $frontmatter.title }} `groundDark` prop sets the component instance class(es) for the background color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton ground-dark="bg-gray-900"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-dark="VvConfig.colorModes.dark.ground" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: groundDarkHex

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.dark.hex }}"`**

The {{ $frontmatter.title }} `groundDarkHex` prop sets the component instance color code for the background color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton ground-dark-hex="#242426"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-dark-hex="VvConfig.colorModes.dark.hex" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: groundLight

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.light.ground }}"`**

The {{ $frontmatter.title }} `groundLight` prop sets the component instance class(es) for the background color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton ground-light="bg-gray-100"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-light="VvConfig.colorModes.light.ground" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: groundLightHex

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.light.hex }}"`**

The {{ $frontmatter.title }} `groundLightHex` prop sets the component instance color code for the background color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton ground-light-hex="#e1e1e3"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :ground-light-hex="VvConfig.colorModes.light.hex" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!







## Prop: mode
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidColorModes Module](/components/prop-validators#validcolormodes)  
Default: **`"{{ VvConfig.defaults.VvColorModeButton.mode }}"`**

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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!







## Prop: palette
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvColorModeButton.palette }}"`**

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

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: size
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Default: **`"{{ VvConfig.defaults.VvColorModeButton.size }}"`**

The {{ $frontmatter.title }} `size` prop sets the component instance size-based classes which in the context of buttons typically involves padding and font size atomic classes.

### Syntax

```html
<VvColorModeButton size="xl"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :size="VvConfig.defaults.VvColorModeButton.size" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!








## Prop: textDark

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.dark.text }}"`**

The {{ $frontmatter.title }} `textDark` prop sets the component instance class(es) for the text color of the application when in the dark color mode state.

### Syntax

```html
<VvColorModeButton text-dark="text-gray-100"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :text-dark="VvConfig.colorModes.dark.text" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: textLight

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.light.text }}"`**

The {{ $frontmatter.title }} `textLight` prop sets the component instance class(es) for the text color of the application when in the light color mode state.

### Syntax

```html
<VvColorModeButton text-light="text-gray-900"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :text-light="VvConfig.colorModes.light.text" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: titleDark

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.dark.title }}"`**

The {{ $frontmatter.title }} `titleDark` prop sets the component instance title attribute string of the component when the app is currently in the dark color mode state.

!!!include(snippets/lightModeDarkModeTitleTip.md)!!!

### Syntax

```html
<VvColorModeButton title-dark="Custom Enable Light Mode"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :title-dark="'Custom ' + VvConfig.colorModes.dark.title" class="border-solid"/>
</div>

!!!include(snippets/colorCodeExamplesWarning.md)!!!








## Prop: titleLight

Type: **`String`**  
Default: **`"{{ VvConfig.colorModes.light.title }}"`**

The {{ $frontmatter.title }} `titleLight` prop sets the component instance title attribute string of the component when the app is currently in the light color mode state.

!!!include(snippets/lightModeDarkModeTitleTip.md)!!!

### Syntax

```html
<VvColorModeButton title-light="Custom Enable Dark Mode"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton :title-light="'Custom ' + VvConfig.colorModes.light.title" class="border-solid"/>
</div>


!!!include(snippets/colorCodeExamplesWarning.md)!!!










## Prop: type
<!-- TODO: change this type to new PropType keyof syntax -->
Type: **`String`**  
Valid Values: [ValidButtonTypes Module](/components/prop-validators#validbuttontypes)  
Default: **`"{{ VvConfig.defaults.VvColorModeButton.type }}"`**

The {{ $frontmatter.title }} `type` prop sets the button HTML `type` attribute to a value that should be present in the [ValidButtonTypes Module](/components/prop-validators#validbuttontypes) to be a valid value for this component.

### Syntax

```html
<VvColorModeButton type="submit"/>
```

### Result

<div class="w-full pt-4">
    <VvColorModeButton type="submit"/>
</div>

### Typing for Downstream Component Instances
<!-- TODO: add typing use example code block for PropType keyof syntax -->
Coming Soon!










## Slot: None

::: danger NO SLOT AVAILABLE
The {{ $frontmatter.title }} does not have Vue slot option, because the component uses two [heroicons](https://heroicons.com/) and is intended to output an equal in height and width `<button>` element that toggles between two icons and leverages HTML `title` attributes to compensate for the use of non-text iconography.
:::






<DocsPackageVersion/>

