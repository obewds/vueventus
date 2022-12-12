// ./src/types/ConfigSelects.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPalette } from './DefaultValidationPalette'
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
        default: DefaultValidationPalette
        underlined: DefaultValidationPalette
        [key: string]: EmptyPalette | DefaultValidationPalette
    }
    [key: string]: any
}
