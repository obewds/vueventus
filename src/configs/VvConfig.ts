// ./src/configs/VvConfig.ts

import Anchors from './Anchors.js'
import Buttons from './Buttons.js'
import ColorModes from './ColorModes.js'
import Inputs from './Inputs.js'
import Text from './Text.js'
import Textareas from './Textareas.js'
import Transitions from './Transitions.js'

import AnchorDefault from './palettes/AnchorDefault.js'
import BorderDefault from './palettes/BorderDefault.js'
import ButtonOutline from './palettes/ButtonOutline.js'
import ButtonSolid from './palettes/ButtonSolid.js'
import GroundConsole from './palettes/GroundConsole.js'
import GroundDefault from './palettes/GroundDefault.js'
import GroundMonochromatic from './palettes/GroundMonochromatic.js'
import GroundPastel from './palettes/GroundPastel.js'
import InputDefault from './palettes/InputDefault.js'
import InputUnderlined from './palettes/InputUnderlined.js'
import TextDefault from './palettes/TextDefault.js'

import VvComponentDefaults from './VvComponentDefaults'

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
    inputs: {
        ...Inputs,
        palettes: {
            default: InputDefault,
            underlined: InputUnderlined,
        },
    },
    // TODO: need to phase out colorMode (singular is inconsistent)
    // colorMode: {
    //     ...ColorModes,
    // },
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
}
