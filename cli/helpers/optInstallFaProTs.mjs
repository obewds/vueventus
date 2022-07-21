// ./cli/helpers/optInstallFaProTs.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, faProDepObject) {

    run(faProDepObject.install)

    installedPkgs = [...installedPkgs, ...faProDepObject.packages]

    fs.copySync(
        stackStubsString + faProDepObject.files.fontAwesomeProTs.name,
        cwd + faProDepObject.files.fontAwesomeProTs.path + faProDepObject.files.fontAwesomeProTs.name
    )

    // add optional FontAwesome Free files if the user also selected them
    if ( userOptionsObject.files.includes( faProDepObject.files.vvFa.name ) ) {
        fs.copySync(
            stackStubsString + faProDepObject.files.vvFa.name,
            cwd + faProDepObject.files.vvFa.path + faProDepObject.files.vvFa.name
        )
    }

    console.log(`\nThe ${vvBrand} CLI installed/added the ${faProDepObject.name} dep/files successfully!\n`)

    return faProDepObject.packages
    
}
