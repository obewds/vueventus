// ./src/types/ConfigRadios.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { SizesInputs } from './SizesInputs'

export interface ConfigRadios {
    baseColors: string
    border: string
    outline: string
    ring: string
    rounding: string
    shadow: string
    transition: string
    base: BaseFunction
    sizes: SizesInputs
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultValidationPaletteColors
        [key: string]: DefaultValidationPaletteColors
    }
    [key: string]: any
}
