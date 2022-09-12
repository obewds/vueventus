import VvConfig from '../configs/VvConfig';
export default function (appTwConfig: typeof VvConfig): {
    anchors: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        cursor: string;
        display: string;
        focus: string;
        text: string;
        transition: string;
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
        border: string;
        cursor: string;
        disabled: string;
        display: string;
        focus: string;
        rounding: string;
        shadow: string;
        text: string;
        transition: string;
        base: import("..").BaseFunction;
        sizes: import("..").ButtonsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
        blockDisplay: string;
        blockBase: import("..").BaseFunction;
        blockSizes: import("..").ButtonsSizes;
        getBlockSizeClasses: import("..").ReturnsClassesFunction;
        blockClasses: import("..").ReturnsClassesFunction;
        fabDisplay: string;
        fabBase: import("..").BaseFunction;
        fabSizes: import("..").ButtonsSizes;
        getFabSizeClasses: import("..").ReturnsClassesFunction;
        fabClasses: import("..").ReturnsClassesFunction;
    };
    checkboxes: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        baseColors: string;
        border: string;
        outline: string;
        ring: string;
        rounding: string;
        shadow: string;
        transition: string;
        base: import("..").BaseFunction;
        sizes: import("..").InputsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    inputs: {
        palettes: {
            default: import("..").DefaultValidationPalette;
            underlined: import("..").DefaultValidationPalette;
        };
        border: string;
        display: string;
        outline: string;
        placeholder: string;
        ring: string;
        rounding: string;
        shadow: string;
        text: string;
        transition: string;
        base: import("..").BaseFunction;
        sizes: import("..").InputsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    colorModes: {
        [x: string]: any;
        dark: import("..").ColorMode;
        light: import("..").ColorMode;
        base: import("..").BaseFunction;
        transition: string;
        classes: import("..").ReturnsClassesFunction;
    };
    grounds: {
        palettes: {
            console: import("..").DefaultConfigPalette;
            default: import("..").DefaultConfigPalette;
            monochromatic: import("..").DefaultConfigPalette;
            pastel: import("..").DefaultConfigPalette;
        };
    };
    radios: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        baseColors: string;
        border: string;
        outline: string;
        ring: string;
        rounding: string;
        shadow: string;
        transition: string;
        base: import("..").BaseFunction;
        sizes: import("..").InputsSizes;
        getSizeClasses: import("..").ReturnsClassesFunction;
        classes: import("..").ReturnsClassesFunction;
    };
    text: {
        palettes: {
            default: import("..").DefaultConfigPalette;
        };
        align: string;
        decoration: string;
        family: string;
        lineHeight: string;
        smoothing: string;
        spacing: string;
        weight: string;
        wordBreak: string;
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
        border: string;
        display: string;
        outline: string;
        placeholder: string;
        ring: string;
        rounding: string;
        shadow: string;
        text: string;
        transition: string;
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
