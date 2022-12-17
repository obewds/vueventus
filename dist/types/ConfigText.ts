// ./src/types/ConfigText.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'
import type { EmptyPalette } from './EmptyPalette'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { SizesText } from './SizesText'

export interface ConfigText {
    align: string
    decoration: string
    family: string
    lineHeight: string
    smoothing: string
    spacing: string
    weight: string
    wordBreak: string
    base: BaseFunction
    sizes: SizesText
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    palettes: {
        default: DefaultPaletteColors
        [key: string]: EmptyPalette | DefaultPaletteColors
    },
    [key: string]: any
}
