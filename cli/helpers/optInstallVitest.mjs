// ./cli/helpers/optInstallVitest.mjs

import fs from 'fs-extra'

import checkOrMakeDirSync from './checkOrMakeDirSync.mjs'
import cwd from './cwd.mjs'
import generateHelloVueVentusVueFile from './generateHelloVueVentusVueFile.mjs'
import generateHelloVueVentusTestJsFile from './generateHelloVueVentusTestJsFile.mjs'
import generateVitestConfigTsFile from './generateVitestConfigTsFile.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

        run(vitestDepObject.install)

        // install vitest.config.ts file
        fs.writeFileSync(cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name, generateVitestConfigTsFile(), { flag: 'w+' })

        // install HelloVueVentus.vue file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name )) {

            checkOrMakeDirSync(cwd + '/src/components')

            fs.writeFileSync(cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name, generateHelloVueVentusVueFile(), { flag: 'w+' })

        }

        // install HelloVueVentus.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name )) {

            checkOrMakeDirSync(cwd + '/tests')
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
