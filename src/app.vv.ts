// ./src/app.vv.ts

import type { ConfigVv } from './types/ConfigVv'
import VvConfig from './configs/VvConfig'

let appVv: ConfigVv = VvConfig

appVv.test = {
    name: 'test',
    value: true,
}

appVv['another'] = {
    name: 'test',
    value: true,
}

appVv.anchors.palettes.default = {
    'default': 'text-lightBlue-500 hover:text-lightBlue-600 dark:text-lightBlue-300 dark:hover:text-lightBlue-200',
    error: 'text-pink-500 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-200',
    primary: 'text-violet-500 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200',
    secondary: 'text-orange-500 hover:text-orange-600 dark:text-orange-300 dark:hover:text-orange-200',
    success: 'text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300',
}

appVv.borders.palettes.default = {
    '': '',
    'default': 'border-lightBlue-200 dark:border-lightBlue-600',
    error: 'border-pink-600 dark:border-pink-300',
    primary: 'border-violet-600 dark:border-violet-300',
    secondary: 'border-orange-600 dark:border-orange-300',
    success: 'border-lime-600 dark:border-lime-300',
}

appVv.buttons.palettes.solid = {
    'default': 'text-lightBlue-800 hover:text-black bg-lightBlue-100 hover:bg-lightBlue-200 active:bg-lightBlue-300 border-lightBlue-900 focus:border-black focus:ring-lightBlue-400',
    error: 'text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-700 border-pink-800 focus:ring-pink-400 focus:border-pink-900',
    primary: 'text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 border-violet-800 focus:ring-violet-400 focus:border-violet-900',
    secondary: 'text-orange-900 hover:text-white bg-orange-500 hover:bg-orange-600 active:text-white active:bg-orange-700 border-orange-800 focus:ring-orange-400 focus:border-orange-900',
    success: 'text-lime-900 hover:text-white bg-lime-500 hover:bg-lime-600 active:text-white active:bg-lime-700 border-lime-800 focus:ring-lime-400 focus:border-lime-900',
}

appVv.buttons.palettes.outline = {
    'default': 'text-lightBlue-500 dark:text-lightBlue-300 hover:text-white dark:hover:text-white hover:bg-lightBlue-500 active:bg-lightBlue-600 border-lightBlue-300 hover:border-lightBlue-800 focus:ring-lightBlue-400 focus:border-lightBlue-900',
    error: 'text-pink-500 dark:text-pink-300 hover:text-white dark:hover:text-white hover:bg-pink-500 active:bg-pink-600 border-pink-300 hover:border-pink-800 focus:ring-pink-400 focus:border-pink-900',
    primary: 'text-violet-500 dark:text-violet-300 hover:text-white dark:hover:text-white hover:bg-violet-500 active:bg-violet-600 border-violet-300 hover:border-violet-800 focus:ring-violet-400 focus:border-violet-900',
    secondary: 'text-orange-600 dark:text-orange-500 hover:text-white dark:hover:text-white hover:bg-orange-600 active:bg-orange-800 border-orange-600 hover:border-orange-800 focus:ring-orange-500 focus:border-orange-900',
    success: 'text-lime-600 dark:text-lime-500 hover:text-white dark:hover:text-white hover:bg-lime-600 active:bg-lime-800 border-lime-600 hover:border-lime-800 focus:ring-lime-500 focus:border-lime-900',
}

appVv.grounds.palettes.console = {
    'default': 'text-lightBlue-200 bg-lightBlue-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
    error: 'text-pink-200 bg-pink-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
    primary: 'text-violet-200 bg-violet-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
    secondary: 'text-orange-200 bg-orange-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
    success: 'text-lime-300 bg-lime-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
}

appVv.grounds.palettes.default = {
    'default': '',
    error: 'text-white bg-pink-500 dark:bg-pink-600',
    primary: 'text-white bg-violet-500 dark:bg-violet-600',
    secondary: 'text-white bg-orange-500 dark:bg-orange-600',
    success: 'text-white bg-lime-500 dark:bg-lime-600',
}

