import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import type { SizesButtons } from './SizesButtons';
import ValidButtonTypes from '../validators/ValidButtonTypes';
export interface VvButtonProps {
    block: boolean;
    color: keyof DefaultPaletteColors | string;
    debug: boolean;
    fab: boolean;
    palette: keyof DefaultPalettes | string;
    size: keyof SizesButtons | string;
    type: ValidButtonTypes;
}
