// ./src/helpers/padNumber.ts
export default function (number, outputLength = 2, padCharacter = '0') {
    return number.toString().padStart(outputLength, padCharacter);
}
//# sourceMappingURL=padNumber.js.map