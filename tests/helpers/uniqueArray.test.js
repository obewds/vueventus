// ./tests/helpers/uniqueArray.test.js

import { uniqueArray } from '../../src/index'


test('uniqueArray helper module returns a truthy value', async () => {
    
    expect(uniqueArray).toBeTruthy()

})


test('uniqueArray() method returns a unique array when passed an array with duplicates of various primitive types', async () => {
    
    const array = [true, 12, 'test string', {prop:'test'}, [3,'a']]
    const testArray = [...array, ...array]
    const unique = uniqueArray(testArray)

    expect(unique).toEqual(array)

})
