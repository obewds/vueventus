// ./src/types/VvColorModeButtonProps.ts

import { DefaultPaletteColors } from './DefaultPaletteColors'
import { DefaultPalettes } from './DefaultPalettes'

export interface VvColorModeButtonProps {
    color: DefaultPaletteColors | string
    mode: string
    palette: DefaultPalettes | string
    size: string
}
