// ./src/types/VvCheckboxProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvCheckboxProps {
    color: DefaultPaletteColors | string
    checked: boolean
    darkCheckHex: string
    lightCheckHex: string
    palette: DefaultPalettes | string
    size: string
}
