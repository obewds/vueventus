// ./cli/installers/addDep.mjs

import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, depObject) {
    
    if ( userOptionsObject.deps.includes( depObject.name ) ) {

        run(depObject.install)

        console.log(`\nThe ${vvBrand} CLI installed/added the ${depObject.name} dep successfully!\n`)

        return depObject.packages

    }

    return []
    
}
