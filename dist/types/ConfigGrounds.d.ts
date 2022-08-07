import type { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import type { EmptyPalette } from './EmptyPalette';
export interface ConfigGrounds {
    palettes: {
        console: DefaultConfigPalette;
        default: DefaultConfigPalette;
        monochromatic: DefaultConfigPalette;
        pastel: DefaultConfigPalette;
        [key: string]: EmptyPalette | DefaultConfigPalette;
    };
    [key: string]: any;
}
