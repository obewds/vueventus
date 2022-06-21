// ./src/types/VvTextareaProps.ts

import { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors'
import { DefaultValidationPalette } from '../types/DefaultValidationPalette'

export interface VvTextareaProps {
    color: DefaultValidationPaletteColors | string
    palette: DefaultValidationPalette | string
    size: string
    rowSize: string
}

// #TODO: Add VvTextareaProps to docs
// #TODO: Add VvTextareaProps to index.ts
