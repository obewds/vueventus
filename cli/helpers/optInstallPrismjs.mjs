// ./cli/helpers/optInstallPrismjs.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, prismDepObject) {

    if ( userOptionsObject.deps.includes( prismDepObject.name ) ) {

        run(prismDepObject.install)

        // add optional Prism.js files if the user also selected them

        const prismFiles = Object.keys(prismDepObject.files)

        prismFiles.forEach( (file) => {
            if ( userOptionsObject.files.includes( prismDepObject.files[file].name ) ) {
                fs.copySync(
                    stackStubsString + prismDepObject.files[file].name,
                    cwd + prismDepObject.files[file].path + prismDepObject.files[file].name,
                )
            }
        })

        // if ( userOptionsObject.files.includes( prismDepObject.files.vvPrism.name ) ) {
        //     fs.copySync(
        //         stackStubsString + prismDepObject.files.vvPrism.name,
        //         cwd + prismDepObject.files.vvPrism.path + prismDepObject.files.vvPrism.name,
        //     )
        // }

        // if ( userOptionsObject.files.includes( prismDepObject.files.prismThemeVarsCss.name ) ) {
        //     fs.copySync(
        //         stackStubsString + prismDepObject.files.prismThemeVarsCss.name,
        //         cwd + prismDepObject.files.prismThemeVarsCss.path + prismDepObject.files.prismThemeVarsCss.name,
        //     )
        // }

        console.log(`\nThe ${vvBrand} CLI installed/added the ${prismDepObject.name} dep/files successfully!\n`)

        return prismDepObject.packages

    }

    return []
    
}
