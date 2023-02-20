// ./cli/helpers/moveNuxtTsFilesToRoot.mjs

import fs from 'fs-extra'

import moveFile from './moveFile.mjs'
import cwd from './cwd.mjs'

export default function (nuxtDirString) {

    const files = [
        { from: '.gitignore', to: '.gitignore' },
        { from: 'app.vue', to: 'app.vue' },
        { from: 'README.md', to: 'README-NUXT.md' },
        { from: 'tsconfig.json', to: 'tsconfig.json' },
        { from: 'public/favicon.ico', to: 'public/favicon.ico' },
        { from: '.npmrc', to: '.npmrc' },
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
