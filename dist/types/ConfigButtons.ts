// ./src/types/ConfigButtons.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultConfigPalette } from '../types/DefaultConfigPalette'
import type { EmptyPalette } from './EmptyPalette'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { ButtonsSizes } from './ButtonsSizes'

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
    sizes: ButtonsSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    blockDisplay: string
    blockBase: BaseFunction
    blockSizes: ButtonsSizes
    getBlockSizeClasses: ReturnsClassesFunction
    blockClasses: ReturnsClassesFunction
    fabDisplay: string
    fabBase: BaseFunction
    fabSizes: ButtonsSizes
    getFabSizeClasses: ReturnsClassesFunction
    fabClasses: ReturnsClassesFunction
    palettes: {
        solid: DefaultConfigPalette
        outline: DefaultConfigPalette
        [key: string]: EmptyPalette | DefaultConfigPalette
    }
    [key: string]: any
}
