import VvConfig from '../configs/VvConfig';
export default function (appTwConfig: typeof VvConfig): {
    anchors: {
        palettes: {
            default: import("../types/DefaultConfigPalette").DefaultConfigPalette;
        };
        cursor: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction").BaseFunction;
        sizes: import("../types/TextSizes").TextSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
    };
    borders: {
        palettes: {
            default: import("../types/DefaultConfigPalette").DefaultConfigPalette;
        };
    };
    buttons: {
        palettes: {
            outline: import("../types/DefaultConfigPalette").DefaultConfigPalette;
            solid: import("../types/DefaultConfigPalette").DefaultConfigPalette;
        };
        border: string | undefined;
        cursor: string | undefined;
        disabled: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction").BaseFunction;
        sizes: import("../types/ButtonsSizes").ButtonsSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        blockDisplay: string | undefined;
        blockBase: import("../types/BaseFunction").BaseFunction;
        blockSizes: import("../types/ButtonsSizes").ButtonsSizes;
        getBlockSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        blockClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        fabDisplay: string | undefined;
        fabBase: import("../types/BaseFunction").BaseFunction;
        fabSizes: import("../types/ButtonsSizes").ButtonsSizes;
        getFabSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        fabClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
    };
    inputs: {
        palettes: {
            validation: import("../types/ValidationInputPaletteColors").ValidationInputPaletteColors;
        };
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction").BaseFunction;
        sizes: import("../types/InputsSizes").InputsSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
    };
    colorMode: {
        dark: {
            bg: string;
            ground: string;
            hex: string;
            text: string;
            title: string;
        };
        light: {
            bg: string;
            ground: string;
            hex: string;
            text: string;
            title: string;
        };
    };
    grounds: {
        palettes: {
            console: import("../types/DefaultConfigPalette").DefaultConfigPalette;
            default: import("../types/DefaultConfigPalette").DefaultConfigPalette;
            monochromatic: import("../types/DefaultConfigPalette").DefaultConfigPalette;
            pastel: import("../types/DefaultConfigPalette").DefaultConfigPalette;
        };
    };
    text: {
        palettes: {
            default: import("../types/DefaultConfigPalette").DefaultConfigPalette;
        };
        align: string | undefined;
        decoration: string | undefined;
        family: string | undefined;
        lineHeight: string | undefined;
        smoothing: string | undefined;
        spacing: string | undefined;
        weight: string | undefined;
        wordBreak: string | undefined;
        base: import("../types/BaseFunction").BaseFunction;
        sizes: import("../types/TextSizes").TextSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
    };
    transitions: {
        [x: string]: any;
        durations: import("../types/TransitionsDurations").TransitionsDurations;
        easings: import("../types/TransitionsEasings").TransitionsEasings;
        transitions: import("../types/TransitionsTransitions").TransitionsTransitions;
        classes: import("../types/TransitionsClasses").TransitionsClasses;
        custom: import("../types/TransitionsCustom").TransitionsCustom;
        getDurationClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        getEasingClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
        getTransitionClasses: import("../types/ReturnsClassesFunction").ReturnsClassesFunction;
    };
    defaults: import("../types/ConfigDefaults").ConfigDefaults;
};
