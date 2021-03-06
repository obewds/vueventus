// ./src/types/ConfigInputs.ts

import { BaseFunction } from './BaseFunction'
import { DefaultValidationPalette } from './DefaultValidationPalette'
import { EmptyPalette } from './EmptyPalette'
import { InputsSizes } from './InputsSizes'
import { ReturnsClassesFunction } from './ReturnsClassesFunction'

export interface ConfigInputs {
    border: string | undefined
    display: string | undefined
    outline: string | undefined
    placeholder: string | undefined
    ring: string | undefined
    rounding: string | undefined
    shadow: string | undefined
    text: string | undefined
    transition: string | undefined
    base: BaseFunction
    sizes: InputsSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultValidationPalette
        underlined: DefaultValidationPalette
        [key: string]: EmptyPalette | DefaultValidationPalette
    }
    [key: string]: any
}
