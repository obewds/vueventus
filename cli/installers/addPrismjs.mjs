// ./cli/installers/addPrismjs.mjs

import fs from 'fs-extra'

import prismThemeVarsCssFile from '../generators/prismThemeVarsCssFile.mjs'
import vvPrismVarsVueFile from '../generators/vvPrismVarsVueFile.mjs'
import vvPrismVueFile from '../generators/vvPrismVueFile.mjs'

import checkOrMakeDirSync from '../helpers/checkOrMakeDirSync.mjs'
import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOpts, stackStubsString, prismDepObject) {

    if ( userOpts.deps.includes( prismDepObject.name ) ) {


        run(prismDepObject.install)


        // install prism-theme-vars.css file
        if ( userOpts.files.includes( prismDepObject.files.prismThemeVarsCss.name ) ) {

            checkOrMakeDirSync(cwd + '/src/css')

            fs.writeFileSync(cwd + prismDepObject.files.prismThemeVarsCss.path + prismDepObject.files.prismThemeVarsCss.name, prismThemeVarsCssFile(), { flag: 'w+' })

        }

        // install VvPrismVars.vue file
        if ( userOpts.files.includes( prismDepObject.files.VvPrismVars.name ) ) {

            fs.writeFileSync(cwd + prismDepObject.files.VvPrismVars.path + prismDepObject.files.VvPrismVars.name, vvPrismVarsVueFile(), { flag: 'w+' })

        }

        // install VvPrism.vue file
        if ( userOpts.files.includes( prismDepObject.files.vvPrism.name ) ) {

            fs.writeFileSync(cwd + prismDepObject.files.vvPrism.path + prismDepObject.files.vvPrism.name, vvPrismVueFile(), { flag: 'w+' })

        }


        // add optional Prism.js files if the user also selected them
        // const prismFiles = Object.keys(prismDepObject.files)

        // prismFiles.forEach( (file) => {
        //     if ( userOpts.files.includes( prismDepObject.files[file].name ) ) {
        //         // conditional to skip file(s) generated above
        //         if ( prismDepObject.files[file].name !== prismDepObject.files.prismThemeVarsCss.name && prismDepObject.files[file].name  !== prismDepObject.files.VvPrismVars.name ) {
        //             fs.copySync(
        //                 stackStubsString + prismDepObject.files[file].name,
        //                 cwd + prismDepObject.files[file].path + prismDepObject.files[file].name,
        //             )
        //         }
        //     }
        // })


        console.log(`\nThe ${vvBrand} CLI installed/added the ${prismDepObject.name} dep/files successfully!\n`)


        return prismDepObject.packages


    }

    // else return an empty array
    return []

    
}
