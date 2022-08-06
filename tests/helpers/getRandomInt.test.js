// ./tests/helpers/getRandomInt.test.js

import { getRandomInt } from '../../src/index'


test('getRandomInt helper module returns a truthy value', async () => {
    
    expect(getRandomInt).toBeTruthy()

})


test('getRandomInt() method does not return an integer up/down one digit when given a 2 digit total range', async () => {
    
    const testMin = 1
    const testMax = 2
    const randomInt = getRandomInt(testMin, testMax)
    
    expect( randomInt ).not.toBe(0)
    expect( randomInt ).not.toBe(3)
    expect( randomInt ).toBeGreaterThanOrEqual(testMin)
    expect( randomInt ).toBeLessThanOrEqual(testMax)


})
