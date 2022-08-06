// ./src/types/ConfigColorMode.ts

import { BaseFunction } from './BaseFunction'
import { ColorMode } from './ColorMode'
import { ReturnsClassesFunction } from './ReturnsClassesFunction'

export interface ConfigColorMode {
    dark: ColorMode
    light: ColorMode
    base: BaseFunction
    transition: string | undefined
    classes: ReturnsClassesFunction
    [key: string]: any
}
