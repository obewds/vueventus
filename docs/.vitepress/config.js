// ./docs/.vitepress/config.js

module.exports = {
    base: '/vueventus/',
    title: 'VueVentus Docs',
    description: 'A documentation site for the VueVentus component design system',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        logo: 'https://obewds.github.io/vueventus/images/vue-ventus-mark-and-favicon.png',
        logoLink: '/vueventus/',
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
                    { text: 'VueVentus + Vite.js', link: '/guides/vueventus-vite' },
                    { text: 'VueVentus + Vue CLI', link: '/guides/vueventus-vue-cli' },
                    { text: 'VueVentus + VILT', link: '/guides/vueventus-vilt' },
                    { text: 'Configuration', link: '/guides/configuration' },
                    { text: 'Test Drive: VvButton', link: '/guides/test-drive-vv-button' },
                    { text: 'App Color Config File', link: '/guides/app-color-config-file' },
                    { text: 'Palettes vs Colors', link: '/guides/palettes-vs-colors' },
                    { text: 'Colors and State', link: '/guides/colors-and-state' },
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
                ],
            },
        ],
        // sidebarDepth: 2,
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
