// ./cli/helpers/getTsconfigJsonObj.mjs

import getVvTsConfig from './getVvTsConfig.mjs'

const ssgStatus = false

export default function () {

    return getVvTsConfig(ssgStatus)
        
}
