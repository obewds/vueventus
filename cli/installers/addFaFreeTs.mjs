// ./cli/installers/addFaFreeTs.mjs

import fs from 'fs-extra'

import fontAwesomeTsFile from '../generators/fontAwesomeTsFile.mjs'
import vvFaVueFile from '../generators/vvFaVueFile.mjs'
import vvFaVueSsgFile from '../generators/vvFaVueSsgFile.mjs'

import vvFaTestJsFile from '../generators/vvFaTestJsFile.mjs'

import cliData from '../helpers/cliData.mjs'
import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, faFreeDepObject, isSsg = false) {

    run(faFreeDepObject.install)

    // add FontAwesome Free base file if the user also selected it
    if ( userOptionsObject.files.includes( faFreeDepObject.files.fontAwesomeTs.name ) ) {

        fs.outputFileSync(cwd + faFreeDepObject.files.fontAwesomeTs.path + faFreeDepObject.files.fontAwesomeTs.name, fontAwesomeTsFile(), { flag: 'w+' })

    }

    // add FontAwesome Free component file if the user also selected it
    if ( userOptionsObject.files.includes( faFreeDepObject.files.vvFa.name ) ) {

        if (isSsg === false) {

            fs.outputFileSync(cwd + faFreeDepObject.files.vvFa.path + faFreeDepObject.files.vvFa.name, vvFaVueFile(), { flag: 'w+' })

        } else if (isSsg === true) {

            fs.outputFileSync(cwd + faFreeDepObject.files.vvFa.path + faFreeDepObject.files.vvFa.name, vvFaVueSsgFile(), { flag: 'w+' })

        }
        
    }

    // check for the vitest dep
    if ( userOptionsObject.deps.includes( cliData.stacks.vueTwViteTs.deps.vitest.name ) || userOptionsObject.deps.includes( cliData.stacks.vueTwViteSsgMdTs.deps.vitest.name ) ) {

        // install VvFa.test.js file
        if ( userOptionsObject.files.includes( faFreeDepObject.files.vvFaTestJs.name ) ) {

            fs.outputFileSync(cwd + faFreeDepObject.files.vvFaTestJs.path + faFreeDepObject.files.vvFaTestJs.name, vvFaTestJsFile(), { flag: 'w+' })

        }

    }

    console.log(`\nThe ${vvBrand} CLI installed/added the ${faFreeDepObject.name} dep/files successfully!\n`)

    return faFreeDepObject.packages
    
}
