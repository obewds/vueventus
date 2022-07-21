// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// removes TWCSS underline classes from VueVentus anchor component default classes
// appVv.anchors.text = ''

export default appVv
