// ./src/types/ConfigVv.ts

import type { ConfigAnchors } from './ConfigAnchors'
import type { ConfigBorders } from './ConfigBorders'
import type { ConfigButtons } from './ConfigButtons'
import type { ConfigColorMode } from './ConfigColorMode'
import type { ConfigGrounds } from './ConfigGrounds'
import type { ConfigInputs } from './ConfigInputs'
import type { ConfigText } from './ConfigText'
import type { ConfigTextareas } from './ConfigTextareas'
import type { ConfigTransitions } from './ConfigTransitions'

export interface ConfigVv {
    anchors: ConfigAnchors
    borders: ConfigBorders
    buttons: ConfigButtons
    inputs: ConfigInputs
    colorMode: ConfigColorMode
    grounds: ConfigGrounds
    text: ConfigText
    textareas: ConfigTextareas
    transitions: ConfigTransitions
    [key: string | number ]: any
}
