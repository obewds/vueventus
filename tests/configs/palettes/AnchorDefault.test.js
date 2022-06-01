// ./tests/configs/palettes/AnchorDefault.test.js

import { AnchorDefault } from '../../../src/index'


test('AnchorDefault component returns a truthy value', async () => {

    expect(AnchorDefault).toBeTruthy()

})


test('AnchorDefault component returns an object with the standard five default color names', async () => {

    expect(AnchorDefault['default']).toBeTruthy()
    expect(AnchorDefault['error']).toBeTruthy()
    expect(AnchorDefault['primary']).toBeTruthy()
    expect(AnchorDefault['secondary']).toBeTruthy()
    expect(AnchorDefault['success']).toBeTruthy()

})
