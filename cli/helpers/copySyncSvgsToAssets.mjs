// ./cli/helpers/copySyncSvgsToAssets.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'

export default function () {

    const files = [
        'logo-obe.svg',
        'logo-pinia.svg',
        'logo-tailwindcss.svg',
        'logo-typescript.svg',
        'logo-vite.svg',
        'logo-vue.svg'
    ]

    files.forEach( (file) => {
        fs.copySync(cwd + '/node_modules/@obewds/vueventus/cli/svgs/' + file, cwd + '/src/assets/' + file)
    })

}
