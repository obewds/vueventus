// ./cli/helpers/moveNuxtTsFilesToRoot.mjs

import fs from 'fs-extra'

import moveFile from './moveFile.mjs'
import cwd from './cwd.mjs'

export default function (nuxtDirString) {

    const files = [
        // .nuxt/dev/index.mjs
        // .nuxt/dev/index.mjs.map
        { from: '.nuxt/dev/index.mjs', to: '.nuxt/dev/index.mjs' },
        { from: '.nuxt/dev/index.mjs.map', to: '.nuxt/dev/index.mjs.map' },
        // .nuxt/dist/server/client.manifest.json
        // .nuxt/dist/server/client.manifest.mjs
        // .nuxt/dist/server/server.mjs
        { from: '.nuxt/dist/server/client.manifest.json', to: '.nuxt/dist/server/client.manifest.json' },
        { from: '.nuxt/dist/server/client.manifest.mjs', to: '.nuxt/dist/server/client.manifest.mjs' },
        { from: '.nuxt/dist/server/server.mjs', to: '.nuxt/dist/server/server.mjs' },
        // .nuxt/schema/nuxt.schema.d.ts
        // .nuxt/schema/nuxt.schema.json
        { from: '.nuxt/schema/nuxt.schema.d.ts', to: '.nuxt/schema/nuxt.schema.d.ts' },
        { from: '.nuxt/schema/nuxt.schema.json', to: '.nuxt/schema/nuxt.schema.json' },
        // .nuxt/types/app.config.d.ts
        // .nuxt/types/imports.d.ts
        // .nuxt/types/nitro-config.d.ts
        // .nuxt/types/nitro-imports.d.ts
        // .nuxt/types/nitro-routes.d.ts
        // .nuxt/types/nitro.d.ts
        // .nuxt/types/plugins.d.ts
        // .nuxt/types/schema.d.ts
        // .nuxt/types/vue-shim.d.ts
        { from: '.nuxt/types/app.config.d.ts', to: '.nuxt/types/app.config.d.ts' },
        { from: '.nuxt/types/imports.d.ts', to: '.nuxt/types/imports.d.ts' },
        { from: '.nuxt/types/nitro-config.d.ts', to: '.nuxt/types/nitro-config.d.ts' },
        { from: '.nuxt/types/nitro-imports.d.ts', to: '.nuxt/types/nitro-imports.d.ts' },
        { from: '.nuxt/types/nitro-routes.d.ts', to: '.nuxt/types/nitro-routes.d.ts' },
        { from: '.nuxt/types/nitro.d.ts', to: '.nuxt/types/nitro.d.ts' },
        { from: '.nuxt/types/plugins.d.ts', to: '.nuxt/types/plugins.d.ts' },
        { from: '.nuxt/types/schema.d.ts', to: '.nuxt/types/schema.d.ts' },
        { from: '.nuxt/types/vue-shim.d.ts', to: '.nuxt/types/vue-shim.d.ts' },
        // .nuxt/app.config.mjs
        // .nuxt/components.d.ts
        // .nuxt/imports.d.ts
        // .nuxt/nuxt.d.ts
        // .nuxt/nuxt.json
        // .nuxt/tsconfig.json
        { from: '.nuxt/app.config.mjs', to: '.nuxt/app.config.mjs' },
        { from: '.nuxt/components.d.ts', to: '.nuxt/components.d.ts' },
        { from: '.nuxt/imports.d.ts', to: '.nuxt/imports.d.ts' },
        { from: '.nuxt/nuxt.d.ts', to: '.nuxt/nuxt.d.ts' },
        { from: '.nuxt/nuxt.json', to: '.nuxt/nuxt.json' },
        { from: '.nuxt/tsconfig.json', to: '.nuxt/tsconfig.json' },

        { from: 'public/favicon.ico', to: 'public/favicon.ico' },
        { from: '.gitignore', to: '.gitignore' },
        { from: '.npmrc', to: '.npmrc' },
        { from: 'app.vue', to: 'app.vue' },
        // { from: 'nuxt.config.ts', to: 'nuxt.config.ts' }, // this is handled in ./cli/installers/addNuxtTs.mjs
        { from: 'README.md', to: 'README-NUXT.md' },
        { from: 'tsconfig.json', to: 'tsconfig.json' },
    ]

    files.forEach( (file) => {
        moveFile(cwd + '/' + nuxtDirString + '/' + file.from, cwd + '/' + file.to)
    })

    // fs.remove(cwd + '/' + nuxtDirString + '/package.json', err => {
    //     if (err) return console.error(err)
    //     // console.log('success!')
    // })

    // remove the nuxt generated directory as files have been moved out and up to root
    fs.remove(cwd + '/' + nuxtDirString, err => {
        if (err) return console.error(err)
        // console.log('success!')
    })

}
