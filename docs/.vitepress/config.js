// ./docs/.vitepress/config.js

import { resolve } from 'path'

// const include = require('markdown-it-include')

module.exports = {
    base: '/vueventus/',
    title: 'VueVentus Docs',
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
        logoLink: '/vueventus/',
        lastUpdatedText: 'Last Updated',
        nav: [
            { text: "Home", link: "/" },
            // { text: "Get Started", link: "/getting-started" },
            { text: "Guides", link: "/guides/" },
            { text: "Configs", link: "/modules/" },
            { text: "Palettes", link: "/modules/palettes/" },
            { text: "Components", link: "/components/" },
            // { text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
            // { text: "GitHub", link: "https://github.com/obewds/vueventus" },
        ],
        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © 2022 Matt McT LLC'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/obewds/vueventus' },
            { icon: 'twitter', link: 'https://mobile.twitter.com/obewds' },
        ],
        sidebar: [
            {
                text: 'Guides',
                collapsible: true,
                items: [
                    { text: 'Getting Started', link: '/guides/' },
                    { text: 'Install with Vite.js', link: '/guides/install-vite' },
                    { text: 'Install with Vue CLI', link: '/guides/install-vue-cli' },
                    { text: 'Install with VILT Stack', link: '/guides/install-vilt' },
                    { text: 'Configuration', link: '/guides/configuration' },
                    { text: 'Test Drive: VvButton', link: '/guides/test-drive-vv-button' },
                ],
            },{
                text: 'JSON Data Modules',
                collapsible: true,
                items: [
                    { text: 'JSON Data Modules', link: '/data/' },
                    { text: 'Theme Extenders', link: '/data/theme-extenders' },
                    { text: 'Theme Additions', link: '/data/theme-additions' },
                    { text: 'App Color Data', link: '/data/app-color-data' },
                ],
            },{
                text: 'Config Modules',
                collapsible: true,
                items: [
                    { text: 'Config Modules', link: '/modules/' },
                    { text: 'Buttons', link: '/modules/buttons' },
                    { text: 'Transitions', link: '/modules/transitions' },
                    { text: 'VvConfig', link: '/modules/vv-config' },
                ],
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
                ],
            },{
                text: 'Components',
                collapsible: true,
                items: [
                    { text: 'Components', link: '/components/' },
                ],
            },{
                text: 'Button Components',
                collapsible: true,
                items: [
                    { text: 'VvButton', link: '/components/buttons/vv-button' },
                    { text: 'VvColorModeButton', link: '/components/buttons/vv-color-mode-button' },
                ],
            },{
                text: 'Element Components',
                collapsible: true,
                items: [
                    { text: 'VvEl', link: '/components/elements/vv-el' },
                ],
            },
        ],
        // sidebarDepth: 2,
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
