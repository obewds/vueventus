import { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors';
import { DefaultValidationPalette } from '../types/DefaultValidationPalette';
export interface VvTextareaProps {
    color: DefaultValidationPaletteColors | string;
    palette: DefaultValidationPalette | string;
    size: string;
    rowSize: string;
}
