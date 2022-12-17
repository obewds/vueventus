// ./src/types/ConfigBorders.ts

import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'
import type { EmptyPalette } from './EmptyPalette'

export interface ConfigBorders {
    palettes: {
        default: DefaultPaletteColors
        [key: string]: EmptyPalette | DefaultPaletteColors
    }
    [key: string]: any
}
