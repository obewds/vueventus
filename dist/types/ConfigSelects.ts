// ./src/types/ConfigSelects.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { EmptyPalette } from './EmptyPalette'
import type { SelectsSizes } from './SelectsSizes'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'

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
    sizes: SelectsSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultValidationPaletteColors
        underlined: DefaultValidationPaletteColors
        [key: string]: EmptyPalette | DefaultValidationPaletteColors
    }
    [key: string]: any
}
