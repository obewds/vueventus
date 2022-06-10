// ./tests/configs/palettes/InputValidation.test.js

import { InputValidation } from '../../../src/index'



test('InputValidation component returns a truthy value', async () => {

    expect(InputValidation).toBeTruthy()

})



test('InputValidation component returns an object with the standard three validation state color names', async () => {

    expect(InputValidation['default']).toBeTruthy()
    expect(InputValidation['error']).toBeTruthy()
    expect(InputValidation['success']).toBeTruthy()

})
