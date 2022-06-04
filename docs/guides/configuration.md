# Configuration

Next up, we need to configure the app's Vite config file and the app's Tailwind CSS config file. The Vite updates are for convenience and testing purposes. The Tailwind updates bring a handful of extenstions and additions to Tailwind's already awesome arsenal of atomic class name fragments.




## Tailwind Config Setup

There's a few mods to the Tailwind config file needed to open up a more "design system" configuration for your app and to use the VueVentus default Tailwind component system to its fullest. 

Go haead and open up the `./tailwind.config.js` file and add the following variables and `require()` methods:

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
        // To include VueVentus default Tailwind CSS classes for prototyping
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
            maxWidth: require(vvPath + 'extend.maxWidth.json'),
            rotate: require(vvPath + 'extend.rotate.json'),
            scale: require(vvPath + 'extend.scale.json'),
            transitionDuration: require(vvPath + 'extend.transitionDuration.json'),
            width: require(vvPath + 'extend.width.json'),
        },
        // VueVentus TW theme overrides
        screens: require(vvPath + 'theme.screens.json'),
        fontSize: require(vvPath + 'theme.fontSize.json'),
        listStyleType: require(vvPath + 'theme.listStyleType.json'),
        opacity: require(vvPath + 'theme.opacity.json'),
        colors: require(vvPath + 'app.color.data.json'),
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

