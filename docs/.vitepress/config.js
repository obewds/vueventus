// ./docs/.vitepress/config.js

module.exports = {
    base: '/vueventus/',
    title: 'VueVentus Docs',
    description: 'A documentation site for the VueVentus component design system',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        logo: 'images/vue-ventus-mark-and-favicon.png',
        nav: [
            { text: "Get Started", link: "/getting-started" },
            { text: "Components", link: "/components" },
            // { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
            { text: "GitHub", link: "https://github.com/obewds/vueventus" },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Matt McT LLC'
        },
        sidebarDepth: 2,
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
