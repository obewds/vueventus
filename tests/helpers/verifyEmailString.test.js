// ./tests/helpers/verifyEmailString.test.js

import { verifyEmailString } from '../../src/index'


test('verifyEmailString helper module returns a truthy value', async () => {
    
    expect(verifyEmailString).toBeTruthy()

})


test('verifyEmailString() method verifies expected values as true', async () => {

    const test1 = verifyEmailString('test@test.aa')
    const test2 = verifyEmailString('test@test.aa.aa')
    const test3 = verifyEmailString('test@test.aaa')
    const test4 = verifyEmailString('test@test.aaa.aa')
    const test5 = verifyEmailString('test.test@test.aaa')
    const test6 = verifyEmailString('test-test@test.aaa')
    const test7 = verifyEmailString('test_test@test.aaa')

    expect(test1).toBe(true)
    expect(test2).toBe(true)
    expect(test3).toBe(true)
    expect(test4).toBe(true)
    expect(test5).toBe(true)
    expect(test6).toBe(true)
    expect(test7).toBe(true)

})


test('verifyEmailString helper module rejects expected values as false', async () => {

    const test1 = verifyEmailString('test.aa')
    const test2 = verifyEmailString('test.aa.aa')
    const test3 = verifyEmailString('test.aa.aaa')
    const test4 = verifyEmailString('test.aaa')
    const test5 = verifyEmailString('test.aaa.aa')
    const test6 = verifyEmailString('test.aaa.aaa')
    const test7 = verifyEmailString('test!@test.aa')
    const test8 = verifyEmailString('test#@test.aa')
    const test9 = verifyEmailString('test$@test.aa')
    const test10 = verifyEmailString('test%@test.aa')
    const test11 = verifyEmailString('test^@test.aa')
    const test12 = verifyEmailString('test&@test.aa')
    const test13 = verifyEmailString('test*@test.aa')
    const test14 = verifyEmailString('test(@test.aa')
    const test15 = verifyEmailString('test)@test.aa')
    const test16 = verifyEmailString('test+@test.aa')
    const test17 = verifyEmailString('test=@test.aa')
    const test18 = verifyEmailString(12345)
    
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
    expect(test12).toBe(false)
    expect(test13).toBe(false)
    expect(test14).toBe(false)
    expect(test15).toBe(false)
    expect(test16).toBe(false)
    expect(test17).toBe(false)
    expect(test18).toBe(false)

})
