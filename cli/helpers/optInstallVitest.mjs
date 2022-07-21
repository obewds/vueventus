// ./cli/helpers/optInstallVitest.mjs

// added thu jul 21
import fs from 'fs-extra'
import cwd from './cwd.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

export default function (userOptionsObject, stackStubsString, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

        run(vitestDepObject.install)

        fs.copySync(
            stackStubsString + vitestDepObject.files.vitestConfigTs.name,
            cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name
        )

        // add optional Vitest files if the user also selected them
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name ) || userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name ) ) {
            fs.copySync(
                stackStubsString + vitestDepObject.files.helloVueVentusVue.name,
                cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name
            )
            fs.copySync(
                stackStubsString + vitestDepObject.files.helloVueVentusTestJs.name,
                cwd + vitestDepObject.files.helloVueVentusTestJs.path + vitestDepObject.files.helloVueVentusTestJs.name
            )
        }
        
        // add test coverage directory to project .gitignore file
        fs.writeFileSync(cwd + '/.gitignore', `\ncoverage\n`, { flag: 'a+' })

        console.log(`\nThe ${vvBrand} CLI installed/added the ${vitestDepObject.name} dep/files successfully!\n`)

        return vitestDepObject.packages

    }

    return []
    
}
