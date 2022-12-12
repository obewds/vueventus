// ./src/types/ConfigAnchors.ts

import type { DefaultConfigPalette } from '../types/DefaultConfigPalette'
import type { BaseFunction } from './BaseFunction'
import type { EmptyPalette } from './EmptyPalette'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { TextSizes } from './TextSizes'

export interface ConfigAnchors {
    cursor: string
    display: string
    focus: string
    text: string
    transition: string
    base: BaseFunction
    sizes: TextSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultConfigPalette
        [key: string]: EmptyPalette | DefaultConfigPalette
    }
    [key: string]: any
}
