// ./src/types/VvInputProps.ts

import type { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors'
import type { DefaultValidationPalette } from '../types/DefaultValidationPalette'
import ValidInputTypes from '../validators/ValidInputTypes' // TODO should this be a type import?

export interface VvInputProps {
    color: DefaultValidationPaletteColors | string
    palette: DefaultValidationPalette | string
    size: string
    type: ValidInputTypes
}
