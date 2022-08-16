declare const _default: {
    anchors: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        cursor: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
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
        border: string | undefined;
        cursor: string | undefined;
        disabled: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").ButtonsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
        blockDisplay: string | undefined;
        blockBase: import("../index.js").BaseFunction;
        blockSizes: import("../index.js").ButtonsSizes;
        getBlockSizeClasses: import("../index.js").ReturnsClassesFunction;
        blockClasses: import("../index.js").ReturnsClassesFunction;
        fabDisplay: string | undefined;
        fabBase: import("../index.js").BaseFunction;
        fabSizes: import("../index.js").ButtonsSizes;
        getFabSizeClasses: import("../index.js").ReturnsClassesFunction;
        fabClasses: import("../index.js").ReturnsClassesFunction;
    };
    checkboxes: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        baseColors: string | undefined;
        border: string | undefined;
        outline: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        transition: string | undefined;
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
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
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
        transition: string | undefined;
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
        baseColors: string | undefined;
        border: string | undefined;
        outline: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        transition: string | undefined;
        base: import("../index.js").BaseFunction;
        sizes: import("../index.js").InputsSizes;
        getSizeClasses: import("../index.js").ReturnsClassesFunction;
        classes: import("../index.js").ReturnsClassesFunction;
    };
    text: {
        palettes: {
            default: import("../index.js").DefaultConfigPalette;
        };
        align: string | undefined;
        decoration: string | undefined;
        family: string | undefined;
        lineHeight: string | undefined;
        smoothing: string | undefined;
        spacing: string | undefined;
        weight: string | undefined;
        wordBreak: string | undefined;
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
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        rounding: string | undefined;
        shadow: string | undefined;
        text: string | undefined;
        transition: string | undefined;
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
