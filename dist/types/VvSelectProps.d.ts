import type { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors';
import type { DefaultValidationPalette } from '../types/DefaultValidationPalette';
export interface VvSelectProps {
    color: DefaultValidationPaletteColors | string;
    palette: DefaultValidationPalette | string;
    size: string;
}
