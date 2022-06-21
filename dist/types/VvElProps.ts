// ./src/types/VvElProps.ts

import { DefaultPaletteColors } from './DefaultPaletteColors'
import { DefaultPalettes } from './DefaultPalettes'
import ValidElementTags from '../validators/ValidElementTags'

export interface VvElProps {
    borderPalette: DefaultPalettes | string
    borderColor: DefaultPaletteColors | string
    groundPalette: DefaultPalettes | string
    groundColor: DefaultPaletteColors | string
    tag: ValidElementTags
    textPalette: DefaultPalettes | string
    textColor: DefaultPaletteColors | string
}
