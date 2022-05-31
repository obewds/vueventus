// ./tests/BorderDefault.test.js

import { BorderDefault } from '../../../src/index'


test('BorderDefault component returns a truthy value', async () => {

    expect(BorderDefault).toBeTruthy()

})


test('BorderDefault component returns an object with the standard five default color names', async () => {

    expect(BorderDefault['']).toBe('')
    expect(BorderDefault['default']).toBeTruthy()
    expect(BorderDefault['error']).toBeTruthy()
    expect(BorderDefault['primary']).toBeTruthy()
    expect(BorderDefault['secondary']).toBeTruthy()
    expect(BorderDefault['success']).toBeTruthy()

})
