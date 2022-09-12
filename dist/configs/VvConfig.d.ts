declare const _default: {
    anchors: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        cursor: string;
        display: string;
        focus: string;
        text: string;
        transition: string;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").TextSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    borders: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
    };
    buttons: {
        palettes: {
            outline: import("../index.js").DefaultConfigPalette;
            solid: import("../index.js").DefaultConfigPalette;
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
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").ButtonsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
        blockDisplay: string;
        blockBase: import("../index.js").BaseFunction;
        blockSizes: import("../index.js").ButtonsSizes;
        getBlockSizeClasses: import("../index.js").ReturnsClassesFunction;
        blockClasses: import("../index.js").ReturnsClassesFunction;
        fabDisplay: string;
        fabBase: import("../index.js").BaseFunction;
        fabSizes: import("../index.js").ButtonsSizes;
        getFabSizeClasses: import("../index.js").ReturnsClassesFunction;
        fabClasses: import("../index.js").ReturnsClassesFunction;
    };
    checkboxes: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        baseColors: string;
        border: string;
        outline: string;
        ring: string;
        rounding: string;
        shadow: string;
        transition: string;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").InputsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    inputs: {
        palettes: {
            default: import("../index.js").DefaultValidationPalette;
            underlined: import("../index.js").DefaultValidationPalette;
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
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").InputsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    colorModes: {
        [x: string]: any;
        dark: import("../index.js").ColorMode;
        light: import("../index.js").ColorMode;
        base: import("../index.js").BaseFunction;
        transition: string;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    grounds: {
        palettes: {
            console: import("../index.js").DefaultConfigPalette;
            default: import("../index.js").DefaultConfigPalette;
            monochromatic: import("../index.js").DefaultConfigPalette;
            pastel: import("../index.js").DefaultConfigPalette;
        };
    };
    radios: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        baseColors: string;
        border: string;
        outline: string;
        ring: string;
        rounding: string;
        shadow: string;
        transition: string;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").InputsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    text: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        align: string;
        decoration: string;
        family: string;
        lineHeight: string;
        smoothing: string;
        spacing: string;
        weight: string;
        wordBreak: string;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").TextSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    textareas: {
        palettes: {
            default: import("../index.js").DefaultValidationPalette;
            underlined: import("../index.js").DefaultValidationPalette;
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
        base: import("../index.js").BaseFunction;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
        sizes: import("../index.js").TextareasSizes;
        rowSizes: import("../index.js").TextareasRowSizes;
        getRowSize: import("../index.js").ReturnsNumberFunction;
    };
    transitions: {
        [x: string]: any;
        durations: import("../index.js").TransitionsDurations;
        easings: import("../index.js").TransitionsEasings;
        transitions: import("../index.js").TransitionsTransitions;
        classes: import("../index.js").TransitionsClasses;
        custom: import("../index.js").TransitionsCustom;
        getDurationClasses: import("../index.js").ReturnsClassesFunction;
        getEasingClasses: import("../index.js").ReturnsClassesFunction;
        getTransitionClasses: import("../index.js").ReturnsClassesFunction;
    };
    defaults: import("../index.js").ConfigDefaults;
};
export default _default;
