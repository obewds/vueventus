// ./src/types/DefaultValidationPalettes.ts

import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface DefaultValidationPalettes extends DefaultPalettes {
    underlined?: DefaultValidationPaletteColors
}
