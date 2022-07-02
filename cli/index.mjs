#!/usr/bin/env node

import child_process from 'child_process'
import { createRequire } from 'module'
import { createSpinner } from 'nanospinner'
import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import merge from 'deepmerge'
import rimraf from 'rimraf'




//
// Use these values for local development/tests
//
// const sourceStubs = './cli/stubs/'
// const outputKey = 'testPath'

//
// Make sure these values are used instead and always before publishing the package
//
const sourceStubs = './node_modules/@obewds/vueventus/cli/stubs/'
const outputKey = 'userPath'




const require = createRequire(import.meta.url)
const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )
const ifErrorCheck = function ( error ) { if (error) { console.error(error); return; } }
const vueventus = gradient('lightGreen', 'cyan')('VueVentus')

const cwd = process.env.INIT_CWD

const rootPath = './'
const testPath = rootPath + 'cli-test/'
const srcPath = rootPath + 'src/'

const cssDir = 'css/'
const compoDir = 'components/'
const srcDir = 'src/'

const npmInstall = 'npm install'
const installPre = npmInstall + ' --save-dev '


const install = {
    // vite: [
    //     'npm create vite@latest', // follow prompts
    // ],
    // vue: [
    //     'npm init vue@latest', // follow prompts
    // ],
    tw: [
        installPre + 'tailwindcss postcss autoprefixer',
        'npx tailwindcss init -p',
    ],
    vv: [
        installPre + '@obewds/vueventus',
    ],
    types: [
        installPre + '@types/node',
    ],
    vitest: [
        installPre + 'vitest @vue/test-utils happy-dom c8',
    ],
    // nuxt: ['npx nuxi init '], // then name of project
    // nuxtTw: [installPre + '@nuxtjs/tailwindcss', 'npx tailwindcss init'],
    // nuxtVitest: [installPre + '@nuxt/test-utils-edge @vitejs/plugin-vue'],
    faBase: [
        installPre + '@fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons',
    ],
    faPro: [
        installPre + '@fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons',
    ],
    gsap: [
        installPre + 'gsap',
    ],
    headless: [
        installPre + '@headlessui/vue',
    ],
    heroicons: [
        installPre + '@heroicons/vue',
    ],
    prism: [
        installPre + 'prismjs vite-plugin-prismjs @types/prismjs',
    ],
}


let userOptions = {
    name: '',
    stack: '',
    files: [],
    deps: [],
    depFiles: [],
    destination: './cli-test',
}

const vv = {
    stacks: {
        vueTwViteTs: {
            id: 0,
            name: 'Vue 3, Tailwind CSS, Vite & Typescript',
            files: {
                appVvTs: {
                    name: 'app.vv.ts',
                    checked: true,
                    path: '/src/',
                },
                appColorsJson: {
                    name: 'app.colors.json',
                    checked: true,
                    path: '/src/',
                },
                tailwindConfigJs: {
                    name: 'tailwind.config.js',
                    checked: true,
                    path: '/',
                },
                tailwindCss: {
                    name: 'tailwind.css',
                    checked: true,
                    path: '/src/css/',
                },
            },
            deps: {
                faFree: {
                    name: 'fontawesome.ts',
                    checked: true,
                    path: '/src/',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons --save-dev',
                },
                faPro: {
                    name: 'fontawesome.ts',
                    checked: true,
                    path: '/src/',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons --save-dev',
                },
            },
        },
        // vueTwVite: {},
        // vueTwNuxtViteTs: {},
    },
}


const stackChoices = [
    'Vue 3, Tailwind CSS, Vite & Typescript',
    //'Vue 3, Tailwind CSS & Vite',
    //'Vue 3, Tailwind CSS, Nuxt 3 & Typescript',
]


const stackFiles = {
    0: [
        {
            name: 'app.vv.ts',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'app.colors.json',
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'tailwind.config.js',
            userPath: rootPath,
            testPath: testPath,
        },{
            name: 'tailwind.css',
            userPath: srcPath + cssDir,
            testPath: testPath + srcDir + cssDir,
        },
    ],
    1: [
        {
            name: 'app.vv.js',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'app.colors.json',
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'tailwind.config.js',
            userPath: rootPath,
            testPath: testPath,
        },{
            name: 'tailwind.css',
            userPath: srcPath + cssDir,
            testPath: testPath + srcDir + cssDir,
        },
    ],
    2: [
        {
            name: 'app.vv.ts',
            checked: true,
            userPath: rootPath,
            testPath: testPath,
        },{
            name: 'tailwind.css',
            userPath: srcPath + cssDir,
            testPath: testPath + srcDir + cssDir,
        },
    ],
}

