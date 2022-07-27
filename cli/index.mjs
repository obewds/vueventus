#!/usr/bin/env node
// ./cli/index.mjs

import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import merge from 'deepmerge'
import rimraf from 'rimraf'

import addDep from './installers/addDep.mjs'
import addViteTs from './installers/addViteTs.mjs'
import addFaFreeTs from './installers/addFaFreeTs.mjs'
import addFaProTs from './installers/addFaProTs.mjs'
import addGsapTs from './installers/addGsapTs.mjs'
import addPrismjs from './installers/addPrismjs.mjs'
import addVitest from './installers/addVitest.mjs'

import aMdFile from '../generators/aMdFile.mjs'
import bMdFile from '../generators/bMdFile.mjs'
import bVueFile from '../generators/bVueFile.mjs'
import counterVueFile from '../generators/counterVueFile.mjs'
import indexMdFile from '../generators/indexMdFile.mjs'
import mousePosVueFile from '../generators/mousePosVueFile.mjs'
import piniaRootTsFile from '../generators/piniaRootTsFile.mjs'

import cliData from './helpers/cliData.mjs'
import cwd from './helpers/cwd.mjs'
import getVvTsConfig from './helpers/getVvTsConfig.mjs'
import gradientText from './helpers/gradientText.mjs'
import mergeJson from './helpers/mergeJson.mjs'
import require from './helpers/require.mjs'
import run from './helpers/run.mjs'
import stubsPath from './helpers/stubsPath.mjs'
import vvBrand from './helpers/vvBrand.mjs'
import writeFileMainTs from './helpers/writeFileMainTs.mjs'
import writeFileMainTsSsg from './helpers/writeFileMainTsSsg.mjs'
import writeJson from './helpers/writeJson.mjs'

// const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )

const cli = cliData

// user object to store cli user interaction results
let userOptions = {
    name: '',
    stack: '',
    faProLicense: '',
    deps: [],
    files: [],
}



// show cli start message
console.log(`


    ${gradientText('Welcome to the VueVentus CLI!')}
    ${gradientText('-----------------------------')}
    Install a VueVentus dev stack and optional dependencies.


`)



async function setProjectName () {
    
    const answers = await inquirer.prompt({
        name: 'projectName',
        type: 'input',
        message: 'What is the name of your new ' + vvBrand + ' project?\n',
    })

    return answers.projectName
}

userOptions.name = await setProjectName()

console.log(' ')



async function chooseStack () {

    let choices = []

    const stackKeys = Object.keys(cli.stacks)

    stackKeys.forEach( (stack) => choices.push(cli.stacks[stack].name) )
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vvBrand + ' stack are you installing?\n',
        choices: choices,
    })

    return answers.userStack
}

userOptions.stack = await chooseStack()

console.log(' ')



async function chooseDeps () {

    let stack = {}
    let choices = []

    // set the stack
    if ( userOptions.stack === cli.stacks.vueTwViteTs.name ) {
        stack = cli.stacks.vueTwViteTs
    } else if ( userOptions.stack === cli.stacks.vueTwViteSsgMdTs.name ) {
        stack = cli.stacks.vueTwViteSsgMdTs
    }

    const depKeys = Object.keys(stack.deps)

    depKeys.forEach( (dep) => choices.push({
        name: stack.deps[dep].name,
        checked: stack.deps[dep].checked,
    }))
    
    const answers = await inquirer.prompt({
        name: 'userDeps',
        type: 'checkbox',
        message: 'Which ' + vvBrand + ' deps would you like to install?\n',
        choices: choices,
    })

    return answers.userDeps

}

userOptions.deps = await chooseDeps()

console.log(' ')



