
import { Transitions } from './index'

interface GlobalsIconKey {
    icon: string
    key: string
}

interface GlobalsNameKey {
    name: string
    key: string
}

interface GlobalsNameMaxWidth {
    name: string
    maxWidth: string
}

interface Globals {
    classes: {
        anchor: string
        article: string
        border: string
        cardFlex: string
        configPre: string
        fakeConsole: string
        flexStack: string
        flexWrap: string
        grid: string
        gridCardLink: string
        gridCardLinkModule: string
        gridCardLinkPalette: string
        h1: string
        h2: string
        h3: string
        pad: string
        subhead: string
    },
    data: {
        btnSizes: GlobalsIconKey[]
        colors: GlobalsNameKey[]
        inputColors: GlobalsNameKey[]
        textSizes: GlobalsNameMaxWidth[]
    }
}

export default <Globals>{
    classes: {
        anchor: 'text-green-600 hover:text-green-700 dark:text-green-300 dark:hover:text-green-400',
        article: 'px-4 pb-20',
        border: 'border',
        cardFlex: 'w-full flex flex-col justify-center bg-gray-50 dark:bg-gray-800 p-6 rounded-xl drop-shadow-md gap-8 mb-10',
        configPre: 'overflow-x-auto text-left p-4 mb-6',
        fakeConsole: 'bg-gray-100 dark:bg-gray-900 text-lime-700 dark:text-lime-300 p-6',
        flexStack: 'w-full flex flex-col space-y-1',
        flexWrap: 'w-full flex flex-wrap justify-center items-center gap-8',
        grid: 'max-w-5xl mx-auto grid gap-8 pb-10',
        gridCardLink: 'bg-emerald-600 hover:bg-emerald-700 text-white text-xl p-6 rounded-xl drop-shadow-md cursor-pointer ' + Transitions.classes(),
        gridCardLinkModule: 'bg-amber-600 hover:bg-amber-700 text-white text-xl p-6 rounded-xl drop-shadow-md cursor-pointer ' + Transitions.classes(),
        gridCardLinkPalette: 'bg-indigo-600 hover:bg-indigo-700 text-white text-xl p-6 rounded-xl drop-shadow-md cursor-pointer ' + Transitions.classes(),
        h1: 'pt-6 pb-10 text-center text-3xl',
        h2: 'text-xl pt-2',
        h3: 'text-lg pb-3',
        pad: 'py-1 px-2',
        subhead: 'text-xl opacity-75 text-center pb-4',
    },
    data: {
        btnSizes: [
            { icon: 'h-3 w-3', key: '4xs' },
            { icon: 'h-4 w-4', key: '3xs' },
            { icon: 'h-5 w-5', key: '2xs' },
            { icon: 'h-6 w-6', key: 'xs' },
            { icon: 'h-7 w-7', key: 'sm' },
            { icon: 'h-8 w-8', key: 'md' },
            { icon: 'h-9 w-9', key: 'lg' },
            { icon: 'h-10 w-10', key: 'xl' },
            { icon: 'h-11 w-11', key: '2xl' },
            { icon: 'h-12 w-12', key: '3xl' },
            { icon: 'h-14 w-14', key: '4xl' },
        ],
        colors: [
            { name: 'Default', key: 'default' },
            { name: 'Error', key: 'error' },
            { name: 'Primary', key: 'primary' },
            { name: 'Secondary', key: 'secondary' },
            { name: 'Success', key: 'success' },
        ],
        inputColors: [
            { name: 'Default', key: 'default' },
            { name: 'Error', key: 'error' },
            { name: 'Success', key: 'success' },
        ],
        textSizes: [
            { name: '4xs', maxWidth: 'max-w-md' },
            { name: '3xs', maxWidth: 'max-w-md' },
            { name: '2xs', maxWidth: 'max-w-md' },
            { name: 'xs', maxWidth: 'max-w-lg' },
            { name: 'sm', maxWidth: 'max-w-lg' },
            { name: 'md', maxWidth: 'max-w-lg' },
            { name: 'lg', maxWidth: 'max-w-xl' },
            { name: 'xl', maxWidth: 'max-w-2xl' },
            { name: '2xl', maxWidth: 'max-w-3xl' },
            { name: '3xl', maxWidth: 'max-w-4xl' },
            { name: '4xl', maxWidth: 'max-w-5xl' },
            { name: '5xl', maxWidth: 'max-w-6xl' },
            { name: '6xl', maxWidth: 'max-w-7xl' },
            { name: '7xl', maxWidth: 'max-w-7xl' },
            { name: '8xl', maxWidth: 'max-w-full' },
            { name: '9xl', maxWidth: 'max-w-full' },
            { name: '10xl', maxWidth: 'max-w-full' },
            { name: '11xl', maxWidth: 'max-w-full' },
            { name: '12xl', maxWidth: 'max-w-full' },
        ],
    },
    // strings: {},
    // styles: {},
}