// ./cli/installers/addViteTs.mjs

import fs from 'fs-extra'

import addNodeTypes from './addNodeTypes.mjs'
import addTailwindCss from './addTailwindCss.mjs'

import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVueFile from '../generators/appVueFile.mjs'
import appVueSsgFile from '../generators/appVueSsgFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import helloWorldVueFile from '../generators/helloWorldVueFile.mjs'
import helloWorldVueSsgFile from '../generators/helloWorldVueSsgFile.mjs'
import indexHtmlFile from '../generators/indexHtmlFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import tailwindConfigCjsFile from '../generators/tailwindConfigCjsFile.mjs'
import tailwindCssFile from '../generators/tailwindCssFile.mjs'
import viteConfigPrismTsFile from '../generators/viteConfigPrismTsFile.mjs'
import viteConfigPrismTsSsgFile from '../generators/viteConfigPrismTsSsgFile.mjs'
import viteConfigTsFile from '../generators/viteConfigTsFile.mjs'
import viteConfigTsSsgFile from '../generators/viteConfigTsSsgFile.mjs'
import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'
import vvButtonVueFile from '../generators/vvButtonVueFile.mjs'
import vvColorModeButtonVueFile from '../generators/vvColorModeButtonVueFile.mjs'
import vvElVueFile from '../generators/vvElVueFile.mjs'
import vvInputVueFile from '../generators/vvInputVueFile.mjs'
import vvListItemVueFile from '../generators/vvListItemVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

import cliData from '../helpers/cliData.mjs'
import copySyncSvgsToAssets from '../helpers/copySyncSvgsToAssets.mjs'
import cwd from '../helpers/cwd.mjs'
import moveViteTsFilesToRoot from '../helpers/moveViteTsFilesToRoot.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'

