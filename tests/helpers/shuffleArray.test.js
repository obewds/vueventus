// ./tests/helpers/shuffleArray.test.js

import { shuffleArray } from '../../src/index'


test('shuffleArray helper module returns a truthy value', async () => {

    expect(shuffleArray).toBeTruthy()

})


test('shuffleArray() method shuffles an array of numbers', async () => {

    const test = [1,2,3,4,5]
    const result = shuffleArray(test)
    
    expect(test === result).toBe(false)

})


test('shuffleArray() method shuffles an array of mixed type values', async () => {

    const test = [ '1', 2, false, ['four'], {five: 'test'} ]
    const result = shuffleArray(test)
    
    expect(test === result).toBe(false)

})
