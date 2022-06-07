const defaultTheme = require('tailwindcss/defaultTheme')
const vvPath = './src/data/'

module.exports = {

    darkMode: 'class',

    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./docs/**/*.{md,html,js,vue}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            rotate: require(vvPath + 'extend.rotate.json'),
            scale: require(vvPath + 'extend.scale.json'),
            transitionDuration: require(vvPath + 'extend.transitionDuration.json'),
            width: require(vvPath + 'extend.width.json'),
            maxWidth: require(vvPath + 'extend.maxWidth.json'),
        },
        screens: require(vvPath + 'theme.screens.json'),
        fontSize: require(vvPath + 'theme.fontSize.json'),
        listStyleType: require(vvPath + 'theme.listStyleType.json'),
        opacity: require(vvPath + 'theme.opacity.json'),
        colors: require(vvPath + 'app.color.data.json'),
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
