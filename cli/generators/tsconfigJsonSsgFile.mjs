// ./cli/generators/tsconfigJsonSsgFile.mjs

import getTsconfigJsonSsgObj from '../helpers/getTsconfigJsonSsgObj.mjs'

export default function () {

return JSON.stringify(getTsconfigJsonSsgObj(), null, 2)
    
}
