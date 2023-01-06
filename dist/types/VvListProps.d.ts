import ValidListTypes from '../validators/ValidListTypes';
import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
import type { SizesText } from './SizesText';
export interface VvListProps {
    debug: boolean;
    listStyleTypeClass: string;
    markerPalette: keyof DefaultPalettes | string;
    markerColor: keyof DefaultPaletteColors | string;
    size: keyof SizesText | string;
    tag: ValidListTypes;
}
