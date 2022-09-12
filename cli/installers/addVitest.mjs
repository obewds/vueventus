// ./cli/installers/addVitest.mjs

import fs from 'fs-extra'

import helloVueVentusTestJsFile from '../generators/helloVueVentusTestJsFile.mjs'
import helloVueVentusVueFile from '../generators/helloVueVentusVueFile.mjs'
import vitestConfigTsFile from '../generators/vitestConfigTsFile.mjs'

import homeTestJsFile from '../generators/homeTestJsFile.mjs'
import notFound404TestJsFile from '../generators/notFound404TestJsFile.mjs'
import vvAnchorTestJsFile from '../generators/vvAnchorTestJsFile.mjs'
import vvButtonTestJsFile from '../generators/vvButtonTestJsFile.mjs'
import vvCheckboxTestJsFile from '../generators/vvCheckboxTestJsFile.mjs'
import vvColorModeButtonTestJsFile from '../generators/vvColorModeButtonTestJsFile.mjs'
import vvElTestJsFile from '../generators/vvElTestJsFile.mjs'
import vvInputTestJsFile from '../generators/vvInputTestJsFile.mjs'
import vvListItemTestJsFile from '../generators/vvListItemTestJsFile.mjs'
import vvRadioTestJsFile from '../generators/vvRadioTestJsFile.mjs'
import vvRouterLinkTestJsFile from '../generators/vvRouterLinkTestJsFile.mjs'
import vvScrollUpTestJsFile from '../generators/vvScrollUpTestJsFile.mjs'
import vvTextareaTestJsFile from '../generators/vvTextareaTestJsFile.mjs'

import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

        run(vitestDepObject.install)

        // install vitest.config.ts file
        fs.outputFileSync(cwd + vitestDepObject.files.vitestConfigTs.path + vitestDepObject.files.vitestConfigTs.name, vitestConfigTsFile(), { flag: 'w+' })

        // install HelloVueVentus.vue file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusVue.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.helloVueVentusVue.path + vitestDepObject.files.helloVueVentusVue.name, helloVueVentusVueFile(), { flag: 'w+' })

        }

        // install HelloVueVentus.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.helloVueVentusTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.helloVueVentusTestJs.path + vitestDepObject.files.helloVueVentusTestJs.name, helloVueVentusTestJsFile(), { flag: 'w+' })

        }

        //
        // install VueVentus page and component test files for vitest
        //

        // install Home.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.homeTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.homeTestJs.path + vitestDepObject.files.homeTestJs.name, homeTestJsFile(), { flag: 'w+' })
            
        }

        // install NotFound404.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.notFound404TestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.notFound404TestJs.path + vitestDepObject.files.notFound404TestJs.name, notFound404TestJsFile(), { flag: 'w+' })
            
        }

        // install VvAnchor.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvAnchorTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvAnchorTestJs.path + vitestDepObject.files.vvAnchorTestJs.name, vvAnchorTestJsFile(), { flag: 'w+' })
            
        }

        // install VvButton.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvButtonTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvButtonTestJs.path + vitestDepObject.files.vvButtonTestJs.name, vvButtonTestJsFile(), { flag: 'w+' })
            
        }

        // install VvCheckbox.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvCheckboxTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvCheckboxTestJs.path + vitestDepObject.files.vvCheckboxTestJs.name, vvCheckboxTestJsFile(), { flag: 'w+' })
            
        }

        // install VvColorModeButton.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvColorModeButtonTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvColorModeButtonTestJs.path + vitestDepObject.files.vvColorModeButtonTestJs.name, vvColorModeButtonTestJsFile(), { flag: 'w+' })
            
        }

        // install VvEl.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvElTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvElTestJs.path + vitestDepObject.files.vvElTestJs.name, vvElTestJsFile(), { flag: 'w+' })
            
        }

        // install VvInput.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvInputTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvInputTestJs.path + vitestDepObject.files.vvInputTestJs.name, vvInputTestJsFile(), { flag: 'w+' })
            
        }

        // install VvListItem.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvListItemTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvListItemTestJs.path + vitestDepObject.files.vvListItemTestJs.name, vvListItemTestJsFile(), { flag: 'w+' })
            
        }

        // install VvRadio.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvRadioTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvRadioTestJs.path + vitestDepObject.files.vvRadioTestJs.name, vvRadioTestJsFile(), { flag: 'w+' })
            
        }

        // install VvRouterLink.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvRouterLinkTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvRouterLinkTestJs.path + vitestDepObject.files.vvRouterLinkTestJs.name, vvRouterLinkTestJsFile(), { flag: 'w+' })
            
        }

        // install VvScrollUp.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvScrollUpTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvScrollUpTestJs.path + vitestDepObject.files.vvScrollUpTestJs.name, vvScrollUpTestJsFile(), { flag: 'w+' })
            
        }

        // install VvTextarea.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvTextareaTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvTextareaTestJs.path + vitestDepObject.files.vvTextareaTestJs.name, vvTextareaTestJsFile(), { flag: 'w+' })
            
        }

        //
        // add test coverage directory to project .gitignore file
        //

        fs.outputFileSync(cwd + '/.gitignore', `\ncoverage\n`, { flag: 'a+' })

        console.log(`\nThe ${vvBrand} CLI installed/added the ${vitestDepObject.name} dep/files successfully!\n`)

        return vitestDepObject.packages

    }

    return []
    
}
