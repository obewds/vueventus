import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
export interface VvRadioProps {
    color: DefaultPaletteColors | string;
    checked: boolean;
    darkRadioHex: string;
    lightRadioHex: string;
    palette: DefaultPalettes | string;
    size: string;
}
