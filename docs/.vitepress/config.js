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
            { text: "Modules", link: "/modules/" },
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
                    { text: 'Installation', link: '/guides/installation' },
                    { text: 'Configuration', link: '/guides/configuration' },
                    { text: 'App Color Config File', link: '/guides/app-color-config-file' },
                    { text: 'Palettes vs Colors', link: '/guides/palettes-vs-colors' },
                    { text: 'Colors and State', link: '/guides/colors-and-state' },
                ],
            },{
                text: 'Modules',
                collapsible: true,
                items: [
                    { text: 'Config Module Workflow', link: '/modules/' },
                    { text: 'Config Modules', link: '/modules/configs' },
                    { text: 'Palette Config Modules', link: '/modules/palettes/' },
                ],
            },{
                text: 'Components',
                collapsible: true,
                items: [
                    { text: 'Modules vs Components', link: '/components/' },
                    { text: 'Button Components', link: '/components/buttons/' },
                    { text: 'Element Components', link: '/components/elements/' },
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