appVv.grounds.palettes.monochromatic = {
    'default': 'text-lightBlue-800 bg-lightBlue-200 dark:bg-lightBlue-800 dark:text-lightBlue-200',
    error: 'text-pink-800 bg-pink-200 dark:bg-pink-800 dark:text-pink-200',
    primary: 'text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200',
    secondary: 'text-orange-800 bg-orange-200 dark:bg-orange-800 dark:text-orange-200',
    success: 'text-lime-800 bg-lime-300 dark:bg-lime-800 dark:text-lime-300',
}

appVv.grounds.palettes.pastel = {
    'default': 'text-black bg-lightBlue-100 dark:bg-lightBlue-200',
    error: 'text-black bg-pink-200 dark:bg-pink-300',
    primary: 'text-black bg-violet-200 dark:bg-violet-300',
    secondary: 'text-black bg-orange-200 dark:bg-orange-300',
    success: 'text-black bg-lime-300 dark:bg-lime-400',
}

appVv.inputs.palettes.default = {
    'default': 'focus:ring-lightBlue-500 focus:border-lightBlue-500 dark:focus:ring-lightBlue-400 dark:focus:border-lightBlue-400 border-gray-300 dark:border-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-lightBlue-600 dark:selection:bg-lightBlue-500 selection:text-white',
    error: 'text-pink-700 dark:text-pink-200 focus:ring-pink-500 focus:border-pink-500 dark:focus:ring-pink-400 dark:focus:border-pink-400 border-pink-300 dark:border-pink-600 bg-pink-100 focus:bg-pink-50 dark:bg-pink-800 dark:focus:bg-pink-700 placeholder:text-pink-400 placeholder:dark:text-pink-500 selection:bg-pink-600 dark:selection:bg-pink-500 selection:text-white',
    success: 'text-lime-700 dark:text-lime-200 focus:ring-lime-500 focus:border-lime-500 dark:focus:ring-lime-400 dark:focus:border-lime-400 border-lime-300 dark:border-lime-600 bg-lime-100 focus:bg-lime-50 dark:bg-lime-800 dark:focus:bg-lime-700 placeholder:text-lime-400 placeholder:dark:text-lime-500 selection:bg-lime-600 dark:selection:bg-lime-500 selection:text-white',
}

appVv.inputs.palettes.underlined = {
    'default': 'focus:ring-0 border-x-0 border-t-0 border-b-2 focus:border-b-lightBlue-500 focus:border-x-gray-700 dark:focus:border-b-lightBlue-400 border-b-gray-300 dark:border-b-gray-600 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 selection:bg-lightBlue-600 dark:selection:bg-lightBlue-500 selection:text-white',
    error: 'focus:ring-0 border-x-0 border-t-0 border-b-2 text-pink-700 dark:text-pink-200 focus:border-b-pink-500 focus:border-x-gray-700 dark:focus:border-b-pink-400 border-b-pink-300 dark:border-b-pink-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-pink-400 placeholder:dark:text-pink-400 selection:bg-pink-600 dark:selection:bg-pink-500 selection:text-white',
    success: 'focus:ring-0 border-x-0 border-t-0 border-b-2 text-lime-700 dark:text-lime-200 focus:border-b-lime-500 focus:border-x-gray-700 dark:focus:border-b-lime-400 border-b-lime-300 dark:border-b-lime-700 bg-gray-50 focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-700 placeholder:text-lime-500 placeholder:dark:text-lime-500 selection:bg-lime-600 dark:selection:bg-lime-500 selection:text-white',
}

appVv.text.palettes.default = {
    'default': '',
    error: 'text-pink-500 dark:text-pink-300',
    primary: 'text-violet-500 dark:text-violet-300',
    secondary: 'text-orange-500 dark:text-orange-300',
    success: 'text-lime-600 dark:text-lime-300',
}

export default appVv
