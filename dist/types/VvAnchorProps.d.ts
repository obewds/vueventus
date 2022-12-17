import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import type { SizesButtons } from './SizesButtons';
import type { SizesText } from './SizesText';
export interface VvAnchorProps {
    button: boolean;
    buttonBlock: boolean;
    buttonFab: boolean;
    buttonSize: keyof SizesButtons | string;
    color: keyof DefaultPaletteColors | string;
    external: boolean;
    href: string;
    palette: keyof DefaultPalettes | string;
    textSize: keyof SizesText | string;
}
