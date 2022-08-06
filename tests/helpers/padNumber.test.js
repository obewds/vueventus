// ./tests/helpers/padNumber.test.js

import { padNumber } from '../../src/index'


test('padNumber helper module returns a truthy value', async () => {
    
    expect(padNumber).toBeTruthy()

})


test('padNumber() method pads a single digit integer as expected', async () => {
    
    const integer = 5
    const paddedInt = padNumber( integer )
    
    expect( paddedInt ).toBe('05')

})


test('padNumber() method pads a single digit integer with two characters when passed a second optional argument of 3', async () => {
    
    const integer = 5
    const paddedInt = padNumber( integer, 3 )
    
    expect( paddedInt ).toBe('005')

})


test('padNumber() method pads a single digit integer with three characters and with those two characters being the third optional argument of "-", as well as a second optional argument of 4', async () => {
    
    const integer = 5
    const paddedInt = padNumber( integer, 4, "-" )
    
    expect( paddedInt ).toBe('---5')

})
