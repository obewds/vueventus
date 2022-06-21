import { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import { EmptyPalette } from './EmptyPalette';
export interface ConfigBorders {
    palettes: {
        default?: DefaultConfigPalette;
        [key: string]: EmptyPalette | undefined;
    };
    [key: string]: any;
}
