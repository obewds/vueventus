// ./src/types/VvListboxProps.ts

import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { DefaultValidationPalettes } from './DefaultValidationPalettes'
import type { SizesSelects } from './SizesSelects'
import type { VvListboxData } from './VvListboxData'

export interface VvListboxProps {
    data: VvListboxData[]
    debug: boolean
    displayClasses: string
    displayDisabledClasses: string
    iconDisabledClasses: string
    iconSelectedClasses: string
    iconsSizeClasses: string
    label: string
    labelClasses: string
    listboxButtonClasses: string
    listboxButtonColor: keyof DefaultValidationPaletteColors | string
    listboxButtonPalette: keyof DefaultValidationPalettes | string
    listboxOptionClasses: string
    listboxOptionColor: keyof DefaultValidationPaletteColors | string
    listboxOptionPalette: keyof DefaultValidationPalettes | string
    listboxOptionsClasses: string
    listboxOptionsWithLabelSpacing: string
    listboxOptionsWithoutLabelSpacing: string
    optionIconParentClasses: string
    selectedDisplayClasses: string
    selectedIndex: number
    size: keyof SizesSelects | string
}
