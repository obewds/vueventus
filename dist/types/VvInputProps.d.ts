import ValidInputTypes from '../validators/ValidInputTypes';
import type { DefaultValidationPaletteColors } from './DefaultValidationPaletteColors';
import type { DefaultValidationPalettes } from './DefaultValidationPalettes';
import type { SizesInputs } from './SizesInputs';
export interface VvInputProps {
    color: keyof DefaultValidationPaletteColors | string;
    debug: boolean;
    palette: keyof DefaultValidationPalettes | string;
    size: keyof SizesInputs | string;
    type: ValidInputTypes;
}
