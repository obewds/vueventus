// ./src/types/VvListItemProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvListItemProps {
    palette: DefaultPalettes | string
    color: DefaultPaletteColors | string
    enableColoredSymbols: boolean
    symbolPalette: DefaultPalettes | string
    symbolColor: DefaultPaletteColors | string
}
