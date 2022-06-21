import { DefaultPaletteColors } from './DefaultPaletteColors';
import { DefaultPalettes } from './DefaultPalettes';
import ValidButtonTypes from '../validators/ValidButtonTypes';
export interface VvButtonProps {
    block: boolean;
    color: DefaultPaletteColors | string;
    fab: boolean;
    palette: DefaultPalettes | string;
    size: string;
    type: ValidButtonTypes;
}
