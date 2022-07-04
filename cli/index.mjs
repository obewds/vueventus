#!/usr/bin/env node

import { createSpinner } from 'nanospinner'
import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import rimraf from 'rimraf'

import mergeJson from './helpers/mergeJson.mjs'
import moveFile from './helpers/moveFile.mjs'
import run from './helpers/run.mjs'
import writeJson from './helpers/writeJson.mjs'



const vueventus = gradient('lightGreen', 'cyan')('VueVentus')
//const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )

const cwd = process.env.INIT_CWD
//const sourceStubs = './node_modules/@obewds/vueventus/cli/stubs/'
const stubs = cwd + '/node_modules/@obewds/vueventus/cli/stubs/'

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
                    packages: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome@latest-3', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-regular-svg-icons'],
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
                    packages: ['gsap'],
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
                    packages: ['@headlessui/vue'],
                },
                heroicons: {
                    checked: true,
                    name: 'Heroicons',
                    install: 'npm install @heroicons/vue --save-dev',
                    packages: ['@heroicons/vue'],
                },
                prism: {
                    checked: true,
                    name: 'Prism.js',
                    install: 'npm install prismjs vite-plugin-prismjs @types/prismjs --save-dev',
                    packages: ['prismjs', 'vite-plugin-prismjs', '@types/prismjs'],
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
                    packages: ['vitest', '@vue/test-utils', 'happy-dom', 'c8'],
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
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.vitest.files.helloVueVentusTestJs.name,
            checked: vv.stacks.vueTwViteTs.deps.vitest.files.helloVueVentusTestJs.checked,
        })
        depFileChoices.push({
            name: vv.stacks.vueTwViteTs.deps.vitest.files.helloVueVentusVue.name,
            checked: vv.stacks.vueTwViteTs.deps.vitest.files.helloVueVentusVue.checked,
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

    //
    // Install stack
    //

    let installedPkgs = []

    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === vv.stacks.vueTwViteTs.name) {

        const stack = vv.stacks.vueTwViteTs
        
        //
        // START install vite
        //

        run(`npm create vite@latest ${userOptions.name} -- --template vue-ts`)

        installedPkgs.push('vite@latest')

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
        moveFile(cwd + '/' + userOptions.name + '/tsconfig.node.json', cwd + '/tsconfig.node.json')
        moveFile(stubs + 'logo-obe.svg', cwd + '/src/assets/logo-obe.svg')
        moveFile(stubs + 'logo-tailwindcss.svg', cwd + '/src/assets/logo-tailwindcss.svg')
        moveFile(stubs + 'logo-typescript.svg', cwd + '/src/assets/logo-typescript.svg')
        moveFile(stubs + 'logo-vite.svg', cwd + '/src/assets/logo-vite.svg')
        moveFile(stubs + 'logo-vue.svg', cwd + '/src/assets/logo-vue.svg')
        moveFile(stubs + 'main.ts', cwd + '/src/main.ts')
        moveFile(stubs + 'App.vue', cwd + '/src/App.vue')
        moveFile(stubs + 'HelloWorld.vue', cwd + '/src/components/HelloWorld.vue')
        
        if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
            fs.copySync(stubs + 'index.html', cwd + '/index.html')
        } else {
            moveFile(cwd + '/' + userOptions.name + '/index.html', cwd + '/index.html')
        }

        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {
            fs.copySync(stubs + 'vite.config.prism.ts', cwd + '/vite.config.ts')
        } else {
            fs.copySync(stubs + 'vite.config.ts', cwd + '/vite.config.ts')
        }

        // and finally delete the vite generated folder
        rimraf.sync(cwd + '/' + userOptions.name)
        
        // merge the stub and vite tsconfig files data
        let newTsConfig = mergeJson(cwd + '/tsconfig.json', stubs + 'tsconfig.json')

        // write the new merged package data to the current package file
        writeJson(cwd + '/tsconfig.json', newTsConfig)

        console.log(`\nThe ${vueventus} CLI installed/moved all ${stack.name} deps/files to root and merged all package.json data successfully into the root package.json file!\n`)

        //
        // install tailwind css
        //
        
        run('npm install tailwindcss postcss autoprefixer --save-dev')
        run('npx tailwindcss init -p')

        installedPkgs.push('tailwindcss', 'postcss', 'autoprefixer')

        console.log(`\nThe ${vueventus} CLI installed and initialized Tailwind CSS successfully!\n`)

        //
        // install types
        //

        run('npm install @types/node --save-dev')

        installedPkgs.push('@types/node')

        console.log(`\nThe ${vueventus} CLI installed @types/node successfully!\n`)

        //
        // install stack VueVentus files
        //

        if ( userOptions.files.includes( stack.files.appVvTs.name ) ) {
            fs.copySync(
                stubs + stack.files.appVvTs.name,
                cwd + stack.files.appVvTs.path + stack.files.appVvTs.name
            )
        }

        if ( userOptions.files.includes( stack.files.appColorsJson.name ) ) {
            fs.copySync(
                stubs + stack.files.appColorsJson.name,
                cwd + stack.files.appColorsJson.path + stack.files.appColorsJson.name
            )
        }

        if ( userOptions.files.includes( stack.files.tailwindConfigJs.name ) ) {
            fs.copySync(
                stubs + stack.files.tailwindConfigJs.name,
                cwd + stack.files.tailwindConfigJs.path + stack.files.tailwindConfigJs.name
            )
        }

        if ( userOptions.files.includes( stack.files.tailwindCss.name ) ) {
            fs.copySync(
                stubs + stack.files.tailwindCss.name,
                cwd + stack.files.tailwindCss.path + stack.files.tailwindCss.name
            )
        }

        console.log(`\nThe ${vueventus} CLI installed VueVentus package files for your stack successfully!\n`)

        //
        // END of install vite
        //



        //
        // START Install vite optional deps
        //

        // if the user chose the optional FontAwesome Free dep
        if ( userOptions.deps.includes( stack.deps.fontawesome.name ) ) {

            run(stack.deps.fontawesome.install)

            installedPkgs = [...installedPkgs, ...stack.deps.fontawesome.packages]

            fs.copySync(
                stubs + stack.deps.fontawesome.files.fontAwesomeTs.name,
                cwd + stack.deps.fontawesome.files.fontAwesomeTs.path + stack.deps.fontawesome.files.fontAwesomeTs.name
            )

            // add optional FontAwesome Free files if the user also selected them
            if ( userOptions.files.includes( stack.deps.fontawesome.files.vvFa.name ) ) {
                fs.copySync(
                    stubs + stack.deps.fontawesome.files.vvFa.name,
                    cwd + stack.deps.fontawesome.files.vvFa.path + stack.deps.fontawesome.files.vvFa.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.fontawesome.name} dep/files successfully!\n`)

        }


        // if the user chose the optional GSAP dep
        if ( userOptions.deps.includes( stack.deps.gsap.name ) ) {

            run(stack.deps.gsap.install)

            installedPkgs = [...installedPkgs, ...stack.deps.gsap.packages]

            fs.copySync(stubs + 'gsap.ts', cwd + '/src/gsap.ts')

            // add optional GSAP files if the user also selected them
            if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
                fs.copySync(
                    stubs + stack.deps.gsap.files.vvScrollUp.name,
                    cwd + stack.deps.gsap.files.vvScrollUp.path + stack.deps.gsap.files.vvScrollUp.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.gsap.name} dep/files successfully!\n`)

        }


        // if the user chose the optional Headless UI dep
        if ( userOptions.deps.includes( stack.deps.headless.name ) ) {

            run(stack.deps.headless.install)

            installedPkgs = [...installedPkgs, ...stack.deps.headless.packages]

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.headless.name} dep successfully!\n`)

        }


        // if the user chose the optional Heroicons dep
        if ( userOptions.deps.includes( stack.deps.heroicons.name ) ) {

            run(stack.deps.heroicons.install)

            installedPkgs = [...installedPkgs, ...stack.deps.heroicons.packages]

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.heroicons.name} dep successfully!\n`)

        }


        // if the user chose the optional Prism.js dep
        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {

            run(stack.deps.prism.install)

            installedPkgs = [...installedPkgs, ...stack.deps.prism.packages]

            // add optional Prism.js files if the user also selected them
            if ( userOptions.files.includes( stack.deps.prism.files.vvPrism.name ) ) {
                fs.copySync(
                    stubs + stack.deps.prism.files.vvPrism.name,
                    cwd + stack.deps.prism.files.vvPrism.path + stack.deps.prism.files.vvPrism.name,
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.prism.name} dep/files successfully!\n`)

        }


        // if the user chose the optional Vitest dep
        if ( userOptions.deps.includes( stack.deps.vitest.name ) ) {

            run(`npm pkg set scripts.test="vitest --dom"`)
            run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

            run(stack.deps.vitest.install)

            installedPkgs = [...installedPkgs, ...stack.deps.vitest.packages]

            fs.copySync(
                stubs + stack.deps.vitest.files.vitestConfigTs.name,
                cwd + stack.deps.vitest.files.vitestConfigTs.path + stack.deps.vitest.files.vitestConfigTs.name
            )

            // add optional Vitest files if the user also selected them
            if ( userOptions.files.includes( stack.deps.vitest.files.helloVueVentusTestJs.name ) || userOptions.files.includes( stack.deps.vitest.files.helloVueVentusVue.name ) ) {
                fs.copySync(
                    stubs + stack.deps.vitest.files.helloVueVentusVue.name,
                    cwd + stack.deps.vitest.files.helloVueVentusVue.path + stack.deps.vitest.files.helloVueVentusVue.name
                )
                fs.copySync(
                    stubs + stack.deps.vitest.files.helloVueVentusTestJs.name,
                    cwd + stack.deps.vitest.files.helloVueVentusTestJs.path + stack.deps.vitest.files.helloVueVentusTestJs.name
                )
            }

            console.log(`\nThe ${vueventus} CLI installed/added the ${stack.deps.vitest.name} dep/files successfully!\n`)

        }

        //
        // END Install vite optional deps
        //

    }

    console.log(`${vueventus} CLI installed the following packages:`)
    console.log(installedPkgs)

    spinner.success({
        text: vueventus + ' deps installed successfully!',
    })

}

await installDepsAndFiles()

console.log(' ')
