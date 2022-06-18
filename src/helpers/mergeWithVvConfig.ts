// ./src/helpers/mergeWithVvConfig.js

import merge from 'deepmerge'
import VvConfig from '../configs/VvConfig'

export default function(appTwConfig: typeof VvConfig ) {

    return Object.keys( appTwConfig ).length > 0 ? merge( VvConfig, appTwConfig ) : VvConfig

}
