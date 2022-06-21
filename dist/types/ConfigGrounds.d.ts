import { DefaultConfigPalette } from '../types/DefaultConfigPalette';
import { EmptyPalette } from './EmptyPalette';
export interface ConfigGrounds {
    palettes: {
        console?: DefaultConfigPalette;
        default?: DefaultConfigPalette;
        monochromatic?: DefaultConfigPalette;
        pastel?: DefaultConfigPalette;
        [key: string]: EmptyPalette | undefined;
    };
    [key: string]: any;
}
