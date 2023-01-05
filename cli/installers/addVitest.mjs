// ./cli/installers/addVitest.mjs

import fs from 'fs-extra'

import helloVueVentusTestJsFile from '../generators/helloVueVentusTestJsFile.mjs'
import helloVueVentusVueFile from '../generators/helloVueVentusVueFile.mjs'
import vitestConfigTsFile from '../generators/vitestConfigTsFile.mjs'

import bTestJsFile from '../generators/bTestJsFile.mjs'
import homeTestJsFile from '../generators/homeTestJsFile.mjs'
import notFound404TestJsFile from '../generators/notFound404TestJsFile.mjs'
import vvAnchorTestJsFile from '../generators/vvAnchorTestJsFile.mjs'
import vvButtonTestJsFile from '../generators/vvButtonTestJsFile.mjs'
import vvCheckboxTestJsFile from '../generators/vvCheckboxTestJsFile.mjs'
import vvColorModeButtonTestJsFile from '../generators/vvColorModeButtonTestJsFile.mjs'
import vvElTestJsFile from '../generators/vvElTestJsFile.mjs'
import vvFormGroupTestJsFile from '../generators/vvFormGroupTestJsFile.mjs'
import vvInputTestJsFile from '../generators/vvInputTestJsFile.mjs'
import vvListTestJsFile from '../generators/vvListTestJsFile.mjs'
import vvListboxTestJsFile from '../generators/vvListboxTestJsFile.mjs'
import vvListItemTestJsFile from '../generators/vvListItemTestJsFile.mjs'
import vvQuadFormGroupTestJsFile from '../generators/vvQuadFormGroupTestJsFile.mjs'
import vvRadioTestJsFile from '../generators/vvRadioTestJsFile.mjs'
import vvRouterLinkTestJsFile from '../generators/vvRouterLinkTestJsFile.mjs'
import vvScrollUpTestJsFile from '../generators/vvScrollUpTestJsFile.mjs'
import vvSelectTestJsFile from '../generators/vvSelectTestJsFile.mjs'
import vvTextareaTestJsFile from '../generators/vvTextareaTestJsFile.mjs'

import cliData from '../helpers/cliData.mjs'
import cwd from '../helpers/cwd.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOptionsObject, vitestDepObject) {

    if ( userOptionsObject.deps.includes( vitestDepObject.name ) ) {

        run(`npm pkg set scripts.test="vitest --dom"`)
        run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)
        run(`npm pkg set scripts.bench="vitest bench"`)

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
        // install VueVentus component test files for vitest
        //

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

        // install VvFormGroup.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvFormGroupTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvFormGroupTestJs.path + vitestDepObject.files.vvFormGroupTestJs.name, vvFormGroupTestJsFile(), { flag: 'w+' })
            
        }

        // install VvInput.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvInputTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvInputTestJs.path + vitestDepObject.files.vvInputTestJs.name, vvInputTestJsFile(), { flag: 'w+' })
            
        }

        // install VvList.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvListTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvListTestJs.path + vitestDepObject.files.vvListTestJs.name, vvListTestJsFile(), { flag: 'w+' })
            
        }

        // install VvListbox.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvListboxTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvListboxTestJs.path + vitestDepObject.files.vvListboxTestJs.name, vvListboxTestJsFile(), { flag: 'w+' })
            
        }

        // install VvListItem.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvListItemTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvListItemTestJs.path + vitestDepObject.files.vvListItemTestJs.name, vvListItemTestJsFile(), { flag: 'w+' })
            
        }

        // install VvQuadFormGroup.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvQuadFormGroupTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvQuadFormGroupTestJs.path + vitestDepObject.files.vvQuadFormGroupTestJs.name, vvQuadFormGroupTestJsFile(), { flag: 'w+' })
            
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

        // install VvSelect.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvSelectTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvSelectTestJs.path + vitestDepObject.files.vvSelectTestJs.name, vvSelectTestJsFile(), { flag: 'w+' })
            
        }

        // install VvTextarea.test.js file
        if ( userOptionsObject.files.includes( vitestDepObject.files.vvTextareaTestJs.name )) {

            fs.outputFileSync(cwd + vitestDepObject.files.vvTextareaTestJs.path + vitestDepObject.files.vvTextareaTestJs.name, vvTextareaTestJsFile(), { flag: 'w+' })
            
        }

        //
        // install VueVentus page test files for vitest
        //

        // if the stack is the vue-ts stack
        if ( userOptionsObject.stack === cliData.stacks.vueTwViteTs.name ) {

            // install Home.test.js file
            if ( userOptionsObject.files.includes( vitestDepObject.files.homeTestJs.name )) {

                fs.outputFileSync(cwd + vitestDepObject.files.homeTestJs.path + vitestDepObject.files.homeTestJs.name, homeTestJsFile(), { flag: 'w+' })
                
            }

            // install NotFound404.test.js file
            if ( userOptionsObject.files.includes( vitestDepObject.files.notFound404TestJs.name )) {

                fs.outputFileSync(cwd + vitestDepObject.files.notFound404TestJs.path + vitestDepObject.files.notFound404TestJs.name, notFound404TestJsFile(), { flag: 'w+' })
                
            }

        }
        
        // if the stack is the ssg stack
        else if ( userOptionsObject.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {

            // install b.test.js file
            if ( userOptionsObject.files.includes( vitestDepObject.files.bTestJs.name )) {

                fs.outputFileSync(cwd + vitestDepObject.files.bTestJs.path + vitestDepObject.files.bTestJs.name, bTestJsFile(), { flag: 'w+' })
                
            }

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
