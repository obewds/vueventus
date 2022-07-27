// ./cli/helpers/checkOrMakeDirSync.mjs
// TODO: Delete this method if it is no longer being used by cli scripts

import fs from 'fs-extra'

export default function (directoryPath) {

    if ( !fs.existsSync( directoryPath ) ) {
        fs.mkdirSync( directoryPath )
    }

}
