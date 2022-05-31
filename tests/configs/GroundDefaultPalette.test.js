// ./tests/GroundDefaultPalette.test.js

import { GroundDefaultPalette } from '../../src/index'



test('GroundDefaultPalette component returns a truthy value', async () => {

    expect(GroundDefaultPalette).toBeTruthy()

})



test('GroundDefaultPalette.default component returns an object with a truthy default property', async () => {

    expect(GroundDefaultPalette.default).toBeTruthy()

})



test('GroundDefaultPalette.default.colors component returns an object with a truthy colors property', async () => {

    expect(GroundDefaultPalette.default.colors).toBeTruthy()

})



test('GroundDefaultPalette component returns an object with the standard five default color names', async () => {

    expect(GroundDefaultPalette.default.colors['default']).toBe('')
    expect(GroundDefaultPalette.default.colors['error']).toBeTruthy()
    expect(GroundDefaultPalette.default.colors['primary']).toBeTruthy()
    expect(GroundDefaultPalette.default.colors['secondary']).toBeTruthy()
    expect(GroundDefaultPalette.default.colors['success']).toBeTruthy()

})
