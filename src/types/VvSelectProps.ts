// ./src/types/VvSelectProps.ts

import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { DefaultValidationPalettes } from './DefaultValidationPalettes'
import type { SizesSelects } from './SizesSelects'

export interface VvSelectProps {
    color: keyof DefaultValidationPaletteColors | string
    palette: keyof DefaultValidationPalettes | string
    size: keyof SizesSelects | string
}
