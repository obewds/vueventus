// ./cli/installers/addNodeTypes.mjs

import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (installedPkgsArray) {

    run('npm install @types/node --save-dev')

    installedPkgsArray.push('@types/node')

    console.log(`\nThe ${vvBrand} CLI installed @types/node successfully!\n`)
    
}
