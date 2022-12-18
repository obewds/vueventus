// ./src/types/EmptyPalette.ts

// BUG: This interface is DEPRECIATED
// TODO: Remove this interface from the package

import type { DefaultColors } from './DefaultColors'

export interface EmptyPalette {
    // [key: string]: string | undefined
    [key: string]: DefaultColors | undefined
}
