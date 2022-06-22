// ./src/types/ConfigVv.ts

import { ConfigAnchors } from './ConfigAnchors'
import { ConfigBorders } from './ConfigBorders'
import { ConfigButtons } from './ConfigButtons'
import { ConfigColorMode } from './ConfigColorMode'
import { ConfigGrounds } from './ConfigGrounds'
import { ConfigInputs } from './ConfigInputs'
import { ConfigText } from './ConfigText'
import { ConfigTextareas } from './ConfigTextareas'
import { ConfigTransitions } from './ConfigTransitions'

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
