#!/usr/bin/env node

import child_process from 'child_process'
import { createRequire } from 'module'
import { createSpinner } from 'nanospinner'
import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import merge from 'deepmerge'
import rimraf from 'rimraf'

import mergeJson from './helpers/mergeJson.mjs'
import moveFile from './helpers/moveFile.mjs'
import run from './helpers/run.mjs'
import writeJson from './helpers/writeJson.mjs'



const require = createRequire(import.meta.url)
const vueventus = gradient('lightGreen', 'cyan')('VueVentus')
// const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )

const cwd = process.env.INIT_CWD
const sourceStubs = './node_modules/@obewds/vueventus/cli/stubs/'

let userOptions = {
    name: '',
    stack: '',
    deps: [],
    files: [],
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
                        helloVueVentusTestJs: {
                            name: 'HelloVueVentus.test.js',
                            checked: true,
                            path: '/tests/components/',
                        },
                        helloVueVentusVue: {
                            name: 'HelloVueVentus.vue',
                            checked: true,
                            path: '/src/components/',
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
    
    const stack = vv.stacks.vueTwViteTs
    
    const answers = await inquirer.prompt({
        name: 'userDeps',
        type: 'checkbox',
        message: 'Which ' + vueventus + ' deps would you like to install?\n',
        choices: [
            {
                name: stack.deps.fontawesome.name,
                checked: stack.deps.fontawesome.checked,
            },{
                name: stack.deps.gsap.name,
                checked: stack.deps.gsap.checked,
            },{
                name: stack.deps.headless.name,
                checked: stack.deps.headless.checked,
            },{
                name: stack.deps.heroicons.name,
                checked: stack.deps.heroicons.checked,
            },{
                name: stack.deps.prism.name,
                checked: stack.deps.prism.checked,
            },{
                name: stack.deps.vitest.name,
                checked: stack.deps.vitest.checked,
            },
        ],
    })

    userOptions.deps = answers.userDeps

    return userOptions.deps
}

await chooseDeps()

console.log(' ')







async function chooseFiles () {
    
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
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.name,
            checked: vv.stacks.vueTwViteTs.deps.prism.files.vvPrism.checked,
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

await chooseFiles()

console.log(' ')








async function installDepsAndFiles () {

    //
    // Setup and start spinner
    //

    const spinner = createSpinner('Installing ' + vueventus + ' deps and files...').start()

    let consoleLogs = []

    //
    // Install stack
    //

    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === vv.stacks.vueTwViteTs.name) {

        const stack = vv.stacks.vueTwViteTs
        
        //
        // START install vite
        //

        run(`npm create vite@latest ${userOptions.name} -- --template vue-ts`)

        // merge the current and vite packages data
        let newPkg = mergeJson(cwd + '/' + userOptions.name + '/package.json', cwd + '/package.json')

        // write the new merged package data to the current package file
        writeJson(cwd + '/package.json', newPkg)

        // copy each vite generated folder and file from
        // the vite generated directory back up into the root directory
        moveFile(cwd + '/' + userOptions.name + '/.vscode', cwd + '/.vscode')
        moveFile(cwd + '/' + userOptions.name + '/public', cwd + '/public')
        moveFile(cwd + '/' + userOptions.name + '/src', cwd + '/src')
        moveFile(cwd + '/' + userOptions.name + '/.gitignore', cwd + '/.gitignore')
        moveFile(cwd + '/' + userOptions.name + '/README.md', cwd + '/README-VITE.md')
        moveFile(cwd + '/' + userOptions.name + '/tsconfig.json', cwd + '/tsconfig.json')
        //
        // #TODO: add scripting to open the default vite generated tsconfig.json file
        //        and add the following data
        //
        // "allowJs": true,
        // "types": ["node", "vite/client"],
        // "paths": {
        //   "@/": ["/src"]
        // }
        //
        // #TODO: then add a final script to save the modified data (with pretty printing set to 2) 
        //        in the CLI's output  tsconfig.json file
        //
        moveFile(cwd + '/' + userOptions.name + '/tsconfig.node.json', cwd + '/tsconfig.node.json')
        
        if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
            fs.copySync(sourceStubs + 'index.html', cwd + '/index.html')
        } else {
            moveFile(cwd + '/' + userOptions.name + '/index.html', cwd + '/index.html')
        }

        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {
            fs.copySync(sourceStubs + 'vite.config.prism.ts', cwd + '/vite.config.ts')
        } else {
            fs.copySync(sourceStubs + 'vite.config.ts', cwd + '/vite.config.ts')
        }

        // and finally delete the vite generated folder
        rimraf.sync(cwd + '/' + userOptions.name)

        // add vite install console message to consoleLogs
        console.log(`\nThe ${vueventus} CLI installed/moved all ${stack.name} deps/files to root and merged all package.json data successfully into the root package.json file!\n`)

        //
        // install tailwind css
        //
        
        run('npm install tailwindcss postcss autoprefixer --save-dev')
        run('npx tailwindcss init -p')

        console.log(`\nThe ${vueventus} CLI installed and initialized tailwind css successfully!\n`)

        //
        // install types
        //

        run('npm install @types/node --save-dev')

        console.log(`\nThe ${vueventus} CLI installed node types successfully!\n`)

        //
        // install stack VueVentus files
        //

        if ( userOptions.files.includes( stack.files.appVvTs.name ) ) {
            fs.copySync(
                sourceStubs + stack.files.appVvTs.name,
                cwd + stack.files.appVvTs.path + stack.files.appVvTs.name
            )
        }

        if ( userOptions.files.includes( stack.files.appColorsJson.name ) ) {
            fs.copySync(
                sourceStubs + stack.files.appColorsJson.name,
                cwd + stack.files.appColorsJson.path + stack.files.appColorsJson.name
            )
        }

        if ( userOptions.files.includes( stack.files.tailwindConfigJs.name ) ) {
            fs.copySync(
                sourceStubs + stack.files.tailwindConfigJs.name,
                cwd + stack.files.tailwindConfigJs.path + stack.files.tailwindConfigJs.name
            )
        }

        if ( userOptions.files.includes( stack.files.tailwindCss.name ) ) {
            fs.copySync(
                sourceStubs + stack.files.tailwindCss.name,
                cwd + stack.files.tailwindCss.path + stack.files.tailwindCss.name
            )
        }

        console.log(`\nThe ${vueventus} CLI installed the VueVentus files for your stack successfully!\n`)

        //
        // END of install vite
        //



        //
        // START Install vite optional deps
        //

        // if the user chose the optional FontAwesome Free dep
        if ( userOptions.deps.includes( stack.deps.fontawesome.name ) ) {

            run(stack.deps.fontawesome.install)

            fs.copySync(
                sourceStubs + stack.deps.fontawesome.files.fontAwesomeTs.name,
                cwd + stack.deps.fontawesome.files.fontAwesomeTs.path + stack.deps.fontawesome.files.fontAwesomeTs.name
            )

            // add optional FontAwesome Free files if the user also selected them
            if ( userOptions.files.includes( stack.deps.fontawesome.files.vvFa.name ) ) {
                fs.copySync(
                    sourceStubs + stack.deps.fontawesome.files.vvFa.name,
                    cwd + stack.deps.fontawesome.files.vvFa.path + stack.deps.fontawesome.files.vvFa.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.fontawesome.name} dep/files successfully!\n`)

        }


        // if the user chose the optional GSAP dep
        if ( userOptions.deps.includes( stack.deps.gsap.name ) ) {

            run(stack.deps.gsap.install)

            fs.copySync(sourceStubs + 'gsap.ts', cwd + '/src/gsap.ts')

            // add optional GSAP files if the user also selected them
            if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
                fs.copySync(
                    sourceStubs + stack.deps.gsap.files.vvScrollUp.name,
                    cwd + stack.deps.gsap.files.vvScrollUp.path + stack.deps.gsap.files.vvScrollUp.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.gsap.name} dep/files successfully!\n`)

        }


        // if the user chose the optional Headless UI dep
        if ( userOptions.deps.includes( stack.deps.headless.name ) ) {

            run(stack.deps.headless.install)

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.headless.name} dep successfully!\n`)

        }


        // if the user chose the optional Heroicons dep
        if ( userOptions.deps.includes( stack.deps.heroicons.name ) ) {

            run(stack.deps.heroicons.install)

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.heroicons.name} dep successfully!\n`)

        }


        // if the user chose the optional Prism.js dep
        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {

            run(stack.deps.prism.install)

            // add optional Prism.js files if the user also selected them
            if ( userOptions.files.includes( stack.deps.prism.files.vvPrism.name ) ) {
                fs.copySync(
                    sourceStubs + stack.deps.prism.files.vvPrism.name,
                    cwd + stack.deps.prism.files.vvPrism.path + stack.deps.prism.files.vvPrism.name,
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.prism.name}  dep/files successfully!\n`)

        }


        // if the user chose the optional Vitest dep
        if ( userOptions.deps.includes( stack.deps.vitest.name ) ) {

            run(stack.deps.vitest.install)

            fs.copySync(
                sourceStubs + stack.deps.vitest.name,
                cwd + stack.deps.vitest.path + stack.deps.vitest.name
            )

            // #TODO: Need to add npm scripts for vitest to the project
            //        package.json file once Vitest is installed!
            //        "test": "vitest --dom",
            //        "coverage": "vitest run --dom --coverage"

            // add optional Vitest files if the user also selected them
            if ( userOptions.files.includes( stack.deps.vitest.files.helloVueVentusTestJs.name ) || userOptions.files.includes( stack.deps.vitest.files.helloVueVentusVue.name ) ) {
                fs.copySync(
                    sourceStubs + stack.deps.vitest.files.helloVueVentusVue.name,
                    cwd + stack.deps.vitest.files.helloVueVentusVue.path + stack.deps.vitest.files.helloVueVentusVue.name
                )
                fs.copySync(
                    sourceStubs + stack.deps.vitest.files.helloVueVentusTestJs.name,
                    cwd + stack.deps.vitest.files.helloVueVentusTestJs.path + stack.deps.vitest.files.helloVueVentusTestJs.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.vitest.name} dep/files successfully!\n`)

        }

        //
        // END Install vite optional deps
        //

    }

    // await sleep()

    spinner.success({
        text: vueventus + ' deps installed successfully!',
    })

}

await installDepsAndFiles()

console.log(' ')
