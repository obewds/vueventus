// ./tests/helpers/verifyStringLengths.test.js

import { randomString, verifyStringLengths } from '../../src/index'


test('verifyStringLengths helper module returns a truthy value', async () => {
    
    expect(verifyStringLengths).toBeTruthy()

})


test('verifyStringLengths() method verifies expected values as true', async () => {

    const test1 = verifyStringLengths( randomString(1) )
    const test2 = verifyStringLengths( randomString(50) )
    const test3 = verifyStringLengths( randomString(100) )
    const test4 = verifyStringLengths( '', 0 )
    const test5 = verifyStringLengths( '', 0, 0 )
    const test6 = verifyStringLengths( randomString(10), 10, 10 )

    expect(test1).toBe(true)
    expect(test2).toBe(true)
    expect(test3).toBe(true)
    expect(test4).toBe(true)
    expect(test5).toBe(true)
    expect(test6).toBe(true)

})


test('verifyStringLengths helper module rejects expected values as false', async () => {

    const test1 = verifyStringLengths( 12121234 )
    const test2 = verifyStringLengths( '' )
    const test3 = verifyStringLengths( randomString(101) )
    const test4 = verifyStringLengths( randomString(10), 1, 9 )
    const test5 = verifyStringLengths( randomString(5), 10 )
    
    expect(test1).toBe(false)
    expect(test2).toBe(false)
    expect(test3).toBe(false)
    expect(test4).toBe(false)
    expect(test5).toBe(false)

})
