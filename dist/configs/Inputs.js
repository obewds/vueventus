// ./src/configs/Inputs.ts
import Transitions from './Transitions.js';
export default {
    border: 'border',
    display: 'block w-full',
    outline: 'outline-none outline-offset-0 outline-2',
    placeholder: '',
    ring: '',
    text: '',
    transition: Transitions.classes('all', 'inOut', '300'),
    base: function () {
        return [
            this.border,
            this.display,
            this.outline,
            this.placeholder,
            this.ring,
            this.text,
            this.transition,
        ].join(' ').trim();
    },
    sizes: {
        'xs': 'px-2 py-1.5 text-sm',
        'sm': 'px-3 py-2 text-base',
        'md': 'px-3 py-2 text-lg',
        'lg': 'px-4 py-3 text-xl',
        'xl': 'px-4 py-3 text-2xl',
        '2xl': 'px-5 py-4 text-3xl',
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
        ].join(' ').trim();
    },
};
//# sourceMappingURL=Inputs.js.map