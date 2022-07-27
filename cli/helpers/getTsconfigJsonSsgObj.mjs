// ./cli/helpers/getTsconfigJsonSsgObj.mjs

import getVvTsConfig from './getVvTsConfig.mjs'

const ssgStatus = true

export default function () {

    return getVvTsConfig(ssgStatus)
    
}
