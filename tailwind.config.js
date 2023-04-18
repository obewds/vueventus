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
            animation: require(vvPath + 'extend.animation.json'),
            keyframes: require(vvPath + 'extend.keyframes.json'),
            maxWidth: require(vvPath + 'extend.maxWidth.json'),
            rotate: require(vvPath + 'extend.rotate.json'),
            scale: require(vvPath + 'extend.scale.json'),
            transitionDuration: require(vvPath + 'extend.transitionDuration.json'),
            width: require(vvPath + 'extend.width.json'),
        },
        colors: require(vvPath + 'app.color.data.json'),
        fontSize: require(vvPath + 'theme.fontSize.json'),
        listStyleType: require(vvPath + 'theme.listStyleType.json'),
        opacity: require(vvPath + 'theme.opacity.json'),
        screens: require(vvPath + 'theme.screens.json'),
    },

    variants: {
        extend: {
            opacity: ['disabled']
        },
        scrollbar: ['dark']
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/line-clamp'), // line-clamp plugin added to twcss core in v3.3
        require('tailwind-scrollbar'),
        require('@headlessui/tailwindcss'),
    ],
}
