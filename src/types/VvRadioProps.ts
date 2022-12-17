// ./src/types/VvRadioProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesInputs } from './SizesInputs'

export interface VvRadioProps {
    color: keyof DefaultPaletteColors | string
    checked: boolean
    darkRadioHex: string
    lightRadioHex: string
    palette: keyof DefaultPalettes | string
    size: keyof SizesInputs | string
}
