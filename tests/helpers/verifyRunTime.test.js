// ./tests/helpers/verifyRunTime.test.js

import { verifyRunTime } from '../../src/index'


test('verifyRunTime helper module returns a truthy value', async () => {
    
    expect(verifyRunTime).toBeTruthy()

})


test('verifyRunTime() method verifies expected values as true', async () => {

    const test1 = verifyRunTime('00:00.000')
    const test2 = verifyRunTime('01:01.001')
    const test3 = verifyRunTime('59:59.999')
    const test4 = verifyRunTime('01:01.00', 2)
    const test5 = verifyRunTime('01:01.99', 2)
    const test6 = verifyRunTime('59:59.00', 2)
    const test7 = verifyRunTime('59:59.99', 2)
    const test8 = verifyRunTime('01:01.0', 1)
    const test9 = verifyRunTime('59:59.9', 1)
    const test10 = verifyRunTime('01:01.9', 1)
    const test11 = verifyRunTime('59:59.0', 1)
    const test12 = verifyRunTime('00.000')
    const test13 = verifyRunTime('00.00', 2)
    const test14 = verifyRunTime('00.0', 1)
    const test15 = verifyRunTime('00:00:00.000')
    const test16 = verifyRunTime('23:59:00.000')
    const test17 = verifyRunTime('23:59:00.00', 2)
    const test18 = verifyRunTime('23:59:00.0', 1)
    const test19 = verifyRunTime('00.000')

    expect(test1).toBe(true)
    expect(test2).toBe(true)
    expect(test3).toBe(true)
    expect(test4).toBe(true)
    expect(test5).toBe(true)
    expect(test6).toBe(true)
    expect(test7).toBe(true)
    expect(test8).toBe(true)
    expect(test9).toBe(true)
    expect(test10).toBe(true)
    expect(test11).toBe(true)
    expect(test12).toBe(true)
    expect(test13).toBe(true)
    expect(test14).toBe(true)
    expect(test15).toBe(true)
    expect(test16).toBe(true)
    expect(test17).toBe(true)
    expect(test18).toBe(true)
    expect(test19).toBe(true)

})


test('verifyRunTime helper module rejects expected values as false', async () => {

    const test1 = verifyRunTime(123)
    const test2 = verifyRunTime(123.123)
    const test3 = verifyRunTime('0')
    const test4 = verifyRunTime('00')
    const test5 = verifyRunTime('000')
    const test6 = verifyRunTime('24:59:59.999')
    const test7 = verifyRunTime('23:60:59.999')
    const test8 = verifyRunTime('23:59:60.999')
    const test9 = verifyRunTime('23:59:60', 0)
    const test10 = verifyRunTime('23:59:59', 1)
    const test11 = verifyRunTime('23:59:59', 2)
    
    expect(test1).toBe(false)
    expect(test2).toBe(false)
    expect(test3).toBe(false)
    expect(test4).toBe(false)
    expect(test5).toBe(false)
    expect(test6).toBe(false)
    expect(test7).toBe(false)
    expect(test8).toBe(false)
    expect(test9).toBe(false)
    expect(test10).toBe(false)
    expect(test11).toBe(false)

})
