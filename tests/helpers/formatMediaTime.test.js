// ./tests/helpers/formatMediaTime.test.js

import { formatMediaTime } from '../../src/index'


test('formatMediaTime helper module returns a truthy value', async () => {

    expect(formatMediaTime).toBeTruthy()

})


test('formatMediaTime() accepts a number value and returns an expected 00:00 format', async () => {

    const test = formatMediaTime(2.123456)
    
    expect(test).toBe('00:02')

})


test('formatMediaTime() accepts a number value and returns an expected 00:00 format', async () => {

    const test = formatMediaTime(122.123456)
    
    expect(test).toBe('02:02')

})


test('formatMediaTime() accepts a number value over an hour and returns results in 00:00:00 format', async () => {

    const test = formatMediaTime(6069.123456)
    
    expect(test).toBe('01:41:09')

})


test('formatMediaTime() accepts a number value over an hour and returns results in 00:00:00:00 format', async () => {

    const test = formatMediaTime(806069.123456)
    
    expect(test).toBe('09:07:54:29')

})

