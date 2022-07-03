// ./cli/helpers/moveFile.mjs

import fs from 'fs-extra'

export default function (srcPath, destinationPath) {

    fs.moveSync(srcPath, destinationPath, { overwrite: true })
    
}
