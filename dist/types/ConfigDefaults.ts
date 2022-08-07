// ./src/types/ConfigDefaults.ts

import type { VvAnchorProps } from '../types/VvAnchorProps'
import type { VvButtonProps } from '../types/VvButtonProps'
import type { VvColorModeButtonProps } from '../types/VvColorModeButtonProps'
import type { VvElProps } from '../types/VvElProps'
import type { VvInputProps } from '../types/VvInputProps'
import type { VvListItemProps } from '../types/VvListItemProps'
import type { VvTextareaProps } from '../types/VvTextareaProps'


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
