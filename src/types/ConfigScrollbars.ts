// ./src/types/ConfigScrollbars.ts

import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'

export interface ConfigScrollbars {
    palettes: {
        default: DefaultPaletteColors
        [key: string]: DefaultPaletteColors
    },
    [key: string]: any
}
