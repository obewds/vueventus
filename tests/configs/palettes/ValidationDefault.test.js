// ./tests/configs/palettes/ValidationDefault.test.js

import { ValidationDefault } from '../../../src/index'



test('ValidationDefault component returns a truthy value', async () => {

    expect(ValidationDefault).toBeTruthy()

})



test('ValidationDefault component returns an object with the standard three validation state color names', async () => {

    expect(ValidationDefault['default']).toBeTruthy()
    expect(ValidationDefault['error']).toBeTruthy()
    expect(ValidationDefault['success']).toBeTruthy()

})
