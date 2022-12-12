// ./src/types/ConfigTextareas.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultValidationPalette } from './DefaultValidationPalette'
import type { EmptyPalette } from './EmptyPalette'
import type { TextareasSizes } from './TextareasSizes'
import type { TextareasRowSizes } from './TextareasRowSizes'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { ReturnsNumberFunction } from './ReturnsNumberFunction'

export interface ConfigTextareas {
    border: string
    display: string
    outline: string
    placeholder: string
    ring: string
    rounding: string
    shadow: string
    text: string
    transition: string
    base: BaseFunction
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultValidationPalette
        underlined: DefaultValidationPalette
        [key: string]: EmptyPalette | DefaultValidationPalette
    }
    sizes: TextareasSizes
    rowSizes: TextareasRowSizes
    getRowSize: ReturnsNumberFunction
    [key: string]: any
}
