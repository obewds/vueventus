// ./src/types/VvRouterLinkProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvRouterLinkProps {
    button: boolean
    buttonBlock: boolean
    buttonFab: boolean
    buttonSize: string
    color: DefaultPaletteColors | string
    external: boolean
    to: string
    palette: DefaultPalettes | string
    textSize: string
}
