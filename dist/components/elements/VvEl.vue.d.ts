import ValidElementTags from '../../validators/ValidElementTags';
import type { PropType } from 'vue';
import type { DefaultPaletteColors } from '../../types/DefaultPaletteColors';
import type { DefaultPalettes } from '../../types/DefaultPalettes';
import type { SizesText } from '../../types/SizesText';
declare const _default: import("vue").DefineComponent<{
    borderPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    borderColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    groundPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    groundColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    size: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    tag: {
        type: PropType<"object" | "title" | "button" | "style" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "audio" | "map" | "video" | "iframe" | "picture" | "portal" | "svg" | "math" | "canvas" | "del" | "ins" | "caption" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary">;
        default: "object" | "title" | "button" | "style" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "audio" | "map" | "video" | "iframe" | "picture" | "portal" | "svg" | "math" | "canvas" | "del" | "ins" | "caption" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary";
        validator: (prop: ValidElementTags) => boolean;
    };
    textPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    textColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    borderPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    borderColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    groundPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    groundColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
    size: {
        type: PropType<keyof SizesText>;
        default: keyof SizesText;
    };
    tag: {
        type: PropType<"object" | "title" | "button" | "style" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "audio" | "map" | "video" | "iframe" | "picture" | "portal" | "svg" | "math" | "canvas" | "del" | "ins" | "caption" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary">;
        default: "object" | "title" | "button" | "style" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "audio" | "map" | "video" | "iframe" | "picture" | "portal" | "svg" | "math" | "canvas" | "del" | "ins" | "caption" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary";
        validator: (prop: ValidElementTags) => boolean;
    };
    textPalette: {
        type: PropType<keyof DefaultPalettes>;
        default: keyof DefaultPalettes;
    };
    textColor: {
        type: PropType<keyof DefaultPaletteColors>;
        default: keyof DefaultPaletteColors;
    };
}>>, {
    size: keyof SizesText;
    borderPalette: keyof DefaultPalettes;
    borderColor: keyof DefaultPaletteColors;
    groundPalette: keyof DefaultPalettes;
    groundColor: keyof DefaultPaletteColors;
    tag: "object" | "title" | "button" | "style" | "address" | "article" | "aside" | "footer" | "header" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "main" | "nav" | "section" | "blockquote" | "dd" | "div" | "dl" | "dt" | "figcaption" | "figure" | "li" | "menu" | "ol" | "p" | "pre" | "ul" | "a" | "abbr" | "b" | "bdi" | "bdo" | "cite" | "code" | "data" | "dfn" | "em" | "i" | "kbd" | "mark" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "small" | "span" | "strong" | "sub" | "sup" | "time" | "u" | "var" | "audio" | "map" | "video" | "iframe" | "picture" | "portal" | "svg" | "math" | "canvas" | "del" | "ins" | "caption" | "colgroup" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr" | "datalist" | "fieldset" | "form" | "input" | "label" | "legend" | "meter" | "optgroup" | "option" | "output" | "progress" | "select" | "textarea" | "details" | "dialog" | "summary";
    textPalette: keyof DefaultPalettes;
    textColor: keyof DefaultPaletteColors;
}>;
export default _default;
