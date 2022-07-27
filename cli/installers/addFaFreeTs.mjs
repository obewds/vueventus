// ./cli/installers/addFaFreeTs.mjs

import fs from 'fs-extra'

import vvFaVueFile from '../generators/vvFaVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

// TODO: need to figure out how to best eliminate use of stackStubsString here
export default function (userOptionsObject, stackStubsString, faFreeDepObject) {

    run(faFreeDepObject.install)

    fs.copySync(
        stackStubsString + faFreeDepObject.files.fontAwesomeTs.name,
        cwd + faFreeDepObject.files.fontAwesomeTs.path + faFreeDepObject.files.fontAwesomeTs.name
    )

    // add optional FontAwesome Free files if the user also selected them
    if ( userOptionsObject.files.includes( faFreeDepObject.files.vvFa.name ) ) {
        // fs.copySync(
        //     stackStubsString + faFreeDepObject.files.vvFa.name,
        //     cwd + faFreeDepObject.files.vvFa.path + faFreeDepObject.files.vvFa.name
        // )
        fs.writeFileSync(cwd + faFreeDepObject.files.vvFa.path + faFreeDepObject.files.vvFa.name, vvFaVueFile(), { flag: 'w+' })
    }

    console.log(`\nThe ${vvBrand} CLI installed/added the ${faFreeDepObject.name} dep/files successfully!\n`)

    return faFreeDepObject.packages
    
}
