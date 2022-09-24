// ./scripts/generateCliMjsVersions.mjs

import fs from 'fs-extra'
import chalk from 'chalk'

const files = [
    'configs/palettes/AnchorDefault.js',
    'configs/palettes/BorderDefault.js',
    'configs/palettes/ButtonOutline.js',
    'configs/palettes/ButtonSolid.js',
    'configs/palettes/CheckboxDefault.js',
    'configs/palettes/GroundConsole.js',
    'configs/palettes/GroundDefault.js',
    'configs/palettes/GroundMonochromatic.js',
    'configs/palettes/GroundPastel.js',
    'configs/palettes/InputDefault.js',
    'configs/palettes/InputUnderlined.js',
    'configs/palettes/RadioDefault.js',
    'configs/palettes/TextDefault.js',
    'configs/Anchors.js',
    'configs/Buttons.js',
    'configs/Checkboxes.js',
    'configs/ColorModes.js',
    'configs/Inputs.js',
    'configs/Radios.js',
    'configs/Text.js',
    'configs/Textareas.js',
    'configs/Transitions.js',
    'configs/VvComponentDefaults.js',
    'configs/VvConfig.js',
]

function processFileForMjsUseSync(filePath) {

    let srcFile = './dist/' + filePath + '.js'
    let destFile = './dist/' + filePath + '.mjs'
    
    var fileData = fs.readFileSync(srcFile, 'utf-8');

    var updatedData = fileData.replace(/\.js/gm, '.mjs');

    fs.writeFileSync(destFile, updatedData, 'utf-8');

    console.log(chalk.green.bold(chalk.white('*\\o/*') + ' The VueVentus CLI ' + destFile + ' file was created successfully! ' + chalk.white('*\\o/*')))

}

// Create am updated VvConfig.mjs file for the CLI tooling to use
// fs.copySync('./dist/configs/VvConfig.js', './dist/configs/VvConfig.mjs')
// log(chalk.green.bold(prefix + './dist/configs/VvConfig.mjs' + suffix))
// log(' ')

for (let i=0; i < files.length; i++) {
    
    processFileForMjsUseSync(files[i])

}

console.log(' ')
