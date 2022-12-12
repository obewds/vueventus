import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import ValidButtonTypes from '../validators/ValidButtonTypes';
export interface VvColorModeButtonProps {
    color: DefaultPaletteColors | string;
    mode: string;
    palette: DefaultPalettes | string;
    size: string;
    type: ValidButtonTypes;
}
