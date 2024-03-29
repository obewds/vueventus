// ./cli/installers/addTailwindCss.mjs

import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (installedPkgsArray) {

    run('npm install tailwindcss postcss autoprefixer tailwind-scrollbar --save-dev')
    // skipping this step and just using tailwind.config.cjs and postcss.config.cjs files from stubs for now
    // run('npx tailwindcss init -p')

    installedPkgsArray.push('tailwindcss', 'postcss', 'autoprefixer', 'tailwind-scrollbar')

    console.log(`\nThe ${vvBrand} CLI installed and initialized Tailwind CSS successfully!\n`)
    
}
