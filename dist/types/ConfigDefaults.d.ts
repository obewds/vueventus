import { DefaultPaletteColors } from '../types/DefaultPaletteColors';
import { ValidationInputPaletteColors } from '../types/ValidationInputPaletteColors';
import ValidButtonTypes from '../validators/ValidButtonTypes';
import ValidElementTags from '../validators/ValidElementTags';
import ValidInputTypes from '../validators/ValidInputTypes';
export interface ConfigDefaults {
    VvAnchor: {
        button: boolean;
        buttonBlock: boolean;
        buttonFab: boolean;
        buttonSize: string;
        color: DefaultPaletteColors | string;
        external: boolean;
        href: string;
        palette: string;
    };
    VvButton: {
        block: boolean;
        color: DefaultPaletteColors | string;
        fab: boolean;
        palette: string;
        size: string;
        type: ValidButtonTypes;
    };
    VvColorModeButton: {
        color: DefaultPaletteColors | string;
        mode: string;
        palette: string;
        size: string;
    };
    VvEl: {
        borderPalette: string;
        borderColor: DefaultPaletteColors | string;
        groundPalette: string;
        groundColor: DefaultPaletteColors | string;
        tag: ValidElementTags;
        textPalette: string;
        textColor: DefaultPaletteColors | string;
    };
    VvInput: {
        color: ValidationInputPaletteColors | string;
        palette: string;
        size: string;
        type: ValidInputTypes;
    };
    [key: string]: any;
}
