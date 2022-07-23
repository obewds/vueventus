// ./cli/helpers/installViteTs.mjs

import fs from 'fs-extra'
import copySyncSvgsToAssets from './copySyncSvgsToAssets.mjs'
import cwd from './cwd.mjs'
import generateAppColorsJsonFile from './generateAppColorsJsonFile.mjs'
import generateAppVvTsFile from './generateAppVvTsFile.mjs'
import generatePostcssConfigCjsFile from './generatePostcssConfigCjsFile.mjs'
import generateTailwindConfigCjsFile from './generateTailwindConfigCjsFile.mjs'
import generateTailwindCssFile from './generateTailwindCssFile.mjs'
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


    // install tailwind.css file
    if ( userOpts.files.includes( stackObj.files.tailwindCss.name ) ) {
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
    
    
    // install stack files
    /*const vvStackFileKeys = Object.keys(stackObj.files)

    
    vvStackFileKeys.forEach( (key) => {

        if ( userOpts.files.includes( stackObj.files[key].name ) ) {

            // conditional to skip files generated above
            if ( stackObj.files[key].name !== stackObj.files.tailwindCss.name && stackObj.files[key].name !== stackObj.files.postCssConfigCjs.name && stackObj.files[key].name !== stackObj.files.appVvTs.name && stackObj.files[key].name !== stackObj.files.appColorsJson.name ) {

                fs.copySync(
                    stackStubPath + stackObj.files[key].name,
                    cwd + stackObj.files[key].path + stackObj.files[key].name
                )

            }

        } 

    })*/
    
}
