// ./src/types/VvCheckboxProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesInputs } from './SizesInputs'

export interface VvCheckboxProps {
    color: keyof DefaultPaletteColors | string
    checked: boolean
    darkCheckHex: string
    lightCheckHex: string
    palette: keyof DefaultPalettes | string
    size: keyof SizesInputs | string
}
