// ./src/types/ConfigButtons.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultPaletteColors } from '../types/DefaultPaletteColors'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { SizesButtons } from './SizesButtons'

export interface ConfigButtons {
    border: string
    cursor: string
    disabled: string
    display: string
    focus: string
    rounding: string
    shadow: string
    text: string
    transition: string
    base: BaseFunction
    sizes: SizesButtons
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    blockDisplay: string
    blockBase: BaseFunction
    blockSizes: SizesButtons
    getBlockSizeClasses: ReturnsClassesFunction
    blockClasses: ReturnsClassesFunction
    fabDisplay: string
    fabBase: BaseFunction
    fabSizes: SizesButtons
    getFabSizeClasses: ReturnsClassesFunction
    fabClasses: ReturnsClassesFunction
    palettes: {
        solid: DefaultPaletteColors
        outline: DefaultPaletteColors
        [key: string]: DefaultPaletteColors
    }
    [key: string]: any
}
