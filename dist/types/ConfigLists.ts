// ./src/types/ConfigLists.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { SizesText } from './SizesText'

export interface ConfigLists {
    align: string
    decoration: string
    family: string
    lineHeight: string
    padding: string
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
        [key: string]: DefaultPaletteColors
    },
    [key: string]: any
}
