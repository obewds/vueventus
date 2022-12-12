// ./src/types/ConfigDefaults.ts

import type { VvAnchorProps } from '../types/VvAnchorProps'
import type { VvButtonProps } from '../types/VvButtonProps'
import type { VvCheckboxProps } from '../types/VvCheckboxProps'
import type { VvColorModeButtonProps } from '../types/VvColorModeButtonProps'
import type { VvElProps } from '../types/VvElProps'
import type { VvInputProps } from '../types/VvInputProps'
import type { VvListboxProps } from '../types/VvListboxProps'
import type { VvListItemProps } from '../types/VvListItemProps'
import type { VvRadioProps } from '../types/VvRadioProps'
import type { VvRouterLinkProps } from '../types/VvRouterLinkProps'
import type { VvSelectProps } from '../types/VvSelectProps'
import type { VvTextareaProps } from '../types/VvTextareaProps'


export interface ConfigDefaults {
    VvAnchor: VvAnchorProps
    VvButton: VvButtonProps
    VvCheckbox: VvCheckboxProps
    VvColorModeButton: VvColorModeButtonProps
    VvEl: VvElProps
    VvInput: VvInputProps
    VvListbox: VvListboxProps
    VvListItem: VvListItemProps
    VvRadio: VvRadioProps
    VvRouterLink: VvRouterLinkProps
    VvSelect: VvSelectProps
    VvTextarea: VvTextareaProps
    [key: string]: any
}
