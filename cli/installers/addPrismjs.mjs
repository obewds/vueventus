// ./cli/installers/addPrismjs.mjs

import fs from 'fs-extra'

import prismThemeVarsCssFile from '../generators/prismThemeVarsCssFile.mjs'
import vvPrismVarsVueFile from '../generators/vvPrismVarsVueFile.mjs'
import vvPrismVueFile from '../generators/vvPrismVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOpts, prismDepObject) {

    if ( userOpts.deps.includes( prismDepObject.name ) ) {


        run(prismDepObject.install)


        // install prism-theme-vars.css file
        if ( userOpts.files.includes( prismDepObject.files.prismThemeVarsCss.name ) ) {

            fs.outputFileSync(cwd + prismDepObject.files.prismThemeVarsCss.path + prismDepObject.files.prismThemeVarsCss.name, prismThemeVarsCssFile(), { flag: 'w+' })

        }

        // install VvPrismVars.vue file
        if ( userOpts.files.includes( prismDepObject.files.VvPrismVars.name ) ) {

            fs.outputFileSync(cwd + prismDepObject.files.VvPrismVars.path + prismDepObject.files.VvPrismVars.name, vvPrismVarsVueFile(), { flag: 'w+' })

        }

        // install VvPrism.vue file
        if ( userOpts.files.includes( prismDepObject.files.vvPrism.name ) ) {

            fs.outputFileSync(cwd + prismDepObject.files.vvPrism.path + prismDepObject.files.vvPrism.name, vvPrismVueFile(), { flag: 'w+' })

        }


        console.log(`\nThe ${vvBrand} CLI installed/added the ${prismDepObject.name} dep/files successfully!\n`)


        return prismDepObject.packages


    }

    // else return an empty array
    return []

    
}
