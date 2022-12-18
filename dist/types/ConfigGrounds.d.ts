import type { DefaultPaletteColors } from '../types/DefaultPaletteColors';
export interface ConfigGrounds {
    palettes: {
        console: DefaultPaletteColors;
        default: DefaultPaletteColors;
        monochromatic: DefaultPaletteColors;
        pastel: DefaultPaletteColors;
        [key: string]: DefaultPaletteColors;
    };
    [key: string]: any;
}
