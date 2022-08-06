// ./tests/helpers/hexadecimals.test.js

import { hexadecimals } from '../../src/index'


test('hexadecimals helper module returns a truthy value', async () => {
    
    expect(hexadecimals).toBeTruthy()

})


test('hexadecimals helper module returns an array of characters that joins into a string of hexadecimal characters', async () => {
    
    const testHexChars = hexadecimals()
    const concatString = testHexChars.join('')
    
    expect(concatString).toBe('0123456789abcdef')

})
