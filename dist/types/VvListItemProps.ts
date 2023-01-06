// ./src/types/VvListItemProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvListItemProps {
    color: keyof DefaultPaletteColors | string
    debug: boolean
    enableColoredSymbols: boolean
    palette: keyof DefaultPalettes | string
    symbolColor: keyof DefaultPaletteColors | string
    symbolPalette: keyof DefaultPalettes | string
}
