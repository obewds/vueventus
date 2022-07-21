// ./cli/helpers/copySyncSvgsToAssets.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import stubsPath from './stubsPath.mjs'

export default function () {

    const files = [
        'logo-obe.svg',
        'logo-tailwindcss.svg',
        'logo-typescript.svg',
        'logo-vite.svg',
        'logo-vue.svg'
    ]

    files.forEach( (file) => {
        fs.copySync(stubsPath + 'svgs/' + file, cwd + '/src/assets/' + file)
    })

}
