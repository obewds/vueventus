import ValidListTypes from '../../validators/ValidListTypes';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    listStyleTypeClass: {
        type: StringConstructor;
        default: any;
    };
    markerColor: {
        type: StringConstructor;
        default: any;
    };
    markerPalette: {
        type: StringConstructor;
        default: any;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: any;
        validator: (prop: ValidListTypes) => boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    listStyleTypeClass: {
        type: StringConstructor;
        default: any;
    };
    markerColor: {
        type: StringConstructor;
        default: any;
    };
    markerPalette: {
        type: StringConstructor;
        default: any;
    };
    tag: {
        type: PropType<"ol" | "ul">;
        default: any;
        validator: (prop: ValidListTypes) => boolean;
    };
}>>, {
    tag: "ol" | "ul";
    listStyleTypeClass: string;
    markerColor: string;
    markerPalette: string;
}>;
export default _default;
