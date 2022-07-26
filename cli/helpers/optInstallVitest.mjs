// ./cli/helpers/optInstallVitest.mjs

import fs from 'fs-extra'

import checkOrMakeDirSync from './checkOrMakeDirSync.mjs'
import cwd from './cwd.mjs'
import generateHelloVueVentusVueFile from './generateHelloVueVentusVueFile.mjs'
import generateHelloVueVentusTestJsFile from './generateHelloVueVentusTestJsFile.mjs'
import generateVitestConfigTsFile from './generateVitestConfigTsFile.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

        run(vitestDepObject.install)

        // fs.copySync(
        //     stackStubsString + vitestDepObject.files.vitestConfigTs.name,
        //     cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name
        // )

        fs.writeFileSync(cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name, generateVitestConfigTsFile(), { flag: 'w+' })

        // add optional Vitest files if the user also selected them
        // if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name ) || userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name ) ) {
            
            // fs.copySync(
            //     stackStubsString + vitestDepObject.files.helloVueVentusVue.name,
            //     cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name
            // )

            // fs.copySync(
            //     stackStubsString + vitestDepObject.files.helloVueVentusTestJs.name,
            //     cwd + vitestDepObject.files.helloVueVentusTestJs.path + vitestDepObject.files.helloVueVentusTestJs.name
            // )

        // }

        // install HelloVueVentus.vue file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name )) {

            // if ( !fs.existsSync( cwd + '/src/components' ) ) {
            //     fs.mkdirSync( cwd + '/src/components' )
            // }

            checkOrMakeDirSync(cwd + '/src/components')

            fs.writeFileSync(cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name, generateHelloVueVentusVueFile(), { flag: 'w+' })

        }

        // install HelloVueVentus.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name )) {

            // if ( !fs.existsSync( cwd + '/tests/components' ) ) {
            //     fs.mkdirSync( cwd + '/tests/components' )
            // }

            checkOrMakeDirSync(cwd + '/tests/components')

            fs.writeFileSync(cwd + vitestDepObject.files.helloVueVentusTestJs.path + vitestDepObject.files.helloVueVentusTestJs.name, generateHelloVueVentusTestJsFile(), { flag: 'w+' })

        }
        
        // add test coverage directory to project .gitignore file
        fs.writeFileSync(cwd + '/.gitignore', `\ncoverage\n`, { flag: 'a+' })

        console.log(`\nThe ${vvBrand} CLI installed/added the ${vitestDepObject.name} dep/files successfully!\n`)

        return vitestDepObject.packages

    }

    return []
    
}
