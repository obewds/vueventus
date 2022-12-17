import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { EmptyPalette } from './EmptyPalette';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
import type { ReturnsNumberFunction } from './ReturnsNumberFunction';
import type { SizesTextareas } from './SizesTextareas';
import type { SizesTextareasRows } from './SizesTextareasRows';
export interface ConfigTextareas {
    border: string;
    display: string;
    outline: string;
    placeholder: string;
    ring: string;
    rounding: string;
    shadow: string;
    text: string;
    transition: string;
    base: BaseFunction;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultValidationPaletteColors;
        underlined: DefaultValidationPaletteColors;
        [key: string]: EmptyPalette | DefaultValidationPaletteColors;
    };
    sizes: SizesTextareas;
    rowSizes: SizesTextareasRows;
    getRowSize: ReturnsNumberFunction;
    [key: string]: any;
}