async function chooseFiles () {

    let stack = {}
    let stackFiles = []
    let depFiles = []

    // set the stack
    if ( userOptions.stack === cli.stacks.vueTwViteTs.name ) {
        stack = cli.stacks.vueTwViteTs
    } else if ( userOptions.stack === cli.stacks.vueTwViteSsgMdTs.name ) {
        stack = cli.stacks.vueTwViteSsgMdTs
    }

    const fileKeys = Object.keys(stack.files)

    fileKeys.forEach( (file) => stackFiles.push({
        name: stack.files[file].name,
        checked: stack.files[file].checked,
    }))

    const depKeys = Object.keys(stack.deps)

    depKeys.forEach( (dep) => {

        const files = stack.deps[dep].files ? Object.keys(stack.deps[dep].files) : []

        if (dep !== 'fontawesome' && dep !== 'faPro') {
            files.forEach( (file) => {
                depFiles.push({
                    name: stack.deps[dep].files[file].name,
                    checked: stack.deps[dep].files[file].checked,
                })
            })
        }

        if (dep === 'fontawesome' || dep === 'faPro') {
            if (userOptions.deps.includes(stack.deps.fontawesome.name) || userOptions.deps.includes(stack.deps.faPro.name)) {
                if (userOptions.deps.includes(stack.deps.faPro.name)) {
                    files.forEach( (file) => {
                        depFiles.push({
                            name: stack.deps[dep].files[file].name,
                            checked: stack.deps[dep].files[file].checked,
                        })
                    })
                } else {
                    files.forEach( (file) => {
                        depFiles.push({
                            name: stack.deps[dep].files[file].name,
                            checked: stack.deps[dep].files[file].checked,
                        })
                    })
                }
            }
        }
        
    })

    const answers = await inquirer.prompt({
        name: 'userFiles',
        type: 'checkbox',
        message: 'Which ' + vvBrand + ' files would you like to install?\n',
        choices: [...stackFiles, ...depFiles],
    })

    return answers.userFiles

}

userOptions.files = await chooseFiles()

console.log(' ')