const depChoices = [
    'FontAwesome Free',
    'FontAwesome Pro',
    'GSAP',
    'Headless UI',
    'Heroicons',
    'Prism.js',
    'Vitest',
]


const depFiles = {
    'FontAwesome Free': [
        {
            name: 'fontawesome.ts',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'VvFa.vue',
            checked: true,
            userPath: srcPath + compoDir,
            testPath: testPath + srcDir + compoDir,
        },
    ],
    'FontAwesome Pro': [
        {
            name: 'fontawesome.ts',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'VvFa.vue',
            checked: true,
            userPath: srcPath + compoDir,
            testPath: testPath + srcDir + compoDir,
        },
    ],
    'GSAP': [
        {
            name: 'gsap.ts',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },{
            name: 'VvScrollUp.vue',
            userPath: srcPath + compoDir,
            testPath: testPath + srcDir + compoDir,
        },
    ],
    'Headless UI': [],
    'Heroicons': [],
    'Prism.js': [
        {
            name: 'VvPrism.vue',
            checked: true,
            userPath: srcPath + compoDir,
            testPath: testPath + srcDir + compoDir,
        },
    ],
    'Vitest': [
        {
            name: 'vitest.config.ts',
            checked: true,
            userPath: srcPath,
            testPath: testPath + srcDir,
        },
    ],
}








console.log(`


    Welcome to the ${vueventus} CLI!


`)





async function setProjectName () {
    
    const answers = await inquirer.prompt({
        name: 'projectName',
        type: 'input',
        message: 'What is the name of your new ' + vueventus + ' project?\n',
        choices: stackChoices,
    })

    userOptions.name = answers.projectName

    return userOptions.name
}

await setProjectName()

console.log(' ')





async function chooseStack () {
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vueventus + ' stack are you installing?\n',
        choices: stackChoices,
    })

    userOptions.stack = answers.userStack

    return userOptions.stack
}

await chooseStack()

console.log(' ')








async function chooseDeps () {
    
    const answers = await inquirer.prompt({
        name: 'userDeps',
        type: 'checkbox',
        message: 'Which ' + vueventus + ' deps would you like to install?\n',
        choices: depChoices,
    })

    userOptions.deps = answers.userDeps

    return userOptions.deps
}

await chooseDeps()

console.log(' ')








async function selectInstallFiles () {
    
    let stackFileChoices = []
    let depFileChoices = []

    for (let i=0; i < stackChoices.length; i++) {
        if (stackChoices[i] === userOptions.stack) {
            stackFileChoices = stackFiles[i]
            break
        }
    }

    for (let j=0; j < userOptions.deps.length; j++) {
        if ( depFiles[userOptions.deps[j]].length > 0 ) {
            for (let k=0; k < depFiles[userOptions.deps[j]].length; k++) {
                depFileChoices.push(depFiles[userOptions.deps[j]][k])
            }
        }
    }

    const choices = [...stackFileChoices, ...depFileChoices]

    const answers = await inquirer.prompt({
        name: 'userFiles',
        type: 'checkbox',
        message: 'Which ' + vueventus + ' files would you like to install?\n',
        choices: choices,
    })

    userOptions.files = answers.userFiles

    return userOptions.files
}

await selectInstallFiles()

console.log(' ')








