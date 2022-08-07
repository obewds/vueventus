import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import ValidElementTags from '../validators/ValidElementTags';
export interface VvElProps {
    borderPalette: DefaultPalettes | string;
    borderColor: DefaultPaletteColors | string;
    groundPalette: DefaultPalettes | string;
    groundColor: DefaultPaletteColors | string;
    tag: ValidElementTags;
    textPalette: DefaultPalettes | string;
    textColor: DefaultPaletteColors | string;
}
