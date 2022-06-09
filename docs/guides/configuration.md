---
title: Configuration
---

<script setup>
    import DocsPackageVersion from '../../src/views/compos/DocsPackageVersion.vue'
</script>






# {{ $frontmatter.title }}

Next up, we need to configure the app's Vite config file and the app's Tailwind CSS config file. The Vite updates are for convenience and testing purposes. The Tailwind updates bring a handful of extenstions and additions to Tailwind's already awesome arsenal of atomic class name fragments.




## Tailwind Config Setup

There's a few mods to the Tailwind config file needed to open up a more "design system" configuration for your app.

To manage and maintain this, VueVentus uses JSON formatted data files as modules thanks to Node.js. 

::: tip
Feel free to read more about the [Tailwind Modules](/modules/data/) used below before proceeding. Or continue to follow the docs from here and you will get to them soon enough!
:::

Go haead and open up your app's `./tailwind.config.js` file, and add the following variables and `require()` methods:

```javascript
// ./tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './node_modules/@obewds/vueventus/src/data/'

module.exports = {

    // Enable darkMode using the 'class' option
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./docs/**/*.{md,html,js}",
        // Include VueVentus default TWCSS classes (for prototyping):
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
        // Include an app specific config file to
        // replace VueVentus default classes above:
        // "./src/app.vv.js",
    ],

    theme: {
        extend: {
            // VueVentus heading/body text fragments and format to add custom/Google fonts
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            // VueVentus TW theme extensions
            animation: require( vvPath + 'extend.animation.json' ),
            keyframes: require( vvPath + 'extend.keyframes.json' ),
            maxWidth: require( vvPath + 'extend.maxWidth.json' ),
            rotate: require( vvPath + 'extend.rotate.json' ),
            scale: require( vvPath + 'extend.scale.json' ),
            transitionDuration: require( vvPath + 'extend.transitionDuration.json' ),
            width: require( vvPath + 'extend.width.json' ),
        },
        // VueVentus TW theme overrides
        colors: require( vvPath + 'app.color.data.json' ),
        fontSize: require( vvPath + 'theme.fontSize.json' ),
        listStyleType: require( vvPath + 'theme.listStyleType.json' ),
        opacity: require( vvPath + 'theme.opacity.json' ),
        screens: require( vvPath + 'theme.screens.json' ),
    },

    variants: {
        extend: {
            // VueVentus enable disabled variants for opacity classes
            opacity: ['disabled']
        }
    },

    plugins: [
        // VueVentus deps should already be in node_modules :)
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
```






<DocsPackageVersion/>

