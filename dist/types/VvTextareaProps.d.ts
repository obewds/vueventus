import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { DefaultValidationPalettes } from './DefaultValidationPalettes';
import type { SizesTextareas } from './SizesTextareas';
import type { SizesTextareasRows } from './SizesTextareasRows';
export interface VvTextareaProps {
    color: keyof DefaultValidationPaletteColors | string;
    debug: boolean;
    palette: keyof DefaultValidationPalettes | string;
    rowSize: keyof SizesTextareasRows | string;
    size: keyof SizesTextareas | string;
}
