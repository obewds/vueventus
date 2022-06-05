// ./docs/.vitepress/config.js

import { resolve } from 'path'

module.exports = {

    base: '/vueventus/',
    lang: 'en-US',
    title: 'VueVentus Docs',
    titleTemplate: 'VueVentus Modular Components Design System',
    description: 'A documentation site for the VueVentus component design system',
    lastUpdated: true,

    markdown: {
        lineNumbers: true,
        config: (md) => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-include'), resolve(__dirname))
        },
    },

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


function mainNav() {
    return [
        { text: "Home", link: "/" },
        { text: "Guides", link: "/guides/", activeMatch: '/guides/' },
        { text: "Modules", link: "/modules/", activeMatch: '/modules/' },
        { text: "Components", link: "/components/", activeMatch: '/compoents/' },
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
            text: 'JSON Data Modules',
            collapsible: true,
            items: [
                { text: 'JSON Data Modules', link: '/modules/data/' },
                { text: 'Theme Extenders', link: '/modules/data/theme-extenders' },
                { text: 'Theme Additions', link: '/modules/data/theme-additions' },
                { text: 'App Color Data', link: '/modules/data/app-color-data' },
            ]
        },{
            text: 'Config Modules',
            collapsible: true,
            items: [
                { text: 'Config Modules', link: '/modules/' },
                { text: 'Buttons', link: '/modules/buttons' },
                { text: 'Transitions', link: '/modules/transitions' },
                { text: 'VvConfig', link: '/modules/vv-config' },
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
                { text: 'TextDefault', link: '/modules/palettes/text-default' },
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
                { text: 'TextDefault', link: '/modules/palettes/text-default' },
            ]
        }
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
        }
    ]
}
