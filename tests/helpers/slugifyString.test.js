// ./tests/helpers/slugifyString.test.js

import { slugifyString } from '../../src/index'


test('slugifyString helper module returns a truthy value', async () => {

    expect(slugifyString).toBeTruthy()

})


test('slugifyString() method converts a sentence to an expected slug string', async () => {

    const test = 'This is a test.'
    
    expect( slugifyString( test ) ).toBe('this-is-a-test')

})


test('slugifyString() method converts a sentence to an expected slug string', async () => {

    const test = ' This is a 2nd test!!!'
    
    expect( slugifyString( test ) ).toBe('this-is-a-2nd-test')

})


test('slugifyString() method converts a sentence to an expected slug string', async () => {

    const test = 'And (&) THIS is a 3rd?!?!'
    
    expect( slugifyString( test ) ).toBe('and-this-is-a-3rd')

})


test('slugifyString() method converts a sentence to an expected slug string with a custom separator', async () => {

    const test = 'This is a test.'
    
    expect( slugifyString( test, '_' ) ).toBe('this_is_a_test')

})


test('slugifyString() method returns an empty string if passed an empty string', async () => {

    const test = ''
    
    expect( slugifyString( test ) ).toBe('')

})


test('slugifyString() method returns a dash separated string if passed a null separator value', async () => {

    const test = 'test string'
    
    expect( slugifyString( test, null ) ).toBe('test-string')

})
