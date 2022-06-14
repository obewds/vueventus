// ./tests/helpers/camelCaseToTitleCase.test.js

import { camelCaseToTitleCase } from '../../src/index'


test('camelCaseToTitleCase helper module returns a truthy value', async () => {
    
    expect(camelCaseToTitleCase).toBeTruthy()

})


test('camelCaseToTitleCase() method converts a camelCase string to title case string', async () => {
    
    const test = 'testCamelCase'
    
    expect(camelCaseToTitleCase(test)).toBe('Test Camel Case')

})


test('camelCaseToTitleCase() method converts a camelCase string with a number suffix to title case string', async () => {
    
    const test = 'testCamelCase22'
    
    expect(camelCaseToTitleCase(test)).toBe('Test Camel Case22')

})


test('camelCaseToTitleCase() method to not convert a pascal case string to a title case string correctly', async () => {
    
    const test = 'PascalCaseString'
    
    expect(camelCaseToTitleCase(test)).not.toBe('Pascal Case String')
    expect(camelCaseToTitleCase(test)).toBe(' Pascal Case String')

})


test('camelCaseToTitleCase() method to not convert a spaced string to a title case string correctly', async () => {
    
    const test = 'spaced camelCase'
    
    expect(camelCaseToTitleCase(test)).not.toBe('Spaced Camel Case')
    expect(camelCaseToTitleCase(test)).toBe('Spaced camel Case')

})
