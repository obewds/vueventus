// ./src/configs/Textareas.ts
import Inputs from './Inputs';
import Transitions from './Transitions.js';
export default {
    border: 'border',
    display: 'block w-full',
    outline: '',
    placeholder: 'placeholder:opacity-50',
    ring: '',
    rounding: '',
    shadow: '',
    text: '',
    transition: Transitions.classes('colors', 'inOut', '300'),
    base: function () {
        return [
            this.border,
            this.display,
            this.outline,
            this.placeholder,
            this.ring,
            this.rounding,
            this.shadow,
            this.text,
            this.transition,
        ].join(' ').replace(/\s+/g, ' ').trim();
    },
    sizes: Inputs.sizes,
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
    rowSizes: {
        'xs': 1,
        'sm': 2,
        'md': 3,
        'lg': 4,
        'xl': 6,
        '2xl': 8,
    },
    getRowSize: function (sizesKey) {
        const key = sizesKey && this.rowSizes[sizesKey] ? sizesKey : 'md';
        return this.rowSizes[key];
    },
};
//# sourceMappingURL=Textareas.js.map