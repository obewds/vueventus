// ./src/validators/ValidFontAwesomeSizes.ts
const ValidFontAwesomeSizes = [
    'xs',
    'sm',
    '1x', // '1x' is effectively size 'md' & icon size inherits font size
    'lg',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
    undefined, // need to add this or else TS will complain downstream
];
export default ValidFontAwesomeSizes;
//# sourceMappingURL=ValidFontAwesomeSizes.js.map