// ./src/types/VvColorModeButtonProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import type { SizesButtons } from './SizesButtons'
import ValidButtonTypes from '../validators/ValidButtonTypes'
import ValidColorModes from '../validators/ValidColorModes'

export interface VvColorModeButtonProps {
    color: keyof DefaultPaletteColors | string
    debug: boolean
    mode: ValidColorModes
    palette: keyof DefaultPalettes | string
    size: keyof SizesButtons | string
    type: ValidButtonTypes
}
