// ./src/types/ConfigButtons.ts

import { BaseFunction } from './BaseFunction'
import { DefaultConfigPalette } from '../types/DefaultConfigPalette'
import { EmptyPalette } from './EmptyPalette'
import { ReturnsClassesFunction } from './ReturnsClassesFunction'
import { ButtonsSizes } from './ButtonsSizes'

export interface ConfigButtons {
    border: string | undefined
    cursor: string | undefined
    disabled: string | undefined
    display: string | undefined
    focus: string | undefined
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
        solid?: DefaultConfigPalette
        outline?: DefaultConfigPalette
        [key: string]: EmptyPalette | undefined
    }
    [key: string]: any
}
