// ./cli/generators/tsconfigJsonFile.mjs

import getTsconfigJsonObj from '../helpers/getTsconfigJsonObj.mjs'

export default function () {

return JSON.stringify(getTsconfigJsonObj(), null, 2)
    
}