async function installDeps () {

    //
    // Setup and start spinner
    //

    const spinner = createSpinner('Installing ' + vueventus + ' deps...').start()
    let consoleLogs = []

    //
    // Install stack
    //

    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === stackChoices[0]) {

        //
        // install vite
        //

        child_process.execSync(`npm create vite@latest ${userOptions.name} -- --template vue-ts`, { stdio: 'inherit' } )

        // open the current package file and collect the data
        let currentPkg = require(cwd + '/package.json')

        // open the vite generated package file and collect the data
        let vitePkg = require(cwd + '/' + userOptions.name + '/package.json')

        // merge the current and vite packages data
        let newPkg = merge(vitePkg, currentPkg)

        // write the new merged package data to the current package file
        fs.writeFileSync(cwd + '/package.json', JSON.stringify(newPkg, null, 2), { flag: 'r+' })

        // copy each vite generated folder and file from
        // the vite generated directory back up into the root directory
        let fsSet = { overwrite: true }
        fs.moveSync(cwd + '/' + userOptions.name + '/.vscode', cwd + '/.vscode', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/public', cwd + '/public', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/src', cwd + '/src', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/.gitignore', cwd + '/.gitignore', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/index.html', cwd + '/index.html', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/README.md', cwd + '/README-VITE.md', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/tsconfig.json', cwd + '/tsconfig.json', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/tsconfig.node.json', cwd + '/tsconfig.node.json', fsSet)
        fs.moveSync(cwd + '/' + userOptions.name + '/vite.config.ts', cwd + '/vite.config.ts', fsSet)

        // and finally delete the vite generated folder
        rimraf.sync(cwd + '/' + userOptions.name)

        // add vite install console message to consoleLogs
        console.log(`The ${vueventus} CLI installed/moved all Vite:vue-ts files to root and merged package data successfully!`)

        //
        // install tailwind css
        //

        for (let i=0; i < install.tw.length; i++) {
            child_process.execSync(install.tw[i], { stdio: 'inherit' } )
        }

        // add vite install console message to consoleLogs
        console.log(`The ${vueventus} CLI installed and initialized tailwind css successfully!`)

        //
        // install types
        //

        for (let i=0; i < install.types.length; i++) {
            child_process.execSync(install.types[i], { stdio: 'inherit' } )
        }

        // add types install console message to consoleLogs
        console.log(`The ${vueventus} CLI installed node types successfully!`)

    }

    //
    // Install optional deps
    //

    // #TODO: handle fontawesome deps

    // if the user chose the optional FontAwesome Free dep
    // if (userOptions.deps.includes(depChoices[0])) {}

    // if the user chose the optional FontAwesome Pro dep
    // if (userOptions.deps.includes(depChoices[1])) {}


    // if the user chose the optional GSAP dep
    if (userOptions.deps.includes(depChoices[2])) {

        for (let i=0; i < install.gsap.length; i++) {
            child_process.execSync(install.gsap[i], { stdio: 'inherit' } )
        }

        // add dep base file(s)
        fs.copySync(sourceStubs + 'gsap.ts', cwd + '/src/gsap.ts')

        // add optional GSAP files if the user also selected them
        let gsapFiles = userOptions.depFiles.filter((item) => item.name === 'VvScrollUp.vue')
        if (gsapFiles.length > 0) {
            fs.copySync(sourceStubs + 'VvScrollUp.vue', cwd + '/src/components/VvScrollUp.vue')
        }

    }






    await sleep()

    spinner.success({
        text: vueventus + ' deps installed successfully!',
    })

}

await installDeps()

console.log(' ')








async function installFiles () {

    //
    // Setup and start spinner
    //

    const spinner = createSpinner('Installing ' + vueventus + ' files...').start()

    //
    // Handle stack files
    //

    let stack = []

    for (let m=0; m < stackChoices.length; m++) {
        if (stackChoices[m] === userOptions.stack) {
            stack = stackFiles[m]
            break
        }
    }
    
    for (let x=0; x < stack.length; x++) {

        for (let y=0; y < userOptions.files.length; y++) {

            if (userOptions.files[y] === stack[x].name) {

                console.log(sourceStubs + userOptions.files[y] + ' => ' + stack[x][outputKey] + userOptions.files[y])

                // fs.copySync(sourceStubs + userOptions.files[y], stack[x][outputKey] + userOptions.files[y])

            }

        }

    }

    //
    // Handle deps files
    //
    
    for (let i=0; i < userOptions.files.length; i++) {

        const depFileKeys = Object.keys(depFiles)

        for (let j=0; j < depFileKeys.length; j++) {

            for (let k=0; k < depFiles[depFileKeys[j]].length; k++) {

                if (userOptions.files[i] === depFiles[depFileKeys[j]][k].name) {

                    console.log(sourceStubs + userOptions.files[i] + ' => to => ' + depFiles[depFileKeys[j]][k][outputKey] + userOptions.files[i])

                    // fs.copySync(sourceStubs + userOptions.files[i], depFiles[depFileKeys[j]][k][outputKey] + userOptions.files[i])

                }

            }

        }

    }

    await sleep()

    spinner.success({
        text: vueventus + ' files installed successfully!',
    })

}

await installFiles()

console.log(' ')
