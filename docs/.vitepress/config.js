// ./docs/.vitepress/config.js

import { resolve } from 'path'

module.exports = {

    base: '/vueventus/',
    lang: 'en-US',
    title: title(),
    titleTemplate: 'VueVentus Modular Components Design System',
    description: description(),
    lastUpdated: true,

    markdown: {
        lineNumbers: true,
        config: (md) => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-include'), resolve(__dirname))
        },
    },

    head: [
        // ['meta', {property: 'og:description', content: 'description is here...'}],
        ['meta', {name: 'twitter:title', content: title()}],
        ['meta', {name: 'og:title', content: title()}],
        ['meta', {name: 'twitter:description', content: description()}],
        ['meta', {name: 'og:description', content: description()}],
        ['meta', {name: 'twitter:card', content: 'summary'}],
        ['meta', {name: 'og:type', content: 'article'}],
        ['meta', {name: 'og:site_name', content: title()}],
        ['meta', {name: 'author', content: '@oberocks'}],
        ['meta', {name: 'twitter:creator', content: '@vueventus'}],
        ['link', {rel: 'shortcut icon', href: '/vueventus/favicon.ico'}],
        ['link', {rel: 'apple-touch-icon', sizes: '57x57', href: '/vueventus/images/favicons/apple-icon-57x57.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '60x60', href: '/vueventus/images/favicons/apple-icon-60x60.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '72x72', href: '/vueventus/images/favicons/apple-icon-72x72.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '76x76', href: '/vueventus/images/favicons/apple-icon-76x76.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '114x114', href: '/vueventus/images/favicons/apple-icon-114x114.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '120x120', href: '/vueventus/images/favicons/apple-icon-120x120.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '144x144', href: '/vueventus/images/favicons/apple-icon-144x144.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '152x152', href: '/vueventus/images/favicons/apple-icon-152x152.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/vueventus/images/favicons/apple-icon-180x180.png'}],
        ['link', {rel: 'icon', type: "image/png", sizes: '192x192', href: '/vueventus/images/favicons/android-icon-192x192.png'}],
        ['link', {rel: 'icon', type: "image/png", sizes: '32x32', href: '/vueventus/images/favicons/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: "image/png", sizes: '96x96', href: '/vueventus/images/favicons/favicon-96x96.png'}],
        ['link', {rel: 'icon', type: "image/png", sizes: '16x16', href: '/vueventus/images/favicons/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/vueventus/images/favicons/manifest.json'}],
        ['meta', {name: 'msapplication-TileColor', content: '#ffffff'}],
        ['meta', {name: 'msapplication-TileImage', content: '/vueventus/images/favicons/ms-icon-144x144.png'}],
        ['meta', {name: 'theme-color', content: '#ffffff'}],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-JBBLBN5V62'
        }],
        ['script', {}, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-JBBLBN5V62');
        `],
    ],

    themeConfig: {

        logo: 'https://obewds.github.io/vueventus/images/vue-ventus-mark-and-favicon.png',
        logoLink: 'https://obewds.github.io/vueventus/',
        lastUpdatedText: 'Last Updated',

        nav: mainNav(),

        sidebar: {
          '/guides/': sidebarGuides(),
          '/modules/': sidebarModules(),
          '/components/': sidebarComponents(),
          '/typescript/': sidebarTypescript(),
        },

        // editLink: {
        //     repo: 'obewds/vueventus',
        //     dir: 'docs',
        //     text: 'Edit this page on GitHub',
        // },

        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © 2022 Matt McT LLC'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/obewds/vueventus' },
            { icon: 'twitter', link: 'https://mobile.twitter.com/vueventus' },
        ],

        // sidebarDepth: 2,
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],

    },

}


function title() {
    return 'VueVentus Docs'
}

function description() {
    return 'A documentation site for the VueVentus component design system built for Vue.js and Tailwind CSS'
}

function mainNav() {
    return [
        // { text: "Home", link: "/" },
        { text: "Guides", link: "/guides/", activeMatch: '/guides/' },
        { text: "Modules", link: "/modules/", activeMatch: '/modules/' },
        { text: "Components", link: "/components/", activeMatch: '/components/' },
        { text: "Typescript", link: "/typescript/", activeMatch: '/typescript/' },
        // { text: 'Changelog', link: 'https://github.com/obewds/vueventus/blob/main/CHANGELOG.md' },
        // { text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
    ]
}


function sidebarGuides() {
    return [{
        text: 'Guides',
        items: [
            { text: 'Why VueVentus', link: '/guides/why-vueventus' },
            { text: 'Getting Started', link: '/guides/' },
            { text: 'vueventus CLI', link: '/guides/vueventus-cli' },
            { text: 'vv-update CLI', link: '/guides/vv-update-cli' },
            { text: 'Manual Installation', link: '/guides/manual-installation' },
            // { text: 'Install with Nuxt.js 3', link: '/guides/install-nuxt' },
            { text: 'Test Drive: VvButton', link: '/guides/test-drive-vv-button' },
        ]
    }]
}


function sidebarModules() {
    return [
        {
            text: 'Modules',
            collapsible: true,
            items: [
                { text: 'Component Modules', link: '/modules/' },
            ]
        },{
            text: 'Tailwind Data Modules',
            collapsible: true,
            items: [
                { text: 'Tailwind Data Modules', link: '/modules/data/' },
                { text: 'Theme Extenders', link: '/modules/data/theme-extenders' },
                { text: 'Theme Overrides', link: '/modules/data/theme-overrides' },
                { text: 'app.colors.json File', link: '/modules/data/app-colors-json' },
            ]
        },{
            text: 'Config Modules',
            collapsible: true,
            items: [
                { text: 'Config Modules', link: '/modules/configs/' },
                { text: 'app.vv.ts File', link: '/modules/configs/app-vv-ts' },
                { text: 'VvConfig', link: '/modules/configs/vv-config' },
                { text: 'Anchors Config', link: '/modules/configs/anchors' },
                { text: 'Buttons Config', link: '/modules/configs/buttons' },
                { text: 'ColorModes Config', link: '/modules/configs/color-modes' },
                { text: 'Inputs Config', link: '/modules/configs/inputs' },
                { text: 'Text Config', link: '/modules/configs/text' },
                { text: 'Textareas Config', link: '/modules/configs/textareas' },
                { text: 'Transitions Config', link: '/modules/configs/transitions' },
                { text: 'VvComponentDefaults', link: '/modules/configs/vv-component-defaults' },
            ]
        },{
            text: 'Palette Modules',
            collapsible: true,
            items: [
                { text: 'Palette Modules', link: '/modules/palettes/' },
                { text: 'AnchorDefault Palette', link: '/modules/palettes/anchor-default' },
                { text: 'BorderDefault Palette', link: '/modules/palettes/border-default' },
                { text: 'ButtonOutline Palette', link: '/modules/palettes/button-outline' },
                { text: 'ButtonSolid Palette', link: '/modules/palettes/button-solid' },
                { text: 'GroundConsole Palette', link: '/modules/palettes/ground-console' },
                { text: 'GroundDefault Palette', link: '/modules/palettes/ground-default' },
                { text: 'GroundMonochromatic Palette', link: '/modules/palettes/ground-monochromatic' },
                { text: 'GroundPastel Palette', link: '/modules/palettes/ground-pastel' },
                { text: 'InputDefault Palette', link: '/modules/palettes/input-default' },
                { text: 'InputUnderlined Palette', link: '/modules/palettes/input-underlined' },
                { text: 'TextDefault Palette', link: '/modules/palettes/text-default' },
            ]
        },{
            text: 'Helper Modules',
            collapsible: true,
            items: [
                { text: 'Helper Modules', link: '/modules/helpers/' },
                { text: 'camelCaseToTitleCase()', link: '/modules/helpers/camel-case-to-title-case' },
                { text: 'decimalsOnly()', link: '/modules/helpers/decimals-only' },
                { text: 'digitsOnly()', link: '/modules/helpers/digits-only' },
                { text: 'forceBodyClick()', link: '/modules/helpers/force-body-click' },
                { text: 'formatBytes()', link: '/modules/helpers/format-bytes' },
                { text: 'formatDateMMDDYYYY()', link: '/modules/helpers/format-date-mmddyyy' },
                { text: 'formatDateTraditional()', link: '/modules/helpers/format-date-traditional' },
                { text: 'formatMediaTime()', link: '/modules/helpers/format-media-time' },
                { text: 'formatNumber()', link: '/modules/helpers/format-number' },
                { text: 'getRandomInt()', link: '/modules/helpers/get-random-int' },
                { text: 'hexadecimals()', link: '/modules/helpers/hexadecimals' },
                { text: 'mergeWithVvConfig()', link: '/modules/helpers/merge-with-vv-config' },
                { text: 'monthNames()', link: '/modules/helpers/month-names' },
                { text: 'padNumber()', link: '/modules/helpers/pad-number' },
                { text: 'randomHex()', link: '/modules/helpers/random-hex' },
                { text: 'randomHexShort()', link: '/modules/helpers/random-hex-short' },
                { text: 'randomString()', link: '/modules/helpers/random-string' },
                { text: 'slugifyString()', link: '/modules/helpers/slugify-string' },
                { text: 'stringToCamelCase()', link: '/modules/helpers/string-to-camel-case' },
                { text: 'stringToFilename()', link: '/modules/helpers/string-to-filename' },
                { text: 'timestampToDateTimeAmPm()', link: '/modules/helpers/timestamp-to-date-time-am-pm' },
                { text: 'uniqueArray()', link: '/modules/helpers/unique-array' },
            ]
        },
    ]
}


function sidebarComponents() {
    return [
        {
            text: 'Components',
            collapsible: true,
            items: [
                { text: 'Vue Components', link: '/components/' },
                { text: 'Prop Validators', link: '/components/prop-validators' },
            ]
        },{
            text: 'Anchor Components',
            collapsible: true,
            items: [
                { text: 'VvAnchor', link: '/components/anchors/vv-anchor' },
            ]
        },{
            text: 'Button Components',
            collapsible: true,
            items: [
                { text: 'VvButton', link: '/components/buttons/vv-button' },
                { text: 'VvColorModeButton', link: '/components/buttons/vv-color-mode-button' },
            ]
        },{
            text: 'Element Components',
            collapsible: true,
            items: [
                { text: 'VvEl', link: '/components/elements/vv-el' },
            ]
        },{
            text: 'Input Components',
            collapsible: true,
            items: [
                { text: 'VvInput', link: '/components/inputs/vv-input' },
            ]
        },{
            text: 'List Components',
            collapsible: true,
            items: [
                { text: 'VvListItem', link: '/components/lists/vv-list-item' },
            ]
        },{
            text: 'Logo Components',
            collapsible: true,
            items: [
                { text: 'ObeKnockoutMark', link: '/components/logos/obe-knockout-mark' },
                { text: 'VueVentusLogoText', link: '/components/logos/vueventus-logo-text' },
                { text: 'VueVentusSpinningMark', link: '/components/logos/vueventus-spinning-mark' },
            ]
        },{
            text: 'Textarea Components',
            collapsible: true,
            items: [
                { text: 'VvTextarea', link: '/components/textareas/vv-textarea' },
            ]
        }
    ]
}


function sidebarTypescript() {
    return [{
        text: 'Typescript',
        items: [
            { text: 'Typescript Modules', link: '/typescript/' },
            { text: 'Types', link: '/typescript/types' },
            { text: 'Interfaces', link: '/typescript/interfaces' },
        ]
    }]
}
