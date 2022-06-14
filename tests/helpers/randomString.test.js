// ./tests/helpers/randomString.test.js

import { randomString } from '../../src/index'


test('randomString helper module returns a truthy value', async () => {

    expect(randomString).toBeTruthy()

})


test('randomString() method returns a 10 character long random string by default', async () => {

    const test = randomString()
    
    expect(test.length).toBe(10)

})


test('randomString() method returns a 5 character long random string when an argument of 5 is passed in', async () => {

    const test = randomString(5)
    
    expect(test.length).toBe(5)

})


test('randomString() method returns a 35 character long random string when an argument of 35 is passed in', async () => {

    const test = randomString(35)
    
    expect(test.length).toBe(35)

})


test('randomString() method returns a 100 character long random string when an argument of 100 is passed in', async () => {

    const test = randomString(100)
    
    expect(test.length).toBe(100)

})
