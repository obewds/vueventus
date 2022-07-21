// ./cli/helpers/installNodeTypes.mjs

import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (installedPkgsArray) {

    run('npm install @types/node --save-dev')

    installedPkgsArray.push('@types/node')

    console.log(`\nThe ${vvBrand} CLI installed @types/node successfully!\n`)
    
}
