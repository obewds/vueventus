// ./tests/configs/palettes/RadioDefault.test.js

import { RadioDefault } from '../../../src/index'


test('RadioDefault component returns a truthy value', async () => {

    expect(RadioDefault).toBeTruthy()

})


test('RadioDefault component returns an object with the standard five default color names', async () => {

    expect(RadioDefault['default']).toBeTruthy()
    expect(RadioDefault['error']).toBeTruthy()
    expect(RadioDefault['primary']).toBeTruthy()
    expect(RadioDefault['secondary']).toBeTruthy()
    expect(RadioDefault['success']).toBeTruthy()

})
