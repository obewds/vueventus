// ./src/types/EmptyPalette.ts

// TODO: Depreciate this interface???

import type { DefaultColors } from './DefaultColors'

export interface EmptyPalette {
    // [key: string]: string | undefined
    [key: string]: DefaultColors | undefined
}
