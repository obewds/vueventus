// ./cli/helpers/installViteTs.mjs

import fs from 'fs-extra'

import checkOrMakeDirSync from './checkOrMakeDirSync.mjs'
import copySyncSvgsToAssets from './copySyncSvgsToAssets.mjs'
import cwd from './cwd.mjs'
import generateAppColorsJsonFile from './generateAppColorsJsonFile.mjs'
import generateAppVvTsFile from './generateAppVvTsFile.mjs'
import generateIndexHtmlFile from './generateIndexHtmlFile.mjs'
import generatePostcssConfigCjsFile from './generatePostcssConfigCjsFile.mjs'
import generateTailwindConfigCjsFile from './generateTailwindConfigCjsFile.mjs'
import generateTailwindCssFile from './generateTailwindCssFile.mjs'
import generateVvAnchorVueFile from './generateVvAnchorVueFile.mjs'
import generateVvButtonVueFile from './generateVvButtonVueFile.mjs'
import generateVvColorModeButtonVueFile from './generateVvColorModeButtonVueFile.mjs'
import generateVvElVueFile from './generateVvElVueFile.mjs'
import generateVvInputVueFile from './generateVvInputVueFile.mjs'
import generateVvListItemVueFile from './generateVvListItemVueFile.mjs'
import generateVvListItemVueFile from './generateVvTextareaVueFile.mjs'
import installNodeTypes from './installNodeTypes.mjs'
import installTailwindCss from './installTailwindCss.mjs'
import moveViteTsFilesToRoot from './moveViteTsFilesToRoot.mjs'
import run from './run.mjs'
import vvBrand from './vvBrand.mjs'

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
    // fs.copySync(stackStubPath + 'vv', cwd + '/src/components/vv')

    checkOrMakeDirSync(cwd + '/src/components')
    checkOrMakeDirSync(cwd + '/src/components/vv')
    checkOrMakeDirSync(cwd + '/src/components/vv/anchors')
    checkOrMakeDirSync(cwd + '/src/components/vv/buttons')
    checkOrMakeDirSync(cwd + '/src/components/vv/elements')
    checkOrMakeDirSync(cwd + '/src/components/vv/inputs')
    checkOrMakeDirSync(cwd + '/src/components/vv/lists')
    checkOrMakeDirSync(cwd + '/src/components/vv/textareas')
    
    fs.writeFileSync(cwd + '/src/components/vv/anchors/VvAnchor.vue', generateVvAnchorVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/buttons/VvButton.vue', generateVvButtonVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/buttons/VvColorModeButton.vue', generateVvColorModeButtonVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/elements/VvEl.vue', generateVvElVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/inputs/VvInputs.vue', generateVvInputVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/lists/VvListItem.vue', generateVvListItemVueFile(), { flag: 'w+' })
    fs.writeFileSync(cwd + '/src/components/vv/textareas/VvTextarea.vue', generateVvTextareaVueFile(), { flag: 'w+' })














        
    
    // conditionally add either the vv cli version with dark/light mode code or the vite generated index.html file
    if ( userOpts.files.includes( stackObj.deps.gsap.files.vvScrollUp.name ) ) {

        fs.writeFileSync(cwd + '/index.html', generateIndexHtmlFile(), { flag: 'w+' })

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
    installTailwindCss(installPkgsArr)


    // install tailwind.css file
    if ( userOpts.files.includes( stackObj.files.tailwindCss.name ) ) {

        checkOrMakeDirSync(cwd + '/src/css')

        fs.writeFileSync(cwd + stackObj.files.tailwindCss.path + stackObj.files.tailwindCss.name, generateTailwindCssFile(), { flag: 'w+' })

    }


    // install postcss.config.cjs file
    if ( userOpts.files.includes( stackObj.files.postCssConfigCjs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.postCssConfigCjs.path + stackObj.files.postCssConfigCjs.name, generatePostcssConfigCjsFile(), { flag: 'w+' })
    }


    // install app.vv.ts file
    if ( userOpts.files.includes( stackObj.files.appVvTs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.appVvTs.path + stackObj.files.appVvTs.name, generateAppVvTsFile(), { flag: 'w+' })
    }


    // install app.colors.json file
    if ( userOpts.files.includes( stackObj.files.appColorsJson.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.appColorsJson.path + stackObj.files.appColorsJson.name, generateAppColorsJsonFile(), { flag: 'w+' })
    }


    // determine the stack to determine the settings of tailwind.config.cjs generation method
    const isStackSsg =  String(stackObj.name).toLowerCase().includes('ssg') ? true : false

    // install tailwind.config.cjs file
    if ( userOpts.files.includes( stackObj.files.tailwindConfigCjs.name ) ) {
        fs.writeFileSync(cwd + stackObj.files.tailwindConfigCjs.path + stackObj.files.tailwindConfigCjs.name, generateTailwindConfigCjsFile(isStackSsg), { flag: 'w+' })
    }


    console.log(`\nThe ${vvBrand} CLI installed all ${stackObj.name} selected base files!\n`)
    
    
    // install types
    installNodeTypes(installPkgsArr)
    
}
