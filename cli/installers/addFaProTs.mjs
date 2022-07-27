// ./cli/installers/addFaProTs.mjs

import fs from 'fs-extra'

import fontAwesomeProTsFile from '../generators/fontAwesomeProTsFile.mjs'
import vvFaVueFile from '../generators/vvFaVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, faProDepObject) {

    run(faProDepObject.install)

    // add FontAwesome Pro base file if the user also selected it
    if ( userOptionsObject.files.includes( faProDepObject.files.fontAwesomeProTs.name ) ) {
        fs.outputFileSync(cwd + faProDepObject.files.fontAwesomeProTs.path + faProDepObject.files.fontAwesomeProTs.name, fontAwesomeProTsFile(), { flag: 'w+' })
    }

    // add FontAwesome Pro component file if the user also selected it
    if ( userOptionsObject.files.includes( faProDepObject.files.vvFa.name ) ) {
        fs.outputFileSync(cwd + faProDepObject.files.vvFa.path + faProDepObject.files.vvFa.name, vvFaVueFile(), { flag: 'w+' })
    }

    console.log(`\nThe ${vvBrand} CLI installed/added the ${faProDepObject.name} dep/files successfully!\n`)

    return faProDepObject.packages
    
}
