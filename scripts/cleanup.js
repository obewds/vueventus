// ./scripts/cleanup.js
// remove unneeded artifacts from running tsc on ./src/types files

const fs = require('fs-extra')

const path = './dist/types/'

// remove .js files
fs.readdirSync(path).filter(f => /[.]js$/.test(f)).map(f => fs.unlinkSync(path + f))
// remove .js.map files
fs.readdirSync(path).filter(f => /[.]js[.]map$/.test(f)).map(f => fs.unlinkSync(path + f))

// success message
console.log(' ')
console.log('*\\o/* ' + 'Package ' + path + ' files were cleaned/prepped for publishing!' + ' *\\o/*')
console.log(' ')
