// ./src/helpers/padNumber.ts

export default function (number: number, outputLength = 2, padCharacter = '0'): string {
    return number.toString().padStart(outputLength, padCharacter)
}
