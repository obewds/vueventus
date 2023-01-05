// ./src/types/VvFormGroupProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesText } from './SizesText'

export interface VvFormGroupProps {
    displayError: boolean
    displayHelp: boolean
    displaySuccess: boolean
    errorClasses: string
    errorText: string
    errorTextColor: keyof DefaultPaletteColors | string
    errorTextPalette: keyof DefaultPalettes | string
    errorTextSize: keyof SizesText | string
    helpClasses: string
    helpText: string
    helpTextColor: keyof DefaultPaletteColors | string
    helpTextPalette: keyof DefaultPalettes | string
    helpTextSize: keyof SizesText | string
    label: string
    labelFor: string
    labelClasses: string
    labelTextColor: keyof DefaultPaletteColors | string
    labelTextPalette: keyof DefaultPalettes | string
    labelTextSize: keyof SizesText | string
    slotParentClasses: string
    successClasses: string
    successText: string
    successTextColor: keyof DefaultPaletteColors | string
    successTextPalette: keyof DefaultPalettes | string
    successTextSize: keyof SizesText | string
    wrapperClasses: string
}
