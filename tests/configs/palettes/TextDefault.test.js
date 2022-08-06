// ./tests/configs/palettes/TextDefault.test.js

import { TextDefault } from '../../../src/index'



test('TextDefault component returns a truthy value', async () => {

    expect(TextDefault).toBeTruthy()

})



test('TextDefault component returns an object with the standard five default color names', async () => {

    expect(TextDefault['default']).toBe('')
    expect(TextDefault['error']).toBeTruthy()
    expect(TextDefault['primary']).toBeTruthy()
    expect(TextDefault['secondary']).toBeTruthy()
    expect(TextDefault['success']).toBeTruthy()
    expect(TextDefault['neutral']).toBeTruthy()

})
