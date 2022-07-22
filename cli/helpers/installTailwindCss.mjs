// ./cli/helpers/installTailwindCss.mjs

import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (installedPkgsArray) {

    run('npm install tailwindcss postcss autoprefixer --save-dev')
    // skipping this step and just using tailwind.config.cjs and postcss.config.cjs files from stubs for now
    // run('npx tailwindcss init -p')

    installedPkgsArray.push('tailwindcss', 'postcss', 'autoprefixer')

    console.log(`\nThe ${vvBrand} CLI installed and initialized Tailwind CSS successfully!\n`)
    
}
