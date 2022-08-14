// ./src/types/ConfigRadios.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPalette } from './DefaultValidationPalette'
import type { EmptyPalette } from './EmptyPalette'
import type { InputsSizes } from './InputsSizes'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'

export interface ConfigRadios {
    border: string | undefined
    outline: string | undefined
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
        [key: string]: EmptyPalette | DefaultValidationPalette
    }
    [key: string]: any
}
