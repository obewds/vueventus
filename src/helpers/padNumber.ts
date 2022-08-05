// ./src/helpers/padNumber.ts

// TODO: Add tests for padNumber.ts
// TODO: Add docs for padNumber.ts

export default function (number: number, padCharacter = '0', outputLength = 2): string {
    return number.toString().padStart(outputLength, padCharacter)
}
