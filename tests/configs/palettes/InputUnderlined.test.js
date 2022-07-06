// ./tests/configs/palettes/InputUnderlined.test.js

import { InputUnderlined } from '../../../src/index'



test('InputUnderlined component returns a truthy value', async () => {

    expect(InputUnderlined).toBeTruthy()

})



test('InputUnderlined component returns an object with the standard three validation state color names', async () => {

    expect(InputUnderlined['default']).toBeTruthy()
    expect(InputUnderlined['error']).toBeTruthy()
    expect(InputUnderlined['success']).toBeTruthy()

})
