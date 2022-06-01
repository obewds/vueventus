export default {
    durations: {
        '1000': 'duration-1000',
        '700': 'duration-700',
        '500': 'duration-500',
        '300': 'duration-300',
        '200': 'duration-200',
        '150': 'duration-150',
        '100': 'duration-100',
        '75': 'duration-75',
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
        ].join(' ')
    },
    classes: function (transitionsKey, easingsKey, durationsKey) {
        const transitions = transitionsKey ? transitionsKey : ''
        const easings = easingsKey ? easingsKey : ''
        const durations = durationsKey ? durationsKey : ''
        return [
            this.getTransitionClasses(transitions),
            this.getEasingClasses(easings),
            this.getDurationClasses(durations),
        ].join(' ')
    },
}
