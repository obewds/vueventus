// ./src/types/VvInputProps.ts

import { DefaultInputPalettes } from '../types/DefaultInputPalettes'
import { ValidationInputPaletteColors } from '../types/ValidationInputPaletteColors'
import ValidInputTypes from '../validators/ValidInputTypes'

export interface VvInputProps {
    color: ValidationInputPaletteColors | string
    palette: DefaultInputPalettes | string
    size: string
    type: ValidInputTypes
}
