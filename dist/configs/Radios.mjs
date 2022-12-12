// ./src/configs/Radios.ts
import Transitions from './Transitions.mjs';
export default {
    baseColors: 'bg-gray-100 border-gray-400 dark:border-black ring-offset-white dark:ring-offset-gray-800',
    border: '',
    outline: '',
    ring: 'focus:ring-offset-2 focus:ring-2',
    rounding: '',
    shadow: '',
    transition: Transitions.classes('colors', 'inOut', '300'),
    base: function () {
        return [
            this.baseColors,
            this.border,
            this.outline,
            this.ring,
            this.rounding,
            this.shadow,
            this.transition,
        ].join(' ').replace(/\s+/g, ' ').trim();
    },
    sizes: {
        'xs': 'h-3 w-3',
        'sm': 'h-4 w-4',
        'md': 'h-5 w-5',
        'lg': 'h-6 w-6',
        'xl': 'h-7 w-7',
        '2xl': 'h-8 w-8',
    },
    getSizeClasses: function (sizesKey) {
        const key = sizesKey && this.sizes[sizesKey] ? sizesKey : 'md';
        return this.sizes[key];
    },
    classes: function (sizesKey) {
        const sizes = sizesKey ? sizesKey : '';
        return [
            this.base(),
            this.getSizeClasses(sizes),
        ].join(' ').replace(/\s+/g, ' ').trim();
    },
};
//# sourceMappingURL=Radios.js.map