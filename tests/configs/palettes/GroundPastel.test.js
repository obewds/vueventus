// ./tests/GroundPastel.test.js

import { GroundPastel } from '../../../src/index'



test('GroundPastel component returns a truthy value', async () => {

    expect(GroundPastel).toBeTruthy()

})



test('GroundPastel component returns an object with the standard five pastel color names', async () => {

    expect(GroundPastel['default']).toBeTruthy()
    expect(GroundPastel['error']).toBeTruthy()
    expect(GroundPastel['primary']).toBeTruthy()
    expect(GroundPastel['secondary']).toBeTruthy()
    expect(GroundPastel['success']).toBeTruthy()

})
