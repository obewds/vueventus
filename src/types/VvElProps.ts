// ./src/types/VvElProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'
import ValidElementTags from '../validators/ValidElementTags' // TODO should this be a type import?

export interface VvElProps {
    borderPalette: DefaultPalettes | string
    borderColor: DefaultPaletteColors | string
    groundPalette: DefaultPalettes | string
    groundColor: DefaultPaletteColors | string
    tag: ValidElementTags
    textPalette: DefaultPalettes | string
    textColor: DefaultPaletteColors | string
}
