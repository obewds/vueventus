// ./scripts/copyToDist.js
// Copy the original .vue component files
// Copy the original .ts Typescript files
// into ./dist directory aside their Typescript files

const fs = require('fs-extra')

// Copy the component files
fs.copySync('./src/components', '/dist/components')

// Copy the types files
fs.copySync('./src/types', '/dist/types')

// success message
console.log(' ')
console.log('*\\o/* ' + 'Package ' + 'components and types' + ' files were copied into .dist!' + ' *\\o/*')
console.log(' ')
