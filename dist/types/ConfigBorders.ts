// ./src/types/ConfigBorders.ts

import { DefaultConfigPalette } from '../types/DefaultConfigPalette'
import { EmptyPalette } from './EmptyPalette'

export interface ConfigBorders {
    palettes: {
        default: DefaultConfigPalette
        [key: string]: EmptyPalette | DefaultConfigPalette
    }
    [key: string]: any
}
