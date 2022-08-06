// ./tests/helpers/formatDateMMDDYYYY.test.js

import { formatDateMMDDYYYY } from '../../src/index'


test('formatDateMMDDYYYY helper module returns a truthy value', async () => {
    
    expect(formatDateMMDDYYYY).toBeTruthy()

})


test('formatDateMMDDYYYY helper module returns a default "/" separated date string in "MM/DD/YYYY" format', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateMMDDYYYY(testDate)
    
    expect(testString).toBe('10/10/2020')

})


test('formatDateMMDDYYYY helper module returns a "-" separated date string in "MM-DD-YYYY" format when passed a second optional argument of "-"', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateMMDDYYYY(testDate, '-')
    
    expect(testString).toBe('10-10-2020')

})
