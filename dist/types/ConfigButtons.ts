// ./src/types/ConfigButtons.ts

import type { BaseFunction } from './BaseFunction'
import type { DefaultConfigPalette } from '../types/DefaultConfigPalette'
import type { EmptyPalette } from './EmptyPalette'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'
import type { ButtonsSizes } from './ButtonsSizes'

export interface ConfigButtons {
    border: string | undefined
    cursor: string | undefined
    disabled: string | undefined
    display: string | undefined
    focus: string | undefined
    rounding: string | undefined
    shadow: string | undefined
    text: string | undefined
    transition: string | undefined
    base: BaseFunction
    sizes: ButtonsSizes
    getSizeClasses: ReturnsClassesFunction
    classes: ReturnsClassesFunction
    blockDisplay: string | undefined
    blockBase: BaseFunction
    blockSizes: ButtonsSizes
    getBlockSizeClasses: ReturnsClassesFunction
    blockClasses: ReturnsClassesFunction
    fabDisplay: string | undefined
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
