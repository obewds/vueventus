import type { DefaultPaletteColors } from '../types/DefaultPaletteColors';
import type { EmptyPalette } from './EmptyPalette';
export interface ConfigGrounds {
    palettes: {
        console: DefaultPaletteColors;
        default: DefaultPaletteColors;
        monochromatic: DefaultPaletteColors;
        pastel: DefaultPaletteColors;
        [key: string]: EmptyPalette | DefaultPaletteColors;
    };
    [key: string]: any;
}
