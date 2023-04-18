// ./cli/generators/tailwindConfigTsNuxtFile.mjs

export default function () {

const output = `// ./tailwind.config.ts

import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import appColorsJson from './app.colors.json'

import extendAnimationJson from './node_modules/@obewds/vueventus/dist/data/extend.animation.json'
import extendKeyframesJson from './node_modules/@obewds/vueventus/dist/data/extend.keyframes.json'
import extendMaxWidthJson from './node_modules/@obewds/vueventus/dist/data/extend.maxWidth.json'
import extendRotateJson from './node_modules/@obewds/vueventus/dist/data/extend.rotate.json'
import extendScaleJson from './node_modules/@obewds/vueventus/dist/data/extend.scale.json'
import extendTransitionDurationJson from './node_modules/@obewds/vueventus/dist/data/extend.transitionDuration.json'
import extendWidthJson from './node_modules/@obewds/vueventus/dist/data/extend.width.json'

import themeFontSizeJson from './node_modules/@obewds/vueventus/dist/data/theme.fontSize.json'
import themeListStyleTypeJson from './node_modules/@obewds/vueventus/dist/data/theme.listStyleType.json'
import themeOpacityJson from './node_modules/@obewds/vueventus/dist/data/theme.opacity.json'
import themeScreensJson from './node_modules/@obewds/vueventus/dist/data/theme.screens.json'


export default <Partial<Config>>{
    darkMode: 'class',
    content: [
        // these paths should already be included by @nuxtjs/tailwindcss
        // './components/**/*.{vue,js,ts}',
        // './layouts/**/*.vue',
        // './pages/**/*.vue',
        // './composables/**/*.{js,ts}',
        // './plugins/**/*.{js,ts}',
        // './App.{js,ts,vue}',
        // './app.{js,ts,vue}',
        // './Error.{js,ts,vue}',
        // './error.{js,ts,vue}',
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        './node_modules/@obewds/vueventus/**/*.{vue,js,ts,jsx,tsx,json}',
        './app.vv.ts',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                heading: ['Nunito', ...defaultTheme.fontFamily.sans],
                body: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            animation: extendAnimationJson,
            keyframes: extendKeyframesJson,
            maxWidth: extendMaxWidthJson,
            rotate: extendRotateJson,
            scale: extendScaleJson,
            transitionDuration: extendTransitionDurationJson,
            width: extendWidthJson,
        },
        colors: appColorsJson,
        fontSize: {
            "5xs": [themeFontSizeJson['5xs'][0], themeFontSizeJson['5xs'][1]],
            "4xs": [themeFontSizeJson['4xs'][0], themeFontSizeJson['4xs'][1]],
            "3xs": [themeFontSizeJson['3xs'][0], themeFontSizeJson['3xs'][1]],
            "2xs": [themeFontSizeJson['2xs'][0], themeFontSizeJson['2xs'][1]],
            "xxs": [themeFontSizeJson['xxs'][0], themeFontSizeJson['xxs'][1]],
            "xs": [themeFontSizeJson['xs'][0], themeFontSizeJson['xs'][1]],
            "sm": [themeFontSizeJson['sm'][0], themeFontSizeJson['sm'][1]],
            "tiny": [themeFontSizeJson['tiny'][0], themeFontSizeJson['tiny'][1]],
            "base": [themeFontSizeJson['base'][0], themeFontSizeJson['base'][1]],
            "md": [themeFontSizeJson['md'][0], themeFontSizeJson['md'][1]],
            "lg": [themeFontSizeJson['lg'][0], themeFontSizeJson['lg'][1]],
            "xl": [themeFontSizeJson['xl'][0], themeFontSizeJson['xl'][1]],
            "xxl": [themeFontSizeJson['xxl'][0], themeFontSizeJson['xxl'][1]],
            "2xl": [themeFontSizeJson['2xl'][0], themeFontSizeJson['2xl'][1]],
            "3xl": [themeFontSizeJson['3xl'][0], themeFontSizeJson['3xl'][1]],
            "4xl": [themeFontSizeJson['4xl'][0], themeFontSizeJson['4xl'][1]],
            "5xl": [themeFontSizeJson['5xl'][0], themeFontSizeJson['5xl'][1]],
            "6xl": [themeFontSizeJson['6xl'][0], themeFontSizeJson['6xl'][1]],
            "7xl": [themeFontSizeJson['7xl'][0], themeFontSizeJson['7xl'][1]],
            "8xl": [themeFontSizeJson['8xl'][0], themeFontSizeJson['8xl'][1]],
            "9xl": [themeFontSizeJson['9xl'][0], themeFontSizeJson['9xl'][1]],
            "10xl": [themeFontSizeJson['10xl'][0], themeFontSizeJson['10xl'][1]],
            "11xl": [themeFontSizeJson['11xl'][0], themeFontSizeJson['11xl'][1]],
            "12xl": [themeFontSizeJson['12xl'][0], themeFontSizeJson['12xl'][1]],
            // "5xs": ["0.35rem", { "lineHeight": "0.5rem" }],
            // "4xs": ["0.45rem", { "lineHeight": "0.9rem" }],
            // "3xs": ["0.55rem", { "lineHeight": "1rem" }],
            // "2xs": ["0.65rem", { "lineHeight": "1rem" }],
            // "xxs": ["0.65rem", { "lineHeight": "1rem" }],
            // "xs": ["0.75rem", { "lineHeight": "1.125rem" }],
            // "sm": ["0.875rem", { "lineHeight": "1.25rem" }],
            // "tiny": ["0.875rem", { "lineHeight": "1.375rem" }],
            // "base": ["1rem", { "lineHeight": "1.5rem" }],
            // "md": ["1rem", { "lineHeight": "1.5rem" }],
            // "lg": ["1.125rem", { "lineHeight": "1.75rem" }],
            // "xl": ["1.25rem", { "lineHeight": "1.75rem" }],
            // "xxl": ["1.5rem", { "lineHeight": "2rem" }],
            // "2xl": ["1.5rem", { "lineHeight": "2rem" }],
            // "3xl": ["1.875rem", { "lineHeight": "2.25rem" }],
            // "4xl": ["2.25rem", { "lineHeight": "2.5rem" }],
            // "5xl": ["2.5rem", { "lineHeight": "2.875rem" }],
            // "6xl": ["2.875rem", { "lineHeight": "3.25rem" }],
            // "7xl": ["3.25rem", { "lineHeight": "3.5rem" }],
            // "8xl": ["3.5rem", { "lineHeight": "3.875rem" }],
            // "9xl": ["3.875rem", { "lineHeight": "4.25rem" }],
            // "10xl": ["4.25rem", { "lineHeight": "4.5rem" }],
            // "11xl": ["4.5rem", { "lineHeight": "4.875rem" }],
            // "12xl": ["4.875rem", { "lineHeight": "5.25rem" }],
        },
        listStyleType: themeListStyleTypeJson,
        opacity: themeOpacityJson,
        screens: themeScreensJson,
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

`

return output
    
}
