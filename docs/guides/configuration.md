# Configuration

Documentation coming soon!




## Installing Tailwind CSS

To install Tailwind CSS, we'll be using the [Vite.js Guide](https://tailwindcss.com/docs/guides/vite) variation for this guide and example.

So from the project's root directory, run the following commands:

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

Next up, open up the generated `./tailwind.config.js` file now in the project root directory, and add the following code to include Vite/Vue files into Tailwind's parser:

```javascript
// ./tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

Next, create a new file `./src/css/tailwind.css`, and add the base Tailwind CSS directives to the file:

```css
/* ./src/css/tailwind.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next up, include the tailwind.css file into the app and Vite's build process, by opening up the `./src/main.js` file and importing the css file like so:

```javascript
import './css/tailwind.css'
```

Once everything has been added and saved, you can restart Vite and see Tailwind's effect on Vite's initial HelloWorld.vue and App.vue components with:

```bash
npm run dev
```









## Tailwind Config Setup

There's a few mods to the Tailwind config file needed to open up a more "design system" configuration for your app and to use the VueVentus default Tailwind component system to its fullest. 

Go haead and open up the `./tailwind.config.js` file and add the following mods:

```javascript
// ./tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')

const vvPath = './node_modules/@obewds/vueventus/src/data/'
const vvProtoColors = require(vvPath + 'vueventus.tw.colors.json')
const vvTwTheme = require(vvPath + 'vueventus.tw.theme.json')
const vvTwThemeExtend = require(vvPath + 'vueventus.tw.theme.extend.json')

module.exports = {

    darkMode: 'class', // Enable darkMode using the 'class' option

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}", // To include VueVentus default Tailwind CSS classes for prototyping
    ],

    theme: {
        extend: {
            fontFamily: { // This is useful for custom or Google Fonts
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            ...vvTwThemeExtend, // Include VueVentus theme extended data values
        },
        ...vvTwTheme, // Include VueVentus additional theme data values
        colors: vvProtoColors, // Use the VueVentus default colors palette
    },

    variants: {
        extend: {
            opacity: ['disabled'] // Enable disabled variants for opacity classes
        }
    },

    plugins: [ // VueVentus deps are already in node_modules :)
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
```










## Test Drive: VvButton

Now that everything is wired up, let's test drive the VvButton component.

First we'll open up the `./src/components/HelloWorld.vue` component, and import the `VvButton` component:

```html
<script setup>

    import { ref } from 'vue'
    import { VvButton } from '@obewds/vueventus'

    // ...

    const count = ref(0)

</script>
```

Next up, we can add our `VvButton` instance in the HelloWorld.vue SFC file `<template>` tag:

```html
<template>
    
    <VvButton @click="count++">
        Count: {{ count }}
    </VvButton>

</template>
```

You should now see a button with default Tailwind CSS button classes from the ButtonSolid Configs Module.

Next, let's change the color rapid protyping style:

```html
<template>
    
    <VvButton
        @click="count++"
        color="primary"
    >
        Count: {{ count }}
    
    </VvButton>

</template>
```

Looking better! Next, let's switch our primary color button to an outline button color palette:

```html
<template>
    
    <VvButton
        @click="count++"
        color="primary"
        palette="outline"
    >
        Count: {{ count }}
    
    </VvButton>

</template>
```

So that's how colors and palettes work. Palettes are overall styling groups or themes, while colors are key/value pairs where the key describes the value and the value is a group of Tailwind CSS classes. Like `color="primary"`, `color="error"` or `color="success"`, etc.

Next, let's switch back to a solid color palette by dropping the `palette` attribute (the default palette of the VvButton component is `'solid'`). And let's add some rounded corners to our solid primary button, too:

```html
<template>
    
    <VvButton
        @click="count++"
        color="primary"
        class="rounded-lg"
    >
        Count: {{ count }}
    
    </VvButton>

</template>
```

Your VvButton component instance should now be a solid primary colored button with rounded corners!

