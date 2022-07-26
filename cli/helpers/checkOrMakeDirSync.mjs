// ./cli/helpers/checkOrMakeDirSync.mjs

import fs from 'fs-extra'

export default function (directoryPath) {

    if ( !fs.existsSync( directoryPath ) ) {
        fs.mkdirSync( directoryPath )
    }

}
