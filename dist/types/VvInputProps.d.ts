import { DefaultValidationPaletteColors } from '../types/DefaultValidationPaletteColors';
import { DefaultValidationPalette } from '../types/DefaultValidationPalette';
import ValidInputTypes from '../validators/ValidInputTypes';
export interface VvInputProps {
    color: DefaultValidationPaletteColors | string;
    palette: DefaultValidationPalette | string;
    size: string;
    type: ValidInputTypes;
}
