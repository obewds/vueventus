// ./src/types/ConfigGrounds.ts

import { DefaultConfigPalette } from '../types/DefaultConfigPalette'

export interface ConfigGrounds {
    palettes: {
        console?: DefaultConfigPalette,
        default?: DefaultConfigPalette,
        monochromatic?: DefaultConfigPalette,
        pastel?: DefaultConfigPalette,
        [key: string]: any
    },
    [key: string]: any
}
