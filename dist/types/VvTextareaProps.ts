// ./src/types/VvTextareaProps.ts

import type { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors'
import type { DefaultValidationPalette } from '../types/DefaultValidationPalette'

export interface VvTextareaProps {
    color: DefaultValidationPaletteColors | string
    palette: DefaultValidationPalette | string
    size: string
    rowSize: string
}
