## Updating Tailwind's Config

There's a few mods to the Tailwind config file needed to open up a more "design system" configuration for your app. These Tailwind updates bring a handful of extensions and additions to Tailwind's already awesome arsenal of atomic class name fragments.

To manage and maintain this, VueVentus uses JSON formatted data files as modules thanks to Node.js. 

::: tip
Feel free to read more about the [Tailwind Data Modules](/modules/data/) used below before proceeding. Or continue to follow the docs from here and you will get to them soon enough!
:::

Go ahead and open up your app's `./tailwind.config.cjs` file, and add the following variables and `require()` methods:

```javascript
// ./tailwind.config.cjs

const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './node_modules/@obewds/vueventus/dist/data/'

module.exports = {

    // Enable darkMode using the 'class' option
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./docs/**/*.{md,html,js}",
        // Include VueVentus default TWCSS classes (for prototyping):
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
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
        },
        scrollbar: ['dark']
    },

    plugins: [
        // VueVentus deps should already be in node_modules :)
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
    ],
}
```
