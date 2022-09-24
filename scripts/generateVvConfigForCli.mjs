// ./scripts/generateVvConfigForCli.mjs

import fs from 'fs-extra'
import chalk from 'chalk'

const log = console.log
const prefix = chalk.white('*\\o/*') + ' The VueVentus CLI Package '
const suffix = ' file was copied into .dist/configs! ' + chalk.white('*\\o/*')

// Create am updated VvConfig.mjs file for the CLI tooling to use
fs.copySync('./dist/configs/VvConfig.js', './dist/configs/VvConfig.mjs')
log(chalk.green.bold(prefix + './dist/configs/VvConfig.mjs' + suffix))
log(' ')
