// ./tests/helpers/formatNumber.test.js

import { formatNumber } from '../../src/index'


test('formatNumber helper module returns a truthy value', async () => {

    expect(formatNumber).toBeTruthy()

})


test('formatNumber() method returns a value over one thousand formatted with a comma', async () => {

    const test = 123456
    
    expect(formatNumber(test)).toBe('123,456')

})


test('formatNumber() method returns a value over one million formatted with two commas', async () => {

    const test = 123456789
    
    expect(formatNumber(test)).toBe('123,456,789')

})


test('formatNumber() method returns a value over one thousand with decimals formatted with a comma and with a maximum of three decimal places', async () => {

    const test = 123456.1234
    
    expect(formatNumber(test)).toBe('123,456.123')

})
