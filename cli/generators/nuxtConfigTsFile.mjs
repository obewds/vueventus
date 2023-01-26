// ./cli/generators/nuxtConfigTsFile.mjs

export default function () {

const output = `// ./nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-headlessui',
    ],
})

`

return output

}
