// ./docs/.vitepress/config.js

module.exports = {
    base: '/vueventus/',
    title: 'VueVentus',
    description: 'A documentation site for the VueVentus component design system',
    markdown: {
      lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: "Get Started", link: "/getting-started" },
            { text: "Components", link: "/components" },
            // { text: "Tests", link: "/tests" },
            { text: "npm", link: "https://www.npmjs.com/package/@obewds/vueventus" },
            { text: "GitHub", link: "https://github.com/obewds/vueventus" },
        ],
        // sidebar: [
            // { text: "Installation", link: "/#installation" },
        // ],
    },
}
