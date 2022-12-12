// ./tests/configs/palettes/ListboxOptionDefault.test.js

import { ListboxOptionDefault } from '../../../src/index'


test('ListboxOptionDefault component returns a truthy value', async () => {

    expect(ListboxOptionDefault).toBeTruthy()

})



test('ListboxOptionDefault component returns an object with the standard three default color names', async () => {

    expect(ListboxOptionDefault['default']).toBeTruthy()
    expect(ListboxOptionDefault['error']).toBeTruthy()
    expect(ListboxOptionDefault['success']).toBeTruthy()

})
