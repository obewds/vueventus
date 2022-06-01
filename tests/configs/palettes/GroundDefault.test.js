// ./tests/configs/palettes/GroundDefault.test.js

import { GroundDefault } from '../../../src/index'



test('GroundDefault component returns a truthy value', async () => {

    expect(GroundDefault).toBeTruthy()

})



test('GroundDefault component returns an object with the standard five default color names', async () => {

    expect(GroundDefault['default']).toBe('')
    expect(GroundDefault['error']).toBeTruthy()
    expect(GroundDefault['primary']).toBeTruthy()
    expect(GroundDefault['secondary']).toBeTruthy()
    expect(GroundDefault['success']).toBeTruthy()

})