// TODO: need to figure out how to best eliminate use of stackStubsString here
export default function (userOpts, stackObj, stackStubPath, installPkgsArr) {
    
    
    run(`npm create vite@latest ${userOpts.name} -- --template vue-ts`)
    
    
    installPkgsArr.push('vite@latest')

    
    // copy each vite generated folder and file from the vite generated directory back up into the root directory
    moveViteTsFilesToRoot(userOpts.name)

    
    // copy the VueVentus starter SVG files into project
    copySyncSvgsToAssets()

    
    // copy the VueVentus starter files from the cli stubs files
    // TODO: create generate method for the vue-ts stack App.vue file
    // TODO: create generate method for the vite-ssg stack App.vue file
    // fs.copySync(stackStubPath + 'App.vue', cwd + '/src/App.vue')

    // TODO: create generate method for the vue-ts stack HelloWorld.vue file
    // TODO: create generate method for the vite-ssg stack HelloWorld.vue file
    // fs.copySync(stackStubPath + 'HelloWorld.vue', cwd + '/src/components/HelloWorld.vue')
    

    // if the stack is vue-ts
    if ( userOpts.stack === cliData.stacks.vueTwViteTs.name ) {
            
        // generate the App.vue file
        fs.outputFileSync(cwd + '/src/App.vue', appVueFile(), { flag: 'w+' })

        // generate the HelloWorld.vue file
        fs.outputFileSync(cwd + '/src/HelloWorld.vue', helloWorldVueFile(), { flag: 'w+' })

    }
    
    
    // if the stack is vite-ssg
    if ( userOpts.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {

        // generate the SSG App.vue file
        fs.outputFileSync(cwd + '/src/App.vue', appVueSsgFile(), { flag: 'w+' })

        // generate the SSG HelloWorld.vue file
        fs.outputFileSync(cwd + '/src/HelloWorld.vue', helloWorldVueSsgFile(), { flag: 'w+' })

    }

    
    // copy the VueVentus starter end user app component files from the cli stubs files
    const composVv = cwd + '/src/components/vv/'
    fs.outputFileSync(composVv + 'anchors/VvAnchor.vue', vvAnchorVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'buttons/VvButton.vue', vvButtonVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'buttons/VvColorModeButton.vue', vvColorModeButtonVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'elements/VvEl.vue', vvElVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'inputs/VvInput.vue', vvInputVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'lists/VvListItem.vue', vvListItemVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'textareas/VvTextarea.vue', vvTextareaVueFile(), { flag: 'w+' })
    
    
    // conditionally add either the vv cli version with dark/light mode code or the vite generated index.html file
    if ( userOpts.files.includes( stackObj.deps.gsap.files.vvScrollUp.name ) ) {

        fs.outputFileSync(cwd + '/index.html', indexHtmlFile(), { flag: 'w+' })

    } else {

        moveFile(cwd + '/' + userOpts.name + '/index.html', cwd + '/index.html')

    }

    
    // conditionally add either the vite config file with prismjs config/plugin code or without it
    if ( userOpts.deps.includes( stackObj.deps.prism.name ) ) {

        // TODO: create generate method for the vue-ts stack vite.config.prism.ts file
        // TODO: create generate method for the vite-ssg stack vite.config.prism.ts file
        // fs.copySync(stackStubPath + 'vite.config.prism.ts', cwd + '/vite.config.ts')

        // if the stack is vue-ts
        if ( userOpts.stack === cliData.stacks.vueTwViteTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigPrismTsFile(), { flag: 'w+' })
        }

        // if the stack is vite-ssg
        if ( userOpts.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigPrismTsSsgFile(), { flag: 'w+' })
        }

    } else {

        // TODO: create generate method for the vue-ts stack vite.config.ts file
        // TODO: create generate method for the vite-ssg stack vite.config.ts file
        // fs.copySync(stackStubPath + 'vite.config.ts', cwd + '/vite.config.ts')

        // if the stack is vue-ts
        if ( userOpts.stack === cliData.stacks.vueTwViteTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigTsFile(), { flag: 'w+' })
        }

        // if the stack is vite-ssg
        if ( userOpts.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigTsSsgFile(), { flag: 'w+' })
        }
        
    }

    
    console.log(`\nThe ${vvBrand} CLI installed/moved all ${stackObj.name} deps/files to root and merged all package.json data successfully into the root package.json file!\n`)
    
    
    // install tailwind css
    addTailwindCss(installPkgsArr)


    // install tailwind.css file
    if ( userOpts.files.includes( stackObj.files.tailwindCss.name ) ) {

        fs.outputFileSync(cwd + stackObj.files.tailwindCss.path + stackObj.files.tailwindCss.name, tailwindCssFile(), { flag: 'w+' })

    }


    // install postcss.config.cjs file
    if ( userOpts.files.includes( stackObj.files.postCssConfigCjs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.postCssConfigCjs.path + stackObj.files.postCssConfigCjs.name, postcssConfigCjsFile(), { flag: 'w+' })
    }


    // install app.vv.ts file
    if ( userOpts.files.includes( stackObj.files.appVvTs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appVvTs.path + stackObj.files.appVvTs.name, appVvTsFile(), { flag: 'w+' })
    }


    // install app.colors.json file
    if ( userOpts.files.includes( stackObj.files.appColorsJson.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appColorsJson.path + stackObj.files.appColorsJson.name, appColorsJsonFile(), { flag: 'w+' })
    }


    // determine the stack to determine the settings of tailwind.config.cjs generation method
    const isStackSsg =  String(stackObj.name).toLowerCase().includes('ssg') ? true : false

    // install tailwind.config.cjs file
    if ( userOpts.files.includes( stackObj.files.tailwindConfigCjs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.tailwindConfigCjs.path + stackObj.files.tailwindConfigCjs.name, tailwindConfigCjsFile(isStackSsg), { flag: 'w+' })
    }


    console.log(`\nThe ${vvBrand} CLI installed all ${stackObj.name} selected base files!\n`)
    
    
    // install types
    addNodeTypes(installPkgsArr)
    
}
