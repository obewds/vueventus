import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { DefaultValidationPalettes } from './DefaultValidationPalettes';
import type { SizesTextareas } from './SizesTextareas';
import type { SizesTextareasRows } from './SizesTextareasRows';
export interface VvTextareaProps {
    color: keyof DefaultValidationPaletteColors | string;
    palette: keyof DefaultValidationPalettes | string;
    size: keyof SizesTextareas | string;
    rowSize: keyof SizesTextareasRows | string;
}
