// ./tests/configs/palettes/ListboxButtonDefault.test.js

import { ListboxButtonDefault } from '../../../src/index'


test('ListboxButtonDefault component returns a truthy value', async () => {

    expect(ListboxButtonDefault).toBeTruthy()

})



test('ListboxButtonDefault component returns an object with the standard three default color names', async () => {

    expect(ListboxButtonDefault['default']).toBeTruthy()
    expect(ListboxButtonDefault['error']).toBeTruthy()
    expect(ListboxButtonDefault['success']).toBeTruthy()

})
