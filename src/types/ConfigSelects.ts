// ./src/types/ConfigSelects.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { SizesSelects } from './SizesSelects'

export interface ConfigSelects {
    border: string
    display: string
    outline: string
    ring: string
    rounding: string
    shadow: string
    text: string
    transition: string
    base: BaseFunction
    sizes: SizesSelects
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultValidationPaletteColors
        underlined: DefaultValidationPaletteColors
        [key: string]: DefaultValidationPaletteColors
    }
    [key: string]: any
}
