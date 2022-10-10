// ./tests/configs/palettes/FillDefault.test.js

import { FillDefault } from '../../../src/index'


test('FillDefault component returns a truthy value', async () => {

    expect(FillDefault).toBeTruthy()

})


test('FillDefault component returns an object with the standard five default color names', async () => {

    expect(FillDefault['default']).toBeTruthy()
    expect(FillDefault['error']).toBeTruthy()
    expect(FillDefault['primary']).toBeTruthy()
    expect(FillDefault['secondary']).toBeTruthy()
    expect(FillDefault['success']).toBeTruthy()

})
