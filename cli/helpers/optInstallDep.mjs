// ./cli/helpers/optInstallDep.mjs

import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, depObject) {
    
    if ( userOptionsObject.deps.includes( depObject.name ) ) {

        run(depObject.install)

        console.log(`\nThe ${vvBrand} CLI installed/added the ${depObject.name} dep successfully!\n`)

        return depObject.packages

    }

    return []
    
}
