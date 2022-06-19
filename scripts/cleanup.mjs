// ./scripts/cleanup.mjs
// Remove unneeded artifacts from running tsc on ./src/types files

import fs from 'fs-extra'
import chalk from 'chalk'

const log = console.log
const path = './dist/types/'
const prefix = chalk.white('*\\o/*') + ' VueVentus Typescript '
const suffix = ' files were cleaned/prepped for publishing! ' + chalk.white('*\\o/*')

// remove .js files
fs.readdirSync(path).filter(f => /[.]js$/.test(f)).map(f => fs.unlinkSync(path + f))
log(chalk.green.bold(prefix + '.js' + suffix))
log(' ')

// remove .js.map files
fs.readdirSync(path).filter(f => /[.]js[.]map$/.test(f)).map(f => fs.unlinkSync(path + f))
log(chalk.green.bold(prefix + '.js.map' + suffix))
log(' ')
