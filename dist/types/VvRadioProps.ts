// ./src/types/VvRadioProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesInputs } from './SizesInputs'

export interface VvRadioProps {
    checked: boolean
    color: keyof DefaultPaletteColors | string
    darkRadioHex: string
    debug: boolean
    lightRadioHex: string
    palette: keyof DefaultPalettes | string
    size: keyof SizesInputs | string
}
