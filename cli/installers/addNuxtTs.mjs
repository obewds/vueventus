// ./cli/installers/addNuxtTs.mjs

import appVueNuxtFile from '../generators/appVueNuxtFile.mjs'
import nuxtConfigTsFile from '../generators/nuxtConfigTsFile.mjs'
import vvAnchorVueFile from '../generators/vvAnchorVueFile.mjs'

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

    // copy each nuxt 3 generated file 
    // from the nuxi generated directory 
    // back up into the root directory
    moveNuxtTsFilesToRoot(userOpts.name)

    // generate the vueventus configured (with deps) nuxt.config.ts file
    fs.outputFileSync(cwd + '/nuxt.config.ts', nuxtConfigTsFile(), { flag: 'w+' })

    // install nuxt 3
    run(`npm install nuxt@latest --save-dev`)

    installPkgsArr.push('nuxt@latest')

    // install tailwind css
    run(`npm install @nuxtjs/tailwindcss --save-dev`)

    installPkgsArr.push('@nuxtjs/tailwindcss')

    // install headless ui
    run(`npm install nuxt-headlessui @headlessui/tailwindcss --save-dev`)

    installPkgsArr.push('nuxt-headlessui', '@headlessui/tailwindcss')

    // copy the VueVentus starter end user app component files 
    // from the cli stubs file generators
    const composVv = cwd + '/components/Vv/'
    fs.outputFileSync(composVv + 'Anchor.vue', vvAnchorVueFile(true), { flag: 'w+' })

    // install app.vv.ts file
    if ( userOpts.files.includes( stackObj.files.appVvTs.name ) ) {
        fs.outputFileSync(cwd + stackObj.files.appVvTs.path + stackObj.files.appVvTs.name, appVueNuxtFile(), { flag: 'w+' })
    }

}
