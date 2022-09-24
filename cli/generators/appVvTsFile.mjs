// ./cli/generators/appVvTsFile.mjs

import { VvConfig } from '@obewds/vueventus'

export default function () {

const output = `// ./src/app.vv.ts

import { VvConfig } from '@obewds/vueventus'
import type { ConfigVv } from '@obewds/vueventus'

let appVv: ConfigVv = VvConfig

// appVv.defaults['VvInput'].size = '${VvConfig.defaults["VvInput"].size}'

// Empty string value removes TWCSS underline classes from VueVentus anchor component default classes
// appVv.anchors.text = ''

// appVv.anchors.palettes.default = {
//     default: '${VvConfig.anchors.palettes.default.default}',
//     error: '${VvConfig.anchors.palettes.default.error}',
//     primary: '${VvConfig.anchors.palettes.default.primary}',
//     secondary: '${VvConfig.anchors.palettes.default.secondary}',
//     success: '${VvConfig.anchors.palettes.default.success}',
// }

// appVv.borders.palettes.default = {
//     '': '',
//     default: '${VvConfig.borders.palettes.default.default}',
//     error: '${VvConfig.borders.palettes.default.error}',
//     primary: '${VvConfig.borders.palettes.default.primary}',
//     secondary: '${VvConfig.borders.palettes.default.secondary}',
//     success: '${VvConfig.borders.palettes.default.success}',
// }

// appVv.buttons.border = ''
// appVv.buttons.transition += ' ' + appVv.hover.scale

// appVv.buttons.palettes.outline = {
//     default: '${VvConfig.buttons.palettes.outline.default}',
//     error: '${VvConfig.buttons.palettes.outline.error}',
//     primary: '${VvConfig.buttons.palettes.outline.primary}',
//     secondary: '${VvConfig.buttons.palettes.outline.secondary}',
//     success: '${VvConfig.buttons.palettes.outline.success}',
// }

// appVv.buttons.palettes.solid = {
//     default: '${VvConfig.buttons.palettes.solid.default}',
//     error: '${VvConfig.buttons.palettes.solid.error}',
//     primary: '${VvConfig.buttons.palettes.solid.primary}',
//     secondary: '${VvConfig.buttons.palettes.solid.secondary}',
//     success: '${VvConfig.buttons.palettes.solid.success}',
// }

// appVv.buttons.palettes.default = appVv.buttons.palettes.solid

// appVv.checkboxes.palettes.default = {
//     default: '${VvConfig.checkboxes.palettes.default.default}',
//     error: '${VvConfig.checkboxes.palettes.default.error}',
//     primary: '${VvConfig.checkboxes.palettes.default.primary}',
//     secondary: '${VvConfig.checkboxes.palettes.default.secondary}',
//     success: '${VvConfig.checkboxes.palettes.default.success}',
// }

// appVv.colorModes.dark.ground = 'dark:bg-gray-900'
// appVv.colorModes.dark.hex = '#242426'
// appVv.colorModes.dark.text = 'dark:text-gray-100'

// appVv.colorModes.light.ground = 'bg-gray-100'
// appVv.colorModes.light.hex = '#e1e1e3'
// appVv.colorModes.light.text = 'text-gray-900'

// appVv.grounds.palettes.console = {
//     default: '${VvConfig.grounds.palettes.console.default}',
//     error: '${VvConfig.grounds.palettes.console.error}',
//     primary: '${VvConfig.grounds.palettes.console.primary}',
//     secondary: '${VvConfig.grounds.palettes.console.secondary}',
//     success: '${VvConfig.grounds.palettes.console.success}',
// }

// appVv.grounds.palettes.default = {
//     default: '${VvConfig.grounds.palettes.default.default}',
//     error: '${VvConfig.grounds.palettes.default.error}',
//     primary: '${VvConfig.grounds.palettes.default.primary}',
//     secondary: '${VvConfig.grounds.palettes.default.secondary}',
//     success: '${VvConfig.grounds.palettes.default.success}',
// }

// appVv.grounds.palettes.monochromatic = {
//     default: '${VvConfig.grounds.palettes.monochromatic.default}',
//     error: '${VvConfig.grounds.palettes.monochromatic.error}',
//     primary: '${VvConfig.grounds.palettes.monochromatic.primary}',
//     secondary: '${VvConfig.grounds.palettes.monochromatic.secondary}',
//     success: '${VvConfig.grounds.palettes.monochromatic.success}',
// }

// appVv.grounds.palettes.pastel = {
//     default: '${VvConfig.grounds.palettes.pastel.default}',
//     error: '${VvConfig.grounds.palettes.pastel.error}',
//     primary: '${VvConfig.grounds.palettes.pastel.primary}',
//     secondary: '${VvConfig.grounds.palettes.pastel.secondary}',
//     success: '${VvConfig.grounds.palettes.pastel.success}',
// }

// appVv.hover = {
//     scale: 'hover:scale-103 focus:scale-103',
// }

// appVv.inputs.palettes.default = {
//     default: '${VvConfig.inputs.palettes.default.default}',
//     error: '${VvConfig.inputs.palettes.default.error}',
//     success: '${VvConfig.inputs.palettes.default.success}',
// }

// appVv.inputs.palettes.underlined = {
//     default: '${VvConfig.inputs.palettes.underlined.default}',
//     error: '${VvConfig.inputs.palettes.underlined.error}',
//     success: '${VvConfig.inputs.palettes.underlined.success}',
// }

// appVv.radios.palettes.default = {
//     default: '${VvConfig.radios.palettes.default.default}',
//     error: '${VvConfig.radios.palettes.default.error}',
//     primary: '${VvConfig.radios.palettes.default.primary}',
//     secondary: '${VvConfig.radios.palettes.default.secondary}',
//     success: '${VvConfig.radios.palettes.default.success}',
// }

// appVv.scrollbars = 'scrollbar scrollbar-thumb-trueGray-100 scrollbar-track-trueGray-200 dark:scrollbar-thumb-trueGray-600 dark:scrollbar-track-trueGray-800'

// appVv.textareas.palettes.default = appVv.inputs.palettes.default
// appVv.textareas.palettes.underlined = appVv.inputs.palettes.underlined

// appVv.text.palettes.default = {
//     default: '${VvConfig.text.palettes.default.default}',
//     error: '${VvConfig.text.palettes.default.error}',
//     primary: '${VvConfig.text.palettes.default.primary}',
//     secondary: '${VvConfig.text.palettes.default.secondary}',
//     success: '${VvConfig.text.palettes.default.success}',
//     neutral: '${VvConfig.text.palettes.default.neutral}',
// }

// appVv.classes = {}

// appVv.strings = {}

// appVv.navs = {
//     main: {},
//     footer: {},
// }

export default appVv

`

return output
    
}
