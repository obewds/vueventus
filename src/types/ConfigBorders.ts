// ./src/types/ConfigBorders.ts

import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'

export interface ConfigBorders {
    palettes: {
        default: DefaultPaletteColors
        [key: string]: DefaultPaletteColors
    }
    [key: string]: any
}
