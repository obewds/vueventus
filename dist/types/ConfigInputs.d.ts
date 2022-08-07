import type { BaseFunction } from './BaseFunction';
import type { DefaultValidationPalette } from './DefaultValidationPalette';
import type { EmptyPalette } from './EmptyPalette';
import type { InputsSizes } from './InputsSizes';
import type { ReturnsClassesFunction } from './ReturnsClassesFunction';
export interface ConfigInputs {
    border: string | undefined;
    display: string | undefined;
    outline: string | undefined;
    placeholder: string | undefined;
    ring: string | undefined;
    rounding: string | undefined;
    shadow: string | undefined;
    text: string | undefined;
    transition: string | undefined;
    base: BaseFunction;
    sizes: InputsSizes;
    getSizeClasses: ReturnsClassesFunction;
    classes: ReturnsClassesFunction;
    palettes: {
        default: DefaultValidationPalette;
        underlined: DefaultValidationPalette;
        [key: string]: EmptyPalette | DefaultValidationPalette;
    };
    [key: string]: any;
}
