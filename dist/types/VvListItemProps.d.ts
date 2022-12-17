import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
export interface VvListItemProps {
    palette: keyof DefaultPalettes | string;
    color: keyof DefaultPaletteColors | string;
    enableColoredSymbols: boolean;
    symbolPalette: keyof DefaultPalettes | string;
    symbolColor: keyof DefaultPaletteColors | string;
}
