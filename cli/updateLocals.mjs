#!/usr/bin/env node
// ./cli/updateLocals.mjs

import fs from 'fs-extra'
import inquirer from 'inquirer'

import cliData from './helpers/cliData.mjs'
import cwd from './helpers/cwd.mjs'
import gradientText from './helpers/gradientText.mjs'
import selectStack from './helpers/selectStack.mjs'


let userOptions = {
    stackName: '',
    stack: {},
    files: [],
    fontAwesomeType: '',
}

const cliStackKeys = Object.keys(cliData.stacks)

const fontAwesomeTypes = {
    free: 'FontAwesome Free',
    pro: 'FontAwesome Pro',
}













// show vv-install cli start message
console.log(`


    ${gradientText('Welcome to the VueVentus vv-update-locals CLI utility!')}
    ${gradientText('------------------------------------------------------')}
    A utility to update to the newest VueVentus local component/test files.


`)













userOptions.stackName = await selectStack()

cliStackKeys.forEach( (stack) => {
    if ( cliData.stacks[stack].name === userOptions.stackName ) {
        userOptions.stack = cliData.stacks[stack]
    }
})

console.log(' ')















async function selectFontAwesomeType () {

    let choices = [
        fontAwesomeTypes.free,
        fontAwesomeTypes.pro,
    ]
    
    const answers = await inquirer.prompt({
        name: 'faType',
        type: 'list',
        message: 'Are you using FontAwesome Free or FontAwesome Pro?\n',
        choices: choices,
    })

    return answers.faType

}

userOptions.fontAwesomeType = await selectFontAwesomeType()












// create an array to hold file data objects for each vv cli file to be updated
let filesToUpdate = []

// get the standard stack vue components data keys from cliData
let stackComponentKeys = Object.keys(cliData.stacks[userOptions.stack].compos)

// use the stackComponentKeys to extract the data objects for each vv cli standard component
stackComponentKeys.forEach( (componentKey) => {
    filesToUpdate.push( cliData.stacks[userOptions.stack].compos[componentKey] )
})

// manually add in the vv cli dep components that are grouped differently than the standard vv compos in cliData
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.gsap.files.vvScrollUp )
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.prism.files.vvPrism )
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.prism.files.vvPrismVars )

// get the standard stack vitest test files data keys from cliData
let stackTestFilesKeys = Object.keys(cliData.stacks[userOptions.stack].deps.vitest.files)

// create an array to specify vitest installation only files that should be excluded from this update script
let excludedTestFileKeys = [
    'vitestConfigTs',
    'helloVueVentusTestJs',
    'helloVueVentusVue',
]

// loop through the cli stack keys
cliStackKeys.forEach( (stack) => {

    // if this the user is using the vue-ts stack
    if ( userOptions.stackName === cliData.stacks.vueTwViteTs.name ) {

        // then add the vus-ts stack specific vitest file keys to the excludedTestFileKeys array
        excludedTestFileKeys.push('homeTestJs', 'notFound404TestJs')

    }
    // otherwise if the user is using the ssg stack
    else if ( userOptions.stackName === cliData.stacks.vueTwViteSsgMdTs.name ) {

        // then add the ssg stack specific vitest file keys to the excludedTestFileKeys array
        excludedTestFileKeys.push('bTestJs')

    }
    
})

// now loop through all of the stack vitest file keys
stackTestFilesKeys.forEach( (testFileKey) => {

    let useKey = true

    // loop through the excluded keys to see if the file should be excluded from this update script
    excludedTestFileKeys.forEach( (excludedTestFileKey) => {
        if (testFileKey === excludedTestFileKey) {
            // if this test file should be excluded
            useKey = false
        }
    })

    // if this file should be updated via this script and isn't in the exclude list
    if (useKey === true) {
        // add the stack vitest test file data object to the filesToUpdate array
        filesToUpdate.push( cliData.stacks[userOptions.stack].deps.vitest.files[testFileKey] )
    }

})

// manually add in the vv cli vitest test files that are grouped differently than the standard vv vitest files in cliData
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.gsap.files.vvScrollUp )
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.prism.files.vvPrismTestJs )
filesToUpdate.push( cliData.stacks[userOptions.stack].deps.prism.files.vvPrismVarsTestJs )

// and finally handle which of the FontAwesome types the user needs to update
if ( userOptions.fontAwesomeType === fontAwesomeTypes.free ) {

    filesToUpdate.push(cliData.stacks[userOptions.stack].deps.fontawesome.files.vvFa)
    filesToUpdate.push(cliData.stacks[userOptions.stack].deps.fontawesome.files.vvFaTestJs)

} else if ( userOptions.fontAwesomeType === fontAwesomeTypes.pro ) {

    filesToUpdate.push(cliData.stacks[userOptions.stack].deps.faPro.files.vvFa)
    filesToUpdate.push(cliData.stacks[userOptions.stack].deps.faPro.files.vvFaTestJs)

}

userOptions.files = filesToUpdate

// const xxx = cliData.stacks[userOptions.stack].compos
// console.log(' ')
// console.log('userOptions:')
// console.log(userOptions)
// console.log(' ')





// loop through the user's files to update and write the files
userOptions.files.forEach( (file) => {

    fs.outputFileSync(cwd + file.path + file.name, file.src, { flag: 'w+' })

    console.log(`\n${gradientText('.' + file.path + file.name) + ' was installed successfully!'}\n`)

})












console.log(' ')

console.log(`${gradient('lightGreen', 'cyan')('Happy Hacking!')}\n`)

console.log(' ')
















