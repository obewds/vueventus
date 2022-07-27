// ./cli/installers/addGsapTs.mjs

import fs from 'fs-extra'

import gsapTsFile from '../generators/gsapTsFile.mjs'
import vvScrollUpVueFile from '../generators/vvScrollUpVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, gsapDepObject) {

    if ( userOptionsObject.deps.includes( gsapDepObject.name ) ) {

        run(gsapDepObject.install)

        // add  GSAP base file if the user selected it
        if ( userOptionsObject.files.includes( gsapDepObject.files.gsapTs.name ) ) {

            fs.outputFileSync(cwd + gsapDepObject.files.gsapTs.path + gsapDepObject.files.gsapTs.name, gsapTsFile(), { flag: 'w+' })
            
        }

        // add optional GSAP files if the user also selected them
        if ( userOptionsObject.files.includes( gsapDepObject.files.vvScrollUp.name ) ) {

            fs.outputFileSync(cwd + gsapDepObject.files.vvScrollUp.path + gsapDepObject.files.vvScrollUp.name, vvScrollUpVueFile(), { flag: 'w+' })
            
        }

        console.log(`\nThe ${vvBrand} CLI installed/added the ${gsapDepObject.name} dep/files successfully!\n`)

        return gsapDepObject.packages

    }

    return []
    
}
