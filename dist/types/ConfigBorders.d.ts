import { DefaultConfigPalette } from '../types/DefaultConfigPalette';
export interface ConfigBorders {
    palettes: {
        default?: DefaultConfigPalette;
        [key: string]: any;
    };
    [key: string]: any;
}
