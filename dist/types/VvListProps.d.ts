import ValidListTypes from '../validators/ValidListTypes';
import type { DefaultPaletteColors } from './DefaultPaletteColors';
import type { DefaultPalettes } from './DefaultPalettes';
export interface VvListProps {
    listStyleTypeClass: string;
    markerPalette: DefaultPalettes | string;
    markerColor: DefaultPaletteColors | string;
    tag: ValidListTypes;
}
