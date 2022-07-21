// ./cli/helpers/installViteTs.mjs

import fs from 'fs-extra'
import copySyncSvgsToAssets from './copySyncSvgsToAssets.mjs'
import cwd from './cwd.mjs'
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
    fs.copySync(stackStubPath + 'vv', cwd + '/src/components/vv')
        
    // conditionally add either the vv cli version with dark/light mode code or the vite generated index.html file
    if ( userOpts.files.includes( stackObj.deps.gsap.files.vvScrollUp.name ) ) {
        fs.copySync(stackStubPath + 'index.html', cwd + '/index.html')
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
    
    // install types
    installNodeTypes(installPkgsArr)
    
    // install stack VueVentus tailwind files
    const vvStackFileKeys = Object.keys(stackObj.files)
    //const vvStackFileKeys = ['appVvTs', 'appColorsJson', 'tailwindConfigCjs', 'tailwindCss']

    vvStackFileKeys.forEach( (key) => {
        if ( userOpts.files.includes( stackObj.files[key].name ) ) {
            fs.copySync(
                stackStubPath + stackObj.files[key].name,
                cwd + stackObj.files[key].path + stackObj.files[key].name
            )
        } 
    })
    
}
