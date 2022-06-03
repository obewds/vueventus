# Configuration

Next up, we need to configure our app's Tailwind CSS config file to use a handful of extenstions and additions to Tailwind's awesome arsenal of atomic classes.




## Tailwind Config Setup

There's a few mods to the Tailwind config file needed to open up a more "design system" configuration for your app and to use the VueVentus default Tailwind component system to its fullest. 

Go haead and open up the `./tailwind.config.js` file and add the following variables and `require()` methods:

```javascript
// ./tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './node_modules/@obewds/vueventus/src/data/'
const vvProtoColors = require(vvPath + 'vueventus.tw.colors.json')
const vvTwTheme = require(vvPath + 'vueventus.tw.theme.json')
const vvTwThemeExtend = require(vvPath + 'vueventus.tw.theme.extend.json')

module.exports = {
    // Enable darkMode using the 'class' option
    darkMode: 'class',
    content: [
        // To include VueVentus default Tailwind CSS classes for prototyping
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
    ],
    theme: {
        extend: {
            // This is useful for custom and/or Google Fonts
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            // Include VueVentus theme extended data values
            ...vvTwThemeExtend,
        },
        // Include VueVentus additional theme data values
        ...vvTwTheme,
        // Use the VueVentus default colors palette
        colors: vvProtoColors,
    },
    variants: {
        extend: {
            // Enable disabled variants for opacity classes
            opacity: ['disabled'],
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







## Vite Config Setup

There's also a couple of tiny tweaks to make in our project's `./vite.config.js` file:

```javascript
// ./vite.config.js

// import the resolve method
import { resolve } from 'path'

export default defineConfig({
    plugins: [...],
    // add a resolve parameter/alias
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    // optionally open page on server start
    server: {
        open: true,
    },
    // for Vitest!
    test: {
        globals: true,
    },
    build: {...},
})
```

