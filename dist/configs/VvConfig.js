// ./src/configs/VvConfig.ts
import Anchors from './Anchors.js';
import Buttons from './Buttons.js';
import Checkboxes from './Checkboxes.js';
import ColorModes from './ColorModes.js';
import Inputs from './Inputs.js';
import Radios from './Radios.js';
import Text from './Text.js';
import Textareas from './Textareas.js';
import Transitions from './Transitions.js';
import AnchorDefault from './palettes/AnchorDefault.js';
import BorderDefault from './palettes/BorderDefault.js';
import ButtonOutline from './palettes/ButtonOutline.js';
import ButtonSolid from './palettes/ButtonSolid.js';
import CheckboxDefault from './palettes/CheckboxDefault.js';
import GroundConsole from './palettes/GroundConsole.js';
import GroundDefault from './palettes/GroundDefault.js';
import GroundMonochromatic from './palettes/GroundMonochromatic.js';
import GroundPastel from './palettes/GroundPastel.js';
import InputDefault from './palettes/InputDefault.js';
import InputUnderlined from './palettes/InputUnderlined.js';
import RadioDefault from './palettes/RadioDefault.js';
import TextDefault from './palettes/TextDefault.js';
import VvComponentDefaults from './VvComponentDefaults.js';
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