// ./cli/helpers/optInstallPrismjs.mjs

import fs from 'fs-extra'
import cwd from './cwd.mjs'
import generatePrismThemeVarsCssFile from './generatePrismThemeVarsCssFile.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOpts, stackStubsString, prismDepObject) {

    if ( userOpts.deps.includes( prismDepObject.name ) ) {


        run(prismDepObject.install)


        // install prism-theme-vars.css file
        if ( userOpts.files.includes( prismDepObject.files.prismThemeVarsCss.name ) ) {

            // if ( !fs.existsSync( cwd + '/src/css' ) ) {
            //     fs.mkdirSync( cwd + '/src/css' )
            // }

            checkOrMakeDirSync(cwd + '/src/css')

            fs.writeFileSync(cwd + prismDepObject.files.prismThemeVarsCss.path + prismDepObject.files.prismThemeVarsCss.name, generatePrismThemeVarsCssFile(), { flag: 'w+' })

        }


        // add optional Prism.js files if the user also selected them
        const prismFiles = Object.keys(prismDepObject.files)

        prismFiles.forEach( (file) => {
            if ( userOpts.files.includes( prismDepObject.files[file].name ) ) {
                // conditional to skip file(s) generated above
                if ( prismDepObject.files[file].name !== prismDepObject.files.prismThemeVarsCss.name ) {
                    fs.copySync(
                        stackStubsString + prismDepObject.files[file].name,
                        cwd + prismDepObject.files[file].path + prismDepObject.files[file].name,
                    )
                }
            }
        })


        console.log(`\nThe ${vvBrand} CLI installed/added the ${prismDepObject.name} dep/files successfully!\n`)


        return prismDepObject.packages


    }

    // else return an empty array
    return []

    
}
