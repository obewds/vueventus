// ./tests/helpers/monthNames.test.js

import { monthNames } from '../../src/index'


test('monthNames helper module returns a truthy value', async () => {
    
    expect(monthNames).toBeTruthy()

})


test('monthNames() method returns all 6 expected month arrays of data', async () => {
    
    const testMonths = monthNames()

    const count = {
        english: {
            short: testMonths.english.short.length,
            long: testMonths.english.long.length,
        },
        french: {
            short: testMonths.french.short.length,
            long: testMonths.french.long.length,
        },
        spanish: {
            short: testMonths.spanish.short.length,
            long: testMonths.spanish.long.length,
        }
    }
    
    expect(count.english.long).toBe(12)
    expect(count.english.short).toBe(12)
    expect(count.french.long).toBe(12)
    expect(count.french.short).toBe(12)
    expect(count.spanish.long).toBe(12)
    expect(count.spanish.short).toBe(12)

})
