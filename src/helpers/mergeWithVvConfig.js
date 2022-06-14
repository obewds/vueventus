// ./src/helpers/mergeWithVvConfig.js

import merge from 'deepmerge'
import VvConfig from '../configs/VvConfig.js'

export default function(appTwConfig) {

    return Object.keys( appTwConfig ).length > 0 ? merge( VvConfig, appTwConfig ) : VvConfig

}
