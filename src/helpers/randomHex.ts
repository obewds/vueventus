// ./src/helpers/randomHex.ts

import getRandomInt from './getRandomInt'
import hexadecimals from './hexadecimals'

export default function (): string {
    const chars = hexadecimals()
    const min = 0
    const max = 15
    const r = chars[getRandomInt(min, max)] + chars[getRandomInt(min, max)]
    const g = chars[getRandomInt(min, max)] + chars[getRandomInt(min, max)]
    const b = chars[getRandomInt(min, max)] + chars[getRandomInt(min, max)]
    return '#' + r + g + b
}
