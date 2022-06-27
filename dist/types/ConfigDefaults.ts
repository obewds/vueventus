// ./src/types/ConfigDefaults.ts

import { VvAnchorProps } from '../types/VvAnchorProps'
import { VvButtonProps } from '../types/VvButtonProps'
import { VvColorModeButtonProps } from '../types/VvColorModeButtonProps'
import { VvElProps } from '../types/VvElProps'
import { VvInputProps } from '../types/VvInputProps'
import { VvListItemProps } from '../types/VvListItemProps'
import { VvTextareaProps } from '../types/VvTextareaProps'


export interface ConfigDefaults {
    VvAnchor: VvAnchorProps
    VvButton: VvButtonProps
    VvColorModeButton: VvColorModeButtonProps
    VvEl: VvElProps
    VvInput: VvInputProps
    VvListItem: VvListItemProps
    VvTextarea: VvTextareaProps
    [key: string]: any
}
