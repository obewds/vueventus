// ./tests/helpers/digitsOnly.test.js

import { digitsOnly } from '../../src/index'


test('digitsOnly helper module returns a truthy value', async () => {
    
    expect(digitsOnly).toBeTruthy()

})


test('digitsOnly() method returns a new integer number instead of the starting integer number', async () => {
    
    const start = 10
    const test = 11
    
    expect( digitsOnly( test, start ) ).toBe(11)

})


test('digitsOnly() method returns a new integer number instead of the starting integer number/test number (as strings)', async () => {
    
    const start = '10'
    const test = '11'
    
    expect( digitsOnly( test, start ) ).toBeTruthy(11)

})


test('digitsOnly() method returns the starting integer number if the new number has a decimal', async () => {
    
    const start = 10
    const test = 11.123
    
    expect( digitsOnly( test, start ) ).toBe(10)

})


test('digitsOnly() method returns the starting integer number if the new number has a decimal as a string', async () => {
    
    const start = 10
    const test = '11.123'
    
    expect( digitsOnly( test, start ) ).toBe(10)

})


test('digitsOnly() method returns the starting integer number if the new number is a non-number string', async () => {
    
    const start = 10
    const test = 'abc'
    
    expect( digitsOnly( test, start ) ).toBe(10)

})
