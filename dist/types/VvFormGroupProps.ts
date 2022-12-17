// ./src/types/VvFormGroupProps.ts

import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'
import type { DefaultPalettes } from '../types/DefaultPalettes'

export interface VvFormGroupProps {
    displayError: boolean
    displayHelp: boolean
    displaySuccess: boolean
    errorClasses: string
    errorText: string
    errorTextColor: keyof DefaultPaletteColors | string
    errorTextPalette: keyof DefaultPalettes | string
    helpClasses: string
    helpText: string
    helpTextColor: keyof DefaultPaletteColors | string
    helpTextPalette: keyof DefaultPalettes | string
    label: string
    labelFor: string
    labelClasses: string
    labelTextColor: keyof DefaultPaletteColors | string
    labelTextPalette: keyof DefaultPalettes | string
    slotParentClasses: string
    successClasses: string
    successText: string
    successTextColor: keyof DefaultPaletteColors | string
    successTextPalette: keyof DefaultPalettes | string
    wrapperClasses: string
}
