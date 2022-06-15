// ./tests/helpers/formatBytes.test.js

import { formatBytes } from '../../src/index'


test('formatBytes helper module returns a truthy value', async () => {
    
    expect(formatBytes).toBeTruthy()

})


test('formatBytes() an expected result when passed a zero value', async () => {

    const test = formatBytes(0)
    
    expect(test).toBe('0 Bytes')

})


test('formatBytes() accepts a decimal number value with a wrong negative decimal place value passed as a second argument, and still returns an expected result', async () => {

    const test = formatBytes(1000.123, -1)
    
    expect(test).toBe('1000 Bytes')

})


test('formatBytes() accepts a decimal number value with a wrong negative decimal place value passed as a second argument, and still returns an expected result', async () => {

    const test = formatBytes(1000.12345, 5)
    
    expect(test).toBe('1000.12345 Bytes')

})


test('formatBytes() accepts a number value and returns an expected result', async () => {

    const test = formatBytes(1000)
    
    expect(test).toBe('1000 Bytes')

})


test('formatBytes() accepts a number as string value and returns an expected result', async () => {

    const test = formatBytes('1000')
    
    expect(test).toBe('1000 Bytes')

})


test('formatBytes() accepts a KB sized value and returns an expected result', async () => {

    const test = formatBytes('10000')
    
    expect(test).toBe('9.77 KB')
    expect(formatBytes(10000)).toBe('9.77 KB')

})


test('formatBytes() accepts a MB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000')
    
    expect(test).toBe('9.54 MB')

})


test('formatBytes() accepts a GB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000')
    
    expect(test).toBe('9.31 GB')

})


test('formatBytes() accepts a TB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000000')
    
    expect(test).toBe('9.09 TB')

})


test('formatBytes() accepts a PB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000000000')
    
    expect(test).toBe('8.88 PB')

})


test('formatBytes() accepts a EB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000000000000')
    
    expect(test).toBe('8.67 EB')

})


test('formatBytes() accepts a ZB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000000000000000')
    
    expect(test).toBe('8.47 ZB')

})


test('formatBytes() accepts a YB sized value and returns an expected result', async () => {

    const test = formatBytes('10000000000000000000000000')
    
    expect(test).toBe('8.27 YB')

})
