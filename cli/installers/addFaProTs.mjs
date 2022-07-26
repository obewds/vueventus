// ./cli/installers/addFaProTs.mjs

import fs from 'fs-extra'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, faProDepObject) {

    run(faProDepObject.install)

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
