import { BaseFunction } from './BaseFunction';
import { EmptyPalette } from './EmptyPalette';
import { InputsSizes } from './InputsSizes';
import { ReturnsClassesFunction } from './ReturnsClassesFunction';
import { ValidationInputPaletteColors } from '../types/ValidationInputPaletteColors';
export interface ConfigInputs {
    border: string | undefined;
    display: string | undefined;
    outline: string | undefined;
    placeholder: string | undefined;
    ring: string | undefined;
    text: string | undefined;
    transition: string | undefined;
    base: BaseFunction;
    sizes: InputsSizes;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        validation: ValidationInputPaletteColors;
        [key: string]: EmptyPalette | undefined;
    };
    [key: string]: any;
}
