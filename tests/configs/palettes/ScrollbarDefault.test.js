// ./tests/configs/palettes/ScrollbarDefault.test.js

import { ScrollbarDefault } from '../../../src/index'


test('ScrollbarDefault component returns a truthy value', async () => {

    expect(ScrollbarDefault).toBeTruthy()

})


test('ScrollbarDefault component returns an object with the standard five default color names', async () => {

    expect(ScrollbarDefault['']).toBe('')
    expect(ScrollbarDefault['default']).toBeTruthy()
    expect(ScrollbarDefault['error']).toBeTruthy()
    expect(ScrollbarDefault['primary']).toBeTruthy()
    expect(ScrollbarDefault['secondary']).toBeTruthy()
    expect(ScrollbarDefault['success']).toBeTruthy()

})
