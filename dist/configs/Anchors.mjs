// ./src/configs/Anchors.ts
import Text from './Text.mjs';
import Transitions from './Transitions.mjs';
export default {
    cursor: 'cursor-pointer',
    display: '',
    focus: '',
    text: 'underline underline-offset-2',
    transition: Transitions.classes('colors', 'inOut', '300'),
    base: function () {
        return [
            this.cursor,
            this.display,
            this.focus,
            this.text,
            this.transition,
        ].join(' ').replace(/\s+/g, ' ').trim();
    },
    sizes: Text.sizes,
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
//# sourceMappingURL=Anchors.js.map