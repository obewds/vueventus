// ./src/types/ConfigDefaults.ts

import { VvAnchorProps } from '../types/VvAnchorProps'
import { VvButtonProps } from '../types/VvButtonProps'
import { VvColorModeButtonProps } from '../types/VvColorModeButtonProps'
import { VvElProps } from '../types/VvElProps'
import { VvInputProps } from '../types/VvInputProps'


export interface ConfigDefaults {
    VvAnchor: VvAnchorProps
    VvButton: VvButtonProps
    VvColorModeButton: VvColorModeButtonProps
    VvEl: VvElProps
    VvInput: VvInputProps
    [key: string]: any
}
