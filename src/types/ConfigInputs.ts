// ./src/types/ConfigInputs.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPalette } from './DefaultValidationPalette'
import type { EmptyPalette } from './EmptyPalette'
import type { InputsSizes } from './InputsSizes'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'

export interface ConfigInputs {
    border: string
    display: string
    outline: string
    placeholder: string
    ring: string
    rounding: string
    shadow: string
    text: string
    transition: string
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
