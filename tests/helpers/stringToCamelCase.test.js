// ./tests/helpers/stringToCamelCase.test.js

import { stringToCamelCase } from '../../src/index'


test('stringToCamelCase helper module returns a truthy value', async () => {
    
    expect(stringToCamelCase).toBeTruthy()

})


test('stringToCamelCase() method converts a string to camelCase as expected', async () => {
    
    const test = 'test string here'
    
    expect(stringToCamelCase(test)).toBe('testStringHere')

})


test('stringToCamelCase() method converts a title case string to camelCase as expected', async () => {
    
    const test = 'Test String Here'
    
    expect(stringToCamelCase(test)).toBe('testStringHere')

})


test('stringToCamelCase() method converts a pascal and lowercase string to camelCase as expected', async () => {
    
    const test = 'TestString here'
    
    expect(stringToCamelCase(test)).toBe('testStringHere')

})


test('stringToCamelCase() method converts a camel and title case string to camelCase as expected', async () => {
    
    const test = 'Test stringHere'
    
    expect(stringToCamelCase(test)).toBe('testStringHere')

})


test('stringToCamelCase() method converts a kebab case string to camelCase as expected', async () => {
    
    const test = 'test-string-here'
    
    expect(stringToCamelCase(test)).toBe('testStringHere')

})
