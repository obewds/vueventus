// ./tests/helpers/stringToFilename.test.js

import { stringToFilename } from '../../src/index'


test('stringToFilename helper module returns a truthy value', async () => {
    
    expect(stringToFilename).toBeTruthy()

})


test('stringToFilename() method converts a string to an expected filename', async () => {
    
    const test = 'Test String'
    
    expect(stringToFilename(test)).toBe('TestString')

})


test('stringToFilename() method converts a string to an expected filename', async () => {
    
    const test = 'Test-String _here'
    
    expect(stringToFilename(test)).toBe('Test-String_here')

})


test('stringToFilename() method converts a string to an expected filename', async () => {
    
    const test = 'Test-String! _@here'
    
    expect(stringToFilename(test)).toBe('Test-String_here')

})


test('stringToFilename() method converts a string to an expected filename', async () => {
    
    const test = 'Test.String._@here.jpg'
    
    expect(stringToFilename(test)).toBe('Test.String._here.jpg')

})


test('stringToFilename() method converts a string to an expected filename', async () => {
    
    const test = 'Test. 12345._@here.jpg'
    
    expect(stringToFilename(test)).toBe('Test.12345._here.jpg')

})
