#!/usr/bin/env node

import chalk from 'chalk'
import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

// import child_process from 'child_process'
// child_process.execSync( 'npm install chalk-animation --save-dev', { stdio: 'inherit' } )

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

const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )

const vueventus = gradient('lightGreen', 'cyan')('VueVentus')

const rootPath = './'
const testPath = rootPath + 'cli-test/'
const srcPath = rootPath + 'src/'

const cssDir = 'css/'
const compoDir = 'components/'
const srcDir = 'src/'

const npmInstall = 'npm install'
const installPre = npmInstall + ' --save-dev '
const install = {
    vite: [
        'npm create vite@latest', // follow prompts
    ],
    vue: [
        'npm init vue@latest', // follow prompts
    ],
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
    stack: '',
    files: [],
    deps: [],
    depFiles: [],
    destination: './cli-test',
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
    'FontAwesome',
    'GSAP',
    'Headless UI',
    'Heroicons',
    'Prism.js',
    'Vitest',
]


const depFiles = {
    'FontAwesome': [
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

                // console.log(sourceStubs + userOptions.files[y] + ' => ' + stack[x][outputKey] + userOptions.files[y])

                fs.copySync(sourceStubs + userOptions.files[y], stack[x][outputKey] + userOptions.files[y])

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

                    // console.log(sourceStubs + userOptions.files[i] + ' => to => ' + depFiles[depFileKeys[j]][k][outputKey] + userOptions.files[i])

                    fs.copySync(sourceStubs + userOptions.files[i], depFiles[depFileKeys[j]][k][outputKey] + userOptions.files[i])

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
