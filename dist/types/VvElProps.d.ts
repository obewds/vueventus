import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import type { SizesText } from './SizesText';
import ValidElementTags from '../validators/ValidElementTags';
export interface VvElProps {
    borderPalette: keyof DefaultPalettes | string;
    borderColor: keyof DefaultPaletteColors | string;
    groundPalette: keyof DefaultPalettes | string;
    groundColor: keyof DefaultPaletteColors | string;
    size: keyof SizesText | string;
    tag: ValidElementTags;
    textPalette: keyof DefaultPalettes | string;
    textColor: keyof DefaultPaletteColors | string;
}
