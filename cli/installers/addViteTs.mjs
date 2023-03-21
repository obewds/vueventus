// ./cli/installers/addViteTs.mjs

import fs from 'fs-extra'

import addNodeTypes from './addNodeTypes.mjs'
import addTailwindCss from './addTailwindCss.mjs'

import appColorsJsonFile from '../generators/appColorsJsonFile.mjs'
import appVueFile from '../generators/appVueFile.mjs'
import appVueSsgFile from '../generators/appVueSsgFile.mjs'
import appVvTsFile from '../generators/appVvTsFile.mjs'
import catchAll404SsgFile from '../generators/catchAll404SsgFile.mjs'
import helloWorldVueSsgFile from '../generators/helloWorldVueSsgFile.mjs'
import homeVueFile from '../generators/homeVueFile.mjs'
import indexHtmlFile from '../generators/indexHtmlFile.mjs'
import notFound404VueFile from '../generators/notFound404VueFile.mjs'
import postcssConfigCjsFile from '../generators/postcssConfigCjsFile.mjs'
import routesTsFile from '../generators/routesTsFile.mjs'
import tailwindConfigCjsFile from '../generators/tailwindConfigCjsFile.mjs'
import tailwindCssFile from '../generators/tailwindCssFile.mjs'
import viteConfigPrismTsFile from '../generators/viteConfigPrismTsFile.mjs'
import viteConfigPrismTsSsgFile from '../generators/viteConfigPrismTsSsgFile.mjs'
import viteConfigTsFile from '../generators/viteConfigTsFile.mjs'
import viteConfigTsSsgFile from '../generators/viteConfigTsSsgFile.mjs'
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
import vvRouterLinkVueFile from '../generators/vvRouterLinkVueFile.mjs'
import vvSelectVueFile from '../generators/vvSelectVueFile.mjs'
import vvTextareaVueFile from '../generators/vvTextareaVueFile.mjs'

import cliData from '../helpers/cliData.mjs'
import copySyncSvgsToAssets from '../helpers/copySyncSvgsToAssets.mjs'
import cwd from '../helpers/cwd.mjs'
import moveViteTsFilesToRoot from '../helpers/moveViteTsFilesToRoot.mjs'
import run from '../helpers/run.mjs'
import vvBrand from '../helpers/vvBrand.mjs'


export default function (userOpts, stackObj, installPkgsArr) {
    
    // TODO: Keep an eye on vite-plugin-vue-markdown
    // https://github.com/mdit-vue/vite-plugin-vue-markdown
    // as currently Vite v4 conflicts with a peer dep for Vite v3 in vite-plugin-vue-markdown
    run(`npm create vite@latest ${userOpts.name} -- --template vue-ts`)
    
    // TODO: Same as to do above! ^^^
    installPkgsArr.push('vite@latest')

    
    // copy each vite generated folder and file from the vite generated directory back up into the root directory
    moveViteTsFilesToRoot(userOpts.name)

    
    // copy the VueVentus starter SVG files into project
    copySyncSvgsToAssets()
    

    // if the stack is vue-ts
    if ( userOpts.stack === cliData.stacks.vueTwViteTs.name ) {

        // install vue-router
        run(`npm install vue-router@4 @vueuse/head --save-dev`)
    
        installPkgsArr.push('vue-router@4', '@vueuse/head')
            
        // generate the App.vue file
        fs.outputFileSync(cwd + '/src/App.vue', appVueFile(), { flag: 'w+' })

        // generate the Home.vue file
        fs.outputFileSync(cwd + '/src/pages/Home.vue', homeVueFile(), { flag: 'w+' })

        // generate the NotFound404.ts file
        fs.outputFileSync(cwd + '/src/pages/NotFound404.vue', notFound404VueFile(), { flag: 'w+' })

        // generate the routes.ts file
        fs.outputFileSync(cwd + '/src/router/routes.ts', routesTsFile(), { flag: 'w+' })

        console.log(`\nThe ${vvBrand} CLI installed/added the vue-router dep/files successfully!\n`)

    }
    
    
    // if the stack is vite-ssg
    if ( userOpts.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {

        // generate the SSG App.vue file
        fs.outputFileSync(cwd + '/src/App.vue', appVueSsgFile(), { flag: 'w+' })

        // generate the SSG HelloWorld.vue file
        fs.outputFileSync(cwd + '/src/components/HelloWorld.vue', helloWorldVueSsgFile(), { flag: 'w+' })

        // generate the SSG 404 catch all [...all].vue file
        fs.outputFileSync(cwd + '/src/pages/[...all].vue', catchAll404SsgFile(), { flag: 'w+' })

    }

    
    // copy the VueVentus starter end user app component files from the cli stubs files
    const composVv = cwd + '/src/components/vv/'
    fs.outputFileSync(composVv + 'anchors/VvAnchor.vue', vvAnchorVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'buttons/VvButton.vue', vvButtonVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'inputs/VvCheckbox.vue', vvCheckboxVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'buttons/VvColorModeButton.vue', vvColorModeButtonVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'elements/VvEl.vue', vvElVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'forms/VvFormGroup.vue', vvFormGroupVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'inputs/VvInput.vue', vvInputVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'lists/VvList.vue', vvListVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'selects/VvListbox.vue', vvListboxVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'lists/VvListItem.vue', vvListItemVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'forms/VvQuadFormGroup.vue', vvQuadFormGroupVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'inputs/VvRadio.vue', vvRadioVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'anchors/VvRouterLink.vue', vvRouterLinkVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'selects/VvSelect.vue', vvSelectVueFile(), { flag: 'w+' })
    fs.outputFileSync(composVv + 'textareas/VvTextarea.vue', vvTextareaVueFile(), { flag: 'w+' })
    
    
    // conditionally add either the vv cli version with dark/light mode code or the vite generated index.html file
    if ( userOpts.files.includes( stackObj.deps.gsap.files.vvScrollUp.name ) ) {

        fs.outputFileSync(cwd + '/index.html', indexHtmlFile(), { flag: 'w+' })

    } else {

        moveFile(cwd + '/' + userOpts.name + '/index.html', cwd + '/index.html')

    }

    
    // conditionally add either the vite config file with prismjs config/plugin code or without it
    if ( userOpts.deps.includes( stackObj.deps.prism.name ) ) {

        // if the stack is vue-ts
        if ( userOpts.stack === cliData.stacks.vueTwViteTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigPrismTsFile(), { flag: 'w+' })
        }

        // if the stack is vite-ssg
        if ( userOpts.stack === cliData.stacks.vueTwViteSsgMdTs.name ) {
            fs.outputFileSync(cwd + '/vite.config.ts', viteConfigPrismTsSsgFile(), { flag: 'w+' })
        }

    } else {

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
