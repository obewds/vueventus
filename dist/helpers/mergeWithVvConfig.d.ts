import VvConfig from '../configs/VvConfig';
export default function (appTwConfig: typeof VvConfig): {
    anchors: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        cursor: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("..").BaseFunction;
        sizes: import("..").TextSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    borders: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
    };
    buttons: {
        palettes: {
            outline: import("..").DefaultConfigPalette;
            solid: import("..").DefaultConfigPalette;
        };
        border: string | undefined;
        cursor: string | undefined;
        disabled: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("..").BaseFunction;
        sizes: import("..").ButtonsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
        blockDisplay: string | undefined;
        blockBase: import("..").BaseFunction;
        blockSizes: import("..").ButtonsSizes;
        getBlockSizeClasses: import("..").ReturnsClassesFunction;
        blockClasses: import("..").ReturnsClassesFunction;
        fabDisplay: string | undefined;
        fabBase: import("..").BaseFunction;
        fabSizes: import("..").ButtonsSizes;
        getFabSizeClasses: import("..").ReturnsClassesFunction;
        fabClasses: import("..").ReturnsClassesFunction;
    };
    inputs: {
        palettes: {
            default: import("..").DefaultValidationPalette;
            underlined: import("..").DefaultValidationPalette;
        };
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("..").BaseFunction;
        sizes: import("..").InputsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    colorMode: {
        [x: string]: import("..").ColorMode;
        dark: import("..").ColorMode;
        light: import("..").ColorMode;
    };
    grounds: {
        palettes: {
            console: import("..").DefaultConfigPalette;
            default: import("..").DefaultConfigPalette;
            monochromatic: import("..").DefaultConfigPalette;
            pastel: import("..").DefaultConfigPalette;
        };
    };
    text: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        align: string | undefined;
        decoration: string | undefined;
        family: string | undefined;
        lineHeight: string | undefined;
        smoothing: string | undefined;
        spacing: string | undefined;
        weight: string | undefined;
        wordBreak: string | undefined;
        base: import("..").BaseFunction;
        sizes: import("..").TextSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    textareas: {
        palettes: {
            default: import("..").DefaultValidationPalette;
            underlined: import("..").DefaultValidationPalette;
        };
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("..").BaseFunction;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
        sizes: import("..").TextareasSizes;
        rowSizes: import("..").TextareasRowSizes;
        getRowSize: import("..").ReturnsNumberFunction;
    };
    transitions: {
        [x: string]: any;
        durations: import("..").TransitionsDurations;
        easings: import("..").TransitionsEasings;
        transitions: import("..").TransitionsTransitions;
        classes: import("..").TransitionsClasses;
        custom: import("..").TransitionsCustom;
        getDurationClasses: import("..").ReturnsClassesFunction;
        getEasingClasses: import("..").ReturnsClassesFunction;
        getTransitionClasses: import("..").ReturnsClassesFunction;
    };
    defaults: import("..").ConfigDefaults;
};
