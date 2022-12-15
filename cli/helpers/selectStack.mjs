// ./cli/helpers/selectStack.mjs

import inquirer from 'inquirer'
import cliData from './cliData.mjs'
import vvBrand from './vvBrand.mjs'

export default async function () {

    let choices = []

    const stackKeys = Object.keys(cliData.stacks)

    stackKeys.forEach( (stack) => choices.push(cliData.stacks[stack].name) )
    
    const answers = await inquirer.prompt({
        name: 'userStack',
        type: 'list',
        message: 'Which ' + vvBrand + ' stack are you using?\n',
        choices: choices,
    })

    return answers.userStack

}
