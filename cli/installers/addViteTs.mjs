// ./cli/installers/addViteTs.mjs

import fs from 'fs-extra'

import addNodeTypes from './addNodeTypes.mjs'
import addTailwindCss from '../installers/addTailwindCss.mjs'

import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import indexHtmlFile from '../generators/indexHtmlFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import tailwindConfigCjsFile from '../generators/tailwindConfigCjsFile.mjs'
import tailwindCssFile from '../generators/tailwindCssFile.mjs'
import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'
import vvButtonVueFile from '../generators/vvButtonVueFile.mjs'
import vvColorModeButtonVueFile from '../generators/vvColorModeButtonVueFile.mjs'
import vvElVueFile from '../generators/vvElVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

import checkOrMakeDirSync from '../helpers/checkOrMakeDirSync.mjs'
import copySyncSvgsToAssets from '../helpers/copySyncSvgsToAssets.mjs'
import cwd from '../helpers/cwd.mjs'
import moveViteTsFilesToRoot from '../helpers/moveViteTsFilesToRoot.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

export default function (userOpts, stackObj, stackStubPath, installPkgsArr) {
    
    
    run(`npm create vite@latest ${userOpts.name} -- --template vue-ts`)
    
    
    installPkgsArr.push('vite@latest')

    
    // copy each vite generated folder and file from the vite generated directory back up into the root directory
    moveViteTsFilesToRoot(userOpts.name)

    
    // copy the VueVentus starter SVG files into project
    copySyncSvgsToAssets()

    
    // copy the VueVentus starter files from the cli stubs files
    fs.copySync(stackStubPath + 'App.vue', cwd + '/src/App.vue')
    fs.copySync(stackStubPath + 'HelloWorld.vue', cwd + '/src/components/HelloWorld.vue')

    
    // copy the VueVentus starter end user app component files from the cli stubs files
    const compos = cwd + '/src/components'
    const composVv = compos + '/vv'

    checkOrMakeDirSync(compos)
    checkOrMakeDirSync(composVv)
    checkOrMakeDirSync(composVv + '/anchors')
    checkOrMakeDirSync(composVv + '/buttons')
    checkOrMakeDirSync(composVv + '/elements')
    checkOrMakeDirSync(composVv + '/inputs')
    checkOrMakeDirSync(composVv + '/lists')
    checkOrMakeDirSync(composVv + '/textareas')
    
    fs.writeFileSync(composVv + '/anchors/VvAnchor.vue', vvAnchorVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/buttons/VvButton.vue', vvButtonVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/buttons/VvColorModeButton.vue', vvColorModeButtonVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/elements/VvEl.vue', vvElVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/inputs/VvInput.vue', vvInputVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/lists/VvListItem.vue', vvListItemVueFile(), { flag: 'w+' })
    fs.writeFileSync(composVv + '/textareas/VvTextarea.vue', vvTextareaVueFile(), { flag: 'w+' })
        
    
    // conditionally add either the vv cli version with dark/light mode code or the vite generated index.html file
    if ( userOpts.files.includes( stackObj.deps.gsap.files.vvScrollUp.name ) ) {

        fs.writeFileSync(cwd + '/index.html', indexHtmlFile(), { flag: 'w+' })

    } else {

        moveFile(cwd + '/' + userOpts.name + '/index.html', cwd + '/index.html')

    }

    
    // conditionally add either the vite config file with prismjs config/plugin code or without it
    if ( userOpts.deps.includes( stackObj.deps.prism.name ) ) {

        fs.copySync(stackStubPath + 'vite.config.prism.ts', cwd + '/vite.config.ts')

    } else {

        fs.copySync(stackStubPath + 'vite.config.ts', cwd + '/vite.config.ts')
        
    }

    
    console.log(`\nThe ${vvBrand} CLI installed/moved all ${stackObj.name} deps/files to root and merged all package.json data successfully into the root package.json file!\n`)
    
    
    // install tailwind css
    addTailwindCss(installPkgsArr)


    // install tailwind.css file
    if ( userOpts.files.includes( stackObj.files.tailwindCss.name ) ) {

        checkOrMakeDirSync(cwd + '/src/css')

        fs.writeFileSync(cwd + stackObj.files.tailwindCss.path + stackObj.files.tailwindCss.name, tailwindCssFile(), { flag: 'w+' })

    }


    // install postcss.config.cjs file
    if ( userOpts.files.includes( stackObj.files.postCssConfigCjs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.postCssConfigCjs.path + stackObj.files.postCssConfigCjs.name, postcssConfigCjsFile(), { flag: 'w+' })
    }


    // install app.vv.ts file
    if ( userOpts.files.includes( stackObj.files.appVvTs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.appVvTs.path + stackObj.files.appVvTs.name, appVvTsFile(), { flag: 'w+' })
    }


    // install app.colors.json file
    if ( userOpts.files.includes( stackObj.files.appColorsJson.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.appColorsJson.path + stackObj.files.appColorsJson.name, appColorsJsonFile(), { flag: 'w+' })
    }


    // determine the stack to determine the settings of tailwind.config.cjs generation method
    const isStackSsg =  String(stackObj.name).toLowerCase().includes('ssg') ? true : false

    // install tailwind.config.cjs file
    if ( userOpts.files.includes( stackObj.files.tailwindConfigCjs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.tailwindConfigCjs.path + stackObj.files.tailwindConfigCjs.name, tailwindConfigCjsFile(isStackSsg), { flag: 'w+' })
    }


    console.log(`\nThe ${vvBrand} CLI installed all ${stackObj.name} selected base files!\n`)
    
    
    // install types
    addNodeTypes(installPkgsArr)
    
}
