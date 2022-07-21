#!/usr/bin/env node

import fs from 'fs-extra'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import rimraf from 'rimraf'

import generateMainFileCode from './helpers/generateMainFileCode.mjs'
import mergeJson from './helpers/mergeJson.mjs'
import moveFile from './helpers/moveFile.mjs'
import run from './helpers/run.mjs'
import writeJson from './helpers/writeJson.mjs'


import copySyncSvgsToAssets from './helpers/copySyncSvgsToAssets.mjs'
import cwd from './helpers/cwd.mjs'
import installNodeTypes from './helpers/installNodeTypes.mjs'
import installTailwindCss from './helpers/installTailwindCss.mjs'
import moveViteTsFilesToRoot from './helpers/moveViteTsFilesToRoot.mjs'
import optionallyInstallDep from './helpers/optionallyInstallDep.mjs'
import stubsPath from './helpers/stubsPath.mjs'
import vvBrand from './helpers/vvBrand.mjs'


// const sleep = ( ms = 1000 ) => new Promise( ( r ) => setTimeout( r, ms ) )

let userOptions = {
    name: '',
    stack: '',
    faProLicense: '',
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
                    name: 'tailwind.config.cjs',
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
                            path: '/src/components/vv/elements/',
                        },
                    },
                },
                faPro: {
                    checked: false,
                    name: 'FontAwesome Pro (License Required)',
                    install: 'npm install @fortawesome/fontawesome-svg-core @fortawesome/vue-fontawesome@latest-3 @fortawesome/free-brands-svg-icons @fortawesome/pro-duotone-svg-icons @fortawesome/pro-light-svg-icons @fortawesome/pro-regular-svg-icons @fortawesome/pro-solid-svg-icons @fortawesome/pro-thin-svg-icons --save-dev',
                    packages: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome@latest-3', '@fortawesome/free-brands-svg-icons', '@fortawesome/pro-solid-svg-icons', '@fortawesome/pro-regular-svg-icons', '@fortawesome/pro-duotone-svg-icons', '@fortawesome/pro-light-svg-icons', '@fortawesome/pro-thin-svg-icons'],
                    files: {
                        fontAwesomeProTs: {
                            name: 'fontAwesomePro.ts',
                            checked: true,
                            path: '/src/',
                        },
                        vvFa: {
                            name: 'VvFa.vue',
                            checked: true,
                            path: '/src/components/vv/elements/',
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
                            path: '/src/components/vv/buttons/',
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
                            path: '/src/components/vv/elements/',
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
        /*
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
        */
    },
}






console.log(`


    Welcome to the ${vvBrand} CLI!


`)






async function setProjectName () {
    
    const answers = await inquirer.prompt({
        name: 'projectName',
        type: 'input',
        message: 'What is the name of your new ' + vvBrand + ' project?\n',
    })

    userOptions.name = answers.projectName

    return userOptions.name
}

await setProjectName()

console.log(' ')






async function chooseStack () {

    let choices = []

    const stackKeys = Object.keys(vv.stacks)

    stackKeys.forEach( (stack) => choices.push(vv.stacks[stack].name) )
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vvBrand + ' stack are you installing?\n',
        choices: choices,
        // choices: [
        //     vv.stacks.vueTwViteTs.name,
        //     // vv.stacks.vueTwVite.name,
        //     // vv.stacks.vueTwNuxtViteTs.name,
        // ],
    })

    userOptions.stack = answers.userStack

    return userOptions.stack
}

await chooseStack()

console.log(' ')









