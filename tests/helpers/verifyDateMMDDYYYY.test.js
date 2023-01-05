// ./tests/helpers/verifyDateMMDDYYYY.test.js

import { verifyDateMMDDYYYY } from '../../src/index'


test('verifyDateMMDDYYYY helper module returns a truthy value', async () => {
    
    expect(verifyDateMMDDYYYY).toBeTruthy()

})


test('verifyDateMMDDYYYY() method verifies expected values as true', async () => {

    const test1 = verifyDateMMDDYYYY('01/01/0001')
    const test2 = verifyDateMMDDYYYY('12/12/9999')
    const test3 = verifyDateMMDDYYYY('01/01/1899')
    const test4 = verifyDateMMDDYYYY('12/12/2100')

    expect(test1).toBe(true)
    expect(test2).toBe(true)
    expect(test3).toBe(true)
    expect(test4).toBe(true)

})


test('verifyDateMMDDYYYY helper module rejects expected values as false', async () => {

    const test1 = verifyDateMMDDYYYY(12121234)
    const test2 = verifyDateMMDDYYYY('01-01-0001')
    const test3 = verifyDateMMDDYYYY('12.12.9999')
    const test4 = verifyDateMMDDYYYY('00/01/1899')
    const test5 = verifyDateMMDDYYYY('01/00/1899')
    const test6 = verifyDateMMDDYYYY('13/12/2100')
    const test7 = verifyDateMMDDYYYY('01/32/2100')
    
    expect(test1).toBe(false)
    expect(test2).toBe(false)
    expect(test3).toBe(false)
    expect(test4).toBe(false)
    expect(test5).toBe(false)
    expect(test6).toBe(false)
    expect(test7).toBe(false)

})
