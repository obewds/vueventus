// ./tests/configs/palettes/ButtonSolid.test.js

import { ButtonSolid } from '../../../src/index'


test('ButtonSolid component returns a truthy value', async () => {

    expect(ButtonSolid).toBeTruthy()

})


test('ButtonSolid component returns an object with the standard five default color names', async () => {

    expect(ButtonSolid['default']).toBeTruthy()
    expect(ButtonSolid['error']).toBeTruthy()
    expect(ButtonSolid['primary']).toBeTruthy()
    expect(ButtonSolid['secondary']).toBeTruthy()
    expect(ButtonSolid['success']).toBeTruthy()

})
