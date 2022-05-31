// ./tests/GroundPastelPalette.test.js

import { GroundPastelPalette } from '../../src/index'



test('GroundPastelPalette component returns a truthy value', async () => {

    expect(GroundPastelPalette).toBeTruthy()

})



test('GroundPastelPalette.pastel component returns an object with a truthy pastel property', async () => {

    expect(GroundPastelPalette.pastel).toBeTruthy()

})



test('GroundPastelPalette.pastel.colors component returns an object with a truthy colors property', async () => {

    expect(GroundPastelPalette.pastel.colors).toBeTruthy()

})



test('GroundPastelPalette component returns an object with the standard five pastel color names', async () => {

    expect(GroundPastelPalette.pastel.colors['default']).toBeTruthy()
    expect(GroundPastelPalette.pastel.colors['error']).toBeTruthy()
    expect(GroundPastelPalette.pastel.colors['primary']).toBeTruthy()
    expect(GroundPastelPalette.pastel.colors['secondary']).toBeTruthy()
    expect(GroundPastelPalette.pastel.colors['success']).toBeTruthy()

})
