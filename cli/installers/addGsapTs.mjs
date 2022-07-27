// ./cli/installers/addGsapTs.mjs

import fs from 'fs-extra'

import vvScrollUpVueFile from '../generators/vvScrollUpVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

// TODO: need to figure out how to best eliminate use of stackStubsString here
export default function (userOptionsObject, stackStubsString, gsapDepObject) {

    if ( userOptionsObject.deps.includes( gsapDepObject.name ) ) {

        run(gsapDepObject.install)

        fs.copySync(stackStubsString + 'gsap.ts', cwd + '/src/gsap.ts')

        // add optional GSAP files if the user also selected them
        if ( userOptionsObject.files.includes( gsapDepObject.files.vvScrollUp.name ) ) {

            // fs.copySync(
            //     stackStubsString + gsapDepObject.files.vvScrollUp.name,
            //     cwd + gsapDepObject.files.vvScrollUp.path + gsapDepObject.files.vvScrollUp.name
            // )

            fs.writeFileSync(cwd + gsapDepObject.files.vvScrollUp.path + gsapDepObject.files.vvScrollUp.name, vvScrollUpVueFile(), { flag: 'w+' })
            
        }

        console.log(`\nThe ${vvBrand} CLI installed/added the ${gsapDepObject.name} dep/files successfully!\n`)

        return gsapDepObject.packages

    }

    return []
    
}
