// ./cli/helpers/optInstallPrismjs.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, prismDepObject) {

    if ( userOptionsObject.deps.includes( prismDepObject.name ) ) {

        run(prismDepObject.install)

        // add optional Prism.js files if the user also selected them
        if ( userOptionsObject.files.includes( prismDepObject.files.vvPrism.name ) ) {
            fs.copySync(
                stackStubsString + prismDepObject.files.vvPrism.name,
                cwd + prismDepObject.files.vvPrism.path + prismDepObject.files.vvPrism.name,
            )
        }

        console.log(`\nThe ${vvBrand} CLI installed/added the ${prismDepObject.name} dep/files successfully!\n`)

        return prismDepObject.packages

    }

    return []
    
}
