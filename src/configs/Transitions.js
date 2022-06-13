export default {
    durations: {
        '1200': 'duration-1200',
        '1150': 'duration-1150',
        '1100': 'duration-1100',
        '1050': 'duration-1050',
        '1000': 'duration-1000',
        '950': 'duration-950',
        '900': 'duration-900',
        '850': 'duration-850',
        '800': 'duration-800',
        '750': 'duration-750',
        '700': 'duration-700',
        '650': 'duration-650',
        '600': 'duration-600',
        '550': 'duration-550',
        '500': 'duration-500',
        '475': 'duration-475',
        '450': 'duration-450',
        '425': 'duration-425',
        '400': 'duration-400',
        '375': 'duration-375',
        '350': 'duration-350',
        '325': 'duration-325',
        '300': 'duration-300',
        '275': 'duration-275',
        '250': 'duration-250',
        '225': 'duration-225',
        '200': 'duration-200',
        '175': 'duration-175',
        '150': 'duration-150',
        '125': 'duration-125',
        '100': 'duration-100',
        '75': 'duration-75',
        '50': 'duration-50',
        '25': 'duration-25',
    },
    easings: {
        linear: 'ease-linear',
        in: 'ease-in',
        out: 'ease-out',
        inOut: 'ease-in-out',
    },
    transitions: {
        default: 'transition',
        all: 'transition-all',
        colors: 'transition-colors',
        opacity: 'transition-opacity',
        shadow: 'transition-shadow',
        transform: 'transition-transform',
    },
    getDurationClasses: function (durationsKey) {
        const key = durationsKey && this.durations[durationsKey] ? durationsKey : '300'
        return this.durations[key]
    },
    getEasingClasses: function (easingsKey) {
        const key = easingsKey && this.easings[easingsKey] ? easingsKey : 'inOut'
        return this.easings[key]
    },
    getTransitionClasses: function (transitionsKey) {
        const key = transitionsKey && this.transitions[transitionsKey] ? transitionsKey : 'default'
        return this.transitions[key]
    },
    custom: function (settingsObj) {
        const settings = {
            transitions: settingsObj && settingsObj.transitions ? settingsObj.transitions : '',
            easings: settingsObj && settingsObj.easings ? settingsObj.easings : '',
            durations: settingsObj && settingsObj.durations ? settingsObj.durations : '',
        }
        return [
            this.getTransitionClasses(settings.transitions),
            this.getEasingClasses(settings.easings),
            this.getDurationClasses(settings.durations),
        ].join(' ').trim()
    },
    classes: function (transitionsKey, easingsKey, durationsKey) {
        const transitions = transitionsKey ? transitionsKey : ''
        const easings = easingsKey ? easingsKey : ''
        const durations = durationsKey ? durationsKey : ''
        return [
            this.getTransitionClasses(transitions),
            this.getEasingClasses(easings),
            this.getDurationClasses(durations),
        ].join(' ').trim()
    },
}
