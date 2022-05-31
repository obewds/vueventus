// ./tests/BorderDefaultPalette.test.js

import { BorderDefaultPalette } from '../../src/index'



test('BorderDefaultPalette component returns a truthy value', async () => {

    expect(BorderDefaultPalette).toBeTruthy()

})



test('BorderDefaultPalette.default component returns an object with a truthy default property', async () => {

    expect(BorderDefaultPalette.default).toBeTruthy()

})



test('BorderDefaultPalette.default.colors component returns an object with a truthy colors property', async () => {

    expect(BorderDefaultPalette.default.colors).toBeTruthy()

})



test('BorderDefaultPalette component returns an object with the standard five default color names', async () => {

    expect(BorderDefaultPalette.default.colors['']).toBe('')
    expect(BorderDefaultPalette.default.colors['default']).toBeTruthy()
    expect(BorderDefaultPalette.default.colors['error']).toBeTruthy()
    expect(BorderDefaultPalette.default.colors['primary']).toBeTruthy()
    expect(BorderDefaultPalette.default.colors['secondary']).toBeTruthy()
    expect(BorderDefaultPalette.default.colors['success']).toBeTruthy()

})