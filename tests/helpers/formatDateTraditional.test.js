// ./tests/helpers/formatDateTraditional.test.js

import { formatDateTraditional } from '../../src/index'


test('formatDateTraditional helper module returns a truthy value', async () => {
    
    expect(formatDateTraditional).toBeTruthy()

})


test('formatDateTraditional helper module returns a default english LONG name date string in "MONTH DAY, YEAR" format', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate)
    
    expect(testString).toBe('October 10, 2020')

})


test('formatDateTraditional helper module returns a default english SHORT name date string in "MON DAY, YEAR" format when passed an optional second "short" argument', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate, 'short')
    
    expect(testString).toBe('Oct 10, 2020')

})


test('formatDateTraditional helper module returns a default FRENCH LONG name date string in "MON DAY, YEAR" format when passed an optional second "short" argument', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate, 'long', 'french')
    
    expect(testString).toBe('Octobre 10, 2020')

})


test('formatDateTraditional helper module returns a default FRENCH SHORT name date string in "MON DAY, YEAR" format when passed an optional second "short" argument', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate, 'short', 'french')
    
    expect(testString).toBe('Oct 10, 2020')

})


test('formatDateTraditional helper module returns a default SPANISH LONG name date string in "MON DAY, YEAR" format when passed an optional second "short" argument', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate, 'long', 'spanish')
    
    expect(testString).toBe('Octubre 10, 2020')

})


test('formatDateTraditional helper module returns a default SPANISH SHORT name date string in "MON DAY, YEAR" format when passed an optional second "short" argument', async () => {
    
    let testDate = new Date()

    testDate.setDate('10')
    testDate.setMonth(9)
    testDate.setFullYear('2020')
    
    let testString = formatDateTraditional(testDate, 'short', 'spanish')
    
    expect(testString).toBe('Oct 10, 2020')

})
