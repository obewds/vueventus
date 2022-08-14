// ./src/types/VvRadioProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvRadioProps {
    color: DefaultPaletteColors | string
    palette: DefaultPalettes | string
    size: string
}
