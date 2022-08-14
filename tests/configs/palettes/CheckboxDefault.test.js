// ./tests/configs/palettes/CheckboxDefault.test.js

import { CheckboxDefault } from '../../../src/index'


test('CheckboxDefault component returns a truthy value', async () => {

    expect(CheckboxDefault).toBeTruthy()

})


test('CheckboxDefault component returns an object with the standard five default color names', async () => {

    expect(CheckboxDefault['default']).toBeTruthy()
    expect(CheckboxDefault['error']).toBeTruthy()
    expect(CheckboxDefault['primary']).toBeTruthy()
    expect(CheckboxDefault['secondary']).toBeTruthy()
    expect(CheckboxDefault['success']).toBeTruthy()

})
