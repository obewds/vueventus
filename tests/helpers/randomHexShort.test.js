// ./tests/helpers/randomHexShort.test.js

import { randomHexShort } from '../../src/index'
import { hexadecimals } from '../../src/index'


test('randomHexShort helper module returns a truthy value', async () => {
    
    expect(randomHexShort).toBeTruthy()

})


test('randomHexShort helper module returns a valid 3 hexadecimal character string prepended with a "#" when called', async () => {
    
    const textHex = randomHexShort()
    const hexChars = hexadecimals()
    
    expect(textHex.length).toBe(4)
    expect(textHex.split('')[0]).toBe('#')
    expect(hexChars.includes(textHex.split('')[0])).toBe(false)
    expect(hexChars.includes(textHex.split('')[1])).toBe(true)
    expect(hexChars.includes(textHex.split('')[2])).toBe(true)
    expect(hexChars.includes(textHex.split('')[3])).toBe(true)

})
