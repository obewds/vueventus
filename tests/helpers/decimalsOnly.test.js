// ./tests/helpers/decimalsOnly.test.js

import { decimalsOnly } from '../../src/index'


test('decimalsOnly helper module returns a truthy value', async () => {
    
    expect(decimalsOnly).toBeTruthy()

})


test('decimalsOnly() method returns a new integer number instead of the starting integer number', async () => {
    
    const start = 10
    const test = 11
    
    expect( decimalsOnly( test, start ) ).toBe(11)

})


test('decimalsOnly() method returns a new integer number instead of the starting integer number/test number (as strings)', async () => {
    
    const start = '10'
    const test = '11'
    
    expect( decimalsOnly( test, start ) ).toBeTruthy(11)

})


test('decimalsOnly() method returns a decimal number if the new number has a decimal', async () => {
    
    const start = 10
    const test = 11.123
    
    expect( decimalsOnly( test, start ) ).toBe(11.123)

})


test('decimalsOnly() method returns a decimal number if the new number has a decimal as a string', async () => {
    
    const start = 10
    const test = '11.123'
    
    expect( decimalsOnly( test, start ) ).toBe(11.123)

})


test('decimalsOnly() method returns the starting integer number if the new number is a non-number string', async () => {
    
    const start = 10
    const test = 'abc'
    
    expect( decimalsOnly( test, start ) ).toBe(10)

})
