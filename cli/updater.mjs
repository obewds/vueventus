#!/usr/bin/env node
// ./cli/updater.mjs

import fs from 'fs-extra'
import inquirer from 'inquirer'

import cliData from './helpers/cliData.mjs'
import cwd from './helpers/cwd.mjs'
import gradientText from './helpers/gradientText.mjs'
import selectStack from './helpers/selectStack.mjs'
import vvBrand from './helpers/vvBrand.mjs'


let userOptions = {
    stackName: '',
    stack: {},
    installFileName: '',
    installFile: {},
    confirmation: false,
}

const cliStackKeys = Object.keys(cliData.stacks)













// show vv-install cli start message
console.log(`


    ${gradientText('Welcome to the VueVentus vv-update CLI utility!')}
    ${gradientText('-----------------------------------------------')}
    A utility to install/update individual VueVentus files.


`)











userOptions.stackName = await selectStack()

console.log(' ')















cliStackKeys.forEach( (stack) => {
    if ( cliData.stacks[stack].name === userOptions.stackName ) {
        userOptions.stack = cliData.stacks[stack]
    }
})

let installerFilesData = {}
let installerFileNames = []

const userStackFiles = Object.keys(userOptions.stack.files)

userStackFiles.forEach( (file) => {
    installerFilesData[file] = userOptions.stack.files[file]
    installerFileNames.push(userOptions.stack.files[file].name)
})

const userStackDeps = Object.keys(userOptions.stack.deps)

userStackDeps.forEach( (dep) => {
    
    const depFiles = Object.keys(userOptions.stack.deps[dep].files)

    depFiles.forEach( (file) => {
    
        installerFilesData[file] = userOptions.stack.deps[dep].files[file]
        installerFileNames.push(userOptions.stack.deps[dep].files[file].name)

    })

})

const userStackCompoFiles = Object.keys(userOptions.stack.compos)

userStackCompoFiles.forEach( (file) => {
    installerFilesData[file] = userOptions.stack.compos[file]
    installerFileNames.push(userOptions.stack.compos[file].name)
})













async function selectFileToInstall () {
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: `Which ${gradientText(userOptions.stackName)} stack file would you like to install/update?\n`,
        choices: installerFileNames.sort(),
    })

    return answers.userStack
}

userOptions.installFileName = await selectFileToInstall()

console.log(' ')











const installerFilesKeys = Object.keys(installerFilesData)

installerFilesKeys.forEach( (file) => {
    if ( installerFilesData[file].name === userOptions.installFileName ) {
        userOptions.installFile = installerFilesData[file]
    }
})

async function confirmFileToInstall () {
    
    const answers = await inquirer.prompt({
        name: 'confirmFile',
        type: 'confirm',
        message: `Are you sure you want to install a new ${gradientText('.' + userOptions.installFile.path + userOptions.installFile.name)} file?\n`,
        default: false,
    })

    return answers.confirmFile
}

userOptions.confirmation = await confirmFileToInstall()

console.log(' ')
















if (userOptions.confirmation === true) {

    fs.outputFileSync(cwd + userOptions.installFile.path + userOptions.installFile.name, userOptions.installFile.src, { flag: 'w+' })

    console.log(`\n${gradientText('.' + userOptions.installFile.path + userOptions.installFile.name) + ' was installed successfully!'}\n`)

}

if (userOptions.confirmation === false) {
    console.log(`\n${gradientText('No files were installed/updated.')}\n`)
}
