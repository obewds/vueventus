// ./src/configs/VvComponentDefaults.ts

import type { ConfigDefaults } from '../types/ConfigDefaults'

export default <ConfigDefaults>{
    "VvAnchor": {
        button: false,
        buttonBlock: false,
        buttonFab: false,
        buttonSize: 'md',
        color: 'default',
        external: false,
        href: '#',
        palette: 'default',
        textSize: 'md',
    },
    "VvButton": {
        block: false,
        color: 'primary',
        fab: false,
        palette: 'solid',
        size: 'md',
        type: 'button',
    },
    "VvCheckbox": {
        color: 'default',
        checked: false,
        darkCheckHex: '#242426',
        lightCheckHex: '#e1e1e3',
        palette: 'default',
        size: 'md',
    },
    "VvColorModeButton": {
        color: 'default',
        mode: 'light',
        palette: 'outline',
        size: 'xs',
        type: 'button',
    },
    "VvEl": {
        borderPalette: 'default',
        borderColor: '',
        groundPalette: 'default',
        groundColor: 'default',
        tag: 'div',
        textPalette: 'default',
        textColor: 'default',
    },
    "VvFormGroup": {
        displayError: false,
        displayHelp: false,
        displaySuccess: false,
        errorClasses: 'text-sm',
        errorText: '',
        errorTextColor: 'error',
        errorTextPalette: 'default',
        helpClasses: 'text-sm opacity-75',
        helpText: '',
        helpTextColor: 'default',
        helpTextPalette: 'default',
        labelClasses: 'text-lg capitalize',
        labelTextColor: 'default',
        labelTextPalette: 'default',
        slotParentClasses: 'flex items-center gap-1',
        successClasses: 'text-sm',
        successText: '',
        successTextColor: 'success',
        successTextPalette: 'default',
        wrapperClasses: 'w-full flex flex-col space-y-1',
    },
    "VvInput": {
        color: 'default',
        palette: 'default',
        size: 'md',
        type: 'text',
    },
    "VvList": {
        listStyleTypeClass: 'list-disc',
        markerColor: 'primary',
        markerPalette: 'default',
        size: 'md',
        tag: 'ul',
    },
    "VvListbox": {
        data: [
            { id: 0, display: 'Select an option', value: '', disabled: false },
            { id: 1, display: 'Default Option One', value: 'one', disabled: false },
            { id: 2, display: 'Default Option Two', value: 'two', disabled: false },
            { id: 3, display: 'Default Option Three', value: 'three', disabled: false },
            { id: 4, display: 'Disabled Option Four Example', value: 'four', disabled: true },
            { id: 5, display: 'Default Option Five', value: 'five', disabled: false },
        ],
        displayClasses: 'w-full px-2 py-1 text-left',
        displayDisabledClasses: 'opacity-50',
        iconDisabledClasses: 'mr-3 opacity-25',
        iconSelectedClasses: 'hidden ui-selected:block mr-3',
        iconsSizeClasses: 'w-5 h-5',
        label: '',
        labelClasses: 'block text-left pb-1',
        listboxButtonClasses: 'w-full flex justify-between items-center gap-3 p-2 mx-auto',
        listboxButtonColor: 'default',
        listboxButtonPalette: 'default',
        listboxOptionClasses: 'w-full flex items-center justify-start px-2 ui-active:hover:cursor-pointer ui-not-active:hover:cursor-not-allowed',
        listboxOptionColor: 'default',
        listboxOptionPalette: 'default',
        listboxOptionsClasses: 'w-full shadow-md',
        listboxOptionsWithLabelSpacing: 'pt-1',
        listboxOptionsWithoutLabelSpacing: '-mt-7',
        optionIconParentClasses: 'w-6',
        selectedDisplayClasses: 'block text-left',
        selectedIndex: 0,
        size: 'md',
    },
    "VvListItem": {
        color: 'neutral',
        enableColoredSymbols: true,
        palette: 'default',
        symbolColor: 'primary',
        symbolPalette: 'default',
    },
    "VvRadio": {
        color: 'default',
        checked: false,
        darkRadioHex: '#242426',
        lightRadioHex: '#e1e1e3',
        palette: 'default',
        size: 'md',
    },
    "VvRouterLink": {
        button: false,
        buttonBlock: false,
        buttonFab: false,
        buttonSize: 'md',
        color: 'default',
        external: false,
        to: '/',
        palette: 'default',
    },
    "VvSelect": {
        color: 'default',
        palette: 'default',
        size: 'md',
    },
    "VvTextarea": {
        color: 'default',
        palette: 'default',
        size: 'md',
        rowSize: 'md',
    },
}
