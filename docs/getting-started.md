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
const prototypeVvColors = require('./node_modules/@obewds/vueventus/src/data/vueventus.tw.colors.json')

module.exports = {

    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        // To include VueVentus default Tailwind CSS classes for prototyping
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            rotate: {
                '10': '10deg',
                '20': '20deg',
                '30': '30deg',
                '40': '40deg',
                '50': '50deg',
                '60': '60deg',
                '70': '70deg',
                '80': '80deg',
                '90': '90deg',
                '100': '100deg',
                '110': '110deg',
                '120': '120deg',
                '130': '130deg',
                '140': '140deg',
                '150': '150deg',
                '160': '160deg',
                '170': '170deg',
                '180': '180deg',
                '190': '190deg',
                '200': '200deg',
                '210': '210deg',
                '220': '220deg',
                '230': '230deg',
                '240': '240deg',
                '250': '250deg',
                '260': '260deg',
                '270': '270deg',
                '280': '280deg',
                '290': '290deg',
                '300': '300deg',
                '310': '310deg',
                '320': '320deg',
                '330': '330deg',
                '340': '340deg',
                '350': '350deg',
                '360': '360deg'
            },
            scale: {
                '91': '0.91',
                '92': '0.92',
                '93': '0.93',
                '94': '0.94',
                '96': '0.96',
                '97': '0.97',
                '98': '0.98',
                '99': '0.99',
                '101': '1.01',
                '102': '1.02',
                '103': '1.03',
                '104': '1.04',
                '106': '1.06',
                '107': '1.07',
                '108': '1.08',
                '109': '1.09',
            },
            transitionDuration: {
                '25': '25ms',
                '50': '50ms',
                '125': '125ms',
                '175': '175ms',
                '225': '225ms',
                '250': '250ms',
                '275': '275ms',
                '325': '325ms',
                '350': '350ms',
                '375': '375ms',
                '425': '425ms',
                '450': '450ms',
                '475': '475ms',
                '550': '550ms',
                '600': '600ms',
                '650': '650ms',
                '750': '750ms',
                '800': '800ms',
                '850': '850ms',
                '900': '900ms',
                '950': '950ms',
                '1050': '1050ms',
                '1100': '1100ms',
                '1150': '1150ms',
                '1200': '1200ms',
            },
            width: {
                '0-percent': '0%',
                '5-percent': '5%',
                '10-percent': '10%',
                '15-percent': '15%',
                '20-percent': '20%',
                '25-percent': '25%',
                '30-percent': '30%',
                '35-percent': '35%',
                '40-percent': '40%',
                '45-percent': '45%',
                '50-percent': '50%',
                '55-percent': '55%',
                '60-percent': '60%',
                '65-percent': '65%',
                '70-percent': '70%',
                '75-percent': '75%',
                '80-percent': '80%',
                '85-percent': '85%',
                '90-percent': '90%',
                '95-percent': '95%',
                '100-percent': '100%'
            },
            maxWidth: {
                '5': '5%',
                '10': '10%',
                '15': '15%',
                '20': '20%',
                '25': '25%',
                '30': '30%',
                '35': '35%',
                '40': '40%',
                '45': '45%',
                '50': '50%',
                '55': '55%',
                '60': '60%',
                '65': '65%',
                '70': '70%',
                '75': '75%',
                '80': '80%',
                '85': '85%',
                '90': '90%',
                '95': '95%',
                '100': '100%'
            },
        },
        screens: {
            'xs': '440px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontSize: {
            '5xs': '0.35rem',
            '4xs': '0.45rem',
            '3xs': '0.55rem',
            '2xs': '0.65rem',
            'xxs': '0.65rem',
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'md': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            'xxl': '1.5rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
            '8xl': '6rem',
            '9xl': '7rem',
            '10xl': '8rem',
            '11xl': '9rem',
            '12xl': '10rem',
        },
        listStyleType: {
            none: 'none',
            circle: 'circle',
            disc: 'disc',
            decimal: 'decimal',
            square: 'square',
            lowerRoman: 'lower-roman',
            upperRoman: 'upper-roman',
        },
        opacity: {
            '0': '0',
            '5': '.05',
            '10': '.1',
            '15': '.15',
            '20': '.2',
            '25': '.25',
            '30': '.3',
            '35': '.35',
            '40': '.4',
            '45': '.45',
            '50': '.5',
            '55': '.55',
            '60': '.6',
            '65': '.65',
            '70': '.7',
            '75': '.75',
            '80': '.8',
            '85': '.85',
            '90': '.9',
            '95': '.95',
            '100': '1',
        },
        // To include the VueVentus prototyping colors palette
        colors: prototypeVvColors,
    },

    variants: {
        extend: {
            opacity: ['disabled']
        }
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
```

<br>



