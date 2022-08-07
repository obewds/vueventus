// ./src/types/VvAnchorProps.ts

import type { DefaultPaletteColors } from './DefaultPaletteColors'
import type { DefaultPalettes } from './DefaultPalettes'

export interface VvAnchorProps {
    button: boolean
    buttonBlock: boolean
    buttonFab: boolean
    buttonSize: string
    color: DefaultPaletteColors | string
    external: boolean
    href: string
    palette: DefaultPalettes | string
}
