import type { DefaultPaletteColors } from './DefaultPaletteColors';
export interface DefaultButtonPalettes {
    solid?: DefaultPaletteColors;
    outline?: DefaultPaletteColors;
    [key: string]: DefaultPaletteColors | undefined;
}
