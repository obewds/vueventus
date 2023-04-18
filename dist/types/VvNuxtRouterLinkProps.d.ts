import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import type { SizesButtons } from './SizesButtons';
import type { SizesText } from './SizesText';
export interface VvNuxtRouterLinkProps {
    button: boolean;
    buttonBlock: boolean;
    buttonFab: boolean;
    buttonSize: keyof SizesButtons | string;
    color: keyof DefaultPaletteColors | string;
    debug: boolean;
    external: boolean;
    to: string;
    palette: keyof DefaultPalettes | string;
    textSize: keyof SizesText | string;
}
