#!/usr/bin/env node

import inquirer from 'inquirer'
import vvBrand from './helpers/vvBrand.mjs'

import cliData from './helpers/cliData.mjs'


let userOptions = {
    stackName: '',
    stack: {},
    installFile: '',
}

const cliStackKeys = Object.keys(cliData.stacks)













// show vv-install cli start message
console.log(`


    Welcome to the ${vvBrand} CLI vv-installer utility!
    ---------------------------------------------------
    Use this utility to install individual VueVentus files.


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





async function selectFileToInstall () {
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vvBrand + ' ' + userOptions.stackName + ' stack file would you like to install?\n',
        choices: installerFileNames,
    })

    return answers.userStack
}

userOptions.installFile = await selectFileToInstall()

console.log(' ')






// TODO: Finish this installer tool!

console.log(`userOptions.installFile:`)
console.log(userOptions.installFile)
console.log(' ')

// console.log(`The ${vvBrand} CLI vv-installer has completed!`)
// console.log(' ')
