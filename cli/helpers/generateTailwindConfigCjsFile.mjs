// ./cli/helpers/generateTailwindConfigCjsFile.mjs

export default function (isSsgBool = false) {

    let line = isSsgBool === true ? '"./src/**/*.{md,html,vue,js,ts,jsx,tsx}",' : '"./src/**/*.{vue,js,ts,jsx,tsx}",'

    const output = `// ./tailwind.config.cjs

const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './node_modules/@obewds/vueventus/dist/data/'

module.exports = {

    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        ${line}
        // Include VueVentus default TWCSS classes (for prototyping):
        "./node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: require(vvPath + 'extend.animation.json'),
            keyframes: require(vvPath + 'extend.keyframes.json'),
            maxWidth: require(vvPath + 'extend.maxWidth.json'),
            rotate: require(vvPath + 'extend.rotate.json'),
            scale: require(vvPath + 'extend.scale.json'),
            transitionDuration: require(vvPath + 'extend.transitionDuration.json'),
            width: require(vvPath + 'extend.width.json'),
        },
        // colors: require(vvPath + 'app.color.data.json'), // VueVentus Default Color Codes
        colors: require('./src/app.colors.json'),
        fontSize: require(vvPath + 'theme.fontSize.json'),
        listStyleType: require(vvPath + 'theme.listStyleType.json'),
        opacity: require(vvPath + 'theme.opacity.json'),
        screens: require(vvPath + 'theme.screens.json'),
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
    

`

    return output
    
}
