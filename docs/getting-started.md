# Getting Started

Installing the VueVentus component system is easy.

<br>




## Installing Vite/Vue

For this example guide, we'll use Vite.js to install both Vite and Vue.js. So navigate to the directory where you want to begin your project in the command line console and run the vite create command:

```bash
npm create vite@latest
```

1. Enter a Project Name in the Vite CLI interface
1. Select `vue` for the framework
1. Select `vue` for the variant (VueVentus doesn't support Typescript yet)
1. `cd` into your new directory named your Project Name
1. Run the following commands:

```bash
npm install
```

```bash
npm run dev
```



<br>




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

<br>




## Installing VueVentus

With Vue and Tailwind installed, it's time to install VueVentus. From your project's root directory, you can install the VueVentus package with:

```bash
npm install @obewds/vueventus --save-dev
```

<br>




## Tailwind Setup

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

    // Enable darkMode using the 'class' option
    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        // To include VueVentus default Tailwind CSS classes for prototyping
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
    ],

    theme: {
        extend: {
            // This is useful for custom or Google Fonts
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
            opacity: ['disabled']
        }
    },

    plugins: [
        // These are VueVentus dependencies so they should be in node_modules already :)
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
```

<br>



