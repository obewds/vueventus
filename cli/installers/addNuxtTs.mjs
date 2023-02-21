// ./cli/installers/addNuxtTs.mjs

import fs from 'fs-extra'

import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVueNuxtFile from '../generators/appVueNuxtFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import onPageLoadColorModesNuxtJsFile from '../generators/onPageLoadColorModesNuxtJsFile.mjs'
import pagesIndexNuxtFile from '../generators/pagesIndexNuxtFile.mjs'
import nuxtConfigTsFile from '../generators/nuxtConfigTsFile.mjs'
import tailwindConfigTsNuxtFile from '../generators/tailwindConfigTsNuxtFile.mjs'

import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'
import vvButtonVueFile from '../generators/vvButtonVueFile.mjs'
import vvCheckboxVueFile from '../generators/vvCheckboxVueFile.mjs'
import vvColorModeButtonVueFile from '../generators/vvColorModeButtonVueFile.mjs'
import vvElVueFile from '../generators/vvElVueFile.mjs'
import vvFormGroupVueFile from '../generators/vvFormGroupVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListVueFile from '../generators/vvListVueFile.mjs'
import vvListboxVueFile from '../generators/vvListboxVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvQuadFormGroupVueFile from '../generators/vvQuadFormGroupVueFile.mjs'
import vvRadioVueFile from '../generators/vvRadioVueFile.mjs'
import vvSelectVueFile from '../generators/vvSelectVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

import cwd from '../helpers/cwd.mjs'
import moveNuxtTsFilesToRoot from '../helpers/moveNuxtTsFilesToRoot.mjs'
import run from '../helpers/run.mjs'


export default function (userOpts, stackObj, installPkgsArr) {

    run(`npx nuxi init ${userOpts.name}`)

    run(`npm pkg set scripts.build="nuxt build"`)
    run(`npm pkg set scripts.dev="nuxt dev -o"`)
    run(`npm pkg set scripts.generate="nuxt generate"`)
    run(`npm pkg set scripts.preview="nuxt preview"`)
    run(`npm pkg set scripts.postinstall="nuxt prepare"`)

    // copy each nuxt 3 generated file from the nuxi generated directory back up into the root directory
    moveNuxtTsFilesToRoot(userOpts.name)

    // generate the vueventus configured (with deps) nuxt.config.ts file
    fs.outputFileSync(cwd + '/nuxt.config.ts', nuxtConfigTsFile(), { flag: 'w+' })

    // install nuxt 3
    run(`npm install nuxt@latest --save-dev`)

    installPkgsArr.push('nuxt@latest')



    // install typescript
    run(`npm install typescript --save-dev`)

    installPkgsArr.push('typescript')



    // install tailwind css
    run(`npm install @nuxtjs/tailwindcss --save-dev`)

    installPkgsArr.push('@nuxtjs/tailwindcss')

    // install tailwind.config.ts file
    if ( userOpts.files.includes( stackObj.files.tailwindConfigTs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.tailwindConfigTs.path + stackObj.files.tailwindConfigTs.name, tailwindConfigTsNuxtFile(), { flag: 'w+' })
    }



    // install headless ui
    run(`npm install nuxt-headlessui @headlessui/tailwindcss --save-dev`)

    installPkgsArr.push('nuxt-headlessui', '@headlessui/tailwindcss')



    // install app.vv.ts file
    if ( userOpts.files.includes( stackObj.files.appVvTs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appVvTs.path + stackObj.files.appVvTs.name, appVvTsFile(), { flag: 'w+' })
    }

    // install app.colors.json file
    if ( userOpts.files.includes( stackObj.files.appColorsJson.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appColorsJson.path + stackObj.files.appColorsJson.name, appColorsJsonFile(), { flag: 'w+' })
    }

    // install app.vue file
    if ( userOpts.files.includes( stackObj.files.appVue.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appVue.path + stackObj.files.appVue.name, appVueNuxtFile(), { flag: 'w+' })
    }



    // copy the VueVentus starter end user app component files 
    // from the cli stubs file generators
    const composVv = cwd + '/components/Vv/'

    fs.outputFileSync(composVv + 'Anchor.vue', vvAnchorVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Button.vue', vvButtonVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Checkbox.vue', vvCheckboxVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'ColorModeButton.vue', vvColorModeButtonVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'El.vue', vvElVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'FormGroup.vue', vvFormGroupVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Input.vue', vvInputVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'List.vue', vvListVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Listbox.vue', vvListboxVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'ListItem.vue', vvListItemVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'QuadFormGroup.vue', vvQuadFormGroupVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Radio.vue', vvRadioVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Select.vue', vvSelectVueFile(true), { flag: 'w+' })
    fs.outputFileSync(composVv + 'Textarea.vue', vvTextareaVueFile(true), { flag: 'w+' })



    // install color modes js file in nuxt public directory - key to avoid FOUC with dark/light mode
    if ( userOpts.files.includes( stackObj.files.onPageLoadColorModesNuxtJs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.onPageLoadColorModesNuxtJs.path + stackObj.files.onPageLoadColorModesNuxtJs.name, onPageLoadColorModesNuxtJsFile(), { flag: 'w+' })
    }



    // install pages/index.vue file
    if ( userOpts.files.includes( stackObj.files.pagesIndex.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.pagesIndex.path + stackObj.files.pagesIndex.name, pagesIndexNuxtFile(), { flag: 'w+' })
    }


}
