// ./scripts/generateCliMjsVersions.mjs

import fs from 'fs-extra'
import chalk from 'chalk'

const files = [
    'configs/palettes/AnchorDefault',
    'configs/palettes/BorderDefault',
    'configs/palettes/ButtonOutline',
    'configs/palettes/ButtonSolid',
    'configs/palettes/CheckboxDefault',
    'configs/palettes/GroundConsole',
    'configs/palettes/GroundDefault',
    'configs/palettes/GroundMonochromatic',
    'configs/palettes/GroundPastel',
    'configs/palettes/InputDefault',
    'configs/palettes/InputUnderlined',
    'configs/palettes/RadioDefault',
    'configs/palettes/TextDefault',
    'configs/Anchors',
    'configs/Buttons',
    'configs/Checkboxes',
    'configs/ColorModes',
    'configs/Inputs',
    'configs/Radios',
    'configs/Text',
    'configs/Textareas',
    'configs/Transitions',
    'configs/VvComponentDefaults',
    'configs/VvConfig',
]

function processFileForMjsUseSync(filePath) {

    let srcFile = './dist/' + filePath + '.js'
    let destFile = './dist/' + filePath + '.mjs'
    
    var fileData = fs.readFileSync(srcFile, 'utf-8')

    var updatedData = fileData.replace(/\.js/gm, '.mjs')

    fs.writeFileSync(destFile, updatedData, 'utf-8')

    console.log(chalk.green.bold(chalk.white('*\\o/*') + ' The VueVentus CLI ' + destFile + ' file was created successfully! ' + chalk.white('*\\o/*')))

}

for (let i=0; i < files.length; i++) {
    
    processFileForMjsUseSync(files[i])

}

console.log(' ')
