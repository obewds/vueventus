#!/usr/bin/env node
// ./cli/updater.mjs

import fs from 'fs-extra'
import inquirer from 'inquirer'

import cliData from './helpers/cliData.mjs'
import cwd from './helpers/cwd.mjs'
import gradientText from './helpers/gradientText.mjs'
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
    Use this utility to install/update individual VueVentus files.


`)










async function selectStack () {

    let choices = []

    cliStackKeys.forEach( (stack) => choices.push(cliData.stacks[stack].name) )
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vvBrand + ' stack are you using?\n',
        choices: choices,
    })

    return answers.userStack
}

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

// console.log(`installerFilesData:`)
// console.log(installerFilesData)
// console.log(' ')
// console.log(`installerFileNames:`)
// console.log(installerFileNames)

const userStackDeps = Object.keys(userOptions.stack.deps)

// console.log('userStackDeps:')
// console.log(userStackDeps)

// console.log('userOptions:')
// console.log(userOptions)

userStackDeps.forEach( (dep) => {

    // console.log('userOptions.stack.deps[dep]:')
    // console.log(userOptions.stack.deps[dep])
    
    const depFiles = Object.keys(userOptions.stack.deps[dep].files)

    // console.log('depFiles:')
    // console.log(depFiles)

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
        message: 'Which ' + vvBrand + ' ' + userOptions.stackName + ' stack file would you like to install/update?\n',
        choices: installerFileNames,
    })

    return answers.userStack
}

userOptions.installFileName = await selectFileToInstall()

console.log(' ')











const installerFilesKeys = Object.keys(installerFilesData)
// console.log(`installerFilesKeys:`)
// console.log(installerFilesKeys)

installerFilesKeys.forEach( (file) => {
    if ( installerFilesData[file].name === userOptions.installFileName ) {
        userOptions.installFile = installerFilesData[file]
    }
})

// console.log(`userOptions.installFileName:`)
// console.log(userOptions.installFileName)
// console.log(`userOptions.installFile:`)
// console.log(userOptions.installFile)

// console.log('userOptions.installFile:')
// console.log(userOptions.installFile)
// console.log('Destination: ' + userOptions.installFile.path + userOptions.installFile.name)
// console.log(' ')

let confirmMsg = ''

if (userOptions.installFile.isMethod) {
    confirmMsg += `Are you sure you want to write a new file: ${gradientText('.' + userOptions.installFile.path + userOptions.installFile.name)}?\n`
}

if (userOptions.installFile.isFile) {
    confirmMsg += `Are you sure you want to copy a new file: ${gradientText('.' + userOptions.installFile.path + userOptions.installFile.name)}?\n`
}


async function confirmFileToInstall () {
    
    const answers = await inquirer.prompt({
        name: 'confirmFile',
        type: 'confirm',
        message: confirmMsg,
        default: false,
    })

    return answers.confirmFile
}

userOptions.confirmation = await confirmFileToInstall()

console.log(' ')
















if (userOptions.confirmation === true) {

    if (userOptions.installFile.isFile) {

        console.log(`\n${gradientText('[ Install the file via a file system copy ]')}\n`)
        
    }

    if (userOptions.installFile.isMethod) {

        fs.outputFileSync(cwd + userOptions.installFile.path + userOptions.installFile.name, userOptions.installFile.src, { flag: 'w+' })

        console.log(`\n${gradientText(userOptions.installFile.path + userOptions.installFile.name) + ' was installed successfully!'}\n`)

    }

}

if (userOptions.confirmation === false) {
    console.log(`\n${gradientText('No files were installed/updated.')}\n`)
}












// TODO: Finish installer tool!

// console.log(`The ${vvBrand} CLI vv-installer has completed!`)
// console.log(' ')
