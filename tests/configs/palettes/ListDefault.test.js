// ./tests/configs/palettes/ListDefault.test.js

import { ListDefault } from '../../../src/index'



test('ListDefault component returns a truthy value', async () => {

    expect(ListDefault).toBeTruthy()

})



test('ListDefault component returns an object with the standard five default color names', async () => {

    expect(ListDefault['default']).toBe('')
    expect(ListDefault['error']).toBeTruthy()
    expect(ListDefault['primary']).toBeTruthy()
    expect(ListDefault['secondary']).toBeTruthy()
    expect(ListDefault['success']).toBeTruthy()

})
