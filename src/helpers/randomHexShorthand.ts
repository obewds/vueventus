// ./src/helpers/randomHexShorthand.ts

// TODO: Add tests for randomHexShorthand.ts
// TODO: Add docs for randomHexShorthand.ts

import getRandomInt from "./getRandomInt"

export default function (): string {
    const hexChars = ('0123456789abcdef').split('')
    const min = 0
    const max = 15
    const r = hexChars[getRandomInt(min, max)]
    const g = hexChars[getRandomInt(min, max)]
    const b = hexChars[getRandomInt(min, max)]
    return '#' + r + g + b
}
