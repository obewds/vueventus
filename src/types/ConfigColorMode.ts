// ./src/types/ConfigColorMode.ts

import type { BaseFunction } from './BaseFunction'
import type { ColorMode } from './ColorMode'
import type { ReturnsClassesFunction } from './ReturnsClassesFunction'

export interface ConfigColorMode {
    dark: ColorMode
    light: ColorMode
    base: BaseFunction
    transition: string | undefined
    classes: ReturnsClassesFunction
    [key: string]: any
}
