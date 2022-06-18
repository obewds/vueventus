// ./src/types/ConfigInputs.ts

import { BaseFunction } from './BaseFunction'
import { ReturnsClassesFunction } from './ReturnsClassesFunction'
import { InputsSizes } from './InputsSizes'
import { ValidationInputPaletteColors } from '../types/ValidationInputPaletteColors'

export interface ConfigInputs {
    border: string | undefined
    display: string | undefined
    outline: string | undefined
    placeholder: string | undefined
    ring: string | undefined
    text: string | undefined
    transition: string | undefined
    base: BaseFunction
    sizes: InputsSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        validation: ValidationInputPaletteColors,
    },
    [key: string]: any
}
