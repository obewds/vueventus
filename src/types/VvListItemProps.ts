// ./src/types/VvListItemProps.ts

import { DefaultPaletteColors } from './DefaultPaletteColors'
import { DefaultPalettes } from './DefaultPalettes'

export interface VvListItemProps {
    palette: DefaultPalettes | string
    color: DefaultPaletteColors | string
    enableColoredSymbols: boolean
    symbolPalette: DefaultPalettes | string
    symbolColor: DefaultPaletteColors | string
}