async function installDepsAndFiles () {

    let stack = {}
    let stackStubs = stubsPath
    let installedPkgs = []


    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === cli.stacks.vueTwViteTs.name) {

        stack = cli.stacks.vueTwViteTs
        stackStubs += 'vue-ts/'
    
    } else if (userOptions.stack === cli.stacks.vueTwViteSsgMdTs.name) {

        stack = cli.stacks.vueTwViteSsgMdTs
        stackStubs += 'vite-ssg/'
    
    }


    if (userOptions.stack === cli.stacks.vueTwViteTs.name || userOptions.stack === cli.stacks.vueTwViteSsgMdTs.name) {
        
        //
        // START install vite-ts
        //

        // TODO: need to figure out how to best eliminate use of stackStubs in addViteTs()
        addViteTs(userOptions, stack, stackStubs, installedPkgs)

        // merge the current and vite packages data & write the new merged package data to the current package file
        writeJson(
            cwd + '/package.json',
            mergeJson(cwd + '/' + userOptions.name + '/package.json', cwd + '/package.json')
        )

        // merge the stub and vite tsconfig files data & write the new merged package data to the current package file
        writeJson(
            cwd + '/tsconfig.json',
            merge(require(cwd + '/tsconfig.json'), getVvTsConfig())
        )

        // 

        if (userOptions.stack === cli.stacks.vueTwViteTs.name ) {

            // handle main.ts app file
            writeFileMainTs(userOptions, stack.deps.fontawesome, stack.deps.faPro, stack.deps.gsap, stack.deps.prism)

        }

        // 
        
        if (userOptions.stack === cli.stacks.vueTwViteSsgMdTs.name ) {

            run(`npm install vite-ssg vue-router @vueuse/head unplugin-vue-components vite-plugin-pages vite-plugin-prismjs vite-plugin-vue-markdown --save-dev`)

            run(`npm pkg set scripts.dev="vite --open"`)
            run(`npm pkg set scripts.build="vite-ssg build"`)
            run(`npm pkg set scripts.preview="vite preview --open"`)

            installedPkgs = [...installedPkgs, ...['vite-ssg', 'vue-router', '@vueuse/head', 'unplugin-vue-components', 'vite-plugin-pages', 'vite-plugin-prismjs', 'vite-plugin-vue-markdown']]

            // handle main.ts app file
            writeFileMainTsSsg(userOptions, stack.deps.fontawesome, stack.deps.faPro, stack.deps.gsap, stack.deps.prism)

            // generate the ssg .md/.vue pages files and directory structure
            fs.outputFileSync(cwd + '/src/pages/index.md', indexMdFile(), { flag: 'w+' })
            fs.outputFileSync(cwd + '/src/pages/a.md', aMdFile(), { flag: 'w+' })
            fs.outputFileSync(cwd + '/src/pages/b.vue', bVueFile(), { flag: 'w+' })
            fs.outputFileSync(cwd + '/src/pages/nested/deep/b.vue', bMdFile(), { flag: 'w+' })

            run(`npm install --save-dev pinia @nuxt/devalue`)

            installedPkgs = [...installedPkgs, ...['pinia', '@nuxt/devalue']]

            // generate the pinia root store file
            fs.outputFileSync(cwd + '/src/store/root.ts', piniaRootTsFile(), { flag: 'w+' })

            // generate the MousePos.vue file
            fs.outputFileSync(cwd + '/src/components/MousePos.vue', mousePosVueFile(), { flag: 'w+' })
            
            // generate the Counter.vue file
            fs.outputFileSync(cwd + '/src/components/Counter.vue', counterVueFile(), { flag: 'w+' })

            if ( userOptions.deps.includes( stack.deps.gsap.name ) ) {
                fs.outputFileSync(cwd + '/src/vite-env.d.ts', `\ndeclare module 'gsap/ScrollToPlugin.js';\ndeclare module 'gsap/ScrollTrigger.js';\n`, { flag: 'a+' })
            }

        }

        // 

        // delete the vite generated folder
        rimraf.sync(cwd + '/' + userOptions.name)

        console.log(`\nThe ${vvBrand} CLI installed Vite, Vue, Tailwind, and VueVentus package files for your stack successfully!\n`)

        //
        // END of install vite
        //

        //
        // START Install vite optional deps
        //

        // if the user chose the optional FontAwesome Free dep
        if (userOptions.deps.includes(stack.deps.fontawesome.name) || userOptions.deps.includes(stack.deps.faPro.name)) {

            if (userOptions.deps.includes(stack.deps.faPro.name)) {

                // install the pro font awesome dep
                async function setFaProLicense () {
    
                    const answers = await inquirer.prompt({
                        name: 'faProLicense',
                        type: 'input',
                        message: 'What is your FontAwesome Pro license authorization token (required to download artwork via a project .npmrc file which will be created for you)?\n',
                    })
                
                    return (answers.faProLicense).trim()
                }
                
                userOptions.faProLicense = await setFaProLicense()
                
                console.log(' ')

                // create faPro .npmrc file - adding in the user supplied
                if (userOptions.faProLicense !== '') {

                    fs.outputFileSync(cwd + '/.npmrc', `\n@fortawesome:registry=https://npm.fontawesome.com/\n` + `//npm.fontawesome.com/:_authToken=${userOptions.faProLicense}\n`, { flag: 'a+' })

                    // add .npmrc to project .gitignore file
                    fs.outputFileSync(cwd + '/.gitignore', `\n.npmrc\n`, { flag: 'a+' })
                        
                    // now install the pro font awesome dep
                    // TODO: need to figure out how to best eliminate use of stackStubs in addFaProTs()
                    installedPkgs = [...installedPkgs, ...addFaProTs(userOptions, stackStubs, stack.deps.faPro)]

                }


            } else {

                // else install the free font awesome dep
                // TODO: need to figure out how to best eliminate use of stackStubs in addFaFreeTs()
                installedPkgs = [...installedPkgs, ...addFaFreeTs(userOptions, stackStubs, stack.deps.fontawesome)]

            }

        }

        // if the user chose the optional GSAP dep
        // TODO: need to figure out how to best eliminate use of stackStubs in addGsapTs()
        installedPkgs = [...installedPkgs, ...addGsapTs(userOptions, stackStubs, stack.deps.gsap)]

        // if the user chose the optional Headless UI dep
        installedPkgs = [...installedPkgs, ...addDep(userOptions, stack.deps.headless)]

        // if the user chose the optional Heroicons dep
        installedPkgs = [...installedPkgs, ...addDep(userOptions, stack.deps.heroicons)]

        // if the user chose the optional Prism.js dep
        // TODO: need to figure out how to best eliminate use of stackStubs in addGsapTs()
        installedPkgs = [...installedPkgs, ...addPrismjs(userOptions, stackStubs, stack.deps.prism)]

        // if the user chose the optional Vitest dep
        installedPkgs = [...installedPkgs, ...addVitest(userOptions, stack.deps.vitest)]

        //
        // END Install vite optional deps
        //
    
    }


    console.log(`${vvBrand} CLI installed the following packages:`)
    console.log(installedPkgs)

    console.log(`\nYour ${vvBrand} CLI installation is complete!`)
    console.log(`\nYour ${gradientText(stack.name)} stack is ready for your awesome ideas!`)
    console.log(`\nHere's a few commands to get started:`)
    console.log(`
        npm run dev
        npm run build
        npm run test
        npm run coverage
    `)
    console.log(`${gradient('lightGreen', 'cyan')('Happy Hacking!')}\n`)

}

await installDepsAndFiles()

console.log(' ')
