// ./src/types/VvCheckboxProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesInputs } from './SizesInputs'

export interface VvCheckboxProps {
    checked: boolean
    color: keyof DefaultPaletteColors | string
    darkCheckHex: string
    debug: boolean
    lightCheckHex: string
    palette: keyof DefaultPalettes | string
    size: keyof SizesInputs | string
}
