declare const _default: {
    anchors: {
        palettes: {
            default: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
        };
        cursor: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction.js").BaseFunction;
        sizes: import("../types/TextSizes.js").TextSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
    };
    borders: {
        palettes: {
            default: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
        };
    };
    buttons: {
        palettes: {
            outline: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
            solid: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
        };
        border: string | undefined;
        cursor: string | undefined;
        disabled: string | undefined;
        display: string | undefined;
        focus: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction.js").BaseFunction;
        sizes: import("../types/ButtonsSizes.js").ButtonsSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        blockDisplay: string | undefined;
        blockBase: import("../types/BaseFunction.js").BaseFunction;
        blockSizes: import("../types/ButtonsSizes.js").ButtonsSizes;
        getBlockSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        blockClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        fabDisplay: string | undefined;
        fabBase: import("../types/BaseFunction.js").BaseFunction;
        fabSizes: import("../types/ButtonsSizes.js").ButtonsSizes;
        getFabSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        fabClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
    };
    inputs: {
        palettes: {
            validation: import("../types/ValidationInputPaletteColors.js").ValidationInputPaletteColors;
        };
        border: string | undefined;
        display: string | undefined;
        outline: string | undefined;
        placeholder: string | undefined;
        ring: string | undefined;
        text: string | undefined;
        transition: string | undefined;
        base: import("../types/BaseFunction.js").BaseFunction;
        sizes: import("../types/InputsSizes.js").InputsSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
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
            console: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
            default: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
            monochromatic: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
            pastel: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
        };
    };
    text: {
        palettes: {
            default: import("../types/DefaultConfigPalette.js").DefaultConfigPalette;
        };
        align: string | undefined;
        decoration: string | undefined;
        family: string | undefined;
        lineHeight: string | undefined;
        smoothing: string | undefined;
        spacing: string | undefined;
        weight: string | undefined;
        wordBreak: string | undefined;
        base: import("../types/BaseFunction.js").BaseFunction;
        sizes: import("../types/TextSizes.js").TextSizes;
        getSizeClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        classes: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
    };
    transitions: {
        [x: string]: any;
        durations: import("../types/TransitionsDurations.js").TransitionsDurations;
        easings: import("../types/TransitionsEasings.js").TransitionsEasings;
        transitions: import("../types/TransitionsTransitions.js").TransitionsTransitions;
        classes: import("../types/TransitionsClasses.js").TransitionsClasses;
        custom: import("../types/TransitionsCustom.js").TransitionsCustom;
        getDurationClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        getEasingClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
        getTransitionClasses: import("../types/ReturnsClassesFunction.js").ReturnsClassesFunction;
    };
    defaults: import("../types/ConfigDefaults.js").ConfigDefaults;
};
export default _default;
