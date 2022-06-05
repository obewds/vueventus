export default {
    test: {
        name: 'test',
        value: true,
    },
    anchors: {
        palettes: {
            'default': {
                'default': 'text-lightBlue-500 hover:text-lightBlue-600 dark:text-lightBlue-300 dark:hover:text-lightBlue-200',
                error: 'text-pink-500 hover:text-pink-600 dark:text-pink-300 dark:hover:text-pink-200',
                primary: 'text-violet-500 hover:text-violet-600 dark:text-violet-300 dark:hover:text-violet-200',
                secondary: 'text-orange-500 hover:text-orange-600 dark:text-orange-300 dark:hover:text-orange-200',
                success: 'text-lime-600 hover:text-lime-700 dark:text-lime-400 dark:hover:text-lime-300',
            },
        },
    },
    borders: {
        palettes: {
            'default': {
                '': '',
                'default': 'border-lightBlue-200 dark:border-lightBlue-600',
                error: 'border-pink-600 dark:border-pink-300',
                primary: 'border-violet-600 dark:border-violet-300',
                secondary: 'border-orange-600 dark:border-orange-300',
                success: 'border-lime-600 dark:border-lime-300',
            },
        },
    },
    buttons: {
        palettes: {
            solid: {
                'default': 'text-lightBlue-800 hover:text-black bg-lightBlue-100 hover:bg-lightBlue-200 active:bg-lightBlue-300 border-lightBlue-900 focus:border-black focus:ring-lightBlue-400',
                error: 'text-white bg-pink-500 hover:bg-pink-600 active:bg-pink-700 border-pink-800 focus:ring-pink-400 focus:border-pink-900',
                primary: 'text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 border-violet-800 focus:ring-violet-400 focus:border-violet-900',
                secondary: 'text-orange-900 hover:text-white bg-orange-500 hover:bg-orange-600 active:text-white active:bg-orange-700 border-orange-800 focus:ring-orange-400 focus:border-orange-900',
                success: 'text-lime-900 hover:text-white bg-lime-500 hover:bg-lime-600 active:text-white active:bg-lime-700 border-lime-800 focus:ring-lime-400 focus:border-lime-900',
            },
            outline: {
                'default': 'text-lightBlue-500 dark:text-lightBlue-300 hover:text-white dark:hover:text-white hover:bg-lightBlue-500 active:bg-lightBlue-600 border-lightBlue-300 hover:border-lightBlue-800 focus:ring-lightBlue-400 focus:border-lightBlue-900',
                error: 'text-pink-500 dark:text-pink-300 hover:text-white dark:hover:text-white hover:bg-pink-500 active:bg-pink-600 border-pink-300 hover:border-pink-800 focus:ring-pink-400 focus:border-pink-900',
                primary: 'text-violet-500 dark:text-violet-300 hover:text-white dark:hover:text-white hover:bg-violet-500 active:bg-violet-600 border-violet-300 hover:border-violet-800 focus:ring-violet-400 focus:border-violet-900',
                secondary: 'text-orange-600 dark:text-orange-500 hover:text-white dark:hover:text-white hover:bg-orange-600 active:bg-orange-800 border-orange-600 hover:border-orange-800 focus:ring-orange-500 focus:border-orange-900',
                success: 'text-lime-600 dark:text-lime-500 hover:text-white dark:hover:text-white hover:bg-lime-600 active:bg-lime-800 border-lime-600 hover:border-lime-800 focus:ring-lime-500 focus:border-lime-900',
            },
        },
    },
    grounds: {
        palettes: {
            console: {
                'default': 'text-lightBlue-200 bg-lightBlue-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
                error: 'text-pink-200 bg-pink-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
                primary: 'text-violet-200 bg-violet-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
                secondary: 'text-orange-200 bg-orange-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
                success: 'text-lime-300 bg-lime-900 bg-opacity-100 dark:bg-black dark:bg-opacity-80',
            },
            'default': {
                'default': '',
                error: 'text-white bg-pink-500 dark:bg-pink-600',
                primary: 'text-white bg-violet-500 dark:bg-violet-600',
                secondary: 'text-white bg-orange-500 dark:bg-orange-600',
                success: 'text-white bg-lime-500 dark:bg-lime-600',
            },
            monochromatic: {
                'default': 'text-lightBlue-800 bg-lightBlue-200 dark:bg-lightBlue-800 dark:text-lightBlue-200',
                error: 'text-pink-800 bg-pink-200 dark:bg-pink-800 dark:text-pink-200',
                primary: 'text-violet-800 bg-violet-200 dark:bg-violet-800 dark:text-violet-200',
                secondary: 'text-orange-800 bg-orange-200 dark:bg-orange-800 dark:text-orange-200',
                success: 'text-lime-800 bg-lime-300 dark:bg-lime-800 dark:text-lime-300',
            },
            pastel: {
                'default': 'text-black bg-lightBlue-100 dark:bg-lightBlue-200',
                error: 'text-black bg-pink-200 dark:bg-pink-300',
                primary: 'text-black bg-violet-200 dark:bg-violet-300',
                secondary: 'text-black bg-orange-200 dark:bg-orange-300',
                success: 'text-black bg-lime-300 dark:bg-lime-400',
            },
        },
    },
    text: {
        palettes: {
            'default': {
                'default': '',
                error: 'text-pink-500 dark:text-pink-300',
                primary: 'text-violet-500 dark:text-violet-300',
                secondary: 'text-orange-500 dark:text-orange-300',
                success: 'text-lime-600 dark:text-lime-300',
            },
        },
    },
}