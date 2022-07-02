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
// const ifErrorCheck = function ( error ) { if (error) { console.error(error); return; } }
const vueventus = gradient('lightGreen', 'cyan')('VueVentus')

const cwd = process.env.INIT_CWD

const rootPath = './'
const testPath = rootPath + 'cli-test/'
const srcPath = rootPath + 'src/'

// const cssDir = 'css/'
const compoDir = 'components/'
const srcDir = 'src/'


let userOptions = {
    name: '',
    stack: '',
    files: [],
    deps: [],
    depFiles: [],
    //destination: './cli-test',
}

const vv = {
    stacks: {
        vueTwViteTs: {
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
                    name: 'FontAwesome Free',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons --save-dev',
                    files: {
                        fontAwesomeTs: {
                            name: 'fontAwesome.ts',
                            checked: true,
                            path: '/src/',
                        },
                        vvFa: {
                            name: 'VvFa.vue',
                            checked: true,
                            path: '/src/components/',
                        },
                    },
                },
                faPro: {
                    name: 'FontAwesome Pro',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons --save-dev',
                    files: {
                        fontAwesomeProTs: {
                            name: 'fontAwesomePro.ts',
                            checked: true,
                            path: '/src/',
                        },
                        vvFa: {
                            name: 'VvFa.vue',
                            checked: true,
                            path: '/src/components/',
                        },
                    },
                },
                gsap: {
                    name: 'GSAP',
                    install: 'npm install gsap --save-dev',
                    files: {
                        gsapTs: {
                            name: 'gsap.ts',
                            checked: true,
                            path: '/src/',
                        },
                        vvScrollUp: {
                            name: 'VvScrollUp.vue',
                            checked: true,
                            path: '/src/components/',
                        },
                    },
                },
                headless: {
                    name: 'Headless UI',
                    install: 'npm install @headlessui/vue --save-dev',
                },
                heroicons: {
                    name: 'Heroicons',
                    install: 'npm install @heroicons/vue --save-dev',
                },
                prism: {
                    name: 'Prism.js',
                    install: 'npm install prismjs vite-plugin-prismjs @types/prismjs --save-dev',
                    files: {
                        vvPrism: {
                            name: 'VvPrism.vue',
                            checked: true,
                            path: '/src/components/',
                        },
                    },
                },
                vitest: {
                    name: 'Vitest',
                    install: 'npm install vitest @vue/test-utils happy-dom c8 --save-dev',
                    files: {
                        vitestConfigTs: {
                            name: 'vitest.config.ts',
                            checked: true,
                            path: '/',
                        },
                    },
                },
            },
        },
        vueTwVite: {
            name: 'Vue 3, Tailwind CSS & Vite',
            files: {},
            deps: {},
        },
        vueTwNuxtViteTs: {
            name: 'Vue 3, Tailwind CSS, Nuxt 3 & Typescript',
            files: {},
            deps: {},
        },
    },
}


const depFiles = {
    'FontAwesome Free': [
        {
            name: 'fontAwesome.ts',
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
            name: 'fontAwesomePro.ts',
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
        choices: [
            vv.stacks.vueTwViteTs.name,
            // vv.stacks.vueTwVite.name,
            // vv.stacks.vueTwNuxtViteTs.name,
        ],
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
        choices: [
            vv.stacks.vueTwViteTs.deps.faFree.name,
            vv.stacks.vueTwViteTs.deps.faPro.name,
            vv.stacks.vueTwViteTs.deps.gsap.name,
            vv.stacks.vueTwViteTs.deps.headless.name,
            vv.stacks.vueTwViteTs.deps.heroicons.name,
            vv.stacks.vueTwViteTs.deps.prism.name,
            vv.stacks.vueTwViteTs.deps.vitest.name,
        ],
    })

    userOptions.deps = answers.userDeps

    return userOptions.deps
}

await chooseDeps()

console.log(' ')








async function selectInstallFiles () {
    
    let stackFileChoices = []
    let depFileChoices = []

    // if the stack is vueTwViteTs
    if ( userOptions.stack === vv.stacks.vueTwViteTs.name ) {

        // set the stackFileChoices array values
        stackFileChoices.push({
            name: vv.stacks.vueTwViteTs.files.appVvTs.name,
            checked: vv.stacks.vueTwViteTs.files.appVvTs.checked,
        })
        stackFileChoices.push({
            name: vv.stacks.vueTwViteTs.files.appColorsJson.name,
            checked: vv.stacks.vueTwViteTs.files.appColorsJson.checked,
        })
        stackFileChoices.push({
            name: vv.stacks.vueTwViteTs.files.tailwindConfigJs.name,
            checked: vv.stacks.vueTwViteTs.files.tailwindConfigJs.checked,
        })
        stackFileChoices.push({
            name: vv.stacks.vueTwViteTs.files.tailwindCss.name,
            checked: vv.stacks.vueTwViteTs.files.tailwindCss.checked,
        })

        // set the depFileChoices array values
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.faFree.name,
            checked: vv.stacks.vueTwViteTs.deps.faFree.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.faPro.name,
            checked: vv.stacks.vueTwViteTs.deps.faPro.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.name,
            checked: vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.headless.name,
            checked: vv.stacks.vueTwViteTs.deps.headless.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.heroicons.name,
            checked: vv.stacks.vueTwViteTs.deps.heroicons.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.prism.name,
            checked: vv.stacks.vueTwViteTs.deps.prism.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.vitest.name,
            checked: vv.stacks.vueTwViteTs.deps.vitest.checked,
        })

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








