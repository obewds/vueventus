// ./cli/installers/addFaProTs.mjs

import fs from 'fs-extra'

import fontAwesomeProTsFile from '../generators/fontAwesomeProTsFile.mjs'
import vvFaVueFile from '../generators/vvFaVueFile.mjs'
import vvFaVueSsgFile from '../generators/vvFaVueSsgFile.mjs'

import vvFaTestJsFilePro from '../generators/vvFaTestJsFilePro.mjs'

import cliData from '../helpers/cliData.mjs'
import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, faProDepObject, isSsg = false) {

    run(faProDepObject.install)

    // add FontAwesome Pro base file if the user also selected it
    if ( userOptionsObject.files.includes( faProDepObject.files.fontAwesomeProTs.name ) ) {

        fs.outputFileSync(cwd + faProDepObject.files.fontAwesomeProTs.path + faProDepObject.files.fontAwesomeProTs.name, fontAwesomeProTsFile(), { flag: 'w+' })

    }

    // add FontAwesome Pro component file if the user also selected it
    if ( userOptionsObject.files.includes( faProDepObject.files.vvFa.name ) ) {

        if (isSsg === false) {

            fs.outputFileSync(cwd + faProDepObject.files.vvFa.path + faProDepObject.files.vvFa.name, vvFaVueFile(), { flag: 'w+' })

        } else if (isSsg === true) {

            fs.outputFileSync(cwd + faProDepObject.files.vvFa.path + faProDepObject.files.vvFa.name, vvFaVueSsgFile(), { flag: 'w+' })

        }

    }

    // check for the vitest dep
    if ( userOptionsObject.deps.includes( cliData.stacks.vueTwViteTs.deps.vitest.name ) || userOptionsObject.deps.includes( cliData.stacks.vueTwViteSsgMdTs.deps.vitest.name ) ) {

        // install VvFa.test.js file
        if ( userOptionsObject.files.includes( faProDepObject.files.vvFaTestJs.name ) ) {

            fs.outputFileSync(cwd + faProDepObject.files.vvFaTestJs.path + faProDepObject.files.vvFaTestJs.name, vvFaTestJsFilePro(), { flag: 'w+' })

        }

    }

    console.log(`\nThe ${vvBrand} CLI installed/added the ${faProDepObject.name} dep/files successfully!\n`)

    return faProDepObject.packages
    
}
