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
            { text: "Get Started", link: "/getting-started" },
            { text: "Guides", link: "/guides" },
            { text: "Components", link: "/components" },
            //{ text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
            //{ text: "GitHub", link: "https://github.com/obewds/vueventus" },
        ],
        footer: {
            message: 'Released under the MIT License',
            copyright: 'Copyright © 2022 Matt McT LLC'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/obewds/vueventus' },
            { icon: 'twitter', link: 'https://mobile.twitter.com/obewds' },
        ]
        // sidebarDepth: 2,
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
