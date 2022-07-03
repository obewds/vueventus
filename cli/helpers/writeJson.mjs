// ./cli/helpers/writeJson.mjs

import fs from 'fs-extra'

export default function (filePath, jsonObj) {

    fs.writeFileSync(filePath, JSON.stringify(jsonObj, null, 2), { flag: 'r+' })
    
}

