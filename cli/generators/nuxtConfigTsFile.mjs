// ./cli/generators/nuxtConfigTsFile.mjs

export default function () {

const output = `// ./nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
    ],
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
            script: [
                { src: './js/on-page-load-color-modes.js' }
            ],
            bodyAttrs: {
                class: 'scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800',
            }
        },
    },
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
})

`

return output

}
