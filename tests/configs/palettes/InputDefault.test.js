// ./tests/configs/palettes/InputDefault.test.js

import { InputDefault } from '../../../src/index'



test('InputDefault component returns a truthy value', async () => {

    expect(InputDefault).toBeTruthy()

})



test('InputDefault component returns an object with the standard three validation state color names', async () => {

    expect(InputDefault['default']).toBeTruthy()
    expect(InputDefault['error']).toBeTruthy()
    expect(InputDefault['success']).toBeTruthy()

})
