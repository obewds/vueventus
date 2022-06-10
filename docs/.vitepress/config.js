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
        },

        editLink: {
            repo: 'obewds/vueventus',
            dir: 'docs',
            text: 'Edit this page on GitHub',
        },

        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © 2022 Matt McT LLC'
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/obewds/vueventus' },
            { icon: 'twitter', link: 'https://mobile.twitter.com/obewds' },
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
        { text: "Home", link: "/" },
        { text: "Guides", link: "/guides/", activeMatch: '/guides/' },
        { text: "Modules", link: "/modules/", activeMatch: '/modules/' },
        { text: "Components", link: "/components/", activeMatch: '/components/' },
        // { text: 'Changelog', link: 'https://github.com/obewds/vueventus/blob/main/CHANGELOG.md' },
        // { text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
    ]
}


function sidebarGuides() {
    return [{
        text: 'Config',
        items: [
            { text: 'Why VueVentus', link: '/guides/why-vueventus' },
            { text: 'Getting Started', link: '/guides/' },
            { text: 'Install with Vite.js', link: '/guides/install-vite' },
            { text: 'Install with Vue CLI', link: '/guides/install-vue-cli' },
            { text: 'Install with VILT Stack', link: '/guides/install-vilt-stack' },
            { text: 'Configuration', link: '/guides/configuration' },
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
            text: 'Tailwind Modules',
            collapsible: true,
            items: [
                { text: 'Tailwind Modules', link: '/modules/data/' },
                { text: 'Theme Extenders', link: '/modules/data/theme-extenders' },
                { text: 'Theme Additions', link: '/modules/data/theme-additions' },
                { text: 'App Color Data', link: '/modules/data/app-color-data' },
            ]
        },{
            text: 'Config Modules',
            collapsible: true,
            items: [
                { text: 'Config Modules', link: '/modules/configs/' },
                { text: 'Anchors', link: '/modules/configs/anchors' },
                { text: 'Buttons', link: '/modules/configs/buttons' },
                { text: 'Inputs', link: '/modules/configs/inputs' },
                { text: 'Text', link: '/modules/configs/text' },
                { text: 'Transitions', link: '/modules/configs/transitions' },
                { text: 'VvConfig', link: '/modules/configs/vv-config' },
                { text: 'App Specific Config', link: '/modules/configs/app-specific-config' },
            ]
        },{
            text: 'Palette Modules',
            collapsible: true,
            items: [
                { text: 'Palette Modules', link: '/modules/palettes/' },
                { text: 'AnchorDefault', link: '/modules/palettes/anchor-default' },
                { text: 'BorderDefault', link: '/modules/palettes/border-default' },
                { text: 'ButtonOutline', link: '/modules/palettes/button-outline' },
                { text: 'ButtonSolid', link: '/modules/palettes/button-solid' },
                { text: 'GroundConsole', link: '/modules/palettes/ground-console' },
                { text: 'GroundDefault', link: '/modules/palettes/ground-default' },
                { text: 'GroundMonochromatic', link: '/modules/palettes/ground-monochromatic' },
                { text: 'GroundPastel', link: '/modules/palettes/ground-pastel' },
                { text: 'InputValidation', link: '/modules/palettes/input-validation' },
                { text: 'TextDefault', link: '/modules/palettes/text-default' },
            ]
        },{
            text: 'Helper Modules',
            collapsible: true,
            items: [
                { text: 'Helper Modules', link: '/modules/helpers/' },
                { text: 'mergeWithVvConfig()', link: '/modules/helpers/merge-with-vv-config' },
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
                { text: 'Components', link: '/components/' },
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
            text: 'Logo Components',
            collapsible: true,
            items: [
                { text: 'VueVentusLogoText', link: '/components/logos/vueventus-logo-text' },
                { text: 'VueVentusSpinningMark', link: '/components/logos/vueventus-spinning-market' },
            ]
        }
    ]
}
