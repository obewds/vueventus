// ./tests/configs/palettes/ListboxOptionUnderlined.test.js

import { ListboxOptionUnderlined } from '../../../src/index'


test('ListboxOptionUnderlined component returns a truthy value', async () => {

    expect(ListboxOptionUnderlined).toBeTruthy()

})



test('ListboxOptionUnderlined component returns an object with the standard three default color names', async () => {

    expect(ListboxOptionUnderlined['default']).toBeTruthy()
    expect(ListboxOptionUnderlined['error']).toBeTruthy()
    expect(ListboxOptionUnderlined['success']).toBeTruthy()

})
