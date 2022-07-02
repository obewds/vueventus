#!/usr/bin/env node

import child_process from 'child_process'
import { createRequire } from 'module'
import { createSpinner } from 'nanospinner'
import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import merge from 'deepmerge'
import rimraf from 'rimraf'




const require = createRequire(import.meta.url)
const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )
// const ifErrorCheck = function ( error ) { if (error) { console.error(error); return; } }
const vueventus = gradient('lightGreen', 'cyan')('VueVentus')

const cwd = process.env.INIT_CWD
const sourceStubs = './node_modules/@obewds/vueventus/cli/stubs/'

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
                fontawesome: {
                    checked: true,
                    name: 'FontAwesome Free',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons --save-dev',
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
                gsap: {
                    checked: true,
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
                    checked: true,
                    name: 'Headless UI',
                    install: 'npm install @headlessui/vue --save-dev',
                },
                heroicons: {
                    checked: true,
                    name: 'Heroicons',
                    install: 'npm install @heroicons/vue --save-dev',
                },
                prism: {
                    checked: true,
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
                    checked: true,
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
            {
                name: vv.stacks.vueTwViteTs.deps.fontawesome.name,
                checked: vv.stacks.vueTwViteTs.deps.fontawesome.checked,
            },{
                name: vv.stacks.vueTwViteTs.deps.gsap.name,
                checked: vv.stacks.vueTwViteTs.deps.gsap.checked,
            },{
                name: vv.stacks.vueTwViteTs.deps.headless.name,
                checked: vv.stacks.vueTwViteTs.deps.headless.checked,
            },{
                name: vv.stacks.vueTwViteTs.deps.heroicons.name,
                checked: vv.stacks.vueTwViteTs.deps.heroicons.checked,
            },{
                name: vv.stacks.vueTwViteTs.deps.prism.name,
                checked: vv.stacks.vueTwViteTs.deps.prism.checked,
            },{
                name: vv.stacks.vueTwViteTs.deps.vitest.name,
                checked: vv.stacks.vueTwViteTs.deps.vitest.checked,
            },
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
            name: vv.stacks.vueTwViteTs.deps.fontawesome.files.vvFa.name,
            checked: vv.stacks.vueTwViteTs.deps.fontawesome.files.vvFa.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.name,
            checked: vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.checked,
        })
        // depFileChoices.push({
        //     name: vv.stacks.vueTwViteTs.deps.headless.name,
        //     checked: vv.stacks.vueTwViteTs.deps.headless.checked,
        // })
        // depFileChoices.push({
        //     name: vv.stacks.vueTwViteTs.deps.heroicons.name,
        //     checked: vv.stacks.vueTwViteTs.deps.heroicons.checked,
        // })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.name,
            checked: vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.checked,
        })
        // depFileChoices.push({
        //     name: vv.stacks.vueTwViteTs.deps.prism.name,
        //     checked: vv.stacks.vueTwViteTs.deps.prism.checked,
        // })
        // depFileChoices.push({
        //     name: vv.stacks.vueTwViteTs.deps.vitest.name,
        //     checked: vv.stacks.vueTwViteTs.deps.vitest.checked,
        // })

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

    // if the user chose the optional FontAwesome Free dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.fontawesome.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.fontawesome.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'fontAwesome.ts', cwd + '/src/fontAwesome.ts')

        // add optional FontAwesome Free files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.fontawesome.files.vvFa.name ) ) {
            fs.copySync(sourceStubs + 'VvFa.vue', cwd + '/src/components/VvFa.vue')
        }

        console.log(`The ${vueventus} CLI installed/added the fontawesome dep/files successfully!`)

    }


    // if the user chose the optional GSAP dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.gsap.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.gsap.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'gsap.ts', cwd + '/src/gsap.ts')

        // add optional GSAP files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.gsap.files.vvScrollUp.name ) ) {
            fs.copySync(sourceStubs + 'VvScrollUp.vue', cwd + '/src/components/VvScrollUp.vue')
        }

        console.log(`The ${vueventus} CLI installed/added the gsap dep/files successfully!`)

    }


    // if the user chose the optional Headless UI dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.headless.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.headless.install, { stdio: 'inherit' } )

        console.log(`The ${vueventus} CLI installed/added the headless ui dep successfully!`)

    }


    // if the user chose the optional Heroicons dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.heroicons.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.heroicons.install, { stdio: 'inherit' } )

        console.log(`The ${vueventus} CLI installed/added the heroicons ui dep successfully!`)

    }


    // if the user chose the optional Prism.js dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.prism.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.prism.install, { stdio: 'inherit' } )

        // add optional Prism.js files if the user also selected them
        if ( userOptions.depFiles.includes( vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.name ) ) {
            fs.copySync(sourceStubs + 'VvPrism.vue', cwd + '/src/components/VvPrism.vue')
        }

        console.log(`The ${vueventus} CLI installed/added the prism.js dep/files successfully!`)

    }


    // if the user chose the optional Vitest dep
    if ( userOptions.deps.includes( vv.stacks.vueTwViteTs.deps.vitest.name ) ) {

        child_process.execSync(vv.stacks.vueTwViteTs.deps.vitest.install, { stdio: 'inherit' } )

        fs.copySync(sourceStubs + 'vitest.config.ts', cwd + '/vitest.config.ts')

        console.log(`The ${vueventus} CLI installed/added the vitest dep/files successfully!`)

    }






    // await sleep()

    spinner.success({
        text: vueventus + ' deps installed successfully!',
    })

}

await installDepsAndFiles()

console.log(' ')
