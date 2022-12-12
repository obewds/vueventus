// ./tests/configs/palettes/ListboxButtonUnderlined.test.js

import { ListboxButtonUnderlined } from '../../../src/index'


test('ListboxButtonUnderlined component returns a truthy value', async () => {

    expect(ListboxButtonUnderlined).toBeTruthy()

})



test('ListboxButtonUnderlined component returns an object with the standard three default color names', async () => {

    expect(ListboxButtonUnderlined['default']).toBeTruthy()
    expect(ListboxButtonUnderlined['error']).toBeTruthy()
    expect(ListboxButtonUnderlined['success']).toBeTruthy()

})
