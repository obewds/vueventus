import type { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import type { EmptyPalette } from './EmptyPalette';
export interface ConfigBorders {
    palettes: {
        default: DefaultConfigPalette;
        [key: string]: EmptyPalette | DefaultConfigPalette;
    };
    [key: string]: any;
}
