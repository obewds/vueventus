// ./tests/ButtonOutline.test.js

import { ButtonOutline } from '../../../src/index'


test('ButtonOutline component returns a truthy value', async () => {

    expect(ButtonOutline).toBeTruthy()

})


test('ButtonOutline component returns an object with the standard five default color names', async () => {

    expect(ButtonOutline['default']).toBeTruthy()
    expect(ButtonOutline['error']).toBeTruthy()
    expect(ButtonOutline['primary']).toBeTruthy()
    expect(ButtonOutline['secondary']).toBeTruthy()
    expect(ButtonOutline['success']).toBeTruthy()

})
