// ./tests/helpers/formatMediaTime.test.js

import { formatMediaTime } from '../../src/index'


test('formatMediaTime helper module returns a truthy value', async () => {

    expect(formatMediaTime).toBeTruthy()

})


test('formatMediaTime() accepts a number value and returns an expected result', async () => {

    const test = formatMediaTime(122.123456)
    
    expect(test).toBe('02:02')

})

// TODO update helper to include hours, optionally, and make a test for the output

