// ./tests/helpers/randomHex.test.js

import { randomHex } from '../../src/index'
import { hexadecimals } from '../../src/index'


test('randomHex helper module returns a truthy value', async () => {
    
    expect(randomHex).toBeTruthy()

})


test('randomHex helper module returns a valid 6 hexadecimal character string prepended with a "#" when called', async () => {
    
    const textHex = randomHex()
    const hexChars = hexadecimals()
    
    expect(textHex.length).toBe(7)
    expect(textHex.split('')[0]).toBe('#')
    expect(hexChars.includes(textHex.split('')[0])).toBe(false)
    expect(hexChars.includes(textHex.split('')[1])).toBe(true)
    expect(hexChars.includes(textHex.split('')[2])).toBe(true)
    expect(hexChars.includes(textHex.split('')[3])).toBe(true)
    expect(hexChars.includes(textHex.split('')[4])).toBe(true)
    expect(hexChars.includes(textHex.split('')[5])).toBe(true)
    expect(hexChars.includes(textHex.split('')[6])).toBe(true)

})
