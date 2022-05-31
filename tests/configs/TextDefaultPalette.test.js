// ./tests/TextDefaultPalette.test.js

import { TextDefaultPalette } from '../../src/index'



test('TextDefaultPalette component returns a truthy value', async () => {

    expect(TextDefaultPalette).toBeTruthy()

})



test('TextDefaultPalette.default component returns an object with a truthy default property', async () => {

    expect(TextDefaultPalette.default).toBeTruthy()

})



test('TextDefaultPalette.default.colors component returns an object with a truthy colors property', async () => {

    expect(TextDefaultPalette.default.colors).toBeTruthy()

})



test('TextDefaultPalette component returns an object with the standard five default color names', async () => {

    expect(TextDefaultPalette.default.colors['default']).toBe('')
    expect(TextDefaultPalette.default.colors['error']).toBeTruthy()
    expect(TextDefaultPalette.default.colors['primary']).toBeTruthy()
    expect(TextDefaultPalette.default.colors['secondary']).toBeTruthy()
    expect(TextDefaultPalette.default.colors['success']).toBeTruthy()

})