async function installDepsAndFiles () {

    //
    // Setup and start spinner
    //

    const spinner = createSpinner('Installing ' + vueventus + ' deps...').start()

    let consoleLogs = []

    //
    // Install stack
    //

    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === vv.stacks.vueTwViteTs.name) {

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
        
        child_process.execSync('npm install tailwindcss postcss autoprefixer --save-dev', { stdio: 'inherit' } )
        child_process.execSync('npx tailwindcss init -p', { stdio: 'inherit' } )

        console.log(`The ${vueventus} CLI installed and initialized tailwind css successfully!`)

        //
        // install types
        //

        child_process.execSync('npm install @types/node --save-dev', { stdio: 'inherit' } )

        console.log(`The ${vueventus} CLI installed node types successfully!`)

    }

    //
    // Install optional deps
    //

    // #TODO: handle fontawesome deps

    // if the user chose the optional FontAwesome Free dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.faFree.name ) ) {

        // check for Pro dep selected - and if so bypass this block and handle in Pro dep install block
        if ( !userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.faPro.name ) ) {

            child_process.execSync(vv.stacks.vueTwViteTs.deps.faFree.install, { stdio: 'inherit' } )

            fs.copySync(sourceStubs + 'fontAwesome.ts', cwd + '/src/fontAwesome.ts')

            // add optional FontAwesome Free files if the user also selected them
            if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.faFree.files.vvFa.name ) ) {
                fs.copySync(sourceStubs + 'VvFa.vue', cwd + '/src/components/VvFa.vue')
            }

        }

    }
    

    // if the user chose the optional FontAwesome Pro dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.faPro.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.faFree.install, { stdio: 'inherit' } )
        child_process.execSync(vv.stacks.vueTwViteTs.deps.faPro.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'fontAwesomePro.ts', cwd + '/src/fontAwesomePro.ts')

        // add optional FontAwesome Free files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.faPro.files.vvFa.name ) ) {
            fs.copySync(sourceStubs + 'VvFa.vue', cwd + '/src/components/VvFa.vue')
        }

    }


    // if the user chose the optional GSAP dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.gsap.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.gsap.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'gsap.ts', cwd + '/src/gsap.ts')

        // add optional GSAP files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.name ) ) {
            fs.copySync(sourceStubs + 'VvScrollUp.vue', cwd + '/src/components/VvScrollUp.vue')
        }

    }


    // if the user chose the optional Headless UI dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.headless.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.headless.install, { stdio: 'inherit' } )

    }


    // if the user chose the optional Heroicons dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.heroicons.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.heroicons.install, { stdio: 'inherit' } )

    }


    // if the user chose the optional Prism.js dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.prism.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.prism.install, { stdio: 'inherit' } )

        // add optional Prism.js files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.name ) ) {
            fs.copySync(sourceStubs + 'VvPrism.vue', cwd + '/src/components/VvPrism.vue')
        }

    }


    // if the user chose the optional Vitest dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.vitest.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.vitest.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'vitest.config.ts', cwd + '/vitest.config.ts')

    }






    // await sleep()

    spinner.success({
        text: vueventus + ' deps installed successfully!',
    })

}

await installDepsAndFiles()

console.log(' ')







/*
async function installFiles () {

    //
    // Setup and start spinner
    //

    const spinner = createSpinner('Installing ' + vueventus + ' files...').start()

    //
    // Handle stack files
    //

    let stack = []

    // if the stack is vueTwViteTs
    if ( userOptions.stack === vv.stacks.vueTwViteTs.name ) {

        stack.push({
            name: vv.stacks.vueTwViteTs.files.appVvTs.name,
            checked: vv.stacks.vueTwViteTs.files.appVvTs.checked,
        })
        stack.push({
            name: vv.stacks.vueTwViteTs.files.appColorsJson.name,
            checked: vv.stacks.vueTwViteTs.files.appColorsJson.checked,
        })
        stack.push({
            name: vv.stacks.vueTwViteTs.files.tailwindConfigJs.name,
            checked: vv.stacks.vueTwViteTs.files.tailwindConfigJs.checked,
        })
        stack.push({
            name: vv.stacks.vueTwViteTs.files.tailwindCss.name,
            checked: vv.stacks.vueTwViteTs.files.tailwindCss.checked,
        })

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
*/
