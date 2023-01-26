// ./cli/helpers/moveNuxtTsFilesToRoot.mjs

import fs from 'fs-extra'

import moveFile from './moveFile.mjs'
import cwd from './cwd.mjs'

export default function (viteDirectoryString) {

    const files = [
        { from: '.gitignore', to: '.gitignore' },
        { from: 'app.vue', to: 'app.vue' },
        { from: 'README.md', to: 'README-NUXT.md' },
        { from: 'tsconfig.json', to: 'tsconfig.json' },
    ]

    files.forEach( (file) => {
        moveFile(cwd + '/' + viteDirectoryString + '/' + file.from, cwd + '/' + file.to)
    })

    fs.remove(cwd + '/' + viteDirectoryString + '/package.json', err => {
        if (err) return console.error(err)
        // console.log('success!')
    })

}