async function chooseDeps () {

    let stack = {}
    let choices = []

    // if the stack is vueTwViteTs
    if ( userOptions.stack === vv.stacks.vueTwViteTs.name ) {

        stack = vv.stacks.vueTwViteTs

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

    userOptions.deps = answers.userDeps

    return userOptions.deps

}

await chooseDeps()

console.log(' ')








async function chooseFiles () {

    let stack = {}
    let stackFiles = []
    let depFiles = []

    // if the stack is vueTwViteTs
    if ( userOptions.stack === vv.stacks.vueTwViteTs.name ) {

        stack = vv.stacks.vueTwViteTs

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

    userOptions.files = answers.userFiles

    return userOptions.files
}

await chooseFiles()

console.log(' ')









// new as of Jul 21
async function installDepsAndFiles () {

    //
    // Install stack
    //

    let installedPkgs = []

    // if the user chose the Vue/TWCSS/VITE/TS stack
    if (userOptions.stack === vv.stacks.vueTwViteTs.name) {

        const stack = vv.stacks.vueTwViteTs
        // new as of Jul 21
        const stackStubs = stubsPath + 'vue-ts/'
        
        //
        // START install vite-ts
        //

        run(`npm create vite@latest ${userOptions.name} -- --template vue-ts`)

        installedPkgs.push('vite@latest')

        // merge the current and vite packages data & write the new merged package data to the current package file
        writeJson(
            cwd + '/package.json',
            mergeJson(cwd + '/' + userOptions.name + '/package.json', cwd + '/package.json')
        )

        // copy each vite generated folder and file from the vite generated directory back up into the root directory
        moveViteTsFilesToRoot(userOptions.name)

        // copy the VueVentus starter SVG files into project
        copySyncSvgsToAssets()

        // copy the VueVentus starter files from the cli stubs files
        fs.copySync(stackStubs + 'App.vue', cwd + '/src/App.vue')
        fs.copySync(stackStubs + 'HelloWorld.vue', cwd + '/src/components/HelloWorld.vue')

        // copy the VueVentus starter end user app component files from the cli stubs files
        fs.copySync(stackStubs + 'vv', cwd + '/src/components/vv')




        // handle main.ts app file
        let mainFileSettings = {
            faFree: false,
            faPro: false,
            gsap: false,
        }
        if (userOptions.deps.includes(stack.deps.fontawesome.name) || userOptions.deps.includes(stack.deps.faPro.name)) {
            if (userOptions.deps.includes(stack.deps.fontawesome.name)) {
                mainFileSettings.faFree = true
            }
            if (userOptions.deps.includes(stack.deps.faPro.name)) {
                mainFileSettings.faFree = false
                mainFileSettings.faPro = true
            }
        }
        if (userOptions.deps.includes(stack.deps.gsap.name)) {
            mainFileSettings.gsap = true
        }
        const mainTsCode = generateMainFileCode(mainFileSettings)
        fs.writeFileSync(cwd + '/src/main.ts', mainTsCode, { flag: 'w+' })







        
        if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
            fs.copySync(stackStubs + 'index.html', cwd + '/index.html')
        } else {
            moveFile(cwd + '/' + userOptions.name + '/index.html', cwd + '/index.html')
        }

        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {
            fs.copySync(stackStubs + 'vite.config.prism.ts', cwd + '/vite.config.ts')
        } else {
            fs.copySync(stackStubs + 'vite.config.ts', cwd + '/vite.config.ts')
        }

        // and finally delete the vite generated folder
        rimraf.sync(cwd + '/' + userOptions.name)

        // merge the stub and vite tsconfig files data & write the new merged package data to the current package file
        writeJson(
            cwd + '/tsconfig.json',
            mergeJson(cwd + '/tsconfig.json', stackStubs + 'vv.tsconfig.json')
        )

        console.log(`\nThe ${vvBrand} CLI installed/moved all ${stack.name} deps/files to root and merged all package.json data successfully into the root package.json file!\n`)

        //
        // install tailwind css
        //

        installTailwindCss(installedPkgs)

        //
        // install types
        //

        installNodeTypes(installedPkgs)

        //
        // install stack VueVentus files
        //

        const vvStackFileKeys = ['appVvTs', 'appColorsJson', 'tailwindConfigJs', 'tailwindCss']

        vvStackFileKeys.forEach( (key) => {
            if ( userOptions.files.includes( stack.files[key].name ) ) {
                fs.copySync(
                    stackStubs + stack.files[key].name,
                    cwd + stack.files[key].path + stack.files[key].name
                )
            } 
        })

        console.log(`\nThe ${vvBrand} CLI installed VueVentus package files for your stack successfully!\n`)

        //
        // END of install vite
        //



        //
        // START Install vite optional deps
        //

        // if the user chose the optional FontAwesome Free dep
        if (userOptions.deps.includes(stack.deps.fontawesome.name) || userOptions.deps.includes(stack.deps.faPro.name)) {

            if (userOptions.deps.includes(stack.deps.faPro.name)) {

                //
                // install the pro font awesome dep
                //

                async function setFaProLicense () {
    
                    const answers = await inquirer.prompt({
                        name: 'faProLicense',
                        type: 'input',
                        message: 'What is your FontAwesome Pro license authorization token (required to download artwork via a project .npmrc file which will be created for you)?\n',
                    })
                
                    userOptions.faProLicense = (answers.faProLicense).trim()
                
                    return userOptions.faProLicense
                }
                
                await setFaProLicense()
                
                console.log(' ')

                // create faPro .npmrc file - adding in the user supplied

                if (userOptions.faProLicense !== '') {
                    
                    const npmrcCode = `@fortawesome:registry=https://npm.fontawesome.com/\n` + `//npm.fontawesome.com/:_authToken=${userOptions.faProLicense}\n`

                    fs.writeFileSync(cwd + '/.npmrc', npmrcCode, { flag: 'a+' })

                    // add .npmrc to project .gitignore file

                    const gitignoreNpmrcCode = `\n.npmrc\n`

                    fs.writeFileSync(cwd + '/.gitignore', gitignoreNpmrcCode, { flag: 'a+' })
                        
                    //
                    // now install the pro font awesome dep
                    //
                    
                    run(stack.deps.faPro.install)

                    installedPkgs = [...installedPkgs, ...stack.deps.faPro.packages]

                    fs.copySync(
                        stackStubs + stack.deps.faPro.files.fontAwesomeProTs.name,
                        cwd + stack.deps.faPro.files.fontAwesomeProTs.path + stack.deps.faPro.files.fontAwesomeProTs.name
                    )

                    // add optional FontAwesome Free files if the user also selected them
                    if ( userOptions.files.includes( stack.deps.faPro.files.vvFa.name ) ) {
                        fs.copySync(
                            stackStubs + stack.deps.faPro.files.vvFa.name,
                            cwd + stack.deps.faPro.files.vvFa.path + stack.deps.faPro.files.vvFa.name
                        )
                    }

                    console.log(`\nThe ${vvBrand} CLI installed/added the ${stack.deps.faPro.name} dep/files successfully!\n`)

                }


            } else {

                //
                // else install the free font awesome dep
                //
                
                run(stack.deps.fontawesome.install)

                installedPkgs = [...installedPkgs, ...stack.deps.fontawesome.packages]

                fs.copySync(
                    stackStubs + stack.deps.fontawesome.files.fontAwesomeTs.name,
                    cwd + stack.deps.fontawesome.files.fontAwesomeTs.path + stack.deps.fontawesome.files.fontAwesomeTs.name
                )

                // add optional FontAwesome Free files if the user also selected them
                if ( userOptions.files.includes( stack.deps.fontawesome.files.vvFa.name ) ) {
                    fs.copySync(
                        stackStubs + stack.deps.fontawesome.files.vvFa.name,
                        cwd + stack.deps.fontawesome.files.vvFa.path + stack.deps.fontawesome.files.vvFa.name
                    )
                }

                console.log(`\nThe ${vvBrand} CLI installed/added the ${stack.deps.fontawesome.name} dep/files successfully!\n`)

            }

        }


        // if the user chose the optional GSAP dep
        if ( userOptions.deps.includes( stack.deps.gsap.name ) ) {

            run(stack.deps.gsap.install)

            installedPkgs = [...installedPkgs, ...stack.deps.gsap.packages]

            fs.copySync(stackStubs + 'gsap.ts', cwd + '/src/gsap.ts')

            // add optional GSAP files if the user also selected them
            if ( userOptions.files.includes( stack.deps.gsap.files.vvScrollUp.name ) ) {
                fs.copySync(
                    stackStubs + stack.deps.gsap.files.vvScrollUp.name,
                    cwd + stack.deps.gsap.files.vvScrollUp.path + stack.deps.gsap.files.vvScrollUp.name
                )
            }

            console.log(`\nThe ${vvBrand} CLI installed/added the ${stack.deps.gsap.name} dep/files successfully!\n`)

        }


        // if the user chose the optional Headless UI dep
        installedPkgs = [...installedPkgs, ...optionallyInstallDep(userOptions, stack.deps.headless)]
        


        // if the user chose the optional Heroicons dep
        installedPkgs = [...installedPkgs, ...optionallyInstallDep(userOptions, stack.deps.heroicons)]


        // if the user chose the optional Prism.js dep
        if ( userOptions.deps.includes( stack.deps.prism.name ) ) {

            run(stack.deps.prism.install)

            installedPkgs = [...installedPkgs, ...stack.deps.prism.packages]

            // add optional Prism.js files if the user also selected them
            if ( userOptions.files.includes( stack.deps.prism.files.vvPrism.name ) ) {
                fs.copySync(
                    stackStubs + stack.deps.prism.files.vvPrism.name,
                    cwd + stack.deps.prism.files.vvPrism.path + stack.deps.prism.files.vvPrism.name,
                )
            }

            console.log(`\nThe ${vvBrand} CLI installed/added the ${stack.deps.prism.name} dep/files successfully!\n`)

        }


        // if the user chose the optional Vitest dep
        if ( userOptions.deps.includes( stack.deps.vitest.name ) ) {

            run(`npm pkg set scripts.test="vitest --dom"`)
            run(`npm pkg set scripts.coverage="vitest run --dom --coverage"`)

            run(stack.deps.vitest.install)

            installedPkgs = [...installedPkgs, ...stack.deps.vitest.packages]

            fs.copySync(
                stackStubs + stack.deps.vitest.files.vitestConfigTs.name,
                cwd + stack.deps.vitest.files.vitestConfigTs.path + stack.deps.vitest.files.vitestConfigTs.name
            )

            // add optional Vitest files if the user also selected them
            if ( userOptions.files.includes( stack.deps.vitest.files.helloVueVentusTestJs.name ) || userOptions.files.includes( stack.deps.vitest.files.helloVueVentusVue.name ) ) {
                fs.copySync(
                    stackStubs + stack.deps.vitest.files.helloVueVentusVue.name,
                    cwd + stack.deps.vitest.files.helloVueVentusVue.path + stack.deps.vitest.files.helloVueVentusVue.name
                )
                fs.copySync(
                    stackStubs + stack.deps.vitest.files.helloVueVentusTestJs.name,
                    cwd + stack.deps.vitest.files.helloVueVentusTestJs.path + stack.deps.vitest.files.helloVueVentusTestJs.name
                )
            }

            console.log(`\nThe ${vvBrand} CLI installed/added the ${stack.deps.vitest.name} dep/files successfully!\n`)

        }

        //
        // END Install vite optional deps
        //

    }

    console.log(`${vvBrand} CLI installed the following packages:`)
    console.log(installedPkgs)

    console.log(`\nYour ${vvBrand} CLI installation is complete!\n`)
    console.log(`Here's a few commands to get started:`)
    console.log(`
        npm run dev
        npm run build
        npm run test
        npm run coverage
    `)
    console.log(`${gradient('lightGreen', 'cyan')('Happy Coding!')}\n`)

}

await installDepsAndFiles()

console.log(' ')
