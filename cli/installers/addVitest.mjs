// ./cli/installers/addVitest.mjs

import fs from 'fs-extra'

import helloVueVentusTestJsFile from '../generators/helloVueVentusTestJsFile.mjs'
import helloVueVentusVueFile from '../generators/helloVueVentusVueFile.mjs'
import vitestConfigTsFile from '../generators/vitestConfigTsFile.mjs'

import checkOrMakeDirSync from '../helpers/checkOrMakeDirSync.mjs'
import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

        run(vitestDepObject.install)

        // install vitest.config.ts file
        fs.writeFileSync(cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name, vitestConfigTsFile(), { flag: 'w+' })

        // install HelloVueVentus.vue file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name )) {

            checkOrMakeDirSync(cwd + '/src/components')

            fs.writeFileSync(cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name, helloVueVentusVueFile(), { flag: 'w+' })

        }

        // install HelloVueVentus.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name )) {

            checkOrMakeDirSync(cwd + '/tests')
            checkOrMakeDirSync(cwd + '/tests/components')

            fs.writeFileSync(cwd + vitestDepObject.files.helloVueVentusTestJs.path + vitestDepObject.files.helloVueVentusTestJs.name, helloVueVentusTestJsFile(), { flag: 'w+' })

        }
        
        // add test coverage directory to project .gitignore file
        fs.writeFileSync(cwd + '/.gitignore', `\ncoverage\n`, { flag: 'a+' })

        console.log(`\nThe ${vvBrand} CLI installed/added the ${vitestDepObject.name} dep/files successfully!\n`)

        return vitestDepObject.packages

    }

    return []
    
}
