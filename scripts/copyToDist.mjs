// ./scripts/copyToDist.mjs
// Copy the original .vue component files
// Copy the original .ts Typescript files
// into ./dist directory aside their Typescript files

import fs from 'fs-extra'
import chalk from 'chalk'

const log = console.log
const prefix = chalk.white('*\\o/*') + ' VueVentus Package '
const suffix = ' files were copied into .dist! ' + chalk.white('*\\o/*')

// Copy the component files
fs.copySync('./src/components', './dist/components')
log(chalk.green.bold(prefix + '.src/components' + suffix))
log(' ')

// Copy the types files
fs.copySync('./src/types', './dist/types')
log(chalk.green.bold(prefix + '.src/types' + suffix))
log(' ')
