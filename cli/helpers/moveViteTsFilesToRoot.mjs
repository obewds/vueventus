// ./cli/helpers/moveViteTsFilesToRoot.mjs

import fs from 'fs-extra'

import moveFile from './moveFile.mjs'
import cwd from './cwd.mjs'

export default function (viteDirectoryString) {

    const files = [
        { from: '.vscode', to: '.vscode' },
        { from: 'public', to: 'public' },
        { from: 'src', to: 'src' },
        { from: '.gitignore', to: '.gitignore' },
        { from: 'README.md', to: 'README-VITE.md' },
        { from: 'tsconfig.json', to: 'tsconfig.json' },
        { from: 'tsconfig.node.json', to: 'tsconfig.node.json' },
    ]

    files.forEach( (file) => {
        moveFile(cwd + '/' + viteDirectoryString + '/' + file.from, cwd + '/' + file.to)
    })

    fs.remove(cwd + '/src/style.css', err => {
        if (err) return console.error(err)
        // console.log('success!')
    })

}
