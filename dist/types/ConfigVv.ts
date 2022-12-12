// ./src/types/ConfigVv.ts

import type { ConfigAnchors } from './ConfigAnchors'
import type { ConfigBorders } from './ConfigBorders'
import type { ConfigButtons } from './ConfigButtons'
import type { ConfigCheckboxes } from './ConfigCheckboxes'
import type { ConfigColorMode } from './ConfigColorMode'
import type { ConfigGrounds } from './ConfigGrounds'
import type { ConfigInputs } from './ConfigInputs'
import type { ConfigListboxes } from './ConfigListboxes'
import type { ConfigLists } from './ConfigLists'
import type { ConfigRadios } from './ConfigRadios'
import type { ConfigSelects } from './ConfigSelects'
import type { ConfigText } from './ConfigText'
import type { ConfigTextareas } from './ConfigTextareas'
import type { ConfigTransitions } from './ConfigTransitions'

import type { ConfigDefaults } from './ConfigDefaults'

export interface ConfigVv {
    anchors: ConfigAnchors
    borders: ConfigBorders
    buttons: ConfigButtons
    checkboxes: ConfigCheckboxes
    colorModes: ConfigColorMode
    grounds: ConfigGrounds
    inputs: ConfigInputs
    listboxes: ConfigListboxes
    lists: ConfigLists
    radios: ConfigRadios
    selects: ConfigSelects
    text: ConfigText
    textareas: ConfigTextareas
    transitions: ConfigTransitions
    defaults: ConfigDefaults
    [key: string | number ]: any
}
