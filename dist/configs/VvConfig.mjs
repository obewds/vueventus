// ./src/configs/VvConfig.ts
import Anchors from './Anchors.mjs';
import Buttons from './Buttons.mjs';
import Checkboxes from './Checkboxes.mjs';
import ColorModes from './ColorModes.mjs';
import Inputs from './Inputs.mjs';
import Radios from './Radios.mjs';
import Text from './Text.mjs';
import Textareas from './Textareas.mjs';
import Transitions from './Transitions.mjs';
import AnchorDefault from './palettes/AnchorDefault.mjs';
import BorderDefault from './palettes/BorderDefault.mjs';
import ButtonOutline from './palettes/ButtonOutline.mjs';
import ButtonSolid from './palettes/ButtonSolid.mjs';
import CheckboxDefault from './palettes/CheckboxDefault.mjs';
import FillDefault from './palettes/FillDefault.mjs';
import GroundConsole from './palettes/GroundConsole.mjs';
import GroundDefault from './palettes/GroundDefault.mjs';
import GroundMonochromatic from './palettes/GroundMonochromatic.mjs';
import GroundPastel from './palettes/GroundPastel.mjs';
import InputDefault from './palettes/InputDefault.mjs';
import InputUnderlined from './palettes/InputUnderlined.mjs';
import RadioDefault from './palettes/RadioDefault.mjs';
import TextDefault from './palettes/TextDefault.mjs';
import VvComponentDefaults from './VvComponentDefaults.mjs';
export default {
    //
    // Design System Defaults
    //
    anchors: {
        ...Anchors,
        palettes: {
            default: AnchorDefault,
        },
    },
    borders: {
        palettes: {
            default: BorderDefault,
        },
    },
    buttons: {
        ...Buttons,
        palettes: {
            outline: ButtonOutline,
            solid: ButtonSolid,
        },
    },
    checkboxes: {
        ...Checkboxes,
        palettes: {
            default: CheckboxDefault,
        },
    },
    fills: {
        palettes: {
            default: FillDefault,
        },
    },
    inputs: {
        ...Inputs,
        palettes: {
            default: InputDefault,
            underlined: InputUnderlined,
        },
    },
    colorModes: {
        ...ColorModes,
    },
    grounds: {
        palettes: {
            console: GroundConsole,
            default: GroundDefault,
            monochromatic: GroundMonochromatic,
            pastel: GroundPastel,
        },
    },
    radios: {
        ...Radios,
        palettes: {
            default: RadioDefault,
        },
    },
    text: {
        ...Text,
        palettes: {
            default: TextDefault,
        },
    },
    textareas: {
        ...Textareas,
        palettes: {
            default: InputDefault,
            underlined: InputUnderlined,
        },
    },
    transitions: {
        ...Transitions,
    },
    //
    // Component Prop Defaults
    //
    defaults: VvComponentDefaults,
};
//# sourceMappingURL=VvConfig.js.map